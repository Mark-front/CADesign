const tlHeroLeft = gsap.timeline({delay: .5});
//block hero__left to visible
tlHeroLeft.from('.hero__img', {opacity: 0, x: 100}, .2)
  //block hero__left to top
  .from(".hero__title", {opacity: 0, x: -100}, .3)
  //block hero__btn to top with easing
  .fromTo(".hero__btn", {opacity: 0, x: -100}, {opacity: 1, x: 0,  ease: "expo.out"}, .3);
