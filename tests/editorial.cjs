/* Renders the custom Liquid sections with LiquidJS + real CSS, without Shopify APIs.
   Native Shopify commerce and app blocks still require a development-theme check. */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {Liquid}=require('liquidjs');
const {chromium}=require('playwright');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>{const s=read(p);return JSON.parse(s.slice(s.indexOf('{')))};
const engine=new Liquid({root:[path.join(root,'snippets'),path.join(root,'sections')],extname:'.liquid',strictFilters:true});
engine.registerFilter('asset_url',s=>`/assets/${s}`);
engine.registerFilter('stylesheet_tag',s=>`<link rel="stylesheet" href="${s}">`);
engine.registerFilter('image_url',()=> '');
engine.registerFilter('image_tag',()=> '');
engine.registerFilter('video_tag',()=> '');
const settings={...json('config/settings_data.json').current};
const schema=JSON.parse(read('config/settings_schema.json'));
for(const group of schema)for(const s of group.settings||[])if(settings[s.id]===undefined && s.default!==undefined)settings[s.id]=s.default;
const sourceFor=type=>read(`sections/${type}.liquid`).split('{% schema %}')[0];
const sectionSchema=type=>JSON.parse(read(`sections/${type}.liquid`).split('{% schema %}')[1].split('{% endschema %}')[0]);
const defaults=list=>Object.fromEntries((list||[]).filter(x=>x.id).map(x=>[x.id,x.default===undefined?null:x.default]));
const home=json('templates/index.json');
const customTypes=new Set(['cellife-hero','cellife-journey-gateway','cellife-content-grid','cellife-editorial','cellife-product-shelf','cellife-community','cellife-faq']);
function context(type,section,id,index=1){
 const schema=sectionSchema(type),sectionSettings={...defaults(schema.settings),...section.settings};
 // Fixture media are intentionally absent; no remote images or invented products.
 sectionSettings.image=null;sectionSettings.mobile_image=null;
 if(sectionSettings.collection)sectionSettings.collection={products:[],url:'/collections/supplements'};
 const blocks=(section.block_order||[]).map(key=>{const b=section.blocks[key],definition=schema.blocks.find(x=>x.type===b.type);return {id:key,type:b.type,settings:{...defaults(definition?.settings),...b.settings},shopify_attributes:''}});
 return {section:{id,index,settings:sectionSettings,blocks},settings,request:{page_type:'index',design_mode:false,path:'/'},routes:{root_url:'/'},page:{title:'Cellife'},Shopify:{designMode:false}};
}
async function renderSection(type,data,id,index){return engine.parseAndRender(sourceFor(type),context(type,data,id,index),{globals:{settings,routes:{root_url:'/'}}});}
async function build(){
 let body='';let index=0;
 for(const id of home.order){const section=home.sections[id];if(section.disabled||!customTypes.has(section.type))continue;body+=await renderSection(section.type,section,id,++index);}
 const nav=await renderSection('cellife-journey-nav',{settings:{}},'journey-nav',0);
 const wrap=(content,kind='index')=>`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cellife editorial layout fixture</title><style>*{box-sizing:border-box}html{font-size:10px}body{margin:0;font:16px Arial,sans-serif}h1,h2,h3{font-weight:500}button,input{font:inherit}</style><link rel="stylesheet" href="/assets/cellife-editorial.css"><script defer src="/assets/cellife-journeys.js"></script><body class="cellife-shell cellife-template-${kind}"><header style="padding:24px 40px;color:#3e2b62;background:#fff;font-size:28px">Cellife <small style="float:right;font-size:14px">Layout fixture</small></header>${nav}<main id="MainContent">${content}</main><footer style="padding:64px 40px;background:#3e2b62;color:white">Cellife · Footer layout placeholder</footer></body></html>`;
 return wrap(body);
}
function structuralChecks(){
 assert.equal(home.sections.cellife_gateway.settings.overlay_enabled,true);
 assert.equal(home.sections.cellife_gateway.settings.show_gateway,false);
 assert.equal(home.sections.product_shelf.settings.collection,'supplements');
 const old=json('docs/snapshots/homepage-before-editorial.json');
 assert.deepEqual(home.sections.cellife_hero,old.sections.cellife_hero,'preserve merchant hero');
 assert(read('layout/theme.liquid').includes("'cellife-journeys.js'"),'global popup initialization');
 for(const p of ['templates/index.json','templates/product.json','templates/collection.json','templates/page.science.json','templates/page.ingredients.json','templates/page.about-cellife.json','templates/page.faq.json']){
  const template=json(p);
  for(const id of template.order){
   const section=template.sections[id];assert(section,`${p} ordered section ${id} exists`);
   const schema=sectionSchema(section.type);
   const known=new Map(schema.settings.filter(x=>x.id).map(x=>[x.id,x]));
   for(const [key,val]of Object.entries(section.settings||{})){
    assert(known.has(key),`${p}/${id} unknown setting ${key}`);
    const field=known.get(key);
    if(field.type==='select')assert(field.options.some(x=>x.value===val),`${p}/${id} invalid ${key}`);
   }
   for(const block of Object.values(section.blocks||{}))assert(schema.blocks?.some(x=>x.type===block.type),`${p}/${id} unknown block ${block.type}`);
  }
 }
 const main=read('sections/main-product.liquid');
 assert(main.includes("render 'buy-buttons'"));assert(main.includes('"type": "@app"'));assert(main.includes('product | structured_data'));
 assert(read('snippets/product-disclosures.liquid').includes('metafields.shopify.disclosure'));
 assert.equal(home.sections.community.blocks.story_0.settings.approved,false);
 console.log('PASS schema references/options, real product source, preserved hero, native product/app/disclosure hooks, unapproved story gates');
}
(async()=>{
 structuralChecks();
 const html=await build();assert(!html.includes('{%'),'no unrendered custom Liquid tags');
 const server=http.createServer((req,res)=>{if(req.url.startsWith('/assets/')){const p=req.url.slice(1);if(!/^assets\/[a-z0-9.-]+$/.test(p)){res.statusCode=404;return res.end();}res.setHeader('Content-Type',p.endsWith('.js')?'text/javascript':'text/css');return res.end(read(p));}res.setHeader('Content-Type','text/html; charset=utf-8');res.end(html);});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',args:['--no-sandbox']});
 const base=`http://127.0.0.1:${server.address().port}`;
 try{
  for(const width of [320,390,1440]){
   const context=await browser.newContext({viewport:{width,height:1000}});const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
   await page.addInitScript(()=>localStorage.setItem('cellife:journey:v1','dismissed'));
   await page.goto(base);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}px has no page overflow`);
   assert.equal(await page.locator('dialog').evaluate(d=>d.open),false);
   assert.equal(await page.locator('.cellife-community-card blockquote').count(),0,'no unapproved customer quote');
   assert.equal(await page.locator('.cellife-community-card video').count(),0,'no unapproved video');
   assert.equal(await page.locator('.cellife-community-card').count(),3);
   assert.equal(await page.locator('.cellife-faq-item').count(),4);
   await page.locator('.cellife-faq-item summary').first().click();
   assert.equal(await page.locator('.cellife-faq-item').first().evaluate(d=>d.open),true);
   assert.equal(await page.locator('nav a').first().getAttribute('href'),'/');
   assert.equal(await page.locator('nav a').last().getAttribute('href'),'/pages/diagnostic-test-kits');
   assert.deepEqual(errors,[]);
   if(process.env.SCREENSHOT_DIR){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.SCREENSHOT_DIR,`editorial-${width}.png`),fullPage:true});}
   console.log(`PASS ${width}px: actual custom Liquid rendered, no overflow, FAQ, navigation, placeholder gates, no runtime errors`);
   await context.close();
   const firstContext=await browser.newContext({viewport:{width,height:1000}});
   const firstPage=await firstContext.newPage();
   await firstPage.goto(base);
   await firstPage.waitForSelector('dialog[open]');
   assert.equal(await firstPage.locator('.cellife-gateway').count(),0,'inline gateway remains hidden');
   assert.equal(await firstPage.locator('dialog a').first().getAttribute('href'),'/','popup supplements returns home');
   await firstPage.keyboard.press('Escape');
   await firstPage.waitForFunction(()=>!document.querySelector('dialog').open);
   assert.equal(await firstPage.evaluate(()=>localStorage.getItem('cellife:journey:v1')),'dismissed');
   await firstContext.close();
   console.log(`PASS ${width}px: integrated first-entry popup works while inline gateway stays hidden`);
  }
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exit(1);});
