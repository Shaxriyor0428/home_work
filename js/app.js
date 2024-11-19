const menuBar = document.querySelector(".menu__bar");
const navbar = document.querySelector(".navbar__collection");

menuBar.onclick = function () {
  navbar.classList.toggle("opened");
};
