const SCROLL_ANIMATION_TRIGGER_CLASSNAME = 'scroll-trigger';
const SCROLL_ANIMATION_ACTIVE_CLASSNAME = 'scroll-trigger--active';

function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      elementTarget.classList.add(SCROLL_ANIMATION_ACTIVE_CLASSNAME);
      if (elementTarget.hasAttribute("data-cascade"))
        elementTarget.setAttribute('style', `--animation-order: ${index};`);
      observer.unobserve(elementTarget);
    }
  })
}

function initializeScrollAnimationTrigger(rootEl = document) {
  const animationTriggerElements = Array.from(
    rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME)
  );
  if (animationTriggerElements.length === 0) return;

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.1,
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

window.addEventListener('DOMContentLoaded', () => initializeScrollAnimationTrigger());

document.addEventListener('shopify:section:load', (event) => initializeScrollAnimationTrigger(event.target));
