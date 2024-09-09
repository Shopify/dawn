const addAddressBtn = document.querySelector(
  ".ak-customer-addresses__add-address-btn"
);

const addAddressBlock = addAddressBtn.nextElementSibling;

addAddressBtn.addEventListener("click", () => {
  if (!addAddressBlock.classList.contains("toggle__add-address-btn")) {
    addAddressBlock.classList.add("toggle__add-address-btn");
    return;
  }
  addAddressBlock.classList.remove("toggle__add-address-btn");
});

function showPassword() {
  var x = document.getElementById("CustomerPassword");

  var y = document.getElementById("RegisterForm-password");

  if (x) {
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  if (y) {
    if (y.type === "password") {
      y.type = "text";
    } else {
      y.type = "password";
    }
  }
}
