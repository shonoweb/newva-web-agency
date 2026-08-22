"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDownIcon } from "@/components/icons/UtilityIcons";

/**
 * Hero下部の控えめなスクロール誘導。
 * 既存のScrollHintArrow(Works.tsx)と同じduration/ease/Infinity repeatパターンを踏襲し、
 * prefers-reduced-motionでは静止させる。
 */
export function HeroScrollHint() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mt-16 flex items-center gap-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-ink-faint nav:mt-20">
      <span>SCROLL TO EXPLORE</span>
      <motion.span
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="h-3.5 w-3.5" />
      </motion.span>
    </div>
  );
}
