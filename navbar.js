"use strict";

const navbar = document.querySelector("#navbar");
const navbar_colored = "navbar_colored";
const navbar_height = navbar.getBoundingClientRect().height;

const navbar__menu = navbar.querySelector("#navbar__menu");

function init() {
  // make navbar transparent and colored when scrolled
  document.addEventListener("scroll", () => {
    if (window.scrollY > navbar_height) {
      navbar.classList.add(navbar_colored);
    } else {
      navbar.classList.remove(navbar_colored);
    }
  });

  // handle scrolling when tapping on the navbar__menu_item
  navbar__menu.addEventListener("click", (event) => {
    const target = event.target;
    const link = event.target.dataset.link;
    if (link == null) {
      return;
    }

    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({ behavior: "smooth" });
  });
}

init();
