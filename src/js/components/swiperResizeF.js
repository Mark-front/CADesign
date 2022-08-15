function swiperResize(swiper, size) {
  window.addEventListener('resize', () => {
    if (window.innerWidth <= size) {
      swiper.update()
    }
    if (window.innerWidth > size) {
      if (swiper.classList?.contains('swiper-container-initialized')) {
        swiper.destroy();
      }
    }
  });
}