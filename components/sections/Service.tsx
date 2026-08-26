import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const services = [
  {
    id: "website",
    title: "Webサイト制作",
    description: (
      <>
        写真・言葉・デザインを通して、
        <br />
        お店らしさが伝わるWebサイトを制作します。
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
    title: "集客・導線設計",
    description: (
      <>
        検索やSNSからお店を知ってもらい、
        <br />
        予約・問い合わせまで迷わず進める導線を設計します。
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
    title: "公開後のサポート",
    description: (
      <>
        公開後の更新や修正にも対応し、
        <br />
        お店の変化に合わせてサイトを育てていきます。
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
    <section
      id="service"
      className="scroll-mt-[var(--header-h)] pb-16 pt-10 sm:pb-[clamp(72px,10vw,120px)] sm:pt-[clamp(44px,6vw,76px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="SERVICE"
          title="私たちのサービス"
          description={
            <>
              つくって終わりではなく、
              <br />
              お客様に見つけてもらうところまで。
            </>
          }
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <Card variant="elevated" className="flex h-full flex-col items-center px-6 py-9 text-center">
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center text-ink" aria-hidden="true">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[34px] w-[34px]">
                    {service.path}
                  </svg>
                </span>
                <h3 className="mb-2.5 text-[1.15rem] font-bold text-ink">{service.title}</h3>
                <p className="mx-auto w-full max-w-[280px] text-pretty break-keep break-words text-[0.95rem] leading-[1.75] text-ink-soft">
                  {service.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
