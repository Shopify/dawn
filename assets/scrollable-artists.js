console.clear();

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

let flipCtx;

const createTween = () => {
  let galleryElement = document.querySelector('#gallery-artists');
  let galleryItems = galleryElement.querySelectorAll('.gallery__item');

  //cleanup old animation
  flipCtx && flipCtx.revert();
  //reset state
  galleryElement.classList.remove('gallery--final');

  flipCtx = gsap.context(() => {
    // Temporarily add the final class to capture the final state
    galleryElement.classList.add('gallery--final');
    const flipState = Flip.getState(galleryItems);
    galleryElement.classList.remove('gallery--final');

    const flip = Flip.to(flipState, {
      simple: true,
    });

    ScrollTrigger.create({
      trigger: galleryElement,
      start: 'center center',
      end: '+=300%',
      scrub: true,
      pin: galleryElement.parentNode,
      markers: true,
      animation: flip,
      onEnter: () => {
        galleryElement.parentNode.style.height = window.innerHeight + 'px';
      },
    });

    return () => gsap.set(galleryItems, { clearProps: 'all' });
  });
};
createTween();

window.addEventListener('resize', createTween);
