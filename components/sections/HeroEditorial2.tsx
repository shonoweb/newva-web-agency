"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { HashLink } from "@/components/ui/HashLink";
import { OPENING_EXIT_COMPLETE_S, REDUCED_MOTION_OPENING_EXIT_COMPLETE_S } from "@/components/Opening";

/**
 * Hero「案② Editorial × Creative Agency × Minimal」。
 * 案①(components/sections/HeroEditorial.tsx)・既存Hero(components/sections/Hero.tsx)は
 * どちらも変更せず残しているため、採用判断や別案追加は app/page.tsx の
 * import/呼び出しを差し替えるだけでよい。
 *
 * オープニングイントロ(Opening.tsx)の退場完了タイミングを基準に、
 * その直後からHero要素が時間差で現れるよう delay を計算している。
 */
const STAGGER = {
  typography: 0,
  visual: 0.18,
  copy: 0.36,
  cta: 0.48,
} as const;

const ENTRANCE_EASE = [0.22, 1, 0.36, 1] as const;

export function HeroEditorial2() {
  const shouldReduceMotion = useReducedMotion();
  const base = shouldReduceMotion ? REDUCED_MOTION_OPENING_EXIT_COMPLETE_S : OPENING_EXIT_COMPLETE_S;

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative flex min-h-[100dvh] flex-col justify-center px-5 pb-14 pt-[calc(var(--header-h)+28px)] sm:px-8 nav:px-12">
        <div className="relative mx-auto w-full max-w-[1600px]">
          <motion.h1
            initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, delay: base + STAGGER.typography, ease: ENTRANCE_EASE }}
            className="relative z-10 select-none font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-ink text-[clamp(3rem,12vw,9.5rem)]"
          >
            WE DESIGN
            <br />
            FOR STORES.
          </motion.h1>

          {/* 店舗サイトビジュアル: モバイルは見出し下のフルブリード帯、nav以上は見出しへ大胆に重なる形へ切り替わる(同一要素) */}
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.8, delay: base + STAGGER.visual, ease: ENTRANCE_EASE }}
            className="relative z-0 -mx-5 mt-6 aspect-[16/10] w-[calc(100%+40px)] overflow-hidden sm:-mx-8 sm:w-[calc(100%+64px)] nav:absolute nav:right-[-96px] nav:top-[6%] nav:mx-0 nav:mt-0 nav:aspect-[3/4] nav:w-[32vw] nav:max-w-[400px] tablet:right-[-128px] tablet:w-[28vw]"
          >
            <Image
              src="/images/hero-restaurant-web.png"
              alt="NEWVAが制作する店舗Webサイトのイメージ"
              fill
              priority
              quality={95}
              sizes="(min-width: 1428px) 712px, (min-width: 980px) 50vw, (min-width: 860px) 57vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "20% 32%" }}
            />
          </motion.div>

          <div className="relative z-10 mt-8 flex flex-col gap-6 nav:mt-10 nav:max-w-[420px]">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: base + STAGGER.copy, ease: ENTRANCE_EASE }}
            >
              <p className="text-[1.05rem] font-semibold text-ink">店舗の魅力を、まだ知らない人へ。</p>
              <p className="mt-2 text-[0.8rem] text-ink-faint">飲食店・美容・店舗ビジネスのためのWeb制作。</p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: base + STAGGER.cta, ease: ENTRANCE_EASE }}
            >
              <HashLink
                href="#samples"
                className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="relative">
                  VIEW PROJECTS
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
                  />
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </HashLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
