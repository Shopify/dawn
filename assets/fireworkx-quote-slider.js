const makeEnquiry = {
	// Modal
	body: document.querySelector("body"),
	modal: document.querySelector(".modal"),
	openModalElems: document.querySelectorAll('[data-modal="open-modal"]'),
	closeModalElems: document.querySelectorAll([
		'[data-modal="close-modal"]',
		".fwx-slide-container"
	]),
	enquiryChoiceButtons: document.querySelectorAll("[data-enquiry-type]"),
	brands: document.querySelectorAll("li.brand-name"),
	products: document.querySelectorAll("li.product-name"),
	initSwiper() {
		// Only init swiper if element exists
		if (document.querySelector(".fwx-enquiry-swiper")) {
			// Initialise swiper
			makeEnquiry.swiper = new Swiper(".fwx-enquiry-swiper", {
				allowTouchMove: false,
				spaceBetween: 80,
				pagination: {
					el: ".swiper-pagination",
					type: "fraction"
				},
				navigation: {
					prevEl: ".swiper-button-prev"
				}
			});
		}
	},

	openModal() {
		this.body.classList.add("modal-open");
	},

	closeModal(elem, e) {
		if (e.target === elem) {
			this.body.classList.remove("modal-open");
			// Reset swiper position when modal is closed
			// Add/Remove transition event listener to avoid swipe events happening while modal is closing
			makeEnquiry.modal.addEventListener("transitionend", makeEnquiry.resetSwiper);
		}
	},

	resetSwiper() {
		if (makeEnquiry.swiper) {
			makeEnquiry.swiper.slideTo(0);
			makeEnquiry.modal.removeEventListener("transitionend", makeEnquiry.resetSwiper);
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
	}
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
