import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: { absolute: "プライバシーポリシー | NEWVA WEB AGENCY" },
  description:
    "NEWVA WEB AGENCYのプライバシーポリシーです。個人情報の取得、利用目的、管理方法などについてご案内します。",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "1. 個人情報の取得について",
    body: (
      <>
        <p>当サイトでは、お問い合わせフォームを通じて、以下の情報を取得する場合があります。</p>
        <p>
          ・お名前
          <br />
          ・店舗名・会社名
          <br />
          ・メールアドレス
          <br />
          ・お問い合わせ内容
          <br />
          ・その他、お問い合わせ時にご入力いただいた情報
        </p>
      </>
    ),
  },
  {
    title: "2. 個人情報の利用目的",
    body: (
      <>
        <p>取得した個人情報は、以下の目的で利用します。</p>
        <p>
          ・お問い合わせへの回答
          <br />
          ・Webサイト制作に関するご相談、お見積り、ご提案
          <br />
          ・サービス提供に必要な連絡
          <br />
          ・制作およびサポートに関する連絡
          <br />
          ・サービス品質向上のための参考
        </p>
      </>
    ),
  },
  {
    title: "3. 個人情報の第三者提供について",
    body: <p>取得した個人情報は、法令に基づく場合を除き、ご本人の同意なく第三者へ提供することはありません。</p>,
  },
  {
    title: "4. 個人情報の管理",
    body: (
      <p>
        当方は、取得した個人情報について、漏えい、紛失、不正アクセスなどを防止するため、適切な安全管理に努めます。
      </p>
    ),
  },
  {
    title: "5. 外部サービスについて",
    body: (
      <>
        <p>当サイトでは、サイト運営やアクセス解析、お問い合わせ対応などのために外部サービスを利用する場合があります。</p>
        <p>各サービスにおける情報の取り扱いについては、各サービス提供者のプライバシーポリシーをご確認ください。</p>
      </>
    ),
  },
  {
    title: "6. Cookieについて",
    body: (
      <>
        <p>当サイトでは、サイトの利便性向上やアクセス状況の把握などを目的として、Cookieを使用する場合があります。</p>
        <p>ブラウザの設定によりCookieを無効にすることも可能です。</p>
      </>
    ),
  },
  {
    title: "7. 個人情報の開示・訂正・削除について",
    body: <p>ご本人から個人情報の開示、訂正、削除等のご希望があった場合は、ご本人確認のうえ、適切に対応します。</p>,
  },
  {
    title: "8. プライバシーポリシーの変更",
    body: (
      <>
        <p>本ポリシーは、必要に応じて内容を変更する場合があります。</p>
        <p>変更後のプライバシーポリシーは、当サイトに掲載した時点から適用されます。</p>
      </>
    ),
  },
  {
    title: "9. お問い合わせ",
    body: <p>本ポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main
      id="main"
      className="pt-[calc(var(--header-h)+40px)] pb-16 sm:pt-[calc(var(--header-h)+64px)] sm:pb-[clamp(72px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <Link
          href="/#contact"
          className="mb-6 inline-flex min-h-11 items-center text-[0.85rem] text-ink-soft transition-colors duration-200 hover:text-ink"
        >
          ← サイトに戻る
        </Link>

        <SectionHeading eyebrow="PRIVACY POLICY" title="プライバシーポリシー" align="left" className="mb-12 max-w-2xl md:mb-16" />

        <div className="mx-auto max-w-[720px] text-[0.95rem] leading-[1.9] text-ink-soft">
          <p className="mb-10 text-pretty break-keep">
            NEWVA WEB AGENCY（以下「当方」）は、当サイトをご利用いただく方の個人情報を適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-3 text-[1.05rem] font-bold text-ink">{section.title}</h2>
                <div className="flex flex-col gap-2 text-pretty break-keep">{section.body}</div>
              </section>
            ))}
          </div>

          <p className="mt-14 text-[0.88rem] text-ink-faint">
            制定日：2026年8月29日
            <br />
            NEWVA WEB AGENCY
          </p>
        </div>
      </div>
    </main>
  );
}
