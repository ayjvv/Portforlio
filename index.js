
/*** a태그 속성지움 ***/
$('a[href="#"]').on('click', e => e.preventDefault());


/*** 메뉴 열고 닫음 ***/
$(document).ready(function() {
    $('.menu-btn').on('click', function(e) {
      $('.menu-page').animate({
        left: $('.menu-page').css('left') === '0px' ? '-500px' : '0px'
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

//   $(document).ready(function() {
//     $('.circle').on({
//         'mouseenter': function() {
//             $(this).addClass('none');
//         },
//         'mouseleave': function() {
//             $(this).find('li span').removeClass('hovered');
//         }
//     });
// });



/*** 메인 배경컬러 바꿈 ***/
// $(document).ready(function() {
//   $('.circle').hover(
//     function() {
//       $('.cover, .project p').stop().animate({
//         'background-color': 'linear-gradient(#FEC1C3,#FDCFC5)'
//       }, 1500); 
//     },
//     function() {
//       $('.cover, .project p').stop().animate({
//         'background-color': '#F0EBE8'
//       }, 1200); 
//     }
//   );
// });


// $(document).ready(function() {
//   $('.circle').hover(
//       function() {
//           $('.cover').stop().css({
//               'background': 'linear-gradient(#FEC1C3,#FDCFC5)',
//           });
//       },
//       function() {
//           $('.cover').stop().css({
//               'background': 'linear-gradient(#F0EBE8,#F0EBE8)'
//           });
//       }
//   );
// });




 /*** 메뉴 사라짐 ***/
 let lastScrollTop = 0;

 $(window).on('scroll', () => {
   let currentScrollTop = $(window).scrollTop();
   
   // 현재 스크롤 위치와 이전 스크롤 위치를 비교
   if (currentScrollTop > lastScrollTop) {
     $('.menu-btn').addClass('none on');
   } else {
     $('.menu-btn').removeClass('none on');
   }
   
   // 이전 스크롤 위치를 현재 스크롤 위치로 업데이트
   lastScrollTop = currentScrollTop;
 });





 /*** 스크롤에 따라 스와이퍼 배경색 바꾸기 ***/
$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var swiperTop = $('.project-txt').offset().top;
    var swiperBottom = swiperTop + $('.project-txt').outerHeight();

    if (scrollPosition + windowHeight > swiperTop && scrollPosition < swiperBottom) {
      $('.project-slide1').stop().animate({
        'background-color': 'linear-gradient(#E3D3FF)'
      }, 700); //안에 들어왔을 때
    } else {
      
      $('.project-slide1').stop().animate({
        'background-color': '#F0EBE8'
      }, 300); // 벗어났을 때
    }
  });
});

 /*** 스크롤에 따라 스와이퍼 배경색 바꾸기2 ***/
$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var swiperTop = $('.project-txt').offset().top;
    var swiperBottom = swiperTop + $('.project-txt').outerHeight();

    if (scrollPosition + windowHeight > swiperTop && scrollPosition < swiperBottom) {
      $('.project-slide2').stop().animate({
        'background-color': 'linear-gradient(#FFD9C5)'
      }, 700); //안에 들어왔을 때
    } else {
      
      $('.project-slide2').stop().animate({
        'background-color': '#F0EBE8'
      }, 300); // 벗어났을 때
    }
  });
});


  
 /*** 스크롤에 따라 스와이퍼 배경색 바꾸기2 ***/
$(document).ready(function() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var swiperTop = $('.project-txt').offset().top;
    var swiperBottom = swiperTop + $('.project-txt').outerHeight();

    if (scrollPosition + windowHeight > swiperTop && scrollPosition < swiperBottom) {
      $('.project-slide3').stop().animate({
        'background-color': 'linear-gradient(#CAEBE6)'
      }, 700); //안에 들어왔을 때
    } else {
      
      $('.project-slide3').stop().animate({
        'background-color': '#F0EBE8'
      }, 300); // 벗어났을 때
    }
  });
});


  
