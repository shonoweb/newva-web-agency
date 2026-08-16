"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PlusIcon } from "@/components/icons/UtilityIcons";
import type { FaqItem } from "@/data/faq";

export function FaqAccordionItem({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const panelId = useId();
  const duration = shouldReduceMotion ? 0 : 0.3;

  return (
    <div className="rounded-[20px] border border-line bg-white px-6 py-[22px] transition-[border-color,box-shadow] duration-300 hover:border-ink/15 hover:shadow-[var(--shadow-sm)]">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex min-h-11 w-full cursor-pointer list-none items-center justify-between gap-4 text-left text-[0.98rem] font-bold text-ink"
      >
        <span>{item.question}</span>
        <motion.span
          className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-accent"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <PlusIcon className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={item.question}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-[0.9rem] leading-[1.9] text-ink-soft">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
