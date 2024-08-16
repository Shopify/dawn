var TNB = {
  tallSizingControls: function () {
    var controls = document.querySelector('.tall-sizing-controls');

    if (controls) {
      var regularOptions = controls.querySelectorAll('label:not([data-tall-size])');
      var tallOptions = controls.querySelectorAll('label[data-tall-size]');
      var buttonRegular = controls.querySelector('[data-button-regular]');
      var buttonTall = controls.querySelector('[data-button-tall]');

      function handleClickControl(tall) {
        if (tall) {
          regularOptions.forEach(function (el) {
            el.classList.add('hide');
          });
          tallOptions.forEach(function (el) {
            el.classList.remove('hide');
          });

          buttonRegular.classList.add('inactive');
          buttonRegular.classList.remove('inactive');
        } else {
          regularOptions.forEach(function (el) {
            el.classList.remove('hide');
          });
          tallOptions.forEach(function (el) {
            el.classList.add('hide');
          });

          buttonRegular.classList.remove('inactive');
          buttonRegular.classList.add('inactive');
        }
      }

      buttonRegular.addEventListener('click', handleClickControl);
      buttonTall.addEventListener('click', handleClickControl);
    }
  },
};

function init() {
  TNB.tallSizingControls();
}

window.addEventListener('DOMContentLoaded', function () {
  init();
});
