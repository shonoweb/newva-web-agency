export interface MainOffer {
  /** 制作費カードのラベル */
  priceLabel: string;
  /** キャッチコピー */
  catchphrase: string;
  priceNum: string;
  priceUnit: string;
  /** 制作費に含まれる内容 */
  features: string[];
  /** 制作費の注意書き（小さく表示） */
  priceNote: string;
  /** 月額保守・運用費 */
  monthlyLabel: string;
  monthlyPriceNum: string;
  monthlyPriceUnit: string;
  /** 月額に含まれる内容 */
  monthlyFeatures: string[];
  regularEditLabel: string;
  regularEditExamples: string[];
  majorEditLabel: string;
  majorEditExamples: string[];
  ctaLabel: string;
  /** Contactフォームの「ご希望のプラン」選択肢と一致させる値 */
  planValue: string;
}

/**
 * 2026年10月1日からの正式料金体系（1プラン）。
 * 金額・条件を変更する場合はこのファイルのみ編集すればよい。
 */
export const campaignOffer: MainOffer = {
  priceLabel: "制作費",
  catchphrase: "飲食店のホームページ制作に必要なものを、わかりやすい料金で。",
  priceNum: "49,800",
  priceUnit: "円（税込）",
  features: [
    "ページ数制限なし",
    "スマホ対応（レスポンシブデザイン）",
    "オリジナルデザイン",
    "SEO対策",
    "GA4の導入・設定",
    "Google Search Consoleの設定",
    "独自ドメイン接続",
    "お問い合わせ・予約導線の設置",
    "公開までのサポート",
  ],
  priceNote: "※一般的な飲食店ホームページの構成範囲内。特殊機能・大規模サイトは別途お見積りとなります。",
  monthlyLabel: "月額保守・運用費",
  monthlyPriceNum: "5,000",
  monthlyPriceUnit: "円（税込）/ 月",
  monthlyFeatures: [
    "通常修正：月5回まで",
    "大規模修正：月1回まで",
    "サーバー・ドメイン管理サポート",
    "軽微なSEOサポート",
    "不具合対応",
    "運用に関する相談サポート",
  ],
  regularEditLabel: "通常修正の例",
  regularEditExamples: ["テキスト変更", "写真差し替え", "営業時間変更", "メニュー・料金変更など"],
  majorEditLabel: "大規模修正の例",
  majorEditExamples: ["新しいページの追加", "セクションの大幅な変更", "レイアウトの大幅変更", "サイト構成の変更"],
  ctaLabel: "無料相談する",
  planValue: "ホームページ制作について相談",
};
