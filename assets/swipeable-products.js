// swipeable-products.js
document.addEventListener('DOMContentLoaded', () => {
  initSwipeableProducts();
});

function initSwipeableProducts() {
  const containers = document.querySelectorAll('[data-swipeable-products]');

  containers.forEach((container) => {
    const wrapper = container.querySelector('[data-products-wrapper]');
    const prevBtn = container.querySelector('[data-nav-prev]');
    const nextBtn = container.querySelector('[data-nav-next]');
    const cards = wrapper.querySelectorAll('.swipeable-product-card');
    const productsContainer = container.querySelector('.swipeable-products-container');

    if (!cards.length) return;

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const gap = 20; // Same as the gap in CSS
    const visibleCards = getVisibleCardsCount();
    const maxIndex = Math.max(0, cards.length - visibleCards);

    // Initial state
    updateButtonStates();

    // Add event listeners
    prevBtn.addEventListener('click', () => navigateSlider(-1));
    nextBtn.addEventListener('click', () => navigateSlider(1));

    productsContainer.addEventListener('scroll', () => {
      console.log('first');
      console.log(productsContainer.scrollLeft);
      if (productsContainer.scrollLeft > 0) {
        prevBtn.style.opacity = '1';
        prevBtn.disabled = false;
      } else {
        prevBtn.style.opacity = '0.5';
        prevBtn.disabled = true;
      }

      if (productsContainer.scrollLeft < productsContainer.scrollWidth - productsContainer.offsetWidth) {
        nextBtn.style.opacity = '1';
        nextBtn.disabled = false;
      } else {
        nextBtn.style.opacity = '0.5';
        nextBtn.disabled = true;
      }
    });

    function navigateSlider(direction) {
      currentIndex = Math.max(0, Math.min(maxIndex, currentIndex + direction));
      slideToIndex(currentIndex);
      updateButtonStates();
    }

    function slideToIndex(index) {
      const offset = index * (cardWidth + gap);
      wrapper.style.transform = `translateX(-${offset}px)`;
    }

    function updateButtonStates() {
      prevBtn.disabled = currentIndex === 0;
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';

      nextBtn.disabled = currentIndex >= maxIndex;
      nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
    }

    function getVisibleCardsCount() {
      const containerWidth = container.offsetWidth;
      return Math.floor(containerWidth / (cardWidth + gap));
    }
  });
}
