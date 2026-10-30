/** Interest-based discovery only. No health screening, scoring or suitability inference. */
export const RULES_VERSION = 'cellife-discovery-v2';
const EXPECTED_SEAL = '__DATA_SEAL__';
const PUBLIC_RELEASE_APPROVED = false;
const IDS = ['stress','propolis','man','sugar','bq','rrr','coq10','detox','boost','vision','ampk','antioxidant'];
export function fingerprint(value) {
  const stable = v => v === null || typeof v !== 'object' ? JSON.stringify(v) : Array.isArray(v) ? `[${v.map(stable).join(',')}]` : `{${Object.keys(v).sort().map(k=>`${JSON.stringify(k)}:${stable(v[k])}`).join(',')}}`;
  let hash = 2166136261;
  for (const c of stable(value)) hash = Math.imul(hash ^ c.charCodeAt(0),16777619) >>> 0;
  return hash.toString(16).padStart(8,'0');
}
export function validateCatalog(catalog) {
  try {
    if (catalog.products.length !== 12 || catalog.sources.length !== 12 || new Set(catalog.products.map(p=>p.id)).size !== 12) return false;
    const evidence = new Map(catalog.evidence.map(e=>[e.evidenceId,e]));
    if (evidence.size !== catalog.evidence.length) return false;
    for (const [index,id] of IDS.entries()) {
      const sourceId = `S${String(index+1).padStart(2,'0')}`;
      const p = catalog.products.find(p=>p.id===id), source = catalog.sources.find(s=>s.sourceId===sourceId);
      if (p.sourceId !== sourceId || source.productId !== id || source.page !== 1 || !source.sections.length) return false;
      const warnings = catalog.warnings[id];
      if (!warnings.warnings.length || !warnings.sourceWarningIds.length) return false;
      for (const eId of warnings.sourceWarningIds) if (evidence.get(eId)?.kind !== 'W' || evidence.get(eId)?.productId !== id) return false;
    }
    for (const route of Object.values(catalog.routes)) {
      const rationale = catalog.rationales[route.rationaleId];
      if (!IDS.includes(route.productId) || rationale.productId !== route.productId || !rationale.claim || !rationale.sourceClaimIds.length) return false;
      for (const id of rationale.sourceClaimIds) if (evidence.get(id)?.kind !== 'C' || evidence.get(id)?.productId !== route.productId) return false;
    }
    if (evidence.get(catalog.guidance.evidenceId)?.kind !== 'P' || !catalog.guidance.general || !catalog.guidance.scope) return false;
    return fingerprint(catalog) === EXPECTED_SEAL;
  } catch { return false; }
}
/** Fixed routes: at most three single choices. Every completed route selects one source ID. */
export function evaluate(answers, catalog, mode = 'public') {
  const result = (status, fields = {}) => ({status, productIds:[], reasonIds:[], evidenceIds:[], sourceWarningIds:[], rationaleId:null, routeId:null, scope:null, nextQuestion:null, rulesVersion:RULES_VERSION, ...fields});
  const invalid = () => result('INVALID',{reasonIds:['V2_INVALID_ANSWERS']});
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return invalid();
  if (Object.keys(answers).some(k=>!['category','interest','preference'].includes(k)) || Object.values(answers).some(v=>typeof v !== 'string')) return invalid();
  if (!validateCatalog(catalog) || !['draft','public'].includes(mode) || (mode==='public' && !PUBLIC_RELEASE_APPROVED)) return result('DATA_HOLD',{reasonIds:['V2_SOURCE_HOLD']});
  const q = catalog.questions;
  if (answers.category === undefined) return answers.interest !== undefined || answers.preference !== undefined ? invalid() : result('INCOMPLETE',{nextQuestion:'Q1'});
  if (!q.category.options.some(o=>o.value===answers.category)) return invalid();
  if (answers.interest === undefined) return answers.preference !== undefined ? invalid() : result('INCOMPLETE',{nextQuestion:'Q2'});
  if (!q.interest.branches[answers.category].some(o=>o.value===answers.interest)) return invalid();
  const branch = `${answers.category}/${answers.interest}`;
  const preference = q.preference.branches[branch];
  if (preference) {
    if (answers.preference === undefined) return result('INCOMPLETE',{nextQuestion:'Q3'});
    if (!preference.options.some(o=>o.value===answers.preference)) return invalid();
  } else if (answers.preference !== undefined) return invalid();
  const routeId = preference ? `${branch}/${answers.preference}` : branch;
  const route = catalog.routes[routeId];
  if (!route) return result('DATA_HOLD',{reasonIds:['V2_ROUTE_HOLD']});
  const rationale = catalog.rationales[route.rationaleId], warnings = catalog.warnings[route.productId];
  const evidenceIds = [...new Set([...rationale.sourceClaimIds,...warnings.sourceWarningIds,...warnings.ingredientEvidenceIds,...warnings.policyEvidenceIds,catalog.guidance.evidenceId])];
  return result('DISCOVERY_MATCH',{productIds:[route.productId],reasonIds:['V2_VALIDATED','V2_FIXED_ROUTE','V2_INTERESTS_ONLY'],evidenceIds,sourceWarningIds:[...warnings.sourceWarningIds],rationaleId:route.rationaleId,routeId,scope:catalog.guidance.scope});
}
/** A catalogue connection does not resolve a source/formulation identity mismatch. */
export function connectDestination(engineResult, mappings, origin) {
  const hold = reason => ({result:{...engineResult,status:'DATA_HOLD',productIds:[],reasonIds:[...engineResult.reasonIds,reason]},destination:null});
  if (engineResult.status !== 'DISCOVERY_MATCH') return {result:engineResult,destination:null};
  // S02 describes propolis. The owner's Royal Jelly connection needs replacement evidence.
  if (engineResult.productIds[0] === 'propolis') return hold('V2_SOURCE_IDENTITY_HOLD');
  const product = mappings?.[engineResult.productIds[0]], values = Object.values(mappings || {}).filter(Boolean);
  if (!product?.id || !product.title || new Set(values.map(p=>p.id)).size !== values.length) return hold('V2_MAPPING_HOLD');
  try {
    const url = new URL(product.url,origin);
    if (url.origin !== origin || !url.pathname.includes('/products/')) return hold('V2_MAPPING_HOLD');
    return {result:engineResult,destination:url.pathname+url.search};
  } catch { return hold('V2_MAPPING_HOLD'); }
}
