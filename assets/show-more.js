class ShowMoreButton extends HTMLElement {
  constructor() {
    super();
    const button = this.querySelector('button');
    button.addEventListener('click', (event) => {
      this.expandShowMore(event);
      const nextElementToFocus = event.target.closest('.parent-display').querySelector('.show-more-item');
      if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden')) {
        nextElementToFocus.querySelector('input').focus();
      }
    });
  }
  expandShowMore(event) {
    const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
    const parentWrap = parentDisplay.querySelector('.parent-wrap');
    this.querySelectorAll('.label-text').forEach((element) => element.classList.toggle('hidden'));
    parentDisplay.querySelectorAll('.show-more-item').forEach((item) => item.classList.toggle('hidden'));
  }
}

customElements.define('show-more-button', ShowMoreButton);
