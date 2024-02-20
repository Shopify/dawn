// JavaScript for the opacity slider
    const items = document.querySelectorAll(".feature-text-item");
    const dots = document.querySelectorAll(".feature-dot");
    let intervalId; // Variable to hold the interval ID
    let startX; // Variable to store initial touch position

    // Start index
    let index = 0;

    // Initial call to activate first item
    activateItem(index);

    // Function to activate an item
    function activateItem(i) {
        // Deactivate all items and dots
        items.forEach(item => {
            item.classList.remove("active");
        });
        dots.forEach(dot => {
            dot.classList.remove("active");
        });
        // Activate the chosen item and dot
        items[i].classList.add("active");
        dots[i].classList.add("active");
    }

    // Function to handle slider
    function nextSlide() {
        index = (index + 1) % items.length; // Circular increment
        activateItem(index);
    }

    // Event listeners for dots
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener("click", function () {
            index = dotIndex;
            activateItem(index);
            clearInterval(intervalId); // Pause autoplay
        });
    });

    // Function to start autoplay
    function startAutoplay() {
        intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Start autoplay initially
    startAutoplay();

// Restart autoplay when mouse leaves the slider area
document.querySelector(".feature-text-slider").addEventListener("mouseleave", function () {
    startAutoplay();
});

// Stop autoplay when mouse enters the slider area
document.querySelector(".feature-text-slider").addEventListener("mouseenter", function () {
    clearInterval(intervalId);
});

// Touch event listeners for swipe
document.querySelector(".feature-text-slider").addEventListener("touchstart", function (event) {
    startX = event.touches[0].clientX;
});

document.querySelector(".feature-text-slider").addEventListener("touchend", function (event) {
    const endX = event.changedTouches[0].clientX;
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) { // Minimum swipe distance threshold
        if (diffX > 0) {
            // Swipe left
            index = (index + 1) % items.length;
        } else {
            // Swipe right
            index = (index - 1 + items.length) % items.length;
        }
        activateItem(index);
        clearInterval(intervalId); // Pause autoplay
    }
});