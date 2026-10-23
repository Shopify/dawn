/* Move original cards, never cloned video players or duplicated accessible content. */
if (!customElements.get('cellife-story-rail')) {
  customElements.define('cellife-story-rail', class extends HTMLElement {
    connectedCallback() {
      if (this.controller) return;
      this.controller = new AbortController();
      const options = { signal: this.controller.signal };
      this.viewport = this.querySelector('.cellife-story-viewport');
      this.track = this.querySelector('[data-story-track]');
      this.toggle = this.querySelector('[data-rail-toggle]');
      if (!this.viewport || !this.track || !this.toggle) return;
      this.motion = matchMedia('(prefers-reduced-motion: reduce)');
      this.paused = this.dataset.autoScroll !== 'true' || this.motion.matches || Boolean(window.Shopify?.designMode);
      this.hovered = false;
      this.visible = false;
      this.speed = Math.min(50, Math.max(10, Number(this.dataset.speed) || 24));
      this.toggle.hidden = false;
      const update = () => {
        this.toggle.textContent = this.paused ? this.toggle.dataset.playLabel : this.toggle.dataset.pauseLabel;
        this.toggle.setAttribute('aria-pressed', String(this.paused));
      };
      const pause = () => { this.paused = true; update(); };
      this.toggle.addEventListener('click', () => { this.paused = !this.paused; update(); }, options);
      this.viewport.addEventListener('pointerenter', () => { this.hovered = true; }, options);
      this.viewport.addEventListener('pointerleave', () => { this.hovered = false; }, options);
      this.viewport.addEventListener('pointerdown', pause, options);
      this.viewport.addEventListener('wheel', pause, { ...options, passive: true });
      this.viewport.addEventListener('keydown', pause, options);
      this.viewport.addEventListener('play', pause, { ...options, capture: true });
      this.motion.addEventListener('change', () => { if (this.motion.matches) pause(); }, options);
      const measure = () => {
        const first = this.track.firstElementChild;
        const gap = parseFloat(getComputedStyle(this.track).gap) || 0;
        const count = this.track.children.length;
        const visibleCards = Math.min(this.viewport.clientWidth < 750 ? 1.15 : 3.2, count - 1);
        if (visibleCards > 0) this.style.setProperty('--story-card-width', `${(this.viewport.clientWidth - gap * (visibleCards - 1)) / visibleCards}px`);
        this.step = first ? first.getBoundingClientRect().width + gap : 0;
        this.overflowing = this.viewport.scrollWidth > this.viewport.clientWidth + 2;
        this.toggle.hidden = !this.overflowing || Boolean(this.querySelector('.cellife-community-app'));
      };
      this.resize = new ResizeObserver(measure);
      this.resize.observe(this.viewport);
      this.intersection = new IntersectionObserver(([entry]) => { this.visible = entry.isIntersecting; });
      this.intersection.observe(this);
      measure(); update();
      let previous, position = this.viewport.scrollLeft, wasMoving = false;
      const frame = (now) => {
        const delta = previous === undefined ? 0 : Math.min(50, now - previous);
        previous = now;
        const focused = this.viewport.contains(document.activeElement);
        const playing = [...this.querySelectorAll('video')].some(video => !video.paused);
        const moving = !this.paused && !this.hovered && !focused && !playing && this.visible && !document.hidden && this.overflowing && this.step > 0 && !this.querySelector('.cellife-community-app');
        if (moving) {
          if (!wasMoving) position = this.viewport.scrollLeft;
          position += delta * this.speed / 1000;
          if (position >= this.step) {
            position -= this.step;
            this.track.append(this.track.firstElementChild);
          }
          this.viewport.scrollLeft = position;
        }
        wasMoving = moving;
        this.frame = requestAnimationFrame(frame);
      };
      this.frame = requestAnimationFrame(frame);
    }
    disconnectedCallback() {
      cancelAnimationFrame(this.frame);
      this.controller?.abort();
      this.resize?.disconnect();
      this.intersection?.disconnect();
      this.controller = null;
    }
  });
}
