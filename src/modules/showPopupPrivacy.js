const showPopupPrivacy = () => {
  const popupPrivacy = document.querySelector('.popup-privacy');

  document.body.addEventListener('click', event => {
    if (event.target.matches('.link-privacy')) {
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

export default showPopupPrivacy;