var swiper = new Swiper(".mySwiper", {
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
	watchSlidesProgress: true
});
var swiper2 = new Swiper(".mySwiper2", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	thumbs: {
		swiper: swiper
	}
});
