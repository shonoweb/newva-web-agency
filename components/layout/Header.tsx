"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { HashLink } from "@/components/ui/HashLink";
import { CloseIcon, MenuIcon } from "@/components/icons/UtilityIcons";
import { headerNavLinks } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * ブランドロゴ + ハンバーガーメニューのみのシンプルな構成。
 * ナビゲーションとCTAは常にハンバーガーパネルの中に格納する
 * （デスクトップでも水平ナビ・独立したCTAボタンは表示しない）。
 */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] h-[var(--header-h)] bg-white/70 backdrop-blur-xl backdrop-saturate-150 transition-[border-color,box-shadow] duration-300",
        isScrolled ? "border-b border-line shadow-[0_6px_24px_rgba(20,20,25,0.05)]" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-6 px-6">
        {isHome ? (
          <HashLink
            href="#home"
            onClick={closeNav}
            className="whitespace-nowrap text-base font-extrabold tracking-[0.04em] text-ink sm:text-[1.15rem] sm:tracking-[0.06em]"
          >
            NEWVA WEB AGENCY
          </HashLink>
        ) : (
          <Link
            href="/"
            onClick={closeNav}
            className="whitespace-nowrap text-base font-extrabold tracking-[0.04em] text-ink sm:text-[1.15rem] sm:tracking-[0.06em]"
          >
            NEWVA WEB AGENCY
          </Link>
        )}

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center"
          aria-expanded={isNavOpen}
          aria-controls="mobile-nav"
          aria-label="メニューを開閉する"
          onClick={() => setIsNavOpen((v) => !v)}
        >
          {isNavOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-label="メインナビゲーション"
        className={cn(
          "overflow-hidden border-b border-line bg-white shadow-[var(--shadow-md)] transition-[max-height] duration-[400ms] ease-[var(--ease-brand)]",
          isNavOpen ? "max-h-[480px]" : "max-h-0"
        )}
      >
        <ul className="px-6 pb-5 pt-2">
          {headerNavLinks.map((link) => (
            <li key={link.href} className="border-b border-line last:border-b-0">
              <HashLink
                href={link.href}
                onClick={closeNav}
                className="block min-h-11 py-3.5 text-[0.95rem] font-medium text-ink"
              >
                {link.label}
              </HashLink>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-6">
          <Button href="#contact" block onClick={closeNav}>
            無料相談はこちら
          </Button>
        </div>
      </div>
    </header>
  );
}
