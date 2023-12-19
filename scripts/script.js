'use strict';

const siteMenu = document.querySelector(".site-menu");
const hamburgerMenuButton = document.querySelector(".hamburger");
const hamburgerBar1 = document.querySelector(".hamburger--1")
const hamburgerBar2 = document.querySelector(".hamburger--2")
const hamburgerBar3 = document.querySelector(".hamburger--3")

const menuSettings = () => {
  hamburgerMenuButton.addEventListener("click", () => {
    hamburgerBar1.classList.toggle("rotate-bar-1");
    hamburgerBar2.classList.toggle("rotate-bar-3");
    hamburgerBar3.classList.toggle("rotate-bar-2");
    siteMenu.classList.toggle("active");
  });

  siteMenu.addEventListener("click", () => {

    siteMenu.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", menuSettings);

const imageBoxImage = document.querySelectorAll(".image-box__image");
const popUp = document.querySelector(".popup");
const popUpClose = document.querySelector(".popup__close");
const popUpImage = document.querySelector(".popup__image")

imageBoxImage.forEach((img) => {
  img.addEventListener('click' , (e) => {
    scrollToTopIcon.classList.add("animation-disappear");
    setTimeout(() => {
      scrollToTopIcon.classList.remove("display-block");
    }, 500);
    hamburgerMenuButton.classList.add("display-none");
    popUp.classList.remove("animation-disappear");
    popUp.classList.remove("popup--hidden");
    popUp.classList.add("animation-appear");
    popUpImage.src = e.target.src;
  });
  popUp.addEventListener("click", () => {
    scrollToTopIcon.classList.remove("animation-disappear");
    scrollToTopIcon.classList.add("animation-appear");
    setTimeout(() => {
      scrollToTopIcon.classList.add("display-block");
    }, 500); 
    hamburgerMenuButton.classList.remove("display-none");
    popUp.classList.remove("animation-appear");
    popUp.classList.add("animation-disappear");
    setTimeout(() => {
      popUp.classList.add("popup--hidden");
    }, 500);
  });
});

popUpClose.addEventListener('click', () => {  
  popUp.classList.remove("animation-disappear");
  popUp.classList.add("animation-appear");
  setTimeout(() => {
    popUp.classList.add("popup--hidden");
  }, 500);  
});

const scrollToTopIcon = document.querySelector(".fa-chevron-up");

scrollToTopIcon.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener("scroll", () => {
  const headerHeight = document.querySelector('.site-header').offsetHeight;

  if (window.scrollY > headerHeight - 10) {
    scrollToTopIcon.classList.remove("animation-disappear");
    scrollToTopIcon.classList.add("animation-appear");
    setTimeout(() => {
      scrollToTopIcon.classList.add("display-block");
    }, 500);
  }  else {
      scrollToTopIcon.classList.remove("animation-appear");
      scrollToTopIcon.classList.add("animation-disappear");
      setTimeout(() => {
        scrollToTopIcon.classList.remove("display-block");
      }, 500);
    }
})










