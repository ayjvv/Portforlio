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



document.addEventListener('DOMContentLoaded', function() {
  const scrollElements = document.querySelectorAll('.scroll-reveal');

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const elementOutOfView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add('revealed');
  };

  const hideScrollElement = (element) => {
    element.classList.remove('revealed');
  };

  const handleScroll = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutOfView(el)) {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScroll();
  });

  // Initial check in case elements are in view on load
  handleScroll();
});
