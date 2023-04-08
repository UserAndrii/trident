const refs = {
  menuBtn: document.querySelector('.menu-btn'),
  mobileMenu: document.querySelector('#mobile-menu'),
  body: document.querySelector('body')
};

refs.menuBtn.addEventListener('click', addClass);

function addClass() {
  refs.menuBtn.classList.toggle('close');
  refs.mobileMenu.classList.toggle('is-open');
  refs.body.classList.toggle('modal-open');
}