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
  // updateOnWindowResize: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      const currentIndex = this.activeIndex;
      console.log(`Aktualny indeks slajdu: ${currentIndex}`);
    },
  },
});

// dodać lewy button

const swiperNoLoop = new Swiper(".nx-component__slider-rated-content", {
  modules: [Navigation],
  direction: "horizontal",
  effect: "coverflow",
  slidesPerView: "auto",
  grabCursor: true,
  slidesOffsetAfter: 160,
  // updateOnWindowResize: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    activeIndexChange: function () {
      // console.log("slide changed");
    },
  },
});
