document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.flicker-carousel-section[data-id]');
  if (!carousel) return;

  const wrappers = carousel.querySelectorAll('.flicker-image-wrapper');
  const texts = carousel.querySelectorAll('.flicker-text-slide');
  const btn = carousel.querySelector('.flicker-next-btn');
  let current = 0;

  function update() {
    wrappers.forEach((w, i) => {
      w.classList.toggle('active', i === current);
      w.style.zIndex = i === current ? 2 : 1;
    });
    texts.forEach((t, i) => t.classList.toggle('active', i === current));
  }

  if (btn) {
    btn.addEventListener('click', () => {
      current = (current + 1) % wrappers.length;
      update();
    });
  }
});
