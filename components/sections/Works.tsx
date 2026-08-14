"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { works, workCategoryFilters, type Work, type WorkCategory } from "@/data/works";

export function Works() {
  const [activeFilter, setActiveFilter] = useState<WorkCategory | "all">("all");

  const filteredWorks = useMemo(
    () => (activeFilter === "all" ? works : works.filter((work) => work.category === activeFilter)),
    [activeFilter]
  );

  return (
    <section id="samples" className="scroll-mt-[var(--header-h)] bg-surface-alt py-16 sm:py-[clamp(72px,10vw,120px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeading
          eyebrow="SAMPLE"
          title="制作サンプル"
          description="業種別のデザイン提案例です。お店の雰囲気に合わせたテイストをイメージとしてご覧いただけます。"
          note="※掲載している画像はデザインイメージです。順次、実際の制作事例に更新してまいります。"
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="制作サンプルのジャンル絞り込み"
            className="mb-12 flex flex-wrap justify-center gap-2.5"
          >
            {workCategoryFilters.map((filter) => {
              const isActive = filter.value === activeFilter;
              return (
                <button
                  key={filter.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "min-h-11 rounded-full border px-5 py-2.5 text-[0.88rem] font-semibold transition-colors duration-300",
                    isActive
                      ? "border-dark bg-dark text-white"
                      : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 tablet:grid-cols-3">
          {filteredWorks.map((work, index) => (
            <Reveal key={work.id} delay={(index % 3) * 0.08}>
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ work }: { work: Work }) {
  const className =
    "group block overflow-hidden rounded-[28px] bg-white shadow-[var(--shadow-sm)] transition-all duration-[450ms] ease-[var(--ease-brand)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-md)]";

  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={work.image}
          alt={`${work.title}のデザインサンプル`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[600ms] ease-[var(--ease-brand)] group-hover:scale-[1.06]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 text-[0.75rem] font-bold text-ink backdrop-blur-sm">
          {work.tag}
        </span>
      </div>
      <div className="px-6 py-6 pb-7">
        <h3 className="mb-2.5 text-[1.05rem] font-bold text-ink">{work.title}</h3>
        <p className="text-[0.92rem] text-ink-soft">{work.description}</p>
      </div>
    </>
  );

  if (work.url) {
    return (
      <Link href={work.url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </Link>
    );
  }

  return <article className={className}>{content}</article>;
}
