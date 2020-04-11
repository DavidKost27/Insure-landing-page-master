// const hamburger = document.querySelector(".hamburger");
// const mobileNav = document.querySelector(".mobile-nav");
// const openHamburger = document.getElementById("hamburger-open");
// const closeHamburger = document.getElementById("hamburger-close");

let isOpen = false;
const menu = document.getElementById("menu");
const topBar = document.getElementById("top-bar");
const body = document.getElementById("body");
const patternRight = document.getElementById("pattern-right");

// Logo and menu Icon
const menuIcon = document.getElementById("menu-icon");
const logo = document.getElementById("logo");

function toggleMenu() {
  if (isOpen === false) {
    // Menu Opens
    menu.style.visibility = "visible";
    menuIcon.src = "/images/icon-close.svg";
    topBar.style.position = "fixed";
    topBar.style.width = "calc(100% - 50px)";
    patternRight.style.visibility = "hidden";
    isOpen = !isOpen;
  } else {
    // Menu Closes
    menu.style.visibility = "hidden";
    menuIcon.src = "/images/icon-hamburger.svg";
    topBar.style.position = "relative";
    // topBar.style.padding = "0px 0px 0px 0px";
    isOpen = !isOpen;
  }
}
