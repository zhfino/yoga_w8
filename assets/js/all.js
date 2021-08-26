"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".myRecSwiper", {
  slidesPerView: 3,
  grid: {
    rows: 2
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
var swiper = new Swiper(".myLesSwiper", {
  slidesPerView: 1.05,
  spaceBetween: 3,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
