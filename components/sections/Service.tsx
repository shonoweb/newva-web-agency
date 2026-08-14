import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    id: "website",
    title: "Webサイト制作",
    description: (
      <>
        お店の世界観を表現する
        <br />
        オリジナルサイトを制作します。
      </>
    ),
    path: (
      <>
        <rect x="6" y="9" width="28" height="18" rx="2" />
        <path d="M2 31h36l-3 4H5z" />
      </>
    ),
  },
  {
    id: "growth",
    title: "集客サポート",
    description: (
      <>
        新規のお客様へ届く
        <br />
        導線設計をサポートします。
      </>
    ),
    path: (
      <>
        <path d="M4 28l9-10 7 6 14-16" />
        <path d="M26 8h8v8" />
      </>
    ),
  },
  {
    id: "brand",
    title: "ブランド設計",
    description: (
      <>
        お店の魅力を伝える
        <br />
        デザインを提案します。
      </>
    ),
    path: (
      <>
        <path d="M12 17a8 8 0 0 1 16 0c0 5-4 6-4 11H16c0-5-4-6-4-11Z" />
        <line x1="16" y1="32" x2="24" y2="32" />
        <line x1="20" y1="4" x2="20" y2="7" />
      </>
    ),
  },
];

export function Service() {
  return (
    <section id="service" className="scroll-mt-[var(--header-h)] py-16 sm:py-[clamp(72px,10vw,120px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="SERVICE"
          title="私たちのサービス"
          description="お店の魅力を最大限に引き出す Web制作サービスを提供します。"
        />

        <div className="grid gap-7 sm:grid-cols-2 tablet:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <Card variant="elevated" className="flex h-full flex-col items-center px-8 py-11 text-center">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center text-ink" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[34px] w-[34px]">
                    {service.path}
                  </svg>
                </span>
                <h3 className="mb-3 text-[1.15rem] font-bold text-ink">{service.title}</h3>
                <p className="text-[0.95rem] leading-[1.75] text-ink-soft">{service.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
