const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {Liquid}=require('liquidjs'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const e=new Liquid({root:path.join(root,'snippets'),extname:'.liquid'});
e.registerTag('form',{parse(t,tokens){this.templates=[];const stream=this.liquid.parser.parseStream(tokens).on('tag:endform',()=>stream.stop()).on('template',t=>this.templates.push(t));stream.start();},*render(ctx,out){yield this.liquid.renderer.renderTemplates(this.templates,ctx,out);}});
for(const f of ['asset_url','inline_asset_content','t','money','money_with_currency','standard_event_data'])e.registerFilter(f,s=>s);
e.registerFilter('stylesheet_tag',()=> '');e.registerFilter('image_url',()=> 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="200"%3E%3Crect width="100" height="200" fill="blue"/%3E%3C/svg%3E');
const source=read('sections/cellife-paged-collection.liquid').split('{% schema %}')[0].replace(/{% paginate .*?%}|{% endpaginate %}/g,'');
async function render(id,page=1){const products=Array.from({length:4},(_,i)=>({id:i+1,title:(i===1?'A much longer title to wrap across multiple lines':'Product '+i)+' page '+page,url:'/products/test',available:true,compare_at_price:i===2?1500:null,price:1000,price_min:1000,price_max:1000,variants:[{id:1}],featured_media:{width:100,height:200,aspect_ratio:.5,alt:'Product'},media:[]}));return e.parseAndRender(source,{section:{id,settings:{title:id,collection:{products},color_scheme:'scheme-1'}},settings:{card_style:'standard',page_width:1400,currency_code_enabled:false,cellife_card_details:true},paginate:{current_page:page,parts:[1,2,3].map(n=>({title:n,is_link:n!==page,url:'/?page='+n}))}}, {globals:{settings:{card_style:'standard',page_width:1400,currency_code_enabled:false,cellife_card_details:true}}});}
(async()=>{const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});try{
const first=await render('one'),second=await render('two');
const fontFaces=['inter-latin-normal','broadacre-medium'].map((name,i)=>"@font-face{font-family:'"+(i?'Broadacre':'Inter')+"';font-weight:"+(i?'500':'100 900')+";src:url(data:font/woff2;base64,"+fs.readFileSync(path.join(root,'assets',name+'.woff2')).toString('base64')+") format('woff2')}").join('');
for(const width of [320,390,800,1440]){const p=await browser.newPage({viewport:{width,height:1200}});
await p.route('https://fixture.test/', route=>route.fulfill({body:'<html></html>',contentType:'text/html'}));await p.goto('https://fixture.test/');
await p.setContent('<!doctype html><html><style>html{font-size:62.5%;box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}body{margin:0;--color-foreground:3,16,123;--font-body-family:Inter;--font-heading-family:Broadacre;--font-heading-weight:500;--font-body-scale:1;--font-heading-scale:1;--page-width:140rem}'+fontFaces+['base.css','component-card.css','component-price.css','component-pagination.css','cellife-editorial.css','section-cellife-paged-collection.css'].map(n=>read('assets/'+n)).join('\n')+'</style><body class="cellife-shell">'+first+second+'</body></html>');
await p.addScriptTag({content:read('assets/cellife-paged-collection.js')});
await p.evaluate(()=>document.fonts.ready);
await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(resolve)));
assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
const boxes=await p.locator('cellife-paged-collection').first().locator('.card').evaluateAll(xs=>xs.map(x=>({height:x.getBoundingClientRect().height,width:x.getBoundingClientRect().width})));
assert(boxes.every(x=>Math.abs(x.height-boxes[0].height)<1));
assert.equal(await p.locator('.card__media img').first().evaluate(x=>getComputedStyle(x).padding),width<750?'8px':'12px');
const content=await p.locator('cellife-paged-collection').first().locator('.card > .card__content').evaluateAll(xs=>xs.map(x=>({row:x.closest('li').getBoundingClientRect().top,price:x.querySelector('.price').getBoundingClientRect().top,button:x.querySelector('.cellife-card-action').getBoundingClientRect().top})));
for(const item of content)for(const other of content.filter(x=>Math.abs(x.row-item.row)<1)){assert(Math.abs(item.price-other.price)<1);assert(Math.abs(item.button-other.button)<1);}
const media=await p.locator('.card__inner').first().boundingBox();assert(Math.abs(media.width-media.height)<1, JSON.stringify(media));
await p.route('**/*section_id=one*',async route=>route.fulfill({status:200,contentType:'text/html',body:await render('one',Number(new URL(route.request().url()).searchParams.get('page')))}));
await p.locator('cellife-paged-collection').first().locator('a[href="/?page=2"]').click();
await p.waitForFunction(()=>document.querySelector('cellife-paged-collection').textContent.includes('page 2'));
assert(!(await p.locator('cellife-paged-collection').nth(1).textContent()).includes('page 2'));
assert.equal(await p.locator('cellife-paged-collection').first().locator('[aria-current=page]').textContent(),'2');
await p.locator('cellife-paged-collection').first().locator('a[href="/?page=3"]').click();
await p.waitForFunction(()=>document.querySelector('cellife-paged-collection').textContent.includes('page 3'));
assert(!(await p.locator('cellife-paged-collection').nth(1).textContent()).includes('page 3'));
console.log('PASS '+width+'px: light image padding, aligned long titles/sale prices/buttons, equal card heights, independent section paging');await p.close();}
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exit(1)});
