document.querySelectorAll('slider-component').forEach(e => {
    const autoplay = e.querySelector('[data-autoplay="true"]');
    const nextButton = e.querySelector('button[name="next"]');
  
    if (!autoplay || !nextButton) return;

    const playSpeed = autoplay.dataset.speed;
    let intervalId;

    e.addEventListener('mouseenter', () => {
        clearInterval(intervalId); // Pause interval on hover
    });

    e.addEventListener('mouseleave', () => {
        intervalId = setInterval(() => {
            if (!nextButton.disabled) {
                nextButton.click();
            } else {
                autoplay.scrollLeft = 0;
            }
        }, playSpeed * 1000); // Resume interval when not hovering
    });

    // Initial interval setup
    intervalId = setInterval(() => {
        if (!nextButton.disabled) {
            nextButton.click();
        } else {
            autoplay.scrollLeft = 0;
        }
    }, playSpeed * 1000);
});