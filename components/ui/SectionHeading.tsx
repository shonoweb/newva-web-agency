import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  note?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  note,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mx-auto mb-12 max-w-2xl md:mb-14", align === "center" && "text-center", className)}>
      <p className="mb-3.5 text-[0.8rem] font-bold tracking-[0.14em] text-accent">{eyebrow}</p>
      <h2 className="mb-4 text-[clamp(1.9rem,3.4vw,2.5rem)] font-extrabold tracking-[-0.01em] text-ink">{title}</h2>
      {description && <p className="text-[1.02rem] text-ink-soft">{description}</p>}
      {note && <p className="mt-3.5 text-[0.82rem] text-ink-faint">{note}</p>}
    </Reveal>
  );
}
