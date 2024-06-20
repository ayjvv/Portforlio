
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




//  /*** 메뉴 사라짐 ***/
//  let lastScrollTop = 0;

//  $(window).on('scroll', () => {
//    let currentScrollTop = $(window).scrollTop();
   
//    // 현재 스크롤 위치와 이전 스크롤 위치를 비교
//    if (currentScrollTop > lastScrollTop) {
//      $('.menu-btn').addClass('none on');
//    } else {
//      $('.menu-btn').removeClass('none on');
//    }
   
//    // 이전 스크롤 위치를 현재 스크롤 위치로 업데이트
//    lastScrollTop = currentScrollTop;
//  });



//  /*** 스크롤에 따라 스와이퍼 배경색 바꾸기 ***/
// $(document).ready(function() {
//   $(window).on('scroll', function() {
//     var scrollPosition = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     var swiperTop = $('.project-txt').offset().top;
//     var swiperBottom = swiperTop + $('.project-txt').outerHeight();

//     if (scrollPosition + windowHeight > swiperTop && scrollPosition < swiperBottom) {
//       $('.project-slide1').stop().animate({
//         'background-color': 'linear-gradient(#E3D3FF)'
//       }, 900); //안에 들어왔을 때
//     } else {
      
//       $('.project-slide1').stop().animate({
//         'background-color': '#F0EBE8'
//       }, 300); // 벗어났을 때
//     }
//   });
// });

/*** 스크롤에 따라 스와이퍼 배경색 바꾸기2 ***/
$(document).ready(function() {
  // 스와이퍼 클래스 이름 배열
  var swiperClasses = ['.project-slide1', '.project-slide2', '.project-slide3', '.project-slide4'];
  
  // 스와이퍼의 배경색 변경 함수
  function changeSwiperBackground(swiperClass, gradientColor) {
    $(swiperClass).stop().animate({
      'background-color': gradientColor
    }, 900);
  }

  // 스크롤 이벤트
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();
    var swiperTop = $('.project-txt').offset().top;
    var swiperBottom = swiperTop + $('.project-txt').outerHeight();


    swiperClasses.forEach(function(swiperClass, index) {
      if (scrollPosition + windowHeight > swiperTop && scrollPosition < swiperBottom) {

        switch (index) {
          case 0:
            changeSwiperBackground(swiperClass, 'linear-gradient(#E3D3FF)');
            break;
          case 1:
            changeSwiperBackground(swiperClass, 'linear-gradient(#FFD9C5)');
            break;
          case 2:
            changeSwiperBackground(swiperClass, 'linear-gradient(#FFD8D8)');
            break;
          case 3:
            changeSwiperBackground(swiperClass, 'linear-gradient(#FFFCA8)');
            break;
          default:
            break;
        }
      } else {
        changeSwiperBackground(swiperClass, '#F0EBE8');
      }
    });
  });
});


 /*** 스와이퍼 버튼 ***/
var swiper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




// const jsScroll = document.querySelector('.cover-scroll');
// const height = jsScroll.getBoundingClientRect().height - 1;
// const speed = 0.05;
// let offset = 0;

// document.body.style.height = height + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;
//   const scroll = "translateY(-" + offset + "px) translateZ(0)";
//   jsScroll.style.transform = scroll;
//   requestAnimationFrame(smoothScroll);
// }
// smoothScroll();


// const ulScroll = document.querySelector('.cover-scroll');
// const ulheight = Scroll.getBoundingClientRect().height - 1;
// const ulspeed = 0.05;
// let offset = 0;

// document.body.style.height = ulheight + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * ulspeed;
//   const scroll = "translateY(-" + offset + "px) translateZ(0)";
//   jsScroll.style.transform = scroll;
//   requestAnimationFrame(smoothScroll);
// }
// smoothScroll();




 /*** 메인 스크롤 효과 ***/
const jsScroll1 = document.querySelector('.circle1 .txt');
const jsScroll2 = document.querySelector('.circle2 .txt');
const jsCoverScroll = document.querySelector('.cover-scroll'); // cover-scroll 요소 선택

const textSpeed = 0.04;
const coverSpeed = 0.02;
let offset1 = 0;
let offset2 = 0;
let offsetCoverScroll = 0;

function smoothScroll() {
  // 스크롤 위치 계산
  const scrollY = window.pageYOffset;
  
  // 텍스트 이동량을 제한된 비율로 조정
  const maxTextScroll = 90; // 텍스트 요소의 최대 이동량
  const maxCoverScroll = 150; // cover-scroll 요소의 최대 이동량
  offset1 += (Math.min(scrollY, maxTextScroll) - offset1) * textSpeed;
  offset2 += (Math.min(scrollY, maxTextScroll) - offset2) * textSpeed;
  offsetCoverScroll += (Math.min(scrollY, maxCoverScroll) - offsetCoverScroll) * coverSpeed;

  // 위치 설정
  const scroll1 = "translateY(-" + offset1 + "px) translateZ(0)";
  const scroll2 = "translateY(-" + offset2 + "px) translateZ(0)";
  const scrollCover = "translateY(-" + offsetCoverScroll + "px) translateZ(0)";

  // 텍스트와 cover-scroll 요소에 적용
  jsScroll1.style.transform = scroll1;
  jsScroll2.style.transform = scroll2;
  jsCoverScroll.style.transform = scrollCover;

  // 다음 애니메이션 프레임 요청
  requestAnimationFrame(smoothScroll);
}

// 페이지 로드 후 smoothScroll 함수 호출하여 스크롤 효과 적용
smoothScroll();





 /*** aboutme 이미지 스크롤 효과 ***/
document.addEventListener("DOMContentLoaded", function() {
  const aboutMeUl = document.querySelector('.about-me-ul');

  function handleScroll() {
    const rect = aboutMeUl.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      aboutMeUl.classList.add('show');
    } else {
      aboutMeUl.classList.remove('show');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});



