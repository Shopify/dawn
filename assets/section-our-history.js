document.addEventListener('DOMContentLoaded', function () {
  if (typeof simpleParallax !== 'undefined') {
    const images = document.getElementById('parallax-image');
    new simpleParallax(images, { scale: 1.2, delay: 1.5, orientation: 'down' });
  }
});
