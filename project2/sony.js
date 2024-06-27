

// 텍스트 효과
window.addEventListener('load', function() {
  const container = document.querySelector('.loop-container');
  const wrapper = document.querySelector('.loop-wrapper');
  const items = document.querySelectorAll('.item');

  const wrapperWidth = wrapper.offsetWidth;
  const containerWidth = container.offsetWidth;
  
  let offset = 0;

  function animate() {
    offset--;
    if (Math.abs(offset) >= wrapperWidth / 2) {
      offset = 0;
    }
    wrapper.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});


// music 스와이퍼
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  breakpoints: {
    360:{
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    700:{
      slidesPerView: 2.3
    },
    1200:{
      slidesPerView: 3
    },
    1400:{
      slidesPerView: 3.5
    },
    1600:{
      slidesPerView: 4.2
    }
  }
});



//video 스와이퍼
var swiper = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2.5,
  initialSlide: 1, // 두 번째 슬라이드에서 시작
  coverflowEffect: {
    rotate: 50,
    stretch: -50,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination2",
  },
});



//텍스트 스와이퍼
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 2.5, // 자동 슬라이드 크기 조정
  centeredSlides: false, // 가운데 정렬 비활성화
  spaceBetween: 0,
  initialSlide: 0, // 첫 번째 슬라이드부터 시작
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  },
  navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 100, // 기본 설정 유지
    },
    1200:{
      slidesPerView: 2.5
    }
  }
});



// 전체 텍스트 움직임
gsap.utils.toArray('.rolled-over-txt').forEach((txt) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: txt,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1
    }
  }).fromTo(
    txt,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      duration: 5
    }
  );
});




