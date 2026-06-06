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

  // ─── Navbar Scroll Effect (throttled with rAF) ───
  const navbar = document.getElementById('navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.pageYOffset > 60) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

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
      // Submit normally to FormSubmit without AJAX intercept
      // User will be redirected to the FormSubmit success/captcha page
      prayerForm.submit();
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

  // ─── Daily Devotional Promises ───
  const dailyDevotional = document.getElementById('devotional');
  if (dailyDevotional) {
    const dailyPromises = [
      { text: '"Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness."', ref: '— Isaiah 41:10 (KJV)', desc: 'God promises His presence and strength in every situation. You never have to face your battles alone.' },
      { text: '"For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end."', ref: '— Jeremiah 29:11 (KJV)', desc: 'God has a beautiful, sovereign plan for your life. Trust in His timing and His perfect will.' },
      { text: '"Trust in the LORD with all thine heart; and lean not unto thine own understanding."', ref: '— Proverbs 3:5 (KJV)', desc: 'When you cannot trace His hand, trust His heart. He will direct your paths perfectly.' },
      { text: '"But my God shall supply all your need according to his riches in glory by Christ Jesus."', ref: '— Philippians 4:19 (KJV)', desc: 'We serve a God of abundance. He knows your needs and promises to provide for you.' },
      { text: '"And we know that all things work together for good to them that love God, to them who are the called according to his purpose."', ref: '— Romans 8:28 (KJV)', desc: 'Even in difficulties, God is orchestrating everything to work out for your ultimate good.' },
      { text: '"Come unto me, all ye that labour and are heavy laden, and I will give you rest."', ref: '— Matthew 11:28 (KJV)', desc: 'Bring your burdens to Jesus. He is your resting place and the anchor for your weary soul.' },
      { text: '"But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles..."', ref: '— Isaiah 40:31 (KJV)', desc: 'Waiting is not wasted time. In His presence, you will find supernatural strength and soaring grace.' },
      { text: '"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you..."', ref: '— John 14:27 (KJV)', desc: 'Receive the peace of Christ today. It transcends all earthly turmoil and calms every storm.' },
      { text: '"I can do all things through Christ which strengtheneth me."', ref: '— Philippians 4:13 (KJV)', desc: 'Your limitations are no match for His power working within you. Step out in bold faith.' },
      { text: '"The LORD is my shepherd; I shall not want."', ref: '— Psalm 23:1 (KJV)', desc: 'The Creator of the cosmos is your personal shepherd. He guides, protects, and restores your soul.' },
      { text: '"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not."', ref: '— Jeremiah 33:3 (KJV)', desc: 'God is ready and waiting for your prayers. He promises to reveal His extraordinary glory to you.' },
      { text: '"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."', ref: '— James 1:5 (KJV)', desc: 'When you are uncertain, seek His wisdom. He gives it freely, generously, and without finding fault.' },
      { text: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."', ref: '— 2 Timothy 1:7 (KJV)', desc: 'Do not let anxiety rule your day. You have been given heavenly power, divine love, and total clarity.' },
      { text: '"The name of the LORD is a strong tower: the righteous runneth into it, and is safe."', ref: '— Proverbs 18:10 (KJV)', desc: 'When attacks come, hide yourself in His name. You are secure within His mighty fortress.' },
      { text: '"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."', ref: '— Matthew 6:33 (KJV)', desc: 'If you take care of the things that are important to God, He will take care of the things important to you.' },
      { text: '"He healeth the broken in heart, and bindeth up their wounds."', ref: '— Psalm 147:3 (KJV)', desc: 'No heartbreak is too shattered for His healing hands. Allow Him to softly bind your wounds today.' },
      { text: '"Create in me a clean heart, O God; and renew a right spirit within me."', ref: '— Psalm 51:10 (KJV)', desc: 'God specializes in fresh starts and new beginnings. Allow Him to renew your spirit completely today.' },
      { text: '"Delight thyself also in the LORD; and he shall give thee the desires of thine heart."', ref: '— Psalm 37:4 (KJV)', desc: 'When He becomes your greatest joy, He aligns your deepest desires with His magnificent will.' },
      { text: '"For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord."', ref: '— Romans 6:23 (KJV)', desc: 'Salvation cannot be earned, only received. Rejoice in the profound grace of eternal life.' },
      { text: '"Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ:"', ref: '— Philippians 1:6 (KJV)', desc: 'God does not leave things half-finished. He will patiently complete His masterpiece within you.' },
      { text: '"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."', ref: '— Matthew 5:16 (KJV)', desc: 'Your testimony is meant to illuminate the darkness. Shine brightly for His kingdom today.' },
      { text: '"Now faith is the substance of things hoped for, the evidence of things not seen."', ref: '— Hebrews 11:1 (KJV)', desc: 'Faith is knowing He is working even when you cannot see the results. Keep believing in His promises.' },
      { text: '"And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ\'s sake hath forgiven you."', ref: '— Ephesians 4:32 (KJV)', desc: 'Unleash the power of forgiveness and kindness into the world, mirroring the immense grace you received.' },
      { text: '"I will praise thee; for I am fearfully and wonderfully made..."', ref: '— Psalm 139:14 (KJV)', desc: 'You are an intentional, glorious creation of the Almighty. Know your worth in His eyes.' },
      { text: '"But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith..."', ref: '— Galatians 5:22 (KJV)', desc: 'Instead of striving in the flesh, yield to the Holy Spirit and let these divine fruits blossom.' },
      { text: '"Thy word is a lamp unto my feet, and a light unto my path."', ref: '— Psalm 119:105 (KJV)', desc: 'When the future looks dark, look to scripture. It will illuminate your next step safely.' },
      { text: '"If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness."', ref: '— 1 John 1:9 (KJV)', desc: 'You are never too far gone. Repentance unlocks an infinite well of cleansing grace.' },
      { text: '"He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty."', ref: '— Psalm 91:1 (KJV)', desc: 'Find your refuge in intimate prayer. There is unbeatable protection in the shadow of the Most High.' },
      { text: '"Every good gift and every perfect gift is from above, and cometh down from the Father of lights..."', ref: '— James 1:17 (KJV)', desc: 'Count your blessings today. Every joyful moment and gracious provision descends from Heaven.' },
      { text: '"Rejoice in the Lord alway: and again I say, Rejoice."', ref: '— Philippians 4:4 (KJV)', desc: 'Joy is a decision, not merely a feeling. Choose to rejoice in His steadfast goodness right now.' },
      { text: '"For God so loved the world, that He gave His only begotten Son, that whosoever believeth in Him should not perish, but have everlasting life."', ref: '— John 3:16 (KJV)', desc: 'This is the greatest truth. Let the unfathomable sacrifice of God anchor your soul eternally.' }
    ];

    const todayDate = new Date();
    // Use day of the month (1-31), subtracting 1 for zero-indexed array
    const dayIndex = (todayDate.getDate() - 1) % dailyPromises.length;
    
    const verseTextEl = document.getElementById('daily-verse-text');
    const verseRefEl = document.getElementById('daily-verse-ref');
    const devTextEl = document.getElementById('daily-devotional-text');

    if (verseTextEl && verseRefEl && devTextEl) {
      const todayPromise = dailyPromises[dayIndex];
      verseTextEl.textContent = todayPromise.text;
      verseRefEl.textContent = todayPromise.ref;
      devTextEl.textContent = todayPromise.desc;
    }
  }

});
