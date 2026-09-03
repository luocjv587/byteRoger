import type { ReactNode } from "react";
import { LocaleContext } from "./locale-context";
import { useLocale } from "./locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const value = useLocale();
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
