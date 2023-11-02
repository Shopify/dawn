import './css/input.css'
import './sass/app.scss'
import { register } from 'swiper/element';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
register();
const swiperEl = document.querySelector('swiper-container');
if (swiperEl) {
  const params = {
    modules: [Navigation, Pagination, EffectFade, Autoplay],
    injectStylesUrls: [
      './assets/navigation-element.css',
      './assets/pagination-element.css',
      './assets/autoplay-element.css',
      './assets/effect-fade-element.css',
    ],
    pagination: {
      clickable: true,
    }
  }

  Object.assign(swiperEl, params)
  swiperEl.initialize()
}
