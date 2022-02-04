//on submittion of newsletter form
document.getElementById('Subscribe').addEventListener('click', function (e) {
  e.preventDefault();

  //show loading spinner
  //document.querySelector('.js_footer-newsletter-btn-text').style.display = 'none';
  //document.querySelector('.js_footer-newsletter-loader').style.display = 'block';
  let email = document.getElementById('NewsletterForm--footer').value.trim();
  if (!email) {
    return;
  }
  let listIds = ['HcCwQP', 'SxigFk'];

  let data = {
    'email': email,
    'list_ids': listIds,
  };

  fetch(window.brandVariables.urls.apiserver_api_baseurl + 'newsletter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  })
    .then(data => data.json())
    .then(res => {
      if (res.success) {
         try {
          fbq('track', 'Lead');
        } catch (e) {
          console.error('Tried Facebook Track Lead');
        }
        //localStorage.setItem('ve-footer-newsletter-signup', data);
        alert('Thank you for signing up for our newsletter!  Watch your inbox for updates and promotions from the Vitality Extracts family!');
      } else {
        //handle any error here
        alert('An error has occured. Please try again later.');
      }
    }).catch(() => {
      alert('An error has occured. Please try again later.');
    });

    /*
  $.ajax({
    url: 'https://api.vitalityextracts.com/newsletter',
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: data,
    success: function (res) {
      if (res.success) {
         try {
          fbq('track', 'Lead');
        } catch (e) {
          console.error('Tried Facebook Track Lead');
        }
        localStorage.setItem('ve-footer-newsletter-signup', data);
        $('.js_footer-newsletter-signup-inputs').hide();
        $('.js_footer-newsletter-loader').hide();
        $('.js_footer-newsletter-submitted').show();

      } else {
        //handle any error here
        alert('An error has occured. Please try again later.');
      }
    },
  }).error(function () {
    $('.js_footer-newsletter-signup-inputs').hide();
    $('.js_footer-newsletter-loader').hide();
    $('.js_footer-newsletter-btn-text').show();

    alert('An error has occured. Please try again later.');
  });
  */
});
