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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbFNjcm9sbEFuaW0uanMiLCJidXJnZXJBbmltYXRpb24uanMiLCJjb250YWN0c0FuaW0uanMiLCJmb290ZXJBbmltLmpzIiwiaGVhZGVyQW5pbWF0aW9uLmpzIiwiaGVyb0FuaW1hdGlvbi5qcyIsIm1vZGFsQW5pbS5qcyIsInNvY2lhbHNMaXN0LmpzIiwidGxPcGFjaXR5U2NhbGVNaW4uanMiLCJ2YWNhbmNpZXNBbmltLmpzIiwiYW5jaG9yTGluay5qcyIsIm1hcC5qcyIsIm1vZGFsLmpzIiwib3V0TW9kYWxDbG9zZS5qcyIsInN3aXBlclJlc2l6ZUYuanMiLCJ2YWNhbmNpZXNGaWx0ZXIuanMiLCJ2YWxpZGF0aW9uRm9ybS5qcyIsInZpZGVvLmpzIiwicmVzcG9uc2VVc0Zvcm0uanMiLCJhYm91dFVzU3dpcGVyLmpzIiwiaGlzdG9yeVN1Y3Nlc3MuanMiLCJvdXItdGVhbS5qcyIsIm91clZhbHVlc1N3aXBlci5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsiY29udHJvbGxlciIsIlNjcm9sbE1hZ2ljIiwiQ29udHJvbGxlciIsInNjZW5lU2VydmljZXMiLCJTY2VuZSIsInRyaWdnZXJFbGVtZW50IiwiZHVyYXRpb24iLCJvZmZzZXQiLCJyZXZlcnNlIiwib24iLCJ0bE9wYWNpdHlTY2FsZU1pbiIsInBsYXkiLCJhZGRUbyIsInNjZW5lVmFsdWVzIiwic2NlbmVTdHVkZW50cyIsInNjZW5lQ29udGFjdHMiLCJ0bENvbnRhY3RzIiwic2NlbmVGb290ZXIiLCJ0bEZvb3RlciIsImJ1cmdlckJ0bk9wZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdG5DbG9zZSIsImJ1cmdlck5hdkxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGxCdXJnZXIiLCJnc2FwIiwidGltZWxpbmUiLCJmcm9tVG8iLCJvcGFjaXR5IiwiZGlzcGxheSIsIngiLCJwYXVzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsIndpbmRvdyIsInJlc3RhcnQiLCJtb2RhbE91dENsb3NlIiwiZnJvbSIsInkiLCJ0bEhlYWRlciIsImRlbGF5Iiwic3RhZ2dlckZyb21UbyIsInRsSGVyb0xlZnQiLCJlYXNlIiwibW9kYWxCdG5DbG9zZSIsInRsTW9kYWwiLCJzY2FsZSIsInN0eWxlIiwic29jaWFsQnRuT3BlbiIsInJldmVyc2VkIiwic29jaWFsQ2xpY2siLCJ0bFNvY2lhbCIsInBvaW50ZXJFdmVudHMiLCJlbGVtcyIsInRsIiwiYXJyIiwidmFjYW5jaWVzQW5pbSIsInRsVmFjYW5jaWVzIiwibGlzdEdldEhlaWdodCIsImhlaWdodCIsImlubmVyV2lkdGgiLCJsaXN0Q2FyZCIsImNoaWxkcmVuIiwib2Zmc2V0SGVpZ2h0IiwiYWxsQnRuIiwiY2xpY2siLCJhbmNob3JzIiwiYW5jaG9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYmxvY2tJRCIsImdldEF0dHJpYnV0ZSIsInN1YnN0ciIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY2VudGVyIiwiaW5pdCIsIm1hcCIsInltYXBzIiwiTWFwIiwiem9vbSIsInBsYWNlbWFyayIsIlBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImNvbnRyb2xzIiwicmVtb3ZlIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsImdlb09iamVjdHMiLCJhZGQiLCJyZWFkeSIsImNhcmQiLCJidG4iLCJldiIsIm1vZGFsQnRuIiwibW9kYWwiLCJjb250YWlucyIsInRhcmdldCIsInN3aXBlclJlc2l6ZSIsInN3aXBlciIsInNpemUiLCJ1cGRhdGUiLCJjbGFzc0xpc3QiLCJkZXN0cm95IiwiY2hlY2tCb3giLCJpdmFub3ZvQ2hvaWNlIiwiYWxsQ2hvaWNlIiwidmFjYW5jaWVzRmlsdGVyIiwiYW5vdGhlckNhcmRzIiwiYW5pbUhpZGRlbiIsImNoZWNrZWQiLCJwYXJlbnRFbGVtZW50IiwicGxheUJ0biIsInZpZGVvIiwicGxheWVkIiwicGxheVBhdXNlIiwidG9nZ2xlIiwiZm9ybSIsInZhbGlkYXRpb25SZXNwb25zZVVzIiwiSnVzdFZhbGlkYXRlIiwiYWRkRmllbGQiLCJydWxlIiwiZXJyb3JNZXNzYWdlIiwidmFsdWUiLCJvblN1Y2Nlc3MiLCJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlucHV0RGF0YSIsImlucHV0RmlsZSIsImRlbGV0ZUZpbGUiLCJidG5EZWwiLCJpbm5lclRleHQiLCJuYW1lV2l0aERvdHMiLCJ2YWwiLCJ2YWxBcnIiLCJzcGxpdCIsInNsaWNlIiwibGVuZ3RoIiwibGFiZWwiLCJmaWxlcyIsIml0ZW0iLCJuYW1lIiwiY29sb3IiLCJidG5TdWJtaXQiLCJkaXNhYmxlZCIsImNoZWNrYm94UHJpdmFjeSIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJicmVha3BvaW50cyIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic2Nyb2xsYmFyIiwiZWZmZWN0IiwiY2FyZHNFZmZlY3QiLCJyb3RhdGUiLCJzbGlkZVNoYWRvd3MiLCJsb29wIiwic3BhY2VCZXR3ZWVuIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFVBQVUsR0FBRyxJQUFJQyxXQUFXLENBQUNDLFVBQWhCLEVBQW5CO0FBRUEsSUFBTUMsYUFBYSxHQUFHLElBQUlGLFdBQVcsQ0FBQ0csS0FBaEIsQ0FBc0I7RUFBRUMsY0FBYyxFQUFFLFdBQWxCO0VBQStCQyxRQUFRLEVBQUUsR0FBekM7RUFBOENDLE1BQU0sRUFBRSxDQUFDLEVBQXZEO0VBQTJEQyxPQUFPLEVBQUM7QUFBbkUsQ0FBdEIsRUFDckJDLEVBRHFCLENBQ2xCLE9BRGtCLEVBQ1QsWUFBTTtFQUNqQkMsaUJBQWlCLENBQUMsZUFBRCxDQUFqQixDQUFtQ0MsSUFBbkM7QUFDRCxDQUhxQixFQUlyQkMsS0FKcUIsQ0FJZlosVUFKZSxDQUF0QjtBQU1BLElBQU1hLFdBQVcsR0FBRyxJQUFJ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RUFBRTtJQURaO0VBRE0sQ0FOa0M7RUFZL0M7RUFDQUUsVUFBVSxFQUFFO0lBQ1YxQixFQUFFLEVBQUU7RUFETSxDQWJtQztFQWlCL0M7RUFDQTJCLFVBQVUsRUFBRTtJQUNWQyxNQUFNLEVBQUUscUJBREU7SUFFVkMsTUFBTSxFQUFFO0VBRkUsQ0FsQm1DO0VBdUIvQztFQUNBQyxTQUFTLEVBQUU7SUFDVDlCLEVBQUUsRUFBRTtFQURLO0FBeEJvQyxDQUFsQyxDQUFmO0FBNkJBM0IsWUFBWSxDQUFDQyxNQUFELEVBQVMsR0FBVCxDQUFaO0FDN0JBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgU2Nyb2xsTWFnaWMuQ29udHJvbGxlcigpO1xyXG5cclxuY29uc3Qgc2NlbmVTZXJ2aWNlcyA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7IHRyaWdnZXJFbGVtZW50OiBcIiNzZXJ2aWNlc1wiLCBkdXJhdGlvbjogMTAwLCBvZmZzZXQ6IC01MCwgcmV2ZXJzZTpmYWxzZSB9KVxyXG4ub24oXCJlbnRlclwiLCAoKSA9PiB7XHJcbiAgdGxPcGFjaXR5U2NhbGVNaW4oXCIuc2VydmljZS1jYXJkXCIpLnBsYXkoKTtcclxufSlcclxuLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuY29uc3Qgc2NlbmVWYWx1ZXMgPSBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoeyB0cmlnZ2VyRWxlbWVudDogXCIjb3VyLXZhbHVlc1wiLCBkdXJhdGlvbjogMTAwLCBvZmZzZXQ6IC01MCwgcmV2ZXJzZTpmYWxzZSB9KVxyXG4ub24oXCJlbnRlclwiLCAoKSA9PiB7XHJcbiAgdGxPcGFjaXR5U2NhbGVNaW4oXCIudmFsdWVzLWNhcmRcIikucGxheSgpO1xyXG59KVxyXG4uYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG5jb25zdCBzY2VuZVN0dWRlbnRzID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI2Zvci1zdHVkZW50c1wiLCBkdXJhdGlvbjogMTAwLCBvZmZzZXQ6IC01MCwgcmV2ZXJzZTpmYWxzZSB9KVxyXG4ub24oXCJlbnRlclwiLCAoKSA9PiB7XHJcbiAgdGxPcGFjaXR5U2NhbGVNaW4oXCIuc2tpbGxcIikucGxheSgpO1xyXG59KVxyXG4uYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG5jb25zdCBzY2VuZUNvbnRhY3RzID0gbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHsgdHJpZ2dlckVsZW1lbnQ6IFwiI21hcFwiLCBkdXJhdGlvbjogMTAwLCBvZmZzZXQ6IC01MCwgcmV2ZXJzZTpmYWxzZSB9KVxyXG4gIC5vbihcImVudGVyXCIsICgpID0+IHtcclxuICAgIHRsQ29udGFjdHMucGxheSgpO1xyXG4gIH0pXHJcbiAgLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG4gIFxyXG5jb25zdCBzY2VuZUZvb3RlciA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7IHRyaWdnZXJFbGVtZW50OiBcIiNmb290ZXJUcmlnZ2VyXCIsIGR1cmF0aW9uOiAxMDAsIG9mZnNldDogLTUwMCwgcmV2ZXJzZTpmYWxzZSB9KVxyXG4gIC5vbihcImVudGVyXCIsICgpID0+IHtcclxuICAgIHRsRm9vdGVyLnBsYXkoKTtcclxuICB9KVxyXG4gIC5hZGRUbyhjb250cm9sbGVyKTtcclxuIiwiY29uc3QgYnVyZ2VyQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItb3BlbicpO1xuY29uc3QgYnVyZ2VyQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyX19jbG9zZScpO1xuY29uc3QgYnVyZ2VyTmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtLWJ1cmdlcj4ubmF2X19saXN0Pi5uYXZfX2l0ZW0+Lm5hdl9fbGluaycpO1xuY29uc3QgdGxCdXJnZXIgPSBnc2FwLnRpbWVsaW5lKCk7XG4vL2NvbnRhaW5lciB0byB2aXNpYmxlXG50bEJ1cmdlci5mcm9tVG8oJy5idXJnZXInLCB7b3BhY2l0eTogMCwgZGlzcGxheTonbm9uZSd9LCB7b3BhY2l0eTogMSwgZGlzcGxheTonYmxvY2snfSwgLjEpXG4vL25hdiB0byB2aXNpYmxlIGFuZCByaWdodFxuLmZyb21UbygnLm5hdi0tYnVyZ2VyJywgMC4yLCB7b3BhY2l0eTogMCwgeDogLTIwfSwge29wYWNpdHk6IDEsIHg6IDB9LCAuMykucGF1c2UoKVxuXG5idXJnZXJCdG5PcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB0bEJ1cmdlci5wbGF5KCkpO1xuYnVyZ2VyQnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHRsQnVyZ2VyLnJldmVyc2UoMSkpO1xuXG5idXJnZXJOYXZMaW5rLmZvckVhY2goZWxlbWVudCA9PiB7XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGxCdXJnZXIucmV2ZXJzZSgxKTtcbiAgfSlcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcbiAgdGxCdXJnZXIucmVzdGFydCh0cnVlKS5wYXVzZSgpO1xufSlcblxubW9kYWxPdXRDbG9zZShidXJnZXJCdG5PcGVuLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyksIHRsQnVyZ2VyKTtcblxuXG4iLCJsZXQgdGxDb250YWN0cyA9IGdzYXAudGltZWxpbmUoKVxyXG4gIC5mcm9tKCcuY29udGFjdHNfX3RlbCcsIHsgeTogNTAgLCBvcGFjaXR5OiAwfSwgLjMpXHJcbiAgLmZyb20oJy5jb250YWN0c19fZW1haWwnLCB7IHk6IDUwICwgb3BhY2l0eTogMH0sIC41KVxyXG4gIC5mcm9tKCcuY29udGFjdHNfX3RpdGxlJywgeyB5OiA1MCAsIG9wYWNpdHk6IDB9LCAuNylcclxuICAuZnJvbSgnLmNvbnRhY3RzX19qb2luLXRlYW0nLCB7IHk6IDUwICwgb3BhY2l0eTogMH0sIC45KVxyXG4gIC5mcm9tKCcuc29jaWFsc19fbGlzdC0tY29udGFjdHMnLCB7IHk6IDUwICwgb3BhY2l0eTogMH0sIDEuMSlcclxuICAucGF1c2UoKTsiLCJsZXQgdGxGb290ZXIgPSBnc2FwLnRpbWVsaW5lKClcclxuICAuZnJvbVRvKCcjZm9vdGVyX19hbmltLWNvbnRhaW5lcicsIHt5OicyMDAlJ30sIHt5OiAwfSkucGF1c2UoKTsiLCJjb25zdCB0bEhlYWRlciA9IGdzYXAudGltZWxpbmUoe2RlbGF5OiAwLjV9KVxyXG4gIC5mcm9tVG8oJy5oZWFkZXInLCB7b3BhY2l0eTogMH0sIHtvcGFjaXR5OiAxfSlcclxuICAuZnJvbVRvKCcuaGVhZGVyX19sb2dvJywge29wYWNpdHk6IDAsIHg6IC0yMH0sIHtvcGFjaXR5OiAxLCB4OiAwfSwgMC4xKVxyXG4gIC5zdGFnZ2VyRnJvbVRvKFwiLmhlYWRlcl9fbmF2Pi5uYXZfX2xpc3Q+Lm5hdl9faXRlbVwiLCAwLjIsIHtvcGFjaXR5OiAwLCB4OiAtMjB9LCB7b3BhY2l0eTogMSwgeDogMH0sIDAuMSlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICB0bEhlYWRlci5wbGF5KClcclxufSk7IiwiY29uc3QgdGxIZXJvTGVmdCA9IGdzYXAudGltZWxpbmUoe2RlbGF5OiAuNX0pO1xuLy9ibG9jayBoZXJvX19sZWZ0IHRvIHZpc2libGVcbnRsSGVyb0xlZnQuZnJvbSgnLmhlcm9fX2ltZycsIHtvcGFjaXR5OiAwLCB4OiAxMDB9LCAuMilcbiAgLy9ibG9jayBoZXJvX19sZWZ0IHRvIHRvcFxuICAuZnJvbShcIi5oZXJvX190aXRsZVwiLCB7b3BhY2l0eTogMCwgeDogLTEwMH0sIC4zKVxuICAvL2Jsb2NrIGhlcm9fX2J0biB0byB0b3Agd2l0aCBlYXNpbmdcbiAgLmZyb21UbyhcIi5oZXJvX19idG5cIiwge29wYWNpdHk6IDAsIHg6IC0xMDB9LCB7b3BhY2l0eTogMSwgeDogMCwgIGVhc2U6IFwiZXhwby5vdXRcIn0sIC4zKTtcbiIsImNvbnN0IG1vZGFsQnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJyk7XHJcbmNvbnN0IHRsTW9kYWwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbi8vY29udGFpbmVyIHRvIHZpc2libGVcclxudGxNb2RhbC5mcm9tVG8oJy5tb2RhbCcsIHtvcGFjaXR5OiAwLCBkaXNwbGF5Oidub25lJ30sIHtvcGFjaXR5OiAxLCBkaXNwbGF5OidibG9jayd9LCAuMSlcclxuLmZyb21UbygnLm1vZGFsX19jb250YWluZXInLCB7b3BhY2l0eTogMCwgZGlzcGxheTonbm9uZScsIHNjYWxlOiAwfSwge29wYWNpdHk6IDEsIGRpc3BsYXk6J2Jsb2NrJywgc2NhbGU6IDF9LCAuMikucGF1c2UoKVxyXG5cclxubW9kYWxCdG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xyXG4gIHRsTW9kYWwucmV2ZXJzZSgxKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2NvbnRlbnQnKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBtb2RhbENsb3NlKGJ1cmdlckJ0bk9wZW4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGFpbmVyJyksIHRsTW9kYWwpXHJcblxyXG5cclxuIiwiY29uc3Qgc29jaWFsQnRuT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb2NpYWxzX19idG4tb3BlbicpO1xyXG5sZXQgcmV2ZXJzZWQgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHNvY2lhbENsaWNrKCkge1xyXG4gIGNvbnN0IHRsU29jaWFsID0gZ3NhcC50aW1lbGluZSgpO1xyXG4gIHRsU29jaWFsLmZyb21UbygnLnNvY2lhbHNfX2xpc3QtLWhlYWRlcicsXHJcbiAgICB7b3BhY2l0eTogMCwgcG9pbnRlckV2ZW50czogXCJub25lXCIsIHNjYWxlOiAwfSwgXHJcbiAgICB7b3BhY2l0eTogMSwgcG9pbnRlckV2ZW50czogXCJhdXRvXCIsIHNjYWxlOiAxfSk7XHJcbiAgdGxTb2NpYWwuZHVyYXRpb24oLjIpO1xyXG4gIGlmICghcmV2ZXJzZWQpIHtcclxuICAgIHRsU29jaWFsLnBsYXkoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGxTb2NpYWwucmV2ZXJzZSgxKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuc29jaWFsQnRuT3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT57XHJcbiAgc29jaWFsQ2xpY2soKVxyXG4gIHJldmVyc2VkID0gIXJldmVyc2VkO1xyXG59KTsiLCJmdW5jdGlvbiB0bE9wYWNpdHlTY2FsZU1pbihlbGVtcykgey8v0L/RgNC+0Y/QstC70Y/QtdGC0YHRjyDQuCDRg9C80LXQvdGM0YjQsNC10YLRgdGPXHJcbiAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgY29uc3QgYXJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XHJcbiAgYXJyLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICB0bC5kZWxheSguMSkuZnJvbShlbGVtZW50LCAwLjMsIHtvcGFjaXR5OiAwLCBzY2FsZTogMS4zfSk7XHJcbiAgfSk7XHJcbiAgdGwucGF1c2UoKTtcclxuICByZXR1cm4gdGw7XHJcbn0iLCJmdW5jdGlvbiB2YWNhbmNpZXNBbmltKGVsZW1zKSB7XHJcbiAgY29uc3QgdGxWYWNhbmNpZXMgPSBnc2FwLnRpbWVsaW5lKCk7XHJcbiAgdGxWYWNhbmNpZXNcclxuICAuc3RhZ2dlckZyb21UbyhlbGVtcywgLjMsIHtvcGFjaXR5OiAxLCBkaXNwbGF5OiAnZmxleCcsIHNjYWxlOiAxfSwge29wYWNpdHk6IDAsIGRpc3BsYXk6J25vbmUnLCBzY2FsZTogLjc1fSkucGF1c2UoKTtcclxuICBcclxuICByZXR1cm4gdGxWYWNhbmNpZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxpc3RHZXRIZWlnaHQoKSB7XHJcbiAgbGV0IGhlaWdodDtcclxuICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDkxNSkge1xyXG4gICAgaGVpZ2h0ID0gYCR7bGlzdENhcmQuY2hpbGRyZW5bMF0ub2Zmc2V0SGVpZ2h0ICsgODAgKyAncHgnfWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGhlaWdodCA9IGAke2xpc3RDYXJkLmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodCAqIDIgKyA4MCArICdweCd9YDtcclxuICB9XHJcbiAgcmV0dXJuIGhlaWdodDtcclxufVxyXG5cclxuY29uc3QgYWxsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhY2FuY2llc19fbW9yZS1idG4nKTtcclxuY29uc3QgbGlzdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmFjYW5jaWVzX19saXN0Jyk7XHJcbmxpc3RDYXJkLnN0eWxlLmhlaWdodCA9IGxpc3RHZXRIZWlnaHQoKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gIGxpc3RDYXJkLnN0eWxlLmhlaWdodCA9IGxpc3RHZXRIZWlnaHQoKTtcclxufSlcclxuXHJcbmFsbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZihsaXN0Q2FyZC5zdHlsZS5oZWlnaHQgPT09ICdhdXRvJykge1xyXG4gICAgbGlzdENhcmQuc3R5bGUuaGVpZ2h0ID0gbGlzdEdldEhlaWdodCgpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYVtocmVmKj1cIiN2YWNhbmNpZXNcIl0nKS5jbGljaygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsaXN0Q2FyZC5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcbiAgfVxyXG59KTtcclxuIiwiY29uc3QgYW5jaG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZio9XCIjXCJdJylcclxuZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgY29uc3QgYmxvY2tJRCA9IGFuY2hvci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHIoMSlcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lEKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcclxuICAgICAgYmxvY2s6ICdzdGFydCdcclxuICAgIH0pXHJcbiAgfSlcclxufSIsImNvbnN0IGNlbnRlciA9IFs1Ny4wMDU0NTY4NDEzNTEyNzUsNDAuOTY5NTg0MjA4OTk2MTZdO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGxldCBtYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXHJcbiAgICAgICAgem9vbTogMThcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1Ny4wMDYzMTY2ODY5NjA0Miw0MC45Njk0MjYyMjIwNTU0M10sIHt9LCB7XHJcbiAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgIGljb25JbWFnZUhyZWY6ICdpbWcvbWFwLWljb24uc3ZnJyxcclxuICAgICAgICBpY29uSW1hZ2VTaXplOiBbNzAsIDc1XSxcclxuICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFswLCAwXVxyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INCz0LXQvtC70L7QutCw0YbQuNGOXHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INC/0L7QuNGB0LpcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INC60L7QvdGC0YDQvtC70Ywg0YLRgNCw0YTQuNC60LBcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpOyAvLyDRg9C00LDQu9GP0LXQvCDRgtC40L9cclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INC60L3QvtC/0LrRgyDQv9C10YDQtdGF0L7QtNCwINCyINC/0L7Qu9C90L7RjdC60YDQsNC90L3Ri9C5INGA0LXQttC40LxcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INC60L7QvdGC0YDQvtC7INC30YPQvNC80LjRgNC+0LLQsNC90LjRj1xyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7IC8vINGD0LTQsNC70Y/QtdC8INC60L7QvdGC0YDQvtC7INC/0YDQsNCy0LjQu1xyXG4gICAgbWFwLmJlaGF2aW9ycy5kaXNhYmxlKFsnc2Nyb2xsWm9vbSddKTsgLy8g0L7RgtC60LvRjtGH0LDQtdC8INGB0LrRgNC+0LvQuyDQutCw0YDRgtGLICjQvtC/0YbQuNC+0L3QsNC70YzQvdC+KVxyXG5cclxuICAgIG1hcC5nZW9PYmplY3RzLmFkZChwbGFjZW1hcmspO1xyXG59XHJcblxyXG55bWFwcy5yZWFkeShpbml0KTsiLCJkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmFjYW5jeS1jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcclxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXZhY2FuY3knKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRsTW9kYWwucGxheSgpO1xyXG4gIH0pO1xyXG59KVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLXZhY2FuY3lfX2J0bicpLmZvckVhY2goYnRuID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICB0bE1vZGFsLnJldmVyc2UoMSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdmFjYW5jeScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVzcG9uc2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRsTW9kYWwucGxheSgpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItc2xpZGUtLXN1Y2Nlc3Mtc3RvcmllcycpLmZvckVhY2goYnRuID0+IHtcclxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWJvdXQtcGVyc29uJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB0bE1vZGFsLnBsYXkoKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yLXN0dWRlbnRzX19mZWVkYmFjaz4ubGluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XHJcbiAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcmVzcG9uc2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB0bE1vZGFsLnBsYXkoKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2pvaW4tdGVhbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1yZXNwb25zZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHRsTW9kYWwucGxheSgpO1xyXG59KTtcclxuIiwiZnVuY3Rpb24gbW9kYWxPdXRDbG9zZShtb2RhbEJ0biwgbW9kYWwsIHRsKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcclxuICAgIChtb2RhbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIgJiYgIW1vZGFsPy5jb250YWlucyhldi50YXJnZXQpJiYgIW1vZGFsQnRuPy5jb250YWlucyhldi50YXJnZXQpKSA/ICBcclxuICAgIHRsLnJldmVyc2UoMSkgOiBudWxsO1xyXG4gIH0pO1xyXG59XHJcbiIsImZ1bmN0aW9uIHN3aXBlclJlc2l6ZShzd2lwZXIsIHNpemUpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IHNpemUpIHtcclxuICAgICAgc3dpcGVyLnVwZGF0ZSgpXHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBzaXplKSB7XHJcbiAgICAgIGlmIChzd2lwZXIuY2xhc3NMaXN0Py5jb250YWlucygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpKSB7XHJcbiAgICAgICAgc3dpcGVyLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC1jaGVja2JveCcpO1xyXG5jb25zdCBpdmFub3ZvQ2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWl2YW5vdm8tY2hvaWNlJyk7XHJcbmNvbnN0IGFsbENob2ljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1hbGwtY2hvaWNlJyk7XHJcblxyXG5mdW5jdGlvbiB2YWNhbmNpZXNGaWx0ZXIoKSB7XHJcbiAgY29uc3QgYW5vdGhlckNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWFub3RoZXInKTtcclxuICBjb25zdCBhbmltSGlkZGVuID0gdmFjYW5jaWVzQW5pbShhbm90aGVyQ2FyZHMpO1xyXG4gIHN3aXRjaCAoY2hlY2tCb3guY2hlY2tlZCkge1xyXG4gICAgY2FzZSBmYWxzZTpcclxuICAgICAgYW5pbUhpZGRlbi5wbGF5KCk7XHJcbiAgICAgIGNoZWNrQm94LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWNoZWNrYm94X19sYWJlbC0tYmx1ZScpO1xyXG4gICAgICBpdmFub3ZvQ2hvaWNlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbHRlci1jaGVja2JveF9fdGV4dC0tZGlzYWJsZWQnKTtcclxuICAgICAgYWxsQ2hvaWNlLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1jaGVja2JveF9fdGV4dC0tZGlzYWJsZWQnKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICBhbmltSGlkZGVuLnJldmVyc2UoMSk7XHJcbiAgICAgICAgY2hlY2tCb3gucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItY2hlY2tib3hfX2xhYmVsLS1ibHVlJyk7XHJcbiAgICAgIGl2YW5vdm9DaG9pY2UuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWNoZWNrYm94X190ZXh0LS1kaXNhYmxlZCcpO1xyXG4gICAgICBhbGxDaG9pY2UuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWNoZWNrYm94X190ZXh0LS1kaXNhYmxlZCcpO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGFuaW1IaWRkZW4ucmV2ZXJzZSgxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcblxyXG52YWNhbmNpZXNGaWx0ZXIoKTtcclxuY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgdmFjYW5jaWVzRmlsdGVyKCk7XHJcbn0pO1xyXG4iLCIiLCJjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktYnRuJyk7XHJcbmNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBhbnktdmlkZW8nKTtcclxubGV0IHBsYXllZCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBwbGF5UGF1c2UodmlkZW8sIHBsYXllZCkge1xyXG4gIGlmIChwbGF5ZWQpIHtcclxuICAgIHZpZGVvLnBhdXNlKCk7XHJcbiAgICBwbGF5ZWQgPSAhcGxheWVkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB2aWRlby5wbGF5KCk7XHJcbiAgICBwbGF5ZWQgPSAhcGxheWVkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBsYXllZDtcclxufVxyXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBsYXllZCA9IHBsYXlQYXVzZSh2aWRlbywgcGxheWVkKTtcclxuICBwbGF5QnRuLmNsYXNzTGlzdC50b2dnbGUoJ3ZpZGVvX19wbGF5LS1oaWRkZW4nKTtcclxufSk7XHJcblxyXG52aWRlby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwbGF5ZWQgPSBwbGF5UGF1c2UodmlkZW8sIHBsYXllZCk7XHJcbiAgcGxheUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCd2aWRlb19fcGxheS0taGlkZGVuJyk7XHJcbn0pOyIsImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1yZXNwb25zZScpO1xyXG5jb25zdCB2YWxpZGF0aW9uUmVzcG9uc2VVcyA9IG5ldyBKdXN0VmFsaWRhdGUoJyNmb3JtLXJlc3BvbnNlJyk7XHJcblxyXG52YWxpZGF0aW9uUmVzcG9uc2VVc1xyXG4gIC5hZGRGaWVsZCgnI2Zvcm0tcmVzcG9uc2VfX3ZhY2FuY3knLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0L3QtSDQstCy0LXQtNC10L3QvicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0YHQu9C40YjQutC+0Lwg0LzQsNC70LXQvdGM0LrQvtC1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogNTAsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LDQt9Cy0LDQvdC40LUg0YHQu9C40YjQutC+0Lwg0LHQvtC70YzRiNC+0LUnLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2Zvcm0tcmVzcG9uc2VfX2Z1bGwtbmFtZScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0KTQmNCeINC90LUg0LLQstC10LTQtdC90L4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcbiAgICAgIHZhbHVlOiAvXlthLXpBLVrDoMOhw6LDpMOjw6XEhcSNxIfEmcOow6nDqsOrxJfEr8Osw63DrsOvxYLFhMOyw7PDtMO2w7XDuMO5w7rDu8O8xbPFq8O/w73FvMW6w7HDp8SNxaHFvsOAw4HDgsOEw4PDhcSExIbEjMSWxJjDiMOJw4rDi8OMw43DjsOPxK7FgcWDw5LDk8OUw5bDlcOYw5nDmsObw5zFssWqxbjDncW7xbnDkcOfw4fFksOGxIzFoMW94oiCw7AgLC4nLV0rJC91LFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDRhNCw0LzQuNC70LjRjiwg0LjQvNGPINC4INC+0YLRh9C10YHRgtCy0L4g0YfQtdGA0LXQtyDQv9GA0L7QsdC10LsgKNCd0LDQv9GA0LjQvNC10YA6INCY0LLQsNC90L7QsiDQn9C10YLRgCDQkNC70LXQutGB0LXQtdCy0LjRhyknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQpNCY0J4g0YHQu9C40YjQutC+0Lwg0LzQsNC70LXQvdGM0LrQvtC1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogNTAsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Ck0JjQniDRgdC70LjRiNC60L7QvCDQsdC+0LvRjNGI0L7QtScsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fdGVsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQotC10LvQtdGE0L7QvSDQvdC1INCy0LLQtdC00LXQvScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDExLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQotC10LvQtdGE0L7QvSDQstCy0LXQtNC10L0g0L3QtdC60L7RgNGA0LXQutGC0L3QvicsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fZW1haWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Ci0LXQu9C10YTQvtC9INC90LUg0LLQstC10LTQtdC9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdlbWFpbCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ0UtbWFpbCDQstCy0LXQtNC10L0g0L3QtdC60L7RgNGA0LXQutGC0L3QvicsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fZWR1Y2F0aW9uJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndCw0LfQstCw0L3QuNC1INC90LUg0LLQstC10LTQtdC90L4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndCw0LfQstCw0L3QuNC1INGB0LvQuNGI0LrQvtC8INC80LDQu9C10L3RjNC60L7QtScsXHJcbiAgICB9XHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNmb3JtLXJlc3BvbnNlX19hZGRyZXNzJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQkNC00YDQtdGBINC90LUg0LLQstC10LTQtdC9JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JDQtNGA0LXRgSDRgdC70LjRiNC60L7QvCDQvNCw0LvQtdC90YzQutC40LknLFxyXG4gICAgfVxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjZm9ybS1yZXNwb25zZV9fYmlydGgtZGF0ZScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JTQsNGC0LAg0YDQvtC20LTQtdC90LjRjyDQvdC1INCy0LLQtdC00LXQvdCwJyxcclxuICAgIH1cclxuICBdKVxyXG4gIC5vblN1Y2Nlc3MoKCkgPT4ge1xyXG4gICAgdGxNb2RhbC5yZXZlcnNlKDEpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXJlc3BvbnNlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zaGFua3MnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRsTW9kYWwucGxheSgpO1xyXG4gIH0pOztcclxuXHJcblxyXG5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaChlbCA9PiB7XHJcbiAgaWYgKGVsLnR5cGUgIT09ICdjaGVja2JveCcgJiYgZWwudHlwZSAhPT0gJ2ZpbGUnICYmIGVsLnR5cGUgIT09ICdkYXRlJykge1xyXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSBlbC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZWhvbGRlcicpLmNsYXNzTGlzdDtcclxuICAgIGlmIChlbC52YWx1ZSAhPT0gJycpIHtcclxuICAgICAgcGxhY2Vob2xkZXIuYWRkKCdwbGFjZWhvbGRlci0tbWluJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwbGFjZWhvbGRlci5yZW1vdmUoJ3BsYWNlaG9sZGVyLS1taW4nKTtcclxuICAgIH1cclxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2KSA9PiB7XHJcbiAgICAgIGlmIChldi50YXJnZXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIuYWRkKCdwbGFjZWhvbGRlci0tbWluJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGxhY2Vob2xkZXIucmVtb3ZlKCdwbGFjZWhvbGRlci0tbWluJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGlucHV0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJkYXRlXCJdJyk7XHJcbmlucHV0RGF0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICBpZiAoaW5wdXREYXRhLnZhbHVlICE9PSAnJykge1xyXG4gICAgaW5wdXREYXRhLmNsYXNzTGlzdC5hZGQoJ2hhcy12YWx1ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnB1dERhdGEuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXZhbHVlJyk7XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgaW5wdXRGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImZpbGVcIl0nKTtcclxuZnVuY3Rpb24gZGVsZXRlRmlsZSgpIHtcclxuICBjb25zdCBidG5EZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsZV9fZGVsJyk7XHJcbiAgYnRuRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaW5wdXRGaWxlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZpbGVfX25hbWUnKS5pbm5lclRleHQgPSAn0JfQsNCz0YDRg9C30LjRgtGMINGA0LXQt9GO0LzQtSc7XHJcbiAgICBpbnB1dEZpbGUudmFsdWUgPSBudWxsO1xyXG4gICAgYnRuRGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSlcclxufVxyXG5mdW5jdGlvbiBuYW1lV2l0aERvdHModmFsKSB7XHJcbiAgY29uc3QgdmFsQXJyID0gdmFsLnNwbGl0KCcuJyk7XHJcbiAgdmFsID0gdmFsQXJyWzBdLnNsaWNlKDAsIDE5KSArICcuLi4nICsgdmFsQXJyW3ZhbEFyci5sZW5ndGggLSAxXTtcclxuICByZXR1cm4gdmFsO1xyXG59XHJcbmlucHV0RmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgY29uc3QgbGFiZWwgPSBpbnB1dEZpbGUucGFyZW50RWxlbWVudDtcclxuICBjb25zdCB2YWx1ZSA9IGlucHV0RmlsZS5maWxlcy5pdGVtKDApLm5hbWU7XHJcbiAgY29uc3QgbmFtZSA9IHZhbHVlLmxlbmd0aCA+IDE5ID8gbmFtZVdpdGhEb3RzKHZhbHVlKSA6IHZhbHVlO1xyXG4gIGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5maWxlX19uYW1lJykuaW5uZXJUZXh0ID0gbmFtZTtcclxuICBsYWJlbC5xdWVyeVNlbGVjdG9yKCcuZmlsZV9fbmFtZScpLnN0eWxlLmNvbG9yID0gXCJ2YXIoLS1kYXJrKVwiO1xyXG4gIGxhYmVsLnF1ZXJ5U2VsZWN0b3IoJy5maWxlX19kZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgZGVsZXRlRmlsZSgpO1xyXG59KVxyXG5jb25zdCBidG5TdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1yZXNwb25zZV9fc3VibWl0Jyk7XHJcbmJ0blN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcbmNvbnN0IGNoZWNrYm94UHJpdmFjeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLXJlc3BvbnNlX19wcml2YWN5LXBvbGljeScpO1xyXG5jaGVja2JveFByaXZhY3kuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gIGlmKGNoZWNrYm94UHJpdmFjeS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICBidG5TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9IGVsc2Uge1xyXG4gICAgYnRuU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuICB9XHJcbn0pXHJcbiIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5hYm91dC11c19fc3dpcGVyJywge1xyXG4gIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcclxuICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICBzbGlkZXNQZXJWaWV3OiAyLFxyXG5cclxuICBicmVha3BvaW50czoge1xyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICB9LFxyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuXHJcbiAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICB9LFxyXG59KTtcclxuXHJcbnN3aXBlclJlc2l6ZShzd2lwZXIsIDkxNSkiLCJjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3VjY2Vzcy1zdG9yaWVzX19zd2lwZXInLCB7XHJcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgZWZmZWN0OiAnY2FyZHMnLFxyXG4gIGNhcmRzRWZmZWN0OiB7XHJcbiAgICByb3RhdGU6IGZhbHNlLFxyXG4gICAgc2xpZGVTaGFkb3dzOiBmYWxzZSxcclxuICB9LFxyXG5cclxuICBicmVha3BvaW50czoge1xyXG4gICAgODUwOiB7XHJcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcblxyXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICB9LFxyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuXHJcbiAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICB9LFxyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgc3dpcGVyLnVwZGF0ZSgpO1xyXG59KTtcclxuIiwiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLm91ci10ZWFtX19zd2lwZXInLCB7XHJcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgbG9vcDogdHJ1ZSxcclxuXHJcbiAgLy8gSWYgd2UgbmVlZCBwYWdpbmF0aW9uXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gIH0sXHJcblxyXG4gIC8vIE5hdmlnYXRpb24gYXJyb3dzXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG5cclxuICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXI6IHtcclxuICAgIGVsOiAnLnN3aXBlci1zY3JvbGxiYXInLFxyXG4gIH0sXHJcbn0pOyIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5vdXItdmFsdWVzX19zd2lwZXInLCB7XHJcbiAgLy8gT3B0aW9uYWwgcGFyYW1ldGVyc1xyXG4gIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDc2OToge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIFxyXG4gIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxyXG4gIHBhZ2luYXRpb246IHtcclxuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICB9LFxyXG5cclxuICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuXHJcbiAgLy8gQW5kIGlmIHdlIG5lZWQgc2Nyb2xsYmFyXHJcbiAgc2Nyb2xsYmFyOiB7XHJcbiAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcclxuICB9LFxyXG59KTtcclxuXHJcbnN3aXBlclJlc2l6ZShzd2lwZXIsIDkxNSk7IiwiIl19
