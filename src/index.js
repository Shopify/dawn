import Vue from "vue";
import axios from 'axios'
import './css/input.css'
import {register} from 'swiper/element/bundle';
register();

// swiper
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  spaceBetween: 30,
  effect: 'fade',
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

import './sass/app.scss'
const parsedUrl = new URL(window.location.href);
const pathname = parsedUrl.pathname;
const host = window.location.hostname
let cpbCounselingUrl = ''
let cpbApiBaseUrl = ''
// TODO:: site_serialはサーバーで挿入しフロントからは見えない形に変更
let cpbApiSiteSerial = ''
if (host === 'perfumerie-sukiya-online-test.myshopify.com') {
  cpbCounselingUrl = 'https://development.cledepeau-beaute.com/jp/skin-diagnosis/guest'
  cpbApiBaseUrl = 'https://dev-cpb-connect.sukiya.biz'
  cpbApiSiteSerial = 'rLkZfRcSDL5xikrksvuxkcUqvFxrfwSsoI9Q8cWOENJaxttdPy'
} else {
  cpbCounselingUrl = 'https://www.cledepeau-beaute.com/jp/skin-diagnosis/guest'
  cpbApiBaseUrl = 'https://cpb-connect.sukiya.biz'
  cpbApiSiteSerial = 'fBiPpaK2L6gqaXWIT87xnhc6RuOApD2XykJTl2jiyR4Ql2nlak'
}

const categories = [
  {
    id: 589,
    title: 'SKIN CARE',
    title_ja: 'スキンケア',
  },
  {
    id: 3517,
    title: 'FACE',
    title_ja: 'スキンケア フェイス',
  },
  {
    id: 3519,
    title: 'LOTION',
    title_ja: '化粧水',
  },
  {
    id: 3521,
    title: 'EMULSION',
    title_ja: '乳液',
  },
  {
    id: 3522,
    title: 'ESSENCE',
    title_ja: '美容液',
  },
  {
    id: 3523,
    title: 'CREAM',
    title_ja: 'クリーム',
  },
  {
    id: 3524,
    title: 'MASK',
    title_ja: 'マスク',
  },
  {
    id: 3525,
    title: 'CLEANSING',
    title_ja: 'メイク落とし・洗顔フォーム',
  },
  {
    id: 3526,
    title: 'MASSAGE CREAM',
    title_ja: 'マッサージクリーム',
  },
  {
    id: 1384,
    title: 'BODY',
    title_ja: 'ボディ',
  },
  {
    id: 3543,
    title: 'COTTON',
    title_ja: 'コットン',
  },
  {
    id: 593,
    title: 'HAIR & BODY',
    title_ja: 'ヘア＆ボディ',
  },
  {
    id: 1519,
    title: 'UV',
    title_ja: 'サン・スキンケア',
  },
  {
    id: 3527,
    title: 'MAKE UP',
    title_ja: 'メイクアップ',
  },
  {
    id: 3528,
    title: 'MAKE UP FACE',
    title_ja: 'メイクアップ フェイス',
  },
  {
    id: 3529,
    title: 'FOUNDATION',
    title_ja: 'ファンデーション',
  },
  {
    id: 5021,
    title: 'POWDER FOUNDATION',
    title_ja: 'パウダーファンデーション',
  },
  {
    id: 5022,
    title: 'LIQUID FOUNDATION',
    title_ja: 'リキッドファンデーション',
  },
  {
    id: 5023,
    title: 'CUSHION FOUNDATION',
    title_ja: 'クッションファンデーション',
  },
  {
    id: 5024,
    title: 'CREAM FOUNDATION',
    title_ja: 'クリームファンデーション',
  },
  {
    id: 3530,
    title: 'PRE MAKE UP',
    title_ja: 'プレメイクアップ',
  },
  {
    id: 3531,
    title: 'CONCEALER',
    title_ja: 'コンシーラー',
  },
  {
    id: 3532,
    title: 'FACE POWDER',
    title_ja: 'フェイスパウダー',
  },
  {
    id: 3533,
    title: 'FACE COLOR',
    title_ja: 'フェイスカラー',
  },
  {
    id: 624,
    title: 'CHEEK',
    title_ja: 'チークカラー',
  },
  {
    id: 594,
    title: 'LIP',
    title_ja: 'リップ',
  },
  {
    id: 3535,
    title: 'LIP STICK',
    title_ja: 'リップスティック',
  },
  {
    id: 3536,
    title: 'LIP GLOSS',
    title_ja: 'リップグロス',
  },
  {
    id: 3537,
    title: 'LIQUID ROUGE',
    title_ja: 'リキッドルージュ',
  },
  {
    id: 3538,
    title: 'LIP LINER',
    title_ja: 'リップライナー',
  },
  {
    id: 587,
    title: 'EYE',
    title_ja: 'アイ',
  },
  {
    id: 3539,
    title: 'EYE SHADOW',
    title_ja: 'アイシャドウ',
  },
  {
    id: 3540,
    title: 'MASCARA',
    title_ja: 'マスカラ',
  },
  {
    id: 3541,
    title: 'EYE LINER',
    title_ja: 'アイライナー',
  },
  {
    id: 3542,
    title: 'EYE BROW',
    title_ja: 'アイブロウ',
  },
  {
    id: 590,
    title: 'NAIL',
    title_ja: 'ネイル',
  },
  {
    id: 592,
    title: 'BASE MAKE',
    title_ja: 'ベースメイク',
  },
  {
    id: 591,
    title: 'FRAGRANCE',
    title_ja: 'フレグランス',
  },
  {
    id: 588,
    title: 'ACCESSORY',
    title_ja: 'アクセサリー',
  },
  {
    id: 3544,
    title: 'ACCESSORY BRASH',
    title_ja: 'ブラシ・パフ・スポンジ・チップ',
  },
  {
    id: 3545,
    title: 'ACCESSORY CASE',
    title_ja: 'ケース・ホルダー',
  },
  {
    id: 3546,
    title: 'ACCESSORY NAIL',
    title_ja: 'ネイルケア',
  },
  {
    id: 1961,
    title: 'ORAL CARE',
    title_ja: 'オーラルケア',
  },
  {
    id: 1751,
    title: 'DECORTÉ POINT MAKEUP',
    title_ja: 'DECORTÉ POINT MAKEUP',
  },
  {
    id: 1752,
    title: 'DECORTÉ BASE MAKEUP',
    title_ja: 'DECORTÉ BASE MAKEUP',
  },
  {
    id: 5007,
    title: 'PRIMER',
    title_ja: '化粧下地',
  },
  {
    id: 5008,
    title: 'CONTROL COLOR',
    title_ja: 'コントロールカラー',
  },
  {
    id: 5009,
    title: 'Eau de Toilette',
    title_ja: 'オードトワレ',
  },
  {
    id: 5010,
    title: 'HAIR CARE',
    title_ja: 'ヘアケア',
  },
  {
    id: 5011,
    title: 'HAIR STYLING',
    title_ja: 'スタイリング',
  },
  {
    id: 5012,
    title: 'HEAD SKIN CARE',
    title_ja: '頭皮ケア',
  },
  {
    id: 5013,
    title: 'SKIN CARE ACCESSORY',
    title_ja: 'スキンケア用アクセサリー',
  },
  {
    id: 5014,
    title: 'BASE MAKE ACCESSORY',
    title_ja: 'ベースメイク用アクセサリー',
  },
  {
    id: 5015,
    title: 'MAKE UP ACCESSORY',
    title_ja: 'ポイントメイク用アクセサリー',
  },
  {
    id: 5016,
    title: 'INNER BEAUTY',
    title_ja: 'インナービューティー',
  }
]

new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data() {
    return {
      categories: categories,
      isLineLogin: false,
      lineUser: null,
      isLineConnected: false,
      cpbStory: {
        top: false,
        slider_1: false
      },
      counselingModal: false,
      counselingModalStep: 1,
      counselingStatus: {
        q1: null,
        q2: null,
        q3: null
      },
      decorteCounselingStatus: {
        q1: null,
        q2: null,
        q3: null
      },
      prediaCounselingStatus: {
        q1: null,
        q2: null,
        q3: null
      },
      cpbNavItems: [
        {
          text: "スキンケア",
          href: '/collections/cle-de-peau-beaute/スキンケア',
          children: [
            {
              text: "すべて",
              href: '/collections/cle-de-peau-beaute/スキンケア'
            },
            {
              text: "フェイス",
              href: '/collections/cle-de-peau-beaute/スキンケア-フェイス',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/スキンケア-フェイス'
                },
                {
                  text: "化粧水",
                  href: '/collections/cle-de-peau-beaute/化粧水',
                },
                {
                  text: "乳液",
                  href: '/collections/cle-de-peau-beaute/乳液',
                },
                {
                  text: "美容液",
                  href: '/collections/cle-de-peau-beaute/美容液',
                },
                {
                  text: "クリーム",
                  href: '/collections/cle-de-peau-beaute/クリーム',
                },
                {
                  text: "マスク",
                  href: '/collections/cle-de-peau-beaute/マスク',
                },
                {
                  text: "メイク落とし・洗顔フォーム",
                  href: '/collections/cle-de-peau-beaute/メイク落とし・洗顔フォーム',
                },
                {
                  text: "マッサージクリーム",
                  href: '/collections/cle-de-peau-beaute/マッサージクリーム',
                }
              ]
            },
            {
              text: "ボディ",
              href: '/collections/cle-de-peau-beaute/ボディ'
            },
            {
              text: "サン・スキンケア",
              href: '/collections/cle-de-peau-beaute/UVケア'
            },
            {
              text: "アクセサリー",
              href: '/collections/cle-de-peau-beaute/アクセサリー',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/アクセサリー'
                },
                {
                  text: "コットン",
                  href: '/collections/cle-de-peau-beaute/コットン'
                }
              ]
            }
          ]
        },
        {
          text: "メイクアップ",
          href: '/collections/cle-de-peau-beaute/メイクアップ',
          children: [
            {
              text: "すべて",
              href: '/collections/cle-de-peau-beaute/メイクアップ'
            },
            {
              text: "フェイス",
              href: '/collections/cle-de-peau-beaute/メイクアップ-フェイス',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/メイクアップ-フェイス'
                },
                {
                  text: "ファンデーション",
                  href: '/collections/cle-de-peau-beaute/ファンデーション'
                },
                {
                  text: "プレメイクアップ",
                  href: '/collections/cle-de-peau-beaute/プレメイクアップ'
                },
                {
                  text: "コンシーラー",
                  href: '/collections/cle-de-peau-beaute/コンシーラー'
                },
                {
                  text: "フェイスパウダー",
                  href: '/collections/cle-de-peau-beaute/フェイスパウダー'
                },
                {
                  text: "フェイスカラー",
                  href: '/collections/cle-de-peau-beaute/フェイスカラー'
                },
                {
                  text: "チークカラー",
                  href: '/collections/cle-de-peau-beaute/チークカラー'
                }
              ]
            },
            {
              text: "リップ",
              href: '/collections/cle-de-peau-beaute/リップ',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/リップ'
                },
                {
                  text: "リップスティック",
                  href: '/collections/cle-de-peau-beaute/リップスティック'
                },
                {
                  text: "リップグロス",
                  href: '/collections/cle-de-peau-beaute/リップグロス'
                },
                {
                  text: "リキッドルージュ",
                  href: '/collections/cle-de-peau-beaute/リキッドルージュ'
                },
                {
                  text: "リップライナー",
                  href: '/collections/cle-de-peau-beaute/リップライナー'
                }
              ]
            },
            {
              text: "アイ",
              href: '/collections/cle-de-peau-beaute/アイメイク',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/アイメイク'
                },
                {
                  text: "アイシャドウ",
                  href: '/collections/cle-de-peau-beaute/アイシャドウ'
                },
                {
                  text: "マスカラ",
                  href: '/collections/cle-de-peau-beaute/マスカラ'
                },
                {
                  text: "アイライナー",
                  href: '/collections/cle-de-peau-beaute/アイライナー'
                },
                {
                  text: "アイブロウ",
                  href: '/collections/cle-de-peau-beaute/アイブロウ'
                }
              ]
            },
            {
              text: "アクセサリー",
              href: '/collections/cle-de-peau-beaute/アクセサリー',
              children: [
                {
                  text: "すべて",
                  href: '/collections/cle-de-peau-beaute/アクセサリー'
                },
                {
                  text: "ブラシ・パフ・スポンジ・チップ",
                  href: '/collections/cle-de-peau-beaute/ブラシ・パフ・スポンジ・チップ'
                },
                {
                  text: "ケース・ホルダー",
                  href: '/collections/cle-de-peau-beaute/ケース・ホルダー'
                },
                {
                  text: "ネイルケア",
                  href: '/collections/cle-de-peau-beaute/ネイルケア'
                }
              ]
            }
          ]
        },
        {
          id: "31",
          text: "トータルカウンセリング",
          href: cpbCounselingUrl,
          target: '_blank'
        },
        {
          id: "32",
          text: "クレ・ド・ポー ボーテのストーリー",
          href: '/pages/cle-de-peau-beaute-story'
        }
      ],
      decorteNavItems: [
        {
          text: "スキンケア",
          href: '/collections/decorte/スキンケア',
          children: [
            {
              text: "クレンジング",
              href: '/collections/decorte/クレンジング'
            },
            {
              text: "洗顔料",
              href: '/collections/decorte/洗顔料'
            },
            {
              text: "乳液",
              href: '/collections/decorte/乳液'
            },
            {
              text: "化粧水",
              href: '/collections/decorte/化粧水'
            },
            {
              text: "美容液",
              href: '/collections/decorte/美容液'
            },
            {
              text: "クリーム",
              href: '/collections/decorte/美容クリーム'
            },
            {
              text: "マスク",
              href: '/collections/decorte/マスク'
            },
            {
              text: "マッサージ",
              href: '/collections/decorte/マッサージ'
            },
            {
              text: "サンプロダクツ・UVケア",
              href: '/collections/decorte/サンプロダクツ・UVケア'
            }
          ]
        },
        {
          text: "ベースメイク",
          href: '/collections/decorte/ベースメイク',
          children: [
            {
              text: "パウダーファンデーション",
              href: '/collections/decorte/パウダーファンデーション'
            },
            {
              text: "リキッドファンデーション",
              href: '/collections/decorte/リキッドファンデーション'
            },
            {
              text: "クッションファンデーション",
              href: '/collections/decorte/クッションファンデーション'
            },
            {
              text: "クリームファンデーション",
              href: '/collections/decorte/クリームファンデーション'
            },
            {
              text: "化粧下地",
              href: '/collections/decorte/化粧下地-プライマー'
            },
            {
              text: "フェイスパウダー",
              href: '/collections/decorte/フェイスパウダー-セッティングパウダー'
            },
            {
              text: "コンシーラー",
              href: '/collections/decorte/コンシーラー'
            },
            {
              text: "コントロールカラー",
              href: '/collections/decorte/コントロールカラー'
            }
          ]
        },
        {
          text: "ポイントメイク",
          href: '/collections/decorte/ポイントメイク',
          children: [
            {
              text: "フェイスカラー",
              href: '/collections/decorte/チーク・ブラッシュ'
            },
            {
              text: "アイカラー",
              href: '/collections/decorte/アイメイク'
            },
            {
              text: "アイブロウ",
              href: '/collections/decorte/アイブロウ'
            },
            {
              text: "アイライナー",
              href: '/collections/decorte/アイライナー'
            },
            {
              text: "マスカラ",
              href: '/collections/decorte/マスカラ'
            },
            {
              text: "リップカラー",
              href: '/collections/decorte/リップメイク'
            },
            {
              text: "ネイルカラー",
              href: '/collections/decorte/ネイル'
            },
            {
              text: "リムーバー",
              href: '/collections/decorte/リムーバー'
            }
          ]
        },
        {
          text: "オンラインカウンセリング",
          href: 'https://online.sukiya.biz/pages/decorte-counseling',
          target: '_blank'
        },
        {
          text: "Our Story",
          href: '/pages/decorte-our-story'
        }
      ],
      decorteCategories: [
        {
          text: "スキンケア",
          href: '/collections/decorte/スキンケア',
          children: [
            {
              text: "クレンジング",
              href: '/collections/decorte/クレンジング'
            },
            {
              text: "洗顔料",
              href: '/collections/decorte/洗顔料'
            },
            {
              text: "乳液",
              href: '/collections/decorte/乳液'
            },
            {
              text: "化粧水",
              href: '/collections/decorte/化粧水'
            },
            {
              text: "美容液",
              href: '/collections/decorte/美容液'
            },
            {
              text: "クリーム",
              href: '/collections/decorte/美容クリーム'
            },
            {
              text: "マスク",
              href: '/collections/decorte/マスク'
            },
            {
              text: "マッサージ",
              href: '/collections/decorte/マッサージ'
            },
            {
              text: "サンプロダクツ・UVケア",
              href: '/collections/decorte/サンプロダクツ・UVケア'
            }
          ]
        },
        {
          text: "ポイントメイク",
          href: '/collections/decorte/ポイントメイク',
          children: [
            {
              text: "フェイスカラー",
              href: '/collections/decorte/チーク・ブラッシュ'
            },
            {
              text: "アイカラー",
              href: '/collections/decorte/アイメイク'
            },
            {
              text: "アイブロウ",
              href: '/collections/decorte/アイブロウ'
            },
            {
              text: "アイライナー",
              href: '/collections/decorte/アイライナー'
            },
            {
              text: "マスカラ",
              href: '/collections/decorte/マスカラ'
            },
            {
              text: "リップカラー",
              href: '/collections/decorte/リップメイク'
            },
            {
              text: "ネイルカラー",
              href: '/collections/decorte/ネイル'
            },
            {
              text: "リムーバー",
              href: '/collections/decorte/リムーバー'
            }
          ]
        },
        {
          text: "ベースメイク",
          href: '/collections/decorte/ベースメイク',
          children: [
            {
              text: "パウダーファンデーション",
              href: '/collections/decorte/パウダーファンデーション'
            },
            {
              text: "リキッドファンデーション",
              href: '/collections/decorte/リキッドファンデーション'
            },
            {
              text: "クッションファンデーション",
              href: '/collections/decorte/クッションファンデーション'
            },
            {
              text: "クリームファンデーション",
              href: '/collections/decorte/クリームファンデーション'
            },
            {
              text: "化粧下地",
              href: '/collections/decorte/化粧下地-プライマー'
            },
            {
              text: "フェイスパウダー",
              href: '/collections/decorte/フェイスパウダー-セッティングパウダー'
            },
            {
              text: "コンシーラー",
              href: '/collections/decorte/コンシーラー'
            },
            {
              text: "コントロールカラー",
              href: '/collections/decorte/コントロールカラー'
            }
          ]
        },
        {
          text: "フレグランス",
          href: '/collections/decorte/フレグランス',
          children: [
            {
              text: "オードトワレ",
              href: '/collections/decorte/decorteフレグランス'
            }
          ]
        },
        {
          text: "ボディ＆ヘア",
          href: '/collections/decorte/ボディ＆ヘア',
          children: [
            {
              text: "ヘアケア",
              href: '/collections/decorte/ヘアケア'
            },
            {
              text: "スタイリング",
              href: '/collections/decorte/スタイリング'
            },
            {
              text: "頭皮ケア",
              href: '/collections/decorte/頭皮ケア'
            },
            {
              text: "ボディケア",
              href: '/collections/decorte/ボディケア'
            },
            {
              text: "ハンドケア",
              href: '/collections/decorte/ハンドケア'
            }
          ]
        },
        {
          text: "インナービューティ他",
          href: '',
          children: [
            {
              text: "スキンケア用アクセサリー",
              href: '/collections/decorte/スキンケア用アクセサリー'
            },
            {
              text: "ベースメイク用アクセサリー",
              href: '/collections/decorte/ベースメイク用アクセサリー'
            },
            {
              text: "ポイントメイク用アクセサリー",
              href: '/collections/decorte/ポイントメイク用アクセサリー'
            },
            {
              text: "インナービューティー",
              href: '/collections/decorte/インナービューティー'
            }
          ]
        }
      ],
      modalScrollPosition: 0,
      cpbConnectDialog: false,
      cpbMainVisualSwiperOptions: {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      customer_id: __st.cid,
      cpb_connect_token: '',
      cpb_connect_status: '',
      isOpenModal: false,
      activeIndex: null,
      activeChildIndex: null,
    }
  },
  computed: {
    hash() {
      return parsedUrl.hash
    },
    cpbCounselingFirstNotAvailable() {
      return this.counselingStatus.q1 === null || (this.counselingStatus.q1 === 1 && this.counselingStatus.q2 === null)
    },
    decorteCounselingFirstNotAvailable() {
      return this.decorteCounselingStatus.q1 === null || this.decorteCounselingStatus.q2 === null || this.decorteCounselingStatus.q3 === null
    },
    prediaCounselingFirstNotAvailable() {
      return this.prediaCounselingStatus.q1 === null || this.prediaCounselingStatus.q2 === null || this.prediaCounselingStatus.q3 === null
    }
  },
  methods: {
    getCategoryFromName(v) {
      return this.categories.find(category => category.title_ja === v)
    },
    closeCounselingModal() {
      this.counselingModal = false
      this.retryCounseling()
    },
    addCart() {
      const addCartBtn = document.getElementsByClassName('product-form__cart-submit')[0]
      addCartBtn.click()
      this.closeCounselingModal()
    },
    retryCounseling() {
      this.counselingModalStep = 1
      this.counselingStatus = {
        q1: null,
        q2: null,
        q3: null
      }
      this.decorteCounselingStatus = {
        q1: null,
        q2: null,
        q3: null
      }
      this.prediaCounselingStatus = {
        q1: null,
        q2: null,
        q3: null
      }
    },
    async verifyLineLogin() {
      const code = parsedUrl.searchParams.get("code")
      if (code) {
        const accessToken = await this.getAccessToken(code)
        this.lineUser = await this.getUserProfile(accessToken.data.access_token)
        this.isLineLogin = await this.getConnectStatus(this.lineUser.data.userId, accessToken.data.access_token)
      }
      return this.isLineLogin
    },
    verifyHukubukuro() {
      if (!!this.isLineLogin) {
        return true
      } else {
        // LINE未ログイン時の処理
        location.href = 'https://online.sukiya.biz/pages/newyear-2023'
      }
    },
    async getAccessToken(code) {
      let params = new URLSearchParams()
      const redirect_uri = 'https://online.sukiya.biz' + pathname
      params.append('grant_type', 'authorization_code')
      params.append('code', code)
      params.append('redirect_uri', redirect_uri)
      params.append('client_id', '1653973522')
      params.append('client_secret', '9f414ff957dd68ee18475c82e5b8a20a')
      return await axios.post('https://api.line.me/oauth2/v2.1/token', params)
        .catch(error => console.error(error))
    },
    async getUserProfile(accessToken) {
      return await axios.get('https://api.line.me/v2/profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).catch(error => console.error(error))
    },
    async getConnectStatus(userId, accessToken) {
      const connectedUser = await axios.get(`https://liffapi.sukiya.biz/api/line-user/${userId}?token=${accessToken}`)
        .catch(error => console.error(error))
      this.isLineConnected = !!connectedUser
      return this.isLineConnected
    },
    openDecorteCounselingModal() {
      window.open(
        'https://www.cosmedecorte.com/counseling2/?utm_source=storelist&utm_medium=Sukiya&utm_campaign=counseling',
        'webカウンセリング',
        "width=820,height=600,scrollbars=yes,status=no,toolbar=no,location=no,menubar=no,directories=no,resizable=yes"
      )
    },
    async cpbConnectCheck() {
      const url = cpbApiBaseUrl + '/check-id-connect'
      const response = await axios.post(url, {
        site_serial: cpbApiSiteSerial,
        tkisk_cd: '606222',
        tkisk_ec_id: this.customer_id,
      })

      this.cpb_connect_status = response.data.id_renkei_kbn
    },
    async getCpbConnectOtp() {
      const url = cpbApiBaseUrl + '/get-connect-otp'
      const response = await axios.post(url, {
        site_serial: cpbApiSiteSerial,
        tkisk_cd: '606222',
        tkisk_ec_id: this.customer_id,
      })

      this.cpb_connect_token = response.data.onetime_password
    }
  },
  created() {
    if (localStorage.isLineLogin) {
      this.isLineLogin = localStorage.isLineLogin === 'true'
    }
    if (localStorage.counselingStatus) {
      this.counselingStatus = JSON.parse(localStorage.counselingStatus)
    }

    const pathname = location.pathname

    if (pathname === '/pages/newyear-2023') {
      this.verifyLineLogin()
    }

    // CPB連携チェック
    if (pathname === '/pages/cpb-connect' || pathname === '/cart') {
      this.cpbConnectCheck()
    }

    if (pathname === '/pages/cpb-connect') {
      this.getCpbConnectOtp()
    }
  },
  mounted() {
    this.$refs.modal.classList.remove('tw-hidden');
  },
  watch: {
    isLineLogin(v) {
      localStorage.isLineLogin = v;
    },
    counselingStatus: {
      handler: function (v, oldVal) {
        localStorage.counselingStatus = JSON.stringify(v);
      },
      deep: true
    },
    decorteCounselingStatus: {
      handler: function (v, oldVal) {
        localStorage.decorteCounselingStatus = JSON.stringify(v);
      },
      deep: true
    },
    prediaCounselingStatus: {
      handler: function (v, oldVal) {
        localStorage.prediaCounselingStatus = JSON.stringify(v);
      },
      deep: true
    },
    isOpenModal: function (newValue) {
      if (newValue) {
        document.body.classList.add('tw-overflow-hidden');
      } else {
        document.body.classList.remove('tw-overflow-hidden');
      }
    }
  },
})
