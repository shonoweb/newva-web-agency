"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { isSamePageHash, scrollToHash } from "@/lib/scroll";

type Variant = "dark" | "ghost";
type Size = "base" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };
type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full whitespace-nowrap font-semibold tracking-[0.01em] transition-all duration-300 ease-[var(--ease-brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantClasses: Record<Variant, string> = {
  dark: "bg-dark text-white shadow-[0_10px_26px_rgba(22,22,26,0.22)] hover:bg-dark-hover hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(22,22,26,0.28)]",
  ghost: "border border-line bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink",
};

const sizeClasses: Record<Size, string> = {
  base: "px-[30px] py-3.5 text-[0.95rem]",
  lg: "px-[34px] py-4 text-base",
};

export function Button({
  variant = "dark",
  size = "base",
  block,
  className,
  children,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], block && "w-full", className);

  if (href) {
    if (isSamePageHash(href)) {
      const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        (onClick as ((event: MouseEvent<HTMLAnchorElement>) => void) | undefined)?.(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        scrollToHash(href);
      };

      return (
        <a href={href} className={classes} onClick={handleClick} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as AnchorHTMLAttributes<HTMLAnchorElement>["onClick"]}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick as ButtonHTMLAttributes<HTMLButtonElement>["onClick"]}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
