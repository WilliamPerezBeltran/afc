/* ============================================================
   AFC INGENIERÍA & SERVICIOS — JS PRINCIPAL
   Sin dependencias externas.
   ============================================================ */
(function () {
  'use strict';

  /* --- Animaciones al hacer scroll (Intersection Observer) --- */
  var fadeEls = document.querySelectorAll('.afc-fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* --- Scroll suave para enlaces internos (#ancla) --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = this.getAttribute('href');
      if (hash.length < 2) return;
      var target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, '', hash);
      }
    });
  });

  /* --- Menú móvil (hamburguesa) --- */
  var toggle = document.getElementById('afcNavToggle');
  var menu = document.getElementById('afcNavMenu');
  if (toggle && menu) {
    var closeMenu = function () {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* --- Año dinámico en el footer --- */
  var yearEl = document.getElementById('afcYear');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
