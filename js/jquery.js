$(function() {
  
  console.log('読み込み成功');

  

  $('.open').click(function() {
    $('#menu-con').fadeIn();
    $('.nav-btn').addClass('active');
    
  });


  $('.close').click(function() {
    $('#menu-con').fadeOut();
    
    
    
  });


  




  $('a[href^="#"]').click(function(){
    var adjust = $(window).width() / 15;
    var speed = 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

   

});