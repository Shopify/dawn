const SCROLL_ANIMATION_TRIGGER_CLASSNAME = 'scroll-trigger';
const SCROLL_ANIMATION_OFFSCREEN_CLASSNAME = 'scroll-trigger--offscreen';

function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      if (elementTarget.classList.contains(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME)) {
        elementTarget.classList.remove(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME);
        if (elementTarget.hasAttribute('data-cascade'))
          elementTarget.setAttribute('style', `--animation-order: ${index};`);
      }
      observer.unobserve(elementTarget);
    } else {
      element.target.classList.add(SCROLL_ANIMATION_OFFSCREEN_CLASSNAME);
    }
  });
}

function initializeScrollAnimationTrigger(rootEl = document, isDesignModeEvent = false) {
  const animationTriggerElements = Array.from(rootEl.getElementsByClassName(SCROLL_ANIMATION_TRIGGER_CLASSNAME));
  if (animationTriggerElements.length === 0) return;

  if (isDesignModeEvent) {
    animationTriggerElements.forEach((element) => {
      element.classList.add('scroll-trigger--design-mode');
    });
    return;
  }

  const observer = new IntersectionObserver(onIntersection, {
    rootMargin: '0px 0px -50px 0px',
  });
  animationTriggerElements.forEach((element) => observer.observe(element));
}

window.addEventListener('DOMContentLoaded', () => {
  initializeScrollAnimationTrigger();
  initializeScrollZoomAnimationTrigger();
});

if (Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => initializeScrollAnimationTrigger(event.target, true));
  document.addEventListener('shopify:section:reorder', () => initializeScrollAnimationTrigger(document, true));
}

function initializeScrollZoomAnimationTrigger() {
  const animationTriggerElements = Array.from(document.getElementsByClassName('animate--zoom-in'));
  const scaleAmount = 0.5 / 100;
  if (animationTriggerElements.length === 0) return;

  let scrollPositionY = 0;

  animationTriggerElements.forEach((element) => {
    let elementIsVisible = false;
    const observer = new IntersectionObserver((elements, self) => {
      elements.forEach((entry) => {
        console.log(entry);
        elementIsVisible = entry.isIntersecting;
      });
    });
    observer.observe(element);

    element.style.setProperty('--zoom-in-ratio', 1 + scaleAmount * percentageSeen(element));

    window.addEventListener('scroll', () => {
      if (elementIsVisible) {
        scrollPositionY = window.scrollY;
        element.style.setProperty('--zoom-in-ratio', 1 + scaleAmount * percentageSeen(element));
      }
    });
  });
}

function percentageSeen(element) {
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const elementY = element.getBoundingClientRect().top + scrollY;
  const borderHeight =
    parseInt(getComputedStyle(element).getPropertyValue('border-top-width')) +
    parseInt(getComputedStyle(element).getPropertyValue('border-bottom-width'));
  const elementHeight = element.offsetHeight + borderHeight;

  if (elementY > scrollY + viewportHeight) {
    return 0;
  } else if (elementY + elementHeight < scrollY) {
    return 100;
  } else {
    const distance = scrollY + viewportHeight - elementY;
    let percentage = distance / ((viewportHeight + elementHeight) / 100);
    percentage = Math.round(percentage);
    return percentage;
  }
}
