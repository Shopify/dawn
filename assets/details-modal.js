/**
 * Details Modal custom element class.
 * @extends HTMLElement
 */
class DetailsModal extends HTMLElement {
  constructor() {
    super();
    /** @type {HTMLElement} */
    this.detailsContainer = this.querySelector('details');
    /** @type {HTMLElement} */
    this.summaryToggle = this.querySelector('summary');

    this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
    this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
    this.querySelector('button[type="button"]').addEventListener('click', this.close.bind(this));

    this.summaryToggle.setAttribute('role', 'button');
  }

  /**
   * Return open state of modal.
   * @returns {boolean} - True if modal is open, false otherwise.
   */
  isOpen() {
    return this.detailsContainer.hasAttribute('open');
  }

  /**
   * Handle summary element click event.
   * Toggles the open state of the modal.
   * @param {Event} event - The click event object.
   */
  onSummaryClick(event) {
    event.preventDefault();
    event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
  }

  /**
   * Handle body click event.
   * Closes the modal if click is outside of it.
   * @param {Event} event - The click event object.
   */
  onBodyClick(event) {
    if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
  }

  /**
   * Open the modal and trap focus.
   * @param {Event} event - The click event object.
   */
  open(event) {
    this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
    event.target.closest('details').setAttribute('open', true);
    document.body.addEventListener('click', this.onBodyClickEvent);
    document.body.classList.add('overflow-hidden');

    trapFocus(
      this.detailsContainer.querySelector('[tabindex="-1"]'),
      this.detailsContainer.querySelector('input:not([type="hidden"])')
    );
  }

  /**
   * Close the modal and release focus.
   * @param {boolean} [focusToggle=true] - Whether to focus the summary toggle element after closing.
   */
  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('click', this.onBodyClickEvent);
    document.body.classList.remove('overflow-hidden');
  }
}

customElements.define('details-modal', DetailsModal);
