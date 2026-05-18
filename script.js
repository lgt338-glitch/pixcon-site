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

  // ===== Live viewer count fluctuation =====
  const viewerEl = document.getElementById('viewerCount');
  if (viewerEl) {
    let current = 68;
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const driftViewer = () => {
      const delta = rand(-4, 6);
      current = Math.max(38, Math.min(94, current + delta));
      viewerEl.textContent = current;
      setTimeout(driftViewer, rand(4000, 9000));
    };
    setTimeout(driftViewer, 3000);
  }

  // ===== Live toast notifications =====
  const toastStack = document.getElementById('toastStack');
  if (toastStack) {
    const surnames = ['김','이','박','최','정','강','조','윤','장','임','한','오','서','신','권','황','안','송','류','전'];
    const models = ['iPhone SE REBORN', 'iPhone 11 REBORN', 'iPhone 12 REBORN'];
    const regions = ['서울','부산','대구','인천','광주','대전','수원','용인','성남','고양','청주','전주','제주','창원','천안'];

    const pick = arr => arr[Math.floor(Math.random() * arr.length)];
    const maskName = () => pick(surnames) + '**';
    const timePhrase = () => {
      const r = Math.random();
      if (r < 0.4) return '방금';
      if (r < 0.75) return Math.floor(Math.random() * 5 + 1) + '분 전';
      return Math.floor(Math.random() * 25 + 6) + '분 전';
    };

    const events = [
      () => ({
        type: 'buy',
        icon: '🛒',
        html: `<strong>${regions[Math.floor(Math.random()*regions.length)]} ${maskName()}</strong> 님이 <strong>${pick(models)}</strong>을 구매하셨어요`,
      }),
      () => ({
        type: 'ask',
        icon: '💬',
        html: `<strong>${maskName()}</strong> 님이 상담 문의를 남기셨어요`,
      }),
      () => ({
        type: 'join',
        icon: '🎉',
        html: `<strong>${maskName()}</strong> 님이 회원가입하셨어요`,
      }),
      () => ({
        type: 'buy',
        icon: '📦',
        html: `<strong>${pick(models)}</strong> 출고 완료 (${regions[Math.floor(Math.random()*regions.length)]} 발송)`,
      }),
      () => ({
        type: 'ask',
        icon: '⭐',
        html: `<strong>${maskName()}</strong> 님이 5점 후기를 남겼어요`,
      }),
    ];

    const showToast = () => {
      const data = pick(events)();
      const el = document.createElement('div');
      el.className = `toast ${data.type}`;
      el.innerHTML = `
        <div class="t-icon">${data.icon}</div>
        <div class="t-body">
          <span>${data.html}</span>
          <span class="t-time">${timePhrase()}</span>
        </div>
      `;
      toastStack.appendChild(el);
      // limit stack to 3
      while (toastStack.children.length > 3) {
        toastStack.removeChild(toastStack.firstChild);
      }
      requestAnimationFrame(() => el.classList.add('show'));
      setTimeout(() => {
        el.classList.remove('show');
        setTimeout(() => el.remove(), 500);
      }, 5200);
    };

    setTimeout(showToast, 2500);
    const loopToast = () => {
      showToast();
      setTimeout(loopToast, Math.floor(Math.random() * 7000) + 7000);
    };
    setTimeout(loopToast, 9000);
  }

  // ===== Live increment for cumulative count (출고 대수) =====
  setTimeout(() => {
    const cumulative = document.querySelector('[data-count="12800"]');
    if (!cumulative) return;
    let n = 12800;
    const tick = () => {
      n += Math.floor(Math.random() * 2) + 1;
      cumulative.textContent = n.toLocaleString('ko-KR');
      setTimeout(tick, Math.floor(Math.random() * 20000) + 15000);
    };
    setTimeout(tick, 20000);
  }, 3000);

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
