let order = document.querySelector('.order');
let modal = document.querySelector('.modal');

order.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal--open');
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modal.classList.remove('modal--open');
  }
});
