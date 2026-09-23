import Image from "next/image";
import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";
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
            aria-label="NEWVA WEB AGENCY LINE公式アカウント"
            className="inline-flex items-center justify-center p-1.5 opacity-100 transition-opacity hover:opacity-75 nav:p-3"
          >
            <Image
              src="/images/line/line-brand-icon.png"
              alt=""
              width={1000}
              height={1000}
              className="h-10 w-10 nav:h-5 nav:w-5"
            />
          </a>
        </nav>
      </div>

      <p className="border-t border-line py-6 text-center text-[0.8rem] text-ink-faint">
        &copy; {year} NEWVA WEB AGENCY. All Rights Reserved.
      </p>
    </footer>
  );
}
