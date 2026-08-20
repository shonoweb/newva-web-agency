export interface CampaignOffer {
  badge: string;
  title: string;
  description: string;
  regularPriceLabel: string;
  regularPrice: string;
  campaignPriceLabel: string;
  campaignPriceNum: string;
  campaignPriceUnit: string;
  monthlyLabel: string;
  monthlyPrice: string;
  monthlyItems: string[];
  ctaLabel: string;
  /** Contactフォームの「ご希望のプラン」選択肢と一致させる値 */
  planValue: string;
  supportNote: string;
  priceNote: string;
}

/**
 * 現時点では料金は仮設定。金額・条件を変更する場合はこのファイルのみ編集すればよい。
 * 通常プラン（data/pricing.ts, 2プラン構成）は削除していないため、
 * 将来キャンペーンを終了する場合は components/sections/Pricing.tsx の表示を
 * 元のプラン一覧に戻すだけで復元できる。
 */
export const campaignOffer: CampaignOffer = {
  badge: "先着10店舗限定",
  title: "実績制作キャンペーン",
  description:
    "ベーシックプラン相当のホームページ制作を、制作実績への掲載にご協力いただける店舗様限定で特別価格にてご提供します。",
  regularPriceLabel: "通常制作費",
  regularPrice: "49,800円〜",
  campaignPriceLabel: "キャンペーン制作費",
  campaignPriceNum: "29,800",
  campaignPriceUnit: "円（税込）",
  monthlyLabel: "月額",
  monthlyPrice: "5,000円（税込）",
  monthlyItems: ["サーバー管理", "サイト維持管理", "基本サポート"],
  ctaLabel: "キャンペーン価格で相談する",
  planValue: "実績制作キャンペーンについて相談",
  supportNote: "制作後も、お店のWeb担当として継続的にサポートします。",
  priceNote: "※料金は税込です。内容・ページ数により変動する場合があります。",
};
