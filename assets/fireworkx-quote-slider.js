const makeEnquiry = {
  // Modal
  body: document.querySelector("body"),
  modal: document.querySelector(".modal"),
  openModalElems: document.querySelectorAll('[data-modal="open-modal"]'),
  closeModalElems: document.querySelectorAll([
    '[data-modal="close-modal"]',
    ".fwx-slide-container",
  ]),
  enquiryChoiceButtons: document.querySelectorAll("[data-enquiry-type]"),
  brands: document.querySelectorAll("li.brand-name"),
  products: document.querySelectorAll("li.product-name"),
  enquiryForm: document.querySelector("#fwx-enquiry-form"),
  enquiryFormInputs: document.querySelectorAll(
    "#fwx-enquiry-form input, #fwx-enquiry-form select, #fwx-enquiry-form textarea"
  ),
  formIsValid: false,
  submitButton: document.querySelector("#fwx-enquiry-submit-button"),
  api: "https://pinewood-api.live.fireworkx.com/api/v1/leadsubmit",
  initSwiper() {
    // Only init swiper if element exists
    if (document.querySelector(".fwx-enquiry-swiper")) {
      // Initialise swiper
      makeEnquiry.swiper = new Swiper(".fwx-enquiry-swiper", {
        allowTouchMove: false,
        spaceBetween: 80,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          prevEl: ".swiper-button-prev",
        },
      });
    }
  },

  openModal() {
    this.body.classList.add("modal-open");
  },

  closeModal(elem, e) {
    if (!e) {
      this.body.classList.remove("modal-open");
    }
    if (e) {
      if (e.target === elem) {
        this.body.classList.remove("modal-open");
        // Reset swiper position when modal is closed
        // Add/Remove transition event listener to avoid swipe events happening while modal is closing
        makeEnquiry.modal.addEventListener(
          "transitionend",
          makeEnquiry.resetSwiper
        );
      }
    }
  },

  resetSwiper() {
    if (makeEnquiry.swiper) {
      makeEnquiry.swiper.slideTo(0);
      makeEnquiry.modal.removeEventListener(
        "transitionend",
        makeEnquiry.resetSwiper
      );
    }
  },

  chooseEnquiry(button) {
    const enquiry = button.dataset.enquiryType;
    this.enquiryType = enquiry;
    if (enquiry === "new-canopies") {
      this.swiper.slideTo(1);
    }
    if (enquiry === "accessories") {
      window.location.href = "/collections/accessories?enquiry=open";
    }
  },

  sendForm() {
    let messageElem = document.querySelector("#fwx-enquiry-messsage"),
      productTitle = document.querySelector("#fwx-field-product-title").value,
      possession = document.querySelector(
        'input[name="Possession"]:checked'
      ).value,
      callback = document.querySelector('input[name="Callback"]:checked').value,
      promotions = document.querySelector(
        'input[name="Promotions"]:checked'
      ).value,
      city = document.querySelector("#fwx-enquiry-city").value,
      province = document.querySelector("#fwx-enquiry-province").value,
      message = `Product: ${productTitle}\n\nMessage: ${messageElem.value}\n\nPossession of Vehicle: ${possession}\n\nRequest Callback: ${callback}\n\nAllow Promotional Material: ${promotions}\n\nProvince: ${province}\n\nCity: ${city}`,
      formData = new FormData(this.enquiryForm);
    formData.append("URL", window.location.href);
    formData.append("Message", message);
    formData.append("StocklistApiId", "d03b9d61-76d7-4b37-b4c3-c21bbebfb0a4");
    formData.delete("Additional Information");
    formData.delete("Callback");
    formData.delete("Possession");
    formData.delete("Promotions");

    this.submitButton.disabled = true;
    const formDataJson = JSON.stringify(Object.fromEntries(formData));

    fetch(this.api, {
      method: "POST",
      body: formDataJson,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        if ((this.formIsValid = false)) {
          this.submitButton.disabled = false;
          // Error message
          document.querySelector(".error-message-container").style.display =
            "flex";
        }
        console.error("Error:", error);
      })
      .then((response) => {
        if (response.status !== 200) {
          if ((this.formIsValid = false)) {
            this.submitButton.disabled = false;
            document.querySelector(".error-message-container").style.display =
              "flex";
          }
        }
        if (response.status == 200) {
          window.dataLayer.push({ event_name: "enquiry_submit" });
          this.closeModal();
          this.submitButton.disabled = false;
          this.formIsValid = false;
        }
      });
  },
};

// Open Modal
if (makeEnquiry.openModalElems) {
  makeEnquiry.openModalElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      makeEnquiry.openModal();
    });
  });
}

// Close Modal
if (makeEnquiry.closeModalElems) {
  makeEnquiry.closeModalElems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      makeEnquiry.closeModal(elem, e);
    });
  });
}

// Choose enquiry type
if (makeEnquiry.enquiryChoiceButtons) {
  makeEnquiry.enquiryChoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      makeEnquiry.chooseEnquiry(button);
    });
  });
}

const successMessage = document.querySelector(".message-container");
const formContainer = document.querySelector(".fwx-modal-content");

// Enquiry Submit button
if (makeEnquiry.submitButton) {
  makeEnquiry.submitButton.addEventListener("click", function () {
    this.disabled = true;
    makeEnquiry.sendForm();
    // Open success message by adding a class to it
    makeEnquiry.enquiryForm.reset();
    makeEnquiry.closeModal();
    successMessage.style.display = "flex";

    setTimeout(() => {
      successMessage.style.transform = "translateY(0%)";
    }, 500);

    setTimeout(() => {
      successMessage.style.transform = "translateY(100%)";
    }, 4000);
  });
}

// Form Validation
if (makeEnquiry.enquiryFormInputs) {
  makeEnquiry.enquiryFormInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.setCustomValidity("");
      input.classList.remove("invalid");
    });
    input.addEventListener("change", () => {
      input.reportValidity();
      if (!input.checkValidity()) {
        input.classList.add("invalid");
        // Tel
        if (input.type == "tel") {
          input.setCustomValidity("Please enter a valid phone number");
        }
        // Email
        if (input.type == "email") {
          input.setCustomValidity("Please enter a valid email address");
        }
      }
      if (makeEnquiry.enquiryForm.checkValidity()) {
        makeEnquiry.formIsValid = true;
        makeEnquiry.submitButton.disabled = false;
      } else {
        makeEnquiry.formIsValid = false;
        makeEnquiry.submitButton.disabled = true;
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Init Swiper
  makeEnquiry.initSwiper();
  // Check if enquiry is in URL params and open modal
  let params = new URLSearchParams(window.location.search);
  if (params.has("enquiry")) {
    makeEnquiry.openModal();
    params.delete("enquiry");
  }
  // Update URL & history
  window.history.replaceState({}, "", `${location.pathname}?${params}`);
});
