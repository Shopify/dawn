var TNB = {
  tallSizingControls: function () {
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

          //   tallOptions[0].click();

          buttonTall.classList.remove('inactive');
        } else {
          regularOptions.forEach(function (el) {
            el.classList.remove('hide');
          });

          //   regularOptions[0].click();

          buttonRegular.classList.remove('inactive');
        }
      }

      buttonRegular.addEventListener('click', function () {
        handleClickControl(false);
      });
      buttonTall.addEventListener('click', function () {
        handleClickControl(true);
      });
    }
  },
};

function init() {
  console.log(Shopify);
  TNB.tallSizingControls();
}

window.addEventListener('DOMContentLoaded', function () {
  init();
});
