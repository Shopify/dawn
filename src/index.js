import Vue from "vue";
import axios from 'axios'
import './css/input.css'
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

import './sass/app.scss'
const parsedUrl = new URL(window.location.href);
const pathname = parsedUrl.pathname;
const host = window.location.hostname
let cpbCounselingUrl = ''
let cpbApiBaseUrl = ''
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

// #app要素がある場合のみVueを起動する
if (document.getElementById('app')) {
  console.log('vue start')
  new Vue({
    el: '#app',
    delimiters: ['${', '}'],
    data() {
      return {
        isLineLogin: false,
        lineUser: null,
        isLineConnected: false,
        customer_id: __st.cid,
        cpb_connect_token: '',
        cpb_connect_status: '',
        activeIndex: null,
        activeChildIndex: null,
      }
    },
    methods: {
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
    watch: {
      isLineLogin(v) {
        localStorage.isLineLogin = v;
      }
    },
  })
}

