"use strict";

const navbar = document.querySelector("#navbar");
const navbar_colored = "navbar_colored";
const navbar_height = navbar.getBoundingClientRect().height;
const navbar__menu = navbar.querySelector("#navbar__menu");

const home = document.querySelector("#home");
const home__contact = document.querySelector(".home__contact");
const home__container = document.querySelector(".home__container");
const home_height = home.getBoundingClientRect().height;

const topArrow = document.querySelector(".topArrow");
const TOPARROW_SHOWUP = "topArrow_showup";

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

  // fade out home when scroll down
  document.addEventListener("scroll", () => {
    home__container.style.opacity = 1 - window.scrollY / home_height;
  });

  // topArrow botton
  document.addEventListener("scroll", () => {
    if (window.scrollY > home_height) {
      topArrow.classList.add(TOPARROW_SHOWUP);
    } else {
      topArrow.classList.remove(TOPARROW_SHOWUP);
    }
  });

  topArrow.addEventListener("click", scrollIntoView);

  // projects filter
  const work__categories = document.querySelector(".work__categories");
  const work__projects = document.querySelector(".work__projects");
  const projectAll = document.querySelectorAll(".project");

  work__categories.addEventListener("click", (event) => {
    const filter =
      event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if (filter == null) {
      return;
    }

    projectAll.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
  });
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
