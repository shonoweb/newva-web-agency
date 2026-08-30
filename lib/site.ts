export const siteConfig = {
  name: "WEB AGENCY",
  tagline: "お店の魅力を、もっと多くの人へ。",
  description:
    "WEB AGENCYは、飲食店・美容室・サロンなど個人店・中小企業に特化したWeb制作会社です。お店の世界観を伝えるオリジナルサイト制作から集客導線設計、ブランディングまでワンストップでサポートします。",
  keywords: [
    "Web制作",
    "ホームページ制作",
    "飲食店",
    "美容室",
    "サロン",
    "集客",
    "ブランディング",
    "デザイン会社",
  ],
  /**
   * 本番ドメインが確定したら差し替える。
   * metadataBase / JSON-LD の url に利用される。
   */
  url: "https://example.com",
  email: "info@example.com",
  phone: "000-0000-0000",
  hours: "毎日 10:00〜24:00",
  hoursNote: "土日祝も対応",
  /**
   * プライバシーポリシーページを公開したら、そのパス/URLをここに設定する。
   * 空文字の間はCONTACTフォームの同意リンクを非活性テキストとして表示し、
   * 存在しないページへの遷移(404)を避ける。
   */
  privacyPolicyUrl: "/privacy",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const headerNavLinks: NavLink[] = [
  { label: "サービス", href: "#service" },
  { label: "制作サンプル", href: "#samples" },
  { label: "料金", href: "#pricing" },
  { label: "制作の流れ", href: "#flow" },
  { label: "私たちの想い", href: "#mission" },
  { label: "よくある質問", href: "#faq" },
];

export const footerNavLinks: NavLink[] = [
  ...headerNavLinks.slice(0, 2),
  { label: "こだわり", href: "#commitment" },
  ...headerNavLinks.slice(2),
  { label: "お問い合わせ", href: "#contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
