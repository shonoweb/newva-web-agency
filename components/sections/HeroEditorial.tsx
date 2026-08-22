import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HashLink } from "@/components/ui/HashLink";
import { Reveal } from "@/components/ui/Reveal";
import { HeroScrollHint } from "./HeroScrollHint";

/**
 * Hero「案① Editorial / 大胆タイポグラフィ型」。
 * 既存の components/sections/Hero.tsx (PC+スマホモックアップ型) は変更せず残しているため、
 * 別案を試す場合や元へ戻す場合は app/page.tsx の import/呼び出しを差し替えるだけでよい。
 */
export function HeroEditorial() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-[clamp(72px,10vw,120px)] pt-[calc(var(--header-h)+clamp(56px,9vw,120px))]"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.28em] text-accent">
            WEB DESIGN FOR STORES
          </p>
          <h1 className="mt-5 max-w-[880px] text-[clamp(2.4rem,7vw,5.25rem)] font-extrabold leading-[1.08] tracking-[-0.01em] text-ink nav:mt-6">
            店舗の魅力を、
            <br />
            まだ知らない人へ。
          </h1>
        </Reveal>

        <div className="mt-10 nav:mt-14 nav:grid nav:grid-cols-12 nav:items-end nav:gap-8">
          <Reveal delay={0.1} className="nav:col-span-5">
            <p className="max-w-[360px] text-[1.05rem] text-ink-soft">
              飲食店・美容・店舗ビジネスのためのWeb制作。
            </p>
            <HashLink
              href="#samples"
              className="group mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span className="relative">
                VIEW PROJECTS
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-ink transition-transform duration-300 group-hover:scale-x-100"
                />
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </HashLink>
          </Reveal>

          <Reveal delay={0.18} className="mt-10 nav:col-span-7 nav:-mt-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden nav:aspect-[16/11]">
              <Image
                src="/images/works/portfolio-yakiniku-1.svg"
                alt="店舗ブランディングをイメージしたビジュアル"
                fill
                priority
                sizes="(min-width: 860px) 55vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <HeroScrollHint />
      </div>
    </section>
  );
}
