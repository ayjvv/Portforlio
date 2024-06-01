$('a[href="#"]').on('click', e => e.preventDefault());

/*** 메뉴 열고 닫음 ***/
$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
      $('.menu-page').animate({
        left: $('.menu-page').css('left') === '0px' ? '-300px' : '0px'
      }, 800);
      $(this).toggleClass('opened');
    });
  });

  
/*** skill 컬러 바뀜 효과 ***/
  $(document).ready(function() {
    $('.skill-txt').on({
        'mouseenter': function() {
            $(this).find('li span').addClass('hovered');
        },
        'mouseleave': function() {
            $(this).find('li span').removeClass('hovered');
        }
    });
});




$(document).ready(function() {
  $('.circle').hover(
    function() {
      $('body').stop().animate({
        'background-color': 'linear-gradient(#FEC1C3,#FDCFC5)'
      }, 1500); 
    },
    function() {
      $('body').stop().animate({
        'background-color': '#F0EBE8'
      }, 1200); 
    }
  );
});



 /******* header 사라짐 **********/
 let lastScrollTop = 0;

 $(window).on('scroll', () => {
   // 현재 스크롤 위치를 가져옴
   let currentScrollTop = $(window).scrollTop();
   
   // 현재 스크롤 위치와 이전 스크롤 위치를 비교
   if (currentScrollTop > lastScrollTop) {
     // 스크롤을 내릴 때
     $('header').addClass('none on');
   } else {
     // 스크롤을 올릴 때
     $('header').removeClass('none on');
   }
   
   // 이전 스크롤 위치를 현재 스크롤 위치로 업데이트
   lastScrollTop = currentScrollTop;
 });