"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FlowSublineProps {
  children: ReactNode;
  className?: string;
}

/**
 * FLOWセクションの説明文2行目だけに、1行目より少し遅れて軽くフェードアップする
 * 演出をつけるための最小限のコンポーネント。
 * SectionHeadingは説明文を<p>でラップするため、<div>ベースのRevealは使えず
 * <span>で実装している。
 */
export function FlowSubline({ children, className }: FlowSublineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      {children}
    </motion.span>
  );
}
