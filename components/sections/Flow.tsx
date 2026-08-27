import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FlowSubline } from "./FlowSubline";

const steps = [
  {
    num: "01",
    title: "お問い合わせ・ヒアリング",
    description: "お店の雰囲気や強み、目的、ご希望のイメージなどを丁寧にお伺いします。",
  },
  {
    num: "02",
    title: "ご提案・お見積り",
    description: "ヒアリングをもとに、サイト構成・デザインの方向性・費用・スケジュールをご提案します。",
  },
  {
    num: "03",
    title: "デザイン・制作",
    description: "方向性をご確認いただきながら、デザインから実装まで一つずつ形にしていきます。",
  },
  {
    num: "04",
    title: "公開・運用サポート",
    description: "最終確認後にサイトを公開。公開後の更新や修正についても継続してサポートします。",
  },
];

export function Flow() {
  return (
    <section
      id="flow"
      className="scroll-mt-[var(--header-h)] pb-8 pt-10 sm:pb-[clamp(32px,4vw,56px)] sm:pt-[clamp(40px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="FLOW"
          title="制作の流れ"
          description={
            <>
              <span className="block font-semibold text-ink">お問い合わせから公開まで、最短2週間。</span>
              <FlowSubline className="mt-1.5 block text-[0.92rem] text-ink-soft">
                ヒアリングから制作・公開まで、丁寧にサポートします。
              </FlowSubline>
            </>
          }
        />

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {steps.map((step, index) => (
            <li key={step.num}>
              <Reveal delay={index * 0.12} y={18}>
                <div className="group h-full rounded-[28px] border border-line px-7 py-8 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-ink/25">
                  <div className="mb-3 flex items-baseline gap-1.5">
                    <span className="text-[0.7rem] font-medium tracking-[0.1em] text-ink-faint">STEP</span>
                    <span className="text-[1.9rem] font-extrabold leading-none tracking-[-0.02em] text-accent transition-transform duration-300 group-hover:scale-105">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="mb-2.5 text-pretty break-keep text-[1.05rem] font-bold text-ink">{step.title}</h3>
                  <p className="text-pretty break-keep break-words text-[0.9rem] text-ink-soft">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
