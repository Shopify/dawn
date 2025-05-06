document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.recipekit-category-filter .filter-btn');
  var cards = document.querySelectorAll('.recipekit-card-outer');

  // Get category for each card
  function getCardCategory(card) {
    var badge = card.querySelector('.recipekit-category-badge');
    return badge ? badge.textContent.trim() : '';
  }

  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Remove active from all
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var selected = btn.getAttribute('data-category');
      cards.forEach(function(card) {
        var cardCat = getCardCategory(card);
        if (selected === 'All' || cardCat === selected) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Optionally, activate 'All' on load
  var defaultBtn = document.querySelector('.recipekit-category-filter .filter-btn[data-category="All"]');
  if (defaultBtn) defaultBtn.classList.add('active');
});
