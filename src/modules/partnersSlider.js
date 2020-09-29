const partnersSlider = () => {
  const partners = document.getElementById('partners'),
    partnersSlider = partners.querySelector('.partners-slider'),
    partnersSliderSlide = partners.querySelectorAll('.partners-slider__slide');

  partnersSlider.style.display = 'flex';
  partners.querySelector('.wrapper').style.overflow = 'hidden';

  let currentSlide = 0,
    translate = 0,
    clientWidth = partnersSlider.clientWidth;

  if (window.innerWidth > 575) {
    clientWidth /= 3;
  }

  partnersSliderSlide.forEach(item => {
    item.style.minWidth = `${clientWidth}px`;
  });

  partners.querySelector('.wrapper').addEventListener('click', event => {
    const target = event.target;
    if (target === target.closest('#partners-arrow_right') || target.matches('#partners-arrow_right path') || target.matches('#partners-arrow_right svg')) {
      currentSlide++;
      translate -= clientWidth;
      if (window.innerWidth > 575) {
        if (currentSlide >= partnersSliderSlide.length - 2) {
          currentSlide = 0;
          translate = 0;
        }
      } else {
        if (currentSlide >= partnersSliderSlide.length) {
          currentSlide = 0;
          translate = 0;
        }
      }
      partnersSlider.style.transform = `translateX(${translate}px)`;
    } else if (target === target.closest('#partners-arrow_left') || target.matches('#partners-arrow_left path') || target.matches('#partners-arrow_left svg')) {
      currentSlide--;
      translate += clientWidth;
      if (window.innerWidth > 575) {
        if (currentSlide < 0) {
          currentSlide = partnersSliderSlide.length - 3;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }
      } else {
        if (currentSlide < 0) {
          currentSlide = partnersSliderSlide.length - 1;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }
      }
      partnersSlider.style.transform = `translateX(${translate}px)`;
    }
  });
};

export default partnersSlider;