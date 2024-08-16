var TNB = {
  tallSizingControls: function () {
    var controls = document.querySelector('.tall-sizing-controls');

    if (controls) {
      var regularOptions = controls.parentNode.querySelectorAll('label:not([data-tall-size])');
      var tallOptions = controls.parentNode.querySelectorAll('label[data-tall-size]');
      var buttonRegular = controls.querySelector('[data-button-regular]');
      var buttonTall = controls.querySelector('[data-button-tall]');

      function handleClickControl(tall) {
        console.log(regularOptions);
        console.log(tallOptions);

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
      buttonTall.addEventListener('click', function () {
        handleClickControl(true);
      });
    }
  },
};

function init() {
  TNB.tallSizingControls();
}

window.addEventListener('DOMContentLoaded', function () {
  init();
});
