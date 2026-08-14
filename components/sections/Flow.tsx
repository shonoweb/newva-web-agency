import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    num: "01",
    title: "お問い合わせ・ヒアリング",
    description: "お店の魅力や課題、ご要望をじっくりお伺いします。",
  },
  {
    num: "02",
    title: "ご提案・お見積り",
    description: "ヒアリングを基に、最適なデザインとプランをご提案します。",
  },
  {
    num: "03",
    title: "デザイン・制作",
    description: "世界観を丁寧に作り込み、ご確認いただきながら制作します。",
  },
  {
    num: "04",
    title: "公開・アフターサポート",
    description: "公開後もご相談いただきながら、継続的にサポートします。",
  },
];

export function Flow() {
  return (
    <section id="flow" className="scroll-mt-[var(--header-h)] py-16 sm:py-[clamp(72px,10vw,120px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="FLOW"
          title="制作の流れ"
          description={
            <>
              お問い合わせから公開まで、最短2週間〜。
              <br />
              内容やご要望により制作期間は変動しますので、まずはお気軽にご相談ください。
            </>
          }
        />

        <ol className="grid gap-7 sm:grid-cols-2 tablet:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.num} delay={index * 0.1}>
              <li className="h-full rounded-[28px] border border-line px-6 py-9">
                <span className="mb-[18px] block text-[0.85rem] font-extrabold tracking-[0.08em] text-accent">
                  {step.num}
                </span>
                <h3 className="mb-2.5 text-[1.05rem] font-bold text-ink">{step.title}</h3>
                <p className="text-[0.9rem] text-ink-soft">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
