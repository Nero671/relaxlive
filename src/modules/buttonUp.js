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

export default buttonUp;