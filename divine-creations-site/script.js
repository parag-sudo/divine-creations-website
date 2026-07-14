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
