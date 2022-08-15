const socialBtnOpen = document.querySelector('.socials__btn-open');
let reversed = false;

function socialClick() {
  const tlSocial = gsap.timeline();
  tlSocial.fromTo('.socials__list--header',
    {opacity: 0, pointerEvents: "none", scale: 0}, 
    {opacity: 1, pointerEvents: "auto", scale: 1});
  tlSocial.duration(.2);
  if (!reversed) {
    tlSocial.play();
  } else {
    tlSocial.reverse(1);
  }

}


socialBtnOpen.addEventListener('click',() =>{
  socialClick()
  reversed = !reversed;
});