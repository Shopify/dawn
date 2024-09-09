document.addEventListener('DOMContentLoaded', function () {
  const starsDiv = document.querySelector('.difficulty-rating-stars');
  if (!starsDiv) return;

  const difficulty = starsDiv.dataset.difficulty;
  const stars = Math.min(Math.max(parseInt(difficulty, 10), 0), 5);

  const starFragment = document.createDocumentFragment();

  for (let i = 0; i < 5; i++) {
    const starImg = document.createElement('img');
    starImg.loading = 'lazy';
    starImg.alt = i < stars ? 'difficulty rating full' : 'difficulty rating empty';
    starImg.src =
      i < stars
        ? 'https://cdn.shopify.com/s/files/1/0600/8225/8105/files/Image30218_565878dc8b1f5_2x_de3f683f-99c4-4bd8-96a9-8fd6e258bccb.png?v=1643808702'
        : 'https://cdn.shopify.com/s/files/1/0600/8225/8105/files/Image30218-empty_565878dc8b1f5_2x_f4a2f3cb-10df-48da-adfa-532fd1887d0c.png?v=1643808702';
    starImg.height = '20';
    starImg.width = '20';
    starFragment.appendChild(starImg);
  }

  starsDiv.appendChild(starFragment);
});
