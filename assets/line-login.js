const lineAccessToken = localStorage.getItem('lineAccessToken');
const isLineLogin = localStorage.getItem('isLineLogin');

async function verifyAccessToken(accessToken) {
  try {
    // fetchをawaitで呼び出し
    const response = await fetch(`https://api.line.me/oauth2/v2.1/verify?access_token=${accessToken}`);
    const data = await response.json();
    // アクセストークンの有効性を確認
    return data.expires_in > 0;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

async function getAccessToken(code) {
  const redirect_uri = window.location.origin + window.location.pathname
  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirect_uri);
  params.append('client_id', '1653973522');
  params.append('client_secret', '9f414ff957dd68ee18475c82e5b8a20a');

  const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params.toString()
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

async function getUserProfile(accessToken) {
  const response = await fetch('https://api.line.me/v2/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

async function getConnectStatus(userId, accessToken) {
  const response = await fetch(`https://liffapi.sukiya.biz/api/line-user/${userId}?token=${accessToken}`);
  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }
  const connectedUser = await response.json();
  return !!connectedUser;
}

async function verifyLineLogin(code) {
  console.log('verifyLineLogin');
  const accessToken = await getAccessToken(code);
  if (accessToken.access_token) {
    localStorage.setItem('lineAccessToken', accessToken.access_token);
  }
  const lineUser = await getUserProfile(accessToken.access_token);
  return await getConnectStatus(lineUser.userId, accessToken.access_token);
}

async function verifyLineApp(access_token) {
  // LINE APIでアクセストークンの検証
  const isAccessTokenVerify = await verifyAccessToken(access_token);
  // 検証を通ったアクセストークンがない場合はLINEログインを促す
  if (!isAccessTokenVerify) {
    document.querySelector('.line-login-required').classList.remove('tw-hidden');
  } else {
    document.querySelector('.line-login-success').classList.remove('tw-hidden');
  }
  // LINE APPでユーザーの検証
  const lineUser = await getUserProfile(access_token);
  // ユーザーの存在を返す
  return await getConnectStatus(lineUser.userId, access_token);
}

if (!lineAccessToken || lineAccessToken === 'undefined' || lineAccessToken === 'true') {
  console.log('no token');
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  if (code) {
    verifyLineLogin(code).then(r => {
      console.log('verifyLineLogin === true', r);
      document.querySelector('.line-login-success').classList.remove('tw-hidden');
      if (r) {
        document.querySelector('.line-connect-success').classList.remove('tw-hidden');
        document.getElementById('open-modal').classList.add('tw-hidden');
        localStorage.setItem('isLineLogin', 'true');
      } else {
        document.querySelector('.line-connect-required').classList.remove('tw-hidden');
        changeToDummyImage();
      }
    }).catch(e => {
      console.error('verifyLineLogin === false', e);
      changeToDummyImage();
    });
  } else {
    document.querySelector('.line-login-required').classList.remove('tw-hidden');
  }
} else {
  console.log('has token');
  verifyLineApp(lineAccessToken).then(r => {
    console.log('response is ', r)
    // ユーザーが存在しない場合はID連携を促す
    if (!r) {
      changeToDummyImage();
      document.querySelector('.line-connect-required').classList.remove('tw-hidden');
    } else {
      document.querySelector('.line-connect-success').classList.remove('tw-hidden');
      document.getElementById('open-modal').classList.add('tw-hidden');
      localStorage.setItem('isLineLogin', 'true');
    }
  }).catch(e => {
    changeToDummyImage();
    console.error('verifyLineApp === false', e);
  });
}

if (isLineLogin !== 'true') {
  document.querySelector('.line-login-modal').openDialog();
}

function changeToDummyImage() {
  // lineLoginRequiredクラスを思つimg要素のsrc属性を'https://via.placeholder.com/600x600?text=Secret'に変更する
  document.querySelectorAll('.line-login-required').forEach((element) => {
    // srcset属性を削除
    element.removeAttribute('srcset');
    element.src = 'https://via.placeholder.com/600x600?text=Secret';
  });
}

// TODO::テスト書きたい
// assets/line-login.js
// module.exports = {
//   // Add other function exports here if necessary...
//   verifyLineLogin: verifyLineLogin
// }
