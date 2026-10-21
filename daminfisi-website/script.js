/* ДАМИНФИСИ — интерактивност на сайта (без зависимости) */
(function () {
  'use strict';

  var doc = document.documentElement;
  doc.classList.add('js');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------- Header: прозрачен над героя, плътен при скрол, скрива се при скрол надолу ---------- */
  var header = $('.site-header');
  var lastY = window.scrollY;
  function onScroll() {
    var y = window.scrollY;
    if (!header) return;
    var solidAt = header.hasAttribute('data-solid') ? -1 : 40;
    header.classList.toggle('is-solid', y > solidAt);
    var hide = y > 480 && y > lastY && !document.body.classList.contains('nav-open') && !header.contains(document.activeElement);
    header.classList.toggle('is-hidden', hide);
    document.body.classList.toggle('header-hidden', hide);
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Падащо меню „Направления“ ---------- */
  $$('.has-dropdown').forEach(function (item) {
    var trigger = $('.main-nav__link', item);
    var closeTimer;
    function open() { clearTimeout(closeTimer); item.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); }
    function close() { item.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); }
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.contains('is-open') ? close() : open();
    });
    item.addEventListener('mouseenter', function () { if (window.matchMedia('(hover: hover)').matches) open(); });
    item.addEventListener('mouseleave', function () { if (window.matchMedia('(hover: hover)').matches) closeTimer = setTimeout(close, 160); });
    item.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); trigger.focus(); }
    });
    item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) close(); });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) close(); });
  });

  /* ---------- Мобилна навигация ---------- */
  var toggle = $('.nav-toggle');
  var mobileNav = $('#mobile-nav');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Затвори менюто' : 'Отвори менюто');
    mobileNav.setAttribute('aria-hidden', String(!open));
    if (open) { mobileNav.removeAttribute('inert'); } else { mobileNav.setAttribute('inert', ''); }
    if (open) { var first = $('a, button', mobileNav); if (first) first.focus(); }
  }
  if (toggle && mobileNav) {
    mobileNav.setAttribute('inert', '');
    toggle.addEventListener('click', function () { setNav(!document.body.classList.contains('nav-open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { setNav(false); toggle.focus(); }
    });
    $$('a', mobileNav).forEach(function (a) { a.addEventListener('click', function () { setNav(false); }); });
    $$('.mobile-nav__sub-toggle', mobileNav).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = document.getElementById(btn.getAttribute('aria-controls'));
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        sub.classList.toggle('is-open', !expanded);
      });
    });
    window.addEventListener('resize', function () { if (window.innerWidth > 1024 && document.body.classList.contains('nav-open')) setNav(false); });
  }

  /* ---------- Начален герой: смяна на кадрите, синхронизирана с индекса на направленията ---------- */
  var hero = $('.hero[data-slider]');
  if (hero) {
    var slides = $$('.hero__slide', hero);
    var marks = $$('.hero__index li', hero);
    var ms = parseInt(hero.getAttribute('data-interval'), 10) || 7000;
    var current = 0, timer;
    hero.style.setProperty('--slide-ms', ms + 'ms');
    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('is-active', k === current); });
      marks.forEach(function (m, k) {
        m.classList.remove('is-active');
        if (k === current) { void m.offsetWidth; m.classList.add('is-active'); }
      });
    }
    function play() { clearInterval(timer); if (!reduceMotion) timer = setInterval(function () { show(current + 1); }, ms); }
    marks.forEach(function (m, k) {
      m.addEventListener('mouseenter', function () { clearInterval(timer); hero.classList.add('is-paused'); show(k); });
      m.addEventListener('focusin', function () { clearInterval(timer); hero.classList.add('is-paused'); show(k); });
      m.addEventListener('mouseleave', function () { hero.classList.remove('is-paused'); show(k); play(); });
    });
    document.addEventListener('visibilitychange', function () { document.hidden ? clearInterval(timer) : play(); });
    if (reduceMotion) hero.classList.add('is-paused');
    show(0); play();
  }

  /* ---------- Поява при скрол ---------- */
  var revealEls = $$('.reveal, .reveal-img');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Подменю на страниците по направления: активна секция ---------- */
  var subLinks = $$('.subnav a[href^="#"]');
  if (subLinks.length && 'IntersectionObserver' in window) {
    var map = {};
    subLinks.forEach(function (a) { var t = document.getElementById(a.getAttribute('href').slice(1)); if (t) map[t.id] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          subLinks.forEach(function (a) { a.classList.remove('is-active'); });
          var link = map[en.target.id];
          if (link) {
            link.classList.add('is-active');
            var list = link.closest('.subnav__list');
            if (list) list.scrollTo({ left: link.parentElement.offsetLeft - 20, behavior: reduceMotion ? 'auto' : 'smooth' });
          }
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(map).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  /* ---------- Табове ---------- */
  $$('[data-tabs]').forEach(function (wrap) {
    var btns = $$('[role="tab"]', wrap);
    function select(btn, focus) {
      btns.forEach(function (b) {
        var on = b === btn;
        b.setAttribute('aria-selected', String(on));
        b.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(b.getAttribute('aria-controls'));
        panel.hidden = !on;
        if (on) { panel.classList.remove('is-entering'); void panel.offsetWidth; panel.classList.add('is-entering'); }
      });
      if (focus) btn.focus();
    }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(b); });
      b.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = btns[(i + 1) % btns.length];
        if (e.key === 'ArrowLeft') n = btns[(i - 1 + btns.length) % btns.length];
        if (e.key === 'Home') n = btns[0];
        if (e.key === 'End') n = btns[btns.length - 1];
        if (n) { e.preventDefault(); select(n, true); }
      });
    });
  });

  /* ---------- Хоризонтална лента с изображения ---------- */
  $$('[data-strip]').forEach(function (wrap) {
    var strip = $('.strip', wrap);
    $$('[data-strip-dir]', wrap).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = parseInt(btn.getAttribute('data-strip-dir'), 10);
        var step = strip.querySelector('figure').getBoundingClientRect().width + 12;
        strip.scrollBy({ left: dir * step, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    });
  });

  /* ---------- Галерия: филтри + lightbox ---------- */
  var gallery = $('.gallery');
  if (gallery) {
    var items = $$('.gallery__item', gallery);
    $$('.filter').forEach(function (f) {
      f.addEventListener('click', function () {
        var cat = f.getAttribute('data-filter');
        $$('.filter').forEach(function (x) { x.setAttribute('aria-pressed', String(x === f)); });
        items.forEach(function (it) {
          it.classList.toggle('is-hidden', cat !== 'all' && it.getAttribute('data-cat') !== cat);
        });
      });
    });

    var lb = $('#lightbox');
    if (lb && typeof lb.showModal === 'function') {
      var lbImg = $('img', lb), lbCap = $('.lightbox__foot', lb), lbCount = $('.lightbox__count', lb);
      var visible = [], idx = 0;
      function render() {
        var it = visible[idx];
        var img = $('img', it);
        lbImg.src = img.getAttribute('src');
        lbImg.alt = img.alt;
        lbCap.textContent = $('.gallery__title', it).textContent;
        lbCount.textContent = (idx + 1) + ' / ' + visible.length;
      }
      items.forEach(function (it) {
        $('.gallery__btn', it).addEventListener('click', function () {
          visible = items.filter(function (x) { return !x.classList.contains('is-hidden'); });
          idx = visible.indexOf(it);
          render();
          lb.showModal();
        });
      });
      $('[data-lb="close"]', lb).addEventListener('click', function () { lb.close(); });
      $('[data-lb="prev"]', lb).addEventListener('click', function () { idx = (idx - 1 + visible.length) % visible.length; render(); });
      $('[data-lb="next"]', lb).addEventListener('click', function () { idx = (idx + 1) % visible.length; render(); });
      lb.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') { idx = (idx - 1 + visible.length) % visible.length; render(); }
        if (e.key === 'ArrowRight') { idx = (idx + 1) % visible.length; render(); }
      });
      lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lightbox__stage')) lb.close(); });
    }
  }

  /* ---------- Формуляр за запитване ----------
     Изпращането се активира, когато във form[data-endpoint] се зададе адрес на услуга
     (напр. Formspree, Getform, Basin или собствена Cloudflare Pages Function), която
     приема POST с FormData и връща 2xx при успех. Без зададен адрес формулярът НЕ
     симулира успешно изпращане. */
  var form = $('#inquiry-form');
  if (form) {
    var status = $('.form-status', form);
    var submitBtn = $('button[type="submit"]', form);

    // Предварителен избор на направление от адреса (?napravlenie=...)
    var params = new URLSearchParams(window.location.search);
    var pre = params.get('napravlenie');
    var select = form.querySelector('select[name="napravlenie"]');
    if (pre && select && select.querySelector('option[value="' + pre + '"]')) select.value = pre;

    var messages = {
      valueMissing: 'Моля, попълнете това поле.',
      typeMismatch: 'Моля, въведете валиден имейл адрес.',
      patternMismatch: 'Моля, въведете валиден телефонен номер.',
      tooShort: 'Съобщението е твърде кратко.'
    };
    function validateField(el) {
      var field = el.closest('.field');
      if (!field) return true;
      var err = $('.field__error', field);
      var msg = '';
      if (!el.validity.valid) {
        for (var k in messages) { if (el.validity[k]) { msg = messages[k]; break; } }
        if (!msg) msg = 'Моля, проверете въведената стойност.';
      }
      field.classList.toggle('has-error', !!msg);
      el.setAttribute('aria-invalid', msg ? 'true' : 'false');
      if (err) err.textContent = msg;
      return !msg;
    }
    $$('input, select, textarea', form).forEach(function (el) {
      el.addEventListener('blur', function () { if (el.value) validateField(el); });
      el.addEventListener('input', function () { if (el.closest('.field.has-error')) validateField(el); });
    });
    function showStatus(type, text) {
      status.className = 'form-status form-status--' + type + ' is-visible';
      status.textContent = text;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true, firstBad = null;
      $$('input:not([type="hidden"]):not(.form-hp input), select, textarea', form).forEach(function (el) {
        if (el.closest('.form-hp')) return;
        if (!validateField(el)) { ok = false; if (!firstBad) firstBad = el; }
      });
      if (!ok) { firstBad.focus(); showStatus('error', 'Моля, коригирайте отбелязаните полета.'); return; }
      if (form.querySelector('.form-hp input').value) return; // спам защита

      var endpoint = (form.getAttribute('data-endpoint') || '').trim();
      if (!endpoint) {
        showStatus('info', 'Онлайн изпращането на запитвания все още не е активирано. Данните Ви не са изпратени. Моля, свържете се с нас директно, докато формулярът бъде свързан с услуга за изпращане.');
        return;
      }

      submitBtn.disabled = true;
      var label = submitBtn.querySelector('span');
      var original = label.textContent;
      label.textContent = 'Изпращане…';
      fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          form.reset();
          showStatus('success', 'Благодарим Ви! Запитването е изпратено успешно. Ще се свържем с Вас.');
        })
        .catch(function () {
          showStatus('error', 'Възникна проблем при изпращането. Моля, опитайте отново по-късно или се свържете с нас директно.');
        })
        .then(function () { submitBtn.disabled = false; label.textContent = original; });
    });
  }

  /* ---------- Година във футъра ---------- */
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
