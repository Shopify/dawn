// Render the new page layouts with actual Liquid and check mobile/desktop overflow.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {Liquid}=require('liquidjs'),{chromium}=require('playwright');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const e=new Liquid({root:path.join(root,'snippets'),extname:'.liquid'});
e.registerTag('form',{parse(t,tokens){this.templates=[];const s=this.liquid.parser.parseStream(tokens).on('tag:endform',()=>s.stop()).on('template',t=>this.templates.push(t));s.start();},*render(ctx,out){out.write('<form method="post">');yield this.liquid.renderer.renderTemplates(this.templates,ctx,out);out.write('</form>');}});
for(const f of ['asset_url','t','inline_asset_content'])e.registerFilter(f,s=>s);
e.registerFilter('stylesheet_tag',()=> '');
async function render(name,type){const d=JSON.parse(read('templates/'+name)),s=Object.values(d.sections).find(s=>s.type===type);const blocks=(s.block_order||[]).map(id=>({id,...s.blocks[id]}));return e.parseAndRender(read('sections/'+type+'.liquid').split('{% schema %}')[0],{section:{id:'fixture',settings:{color_scheme:'scheme-1',...s.settings},blocks},settings:{animations_reveal_on_scroll:false},form:{},customer:{}});}
(async()=>{
 const stockists=await render('page.stockist.json','cellife-directory'),contact=await render('page.contact.json','cellife-contact');
 const all=JSON.parse(read('templates/collection.all-products.json')).sections.intro.settings.custom_liquid;
 const search=await e.parseAndRender(all,{section:{id:'fixture'},routes:{search_url:'/search'}});
 const notice=JSON.parse(read('templates/collection.export-line.json')).sections.export_notice.settings.custom_liquid;
 assert((await e.parseAndRender(notice,{localization:{country:{iso_code:'AU'}}})).includes('Export Only – Not Available in Australia'));
 assert(!(await e.parseAndRender(notice,{localization:{country:{iso_code:'NZ'}}})).includes('Export Only'));
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{for(const [name,html] of [['stockists',stockists],['contact',contact],['search',search]])for(const width of [320,390,800,1440]){
  const p=await browser.newPage({viewport:{width,height:1000}});
  await p.setContent('<!doctype html><html lang="en"><meta charset="utf-8"><title>Page fixture</title><style>html{font-size:62.5%;box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}body{margin:0;--color-foreground:62,43,98;--color-background:244,243,242;--font-body-family:Arial;--font-heading-family:Arial;--font-body-scale:1;--font-heading-scale:1;--page-width:140rem;font:16px Arial}'+read('assets/base.css')+read('assets/section-contact-form.css')+read('assets/section-cellife-pages.css')+'</style><body><main>'+html+'</main></body></html>');
  assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${name} overflow at ${width}`);
  if(name==='stockists'){assert.equal(await p.locator('.cellife-directory__region').count(),3);assert.equal(await p.locator('.cellife-directory__column').count(),6);assert.equal(await p.locator('.cellife-directory__grid').evaluate(x=>getComputedStyle(x).gridTemplateColumns.split(' ').length),width<750?1:2);}
  if(name==='contact'){assert.equal(await p.locator('form').count(),1);assert.equal(await p.locator('input[type=email]').count(),1);assert.equal(await p.locator('input[type=tel]').count(),0);assert.equal(await p.locator('textarea').count(),1);const ids=await p.locator('[id]').evaluateAll(xs=>xs.map(x=>x.id));assert.equal(ids.length,new Set(ids).size);for(const label of await p.locator('label').all()){const id=await label.getAttribute('for');assert.equal(await p.locator(`[id="${id}"]`).count(),1);}}
  if(name==='search'){assert.equal(await p.locator('form').getAttribute('action'),'/search');assert.equal(await p.locator('input[name=type]').getAttribute('value'),'product');}
  console.log(`PASS ${name} ${width}px`);await p.close();
 }}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
