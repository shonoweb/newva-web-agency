import { RefreshCw, Search, Smartphone, Store } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    id: "store",
    title: "お店ごとに、一から設計",
    description: "業種や雰囲気、強みを整理し、そのお店らしさが伝わるデザインをつくります。",
    icon: Store,
  },
  {
    id: "mobile",
    title: "スマホでの見やすさを最優先",
    description: "お客様が実際に見るスマートフォンを基準に、迷わず予約・問い合わせできる設計にします。",
    icon: Smartphone,
  },
  {
    id: "seo",
    title: "見つけてもらうための土台づくり",
    description: "Google検索を意識した構造や基本的なSEOまで、公開時からきちんと整えます。",
    icon: Search,
  },
  {
    id: "design",
    title: "公開して終わりにしない",
    description: "営業時間やメニュー変更など、公開後の更新・改善にも対応します。",
    icon: RefreshCw,
  },
];

export function Commitment() {
  return (
    <section
      id="commitment"
      className="scroll-mt-[var(--header-h)] bg-surface-alt pb-8 pt-10 sm:pb-[clamp(32px,4vw,56px)] sm:pt-[clamp(40px,5vw,64px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="COMMITMENT"
          title="お店に必要なものを、きちんと考えてつくる。"
          description={
            <span className="text-pretty break-keep">
              見た目だけではなく、伝わり方や使いやすさまで。
              <br />
              一店舗ごとに向き合い、そのお店に合うWebサイトを設計します。
            </span>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 tablet:grid-cols-4">
          {commitments.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Card variant="elevated" className="group h-full px-5 py-8">
                <span className="mb-[18px] inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <item.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.7} />
                </span>
                <h3 className="mb-2.5 text-pretty break-keep break-words text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="text-pretty break-keep break-words text-[0.88rem] text-ink-soft">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
