import { InstagramIcon, XIcon } from "@/components/icons/UtilityIcons";
import { HashLink } from "@/components/ui/HashLink";
import { footerNavLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pt-14">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-start justify-between gap-8 px-6 pb-10">
        <div>
          <p className="text-[1.15rem] font-extrabold tracking-[0.06em] text-ink">{siteConfig.name}</p>
          <p className="mt-2 text-[0.9rem] text-ink-soft">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-x-6 gap-y-2">
          {footerNavLinks.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div aria-label="ソーシャルリンク" className="flex gap-3.5">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="X"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink"
          >
            <XIcon className="h-4 w-4" />
          </a>
        </div>
      </div>

      <p className="border-t border-line py-6 text-center text-[0.8rem] text-ink-faint">
        &copy; {year} {siteConfig.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
