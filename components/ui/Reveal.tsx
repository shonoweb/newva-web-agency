"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** ミリ秒ではなく秒単位のディレイ。グリッドのスタガー表現に使う */
  delay?: number;
  /** 初期位置のY方向オフセット(px) */
  y?: number;
}

/**
 * 旧LPの `[data-reveal]` + IntersectionObserver を Framer Motion で再現する。
 * 一度表示されたら再アニメーションしない(viewport once)。
 * prefers-reduced-motion では即座に最終状態で表示する。
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
