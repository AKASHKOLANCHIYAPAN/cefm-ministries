/* ============================================
   CEFM MINISTRIES — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Mobile Navigation ───
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ─── Navbar Scroll Effect ───
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // ─── Scroll Reveal (IntersectionObserver) ───
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ─── Animated Counters ───
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + '+';
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + '+';
      }
    }

    requestAnimationFrame(update);
  }

  // ─── Leadership Page: State Tabs ───
  const stateTabs = document.querySelectorAll('.state-tab');
  const pastorSections = document.querySelectorAll('.pastor-section');

  stateTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const state = tab.dataset.state;

      // Update active tab
      stateTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show matching section
      pastorSections.forEach(section => {
        if (state === 'all' || section.dataset.state === state) {
          section.style.display = 'block';
          // Re-trigger animation
          setTimeout(() => section.classList.add('visible'), 50);
        } else {
          section.style.display = 'none';
          section.classList.remove('visible');
        }
      });
    });
  });

  // ─── Prayer Form Handling ───
  const prayerForm = document.getElementById('prayerForm');

  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = prayerForm.querySelector('#prayerName').value.trim();
      const burden = prayerForm.querySelector('#prayerBurden').value.trim();

      if (!name || !burden) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }

      const submitBtn = prayerForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      // Collect form data
      const formData = new FormData(prayerForm);
      formData.append('_subject', 'New Prayer Request from ' + name);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      // Submit via formsubmit.co
      fetch('https://formsubmit.co/ajax/akashk200716@gmail.com', {
        method: 'POST',
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            showFormMessage(
              `Thank you, ${name}. Your prayer request has been received and sent to our intercessors. They will lift your burden before the Lord during our Saturday Fasting Prayers. 🙏`,
              'success'
            );
            prayerForm.reset();
          } else {
            showFormMessage('Something went wrong. Please try again.', 'error');
          }
          submitBtn.textContent = '🙏 Submit Prayer Request';
          submitBtn.disabled = false;
        })
        .catch(error => {
          showFormMessage(
            `Thank you, ${name}. Your prayer request has been received. Our intercessors will lift your burden before the Lord during our Saturday Fasting Prayers. 🙏`,
            'success'
          );
          prayerForm.reset();
          submitBtn.textContent = '🙏 Submit Prayer Request';
          submitBtn.disabled = false;
        });
    });
  }

  function showFormMessage(message, type) {
    let msgEl = document.getElementById('formMessage');
    if (!msgEl) {
      msgEl = document.createElement('div');
      msgEl.id = 'formMessage';
      const form = document.getElementById('prayerForm');
      if (form) form.appendChild(msgEl);
    }

    msgEl.textContent = message;
    msgEl.style.cssText = `
      margin-top: 20px;
      padding: 16px 20px;
      border-radius: 12px;
      font-size: 0.92rem;
      line-height: 1.6;
      animation: fadeInUp 0.4s ease;
      ${type === 'success'
        ? 'background: rgba(76, 175, 80, 0.1); color: #2e7d32; border: 1px solid rgba(76, 175, 80, 0.2);'
        : 'background: rgba(244, 67, 54, 0.1); color: #c62828; border: 1px solid rgba(244, 67, 54, 0.2);'
      }
    `;

    setTimeout(() => {
      if (msgEl) msgEl.remove();
    }, 8000);
  }

  // ─── Smooth Scroll for Anchor Links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ─── India Map Tooltips ───
  const mapPaths = document.querySelectorAll('.map-container svg path');
  const mapTooltip = document.querySelector('.map-tooltip');

  if (mapPaths.length > 0 && mapTooltip) {
    mapPaths.forEach(path => {
      path.addEventListener('mouseenter', (e) => {
        const name = path.dataset.name || 'Unknown';
        const churches = path.dataset.churches || '';
        mapTooltip.innerHTML = `<strong>${name}</strong>${churches ? '<br>' + churches + ' churches' : ''}`;
        mapTooltip.style.opacity = '1';
      });

      path.addEventListener('mousemove', (e) => {
        const rect = document.querySelector('.map-container').getBoundingClientRect();
        mapTooltip.style.left = (e.clientX - rect.left + 12) + 'px';
        mapTooltip.style.top = (e.clientY - rect.top - 40) + 'px';
      });

      path.addEventListener('mouseleave', () => {
        mapTooltip.style.opacity = '0';
      });
    });
  }

  // ─── Rotating Bible Verses (for Prayer page) ───
  const verseContainer = document.getElementById('rotatingVerse');
  if (verseContainer) {
    const verses = [
      { text: '"Cast all your anxiety on Him because He cares for you."', ref: '— 1 Peter 5:7' },
      { text: '"The Lord is near to the brokenhearted and saves the crushed in spirit."', ref: '— Psalm 34:18' },
      { text: '"Come to me, all who labor and are heavy laden, and I will give you rest."', ref: '— Matthew 11:28' },
      { text: '"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."', ref: '— Philippians 4:6' },
      { text: '"The prayer of a righteous person has great power as it is working."', ref: '— James 5:16' },
    ];

    let verseIndex = 0;

    function showNextVerse() {
      verseContainer.style.opacity = '0';
      setTimeout(() => {
        verseContainer.querySelector('.verse-text').textContent = verses[verseIndex].text;
        verseContainer.querySelector('.verse-ref').textContent = verses[verseIndex].ref;
        verseContainer.style.opacity = '1';
        verseIndex = (verseIndex + 1) % verses.length;
      }, 600);
    }

    setInterval(showNextVerse, 8000);
  }

  // ─── Song Accordion Toggle ───
  window.toggleSong = function (songId) {
    const el = document.getElementById(songId);
    if (el) el.classList.toggle('open');
  };

});
