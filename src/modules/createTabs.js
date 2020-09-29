const createTabs = () => {
  const schemeList = document.getElementById('scheme-list'),
    schemeNavItem = document.querySelectorAll('.scheme-nav__item'),
    schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide'),
    schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

  const toggleTabContent = index => {
    for (let i = 0; i < schemeDescriptionBlock.length; i++) {
      if (index === i) {
        schemeNavItem[i].classList.add('active');
        schemeDescriptionBlock[i].classList.add('visible-content-block');
        schemeSliderSlide[i].style.display = 'block';
      } else {
        schemeNavItem[i].classList.remove('active');
        schemeDescriptionBlock[i].classList.remove('visible-content-block');
        schemeSliderSlide[i].style.display = 'none';
      }
    }
  };

  schemeList.addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.scheme-nav__item');
    if (target) {
      schemeNavItem.forEach((item, index) => {
        if (item === target) {
          toggleTabContent(index);
        }
      });
    }
  });

  const sliderTab = () => {
    let indexSlide = 0,
      translate = 0;

    schemeList.style.transform = `translateX(${translate}px)`;
    document.getElementById('nav-arrow-scheme_left').style.display = 'none';

    document.querySelector('.scheme .nav-wrap').addEventListener('click', event => {
      const target = event.target;
      if (target === target.closest('#nav-arrow-scheme_right') || target.matches('#nav-arrow-scheme_right path') || target.matches('#nav-arrow-scheme_right svg')) {
        indexSlide++;
        translate -= 150;
        schemeList.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-scheme_left') || target.matches('#nav-arrow-scheme_left path') || target.matches('#nav-arrow-scheme_left svg')) {
        indexSlide--;
        translate += 150;
        schemeList.style.transform = `translateX(${translate}px)`;
      }

      if (indexSlide === 0) {
        document.getElementById('nav-arrow-scheme_left').style.display = 'none';
        document.getElementById('nav-arrow-scheme_right').style.display = '';
      } else if (indexSlide === schemeNavItem.length - 1) {
        document.getElementById('nav-arrow-scheme_right').style.display = 'none';
        document.getElementById('nav-arrow-scheme_left').style.display = '';
      } else {
        document.getElementById('nav-arrow-scheme_right').style.display = '';
        document.getElementById('nav-arrow-scheme_left').style.display = '';
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1135) {
        sliderTab();
      }
    });
  };


  sliderTab();
}

export default createTabs;