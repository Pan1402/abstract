const searchIcon = document.querySelector(".search-icon");
const mobileSearch = document.querySelector(".mobile-search");
const closeSearch = document.querySelector(".close-icon");
const menu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");

searchIcon.addEventListener("click", (e) => {
  mobileSearch.classList.toggle("hide");
});

closeSearch.addEventListener("click", (e) => {
  mobileSearch.classList.toggle("hide");
});

menu.addEventListener("click", (e) => {
  mobileNav.classList.toggle("hide");
  menuIcon.classList.toggle("transform");
});
