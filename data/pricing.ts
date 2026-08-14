export interface PricingPlan {
  id: string;
  name: string;
  for: string;
  priceNum: string;
  priceUnit: string;
  features: string[];
  monthlyPrice: string;
  monthlyItems: string[];
  featured: boolean;
  badge?: string;
  ctaLabel: string;
  planValue: string;
}

/**
 * 料金・サービス内容は旧LPの内容をそのまま維持している。
 * 金額やプラン内容を変更する場合は、この配列のみを更新すればよい。
 */
export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "ベーシックプラン",
    for: "初めてホームページを作る店舗様向け。必要な情報を分かりやすく届ける基本プランです。",
    priceNum: "49,800",
    priceUnit: "円（税込）",
    features: [
      "店舗ホームページ制作",
      "スマホ対応",
      "Google検索対策",
      "メニュー・店舗情報掲載",
      "予約・お問い合わせフォーム設置",
    ],
    monthlyPrice: "5,000円",
    monthlyItems: ["サーバー管理", "サイト維持管理", "基本サポート"],
    featured: false,
    ctaLabel: "このプランで相談する",
    planValue: "ベーシックプラン（49,800円〜）",
  },
  {
    id: "pro",
    name: "プロプラン",
    for: "お店の魅力を最大限伝え、新しいお客様との接点を増やしたい店舗様向けです。",
    priceNum: "99,800",
    priceUnit: "円（税込）",
    features: [
      "オリジナルデザイン",
      "写真・文章作成サポート",
      "更新代行無料",
      "SEO強化",
      "予約導線作成",
      "集客を意識したページ構成",
      "継続的なWebサポート",
    ],
    monthlyPrice: "9,800円",
    monthlyItems: ["サイト管理", "更新対応", "継続サポート"],
    featured: true,
    badge: "おすすめ",
    ctaLabel: "このプランで相談する",
    planValue: "プロプラン（99,800円〜）",
  },
];
