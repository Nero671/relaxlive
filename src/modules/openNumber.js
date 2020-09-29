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

export default openNumber;