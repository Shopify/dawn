var swiper = new Swiper(".fwx-enquiry-swiper", {
	// allowTouchMove: false,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction"
	},
	navigation: {
		prevEl: ".swiper-button-prev"
	}
});


window.onload = () => {
	const body = document.querySelector('body'),
	buttons = document.querySelectorAll('[data-modal="open-modal"]'),
	modal = document.querySelector('.modal'),
	closeElems = document.querySelectorAll(['[data-modal="close-modal"]', '.fwx-slide-container'])

	if(buttons){
	  buttons.forEach(elem => {
		elem.addEventListener('click', () => {
		  body.classList.add('modal-open');
		})
	  })
	}

	if(closeElems){
	  closeElems.forEach(elem => {
		elem.addEventListener('click', (e) => {
		  if(e.target === elem){
			body.classList.remove('modal-open')
		  }
		})
	  })
	}
};


const buttons = document.querySelectorAll(".button-quote-type");
const brands = document.querySelectorAll("li.brand-name");
const products = document.querySelectorAll("li.product-name");
const accessories = document.querySelectorAll("li.accessory-product");
const singleProductList = document.querySelectorAll("li.single-product");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const quoteType = button.dataset.quote;
		if (quoteType === "new-canopies") {
			swiper.slideTo(1);
		} else if (quoteType === "accessories") {
			swiper.slideTo(3);
		}
	});
});

brands.forEach((brand) => {
	brand.addEventListener("click", () => {
		let brandName = brand.dataset.brand;
		sortListProducts(brandName);
		swiper.slideTo(2);
	});
});

function sortListProducts(brand) {
	products.forEach((product) => {
		product.classList.remove("show-product");
	});
	let filteredProducts = [...products].filter((product) => product.dataset.vendor === brand);
	filteredProducts.forEach((product) => {
		product.classList.add("show-product");
	});
	console.log(filteredProducts)
}

products.forEach((product) => {
	product.addEventListener("click", () => {
		const productTitle = product.dataset.title;
		showProductDetails(productTitle);
		swiper.slideTo(4);
	});
});

accessories.forEach((product) => {
	product.addEventListener("click", () => {
		const productTitle = product.dataset.title;
		showProductDetails(productTitle);
		swiper.slideTo(4);
	});
});

let count = 0
function showProductDetails(productTitle) {
	singleProductList.forEach((singleProduct) => {
		singleProduct.classList.remove("show-single-product");
	});
	const products = [...singleProductList].filter(
		(singleProduct) => singleProduct.dataset.singleproduct === productTitle
	);
	console.log(products)
	products.forEach((product) => {
		product.classList.add("show-single-product");
	});
}
