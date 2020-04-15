import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';

// Install modules
Swiper.use([Navigation, Pagination]);

var mySwiper = new Swiper ('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})