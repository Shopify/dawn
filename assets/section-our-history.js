document.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.02; // tweak for parallax strength
  const target = document.querySelector('.media-grid__item--2 img');
  if (target) {
    target.style.transform = `translateY(${offset}px)`;
  }
});
