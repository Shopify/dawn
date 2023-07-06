window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('.close-tab').forEach(e=> {
        e.addEventListener('click', function() {
            var panel = e.closest('details')
            panel.removeAttribute('open')
        })
    })

    document.querySelectorAll('.tab-detail').forEach(e => {
        e.addEventListener('click', function() {
            document.querySelectorAll('.tab-detail').forEach(element => {
                if (element !== e) {
                    element.removeAttribute('open');
                }
            });
        }); 
    });

    document.querySelectorAll('.tab-flex').forEach(e => {
        var img = e.querySelector('img')
        var link = e.querySelector('.accent-link')

        if (link != null && link.offsetWidth > 215) {
            link.classList.add('link-max')
        }

        if (img == null) return;

        const aspectRatio = img.clientWidth / img.clientHeight;
        const ratio = 1 / aspectRatio * 100;

        if (Number(ratio.toFixed(2)) >= 23 ) {
            img.closest('.no-aspect').classList.add('square-ratio')
            img.closest('.t-flex-column').classList.add('square-column')
        } else {
            img.closest('.no-aspect').classList.add('landscape-ratio')
            img.closest('.t-flex-column').classList.add('lscape-column')
        }
    });

    document.querySelectorAll('.form-opener').forEach(e=> {
        e.addEventListener('click', function(el) {
            el.preventDefault()

            var parent = e.closest('.tab__content')
            var formWrapper = parent.querySelector('.hubspot-form-wrapper')
            var link = e.href

            formWrapper.removeAttribute('hidden')
            
            if ( formWrapper.querySelector('iframe') == null ) {
                formWrapper.insertAdjacentHTML('afterbegin', `<iframe src="${link}" frameborder="0"></iframe>`)
                formWrapper.scrollIntoView({ behavior: 'smooth', block: 'center',inline: 'center' });
                e.style.display = 'none';
            }
        }) 
    })
});