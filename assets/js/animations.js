(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let gsapContext = null;
  let animeObserver = null;
  let motionStops = [];

  function cleanup() {
    if (gsapContext) {
      try { gsapContext.revert(); } catch (error) {}
      gsapContext = null;
    }
    if (window.ScrollTrigger) {
      try { window.ScrollTrigger.getAll().forEach(trigger => trigger.kill()); } catch (error) {}
    }
    if (animeObserver) {
      try { animeObserver.disconnect(); } catch (error) {}
      animeObserver = null;
    }
    motionStops.forEach(stop => { try { stop(); } catch (error) {} });
    motionStops = [];
  }

  function initGsap() {
    if (!window.gsap) return;
    const gsap = window.gsap;
    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    gsapContext = gsap.context(() => {
      const hero = document.querySelector('.public-hero');
      if (hero) {
        gsap.from(hero.querySelectorAll('.eyebrow-pill, .hero-copy h1, .hero-copy p, .hero-actions, .hero-microcopy'), {
          y: 18, opacity: 0, duration: 0.55, stagger: 0.08, ease: 'power2.out'
        });
        gsap.from(hero.querySelectorAll('.hero-visual, .hero-stock, .floating-label, .hero-stamp'), {
          scale: 0.96, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out'
        });
      }

      const auth = document.querySelector('.auth-page');
      if (auth) {
        gsap.from(auth.querySelectorAll('.auth-promo-content > *, .auth-form-wrap > *'), {
          y: 14, opacity: 0, duration: 0.45, stagger: 0.04, ease: 'power2.out'
        });
      }

      gsap.utils.toArray('.public-section, .partner-band, .stats-band, .cta-banner').forEach(section => {
        gsap.from(section, {
          y: 26, opacity: 0, duration: 0.6, ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 88%', once: true }
        });
      });
    });
  }

  function initAnime() {
    if (!window.anime) return;
    const section = document.querySelector('.standard-section');
    if (!section) return;
    const paths = section.querySelectorAll('.standard-icon svg path, .standard-icon svg circle');
    if (!paths.length) return;

    animeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        window.anime({
          targets: paths,
          strokeDashoffset: [window.anime.setDashoffset, 0],
          duration: 900,
          delay: window.anime.stagger(60),
          easing: 'easeOutQuad'
        });
        animeObserver.disconnect();
        animeObserver = null;
      });
    }, { threshold: 0.3 });
    animeObserver.observe(section);
  }

  function initMotion() {
    if (!window.Motion || typeof window.Motion.animate !== 'function') return;
    const { animate, inView } = window.Motion;
    const ease = [0.22, 1, 0.36, 1];

    document.querySelectorAll('.btn, .quick-action, .catalog-card, .my-program-card, .collaboration-card, .standard-card, .gallery-card').forEach(element => {
      if (element.dataset.motionBound) return;
      element.dataset.motionBound = '1';
      element.addEventListener('pointerenter', () => animate(element, { scale: 1.012 }, { duration: 0.18, ease }));
      element.addEventListener('pointerleave', () => animate(element, { scale: 1 }, { duration: 0.2, ease }));
      element.addEventListener('pointerdown', () => animate(element, { scale: 0.985 }, { duration: 0.1, ease }));
      element.addEventListener('pointerup', () => animate(element, { scale: 1.012 }, { duration: 0.15, ease }));
    });

    document.querySelectorAll('.dashboard-content .stat-card, .dashboard-content .quick-action, .public-section .standard-card, .public-section .gallery-card').forEach(element => {
      if (element.dataset.motionSeen) return;
      motionStops.push(inView(element, () => {
        element.dataset.motionSeen = '1';
        animate(element, { opacity: [0, 1], y: [14, 0] }, { duration: 0.4, ease });
      }, { amount: 0.2 }));
    });
  }

  function refresh() {
    cleanup();
    if (reduceMotion) return;
    try { initGsap(); } catch (error) {}
    try { initAnime(); } catch (error) {}
    try { initMotion(); } catch (error) {}
  }

  window.SertikomMotion = { refresh };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refresh, { once: true });
  } else {
    refresh();
  }
})();
