"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * オープニング演出のタイミング設定を一箇所にまとめている。
 * 将来「オープニングのNEWVA → 新しいHeroのブランド表現」へ
 * シームレスに繋げる調整を行う際も、ここの数値だけを変更すればよい。
 * (単位: delay/duration は秒、exitDelayMs のみミリ秒)
 */
export const OPENING_TIMING = {
  brandDelay: 0.2,
  brandDuration: 0.5,
  subDelay: 0.4,
  subDuration: 0.45,
  lineDelay: 0.55,
  lineDuration: 0.4,
  lineWidth: 48,
  exitDelayMs: 1400,
  exitDuration: 0.5,
  exitEase: [0.65, 0, 0.35, 1] as const,
  entranceEase: [0.22, 1, 0.36, 1] as const,
} as const;

const REDUCED_MOTION_EXIT_DELAY_MS = 150;
const REDUCED_MOTION_EXIT_DURATION = 0.2;

/**
 * オープニングが画面から完全に退場し終わるタイミング(秒)。
 * Hero側の登場演出をこの後に開始することで、イントロと自然につなげる。
 */
export const OPENING_EXIT_COMPLETE_S = OPENING_TIMING.exitDelayMs / 1000 + OPENING_TIMING.exitDuration;
export const REDUCED_MOTION_OPENING_EXIT_COMPLETE_S =
  REDUCED_MOTION_EXIT_DELAY_MS / 1000 + REDUCED_MOTION_EXIT_DURATION;

/**
 * サイトアクセス直後に表示するオープニングアニメーション。
 * 表示中はbodyのスクロールを止め、退場アニメーション完了後に必ず元へ戻す。
 * prefers-reduced-motion では長い演出をせず、ごく短いフェードのみで終える。
 */
export function Opening() {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(
      () => setIsVisible(false),
      shouldReduceMotion ? REDUCED_MOTION_EXIT_DELAY_MS : OPENING_TIMING.exitDelayMs
    );

    return () => window.clearTimeout(timer);
  }, [shouldReduceMotion]);

  function handleExitComplete() {
    document.body.style.overflow = "";
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-surface-alt"
          exit={shouldReduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={
            shouldReduceMotion
              ? { duration: REDUCED_MOTION_EXIT_DURATION, ease: "easeOut" }
              : { duration: OPENING_TIMING.exitDuration, ease: OPENING_TIMING.exitEase }
          }
        >
          <div className="text-center">
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.15 }
                  : { duration: OPENING_TIMING.brandDuration, delay: OPENING_TIMING.brandDelay, ease: OPENING_TIMING.entranceEase }
              }
              className="text-[clamp(2.2rem,6vw,3.2rem)] font-extrabold leading-none tracking-[0.04em] text-ink"
            >
              NEWVA
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0.15 }
                  : { duration: OPENING_TIMING.subDuration, delay: OPENING_TIMING.subDelay, ease: OPENING_TIMING.entranceEase }
              }
              className="mt-2.5 text-[0.78rem] font-semibold tracking-[0.32em] text-ink-soft"
            >
              WEB AGENCY
            </motion.p>

            {!shouldReduceMotion && (
              <motion.span
                aria-hidden="true"
                initial={{ width: 0 }}
                animate={{ width: OPENING_TIMING.lineWidth }}
                transition={{ duration: OPENING_TIMING.lineDuration, delay: OPENING_TIMING.lineDelay, ease: "easeOut" }}
                className="mx-auto mt-4 block h-[2px] rounded-full bg-accent"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
