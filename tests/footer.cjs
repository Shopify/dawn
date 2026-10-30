/* Render the native footer with actual CSS and fixture Shopify menus. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {Liquid}=require('liquidjs'),{chromium}=require('playwright'),AxeBuilder=require('@axe-core/playwright').default;
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8');
const raw=read('sections/footer.liquid'),schema=JSON.parse(raw.split('{% schema %}')[1].split('{% endschema %}')[0]),group=JSON.parse(read('sections/footer-group.json'));
const e=new Liquid({root:[path.join(root,'snippets')],extname:'.liquid'});
for(const [tag,closing,wrapper]of [['style','endstyle','style'],['form','endform','form']])e.registerTag(tag,{parse(t,tokens){this.templates=[];const stream=this.liquid.parser.parseStream(tokens).on('tag:'+closing,()=>stream.stop()).on('template',t=>this.templates.push(t));stream.start();},*render(ctx,emitter){emitter.write('<'+wrapper+'>');yield this.liquid.renderer.renderTemplates(this.templates,ctx,emitter);emitter.write('</'+wrapper+'>');}});
e.registerFilter('asset_url',s=>s);e.registerFilter('stylesheet_tag',()=> '');e.registerFilter('t',s=>s);e.registerFilter('link_to',(s,url)=>`<a href="${url}">${s}</a>`);
e.registerFilter('image_url',()=> 'fixture-logo');e.registerFilter('image_tag',()=>'<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'240\' height=\'120\'%3E%3Crect width=\'240\' height=\'80\' fill=\'%23ec1d2b\'/%3E%3Ctext x=\'8\' y=\'62\' font-size=\'62\' fill=\'white\'%3ECellife%3C/text%3E%3C/svg%3E" width="240" height="120" alt="Cellife">');
const link=(title,url)=>({title,url,active:false});
const menus={arbitrary_shop_handle:{title:'Shop',links:[link('Supplements','/collections/supplements'),link('Respiratory Tests','/collections/respiratory-tests'),link('Drug & Alcohol Tests','/collections/respiratory-tests-copy'),link("Women’s & Urinary Health",'/collections/womens-urinary-health')]},other_company_handle:{title:'Company',links:[link('About Us','/pages/about-us'),link('Contact Us','/pages/contact')]},different_support_handle:{title:'Support',links:[link('Return Policy','/pages/exchange-return-policy'),link('Terms & Conditions','/pages/terms-conditions')]}};
const defaults=list=>Object.fromEntries(list.filter(s=>s.id).map(s=>[s.id,s.default]));
async function render(overrides={}){
 const footer=structuredClone(group.sections.footer),blocks=footer.block_order.map(id=>{const b=footer.blocks[id],def=schema.blocks.find(s=>s.type===b.type);return{id,...b,settings:{...defaults(def.settings),...b.settings},shopify_attributes:''};});
 if(overrides.menu)blocks.find(b=>b.id==='shop').settings.menu=overrides.menu;
 const ctx={section:{id:'fixture',blocks,settings:{...defaults(schema.settings),...footer.settings,...overrides}},settings:{logo:{id:1}},shop:{name:'Cellife Australia',features:{follow_on_shop:false},policies:[],enabled_payment_types:[]},routes:{root_url:'/'},localization:{available_countries:[],available_languages:[]},linklists:menus,powered_by_link:'Powered by Shopify'};
 return e.parseAndRender(raw.split('{% schema %}')[0],ctx,{globals:{settings:ctx.settings,shop:ctx.shop,routes:ctx.routes}});
}
(async()=>{
 const html=await render();assert(html.includes('Cellife’s commitment to scientific precision'));assert(html.includes('CELLIFE. THE FOUNTAIN OF YOU.'));assert(!html.includes('Powered by Shopify'));
 for(const menu of Object.values(menus))for(const link of menu.links)assert(html.includes(`href="${link.url}"`));assert(html.includes('Credits'));
 const override=await render({menu:{title:'Override',links:[link('Chosen menu','/pages/chosen')]}});assert(override.includes('/pages/chosen'));assert(!override.includes('/collections/supplements'));
 const legacy=await render({cellife_layout:false});assert(!legacy.includes('footer--cellife'));assert(legacy.includes('Powered by Shopify'));
 const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 try{for(const width of [320,390,800,1440]){const context=await browser.newContext({viewport:{width,height:1100}}),p=await context.newPage();
 const css=['assets/base.css','assets/section-footer.css','assets/component-list-menu.css','assets/cellife-editorial.css','assets/section-cellife-footer.css'].map(read).join('\n');
 await p.setContent(`<!doctype html><html lang="en"><meta charset="utf-8"><title>Footer fixture</title><style>html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}body{margin:0;font:16px Arial;--color-foreground:255,255,255;--color-background:36,40,51;--gradient-background:#242833;--page-width:160rem}.color-scheme-3{color:rgb(var(--color-foreground));background:rgb(var(--color-background))}${css}</style><body class="cellife-shell">${html}</body></html>`);
 const r=await p.evaluate(()=>{const grid=document.querySelector('.footer__blocks-wrapper'),footer=document.querySelector('footer');return{columns:getComputedStyle(grid).gridTemplateColumns.split(' ').length,background:getComputedStyle(footer).backgroundColor,overflow:document.documentElement.scrollWidth>innerWidth}});
 assert.equal(r.columns,width<750?2:width<990?3:4);assert.equal(r.background,'rgb(36, 40, 51)');assert(!r.overflow);
 assert.equal(await p.locator('.footer-block--menu a').count(),8);assert(await p.getByText('CELLIFE. THE FOUNTAIN OF YOU.',{exact:true}).isVisible());
 await p.getByRole('link',{name:'Cellife',exact:true}).focus();assert.equal(await p.locator('.cellife-footer-brand__logo').evaluate(a=>getComputedStyle(a).outlineStyle),'solid');
 const axe=await new AxeBuilder({page:p}).include('footer').withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();assert.deepEqual(axe.violations.map(v=>({id:v.id,nodes:v.nodes.length})),[]);
 if(process.env.SCREENSHOT_DIR){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await p.screenshot({path:path.join(process.env.SCREENSHOT_DIR,`footer-${width}.png`),fullPage:true});}
 console.log(`PASS ${width}px: menu title resolution, editable brand copy, responsive columns, unchanged background, keyboard and axe`);await context.close();}
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
