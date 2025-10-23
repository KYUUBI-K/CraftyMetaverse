const openMenuBtn = document.querySelector("[menu-open]");
const closeMenuBtn = document.querySelector("[menu-close]");
const menu = document.querySelector("[menu]");
const navLinks = document.querySelectorAll(".mobile__menu-link");

const handleOutsideClick = (event) => {
  if (!menu.contains(event.target) && !openMenuBtn.contains(event.target)) {
    closeMenu();
  }
};

const openMenu = () => {
  menu.classList.add("is-open");
  openMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  document.addEventListener("click", handleOutsideClick);
};

const closeMenu = () => {
  menu.classList.remove("is-open");
  openMenuBtn.classList.remove("hidden");
  closeMenuBtn.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  document.removeEventListener("click", handleOutsideClick);
};

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
