document.addEventListener('DOMContentLoaded', () => {
  const sizeGuideTrigger = document.querySelector('.sizeguide-trigger');
  const sizeGuideElement = document.querySelector('#size-guide');
  const drawerInnerElement = document.querySelector('.drawer__inner');

  if (!sizeGuideTrigger || !sizeGuideElement || !drawerInnerElement) {
    console.error('Required elements not found: .sizeguide-trigger, #size-guide, or .drawer__inner');
    return;
  }

  // Show the size guide when the trigger is clicked
  sizeGuideTrigger.addEventListener('click', () => {
    sizeGuideElement.classList.add('active', 'animate');
  });

  // Close the size guide when clicking outside the .drawer__inner element
  document.addEventListener('click', (event) => {
    if (!drawerInnerElement.contains(event.target) && !sizeGuideTrigger.contains(event.target)) {
      sizeGuideElement.classList.remove('active', 'animate');
    }
  });
});
