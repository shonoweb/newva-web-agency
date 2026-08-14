export type WorkCategory = "restaurant" | "beauty" | "shop";

export interface Work {
  /** URL slug / React key */
  id: string;
  /** カード見出し */
  title: string;
  /** サムネイル左上に表示する業種タグ */
  tag: string;
  category: WorkCategory;
  description: string;
  /** public/ からの相対パス */
  image: string;
  /** 実サイトが公開されたらライブURLを設定する。未公開の間は undefined のままにする */
  url?: string;
  tags: string[];
  /**
   * true: まだ実績ではなくデザインイメージのプレースホルダー
   * false: 実際に納品した制作実績
   */
  isPlaceholder: boolean;
}

export const workCategoryFilters: { value: WorkCategory | "all"; label: string }[] = [
  { value: "all", label: "すべて" },
  { value: "restaurant", label: "飲食店サイト" },
  { value: "beauty", label: "美容系サイト" },
  { value: "shop", label: "個人店サイト" },
];

/**
 * 制作実績データ。
 * 新しい実績を追加する場合は、この配列にオブジェクトを1件追加するだけで
 * Works セクションのフィルター・グリッド双方に自動的に反映される。
 */
export const works: Work[] = [
  {
    id: "yakiniku",
    title: "高級焼肉店サイト",
    tag: "焼肉店",
    category: "restaurant",
    description: "重厚感のある黒基調で、素材へのこだわりを伝えるデザイン。",
    image: "/images/works/portfolio-yakiniku-1.svg",
    tags: ["飲食店", "焼肉", "高級店"],
    isPlaceholder: true,
  },
  {
    id: "cafe",
    title: "カフェサイト",
    tag: "カフェ",
    category: "restaurant",
    description: "あたたかみのあるトーンで、居心地の良さを伝えるデザイン。",
    image: "/images/works/portfolio-cafe-1.svg",
    tags: ["飲食店", "カフェ"],
    isPlaceholder: true,
  },
  {
    id: "restaurant",
    title: "レストランサイト",
    tag: "レストラン",
    category: "restaurant",
    description: "上質な世界観と写真を活かした、記憶に残るデザイン。",
    image: "/images/works/portfolio-restaurant-1.svg",
    tags: ["飲食店", "レストラン"],
    isPlaceholder: true,
  },
  {
    id: "salon",
    title: "美容室サイト",
    tag: "美容室",
    category: "beauty",
    description: "洗練された雰囲気とご予約導線を両立したデザイン。",
    image: "/images/works/portfolio-salon-1.svg",
    tags: ["美容室", "サロン"],
    isPlaceholder: true,
  },
  {
    id: "nail",
    title: "ネイルサロンサイト",
    tag: "ネイルサロン",
    category: "beauty",
    description: "デザイン例が見やすい、ギャラリー中心の構成。",
    image: "/images/works/portfolio-nail-1.svg",
    tags: ["美容室", "ネイル"],
    isPlaceholder: true,
  },
  {
    id: "spa",
    title: "エステサロンサイト",
    tag: "エステサロン",
    category: "beauty",
    description: "余白を活かした、上質で落ち着いた印象のデザイン。",
    image: "/images/works/portfolio-spa-1.svg",
    tags: ["美容室", "エステ"],
    isPlaceholder: true,
  },
  {
    id: "zakka",
    title: "雑貨店サイト",
    tag: "雑貨店",
    category: "shop",
    description: "商品の魅力が伝わる、シンプルで見やすいデザイン。",
    image: "/images/works/portfolio-zakka-1.svg",
    tags: ["個人店", "雑貨"],
    isPlaceholder: true,
  },
  {
    id: "select",
    title: "ショップサイト",
    tag: "セレクトショップ",
    category: "shop",
    description: "ブランドの世界観を大切にしたデザイン。",
    image: "/images/works/portfolio-select-1.svg",
    tags: ["個人店", "セレクトショップ"],
    isPlaceholder: true,
  },
  {
    id: "service",
    title: "サービス業サイト",
    tag: "サービス業",
    category: "shop",
    description: "お店の強みや想いが伝わる、信頼感のあるデザイン。",
    image: "/images/works/portfolio-service-1.svg",
    tags: ["個人店", "サービス業"],
    isPlaceholder: true,
  },
];
