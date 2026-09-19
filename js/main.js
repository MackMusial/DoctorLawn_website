// ── Mobile nav toggle ────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  // Close menu when any nav link is clicked (essential for single-page)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// ── Scroll-spy: highlight active nav link ────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, {
  rootMargin: '-25% 0px -65% 0px'
});

sections.forEach(s => observer.observe(s));

// ── Gallery "See more results" toggle ────────────────────
const galleryGrid = document.getElementById('galleryGrid');
const galleryToggle = document.getElementById('galleryToggle');

if (galleryGrid && galleryToggle) {
  galleryToggle.addEventListener('click', () => {
    const expanded = galleryGrid.classList.toggle('expanded');
    galleryToggle.textContent = expanded ? 'Show Fewer Results' : 'See More Results';
  });
}

// ── Form submission feedback ─────────────────────────────
document.querySelectorAll('.eval-form, .contact-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = "Submitted! We'll be in touch soon.";
    btn.style.background = '#4d8a14';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
});
