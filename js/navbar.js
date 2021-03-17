const burger = document.querySelector('.burger');
const navBar = document.querySelector('.navbar');

burger.addEventListener('click', e => {
  navBar.classList.toggle('show');
})