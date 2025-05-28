import gsap from 'gsap/dist/gsap.min.js';
import ScrollTrigger from 'gsap/dist/ScrollTrigger.min.js';
import ScrollSmoother from 'gsap/dist/ScrollSmoother.min.js';
import Flip from 'gsap/dist/Flip.min.js';

//smooth scrolling animation

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 0.5,
  effects: true,
});

// flip animation for gallery items

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
      onComplete: () => {
        // Show the overlay text
        const overlay = document.getElementById('centerpieceOverlay');
        overlay.classList.add('show');

        // Fade out the 8th image only after text appears
        const toHide = document.querySelector('.gallery__item--hide-on-complete');
        if (toHide) {
          // Optional smooth fade out
          gsap.to(toHide, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              toHide.style.pointerEvents = 'none';
            },
          });
        }
      },
    });

    ScrollTrigger.create({
      trigger: galleryElement,
      start: 'center center',
      end: '+=300%',
      scrub: true,
      pin: galleryElement.parentNode,
      //markers: true,
      animation: flip,
      onEnter: () => {
        galleryElement.parentNode.style.height = window.innerHeight + 'px';
      },
      onUpdate: (self) => {
        const overlay = document.getElementById('centerpieceOverlay');
        const toHide = document.querySelector('.gallery__item--hide-on-complete');

        // When scrolling forward past 95% of animation
        if (self.progress > 0.95) {
          overlay.classList.add('show');
          gsap.to(toHide, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => (toHide.style.pointerEvents = 'none'),
          });
        }

        // When scrolling back above 80%
        if (self.progress < 0.8) {
          overlay.classList.remove('show');
          gsap.to(toHide, {
            opacity: 1,
            duration: 0.3,
            onComplete: () => (toHide.style.pointerEvents = ''),
          });
        }
      },
    });

    return () => gsap.set(galleryItems, { clearProps: 'all' });
  });
};
createTween();

window.addEventListener('resize', createTween);

document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('parallax-image');

  if (!image) return;

  gsap.to(image, {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: image,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
});
