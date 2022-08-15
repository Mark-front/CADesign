const swiper = new Swiper('.our-values__swiper', {
  // Optional parameters
  slidesPerView: 2,
  direction: 'horizontal',
  spaceBetween: 30,

  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

swiperResize(swiper, 915);