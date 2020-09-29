import 'nodelist-foreach-polyfill';
import "@babel/polyfill";
import elementClosest from 'element-closest';
elementClosest(window);
import 'whatwg-fetch';
import 'array-from-polyfill';

(function (arr) {
  arr.forEach(item => {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        const argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(argItem => {
          const isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);






import openNumber from './modules/openNumber';
import toggleMenu from './modules/toggleMenu';
import buttonUp from './modules/buttonUp';
import showPopupRepairTypes from './modules/showPopupRepairTypes';
import maskPhone from './modules/maskPhone';
import showPopupPrivacy from './modules/showPopupPrivacy';
import showFormula from './modules/showFormula';
import accordion from './modules/accordion';
import thankForm from './modules/thankForm';
import sendForm from './modules/sendForm';
import showPopuConsultation from './modules/showPopuConsultation';
import showProblems from './modules/showProblems';
import reviewsSlider from './modules/reviewsSlider';
import showPopupTransparency from './modules/showPopupTransparency';
import toggleRepairTypesTab from './modules/toggleRepairTypesTab';
import showPopupPortfolio from './modules/showPopupPortfolio';
import partnersSlider from './modules/partnersSlider';
import createTabs from './modules/createTabs';
import portfolioSlider from './modules/portfolioSlider';
import designsTabSlider from './modules/designsTabSlider';
import showPopupDesign from './modules/showPopupDesign';









openNumber();
toggleMenu();
buttonUp();
showPopupRepairTypes();
maskPhone('input[name="phone"]');
showPopupPrivacy();
showFormula();
toggleRepairTypesTab();
portfolioSlider();
showPopupPortfolio();
showPopupTransparency();
showProblems();
showPopupDesign();
designsTabSlider();
showPopuConsultation();
reviewsSlider();
createTabs();
accordion();
partnersSlider();
thankForm();
sendForm();

