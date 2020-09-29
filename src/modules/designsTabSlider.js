const designsTabSlider = () => {
  const designsList = document.getElementById('designs-list'),
    designsNavItem = document.querySelectorAll('#designs-list .designs-nav__item'),
    designsSliderSlide = document.querySelectorAll('.designs-slider__style'),
    previewBlock = document.querySelectorAll('.preview-block'),
    designsCounter = document.getElementById('designs-counter'),
    sliderCounterContentCurrent = designsCounter.querySelector('.slider-counter-content__current'),
    sliderCounterContentTotal = designsCounter.querySelector('.slider-counter-content__total');

  const sliderTab = () => {
    let indexSlide = 0,
      translate = 0;

    designsList.style.transform = `translateX(${translate}px)`;
    document.getElementById('nav-arrow-designs_left').style.display = 'none';

    document.querySelector('.designs .nav-wrap').addEventListener('click', event => {
      const target = event.target;
      if (target === target.closest('#nav-arrow-designs_right') || target.matches('#nav-arrow-designs_right path') || target.matches('#nav-arrow-designs_right svg')) {
        indexSlide++;
        translate -= 150;
        designsList.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-designs_left') || target.matches('#nav-arrow-designs_left path') || target.matches('#nav-arrow-designs_left svg')) {
        indexSlide--;
        translate += 150;
        designsList.style.transform = `translateX(${translate}px)`;
      }

      if (indexSlide === 0) {
        document.getElementById('nav-arrow-designs_left').style.display = 'none';
        document.getElementById('nav-arrow-designs_right').style.display = '';
      } else if (indexSlide === designsNavItem.length - 1) {
        document.getElementById('nav-arrow-designs_right').style.display = 'none';
        document.getElementById('nav-arrow-designs_left').style.display = '';
      } else {
        document.getElementById('nav-arrow-designs_right').style.display = '';
        document.getElementById('nav-arrow-designs_left').style.display = '';
      }
    });
  };


  const toggleTabContent = index => {
    for (let i = 0; i < previewBlock.length; i++) {
      if (index === i) {
        designsNavItem[i].classList.add('active');
        previewBlock[i].classList.add('visible');
        designsSliderSlide[i].style.display = 'block';
      } else {
        designsNavItem[i].classList.remove('active');
        previewBlock[i].classList.remove('visible');
        designsSliderSlide[i].style.display = 'none';
      }
    }
  };

  const slider = (indexSlides = 0) => {
    sliderCounterContentTotal.textContent = `${designsSliderSlide[indexSlides].querySelectorAll('.designs-slider__style-slide').length}`;
    document.getElementById('design_left').style.display = 'none';
    document.getElementById('design_right').style.display = '';

    let currentSlide = 0;

    sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

    designsSliderSlide.forEach(item => {
      item.querySelectorAll('.designs-slider__style-slide').forEach((item, index) => {
        if (index === 0) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });

    const designsSliderStyleSlide = designsSliderSlide[indexSlides].querySelectorAll('.designs-slider__style-slide');

    document.querySelector('.designs-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#design_right') || target.matches('#design_right path') || target.matches('#design_right svg')) {
        currentSlide++;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        designsSliderStyleSlide.forEach((item, index) => {
          if (index === currentSlide) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      } else if (target === target.closest('#design_left') || target.matches('#design_left path') || target.matches('#design_left svg')) {
        currentSlide--;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        designsSliderStyleSlide.forEach((item, index) => {
          if (index === currentSlide) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      }

      if (currentSlide === 0) {
        document.getElementById('design_left').style.display = 'none';
        document.getElementById('design_right').style.display = '';

      } else if (currentSlide === designsSliderStyleSlide.length - 1) {
        document.getElementById('design_right').style.display = 'none';
        document.getElementById('design_left').style.display = '';
      } else {
        document.getElementById('design_right').style.display = '';
        document.getElementById('design_left').style.display = '';
      }
    });
  };

  const indexSlide = 0;

  designsList.addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.designs-nav__item');
    if (target) {
      designsNavItem.forEach((item, index) => {
        if (item === target) {
          toggleTabContent(index);
          slider(index);

          previewBlock[index].addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.preview-block__item');

            const designsSliderStyleSlide = designsSliderSlide[index].querySelectorAll('.designs-slider__style-slide'),
              previewBlockItem = previewBlock[index].querySelectorAll('.preview-block__item');
            if (target) {
              previewBlockItem.forEach((item, i) => {
                if (item === target) {
                  previewBlockItem[i].querySelector('.preview-block__item-inner').classList.add('preview_active');
                  designsSliderStyleSlide[i].style.display = 'block';
                } else {
                  previewBlockItem[i].querySelector('.preview-block__item-inner').classList.remove('preview_active');
                  designsSliderStyleSlide[i].style.display = 'none';
                }
              });
            }
          });
        }
      });
    }
  });

  previewBlock[indexSlide].addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.preview-block__item');

    const designsSliderStyleSlide = designsSliderSlide[indexSlide].querySelectorAll('.designs-slider__style-slide'),
      previewBlockItem = previewBlock[indexSlide].querySelectorAll('.preview-block__item');
    if (target) {
      previewBlockItem.forEach((item, i) => {
        if (item === target) {
          previewBlockItem[i].querySelector('.preview-block__item-inner').classList.add('preview_active');
          designsSliderStyleSlide[i].style.display = 'block';
        } else {
          previewBlockItem[i].querySelector('.preview-block__item-inner').classList.remove('preview_active');
          designsSliderStyleSlide[i].style.display = 'none';
        }
      });
    }
  });

  slider();

  if (window.innerWidth < 1135) {
    sliderTab();
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 1135) {
      sliderTab();
    }
    if (window.innerWidth <= 1024) {
      slider();
    }
  });
};

export default designsTabSlider;