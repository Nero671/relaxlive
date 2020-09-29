const reviewsSlider = () => {
  const reviewsSliderWrap = document.querySelector('.reviews-slider-wrap__slide'),
    reviewsSliderSlide = document.querySelectorAll('.reviews-slider__slide');

  let currentSlide = 0,
    translate = 0;

  const clientWidth = reviewsSliderWrap.clientWidth;

  reviewsSliderSlide.forEach(item => {
    item.style.flex = '1 0 auto';
    item.style.minWidth = `${clientWidth}px`;
  });

  reviewsSliderWrap.style.display = 'flex';
  reviewsSliderWrap.style.transition = 'all 0.3s linear';
  document.getElementById('reviews-arrow_left').style.display = 'none';

  document.querySelector('.reviews-slider-wrap').addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;

    if (target === target.closest('#reviews-arrow_right') || target.matches('#reviews-arrow_right path') || target.matches('#reviews-arrow_right svg')) {
      currentSlide++;
      translate -= clientWidth;
      reviewsSliderWrap.style.transform = `translateX(${translate}px)`;
    } else if (target === target.closest('#reviews-arrow_left') || target.matches('#reviews-arrow_left path') || target.matches('#reviews-arrow_left svg')) {
      currentSlide--;
      translate += clientWidth;
      reviewsSliderWrap.style.transform = `translateX(${translate}px)`;
    }

    if (currentSlide === 0) {
      document.getElementById('reviews-arrow_left').style.display = 'none';
    } else if (currentSlide === reviewsSliderSlide.length - 1) {
      document.getElementById('reviews-arrow_right').style.display = 'none';
    } else {
      document.getElementById('reviews-arrow_right').style.display = '';
      document.getElementById('reviews-arrow_left').style.display = '';
    }
  });
};

export default reviewsSlider;