function tlOpacityScaleMin(elems) {//проявляется и уменьшается
  const tl = gsap.timeline();
  const arr = document.querySelectorAll(elems);
  arr.forEach(element => {
    tl.delay(.1).from(element, 0.3, {opacity: 0, scale: 1.3});
  });
  tl.pause();
  return tl;
}