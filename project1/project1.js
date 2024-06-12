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
          }, index * 100); // 필요에 따라 지연 시간을 조정하세요.
        });
        isAnimationStarted = true;
      } else if (!entry.isIntersecting) {
        isAnimationStarted = false; // 이 부분을 추가하여 애니메이션이 종료될 때마다 isAnimationStarted를 false로 설정합니다.
      }
    });
  }, observerOptions);

  observer.observe(stickBox);
});





window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;

  // .box와 .box2의 위치를 스크롤 위치에 맞춰 이동시킴
  document.querySelector('.box').style.transform = 'translateY(' + (-scrollPosition * 1) + 'px)';
  document.querySelector('.box2').style.transform = 'translateY(' + (-scrollPosition * 1) + 'px)';

  // .content의 위치를 가져옴
  var contentElement = document.querySelector('.line');
  var contentPosition = contentElement.getBoundingClientRect().top + scrollPosition;

  // .content에 닿으면 .box가 500px만큼 위로 올라가게 함
  if (scrollPosition + windowHeight > contentPosition) {
    var offset = Math.min(500, scrollPosition + windowHeight - contentPosition);
    document.querySelector('.box').style.transform = 'translateY(' + (-scrollPosition - offset) + 'px)';
  }
});




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