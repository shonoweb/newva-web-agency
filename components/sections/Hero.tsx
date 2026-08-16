import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroBlobs } from "./HeroBlobs";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[calc(var(--header-h)+clamp(48px,8vw,96px))] pb-[clamp(64px,9vw,110px)]"
    >
      <HeroBlobs />

      <div className="mx-auto grid max-w-[1200px] items-center gap-[clamp(32px,6vw,64px)] px-6 nav:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="text-center nav:text-left">
          <p className="mb-3.5 text-[0.8rem] font-bold tracking-[0.14em] text-accent">WEB SITE PRODUCTION</p>
          <h1 className="mb-[22px] text-[clamp(2.6rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[0.02em] text-ink">
            選ばれるお店
            <br className="nav:hidden" />
            には、
            <br className="hidden nav:inline" />
            伝わる
            {/* モバイル: 語ごとに改行(既存どおり) */}
            <span className="nav:hidden">
              <br />
              ホームページ
              <br />
              がある。
            </span>
            {/* PC: 「ホームページがある。」を改行不可の1ユニットとして扱う */}
            <span className="hidden whitespace-nowrap nav:inline">ホームページがある。</span>
          </h1>
          <p className="mx-auto mb-[40px] max-w-[440px] text-[1rem] text-ink-soft nav:mx-0">
            料理へのこだわり、店内の雰囲気、お店の想い。
            <br />
            SNSだけでは伝えきれない魅力を、ホームページで届けます。
            <br />
            Google検索から訪れる新しいお客様との出会いを作り、24時間働くWebサイトでお店の成長をサポートします。
          </p>
          <div className="flex flex-wrap items-start justify-center gap-4 nav:justify-start">
            <div className="flex flex-col items-center">
              <Button href="#contact" size="lg">
                まずは無料で相談する
              </Button>
              <p className="mt-2 max-w-[240px] text-center text-[0.78rem] font-normal leading-[1.4] text-[#8a8a93]">
                ご相談・お見積りは無料です
                <br />
                無理な営業はいたしません
              </p>
            </div>
            <Button href="#samples" variant="ghost" size="lg">
              制作事例を見る
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mx-auto w-full max-w-[420px] nav:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-[var(--shadow-md)]">
            <Image
              src="/images/hero-restaurant-web.png"
              alt="架空のレストランのWebサイトを、パソコンとスマートフォンの画面で表示しているイメージ"
              fill
              priority
              sizes="(min-width: 860px) 45vw, (min-width: 640px) 60vw, 90vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
