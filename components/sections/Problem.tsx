import { CircleHelp, Clock3, Search, Share2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const problems = [
  {
    id: "sns",
    text: (
      <>
        SNSだけでは、
        <br />
        新しいお客様に<wbr />届きにくい
      </>
    ),
    icon: Share2,
  },
  {
    id: "search",
    text: (
      <>
        ホームページがなく、
        <br />
        検索から集客<wbr />できていない
      </>
    ),
    icon: Search,
  },
  {
    id: "manage",
    text: (
      <>
        自分で作るには、
        <br />
        時間も<wbr />手間もかかる
      </>
    ),
    icon: Clock3,
  },
  {
    id: "cost",
    text: (
      <>
        制作会社に頼みたいけど、
        <br />
        費用や依頼方法が<wbr />わからない
      </>
    ),
    icon: CircleHelp,
  },
];

export function Problem() {
  return (
    <section
      aria-label="よくあるお悩み"
      className="py-16 pb-7 sm:py-[clamp(64px,8vw,100px)] sm:pb-[clamp(28px,4vw,54px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="PROBLEM"
          title={
            <span className="text-pretty break-keep break-words">
              お店の魅力は、
              <br />
              ちゃんと届いていますか？
            </span>
          }
        />

        <div className="grid grid-cols-2 gap-5 tablet:grid-cols-4">
          {problems.map((problem, index) => (
            <Reveal key={problem.id} delay={index * 0.08}>
              <Card variant="flat" className="flex h-full flex-col items-center px-6 py-8 text-center">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center text-ink-soft" aria-hidden="true">
                  <problem.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <p className="text-pretty break-keep text-[0.92rem] font-semibold leading-[1.7] tracking-[-0.01em] text-ink">
                  {problem.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-11 max-w-[560px] text-center">
            <p className="text-pretty break-keep break-words text-[1.25rem] font-extrabold text-ink">
              見つけてもらい、選ばれるための
              <br className="md:hidden" />
              <span className="whitespace-nowrap">Webサイトへ。</span>
            </p>
            <p className="mt-2 text-pretty break-keep break-words text-[0.92rem] text-ink-soft">
              Webサイトをつくるだけではなく、お店を知ってもらい、来店につながる導線まで設計します。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
