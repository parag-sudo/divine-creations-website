const header = document.getElementById('site-header');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  if (heroBg) heroBg.style.transform = `translateY(${window.scrollY * 0.35}px) scale(1.08)`;
}, { passive: true });

const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => { if (window.innerWidth > 960) closeMenu(); });
}
