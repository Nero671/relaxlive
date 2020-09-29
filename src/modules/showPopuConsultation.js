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

export default showPopuConsultation;