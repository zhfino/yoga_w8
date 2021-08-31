"use strict";

$(function () {
  console.log('Hello Bootstrap5');
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
var swiper = new Swiper(".myRecSwiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    rows: 3
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2
      }
    }
  }
});
//# sourceMappingURL=all.js.map
