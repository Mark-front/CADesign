const modalBtnClose = document.querySelector('.modal__close');
const tlModal = gsap.timeline();
//container to visible
tlModal.fromTo('.modal', {opacity: 0, display:'none'}, {opacity: 1, display:'block'}, .1)
.fromTo('.modal__container', {opacity: 0, display:'none', scale: 0}, {opacity: 1, display:'block', scale: 1}, .2).pause()

modalBtnClose.addEventListener('click',() => {
  tlModal.reverse(1);
  document.querySelectorAll('.modal__content').forEach(element => {
    element.style.display = 'none';
  });
});


// modalClose(burgerBtnOpen, document.querySelector('.modal__container'), tlModal)


