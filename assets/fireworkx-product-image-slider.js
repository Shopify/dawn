var swiper = new Swiper(".fwx-product-thumbs-swiper", {
	spaceBetween: 10,
	slidesPerView: 2,
	breakpoints: {
		320: {
			slidesPerView: 3,
			spaceBetween: 8
		},
		375: {
			slidesPerView: 4,
			spaceBetween: 8
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 16
		}
	},
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true
});

var swiper2 = new Swiper(".fwx-product-images-swiper", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	thumbs: {
		swiper: swiper
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	on: {
		slideChange: function () {
			gallerySwiper.activeIndex = this.activeIndex;
		}
	}
});
