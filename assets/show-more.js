class ShowMoreButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      console.log(event.target.nodeName, 'nodename')
      if (event.target.nodeName === 'SPAN' && event.target.closest('[id^="Show-More-"]')) {
        this.expandShowMore(event.target.closest('[id^="Show-More-"]'));
      }
      if (event.target.nodeName === 'BUTTON' && event.target.closest('[id^="Show-More-"]')) {
        this.expandShowMore(event.target.closest('[id^="Show-More-"]'));
        const nextElementToFocus = event.target.parentNode.parentNode.querySelector(".facets__item-show-more")
        if (!nextElementToFocus.classList.contains('.hidden')) {
          nextElementToFocus.querySelector('input').focus()
        }
      }
    });
  }
  expandShowMore(showMore) {
    const facetsDiplay = showMore.closest('.facets__display-vertical');
    const facetsWrap = facetsDiplay.querySelector('.facets-wrap-vertical');
    facetsWrap.classList.toggle('facets-wrap-show-more');
    facetsDiplay.querySelectorAll('.facets__item.facets__item-show-more').forEach(item => item.classList.toggle('hidden'))
  }
}

customElements.define('show-more-button', ShowMoreButton);

