import './style.scss'


const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuList.classList.toggle('active');
});





