(function autoCloseDetails() {
  document.addEventListener('click', function (event) {
    const detailsToClose = [...document.querySelectorAll('details[data-auto-close-details][open]')].filter(
      (element) => {
        const closingOn = window.innerWidth < 750 ? 'mobile' : 'desktop';
        return (
          element.getAttribute('data-auto-close-details')?.includes(closingOn) &&
          !(event.target instanceof Node && element.contains(event.target))
        );
      }
    );

    for (const detailsElement of detailsToClose) detailsElement.removeAttribute('open');
  });
})();
