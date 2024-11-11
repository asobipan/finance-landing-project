const openBtn = document.querySelector(".mobile-btn[data-type='open']");
const closeBtn = document.querySelector(".mobile-btn[data-type='close']");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu>ul>li");

openBtn.addEventListener("click", (e) => {
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", (e) => {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "initial";
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "initial";
  });
});
