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
        時間も管理の<wbr />手間もかかる
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
    <section aria-label="よくあるお悩み" className="py-16 sm:py-[clamp(64px,8vw,100px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading eyebrow="PROBLEM" title="こんなお悩みありませんか？" />

        <div className="grid grid-cols-2 gap-5 tablet:grid-cols-4">
          {problems.map((problem, index) => (
            <Reveal key={problem.id} delay={index * 0.08}>
              <Card variant="flat" className="flex h-full flex-col items-center px-6 py-8 text-center">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center text-ink-soft" aria-hidden="true">
                  <problem.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <p className="break-keep text-[0.92rem] font-semibold leading-[1.7] text-ink">{problem.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-11 text-center text-[1.15rem] font-semibold text-ink">
            そのお悩み、<strong className="font-extrabold text-accent">NEWVA WEB AGENCY</strong>が
            <br />
            Webの力で解決をサポートします。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
