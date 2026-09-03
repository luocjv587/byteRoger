import { useEffect, useState } from "react";
import { nextPreference, useTheme, type ThemePreference } from "../hooks/useTheme";
import { getCopy } from "../i18n/copy";
import { useCurrentLocale } from "../i18n/useCurrentLocale";
import "./Header.css";

export function Header() {
  const { preference, cycle } = useTheme();
  const { locale, setLocale } = useCurrentLocale();
  const text = getCopy(locale);
  const [scrolled, setScrolled] = useState(false);
  const next = nextPreference(preference);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="wrap site-header__bar">
        <a className="site-header__brand" href="#top">
          ByteRoger
        </a>
        <nav className="site-header__nav" aria-label={text.navAria}>
          <a href="#works">{text.navWorks}</a>
          <a href="#about">{text.navAbout}</a>
        </nav>
        <div className="site-header__tools">
          <div className="lang-switch" role="group" aria-label={text.langAria}>
            <button
              type="button"
              className={locale === "zh" ? "is-active" : undefined}
              aria-pressed={locale === "zh"}
              onClick={() => setLocale("zh")}
            >
              中
            </button>
            <button
              type="button"
              className={locale === "en" ? "is-active" : undefined}
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="chip-toggle"
            onClick={cycle}
            aria-label={text.themeAria(text.theme[preference], text.theme[next])}
          >
            <ThemeGlyph preference={preference} />
            <span>{text.theme[preference]}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function ThemeGlyph({
  preference,
}: {
  preference: ThemePreference;
}) {
  if (preference === "dark") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path
          fill="currentColor"
          d="M10.4 2.1a6.2 6.2 0 1 0 3.5 11 6.4 6.4 0 0 1-5.2-10.4c.5-.4 1.3 0 1.1.7a5 5 0 0 0 .6-1.3Z"
        />
      </svg>
    );
  }
  if (preference === "light") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="8" r="2.4" fill="currentColor" />
        <path
          fill="currentColor"
          d="M7.4 1.2h1.2v2.1H7.4zm0 11.5h1.2v2.1H7.4zM1.2 7.4h2.1v1.2H1.2zm11.5 0h2.1v1.2h-2.1zM3.2 2.8l.85-.85 1.48 1.49-.85.84zm6.42 6.43.85-.85 1.48 1.49-.85.84zM3.2 13.2l.85.85 1.48-1.49-.85-.84zm6.42-6.43.85.85 1.48-1.49-.85-.84z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path fill="currentColor" d="M8 2.8a5.2 5.2 0 0 1 0 10.4Z" />
    </svg>
  );
}
