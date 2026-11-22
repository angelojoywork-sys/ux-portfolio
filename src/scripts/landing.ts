import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Keep the hero exactly one screen tall below the top bar
const bar = document.querySelector<HTMLElement>('.topbar');
const setBar = () => bar && document.documentElement.style.setProperty('--topbar-h', `${bar.offsetHeight}px`);
setBar();
window.addEventListener('resize', setBar);
document.fonts?.ready.then(setBar);

// Live local-time clocks
const clocks = document.querySelectorAll<HTMLElement>('[data-clock]');
const tick = () => {
  for (const el of clocks) {
    el.textContent = new Intl.DateTimeFormat('en-US', {
      hour: '2-digit', minute: '2-digit', hour12: false, timeZone: el.dataset.tz,
    }).format(new Date());
  }
};
tick();
setInterval(tick, 15_000);

// Smooth anchor scroll (CSS handles reduced motion)
document.documentElement.style.scrollBehavior = reduce ? 'auto' : 'smooth';
document.documentElement.style.scrollPaddingTop = '80px';

// Active-section highlight
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav]')];
const setActive = (id: string) =>
  links.forEach((a) => a.setAttribute('aria-current', String(a.getAttribute('href') === `#${id}`)));
document.querySelectorAll<HTMLElement>('main section[id]').forEach((s) => {
  ScrollTrigger.create({
    trigger: s, start: 'top 40%', end: 'bottom 40%',
    onToggle: (self) => self.isActive && setActive(s.id),
  });
});

if (!reduce) {
  // Staggered hero reveal
  gsap.from('.hero .inner', { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.12, delay: 0.1 });
  gsap.from('.hero .object', { opacity: 0, y: 120, duration: 1.2, ease: 'power3.out', delay: 0.4 });
  // Subtle scroll reveals
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) =>
    gsap.from(el, { opacity: 0, y: 24, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%' } }),
  );
}
