const showFormula = () => {
  const formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
    formulaItemIcons = document.querySelectorAll('.formula-item__icon-inner-text'),
    formula = document.getElementById('formula');

  formula.addEventListener('mouseover', event => {
    const target = event.target;
    formulaItemIcons.forEach((item, index) => {
      if (item === target) {
        item.closest('.formula-item').classList.add('active-item');
        item.closest('.formula-item').style.zIndex = '100';

        const coords = target.getBoundingClientRect(),
          top = coords.top - formulaItemPopup[index].offsetHeight - 15;
        if (top < 0) {
          formulaItemPopup[index].classList.add('problems-item-popup-rotated');
          formulaItemPopup[index].style.top = '165px';
        } else {
          formulaItemPopup[index].style.top = '';
          formulaItemPopup[index].classList.remove('problems-item-popup-rotated');
        }
      }
    });
  });

  formula.addEventListener('mouseout', event => {
    const target = event.target;
    formulaItemIcons.forEach(item => {
      if (item === target) {
        item.closest('.formula-item').classList.remove('active-item');
        item.closest('.formula-item').style.zIndex = '';
      }
    });
  });

  const formulaSlider = document.querySelector('.formula-slider'),
    formulaSliderSlide = document.querySelectorAll('.formula-slider__slide'),
    formulaSliderSlideFirst = formulaSliderSlide[formulaSliderSlide.length - 1].cloneNode(true),
    formulaSliderSlideLast = formulaSliderSlide[0].cloneNode(true);

  const slider = () => {
    let currentSlide = 0,
      translate = 0,
      clientWidth;

    formulaSlider.style.transform = `translateX(${translate}px)`;
    formulaSliderSlide.forEach(item => {
      if (item.classList.contains('active-item')) {
        item.classList.remove('active-item');
      }
    });

    if (window.innerWidth <= 1024 && window.innerWidth > 575) {
      clientWidth = formulaSlider.clientWidth / 3;

      if (formulaSlider.contains(formulaSliderSlideLast) && formulaSlider.contains(formulaSliderSlideFirst)) {
        formulaSlider.removeChild(formulaSliderSlideLast);
        formulaSlider.removeChild(formulaSliderSlideFirst);
      }

      if (!formulaSlider.contains(formulaSliderSlideLast) && !formulaSlider.contains(formulaSliderSlideFirst)) {
        formulaSlider.appendChild(formulaSliderSlideLast);
        formulaSlider.insertBefore(formulaSliderSlideFirst, formulaSlider.firstChild);
      }

      formulaSliderSlide[currentSlide].classList.add('active-item');
    } else if (window.innerWidth <= 575) {
      clientWidth = formulaSlider.clientWidth;
      formulaSliderSlide[currentSlide].classList.add('active-item');

      if (formulaSlider.contains(formulaSliderSlideLast) && formulaSlider.contains(formulaSliderSlideFirst)) {
        formulaSlider.removeChild(formulaSliderSlideLast);
        formulaSlider.removeChild(formulaSliderSlideFirst);
      }
    }

    formulaSliderSlide.forEach(item => {
      item.style.minWidth = `${clientWidth}px`;
      item.style.transition = 'all 0.3s linear';
    });

    formulaSliderSlideFirst.style.minWidth = `${clientWidth}px`;
    formulaSliderSlideLast.style.minWidth = `${clientWidth}px`;

    document.querySelector('.formula-slider-wrap').style.overflowX = 'hidden';
    formulaSlider.style.display = 'flex';
    formulaSlider.style.alignItems = 'flex-start';

    document.querySelector('.formula-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#formula-arrow_right') || target.matches('#formula-arrow_right path') || target.matches('#formula-arrow_right svg')) {
        currentSlide++;
        translate -= clientWidth;

        if (currentSlide >= formulaSliderSlide.length) {
          currentSlide = 0;
          translate = 0;
        }

        formulaSlider.style.transform = `translateX(${translate}px)`;
        formulaSliderSlide.forEach(item => {
          if (item.classList.contains('active-item')) {
            item.classList.remove('active-item');
          }
        });
        formulaSliderSlide[currentSlide].classList.add('active-item');
      } else if (target === target.closest('#formula-arrow_left') || target.matches('#formula-arrow_left path') || target.matches('#formula-arrow_left svg')) {
        currentSlide--;
        translate += clientWidth;

        if (currentSlide < 0) {
          currentSlide = formulaSliderSlide.length - 1;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }

        formulaSlider.style.transform = `translateX(${translate}px)`;
        formulaSliderSlide.forEach(item => {
          if (item.classList.contains('active-item')) {
            item.classList.remove('active-item');
          }
        });
        formulaSliderSlide[currentSlide].classList.add('active-item');
      }
    });
  };

  slider();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) {
      slider();
    }
  });
}

export default showFormula;