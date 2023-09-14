import{S as ut,i as dt,s as pt,d as K,v as ht,a as Ze,o as pe,b as mt,c as _t,e as F,f as gt,g as J,h as he,t as x,j as me,k as M,l as G,m as Y,n as wt,p as yt,q as vt,r as Ee,u as B,w as bt,x as kt,y as Et,z as Rt,A as X,B as De,C as Z,D as Q,E as le}from"./chunks/index-21be6219.js";import{S as st,I as q,g as Qe,f as $e,a as Re,b as fe,s as V,i as et,c as de,P as tt,d as St}from"./chunks/singletons-37f68864.js";const Pt=!0;function Lt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function It(n){return n.split("%25").map(decodeURI).join("%25")}function Ot(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const At=["href","pathname","search","searchParams","toString","toJSON"];function jt(n,e){const t=new URL(n);for(const c of At){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return Nt(t),t}function Nt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Ut="/__data.json";function Tt(n){return n.replace(/\/$/,"")+Ut}let nt="";function Dt(n){nt=n.base,n.assets}function Ct(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let c=t.length;for(;c;)e=e*33^t[--c]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}let Ce=0;const _e=window.fetch;function Bt(){Ce+=1}function qt(){Ce-=1}{let n=!1;(async()=>{n=new Error().stack.includes("check_stack_trace")})(),window.fetch=(t,c)=>{const o=t instanceof Request?t.url:t.toString(),f=new Error().stack.split(`
`),r=f.findIndex(v=>v.includes("*listen@")),d=f.slice(0,r!==-1?r:void 0).join(`
`);return(n?d.includes("src/runtime/client/client.js"):Ce)&&console.warn(`Loading ${o} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(t instanceof Request?t.method:(c==null?void 0:c.method)||"GET")!=="GET"&&ne.delete(Be(t)),_e(t,c)}}const ne=new Map;function Vt(n,e){const t=Be(n,e),c=document.querySelector(t);if(c!=null&&c.textContent){const{body:o,...f}=JSON.parse(c.textContent),r=c.getAttribute("data-ttl");return r&&ne.set(t,{body:o,init:f,ttl:1e3*Number(r)}),Promise.resolve(new Response(o,f))}return _e(n,e)}function Ft(n,e,t){if(ne.size>0){const c=Be(n,t),o=ne.get(c);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(o.body,o.init);ne.delete(c)}}return _e(e,t)}function Be(n,e){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(c+=`[data-hash="${Ct(e.body)}"]`),c}const xt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Mt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${Ht(n).map(c=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(f)return e.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const r=c.split(/\[(.+?)\](?!\])/);return"/"+r.map((i,p)=>{if(p%2){if(i.startsWith("x+"))return Se(String.fromCharCode(parseInt(i.slice(2),16)));if(i.startsWith("u+"))return Se(String.fromCharCode(...i.slice(2).split("-").map(g=>parseInt(g,16))));const v=xt.exec(i);if(!v)throw new Error(`Invalid param: ${i}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,w,k,L,U]=v;return e.push({name:L,matcher:U,optional:!!w,rest:!!k,chained:k?p===1&&r[0]==="":!1}),k?"(.*?)":w?"([^/]*)?":"([^/]+?)"}return Se(i)}).join("")}).join("")}/?$`),params:e}}function Gt(n){return!/^\([^)]+\)$/.test(n)}function Ht(n){return n.slice(1).split("/").filter(Gt)}function Jt(n,e,t){const c={},o=n.slice(1);let f="";for(let r=0;r<e.length;r+=1){const d=e[r];let i=o[r];if(d.chained&&d.rest&&f&&(i=i?f+"/"+i:f),f="",i===void 0)d.rest&&(c[d.name]="");else{if(d.matcher&&!t[d.matcher](i)){if(d.optional&&d.chained){let p=o.indexOf(void 0,r);if(p===-1){const v=e[r+1];if(v!=null&&v.rest&&v.chained)f=i;else return}for(;p>=r;)o[p]=o[p-1],p-=1;continue}return}c[d.name]=i}}if(!f)return c}function Se(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Kt(n,e,t,c){const o=new Set(e);return Object.entries(t).map(([d,[i,p,v]])=>{const{pattern:w,params:k}=Mt(d),L={id:d,exec:U=>{const g=w.exec(U);if(g)return Jt(g,k,c)},errors:[1,...v||[]].map(U=>n[U]),layouts:[0,...p||[]].map(r),leaf:f(i)};return L.errors.length=L.layouts.length=Math.max(L.errors.length,L.layouts.length),L});function f(d){const i=d<0;return i&&(d=~d),[i,n[d]]}function r(d){return d===void 0?d:[o.has(d),n[d]]}}const Wt=Pt,zt=".svelte-kit/generated/root.svelte";function it(n){let e,t,c;var o=n[0][0];function f(d){return{props:{data:d[2],form:d[1]},$$inline:!0}}o&&(e=Y(o,f(n)));const r={c:function(){e&&X(e.$$.fragment),t=F()},l:function(i){e&&De(e.$$.fragment,i),t=F()},m:function(i,p){e&&Z(e,i,p),J(i,t,p),c=!0},p:function(i,p){const v={};if(p&4&&(v.data=i[2]),p&2&&(v.form=i[1]),o!==(o=i[0][0])){if(e){he();const w=e;x(w.$$.fragment,1,0,()=>{Q(w,1)}),me()}o?(e=Y(o,f(i)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(v)},i:function(i){c||(e&&M(e.$$.fragment,i),c=!0)},o:function(i){e&&x(e.$$.fragment,i),c=!1},d:function(i){i&&G(t),e&&Q(e,i)}};return K("SvelteRegisterBlock",{block:r,id:it.name,type:"else",source:"(43:0) {:else}",ctx:n}),r}function ct(n){let e,t,c;var o=n[0][0];function f(d){return{props:{data:d[2],$$slots:{default:[lt]},$$scope:{ctx:d}},$$inline:!0}}o&&(e=Y(o,f(n)));const r={c:function(){e&&X(e.$$.fragment),t=F()},l:function(i){e&&De(e.$$.fragment,i),t=F()},m:function(i,p){e&&Z(e,i,p),J(i,t,p),c=!0},p:function(i,p){const v={};if(p&4&&(v.data=i[2]),p&523&&(v.$$scope={dirty:p,ctx:i}),o!==(o=i[0][0])){if(e){he();const w=e;x(w.$$.fragment,1,0,()=>{Q(w,1)}),me()}o?(e=Y(o,f(i)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(v)},i:function(i){c||(e&&M(e.$$.fragment,i),c=!0)},o:function(i){e&&x(e.$$.fragment,i),c=!1},d:function(i){i&&G(t),e&&Q(e,i)}};return K("SvelteRegisterBlock",{block:r,id:ct.name,type:"if",source:"(39:0) {#if components[1]}",ctx:n}),r}function lt(n){let e,t,c;var o=n[0][1];function f(d){return{props:{data:d[3],form:d[1]},$$inline:!0}}o&&(e=Y(o,f(n)));const r={c:function(){e&&X(e.$$.fragment),t=F()},l:function(i){e&&De(e.$$.fragment,i),t=F()},m:function(i,p){e&&Z(e,i,p),J(i,t,p),c=!0},p:function(i,p){const v={};if(p&8&&(v.data=i[3]),p&2&&(v.form=i[1]),o!==(o=i[0][1])){if(e){he();const w=e;x(w.$$.fragment,1,0,()=>{Q(w,1)}),me()}o?(e=Y(o,f(i)),X(e.$$.fragment),M(e.$$.fragment,1),Z(e,t.parentNode,t)):e=null}else o&&e.$set(v)},i:function(i){c||(e&&M(e.$$.fragment,i),c=!0)},o:function(i){e&&x(e.$$.fragment,i),c=!1},d:function(i){i&&G(t),e&&Q(e,i)}};return K("SvelteRegisterBlock",{block:r,id:lt.name,type:"slot",source:"(40:1) <svelte:component this={components[0]} data={data_0}>",ctx:n}),r}function Oe(n){let e,t=n[5]&&Ae(n);const c={c:function(){e=wt("div"),t&&t.c(),this.h()},l:function(f){e=yt(f,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=vt(e);t&&t.l(r),r.forEach(G),this.h()},h:function(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px"),bt(e,zt,47,1,993)},m:function(f,r){J(f,e,r),t&&t.m(e,null)},p:function(f,r){f[5]?t?t.p(f,r):(t=Ae(f),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d:function(f){f&&G(e),t&&t.d()}};return K("SvelteRegisterBlock",{block:c,id:Oe.name,type:"if",source:"(47:0) {#if mounted}",ctx:n}),c}function Ae(n){let e;const t={c:function(){e=kt(n[6])},l:function(o){e=Et(o,n[6])},m:function(o,f){J(o,e,f)},p:function(o,f){f&64&&Rt(e,o[6])},d:function(o){o&&G(e)}};return K("SvelteRegisterBlock",{block:t,id:Ae.name,type:"if",source:"(49:2) {#if navigated}",ctx:n}),t}function je(n){let e,t,c,o,f;const r=[ct,it],d=[];function i(w,k){return w[0][1]?0:1}e=i(n),t=d[e]=r[e](n);let p=n[4]&&Oe(n);const v={c:function(){t.c(),c=_t(),p&&p.c(),o=F()},l:function(k){t.l(k),c=gt(k),p&&p.l(k),o=F()},m:function(k,L){d[e].m(k,L),J(k,c,L),p&&p.m(k,L),J(k,o,L),f=!0},p:function(k,[L]){let U=e;e=i(k),e===U?d[e].p(k,L):(he(),x(d[U],1,1,()=>{d[U]=null}),me(),t=d[e],t?t.p(k,L):(t=d[e]=r[e](k),t.c()),M(t,1),t.m(c.parentNode,c)),k[4]?p?p.p(k,L):(p=Oe(k),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i:function(k){f||(M(t),f=!0)},o:function(k){x(t),f=!1},d:function(k){d[e].d(k),k&&G(c),p&&p.d(k),k&&G(o)}};return K("SvelteRegisterBlock",{block:v,id:je.name,type:"component",source:"",ctx:n}),v}function Yt(n,e,t){let{$$slots:c={},$$scope:o}=e;ht("Root",c,[]);let{stores:f}=e,{page:r}=e,{components:d}=e,{form:i}=e,{data_0:p=null}=e,{data_1:v=null}=e;Ze(f.page.notify);let w=!1,k=!1,L=null;pe(()=>{const g=f.page.subscribe(()=>{w&&(t(5,k=!0),t(6,L=document.title||"untitled page"))});return t(4,w=!0),g}),n.$$.on_mount.push(function(){f===void 0&&!("stores"in e||n.$$.bound[n.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),r===void 0&&!("page"in e||n.$$.bound[n.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),d===void 0&&!("components"in e||n.$$.bound[n.$$.props.components])&&console.warn("<Root> was created without expected prop 'components'"),i===void 0&&!("form"in e||n.$$.bound[n.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const U=["stores","page","components","form","data_0","data_1"];return Object.keys(e).forEach(g=>{!~U.indexOf(g)&&g.slice(0,2)!=="$$"&&g!=="slot"&&console.warn(`<Root> was created with unknown prop '${g}'`)}),n.$$set=g=>{"stores"in g&&t(7,f=g.stores),"page"in g&&t(8,r=g.page),"components"in g&&t(0,d=g.components),"form"in g&&t(1,i=g.form),"data_0"in g&&t(2,p=g.data_0),"data_1"in g&&t(3,v=g.data_1)},n.$capture_state=()=>({setContext:mt,afterUpdate:Ze,onMount:pe,browser:Wt,stores:f,page:r,components:d,form:i,data_0:p,data_1:v,mounted:w,navigated:k,title:L}),n.$inject_state=g=>{"stores"in g&&t(7,f=g.stores),"page"in g&&t(8,r=g.page),"components"in g&&t(0,d=g.components),"form"in g&&t(1,i=g.form),"data_0"in g&&t(2,p=g.data_0),"data_1"in g&&t(3,v=g.data_1),"mounted"in g&&t(4,w=g.mounted),"navigated"in g&&t(5,k=g.navigated),"title"in g&&t(6,L=g.title)},e&&"$$inject"in e&&n.$inject_state(e.$$inject),n.$$.update=()=>{n.$$.dirty&384&&f.page.set(r)},[d,i,p,v,w,k,L,f,r]}class Xt extends ut{constructor(e){super(e),dt(this,e,Yt,je,pt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3}),K("SvelteRegisterComponent",{component:this,tagName:"Root",options:e,id:je.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(e){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Zt="modulepreload",Qt=function(n,e){return new URL(n,e).href},rt={},ue=function(e,t,c){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(f=>{if(f=Qt(f,c),f in rt)return;rt[f]=!0;const r=f.endsWith(".css"),d=r?'[rel="stylesheet"]':"";if(!!c)for(let v=o.length-1;v>=0;v--){const w=o[v];if(w.href===f&&(!r||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${d}`))return;const p=document.createElement("link");if(p.rel=r?"stylesheet":Zt,r||(p.as="script",p.crossOrigin=""),p.href=f,document.head.appendChild(p),r)return new Promise((v,w)=>{p.addEventListener("load",v),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e())},$t={},ge=[()=>ue(()=>import("./chunks/0-2a3242a4.js"),["./chunks\\0-2a3242a4.js","./chunks\\_layout-da46b06b.js","./components\\layout.svelte-e6dc4102.js","./chunks\\index-21be6219.js"],import.meta.url),()=>ue(()=>import("./chunks/1-64c43618.js"),["./chunks\\1-64c43618.js","./components\\error.svelte-85e2d422.js","./chunks\\index-21be6219.js","./chunks\\singletons-37f68864.js"],import.meta.url),()=>ue(()=>import("./chunks/2-2d6498f7.js"),["./chunks\\2-2d6498f7.js","./components\\pages\\_page.svelte-39fcec50.js","./chunks\\index-21be6219.js","./assets\\_page-d4e66a0f.css"],import.meta.url),()=>ue(()=>import("./chunks/3-613d05a7.js"),["./chunks\\3-613d05a7.js","./components\\pages\\about\\_page.svelte-ece9b924.js","./chunks\\index-21be6219.js"],import.meta.url)],en=[],tn={"/":[2],"/about":[3]},nn={handleError:({error:n})=>{console.error(n)}};let Ne=class{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},ot=class{constructor(e,t){this.status=e,this.location=t}};async function rn(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([c,o])=>[c,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const on=-1,an=-2,sn=-3,cn=-4,ln=-5,fn=-6;function un(n){if(typeof n=="number")return c(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function c(o,f=!1){if(o===on)return;if(o===sn)return NaN;if(o===cn)return 1/0;if(o===ln)return-1/0;if(o===fn)return-0;if(f)throw new Error("Invalid input");if(o in t)return t[o];const r=e[o];if(!r||typeof r!="object")t[o]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[o]=new Date(r[1]);break;case"Set":const i=new Set;t[o]=i;for(let w=1;w<r.length;w+=1)i.add(c(r[w]));break;case"Map":const p=new Map;t[o]=p;for(let w=1;w<r.length;w+=2)p.set(c(r[w]),c(r[w+1]));break;case"RegExp":t[o]=new RegExp(r[1],r[2]);break;case"Object":t[o]=Object(r[1]);break;case"BigInt":t[o]=BigInt(r[1]);break;case"null":const v=Object.create(null);t[o]=v;for(let w=1;w<r.length;w+=2)v[r[w]]=c(r[w+1]);break}else{const d=new Array(r.length);t[o]=d;for(let i=0;i<r.length;i+=1){const p=r[i];p!==an&&(d[i]=c(p))}}else{const d={};t[o]=d;for(const i in r){const p=r[i];d[i]=c(p)}}return t[o]}return c(0)}function dn(n){const e=new Set(n);function t(c,o){if(c){for(const f in c)if(f[0]!=="_"&&!e.has(f)){const r=n.join(", ");throw new Error(`Invalid export '${f}'${o?` in ${o}`:""} (valid exports are ${r}, or anything with a '_' prefix)`)}}}return t}const pn=dn(["load","prerender","csr","ssr","trailingSlash"]);function hn(n){return n.filter(e=>e!=null)}const Pe=Kt(ge,en,tn,$t),Ue=ge[0],Te=ge[1];Ue();Te();let re={};try{re=JSON.parse(sessionStorage[st])}catch{}function Le(n){re[n]=de()}function mn({target:n,base:e}){var ze;const t=document.documentElement,c=[];let o=null;const f={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,url:null},d=!1,i=!1,p=!0,v=!1,w=!1,k=!1,L=!1,U,g=(ze=history.state)==null?void 0:ze[q];g||(g=Date.now(),history.replaceState({...history.state,[q]:g},"",location.href));const we=re[g];we&&(history.scrollRestoration="manual",scrollTo(we.x,we.y));let H,qe,oe;async function Ve(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),s=ie(a,!0);o=null,await xe(s,a,[])}async function ye(a,{noScroll:s=!1,replaceState:u=!1,keepFocus:l=!1,state:_={},invalidateAll:h=!1},m,E){return typeof a=="string"&&(a=new URL(a,Qe(document))),ce({url:a,scroll:s?de():null,keepfocus:l,redirect_chain:m,details:{state:_,replaceState:u},nav_token:E,accepted:()=>{h&&(L=!0)},blocked:()=>{},type:"goto"})}async function Fe(a){const s=ie(a,!1);if(!s)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:s.id,promise:He(s).then(u=>(u.type==="loaded"&&u.state.error&&(o=null),u))},o.promise}async function ae(...a){const u=Pe.filter(l=>a.some(_=>l.exec(_))).map(l=>Promise.all([...l.layouts,l.leaf].map(_=>_==null?void 0:_[1]())));await Promise.all(u)}async function xe(a,s,u,l,_={},h){var E,b;qe=_;let m=a&&await He(a);if(m||(m=await We(s,{id:null},await te(new Error(`Not found: ${s.pathname}`),{url:s,params:{},route:{id:null}}),404)),s=(a==null?void 0:a.url)||s,qe!==_)return!1;if(m.type==="redirect")if(u.length>10||u.includes(s.pathname))m=await se({status:500,error:await te(new Error("Redirect loop"),{url:s,params:{},route:{id:null}}),url:s,route:{id:null}});else return ye(new URL(m.location,s).href,{},[...u,s.pathname],_),!1;else((b=(E=m.props)==null?void 0:E.page)==null?void 0:b.status)>=400&&await V.updated.check()&&await ee(s);if(c.length=0,L=!1,v=!0,l&&l.details){const{details:y}=l,S=y.replaceState?0:1;y.state[q]=g+=S,history[y.replaceState?"replaceState":"pushState"](y.state,"",s)}if(o=null,i?(r=m.state,m.props.page&&(m.props.page.url=s),U.$set(m.props)):Me(m),l){const{scroll:y,keepfocus:S}=l;if(S||Ie(),await le(),p){const A=s.hash&&document.getElementById(s.hash.slice(1));y?scrollTo(y.x,y.y):A?A.scrollIntoView():scrollTo(0,0)}}else await le();p=!0,m.props.page&&(H=m.props.page),h&&h(),v=!1}function Me(a){var l;if(document.querySelector("vite-error-overlay"))return;r=a.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),H=a.props.page,U=new Xt({target:n,props:{...a.props,stores:V},hydrate:!0});const u={from:null,to:{params:r.params,route:{id:((l=r.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};f.after_navigate.forEach(_=>_(u)),i=!0}async function $({url:a,params:s,branch:u,status:l,error:_,route:h,form:m}){let E="never";for(const I of u)(I==null?void 0:I.slash)!==void 0&&(E=I.slash);a.pathname=Lt(a.pathname,E),a.search=a.search;const b={type:"loaded",state:{url:a,params:s,branch:u,error:_,route:h},props:{components:hn(u).map(I=>I.node.component)}};m!==void 0&&(b.props.form=m);let y={},S=!H,A=0;for(let I=0;I<Math.max(u.length,r.branch.length);I+=1){const R=u[I],N=r.branch[I];(R==null?void 0:R.data)!==(N==null?void 0:N.data)&&(S=!0),R&&(y={...y,...R.data},S&&(b.props[`data_${A}`]=y),A+=1)}return(!r.url||a.href!==r.url.href||r.error!==_||m!==void 0&&m!==H.form||S)&&(b.props.page={error:_,params:s,route:{id:(h==null?void 0:h.id)??null},status:l,url:new URL(a),form:m??null,data:S?y:H.data}),b}async function ve({loader:a,parent:s,url:u,params:l,route:_,server_data_node:h}){var y,S,A;let m=null;const E={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await a();if(pn(b.universal),(y=b.universal)!=null&&y.load){let C=function(...R){for(const N of R){const{href:D}=new URL(N,u);E.dependencies.add(D)}};const I={route:{get id(){return E.route=!0,_.id}},params:new Proxy(l,{get:(R,N)=>(E.params.add(N),R[N])}),data:(h==null?void 0:h.data)??null,url:jt(u,()=>{E.url=!0}),async fetch(R,N){let D;R instanceof Request?(D=R.url,N={body:R.method==="GET"||R.method==="HEAD"?void 0:await R.blob(),cache:R.cache,credentials:R.credentials,headers:R.headers,integrity:R.integrity,keepalive:R.keepalive,method:R.method,mode:R.mode,redirect:R.redirect,referrer:R.referrer,referrerPolicy:R.referrerPolicy,signal:R.signal,...N}):D=R;const P=new URL(D,u).href;return C(P),i?Ft(D,P,N):Vt(D,N)},setHeaders:()=>{},depends:C,parent(){return E.parent=!0,s()}};try{if(Bt(),m=await b.universal.load.call(null,I)??null,m!=null&&Object.getPrototypeOf(m)!==Object.prototype)throw new Error(`a load function related to route '${_.id}' returned ${typeof m!="object"?`a ${typeof m}`:m instanceof Response?"a Response object":Array.isArray(m)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{qt()}m=m?await rn(m):null}return{node:b,loader:a,server:h,universal:(S=b.universal)!=null&&S.load?{type:"data",data:m,uses:E}:null,data:m??(h==null?void 0:h.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(h==null?void 0:h.slash)}}function Ge(a,s,u,l,_){if(L)return!0;if(!l)return!1;if(l.parent&&a||l.route&&s||l.url&&u)return!0;for(const h of l.params)if(_[h]!==r.params[h])return!0;for(const h of l.dependencies)if(c.some(m=>m(new URL(h))))return!0;return!1}function be(a,s){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?s??null:null}async function He({id:a,invalidating:s,url:u,params:l,route:_}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:m,leaf:E}=_,b=[...m,E];h.forEach(P=>P==null?void 0:P().catch(()=>{})),b.forEach(P=>P==null?void 0:P[1]().catch(()=>{}));let y=null;const S=r.url?a!==r.url.pathname+r.url.search:!1,A=r.route?_.id!==r.route.id:!1,C=b.reduce((P,j,T)=>{var z;const O=r.branch[T],W=!!(j!=null&&j[0])&&((O==null?void 0:O.loader)!==j[1]||Ge(P.some(Boolean),A,S,(z=O.server)==null?void 0:z.uses,l));return P.push(W),P},[]);if(C.some(Boolean)){try{y=await at(u,C)}catch(P){return se({status:500,error:await te(P,{url:u,params:l,route:{id:_.id}}),url:u,route:_})}if(y.type==="redirect")return y}const I=y==null?void 0:y.nodes;let R=!1;const N=b.map(async(P,j)=>{var z;if(!P)return;const T=r.branch[j],O=I==null?void 0:I[j];if((!O||O.type==="skip")&&P[1]===(T==null?void 0:T.loader)&&!Ge(R,A,S,(z=T.universal)==null?void 0:z.uses,l))return T;if(R=!0,(O==null?void 0:O.type)==="error")throw O;return ve({loader:P[1],url:u,params:l,route:_,parent:async()=>{var Xe;const Ye={};for(let ke=0;ke<j;ke+=1)Object.assign(Ye,(Xe=await N[ke])==null?void 0:Xe.data);return Ye},server_data_node:be(O===void 0&&P[0]?{type:"skip"}:O??null,T==null?void 0:T.server)})});for(const P of N)P.catch(()=>{});const D=[];for(let P=0;P<b.length;P+=1)if(b[P])try{D.push(await N[P])}catch(j){if(j instanceof ot)return{type:"redirect",location:j.location};let T=500,O;if(I!=null&&I.includes(j))T=j.status??T,O=j.error;else if(j instanceof Ne)T=j.status,O=j.body;else{if(await V.updated.check())return await ee(u);O=await te(j,{params:l,url:u,route:{id:_.id}})}const W=await Je(P,D,h);return W?await $({url:u,params:l,branch:D.slice(0,W.idx).concat(W.node),status:T,error:O,route:_}):await We(u,{id:_.id},O,T)}else D.push(void 0);return await $({url:u,params:l,branch:D,status:200,error:null,route:_,form:s?void 0:null})}async function Je(a,s,u){for(;a--;)if(u[a]){let l=a;for(;!s[l];)l-=1;try{return{idx:l+1,node:{node:await u[a](),loader:u[a],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:a,error:s,url:u,route:l}){const _={},h=await Ue();let m=null;if(h.has_server_load)try{const y=await at(u,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;m=y.nodes[0]??null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||d)&&await ee(u)}const E=await ve({loader:Ue,url:u,params:_,route:l,parent:()=>Promise.resolve({}),server_data_node:be(m)}),b={node:await Te(),loader:Te,universal:null,server:null,data:null};return await $({url:u,params:_,branch:[E,b],status:a,error:s,route:null})}function ie(a,s){if(et(a,e))return;const u=It(a.pathname.slice(e.length)||"/");for(const l of Pe){const _=l.exec(u);if(_)return{id:a.pathname+a.search,invalidating:s,route:l,params:Ot(_),url:a}}}function Ke({url:a,type:s,intent:u,delta:l}){var E,b;let _=!1;const h={from:{params:r.params,route:{id:((E=r.route)==null?void 0:E.id)??null},url:r.url},to:{params:(u==null?void 0:u.params)??null,route:{id:((b=u==null?void 0:u.route)==null?void 0:b.id)??null},url:a},willUnload:!u,type:s};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{_=!0}};return w||f.before_navigate.forEach(y=>y(m)),_?null:h}async function ce({url:a,scroll:s,keepfocus:u,redirect_chain:l,details:_,type:h,delta:m,nav_token:E,accepted:b,blocked:y}){const S=ie(a,!1),A=Ke({url:a,type:h,delta:m,intent:S});if(!A){y();return}Le(g),b(),w=!0,i&&V.navigating.set(A),await xe(S,a,l,{scroll:s,keepfocus:u,details:_},E,()=>{w=!1,f.after_navigate.forEach(C=>C(A)),V.navigating.set(null)})}async function We(a,s,u,l){return a.origin===location.origin&&a.pathname===location.pathname&&!d?await se({status:l,error:u,url:a,route:s}):await ee(a)}function ee(a){return location.href=a.href,new Promise(()=>{})}function ft(){let a;t.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(a),a=setTimeout(()=>{l(m,2)},20)});function s(h){l(h.composedPath()[0],1)}t.addEventListener("mousedown",s),t.addEventListener("touchstart",s,{passive:!0});const u=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(ae(new URL(m.target.href).pathname),u.unobserve(m.target))},{threshold:0});function l(h,m){const E=$e(h,t);if(!E)return;const{url:b,external:y}=Re(E,e);if(y)return;const S=fe(E);S.reload||(m<=S.preload_data?Fe(b):m<=S.preload_code&&ae(b.pathname))}function _(){u.disconnect();for(const h of t.querySelectorAll("a")){const{url:m,external:E}=Re(h,e);if(E)continue;const b=fe(h);b.reload||(b.preload_code===tt.viewport&&u.observe(h),b.preload_code===tt.eager&&ae(m.pathname))}}f.after_navigate.push(_),_()}return{after_navigate:a=>{pe(()=>(f.after_navigate.push(a),()=>{const s=f.after_navigate.indexOf(a);f.after_navigate.splice(s,1)}))},before_navigate:a=>{pe(()=>(f.before_navigate.push(a),()=>{const s=f.before_navigate.indexOf(a);f.before_navigate.splice(s,1)}))},disable_scroll_handling:()=>{if(i&&!v)throw new Error("Can only disable scroll handling during navigation");(v||!i)&&(p=!1)},goto:(a,s={})=>ye(a,s,[]),invalidate:a=>{if(typeof a=="function")c.push(a);else{const{href:s}=new URL(a,location.href);c.push(u=>u.href===s)}return Ve()},invalidateAll:()=>(L=!0,Ve()),preload_data:async a=>{const s=new URL(a,Qe(document));await Fe(s)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const s=new URL(location.href),{branch:u,route:l}=r;if(!l)return;const _=await Je(r.branch.length,u,l.errors);if(_){const h=await $({url:s,params:r.params,branch:u.slice(0,_.idx).concat(_.node),status:a.status??500,error:a.error,route:l});r=h.state,U.$set(h.props),le().then(Ie)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const s={form:a.data,page:{...H,form:a.data,status:a.status}};U.$set(s),a.type==="success"&&le().then(Ie)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var l;let u=!1;if(!w){const _={from:{params:r.params,route:{id:((l=r.route)==null?void 0:l.id)??null},url:r.url},to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};f.before_navigate.forEach(h=>h(_))}u?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(g);try{sessionStorage[st]=JSON.stringify(re)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||ft(),t.addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const u=$e(s.composedPath()[0],t);if(!u)return;const{url:l,external:_,target:h}=Re(u,e);if(!l)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const m=fe(u);if(!(u instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(_||m.reload){Ke({url:l,type:"link"})||s.preventDefault(),w=!0;return}const[b,y]=l.href.split("#");if(y!==void 0&&b===location.href.split("#")[0]){k=!0,Le(g),r.url=l,V.page.set({...H,url:l}),V.page.notify();return}ce({url:l,scroll:m.noscroll?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),t.addEventListener("submit",s=>{if(s.defaultPrevented)return;const u=HTMLFormElement.prototype.cloneNode.call(s.target),l=s.submitter;if(((l==null?void 0:l.formMethod)||u.method)!=="get")return;const h=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||u.action);if(et(h,e))return;const m=s.target,{noscroll:E,reload:b}=fe(m);if(b)return;s.preventDefault(),s.stopPropagation();const y=new FormData(m),S=l==null?void 0:l.getAttribute("name");S&&y.append(S,(l==null?void 0:l.getAttribute("value"))??""),h.search=new URLSearchParams(y).toString(),ce({url:h,scroll:E?de():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",s=>{var u;if((u=s.state)!=null&&u[q]){if(s.state[q]===g)return;const l=s.state[q]-g;ce({url:new URL(location.href),scroll:re[s.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{g=s.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{k&&(k=!1,history.replaceState({...history.state,[q]:++g},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&V.navigating.set(null)})},_hydrate:async({status:a=200,error:s,node_ids:u,params:l,route:_,data:h,form:m})=>{d=!0;const E=new URL(location.href);({params:l={},route:_={id:null}}=ie(E,!1)||{});let b;try{const y=u.map(async(S,A)=>{const C=h[A];return ve({loader:ge[S],url:E,params:l,route:_,parent:async()=>{const I={};for(let R=0;R<A;R+=1)Object.assign(I,(await y[R]).data);return I},server_data_node:be(C)})});b=await $({url:E,params:l,branch:await Promise.all(y),status:a,error:s,form:m,route:Pe.find(({id:S})=>S===_.id)??null})}catch(y){if(y instanceof ot){await ee(new URL(y.location,location.href));return}b=await se({status:y instanceof Ne?y.status:500,error:await te(y,{url:E,params:l,route:_}),url:E,route:_})}Me(b)}}}async function at(n,e){var f;const t=new URL(n);if(t.pathname=Tt(n.pathname),n.searchParams.has("x-sveltekit-invalidated"))throw new Error('Cannot used reserved query parameter "x-sveltekit-invalidated"');t.searchParams.append("x-sveltekit-invalidated",e.map(r=>r?"1":"").join("_"));const c=await _e(t.href),o=await c.json();if(!c.ok)throw new Error(o);return(f=o.nodes)==null||f.forEach(r=>{(r==null?void 0:r.type)==="data"&&(r.data=un(r.data),r.uses={dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),o}function te(n,e){return n instanceof Ne?n.body:nn.handleError({error:n,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ie(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var c;(c=getSelection())==null||c.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}{const n=console.warn;console.warn=function(...t){t.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(t[0])||n(...t)}}async function vn({env:n,hydrate:e,paths:t,target:c,version:o}){Dt(t),c===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const f=mn({target:c,base:t.base});St({client:f}),e?await f._hydrate(e):f.goto(location.href,{replaceState:!0}),f._start_router()}export{vn as start};
