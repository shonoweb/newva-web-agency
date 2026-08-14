import { PlusIcon } from "@/components/icons/UtilityIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-[var(--header-h)] bg-surface-alt py-16 sm:py-[clamp(72px,10vw,120px)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          description="料金やお申し込みについて、よくいただくご質問にお答えします。"
        />

        <Reveal className="mx-auto flex max-w-[760px] flex-col gap-3.5">
          {faqItems.map((item) => (
            <details
              key={item.id}
              className="group rounded-[20px] border border-line bg-white px-6 py-[22px]"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-[0.98rem] font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <PlusIcon className="h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-[0.9rem] leading-[1.9] text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
