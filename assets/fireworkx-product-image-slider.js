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
			const sliderContainer = document.querySelector(".fwx-product-images-swiper");
			const videos = sliderContainer.querySelectorAll("video");
			const youtubeVideos = sliderContainer.querySelectorAll("iframe");
			gallerySwiper.activeIndex = this.activeIndex;

			// stop and reset all youtube videos
			for(let video of youtubeVideos) {
				if(video) {
					video.src = video.src
				}
			}

			// stop and reset all videos
			for(let video of videos) {
				if(video) {
					video.pause(); 
					video.currentTime = 0;
				}
			}
		}
	}
});

