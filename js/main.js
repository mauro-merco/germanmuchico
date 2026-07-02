document.addEventListener('DOMContentLoaded', () => {
  initLoadingBar();
  initNavbar();
  initHeroGlobe();
  initScrollReveal();
  initTheme();
  initLanguage();
});

// ===== LOADING BAR =====
function initLoadingBar() {
  const loadingBar = document.getElementById('loadingBar');
  loadingBar.style.width = '60%';
  window.addEventListener('load', () => {
    loadingBar.style.width = '100%';
    setTimeout(() => { loadingBar.style.opacity = '0'; }, 500);
  });
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .timeline-item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ===== THEME TOGGLE =====
function initTheme() {
  const themeBtn = document.getElementById('themeBtn');
  const themeIcon = themeBtn.querySelector('.theme-icon');
  const saved = localStorage.getItem('theme');

  if (saved === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'theme-icon fas fa-sun';
  }

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    themeIcon.className = isLight ? 'theme-icon fas fa-sun' : 'theme-icon fas fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ===== LANGUAGE SWITCH =====
let currentLang = localStorage.getItem('lang') || 'es';

function initLanguage() {
  const langBtns = document.querySelectorAll('.lang-btn');
  const saved = localStorage.getItem('lang');
  if (saved) currentLang = saved;

  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
      localStorage.setItem('lang', currentLang);
      applyTranslations();
    });
  });

  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;

  // Nav
  setText('nav-about', t.nav.about);
  setText('nav-trajectory', t.nav.trajectory);
  setText('nav-blog', t.nav.blog);
  setText('nav-social', t.nav.social);
  setText('nav-contact', t.nav.contact);

  // Hero
  setText('hero-badge', t.hero.badge);
  setText('hero-title-start', t.hero.title);
  setText('hero-title-highlight', t.hero.titleHighlight);
  setText('hero-subtitle', t.hero.subtitle);
  setText('hero-desc', t.hero.desc);
  setText('hero-btn-primary', t.hero.btnPrimary);
  setText('hero-btn-outline', t.hero.btnOutline);

  // About
  setText('about-tag', t.about.tag);
  setText('about-title', t.about.title);
  setText('about-title-highlight', t.about.titleHighlight);
  setText('about-title-end', t.about.titleEnd);
  setText('about-subtitle', t.about.subtitle);
  setHtml('about-p1', t.about.p1);
  setHtml('about-p2', t.about.p2);
  setHtml('about-p3', t.about.p3);
  setHtml('about-p4', t.about.p4);
  setHtml('about-p5', t.about.p5);
  setText('about-h1-num', t.about.h1.num);
  setText('about-h1-label', t.about.h1.label);
  setText('about-h2-num', t.about.h2.num);
  setText('about-h2-label', t.about.h2.label);
  setText('about-h3-num', t.about.h3.num);
  setText('about-h3-label', t.about.h3.label);
  setText('about-h4-num', t.about.h4.num);
  setText('about-h4-label', t.about.h4.label);

  // Trajectory
  setText('trajectory-tag', t.trajectory.tag);
  setText('trajectory-title', t.trajectory.title);
  setText('trajectory-title-highlight', t.trajectory.titleHighlight);
  setText('trajectory-subtitle', t.trajectory.subtitle);

  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach((item, i) => {
    if (t.trajectory.items[i]) {
      const d = t.trajectory.items[i];
      item.querySelector('.year').textContent = d.year;
      item.querySelector('h3').textContent = d.title;
      item.querySelector('p').textContent = d.desc;
    }
  });

  // Blog
  setText('blog-tag', t.blog.tag);
  setText('blog-title', t.blog.title);
  setText('blog-title-highlight', t.blog.titleHighlight);
  setText('blog-subtitle', t.blog.subtitle);

  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach((card, i) => {
    if (t.blog.posts[i]) {
      const d = t.blog.posts[i];
      card.querySelector('.date').textContent = d.date;
      card.querySelector('h3').textContent = d.title;
      card.querySelector('p').textContent = d.desc;
    }
  });

  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(link => { link.textContent = t.blog.readMore; });

  // Social
  setText('social-tag', t.social.tag);
  setText('social-title', t.social.title);
  setText('social-title-highlight', t.social.titleHighlight);
  setText('social-subtitle', t.social.subtitle);

  // Contact
  setText('contact-tag', t.contact.tag);
  setText('contact-title', t.contact.title);
  setText('contact-title-highlight', t.contact.titleHighlight);
  setText('contact-desc', t.contact.desc);
  setText('contact-btn', t.contact.btn);

  // Footer
  setHtml('footer-i18n', t.footer);
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHtml(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
