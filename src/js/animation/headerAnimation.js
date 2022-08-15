const tlHeader = gsap.timeline({delay: 0.5})
  .fromTo('.header', {opacity: 0}, {opacity: 1})
  .fromTo('.header__logo', {opacity: 0, x: -20}, {opacity: 1, x: 0}, 0.1)
  .staggerFromTo(".header__nav>.nav__list>.nav__item", 0.2, {opacity: 0, x: -20}, {opacity: 1, x: 0}, 0.1)
document.addEventListener('DOMContentLoaded', () => {
  tlHeader.play()
});