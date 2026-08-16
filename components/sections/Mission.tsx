import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const missions = [
  {
    id: "know",
    num: "01",
    title: "知る",
    description: (
      <>
        お店の想いやこだわりを、
        <br />
        丁寧にヒアリングします。
      </>
    ),
  },
  {
    id: "shape",
    num: "02",
    title: "形にする",
    description: (
      <>
        そのお店らしさが伝わるデザインへ
        <br />
        丁寧に落とし込みます。
      </>
    ),
  },
  {
    id: "deliver",
    num: "03",
    title: "届ける",
    description: (
      <>
        Webを通して、新しいお客様との
        <br />
        接点をつくります。
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
          className="max-w-[640px] leading-[2]"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {missions.map((mission, index) => (
            <Reveal key={mission.id} delay={index * 0.12} y={18}>
              <Card variant="flat" className="h-full px-7 py-9 text-center">
                <span className="mb-1 block text-[1.25rem] font-extrabold leading-none tracking-[-0.02em] text-accent">
                  {mission.num}
                </span>
                <h3 className="mb-2.5 text-[1.05rem] font-bold text-ink">{mission.title}</h3>
                <p className="text-[0.92rem] leading-[1.8] text-ink-soft">{mission.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
