let orders = document.querySelectorAll('.order');
let modal = document.querySelector('.modal');

for (let i = 0; i < orders.length; i++) {
      orders[i].addEventListener ('click', function(evt) {
        evt.preventDefault();
        modal.classList.add('modal--open');
      });
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modal.classList.remove('modal--open');
  }
});

let page = document.querySelector('.page-header');
let navToggle = document.querySelector('.page-header__toggle');
let mainNav = document.querySelector('.main-nav');
let navExtra = document.querySelector('.nav-extra');

page.classList.remove('page-header--no-js');
navToggle.classList.remove('page-header__toggle--no-js');
navToggle.classList.add('page-header__toggle--closed');

navToggle.addEventListener('click', function() {
    if (navToggle.classList.contains('page-header__toggle--closed')) {
      navToggle.classList.remove('page-header__toggle--closed');
      navToggle.classList.add('page-header__toggle--opened');
      mainNav.classList.add('main-nav--opened');
      navExtra.classList.add('nav-extra--opened');
    } else {
      navToggle.classList.add('page-header__toggle--closed');
      navToggle.classList.remove('page-header__toggle--opened');
      mainNav.classList.remove('main-nav--opened');
      navExtra.classList.remove('nav-extra--opened');
    }
  });
