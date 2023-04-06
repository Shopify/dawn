const SCROLL_ANIMATION_TRIGGER_CLASSNAME = 'scroll-trigger';
const SCROLL_ANIMATION_ACTIVE_CLASSNAME = 'scroll-trigger--active';

function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      elementTarget.classList.add(SCROLL_ANIMATION_ACTIVE_CLASSNAME);
      if (elementTarget.hasAttribute('data-cascade'))
        elementTarget.setAttribute('style', `--animation-order: ${index};`);
      observer.unobserve(elementTarget);
    }
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function initializeScrollAnimationTrigger(rootEl = document) {
  const animationTriggerElements = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));
  if (animationTriggerElements.length === 0) return;

  console.log(isInViewport(animationTriggerElements[0]));

  animationTriggerElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.remove(SCROLL_ANIMATION_ACTIVE_CLASSNAME);
      element.classList.remove(SCROLL_ANIMATION_TRIGGER_CLASSNAME);
      element.classList.remove('animate--slide-in');
      element.style = `--animation-order: 0;`;
    }
  });

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.1,
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

window.addEventListener('DOMContentLoaded', () => initializeScrollAnimationTrigger());

document.addEventListener('shopify:section:load', (event) => initializeScrollAnimationTrigger(event.target));
