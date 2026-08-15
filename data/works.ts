export interface Work {
  /** URL slug / React key */
  id: string;
  /** サイト名 */
  title: string;
  /** カード上に表示する短いカテゴリーラベル */
  category: string;
  description: string;
  /** public/ からの相対パス */
  image: string;
  /** 実サイトが公開されたらライブURLを設定する。未設定の間は「サイトを見る」は非リンク表示になる */
  url?: string;
  /**
   * true: まだ実績ではなくデザインイメージのプレースホルダー
   * false: 実際に納品した制作実績
   */
  isPlaceholder: boolean;
}

/**
 * 制作実績データ。
 * 新しい実績を追加する場合は、この配列にオブジェクトを1件追加するだけで
 * SAMPLEセクションの横スクロールポートフォリオへ自動的に反映される。
 * 画像を差し替える場合は image のパスを public/images/works/ 配下の
 * 新しいファイルパスに変更するだけでよい。
 */
export const works: Work[] = [
  {
    id: "yakiniku",
    title: "高級焼肉店サイト",
    category: "焼肉店",
    description: "重厚感のある黒基調で、素材へのこだわりを伝えるデザイン。",
    image: "/images/works/portfolio-yakiniku-1.svg",
    isPlaceholder: true,
  },
  {
    id: "cafe",
    title: "カフェサイト",
    category: "カフェ",
    description: "あたたかみのあるトーンで、居心地の良さを伝えるデザイン。",
    image: "/images/works/portfolio-cafe-1.svg",
    isPlaceholder: true,
  },
  {
    id: "restaurant",
    title: "レストランサイト",
    category: "レストラン",
    description: "上質な世界観と写真を活かした、記憶に残るデザイン。",
    image: "/images/works/portfolio-restaurant-1.svg",
    isPlaceholder: true,
  },
  {
    id: "salon",
    title: "美容室サイト",
    category: "美容室",
    description: "洗練された雰囲気とご予約導線を両立したデザイン。",
    image: "/images/works/portfolio-salon-1.svg",
    isPlaceholder: true,
  },
];
