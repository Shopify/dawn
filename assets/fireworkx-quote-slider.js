const makeEnquiry = {
	// Modal
	body: document.querySelector("body"),
	modal: document.querySelector(".modal"),
	openModalElems: document.querySelectorAll('[data-modal="open-modal"]'),
	closeModalElems: document.querySelectorAll([
		'[data-modal="close-modal"]',
		".fwx-slide-container"
	]),
	enquiryType: "",
	collectionHandle: "",
	productHandle: "",

	// Initialise swiper
	swiper: new Swiper(".fwx-enquiry-swiper", {
		allowTouchMove: false,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction"
		},
		navigation: {
			prevEl: ".swiper-button-prev"
		}
	}),

	// Enquiry Swiper

	enquiryChoiceButtons: document.querySelectorAll("[data-enquiry-type]"),
	brands: document.querySelectorAll("li.brand-name"),
	products: document.querySelectorAll("li.product-name"),
	productsHeading: document.querySelector(".product-heading"),
	singleProductList: document.querySelectorAll("li.single-product"),

	sortListProducts(brand) {
		productsHeading.textContent = brand;
		// Reset all products
		products.forEach((product) => {
			product.classList.remove("show-product");
		});
		// Filter by brand
		let filteredProducts = [...products].filter((product) => product.dataset.vendor === brand);
		filteredProducts.forEach((product) => {
			product.classList.add("show-product");
		});
	},

	showProductDetails(productTitle) {
		singleProductList.forEach((singleProduct) => {
			singleProduct.classList.remove("show-single-product");
		});
		const products = [...singleProductList].filter(
			(singleProduct) => singleProduct.dataset.singleProduct === productTitle
		);
		console.log(products);
		products.forEach((product) => {
			product.classList.add("show-single-product");
		});
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
		makeEnquiry.swiper.slideTo(0);
		makeEnquiry.modal.removeEventListener("transitionend", makeEnquiry.resetSwiper);
	},

	chooseEnquiry(button) {
		const quoteType = button.dataset.enquiryType;
		this.enquiryType = quoteType;
		if (quoteType === "new-canopies") {
			this.swiper.slideTo(1);
		}
		if (quoteType === "accessories") {
			window.location.href = "/collections/accessories?enquiry";
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

if (makeEnquiry.brands) {
	makeEnquiry.brands.forEach((brand) => {
		brand.addEventListener("click", () => {
			let brandName = brand.dataset.brand;
			window.location.href = `/collections/${brandName}?enquiry=open`;
		});
	});
}

if (makeEnquiry.products) {
	makeEnquiry.products.forEach((product) => {
		product.addEventListener("click", () => {
			const handle = product.dataset.handle;
			window.location.href = `/products/${handle}?enquiry=open`;
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	let params = new URLSearchParams(window.location.search);
	if (params.has("enquiry")) {
		makeEnquiry.openModal();
		params.delete("enquiry");
	}
	// Update URL & history
	window.history.replaceState({}, "", `${location.pathname}?${params}`);
});
