class SizeChartModal extends HTMLElement {
  constructor() {
    super();
    this.contentContainer = document.querySelector('size-chart-modal');
    this.detailsContainer = this.contentContainer.querySelector('details');

    this.addEventListener('click', this.onSummaryClick.bind(this));
    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.detailsContainer.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));
  }

  onSummaryClick(event) {
    event.preventDefault();
    this.detailsContainer.hasAttribute('open') ? this.close() : this.open();
    console.dir(this);
  }

  onBodyClick(event) {
    if (!thisdetailsContainer.contains(event.target) || event.target.classList.contains('modal-overlay'))
      this.close(false);
  }

  open() {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    this.detailsContainer.setAttribute('open', true);

    document.body.classList.add('overflow-hidden');
    document.body.addEventListener('click', this.onBodyClickEvent);

    setTimeout(() => {
      trapFocus(
        this.detailsContainer.querySelector('[tabindex="-1"]'),
        this.detailsContainer.querySelector('input:not([type="hidden"])')
      );
    }, 10);

    setTimeout(() => {
      document.body.classList.add('overflow-hidden');
      document.body.addEventListener('click', this.onBodyClickEvent);

      trapFocus(
        this.detailsContainer.querySelector('[tabindex="-1"]'),
        this.detailsContainer.querySelector('input:not([type="hidden"])')
      );
    }, 10);

    requestAnimationFrame(function () {});
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('size-chart-modal-toggle', SizeChartModal);
