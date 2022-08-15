document.querySelectorAll('.vacancy-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('.modal-vacancy').style.display = 'block';
    tlModal.play();
  });
})

document.querySelectorAll('.modal-vacancy__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    tlModal.reverse(1);
    document.querySelector('.modal-vacancy').style.display = 'none';
    document.querySelector('.modal-response').style.display = 'block';
    tlModal.play();
  });
});

document.querySelectorAll('.swiper-slide--success-stories').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.modal-about-person').style.display = 'block';
    tlModal.play();
  });
});

document.querySelector('.for-students__feedback>.link').addEventListener('click', (ev) => {
  ev.preventDefault();
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});

document.querySelector('.contacts__join-team').addEventListener('click', () => {
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});

document.querySelector('.hero__btn').addEventListener('click', () => {
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});
