const items = document.querySelector(".nav__items");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const backdrop = document.querySelector(".backdrop");

menuOpen.addEventListener("click", () => {
  items.classList.add("active");
  menuOpen.classList.add("active");
  menuClose.classList.add("active");
  backdrop.classList.add("active");
});

menuClose.addEventListener("click", () => {
  items.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backdrop.classList.remove("active");
});

backdrop.addEventListener("click", () => {
  items.classList.remove("active");
  menuOpen.classList.remove("active");
  menuClose.classList.remove("active");
  backdrop.classList.remove("active");
});
