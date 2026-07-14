const body = document.body;
const drawer = document.querySelector(".cart-drawer");
const backdrop = document.querySelector(".drawer-backdrop");
const openCartButtons = document.querySelectorAll("[data-cart-open]");
const closeCartButtons = document.querySelectorAll("[data-cart-close]");
const mobileMenuButton = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector(".primary-nav");

function openCart() {
  if (!drawer || !backdrop) return;
  drawer.setAttribute("aria-hidden", "false");
  openCartButtons.forEach((button) => button.setAttribute("aria-expanded", "true"));
  backdrop.hidden = false;
  body.classList.add("drawer-open");
}

function closeCart() {
  if (!drawer || !backdrop) return;
  drawer.setAttribute("aria-hidden", "true");
  openCartButtons.forEach((button) => button.setAttribute("aria-expanded", "false"));
  backdrop.hidden = true;
  body.classList.remove("drawer-open");
}

openCartButtons.forEach((button) => {
  button.setAttribute("aria-expanded", "false");
  button.addEventListener("click", openCart);
});
closeCartButtons.forEach((button) => button.addEventListener("click", closeCart));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    nav?.classList.remove("is-open");
  }
});

mobileMenuButton?.addEventListener("click", () => {
  const expanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("is-open", !expanded);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

document.querySelectorAll("[data-quantity]").forEach((control) => {
  const input = control.querySelector("input");
  if (!input) return;

  control.querySelector("[data-qty-minus]")?.addEventListener("click", () => {
    input.value = Math.max(1, Number(input.value) - 1);
  });
  control.querySelector("[data-qty-plus]")?.addEventListener("click", () => {
    input.value = Number(input.value) + 1;
  });
});

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const tabButtons = tabs.querySelectorAll("[data-tab]");
  const panels = tabs.querySelectorAll("[data-panel]");

  function activateTab(tabName) {
    tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.tab === tabName);
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== tabName;
    });
  }

  tabButtons.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));
  });

  activateTab(tabButtons[0]?.dataset.tab || panels[0]?.dataset.panel);
});
