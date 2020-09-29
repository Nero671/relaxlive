const showProblems = () => {
  const problemsItemPopup = document.querySelectorAll('.problems-item-popup'),
    problemsItemIcons = document.querySelectorAll('.problems-item__icon-inner'),
    svgWraps = document.querySelectorAll('.svg-wrap'),
    problems = document.getElementById('problems');

  problems.onmouseover = event => {
    const target = event.target;
    svgWraps.forEach((item, index) => {
      if (item === target.closest('.svg-wrap')) {
        item.closest('.problems-item').classList.add('active-item');
        item.closest('.problems-item').style.zIndex = '100';
        problemsItemIcons[index].style.opacity = '1';
        problemsItemPopup[index].style.opacity = '1';
        problemsItemPopup[index].style.visibility = 'visible';

        const coords = target.getBoundingClientRect(),
          top = coords.top - problemsItemPopup[index].offsetHeight - 15;
        if (top < 0) {
          problemsItemPopup[index].classList.add('problems-item-popup-rotated');
          problemsItemPopup[index].style.top = '165px';
        } else {
          problemsItemPopup[index].style.top = '';
          problemsItemPopup[index].classList.remove('problems-item-popup-rotated');
        }
      }
    });
  };

  problems.onmouseout = event => {
    const target = event.target;
    svgWraps.forEach((item, index) => {
      if (item === target) {
        item.closest('.problems-item').classList.remove('active-item');
        item.closest('.problems-item').style.zIndex = '';
        problemsItemIcons[index].style.opacity = '';
        problemsItemPopup[index].style.opacity = '';
        problemsItemPopup[index].style.visibility = '';
      }
    });
  };

  const slider = () => {
    const problemsSlider = document.querySelector('.problems-slider'),
      problemsSliderSlide = document.querySelectorAll('.problems-slider__slide');

    let currentSlide = 0,
      translate = 0;

    const clientWidth = problemsSlider.clientWidth;

    problemsSliderSlide.forEach(item => {
      item.style.minWidth = `${clientWidth}px`;
      item.style.transition = 'all 0.3s linear';
    });

    document.querySelector('.problems-slider-wrap').style.overflowX = 'hidden';
    problemsSlider.style.display = 'flex';

    document.querySelector('.problems-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#problems-arrow_right') || target.matches('#problems-arrow_right path') || target.matches('#problems-arrow_right svg')) {
        currentSlide++;
        translate -= clientWidth;

        if (currentSlide >= problemsSliderSlide.length) {
          currentSlide = 0;
          translate = 0;
        }

        problemsSlider.style.transform = `translateX(${translate}px)`;
        problemsSliderSlide.forEach(item => {
          if (item.classList.contains('active-item')) {
            item.classList.remove('active-item');
          }
        });
        problemsSliderSlide[currentSlide].classList.add('active-item');
      } else if (target === target.closest('#problems-arrow_left') || target.matches('#problems-arrow_left path') || target.matches('#problems-arrow_left svg')) {
        currentSlide--;
        translate += clientWidth;

        if (currentSlide < 0) {
          currentSlide = problemsSliderSlide.length - 1;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }

        problemsSlider.style.transform = `translateX(${translate}px)`;
        problemsSliderSlide.forEach(item => {
          if (item.classList.contains('active-item')) {
            item.classList.remove('active-item');
          }
        });
        problemsSliderSlide[currentSlide].classList.add('active-item');
      }
    });
  };

  slider();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
      slider();
    }
  });

};

export default showProblems;