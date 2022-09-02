$(function(){

  let allList = $(".header_link");
  $.each($(allList), function(key){
      $(this).hover(function(){
          $(this).css("color", "#e5c4ab");
      }, function() {
          $(this).css('color', '');
      });
  });

  $(".header_left").hover(function(){
         $(this).fadeTo("30",0.5);
    },function(){
        $(this).fadeTo("30",1.0);
    });

  let allMenu = $(".card-title");
  $.each($(allMenu), function(key){
      $(this).hover(function(){
          $(this).css("color", "#4c4b4c");
      }, function() {
          $(this).css('color', '');
          });
  });

  $(window).on('scroll', function() {
    let menu = $('.menu_menu').offset().top;
    let wh = $(window).height();
 
    if (menu <= $(window).scrollTop() + wh) {
        $('.menu_items').removeClass('hide');
    } else {
        $('.menu_items').addClass('hide');
    }  
  })
    
});
