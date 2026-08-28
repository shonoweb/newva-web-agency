import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    id: "find",
    title: "魅力を見つける",
    description: (
      <>
        お店にとって当たり前になっている魅力まで、
        <br />
        丁寧なヒアリングから見つけ出します。
      </>
    ),
  },
  {
    id: "express",
    title: "その店らしく伝える",
    description: (
      <>
        決まった型に当てはめず、
        <br />
        雰囲気やこだわりまで伝わるデザインに仕上げます。
      </>
    ),
  },
  {
    id: "connect",
    title: "新しい出会いにつなげる",
    description: (
      <>
        見た目だけで終わらせず、
        <br />
        来店や予約・<span className="whitespace-nowrap">お問い合わせ</span>につながる
        <span className="whitespace-nowrap">Webサイトを目指します。</span>
      </>
    ),
  },
];

export function Mission() {
  return (
    <section
      id="mission"
      className="scroll-mt-[var(--header-h)] pb-8 pt-10 sm:pb-[clamp(32px,4vw,56px)] sm:pt-[clamp(40px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="MESSAGE"
          title="いいお店が、ちゃんと見つかるWebを。"
          description={
            <span className="text-pretty break-keep break-words">
              どれだけ魅力があっても、知られなければ選ばれるきっかけは生まれません。
              <br className="hidden md:inline" />
              私たちは、お店らしさを丁寧に整理し、伝わる形にして、
              <br className="hidden md:inline" />
              新しいお客様との出会いにつなげます。
            </span>
          }
          className="max-w-[640px] leading-[2] [&>p:first-child]:mb-6"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {values.map((value, index) => (
            <Reveal key={value.id} delay={index * 0.12} y={18}>
              <div className="h-full px-2 text-center">
                <span className="mx-auto mb-4 block h-[2px] w-8 bg-accent/60" aria-hidden="true" />
                <h3 className="mb-2.5 text-pretty break-keep text-[1.15rem] font-bold text-ink">{value.title}</h3>
                <p className="text-pretty break-keep break-words text-[0.92rem] leading-[1.8] text-ink-soft">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
