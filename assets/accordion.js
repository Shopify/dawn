document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('[data-accordion-toggle]');
  
  accordionHeaders.forEach(header => {
    const accordionItem = header.closest('.product-accordion-item');
    const content = accordionItem.querySelector('.product-accordion-content');
    const contentInner = content.querySelector('.product-accordion-content-inner');
    
    if (accordionItem.classList.contains('active')) {
      const height = contentInner.scrollHeight;
      content.style.height = height + 'px';
    }
    
    header.addEventListener('click', function() {
      const isActive = accordionItem.classList.contains('active');
      
      accordionHeaders.forEach(otherHeader => {
        const otherItem = otherHeader.closest('.product-accordion-item');
        if (otherItem !== accordionItem && otherItem.classList.contains('active')) {
          const otherContent = otherItem.querySelector('.product-accordion-content');
          otherContent.style.height = '0px';
          otherItem.classList.remove('active');
        }
      });
      
      if (isActive) {
        content.style.height = '0px';
        accordionItem.classList.remove('active');
      } else {
        const height = contentInner.scrollHeight;
        content.style.height = height + 'px';
        accordionItem.classList.add('active');
      }
    });
  });
});
