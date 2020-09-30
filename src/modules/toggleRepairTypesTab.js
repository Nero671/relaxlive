const toggleRepairTypesTab = () => {
  const navListRepair = document.querySelector('.nav-list-repair'),
    repairTypesNavItem = document.querySelectorAll('.repair-types-nav__item'),
    typesRepair = document.querySelectorAll('.types-repair');

  const sliderTab = () => {
    let indexSlide = 0,
      translate = 0;

    navListRepair.style.transform = `translateX(${translate}px)`;
    document.getElementById('nav-arrow-repair-left_base').style.display = 'none';

    document.querySelector('.nav-wrap-repair').addEventListener('click', event => {
      let target = event.target;
      if (target === target.closest('#nav-arrow-repair-right_base') || target.matches('#nav-arrow-repair-right_base path') || target.matches('#nav-arrow-repair-right_base svg')) {
        indexSlide++;
        translate -= 240;
        navListRepair.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-repair-left_base') || target.matches('#nav-arrow-repair-left_base path') || target.matches('#nav-arrow-repair-left_base svg')) {
        indexSlide--;
        translate += 240;
        navListRepair.style.transform = `translateX(${translate}px)`;
      }

      if (indexSlide === 0) {
        document.getElementById('nav-arrow-repair-left_base').style.display = 'none';
      } else if (indexSlide === repairTypesNavItem.length - 1) {
        document.getElementById('nav-arrow-repair-right_base').style.display = 'none';
      } else {
        document.getElementById('nav-arrow-repair-right_base').style.display = '';
        document.getElementById('nav-arrow-repair-left_base').style.display = '';
      }
    });
  };


  const slider = (item = typesRepair[0]) => {
    const repairTypesSliderSlide = item.querySelectorAll('.repair-types-slider__slide'),
      repairCounter = document.getElementById('repair-counter'),
      sliderCounterContentCurrent = repairCounter.querySelector('.slider-counter-content__current'),
      sliderCounterContentTotal = repairCounter.querySelector('.slider-counter-content__total');

    sliderCounterContentTotal.textContent = `${repairTypesSliderSlide.length}`;

    let currentSlide = 0,
      translate = 0;

    const clientHeight = document.querySelector('.repair-types-slider').clientHeight;

    item.style.transform = `translateY(${translate}px)`;
    document.getElementById('repair-types-arrow_left').style.display = 'none';
    document.getElementById('repair-types-arrow_right').style.display = 'flex';
    sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

    document.querySelector('.repair-types-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#repair-types-arrow_right') || target.matches('#repair-types-arrow_right path') || target.matches('#repair-types-arrow_right svg')) {
        currentSlide++;
        translate -= clientHeight;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        item.style.transform = `translateY(${translate}px)`;
      } else if (target === target.closest('#repair-types-arrow_left') || target.matches('#repair-types-arrow_left path') || target.matches('#repair-types-arrow_left svg')) {
        currentSlide--;
        translate += clientHeight;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        item.style.transform = `translateY(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('repair-types-arrow_left').style.display = 'none';
        document.getElementById('repair-types-arrow_right').style.display = 'flex';
      } else if (currentSlide === repairTypesSliderSlide.length - 1) {
        document.getElementById('repair-types-arrow_right').style.display = 'none';
      } else {
        document.getElementById('repair-types-arrow_right').style.display = 'flex';
        document.getElementById('repair-types-arrow_left').style.display = 'flex';
      }
    });
  };

  typesRepair.forEach((item, index) => {
    if (index === 0) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  slider();
  sliderTab();

  navListRepair.addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.repair-types-nav__item');
    if (target) {
      repairTypesNavItem.forEach((item, index) => {
        if (item === target) {
          repairTypesNavItem[index].classList.add('active');
          typesRepair[index].style.display = 'block';
          slider(typesRepair[index]);
        } else {
          repairTypesNavItem[index].classList.remove('active');
          typesRepair[index].style.display = 'none';
        }
      });
    }
  });
};

export default toggleRepairTypesTab;