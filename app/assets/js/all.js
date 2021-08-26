$(function() {
  console.log('Hello Bootstrap5');
});



var mySwiper = new Swiper ( ".swiper-container", {
  // 參數設定[註1]
  direction: "vertical", // 方向
  loop: true,  // 循環
  pagination: {
    el: ".swiper-pagination",  // 分頁物件
  },
  navigation: {
    nextEl: ".swiper-button-next", // 上一頁按鈕物件
    prevEl: ".swiper-button-prev", // 下一頁按鈕物件
  },
  scrollbar: {
    el: ".swiper-scrollbar", // 捲軸物件
  }
})


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});