"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { pricingPlans } from "@/data/pricing";
import { usePlanContext } from "@/components/PlanContext";

export function Pricing() {
  const { setSelectedPlan } = usePlanContext();
  return (
    <section
      id="pricing"
      className="scroll-mt-[var(--header-h)] bg-surface-alt pb-8 pt-10 sm:pb-[clamp(32px,4vw,56px)] sm:pt-[clamp(40px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="PRICING"
          title="料金プラン"
          description={
            <>
              お店に合わせて選べる、シンプルな料金プラン。
              <br />
              ご要望やサイトの規模に合わせて、最適なプランをご提案します。
            </>
          }
        />

        <Reveal>
          <div className="mx-auto mb-12 max-w-[620px] rounded-[28px] border border-line bg-white px-8 py-8 text-center shadow-[var(--shadow-sm)] sm:px-9">
            <span className="mb-4 inline-block rounded-full bg-dark px-[18px] py-1.5 text-[0.75rem] font-bold tracking-[0.04em] text-white">
              先着10店舗限定
            </span>
            <p className="mb-3 text-[1.15rem] font-extrabold text-ink">実績制作キャンペーン実施中</p>
            <p className="text-[0.9rem] leading-[1.9] text-ink-soft">
              現在、制作実績の掲載にご協力いただける店舗様限定で、特別価格にてホームページ制作を提供しています。
              <br />
              1店舗ごとに丁寧にヒアリングし、お店の魅力が伝わるサイトを制作します。
            </p>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[900px] gap-7 sm:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.1}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[28px] border bg-white px-7 py-10 shadow-[var(--shadow-sm)] sm:px-8",
                  plan.featured ? "border-2 border-dark shadow-[var(--shadow-md)]" : "border-line"
                )}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-dark px-5 py-1.5 text-[0.75rem] font-bold tracking-[0.04em] text-white">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6 border-b border-line pb-6 text-center">
                  <p className="mb-2 text-[1.2rem] font-extrabold text-ink">{plan.name}</p>
                  <p className="mb-4 text-[0.85rem] text-ink-soft">{plan.for}</p>
                  <p className="flex items-baseline justify-center gap-1">
                    <span className="text-[clamp(2rem,3.6vw,2.5rem)] font-extrabold tracking-[-0.01em] text-ink">
                      {plan.priceNum}
                    </span>
                    <span className="text-[0.9rem] font-semibold text-ink-soft">{plan.priceUnit}</span>
                  </p>
                </div>

                <ul className="mb-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="relative pl-[26px] text-[0.92rem] font-medium text-ink">
                      <span className="absolute left-0 top-[5px] h-4 w-4 rounded-full bg-accent/15" />
                      <span className="absolute left-1 top-2 h-1 w-2 -rotate-45 border-b-2 border-l-2 border-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-7 rounded-[20px] bg-surface px-[22px] py-5">
                  <p className="mb-2.5 text-[0.9rem] font-semibold text-ink">
                    月額 <strong className="text-[1.1rem] font-extrabold">{plan.monthlyPrice}</strong>
                  </p>
                  <ul className="flex flex-wrap gap-x-3.5 gap-y-1.5">
                    {plan.monthlyItems.map((item) => (
                      <li key={item} className="text-[0.8rem] text-ink-soft before:content-['・']">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href="#contact"
                  variant={plan.featured ? "dark" : "ghost"}
                  block
                  className="mt-auto"
                  onClick={() => setSelectedPlan(plan.planValue)}
                >
                  {plan.ctaLabel}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-12 max-w-[620px] text-center text-[0.9rem] leading-[1.9] text-ink-soft">
            ホームページ制作後も、お店のWeb担当として継続的にサポートします。
            <br />
            制作して終わりではなく、お店の成長に合わせて一緒に改善していきます。
            <br />
            掲載価格はすべて税込です。ページ数やご要望により料金は変動する場合がありますので、詳しくはお気軽にご相談ください。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
