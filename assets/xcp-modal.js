$(function() {
  var xcpModalTriggers = $('.xcp-modal');
  if (!xcpModalTriggers.length) {
    return;
  }

  function init(trigger) {
    var modalTargetClass = '.' + trigger.data('modalTarget');
    var closedClass      = trigger.data('modalTargetClosed');
    var closerClass      = '.' + trigger.data('modalCloser');

    var modalTarget = $(modalTargetClass);
    var closer      = $(closerClass);

    trigger.on('click', function() {
      modalTarget.removeClass(closedClass);
    });

    closer.on('click', function() {
      modalTarget.addClass(closedClass);
    });

    modalTarget.on('click', function(event) {
      if (event.target === event.currentTarget) {
        modalTarget.addClass(closedClass);
      }
    });
  }

  xcpModalTriggers.each(function(_, trigger) {
    init($(trigger));
  });
});