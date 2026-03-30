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

  // ─── Daily Devotional (Word of God) ───
  const devotions = [
    {
      verse: '"For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end."',
      ref: '— Jeremiah 29:11 (KJV)',
      text: 'God\'s plans for your life are rooted in His profound love and perfect wisdom. Even when the path seems uncertain, trust that He is orchestrating every detail for your ultimate good and His glory.'
    },
    {
      verse: '"Come unto me, all ye that labour and are heavy laden, and I will give you rest."',
      ref: '— Matthew 11:28 (KJV)',
      text: 'The burdens of this world can be exhausting, but Jesus offers a sanctuary of peace. Lay down your anxieties at His feet today, and let His comforting presence renew your strength and restore your soul.'
    },
    {
      verse: '"I can do all things through Christ which strengtheneth me."',
      ref: '— Philippians 4:13 (KJV)',
      text: 'Your abilities are not limited by your natural strength, but empowered by the Spirit of Christ dwelling within you. Face today\'s challenges with bold confidence, knowing His might is made perfect in your weakness.'
    },
    {
      verse: '"Trust in the Lord with all thine heart; and lean not unto thine own understanding."',
      ref: '— Proverbs 3:5 (KJV)',
      text: 'Human wisdom is flawed, but God\'s perspective is infinite. Yield your desires and decisions to Him completely, resting in the assurance that He will faithfully direct your path.'
    },
    {
      verse: '"Let not your heart be troubled: ye believe in God, believe also in me."',
      ref: '— John 14:1 (KJV)',
      text: 'In a world filled with turmoil, Jesus provides an anchor for our souls. Choose faith over fear today, allowing His steadfast promises to quiet the storms within your heart.'
    },
    {
      verse: '"But my God shall supply all your need according to his riches in glory by Christ Jesus."',
      ref: '— Philippians 4:19 (KJV)',
      text: 'Our Heavenly Father knows exactly what you need before you even ask. Rest in His limitless provision, trusting that He will sustain you abundantly in every season of life.'
    },
    {
      verse: '"For we walk by faith, not by sight."',
      ref: '— 2 Corinthians 5:7 (KJV)',
      text: 'Physical circumstances often contradict spiritual realities. Today, choose to see your situations through the lens of God\'s promises rather than the limitations of your human vision.'
    },
    {
      verse: '"The Lord is my shepherd; I shall not want."',
      ref: '— Psalm 23:1 (KJV)',
      text: 'Like a devoted shepherd, God guides, protects, and lovingly provides for His flock. Find profound contentment today in the knowledge that His care covers every detail of your life.'
    },
    {
      verse: '"And we know that all things work together for good to them that love God, to them who are the called according to his purpose."',
      ref: '— Romans 8:28 (KJV)',
      text: 'Even the most difficult chapters of your story are being woven into a beautiful masterpiece by the Creator. Trust His sovereign hand to bring divine purpose out of every circumstance.'
    },
    {
      verse: '"Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee..."',
      ref: '— Isaiah 41:10 (KJV)',
      text: 'Loneliness and fear lose their grip when we realize the Almighty stands beside us. Draw courage from His unyielding presence, knowing He is actively working on your behalf.'
    },
    {
      verse: '"But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles..."',
      ref: '— Isaiah 40:31 (KJV)',
      text: 'God\'s timing rarely aligns with our impatience, yet waiting on Him is never wasted. Embrace this season of waiting, for He is preparing you to soar higher than you ever imagined.'
    },
    {
      verse: '"For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind."',
      ref: '— 2 Timothy 1:7 (KJV)',
      text: 'Anxiety does not originate from God. Today, claim your divine inheritance of spiritual power, unwavering love, and mental clarity to overcome any obstacle standing in your way.'
    },
    {
      verse: '"Casting all your care upon him; for he careth for you."',
      ref: '— 1 Peter 5:7 (KJV)',
      text: 'You were never designed to carry the weight of the world on your shoulders. Release your worries into the capable hands of the Father, who cherishes you beyond measure.'
    },
    {
      verse: '"The name of the Lord is a strong tower: the righteous runneth into it, and is safe."',
      ref: '— Proverbs 18:10 (KJV)',
      text: 'When trials threaten to overwhelm you, there is an impenetrable fortress available to you. Flee to the safety of His presence and experience the unshakeable security found only in Him.'
    },
    {
      verse: '"He healeth the broken in heart, and bindeth up their wounds."',
      ref: '— Psalm 147:3 (KJV)',
      text: 'No pain goes unnoticed by our compassionate Savior. Allow His tender touch to bring restoration to the fractured places of your soul, transforming your brokenness into a testimony of grace.'
    },
    {
      verse: '"Be strong and of a good courage, fear not, nor be afraid of them: for the Lord thy God, he it is that doth go with thee..."',
      ref: '— Deuteronomy 31:6 (KJV)',
      text: 'Courage is not the absence of fear, but the conviction that God\'s presence outweighs any opposition. Step forward confidently today, knowing your Defender goes before you.'
    },
    {
      verse: '"I am the door: by me if any man enter in, he shall be saved, and shall go in and out, and find pasture."',
      ref: '— John 10:9 (KJV)',
      text: 'Jesus is the exclusive gateway to true spiritual freedom and abundant life. Pass through Him today to find the deep nourishment and profound safety your soul desperately craves.'
    },
    {
      verse: '"Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you:"',
      ref: '— Matthew 7:7 (KJV)',
      text: 'Our heavenly Father delights in the persistent prayers of His children. Bring your deepest desires to Him today with bold expectation, trusting in His perfect willingness to answer.'
    },
    {
      verse: '"Thy word is a lamp unto my feet, and a light unto my path."',
      ref: '— Psalm 119:105 (KJV)',
      text: 'In times of confusion, the Scriptures provide unwavering clarity. Let the eternal truth of God\'s Word illuminate your decisions and guide your steps safely through the darkness.'
    },
    {
      verse: '"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:"',
      ref: '— Ephesians 2:8 (KJV)',
      text: 'Salvation is a masterpiece of divine mercy, unearned and freely given. Celebrate this spectacular gift today, allowing gratitude to completely transform the way you live.'
    },
    {
      verse: '"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God."',
      ref: '— Philippians 4:6 (KJV)',
      text: 'Worry changes nothing, but prayer changes everything. Trade your anxiety for peace today by presenting your needs to God with a heart overflowing with profound thankfulness.'
    },
    {
      verse: '"And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."',
      ref: '— Philippians 4:7 (KJV)',
      text: 'God offers a supernatural tranquility that defies logical explanation. When you surrender your concerns to Him, He actively guards your emotions and thoughts with His perfect peace.'
    },
    {
      verse: '"Greater love hath no man than this, that a man lay down his life for his friends."',
      ref: '— John 15:13 (KJV)',
      text: 'The cross is the ultimate demonstration of God\'s relentless affection for you. Meditate on the magnitude of His sacrifice today, and let it inspire you to love others selflessly.'
    },
    {
      verse: '"The Lord is my light and my salvation; whom shall I fear? the Lord is the strength of my life; of whom shall I be afraid?"',
      ref: '— Psalm 27:1 (KJV)',
      text: 'When God is your ultimate source of light and strength, intimidation loses its power. Stand tall against adversity today, fully assured of His mighty protection over your life.'
    },
    {
      verse: '"But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."',
      ref: '— Matthew 6:33 (KJV)',
      text: 'True fulfillment is found only when God occupies the throne of our hearts. Prioritize His will above your worldly ambitions today, and watch as He flawlessly orchestrates the details of your life.'
    },
    {
      verse: '"Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new."',
      ref: '— 2 Corinthians 5:17 (KJV)',
      text: 'Your past mistakes no longer define your future. In Christ, you have been remarkably completely reinvented—embrace your new identity today and walk decisively in the astonishing reality of His grace.'
    },
    {
      verse: '"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not."',
      ref: '— Jeremiah 33:3 (KJV)',
      text: 'God invites us into a dynamic dialogue where He reveals His magnificent mysteries. Silence the noise of the world today, call upon His name, and prepare to be amazed by His profound response.'
    },
    {
      verse: '"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."',
      ref: '— John 3:16 (KJV)',
      text: 'This is the foundational truth of our faith. Let the reality of God\'s immense, unconditional love wash over you today, providing unbreakable hope and eternal security for your soul.'
    },
    {
      verse: '"Jesus Christ the same yesterday, and to day, and for ever."',
      ref: '— Hebrews 13:8 (KJV)',
      text: 'In a rapidly shifting world, the character and promises of Christ remain an immovable foundation. Find deep stability today by anchoring your trust in the One who never changes.'
    },
    {
      verse: '"Now faith is the substance of things hoped for, the evidence of things not seen."',
      ref: '— Hebrews 11:1 (KJV)',
      text: 'Faith is not wishful thinking, but an absolute conviction in God\'s promises. Even when the outcome is invisible, choose to trust firmly in the unwavering reliability of His Word.'
    },
    {
      verse: '"O give thanks unto the Lord; for he is good: for his mercy endureth for ever."',
      ref: '— Psalm 136:1 (KJV)',
      text: 'Gratitude remarkably realigns our perspective from our problems to our Provider. Take a profound moment today to praise God, recognizing that His relentless goodness and enduring mercy constantly surround you.'
    }
  ];

  const dailyVerseText = document.getElementById('dailyVerseText');
  const dailyVerseRef = document.getElementById('dailyVerseRef');
  const dailyDevotionalText = document.getElementById('dailyDevotionalText');

  if (dailyVerseText && dailyVerseRef && dailyDevotionalText) {
    // Get current day of the month (1-31)
    const today = new Date();
    const dayOfMonth = today.getDate(); // 1 through 31
    const verseIndex = dayOfMonth - 1; // Array is 0-indexed

    // Set the content dynamically based on the day
    dailyVerseText.textContent = devotions[verseIndex].verse;
    dailyVerseRef.textContent = devotions[verseIndex].ref;
    dailyDevotionalText.textContent = devotions[verseIndex].text;
  }

});
