const navTabs = document.querySelectorAll(".alakazam-account-nav__tabs div");
const winTabs = document.querySelectorAll(".alakazam-account-tab");
const subtitile = document.querySelector(".customer-account-sub");
const navActive = document.querySelectorAll(".nav-active");

subtitile.innerHTML = "| " + navTabs[0].innerHTML;

for (let index = 0; index < navTabs.length; index++) {
  const tab = navTabs[index];

  tab.addEventListener("click", () => {
    winTabs.forEach((win) => {
      win.classList.remove("tab-show");
    });

    navTabs.forEach((nav) => {
      nav.classList.remove("nav-active");
    });

    tab.classList.add("nav-active");
    winTabs[index].classList.add("tab-show");

    let sub = tab.innerHTML;

    if (tab.innerHTML.includes("Wish List")) {
      sub = "Wish List";
    }
    if (tab.innerHTML.includes("Loyalty Points")) {
      sub = "Loyalty Points";
    }
    subtitile.innerHTML = "| " + sub;
  });
}
