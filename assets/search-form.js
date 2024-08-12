/**
 * Search form custom element class.
 * @extends HTMLElement
 */
class SearchForm extends HTMLElement {
  constructor() {
    super();
    /** @type {HTMLInputElement} */
    this.input = this.querySelector('input[type="search"]');
    /** @type {HTMLButtonElement} */
    this.resetButton = this.querySelector('button[type="reset"]');

    if (this.input) {
      this.input.form.addEventListener('reset', this.onFormReset.bind(this));
      this.input.addEventListener(
        'input',
        debounce((event) => {
          this.onChange(event);
        }, 300).bind(this)
      );
    }
  }

  /** Toggle input reset button visibility. Show when input has value. */
  toggleResetButton() {
    const resetIsHidden = this.resetButton.classList.contains('hidden');
    if (this.input.value.length > 0 && resetIsHidden) {
      this.resetButton.classList.remove('hidden');
    } else if (this.input.value.length === 0 && !resetIsHidden) {
      this.resetButton.classList.add('hidden');
    }
  }

  /** Handle input change event. Toggle reset button visibility. */
  onChange() {
    this.toggleResetButton();
  }

  /** Check if form should be reset. */
  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a');
  }

  /**
   * Handle form reset event. Reset input value and focus.
   * @param {Event} event - Reset event object.
   */
  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (this.shouldResetForm()) {
      this.input.value = '';
      this.input.focus();
      this.toggleResetButton();
    }
  }
}

customElements.define('search-form', SearchForm);
