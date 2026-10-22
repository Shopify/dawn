if (!customElements.get('hero-carousel')) {
  customElements.define(
    'hero-carousel',
    class HeroCarousel extends HTMLElement {
      connectedCallback() {
        this.slides = Array.from(this.querySelectorAll('.hero-carousel__slide'));
        this.dots = Array.from(this.querySelectorAll('.hero-carousel__dot'));
        this.index = 0;
        this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        this.update();
        if (this.slides.length < 2) return;

        this.speed = parseInt(this.dataset.speed, 10) || 6000;
        this.autoplay = this.dataset.autoplay === 'true' && !this.reducedMotion;

        this.dots.forEach((dot) => dot.addEventListener('click', () => this.goTo(parseInt(dot.dataset.index, 10))));

        // Mouse only: touch devices emulate hover and would stall autoplay after a tap
        this.addEventListener('pointerenter', (event) => {
          if (event.pointerType !== 'mouse') return;
          this.hovered = true;
          this.stop();
        });
        this.addEventListener('pointerleave', (event) => {
          if (event.pointerType !== 'mouse') return;
          this.hovered = false;
          this.play();
        });
        this.addEventListener('focusin', () => this.stop());
        this.addEventListener('focusout', () => this.play());
        this.onVisibilityChange = () => (document.hidden ? this.stop() : this.play());
        document.addEventListener('visibilitychange', this.onVisibilityChange);

        this.initSwipe();
        this.play();

        if (Shopify.designMode) {
          this.addEventListener('shopify:block:select', (event) => {
            this.autoplay = false;
            this.stop();
            this.goTo(this.slides.indexOf(event.target));
          });
        }
      }

      disconnectedCallback() {
        this.stop();
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
      }

      goTo(index) {
        const count = this.slides.length;
        this.index = ((index % count) + count) % count;
        this.update();
        this.play();
      }

      update() {
        this.slides.forEach((slide, i) => {
          const active = i === this.index;
          slide.classList.toggle('is-active', active);
          slide.toggleAttribute('inert', !active);
          slide.setAttribute('aria-hidden', String(!active));
          const video = slide.querySelector('video');
          if (!video) return;
          if (active && !this.reducedMotion) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
        this.dots.forEach((dot, i) => {
          const active = i === this.index;
          dot.classList.toggle('is-active', active);
          active ? dot.setAttribute('aria-current', 'true') : dot.removeAttribute('aria-current');
        });
      }

      play() {
        this.stop();
        if (!this.autoplay || this.hovered || this.matches(':focus-within')) return;
        this.timer = setTimeout(() => this.goTo(this.index + 1), this.speed);
      }

      stop() {
        clearTimeout(this.timer);
      }

      initSwipe() {
        let startX = 0;
        let startY = 0;
        let deltaX = 0;
        let tracking = false;

        this.addEventListener('pointerdown', (event) => {
          if (event.pointerType === 'mouse') return;
          tracking = true;
          startX = event.clientX;
          startY = event.clientY;
          deltaX = 0;
        });

        this.addEventListener('pointerup', (event) => {
          if (!tracking) return;
          tracking = false;
          deltaX = event.clientX - startX;
          const deltaY = event.clientY - startY;
          if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
            this.goTo(this.index + (deltaX < 0 ? 1 : -1));
          }
        });

        this.addEventListener('pointercancel', () => (tracking = false));

        // A swipe that ends on the button shouldn't also follow its link
        this.addEventListener(
          'click',
          (event) => {
            if (Math.abs(deltaX) > 10) event.preventDefault();
            deltaX = 0;
          },
          true
        );
      }
    }
  );
}
