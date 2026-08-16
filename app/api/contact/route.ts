import { NextResponse } from "next/server";
import type { ContactFormValues, ContactSubmitResult } from "@/lib/contact";

/**
 * お問い合わせフォームの受け口。
 *
 * 現時点ではメール送信サービスが未接続のため、実際の送信は行わない。
 * バリデーションのみサーバー側でも行い、UIとは責務を分離してある。
 *
 * 本番稼働させる場合は、下記のように環境変数 CONTACT_FORM_ENDPOINT (任意の名前でよい)
 * が設定されている時だけ実送信するようにし、Resend等のSDKをここに接続する。
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from, to: siteConfig.email, subject, text });
 */
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
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json<ContactSubmitResult>(
      { ok: false, message: "未入力の必須項目があります。ご確認ください。" },
      { status: 400 }
    );
  }

  if (!process.env.CONTACT_FORM_ENDPOINT) {
    return NextResponse.json<ContactSubmitResult>(
      {
        ok: false,
        message:
          "現在お問い合わせフォームの送信設定が準備中です。お手数ですが、メールまたはお電話にて直接ご連絡ください。",
      },
      { status: 501 }
    );
  }

  // TODO: CONTACT_FORM_ENDPOINT 設定後、実際のメール送信処理をここに実装する。
  return NextResponse.json<ContactSubmitResult>({
    ok: true,
    message: "お問い合わせありがとうございます。内容を確認のうえ、ご連絡いたします。",
  });
}
