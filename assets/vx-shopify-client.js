var B,y,ke,T,ce,Ce,J,De,ne,z,Z,x={},Ne=[],Ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,oe=Array.isArray;function $(t,e){for(var r in e)t[r]=e[r];return t}function _e(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function et(t,e,r){var n,o,_,i={};for(_ in e)_=="key"?n=e[_]:_=="ref"?o=e[_]:i[_]=e[_];if(arguments.length>2&&(i.children=arguments.length>3?B.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)i[_]===void 0&&(i[_]=t.defaultProps[_]);return O(t,i,n,o,null)}function O(t,e,r,n,o){var _={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++ke,__i:-1,__u:0};return o==null&&y.vnode!=null&&y.vnode(_),_}function K(t){return t.children}function F(t,e){this.props=t,this.context=e}function k(t,e){if(e==null)return t.__?k(t.__,t.__i+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?k(t):null}function Ie(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Ie(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&T.push(t)&&!M.__r++||ce!==y.debounceRendering)&&((ce=y.debounceRendering)||Ce)(M)}function M(){var t,e,r,n,o,_,i,a;for(T.sort(J);t=T.shift();)t.__d&&(e=T.length,n=void 0,_=(o=(r=t).__v).__e,i=[],a=[],r.__P&&((n=$({},o)).__v=o.__v+1,y.vnode&&y.vnode(n),se(r.__P,n,o,r.__n,r.__P.namespaceURI,32&o.__u?[_]:null,i,_??k(o),!!(32&o.__u),a),n.__v=o.__v,n.__.__k[n.__i]=n,Ue(i,n,a),n.__e!=_&&Ie(n)),T.length>e&&T.sort(J));M.__r=0}function xe(t,e,r,n,o,_,i,a,u,c,f){var s,d,l,v,w,m,h=n&&n.__k||Ne,p=e.length;for(u=tt(r,e,h,u,p),s=0;s<p;s++)(l=r.__k[s])!=null&&(d=l.__i===-1?x:h[l.__i]||x,l.__i=s,m=se(t,l,d,o,_,i,a,u,c,f),v=l.__e,l.ref&&d.ref!=l.ref&&(d.ref&&ie(d.ref,null,l),f.push(l.ref,l.__c||v,l)),w==null&&v!=null&&(w=v),4&l.__u||d.__k===l.__k?u=Pe(l,u,t):typeof l.type=="function"&&m!==void 0?u=m:v&&(u=v.nextSibling),l.__u&=-7);return r.__e=w,u}function tt(t,e,r,n,o){var _,i,a,u,c,f=r.length,s=f,d=0;for(t.__k=new Array(o),_=0;_<o;_++)(i=e[_])!=null&&typeof i!="boolean"&&typeof i!="function"?(u=_+d,(i=t.__k[_]=typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?O(null,i,null,null,null):oe(i)?O(K,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?O(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i).__=t,i.__b=t.__b+1,a=null,(c=i.__i=rt(i,r,u,s))!==-1&&(s--,(a=r[c])&&(a.__u|=2)),a==null||a.__v===null?(c==-1&&d--,typeof i.type!="function"&&(i.__u|=4)):c!=u&&(c==u-1?d--:c==u+1?d++:(c>u?d--:d++,i.__u|=4))):t.__k[_]=null;if(s)for(_=0;_<f;_++)(a=r[_])!=null&&!(2&a.__u)&&(a.__e==n&&(n=k(a)),He(a,a));return n}function Pe(t,e,r){var n,o;if(typeof t.type=="function"){for(n=t.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=t,e=Pe(n[o],e,r));return e}t.__e!=e&&(e&&t.type&&!r.contains(e)&&(e=k(t)),r.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function rt(t,e,r,n){var o,_,i=t.key,a=t.type,u=e[r];if(u===null||u&&i==u.key&&a===u.type&&!(2&u.__u))return r;if(n>(u!=null&&!(2&u.__u)?1:0))for(o=r-1,_=r+1;o>=0||_<e.length;){if(o>=0){if((u=e[o])&&!(2&u.__u)&&i==u.key&&a===u.type)return o;o--}if(_<e.length){if((u=e[_])&&!(2&u.__u)&&i==u.key&&a===u.type)return _;_++}}return-1}function le(t,e,r){e[0]=="-"?t.setProperty(e,r??""):t[e]=r==null?"":typeof r!="number"||Ze.test(e)?r:r+"px"}function L(t,e,r,n,o){var _;e:if(e=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||le(t.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||le(t.style,e,r[e])}else if(e[0]=="o"&&e[1]=="n")_=e!=(e=e.replace(De,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=r,r?n?r.u=n.u:(r.u=ne,t.addEventListener(e,_?Z:z,_)):t.removeEventListener(e,_?Z:z,_);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&r==1?"":r))}}function fe(t){return function(e){if(this.l){var r=this.l[e.type+t];if(e.t==null)e.t=ne++;else if(e.t<r.u)return;return r(y.event?y.event(e):e)}}}function se(t,e,r,n,o,_,i,a,u,c){var f,s,d,l,v,w,m,h,p,D,A,U,N,ae,H,W,G,S=e.type;if(e.constructor!==void 0)return null;128&r.__u&&(u=!!(32&r.__u),_=[a=e.__e=r.__e]),(f=y.__b)&&f(e);e:if(typeof S=="function")try{if(h=e.props,p="prototype"in S&&S.prototype.render,D=(f=S.contextType)&&n[f.__c],A=f?D?D.props.value:f.__:n,r.__c?m=(s=e.__c=r.__c).__=s.__E:(p?e.__c=s=new S(h,A):(e.__c=s=new F(h,A),s.constructor=S,s.render=ot),D&&D.sub(s),s.props=h,s.state||(s.state={}),s.context=A,s.__n=n,d=s.__d=!0,s.__h=[],s._sb=[]),p&&s.__s==null&&(s.__s=s.state),p&&S.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=$({},s.__s)),$(s.__s,S.getDerivedStateFromProps(h,s.__s))),l=s.props,v=s.state,s.__v=e,d)p&&S.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),p&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(p&&S.getDerivedStateFromProps==null&&h!==l&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(h,A),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(h,s.__s,A)===!1||e.__v==r.__v)){for(e.__v!=r.__v&&(s.props=h,s.state=s.__s,s.__d=!1),e.__e=r.__e,e.__k=r.__k,e.__k.some(function(I){I&&(I.__=e)}),U=0;U<s._sb.length;U++)s.__h.push(s._sb[U]);s._sb=[],s.__h.length&&i.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(h,s.__s,A),p&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(l,v,w)})}if(s.context=A,s.props=h,s.__P=t,s.__e=!1,N=y.__r,ae=0,p){for(s.state=s.__s,s.__d=!1,N&&N(e),f=s.render(s.props,s.state,s.context),H=0;H<s._sb.length;H++)s.__h.push(s._sb[H]);s._sb=[]}else do s.__d=!1,N&&N(e),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ae<25);s.state=s.__s,s.getChildContext!=null&&(n=$($({},n),s.getChildContext())),p&&!d&&s.getSnapshotBeforeUpdate!=null&&(w=s.getSnapshotBeforeUpdate(l,v)),a=xe(t,oe(W=f!=null&&f.type===K&&f.key==null?f.props.children:f)?W:[W],e,r,n,o,_,i,a,u,c),s.base=e.__e,e.__u&=-161,s.__h.length&&i.push(s),m&&(s.__E=s.__=null)}catch(I){if(e.__v=null,u||_!=null)if(I.then){for(e.__u|=u?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;_[_.indexOf(a)]=null,e.__e=a}else for(G=_.length;G--;)_e(_[G]);else e.__e=r.__e,e.__k=r.__k;y.__e(I,e,r)}else _==null&&e.__v==r.__v?(e.__k=r.__k,e.__e=r.__e):a=e.__e=nt(r.__e,e,r,n,o,_,i,u,c);return(f=y.diffed)&&f(e),128&e.__u?void 0:a}function Ue(t,e,r){for(var n=0;n<r.length;n++)ie(r[n],r[++n],r[++n]);y.__c&&y.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(_){_.call(o)})}catch(_){y.__e(_,o.__v)}})}function nt(t,e,r,n,o,_,i,a,u){var c,f,s,d,l,v,w,m=r.props,h=e.props,p=e.type;if(p=="svg"?o="http://www.w3.org/2000/svg":p=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),_!=null){for(c=0;c<_.length;c++)if((l=_[c])&&"setAttribute"in l==!!p&&(p?l.localName==p:l.nodeType==3)){t=l,_[c]=null;break}}if(t==null){if(p==null)return document.createTextNode(h);t=document.createElementNS(o,p,h.is&&h),a&&(y.__m&&y.__m(e,_),a=!1),_=null}if(p===null)m===h||a&&t.data===h||(t.data=h);else{if(_=_&&B.call(t.childNodes),m=r.props||x,!a&&_!=null)for(m={},c=0;c<t.attributes.length;c++)m[(l=t.attributes[c]).name]=l.value;for(c in m)if(l=m[c],c!="children"){if(c=="dangerouslySetInnerHTML")s=l;else if(!(c in h)){if(c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h)continue;L(t,c,null,l,o)}}for(c in h)l=h[c],c=="children"?d=l:c=="dangerouslySetInnerHTML"?f=l:c=="value"?v=l:c=="checked"?w=l:a&&typeof l!="function"||m[c]===l||L(t,c,l,m[c],o);if(f)a||s&&(f.__html===s.__html||f.__html===t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(s&&(t.innerHTML=""),xe(t,oe(d)?d:[d],e,r,n,p=="foreignObject"?"http://www.w3.org/1999/xhtml":o,_,i,_?_[0]:r.__k&&k(r,0),a,u),_!=null)for(c=_.length;c--;)_e(_[c]);a||(c="value",p=="progress"&&v==null?t.removeAttribute("value"):v!==void 0&&(v!==t[c]||p=="progress"&&!v||p=="option"&&v!==m[c])&&L(t,c,v,m[c],o),c="checked",w!==void 0&&w!==t[c]&&L(t,c,w,m[c],o))}return t}function ie(t,e,r){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(o){y.__e(o,r)}}function He(t,e,r){var n,o;if(y.unmount&&y.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||ie(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(_){y.__e(_,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&He(n[o],e,r||typeof t.type!="function");r||_e(t.__e),t.__c=t.__=t.__e=void 0}function ot(t,e,r){return this.constructor(t,r)}function Bt(t,e,r){var n,o,_,i;e==document&&(e=document.documentElement),y.__&&y.__(t,e),o=(n=typeof r=="function")?null:e.__k,_=[],i=[],se(e,t=e.__k=et(K,null,[t]),o||x,x,e.namespaceURI,o?null:e.firstChild?B.call(e.childNodes):null,_,o?o.__e:e.firstChild,n,i),Ue(_,t,i)}B=Ne.slice,y={__e:function(t,e,r,n){for(var o,_,i;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(t)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),i=o.__d),i)return o.__E=o}catch(a){t=a}throw t}},ke=0,F.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof t=="function"&&(t=t($({},r),this.props)),t&&$(r,t),t!=null&&this.__v&&(e&&this._sb.push(e),ue(this))},F.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},F.prototype.render=K,T=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,J=function(t,e){return t.__v.__b-e.__v.__b},M.__r=0,De=/(PointerCapture)$|Capture$/i,ne=0,z=fe(!1),Z=fe(!0);var _t=0;function Kt(t,e,r,n,o,_){e||(e={});var i,a,u=e;if("ref"in u)for(a in u={},e)a=="ref"?i=e[a]:u[a]=e[a];var c={type:t,props:u,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--_t,__i:-1,__u:0,__source:o,__self:_};if(typeof t=="function"&&(i=t.defaultProps))for(a in i)u[a]===void 0&&(u[a]=i[a]);return y.vnode&&y.vnode(c),c}var q,g,X,de,ee=0,Le=[],E=y,pe=E.__b,he=E.__r,ye=E.diffed,me=E.__c,ve=E.unmount,ge=E.__;function Oe(t,e){E.__h&&E.__h(g,t,ee||e),ee=0;var r=g.__H||(g.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function Qt(t){return ee=1,st(Fe,t)}function st(t,e,r){var n=Oe(q++,2);if(n.t=t,!n.__c&&(n.__=[Fe(void 0,e),function(a){var u=n.__N?n.__N[0]:n.__[0],c=n.t(u,a);u!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=g,!g.u)){var o=function(a,u,c){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(d){return!!d.__c});if(f.every(function(d){return!d.__N}))return!_||_.call(this,a,u,c);var s=n.__c.props!==a;return f.forEach(function(d){if(d.__N){var l=d.__[0];d.__=d.__N,d.__N=void 0,l!==d.__[0]&&(s=!0)}}),_&&_.call(this,a,u,c)||s};g.u=!0;var _=g.shouldComponentUpdate,i=g.componentWillUpdate;g.componentWillUpdate=function(a,u,c){if(this.__e){var f=_;_=void 0,o(a,u,c),_=f}i&&i.call(this,a,u,c)},g.shouldComponentUpdate=o}return n.__N||n.__}function Wt(t,e){var r=Oe(q++,3);!E.__s&&ct(r.__H,e)&&(r.__=t,r.i=e,g.__H.__h.push(r))}function it(){for(var t;t=Le.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(V),t.__H.__h.forEach(te),t.__H.__h=[]}catch(e){t.__H.__h=[],E.__e(e,t.__v)}}E.__b=function(t){g=null,pe&&pe(t)},E.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ge&&ge(t,e)},E.__r=function(t){he&&he(t),q=0;var e=(g=t.__c).__H;e&&(X===g?(e.__h=[],g.__h=[],e.__.forEach(function(r){r.__N&&(r.__=r.__N),r.i=r.__N=void 0})):(e.__h.forEach(V),e.__h.forEach(te),e.__h=[],q=0)),X=g},E.diffed=function(t){ye&&ye(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Le.push(e)!==1&&de===E.requestAnimationFrame||((de=E.requestAnimationFrame)||at)(it)),e.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.i=void 0})),X=g=null},E.__c=function(t,e){e.some(function(r){try{r.__h.forEach(V),r.__h=r.__h.filter(function(n){return!n.__||te(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],E.__e(n,r.__v)}}),me&&me(t,e)},E.unmount=function(t){ve&&ve(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{V(n)}catch(o){e=o}}),r.__H=void 0,e&&E.__e(e,r.__v))};var Ee=typeof requestAnimationFrame=="function";function at(t){var e,r=function(){clearTimeout(n),Ee&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,100);Ee&&(e=requestAnimationFrame(r))}function V(t){var e=g,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),g=e}function te(t){var e=g;t.__c=t.__(),g=e}function ct(t,e){return!t||t.length!==e.length||e.some(function(r,n){return r!==t[n]})}function Fe(t,e){return typeof e=="function"?e(t):e}const Gt=`#graphql
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
`,Xt=`#graphql
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
`,Yt=`#graphql
query getCollectionById($id: ID!) {
  collection(id: $id) {
    title
    products(first: 10) {
      nodes {
        id
        title
        availableForSale
        tags
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
`,Q="GraphQL Client",we=0,be=3,Ve="An error occurred while fetching from the API. Review 'graphQLErrors' for details.",Me="Response returned unexpected Content-Type:",qe="An unknown error has occurred. The API did not return a data object or any errors in its response.",re={json:"application/json",multipart:"multipart/mixed"},Se="X-SDK-Variant",Ae="X-SDK-Version",ut="shopify-graphql-client",lt="1.2.1",je=1e3,ft=[429,503],Be=/@(defer)\b/i,$e=`\r
`,dt=/boundary="?([^=";]+)"?/i,Re=$e+$e;function R(t,e=Q){return t.startsWith(`${e}`)?t:`${e}: ${t}`}function C(t){return t instanceof Error?t.message:JSON.stringify(t)}function Ke(t){return t instanceof Error&&t.cause?t.cause:void 0}function Qe(t){return t.flatMap(({errors:e})=>e??[])}function We({client:t,retries:e}){if(e!==void 0&&(typeof e!="number"||e<we||e>be))throw new Error(`${t}: The provided "retries" value (${e}) is invalid - it cannot be less than ${we} or greater than ${be}`)}function b(t,e){return e&&(typeof e!="object"||Array.isArray(e)||typeof e=="object"&&Object.keys(e).length>0)?{[t]:e}:{}}function Ge(t,e){if(t.length===0)return e;const n={[t.pop()]:e};return t.length===0?n:Ge(t,n)}function Xe(t,e){return Object.keys(e||{}).reduce((r,n)=>(typeof e[n]=="object"||Array.isArray(e[n]))&&t[n]?(r[n]=Xe(t[n],e[n]),r):(r[n]=e[n],r),Array.isArray(t)?[...t]:{...t})}function Ye([t,...e]){return e.reduce(Xe,{...t})}function pt({clientLogger:t,customFetchApi:e=fetch,client:r=Q,defaultRetryWaitTime:n=je,retriableCodes:o=ft}){const _=async(i,a,u)=>{const c=a+1,f=u+1;let s;try{if(s=await e(...i),t({type:"HTTP-Response",content:{requestParams:i,response:s}}),!s.ok&&o.includes(s.status)&&c<=f)throw new Error;return s}catch(d){if(c<=f){const l=s==null?void 0:s.headers.get("Retry-After");return await ht(l?parseInt(l,10):n),t({type:"HTTP-Retry",content:{requestParams:i,lastResponse:s,retryAttempt:a,maxRetries:u}}),_(i,c,u)}throw new Error(R(`${u>0?`Attempted maximum number of ${u} network retries. Last message - `:""}${C(d)}`,r))}};return _}async function ht(t){return new Promise(e=>setTimeout(e,t))}function yt({headers:t,url:e,customFetchApi:r=fetch,retries:n=0,logger:o}){We({client:Q,retries:n});const _={headers:t,url:e,retries:n},i=mt(o),a=pt({customFetchApi:r,clientLogger:i,defaultRetryWaitTime:je}),u=vt(a,_),c=gt(u),f=Rt(u);return{config:_,fetch:u,request:c,requestStream:f}}function mt(t){return e=>{t&&t(e)}}async function Je(t){const{errors:e,data:r,extensions:n}=await t.json();return{...b("data",r),...b("extensions",n),headers:t.headers,...e||!r?{errors:{networkStatusCode:t.status,message:R(e?Ve:qe),...b("graphQLErrors",e),response:t}}:{}}}function vt(t,{url:e,headers:r,retries:n}){return async(o,_={})=>{const{variables:i,headers:a,url:u,retries:c,signal:f}=_,s=JSON.stringify({query:o,variables:i});We({client:Q,retries:c});const d=Object.entries({...r,...a}).reduce((v,[w,m])=>(v[w]=Array.isArray(m)?m.join(", "):m.toString(),v),{});return!d[Se]&&!d[Ae]&&(d[Se]=ut,d[Ae]=lt),t([u??e,{method:"POST",headers:d,body:s,signal:f}],1,c??n)}}function gt(t){return async(...e)=>{if(Be.test(e[0]))throw new Error(R("This operation will result in a streamable response - use requestStream() instead."));try{const r=await t(...e),{status:n,statusText:o}=r,_=r.headers.get("content-type")||"";return r.ok?_.includes(re.json)?Je(r):{errors:{networkStatusCode:n,message:R(`${Me} ${_}`),response:r}}:{errors:{networkStatusCode:n,message:R(o),response:r}}}catch(r){return{errors:{message:C(r)}}}}}async function*Et(t){const e=new TextDecoder;if(t.body[Symbol.asyncIterator])for await(const r of t.body)yield e.decode(r);else{const r=t.body.getReader();let n;try{for(;!(n=await r.read()).done;)yield e.decode(n.value)}finally{r.cancel()}}}function wt(t,e){return{async*[Symbol.asyncIterator](){try{let r="";for await(const n of t)if(r+=n,r.indexOf(e)>-1){const o=r.lastIndexOf(e),i=r.slice(0,o).split(e).filter(a=>a.trim().length>0).map(a=>a.slice(a.indexOf(Re)+Re.length).trim());i.length>0&&(yield i),r=r.slice(o+e.length),r.trim()==="--"&&(r="")}}catch(r){throw new Error(`Error occured while processing stream payload - ${C(r)}`)}}}}function bt(t){return{async*[Symbol.asyncIterator](){yield{...await Je(t),hasNext:!1}}}}function St(t){return t.map(e=>{try{return JSON.parse(e)}catch(r){throw new Error(`Error in parsing multipart response - ${C(r)}`)}}).map(e=>{const{data:r,incremental:n,hasNext:o,extensions:_,errors:i}=e;if(!n)return{data:r||{},...b("errors",i),...b("extensions",_),hasNext:o};const a=n.map(({data:u,path:c,errors:f})=>({data:u&&c?Ge(c,u):{},...b("errors",f)}));return{data:a.length===1?a[0].data:Ye([...a.map(({data:u})=>u)]),...b("errors",Qe(a)),hasNext:o}})}function At(t,e){if(t.length>0)throw new Error(Ve,{cause:{graphQLErrors:t}});if(Object.keys(e).length===0)throw new Error(qe)}function $t(t,e){var a;const r=(e??"").match(dt),n=`--${r?r[1]:"-"}`;if(!((a=t.body)!=null&&a.getReader)&&!t.body[Symbol.asyncIterator])throw new Error("API multipart response did not return an iterable body",{cause:t});const o=Et(t);let _={},i;return{async*[Symbol.asyncIterator](){var u;try{let c=!0;for await(const f of wt(o,n)){const s=St(f);i=((u=s.find(l=>l.extensions))==null?void 0:u.extensions)??i;const d=Qe(s);_=Ye([_,...s.map(({data:l})=>l)]),c=s.slice(-1)[0].hasNext,At(d,_),yield{...b("data",_),...b("extensions",i),hasNext:c}}if(c)throw new Error("Response stream terminated unexpectedly")}catch(c){const f=Ke(c);yield{...b("data",_),...b("extensions",i),errors:{message:R(C(c)),networkStatusCode:t.status,...b("graphQLErrors",f==null?void 0:f.graphQLErrors),response:t},hasNext:!1}}}}}function Rt(t){return async(...e)=>{if(!Be.test(e[0]))throw new Error(R("This operation does not result in a streamable response - use request() instead."));try{const r=await t(...e),{statusText:n}=r;if(!r.ok)throw new Error(n,{cause:r});const o=r.headers.get("content-type")||"";switch(!0){case o.includes(re.json):return bt(r);case o.includes(re.multipart):return $t(r,o);default:throw new Error(`${Me} ${o}`,{cause:r})}}catch(r){return{async*[Symbol.asyncIterator](){const n=Ke(r);yield{errors:{message:R(C(r)),...b("networkStatusCode",n==null?void 0:n.status),...b("response",n)},hasNext:!1}}}}}}function Tt({client:t,storeDomain:e}){try{if(!e||typeof e!="string")throw new Error;const r=e.trim(),n=r.match(/^https?:/)?r:`https://${r}`,o=new URL(n);return o.protocol="https",o.origin}catch(r){throw new Error(`${t}: a valid store domain ("${e}") must be provided`,{cause:r})}}function ze({client:t,currentSupportedApiVersions:e,apiVersion:r,logger:n}){const o=`${t}: the provided apiVersion ("${r}")`,_=`Currently supported API versions: ${e.join(", ")}`;if(!r||typeof r!="string")throw new Error(`${o} is invalid. ${_}`);const i=r.trim();e.includes(i)||(n?n({type:"Unsupported_Api_Version",content:{apiVersion:r,supportedApiVersions:e}}):console.warn(`${o} is likely deprecated or not supported. ${_}`))}function j(t){const e=t*3-2;return e===10?e:`0${e}`}function Y(t,e,r){const n=e-r;return n<=0?`${t-1}-${j(n+4)}`:`${t}-${j(n)}`}function kt(){const t=new Date,e=t.getUTCMonth(),r=t.getUTCFullYear(),n=Math.floor(e/3+1);return{year:r,quarter:n,version:`${r}-${j(n)}`}}function Ct(){const{year:t,quarter:e,version:r}=kt(),n=e===4?`${t+1}-01`:`${t}-${j(e+1)}`;return[Y(t,e,3),Y(t,e,2),Y(t,e,1),r,n,"unstable"]}function Dt(t){return e=>({...e??{},...t.headers})}function Nt({getHeaders:t,getApiUrl:e}){return(r,n)=>{const o=[r];if(n&&Object.keys(n).length>0){const{variables:_,apiVersion:i,headers:a,retries:u}=n;o.push({..._?{variables:_}:{},...a?{headers:t(a)}:{},...i?{url:e(i)}:{},...u?{retries:u}:{}})}return o}}const Te="application/json",It="storefront-api-client",xt="1.0.3",Pt="X-Shopify-Storefront-Access-Token",Ut="Shopify-Storefront-Private-Token",Ht="X-SDK-Variant",Lt="X-SDK-Version",Ot="X-SDK-Variant-Source",P="Storefront API Client";function Ft(t){if(t&&typeof window<"u")throw new Error(`${P}: private access tokens and headers should only be used in a server-to-server implementation. Use the public API access token in nonserver environments.`)}function Vt(t,e){if(!t&&!e)throw new Error(`${P}: a public or private access token must be provided`);if(t&&e)throw new Error(`${P}: only provide either a public or private access token`)}function Mt({storeDomain:t,apiVersion:e,publicAccessToken:r,privateAccessToken:n,clientName:o,retries:_=0,customFetchApi:i,logger:a}){const u=Ct(),c=Tt({client:P,storeDomain:t}),f={client:P,currentSupportedApiVersions:u,logger:a};ze({...f,apiVersion:e}),Vt(r,n),Ft(n);const s=qt(c,e,f),d={storeDomain:c,apiVersion:e,...r?{publicAccessToken:r}:{privateAccessToken:n},headers:{"Content-Type":Te,Accept:Te,[Ht]:It,[Lt]:xt,...o?{[Ot]:o}:{},...r?{[Pt]:r}:{[Ut]:n}},apiUrl:s(),clientName:o},l=yt({headers:d.headers,url:d.apiUrl,retries:_,customFetchApi:i,logger:a}),v=Dt(d),w=jt(d,s),m=Nt({getHeaders:v,getApiUrl:w});return Object.freeze({config:d,getHeaders:v,getApiUrl:w,fetch:(...p)=>l.fetch(...m(...p)),request:(...p)=>l.request(...m(...p)),requestStream:(...p)=>l.requestStream(...m(...p))})}function qt(t,e,r){return n=>{n&&ze({...r,apiVersion:n});const o=(n??e).trim();return`${t}/api/${o}/graphql.json`}}function jt(t,e){return r=>r?e(r):t.apiUrl}const Jt=Mt({storeDomain:window.shopUrl,apiVersion:"2025-01",publicAccessToken:window.s3_pat});export{Bt as D,Xt as a,Jt as c,Yt as f,Gt as g,Qt as h,Kt as u,F as x,Wt as y};
