document.querySelectorAll('slider-component').forEach(e => {
    const autoplay = e.querySelector('[data-autoplay="true"]');
    const nextButton = e.querySelector('button[name="next"]');

    if (!autoplay || !nextButton) return;
  
    const playSpeed = autoplay.dataset.speed;
    
    const intervalId = setInterval(() => {
        if (!nextButton.disabled) {
            nextButton.click();
        } else {
            autoplay.scrollLeft = 0;
        }
    }, playSpeed * 1000);
});