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

export default thankForm;