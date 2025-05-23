const cpbApiBaseUrl = document.querySelector('[cpb-api-base-url]').getAttribute('cpb-api-base-url');
const cpbApiSiteSerial = document.querySelector('[cpb-api-site-serial]').getAttribute('cpb-api-site-serial');
const cpbApiCheckIdUrl = document.querySelector('[cpb-api-check-id-url]').getAttribute('cpb-api-check-id-url');
const cpbApiGetOtpUrl = document.querySelector('[cpb-api-get-otp-url]').getAttribute('cpb-api-get-otp-url');
const customerId = __st.cid;

async function cpbConnectCheck() {
  const url = `${cpbApiBaseUrl}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      site_serial: cpbApiSiteSerial,
      tkisk_cd: '627714',
      tkisk_ec_id: String(customerId),
      target_url: cpbApiCheckIdUrl,
    }),
  });

  const data = await response.json();

  if (data.id_renkei_kbn === '2') {
    const statusElements = document.querySelectorAll('.cpb-connect-status');
    statusElements.forEach((element) => {
      element.classList.remove('tw-hidden');
    });
  } else {
    const statusElements = document.querySelectorAll('.cpb-connect-status-not-connected');
    statusElements.forEach((element) => {
      element.classList.remove('tw-hidden');
    });
  }

  return data.id_renkei_kbn;
}

async function getCpbConnectOtp() {
  const url = `${cpbApiBaseUrl}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      site_serial: cpbApiSiteSerial,
      tkisk_cd: '627714',
      tkisk_ec_id: String(customerId),
      target_url: cpbApiGetOtpUrl,
    }),
  });

  const data = await response.json();
  const aTags = document.querySelectorAll('a.cpb-connect-register');
  aTags.forEach((aTag) => {
    aTag.href += data.onetime_password;
  });

  return data.onetime_password;
}

cpbConnectCheck();
getCpbConnectOtp();
