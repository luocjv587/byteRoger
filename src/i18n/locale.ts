import { useEffect, useState } from "react";

export type Locale = "zh" | "en";

export const LOCALE_STORAGE_KEY = "br-locale";

function isLocale(value: string | null | undefined): value is Locale {
  return value === "zh" || value === "en";
}

function browserLocale(): Locale {
  const language = navigator.language?.toLowerCase() ?? "";
  return language.startsWith("zh") ? "zh" : "en";
}

export function readLocale(): Locale {
  const fromDom = document.documentElement.dataset.locale;
  if (isLocale(fromDom)) return fromDom;
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* private mode */
  }
  return browserLocale();
}

export function applyLocale(locale: Locale) {
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.documentElement.dataset.locale = locale;
}

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(readLocale);

  useEffect(() => {
    applyLocale(locale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      /* private mode */
    }
  }, [locale]);

  const toggle = () => setLocale((current) => (current === "zh" ? "en" : "zh"));

  return { locale, setLocale, toggle };
}
