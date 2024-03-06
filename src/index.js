import './css/input.css'
import './sass/app.scss'
import { register } from 'swiper/element';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';

register();
const swiperEls = document.querySelectorAll('swiper-container');

swiperEls.forEach((swiperEl) => {
  if (swiperEl) {
    const params = {
      modules: [Navigation, Pagination, EffectFade, Autoplay],
      injectStylesUrls: [
        'https://cdn.jsdelivr.net/npm/swiper@10.3.1/modules/navigation-element.css',
        'https://cdn.jsdelivr.net/npm/swiper@10.3.1/modules/pagination-element.css',
        'https://cdn.jsdelivr.net/npm/swiper@10.3.1/modules/effect-fade-element.css',
      ],
      pagination: {
        clickable: true,
      }
    }

    Object.assign(swiperEl, params)
    swiperEl.initialize()
  }
})