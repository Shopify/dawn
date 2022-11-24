class SearchForm extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');

    if (this.input) {
      this.input.form.addEventListener('reset', this.onFormReset.bind(this));
    }
  }

  shouldResetForm() {
    return !document.querySelector('[aria-selected="true"] a')
  }

  onFormReset(event) {
    // Prevent default so the form reset doesn't set the value gotten from the url on page load
    event.preventDefault();
    // Don't reset if the user has selected an element on the predictive search dropdown
    if (this.shouldResetForm()) {
      this.input.value = '';
    }
  }
}

customElements.define('search-form', SearchForm);
