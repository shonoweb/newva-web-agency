import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";
import type { ContactFormValues, ContactSubmitResult } from "@/lib/contact";

/**
 * お問い合わせフォームの受け口。
 * Resend (https://resend.com) 経由で siteConfig.email 宛に通知メールを送信する。
 * RESEND_API_KEY が未設定の間は、実送信せず「準備中」と同等の失敗応答を返す。
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUCCESS_MESSAGE =
  "お問い合わせありがとうございます。内容を確認のうえ、通常1〜2日以内にご返信いたします。";
const FAILURE_MESSAGE = `送信に失敗しました。時間をおいて再度お試しいただくか、${siteConfig.email} まで直接お問い合わせください。`;

/** メール本文に混入すると表示が崩れる制御文字(改行等)を取り除く。 */
function sanitize(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: Partial<ContactFormValues>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const name = body.name?.trim();
  const shop = body.shop?.trim() ?? "";
  const plan = body.plan?.trim() ?? "";
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: "未入力の必須項目があります。ご確認ください。" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: "メールアドレスの形式をご確認ください。" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: FAILURE_MESSAGE },
      { status: 501 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress = process.env.RESEND_FROM_EMAIL || "NEWVA WEB AGENCY <onboarding@resend.dev>";
  const submittedAt = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  const bodyLines = [
    `お名前：${sanitize(name)}`,
    `店舗・会社名：${shop ? sanitize(shop) : "（未入力）"}`,
    `ご希望のプラン：${plan ? sanitize(plan) : "（未入力）"}`,
    `メールアドレス：${sanitize(email)}`,
    "お問い合わせ内容：",
    message.trim(),
    "",
    `送信日時：${submittedAt}`,
  ];

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: siteConfig.email,
    replyTo: email,
    subject: "【NEWVA】Webサイトから新しいお問い合わせ",
    text: bodyLines.join("\n"),
  });

  if (error) {
    console.error("[contact] Resend send failed:", error);
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: FAILURE_MESSAGE },
      { status: 502 }
    );
  }

  return NextResponse.json<ContactSubmitResult>({
    ok: true,
    message: SUCCESS_MESSAGE,
  });
}
