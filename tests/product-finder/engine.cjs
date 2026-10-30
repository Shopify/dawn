/* V2 acceptance vectors replace every v1 intake/exclusion test. */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../..');
const names=['products','evidence','sources','questions','routes','rationales','warnings','guidance'];
const catalog=Object.fromEntries(names.map(n=>[n,JSON.parse(fs.readFileSync(path.join(root,'product-finder',n+'.json'),'utf8'))]));
const modulePromise=import('data:text/javascript;base64,'+Buffer.from(fs.readFileSync(path.join(root,'assets/cellife-finder-engine.js'),'utf8')).toString('base64'));
const cases=[
 ['energy','daily_energy',null,'coq10'],['energy','endurance_libido',null,'man'],
 ['energy','cellular','standard','rrr'],['energy','cellular','sustained','boost'],['energy','cellular','noPreference','rrr'],
 ['metabolic','body_fat',null,'ampk'],['metabolic','healthy_glucose',null,'sugar'],
 ['resilience','immune','botanical','bq'],['resilience','immune','bee','propolis'],['resilience','immune','noPreference','bq'],
 ['resilience','stress',null,'stress'],['resilience','antioxidant',null,'antioxidant'],
 ['care','skin_hair_nails',null,'detox'],['care','eyes',null,'vision'],['care','antioxidant',null,'antioxidant']
];
const answers=(category,interest,preference)=>({category,interest,...(preference?{preference}:{})});
for(const [index,vector]of cases.entries())test(`V2 ${String(index+1).padStart(2,'0')}: ${vector.slice(0,3).filter(Boolean).join('/')}`,async()=>{
 const {evaluate}=await modulePromise,[category,interest,preference,id]=vector,input=answers(category,interest,preference);
 const result=evaluate(input,catalog,'draft');
 assert.equal(result.status,'DISCOVERY_MATCH');assert.deepEqual(result.productIds,[id]);
 assert.equal(Object.keys(input).length,preference?3:2);assert.equal(result.scope,'Matched to your interests.');
 assert(result.sourceWarningIds.length);assert(result.evidenceIds.length);assert(catalog.warnings[id].warnings.length);
 assert.deepEqual(result,evaluate(input,catalog,'draft'),'same data/input has stable product and reason order');
});
const invalid=[{category:'sleep'},answers('energy','body_fat'),answers('care','eyes','bee'),answers('energy','cellular','bee'),answers('resilience','immune','standard'),{category:['energy','care']},{category:'energy',preference:'standard'},{category:'care',interest:'eyes',health:['none']},{category:'energy',interest:'daily_energy',pregnancy:false},{category:'energy',interest:'daily_energy',preference:''}];
for(const [i,input]of invalid.entries())test('invalid payload '+i,async()=>{const {evaluate}=await modulePromise;const out=evaluate(input,catalog,'draft');assert.equal(out.status,'INVALID');assert.deepEqual(out.productIds,[]);});
for(const [input,nextQuestion]of [[{},'Q1'],[{category:'energy'},'Q2'],[answers('energy','cellular'),'Q3'],[answers('resilience','immune'),'Q3']])test('missing '+nextQuestion,async()=>{const {evaluate}=await modulePromise;const out=evaluate(input,catalog,'draft');assert.equal(out.status,'INCOMPLETE');assert.deepEqual(out.productIds,[]);assert.equal(out.nextQuestion,nextQuestion);});
test('only the documented antioxidant overlap exists and has the same narrow rationale',async()=>{
 const {evaluate}=await modulePromise;const a=evaluate(answers('resilience','antioxidant'),catalog,'draft'),b=evaluate(answers('care','antioxidant'),catalog,'draft');assert.equal(a.rationaleId,b.rationaleId);const r=catalog.rationales[a.rationaleId];assert(!/skin|vision|eyes/.test(r.claim));
 const categories=new Map();for(const [route,{productId}]of Object.entries(catalog.routes)){if(!categories.has(productId))categories.set(productId,new Set());categories.get(productId).add(route.split('/')[0]);}
 assert.deepEqual([...categories].filter(([,c])=>c.size>1).map(([id])=>id),['antioxidant']);assert.equal(categories.size,12);
});
test('missing records, rationale, warnings and unknown source data all fail closed',async()=>{
 const {evaluate}=await modulePromise;
 const corruptions=[c=>c.products.pop(),c=>c.sources.pop(),c=>c.products[0]=null,c=>c.products[1].id=c.products[0].id,c=>c.evidence.pop(),c=>delete c.rationales.rationale_vision.claim,c=>c.rationales.rationale_vision.sourceClaimIds=[],c=>delete c.warnings.vision,c=>c.warnings.vision.warnings=[],c=>c.warnings.vision.sourceWarningIds=[],c=>c.warnings.vision.sourceWarningIds=['S01-C'],c=>c.questions=null,c=>c.guidance.scope='Suitable for you'];
 for(const damage of corruptions){const changed=structuredClone(catalog);damage(changed);const out=evaluate(answers('care','eyes'),changed,'draft');assert.equal(out.status,'DATA_HOLD');assert.deepEqual(out.productIds,[]);}
});
test('published builds remain disabled',async()=>{const {evaluate}=await modulePromise;for(const v of cases){const out=evaluate(answers(...v.slice(0,3)),catalog,'public');assert.equal(out.status,'DATA_HOLD');assert.deepEqual(out.productIds,[]);}});
test('warnings retain the material source distinctions',()=>{
 const text=id=>catalog.warnings[id].warnings.join(' ');
 assert(/asthma/i.test(text('coq10'))&&/asthma/i.test(text('propolis')));
 for(const phrase of ['pineapple','antibiotics','sedatives','anticoagulants','Andrographis','anaphylaxis','immediate medical attention'])assert(text('bq').includes(phrase));
 assert(/caution/.test(text('ampk'))&&!/not recommended|do not use/.test(text('ampk')));
 for(const id of ['rrr','boost','antioxidant','detox'])assert(/pregnan/.test(text(id)));
 for(const id of ['rrr','boost','coq10','propolis','ampk'])assert(text(id).includes('BOTH a reduced-calorie diet and increased physical activity'));
 assert(catalog.warnings.coq10.ingredientNotes.join(' ').includes('fish oil'));assert(catalog.warnings.ampk.ingredientNotes.join(' ').includes('oyster shell'));
});
test('destination adapter holds bad connections and the unresolved Royal Jelly identity',async()=>{
 const {evaluate,connectDestination}=await modulePromise,out=evaluate(answers('care','eyes'),catalog,'draft');
 for(const mappings of [{},{vision:{id:'v',title:'Vision',url:'https://elsewhere.test/products/v'}},{vision:{id:'same',title:'Vision',url:'/products/v'},stress:{id:'same',title:'Stress',url:'/products/s'}}]){const linked=connectDestination(out,mappings,'https://shop.test');assert.equal(linked.result.status,'DATA_HOLD');assert.deepEqual(linked.result.productIds,[]);assert.equal(linked.destination,null);}
 assert.equal(connectDestination(out,{vision:{id:'v',title:'Vision',url:'/products/v'}},'https://shop.test').destination,'/products/v');
 const bee=evaluate(answers('resilience','immune','bee'),catalog,'draft');const linked=connectDestination(bee,{propolis:{id:'royal',title:'Royal Jelly',url:'/products/royal'}},'https://shop.test');assert.equal(linked.result.status,'DATA_HOLD');assert.deepEqual(linked.result.productIds,[]);
});
