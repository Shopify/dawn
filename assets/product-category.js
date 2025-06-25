document.addEventListener('DOMContentLoaded', function () {
  const navButtons = document.querySelectorAll('.product-category-hero__nav-button');
  const heroImage = document.querySelector('.product-category-hero__image');
  const heroTitle = document.getElementById('hero-title');
  const heroDescription = document.getElementById('hero-description');
  const heroCta = document.getElementById('hero-cta');

  navButtons.forEach((button) => {
    button.addEventListener('click', function () {
      navButtons.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');

      const categoryTitle = this.dataset.categoryTitle;
      const categoryDescription = this.dataset.categoryDescription;
      const categoryImage = this.dataset.categoryImage;
      const categoryImageAlt = this.dataset.categoryImageAlt;
      const buttonText = this.dataset.buttonText;
      const buttonLink = this.dataset.buttonLink;

      if (heroTitle && categoryTitle) {
        heroTitle.textContent = categoryTitle;
      }

      if (heroDescription && categoryDescription) {
        heroDescription.textContent = categoryDescription;
      }

      if (heroCta) {
        if (buttonText && buttonLink) {
          heroCta.textContent = buttonText;
          heroCta.href = buttonLink;
          heroCta.style.display = 'inline-block';
        } else {
          heroCta.style.display = 'none';
        }
      }

      if (heroImage && categoryImage) {
        heroImage.style.opacity = '0';
        setTimeout(() => {
          heroImage.src = categoryImage;
          heroImage.alt = categoryImageAlt;
          heroImage.style.opacity = '1';
        }, 300);
      }
    });
  });
});
