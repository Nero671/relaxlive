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

export default accordion;

