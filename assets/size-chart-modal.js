class SizeChartModal extends HTMLElement {
  constructor() {
    super();
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = document.querySelector('#size-chart-toggle');

    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    this.detailsContainer.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));
  }

  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  onSummaryClick(event) {
    event.preventDefault();
    this.detailsContainer.hasAttribute('open') ? this.close() : this.open();
  }

  onBodyClick(event) {
    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  }

  open() {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    this.detailsContainer.setAttribute('open', true);
    document.body.classList.add('overflow-hidden');

    requestAnimationFrame(function () {
      document.body.addEventListener('click', this.onBodyClickEvent);

      trapFocus(
        this.detailsContainer.querySelector('[tabindex="-1"]'),
        this.detailsContainer.querySelector('input:not([type="hidden"])')
      );
    });
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('size-chart-modal', SizeChartModal);
