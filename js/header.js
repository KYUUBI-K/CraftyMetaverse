const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

window.addEventListener("resize", appHeight);
appHeight();

const header = document.querySelector(".header");
const header_container = document.querySelector(".header__container");

window.addEventListener("scroll", function () {
  if (window.scrollY > 20) {
    header.classList.add("header-scroll");
    header_container.classList.add("header-container-bg");
  } else {
    header.classList.remove("header-scroll");
    header_container.classList.remove("header-container-bg");
  }
});
