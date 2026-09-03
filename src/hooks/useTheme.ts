import { useEffect, useState } from "react";

export type ThemePreference = "system" | "dark" | "light";

export const THEME_STORAGE_KEY = "br-theme";

const ORDER: ThemePreference[] = ["system", "dark", "light"];

function readPreference(): ThemePreference {
  const fromDom = document.documentElement.dataset.themePref;
  if (fromDom === "system" || fromDom === "dark" || fromDom === "light") {
    return fromDom;
  }
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "system" || stored === "dark" || stored === "light") {
      return stored;
    }
  } catch {
    /* private mode */
  }
  return "system";
}

function resolveTheme(preference: ThemePreference): "dark" | "light" {
  if (preference === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return preference;
}

export function applyTheme(preference: ThemePreference) {
  const resolved = resolveTheme(preference);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePref = preference;
  const themeColor = resolved === "dark" ? "#0B0C0E" : "#F4F2EC";
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColor);
}

export function nextPreference(current: ThemePreference): ThemePreference {
  return ORDER[(ORDER.indexOf(current) + 1) % ORDER.length];
}

export function useTheme() {
  const [preference, setPreference] = useState<ThemePreference>(readPreference);

  useEffect(() => {
    applyTheme(preference);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, preference);
    } catch {
      /* private mode */
    }

    if (preference !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  const cycle = () => setPreference((current) => nextPreference(current));

  return { preference, cycle };
}
