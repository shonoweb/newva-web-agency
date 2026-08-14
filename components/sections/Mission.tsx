import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const missions = [
  {
    id: "hearing",
    title: "丁寧なヒアリング",
    description: "お店の想いやこだわりを、じっくりお伺いすることから始めます。",
  },
  {
    id: "custom",
    title: "オーダーメイドの設計",
    description: "テンプレートに頼らず、お店ごとの世界観に合わせて一から制作します。",
  },
  {
    id: "support",
    title: "公開後も伴走",
    description: "作って終わりではなく、運用のご相談にも継続して対応します。",
  },
];

export function Mission() {
  return (
    <section id="mission" className="scroll-mt-[var(--header-h)] py-16 sm:py-[clamp(72px,10vw,120px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="MESSAGE"
          title="店舗オーナー様へ"
          description={
            <>
              良い商品やサービスがあるのに、まだ知られていないお店がたくさんあります。
              <br />
              私たちは、お店の魅力や世界観を正しく伝えるWebサイトを制作し、
              <br className="hidden nav:inline" />
              新しいお客様との出会いをサポートします。
            </>
          }
          className="max-w-[640px] leading-[2]"
        />

        <div className="grid gap-7 sm:grid-cols-2 tablet:grid-cols-3">
          {missions.map((mission, index) => (
            <Reveal key={mission.id} delay={index * 0.1}>
              <Card variant="flat" className="h-full px-7 py-9 text-center">
                <h3 className="mb-3 text-[1.05rem] font-bold text-ink">{mission.title}</h3>
                <p className="text-[0.92rem] leading-[1.8] text-ink-soft">{mission.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
