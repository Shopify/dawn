class CollectionList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(this);

      fetch('/collections.json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // const html = document.createElement('div');
          // html.innerHTML = text;
          // const recommendations = html.querySelector('collection-list');
          // console.log(recommendations);
          // if (recommendations && recommendations.innerHTML.trim().length) {
          //   this.innerHTML = recommendations.innerHTML;
          // }

          // if (!this.querySelector('slideshow-component') && this.classList.contains('complementary-products')) {
          //   this.remove();
          // }

          // if (html.querySelector('.grid__item')) {
          //   this.classList.add('collection-list--loaded');
          // }

          // this.classList.add('recommendations-loaded');
        })
        .catch((e) => {
          console.error(e);
        });
    };

    new IntersectionObserver(handleIntersection.bind(this), { rootMargin: '0px 0px 100px 0px' }).observe(this);
  }
}

customElements.define('collection-list', CollectionList);
