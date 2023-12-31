import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  arrows: true,
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const gallary = new Swiper(".gallary", {
  direction: "horizontal",
  arrows: true,
  loop: true,
  slidesPerView:4,
  scrollbar: {
    el: ".swiper-scrollbar",
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
export default swiper;





