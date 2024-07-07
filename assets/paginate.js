document.addEventListener('DOMContentLoaded', function () {
  try {
    const productsOnPage = document.querySelector('#product-grid.products-wrapper');
    const loadMoreBtn = document.querySelector('.load-more');
    const loadMoreSpinner = document.querySelector('.load-more-spinner');

    const count_span = document.getElementById('item_count');
    const total_count_span = document.getElementById('total_item_count');

    let nextUrl = productsOnPage.getAttribute('data-next-url');
    const itemsPerPage = parseInt(productsOnPage.getAttribute('data-per-page'));

    let totalItemsDisplayed = 0;
    totalItemsDisplayed += itemsPerPage;

    const total_count = parseInt(total_count_span.textContent);

    if (totalItemsDisplayed > total_count || itemsPerPage > total_count) {
      totalItemsDisplayed = total_count;
    }

    count_span.textContent = totalItemsDisplayed;

    if (loadMoreBtn) {
      loadMoreBtn.onclick = async (ev) => {
        ev.preventDefault();
        loadMoreBtn.classList.add('hidden');
        loadMoreSpinner.classList.remove('hidden');

        const response = await fetch(nextUrl, {
          method: 'GET',
        });

        if (response.status >= 200 && response.status < 400) {
          loadMoreSpinner.classList.add('hidden');

          const nextPage = await response.text();

          const parser = new DOMParser();
          const doc = parser.parseFromString(nextPage, 'text/html');

          const newProducts = doc.querySelector('#product-grid.products-wrapper');

          const newUrl = newProducts.getAttribute('data-next-url');

          productsOnPage.innerHTML += newProducts.innerHTML;
          nextUrl = newUrl;

          totalItemsDisplayed += itemsPerPage;

          if (totalItemsDisplayed > total_count || itemsPerPage > total_count) {
            totalItemsDisplayed = total_count;
          }

          count_span.textContent = totalItemsDisplayed;

          if (newUrl) {
            loadMoreBtn.classList.remove('hidden');
          }
        }
      };
    }
  } catch (error) {
    console.error('AN ERROR', error);
  }
});
