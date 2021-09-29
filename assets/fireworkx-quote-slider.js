let enquiryType = "",
	collectionHandle = "",
	productHandle = "";

// Initialise swiper
var enquirySwiper = new Swiper(".fwx-enquiry-swiper", {
	allowTouchMove: false,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction"
	},
	navigation: {
		prevEl: ".swiper-button-prev"
	}
});

// Modal
const body = document.querySelector("body"),
	modal = document.querySelector(".modal"),
	openModalElems = document.querySelectorAll('[data-modal="open-modal"]'),
	closeModalElems = document.querySelectorAll([
		'[data-modal="close-modal"]',
		".fwx-slide-container"
	]);

if (openModalElems) {
	openModalElems.forEach((elem) => {
		elem.addEventListener("click", () => {
			body.classList.add("modal-open");
		});
	});
}

if (closeModalElems) {
	closeModalElems.forEach((elem) => {
		elem.addEventListener("click", (e) => {
			if (e.target === elem) {
				body.classList.remove("modal-open");
				// Reset swiper position when modal is closed
				// Add/Remove transition event listener to avoid swipe events happening while modal is closing
				const resetSwiper = function () {
					enquirySwiper.slideTo(0);
					modal.removeEventListener("transitionend", resetSwiper);
				};
				modal.addEventListener("transitionend", resetSwiper);
			}
		});
	});
}

// Enquiry Swiper

const enquiryChoiceButtons = document.querySelectorAll("[data-enquiry-type]"),
	brands = document.querySelectorAll("li.brand-name"),
	products = document.querySelectorAll("li.product-name"),
	productsHeading = document.querySelector(".product-heading"),
	accessories = document.querySelectorAll("li.accessory-product"),
	singleProductList = document.querySelectorAll("li.single-product");

// Choose enquiry type and
enquiryChoiceButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const quoteType = button.dataset.enquiryType;
		enquiryType = quoteType;
		if (quoteType === "new-canopies") {
			enquirySwiper.slideTo(1);
		}
		if (quoteType === "accessories") {
			window.location.href = "/collections/accessories?enquiry";
		}
	});
});

brands.forEach((brand) => {
	brand.addEventListener("click", () => {
		let brandName = brand.dataset.brand;
		window.location.href = `/collections/${brandName}?enquiry`;
	});
});

function sortListProducts(brand) {
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
}

products.forEach((product) => {
	product.addEventListener("click", () => {
		const productTitle = product.dataset.title;
		showProductDetails(productTitle);
		enquirySwiper.slideTo(4);
	});
});

accessories.forEach((product) => {
	product.addEventListener("click", () => {
		const productTitle = product.dataset.title;
		showProductDetails(productTitle);
		enquirySwiper.slideTo(4);
	});
});

let count = 0;
function showProductDetails(productTitle) {
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
}
