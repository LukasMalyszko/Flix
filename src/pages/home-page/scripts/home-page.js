import "../styles/home-page.scss";

import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";


const commonConfig = {
  modules: [Navigation],
  direction: "horizontal",
  slidesPerView: "auto",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
};

const swiperLoop = new Swiper(".nx-component__slider-content", {
  ...commonConfig,
  loop: true,
  /// jeśli slajd się zmienia, dodaje prevButton
  ///
  on: {
    slideChange: function (el) {
      const currentIndex = this.activeIndex;
      const prevButton = this.el.querySelector(".prev");
      if(currentIndex > 0){
        prevButton.dataset.button = "1";
      } else {
        prevButton.dataset.button = "0";
      }
    },
  },
});

const swiperNoLoop = new Swiper(".nx-component__slider-rated-content", {
  ...commonConfig,
  slidesOffsetAfter: 550,
  on: {
    slideChange: function (el) {
      const currentIndex = this.activeIndex;
      const prevButton = this.el.querySelector(".prev");
      const nextButton = this.el.querySelector(".next");
      console.log(currentIndex)
      if(currentIndex >= 9){
        nextButton.dataset.button = "0";
      } else if (currentIndex > 0) {
        prevButton.dataset.button = "1";
      } else {
        prevButton.dataset.button = "0";
      }
    }
  },
});

