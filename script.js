/* PIXCON — interactions */

(() => {
  const header = document.getElementById('siteHeader');
  const floatCta = document.getElementById('floatCta');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.querySelector('.nav-menu');
  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  // Sticky header style + floating CTA reveal
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 12);
    floatCta.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle (simple show/hide)
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navMenu.style.display = isOpen ? 'flex' : '';
      if (isOpen) {
        Object.assign(navMenu.style, {
          position: 'absolute',
          top: '64px',
          left: '0',
          right: '0',
          flexDirection: 'column',
          background: '#fff',
          padding: '24px',
          borderBottom: '1px solid var(--line)',
          gap: '20px',
        });
      } else {
        navMenu.style.cssText = '';
      }
    });
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navMenu.style.cssText = '';
        }
      });
    });
  }

  // Scroll-reveal animation
  const revealTargets = document.querySelectorAll(
    '.section-head, .reborn-card, .product-card, .why-card, .process-steps li, .contact-info, .contact-form, .hero-copy, .hero-visual, .stat'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in'));
  }

  // Counting animation for stats
  const counters = document.querySelectorAll('[data-count]');
  const formatNum = n => n.toLocaleString('ko-KR');
  const animateCount = el => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 1400;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = formatNum(Math.floor(target * eased));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target);
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(el => co.observe(el));
  }

  // FAQ - close others when opening one
  const allDetails = document.querySelectorAll('.faq-list details');
  allDetails.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        allDetails.forEach(o => { if (o !== d) o.open = false; });
      }
    });
  });

  // Contact form (front-end only demo)
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = '전송 중...';
      setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = original;
        formNote.hidden = false;
        setTimeout(() => { formNote.hidden = true; }, 6000);
      }, 800);
    });
  }

  // Smooth-scroll offset compensation for sticky header
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
