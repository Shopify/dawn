$( document ).ready(function() {
  $('.ui.dropdown').dropdown();

  $('.annotation pre').addClass('ui message');

  $('#menu-button').click(function() {
    $('.ui.sidebar').sidebar('toggle');
  });

  $('.ui.sticky').sticky({
    context: '#container',
    offset: 10,
  });

  $('#menu-buttons .button').popup();
});
