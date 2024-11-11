const openBtn = document.querySelector(".mobile-btn[data-type='open']");
const closeBtn = document.querySelector(".mobile-btn[data-type='close']");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu>ul>li");
const themeBtns = document.querySelectorAll(".user-menu__theme");

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

const setIcons = () => {
  themeBtns.forEach((btn) => {
    document.body.classList.contains("dark")
      ? (btn.children[0].src = "../../img/icons/light-mode-icon.svg")
      : (btn.children[0].src = "../../img/icons/dark-mode-icon.svg");
  });
};

const changeTheme = (e) => {
  if (e.target.nodeName === "IMG") {
    setIcons();
    document.body.classList.toggle("dark");
  } else if (e.target.type === "button") {
    document.body.classList.toggle("dark");
  }
};

themeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => changeTheme(e));
});
