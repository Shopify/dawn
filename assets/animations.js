function onIntersection(elements, observer) {
  elements.forEach((element, index) => {
    if (element.isIntersecting) {
      const elementTarget = element.target;
      elementTarget.classList.add('motion__trigger--animated');
      elementTarget.setAttribute('style', `--animation-order: ${index};`);

      observer.unobserve(elementTarget);
    }
  })
}

function initializeMotionTrigger() {
  const motionTriggerElements = Array.from(
    document.getElementsByClassName('motion__trigger')
  );
  if (motionTriggerElements.length === 0) return;

  const observer = new IntersectionObserver(onIntersection, {
    threshold: 0.5,
  });
  motionTriggerElements.forEach((element) => observer.observe(element));
}

initializeMotionTrigger();
