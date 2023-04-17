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



const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".popup-close img");
const popupLinks = document.querySelectorAll(".popup-buttons a");

// Definir valor inicial da chave "displayPopup" como "false"
localStorage.setItem("displayPopup", false);

if (localStorage.getItem("displayPopup")) {
  setTimeout(() => {
    popupContainer.classList.add("active");
  }, 2000);
}

const stopDisplayingPopup = () => {
  localStorage.setItem("displayPopup", true);
  popupContainer.classList.remove("active");
  window.onbeforeunload = null;
};

closeBtn.addEventListener("click", stopDisplayingPopup);

popupLinks.forEach(link => {
  link.addEventListener("click", stopDisplayingPopup);
});

window.onbeforeunload = function () {
  localStorage.removeItem("displayPopup");
  return '';
};