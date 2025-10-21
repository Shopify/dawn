/**
 * TF • Logo Scroll Animation - FINAL FIX for Mix Blend Mode
 *
 * SOLUTION: Create a CLONE of the background and put it in the same stacking
 * context as the fixed logo. This allows mix-blend-mode to work!
 */

(function() {
  'use strict';

  const CONFIG = {
    scrollStart: 200,
    scrollThreshold: 300,
    navFadeStart: 0.8,
    completeClass: 'tf-logo-animation-complete'
  };

  class TFLogoAnimation {
    constructor() {
      this.heroLogo = document.querySelector('[data-tf-hero-logo]');
      this.heroSection = document.querySelector('.tf-hero');
      this.heroImage = document.querySelector('.tf-hero__img');
      this.header = document.querySelector('.tf-topbar');
      this.headerLogo = document.querySelector('[data-tf-header-logo]');
      this.menuBtn = document.querySelector('.tf-topbar__menu-btn');
      this.cartLink = document.querySelector('.tf-topbar__utils');

      this.scrollProgress = 0;
      this.isComplete = false;
      this.rafId = null;

      if (!this.heroLogo || !this.header || !this.heroImage) {
        console.warn('TF Logo Animation: Required elements not found');
        return;
      }

      this.init();
    }

    init() {
      this.createBackgroundClone();
      this.setInitialState();
      this.handleScroll = this.handleScroll.bind(this);
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll();
    }

    createBackgroundClone() {
      // Create a fixed background element that matches the hero image
      this.bgClone = document.createElement('div');
      this.bgClone.className = 'tf-hero-bg-clone';
      this.bgClone.style.position = 'fixed';
      this.bgClone.style.top = '0';
      this.bgClone.style.left = '0';
      this.bgClone.style.width = '100vw';
      this.bgClone.style.height = '100vh';
      this.bgClone.style.zIndex = '998'; // Below logo parent
      this.bgClone.style.pointerEvents = 'none';

      if (this.heroImage && this.heroImage.src) {
        this.bgClone.style.backgroundImage = `url(${this.heroImage.src})`;
        this.bgClone.style.backgroundSize = 'cover';
        this.bgClone.style.backgroundPosition = 'center';
        console.log('Background clone created with image:', this.heroImage.src);
      } else {
        console.error('Hero image not found or has no src!');
        this.bgClone.style.background = 'linear-gradient(to bottom, #333 0%, #fff 100%)';
        console.log('Using gradient fallback');
      }

      this.bgClone.style.opacity = '0';

      // Insert as first child of body to ensure proper stacking
      document.body.insertBefore(this.bgClone, document.body.firstChild);
      console.log('Background clone inserted at start of body');
    }

    setInitialState() {
      const heroRect = this.heroLogo.getBoundingClientRect();
      this.heroInitialWidth = heroRect.width;
      this.heroInitialHeight = heroRect.height;

      if (this.headerLogo) {
        this.headerLogo.style.opacity = '0';
        this.headerLogo.style.visibility = 'hidden';
      }

      if (this.menuBtn) {
        this.menuBtn.style.opacity = '0';
        this.menuBtn.style.pointerEvents = 'none';
      }
      if (this.cartLink) {
        this.cartLink.style.opacity = '0';
        this.cartLink.style.pointerEvents = 'none';
      }

      this.heroLogo.style.position = 'fixed';
      this.heroLogo.style.top = '50%';
      this.heroLogo.style.left = '50%';
      this.heroLogo.style.transform = 'translate(-50%, -50%)';
      this.heroLogo.style.transformOrigin = 'center center';
      this.heroLogo.style.zIndex = '999'; // Above background clone (998)
      this.heroLogo.style.transition = 'none';
      this.heroLogo.style.willChange = 'transform';

      // Apply mix-blend-mode to the h1 parent
      this.heroLogo.style.mixBlendMode = 'difference';
      this.heroLogo.style.color = 'white';
      this.heroLogo.style.isolation = 'auto';

      const logoImg = this.heroLogo.querySelector('.tf-hero__title-img');
      if (logoImg) {
        // Keep the image's blend mode from CSS
        logoImg.style.mixBlendMode = 'difference';
        console.log('Mix blend mode on both h1 and image');
      }
    }

    handleScroll() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }

      this.rafId = requestAnimationFrame(() => {
        this.updateAnimation();
      });
    }

    updateAnimation() {
      const scrollY = window.scrollY;

      // Update background clone opacity based on scroll
      if (this.bgClone) {
        if (scrollY < CONFIG.scrollStart) {
          this.bgClone.style.opacity = '0';
        } else {
          const bgProgress = Math.min((scrollY - CONFIG.scrollStart) / 100, 1);
          this.bgClone.style.opacity = bgProgress;
        }
      }

      if (scrollY < CONFIG.scrollStart) {
        this.scrollProgress = 0;
        this.heroLogo.style.transform = 'translate(-50%, -50%)';
        this.heroLogo.style.opacity = '1';
        this.heroLogo.style.visibility = 'visible';
        return;
      }

      const adjustedScroll = scrollY - CONFIG.scrollStart;
      this.scrollProgress = Math.min(adjustedScroll / CONFIG.scrollThreshold, 1);
      const easedProgress = this.easeOutCubic(this.scrollProgress);

      if (easedProgress >= CONFIG.navFadeStart && !this.isComplete) {
        this.isComplete = true;
        this.onAnimationComplete();
      } else if (easedProgress < CONFIG.navFadeStart && this.isComplete) {
        this.isComplete = false;
        this.onAnimationReverse();
      }

      this.transformHeroLogo(easedProgress);
      this.fadeNavigationItems(easedProgress);
    }

    transformHeroLogo(progress) {
      const headerLogoRect = this.headerLogo ? this.headerLogo.getBoundingClientRect() : null;

      if (!headerLogoRect) {
        console.warn('TF Logo Animation: Header logo not found');
        return;
      }

      const targetScale = headerLogoRect.width / this.heroInitialWidth;
      const currentScale = 1 + ((targetScale - 1) * progress);

      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const verticalOffset = -40;
      const targetX = headerLogoRect.left + (headerLogoRect.width / 2);
      const targetY = headerLogoRect.top + (headerLogoRect.height / 2) + verticalOffset;

      const translateX = (targetX - viewportCenterX) * progress;
      const translateY = (targetY - viewportCenterY) * progress;

      this.heroLogo.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${currentScale})`;

      if (progress >= 1) {
        this.heroLogo.style.opacity = '0';
        this.heroLogo.style.visibility = 'hidden';
        if (this.bgClone) this.bgClone.style.opacity = '0';
        if (this.headerLogo) {
          this.headerLogo.style.opacity = '1';
          this.headerLogo.style.visibility = 'visible';
        }
      } else {
        this.heroLogo.style.opacity = '1';
        this.heroLogo.style.visibility = 'visible';
        if (this.headerLogo) {
          this.headerLogo.style.opacity = '0';
          this.headerLogo.style.visibility = 'hidden';
        }
      }
    }

    fadeNavigationItems(progress) {
      let navOpacity = 0;
      if (progress >= CONFIG.navFadeStart) {
        navOpacity = (progress - CONFIG.navFadeStart) / (1 - CONFIG.navFadeStart);
      }

      if (this.menuBtn) {
        this.menuBtn.style.opacity = navOpacity;
        this.menuBtn.style.pointerEvents = navOpacity > 0.5 ? 'auto' : 'none';
      }

      if (this.cartLink) {
        this.cartLink.style.opacity = navOpacity;
        this.cartLink.style.pointerEvents = navOpacity > 0.5 ? 'auto' : 'none';
      }
    }

    onAnimationComplete() {
      document.documentElement.classList.add(CONFIG.completeClass);

      if (this.header) {
        this.header.style.position = 'fixed';
        this.header.style.top = '0';
        this.header.style.width = '100%';
      }
    }

    onAnimationReverse() {
      document.documentElement.classList.remove(CONFIG.completeClass);
    }

    easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    destroy() {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      if (this.bgClone) {
        this.bgClone.remove();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new TFLogoAnimation();
    });
  } else {
    new TFLogoAnimation();
  }

})();/**
 * TF • Logo Scroll Animation - FINAL FIX for Mix Blend Mode
 *
 * SOLUTION: Create a CLONE of the background and put it in the same stacking
 * context as the fixed logo. This allows mix-blend-mode to work!
 */

(function() {
  'use strict';

  const CONFIG = {
    scrollStart: 200,
    scrollThreshold: 300,
    navFadeStart: 0.8,
    completeClass: 'tf-logo-animation-complete'
  };

  class TFLogoAnimation {
    constructor() {
      this.heroLogo = document.querySelector('[data-tf-hero-logo]');
      this.heroSection = document.querySelector('.tf-hero');
      this.heroImage = document.querySelector('.tf-hero__img');
      this.header = document.querySelector('.tf-topbar');
      this.headerLogo = document.querySelector('[data-tf-header-logo]');
      this.menuBtn = document.querySelector('.tf-topbar__menu-btn');
      this.cartLink = document.querySelector('.tf-topbar__utils');

      this.scrollProgress = 0;
      this.isComplete = false;
      this.rafId = null;

      if (!this.heroLogo || !this.header || !this.heroImage) {
        console.warn('TF Logo Animation: Required elements not found');
        return;
      }

      this.init();
    }

    init() {
      this.createBackgroundClone();
      this.setInitialState();
      this.handleScroll = this.handleScroll.bind(this);
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll();
    }

    createBackgroundClone() {
      // Create a fixed background element that matches the hero image
      this.bgClone = document.createElement('div');
      this.bgClone.className = 'tf-hero-bg-clone';
      this.bgClone.style.position = 'fixed';
      this.bgClone.style.top = '0';
      this.bgClone.style.left = '0';
      this.bgClone.style.width = '100vw';
      this.bgClone.style.height = '100vh';
      this.bgClone.style.zIndex = '998'; // Below logo parent
      this.bgClone.style.pointerEvents = 'none';

      if (this.heroImage && this.heroImage.src) {
        this.bgClone.style.backgroundImage = `url(${this.heroImage.src})`;
        this.bgClone.style.backgroundSize = 'cover';
        this.bgClone.style.backgroundPosition = 'center';
        console.log('Background clone created with image:', this.heroImage.src);
      } else {
        console.error('Hero image not found or has no src!');
        this.bgClone.style.background = 'linear-gradient(to bottom, #333 0%, #fff 100%)';
        console.log('Using gradient fallback');
      }

      this.bgClone.style.opacity = '0';

      // Insert as first child of body to ensure proper stacking
      document.body.insertBefore(this.bgClone, document.body.firstChild);
      console.log('Background clone inserted at start of body');
    }

    setInitialState() {
      const heroRect = this.heroLogo.getBoundingClientRect();
      this.heroInitialWidth = heroRect.width;
      this.heroInitialHeight = heroRect.height;

      if (this.headerLogo) {
        this.headerLogo.style.opacity = '0';
        this.headerLogo.style.visibility = 'hidden';
      }

      if (this.menuBtn) {
        this.menuBtn.style.opacity = '0';
        this.menuBtn.style.pointerEvents = 'none';
      }
      if (this.cartLink) {
        this.cartLink.style.opacity = '0';
        this.cartLink.style.pointerEvents = 'none';
      }

      this.heroLogo.style.position = 'fixed';
      this.heroLogo.style.top = '50%';
      this.heroLogo.style.left = '50%';
      this.heroLogo.style.transform = 'translate(-50%, -50%)';
      this.heroLogo.style.transformOrigin = 'center center';
      this.heroLogo.style.zIndex = '999'; // Above background clone (998)
      this.heroLogo.style.transition = 'none';
      this.heroLogo.style.willChange = 'transform';

      // Apply mix-blend-mode to the h1 parent
      this.heroLogo.style.mixBlendMode = 'difference';
      this.heroLogo.style.color = 'white';
      this.heroLogo.style.isolation = 'auto';

      const logoImg = this.heroLogo.querySelector('.tf-hero__title-img');
      if (logoImg) {
        // Keep the image's blend mode from CSS
        logoImg.style.mixBlendMode = 'difference';
        console.log('Mix blend mode on both h1 and image');
      }
    }

    handleScroll() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }

      this.rafId = requestAnimationFrame(() => {
        this.updateAnimation();
      });
    }

    updateAnimation() {
      const scrollY = window.scrollY;

      // Update background clone opacity based on scroll
      if (this.bgClone) {
        if (scrollY < CONFIG.scrollStart) {
          this.bgClone.style.opacity = '0';
        } else {
          const bgProgress = Math.min((scrollY - CONFIG.scrollStart) / 100, 1);
          this.bgClone.style.opacity = bgProgress;
        }
      }

      if (scrollY < CONFIG.scrollStart) {
        this.scrollProgress = 0;
        this.heroLogo.style.transform = 'translate(-50%, -50%)';
        this.heroLogo.style.opacity = '1';
        this.heroLogo.style.visibility = 'visible';
        return;
      }

      const adjustedScroll = scrollY - CONFIG.scrollStart;
      this.scrollProgress = Math.min(adjustedScroll / CONFIG.scrollThreshold, 1);
      const easedProgress = this.easeOutCubic(this.scrollProgress);

      if (easedProgress >= CONFIG.navFadeStart && !this.isComplete) {
        this.isComplete = true;
        this.onAnimationComplete();
      } else if (easedProgress < CONFIG.navFadeStart && this.isComplete) {
        this.isComplete = false;
        this.onAnimationReverse();
      }

      this.transformHeroLogo(easedProgress);
      this.fadeNavigationItems(easedProgress);
    }

    transformHeroLogo(progress) {
      const headerLogoRect = this.headerLogo ? this.headerLogo.getBoundingClientRect() : null;

      if (!headerLogoRect) {
        console.warn('TF Logo Animation: Header logo not found');
        return;
      }

      const targetScale = headerLogoRect.width / this.heroInitialWidth;
      const currentScale = 1 + ((targetScale - 1) * progress);

      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;

      const verticalOffset = -40;
      const targetX = headerLogoRect.left + (headerLogoRect.width / 2);
      const targetY = headerLogoRect.top + (headerLogoRect.height / 2) + verticalOffset;

      const translateX = (targetX - viewportCenterX) * progress;
      const translateY = (targetY - viewportCenterY) * progress;

      this.heroLogo.style.transform = `translate(-50%, -50%) translate(${translateX}px, ${translateY}px) scale(${currentScale})`;

      if (progress >= 1) {
        this.heroLogo.style.opacity = '0';
        this.heroLogo.style.visibility = 'hidden';
        if (this.bgClone) this.bgClone.style.opacity = '0';
        if (this.headerLogo) {
          this.headerLogo.style.opacity = '1';
          this.headerLogo.style.visibility = 'visible';
        }
      } else {
        this.heroLogo.style.opacity = '1';
        this.heroLogo.style.visibility = 'visible';
        if (this.headerLogo) {
          this.headerLogo.style.opacity = '0';
          this.headerLogo.style.visibility = 'hidden';
        }
      }
    }

    fadeNavigationItems(progress) {
      let navOpacity = 0;
      if (progress >= CONFIG.navFadeStart) {
        navOpacity = (progress - CONFIG.navFadeStart) / (1 - CONFIG.navFadeStart);
      }

      if (this.menuBtn) {
        this.menuBtn.style.opacity = navOpacity;
        this.menuBtn.style.pointerEvents = navOpacity > 0.5 ? 'auto' : 'none';
      }

      if (this.cartLink) {
        this.cartLink.style.opacity = navOpacity;
        this.cartLink.style.pointerEvents = navOpacity > 0.5 ? 'auto' : 'none';
      }
    }

    onAnimationComplete() {
      document.documentElement.classList.add(CONFIG.completeClass);

      if (this.header) {
        this.header.style.position = 'fixed';
        this.header.style.top = '0';
        this.header.style.width = '100%';
      }
    }

    onAnimationReverse() {
      document.documentElement.classList.remove(CONFIG.completeClass);
    }

    easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    destroy() {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }
      if (this.bgClone) {
        this.bgClone.remove();
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new TFLogoAnimation();
    });
  } else {
    new TFLogoAnimation();
  }

})();