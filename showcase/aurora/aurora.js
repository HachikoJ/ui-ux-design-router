const signals = {
  attention: { label: 'A quiet shift in attention', copy: 'The surface looks stable. The pattern underneath is not.', heights: [24, 44, 30, 60, 42, 72, 48, 84, 46, 90, 63] },
  trust: { label: 'Trust moves before conversion', copy: 'People rarely announce a decision. They leave small signals first.', heights: [61, 55, 72, 48, 64, 42, 58, 35, 50, 31, 43] },
  motion: { label: 'Momentum has a direction', copy: 'The important change is not speed. It is where the energy keeps returning.', heights: [25, 35, 43, 49, 58, 61, 68, 74, 81, 86, 92] }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

$$('.instrument-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    const signal = signals[tab.dataset.signal];
    $$('.instrument-tab').forEach((item) => {
      const active = item === tab;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', String(active));
    });
    $('#signal-label').textContent = signal.label;
    $('#signal-copy').textContent = signal.copy;
    $$('.instrument-chart i').forEach((bar, index) => { bar.style.height = `${signal.heights[index]}%`; });
  });
});

$$('[data-scroll]').forEach((button) => button.addEventListener('click', () => $(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' })));

const menuTrigger = $('.menu-trigger');
const mobileMenu = $('#mobile-menu');
menuTrigger?.addEventListener('click', () => {
  const open = menuTrigger.getAttribute('aria-expanded') === 'true';
  menuTrigger.setAttribute('aria-expanded', String(!open));
  mobileMenu.hidden = open;
});

$$('.mobile-menu a').forEach((link) => link.addEventListener('click', () => {
  menuTrigger.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }), { threshold: .12 });
$$('.reveal').forEach((item) => observer.observe(item));

$('#request-access')?.addEventListener('click', () => {
  const feedback = $('#cta-feedback');
  feedback.textContent = 'Thank you — the field team will be in touch shortly.';
  $('#request-access').textContent = 'Introduction requested';
  $('#request-access').disabled = true;
});
