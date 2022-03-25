class ShowMoreButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      if (event.target.nodeName === 'SPAN' && event.target.closest('[id^="Show-More-"]')) {
        this.expandShowMore(event);
      }
      if (event.target.nodeName === 'BUTTON' && event.target.closest('[id^="Show-More-"]')) {
        this.expandShowMore(event);
        const nextElementToFocus = event.target.parentNode.parentNode.querySelector(".show-more-item")
        if (!nextElementToFocus.classList.contains('.hidden')) {
          nextElementToFocus.querySelector('input').focus()
        }
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

