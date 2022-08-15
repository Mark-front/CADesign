const burgerBtnOpen = document.querySelector('.burger-open');
const burgerBtnClose = document.querySelector('.burger__close');
const burgerNavLink = document.querySelectorAll('.nav--burger>.nav__list>.nav__item>.nav__link');
const tlBurger = gsap.timeline();
//container to visible
tlBurger.fromTo('.burger', {opacity: 0, display:'none'}, {opacity: 1, display:'block'}, .1)
//nav to visible and right
.fromTo('.nav--burger', 0.2, {opacity: 0, x: -20}, {opacity: 1, x: 0}, .3).pause()

burgerBtnOpen.addEventListener('click',() => tlBurger.play());
burgerBtnClose.addEventListener('click',() => tlBurger.reverse(1));

burgerNavLink.forEach(element => {
  element.addEventListener('click', () => {
    tlBurger.reverse(1);
  })
});

window.addEventListener('resize', function(){
  tlBurger.restart(true).pause();
})

modalOutClose(burgerBtnOpen, document.querySelector('.burger'), tlBurger);


