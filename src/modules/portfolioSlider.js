const portfolioSlider = () => {
  const portfolioSliderWrap = document.querySelector('.portfolio-slider-wrap'),
    portfolioSliderSlideFrame = document.querySelectorAll('.portfolio-slider__slide-frame'),
    portfolioSliderWrapSlide = document.querySelectorAll('.portfolio-slider-wrap__slide'),
    sliderCounterContentTotal = document.querySelector('#portfolio-counter .slider-counter-content__total'),
    portfolioSliderSlide = document.querySelectorAll('.portfolio-slider__slide');

  sliderCounterContentTotal.textContent = document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame').length;

  portfolioSliderWrapSlide.forEach(item => {
    item.style.display = 'flex';
    item.style.transition = 'all 0.3s linear';
  });

  let currentSlide = 0,
    translate = 0,
    clientWidth = 0;

  document.getElementById('portfolio-arrow_left').style.display = 'none';

  clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth / 3;


  portfolioSliderSlide.forEach(item => {
    item.style.maxWidth = `${clientWidth}px`;
  });

  if (currentSlide === 0) {
    document.getElementById('portfolio-arrow_left').style.display = 'none';
  } else if (currentSlide === portfolioSliderSlide.length - 3) {
    document.getElementById('portfolio-arrow_right').style.display = 'none';
  } else {
    document.getElementById('portfolio-arrow_right').style.display = 'flex';
    document.getElementById('portfolio-arrow_left').style.display = 'flex';
  }

  document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';

  document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
  document.getElementById('portfolio-arrow-mobile_left').style.zIndex = '100';
  document.getElementById('portfolio-arrow-mobile_right').style.zIndex = '100';

  document.querySelector('#portfolio-counter .slider-counter-content__current').textContent = `${currentSlide + 1}`;


  window.addEventListener('resize', () => {

    let currentSlide = 0,
      translate = 0,
      clientWidth;

    portfolioSliderWrapSlide.forEach(item => {
      item.style.transform = `translateX(${translate}px)`;
    });
    document.getElementById('portfolio-arrow_left').style.display = 'none';

    if (window.innerWidth > 1024) {
      clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth / 3;
      portfolioSliderSlide.forEach(item => {
        item.style.maxWidth = `${clientWidth}px`;
      });
      portfolioSliderSlideFrame.forEach(item => {
        item.style.minWidth = ``;
        item.style.maxWidth = ``;
      });
      document.getElementById('portfolio-arrow_right').style.display = 'flex';
    }

    if (window.innerWidth > 900 && window.innerWidth <= 1024) {
      clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth / 2;
      portfolioSliderSlideFrame.forEach(item => {
        item.style.maxWidth = `${clientWidth}px`;
      });
      portfolioSliderSlide.forEach(item => {
        item.style.maxWidth = ``;
      });
      document.getElementById('portfolio-arrow_right').style.display = 'flex';
    }

    if (window.innerWidth <= 900 && window.innerWidth > 575) {
      portfolioSliderSlide.forEach(item => {
        item.style.flexWrap = 'nowrap';
      });
      portfolioSliderSlideFrame.forEach(item => {
        clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth;
        item.style.minWidth = `${clientWidth}px`;
        portfolioSliderSlide.forEach(item => {
          item.style.maxWidth = ``;
        });
        document.getElementById('portfolio-arrow_left').style.display = 'none';
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
      });
    }

    if (window.innerWidth <= 575) {
      portfolioSliderSlideFrame.forEach(item => {
        clientWidth = document.querySelector('.portfolio-slider-mobile').clientWidth;
        item.style.minWidth = `${clientWidth}px`;
      });
      document.getElementById('portfolio-arrow_left').style.display = 'none';
      document.getElementById('portfolio-arrow_right').style.display = 'none';
      portfolioSliderSlide.forEach(item => {
        item.style.maxWidth = ``;
      });
      document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
      document.querySelector('#portfolio-counter .slider-counter-content__current').textContent = `${currentSlide + 1}`;
    }

    document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
    document.getElementById('portfolio-arrow-mobile_left').style.zIndex = '100';
    document.getElementById('portfolio-arrow-mobile_right').style.zIndex = '100';



    portfolioSliderWrap.addEventListener('click', event => {
      const target = event.target;
      if (target === target.closest('#portfolio-arrow_right') || target.matches('#portfolio-arrow_right path') || target.matches('#portfolio-arrow_right svg') || target.matches('#portfolio-arrow-mobile_right') || target.matches('#portfolio-arrow-mobile_right svg') || target.matches('#portfolio-arrow-mobile_right path')) {
        currentSlide++;
        translate -= clientWidth;
        document.querySelector('#portfolio-counter .slider-counter-content__current').textContent = `${currentSlide + 1}`;
        portfolioSliderWrapSlide.forEach(item => {
          item.style.transform = `translateX(${translate}px)`;
        });
      } else if (target === target.closest('#portfolio-arrow_left') || target.matches('#portfolio-arrow_left path') || target.matches('#portfolio-arrow_left svg') || target.matches('#portfolio-arrow-mobile_left') || target.matches('#portfolio-arrow-mobile_left svg') || target.matches('#portfolio-arrow-mobile_left path')) {
        currentSlide--;
        translate += clientWidth;
        document.querySelector('#portfolio-counter .slider-counter-content__current').textContent = `${currentSlide + 1}`;
        portfolioSliderWrapSlide.forEach(item => {
          item.style.transform = `translateX(${translate}px)`;
        });
      }

      if (window.innerWidth <= 1024 && window.innerWidth > 900) {
        if (currentSlide === 0) {
          document.getElementById('portfolio-arrow_left').style.display = 'none';
        } else if (currentSlide === portfolioSliderSlide.length - 2) {
          document.getElementById('portfolio-arrow_right').style.display = 'none';
        } else {
          document.getElementById('portfolio-arrow_right').style.display = 'flex';
          document.getElementById('portfolio-arrow_left').style.display = 'flex';
        }
      } else if (window.innerWidth <= 900 && window.innerWidth > 575) {
        if (currentSlide === 0) {
          document.getElementById('portfolio-arrow_left').style.display = 'none';
        } else if (currentSlide === portfolioSliderSlide.length - 1) {
          document.getElementById('portfolio-arrow_right').style.display = 'none';
        } else {
          document.getElementById('portfolio-arrow_right').style.display = 'flex';
          document.getElementById('portfolio-arrow_left').style.display = 'flex';
        }
      } else if (window.innerWidth <= 1024) {
        if (currentSlide === 0) {
          document.getElementById('portfolio-arrow_left').style.display = 'none';
        } else if (currentSlide === portfolioSliderSlide.length - 3) {
          document.getElementById('portfolio-arrow_right').style.display = 'none';
        } else {
          document.getElementById('portfolio-arrow_right').style.display = 'flex';
          document.getElementById('portfolio-arrow_left').style.display = 'flex';
        }
      } else if (window.innerWidth <= 575) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
        document.getElementById('portfolio-arrow_left').style.display = 'none';
        if (currentSlide === 0) {
          document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
        } else if (currentSlide === document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame').length - 1) {
          document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
        } else {
          document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
          document.getElementById('portfolio-arrow-mobile_left').style.display = 'flex';
        }
      }
    });

  });

  portfolioSliderWrapSlide.forEach(item => {
    item.style.transform = `translateX(${translate}px)`;
  });
  document.getElementById('portfolio-arrow_left').style.display = 'none';

  if (window.innerWidth > 1024) {
    clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth / 3;
    portfolioSliderSlide.forEach(item => {
      item.style.maxWidth = `${clientWidth}px`;
    });
    portfolioSliderSlideFrame.forEach(item => {
      item.style.minWidth = ``;
      item.style.maxWidth = ``;
    });
    document.getElementById('portfolio-arrow_left').style.display = 'none';
    document.getElementById('portfolio-arrow_right').style.display = 'flex';
  }

  if (window.innerWidth > 900 && window.innerWidth <= 1024) {
    clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth / 2;
    portfolioSliderSlideFrame.forEach(item => {
      item.style.maxWidth = `${clientWidth}px`;
    });
    portfolioSliderSlide.forEach(item => {
      item.style.maxWidth = ``;
    });
    document.getElementById('portfolio-arrow_left').style.display = 'none';
    document.getElementById('portfolio-arrow_right').style.display = 'flex';
  }

  if (window.innerWidth <= 900 && window.innerWidth > 575) {
    portfolioSliderSlide.forEach(item => {
      item.style.flexWrap = 'nowrap';
    });
    portfolioSliderSlideFrame.forEach(item => {
      clientWidth = document.querySelector('.portfolio-slider.mobile-hide').clientWidth;
      item.style.minWidth = `${clientWidth}px`;
      portfolioSliderSlide.forEach(item => {
        item.style.maxWidth = ``;
      });
      document.getElementById('portfolio-arrow_left').style.display = 'none';
      document.getElementById('portfolio-arrow_right').style.display = 'flex';
      document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
    });
  }

  if (window.innerWidth <= 575) {
    portfolioSliderSlideFrame.forEach(item => {
      clientWidth = document.querySelector('.portfolio-slider-mobile').clientWidth;
      item.style.minWidth = `${clientWidth}px`;
    });
    document.getElementById('portfolio-arrow_left').style.display = 'none';
    document.getElementById('portfolio-arrow_right').style.display = 'none';
    portfolioSliderSlide.forEach(item => {
      item.style.maxWidth = ``;
    });
    document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
  }


  document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
  document.getElementById('portfolio-arrow-mobile_left').style.zIndex = '100';
  document.getElementById('portfolio-arrow-mobile_right').style.zIndex = '100';

  portfolioSliderWrap.addEventListener('click', event => {
    const target = event.target;
    if (target === target.closest('#portfolio-arrow_right') || target.matches('#portfolio-arrow_right path') || target.matches('#portfolio-arrow_right svg') || target.matches('#portfolio-arrow-mobile_right') || target.matches('#portfolio-arrow-mobile_right svg') || target.matches('#portfolio-arrow-mobile_right path')) {
      currentSlide++;
      translate -= clientWidth;
      portfolioSliderWrapSlide.forEach(item => {
        item.style.transform = `translateX(${translate}px)`;
      });
    } else if (target === target.closest('#portfolio-arrow_left') || target.matches('#portfolio-arrow_left path') || target.matches('#portfolio-arrow_left svg') || target.matches('#portfolio-arrow-mobile_left') || target.matches('#portfolio-arrow-mobile_left svg') || target.matches('#portfolio-arrow-mobile_left path')) {
      currentSlide--;
      translate += clientWidth;
      portfolioSliderWrapSlide.forEach(item => {
        item.style.transform = `translateX(${translate}px)`;
      });
    }

    if (window.innerWidth <= 1024 && window.innerWidth > 900) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 2) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth <= 900 && window.innerWidth > 575) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 1) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth >= 1024) {
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow_left').style.display = 'none';
      } else if (currentSlide === portfolioSliderSlide.length - 3) {
        document.getElementById('portfolio-arrow_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow_right').style.display = 'flex';
        document.getElementById('portfolio-arrow_left').style.display = 'flex';
      }
    } else if (window.innerWidth <= 575) {
      document.getElementById('portfolio-arrow_right').style.display = 'none';
      document.getElementById('portfolio-arrow_left').style.display = 'none';
      if (currentSlide === 0) {
        document.getElementById('portfolio-arrow-mobile_left').style.display = 'none';
      } else if (currentSlide === document.querySelectorAll('.portfolio-slider-mobile .portfolio-slider__slide-frame').length - 1) {
        document.getElementById('portfolio-arrow-mobile_right').style.display = 'none';
      } else {
        document.getElementById('portfolio-arrow-mobile_right').style.display = 'flex';
        document.getElementById('portfolio-arrow-mobile_left').style.display = 'flex';
      }
    }
  });
};

export default portfolioSlider;