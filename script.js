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

      'about.tag': 'About',
      'about.title': 'About Me',
      'about.intro': 'Hi! I\'m a developer with 15 years of experience. I don\'t learn on your project — I deliver ready, proven solutions.',
      'about.specLabel': 'I specialize in:',
      'about.spec1': '✅ Professional Websites & Stores: I build fast, modern sites that sell (WordPress, Wix, Custom).',
      'about.spec2': '✅ Repair & Optimization: Something broken? Slow site? I fix issues others can\'t handle.',
      'about.spec3': '✅ Data Security: I guarantee your site and customer data are safe (security audits, GDPR).',
      'about.whyLabel': 'Why work with me?',
      'about.why1': '🎯 Quality Guarantee: I code "clean" — your site will work for years.',
      'about.why2': '🎯 Communication: I speak human, not tech jargon.',
      'about.why3': '🎯 Invoice: Of course I issue a VAT invoice (via Useme).',
      'about.ctaText': 'Check my portfolio below (FocusTrader) — it\'s proof I can build advanced systems. Your project will be in good hands too.',

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
      'projects.autopilot.desc': 'Lead magnet automation for a leadership coach: diagnostic quiz (Tally) → scoring (Make) → personalized PDF report (PDFMonkey) → participant email → CRM entry (MailerLite). Stack: Tally / Make / PDFMonkey / MailerLite.',

      'links.tag': 'Connect',
      'links.title': 'Find Me Online',

      'hire.title': 'Ready to Work Together?',
      'hire.subtitle': 'Let\'s turn your idea into reality. Click below to send me a project brief on Useme.',
      'hire.btn': '🚀 Hire Me',

      'contact.tag': 'Contact',
      'contact.title': 'Get In Touch',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.subject': 'Subject',
      'contact.message': 'Message',
      'contact.send': '📩 Send Message',
      'contact.success': '✅ Message sent! I\'ll get back to you soon.',
      'contact.error': '❌ Something went wrong. Please try again.',

      'footer.copy': '© 2026 Xzar — All rights reserved.',

      'nav.about': 'About',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Contact',
    },
    pl: {
      'hero.badge': 'Developer & Automatyk',
      'hero.title1': 'Buduję Web.',
      'hero.title2': 'Automatyzuję Resztę.',
      'hero.subtitle': 'Od perfekcyjnych stron WordPress po inteligentne boty Python i skrypty bezpieczeństwa — dostarczam rozwiązania, które działają.',
      'hero.cta': 'Zobacz Co Robię ↓',

      'about.tag': 'O mnie',
      'about.title': 'O mnie',
      'about.intro': 'Cześć! Jestem programistą z 15-letnim stażem. Nie uczę się na Twoim zleceniu — dostarczam gotowe, sprawdzone rozwiązania.',
      'about.specLabel': 'Specjalizuję się w:',
      'about.spec1': '✅ Profesjonalne Strony i Sklepy: Tworzę szybkie, nowoczesne witryny, które sprzedają (WordPress, Wix, Custom).',
      'about.spec2': '✅ Naprawa i Optymalizacja: Coś nie działa? Strona wolno chodzi? Naprawiam błędy, z którymi inni sobie nie radzą.',
      'about.spec3': '✅ Bezpieczeństwo Danych: Gwarantuję, że Twoja strona i dane klientów są bezpieczne (audyty security, RODO).',
      'about.whyLabel': 'Dlaczego warto ze mną współpracować?',
      'about.why1': '🎯 Gwarancja jakości: Koduję "czysto" — strona będzie działać latami.',
      'about.why2': '🎯 Komunikacja: Mówię po ludzku, nie technicznym żargonem.',
      'about.why3': '🎯 Faktura: Oczywiście wystawiam fakturę VAT (przez Useme).',
      'about.ctaText': 'Zobacz moje portfolio poniżej (FocusTrader) — to dowód, że potrafię budować zaawansowane systemy. Twój projekt też będzie w dobrych rękach.',

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
      'projects.autopilot.desc': 'Automatyzacja lead magnet dla coacha liderskiego: quiz diagnostyczny (Tally) → scoring (Make) → spersonalizowany raport PDF (PDFMonkey) → email do uczestnika → zapis do CRM (MailerLite). Stack: Tally / Make / PDFMonkey / MailerLite.',

      'links.tag': 'Kontakt',
      'links.title': 'Znajdź Mnie Online',

      'hire.title': 'Gotowy Na Współpracę?',
      'hire.subtitle': 'Zamieńmy Twój pomysł w rzeczywistość. Kliknij poniżej, aby wysłać mi brief projektu na Useme.',
      'hire.btn': '🚀 Zatrudnij Mnie',

      'contact.tag': 'Kontakt',
      'contact.title': 'Napisz Do Mnie',
      'contact.name': 'Imię',
      'contact.email': 'Email',
      'contact.subject': 'Temat',
      'contact.message': 'Wiadomość',
      'contact.send': '📩 Wyślij Wiadomość',
      'contact.success': '✅ Wiadomość wysłana! Odezwę się wkrótce.',
      'contact.error': '❌ Coś poszło nie tak. Spróbuj ponownie.',

      'footer.copy': '© 2026 Xzar — Wszelkie prawa zastrzeżone.',

      'nav.about': 'O mnie',
      'nav.portfolio': 'Portfolio',
      'nav.contact': 'Kontakt',
    },
  };

  /* ==========================================================
     1b.  DARK MODE CONTENT OVERRIDES
          Same info — different tone. Hacker/technical vibe.
          Only keys listed here get swapped in dark mode.
     ========================================================== */
  const DARK_OVERRIDES = {
    en: {
      'hero.badge':    '> init xzar.exe',
      'hero.title1':   'Exploiting the Web.',
      'hero.title2':   'Automating the Rest.',
      'hero.subtitle':
        'Python bots, hardened scripts, zero-day mindset' +
        ' — shipping solutions that don\'t fail under pressure.',
      'hero.cta': './explore --what-i-do ↓',

      'about.tag':   'whoami',
      'about.title': 'whoami',
      'about.intro':
        '15 yrs in the terminal. I don\'t learn on your' +
        ' project — I ship battle-tested code. First try.',
      'about.specLabel': 'root@skills:~$',
      'about.spec1':
        '✅ Web Deployment: Fast, hardened sites —' +
        ' WordPress, custom stack, zero bloatware.',
      'about.spec2':
        '✅ Debug & Patch: I fix what others can\'t.' +
        ' Slow site? That\'s a vulnerability.',
      'about.spec3':
        '✅ OpSec & Data: Security audits, GDPR' +
        ' compliance, attack surface reduction.',
      'about.whyLabel': 'Why hire this instance?',
      'about.why1':
        '🎯 Clean code, zero tech debt' +
        ' — your stack won\'t rot.',
      'about.why2':
        '🎯 No jargon unless you want it.' +
        ' Clear comms, always.',
      'about.why3':
        '🎯 VAT invoice via Useme.' +
        ' Legit operator.',
      'about.ctaText':
        'FocusTrader in portfolio → advanced system,' +
        ' built solo. Your project: same treatment.',

      'services.tag':   'services.sh',
      'services.title': './list-services --verbose',
      'services.web.title': 'Web Deployment Stack',
      'services.web.desc':
        'Custom themes, performance hardening,' +
        ' e-commerce pipelines — production-grade,' +
        ' no bloat, fully auditable.',
      'services.bots.title': 'Bots & Automation Scripts',
      'services.bots.desc':
        'Python & Bash daemons — scraping, API' +
        ' integration, task automation.' +
        ' Runs 24/7. No babysitting.',
      'services.sec.title': 'Pentesting & Hardening',
      'services.sec.desc':
        'Recon, enumeration, exploit dev,' +
        ' hardening scripts. I find the holes' +
        ' before the adversary does.',

      'projects.tag':   'ls ~/projects',
      'projects.title': '~/projects $',

      'links.tag':   'locate --online',
      'links.title': 'locate xzar --network',

      'hire.title':    'Ready to Deploy?',
      'hire.subtitle':
        'Drop a project brief. I\'ll assess,' +
        ' quote, execute. No fluff.',
      'hire.btn': '🚀 ./hire-me --now',

      'contact.tag':     'open_channel',
      'contact.title':   '> open_channel',
      'contact.name':    'IDENTIFIER',
      'contact.email':   'RETURN_ADDR',
      'contact.subject': 'PAYLOAD_SUBJECT',
      'contact.message': 'MESSAGE_BODY',
      'contact.send':    '📩 ./send --message',

      'nav.about':     '~/about',
      'nav.portfolio': '~/projects',
      'nav.contact':   './contact',

      'footer.copy':
        '© 2026 Xzar — All rights reserved.' +
        ' | root@xzar:~$',
    },

    pl: {
      'hero.badge':    '> init xzar.exe',
      'hero.title1':   'Deploying Web.',
      'hero.title2':   'Automatyzuję Resztę.',
      'hero.subtitle':
        'Boty Python, skrypty hardeningowe, mindset' +
        ' zero-day — dostarczam rozwiązania które' +
        ' nie padają pod presją.',
      'hero.cta': './sprawdź-co-robię ↓',

      'about.tag':   'whoami',
      'about.title': 'whoami',
      'about.intro':
        '15 lat w terminalu. Nie uczę się na Twoim' +
        ' projekcie — dostarczam sprawdzony kod.' +
        ' Za pierwszym razem.',
      'about.specLabel': 'root@skills:~$',
      'about.spec1':
        '✅ Web Deployment: Szybkie, zahardowane' +
        ' serwisy — WordPress, custom stack,' +
        ' zero bloatware.',
      'about.spec2':
        '✅ Debug & Patch: Naprawiam to,' +
        ' czego inni nie ogarniają.' +
        ' Wolna strona? To podatność.',
      'about.spec3':
        '✅ OpSec & Data: Audyty security, RODO,' +
        ' redukcja attack surface.',
      'about.whyLabel': 'Dlaczego ten instance?',
      'about.why1':
        '🎯 Czysty kod, zero tech debt' +
        ' — Twój stack nie będzie gniłem.',
      'about.why2':
        '🎯 Bez żargonu jeśli nie chcesz.' +
        ' Czysta komunikacja, zawsze.',
      'about.why3':
        '🎯 Faktura VAT przez Useme.' +
        ' Legalny operator.',
      'about.ctaText':
        'FocusTrader w portfolio → zaawansowany' +
        ' system, zbudowany solo.' +
        ' Twój projekt: to samo podejście.',

      'services.tag':   'services.sh',
      'services.title': './lista-usług --verbose',
      'services.web.title': 'Web Deployment Stack',
      'services.web.desc':
        'Autorskie motywy, hardening wydajności,' +
        ' pipelines e-commerce — produkcyjny' +
        ' standard, zero bloatu.',
      'services.bots.title': 'Boty & Skrypty Automatyzacji',
      'services.bots.desc':
        'Daemony Python & Bash — scraping,' +
        ' integracje API, automatyzacja zadań.' +
        ' Działa 24/7. Bez nadzoru.',
      'services.sec.title': 'Pentesting & Hardening',
      'services.sec.desc':
        'Recon, enumeracja, exploit dev, skrypty' +
        ' hardeningowe. Znajduję dziury zanim' +
        ' zrobi to atakujący.',

      'projects.tag':   'ls ~/projekty',
      'projects.title': '~/projekty $',

      'links.tag':   'locate --online',
      'links.title': 'locate xzar --network',

      'hire.title':    'Gotowy Na Deploy?',
      'hire.subtitle':
        'Wrzuć brief projektu. Ocenię,' +
        ' wycenię, wykonam. Bez lania wody.',
      'hire.btn': '🚀 ./zatrudnij-mnie --now',

      'contact.tag':     'open_channel',
      'contact.title':   '> open_channel',
      'contact.name':    'IDENTYFIKATOR',
      'contact.email':   'ADRES_ZWROTNY',
      'contact.subject': 'TEMAT_PAYLOAD',
      'contact.message': 'TREŚĆ_WIADOMOŚCI',
      'contact.send':    '📩 ./wyślij --wiadomość',

      'nav.about':     '~/o-mnie',
      'nav.portfolio': '~/projekty',
      'nav.contact':   './kontakt',

      'footer.copy':
        '© 2026 Xzar — Wszelkie prawa zastrzeżone.' +
        ' | root@xzar:~$',
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
  const LABEL_LIGHT = 'Light';
  const LABEL_DARK = 'Dark';
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

  // Theme toggle — fade content during swap
  themeToggle.addEventListener('click', () => {
    document.body.classList.add('theme-transitioning');
    setTimeout(() => {
      currentTheme =
        currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
      applyTheme(currentTheme);
      savePref(THEME_KEY, currentTheme);
      document.body.classList.remove('theme-transitioning');
    }, 280);
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
    toggleLabel.textContent =
      theme === THEME_DARK ? LABEL_DARK : LABEL_LIGHT;
    /* Re-render text with correct tone for active theme */
    applyLang(currentLang);
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

    const base  = TRANSLATIONS[lang]  || TRANSLATIONS[LANG_EN];
    const dark  = DARK_OVERRIDES[lang] || DARK_OVERRIDES[LANG_EN];
    const isDark =
      root.getAttribute('data-theme') === THEME_DARK;

    /* Merge: dark overrides on top of base when in dark mode */
    const dict = isDark
      ? Object.assign({}, base, dark)
      : base;

    i18nEls.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    /* Update active flag */
    document.querySelectorAll('.lang-toggle__flag').forEach(flag => {
      flag.classList.toggle(
        'active',
        flag.getAttribute('data-lang-active') === lang
      );
    });
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

  /* ==========================================================
     11. SCROLL SPY
     ========================================================== */

  function initScrollSpy() {
    const spySections = [
      document.getElementById('about'),
      document.getElementById('projects'),
      document.getElementById('contact'),
    ].filter(Boolean);

    const navLinks = document.querySelectorAll('.nav__link');
    if (!navLinks.length) return;

    function updateActive() {
      /* Trigger point: 45 % down the viewport */
      const trigger = window.scrollY + window.innerHeight * 0.45;
      let activeId = null;

      spySections.forEach(section => {
        if (section.offsetTop <= trigger) {
          activeId = section.id;
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${activeId}`
        );
      });
    }

    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();
  }

  initScrollSpy();

  /* ==========================================================
     12. HAMBURGER MENU
     ========================================================== */

  function initHamburger() {
    const hamburger = document.getElementById('nav-hamburger');
    const navList   = document.getElementById('nav-list');
    if (!hamburger || !navList) return;

    function close() {
      hamburger.setAttribute('aria-expanded', 'false');
      navList.classList.remove('open');
    }

    function open() {
      hamburger.setAttribute('aria-expanded', 'true');
      navList.classList.add('open');
    }

    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? close() : open();
    });

    /* Close on nav link click (scroll → destination) */
    navList.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', close);
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (!e.target.closest('#main-nav')) close();
    });
  }

  initHamburger();

  /* ==========================================================
     8.  CONTACT FORM (Formspree AJAX)
     ========================================================== */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const btn = contactForm.querySelector('.contact__btn');
      const status = document.getElementById('contact-status');
      const lang = root.getAttribute('data-lang') || 'en';

      btn.disabled = true;
      btn.textContent = '⏳';
      status.textContent = '';
      status.className = 'contact__status';

      try {
        const data = new FormData(contactForm);
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          status.textContent = TRANSLATIONS[lang]['contact.success'];
          status.classList.add('contact__status--ok');
          contactForm.reset();
        } else {
          throw new Error('fail');
        }
      } catch {
        status.textContent = TRANSLATIONS[lang]['contact.error'];
        status.classList.add('contact__status--err');
      } finally {
        btn.disabled = false;
        btn.textContent = TRANSLATIONS[lang]['contact.send'];
      }
    });
  }
})();

/* =============================================================
   SERVICE WORKER — rejestracja PWA
   Musi istnieć plik sw.js w katalogu głównym (obok index.html).
   ============================================================= */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(reg => {
        console.log('[SW] Zarejestrowano:', reg.scope);
      })
      .catch(err => {
        console.warn('[SW] Błąd rejestracji:', err);
      });
  });
}
