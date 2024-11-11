window.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tabs__btn");
  const tabList = document.querySelectorAll(".partners__icons");

  function handleTabClick(e) {
    tabBtns.forEach((btn) => {
      btn.classList.remove("btn__active");
    });
    e.target.classList.add("btn__active");
    const list = [...tabList].find(
      (item) => item.dataset.tabList === e.target.dataset.tabList
    );
    tabList.forEach((list) => list.classList.remove("icons__active"));

    list.classList.add("icons__active");
  }

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", handleTabClick);
  });
});
