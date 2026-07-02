document.addEventListener('DOMContentLoaded', () => {
  initLoadingBar();
  initNavbar();
  // heroGlobe removed — video background used instead
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
  setText('nav-inicio', t.nav.inicio);
  setText('nav-trayectoria', t.nav.trayectoria);
  setText('nav-servicios', t.nav.servicios);
  setText('nav-clientes', t.nav.clientes);
  setText('nav-empresa', t.nav.empresa);
  setText('nav-casos', t.nav.casos);
  setText('nav-blog', t.nav.blog);
  setText('nav-contacto', t.nav.contacto);

  // Hero
  setText('hero-badge', t.hero.badge);
  setText('hero-title-start', t.hero.title);
  setText('hero-title-highlight', t.hero.titleHighlight);
  setText('hero-subtitle', t.hero.subtitle);
  setText('hero-desc', t.hero.desc);
  setText('hero-btn-primary', t.hero.btnPrimary);
  setText('hero-btn-outline', t.hero.btnOutline);

  // Home About
  setText('home-about-tag', t.homeAbout.tag);
  setText('home-about-title', t.homeAbout.title);
  setText('home-about-title-highlight', t.homeAbout.titleHighlight);
  setText('home-about-title-end', t.homeAbout.titleEnd);
  setText('home-about-subtitle', t.homeAbout.subtitle);
  setHtml('home-about-p1', t.homeAbout.p1);
  setHtml('home-about-p2', t.homeAbout.p2);
  setText('home-about-btn', t.homeAbout.btn);

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
      const link = card.querySelector('.read-more');
      if (link) link.href = 'blog-post.html?slug=' + d.slug;
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

  // Servicios page
  setText('servicios-tag', t.servicios.tag);
  setText('servicios-title', t.servicios.title);
  setText('servicios-title-highlight', t.servicios.titleHighlight);
  setText('servicios-subtitle', t.servicios.subtitle);
  const serviciosCards = document.querySelectorAll('.servicio-card');
  serviciosCards.forEach((card, i) => {
    if (t.servicios.items[i]) {
      const d = t.servicios.items[i];
      card.querySelector('h3').textContent = d.title;
      card.querySelector('p').textContent = d.desc;
    }
  });

  // Clientes page
  setText('clientes-tag', t.clientes.tag);
  setText('clientes-title', t.clientes.title);
  setText('clientes-title-highlight', t.clientes.titleHighlight);
  setText('clientes-subtitle', t.clientes.subtitle);
  const clientesItems = document.querySelectorAll('.cliente-item');
  clientesItems.forEach((item, i) => {
    if (t.clientes.items[i]) {
      item.querySelector('p').textContent = t.clientes.items[i].text;
    }
  });

  // Casos page
  setText('casos-tag', t.casos.tag);
  setText('casos-title', t.casos.title);
  setText('casos-title-highlight', t.casos.titleHighlight);
  setText('casos-subtitle', t.casos.subtitle);
  const casosCards = document.querySelectorAll('.caso-card');
  casosCards.forEach((card, i) => {
    if (t.casos.items[i]) {
      const d = t.casos.items[i];
      card.querySelector('h3').textContent = d.title;
      card.querySelector('p').textContent = d.desc;
    }
  });

  // Blog Post
  const blogPostContainer = document.getElementById('blog-post-container');
  if (blogPostContainer) {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    let post = null;
    for (const p of t.blog.posts) {
      if (p.slug === slug) { post = p; break; }
    }
    if (post) {
      setText('post-title', post.title);
      setText('post-date', post.date);
      setText('post-back', t.blog.backToBlog);
      const contentEl = document.getElementById('post-content');
      if (contentEl) {
        contentEl.innerHTML = post.content.map(p => {
          if (p.startsWith('<h2>')) return p;
          return '<p>' + p + '</p>';
        }).join('');
      }
      document.title = post.title + ' — Germán Muchico';
    }
  }

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
