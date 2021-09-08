const header = document.querySelector("header");
const bar = document.querySelector(".logo i");
const nav = document.querySelector(".header-nav");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", (e) => {
  window.scrollY > nav.clientHeight + 100
    ? header.classList.add("nav_fixed")
    : header.classList.remove("nav_fixed");
});

bar.addEventListener("click", (e) => {
  nav.classList.toggle("show-link");
});

const contents = document.querySelectorAll(".gallery__text");
contents.forEach((content) => {
  content.addEventListener("mouseover", (e) => {
    // e.target.previousElementSibling.style.transform = "scale(1.1)";
  });
});

const imageLinks = document.querySelectorAll(".image a");
imageLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    if (e.target.tagName === "IMG") {
      e.target.style.transform = "scale(1.1)";
      e.target.style.transition = "all 0.3s ease";
    }
  });

  link.addEventListener("mouseleave", (e) => {
    e.target.firstElementChild.style.transform = "scale(1)";
    e.target.firstElementChild.style.transition = "all 0.3s ease";
  });
});
