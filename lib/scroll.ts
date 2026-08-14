/**
 * 同一ページ内のアンカースクロールを一箇所に集約するユーティリティ。
 *
 * Next.js App RouterのLinkはhrefが"#id"のみの同一ページ内リンクの場合、
 * URLのhash更新とスクロールが期待通りに連動しないことがある
 * （クリックしてもスクロールされない／リロード時に前回のhashへ飛ぶ）。
 * そのためContact等へのCTAはNext Linkを使わず、ここのscrollIntoViewで
 * 直接スクロールし、URL/履歴には一切触れない。
 */

export function isSamePageHash(href: string): boolean {
  return href.startsWith("#") && href.length > 1;
}

export function scrollToHash(href: string): void {
  const id = href.replace(/^#/, "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}
