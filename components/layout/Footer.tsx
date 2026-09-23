import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
import { LineIcon } from "@/components/icons/UtilityIcons";
import { footerNavLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pt-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-8 px-6 pb-8">
        <div>
          <Link href="/" className="whitespace-nowrap text-[1.15rem] font-extrabold tracking-[0.06em] text-ink">
            NEWVA WEB AGENCY
          </Link>
          <p className="mt-2 text-[0.9rem] text-ink-soft">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="フッターナビゲーション" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerNavLinks.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </HashLink>
          ))}
          <a
            href="https://lin.ee/NP5sWDz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="NEWVA WEB AGENCY 公式LINE"
            className="-m-3 inline-flex h-11 w-11 items-center justify-center p-3 text-[#06C755] opacity-100 transition-opacity hover:opacity-75"
          >
            <LineIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>

      <p className="border-t border-line py-6 text-center text-[0.8rem] text-ink-faint">
        &copy; {year} NEWVA WEB AGENCY. All Rights Reserved.
      </p>
    </footer>
  );
}
