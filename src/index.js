import './css/input.css'
import './sass/app.scss'
import {register} from 'swiper/element/bundle';
register();
const swiperEl = document.querySelector('swiper-container');
if (swiperEl) {
  const params = {
    pagination: {
      clickable: true,
    }
  }

  Object.assign(swiperEl, params)
  swiperEl.initialize()
}
