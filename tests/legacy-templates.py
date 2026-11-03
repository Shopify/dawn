"""Validate migrated template structure, schema settings and transitive dependencies."""
import pathlib,json,re,html
r=pathlib.Path(__file__).resolve().parents[1];names=['page.about-us.json','page.media.json','page.stockist.json','page.contact.json','collection.all-products.json','collection.export-line.json'];seen=set()
def validate(settings,schema):
 defs={s['id']:s for s in schema if 'id'in s};assert set(settings)<=set(defs),set(settings)-set(defs)
 for k,v in settings.items():
  spec=defs[k];t=spec['type']
  if t in ['select','radio']:assert v in [o['value'] for o in spec['options']],(k,v)
  if t=='range':assert isinstance(v,(int,float)) and spec['min']<=v<=spec['max'] and abs((v-spec['min'])/spec['step']-round((v-spec['min'])/spec['step']))<1e-6,(k,v)
  if t=='checkbox':assert isinstance(v,bool)
def deps(p):
 if p in seen:return
 seen.add(p);assert p.exists(),p;s=p.read_text()
 for n in re.findall(r"(?:render|include)\s+['\"]([^'\"]+)",s):deps(r/'snippets'/f'{n}.liquid')
 for n in re.findall(r"['\"]([^'\"]+)['\"]\s*\|\s*(?:asset_url|inline_asset_content)",s):deps(r/'assets'/n)
for name in names:
 d=json.loads((r/'templates'/name).read_text());assert set(d['order'])==set(d['sections']) and len(d['order'])==len(d['sections'])
 for sec in d['sections'].values():
  p=r/'sections'/f"{sec['type']}.liquid";deps(p);schema=json.loads(re.search(r'{% schema %}(.*?){% endschema %}',p.read_text(),re.S)[1]);validate(sec['settings'],schema['settings'])
  blocks=sec.get('blocks',{});assert sec.get('block_order',[])==list(blocks)
  for b in blocks.values():
   bs=next(x for x in schema.get('blocks',[]) if x['type']==b['type']);validate(b['settings'],bs.get('settings',[]))
 print('PASS schema/settings/dependencies',name)
