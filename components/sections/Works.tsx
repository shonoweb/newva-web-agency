"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { works, type Work } from "@/data/works";

/**
 * 縦方向優勢のジェスチャーが横方向の入力へ入り込まないための余裕(しきい値)。
 * |deltaX| が |deltaY| のこの倍以上のときだけ「横方向の操作」とみなす。
 */
const HORIZONTAL_INTENT_THRESHOLD = 1.2;

/**
 * 横スクロール型ポートフォリオ。
 * - 縦方向優勢のホイール／トラックパッド入力には一切介入しない。
 *   ページの縦スクロールは常にブラウザのネイティブ処理に委ねる（スクロールジャックしない）。
 * - 明確に横方向優勢と判定できた場合のみ、そのイベントに限って横スクロールとして処理する。
 * - スマホ・タブレットは touch-action: pan-x により、横スワイプはこの要素、
 *   縦スワイプはページ側が扱うようブラウザに指示する（JS不要）。
 * - マウスドラッグでの横スクロールにも対応（タッチはネイティブ挙動を優先し干渉しない）。
 */
export function Works() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // scroll-snapで実際に表示されているカードの位置(offsetLeft)からactiveIndexを求める。
  // scrollLeftの絶対量ではなく「今どのカードにスナップしているか」を基準にすることで、
  // カードを1枚切り替えるごとに進捗バーがはっきり進んで見えるようにしている。
  // 末尾付近は最終カードのoffsetLeftまでscrollLeftが到達しきらないことがあるため、
  // 数px程度の誤差を許容して「末尾に到達したか」を別途判定し、最後のカードとして扱う。
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      const cards = cardRefs.current.filter((card): card is HTMLElement => card !== null);
      if (cards.length === 0) return;

      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
      setIsAtEnd(atEnd);

      if (atEnd) {
        setActiveIndex(cards.length - 1);
        return;
      }

      let closestIndex = 0;
      let closestDistance = Infinity;
      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - el.scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isFirst = activeIndex === 0 && !isAtEnd;
  const isLast = isAtEnd || activeIndex === works.length - 1;
  const progress = isAtEnd ? 100 : ((activeIndex + 1) / works.length) * 100;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (event: WheelEvent) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);

      // 横方向が明確に優勢な場合のみ、このイベントに限って横スクロールとして処理する。
      if (absX > absY * HORIZONTAL_INTENT_THRESHOLD) {
        event.preventDefault();
        el.scrollLeft += event.deltaX;
        return;
      }

      // 縦方向優勢、または斜めで判定があいまいな場合は何もしない。
      // ページの縦スクロールはブラウザの既定動作にすべて委ねる。
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDragging = false;
    let dragDistance = 0;
    let startX = 0;
    let startScrollLeft = 0;
    let suppressNextClick = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      isDragging = true;
      dragDistance = 0;
      startX = event.clientX;
      startScrollLeft = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging) return;
      const delta = event.clientX - startX;
      dragDistance += Math.abs(delta);
      el.scrollLeft = startScrollLeft - delta;
    };

    const stopDragging = () => {
      if (!isDragging) return;
      isDragging = false;
      el.classList.remove("cursor-grabbing");
      suppressNextClick = dragDistance > 5;
    };

    const onClickCapture = (event: MouseEvent) => {
      if (suppressNextClick) {
        event.preventDefault();
        event.stopPropagation();
        suppressNextClick = false;
      }
    };

    el.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);
    el.addEventListener("click", onClickCapture, true);

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section
      id="samples"
      className="scroll-mt-[var(--header-h)] bg-surface-alt pb-8 pt-16 sm:pb-[clamp(32px,4vw,56px)] sm:pt-[clamp(72px,10vw,120px)]"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="SAMPLE"
          title="制作サンプル"
          description={
            <>
              お店ごとの魅力に合わせて、
              <br />
              一つひとつデザインしています。
            </>
          }
          className="mb-10 md:mb-12"
        />
      </div>

      <Reveal>
        <div
          ref={scrollerRef}
          role="group"
          aria-roledescription="carousel"
          aria-label="制作サンプル一覧"
          tabIndex={0}
          className="cursor-grab touch-pan-x select-none overflow-x-auto overscroll-x-contain scroll-pl-6 [-ms-overflow-style:none] [scrollbar-width:none] sm:scroll-pl-10 [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex snap-x snap-proximity gap-6 px-6 pb-2 sm:px-10">
            {works.map((work, index) => (
              <WorkCard
                key={work.id}
                work={work}
                index={index}
                cardRef={(el) => {
                  cardRefs.current[index] = el;
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-5 flex max-w-[1200px] flex-col items-center gap-2 px-6">
        <div className="flex items-center justify-center gap-2 text-[0.78rem] tracking-[0.02em] text-ink-faint">
          <ScrollHintArrow direction="left" faded={isFirst} />
          <span>横にスライドして制作例を見る</span>
          <ScrollHintArrow direction="right" faded={isLast} />
        </div>
        <div className="relative h-px w-[140px] overflow-hidden rounded-full bg-line sm:w-[200px]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-ink"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      <Reveal className="mx-auto mt-6 flex max-w-[1200px] flex-col items-center gap-4 px-6 text-center sm:mt-8">
        <p className="text-[1.05rem] font-bold text-ink">お店に合ったホームページを作りませんか？</p>
        <Button href="#contact">無料で相談する</Button>
      </Reveal>
    </section>
  );
}

function ScrollHintArrow({ direction, faded }: { direction: "left" | "right"; faded: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const offset = direction === "left" ? -4 : 4;

  return (
    <motion.span
      aria-hidden="true"
      className={cn("text-ink-faint transition-opacity duration-300", faded && "opacity-0")}
      animate={shouldReduceMotion || faded ? undefined : { x: [0, offset, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <Icon className="h-3.5 w-3.5" />
    </motion.span>
  );
}

function WorkCard({
  work,
  index,
  cardRef,
}: {
  work: Work;
  index: number;
  cardRef: (el: HTMLElement | null) => void;
}) {
  const number = String(index + 1).padStart(2, "0");

  const content = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] shadow-[var(--shadow-md)]">
        <Image
          src={work.image}
          alt={`${work.title}のデザインサンプル`}
          fill
          draggable={false}
          sizes="(min-width: 768px) 58vw, 88vw"
          className="object-cover transition-transform duration-500 ease-[var(--ease-brand)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex items-baseline gap-3">
        <span className="text-[0.8rem] font-bold tracking-[0.08em] text-accent">{number}</span>
        <span className="text-[0.8rem] font-semibold text-ink-soft">{work.category}</span>
      </div>
      <h3 className="mt-1.5 text-[1.1rem] font-bold text-ink">{work.title}</h3>
      <p className="mt-1.5 text-[0.9rem] text-ink-soft">{work.description}</p>

      <span className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-ink">
        サイトを見る
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </>
  );

  const className = "group w-[88%] shrink-0 snap-start md:w-[58%]";

  if (work.url) {
    return (
      <Link ref={cardRef} href={work.url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div ref={cardRef} className={className}>
      {content}
    </div>
  );
}
