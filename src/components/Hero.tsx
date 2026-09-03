import { getCopy } from "../i18n/copy";
import { useCurrentLocale } from "../i18n/useCurrentLocale";
import "./Hero.css";

export function Hero() {
  const { locale } = useCurrentLocale();
  const text = getCopy(locale);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <div className="hero__frame" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <p className="hero__meta">
          <span>{text.heroRole}</span>
          <span className="hero__rule" />
          <span>{text.heroWorks}</span>
        </p>
        <h1 id="hero-title" className="hero__title">
          ByteRoger
        </h1>
        <p className="hero__lead">{text.heroLead}</p>
        <p className="hero__lead-ai">{text.heroLeadAi}</p>
      </div>
    </section>
  );
}
