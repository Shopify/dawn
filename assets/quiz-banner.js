const quizBtns = document.querySelectorAll('.button[data-quiz]')

quizBtns.forEach(e=> {
  e.addEventListener('click', function(el) {
    el.preventDefault()
    var id = e.dataset.quiz
    var quizRendered = document.querySelector(`div[data-quiz-id="${id}"]`);

    quizBtns.forEach(b=> {
        if ( b != e && b.classList.contains('active')) {
            const id = b.dataset.quiz
            const qR = document.querySelector(`div[data-quiz-id="${id}"]`);
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

      window.scrollTo({
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