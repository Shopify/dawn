if (!customElements.get('localization-form')) {
  customElements.define(
    'localization-form',
    class LocalizationForm extends HTMLElement {
      constructor() {
        super();
        this.elements = {
          input: this.querySelector('input[name="locale_code"], input[name="country_code"]'),
          button: this.querySelector('button'),
          panel: this.querySelector('.disclosure__list-wrapper'),
          search: this.querySelector('input[name="country_filter"]'),
        };
        this.elements.button.addEventListener('click', this.openSelector.bind(this));
        this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
        this.elements.search.addEventListener('keyup', this.filterCountries.bind(this));
        this.addEventListener('keyup', this.onContainerKeyUp.bind(this));

        this.querySelectorAll('a').forEach((item) => item.addEventListener('click', this.onItemClick.bind(this)));
      }

      hidePanel() {
        this.elements.button.setAttribute('aria-expanded', 'false');
        this.elements.panel.setAttribute('hidden', true);
      }

      onContainerKeyUp(event) {
        if (event.code.toUpperCase() !== 'ESCAPE') return;

        if (this.elements.button.getAttribute('aria-expanded') == 'false') return;
        this.hidePanel();
        event.stopPropagation();
        this.elements.button.focus();
      }

      onItemClick(event) {
        event.preventDefault();
        const form = this.querySelector('form');
        this.elements.input.value = event.currentTarget.dataset.value;
        if (form) form.submit();
      }

      openSelector() {
        this.elements.button.focus();
        this.elements.panel.toggleAttribute('hidden');
        this.elements.button.setAttribute(
          'aria-expanded',
          (this.elements.button.getAttribute('aria-expanded') === 'false').toString()
        );
      }

      closeSelector(event) {
        const isChild =
          this.elements.panel.contains(event.relatedTarget) || this.elements.button.contains(event.relatedTarget);
        if (!event.relatedTarget || !isChild) {
          this.hidePanel();
        }
      }

      filterCountries() {
        const searchValue = this.elements.search.value.toLowerCase();
        this.querySelectorAll('a').forEach((item) => {
          const countryName = item.textContent.toLowerCase();
          if (countryName.indexOf(searchValue) > -1) {
            item.parentElement.style.display = "block";
          } else {
            item.parentElement.style.display = "none";
          }
        });
      }
    }
  );
}
