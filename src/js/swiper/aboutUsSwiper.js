const swiper = new Swiper('.about-us__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,

  breakpoints: {
    768: {
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

swiperResize(swiper, 915)