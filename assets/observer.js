const observer = new IntersectionObserver(el => {
  el.forEach(e => {
    if (e.isIntersecting) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');

        $({countNum: $this.text()}).animate({
          countNum: countTo
        }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
      });
      $('.progress-value').addClass('progress-animation');
    }
  });
});
observer.observe($('.counter-container').get(0));