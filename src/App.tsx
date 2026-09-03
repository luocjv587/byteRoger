import { useEffect } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WorkList } from "./components/WorkList";
import { getCopy } from "./i18n/copy";
import { LocaleProvider } from "./i18n/LocaleContext";
import { useCurrentLocale } from "./i18n/useCurrentLocale";
import { jsonLdString } from "./seo/jsonld";
import { OG_IMAGE_ALT } from "./seo/site";

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function DocumentMeta() {
  const { locale } = useCurrentLocale();
  const text = getCopy(locale);

  useEffect(() => {
    const ogLocale = locale === "zh" ? "zh_CN" : "en_US";
    document.title = text.documentTitle;
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    setMeta('meta[name="description"]', text.documentDescription);
    setMeta('meta[property="og:title"]', text.documentTitle);
    setMeta('meta[property="og:description"]', text.documentDescription);
    setMeta('meta[property="og:locale"]', ogLocale);
    setMeta('meta[property="og:image:alt"]', OG_IMAGE_ALT);
    setMeta('meta[name="twitter:title"]', text.documentTitle);
    setMeta('meta[name="twitter:description"]', text.documentDescription);

    let script = document.getElementById("jsonld-dynamic");
    if (!script) {
      script = document.createElement("script");
      script.id = "jsonld-dynamic";
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = jsonLdString(locale);
  }, [locale, text]);

  return null;
}

function Page() {
  const { locale } = useCurrentLocale();
  const text = getCopy(locale);

  return (
    <div className="page">
      <DocumentMeta />
      <a className="skip-link" href="#works">
        {text.skip}
      </a>
      <Header />
      <main id="top">
        <Hero />
        <WorkList />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <Page />
    </LocaleProvider>
  );
}
