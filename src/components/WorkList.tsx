import { useState } from "react";
import { works } from "../data/works";
import { getCopy, pick } from "../i18n/copy";
import { useCurrentLocale } from "../i18n/useCurrentLocale";
import "./WorkList.css";

function isFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function WorkList() {
  const { locale } = useCurrentLocale();
  const text = getCopy(locale);
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="works" className="works">
      <div className="wrap">
        <div className="section-kicker">
          <span>{text.worksKicker}</span>
          <span>01 — {String(works.length).padStart(2, "0")}</span>
        </div>
        <h2 className="works__title">{text.worksTitle}</h2>
        <ol className="work-list">
          {works.map((work) => {
            const open = openId === work.id;
            return (
              <li
                key={work.id}
                className={open ? "work-item is-open" : "work-item"}
                onClick={() => {
                  if (isFinePointer()) return;
                  setOpenId((current) => (current === work.id ? null : work.id));
                }}
              >
                <article className="work-item__row">
                  <span className="work-item__index">{work.index}</span>
                  <div className="work-item__copy">
                    <div className="work-item__head">
                      <h3>{pick(work.name, locale)}</h3>
                      <ul className="work-item__tags">
                        {work.tags.map((tag) => (
                          <li key={tag.zh}>{pick(tag, locale)}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="work-item__desc">
                      <span>{pick(work.summary, locale)}</span>
                    </p>
                  </div>
                  <a
                    className="work-item__link"
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {text.visit}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
