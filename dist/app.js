"use strict";

var controller = new ScrollMagic.Controller();
var sceneServices = new ScrollMagic.Scene({
  triggerElement: "#services",
  duration: 100,
  offset: -50,
  reverse: false
}).on("enter", function () {
  tlOpacityScaleMin(".service-card").play();
}).addTo(controller);
var sceneValues = new ScrollMagic.Scene({
  triggerElement: "#our-values",
  duration: 100,
  offset: -50,
  reverse: false
}).on("enter", function () {
  tlOpacityScaleMin(".values-card").play();
}).addTo(controller);
var sceneStudents = new ScrollMagic.Scene({
  triggerElement: "#for-students",
  duration: 100,
  offset: -50,
  reverse: false
}).on("enter", function () {
  tlOpacityScaleMin(".skill").play();
}).addTo(controller);
var sceneContacts = new ScrollMagic.Scene({
  triggerElement: "#map",
  duration: 100,
  offset: -50,
  reverse: false
}).on("enter", function () {
  tlContacts.play();
}).addTo(controller);
var sceneFooter = new ScrollMagic.Scene({
  triggerElement: "#footerTrigger",
  duration: 100,
  offset: -500,
  reverse: false
}).on("enter", function () {
  tlFooter.play();
}).addTo(controller);
"use strict";

var burgerBtnOpen = document.querySelector('.burger-open');
var burgerBtnClose = document.querySelector('.burger__close');
var burgerNavLink = document.querySelectorAll('.nav--burger>.nav__list>.nav__item>.nav__link');
var tlBurger = gsap.timeline(); //container to visible

tlBurger.fromTo('.burger', {
  opacity: 0,
  display: 'none'
}, {
  opacity: 1,
  display: 'block'
}, .1) //nav to visible and right
.fromTo('.nav--burger', 0.2, {
  opacity: 0,
  x: -20
}, {
  opacity: 1,
  x: 0
}, .3).pause();
burgerBtnOpen.addEventListener('click', function () {
  return tlBurger.play();
});
burgerBtnClose.addEventListener('click', function () {
  return tlBurger.reverse(1);
});
burgerNavLink.forEach(function (element) {
  element.addEventListener('click', function () {
    tlBurger.reverse(1);
  });
});
window.addEventListener('resize', function () {
  tlBurger.restart(true).pause();
});
modalOutClose(burgerBtnOpen, document.querySelector('.burger'), tlBurger);
"use strict";

var tlContacts = gsap.timeline().from('.contacts__tel', {
  y: 50,
  opacity: 0
}, .3).from('.contacts__email', {
  y: 50,
  opacity: 0
}, .5).from('.contacts__title', {
  y: 50,
  opacity: 0
}, .7).from('.contacts__join-team', {
  y: 50,
  opacity: 0
}, .9).from('.socials__list--contacts', {
  y: 50,
  opacity: 0
}, 1.1).pause();
"use strict";

var tlFooter = gsap.timeline().fromTo('#footer__anim-container', {
  y: '200%'
}, {
  y: 0
}).pause();
"use strict";

var tlHeader = gsap.timeline({
  delay: 0.5
}).fromTo('.header', {
  opacity: 0
}, {
  opacity: 1
}).fromTo('.header__logo', {
  opacity: 0,
  x: -20
}, {
  opacity: 1,
  x: 0
}, 0.1).staggerFromTo(".header__nav>.nav__list>.nav__item", 0.2, {
  opacity: 0,
  x: -20
}, {
  opacity: 1,
  x: 0
}, 0.1);
document.addEventListener('DOMContentLoaded', function () {
  tlHeader.play();
});
"use strict";

var tlHeroLeft = gsap.timeline({
  delay: .5
}); //block hero__left to visible

tlHeroLeft.from('.hero__img', {
  opacity: 0,
  x: 100
}, .2) //block hero__left to top
.from(".hero__title", {
  opacity: 0,
  x: -100
}, .3) //block hero__btn to top with easing
.fromTo(".hero__btn", {
  opacity: 0,
  x: -100
}, {
  opacity: 1,
  x: 0,
  ease: "expo.out"
}, .3);
"use strict";

var modalBtnClose = document.querySelector('.modal__close');
var tlModal = gsap.timeline(); //container to visible

tlModal.fromTo('.modal', {
  opacity: 0,
  display: 'none'
}, {
  opacity: 1,
  display: 'block'
}, .1).fromTo('.modal__container', {
  opacity: 0,
  display: 'none',
  scale: 0
}, {
  opacity: 1,
  display: 'block',
  scale: 1
}, .2).pause();
modalBtnClose.addEventListener('click', function () {
  tlModal.reverse(1);
  document.querySelectorAll('.modal__content').forEach(function (element) {
    element.style.display = 'none';
  });
}); // modalClose(burgerBtnOpen, document.querySelector('.modal__container'), tlModal)
"use strict";

var socialBtnOpen = document.querySelector('.socials__btn-open');
var reversed = false;

function socialClick() {
  var tlSocial = gsap.timeline();
  tlSocial.fromTo('.socials__list--header', {
    opacity: 0,
    pointerEvents: "none",
    scale: 0
  }, {
    opacity: 1,
    pointerEvents: "auto",
    scale: 1
  });
  tlSocial.duration(.2);

  if (!reversed) {
    tlSocial.play();
  } else {
    tlSocial.reverse(1);
  }
}

socialBtnOpen.addEventListener('click', function () {
  socialClick();
  reversed = !reversed;
});
"use strict";

function tlOpacityScaleMin(elems) {
  //проявляется и уменьшается
  var tl = gsap.timeline();
  var arr = document.querySelectorAll(elems);
  arr.forEach(function (element) {
    tl.delay(.1).from(element, 0.3, {
      opacity: 0,
      scale: 1.3
    });
  });
  tl.pause();
  return tl;
}
"use strict";

function vacanciesAnim(elems) {
  var tlVacancies = gsap.timeline();
  tlVacancies.staggerFromTo(elems, .3, {
    opacity: 1,
    display: 'flex',
    scale: 1
  }, {
    opacity: 0,
    display: 'none',
    scale: .75
  }).pause();
  return tlVacancies;
}

function listGetHeight() {
  var height;

  if (window.innerWidth > 915) {
    height = "".concat(listCard.children[0].offsetHeight + 80 + 'px');
  } else {
    height = "".concat(listCard.children[0].offsetHeight * 2 + 80 + 'px');
  }

  return height;
}

var allBtn = document.querySelector('.vacancies__more-btn');
var listCard = document.querySelector('.vacancies__list');
listCard.style.height = listGetHeight();
window.addEventListener('resize', function () {
  listCard.style.height = listGetHeight();
});
allBtn.addEventListener('click', function () {
  if (listCard.style.height === 'auto') {
    listCard.style.height = listGetHeight();
    document.querySelector('a[href*="#vacancies"]').click();
  } else {
    listCard.style.height = 'auto';
  }
});
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
"use strict";

var center = [57.005456841351275, 40.96958420899616];

function init() {
  var map = new ymaps.Map('map', {
    center: center,
    zoom: 18
  });
  var placemark = new ymaps.Placemark([57.00631668696042, 40.96942622205543], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-icon.svg',
    iconImageSize: [70, 75],
    iconImageOffset: [0, 0]
  });
  map.controls.remove('geolocationControl'); // удаляем геолокацию

  map.controls.remove('searchControl'); // удаляем поиск

  map.controls.remove('trafficControl'); // удаляем контроль трафика

  map.controls.remove('typeSelector'); // удаляем тип

  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

  map.controls.remove('zoomControl'); // удаляем контрол зуммирования

  map.controls.remove('rulerControl'); // удаляем контрол правил

  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
"use strict";

document.querySelectorAll('.vacancy-card').forEach(function (card) {
  card.addEventListener('click', function () {
    document.querySelector('.modal-vacancy').style.display = 'block';
    tlModal.play();
  });
});
document.querySelectorAll('.modal-vacancy__btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    tlModal.reverse(1);
    document.querySelector('.modal-vacancy').style.display = 'none';
    document.querySelector('.modal-response').style.display = 'block';
    tlModal.play();
  });
});
document.querySelectorAll('.swiper-slide--success-stories').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector('.modal-about-person').style.display = 'block';
    tlModal.play();
  });
});
document.querySelector('.for-students__feedback>.link').addEventListener('click', function (ev) {
  ev.preventDefault();
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});
document.querySelector('.contacts__join-team').addEventListener('click', function () {
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});
document.querySelector('.hero__btn').addEventListener('click', function () {
  document.querySelector('.modal-response').style.display = 'block';
  tlModal.play();
});
"use strict";

function modalOutClose(modalBtn, modal, tl) {
  document.addEventListener('click', function (ev) {
    modal.style.display === "block" && !(modal !== null && modal !== void 0 && modal.contains(ev.target)) && !(modalBtn !== null && modalBtn !== void 0 && modalBtn.contains(ev.target)) ? tl.reverse(1) : null;
  });
}
"use strict";

function swiperResize(swiper, size) {
  window.addEventListener('resize', function () {
    if (window.innerWidth <= size) {
      swiper.update();
    }

    if (window.innerWidth > size) {
      var _swiper$classList;

      if ((_swiper$classList = swiper.classList) !== null && _swiper$classList !== void 0 && _swiper$classList.contains('swiper-container-initialized')) {
        swiper.destroy();
      }
    }
  });
}
"use strict";

var checkBox = document.querySelector('.default-checkbox');
var ivanovoChoice = document.querySelector('.js-ivanovo-choice');
var allChoice = document.querySelector('.js-all-choice');

function vacanciesFilter() {
  var anotherCards = document.querySelectorAll('.js-another');
  var animHidden = vacanciesAnim(anotherCards);

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
checkBox.addEventListener('input', function () {
  vacanciesFilter();
});
"use strict";
"use strict";

var playBtn = document.querySelector('.play-btn');
var video = document.querySelector('.company-video');
var played = false;

function playPause(video, played) {
  if (played) {
    video.pause();
    played = !played;
  } else {
    video.play();
    played = !played;
  }

  return played;
}

playBtn.addEventListener('click', function () {
  played = playPause(video, played);
  playBtn.classList.toggle('video__play--hidden');
});
video.addEventListener('click', function () {
  played = playPause(video, played);
  playBtn.classList.toggle('video__play--hidden');
});
"use strict";

var form = document.querySelector('#form-response');
var validationResponseUs = new JustValidate('#form-response');
validationResponseUs.addField('#form-response__vacancy', [{
  rule: 'required',
  errorMessage: 'Название не введено'
}, {
  rule: 'minLength',
  value: 2,
  errorMessage: 'Название слишком маленькое'
}, {
  rule: 'maxLength',
  value: 50,
  errorMessage: 'Название слишком большое'
}]).addField('#form-response__full-name', [{
  rule: 'required',
  errorMessage: 'ФИО не введено'
}, {
  rule: 'customRegexp',
  value: /^[ ',-\.A-Za-z\xC0-\xCF\xD1-\xD6\xD8-\xDD\xDF-\xE5\xE7-\xF6\xF8-\xFD\xFF\u0104-\u0107\u010C\u010D\u0116-\u0119\u012E\u012F\u0141-\u0144\u0152\u0160\u0161\u016A\u016B\u0172\u0173\u0178-\u017E\u2202]+$/,
  errorMessage: 'Введите фамилию, имя и отчество через пробел (Например: Иванов Петр Алексеевич)'
}, {
  rule: 'minLength',
  value: 2,
  errorMessage: 'ФИО слишком маленькое'
}, {
  rule: 'maxLength',
  value: 50,
  errorMessage: 'ФИО слишком большое'
}]).addField('#form-response__tel', [{
  rule: 'required',
  errorMessage: 'Телефон не введен'
}, {
  rule: 'minLength',
  value: 11,
  errorMessage: 'Телефон введен некорректно'
}]).addField('#form-response__email', [{
  rule: 'required',
  errorMessage: 'Телефон не введен'
}, {
  rule: 'email',
  errorMessage: 'E-mail введен некорректно'
}]).addField('#form-response__education', [{
  rule: 'required',
  errorMessage: 'Название не введено'
}, {
  rule: 'minLength',
  value: 2,
  errorMessage: 'Название слишком маленькое'
}]).addField('#form-response__address', [{
  rule: 'required',
  errorMessage: 'Адрес не введен'
}, {
  rule: 'minLength',
  value: 2,
  errorMessage: 'Адрес слишком маленький'
}]).addField('#form-response__birth-date', [{
  rule: 'required',
  errorMessage: 'Дата рождения не введена'
}]).onSuccess(function () {
  tlModal.reverse(1);
  document.querySelector('.modal-response').style.display = 'none';
  document.querySelector('.modal-shanks').style.display = 'block';
  tlModal.play();
});
;
form.querySelectorAll('input').forEach(function (el) {
  if (el.type !== 'checkbox' && el.type !== 'file' && el.type !== 'date') {
    var placeholder = el.parentElement.querySelector('.placeholder').classList;

    if (el.value !== '') {
      placeholder.add('placeholder--min');
    } else {
      placeholder.remove('placeholder--min');
    }

    el.addEventListener('input', function (ev) {
      if (ev.target.value !== '') {
        placeholder.add('placeholder--min');
      } else {
        placeholder.remove('placeholder--min');
      }
    });
  }
});
var inputData = document.querySelector('input[type="date"]');
inputData.addEventListener('input', function () {
  if (inputData.value !== '') {
    inputData.classList.add('has-value');
  } else {
    inputData.classList.remove('has-value');
  }
});
var inputFile = document.querySelector('input[type="file"]');

function deleteFile() {
  var btnDel = document.querySelector('.file__del');
  btnDel.addEventListener('click', function () {
    inputFile.parentElement.querySelector('.file__name').innerText = 'Загрузить резюме';
    inputFile.value = null;
    btnDel.style.display = 'none';
  });
}

function nameWithDots(val) {
  var valArr = val.split('.');
  val = valArr[0].slice(0, 19) + '...' + valArr[valArr.length - 1];
  return val;
}

inputFile.addEventListener('change', function () {
  var label = inputFile.parentElement;
  var value = inputFile.files.item(0).name;
  var name = value.length > 19 ? nameWithDots(value) : value;
  label.querySelector('.file__name').innerText = name;
  label.querySelector('.file__name').style.color = "var(--dark)";
  label.querySelector('.file__del').style.display = 'inline';
  deleteFile();
});
var btnSubmit = document.querySelector('.form-response__submit');
btnSubmit.disabled = true;
var checkboxPrivacy = document.getElementById('form-response__privacy-policy');
checkboxPrivacy.addEventListener('change', function () {
  if (checkboxPrivacy.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
"use strict";

var swiper = new Swiper('.about-us__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 3
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
swiperResize(swiper, 915);
"use strict";

var swiper = new Swiper('.success-stories__swiper', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  effect: 'cards',
  cardsEffect: {
    rotate: false,
    slideShadows: false
  },
  breakpoints: {
    850: {
      direction: 'vertical'
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
window.addEventListener('resize', function () {
  swiper.update();
});
"use strict";

var swiper = new Swiper('.our-team__swiper', {
  // Optional parameters
  slidesPerView: 1,
  direction: 'horizontal',
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
"use strict";

var swiper = new Swiper('.our-values__swiper', {
  // Optional parameters
  slidesPerView: 2,
  direction: 'horizontal',
  spaceBetween: 30,
  breakpoints: {
    769: {
      slidesPerView: 3
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
swiperResize(swiper, 915);
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbFNjcm9sbEFuaW0uanMiLCJidXJnZXJBbmltYXRpb24uanMiLCJjb250YWN0c0FuaW0uanMiLCJmb290ZXJBbmltLmpzIiwiaGVhZGVyQW5pbWF0aW9uLmpzIiwiaGVyb0FuaW1hdGlvbi5qcyIsIm1vZGFsQW5pbS5qcyIsInNvY2lhbHNMaXN0LmpzIiwidGxPcGFjaXR5U2NhbGVNaW4uanMiLCJ2YWNhbmNpZXNBbmltLmpzIiwiYW5jaG9yTGluay5qcyIsIm1hcC5qcyIsIm1vZGFsLmpzIiwib3V0TW9kYWxDbG9zZS5qcyIsInN3aXBlclJlc2l6ZUYuanMiLCJ2YWNhbmNpZXNGaWx0ZXIuanMiLCJ2YWxpZGF0aW9uRm9ybS5qcyIsInZpZGVvLmpzIiwicmVzcG9uc2VVc0Zvcm0uanMiLCJhYm91dFVzU3dpcGVyLmpzIiwiaGlzdG9yeVN1Y3Nlc3MuanMiLCJvdXItdGVhbS5qcyIsIm91clZhbHVlc1N3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsiY29udHJvbGxlciIsIlNjcm9sbE1hZ2ljIiwiQ29udHJvbGxlciIsInNjZW5lU2VydmljZXMiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwiZHVyYXRpb24iLCJvZmZzZXQiLCJyZXZlcnNlIiwib24iLCJ0bE9wYWNpdHlTY2FsZU1pbiIsInBsYXkiLCJhZGRUbyIsInNjZW5lVmFsdWVzIiwic2NlbmVTdHVkZW50cyIsInNjZW5lQ29udGFjdHMiLCJ0bENvbnRhY3RzIiwic2NlbmVGb290ZXIiLCJ0bEZvb3RlciIsImJ1cmdlckJ0bk9wZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdG5DbG9zZSIsImJ1cmdlck5hdkxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGxCdXJnZXIiLCJnc2FwIiwidGltZWxpbmUiLCJmcm9tVG8iLCJvcGFjaXR5IiwiZGlzcGxheSIsIngiLCJwYXVzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIndpbmRvdyIsInJlc3RhcnQiLCJtb2RhbE91dENsb3NlIiwiZnJvbSIsInkiLCJ0bEhlYWRlciIsImRlbGF5Iiwic3RhZ2dlckZyb21UbyIsInRsSGVyb0xlZnQiLCJlYXNlIiwibW9kYWxCdG5DbG9zZSIsInRsTW9kYWwiLCJzY2FsZSIsInN0eWxlIiwic29jaWFsQnRuT3BlbiIsInJldmVyc2VkIiwic29jaWFsQ2xpY2siLCJ0bFNvY2lhbCIsInBvaW50ZXJFdmVudHMiLCJlbGVtcyIsInRsIiwiYXJyIiwidmFjYW5jaWVzQW5pbSIsInRsVmFjYW5jaWVzIiwibGlzdEdldEhlaWdodCIsImhlaWdodCIsImlubmVyV2lkdGgiLCJsaXN0Q2FyZCIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwiYWxsQnRuIiwiY2xpY2siLCJhbmNob3JzIiwiYW5jaG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY2VudGVyIiwiaW5pdCIsIm1hcCIsInltYXBzIiwiTWFwIiwiem9vbSIsInBsYWNlbWFyayIsIlBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImNvbnRyb2xzIiwicmVtb3ZlIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsImdlb09iamVjdHMiLCJhZGQiLCJyZWFkeSIsImNhcmQiLCJidG4iLCJldiIsIm1vZGFsQnRuIiwibW9kYWwiLCJjb250YWlucyIsInRhcmdldCIsInN3aXBlclJlc2l6ZSIsInN3aXBlciIsInNpemUiLCJ1cGRhdGUiLCJjbGFzc0xpc3QiLCJkZXN0cm95IiwiY2hlY2tCb3giLCJpdmFub3ZvQ2hvaWNlIiwiYWxsQ2hvaWNlIiwidmFjYW5jaWVzRmlsdGVyIiwiYW5vdGhlckNhcmRzIiwiYW5pbUhpZGRlbiIsImNoZWNrZWQiLCJwYXJlbnRFbGVtZW50IiwicGxheUJ0biIsInZpZGVvIiwicGxheWVkIiwicGxheVBhdXNlIiwidG9nZ2xlIiwiZm9ybSIsInZhbGlkYXRpb25SZXNwb25zZVVzIiwiSnVzdFZhbGlkYXRlIiwiYWRkRmllbGQiLCJydWxlIiwiZXJyb3JNZXNzYWdlIiwidmFsdWUiLCJvblN1Y2Nlc3MiLCJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlucHV0RGF0YSIsImlucHV0RmlsZSIsImRlbGV0ZUZpbGUiLCJidG5EZWwiLCJpbm5lclRleHQiLCJuYW1lV2l0aERvdHMiLCJ2YWwiLCJ2YWxBcnIiLCJzcGxpdCIsInNsaWNlIiwibGVuZ3RoIiwibGFiZWwiLCJmaWxlcyIsIml0ZW0iLCJuYW1lIiwiY29sb3IiLCJidG5TdWJtaXQiLCJkaXNhYmxlZCIsImNoZWNrYm94UHJpdmFjeSIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic2Nyb2xsYmFyIiwiZWZmZWN0IiwiY2FyZHNFZmZlY3QiLCJyb3RhdGUiLCJzbGlkZVNoYWRvd3MiLCJsb29wIiwic3BhY2VCZXR3ZWVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVUsR0FBRyxJQUFJQyxXQUFXLENBQUNDLFVBQWhCLEVBQW5CO0FBRUEsSUFBTUMsYUFBYSxHQUFHLElBQUlGLFdBQVcsQ0FBQ0csS0FBaEIsQ0FBc0I7RUFBRUMsY0FBYyxFQUFFLFdBQWxCO0VBQStCQyxRQUFRLEVBQUUsR0FBekM7RUFBOENDLE1BQU0sRUFBRSxDQUFDLEVBQXZEO0VBQTJEQyxPQUFPLEVBQUM7QUFBbkUsQ0FBdEIsRUFDckJDLEVBRHFCLENBQ2xCLE9BRGtCLEVBQ1QsWUFBTTtFQUNqQkMsaUJBQWlCLENBQUMsZUFBRCxDQUFqQixDQUFtQ0MsSUFBbkM7QUFDRCxDQUhxQixFQUlyQkMsS0FKcUIsQ0FJZlosVUFKZSxDQUF0QjtBQU1BLElBQU1hLFdBQVcsR0FBRyxJQUFJ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bEJrQyxDQUFoQyxDQUFmOzs7QUNBQSxJQUFNMUIsTUFBTSxHQUFHLElBQUlnRCxNQUFKLENBQVcscUJBQVgsRUFBa0M7RUFDL0M7RUFDQUUsYUFBYSxFQUFFLENBRmdDO0VBRy9DRCxTQUFTLEVBQUUsWUFIb0M7RUFJL0NhLFlBQVksRUFBRSxFQUppQztFQU0vQ1gsV0FBVyxFQUFFO0lBQ1gsS0FBSztNQUNIRCxhQUFhLEVBQUU7SUFEWjtFQURNLENBTmtDO0VBWS9DO0VBQ0FFLFVBQVUsRUFBRTtJQUNWMUIsRUFBRSxFQUFFO0VBRE0sQ0FibUM7RUFpQi9DO0VBQ0EyQixVQUFVLEVBQUU7SUFDVkMsTUFBTSxFQUFFLHFCQURFO0lBRVZDLE1BQU0sRUFBRTtFQUZFLENBbEJtQztFQXVCL0M7RUFDQUMsU0FBUyxFQUFFO0lBQ1Q5QixFQUFFLEVBQUU7RUFESztBQXhCb0MsQ0FBbEMsQ0FBZjtBQTZCQTNCLFlBQVksQ0FBQ0MsTUFBRCxFQUFTLEdBQVQsQ0FBWjtBQzdCQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuXHJcbmNvbnN0IHNjZW5lU2VydmljZXMgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjc2VydmljZXNcIiwgZHVyYXRpb246IDEwMCwgb2Zmc2V0OiAtNTAsIHJldmVyc2U6ZmFsc2UgfSlcclxuLm9uKFwiZW50ZXJcIiwgKCkgPT4ge1xyXG4gIHRsT3BhY2l0eVNjYWxlTWluKFwiLnNlcnZpY2UtY2FyZFwiKS5wbGF5KCk7XHJcbn0pXHJcbi5hZGRUbyhjb250cm9sbGVyKTtcclxuXHJcbmNvbnN0IHNjZW5lVmFsdWVzID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI291ci12YWx1ZXNcIiwgZHVyYXRpb246IDEwMCwgb2Zmc2V0OiAtNTAsIHJldmVyc2U6ZmFsc2UgfSlcclxuLm9uKFwiZW50ZXJcIiwgKCkgPT4ge1xyXG4gIHRsT3BhY2l0eVNjYWxlTWluKFwiLnZhbHVlcy1jYXJkXCIpLnBsYXkoKTtcclxufSlcclxuLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuY29uc3Qgc2NlbmVTdHVkZW50cyA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7IHRyaWdnZXJFbGVtZW50OiBcIiNmb3Itc3R1ZGVudHNcIiwgZHVyYXRpb246IDEwMCwgb2Zmc2V0OiAtNTAsIHJldmVyc2U6ZmFsc2UgfSlcclxuLm9uKFwiZW50ZXJcIiwgKCkgPT4ge1xyXG4gIHRsT3BhY2l0eVNjYWxlTWluKFwiLnNraWxsXCIpLnBsYXkoKTtcclxufSlcclxuLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuY29uc3Qgc2NlbmVDb250YWN0cyA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7IHRyaWdnZXJFbGVtZW50OiBcIiNtYXBcIiwgZHVyYXRpb246IDEwMCwgb2Zmc2V0OiAtNTAsIHJldmVyc2U6ZmFsc2UgfSlcclxuICAub24oXCJlbnRlclwiLCAoKSA9PiB7XHJcbiAgICB0bENvbnRhY3RzLnBsYXkoKTtcclxuICB9KVxyXG4gIC5hZGRUbyhjb250cm9sbGVyKTtcclxuICBcclxuY29uc3Qgc2NlbmVGb290ZXIgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjZm9vdGVyVHJpZ2dlclwiLCBkdXJhdGlvbjogMTAwLCBvZmZzZXQ6IC01MDAsIHJldmVyc2U6ZmFsc2UgfSlcclxuICAub24oXCJlbnRlclwiLCAoKSA9PiB7XHJcbiAgICB0bEZvb3Rlci5wbGF5KCk7XHJcbiAgfSlcclxuICAuYWRkVG8oY29udHJvbGxlcik7XHJcbiIsImNvbnN0IGJ1cmdlckJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW9wZW4nKTtcbmNvbnN0IGJ1cmdlckJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcl9fY2xvc2UnKTtcbmNvbnN0IGJ1cmdlck5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LS1idXJnZXI+Lm5hdl9fbGlzdD4ubmF2X19pdGVtPi5uYXZfX2xpbmsnKTtcbmNvbnN0IHRsQnVyZ2VyID0gZ3NhcC50aW1lbGluZSgpO1xuLy9jb250YWluZXIgdG8gdmlzaWJsZVxudGxCdXJnZXIuZnJvbVRvKCcuYnVyZ2VyJywge29wYWNpdHk6IDAsIGRpc3BsYXk6J25vbmUnfSwge29wYWNpdHk6IDEsIGRpc3BsYXk6J2Jsb2NrJ30sIC4xKVxuLy9uYXYgdG8gdmlzaWJsZSBhbmQgcmlnaHRcbi5mcm9tVG8oJy5uYXYtLWJ1cmdlcicsIDAuMiwge29wYWNpdHk6IDAsIHg6IC0yMH0sIHtvcGFjaXR5OiAxLCB4OiAwfSwgLjMpLnBhdXNlKClcblxuYnVyZ2VyQnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4gdGxCdXJnZXIucGxheSgpKTtcbmJ1cmdlckJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB0bEJ1cmdlci5yZXZlcnNlKDEpKTtcblxuYnVyZ2VyTmF2TGluay5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRsQnVyZ2VyLnJldmVyc2UoMSk7XG4gIH0pXG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG4gIHRsQnVyZ2VyLnJlc3RhcnQodHJ1ZSkucGF1c2UoKTtcbn0pXG5cbm1vZGFsT3V0Q2xvc2UoYnVyZ2VyQnRuT3BlbiwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpLCB0bEJ1cmdlcik7XG5cblxuIiwibGV0IHRsQ29udGFjdHMgPSBnc2FwLnRpbWVsaW5lKClcclxuICAuZnJvbSgnLmNvbnRhY3RzX190ZWwnLCB7IHk6IDUwICwgb3BhY2l0eTogMH0sIC4zKVxyXG4gIC5mcm9tKCcuY29udGFjdHNfX2VtYWlsJywgeyB5OiA1MCAsIG9wYWNpdHk6IDB9LCAuNSlcclxuICAuZnJvbSgnLmNvbnRhY3RzX190aXRsZScsIHsgeTogNTAgLCBvcGFjaXR5OiAwfSwgLjcpXHJcbiAgLmZyb20oJy5jb250YWN0c19fam9pbi10ZWFtJywgeyB5OiA1MCAsIG9wYWNpdHk6IDB9LCAuOSlcclxuICAuZnJvbSgnLnNvY2lhbHNfX2xpc3QtLWNvbnRhY3RzJywgeyB5OiA1MCAsIG9wYWNpdHk6IDB9LCAxLjEpXHJcbiAgLnBhdXNlKCk7IiwibGV0IHRsRm9vdGVyID0gZ3NhcC50aW1lbGluZSgpXHJcbiAgLmZyb21UbygnI2Zvb3Rlcl9fYW5pbS1jb250YWluZXInLCB7eTonMjAwJSd9LCB7eTogMH0pLnBhdXNlKCk7IiwiY29uc3QgdGxIZWFkZXIgPSBnc2FwLnRpbWVsaW5lKHtkZWxheTogMC41fSlcclxuICAuZnJvbVRvKCcuaGVhZGVyJywge29wYWNpdHk6IDB9LCB7b3BhY2l0eTogMX0pXHJcbiAgLmZyb21UbygnLmhlYWRlcl9fbG9nbycsIHtvcGFjaXR5OiAwLCB4OiAtMjB9LCB7b3BhY2l0eTogMSwgeDogMH0sIDAuMSlcclxuICAuc3RhZ2dlckZyb21UbyhcIi5oZWFkZXJfX25hdj4ubmF2X19saXN0Pi5uYXZfX2l0ZW1cIiwgMC4yLCB7b3BhY2l0eTogMCwgeDogLTIwfSwge29wYWNpdHk6IDEsIHg6IDB9LCAwLjEpXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgdGxIZWFkZXIucGxheSgpXHJcbn0pOyIsImNvbnN0IHRsSGVyb0xlZnQgPSBnc2FwLnRpbWVsaW5lKHtkZWxheTogLjV9KTtcbi8vYmxvY2sgaGVyb19fbGVmdCB0byB2aXNpYmxlXG50bEhlcm9MZWZ0LmZyb20oJy5oZXJvX19pbWcnLCB7b3BhY2l0eTogMCwgeDogMTAwfSwgLjIpXG4gIC8vYmxvY2sgaGVyb19fbGVmdCB0byB0b3BcbiAgLmZyb20oXCIuaGVyb19fdGl0bGVcIiwge29wYWNpdHk6IDAsIHg6IC0xMDB9LCAuMylcbiAgLy9ibG9jayBoZXJvX19idG4gdG8gdG9wIHdpdGggZWFzaW5nXG4gIC5mcm9tVG8oXCIuaGVyb19fYnRuXCIsIHtvcGFjaXR5OiAwLCB4OiAtMTAwfSwge29wYWNpdHk6IDEsIHg6IDAsICBlYXNlOiBcImV4cG8ub3V0XCJ9LCAuMyk7XG4iLCJjb25zdCBtb2RhbEJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19jbG9zZScpO1xyXG5jb25zdCB0bE1vZGFsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4vL2NvbnRhaW5lciB0byB2aXNpYmxlXHJcbnRsTW9kYWwuZnJvbVRvKCcubW9kYWwnLCB7b3BhY2l0eTogMCwgZGlzcGxheTonbm9uZSd9LCB7b3BhY2l0eTogMSwgZGlzcGxheTonYmxvY2snfSwgLjEpXHJcbi5mcm9tVG8oJy5tb2RhbF9fY29udGFpbmVyJywge29wYWNpdHk6IDAsIGRpc3BsYXk6J25vbmUnLCBzY2FsZTogMH0sIHtvcGFjaXR5OiAxLCBkaXNwbGF5OidibG9jaycsIHNjYWxlOiAxfSwgLjIpLnBhdXNlKClcclxuXHJcbm1vZGFsQnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcclxuICB0bE1vZGFsLnJldmVyc2UoMSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19jb250ZW50JykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gbW9kYWxDbG9zZShidXJnZXJCdG5PcGVuLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRhaW5lcicpLCB0bE1vZGFsKVxyXG5cclxuXHJcbiIsImNvbnN0IHNvY2lhbEJ0bk9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc29jaWFsc19fYnRuLW9wZW4nKTtcclxubGV0IHJldmVyc2VkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzb2NpYWxDbGljaygpIHtcclxuICBjb25zdCB0bFNvY2lhbCA9IGdzYXAudGltZWxpbmUoKTtcclxuICB0bFNvY2lhbC5mcm9tVG8oJy5zb2NpYWxzX19saXN0LS1oZWFkZXInLFxyXG4gICAge29wYWNpdHk6IDAsIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLCBzY2FsZTogMH0sIFxyXG4gICAge29wYWNpdHk6IDEsIHBvaW50ZXJFdmVudHM6IFwiYXV0b1wiLCBzY2FsZTogMX0pO1xyXG4gIHRsU29jaWFsLmR1cmF0aW9uKC4yKTtcclxuICBpZiAoIXJldmVyc2VkKSB7XHJcbiAgICB0bFNvY2lhbC5wbGF5KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRsU29jaWFsLnJldmVyc2UoMSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbnNvY2lhbEJ0bk9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+e1xyXG4gIHNvY2lhbENsaWNrKClcclxuICByZXZlcnNlZCA9ICFyZXZlcnNlZDtcclxufSk7IiwiZnVuY3Rpb24gdGxPcGFjaXR5U2NhbGVNaW4oZWxlbXMpIHsvL9C/0YDQvtGP0LLQu9GP0LXRgtGB0Y8g0Lgg0YPQvNC10L3RjNGI0LDQtdGC0YHRj1xyXG4gIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gIGNvbnN0IGFyciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xyXG4gIGFyci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgdGwuZGVsYXkoLjEpLmZyb20oZWxlbWVudCwgMC4zLCB7b3BhY2l0eTogMCwgc2NhbGU6IDEuM30pO1xyXG4gIH0pO1xyXG4gIHRsLnBhdXNlKCk7XHJcbiAgcmV0dXJuIHRsO1xyXG59IiwiZnVuY3Rpb24gdmFjYW5jaWVzQW5pbShlbGVtcykge1xyXG4gIGNvbnN0IHRsVmFjYW5jaWVzID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gIHRsVmFjYW5jaWVzXHJcbiAgLnN0YWdnZXJGcm9tVG8oZWxlbXMsIC4zLCB7b3BhY2l0eTogMSwgZGlzcGxheTogJ2ZsZXgnLCBzY2FsZTogMX0sIHtvcGFjaXR5OiAwLCBkaXNwbGF5Oidub25lJywgc2NhbGU6IC43NX0pLnBhdXNlKCk7XHJcbiAgXHJcbiAgcmV0dXJuIHRsVmFjYW5jaWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaXN0R2V0SGVpZ2h0KCkge1xyXG4gIGxldCBoZWlnaHQ7XHJcbiAgaWYod2luZG93LmlubmVyV2lkdGggPiA5MTUpIHtcclxuICAgIGhlaWdodCA9IGAke2xpc3RDYXJkLmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodCArIDgwICsgJ3B4J31gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBoZWlnaHQgPSBgJHtsaXN0Q2FyZC5jaGlsZHJlblswXS5vZmZzZXRIZWlnaHQgKiAyICsgODAgKyAncHgnfWA7XHJcbiAgfVxyXG4gIHJldHVybiBoZWlnaHQ7XHJcbn1cclxuXHJcbmNvbnN0IGFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YWNhbmNpZXNfX21vcmUtYnRuJyk7XHJcbmNvbnN0IGxpc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhY2FuY2llc19fbGlzdCcpO1xyXG5saXN0Q2FyZC5zdHlsZS5oZWlnaHQgPSBsaXN0R2V0SGVpZ2h0KCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcclxuICBsaXN0Q2FyZC5zdHlsZS5oZWlnaHQgPSBsaXN0R2V0SGVpZ2h0KCk7XHJcbn0pXHJcblxyXG5hbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYobGlzdENhcmQuc3R5bGUuaGVpZ2h0ID09PSAnYXV0bycpIHtcclxuICAgIGxpc3RDYXJkLnN0eWxlLmhlaWdodCA9IGxpc3RHZXRIZWlnaHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FbaHJlZio9XCIjdmFjYW5jaWVzXCJdJykuY2xpY2soKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGlzdENhcmQuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gIH1cclxufSk7XHJcbiIsImNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWYqPVwiI1wiXScpXHJcbmZvciAobGV0IGFuY2hvciBvZiBhbmNob3JzKSB7XHJcbiAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGNvbnN0IGJsb2NrSUQgPSBhbmNob3IuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyKDEpXHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJRCkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXHJcbiAgICAgIGJsb2NrOiAnc3RhcnQnXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0iLCJjb25zdCBjZW50ZXIgPSBbNTcuMDA1NDU2ODQxMzUxMjc1LDQwLjk2OTU4NDIwODk5NjE2XTtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBsZXQgbWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgIHpvb206IDE4XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTcuMDA2MzE2Njg2OTYwNDIsNDAuOTY5NDI2MjIyMDU1NDNdLCB7fSwge1xyXG4gICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL21hcC1pY29uLnN2ZycsXHJcbiAgICAgICAgaWNvbkltYWdlU2l6ZTogWzcwLCA3NV0sXHJcbiAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbMCwgMF1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQs9C10L7Qu9C+0LrQsNGG0LjRjlxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQv9C+0LjRgdC6XHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7Qu9GMINGC0YDQsNGE0LjQutCwXHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTsgLy8g0YPQtNCw0LvRj9C10Lwg0YLQuNC/XHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC90L7Qv9C60YMg0L/QtdGA0LXRhdC+0LTQsCDQsiDQv9C+0LvQvdC+0Y3QutGA0LDQvdC90YvQuSDRgNC10LbQuNC8XHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7QuyDQt9GD0LzQvNC40YDQvtCy0LDQvdC40Y9cclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7QuyDQv9GA0LDQstC40LtcclxuICAgIG1hcC5iZWhhdmlvcnMuZGlzYWJsZShbJ3Njcm9sbFpvb20nXSk7IC8vINC+0YLQutC70Y7Rh9Cw0LXQvCDRgdC60YDQvtC70Lsg0LrQsNGA0YLRiyAo0L7Qv9GG0LjQvtC90LDQu9GM0L3QvilcclxuXHJcbiAgICBtYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VtYXJrKTtcclxufVxyXG5cclxueW1hcHMucmVhZHkoaW5pdCk7IiwiZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhY2FuY3ktY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XHJcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC12YWNhbmN5Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0bE1vZGFsLnBsYXkoKTtcclxuICB9KTtcclxufSlcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC12YWNhbmN5X19idG4nKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGxNb2RhbC5yZXZlcnNlKDEpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXZhY2FuY3knKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlc3BvbnNlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0bE1vZGFsLnBsYXkoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlLS1zdWNjZXNzLXN0b3JpZXMnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFib3V0LXBlcnNvbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGxNb2RhbC5wbGF5KCk7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvci1zdHVkZW50c19fZmVlZGJhY2s+LmxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlc3BvbnNlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGxNb2RhbC5wbGF5KCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzX19qb2luLXRlYW0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVzcG9uc2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB0bE1vZGFsLnBsYXkoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlc3BvbnNlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgdGxNb2RhbC5wbGF5KCk7XHJcbn0pO1xyXG4iLCJmdW5jdGlvbiBtb2RhbE91dENsb3NlKG1vZGFsQnRuLCBtb2RhbCwgdGwpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xyXG4gICAgKG1vZGFsLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIiAmJiAhbW9kYWw/LmNvbnRhaW5zKGV2LnRhcmdldCkmJiAhbW9kYWxCdG4/LmNvbnRhaW5zKGV2LnRhcmdldCkpID8gIFxyXG4gICAgdGwucmV2ZXJzZSgxKSA6IG51bGw7XHJcbiAgfSk7XHJcbn1cclxuIiwiZnVuY3Rpb24gc3dpcGVyUmVzaXplKHN3aXBlciwgc2l6ZSkge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gc2l6ZSkge1xyXG4gICAgICBzd2lwZXIudXBkYXRlKClcclxuICAgIH1cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IHNpemUpIHtcclxuICAgICAgaWYgKHN3aXBlci5jbGFzc0xpc3Q/LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLWluaXRpYWxpemVkJykpIHtcclxuICAgICAgICBzd2lwZXIuZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWZhdWx0LWNoZWNrYm94Jyk7XHJcbmNvbnN0IGl2YW5vdm9DaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtaXZhbm92by1jaG9pY2UnKTtcclxuY29uc3QgYWxsQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWFsbC1jaG9pY2UnKTtcclxuXHJcbmZ1bmN0aW9uIHZhY2FuY2llc0ZpbHRlcigpIHtcclxuICBjb25zdCBhbm90aGVyQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYW5vdGhlcicpO1xyXG4gIGNvbnN0IGFuaW1IaWRkZW4gPSB2YWNhbmNpZXNBbmltKGFub3RoZXJDYXJkcyk7XHJcbiAgc3dpdGNoIChjaGVja0JveC5jaGVja2VkKSB7XHJcbiAgICBjYXNlIGZhbHNlOlxyXG4gICAgICBhbmltSGlkZGVuLnBsYXkoKTtcclxuICAgICAgY2hlY2tCb3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItY2hlY2tib3hfX2xhYmVsLS1ibHVlJyk7XHJcbiAgICAgIGl2YW5vdm9DaG9pY2UuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWNoZWNrYm94X190ZXh0LS1kaXNhYmxlZCcpO1xyXG4gICAgICBhbGxDaG9pY2UuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWNoZWNrYm94X190ZXh0LS1kaXNhYmxlZCcpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIGFuaW1IaWRkZW4ucmV2ZXJzZSgxKTtcclxuICAgICAgICBjaGVja0JveC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1jaGVja2JveF9fbGFiZWwtLWJsdWUnKTtcclxuICAgICAgaXZhbm92b0Nob2ljZS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItY2hlY2tib3hfX3RleHQtLWRpc2FibGVkJyk7XHJcbiAgICAgIGFsbENob2ljZS5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItY2hlY2tib3hfX3RleHQtLWRpc2FibGVkJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYW5pbUhpZGRlbi5yZXZlcnNlKDEpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbnZhY2FuY2llc0ZpbHRlcigpO1xyXG5jaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICB2YWNhbmNpZXNGaWx0ZXIoKTtcclxufSk7XHJcbiIsIiIsImNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheS1idG4nKTtcclxuY29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGFueS12aWRlbycpO1xyXG5sZXQgcGxheWVkID0gZmFsc2U7XHJcbmZ1bmN0aW9uIHBsYXlQYXVzZSh2aWRlbywgcGxheWVkKSB7XHJcbiAgaWYgKHBsYXllZCkge1xyXG4gICAgdmlkZW8ucGF1c2UoKTtcclxuICAgIHBsYXllZCA9ICFwbGF5ZWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHZpZGVvLnBsYXkoKTtcclxuICAgIHBsYXllZCA9ICFwbGF5ZWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGxheWVkO1xyXG59XHJcbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcGxheWVkID0gcGxheVBhdXNlKHZpZGVvLCBwbGF5ZWQpO1xyXG4gIHBsYXlCdG4uY2xhc3NMaXN0LnRvZ2dsZSgndmlkZW9fX3BsYXktLWhpZGRlbicpO1xyXG59KTtcclxuXHJcbnZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBsYXllZCA9IHBsYXlQYXVzZSh2aWRlbywgcGxheWVkKTtcclxuICBwbGF5QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3ZpZGVvX19wbGF5LS1oaWRkZW4nKTtcclxufSk7IiwiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLXJlc3BvbnNlJyk7XHJcbmNvbnN0IHZhbGlkYXRpb25SZXNwb25zZVVzID0gbmV3IEp1c3RWYWxpZGF0ZSgnI2Zvcm0tcmVzcG9uc2UnKTtcclxuXHJcbnZhbGlkYXRpb25SZXNwb25zZVVzXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fdmFjYW5jeScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QsNC30LLQsNC90LjQtSDQvdC1INCy0LLQtdC00LXQvdC+JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QsNC30LLQsNC90LjQtSDRgdC70LjRiNC60L7QvCDQvNCw0LvQtdC90YzQutC+0LUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21heExlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QsNC30LLQsNC90LjQtSDRgdC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QtScsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fZnVsbC1uYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQpNCY0J4g0L3QtSDQstCy0LXQtNC10L3QvicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnY3VzdG9tUmVnZXhwJyxcclxuICAgICAgdmFsdWU6IC9eW2EtekEtWsOgw6HDosOkw6PDpcSFxI3Eh8SZw6jDqcOqw6vEl8Svw6zDrcOuw6/FgsWEw7LDs8O0w7bDtcO4w7nDusO7w7zFs8Wrw7/DvcW8xbrDscOnxI3FocW+w4DDgcOCw4TDg8OFxITEhsSMxJbEmMOIw4nDisOLw4zDjcOOw4/ErsWBxYPDksOTw5TDlsOVw5jDmcOaw5vDnMWyxarFuMOdxbvFucORw5/Dh8WSw4bEjMWgxb3iiILDsCAsLictXSskL3UsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INGE0LDQvNC40LvQuNGOLCDQuNC80Y8g0Lgg0L7RgtGH0LXRgdGC0LLQviDRh9C10YDQtdC3INC/0YDQvtCx0LXQuyAo0J3QsNC/0YDQuNC80LXRgDog0JjQstCw0L3QvtCyINCf0LXRgtGAINCQ0LvQtdC60YHQtdC10LLQuNGHKScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Ck0JjQniDRgdC70LjRiNC60L7QvCDQvNCw0LvQtdC90YzQutC+0LUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21heExlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0KTQmNCeINGB0LvQuNGI0LrQvtC8INCx0L7Qu9GM0YjQvtC1JyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNmb3JtLXJlc3BvbnNlX190ZWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Ci0LXQu9C10YTQvtC9INC90LUg0LLQstC10LTQtdC9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMTEsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Ci0LXQu9C10YTQvtC9INCy0LLQtdC00LXQvSDQvdC10LrQvtGA0YDQtdC60YLQvdC+JyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNmb3JtLXJlc3BvbnNlX19lbWFpbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0KLQtdC70LXRhNC+0L0g0L3QtSDQstCy0LXQtNC10L0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2VtYWlsJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAnRS1tYWlsINCy0LLQtdC00LXQvSDQvdC10LrQvtGA0YDQtdC60YLQvdC+JyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNmb3JtLXJlc3BvbnNlX19lZHVjYXRpb24nLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0L3QtSDQstCy0LXQtNC10L3QvicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0YHQu9C40YjQutC+0Lwg0LzQsNC70LXQvdGM0LrQvtC1JyxcclxuICAgIH1cclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2Zvcm0tcmVzcG9uc2VfX2FkZHJlc3MnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CQ0LTRgNC10YEg0L3QtSDQstCy0LXQtNC10L0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQkNC00YDQtdGBINGB0LvQuNGI0LrQvtC8INC80LDQu9C10L3RjNC60LjQuScsXHJcbiAgICB9XHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNmb3JtLXJlc3BvbnNlX19iaXJ0aC1kYXRlJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQlNCw0YLQsCDRgNC+0LbQtNC10L3QuNGPINC90LUg0LLQstC10LTQtdC90LAnLFxyXG4gICAgfVxyXG4gIF0pXHJcbiAgLm9uU3VjY2VzcygoKSA9PiB7XHJcbiAgICB0bE1vZGFsLnJldmVyc2UoMSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVzcG9uc2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXNoYW5rcycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgdGxNb2RhbC5wbGF5KCk7XHJcbiAgfSk7O1xyXG5cclxuXHJcbmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKGVsID0+IHtcclxuICBpZiAoZWwudHlwZSAhPT0gJ2NoZWNrYm94JyAmJiBlbC50eXBlICE9PSAnZmlsZScgJiYgZWwudHlwZSAhPT0gJ2RhdGUnKSB7XHJcbiAgICBjb25zdCBwbGFjZWhvbGRlciA9IGVsLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlaG9sZGVyJykuY2xhc3NMaXN0O1xyXG4gICAgaWYgKGVsLnZhbHVlICE9PSAnJykge1xyXG4gICAgICBwbGFjZWhvbGRlci5hZGQoJ3BsYWNlaG9sZGVyLS1taW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBsYWNlaG9sZGVyLnJlbW92ZSgncGxhY2Vob2xkZXItLW1pbicpO1xyXG4gICAgfVxyXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXYpID0+IHtcclxuICAgICAgaWYgKGV2LnRhcmdldC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgICBwbGFjZWhvbGRlci5hZGQoJ3BsYWNlaG9sZGVyLS1taW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwbGFjZWhvbGRlci5yZW1vdmUoJ3BsYWNlaG9sZGVyLS1taW4nKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgaW5wdXREYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImRhdGVcIl0nKTtcclxuaW5wdXREYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gIGlmIChpbnB1dERhdGEudmFsdWUgIT09ICcnKSB7XHJcbiAgICBpbnB1dERhdGEuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlucHV0RGF0YS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBpbnB1dEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpO1xyXG5mdW5jdGlvbiBkZWxldGVGaWxlKCkge1xyXG4gIGNvbnN0IGJ0bkRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWxlX19kZWwnKTtcclxuICBidG5EZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpbnB1dEZpbGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZV9fbmFtZScpLmlubmVyVGV4dCA9ICfQl9Cw0LPRgNGD0LfQuNGC0Ywg0YDQtdC30Y7QvNC1JztcclxuICAgIGlucHV0RmlsZS52YWx1ZSA9IG51bGw7XHJcbiAgICBidG5EZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KVxyXG59XHJcbmZ1bmN0aW9uIG5hbWVXaXRoRG90cyh2YWwpIHtcclxuICBjb25zdCB2YWxBcnIgPSB2YWwuc3BsaXQoJy4nKTtcclxuICB2YWwgPSB2YWxBcnJbMF0uc2xpY2UoMCwgMTkpICsgJy4uLicgKyB2YWxBcnJbdmFsQXJyLmxlbmd0aCAtIDFdO1xyXG4gIHJldHVybiB2YWw7XHJcbn1cclxuaW5wdXRGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICBjb25zdCBsYWJlbCA9IGlucHV0RmlsZS5wYXJlbnRFbGVtZW50O1xyXG4gIGNvbnN0IHZhbHVlID0gaW5wdXRGaWxlLmZpbGVzLml0ZW0oMCkubmFtZTtcclxuICBjb25zdCBuYW1lID0gdmFsdWUubGVuZ3RoID4gMTkgPyBuYW1lV2l0aERvdHModmFsdWUpIDogdmFsdWU7XHJcbiAgbGFiZWwucXVlcnlTZWxlY3RvcignLmZpbGVfX25hbWUnKS5pbm5lclRleHQgPSBuYW1lO1xyXG4gIGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5maWxlX19uYW1lJykuc3R5bGUuY29sb3IgPSBcInZhcigtLWRhcmspXCI7XHJcbiAgbGFiZWwucXVlcnlTZWxlY3RvcignLmZpbGVfX2RlbCcpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICBkZWxldGVGaWxlKCk7XHJcbn0pXHJcbmNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXJlc3BvbnNlX19zdWJtaXQnKTtcclxuYnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuY29uc3QgY2hlY2tib3hQcml2YWN5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tcmVzcG9uc2VfX3ByaXZhY3ktcG9saWN5Jyk7XHJcbmNoZWNrYm94UHJpdmFjeS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgaWYoY2hlY2tib3hQcml2YWN5LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgIGJ0blN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidG5TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxufSlcclxuIiwiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmFib3V0LXVzX19zd2lwZXInLCB7XHJcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gIHNsaWRlc1BlclZpZXc6IDIsXHJcblxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuc3dpcGVyUmVzaXplKHN3aXBlciwgOTE1KSIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zdWNjZXNzLXN0b3JpZXNfX3N3aXBlcicsIHtcclxuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBlZmZlY3Q6ICdjYXJkcycsXHJcbiAgY2FyZHNFZmZlY3Q6IHtcclxuICAgIHJvdGF0ZTogZmFsc2UsXHJcbiAgICBzbGlkZVNoYWRvd3M6IGZhbHNlLFxyXG4gIH0sXHJcblxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICA4NTA6IHtcclxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuXHJcbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICBzd2lwZXIudXBkYXRlKCk7XHJcbn0pO1xyXG4iLCJjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcub3VyLXRlYW1fX3N3aXBlcicsIHtcclxuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBsb29wOiB0cnVlLFxyXG5cclxuICAvLyBJZiB3ZSBuZWVkIHBhZ2luYXRpb25cclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgfSxcclxuXHJcbiAgLy8gTmF2aWdhdGlvbiBhcnJvd3NcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcblxyXG4gIC8vIEFuZCBpZiB3ZSBuZWVkIHNjcm9sbGJhclxyXG4gIHNjcm9sbGJhcjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXNjcm9sbGJhcicsXHJcbiAgfSxcclxufSk7IiwiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLm91ci12YWx1ZXNfX3N3aXBlcicsIHtcclxuICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgc2xpZGVzUGVyVmlldzogMixcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG5cclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY5OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgXHJcbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuc3dpcGVyUmVzaXplKHN3aXBlciwgOTE1KTsiLCIiXX0=
