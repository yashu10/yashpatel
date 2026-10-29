// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  navLinks.classList.toggle('open', open);
}

menuBtn.addEventListener('click', () => {
  setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
});
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false);
});

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Lightbox for project screenshots
(function () {
  const zooms = document.querySelectorAll('.zoom');
  if (!zooms.length) return;
  const box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Enlarged image');
  box.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close">×</button><img alt="">';
  document.body.appendChild(box);
  const big = box.querySelector('img');

  function close() { box.classList.remove('open'); document.body.style.overflow = ''; }
  zooms.forEach((z) => z.addEventListener('click', () => {
    const img = z.querySelector('img');
    big.src = img.currentSrc || img.src;
    big.alt = img.alt;
    box.classList.toggle('scroll', (img.getAttribute("height") || img.naturalHeight) / (img.getAttribute("width") || img.naturalWidth) > 2.2);
    box.scrollTop = 0;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
  }));
  box.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
