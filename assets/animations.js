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

function initializeScrollAnimationTrigger(event, rootEl = document) {
  const animationTriggerElements = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));
  if (animationTriggerElements.length === 0) return;

  if (Shopify.designMode) {
    animationTriggerElements.forEach((element) => {
      if (event) {
        element.classList.add('scroll-trigger--in-viewport');
      }
    });
  }

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.1,
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

window.addEventListener('DOMContentLoaded', () => initializeScrollAnimationTrigger());

if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => initializeScrollAnimationTrigger(event, event.target));
  document.addEventListener('shopify:section:reorder', (event) => initializeScrollAnimationTrigger(event));
}
