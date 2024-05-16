// Select all elements with class .page-content-render
const pageContentRenderElements = document.querySelectorAll('.page-content-render');

// Iterate through each element
pageContentRenderElements.forEach(pageContentRender => {
    const url = pageContentRender.getAttribute('data-link');
    const parentModal = pageContentRender.closest('.modal-page')

    console.log(url)

fetch(url)
    .then(response => response.text())
    .then(html => {
        // Create a temporary div to hold the fetched HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        // Extract all elements with class .shopify-section
        const shopifySections = tempDiv.querySelectorAll('.shopify-section');

        // Append each .shopify-section to the respective .page-content-render element
        shopifySections.forEach(shopifySection => {
            // Check if the section does not contain the specified classes
            if (!shopifySection.classList.contains('shopify-section-group-header-group') &&
                !shopifySection.classList.contains('shopify-section-group-footer-group')) {
                    
                pageContentRender.appendChild(shopifySection);


                setTimeout( function() {
                    const quizBtns = shopifySection.querySelectorAll('.button[data-quiz]')


                    if (quizBtns.length == 0) return;

                    quizBtns.forEach(e=> {
                      var id = e.dataset.quiz
                      var parent = e.closest('.shopify-section')

                      
                      document.querySelectorAll('.quiz-appender').forEach(a=> {
                        if ( a.dataset.id == id && parent.querySelector('.append-container').innerHTML == '' ) {
                          parent.querySelector('.append-container').appendChild(a)
                        }
                      })

                        e.addEventListener('click', function(el) {
                            el.preventDefault()
                            var quizRendered = parent.querySelector(`div[data-quiz-id="${id}"]`);

                            quizBtns.forEach(b=> {
                                if ( b != e && b.classList.contains('active')) {
                                    const id = b.dataset.quiz
                                    const qR = pageContentRender.querySelector(`div[data-quiz-id="${id}"]`);
                                    b.textContent = b.dataset.openText;
                                    qR.style.display = 'none';
                                    b.classList.remove('active')
                                }
                            })

                            var stopFn = false

                            if (e.classList.contains('active')) {
                                quizRendered.style.display = 'none';
                                e.textContent = e.dataset.openText;
                                e.classList.remove('active')
                                stopFn = true
                            }
                        
                            if (stopFn == true) return;

                            if (quizRendered.style.display === 'none') {
                            e.textContent = e.dataset.closeText;
                            quizRendered.style.display = 'block';
                            e.classList.add('active')
                        
                            parentModal.scrollTo({
                                top: quizRendered.offsetTop,
                                behavior: 'smooth'
                            });

                            } else {
                              quizRendered.style.display = 'none';
                              e.textContent = e.dataset.openText;
                              e.classList.remove('active')
                            }
                        });

                    })
                },200)
            }
            });
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
});