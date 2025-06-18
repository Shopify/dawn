document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tabbed-product-tab');
  const grids = document.querySelectorAll('.tabbed-product-grid');
  const viewAllButton = document.getElementById('view-all-button');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const selectedTab = tab.dataset.tab;
      const collectionTitle = tab.dataset.collectionTitle;
      const collectionUrl = tab.dataset.collectionUrl;

      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      grids.forEach((grid) => {
        if (grid.dataset.tab === selectedTab) {
          grid.classList.remove('hidden');
          grid.classList.add('fade-in');
        } else {
          grid.classList.add('hidden');
          grid.classList.remove('fade-in');
        }
      });

      if (viewAllButton && collectionTitle && collectionUrl) {
        viewAllButton.textContent = `View All ${collectionTitle}`;
        viewAllButton.href = collectionUrl;
      }

      if (window.initializeCardSwipers) {
        setTimeout(window.initializeCardSwipers, 150);
      }
    });
  });
});
