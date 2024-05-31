
/*** 메뉴 열고 닫음 ***/
$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
      $('.menu-page').animate({
        left: $('.menu-page').css('left') === '0px' ? '-300px' : '0px'
      }, 800);
      $(this).toggleClass('opened');
    });
  });
  

  