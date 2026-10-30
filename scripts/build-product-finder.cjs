/* Build dependency-free runtime modules from protected source records and route tables. */
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const names=['products','evidence','sources','questions','routes','rationales','warnings','guidance'];
const catalog=Object.fromEntries(names.map(name=>[name,JSON.parse(fs.readFileSync(path.join(root,'product-finder',name+'.json'),'utf8'))]));
assert.equal(catalog.products.length,12);assert.equal(new Set(catalog.products.map(p=>p.id)).size,12);
assert.equal(catalog.sources.length,12);assert.equal(new Set(catalog.sources.map(s=>s.sourceId)).size,12);
assert.equal(catalog.questions.category.options.length,4);assert.equal(Object.keys(catalog.routes).length,15);
for(const product of catalog.products){
  for(const key of ['id','sourceId','austLReported','primaryGoals','secondaryClaims','ingredientFacts','sheetWarnings','policyRules','claimReviewStatus','labelReviewStatus','veganCompatibility','formulationGroup'])assert(Object.hasOwn(product,key),`${product.id}: missing ${key}`);
  assert(['yes','no','unknown'].includes(product.veganCompatibility));
  for(const fact of product.ingredientFacts){assert(['actual','equivalentDry','equivalentNutrient'].includes(fact.quantityBasis));if(fact.quantity!==null){assert(Number.isFinite(fact.quantity));assert(['mg','mcg','g'].includes(fact.unit));}}
  const warnings=catalog.warnings[product.id];assert(warnings.warnings.length);assert(warnings.sourceWarningIds.includes(product.sourceId+'-W'));
}
for(const [routeId,route]of Object.entries(catalog.routes)){
  assert(routeId.split('/').length<=3);assert(catalog.products.some(p=>p.id===route.productId));
  const rationale=catalog.rationales[route.rationaleId];assert.equal(rationale.productId,route.productId);assert(rationale.claim);
  for(const id of rationale.sourceClaimIds)assert(catalog.evidence.some(e=>e.evidenceId===id&&e.kind==='C'&&e.productId===route.productId));
}
assert.equal(new Set(catalog.evidence.map(e=>e.evidenceId)).size,catalog.evidence.length);
const stable=v=>v===null||typeof v!=='object'?JSON.stringify(v):Array.isArray(v)?`[${v.map(stable).join(',')}]`:`{${Object.keys(v).sort().map(k=>`${JSON.stringify(k)}:${stable(v[k])}`).join(',')}}`;
let hash=2166136261;for(const c of stable(catalog))hash=Math.imul(hash^c.charCodeAt(0),16777619)>>>0;
const source=fs.readFileSync(path.join(root,'product-finder/recommend.ts'),'utf8').replace('__DATA_SEAL__',hash.toString(16).padStart(8,'0'));
const assets={'cellife-finder-engine.js':source,'cellife-finder-data.js':'/* Unreviewed supplier evidence and v2 discovery flow. No health-answer fields. */\nexport const catalog = '+JSON.stringify(catalog)+';\n'};
let stale=false;
for(const [name,content]of Object.entries(assets)){
  const target=path.join(root,'assets',name);
  if(process.argv.includes('--check')){if(!fs.existsSync(target)||fs.readFileSync(target,'utf8')!==content){console.error('Stale generated asset:',name);stale=true;}}
  else fs.writeFileSync(target,content);
}
if(stale)process.exitCode=1;else console.log('Product finder v2 assets '+(process.argv.includes('--check')?'are current.':'built.'));
