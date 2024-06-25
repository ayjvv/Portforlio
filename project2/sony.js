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
