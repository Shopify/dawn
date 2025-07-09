import { Component } from '@theme/component';
import { debounce } from '@theme/utilities';

/**
 * A custom element that allows the user to clean a search input.
 *
 * @typedef {object} Refs
 * @property {HTMLInputElement} searchPageInput - The search input element.
 * @extends {Component<Refs>}
 */
class SearchPageInputComponent extends Component {
  requiredRefs = ['searchPageInput'];

  /**
   * Handles the click event on the clear button and submits an empty search.
   * This clears the search input and resubmits the form if the page is not
   * already in an empty state.
   */
  handleClearClick() {
    this.#submitEmptySearch();
  }

  /**
   * Handles the keydown event on the search input and resets the search when
   * empty and Escape is pressed.
   *
   * @param {KeyboardEvent} event - The keyboard event.
   */
  handleKeyDown = debounce((event) => {
    const value = this.refs.searchPageInput.value.trim();

    if (event.key === 'Escape' && value === '') {
      this.#submitEmptySearch();
    }
  }, 100);

  #submitEmptySearch() {
    const searchInput = this.refs.searchPageInput;

    searchInput.focus();
    searchInput.value = '';

    if (this.#isEmptyState()) return;

    searchInput.form?.submit();
  }

  #isEmptyState = () => {
    const url = new URL(window.location.href);
    const queryParam = url.searchParams.get('q') ?? '';

    return queryParam.trim() === '';
  };
}

if (!customElements.get('search-page-input-component')) {
  customElements.define('search-page-input-component', SearchPageInputComponent);
}
