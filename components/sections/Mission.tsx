import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    id: "find",
    title: "魅力を見つける",
    description: (
      <>
        お店自身では当たり前になっている魅力まで、
        <br />
        丁寧なヒアリングを通して引き出します。
      </>
    ),
  },
  {
    id: "express",
    title: "その店らしく伝える",
    description: (
      <>
        テンプレートに当てはめるのではなく、
        <br />
        お店の雰囲気やこだわりまで伝わる
        <br />
        デザインへ仕上げます。
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
        来店やお問い合わせにつながる
        <br />
        ホームページを目指します。
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
          title="店舗の魅力を、まだ知らない人へ。"
          description={
            <span className="text-pretty break-keep">
              良いお店には、まだ伝わっていない魅力があります。
              <br />
              私たちは、そのお店らしさを丁寧に汲み取り、
              <br />
              Webを通して新しいお客様へ届けます。
            </span>
          }
          className="max-w-[640px] leading-[2] [&>p:first-child]:mb-6"
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {values.map((value, index) => (
            <Reveal key={value.id} delay={index * 0.12} y={18}>
              <div className="h-full px-2 text-center">
                <span className="mx-auto mb-4 block h-[2px] w-8 bg-accent/60" aria-hidden="true" />
                <h3 className="mb-2.5 text-[1.15rem] font-bold text-ink">{value.title}</h3>
                <p className="text-[0.92rem] leading-[1.8] text-ink-soft">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
