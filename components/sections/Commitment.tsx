import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  {
    id: "industries",
    title: "幅広い業種に対応",
    description: "飲食店・美容室・雑貨店など、業種を問わずご相談いただけます。",
    path: (
      <>
        <path d="M5 14 7 5h22l2 9" />
        <path d="M5 14v16h26V14" />
        <path d="M13 30v-9h10v9" />
      </>
    ),
  },
  {
    id: "mobile",
    title: "スマホ対応",
    description: "パソコンでもスマホでも美しく見えるレスポンシブデザイン。",
    path: (
      <>
        <rect x="10" y="3" width="16" height="30" rx="3" />
        <line x1="16" y1="27" x2="20" y2="27" />
      </>
    ),
  },
  {
    id: "seo",
    title: "SEOを意識した設計",
    description: "検索エンジンに正しく伝わる、読みやすいHTML構造で制作します。",
    path: (
      <>
        <circle cx="15" cy="15" r="10" />
        <line x1="22.5" y1="22.5" x2="31" y2="31" />
      </>
    ),
  },
  {
    id: "design",
    title: "店舗の魅力を伝えるデザイン",
    description: "世界観やこだわりを丁寧にヒアリングし、デザインに落とし込みます。",
    path: <path d="M18 31C9 25 4 19 4 12.5A7.5 7.5 0 0 1 18 8a7.5 7.5 0 0 1 14 4.5C32 19 27 25 18 31Z" />,
  },
];

export function Commitment() {
  return (
    <section id="commitment" className="scroll-mt-[var(--header-h)] bg-surface-alt py-16 sm:py-[clamp(72px,10vw,120px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="COMMITMENT"
          title="私たちのこだわり"
          description="はじめてWebサイトをお作りになる方にも、安心してお任せいただけるよう大切にしていることです。"
        />

        <div className="grid gap-6 sm:grid-cols-2 tablet:grid-cols-4">
          {commitments.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <Card variant="elevated" className="h-full px-6 py-8">
                <span className="mb-[18px] inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface text-ink" aria-hidden="true">
                  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    {item.path}
                  </svg>
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
