"use client";

import { useLayoutEffect } from "react";

/**
 * ブラウザ標準のスクロール位置復元(history.scrollRestoration = "auto")を無効化する。
 *
 * これが有効なままだと、リロード時にURLのhashとは無関係に
 * 「そのタブ/履歴エントリで最後にいたスクロール位置」へ自動的に戻ってしまう
 * （料金プランCTA等でContact付近までスクロールした状態を一度でも経験すると、
 * それ以降 http://localhost:3000 をリロードするたびにContact付近から始まる）。
 *
 * - URLにhashが無い通常アクセス/リロード → 常にページ最上部(Hero)から開始
 * - http://localhost:3000/#contact のようにhash付きでアクセス → ブラウザ標準の
 *   アンカー機能（該当idへの自動スクロール）はそのまま維持する
 */
export function ScrollRestorationManager() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
