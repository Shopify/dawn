document.addEventListener('DOMContentLoaded', () => {
  $('body').on('click', '.size-chart__toggle', function (e) {
    var sizeChartLink = $(e.currentTarget);
    var container = sizeChartLink.closest('quick-add-modal');

    if (container.length == 0) {
      container = $('body');
    }

    var sizeChartModal = container.find('.size-chart-modal');
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

  $('body').on('keyup', (event) => {
    if (event.key.toUpperCase() === 'ESCAPE') {
      var sizeChartToggle = $('.size-chart__toggle');
      $('.size-chart-modal details').removeAttr('open');
      removeTrapFocus(sizeChartToggle.eq(0));
      document.body.classList.remove('overflow-hidden');
    }
  });
});
