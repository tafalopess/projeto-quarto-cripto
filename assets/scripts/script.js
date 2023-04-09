var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 1,
      },
      800: {
          slidesPerView: 2,
      },
      1150: {
          slidesPerView: 3,
      },
      1350: {
          slidesPerView: 4,
      } 
    },
  });
  