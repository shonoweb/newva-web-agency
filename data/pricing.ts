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
 * 2026年10月1日の料金改定により、複数プラン比較は廃止し
 * data/campaign.ts の単一プラン(制作費49,800円+月額5,000円)に統一した。
 * 将来的に契約数が増えプランを再度分ける場合は、ここに追加すればよい。
 */
export const pricingPlans: PricingPlan[] = [];
