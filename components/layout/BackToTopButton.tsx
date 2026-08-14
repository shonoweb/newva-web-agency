"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons/UtilityIcons";
import { cn } from "@/lib/cn";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="ページの先頭に戻る"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-[88px] right-4 z-[90] flex h-11 w-11 items-center justify-center rounded-full bg-dark text-white shadow-[var(--shadow-md)] transition-all duration-300 sm:bottom-6 sm:right-6",
        visible ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-2.5 opacity-0"
      )}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  );
}
