$( document ).ready(function() {
    console.log( "ready!" );
    $(".panel-title").click(function(){
      $('.accordian-item').toggle();
      $('.panel-title-arrow svg').toggleClass('arrow-rotate');
    });
});


$( document ).ready(function() {
    console.log( "new script for accordion" );
    $(".categories-list-item").click(function(){
      $(".categories-list-item").removeClass("filter_highlight highlight");
      $(this).toggleClass("filter_highlight");
      $(".filter_wrap").removeClass("active_filter first_filter");
      console.log($(this));
      var data_filter = $(this).data("filter_heading");
      
      console.log(data_filter);

      $(`.filter_${data_filter}`).toggleClass("active_filter");
    
      
  
    });
});