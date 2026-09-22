"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { campaignOffer } from "@/data/campaign";
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
              {campaignOffer.catchphrase}
              <br />
              シンプルで分かりやすい、1つの料金プランです。
            </>
          }
        />

        <Reveal>
          <div className="mx-auto max-w-[640px] rounded-[28px] border border-line bg-white px-7 py-9 text-center shadow-[var(--shadow-sm)] sm:px-12 sm:py-12">
            <p className="mb-2 text-[0.85rem] font-bold tracking-[0.1em] text-accent">{campaignOffer.priceLabel}</p>
            <p className="mb-8 flex items-baseline justify-center gap-1.5">
              <span className="text-[clamp(2.9rem,7.5vw,4rem)] font-extrabold leading-none tracking-[-0.02em] text-ink">
                {campaignOffer.priceNum}
              </span>
              <span className="text-[0.95rem] font-semibold text-ink-soft">{campaignOffer.priceUnit}</span>
            </p>

            <ul className="mx-auto mb-8 grid max-w-[520px] gap-x-5 gap-y-6 text-left sm:grid-cols-2">
              {campaignOffer.features.map((feature) => (
                <li key={feature.label} className="relative pl-7">
                  <span className="absolute left-0 top-[3px] h-4 w-4 rounded-full bg-accent/15" />
                  <span className="absolute left-1 top-[10px] h-1 w-2 -rotate-45 border-b-2 border-l-2 border-accent" />
                  <p className="text-[0.92rem] font-medium leading-[1.45] text-ink">{feature.label}</p>
                  {feature.note && (
                    <p className="mt-1.5 text-[0.72rem] leading-[1.6] text-ink-faint">{feature.note}</p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mb-8 rounded-[20px] bg-surface px-6 py-6 text-left sm:px-7">
              <p className="mb-3 text-[0.9rem] font-semibold text-ink">
                {campaignOffer.monthlyLabel}{" "}
                <strong className="text-[1.15rem] font-extrabold">
                  {campaignOffer.monthlyPriceNum}
                  {campaignOffer.monthlyPriceUnit}
                </strong>
              </p>
              <ul className="mb-5 flex flex-col gap-2">
                {campaignOffer.monthlyFeatures.map((item) => (
                  <li key={item} className="text-[0.85rem] text-ink-soft before:mr-1.5 before:content-['・']">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                <div>
                  <p className="mb-1.5 text-[0.75rem] font-bold tracking-[0.04em] text-ink-faint">
                    {campaignOffer.regularEditLabel}
                  </p>
                  <p className="text-[0.8rem] leading-[1.7] text-ink-soft">
                    {campaignOffer.regularEditExamples.join(" / ")}
                  </p>
                </div>
                <div>
                  <p className="mb-1.5 text-[0.75rem] font-bold tracking-[0.04em] text-ink-faint">
                    {campaignOffer.majorEditLabel}
                  </p>
                  <p className="text-[0.8rem] leading-[1.7] text-ink-soft">
                    {campaignOffer.majorEditExamples.join(" / ")}
                  </p>
                </div>
              </div>
            </div>

            <Button href="#contact" size="lg" block onClick={() => setSelectedPlan(campaignOffer.planValue)}>
              {campaignOffer.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
