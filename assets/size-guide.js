document.addEventListener('DOMContentLoaded', () => {
  const sizeGuideElement = document.querySelector('#size-guide');
  const drawerInnerElement = document.querySelector('.drawer__inner');

  if (!sizeGuideElement || !drawerInnerElement) {
    console.error('Required elements not found: #size-guide or .drawer__inner');
    return;
  }

  const initializeListeners = () => {
    const sizeGuideTrigger = document.querySelector('.sizeguide-trigger');

    if (sizeGuideTrigger) {
      sizeGuideTrigger.addEventListener('click', () => {
        sizeGuideElement.classList.add('active', 'animate');
      });
    }
  };

  initializeListeners();

  // Observe DOM changes and reinitialize listeners if necessary
  const observer = new MutationObserver(() => {
    initializeListeners();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Close the size guide when clicking outside the .drawer__inner element
  document.addEventListener('click', (event) => {
    if (!drawerInnerElement.contains(event.target) && !event.target.closest('.sizeguide-trigger')) {
      sizeGuideElement.classList.remove('active', 'animate');
    }
  });
});
