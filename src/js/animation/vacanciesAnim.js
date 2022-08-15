function vacanciesAnim(elems) {
  const tlVacancies = gsap.timeline();
  tlVacancies
  .staggerFromTo(elems, .3, {opacity: 1, display: 'flex', scale: 1}, {opacity: 0, display:'none', scale: .75}).pause();
  
  return tlVacancies;
}

function listGetHeight() {
  let height;
  if(window.innerWidth > 915) {
    height = `${listCard.children[0].offsetHeight + 80 + 'px'}`;
  } else {
    height = `${listCard.children[0].offsetHeight * 2 + 80 + 'px'}`;
  }
  return height;
}

const allBtn = document.querySelector('.vacancies__more-btn');
const listCard = document.querySelector('.vacancies__list');
listCard.style.height = listGetHeight();
window.addEventListener('resize', function() {
  listCard.style.height = listGetHeight();
})

allBtn.addEventListener('click', () => {
  if(listCard.style.height === 'auto') {
    listCard.style.height = listGetHeight();
    document.querySelector('a[href*="#vacancies"]').click();
  } else {
    listCard.style.height = 'auto';
  }
});
