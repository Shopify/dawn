// main-blog-recommendations.js
// Fetch and render Shopify product recommendations for the main-blog section

document.addEventListener('DOMContentLoaded', function() {
  var recContainers = document.querySelectorAll('[data-recommendations-container]');
  if (!recContainers.length) return;

  recContainers.forEach(function(container) {
    var sectionId = container.getAttribute('data-section-id');
    var productId = container.getAttribute('data-product-id');
    var limit = container.getAttribute('data-limit') || 4;
    var url = '/recommendations/products?section_id=' + encodeURIComponent(sectionId) + '&product_id=' + encodeURIComponent(productId) + '&limit=' + encodeURIComponent(limit);

    fetch(url)
      .then(function(response) {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(function(html) {
        // Extract the recommendations grid from the returned HTML
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, 'text/html');
        var grid = doc.querySelector('.product-grid');
        if (grid) {
          container.innerHTML = '';
          container.appendChild(grid);
        } else {
          container.innerHTML = '<div class="main-blog-recommendations-empty">No recommendations found.</div>';
        }
      })
      .catch(function(error) {
        container.innerHTML = '<div class="main-blog-recommendations-error">Error loading recommendations.</div>';
      });
  });
});
