import "../styles/home-page.scss";

import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";

const commonConfig = {
  modules: [Navigation],
  direction: "horizontal",
  slidesPerView: "auto",
  grabCursor: true,
  allowSlidePrev: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const swiperLoop = new Swiper(".nx-component__slider-content", {
  ...commonConfig,
  loop: true,
  spaceBetween: 8,

  /// jeśli slajd się zmienia, dodaje prevButton
  ///
  on: {
    activeIndexChange: function (el) {
      this.allowSlidePrev = true;
      const currentIndex = this.realIndex;
      const prevButton = this.el.querySelector(".prev");
      if (currentIndex > 0) {
        prevButton.dataset.button = "1";
        sliderWrapper.toggleAttribute("data-delete-margin");
      } else {
        prevButton.dataset.button = "0";
        sliderWrapper.removeAttribute("data-delete-margin");
      }
    },
  },
});

const swiperNoLoop = new Swiper(".nx-component__slider-rated-content", {
  ...commonConfig,
  slidesOffsetAfter: 250,
  breakpoints: {
    480: {
      slidesOffsetAfter:100,
    },
  },

  on: {
    slideChange: function (el) {
      this.allowSlidePrev = true;
      const currentIndex = this.realIndex;
      const nextButton = this.el.querySelector(".next");
      const prevButton = this.el.querySelector(".prev");
      if (currentIndex > 0) {
        prevButton.dataset.button = "1";
      } else {
        prevButton.dataset.button = "0";
      }
      if (!this.isEnd) {
        nextButton.dataset.button = "1";
      }
    },
    reachEnd: function (el) {
      const nextButton = this.el.querySelector(".next");
      nextButton.dataset.button = "0";
    },
  },
});
