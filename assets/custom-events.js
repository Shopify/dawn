document.querySelectorAll('a[href="#quiz-scroll"]').forEach(e=> {
    e.addEventListener('click', function(el) {
        el.preventDefault();
        const targetElement = document.querySelector('.k-quiz');
        targetElement?.scrollIntoView({
            behavior: 'smooth'
        });
    })
})