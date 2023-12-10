document.querySelectorAll('li[data-year]').forEach(e=> {
    e.addEventListener('click', function() {
        const year = e.dataset.year
        const slider = e.closest('.k-timeline').querySelector('slideshow-component')

        document.querySelectorAll('li[data-year]').forEach(e=> {
            e.classList.remove('active')
            e.querySelector('.year-title').classList.remove('h1')
        })

        e.classList.add('active')
        e.querySelector('.year-title').classList.add('h1')

        document.querySelector('.year-mobile-title .year-title').textContent = year

        document.querySelectorAll('.timeline-slider .slider__slide').forEach(slide=> {
            slide.classList.remove('active')
            slide.setAttribute('hidden', '')

            if (year == slide.dataset.year) {
                slide.classList.add('active')
                slide.removeAttribute('hidden')
            }
        })

        setTimeout( function() {
            const totalSlides = Array.from(document.querySelectorAll('.timeline-slider .slider__slide')).filter(e=> e.dataset.year == year)
            slider.querySelector('.slider-counter--total').textContent = totalSlides.length
        },100)
    })
})

const clickEvent = new Event('click', {
    bubbles: true,
    cancelable: true,
});

setTimeout( function() {
    document.querySelectorAll('li[data-year]')[0]?.click()
    document.querySelectorAll('li[data-year]')[0]?.dispatchEvent(clickEvent);
},100)

document.querySelectorAll('.timeline-slider').forEach(slide=> {

    slide.addEventListener('slideChanged', function() {
        setTimeout( function() {
            const totalSlides = Array.from(slide.querySelectorAll('.slider__slide')).filter(e=> e.dataset.year == document.querySelector('li[data-year].active').dataset.year)
            slide.querySelector('.slider-counter--total').textContent = totalSlides.length
        },500)
    })
})