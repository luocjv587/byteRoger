import type { Localized } from "../i18n/copy";

export type Work = {
  id: string;
  index: string;
  name: Localized;
  href: string;
  summary: Localized;
  tags: Localized[];
  applicationCategory?: string;
  operatingSystem?: string;
};

export const works: Work[] = [
  {
    id: "hellobaby",
    index: "01",
    name: { zh: "小宝日记", en: "HelloBaby" },
    href: "https://hellobaby.zecrs.com",
    summary: {
      zh: "宝宝日常记录。打开就记，家人共用一本日记。",
      en: "A baby-care diary. Open and log. The family shares one book.",
    },
    tags: [
      { zh: "本地优先", en: "Local-first" },
      { zh: "家人共享", en: "Family" },
    ],
  },
  {
    id: "huaxiaji",
    index: "02",
    name: { zh: "华夏迹", en: "Sinatrail" },
    href: "https://china.zecrs.com/",
    summary: {
      zh: "中国互动地图，收藏足迹，发现名胜与古迹。",
      en: "An interactive map of China — collect trails, find landmarks.",
    },
    tags: [
      { zh: "地图", en: "Map" },
      { zh: "足迹", en: "Trails" },
    ],
  },
  {
    id: "guess",
    index: "03",
    name: { zh: "每日猜成语", en: "Daily Idiom" },
    href: "https://guess.zecrs.com",
    summary: {
      zh: "每天一个成语，全球同题，纯前端本地作答。",
      en: "One idiom a day, same puzzle worldwide. Local, no server.",
    },
    tags: [
      { zh: "每日一题", en: "Daily" },
      { zh: "本地", en: "Local" },
    ],
  },
  {
    id: "items",
    index: "04",
    name: { zh: "我的物品", en: "My Items" },
    href: "https://items.zecrs.com",
    summary: {
      zh: "把家里的东西收进一份清单，随时可查。",
      en: "A quiet inventory of what you own, always at hand.",
    },
    tags: [{ zh: "清单", en: "Inventory" }],
  },
  {
    id: "zjh",
    index: "05",
    name: { zh: "炸金花", en: "Zha Jin Hua" },
    href: "https://zjh.zecrs.com",
    summary: {
      zh: "2–5 人实时牌桌，开房即玩，无需注册。",
      en: "Real-time cards for 2–5 friends. Open a room, no account.",
    },
    tags: [
      { zh: "实时", en: "Realtime" },
      { zh: "好友", en: "Friends" },
    ],
  },
  {
    id: "tank",
    index: "06",
    name: { zh: "Tank Arena", en: "Tank Arena" },
    href: "https://tank.zecrs.com",
    summary: {
      zh: "浏览器坦克对战：单人突围、联机、限时 PK。",
      en: "Browser tank combat: solo, co-op, and timed PvP.",
    },
    tags: [
      { zh: "对战", en: "Combat" },
      { zh: "浏览器", en: "Browser" },
    ],
  },
  {
    id: "wps",
    index: "07",
    name: { zh: "本地办公", en: "Local Office" },
    href: "https://wps.zecrs.com",
    summary: {
      zh: "浏览器打开 Excel / Word，文件留在本机。",
      en: "Open Excel and Word in the browser. Files stay on device.",
    },
    tags: [
      { zh: "本地优先", en: "Local-first" },
      { zh: "文档", en: "Docs" },
    ],
  },
  {
    id: "websnap",
    index: "08",
    name: { zh: "WebSnap", en: "WebSnap" },
    href: "https://chromewebstore.google.com/detail/websnap/lekllokjgmdnidpkhmfbbhoiagkpilfp",
    summary: {
      zh: "网页截图、长图与区域截图。自动命名，本地管理，支持 OCR。",
      en: "Capture a page, a long scroll, or a region. Auto-named, local library, OCR.",
    },
    tags: [
      { zh: "Chrome 插件", en: "Chrome" },
      { zh: "截图", en: "Screenshot" },
    ],
    applicationCategory: "BrowserApplication",
    operatingSystem: "Chrome",
  },
];
