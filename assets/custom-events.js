document.querySelectorAll('a[href="#quiz-scroll"]').forEach(e=> {
    e.addEventListener('click', function() {
        const targetElement = document.querySelector('[id*="__quiz"]');
        targetElement?.scrollIntoView({
            behavior: 'smooth'
        });
    })
})