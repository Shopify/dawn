// Define variables
let lineUser, isLineLogin;

async function verifyLineLogin() {
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");
  if (code) {
    const accessToken = await getAccessToken(code);
    lineUser = await getUserProfile(accessToken.access_token);
    isLineLogin = await getConnectStatus(lineUser.userId, accessToken.access_token);
  }
  return isLineLogin;
}

function verifyHukubukuro() {
  if (isLineLogin) {
    return true;
  } else {
    window.location.href = 'https://online.sukiya.biz/pages/newyear-2023';
  }
}

async function getAccessToken(code) {
  // const redirect_uri = 'https://online.sukiya.biz' + window.location.pathname;
  const redirect_uri = 'http://127.0.0.1:9292' + window.location.pathname;
  const formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('code', code);
  formData.append('redirect_uri', redirect_uri);
  formData.append('client_id', '1653973522');
  formData.append('client_secret', '9f414ff957dd68ee18475c82e5b8a20a');

  const response = await fetch('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    body: formData
  });

  if(!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
  }

  console.log(response);

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

const result = verifyLineLogin();
console.log(result);
