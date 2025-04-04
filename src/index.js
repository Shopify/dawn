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

/*
 ## anygift cart内説明モーダル中の文章変更
 anygift 側に設定する方法がなかったため無理やりJavaScriptで行なっている。可能な限り無くしたい
 */

// 現在のURLが/cartを含む場合のみMutationObserverを設定する
if (window.location.pathname.includes('/cart')) {
  // すでに要素が存在するか確認
  const existingElement = document.querySelector('.anygift-about-modal-caution-text-address');
  if (existingElement) {
    existingElement.textContent = '※お相手の方が住所の入力がない場合、5日後にキャンセルとなります。';
  } else {
    const observer = new MutationObserver((mutations) => {
      const element = document.querySelector('.anygift-about-modal-caution-text-address');
      if (element) {
        element.textContent = '※お相手の方が住所の入力がない場合、5日後にキャンセルとなります。';
      }
    });

    // body要素の変更を監視（モーダルはbody直下に追加されることが多い）
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

