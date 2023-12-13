'use strict';

const siteMenu = document.querySelector(".site-menu");
const hamburgerMenuButton = document.querySelector(".fa-solid");

const menuSettings = () => {
  hamburgerMenuButton.addEventListener("click", () => {
    siteMenu.classList.add("animation-appear");
    siteMenu.classList.toggle("display-block");
  });

  siteMenu.addEventListener("click", () => {
    siteMenu.classList.remove("display-block");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      siteMenu.classList.add("animation-disappear");

      setTimeout(() => {
        siteMenu.classList.remove("display-block");
      }, 500);     
    } else {
      siteMenu.classList.remove("animation-disappear");
    }
  });
}

document.addEventListener("DOMContentLoaded", menuSettings);

const imageBoxImage = document.querySelectorAll(".image-box__image");
const popUp = document.querySelector(".popup");
const popUpClose = document.querySelector(".popup__close");

imageBoxImage.forEach((img) => {
  img.addEventListener('click' , (e) => {
    hamburgerMenuButton.classList.add("display-none");
    popUp.classList.remove("animation-disappear");
    popUp.classList.remove("popup--hidden");
    popUp.classList.add("animation-appear");
  });
});

popUpClose.addEventListener('click', () => {
  hamburgerMenuButton.classList.remove("display-none");
  popUp.classList.add("animation-disappear");
  setTimeout(() => {
    popUp.classList.add("popup--hidden");
  }, 500);  
});












