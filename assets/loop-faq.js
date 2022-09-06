$( document ).ready(function() {
    console.log( "ready!" );
    $(".panel-title").click(function(){
      $('.accordian-item').toggle();
    });
});