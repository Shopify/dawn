document.querySelectorAll('a[href="#quiz-scroll"]').forEach(e=> {
    e.addEventListener('click', function(el) {
        el.preventDefault();
        const targetElement = document.querySelector('.k-quiz');
        targetElement?.scrollIntoView({
            behavior: 'smooth'
        });
    })
})

var main = function () {

    return {
        resellerCTA: ()=> {
            if (document.querySelector('.resellers-data') == null) return;
            
            const countriesData = JSON.parse(document.querySelector('.resellers-data').textContent)
            const resellerLink = document.querySelector('.header__icon--reseller')
            const flagWrapper = resellerLink.querySelector('.flag-img')
            const headerIcons = document.querySelector('.header__icons')
            const shopBtn = document.querySelector('.shop-btn')

            if( countriesData.countries.length == 0 ) return;

            
            fetch('https://ip2c.org/s')
            .then(response => response.text())
            .then(ip2c => {
              var country_code = ip2c.split(';')[1];
              const activeCountry = countriesData.countries.filter(item => item.country_iso === country_code);

              if (activeCountry.length == 0) return;
                shopBtn?.classList.add('animated')
                const flagImg = activeCountry[0].flag_image
                const countryName = activeCountry[0].country_name
                const page = activeCountry[0].reseller_page

                if (flagImg != null || flagImg != '' ) {
                    const flagEl = document.createElement('img');
                    flagEl.src = flagImg;
                    flagEl.width = 50;
                    flagEl.height = 50;

                    flagWrapper.append(flagEl)
                }
                if (page != null || page != '' ) {
                    const resLink = document.createElement('a');
                    resLink.href = page;
                    resLink.classList.add('link','accent-link','reseller-link')

                    resLink.textContent = countryName;
                    headerIcons.insertAdjacentElement('afterend', resLink);
                    resellerLink.href = page;
                }
                resellerLink.classList.remove('disabled')
            })
            .catch(error => console.error(error));
        },
        amznOr: ()=> {
            const orSep = document.querySelector('.or-separator')
            if (orSep == null) return;

            const loadedBws = setInterval( function() {

                if (document.querySelector('.bwp-widget-loaded') != null ) {
                    orSep.classList.add('empty-or')
                    clearInterval(loadedBws);
                }
            },100)
        },
        popoverBtns: ()=> {
            document.querySelectorAll('.popover-button').forEach(e => {
                e.addEventListener('click', function() {
                    var id = e.dataset.id;
                    var parent = e.closest('.button--popover-wrap');
            
                    if (parent.classList.contains('active')) {
                        parent.classList.remove('active');
                    } else {
                        document.querySelectorAll('.button--popover-wrap.active').forEach(activeParent => {
                            activeParent.classList.remove('active');
                        });
                        parent.classList.add('active');
                    }
                });
            });
        },
        sliderHeight: () => {

            document.querySelectorAll('.adaptive-height').forEach(e => {
                const slider = e.querySelector('.slideshow');
                let startX = 0;
                let endX = 0;

                if (slider.querySelector('.slider__slide[aria-hidden="false"]')) {
                    console.log(slider.querySelector('.slider__slide[aria-hidden="false"]'))
                    slider.style.setProperty('--slide-height', `${e.querySelector('.slider__slide[aria-hidden="false"] .banner__content')?.clientHeight}px`);
                }

                function handleTouchStart(event) {
                    console.log('touchstart')
                    startX = event.touches[0].clientX;
                }
                
                function handleTouchMove(event) {
                    endX = event.touches[0].clientX;
                }
                slider.addEventListener('touchstart', handleTouchStart, false);
                slider.addEventListener('touchmove', handleTouchMove, false);

                slider.addEventListener('touchend', handleTouchEnd, false);

                
                function handleTouchEnd() {
                    const deltaX = endX - startX;
                    console.log('touchend')
                
                    if (deltaX > 100) {
                        // Swiped to the right
                        console.log('Swiped left');
                        slider.classList.add('opacity-min')
                    } else if (deltaX < -100) {
                        // Swiped to the left
                        console.log('Swiped right');
                        slider.classList.add('opacity-min')
                    }

                    setTimeout( function() {
                        const banner = slider.querySelector('.slider__slide:not([tabindex]) .banner__content');
                        slider.style.setProperty('--slide-height', `${banner.clientHeight}px`);
                        slider.classList.remove('opacity-min')
                    },1100) 

                    slider.addEventListener('transitionend', function () {
                        console.log('transitionend')
                    })
                }
            });
        },
        preventDefaultForHashLinks: function() {
            // Get all anchor elements
            var anchorElements = document.querySelectorAll('a');
        
            // Loop through the anchor elements
            anchorElements.forEach(function(anchor) {
                // Check if the href attribute contains #
                if (anchor.getAttribute('href') && anchor.getAttribute('href').includes('#')) {
                    anchor.addEventListener('click', function(event) {
                        event.preventDefault();
        
                        // Get the target ID from the href
                        var targetId = anchor.getAttribute('href').substring(1); // Remove the #
        
                        // Check if an element with the target ID exists in the DOM
                        var targetElement = document.getElementById(targetId);
        
                        if (targetElement) {
                            // Define an offset (adjust this value as needed)
                            var offsetTop = 50; // Change this to your desired offset
        
                            // Scroll to the target element with the specified offset
                            window.scrollTo({
                                top: targetElement.offsetTop - offsetTop,
                                behavior: 'smooth' // You can change this to 'auto' for an instant scroll
                            });
                        }
                    });
                }
            });
        },
        klaviyoFnc: () => {
            document.querySelectorAll('[data-klaviyo').forEach(e=> {
                e.addEventListener('click', function(event) {
                    event.preventDefault()
                    window._klOnsite = window._klOnsite || [];
                    window._klOnsite.push(['openForm', e.dataset.klaviyo]);
                })
            })
        },
        swipeSlider: function() {
            const screenWidth = window.innerWidth || document.documentElement.clientWidth;
        
            if (screenWidth >= 750) {
                const slides = document.querySelectorAll('.slide-draggable');
    
    
                slides.forEach(slider=> {
                    let mouseDown = false;
                    let startX, scrollLeft;
            
                    if (typeof slider !== 'undefined' && slider !== null) {
                        let startDragging = function (e) {
                            mouseDown = true;
                            startX = e.pageX - slider.offsetLeft;
                            scrollLeft = slider.scrollLeft;
                        };
                        let stopDragging = function (event) {
                            mouseDown = false;
                        };
            
                        slider.addEventListener('mousemove', (e) => {
                            e.preventDefault();
                            if (!mouseDown) { return; }
                            const x = e.pageX - slider.offsetLeft;
                            const scroll = x - startX;
                            slider.scrollLeft = scrollLeft - scroll;
                        });
            
                        // Add the event listeners
                        slider.addEventListener('mousedown', startDragging, false);
                        slider.addEventListener('mouseup', stopDragging, false);
                        slider.addEventListener('mouseleave', stopDragging, false);
                    }
                })
    
            }
        }
    };
}()

main.popoverBtns()
main.amznOr()
main.resellerCTA()
main.sliderHeight()
main.preventDefaultForHashLinks()
main.klaviyoFnc()
main.swipeSlider()