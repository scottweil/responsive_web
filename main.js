"use strict";

// make navbar transparent and colored when scrolled
const navbar = document.querySelector("#navbar");
const navbar_colored = "navbar_colored";
const navbar_height = navbar.getBoundingClientRect().height;

function init() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > navbar_height) {
      navbar.classList.add(navbar_colored);
    } else {
      navbar.classList.remove(navbar_colored);
    }
  });
}

init();
