document.addEventListener('DOMContentLoaded', function() {
  var xcpModalTriggers = document.querySelectorAll('.xcp-modal');
  if (!xcpModalTriggers.length) {
    return;
  }

  function init(trigger) {
    var modalTargetClass = '.' + trigger.getAttribute('data-modalTarget');
    var closedClass      = trigger.getAttribute('data-modalTargetClosed');
    var closerClass      = '.' + trigger.getAttribute('data-modalCloser');

    var modalTarget = document.querySelector(modalTargetClass);
    var closer      = document.querySelector(closerClass);

    trigger.addEventListener('click', function() {
      modalTarget.classList.remove(closedClass);
    });

    closer.addEventListener('click', function() {
      modalTarget.classList.add(closedClass);
    });

    modalTarget.addEventListener('click', function(event) {
      if (event.target === event.currentTarget) {
        modalTarget.classList.add(closedClass);
      }
    });
  }

  xcpModalTriggers.forEach(function(trigger) {
    init(trigger);
  });
});
