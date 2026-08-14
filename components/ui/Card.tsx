import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  /** flat: 背景色のみのカード（problem/mission等） / elevated: 影+ホバーで浮き上がるカード（service/commitment等） */
  variant?: "flat" | "elevated";
  className?: string;
  children: ReactNode;
}

export function Card({ variant = "flat", className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px]",
        variant === "flat" && "bg-surface",
        variant === "elevated" &&
          "bg-white shadow-[var(--shadow-sm)] transition-all duration-400 ease-[var(--ease-brand)] hover:-translate-y-2 hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      {children}
    </div>
  );
}
