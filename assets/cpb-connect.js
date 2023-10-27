const cpbApiBaseUrl = document.querySelector('[cpb-api-base-url]').getAttribute('cpb-api-base-url');
const cpbApiSiteSerial = document.querySelector('[cpb-api-site-serial]').getAttribute('cpb-api-site-serial');
const customerId = __st.cid;

async function cpbConnectCheck() {
  const url = `${cpbApiBaseUrl}/check-id-connect`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      site_serial: cpbApiSiteSerial,
      tkisk_cd: '606222',
      tkisk_ec_id: customerId,
    }),
  });

  const data = await response.json();
  console.log(data);

  if (data.id_renkei_kbn === 2) {
    const statusElements = document.querySelectorAll('.cpb-connect-status');
    statusElements.forEach((element) => {
      element.classList.remove('tw-hidden');
    });
  }

  return data.id_renkei_kbn;
}

async function getCpbConnectOtp() {
  const url = `${cpbApiBaseUrl}/get-connect-otp`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      site_serial: cpbApiSiteSerial,
      tkisk_cd: '606222',
      tkisk_ec_id: customerId,
    }),
  });

  const data = await response.json();
  console.log(data);
  const aTags = document.querySelectorAll('a.cpb-connect-register');
  aTags.forEach((aTag) => {
    aTag.href += data.onetime_password;
  });

  return data.onetime_password;
}

cpbConnectCheck();
getCpbConnectOtp();

console.log('cpb-connect.js')
