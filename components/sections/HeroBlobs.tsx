"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ヒーロー背景の装飾ブロブ(ぼかし円)。
 * GSAP ScrollTrigger でごく控えめなパララックスを付ける。
 * prefers-reduced-motion の場合は静止したまま。
 */
export function HeroBlobs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-blob='a']", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to("[data-blob='b']", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        data-blob="a"
        className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full opacity-35 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      <div
        data-blob="b"
        className="absolute -bottom-56 -right-40 h-[560px] w-[560px] rounded-full opacity-35 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--color-accent-2), transparent 70%)" }}
      />
    </div>
  );
}
