const checkBox = document.querySelector('.default-checkbox');
const ivanovoChoice = document.querySelector('.js-ivanovo-choice');
const allChoice = document.querySelector('.js-all-choice');

function vacanciesFilter() {
  const anotherCards = document.querySelectorAll('.js-another');
  const animHidden = vacanciesAnim(anotherCards);
  switch (checkBox.checked) {
    case false:
      animHidden.play();
      checkBox.parentElement.classList.add('filter-checkbox__label--blue');
      ivanovoChoice.classList.remove('filter-checkbox__text--disabled');
      allChoice.classList.add('filter-checkbox__text--disabled');
      break;
      case true:
        animHidden.reverse(1);
        checkBox.parentElement.classList.remove('filter-checkbox__label--blue');
      ivanovoChoice.classList.add('filter-checkbox__text--disabled');
      allChoice.classList.remove('filter-checkbox__text--disabled');
      break;
    default:
      animHidden.reverse(1);
      break;
  }
}

vacanciesFilter();
checkBox.addEventListener('input', () => {
  vacanciesFilter();
});
