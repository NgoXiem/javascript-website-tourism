const header = document.querySelector("header");
const bar = document.querySelector(".logo i");
const nav = document.querySelector(".header-nav");
const links = document.querySelectorAll("nav a");

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

// autoplay carousel

const dots = document.querySelectorAll(".dot");
const videos = document.querySelectorAll(".banner");
let counter = 0;
let timer;

const autoplay = () => {
  timer = setInterval(() => {
    counter++;
    if (counter > 4) {
      counter = 0;
    }
    dots.forEach((dot) => dot.classList.remove("active"));
    videos.forEach((video) => video.classList.remove("active"));
    videos[counter].classList.add("active");
    dots[counter].classList.add("active");
  }, 15000);
};
autoplay();

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(timer);
    dots.forEach((dot) => dot.classList.remove("active"));
    videos.forEach((video) => video.classList.remove("active"));

    videos[index].classList.add("active");
    dot.classList.add("active");
    counter = index;
    autoplay();
  });
});

// position the dots

const dotWrapper = document.querySelector(".dots__wrapper");

windows.addEventListener("resize", () => {});
