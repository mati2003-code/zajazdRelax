'use strict';

const siteMenu = document.querySelector(".site-menu");
const hamburgerMenuButton = document.querySelector(".hamburger");
const hamburgerBar1 = document.querySelector(".hamburger--1");
const hamburgerBar2 = document.querySelector(".hamburger--2");
const hamburgerBar3 = document.querySelector(".hamburger--3");
const logo = document.querySelector('.logo');



let currentImgIndex;

document.addEventListener('DOMContentLoaded', () => {

  logo.classList.add('scale-logo');
  setTimeout(() => {
    logo.classList.remove('rotate-logo');
  }, 300);

  const sections = document.querySelectorAll('.site-section');

  const scrollToSection = (id) => {
    const targetSection = document.querySelector(`#${id}`);
    window.scrollTo({
      top: targetSection.offsetTop, 
      behavior: "smooth"
    });
  }

  sections.forEach((section) => {
    section.addEventListener('click', (event) => {
      const sectionId = event.currentTarget.getAttribute('id');
      scrollToSection(sectionId);
    })
  });
});

const switchHamburgertoCross = () => {
  hamburgerBar1.classList.toggle("rotate-bar-1");
  hamburgerBar2.classList.toggle("rotate-bar-3");
  hamburgerBar3.classList.toggle("rotate-bar-2");
}

const menuSettings = () => {
  hamburgerMenuButton.addEventListener("click", () => {
    switchHamburgertoCross();
    siteMenu.classList.toggle("active");
  });

  siteMenu.addEventListener("click", () => {
    switchHamburgertoCross();
    siteMenu.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", menuSettings);

const imageBoxImage = document.querySelectorAll(".image-box__image");
const popUp = document.querySelector(".popup");
const popUpClose = document.querySelector(".popup__arrow--close");
const popUpImage = document.querySelector(".popup__image");
const arrowRight = document.querySelector('.popup__arrow--right');
const arrowLeft = document.querySelector('.popup__arrow--left');

imageBoxImage.forEach((img, index) => {
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
    currentImgIndex = index;
  });

  popUp.addEventListener("click", (e) => {
    if(e.target === arrowRight || e.target === arrowLeft) {  
      return;
    } else {
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
    }
  });
});

arrowRight.addEventListener('click', () => {
  currentImgIndex === imageBoxImage.length - 1 ? currentImgIndex = 0 : currentImgIndex++;
  popUpImage.src = imageBoxImage[currentImgIndex].src;
});

arrowLeft.addEventListener('click', () => {
  currentImgIndex === 0 ? currentImgIndex = imageBoxImage.length - 1 : currentImgIndex--;
  popUpImage.src = imageBoxImage[currentImgIndex].src;
});

popUpClose.addEventListener('click', (e) => { 
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
    }, 300);
  }  else {
      scrollToTopIcon.classList.remove("animation-appear");
      scrollToTopIcon.classList.add("animation-disappear");
      setTimeout(() => {
        scrollToTopIcon.classList.remove("display-block");
      }, 300);
    }
});











