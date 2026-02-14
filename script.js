/* ============================================================
   XZAR-X  —  Dual Personality Theme Engine + i18n
   ============================================================ */

(() => {
  'use strict';

  /* ==========================================================
     1.  TRANSLATIONS
     ========================================================== */
  const TRANSLATIONS = {
    en: {
      'hero.badge': 'Developer & Automator',
      'hero.title1': 'Building the Web.',
      'hero.title2': 'Automating the Rest.',
      'hero.subtitle': 'From pixel-perfect WordPress sites to intelligent Python bots and hardened security scripts — I ship solutions that work.',
      'hero.cta': 'See What I Do ↓',

      'services.tag': 'Services',
      'services.title': 'What I Bring to the Table',
      'services.web.title': 'WordPress & Web Sites',
      'services.web.desc': 'Custom themes, blazing-fast performance tuning, e-commerce setups and full-stack web solutions tailored to your brand.',
      'services.bots.title': 'Bots & Automation',
      'services.bots.desc': 'Python & Bash scripts that automate repetitive tasks, scrape data, integrate APIs and keep your workflow humming 24/7.',
      'services.sec.title': 'Cybersecurity & Scripts',
      'services.sec.desc': 'Penetration testing, security auditing, hardening scripts and custom tooling to keep your infrastructure locked down.',

      'projects.tag': 'Projects',
      'projects.title': 'My Projects',
      'projects.shadowmap.desc': 'Automated recon & reporting toolkit for Bug Bounty hunting. Reconnaissance, enumeration and report generation in one CLI.',
      'projects.focustrader.desc': 'Custom SMC-based trading assistant — smart money concepts analysis, automated signals and position management.',
      'projects.vulnmap.desc': 'Vulnerability mapping tool — scan, identify and catalog security weaknesses across network infrastructure.',
      'projects.hashmap.desc': 'Hash identification & cracking utility — recognize hash types and run dictionary/brute-force attacks.',
      'projects.dotfiles.desc': 'Automated dotfiles backup via GitHub Releases — version-controlled config snapshots with one command.',
      'projects.zdrowie.desc': 'Professional WP site for the eco industry. Dedicated lightweight theme, zero bloatware, performance-optimized with ACF-powered content management.',
      'projects.edutools.desc': 'EdTech app streamlining classroom lessons. RWD interface for interactive whiteboards, pure PHP/MySQL backend. Deployed and actively used in a school.',
      'projects.echosolver.desc': 'Accessibility tool removing barriers for blind users. Automates CAPTCHA using a hybrid engine (Neural/API) with 100% accuracy. Full NVDA integration & One-File EXE (Zero-Config) architecture.',

      'links.tag': 'Connect',
      'links.title': 'Find Me Online',

      'hire.title': 'Ready to Work Together?',
      'hire.subtitle': 'Let\'s turn your idea into reality. Click below to send me a project brief on Useme.',
      'hire.btn': '🚀 Hire Me',

      'footer.copy': '© 2026 Xzar-x — All rights reserved.',
    },
    pl: {
      'hero.badge': 'Developer & Automatyk',
      'hero.title1': 'Buduję Web.',
      'hero.title2': 'Automatyzuję Resztę.',
      'hero.subtitle': 'Od perfekcyjnych stron WordPress po inteligentne boty Python i skrypty bezpieczeństwa — dostarczam rozwiązania, które działają.',
      'hero.cta': 'Zobacz Co Robię ↓',

      'services.tag': 'Usługi',
      'services.title': 'Co Mogę Ci Zaoferować',
      'services.web.title': 'WordPress & Strony WWW',
      'services.web.desc': 'Autorskie motywy, optymalizacja wydajności, sklepy e-commerce i kompleksowe rozwiązania webowe dopasowane do Twojej marki.',
      'services.bots.title': 'Boty & Automatyzacja',
      'services.bots.desc': 'Skrypty Python & Bash automatyzujące powtarzalne zadania, scraping danych, integracje API — Twój workflow działa 24/7.',
      'services.sec.title': 'Cyberbezpieczeństwo & Skrypty',
      'services.sec.desc': 'Testy penetracyjne, audyty bezpieczeństwa, skrypty hardeningowe i narzędzia do ochrony Twojej infrastruktury.',

      'projects.tag': 'Projekty',
      'projects.title': 'Moje Projekty',
      'projects.shadowmap.desc': 'Zautomatyzowany toolkit rekonesansu i raportowania do Bug Bounty. Skanowanie, enumeracja i generowanie raportów w jednym CLI.',
      'projects.focustrader.desc': 'Asystent tradingowy oparty na SMC — analiza Smart Money Concepts, automatyczne sygnały i zarządzanie pozycjami.',
      'projects.vulnmap.desc': 'Narzędzie do mapowania podatności — skanuj, identyfikuj i kataloguj słabości bezpieczeństwa w infrastrukturze sieciowej.',
      'projects.hashmap.desc': 'Narzędzie do identyfikacji i łamania hashy — rozpoznawanie typów hashy oraz ataki słownikowe i brute-force.',
      'projects.dotfiles.desc': 'Automatyczny backup dotfiles przez GitHub Releases — wersjonowane snapshoty konfiguracji jednym poleceniem.',
      'projects.zdrowie.desc': 'Profesjonalna witryna WP dla branży eko. Lekki, dedykowany motyw, zero bloatware i optymalizacja wydajności. System ACF zapewniający intuicyjne zarządzanie treścią.',
      'projects.edutools.desc': 'Aplikacja EdTech usprawniająca prowadzenie lekcji. Responsywny interfejs zaprojektowany pod tablice interaktywne. Backend: czysty PHP/MySQL. Wdrożona i aktywnie wykorzystywana w szkole.',
      'projects.echosolver.desc': 'Narzędzie Accessibility usuwające bariery dla osób niewidomych. Automatyzuje CAPTCHA przy użyciu hybrydowego silnika (Neural/API) ze 100% skutecznością. Pełna integracja z NVDA i architektura One-File EXE (Zero-Config).',

      'links.tag': 'Kontakt',
      'links.title': 'Znajdź Mnie Online',

      'hire.title': 'Gotowy Na Współpracę?',
      'hire.subtitle': 'Zamieńmy Twój pomysł w rzeczywistość. Kliknij poniżej, aby wysłać mi brief projektu na Useme.',
      'hire.btn': '🚀 Zatrudnij Mnie',

      'footer.copy': '© 2026 Xzar-x — Wszelkie prawa zastrzeżone.',
    },
  };

  /* ==========================================================
     2.  DOM REFERENCES
     ========================================================== */
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const toggleLabel = document.querySelector('.theme-toggle__label');
  const glitchEls = document.querySelectorAll('.glitch');
  const i18nEls = document.querySelectorAll('[data-i18n]');
  const revealEls = document.querySelectorAll('.reveal');

  /* ==========================================================
     3.  CONSTANTS
     ========================================================== */
  const THEME_KEY = 'xzar-theme';
  const LANG_KEY = 'xzar-lang';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const LABEL_LIGHT = 'Trust';
  const LABEL_DARK = 'Hacker';
  const LANG_EN = 'en';
  const LANG_PL = 'pl';

  /* ==========================================================
     4.  STATE
     ========================================================== */
  let currentTheme = loadPref(THEME_KEY) || detectSystemTheme();
  let currentLang = loadPref(LANG_KEY) || LANG_EN;

  /* ==========================================================
     5.  INIT
     ========================================================== */
  applyTheme(currentTheme);
  applyLang(currentLang);
  initScrollReveal();

  /* ==========================================================
     6.  EVENT LISTENERS
     ========================================================== */

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    applyTheme(currentTheme);
    savePref(THEME_KEY, currentTheme);
  });

  // Language toggle
  langToggle.addEventListener('click', () => {
    currentLang = currentLang === LANG_EN ? LANG_PL : LANG_EN;
    applyLang(currentLang);
    savePref(LANG_KEY, currentLang);
  });

  /* ==========================================================
     7.  THEME HELPERS
     ========================================================== */

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggleLabel.textContent = theme === THEME_DARK ? LABEL_DARK : LABEL_LIGHT;
    syncGlitchAttributes();
  }

  function detectSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEME_DARK
      : THEME_LIGHT;
  }

  /* ==========================================================
     8.  i18n HELPERS
     ========================================================== */

  function applyLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[LANG_EN];

    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update active flag class on language buttons
    document.querySelectorAll('.lang-toggle__flag').forEach(flag => {
      flag.classList.toggle('active', flag.getAttribute('data-lang-active') === lang);
    });

    syncGlitchAttributes();
  }

  /* ==========================================================
     9.  SHARED UTILITIES
     ========================================================== */

  function syncGlitchAttributes() {
    glitchEls.forEach(el => {
      el.setAttribute('data-text', el.textContent);
    });
  }

  function loadPref(key) {
    return localStorage.getItem(key);
  }

  function savePref(key, value) {
    localStorage.setItem(key, value);
  }

  /* ==========================================================
     10. SCROLL REVEAL
     ========================================================== */

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach(el => observer.observe(el));
  }
})();
