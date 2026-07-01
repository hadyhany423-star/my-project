const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

// Load high-quality profile image from base64 file and set as data URI
(async function loadLogoFromBase64() {
  try {
    const res = await fetch('hadyhany.b64');
    if (!res.ok) return;
    const b64 = await res.text();
    const img = document.querySelector('.logo-image');
    if (img && b64) img.src = 'data:image/jpeg;base64,' + b64;
  } catch (err) {
    console.error('Could not load embedded logo base64:', err);
  }
})();
