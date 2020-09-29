const showPopupPortfolio = () => {
  const portfolio = document.getElementById('portfolio'),
    portfolioSliderSlideFrame = portfolio.querySelectorAll('.portfolio-slider.mobile-hide .portfolio-slider__slide-frame'),
    popupPortfolio = document.querySelector('.popup-portfolio'),
    popupPortfolioText = document.querySelectorAll('.popup-portfolio-text'),
    popupPortfolioSliderSlide = document.querySelectorAll('.popup-portfolio-slider__slide');

  let indexSlide = 0;

  document.querySelector('.popup-portfolio-slider-wrap__slide').style.overflow = 'hidden';



  const slider = (indexSlide = 0) => {
    const popupPortfolioCounter = document.getElementById('popup-portfolio-counter'),
      sliderCounterContentCurrent = popupPortfolioCounter.querySelector('.slider-counter-content__current'),
      sliderCounterContentTotal = popupPortfolioCounter.querySelector('.slider-counter-content__total');

    sliderCounterContentTotal.textContent = `${popupPortfolioSliderSlide.length}`;

    document.querySelector('.popup-portfolio-slider').style.display = 'flex';
    document.querySelector('.popup-portfolio-slider').style.transition = 'all 0.3s linear';
    document.getElementById('popup_portfolio_left').style.display = 'none';
    document.getElementById('popup_portfolio_right').style.display = '';

    let clientWidth = 0;

    popupPortfolioSliderSlide.forEach(item => {
      clientWidth = document.querySelector('.popup-portfolio-slider-wrap__slide').clientWidth;
      item.style.minWidth = `${clientWidth}px`;
    });

    let currentSlide = 0,
      translate = 0;
    popupPortfolioText[0].style.display = 'block';
    document.querySelector('.popup-portfolio-slider').style.transform = `translateX(${translate}px)`;

    if (indexSlide !== 0) {
      translate = -clientWidth * indexSlide;
      currentSlide = indexSlide;
      popupPortfolioText.forEach((item, index) => {
        if (index === indexSlide) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
      document.querySelector('.popup-portfolio-slider').style.transform = `translateX(${translate}px)`;
      if (indexSlide === portfolioSliderSlideFrame.length - 1) {
        document.getElementById('popup_portfolio_right').style.display = 'none';
        document.getElementById('popup_portfolio_left').style.display = '';
      } else {
        document.getElementById('popup_portfolio_right').style.display = 'flex';
        document.getElementById('popup_portfolio_left').style.display = 'flex';
      }
    }

    sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

    document.querySelector('.popup-portfolio-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#popup_portfolio_right') || target.matches('#popup_portfolio_right path') || target.matches('#popup_portfolio_right svg')) {
        currentSlide++;
        indexSlide++;
        popupPortfolioText.forEach((item, index) => {
          if (index === indexSlide) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate -= clientWidth;
        document.querySelector('.popup-portfolio-slider').style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#popup_portfolio_left') || target.matches('#popup_portfolio_left path') || target.matches('#popup_portfolio_left svg')) {
        currentSlide--;
        indexSlide--;
        popupPortfolioText.forEach((item, index) => {
          if (index === indexSlide) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate += clientWidth;
        document.querySelector('.popup-portfolio-slider').style.transform = `translateX(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('popup_portfolio_left').style.display = 'none';
        document.getElementById('popup_portfolio_right').style.display = '';

      } else if (currentSlide === popupPortfolioSliderSlide.length - 1) {
        document.getElementById('popup_portfolio_right').style.display = 'none';
        document.getElementById('popup_portfolio_left').style.display = '';
      } else {
        document.getElementById('popup_portfolio_right').style.display = '';
        document.getElementById('popup_portfolio_left').style.display = '';
      }
    });
  };

  document.body.addEventListener('click', event => {
    if (event.target.matches('.portfolio-slider__slide-frame')) {
      portfolioSliderSlideFrame.forEach((item, index) => {
        if (item === event.target) {
          indexSlide = index;
          slider(indexSlide);
        }
      });
      popupPortfolio.style.visibility = 'visible';
    } else if (event.target.closest('.close.mobile-hide') || event.target.closest('.close.tablet-hide') || !event.target.closest('.popup-dialog-portfolio')) {
      popupPortfolio.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupPortfolio.style.visibility = '';
    }
  });

  window.addEventListener('resize', () => {
    slider();
  });

  slider();

};

export default showPopupPortfolio;