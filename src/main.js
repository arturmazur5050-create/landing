import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuList.classList.toggle('active');
});

const swiper = new Swiper('.mySwiper', {
  modules: [Pagination],

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  loop: true, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const articlesSwiper = new Swiper('.articlesSwiper', {
  modules: [Pagination],

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  loop: true, 

  pagination: {
    el: '.articlesSwiper .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const customersSwiperSwiper = new Swiper('.customersSwiper', {
  modules: [Pagination],

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 16,
  loop: true,

  pagination: {
    el: '.customersSwiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 66,
    },
  },
});