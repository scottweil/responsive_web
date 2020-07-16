"use strict";

const navbar = document.querySelector("#navbar");
const navbar_colored = "navbar_colored";
const navbar_height = navbar.getBoundingClientRect().height;
const navbar__menu = navbar.querySelector("#navbar__menu");
const home__contact = document.querySelector(".home__contact");

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
  navbar__menu.addEventListener("click", scrollIntoView);

  // scroll to the contact section when click the home__contact button
  home__contact.addEventListener("click", scrollIntoView);
}

function scrollIntoView() {
  const link = event.target.dataset.link;

  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
init();
