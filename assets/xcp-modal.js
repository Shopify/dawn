document.addEventListener('DOMContentLoaded', function() {
  var xcpModalTriggers = document.querySelectorAll('.xcp-modal');
  if (!xcpModalTriggers.length) {
    return;
  }

  function init(trigger) {
    var modalTargetClass = '.' + trigger.getAttribute('data-modal-target');
    var closedClass      = trigger.getAttribute('data-modal-target-closed');
    var closerClass      = '.' + trigger.getAttribute('data-modal-closer');

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
