var TNB = {
  state: {
    tallSizingActive: false,
  },
  updateOptionNameLabels: function (variant) {
    if (!variant.options) return false;

    var optionNameLabels = document.querySelectorAll('.option-name-label');

    variant.options.forEach(function (option, i) {
      optionNameLabels[i].innerHTML = option;
    });
  },
  tallSizingControls: function (destroy) {
    var controls = document.querySelector('.tall-sizing-controls');

    if (controls) {
      var regularOptions = controls.parentNode.querySelectorAll('label:not([data-tall-size])');
      var tallOptions = controls.parentNode.querySelectorAll('label[data-tall-size]');
      var buttonRegular = controls.querySelector('[data-button-regular]');
      var buttonTall = controls.querySelector('[data-button-tall]');

      function handleClickControl(tall) {
        regularOptions.forEach(function (el) {
          el.classList.add('hide');
        });
        tallOptions.forEach(function (el) {
          el.classList.add('hide');
        });

        buttonRegular.classList.add('inactive');
        buttonTall.classList.add('inactive');

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

          TNB.state.tallSizingActive = false;
        }
      }

      if (destroy) {
        buttonRegular.removeEventListener('click', function () {
          handleClickControl(false);
        });
        buttonTall.removeEventListener('click', function () {
          handleClickControl(true);
        });
      } else {
        buttonRegular.addEventListener('click', function () {
          handleClickControl(false);
        });
        buttonTall.addEventListener('click', function () {
          handleClickControl(true);
        });

        if (TNB.state.tallSizingActive) {
          buttonTall.click();
        }
      }
    }
  },
};

function init() {
  subscribe(PUB_SUB_EVENTS.optionValueSelectionChange, function () {
    TNB.tallSizingControls(true);
  });

  subscribe(PUB_SUB_EVENTS.variantChange, function (e) {
    TNB.tallSizingControls(false);
    TNB.updateOptionNameLabels(e.data.variant);

    // console.log('Variant Change:', e);
  });

  TNB.tallSizingControls(false);
}

window.addEventListener('DOMContentLoaded', function () {
  init();
});
