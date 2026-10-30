/* Interaction harness for production JS/CSS and dialog markup. Not a Liquid renderer.
   Run: NODE_PATH=<path-to-playwright> node tests/dual-path.cjs
   Shopify rendering and Theme Editor tests require an unpublished development theme. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const gateway = read('sections/cellife-journey-gateway.liquid');
const schema = JSON.parse(gateway.split('{% schema %}')[1].split('{% endschema %}')[0]);
const defaults = Object.fromEntries(schema.settings.map(s => [s.id, s.default || '']));
const supplements = '/';
const diagnostics = '/pages/diagnostic-test-kits';
function substitute(html, values = {}) {
  return html.replace(/{{\s*(.*?)\s*}}/g, (_, key) => {
    key = key.split('|')[0].trim();
    if (key.startsWith('section.settings.')) return defaults[key.slice(17)];
    return ({'section.id':'test', supplements_url:supplements, diagnostics_url:diagnostics, ...values})[key] || '';
  });
}
const dialog = substitute(gateway.slice(gateway.indexOf('<cellife-journey-dialog>'), gateway.indexOf('</cellife-journey-dialog>') + '</cellife-journey-dialog>'.length));
function card(title, href, choice, number) {
  let source = read('snippets/cellife-journey-card.liquid');
  source = source.replace(/{% if image != blank %}[\s\S]*?{% else %}([\s\S]*?){% endif %}/, '$1');
  source = source.replace(/{%[^%]*%}/g, '');
  return substitute(source, {heading:title, url:href, journey:choice, number, text:defaults[choice === 'supplements' ? 'supplements_text' : 'diagnostics_text'], label:`Explore ${title.toLowerCase()}`});
}
function fixture(url) {
  const isHome = url.pathname === '/';
  const isSupplements = url.pathname === supplements;
  const isDiagnostics = url.pathname === diagnostics;
  let nav = read('sections/cellife-journey-nav.liquid');
  nav = nav.slice(nav.indexOf('<nav'), nav.indexOf('</nav>') + 6);
  nav = nav.replace(/{% if request.path == (\w+) %}([\s\S]*?){% endif %}/g, (_, name, content) => url.pathname === (name === 'supplements_url' ? supplements : diagnostics) ? content : '');
  nav = substitute(nav, {'section.settings.label':'Shopping pathways'}).replace('aria-label=""', 'aria-label="Shopping pathways"');
  // Nav defaults come from its own schema, not the gateway schema.
  nav = nav.replace(/>Explore supplements</g, '>Supplements<').replace(/>Explore diagnostic test kits</g, '>Diagnostic Test Kits<');
  const heading = isHome ? 'Cellife homepage' : isSupplements ? 'Supplements' : isDiagnostics ? 'Diagnostic Test Kits' : 'Direct catalog visit';
  const content = isHome ? `<section class="cellife-journeys"><div class="cellife-journeys__intro"><p class="cellife-journeys__eyebrow">${defaults.eyebrow}</p><h2>${defaults.heading}</h2><p>${defaults.text}</p></div><div class="cellife-journeys__grid">${card('Supplements', supplements, 'supplements', '01')}${card('Diagnostic Test Kits', diagnostics, 'diagnostics', '02')}</div></section>` : `<section class="cellife-journeys"><h1>${heading}</h1><a href="/">Home</a><a href="/collections/supplements">Explore range</a></section>`;
  return `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${heading}</title><style>*{box-sizing:border-box}body{margin:0;font:16px Arial,sans-serif}</style><link rel="stylesheet" href="/assets/cellife-journeys.css"><script defer src="/assets/cellife-journeys.js"></script><body>${nav}<main>${content}</main>${isHome && url.searchParams.get('overlay') !== 'off' ? dialog : ''}</body></html>`;
}
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (['/assets/cellife-journeys.css','/assets/cellife-journeys.js'].includes(url.pathname)) {
    res.setHeader('Content-Type', url.pathname.endsWith('.js') ? 'text/javascript' : 'text/css');
    return res.end(read(url.pathname.slice(1)));
  }
  res.setHeader('Content-Type', 'text/html');
  res.end(fixture(url));
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH || '/usr/bin/chromium', args:['--no-sandbox']});
  const errors = [];
  const newPage = async (width, options = {}) => {
    const context = await browser.newContext({viewport:{width,height:900}, ...options});
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.message));
    return page;
  };
  const open = async page => page.locator('dialog').evaluate(d => d.open);
  try {
    for (const width of [390,1440]) {
      let page = await newPage(width);
      await page.goto(base);
      await page.waitForSelector('dialog[open]');
      if (process.env.SCREENSHOT_DIR) { fs.mkdirSync(process.env.SCREENSHOT_DIR, {recursive:true}); await page.screenshot({path:path.join(process.env.SCREENSHOT_DIR, `dialog-${width}.png`), fullPage:true}); }
      assert(await open(page), 'first homepage entry opens enabled dialog');
      await page.keyboard.press('Shift+Tab');
      assert(await page.evaluate(() => Boolean(document.activeElement.closest('dialog'))), 'native focus trap');
      await page.keyboard.press('Escape');
      await page.waitForFunction(() => !document.querySelector('dialog').open);
      assert.equal(await page.evaluate(() => localStorage.getItem('cellife:journey:v1')), 'dismissed');
      await page.reload();
      assert.equal(await open(page), false, 'return/reload does not interrupt');
      if (process.env.SCREENSHOT_DIR) await page.screenshot({path:path.join(process.env.SCREENSHOT_DIR, `gateway-${width}.png`), fullPage:true});
      await page.context().close();

      page = await newPage(width);
      await page.goto(base);
      await page.waitForSelector('dialog[open]');
      await page.locator('dialog a[data-cellife-choice="supplements"]').click();
      await page.waitForURL(base+supplements);
      assert.equal(await page.evaluate(() => localStorage.getItem('cellife:journey:v1')), 'supplements');
      assert.equal(await page.locator('nav a[aria-current="page"]').count(), 1);
      const returningTab = await page.context().newPage();
      await returningTab.goto(base);
      assert.equal(await open(returningTab), false, 'saved choice suppresses a new-tab homepage visit');
      assert.equal(new URL(returningTab.url()).pathname, '/', 'saved preference never redirects');
      await returningTab.close();
      assert.equal(await open(page), false, 'choosing Supplements on the homepage settles the dialog');
      await page.locator('.cellife-journeys a[data-cellife-choice="diagnostics"]').click();
      await page.waitForURL(base+diagnostics);
      assert.equal(await page.locator('h1').innerText(), 'Diagnostic Test Kits');
      assert.equal(await page.locator('nav a').count(),2);
      await page.goBack();
      await page.waitForURL(base+'/');
      assert.equal(await open(page), false, 'Back from Diagnostics does not reopen the popup');
      await page.context().close();

      for (const direct of ['/products/sample','/collections/supplements']) {
        page = await newPage(width);
        await page.goto(base+direct);
        assert.equal(await page.locator('dialog').count(),0);
        await page.getByRole('link',{name:'Home',exact:true}).click();
        assert.equal(await open(page), false, 'internal homepage visit skips overlay');
        await page.context().close();
      }
      page = await newPage(width);
      await page.goto(base);
      await page.waitForSelector('dialog[open]');
      await page.locator('[data-cellife-dismiss]').click();
      assert.equal(await open(page), false, 'visible dismiss button works');
      assert.equal(await page.evaluate(() => document.documentElement.classList.contains('cellife-journey-modal-open')), false, 'dismiss restores scrolling');
      await page.context().close();

      page = await newPage(width);
      await page.goto(base+'/?overlay=off');
      assert.equal(await page.locator('dialog').count(),0,'disabled overlay absent');
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),'no horizontal overflow');
      await page.context().close();

      page = await newPage(width);
      await page.addInitScript(() => { Storage.prototype.getItem = () => { throw Error('Storage unavailable'); }; });
      await page.goto(base);
      assert.equal(await open(page),false,'blocked storage skips dialog');
      await page.locator('nav a').first().click();
      await page.waitForURL(base+supplements);
      await page.context().close();
      console.log(`PASS ${width}px: first/return/direct visits, focus, Escape, choice, Back, switching, disabled overlay, blocked storage`);
    }
    const page = await newPage(320,{javaScriptEnabled:false});
    await page.goto(base);
    assert.equal(await open(page),false,'no-JS dialog hidden');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),'320px reflow');
    await page.locator('nav a').last().click();
    await page.waitForURL(base+diagnostics);
    await page.context().close();
    assert.deepEqual(errors,[],'no JavaScript errors');
    console.log('PASS no JavaScript: native navigation; PASS 320px reflow; no runtime errors');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); server.close(); process.exitCode=1; });
