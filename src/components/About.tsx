import { CONTACT, getCopy } from "../i18n/copy";
import { useCurrentLocale } from "../i18n/useCurrentLocale";
import "./About.css";

export function About() {
  const { locale } = useCurrentLocale();
  const text = getCopy(locale);

  return (
    <section id="about" className="about">
      <div className="wrap about__grid">
        <div className="section-kicker about__kicker">
          <span>{text.aboutKicker}</span>
          <span>zecrs.com</span>
        </div>
        <h2 className="about__title">{text.aboutTitle}</h2>
        <p className="about__belief">{text.heroLead}</p>
        <div className="about__copy">
          <p>{text.aboutP1}</p>
          <p>{text.aboutP2}</p>
        </div>
        <ul className="about__contacts">
          <li>
            <span>{text.contactGithub}</span>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="me noopener noreferrer"
            >
              {CONTACT.githubLabel}
            </a>
          </li>
          <li>
            <span>{text.contactEmail}</span>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
