global.localStorage = window.localStorage;
// モックの作成
global.document.querySelector = jest.fn(() => ({
  classList: {
    remove: jest.fn(),
  },
}));

// test/line-login.test.js
const { verifyLineLogin } = require('../assets/line-login');

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({"expires_in": 3600, "userId": "userId", "access_token": "accessToken"}),
  })
);

describe('verifyLineLogin', () => {
  it('returns true if valid connect status is fetched', async () => {
    const result = await verifyLineLogin('myTestCode');
    expect(result).toBe(true);
  });
});
