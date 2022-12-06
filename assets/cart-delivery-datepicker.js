const CUTOFF_TIME = 14;

function loadCartDelivery() {
  jQuery.get(
    window.Shopify.routes.root + 'cart.js',
    function (data) {
      const deliveryDate = data.attributes.deliveryDate;
      if (!!deliveryDate) {
        const dateObj = new Date(deliveryDate);
        if (dateObj.getTime() >= getMinDate().getTime()) {
          $('#cart-delivery-datepicker').pickadate('picker').set('select', dateObj);
        }
      }
    },
    "json"
  );
}

function onCartDeliveryDateChange(picker) {
  const date = picker.get();
  jQuery.post(
    window.Shopify.routes.root + 'cart/update.js',
    { 
      attributes: { 
        deliveryDate: date,
        __selectedAt: new Date().getTime(),
        __selectedOn: window.location.href
      } 
    },
    null,
    "json"
  ).done(function () {
    $('#cart-delivery-datepicker-hidden').val(date);
  });
}

function onCartDeliveryDatePickerError(event) {
  if (event.currentTarget.id !== "cart-delivery-datepicker-hidden") {
    return;
  }

  const datePicker = $("#cart-delivery-datepicker");
  datePicker.addClass("cart-notification-form__error_field");

  const error = $("#cart-notification-form__error");
  const position = datePicker.offset();
  const verticalSpaceOffset = (datePicker.height() - error.height()) / 2;
  error.css({ left: position.left + 10, top: position.top + verticalSpaceOffset });
  
  datePicker.pickadate('picker').open();

  /*
  error.removeClass("cart-notification-form__error-hidden");
  setTimeout(function () {
    error.addClass("cart-notification-form__error-hidden");
  }, 3000); // hide the error message after 3 seconds
  */
}

function getMinDate() {
  const now = new Date();
  let minDateOffset;
  if (now.getHours() < CUTOFF_TIME) // cutoff time is 2pm
  {
    minDateOffset = 1;
  } else {
    minDateOffset = 2;
  }
  const min = new Date();
  min.setDate(now.getDate() + minDateOffset);
  min.setMilliseconds(0);
  min.setSeconds(0);
  min.setMinutes(0);
  min.setHours(0);
  return min;
}

function getDisabledConfig() {
  let disabledWeekdays;
  const disabledWeekDaysElement = $('#cart_delivery_date_picker_disabled_week_days');
  if (!!disabledWeekDaysElement.val()) {
    disabledWeekdays = disabledWeekDaysElement.val().split(",").map(one => Number(one));
  } else {
    disabledWeekdays = [];
  }

  let disabledDates;
  const disabledDatesElement = $('#cart_delivery_date_picker_disabled_dates');
  if (!!disabledDatesElement.val()) {
    disabledDates = disabledDatesElement.val().split(",").map(one => new Date(one));
  } else {
    disabledDates = [];
  }

  return disabledWeekdays.concat(disabledDates);
}

function addCutoffTimeMessage() {
  if ($(".picker__box .cutoff-message").length == 0) {
    const msg = '<p class="cutoff-message">Selected-day delivery cut off time: 2pm</p>'
    $(".picker__box").prepend(msg);
  }
}

function timeDiffUntilNextCutoff() {
  const now = new Date();
  let millisTillCutoff = new Date(now.getFullYear(), now.getMonth(), now.getDate(), CUTOFF_TIME, 0, 0, 0) - now;
  if (millisTillCutoff < 0) {
    // missing today's cutoff time, go to next day
    millisTillCutoff += 86400000;
  }
  return millisTillCutoff;
}

function setupDatePicker() {
  const datePicker = $('#cart-delivery-datepicker');
  const picker = datePicker.pickadate({
    today: false,
    firstDay: 1,
    min: getMinDate(),
    disable: getDisabledConfig()
  }).pickadate('picker');
  picker.on({
    open: function () {
      datePicker.removeClass("cart-notification-form__error_field");
      addCutoffTimeMessage();
    },
    render: function () {
      addCutoffTimeMessage();
    },
    set: function (e) {
      onCartDeliveryDateChange(picker);

      if (!!e.select) {
        $(".cart__dynamic-checkout-buttons").removeClass("disabled");
      } else if (e.clear === null) {
        $(".cart__dynamic-checkout-buttons").addClass("disabled");
      }
    }
  });

  $('#cart-delivery-datepicker-hidden').on('invalid', onCartDeliveryDatePickerError);

  const waitToUpdateMin = timeDiffUntilNextCutoff();
  setTimeout(function () {
    picker.set('min', getMinDate());
  }, waitToUpdateMin);
}

$(document).ready(function () {
  if ($('.cart-delivery-datepicker').length > 0) {
    $('.header-cart-delivery-datepicker').remove();
  }

  setupDatePicker();
  loadCartDelivery();
});
