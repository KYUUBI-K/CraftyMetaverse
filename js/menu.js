const menuBtn = document.querySelector(".mobile__menu__open-btn");
const mobileMenu = document.querySelector(".js-menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
});

const navList = document.querySelector(".js-nav");

navList.addEventListener("click", (event) => {
  if (event.target.classList.contains("mobile__menu-link")) {
    menuBtn.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("no-scroll");
  }
});
