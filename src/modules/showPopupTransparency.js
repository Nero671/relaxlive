const showPopupTransparency = () => {
  const transparencySlider = document.querySelector('.transparency-slider'),
    transparencyItem = document.querySelectorAll('.transparency-item'),
    transparencyItemImg = document.querySelectorAll('.transparency-item__img'),
    popupTransparency = document.querySelector('.popup-transparency'),
    popupTransparencySliderWrap = document.querySelector('.popup-transparency-slider-wrap__slide'),
    popupTransparencySliderSlide = document.querySelectorAll('.popup-transparency-slider__slide');

  let indexSlide = 0;

  const slider = indexSlide => {
    const transparencyPopupCounter = document.getElementById('transparency-popup-counter'),
      sliderCounterContentCurrent = transparencyPopupCounter.querySelector('.slider-counter-content__current'),
      sliderCounterContentTotal = transparencyPopupCounter.querySelector('.slider-counter-content__total');

    sliderCounterContentTotal.textContent = `${popupTransparencySliderSlide.length}`;

    popupTransparencySliderWrap.style.display = 'flex';
    popupTransparencySliderWrap.style.transition = 'all 0.3s linear';
    document.getElementById('transparency_left').style.display = 'none';
    document.getElementById('transparency_right').style.display = '';

    let clientWidth = 0;

    popupTransparencySliderSlide.forEach(item => {
      item.style.flex = '1 0 auto';
      clientWidth = item.clientWidth;
    });

    let currentSlide = 0,
      translate = 0;
    popupTransparencySliderWrap.style.transform = `translateX(${translate}px)`;

    if (indexSlide !== 0) {
      translate = -clientWidth * indexSlide;
      currentSlide = indexSlide;
      popupTransparencySliderWrap.style.transform = `translateX(${translate}px)`;
      if (indexSlide === popupTransparencySliderSlide.length - 1) {
        document.getElementById('transparency_right').style.display = 'none';
        document.getElementById('transparency_left').style.display = '';
      } else {
        document.getElementById('transparency_right').style.display = '';
        document.getElementById('transparency_left').style.display = '';
      }
    }

    sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

    document.querySelector('.popup-transparency-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#transparency_right') || target.matches('#transparency_right path') || target.matches('#transparency_right svg')) {
        currentSlide++;
        indexSlide++;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate -= clientWidth;
        popupTransparencySliderWrap.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#transparency_left') || target.matches('#transparency_left path') || target.matches('#transparency_left svg')) {
        currentSlide--;
        indexSlide--;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate += clientWidth;
        popupTransparencySliderWrap.style.transform = `translateX(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('transparency_left').style.display = 'none';
        document.getElementById('transparency_right').style.display = '';
      } else if (currentSlide === popupTransparencySliderSlide.length - 1) {
        document.getElementById('transparency_right').style.display = 'none';
        document.getElementById('transparency_left').style.display = '';
      } else {
        document.getElementById('transparency_right').style.display = '';
        document.getElementById('transparency_left').style.display = '';
      }
    });
  };

  document.body.addEventListener('click', event => {
    if (event.target.closest('.transparency-item__img')) {
      transparencyItemImg.forEach((item, index) => {
        if (item === event.target) {
          indexSlide = index;
          slider(indexSlide);
        }
      });
      popupTransparency.style.visibility = 'visible';
    } else if (event.target.closest('.close.mobile-hide') || event.target.closest('.close.tablet-hide') || !event.target.closest('.popup-dialog-transparency')) {
      popupTransparency.style.visibility = '';
      indexSlide = 0;
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupTransparency.style.visibility = '';
      indexSlide = 0;
    }
  });

  const mobileSlider = () => {
    let currentSlide = 0,
      translate = 0;

    const clientWidth = transparencySlider.clientWidth;

    transparencyItem.forEach(item => {
      item.style.minWidth = `${clientWidth}px`;
    });

    transparencySlider.style.display = 'flex';
    transparencySlider.style.transition = 'all 0.3s linear';
    document.getElementById('transparency-arrow_left').style.display = 'none';
    transparencySlider.style.transform = `translateX(${translate}px)`;
    document.getElementById('transparency-arrow_right').style.display = 'flex';

    document.querySelector('.transparency-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#transparency-arrow_right') || target.matches('#transparency-arrow_right path') || target.matches('#transparency-arrow_right svg')) {
        currentSlide++;
        translate -= clientWidth;
        transparencySlider.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#transparency-arrow_left') || target.matches('#transparency-arrow_left path') || target.matches('#transparency-arrow_left svg')) {
        currentSlide--;
        translate += clientWidth;
        transparencySlider.style.transform = `translateX(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('transparency-arrow_left').style.display = 'none';
        document.getElementById('transparency-arrow_right').style.display = '';
      } else if (currentSlide === transparencyItem.length - 1) {
        document.getElementById('transparency-arrow_right').style.display = 'none';
        document.getElementById('transparency-arrow_left').style.display = '';
      } else {
        document.getElementById('transparency-arrow_right').style.display = '';
        document.getElementById('transparency-arrow_left').style.display = '';
      }
    });
  };

  if (window.innerWidth < 1091) {
    mobileSlider();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1091) {
      mobileSlider();
    } else {
      const translate = 0;
      document.getElementById('transparency-arrow_left').style.display = 'none';
      transparencySlider.style.transform = `translateX(${translate}px)`;
      document.getElementById('transparency-arrow_right').style.display = 'none';
      transparencyItem.forEach(item => {
        item.style.minWidth = '';
      });
    }
  });

}

export default showPopupTransparency;