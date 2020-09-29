const openNumber = () => {
  const headerContactsArrow = document.querySelector('.header-contacts__arrow'),
        headerContactsPhoneNumberHide = document.querySelector('.header-contacts__phone-number-hide'),
        headerContactsPhoneNumberAccord = document.querySelector('.header-contacts__phone-number-accord');
  
  headerContactsArrow.addEventListener('click', () => {
    headerContactsPhoneNumberAccord.classList.toggle('position');
    headerContactsPhoneNumberHide.classList.toggle('removeOpacity');
    headerContactsArrow.classList.toggle('image-rotate-180');
  });

};

openNumber(); 

const toggleMenu = () => {
  const popupDialogMenu = document.querySelector('.popup-dialog-menu');
  document.body.addEventListener('click', event => {
    if(event.target.matches('.menu .menu__icon')) {
      popupDialogMenu.style.transform = 'translate3d(0,0,0)';
    } else if (event.target.matches('.close-menu') || !event.target.closest('.popup-dialog-menu') || event.target.closest('.link-list-menu')) {
      popupDialogMenu.style.transform = '';
    } else if (event.target.closest('.popup-dialog-menu')) {
      if (event.target.closest('a[href^="#"]')) {
        const target = event.target.closest('a[href^="#"]');
        event.preventDefault();
        const linkID = target.getAttribute('href');
        document.querySelector(linkID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        popupDialogMenu.style.transform = '';
      }
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupDialogMenu.style.transform = '';
    }
  });

};

toggleMenu();

const buttonUp = () => {
  const buttonFooter = document.querySelector('.button-footer');
  buttonFooter.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target,
          menuLink = target.closest('.button-footer').querySelector('a[href^="#"]'),
          linkID = menuLink.getAttribute('href');
    document.querySelector(linkID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

buttonUp();

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

showPopupRepairTypes();

const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
  const elems = document.querySelectorAll(selector);

  function mask(event) {
    const keyCode = event.keyCode;
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    let i = 0,
      newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template.substr(0, this.value.length).replace(/_+/g,
      a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      this.value = newValue;
    }
    if (event.type === "blur" && this.value.length < 5) {
      this.value = "";
    }

  }

  for (const elem of elems) {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
  }
};

maskPhone('input[name="phone"]');

const showPopupPrivacy = () => {
  const popupPrivacy = document.querySelector('.popup-privacy');

  document.body.addEventListener('click', event => {
    if(event.target.matches('.link-privacy')) {
      popupPrivacy.style.visibility = 'visible';
    } else if (event.target.closest('.close.mobile-hide') || !event.target.closest('.popup-dialog-privacy') || event.target.closest('.close.tablet-hide.desktop-hide')) {
      popupPrivacy.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupPrivacy.style.visibility = '';
    }
  });
}

showPopupPrivacy();

const showFormula = () => {
  const formulaItemPopup = document.querySelectorAll('.formula-item-popup'),
        formulaItemIcons = document.querySelectorAll('.formula-item__icon-inner-text'),
        formula = document.getElementById('formula');
  
  formula.addEventListener('mouseover', event => {
    const target = event.target;
    formulaItemIcons.forEach((item, index) => {
      if(item === target) {
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
      if(item === target) {
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
      if(item.classList.contains('active-item')) {
        item.classList.remove('active-item');
      }
    });

    if(window.innerWidth <= 1024 && window.innerWidth > 575) {
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

showFormula();

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
        translate -= 150;
        navListRepair.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-repair-left_base') || target.matches('#nav-arrow-repair-left_base path') || target.matches('#nav-arrow-repair-left_base svg')) {
        indexSlide--;
        translate += 150;
        navListRepair.style.transform = `translateX(${translate}px)`;
      }

      if (indexSlide === 0) {
        document.getElementById('nav-arrow-repair-left_base').style.display = 'none';
      } else if (indexSlide === repairTypesNavItem.length) {
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

toggleRepairTypesTab();


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

portfolioSlider();


portfolioSlider();

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

showPopupPortfolio();

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

showPopupTransparency();

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

showProblems();

const showPopupDesign = () => {
  const popupDesign = document.querySelector('.popup-design'),
        popupDesignText = document.querySelectorAll('.popup-design-text'),
        navListPopupDesigns = document.getElementById('nav-list-popup-designs'),
        designsNavItem = document.querySelectorAll('#nav-list-popup-designs .designs-nav__item'),
        popupPortfolioSliderSlide = document.querySelectorAll('.popup-designs-slider__style');

  popupPortfolioSliderSlide.forEach((item, index) => {
    if (index === 0) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }

  });

  const indexSlide = 0;

  const toggleTabContent = index => {
    for (let i = 0; i < designsNavItem.length; i++) {
      if (index === i) {
        designsNavItem[i].classList.add('active');
        popupDesignText[i].classList.add('visible-content-block');
        popupPortfolioSliderSlide[i].style.display = 'block';
      } else {
        designsNavItem[i].classList.remove('active');
        popupDesignText[i].classList.remove('visible-content-block');
        popupPortfolioSliderSlide[i].style.display = 'none';
      }
    }
  };


  const slider = indexSlide => {
    const popupDesignsCounter = document.getElementById('popup-designs-counter'),
          sliderCounterContentCurrent = popupDesignsCounter.querySelector('.slider-counter-content__current'),
          sliderCounterContentTotal = popupDesignsCounter.querySelector('.slider-counter-content__total');

    sliderCounterContentTotal.textContent = `${popupPortfolioSliderSlide[indexSlide].querySelectorAll('.popup-design-slider__style-slide').length}`;

    document.getElementById('popup_design_left').style.display = 'none';
    document.getElementById('popup_design_right').style.display = '';

    let clientWidth = 0;
    clientWidth = document.querySelector('.popup-designs-slider-wrap__style').clientWidth;

    const popupDesignSliderStyleSlide = popupPortfolioSliderSlide[indexSlide].querySelectorAll('.popup-design-slider__style-slide');
    const popupDesignSliderWrapStyleSlide = popupPortfolioSliderSlide[indexSlide].querySelector('.popup-design-slider-wrap__style-slide');


    popupDesignSliderStyleSlide.forEach(item => {
      item.style.width = `${document.querySelector('.popup-designs-slider-wrap__style').clientWidth}px`;
      item.style.minWidth = `${document.querySelector('.popup-designs-slider-wrap__style').clientWidth}px`;
      item.style.overflow = 'hidden';
    });

    let currentSlide = 0,
      translate = 0;
    popupDesignSliderWrapStyleSlide.style.display = 'flex';
    popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
    popupDesignSliderWrapStyleSlide.style.transition = 'all 0.3s linear';

    sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;

    document.querySelector('.popup-design-slider-wrap').addEventListener('click', event => {
      const target = event.target;

      if (target === target.closest('#popup_design_right') || target.matches('#popup_design_right path') || target.matches('#popup_design_right svg')) {
        currentSlide++;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate -= clientWidth;
        popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#popup_design_left') || target.matches('#popup_design_left path') || target.matches('#popup_design_left svg')) {
        currentSlide--;
        sliderCounterContentCurrent.textContent = `${currentSlide + 1}`;
        translate += clientWidth;
        popupDesignSliderWrapStyleSlide.style.transform = `translateX(${translate}px)`;
      }

      if (currentSlide === 0) {
        document.getElementById('popup_design_left').style.display = 'none';
        document.getElementById('popup_design_right').style.display = '';

      } else if (currentSlide === popupDesignSliderStyleSlide.length - 1) {
        document.getElementById('popup_design_right').style.display = 'none';
        document.getElementById('popup_design_left').style.display = '';
      } else {
        document.getElementById('popup_design_right').style.display = '';
        document.getElementById('popup_design_left').style.display = '';
      }
    });
  };

  slider(indexSlide);

  navListPopupDesigns.addEventListener('click', event => {
    let target = event.target;
    target = target.closest('.designs-nav__item');
    if (target) {
      designsNavItem.forEach((item, index) => {
        if (item === target) {
          toggleTabContent(index);
          slider(index);
        }
      });
    }
  });

  document.body.addEventListener('click', event => {
    if (event.target.closest('.link-list-designs a')) {
      popupDesign.style.visibility = 'visible';
    } else if (event.target.closest('.close.mobile-hide') || event.target.closest('.close.tablet-hide') || !event.target.closest('.popup-dialog-design')) {
      popupDesign.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupDesign.style.visibility = '';
    }
  });

  const sliderTab = () => {
    let indexSlide = 0,
      translate = 0;

    document.querySelector('#nav-list-popup-designs').style.transform = `translateX(${translate}px)`;
    document.getElementById('nav-arrow-popup-designs_left').style.display = 'none';

    document.querySelector('.popup-design .nav-wrap').addEventListener('click', event => {
      const target = event.target;
      if (target === target.closest('#nav-arrow-popup-designs_right') || target.matches('#nav-arrow-popup-designs_right path') || target.matches('#nav-arrow-popup-designs_right svg')) {
        indexSlide++;
        translate -= 150;
        document.querySelector('#nav-list-popup-designs').style.transform = `translateX(${translate}px)`;
      } else if (target === target.closest('#nav-arrow-popup-designs_left') || target.matches('#nav-arrow-popup-designs_left path') || target.matches('#nav-arrow-popup-designs_left svg')) {
        indexSlide--;
        translate += 150;
        document.querySelector('#nav-list-popup-designs').style.transform = `translateX(${translate}px)`;
      }

      console.log(document.querySelectorAll('.popup-repair-types-nav__item').length);


      if (indexSlide === 0) {
        document.getElementById('nav-arrow-popup-designs_left').style.display = 'none';
        document.getElementById('nav-arrow-popup-designs_right').style.display = '';
      } else if (indexSlide === document.querySelectorAll('.popup-repair-types-nav__item').length - 1) {
        document.getElementById('nav-arrow-popup-designs_right').style.display = 'none';
        document.getElementById('nav-arrow-popup-designs_left').style.display = '';
      } else {
        document.getElementById('nav-arrow-popup-designs_right').style.display = '';
        document.getElementById('nav-arrow-popup-designs_left').style.display = '';
      }
    });
  };

  sliderTab();

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1135) {
      sliderTab();
    }
  });



};

showPopupDesign();

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

designsTabSlider();

const showPopuConsultation = () => {
  const popupConsultation = document.querySelector('.popup-consultation');

  document.body.addEventListener('click', event => {
    if (event.target.matches('.button_wide')) {
      popupConsultation.style.visibility = 'visible';
    } else if (event.target.closest('.close.close-consultation') || !event.target.closest('.feedback-wrap')) {
      popupConsultation.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupConsultation.style.visibility = '';
    }
  });
}

showPopuConsultation();

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

reviewsSlider();

const createTabs = () => {
  const schemeList = document.getElementById('scheme-list'),
        schemeNavItem = document.querySelectorAll('.scheme-nav__item'),
        schemeSliderSlide = document.querySelectorAll('.scheme-slider__slide'),
        schemeDescriptionBlock = document.querySelectorAll('.scheme-description-block');

  const toggleTabContent = index => {
    for (let i = 0; i < schemeDescriptionBlock.length; i++) {
      if(index === i) {
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

createTabs();

const accordion = () => {
  const accordion = document.querySelector('.accordion'),
    titleBlocks = accordion.querySelectorAll('.title_block');

  accordion.addEventListener('click', event => {
    if (event.target.closest('.title_block').classList.contains('msg-active')) {
      event.target.classList.remove('msg-active');
    } else {
      titleBlocks.forEach(item => {
        item.classList.remove('msg-active');
      });
      event.target.closest('.title_block').classList.add('msg-active');
    }
  });
}

accordion();

const partnersSlider = () => {
  const partners = document.getElementById('partners'),
    partnersSlider = partners.querySelector('.partners-slider'),
    partnersSliderSlide = partners.querySelectorAll('.partners-slider__slide');

  partnersSlider.style.display = 'flex';
  partners.querySelector('.wrapper').style.overflow = 'hidden';

  let currentSlide = 0,
    translate = 0,
    clientWidth = partnersSlider.clientWidth;

  if (window.innerWidth > 575) {
    clientWidth /= 3;
  }

  partnersSliderSlide.forEach(item => {
    item.style.minWidth = `${clientWidth}px`;
  });

  partners.querySelector('.wrapper').addEventListener('click', event => {
    const target = event.target;
    if (target === target.closest('#partners-arrow_right') || target.matches('#partners-arrow_right path') || target.matches('#partners-arrow_right svg')) {
      currentSlide++;
      translate -= clientWidth;
      if (window.innerWidth > 575) {
        if (currentSlide >= partnersSliderSlide.length - 2) {
          currentSlide = 0;
          translate = 0;
        }
      } else {
        if (currentSlide >= partnersSliderSlide.length) {
          currentSlide = 0;
          translate = 0;
        }
      }
      partnersSlider.style.transform = `translateX(${translate}px)`;
    } else if (target === target.closest('#partners-arrow_left') || target.matches('#partners-arrow_left path') || target.matches('#partners-arrow_left svg')) {
      currentSlide--;
      translate += clientWidth;
      if (window.innerWidth > 575) {
        if (currentSlide < 0) {
          currentSlide = partnersSliderSlide.length - 3;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }
      } else {
        if (currentSlide < 0) {
          currentSlide = partnersSliderSlide.length - 1;
          translate = 0;
          translate -= clientWidth * currentSlide;
        }
      }
      partnersSlider.style.transform = `translateX(${translate}px)`;
    }
  });
};

partnersSlider();

// import thankForm from './showPopupThank';

const sendForm = () => {
  const forms = document.querySelectorAll('form'),
    statusMessage = document.createElement('div');

  const postData = formData => fetch('./server.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  forms.forEach(item => {
    const inputs = item.querySelectorAll('input'),
      button = item.querySelector('.button');
    item.addEventListener('input', event => {
      if (event.target.matches('input[name="name"]')) {
        event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\s]/, '');
      }
    });

    inputs.forEach(item => {
      if (item.classList.contains('checkbox__input')) {
        item.removeAttribute('required');
      } else if (item.classList.contains('feedback__input-input')) {
        item.setAttribute('required', 'required');
      }
    });

    item.addEventListener('submit', event => {
      event.preventDefault();
      if (item.querySelector('.checkbox__input').checked && item.querySelector('input[name="phone"]').value.length === 18) {
        button.textContent = '';
        button.appendChild(statusMessage);
        statusMessage.classList.add('sk-rotating-plane');

        let formData = new FormData(item);

        formData = JSON.stringify(Array.from(formData).reduce((o, [k, v]) => (o[k] = v, o), {}));

        postData(formData).then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }

          button.textContent = 'Перезвоните мне';
          statusMessage.classList.remove('sk-rotating-plane');
          showPopupThank();
        }).catch(error => {
          console.error(error);
          statusMessage.classList.remove('sk-rotating-plane');
          button.textContent = 'Произошла ошибка...';
          setTimeout(() => {
            button.textContent = 'Перезвоните мне';
          }, 2000);
        });

        item.querySelector('.checkbox__label').style.borderColor = '';
        item.querySelector('.checkbox__input').checked = false;

        inputs.forEach(item => {
          item.value = '';
        });
      } else {
        item.querySelector('.checkbox__label').style.borderColor = 'red';
      }
    });
  });
};

sendForm();

const thankForm = () => {
  const popupThank = document.querySelector('.popup-thank');

  popupThank.style.visibility = 'visible';
  setTimeout(() => {
    popupThank.style.visibility = '';
  }, 3000);

  document.body.addEventListener('click', event => {
    if (event.target.closest('.close.close-thank') || !event.target.closest('.feedback-wrap')) {
      popupThank.style.visibility = '';
    }
  });

  document.body.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      popupThank.style.visibility = '';
    }
  });
};

thankForm();










