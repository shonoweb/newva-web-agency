import { Palette, Search, Smartphone, Store } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    id: "store",
    title: "店舗ビジネスに強い設計",
    description: "飲食店・美容室・サロンなど、店舗ごとの魅力と目的に合わせて設計します。",
    icon: Store,
  },
  {
    id: "mobile",
    title: "スマホでの見やすさを重視",
    description: "スマートフォンから見ても、迷わず情報へたどり着けるサイトを制作します。",
    icon: Smartphone,
  },
  {
    id: "seo",
    title: "検索されることを考えたサイト設計",
    description: "Google検索を意識した構造で、新しいお客様との接点づくりをサポートします。",
    icon: Search,
  },
  {
    id: "design",
    title: "お店らしさをデザインに",
    description: "雰囲気やこだわりを丁寧にヒアリングし、そのお店ならではの魅力をWeb上で表現します。",
    icon: Palette,
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
          title="私たちのこだわり"
          description="はじめてのホームページ制作でも、安心してお任せいただけるように。"
        />

        <div className="grid gap-6 sm:grid-cols-2 tablet:grid-cols-4">
          {commitments.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Card variant="elevated" className="group h-full px-6 py-8">
                <span className="mb-[18px] inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                  <item.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-105" strokeWidth={1.7} />
                </span>
                <h3 className="mb-2.5 text-base font-bold text-ink">{item.title}</h3>
                <p className="text-[0.88rem] text-ink-soft">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
