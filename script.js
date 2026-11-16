/* Wayne 個人網站 — 多語言切換 */
(() => {
  "use strict";

  // 要新增語言：在 LANGS 加一筆，並在 T 加上同名的翻譯物件即可
  const LANGS = [
    { code: "zh-Hant", label: "繁體中文" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
  ];

  const T = {
    "zh-Hant": {
      "meta.title": "Wayne的個人網站",
      "meta.desc": "Wayne 的個人網站，分享作品、興趣與日常。",
      "aria.home": "Wayne首頁",
      "aria.nav": "主要導覽",
      "aria.lang": "切換語言",
      "aria.social": "社群連結",
      "nav.about": "關於",
      "nav.work": "作品",
      "nav.contact": "聯絡",
      "header.cta": "一起聊聊",
      "hero.eyebrow": "嗨，我是 Wayne",
      "hero.title": '用喜歡的方式，<br>好好<span class="outline-text">生活</span>',
      "hero.desc": '我正在努力學習Python<br class="desktop-break">但大部分的做品還是AI寫的',
      "hero.cta1": "看看我的作品",
      "hero.cta2": "多認識我一點",
      "hero.index": "你好阿 · 2026",
      "hero.scroll": "往下探索",
      "hero.alt": "Wayne 的個人照片：一隻穿著西裝的貓咪",
      "about.eyebrow": "01 / 關於我",
      "about.title": "你好，<br>很高興認識你。",
      "about.lead": "我是 Wayne，歡迎來到我的個人網站。",
      "about.body": "這裡整理了我的作品、興趣和日常，也放上了常用的社群連結",
      "work.eyebrow": "02 / 精選作品",
      "work.title": "我的精選作品",
      "wayhost.aria": "Wayhost 託管服務",
      "wayhost.tag": "免費的24/7託管",
      "wayhost.desc": "免費的24/7託管服務",
      "nuke.aria": "炸群機器人",
      "nuke.tag": "Discord上的炸群機器人",
      "nuke.title": "炸群機器人",
      "nuke.desc": "顧名思義，就是Discord上的炸群機器人",
      "cat.desc": "簡單的Minecraft啟動器",
      "contact.eyebrow": "03 / 聯絡我",
      "contact.title": "有個好點子？<br>我們來聊聊。",
      "contact.text": "不論是合作提案、工作機會，或只是想打聲招呼，我都很期待收到你的訊息。",
      "contact.note": '或透過<a href="#about">社群連結</a>跟我聊天',
      "footer.tagline": "用心生活，持續創作。",
    },

    en: {
      "meta.title": "Wayne's Personal Site",
      "meta.desc": "Wayne's personal website — projects, interests and everyday life.",
      "aria.home": "Wayne home",
      "aria.nav": "Main navigation",
      "aria.lang": "Change language",
      "aria.social": "Social links",
      "nav.about": "About",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "header.cta": "Let's talk",
      "hero.eyebrow": "Hi, I'm Wayne",
      "hero.title": 'Live well,<br>the way you <span class="outline-text">like</span>',
      "hero.desc": 'I\'m working hard to learn Python,<br class="desktop-break">but most of my projects are still written by AI.',
      "hero.cta1": "See my work",
      "hero.cta2": "Get to know me",
      "hero.index": "Hello · 2026",
      "hero.scroll": "Scroll down",
      "hero.alt": "Photo of Wayne: a cat wearing a suit",
      "about.eyebrow": "01 / About",
      "about.title": "Hello,<br>nice to meet you.",
      "about.lead": "I'm Wayne, and welcome to my personal website.",
      "about.body": "Here you'll find my projects, interests and daily life, along with my social links.",
      "work.eyebrow": "02 / Selected work",
      "work.title": "Selected work",
      "wayhost.aria": "Wayhost hosting service",
      "wayhost.tag": "Free 24/7 hosting",
      "wayhost.desc": "Free 24/7 hosting service",
      "nuke.aria": "Nuke bot",
      "nuke.tag": "A Discord server-nuking bot",
      "nuke.title": "Nuke Bot",
      "nuke.desc": "Exactly what it sounds like: a server-nuking bot for Discord.",
      "cat.desc": "A simple Minecraft launcher",
      "contact.eyebrow": "03 / Contact",
      "contact.title": "Got a great idea?<br>Let's talk.",
      "contact.text": "Whether it's a collaboration, a job opportunity, or just a hello, I'd love to hear from you.",
      "contact.note": 'Or reach me through my <a href="#about">social links</a>',
      "footer.tagline": "Live with care, keep creating.",
    },

    ja: {
      "meta.title": "Wayneの個人サイト",
      "meta.desc": "Wayneの個人サイト。作品、趣味、日常を紹介しています。",
      "aria.home": "Wayne ホーム",
      "aria.nav": "メインナビゲーション",
      "aria.lang": "言語を切り替え",
      "aria.social": "SNSリンク",
      "nav.about": "紹介",
      "nav.work": "作品",
      "nav.contact": "連絡",
      "header.cta": "話してみる",
      "hero.eyebrow": "こんにちは、Wayneです",
      "hero.title": '好きなやり方で、<br>ちゃんと<span class="outline-text">暮らす</span>',
      "hero.desc": 'Pythonを勉強中です。<br class="desktop-break">でも作品の多くはまだAIが書いています。',
      "hero.cta1": "作品を見る",
      "hero.cta2": "もっと知る",
      "hero.index": "こんにちは · 2026",
      "hero.scroll": "下へスクロール",
      "hero.alt": "Wayneの写真：スーツを着た猫",
      "about.eyebrow": "01 / 自己紹介",
      "about.title": "こんにちは、<br>はじめまして。",
      "about.lead": "Wayneです。個人サイトへようこそ。",
      "about.body": "ここには、作品や趣味、日常のこと、よく使うSNSのリンクをまとめています。",
      "work.eyebrow": "02 / 注目の作品",
      "work.title": "注目の作品",
      "wayhost.aria": "Wayhost ホスティングサービス",
      "wayhost.tag": "無料の24時間365日ホスティング",
      "wayhost.desc": "無料の24時間365日ホスティングサービス",
      "nuke.aria": "Nukeボット",
      "nuke.tag": "Discordのサーバー破壊ボット",
      "nuke.title": "Nukeボット",
      "nuke.desc": "名前のとおり、Discordのサーバーを荒らすボットです。",
      "cat.desc": "シンプルなMinecraftランチャー",
      "contact.eyebrow": "03 / 連絡先",
      "contact.title": "いいアイデアがある？<br>話してみましょう。",
      "contact.text": "コラボの提案、お仕事の依頼、ちょっとした挨拶など、お気軽にメッセージをください。",
      "contact.note": 'または<a href="#about">SNS</a>から気軽にどうぞ',
      "footer.tagline": "丁寧に暮らし、作り続ける。",
    },
  };

  const STORAGE_KEY = "wayne-lang";
  const codes = LANGS.map((l) => l.code);

  const store = {
    get() { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch { /* ignore */ } },
  };

  function detect() {
    const saved = store.get();
    if (saved && codes.includes(saved)) return saved;
    const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    for (const p of prefs) {
      const l = p.toLowerCase();
      if (l.startsWith("zh")) return "zh-Hant";
      if (l.startsWith("ja")) return "ja";
      if (l.startsWith("en")) return "en";
    }
    return "en";
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const button = $("#lang-button");
  const menu = $("#lang-menu");
  const current = $("#lang-current");
  let active = "zh-Hant";

  function apply(code, { save = true } = {}) {
    const dict = T[code] || T["zh-Hant"];
    const fallback = T["zh-Hant"];
    const t = (k) => (k in dict ? dict[k] : fallback[k]);
    active = code;

    document.documentElement.lang = code;
    document.title = t("meta.title");
    const meta = $("#meta-description");
    if (meta) meta.setAttribute("content", t("meta.desc"));

    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$("[data-i18n-alt]").forEach((el) => { el.setAttribute("alt", t(el.dataset.i18nAlt)); });

    current.textContent = LANGS.find((l) => l.code === code).label;
    $$("[role=option]", menu).forEach((li) => {
      li.setAttribute("aria-selected", String(li.dataset.code === code));
    });

    if (save) store.set(code);
  }

  /* ---------- 下拉選單 ---------- */
  LANGS.forEach(({ code, label }) => {
    const li = document.createElement("li");
    li.setAttribute("role", "option");
    li.setAttribute("tabindex", "-1");
    li.dataset.code = code;
    li.innerHTML = `<span class="lang-check" aria-hidden="true">✓</span><span>${label}</span>`;
    menu.appendChild(li);
  });

  function openMenu() {
    menu.hidden = false;
    button.setAttribute("aria-expanded", "true");
    const sel = $('[aria-selected="true"]', menu) || menu.firstElementChild;
    sel.focus();
  }
  function closeMenu(returnFocus = false) {
    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
    if (returnFocus) button.focus();
  }
  function choose(li) {
    apply(li.dataset.code);
    closeMenu(true);
  }

  button.addEventListener("click", () => (menu.hidden ? openMenu() : closeMenu()));

  menu.addEventListener("click", (e) => {
    const li = e.target.closest("[role=option]");
    if (li) choose(li);
  });

  menu.addEventListener("keydown", (e) => {
    const items = $$("[role=option]", menu);
    const i = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (i >= 0) choose(items[i]); }
    else if (e.key === "Escape") { e.preventDefault(); closeMenu(true); }
    else if (e.key === "Tab") { closeMenu(); }
  });

  document.addEventListener("click", (e) => {
    if (!menu.hidden && !e.target.closest("#lang-switcher")) closeMenu();
  });

  apply(detect(), { save: false });
})();
