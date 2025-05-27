var TNB = {
  state: {
    tallSizingActive: false,
  },
  sliderArrows: function () {
    const handleClickNext = function (e) {
      const parent = $(e.currentTarget).closest('.collection');
      const slider = parent.find('slider-component > ul');
      const items = slider.find('li');

      const scrollLeft = slider.get(0).scrollLeft;
      const itemWidth = items.get(0).scrollWidth;

      slider.get(0).scrollTo({
        left: scrollLeft + itemWidth,
        behavior: 'smooth',
      });

      parent.find('.slider-button--prev').removeAttr('disabled');

      if (scrollLeft + itemWidth >= slider.get(0).scrollWidth - slider.get(0).clientWidth) {
        parent.find('.slider-button--next').attr('disabled', '');
      }
    };

    const handleClickPrev = function (e) {
      const parent = $(e.currentTarget).closest('.collection');
      const slider = parent.find('slider-component > ul');
      const items = slider.find('li');

      const scrollLeft = slider.get(0).scrollLeft;
      const itemWidth = items.get(0).scrollWidth;

      slider.get(0).scrollTo({
        left: scrollLeft - itemWidth,
        behavior: 'smooth',
      });

      parent.find('.slider-button--next').removeAttr('disabled');

      if (scrollLeft - itemWidth * 2 <= 0) {
        parent.find('.slider-button--prev').attr('disabled', '');
      }
    };

    $('body').on('click', '.collection__arrows .slider-button--prev', handleClickPrev);
    $('body').on('click', '.collection__arrows .slider-button--next', handleClickNext);
  },
  megaMenuHover: function () {
    const inlineMenu = document.querySelector('.header__inline-menu');
    const detailsItems = inlineMenu.querySelectorAll('details');

    detailsItems.forEach((item) => {
      const ulElement = item.querySelector('ul');

      item.addEventListener('mouseover', () => {
        item.setAttribute('open', true);

        ulElement.addEventListener('mouseleave', () => {
          item.removeAttribute('open');
        });

        item.addEventListener('mouseleave', () => {
          item.removeAttribute('open');
        });
      });
    });
  },
  tallSizingControls: function () {
    function handleClickControl(controls, tall) {
      var regularOptions = controls.parentNode.querySelectorAll('label:not([data-tall-size])');
      var tallOptions = controls.parentNode.querySelectorAll('label[data-tall-size]');
      var buttonRegular = controls.querySelector('[data-button-regular]');
      var buttonTall = controls.querySelector('[data-button-tall]');

      regularOptions.forEach(function (el) {
        el.classList.add('hide');
      });
      tallOptions.forEach(function (el) {
        el.classList.add('hide');
      });

      buttonRegular.classList.add('inactive');
      buttonTall.classList.add('inactive');
      TNB.state.tallSizingActive = false;

      if (tall) {
        tallOptions.forEach(function (el) {
          el.classList.remove('hide');
        });

        buttonTall.classList.remove('inactive');

        TNB.state.tallSizingActive = true;
      } else {
        regularOptions.forEach(function (el) {
          el.classList.remove('hide');
        });

        buttonRegular.classList.remove('inactive');
      }
    }

    $('body').on('click', '.tall-sizing-controls [data-button-regular]', function (e) {
      const target = $(e.currentTarget);
      const controls = target.closest('.tall-sizing-controls').get(0);
      handleClickControl(controls, false);
    });

    $('body').on('click', '.tall-sizing-controls [data-button-tall]', function (e) {
      const target = $(e.currentTarget);
      const controls = target.closest('.tall-sizing-controls').get(0);
      handleClickControl(controls, true);
    });
  },
  refreshTallSizingControls: function () {
    if (TNB.state.tallSizingActive) {
      $('[data-button-tall]').click();
    }
  }
};

function init() {
  subscribe(PUB_SUB_EVENTS.optionValueSelectionChange, function (e) {
    TNB.refreshTallSizingControls();
  });

  TNB.tallSizingControls();
  TNB.megaMenuHover();
  TNB.sliderArrows();
}

window.addEventListener('DOMContentLoaded', function () {
  init();
});
