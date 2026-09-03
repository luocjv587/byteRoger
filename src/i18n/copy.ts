import type { Locale } from "./locale";

export type Localized = {
  zh: string;
  en: string;
};

export function pick(value: Localized, locale: Locale): string {
  return value[locale];
}

const copy = {
  zh: {
    skip: "跳到作品",
    navWorks: "作品",
    navAbout: "关于",
    navAria: "页面",
    theme: {
      system: "系统",
      dark: "深色",
      light: "浅色",
    },
    themeAria: (current: string, next: string) =>
      `主题：${current}，点击切换为${next}`,
    langAria: "语言",
    heroRole: "个人开发者",
    heroLead: "科技让生活更美好",
    heroLeadAi: "拥抱 AI",
    worksKicker: "索引",
    worksTitle: "作品",
    visit: "访问",
    aboutKicker: "工作室",
    aboutTitle: "关于",
    aboutP1: "独立开发者。拥抱 AI，把一个想法更快收成能打开就用的东西。",
    aboutP2: "AI 用来加速做成，而不是堆功能。先能在本机用，不必注册；要共享时再连云。",
    contactGithub: "GitHub",
    contactEmail: "邮箱",
    documentTitle: "ByteRoger · 个人开发者",
    documentDescription:
      "科技让生活更美好，拥抱 AI。ByteRoger 的作品索引：小宝日记、华夏迹、每日猜成语、我的物品、炸金花、Tank Arena、本地办公与 WebSnap。",
  },
  en: {
    skip: "Skip to works",
    navWorks: "Works",
    navAbout: "About",
    navAria: "On this page",
    theme: {
      system: "System",
      dark: "Dark",
      light: "Light",
    },
    themeAria: (current: string, next: string) =>
      `Theme: ${current}. Click to switch to ${next}`,
    langAria: "Language",
    heroRole: "Independent developer",
    heroLead: "Technology makes life better",
    heroLeadAi: "Embrace AI",
    worksKicker: "Index",
    worksTitle: "Works",
    visit: "Visit",
    aboutKicker: "Studio",
    aboutTitle: "About",
    aboutP1:
      "Independent developer. Embrace AI, and turn an idea into something you can open and use — faster.",
    aboutP2:
      "AI is for shipping, not for piling on features. Start on-device, no sign-up. Connect to the cloud only when you need to share.",
    contactGithub: "GitHub",
    contactEmail: "Email",
    documentTitle: "ByteRoger · Independent developer",
    documentDescription:
      "Technology makes life better. Embrace AI. Works by ByteRoger: HelloBaby, Sinatrail, Daily Idiom, My Items, Zha Jin Hua, Tank Arena, Local Office, and WebSnap.",
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}

export const CONTACT = {
  email: "luocjv587@gmail.com",
  github: "https://github.com/luocjv587",
  githubLabel: "luocjv587",
} as const;
