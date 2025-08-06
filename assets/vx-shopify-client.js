const Ie=`#graphql
  query GetMetaobject($id: ID!) {
    metaobject(id: $id) {
      type
      handle
      fields {
        value
        key
      }
    }
  }
`,$e=`#graphql
  query GetNodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      id
      __typename
      ... on MediaImage {
        image {
          url
          altText
        }
      }
    }
  }
`,Ce=`#graphql
query getCollectionById($id: ID!) {
  collection(id: $id) {
    title
    products(first: 10) {
      nodes {
        id
        title
        availableForSale
        tags
        metafield(key: "short_description", namespace:"custom_but_hidden") {
          value
        }
        productTagMetafield: metafield(key: "product_tag", namespace:"custom_but_hidden") {
          value
        }
        metafields(identifiers: [
          {namespace: "custom", key: "durability"}
          {namespace: "custom", key: "control"}
          {namespace: "custom", key: "repulsion_power"}
          {namespace: "custom", key: "hitting_sound"}
          {namespace: "custom", key: "shock_absorption"}
          {namespace: "custom", key: "core_material"}
          {namespace: "custom", key: "outer_material"}
        ]) {
          namespace
          key
          value
        }
        options {
          optionValues {
            name
            swatch {
              color
            }
          }
        }
         priceRange {
          minVariantPrice {
            amount 
            currencyCode
          }
          maxVariantPrice {
            amount 
            currencyCode
          }
        }
        variants(first: 15) {
          nodes {
            id
            sku
            title
            availableForSale
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
        featuredImage {
          altText
          url
        }
      }
    }
  }
}
`,S="GraphQL Client";const v="An error occurred while fetching from the API. Review 'graphQLErrors' for details.",O="Response returned unexpected Content-Type:",x="An unknown error has occurred. The API did not return a data object or any errors in its response.",I={json:"application/json",multipart:"multipart/mixed"},$="X-SDK-Variant",C="X-SDK-Version",K="shopify-graphql-client",Q="1.2.1",k=1e3,G=[429,503],P=/@(defer)\b/i,b=`\r
`,X=/boundary="?([^=";]+)"?/i,D=b+b;function y(e,t=S){return e.startsWith(`${t}`)?e:`${t}: ${e}`}function E(e){return e instanceof Error?e.message:JSON.stringify(e)}function U(e){return e instanceof Error&&e.cause?e.cause:void 0}function V(e){return e.flatMap(({errors:t})=>t??[])}function L({client:e,retries:t}){if(t!==void 0&&(typeof t!="number"||t<0||t>3))throw new Error(`${e}: The provided "retries" value (${t}) is invalid - it cannot be less than 0 or greater than 3`)}function p(e,t){return t&&(typeof t!="object"||Array.isArray(t)||typeof t=="object"&&Object.keys(t).length>0)?{[e]:t}:{}}function q(e,t){if(e.length===0)return t;const n={[e.pop()]:t};return e.length===0?n:q(e,n)}function H(e,t){return Object.keys(t||{}).reduce((r,n)=>(typeof t[n]=="object"||Array.isArray(t[n]))&&e[n]?(r[n]=H(e[n],t[n]),r):(r[n]=t[n],r),Array.isArray(e)?[...e]:{...e})}function M([e,...t]){return t.reduce(H,{...e})}function B({clientLogger:e,customFetchApi:t=fetch,client:r=S,defaultRetryWaitTime:n=k,retriableCodes:o=G}){const s=async(a,i,c)=>{const u=i+1,l=c+1;let d;try{if(d=await t(...a),e({type:"HTTP-Response",content:{requestParams:a,response:d}}),!d.ok&&o.includes(d.status)&&u<=l)throw new Error;return d}catch(f){if(u<=l){const h=d==null?void 0:d.headers.get("Retry-After");return await Y(h?parseInt(h,10):n),e({type:"HTTP-Retry",content:{requestParams:a,lastResponse:d,retryAttempt:i,maxRetries:c}}),s(a,u,c)}throw new Error(y(`${c>0?`Attempted maximum number of ${c} network retries. Last message - `:""}${E(f)}`,r))}};return s}async function Y(e){return new Promise(t=>setTimeout(t,e))}function J({headers:e,url:t,customFetchApi:r=fetch,retries:n=0,logger:o}){L({client:S,retries:n});const s={headers:e,url:t,retries:n},a=W(o),i=B({customFetchApi:r,clientLogger:a,defaultRetryWaitTime:k}),c=z(i,s),u=Z(c),l=ae(c);return{config:s,fetch:c,request:u,requestStream:l}}function W(e){return t=>{e&&e(t)}}async function j(e){const{errors:t,data:r,extensions:n}=await e.json();return{...p("data",r),...p("extensions",n),headers:e.headers,...t||!r?{errors:{networkStatusCode:e.status,message:y(t?v:x),...p("graphQLErrors",t),response:e}}:{}}}function z(e,{url:t,headers:r,retries:n}){return async(o,s={})=>{const{variables:a,headers:i,url:c,retries:u,signal:l}=s,d=JSON.stringify({query:o,variables:a});L({client:S,retries:u});const f=Object.entries({...r,...i}).reduce((R,[w,m])=>(R[w]=Array.isArray(m)?m.join(", "):m.toString(),R),{});return!f[$]&&!f[C]&&(f[$]=K,f[C]=Q),e([c??t,{method:"POST",headers:f,body:d,signal:l}],1,u??n)}}function Z(e){return async(...t)=>{if(P.test(t[0]))throw new Error(y("This operation will result in a streamable response - use requestStream() instead."));try{const r=await e(...t),{status:n,statusText:o}=r,s=r.headers.get("content-type")||"";return r.ok?s.includes(I.json)?j(r):{errors:{networkStatusCode:n,message:y(`${O} ${s}`),response:r}}:{errors:{networkStatusCode:n,message:y(o),response:r}}}catch(r){return{errors:{message:E(r)}}}}}async function*ee(e){const t=new TextDecoder;if(e.body[Symbol.asyncIterator])for await(const r of e.body)yield t.decode(r);else{const r=e.body.getReader();let n;try{for(;!(n=await r.read()).done;)yield t.decode(n.value)}finally{r.cancel()}}}function te(e,t){return{async*[Symbol.asyncIterator](){try{let r="";for await(const n of e)if(r+=n,r.indexOf(t)>-1){const o=r.lastIndexOf(t),a=r.slice(0,o).split(t).filter(i=>i.trim().length>0).map(i=>i.slice(i.indexOf(D)+D.length).trim());a.length>0&&(yield a),r=r.slice(o+t.length),r.trim()==="--"&&(r="")}}catch(r){throw new Error(`Error occured while processing stream payload - ${E(r)}`)}}}}function re(e){return{async*[Symbol.asyncIterator](){yield{...await j(e),hasNext:!1}}}}function ne(e){return e.map(t=>{try{return JSON.parse(t)}catch(r){throw new Error(`Error in parsing multipart response - ${E(r)}`)}}).map(t=>{const{data:r,incremental:n,hasNext:o,extensions:s,errors:a}=t;if(!n)return{data:r||{},...p("errors",a),...p("extensions",s),hasNext:o};const i=n.map(({data:c,path:u,errors:l})=>({data:c&&u?q(u,c):{},...p("errors",l)}));return{data:i.length===1?i[0].data:M([...i.map(({data:c})=>c)]),...p("errors",V(i)),hasNext:o}})}function oe(e,t){if(e.length>0)throw new Error(v,{cause:{graphQLErrors:e}});if(Object.keys(t).length===0)throw new Error(x)}function se(e,t){var i;const r=(t??"").match(X),n=`--${r?r[1]:"-"}`;if(!((i=e.body)!=null&&i.getReader)&&!e.body[Symbol.asyncIterator])throw new Error("API multipart response did not return an iterable body",{cause:e});const o=ee(e);let s={},a;return{async*[Symbol.asyncIterator](){var c;try{let u=!0;for await(const l of te(o,n)){const d=ne(l);a=((c=d.find(h=>h.extensions))==null?void 0:c.extensions)??a;const f=V(d);s=M([s,...d.map(({data:h})=>h)]),u=d.slice(-1)[0].hasNext,oe(f,s),yield{...p("data",s),...p("extensions",a),hasNext:u}}if(u)throw new Error("Response stream terminated unexpectedly")}catch(u){const l=U(u);yield{...p("data",s),...p("extensions",a),errors:{message:y(E(u)),networkStatusCode:e.status,...p("graphQLErrors",l==null?void 0:l.graphQLErrors),response:e},hasNext:!1}}}}}function ae(e){return async(...t)=>{if(!P.test(t[0]))throw new Error(y("This operation does not result in a streamable response - use request() instead."));try{const r=await e(...t),{statusText:n}=r;if(!r.ok)throw new Error(n,{cause:r});const o=r.headers.get("content-type")||"";switch(!0){case o.includes(I.json):return re(r);case o.includes(I.multipart):return se(r,o);default:throw new Error(`${O} ${o}`,{cause:r})}}catch(r){return{async*[Symbol.asyncIterator](){const n=U(r);yield{errors:{message:y(E(r)),...p("networkStatusCode",n==null?void 0:n.status),...p("response",n)},hasNext:!1}}}}}}function ie({client:e,storeDomain:t}){try{if(!t||typeof t!="string")throw new Error;const r=t.trim(),n=r.match(/^https?:/)?r:`https://${r}`,o=new URL(n);return o.protocol="https",o.origin}catch(r){throw new Error(`${e}: a valid store domain ("${t}") must be provided`,{cause:r})}}function F({client:e,currentSupportedApiVersions:t,apiVersion:r,logger:n}){const o=`${e}: the provided apiVersion ("${r}")`,s=`Currently supported API versions: ${t.join(", ")}`;if(!r||typeof r!="string")throw new Error(`${o} is invalid. ${s}`);const a=r.trim();t.includes(a)||(n?n({type:"Unsupported_Api_Version",content:{apiVersion:r,supportedApiVersions:t}}):console.warn(`${o} is likely deprecated or not supported. ${s}`))}function _(e){const t=e*3-2;return t===10?t:`0${t}`}function T(e,t,r){const n=t-r;return n<=0?`${e-1}-${_(n+4)}`:`${e}-${_(n)}`}function ce(){const e=new Date,t=e.getUTCMonth(),r=e.getUTCFullYear(),n=Math.floor(t/3+1);return{year:r,quarter:n,version:`${r}-${_(n)}`}}function ue(){const{year:e,quarter:t,version:r}=ce(),n=t===4?`${e+1}-01`:`${e}-${_(t+1)}`;return[T(e,t,3),T(e,t,2),T(e,t,1),r,n,"unstable"]}function de(e){return t=>({...t??{},...e.headers})}function le({getHeaders:e,getApiUrl:t}){return(r,n)=>{const o=[r];if(n&&Object.keys(n).length>0){const{variables:s,apiVersion:a,headers:i,retries:c}=n;o.push({...s?{variables:s}:{},...i?{headers:e(i)}:{},...a?{url:t(a)}:{},...c?{retries:c}:{}})}return o}}const N="application/json",fe="storefront-api-client",pe="1.0.3",he="X-Shopify-Storefront-Access-Token",ye="Shopify-Storefront-Private-Token",me="X-SDK-Variant",Ee="X-SDK-Version",Re="X-SDK-Variant-Source",A="Storefront API Client";function ge(e){if(e&&typeof window<"u")throw new Error(`${A}: private access tokens and headers should only be used in a server-to-server implementation. Use the public API access token in nonserver environments.`)}function Ae(e,t){if(!e&&!t)throw new Error(`${A}: a public or private access token must be provided`);if(e&&t)throw new Error(`${A}: only provide either a public or private access token`)}function we({storeDomain:e,apiVersion:t,publicAccessToken:r,privateAccessToken:n,clientName:o,retries:s=0,customFetchApi:a,logger:i}){const c=ue(),u=ie({client:A,storeDomain:e}),l={client:A,currentSupportedApiVersions:c,logger:i};F({...l,apiVersion:t}),Ae(r,n),ge(n);const d=_e(u,t,l),f={storeDomain:u,apiVersion:t,...r?{publicAccessToken:r}:{privateAccessToken:n},headers:{"Content-Type":N,Accept:N,[me]:fe,[Ee]:pe,...o?{[Re]:o}:{},...r?{[he]:r}:{[ye]:n}},apiUrl:d(),clientName:o},h=J({headers:f.headers,url:f.apiUrl,retries:s,customFetchApi:a,logger:i}),R=de(f),w=Se(f,d),m=le({getHeaders:R,getApiUrl:w});return Object.freeze({config:f,getHeaders:R,getApiUrl:w,fetch:(...g)=>h.fetch(...m(...g)),request:(...g)=>h.request(...m(...g)),requestStream:(...g)=>h.requestStream(...m(...g))})}function _e(e,t,r){return n=>{n&&F({...r,apiVersion:n});const o=(n??t).trim();return`${e}/api/${o}/graphql.json`}}function Se(e,t){return r=>r?t(r):e.apiUrl}const be=we({storeDomain:window.shopUrl,apiVersion:"2025-01",publicAccessToken:window.s3_pat});export{$e as a,be as c,Ce as f,Ie as g};
