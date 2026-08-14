"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { isSamePageHash, scrollToHash } from "@/lib/scroll";

interface HashLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: ReactNode;
}

/**
 * 同一ページ内のセクションへのテキストリンク（Header/Footerのナビ等）。
 * 見た目・DOM上は通常の<a>だが、クリック時はscrollIntoViewで直接スクロールし、
 * URLにhashを付与しない（Buttonコンポーネントの同一ページhref処理と同じ仕組みを共有）。
 */
export function HashLink({ href, onClick, children, ...rest }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (isSamePageHash(href)) {
      event.preventDefault();
      scrollToHash(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
