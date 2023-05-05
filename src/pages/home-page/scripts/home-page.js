import "../styles/home-page.scss";

import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
// import "swiper/css/navigation";

const swiperLoop = new Swiper(".nx-component__slider-content", {
  modules: [Navigation],
  direction: "horizontal",
  effect: "coverflow",
  loop: true,
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    /// jeśli slajd się zmienia, dodaje prevButton
    ///
    slideChange: function (el) {
      const currentIndex = this.activeIndex;
      
      const prevButton = this.el.querySelector(".prev");
      if(currentIndex > 0){
        prevButton.dataset.prev = "1";
      }
    },
  },
});


const swiperNoLoop = new Swiper(".nx-component__slider-rated-content", {
  modules: [Navigation],
  direction: "horizontal",
  effect: "coverflow",
  slidesPerView: "auto",
  grabCursor: true,
  slidesOffsetAfter: 550,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    slideChange: function (el) {
      const currentIndex = this.activeIndex;
      const prevButton = this.el.querySelector(".prev");
      console.log(prevButton)
      if(currentIndex > 0){
        prevButton.dataset.prev = "1";
      } else {
        prevButton.dataset.prev = "0";
      }
    },
  },
});
