import { createContext } from "react";
import type { Locale } from "./locale";

export type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggle: () => void;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);
