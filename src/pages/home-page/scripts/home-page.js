import "../styles/home-page.scss";

import Swiper, { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
// import "swiper/css/navigation";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  direction: "horizontal",
  effect: "coverflow",
  loop: true,
  slidesPerView: 4,
  grabCursor: true,
  spaceBetween: 8,
  updateOnWindowResize: false,
  
  // slidesOffsetAfter: 0,
  // slidesOffsetBefore: 0,
  
  // width: 256,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
    //   480: {
      //     slidesPerView: 3,
      //   }
      // }
    });
    
const swiperTop = new Swiper(".swiper-top", {
  modules: [Navigation],
  direction: "horizontal",
  effect: "coverflow",
  slidesPerView: 3,
  grabCursor: true,
  spaceBetween: 56,
  updateOnWindowResize: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   480: {
  //     slidesPerGroup: 1,
  //     slidesPerView: 1,
  //   }
  // }
});
