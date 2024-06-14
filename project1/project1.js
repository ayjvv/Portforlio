/**** 스틱 효과 ****/
document.addEventListener("DOMContentLoaded", () => {
  const sticks = document.querySelectorAll(".stick");
  const stickBox = document.querySelector(".triangle");

  let isAnimationStarted = false;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isAnimationStarted) {
        sticks.forEach((stick, index) => {
          setTimeout(() => {
            stick.classList.add("show");
          }, index * 50); // 필요에 따라 지연 시간을 조정하세요.
        });
        isAnimationStarted = true;
      } else if (!entry.isIntersecting) {
        isAnimationStarted = false; // 이 부분을 추가하여 애니메이션이 종료될 때마다 isAnimationStarted를 false로 설정합니다.
      }
    });
  }, observerOptions);

  observer.observe(stickBox);
});




//box scroll
// window.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var windowHeight = window.innerHeight;

//   // .box와 .box2의 위치를 스크롤 위치에 맞춰 이동시킴
//   document.querySelector('.box').style.transform = 'translateY(' + (-scrollPosition * 1) + 'px)';
//   document.querySelector('.box2').style.transform = 'translateY(' + (-scrollPosition * 1) + 'px)';

//   // .content의 위치를 가져옴
//   var contentElement = document.querySelector('.line');
//   var contentPosition = contentElement.getBoundingClientRect().top + scrollPosition;

//   // .content에 닿으면 .box가 500px만큼 위로 올라가게 함
//   if (scrollPosition + windowHeight > contentPosition) {
//     var offset = Math.min(500, scrollPosition + windowHeight - contentPosition);
//     document.querySelector('.box').style.transform = 'translateY(' + (-scrollPosition - offset) + 'px)';
//   }
// });



// 마우스휠 라인
// const blueLine = document.querySelector('.blue-line');
// const yellowLine = document.querySelector('.yellow-line');
// const pinkLine = document.querySelector('.pink-line');
// let bluePosition = 0;
// let yellowPosition = 0;
// let pinkPosition = 0;

// window.addEventListener('wheel', (event) => {
//     const delta = event.deltaY;
//     bluePosition -= delta * 1; // Blue line moves more
//     yellowPosition += delta * 0.2; // Yellow line moves left
//     pinkPosition += delta * 0.3; // Pink line moves left

//     blueLine.style.transform = `translateX(${bluePosition}px)`;
//     yellowLine.style.transform = `translateX(${yellowPosition}px)`;
//     pinkLine.style.transform = `translateX(${pinkPosition}px)`;
// });


/**** 가로슬라이드 ****/
const horizontalContainer = document.querySelector('.horizontal-container');
const stickyBox = document.querySelector('.sticky-box');
const innerBox = document.querySelector('.horizontal-inner-box');

const calcHt = (elem) => {
  // scrollWidth : 스크롤바에 의해 감춰진 영역 포함 반환
  // document.documentElement.clientWidth : 실제로 들어가게 될 영역의 너비와 높이 값을 반환
  return elem.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;
}

horizontalContainer.style.height = `${calcHt(innerBox)}px`;
console.log(calcHt(innerBox));

const scrolled = () => {
  console.log('stickyBox.offsetTop: ', stickyBox.offsetTop)
  innerBox.style.transform = `translateX(-${stickyBox.offsetTop}px)`;
}
/* 
  JS.offsetTop; 상대값 반환. offset의 가장 가까운 포지션 값을 기준. 없는 경우 body 기준
  jQuery.offset().top; 절대값 반환. body 기준
*/

addEventListener('scroll', scrolled);



/**** footer 스와이퍼 ****/
// var swiper = new Swiper(".mySwiper", {
//   direction: "vertical",
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });


// document.querySelector('.plus1').addEventListener('click', function() {
//   document.querySelectorAll('.img-list li').forEach(function(li) {
//     if (li.style.position === 'relative') {
//       li.style.position = 'absolute';
//     } else {
//       li.style.position = 'relative';
//     }
//   });
// });

// var swiper = new Swiper(".mySwiper", {});




//이미지 정렬 플러스버튼
document.querySelector('.menu-btn1').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelectorAll('.img-list li img').forEach(function(img) {
    img.classList.toggle('on');
  });
});

document.querySelector('.menu-btn2').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelectorAll('.img2 li img').forEach(function(img) {
    img.classList.toggle('on');
  });
});

document.querySelector('.menu-btn3').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelectorAll('.img3 li img').forEach(function(img) {
    img.classList.toggle('on');
  });
});





//line들 움직이기
window.addEventListener('scroll', function() {
  // .line-bg 요소의 위치와 높이 가져오기
  var lineBg = document.querySelector('.line-bg');
  var rect = lineBg.getBoundingClientRect();


  if (rect.top <= window.innerHeight && rect.bottom >= 0) {

    setTimeout(function() {
      document.querySelectorAll('.blue-line, .yellow-line, .pink-line').forEach(function(line) {
        line.classList.add('off');
      });
    }, 450); // 딜레이
  } else {
    document.querySelectorAll('.blue-line, .yellow-line, .pink-line').forEach(function(line) {
      line.classList.remove('off');
    });
  }
});
