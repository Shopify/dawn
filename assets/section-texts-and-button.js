class AnimatedText extends HTMLElement {
  connectedCallback() {
    this.classList.add('animated-text');

    const effect = this.getAttribute('effect') || 'fade';
    const dur = parseInt(this.getAttribute('duration') || '600', 10);
    const delay = parseInt(this.getAttribute('delay') || '0', 10);

    this.classList.add(`anim--${effect}`);
    this.style.setProperty('--anim-dur', `${dur}ms`);
    this.style.setProperty('--anim-delay', `${delay}ms`);

    this._io = new IntersectionObserver(
      (entries, io) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.classList.add('in');
            io.unobserve(this);
          }
        });
      },
      { threshold: 0.2 }
    );

    this._io.observe(this);
  }

  disconnectedCallback() {
    if (this._io) this._io.disconnect();
  }
}
customElements.define('animated-text', AnimatedText);
