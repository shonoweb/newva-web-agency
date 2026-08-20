"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { campaignOffer } from "@/data/campaign";
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

        {/* ① 実績制作キャンペーン（最も目立つオファー） */}
        <Reveal>
          <div className="mx-auto max-w-[560px] rounded-[28px] border border-line bg-white px-7 py-9 text-center shadow-[var(--shadow-sm)] sm:px-10 sm:py-11">
            <span className="mb-4 inline-block rounded-full bg-dark px-[18px] py-1.5 text-[0.75rem] font-bold tracking-[0.04em] text-white">
              {campaignOffer.badge}
            </span>

            <p className="mb-3 text-[1.3rem] font-extrabold text-ink">{campaignOffer.title}</p>
            <p className="mx-auto mb-8 max-w-[380px] text-[0.88rem] leading-[1.9] text-ink-soft">
              {campaignOffer.description}
            </p>

            <p className="mb-2 text-[0.82rem] text-ink-faint">
              {campaignOffer.regularPriceLabel} <span className="line-through">{campaignOffer.regularPrice}</span>
            </p>
            <p className="mb-1.5 text-[0.85rem] font-semibold text-accent">{campaignOffer.campaignPriceLabel}</p>
            <p className="mb-8 flex items-baseline justify-center gap-1.5">
              <span className="text-[clamp(2.75rem,7vw,3.75rem)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                {campaignOffer.campaignPriceNum}
              </span>
              <span className="text-[0.95rem] font-semibold text-ink-soft">{campaignOffer.campaignPriceUnit}</span>
            </p>

            <div className="mb-8 rounded-[20px] bg-surface px-6 py-5">
              <p className="mb-2.5 text-[0.9rem] font-semibold text-ink">
                {campaignOffer.monthlyLabel}{" "}
                <strong className="text-[1.15rem] font-extrabold">{campaignOffer.monthlyPrice}</strong>
              </p>
              <ul className="flex flex-wrap justify-center gap-x-3.5 gap-y-1.5">
                {campaignOffer.monthlyItems.map((item) => (
                  <li key={item} className="text-[0.8rem] text-ink-soft before:content-['・']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Button href="#contact" size="lg" block onClick={() => setSelectedPlan(campaignOffer.planValue)}>
              {campaignOffer.ctaLabel}
            </Button>
          </div>
        </Reveal>

        {/* ② 通常料金プラン(以前のベーシック/プロプランを復元) */}
        <Reveal delay={0.15}>
          <p className="mx-auto mb-8 mt-2 max-w-[900px] text-center text-[0.8rem] font-bold tracking-[0.1em] text-ink-soft sm:mt-4">
            通常料金と比較する
          </p>
        </Reveal>

        <div className="mx-auto grid max-w-[900px] gap-7 sm:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.id} delay={0.2 + index * 0.1}>
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

        <Reveal delay={0.4}>
          <p className="mx-auto mt-12 max-w-[620px] text-center text-[0.85rem] leading-[1.8] text-ink-soft">
            {campaignOffer.supportNote}
            <br />
            <span className="text-[0.78rem] text-ink-faint">{campaignOffer.priceNote}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
