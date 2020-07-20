"use strict";

const navbar = document.querySelector("#navbar");
const navbar_colored = "navbar_colored";
const navbar_height = navbar.getBoundingClientRect().height;
const navbar__menu = navbar.querySelector(".navbar__menu");
const navbar__toggle = document.querySelector(".navbar__toggle-btn");

const home = document.querySelector("#home");
const home__contact = document.querySelector(".home__contact");
const home__container = document.querySelector(".home__container");
const home_height = home.getBoundingClientRect().height;

const topArrow = document.querySelector(".topArrow");
const TOPARROW_SHOWUP = "topArrow_showup";

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

  //stay cursor effect in the work__categories button when click a button
  const active = document.querySelector(".category__btn.active");
  active.classList.remove("active");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
  target.classList.add("active");

  work__projects.classList.add("anim-out");
  setTimeout(() => {
    projectAll.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    work__projects.classList.remove("anim-out");
  }, 300);
});

//popup navbar__menu when click the navbar__menu-toggle(max-width: 760px)
navbar__toggle.addEventListener("click", () => {
  navbar__menu.classList.toggle("navbar__menu-down");
});

function scrollIntoView() {
  const link = event.target.dataset.link;

  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
