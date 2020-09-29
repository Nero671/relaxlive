const showPopupRepairTypes = () => {
  const popupRepairTypes = document.querySelector('.popup-repair-types');
  document.body.addEventListener('click', event => {
    if (event.target.closest('.link-list-menu') || event.target.closest('.link-list-repair > a')) {
      event.preventDefault();
      popupRepairTypes.style.visibility = 'visible';
    } else if (event.target.closest('.close') || !event.target.closest('.popup-dialog-repair-types')) {
      popupRepairTypes.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupRepairTypes.style.visibility = '';
    }
  });

  const slider = () => {
    let currentSlide = 0,
      translate = 0;

    document.querySelector('.nav-list.nav-list-popup-repair').style.transform = `translateX(${translate}px)`;
    document.getElementById('nav-arrow-popup-repair_left').style.display = 'none';

    document.querySelector('.popup-repair-types-tab .nav-wrap.nav-wrap-repair').addEventListener('click', event => {
      const target = event.target;
      if (target === target.closest('#nav-arrow-popup-repair_right') || target.matches('#nav-arrow-popup-repair_right path') || target.matches('#nav-arrow-popup-repair_right svg')) {
        currentSlide++;
        translate -= 851;
        document.querySelector('.nav-list.nav-list-popup-repair').style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-popup-repair_left') || target.matches('#nav-arrow-popup-repair_left path') || target.matches('#nav-arrow-popup-repair_left svg')) {
        currentSlide--;
        translate += 851;
        document.querySelector('.nav-list.nav-list-popup-repair').style.transform = `translateX(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('nav-arrow-popup-repair_left').style.display = 'none';
        document.getElementById('nav-arrow-popup-repair_right').style.display = '';
      } else if (currentSlide === document.querySelectorAll('.popup-repair-types-nav__item').length - 1) {
        document.getElementById('nav-arrow-popup-repair_right').style.display = 'none';
        document.getElementById('nav-arrow-popup-repair_left').style.display = '';
      } else {
        document.getElementById('nav-arrow-popup-repair_right').style.display = '';
        document.getElementById('nav-arrow-popup-repair_left').style.display = '';
      }
    });
  };

  slider();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1135) {
      slider();
    }
  });

}

export default showPopupRepairTypes;