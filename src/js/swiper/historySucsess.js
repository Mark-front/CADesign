const swiper = new Swiper('.success-stories__swiper', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  effect: 'cards',
  cardsEffect: {
    rotate: false,
    slideShadows: false,
  },

  breakpoints: {
    850: {
      direction: 'vertical',
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

window.addEventListener('resize', () => {
  swiper.update();
});
