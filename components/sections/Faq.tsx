import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { FaqAccordionItem } from "./FaqAccordionItem";

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
    <section
      id="faq"
      className="scroll-mt-[var(--header-h)] bg-surface-alt pb-7 pt-10 sm:pb-[clamp(28px,8vw,76px)] sm:pt-[clamp(40px,5vw,64px)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          description="ホームページ制作や料金について、よくいただくご質問にお答えします。"
        />

        <Reveal className="mx-auto flex max-w-[760px] flex-col gap-3.5">
          {faqItems.map((item) => (
            <FaqAccordionItem key={item.id} item={item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
