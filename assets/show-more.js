class ShowMoreButton extends HTMLElement {
  constructor() {
    super();
    const button = this.querySelector('button');
    button.addEventListener('click', (event) => {
      this.expandShowMore(event);
      const nextElementToFocus = event.target.parentNode.parentNode.parentNode.querySelector(".show-more-item")
      if (nextElementToFocus && !nextElementToFocus.classList.contains('hidden')) {
        nextElementToFocus.querySelector('input').focus()
      }
    });
  }
  expandShowMore(event) {
    const parentDisplay = event.target.closest('[id^="Show-More-"]').closest('.parent-display');
    const parentWrap = parentDisplay.querySelector('.parent-wrap');
    parentWrap.classList.toggle('show-more-wrap');
    parentDisplay.querySelectorAll('.show-more-item').forEach(item => item.classList.toggle('hidden'))
  }
}

customElements.define('show-more-button', ShowMoreButton);

