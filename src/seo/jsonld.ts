import { works } from "../data/works";
import { CONTACT, getCopy, pick } from "../i18n/copy";
import type { Locale } from "../i18n/locale";
import { SITE_ORIGIN, SITE_URL } from "./site";

export function buildJsonLd(locale: Locale) {
  const text = getCopy(locale);
  const personId = `${SITE_URL}/#person`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_ORIGIN,
        name: "ByteRoger",
        alternateName: "zecrs.com",
        description: text.documentDescription,
        inLanguage: locale === "zh" ? "zh-CN" : "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "ByteRoger",
        alternateName: CONTACT.githubLabel,
        url: SITE_ORIGIN,
        email: CONTACT.email,
        jobTitle: text.heroRole,
        description: `${text.heroLead}. ${text.heroLeadAi}. ${text.aboutP1}`,
        sameAs: [CONTACT.github],
        knowsLanguage: ["zh-CN", "en"],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#works`,
        name: text.worksTitle,
        numberOfItems: works.length,
        itemListElement: works.map((work, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: pick(work.name, locale),
            alternateName: pick(work.name, locale === "zh" ? "en" : "zh"),
            url: work.href,
            description: pick(work.summary, locale),
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            author: { "@id": personId },
          },
        })),
      },
    ],
  };
}

export function jsonLdString(locale: Locale) {
  return JSON.stringify(buildJsonLd(locale));
}
