(function() {
    // Add animation classes.
    function onIntersection(entries) {
        for (const entry of entries) {
            entry.target.classList.add('animate');
            if (entry.isIntersecting) {
                entry.target.classList.add('animate--active');
            }
        }
    }

    const intersectionObserver = new IntersectionObserver(onIntersection, {
        thresholds: [1],
    });
    const selector = '.section, .banner__box, .product__info-wrapper';
    const elementsToObserve = Array.from(document.querySelectorAll(selector));

    // Observe intersections between the viewport and the elements.
    elementsToObserve.forEach((element) => intersectionObserver.observe(element));
})();
