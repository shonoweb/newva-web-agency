"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * お問い合わせセクション背景の装飾ブロブ。Heroと同じく控えめなパララックスのみ。
 */
export function ContactBlob() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: blobRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={blobRef}
        className="absolute -right-40 -top-32 h-[460px] w-[460px] rounded-full opacity-30 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
    </div>
  );
}
