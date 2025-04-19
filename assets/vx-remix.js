import{x as _i,l as ke,g as ye,k as $e,H as $n,G as mf,h as xe,a as Oo,p as Hs,y as ne,_ as Si,A as re,F as ko,T as Ln,q as Ue,b as Ai,P as zo,J as er,c as Sc,D as Fr,E as xf,d as gf,u as it}from"./vx-hooks.module.js";function Ac(r,t){for(var e in t)r[e]=t[e];return r}function Ga(r,t){for(var e in r)if(e!=="__source"&&!(e in t))return!0;for(var n in t)if(n!=="__source"&&r[n]!==t[n])return!0;return!1}function Ho(r,t){var e=t(),n=xe({t:{__:e,u:t}}),s=n[0].t,a=n[1];return Si(function(){s.__=e,s.u=t,Zs(s)&&a({t:s})},[r,e,t]),ne(function(){return Zs(s)&&a({t:s}),r(function(){Zs(s)&&a({t:s})})},[r]),e}function Zs(r){var t,e,n=r.u,s=r.__;try{var a=n();return!((t=s)===(e=a)&&(t!==0||1/t==1/e)||t!=t&&e!=e)}catch{return!0}}function Vo(r){r()}function Go(r){return r}function Wo(){return[!1,Vo]}var Xo=Si;function Ls(r,t){this.props=r,this.context=t}function Tc(r,t){function e(s){var a=this.props.ref,o=a==s.ref;return!o&&a&&(a.call?a(null):a.current=null),t?!t(this.props,s)||!o:Ga(this.props,s)}function n(s){return this.shouldComponentUpdate=e,ye(r,s)}return n.displayName="Memo("+(r.displayName||r.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(Ls.prototype=new _i).isPureReactComponent=!0,Ls.prototype.shouldComponentUpdate=function(r,t){return Ga(this.props,r)||Ga(this.state,t)};var Cl=ke.__b;ke.__b=function(r){r.type&&r.type.__f&&r.ref&&(r.props.ref=r.ref,r.ref=null),Cl&&Cl(r)};var _f=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function de(r){function t(e){var n=Ac({},e);return delete n.ref,r(n,e.ref||null)}return t.$$typeof=_f,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(r.displayName||r.name)+")",t}var bl=function(r,t){return r==null?null:$n($n(r).map(t))},fn={map:bl,forEach:bl,count:function(r){return r?$n(r).length:0},only:function(r){var t=$n(r);if(t.length!==1)throw"Children.only";return t[0]},toArray:$n},vf=ke.__e;ke.__e=function(r,t,e,n){if(r.then){for(var s,a=t;a=a.__;)if((s=a.__c)&&s.__c)return t.__e==null&&(t.__e=e.__e,t.__k=e.__k),s.__c(r,t)}vf(r,t,e,n)};var wl=ke.unmount;function Cc(r,t,e){return r&&(r.__c&&r.__c.__H&&(r.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),r.__c.__H=null),(r=Ac({},r)).__c!=null&&(r.__c.__P===e&&(r.__c.__P=t),r.__c=null),r.__k=r.__k&&r.__k.map(function(n){return Cc(n,t,e)})),r}function bc(r,t,e){return r&&e&&(r.__v=null,r.__k=r.__k&&r.__k.map(function(n){return bc(n,t,e)}),r.__c&&r.__c.__P===t&&(r.__e&&e.appendChild(r.__e),r.__c.__e=!0,r.__c.__P=e)),r}function Dr(){this.__u=0,this.o=null,this.__b=null}function wc(r){var t=r.__.__c;return t&&t.__a&&t.__a(r)}function Rc(r){var t,e,n;function s(a){if(t||(t=r()).then(function(o){e=o.default||o},function(o){n=o}),n)throw n;if(!e)throw t;return ye(e,a)}return s.displayName="Lazy",s.__f=!0,s}function Yi(){this.i=null,this.l=null}ke.unmount=function(r){var t=r.__c;t&&t.__R&&t.__R(),t&&32&r.__u&&(r.type=null),wl&&wl(r)},(Dr.prototype=new _i).__c=function(r,t){var e=t.__c,n=this;n.o==null&&(n.o=[]),n.o.push(e);var s=wc(n.__v),a=!1,o=function(){a||(a=!0,e.__R=null,s?s(l):l())};e.__R=o;var l=function(){if(!--n.__u){if(n.state.__a){var u=n.state.__a;n.__v.__k[0]=bc(u,u.__c.__P,u.__c.__O)}var c;for(n.setState({__a:n.__b=null});c=n.o.pop();)c.forceUpdate()}};n.__u++||32&t.__u||n.setState({__a:n.__b=n.__v.__k[0]}),r.then(o,o)},Dr.prototype.componentWillUnmount=function(){this.o=[]},Dr.prototype.render=function(r,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=Cc(this.__b,e,n.__O=n.__P)}this.__b=null}var s=t.__a&&ye($e,null,r.fallback);return s&&(s.__u&=-33),[ye($e,null,t.__a?null:r.children),s]};var Rl=function(r,t,e){if(++e[1]===e[0]&&r.l.delete(t),r.props.revealOrder&&(r.props.revealOrder[0]!=="t"||!r.l.size))for(e=r.i;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;r.i=e=e[2]}};function Ef(r){return this.getChildContext=function(){return r.context},r.children}function yf(r){var t=this,e=r.h;t.componentWillUnmount=function(){Fr(null,t.v),t.v=null,t.h=null},t.h&&t.h!==e&&t.componentWillUnmount(),t.v||(t.h=e,t.v={nodeType:1,parentNode:e,childNodes:[],contains:function(){return!0},appendChild:function(n){this.childNodes.push(n),t.h.appendChild(n)},insertBefore:function(n,s){this.childNodes.push(n),t.h.insertBefore(n,s)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.h.removeChild(n)}}),Fr(ye(Ef,{context:t.context},r.__v),t.v)}function Dc(r,t){var e=ye(yf,{__v:r,h:t});return e.containerInfo=t,e}(Yi.prototype=new _i).__a=function(r){var t=this,e=wc(t.__v),n=t.l.get(r);return n[0]++,function(s){var a=function(){t.props.revealOrder?(n.push(s),Rl(t,r,n)):s()};e?e(a):a()}},Yi.prototype.render=function(r){this.i=null,this.l=new Map;var t=$n(r.children);r.revealOrder&&r.revealOrder[0]==="b"&&t.reverse();for(var e=t.length;e--;)this.l.set(t[e],this.i=[1,0,this.i]);return r.children},Yi.prototype.componentDidUpdate=Yi.prototype.componentDidMount=function(){var r=this;this.l.forEach(function(t,e){Rl(r,e,t)})};var Pc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Mf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Sf=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Af=/[A-Z0-9]/g,Tf=typeof document<"u",Cf=function(r){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(r)};function Bc(r,t,e){return t.__k==null&&(t.textContent=""),Fr(r,t),typeof e=="function"&&e(),r?r.__c:null}function Lc(r,t,e){return xf(r,t),typeof e=="function"&&e(),r?r.__c:null}_i.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(r){Object.defineProperty(_i.prototype,r,{configurable:!0,get:function(){return this["UNSAFE_"+r]},set:function(t){Object.defineProperty(this,r,{configurable:!0,writable:!0,value:t})}})});var Dl=ke.event;function bf(){}function wf(){return this.cancelBubble}function Rf(){return this.defaultPrevented}ke.event=function(r){return Dl&&(r=Dl(r)),r.persist=bf,r.isPropagationStopped=wf,r.isDefaultPrevented=Rf,r.nativeEvent=r};var Yo,Df={enumerable:!1,configurable:!0,get:function(){return this.class}},Pl=ke.vnode;ke.vnode=function(r){typeof r.type=="string"&&function(t){var e=t.props,n=t.type,s={},a=n.indexOf("-")===-1;for(var o in e){var l=e[o];if(!(o==="value"&&"defaultValue"in e&&l==null||Tf&&o==="children"&&n==="noscript"||o==="class"||o==="className")){var u=o.toLowerCase();o==="defaultValue"&&"value"in e&&e.value==null?o="value":o==="download"&&l===!0?l="":u==="translate"&&l==="no"?l=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?o="ondblclick":u!=="onchange"||n!=="input"&&n!=="textarea"||Cf(e.type)?u==="onfocus"?o="onfocusin":u==="onblur"?o="onfocusout":Sf.test(o)&&(o=u):u=o="oninput":a&&Mf.test(o)?o=o.replace(Af,"-$&").toLowerCase():l===null&&(l=void 0),u==="oninput"&&s[o=u]&&(o="oninputCapture"),s[o]=l}}n=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=$n(e.children).forEach(function(c){c.props.selected=s.value.indexOf(c.props.value)!=-1})),n=="select"&&s.defaultValue!=null&&(s.value=$n(e.children).forEach(function(c){c.props.selected=s.multiple?s.defaultValue.indexOf(c.props.value)!=-1:s.defaultValue==c.props.value})),e.class&&!e.className?(s.class=e.class,Object.defineProperty(s,"className",Df)):(e.className&&!e.class||e.class&&e.className)&&(s.class=s.className=e.className),t.props=s}(r),r.$$typeof=Pc,Pl&&Pl(r)};var Bl=ke.__r;ke.__r=function(r){Bl&&Bl(r),Yo=r.__c};var Ll=ke.diffed;ke.diffed=function(r){Ll&&Ll(r);var t=r.props,e=r.__e;e!=null&&r.type==="textarea"&&"value"in t&&t.value!==e.value&&(e.value=t.value==null?"":t.value),Yo=null};var Fc={ReactCurrentDispatcher:{current:{readContext:function(r){return Yo.__n[r.__c].props.value},useCallback:Ue,useContext:Ai,useDebugValue:zo,useDeferredValue:Go,useEffect:ne,useId:Oo,useImperativeHandle:ko,useInsertionEffect:Xo,useLayoutEffect:Si,useMemo:Ln,useReducer:Hs,useRef:re,useState:xe,useSyncExternalStore:Ho,useTransition:Wo}}},Pf="18.3.1";function Ic(r){return ye.bind(null,r)}function Fn(r){return!!r&&r.$$typeof===Pc}function Nc(r){return Fn(r)&&r.type===$e}function Uc(r){return!!r&&!!r.displayName&&(typeof r.displayName=="string"||r.displayName instanceof String)&&r.displayName.startsWith("Memo(")}function dr(r){return Fn(r)?mf.apply(null,arguments):r}function Oc(r){return!!r.__k&&(Fr(null,r),!0)}function kc(r){return r&&(r.base||r.nodeType===1&&r)||null}var zc=function(r,t){return r(t)},qo=function(r,t){return r(t)},Hc=$e,Vc=Fn,Gc={useState:xe,useId:Oo,useReducer:Hs,useEffect:ne,useLayoutEffect:Si,useInsertionEffect:Xo,useTransition:Wo,useDeferredValue:Go,useSyncExternalStore:Ho,startTransition:Vo,useRef:re,useImperativeHandle:ko,useMemo:Ln,useCallback:Ue,useContext:Ai,useDebugValue:zo,version:"18.3.1",Children:fn,render:Bc,hydrate:Lc,unmountComponentAtNode:Oc,createPortal:Dc,createElement:ye,createContext:er,createFactory:Ic,cloneElement:dr,createRef:Sc,Fragment:$e,isValidElement:Fn,isElement:Vc,isFragment:Nc,isMemo:Uc,findDOMNode:kc,Component:_i,PureComponent:Ls,memo:Tc,forwardRef:de,flushSync:qo,unstable_batchedUpdates:zc,StrictMode:Hc,Suspense:Dr,SuspenseList:Yi,lazy:Rc,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Fc};const Bf=Object.freeze(Object.defineProperty({__proto__:null,Children:fn,Component:_i,Fragment:$e,PureComponent:Ls,StrictMode:Hc,Suspense:Dr,SuspenseList:Yi,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Fc,cloneElement:dr,createContext:er,createElement:ye,createFactory:Ic,createPortal:Dc,createRef:Sc,default:Gc,findDOMNode:kc,flushSync:qo,forwardRef:de,hydrate:Lc,isElement:Vc,isFragment:Nc,isMemo:Uc,isValidElement:Fn,lazy:Rc,memo:Tc,render:Bc,startTransition:Vo,unmountComponentAtNode:Oc,unstable_batchedUpdates:zc,useCallback:Ue,useContext:Ai,useDebugValue:zo,useDeferredValue:Go,useEffect:ne,useErrorBoundary:gf,useId:Oo,useImperativeHandle:ko,useInsertionEffect:Xo,useLayoutEffect:Si,useMemo:Ln,useReducer:Hs,useRef:re,useState:xe,useSyncExternalStore:Ho,useTransition:Wo,version:Pf},Symbol.toStringTag,{value:"Module"}));function Jn(r,t,{checkForDefaultPrevented:e=!0}={}){return function(s){if(r==null||r(s),e===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function Fl(r,t){if(typeof r=="function")return r(t);r!=null&&(r.current=t)}function Wc(...r){return t=>{let e=!1;const n=r.map(s=>{const a=Fl(s,t);return!e&&typeof a=="function"&&(e=!0),a});if(e)return()=>{for(let s=0;s<n.length;s++){const a=n[s];typeof a=="function"?a():Fl(r[s],null)}}}}function Ti(...r){return Ue(Wc(...r),r)}function Lf(r,t){const e=er(t),n=a=>{const{children:o,...l}=a,u=Ln(()=>l,Object.values(l));return it(e.Provider,{value:u,children:o})};n.displayName=r+"Provider";function s(a){const o=Ai(e);if(o)return o;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${r}\``)}return[n,s]}function Ff(r,t=[]){let e=[];function n(a,o){const l=er(o),u=e.length;e=[...e,o];const c=f=>{var p;const{scope:d,children:m,..._}=f,g=((p=d==null?void 0:d[r])==null?void 0:p[u])||l,x=Ln(()=>_,Object.values(_));return it(g.Provider,{value:x,children:m})};c.displayName=a+"Provider";function h(f,d){var g;const m=((g=d==null?void 0:d[r])==null?void 0:g[u])||l,_=Ai(m);if(_)return _;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${a}\``)}return[c,h]}const s=()=>{const a=e.map(o=>er(o));return function(l){const u=(l==null?void 0:l[r])||a;return Ln(()=>({[`__scope${r}`]:{...l,[r]:u}}),[l,u])}};return s.scopeName=r,[n,If(s,...t)]}function If(...r){const t=r[0];if(r.length===1)return t;const e=()=>{const n=r.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const o=n.reduce((l,{useScope:u,scopeName:c})=>{const f=u(a)[`__scope${c}`];return{...l,...f}},{});return Ln(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return e.scopeName=t.scopeName,e}var Fs=globalThis!=null&&globalThis.document?Si:()=>{},Nf=Bf.useId||(()=>{}),Uf=0;function $s(r){const[t,e]=xe(Nf());return Fs(()=>{r||e(n=>n??String(Uf++))},[r]),r||(t?`radix-${t}`:"")}function vi(r){const t=re(r);return ne(()=>{t.current=r}),Ln(()=>(...e)=>{var n;return(n=t.current)==null?void 0:n.call(t,...e)},[])}function Of({prop:r,defaultProp:t,onChange:e=()=>{}}){const[n,s]=kf({defaultProp:t,onChange:e}),a=r!==void 0,o=a?r:n,l=vi(e),u=Ue(c=>{if(a){const f=typeof c=="function"?c(r):c;f!==r&&l(f)}else s(c)},[a,r,s,l]);return[o,u]}function kf({defaultProp:r,onChange:t}){const e=xe(r),[n]=e,s=re(n),a=vi(t);return ne(()=>{s.current!==n&&(a(n),s.current=n)},[n,s,a]),e}var jo=de((r,t)=>{const{children:e,...n}=r,s=fn.toArray(e),a=s.find(Hf);if(a){const o=a.props.children,l=s.map(u=>u===a?fn.count(o)>1?fn.only(null):Fn(o)?o.props.children:null:u);return it(Wa,{...n,ref:t,children:Fn(o)?dr(o,void 0,l):null})}return it(Wa,{...n,ref:t,children:e})});jo.displayName="Slot";var Wa=de((r,t)=>{const{children:e,...n}=r;if(Fn(e)){const s=Gf(e),a=Vf(n,e.props);return e.type!==$e&&(a.ref=t?Wc(t,s):s),dr(e,a)}return fn.count(e)>1?fn.only(null):null});Wa.displayName="SlotClone";var zf=({children:r})=>it($e,{children:r});function Hf(r){return Fn(r)&&r.type===zf}function Vf(r,t){const e={...t};for(const n in t){const s=r[n],a=t[n];/^on[A-Z]/.test(n)?s&&a?e[n]=(...l)=>{a(...l),s(...l)}:s&&(e[n]=s):n==="style"?e[n]={...s,...a}:n==="className"&&(e[n]=[s,a].filter(Boolean).join(" "))}return{...r,...e}}function Gf(r){var n,s;let t=(n=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:n.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?r.ref:(t=(s=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:s.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?r.props.ref:r.props.ref||r.ref)}var Wf=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Un=Wf.reduce((r,t)=>{const e=de((n,s)=>{const{asChild:a,...o}=n,l=a?jo:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),it(l,{...o,ref:s})});return e.displayName=`Primitive.${t}`,{...r,[t]:e}},{});function Xf(r,t){r&&qo(()=>r.dispatchEvent(t))}function Yf(r,t=globalThis==null?void 0:globalThis.document){const e=vi(r);ne(()=>{const n=s=>{s.key==="Escape"&&e(s)};return t.addEventListener("keydown",n,{capture:!0}),()=>t.removeEventListener("keydown",n,{capture:!0})},[e,t])}var qf="DismissableLayer",Xa="dismissableLayer.update",jf="dismissableLayer.pointerDownOutside",Kf="dismissableLayer.focusOutside",Il,Xc=er({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Yc=de((r,t)=>{const{disableOutsidePointerEvents:e=!1,onEscapeKeyDown:n,onPointerDownOutside:s,onFocusOutside:a,onInteractOutside:o,onDismiss:l,...u}=r,c=Ai(Xc),[h,f]=xe(null),d=(h==null?void 0:h.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=xe({}),_=Ti(t,b=>f(b)),g=Array.from(c.layers),[x]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),p=g.indexOf(x),T=h?g.indexOf(h):-1,S=c.layersWithOutsidePointerEventsDisabled.size>0,E=T>=p,R=Jf(b=>{const I=b.target,A=[...c.branches].some(M=>M.contains(I));!E||A||(s==null||s(b),o==null||o(b),b.defaultPrevented||l==null||l())},d),w=Qf(b=>{const I=b.target;[...c.branches].some(M=>M.contains(I))||(a==null||a(b),o==null||o(b),b.defaultPrevented||l==null||l())},d);return Yf(b=>{T===c.layers.size-1&&(n==null||n(b),!b.defaultPrevented&&l&&(b.preventDefault(),l()))},d),ne(()=>{if(h)return e&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(Il=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(h)),c.layers.add(h),Nl(),()=>{e&&c.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=Il)}},[h,d,e,c]),ne(()=>()=>{h&&(c.layers.delete(h),c.layersWithOutsidePointerEventsDisabled.delete(h),Nl())},[h,c]),ne(()=>{const b=()=>m({});return document.addEventListener(Xa,b),()=>document.removeEventListener(Xa,b)},[]),it(Un.div,{...u,ref:_,style:{pointerEvents:S?E?"auto":"none":void 0,...r.style},onFocusCapture:Jn(r.onFocusCapture,w.onFocusCapture),onBlurCapture:Jn(r.onBlurCapture,w.onBlurCapture),onPointerDownCapture:Jn(r.onPointerDownCapture,R.onPointerDownCapture)})});Yc.displayName=qf;var Zf="DismissableLayerBranch",$f=de((r,t)=>{const e=Ai(Xc),n=re(null),s=Ti(t,n);return ne(()=>{const a=n.current;if(a)return e.branches.add(a),()=>{e.branches.delete(a)}},[e.branches]),it(Un.div,{...r,ref:s})});$f.displayName=Zf;function Jf(r,t=globalThis==null?void 0:globalThis.document){const e=vi(r),n=re(!1),s=re(()=>{});return ne(()=>{const a=l=>{if(l.target&&!n.current){let u=function(){qc(jf,e,c,{discrete:!0})};const c={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=u,t.addEventListener("click",s.current,{once:!0})):u()}else t.removeEventListener("click",s.current);n.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,e]),{onPointerDownCapture:()=>n.current=!0}}function Qf(r,t=globalThis==null?void 0:globalThis.document){const e=vi(r),n=re(!1);return ne(()=>{const s=a=>{a.target&&!n.current&&qc(Kf,e,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,e]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}function Nl(){const r=new CustomEvent(Xa);document.dispatchEvent(r)}function qc(r,t,e,{discrete:n}){const s=e.originalEvent.target,a=new CustomEvent(r,{bubbles:!1,cancelable:!0,detail:e});t&&s.addEventListener(r,t,{once:!0}),n?Xf(s,a):s.dispatchEvent(a)}var Js="focusScope.autoFocusOnMount",Qs="focusScope.autoFocusOnUnmount",Ul={bubbles:!1,cancelable:!0},td="FocusScope",jc=de((r,t)=>{const{loop:e=!1,trapped:n=!1,onMountAutoFocus:s,onUnmountAutoFocus:a,...o}=r,[l,u]=xe(null),c=vi(s),h=vi(a),f=re(null),d=Ti(t,g=>u(g)),m=re({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;ne(()=>{if(n){let g=function(S){if(m.paused||!l)return;const E=S.target;l.contains(E)?f.current=E:Yn(f.current,{select:!0})},x=function(S){if(m.paused||!l)return;const E=S.relatedTarget;E!==null&&(l.contains(E)||Yn(f.current,{select:!0}))},p=function(S){if(document.activeElement===document.body)for(const R of S)R.removedNodes.length>0&&Yn(l)};document.addEventListener("focusin",g),document.addEventListener("focusout",x);const T=new MutationObserver(p);return l&&T.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",x),T.disconnect()}}},[n,l,m.paused]),ne(()=>{if(l){kl.add(m);const g=document.activeElement;if(!l.contains(g)){const p=new CustomEvent(Js,Ul);l.addEventListener(Js,c),l.dispatchEvent(p),p.defaultPrevented||(ed(ad(Kc(l)),{select:!0}),document.activeElement===g&&Yn(l))}return()=>{l.removeEventListener(Js,c),setTimeout(()=>{const p=new CustomEvent(Qs,Ul);l.addEventListener(Qs,h),l.dispatchEvent(p),p.defaultPrevented||Yn(g??document.body,{select:!0}),l.removeEventListener(Qs,h),kl.remove(m)},0)}}},[l,c,h,m]);const _=Ue(g=>{if(!e&&!n||m.paused)return;const x=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,p=document.activeElement;if(x&&p){const T=g.currentTarget,[S,E]=nd(T);S&&E?!g.shiftKey&&p===E?(g.preventDefault(),e&&Yn(S,{select:!0})):g.shiftKey&&p===S&&(g.preventDefault(),e&&Yn(E,{select:!0})):p===T&&g.preventDefault()}},[e,n,m.paused]);return it(Un.div,{tabIndex:-1,...o,ref:d,onKeyDown:_})});jc.displayName=td;function ed(r,{select:t=!1}={}){const e=document.activeElement;for(const n of r)if(Yn(n,{select:t}),document.activeElement!==e)return}function nd(r){const t=Kc(r),e=Ol(t,r),n=Ol(t.reverse(),r);return[e,n]}function Kc(r){const t=[],e=document.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const s=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||s?NodeFilter.FILTER_SKIP:n.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;e.nextNode();)t.push(e.currentNode);return t}function Ol(r,t){for(const e of r)if(!id(e,{upTo:t}))return e}function id(r,{upTo:t}){if(getComputedStyle(r).visibility==="hidden")return!0;for(;r;){if(t!==void 0&&r===t)return!1;if(getComputedStyle(r).display==="none")return!0;r=r.parentElement}return!1}function rd(r){return r instanceof HTMLInputElement&&"select"in r}function Yn(r,{select:t=!1}={}){if(r&&r.focus){const e=document.activeElement;r.focus({preventScroll:!0}),r!==e&&rd(r)&&t&&r.select()}}var kl=sd();function sd(){let r=[];return{add(t){const e=r[0];t!==e&&(e==null||e.pause()),r=zl(r,t),r.unshift(t)},remove(t){var e;r=zl(r,t),(e=r[0])==null||e.resume()}}}function zl(r,t){const e=[...r],n=e.indexOf(t);return n!==-1&&e.splice(n,1),e}function ad(r){return r.filter(t=>t.tagName!=="A")}var od="Portal",Zc=de((r,t)=>{var l;const{container:e,...n}=r,[s,a]=xe(!1);Fs(()=>a(!0),[]);const o=e||s&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return o?Gc.createPortal(it(Un.div,{...n,ref:t}),o):null});Zc.displayName=od;function ld(r,t){return Hs((e,n)=>t[e][n]??e,r)}var Vs=r=>{const{present:t,children:e}=r,n=ud(t),s=typeof e=="function"?e({present:n.isPresent}):fn.only(e),a=Ti(n.ref,cd(s));return typeof e=="function"||n.isPresent?dr(s,{ref:a}):null};Vs.displayName="Presence";function ud(r){const[t,e]=xe(),n=re({}),s=re(r),a=re("none"),o=r?"mounted":"unmounted",[l,u]=ld(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return ne(()=>{const c=Xr(n.current);a.current=l==="mounted"?c:"none"},[l]),Fs(()=>{const c=n.current,h=s.current;if(h!==r){const d=a.current,m=Xr(c);r?u("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?u("UNMOUNT"):u(h&&d!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=r}},[r,u]),Fs(()=>{if(t){let c;const h=t.ownerDocument.defaultView??window,f=m=>{const g=Xr(n.current).includes(m.animationName);if(m.target===t&&g&&(u("ANIMATION_END"),!s.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",c=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},d=m=>{m.target===t&&(a.current=Xr(n.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{h.clearTimeout(c),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else u("ANIMATION_END")},[t,u]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:Ue(c=>{c&&(n.current=getComputedStyle(c)),e(c)},[])}}function Xr(r){return(r==null?void 0:r.animationName)||"none"}function cd(r){var n,s;let t=(n=Object.getOwnPropertyDescriptor(r.props,"ref"))==null?void 0:n.get,e=t&&"isReactWarning"in t&&t.isReactWarning;return e?r.ref:(t=(s=Object.getOwnPropertyDescriptor(r,"ref"))==null?void 0:s.get,e=t&&"isReactWarning"in t&&t.isReactWarning,e?r.props.ref:r.props.ref||r.ref)}var ta=0;function hd(){ne(()=>{const r=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",r[0]??Hl()),document.body.insertAdjacentElement("beforeend",r[1]??Hl()),ta++,()=>{ta===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),ta--}},[])}function Hl(){const r=document.createElement("span");return r.setAttribute("data-radix-focus-guard",""),r.tabIndex=0,r.style.outline="none",r.style.opacity="0",r.style.position="fixed",r.style.pointerEvents="none",r}var cn=function(){return cn=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++){e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},cn.apply(this,arguments)};function $c(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(e[n[s]]=r[n[s]]);return e}function fd(r,t,e){if(e||arguments.length===2)for(var n=0,s=t.length,a;n<s;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return r.concat(a||Array.prototype.slice.call(t))}var As="right-scroll-bar-position",Ts="width-before-scroll-bar",dd="with-scroll-bars-hidden",pd="--removed-body-scroll-bar-size";function ea(r,t){return typeof r=="function"?r(t):r&&(r.current=t),r}function md(r,t){var e=xe(function(){return{value:r,callback:t,facade:{get current(){return e.value},set current(n){var s=e.value;s!==n&&(e.value=n,e.callback(n,s))}}}})[0];return e.callback=t,e.facade}var xd=typeof window<"u"?Si:ne,Vl=new WeakMap;function gd(r,t){var e=md(null,function(n){return r.forEach(function(s){return ea(s,n)})});return xd(function(){var n=Vl.get(e);if(n){var s=new Set(n),a=new Set(r),o=e.current;s.forEach(function(l){a.has(l)||ea(l,null)}),a.forEach(function(l){s.has(l)||ea(l,o)})}Vl.set(e,r)},[r]),e}function _d(r){return r}function vd(r,t){t===void 0&&(t=_d);var e=[],n=!1,s={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return e.length?e[e.length-1]:r},useMedium:function(a){var o=t(a,n);return e.push(o),function(){e=e.filter(function(l){return l!==o})}},assignSyncMedium:function(a){for(n=!0;e.length;){var o=e;e=[],o.forEach(a)}e={push:function(l){return a(l)},filter:function(){return e}}},assignMedium:function(a){n=!0;var o=[];if(e.length){var l=e;e=[],l.forEach(a),o=e}var u=function(){var h=o;o=[],h.forEach(a)},c=function(){return Promise.resolve().then(u)};c(),e={push:function(h){o.push(h),c()},filter:function(h){return o=o.filter(h),e}}}};return s}function Ed(r){r===void 0&&(r={});var t=vd(null);return t.options=cn({async:!0,ssr:!1},r),t}var Jc=function(r){var t=r.sideCar,e=$c(r,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var n=t.read();if(!n)throw new Error("Sidecar medium not found");return ye(n,cn({},e))};Jc.isSideCarExport=!0;function yd(r,t){return r.useMedium(t),Jc}var Qc=Ed(),na=function(){},Gs=de(function(r,t){var e=re(null),n=xe({onScrollCapture:na,onWheelCapture:na,onTouchMoveCapture:na}),s=n[0],a=n[1],o=r.forwardProps,l=r.children,u=r.className,c=r.removeScrollBar,h=r.enabled,f=r.shards,d=r.sideCar,m=r.noIsolation,_=r.inert,g=r.allowPinchZoom,x=r.as,p=x===void 0?"div":x,T=r.gapMode,S=$c(r,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),E=d,R=gd([e,t]),w=cn(cn({},S),s);return ye($e,null,h&&ye(E,{sideCar:Qc,removeScrollBar:c,shards:f,noIsolation:m,inert:_,setCallbacks:a,allowPinchZoom:!!g,lockRef:e,gapMode:T}),o?dr(fn.only(l),cn(cn({},w),{ref:R})):ye(p,cn({},w,{className:u,ref:R}),l))});Gs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Gs.classNames={fullWidth:Ts,zeroRight:As};var Md=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function Sd(){if(!document)return null;var r=document.createElement("style");r.type="text/css";var t=Md();return t&&r.setAttribute("nonce",t),r}function Ad(r,t){r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}function Td(r){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(r)}var Cd=function(){var r=0,t=null;return{add:function(e){r==0&&(t=Sd())&&(Ad(t,e),Td(t)),r++},remove:function(){r--,!r&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},bd=function(){var r=Cd();return function(t,e){ne(function(){return r.add(t),function(){r.remove()}},[t&&e])}},th=function(){var r=bd(),t=function(e){var n=e.styles,s=e.dynamic;return r(n,s),null};return t},wd={left:0,top:0,right:0,gap:0},ia=function(r){return parseInt(r||"",10)||0},Rd=function(r){var t=window.getComputedStyle(document.body),e=t[r==="padding"?"paddingLeft":"marginLeft"],n=t[r==="padding"?"paddingTop":"marginTop"],s=t[r==="padding"?"paddingRight":"marginRight"];return[ia(e),ia(n),ia(s)]},Dd=function(r){if(r===void 0&&(r="margin"),typeof window>"u")return wd;var t=Rd(r),e=document.documentElement.clientWidth,n=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,n-e+t[2]-t[0])}},Pd=th(),Ki="data-scroll-locked",Bd=function(r,t,e,n){var s=r.left,a=r.top,o=r.right,l=r.gap;return e===void 0&&(e="margin"),`
  .`.concat(dd,` {
   overflow: hidden `).concat(n,`;
   padding-right: `).concat(l,"px ").concat(n,`;
  }
  body[`).concat(Ki,`] {
    overflow: hidden `).concat(n,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(n,";"),e==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(n,`;
    `),e==="padding"&&"padding-right: ".concat(l,"px ").concat(n,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(As,` {
    right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(Ts,` {
    margin-right: `).concat(l,"px ").concat(n,`;
  }
  
  .`).concat(As," .").concat(As,` {
    right: 0 `).concat(n,`;
  }
  
  .`).concat(Ts," .").concat(Ts,` {
    margin-right: 0 `).concat(n,`;
  }
  
  body[`).concat(Ki,`] {
    `).concat(pd,": ").concat(l,`px;
  }
`)},Gl=function(){var r=parseInt(document.body.getAttribute(Ki)||"0",10);return isFinite(r)?r:0},Ld=function(){ne(function(){return document.body.setAttribute(Ki,(Gl()+1).toString()),function(){var r=Gl()-1;r<=0?document.body.removeAttribute(Ki):document.body.setAttribute(Ki,r.toString())}},[])},Fd=function(r){var t=r.noRelative,e=r.noImportant,n=r.gapMode,s=n===void 0?"margin":n;Ld();var a=Ln(function(){return Dd(s)},[s]);return ye(Pd,{styles:Bd(a,!t,s,e?"":"!important")})},Ya=!1;if(typeof window<"u")try{var Yr=Object.defineProperty({},"passive",{get:function(){return Ya=!0,!0}});window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Ya=!1}var wi=Ya?{passive:!1}:!1,Id=function(r){return r.tagName==="TEXTAREA"},eh=function(r,t){if(!(r instanceof Element))return!1;var e=window.getComputedStyle(r);return e[t]!=="hidden"&&!(e.overflowY===e.overflowX&&!Id(r)&&e[t]==="visible")},Nd=function(r){return eh(r,"overflowY")},Ud=function(r){return eh(r,"overflowX")},Wl=function(r,t){var e=t.ownerDocument,n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var s=nh(r,n);if(s){var a=ih(r,n),o=a[1],l=a[2];if(o>l)return!0}n=n.parentNode}while(n&&n!==e.body);return!1},Od=function(r){var t=r.scrollTop,e=r.scrollHeight,n=r.clientHeight;return[t,e,n]},kd=function(r){var t=r.scrollLeft,e=r.scrollWidth,n=r.clientWidth;return[t,e,n]},nh=function(r,t){return r==="v"?Nd(t):Ud(t)},ih=function(r,t){return r==="v"?Od(t):kd(t)},zd=function(r,t){return r==="h"&&t==="rtl"?-1:1},Hd=function(r,t,e,n,s){var a=zd(r,window.getComputedStyle(t).direction),o=a*n,l=e.target,u=t.contains(l),c=!1,h=o>0,f=0,d=0;do{var m=ih(r,l),_=m[0],g=m[1],x=m[2],p=g-x-a*_;(_||p)&&nh(r,l)&&(f+=p,d+=_),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!u&&l!==document.body||u&&(t.contains(l)||t===l));return(h&&(Math.abs(f)<1||!s)||!h&&(Math.abs(d)<1||!s))&&(c=!0),c},qr=function(r){return"changedTouches"in r?[r.changedTouches[0].clientX,r.changedTouches[0].clientY]:[0,0]},Xl=function(r){return[r.deltaX,r.deltaY]},Yl=function(r){return r&&"current"in r?r.current:r},Vd=function(r,t){return r[0]===t[0]&&r[1]===t[1]},Gd=function(r){return`
  .block-interactivity-`.concat(r,` {pointer-events: none;}
  .allow-interactivity-`).concat(r,` {pointer-events: all;}
`)},Wd=0,Ri=[];function Xd(r){var t=re([]),e=re([0,0]),n=re(),s=xe(Wd++)[0],a=xe(th)[0],o=re(r);ne(function(){o.current=r},[r]),ne(function(){if(r.inert){document.body.classList.add("block-interactivity-".concat(s));var g=fd([r.lockRef.current],(r.shards||[]).map(Yl),!0).filter(Boolean);return g.forEach(function(x){return x.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),g.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(s))})}}},[r.inert,r.lockRef.current,r.shards]);var l=Ue(function(g,x){if("touches"in g&&g.touches.length===2||g.type==="wheel"&&g.ctrlKey)return!o.current.allowPinchZoom;var p=qr(g),T=e.current,S="deltaX"in g?g.deltaX:T[0]-p[0],E="deltaY"in g?g.deltaY:T[1]-p[1],R,w=g.target,b=Math.abs(S)>Math.abs(E)?"h":"v";if("touches"in g&&b==="h"&&w.type==="range")return!1;var I=Wl(b,w);if(!I)return!0;if(I?R=b:(R=b==="v"?"h":"v",I=Wl(b,w)),!I)return!1;if(!n.current&&"changedTouches"in g&&(S||E)&&(n.current=R),!R)return!0;var A=n.current||R;return Hd(A,x,g,A==="h"?S:E,!0)},[]),u=Ue(function(g){var x=g;if(!(!Ri.length||Ri[Ri.length-1]!==a)){var p="deltaY"in x?Xl(x):qr(x),T=t.current.filter(function(R){return R.name===x.type&&(R.target===x.target||x.target===R.shadowParent)&&Vd(R.delta,p)})[0];if(T&&T.should){x.cancelable&&x.preventDefault();return}if(!T){var S=(o.current.shards||[]).map(Yl).filter(Boolean).filter(function(R){return R.contains(x.target)}),E=S.length>0?l(x,S[0]):!o.current.noIsolation;E&&x.cancelable&&x.preventDefault()}}},[]),c=Ue(function(g,x,p,T){var S={name:g,delta:x,target:p,should:T,shadowParent:Yd(p)};t.current.push(S),setTimeout(function(){t.current=t.current.filter(function(E){return E!==S})},1)},[]),h=Ue(function(g){e.current=qr(g),n.current=void 0},[]),f=Ue(function(g){c(g.type,Xl(g),g.target,l(g,r.lockRef.current))},[]),d=Ue(function(g){c(g.type,qr(g),g.target,l(g,r.lockRef.current))},[]);ne(function(){return Ri.push(a),r.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:d}),document.addEventListener("wheel",u,wi),document.addEventListener("touchmove",u,wi),document.addEventListener("touchstart",h,wi),function(){Ri=Ri.filter(function(g){return g!==a}),document.removeEventListener("wheel",u,wi),document.removeEventListener("touchmove",u,wi),document.removeEventListener("touchstart",h,wi)}},[]);var m=r.removeScrollBar,_=r.inert;return ye($e,null,_?ye(a,{styles:Gd(s)}):null,m?ye(Fd,{gapMode:r.gapMode}):null)}function Yd(r){for(var t=null;r!==null;)r instanceof ShadowRoot&&(t=r.host,r=r.host),r=r.parentNode;return t}const qd=yd(Qc,Xd);var rh=de(function(r,t){return ye(Gs,cn({},r,{ref:t,sideCar:qd}))});rh.classNames=Gs.classNames;var jd=function(r){if(typeof document>"u")return null;var t=Array.isArray(r)?r[0]:r;return t.ownerDocument.body},Di=new WeakMap,jr=new WeakMap,Kr={},ra=0,sh=function(r){return r&&(r.host||sh(r.parentNode))},Kd=function(r,t){return t.map(function(e){if(r.contains(e))return e;var n=sh(e);return n&&r.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",r,". Doing nothing"),null)}).filter(function(e){return!!e})},Zd=function(r,t,e,n){var s=Kd(t,Array.isArray(r)?r:[r]);Kr[e]||(Kr[e]=new WeakMap);var a=Kr[e],o=[],l=new Set,u=new Set(s),c=function(f){!f||l.has(f)||(l.add(f),c(f.parentNode))};s.forEach(c);var h=function(f){!f||u.has(f)||Array.prototype.forEach.call(f.children,function(d){if(l.has(d))h(d);else try{var m=d.getAttribute(n),_=m!==null&&m!=="false",g=(Di.get(d)||0)+1,x=(a.get(d)||0)+1;Di.set(d,g),a.set(d,x),o.push(d),g===1&&_&&jr.set(d,!0),x===1&&d.setAttribute(e,"true"),_||d.setAttribute(n,"true")}catch(p){console.error("aria-hidden: cannot operate on ",d,p)}})};return h(t),l.clear(),ra++,function(){o.forEach(function(f){var d=Di.get(f)-1,m=a.get(f)-1;Di.set(f,d),a.set(f,m),d||(jr.has(f)||f.removeAttribute(n),jr.delete(f)),m||f.removeAttribute(e)}),ra--,ra||(Di=new WeakMap,Di=new WeakMap,jr=new WeakMap,Kr={})}},$d=function(r,t,e){e===void 0&&(e="data-aria-hidden");var n=Array.from(Array.isArray(r)?r:[r]),s=jd(r);return s?(n.push.apply(n,Array.from(s.querySelectorAll("[aria-live]"))),Zd(n,s,e,"aria-hidden")):function(){return null}},Ko="Dialog",[ah,Cy]=Ff(Ko),[Jd,ln]=ah(Ko),oh=r=>{const{__scopeDialog:t,children:e,open:n,defaultOpen:s,onOpenChange:a,modal:o=!0}=r,l=re(null),u=re(null),[c=!1,h]=Of({prop:n,defaultProp:s,onChange:a});return it(Jd,{scope:t,triggerRef:l,contentRef:u,contentId:$s(),titleId:$s(),descriptionId:$s(),open:c,onOpenChange:h,onOpenToggle:Ue(()=>h(f=>!f),[h]),modal:o,children:e})};oh.displayName=Ko;var lh="DialogTrigger",Qd=de((r,t)=>{const{__scopeDialog:e,...n}=r,s=ln(lh,e),a=Ti(t,s.triggerRef);return it(Un.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":Jo(s.open),...n,ref:a,onClick:Jn(r.onClick,s.onOpenToggle)})});Qd.displayName=lh;var Zo="DialogPortal",[tp,uh]=ah(Zo,{forceMount:void 0}),ch=r=>{const{__scopeDialog:t,forceMount:e,children:n,container:s}=r,a=ln(Zo,t);return it(tp,{scope:t,forceMount:e,children:fn.map(n,o=>it(Vs,{present:e||a.open,children:it(Zc,{asChild:!0,container:s,children:o})}))})};ch.displayName=Zo;var Is="DialogOverlay",hh=de((r,t)=>{const e=uh(Is,r.__scopeDialog),{forceMount:n=e.forceMount,...s}=r,a=ln(Is,r.__scopeDialog);return a.modal?it(Vs,{present:n||a.open,children:it(ep,{...s,ref:t})}):null});hh.displayName=Is;var ep=de((r,t)=>{const{__scopeDialog:e,...n}=r,s=ln(Is,e);return it(rh,{as:jo,allowPinchZoom:!0,shards:[s.contentRef],children:it(Un.div,{"data-state":Jo(s.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),Ei="DialogContent",fh=de((r,t)=>{const e=uh(Ei,r.__scopeDialog),{forceMount:n=e.forceMount,...s}=r,a=ln(Ei,r.__scopeDialog);return it(Vs,{present:n||a.open,children:a.modal?it(np,{...s,ref:t}):it(ip,{...s,ref:t})})});fh.displayName=Ei;var np=de((r,t)=>{const e=ln(Ei,r.__scopeDialog),n=re(null),s=Ti(t,e.contentRef,n);return ne(()=>{const a=n.current;if(a)return $d(a)},[]),it(dh,{...r,ref:s,trapFocus:e.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:Jn(r.onCloseAutoFocus,a=>{var o;a.preventDefault(),(o=e.triggerRef.current)==null||o.focus()}),onPointerDownOutside:Jn(r.onPointerDownOutside,a=>{const o=a.detail.originalEvent,l=o.button===0&&o.ctrlKey===!0;(o.button===2||l)&&a.preventDefault()}),onFocusOutside:Jn(r.onFocusOutside,a=>a.preventDefault())})}),ip=de((r,t)=>{const e=ln(Ei,r.__scopeDialog),n=re(!1),s=re(!1);return it(dh,{...r,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var o,l;(o=r.onCloseAutoFocus)==null||o.call(r,a),a.defaultPrevented||(n.current||(l=e.triggerRef.current)==null||l.focus(),a.preventDefault()),n.current=!1,s.current=!1},onInteractOutside:a=>{var u,c;(u=r.onInteractOutside)==null||u.call(r,a),a.defaultPrevented||(n.current=!0,a.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const o=a.target;((c=e.triggerRef.current)==null?void 0:c.contains(o))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&s.current&&a.preventDefault()}})}),dh=de((r,t)=>{const{__scopeDialog:e,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:a,...o}=r,l=ln(Ei,e),u=re(null),c=Ti(t,u);return hd(),it($e,{children:[it(jc,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:s,onUnmountAutoFocus:a,children:it(Yc,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":Jo(l.open),...o,ref:c,onDismiss:()=>l.onOpenChange(!1)})}),it($e,{children:[it(ap,{titleId:l.titleId}),it(lp,{contentRef:u,descriptionId:l.descriptionId})]})]})}),$o="DialogTitle",ph=de((r,t)=>{const{__scopeDialog:e,...n}=r,s=ln($o,e);return it(Un.h2,{id:s.titleId,...n,ref:t})});ph.displayName=$o;var mh="DialogDescription",rp=de((r,t)=>{const{__scopeDialog:e,...n}=r,s=ln(mh,e);return it(Un.p,{id:s.descriptionId,...n,ref:t})});rp.displayName=mh;var xh="DialogClose",sp=de((r,t)=>{const{__scopeDialog:e,...n}=r,s=ln(xh,e);return it(Un.button,{type:"button",...n,ref:t,onClick:Jn(r.onClick,()=>s.onOpenChange(!1))})});sp.displayName=xh;function Jo(r){return r?"open":"closed"}var gh="DialogTitleWarning",[by,_h]=Lf(gh,{contentName:Ei,titleName:$o,docsSlug:"dialog"}),ap=({titleId:r})=>{const t=_h(gh),e=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return ne(()=>{r&&(document.getElementById(r)||console.error(e))},[e,r]),null},op="DialogDescriptionWarning",lp=({contentRef:r,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${_h(op).contentName}}.`;return ne(()=>{var a;const s=(a=r.current)==null?void 0:a.getAttribute("aria-describedby");t&&s&&(document.getElementById(t)||console.warn(n))},[n,r,t]),null},up=oh,cp=ch,hp=hh,fp=fh,dp=ph;function pp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var sa={exports:{}},ql;function mp(){return ql||(ql=1,function(r){function t(){var e=0,n=1,s=2,a=3,o=4,l=5,u=6,c=7,h=8,f=9,d=10,m=11,_=12,g=13,x=14,p=15,T=16,S=17,E=0,R=1,w=2,b=3,I=4;function A(i,U){return 55296<=i.charCodeAt(U)&&i.charCodeAt(U)<=56319&&56320<=i.charCodeAt(U+1)&&i.charCodeAt(U+1)<=57343}function M(i,U){U===void 0&&(U=0);var W=i.charCodeAt(U);if(55296<=W&&W<=56319&&U<i.length-1){var O=W,Y=i.charCodeAt(U+1);return 56320<=Y&&Y<=57343?(O-55296)*1024+(Y-56320)+65536:O}if(56320<=W&&W<=57343&&U>=1){var O=i.charCodeAt(U-1),Y=W;return 55296<=O&&O<=56319?(O-55296)*1024+(Y-56320)+65536:Y}return W}function P(i,U,W){var O=[i].concat(U).concat([W]),Y=O[O.length-2],z=W,nt=O.lastIndexOf(x);if(nt>1&&O.slice(1,nt).every(function(Tt){return Tt==a})&&[a,g,S].indexOf(i)==-1)return w;var ct=O.lastIndexOf(o);if(ct>0&&O.slice(1,ct).every(function(Tt){return Tt==o})&&[_,o].indexOf(Y)==-1)return O.filter(function(Tt){return Tt==o}).length%2==1?b:I;if(Y==e&&z==n)return E;if(Y==s||Y==e||Y==n)return z==x&&U.every(function(Tt){return Tt==a})?w:R;if(z==s||z==e||z==n)return R;if(Y==u&&(z==u||z==c||z==f||z==d))return E;if((Y==f||Y==c)&&(z==c||z==h))return E;if((Y==d||Y==h)&&z==h)return E;if(z==a||z==p)return E;if(z==l)return E;if(Y==_)return E;var gt=O.indexOf(a)!=-1?O.lastIndexOf(a)-1:O.length-2;return[g,S].indexOf(O[gt])!=-1&&O.slice(gt+1,-1).every(function(Tt){return Tt==a})&&z==x||Y==p&&[T,S].indexOf(z)!=-1?E:U.indexOf(o)!=-1?w:Y==o&&z==o?E:R}this.nextBreak=function(i,U){if(U===void 0&&(U=0),U<0)return 0;if(U>=i.length-1)return i.length;for(var W=G(M(i,U)),O=[],Y=U+1;Y<i.length;Y++)if(!A(i,Y-1)){var z=G(M(i,Y));if(P(W,O,z))return Y;O.push(z)}return i.length},this.splitGraphemes=function(i){for(var U=[],W=0,O;(O=this.nextBreak(i,W))<i.length;)U.push(i.slice(W,O)),W=O;return W<i.length&&U.push(i.slice(W)),U},this.iterateGraphemes=function(i){var U=0,W={next:(function(){var O,Y;return(Y=this.nextBreak(i,U))<i.length?(O=i.slice(U,Y),U=Y,{value:O,done:!1}):U<i.length?(O=i.slice(U),U=i.length,{value:O,done:!1}):{value:void 0,done:!0}}).bind(this)};return typeof Symbol<"u"&&Symbol.iterator&&(W[Symbol.iterator]=function(){return W}),W},this.countGraphemes=function(i){for(var U=0,W=0,O;(O=this.nextBreak(i,W))<i.length;)W=O,U++;return W<i.length&&U++,U};function G(i){return 1536<=i&&i<=1541||i==1757||i==1807||i==2274||i==3406||i==69821||70082<=i&&i<=70083||i==72250||72326<=i&&i<=72329||i==73030?_:i==13?e:i==10?n:0<=i&&i<=9||11<=i&&i<=12||14<=i&&i<=31||127<=i&&i<=159||i==173||i==1564||i==6158||i==8203||8206<=i&&i<=8207||i==8232||i==8233||8234<=i&&i<=8238||8288<=i&&i<=8292||i==8293||8294<=i&&i<=8303||55296<=i&&i<=57343||i==65279||65520<=i&&i<=65528||65529<=i&&i<=65531||113824<=i&&i<=113827||119155<=i&&i<=119162||i==917504||i==917505||917506<=i&&i<=917535||917632<=i&&i<=917759||918e3<=i&&i<=921599?s:768<=i&&i<=879||1155<=i&&i<=1159||1160<=i&&i<=1161||1425<=i&&i<=1469||i==1471||1473<=i&&i<=1474||1476<=i&&i<=1477||i==1479||1552<=i&&i<=1562||1611<=i&&i<=1631||i==1648||1750<=i&&i<=1756||1759<=i&&i<=1764||1767<=i&&i<=1768||1770<=i&&i<=1773||i==1809||1840<=i&&i<=1866||1958<=i&&i<=1968||2027<=i&&i<=2035||2070<=i&&i<=2073||2075<=i&&i<=2083||2085<=i&&i<=2087||2089<=i&&i<=2093||2137<=i&&i<=2139||2260<=i&&i<=2273||2275<=i&&i<=2306||i==2362||i==2364||2369<=i&&i<=2376||i==2381||2385<=i&&i<=2391||2402<=i&&i<=2403||i==2433||i==2492||i==2494||2497<=i&&i<=2500||i==2509||i==2519||2530<=i&&i<=2531||2561<=i&&i<=2562||i==2620||2625<=i&&i<=2626||2631<=i&&i<=2632||2635<=i&&i<=2637||i==2641||2672<=i&&i<=2673||i==2677||2689<=i&&i<=2690||i==2748||2753<=i&&i<=2757||2759<=i&&i<=2760||i==2765||2786<=i&&i<=2787||2810<=i&&i<=2815||i==2817||i==2876||i==2878||i==2879||2881<=i&&i<=2884||i==2893||i==2902||i==2903||2914<=i&&i<=2915||i==2946||i==3006||i==3008||i==3021||i==3031||i==3072||3134<=i&&i<=3136||3142<=i&&i<=3144||3146<=i&&i<=3149||3157<=i&&i<=3158||3170<=i&&i<=3171||i==3201||i==3260||i==3263||i==3266||i==3270||3276<=i&&i<=3277||3285<=i&&i<=3286||3298<=i&&i<=3299||3328<=i&&i<=3329||3387<=i&&i<=3388||i==3390||3393<=i&&i<=3396||i==3405||i==3415||3426<=i&&i<=3427||i==3530||i==3535||3538<=i&&i<=3540||i==3542||i==3551||i==3633||3636<=i&&i<=3642||3655<=i&&i<=3662||i==3761||3764<=i&&i<=3769||3771<=i&&i<=3772||3784<=i&&i<=3789||3864<=i&&i<=3865||i==3893||i==3895||i==3897||3953<=i&&i<=3966||3968<=i&&i<=3972||3974<=i&&i<=3975||3981<=i&&i<=3991||3993<=i&&i<=4028||i==4038||4141<=i&&i<=4144||4146<=i&&i<=4151||4153<=i&&i<=4154||4157<=i&&i<=4158||4184<=i&&i<=4185||4190<=i&&i<=4192||4209<=i&&i<=4212||i==4226||4229<=i&&i<=4230||i==4237||i==4253||4957<=i&&i<=4959||5906<=i&&i<=5908||5938<=i&&i<=5940||5970<=i&&i<=5971||6002<=i&&i<=6003||6068<=i&&i<=6069||6071<=i&&i<=6077||i==6086||6089<=i&&i<=6099||i==6109||6155<=i&&i<=6157||6277<=i&&i<=6278||i==6313||6432<=i&&i<=6434||6439<=i&&i<=6440||i==6450||6457<=i&&i<=6459||6679<=i&&i<=6680||i==6683||i==6742||6744<=i&&i<=6750||i==6752||i==6754||6757<=i&&i<=6764||6771<=i&&i<=6780||i==6783||6832<=i&&i<=6845||i==6846||6912<=i&&i<=6915||i==6964||6966<=i&&i<=6970||i==6972||i==6978||7019<=i&&i<=7027||7040<=i&&i<=7041||7074<=i&&i<=7077||7080<=i&&i<=7081||7083<=i&&i<=7085||i==7142||7144<=i&&i<=7145||i==7149||7151<=i&&i<=7153||7212<=i&&i<=7219||7222<=i&&i<=7223||7376<=i&&i<=7378||7380<=i&&i<=7392||7394<=i&&i<=7400||i==7405||i==7412||7416<=i&&i<=7417||7616<=i&&i<=7673||7675<=i&&i<=7679||i==8204||8400<=i&&i<=8412||8413<=i&&i<=8416||i==8417||8418<=i&&i<=8420||8421<=i&&i<=8432||11503<=i&&i<=11505||i==11647||11744<=i&&i<=11775||12330<=i&&i<=12333||12334<=i&&i<=12335||12441<=i&&i<=12442||i==42607||42608<=i&&i<=42610||42612<=i&&i<=42621||42654<=i&&i<=42655||42736<=i&&i<=42737||i==43010||i==43014||i==43019||43045<=i&&i<=43046||43204<=i&&i<=43205||43232<=i&&i<=43249||43302<=i&&i<=43309||43335<=i&&i<=43345||43392<=i&&i<=43394||i==43443||43446<=i&&i<=43449||i==43452||i==43493||43561<=i&&i<=43566||43569<=i&&i<=43570||43573<=i&&i<=43574||i==43587||i==43596||i==43644||i==43696||43698<=i&&i<=43700||43703<=i&&i<=43704||43710<=i&&i<=43711||i==43713||43756<=i&&i<=43757||i==43766||i==44005||i==44008||i==44013||i==64286||65024<=i&&i<=65039||65056<=i&&i<=65071||65438<=i&&i<=65439||i==66045||i==66272||66422<=i&&i<=66426||68097<=i&&i<=68099||68101<=i&&i<=68102||68108<=i&&i<=68111||68152<=i&&i<=68154||i==68159||68325<=i&&i<=68326||i==69633||69688<=i&&i<=69702||69759<=i&&i<=69761||69811<=i&&i<=69814||69817<=i&&i<=69818||69888<=i&&i<=69890||69927<=i&&i<=69931||69933<=i&&i<=69940||i==70003||70016<=i&&i<=70017||70070<=i&&i<=70078||70090<=i&&i<=70092||70191<=i&&i<=70193||i==70196||70198<=i&&i<=70199||i==70206||i==70367||70371<=i&&i<=70378||70400<=i&&i<=70401||i==70460||i==70462||i==70464||i==70487||70502<=i&&i<=70508||70512<=i&&i<=70516||70712<=i&&i<=70719||70722<=i&&i<=70724||i==70726||i==70832||70835<=i&&i<=70840||i==70842||i==70845||70847<=i&&i<=70848||70850<=i&&i<=70851||i==71087||71090<=i&&i<=71093||71100<=i&&i<=71101||71103<=i&&i<=71104||71132<=i&&i<=71133||71219<=i&&i<=71226||i==71229||71231<=i&&i<=71232||i==71339||i==71341||71344<=i&&i<=71349||i==71351||71453<=i&&i<=71455||71458<=i&&i<=71461||71463<=i&&i<=71467||72193<=i&&i<=72198||72201<=i&&i<=72202||72243<=i&&i<=72248||72251<=i&&i<=72254||i==72263||72273<=i&&i<=72278||72281<=i&&i<=72283||72330<=i&&i<=72342||72344<=i&&i<=72345||72752<=i&&i<=72758||72760<=i&&i<=72765||i==72767||72850<=i&&i<=72871||72874<=i&&i<=72880||72882<=i&&i<=72883||72885<=i&&i<=72886||73009<=i&&i<=73014||i==73018||73020<=i&&i<=73021||73023<=i&&i<=73029||i==73031||92912<=i&&i<=92916||92976<=i&&i<=92982||94095<=i&&i<=94098||113821<=i&&i<=113822||i==119141||119143<=i&&i<=119145||119150<=i&&i<=119154||119163<=i&&i<=119170||119173<=i&&i<=119179||119210<=i&&i<=119213||119362<=i&&i<=119364||121344<=i&&i<=121398||121403<=i&&i<=121452||i==121461||i==121476||121499<=i&&i<=121503||121505<=i&&i<=121519||122880<=i&&i<=122886||122888<=i&&i<=122904||122907<=i&&i<=122913||122915<=i&&i<=122916||122918<=i&&i<=122922||125136<=i&&i<=125142||125252<=i&&i<=125258||917536<=i&&i<=917631||917760<=i&&i<=917999?a:127462<=i&&i<=127487?o:i==2307||i==2363||2366<=i&&i<=2368||2377<=i&&i<=2380||2382<=i&&i<=2383||2434<=i&&i<=2435||2495<=i&&i<=2496||2503<=i&&i<=2504||2507<=i&&i<=2508||i==2563||2622<=i&&i<=2624||i==2691||2750<=i&&i<=2752||i==2761||2763<=i&&i<=2764||2818<=i&&i<=2819||i==2880||2887<=i&&i<=2888||2891<=i&&i<=2892||i==3007||3009<=i&&i<=3010||3014<=i&&i<=3016||3018<=i&&i<=3020||3073<=i&&i<=3075||3137<=i&&i<=3140||3202<=i&&i<=3203||i==3262||3264<=i&&i<=3265||3267<=i&&i<=3268||3271<=i&&i<=3272||3274<=i&&i<=3275||3330<=i&&i<=3331||3391<=i&&i<=3392||3398<=i&&i<=3400||3402<=i&&i<=3404||3458<=i&&i<=3459||3536<=i&&i<=3537||3544<=i&&i<=3550||3570<=i&&i<=3571||i==3635||i==3763||3902<=i&&i<=3903||i==3967||i==4145||4155<=i&&i<=4156||4182<=i&&i<=4183||i==4228||i==6070||6078<=i&&i<=6085||6087<=i&&i<=6088||6435<=i&&i<=6438||6441<=i&&i<=6443||6448<=i&&i<=6449||6451<=i&&i<=6456||6681<=i&&i<=6682||i==6741||i==6743||6765<=i&&i<=6770||i==6916||i==6965||i==6971||6973<=i&&i<=6977||6979<=i&&i<=6980||i==7042||i==7073||7078<=i&&i<=7079||i==7082||i==7143||7146<=i&&i<=7148||i==7150||7154<=i&&i<=7155||7204<=i&&i<=7211||7220<=i&&i<=7221||i==7393||7410<=i&&i<=7411||i==7415||43043<=i&&i<=43044||i==43047||43136<=i&&i<=43137||43188<=i&&i<=43203||43346<=i&&i<=43347||i==43395||43444<=i&&i<=43445||43450<=i&&i<=43451||43453<=i&&i<=43456||43567<=i&&i<=43568||43571<=i&&i<=43572||i==43597||i==43755||43758<=i&&i<=43759||i==43765||44003<=i&&i<=44004||44006<=i&&i<=44007||44009<=i&&i<=44010||i==44012||i==69632||i==69634||i==69762||69808<=i&&i<=69810||69815<=i&&i<=69816||i==69932||i==70018||70067<=i&&i<=70069||70079<=i&&i<=70080||70188<=i&&i<=70190||70194<=i&&i<=70195||i==70197||70368<=i&&i<=70370||70402<=i&&i<=70403||i==70463||70465<=i&&i<=70468||70471<=i&&i<=70472||70475<=i&&i<=70477||70498<=i&&i<=70499||70709<=i&&i<=70711||70720<=i&&i<=70721||i==70725||70833<=i&&i<=70834||i==70841||70843<=i&&i<=70844||i==70846||i==70849||71088<=i&&i<=71089||71096<=i&&i<=71099||i==71102||71216<=i&&i<=71218||71227<=i&&i<=71228||i==71230||i==71340||71342<=i&&i<=71343||i==71350||71456<=i&&i<=71457||i==71462||72199<=i&&i<=72200||i==72249||72279<=i&&i<=72280||i==72343||i==72751||i==72766||i==72873||i==72881||i==72884||94033<=i&&i<=94078||i==119142||i==119149?l:4352<=i&&i<=4447||43360<=i&&i<=43388?u:4448<=i&&i<=4519||55216<=i&&i<=55238?c:4520<=i&&i<=4607||55243<=i&&i<=55291?h:i==44032||i==44060||i==44088||i==44116||i==44144||i==44172||i==44200||i==44228||i==44256||i==44284||i==44312||i==44340||i==44368||i==44396||i==44424||i==44452||i==44480||i==44508||i==44536||i==44564||i==44592||i==44620||i==44648||i==44676||i==44704||i==44732||i==44760||i==44788||i==44816||i==44844||i==44872||i==44900||i==44928||i==44956||i==44984||i==45012||i==45040||i==45068||i==45096||i==45124||i==45152||i==45180||i==45208||i==45236||i==45264||i==45292||i==45320||i==45348||i==45376||i==45404||i==45432||i==45460||i==45488||i==45516||i==45544||i==45572||i==45600||i==45628||i==45656||i==45684||i==45712||i==45740||i==45768||i==45796||i==45824||i==45852||i==45880||i==45908||i==45936||i==45964||i==45992||i==46020||i==46048||i==46076||i==46104||i==46132||i==46160||i==46188||i==46216||i==46244||i==46272||i==46300||i==46328||i==46356||i==46384||i==46412||i==46440||i==46468||i==46496||i==46524||i==46552||i==46580||i==46608||i==46636||i==46664||i==46692||i==46720||i==46748||i==46776||i==46804||i==46832||i==46860||i==46888||i==46916||i==46944||i==46972||i==47e3||i==47028||i==47056||i==47084||i==47112||i==47140||i==47168||i==47196||i==47224||i==47252||i==47280||i==47308||i==47336||i==47364||i==47392||i==47420||i==47448||i==47476||i==47504||i==47532||i==47560||i==47588||i==47616||i==47644||i==47672||i==47700||i==47728||i==47756||i==47784||i==47812||i==47840||i==47868||i==47896||i==47924||i==47952||i==47980||i==48008||i==48036||i==48064||i==48092||i==48120||i==48148||i==48176||i==48204||i==48232||i==48260||i==48288||i==48316||i==48344||i==48372||i==48400||i==48428||i==48456||i==48484||i==48512||i==48540||i==48568||i==48596||i==48624||i==48652||i==48680||i==48708||i==48736||i==48764||i==48792||i==48820||i==48848||i==48876||i==48904||i==48932||i==48960||i==48988||i==49016||i==49044||i==49072||i==49100||i==49128||i==49156||i==49184||i==49212||i==49240||i==49268||i==49296||i==49324||i==49352||i==49380||i==49408||i==49436||i==49464||i==49492||i==49520||i==49548||i==49576||i==49604||i==49632||i==49660||i==49688||i==49716||i==49744||i==49772||i==49800||i==49828||i==49856||i==49884||i==49912||i==49940||i==49968||i==49996||i==50024||i==50052||i==50080||i==50108||i==50136||i==50164||i==50192||i==50220||i==50248||i==50276||i==50304||i==50332||i==50360||i==50388||i==50416||i==50444||i==50472||i==50500||i==50528||i==50556||i==50584||i==50612||i==50640||i==50668||i==50696||i==50724||i==50752||i==50780||i==50808||i==50836||i==50864||i==50892||i==50920||i==50948||i==50976||i==51004||i==51032||i==51060||i==51088||i==51116||i==51144||i==51172||i==51200||i==51228||i==51256||i==51284||i==51312||i==51340||i==51368||i==51396||i==51424||i==51452||i==51480||i==51508||i==51536||i==51564||i==51592||i==51620||i==51648||i==51676||i==51704||i==51732||i==51760||i==51788||i==51816||i==51844||i==51872||i==51900||i==51928||i==51956||i==51984||i==52012||i==52040||i==52068||i==52096||i==52124||i==52152||i==52180||i==52208||i==52236||i==52264||i==52292||i==52320||i==52348||i==52376||i==52404||i==52432||i==52460||i==52488||i==52516||i==52544||i==52572||i==52600||i==52628||i==52656||i==52684||i==52712||i==52740||i==52768||i==52796||i==52824||i==52852||i==52880||i==52908||i==52936||i==52964||i==52992||i==53020||i==53048||i==53076||i==53104||i==53132||i==53160||i==53188||i==53216||i==53244||i==53272||i==53300||i==53328||i==53356||i==53384||i==53412||i==53440||i==53468||i==53496||i==53524||i==53552||i==53580||i==53608||i==53636||i==53664||i==53692||i==53720||i==53748||i==53776||i==53804||i==53832||i==53860||i==53888||i==53916||i==53944||i==53972||i==54e3||i==54028||i==54056||i==54084||i==54112||i==54140||i==54168||i==54196||i==54224||i==54252||i==54280||i==54308||i==54336||i==54364||i==54392||i==54420||i==54448||i==54476||i==54504||i==54532||i==54560||i==54588||i==54616||i==54644||i==54672||i==54700||i==54728||i==54756||i==54784||i==54812||i==54840||i==54868||i==54896||i==54924||i==54952||i==54980||i==55008||i==55036||i==55064||i==55092||i==55120||i==55148||i==55176?f:44033<=i&&i<=44059||44061<=i&&i<=44087||44089<=i&&i<=44115||44117<=i&&i<=44143||44145<=i&&i<=44171||44173<=i&&i<=44199||44201<=i&&i<=44227||44229<=i&&i<=44255||44257<=i&&i<=44283||44285<=i&&i<=44311||44313<=i&&i<=44339||44341<=i&&i<=44367||44369<=i&&i<=44395||44397<=i&&i<=44423||44425<=i&&i<=44451||44453<=i&&i<=44479||44481<=i&&i<=44507||44509<=i&&i<=44535||44537<=i&&i<=44563||44565<=i&&i<=44591||44593<=i&&i<=44619||44621<=i&&i<=44647||44649<=i&&i<=44675||44677<=i&&i<=44703||44705<=i&&i<=44731||44733<=i&&i<=44759||44761<=i&&i<=44787||44789<=i&&i<=44815||44817<=i&&i<=44843||44845<=i&&i<=44871||44873<=i&&i<=44899||44901<=i&&i<=44927||44929<=i&&i<=44955||44957<=i&&i<=44983||44985<=i&&i<=45011||45013<=i&&i<=45039||45041<=i&&i<=45067||45069<=i&&i<=45095||45097<=i&&i<=45123||45125<=i&&i<=45151||45153<=i&&i<=45179||45181<=i&&i<=45207||45209<=i&&i<=45235||45237<=i&&i<=45263||45265<=i&&i<=45291||45293<=i&&i<=45319||45321<=i&&i<=45347||45349<=i&&i<=45375||45377<=i&&i<=45403||45405<=i&&i<=45431||45433<=i&&i<=45459||45461<=i&&i<=45487||45489<=i&&i<=45515||45517<=i&&i<=45543||45545<=i&&i<=45571||45573<=i&&i<=45599||45601<=i&&i<=45627||45629<=i&&i<=45655||45657<=i&&i<=45683||45685<=i&&i<=45711||45713<=i&&i<=45739||45741<=i&&i<=45767||45769<=i&&i<=45795||45797<=i&&i<=45823||45825<=i&&i<=45851||45853<=i&&i<=45879||45881<=i&&i<=45907||45909<=i&&i<=45935||45937<=i&&i<=45963||45965<=i&&i<=45991||45993<=i&&i<=46019||46021<=i&&i<=46047||46049<=i&&i<=46075||46077<=i&&i<=46103||46105<=i&&i<=46131||46133<=i&&i<=46159||46161<=i&&i<=46187||46189<=i&&i<=46215||46217<=i&&i<=46243||46245<=i&&i<=46271||46273<=i&&i<=46299||46301<=i&&i<=46327||46329<=i&&i<=46355||46357<=i&&i<=46383||46385<=i&&i<=46411||46413<=i&&i<=46439||46441<=i&&i<=46467||46469<=i&&i<=46495||46497<=i&&i<=46523||46525<=i&&i<=46551||46553<=i&&i<=46579||46581<=i&&i<=46607||46609<=i&&i<=46635||46637<=i&&i<=46663||46665<=i&&i<=46691||46693<=i&&i<=46719||46721<=i&&i<=46747||46749<=i&&i<=46775||46777<=i&&i<=46803||46805<=i&&i<=46831||46833<=i&&i<=46859||46861<=i&&i<=46887||46889<=i&&i<=46915||46917<=i&&i<=46943||46945<=i&&i<=46971||46973<=i&&i<=46999||47001<=i&&i<=47027||47029<=i&&i<=47055||47057<=i&&i<=47083||47085<=i&&i<=47111||47113<=i&&i<=47139||47141<=i&&i<=47167||47169<=i&&i<=47195||47197<=i&&i<=47223||47225<=i&&i<=47251||47253<=i&&i<=47279||47281<=i&&i<=47307||47309<=i&&i<=47335||47337<=i&&i<=47363||47365<=i&&i<=47391||47393<=i&&i<=47419||47421<=i&&i<=47447||47449<=i&&i<=47475||47477<=i&&i<=47503||47505<=i&&i<=47531||47533<=i&&i<=47559||47561<=i&&i<=47587||47589<=i&&i<=47615||47617<=i&&i<=47643||47645<=i&&i<=47671||47673<=i&&i<=47699||47701<=i&&i<=47727||47729<=i&&i<=47755||47757<=i&&i<=47783||47785<=i&&i<=47811||47813<=i&&i<=47839||47841<=i&&i<=47867||47869<=i&&i<=47895||47897<=i&&i<=47923||47925<=i&&i<=47951||47953<=i&&i<=47979||47981<=i&&i<=48007||48009<=i&&i<=48035||48037<=i&&i<=48063||48065<=i&&i<=48091||48093<=i&&i<=48119||48121<=i&&i<=48147||48149<=i&&i<=48175||48177<=i&&i<=48203||48205<=i&&i<=48231||48233<=i&&i<=48259||48261<=i&&i<=48287||48289<=i&&i<=48315||48317<=i&&i<=48343||48345<=i&&i<=48371||48373<=i&&i<=48399||48401<=i&&i<=48427||48429<=i&&i<=48455||48457<=i&&i<=48483||48485<=i&&i<=48511||48513<=i&&i<=48539||48541<=i&&i<=48567||48569<=i&&i<=48595||48597<=i&&i<=48623||48625<=i&&i<=48651||48653<=i&&i<=48679||48681<=i&&i<=48707||48709<=i&&i<=48735||48737<=i&&i<=48763||48765<=i&&i<=48791||48793<=i&&i<=48819||48821<=i&&i<=48847||48849<=i&&i<=48875||48877<=i&&i<=48903||48905<=i&&i<=48931||48933<=i&&i<=48959||48961<=i&&i<=48987||48989<=i&&i<=49015||49017<=i&&i<=49043||49045<=i&&i<=49071||49073<=i&&i<=49099||49101<=i&&i<=49127||49129<=i&&i<=49155||49157<=i&&i<=49183||49185<=i&&i<=49211||49213<=i&&i<=49239||49241<=i&&i<=49267||49269<=i&&i<=49295||49297<=i&&i<=49323||49325<=i&&i<=49351||49353<=i&&i<=49379||49381<=i&&i<=49407||49409<=i&&i<=49435||49437<=i&&i<=49463||49465<=i&&i<=49491||49493<=i&&i<=49519||49521<=i&&i<=49547||49549<=i&&i<=49575||49577<=i&&i<=49603||49605<=i&&i<=49631||49633<=i&&i<=49659||49661<=i&&i<=49687||49689<=i&&i<=49715||49717<=i&&i<=49743||49745<=i&&i<=49771||49773<=i&&i<=49799||49801<=i&&i<=49827||49829<=i&&i<=49855||49857<=i&&i<=49883||49885<=i&&i<=49911||49913<=i&&i<=49939||49941<=i&&i<=49967||49969<=i&&i<=49995||49997<=i&&i<=50023||50025<=i&&i<=50051||50053<=i&&i<=50079||50081<=i&&i<=50107||50109<=i&&i<=50135||50137<=i&&i<=50163||50165<=i&&i<=50191||50193<=i&&i<=50219||50221<=i&&i<=50247||50249<=i&&i<=50275||50277<=i&&i<=50303||50305<=i&&i<=50331||50333<=i&&i<=50359||50361<=i&&i<=50387||50389<=i&&i<=50415||50417<=i&&i<=50443||50445<=i&&i<=50471||50473<=i&&i<=50499||50501<=i&&i<=50527||50529<=i&&i<=50555||50557<=i&&i<=50583||50585<=i&&i<=50611||50613<=i&&i<=50639||50641<=i&&i<=50667||50669<=i&&i<=50695||50697<=i&&i<=50723||50725<=i&&i<=50751||50753<=i&&i<=50779||50781<=i&&i<=50807||50809<=i&&i<=50835||50837<=i&&i<=50863||50865<=i&&i<=50891||50893<=i&&i<=50919||50921<=i&&i<=50947||50949<=i&&i<=50975||50977<=i&&i<=51003||51005<=i&&i<=51031||51033<=i&&i<=51059||51061<=i&&i<=51087||51089<=i&&i<=51115||51117<=i&&i<=51143||51145<=i&&i<=51171||51173<=i&&i<=51199||51201<=i&&i<=51227||51229<=i&&i<=51255||51257<=i&&i<=51283||51285<=i&&i<=51311||51313<=i&&i<=51339||51341<=i&&i<=51367||51369<=i&&i<=51395||51397<=i&&i<=51423||51425<=i&&i<=51451||51453<=i&&i<=51479||51481<=i&&i<=51507||51509<=i&&i<=51535||51537<=i&&i<=51563||51565<=i&&i<=51591||51593<=i&&i<=51619||51621<=i&&i<=51647||51649<=i&&i<=51675||51677<=i&&i<=51703||51705<=i&&i<=51731||51733<=i&&i<=51759||51761<=i&&i<=51787||51789<=i&&i<=51815||51817<=i&&i<=51843||51845<=i&&i<=51871||51873<=i&&i<=51899||51901<=i&&i<=51927||51929<=i&&i<=51955||51957<=i&&i<=51983||51985<=i&&i<=52011||52013<=i&&i<=52039||52041<=i&&i<=52067||52069<=i&&i<=52095||52097<=i&&i<=52123||52125<=i&&i<=52151||52153<=i&&i<=52179||52181<=i&&i<=52207||52209<=i&&i<=52235||52237<=i&&i<=52263||52265<=i&&i<=52291||52293<=i&&i<=52319||52321<=i&&i<=52347||52349<=i&&i<=52375||52377<=i&&i<=52403||52405<=i&&i<=52431||52433<=i&&i<=52459||52461<=i&&i<=52487||52489<=i&&i<=52515||52517<=i&&i<=52543||52545<=i&&i<=52571||52573<=i&&i<=52599||52601<=i&&i<=52627||52629<=i&&i<=52655||52657<=i&&i<=52683||52685<=i&&i<=52711||52713<=i&&i<=52739||52741<=i&&i<=52767||52769<=i&&i<=52795||52797<=i&&i<=52823||52825<=i&&i<=52851||52853<=i&&i<=52879||52881<=i&&i<=52907||52909<=i&&i<=52935||52937<=i&&i<=52963||52965<=i&&i<=52991||52993<=i&&i<=53019||53021<=i&&i<=53047||53049<=i&&i<=53075||53077<=i&&i<=53103||53105<=i&&i<=53131||53133<=i&&i<=53159||53161<=i&&i<=53187||53189<=i&&i<=53215||53217<=i&&i<=53243||53245<=i&&i<=53271||53273<=i&&i<=53299||53301<=i&&i<=53327||53329<=i&&i<=53355||53357<=i&&i<=53383||53385<=i&&i<=53411||53413<=i&&i<=53439||53441<=i&&i<=53467||53469<=i&&i<=53495||53497<=i&&i<=53523||53525<=i&&i<=53551||53553<=i&&i<=53579||53581<=i&&i<=53607||53609<=i&&i<=53635||53637<=i&&i<=53663||53665<=i&&i<=53691||53693<=i&&i<=53719||53721<=i&&i<=53747||53749<=i&&i<=53775||53777<=i&&i<=53803||53805<=i&&i<=53831||53833<=i&&i<=53859||53861<=i&&i<=53887||53889<=i&&i<=53915||53917<=i&&i<=53943||53945<=i&&i<=53971||53973<=i&&i<=53999||54001<=i&&i<=54027||54029<=i&&i<=54055||54057<=i&&i<=54083||54085<=i&&i<=54111||54113<=i&&i<=54139||54141<=i&&i<=54167||54169<=i&&i<=54195||54197<=i&&i<=54223||54225<=i&&i<=54251||54253<=i&&i<=54279||54281<=i&&i<=54307||54309<=i&&i<=54335||54337<=i&&i<=54363||54365<=i&&i<=54391||54393<=i&&i<=54419||54421<=i&&i<=54447||54449<=i&&i<=54475||54477<=i&&i<=54503||54505<=i&&i<=54531||54533<=i&&i<=54559||54561<=i&&i<=54587||54589<=i&&i<=54615||54617<=i&&i<=54643||54645<=i&&i<=54671||54673<=i&&i<=54699||54701<=i&&i<=54727||54729<=i&&i<=54755||54757<=i&&i<=54783||54785<=i&&i<=54811||54813<=i&&i<=54839||54841<=i&&i<=54867||54869<=i&&i<=54895||54897<=i&&i<=54923||54925<=i&&i<=54951||54953<=i&&i<=54979||54981<=i&&i<=55007||55009<=i&&i<=55035||55037<=i&&i<=55063||55065<=i&&i<=55091||55093<=i&&i<=55119||55121<=i&&i<=55147||55149<=i&&i<=55175||55177<=i&&i<=55203?d:i==9757||i==9977||9994<=i&&i<=9997||i==127877||127938<=i&&i<=127940||i==127943||127946<=i&&i<=127948||128066<=i&&i<=128067||128070<=i&&i<=128080||i==128110||128112<=i&&i<=128120||i==128124||128129<=i&&i<=128131||128133<=i&&i<=128135||i==128170||128372<=i&&i<=128373||i==128378||i==128400||128405<=i&&i<=128406||128581<=i&&i<=128583||128587<=i&&i<=128591||i==128675||128692<=i&&i<=128694||i==128704||i==128716||129304<=i&&i<=129308||129310<=i&&i<=129311||i==129318||129328<=i&&i<=129337||129341<=i&&i<=129342||129489<=i&&i<=129501?g:127995<=i&&i<=127999?x:i==8205?p:i==9792||i==9794||9877<=i&&i<=9878||i==9992||i==10084||i==127752||i==127806||i==127859||i==127891||i==127908||i==127912||i==127979||i==127981||i==128139||128187<=i&&i<=128188||i==128295||i==128300||i==128488||i==128640||i==128658?T:128102<=i&&i<=128105?S:m}return this}r.exports&&(r.exports=t)}(sa)),sa.exports}var xp=mp();const jl=pp(xp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="174",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gp=0,Kl=1,_p=2,vh=1,vp=2,bn=3,In=0,Oe=1,hn=2,Qn=0,$i=1,Zl=2,$l=3,Jl=4,Ep=5,di=100,yp=101,Mp=102,Sp=103,Ap=104,Tp=200,Cp=201,bp=202,wp=203,qa=204,ja=205,Rp=206,Dp=207,Pp=208,Bp=209,Lp=210,Fp=211,Ip=212,Np=213,Up=214,Ka=0,Za=1,$a=2,nr=3,Ja=4,Qa=5,to=6,eo=7,Eh=0,Op=1,kp=2,ti=0,zp=1,Hp=2,Vp=3,Gp=4,Wp=5,Xp=6,Yp=7,Ql="attached",qp="detached",yh=300,ir=301,rr=302,no=303,io=304,Ws=306,sr=1e3,Kn=1001,Ns=1002,Be=1003,Mh=1004,wr=1005,Ge=1006,Cs=1007,Rn=1008,Nn=1009,Sh=1010,Ah=1011,Ir=1012,tl=1013,yi=1014,an=1015,kr=1016,el=1017,nl=1018,ar=1020,Th=35902,Ch=1021,bh=1022,Ze=1023,wh=1024,Rh=1025,Ji=1026,or=1027,il=1028,rl=1029,Dh=1030,sl=1031,al=1033,bs=33776,ws=33777,Rs=33778,Ds=33779,ro=35840,so=35841,ao=35842,oo=35843,lo=36196,uo=37492,co=37496,ho=37808,fo=37809,po=37810,mo=37811,xo=37812,go=37813,_o=37814,vo=37815,Eo=37816,yo=37817,Mo=37818,So=37819,Ao=37820,To=37821,Ps=36492,Co=36494,bo=36495,Ph=36283,wo=36284,Ro=36285,Do=36286,Nr=2300,Ur=2301,aa=2302,tu=2400,eu=2401,nu=2402,jp=2500,Kp=0,Bh=1,Po=2,Zp=3200,$p=3201,Lh=0,Jp=1,jn="",Ae="srgb",Fe="srgb-linear",Us="linear",te="srgb",Pi=7680,iu=519,Qp=512,tm=513,em=514,Fh=515,nm=516,im=517,rm=518,sm=519,Bo=35044,ru="300 es",Dn=2e3,Os=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let su=1234567;const Pr=Math.PI/180,lr=180/Math.PI;function on(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ut(r,t,e){return Math.max(t,Math.min(e,r))}function ol(r,t){return(r%t+t)%t}function am(r,t,e,n,s){return n+(r-t)*(s-n)/(e-t)}function om(r,t,e){return r!==t?(e-r)/(t-r):0}function Br(r,t,e){return(1-e)*r+e*t}function lm(r,t,e,n){return Br(r,t,1-Math.exp(-e*n))}function um(r,t=1){return t-Math.abs(ol(r,t*2)-t)}function cm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function hm(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function fm(r,t){return r+Math.floor(Math.random()*(t-r+1))}function dm(r,t){return r+Math.random()*(t-r)}function pm(r){return r*(.5-Math.random())}function mm(r){r!==void 0&&(su=r);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xm(r){return r*Pr}function gm(r){return r*lr}function _m(r){return(r&r-1)===0&&r!==0}function vm(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Em(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ym(r,t,e,n,s){const a=Math.cos,o=Math.sin,l=a(e/2),u=o(e/2),c=a((t+n)/2),h=o((t+n)/2),f=a((t-n)/2),d=o((t-n)/2),m=a((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":r.set(l*h,u*f,u*d,l*c);break;case"YZY":r.set(u*d,l*h,u*f,l*c);break;case"ZXZ":r.set(u*f,u*d,l*h,l*c);break;case"XZX":r.set(l*h,u*_,u*m,l*c);break;case"YXY":r.set(u*m,l*h,u*_,l*c);break;case"ZYZ":r.set(u*_,u*m,l*h,l*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ih={DEG2RAD:Pr,RAD2DEG:lr,generateUUID:on,clamp:Ut,euclideanModulo:ol,mapLinear:am,inverseLerp:om,lerp:Br,damp:lm,pingpong:um,smoothstep:cm,smootherstep:hm,randInt:fm,randFloat:dm,randFloatSpread:pm,seededRandom:mm,degToRad:xm,radToDeg:gm,isPowerOfTwo:_m,ceilPowerOfTwo:vm,floorPowerOfTwo:Em,setQuaternionFromProperEuler:ym,normalize:Jt,denormalize:rn};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,s,a,o,l,u,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,u,c)}set(t,e,n,s,a,o,l,u,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=a,h[5]=u,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[3],u=n[6],c=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],g=s[0],x=s[3],p=s[6],T=s[1],S=s[4],E=s[7],R=s[2],w=s[5],b=s[8];return a[0]=o*g+l*T+u*R,a[3]=o*x+l*S+u*w,a[6]=o*p+l*E+u*b,a[1]=c*g+h*T+f*R,a[4]=c*x+h*S+f*w,a[7]=c*p+h*E+f*b,a[2]=d*g+m*T+_*R,a[5]=d*x+m*S+_*w,a[8]=d*p+m*E+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],u=t[6],c=t[7],h=t[8];return e*o*h-e*l*c-n*a*h+n*l*u+s*a*c-s*o*u}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=h*o-l*c,d=l*u-h*a,m=c*a-o*u,_=e*f+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(s*c-h*n)*g,t[2]=(l*n-s*o)*g,t[3]=d*g,t[4]=(h*e-s*u)*g,t[5]=(s*a-l*e)*g,t[6]=m*g,t[7]=(n*u-c*e)*g,t[8]=(o*e-n*a)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,l){const u=Math.cos(a),c=Math.sin(a);return this.set(n*u,n*c,-n*(u*o+c*l)+o+t,-s*c,s*u,-s*(-c*o+u*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(oa.makeScale(t,e)),this}rotate(t){return this.premultiply(oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new Lt;function Nh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mm(){const r=Or("canvas");return r.style.display="block",r}const au={};function hi(r){r in au||(au[r]=!0,console.warn(r))}function Sm(r,t,e){return new Promise(function(n,s){function a(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Am(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tm(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ou=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cm(){const r={enabled:!0,workingColorSpace:Fe,spaces:{},convert:function(s,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===te&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Us:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,o){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fe]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:te,toXYZ:ou,fromXYZ:lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),r}const Gt=Cm();function Pn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Bi;class bm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Or("canvas")),Bi.width=t.width,Bi.height=t.height;const n=Bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Pn(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pn(e[n]/255)*255):e[n]=Pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wm=0;class ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=on(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(la(s[o].image)):a.push(la(s[o]))}else a=la(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function la(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rm=0;class Me extends Ci{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Kn,s=Kn,a=Ge,o=Rn,l=Ze,u=Nn,c=Me.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=on(),this.name="",this.source=new ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Ns:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Ns:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=yh;Me.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,s=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const u=t.elements,c=u[0],h=u[4],f=u[8],d=u[1],m=u[5],_=u[9],g=u[2],x=u[6],p=u[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+x)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,E=(m+1)/2,R=(p+1)/2,w=(h+d)/4,b=(f+g)/4,I=(_+x)/4;return S>E&&S>R?S<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(S),s=w/n,a=b/n):E>R?E<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(E),n=w/s,a=I/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=b/a,s=I/a),this.set(n,s,a,e),this}let T=Math.sqrt((x-_)*(x-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(x-_)/T,this.y=(f-g)/T,this.z=(d-h)/T,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this.w=Ut(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this.w=Ut(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dm extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Me(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ll(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Dm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends Me{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,l){let u=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const d=a[o+0],m=a[o+1],_=a[o+2],g=a[o+3];if(l===0){t[e+0]=u,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(l===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(f!==g||u!==d||c!==m||h!==_){let x=1-l;const p=u*d+c*m+h*_+f*g,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const R=Math.sqrt(S),w=Math.atan2(R,p*T);x=Math.sin(x*w)/R,l=Math.sin(l*w)/R}const E=l*T;if(u=u*x+d*E,c=c*x+m*E,h=h*x+_*E,f=f*x+g*E,x===1-l){const R=1/Math.sqrt(u*u+c*c+h*h+f*f);u*=R,c*=R,h*=R,f*=R}}t[e]=u,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,a,o){const l=n[s],u=n[s+1],c=n[s+2],h=n[s+3],f=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return t[e]=l*_+h*f+u*m-c*d,t[e+1]=u*_+h*d+c*f-l*m,t[e+2]=c*_+h*m+l*d-u*f,t[e+3]=h*_-l*f-u*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,l=Math.cos,u=Math.sin,c=l(n/2),h=l(s/2),f=l(a/2),d=u(n/2),m=u(s/2),_=u(a/2);switch(o){case"XYZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f+d*m*_;break;case"YZX":this._x=d*h*f+c*m*_,this._y=c*m*f+d*h*_,this._z=c*h*_-d*m*f,this._w=c*h*f-d*m*_;break;case"XZY":this._x=d*h*f-c*m*_,this._y=c*m*f-d*h*_,this._z=c*h*_+d*m*f,this._w=c*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],l=e[5],u=e[9],c=e[2],h=e[6],f=e[10],d=n+l+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-u)*m,this._y=(a-c)*m,this._z=(o-s)*m}else if(n>l&&n>f){const m=2*Math.sqrt(1+n-l-f);this._w=(h-u)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(a+c)/m}else if(l>f){const m=2*Math.sqrt(1+l-n-f);this._w=(a-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(u+h)/m}else{const m=2*Math.sqrt(1+f-n-l);this._w=(o-s)/m,this._x=(a+c)/m,this._y=(u+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ut(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,l=e._x,u=e._y,c=e._z,h=e._w;return this._x=n*h+o*l+s*c-a*u,this._y=s*h+o*u+a*l-n*c,this._z=a*h+o*c+n*u-s*l,this._w=o*h-n*l-s*u-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let l=o*t._w+n*t._x+s*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const u=1-l*l;if(u<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*a+e*this._z,this.normalize(),this}const c=Math.sqrt(u),h=Math.atan2(c,l),f=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,l=t.z,u=t.w,c=2*(o*s-l*n),h=2*(l*e-a*s),f=2*(a*n-o*e);return this.x=e+u*c+o*f-l*h,this.y=n+u*h+l*c-a*f,this.z=s+u*f+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ut(this.x,t.x,e.x),this.y=Ut(this.y,t.y,e.y),this.z=Ut(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ut(this.x,t,e),this.y=Ut(this.y,t,e),this.z=Ut(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,l=e.y,u=e.z;return this.x=s*u-a*l,this.y=a*o-n*u,this.z=n*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ua.copy(this).projectOnVector(t),this.sub(ua)}reflect(t){return this.sub(ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ut(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new B,uu=new pn;class On{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(a,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zr.copy(n.boundingBox)),Zr.applyMatrix4(t.matrixWorld),this.union(Zr)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vr),$r.subVectors(this.max,vr),Li.subVectors(t.a,vr),Fi.subVectors(t.b,vr),Ii.subVectors(t.c,vr),kn.subVectors(Fi,Li),zn.subVectors(Ii,Fi),ri.subVectors(Li,Ii);let e=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!ca(e,Li,Fi,Ii,$r)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,Li,Fi,Ii,$r))?!1:(Jr.crossVectors(kn,zn),e=[Jr.x,Jr.y,Jr.z],ca(e,Li,Fi,Ii,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new B,new B,new B,new B,new B,new B,new B,new B],tn=new B,Zr=new On,Li=new B,Fi=new B,Ii=new B,kn=new B,zn=new B,ri=new B,vr=new B,$r=new B,Jr=new B,si=new B;function ca(r,t,e,n,s){for(let a=0,o=r.length-3;a<=o;a+=3){si.fromArray(r,a);const l=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),u=t.dot(si),c=e.dot(si),h=n.dot(si);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>l)return!1}return!0}const Bm=new On,Er=new B,ha=new B;class xn{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bm.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Er,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(ha)),this.expandByPoint(Er.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new B,fa=new B,Qr=new B,Hn=new B,da=new B,ts=new B,pa=new B;class zr{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fa.copy(t).add(e).multiplyScalar(.5),Qr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(fa);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Qr),l=Hn.dot(this.direction),u=-Hn.dot(Qr),c=Hn.lengthSq(),h=Math.abs(1-o*o);let f,d,m,_;if(h>0)if(f=o*u-l,d=o*l-u,_=a*h,f>=0)if(d>=-_)if(d<=_){const g=1/h;f*=g,d*=g,m=f*(f+o*d+2*l)+d*(o*f+d+2*u)+c}else d=a,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*u)+c;else d=-a,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*u)+c;else d<=-_?(f=Math.max(0,-(-o*a+l)),d=f>0?-a:Math.min(Math.max(-a,-u),a),m=-f*f+d*(d+2*u)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-u),a),m=d*(d+2*u)+c):(f=Math.max(0,-(o*a+l)),d=f>0?a:Math.min(Math.max(-a,-u),a),m=-f*f+d*(d+2*u)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+l)),m=-f*f+d*(d+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fa).addScaledVector(Qr,d),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,l,u;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),f>=0?(l=(t.min.z-d.z)*f,u=(t.max.z-d.z)*f):(l=(t.max.z-d.z)*f,u=(t.min.z-d.z)*f),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,a){da.subVectors(e,t),ts.subVectors(n,t),pa.crossVectors(da,ts);let o=this.direction.dot(pa),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const u=l*this.direction.dot(ts.crossVectors(Hn,ts));if(u<0)return null;const c=l*this.direction.dot(da.cross(Hn));if(c<0||u+c>o)return null;const h=-l*Hn.dot(pa);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,n,s,a,o,l,u,c,h,f,d,m,_,g,x){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,u,c,h,f,d,m,_,g,x)}set(t,e,n,s,a,o,l,u,c,h,f,d,m,_,g,x){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=o,p[9]=l,p[13]=u,p[2]=c,p[6]=h,p[10]=f,p[14]=d,p[3]=m,p[7]=_,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),a=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(s),c=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(t.order==="XYZ"){const d=o*h,m=o*f,_=l*h,g=l*f;e[0]=u*h,e[4]=-u*f,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-l*u,e[2]=g-d*c,e[6]=_+m*c,e[10]=o*u}else if(t.order==="YXZ"){const d=u*h,m=u*f,_=c*h,g=c*f;e[0]=d+g*l,e[4]=_*l-m,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-l,e[2]=m*l-_,e[6]=g+d*l,e[10]=o*u}else if(t.order==="ZXY"){const d=u*h,m=u*f,_=c*h,g=c*f;e[0]=d-g*l,e[4]=-o*f,e[8]=_+m*l,e[1]=m+_*l,e[5]=o*h,e[9]=g-d*l,e[2]=-o*c,e[6]=l,e[10]=o*u}else if(t.order==="ZYX"){const d=o*h,m=o*f,_=l*h,g=l*f;e[0]=u*h,e[4]=_*c-m,e[8]=d*c+g,e[1]=u*f,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=l*u,e[10]=o*u}else if(t.order==="YZX"){const d=o*u,m=o*c,_=l*u,g=l*c;e[0]=u*h,e[4]=g-d*f,e[8]=_*f+m,e[1]=f,e[5]=o*h,e[9]=-l*h,e[2]=-c*h,e[6]=m*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=o*u,m=o*c,_=l*u,g=l*c;e[0]=u*h,e[4]=-f,e[8]=c*h,e[1]=d*f+g,e[5]=o*h,e[9]=m*f-_,e[2]=_*f-m,e[6]=l*h,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lm,t,Fm)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Vn.crossVectors(n,He),Vn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Vn.crossVectors(n,He)),Vn.normalize(),es.crossVectors(He,Vn),s[0]=Vn.x,s[4]=es.x,s[8]=He.x,s[1]=Vn.y,s[5]=es.y,s[9]=He.y,s[2]=Vn.z,s[6]=es.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[4],u=n[8],c=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],g=n[6],x=n[10],p=n[14],T=n[3],S=n[7],E=n[11],R=n[15],w=s[0],b=s[4],I=s[8],A=s[12],M=s[1],P=s[5],G=s[9],i=s[13],U=s[2],W=s[6],O=s[10],Y=s[14],z=s[3],nt=s[7],ct=s[11],gt=s[15];return a[0]=o*w+l*M+u*U+c*z,a[4]=o*b+l*P+u*W+c*nt,a[8]=o*I+l*G+u*O+c*ct,a[12]=o*A+l*i+u*Y+c*gt,a[1]=h*w+f*M+d*U+m*z,a[5]=h*b+f*P+d*W+m*nt,a[9]=h*I+f*G+d*O+m*ct,a[13]=h*A+f*i+d*Y+m*gt,a[2]=_*w+g*M+x*U+p*z,a[6]=_*b+g*P+x*W+p*nt,a[10]=_*I+g*G+x*O+p*ct,a[14]=_*A+g*i+x*Y+p*gt,a[3]=T*w+S*M+E*U+R*z,a[7]=T*b+S*P+E*W+R*nt,a[11]=T*I+S*G+E*O+R*ct,a[15]=T*A+S*i+E*Y+R*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],l=t[5],u=t[9],c=t[13],h=t[2],f=t[6],d=t[10],m=t[14],_=t[3],g=t[7],x=t[11],p=t[15];return _*(+a*u*f-s*c*f-a*l*d+n*c*d+s*l*m-n*u*m)+g*(+e*u*m-e*c*d+a*o*d-s*o*m+s*c*h-a*u*h)+x*(+e*c*f-e*l*m-a*o*f+n*o*m+a*l*h-n*c*h)+p*(-s*l*h-e*u*f+e*l*d+s*o*f-n*o*d+n*u*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],u=t[6],c=t[7],h=t[8],f=t[9],d=t[10],m=t[11],_=t[12],g=t[13],x=t[14],p=t[15],T=f*x*c-g*d*c+g*u*m-l*x*m-f*u*p+l*d*p,S=_*d*c-h*x*c-_*u*m+o*x*m+h*u*p-o*d*p,E=h*g*c-_*f*c+_*l*m-o*g*m-h*l*p+o*f*p,R=_*f*u-h*g*u-_*l*d+o*g*d+h*l*x-o*f*x,w=e*T+n*S+s*E+a*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return t[0]=T*b,t[1]=(g*d*a-f*x*a-g*s*m+n*x*m+f*s*p-n*d*p)*b,t[2]=(l*x*a-g*u*a+g*s*c-n*x*c-l*s*p+n*u*p)*b,t[3]=(f*u*a-l*d*a-f*s*c+n*d*c+l*s*m-n*u*m)*b,t[4]=S*b,t[5]=(h*x*a-_*d*a+_*s*m-e*x*m-h*s*p+e*d*p)*b,t[6]=(_*u*a-o*x*a-_*s*c+e*x*c+o*s*p-e*u*p)*b,t[7]=(o*d*a-h*u*a+h*s*c-e*d*c-o*s*m+e*u*m)*b,t[8]=E*b,t[9]=(_*f*a-h*g*a-_*n*m+e*g*m+h*n*p-e*f*p)*b,t[10]=(o*g*a-_*l*a+_*n*c-e*g*c-o*n*p+e*l*p)*b,t[11]=(h*l*a-o*f*a-h*n*c+e*f*c+o*n*m-e*l*m)*b,t[12]=R*b,t[13]=(h*g*s-_*f*s+_*n*d-e*g*d-h*n*x+e*f*x)*b,t[14]=(_*l*s-o*g*s-_*n*u+e*g*u+o*n*x-e*l*x)*b,t[15]=(o*f*s-h*l*s+h*n*u-e*f*u-o*n*d+e*l*d)*b,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,l=t.y,u=t.z,c=a*o,h=a*l;return this.set(c*o+n,c*l-s*u,c*u+s*l,0,c*l+s*u,h*l+n,h*u-s*o,0,c*u-s*l,h*u+s*o,a*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,l=e._z,u=e._w,c=a+a,h=o+o,f=l+l,d=a*c,m=a*h,_=a*f,g=o*h,x=o*f,p=l*f,T=u*c,S=u*h,E=u*f,R=n.x,w=n.y,b=n.z;return s[0]=(1-(g+p))*R,s[1]=(m+E)*R,s[2]=(_-S)*R,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(d+p))*w,s[6]=(x+T)*w,s[7]=0,s[8]=(_+S)*b,s[9]=(x-T)*b,s[10]=(1-(d+g))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),l=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const c=1/a,h=1/o,f=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=f,en.elements[9]*=f,en.elements[10]*=f,e.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,a,o,l=Dn){const u=this.elements,c=2*a/(e-t),h=2*a/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(l===Dn)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(l===Os)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=d,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,s,a,o,l=Dn){const u=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-a),d=(e+t)*c,m=(n+s)*h;let _,g;if(l===Dn)_=(o+a)*f,g=-2*f;else if(l===Os)_=a*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*c,u[4]=0,u[8]=0,u[12]=-d,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=g,u[14]=-_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new B,en=new Ft,Lm=new B(0,0,0),Fm=new B(1,1,1),Vn=new B,es=new B,He=new B,cu=new Ft,hu=new pn;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],l=s[8],u=s[1],c=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Im=0;const fu=new B,Ui=new pn,Sn=new Ft,ns=new B,yr=new B,Nm=new B,Um=new pn,du=new B(1,0,0),pu=new B(0,1,0),mu=new B(0,0,1),xu={type:"added"},Om={type:"removed"},Oi={type:"childadded",child:null},ma={type:"childremoved",child:null};class ue extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Im++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new B,e=new mn,n=new pn,s=new B(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Lt}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(yr,ns,this.up):Sn.lookAt(ns,yr,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xu),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Om),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xu),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,t,Nm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,Um,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const f=u[c];a(t.shapes,f)}else a(t.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,c=this.material.length;u<c;u++)l.push(a(t.materials,this.material[u]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];s.animations.push(a(t.animations,u))}}if(e){const l=o(t.geometries),u=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(l){const u=[];for(const c in l){const h=l[c];delete h.metadata,u.push(h)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ue.DEFAULT_UP=new B(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new B,An=new B,xa=new B,Tn=new B,ki=new B,zi=new B,gu=new B,ga=new B,_a=new B,va=new B,Ea=new jt,ya=new jt,Ma=new jt;class sn{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){nn.subVectors(s,e),An.subVectors(n,e),xa.subVectors(t,e);const o=nn.dot(nn),l=nn.dot(An),u=nn.dot(xa),c=An.dot(An),h=An.dot(xa),f=o*c-l*l;if(f===0)return a.set(0,0,0),null;const d=1/f,m=(c*u-l*h)*d,_=(o*h-l*u)*d;return a.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,a,o,l,u){return this.getBarycoord(t,e,n,s,Tn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Tn.x),u.addScaledVector(o,Tn.y),u.addScaledVector(l,Tn.z),u)}static getInterpolatedAttribute(t,e,n,s,a,o){return Ea.setScalar(0),ya.setScalar(0),Ma.setScalar(0),Ea.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ma.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ea,a.x),o.addScaledVector(ya,a.y),o.addScaledVector(Ma,a.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),An.subVectors(t,e),nn.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),nn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,l;ki.subVectors(s,n),zi.subVectors(a,n),ga.subVectors(t,n);const u=ki.dot(ga),c=zi.dot(ga);if(u<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);const h=ki.dot(_a),f=zi.dot(_a);if(h>=0&&f<=h)return e.copy(s);const d=u*f-h*c;if(d<=0&&u>=0&&h<=0)return o=u/(u-h),e.copy(n).addScaledVector(ki,o);va.subVectors(t,a);const m=ki.dot(va),_=zi.dot(va);if(_>=0&&m<=_)return e.copy(a);const g=m*c-u*_;if(g<=0&&c>=0&&_<=0)return l=c/(c-_),e.copy(n).addScaledVector(zi,l);const x=h*_-m*f;if(x<=0&&f-h>=0&&m-_>=0)return gu.subVectors(a,s),l=(f-h)/(f-h+(m-_)),e.copy(s).addScaledVector(gu,l);const p=1/(x+g+d);return o=g*p,l=d*p,e.copy(n).addScaledVector(ki,o).addScaledVector(zi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},is={h:0,s:0,l:0};function Sa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=ol(t,1),e=Ut(e,0,1),n=Ut(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Sa(o,a,t+1/3),this.g=Sa(o,a,t),this.b=Sa(o,a,t-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ae){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pn(t.r),this.g=Pn(t.g),this.b=Pn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Gt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ut(be.r*255,0,255))*65536+Math.round(Ut(be.g*255,0,255))*256+Math.round(Ut(be.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,a=be.b,o=Math.max(n,s,a),l=Math.min(n,s,a);let u,c;const h=(l+o)/2;if(l===o)u=0,c=0;else{const f=o-l;switch(c=h<=.5?f/(o+l):f/(2-o-l),o){case n:u=(s-a)/f+(s<a?6:0);break;case s:u=(a-n)/f+2;break;case a:u=(n-s)/f+4;break}u/=6}return t.h=u,t.s=c,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=Ae){Gt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(is);const n=Br(Gn.h,is.h,e),s=Br(Gn.s,is.s,e),a=Br(Gn.l,is.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new At;At.NAMES=kh;let km=0;class dn extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=on(),this.name="",this.type="Material",this.blending=$i,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=ja,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const l in a){const u=a[l];delete u.metadata,o.push(u)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mi extends dn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new B,rs=new Dt;let zm=0;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),a=Jt(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bo&&(t.usage=this.usage),t}}class zh extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hh extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bn extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hm=0;const je=new Ft,Aa=new ue,Hi=new B,Ve=new On,Mr=new On,Ee=new B;class gn extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Hh:zh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Lt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return Aa.lookAt(t),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Ve.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const l=e[a];Mr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ee.addVectors(Ve.min,Mr.min),Ve.expandByPoint(Ee),Ee.addVectors(Ve.max,Mr.max),Ve.expandByPoint(Ee)):(Ve.expandByPoint(Mr.min),Ve.expandByPoint(Mr.max))}Ve.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)Ee.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let a=0,o=e.length;a<o;a++){const l=e[a],u=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)Ee.fromBufferAttribute(l,c),u&&(Hi.fromBufferAttribute(t,c),Ee.add(Hi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let I=0;I<n.count;I++)l[I]=new B,u[I]=new B;const c=new B,h=new B,f=new B,d=new Dt,m=new Dt,_=new Dt,g=new B,x=new B;function p(I,A,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,M),d.fromBufferAttribute(a,I),m.fromBufferAttribute(a,A),_.fromBufferAttribute(a,M),h.sub(c),f.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(P),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(P),l[I].add(g),l[A].add(g),l[M].add(g),u[I].add(x),u[A].add(x),u[M].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let I=0,A=T.length;I<A;++I){const M=T[I],P=M.start,G=M.count;for(let i=P,U=P+G;i<U;i+=3)p(t.getX(i+0),t.getX(i+1),t.getX(i+2))}const S=new B,E=new B,R=new B,w=new B;function b(I){R.fromBufferAttribute(s,I),w.copy(R);const A=l[I];S.copy(A),S.sub(R.multiplyScalar(R.dot(A))).normalize(),E.crossVectors(w,A);const P=E.dot(u[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,P)}for(let I=0,A=T.length;I<A;++I){const M=T[I],P=M.start,G=M.count;for(let i=P,U=P+G;i<U;i+=3)b(t.getX(i+0)),b(t.getX(i+1)),b(t.getX(i+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new B,a=new B,o=new B,l=new B,u=new B,c=new B,h=new B,f=new B;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),h.subVectors(o,a),f.subVectors(s,a),h.cross(f),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.add(h),u.add(h),c.add(h),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,a),f.subVectors(s,a),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(l,u){const c=l.array,h=l.itemSize,f=l.normalized,d=new c.constructor(u.length*h);let m=0,_=0;for(let g=0,x=u.length;g<x;g++){l.isInterleavedBufferAttribute?m=u[g]*l.data.stride+l.offset:m=u[g]*h;for(let p=0;p<h;p++)d[_++]=c[m++]}return new Le(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new gn,n=this.index.array,s=this.attributes;for(const l in s){const u=s[l],c=t(u,n);e.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const u=[],c=a[l];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=t(d,n);u.push(m)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const c=n[u];t.data.attributes[u]=c.toJSON(t.data)}const s={};let a=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(t.data))}h.length>0&&(s[u]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],f=a[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new Ft,ai=new zr,ss=new xn,vu=new B,as=new B,os=new B,ls=new B,Ta=new B,us=new B,Eu=new B,cs=new B;class We extends ue{constructor(t=new gn,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(a&&l){us.set(0,0,0);for(let u=0,c=a.length;u<c;u++){const h=l[u],f=a[u];h!==0&&(Ta.fromBufferAttribute(f,t),o?us.addScaledVector(Ta,h):us.addScaledVector(Ta.sub(e),h))}e.add(us)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(a),ai.copy(t.ray).recast(t.near),!(ss.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ss,vu)===null||ai.origin.distanceToSquared(vu)>(t.far-t.near)**2))&&(_u.copy(a).invert(),ai.copy(t.ray).applyMatrix4(_u),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,l=a.index,u=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,d=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const x=d[_],p=o[x.materialIndex],T=Math.max(x.start,m.start),S=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let E=T,R=S;E<R;E+=3){const w=l.getX(E),b=l.getX(E+1),I=l.getX(E+2);s=hs(this,p,t,n,c,h,f,w,b,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let x=_,p=g;x<p;x+=3){const T=l.getX(x),S=l.getX(x+1),E=l.getX(x+2);s=hs(this,o,t,n,c,h,f,T,S,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const x=d[_],p=o[x.materialIndex],T=Math.max(x.start,m.start),S=Math.min(u.count,Math.min(x.start+x.count,m.start+m.count));for(let E=T,R=S;E<R;E+=3){const w=E,b=E+1,I=E+2;s=hs(this,p,t,n,c,h,f,w,b,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(u.count,m.start+m.count);for(let x=_,p=g;x<p;x+=3){const T=x,S=x+1,E=x+2;s=hs(this,o,t,n,c,h,f,T,S,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function Vm(r,t,e,n,s,a,o,l){let u;if(t.side===Oe?u=n.intersectTriangle(o,a,s,!0,l):u=n.intersectTriangle(s,a,o,t.side===In,l),u===null)return null;cs.copy(l),cs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:r}}function hs(r,t,e,n,s,a,o,l,u,c){r.getVertexPosition(l,as),r.getVertexPosition(u,os),r.getVertexPosition(c,ls);const h=Vm(r,t,e,n,as,os,ls,Eu);if(h){const f=new B;sn.getBarycoord(Eu,as,os,ls,f),s&&(h.uv=sn.getInterpolatedAttribute(s,l,u,c,f,new Dt)),a&&(h.uv1=sn.getInterpolatedAttribute(a,l,u,c,f,new Dt)),o&&(h.normal=sn.getInterpolatedAttribute(o,l,u,c,f,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:l,b:u,c,normal:new B,materialIndex:0};sn.getNormal(as,os,ls,d.normal),h.face=d,h.barycoord=f}return h}class Hr extends gn{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const u=[],c=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,e,t,o,a,0),_("z","y","x",1,-1,n,e,-t,o,a,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,a,4),_("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(u),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(f,2));function _(g,x,p,T,S,E,R,w,b,I,A){const M=E/b,P=R/I,G=E/2,i=R/2,U=w/2,W=b+1,O=I+1;let Y=0,z=0;const nt=new B;for(let ct=0;ct<O;ct++){const gt=ct*P-i;for(let Tt=0;Tt<W;Tt++){const ie=Tt*M-G;nt[g]=ie*T,nt[x]=gt*S,nt[p]=U,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[x]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),f.push(Tt/b),f.push(1-ct/I),Y+=1}}for(let ct=0;ct<I;ct++)for(let gt=0;gt<b;gt++){const Tt=d+gt+W*ct,ie=d+gt+W*(ct+1),j=d+(gt+1)+W*(ct+1),tt=d+(gt+1)+W*ct;u.push(Tt,ie,tt),u.push(ie,j,tt),z+=6}l.addGroup(m,z,A),m+=z,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const s=r[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=ur(r[e]);for(const s in n)t[s]=n[s]}return t}function Gm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const Wm={clone:ur,merge:De};var Xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends dn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xm,this.fragmentShader=Ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new B,yu=new Dt,Mu=new Dt;class Pe extends Gh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,yu,Mu),e.subVectors(Mu,yu)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/u,e-=o.offsetY*n/c,s*=o.width/u,n*=o.height/c}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Gi=1;class qm extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pe(Vi,Gi,t,e);s.layers=this.layers,this.add(s);const a=new Pe(Vi,Gi,t,e);a.layers=this.layers,this.add(a);const o=new Pe(Vi,Gi,t,e);o.layers=this.layers,this.add(o);const l=new Pe(Vi,Gi,t,e);l.layers=this.layers,this.add(l);const u=new Pe(Vi,Gi,t,e);u.layers=this.layers,this.add(u);const c=new Pe(Vi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,l,u]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,u,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,u),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wh extends Me{constructor(t,e,n,s,a,o,l,u,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,n,s,a,o,l,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jm extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hr(5,5,5),a=new ei({name:"CubemapFromEquirect",uniforms:ur(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Qn});a.uniforms.tEquirect.value=e;const o=new We(s,a),l=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Ge),new qm(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}class xi extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Km={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const l=this._targetRay,u=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const x=e.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zm extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $m{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bo,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Re=new B;class ul{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),a=Jt(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ul(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Su=new B,Au=new jt,Tu=new jt,Jm=new B,Cu=new Ft,fs=new B,ba=new xn,bu=new Ft,wa=new zr;class Qm extends We{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ql,this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fs),this.boundingBox.expandByPoint(fs)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fs),this.boundingSphere.expandByPoint(fs)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ba.copy(this.boundingSphere),ba.applyMatrix4(s),t.ray.intersectsSphere(ba)!==!1&&(bu.copy(s).invert(),wa.copy(t.ray).applyMatrix4(bu),!(this.boundingBox!==null&&wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new jt,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const a=1/t.manhattanLength();a!==1/0?t.multiplyScalar(a):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ql?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;Au.fromBufferAttribute(s.attributes.skinIndex,t),Tu.fromBufferAttribute(s.attributes.skinWeight,t),Su.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let a=0;a<4;a++){const o=Tu.getComponent(a);if(o!==0){const l=Au.getComponent(a);Cu.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),e.addScaledVector(Jm.copy(Su).applyMatrix4(Cu),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Xh extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yh extends Me{constructor(t=null,e=1,n=1,s,a,o,l,u,c=Be,h=Be,f,d){super(null,o,l,u,c,h,s,a,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new Ft,t0=new Ft;class cl{constructor(t=[],e=[]){this.uuid=on(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ft)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ft;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,o=t.length;a<o;a++){const l=t[a]?t[a].matrixWorld:t0;wu.multiplyMatrices(l,e[a]),wu.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new cl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Yh(e,t,t,Ze,an);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const a=t.bones[n];let o=e[a];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),o=new Xh),this.bones.push(o),this.boneInverses.push(new Ft().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,a=e.length;s<a;s++){const o=e[s];t.bones.push(o.uuid);const l=n[s];t.boneInverses.push(l.toArray())}return t}}class Lo extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new Ft,Ru=new Ft,ds=[],Du=new On,e0=new Ft,Sr=new We,Ar=new xn;class n0 extends We{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Lo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Du.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Du)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ar.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,o=t*a+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),t.ray.intersectsSphere(Ar)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Wi),Ru.multiplyMatrices(n,Wi),Sr.matrixWorld=Ru,Sr.raycast(t,ds);for(let o=0,l=ds.length;o<l;o++){const u=ds[o];u.instanceId=a,u.object=this,e.push(u)}ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Lo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yh(new Float32Array(s*this.count),s,this.count,il,an));const a=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,u=s*t;a[u]=l,a.set(n,u+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new B,i0=new B,r0=new Lt;class qn{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ra.subVectors(n,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||r0.getNormalMatrix(t),s=this.coplanarPoint(Ra).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new xn,ps=new B;class hl{constructor(t=new qn,e=new qn,n=new qn,s=new qn,a=new qn,o=new qn){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],x=s[11],p=s[12],T=s[13],S=s[14],E=s[15];if(n[0].setComponents(u-a,d-c,x-m,E-p).normalize(),n[1].setComponents(u+a,d+c,x+m,E+p).normalize(),n[2].setComponents(u+o,d+h,x+_,E+T).normalize(),n[3].setComponents(u-o,d-h,x-_,E-T).normalize(),n[4].setComponents(u-l,d-f,x-g,E-S).normalize(),e===Dn)n[5].setComponents(u+l,d+f,x+g,E+S).normalize();else if(e===Os)n[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ps.x=s.normal.x>0?t.max.x:t.min.x,ps.y=s.normal.y>0?t.max.y:t.min.y,ps.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends dn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ks=new B,zs=new B,Pu=new Ft,Tr=new zr,ms=new xn,Da=new B,Bu=new B;class fl extends ue{constructor(t=new gn,e=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)ks.fromBufferAttribute(e,s-1),zs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ks.distanceTo(zs);t.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(s),ms.radius+=a,t.ray.intersectsSphere(ms)===!1)return;Pu.copy(s).invert(),Tr.copy(t.ray).applyMatrix4(Pu);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=m,x=_-1;g<x;g+=c){const p=h.getX(g),T=h.getX(g+1),S=xs(this,t,Tr,u,p,T,g);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),x=h.getX(m),p=xs(this,t,Tr,u,g,x,_-1);p&&e.push(p)}}else{const m=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=m,x=_-1;g<x;g+=c){const p=xs(this,t,Tr,u,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=xs(this,t,Tr,u,_-1,m,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function xs(r,t,e,n,s,a,o){const l=r.geometry.attributes.position;if(ks.fromBufferAttribute(l,s),zs.fromBufferAttribute(l,a),e.distanceSqToSegment(ks,zs,Da,Bu)>n)return;Da.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Da);if(!(c<t.near||c>t.far))return{distance:c,point:Bu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const Lu=new B,Fu=new B;class s0 extends fl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)Lu.fromBufferAttribute(e,s),Fu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lu.distanceTo(Fu);t.setAttribute("lineDistance",new Bn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a0 extends fl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class jh extends dn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iu=new Ft,Fo=new zr,gs=new xn,_s=new B;class o0 extends ue{constructor(t=new gn,e=new jh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),gs.radius+=a,t.ray.intersectsSphere(gs)===!1)return;Iu.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(Iu);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,g=m;_<g;_++){const x=c.getX(_);_s.fromBufferAttribute(f,x),Nu(_s,x,u,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m;_<g;_++)_s.fromBufferAttribute(f,_),Nu(_s,_,u,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Nu(r,t,e,n,s,a,o){const l=Fo.distanceSqToPoint(r);if(l<e){const u=new B;Fo.closestPointToPoint(r,u),u.applyMatrix4(n);const c=s.ray.origin.distanceTo(u);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(l),point:u,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Kh extends Me{constructor(t,e,n,s,a,o,l,u,c,h=Ji){if(h!==Ji&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=yi),n===void 0&&h===or&&(n=ar),super(null,s,a,o,l,u,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Be,this.minFilter=u!==void 0?u:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Xs extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,l=Math.floor(n),u=Math.floor(s),c=l+1,h=u+1,f=t/l,d=e/u,m=[],_=[],g=[],x=[];for(let p=0;p<h;p++){const T=p*d-o;for(let S=0;S<c;S++){const E=S*f-a;_.push(E,-T,0),g.push(0,0,1),x.push(S/l),x.push(1-p/u)}}for(let p=0;p<u;p++)for(let T=0;T<l;T++){const S=T+c*p,E=T+c*(p+1),R=T+1+c*(p+1),w=T+1+c*p;m.push(S,E,w),m.push(E,R,w)}this.setIndex(m),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(g,3)),this.setAttribute("uv",new Bn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class gi extends dn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _n extends gi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class l0 extends dn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class u0 extends dn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function vs(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function c0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function h0(r){function t(s,a){return r[s]-r[a]}const e=r.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Uu(r,t,e){const n=r.length,s=new r.constructor(n);for(let a=0,o=0;o!==n;++a){const l=e[a]*t;for(let u=0;u!==t;++u)s[o++]=r[l+u]}return s}function Zh(r,t,e,n){let s=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[s++];if(a===void 0)return;let o=a[n];if(o!==void 0)if(Array.isArray(o))do o=a[n],o!==void 0&&(t.push(a.time),e.push(...o)),a=r[s++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[n],o!==void 0&&(t.push(a.time),o.toArray(e,e.length)),a=r[s++];while(a!==void 0);else do o=a[n],o!==void 0&&(t.push(a.time),e.push(o)),a=r[s++];while(a!==void 0)}class Vr{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],a=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let l=n+2;;){if(s===void 0){if(t<a)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(a=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=a)){const l=e[1];t<l&&(n=2,a=l);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(s=a,a=e[--n-1],t>=a)break t}o=n,n=0;break e}break n}for(;n<o;){const l=n+o>>>1;t<e[l]?o=l:n=l+1}if(s=e[n],a=e[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=t*s;for(let o=0;o!==s;++o)e[o]=n[a+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class f0 extends Vr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(t,e,n){const s=this.parameterPositions;let a=t-2,o=t+1,l=s[a],u=s[o];if(l===void 0)switch(this.getSettings_().endingStart){case eu:a=t,l=2*e-n;break;case nu:a=s.length-2,l=e+s[a]-s[a+1];break;default:a=t,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case eu:o=t,u=2*n-e;break;case nu:o=1,u=n+s[1]-s[0];break;default:o=t-1,u=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-l),this._weightNext=c/(u-n),this._offsetPrev=a*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,c=u-l,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,_=(n-e)/(s-e),g=_*_,x=g*_,p=-d*x+2*d*g-d*_,T=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-m)*x+(1.5+m)*g+.5*_,E=m*x-m*g;for(let R=0;R!==l;++R)a[R]=p*o[h+R]+T*o[c+R]+S*o[u+R]+E*o[f+R];return a}}class d0 extends Vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=t*l,c=u-l,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==l;++d)a[d]=o[c+d]*f+o[u+d]*h;return a}}class p0 extends Vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class vn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new p0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new d0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new f0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Nr:e=this.InterpolantFactoryMethodDiscrete;break;case Ur:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nr;case this.InterpolantFactoryMethodLinear:return Ur;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let a=0,o=s-1;for(;a!==s&&n[a]<t;)++a;for(;o!==-1&&n[o]>e;)--o;if(++o,a!==0||o!==s){a>=o&&(o=Math.max(o,1),a=o-1);const l=this.getValueSize();this.times=n.slice(a,o),this.values=this.values.slice(a*l,o*l)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let l=0;l!==a;l++){const u=n[l];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,l,u),t=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,l,u,o),t=!1;break}o=u}if(s!==void 0&&c0(s))for(let l=0,u=s.length;l!==u;++l){const c=s[l];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,l,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===aa,a=t.length-1;let o=1;for(let l=1;l<a;++l){let u=!1;const c=t[l],h=t[l+1];if(c!==h&&(l!==1||c!==t[0]))if(s)u=!0;else{const f=l*n,d=f-n,m=f+n;for(let _=0;_!==n;++_){const g=e[f+_];if(g!==e[d+_]||g!==e[m+_]){u=!0;break}}}if(u){if(l!==o){t[o]=t[l];const f=l*n,d=o*n;for(let m=0;m!==n;++m)e[d+m]=e[f+m]}++o}}if(a>0){t[o]=t[a];for(let l=a*n,u=o*n,c=0;c!==n;++c)e[u+c]=e[l+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ur;class pr extends vn{constructor(t,e,n){super(t,e,n)}}pr.prototype.ValueTypeName="bool";pr.prototype.ValueBufferType=Array;pr.prototype.DefaultInterpolation=Nr;pr.prototype.InterpolantFactoryMethodLinear=void 0;pr.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends vn{}$h.prototype.ValueTypeName="color";class cr extends vn{}cr.prototype.ValueTypeName="number";class m0 extends Vr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=(n-e)/(s-e);let c=t*l;for(let h=c+l;c!==h;c+=4)pn.slerpFlat(a,0,o,c-l,o,c,u);return a}}class hr extends vn{InterpolantFactoryMethodLinear(t){return new m0(this.times,this.values,this.getValueSize(),t)}}hr.prototype.ValueTypeName="quaternion";hr.prototype.InterpolantFactoryMethodSmooth=void 0;class mr extends vn{constructor(t,e,n){super(t,e,n)}}mr.prototype.ValueTypeName="string";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=Nr;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;class fr extends vn{}fr.prototype.ValueTypeName="vector";class x0{constructor(t="",e=-1,n=[],s=jp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,l=n.length;o!==l;++o)e.push(_0(n[o]).scale(s));const a=new this(t.name,t.duration,e,t.blendMode);return a.uuid=t.uuid,a}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let a=0,o=n.length;a!==o;++a)e.push(vn.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const a=e.length,o=[];for(let l=0;l<a;l++){let u=[],c=[];u.push((l+a-1)%a,l,(l+1)%a),c.push(0,1,0);const h=h0(u);u=Uu(u,1,h),c=Uu(c,1,h),!s&&u[0]===0&&(u.push(a),c.push(c[0])),o.push(new cr(".morphTargetInfluences["+e[l].name+"]",u,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let l=0,u=t.length;l<u;l++){const c=t[l],h=c.name.match(a);if(h&&h.length>1){const f=h[1];let d=s[f];d||(s[f]=d=[]),d.push(c)}}const o=[];for(const l in s)o.push(this.CreateFromMorphTargetSequence(l,s[l],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,m,_,g){if(m.length!==0){const x=[],p=[];Zh(m,x,p,_),x.length!==0&&g.push(new f(d,x,p))}},s=[],a=t.name||"default",o=t.fps||30,l=t.blendMode;let u=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)m[d[_].morphTargets[g]]=-1;for(const g in m){const x=[],p=[];for(let T=0;T!==d[_].morphTargets.length;++T){const S=d[_];x.push(S.time),p.push(S.morphTarget===g?1:0)}s.push(new cr(".morphTargetInfluence["+g+"]",x,p))}u=m.length*o}else{const m=".bones["+e[f].name+"]";n(fr,m+".position",d,"pos",s),n(hr,m+".quaternion",d,"rot",s),n(fr,m+".scale",d,"scl",s)}}return s.length===0?null:new this(a,u,s,l)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const a=this.tracks[n];e=Math.max(e,a.times[a.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function g0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return cr;case"vector":case"vector2":case"vector3":case"vector4":return fr;case"color":return $h;case"quaternion":return hr;case"bool":case"boolean":return pr;case"string":return mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function _0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=g0(r.type);if(r.times===void 0){const e=[],n=[];Zh(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Zn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class v0{constructor(t,e,n){const s=this;let a=!1,o=0,l=0,u;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){l++,a===!1&&s.onStart!==void 0&&s.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,l),o===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const E0=new v0;class xr{constructor(t){this.manager=t!==void 0?t:E0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cn={};class y0 extends Error{constructor(t,e){super(t),this.response=e}}class Jh extends xr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Zn.get(t);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(Cn[t]!==void 0){Cn[t].push({onLoad:e,onProgress:n,onError:s});return}Cn[t]=[],Cn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),l=this.mimeType,u=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Cn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=d?parseInt(d):0,_=m!==0;let g=0;const x=new ReadableStream({start(p){T();function T(){f.read().then(({done:S,value:E})=>{if(S)p.close();else{g+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let w=0,b=h.length;w<b;w++){const I=h[w];I.onProgress&&I.onProgress(R)}p.enqueue(E),T()}},S=>{p.error(S)})}}});return new Response(x)}else throw new y0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,l));case"json":return c.json();default:if(l===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(l),d=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Zn.add(t,c);const h=Cn[t];delete Cn[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Cn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Cn[t];for(let f=0,d=h.length;f<d;f++){const m=h[f];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class M0 extends xr{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=Zn.get(t);if(o!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o;const l=Or("img");function u(){h(),Zn.add(t,this),e&&e(this),a.manager.itemEnd(t)}function c(f){h(),s&&s(f),a.manager.itemError(t),a.manager.itemEnd(t)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",c,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(t),l.src=t,l}}class S0 extends xr{constructor(t){super(t)}load(t,e,n,s){const a=new Me,o=new M0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(l){a.image=l,a.needsUpdate=!0,e!==void 0&&e(a)},n,s),a}}class Ys extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Pa=new Ft,Ou=new B,ku=new B;class dl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Pa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class A0 extends dl{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class T0 extends Ys{constructor(t,e,n=0,s=Math.PI/3,a=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new A0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zu=new Ft,Cr=new B,Ba=new B;class C0 extends dl{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cr),Ba.copy(n.position),Ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ba),n.updateMatrixWorld(),s.makeTranslation(-Cr.x,-Cr.y,-Cr.z),zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zu)}}class b0 extends Ys{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new C0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class pl extends Gh{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,l=s+e,u=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class w0 extends dl{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qh extends Ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class R0 extends Ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class D0 extends xr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,o=Zn.get(t);if(o!==void 0){if(a.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),a.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(o),a.manager.itemEnd(t)},0),o}const l={};l.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",l.headers=this.requestHeader;const u=fetch(t,l).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zn.add(t,c),e&&e(c),a.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Zn.remove(t),a.manager.itemError(t),a.manager.itemEnd(t)});Zn.add(t,u),a.manager.itemStart(t)}}class P0 extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const ml="\\[\\]\\.:\\/",B0=new RegExp("["+ml+"]","g"),xl="[^"+ml+"]",L0="[^"+ml.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",xl),I0=/(WCOD+)?/.source.replace("WCOD",L0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),U0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),O0=new RegExp("^"+F0+I0+N0+U0+"$"),k0=["material","materials","bones","map"];class z0{constructor(t,e,n){const s=n||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Qt{constructor(t,e,n){this.path=e,this.parsedPath=n||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,n):new Qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(B0,"")}static parseTrackName(t){const e=O0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);k0.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(a){for(let o=0;o<a.length;o++){const l=a[o];if(l.name===e||l.uuid===e)return l;const u=n(l.children);if(u)return u}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let a=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=z0;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Hu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ut(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ut(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class H0 extends Ci{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Vu(r,t,e,n){const s=V0(n);switch(e){case Ch:return r*t;case wh:return r*t;case Rh:return r*t*2;case il:return r*t/s.components*s.byteLength;case rl:return r*t/s.components*s.byteLength;case Dh:return r*t*2/s.components*s.byteLength;case sl:return r*t*2/s.components*s.byteLength;case bh:return r*t*3/s.components*s.byteLength;case Ze:return r*t*4/s.components*s.byteLength;case al:return r*t*4/s.components*s.byteLength;case bs:case ws:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Rs:case Ds:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case so:case oo:return Math.max(r,16)*Math.max(t,8)/4;case ro:case ao:return Math.max(r,8)*Math.max(t,8)/2;case lo:case uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case co:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Eo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case To:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ps:case Co:case bo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ph:case wo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ro:case Do:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V0(r){switch(r){case Nn:case Sh:return{byteLength:1,components:1};case Ir:case Ah:case kr:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case yi:case tl:case an:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tf(){let r=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=r.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(s),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){r=a}}}function G0(r){const t=new WeakMap;function e(l,u){const c=l.array,h=l.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,c,h),l.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:f}}function n(l,u,c){const h=u.array,f=u.updateRanges;if(r.bindBuffer(c,l),f.length===0)r.bufferSubData(c,0,h);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],g=f[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const g=f[m];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u&&(r.deleteBuffer(u.buffer),t.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,u));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,u),c.version=l.version}}return{get:s,remove:a,update:o}}var W0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Z0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Q0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ix=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,px=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",yx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Px=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ig=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,c_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nt={alphahash_fragment:W0,alphahash_pars_fragment:X0,alphamap_fragment:Y0,alphamap_pars_fragment:q0,alphatest_fragment:j0,alphatest_pars_fragment:K0,aomap_fragment:Z0,aomap_pars_fragment:$0,batching_pars_vertex:J0,batching_vertex:Q0,begin_vertex:tx,beginnormal_vertex:ex,bsdfs:nx,iridescence_fragment:ix,bumpmap_pars_fragment:rx,clipping_planes_fragment:sx,clipping_planes_pars_fragment:ax,clipping_planes_pars_vertex:ox,clipping_planes_vertex:lx,color_fragment:ux,color_pars_fragment:cx,color_pars_vertex:hx,color_vertex:fx,common:dx,cube_uv_reflection_fragment:px,defaultnormal_vertex:mx,displacementmap_pars_vertex:xx,displacementmap_vertex:gx,emissivemap_fragment:_x,emissivemap_pars_fragment:vx,colorspace_fragment:Ex,colorspace_pars_fragment:yx,envmap_fragment:Mx,envmap_common_pars_fragment:Sx,envmap_pars_fragment:Ax,envmap_pars_vertex:Tx,envmap_physical_pars_fragment:Nx,envmap_vertex:Cx,fog_vertex:bx,fog_pars_vertex:wx,fog_fragment:Rx,fog_pars_fragment:Dx,gradientmap_pars_fragment:Px,lightmap_pars_fragment:Bx,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Fx,lights_pars_begin:Ix,lights_toon_fragment:Ux,lights_toon_pars_fragment:Ox,lights_phong_fragment:kx,lights_phong_pars_fragment:zx,lights_physical_fragment:Hx,lights_physical_pars_fragment:Vx,lights_fragment_begin:Gx,lights_fragment_maps:Wx,lights_fragment_end:Xx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:qx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Kx,map_fragment:Zx,map_pars_fragment:$x,map_particle_fragment:Jx,map_particle_pars_fragment:Qx,metalnessmap_fragment:tg,metalnessmap_pars_fragment:eg,morphinstance_vertex:ng,morphcolor_vertex:ig,morphnormal_vertex:rg,morphtarget_pars_vertex:sg,morphtarget_vertex:ag,normal_fragment_begin:og,normal_fragment_maps:lg,normal_pars_fragment:ug,normal_pars_vertex:cg,normal_vertex:hg,normalmap_pars_fragment:fg,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:pg,clearcoat_pars_fragment:mg,iridescence_pars_fragment:xg,opaque_fragment:gg,packing:_g,premultiplied_alpha_fragment:vg,project_vertex:Eg,dithering_fragment:yg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Cg,shadowmap_vertex:bg,shadowmask_pars_fragment:wg,skinbase_vertex:Rg,skinning_pars_vertex:Dg,skinning_vertex:Pg,skinnormal_vertex:Bg,specularmap_fragment:Lg,specularmap_pars_fragment:Fg,tonemapping_fragment:Ig,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Og,uv_pars_fragment:kg,uv_pars_vertex:zg,uv_vertex:Hg,worldpos_vertex:Vg,background_vert:Gg,background_frag:Wg,backgroundCube_vert:Xg,backgroundCube_frag:Yg,cube_vert:qg,cube_frag:jg,depth_vert:Kg,depth_frag:Zg,distanceRGBA_vert:$g,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:t_,linedashed_vert:e_,linedashed_frag:n_,meshbasic_vert:i_,meshbasic_frag:r_,meshlambert_vert:s_,meshlambert_frag:a_,meshmatcap_vert:o_,meshmatcap_frag:l_,meshnormal_vert:u_,meshnormal_frag:c_,meshphong_vert:h_,meshphong_frag:f_,meshphysical_vert:d_,meshphysical_frag:p_,meshtoon_vert:m_,meshtoon_frag:x_,points_vert:g_,points_frag:__,shadow_vert:v_,shadow_frag:E_,sprite_vert:y_,sprite_frag:M_},et={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},un={basic:{uniforms:De([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:De([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new At(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:De([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:De([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:De([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new At(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:De([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:De([et.points,et.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:De([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:De([et.common,et.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:De([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:De([et.sprite,et.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:De([et.common,et.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:De([et.lights,et.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};un.physical={uniforms:De([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Es={r:0,b:0,g:0},li=new mn,S_=new Ft;function A_(r,t,e,n,s,a,o){const l=new At(0);let u=a===!0?0:1,c,h,f=null,d=0,m=null;function _(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function g(S){let E=!1;const R=_(S);R===null?p(l,u):R&&R.isColor&&(p(R,1),E=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(S,E){const R=_(E);R&&(R.isCubeTexture||R.mapping===Ws)?(h===void 0&&(h=new We(new Hr(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ur(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(E.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S_.makeRotationFromEuler(li)),h.material.toneMapped=Gt.getTransfer(R.colorSpace)!==te,(f!==R||d!==R.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,f=R,d=R.version,m=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new We(new Xs(2,2),new ei({name:"BackgroundMaterial",uniforms:ur(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(R.colorSpace)!==te,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,m=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(Es,Vh(r)),n.buffers.color.setClear(Es.r,Es.g,Es.b,E,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return l},setClearColor:function(S,E=1){l.set(S),u=E,p(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(S){u=S,p(l,u)},render:g,addToRenderList:x,dispose:T}}function T_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,o=!1;function l(M,P,G,i,U){let W=!1;const O=f(i,G,P);a!==O&&(a=O,c(a.object)),W=m(M,i,G,U),W&&_(M,i,G,U),U!==null&&t.update(U,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,E(M,P,G,i),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function u(){return r.createVertexArray()}function c(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function f(M,P,G){const i=G.wireframe===!0;let U=n[M.id];U===void 0&&(U={},n[M.id]=U);let W=U[P.id];W===void 0&&(W={},U[P.id]=W);let O=W[i];return O===void 0&&(O=d(u()),W[i]=O),O}function d(M){const P=[],G=[],i=[];for(let U=0;U<e;U++)P[U]=0,G[U]=0,i[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:i,object:M,attributes:{},index:null}}function m(M,P,G,i){const U=a.attributes,W=P.attributes;let O=0;const Y=G.getAttributes();for(const z in Y)if(Y[z].location>=0){const ct=U[z];let gt=W[z];if(gt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),ct===void 0||ct.attribute!==gt||gt&&ct.data!==gt.data)return!0;O++}return a.attributesNum!==O||a.index!==i}function _(M,P,G,i){const U={},W=P.attributes;let O=0;const Y=G.getAttributes();for(const z in Y)if(Y[z].location>=0){let ct=W[z];ct===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const gt={};gt.attribute=ct,ct&&ct.data&&(gt.data=ct.data),U[z]=gt,O++}a.attributes=U,a.attributesNum=O,a.index=i}function g(){const M=a.newAttributes;for(let P=0,G=M.length;P<G;P++)M[P]=0}function x(M){p(M,0)}function p(M,P){const G=a.newAttributes,i=a.enabledAttributes,U=a.attributeDivisors;G[M]=1,i[M]===0&&(r.enableVertexAttribArray(M),i[M]=1),U[M]!==P&&(r.vertexAttribDivisor(M,P),U[M]=P)}function T(){const M=a.newAttributes,P=a.enabledAttributes;for(let G=0,i=P.length;G<i;G++)P[G]!==M[G]&&(r.disableVertexAttribArray(G),P[G]=0)}function S(M,P,G,i,U,W,O){O===!0?r.vertexAttribIPointer(M,P,G,U,W):r.vertexAttribPointer(M,P,G,i,U,W)}function E(M,P,G,i){g();const U=i.attributes,W=G.getAttributes(),O=P.defaultAttributeValues;for(const Y in W){const z=W[Y];if(z.location>=0){let nt=U[Y];if(nt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const ct=nt.normalized,gt=nt.itemSize,Tt=t.get(nt);if(Tt===void 0)continue;const ie=Tt.buffer,j=Tt.type,tt=Tt.bytesPerElement,xt=j===r.INT||j===r.UNSIGNED_INT||nt.gpuType===tl;if(nt.isInterleavedBufferAttribute){const at=nt.data,St=at.stride,qt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let bt=0;bt<z.locationSize;bt++)p(z.location+bt,at.meshPerAttribute);M.isInstancedMesh!==!0&&i._maxInstanceCount===void 0&&(i._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let bt=0;bt<z.locationSize;bt++)x(z.location+bt);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let bt=0;bt<z.locationSize;bt++)S(z.location+bt,gt/z.locationSize,j,ct,St*tt,(qt+gt/z.locationSize*bt)*tt,xt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<z.locationSize;at++)p(z.location+at,nt.meshPerAttribute);M.isInstancedMesh!==!0&&i._maxInstanceCount===void 0&&(i._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<z.locationSize;at++)x(z.location+at);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let at=0;at<z.locationSize;at++)S(z.location+at,gt/z.locationSize,j,ct,gt*tt,gt/z.locationSize*at*tt,xt)}}else if(O!==void 0){const ct=O[Y];if(ct!==void 0)switch(ct.length){case 2:r.vertexAttrib2fv(z.location,ct);break;case 3:r.vertexAttrib3fv(z.location,ct);break;case 4:r.vertexAttrib4fv(z.location,ct);break;default:r.vertexAttrib1fv(z.location,ct)}}}}T()}function R(){I();for(const M in n){const P=n[M];for(const G in P){const i=P[G];for(const U in i)h(i[U].object),delete i[U];delete P[G]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const G in P){const i=P[G];for(const U in i)h(i[U].object),delete i[U];delete P[G]}delete n[M.id]}function b(M){for(const P in n){const G=n[P];if(G[M.id]===void 0)continue;const i=G[M.id];for(const U in i)h(i[U].object),delete i[U];delete G[M.id]}}function I(){A(),o=!0,a!==s&&(a=s,c(a.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:A,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:x,disableUnusedAttributes:T}}function C_(r,t,e){let n;function s(c){n=c}function a(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(r.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function l(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];e.update(m,n,1)}function u(c,h,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function b_(r,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Ze&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(b){const I=b===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Nn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==an&&!I)}function u(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=u(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:E,vertexTextures:R,maxSamples:w}}function w_(r){const t=this;let e=null,n=0,s=!1,a=!1;const o=new qn,l=new Lt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,x=f.clipShadows,p=r.get(f);if(!s||_===null||_.length===0||a&&!x)a?h(null):c();else{const T=a?0:n,S=T*4;let E=p.clippingState||null;u.value=E,E=h(_,d,S,m);for(let R=0;R!==S;++R)E[R]=e[R];p.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,m,_){const g=f!==null?f.length:0;let x=null;if(g!==0){if(x=u.value,_!==!0||x===null){const p=m+g*4,T=d.matrixWorldInverse;l.getNormalMatrix(T),(x===null||x.length<p)&&(x=new Float32Array(p));for(let S=0,E=m;S!==g;++S,E+=4)o.copy(f[S]).applyMatrix4(T,l),o.normal.toArray(x,E),x[E+3]=o.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,x}}function R_(r){let t=new WeakMap;function e(o,l){return l===no?o.mapping=ir:l===io&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===no||l===io)if(t.has(o)){const u=t.get(o).texture;return e(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new jm(u.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const ji=4,Gu=[.125,.215,.35,.446,.526,.582],pi=20,La=new pl,Wu=new At;let Fa=null,Ia=0,Na=0,Ua=!1;const fi=(1+Math.sqrt(5))/2,Xi=1/fi,Xu=[new B(-fi,Xi,0),new B(fi,Xi,0),new B(-Xi,0,fi),new B(Xi,0,fi),new B(0,fi,-Xi),new B(0,fi,Xi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],D_=new B;class Yu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,a={}){const{size:o=256,position:l=D_}=a;Fa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,s,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Ia,Na),this._renderer.xr.enabled=Ua,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:kr,format:Ze,colorSpace:Fe,depthBuffer:!1},s=qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=P_(a)),this._blurMaterial=B_(a,t,e)}return s}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,n,s,a){const u=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Wu),f.toneMapping=ti,f.autoClear=!1;const _=new mi({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new We(new Hr,_);let x=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,x=!0):(_.color.copy(Wu),x=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(u.up.set(0,c[T],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+h[T],a.y,a.z)):S===1?(u.up.set(0,0,c[T]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+h[T],a.z)):(u.up.set(0,c[T],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+h[T]));const E=this._cubeSize;ys(s,S*E,T>2?E:0,E,E),f.setRenderTarget(s),x&&f.render(g,u),f.render(t,u)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=m,f.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ir||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const u=this._cubeSize;ys(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,La)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Xu[(s-a-1)%Xu.length];this._blur(t,a-1,a,o,l)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,l){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new We(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*pi-1),g=a/_,x=isFinite(a)?1+Math.floor(h*g):pi;x>pi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${pi}`);const p=[];let T=0;for(let b=0;b<pi;++b){const I=b/g,A=Math.exp(-I*I/2);p.push(A),b===0?T+=A:b<x&&(T+=2*A)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const E=this._sizeLods[s],R=3*E*(s>S-ji?s-S+ji:0),w=4*(this._cubeSize-E);ys(e,R,w,3*E,2*E),u.setRenderTarget(e),u.render(f,La)}}function P_(r){const t=[],e=[],n=[];let s=r;const a=r-ji+1+Gu.length;for(let o=0;o<a;o++){const l=Math.pow(2,s);e.push(l);let u=1/l;o>r-ji?u=Gu[o-r+ji-1]:o===0&&(u=0),n.push(u);const c=1/(l-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,g=3,x=2,p=1,T=new Float32Array(g*_*m),S=new Float32Array(x*_*m),E=new Float32Array(p*_*m);for(let w=0;w<m;w++){const b=w%3*2/3-1,I=w>2?0:-1,A=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];T.set(A,g*_*w),S.set(d,x*_*w);const M=[w,w,w,w,w,w];E.set(M,p*_*w)}const R=new gn;R.setAttribute("position",new Le(T,g)),R.setAttribute("uv",new Le(S,x)),R.setAttribute("faceIndex",new Le(E,p)),t.push(R),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qu(r,t,e){const n=new Mi(r,t,e);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(r,t,e,n,s){r.viewport.set(t,e,n,s),r.scissor.set(t,e,n,s)}function B_(r,t,e){const n=new Float32Array(pi),s=new B(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ju(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ku(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L_(r){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const u=l.mapping,c=u===no||u===io,h=u===ir||u===rr;if(c||h){let f=t.get(l);const d=f!==void 0?f.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new Yu(r)),f=c?e.fromEquirectangular(l,f):e.fromCubemap(l,f),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),f.texture;if(f!==void 0)return f.texture;{const m=l.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Yu(r)),f=c?e.fromEquirectangular(l):e.fromCubemap(l),f.texture.pmremVersion=l.pmremVersion,t.set(l,f),l.addEventListener("dispose",a),f.texture):null}}}return l}function s(l){let u=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&u++;return u===c}function a(l){const u=l.target;u.removeEventListener("dispose",a);const c=t.get(u);c!==void 0&&(t.delete(u),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function F_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I_(r,t,e,n){const s={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const m=a.get(d);m&&(t.remove(m),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function u(f){const d=f.attributes;for(const m in d)t.update(d[m],r.ARRAY_BUFFER)}function c(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const T=m.array;g=m.version;for(let S=0,E=T.length;S<E;S+=3){const R=T[S+0],w=T[S+1],b=T[S+2];d.push(R,w,w,b,b,R)}}else if(_!==void 0){const T=_.array;g=_.version;for(let S=0,E=T.length/3-1;S<E;S+=3){const R=S+0,w=S+1,b=S+2;d.push(R,w,w,b,b,R)}}else return;const x=new(Nh(d)?Hh:zh)(d,1);x.version=g;const p=a.get(f);p&&t.remove(p),a.set(f,x)}function h(f){const d=a.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:l,update:u,getWireframeAttribute:h}}function N_(r,t,e){let n;function s(d){n=d}let a,o;function l(d){a=d.type,o=d.bytesPerElement}function u(d,m){r.drawElements(n,m,a,d*o),e.update(m,n,1)}function c(d,m,_){_!==0&&(r.drawElementsInstanced(n,m,a,d*o,_),e.update(m,n,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,d,0,_);let x=0;for(let p=0;p<_;p++)x+=m[p];e.update(x,n,1)}function f(d,m,_,g){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,a,d,0,g,0,_);let p=0;for(let T=0;T<_;T++)p+=m[T]*g[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function U_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=l*(a/3);break;case r.LINES:e.lines+=l*(a/2);break;case r.LINE_STRIP:e.lines+=l*(a-1);break;case r.LINE_LOOP:e.lines+=l*a;break;case r.POINTS:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function O_(r,t,e){const n=new WeakMap,s=new jt;function a(o,l,u){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(l);if(d===void 0||d.count!==f){let A=function(){b.dispose(),n.delete(l),l.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const m=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,x=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let E=l.attributes.position.count*S,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*R*4*f),b=new Uh(w,E,R,f);b.type=an,b.needsUpdate=!0;const I=S*4;for(let M=0;M<f;M++){const P=x[M],G=p[M],i=T[M],U=E*R*4*M;for(let W=0;W<P.count;W++){const O=W*I;m===!0&&(s.fromBufferAttribute(P,W),w[U+O+0]=s.x,w[U+O+1]=s.y,w[U+O+2]=s.z,w[U+O+3]=0),_===!0&&(s.fromBufferAttribute(G,W),w[U+O+4]=s.x,w[U+O+5]=s.y,w[U+O+6]=s.z,w[U+O+7]=0),g===!0&&(s.fromBufferAttribute(i,W),w[U+O+8]=s.x,w[U+O+9]=s.y,w[U+O+10]=s.z,w[U+O+11]=i.itemSize===4?s.w:1)}}d={count:f,texture:b,size:new Dt(E,R)},n.set(l,d),l.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",c)}u.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:a}}function k_(r,t,e,n){let s=new WeakMap;function a(u){const c=n.render.frame,h=u.geometry,f=t.get(u,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(e.update(u.instanceMatrix,r.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,r.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return f}function o(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}const ef=new Me,Zu=new Kh(1,1),nf=new Uh,rf=new Pm,sf=new Wh,$u=[],Ju=[],Qu=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function gr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const s=t*e;let a=$u[s];if(a===void 0&&(a=new Float32Array(s),$u[s]=a),t!==0){n.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,r[o].toArray(a,l)}return a}function _e(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function ve(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function qs(r,t){let e=Ju[t];e===void 0&&(e=new Int32Array(t),Ju[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function z_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function H_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2fv(this.addr,t),ve(e,t)}}function V_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;r.uniform3fv(this.addr,t),ve(e,t)}}function G_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4fv(this.addr,t),ve(e,t)}}function W_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ec.set(n),r.uniformMatrix2fv(this.addr,!1,ec),ve(e,n)}}function X_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;tc.set(n),r.uniformMatrix3fv(this.addr,!1,tc),ve(e,n)}}function Y_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Qu.set(n),r.uniformMatrix4fv(this.addr,!1,Qu),ve(e,n)}}function q_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function j_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2iv(this.addr,t),ve(e,t)}}function K_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3iv(this.addr,t),ve(e,t)}}function Z_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4iv(this.addr,t),ve(e,t)}}function $_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function J_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;r.uniform2uiv(this.addr,t),ve(e,t)}}function Q_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;r.uniform3uiv(this.addr,t),ve(e,t)}}function tv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;r.uniform4uiv(this.addr,t),ve(e,t)}}function ev(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s);let a;this.type===r.SAMPLER_2D_SHADOW?(Zu.compareFunction=Fh,a=Zu):a=ef,e.setTexture2D(t||a,s)}function nv(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||rf,s)}function iv(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||sf,s)}function rv(r,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(r.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nf,s)}function sv(r){switch(r){case 5126:return z_;case 35664:return H_;case 35665:return V_;case 35666:return G_;case 35674:return W_;case 35675:return X_;case 35676:return Y_;case 5124:case 35670:return q_;case 35667:case 35671:return j_;case 35668:case 35672:return K_;case 35669:case 35673:return Z_;case 5125:return $_;case 36294:return J_;case 36295:return Q_;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}function av(r,t){r.uniform1fv(this.addr,t)}function ov(r,t){const e=gr(t,this.size,2);r.uniform2fv(this.addr,e)}function lv(r,t){const e=gr(t,this.size,3);r.uniform3fv(this.addr,e)}function uv(r,t){const e=gr(t,this.size,4);r.uniform4fv(this.addr,e)}function cv(r,t){const e=gr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function hv(r,t){const e=gr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function fv(r,t){const e=gr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function dv(r,t){r.uniform1iv(this.addr,t)}function pv(r,t){r.uniform2iv(this.addr,t)}function mv(r,t){r.uniform3iv(this.addr,t)}function xv(r,t){r.uniform4iv(this.addr,t)}function gv(r,t){r.uniform1uiv(this.addr,t)}function _v(r,t){r.uniform2uiv(this.addr,t)}function vv(r,t){r.uniform3uiv(this.addr,t)}function Ev(r,t){r.uniform4uiv(this.addr,t)}function yv(r,t,e){const n=this.cache,s=t.length,a=qs(e,s);_e(n,a)||(r.uniform1iv(this.addr,a),ve(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ef,a[o])}function Mv(r,t,e){const n=this.cache,s=t.length,a=qs(e,s);_e(n,a)||(r.uniform1iv(this.addr,a),ve(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rf,a[o])}function Sv(r,t,e){const n=this.cache,s=t.length,a=qs(e,s);_e(n,a)||(r.uniform1iv(this.addr,a),ve(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||sf,a[o])}function Av(r,t,e){const n=this.cache,s=t.length,a=qs(e,s);_e(n,a)||(r.uniform1iv(this.addr,a),ve(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nf,a[o])}function Tv(r){switch(r){case 5126:return av;case 35664:return ov;case 35665:return lv;case 35666:return uv;case 35674:return cv;case 35675:return hv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return xv;case 5125:return gv;case 36294:return _v;case 36295:return vv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return Av}}class Cv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sv(e.type)}}class bv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tv(e.type)}}class wv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(t,e[l.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function nc(r,t){r.seq.push(t),r.map[t.id]=t}function Rv(r,t,e){const n=r.name,s=n.length;for(Oa.lastIndex=0;;){const a=Oa.exec(n),o=Oa.lastIndex;let l=a[1];const u=a[2]==="]",c=a[3];if(u&&(l=l|0),c===void 0||c==="["&&o+2===s){nc(e,c===void 0?new Cv(l,r,t):new bv(l,r,t));break}else{let f=e.map[l];f===void 0&&(f=new wv(l),nc(e,f)),e=f}}}class Bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Rv(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const l=e[a],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ic(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Dv=37297;let Pv=0;function Bv(r,t){const e=r.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const rc=new Lt;function Lv(r){Gt._getMatrix(rc,Gt.workingColorSpace,r);const t=`mat3( ${rc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(r)){case Us:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function sc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=r.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Bv(r.getShaderSource(t),o)}else return s}function Fv(r,t){const e=Lv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Iv(r,t){let e;switch(t){case zp:e="Linear";break;case Hp:e="Reinhard";break;case Vp:e="Cineon";break;case Gp:e="ACESFilmic";break;case Xp:e="AgX";break;case Yp:e="Neutral";break;case Wp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new B;function Nv(){Gt.getLuminanceCoefficients(Ms);const r=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Ov(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kv(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=r.getActiveAttrib(t,s),o=a.name;let l=1;a.type===r.FLOAT_MAT2&&(l=2),a.type===r.FLOAT_MAT3&&(l=3),a.type===r.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:r.getAttribLocation(t,o),locationSize:l}}return e}function Rr(r){return r!==""}function ac(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(r){return r.replace(zv,Vv)}const Hv=new Map;function Vv(r,t){let e=Nt[t];if(e===void 0){const n=Hv.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Io(e)}const Gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(r){return r.replace(Gv,Wv)}function Wv(r,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function uc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===vp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Yv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case Ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function jv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eh:t="ENVMAP_BLENDING_MULTIPLY";break;case Op:t="ENVMAP_BLENDING_MIX";break;case kp:t="ENVMAP_BLENDING_ADD";break}return t}function Kv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zv(r,t,e,n){const s=r.getContext(),a=e.defines;let o=e.vertexShader,l=e.fragmentShader;const u=Xv(e),c=Yv(e),h=qv(e),f=jv(e),d=Kv(e),m=Uv(e),_=Ov(a),g=s.createProgram();let x,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(x=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Nt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Iv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Fv("linearToOutputTexel",e.outputColorSpace),Nv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Io(o),o=ac(o,e),o=oc(o,e),l=Io(l),l=ac(l,e),l=oc(l,e),o=lc(o),l=lc(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+x+o,E=T+p+l,R=ic(s,s.VERTEX_SHADER,S),w=ic(s,s.FRAGMENT_SHADER,E);s.attachShader(g,R),s.attachShader(g,w),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(P){if(r.debug.checkShaderErrors){const G=s.getProgramInfoLog(g).trim(),i=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(w).trim();let W=!0,O=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,g,R,w);else{const Y=sc(s,R,"vertex"),z=sc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Y+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(i===""||U==="")&&(O=!1);O&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:i,prefix:x},fragmentShader:{log:U,prefix:p}})}s.deleteShader(R),s.deleteShader(w),I=new Bs(s,g),A=kv(s,g)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,Dv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pv++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let $v=0;class Jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Qv(t),e.set(t,n)),n}}class Qv{constructor(t){this.id=$v++,this.code=t,this.usedTimes=0}}function tE(r,t,e,n,s,a,o){const l=new Oh,u=new Jv,c=new Set,h=[],f=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function x(A,M,P,G,i){const U=G.fog,W=i.geometry,O=A.isMeshStandardMaterial?G.environment:null,Y=(A.isMeshStandardMaterial?e:t).get(A.envMap||O),z=Y&&Y.mapping===Ws?Y.image.height:null,nt=_[A.type];A.precision!==null&&(m=s.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,gt=ct!==void 0?ct.length:0;let Tt=0;W.morphAttributes.position!==void 0&&(Tt=1),W.morphAttributes.normal!==void 0&&(Tt=2),W.morphAttributes.color!==void 0&&(Tt=3);let ie,j,tt,xt;if(nt){const $t=un[nt];ie=$t.vertexShader,j=$t.fragmentShader}else ie=A.vertexShader,j=A.fragmentShader,u.update(A),tt=u.getVertexShaderID(A),xt=u.getFragmentShaderID(A);const at=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),qt=i.isInstancedMesh===!0,bt=i.isBatchedMesh===!0,fe=!!A.map,le=!!A.matcap,kt=!!Y,D=!!A.aoMap,Xe=!!A.lightMap,zt=!!A.bumpMap,Ht=!!A.normalMap,Et=!!A.displacementMap,ae=!!A.emissiveMap,vt=!!A.metalnessMap,C=!!A.roughnessMap,v=A.anisotropy>0,k=A.clearcoat>0,K=A.dispersion>0,$=A.iridescence>0,q=A.sheen>0,_t=A.transmission>0,ot=v&&!!A.anisotropyMap,ft=k&&!!A.clearcoatMap,Wt=k&&!!A.clearcoatNormalMap,Q=k&&!!A.clearcoatRoughnessMap,dt=$&&!!A.iridescenceMap,Ct=$&&!!A.iridescenceThicknessMap,wt=q&&!!A.sheenColorMap,pt=q&&!!A.sheenRoughnessMap,Vt=!!A.specularMap,It=!!A.specularColorMap,se=!!A.specularIntensityMap,L=_t&&!!A.transmissionMap,rt=_t&&!!A.thicknessMap,X=!!A.gradientMap,Z=!!A.alphaMap,ut=A.alphaTest>0,lt=!!A.alphaHash,Bt=!!A.extensions;let ce=ti;A.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Te={shaderID:nt,shaderType:A.type,shaderName:A.name,vertexShader:ie,fragmentShader:j,defines:A.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:bt,batchingColor:bt&&i._colorsTexture!==null,instancing:qt,instancingColor:qt&&i.instanceColor!==null,instancingMorph:qt&&i.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?r.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Fe,alphaToCoverage:!!A.alphaToCoverage,map:fe,matcap:le,envMap:kt,envMapMode:kt&&Y.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:Xe,bumpMap:zt,normalMap:Ht,displacementMap:d&&Et,emissiveMap:ae,normalMapObjectSpace:Ht&&A.normalMapType===Jp,normalMapTangentSpace:Ht&&A.normalMapType===Lh,metalnessMap:vt,roughnessMap:C,anisotropy:v,anisotropyMap:ot,clearcoat:k,clearcoatMap:ft,clearcoatNormalMap:Wt,clearcoatRoughnessMap:Q,dispersion:K,iridescence:$,iridescenceMap:dt,iridescenceThicknessMap:Ct,sheen:q,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:It,specularIntensityMap:se,transmission:_t,transmissionMap:L,thicknessMap:rt,gradientMap:X,opaque:A.transparent===!1&&A.blending===$i&&A.alphaToCoverage===!1,alphaMap:Z,alphaTest:ut,alphaHash:lt,combine:A.combine,mapUv:fe&&g(A.map.channel),aoMapUv:D&&g(A.aoMap.channel),lightMapUv:Xe&&g(A.lightMap.channel),bumpMapUv:zt&&g(A.bumpMap.channel),normalMapUv:Ht&&g(A.normalMap.channel),displacementMapUv:Et&&g(A.displacementMap.channel),emissiveMapUv:ae&&g(A.emissiveMap.channel),metalnessMapUv:vt&&g(A.metalnessMap.channel),roughnessMapUv:C&&g(A.roughnessMap.channel),anisotropyMapUv:ot&&g(A.anisotropyMap.channel),clearcoatMapUv:ft&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(A.sheenRoughnessMap.channel),specularMapUv:Vt&&g(A.specularMap.channel),specularColorMapUv:It&&g(A.specularColorMap.channel),specularIntensityMapUv:se&&g(A.specularIntensityMap.channel),transmissionMapUv:L&&g(A.transmissionMap.channel),thicknessMapUv:rt&&g(A.thicknessMap.channel),alphaMapUv:Z&&g(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ht||v),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:i.isPoints===!0&&!!W.attributes.uv&&(fe||Z),fog:!!U,useFog:A.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:St,skinning:i.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:fe&&A.map.isVideoTexture===!0&&Gt.getTransfer(A.map.colorSpace)===te,decodeVideoTextureEmissive:ae&&A.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(A.emissiveMap.colorSpace)===te,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===hn,flipSided:A.side===Oe,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Bt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&A.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function p(A){const M=[];if(A.shaderID?M.push(A.shaderID):(M.push(A.customVertexShaderID),M.push(A.customFragmentShaderID)),A.defines!==void 0)for(const P in A.defines)M.push(P),M.push(A.defines[P]);return A.isRawShaderMaterial===!1&&(T(M,A),S(M,A),M.push(r.outputColorSpace)),M.push(A.customProgramCacheKey),M.join()}function T(A,M){A.push(M.precision),A.push(M.outputColorSpace),A.push(M.envMapMode),A.push(M.envMapCubeUVHeight),A.push(M.mapUv),A.push(M.alphaMapUv),A.push(M.lightMapUv),A.push(M.aoMapUv),A.push(M.bumpMapUv),A.push(M.normalMapUv),A.push(M.displacementMapUv),A.push(M.emissiveMapUv),A.push(M.metalnessMapUv),A.push(M.roughnessMapUv),A.push(M.anisotropyMapUv),A.push(M.clearcoatMapUv),A.push(M.clearcoatNormalMapUv),A.push(M.clearcoatRoughnessMapUv),A.push(M.iridescenceMapUv),A.push(M.iridescenceThicknessMapUv),A.push(M.sheenColorMapUv),A.push(M.sheenRoughnessMapUv),A.push(M.specularMapUv),A.push(M.specularColorMapUv),A.push(M.specularIntensityMapUv),A.push(M.transmissionMapUv),A.push(M.thicknessMapUv),A.push(M.combine),A.push(M.fogExp2),A.push(M.sizeAttenuation),A.push(M.morphTargetsCount),A.push(M.morphAttributeCount),A.push(M.numDirLights),A.push(M.numPointLights),A.push(M.numSpotLights),A.push(M.numSpotLightMaps),A.push(M.numHemiLights),A.push(M.numRectAreaLights),A.push(M.numDirLightShadows),A.push(M.numPointLightShadows),A.push(M.numSpotLightShadows),A.push(M.numSpotLightShadowsWithMaps),A.push(M.numLightProbes),A.push(M.shadowMapType),A.push(M.toneMapping),A.push(M.numClippingPlanes),A.push(M.numClipIntersection),A.push(M.depthPacking)}function S(A,M){l.disableAll(),M.supportsVertexTextures&&l.enable(0),M.instancing&&l.enable(1),M.instancingColor&&l.enable(2),M.instancingMorph&&l.enable(3),M.matcap&&l.enable(4),M.envMap&&l.enable(5),M.normalMapObjectSpace&&l.enable(6),M.normalMapTangentSpace&&l.enable(7),M.clearcoat&&l.enable(8),M.iridescence&&l.enable(9),M.alphaTest&&l.enable(10),M.vertexColors&&l.enable(11),M.vertexAlphas&&l.enable(12),M.vertexUv1s&&l.enable(13),M.vertexUv2s&&l.enable(14),M.vertexUv3s&&l.enable(15),M.vertexTangents&&l.enable(16),M.anisotropy&&l.enable(17),M.alphaHash&&l.enable(18),M.batching&&l.enable(19),M.dispersion&&l.enable(20),M.batchingColor&&l.enable(21),A.push(l.mask),l.disableAll(),M.fog&&l.enable(0),M.useFog&&l.enable(1),M.flatShading&&l.enable(2),M.logarithmicDepthBuffer&&l.enable(3),M.reverseDepthBuffer&&l.enable(4),M.skinning&&l.enable(5),M.morphTargets&&l.enable(6),M.morphNormals&&l.enable(7),M.morphColors&&l.enable(8),M.premultipliedAlpha&&l.enable(9),M.shadowMapEnabled&&l.enable(10),M.doubleSided&&l.enable(11),M.flipSided&&l.enable(12),M.useDepthPacking&&l.enable(13),M.dithering&&l.enable(14),M.transmission&&l.enable(15),M.sheen&&l.enable(16),M.opaque&&l.enable(17),M.pointsUvs&&l.enable(18),M.decodeVideoTexture&&l.enable(19),M.decodeVideoTextureEmissive&&l.enable(20),M.alphaToCoverage&&l.enable(21),A.push(l.mask)}function E(A){const M=_[A.type];let P;if(M){const G=un[M];P=Wm.clone(G.uniforms)}else P=A.uniforms;return P}function R(A,M){let P;for(let G=0,i=h.length;G<i;G++){const U=h[G];if(U.cacheKey===M){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Zv(r,M,A,a),h.push(P)),P}function w(A){if(--A.usedTimes===0){const M=h.indexOf(A);h[M]=h[h.length-1],h.pop(),A.destroy()}}function b(A){u.remove(A)}function I(){u.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:I}}function eE(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let l=r.get(o);return l===void 0&&(l={},r.set(o,l)),l}function n(o){r.delete(o)}function s(o,l,u){r.get(o)[l]=u}function a(){r=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function nE(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function cc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function hc(){const r=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(f,d,m,_,g,x){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:x},r[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=x),t++,p}function l(f,d,m,_,g,x){const p=o(f,d,m,_,g,x);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function u(f,d,m,_,g,x){const p=o(f,d,m,_,g,x);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||nE),n.length>1&&n.sort(d||cc),s.length>1&&s.sort(d||cc)}function h(){for(let f=t,d=r.length;f<d;f++){const m=r[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:l,unshift:u,finish:h,sort:c}}function iE(){let r=new WeakMap;function t(n,s){const a=r.get(n);let o;return a===void 0?(o=new hc,r.set(n,[o])):s>=a.length?(o=new hc,a.push(o)):o=a[s],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function rE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new At};break;case"SpotLight":e={position:new B,direction:new B,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function sE(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let aE=0;function oE(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function lE(r){const t=new rE,e=sE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const s=new B,a=new Ft,o=new Ft;function l(c){let h=0,f=0,d=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let m=0,_=0,g=0,x=0,p=0,T=0,S=0,E=0,R=0,w=0,b=0;c.sort(oE);for(let A=0,M=c.length;A<M;A++){const P=c[A],G=P.color,i=P.intensity,U=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*i,f+=G.g*i,d+=G.b*i;else if(P.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(P.sh.coefficients[O],i);b++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=P.shadow.matrix,T++}n.directional[m]=O,m++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(G).multiplyScalar(i),O.distance=U,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,n.spot[g]=O;const Y=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Y.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=Y.matrix,P.castShadow){const z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=W,E++}g++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(G).multiplyScalar(i),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=O,x++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const Y=P.shadow,z=e.get(P);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[_]=z,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=O,_++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(i),O.groundColor.copy(P.groundColor).multiplyScalar(i),n.hemi[p]=O,p++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==x||I.hemiLength!==p||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==E||I.numSpotMaps!==R||I.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=x,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=E+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,I.directionalLength=m,I.pointLength=_,I.spotLength=g,I.rectAreaLength=x,I.hemiLength=p,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=E,I.numSpotMaps=R,I.numLightProbes=b,n.version=aE++)}function u(c,h){let f=0,d=0,m=0,_=0,g=0;const x=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),f++}else if(S.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),m++}else if(S.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),o.identity(),a.copy(S.matrixWorld),a.premultiply(x),o.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(x),d++}else if(S.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(x),g++}}}return{setup:l,setupView:u,state:n}}function fc(r){const t=new lE(r),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function uE(r){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new fc(r),t.set(s,[l])):a>=o.length?(l=new fc(r),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const cE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fE(r,t,e){let n=new hl;const s=new Dt,a=new Dt,o=new jt,l=new l0({depthPacking:$p}),u=new u0,c={},h=e.maxTextureSize,f={[In]:Oe,[Oe]:In,[hn]:hn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:cE,fragmentShader:hE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new gn;_.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new We(_,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(w,b,I){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;const A=r.getRenderTarget(),M=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Qn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const i=p!==bn&&this.type===bn,U=p===bn&&this.type!==bn;for(let W=0,O=w.length;W<O;W++){const Y=w[W],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const nt=z.getFrameExtents();if(s.multiply(nt),a.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,z.mapSize.y=a.y)),z.map===null||i===!0||U===!0){const gt=this.type!==bn?{minFilter:Be,magFilter:Be}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(s.x,s.y,gt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const ct=z.getViewportCount();for(let gt=0;gt<ct;gt++){const Tt=z.getViewport(gt);o.set(a.x*Tt.x,a.y*Tt.y,a.x*Tt.z,a.y*Tt.w),G.viewport(o),z.updateMatrices(Y,gt),n=z.getFrustum(),E(b,I,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===bn&&T(z,I),z.needsUpdate=!1}p=this.type,x.needsUpdate=!1,r.setRenderTarget(A,M,P)};function T(w,b){const I=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(b,null,I,d,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(b,null,I,m,g,null)}function S(w,b,I,A){let M=null;const P=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?u:l,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=M.uuid,i=b.uuid;let U=c[G];U===void 0&&(U={},c[G]=U);let W=U[i];W===void 0&&(W=M.clone(),U[i]=W,b.addEventListener("dispose",R)),M=W}if(M.visible=b.visible,M.wireframe=b.wireframe,A===bn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=r.properties.get(M);G.light=I}return M}function E(w,b,I,A,M){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const i=t.update(w),U=w.material;if(Array.isArray(U)){const W=i.groups;for(let O=0,Y=W.length;O<Y;O++){const z=W[O],nt=U[z.materialIndex];if(nt&&nt.visible){const ct=S(w,nt,A,M);w.onBeforeShadow(r,w,b,I,i,ct,z),r.renderBufferDirect(I,null,i,ct,w,z),w.onAfterShadow(r,w,b,I,i,ct,z)}}}else if(U.visible){const W=S(w,U,A,M);w.onBeforeShadow(r,w,b,I,i,W,null),r.renderBufferDirect(I,null,i,W,w,null),w.onAfterShadow(r,w,b,I,i,W,null)}}const G=w.children;for(let i=0,U=G.length;i<U;i++)E(G[i],b,I,A,M)}function R(w){w.target.removeEventListener("dispose",R);for(const I in c){const A=c[I],M=w.target.uuid;M in A&&(A[M].dispose(),delete A[M])}}}const dE={[Ka]:Za,[$a]:to,[Ja]:eo,[nr]:Qa,[Za]:Ka,[to]:$a,[eo]:Ja,[Qa]:nr};function pE(r,t){function e(){let L=!1;const rt=new jt;let X=null;const Z=new jt(0,0,0,0);return{setMask:function(ut){X!==ut&&!L&&(r.colorMask(ut,ut,ut,ut),X=ut)},setLocked:function(ut){L=ut},setClear:function(ut,lt,Bt,ce,Te){Te===!0&&(ut*=ce,lt*=ce,Bt*=ce),rt.set(ut,lt,Bt,ce),Z.equals(rt)===!1&&(r.clearColor(ut,lt,Bt,ce),Z.copy(rt))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,X=null,Z=null,ut=null;return{setReversed:function(lt){if(rt!==lt){const Bt=t.get("EXT_clip_control");rt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ut;ut=null,this.setClear(ce)}rt=lt},getReversed:function(){return rt},setTest:function(lt){lt?at(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(lt){X!==lt&&!L&&(r.depthMask(lt),X=lt)},setFunc:function(lt){if(rt&&(lt=dE[lt]),Z!==lt){switch(lt){case Ka:r.depthFunc(r.NEVER);break;case Za:r.depthFunc(r.ALWAYS);break;case $a:r.depthFunc(r.LESS);break;case nr:r.depthFunc(r.LEQUAL);break;case Ja:r.depthFunc(r.EQUAL);break;case Qa:r.depthFunc(r.GEQUAL);break;case to:r.depthFunc(r.GREATER);break;case eo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Z=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ut!==lt&&(rt&&(lt=1-lt),r.clearDepth(lt),ut=lt)},reset:function(){L=!1,X=null,Z=null,ut=null,rt=!1}}}function s(){let L=!1,rt=null,X=null,Z=null,ut=null,lt=null,Bt=null,ce=null,Te=null;return{setTest:function($t){L||($t?at(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function($t){rt!==$t&&!L&&(r.stencilMask($t),rt=$t)},setFunc:function($t,Je,En){(X!==$t||Z!==Je||ut!==En)&&(r.stencilFunc($t,Je,En),X=$t,Z=Je,ut=En)},setOp:function($t,Je,En){(lt!==$t||Bt!==Je||ce!==En)&&(r.stencilOp($t,Je,En),lt=$t,Bt=Je,ce=En)},setLocked:function($t){L=$t},setClear:function($t){Te!==$t&&(r.clearStencil($t),Te=$t)},reset:function(){L=!1,rt=null,X=null,Z=null,ut=null,lt=null,Bt=null,ce=null,Te=null}}}const a=new e,o=new n,l=new s,u=new WeakMap,c=new WeakMap;let h={},f={},d=new WeakMap,m=[],_=null,g=!1,x=null,p=null,T=null,S=null,E=null,R=null,w=null,b=new At(0,0,0),I=0,A=!1,M=null,P=null,G=null,i=null,U=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=Y>=2);let nt=null,ct={};const gt=r.getParameter(r.SCISSOR_BOX),Tt=r.getParameter(r.VIEWPORT),ie=new jt().fromArray(gt),j=new jt().fromArray(Tt);function tt(L,rt,X,Z){const ut=new Uint8Array(4),lt=r.createTexture();r.bindTexture(L,lt),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<X;Bt++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,Z,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(rt+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return lt}const xt={};xt[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),at(r.DEPTH_TEST),o.setFunc(nr),zt(!1),Ht(Kl),at(r.CULL_FACE),D(Qn);function at(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function St(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function qt(L,rt){return f[L]!==rt?(r.bindFramebuffer(L,rt),f[L]=rt,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=rt),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function bt(L,rt){let X=m,Z=!1;if(L){X=d.get(rt),X===void 0&&(X=[],d.set(rt,X));const ut=L.textures;if(X.length!==ut.length||X[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Bt=ut.length;lt<Bt;lt++)X[lt]=r.COLOR_ATTACHMENT0+lt;X.length=ut.length,Z=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,Z=!0);Z&&r.drawBuffers(X)}function fe(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const le={[di]:r.FUNC_ADD,[yp]:r.FUNC_SUBTRACT,[Mp]:r.FUNC_REVERSE_SUBTRACT};le[Sp]=r.MIN,le[Ap]=r.MAX;const kt={[Tp]:r.ZERO,[Cp]:r.ONE,[bp]:r.SRC_COLOR,[qa]:r.SRC_ALPHA,[Lp]:r.SRC_ALPHA_SATURATE,[Pp]:r.DST_COLOR,[Rp]:r.DST_ALPHA,[wp]:r.ONE_MINUS_SRC_COLOR,[ja]:r.ONE_MINUS_SRC_ALPHA,[Bp]:r.ONE_MINUS_DST_COLOR,[Dp]:r.ONE_MINUS_DST_ALPHA,[Fp]:r.CONSTANT_COLOR,[Ip]:r.ONE_MINUS_CONSTANT_COLOR,[Np]:r.CONSTANT_ALPHA,[Up]:r.ONE_MINUS_CONSTANT_ALPHA};function D(L,rt,X,Z,ut,lt,Bt,ce,Te,$t){if(L===Qn){g===!0&&(St(r.BLEND),g=!1);return}if(g===!1&&(at(r.BLEND),g=!0),L!==Ep){if(L!==x||$t!==A){if((p!==di||E!==di)&&(r.blendEquation(r.FUNC_ADD),p=di,E=di),$t)switch(L){case $i:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zl:r.blendFunc(r.ONE,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $i:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zl:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,S=null,R=null,w=null,b.set(0,0,0),I=0,x=L,A=$t}return}ut=ut||rt,lt=lt||X,Bt=Bt||Z,(rt!==p||ut!==E)&&(r.blendEquationSeparate(le[rt],le[ut]),p=rt,E=ut),(X!==T||Z!==S||lt!==R||Bt!==w)&&(r.blendFuncSeparate(kt[X],kt[Z],kt[lt],kt[Bt]),T=X,S=Z,R=lt,w=Bt),(ce.equals(b)===!1||Te!==I)&&(r.blendColor(ce.r,ce.g,ce.b,Te),b.copy(ce),I=Te),x=L,A=!1}function Xe(L,rt){L.side===hn?St(r.CULL_FACE):at(r.CULL_FACE);let X=L.side===Oe;rt&&(X=!X),zt(X),L.blending===$i&&L.transparent===!1?D(Qn):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const Z=L.stencilWrite;l.setTest(Z),Z&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){M!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),M=L)}function Ht(L){L!==gp?(at(r.CULL_FACE),L!==P&&(L===Kl?r.cullFace(r.BACK):L===_p?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),P=L}function Et(L){L!==G&&(O&&r.lineWidth(L),G=L)}function ae(L,rt,X){L?(at(r.POLYGON_OFFSET_FILL),(i!==rt||U!==X)&&(r.polygonOffset(rt,X),i=rt,U=X)):St(r.POLYGON_OFFSET_FILL)}function vt(L){L?at(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function C(L){L===void 0&&(L=r.TEXTURE0+W-1),nt!==L&&(r.activeTexture(L),nt=L)}function v(L,rt,X){X===void 0&&(nt===null?X=r.TEXTURE0+W-1:X=nt);let Z=ct[X];Z===void 0&&(Z={type:void 0,texture:void 0},ct[X]=Z),(Z.type!==L||Z.texture!==rt)&&(nt!==X&&(r.activeTexture(X),nt=X),r.bindTexture(L,rt||xt[L]),Z.type=L,Z.texture=rt)}function k(){const L=ct[nt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{r.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{r.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{r.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{r.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{r.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{r.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{r.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{r.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{r.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){ie.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function pt(L){j.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Vt(L,rt){let X=c.get(rt);X===void 0&&(X=new WeakMap,c.set(rt,X));let Z=X.get(L);Z===void 0&&(Z=r.getUniformBlockIndex(rt,L.name),X.set(L,Z))}function It(L,rt){const Z=c.get(rt).get(L);u.get(rt)!==Z&&(r.uniformBlockBinding(rt,Z,L.__bindingPointIndex),u.set(rt,Z))}function se(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,ct={},f={},d=new WeakMap,m=[],_=null,g=!1,x=null,p=null,T=null,S=null,E=null,R=null,w=null,b=new At(0,0,0),I=0,A=!1,M=null,P=null,G=null,i=null,U=null,ie.set(0,0,r.canvas.width,r.canvas.height),j.set(0,0,r.canvas.width,r.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:at,disable:St,bindFramebuffer:qt,drawBuffers:bt,useProgram:fe,setBlending:D,setMaterial:Xe,setFlipSided:zt,setCullFace:Ht,setLineWidth:Et,setPolygonOffset:ae,setScissorTest:vt,activeTexture:C,bindTexture:v,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:dt,texImage3D:Ct,updateUBOMapping:Vt,uniformBlockBinding:It,texStorage2D:Wt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:_t,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:wt,viewport:pt,reset:se}}function mE(r,t,e,n,s,a,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return m?new OffscreenCanvas(C,v):Or("canvas")}function g(C,v,k){let K=1;const $=vt(C);if(($.width>k||$.height>k)&&(K=k/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor(K*$.width),_t=Math.floor(K*$.height);f===void 0&&(f=_(q,_t));const ot=v?_(q,_t):f;return ot.width=q,ot.height=_t,ot.getContext("2d").drawImage(C,0,0,q,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+_t+")."),ot}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function x(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(C,v,k,K,$=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=v;if(v===r.RED&&(k===r.FLOAT&&(q=r.R32F),k===r.HALF_FLOAT&&(q=r.R16F),k===r.UNSIGNED_BYTE&&(q=r.R8)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.R8UI),k===r.UNSIGNED_SHORT&&(q=r.R16UI),k===r.UNSIGNED_INT&&(q=r.R32UI),k===r.BYTE&&(q=r.R8I),k===r.SHORT&&(q=r.R16I),k===r.INT&&(q=r.R32I)),v===r.RG&&(k===r.FLOAT&&(q=r.RG32F),k===r.HALF_FLOAT&&(q=r.RG16F),k===r.UNSIGNED_BYTE&&(q=r.RG8)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RG8UI),k===r.UNSIGNED_SHORT&&(q=r.RG16UI),k===r.UNSIGNED_INT&&(q=r.RG32UI),k===r.BYTE&&(q=r.RG8I),k===r.SHORT&&(q=r.RG16I),k===r.INT&&(q=r.RG32I)),v===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(q=r.RGB16UI),k===r.UNSIGNED_INT&&(q=r.RGB32UI),k===r.BYTE&&(q=r.RGB8I),k===r.SHORT&&(q=r.RGB16I),k===r.INT&&(q=r.RGB32I)),v===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),k===r.UNSIGNED_INT&&(q=r.RGBA32UI),k===r.BYTE&&(q=r.RGBA8I),k===r.SHORT&&(q=r.RGBA16I),k===r.INT&&(q=r.RGBA32I)),v===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),v===r.RGBA){const _t=$?Us:Gt.getTransfer(K);k===r.FLOAT&&(q=r.RGBA32F),k===r.HALF_FLOAT&&(q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(q=_t===te?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function E(C,v){let k;return C?v===null||v===yi||v===ar?k=r.DEPTH24_STENCIL8:v===an?k=r.DEPTH32F_STENCIL8:v===Ir&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===yi||v===ar?k=r.DEPTH_COMPONENT24:v===an?k=r.DEPTH_COMPONENT32F:v===Ir&&(k=r.DEPTH_COMPONENT16),k}function R(C,v){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function w(C){const v=C.target;v.removeEventListener("dispose",w),I(v),v.isVideoTexture&&h.delete(v)}function b(C){const v=C.target;v.removeEventListener("dispose",b),M(v)}function I(C){const v=n.get(C);if(v.__webglInit===void 0)return;const k=C.source,K=d.get(k);if(K){const $=K[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(C),Object.keys(K).length===0&&d.delete(k)}n.remove(C)}function A(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const k=C.source,K=d.get(k);delete K[v.__cacheKey],o.memory.textures--}function M(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let $=0;$<v.__webglFramebuffer[K].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[K][$]);else r.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)r.deleteFramebuffer(v.__webglFramebuffer[K]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,$=k.length;K<$;K++){const q=n.get(k[K]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(C)}let P=0;function G(){P=0}function i(){const C=P;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function U(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const k=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,v);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function O(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,v);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function Y(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,v);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function z(C,v){const k=n.get(C);if(C.version>0&&k.__version!==C.version){tt(k,C,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}const nt={[sr]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[Ns]:r.MIRRORED_REPEAT},ct={[Be]:r.NEAREST,[Mh]:r.NEAREST_MIPMAP_NEAREST,[wr]:r.NEAREST_MIPMAP_LINEAR,[Ge]:r.LINEAR,[Cs]:r.LINEAR_MIPMAP_NEAREST,[Rn]:r.LINEAR_MIPMAP_LINEAR},gt={[Qp]:r.NEVER,[sm]:r.ALWAYS,[tm]:r.LESS,[Fh]:r.LEQUAL,[em]:r.EQUAL,[rm]:r.GEQUAL,[nm]:r.GREATER,[im]:r.NOTEQUAL};function Tt(C,v){if(v.type===an&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===Cs||v.magFilter===wr||v.magFilter===Rn||v.minFilter===Ge||v.minFilter===Cs||v.minFilter===wr||v.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ct[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Be||v.minFilter!==wr&&v.minFilter!==Rn||v.type===an&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ie(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",w));const K=v.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const q=U(v);if(q!==C.__cacheKey){$[q]===void 0&&($[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),$[q].usedTimes++;const _t=$[C.__cacheKey];_t!==void 0&&($[C.__cacheKey].usedTimes--,_t.usedTimes===0&&A(v)),C.__cacheKey=q,C.__webglTexture=$[q].texture}return k}function j(C,v,k){let K=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=r.TEXTURE_3D);const $=ie(C,v),q=v.source;e.bindTexture(K,C.__webglTexture,r.TEXTURE0+k);const _t=n.get(q);if(q.version!==_t.__version||$===!0){e.activeTexture(r.TEXTURE0+k);const ot=Gt.getPrimaries(Gt.workingColorSpace),ft=v.colorSpace===jn?null:Gt.getPrimaries(v.colorSpace),Wt=v.colorSpace===jn||ot===ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Q=g(v.image,!1,s.maxTextureSize);Q=ae(v,Q);const dt=a.convert(v.format,v.colorSpace),Ct=a.convert(v.type);let wt=S(v.internalFormat,dt,Ct,v.colorSpace,v.isVideoTexture);Tt(K,v);let pt;const Vt=v.mipmaps,It=v.isVideoTexture!==!0,se=_t.__version===void 0||$===!0,L=q.dataReady,rt=R(v,Q);if(v.isDepthTexture)wt=E(v.format===or,v.type),se&&(It?e.texStorage2D(r.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,wt,Q.width,Q.height,0,dt,Ct,null));else if(v.isDataTexture)if(Vt.length>0){It&&se&&e.texStorage2D(r.TEXTURE_2D,rt,wt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,Ct,pt.data):e.texImage2D(r.TEXTURE_2D,X,wt,pt.width,pt.height,0,dt,Ct,pt.data);v.generateMipmaps=!1}else It?(se&&e.texStorage2D(r.TEXTURE_2D,rt,wt,Q.width,Q.height),L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Ct,Q.data)):e.texImage2D(r.TEXTURE_2D,0,wt,Q.width,Q.height,0,dt,Ct,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){It&&se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,wt,Vt[0].width,Vt[0].height,Q.depth);for(let X=0,Z=Vt.length;X<Z;X++)if(pt=Vt[X],v.format!==Ze)if(dt!==null)if(It){if(L)if(v.layerUpdates.size>0){const ut=Vu(pt.width,pt.height,v.format,v.type);for(const lt of v.layerUpdates){const Bt=pt.data.subarray(lt*ut/pt.data.BYTES_PER_ELEMENT,(lt+1)*ut/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,lt,pt.width,pt.height,1,dt,Bt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,wt,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?L&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,Ct,pt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,X,wt,pt.width,pt.height,Q.depth,0,dt,Ct,pt.data)}else{It&&se&&e.texStorage2D(r.TEXTURE_2D,rt,wt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],v.format!==Ze?dt!==null?It?L&&e.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(r.TEXTURE_2D,X,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,Ct,pt.data):e.texImage2D(r.TEXTURE_2D,X,wt,pt.width,pt.height,0,dt,Ct,pt.data)}else if(v.isDataArrayTexture)if(It){if(se&&e.texStorage3D(r.TEXTURE_2D_ARRAY,rt,wt,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const X=Vu(Q.width,Q.height,v.format,v.type);for(const Z of v.layerUpdates){const ut=Q.data.subarray(Z*X/Q.data.BYTES_PER_ELEMENT,(Z+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,dt,Ct,ut)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Ct,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,dt,Ct,Q.data);else if(v.isData3DTexture)It?(se&&e.texStorage3D(r.TEXTURE_3D,rt,wt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Ct,Q.data)):e.texImage3D(r.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,dt,Ct,Q.data);else if(v.isFramebufferTexture){if(se)if(It)e.texStorage2D(r.TEXTURE_2D,rt,wt,Q.width,Q.height);else{let X=Q.width,Z=Q.height;for(let ut=0;ut<rt;ut++)e.texImage2D(r.TEXTURE_2D,ut,wt,X,Z,0,dt,Ct,null),X>>=1,Z>>=1}}else if(Vt.length>0){if(It&&se){const X=vt(Vt[0]);e.texStorage2D(r.TEXTURE_2D,rt,wt,X.width,X.height)}for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],It?L&&e.texSubImage2D(r.TEXTURE_2D,X,0,0,dt,Ct,pt):e.texImage2D(r.TEXTURE_2D,X,wt,dt,Ct,pt);v.generateMipmaps=!1}else if(It){if(se){const X=vt(Q);e.texStorage2D(r.TEXTURE_2D,rt,wt,X.width,X.height)}L&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,Ct,Q)}else e.texImage2D(r.TEXTURE_2D,0,wt,dt,Ct,Q);x(v)&&p(K),_t.__version=q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function tt(C,v,k){if(v.image.length!==6)return;const K=ie(C,v),$=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const q=n.get($);if($.version!==q.__version||K===!0){e.activeTexture(r.TEXTURE0+k);const _t=Gt.getPrimaries(Gt.workingColorSpace),ot=v.colorSpace===jn?null:Gt.getPrimaries(v.colorSpace),ft=v.colorSpace===jn||_t===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!Wt&&!Q?dt[Z]=g(v.image[Z],!0,s.maxCubemapSize):dt[Z]=Q?v.image[Z].image:v.image[Z],dt[Z]=ae(v,dt[Z]);const Ct=dt[0],wt=a.convert(v.format,v.colorSpace),pt=a.convert(v.type),Vt=S(v.internalFormat,wt,pt,v.colorSpace),It=v.isVideoTexture!==!0,se=q.__version===void 0||K===!0,L=$.dataReady;let rt=R(v,Ct);Tt(r.TEXTURE_CUBE_MAP,v);let X;if(Wt){It&&se&&e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Vt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){X=dt[Z].mipmaps;for(let ut=0;ut<X.length;ut++){const lt=X[ut];v.format!==Ze?wt!==null?It?L&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,wt,lt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Vt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,0,0,lt.width,lt.height,wt,pt,lt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut,Vt,lt.width,lt.height,0,wt,pt,lt.data)}}}else{if(X=v.mipmaps,It&&se){X.length>0&&rt++;const Z=vt(dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,wt,pt,dt[Z].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,dt[Z].width,dt[Z].height,0,wt,pt,dt[Z].data);for(let ut=0;ut<X.length;ut++){const Bt=X[ut].image[Z].image;It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,Bt.width,Bt.height,wt,pt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Vt,Bt.width,Bt.height,0,wt,pt,Bt.data)}}else{It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,pt,dt[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,wt,pt,dt[Z]);for(let ut=0;ut<X.length;ut++){const lt=X[ut];It?L&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,0,0,wt,pt,lt.image[Z]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ut+1,Vt,wt,pt,lt.image[Z])}}}x(v)&&p(r.TEXTURE_CUBE_MAP),q.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function xt(C,v,k,K,$,q){const _t=a.convert(k.format,k.colorSpace),ot=a.convert(k.type),ft=S(k.internalFormat,_t,ot,k.colorSpace),Wt=n.get(v),Q=n.get(k);if(Q.__renderTarget=v,!Wt.__hasExternalTextures){const dt=Math.max(1,v.width>>q),Ct=Math.max(1,v.height>>q);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,q,ft,dt,Ct,v.depth,0,_t,ot,null):e.texImage2D($,q,ft,dt,Ct,0,_t,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,$,Q.__webglTexture,0,zt(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,$,Q.__webglTexture,q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function at(C,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const K=v.depthTexture,$=K&&K.isDepthTexture?K.type:null,q=E(v.stencilBuffer,$),_t=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=zt(v);Ht(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,q,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,q,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_t,r.RENDERBUFFER,C)}else{const K=v.textures;for(let $=0;$<K.length;$++){const q=K[$],_t=a.convert(q.format,q.colorSpace),ot=a.convert(q.type),ft=S(q.internalFormat,_t,ot,q.colorSpace),Wt=zt(v);k&&Ht(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,ft,v.width,v.height):Ht(v)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,ft,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ft,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const $=K.__webglTexture,q=zt(v);if(v.depthTexture.format===Ji)Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(v.depthTexture.format===or)Ht(v)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function qt(C){const v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=K}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");St(v.__webglFramebuffer,C)}else if(k){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=r.createRenderbuffer(),at(v.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),at(v.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,$)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(C,v,k){const K=n.get(C);v!==void 0&&xt(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&qt(C)}function fe(C){const v=C.texture,k=n.get(C),K=n.get(v);C.addEventListener("dispose",b);const $=C.textures,q=C.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=v.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let ft=0;ft<v.mipmaps.length;ft++)k.__webglFramebuffer[ot][ft]=r.createFramebuffer()}else k.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)k.__webglFramebuffer[ot]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(_t)for(let ot=0,ft=$.length;ot<ft;ot++){const Wt=n.get($[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&Ht(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<$.length;ot++){const ft=$[ot];k.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);const Wt=a.convert(ft.format,ft.colorSpace),Q=a.convert(ft.type),dt=S(ft.internalFormat,Wt,Q,ft.colorSpace,C.isXRRenderTarget===!0),Ct=zt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,dt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),at(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Tt(r.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)xt(k.__webglFramebuffer[ot][ft],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else xt(k.__webglFramebuffer[ot],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(v)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let ot=0,ft=$.length;ot<ft;ot++){const Wt=$[ot],Q=n.get(Wt);e.bindTexture(r.TEXTURE_2D,Q.__webglTexture),Tt(r.TEXTURE_2D,Wt),xt(k.__webglFramebuffer,C,Wt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),x(Wt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,K.__webglTexture),Tt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)xt(k.__webglFramebuffer[ft],C,v,r.COLOR_ATTACHMENT0,ot,ft);else xt(k.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,ot,0);x(v)&&p(ot),e.unbindTexture()}C.depthBuffer&&qt(C)}function le(C){const v=C.textures;for(let k=0,K=v.length;k<K;k++){const $=v[k];if(x($)){const q=T(C),_t=n.get($).__webglTexture;e.bindTexture(q,_t),p(q),e.unbindTexture()}}}const kt=[],D=[];function Xe(C){if(C.samples>0){if(Ht(C)===!1){const v=C.textures,k=C.width,K=C.height;let $=r.COLOR_BUFFER_BIT;const q=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=n.get(C),ot=v.length>1;if(ot)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Wt=n.get(v[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Wt,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,$,r.NEAREST),u===!0&&(kt.length=0,D.length=0,kt.push(r.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(kt.push(q),D.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const Wt=n.get(v[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,_t.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,Wt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&u){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Ht(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Et(C){const v=o.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ae(C,v){const k=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Fe&&k!==jn&&(Gt.getTransfer(k)===te?(K!==Ze||$!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=i,this.resetTextureUnits=G,this.setTexture2D=W,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=bt,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ht}function xE(r,t){function e(n,s=jn){let a;const o=Gt.getTransfer(s);if(n===Nn)return r.UNSIGNED_BYTE;if(n===el)return r.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return r.BYTE;if(n===Ah)return r.SHORT;if(n===Ir)return r.UNSIGNED_SHORT;if(n===tl)return r.INT;if(n===yi)return r.UNSIGNED_INT;if(n===an)return r.FLOAT;if(n===kr)return r.HALF_FLOAT;if(n===Ch)return r.ALPHA;if(n===bh)return r.RGB;if(n===Ze)return r.RGBA;if(n===wh)return r.LUMINANCE;if(n===Rh)return r.LUMINANCE_ALPHA;if(n===Ji)return r.DEPTH_COMPONENT;if(n===or)return r.DEPTH_STENCIL;if(n===il)return r.RED;if(n===rl)return r.RED_INTEGER;if(n===Dh)return r.RG;if(n===sl)return r.RG_INTEGER;if(n===al)return r.RGBA_INTEGER;if(n===bs||n===ws||n===Rs||n===Ds)if(o===te)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===bs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===bs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ds)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===ao||n===oo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ro)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===uo||n===co)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===lo||n===uo)return o===te?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===co)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===xo||n===go||n===_o||n===vo||n===Eo||n===yo||n===Mo||n===So||n===Ao||n===To)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ho)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Eo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return o===te?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Co||n===bo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Ps)return o===te?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Co)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ph||n===wo||n===Ro||n===Do)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ps)return a.COMPRESSED_RED_RGTC1_EXT;if(n===wo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const gE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_E=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Me,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ei({vertexShader:gE,fragmentShader:_E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends Ci{constructor(t,e){super();const n=this;let s=null,a=1,o=null,l="local-floor",u=1,c=null,h=null,f=null,d=null,m=null,_=null;const g=new vE,x=e.getContextAttributes();let p=null,T=null;const S=[],E=[],R=new Dt;let w=null;const b=new Pe;b.viewport=new jt;const I=new Pe;I.viewport=new jt;const A=[b,I],M=new P0;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let tt=S[j];return tt===void 0&&(tt=new Ca,S[j]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(j){let tt=S[j];return tt===void 0&&(tt=new Ca,S[j]=tt),tt.getGripSpace()},this.getHand=function(j){let tt=S[j];return tt===void 0&&(tt=new Ca,S[j]=tt),tt.getHandSpace()};function i(j){const tt=E.indexOf(j.inputSource);if(tt===-1)return;const xt=S[tt];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||o),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){s.removeEventListener("select",i),s.removeEventListener("selectstart",i),s.removeEventListener("selectend",i),s.removeEventListener("squeeze",i),s.removeEventListener("squeezestart",i),s.removeEventListener("squeezeend",i),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let j=0;j<S.length;j++){const tt=E[j];tt!==null&&(E[j]=null,S[j].disconnect(tt))}P=null,G=null,g.reset(),t.setRenderTarget(p),m=null,d=null,f=null,s=null,T=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",i),s.addEventListener("selectstart",i),s.addEventListener("selectend",i),s.addEventListener("squeeze",i),s.addEventListener("squeezestart",i),s.addEventListener("squeezeend",i),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,at=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=x.stencil?or:Ji,at=x.stencil?ar:yi);const qt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:a};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Mi(d.textureWidth,d.textureHeight,{format:Ze,type:Nn,depthTexture:new Kh(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Mi(m.framebufferWidth,m.framebufferHeight,{format:Ze,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await s.requestReferenceSpace(l),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(j){for(let tt=0;tt<j.removed.length;tt++){const xt=j.removed[tt],at=E.indexOf(xt);at>=0&&(E[at]=null,S[at].disconnect(xt))}for(let tt=0;tt<j.added.length;tt++){const xt=j.added[tt];let at=E.indexOf(xt);if(at===-1){for(let qt=0;qt<S.length;qt++)if(qt>=E.length){E.push(xt),at=qt;break}else if(E[qt]===null){E[qt]=xt,at=qt;break}if(at===-1)break}const St=S[at];St&&St.connect(xt)}}const O=new B,Y=new B;function z(j,tt,xt){O.setFromMatrixPosition(tt.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const at=O.distanceTo(Y),St=tt.projectionMatrix.elements,qt=xt.projectionMatrix.elements,bt=St[14]/(St[10]-1),fe=St[14]/(St[10]+1),le=(St[9]+1)/St[5],kt=(St[9]-1)/St[5],D=(St[8]-1)/St[0],Xe=(qt[8]+1)/qt[0],zt=bt*D,Ht=bt*Xe,Et=at/(-D+Xe),ae=Et*-D;if(tt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ae),j.translateZ(Et),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),St[10]===-1)j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=bt+Et,C=fe+Et,v=zt-ae,k=Ht+(at-ae),K=le*fe/C*vt,$=kt*fe/C*vt;j.projectionMatrix.makePerspective(v,k,K,$,vt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,tt){tt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(tt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let tt=j.near,xt=j.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),M.near=I.near=b.near=tt,M.far=I.far=b.far=xt,(P!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,G=M.far),b.layers.mask=j.layers.mask|2,I.layers.mask=j.layers.mask|4,M.layers.mask=b.layers.mask|I.layers.mask;const at=j.parent,St=M.cameras;nt(M,at);for(let qt=0;qt<St.length;qt++)nt(St[qt],at);St.length===2?z(M,b,I):M.projectionMatrix.copy(b.projectionMatrix),ct(j,M,at)};function ct(j,tt,xt){xt===null?j.matrix.copy(tt.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(tt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(tt.projectionMatrix),j.projectionMatrixInverse.copy(tt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(j){u=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let gt=null;function Tt(j,tt){if(h=tt.getViewerPose(c||o),_=tt,h!==null){const xt=h.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let at=!1;xt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let bt=0;bt<xt.length;bt++){const fe=xt[bt];let le=null;if(m!==null)le=m.getViewport(fe);else{const D=f.getViewSubImage(d,fe);le=D.viewport,bt===0&&(t.setRenderTargetTextures(T,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(T))}let kt=A[bt];kt===void 0&&(kt=new Pe,kt.layers.enable(bt),kt.viewport=new jt,A[bt]=kt),kt.matrix.fromArray(fe.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(fe.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(le.x,le.y,le.width,le.height),bt===0&&(M.matrix.copy(kt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(kt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const bt=f.getDepthInformation(xt[0]);bt&&bt.isValid&&bt.texture&&g.init(t,bt,s.renderState)}}for(let xt=0;xt<S.length;xt++){const at=E[xt],St=S[xt];at!==null&&St!==void 0&&St.update(at,tt,c||o)}gt&&gt(j,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ie=new tf;ie.setAnimationLoop(Tt),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const ui=new mn,yE=new Ft;function ME(r,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Vh(r)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,T,S,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(x,p):p.isMeshToonMaterial?(a(x,p),f(x,p)):p.isMeshPhongMaterial?(a(x,p),h(x,p)):p.isMeshStandardMaterial?(a(x,p),d(x,p),p.isMeshPhysicalMaterial&&m(x,p,E)):p.isMeshMatcapMaterial?(a(x,p),_(x,p)):p.isMeshDepthMaterial?a(x,p):p.isMeshDistanceMaterial?(a(x,p),g(x,p)):p.isMeshNormalMaterial?a(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&l(x,p)):p.isPointsMaterial?u(x,p,T,S):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===Oe&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===Oe&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,E=T.envMapRotation;S&&(x.envMap.value=S,ui.copy(E),ui.x*=-1,ui.y*=-1,ui.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),x.envMapRotation.value.setFromMatrix4(yE.makeRotationFromEuler(ui)),x.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function l(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function u(x,p,T,S){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*T,x.scale.value=S*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function m(x,p,T){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Oe&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const T=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function SE(r,t,e,n){let s={},a={},o=[];const l=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,S){const E=S.program;n.uniformBlockBinding(T,E)}function c(T,S){let E=s[T.id];E===void 0&&(_(T),E=h(T),s[T.id]=E,T.addEventListener("dispose",x));const R=S.program;n.updateUBOMapping(T,R);const w=t.render.frame;a[T.id]!==w&&(d(T),a[T.id]=w)}function h(T){const S=f();T.__bindingPointIndex=S;const E=r.createBuffer(),R=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,R,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,E),E}function f(){for(let T=0;T<l;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],E=T.uniforms,R=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,b=E.length;w<b;w++){const I=Array.isArray(E[w])?E[w]:[E[w]];for(let A=0,M=I.length;A<M;A++){const P=I[A];if(m(P,w,A,R)===!0){const G=P.__offset,i=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let W=0;W<i.length;W++){const O=i[W],Y=g(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,G+U,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,U),U+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(T,S,E,R){const w=T.value,b=S+"_"+E;if(R[b]===void 0)return typeof w=="number"||typeof w=="boolean"?R[b]=w:R[b]=w.clone(),!0;{const I=R[b];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[b]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function _(T){const S=T.uniforms;let E=0;const R=16;for(let b=0,I=S.length;b<I;b++){const A=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,P=A.length;M<P;M++){const G=A[M],i=Array.isArray(G.value)?G.value:[G.value];for(let U=0,W=i.length;U<W;U++){const O=i[U],Y=g(O),z=E%R,nt=z%Y.boundary,ct=z+nt;E+=nt,ct!==0&&R-ct<Y.storage&&(E+=R-ct),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=Y.storage}}}const w=E%R;return w>0&&(E+=R-w),T.__size=E,T.__cache={},this}function g(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function x(T){const S=T.target;S.removeEventListener("dispose",x);const E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(s[S.id]),delete s[S.id],delete a[S.id]}function p(){for(const T in s)r.deleteBuffer(s[T]);o=[],s={},a={}}return{bind:u,update:c,dispose:p}}class AE{constructor(t={}){const{canvas:e=Mm(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),g=new Int32Array(4);let x=null,p=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this.toneMapping=ti,this.toneMappingExposure=1;const E=this;let R=!1,w=0,b=0,I=null,A=-1,M=null;const P=new jt,G=new jt;let i=null;const U=new At(0);let W=0,O=e.width,Y=e.height,z=1,nt=null,ct=null;const gt=new jt(0,0,O,Y),Tt=new jt(0,0,O,Y);let ie=!1;const j=new hl;let tt=!1,xt=!1;this.transmissionResolutionScale=1;const at=new Ft,St=new Ft,qt=new B,bt=new jt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function kt(){return I===null?z:1}let D=n;function Xe(y,F){return e.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qo}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){const F="webgl2";if(D=Xe(F,y),D===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let zt,Ht,Et,ae,vt,C,v,k,K,$,q,_t,ot,ft,Wt,Q,dt,Ct,wt,pt,Vt,It,se,L;function rt(){zt=new F_(D),zt.init(),It=new xE(D,zt),Ht=new b_(D,zt,t,It),Et=new pE(D,zt),Ht.reverseDepthBuffer&&d&&Et.buffers.depth.setReversed(!0),ae=new U_(D),vt=new eE,C=new mE(D,zt,Et,vt,Ht,It,ae),v=new R_(E),k=new L_(E),K=new G0(D),se=new T_(D,K),$=new I_(D,K,ae,se),q=new k_(D,$,K,ae),wt=new O_(D,Ht,C),Q=new w_(vt),_t=new tE(E,v,k,zt,Ht,se,Q),ot=new ME(E,vt),ft=new iE,Wt=new uE(zt),Ct=new A_(E,v,k,Et,q,m,u),dt=new fE(E,q,Ht),L=new SE(D,ae,Ht,Et),pt=new C_(D,zt,ae),Vt=new N_(D,zt,ae),ae.programs=_t.programs,E.capabilities=Ht,E.extensions=zt,E.properties=vt,E.renderLists=ft,E.shadowMap=dt,E.state=Et,E.info=ae}rt();const X=new EE(E,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=zt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=zt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(y){y!==void 0&&(z=y,this.setSize(O,Y,!1))},this.getSize=function(y){return y.set(O,Y)},this.setSize=function(y,F,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,Y=F,e.width=Math.floor(y*z),e.height=Math.floor(F*z),H===!0&&(e.style.width=y+"px",e.style.height=F+"px"),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(O*z,Y*z).floor()},this.setDrawingBufferSize=function(y,F,H){O=y,Y=F,z=H,e.width=Math.floor(y*H),e.height=Math.floor(F*H),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(gt)},this.setViewport=function(y,F,H,V){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,F,H,V),Et.viewport(P.copy(gt).multiplyScalar(z).round())},this.getScissor=function(y){return y.copy(Tt)},this.setScissor=function(y,F,H,V){y.isVector4?Tt.set(y.x,y.y,y.z,y.w):Tt.set(y,F,H,V),Et.scissor(G.copy(Tt).multiplyScalar(z).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(y){Et.setScissorTest(ie=y)},this.setOpaqueSort=function(y){nt=y},this.setTransparentSort=function(y){ct=y},this.getClearColor=function(y){return y.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,H=!0){let V=0;if(y){let N=!1;if(I!==null){const J=I.texture.format;N=J===al||J===sl||J===rl}if(N){const J=I.texture.type,st=J===Nn||J===yi||J===Ir||J===ar||J===el||J===nl,ht=Ct.getClearColor(),mt=Ct.getClearAlpha(),Rt=ht.r,Pt=ht.g,yt=ht.b;st?(_[0]=Rt,_[1]=Pt,_[2]=yt,_[3]=mt,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Rt,g[1]=Pt,g[2]=yt,g[3]=mt,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}F&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Ct.dispose(),ft.dispose(),Wt.dispose(),vt.dispose(),v.dispose(),k.dispose(),q.dispose(),se.dispose(),L.dispose(),_t.dispose(),X.dispose(),X.removeEventListener("sessionstart",vl),X.removeEventListener("sessionend",El),ni.stop()};function Z(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=ae.autoReset,F=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,N=dt.type;rt(),ae.autoReset=y,dt.enabled=F,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=N}function lt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bt(y){const F=y.target;F.removeEventListener("dispose",Bt),ce(F)}function ce(y){Te(y),vt.remove(y)}function Te(y){const F=vt.get(y).programs;F!==void 0&&(F.forEach(function(H){_t.releaseProgram(H)}),y.isShaderMaterial&&_t.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,H,V,N,J){F===null&&(F=fe);const st=N.isMesh&&N.matrixWorld.determinant()<0,ht=uf(y,F,H,V,N);Et.setMaterial(V,st);let mt=H.index,Rt=1;if(V.wireframe===!0){if(mt=$.getWireframeAttribute(H),mt===void 0)return;Rt=2}const Pt=H.drawRange,yt=H.attributes.position;let Xt=Pt.start*Rt,Kt=(Pt.start+Pt.count)*Rt;J!==null&&(Xt=Math.max(Xt,J.start*Rt),Kt=Math.min(Kt,(J.start+J.count)*Rt)),mt!==null?(Xt=Math.max(Xt,0),Kt=Math.min(Kt,mt.count)):yt!=null&&(Xt=Math.max(Xt,0),Kt=Math.min(Kt,yt.count));const pe=Kt-Xt;if(pe<0||pe===1/0)return;se.setup(N,V,ht,H,mt);let he,Yt=pt;if(mt!==null&&(he=K.get(mt),Yt=Vt,Yt.setIndex(he)),N.isMesh)V.wireframe===!0?(Et.setLineWidth(V.wireframeLinewidth*kt()),Yt.setMode(D.LINES)):Yt.setMode(D.TRIANGLES);else if(N.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*kt()),N.isLineSegments?Yt.setMode(D.LINES):N.isLineLoop?Yt.setMode(D.LINE_LOOP):Yt.setMode(D.LINE_STRIP)}else N.isPoints?Yt.setMode(D.POINTS):N.isSprite&&Yt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Mt=N._multiDrawStarts,Se=N._multiDrawCounts,Zt=N._multiDrawCount,Qe=mt?K.get(mt).bytesPerElement:1,bi=vt.get(V).currentProgram.getUniforms();for(let ze=0;ze<Zt;ze++)bi.setValue(D,"_gl_DrawID",ze),Yt.render(Mt[ze]/Qe,Se[ze])}else if(N.isInstancedMesh)Yt.renderInstances(Xt,pe,N.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,Mt);Yt.renderInstances(Xt,pe,Se)}else Yt.render(Xt,pe)};function $t(y,F,H){y.transparent===!0&&y.side===hn&&y.forceSinglePass===!1?(y.side=Oe,y.needsUpdate=!0,Wr(y,F,H),y.side=In,y.needsUpdate=!0,Wr(y,F,H),y.side=hn):Wr(y,F,H)}this.compile=function(y,F,H=null){H===null&&(H=y),p=Wt.get(H),p.init(F),S.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),y!==H&&y.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ht=J[st];$t(ht,H,N),V.add(ht)}else $t(J,H,N),V.add(J)}),p=S.pop(),V},this.compileAsync=function(y,F,H=null){const V=this.compile(y,F,H);return new Promise(N=>{function J(){if(V.forEach(function(st){vt.get(st).currentProgram.isReady()&&V.delete(st)}),V.size===0){N(y);return}setTimeout(J,10)}zt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Je=null;function En(y){Je&&Je(y)}function vl(){ni.stop()}function El(){ni.start()}const ni=new tf;ni.setAnimationLoop(En),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(y){Je=y,X.setAnimationLoop(y),y===null?ni.stop():ni.start()},X.addEventListener("sessionstart",vl),X.addEventListener("sessionend",El),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,F,I),p=Wt.get(y,S.length),p.init(F),S.push(p),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(St),xt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,xt),x=ft.get(y,T.length),x.init(),T.push(x),X.enabled===!0&&X.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&js(J,F,-1/0,E.sortObjects)}js(y,F,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(nt,ct),le=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,le&&Ct.addToRenderList(x,y),this.info.render.frame++,tt===!0&&Q.beginShadows();const H=p.state.shadowsArray;dt.render(H,y,F),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=x.opaque,N=x.transmissive;if(p.setupLights(),F.isArrayCamera){const J=F.cameras;if(N.length>0)for(let st=0,ht=J.length;st<ht;st++){const mt=J[st];Ml(V,N,y,mt)}le&&Ct.render(y);for(let st=0,ht=J.length;st<ht;st++){const mt=J[st];yl(x,y,mt,mt.viewport)}}else N.length>0&&Ml(V,N,y,F),le&&Ct.render(y),yl(x,y,F);I!==null&&b===0&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(E,y,F),se.resetDefaultState(),A=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&Q.setGlobalState(E.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function js(y,F,H,V){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)H=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||j.intersectsSprite(y)){V&&bt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(St);const st=q.update(y),ht=y.material;ht.visible&&x.push(y,st,ht,H,bt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||j.intersectsObject(y))){const st=q.update(y),ht=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),bt.copy(y.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),bt.copy(st.boundingSphere.center)),bt.applyMatrix4(y.matrixWorld).applyMatrix4(St)),Array.isArray(ht)){const mt=st.groups;for(let Rt=0,Pt=mt.length;Rt<Pt;Rt++){const yt=mt[Rt],Xt=ht[yt.materialIndex];Xt&&Xt.visible&&x.push(y,st,Xt,H,bt.z,yt)}}else ht.visible&&x.push(y,st,ht,H,bt.z,null)}}const J=y.children;for(let st=0,ht=J.length;st<ht;st++)js(J[st],F,H,V)}function yl(y,F,H,V){const N=y.opaque,J=y.transmissive,st=y.transparent;p.setupLightsView(H),tt===!0&&Q.setGlobalState(E.clippingPlanes,H),V&&Et.viewport(P.copy(V)),N.length>0&&Gr(N,F,H),J.length>0&&Gr(J,F,H),st.length>0&&Gr(st,F,H),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ml(y,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Mi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?kr:Nn,minFilter:Rn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const J=p.state.transmissionRenderTarget[V.id],st=V.viewport||P;J.setSize(st.z*E.transmissionResolutionScale,st.w*E.transmissionResolutionScale);const ht=E.getRenderTarget();E.setRenderTarget(J),E.getClearColor(U),W=E.getClearAlpha(),W<1&&E.setClearColor(16777215,.5),E.clear(),le&&Ct.render(H);const mt=E.toneMapping;E.toneMapping=ti;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&Q.setGlobalState(E.clippingPlanes,V),Gr(y,H,V),C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let yt=0,Xt=F.length;yt<Xt;yt++){const Kt=F[yt],pe=Kt.object,he=Kt.geometry,Yt=Kt.material,Mt=Kt.group;if(Yt.side===hn&&pe.layers.test(V.layers)){const Se=Yt.side;Yt.side=Oe,Yt.needsUpdate=!0,Sl(pe,H,V,he,Yt,Mt),Yt.side=Se,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(C.updateMultisampleRenderTarget(J),C.updateRenderTargetMipmap(J))}E.setRenderTarget(ht),E.setClearColor(U,W),Rt!==void 0&&(V.viewport=Rt),E.toneMapping=mt}function Gr(y,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let N=0,J=y.length;N<J;N++){const st=y[N],ht=st.object,mt=st.geometry,Rt=V===null?st.material:V,Pt=st.group;ht.layers.test(H.layers)&&Sl(ht,F,H,mt,Rt,Pt)}}function Sl(y,F,H,V,N,J){y.onBeforeRender(E,F,H,V,N,J),y.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(E,F,H,V,y,J),N.transparent===!0&&N.side===hn&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,E.renderBufferDirect(H,F,V,N,y,J),N.side=In,N.needsUpdate=!0,E.renderBufferDirect(H,F,V,N,y,J),N.side=hn):E.renderBufferDirect(H,F,V,N,y,J),y.onAfterRender(E,F,H,V,N,J)}function Wr(y,F,H){F.isScene!==!0&&(F=fe);const V=vt.get(y),N=p.state.lights,J=p.state.shadowsArray,st=N.state.version,ht=_t.getParameters(y,N.state,J,F,H),mt=_t.getProgramCacheKey(ht);let Rt=V.programs;V.environment=y.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(y.isMeshStandardMaterial?k:v).get(y.envMap||V.environment),V.envMapRotation=V.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Rt===void 0&&(y.addEventListener("dispose",Bt),Rt=new Map,V.programs=Rt);let Pt=Rt.get(mt);if(Pt!==void 0){if(V.currentProgram===Pt&&V.lightsStateVersion===st)return Tl(y,ht),Pt}else ht.uniforms=_t.getUniforms(y),y.onBeforeCompile(ht,E),Pt=_t.acquireProgram(ht,mt),Rt.set(mt,Pt),V.uniforms=ht.uniforms;const yt=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(yt.clippingPlanes=Q.uniform),Tl(y,ht),V.needsLights=hf(y),V.lightsStateVersion=st,V.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Pt,V.uniformsList=null,Pt}function Al(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=Bs.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Tl(y,F){const H=vt.get(y);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function uf(y,F,H,V,N){F.isScene!==!0&&(F=fe),C.resetTextureUnits();const J=F.fog,st=V.isMeshStandardMaterial?F.environment:null,ht=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fe,mt=(V.isMeshStandardMaterial?k:v).get(V.envMap||st),Rt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),yt=!!H.morphAttributes.position,Xt=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color;let pe=ti;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pe=E.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=he!==void 0?he.length:0,Mt=vt.get(V),Se=p.state.lights;if(tt===!0&&(xt===!0||y!==M)){const we=y===M&&V.id===A;Q.setState(V,y,we)}let Zt=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Se.state.version||Mt.outputColorSpace!==ht||N.isBatchedMesh&&Mt.batching===!1||!N.isBatchedMesh&&Mt.batching===!0||N.isBatchedMesh&&Mt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Mt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Mt.instancing===!1||!N.isInstancedMesh&&Mt.instancing===!0||N.isSkinnedMesh&&Mt.skinning===!1||!N.isSkinnedMesh&&Mt.skinning===!0||N.isInstancedMesh&&Mt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Mt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Mt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Mt.instancingMorph===!1&&N.morphTexture!==null||Mt.envMap!==mt||V.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Rt||Mt.vertexTangents!==Pt||Mt.morphTargets!==yt||Mt.morphNormals!==Xt||Mt.morphColors!==Kt||Mt.toneMapping!==pe||Mt.morphTargetsCount!==Yt)&&(Zt=!0):(Zt=!0,Mt.__version=V.version);let Qe=Mt.currentProgram;Zt===!0&&(Qe=Wr(V,F,N));let bi=!1,ze=!1,_r=!1;const oe=Qe.getUniforms(),Ye=Mt.uniforms;if(Et.useProgram(Qe.program)&&(bi=!0,ze=!0,_r=!0),V.id!==A&&(A=V.id,ze=!0),bi||M!==y){Et.buffers.depth.getReversed()?(at.copy(y.projectionMatrix),Am(at),Tm(at),oe.setValue(D,"projectionMatrix",at)):oe.setValue(D,"projectionMatrix",y.projectionMatrix),oe.setValue(D,"viewMatrix",y.matrixWorldInverse);const Ie=oe.map.cameraPosition;Ie!==void 0&&Ie.setValue(D,qt.setFromMatrixPosition(y.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ze=!0,_r=!0)}if(N.isSkinnedMesh){oe.setOptional(D,N,"bindMatrix"),oe.setOptional(D,N,"bindMatrixInverse");const we=N.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),oe.setValue(D,"boneTexture",we.boneTexture,C))}N.isBatchedMesh&&(oe.setOptional(D,N,"batchingTexture"),oe.setValue(D,"batchingTexture",N._matricesTexture,C),oe.setOptional(D,N,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",N._indirectTexture,C),oe.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",N._colorsTexture,C));const qe=H.morphAttributes;if((qe.position!==void 0||qe.normal!==void 0||qe.color!==void 0)&&wt.update(N,H,Qe),(ze||Mt.receiveShadow!==N.receiveShadow)&&(Mt.receiveShadow=N.receiveShadow,oe.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ye.envMap.value=mt,Ye.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(Ye.envMapIntensity.value=F.environmentIntensity),ze&&(oe.setValue(D,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&cf(Ye,_r),J&&V.fog===!0&&ot.refreshFogUniforms(Ye,J),ot.refreshMaterialUniforms(Ye,V,z,Y,p.state.transmissionRenderTarget[y.id]),Bs.upload(D,Al(Mt),Ye,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Bs.upload(D,Al(Mt),Ye,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(D,"center",N.center),oe.setValue(D,"modelViewMatrix",N.modelViewMatrix),oe.setValue(D,"normalMatrix",N.normalMatrix),oe.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const we=V.uniformsGroups;for(let Ie=0,Ks=we.length;Ie<Ks;Ie++){const ii=we[Ie];L.update(ii,Qe),L.bind(ii,Qe)}}return Qe}function cf(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function hf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,F,H){vt.get(y.texture).__webglTexture=F,vt.get(y.depthTexture).__webglTexture=H;const V=vt.get(y);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,F){const H=vt.get(y);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const ff=D.createFramebuffer();this.setRenderTarget=function(y,F=0,H=0){I=y,w=F,b=H;let V=!0,N=null,J=!1,st=!1;if(y){const mt=vt.get(y);if(mt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)C.setupRenderTarget(y);else if(mt.__hasExternalTextures)C.rebindTextures(y,vt.get(y.texture).__webglTexture,vt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const yt=y.depthTexture;if(mt.__boundDepthTexture!==yt){if(yt!==null&&vt.has(yt)&&(y.width!==yt.image.width||y.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(y)}}const Rt=y.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(st=!0);const Pt=vt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?N=Pt[F][H]:N=Pt[F],J=!0):y.samples>0&&C.useMultisampledRTT(y)===!1?N=vt.get(y).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[H]:N=Pt,P.copy(y.viewport),G.copy(y.scissor),i=y.scissorTest}else P.copy(gt).multiplyScalar(z).floor(),G.copy(Tt).multiplyScalar(z).floor(),i=ie;if(H!==0&&(N=ff),Et.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&Et.drawBuffers(y,N),Et.viewport(P),Et.scissor(G),Et.setScissorTest(i),J){const mt=vt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,mt.__webglTexture,H)}else if(st){const mt=vt.get(y.texture),Rt=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,H,Rt)}else if(y!==null&&H!==0){const mt=vt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,H)}A=-1},this.readRenderTargetPixels=function(y,F,H,V,N,J,st){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){Et.bindFramebuffer(D.FRAMEBUFFER,ht);try{const mt=y.texture,Rt=mt.format,Pt=mt.type;if(!Ht.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-V&&H>=0&&H<=y.height-N&&D.readPixels(F,H,V,N,It.convert(Rt),It.convert(Pt),J)}finally{const mt=I!==null?vt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(y,F,H,V,N,J,st){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=vt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const mt=y.texture,Rt=mt.format,Pt=mt.type;if(!Ht.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-V&&H>=0&&H<=y.height-N){Et.bindFramebuffer(D.FRAMEBUFFER,ht);const yt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),D.readPixels(F,H,V,N,It.convert(Rt),It.convert(Pt),0);const Xt=I!==null?vt.get(I).__webglFramebuffer:null;Et.bindFramebuffer(D.FRAMEBUFFER,Xt);const Kt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sm(D,Kt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,yt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(yt),D.deleteSync(Kt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,H=0){y.isTexture!==!0&&(hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(y.image.width*V),J=Math.floor(y.image.height*V),st=F!==null?F.x:0,ht=F!==null?F.y:0;C.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,st,ht,N,J),Et.unbindTexture()};const df=D.createFramebuffer(),pf=D.createFramebuffer();this.copyTextureToTexture=function(y,F,H=null,V=null,N=0,J=null){y.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,y=arguments[1],F=arguments[2],J=arguments[3]||0,H=null),J===null&&(N!==0?(hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let st,ht,mt,Rt,Pt,yt,Xt,Kt,pe;const he=y.isCompressedTexture?y.mipmaps[J]:y.image;if(H!==null)st=H.max.x-H.min.x,ht=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Pt=H.min.y,yt=H.isBox3?H.min.z:0;else{const qe=Math.pow(2,-N);st=Math.floor(he.width*qe),ht=Math.floor(he.height*qe),y.isDataArrayTexture?mt=he.depth:y.isData3DTexture?mt=Math.floor(he.depth*qe):mt=1,Rt=0,Pt=0,yt=0}V!==null?(Xt=V.x,Kt=V.y,pe=V.z):(Xt=0,Kt=0,pe=0);const Yt=It.convert(F.format),Mt=It.convert(F.type);let Se;F.isData3DTexture?(C.setTexture3D(F,0),Se=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(C.setTexture2DArray(F,0),Se=D.TEXTURE_2D_ARRAY):(C.setTexture2D(F,0),Se=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const Zt=D.getParameter(D.UNPACK_ROW_LENGTH),Qe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bi=D.getParameter(D.UNPACK_SKIP_PIXELS),ze=D.getParameter(D.UNPACK_SKIP_ROWS),_r=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,he.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt);const oe=y.isDataArrayTexture||y.isData3DTexture,Ye=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const qe=vt.get(y),we=vt.get(F),Ie=vt.get(qe.__renderTarget),Ks=vt.get(we.__renderTarget);Et.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ks.__webglFramebuffer);for(let ii=0;ii<mt;ii++)oe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(y).__webglTexture,N,yt+ii),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vt.get(F).__webglTexture,J,pe+ii)),D.blitFramebuffer(Rt,Pt,st,ht,Xt,Kt,st,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||vt.has(y)){const qe=vt.get(y),we=vt.get(F);Et.bindFramebuffer(D.READ_FRAMEBUFFER,df),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,pf);for(let Ie=0;Ie<mt;Ie++)oe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qe.__webglTexture,N,yt+Ie):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qe.__webglTexture,N),Ye?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,J,pe+Ie):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,we.__webglTexture,J),N!==0?D.blitFramebuffer(Rt,Pt,st,ht,Xt,Kt,st,ht,D.COLOR_BUFFER_BIT,D.NEAREST):Ye?D.copyTexSubImage3D(Se,J,Xt,Kt,pe+Ie,Rt,Pt,st,ht):D.copyTexSubImage2D(Se,J,Xt,Kt,Rt,Pt,st,ht);Et.bindFramebuffer(D.READ_FRAMEBUFFER,null),Et.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ye?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Se,J,Xt,Kt,pe,st,ht,mt,Yt,Mt,he.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,J,Xt,Kt,pe,st,ht,mt,Yt,he.data):D.texSubImage3D(Se,J,Xt,Kt,pe,st,ht,mt,Yt,Mt,he):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,Xt,Kt,st,ht,Yt,Mt,he.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,Xt,Kt,he.width,he.height,Yt,he.data):D.texSubImage2D(D.TEXTURE_2D,J,Xt,Kt,st,ht,Yt,Mt,he);D.pixelStorei(D.UNPACK_ROW_LENGTH,Zt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bi),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_r),J===0&&F.generateMipmaps&&D.generateMipmap(Se),Et.unbindTexture()},this.copyTextureToTexture3D=function(y,F,H=null,V=null,N=0){return y.isTexture!==!0&&(hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,y=arguments[2],F=arguments[3],N=arguments[4]||0),hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,H,V,N)},this.initRenderTarget=function(y){vt.get(y).__webglFramebuffer===void 0&&C.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?C.setTextureCube(y,0):y.isData3DTexture?C.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?C.setTexture2DArray(y,0):C.setTexture2D(y,0),Et.unbindTexture()},this.resetState=function(){w=0,b=0,I=null,Et.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const dc={type:"change"},_l={type:"start"},af={type:"end"},Ss=new zr,pc=new qn,TE=Math.cos(70*Ih.DEG2RAD),ge=new B,Ne=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class CE extends H0{constructor(t,e=null){super(t,e),this.state=ee.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:qi.ROTATE,TWO:qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new pn,this._lastTargetPosition=new B,this._quat=new pn().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hu,this._sphericalDelta=new Hu,this._scale=1,this._panOffset=new B,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new B,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wE.bind(this),this._onPointerDown=bE.bind(this),this._onPointerUp=RE.bind(this),this._onContextMenu=NE.bind(this),this._onMouseWheel=BE.bind(this),this._onKeyDown=LE.bind(this),this._onTouchStart=FE.bind(this),this._onTouchMove=IE.bind(this),this._onMouseDown=DE.bind(this),this._onMouseMove=PE.bind(this),this._interceptControlDown=UE.bind(this),this._interceptControlUp=OE.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(dc),this.update(),this.state=ee.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ne:n>Math.PI&&(n-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=ge.length();o=this._clampDistance(l*this._scale);const u=l-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),a=!!u}else if(this.object.isOrthographicCamera){const l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=u!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(l),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<TE?this.object.lookAt(this.target):(pc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(pc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(dc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let a=ge.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,a=e-n.top,o=n.width,l=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ne*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function bE(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function wE(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function RE(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(af),this.state=ee.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function DE(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ee.DOLLY;break;case Zi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ee.ROTATE}break;case Zi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(_l)}function PE(r){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function BE(r){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(r.preventDefault(),this.dispatchEvent(_l),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(af))}function LE(r){this.enabled!==!1&&this._handleKeyDown(r)}function FE(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ee.TOUCH_ROTATE;break;case qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ee.TOUCH_DOLLY_PAN;break;case qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(_l)}function IE(r){switch(this._trackPointer(r),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ee.NONE}}function NE(r){this.enabled!==!1&&r.preventDefault()}function UE(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function OE(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mc(r,t){if(t===Kp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(t===Po||t===Bh){let e=r.getIndex();if(e===null){const o=[],l=r.getAttribute("position");if(l!==void 0){for(let u=0;u<l.count;u++)o.push(u);r.setIndex(o),e=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=e.count-2,s=[];if(t===Po)for(let o=1;o<=n;o++)s.push(e.getX(0)),s.push(e.getX(o)),s.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(e.getX(o)),s.push(e.getX(o+1)),s.push(e.getX(o+2))):(s.push(e.getX(o+2)),s.push(e.getX(o+1)),s.push(e.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),r}class kE extends xr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new WE(e)}),this.register(function(e){return new XE(e)}),this.register(function(e){return new ty(e)}),this.register(function(e){return new ey(e)}),this.register(function(e){return new ny(e)}),this.register(function(e){return new qE(e)}),this.register(function(e){return new jE(e)}),this.register(function(e){return new KE(e)}),this.register(function(e){return new ZE(e)}),this.register(function(e){return new GE(e)}),this.register(function(e){return new $E(e)}),this.register(function(e){return new YE(e)}),this.register(function(e){return new QE(e)}),this.register(function(e){return new JE(e)}),this.register(function(e){return new HE(e)}),this.register(function(e){return new iy(e)}),this.register(function(e){return new ry(e)})}load(t,e,n,s){const a=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Lr.extractUrlBase(t);o=Lr.resolveURL(c,this.path)}else o=Lr.extractUrlBase(t);this.manager.itemStart(t);const l=function(c){s?s(c):console.error(c),a.manager.itemError(t),a.manager.itemEnd(t)},u=new Jh(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(t,function(c){try{a.parse(c,o,function(h){e(h),a.manager.itemEnd(t)},l)}catch(h){l(h)}},n,l)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let a;const o={},l={},u=new TextDecoder;if(typeof t=="string")a=JSON.parse(t);else if(t instanceof ArrayBuffer)if(u.decode(new Uint8Array(t,0,4))===of){try{o[Ot.KHR_BINARY_GLTF]=new sy(t)}catch(f){s&&s(f);return}a=JSON.parse(o[Ot.KHR_BINARY_GLTF].content)}else a=JSON.parse(u.decode(t));else a=t;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new _y(a,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),l[f.name]=f,o[f.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const f=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(f){case Ot.KHR_MATERIALS_UNLIT:o[f]=new VE;break;case Ot.KHR_DRACO_MESH_COMPRESSION:o[f]=new ay(a,this.dracoLoader);break;case Ot.KHR_TEXTURE_TRANSFORM:o[f]=new oy;break;case Ot.KHR_MESH_QUANTIZATION:o[f]=new ly;break;default:d.indexOf(f)>=0&&l[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(l),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,a){n.parse(t,e,s,a)})}}function zE(){let r={};return{get:function(t){return r[t]},add:function(t,e){r[t]=e},remove:function(t){delete r[t]},removeAll:function(){r={}}}}const Ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HE{constructor(t){this.parser=t,this.name=Ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const a=e[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const a=e.json,u=((a.extensions&&a.extensions[this.name]||{}).lights||[])[t];let c;const h=new At(16777215);u.color!==void 0&&h.setRGB(u.color[0],u.color[1],u.color[2],Fe);const f=u.range!==void 0?u.range:0;switch(u.type){case"directional":c=new Qh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new b0(h),c.distance=f;break;case"spot":c=new T0(h),c.distance=f,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,c.angle=u.spot.outerConeAngle,c.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return c.position.set(0,0,0),wn(c,u),u.intensity!==void 0&&(c.intensity=u.intensity),c.name=e.createUniqueName(u.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,a=n.json.nodes[t],l=(a.extensions&&a.extensions[this.name]||{}).light;return l===void 0?null:this._loadLight(l).then(function(u){return n._getNodeRef(e.cache,l,u)})}}class VE{constructor(){this.name=Ot.KHR_MATERIALS_UNLIT}getMaterialType(){return mi}extendParams(t,e,n){const s=[];t.color=new At(1,1,1),t.opacity=1;const a=e.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Fe),t.opacity=o[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",a.baseColorTexture,Ae))}return Promise.all(s)}}class GE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(e.emissiveIntensity=a),Promise.resolve()}}class WE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const l=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Dt(l,l)}return Promise.all(a)}}class XE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class YE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(a)}}class qE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];e.sheenColor=new At(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const l=o.sheenColorFactor;e.sheenColor.setRGB(l[0],l[1],l[2],Fe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&a.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Ae)),o.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class jE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&a.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(a)}}class KE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&a.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const l=o.attenuationColor||[1,1,1];return e.attenuationColor=new At().setRGB(l[0],l[1],l[2],Fe),Promise.all(a)}}class ZE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const s=this.parser.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return e.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class $E{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&a.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const l=o.specularColorFactor||[1,1,1];return e.specularColor=new At().setRGB(l[0],l[1],l[2],Fe),o.specularColorTexture!==void 0&&a.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Ae)),Promise.all(a)}}class JE{constructor(t){this.parser=t,this.name=Ot.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&a.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(a)}}class QE{constructor(t){this.parser=t,this.name=Ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:_n}extendMaterialParams(t,e){const n=this.parser,s=n.json.materials[t];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&a.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(a)}}class ty{constructor(t){this.parser=t,this.name=Ot.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,a.source,o)}}class ey{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const o=a.extensions[e],l=s.images[o.source];let u=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(u=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,u);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ny{constructor(t){this.parser=t,this.name=Ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,s=n.json,a=s.textures[t];if(!a.extensions||!a.extensions[e])return null;const o=a.extensions[e],l=s.images[o.source];let u=n.textureLoader;if(l.uri){const c=n.options.manager.getHandler(l.uri);c!==null&&(u=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,u);if(s.extensionsRequired&&s.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class iy{constructor(t){this.name=Ot.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(l){const u=s.byteOffset||0,c=s.byteLength||0,h=s.count,f=s.byteStride,d=new Uint8Array(l,u,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,f,d,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*f);return o.decodeGltfBuffer(new Uint8Array(m),h,f,d,s.mode,s.filter),m})})}else return null}}class ry{constructor(t){this.name=Ot.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Ke.TRIANGLES&&c.mode!==Ke.TRIANGLE_STRIP&&c.mode!==Ke.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,l=[],u={};for(const c in o)l.push(this.parser.getDependency("accessor",o[c]).then(h=>(u[c]=h,u[c])));return l.length<1?null:(l.push(this.parser.createNodeMesh(t)),Promise.all(l).then(c=>{const h=c.pop(),f=h.isGroup?h.children:[h],d=c[0].count,m=[];for(const _ of f){const g=new Ft,x=new B,p=new pn,T=new B(1,1,1),S=new n0(_.geometry,_.material,d);for(let E=0;E<d;E++)u.TRANSLATION&&x.fromBufferAttribute(u.TRANSLATION,E),u.ROTATION&&p.fromBufferAttribute(u.ROTATION,E),u.SCALE&&T.fromBufferAttribute(u.SCALE,E),S.setMatrixAt(E,g.compose(x,p,T));for(const E in u)if(E==="_COLOR_0"){const R=u[E];S.instanceColor=new Lo(R.array,R.itemSize,R.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,u[E]);ue.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),m.push(S)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const of="glTF",br=12,xc={JSON:1313821514,BIN:5130562};class sy{constructor(t){this.name=Ot.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-br,a=new DataView(t,br);let o=0;for(;o<s;){const l=a.getUint32(o,!0);o+=4;const u=a.getUint32(o,!0);if(o+=4,u===xc.JSON){const c=new Uint8Array(t,br+o,l);this.content=n.decode(c)}else if(u===xc.BIN){const c=br+o;this.body=t.slice(c,c+l)}o+=l}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ay{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ot.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,a=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,l={},u={},c={};for(const h in o){const f=No[h]||h.toLowerCase();l[f]=o[h]}for(const h in t.attributes){const f=No[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],m=tr[d.componentType];c[f]=m.name,u[f]=d.normalized===!0}}return e.getDependency("bufferView",a).then(function(h){return new Promise(function(f,d){s.decodeDracoFile(h,function(m){for(const _ in m.attributes){const g=m.attributes[_],x=u[_];x!==void 0&&(g.normalized=x)}f(m)},l,c,Fe,d)})})}}class oy{constructor(){this.name=Ot.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class ly{constructor(){this.name=Ot.KHR_MESH_QUANTIZATION}}class lf extends Vr{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[a+o];return e}interpolate_(t,e,n,s){const a=this.resultBuffer,o=this.sampleValues,l=this.valueSize,u=l*2,c=l*3,h=s-e,f=(n-e)/h,d=f*f,m=d*f,_=t*c,g=_-c,x=-2*m+3*d,p=m-d,T=1-x,S=p-d+f;for(let E=0;E!==l;E++){const R=o[g+E+l],w=o[g+E+u]*h,b=o[_+E+l],I=o[_+E]*h;a[E]=T*R+S*w+x*b+p*I}return a}}const uy=new pn;class cy extends lf{interpolate_(t,e,n,s){const a=super.interpolate_(t,e,n,s);return uy.fromArray(a).normalize().toArray(a),a}}const Ke={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},tr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gc={9728:Be,9729:Ge,9984:Mh,9985:Cs,9986:wr,9987:Rn},_c={33071:Kn,33648:Ns,10497:sr},za={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},No={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hy={CUBICSPLINE:void 0,LINEAR:Ur,STEP:Nr},Ha={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),r.DefaultMaterial}function ci(r,t,e){for(const n in e.extensions)r[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function wn(r,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(r.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function dy(r,t,e){let n=!1,s=!1,a=!1;for(let c=0,h=t.length;c<h;c++){const f=t[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(r);const o=[],l=[],u=[];for(let c=0,h=t.length;c<h;c++){const f=t[c];if(n){const d=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):r.attributes.position;o.push(d)}if(s){const d=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):r.attributes.normal;l.push(d)}if(a){const d=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):r.attributes.color;u.push(d)}}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u)]).then(function(c){const h=c[0],f=c[1],d=c[2];return n&&(r.morphAttributes.position=h),s&&(r.morphAttributes.normal=f),a&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function py(r,t){if(r.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)r.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(r.morphTargetInfluences.length===e.length){r.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)r.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function my(r){let t;const e=r.extensions&&r.extensions[Ot.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Va(e.attributes):t=r.indices+":"+Va(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,s=r.targets.length;n<s;n++)t+=":"+Va(r.targets[n]);return t}function Va(r){let t="";const e=Object.keys(r).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+r[e[n]]+";";return t}function Uo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gy=new Ft;class _y{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new zE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,o=-1;if(typeof navigator<"u"){const l=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(l)===!0;const u=l.match(/Version\/(\d+)/);s=n&&u?parseInt(u[1],10):-1,a=l.indexOf("Firefox")>-1,o=a?l.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&o<98?this.textureLoader=new S0(this.options.manager):this.textureLoader=new D0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Jh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const l={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ci(a,l,s),wn(l,s),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(l)})).then(function(){for(const u of l.scenes)u.updateMatrixWorld();t(l)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=e.length;s<a;s++){const o=e[s].joints;for(let l=0,u=o.length;l<u;l++)t[o[l]].isBone=!0}for(let s=0,a=t.length;s<a;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),a=(o,l)=>{const u=this.associations.get(o);u!=null&&this.associations.set(l,u);for(const[c,h]of o.children.entries())a(h,l.children[c])};return a(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const a=t(e[s]);a&&n.push(a)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(e)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(a,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Ot.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,o){n.load(Lr.resolveURL(e.uri,s.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,a=e.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=za[s.type],l=tr[s.componentType],u=s.normalized===!0,c=new l(s.count*o);return Promise.resolve(new Le(c,o,u))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(o){const l=o[0],u=za[s.type],c=tr[s.componentType],h=c.BYTES_PER_ELEMENT,f=h*u,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,x;if(m&&m!==f){const p=Math.floor(d/m),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=e.cache.get(T);S||(g=new c(l,p*m,s.count*m/h),S=new $m(g,m/h),e.cache.add(T,S)),x=new ul(S,u,d%m/h,_)}else l===null?g=new c(s.count*u):g=new c(l,d,s.count*u),x=new Le(g,u,_);if(s.sparse!==void 0){const p=za.SCALAR,T=tr[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,R=new T(o[1],S,s.sparse.count*p),w=new c(o[2],E,s.sparse.count*u);l!==null&&(x=new Le(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let b=0,I=R.length;b<I;b++){const A=R[b];if(x.setX(A,w[b*u]),u>=2&&x.setY(A,w[b*u+1]),u>=3&&x.setZ(A,w[b*u+2]),u>=4&&x.setW(A,w[b*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=_}return x})}loadTexture(t){const e=this.json,n=this.options,a=e.textures[t].source,o=e.images[a];let l=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(l=u)}return this.loadTextureImage(t,a,l)}loadTextureImage(t,e,n){const s=this,a=this.json,o=a.textures[t],l=a.images[e],u=(l.uri||l.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||l.name||"",h.name===""&&typeof l.uri=="string"&&l.uri.startsWith("data:image/")===!1&&(h.name=l.uri);const d=(a.samplers||{})[o.sampler]||{};return h.magFilter=gc[d.magFilter]||Ge,h.minFilter=gc[d.minFilter]||Rn,h.wrapS=_c[d.wrapS]||sr,h.wrapT=_c[d.wrapT]||sr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Be&&h.minFilter!==Ge,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[u]=c,c}loadImageSource(t,e){const n=this,s=this.json,a=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const o=s.images[t],l=self.URL||self.webkitURL;let u=o.uri||"",c=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return u=l.createObjectURL(d),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(u).then(function(f){return new Promise(function(d,m){let _=d;e.isImageBitmapLoader===!0&&(_=function(g){const x=new Me(g);x.needsUpdate=!0,d(x)}),e.load(Lr.resolveURL(f,a.path),_,void 0,m)})}).then(function(f){return c===!0&&l.revokeObjectURL(u),wn(f,o),f.userData.mimeType=o.mimeType||xy(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),f});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){const a=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),a.extensions[Ot.KHR_TEXTURE_TRANSFORM]){const l=n.extensions!==void 0?n.extensions[Ot.KHR_TEXTURE_TRANSFORM]:void 0;if(l){const u=a.associations.get(o);o=a.extensions[Ot.KHR_TEXTURE_TRANSFORM].extendTexture(o,l),a.associations.set(o,u)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,a=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const l="PointsMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new jh,dn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(l,u)),n=u}else if(t.isLine){const l="LineBasicMaterial:"+n.uuid;let u=this.cache.get(l);u||(u=new qh,dn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(l,u)),n=u}if(s||a||o){let l="ClonedMaterial:"+n.uuid+":";s&&(l+="derivative-tangents:"),a&&(l+="vertex-colors:"),o&&(l+="flat-shading:");let u=this.cache.get(l);u||(u=n.clone(),a&&(u.vertexColors=!0),o&&(u.flatShading=!0),s&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(l,u),this.associations.set(u,this.associations.get(n))),n=u}t.material=n}getMaterialType(){return gi}loadMaterial(t){const e=this,n=this.json,s=this.extensions,a=n.materials[t];let o;const l={},u=a.extensions||{},c=[];if(u[Ot.KHR_MATERIALS_UNLIT]){const f=s[Ot.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(l,a,e))}else{const f=a.pbrMetallicRoughness||{};if(l.color=new At(1,1,1),l.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;l.color.setRGB(d[0],d[1],d[2],Fe),l.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(e.assignTexture(l,"map",f.baseColorTexture,Ae)),l.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,l.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(l,"metalnessMap",f.metallicRoughnessTexture)),c.push(e.assignTexture(l,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,l)})))}a.doubleSided===!0&&(l.side=hn);const h=a.alphaMode||Ha.OPAQUE;if(h===Ha.BLEND?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,h===Ha.MASK&&(l.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==mi&&(c.push(e.assignTexture(l,"normalMap",a.normalTexture)),l.normalScale=new Dt(1,1),a.normalTexture.scale!==void 0)){const f=a.normalTexture.scale;l.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&o!==mi&&(c.push(e.assignTexture(l,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(l.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==mi){const f=a.emissiveFactor;l.emissive=new At().setRGB(f[0],f[1],f[2],Fe)}return a.emissiveTexture!==void 0&&o!==mi&&c.push(e.assignTexture(l,"emissiveMap",a.emissiveTexture,Ae)),Promise.all(c).then(function(){const f=new o(l);return a.name&&(f.name=a.name),wn(f,a),e.associations.set(f,{materials:t}),a.extensions&&ci(s,f,a),f})}createUniqueName(t){const e=Qt.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function a(l){return n[Ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(l,e).then(function(u){return vc(u,l,e)})}const o=[];for(let l=0,u=t.length;l<u;l++){const c=t[l],h=my(c),f=s[h];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[Ot.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=vc(new gn,c,e),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,a=n.meshes[t],o=a.primitives,l=[];for(let u=0,c=o.length;u<c;u++){const h=o[u].material===void 0?fy(this.cache):this.getDependency("material",o[u].material);l.push(h)}return l.push(e.loadGeometries(o)),Promise.all(l).then(function(u){const c=u.slice(0,u.length-1),h=u[u.length-1],f=[];for(let m=0,_=h.length;m<_;m++){const g=h[m],x=o[m];let p;const T=c[m];if(x.mode===Ke.TRIANGLES||x.mode===Ke.TRIANGLE_STRIP||x.mode===Ke.TRIANGLE_FAN||x.mode===void 0)p=a.isSkinnedMesh===!0?new Qm(g,T):new We(g,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),x.mode===Ke.TRIANGLE_STRIP?p.geometry=mc(p.geometry,Bh):x.mode===Ke.TRIANGLE_FAN&&(p.geometry=mc(p.geometry,Po));else if(x.mode===Ke.LINES)p=new s0(g,T);else if(x.mode===Ke.LINE_STRIP)p=new fl(g,T);else if(x.mode===Ke.LINE_LOOP)p=new a0(g,T);else if(x.mode===Ke.POINTS)p=new o0(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&py(p,a),p.name=e.createUniqueName(a.name||"mesh_"+t),wn(p,a),x.extensions&&ci(s,p,x),e.assignFinalMaterial(p),f.push(p)}for(let m=0,_=f.length;m<_;m++)e.associations.set(f[m],{meshes:t,primitives:m});if(f.length===1)return a.extensions&&ci(s,f[0],a),f[0];const d=new xi;a.extensions&&ci(s,d,a),e.associations.set(d,{meshes:t});for(let m=0,_=f.length;m<_;m++)d.add(f[m]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Pe(Ih.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new pl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),wn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,a=e.joints.length;s<a;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),o=s,l=[],u=[];for(let c=0,h=o.length;c<h;c++){const f=o[c];if(f){l.push(f);const d=new Ft;a!==null&&d.fromArray(a.array,c*16),u.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new cl(l,u)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],a=s.name?s.name:"animation_"+t,o=[],l=[],u=[],c=[],h=[];for(let f=0,d=s.channels.length;f<d;f++){const m=s.channels[f],_=s.samplers[m.sampler],g=m.target,x=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,T=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",x)),l.push(this.getDependency("accessor",p)),u.push(this.getDependency("accessor",T)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(l),Promise.all(u),Promise.all(c),Promise.all(h)]).then(function(f){const d=f[0],m=f[1],_=f[2],g=f[3],x=f[4],p=[];for(let T=0,S=d.length;T<S;T++){const E=d[T],R=m[T],w=_[T],b=g[T],I=x[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const A=n._createAnimationTracks(E,R,w,b,I);if(A)for(let M=0;M<A.length;M++)p.push(A[M])}return new x0(a,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const o=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&o.traverse(function(l){if(l.isMesh)for(let u=0,c=s.weights.length;u<c;u++)l.morphTargetInfluences[u]=s.weights[u]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],a=n._loadNodeShallow(t),o=[],l=s.children||[];for(let c=0,h=l.length;c<h;c++)o.push(n.getDependency("node",l[c]));const u=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(o),u]).then(function(c){const h=c[0],f=c[1],d=c[2];d!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(d,gy)});for(let m=0,_=f.length;m<_;m++)h.add(f[m]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const a=e.nodes[t],o=a.name?s.createUniqueName(a.name):"",l=[],u=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return u&&l.push(u),a.camera!==void 0&&l.push(s.getDependency("camera",a.camera).then(function(c){return s._getNodeRef(s.cameraCache,a.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){l.push(c)}),this.nodeCache[t]=Promise.all(l).then(function(c){let h;if(a.isBone===!0?h=new Xh:c.length>1?h=new xi:c.length===1?h=c[0]:h=new ue,h!==c[0])for(let f=0,d=c.length;f<d;f++)h.add(c[f]);if(a.name&&(h.userData.name=a.name,h.name=o),wn(h,a),a.extensions&&ci(n,h,a),a.matrix!==void 0){const f=new Ft;f.fromArray(a.matrix),h.applyMatrix4(f)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,a=new xi;n.name&&(a.name=s.createUniqueName(n.name)),wn(a,n),n.extensions&&ci(e,a,n);const o=n.nodes||[],l=[];for(let u=0,c=o.length;u<c;u++)l.push(s.getDependency("node",o[u]));return Promise.all(l).then(function(u){for(let h=0,f=u.length;h<f;h++)a.add(u[h]);const c=h=>{const f=new Map;for(const[d,m]of s.associations)(d instanceof dn||d instanceof Me)&&f.set(d,m);return h.traverse(d=>{const m=s.associations.get(d);m!=null&&f.set(d,m)}),f};return s.associations=c(a),a})}_createAnimationTracks(t,e,n,s,a){const o=[],l=t.name?t.name:t.uuid,u=[];Xn[a.path]===Xn.weights?t.traverse(function(d){d.morphTargetInfluences&&u.push(d.name?d.name:d.uuid)}):u.push(l);let c;switch(Xn[a.path]){case Xn.weights:c=cr;break;case Xn.rotation:c=hr;break;case Xn.position:case Xn.scale:c=fr;break;default:switch(n.itemSize){case 1:c=cr;break;case 2:case 3:default:c=fr;break}break}const h=s.interpolation!==void 0?hy[s.interpolation]:Ur,f=this._getArrayFromAccessor(n);for(let d=0,m=u.length;d<m;d++){const _=new c(u[d]+"."+Xn[a.path],e.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Uo(e.constructor),s=new Float32Array(e.length);for(let a=0,o=e.length;a<o;a++)s[a]=e[a]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof hr?cy:lf;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vy(r,t,e){const n=t.attributes,s=new On;if(n.POSITION!==void 0){const l=e.json.accessors[n.POSITION],u=l.min,c=l.max;if(u!==void 0&&c!==void 0){if(s.set(new B(u[0],u[1],u[2]),new B(c[0],c[1],c[2])),l.normalized){const h=Uo(tr[l.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=t.targets;if(a!==void 0){const l=new B,u=new B;for(let c=0,h=a.length;c<h;c++){const f=a[c];if(f.POSITION!==void 0){const d=e.json.accessors[f.POSITION],m=d.min,_=d.max;if(m!==void 0&&_!==void 0){if(u.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),u.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),u.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),d.normalized){const g=Uo(tr[d.componentType]);u.multiplyScalar(g)}l.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(l)}r.boundingBox=s;const o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=o}function vc(r,t,e){const n=t.attributes,s=[];function a(o,l){return e.getDependency("accessor",o).then(function(u){r.setAttribute(l,u)})}for(const o in n){const l=No[o]||o.toLowerCase();l in r.attributes||s.push(a(n[o],l))}if(t.indices!==void 0&&!r.index){const o=e.getDependency("accessor",t.indices).then(function(l){r.setIndex(l)});s.push(o)}return Gt.workingColorSpace!==Fe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),wn(r,t),vy(r,t,e),Promise.all(s).then(function(){return t.targets!==void 0?dy(r,t.targets,e):r})}const Ey=document.getElementById("remix-description").innerHTML;window.s3_remix_modal_controller={openModal:()=>{},closeModal:()=>{},isOpen:!1};const yy=()=>{var m,_;const r=(m=window==null?void 0:window.s3_remix_config)==null?void 0:m.modelPath,t=re(null),e=re(null),[n,s]=xe(!0),[a,o]=xe(""),[l,u]=xe(!0),[c,h]=xe(!0),[f,d]=xe("");return ne(()=>{s(!0),window.s3_remix_modal_controller&&(window.s3_remix_modal_controller.openModal=()=>h(!0),window.s3_remix_modal_controller.closeModal=()=>h(!1),window.s3_remix_modal_controller.isOpen=c);let g=null,x=null,p=null,T=null,S=null;if(!r){console.error("No 3D model URL provided");return}try{(async()=>{S=new Zm,S.background=new At(16448250);const E=new Pe(20,window.innerWidth/window.innerHeight,.1,1e3);E.lookAt(0,0,0),E.position.set(0,0,10),x=new AE({antialias:!0}),x.setPixelRatio(window.devicePixelRatio),x.shadowMap.enabled=!0,x.setSize(window.innerWidth,window.innerHeight);const R=document.getElementById("model");R&&(R.innerHTML="",R.appendChild(x.domElement)),g=new CE(E,x.domElement),g.enableDamping=!0,g.dampingFactor=.05,g.screenSpacePanning=!0,g.minDistance=1,g.maxDistance=100;let w=null;new kE().load(r,function(A){try{document.getElementsByTagName("canvas")[0].style.height="100%"}catch{console.log("cant set canvas height")}console.log("model loaded:",A.scene),u(!1),w=A.scene,w.position.set(0,0,0),w.scale.set(1,1,1),w.traverse(M=>{var P,G,i;if(M.isMesh){if(M.name==="Cylinder003"){const U=((P=window.s3_remix_config)==null?void 0:P.racketFrameColor)||"#8348ff",W=new At(Sy(U));M.material=new gi({color:W,roughness:.2,metalness:U=="#FFFFFF"?.2:.6})}if(M.name==="Cylinder003_1"){const U=new At(yc((G=window==null?void 0:window.s3_remix_config)==null?void 0:G.racketGripColor));M.material=new gi({color:U,roughness:.7,metalness:.1})}if(M.name==="Cylinder003_2"){const U=new At(yc((i=window==null?void 0:window.s3_remix_config)==null?void 0:i.logoColor));M.material=new gi({color:U,roughness:.5,metalness:0})}if(M.name==="Cylinder003_3"){const U=new At(16777215);M.material=new gi({color:U,roughness:.9,metalness:0})}}}),S.add(w),(()=>{const P=Date.now();function G(){const i=Date.now()-P,U=Math.min(i/3500,1),W=U*2*Math.PI;w&&(w.rotation.z=W),U<1&&requestAnimationFrame(G)}G()})(),(()=>{const P=Date.now(),G=new B(0,0,10),i=new B(-2,1,0);function U(){const W=Date.now()-P,O=Math.min(W/4500,1),Y=My(O);E.position.x=G.x+(i.x-G.x)*Y,E.position.y=G.y+(i.y-G.y)*Y,E.position.z=G.z+(i.z-G.z)*Y,O<1?requestAnimationFrame(U):s(!1)}U()})()},function(){console.log("loading the model. hang on")},function(A){console.error("error loading model:",A)}),p=new R0(16777215,.7),S.add(p),T=new Qh(16777215,1),T.position.set(1,1,1),S.add(T);function I(){g.update(),x.render(S,E),requestAnimationFrame(I)}I()})()}catch(E){console.error({error:E})}return()=>{console.log("clear"),g==null||g.dispose(),x==null||x.dispose(),p==null||p.dispose(),T==null||T.dispose(),S==null||S.clear()}},[c]),ne(()=>{t.current&&e.current!==null&&(t.current.selectionStart=e.current,t.current.selectionEnd=e.current),f?document.getElementById("remix-description").innerHTML=`Uniquely Yours — You are making this ${document.title.split("-")[0].split(" –")[0]} truly yours by personalising with <span id="the-sticker" class='emojiFont'>${f}</span>`:document.getElementById("remix-description").innerHTML=Ey},[f]),it(up,{open:c,onOpenChange:h,children:it(cp,{children:[it(hp,{}),it(fp,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1e3,overflow:"auto",background:"white"},children:[it(dp,{}),it("section",{children:it("div",{children:[it("div",{id:"model"}),l?it("div",{style:{position:"fixed",top:0,left:0,height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",color:"var(--gray-70)"},children:it("h2",{style:{fontSize:"1.5rem",letterSpacing:"0px"},children:"Part of the pleasure is the build up. Are you ready?"})}):it("div",{children:[it("div",{style:{position:"absolute",top:"2rem",width:"100%",textAlign:"center",fontSize:"2.2rem",zIndex:50},children:[it("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"2rem 4rem"},children:[it("svg",{onClick:()=>{h(!1)},width:24,height:24,"aria-hidden":"true",fill:"none",strokeWidth:2,stroke:"var(--gray-90)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:it("path",{d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18",strokeLinecap:"round",strokeLinejoin:"round"})}),it("div",{children:it("h3",{style:{letterSpacing:"-1px",margin:0},children:[it("span",{style:"background: linear-gradient(90deg, rgb(183, 33, 255) 0%, rgb(33, 212, 253) 100%) padding-box text; color: transparent;",children:"✨ Racket Remix"})," "," ","by Studio"]})}),it("svg",{onClick:()=>{h(!1)},width:24,height:24,"aria-hidden":"true",fill:"none",strokeWidth:2,stroke:"var(--gray-90)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:it("path",{d:"M6 18 18 6M6 6l12 12",strokeLinecap:"round",strokeLinejoin:"round"})})]}),it("p",{style:{marginTop:"0.5rem",color:"var(--gray-30)",lineHeight:"140%",fontSize:"1.7rem",letterSpacing:"0px"},children:["Add your name, initials or emojis ",it("br",{})," and show off this uniquely yours racket."]})]}),it("h2",{style:{color:((_=window.s3_remix_config)==null?void 0:_.stickerTextColor)||"#fff",position:"absolute",width:"100%",inset:0,height:"100%",margin:0,display:"flex",justifyContent:"center",alignItems:"center",fontSize:"5rem",transition:"opacity 0.5s ease",opacity:n?0:.8},children:it("span",{style:{position:f.length>6?"relative":"static",right:f.length>6?"3rem":"0rem"},className:"emojiFont",id:"sticker-name",children:f})}),it("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",bottom:"10rem",width:"100%",transition:"opacity 0.5s ease",opacity:n?0:1},children:[it("div",{className:"emojiFont",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",color:"black"},onClick:()=>{var g;(g=document.getElementById("sticker-name-input"))==null||g.focus()},children:Mc.map(g=>it("div",{style:{outline:"none",appearance:"none",background:"none",border:"none",fontSize:"2.5rem",margin:"0 0.4rem"},onClick:()=>{var E,R,w;o("");const x=new jl,p=f||"",T=x.splitGraphemes(p);if(T.filter(b=>!Ec(b)).length+1>2)return o("You cannot have more than 2 emojis in the sticker");{const b=[...T.slice(0,(E=t.current)==null?void 0:E.selectionStart),g,...T.slice((R=t.current)==null?void 0:R.selectionStart)].slice(0,8).join("");e.current=((w=t.current)==null?void 0:w.selectionStart)+2,d(b)}},children:g},g))}),it("div",{style:{position:"relative"},children:[it("input",{className:"emojiFont",type:"text",name:"name",id:"sticker-name-input",placeholder:"Your-Personalisation",value:f,autoComplete:"off",ref:t,onInput:g=>{const x=g.target,p=new jl,T=x.value,S=p.splitGraphemes(T).filter(E=>Mc.includes(E)||Ec(E)).slice(0,8).join("").toUpperCase();x.value=S,d(S),e.current=x.selectionStart}}),it("svg",{onClick:()=>{h(!1)},style:{width:"24px",height:"24px",position:"absolute",right:"1.5rem",top:"47%"},"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:it("path",{d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",strokeLinecap:"round",strokeLinejoin:"round"})})]}),it("div",{style:{opacity:f.length>0?1:0,transition:"opacity 0.2s ease-in-out",display:"flex",justifyContent:"space-between",gap:"1rem",marginTop:"2rem"},children:[it("button",{onClick:()=>{d(""),h(!1)},style:{color:"var(--gray-90)",backgroundColor:"white",borderColor:"white"},className:"button",children:"Remove"}),it("button",{onClick:()=>{h(!1)},style:{display:"flex",alignItems:"center"},className:"button",children:[it("span",{children:"Personalise"}),it("span",{children:it("svg",{style:{width:"2rem",fill:"currentColor",stroke:"currentColor",marginLeft:"0.5rem"},viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:"1.5",children:[it("path",{d:"M8 15C12.8747 15 15 12.949 15 8C15 12.949 17.1104 15 22 15C17.1104 15 15 17.1104 15 22C15 17.1104 12.8747 15 8 15Z",strokeWidth:"1.5",strokeLinejoin:"round"}),it("path",{d:"M2 6.5C5.13376 6.5 6.5 5.18153 6.5 2C6.5 5.18153 7.85669 6.5 11 6.5C7.85669 6.5 6.5 7.85669 6.5 11C6.5 7.85669 5.13376 6.5 2 6.5Z",strokeWidth:"1.5",strokeLinejoin:"round"})]})})]})]})]}),it("p",{style:{position:"absolute",bottom:"1rem",fontSize:"1.1rem",color:"var(--gray-30)",width:"100%",textAlign:"center"},children:"No modifications after the order is placed."})]})]})})]})]})})};function My(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,2.5)/2}const Sy=r=>{try{return parseInt((r||"#8348ff").replace("#",""),16)}catch{return 8603903}},Ec=r=>/^[a-zA-Z0-9. ]*$/.test(r),yc=r=>{switch(r){case"white":return 16777215;case"red":return 12193024;case"gold":return 16765185;case"black":return 0;default:return 16777215}},Mc=["😊","😘","😍","😂","😎","🌈","🔥","🌊","🍀","👽","👑","✨","🪄","🤍"],Ay=document.getElementById("remix-modal");Fr(it(yy,{}),Ay);
