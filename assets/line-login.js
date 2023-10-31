async function verifyLineLogin() {
  console.log('verifyLineLogin');
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  let isLineLogin = false;
  if (code) {
    const accessToken = await getAccessToken(code);
    if (accessToken.access_token) {
      localStorage.setItem('lineAccessToken', accessToken.access_token);
    }
    const lineUser = await getUserProfile(accessToken.access_token);
    isLineLogin = await getConnectStatus(lineUser.userId, accessToken.access_token);
  }

  return isLineLogin;
}

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

async function verifyLineApp(access_token) {
  // LINE APPでユーザーの検証
  const lineUser = await getUserProfile(access_token);
  // ユーザーの存在を返す
  return await getConnectStatus(lineUser.userId, access_token);
}

function verifyHukubukuro() {
  if (isLineLogin) {
    return true;
  } else {
    window.location.href = 'https://online.sukiya.biz/pages/newyear-2023';
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

const lineAccessToken = localStorage.getItem('lineAccessToken');
if (!lineAccessToken || lineAccessToken === 'undefined') {
  console.log('no token');

  verifyLineLogin().then(r => {
    console.log('verifyLineLogin === true', r);
  }).catch(e => {
    console.error('verifyLineLogin === false', e);
  });
} else {
  console.log('has token');
  // LINE APIでアクセストークンの検証
  const isAccessTokenVerify = await verifyAccessToken(lineAccessToken);
  // アクセストークンがない場合はLINEログインを促す
  if (!isAccessTokenVerify) {
    // .line-login-required のtw-hiddenクラスを削除
    document.querySelector('.line-login-required').classList.remove('tw-hidden');
  }
  verifyLineApp(lineAccessToken).then(r => {
    console.log('response is ',r)
    // ユーザーが存在しない場合はID連携を促す
    if (!r) {
      // .line-connect-required のtw-hiddenクラスを削除
      document.querySelector('.line-connect-required').classList.remove('tw-hidden');
    }
  }).catch(e => {
    console.error('verifyLineApp === false', e);
  });
}
