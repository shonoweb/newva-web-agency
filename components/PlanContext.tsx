"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PlanContextValue {
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

/**
 * 料金プランのCTAクリックと、お問い合わせフォームのプラン選択を
 * セクションをまたいで連携させるための最小限のContext。
 * PlanProvider配下に渡された子要素はサーバーコンポーネントのままでよい。
 */
export function PlanProvider({ children }: { children: ReactNode }) {
  const [selectedPlan, setSelectedPlan] = useState("");
  return <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>{children}</PlanContext.Provider>;
}

export function usePlanContext() {
  const ctx = useContext(PlanContext);
  if (!ctx) {
    throw new Error("usePlanContext must be used within PlanProvider");
  }
  return ctx;
}
