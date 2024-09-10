document.addEventListener('DOMContentLoaded', () => {
  $('body').on('click', '.size-chart__toggle', function () {
    var sizeChartModal = $('.size-chart-modal');
    var sizeChartModalDetails = sizeChartModal.find('details');

    sizeChartModalDetails.attr('open', 'true');
    document.body.classList.add('overflow-hidden');

    trapFocus(
      sizeChartModalDetails.find('.size-chart-modal__content').eq(0),
      sizeChartModalDetails.find('.size-chart-modal__close-button').eq(0)
    );
  });

  $('body').on('click', '.size-chart-modal__close-button', function () {
    var sizeChartModal = $('.size-chart-modal');
    var sizeChartModalDetails = sizeChartModal.find('details');

    sizeChartModalDetails.removeAttr('open');
    removeTrapFocus(this);
    document.body.classList.remove('overflow-hidden');
  });

  $('body').on('click', function (event) {
    var sizeChartModal = $('.size-chart-modal');
    var sizeChartModalDetails = sizeChartModal.find('details');

    if (!sizeChartModalDetails.contains(event.currentTarget) || $(event.target).hasClass('modal-overlay')) {
      sizeChartModalDetails.removeAttr('open');
      removeTrapFocus(false);
      document.body.classList.remove('overflow-hidden');
    }
  });

  // Testing
  $('body').on('keyup', (event) => {
    if (event.key.toUpperCase() === 'ESCAPE') {
      var sizeChartModalDetails = $('.size-chart-modal details');
      console.log(sizeChartModalDetails.eq(0), sizeChartModalDetails.eq(0).hasAttribute('open'));

      if (sizeChartModalDetails.eq(0).hasAttribute('open')) {
        var sizeChartToggle = $('.size-chart__toggle');

        sizeChartModalDetails.removeAttr('open');
        removeTrapFocus(sizeChartToggle.eq(0));
        document.body.classList.remove('overflow-hidden');
      }
    }
  });
});
