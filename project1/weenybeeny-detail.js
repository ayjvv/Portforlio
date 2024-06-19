/*** 메뉴 열고 닫음 ***/
$(document).ready(function() {
  $('.menu-btn').on('click', function(e) {
    $('.menu-page').animate({
      left: $('.menu-page').css('left') === '0px' ? '-500px' : '0px'
    }, 800);
    $(this).toggleClass('opened');
  });
});

/*** 메인 배경컬러 바꿈 ***/
$(document).ready(function() {
  $('.circle').hover(
    function() {
      $('.cover').stop().animate({
        'background-color': 'linear-gradient(#FFD8D8,#FDCFC5)'
      }, 1000); 
    },
    function() {
      $('.cover').stop().animate({
        'background-color': '#F0EBE8'
      }, 1000); 
    }
  );
});
