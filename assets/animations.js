(function() {
    window.addEventListener('scroll', animateIn);
    animateIn();
    function animateIn() {
        var elements = document.querySelectorAll('.section, .banner__box, .product__info-wrapper');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('animate');
            var windowHeight = window.innerHeight;
            var scrollTop = elements[i].getBoundingClientRect().top;
            if (scrollTop < windowHeight - 100) {
                elements[i].classList.add('animate--active');
            }
        }
    };
})();
