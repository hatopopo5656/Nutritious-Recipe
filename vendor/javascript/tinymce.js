// tinymce@8.3.2 downloaded from https://ga.jspm.io/npm:tinymce@8.3.2/tinymce.js

var t=typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:global;var e={};(function(){var n=function(t){if(t===null)return"null";if(t===void 0)return"undefined";var e=typeof t;return e==="object"&&(Array.prototype.isPrototypeOf(t)||t.constructor&&t.constructor.name==="Array")?"array":e==="object"&&(String.prototype.isPrototypeOf(t)||t.constructor&&t.constructor.name==="String")?"string":e};var o=function(t){return["undefined","boolean","number","string","function","xml","null"].indexOf(t)!==-1};var s=function(t,e){var n=Array.prototype.slice.call(t);return n.sort(e)};var r=function(t,e){return c((function(n,o){return t.eq(e(n),e(o))}))};var c=function(t){return{eq:t}};var a=c((function(t,e){return t===e}));var i=a;var l=function(t){return c((function(e,n){if(e.length!==n.length)return false;var o=e.length;for(var s=0;s<o;s++)if(!t.eq(e[s],n[s]))return false;return true}))};var d=function(t,e){return r(l(t),(function(t){return s(t,e)}))};var u=function(t){return c((function(e,n){var o=Object.keys(e);var s=Object.keys(n);if(!d(i).eq(o,s))return false;var r=o.length;for(var c=0;c<r;c++){var a=o[c];if(!t.eq(e[a],n[a]))return false}return true}))};var m=c((function(t,e){if(t===e)return true;var s=n(t);var r=n(e);return s===r&&(o(s)?t===e:s==="array"?l(m).eq(t,e):s==="object"&&u(m).eq(t,e))}));
/* eslint-disable @typescript-eslint/no-wrapper-object-types */const f=Object.getPrototypeOf;const p=(t,e,n)=>!!n(t,e.prototype)||t.constructor?.name===e.name;const g=t=>{const e=typeof t;return t===null?"null":e==="object"&&Array.isArray(t)?"array":e==="object"&&p(t,String,((t,e)=>e.isPrototypeOf(t)))?"string":e};const h=t=>e=>g(e)===t;const b=t=>e=>typeof e===t;const y=t=>e=>t===e;const v=(t,e)=>w(t)&&p(t,e,((t,e)=>f(t)===e));const C=h("string");const w=h("object");const O=t=>v(t,Object);const E=h("array");const x=y(null);const k=b("boolean");const S=y(void 0);const _=t=>t===null||t===void 0;const N=t=>!_(t);const R=b("function");const A=b("number");const D=(t,e)=>{if(E(t)){for(let n=0,o=t.length;n<o;++n)if(!e(t[n]))return false;return true}return false};const T=()=>{};const B=(t,e)=>(...n)=>t(e.apply(null,n));const L=(t,e)=>n=>t(e(n));const P=t=>()=>t;const M=t=>t;const I=(t,e)=>t===e;function F(t,...e){return(...n)=>{const o=e.concat(n);return t.apply(null,o)}}const U=t=>e=>!t(e);const z=t=>()=>{throw new Error(t)};const $=t=>t();const j=t=>{t()};const H=P(false);const W=P(true);class Optional{tag;value;static singletonNone=new Optional(false);constructor(t,e){this.tag=t;this.value=e}static some(t){return new Optional(true,t)}static none(){return Optional.singletonNone}fold(t,e){return this.tag?e(this.value):t()}isSome(){return this.tag}isNone(){return!this.tag}map(t){return this.tag?Optional.some(t(this.value)):Optional.none()}bind(t){return this.tag?t(this.value):Optional.none()}exists(t){return this.tag&&t(this.value)}forall(t){return!this.tag||t(this.value)}filter(t){return!this.tag||t(this.value)?this:Optional.none()}getOr(t){return this.tag?this.value:t}or(t){return this.tag?this:t}getOrThunk(t){return this.tag?this.value:t()}orThunk(t){return this.tag?this:t()}getOrDie(t){if(this.tag)return this.value;throw new Error(t??"Called getOrDie on None")}static from(t){return N(t)?Optional.some(t):Optional.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(t){this.tag&&t(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}const V=Array.prototype.slice;const q=Array.prototype.indexOf;const K=Array.prototype.push;const Y=(t,e)=>q.call(t,e);const G=(t,e)=>{const n=Y(t,e);return n===-1?Optional.none():Optional.some(n)};const X=(t,e)=>Y(t,e)>-1;const Q=(t,e)=>{for(let n=0,o=t.length;n<o;n++){const o=t[n];if(e(o,n))return true}return false};const Z=(t,e)=>{const n=t.length;const o=new Array(n);for(let s=0;s<n;s++){const n=t[s];o[s]=e(n,s)}return o};const J=(t,e)=>{for(let n=0,o=t.length;n<o;n++){const o=t[n];e(o,n)}};const tt=(t,e)=>{for(let n=t.length-1;n>=0;n--){const o=t[n];e(o,n)}};const et=(t,e)=>{const n=[];const o=[];for(let s=0,r=t.length;s<r;s++){const r=t[s];const c=e(r,s)?n:o;c.push(r)}return{pass:n,fail:o}};const nt=(t,e)=>{const n=[];for(let o=0,s=t.length;o<s;o++){const s=t[o];e(s,o)&&n.push(s)}return n};const ot=(t,e)=>{if(t.length===0)return[];{let n=e(t[0]);const o=[];let s=[];for(let r=0,c=t.length;r<c;r++){const c=t[r];const a=e(c);if(a!==n){o.push(s);s=[]}n=a;s.push(c)}s.length!==0&&o.push(s);return o}};const st=(t,e,n)=>{tt(t,((t,o)=>{n=e(n,t,o)}));return n};const rt=(t,e,n)=>{J(t,((t,o)=>{n=e(n,t,o)}));return n};const ct=(t,e,n)=>{for(let o=0,s=t.length;o<s;o++){const s=t[o];if(e(s,o))return Optional.some(s);if(n(s,o))break}return Optional.none()};const at=(t,e)=>ct(t,e,H);const it=(t,e)=>{for(let n=0,o=t.length;n<o;n++){const o=t[n];if(e(o,n))return Optional.some(n)}return Optional.none()};const lt=(t,e)=>{for(let n=t.length-1;n>=0;n--)if(e(t[n],n))return Optional.some(n);return Optional.none()};const dt=t=>{const e=[];for(let n=0,o=t.length;n<o;++n){if(!E(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);K.apply(e,t[n])}return e};const ut=(t,e)=>dt(Z(t,e));const mt=(t,e)=>{for(let n=0,o=t.length;n<o;++n){const o=t[n];if(e(o,n)!==true)return false}return true};const ft=t=>{const e=V.call(t,0);e.reverse();return e};const pt=(t,e)=>nt(t,(t=>!X(e,t)));const gt=(t,e)=>{const n={};for(let o=0,s=t.length;o<s;o++){const s=t[o];n[String(s)]=e(s,o)}return n};const ht=(t,e)=>{const n=V.call(t,0);n.sort(e);return n};const bt=(t,e)=>e>=0&&e<t.length?Optional.some(t[e]):Optional.none();const yt=t=>bt(t,0);const vt=t=>bt(t,t.length-1);const Ct=R(Array.from)?Array.from:t=>V.call(t);const wt=(t,e)=>{for(let n=0;n<t.length;n++){const o=e(t[n],n);if(o.isSome())return o}return Optional.none()};const Ot=(t,e)=>{const n=[];const o=R(e)?t=>Q(n,(n=>e(n,t))):t=>X(n,t);for(let e=0,s=t.length;e<s;e++){const s=t[e];o(s)||n.push(s)}return n};const Et=Object.keys;const xt=Object.hasOwnProperty;const kt=(t,e)=>{const n=Et(t);for(let o=0,s=n.length;o<s;o++){const s=n[o];const r=t[s];e(r,s)}};const St=(t,e)=>_t(t,((t,n)=>({k:n,v:e(t,n)})));const _t=(t,e)=>{const n={};kt(t,((t,o)=>{const s=e(t,o);n[s.k]=s.v}));return n};const Nt=t=>(e,n)=>{t[n]=e};const Rt=(t,e,n,o)=>{kt(t,((t,s)=>{(e(t,s)?n:o)(t,s)}))};const At=(t,e)=>{const n={};const o={};Rt(t,e,Nt(n),Nt(o));return{t:n,f:o}};const Dt=(t,e)=>{const n={};Rt(t,e,Nt(n),T);return n};const Tt=(t,e)=>{const n=[];kt(t,((t,o)=>{n.push(e(t,o))}));return n};const Bt=t=>Tt(t,M);const Lt=(t,e)=>Pt(t,e)?Optional.from(t[e]):Optional.none();const Pt=(t,e)=>xt.call(t,e);const Mt=(t,e)=>Pt(t,e)&&t[e]!==void 0&&t[e]!==null;const It=(t,e,n=m)=>u(n).eq(t,e);const Ft=t=>{if(!E(t))throw new Error("cases must be an array");if(t.length===0)throw new Error("there must be at least one case");const e=[];const n={};J(t,((o,s)=>{const r=Et(o);if(r.length!==1)throw new Error("one and only one name per case");const c=r[0];const a=o[c];if(n[c]!==void 0)throw new Error("duplicate key detected:"+c);if(c==="cata")throw new Error("cannot have a case named cata (sorry)");if(!E(a))throw new Error("case arguments must be an array");e.push(c);n[c]=(...n)=>{const o=n.length;if(o!==a.length)throw new Error("Wrong number of arguments to case "+c+". Expected "+a.length+" ("+a+"), got "+o);const r=t=>{const o=Et(t);if(e.length!==o.length)throw new Error("Wrong number of arguments to match. Expected: "+e.join(",")+"\nActual: "+o.join(","));const s=mt(e,(t=>X(o,t)));if(!s)throw new Error("Not all branches were specified when using match. Specified: "+o.join(", ")+"\nRequired: "+e.join(", "));return t[c].apply(null,n)};return{fold:(...e)=>{if(e.length!==t.length)throw new Error("Wrong number of arguments to fold. Expected "+t.length+", got "+e.length);const o=e[s];return o.apply(null,n)},match:r,log:t=>{console.log(t,{constructors:e,constructor:c,params:n})}}}}));return n};const Ut={generate:Ft};const zt=t=>{let e=t;const n=()=>e;const o=t=>{e=t};return{get:n,set:o}};const $t=t=>{const e=e=>e(t);const n=P(t);const o=()=>s;const s={tag:true,inner:t,fold:(e,n)=>n(t),isValue:W,isError:H,map:e=>Wt.value(e(t)),mapError:o,bind:e,exists:e,forall:e,getOr:n,or:o,getOrThunk:n,orThunk:o,getOrDie:n,each:e=>{e(t)},toOptional:()=>Optional.some(t)};return s};const jt=t=>{const e=()=>n;const n={tag:false,inner:t,fold:(e,n)=>e(t),isValue:H,isError:W,map:e,mapError:e=>Wt.error(e(t)),bind:e,exists:H,forall:W,getOr:M,or:M,getOrThunk:$,orThunk:$,getOrDie:z(String(t)),each:T,toOptional:Optional.none};return n};const Ht=(t,e)=>t.fold((()=>jt(e)),$t);const Wt={value:$t,error:jt,fromOption:Ht};const Vt=typeof window!=="undefined"?window:Function("return this;")();const qt=()=>{const t=window.crypto.getRandomValues(new Uint8Array(16));t[6]=t[6]&15|64;t[8]=t[8]&63|128;return t};const Kt=()=>{const t=qt();const e=(e,n)=>{let o="";for(let s=e;s<=n;++s){const e=t[s].toString(16).padStart(2,"0");o+=e}return o};return`${e(0,3)}-${e(4,5)}-${e(6,7)}-${e(8,9)}-${e(10,15)}`};const Yt=(t,e,n)=>Math.min(Math.max(t,e),n);const Gt=()=>window.crypto.getRandomValues(new Uint32Array(1))[0]/4294967295;let Xt=0;const Qt=t=>{const e=new Date;const n=e.getTime();const o=Math.floor(Gt()*1e9);Xt++;return t+"_"+o+Xt+String(n)};const Zt=()=>window.isSecureContext?window.crypto.randomUUID():Kt();const Jt=(t,e)=>e;const te=(t,e)=>{const n=O(t)&&O(e);return n?ne(t,e):e};const ee=t=>(...e)=>{if(e.length===0)throw new Error("Can't merge zero objects");const n={};for(let o=0;o<e.length;o++){const s=e[o];for(const e in s)Pt(s,e)&&(n[e]=t(n[e],s[e]))}return n};const ne=ee(te);const oe=ee(Jt);const se=(t,e,n=I)=>t.exists((t=>n(t,e)));const re=(t,e,n=I)=>ae(t,e,n).getOr(t.isNone()&&e.isNone());const ce=t=>{const e=[];const n=t=>{e.push(t)};for(let e=0;e<t.length;e++)t[e].each(n);return e};const ae=(t,e,n)=>t.isSome()&&e.isSome()?Optional.some(n(t.getOrDie(),e.getOrDie())):Optional.none();const ie=(t,e,n,o)=>t.isSome()&&e.isSome()&&n.isSome()?Optional.some(o(t.getOrDie(),e.getOrDie(),n.getOrDie())):Optional.none();const le=t=>t.bind(M);const de=(t,e)=>t?Optional.some(e):Optional.none();const ue=(t,e)=>{let n=e!==void 0&&e!==null?e:Vt;for(let e=0;e<t.length&&n!==void 0&&n!==null;++e)n=n[t[e]];return n};const me=(t,e)=>{const n=t.split(".");return ue(n,e)};Ut.generate([{bothErrors:["error1","error2"]},{firstError:["error1","value2"]},{secondError:["value1","error2"]},{bothValues:["value1","value2"]}]);const fe=t=>{const e=[];const n=[];J(t,(t=>{t.fold((t=>{e.push(t)}),(t=>{n.push(t)}))}));return{errors:e,values:n}};const pe=t=>{const e=zt(Optional.none());const n=()=>e.get().each(t);const o=()=>{n();e.set(Optional.none())};const s=()=>e.get().isSome();const r=()=>e.get();const c=t=>{n();e.set(Optional.some(t))};return{clear:o,isSet:s,get:r,set:c}};const ge=t=>{const e=zt(Optional.none());const n=()=>e.get().each((t=>clearInterval(t)));const o=()=>{n();e.set(Optional.none())};const s=()=>e.get().isSome();const r=()=>e.get();const c=o=>{n();e.set(Optional.some(setInterval(o,t)))};return{clear:o,isSet:s,get:r,set:c}};const he=()=>{const t=pe(T);const e=e=>t.get().each(e);return{...t,on:e}};const be=(t,e)=>t.substring(e);const ye=(t,e,n)=>e===""||t.length>=e.length&&t.substr(n,n+e.length)===e;const ve=(t,e)=>we(t,e)?be(t,e.length):t;const Ce=(t,e,n=0,o)=>{const s=t.indexOf(e,n);return s!==-1&&(!!S(o)||s+e.length<=o)};const we=(t,e)=>ye(t,e,0);const Oe=(t,e)=>ye(t,e,t.length-e.length);const Ee=t=>e=>e.replace(t,"");const xe=Ee(/^\s+|\s+$/g);const ke=Ee(/^\s+/g);const Se=Ee(/\s+$/g);const _e=t=>t.length>0;const Ne=t=>!_e(t);const Re=(t,e)=>e<=0?"":new Array(e+1).join(t);const Ae=(t,e=10)=>{const n=parseInt(t,e);return isNaN(n)?Optional.none():Optional.some(n)};const De=(t,e)=>{let n=null;const o=()=>{if(!x(n)){clearTimeout(n);n=null}};const s=(...o)=>{x(n)&&(n=setTimeout((()=>{n=null;t.apply(null,o)}),e))};return{cancel:o,throttle:s}};const Te=(t,e)=>{let n=null;const o=()=>{if(!x(n)){clearTimeout(n);n=null}};const s=(...s)=>{o();n=setTimeout((()=>{n=null;t.apply(null,s)}),e)};return{cancel:o,throttle:s}};const Be=t=>{let e=false;let n;return(...o)=>{if(!e){e=true;n=t.apply(null,o)}return n}};const Le="\ufeff";const Pe=" ";const Me="…";const Ie=t=>t===Le;const Fe=t=>t.replace(/\uFEFF/g,"");const Ue=t=>{const e={};J(t,(t=>{e[t]={}}));return Et(e)};const ze=t=>t.length!==void 0;const $e=Array.isArray;const je=t=>{if($e(t))return t;{const e=[];for(let n=0,o=t.length;n<o;n++)e[n]=t[n];return e}};const He=(t,e,n)=>{if(!t)return false;n=n||t;if(ze(t)){for(let o=0,s=t.length;o<s;o++)if(e.call(n,t[o],o,t)===false)return false}else for(const o in t)if(Pt(t,o)&&e.call(n,t[o],o,t)===false)return false;return true};const We=(t,e)=>{const n=[];He(t,((o,s)=>{n.push(e(o,s,t))}));return n};const Ve=(t,e)=>{const n=[];He(t,((o,s)=>{e&&!e(o,s,t)||n.push(o)}));return n};const qe=(t,e)=>{if(t)for(let n=0,o=t.length;n<o;n++)if(t[n]===e)return n;return-1};const Ke=(t,e,n,o)=>{let s=S(n)?t[0]:n;for(let n=0;n<t.length;n++)s=e.call(o,s,t[n],n);return s};const Ye=(t,e,n)=>{for(let o=0,s=t.length;o<s;o++)if(e.call(n,t[o],o,t))return o;return-1};const Ge=t=>t[t.length-1];const Xe=(t,e,n,o)=>{const s=t.isiOS()&&/ipad/i.test(n)===true;const r=t.isiOS()&&!s;const c=t.isiOS()||t.isAndroid();const a=c||o("(pointer:coarse)");const i=s||!r&&c&&o("(min-device-width:768px)");const l=r||c&&!i;const d=e.isSafari()&&t.isiOS()&&/safari/i.test(n)===false;const u=!l&&!i&&!d;return{isiPad:P(s),isiPhone:P(r),isTablet:P(i),isPhone:P(l),isTouch:P(a),isAndroid:t.isAndroid,isiOS:t.isiOS,isWebView:P(d),isDesktop:P(u)}};const Qe=(t,e)=>{for(let n=0;n<t.length;n++){const o=t[n];if(o.test(e))return o}};const Ze=(t,e)=>{const n=Qe(t,e);if(!n)return{major:0,minor:0};const o=t=>Number(e.replace(n,"$"+t));return en(o(1),o(2))};const Je=(t,e)=>{const n=String(e).toLowerCase();return t.length===0?tn():Ze(t,n)};const tn=()=>en(0,0);const en=(t,e)=>({major:t,minor:e});const nn={nu:en,detect:Je,unknown:tn};const on=(t,e)=>wt(e.brands,(e=>{const n=e.brand.toLowerCase();return at(t,(t=>n===t.brand?.toLowerCase())).map((t=>({current:t.name,version:nn.nu(parseInt(e.version,10),0)})))}));const sn=(t,e)=>{const n=String(e).toLowerCase();return at(t,(t=>t.search(n)))};const rn=(t,e)=>sn(t,e).map((t=>{const n=nn.detect(t.versionRegexes,e);return{current:t.name,version:n}}));const cn=(t,e)=>sn(t,e).map((t=>{const n=nn.detect(t.versionRegexes,e);return{current:t.name,version:n}}));const an=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/;const ln=t=>e=>Ce(e,t);const dn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:t=>Ce(t,"edge/")&&Ce(t,"chrome")&&Ce(t,"safari")&&Ce(t,"applewebkit")},{name:"Chromium",brand:"Chromium",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,an],search:t=>Ce(t,"chrome")&&!Ce(t,"chromeframe")},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:t=>Ce(t,"msie")||Ce(t,"trident")},{name:"Opera",versionRegexes:[an,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ln("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ln("firefox")},{name:"Safari",versionRegexes:[an,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:t=>(Ce(t,"safari")||Ce(t,"mobile/"))&&Ce(t,"applewebkit")}];const un=[{name:"Windows",search:ln("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:t=>Ce(t,"iphone")||Ce(t,"ipad"),versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ln("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"macOS",search:ln("mac os x"),versionRegexes:[/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ln("linux"),versionRegexes:[]},{name:"Solaris",search:ln("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ln("freebsd"),versionRegexes:[]},{name:"ChromeOS",search:ln("cros"),versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/]}];const mn={browsers:P(dn),oses:P(un)};const fn="Edge";const pn="Chromium";const gn="IE";const hn="Opera";const bn="Firefox";const yn="Safari";const vn=()=>Cn({current:void 0,version:nn.unknown()});const Cn=t=>{const e=t.current;const n=t.version;const o=t=>()=>e===t;return{current:e,version:n,isEdge:o(fn),isChromium:o(pn),isIE:o(gn),isOpera:o(hn),isFirefox:o(bn),isSafari:o(yn)}};const wn={unknown:vn,nu:Cn,edge:P(fn),chromium:P(pn),ie:P(gn),opera:P(hn),firefox:P(bn),safari:P(yn)};const On="Windows";const En="iOS";const xn="Android";const kn="Linux";const Sn="macOS";const _n="Solaris";const Nn="FreeBSD";const Rn="ChromeOS";const An=()=>Dn({current:void 0,version:nn.unknown()});const Dn=t=>{const e=t.current;const n=t.version;const o=t=>()=>e===t;return{current:e,version:n,isWindows:o(On),isiOS:o(En),isAndroid:o(xn),isMacOS:o(Sn),isLinux:o(kn),isSolaris:o(_n),isFreeBSD:o(Nn),isChromeOS:o(Rn)}};const Tn={unknown:An,nu:Dn,windows:P(On),ios:P(En),android:P(xn),linux:P(kn),macos:P(Sn),solaris:P(_n),freebsd:P(Nn),chromeos:P(Rn)};const Bn=(t,e,n)=>{const o=mn.browsers();const s=mn.oses();const r=e.bind((t=>on(o,t))).orThunk((()=>rn(o,t))).fold(wn.unknown,wn.nu);const c=cn(s,t).fold(Tn.unknown,Tn.nu);const a=Xe(c,r,t,n);return{browser:r,os:c,deviceType:a}};const Ln={detect:Bn};const Pn=t=>window.matchMedia(t).matches;let Mn=Be((()=>Ln.detect(window.navigator.userAgent,Optional.from(window.navigator.userAgentData),Pn)));const In=()=>Mn();const Fn=(t,e)=>me(t,e);const Un=(t,e)=>{const n=Fn(t,e);if(n===void 0||n===null)throw new Error(t+" not available on this browser");return n};const zn=Object.getPrototypeOf;const $n=t=>Un("HTMLElement",t);const jn=t=>{const e=me("ownerDocument.defaultView",t);return w(t)&&($n(e).prototype.isPrototypeOf(t)||/^HTML\w*Element$/.test(zn(t).constructor.name))};const Hn=window.navigator.userAgent;const Wn=In();const Vn=Wn.browser;const qn=Wn.os;const Kn=Wn.deviceType;const Yn=Hn.indexOf("Windows Phone")!==-1;const Gn={
/**
     * Transparent image data url.
     *
     * @property transparentSrc
     * @type Boolean
     * @final
     */
transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
/**
     * Returns the IE document mode. For non IE browsers, this will fake IE 10 document mode.
     *
     * @property documentMode
     * @type Number
     */
documentMode:Vn.isIE()?document.documentMode||7:10,cacheSuffix:null,container:null,canHaveCSP:!Vn.isIE(),windowsPhone:Yn,browser:{current:Vn.current,version:Vn.version,isChromium:Vn.isChromium,isEdge:Vn.isEdge,isFirefox:Vn.isFirefox,isIE:Vn.isIE,isOpera:Vn.isOpera,isSafari:Vn.isSafari},os:{current:qn.current,version:qn.version,isAndroid:qn.isAndroid,isChromeOS:qn.isChromeOS,isFreeBSD:qn.isFreeBSD,isiOS:qn.isiOS,isLinux:qn.isLinux,isMacOS:qn.isMacOS,isSolaris:qn.isSolaris,isWindows:qn.isWindows},deviceType:{isDesktop:Kn.isDesktop,isiPad:Kn.isiPad,isiPhone:Kn.isiPhone,isPhone:Kn.isPhone,isTablet:Kn.isTablet,isTouch:Kn.isTouch,isWebView:Kn.isWebView}};
/**
   * Removes whitespace from the beginning and end of a string.
   *
   * @method trim
   * @param {String} s String to remove whitespace from.
   * @return {String} New string with removed whitespace.
   */const Xn=/^\s*|\s*$/g;const Qn=t=>_(t)?"":(""+t).replace(Xn,"");
/**
   * Checks if a object is of a specific type for example an array.
   *
   * @method is
   * @param {Object} obj Object to check type of.
   * @param {String} type Optional type to check for.
   * @return {Boolean} true/false if the object is of the specified type.
   */const Zn=(t,e)=>e?!(e!=="array"||!$e(t))||typeof t===e:t!==void 0;
/**
   * Makes a name/object map out of an array with names.
   *
   * @method makeMap
   * @param {Array/String} items Items to make map out of.
   * @param {String} delim Optional delimiter to split string by.
   * @param {Object} map Optional map to add items to.
   * @return {Object} Name/value map of items.
   */const Jn=(t,e,n={})=>{const o=C(t)?t.split(e||","):t||[];let s=o.length;while(s--)n[o[s]]={};return n};
/**
   * JavaScript does not protect hasOwnProperty method, so it is possible to overwrite it. This is
   * an object independent version.
   * Checks if the input object "<code>obj</code>" has the property "<code>prop</code>".
   *
   * @method hasOwnProperty
   * @param {Object} obj Object to check if the property exists.
   * @param {String} prop Name of a property on the object.
   * @returns {Boolean} true if the object has the specified property.
   */const to=Pt;const eo=(t,...e)=>{for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if(Pt(o,e)){const n=o[e];n!==void 0&&(t[e]=n)}}return t};
/**
   * Executed the specified function for each item in a object tree.
   *
   * @method walk
   * @param {Object} o Object tree to walk though.
   * @param {Function} f Function to call for each item.
   * @param {String} n Optional name of collection inside the objects to walk for example childNodes.
   * @param {String} s Optional scope to execute the function in.
   */const no=function(e,n,o,s){s=s||this||t;if(e){o&&(e=e[o]);He(e,((t,e)=>{if(n.call(s,t,e,o)===false)return false;no(t,n,o,s);return true}))}};
/**
   * Resolves a string and returns the object from a specific structure.
   *
   * @method resolve
   * @param {String} n Path to resolve for example a.b.c.d.
   * @param {Object} o Optional object to search though, defaults to window.
   * @return {Object} Last object in path or null if it couldn't be resolved.
   * @example
   * // Resolve a path into an object reference
   * const obj = tinymce.resolve('a.b.c.d');
   */const oo=(t,e=window)=>{const n=t.split(".");for(let t=0,o=n.length;t<o;t++){e=e[n[t]];if(!e)break}return e};
/**
   * Splits a string but removes the whitespace before and after each value.
   *
   * @method explode
   * @param {String} s String to split.
   * @param {String} d Delimiter to split by.
   * @example
   * // Split a string into an array with a,b,c
   * const arr = tinymce.explode('a, b,   c');
   */const so=(t,e)=>E(t)?t:t===""?[]:We(t.split(e||","),Qn);const ro=t=>{const e=Gn.cacheSuffix;e&&(t+=(t.indexOf("?")===-1?"?":"&")+e);return t};const co={trim:Qn,
/**
     * Returns true/false if the object is an array or not.
     *
     * @method isArray
     * @param {Object} obj Object to check.
     * @return {Boolean} true/false state if the object is an array or not.
     */
isArray:$e,is:Zn,
/**
     * Converts the specified object into a real JavaScript array.
     *
     * @method toArray
     * @param {Object} obj Object to convert into array.
     * @return {Array} Array object based in input.
     */
toArray:je,makeMap:Jn,
/**
     * Performs an iteration of all items in a collection such as an object or array. This method will execute the
     * callback function for each item in the collection, if the callback returns false the iteration will terminate.
     * The callback has the following format: `cb(value, key_or_index)`.
     *
     * @method each
     * @param {Object} o Collection to iterate.
     * @param {Function} cb Callback function to execute for each item.
     * @param {Object} s Optional scope to execute the callback in.
     * @example
     * // Iterate an array
     * tinymce.each([ 1,2,3 ], (v, i) => {
     *   console.debug("Value: " + v + ", Index: " + i);
     * });
     *
     * // Iterate an object
     * tinymce.each({ a: 1, b: 2, c: 3 }, (v, k) => {
     *   console.debug("Value: " + v + ", Key: " + k);
     * });
     */
each:He,
/**
     * Creates a new array by the return value of each iteration function call. This enables you to convert
     * one array list into another.
     *
     * @method map
     * @param {Array} array Array of items to iterate.
     * @param {Function} callback Function to call for each item. It's return value will be the new value.
     * @return {Array} Array with new values based on function return values.
     */
map:We,
/**
     * Filters out items from the input array by calling the specified function for each item.
     * If the function returns false the item will be excluded if it returns true it will be included.
     *
     * @method grep
     * @param {Array} a Array of items to loop though.
     * @param {Function} f Function to call for each item. Include/exclude depends on it's return value.
     * @return {Array} New array with values imported and filtered based in input.
     * @example
     * // Filter out some items, this will return an array with 4 and 5
     * const items = tinymce.grep([ 1,2,3,4,5 ], (v) => v > 3);
     */
grep:Ve,
/**
     * Returns an index of the item or -1 if item is not present in the array.
     *
     * @method inArray
     * @param {any} item Item to search for.
     * @param {Array} arr Array to search in.
     * @return {Number} index of the item or -1 if item was not found.
     */
inArray:qe,hasOwn:to,extend:eo,walk:no,resolve:oo,explode:so,_addCacheSuffix:ro};const ao=(t,e)=>{const n=e||document;const o=n.createElement("div");o.innerHTML=t;if(!o.hasChildNodes()||o.childNodes.length>1){const e="HTML does not have a single root node";console.error(e,t);throw new Error(e)}return uo(o.childNodes[0])};const io=(t,e)=>{const n=e||document;const o=n.createElement(t);return uo(o)};const lo=(t,e)=>{const n=e||document;const o=n.createTextNode(t);return uo(o)};const uo=t=>{if(t===null||t===void 0)throw new Error("Node cannot be null or undefined");return{dom:t}};const mo=(t,e,n)=>Optional.from(t.dom.elementFromPoint(e,n)).map(uo);const fo={fromHtml:ao,fromTag:io,fromText:lo,fromDom:uo,fromPoint:mo};const po=(t,e)=>{e.fold((e=>{t.setStartBefore(e.dom)}),((e,n)=>{t.setStart(e.dom,n)}),(e=>{t.setStartAfter(e.dom)}))};const go=(t,e)=>{e.fold((e=>{t.setEndBefore(e.dom)}),((e,n)=>{t.setEnd(e.dom,n)}),(e=>{t.setEndAfter(e.dom)}))};const ho=(t,e,n)=>{const o=t.document.createRange();po(o,e);go(o,n);return o};const bo=(t,e,n,o,s)=>{const r=t.document.createRange();r.setStart(e.dom,n);r.setEnd(o.dom,s);return r};const yo=Ut.generate([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}]);const vo=(t,e,n)=>e(fo.fromDom(n.startContainer),n.startOffset,fo.fromDom(n.endContainer),n.endOffset);const Co=(t,e)=>e.match({domRange:t=>({ltr:P(t),rtl:Optional.none}),relative:(e,n)=>({ltr:Be((()=>ho(t,e,n))),rtl:Be((()=>Optional.some(ho(t,n,e))))}),exact:(e,n,o,s)=>({ltr:Be((()=>bo(t,e,n,o,s))),rtl:Be((()=>Optional.some(bo(t,o,s,e,n))))})});const wo=(t,e)=>{const n=e.ltr();if(n.collapsed){const o=e.rtl().filter((t=>t.collapsed===false));return o.map((t=>yo.rtl(fo.fromDom(t.endContainer),t.endOffset,fo.fromDom(t.startContainer),t.startOffset))).getOrThunk((()=>vo(t,yo.ltr,n)))}return vo(t,yo.ltr,n)};const Oo=(t,e)=>{const n=Co(t,e);return wo(t,n)};yo.ltr;yo.rtl;const Eo=8;const xo=9;const ko=11;const So=1;const _o=3;const No=(t,e)=>{const n=t.dom;if(n.nodeType!==So)return false;{const t=n;if(t.matches!==void 0)return t.matches(e);if(t.msMatchesSelector!==void 0)return t.msMatchesSelector(e);if(t.webkitMatchesSelector!==void 0)return t.webkitMatchesSelector(e);if(t.mozMatchesSelector!==void 0)return t.mozMatchesSelector(e);throw new Error("Browser lacks native selectors")}};const Ro=t=>t.nodeType!==So&&t.nodeType!==xo&&t.nodeType!==ko||t.childElementCount===0;const Ao=(t,e)=>{const n=e===void 0?document:e.dom;return Ro(n)?[]:Z(n.querySelectorAll(t),fo.fromDom)};const Do=(t,e)=>{const n=e===void 0?document:e.dom;return Ro(n)?Optional.none():Optional.from(n.querySelector(t)).map(fo.fromDom)};const To=(t,e)=>t.dom===e.dom;const Bo=(t,e)=>{const n=t.dom;const o=e.dom;return n!==o&&n.contains(o)};const Lo=No;const Po=(t,e)=>{const n=[];const o=t=>{n.push(t);return e(t)};let s=e(t);do{s=s.bind(o)}while(s.isSome());return n};const Mo=t=>{const e=t.dom.nodeName;return e.toLowerCase()};const Io=t=>t.dom.nodeType;const Fo=t=>e=>Io(e)===t;const Uo=t=>Io(t)===Eo||Mo(t)==="#comment";const zo=t=>$o(t)&&jn(t.dom);const $o=Fo(So);const jo=Fo(_o);const Ho=Fo(xo);const Wo=Fo(ko);const Vo=t=>e=>$o(e)&&Mo(e)===t;const qo=t=>fo.fromDom(t.dom.ownerDocument)
/**
   * If the element is a document, return it. Otherwise, return its ownerDocument.
   * @param dos
   */;const Ko=t=>Ho(t)?t:qo(t);const Yo=t=>fo.fromDom(Ko(t).dom.documentElement);const Go=t=>fo.fromDom(Ko(t).dom.defaultView);const Xo=t=>Optional.from(t.dom.parentNode).map(fo.fromDom);const Qo=t=>Optional.from(t.dom.parentElement).map(fo.fromDom);const Zo=(t,e)=>{const n=R(e)?e:H;let o=t.dom;const s=[];while(o.parentNode!==null&&o.parentNode!==void 0){const t=o.parentNode;const e=fo.fromDom(t);s.push(e);if(n(e)===true)break;o=t}return s};const Jo=t=>{const e=e=>nt(e,(e=>!To(t,e)));return Xo(t).map(ss).map(e).getOr([])};const ts=t=>Optional.from(t.dom.previousSibling).map(fo.fromDom);const es=t=>Optional.from(t.dom.nextSibling).map(fo.fromDom);const ns=t=>ft(Po(t,ts));const os=t=>Po(t,es);const ss=t=>Z(t.dom.childNodes,fo.fromDom);const rs=(t,e)=>{const n=t.dom.childNodes;return Optional.from(n[e]).map(fo.fromDom)};const cs=t=>rs(t,0);const as=t=>rs(t,t.dom.childNodes.length-1);const is=t=>t.dom.childNodes.length;const ls=t=>{const e=t.dom.head;if(e===null||e===void 0)throw new Error("Head is not available yet");return fo.fromDom(e)};const ds=t=>Wo(t)&&N(t.dom.host);const us=t=>fo.fromDom(t.dom.getRootNode());const ms=t=>ds(t)?t:ls(Ko(t));const fs=t=>ds(t)?t:fo.fromDom(Ko(t).dom.body);const ps=t=>{const e=us(t);return ds(e)?Optional.some(e):Optional.none()};const gs=t=>fo.fromDom(t.dom.host);const hs=t=>{if(N(t.target)){const e=fo.fromDom(t.target);if($o(e)&&bs(e)&&t.composed&&t.composedPath){const e=t.composedPath();if(e)return yt(e)}}return Optional.from(t.target)};const bs=t=>N(t.dom.shadowRoot);const ys=(t,e,n,o,s,r,c)=>({target:t,x:e,y:n,stop:o,prevent:s,kill:r,raw:c});const vs=t=>{const e=fo.fromDom(hs(t).getOr(t.target));const n=()=>t.stopPropagation();const o=()=>t.preventDefault();const s=B(o,n);return ys(e,t.clientX,t.clientY,n,o,s,t)};const Cs=(t,e)=>n=>{t(n)&&e(vs(n))};const ws=(t,e,n,o,s)=>{const r=Cs(n,o);t.dom.addEventListener(e,r,s);return{unbind:F(Es,t,e,r,s)}};const Os=(t,e,n,o)=>ws(t,e,n,o,false);const Es=(t,e,n,o)=>{t.dom.removeEventListener(e,n,o)};const xs=W;const ks=(t,e,n)=>Os(t,e,xs,n);const Ss=()=>fo.fromDom(document);const _s=(t,e=false)=>t.dom.focus({preventScroll:e});const Ns=t=>{const e=us(t).dom;return t.dom===e.activeElement};const Rs=(t=Ss())=>Optional.from(t.dom.activeElement).map(fo.fromDom);const As=t=>Rs(us(t)).filter((e=>t.dom.contains(e.dom)));const Ds=(t,e)=>{const n=Xo(t);n.each((n=>{n.dom.insertBefore(e.dom,t.dom)}))};const Ts=(t,e)=>{const n=es(t);n.fold((()=>{const n=Xo(t);n.each((t=>{Ls(t,e)}))}),(t=>{Ds(t,e)}))};const Bs=(t,e)=>{const n=cs(t);n.fold((()=>{Ls(t,e)}),(n=>{t.dom.insertBefore(e.dom,n.dom)}))};const Ls=(t,e)=>{t.dom.appendChild(e.dom)};const Ps=(t,e)=>{Ds(t,e);Ls(e,t)};const Ms=(t,e)=>{J(e,(e=>{Ds(t,e)}))};const Is=(t,e)=>{J(e,((n,o)=>{const s=o===0?t:e[o-1];Ts(s,n)}))};const Fs=(t,e)=>{J(e,(e=>{Ls(t,e)}))};const Us=(t,e,n)=>{if(!(C(n)||k(n)||A(n))){console.error("Invalid call to Attribute.set. Key ",e,":: Value ",n,":: Element ",t);throw new Error("Attribute value was not simple")}t.setAttribute(e,n+"")};const zs=(t,e,n)=>{Us(t.dom,e,n)};const $s=(t,e)=>{const n=t.dom;kt(e,((t,e)=>{Us(n,e,t)}))};const js=(t,e)=>{const n=t.dom.getAttribute(e);return n===null?void 0:n};const Hs=(t,e)=>Optional.from(js(t,e));const Ws=(t,e)=>{const n=t.dom;return!(!n||!n.hasAttribute)&&n.hasAttribute(e)};const Vs=(t,e)=>{t.dom.removeAttribute(e)};const qs=t=>{const e=t.dom.attributes;return e===void 0||e===null||e.length===0};const Ks=t=>rt(t.dom.attributes,((t,e)=>{t[e.name]=e.value;return t}),{});const Ys=t=>{t.dom.textContent="";J(ss(t),(t=>{Gs(t)}))};const Gs=t=>{const e=t.dom;e.parentNode!==null&&e.parentNode.removeChild(e)};const Xs=t=>{const e=ss(t);e.length>0&&Is(t,e);Gs(t)};const Qs=(t,e)=>fo.fromDom(t.dom.cloneNode(e));const Zs=t=>Qs(t,false);const Js=t=>Qs(t,true);const tr=(t,e)=>{const n=fo.fromTag(e);const o=Ks(t);$s(n,o);return n};const er=(t,e)=>{const n=tr(t,e);Ts(t,n);const o=ss(t);Fs(n,o);Gs(t);return n};const nr=(t,e)=>{const n=e||document;const o=n.createElement("div");o.innerHTML=t;return ss(fo.fromDom(o))};const or=t=>Z(t,fo.fromDom);const sr=t=>t.dom.innerHTML;const rr=(t,e)=>{const n=qo(t);const o=n.dom;const s=fo.fromDom(o.createDocumentFragment());const r=nr(e,o);Fs(s,r);Ys(t);Ls(t,s)};const cr=t=>{const e=fo.fromTag("div");const n=fo.fromDom(t.dom.cloneNode(true));Ls(e,n);return sr(e)};const ar=t=>t.style!==void 0&&R(t.style.getPropertyValue);const ir=t=>{const e=jo(t)?t.dom.parentNode:t.dom;if(e===void 0||e===null||e.ownerDocument===null)return false;const n=e.ownerDocument;return ps(fo.fromDom(e)).fold((()=>n.body.contains(e)),L(ir,gs))};const lr=(t,e,n)=>{if(!C(n)){console.error("Invalid call to CSS.set. Property ",e,":: Value ",n,":: Element ",t);throw new Error("CSS value must be a string: "+n)}ar(t)&&t.style.setProperty(e,n)};const dr=(t,e)=>{ar(t)&&t.style.removeProperty(e)};const ur=(t,e,n)=>{const o=t.dom;lr(o,e,n)};const mr=(t,e)=>{const n=t.dom;kt(e,((t,e)=>{lr(n,e,t)}))};const fr=(t,e)=>{const n=t.dom;const o=window.getComputedStyle(n);const s=o.getPropertyValue(e);return s!==""||ir(t)?s:pr(n,e)};const pr=(t,e)=>ar(t)?t.style.getPropertyValue(e):"";const gr=(t,e)=>{const n=t.dom;const o=pr(n,e);return Optional.from(o).filter((t=>t.length>0))};const hr=t=>{const e={};const n=t.dom;if(ar(n))for(let t=0;t<n.style.length;t++){const o=n.style.item(t);e[o]=n.style[o]}return e};const br=(t,e)=>{const n=t.dom;dr(n,e);se(Hs(t,"style").map(xe),"")&&Vs(t,"style")};const yr=t=>t.dom.offsetWidth;const vr=(t,e)=>{const n=(e,n)=>{if(!A(n)&&!n.match(/^[0-9]+$/))throw new Error(t+".set accepts only positive integer values. Value was "+n);const o=e.dom;ar(o)&&(o.style[t]=n+"px")};const o=n=>{const o=e(n);if(o<=0||o===null){const e=fr(n,t);return parseFloat(e)||0}return o};const s=o;const r=(t,e)=>rt(e,((e,n)=>{const o=fr(t,n);const s=o===void 0?0:parseInt(o,10);return isNaN(s)?e:e+s}),0);const c=(t,e,n)=>{const o=r(t,n);const s=e>o?e-o:0;return s};return{set:n,get:o,getOuter:s,aggregate:r,max:c}};const Cr=vr("height",(t=>{const e=t.dom;return ir(t)?e.getBoundingClientRect().height:e.offsetHeight}));const wr=t=>Cr.get(t);const Or=(t,e)=>{const n=(n,o)=>Or(t+n,e+o);return{left:t,top:e,translate:n}};const Er=Or;const xr=t=>{const e=t.getBoundingClientRect();return Er(e.left,e.top)};const kr=(t,e)=>t!==void 0?t:e!==void 0?e:0;const Sr=t=>{const e=t.dom.ownerDocument;const n=e.body;const o=e.defaultView;const s=e.documentElement;if(n===t.dom)return Er(n.offsetLeft,n.offsetTop);const r=kr(o?.pageYOffset,s.scrollTop);const c=kr(o?.pageXOffset,s.scrollLeft);const a=kr(s.clientTop,n.clientTop);const i=kr(s.clientLeft,n.clientLeft);return _r(t).translate(c-i,r-a)};const _r=t=>{const e=t.dom;const n=e.ownerDocument;const o=n.body;return o===e?Er(o.offsetLeft,o.offsetTop):ir(t)?xr(e):Er(0,0)};const Nr=t=>{const e=t!==void 0?t.dom:document;const n=e.body.scrollLeft||e.documentElement.scrollLeft;const o=e.body.scrollTop||e.documentElement.scrollTop;return Er(n,o)};const Rr=(t,e,n)=>{const o=n!==void 0?n.dom:document;const s=o.defaultView;s&&s.scrollTo(t,e)};const Ar=(t,e)=>{const n=In().browser.isSafari();n&&R(t.dom.scrollIntoViewIfNeeded)?t.dom.scrollIntoViewIfNeeded(false):t.dom.scrollIntoView(e)};const Dr=(t,e)=>{const n=n=>{if(!t(n))throw new Error("Can only get "+e+" value of a "+e+" node");return o(n).getOr("")};const o=e=>t(e)?Optional.from(e.dom.nodeValue):Optional.none();const s=(n,o)=>{if(!t(n))throw new Error("Can only set raw "+e+" value of a "+e+" node");n.dom.nodeValue=o};return{get:n,getOption:o,set:s}};const Tr=(t,e)=>{const n=e||document;const o=n.createDocumentFragment();J(t,(t=>{o.appendChild(t.dom)}));return fo.fromDom(o)};const Br=Dr(jo,"text");const Lr=t=>Br.get(t);const Pr=t=>Br.getOption(t);const Mr=(t,e)=>Br.set(t,e);const Ir=(t,e)=>{const n=js(t,e);return n===void 0||n===""?[]:n.split(" ")};const Fr=(t,e,n)=>{const o=Ir(t,e);const s=o.concat([n]);zs(t,e,s.join(" "));return true};const Ur=(t,e,n)=>{const o=nt(Ir(t,e),(t=>t!==n));o.length>0?zs(t,e,o.join(" ")):Vs(t,e);return false};var zr=(t,e,n,o,s)=>t(n,o)?Optional.some(n):R(s)&&s(n)?Optional.none():e(n,o,s);const $r=(t,e,n)=>{let o=t.dom;const s=R(n)?n:H;while(o.parentNode){o=o.parentNode;const t=fo.fromDom(o);if(e(t))return Optional.some(t);if(s(t))break}return Optional.none()};const jr=(t,e,n)=>{const o=(t,e)=>e(t);return zr(o,$r,t,e,n)};const Hr=(t,e)=>{const n=t.dom;return n.parentNode?Wr(fo.fromDom(n.parentNode),(n=>!To(t,n)&&e(n))):Optional.none()};const Wr=(t,e)=>{const n=t=>e(fo.fromDom(t));const o=at(t.dom.childNodes,n);return o.map(fo.fromDom)};const Vr=(t,e)=>{const n=t=>{for(let o=0;o<t.childNodes.length;o++){const s=fo.fromDom(t.childNodes[o]);if(e(s))return Optional.some(s);const r=n(t.childNodes[o]);if(r.isSome())return r}return Optional.none()};return n(t.dom)};const qr=(t,e,n)=>$r(t,(t=>No(t,e)),n);const Kr=(t,e)=>Do(e,t);const Yr=(t,e,n)=>{const o=(t,e)=>No(t,e);return zr(o,qr,t,e,n)};const Gr=t=>t.dom.classList!==void 0;const Xr=t=>Ir(t,"class");const Qr=(t,e)=>Fr(t,"class",e);const Zr=(t,e)=>Ur(t,"class",e);const Jr=(t,e)=>X(Xr(t),e)?Zr(t,e):Qr(t,e);const tc=(t,e)=>{Gr(t)?t.dom.classList.add(e):Qr(t,e)};const ec=t=>{const e=Gr(t)?t.dom.classList:Xr(t);e.length===0&&Vs(t,"class")};const nc=(t,e)=>{if(Gr(t)){const n=t.dom.classList;n.remove(e)}else Zr(t,e);ec(t)};const oc=(t,e)=>{const n=Gr(t)?t.dom.classList.toggle(e):Jr(t,e);ec(t);return n};const sc=(t,e)=>Gr(t)&&t.dom.classList.contains(e);const rc=(t,e)=>{J(e,(e=>{tc(t,e)}))};const cc=(t,e)=>{J(e,(e=>{nc(t,e)}))};const ac=t=>Yr(t,"[contenteditable]");const ic=(t,e=false)=>ir(t)?t.dom.isContentEditable:ac(t).fold(P(e),(t=>lc(t)==="true"));const lc=t=>t.dom.contentEditable;const dc=(t,e)=>{t.dom.contentEditable=e?"true":"false"};const uc=(t,e,n)=>nt(Zo(t,n),e);const mc=(t,e)=>nt(ss(t),e);const fc=(t,e)=>{let n=[];J(ss(t),(t=>{e(t)&&(n=n.concat([t]));n=n.concat(fc(t,e))}));return n};const pc=(t,e,n)=>uc(t,(t=>No(t,e)),n);const gc=(t,e)=>Ao(e,t);const hc=(t,e,n)=>$r(t,e,n).isSome();const bc=(t,e)=>Hr(t,e).isSome();const yc=(t,e)=>Vr(t,e).isSome();const vc=(t,e)=>hc(t,F(To,e));const Cc=(t,e,n)=>qr(t,e,n).isSome();const wc=(t,e,n)=>Yr(t,e,n).isSome();const Oc=t=>R(t)?t:H;const Ec=(t,e,n)=>{let o=t.dom;const s=Oc(n);while(o.parentNode){o=o.parentNode;const t=fo.fromDom(o);const n=e(t);if(n.isSome())return n;if(s(t))break}return Optional.none()};const xc=(t,e,n)=>{const o=e(t);const s=Oc(n);return o.orThunk((()=>s(t)?Optional.none():Ec(t,e,s)))};const kc=t=>Pr(t).filter((t=>t.trim().length!==0||t.indexOf(Pe)>-1)).isSome();const Sc=t=>zo(t)&&js(t,"contenteditable")==="false";const _c=["img","br"];const Nc=t=>{const e=kc(t);return e||X(_c,Mo(t))||Sc(t)};const Rc=t=>Vr(t,Nc);const Ac=(t,e,n,o)=>({start:t,soffset:e,finish:n,foffset:o});const Dc={create:Ac};const Tc=Ut.generate([{before:["element"]},{on:["element","offset"]},{after:["element"]}]);const Bc=(t,e,n,o)=>t.fold(e,n,o);const Lc=t=>t.fold(M,M,M);const Pc=Tc.before;const Mc=Tc.on;const Ic=Tc.after;const Fc={before:Pc,on:Mc,after:Ic,cata:Bc,getStart:Lc};const Uc=Ut.generate([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}]);const zc=t=>Uc.exact(t.start,t.soffset,t.finish,t.foffset);const $c=t=>t.match({domRange:t=>fo.fromDom(t.startContainer),relative:(t,e)=>Fc.getStart(t),exact:(t,e,n,o)=>t});const jc=Uc.domRange;const Hc=Uc.relative;const Wc=Uc.exact;const Vc=t=>{const e=$c(t);return Go(e)};const qc=Dc.create;const Kc={domRange:jc,relative:Hc,exact:Wc,exactFromRange:zc,getWin:Vc,range:qc};const Yc=(t,e,n)=>Optional.from(t.caretPositionFromPoint?.(e,n)).bind((e=>{if(e.offsetNode===null)return Optional.none();const n=t.createRange();n.setStart(e.offsetNode,e.offset);n.collapse();return Optional.some(n)}));const Gc=(t,e,n)=>Optional.from(t.caretRangeFromPoint?.(e,n));const Xc=(t,e,n)=>t.caretPositionFromPoint?Yc(t,e,n):t.caretRangeFromPoint?Gc(t,e,n):Optional.none();const Qc=(t,e,n)=>{const o=t.document;return Xc(o,e,n).map((t=>Dc.create(fo.fromDom(t.startContainer),t.startOffset,fo.fromDom(t.endContainer),t.endOffset)))};const Zc=(t,e)=>{const n=Mo(t);return"input"===n?Fc.after(t):X(["br","img"],n)?e===0?Fc.before(t):Fc.after(t):Fc.on(t,e)};const Jc=(t,e)=>{const n=t.fold(Fc.before,Zc,Fc.after);const o=e.fold(Fc.before,Zc,Fc.after);return Kc.relative(n,o)};const ta=(t,e,n,o)=>{const s=Zc(t,e);const r=Zc(n,o);return Kc.relative(s,r)};const ea=t=>t.match({domRange:t=>{const e=fo.fromDom(t.startContainer);const n=fo.fromDom(t.endContainer);return ta(e,t.startOffset,n,t.endOffset)},relative:Jc,exact:ta});const na=t=>{const e=Kc.getWin(t).dom;const n=(t,n,o,s)=>bo(e,t,n,o,s);const o=ea(t);return Oo(e,o).match({ltr:n,rtl:n})};const oa=(t,e,n)=>Qc(t,e,n);const sa=t=>{const e=t===void 0?window:t;return In().browser.isFirefox()?Optional.none():Optional.from(e.visualViewport)};const ra=(t,e,n,o)=>({x:t,y:e,width:n,height:o,right:t+n,bottom:e+o});const ca=t=>{const e=t===void 0?window:t;const n=e.document;const o=Nr(fo.fromDom(n));return sa(e).fold((()=>{const t=e.document.documentElement;const n=t.clientWidth;const s=t.clientHeight;return ra(o.left,o.top,n,s)}),(t=>ra(Math.max(t.pageLeft,o.left),Math.max(t.pageTop,o.top),t.width,t.height)))};class DomTreeWalker{rootNode;node;constructor(t,e){this.node=t;this.rootNode=e;this.current=this.current.bind(this);this.next=this.next.bind(this);this.prev=this.prev.bind(this);this.prev2=this.prev2.bind(this)}current(){return this.node}next(t){this.node=this.findSibling(this.node,"firstChild","nextSibling",t);return this.node}prev(t){this.node=this.findSibling(this.node,"lastChild","previousSibling",t);return this.node}prev2(t){this.node=this.findPreviousNode(this.node,t);return this.node}findSibling(t,e,n,o){if(t){if(!o&&t[e])return t[e];if(t!==this.rootNode){let e=t[n];if(e)return e;for(let o=t.parentNode;o&&o!==this.rootNode;o=o.parentNode){e=o[n];if(e)return e}}}}findPreviousNode(t,e){if(t){const n=t.previousSibling;if(this.rootNode&&n===this.rootNode)return;if(n){if(!e)for(let t=n.lastChild;t;t=t.lastChild)if(!t.lastChild)return t;return n}const o=t.parentNode;if(o&&o!==this.rootNode)return o}}}const aa=/^[ \t\r\n]*$/;const ia=t=>aa.test(t);const la=t=>{for(const e of t)if(!Ie(e))return false;return true};const da=t=>" \f\t\v".indexOf(t)!==-1;const ua=t=>t==="\n"||t==="\r";const ma=(t,e)=>e<t.length&&e>=0&&ua(t[e]);const fa=(t,e=4,n=true,o=true)=>{const s=Re(" ",e);const r=t.replace(/\t/g,s);const c=rt(r,((t,e)=>da(e)||e===Pe?t.pcIsSpace||t.str===""&&n||t.str.length===r.length-1&&o||ma(r,t.str.length+1)?{pcIsSpace:false,str:t.str+Pe}:{pcIsSpace:true,str:t.str+" "}:{pcIsSpace:ua(e),str:t.str+e}),{pcIsSpace:false,str:""});return c.str};const pa=t=>e=>!!e&&e.nodeType===t;const ga=t=>!!t&&!Object.getPrototypeOf(t);const ha=pa(1);const ba=t=>ha(t)&&zo(fo.fromDom(t));const ya=t=>ha(t)&&t.namespaceURI==="http://www.w3.org/2000/svg";const va=t=>{const e=t.toLowerCase();return t=>N(t)&&t.nodeName.toLowerCase()===e};const Ca=t=>{const e=t.map((t=>t.toLowerCase()));return t=>{if(t&&t.nodeName){const n=t.nodeName.toLowerCase();return X(e,n)}return false}};const wa=(t,e)=>{const n=e.toLowerCase().split(" ");return e=>{if(ha(e)){const o=e.ownerDocument.defaultView;if(o)for(let s=0;s<n.length;s++){const r=o.getComputedStyle(e,null);const c=r?r.getPropertyValue(t):null;if(c===n[s])return true}}return false}};const Oa=t=>e=>ha(e)&&e.hasAttribute(t);const Ea=t=>ha(t)&&t.hasAttribute("data-mce-bogus");const xa=t=>ha(t)&&t.getAttribute("data-mce-bogus")==="all";const ka=t=>ha(t)&&t.tagName==="TABLE";const Sa=t=>e=>{if(ba(e)){if(e.contentEditable===t)return true;if(e.getAttribute("data-mce-contenteditable")===t)return true}return false};const _a=Ca(["textarea","input"]);const Na=pa(3);const Ra=pa(4);const Aa=pa(7);const Da=pa(8);const Ta=pa(9);const Ba=pa(11);const La=va("br");const Pa=va("img");const Ma=va("a");const Ia=Sa("true");const Fa=Sa("false");const Ua=t=>ba(t)&&t.isContentEditable&&N(t.parentElement)&&!t.parentElement.isContentEditable;const za=Ca(["td","th"]);const $a=Ca(["td","th","caption"]);const ja=va("template");const Ha=Ca(["video","audio","object","embed"]);const Wa=va("li");const Va=va("details");const qa=va("summary");const Ka="uc-video";const Ya=t=>t.nodeName.toLowerCase()===Ka;const Ga={skipBogus:true,includeZwsp:false,checkRootAsContent:false};const Xa=(t,e,n)=>{const o=fo.fromDom(e);const s=fo.fromDom(t);const r=n.getWhitespaceElements();const c=t=>Pt(r,Mo(t));return hc(s,c,F(To,o))};const Qa=t=>ha(t)&&t.nodeName==="A"&&!t.hasAttribute("href")&&(t.hasAttribute("name")||t.hasAttribute("id"));const Za=(t,e)=>ha(t)&&Pt(e.getNonEmptyElements(),t.nodeName);const Ja=Oa("data-mce-bookmark");const ti=t=>Qo(fo.fromDom(t)).exists((t=>!ic(t)));const ei=(t,e,n)=>ia(t.data)&&!Xa(t,e,n);const ni=(t,e,n,o)=>Na(t)&&!ei(t,e,n)&&(!o.includeZwsp||!la(t.data));const oi=(t,e,n,o)=>R(o.isContent)&&o.isContent(e)||Za(e,t)||Ja(e)||Qa(e)||ni(e,n,t,o)||Fa(e)||Ia(e)&&ti(e);const si=(t,e,n)=>{const o={...Ga,...n};if(o.checkRootAsContent&&oi(t,e,e,o))return false;let s=e.firstChild;let r=0;if(!s)return true;const c=new DomTreeWalker(s,e);do{if(o.skipBogus&&ha(s)){const t=s.getAttribute("data-mce-bogus");if(t){s=c.next(t==="all");continue}}if(Da(s))s=c.next(true);else if(La(s)){r++;s=c.next()}else{if(oi(t,s,e,o))return false;s=c.next()}}while(s);return r<=1};const ri=(t,e,n)=>si(t,e.dom,{checkRootAsContent:true,...n});const ci=(t,e,n)=>oi(t,e,e,{includeZwsp:Ga.includeZwsp,...n});const ai=t=>{const e=t.toLowerCase();return e==="svg"?"svg":e==="math"?"math":"html"};const ii=t=>ai(t)!=="html";const li=t=>ii(t.nodeName);const di=t=>ai(t.nodeName);const ui=["svg","math"];const mi=()=>{const t=he();const e=()=>t.get().map(di).getOr("html");const n=n=>{li(n)?t.set(n):t.get().exists((t=>!t.contains(n)))&&t.clear();return e()};const o=()=>{t.clear()};return{track:n,current:e,reset:o}};const fi="data-mce-block";const pi=t=>nt(Et(t),(t=>!/[A-Z]/.test(t)));const gi=t=>Z(pi(t),(t=>{const e=CSS.escape(t);return`${e}:`+Z(ui,(t=>`not(${t} ${e})`)).join(":")})).join(",");const hi=(t,e)=>{if(N(e.querySelector(t))){e.setAttribute(fi,"true");e.getAttribute("data-mce-selected")==="inline-boundary"&&e.removeAttribute("data-mce-selected");return true}e.removeAttribute(fi);return false};const bi=(t,e)=>{const n=gi(t.getTransparentElements());const o=gi(t.getBlockElements());return nt(e.querySelectorAll(n),(t=>hi(o,t)))};const yi=(t,e,n)=>{const o=n?"lastChild":"firstChild";for(let n=e[o];n;n=n[o])if(si(t,n,{checkRootAsContent:true})){n.parentNode?.removeChild(n);return}};const vi=(t,e,n)=>{const o=document.createRange();const s=e.parentNode;if(s){o.setStartBefore(e);o.setEndBefore(n);const r=o.extractContents();yi(t,r,true);o.setStartAfter(n);o.setEndAfter(e);const c=o.extractContents();yi(t,c,false);si(t,r,{checkRootAsContent:true})||s.insertBefore(r,e);si(t,n,{checkRootAsContent:true})||s.insertBefore(n,e);si(t,c,{checkRootAsContent:true})||s.insertBefore(c,e);s.removeChild(e)}};const Ci=(t,e,n)=>{const o=t.getBlockElements();const s=fo.fromDom(e);const r=t=>Mo(t)in o;const c=t=>To(t,s);J(or(n),(e=>{$r(e,r,c).each((n=>{const o=mc(e,(e=>r(e)&&!t.isValidChild(Mo(n),Mo(e))));if(o.length>0){const e=Qo(n);J(o,(e=>{$r(e,r,c).each((n=>{vi(t,n.dom,e.dom)}))}));e.each((e=>bi(t,e.dom)))}}))}))};const wi=(t,e,n)=>{J([...n,...Ni(t,e)?[e]:[]],(e=>J(gc(fo.fromDom(e),e.nodeName.toLowerCase()),(e=>{Ri(t,e.dom)&&Xs(e)}))))};const Oi=(t,e)=>{const n=bi(t,e);Ci(t,e,n);wi(t,e,n)};const Ei=(t,e)=>{if(_i(t,e)){const n=gi(t.getBlockElements());hi(n,e)}};const xi=(t,e,n)=>{const o=t=>To(t,fo.fromDom(e));const s=Zo(fo.fromDom(n),o);bt(s,s.length-2).filter($o).fold((()=>Oi(t,e)),(e=>Oi(t,e.dom)))};const ki=t=>t.hasAttribute(fi);const Si=(t,e)=>Pt(t.getTransparentElements(),e);const _i=(t,e)=>ha(e)&&Si(t,e.nodeName);const Ni=(t,e)=>_i(t,e)&&ki(e);const Ri=(t,e)=>_i(t,e)&&!ki(e);const Ai=(t,e)=>e.type===1&&Si(t,e.name)&&C(e.attr(fi));const Di=In().browser;const Ti=t=>at(t,$o);const Bi=t=>Di.isFirefox()&&Mo(t)==="table"?Ti(ss(t)).filter((t=>Mo(t)==="caption")).bind((t=>Ti(os(t)).map((e=>{const n=e.dom.offsetTop;const o=t.dom.offsetTop;const s=t.dom.offsetHeight;return n<=o?-s:0})))).getOr(0):0;const Li=(t,e)=>t.children&&X(t.children,e);const Pi=(t,e,n)=>{let o=0,s=0;const r=t.ownerDocument;n=n||t;if(e){if(n===t&&e.getBoundingClientRect&&fr(fo.fromDom(t),"position")==="static"){const n=e.getBoundingClientRect();o=n.left+(r.documentElement.scrollLeft||t.scrollLeft)-r.documentElement.clientLeft;s=n.top+(r.documentElement.scrollTop||t.scrollTop)-r.documentElement.clientTop;return{x:o,y:s}}let c=e;while(c&&c!==n&&c.nodeType&&!Li(c,n)){const t=c;o+=t.offsetLeft||0;s+=t.offsetTop||0;c=t.offsetParent}c=e.parentNode;while(c&&c!==n&&c.nodeType&&!Li(c,n)){o-=c.scrollLeft||0;s-=c.scrollTop||0;c=c.parentNode}s+=Bi(fo.fromDom(e))}return{x:o,y:s}};const Mi=(t,e)=>{const n=e.crossOrigin;return e.contentCssCors?"anonymous":R(n)?n(t):void 0};const Ii=(t,e={})=>{let n=0;const o={};const s=fo.fromDom(t);const r=Ko(s);const c=t=>{e.referrerPolicy=t};const a=t=>{e.contentCssCors=t};const i=t=>{e.crossOrigin=t};const l=t=>{Ls(ms(s),t)};const d=t=>{const e=ms(s);Kr(e,"#"+t).each(Gs)};const u=t=>Lt(o,t).getOrThunk((()=>({id:"mce-u"+n++,passed:[],failed:[],count:0})))
/**
     * Loads the specified CSS file and returns a Promise that will resolve when the stylesheet is loaded successfully or reject if it failed to load.
     *
     * @method load
     * @param {String} url Url to be loaded.
     * @return {Promise} A Promise that will resolve or reject when the stylesheet is loaded.
     */;const m=t=>new Promise(((n,s)=>{let c;const a=co._addCacheSuffix(t);const i=u(a);o[a]=i;i.count++;const d=(t,e)=>{J(t,j);i.status=e;i.passed=[];i.failed=[];if(c){c.onload=null;c.onerror=null;c=null}};const m=()=>d(i.passed,2);const f=()=>d(i.failed,3);n&&i.passed.push(n);s&&i.failed.push(s);if(i.status===1)return;if(i.status===2){m();return}if(i.status===3){f();return}i.status=1;const p=fo.fromTag("link",r.dom);$s(p,{rel:"stylesheet",type:"text/css",id:i.id});const g=Mi(t,e);g!==void 0&&zs(p,"crossOrigin",g);e.referrerPolicy&&zs(p,"referrerpolicy",e.referrerPolicy);c=p.dom;c.onload=m;c.onerror=f;l(p);zs(p,"href",a)}))
/**
     * Loads the specified css string in as a style element with an unique key.
     *
     * @method loadRawCss
     * @param {String} key Unique key for the style element.
     * @param {String} css Css style content to add.
     */;const f=(t,e)=>{const n=u(t);o[t]=n;n.count++;const s=fo.fromTag("style",r.dom);$s(s,{rel:"stylesheet",type:"text/css",id:n.id,"data-mce-key":t});s.dom.innerHTML=e;l(s)};
/**
     * Loads the specified CSS files and returns a Promise that is resolved when all stylesheets are loaded or rejected if any failed to load.
     *
     * @method loadAll
     * @param {Array} urls URLs to be loaded.
     * @return {Promise} A Promise that will resolve or reject when all stylesheets are loaded.
     */const p=t=>{const e=Promise.allSettled(Z(t,(t=>m(t).then(P(t)))));return e.then((t=>{const e=et(t,(t=>t.status==="fulfilled"));return e.fail.length>0?Promise.reject(Z(e.fail,(t=>t.reason))):Z(e.pass,(t=>t.value))}))};
/**
     * Unloads the specified CSS file if no resources currently depend on it.
     *
     * @method unload
     * @param {String} url URL to unload or remove.
     */const g=t=>{const e=co._addCacheSuffix(t);Lt(o,e).each((t=>{const n=--t.count;if(n===0){delete o[e];d(t.id)}}))};
/**
     * Unloads the specified CSS style element by key.
     *
     * @method unloadRawCss
     * @param {String} key Key of CSS style resource to unload.
     */const h=t=>{Lt(o,t).each((e=>{const n=--e.count;if(n===0){delete o[t];d(e.id)}}))};
/**
     * Unloads each specified CSS file if no resources currently depend on it.
     *
     * @method unloadAll
     * @param {Array} urls URLs to unload or remove.
     */const b=t=>{J(t,(t=>{g(t)}))};return{load:m,loadRawCss:f,loadAll:p,unload:g,unloadRawCss:h,unloadAll:b,_setReferrerPolicy:c,_setContentCssCors:a,_setCrossOrigin:i}};const Fi=()=>{const t=new WeakMap;const e=(e,n)=>{const o=us(e);const s=o.dom;return Optional.from(t.get(s)).getOrThunk((()=>{const e=Ii(s,n);t.set(s,e);return e}))};return{forElement:e}};const Ui=Fi();const zi=t=>t.nodeName.toLowerCase()==="span";const $i=(t,e)=>N(t)&&(ci(e,t)||e.isInline(t.nodeName.toLowerCase()));const ji=(t,e,n)=>{const o=new DomTreeWalker(t,e).prev(false);const s=new DomTreeWalker(t,e).next(false);const r=S(o)||$i(o,n);const c=S(s)||$i(s,n);return r&&c};const Hi=t=>zi(t)&&t.getAttribute("data-mce-type")==="bookmark";const Wi=(t,e,n)=>Na(t)&&t.data.length>0&&ji(t,e,n);const Vi=t=>!!ha(t)&&t.childNodes.length>0;const qi=t=>Ba(t)||Ta(t);const Ki=(t,e,n,o)=>{const s=o||e;if(ha(e)&&Hi(e))return e;const r=e.childNodes;for(let e=r.length-1;e>=0;e--)Ki(t,r[e],n,s);if(ha(e)){const t=e.childNodes;t.length===1&&Hi(t[0])&&e.parentNode?.insertBefore(t[0],e)}qi(e)||ci(n,e)||Vi(e)||Wi(e,s,n)||t.remove(e);return e};const Yi=co.makeMap;const Gi=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g;const Xi=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g;const Qi=/[<>&\"\']/g;const Zi=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi;const Ji={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"};const tl={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"};const el={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"};const nl=t=>{const e=fo.fromTag("div").dom;e.innerHTML=t;return e.textContent||e.innerText||t};const ol=(t,e)=>{const n={};if(t){const o=t.split(",");e=e||10;for(let t=0;t<o.length;t+=2){const s=String.fromCharCode(parseInt(o[t],e));if(!tl[s]){const e="&"+o[t+1]+";";n[s]=e;n[e]=s}}return n}};const sl=ol("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);
/**
   * Encodes the specified string using raw entities. This means only the required XML base entities will be encoded.
   *
   * @method encodeRaw
   * @param {String} text Text to encode.
   * @param {Boolean} attr Optional flag to specify if the text is attribute contents.
   * @return {String} Entity encoded text.
   */const rl=(t,e)=>t.replace(e?Gi:Xi,(t=>tl[t]||t))
/**
   * Encoded the specified text with both the attributes and text entities. This function will produce larger text contents
   * since it doesn't know if the context is within an attribute or text node. This was added for compatibility
   * and is exposed as the `DOMUtils.encode` function.
   *
   * @method encodeAllRaw
   * @param {String} text Text to encode.
   * @return {String} Entity encoded text.
   */;const cl=t=>(""+t).replace(Qi,(t=>tl[t]||t))
/**
   * Encodes the specified string using numeric entities. The core entities will be
   * encoded as named ones but all non lower ascii characters will be encoded into numeric entities.
   *
   * @method encodeNumeric
   * @param {String} text Text to encode.
   * @param {Boolean} attr Optional flag to specify if the text is attribute contents.
   * @return {String} Entity encoded text.
   */;const al=(t,e)=>t.replace(e?Gi:Xi,(t=>t.length>1?"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";":tl[t]||"&#"+t.charCodeAt(0)+";"))
/**
   * Encodes the specified string using named entities. The core entities will be encoded
   * as named ones but all non lower ascii characters will be encoded into named entities.
   *
   * @method encodeNamed
   * @param {String} text Text to encode.
   * @param {Boolean} attr Optional flag to specify if the text is attribute contents.
   * @param {Object} entities Optional parameter with entities to use.
   * @return {String} Entity encoded text.
   */;const il=(t,e,n)=>{const o=n||sl;return t.replace(e?Gi:Xi,(t=>tl[t]||o[t]||t))};
/**
   * Returns an encode function based on the name(s) and it's optional entities.
   *
   * @method getEncodeFunc
   * @param {String} name Comma separated list of encoders for example named,numeric.
   * @param {String} entities Optional parameter with entities to use instead of the built in set.
   * @return {Function} Encode function to be used.
   */const ll=(t,e)=>{const n=ol(e)||sl;const o=(t,e)=>t.replace(e?Gi:Xi,(t=>tl[t]!==void 0?tl[t]:n[t]!==void 0?n[t]:t.length>1?"&#"+(1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320)+65536)+";":"&#"+t.charCodeAt(0)+";"));const s=(t,e)=>il(t,e,n);const r=Yi(t.replace(/\+/g,","));return r.named&&r.numeric?o:r.named?e?s:il:r.numeric?al:rl};
/**
   * Decodes the specified string, this will replace entities with raw UTF characters.
   *
   * @method decode
   * @param {String} text Text to entity decode.
   * @return {String} Entity decoded string.
   */const dl=t=>t.replace(Zi,((t,e)=>{if(e){e=e.charAt(0).toLowerCase()==="x"?parseInt(e.substr(1),16):parseInt(e,10);if(e>65535){e-=65536;return String.fromCharCode(55296+(e>>10),56320+(e&1023))}return Ji[e]||String.fromCharCode(e)}return el[t]||sl[t]||nl(t)}));const ul={encodeRaw:rl,encodeAllRaw:cl,encodeNumeric:al,encodeNamed:il,getEncodeFunc:ll,decode:dl};const ml=(t,e)=>{t=co.trim(t);return t?t.split(e||" "):[]};const fl=t=>new RegExp("^"+t.replace(/([?+*])/g,".$1")+"$");const pl=t=>w(t)&&t.source&&Object.prototype.toString.call(t)==="[object RegExp]";const gl=t=>{const e=t=>E(t)?Z(t,e):pl(t)?new RegExp(t.source,t.flags):w(t)?St(t,e):t;return e(t)};const hl=t=>{const e=/^(~)?(.+)$/;return ut(ml(t,","),(t=>{const n=e.exec(t);if(n){const t=n[1]==="~";const e=t?"span":"div";const o=n[2];return[{cloneName:e,name:o}]}return[]}))};const bl=t=>Object.freeze(["id","accesskey","class","dir","lang","style","tabindex","title","role",...t!=="html4"?["contenteditable","contextmenu","draggable","dropzone","hidden","spellcheck","translate","itemprop","itemscope","itemtype"]:[],...t!=="html5-strict"?["xml:lang"]:[]]);const yl=t=>{let e;let n;e="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul";n="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment";if(t!=="html4"){const t="a ins del canvas map";e+=" article aside details dialog figure main header footer hgroup section nav "+t;n+=" audio canvas command data datalist mark meter output picture progress template time wbr video ruby bdi keygen svg"}if(t!=="html5-strict"){const t="acronym applet basefont big font strike tt";n=[n,t].join(" ");const o="center dir isindex noframes";e=[e,o].join(" ")}const o=[e,n].join(" ");return{blockContent:e,phrasingContent:n,flowContent:o}};const vl=t=>{const{blockContent:e,phrasingContent:n,flowContent:o}=yl(t);const s=t=>Object.freeze(t.split(" "));return Object.freeze({blockContent:s(e),phrasingContent:s(n),flowContent:s(o)})};const Cl={html4:Be((()=>vl("html4"))),html5:Be((()=>vl("html5"))),"html5-strict":Be((()=>vl("html5-strict")))};const wl=(t,e)=>{const{blockContent:n,phrasingContent:o,flowContent:s}=Cl[t]();return e==="blocks"?Optional.some(n):e==="phrasing"?Optional.some(o):e==="flow"?Optional.some(s):Optional.none()};const Ol=t=>{const e=bl(t);const{phrasingContent:n,flowContent:o}=yl(t);const s={};const r=(t,e,n)=>{s[t]={attributes:gt(e,P({})),attributesOrder:e,children:gt(n,P({}))}};const c=(t,n="",o="")=>{const s=ml(o);const c=ml(t);let a=c.length;const i=[...e,...ml(n)];while(a--)r(c[a],i.slice(),s)};const a=(t,e)=>{const n=ml(t);const o=ml(e);let r=n.length;while(r--){const t=s[n[r]];for(let e=0,n=o.length;e<n;e++){t.attributes[o[e]]={};t.attributesOrder.push(o[e])}}};if(t!=="html5-strict"){const t="acronym applet basefont big font strike tt";J(ml(t),(t=>{c(t,"",n)}));const e="center dir isindex noframes";J(ml(e),(t=>{c(t,"",o)}))}c("html","manifest","head body");c("head","","base command link meta noscript script style title");c("title hr noscript br");c("base","href target");c("link","href rel media hreflang type sizes hreflang");c("meta","name http-equiv content charset property");c("style","media type scoped");c("script","src async defer type charset");c("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o);c("dd div","",o);c("address dt caption","",t==="html4"?n:o);c("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",n);c("blockquote","cite",o);c("ol","reversed start type","li");c("ul","","li");c("li","value",o);c("dl","","dt dd");c("a","href target rel media hreflang type",t==="html4"?n:o);c("q","cite",n);c("ins del","cite datetime",o);c("img","src sizes srcset alt usemap ismap width height");c("iframe","src name width height",o);c("embed","src type width height");c("object","data type typemustmatch name usemap form width height",[o,"param"].join(" "));c("param","name value");c("map","name",[o,"area"].join(" "));c("area","alt coords shape href target rel media hreflang type");c("table","border","caption colgroup thead tfoot tbody tr"+(t==="html4"?" col":""));c("colgroup","span","col");c("col","span");c("tbody thead tfoot","","tr");c("tr","","td th");c("td","colspan rowspan headers",o);c("th","colspan rowspan headers scope abbr",o);c("form","accept-charset action autocomplete enctype method name novalidate target",o);c("fieldset","disabled form name",[o,"legend"].join(" "));c("label","form for",n);c("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width");c("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value",t==="html4"?o:n);c("select","disabled form multiple name required size","option optgroup");c("optgroup","disabled label","option");c("option","disabled label selected value");c("textarea","cols dirname disabled form maxlength name readonly required rows wrap");c("menu","type label",[o,"li"].join(" "));c("noscript","",o);if(t!=="html4"){c("wbr");c("ruby","",[n,"rt rp"].join(" "));c("figcaption","",o);c("mark rt rp bdi","",n);c("summary","",[n,"h1 h2 h3 h4 h5 h6"].join(" "));c("canvas","width height",o);c("data","value",n);c("video","src crossorigin poster preload autoplay mediagroup loop controlslist disablepictureinpicture disableremoteplayback playsinline muted controls width height buffered",[o,"track source"].join(" "));c("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" "));c("picture","","img source");c("source","src srcset type media sizes");c("track","kind src srclang label default");c("datalist","",[n,"option"].join(" "));c("article section nav aside main header footer","",o);c("hgroup","","h1 h2 h3 h4 h5 h6");c("figure","",[o,"figcaption"].join(" "));c("time","datetime",n);c("dialog","open",o);c("command","type label icon disabled checked radiogroup command");c("output","for form name",n);c("progress","value max",n);c("meter","value min max low high optimum",n);c("details","open",[o,"summary"].join(" "));c("keygen","autofocus challenge disabled form keytype name");r("svg","id tabindex lang xml:space class style x y width height viewBox preserveAspectRatio zoomAndPan transform".split(" "),[])}if(t!=="html5-strict"){a("script","language xml:space");a("style","xml:space");a("object","declare classid code codebase codetype archive standby align border hspace vspace");a("embed","align name hspace vspace");a("param","valuetype type");a("a","charset name rev shape coords");a("br","clear");a("applet","codebase archive code object alt name width height align hspace vspace");a("img","name longdesc align border hspace vspace");a("iframe","longdesc frameborder marginwidth marginheight scrolling align");a("font basefont","size color face");a("input","usemap align");a("select");a("textarea");a("h1 h2 h3 h4 h5 h6 div p legend caption","align");a("ul","type compact");a("li","type");a("ol dl menu dir","compact");a("pre","width xml:space");a("hr","align noshade size width");a("isindex","prompt");a("table","summary width frame rules cellspacing cellpadding align bgcolor");a("col","width align char charoff valign");a("colgroup","width align char charoff valign");a("thead","align char charoff valign");a("tr","align char charoff valign bgcolor");a("th","axis align char charoff valign nowrap bgcolor width height");a("form","accept");a("td","abbr axis scope align char charoff valign nowrap bgcolor width height");a("tfoot","align char charoff valign");a("tbody","align char charoff valign");a("area","nohref");a("body","background bgcolor text link vlink alink")}if(t!=="html4"){a("input button select textarea","autofocus");a("input textarea","placeholder");a("a","download");a("link script img","crossorigin");a("img","loading");a("iframe","sandbox seamless allow allowfullscreen loading referrerpolicy")}t!=="html4"&&J([s.video,s.audio],(t=>{delete t.children.audio;delete t.children.video}));J(ml("a form meter progress dfn"),(t=>{s[t]&&delete s[t].children[t]}));delete s.caption.children.table;delete s.script;return s};const El=t=>t==="-"?"remove":"add";const xl=t=>{const e=/^(@?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)$/;return Optional.from(e.exec(t)).map((t=>({preset:t[1]==="@",name:t[2]})))};const kl=t=>{const e=/^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;return ut(ml(t,","),(t=>{const n=e.exec(t);if(n){const t=n[1];const e=t?El(t):"replace";const o=n[2];const s=ut(ml(n[3],"|"),(t=>xl(t).toArray()));return[{operation:e,name:o,validChildren:s}]}return[]}))};const Sl=(t,e)=>{const n=/^([!\-])?(\w+[\\:]:\w+|[^=~<]+)?(?:([=~<])(.*))?$/;const o=/[*?+]/;const{attributes:s,attributesOrder:r}=e;return J(ml(t,"|"),(t=>{const c=n.exec(t);if(c){const t={};const n=c[1];const a=c[2].replace(/[\\:]:/g,":");const i=c[3];const l=c[4];if(n==="!"){e.attributesRequired=e.attributesRequired||[];e.attributesRequired.push(a);t.required=true}if(n==="-"){delete s[a];r.splice(co.inArray(r,a),1);return}if(i)if(i==="="){e.attributesDefault=e.attributesDefault||[];e.attributesDefault.push({name:a,value:l});t.defaultValue=l}else if(i==="~"){e.attributesForced=e.attributesForced||[];e.attributesForced.push({name:a,value:l});t.forcedValue=l}else i==="<"&&(t.validValues=co.makeMap(l,"?"));if(o.test(a)){const n=t;e.attributePatterns=e.attributePatterns||[];n.pattern=fl(a);e.attributePatterns.push(n)}else{s[a]||r.push(a);s[a]=t}}}))};const _l=(t,e)=>{kt(t.attributes,((t,n)=>{e.attributes[n]=t}));e.attributesOrder.push(...t.attributesOrder)};const Nl=(t,e)=>{const n=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/;return ut(ml(e,","),(e=>{const o=n.exec(e);if(o){const e=o[1];const n=o[2];const s=o[3];const r=o[4];const c=o[5];const a={attributes:{},attributesOrder:[]};t.each((t=>_l(t,a)));e==="#"?a.paddEmpty=true:e==="-"&&(a.removeEmpty=true);r==="!"&&(a.removeEmptyAttrs=true);c&&Sl(c,a);s&&(a.outputName=n);if(n==="@"){if(!t.isNone())return[];t=Optional.some(a)}return[s?{name:n,element:a,aliasName:s}:{name:n,element:a}]}return[]}))};const Rl={};const Al=co.makeMap,Dl=co.each,Tl=co.extend,Bl=co.explode;const Ll=(t,e={})=>{const n=Al(t," ",Al(t.toUpperCase()," "));return Tl(n,e)};const Pl=t=>Ll("td th li dt dd figcaption caption details summary",t.getTextBlockElements());const Ml=(t,e)=>{if(t){const n={};C(t)&&(t={"*":t});Dl(t,((t,o)=>{n[o]=n[o.toUpperCase()]=e==="map"?Al(t,/[, ]/):Bl(t,/[, ]/)}));return n}};const Il=(t={})=>{const e={};const n={};let o=[];const s={};const r={};const c={};const a=(e,n,o)=>{const s=t[e];if(s)return Al(s,/[, ]/,Al(s.toUpperCase(),/[, ]/));{let t=Rl[e];if(!t){t=Ll(n,o);Rl[e]=t}return t}};const i=t.schema??"html5";const l=Ol(i);t.verify_html===false&&(t.valid_elements="*[*]");const d=Ml(t.valid_styles);const u=Ml(t.invalid_styles,"map");const m=Ml(t.valid_classes,"map");const f=a("whitespace_elements","pre script noscript style textarea video audio iframe object code");const p=a("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr");const g=a("void_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track");const h=a("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls allowfullscreen");const b="td th iframe video audio object script code";const y=a("non_empty_elements",b+" pre svg textarea summary",g);const v=a("move_caret_before_on_enter_elements",b+" table",g);const O="h1 h2 h3 h4 h5 h6";const x=a("text_block_elements",O+" p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure");const S=a("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary html body multicol listing colgroup col",x);const _=a("text_inline_elements","span strong b em i font s strike u var cite dfn code mark q sup sub samp");const N=a("transparent_elements","a ins del canvas map");const R=a("wrap_block_elements","pre "+O);Dl("script noscript iframe noframes noembed title style textarea xmp plaintext".split(" "),(t=>{r[t]=new RegExp("</"+t+"[^>]*>","gi")}));const A=t=>{const n=Optional.from(e["@"]);const s=/[*?+]/;J(Nl(n,t??""),(({name:t,element:n,aliasName:r})=>{r&&(e[r]=n);if(s.test(t)){const e=n;e.pattern=fl(t);o.push(e)}else e[t]=n}))};const D=t=>{o=[];J(Et(e),(t=>{delete e[t]}));A(t)};const T=(t,o)=>{delete Rl.text_block_elements;delete Rl.block_elements;const r=!!o.extends&&!st(o.extends);const c=o.extends;n[t]=c?n[c]:{};s[t]=c??t;y[t.toUpperCase()]={};y[t]={};if(!r){S[t.toUpperCase()]={};S[t]={}}if(c&&!e[t]&&e[c]){const n=gl(e[c]);delete n.removeEmptyAttrs;delete n.removeEmpty;e[t]=n}else e[t]={attributesOrder:[],attributes:{}};if(E(o.attributes)){const n=t=>{s.attributesOrder.push(t);s.attributes[t]={}};const s=e[t]??{};delete s.attributesDefault;delete s.attributesForced;delete s.attributePatterns;delete s.attributesRequired;s.attributesOrder=[];s.attributes={};J(o.attributes,(t=>{const e=bl(i);xl(t).each((({preset:t,name:o})=>{t?o==="global"&&J(e,n):n(o)}))}));e[t]=s}if(k(o.padEmpty)){const n=e[t]??{};n.paddEmpty=o.padEmpty;e[t]=n}if(E(o.children)){const e={};const s=t=>{e[t]={}};const r=t=>{wl(i,t).each((t=>{J(t,s)}))};J(o.children,(t=>{xl(t).each((({preset:t,name:e})=>{t?r(e):s(e)}))}));n[t]=e}c&&kt(n,((e,o)=>{if(e[c]){n[o]=e=Tl({},n[o]);e[t]=e[c]}}))};const B=t=>{J(hl(t??""),(({name:t,cloneName:e})=>{T(t,{extends:e})}))};const L=(t,e)=>{c[t]=e};const M=t=>{w(t)?kt(t,((t,e)=>{const n=t.componentUrl;C(n)&&L(e,n);T(e,t)})):C(t)&&B(t)};const I=t=>{J(kl(t??""),(({operation:t,name:e,validChildren:o})=>{const s=t==="replace"?{"#comment":{}}:n[e];const r=e=>{t==="remove"?delete s[e]:s[e]={}};const c=t=>{wl(i,t).each((t=>{J(t,r)}))};J(o,(({preset:t,name:e})=>{t?c(e):r(e)}));n[e]=s}))};const F=t=>{const n=e[t];if(n)return n;let s=o.length;while(s--){const e=o[s];if(e.pattern.test(t))return e}};const U=()=>{if(t.valid_elements){D(t.valid_elements);Dl(l,((t,e)=>{n[e]=t.children}))}else{Dl(l,((t,o)=>{e[o]={attributes:t.attributes,attributesOrder:t.attributesOrder};n[o]=t.children}));Dl(ml("strong/b em/i"),(t=>{const n=ml(t,"/");e[n[1]].outputName=n[0]}));Dl(_,((n,o)=>{if(e[o]){t.padd_empty_block_inline_children&&(e[o].paddInEmptyBlock=true);e[o].removeEmpty=true}}));Dl(ml("ol ul blockquote a table tbody"),(t=>{e[t]&&(e[t].removeEmpty=true)}));Dl(ml("p h1 h2 h3 h4 h5 h6 th td pre div address caption li summary"),(t=>{e[t]&&(e[t].paddEmpty=true)}));Dl(ml("span"),(t=>{e[t].removeEmptyAttrs=true}))}delete e.svg;M(t.custom_elements);I(t.valid_children);A(t.extended_valid_elements);I("+ol[ul|ol],+ul[ul|ol]");Dl({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},((t,n)=>{e[n]&&(e[n].parentsRequired=ml(t))}));t.invalid_elements&&Dl(Bl(t.invalid_elements),(t=>{e[t]&&delete e[t]}));F("span")||A("span[!data-mce-type|*]")};
/**
     * Name/value map object with valid parents and children to those parents.
     *
     * @field children
     * @type Object
     * @example
     * children = {
     *    div: { p:{}, h1:{} }
     * };
     */
/**
     * Name/value map object with valid styles for each element.
     *
     * @method getValidStyles
     * @type Object
     */const z=P(d);
/**
     * Name/value map object with valid styles for each element.
     *
     * @method getInvalidStyles
     * @type Object
     */const $=P(u);
/**
     * Name/value map object with valid classes for each element.
     *
     * @method getValidClasses
     * @type Object
     */const j=P(m);const H=P(h);const W=P(S);const V=P(x);const q=P(_);const K=P(Object.seal(g));const Y=P(p);const G=P(y);const X=P(v);const Q=P(f);const Z=P(N);const tt=P(R);const et=P(Object.seal(r));
/**
     * Returns true/false if the specified element and it's child is valid or not
     * according to the schema.
     *
     * @method isValidChild
     * @param {String} name Element name to check for.
     * @param {String} child Element child to verify.
     * @return {Boolean} True/false if the element is a valid child of the specified parent.
     */const nt=(t,e)=>{const o=n[t.toLowerCase()];return!!(o&&o[e.toLowerCase()])};
/**
     * Returns true/false if the specified element name and optional attribute is
     * valid according to the schema.
     *
     * @method isValid
     * @param {String} name Name of element to check.
     * @param {String} attr Optional attribute name to check for.
     * @return {Boolean} True/false if the element and attribute is valid.
     */const ot=(t,e)=>{const n=F(t);if(n){if(!e)return true;{if(n.attributes[e])return true;const t=n.attributePatterns;if(t){let n=t.length;while(n--)if(t[n].pattern.test(e))return true}}}return false};const st=t=>Pt(W(),t);const rt=t=>!we(t,"#")&&ot(t)&&!st(t);const ct=t=>Pt(tt(),t)||rt(t)
/**
     * Returns true/false if the specified element is valid or not
     * according to the schema.
     *
     * @method getElementRule
     * @param {String} name Element name to check for.
     * @return {Object} Element object or undefined if the element isn't valid.
     */;const at=P(s);
/**
     * Parses a valid elements string and adds it to the schema. The valid elements
     * format is for example <code>element[attr=default|otherattr]</code>.
     * Existing rules will be replaced with the ones specified, so this extends the schema.
     *
     * @method addValidElements
     * @param {String} valid_elements String in the valid elements format to be parsed.
     */
/**
     * Parses a valid elements string and sets it to the schema. The valid elements
     * format is for example <code>element[attr=default|otherattr]</code>.
     * Existing rules will be replaced with the ones specified, so this extends the schema.
     *
     * @method setValidElements
     * @param {String} valid_elements String in the valid elements format to be parsed.
     */
/**
     * Adds custom non-HTML elements to the schema. For more information about adding custom elements see:
     * <a href="https://www.tiny.cloud/docs/tinymce/latest/content-filtering/#custom_elements">custom_elements</a>
     *
     * @method addCustomElements
     * @param {String/Object} custom_elements Comma separated list or record of custom elements to add.
     */
/**
     * Parses a valid children string and adds them to the schema structure. The valid children
     * format is for example <code>element[child1|child2]</code>.
     *
     * @method addValidChildren
     * @param {String} valid_children Valid children elements string to parse
     */const it=P(c);U();return{type:i,children:n,elements:e,getValidStyles:z,getValidClasses:j,getBlockElements:W,getInvalidStyles:$,getVoidElements:K,getTextBlockElements:V,getTextInlineElements:q,getBoolAttrs:H,getElementRule:F,getSelfClosingElements:Y,getNonEmptyElements:G,getMoveCaretBeforeOnEnterElements:X,getWhitespaceElements:Q,getTransparentElements:Z,getSpecialElements:et,getComponentUrls:it,isValidChild:nt,isValid:ot,isBlock:st,isInline:rt,isWrapper:ct,getCustomElements:at,addValidElements:A,setValidElements:D,addCustomElements:M,addValidChildren:I}};const Fl=t=>({value:Ul(t)});const Ul=t=>ve(t,"#").toUpperCase();const zl=t=>{const e=t.toString(16);return(e.length===1?"0"+e:e).toUpperCase()};const $l=t=>{const e=zl(t.red)+zl(t.green)+zl(t.blue);return Fl(e)};const jl=/^\s*rgb\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*\)\s*$/i;const Hl=/^\s*rgba\s*\(\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*(\d+)\s*[,\s]\s*((?:\d?\.\d+|\d+)%?)\s*\)\s*$/i;const Wl=(t,e,n,o)=>({red:t,green:e,blue:n,alpha:o});const Vl=(t,e,n,o)=>{const s=parseInt(t,10);const r=parseInt(e,10);const c=parseInt(n,10);const a=parseFloat(o);return Wl(s,r,c,a)};const ql=t=>jl.test(t)?"rgb":Hl.test(t)?"rgba":"other";const Kl=t=>{const e=jl.exec(t);if(e!==null)return Optional.some(Vl(e[1],e[2],e[3],"1"));const n=Hl.exec(t);return n!==null?Optional.some(Vl(n[1],n[2],n[3],n[4])):Optional.none()};const Yl=t=>`rgba(${t.red},${t.green},${t.blue},${t.alpha})`;const Gl=t=>Kl(t).map($l).map((t=>"#"+t.value)).getOr(t);const Xl=(t={},e)=>{const n=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi;const o=/\s*([^:]+):\s*([^;]+);?/g;const s=/\s+$/;const r={};let c;let a;const i=Le;if(e){c=e.getValidStyles();a=e.getInvalidStyles()}const l=("\\\" \\' \\; \\: ; : "+i).split(" ");for(let t=0;t<l.length;t++){r[l[t]]=i+t;r[i+t]=l[t]}const d={
/**
       * Parses the specified style value into an object collection. This parser will also
       * merge and remove any redundant items that browsers might have added. URLs inside
       * the styles will also be converted to absolute/relative based on the settings.
       *
       * @method parse
       * @param {String} css Style value to parse. For example: `border:1px solid red;`
       * @return {Object} Object representation of that style. For example: `{ border: '1px solid red' }`
       */
parse:e=>{const c={};let a=false;const l=t.url_converter;const u=t.url_converter_scope||d;const m=(t,e,n)=>{const o=c[t+"-top"+e];if(!o)return;const s=c[t+"-right"+e];if(!s)return;const r=c[t+"-bottom"+e];if(!r)return;const a=c[t+"-left"+e];if(!a)return;const i=[o,s,r,a];let l=i.length-1;while(l--)if(i[l]!==i[l+1])break;if(!(l>-1&&n)){c[t+e]=l===-1?i[0]:i.join(" ");delete c[t+"-top"+e];delete c[t+"-right"+e];delete c[t+"-bottom"+e];delete c[t+"-left"+e]}};const f=t=>{const e=c[t];if(!e)return;const n=e.indexOf(",")>-1?[e]:e.split(" ");let o=n.length;while(o--)if(n[o]!==n[0])return false;c[t]=n[0];return true};const p=(t,e,n,o)=>{if(f(e)&&f(n)&&f(o)){c[t]=c[e]+" "+c[n]+" "+c[o];delete c[e];delete c[n];delete c[o]}};const g=t=>{a=true;return r[t]};const h=(t,e)=>{a&&(t=t.replace(/\uFEFF[0-9]/g,(t=>r[t])));e||(t=t.replace(/\\([\'\";:])/g,"$1"));return t};const b=t=>String.fromCharCode(parseInt(t.slice(1),16));const y=t=>t.replace(/\\[0-9a-f]+/gi,b);const v=(e,n,o,s,r,c)=>{r=r||c;if(r){r=h(r);return"'"+r.replace(/\'/g,"\\'")+"'"}n=h(n||o||s||"");if(!t.allow_script_urls){const e=n.replace(/[\s\r\n]+/g,"");if(/(java|vb)script:/i.test(e))return"";if(!t.allow_svg_data_urls&&/^data:image\/svg/i.test(e))return""}l&&(n=l.call(u,n,"style"));return"url('"+n.replace(/\'/g,"\\'")+"')"};if(e){e=e.replace(/[\u0000-\u001F]/g,"");e=e.replace(/\\[\"\';:\uFEFF]/g,g).replace(/\"[^\"]+\"|\'[^\']+\'/g,(t=>t.replace(/[;:]/g,g)));let r;while(r=o.exec(e)){o.lastIndex=r.index+r[0].length;let e=r[1].replace(s,"").toLowerCase();let l=r[2].replace(s,"");if(e&&l){e=y(e);l=y(l);if(e.indexOf(i)!==-1||e.indexOf('"')!==-1)continue;if(!t.allow_script_urls&&(e==="behavior"||/expression\s*\(|\/\*|\*\//.test(l)))continue;e==="font-weight"&&l==="700"?l="bold":e!=="color"&&e!=="background-color"||(l=l.toLowerCase());ql(l)==="rgb"&&Kl(l).each((t=>{l=Gl(Yl(t)).toLowerCase()}));l=l.replace(n,v);c[e]=a?h(l,true):l}}m("border","",true);m("border","-width");m("border","-color");m("border","-style");m("padding","");m("margin","");p("border","border-width","border-style","border-color");c.border==="medium none"&&delete c.border;c["border-image"]==="none"&&delete c["border-image"]}return c},
/**
       * Serializes the specified style object into a string.
       *
       * @method serialize
       * @param {Object} styles Object to serialize as string. For example: `{ border: '1px solid red' }`
       * @param {String} elementName Optional element name, if specified only the styles that matches the schema will be serialized.
       * @return {String} String representation of the style object. For example: `border: 1px solid red`
       */
serialize:(t,e)=>{let n="";const o=(e,o)=>{const s=o[e];if(s)for(let e=0,o=s.length;e<o;e++){const o=s[e];const r=t[o];r&&(n+=(n.length>0?" ":"")+o+": "+r+";")}};const s=(t,e)=>{if(!a||!e)return true;let n=a["*"];if(n&&n[t])return false;n=a[e];return!(n&&n[t])};if(e&&c){o("*",c);o(e,c)}else kt(t,((t,o)=>{t&&s(o,e)&&(n+=(n.length>0?" ":"")+o+": "+t+";")}));return n}};return d};const Ql={keyLocation:true,layerX:true,layerY:true,returnValue:true,webkitMovementX:true,webkitMovementY:true,keyIdentifier:true,mozPressure:true};const Zl=t=>t instanceof Event||R(t.initEvent);const Jl=t=>t.isDefaultPrevented===W||t.isDefaultPrevented===H;const td=t=>_(t.preventDefault)||Zl(t);const ed=(t,e)=>{const n=e??{};for(const e in t)Pt(Ql,e)||(n[e]=t[e]);N(t.composedPath)&&(n.composedPath=()=>t.composedPath());N(t.getModifierState)&&(n.getModifierState=e=>t.getModifierState(e));N(t.getTargetRanges)&&(n.getTargetRanges=()=>t.getTargetRanges());return n};const nd=(t,e,n,o)=>{const s=ed(e,o);s.type=t;_(s.target)&&(s.target=s.srcElement??n);if(td(e)){s.preventDefault=()=>{s.defaultPrevented=true;s.isDefaultPrevented=W;R(e.preventDefault)&&e.preventDefault()};s.stopPropagation=()=>{s.cancelBubble=true;s.isPropagationStopped=W;R(e.stopPropagation)&&e.stopPropagation()};s.stopImmediatePropagation=()=>{s.isImmediatePropagationStopped=W;s.stopPropagation()};if(!Jl(s)){s.isDefaultPrevented=s.defaultPrevented===true?W:H;s.isPropagationStopped=s.cancelBubble===true?W:H;s.isImmediatePropagationStopped=H}}return s};const od="mce-data-";const sd=/^(?:mouse|contextmenu)|click/;const rd=(t,e,n,o)=>{t.addEventListener(e,n,o||false)};const cd=(t,e,n,o)=>{t.removeEventListener(e,n,o||false)};const ad=t=>N(t)&&sd.test(t.type);const id=(t,e)=>{const n=nd(t.type,t,document,e);if(ad(t)&&S(t.pageX)&&!S(t.clientX)){const e=n.target.ownerDocument||document;const o=e.documentElement;const s=e.body;const r=n;r.pageX=t.clientX+(o&&o.scrollLeft||s&&s.scrollLeft||0)-(o&&o.clientLeft||s&&s.clientLeft||0);r.pageY=t.clientY+(o&&o.scrollTop||s&&s.scrollTop||0)-(o&&o.clientTop||s&&s.clientTop||0)}return n};const ld=(t,e,n)=>{const o=t.document,s={type:"ready"};if(n.domLoaded){e(s);return}const r=()=>o.readyState==="complete"||o.readyState==="interactive"&&o.body;const c=()=>{cd(t,"DOMContentLoaded",c);cd(t,"load",c);if(!n.domLoaded){n.domLoaded=true;e(s)}t=null};r()?c():rd(t,"DOMContentLoaded",c);n.domLoaded||rd(t,"load",c)};class EventUtils{static Event=new EventUtils;domLoaded=false;events={};expando;hasFocusIn;count=1;constructor(){this.expando=od+(+new Date).toString(32);this.hasFocusIn="onfocusin"in document.documentElement;this.count=1}bind(t,e,n,o){const s=this;let r;const c=window;const a=t=>{s.executeHandlers(id(t||c.event),i)};if(!t||Na(t)||Da(t))return n;let i;if(t[s.expando])i=t[s.expando];else{i=s.count++;t[s.expando]=i;s.events[i]={}}o=o||t;const l=e.split(" ");let d=l.length;while(d--){let e=l[d];let u=a;let m=false;let f=false;e==="DOMContentLoaded"&&(e="ready");if(s.domLoaded&&e==="ready"&&t.readyState==="complete")n.call(o,id({type:e}));else{if(!s.hasFocusIn&&(e==="focusin"||e==="focusout")){m=true;f=e==="focusin"?"focus":"blur";u=t=>{const e=id(t||c.event);e.type=e.type==="focus"?"focusin":"focusout";s.executeHandlers(e,i)}}r=s.events[i][e];if(r)e==="ready"&&s.domLoaded?n(id({type:e})):r.push({func:n,scope:o});else{s.events[i][e]=r=[{func:n,scope:o}];r.fakeName=f;r.capture=m;r.nativeHandler=u;e==="ready"?ld(t,u,s):rd(t,f||e,u,m)}}}t=r=null;return n}unbind(t,e,n){if(!t||Na(t)||Da(t))return this;const o=t[this.expando];if(o){let s=this.events[o];if(e){const o=e.split(" ");let r=o.length;while(r--){const e=o[r];const c=s[e];if(c){if(n){let t=c.length;while(t--)if(c[t].func===n){const n=c.nativeHandler;const o=c.fakeName,r=c.capture;const a=c.slice(0,t).concat(c.slice(t+1));a.nativeHandler=n;a.fakeName=o;a.capture=r;s[e]=a}}if(!n||c.length===0){delete s[e];cd(t,c.fakeName||e,c.nativeHandler,c.capture)}}}}else{kt(s,((e,n)=>{cd(t,e.fakeName||n,e.nativeHandler,e.capture)}));s={}}for(const t in s)if(Pt(s,t))return this;delete this.events[o];try{delete t[this.expando]}catch{t[this.expando]=null}}return this}
/**
     * Fires the specified event on the specified target.
     * <br>
     * <em>Deprecated in TinyMCE 6.0 and has been marked for removal in TinyMCE 7.0. Use <code>dispatch</code> instead.</em>
     *
     * @method fire
     * @param {Object} target Target node/window or custom object.
     * @param {String} name Event name to fire.
     * @param {Object} args Optional arguments to send to the observers.
     * @return {EventUtils} Event utils instance.
     * @deprecated Use dispatch() instead
     */fire(t,e,n){return this.dispatch(t,e,n)}
/**
     * Dispatches the specified event on the specified target.
     *
     * @method dispatch
     * @param {Node/window} target Target node/window or custom object.
     * @param {String} name Event name to dispatch.
     * @param {Object} args Optional arguments to send to the observers.
     * @return {EventUtils} Event utils instance.
     */dispatch(t,e,n){if(!t||Na(t)||Da(t))return this;const o=id({type:e,target:t},n);do{const e=t[this.expando];e&&this.executeHandlers(o,e);t=t.parentNode||t.ownerDocument||t.defaultView||t.parentWindow}while(t&&!o.isPropagationStopped());return this}
/**
     * Removes all bound event listeners for the specified target. This will also remove any bound
     * listeners to child nodes within that target.
     *
     * @method clean
     * @param {Object} target Target node/window object.
     * @return {EventUtils} Event utils instance.
     */clean(t){if(!t||Na(t)||Da(t))return this;t[this.expando]&&this.unbind(t);t.getElementsByTagName||(t=t.document);if(t&&t.getElementsByTagName){this.unbind(t);const e=t.getElementsByTagName("*");let n=e.length;while(n--){t=e[n];t[this.expando]&&this.unbind(t)}}return this}destroy(){this.events={}}cancel(t){if(t){t.preventDefault();t.stopImmediatePropagation()}return false}
/**
     * Executes all event handler callbacks for a specific event.
     *
     * @private
     * @param {Event} evt Event object.
     * @param {String} id Expando id value to look for.
     */executeHandlers(t,e){const n=this.events[e];const o=n&&n[t.type];if(o)for(let e=0,n=o.length;e<n;e++){const n=o[e];n&&n.func.call(n.scope,t)===false&&t.preventDefault();if(t.isImmediatePropagationStopped())return}}}const dd=co.each;const ud=co.grep;const md="data-mce-style";const fd=co.makeMap("fill-opacity font-weight line-height opacity orphans widows z-index zoom"," ");const pd=(t,e,n)=>{_(n)||n===""?Vs(t,e):zs(t,e,n)};const gd=t=>t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));const hd=(t,e)=>{let n=0;if(t)for(let o=t.nodeType,s=t.previousSibling;s;s=s.previousSibling){const t=s.nodeType;if(!e||!Na(s)||t!==o&&s.data.length){n++;o=t}}return n};const bd=(t,e)=>{const n=js(e,"style");const o=t.serialize(t.parse(n),Mo(e));pd(e,md,o)};const yd=(t,e)=>A(t)?Pt(fd,e)?t+"":t+"px":t;const vd=(t,e,n)=>{const o=gd(e);_(n)||n===""?br(t,o):ur(t,o,yd(n,o))};const Cd=(t,e,n)=>{const o=e.keep_values;const s={set:(t,o,s)=>{const r=fo.fromDom(t);R(e.url_converter)&&N(o)&&(o=e.url_converter.call(e.url_converter_scope||n(),String(o),s,t));const c="data-mce-"+s;pd(r,c,o);pd(r,s,o)},get:(t,e)=>{const n=fo.fromDom(t);return js(n,"data-mce-"+e)||js(n,e)}};const r={style:{set:(e,n)=>{const s=fo.fromDom(e);o&&pd(s,md,n);Vs(s,"style");C(n)&&mr(s,t.parse(n))},get:e=>{const n=fo.fromDom(e);const o=js(n,md)||js(n,"style");return t.serialize(t.parse(o),Mo(n))}}};o&&(r.href=r.src=s);return r};
/**
   * Constructs a new DOMUtils instance. Consult the TinyMCE Documentation for more details on settings etc for this class.
   *
   * @private
   * @constructor
   * @method DOMUtils
   * @param {Document} doc Document reference to bind the utility class to.
   * @param {settings} settings Optional settings collection.
   */const wd=(e,n={})=>{const o={};const s=window;const r={};let c=0;const a=true;const i=true;const l=Ui.forElement(fo.fromDom(e),{contentCssCors:n.contentCssCors,referrerPolicy:n.referrerPolicy,crossOrigin:t=>{const e=n.crossOrigin;return R(e)?e(t,"stylesheet"):void 0}});const d=[];const u=n.schema?n.schema:Il({});const m=Xl({url_converter:n.url_converter,url_converter_scope:n.url_converter_scope},n.schema);const f=n.ownEvents?new EventUtils:EventUtils.Event;const p=u.getBlockElements();
/**
     * Returns true/false if the specified element is a block element or not.
     *
     * @method isBlock
     * @param {Node/String} node Element/Node to check.
     * @return {Boolean} True/False state if the node is a block element or not.
     */const g=t=>C(t)?Pt(p,t):ha(t)&&(Pt(p,t.nodeName)||Ni(u,t));const h=t=>t&&e&&C(t)?e.getElementById(t):t;const b=t=>{const e=h(t);return N(e)?fo.fromDom(e):null};const y=(t,e,n="")=>{let o;const s=b(t);if(N(s)&&$o(s)){const t=jt[e];o=t&&t.get?t.get(s.dom,e):js(s,e)}return N(o)?o:n};const v=t=>{const e=h(t);return _(e)?[]:e.attributes};const w=(t,e,o)=>{q(t,(t=>{if(ha(t)){const s=fo.fromDom(t);const r=o===""?null:o;const c=js(s,e);const a=jt[e];a&&a.set?a.set(s.dom,r,e):pd(s,e,r);c!==r&&n.onSetAttrib&&n.onSetAttrib({attrElm:s.dom,attrName:e,attrValue:r})}}))};const x=(t,e)=>t.cloneNode(e);const k=()=>n.root_element||e.body;const S=t=>{const e=ca(t);return{x:e.x,y:e.y,w:e.width,h:e.height}};const A=(t,n)=>Pi(e.body,h(t),n);const D=(t,e,o)=>{q(t,(t=>{const s=fo.fromDom(t);vd(s,e,o);n.update_styles&&bd(m,s)}))};const B=(t,e)=>{q(t,(t=>{const o=fo.fromDom(t);kt(e,((t,e)=>{vd(o,e,t)}));n.update_styles&&bd(m,o)}))};const L=(t,e,n)=>{const o=h(t);if(!_(o)&&(ba(o)||ya(o))){if(n)return fr(fo.fromDom(o),gd(e));e=e.replace(/-(\D)/g,((t,e)=>e.toUpperCase()));e==="float"&&(e="cssFloat");return o.style?o.style[e]:void 0}};const M=t=>{const e=h(t);if(!e)return{w:0,h:0};let n=L(e,"width");let o=L(e,"height");n&&n.indexOf("px")!==-1||(n="0");o&&o.indexOf("px")!==-1||(o="0");return{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(o,10)||e.offsetHeight||e.clientHeight}};const I=t=>{const e=h(t);const n=A(e);const o=M(e);return{x:n.x,y:n.y,w:o.w,h:o.h}};const F=(t,e)=>{if(!t)return false;const n=E(t)?t:[t];return Q(n,(t=>No(fo.fromDom(t),e)))};const U=(t,e,n,o)=>{const s=[];let r=h(t);o=o===void 0;const c=n||(k().nodeName!=="BODY"?k().parentNode:null);if(C(e))if(e==="*")e=ha;else{const t=e;e=e=>F(e,t)}while(r){if(r===c||_(r.nodeType)||Ta(r)||Ba(r))break;if(!e||e(r)){if(!o)return[r];s.push(r)}r=r.parentNode}return o?s:null};const z=(t,e,n)=>{const o=U(t,e,n,false);return o&&o.length>0?o[0]:null};const $=(t,e,n)=>{let o=e;if(t){C(e)&&(o=t=>F(t,e));for(let e=t[n];e;e=e[n])if(R(o)&&o(e))return e}return null};const j=(t,e)=>$(t,e,"nextSibling");const H=(t,e)=>$(t,e,"previousSibling");const W=t=>R(t.querySelectorAll);const V=(t,o)=>{const s=h(o)??n.root_element??e;return W(s)?Ct(s.querySelectorAll(t)):[]};const q=function(e,n,o){const s=o??(this||t);if(E(e)){const t=[];dd(e,((e,o)=>{const r=h(e);r&&t.push(n.call(s,r,o))}));return t}{const t=h(e);return!!t&&n.call(s,t)}};const K=(t,e)=>{q(t,(t=>{kt(e,((e,n)=>{w(t,n,e)}))}))};const Y=(t,e)=>{q(t,(t=>{const n=fo.fromDom(t);rr(n,e)}))};const G=(t,n,o,s,r)=>q(t,(t=>{const c=C(n)?e.createElement(n):n;N(o)&&K(c,o);s&&(!C(s)&&s.nodeType?c.appendChild(s):C(s)&&Y(c,s));return r?c:t.appendChild(c)}));const X=(t,n,o)=>G(e.createElement(t),t,n,o,true);const Z=ul.decode;const tt=ul.encodeAllRaw;const et=(t,e,n="")=>{let o="<"+t;for(const t in e)Mt(e,t)&&(o+=" "+t+'="'+tt(e[t])+'"');return Ne(n)&&Pt(u.getVoidElements(),t)?o+" />":o+">"+n+"</"+t+">"};const nt=t=>{const n=e.createElement("div");const o=e.createDocumentFragment();o.appendChild(n);t&&(n.innerHTML=t);let s;while(s=n.firstChild)o.appendChild(s);o.removeChild(n);return o};const ot=(t,e)=>q(t,(t=>{const n=fo.fromDom(t);e&&J(ss(n),(t=>{jo(t)&&t.dom.length===0?Gs(t):Ds(n,t)}));Gs(n);return n.dom}));const st=t=>q(t,(t=>{const e=t.attributes;for(let n=e.length-1;n>=0;n--)t.removeAttributeNode(e.item(n))}));const rt=t=>m.parse(t);const ct=(t,e)=>m.serialize(t,e);const at=t=>{if($t!==wd.DOM&&e===document){if(o[t])return;o[t]=true}let n=e.getElementById("mceDefaultStyles");if(!n){n=e.createElement("style");n.id="mceDefaultStyles";n.type="text/css";const t=e.head;t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(e.createTextNode(t))};const it=t=>{t||(t="");J(t.split(","),(t=>{r[t]=true;l.load(t).catch(T)}))};const lt=(t,e,n)=>{q(t,(t=>{if(ha(t)){const o=fo.fromDom(t);const s=e.split(" ");J(s,(t=>{if(N(n)){const e=n?tc:nc;e(o,t)}else oc(o,t)}))}}))};const dt=(t,e)=>{lt(t,e,true)};const ut=(t,e)=>{lt(t,e,false)};const ft=(t,e)=>{const n=b(t);const o=e.split(" ");return N(n)&&mt(o,(t=>sc(n,t)))};const pt=t=>{q(t,(t=>br(fo.fromDom(t),"display")))};const gt=t=>{q(t,(t=>ur(fo.fromDom(t),"display","none")))};const ht=t=>{const e=b(t);return N(e)&&se(gr(e,"display"),"none")};const bt=t=>(t||"mce_")+c++;const yt=t=>{const e=b(t);return N(e)?ha(e.dom)?e.dom.outerHTML:cr(e):""};const vt=(t,e)=>{q(t,(t=>{ha(t)&&(t.outerHTML=e)}))};const wt=(t,e)=>{const n=h(e);return q(t,(t=>{const e=n?.parentNode;const o=n?.nextSibling;e&&(o?e.insertBefore(t,o):e.appendChild(t));return t}))};const Ot=(t,e,n)=>q(e,(o=>{const s=E(e)?t.cloneNode(true):t;n&&dd(ud(o.childNodes),(t=>{s.appendChild(t)}));o.parentNode?.replaceChild(s,o);return o}));const Et=(t,e)=>{if(t.nodeName!==e.toUpperCase()){const n=X(e);dd(v(t),(e=>{w(n,e.nodeName,y(t,e.nodeName))}));Ot(n,t,true);return n}return t};const xt=(t,e)=>{let n=t;while(n){let t=e;while(t&&n!==t)t=t.parentNode;if(n===t)break;n=n.parentNode}return!n&&t.ownerDocument?t.ownerDocument.documentElement:n};const St=(t,e,n)=>{if(O(e)){const o=t=>{const n=t.nodeName.toLowerCase();return Boolean(e[n])};return si(u,t,{...n,isContent:o})}return si(u,t,n)};const _t=()=>e.createRange();const Nt=(t,e,n)=>{let o=_t();let s;let r;if(t&&e&&t.parentNode&&e.parentNode){const c=t.parentNode;o.setStart(c,hd(t));o.setEnd(e.parentNode,hd(e));s=o.extractContents();o=_t();o.setStart(e.parentNode,hd(e)+1);o.setEnd(c,hd(t)+1);r=o.extractContents();c.insertBefore(Ki($t,s,u),t);n?c.insertBefore(n,t):c.insertBefore(e,t);c.insertBefore(Ki($t,r,u),t);ot(t);return n||e}};const Rt=(t,o,r,c)=>{if(E(t)){let e=t.length;const n=[];while(e--)n[e]=Rt(t[e],o,r,c);return n}!n.collect||t!==e&&t!==s||d.push([t,o,r,c]);return f.bind(t,o,r,c||$t)};const At=(t,n,o)=>{if(E(t)){let e=t.length;const s=[];while(e--)s[e]=At(t[e],n,o);return s}if(d.length>0&&(t===e||t===s)){let e=d.length;while(e--){const[s,r,c]=d[e];t!==s||n&&n!==r||o&&o!==c||f.unbind(s,r,c)}}return f.unbind(t,n,o)};const Dt=(t,e,n)=>f.dispatch(t,e,n);const Tt=(t,e,n)=>f.dispatch(t,e,n);const Bt=t=>{if(t&&ba(t)){const e=t.getAttribute("data-mce-contenteditable");return e&&e!=="inherit"?e:t.contentEditable!=="inherit"?t.contentEditable:null}return null};const Lt=t=>{const e=k();let n=null;for(let o=t;o&&o!==e;o=o.parentNode){n=Bt(o);if(n!==null)break}return n};const It=t=>{if(N(t)){const e=ha(t)?t:t.parentElement;return N(e)&&ba(e)&&ic(fo.fromDom(e))}return false};const Ft=()=>{if(d.length>0){let t=d.length;while(t--){const[e,n,o]=d[t];f.unbind(e,n,o)}}kt(r,((t,e)=>{l.unload(e);delete r[e]}))};const Ut=(t,e)=>t===e||e.contains(t);const zt=t=>"startContainer: "+t.startContainer.nodeName+", startOffset: "+t.startOffset+", endContainer: "+t.endContainer.nodeName+", endOffset: "+t.endOffset;const $t={doc:e,settings:n,win:s,files:r,stdMode:a,boxModel:i,styleSheetLoader:l,boundEvents:d,styles:m,schema:u,events:f,isBlock:g,root:null,clone:x,getRoot:k,
/**
       * Returns the viewport of the window.
       *
       * @method getViewPort
       * @param {Window} win Optional window to get viewport of.
       * @return {Object} Viewport object with fields x, y, w and h.
       */
getViewPort:S,
/**
       * Returns the rectangle for a specific element.
       *
       * @method getRect
       * @param {Element/String} elm Element object or element ID to get rectangle from.
       * @return {Object} Rectangle for specified element object with x, y, w, h fields.
       */
getRect:I,
/**
       * Returns the size dimensions of the specified element.
       *
       * @method getSize
       * @param {Element/String} elm Element object or element ID to get rectangle from.
       * @return {Object} Rectangle for specified element object with w, h fields.
       */
getSize:M,
/**
       * Returns a node by the specified selector function. This function will
       * loop through all parent nodes and call the specified function for each node.
       * If the function then returns true indicating that it has found what it was looking for, the loop execution will then end
       * and the node it found will be returned.
       *
       * @method getParent
       * @param {Node/String} node DOM node to search parents on or ID string.
       * @param {Function} selector Selection function or CSS selector to execute on each node.
       * @param {Node} root Optional root element, never go beyond this point.
       * @return {Node} DOM Node or null if it wasn't found.
       */
getParent:z,
/**
       * Returns a node list of all parents matching the specified selector function or pattern.
       * If the function then returns true indicating that it has found what it was looking for and that node will be collected.
       *
       * @method getParents
       * @param {Node/String} node DOM node to search parents on or ID string.
       * @param {Function} selector Selection function to execute on each node or CSS pattern.
       * @param {Node} root Optional root element, never go beyond this point.
       * @return {Array} Array of nodes or null if it wasn't found.
       */
getParents:U,
/**
       * Returns the specified element by ID or the input element if it isn't a string.
       *
       * @method get
       * @param {String/Element} n Element id to look for or element to just pass though.
       * @return {Element} Element matching the specified id or null if it wasn't found.
       */
get:h,
/**
       * Returns the next node that matches selector or function
       *
       * @method getNext
       * @param {Node} node Node to find siblings from.
       * @param {String/function} selector Selector CSS expression or function.
       * @return {Node} Next node item matching the selector or null if it wasn't found.
       */
getNext:j,
/**
       * Returns the previous node that matches selector or function
       *
       * @method getPrev
       * @param {Node} node Node to find siblings from.
       * @param {String/function} selector Selector CSS expression or function.
       * @return {Node} Previous node item matching the selector or null if it wasn't found.
       */
getPrev:H,
/**
       * Returns a list of the elements specified by the given CSS selector. For example: `div#a1 p.test`
       *
       * @method select
       * @param {String} selector Target CSS selector.
       * @param {Object} scope Optional root element/scope element to search in.
       * @return {Array} Array with all matched elements.
       * @example
       * // Adds a class to all paragraphs in the currently active editor
       * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('p'), 'someclass');
       *
       * // Adds a class to all spans that have the test class in the currently active editor
       * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('span.test'), 'someclass')
       */
select:V,
/**
       * Returns true/false if the specified element matches the specified css pattern.
       *
       * @method is
       * @param {Node/NodeList} elm DOM node to match or an array of nodes to match.
       * @param {String} selector CSS pattern to match the element against.
       */
is:F,
/**
       * Adds the specified element to another element or elements.
       *
       * @method add
       * @param {String/Element/Array} parentElm Element id string, DOM node element or array of ids or elements to add to.
       * @param {String/Element} name Name of new element to add or existing element to add.
       * @param {Object} attrs Optional object collection with arguments to add to the new element(s).
       * @param {String} html Optional inner HTML contents to add for each element.
       * @param {Boolean} create Optional flag if the element should be created or added.
       * @return {Element/Array} Element that got created, or an array of created elements if multiple input elements
       * were passed in.
       * @example
       * // Adds a new paragraph to the end of the active editor
       * tinymce.activeEditor.dom.add(tinymce.activeEditor.getBody(), 'p', { title: 'my title' }, 'Some content');
       */
add:G,
/**
       * Creates a new element.
       *
       * @method create
       * @param {String} name Name of new element.
       * @param {Object} attrs Optional object name/value collection with element attributes.
       * @param {String} html Optional HTML string to set as inner HTML of the element.
       * @return {Element} HTML DOM node element that got created.
       * @example
       * // Adds an element where the caret/selection is in the active editor
       * var el = tinymce.activeEditor.dom.create('div', { id: 'test', 'class': 'myclass' }, 'some content');
       * tinymce.activeEditor.selection.setNode(el);
       */
create:X,
/**
       * Creates HTML string for element. The element will be closed unless an empty inner HTML string is passed in.
       *
       * @method createHTML
       * @param {String} name Name of new element.
       * @param {Object} attrs Optional object name/value collection with element attributes.
       * @param {String} html Optional HTML string to set as inner HTML of the element.
       * @return {String} String with new HTML element, for example: <a href="#">test</a>.
       * @example
       * // Creates a html chunk and inserts it at the current selection/caret location
       * tinymce.activeEditor.insertContent(tinymce.activeEditor.dom.createHTML('a', { href: 'test.html' }, 'some line'));
       */
createHTML:et,
/**
       * Creates a document fragment out of the specified HTML string.
       *
       * @method createFragment
       * @param {String} html Html string to create fragment from.
       * @return {DocumentFragment} Document fragment node.
       */
createFragment:nt,
/**
       * Removes/deletes the specified element(s) from the DOM.
       *
       * @method remove
       * @param {String/Element/Array} node ID of element or DOM element object or array containing multiple elements/ids.
       * @param {Boolean} keepChildren Optional state to keep children or not. If set to true all children will be
       * placed at the location of the removed element.
       * @return {Element/Array} HTML DOM element that got removed, or an array of removed elements if multiple input elements
       * were passed in.
       * @example
       * // Removes all paragraphs in the active editor
       * tinymce.activeEditor.dom.remove(tinymce.activeEditor.dom.select('p'));
       *
       * // Removes an element by id in the document
       * tinymce.DOM.remove('mydiv');
       */
remove:ot,
/**
       * Sets the CSS style value on a HTML element. The name can be a camelcase string
       * or the CSS style name like background-color.
       *
       * @method setStyle
       * @param {String/Element/Array} elm HTML element/Array of elements to set CSS style value on.
       * @param {String} name Name of the style value to set.
       * @param {String} value Value to set on the style.
       * @example
       * // Sets a style value on all paragraphs in the currently active editor
       * tinymce.activeEditor.dom.setStyle(tinymce.activeEditor.dom.select('p'), 'background-color', 'red');
       *
       * // Sets a style value to an element by id in the current document
       * tinymce.DOM.setStyle('mydiv', 'background-color', 'red');
       */
setStyle:D,
/**
       * Returns the current style or runtime/computed value of an element.
       *
       * @method getStyle
       * @param {String/Element} elm HTML element or element id string to get style from.
       * @param {String} name Style name to return.
       * @param {Boolean} computed Computed style.
       * @return {String} Current style or computed style value of an element.
       */
getStyle:L,
/**
       * Sets multiple styles on the specified element(s).
       *
       * @method setStyles
       * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set styles on.
       * @param {Object} styles Name/Value collection of style items to add to the element(s).
       * @example
       * // Sets styles on all paragraphs in the currently active editor
       * tinymce.activeEditor.dom.setStyles(tinymce.activeEditor.dom.select('p'), { 'background-color': 'red', 'color': 'green' });
       *
       * // Sets styles to an element by id in the current document
       * tinymce.DOM.setStyles('mydiv', { 'background-color': 'red', 'color': 'green' });
       */
setStyles:B,
/**
       * Removes all attributes from an element or elements.
       *
       * @method removeAllAttribs
       * @param {Element/String/Array} e DOM element, element id string or array of elements/ids to remove attributes from.
       */
removeAllAttribs:st,
/**
       * Sets the specified attribute of an element or elements.
       *
       * @method setAttrib
       * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set attribute on.
       * @param {String} name Name of attribute to set.
       * @param {String} value Value to set on the attribute - if this value is falsy like null, 0 or '' it will remove
       * the attribute instead.
       * @example
       * // Sets class attribute on all paragraphs in the active editor
       * tinymce.activeEditor.dom.setAttrib(tinymce.activeEditor.dom.select('p'), 'class', 'myclass');
       *
       * // Sets class attribute on a specific element in the current page
       * tinymce.dom.setAttrib('mydiv', 'class', 'myclass');
       */
setAttrib:w,
/**
       * Sets two or more specified attributes of an element or elements.
       *
       * @method setAttribs
       * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set attributes on.
       * @param {Object} attrs Name/Value collection of attribute items to add to the element(s).
       * @example
       * // Sets class and title attributes on all paragraphs in the active editor
       * tinymce.activeEditor.dom.setAttribs(tinymce.activeEditor.dom.select('p'), { 'class': 'myclass', title: 'some title' });
       *
       * // Sets class and title attributes on a specific element in the current page
       * tinymce.DOM.setAttribs('mydiv', { 'class': 'myclass', title: 'some title' });
       */
setAttribs:K,
/**
       * Returns the specified attribute by name.
       *
       * @method getAttrib
       * @param {String/Element} elm Element string id or DOM element to get attribute from.
       * @param {String} name Name of attribute to get.
       * @param {String} defaultVal Optional default value to return if the attribute didn't exist.
       * @return {String} Attribute value string, default value or null if the attribute wasn't found.
       */
getAttrib:y,
/**
       * Returns the absolute x, y position of a node. The position will be returned in an object with x, y fields.
       *
       * @method getPos
       * @param {Element/String} elm HTML element or element id to get x, y position from.
       * @param {Element} rootElm Optional root element to stop calculations at.
       * @return {Object} Absolute position of the specified element object with x, y fields.
       */
getPos:A,
/**
       * Parses the specified style value into an object collection. This parser will also
       * merge and remove any redundant items that browsers might have added. It will also convert non-hex
       * colors to hex values. Urls inside the styles will also be converted to absolute/relative based on settings.
       *
       * @method parseStyle
       * @param {String} cssText Style value to parse, for example: border:1px solid red;.
       * @return {Object} Object representation of that style, for example: {border: '1px solid red'}
       */
parseStyle:rt,
/**
       * Serializes the specified style object into a string.
       *
       * @method serializeStyle
       * @param {Object} styles Object to serialize as string, for example: {border: '1px solid red'}
       * @param {String} name Optional element name.
       * @return {String} String representation of the style object, for example: border: 1px solid red.
       */
serializeStyle:ct,
/**
       * Adds a style element at the top of the document with the specified cssText content.
       *
       * @method addStyle
       * @param {String} cssText CSS Text style to add to top of head of document.
       */
addStyle:at,
/**
       * Imports/loads the specified CSS file into the document bound to the class.
       *
       * @method loadCSS
       * @param {String} url URL to CSS file to load.
       * @example
       * // Loads a CSS file dynamically into the current document
       * tinymce.DOM.loadCSS('somepath/some.css');
       *
       * // Loads a CSS file into the currently active editor instance
       * tinymce.activeEditor.dom.loadCSS('somepath/some.css');
       *
       * // Loads a CSS file into an editor instance by id
       * tinymce.get('someid').dom.loadCSS('somepath/some.css');
       *
       * // Loads multiple CSS files into the current document
       * tinymce.DOM.loadCSS('somepath/some.css,somepath/someother.css');
       */
loadCSS:it,
/**
       * Adds a class to the specified element or elements.
       *
       * @method addClass
       * @param {String/Element/Array} elm Element ID string or DOM element or array with elements or IDs.
       * @param {String} cls Class name to add to each element.
       * @return {String/Array} String with new class value or array with new class values for all elements.
       * @example
       * // Adds a class to all paragraphs in the active editor
       * tinymce.activeEditor.dom.addClass(tinymce.activeEditor.dom.select('p'), 'myclass');
       *
       * // Adds a class to a specific element in the current page
       * tinymce.DOM.addClass('mydiv', 'myclass');
       */
addClass:dt,
/**
       * Removes a class from the specified element or elements.
       *
       * @method removeClass
       * @param {String/Element/Array} elm Element ID string or DOM element or array with elements or IDs.
       * @param {String} cls Class name to remove from each element.
       * @return {String/Array} String of remaining class name(s), or an array of strings if multiple input elements
       * were passed in.
       * @example
       * // Removes a class from all paragraphs in the active editor
       * tinymce.activeEditor.dom.removeClass(tinymce.activeEditor.dom.select('p'), 'myclass');
       *
       * // Removes a class from a specific element in the current page
       * tinymce.DOM.removeClass('mydiv', 'myclass');
       */
removeClass:ut,
/**
       * Returns true if the specified element has the specified class.
       *
       * @method hasClass
       * @param {String/Element} elm HTML element or element id string to check CSS class on.
       * @param {String} cls CSS class to check for.
       * @return {Boolean} true/false if the specified element has the specified class.
       */
hasClass:ft,
/**
       * Toggles the specified class on/off.
       *
       * @method toggleClass
       * @param {Element} elm Element to toggle class on.
       * @param {String} cls Class to toggle on/off.
       * @param {Boolean} state Optional state to set.
       */
toggleClass:lt,
/**
       * Shows the specified element(s) by ID by setting the "display" style.
       *
       * @method show
       * @param {String/Element/Array} elm ID of DOM element or DOM element or array with elements or IDs to show.
       */
show:pt,
/**
       * Hides the specified element(s) by ID by setting the "display" style.
       *
       * @method hide
       * @param {String/Element/Array} elm ID of DOM element or DOM element or array with elements or IDs to hide.
       * @example
       * // Hides an element by id in the document
       * tinymce.DOM.hide('myid');
       */
hide:gt,
/**
       * Returns true/false if the element is hidden or not by checking the "display" style.
       *
       * @method isHidden
       * @param {String/Element} elm Id or element to check display state on.
       * @return {Boolean} true/false if the element is hidden or not.
       */
isHidden:ht,
/**
       * Returns a unique id. This can be useful when generating elements on the fly.
       * This method will not check if the element already exists.
       *
       * @method uniqueId
       * @param {String} prefix Optional prefix to add in front of all ids - defaults to "mce_".
       * @return {String} Unique id.
       */
uniqueId:bt,
/**
       * Sets the specified HTML content inside the element or elements. The HTML will first be processed. This means
       * URLs will get converted, hex color values fixed etc. Check processHTML for details.
       *
       * @method setHTML
       * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set HTML inside of.
       * @param {String} html HTML content to set as inner HTML of the element.
       * @example
       * // Sets the inner HTML of all paragraphs in the active editor
       * tinymce.activeEditor.dom.setHTML(tinymce.activeEditor.dom.select('p'), 'some inner html');
       *
       * // Sets the inner HTML of an element by id in the document
       * tinymce.DOM.setHTML('mydiv', 'some inner html');
       */
setHTML:Y,
/**
       * Returns the outer HTML of an element.
       *
       * @method getOuterHTML
       * @param {String/Element} elm Element ID or element object to get outer HTML from.
       * @return {String} Outer HTML string.
       * @example
       * tinymce.DOM.getOuterHTML(editorElement);
       * tinymce.activeEditor.getOuterHTML(tinymce.activeEditor.getBody());
       */
getOuterHTML:yt,
/**
       * Sets the specified outer HTML on an element or elements.
       *
       * @method setOuterHTML
       * @param {Element/String/Array} elm DOM element, element id string or array of elements/ids to set outer HTML on.
       * @param {Object} html HTML code to set as outer value for the element.
       * @example
       * // Sets the outer HTML of all paragraphs in the active editor
       * tinymce.activeEditor.dom.setOuterHTML(tinymce.activeEditor.dom.select('p'), '<div>some html</div>');
       *
       * // Sets the outer HTML of an element by id in the document
       * tinymce.DOM.setOuterHTML('mydiv', '<div>some html</div>');
       */
setOuterHTML:vt,
/**
       * Entity decodes a string. This method decodes any HTML entities, such as `&amp;aring;`.
       *
       * @method decode
       * @param {String} s String to decode entities on.
       * @return {String} Entity decoded string.
       */
decode:Z,
/**
       * Entity encodes a string. This method encodes the most common entities, such as `<`, `>`, `"` and `&`.
       *
       * @method encode
       * @param {String} text String to encode with entities.
       * @return {String} Entity encoded string.
       */
encode:tt,
/**
       * Inserts an element after the reference element.
       *
       * @method insertAfter
       * @param {Element} node Element to insert after the reference.
       * @param {Element/String/Array} referenceNode Reference element, element id or array of elements to insert after.
       * @return {Element/Array} Element that got added or an array with elements.
       */
insertAfter:wt,
/**
       * Replaces the specified element or elements with the new element specified. The new element will
       * be cloned if multiple input elements are passed in.
       *
       * @method replace
       * @param {Element} newElm New element to replace old ones with.
       * @param {Element/String/Array} oldElm Element DOM node, element id or array of elements or ids to replace.
       * @param {Boolean} keepChildren Optional keep children state, if set to true child nodes from the old object will be added
       * to new ones.
       */
replace:Ot,
/**
       * Renames the specified element and keeps its attributes and children.
       *
       * @method rename
       * @param {Element} elm Element to rename.
       * @param {String} name Name of the new element.
       * @return {Element} New element or the old element if it needed renaming.
       */
rename:Et,
/**
       * Find the common ancestor of two elements. This is a shorter method than using the DOM Range logic.
       *
       * @method findCommonAncestor
       * @param {Element} a Element to find common ancestor of.
       * @param {Element} b Element to find common ancestor of.
       * @return {Element} Common ancestor element of the two input elements.
       */
findCommonAncestor:xt,
/**
       * Executes the specified function on the element by id or dom element node or array of elements/id.
       *
       * @method run
       * @param {String/Element/Array} elm ID or DOM element object or array with ids or elements.
       * @param {Function} func Function to execute for each item.
       * @param {Object} scope Optional scope to execute the function in.
       * @return {Object/Array} Single object, or an array of objects if multiple input elements were passed in.
       */
run:q,
/**
       * Returns a NodeList with attributes for the element.
       *
       * @method getAttribs
       * @param {HTMLElement/string} elm Element node or string id to get attributes from.
       * @return {NodeList} NodeList with attributes.
       */
getAttribs:v,
/**
       * Returns true/false if the specified node is to be considered empty or not.
       *
       * @method isEmpty
       * @param {Node} node The target node to check if it's empty.
       * @param {Object} elements Optional name/value object with elements that are automatically treated as non-empty elements.
       * @return {Boolean} true/false if the node is empty or not.
       * @example
       * tinymce.DOM.isEmpty(node, { img: true });
       */
isEmpty:St,createRng:_t,
/**
       * Returns the index of the specified node within its parent.
       *
       * @method nodeIndex
       * @param {Node} node Node to look for.
       * @param {Boolean} normalized Optional true/false state if the index is what it would be after a normalization.
       * @return {Number} Index of the specified node.
       */
nodeIndex:hd,
/**
       * Splits an element into two new elements and places the specified split
       * element or elements between the new ones. For example splitting the paragraph at the bold element in
       * this example `<p>abc<b>abc</b>123</p>` would produce `<p>abc</p><b>abc</b><p>123</p>`.
       *
       * @method split
       * @param {Element} parentElm Parent element to split.
       * @param {Element} splitElm Element to split at.
       * @param {Element} replacementElm Optional replacement element to replace the split element with.
       * @return {Element} Returns the split element or the replacement element if that is specified.
       */
split:Nt,
/**
       * Adds an event handler to the specified object.
       *
       * @method bind
       * @param {Element/Document/Window/Array} target Target element to bind events to.
       * handler to or an array of elements/ids/documents.
       * @param {String} name Name of event handler to add, for example: click.
       * @param {Function} func Function to execute when the event occurs.
       * @param {Object} scope Optional scope to execute the function in.
       * @return {Function} Function callback handler the same as the one passed in.
       */
bind:Rt,
/**
       * Removes the specified event handler by name and function from an element or collection of elements.
       *
       * @method unbind
       * @param {Element/Document/Window/Array} target Target element to unbind events on.
       * @param {String} name Event handler name, for example: "click"
       * @param {Function} func Function to remove.
       * @return {Boolean/Array} Bool state of true if the handler was removed, or an array of states if multiple input elements
       * were passed in.
       */
unbind:At,
/**
       * Fires the specified event name and optional object on the specified target.
       * <br>
       * <em>Deprecated in TinyMCE 6.0 and has been marked for removal in TinyMCE 7.0. Use <code>dispatch</code> instead.</em>
       *
       * @method fire
       * @param {Node/Document/Window} target Target element or object to fire event on.
       * @param {String} name Event name to fire.
       * @param {Object} evt Event object to send.
       * @return {Event} Event object.
       * @deprecated Use dispatch() instead
       */
fire:Tt,
/**
       * Dispatches the specified event name and optional object on the specified target.
       *
       * @method dispatch
       * @param {Node/Document/Window} target Target element or object to dispatch event on.
       * @param {String} name Name of the event to fire.
       * @param {Object} evt Event object to send.
       * @return {Event} Event object.
       */
dispatch:Dt,getContentEditable:Bt,getContentEditableParent:Lt,
/**
       * Checks if the specified node is editable within the given context of its parents.
       *
       * @method isEditable
       * @param {Node} node Node to check if it's editable.
       * @return {Boolean} Will be true if the node is editable and false if it's not editable.
       */
isEditable:It,destroy:Ft,isChildOf:Ut,dumpRng:zt};const jt=Cd(m,n,P($t));return $t};
/**
   * Instance of DOMUtils for the current document.
   *
   * @static
   * @property DOM
   * @type tinymce.dom.DOMUtils
   * @example
   * // Example of how to add a class to some element by id
   * tinymce.DOM.addClass('someid', 'someclass');
   */wd.DOM=wd(document);wd.nodeIndex=hd;const Od=wd.DOM;const Ed=0;const xd=1;const kd=2;const Sd=3;class ScriptLoader{static ScriptLoader=new ScriptLoader;settings;states={};queue=[];scriptLoadedCallbacks={};queueLoadedCallbacks=[];loading=false;constructor(t={}){this.settings=t}_setReferrerPolicy(t){this.settings.referrerPolicy=t}_setCrossOrigin(t){this.settings.crossOrigin=t}
/**
     * Loads a specific script directly without adding it to the load queue.
     *
     * @method loadScript
     * @param {String} url Absolute URL to script to add.
     * @return {Promise} A promise that will resolve when the script loaded successfully or reject if it failed to load.
     */loadScript(t){return new Promise(((e,n)=>{const o=Od;const s=document;let r;const c=()=>{o.remove(l);r&&(r.onerror=r.onload=r=null)};const a=()=>{c();e()};const i=()=>{c();n("Failed to load script: "+t)};const l=o.uniqueId();r=s.createElement("script");r.id=l;r.type="text/javascript";r.src=co._addCacheSuffix(t);this.settings.referrerPolicy&&o.setAttrib(r,"referrerpolicy",this.settings.referrerPolicy);const d=this.settings.crossOrigin;if(R(d)){const e=d(t);e!==void 0&&o.setAttrib(r,"crossorigin",e)}r.onload=a;r.onerror=i;(s.head||s.body).appendChild(r)}))}
/**
     * Returns true/false if a script has been loaded or not.
     *
     * @method isDone
     * @param {String} url URL to check for.
     * @return {Boolean} true/false if the URL is loaded.
     */isDone(t){return this.states[t]===kd}
/**
     * Marks a specific script to be loaded. This can be useful if a script got loaded outside
     * the script loader or to skip it from loading some script.
     *
     * @method markDone
     * @param {String} url Absolute URL to the script to mark as loaded.
     */markDone(t){this.states[t]=kd}
/**
     * Adds a specific script to the load queue of the script loader.
     *
     * @method add
     * @param {String} url Absolute URL to script to add.
     * @return {Promise} A promise that will resolve when the script loaded successfully or reject if it failed to load.
     */add(t){const e=this;e.queue.push(t);const n=e.states[t];n===void 0&&(e.states[t]=Ed);return new Promise(((n,o)=>{e.scriptLoadedCallbacks[t]||(e.scriptLoadedCallbacks[t]=[]);e.scriptLoadedCallbacks[t].push({resolve:n,reject:o})}))}load(t){return this.add(t)}remove(t){delete this.states[t];delete this.scriptLoadedCallbacks[t]}loadQueue(){const t=this.queue;this.queue=[];return this.loadScripts(t)}
/**
     * Loads the specified queue of files and executes the callback ones they are loaded.
     * This method is generally not used outside this class but it might be useful in some scenarios.
     *
     * @method loadScripts
     * @param {Array} scripts Array of queue items to load.
     * @return {Promise} A promise that is resolved when all scripts are loaded or rejected with the script urls that failed to load.
     */loadScripts(t){const e=this;const n=(t,n)=>{Lt(e.scriptLoadedCallbacks,n).each((e=>{J(e,(e=>e[t](n)))}));delete e.scriptLoadedCallbacks[n]};const o=t=>{const e=nt(t,(t=>t.status==="rejected"));return e.length>0?Promise.reject(ut(e,(({reason:t})=>E(t)?t:[t]))):Promise.resolve()};const s=t=>Promise.allSettled(Z(t,(t=>{if(e.states[t]===kd){n("resolve",t);return Promise.resolve()}if(e.states[t]===Sd){n("reject",t);return Promise.reject(t)}e.states[t]=xd;return e.loadScript(t).then((()=>{e.states[t]=kd;n("resolve",t);const r=e.queue;if(r.length>0){e.queue=[];return s(r).then(o)}return Promise.resolve()}),(()=>{e.states[t]=Sd;n("reject",t);return Promise.reject(t)}))})));const r=t=>{e.loading=true;return s(t).then((t=>{e.loading=false;const n=e.queueLoadedCallbacks.shift();Optional.from(n).each(j);return o(t)}))};const c=Ue(t);return e.loading?new Promise(((t,n)=>{e.queueLoadedCallbacks.push((()=>{r(c).then(t,n)}))})):r(c)}
/**
     * Returns the attributes that should be added to a script tag when loading the specified URL.
     *
     * @method getScriptAttributes
     * @param {String} url Url to get attributes for.
     * @return {Object} Object with attributes to add to the script tag.
     */getScriptAttributes(t){const e={};this.settings.referrerPolicy&&(e.referrerpolicy=this.settings.referrerPolicy);const n=this.settings.crossOrigin;if(R(n)){const o=n(t);C(o)&&(e.crossorigin=o)}return e}}const _d=(t,e)=>{const n=t.indexOf(e);return n!==-1&&t.indexOf(e,n+1)>n};const Nd=t=>w(t)&&Pt(t,"raw");const Rd=t=>E(t)&&t.length>1;const Ad={};const Dd=zt("en");const Td=()=>Lt(Ad,Dd.get());const Bd=()=>St(Ad,(t=>({...t})))
/**
   * Sets the current language code.
   *
   * @method setCode
   * @param {String} newCode Current language code.
   */;const Ld=t=>{t&&Dd.set(t)};const Pd=()=>Dd.get()
/**
   * Adds translations for a specific language code.
   * Translation keys are set to be case insensitive.
   *
   * @method add
   * @param {String} code Language code like sv_SE.
   * @param {Object} items Name/value object where key is english and value is the translation.
   */;const Md=(t,e)=>{let n=Ad[t];n||(Ad[t]=n={});const o=Z(Et(e),(t=>t.toLowerCase()));kt(e,((t,s)=>{const r=s.toLowerCase();if(r!==s&&_d(o,r)){Pt(e,r)||(n[r]=t);n[s]=t}else n[r]=t}))};
/**
   * Translates the specified text.
   *
   * It has a few formats:
   * I18n.translate("Text");
   * I18n.translate(["Text {0}/{1}", 0, 1]);
   * I18n.translate({raw: "Raw string"});
   *
   * @method translate
   * @param {String/Object/Array} text Text to translate.
   * @return {String} String that got translated.
   */const Id=t=>{const e=Td().getOr({});const n=t=>R(t)?Object.prototype.toString.call(t):o(t)?"":""+t;const o=t=>t===""||t===null||t===void 0;const s=t=>{const o=n(t);return Pt(e,o)?n(e[o]):Lt(e,o.toLowerCase()).map(n).getOr(o)};const r=t=>t.replace(/{context:\w+}$/,"");const c=t=>t.replaceAll("...",Me);if(o(t))return"";if(Nd(t))return c(n(t.raw));if(Rd(t)){const e=t.slice(1);const o=s(t[0]).replace(/\{([0-9]+)\}/g,((t,o)=>Pt(e,o)?n(e[o]):t));return c(r(o))}return c(r(s(t)))};const Fd=()=>Td().bind((t=>Lt(t,"_dir"))).exists((t=>t==="rtl"))
/**
   * Returns true/false if specified language pack exists.
   *
   * @method hasCode
   * @param {String} code Code to check for.
   * @return {Boolean} True if the current language pack for the specified code exists.
   */;const Ud=t=>Pt(Ad,t);const zd={getData:Bd,setCode:Ld,getCode:Pd,add:Md,translate:Id,isRtl:Fd,hasCode:Ud};const $d=()=>{const t=[];const e={};const n={};const o=[];const s=(t,e)=>{const n=nt(o,(n=>n.name===t&&n.state===e));J(n,(t=>t.resolve()))};const r=t=>Pt(e,t);const c=t=>Pt(n,t);const a=t=>{if(n[t])return n[t].instance};const i=(t,n)=>{const o=zd.getCode();const s=","+(n||"")+",";!o||n&&s.indexOf(","+o+",")===-1||ScriptLoader.ScriptLoader.add(e[t]+"/langs/"+o+".js")};const l=(t,e)=>{$d.languageLoad!==false&&(r(t)?i(t,e):p(t,"loaded").then((()=>i(t,e))))};const d=(e,o)=>{t.push(o);n[e]={instance:o};s(e,"added");return o};const u=t=>{delete e[t];delete n[t]};const m=(t,e)=>C(e)?C(t)?{prefix:"",resource:e,suffix:""}:{prefix:t.prefix,resource:e,suffix:t.suffix}:e;const f=(t,o)=>{if(e[t])return Promise.resolve();let r=C(o)?o:o.prefix+o.resource+o.suffix;r.indexOf("/")!==0&&r.indexOf("://")===-1&&(r=$d.baseURL+"/"+r);e[t]=r.substring(0,r.lastIndexOf("/"));const c=()=>{s(t,"loaded");return Promise.resolve()};return n[t]?c():ScriptLoader.ScriptLoader.add(r).then(c)};const p=(t,e="added")=>e==="added"&&c(t)||e==="loaded"&&r(t)?Promise.resolve():new Promise((n=>{o.push({name:t,state:e,resolve:n})}));return{items:t,urls:e,lookup:n,
/**
       * Returns the specified add on by the short name.
       *
       * @method get
       * @param {String} name Add-on to look for.
       * @return {tinymce.Theme/tinymce.Plugin} Theme or plugin add-on instance or undefined.
       */
get:a,
/**
       * Loads a language pack for the specified add-on.
       *
       * @method requireLangPack
       * @param {String} name Short name of the add-on.
       * @param {String} languages Optional comma or space separated list of languages to check if it matches the name.
       */
requireLangPack:l,
/**
       * Adds a instance of the add-on by it's short name.
       *
       * @method add
       * @param {String} id Short name/id for the add-on.
       * @param {tinymce.Theme/tinymce.Plugin} addOn Theme or plugin to add.
       * @return {tinymce.Theme/tinymce.Plugin} The same theme or plugin instance that got passed in.
       * @example
       * // Create a simple plugin
       * const TestPlugin = (ed, url) => {
       *   ed.on('click', (e) => {
       *     ed.windowManager.alert('Hello World!');
       *   });
       * };
       *
       * // Register plugin using the add method
       * tinymce.PluginManager.add('test', TestPlugin);
       *
       * // Initialize TinyMCE
       * tinymce.init({
       *   ...
       *   plugins: '-test' // Init the plugin but don't try to load it
       * });
       */
add:d,remove:u,createUrl:m,
/**
       * Loads an add-on from a specific url.
       *
       * @method load
       * @param {String} name Short name of the add-on that gets loaded.
       * @param {String} addOnUrl URL to the add-on that will get loaded.
       * @return {Promise} A promise that will resolve when the add-on is loaded successfully or reject if it failed to load.
       * @example
       * // Loads a plugin from an external URL
       * tinymce.PluginManager.load('myplugin', '/some/dir/someplugin/plugin.js');
       *
       * // Initialize TinyMCE
       * tinymce.init({
       *   ...
       *   plugins: '-myplugin' // Don't try to load it again
       * });
       */
load:f,waitFor:p}};$d.languageLoad=true;$d.baseURL="";$d.PluginManager=$d();$d.ThemeManager=$d();$d.ModelManager=$d();const jd=P("mce-annotation");const Hd=P("data-mce-annotation");const Wd=P("data-mce-annotation-uid");const Vd=P("data-mce-annotation-active");const qd=P("data-mce-annotation-classes");const Kd=P("data-mce-annotation-attrs");const Yd=t=>e=>To(e,t);const Gd=(t,e)=>{const n=t.selection.getRng();const o=fo.fromDom(n.startContainer);const s=fo.fromDom(t.getBody());const r=e.fold((()=>"."+jd()),(t=>`[${Hd()}="${t}"]`));const c=rs(o,n.startOffset).getOr(o);const a=Yr(c,r,Yd(s));return a.bind((e=>Hs(e,`${Wd()}`).bind((n=>Hs(e,`${Hd()}`).map((e=>{const o=Zd(t,n);return{uid:n,name:e,elements:o}}))))))};const Xd=t=>$o(t)&&sc(t,jd());const Qd=(t,e)=>Ws(t,"data-mce-bogus")||Cc(t,'[data-mce-bogus="all"]',Yd(e));const Zd=(t,e)=>{const n=fo.fromDom(t.getBody());const o=gc(n,`[${Wd()}="${e}"]`);return nt(o,(t=>!Qd(t,n)))};const Jd=(t,e)=>{const n=fo.fromDom(t.getBody());const o=gc(n,`[${Hd()}="${e}"]`);const s={};J(o,(t=>{if(!Qd(t,n)){const e=js(t,Wd());const n=Lt(s,e).getOr([]);s[e]=n.concat([t])}}));return s};const tu=(t,e)=>{const n=zt({});const o=()=>({listeners:[],previous:he()});const s=(t,e)=>{r(t,(t=>{e(t);return t}))};const r=(t,e)=>{const s=n.get();const r=Lt(s,t).getOrThunk(o);const c=e(r);s[t]=c;n.set(s)};const c=(t,e,n)=>{s(t,(o=>{J(o.listeners,(o=>o(true,t,{uid:e,nodes:Z(n,(t=>t.dom))})))}))};const a=t=>{s(t,(e=>{J(e.listeners,(e=>e(false,t)))}))};const i=(e,n)=>{J(Zd(t,e),(t=>{n?zs(t,Vd(),"true"):Vs(t,Vd())}))};const l=Te((()=>{const n=ht(e.getNames());J(n,(e=>{r(e,(n=>{const o=n.previous.get();Gd(t,Optional.some(e)).fold((()=>{o.each((t=>{a(e);n.previous.clear();i(t,false)}))}),(({uid:t,name:e,elements:s})=>{if(!se(o,t)){o.each((t=>i(t,false)));c(e,t,s);n.previous.set(t);i(t,true)}}));return{previous:n.previous,listeners:n.listeners}}))}))}),30);t.on("remove",(()=>{l.cancel()}));t.on("NodeChange",(()=>{l.throttle()}));const d=(t,e)=>{r(t,(t=>({previous:t.previous,listeners:t.listeners.concat([e])})))};return{addListener:d}};const eu=(t,e)=>{const n=Hd();const o=t=>Optional.from(t.attr(n)).bind(e.lookup);const s=t=>{t.attr(Wd(),null);t.attr(Hd(),null);t.attr(Vd(),null);const e=Optional.from(t.attr(Kd())).map((t=>t.split(","))).getOr([]);const n=Optional.from(t.attr(qd())).map((t=>t.split(","))).getOr([]);J(e,(e=>t.attr(e,null)));const o=t.attr("class")?.split(" ")??[];const s=pt(o,[jd()].concat(n));t.attr("class",s.length>0?s.join(" "):null);t.attr(qd(),null);t.attr(Kd(),null)};t.serializer.addTempAttr(Vd());t.serializer.addAttributeFilter(n,(t=>{for(const e of t)o(e).each((t=>{t.persistent===false&&(e.name==="span"?e.unwrap():s(e))}))}))};const nu=()=>{const t={};const e=(e,n)=>{t[e]={name:e,settings:n}};const n=e=>Lt(t,e).map((t=>t.settings));const o=()=>Et(t);return{register:e,lookup:n,getNames:o}};const ou=(t,e,n=H)=>{const o=new DomTreeWalker(t,e);const s=t=>{let e;do{e=o[t]()}while(e&&!Na(e)&&!n(e));return Optional.from(e).filter(Na)};return{current:()=>Optional.from(o.current()).filter(Na),next:()=>s("next"),prev:()=>s("prev"),prev2:()=>s("prev2")}};
/**
   * Constructs a new TextSeeker instance.
   *
   * @constructor
   * @param {tinymce.dom.DOMUtils} dom DOMUtils object reference.
   * @param {Function} isBoundary Optional function to determine if the seeker should continue to walk past the node provided. The default is to search until a block or <code>br</code> element is found.
   */const su=(t,e)=>{const n=e||(e=>t.isBlock(e)||La(e)||Fa(e));const o=(t,e,n,s)=>{if(Na(t)){const n=s(t,e,t.data);if(n!==-1)return Optional.some({container:t,offset:n})}return n().bind((t=>o(t.container,t.offset,n,s)))};
/**
     * Search backwards through text nodes until a match, boundary, or root node has been found.
     *
     * @method backwards
     * @param {Node} node The node to start searching from.
     * @param {Number} offset The offset of the node to start searching from.
     * @param {Function} process A function that's passed the current text node, the current offset and the text content of the node. It should return the offset of the match or -1 to continue searching.
     * @param {Node} root An optional root node to constrain the search to.
     * @return {Object} An object containing the matched text node and offset. If no match is found, null will be returned.
     */const s=(e,s,r,c)=>{const a=ou(e,c??t.getRoot(),n);return o(e,s,(()=>a.prev().map((t=>({container:t,offset:t.length})))),r).getOrNull()};
/**
     * Search forwards through text nodes until a match, boundary, or root node has been found.
     *
     * @method forwards
     * @param {Node} node The node to start searching from.
     * @param {Number} offset The offset of the node to start searching from.
     * @param {Function} process A function that's passed the current text node, the current offset and the text content of the node. It should return the offset of the match or -1 to continue searching.
     * @param {Node} root An optional root node to constrain the search to.
     * @return {Object} An object containing the matched text node and offset. If no match is found, null will be returned.
     */const r=(e,s,r,c)=>{const a=ou(e,c??t.getRoot(),n);return o(e,s,(()=>a.next().map((t=>({container:t,offset:0})))),r).getOrNull()};return{backwards:s,forwards:r}};const ru=["td","th"];const cu=["thead","tbody","tfoot"];const au=["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"];const iu=["li","dd","dt"];const lu=["ul","ol","dl"];const du=["pre","script","textarea","style"];const uu=t=>{let e;return n=>{e=e||gt(t,W);return Pt(e,Mo(n))}};const mu=t=>Mo(t)==="table";const fu=t=>$o(t)&&Mo(t)==="br";const pu=uu(au);const gu=uu(lu);const hu=uu(iu);const bu=uu(cu);const yu=uu(ru);const vu=uu(du);const Cu=t=>{const e=[];let n=t.dom;while(n){e.push(fo.fromDom(n));n=n.lastChild}return e};const wu=t=>{const e=gc(t,"br");const n=nt(Cu(t).slice(-1),fu);e.length===n.length&&J(n,Gs)};const Ou=()=>{const t=fo.fromTag("br");zs(t,"data-mce-bogus","1");return t};const Eu=t=>{Ys(t);Ls(t,Ou())};const xu=(t,e)=>{as(t).each((n=>{ts(n).each((o=>{e.isBlock(Mo(t))&&fu(n)&&e.isBlock(Mo(o))&&Gs(n)}))}))};const ku=Le;const Su=Ie;const _u=Fe;const Nu=t=>t.insertContent(ku,{preserve_zwsp:true});const Ru=ha;const Au=Na;const Du=t=>{Au(t)&&(t=t.parentNode);return Ru(t)&&t.hasAttribute("data-mce-caret")};const Tu=t=>Au(t)&&Su(t.data);const Bu=t=>Du(t)||Tu(t);const Lu=t=>t.firstChild!==t.lastChild||!La(t.firstChild);const Pu=(t,e)=>{const n=t.ownerDocument??document;const o=n.createTextNode(ku);const s=t.parentNode;if(e){const e=t.previousSibling;if(Au(e)){if(Bu(e))return e;if(zu(e))return e.splitText(e.data.length-1)}s?.insertBefore(o,t)}else{const e=t.nextSibling;if(Au(e)){if(Bu(e))return e;if(Uu(e)){e.splitText(1);return e}}t.nextSibling?s?.insertBefore(o,t.nextSibling):s?.appendChild(o)}return o};const Mu=t=>{const e=t.container();return!!Na(e)&&(e.data.charAt(t.offset())===ku||t.isAtStart()&&Tu(e.previousSibling))};const Iu=t=>{const e=t.container();return!!Na(e)&&(e.data.charAt(t.offset()-1)===ku||t.isAtEnd()&&Tu(e.nextSibling))};const Fu=(t,e,n)=>{const o=e.ownerDocument??document;const s=o.createElement(t);s.setAttribute("data-mce-caret",n?"before":"after");s.setAttribute("data-mce-bogus","all");s.appendChild(Ou().dom);const r=e.parentNode;n?r?.insertBefore(s,e):e.nextSibling?r?.insertBefore(s,e.nextSibling):r?.appendChild(s);return s};const Uu=t=>Au(t)&&t.data[0]===ku;const zu=t=>Au(t)&&t.data[t.data.length-1]===ku;const $u=t=>{const e=t.getElementsByTagName("br");const n=e[e.length-1];Ea(n)&&n.parentNode?.removeChild(n)};const ju=t=>{if(t&&t.hasAttribute("data-mce-caret")){$u(t);t.removeAttribute("data-mce-caret");t.removeAttribute("data-mce-bogus");t.removeAttribute("style");t.removeAttribute("data-mce-style");t.removeAttribute("_moz_abspos");return t}return null};const Hu=t=>Du(t.startContainer);const Wu=Math.round;const Vu=t=>t?{left:Wu(t.left),top:Wu(t.top),bottom:Wu(t.bottom),right:Wu(t.right),width:Wu(t.width),height:Wu(t.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0};const qu=(t,e)=>{t=Vu(t);if(e)t.right=t.left;else{t.left=t.left+t.width;t.right=t.left}t.width=0;return t};const Ku=(t,e)=>t.left===e.left&&t.top===e.top&&t.bottom===e.bottom&&t.right===e.right;const Yu=(t,e,n)=>t>=0&&t<=Math.min(e.height,n.height)/2;const Gu=(t,e)=>{const n=Math.min(e.height/2,t.height/2);return t.bottom-n<e.top||!(t.top>e.bottom)&&Yu(e.top-t.bottom,t,e)};const Xu=(t,e)=>t.top>e.bottom||!(t.bottom<e.top)&&Yu(e.bottom-t.top,t,e);const Qu=(t,e,n)=>e>=t.left&&e<=t.right&&n>=t.top&&n<=t.bottom;const Zu=t=>rt(t,((t,e)=>t.fold((()=>Optional.some(e)),(t=>{const n=Math.min(e.left,t.left);const o=Math.min(e.top,t.top);const s=Math.max(e.right,t.right);const r=Math.max(e.bottom,t.bottom);return Optional.some({top:o,right:s,bottom:r,left:n,width:s-n,height:r-o})}))),Optional.none());const Ju=(t,e,n)=>{const o=Math.max(Math.min(e,t.left+t.width),t.left);const s=Math.max(Math.min(n,t.top+t.height),t.top);return Math.sqrt((e-o)*(e-o)+(n-s)*(n-s))};const tm=(t,e)=>Math.max(0,Math.min(t.bottom,e.bottom)-Math.max(t.top,e.top));const em=t=>{const e=t.startContainer,n=t.startOffset;return e===t.endContainer&&e.hasChildNodes()&&t.endOffset===n+1?e.childNodes[n]:null};const nm=(t,e)=>{if(ha(t)&&t.hasChildNodes()){const n=t.childNodes;const o=Yt(e,0,n.length-1);return n[o]}return t};
/** @deprecated Use getNode instead */const om=(t,e)=>e<0&&ha(t)&&t.hasChildNodes()?void 0:nm(t,e);const sm=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]");const rm=t=>C(t)&&t.charCodeAt(0)>=768&&sm.test(t);const cm=(...t)=>e=>{for(let n=0;n<t.length;n++)if(t[n](e))return true;return false};const am=(...t)=>e=>{for(let n=0;n<t.length;n++)if(!t[n](e))return false;return true};const im=Ia;const lm=Fa;const dm=La;const um=Na;const mm=Ca(["script","style","textarea"]);const fm=Ca(["img","input","textarea","hr","iframe","video","audio","object","embed"]);const pm=Ca(["table"]);const gm=Bu;const hm=t=>!gm(t)&&(um(t)?!mm(t.parentNode):fm(t)||dm(t)||pm(t)||ym(t));const bm=t=>ha(t)&&t.getAttribute("unselectable")==="true";const ym=t=>!bm(t)&&lm(t);const vm=(t,e)=>{for(let n=t.parentNode;n&&n!==e;n=n.parentNode){if(ym(n))return false;if(im(n))return true}return true};const Cm=t=>!!ym(t)&&!rt(Ct(t.getElementsByTagName("*")),((t,e)=>t||im(e)),false);const wm=t=>fm(t)||Cm(t);const Om=(t,e)=>hm(t)&&vm(t,e);const Em=ha;const xm=hm;const km=wa("display","block table");const Sm=wa("float","left right");const _m=am(Em,xm,U(Sm));const Nm=U(wa("white-space","pre pre-line pre-wrap"));const Rm=Na;const Am=La;const Dm=wd.nodeIndex;const Tm=om;const Bm=t=>t?t.createRange():wd.DOM.createRng();const Lm=t=>C(t)&&/[\r\n\t ]/.test(t);const Pm=t=>!!t.setStart&&!!t.setEnd;const Mm=t=>{const e=t.startContainer;const n=t.startOffset;if(Lm(t.toString())&&Nm(e.parentNode)&&Na(e)){const t=e.data;if(Lm(t[n-1])||Lm(t[n+1]))return true}return false};const Im=t=>{const e=t.ownerDocument;const n=Bm(e);const o=e.createTextNode(Pe);const s=t.parentNode;s.insertBefore(o,t);n.setStart(o,0);n.setEnd(o,1);const r=Vu(n.getBoundingClientRect());s.removeChild(o);return r};const Fm=t=>{const e=t.startContainer;const n=t.endContainer;const o=t.startOffset;const s=t.endOffset;if(e===n&&Na(n)&&o===0&&s===1){const e=t.cloneRange();e.setEndAfter(n);return zm(e)}return null};const Um=t=>t.left===0&&t.right===0&&t.top===0&&t.bottom===0;const zm=t=>{let e;const n=t.getClientRects();e=n.length>0?Vu(n[0]):Vu(t.getBoundingClientRect());return!Pm(t)&&Am(t)&&Um(e)?Im(t):Um(e)&&Pm(t)?Fm(t)??e:e};const $m=(t,e)=>{const n=qu(t,e);n.width=1;n.right=n.left+1;return n};const jm=t=>{const e=[];const n=t=>{t.height!==0&&(e.length>0&&Ku(t,e[e.length-1])||e.push(t))};const o=(t,e)=>{const o=Bm(t.ownerDocument);if(e<t.data.length){if(rm(t.data[e]))return;if(rm(t.data[e-1])){o.setStart(t,e);o.setEnd(t,e+1);if(!Mm(o)){n($m(zm(o),false));return}}}if(e>0){o.setStart(t,e-1);o.setEnd(t,e);Mm(o)||n($m(zm(o),false))}if(e<t.data.length){o.setStart(t,e);o.setEnd(t,e+1);Mm(o)||n($m(zm(o),true))}};const s=t.container();const r=t.offset();if(Rm(s)){o(s,r);return e}if(Em(s))if(t.isAtEnd()){const t=Tm(s,r);Rm(t)&&o(t,t.data.length);_m(t)&&!Am(t)&&n($m(zm(t),false))}else{const c=Tm(s,r);Rm(c)&&o(c,0);if(_m(c)&&t.isAtEnd()){n($m(zm(c),false));return e}const a=Tm(t.container(),t.offset()-1);_m(a)&&!Am(a)&&(km(a)||km(c)||!_m(c))&&n($m(zm(a),false));_m(c)&&n($m(zm(c),true))}return e};
/**
   * Represents a location within the document by a container and an offset.
   *
   * @constructor
   * @param {Node} container Container node.
   * @param {Number} offset Offset within that container node.
   * @param {Array} clientRects Optional client rects array for the position.
   */const Hm=(t,e,n)=>{const o=()=>(Rm(t),e===0);const s=()=>Rm(t)?e>=t.data.length:e>=t.childNodes.length;const r=()=>{const n=Bm(t.ownerDocument);n.setStart(t,e);n.setEnd(t,e);return n};const c=()=>{n||(n=jm(Hm(t,e)));return n};const a=()=>c().length>0;const i=n=>n&&t===n.container()&&e===n.offset();const l=n=>Tm(t,n?e-1:e);return{container:P(t),offset:P(e),toRange:r,getClientRects:c,isVisible:a,isAtStart:o,isAtEnd:s,
/**
       * Compares the caret position to another caret position. This will only compare the
       * container and offset not it's visual position.
       *
       * @method isEqual
       * @param {tinymce.caret.CaretPosition} caretPosition Caret position to compare with.
       * @return {Boolean} true if the caret positions are equal.
       */
isEqual:i,getNode:l}};
/**
   * Creates a caret position from the start of a range.
   *
   * @method fromRangeStart
   * @param {DOMRange} range DOM Range to create caret position from.
   * @return {tinymce.caret.CaretPosition} Caret position from the start of DOM range.
   */Hm.fromRangeStart=t=>Hm(t.startContainer,t.startOffset)
/**
   * Creates a caret position from the end of a range.
   *
   * @method fromRangeEnd
   * @param {DOMRange} range DOM Range to create caret position from.
   * @return {tinymce.caret.CaretPosition} Caret position from the end of DOM range.
   */;Hm.fromRangeEnd=t=>Hm(t.endContainer,t.endOffset)
/**
   * Creates a caret position from a node and places the offset after it.
   *
   * @method after
   * @param {Node} node Node to get caret position from.
   * @return {tinymce.caret.CaretPosition} Caret position from the node.
   */;Hm.after=t=>Hm(t.parentNode,Dm(t)+1)
/**
   * Creates a caret position from a node and places the offset before it.
   *
   * @method before
   * @param {Node} node Node to get caret position from.
   * @return {tinymce.caret.CaretPosition} Caret position from the node.
   */;Hm.before=t=>Hm(t.parentNode,Dm(t));Hm.isAbove=(t,e)=>ae(yt(e.getClientRects()),vt(t.getClientRects()),Gu).getOr(false);Hm.isBelow=(t,e)=>ae(vt(e.getClientRects()),yt(t.getClientRects()),Xu).getOr(false);Hm.isAtStart=t=>!!t&&t.isAtStart();Hm.isAtEnd=t=>!!t&&t.isAtEnd();Hm.isTextPosition=t=>!!t&&Na(t.container());Hm.isElementPosition=t=>!Hm.isTextPosition(t);const Wm=(t,e)=>{Na(e)&&e.data.length===0&&t.remove(e)};const Vm=(t,e,n)=>{e.insertNode(n);Wm(t,n.previousSibling);Wm(t,n.nextSibling)};const qm=(t,e,n)=>{const o=Optional.from(n.firstChild);const s=Optional.from(n.lastChild);e.insertNode(n);o.each((e=>Wm(t,e.previousSibling)));s.each((e=>Wm(t,e.nextSibling)))};const Km=(t,e,n)=>{Ba(n)?qm(t,e,n):Vm(t,e,n)};const Ym=Na;const Gm=Ea;const Xm=wd.nodeIndex;const Qm=t=>{const e=t.parentNode;return Gm(e)?Qm(e):e};const Zm=t=>t?Ke(t.childNodes,((t,e)=>{Gm(e)&&e.nodeName!=="BR"?t=t.concat(Zm(e)):t.push(e);return t}),[]):[];const Jm=(t,e)=>{let n=t;while(n=n.previousSibling){if(!Ym(n))break;e+=n.data.length}return e};const tf=t=>e=>t===e;const ef=t=>{let e,n;e=Zm(Qm(t));n=Ye(e,tf(t),t);e=e.slice(0,n+1);const o=Ke(e,((t,n,o)=>{Ym(n)&&Ym(e[o-1])&&t++;return t}),0);e=Ve(e,Ca([t.nodeName]));n=Ye(e,tf(t),t);return n-o};const nf=t=>{const e=Ym(t)?"text()":t.nodeName.toLowerCase();return e+"["+ef(t)+"]"};const of=(t,e,n)=>{const o=[];for(let s=e.parentNode;s&&s!==t;s=s.parentNode){if(n&&n(s))break;o.push(s)}return o};const sf=(t,e)=>{let n=[];let o=e.container();let s=e.offset();let r;if(Ym(o))r=Jm(o,s);else{const t=o.childNodes;if(s>=t.length){r="after";s=t.length-1}else r="before";o=t[s]}n.push(nf(o));let c=of(t,o);c=Ve(c,U(Ea));n=n.concat(We(c,(t=>nf(t))));return n.reverse().join("/")+","+r};const rf=(t,e,n)=>{let o=Zm(t);o=Ve(o,((t,e)=>!Ym(t)||!Ym(o[e-1])));o=Ve(o,Ca([e]));return o[n]};const cf=(t,e)=>{let n=t;let o=0;while(Ym(n)){const s=n.data.length;if(e>=o&&e<=o+s){t=n;e-=o;break}if(!Ym(n.nextSibling)){t=n;e=s;break}o+=s;n=n.nextSibling}Ym(t)&&e>t.data.length&&(e=t.data.length);return Hm(t,e)};const af=(t,e)=>{if(!e)return null;const n=e.split(",");const o=n[0].split("/");const s=n.length>1?n[1]:"before";const r=Ke(o,((t,e)=>{const n=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(e);if(!n)return null;n[1]==="text()"&&(n[1]="#text");return rf(t,n[1],parseInt(n[2],10))}),t);if(!r)return null;if(!Ym(r)&&r.parentNode){let t;t=s==="after"?Xm(r)+1:Xm(r);return Hm(r.parentNode,t)}return cf(r,parseInt(s,10))};const lf=Fa;const df=(t,e,n)=>{let o=t(e.data.slice(0,n)).length;for(let n=e.previousSibling;n&&Na(n);n=n.previousSibling)o+=t(n.data).length;return o};const uf=(t,e,n,o,s)=>{const r=s?o.startContainer:o.endContainer;let c=s?o.startOffset:o.endOffset;const a=[];const i=t.getRoot();if(Na(r))a.push(n?df(e,r,c):c);else{let e=0;const o=r.childNodes;if(c>=o.length&&o.length){e=1;c=Math.max(0,o.length-1)}a.push(t.nodeIndex(o[c],n)+e)}for(let e=r;e&&e!==i;e=e.parentNode)a.push(t.nodeIndex(e,n));return a};const mf=(t,e,n,o)=>{const s=e.dom;const r=uf(s,t,n,o,true);const c=e.isForward();const a=Hu(o)?{isFakeCaret:true}:{};if(e.isCollapsed())return{start:r,forward:c,...a};{const e=uf(s,t,n,o,false);return{start:r,end:e,forward:c,...a}}};const ff=(t,e,n)=>{let o=0;co.each(t.select(e),(t=>{if(t.getAttribute("data-mce-bogus")!=="all"){if(t===n)return false;o++}}));return o};const pf=(t,e)=>{let n=e?t.startContainer:t.endContainer;let o=e?t.startOffset:t.endOffset;if(ha(n)&&n.nodeName==="TR"){const s=n.childNodes;n=s[Math.min(e?o:o-1,s.length-1)];if(n){o=e?0:n.childNodes.length;e?t.setStart(n,o):t.setEnd(n,o)}}};const gf=t=>{pf(t,true);pf(t,false);return t};const hf=(t,e)=>{if(ha(t)){t=nm(t,e);if(lf(t))return t}if(Bu(t)){Na(t)&&Du(t)&&(t=t.parentNode);let e=t.previousSibling;if(lf(e))return e;e=t.nextSibling;if(lf(e))return e}};const bf=t=>hf(t.startContainer,t.startOffset)||hf(t.endContainer,t.endOffset);const yf=(t,e,n)=>{const o=n.getNode();const s=n.getRng();if(o.nodeName==="IMG"||lf(o)){const t=o.nodeName;return{name:t,index:ff(n.dom,t,o)}}const r=bf(s);if(r){const t=r.tagName;return{name:t,index:ff(n.dom,t,r)}}return mf(t,n,e,s)};const vf=t=>{const e=t.getRng();return{start:sf(t.dom.getRoot(),Hm.fromRangeStart(e)),end:sf(t.dom.getRoot(),Hm.fromRangeEnd(e)),forward:t.isForward()}};const Cf=t=>({rng:t.getRng(),forward:t.isForward()});const wf=(t,e,n)=>{const o={"data-mce-type":"bookmark",id:e,style:"overflow:hidden;line-height:0px"};return n?t.create("span",o,"&#xFEFF;"):t.create("span",o)};const Of=(t,e)=>{const n=t.dom;let o=t.getRng();const s=n.uniqueId();const r=t.isCollapsed();const c=t.getNode();const a=c.nodeName;const i=t.isForward();if(a==="IMG")return{name:a,index:ff(n,a,c)};const l=gf(o.cloneRange());if(!r){l.collapse(false);const t=wf(n,s+"_end",e);Km(n,l,t)}o=gf(o);o.collapse(true);const d=wf(n,s+"_start",e);Km(n,o,d);t.moveToBookmark({id:s,keep:true,forward:i});return{id:s,forward:i}};const Ef=(t,e,n=false)=>e===2?yf(_u,n,t):e===3?vf(t):e?Cf(t):Of(t,false);const xf=F(yf,M,true);const kf=t=>t===1;const Sf=t=>t===-1;var _f;(function(t){t[t.Error=0]="Error";t[t.Value=1]="Value"})(_f||(_f={}));const Nf=(t,e,n)=>t.stype===_f.Error?e(t.serror):n(t.svalue);const Rf=t=>{const e=[];const n=[];J(t,(t=>{Nf(t,(t=>n.push(t)),(t=>e.push(t)))}));return{values:e,errors:n}};const Af=(t,e)=>t.stype===_f.Error?{stype:_f.Error,serror:e(t.serror)}:t;const Df=(t,e)=>t.stype===_f.Value?{stype:_f.Value,svalue:e(t.svalue)}:t;const Tf=(t,e)=>t.stype===_f.Value?e(t.svalue):t;const Bf=(t,e)=>t.stype===_f.Error?e(t.serror):t;const Lf=t=>({stype:_f.Value,svalue:t});const Pf=t=>({stype:_f.Error,serror:t});const Mf=t=>Nf(t,Wt.error,Wt.value);const If=t=>t.fold(Pf,Lf);const Ff={fromResult:If,toResult:Mf,svalue:Lf,partition:Rf,serror:Pf,bind:Tf,bindError:Bf,map:Df,mapError:Af,fold:Nf};const Uf=t=>w(t)&&Et(t).length>100?" removed due to size":JSON.stringify(t,null,2);const zf=t=>{const e=t.length>10?t.slice(0,10).concat([{path:[],getErrorInfo:P("... (only showing first ten failures)")}]):t;return Z(e,(t=>"Failed path: ("+t.path.join(" > ")+")\n"+t.getErrorInfo()))};const $f=(t,e)=>Ff.serror([{path:t,getErrorInfo:e}]);const jf=(t,e,n)=>$f(t,(()=>'Could not find valid *required* value for "'+e+'" in '+Uf(n)));const Hf=(t,e)=>$f(t,P(e));const Wf=t=>{const e=(e,n)=>Ff.bindError(t(n),(t=>Hf(e,t)));const n=P("val");return{extract:e,toString:n}};const Vf=Wf(Ff.svalue);const qf=P(Vf);const Kf=(t,e)=>Wf((n=>{const o=typeof n;return t(n)?Ff.svalue(n):Ff.serror(`Expected type: ${e} but got: ${o}`)}));const Yf=Kf(A,"number");const Gf=Kf(C,"string");const Xf=Kf(R,"function");const Qf=()=>({tag:"required",process:{}});const Zf=t=>({tag:"defaultedThunk",process:t});const Jf=t=>Zf(P(t));const tp=()=>({tag:"option",process:{}});const ep=(t,e,n,o)=>({tag:"field",key:t,newKey:e,presence:n,prop:o});const np=(t,e,n)=>{switch(t.tag){case"field":return e(t.key,t.newKey,t.presence,t.prop);case"custom":return n(t.newKey,t.instantiator)}};const op=(t,e)=>Ff.svalue(ne(e,oe.apply(void 0,t)));const sp=t=>B(Ff.serror,dt)(t);const rp=(t,e)=>{const n=Ff.partition(t);return n.errors.length>0?sp(n.errors):op(n.values,e)};const cp=t=>{const e=Ff.partition(t);return e.errors.length>0?sp(e.errors):Ff.svalue(e.values)};const ap={consolidateObj:rp,consolidateArr:cp};const ip=(t,e,n,o)=>Lt(e,n).fold((()=>jf(t,n,e)),o);const lp=(t,e,n,o)=>{const s=Lt(t,e).getOrThunk((()=>n(t)));return o(s)};const dp=(t,e,n)=>n(Lt(t,e));const up=(t,e,n,o)=>{const s=Lt(t,e).map((e=>e===true?n(t):e));return o(s)};const mp=(t,e,n,o,s)=>{const r=t=>s.extract(e.concat([o]),t);const c=t=>t.fold((()=>Ff.svalue(Optional.none())),(t=>{const n=s.extract(e.concat([o]),t);return Ff.map(n,Optional.some)}));switch(t.tag){case"required":return ip(e,n,o,r);case"defaultedThunk":return lp(n,o,t.process,r);case"option":return dp(n,o,c);case"defaultedOptionThunk":return up(n,o,t.process,c);case"mergeWithThunk":return lp(n,o,P({}),(e=>{const o=ne(t.process(n),e);return r(o)}))}};const fp=(t,e,n)=>{const o={};const s=[];for(const r of n)np(r,((n,r,c,a)=>{const i=mp(c,t,e,n,a);Ff.fold(i,(t=>{s.push(...t)}),(t=>{o[r]=t}))}),((t,n)=>{o[t]=n(e)}));return s.length>0?Ff.serror(s):Ff.svalue(o)};const pp=t=>{const e=(e,n)=>fp(e,n,t);const n=()=>{const e=Z(t,(t=>np(t,((t,e,n,o)=>t+" -> "+o.toString()),((t,e)=>"state("+t+")"))));return"obj{\n"+e.join("\n")+"}"};return{extract:e,toString:n}};const gp=t=>{const e=(e,n)=>{const o=Z(n,((n,o)=>t.extract(e.concat(["["+o+"]"]),n)));return ap.consolidateArr(o)};const n=()=>"array("+t.toString()+")";return{extract:e,toString:n}};const hp=B(gp,pp);const bp=t=>Wf((e=>t(e).fold(Ff.serror,Ff.svalue)));const yp=(t,e,n)=>{const o=e.extract([t],n);return Ff.mapError(o,(t=>({input:n,errors:t})))};const vp=(t,e,n)=>Ff.toResult(yp(t,e,n));const Cp=t=>"Errors: \n"+zf(t.errors).join("\n")+"\n\nInput object: "+Uf(t.input);const wp=ep;const Op=t=>wp(t,t,Qf(),qf());const Ep=(t,e)=>wp(t,t,Qf(),e);const xp=t=>Ep(t,Gf);const kp=t=>Ep(t,Xf);const Sp=(t,e)=>wp(t,t,Qf(),gp(e));const _p=t=>wp(t,t,tp(),qf());const Np=(t,e)=>wp(t,t,tp(),e);const Rp=t=>Np(t,Gf);const Ap=t=>Np(t,Xf);const Dp=(t,e)=>wp(t,t,Jf(e),qf());const Tp=(t,e,n)=>wp(t,t,Jf(e),n);const Bp=(t,e)=>Tp(t,e,Yf);const Lp=(t,e,n)=>Tp(t,e,gp(n));const Pp=t=>t.type==="inline-command"||t.type==="inline-format";const Mp=t=>t.type==="block-command"||t.type==="block-format";const Ip=(t,e)=>(t.type==="block-command"||t.type==="block-format")&&t.trigger===e;const Fp=t=>{const e=e=>Wt.error({message:e,pattern:t});const n=(n,o,s)=>{if(t.format!==void 0){let s;if(E(t.format)){if(!mt(t.format,C))return e(n+" pattern has non-string items in the `format` array");s=t.format}else{if(!C(t.format))return e(n+" pattern has non-string `format` parameter");s=[t.format]}return Wt.value(o(s))}return t.cmd!==void 0?C(t.cmd)?Wt.value(s(t.cmd,t.value)):e(n+" pattern has non-string `cmd` parameter"):e(n+" pattern is missing both `format` and `cmd` parameters")};if(!w(t))return e("Raw pattern is not an object");if(!C(t.start))return e("Raw pattern is missing `start` parameter");if(t.end!==void 0){if(!C(t.end))return e("Inline pattern has non-string `end` parameter");if(t.start.length===0&&t.end.length===0)return e("Inline pattern has empty `start` and `end` parameters");let o=t.start;let s=t.end;if(s.length===0){s=o;o=""}return n("Inline",(t=>({type:"inline-format",start:o,end:s,format:t})),((t,e)=>({type:"inline-command",start:o,end:s,cmd:t,value:e})))}if(t.replacement!==void 0)return C(t.replacement)?t.start.length===0?e("Replacement pattern has empty `start` parameter"):Wt.value({type:"inline-command",start:"",end:t.start,cmd:"mceInsertContent",value:t.replacement}):e("Replacement pattern has non-string `replacement` parameter");{const o=t.trigger??"space";return t.start.length===0?e("Block pattern has empty `start` parameter"):n("Block",(e=>({type:"block-format",start:t.start,format:e[0],trigger:o})),((e,n)=>({type:"block-command",start:t.start,cmd:e,value:n,trigger:o})))}};const Up=t=>nt(t,Mp);const zp=t=>nt(t,Pp);const $p=(t,e)=>({inlinePatterns:zp(t),blockPatterns:Up(t),dynamicPatternsLookup:e});const jp=(t,e)=>({...t,blockPatterns:nt(t.blockPatterns,(t=>Ip(t,e)))});const Hp=t=>{const e=fe(Z(t,Fp));J(e.errors,(t=>console.error(t.message,t.pattern)));return e.values};const Wp=t=>e=>{const n=t(e);return Hp(n)};const Vp=(t,e)=>t.dispatch("PreProcess",e);const qp=(t,e)=>t.dispatch("PostProcess",e);const Kp=t=>{t.dispatch("remove")};const Yp=t=>{t.dispatch("detach")};const Gp=(t,e)=>{t.dispatch("SwitchMode",{mode:e})};const Xp=(t,e,n,o,s)=>{t.dispatch("ObjectResizeStart",{target:e,width:n,height:o,origin:s})};const Qp=(t,e,n,o,s)=>{t.dispatch("ObjectResized",{target:e,width:n,height:o,origin:s})};const Zp=t=>{t.dispatch("PreInit")};const Jp=t=>{t.dispatch("PostRender")};const tg=t=>{t.dispatch("Init")};const eg=(t,e)=>{t.dispatch("PlaceholderToggle",{state:e})};const ng=(t,e,n)=>{t.dispatch(e,n)};const og=(t,e,n,o)=>{t.dispatch("FormatApply",{format:e,node:n,vars:o})};const sg=(t,e,n,o)=>{t.dispatch("FormatRemove",{format:e,node:n,vars:o})};const rg=(t,e)=>t.dispatch("BeforeSetContent",e);const cg=(t,e)=>t.dispatch("SetContent",e);const ag=(t,e)=>t.dispatch("BeforeGetContent",e);const ig=(t,e)=>t.dispatch("GetContent",e);const lg=(t,e)=>{t.dispatch("AutocompleterStart",e)};const dg=(t,e)=>{t.dispatch("AutocompleterUpdate",e)};const ug=(t,e)=>{t.dispatch("AutocompleterUpdateActiveRange",e)};const mg=t=>{t.dispatch("AutocompleterEnd")};const fg=(t,e,n)=>t.dispatch("PastePreProcess",{content:e,internal:n});const pg=(t,e,n)=>t.dispatch("PastePostProcess",{node:e,internal:n});const gg=(t,e)=>t.dispatch("PastePlainTextToggle",{state:e});const hg=(t,e)=>t.dispatch("EditableRootStateChange",{state:e});const bg=(t,e)=>t.dispatch("DisabledStateChange",{state:e});const yg=t=>t.dispatch("CloseActiveTooltips");const vg=In().deviceType;const Cg=vg.isTouch();const wg=wd.DOM;const Og=t=>{const e=t.indexOf("=")>0?t.split(/[;,](?![^=;,]*(?:[;,]|$))/):t.split(",");return rt(e,((t,e)=>{const n=e.split("=");const o=n[0];const s=n.length>1?n[1]:o;t[xe(o)]=xe(s);return t}),{})};const Eg=t=>v(t,RegExp);const xg=t=>e=>e.options.get(t);const kg=t=>C(t)||w(t);const Sg=(t,e="")=>n=>{const o=C(n);if(o){if(n.indexOf("=")!==-1){const s=Og(n);return{value:Lt(s,t.id).getOr(e),valid:o}}return{value:n,valid:o}}return{valid:false,message:"Must be a string."}};const _g=t=>{const e=t.options.register;e("id",{processor:"string",default:t.id});e("selector",{processor:"string"});e("target",{processor:"object"});e("suffix",{processor:"string"});e("cache_suffix",{processor:"string"});e("base_url",{processor:"string"});e("referrer_policy",{processor:"string",default:""});e("crossorigin",{processor:"function",default:P(void 0)});e("language_load",{processor:"boolean",default:true});e("inline",{processor:"boolean",default:false});e("iframe_attrs",{processor:"object",default:{}});e("doctype",{processor:"string",default:"<!DOCTYPE html>"});e("document_base_url",{processor:"string",default:t.editorManager.documentBaseURL});e("body_id",{processor:Sg(t,"tinymce"),default:"tinymce"});e("body_class",{processor:Sg(t),default:""});e("content_security_policy",{processor:"string",default:""});e("br_in_pre",{processor:"boolean",default:true});e("forced_root_block",{processor:t=>{const e=C(t)&&_e(t);return e?{value:t,valid:e}:{valid:false,message:"Must be a non-empty string."}},default:"p"});e("forced_root_block_attrs",{processor:"object",default:{}});e("newline_behavior",{processor:t=>{const e=X(["block","linebreak","invert","default"],t);return e?{value:t,valid:e}:{valid:false,message:"Must be one of: block, linebreak, invert or default."}},default:"default"});e("br_newline_selector",{processor:"string",default:".mce-toc h2,figcaption,caption"});e("no_newline_selector",{processor:"string",default:""});e("keep_styles",{processor:"boolean",default:true});e("end_container_on_empty_block",{processor:t=>k(t)||C(t)?{valid:true,value:t}:{valid:false,message:"Must be boolean or a string"},default:"blockquote"});e("font_size_style_values",{processor:"string",default:"xx-small,x-small,small,medium,large,x-large,xx-large"});e("font_size_legacy_values",{processor:"string",default:"xx-small,small,medium,large,x-large,xx-large,300%"});e("font_size_classes",{processor:"string",default:""});e("automatic_uploads",{processor:"boolean",default:true});e("images_reuse_filename",{processor:"boolean",default:false});e("images_replace_blob_uris",{processor:"boolean",default:true});e("icons",{processor:"string",default:""});e("icons_url",{processor:"string",default:""});e("images_upload_url",{processor:"string",default:""});e("images_upload_base_path",{processor:"string",default:""});e("images_upload_credentials",{processor:"boolean",default:false});e("images_upload_handler",{processor:"function"});e("language",{processor:"string",default:"en"});e("language_url",{processor:"string",default:""});e("entity_encoding",{processor:"string",default:"named"});e("indent",{processor:"boolean",default:true});e("indent_before",{processor:"string",default:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"});e("indent_after",{processor:"string",default:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,details,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist"});e("indent_use_margin",{processor:"boolean",default:false});e("indentation",{processor:"string",default:"40px"});e("content_css",{processor:t=>{const e=t===false||C(t)||D(t,C);return e?C(t)?{value:Z(t.split(","),xe),valid:e}:E(t)?{value:t,valid:e}:t===false?{value:[],valid:e}:{value:t,valid:e}:{valid:false,message:"Must be false, a string or an array of strings."}},default:xh(t)?[]:["default"]});e("content_style",{processor:"string"});e("content_css_cors",{processor:"boolean",default:false});e("font_css",{processor:t=>{const e=C(t)||D(t,C);if(e){const n=E(t)?t:Z(t.split(","),xe);return{value:n,valid:e}}return{valid:false,message:"Must be a string or an array of strings."}},default:[]});e("extended_mathml_attributes",{processor:"string[]"});e("extended_mathml_elements",{processor:"string[]"});e("inline_boundaries",{processor:"boolean",default:true});e("inline_boundaries_selector",{processor:"string",default:"a[href],code,span.mce-annotation"});e("object_resizing",{processor:t=>{const e=k(t)||C(t);return e?t===false||vg.isiPhone()||vg.isiPad()?{value:"",valid:e}:{value:t===true?"table,img,figure.image,div,video,iframe":t,valid:e}:{valid:false,message:"Must be boolean or a string"}},default:!Cg});e("resize_img_proportional",{processor:"boolean",default:true});e("event_root",{processor:"string"});e("service_message",{processor:"string"});e("onboarding",{processor:"boolean",default:true});e("tiny_cloud_entry_url",{processor:"string"});e("theme",{processor:t=>t===false||C(t)||R(t),default:"silver"});e("theme_url",{processor:"string"});e("formats",{processor:"object"});e("format_empty_lines",{processor:"boolean",default:false});e("format_noneditable_selector",{processor:"string",default:""});e("preview_styles",{processor:t=>{const e=t===false||C(t);return e?{value:t===false?"":t,valid:e}:{valid:false,message:"Must be false or a string"}},default:"font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"});e("custom_ui_selector",{processor:"string",default:""});e("hidden_input",{processor:"boolean",default:true});e("submit_patch",{processor:"boolean",default:true});e("encoding",{processor:"string"});e("add_form_submit_trigger",{processor:"boolean",default:true});e("add_unload_trigger",{processor:"boolean",default:true});e("custom_undo_redo_levels",{processor:"number",default:0});e("disable_nodechange",{processor:"boolean",default:false});e("disabled",{processor:e=>{if(k(e)){t.initialized&&_b(t)!==e&&Promise.resolve().then((()=>{bg(t,e)}));return{valid:true,value:e}}return{valid:false,message:"The value must be a boolean."}},default:false});e("readonly",{processor:"boolean",default:false});e("editable_root",{processor:"boolean",default:true});e("plugins",{processor:"string[]",default:[]});e("external_plugins",{processor:"object"});e("forced_plugins",{processor:"string[]"});e("model",{processor:"string",default:t.hasPlugin("rtc")?"plugin":"dom"});e("model_url",{processor:"string"});e("block_unsupported_drop",{processor:"boolean",default:true});e("visual",{processor:"boolean",default:true});e("visual_table_class",{processor:"string",default:"mce-item-table"});e("visual_anchor_class",{processor:"string",default:"mce-item-anchor"});e("iframe_aria_text",{processor:"string",default:"Rich Text Area".concat(t.hasPlugin("help")?". Press ALT-0 for help.":"")});e("setup",{processor:"function"});e("init_instance_callback",{processor:"function"});e("url_converter",{processor:"function",default:t.convertURL});e("url_converter_scope",{processor:"object",default:t});e("urlconverter_callback",{processor:"function"});e("allow_conditional_comments",{processor:"boolean",default:false});e("allow_html_data_urls",{processor:"boolean",default:false});e("allow_svg_data_urls",{processor:"boolean"});e("allow_html_in_named_anchor",{processor:"boolean",default:false});e("allow_html_in_comments",{processor:"boolean",default:false});e("allow_script_urls",{processor:"boolean",default:false});e("allow_unsafe_link_target",{processor:"boolean",default:false});e("allow_mathml_annotation_encodings",{processor:t=>{const e=D(t,C);return e?{value:t,valid:e}:{valid:false,message:"Must be an array of strings."}},default:[]});e("convert_fonts_to_spans",{processor:"boolean",default:true,deprecated:true});e("fix_list_elements",{processor:"boolean",default:false});e("preserve_cdata",{processor:"boolean",default:false});e("remove_trailing_brs",{processor:"boolean",default:true});e("pad_empty_with_br",{processor:"boolean",default:false});e("inline_styles",{processor:"boolean",default:true,deprecated:true});e("element_format",{processor:"string",default:"html"});e("entities",{processor:"string"});e("schema",{processor:"string",default:"html5"});e("convert_urls",{processor:"boolean",default:true});e("relative_urls",{processor:"boolean",default:true});e("remove_script_host",{processor:"boolean",default:true});e("custom_elements",{processor:kg});e("extended_valid_elements",{processor:"string"});e("invalid_elements",{processor:"string"});e("invalid_styles",{processor:kg});e("valid_children",{processor:"string"});e("valid_classes",{processor:kg});e("valid_elements",{processor:"string"});e("valid_styles",{processor:kg});e("verify_html",{processor:"boolean",default:true});e("auto_focus",{processor:t=>C(t)||t===true});e("browser_spellcheck",{processor:"boolean",default:false});e("protect",{processor:"array"});e("images_file_types",{processor:"string",default:"jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp"});e("deprecation_warnings",{processor:"boolean",default:true});e("a11y_advanced_options",{processor:"boolean",default:false});e("api_key",{processor:"string"});e("license_key",{processor:"string"});e("paste_block_drop",{processor:"boolean",default:false});e("paste_data_images",{processor:"boolean",default:true});e("paste_preprocess",{processor:"function"});e("paste_postprocess",{processor:"function"});e("paste_webkit_styles",{processor:"string",default:"none"});e("paste_remove_styles_if_webkit",{processor:"boolean",default:true});e("paste_merge_formats",{processor:"boolean",default:true});e("smart_paste",{processor:"boolean",default:true});e("paste_as_text",{processor:"boolean",default:false});e("paste_tab_spaces",{processor:"number",default:4});e("text_patterns",{processor:t=>{if(D(t,w)||t===false){const e=t===false?[]:t;return{value:Hp(e),valid:true}}return{valid:false,message:"Must be an array of objects or false."}},default:[{start:"*",end:"*",format:"italic"},{start:"**",end:"**",format:"bold"},{start:"#",format:"h1",trigger:"space"},{start:"##",format:"h2",trigger:"space"},{start:"###",format:"h3",trigger:"space"},{start:"####",format:"h4",trigger:"space"},{start:"#####",format:"h5",trigger:"space"},{start:"######",format:"h6",trigger:"space"},{start:"1.",cmd:"InsertOrderedList",trigger:"space"},{start:"*",cmd:"InsertUnorderedList",trigger:"space"},{start:"-",cmd:"InsertUnorderedList",trigger:"space"},{start:">",cmd:"mceBlockQuote",trigger:"space"},{start:"---",cmd:"InsertHorizontalRule",trigger:"space"}]});e("text_patterns_lookup",{processor:t=>R(t)?{value:Wp(t),valid:true}:{valid:false,message:"Must be a single function"},default:t=>[]});e("noneditable_class",{processor:"string",default:"mceNonEditable"});e("editable_class",{processor:"string",default:"mceEditable"});e("noneditable_regexp",{processor:t=>D(t,Eg)?{value:t,valid:true}:Eg(t)?{value:[t],valid:true}:{valid:false,message:"Must be a RegExp or an array of RegExp."},default:[]});e("table_tab_navigation",{processor:"boolean",default:true});e("highlight_on_focus",{processor:"boolean",default:true});e("xss_sanitization",{processor:"boolean",default:true});e("details_initial_state",{processor:t=>{const e=X(["inherited","collapsed","expanded"],t);return e?{value:t,valid:e}:{valid:false,message:"Must be one of: inherited, collapsed, or expanded."}},default:"inherited"});e("details_serialized_state",{processor:t=>{const e=X(["inherited","collapsed","expanded"],t);return e?{value:t,valid:e}:{valid:false,message:"Must be one of: inherited, collapsed, or expanded."}},default:"inherited"});e("init_content_sync",{processor:"boolean",default:false});e("newdocument_content",{processor:"string",default:""});e("sandbox_iframes",{processor:"boolean",default:true});e("sandbox_iframes_exclusions",{processor:"string[]",default:["youtube.com","youtu.be","vimeo.com","player.vimeo.com","dailymotion.com","embed.music.apple.com","open.spotify.com","giphy.com","dai.ly","codepen.io"]});e("convert_unsafe_embeds",{processor:"boolean",default:true});e("user_id",{processor:"string",default:"Anonymous"});e("fetch_users",{processor:t=>t===void 0?{valid:true,value:void 0}:R(t)?{valid:true,value:t}:{valid:false,message:"fetch_users must be a function that returns a Promise<ExpectedUser[]>"}});const n=hp([xp("mimeType"),Sp("extensions",bp((t=>C(t)?Wt.value(t):Wt.error("Extensions must be an array of strings"))))]);e("documents_file_types",{processor:t=>vp("documents_file_types",n,t).fold((t=>({valid:false,message:"Must be a non-empty array of objects matching the configuration schema: https://www.tiny.cloud/docs/tinymce/latest/uploadcare-documents/#documents-file-types"})),(t=>({valid:true,value:t})))});t.on("ScriptsLoaded",(()=>{e("directionality",{processor:"string",default:zd.isRtl()?"rtl":void 0});e("placeholder",{processor:"string",default:wg.getAttrib(t.getElement(),"placeholder")})}));e("lists_indent_on_tab",{processor:"boolean",default:true});e("list_max_depth",{processor:t=>{const e=A(t);if(e){if(t<0)throw new Error("list_max_depth cannot be set to lower than 0");return{value:t,valid:e}}return{valid:false,message:"Must be a number"}}})};const Ng=xg("iframe_attrs");const Rg=xg("doctype");const Ag=xg("document_base_url");const Dg=xg("body_id");const Tg=xg("body_class");const Bg=xg("content_security_policy");const Lg=xg("br_in_pre");const Pg=xg("forced_root_block");const Mg=xg("forced_root_block_attrs");const Ig=xg("newline_behavior");const Fg=xg("br_newline_selector");const Ug=xg("no_newline_selector");const zg=xg("keep_styles");const $g=xg("end_container_on_empty_block");const jg=xg("automatic_uploads");const Hg=xg("images_reuse_filename");const Wg=xg("images_replace_blob_uris");const Vg=xg("icons");const qg=xg("icons_url");const Kg=xg("images_upload_url");const Yg=xg("images_upload_base_path");const Gg=xg("images_upload_credentials");const Xg=xg("images_upload_handler");const Qg=xg("content_css_cors");const Zg=xg("referrer_policy");const Jg=xg("crossorigin");const th=xg("language");const eh=xg("language_url");const nh=xg("indent_use_margin");const oh=xg("indentation");const sh=xg("content_css");const rh=xg("content_style");const ch=xg("font_css");const ah=xg("directionality");const ih=xg("inline_boundaries_selector");const lh=xg("object_resizing");const dh=xg("resize_img_proportional");const uh=xg("placeholder");const mh=xg("event_root");const fh=xg("service_message");const ph=xg("theme");const gh=xg("theme_url");const hh=xg("model");const bh=xg("model_url");const yh=xg("inline_boundaries");const vh=xg("formats");const Ch=xg("preview_styles");const wh=xg("format_empty_lines");const Oh=xg("format_noneditable_selector");const Eh=xg("custom_ui_selector");const xh=xg("inline");const kh=xg("hidden_input");const Sh=xg("submit_patch");const _h=xg("add_form_submit_trigger");const Nh=xg("add_unload_trigger");const Rh=xg("custom_undo_redo_levels");const Ah=xg("disable_nodechange");const Dh=xg("readonly");const Th=xg("editable_root");const Bh=xg("content_css_cors");const Lh=xg("plugins");const Ph=xg("external_plugins");const Mh=xg("block_unsupported_drop");const Ih=xg("visual");const Fh=xg("visual_table_class");const Uh=xg("visual_anchor_class");const zh=xg("iframe_aria_text");const $h=xg("setup");const jh=xg("init_instance_callback");const Hh=xg("urlconverter_callback");const Wh=xg("auto_focus");const Vh=xg("browser_spellcheck");const qh=xg("protect");const Kh=xg("paste_block_drop");const Yh=xg("paste_data_images");const Gh=xg("paste_preprocess");const Xh=xg("paste_postprocess");const Qh=xg("newdocument_content");const Zh=xg("paste_webkit_styles");const Jh=xg("paste_remove_styles_if_webkit");const tb=xg("paste_merge_formats");const eb=xg("smart_paste");const nb=xg("paste_as_text");const ob=xg("paste_tab_spaces");const sb=xg("allow_html_data_urls");const rb=xg("text_patterns");const cb=xg("text_patterns_lookup");const ab=xg("noneditable_class");const ib=xg("editable_class");const lb=xg("noneditable_regexp");const db=xg("preserve_cdata");const ub=xg("highlight_on_focus");const mb=xg("xss_sanitization");const fb=xg("init_content_sync");const pb=t=>t.options.isSet("text_patterns_lookup");const gb=t=>co.explode(t.options.get("font_size_style_values"));const hb=t=>co.explode(t.options.get("font_size_classes"));const bb=t=>t.options.get("encoding")==="xml";const yb=t=>co.explode(t.options.get("images_file_types"));const vb=xg("table_tab_navigation");const Cb=xg("details_initial_state");const wb=xg("details_serialized_state");const Ob=xg("sandbox_iframes");const Eb=t=>t.options.get("sandbox_iframes_exclusions");const xb=xg("convert_unsafe_embeds");const kb=xg("license_key");const Sb=xg("api_key");const _b=xg("disabled");const Nb=xg("user_id");const Rb=xg("fetch_users");const Ab=xg("lists_indent_on_tab");const Db=t=>Optional.from(t.options.get("list_max_depth"));const Tb=ha;const Bb=Na;const Lb=t=>{const e=t.parentNode;e&&e.removeChild(t)};const Pb=t=>{const e=_u(t);return{count:t.length-e.length,text:e}};const Mb=t=>{let e;while((e=t.data.lastIndexOf(ku))!==-1)t.deleteData(e,1)};const Ib=(t,e)=>{Hb(t);return e};const Fb=(t,e)=>{const n=Pb(t.data.substr(0,e.offset()));const o=Pb(t.data.substr(e.offset()));const s=n.text+o.text;if(s.length>0){Mb(t);return Hm(t,e.offset()-n.count)}return e};const Ub=(t,e)=>{const n=e.container();const o=G(Ct(n.childNodes),t).map((t=>t<e.offset()?Hm(n,e.offset()-1):e)).getOr(e);Hb(t);return o};const zb=(t,e)=>Bb(t)&&e.container()===t?Fb(t,e):Ib(t,e);const $b=(t,e)=>e.container()===t.parentNode?Ub(t,e):Ib(t,e);const jb=(t,e)=>Hm.isTextPosition(e)?zb(t,e):$b(t,e);const Hb=t=>{Tb(t)&&Bu(t)&&(Lu(t)?t.removeAttribute("data-mce-caret"):Lb(t));if(Bb(t)){Mb(t);t.data.length===0&&Lb(t)}};const Wb=Fa;const Vb=Ha;const qb=za;const Kb="*[contentEditable=false],video,audio,embed,object";const Yb=(t,e,n)=>{const o=qu(e.getBoundingClientRect(),n);let s;let r;if(t.tagName==="BODY"){const e=t.ownerDocument.documentElement;s=t.scrollLeft||e.scrollLeft;r=t.scrollTop||e.scrollTop}else{const e=t.getBoundingClientRect();s=t.scrollLeft-e.left;r=t.scrollTop-e.top}o.left+=s;o.right+=s;o.top+=r;o.bottom+=r;o.width=1;let c=e.offsetWidth-e.clientWidth;if(c>0){n&&(c*=-1);o.left+=c;o.right+=c}return o};const Gb=t=>{const e=gc(fo.fromDom(t),Kb);for(let t=0;t<e.length;t++){const n=e[t].dom;let o=n.previousSibling;if(zu(o)){const t=o.data;t.length===1?o.parentNode?.removeChild(o):o.deleteData(t.length-1,1)}o=n.nextSibling;if(Uu(o)){const t=o.data;t.length===1?o.parentNode?.removeChild(o):o.deleteData(0,1)}}};const Xb=(t,e,n,o)=>{const s=he();let r;let c;const a=Pg(t);const i=t.dom;const l=(t,o)=>{let r;d();if(qb(o))return null;if(!n(o)){c=Pu(o,t);r=o.ownerDocument.createRange();if(Zb(c.nextSibling)){r.setStart(c,0);r.setEnd(c,0)}else{r.setStart(c,1);r.setEnd(c,1)}return r}{const n=Fu(a,o,t);const l=Yb(e,o,t);i.setStyle(n,"top",l.top);i.setStyle(n,"caret-color","transparent");c=n;const d=i.create("div",{class:"mce-visual-caret","data-mce-bogus":"all"});i.setStyles(d,{...l});i.add(e,d);s.set({caret:d,element:o,before:t});t&&i.addClass(d,"mce-visual-caret-before");u();r=o.ownerDocument.createRange();r.setStart(n,0);r.setEnd(n,0)}return r};const d=()=>{Gb(e);if(c){Hb(c);c=null}s.on((t=>{i.remove(t.caret);s.clear()}));if(r){clearInterval(r);r=void 0}};const u=()=>{r=window.setInterval((()=>{s.on((t=>{o()?i.toggleClass(t.caret,"mce-visual-caret-hidden"):i.addClass(t.caret,"mce-visual-caret-hidden")}))}),500)};const m=()=>{s.on((t=>{const n=Yb(e,t.element,t.before);i.setStyles(t.caret,{...n})}))};const f=()=>clearInterval(r);const p=()=>".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";return{isShowing:s.isSet,show:l,hide:d,getCss:p,reposition:m,destroy:f}};const Qb=()=>Gn.browser.isFirefox();const Zb=t=>Wb(t)||Vb(t);const Jb=t=>{const e=Zb(t)||ka(t)&&Qb();return e&&Qo(fo.fromDom(t)).exists(ic)};const ty=Ia;const ey=Fa;const ny=Ha;const oy=wa("display","block table table-cell table-row table-caption list-item");const sy=Bu;const ry=Du;const cy=ha;const ay=Na;const iy=hm;const ly=(t,e)=>{let n;while(n=t(e))if(!ry(n))return n;return null};const dy=(t,e,n,o,s)=>{const r=new DomTreeWalker(t,o);const c=ey(t)||ry(t);let a;if(Sf(e)){if(c){a=ly(r.prev.bind(r),true);if(n(a))return a}while(a=ly(r.prev.bind(r),s))if(n(a))return a}if(kf(e)){if(c){a=ly(r.next.bind(r),true);if(n(a))return a}while(a=ly(r.next.bind(r),s))if(n(a))return a}return null};const uy=(t,e)=>{const n=t=>ty(t.dom);const o=t=>t.dom===e;return $r(fo.fromDom(t),n,o).map((t=>t.dom)).getOr(e)};const my=t=>ha(t)&&fr(fo.fromDom(t),"position")==="absolute";const fy=(t,e)=>t.parentNode!==e;const py=(t,e)=>ey(t)&&my(t)&&fy(t,e);const gy=(t,e)=>{while(t&&t!==e){if(oy(t)&&!py(t,e))return t;t=t.parentNode}return null};const hy=(t,e,n)=>gy(t.container(),n)===gy(e.container(),n);const by=(t,e)=>{if(!e)return Optional.none();const n=e.container();const o=e.offset();return cy(n)?Optional.from(n.childNodes[o+t]):Optional.none()};const yy=(t,e)=>{const n=e.ownerDocument??document;const o=n.createRange();if(t){o.setStartBefore(e);o.setEndBefore(e)}else{o.setStartAfter(e);o.setEndAfter(e)}return o};const vy=(t,e,n)=>gy(e,t)===gy(n,t);const Cy=(t,e,n)=>{const o=t?"previousSibling":"nextSibling";let s=n;while(s&&s!==e){let t=s[o];t&&sy(t)&&(t=t[o]);if(ey(t)||ny(t)){if(vy(e,t,s))return t;break}if(iy(t))break;s=s.parentNode}return null};const wy=F(yy,true);const Oy=F(yy,false);const Ey=(t,e,n)=>{let o;const s=F(Cy,true,e);const r=F(Cy,false,e);const c=n.startContainer;const a=n.startOffset;if(Du(c)){const t=ay(c)?c.parentNode:c;const e=t.getAttribute("data-mce-caret");if(e==="before"){o=t.nextSibling;if(Jb(o))return wy(o)}if(e==="after"){o=t.previousSibling;if(Jb(o))return Oy(o)}}if(!n.collapsed)return n;if(Na(c)){if(sy(c)){if(t===1){o=r(c);if(o)return wy(o);o=s(c);if(o)return Oy(o)}if(t===-1){o=s(c);if(o)return Oy(o);o=r(c);if(o)return wy(o)}return n}if(zu(c)&&a>=c.data.length-1){if(t===1){o=r(c);if(o)return wy(o)}return n}if(Uu(c)&&a<=1){if(t===-1){o=s(c);if(o)return Oy(o)}return n}if(a===c.data.length){o=r(c);return o?wy(o):n}if(a===0){o=s(c);return o?Oy(o):n}}return n};const xy=(t,e)=>by(t?0:-1,e).filter(ey);const ky=(t,e,n)=>{const o=Ey(t,e,n);return t===-1?Hm.fromRangeStart(o):Hm.fromRangeEnd(o)};const Sy=t=>Optional.from(t.getNode()).map(fo.fromDom);const _y=t=>Optional.from(t.getNode(true)).map(fo.fromDom);const Ny=(t,e)=>{let n=e;while(n=t(n))if(n.isVisible())return n;return n};const Ry=(t,e)=>{const n=hy(t,e);return!(n||!La(t.getNode()))||n};const Ay=Fa;const Dy=Na;const Ty=ha;const By=La;const Ly=hm;const Py=wm;const My=Om;const Iy=(t,e)=>{const n=[];let o=t;while(o&&o!==e){n.push(o);o=o.parentNode}return n};const Fy=(t,e)=>t.hasChildNodes()&&e<t.childNodes.length?t.childNodes[e]:null;const Uy=(t,e)=>{if(kf(t)){if(Ly(e.previousSibling)&&!Dy(e.previousSibling))return Hm.before(e);if(Dy(e))return Hm(e,0)}if(Sf(t)){if(Ly(e.nextSibling)&&!Dy(e.nextSibling))return Hm.after(e);if(Dy(e))return Hm(e,e.data.length)}return Sf(t)?By(e)?Hm.before(e):Hm.after(e):Hm.before(e)};const zy=(t,e)=>{const n=e.nextSibling;return n&&Ly(n)?Dy(n)?Hm(n,0):Hm.before(n):$y(1,Hm.after(e),t)};const $y=(t,e,n)=>{let o;let s;let r;let c;if(!Ty(n)||!e)return null;if(e.isEqual(Hm.after(n))&&n.lastChild){c=Hm.after(n.lastChild);if(Sf(t)&&Ly(n.lastChild)&&Ty(n.lastChild))return By(n.lastChild)?Hm.before(n.lastChild):c}else c=e;const a=c.container();let i=c.offset();if(Dy(a)){if(Sf(t)&&i>0)return Hm(a,--i);if(kf(t)&&i<a.length)return Hm(a,++i);o=a}else{if(Sf(t)&&i>0){s=Fy(a,i-1);if(Ly(s)){if(!Py(s)){r=dy(s,t,My,s);if(r)return Dy(r)?Hm(r,r.data.length):Hm.after(r)}return Dy(s)?Hm(s,s.data.length):Hm.before(s)}}if(kf(t)&&i<a.childNodes.length){s=Fy(a,i);if(Ly(s)){if(By(s))return zy(n,s);if(!Py(s)){r=dy(s,t,My,s);if(r)return Dy(r)?Hm(r,0):Hm.before(r)}return Dy(s)?Hm(s,0):Hm.after(s)}}o=s||c.getNode()}if(o&&(kf(t)&&c.isAtEnd()||Sf(t)&&c.isAtStart())){o=dy(o,t,W,n,true);if(My(o,n))return Uy(t,o)}s=o?dy(o,t,My,n):o;const l=Ge(nt(Iy(a,n),Ay));if(l&&(!s||!l.contains(s))){c=kf(t)?Hm.after(l):Hm.before(l);return c}return s?Uy(t,s):null};const jy=t=>({
/**
       * Returns the next logical caret position from the specified input
       * caretPosition or null if there isn't any more positions left for example
       * at the end specified root element.
       *
       * @method next
       * @param {tinymce.caret.CaretPosition} caretPosition Caret position to start from.
       * @return {tinymce.caret.CaretPosition} CaretPosition or null if no position was found.
       */
next:e=>$y(1,e,t),
/**
       * Returns the previous logical caret position from the specified input
       * caretPosition or null if there isn't any more positions left for example
       * at the end specified root element.
       *
       * @method prev
       * @param {tinymce.caret.CaretPosition} caretPosition Caret position to start from.
       * @return {tinymce.caret.CaretPosition} CaretPosition or null if no position was found.
       */
prev:e=>$y(-1,e,t)});const Hy=(t,e,n)=>{const o=t?Hm.before(n):Hm.after(n);return Xy(t,e,o)};const Wy=t=>La(t)?Hm.before(t):Hm.after(t);const Vy=t=>Hm.isTextPosition(t)?t.offset()===0:hm(t.getNode());const qy=t=>{if(Hm.isTextPosition(t)){const e=t.container();return t.offset()===e.data.length}return hm(t.getNode(true))};const Ky=(t,e)=>!Hm.isTextPosition(t)&&!Hm.isTextPosition(e)&&t.getNode()===e.getNode(true);const Yy=t=>!Hm.isTextPosition(t)&&La(t.getNode());const Gy=(t,e,n)=>t?!Ky(e,n)&&!Yy(e)&&qy(e)&&Vy(n):!Ky(n,e)&&Vy(e)&&qy(n);const Xy=(t,e,n)=>{const o=jy(e);return Optional.from(t?o.next(n):o.prev(n))};const Qy=(t,e,n)=>Xy(t,e,n).bind((o=>hy(n,o,e)&&Gy(t,n,o)?Xy(t,e,o):Optional.some(o)));const Zy=(t,e,n,o)=>Qy(t,e,n).bind((n=>o(n)?Zy(t,e,n,o):Optional.some(n)));const Jy=(t,e)=>{const n=t?e.firstChild:e.lastChild;return Na(n)?Optional.some(Hm(n,t?0:n.data.length)):n?hm(n)?Optional.some(t?Hm.before(n):Wy(n)):Hy(t,e,n):Optional.none()};const tv=F(Xy,true);const ev=F(Xy,false);const nv=F(Jy,true);const ov=F(Jy,false);const sv="_mce_caret";const rv=t=>ha(t)&&t.id===sv;const cv=(t,e)=>{let n=e;while(n&&n!==t){if(rv(n))return n;n=n.parentNode}return null};const av=t=>C(t.start);const iv=t=>Pt(t,"rng");const lv=t=>Pt(t,"id");const dv=t=>Pt(t,"name");const uv=t=>co.isArray(t.start);const mv=t=>!(!dv(t)&&k(t.forward))||t.forward;const fv=(t,e)=>{ha(e)&&t.isBlock(e)&&!e.innerHTML&&(e.innerHTML='<br data-mce-bogus="1" />');return e};const pv=(t,e)=>{const n=Optional.from(af(t.getRoot(),e.start));const o=Optional.from(af(t.getRoot(),e.end));return ae(n,o,((n,o)=>{const s=t.createRng();s.setStart(n.container(),n.offset());s.setEnd(o.container(),o.offset());return{range:s,forward:mv(e)}}))};const gv=(t,e)=>{const n=t.ownerDocument??document;const o=n.createTextNode(ku);t.appendChild(o);e.setStart(o,0);e.setEnd(o,0)};const hv=t=>!t.hasChildNodes();const bv=(t,e)=>ov(t).fold(H,(t=>{e.setStart(t.container(),t.offset());e.setEnd(t.container(),t.offset());return true}));const yv=(t,e,n)=>{if(hv(e)&&cv(t,e)){gv(e,n);return true}return false};const vv=(t,e,n,o)=>{const s=n[e?"start":"end"];const r=t.getRoot();if(s){let t=r;let n=s[0];for(let e=s.length-1;t&&e>=1;e--){const n=t.childNodes;if(yv(r,t,o))return true;if(s[e]>n.length-1)return!!yv(r,t,o)||bv(t,o);t=n[s[e]]}Na(t)&&(n=Math.min(s[0],t.data.length));ha(t)&&(n=Math.min(s[0],t.childNodes.length));e?o.setStart(t,n):o.setEnd(t,n)}return true};const Cv=t=>Na(t)&&t.data.length>0;const wv=(t,e,n)=>{const o=t.get(n.id+"_"+e);const s=o?.parentNode;const r=n.keep;if(o&&s){let c;let a;if(e==="start")if(r)if(o.hasChildNodes()){c=o.firstChild;a=1}else if(Cv(o.nextSibling)){c=o.nextSibling;a=0}else if(Cv(o.previousSibling)){c=o.previousSibling;a=o.previousSibling.data.length}else{c=s;a=t.nodeIndex(o)+1}else{c=s;a=t.nodeIndex(o)}else if(r)if(o.hasChildNodes()){c=o.firstChild;a=1}else if(Cv(o.previousSibling)){c=o.previousSibling;a=o.previousSibling.data.length}else{c=s;a=t.nodeIndex(o)}else{c=s;a=t.nodeIndex(o)}if(!r){const s=o.previousSibling;const r=o.nextSibling;co.each(co.grep(o.childNodes),(t=>{Na(t)&&(t.data=t.data.replace(/\uFEFF/g,""))}));let i;while(i=t.get(n.id+"_"+e))t.remove(i,true);if(Na(r)&&Na(s)&&!Gn.browser.isOpera()){const e=s.data.length;s.appendData(r.data);t.remove(r);c=s;a=e}}return Optional.some(Hm(c,a))}return Optional.none()};const Ov=(t,e)=>{const n=t.createRng();return vv(t,true,e,n)&&vv(t,false,e,n)?Optional.some({range:n,forward:mv(e)}):Optional.none()};const Ev=(t,e)=>{const n=wv(t,"start",e);const o=wv(t,"end",e);return ae(n,o.or(n),((n,o)=>{const s=t.createRng();s.setStart(fv(t,n.container()),n.offset());s.setEnd(fv(t,o.container()),o.offset());return{range:s,forward:mv(e)}}))};const xv=(t,e)=>Optional.from(t.select(e.name)[e.index]).map((e=>{const n=t.createRng();n.selectNode(e);return{range:n,forward:true}}));const kv=(t,e)=>{const n=t.dom;if(e){if(uv(e))return Ov(n,e);if(av(e))return pv(n,e);if(lv(e))return Ev(n,e);if(dv(e))return xv(n,e);if(iv(e))return Optional.some({range:e.rng,forward:mv(e)})}return Optional.none()};const Sv=(t,e,n)=>Ef(t,e,n);const _v=(t,e)=>{kv(t,e).each((({range:e,forward:n})=>{t.setRng(e,n)}))};const Nv=t=>ha(t)&&t.tagName==="SPAN"&&t.getAttribute("data-mce-type")==="bookmark";const Rv=t=>e=>t===e;const Av=Rv(Pe);const Dv=t=>t!==""&&" \f\n\r\t\v".indexOf(t)!==-1;const Tv=t=>!Dv(t)&&!Av(t)&&!Ie(t);const Bv=t=>{const e=[];if(t)for(let n=0;n<t.rangeCount;n++)e.push(t.getRangeAt(n));return e};const Lv=t=>ut(t,(t=>{const e=em(t);return e?[fo.fromDom(e)]:[]}));const Pv=t=>Bv(t).length>1;const Mv=t=>nt(Lv(t),yu);const Iv=t=>gc(t,"td[data-mce-selected],th[data-mce-selected]");const Fv=(t,e)=>{const n=Iv(e);return n.length>0?n:Mv(t)};const Uv=t=>Fv(Bv(t.selection.getSel()),fo.fromDom(t.getBody()));const zv=(t,e)=>qr(t,"table",e);const $v=t=>{const e=t.startContainer,n=t.startOffset;return Na(e)?n===0?Optional.some(fo.fromDom(e)):Optional.none():Optional.from(e.childNodes[n]).map(fo.fromDom)};const jv=t=>{const e=t.endContainer,n=t.endOffset;return Na(e)?n===e.data.length?Optional.some(fo.fromDom(e)):Optional.none():Optional.from(e.childNodes[n-1]).map(fo.fromDom)};const Hv=t=>cs(t).fold(P([t]),(e=>[t].concat(Hv(e))));const Wv=t=>as(t).fold(P([t]),(e=>Mo(e)==="br"?ts(e).map((e=>[t].concat(Wv(e)))).getOr([]):[t].concat(Wv(e))));const Vv=(t,e)=>ae($v(e),jv(e),((e,n)=>{const o=at(Hv(t),F(To,e));const s=at(Wv(t),F(To,n));return o.isSome()&&s.isSome()})).getOr(false);const qv=(t,e,n,o)=>{const s=n;const r=new DomTreeWalker(n,s);const c=Dt(t.schema.getMoveCaretBeforeOnEnterElements(),((t,e)=>!X(["td","th","table"],e.toLowerCase())));let a=n;do{if(Na(a)&&co.trim(a.data).length!==0){o?e.setStart(a,0):e.setEnd(a,a.data.length);return}if(c[a.nodeName]){o?e.setStartBefore(a):a.nodeName==="BR"?e.setEndBefore(a):e.setEndAfter(a);return}}while(a=o?r.next():r.prev());s.nodeName==="BODY"&&(o?e.setStart(s,0):e.setEnd(s,s.childNodes.length))};const Kv=t=>{const e=t.selection.getSel();return N(e)&&e.rangeCount>0};const Yv=(t,e)=>{const n=Uv(t);n.length>0?J(n,(n=>{const o=n.dom;const s=t.dom.createRng();s.setStartBefore(o);s.setEndAfter(o);e(s,true)})):e(t.selection.getRng(),false)};const Gv=(t,e,n)=>{const o=Of(t,e);n(o);t.moveToBookmark(o)};const Xv=(t,e)=>t.startContainer===t.endContainer&&t.endOffset-t.startOffset===1&&e(t.startContainer.childNodes[t.startOffset]);const Qv=t=>Xv(t,ba);const Zv=t=>Xv(t,Na);const Jv=t=>Xv(t,Ma);const tC=t=>A(t?.nodeType);const eC=t=>ha(t)&&!Nv(t)&&!rv(t)&&!Ea(t);const nC=(t,e)=>{if(eC(e)&&!/^(TD|TH)$/.test(e.nodeName)){const n=t.getAttrib(e,"data-mce-selected");const o=parseInt(n,10);return!isNaN(o)&&o>0}return false};const oC=(t,e,n)=>{const{selection:o,dom:s}=t;const r=o.getNode();const c=Fa(r);Gv(o,true,(()=>{e()}));const a=c&&Fa(r);a&&s.isChildOf(r,t.getBody())?t.selection.select(r):n(o.getStart())&&sC(s,o)};const sC=(t,e)=>{const n=e.getRng();const{startContainer:o,startOffset:s}=n;const r=e.getNode();if(!nC(t,r)&&ha(o)){const r=o.childNodes;const c=t.getRoot();let a;if(s<r.length){const e=r[s];a=new DomTreeWalker(e,t.getParent(e,t.isBlock)??c)}else{const e=r[r.length-1];a=new DomTreeWalker(e,t.getParent(e,t.isBlock)??c);a.next(true)}for(let o=a.current();o;o=a.next()){if(t.getContentEditable(o)==="false")return;if(Na(o)&&!iC(o)){n.setStart(o,0);e.setRng(n);return}}}};
/**
   * Returns the next/previous non whitespace node.
   *
   * @private
   * @param {Node} node Node to start at.
   * @param {Boolean} next (Optional) Include next or previous node defaults to previous.
   * @param {Boolean} inc (Optional) Include the current node in checking. Defaults to false.
   * @return {Node} Next or previous node or undefined if it wasn't found.
   */const rC=(t,e,n)=>{if(t){const o=e?"nextSibling":"previousSibling";for(t=n?t:t[o];t;t=t[o])if(ha(t)||!iC(t))return t}};const cC=(t,e)=>!!t.getTextBlockElements()[e.nodeName.toLowerCase()]||Ni(t,e);const aC=(t,e,n)=>t.schema.isValidChild(e,n);const iC=(t,e=false)=>{if(N(t)&&Na(t)){const n=e?t.data.replace(/ /g," "):t.data;return ia(n)}return false};const lC=t=>N(t)&&Na(t)&&t.length===0;const dC=(t,e)=>{const n="[data-mce-cef-wrappable]";const o=Oh(t);const s=Ne(o)?n:`${n},${o}`;return No(fo.fromDom(e),s)};const uC=(t,e)=>{const n=t.dom;return eC(e)&&n.getContentEditable(e)==="false"&&dC(t,e)&&n.select('[contenteditable="true"]',e).length===0};
/**
   * Replaces variables in the value. The variable format is %var.
   *
   * @private
   * @param {String} value Value to replace variables in.
   * @param {Object} vars Name/value array with variables to replace.
   * @return {String} New value with replaced variables.
   */const mC=(t,e)=>{if(R(t))return t(e);N(e)&&(t=t.replace(/%(\w+)/g,((t,n)=>e[n]||t)));return t};
/**
   * Compares two string/nodes regardless of their case.
   *
   * @private
   * @param {String/Node} str1 Node or string to compare.
   * @param {String/Node} str2 Node or string to compare.
   * @return {Boolean} True/false if they match.
   */const fC=(t,e)=>{t=t||"";e=e||"";t=""+(t.nodeName||t);e=""+(e.nodeName||e);return t.toLowerCase()===e.toLowerCase()};const pC=(t,e)=>{if(_(t))return null;{let n=String(t);e!=="color"&&e!=="backgroundColor"||(n=Gl(n));e==="fontWeight"&&t===700&&(n="bold");e==="fontFamily"&&(n=n.replace(/[\'\"]/g,"").replace(/,\s+/g,","));return n}};const gC=(t,e,n)=>{const o=t.getStyle(e,n);return pC(o,n)};const hC=(t,e)=>{let n;t.getParent(e,(e=>{if(ha(e)){n=t.getStyle(e,"text-decoration");return!!n&&n!=="none"}return false}));return n};const bC=(t,e,n)=>t.getParents(e,n,t.getRoot());const yC=(t,e,n)=>{const o=t.formatter.get(e);return N(o)&&Q(o,n)};const vC=(t,e)=>{const n=t=>{const e=t=>R(t)||t.length>1&&t.charAt(0)==="%";return Q(["styles","attributes"],(n=>Lt(t,n).exists((t=>{const n=E(t)?t:Bt(t);return Q(n,e)}))))};return yC(t,e,n)};const CC=(t,e,n)=>{const o=["inline","block","selector","attributes","styles","classes"];const s=t=>Dt(t,((t,e)=>Q(o,(t=>t===e))));return yC(t,e,(e=>{const o=s(e);return yC(t,n,(t=>{const e=s(t);return It(o,e)}))}))};const wC=t=>Mt(t,"block");const OC=t=>wC(t)&&t.wrapper===true;const EC=t=>wC(t)&&t.wrapper!==true;const xC=t=>Mt(t,"selector");const kC=t=>Mt(t,"inline");const SC=t=>xC(t)&&kC(t)&&se(Lt(t,"mixed"),true);const _C=t=>xC(t)&&t.expand!==false&&!kC(t);const NC=t=>{const e=[];let n=t;while(n){if(Na(n)&&n.data!==ku||n.childNodes.length>1)return[];ha(n)&&e.push(n);n=n.firstChild}return e};const RC=t=>NC(t).length>0;const AC=t=>rv(t.dom)&&RC(t.dom);const DC=Nv;const TC=bC;const BC=iC;const LC=cC;const PC=t=>La(t)&&t.getAttribute("data-mce-bogus")&&!t.nextSibling;const MC=(t,e)=>{let n=e;while(n){if(ha(n)&&t.getContentEditable(n))return t.getContentEditable(n)==="false"?n:e;n=n.parentNode}return e};const IC=(t,e,n,o)=>{const s=e.data;if(t){for(let t=n;t>0;t--)if(o(s.charAt(t-1)))return t}else for(let t=n;t<s.length;t++)if(o(s.charAt(t)))return t;return-1};const FC=(t,e,n)=>IC(t,e,n,(t=>Av(t)||Dv(t)));const UC=(t,e,n)=>IC(t,e,n,Tv);const zC=(t,e,n,o,s,r)=>{let c;const a=t.getParent(n,(e=>Ua(e)||t.isBlock(e)));const i=N(a)?a:e;const l=(e,n,o)=>{const r=su(t);const a=s?r.backwards:r.forwards;return Optional.from(a(e,n,((t,e)=>{if(DC(t.parentNode))return-1;c=t;return o(s,t,e)}),i))};const d=l(n,o,FC);return d.bind((t=>r?l(t.container,t.offset+(s?-1:0),UC):Optional.some(t))).orThunk((()=>c?Optional.some({container:c,offset:s?0:c.length}):Optional.none()))};const $C=(t,e,n,o,s)=>{const r=o[s];Na(o)&&Ne(o.data)&&r&&(o=r);const c=TC(t,o);for(let o=0;o<c.length;o++)for(let s=0;s<e.length;s++){const r=e[s];if((!N(r.collapsed)||r.collapsed===n.collapsed)&&(xC(r)&&t.is(c[o],r.selector)))return c[o]}return o};const jC=(t,e,n,o)=>{let s=n;const r=t.getRoot();const c=e[0];wC(c)&&(s=c.wrapper?null:t.getParent(n,c.block,r));if(!s){const e=t.getParent(n,"LI,TD,TH,SUMMARY")??r;s=t.getParent(Na(n)?n.parentNode:n,(e=>e!==r&&LC(t.schema,e)),e)}s&&wC(c)&&c.wrapper&&(s=TC(t,s,"ul,ol").reverse()[0]||s);if(!s){s=n;while(s&&s[o]&&!t.isBlock(s[o])){s=s[o];if(fC(s,"br"))break}}return s||n};const HC=(t,e,n,o)=>{const s=n.parentNode;return!N(n[o])&&(!(s!==e&&!_(s)&&!t.isBlock(s))||HC(t,e,s,o))};const WC=(t,e,n,o,s,r)=>{let c=n;const a=s?"previousSibling":"nextSibling";const i=t.getRoot();if(Na(n)&&!BC(n)&&(s?o>0:o<n.data.length))return n;while(c){if(Ua(c))return n;if(!e[0].block_expand&&t.isBlock(c))return r?c:n;for(let e=c[a];e;e=e[a]){const n=Na(e)&&!HC(t,i,e,a);if(!DC(e)&&!PC(e)&&!BC(e,n))return c}if(c===i||c.parentNode===i){n=c;break}c=c.parentNode}return n};const VC=t=>DC(t.parentNode)||DC(t);const qC=(t,e,n,o={})=>{const{includeTrailingSpace:s=false,expandToBlock:r=true}=o;const c=t.getParent(e.commonAncestorContainer,(t=>Ua(t)));const a=N(c)?c:t.getRoot();let{startContainer:i,startOffset:l,endContainer:d,endOffset:u}=e;const m=n[0];if(ha(i)&&i.hasChildNodes()){i=nm(i,l);Na(i)&&(l=0)}if(ha(d)&&d.hasChildNodes()){d=nm(d,e.collapsed?u:u-1);Na(d)&&(u=d.data.length)}i=MC(t,i);d=MC(t,d);if(VC(i)){i=DC(i)?i:i.parentNode;i=e.collapsed?i.previousSibling||i:i.nextSibling||i;Na(i)&&(l=e.collapsed?i.length:0)}if(VC(d)){d=DC(d)?d:d.parentNode;d=e.collapsed?d.nextSibling||d:d.previousSibling||d;Na(d)&&(u=e.collapsed?0:d.length)}if(e.collapsed){const e=zC(t,a,i,l,true,s);e.each((({container:t,offset:e})=>{i=t;l=e}));const n=zC(t,a,d,u,false,s);n.each((({container:t,offset:e})=>{d=t;u=e}))}if(kC(m)||m.block_expand){kC(m)&&Na(i)&&l!==0||(i=WC(t,n,i,l,true,r));kC(m)&&Na(d)&&u!==d.data.length||(d=WC(t,n,d,u,false,r))}if(_C(m)){i=$C(t,n,e,i,"previousSibling");d=$C(t,n,e,d,"nextSibling")}if(wC(m)||xC(m)){i=jC(t,n,i,"previousSibling");d=jC(t,n,d,"nextSibling");if(wC(m)){if(!t.isBlock(i)){i=WC(t,n,i,l,true,r);Na(i)&&(l=0)}if(!t.isBlock(d)){d=WC(t,n,d,u,false,r);Na(d)&&(u=d.data.length)}}}if(ha(i)&&i.parentNode){l=t.nodeIndex(i);i=i.parentNode}if(ha(d)&&d.parentNode){u=t.nodeIndex(d)+1;d=d.parentNode}return{startContainer:i,startOffset:l,endContainer:d,endOffset:u}};const KC=(t,e,n)=>{const o=e.startOffset;const s=nm(e.startContainer,o);const r=e.endOffset;const c=nm(e.endContainer,r-1);
/**
     * Excludes start/end text node if they are out side the range
     *
     * @private
     * @param {Array} nodes Nodes to exclude items from.
     * @return {Array} Array with nodes excluding the start/end container if needed.
     */const a=t=>{const e=t[0];Na(e)&&e===s&&o>=e.data.length&&t.splice(0,1);const n=t[t.length-1];r===0&&t.length>0&&n===c&&Na(n)&&t.splice(t.length-1,1);return t};const i=(t,e,n)=>{const o=[];for(;t&&t!==n;t=t[e])o.push(t);return o};const l=(e,n)=>t.getParent(e,(t=>t.parentNode===n),n);const d=(t,e,o)=>{const s=o?"nextSibling":"previousSibling";for(let r=t,c=r.parentNode;r&&r!==e;r=c){c=r.parentNode;const e=i(r===t?r:r[s],s);if(e.length){o||e.reverse();n(a(e))}}};if(s===c)return n(a([s]));const u=t.findCommonAncestor(s,c)??t.getRoot();if(t.isChildOf(s,c))return d(s,u,true);if(t.isChildOf(c,s))return d(c,u);const m=l(s,u)||s;const f=l(c,u)||c;d(s,m,true);const p=i(m===s?m:m.nextSibling,"nextSibling",f===c?f.nextSibling:f);p.length&&n(a(p));d(c,f)};const YC=['pre[class*=language-][contenteditable="false"]',"figure.image","div[data-ephox-embed-iri]","div.tiny-pageembed","div.mce-toc","div[data-mce-toc]","div.mce-footnotes"];const GC=t=>jo(t)&&Lr(t)===ku;const XC=(t,e,n,o)=>Qo(e).fold((()=>"skipping"),(s=>o==="br"||GC(e)?"valid":Xd(e)?"existing":rv(e.dom)?"caret":Q(YC,(t=>No(e,t)))?"valid-block":aC(t,n,o)&&aC(t,Mo(s),n)?"valid":"invalid-child"));const QC=(t,e)=>{const n=qC(t.dom,e,[{inline:"span"}]);e.setStart(n.startContainer,n.startOffset);e.setEnd(n.endContainer,n.endOffset);t.selection.setRng(e)};const ZC=(t,e,n,o,s,r)=>{const{uid:c=e,...a}=n;tc(t,jd());zs(t,`${Wd()}`,c);zs(t,`${Hd()}`,o);const{attributes:i={},classes:l=[]}=s(c,a);$s(t,i);rc(t,l);if(r){l.length>0&&zs(t,`${qd()}`,l.join(","));const e=Et(i);e.length>0&&zs(t,`${Kd()}`,e.join(","))}};const JC=t=>{nc(t,jd());Vs(t,`${Wd()}`);Vs(t,`${Hd()}`);Vs(t,`${Vd()}`);const e=Hs(t,`${Kd()}`).map((t=>t.split(","))).getOr([]);const n=Hs(t,`${qd()}`).map((t=>t.split(","))).getOr([]);J(e,(e=>Vs(t,e)));cc(t,n);Vs(t,`${qd()}`);Vs(t,`${Kd()}`)};const tw=(t,e,n,o,s)=>{const r=fo.fromTag("span",t);ZC(r,e,n,o,s,false);return r};const ew=(t,e,n,o,s,r)=>{const c=[];const a=tw(t.getDoc(),n,r,o,s);const i=he();const l=()=>{i.clear()};const d=()=>i.get().getOrThunk((()=>{const t=Zs(a);c.push(t);i.set(t);return t}));const u=t=>{J(t,m)};const m=e=>{const c=XC(t,e,"span",Mo(e));switch(c){case"invalid-child":{l();const t=ss(e);u(t);l();break}case"valid-block":l();ZC(e,n,r,o,s,true);break;case"valid":{const t=d();Ps(e,t);break}}};const f=t=>{const e=Z(t,fo.fromDom);u(e)};KC(t.dom,e,(t=>{l();f(t)}));return c};const nw=(t,e,n,o)=>{t.undoManager.transact((()=>{const s=t.selection;const r=s.getRng();const c=Uv(t).length>0;const a=Qt("mce-annotation");r.collapsed&&!c&&QC(t,r);if(s.getRng().collapsed&&!c){const r=tw(t.getDoc(),a,o,e,n.decorate);rr(r,Pe);s.getRng().insertNode(r.dom);s.select(r.dom)}else Gv(s,false,(()=>{Yv(t,(s=>{ew(t,s,a,e,n.decorate,o)}))}))}))};const ow=t=>{const e=nu();eu(t,e);const n=tu(t,e);const o=Vo("span");const s=t=>{J(t,(t=>{o(t)?Xs(t):JC(t)}))};return{
/**
       * Registers a specific annotator by name
       *
       * @method register
       * @param {String} name the name of the annotation
       * @param {Object} settings settings for the annotation (e.g. decorate)
       */
register:(t,n)=>{e.register(t,n)},
/**
       * Applies the annotation at the current selection using data
       *
       * @method annotate
       * @param {String} name the name of the annotation to apply
       * @param {Object} data information to pass through to this particular
       * annotation
       */
annotate:(n,o)=>{e.lookup(n).each((e=>{nw(t,n,e,o)}))},
/**
       * Executes the specified callback when the current selection matches the annotation or not.
       *
       * @method annotationChanged
       * @param {String} name Name of annotation to listen for
       * @param {Function} callback Callback with (state, name, and data) fired when the annotation
       * at the cursor changes. If state if false, data will not be provided.
       */
annotationChanged:(t,e)=>{n.addListener(t,e)},
/**
       * Removes any annotations from the current selection that match
       * the name
       *
       * @method remove
       * @param {String} name the name of the annotation to remove
       */
remove:e=>{Gd(t,Optional.some(e)).each((({elements:e})=>{const n=t.selection.getBookmark();s(e);t.selection.moveToBookmark(n)}))},
/**
       * Removes all annotations that match the specified name from the entire document.
       *
       * @method removeAll
       * @param {String} name the name of the annotation to remove
       */
removeAll:e=>{const n=t.selection.getBookmark();kt(Jd(t,e),((t,e)=>{s(t)}));t.selection.moveToBookmark(n)},
/**
       * Retrieve all the annotations for a given name
       *
       * @method getAll
       * @param {String} name the name of the annotations to retrieve
       * @return {Object} an index of annotations from uid => DOM nodes
       */
getAll:e=>{const n=Jd(t,e);return St(n,(t=>Z(t,(t=>t.dom))))}}};
/**
   * Constructs a new BookmarkManager instance for a specific selection instance.
   *
   * @constructor
   * @method BookmarkManager
   * @param {tinymce.dom.Selection} selection Selection instance to handle bookmarks for.
   */const sw=t=>({
/**
       * Returns a bookmark location for the current selection. This bookmark object
       * can then be used to restore the selection after some content modification to the document.
       *
       * @method getBookmark
       * @param {Number} type Optional state if the bookmark should be simple or not. Default is complex.
       * @param {Boolean} normalized Optional state that enables you to get a position that it would be after normalization.
       * @return {Object} Bookmark object, use moveToBookmark with this object to restore the selection.
       * @example
       * // Stores a bookmark of the current selection
       * const bm = tinymce.activeEditor.selection.getBookmark();
       *
       * tinymce.activeEditor.setContent(tinymce.activeEditor.getContent() + 'Some new content');
       *
       * // Restore the selection bookmark
       * tinymce.activeEditor.selection.moveToBookmark(bm);
       */
getBookmark:F(Sv,t),
/**
       * Restores the selection to the specified bookmark.
       *
       * @method moveToBookmark
       * @param {Object} bookmark Bookmark to restore selection from.
       * @example
       * // Stores a bookmark of the current selection
       * const bm = tinymce.activeEditor.selection.getBookmark();
       *
       * tinymce.activeEditor.setContent(tinymce.activeEditor.getContent() + 'Some new content');
       *
       * // Restore the selection bookmark
       * tinymce.activeEditor.selection.moveToBookmark(bm);
       */
moveToBookmark:F(_v,t)});
/**
   * Returns true/false if the specified node is a bookmark node or not.
   *
   * @static
   * @method isBookmarkNode
   * @param {DOMNode} node DOM Node to check if it's a bookmark node or not.
   * @return {Boolean} true/false if the node is a bookmark node or not.
   */sw.isBookmarkNode=Nv;const rw=(t,e,n)=>!n.collapsed&&Q(n.getClientRects(),(n=>Qu(n,t,e)));const cw=(t,e)=>{const n=jo(e)?Lr(e).length:ss(e).length+1;return t>n?n:t<0?0:t};const aw=t=>Kc.range(t.start,cw(t.soffset,t.start),t.finish,cw(t.foffset,t.finish));const iw=(t,e)=>!ga(e.dom)&&(Bo(t,e)||To(t,e));const lw=t=>e=>iw(t,e.start)&&iw(t,e.finish);const dw=t=>t.inline||Gn.browser.isFirefox();const uw=t=>Kc.range(fo.fromDom(t.startContainer),t.startOffset,fo.fromDom(t.endContainer),t.endOffset);const mw=t=>{const e=t.getSelection();const n=e&&e.rangeCount!==0?Optional.from(e.getRangeAt(0)):Optional.none();return n.map(uw)};const fw=t=>{const e=Go(t);return mw(e.dom).filter(lw(t))};const pw=(t,e)=>Optional.from(e).filter(lw(t)).map(aw);const gw=t=>{const e=document.createRange();try{e.setStart(t.start.dom,t.soffset);e.setEnd(t.finish.dom,t.foffset);return Optional.some(e)}catch{return Optional.none()}};const hw=t=>{const e=dw(t)?fw(fo.fromDom(t.getBody())):Optional.none();t.bookmark=e.isSome()?e:t.bookmark};const bw=t=>{const e=t.bookmark?t.bookmark:Optional.none();return e.bind((e=>pw(fo.fromDom(t.getBody()),e))).bind(gw)};const yw=t=>{bw(t).each((e=>t.selection.setRng(e)))};
/**
   * Returns true if the specified element is part of the UI for example an button or text input.
   *
   * @static
   * @method isEditorUIElement
   * @param  {Element} elm Element to check if it's part of the UI or not.
   * @return {Boolean} True/false state if the element is part of the UI or not.
   */const vw=t=>{const e=t.className.toString();return e.indexOf("tox-")!==-1||e.indexOf("mce-")!==-1};const Cw={isEditorUIElement:vw};const ww=(t,e)=>{A(e)||(e=0);return window.setTimeout(t,e)};const Ow=(t,e)=>{A(e)||(e=0);return window.setInterval(t,e)};const Ew={
/**
     * Sets a timeout that's similar to the native browser <a href="https://developer.mozilla.org/en-US/docs/Web/API/setTimeout">setTimeout</a>
     * API, except that it checks if the editor instance is still alive when the callback gets executed.
     *
     * @method setEditorTimeout
     * @param {tinymce.Editor} editor Editor instance to check the removed state on.
     * @param {Function} callback Callback to execute when timer runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
setEditorTimeout:(t,e,n)=>ww((()=>{t.removed||e()}),n),
/**
     * Sets an interval timer that's similar to native browser <a href="https://developer.mozilla.org/en-US/docs/Web/API/setInterval">setInterval</a>
     * API, except that it checks if the editor instance is still alive when the callback gets executed.
     *
     * @method setEditorInterval
     * @param {Function} callback Callback to execute when interval time runs out.
     * @param {Number} time Optional time to wait before the callback is executed, defaults to 0.
     * @return {Number} Timeout id number.
     */
setEditorInterval:(t,e,n)=>{const o=Ow((()=>{t.removed?window.clearInterval(o):e()}),n);return o}};const xw=t=>t.type==="nodechange"&&t.selectionChange;const kw=(t,e)=>{const n=()=>{e.throttle()};wd.DOM.bind(document,"mouseup",n);t.on("remove",(()=>{wd.DOM.unbind(document,"mouseup",n)}))};const Sw=(t,e)=>{t.on("mouseup touchend",(t=>{e.throttle()}))};const _w=(t,e)=>{Sw(t,e);t.on("keyup NodeChange AfterSetSelectionRange",(e=>{xw(e)||hw(t)}))};const Nw=t=>{const e=De((()=>{hw(t)}),0);t.on("init",(()=>{t.inline&&kw(t,e);_w(t,e)}));t.on("remove",(()=>{e.cancel()}))};let Rw;const Aw=wd.DOM;const Dw=t=>ha(t)&&Cw.isEditorUIElement(t);const Tw=t=>{const e=t.classList;return e!==void 0&&(e.contains("tox-edit-area")||e.contains("tox-edit-area__iframe")||e.contains("mce-content-body"))};const Bw=(t,e)=>{const n=Eh(t);const o=Aw.getParent(e,(e=>Dw(e)||!!n&&t.dom.is(e,n)));return o!==null};const Lw=t=>{try{const e=us(fo.fromDom(t.getElement()));return Rs(e).fold((()=>document.body),(t=>t.dom))}catch{return document.body}};const Pw=(t,e)=>{const n=e.editor;Nw(n);const o=(t,e)=>{if(ub(t)&&t.inline!==true){const n=fo.fromDom(t.getContainer());e(n,"tox-edit-focus")}};n.on("focusin",(()=>{const e=t.focusedEditor;Tw(Lw(n))&&o(n,tc);if(e!==n){e&&e.dispatch("blur",{focusedEditor:n});t.setActive(n);t.focusedEditor=n;n.dispatch("focus",{blurredEditor:e});n.focus(true)}}));n.on("focusout",(()=>{Ew.setEditorTimeout(n,(()=>{const e=t.focusedEditor;Tw(Lw(n))&&e===n||o(n,nc);if(!Bw(n,Lw(n))&&e===n){n.dispatch("blur",{focusedEditor:null});t.focusedEditor=null}}))}));if(!Rw){Rw=e=>{const n=t.activeEditor;n&&hs(e).each((e=>{const o=e;if(o.ownerDocument===document&&o!==document.body&&!Bw(n,o)&&t.focusedEditor===n){n.dispatch("blur",{focusedEditor:null});t.focusedEditor=null}}))};Aw.bind(document,"focusin",Rw)}};const Mw=(t,e)=>{t.focusedEditor===e.editor&&(t.focusedEditor=null);if(!t.activeEditor&&Rw){Aw.unbind(document,"focusin",Rw);Rw=null}};const Iw=t=>{t.on("AddEditor",F(Pw,t));t.on("RemoveEditor",F(Mw,t))};const Fw=(t,e)=>t.dom.getParent(e,(e=>t.dom.getContentEditable(e)==="true"));const Uw=(t,e)=>t.dom.getParent(e,(e=>t.dom.getContentEditable(e)==="false"))!==null;const zw=t=>t.collapsed?Optional.from(nm(t.startContainer,t.startOffset)).map(fo.fromDom):Optional.none();const $w=(t,e)=>zw(e).bind((e=>bu(e)?Optional.some(e):Bo(t,e)?Optional.none():Optional.some(t)));const jw=(t,e)=>{$w(fo.fromDom(t.getBody()),e).bind((t=>nv(t.dom))).fold((()=>{t.selection.normalize()}),(e=>t.selection.setRng(e.toRange())))};const Hw=t=>{if(t.setActive)try{t.setActive()}catch{t.focus()}else t.focus()};const Ww=t=>Ns(t)||As(t).isSome();const Vw=t=>N(t.iframeElement)&&Ns(fo.fromDom(t.iframeElement));const qw=t=>{const e=t.getBody();return e&&Ww(fo.fromDom(e))};const Kw=t=>{const e=us(fo.fromDom(t.getElement()));return Rs(e).filter((e=>!Tw(e.dom)&&Bw(t,e.dom))).isSome()};const Yw=t=>t.inline?qw(t):Vw(t);const Gw=t=>Yw(t)||Kw(t);const Xw=t=>{const e=t.selection;const n=t.getBody();let o=e.getRng();t.quirks.refreshContentEditable();const s=t=>{bw(t).each((e=>{t.selection.setRng(e);o=e}))};!Yw(t)&&t.hasEditableRoot()&&s(t);const r=Fw(t,e.getNode());if(r&&t.dom.isChildOf(r,n)){Uw(t,r)||Hw(n);Hw(r);t.hasEditableRoot()||s(t);jw(t,o);Qw(t)}else{if(!t.inline){Gn.browser.isOpera()||Hw(n);t.getWin().focus()}if(Gn.browser.isFirefox()||t.inline){Hw(n);jw(t,o)}Qw(t)}};const Qw=t=>t.editorManager.setActive(t);const Zw=(t,e)=>{t.removed||(e?Qw(t):Xw(t))};const Jw={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,ESC:27,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,modifierPressed:t=>t.shiftKey||t.ctrlKey||t.altKey||Jw.metaKeyPressed(t),metaKeyPressed:t=>Gn.os.isMacOS()||Gn.os.isiOS()?t.metaKey:t.ctrlKey&&!t.altKey};const tO="data-mce-selected";const eO=`table,img,figure.image,hr,video,span.mce-preview-object,details,${Ka}`;const nO=Math.abs;const oO=Math.round;const sO={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};const rO=t=>t.type==="longpress"||t.type.indexOf("touch")===0;const cO=(t,e)=>{const n=e.dom;const o=e.getDoc();const s=document;const r=e.getBody();let c,a,i,l,d;let u,m,f,p,g,h;let b;let y;let v;let C;const w=t=>N(t)&&(Pa(t)||n.is(t,"figure.image"));const O=t=>Ha(t)||n.hasClass(t,"mce-preview-object");const E=(t,e)=>{if(rO(t)){const n=t.touches[0];return w(t.target)&&!rw(n.clientX,n.clientY,e)}return w(t.target)&&!rw(t.clientX,t.clientY,e)};const x=t=>{const n=t.target;E(t,e.selection.getRng())&&!t.isDefaultPrevented()&&e.selection.select(n)};const k=t=>n.hasClass(t,"mce-preview-object")&&N(t.firstElementChild)?[t,t.firstElementChild]:n.is(t,"figure.image")?[t.querySelector("img")]:[t];const S=t=>{const o=lh(e);return!(!o||e.mode.isReadOnly())&&(t.getAttribute("data-mce-resize")!=="false"&&(t!==e.getBody()&&(n.hasClass(t,"mce-preview-object")&&N(t.firstElementChild)?No(fo.fromDom(t.firstElementChild),o):No(fo.fromDom(t),o))))};const _=(t,e)=>{if(O(e))return t.create("img",{src:Gn.transparentSrc});if(ka(e)){const n=we(l.name,"n");const o=n?yt:vt;const s=e.cloneNode(true);o(t.select("tr",s)).each((e=>{const n=t.select("td,th",e);t.setStyle(e,"height",null);J(n,(e=>t.setStyle(e,"height",null)))}));return s}return e.cloneNode(true)};const R=(t,e,o)=>{t[e]=o;const s=400;if(t.width>s&&!(e==="width"&&o<s)){t[e]=o;n.setStyle(t,e,o)}else{const o=e==="height"?s*(g??1):s;t[e]=o;n.setStyle(t,e,o)}};const A=(t,o,s)=>{if(N(s)){const r=k(t);J(r,(t=>{Ya(t)?R(t,o,s):t.style[o]||!e.schema.isValid(t.nodeName.toLowerCase(),o)?n.setStyle(t,o,s):n.setAttrib(t,o,""+s)}))}};const D=(t,e,n)=>{A(t,"width",e);A(t,"height",n)};const T=t=>{let o,s,d;let E,x;o=t.screenX-u;s=t.screenY-m;b=o*l[2]+f;y=s*l[3]+p;b=b<5?5:b;y=y<5?5:y;d=(w(c)||O(c)||Ya(c))&&dh(e)!==false?!Jw.modifierPressed(t):Jw.modifierPressed(t);if(d)if(nO(o)>nO(s)){y=oO(b*g);b=oO(y/g)}else{b=oO(y/g);y=oO(b*g)}D(a,b,y);E=l.startPos.x+o;x=l.startPos.y+s;E=E>0?E:0;x=x>0?x:0;n.setStyles(i,{left:E,top:x,display:"block"});i.innerHTML=b+" &times; "+y;o=r.scrollWidth-v;s=r.scrollHeight-C;o+s!==0&&n.setStyles(i,{left:E-o,top:x-s});if(!h){Xp(e,c,f,p,"corner-"+l.name);h=true}};const B=()=>{const t=h;h=false;if(t){A(c,"width",b);A(c,"height",y)}n.unbind(o,"mousemove",T);n.unbind(o,"mouseup",B);if(s!==o){n.unbind(s,"mousemove",T);n.unbind(s,"mouseup",B)}n.remove(a);n.remove(i);n.remove(d);L(c);if(t){Qp(e,c,b,y,"corner-"+l.name);n.setAttrib(c,"style",n.getAttrib(c,"style"))}e.nodeChanged()};const L=t=>{U();const h=n.getPos(t,r);const w=h.x;const O=h.y;const E=t.getBoundingClientRect();const x=E.width||E.right-E.left;const N=E.height||E.bottom-E.top;if(c!==t){M();c=t;b=y=0}const R=e.dispatch("ObjectSelected",{target:t});S(t)&&!R.isDefaultPrevented()?kt(sO,((t,e)=>{const h=h=>{const b=k(c)[0];u=h.screenX;m=h.screenY;f=b.clientWidth;p=b.clientHeight;g=p/f;l=t;l.name=e;l.startPos={x:x*t[0]+w,y:N*t[1]+O};v=r.scrollWidth;C=r.scrollHeight;d=n.add(r,"div",{class:"mce-resize-backdrop","data-mce-bogus":"all"});n.setStyles(d,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"});a=_(n,c);n.addClass(a,"mce-clonedresizable");n.setAttrib(a,"data-mce-bogus","all");a.contentEditable="false";n.setStyles(a,{left:w,top:O,margin:0});D(a,x,N);a.removeAttribute(tO);r.appendChild(a);n.bind(o,"mousemove",T);n.bind(o,"mouseup",B);if(s!==o){n.bind(s,"mousemove",T);n.bind(s,"mouseup",B)}i=n.add(r,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},f+" &times; "+p)};let b=n.get("mceResizeHandle"+e);b&&n.remove(b);b=n.add(r,"div",{id:"mceResizeHandle"+e,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:true,style:"cursor:"+e+"-resize; margin:0; padding:0"});n.bind(b,"mousedown",(t=>{t.stopImmediatePropagation();t.preventDefault();h(t)}));t.elm=b;n.setStyles(b,{left:x*t[0]+w-b.offsetWidth/2,top:N*t[1]+O-b.offsetHeight/2})})):M(false)};const P=De(L,0);const M=(t=true)=>{P.cancel();U();c&&t&&c.removeAttribute(tO);kt(sO,((t,e)=>{const o=n.get("mceResizeHandle"+e);if(o){n.unbind(o);n.remove(o)}}))};const I=(t,e)=>n.isChildOf(t,e);const F=o=>{if(h||e.removed||e.composing)return;const s=o.type==="mousedown"?o.target:t.getNode();const c=Yr(fo.fromDom(s),eO).map((t=>t.dom)).filter((t=>n.isEditable(t.parentElement)||t.nodeName==="IMG"&&n.isEditable(t))).getOrUndefined();const a=N(c)?n.getAttrib(c,tO,"1"):"1";J(n.select(`img[${tO}],hr[${tO}]`),(t=>{t.removeAttribute(tO)}));if(N(c)&&I(c,r)&&Gw(e)){z();const e=t.getStart(true);if(I(e,c)&&I(t.getEnd(true),c)){n.setAttrib(c,tO,a);P.throttle(c);return}}M()};const U=()=>{kt(sO,(t=>{if(t.elm){n.unbind(t.elm);delete t.elm}}))};const z=()=>{try{e.getDoc().execCommand("enableObjectResizing",false,"false")}catch{}};e.on("init",(()=>{z();e.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop",F);e.on("keyup compositionend",(t=>{c&&c.nodeName==="TABLE"&&F(t)}));e.on("hide blur",M);e.on("contextmenu longpress",x,true)}));e.on("remove",U);const $=()=>{P.cancel();c=a=d=null};return{isResizable:S,showResizeRect:L,hideResizeRect:M,updateResizeRect:F,destroy:$}};const aO=(t,e,n)=>{const o=Go(fo.fromDom(n));return oa(o.dom,t,e).map((t=>{const e=n.createRange();e.setStart(t.start.dom,t.soffset);e.setEnd(t.finish.dom,t.foffset);return e})).getOrUndefined()};const iO=(t,e)=>N(t)&&N(e)&&t.startContainer===e.startContainer&&t.startOffset===e.startOffset&&t.endContainer===e.endContainer&&t.endOffset===e.endOffset;const lO=(t,e,n)=>{let o=t;while(o&&o!==e){if(n(o))return o;o=o.parentNode}return null};const dO=(t,e,n)=>lO(t,e,n)!==null;const uO=(t,e,n)=>dO(t,e,(t=>t.nodeName===n));const mO=(t,e)=>Bu(t)&&!dO(t,e,rv);const fO=(t,e,n)=>{const o=e.parentNode;if(o){const s=new DomTreeWalker(e,t.getParent(o,t.isBlock)||t.getRoot());let r;while(r=s[n?"prev":"next"]())if(La(r))return true}return false};const pO=(t,e)=>t.previousSibling?.nodeName===e;const gO=(t,e)=>{let n=e;while(n&&n!==t){if(Fa(n))return true;n=n.parentNode}return false};const hO=(t,e,n,o,s)=>{const r=t.getRoot();const c=t.schema.getNonEmptyElements();const a=s.parentNode;let i;let l;if(!a)return Optional.none();const d=t.getParent(a,t.isBlock)||r;if(o&&La(s)&&e&&t.isEmpty(d))return Optional.some(Hm(a,t.nodeIndex(s)));const u=new DomTreeWalker(s,d);while(l=u[o?"prev":"next"]()){if(t.getContentEditableParent(l)==="false"||mO(l,r))return Optional.none();if(Na(l)&&l.data.length>0)return uO(l,r,"A")?Optional.none():Optional.some(Hm(l,o?l.data.length:0));if(t.isBlock(l)||c[l.nodeName.toLowerCase()])return Optional.none();i=l}return Da(i)?Optional.none():n&&i?Optional.some(Hm(i,0)):Optional.none()};const bO=(t,e,n,o)=>{const s=t.getRoot();let r;let c=false;let a=n?o.startContainer:o.endContainer;let i=n?o.startOffset:o.endOffset;const l=ha(a)&&i===a.childNodes.length;const d=t.schema.getNonEmptyElements();let u=n;if(Bu(a))return Optional.none();ha(a)&&i>a.childNodes.length-1&&(u=false);if(Ta(a)){a=s;i=0}if(a===s){if(u){r=a.childNodes[i>0?i-1:0];if(r){if(Bu(r))return Optional.none();if(d[r.nodeName]||ka(r))return Optional.none()}}if(a.hasChildNodes()){i=Math.min(!u&&i>0?i-1:i,a.childNodes.length-1);a=a.childNodes[i];i=Na(a)&&l?a.data.length:0;if(!e&&a===s.lastChild&&ka(a))return Optional.none();if(gO(s,a)||Bu(a))return Optional.none();if(Va(a))return Optional.none();if(a.hasChildNodes()&&!ka(a)){r=a;const e=new DomTreeWalker(a,s);do{if(Fa(r)||Bu(r)){c=false;break}if(Na(r)&&r.data.length>0){i=u?0:r.data.length;a=r;c=true;break}if(d[r.nodeName.toLowerCase()]&&!$a(r)){i=t.nodeIndex(r);a=r.parentNode;u||i++;c=true;break}}while(r=u?e.next():e.prev())}}}if(e){Na(a)&&i===0&&hO(t,l,e,true,a).each((t=>{a=t.container();i=t.offset();c=true}));if(ha(a)){r=a.childNodes[i];r||(r=a.childNodes[i-1]);!r||!La(r)||pO(r,"A")||fO(t,r,false)||fO(t,r,true)||hO(t,l,e,true,r).each((t=>{a=t.container();i=t.offset();c=true}))}}u&&!e&&Na(a)&&i===a.data.length&&hO(t,l,e,false,a).each((t=>{a=t.container();i=t.offset();c=true}));return c&&a?Optional.some(Hm(a,i)):Optional.none()};const yO=(t,e)=>{const n=e.collapsed,o=e.cloneRange();const s=Hm.fromRangeStart(e);bO(t,n,true,o).each((t=>{n&&Hm.isAbove(s,t)||o.setStart(t.container(),t.offset())}));n||bO(t,n,false,o).each((t=>{o.setEnd(t.container(),t.offset())}));n&&o.collapse(true);return iO(e,o)?Optional.none():Optional.some(o)};const vO=(t,e)=>t.splitText(e);const CO=t=>{let e=t.startContainer,n=t.startOffset,o=t.endContainer,s=t.endOffset;if(e===o&&Na(e)){if(n>0&&n<e.data.length){o=vO(e,n);e=o.previousSibling;if(s>n){s-=n;const t=vO(o,s).previousSibling;e=o=t;s=t.data.length;n=0}else s=0}}else{if(Na(e)&&n>0&&n<e.data.length){e=vO(e,n);n=0}if(Na(o)&&s>0&&s<o.data.length){const t=vO(o,s).previousSibling;o=t;s=t.data.length}}return{startContainer:e,startOffset:n,endContainer:o,endOffset:s}};const wO=t=>{
/**
     * Walks the specified range like object and executes the callback for each sibling collection it finds.
     *
     * @private
     * @method walk
     * @param {RangeObject} rng Range like object.
     * @param {Function} callback Callback function to execute for each sibling collection.
     */
const e=(e,n)=>KC(t,e,n);
/**
     * Splits the specified range at it's start/end points.
     *
     * @private
     * @param {RangeObject} rng Range to split.
     * @return {RangeObject} Range position object.
     */const n=CO;
/**
     * Normalizes the specified range by finding the closest best suitable caret location.
     *
     * @private
     * @param {Range} rng Range to normalize.
     * @return {Boolean} True or false if the specified range was normalized or not.
     */const o=e=>yO(t,e).fold(H,(t=>{e.setStart(t.startContainer,t.startOffset);e.setEnd(t.endContainer,t.endOffset);return true}));
/**
     * Returns a range expanded around the entire word the provided selection was collapsed within.
     *
     * @method expand
     * @param {Range} rng The initial range to work from.
     * @param {Object} options Optional options provided to the expansion. Defaults to { type: 'word' }
     * @return {Range} Returns the expanded range.
     */const s=(e,n={type:"word"})=>{if(n.type==="word"){const n=qC(t,e,[{inline:"span"}],{includeTrailingSpace:false,expandToBlock:false});const o=t.createRng();o.setStart(n.startContainer,n.startOffset);o.setEnd(n.endContainer,n.endOffset);return o}return e};return{walk:e,split:n,expand:s,normalize:o}};
/**
   * Compares two ranges and checks if they are equal.
   *
   * @static
   * @method compareRanges
   * @param {RangeObject} rng1 First range to compare.
   * @param {RangeObject} rng2 First range to compare.
   * @return {Boolean} True or false if the ranges are equal.
   */wO.compareRanges=iO;
/**
   * Gets the caret range for the given x/y location.
   *
   * @static
   * @method getCaretRangeFromPoint
   * @param {Number} clientX X coordinate for range
   * @param {Number} clientY Y coordinate for range
   * @param {Document} doc Document that the x and y coordinates are relative to
   * @returns {Range} Caret range
   */wO.getCaretRangeFromPoint=aO;wO.getSelectedNode=em;wO.getNode=nm;const OO=(t,e)=>{const n=t.view(e);return n.fold(P([]),(e=>{const n=t.owner(e);const o=OO(t,n);return[e].concat(o)}))};const EO=(t,e)=>{const n=e.owner(t);return OO(e,n)};const xO=t=>{const e=t.dom===document?Optional.none():Optional.from(t.dom.defaultView?.frameElement);return e.map(fo.fromDom)};const kO=t=>Ko(t);var SO=Object.freeze({__proto__:null,view:xO,owner:kO});const _O=t=>{const e=Ss();const n=Nr(e);const o=EO(t,SO);const s=_r(t);const r=st(o,((t,e)=>{const n=_r(e);return{left:t.left+n.left,top:t.top+n.top}}),{left:0,top:0});return Er(r.left+s.left+n.left,r.top+s.top+n.top)};const NO=t=>Mo(t)==="textarea";const RO=(t,e)=>{const n=t.dispatch("ScrollIntoView",e);return n.isDefaultPrevented()};const AO=(t,e)=>{t.dispatch("AfterScrollIntoView",e)};const DO=(t,e)=>{const n=ss(t);if(n.length===0||NO(t))return{element:t,offset:e};if(e<n.length&&!NO(n[e]))return{element:n[e],offset:0};{const o=n[n.length-1];return NO(o)?{element:t,offset:e}:Mo(o)==="img"?{element:o,offset:1}:jo(o)?{element:o,offset:Lr(o).length}:{element:o,offset:ss(o).length}}};const TO=(t,e)=>{const n=Sr(t);const o=wr(t);return{element:t,bottom:n.top+o,height:o,pos:n,cleanup:e}};const BO=(t,e)=>{const n=DO(t,e);const o=fo.fromHtml('<span data-mce-bogus="all" style="display: inline-block;">'+ku+"</span>");Ds(n.element,o);return TO(o,(()=>Gs(o)))};const LO=t=>TO(fo.fromDom(t),T);const PO=(t,e,n,o)=>{UO(t,((s,r)=>IO(t,e,n,o)),n)};const MO=(t,e,n,o,s)=>{const r={elm:o.element.dom,alignToTop:s};if(RO(t,r))return;const c=Nr(e).top;n(t,e,c,o,s);AO(t,r)};const IO=(t,e,n,o)=>{const s=fo.fromDom(t.getBody());const r=fo.fromDom(t.getDoc());yr(s);const c=BO(fo.fromDom(n.startContainer),n.startOffset);MO(t,r,e,c,o);c.cleanup()};const FO=(t,e,n,o)=>{const s=fo.fromDom(t.getDoc());MO(t,s,n,LO(e),o)};const UO=(t,e,n)=>{const o=n.startContainer;const s=n.startOffset;const r=n.endContainer;const c=n.endOffset;e(fo.fromDom(o),fo.fromDom(r));const a=t.dom.createRng();a.setStart(o,s);a.setEnd(r,c);t.selection.setRng(n)};const zO=(t,e,n,o,s)=>{const r=e.pos;const c=30;if(o)Rr(r.left,Math.max(0,r.top-c),s);else{const o=r.top-n+e.height+c;Rr(-t.getBody().getBoundingClientRect().left,o,s)}};const $O=(t,e,n,o,s,r)=>{const c=o+n;const a=s.pos.top;const i=s.bottom;const l=i-a>=o;if(a<n)zO(t,s,o,r!==false,e);else if(a>c){const n=l?r!==false:r===true;zO(t,s,o,n,e)}else i>c&&!l&&zO(t,s,o,r===true,e)};const jO=(t,e,n,o,s)=>{const r=Go(e).dom.innerHeight;$O(t,e,n,r,o,s)};const HO=(t,e,n,o,s)=>{const r=Go(e).dom.innerHeight;$O(t,e,n,r,o,s);const c=_O(o.element);const a=ca(window);c.top<a.y?Ar(o.element,s!==false):c.top>a.bottom&&Ar(o.element,s===true)};const WO=(t,e,n)=>PO(t,jO,e,n);const VO=(t,e,n)=>FO(t,e,jO,n);const qO=(t,e,n)=>PO(t,HO,e,n);const KO=(t,e,n)=>FO(t,e,HO,n);const YO=(t,e,n)=>{const o=t.inline?VO:KO;o(t,e,n)};const GO=(t,e,n)=>{const o=t.inline?WO:qO;o(t,e,n)};const XO=(t,e)=>e.collapsed?t.isEditable(e.startContainer):t.isEditable(e.startContainer)&&t.isEditable(e.endContainer);const QO=(t,e,n,o,s)=>{const r=n?e.startContainer:e.endContainer;const c=n?e.startOffset:e.endOffset;return Optional.from(r).map(fo.fromDom).map((t=>o&&e.collapsed?t:rs(t,s(t,c)).getOr(t))).bind((t=>$o(t)?Optional.some(t):Xo(t).filter($o))).map((t=>t.dom)).getOr(t)};const ZO=(t,e,n=false)=>QO(t,e,true,n,((t,e)=>Math.min(is(t),e)));const JO=(t,e,n=false)=>QO(t,e,false,n,((t,e)=>e>0?e-1:e));const tE=(t,e)=>{const n=t;while(t&&Na(t)&&t.length===0)t=e?t.nextSibling:t.previousSibling;return t||n};const eE=(t,e)=>{if(!e)return t;let n=e.startContainer;let o=e.endContainer;const s=e.startOffset;const r=e.endOffset;let c=e.commonAncestorContainer;if(!e.collapsed){n===o&&r-s<2&&n.hasChildNodes()&&(c=n.childNodes[s]);if(Na(n)&&Na(o)){n=n.length===s?tE(n.nextSibling,true):n.parentNode;o=r===0?tE(o.previousSibling,false):o.parentNode;n&&n===o&&(c=n)}}const a=Na(c)?c.parentNode:c;return ba(a)?a:t};const nE=(t,e,n,o)=>{const s=[];const r=t.getRoot();const c=t.getParent(n||ZO(r,e,e.collapsed),t.isBlock);const a=t.getParent(o||JO(r,e,e.collapsed),t.isBlock);c&&c!==r&&s.push(c);if(c&&a&&c!==a){let e;const n=new DomTreeWalker(c,r);while((e=n.next())&&e!==a)t.isBlock(e)&&s.push(e)}a&&c!==a&&a!==r&&s.push(a);return s};const oE=(t,e,n)=>Optional.from(e).bind((e=>Optional.from(e.parentNode).map((o=>{const s=t.nodeIndex(e);const r=t.createRng();r.setStart(o,s);r.setEnd(o,s+1);if(n){qv(t,r,e,true);qv(t,r,e,false)}return r}))));const sE=(t,e)=>Z(e,(e=>{const n=t.dispatch("GetSelectionRange",{range:e});return n.range!==e?n.range:e}));const rE={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};const cE=(t,e,n)=>{const o=n?"lastChild":"firstChild";const s=n?"prev":"next";if(t[o])return t[o];if(t!==e){let n=t[s];if(n)return n;for(let o=t.parent;o&&o!==e;o=o.parent){n=o[s];if(n)return n}}};const aE=t=>{const e=t.value??"";if(!ia(e))return false;const n=t.parent;return!n||n.name==="span"&&!n.attr("style")||!/^[ ]+$/.test(e)};const iE=t=>{const e=t.name==="a"&&!t.attr("href")&&t.attr("id");return t.attr("name")||t.attr("id")&&!t.firstChild||t.attr("data-mce-bookmark")||e};class AstNode{
/**
     * Creates a node of a specific type.
     *
     * @static
     * @method create
     * @param {String} name Name of the node type to create for example "b" or "#text".
     * @param {Object} attrs Name/value collection of attributes that will be applied to elements.
     */
static create(t,e){const n=new AstNode(t,rE[t]||1);e&&kt(e,((t,e)=>{n.attr(e,t)}));return n}name;type;attributes;value;parent;firstChild;lastChild;next;prev;raw;
/**
     * Constructs a new Node instance.
     *
     * @constructor
     * @method Node
     * @param {String} name Name of the node type.
     * @param {Number} type Numeric type representing the node.
     */
constructor(t,e){this.name=t;this.type=e;if(e===1){this.attributes=[];this.attributes.map={}}}
/**
     * Replaces the current node with the specified one.
     *
     * @method replace
     * @param {tinymce.html.Node} node Node to replace the current node with.
     * @return {tinymce.html.Node} The old node that got replaced.
     * @example
     * someNode.replace(someNewNode);
     */replace(t){const e=this;t.parent&&t.remove();e.insert(t,e);e.remove();return e}attr(t,e){const n=this;if(!C(t)){N(t)&&kt(t,((t,e)=>{n.attr(e,t)}));return n}const o=n.attributes;if(o){if(e!==void 0){if(e===null){if(t in o.map){delete o.map[t];let e=o.length;while(e--)if(o[e].name===t){o.splice(e,1);return n}}return n}if(t in o.map){let n=o.length;while(n--)if(o[n].name===t){o[n].value=e;break}}else o.push({name:t,value:e});o.map[t]=e;return n}return o.map[t]}}clone(){const t=this;const e=new AstNode(t.name,t.type);const n=t.attributes;if(n){const t=[];t.map={};for(let e=0,o=n.length;e<o;e++){const o=n[e];if(o.name!=="id"){t[t.length]={name:o.name,value:o.value};t.map[o.name]=o.value}}e.attributes=t}e.value=t.value;return e}wrap(t){const e=this;if(e.parent){e.parent.insert(t,e);t.append(e)}return e}unwrap(){const t=this;for(let e=t.firstChild;e;){const n=e.next;t.insert(e,t,true);e=n}t.remove()}remove(){const t=this,e=t.parent,n=t.next,o=t.prev;if(e){if(e.firstChild===t){e.firstChild=n;n&&(n.prev=null)}else o&&(o.next=n);if(e.lastChild===t){e.lastChild=o;o&&(o.next=null)}else n&&(n.prev=o);t.parent=t.next=t.prev=null}return t}
/**
     * Appends a new node as a child of the current node.
     *
     * @method append
     * @param {tinymce.html.Node} node Node to append as a child of the current one.
     * @return {tinymce.html.Node} The node that got appended.
     * @example
     * node.append(someNode);
     */append(t){const e=this;t.parent&&t.remove();const n=e.lastChild;if(n){n.next=t;t.prev=n;e.lastChild=t}else e.lastChild=e.firstChild=t;t.parent=e;return t}
/**
     * Inserts a node at a specific position as a child of this node.
     *
     * @method insert
     * @param {tinymce.html.Node} node Node to insert as a child of this node.
     * @param {tinymce.html.Node} refNode Reference node to set node before/after.
     * @param {Boolean} before Optional state to insert the node before the reference node.
     * @return {tinymce.html.Node} The node that got inserted.
     * @example
     * parentNode.insert(newChildNode, oldChildNode);
     */insert(t,e,n){t.parent&&t.remove();const o=e.parent||this;if(n){e===o.firstChild?o.firstChild=t:e.prev&&(e.prev.next=t);t.prev=e.prev;t.next=e;e.prev=t}else{e===o.lastChild?o.lastChild=t:e.next&&(e.next.prev=t);t.next=e.next;t.prev=e;e.next=t}t.parent=o;return t}
/**
     * Get all descendants by name.
     *
     * @method getAll
     * @param {String} name Name of the descendant nodes to collect.
     * @return {Array} Array with descendant nodes matching the specified name.
     */getAll(t){const e=this;const n=[];for(let o=e.firstChild;o;o=cE(o,e))o.name===t&&n.push(o);return n}children(){const t=this;const e=[];for(let n=t.firstChild;n;n=n.next)e.push(n);return e}empty(){const t=this;if(t.firstChild){const e=[];for(let n=t.firstChild;n;n=cE(n,t))e.push(n);let n=e.length;while(n--){const t=e[n];t.parent=t.firstChild=t.lastChild=t.next=t.prev=null}}t.firstChild=t.lastChild=null;return t}
/**
     * Returns true/false if the node is to be considered empty or not.
     *
     * @method isEmpty
     * @param {Object} elements Name/value object with elements that are automatically treated as non empty elements.
     * @param {Object} whitespace Name/value object with elements that are automatically treated whitespace preservables.
     * @param {Function} predicate Optional predicate that gets called after the other rules determine that the node is empty. Should return true if the node is a content node.
     * @return {Boolean} true/false if the node is empty or not.
     * @example
     * node.isEmpty({ img: true });
     */isEmpty(t,e={},n){const o=this;let s=o.firstChild;if(iE(o))return false;if(s)do{if(s.type===1){if(s.attr("data-mce-bogus"))continue;if(t[s.name])return false;if(iE(s))return false}if(s.type===8)return false;if(s.type===3&&!aE(s))return false;if(s.type===3&&s.parent&&e[s.parent.name]&&ia(s.value??""))return false;if(n&&n(s))return false}while(s=cE(s,o));return true}
/**
     * Walks to the next or previous node and returns that node or null if it wasn't found.
     *
     * @method walk
     * @param {Boolean} prev Optional previous node state defaults to false.
     * @return {tinymce.html.Node} Node that is next to or previous of the current node.
     */walk(t){return cE(this,null,t)}}const lE=co.makeMap("NOSCRIPT STYLE SCRIPT XMP IFRAME NOEMBED NOFRAMES PLAINTEXT"," ");const dE=t=>C(t.nodeValue)&&t.nodeValue.includes(ku);const uE=t=>(t.length===0?"":`${Z(t,(t=>`[${t}]`)).join(",")},`)+'[data-mce-bogus="all"]';const mE=(t,e)=>e.querySelectorAll(uE(t));const fE=t=>document.createTreeWalker(t,NodeFilter.SHOW_COMMENT,(t=>dE(t)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP));const pE=t=>document.createTreeWalker(t,NodeFilter.SHOW_TEXT,(t=>{if(dE(t)){const e=t.parentNode;return e&&Pt(lE,e.nodeName)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}return NodeFilter.FILTER_SKIP}));const gE=t=>fE(t).nextNode()!==null;const hE=t=>pE(t).nextNode()!==null;const bE=(t,e)=>e.querySelector(uE(t))!==null;const yE=(t,e)=>{J(mE(t,e),(e=>{const n=fo.fromDom(e);js(n,"data-mce-bogus")==="all"?Gs(n):J(t,(t=>{Ws(n,t)&&Vs(n,t)}))}))};const vE=t=>{let e=t.nextNode();while(e!==null){e.nodeValue=null;e=t.nextNode()}};const CE=B(vE,fE);const wE=B(vE,pE);const OE=(t,e)=>{const n=[{condition:F(bE,e),action:F(yE,e)},{condition:gE,action:CE},{condition:hE,action:wE}];let o=t;let s=false;J(n,(({condition:e,action:n})=>{if(e(o)){if(!s){o=t.cloneNode(true);s=true}n(o)}}));return o};const EE=t=>{const e=gc(t,"[data-mce-bogus]");J(e,(t=>{const e=js(t,"data-mce-bogus");if(e==="all")Gs(t);else if(fu(t)){Ds(t,fo.fromText(Le));Gs(t)}else Xs(t)}))};const xE=t=>{const e=gc(t,"input");J(e,(t=>{Vs(t,"name")}))};const kE=(t,e)=>{const n=Pg(t);const o=new RegExp(`^(<${n}[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/${n}>[\r\n]*|<br \\/>[\r\n]*)$`);return e.replace(o,"")};const SE=(t,e)=>{const n=t.getDoc();const o=us(fo.fromDom(t.getBody()));const s=fo.fromTag("div",n);zs(s,"data-mce-bogus","all");mr(s,{position:"fixed",left:"-9999999px",top:"0"});rr(s,e.innerHTML);EE(s);xE(s);const r=fs(o);Ls(r,s);const c=_u(s.dom.innerText);Gs(s);return c};const _E=(t,e,n)=>{let o;o=e.format==="raw"?co.trim(_u(OE(n,t.serializer.getTempAttrs()).innerHTML)):e.format==="text"?SE(t,n):e.format==="tree"?t.serializer.serialize(n,e):kE(t,t.serializer.serialize(n,e));const s=e.format!=="text"&&!vu(fo.fromDom(n));return s&&C(o)?co.trim(o):o};const NE=(t,e)=>Optional.from(t.getBody()).fold(P(e.format==="tree"?new AstNode("body",11):""),(n=>_E(t,e,n)));const RE=co.makeMap;const AE=t=>{const e=[];t=t||{};const n=t.indent;const o=RE(t.indent_before||"");const s=RE(t.indent_after||"");const r=ul.getEncodeFunc(t.entity_encoding||"raw",t.entities);const c=t.element_format!=="xhtml";return{
/**
       * Writes a start element, such as `<p id="a">`.
       *
       * @method start
       * @param {String} name Name of the element.
       * @param {Array} attrs Optional array of objects containing an attribute name and value, or undefined if the element has no attributes.
       * @param {Boolean} empty Optional empty state if the tag should serialize as a void element. For example: `<img />`
       */
start:(t,a,i)=>{if(n&&o[t]&&e.length>0){const t=e[e.length-1];t.length>0&&t!=="\n"&&e.push("\n")}e.push("<",t);if(a)for(let t=0,n=a.length;t<n;t++){const n=a[t];e.push(" ",n.name,'="',r(n.value,true),'"')}e[e.length]=!i||c?">":" />";if(i&&n&&s[t]&&e.length>0){const t=e[e.length-1];t.length>0&&t!=="\n"&&e.push("\n")}},
/**
       * Writes an end element, such as `</p>`.
       *
       * @method end
       * @param {String} name Name of the element.
       */
end:t=>{let o;e.push("</",t,">");if(n&&s[t]&&e.length>0){o=e[e.length-1];o.length>0&&o!=="\n"&&e.push("\n")}},
/**
       * Writes a text node.
       *
       * @method text
       * @param {String} text String to write out.
       * @param {Boolean} raw Optional raw state. If true, the contents won't get encoded.
       */
text:(t,n)=>{t.length>0&&(e[e.length]=n?t:r(t))},
/**
       * Writes a cdata node, such as `<![CDATA[data]]>`.
       *
       * @method cdata
       * @param {String} text String to write out inside the cdata.
       */
cdata:t=>{e.push("<![CDATA[",t,"]]>")},
/**
       * Writes a comment node, such as `<!-- Comment -->`.
       *
       * @method comment
       * @param {String} text String to write out inside the comment.
       */
comment:t=>{e.push("\x3c!--",t,"--\x3e")},
/**
       * Writes a processing instruction (PI) node, such as `<?xml attr="value" ?>`.
       *
       * @method pi
       * @param {String} name Name of the pi.
       * @param {String} text String to write out inside the pi.
       */
pi:(t,o)=>{o?e.push("<?",t," ",r(o),"?>"):e.push("<?",t,"?>");n&&e.push("\n")},
/**
       * Writes a doctype node, such as `<!DOCTYPE data>`.
       *
       * @method doctype
       * @param {String} text String to write out inside the doctype.
       */
doctype:t=>{e.push("<!DOCTYPE",t,">",n?"\n":"")},reset:()=>{e.length=0},getContent:()=>e.join("").replace(/\n$/,"")}};const DE=(t={},e=Il())=>{const n=AE(t);t.validate=!("validate"in t)||t.validate;
/**
     * Serializes the specified node into a string.
     *
     * @method serialize
     * @param {tinymce.html.Node} node Node instance to serialize.
     * @return {String} String with HTML based on the DOM tree.
     * @example
     * tinymce.html.Serializer().serialize(tinymce.html.DomParser().parse('<p>text</p>'));
     */const o=o=>{const s=t.validate;const r={3:t=>{n.text(t.value??"",t.raw)},8:t=>{n.comment(t.value??"")},7:t=>{n.pi(t.name,t.value)},10:t=>{n.doctype(t.value??"")},4:t=>{n.cdata(t.value??"")},11:t=>{let e=t;if(e=e.firstChild)do{c(e)}while(e=e.next)}};n.reset();const c=t=>{const o=r[t.type];if(o)o(t);else{const o=t.name;const r=o in e.getVoidElements();let a=t.attributes;if(s&&a&&a.length>1){const n=[];n.map={};const o=e.getElementRule(t.name);if(o){for(let t=0,e=o.attributesOrder.length;t<e;t++){const e=o.attributesOrder[t];if(e in a.map){const t=a.map[e];n.map[e]=t;n.push({name:e,value:t})}}for(let t=0,e=a.length;t<e;t++){const e=a[t].name;if(!(e in n.map)){const t=a.map[e];n.map[e]=t;n.push({name:e,value:t})}}a=n}}n.start(o,a,r);if(ii(o)){C(t.value)&&n.text(t.value,true);n.end(o)}else if(!r){let e=t.firstChild;if(e){o!=="pre"&&o!=="textarea"||e.type!==3||e.value?.[0]!=="\n"||n.text("\n",true);do{c(e)}while(e=e.next)}n.end(o)}}};o.type!==1||t.inner?o.type===3?r[3](o):r[11](o):c(o);return n.getContent()};return{serialize:o}};const TE=new Set;(()=>{const t=["margin","margin-left","margin-right","margin-top","margin-bottom","padding","padding-left","padding-right","padding-top","padding-bottom","border","border-width","border-style","border-color","background","background-attachment","background-clip","background-image","background-origin","background-position","background-repeat","background-size","float","position","left","right","top","bottom","z-index","display","transform","width","max-width","min-width","height","max-height","min-height","overflow","overflow-x","overflow-y","text-overflow","vertical-align","transition","transition-delay","transition-duration","transition-property","transition-timing-function"];J(t,(t=>{TE.add(t)}))})();const BE=new Set;(()=>{const t=["background-color"];J(t,(t=>{BE.add(t)}))})();const LE=["font","text-decoration","text-emphasis"];const PE=(t,e)=>t.parseStyle(t.getAttrib(e,"style"));const ME=(t,e)=>Et(PE(t,e));const IE=t=>TE.has(t);const FE=t=>BE.has(t);const UE=(t,e)=>Q(ME(t,e),(t=>IE(t)));const zE=(t,e)=>UE(t,e)&&Q(ME(t,e),(t=>FE(t)));const $E=t=>nt(t,(t=>Q(LE,(e=>we(t,e)))));const jE=(t,e,n)=>{const o=ME(t,e);const s=ME(t,n);const r=o=>{const s=t.getStyle(e,o)??"";const r=t.getStyle(n,o)??"";return _e(s)&&_e(r)&&s!==r};return Q(o,(t=>{const e=e=>Q(e,(e=>e===t));if(!e(s)&&e(LE)){const t=$E(s);return Q(t,r)}return r(t)}))};const HE=(t,e,n)=>Optional.from(n.container()).filter(Na).exists((o=>{const s=t?0:-1;return e(o.data.charAt(n.offset()+s))}));const WE=F(HE,true,Dv);const VE=F(HE,false,Dv);const qE=t=>{const e=t.container();return Na(e)&&(e.data.length===0||Su(e.data)&&sw.isBookmarkNode(e.parentNode))};const KE=(t,e)=>n=>by(t?0:-1,n).filter(e).isSome();const YE=t=>Pa(t)&&fr(fo.fromDom(t),"display")==="block";const GE=t=>Fa(t)&&!xa(t);const XE=KE(true,YE);const QE=KE(false,YE);const ZE=KE(true,Ha);const JE=KE(false,Ha);const tx=KE(true,ka);const ex=KE(false,ka);const nx=KE(true,GE);const ox=KE(false,GE);const sx=t=>t.slice(0,-1);const rx=(t,e,n)=>Bo(e,t)?sx(Zo(t,(t=>n(t)||To(t,e)))):[];const cx=(t,e)=>rx(t,e,H);const ax=(t,e)=>[t].concat(cx(t,e));const ix=(t,e,n)=>Zy(t,e,n,qE);const lx=t=>e=>t.isBlock(Mo(e));const dx=(t,e,n)=>at(ax(fo.fromDom(e.container()),t),lx(n));const ux=(t,e,n,o)=>ix(t,e.dom,n).forall((t=>dx(e,n,o).fold((()=>!hy(t,n,e.dom)),(o=>!hy(t,n,e.dom)&&Bo(o,fo.fromDom(t.container()))))));const mx=(t,e,n,o)=>dx(e,n,o).fold((()=>ix(t,e.dom,n).forall((t=>!hy(t,n,e.dom)))),(e=>ix(t,e.dom,n).isNone()));const fx=F(mx,false);const px=F(mx,true);const gx=F(ux,false);const hx=F(ux,true);const bx=t=>Sy(t).exists(fu);const yx=(t,e,n,o)=>{const s=nt(ax(fo.fromDom(n.container()),e),(t=>o.isBlock(Mo(t))));const r=yt(s).getOr(e);return Xy(t,r.dom,n).filter(bx)};const vx=(t,e,n)=>Sy(e).exists(fu)||yx(true,t,e,n).isSome();const Cx=(t,e,n)=>_y(e).exists(fu)||yx(false,t,e,n).isSome();const wx=F(yx,false);const Ox=F(yx,true);const Ex=t=>Hm.isTextPosition(t)&&!t.isAtStart()&&!t.isAtEnd();const xx=(t,e,n)=>{const o=nt(ax(fo.fromDom(e.container()),t),(t=>n.isBlock(Mo(t))));return yt(o).getOr(t)};const kx=(t,e,n)=>Ex(e)?VE(e):VE(e)||ev(xx(t,e,n).dom,e).exists(VE);const Sx=(t,e,n)=>Ex(e)?WE(e):WE(e)||tv(xx(t,e,n).dom,e).exists(WE);const _x=t=>X(["pre","pre-wrap"],t);const Nx=t=>Sy(t).bind((t=>jr(t,$o))).exists((t=>_x(fr(t,"white-space"))));const Rx=(t,e)=>ev(t.dom,e).isNone();const Ax=(t,e)=>tv(t.dom,e).isNone();const Dx=(t,e,n)=>Rx(t,e)||Ax(t,e)||fx(t,e,n)||px(t,e,n)||Cx(t,e,n)||vx(t,e,n);const Tx=t=>N(t)&&Fa(t)&&oy(t);const Bx=(t,e)=>n=>Tx(new DomTreeWalker(n,t)[e]());const Lx=(t,e)=>{const n=tv(t.dom,e).getOr(e);const o=Bx(t.dom,"next");return e.isAtEnd()&&(o(e.container())||o(n.container()))};const Px=(t,e)=>{const n=ev(t.dom,e).getOr(e);const o=Bx(t.dom,"prev");return e.isAtStart()&&(o(e.container())||o(n.container()))};const Mx=(t,e,n)=>!Nx(e)&&(Dx(t,e,n)||kx(t,e,n)||Sx(t,e,n));const Ix=(t,e,n)=>!Nx(e)&&(fx(t,e,n)||gx(t,e,n)||Cx(t,e,n)||kx(t,e,n)||Px(t,e));const Fx=t=>{const e=t.container();const n=t.offset();return Na(e)&&n<e.data.length?Hm(e,n+1):t};const Ux=(t,e,n)=>!Nx(e)&&(px(t,e,n)||hx(t,e,n)||vx(t,e,n)||Sx(t,e,n)||Lx(t,e));const zx=(t,e,n)=>Ix(t,e,n)||Ux(t,Fx(e),n);const $x=(t,e)=>Av(t.charAt(e));const jx=(t,e)=>Dv(t.charAt(e));const Hx=t=>{const e=t.container();return Na(e)&&Ce(e.data,Pe)};const Wx=t=>{const e=t.split("");return Z(e,((t,n)=>Av(t)&&n>0&&n<e.length-1&&Tv(e[n-1])&&Tv(e[n+1])?" ":t)).join("")};const Vx=(t,e,n,o)=>{const s=e.data;const r=Hm(e,0);if(n||!$x(s,0)||zx(t,r,o)){if(n&&jx(s,0)&&Ix(t,r,o)){e.data=Pe+s.slice(1);return true}return false}e.data=" "+s.slice(1);return true};const qx=t=>{const e=t.data;const n=Wx(e);if(n!==e){t.data=n;return true}return false};const Kx=(t,e,n,o)=>{const s=e.data;const r=Hm(e,s.length-1);if(n||!$x(s,s.length-1)||zx(t,r,o)){if(n&&jx(s,s.length-1)&&Ux(t,r,o)){e.data=s.slice(0,-1)+Pe;return true}return false}e.data=s.slice(0,-1)+" ";return true};const Yx=(t,e,n)=>{const o=e.container();if(!Na(o))return Optional.none();if(Hx(e)){const s=Vx(t,o,false,n)||qx(o)||Kx(t,o,false,n);return de(s,e)}if(zx(t,e,n)){const s=Vx(t,o,true,n)||Kx(t,o,true,n);return de(s,e)}return Optional.none()};const Gx=t=>{const e=fo.fromDom(t.getBody());t.selection.isCollapsed()&&Yx(e,Hm.fromRangeStart(t.selection.getRng()),t.schema).each((e=>{t.selection.setRng(e.toRange())}))};const Xx=(t,e,n,o)=>{if(n===0)return;const s=fo.fromDom(t);const r=$r(s,(t=>o.isBlock(Mo(t)))).getOr(s);const c=t.data.slice(e,e+n);const a=e+n>=t.data.length&&Ux(r,Hm(t,t.data.length),o);const i=e===0&&Ix(r,Hm(t,0),o);t.replaceData(e,n,fa(c,4,i,a))};const Qx=(t,e,n)=>{const o=t.data.slice(e);const s=o.length-ke(o).length;Xx(t,e,s,n)};const Zx=(t,e,n)=>{const o=t.data.slice(0,e);const s=o.length-Se(o).length;Xx(t,e-s,s,n)};const Jx=(t,e,n,o,s=true)=>{const r=Se(t.data).length;const c=s?t:e;const a=s?e:t;s?c.appendData(a.data):c.insertData(0,a.data);Gs(fo.fromDom(a));o&&Qx(c,r,n);return c};const tk=(t,e)=>{const n=t.container();const o=t.offset();return!Hm.isTextPosition(t)&&n===e.parentNode&&o>Hm.before(e).offset()};const ek=(t,e)=>tk(e,t)?Hm(e.container(),e.offset()-1):e;const nk=t=>Na(t)?Hm(t,0):Hm.before(t);const ok=t=>Na(t)?Hm(t,t.data.length):Hm.after(t);const sk=t=>hm(t.previousSibling)?Optional.some(ok(t.previousSibling)):t.previousSibling?ov(t.previousSibling):Optional.none();const rk=t=>hm(t.nextSibling)?Optional.some(nk(t.nextSibling)):t.nextSibling?nv(t.nextSibling):Optional.none();const ck=(t,e)=>Optional.from(e.previousSibling?e.previousSibling:e.parentNode).bind((e=>ev(t,Hm.before(e)))).orThunk((()=>tv(t,Hm.after(e))));const ak=(t,e)=>tv(t,Hm.after(e)).orThunk((()=>ev(t,Hm.before(e))));const ik=(t,e)=>sk(e).orThunk((()=>rk(e))).orThunk((()=>ck(t,e)));const lk=(t,e)=>rk(e).orThunk((()=>sk(e))).orThunk((()=>ak(t,e)));const dk=(t,e,n)=>t?lk(e,n):ik(e,n);const uk=(t,e,n)=>dk(t,e,n).map(F(ek,n));const mk=(t,e,n)=>{n.fold((()=>{t.focus()}),(n=>{t.selection.setRng(n.toRange(),e)}))};const fk=t=>e=>e.dom===t;const pk=(t,e)=>e&&Pt(t.schema.getBlockElements(),Mo(e));const gk=(t,e,n)=>{if(ri(t,e)){const t=fo.fromHtml('<br data-mce-bogus="1">');n?J(ss(e),(t=>{AC(t)||Gs(t)})):Ys(e);Ls(e,t);return Optional.some(Hm.before(t.dom))}return Optional.none()};const hk=(t,e,n,o)=>{const s=ts(t).filter(jo);const r=es(t).filter(jo);Gs(t);return ie(s,r,e,((t,e,s)=>{const r=t.dom,c=e.dom;const a=r.data.length;Jx(r,c,n,o);return s.container()===c?Hm(r,a):s})).orThunk((()=>{if(o){s.each((t=>Zx(t.dom,t.dom.length,n)));r.each((t=>Qx(t.dom,0,n)))}return e}))};const bk=(t,e)=>Pt(t.schema.getTextInlineElements(),Mo(e));const yk=(t,e,n,o=true,s=false)=>{const r=uk(e,t.getBody(),n.dom);const c=$r(n,F(pk,t),fk(t.getBody()));const a=hk(n,r,t.schema,bk(t,n));if(t.dom.isEmpty(t.getBody())){t.setContent("");t.selection.setCursorLocation()}else c.bind((e=>gk(t.schema,e,s))).fold((()=>{o&&mk(t,e,a)}),(n=>{o&&mk(t,e,Optional.some(n))}))};const vk=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/;const Ck=t=>vk.test(t);const wk=(t,e)=>No(fo.fromDom(e),ih(t))&&!Ni(t.schema,e)&&t.dom.isEditable(e);const Ok=t=>wd.DOM.getStyle(t,"direction",true)==="rtl"||Ck(t.textContent??"");const Ek=(t,e,n)=>nt(wd.DOM.getParents(n.container(),"*",e),t);const xk=(t,e,n)=>{const o=Ek(t,e,n);return Optional.from(o[o.length-1])};const kk=(t,e,n)=>{const o=gy(e,t);const s=gy(n,t);return N(o)&&o===s};const Sk=t=>Mu(t)||Iu(t);const _k=(t,e)=>{const n=e.container(),o=e.offset();return t?Tu(n)?Na(n.nextSibling)?Hm(n.nextSibling,0):Hm.after(n):Mu(e)?Hm(n,o+1):e:Tu(n)?Na(n.previousSibling)?Hm(n.previousSibling,n.previousSibling.data.length):Hm.before(n):Iu(e)?Hm(n,o-1):e};const Nk=F(_k,true);const Rk=F(_k,false);const Ak=(t,e)=>{const n=t=>t.stopImmediatePropagation();t.on("beforeinput input",n,true);t.getDoc().execCommand(e);t.off("beforeinput input",n)};const Dk=t=>{t.execCommand("delete")};const Tk=t=>Ak(t,"Delete");const Bk=t=>Ak(t,"ForwardDelete");const Lk=t=>e=>se(Xo(e),t,To);const Pk=t=>pu(t)||hu(t);const Mk=(t,e)=>Bo(t,e)?jr(e,Pk,Lk(t)):Optional.none();const Ik=(t,e=true)=>{t.dom.isEmpty(t.getBody())&&t.setContent("",{no_selection:!e})};const Fk=(t,e,n)=>ae(nv(n),ov(n),((o,s)=>{const r=_k(true,o);const c=_k(false,s);const a=_k(false,e);return t?tv(n,a).exists((t=>t.isEqual(c)&&e.isEqual(r))):ev(n,a).exists((t=>t.isEqual(r)&&e.isEqual(c)))})).getOr(true);const Uk=t=>{const e=Uo(t)?ts(t):as(t);return e.bind(Uk).orThunk((()=>Optional.some(t)))};const zk=(t,e,n,o=true)=>{e.deleteContents();const s=Uk(n).getOr(n);const r=fo.fromDom(t.dom.getParent(s.dom,t.dom.isBlock)??n.dom);if(r.dom===t.getBody())Ik(t,o);else if(ri(t.schema,r,{checkRootAsContent:false})){Eu(r);o&&t.selection.setCursorLocation(r.dom,0)}if(!To(n,r)){const e=se(Xo(r),n)?[]:Jo(r);J(e.concat(ss(n)),(e=>{To(e,r)||Bo(e,r)||!ri(t.schema,e)||Gs(e)}))}};const $k=t=>e=>To(t,e);const jk=t=>gc(t,"td,th");const Hk=(t,e)=>zv(fo.fromDom(t),e);const Wk=t=>ae(t.startTable,t.endTable,((e,n)=>{const o=yc(e,(t=>To(t,n)));const s=yc(n,(t=>To(t,e)));return o||s?{...t,startTable:o?Optional.none():t.startTable,endTable:s?Optional.none():t.endTable,isSameTable:false,isMultiTable:false}:t})).getOr(t);const Vk=t=>Wk(t);const qk=(t,e)=>{const n=Hk(t.startContainer,e);const o=Hk(t.endContainer,e);const s=n.isSome();const r=o.isSome();const c=ae(n,o,To).getOr(false);const a=!c&&s&&r;return Vk({startTable:n,endTable:o,isStartInTable:s,isEndInTable:r,isSameTable:c,isMultiTable:a})};const Kk=(t,e)=>({start:t,end:e});const Yk=(t,e,n)=>({rng:t,table:e,cells:n});const Gk=Ut.generate([{singleCellTable:["rng","cell"]},{fullTable:["table"]},{partialTable:["cells","outsideDetails"]},{multiTable:["startTableCells","endTableCells","betweenRng"]}]);const Xk=(t,e)=>Yr(fo.fromDom(t),"td,th",e);const Qk=t=>!To(t.start,t.end);const Zk=(t,e)=>zv(t.start,e).bind((n=>zv(t.end,e).bind((t=>de(To(n,t),n)))));const Jk=(t,e)=>!Qk(t)&&Zk(t,e).exists((t=>{const e=t.dom.rows;return e.length===1&&e[0].cells.length===1}));const tS=(t,e)=>{const n=Xk(t.startContainer,e);const o=Xk(t.endContainer,e);return ae(n,o,Kk)};const eS=t=>e=>zv(e,t).bind((t=>vt(jk(t)).map((t=>Kk(e,t)))));const nS=t=>e=>zv(e,t).bind((t=>yt(jk(t)).map((t=>Kk(t,e)))));const oS=t=>e=>Zk(e,t).map((t=>Yk(e,t,jk(t))));const sS=(t,e,n,o)=>{if(n.collapsed||!t.forall(Qk))return Optional.none();if(e.isSameTable){const e=t.bind(oS(o));return Optional.some({start:e,end:e})}{const t=Xk(n.startContainer,o);const e=Xk(n.endContainer,o);const s=t.bind(eS(o)).bind(oS(o));const r=e.bind(nS(o)).bind(oS(o));return Optional.some({start:s,end:r})}};const rS=(t,e)=>it(t,(t=>To(t,e)));const cS=t=>ae(rS(t.cells,t.rng.start),rS(t.cells,t.rng.end),((e,n)=>t.cells.slice(e,n+1)));const aS=(t,e,n)=>t.exists((t=>Jk(t,n)&&Vv(t.start,e)));const iS=(t,e)=>{const{startTable:n,endTable:o}=e;const s=t.cloneRange();n.each((t=>s.setStartAfter(t.dom)));o.each((t=>s.setEndBefore(t.dom)));return s};const lS=(t,e,n,o)=>sS(t,e,n,o).bind((({start:t,end:e})=>t.or(e))).bind((t=>{const{isSameTable:o}=e;const s=cS(t).getOr([]);if(o&&t.cells.length===s.length)return Optional.some(Gk.fullTable(t.table));if(s.length>0){if(o)return Optional.some(Gk.partialTable(s,Optional.none()));{const t=iS(n,e);return Optional.some(Gk.partialTable(s,Optional.some({...e,rng:t})))}}return Optional.none()}));const dS=(t,e,n,o)=>sS(t,e,n,o).bind((({start:t,end:o})=>{const s=t.bind(cS).getOr([]);const r=o.bind(cS).getOr([]);if(s.length>0&&r.length>0){const t=iS(n,e);return Optional.some(Gk.multiTable(s,r,t))}return Optional.none()}));const uS=(t,e)=>{const n=$k(t);const o=tS(e,n);const s=qk(e,n);return aS(o,e,n)?o.map((t=>Gk.singleCellTable(e,t.start))):s.isMultiTable?dS(o,s,e,n):lS(o,s,e,n)};const mS=t=>J(t,(t=>{Vs(t,"contenteditable");Eu(t)}));const fS=(t,e)=>Optional.from(t.dom.getParent(e,t.dom.isBlock)).map(fo.fromDom);const pS=(t,e,n)=>{n.each((n=>{if(e)Gs(n);else{Eu(n);t.selection.setCursorLocation(n.dom,0)}}))};const gS=(t,e,n,o)=>{const s=n.cloneRange();if(o){s.setStart(n.startContainer,n.startOffset);s.setEndAfter(e.dom.lastChild)}else{s.setStartBefore(e.dom.firstChild);s.setEnd(n.endContainer,n.endOffset)}vS(t,s,e,false).each((t=>t()))};const hS=t=>{const e=Uv(t);const n=fo.fromDom(t.selection.getNode());za(n.dom)&&ri(t.schema,n)?t.selection.setCursorLocation(n.dom,0):t.selection.collapse(true);e.length>1&&Q(e,(t=>To(t,n)))&&zs(n,"data-mce-selected","1")};const bS=(t,e,n)=>Optional.some((()=>{const o=t.selection.getRng();const s=n.bind((({rng:n,isStartInTable:s})=>{const r=fS(t,s?n.endContainer:n.startContainer);n.deleteContents();pS(t,s,r.filter(F(ri,t.schema)));const c=s?e[0]:e[e.length-1];gS(t,c,o,s);return ri(t.schema,c)?Optional.none():Optional.some(s?e.slice(1):e.slice(0,-1))})).getOr(e);mS(s);hS(t)}));const yS=(t,e,n,o)=>Optional.some((()=>{const s=t.selection.getRng();const r=e[0];const c=n[n.length-1];gS(t,r,s,true);gS(t,c,s,false);const a=ri(t.schema,r)?e:e.slice(1);const i=ri(t.schema,c)?n:n.slice(0,-1);mS(a.concat(i));o.deleteContents();hS(t)}));const vS=(t,e,n,o=true)=>Optional.some((()=>{zk(t,e,n,o)}));const CS=(t,e)=>Optional.some((()=>yk(t,false,e)));const wS=(t,e,n)=>uS(e,n).bind((e=>e.fold(F(vS,t),F(CS,t),F(bS,t),F(yS,t))));const OS=(t,e)=>NS(t,e);const ES=(t,e,n,o)=>SS(e,o).fold((()=>wS(t,e,n)),(e=>OS(t,e)));const xS=(t,e,n)=>{const o=fo.fromDom(t.getBody());const s=t.selection.getRng();return n.length!==0?bS(t,n,Optional.none()):ES(t,o,s,e)};const kS=(t,e)=>at(ax(e,t),yu);const SS=(t,e)=>at(ax(e,t),Vo("caption"));const _S=(t,e,n,o,s)=>Qy(n,t.getBody(),s).bind((t=>kS(e,fo.fromDom(t.getNode())).bind((t=>To(t,o)?Optional.none():Optional.some(T)))));const NS=(t,e)=>Optional.some((()=>{Eu(e);t.selection.setCursorLocation(e.dom,0)}));const RS=(t,e,n,o)=>nv(t.dom).bind((s=>ov(t.dom).map((t=>e?n.isEqual(s)&&o.isEqual(t):n.isEqual(t)&&o.isEqual(s))))).getOr(true);const AS=(t,e)=>NS(t,e);const DS=(t,e,n)=>SS(t,fo.fromDom(n.getNode())).fold((()=>Optional.some(T)),(t=>de(!To(t,e),T)));const TS=(t,e,n,o,s)=>Qy(n,t.getBody(),s).fold((()=>Optional.some(T)),(r=>RS(o,n,s,r)?AS(t,o):DS(e,o,r)));const BS=(t,e,n,o)=>{const s=Hm.fromRangeStart(t.selection.getRng());return kS(n,o).bind((o=>ri(t.schema,o,{checkRootAsContent:false})?NS(t,o):_S(t,n,e,o,s)))};const LS=(t,e,n,o)=>{const s=Hm.fromRangeStart(t.selection.getRng());return ri(t.schema,o)?NS(t,o):TS(t,n,e,o,s)};const PS=(t,e)=>t?tx(e):ex(e);const MS=(t,e)=>{const n=Hm.fromRangeStart(t.selection.getRng());return PS(e,n)||Xy(e,t.getBody(),n).exists((t=>PS(e,t)))};const IS=(t,e,n)=>{const o=fo.fromDom(t.getBody());return SS(o,n).fold((()=>BS(t,e,o,n).orThunk((()=>de(MS(t,e),T)))),(n=>LS(t,e,o,n)))};const FS=(t,e)=>{const n=fo.fromDom(t.selection.getStart(true));const o=Uv(t);return t.selection.isCollapsed()&&o.length===0?IS(t,e,n):xS(t,n,o)};const US=(t,e)=>{let n=e;while(n&&n!==t){if(Ia(n)||Fa(n))return n;n=n.parentNode}return null};const zS=["data-ephox-","data-mce-","data-alloy-","data-snooker-","_"];const $S=co.each;const jS=t=>{const e=t.dom;const n=new Set(t.serializer.getTempAttrs());
/**
     * Compares two nodes and checks if it's attributes and styles matches.
     * This doesn't compare classes as items since their order is significant.
     *
     * @method compare
     * @param {Node} node1 First node to compare with.
     * @param {Node} node2 Second node to compare with.
     * @return {Boolean} True/false if the nodes are the same or not.
     */const o=(t,n)=>{if(t.nodeName!==n.nodeName||t.nodeType!==n.nodeType)return false;
/**
       * Returns all the nodes attributes excluding internal ones, styles and classes.
       *
       * @private
       * @param {Node} node Node to get attributes from.
       * @return {Object} Name/value object with attributes and attribute values.
       */const o=t=>{const n={};$S(e.getAttribs(t),(o=>{const r=o.nodeName.toLowerCase();r==="style"||s(r)||(n[r]=e.getAttrib(t,r))}));return n};
/**
       * Compares two objects checks if it's key + value exists in the other one.
       *
       * @private
       * @param {Object} obj1 First object to compare.
       * @param {Object} obj2 Second object to compare.
       * @return {Boolean} True/false if the objects matches or not.
       */const r=(t,e)=>{for(const n in t)if(Pt(t,n)){const o=e[n];if(S(o))return false;if(t[n]!==o)return false;delete e[n]}for(const t in e)if(Pt(e,t))return false;return true};if(ha(t)&&ha(n)){if(!r(o(t),o(n)))return false;if(!r(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(n,"style"))))return false}return!Nv(t)&&!Nv(n)};const s=t=>Q(zS,(e=>we(t,e)))||n.has(t);return{compare:o,isAttributeInternal:s}};const HS=(t,e)=>{if(Na(t))return{container:t,offset:e};const n=wO.getNode(t,e);return Na(n)?{container:n,offset:e>=t.childNodes.length?n.data.length:0}:n.previousSibling&&Na(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&Na(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:t,offset:e}};const WS=t=>{const e=t.cloneRange();const n=HS(t.startContainer,t.startOffset);e.setStart(n.container,n.offset);const o=HS(t.endContainer,t.endOffset);e.setEnd(o.container,o.offset);return e};const VS=wd.DOM;const qS=()=>VS.create("span",{"data-mce-type":"bookmark"});const KS=(t,e,n)=>{if(ha(t)){const o=n();t.hasChildNodes()?e===t.childNodes.length?t.appendChild(o):t.insertBefore(o,t.childNodes[e]):t.appendChild(o);return{container:o,offset:0}}return{container:t,offset:e}};const YS=(t,e)=>{const n=t=>{let e=t.parentNode?.firstChild;let n=0;while(e){if(e===t)return n;ha(e)&&e.getAttribute("data-mce-type")==="bookmark"||n++;e=e.nextSibling}return-1};if(ha(t)&&N(t.parentNode)){const o=t;e=n(t);t=t.parentNode;VS.remove(o);!t.hasChildNodes()&&VS.isBlock(t)&&t.appendChild(VS.create("br"))}return{container:t,offset:e}};const GS=(t,e,n,o)=>{const s=VS.createRng();s.setStart(t,e);s.setEnd(n,o);return WS(s)};const XS=(t,e=qS)=>{const{container:n,offset:o}=KS(t.startContainer,t.startOffset,e);if(t.collapsed)return{startContainer:n,startOffset:o};{const{container:s,offset:r}=KS(t.endContainer,t.endOffset,e);return{startContainer:n,startOffset:o,endContainer:s,endOffset:r}}};const QS=t=>{const{container:e,offset:n}=YS(t.startContainer,t.startOffset);if(S(t.endContainer)||S(t.endOffset))return GS(e,n,e,n);{const{container:o,offset:s}=YS(t.endContainer,t.endOffset);return GS(e,n,o,s)}};const ZS=(t,e,n,o)=>{co.each(n.styles,((n,s)=>{t.setStyle(e,s,mC(n,o))}));if(n.styles){const n=t.getAttrib(e,"style");n&&t.setAttrib(e,"data-mce-style",n)}};const JS=(t,e,n,o,s)=>{const r=t.dom;R(n.onformat)&&n.onformat(e,n,o,s);ZS(r,e,n,o);co.each(n.attributes,((t,n)=>{r.setAttrib(e,n,mC(t,o))}));co.each(n.classes,(t=>{const n=mC(t,o);r.hasClass(e,n)||r.addClass(e,n)}))};const t_=t=>!E(t.attributes)&&!E(t.styles);const e_=fC;const n_=(t,e,n)=>{const o=t.formatter.get(n);if(o)for(let n=0;n<o.length;n++){const s=o[n];if(xC(s)&&s.inherit===false&&t.dom.is(e,s.selector))return true}return false};const o_=(t,e,n,o,s)=>{const r=t.dom.getRoot();if(e===r)return false;const c=t.dom.getParent(e,(e=>!!n_(t,e,n)||(e.parentNode===r||!!c_(t,e,n,o,true))));return!!c_(t,c,n,o,s)};const s_=(t,e,n)=>!(!kC(n)||!e_(e,n.inline))||(!(!wC(n)||!e_(e,n.block))||!!xC(n)&&(ha(e)&&t.is(e,n.selector)));const r_=(t,e,n,o,s,r)=>{const c=n[o];const a=o==="attributes";if(R(n.onmatch))return n.onmatch(e,n,o);if(c)if(ze(c)){for(let n=0;n<c.length;n++)if(a?t.getAttrib(e,c[n]):gC(t,e,c[n]))return true}else for(const o in c)if(Pt(c,o)){const i=a?t.getAttrib(e,o):gC(t,e,o);const l=mC(c[o],r);const d=_(i)||Ne(i);if(d&&_(l))continue;if(s&&d&&!n.exact)return false;if((!s||n.exact)&&!e_(i,pC(l,o)))return false}return true};const c_=(t,e,n,o,s)=>{const r=t.formatter.get(n);const c=t.dom;if(r&&ha(e))for(let n=0;n<r.length;n++){const a=r[n];if(s_(t.dom,e,a)&&r_(c,e,a,"attributes",s,o)&&r_(c,e,a,"styles",s,o)){const n=a.classes;if(n)for(let s=0;s<n.length;s++)if(!t.dom.hasClass(e,mC(n[s],o)))return;return a}}};const a_=(t,e,n,o,s)=>{if(o)return o_(t,o,e,n,s);o=t.selection.getNode();if(o_(t,o,e,n,s))return true;const r=t.selection.getStart();return!(r===o||!o_(t,r,e,n,s))};const i_=(t,e,n)=>{const o=[];const s={};const r=t.selection.getStart();t.dom.getParent(r,(r=>{for(let c=0;c<e.length;c++){const a=e[c];if(!s[a]&&c_(t,r,a,n)){s[a]=true;o.push(a)}}}),t.dom.getRoot());return o};const l_=(t,e)=>{const n=e=>To(e,fo.fromDom(t.getBody()));const o=(e,n)=>c_(t,e.dom,n)?Optional.some(n):Optional.none();return Optional.from(t.selection.getStart(true)).bind((t=>xc(fo.fromDom(t),(t=>wt(e,(e=>o(t,e)))),n))).getOrNull()};const d_=(t,e)=>{const n=t.formatter.get(e);const o=t.dom;if(n&&t.selection.isEditable()){const e=t.selection.getStart();const s=bC(o,e);for(let t=n.length-1;t>=0;t--){const e=n[t];if(!xC(e))return true;for(let t=s.length-1;t>=0;t--)if(o.is(s[t],e.selector))return true}}return false};const u_=(t,e,n)=>rt(n,((n,o)=>{const s=vC(t,o);return t.formatter.matchNode(e,o,{},s)?n.concat([o]):n}),[]);const m_=ku;const f_=(t,e)=>t.importNode(e,true);const p_=t=>{if(t){const e=new DomTreeWalker(t,t);for(let t=e.current();t;t=e.next())if(Na(t))return t}return null};const g_=t=>{const e=fo.fromTag("span");$s(e,{id:sv,"data-mce-bogus":"1","data-mce-type":"format-caret"});t&&Ls(e,fo.fromText(m_));return e};const h_=t=>{const e=p_(t);e&&e.data.charAt(0)===m_&&e.deleteData(0,1);return e};const b_=(t,e,n)=>{const o=t.dom,s=t.selection;if(RC(e))yk(t,false,fo.fromDom(e),n,true);else{const t=s.getRng();const n=o.getParent(e,o.isBlock);const r=t.startContainer;const c=t.startOffset;const a=t.endContainer;const i=t.endOffset;const l=h_(e);o.remove(e,true);r===l&&c>0&&t.setStart(l,c-1);a===l&&i>0&&t.setEnd(l,i-1);n&&o.isEmpty(n)&&Eu(fo.fromDom(n));s.setRng(t)}};const y_=(t,e,n)=>{const o=t.dom,s=t.selection;if(e)b_(t,e,n);else{e=cv(t.getBody(),s.getStart());if(!e)while(e=o.get(sv))b_(t,e,n)}};const v_=(t,e,n)=>{const o=t.dom;const s=o.getParent(n,F(cC,t.schema));if(s&&o.isEmpty(s))n.parentNode?.replaceChild(e,n);else{wu(fo.fromDom(n));o.isEmpty(n)?n.parentNode?.replaceChild(e,n):o.insertAfter(e,n)}};const C_=(t,e)=>{t.appendChild(e);return e};const w_=(t,e)=>{const n=st(t,((t,e)=>C_(t,e.cloneNode(false))),e);const o=n.ownerDocument??document;return C_(n,o.createTextNode(m_))};const O_=(t,e,n,o,s,r)=>{const c=t.formatter;const a=t.dom;const i=nt(Et(c.get()),(t=>t!==o&&!Ce(t,"removeformat")));const l=u_(t,n,i);const d=nt(l,(e=>!CC(t,e,o)));if(d.length>0){const t=n.cloneNode(false);a.add(e,t);c.remove(o,s,t,r);a.remove(t);return Optional.some(t)}return Optional.none()};const E_=t=>Mr(t,Lr(t).replace(new RegExp(`${Pe}$`)," "));const x_=(t,e)=>{const n=()=>{e===null||t.dom.isEmpty(e)||ts(fo.fromDom(e)).each((t=>{jo(t)?E_(t):Vr(t,(t=>jo(t))).each((t=>{jo(t)&&E_(t)}))}))};t.once("input",(e=>{e.data&&!Dv(e.data)&&(e.isComposing?t.once("compositionend",(()=>{n()})):n())}))};const k_=(t,e,n)=>{let o;const s=t.selection;const r=t.formatter.get(e);if(!r)return;const c=s.getRng();let a=c.startOffset;const i=c.startContainer;const l=i.nodeValue;o=cv(t.getBody(),s.getStart());const d=/[^\s\u00a0\u00ad\u200b\ufeff]/;if(l&&a>0&&a<l.length&&d.test(l.charAt(a))&&d.test(l.charAt(a-1))){const o=s.getBookmark();c.collapse(true);let a=qC(t.dom,c,r);a=CO(a);t.formatter.apply(e,n,a);s.moveToBookmark(o)}else{let r=o?p_(o):null;if(o&&r?.data===m_)t.formatter.apply(e,n,o);else{o=f_(t.getDoc(),g_(true).dom);r=o.firstChild;c.insertNode(o);a=1;x_(t,o);t.formatter.apply(e,n,o)}s.setCursorLocation(r,a)}};const S_=(t,e,n,o)=>{const s=t.dom;const r=t.selection;let c=false;const a=t.formatter.get(e);if(!a)return;const i=r.getRng();const l=i.startContainer;const d=i.startOffset;let u=l;if(Na(l)){d!==l.data.length&&(c=true);u=u.parentNode}const m=[];let f;while(u){if(c_(t,u,e,n,o)){f=u;break}u.nextSibling&&(c=true);m.push(u);u=u.parentNode}if(f)if(c){const c=r.getBookmark();i.collapse(true);let l=qC(s,i,a,{includeTrailingSpace:true});l=CO(l);t.formatter.remove(e,n,l,o);r.moveToBookmark(c)}else{const c=cv(t.getBody(),f);const a=N(c)?s.getParents(f.parentNode,W,c):[];const i=g_(false).dom;v_(t,i,c??f);const l=O_(t,i,f,e,n,o);const d=w_([...m,...l.toArray(),...a],i);c&&b_(t,c,N(c));r.setCursorLocation(d,1);x_(t,i);s.isEmpty(f)&&s.remove(f)}};const __=(t,e,n)=>{const o=t.selection,s=t.getBody();y_(t,null,n);e!==8&&e!==46||!o.isCollapsed()||o.getStart().innerHTML!==m_||y_(t,cv(s,o.getStart()),true);e!==37&&e!==39||y_(t,cv(s,o.getStart()),true)};const N_=t=>Na(t)&&Oe(t.data,Pe);const R_=t=>{t.on("mouseup keydown",(e=>{__(t,e.keyCode,N_(t.selection.getRng().endContainer))}))};const A_=t=>{const e=g_(false);const n=w_(t,e.dom);return{caretContainer:e,caretPosition:Hm(n,0)}};const D_=(t,e)=>{const{caretContainer:n,caretPosition:o}=A_(e);Ds(fo.fromDom(t),n);Gs(fo.fromDom(t));return o};const T_=(t,e)=>{const{caretContainer:n,caretPosition:o}=A_(e);t.insertNode(n.dom);return o};const B_=(t,e)=>{if(rv(e.dom))return false;const n=t.schema.getTextInlineElements();return Pt(n,Mo(e))&&!rv(e.dom)&&!Ea(e.dom)};const L_=["fontWeight","fontStyle","color","fontSize","fontFamily"];const P_=t=>w(t.styles)&&Q(Et(t.styles),(t=>X(L_,t)));const M_=t=>at(t,(t=>kC(t)&&t.inline==="span"&&P_(t)));const I_=(t,e)=>{const n=t.get(e);return E(n)?M_(n):Optional.none()};const F_=(t,e)=>ev(e,Hm.fromRangeStart(t)).isNone();const U_=(t,e)=>tv(e,Hm.fromRangeEnd(t)).exists((t=>!La(t.getNode())||tv(e,t).isSome()))===false;const z_=t=>e=>Wa(e)&&t.isEditable(e);const $_=(t,e)=>Z(t.getSelectedBlocks(),((n,o)=>o===0&&e(n)?t.dom.getParent(n,Wa)??n:n));const j_=t=>{if(t.isCollapsed())return[];const e=t.getRng();const n=$_(t,(t=>F_(e,t)&&!Wa(t)));if(n.length===1)return F_(e,n[0])&&U_(e,n[0])?n:[];{const t=yt(n).filter((t=>F_(e,t))).toArray();const o=vt(n).filter((t=>U_(e,t))).toArray();const s=n.slice(1,-1);return t.concat(s).concat(o)}};const H_=t=>nt(j_(t),z_(t.dom));const W_=t=>nt($_(t,(t=>!Wa(t))),z_(t.dom));const V_=co.each;const q_=t=>ha(t)&&!Nv(t)&&!rv(t)&&!Ea(t);const K_=(t,e)=>{for(let n=t;n;n=n[e]){if(Na(n)&&_e(n.data))return t;if(ha(n)&&!Nv(n))return n}return t};const Y_=(t,e,n)=>{const o=jS(t);const s=ba(e)&&t.dom.isEditable(e);const r=ba(n)&&t.dom.isEditable(n);if(s&&r){const s=K_(e,"previousSibling");const r=K_(n,"nextSibling");if(o.compare(s,r)){for(let t=s.nextSibling;t&&t!==r;){const e=t;t=t.nextSibling;s.appendChild(e)}t.dom.remove(r);co.each(co.grep(r.childNodes),(t=>{s.appendChild(t)}));return s}}return n};const G_=(t,e,n,o)=>{if(o&&e.merge_siblings!==false){const e=Y_(t,rC(o),o)??o;Y_(t,e,rC(e,true))}};const X_=(t,e,n)=>{if(e.clear_child_styles){const o=e.links?"*:not(a)":"*";V_(t.select(o,n),(n=>{q_(n)&&t.isEditable(n)&&V_(e.styles,((e,o)=>{t.setStyle(n,o,"")}))}))}};const Q_=(t,e,n)=>{V_(t.childNodes,(t=>{if(q_(t)){e(t)&&n(t);t.hasChildNodes()&&Q_(t,e,n)}}))};const Z_=(t,e)=>{e.nodeName==="SPAN"&&t.getAttribs(e).length===0&&t.remove(e,true)};const J_=(t,e)=>n=>!!(n&&gC(t,n,e));const tN=(t,e,n)=>o=>{t.setStyle(o,e,n);o.getAttribute("style")===""&&o.removeAttribute("style");Z_(t,o)};const eN=Ut.generate([{keep:[]},{rename:["name"]},{removed:[]}]);const nN=/^(src|href|style)$/;const oN=co.each;const sN=fC;const rN=t=>/^(TR|TH|TD)$/.test(t.nodeName);const cN=(t,e,n)=>t.isChildOf(e,n)&&e!==n&&!t.isBlock(n);const aN=(t,e,n)=>{let o=e[n?"startContainer":"endContainer"];let s=e[n?"startOffset":"endOffset"];if(ha(o)){const t=o.childNodes.length-1;!n&&s&&s--;o=o.childNodes[s>t?t:s]}Na(o)&&n&&s>=o.data.length&&(o=new DomTreeWalker(o,t.getBody()).next()||o);Na(o)&&!n&&s===0&&(o=new DomTreeWalker(o,t.getBody()).prev()||o);return o};const iN=(t,e)=>{const n=e?"firstChild":"lastChild";const o=t[n];return rN(t)&&o?t.nodeName==="TR"&&o[n]||o:t};const lN=(t,e,n,o)=>{const s=t.create(n,o);e.parentNode?.insertBefore(s,e);s.appendChild(e);return s};const dN=(t,e,n,o,s)=>{const r=fo.fromDom(e);const c=fo.fromDom(t.create(o,s));const a=n?os(r):ns(r);Fs(c,a);if(n){Ds(r,c);Bs(c,r)}else{Ts(r,c);Ls(c,r)}return c.dom};const uN=(t,e)=>e.links&&t.nodeName==="A"
/**
   * Removes the node and wrap it's children in paragraphs before doing so or
   * appends BR elements to the beginning/end of the block element if forcedRootBlocks is disabled.
   *
   * If the div in the node below gets removed:
   *  text<div>text</div>text
   *
   * Output becomes:
   *  text<div><br />text<br /></div>text
   *
   * So when the div is removed the result is:
   *  text<br />text<br />text
   *
   * @private
   * @param {Node} node Node to remove + apply BR/P elements to.
   * @param {Object} format Format rule.
   * @return {Node} Input node.
   */;const mN=(t,e,n)=>{const o=e.parentNode;let s;const r=t.dom;const c=Pg(t);wC(n)&&o===r.getRoot()&&(n.list_block&&sN(e,n.list_block)||J(Ct(e.childNodes),(e=>{if(aC(t,c,e.nodeName.toLowerCase()))if(s)s.appendChild(e);else{s=lN(r,e,c);r.setAttribs(s,Mg(t))}else s=null})));SC(n)&&!sN(n.inline,e)||r.remove(e,true)};const fN=(t,e,n)=>A(t)?{name:e,value:null}:{name:t,value:mC(e,n)};const pN=(t,e)=>{if(t.getAttrib(e,"style")===""){e.removeAttribute("style");e.removeAttribute("data-mce-style")}};const gN=(t,e,n,o,s)=>{let r=false;oN(n.styles,((c,a)=>{const{name:i,value:l}=fN(a,c,o);const d=pC(l,i);(n.remove_similar||x(l)||!ha(s)||sN(gC(t,s,i),d))&&t.setStyle(e,i,"");r=true}));r&&pN(t,e)};const hN=(t,e,n)=>{e==="removeformat"?J(W_(t.selection),(e=>{J(L_,(n=>t.dom.setStyle(e,n,"")));pN(t.dom,e)})):I_(t.formatter,e).each((e=>{J(W_(t.selection),(o=>gN(t.dom,o,e,n,null)))}))};const bN=(t,e,n,o,s)=>{const r=t.dom;const c=jS(t);const a=t.schema;if(kC(e)&&Si(a,e.inline)&&Ni(a,o)&&o.parentElement===t.getBody()){mN(t,o,e);return eN.removed()}if(!e.ceFalseOverride&&o&&r.getContentEditableParent(o)==="false")return eN.keep();if(o&&!s_(r,o,e)&&!uN(o,e))return eN.keep();const i=o;const l=e.preserve_attributes;if(kC(e)&&e.remove==="all"&&E(l)){const t=nt(r.getAttribs(i),(t=>X(l,t.name.toLowerCase())));r.removeAllAttribs(i);J(t,(t=>r.setAttrib(i,t.name,t.value)));if(t.length>0)return eN.rename("span")}if(e.remove!=="all"){gN(r,i,e,n,s);oN(e.attributes,((t,o)=>{const{name:c,value:a}=fN(o,t,n);if(e.remove_similar||x(a)||!ha(s)||sN(r.getAttrib(s,c),a)){if(c==="class"){const t=r.getAttrib(i,c);if(t){let e="";J(t.split(/\s+/),(t=>{/mce\-\w+/.test(t)&&(e+=(e?" ":"")+t)}));if(e){r.setAttrib(i,c,e);return}}}nN.test(c)&&i.removeAttribute("data-mce-"+c);if(c==="style"&&Ca(["li"])(i)&&r.getStyle(i,"list-style-type")==="none"){i.removeAttribute(c);r.setStyle(i,"list-style-type","none");return}c==="class"&&i.removeAttribute("className");i.removeAttribute(c)}}));oN(e.classes,(t=>{t=mC(t,n);ha(s)&&!r.hasClass(s,t)||r.removeClass(i,t)}));const t=r.getAttribs(i);for(let e=0;e<t.length;e++){const n=t[e].nodeName;if(!c.isAttributeInternal(n))return eN.keep()}}if(e.remove!=="none"){mN(t,i,e);return eN.removed()}return eN.keep()};const yN=(t,e,n,o,s)=>{let r;e.parentNode&&J(bC(t.dom,e.parentNode).reverse(),(e=>{if(!r&&ha(e)&&e.id!=="_start"&&e.id!=="_end"){const c=c_(t,e,n,o,s);c&&c.split!==false&&(r=e)}}));return r};const vN=(t,e,n,o)=>bN(t,e,n,o,o).fold(P(o),(e=>{const n=t.dom.createFragment();n.appendChild(o);return t.dom.rename(o,e)}),P(null));const CN=(t,e,n,o,s,r,c,a)=>{let i;let l;const d=t.dom;if(n){const u=n.parentNode;for(let n=o.parentNode;n&&n!==u;n=n.parentNode){let o=d.clone(n,false);for(let n=0;n<e.length;n++){o=vN(t,e[n],a,o);if(o===null)break}if(o){i&&o.appendChild(i);l||(l=o);i=o}}!r||c.mixed&&d.isBlock(n)||(o=d.split(n,o)??o);if(i&&l){s.parentNode?.insertBefore(i,s);l.appendChild(s);kC(c)&&G_(t,c,a,i)}}return o};const wN=(t,e,n,o,s)=>{const r=t.formatter.get(e);const c=r[0];const a=t.dom;const i=t.selection;const l=o=>{const a=yN(t,o,e,n,s);return CN(t,r,a,o,o,true,c,n)};const d=t=>Nv(t)&&ha(t)&&(t.id==="_start"||t.id==="_end");const u=e=>Q(r,(o=>xN(t,o,n,e,e)));const m=e=>{const n=Ct(e.childNodes);const o=u(e);const s=o||Q(r,(t=>s_(a,e,t)));const i=e.parentNode;!s&&N(i)&&_C(c)&&u(i);if(c.deep&&n.length)for(let t=0;t<n.length;t++)m(n[t]);const l=["underline","line-through","overline"];J(l,(n=>{ha(e)&&t.dom.getStyle(e,"text-decoration")===n&&e.parentNode&&hC(a,e.parentNode)===n&&xN(t,{deep:false,exact:true,inline:"span",styles:{textDecoration:n}},void 0,e)}))};const f=t=>{const e=a.get(t?"_start":"_end");if(e){let n=e[t?"firstChild":"lastChild"];d(n)&&(n=n[t?"firstChild":"lastChild"]);Na(n)&&n.data.length===0&&(n=t?e.previousSibling||e.nextSibling:e.nextSibling||e.previousSibling);a.remove(e,true);return n}return null};const p=e=>{let n;let o;let s=qC(a,e,r,{includeTrailingSpace:e.collapsed});if(c.split){s=CO(s);n=aN(t,s,true);o=aN(t,s);if(n!==o){n=iN(n,true);o=iN(o,false);if(cN(a,n,o)){const t=Optional.from(n.firstChild).getOr(n);l(dN(a,t,true,"span",{id:"_start","data-mce-type":"bookmark"}));f(true);return}if(cN(a,o,n)){const t=Optional.from(o.lastChild).getOr(o);l(dN(a,t,false,"span",{id:"_end","data-mce-type":"bookmark"}));f(false);return}n=lN(a,n,"span",{id:"_start","data-mce-type":"bookmark"});o=lN(a,o,"span",{id:"_end","data-mce-type":"bookmark"});const t=a.createRng();t.setStartAfter(n);t.setEndBefore(o);KC(a,t,(t=>{J(t,(t=>{Nv(t)||Nv(t.parentNode)||l(t)}))}));l(n);l(o);n=f(true);o=f()}else n=o=l(n);s.startContainer=n.parentNode?n.parentNode:n;s.startOffset=a.nodeIndex(n);s.endContainer=o.parentNode?o.parentNode:o;s.endOffset=a.nodeIndex(o)+1}KC(a,s,(t=>{J(t,m)}))};if(o){if(tC(o)){const t=a.createRng();t.setStartBefore(o);t.setEndAfter(o);p(t)}else p(o);sg(t,e,o,n)}else{if(i.isCollapsed()&&kC(c)&&!Uv(t).length)S_(t,e,n,s);else{oC(t,(()=>Yv(t,p)),(o=>kC(c)&&a_(t,e,n,o)));t.nodeChanged()}hN(t,e,n);sg(t,e,o,n)}};const ON=(t,e,n,o,s)=>{(o||t.selection.isEditable())&&wN(t,e,n,o,s)};const EN=(t,e,n,o)=>bN(t,e,n,o).fold((()=>Optional.some(o)),(e=>Optional.some(t.dom.rename(o,e))),Optional.none);
/**
   * Removes the specified format for the specified node. It will also remove the node if it doesn't have
   * any attributes if the format specifies it to do so.
   *
   * @private
   * @param {Object} format Format object with items to remove from node.
   * @param {Object} vars Name/value object with variables to apply to format.
   * @param {Node} node Node to remove the format styles on.
   * @param {Node} compareNode Optional compare node, if specified the styles will be compared to that node.
   * @return {Boolean} True/false if the node was removed or not.
   */const xN=(t,e,n,o,s)=>bN(t,e,n,o,s).fold(H,(e=>{t.dom.rename(o,e);return true}),W);const kN=["fontsize","subscript","superscript"];const SN=["strikethrough",...kN];const _N=(t,e,n)=>N(t.matchNode(e.dom,n,{},n==="fontsize"));const NN=(t,e)=>Q(kN,(n=>_N(t,e,n)));const RN=t=>X(SN,t);const AN=(t,e,n,o,s)=>{const r=Zo(e,t).filter($o);return lt(r,n).map((t=>{const e=r[t];const c=o(e);const a=[...s(Zs(e)).toArray(),...ut(r.slice(0,t),(t=>n(t)?s(t).toArray():[Zs(t)]))];return{container:e,innerWrapper:c,outerWrappers:a}}))};const DN=(t,e,n,o)=>{J(ss(t),(t=>{$o(t)&&n(t)&&o(t).isNone()&&Xs(t)}));J(ss(t),(t=>Ls(e,t)));Bs(t,e)};const TN=(t,e)=>{if(e.length>0){const n=e[e.length-1];Ds(t,n);const o=rt(e.slice(0,e.length-1),((t,e)=>{Ls(t,e);return e}),n);Ls(o,t)}};const BN=(t,e,n,o,s)=>{const r=e=>To(fo.fromDom(t.getRoot()),e)||t.isBlock(e.dom);J(e,(e=>{AN(r,e,n,o,s).each((({container:o,innerWrapper:r,outerWrappers:c})=>{t.split(o.dom,e.dom);DN(e,r,n,s);TN(e,c)}))}))};const LN=(t,e,n)=>{const o=n=>N(c_(t,n.dom,e));const s=n=>{const o=fo.fromTag(Mo(n));const s=c_(t,n.dom,e,{});N(s)&&t_(s)&&JS(t,o.dom,s);return o};const r=n=>{const o=c_(t,n.dom,e,{});return N(o)?EN(t,o,{},n.dom).map(fo.fromDom):Optional.some(n)};const c=XS(t.selection.getRng());BN(t.dom,n,o,s,r);t.selection.setRng(QS(c))};const PN=(t,e)=>ut(e,(e=>{const n=fc(e,(e=>NN(t,e)));return NN(t,e)?[e,...n]:n}));const MN=(t,e,n)=>{if(RN(e)){const e=PN(t.formatter,n);LN(t,"strikethrough",e)}};const IN=(t,e)=>{const n=nt(e,(e=>NN(t.formatter,e)));LN(t,"strikethrough",n)};const FN=t=>["h1","h2","h3","h4","h5","h6"].includes(t.name);const UN=t=>t.name==="summary";const zN=(t,e)=>{let n=t;while(n=n.walk())e(n)};const $N=(t,e,n,o)=>{const s=n.name;for(let e=0,r=t.length;e<r;e++){const r=t[e];if(r.name===s){const t=o.nodes[s];t?t.nodes.push(n):o.nodes[s]={filter:r,nodes:[n]}}}if(n.attributes)for(let t=0,s=e.length;t<s;t++){const s=e[t];const r=s.name;if(r in n.attributes.map){const t=o.attributes[r];t?t.nodes.push(n):o.attributes[r]={filter:s,nodes:[n]}}}};const jN=(t,e,n)=>{const o={nodes:{},attributes:{}};n.firstChild&&zN(n,(n=>{$N(t,e,n,o)}));return o};const HN=(t,e)=>{const n=(t,n)=>{kt(t,(t=>{const o=Ct(t.nodes);J(t.filter.callbacks,(s=>{for(let e=o.length-1;e>=0;e--){const s=o[e];const r=n?s.attr(t.filter.name)!==void 0:s.name===t.filter.name;r&&!_(s.parent)||o.splice(e,1)}o.length>0&&s(o,t.filter.name,e)}))}))};n(t.nodes,false);n(t.attributes,true)};const WN=(t,e,n,o={})=>{const s=jN(t,e,n);HN(s,o)};const VN=(t,e,n,o)=>{const s=t.pad_empty_with_br||e.insert;if(s&&n(o)){const t=new AstNode("br",1);e.insert&&t.attr("data-mce-bogus","1");o.empty().append(t)}else o.empty().append(new AstNode("#text",3)).value=Pe};const qN=t=>KN(t,"#text")&&t?.firstChild?.value===Pe;const KN=(t,e)=>{const n=t?.firstChild;return N(n)&&n===t.lastChild&&n.name===e};const YN=(t,e)=>{const n=t.getElementRule(e.name);return n?.paddEmpty===true};const GN=(t,e,n,o)=>o.isEmpty(e,n,(e=>YN(t,e)));const XN=(t,e)=>N(t)&&(e(t)||t.name==="br");const QN=t=>{let e;for(let n=t;n;n=n.parent){const t=n.attr("contenteditable");if(t==="false")break;t==="true"&&(e=n)}return Optional.from(e)};const ZN=t=>{const e=[];for(let n=t.firstChild;N(n);n=n.walk())e.push(n);return e};const JN=(t,e,n=t.parent)=>{if(e.getSpecialElements()[t.name])t.empty().remove();else{const o=t.children();for(const t of o)n&&!e.isValidChild(n.name,t.name)&&JN(t,e,n);t.unwrap()}};const tR=(t,e,n,o=T)=>{const s=e.getTextBlockElements();const r=e.getNonEmptyElements();const c=e.getWhitespaceElements();const a=co.makeMap("tr,td,th,tbody,thead,tfoot,table,summary");const i=new Set;const l=t=>t!==n&&!a[t.name];for(let n=0;n<t.length;n++){const a=t[n];let d;let u;let m;if(!a.parent||i.has(a))continue;if(s[a.name]&&a.parent.name==="li"){let t=a.next;while(t){if(!s[t.name])break;t.name="li";i.add(t);a.parent.insert(t,a.parent);t=t.next}a.unwrap();continue}const f=[a];for(d=a.parent;d&&!e.isValidChild(d.name,a.name)&&l(d);d=d.parent)f.push(d);if(d&&f.length>1)if(nR(e,a,d))JN(a,e);else{f.reverse();u=f[0].clone();o(u);let t=u;for(let n=0;n<f.length-1;n++){if(e.isValidChild(t.name,f[n].name)&&n>0){m=f[n].clone();o(m);t.append(m)}else m=t;for(let t=f[n].firstChild;t&&t!==f[n+1];){const e=t.next;m.append(t);t=e}t=m}if(GN(e,r,c,u))d.insert(a,f[0],true);else{d.insert(u,f[0],true);d.insert(a,u)}d=f[0];(GN(e,r,c,d)||KN(d,"br"))&&d.empty().remove()}else if(a.parent){if(a.name==="li"){let t=a.prev;if(t&&(t.name==="ul"||t.name==="ol")){t.append(a);continue}t=a.next;if(t&&(t.name==="ul"||t.name==="ol")&&t.firstChild){t.insert(a,t.firstChild,true);continue}const e=new AstNode("ul",1);o(e);a.wrap(e);continue}if(e.isValidChild(a.parent.name,"div")&&e.isValidChild("div",a.name)){const t=new AstNode("div",1);o(t);a.wrap(t)}else JN(a,e)}}};const eR=(t,e)=>{let n=t;while(n){if(n.name===e)return true;n=n.parent}return false};const nR=(t,e,n=e.parent)=>!!n&&(!(!t.children[e.name]||t.isValidChild(n.name,e.name))||(!(e.name!=="a"||!eR(n,"a"))||!(!UN(n)||!FN(e))&&!(n?.firstChild===e&&n?.lastChild===e)));const oR=(t,e,n,o)=>{const s=document.createRange();s.setStart(t,e);s.setEnd(n,o);return s};const sR=t=>{const e=Hm.fromRangeStart(t);const n=Hm.fromRangeEnd(t);const o=t.commonAncestorContainer;return Xy(false,o,n).map((s=>!hy(e,n,o)&&hy(e,s,o)?oR(e.container(),e.offset(),s.container(),s.offset()):t)).getOr(t)};const rR=t=>t.collapsed?t:sR(t);const cR=co.explode;const aR=()=>{const t={};const e=(e,n)=>{J(cR(e),(e=>{Pt(t,e)||(t[e]={name:e,callbacks:[]});t[e].callbacks.push(n)}))};const n=()=>Bt(t);const o=(e,n)=>{J(cR(e),(e=>{if(Pt(t,e))if(N(n)){const o=t[e];const s=nt(o.callbacks,(t=>t!==n));s.length>0?o.callbacks=s:delete t[e]}else delete t[e]}))};return{addFilter:e,getFilters:n,removeFilter:o}};const iR=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");const lR=t=>t.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");const dR=(t,e)=>{J(e,(e=>{t.attr(e,null)}))};const uR=(t,e,n)=>{t.addNodeFilter("font",(t=>{J(t,(t=>{const o=e.parse(t.attr("style"));const s=t.attr("color");const r=t.attr("face");const c=t.attr("size");s&&(o.color=s);r&&(o["font-family"]=r);c&&Ae(c).each((t=>{o["font-size"]=n[t-1]}));t.name="span";t.attr("style",e.serialize(o));dR(t,["color","face","size"])}))}))};const mR=(t,e,n)=>{t.addNodeFilter("strike",(t=>{const o=e.type!=="html4";J(t,(t=>{if(o)t.name="s";else{const e=n.parse(t.attr("style"));e["text-decoration"]="line-through";t.name="span";t.attr("style",n.serialize(e))}}))}))};const fR=(t,e,n)=>{const o=Xl();e.convert_fonts_to_spans&&uR(t,o,co.explode(e.font_size_legacy_values??""));mR(t,n,o)};const pR=(t,e,n)=>{e.inline_styles&&fR(t,e,n)};const gR=t=>fetch(t).then((t=>t.ok?t.blob():Promise.reject())).catch((()=>Promise.reject({message:`Cannot convert ${t} to Blob. Resource might not exist or is inaccessible.`,uriType:"blob"})));const hR=t=>{const e=/([a-z0-9+\/=\s]+)/i.exec(t);return e?e[1]:""};const bR=t=>{try{return decodeURIComponent(t)}catch{return t}};const yR=t=>{const[e,...n]=t.split(",");const o=n.join(",");const s=/data:([^/]+\/[^;]+)(;.+)?/.exec(e);if(s){const t=s[2]===";base64";const e=bR(o);const n=t?hR(e):e;return Optional.some({type:s[1],data:n,base64Encoded:t})}return Optional.none()};const vR=(t,e,n=true)=>{let o=e;if(n)try{o=atob(e)}catch{return Optional.none()}const s=new Uint8Array(o.length);for(let t=0;t<s.length;t++)s[t]=o.charCodeAt(t);return Optional.some(new Blob([s],{type:t}))};const CR=t=>new Promise(((e,n)=>{yR(t).bind((({type:t,data:e,base64Encoded:n})=>vR(t,e,n))).fold((()=>n("Invalid data URI")),e)}));const wR=t=>we(t,"blob:")?gR(t):we(t,"data:")?CR(t):Promise.reject("Unknown URI format");const OR=t=>new Promise(((e,n)=>{const o=new FileReader;o.onloadend=()=>{e(o.result)};o.onerror=()=>{n(o.error?.message)};o.readAsDataURL(t)}));let ER=0;const xR=t=>(t||"blobid")+ER++;const kR=(t,e,n)=>yR(t).bind((({data:t,type:o,base64Encoded:s})=>{if(e&&!s)return Optional.none();{const e=s?t:btoa(t);return n(e,o)}}));const SR=(t,e,n)=>{const o=t.create(xR(),e,n);t.add(o);return o};const _R=(t,e,n=false)=>kR(e,n,((e,n)=>Optional.from(t.getByData(e,n)).orThunk((()=>vR(n,e).map((n=>SR(t,n,e)))))));const NR=(t,e)=>{const n=()=>Promise.reject("Invalid data URI");if(we(e,"blob:")){const o=t.getByUri(e);return N(o)?Promise.resolve(o):wR(e).then((e=>OR(e).then((o=>kR(o,false,(n=>Optional.some(SR(t,e,n)))).getOrThunk(n)))))}return we(e,"data:")?_R(t,e).fold(n,(t=>Promise.resolve(t))):Promise.reject("Unknown image data format")};const RR=/^(?:(?:(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)([A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*))(?::\d+)?(?:\/(?:[-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+)?)?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+)?)?)$/;const AR=t=>Optional.from(t.match(RR)).bind((t=>bt(t,1))).map((t=>we(t,"www.")?t.substring(4):t));const DR=(t,e)=>{Optional.from(t.attr("src")).bind(AR).forall((t=>!X(e,t)))&&t.attr("sandbox","")};const TR=(t,e)=>we(t,`${e}/`);const BR=t=>S(t)?"iframe":TR(t,"image")?"img":TR(t,"video")?"video":TR(t,"audio")?"audio":"iframe";const LR=({type:t,src:e,width:n,height:o}={},s,r)=>{const c=BR(t);const a=new AstNode(c,1);a.attr(c==="audio"?{src:e}:{src:e,width:n,height:o});c!=="audio"&&c!=="video"||a.attr("controls","");c==="iframe"&&s&&DR(a,r);return a};const PR=t=>N(t.attr("data-mce-bogus"));const MR=t=>t.attr("src")===Gn.transparentSrc||N(t.attr("data-mce-placeholder"));const IR=(t,e)=>{const{blob_cache:n}=e;if(n){const e=t=>{const e=t.attr("src");MR(t)||PR(t)||_(e)||_R(n,e,true).each((e=>{t.attr("src",e.blobUri())}))};t.addAttributeFilter("src",(t=>J(t,e)))}};const FR=(t,e)=>{const n=t.schema;t.addAttributeFilter("href",(t=>{let n=t.length;const o=t=>{const e=t.split(" ").filter((t=>t.length>0));return e.concat(["noopener"]).sort().join(" ")};const s=t=>{const e=t?co.trim(t):"";return/\b(noopener)\b/g.test(e)?e:o(e)};if(!e.allow_unsafe_link_target)while(n--){const e=t[n];e.name==="a"&&e.attr("target")==="_blank"&&e.attr("rel",s(e.attr("rel")))}}));e.allow_html_in_named_anchor||t.addAttributeFilter("id,name",(t=>{let e,n,o,s,r=t.length;while(r--){s=t[r];if(s.name==="a"&&s.firstChild&&!s.attr("href")){o=s.parent;e=s.lastChild;while(e&&o){n=e.prev;o.insert(e,s);e=n}}}}));e.fix_list_elements&&t.addNodeFilter("ul,ol",(t=>{let e,n,o=t.length;while(o--){e=t[o];n=e.parent;if(n&&(n.name==="ul"||n.name==="ol"))if(e.prev&&e.prev.name==="li")e.prev.append(e);else{const t=new AstNode("li",1);t.attr("style","list-style-type: none");e.wrap(t)}}}));const o=n.getValidClasses();e.validate&&o&&t.addAttributeFilter("class",(t=>{let e=t.length;while(e--){const n=t[e];const s=n.attr("class")??"";const r=co.explode(s," ");let c="";for(let t=0;t<r.length;t++){const e=r[t];let s=false;let a=o["*"];a&&a[e]&&(s=true);a=o[n.name];!s&&a&&a[e]&&(s=true);if(s){c&&(c+=" ");c+=e}}c.length||(c=null);n.attr("class",c)}}));IR(t,e);const s=e.sandbox_iframes??false;const r=Ot(e.sandbox_iframes_exclusions??[]);e.convert_unsafe_embeds&&t.addNodeFilter("object,embed",(t=>J(t,(t=>{t.replace(LR({type:t.attr("type"),src:t.name==="object"?t.attr("data"):t.attr("src"),width:t.attr("width"),height:t.attr("height")},s,r))}))));s&&t.addNodeFilter("iframe",(t=>J(t,(t=>DR(t,r)))))};
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */const{entries:UR,setPrototypeOf:zR,isFrozen:$R,getPrototypeOf:jR,getOwnPropertyDescriptor:HR}=Object;let{freeze:WR,seal:VR,create:qR}=Object;let{apply:KR,construct:YR}=typeof Reflect!=="undefined"&&Reflect;WR||(WR=function(t){return t});VR||(VR=function(t){return t});KR||(KR=function(t,e,n){return t.apply(e,n)});YR||(YR=function(t,e){return new t(...e)});const GR=lA(Array.prototype.forEach);const XR=lA(Array.prototype.lastIndexOf);const QR=lA(Array.prototype.pop);const ZR=lA(Array.prototype.push);const JR=lA(Array.prototype.splice);const tA=lA(String.prototype.toLowerCase);const eA=lA(String.prototype.toString);const nA=lA(String.prototype.match);const oA=lA(String.prototype.replace);const sA=lA(String.prototype.indexOf);const rA=lA(String.prototype.trim);const cA=lA(Object.prototype.hasOwnProperty);const aA=lA(RegExp.prototype.test);const iA=dA(TypeError);
/**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param func - The function to be wrapped and called.
   * @returns A new function that calls the given function with a specified thisArg and arguments.
   */function lA(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return KR(t,e,o)}}
/**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param func - The constructor function to be wrapped and called.
   * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
   */function dA(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return YR(t,n)}}
/**
   * Add properties to a lookup table
   *
   * @param set - The set to which elements will be added.
   * @param array - The array containing elements to be added to the set.
   * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns The modified set with added elements.
   */function uA(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:tA;zR&&zR(t,null);let o=e.length;while(o--){let s=e[o];if(typeof s==="string"){const t=n(s);if(t!==s){$R(e)||(e[o]=t);s=t}}t[s]=true}return t}
/**
   * Clean up an array to harden against CSPP
   *
   * @param array - The array to be cleaned.
   * @returns The cleaned version of the array
   */function mA(t){for(let e=0;e<t.length;e++){const n=cA(t,e);n||(t[e]=null)}return t}
/**
   * Shallow clone an object
   *
   * @param object - The object to be cloned.
   * @returns A new object that copies the original.
   */function fA(t){const e=qR(null);for(const[n,o]of UR(t)){const s=cA(t,n);s&&(Array.isArray(o)?e[n]=mA(o):o&&typeof o==="object"&&o.constructor===Object?e[n]=fA(o):e[n]=o)}return e}
/**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param object - The object to look up the getter function in its prototype chain.
   * @param prop - The property name for which to find the getter function.
   * @returns The getter function found in the prototype chain or a fallback function.
   */function pA(t,e){while(t!==null){const n=HR(t,e);if(n){if(n.get)return lA(n.get);if(typeof n.value==="function")return lA(n.value)}t=jR(t)}function n(){return null}return n}const gA=WR(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]);const hA=WR(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]);const bA=WR(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]);const yA=WR(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]);const vA=WR(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]);const CA=WR(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]);const wA=WR(["#text"]);const OA=WR(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]);const EA=WR(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]);const xA=WR(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]);const kA=WR(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]);const SA=VR(/\{\{[\w\W]*|[\w\W]*\}\}/gm);const _A=VR(/<%[\w\W]*|[\w\W]*%>/gm);const NA=VR(/\$\{[\w\W]*/gm);const RA=VR(/^data-[\-\w.\u00B7-\uFFFF]+$/);const AA=VR(/^aria-[\-\w]+$/);const DA=VR(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);const TA=VR(/^(?:\w+script|data):/i);const BA=VR(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);const LA=VR(/^html$/i);const PA=VR(/^[a-z][.\w]*(-[.\w]+)+$/i);var MA=Object.freeze({__proto__:null,ARIA_ATTR:AA,ATTR_WHITESPACE:BA,CUSTOM_ELEMENT:PA,DATA_ATTR:RA,DOCTYPE_NAME:LA,ERB_EXPR:_A,IS_ALLOWED_URI:DA,IS_SCRIPT_OR_DATA:TA,MUSTACHE_EXPR:SA,TMPLIT_EXPR:NA});
/* eslint-disable @typescript-eslint/indent */const IA={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12};const FA=function(){return typeof window==="undefined"?null:window};
/**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param trustedTypes The policy factory.
   * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */const UA=function(t,e){if(typeof t!=="object"||typeof t.createPolicy!=="function")return null;let n=null;const o="data-tt-policy-suffix";e&&e.hasAttribute(o)&&(n=e.getAttribute(o));const s="dompurify"+(n?"#"+n:"");try{return t.createPolicy(s,{createHTML(t){return t},createScriptURL(t){return t}})}catch(t){console.warn("TrustedTypes policy "+s+" could not be created.");return null}};const zA=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function $A(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:FA();const e=t=>$A(t);e.version="3.2.6";e.removed=[];if(!t||!t.document||t.document.nodeType!==IA.document||!t.Element){e.isSupported=false;return e}let{document:n}=t;const o=n;const s=o.currentScript;const{DocumentFragment:r,HTMLTemplateElement:c,Node:a,Element:i,NodeFilter:l,NamedNodeMap:d=t.NamedNodeMap||t.MozNamedAttrMap,HTMLFormElement:u,DOMParser:m,trustedTypes:f}=t;const p=i.prototype;const g=pA(p,"cloneNode");const h=pA(p,"remove");const b=pA(p,"nextSibling");const y=pA(p,"childNodes");const v=pA(p,"parentNode");if(typeof c==="function"){const t=n.createElement("template");t.content&&t.content.ownerDocument&&(n=t.content.ownerDocument)}let C;let w="";const{implementation:O,createNodeIterator:E,createDocumentFragment:x,getElementsByTagName:k}=n;const{importNode:S}=o;let _=zA();e.isSupported=typeof UR==="function"&&typeof v==="function"&&O&&O.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:N,ERB_EXPR:R,TMPLIT_EXPR:A,DATA_ATTR:D,ARIA_ATTR:T,IS_SCRIPT_OR_DATA:B,ATTR_WHITESPACE:L,CUSTOM_ELEMENT:P}=MA;let{IS_ALLOWED_URI:M}=MA;let I=null;const F=uA({},[...gA,...hA,...bA,...vA,...wA]);let U=null;const z=uA({},[...OA,...EA,...xA,...kA]);let $=Object.seal(qR(null,{tagNameCheck:{writable:true,configurable:false,enumerable:true,value:null},attributeNameCheck:{writable:true,configurable:false,enumerable:true,value:null},allowCustomizedBuiltInElements:{writable:true,configurable:false,enumerable:true,value:false}}));let j=null;let H=null;let W=true;let V=true;let q=false;let K=true;let Y=false;let G=true;let X=false;let Q=false;let Z=false;let J=false;let tt=false;let et=false;let nt=true;let ot=false;const st="user-content-";let rt=true;let ct=false;let at={};let it=null;const lt=uA({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let dt=null;const ut=uA({},["audio","video","img","source","image","track"]);let mt=null;const ft=uA({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]);const pt="http://www.w3.org/1998/Math/MathML";const gt="http://www.w3.org/2000/svg";const ht="http://www.w3.org/1999/xhtml";let bt=ht;let yt=false;let vt=null;const Ct=uA({},[pt,gt,ht],eA);let wt=uA({},["mi","mo","mn","ms","mtext"]);let Ot=uA({},["annotation-xml"]);const Et=uA({},["title","style","font","a","script"]);let xt=null;const kt=["application/xhtml+xml","text/html"];const St="text/html";let _t=null;let Nt=null;const Rt=n.createElement("form");const At=function(t){return t instanceof RegExp||t instanceof Function};
/**
     * _parseConfig
     *
     * @param cfg optional config literal
     */const Dt=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!Nt||Nt!==t){t&&typeof t==="object"||(t={});t=fA(t);xt=kt.indexOf(t.PARSER_MEDIA_TYPE)===-1?St:t.PARSER_MEDIA_TYPE;_t=xt==="application/xhtml+xml"?eA:tA;I=cA(t,"ALLOWED_TAGS")?uA({},t.ALLOWED_TAGS,_t):F;U=cA(t,"ALLOWED_ATTR")?uA({},t.ALLOWED_ATTR,_t):z;vt=cA(t,"ALLOWED_NAMESPACES")?uA({},t.ALLOWED_NAMESPACES,eA):Ct;mt=cA(t,"ADD_URI_SAFE_ATTR")?uA(fA(ft),t.ADD_URI_SAFE_ATTR,_t):ft;dt=cA(t,"ADD_DATA_URI_TAGS")?uA(fA(ut),t.ADD_DATA_URI_TAGS,_t):ut;it=cA(t,"FORBID_CONTENTS")?uA({},t.FORBID_CONTENTS,_t):lt;j=cA(t,"FORBID_TAGS")?uA({},t.FORBID_TAGS,_t):fA({});H=cA(t,"FORBID_ATTR")?uA({},t.FORBID_ATTR,_t):fA({});at=!!cA(t,"USE_PROFILES")&&t.USE_PROFILES;W=t.ALLOW_ARIA_ATTR!==false;V=t.ALLOW_DATA_ATTR!==false;q=t.ALLOW_UNKNOWN_PROTOCOLS||false;K=t.ALLOW_SELF_CLOSE_IN_ATTR!==false;Y=t.SAFE_FOR_TEMPLATES||false;G=t.SAFE_FOR_XML!==false;X=t.WHOLE_DOCUMENT||false;J=t.RETURN_DOM||false;tt=t.RETURN_DOM_FRAGMENT||false;et=t.RETURN_TRUSTED_TYPE||false;Z=t.FORCE_BODY||false;nt=t.SANITIZE_DOM!==false;ot=t.SANITIZE_NAMED_PROPS||false;rt=t.KEEP_CONTENT!==false;ct=t.IN_PLACE||false;M=t.ALLOWED_URI_REGEXP||DA;bt=t.NAMESPACE||ht;wt=t.MATHML_TEXT_INTEGRATION_POINTS||wt;Ot=t.HTML_INTEGRATION_POINTS||Ot;$=t.CUSTOM_ELEMENT_HANDLING||{};t.CUSTOM_ELEMENT_HANDLING&&At(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&($.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck);t.CUSTOM_ELEMENT_HANDLING&&At(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&($.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck);t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements==="boolean"&&($.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements);Y&&(V=false);tt&&(J=true);if(at){I=uA({},wA);U=[];if(at.html===true){uA(I,gA);uA(U,OA)}if(at.svg===true){uA(I,hA);uA(U,EA);uA(U,kA)}if(at.svgFilters===true){uA(I,bA);uA(U,EA);uA(U,kA)}if(at.mathMl===true){uA(I,vA);uA(U,xA);uA(U,kA)}}if(t.ADD_TAGS){I===F&&(I=fA(I));uA(I,t.ADD_TAGS,_t)}if(t.ADD_ATTR){U===z&&(U=fA(U));uA(U,t.ADD_ATTR,_t)}t.ADD_URI_SAFE_ATTR&&uA(mt,t.ADD_URI_SAFE_ATTR,_t);if(t.FORBID_CONTENTS){it===lt&&(it=fA(it));uA(it,t.FORBID_CONTENTS,_t)}rt&&(I["#text"]=true);X&&uA(I,["html","head","body"]);if(I.table){uA(I,["tbody"]);delete j.tbody}if(t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!=="function")throw iA('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!=="function")throw iA('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=t.TRUSTED_TYPES_POLICY;w=C.createHTML("")}else{C===void 0&&(C=UA(f,s));C!==null&&typeof w==="string"&&(w=C.createHTML(""))}WR&&WR(t);Nt=t}};const Tt=uA({},[...hA,...bA,...yA]);const Bt=uA({},[...vA,...CA]);
/**
     * @param element a DOM element whose namespace is being checked
     * @returns Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */const Lt=function(t){let e=v(t);e&&e.tagName||(e={namespaceURI:bt,tagName:"template"});const n=tA(t.tagName);const o=tA(e.tagName);return!!vt[t.namespaceURI]&&(t.namespaceURI===gt?e.namespaceURI===ht?n==="svg":e.namespaceURI===pt?n==="svg"&&(o==="annotation-xml"||wt[o]):Boolean(Tt[n]):t.namespaceURI===pt?e.namespaceURI===ht?n==="math":e.namespaceURI===gt?n==="math"&&Ot[o]:Boolean(Bt[n]):t.namespaceURI===ht?!(e.namespaceURI===gt&&!Ot[o])&&(!(e.namespaceURI===pt&&!wt[o])&&(!Bt[n]&&(Et[n]||!Tt[n]))):!(xt!=="application/xhtml+xml"||!vt[t.namespaceURI]))};
/**
     * _forceRemove
     *
     * @param node a DOM node
     */const Pt=function(t){ZR(e.removed,{element:t});try{v(t).removeChild(t)}catch(e){h(t)}};
/**
     * _removeAttribute
     *
     * @param name an Attribute name
     * @param element a DOM node
     */const Mt=function(t,n){try{ZR(e.removed,{attribute:n.getAttributeNode(t),from:n})}catch(t){ZR(e.removed,{attribute:null,from:n})}n.removeAttribute(t);if(t==="is")if(J||tt)try{Pt(n)}catch(t){}else try{n.setAttribute(t,"")}catch(t){}};
/**
     * _initDocument
     *
     * @param dirty - a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */const It=function(t){let e=null;let o=null;if(Z)t="<remove></remove>"+t;else{const e=nA(t,/^[\r\n\t ]+/);o=e&&e[0]}xt==="application/xhtml+xml"&&bt===ht&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const s=C?C.createHTML(t):t;if(bt===ht)try{e=(new m).parseFromString(s,xt)}catch(t){}if(!e||!e.documentElement){e=O.createDocument(bt,"template",null);try{e.documentElement.innerHTML=yt?w:s}catch(t){}}const r=e.body||e.documentElement;t&&o&&r.insertBefore(n.createTextNode(o),r.childNodes[0]||null);return bt===ht?k.call(e,X?"html":"body")[0]:X?e.documentElement:r};
/**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param root The root element or node to start traversing on.
     * @return The created NodeIterator
     */const Ft=function(t){return E.call(t.ownerDocument||t,t,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)};
/**
     * _isClobbered
     *
     * @param element element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */const Ut=function(t){return t instanceof u&&(typeof t.nodeName!=="string"||typeof t.textContent!=="string"||typeof t.removeChild!=="function"||!(t.attributes instanceof d)||typeof t.removeAttribute!=="function"||typeof t.setAttribute!=="function"||typeof t.namespaceURI!=="string"||typeof t.insertBefore!=="function"||typeof t.hasChildNodes!=="function")};
/**
     * Checks whether the given object is a DOM node.
     *
     * @param value object to check whether it's a DOM node
     * @return true is object is a DOM node
     */const zt=function(t){return typeof a==="function"&&t instanceof a};function $t(t,n,o){GR(t,(t=>{t.call(e,n,o,Nt)}))}
/**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     * @param currentNode to check for permission to exist
     * @return true if node was killed, false if left alive
     */const jt=function(t){let n=null;$t(_.beforeSanitizeElements,t,null);if(Ut(t)){Pt(t);return true}const o=_t(t.nodeName);$t(_.uponSanitizeElement,t,{tagName:o,allowedTags:I});if(G&&t.hasChildNodes()&&!zt(t.firstElementChild)&&aA(/<[/\w!]/g,t.innerHTML)&&aA(/<[/\w!]/g,t.textContent)){Pt(t);return true}if(t.nodeType===IA.progressingInstruction){Pt(t);return true}if(G&&t.nodeType===IA.comment&&aA(/<[/\w]/g,t.data)){Pt(t);return true}if(!I[o]||j[o]){if(!j[o]&&Wt(o)){if($.tagNameCheck instanceof RegExp&&aA($.tagNameCheck,o))return false;if($.tagNameCheck instanceof Function&&$.tagNameCheck(o))return false}if(rt&&!it[o]){const e=v(t)||t.parentNode;const n=y(t)||t.childNodes;if(n&&e){const o=n.length;for(let s=o-1;s>=0;--s){const o=g(n[s],true);o.__removalCount=(t.__removalCount||0)+1;e.insertBefore(o,b(t))}}}Pt(t);return true}if(t instanceof i&&!Lt(t)){Pt(t);return true}if((o==="noscript"||o==="noembed"||o==="noframes")&&aA(/<\/no(script|embed|frames)/i,t.innerHTML)){Pt(t);return true}if(Y&&t.nodeType===IA.text){n=t.textContent;GR([N,R,A],(t=>{n=oA(n,t," ")}));if(t.textContent!==n){ZR(e.removed,{element:t.cloneNode()});t.textContent=n}}$t(_.afterSanitizeElements,t,null);return false};
/**
     * _isValidAttribute
     *
     * @param lcTag Lowercase tag name of containing element.
     * @param lcName Lowercase attribute name.
     * @param value Attribute value.
     * @return Returns true if `value` is valid, otherwise false.
     */const Ht=function(t,e,o){if(nt&&(e==="id"||e==="name")&&(o in n||o in Rt))return false;if(V&&!H[e]&&aA(D,e));else if(W&&aA(T,e));else if(!U[e]||H[e]){if(!(Wt(t)&&($.tagNameCheck instanceof RegExp&&aA($.tagNameCheck,t)||$.tagNameCheck instanceof Function&&$.tagNameCheck(t))&&($.attributeNameCheck instanceof RegExp&&aA($.attributeNameCheck,e)||$.attributeNameCheck instanceof Function&&$.attributeNameCheck(e))||e==="is"&&$.allowCustomizedBuiltInElements&&($.tagNameCheck instanceof RegExp&&aA($.tagNameCheck,o)||$.tagNameCheck instanceof Function&&$.tagNameCheck(o))))return false}else if(mt[e]);else if(aA(M,oA(o,L,"")));else if(e!=="src"&&e!=="xlink:href"&&e!=="href"||t==="script"||sA(o,"data:")!==0||!dt[t]){if(q&&!aA(B,oA(o,L,"")));else if(o)return false}else;return true};
/**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param tagName name of the tag of the node to sanitize
     * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */const Wt=function(t){return t!=="annotation-xml"&&nA(t,P)};
/**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param currentNode to sanitize
     */const Vt=function(t){$t(_.beforeSanitizeAttributes,t,null);const{attributes:n}=t;if(!n||Ut(t))return;const o={attrName:"",attrValue:"",keepAttr:true,allowedAttributes:U,forceKeepAttr:void 0};let s=n.length;while(s--){const r=n[s];const{name:c,namespaceURI:a,value:i}=r;const l=_t(c);const d=i;let u=c==="value"?d:rA(d);o.attrName=l;o.attrValue=u;o.keepAttr=true;o.forceKeepAttr=void 0;$t(_.uponSanitizeAttribute,t,o);u=o.attrValue;if(ot&&(l==="id"||l==="name")){Mt(c,t);u=st+u}if(G&&aA(/((--!?|])>)|<\/(style|title)/i,u)){Mt(c,t);continue}if(o.forceKeepAttr)continue;if(!o.keepAttr){Mt(c,t);continue}if(!K&&aA(/\/>/i,u)){Mt(c,t);continue}Y&&GR([N,R,A],(t=>{u=oA(u,t," ")}));const m=_t(t.nodeName);if(Ht(m,l,u)){if(C&&typeof f==="object"&&typeof f.getAttributeType==="function")if(a);else switch(f.getAttributeType(m,l)){case"TrustedHTML":u=C.createHTML(u);break;case"TrustedScriptURL":u=C.createScriptURL(u);break}if(u!==d)try{a?t.setAttributeNS(a,c,u):t.setAttribute(c,u);Ut(t)?Pt(t):QR(e.removed)}catch(e){Mt(c,t)}}else Mt(c,t)}$t(_.afterSanitizeAttributes,t,null)};
/**
     * _sanitizeShadowDOM
     *
     * @param fragment to iterate over recursively
     */const qt=function t(e){let n=null;const o=Ft(e);$t(_.beforeSanitizeShadowDOM,e,null);while(n=o.nextNode()){$t(_.uponSanitizeShadowNode,n,null);jt(n);Vt(n);n.content instanceof r&&t(n.content)}$t(_.afterSanitizeShadowDOM,e,null)};e.sanitize=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};let s=null;let c=null;let i=null;let l=null;yt=!t;yt&&(t="\x3c!--\x3e");if(typeof t!=="string"&&!zt(t)){if(typeof t.toString!=="function")throw iA("toString is not a function");t=t.toString();if(typeof t!=="string")throw iA("dirty is not a string, aborting")}if(!e.isSupported)return t;Q||Dt(n);e.removed=[];typeof t==="string"&&(ct=false);if(ct){if(t.nodeName){const e=_t(t.nodeName);if(!I[e]||j[e])throw iA("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof a){s=It("\x3c!----\x3e");c=s.ownerDocument.importNode(t,true);c.nodeType===IA.element&&c.nodeName==="BODY"||c.nodeName==="HTML"?s=c:s.appendChild(c)}else{if(!J&&!Y&&!X&&t.indexOf("<")===-1)return C&&et?C.createHTML(t):t;s=It(t);if(!s)return J?null:et?w:""}s&&Z&&Pt(s.firstChild);const d=Ft(ct?t:s);while(i=d.nextNode()){jt(i);Vt(i);i.content instanceof r&&qt(i.content)}if(ct)return t;if(J){if(tt){l=x.call(s.ownerDocument);while(s.firstChild)l.appendChild(s.firstChild)}else l=s;(U.shadowroot||U.shadowrootmode)&&(l=S.call(o,l,true));return l}let u=X?s.outerHTML:s.innerHTML;X&&I["!doctype"]&&s.ownerDocument&&s.ownerDocument.doctype&&s.ownerDocument.doctype.name&&aA(LA,s.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+s.ownerDocument.doctype.name+">\n"+u);Y&&GR([N,R,A],(t=>{u=oA(u,t," ")}));return C&&et?C.createHTML(u):u};e.setConfig=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Dt(t);Q=true};e.clearConfig=function(){Nt=null;Q=false};e.isValidAttribute=function(t,e,n){Nt||Dt({});const o=_t(t);const s=_t(e);return Ht(o,s,n)};e.addHook=function(t,e){typeof e==="function"&&ZR(_[t],e)};e.removeHook=function(t,e){if(e!==void 0){const n=XR(_[t],e);return n===-1?void 0:JR(_[t],n,1)[0]}return QR(_[t])};e.removeHooks=function(t){_[t]=[]};e.removeAllHooks=function(){_=zA()};return e}var jA=$A();const HA=co.each,WA=co.trim;const VA=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];const qA={ftp:21,http:80,https:443,mailto:25};const KA=["img","video"];const YA=(t,e)=>N(t)?!t:!N(e)||!X(KA,e);const GA=t=>{try{return decodeURIComponent(t)}catch{return unescape(t)}};const XA=(t,e,n)=>{const o=GA(e).replace(/\s/g,"");return!t.allow_script_urls&&(!!/((java|vb)script|mhtml):/i.test(o)||!t.allow_html_data_urls&&(/^data:image\//i.test(o)?YA(t.allow_svg_data_urls,n)&&/^data:image\/svg\+xml/i.test(o):/^data:/i.test(o)))};class URI{static parseDataUri(t){let e;const n=decodeURIComponent(t).split(",");const o=/data:([^;]+)/.exec(n[0]);o&&(e=o[1]);return{type:e,data:n[1]}}
/**
     * Check to see if a URI is safe to use in the Document Object Model (DOM). This will return
     * true if the URI can be used in the DOM without potentially triggering a security issue.
     *
     * @method isDomSafe
     * @static
     * @param {String} uri The URI to be validated.
     * @param {Object} context An optional HTML tag name where the element is being used.
     * @param {Object} options An optional set of options to use when determining if the URI is safe.
     * @return {Boolean} True if the URI is safe, otherwise false.
     */static isDomSafe(t,e,n={}){if(n.allow_script_urls)return true;{const o=ul.decode(t).replace(/[\s\u0000-\u001F]+/g,"");return!XA(n,o,e)}}static getDocumentBaseUrl(t){let e;e=t.protocol.indexOf("http")!==0&&t.protocol!=="file:"?t.href??"":t.protocol+"//"+t.host+t.pathname;if(/^[^:]+:\/\/\/?[^\/]+\//.test(e)){e=e.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,"");/[\/\\]$/.test(e)||(e+="/")}return e}source;protocol;authority;userInfo;user;password;host;port;relative;path="";directory="";file;query;anchor;settings;
/**
     * Constructs a new URI instance.
     *
     * @constructor
     * @method URI
     * @param {String} url URI string to parse.
     * @param {Object} settings Optional settings object.
     */
constructor(t,e={}){t=WA(t);this.settings=e;const n=e.base_uri;const o=this;if(/^([\w\-]+):([^\/]{2})/i.test(t)||/^\s*#/.test(t)){o.source=t;return}const s=t.indexOf("//")===0;t.indexOf("/")!==0||s||(t=(n&&n.protocol||"http")+"://mce_host"+t);if(!/^[\w\-]*:?\/\//.test(t)){const e=n?n.path:new URI(document.location.href).directory;if(n?.protocol==="")t="//mce_host"+o.toAbsPath(e,t);else{const s=/([^#?]*)([#?]?.*)/.exec(t);s&&(t=(n&&n.protocol||"http")+"://mce_host"+o.toAbsPath(e,s[1])+s[2])}}t=t.replace(/@@/g,"(mce_at)");const r=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(t);r&&HA(VA,((t,e)=>{let n=r[e];n&&(n=n.replace(/\(mce_at\)/g,"@@"));o[t]=n}));if(n){o.protocol||(o.protocol=n.protocol);o.userInfo||(o.userInfo=n.userInfo);o.port||o.host!=="mce_host"||(o.port=n.port);o.host&&o.host!=="mce_host"||(o.host=n.host);o.source=""}s&&(o.protocol="")}
/**
     * Sets the internal path part of the URI.
     *
     * @method setPath
     * @param {String} path Path string to set.
     */setPath(t){const e=/^(.*?)\/?(\w+)?$/.exec(t);if(e){this.path=e[0];this.directory=e[1];this.file=e[2]}this.source="";this.getURI()}
/**
     * Converts the specified URI into a relative URI based on the current URI instance location.
     *
     * @method toRelative
     * @param {String} uri URI to convert into a relative path/URI.
     * @return {String} Relative URI from the point specified in the current URI instance.
     * @example
     * // Converts an absolute URL to an relative URL url will be somedir/somefile.htm
     * const url = new tinymce.util.URI('http://www.site.com/dir/').toRelative('http://www.site.com/dir/somedir/somefile.htm');
     */toRelative(t){if(t==="./")return t;const e=new URI(t,{base_uri:this});if(e.host!=="mce_host"&&this.host!==e.host&&e.host||this.port!==e.port||this.protocol!==e.protocol&&e.protocol!=="")return e.getURI();const n=this.getURI(),o=e.getURI();if(n===o||n.charAt(n.length-1)==="/"&&n.substr(0,n.length-1)===o)return n;let s=this.toRelPath(this.path,e.path);e.query&&(s+="?"+e.query);e.anchor&&(s+="#"+e.anchor);return s}
/**
     * Converts the specified URI into a absolute URI based on the current URI instance location.
     *
     * @method toAbsolute
     * @param {String} uri URI to convert into a relative path/URI.
     * @param {Boolean} noHost No host and protocol prefix.
     * @return {String} Absolute URI from the point specified in the current URI instance.
     * @example
     * // Converts an relative URL to an absolute URL url will be http://www.site.com/dir/somedir/somefile.htm
     * const url = new tinymce.util.URI('http://www.site.com/dir/').toAbsolute('somedir/somefile.htm');
     */toAbsolute(t,e){const n=new URI(t,{base_uri:this});return n.getURI(e&&this.isSameOrigin(n))}
/**
     * Determine whether the given URI has the same origin as this URI.  Based on RFC-6454.
     * Supports default ports for protocols listed in DEFAULT_PORTS.  Unsupported protocols will fail safe: they
     * won't match, if the port specifications differ.
     *
     * @method isSameOrigin
     * @param {tinymce.util.URI} uri Uri instance to compare.
     * @returns {Boolean} True if the origins are the same.
     */isSameOrigin(t){if(this.host==t.host&&this.protocol==t.protocol){if(this.port==t.port)return true;const e=this.protocol?qA[this.protocol]:null;if(e&&(this.port||e)==(t.port||e))return true}return false}
/**
     * Converts a absolute path into a relative path.
     *
     * @method toRelPath
     * @param {String} base Base point to convert the path from.
     * @param {String} path Absolute path to convert into a relative path.
     */toRelPath(t,e){let n,o,s=0,r="";const c=t.substring(0,t.lastIndexOf("/")).split("/");const a=e.split("/");if(c.length>=a.length)for(n=0,o=c.length;n<o;n++)if(n>=a.length||c[n]!==a[n]){s=n+1;break}if(c.length<a.length)for(n=0,o=a.length;n<o;n++)if(n>=c.length||c[n]!==a[n]){s=n+1;break}if(s===1)return e;for(n=0,o=c.length-(s-1);n<o;n++)r+="../";for(n=s-1,o=a.length;n<o;n++)r+=n!==s-1?"/"+a[n]:a[n];return r}
/**
     * Converts a relative path into a absolute path.
     *
     * @method toAbsPath
     * @param {String} base Base point to convert the path from.
     * @param {String} path Relative path to convert into an absolute path.
     */toAbsPath(t,e){let n=0;const o=/\/$/.test(e)?"/":"";const s=t.split("/");const r=e.split("/");const c=[];HA(s,(t=>{t&&c.push(t)}));const a=[];for(let t=r.length-1;t>=0;t--)r[t].length!==0&&r[t]!=="."&&(r[t]!==".."?n>0?n--:a.push(r[t]):n++);const i=c.length-n;let l;l=i<=0?ft(a).join("/"):c.slice(0,i).join("/")+"/"+ft(a).join("/");l.indexOf("/")!==0&&(l="/"+l);o&&l.lastIndexOf("/")!==l.length-1&&(l+=o);return l}
/**
     * Returns the full URI of the internal structure.
     *
     * @method getURI
     * @param {Boolean} noProtoHost Optional no host and protocol part. Defaults to false.
     */getURI(t=false){let e;if(!this.source||t){e="";if(!t){this.protocol?e+=this.protocol+"://":e+="//";this.userInfo&&(e+=this.userInfo+"@");this.host&&(e+=this.host);this.port&&(e+=":"+this.port)}this.path&&(e+=this.path);this.query&&(e+="?"+this.query);this.anchor&&(e+="#"+this.anchor);this.source=e}return this.source}}const QA=co.makeMap("src,href,data,background,action,formaction,poster,xlink:href");const ZA="data-mce-type";let JA=0;const tD=(t,e,n,o,s)=>{const r=e.validate;const c=n.getSpecialElements();if(t.nodeType===Eo){!e.allow_conditional_comments&&/^\[if/i.test(t.nodeValue??"")&&(t.nodeValue=" "+t.nodeValue);e.sanitize&&e.allow_html_in_comments&&C(t.nodeValue)&&(t.nodeValue=iR(t.nodeValue))}const a=s?.tagName??t.nodeName.toLowerCase();if(o!=="html"&&n.isValid(o)){N(s)&&(s.allowedTags[a]=true);return}if(t.nodeType!==So||a==="body")return;const i=fo.fromDom(t);const l=Ws(i,ZA);const d=js(i,"data-mce-bogus");if(!l&&C(d)){d==="all"?Gs(i):Xs(i);return}const u=n.getElementRule(a);if(!r||u){N(s)&&(s.allowedTags[a]=true);if(r&&u&&!l){J(u.attributesForced??[],(t=>{zs(i,t.name,t.value==="{$uid}"?"mce_"+JA++:t.value)}));J(u.attributesDefault??[],(t=>{Ws(i,t.name)||zs(i,t.name,t.value==="{$uid}"?"mce_"+JA++:t.value)}));if(u.attributesRequired&&!Q(u.attributesRequired,(t=>Ws(i,t)))){Xs(i);return}if(u.removeEmptyAttrs&&qs(i)){Xs(i);return}u.outputName&&u.outputName!==a&&er(i,u.outputName)}}else Pt(c,a)?Gs(i):Xs(i)};const eD=(t,e,n,o,s)=>{const r=t.tagName.toLowerCase();const{attrName:c,attrValue:a}=s;s.keepAttr=nD(e,n,o,r,c,a);if(s.keepAttr){s.allowedAttributes[c]=true;sD(c,n,t.nodeName)&&(s.attrValue=c);e.allow_svg_data_urls&&we(a,"data:image/svg+xml")&&(s.forceKeepAttr=true)}else oD(t,c)&&(s.forceKeepAttr=true)};const nD=(t,e,n,o,s,r)=>n!=="html"&&!ii(o)||!(s in QA&&XA(t,r,o))&&(!t.validate||e.isValid(o,s)||we(s,"data-")||we(s,"aria-"));const oD=(t,e)=>t.hasAttribute(ZA)&&(e==="id"||e==="class"||e==="style");const sD=(t,e,n)=>t in e.getBoolAttrs()&&!Pt(e.getCustomElements(),n.toLowerCase());const rD=(t,e,n,o)=>{const{attributes:s}=t;for(let r=s.length-1;r>=0;r--){const c=s[r];const a=c.name;const i=c.value;nD(e,n,o,t.tagName.toLowerCase(),a,i)||oD(t,a)?sD(a,n,t.nodeName)&&t.setAttribute(a,a):t.removeAttribute(a)}};const cD=(t,e,n)=>{const o=jA();o.addHook("uponSanitizeElement",((o,s)=>{tD(o,t,e,n.track(o),s)}));o.addHook("uponSanitizeAttribute",((o,s)=>{eD(o,t,e,n.current(),s)}));return o};const aD=(t,e)=>{const n={IN_PLACE:true,ALLOW_UNKNOWN_PROTOCOLS:true,ALLOWED_TAGS:["#comment","#cdata-section","body","html"],ALLOWED_ATTR:[]};const o={...n};o.PARSER_MEDIA_TYPE=e;t.allow_script_urls?o.ALLOWED_URI_REGEXP=/.*/:t.allow_html_data_urls&&(o.ALLOWED_URI_REGEXP=/^(?!(\w+script|mhtml):)/i);return o};const iD=t=>{const e=["type","href","role","arcrole","title","show","actuate","label","from","to"].map((t=>`xlink:${t}`));const n={IN_PLACE:true,USE_PROFILES:{html:true,svg:true,svgFilters:true},ALLOWED_ATTR:e};jA().sanitize(t,n)};const lD=(t,e)=>{const n={IN_PLACE:true,USE_PROFILES:{mathMl:true}};const o=jA();const s=e.allow_mathml_annotation_encodings;const r=E(s)&&s.length>0;const c=t=>{const e=t.getAttribute("encoding");return r&&C(e)&&X(s,e)};const a=(t,n)=>r&&n==="semantics"?Optional.some(true):n==="annotation"?Optional.some(ha(t)&&c(t)):E(e.extended_mathml_elements)&&e.extended_mathml_elements.includes(n)?Optional.from(true):Optional.none();o.addHook("uponSanitizeElement",((t,n)=>{const o=n.tagName??t.nodeName.toLowerCase();const s=a(t,o);s.each((s=>{n.allowedTags[o]=s;!s&&e.sanitize&&ha(t)&&t.remove()}))}));o.addHook("uponSanitizeAttribute",((t,n)=>{if(E(e.extended_mathml_attributes)){const t=e.extended_mathml_attributes.includes(n.attrName);t&&(n.forceKeepAttr=true)}}));o.sanitize(t,n)};const dD=t=>e=>{const n=di(e);if(n==="svg")iD(e);else{if(n!=="math")throw new Error("Not a namespace element");lD(e,t)}};const uD=(t,e)=>{const n=mi();if(t.sanitize){const o=cD(t,e,n);const s=(e,s)=>{o.sanitize(e,aD(t,s));o.removed=[];n.reset()};return{sanitizeHtmlElement:s,sanitizeNamespaceElement:dD(t)}}{const o=(o,s)=>{const r=document.createNodeIterator(o,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT);let c;while(c=r.nextNode()){const o=n.track(c);tD(c,t,e,o);ha(c)&&rD(c,t,e,o)}n.reset()};const s=T;return{sanitizeHtmlElement:o,sanitizeNamespaceElement:s}}};const mD=["script","style","template","param","meta","title","link"];const fD=co.makeMap,pD=co.extend;const gD=(t,e,n,o,s)=>{const r=t.name;const c=r in n&&r!=="title"&&r!=="textarea"&&r!=="noscript";const a=e.childNodes;for(let e=0,r=a.length;e<r;e++){const r=a[e];const i=new AstNode(r.nodeName.toLowerCase(),r.nodeType);if(ha(r)){const t=r.attributes;for(let e=0,n=t.length;e<n;e++){const n=t[e];i.attr(n.name,n.value)}if(ii(i.name)){o(r);i.value=r.innerHTML}}else if(Na(r)){i.value=r.data;c&&(i.raw=true)}else Da(r)?i.value=s?lR(r.data):r.data:(Ra(r)||Aa(r))&&(i.value=r.data);if(ja(r)){const t=AstNode.create("#text");t.value=r.innerHTML;t.raw=true;i.append(t)}else ii(i.name)||gD(i,r,n,o,s);t.append(i)}};const hD=(t,e,n)=>{const o=[];for(let n=t,s=n;n;s=n,n=n.walk()){const r=n;J(e,(t=>t(r)));_(r.parent)&&r!==t?n=s:o.push(r)}for(let t=o.length-1;t>=0;t--){const e=o[t];J(n,(t=>t(e)))}};const bD=(t,e,n,o)=>{const s=n.validate;const r=e.getNonEmptyElements();const c=e.getWhitespaceElements();const a=pD(fD(mD),e.getBlockElements());const i=Pl(e);const l=/[ \t\r\n]+/g;const d=/^[ \t\r\n]+/;const u=/[ \t\r\n]+$/;const m=t=>{let e=t.parent;while(N(e)){if(e.name in c)return true;e=e.parent}return false};const f=t=>{let n=t;while(N(n)){if(n.name in i)return GN(e,r,c,n);n=n.parent}return false};const p=n=>n.name in a||Ai(e,n)||ii(n.name)&&n.parent===t;const g=(e,n)=>{const s=n?e.prev:e.next;return!N(s)&&!_(e.parent)&&(p(e.parent)&&(e.parent!==t||o.isRootContent===true))};const h=t=>{if(t.type===3&&!m(t)){let e=t.value??"";e=e.replace(l," ");(XN(t.prev,p)||g(t,true))&&(e=e.replace(d,""));e.length===0||e===" "&&t.prev&&t.prev.type===Eo&&t.next&&t.next.type===Eo?t.remove():t.value=e}};const b=t=>{if(t.type===1){const a=e.getElementRule(t.name);if(s&&a){const s=GN(e,r,c,t);a.paddInEmptyBlock&&s&&f(t)?VN(n,o,p,t):a.removeEmpty&&s?p(t)?t.remove():t.unwrap():a.paddEmpty&&(s||qN(t))&&VN(n,o,p,t)}}else if(t.type===3&&!m(t)){let e=t.value??"";(t.next&&p(t.next)||g(t,false))&&(e=e.replace(u,""));e.length===0?t.remove():t.value=e}};return[h,b]};const yD=(t,e)=>{const n=e.forced_root_block??t.forced_root_block;return n===false?"":n===true?"p":n};const vD=' xmlns="http://www.w3.org/1999/xhtml"';const CD=(t={},e=Il())=>{const n=aR();const o=aR();const s={validate:true,root_name:"body",sanitize:true,allow_html_in_comments:false,...t};const r=new DOMParser;const c=uD(s,e);const a=(t,n,o="html",s=false)=>{const a=o==="xhtml";const i=a?"application/xhtml+xml":"text/html";const l=Pt(e.getSpecialElements(),n.toLowerCase());const d=l?`<${n}>${t}</${n}>`:t;const u=()=>/^[\s]*<head/i.test(t)||/^[\s]*<html/i.test(t)||/^[\s]*<!DOCTYPE/i.test(t)?`<html${a?vD:""}>${d}</html>`:a?`<html${vD}><head></head><body>${d}</body></html>`:`<body>${d}</body>`;const m=r.parseFromString(u(),i);const f=s?m.documentElement:m.body;c.sanitizeHtmlElement(f,i);return l?f.firstChild:f};
/**
     * Adds a node filter function to the parser, the parser will collect the specified nodes by name
     * and then execute the callback once it has finished parsing the document.
     *
     * @method addNodeFilter
     * @param {String} name Comma separated list of nodes to collect.
     * @param {Function} callback Callback function to execute once it has collected nodes.
     * @example
     * parser.addNodeFilter('p,h1', (nodes, name) => {
     *   for (var i = 0; i < nodes.length; i++) {
     *     console.log(nodes[i].name);
     *   }
     * });
     */const i=n.addFilter;const l=n.getFilters;
/**
     * Removes a node filter function or removes all filter functions from the parser for the node names provided.
     *
     * @method removeNodeFilter
     * @param {String} name Comma separated list of node names to remove filters for.
     * @param {Function} callback Optional callback function to only remove a specific callback.
     * @example
     * // Remove a single filter
     * parser.removeNodeFilter('p,h1', someCallback);
     *
     * // Remove all filters
     * parser.removeNodeFilter('p,h1');
     */const d=n.removeFilter;
/**
     * Adds an attribute filter function to the parser, the parser will collect nodes that has the specified attributes
     * and then execute the callback once it has finished parsing the document.
     *
     * @method addAttributeFilter
     * @param {String} name Comma separated list of attributes to collect.
     * @param {Function} callback Callback function to execute once it has collected nodes.
     * @example
     * parser.addAttributeFilter('src,href', (nodes, name) => {
     *   for (let i = 0; i < nodes.length; i++) {
     *     console.log(nodes[i].name);
     *   }
     * });
     */const u=o.addFilter;const m=o.getFilters;
/**
     * Removes an attribute filter function or removes all filter functions from the parser for the attribute names provided.
     *
     * @method removeAttributeFilter
     * @param {String} name Comma separated list of attribute names to remove filters for.
     * @param {Function} callback Optional callback function to only remove a specific callback.
     * @example
     * // Remove a single filter
     * parser.removeAttributeFilter('src,href', someCallback);
     *
     * // Remove all filters
     * parser.removeAttributeFilter('src,href');
     */const f=o.removeFilter;const p=(t,n)=>{nR(e,t)&&n.push(t)};const g=(t,n)=>{const o=C(n.attr(ZA));const s=n.type===1&&!Pt(t,n.name)&&!Ai(e,n)&&!ii(n.name);return n.type===3||s&&!o};const h=(t,n)=>{const o=pD(fD(mD),e.getBlockElements());const r=/^[ \t\r\n]+/;const c=/[ \t\r\n]+$/;let a=t.firstChild,i=null;const l=t=>{if(t){a=t.firstChild;a&&a.type===3&&(a.value=a.value?.replace(r,""));a=t.lastChild;a&&a.type===3&&(a.value=a.value?.replace(c,""))}};if(e.isValidChild(t.name,n.toLowerCase())){while(a){const e=a.next;if(g(o,a))if(i)i.append(a);else{i=new AstNode(n,1);i.attr(s.forced_root_block_attrs);t.insert(i,a);i.append(a)}else{l(i);i=null}a=e}l(i)}};
/**
     * Parses the specified HTML string into a DOM like node tree and returns the result.
     *
     * @method parse
     * @param {String} html Html string to sax parse.
     * @param {Object} args Optional args object that gets passed to all filter functions.
     * @return {tinymce.html.Node} Root node containing the tree.
     * @example
     * const rootNode = tinymce.html.DomParser({...}).parse('<b>text</b>');
     */const b=(t,n={})=>{const o=s.validate;const r=(n.context??s.root_name)==="#document";const i=n.context??(r?"html":s.root_name);const d=a(t,i,n.format,r);Oi(e,d);const u=new AstNode(i,11);gD(u,d,e.getSpecialElements(),c.sanitizeNamespaceElement,s.sanitize&&s.allow_html_in_comments);d.innerHTML="";const[f,g]=bD(u,e,s,n);const b=[];const y=o?t=>p(t,b):T;const v={nodes:{},attributes:{}};const C=t=>$N(l(),m(),t,v);hD(u,[f,C],[g,y]);b.reverse();o&&b.length>0&&(n.context?n.invalid=true:tR(b,e,u,C));const w=yD(s,n);w&&(u.name==="body"||n.isRootContent)&&h(u,w);n.invalid||HN(v,n);return u};const y={schema:e,addAttributeFilter:u,getAttributeFilters:m,removeAttributeFilter:f,addNodeFilter:i,getNodeFilters:l,removeNodeFilter:d,parse:b};FR(y,s);pR(y,s,e);return y};const wD=t=>t instanceof AstNode;const OD=t=>wD(t)?DE({validate:false}).serialize(t):t;const ED=(t,e,n)=>{const o=OD(t);const s=e(o);if(s.isDefaultPrevented())return s;if(wD(t)){if(s.content!==o){const e=CD({validate:false,forced_root_block:false,...n}).parse(s.content,{context:t.name});return{...s,content:e}}return{...s,content:t}}return s};const xD=t=>({sanitize:mb(t),sandbox_iframes:Ob(t),sandbox_iframes_exclusions:Eb(t)});const kD=(t,e)=>{if(e.no_events)return Wt.value(e);{const n=ag(t,e);return n.isDefaultPrevented()?Wt.error(ig(t,{content:"",...n}).content):Wt.value(n)}};const SD=(t,e,n)=>{if(n.no_events)return e;{const o=ED(e,(e=>ig(t,{...n,content:e})),xD(t));return o.content}};const _D=(t,e)=>{if(e.no_events)return Wt.value(e);{const n=ED(e.content,(n=>rg(t,{...e,content:n})),xD(t));if(n.isDefaultPrevented()){cg(t,n);return Wt.error(void 0)}return Wt.value(n)}};const ND=(t,e,n)=>{n.no_events||cg(t,{...n,content:e})};const RD="autoresize_on_init,content_editable_state,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,tabfocus_elements,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_enable_default_filters,paste_filter_drop,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists,template_cdate_classes,template_mdate_classes,template_selected_content_classes,template_preview_replace_values,template_replace_values,templates,template_cdate_format,template_mdate_format".split(",");const AD=["content_css_cors"];const DD="bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,template,textcolor,rtc".split(",");const TD=[{name:"export",replacedWith:"Export to PDF"}];const BD=(t,e)=>{const n=nt(e,(e=>Pt(t,e)));return ht(n)};const LD=t=>{const e=BD(t,RD);const n=t.forced_root_block;n!==false&&n!==""||e.push("forced_root_block (false only)");return ht(e)};const PD=t=>BD(t,AD);const MD=(t,e)=>{const n=co.makeMap(t.plugins," ");const o=t=>Pt(n,t);const s=nt(e,o);return ht(s)};const ID=t=>MD(t,DD);const FD=t=>MD(t,TD.map((t=>t.name)));const UD=(t,e)=>{const n=LD(t);const o=ID(e);const s=o.length>0;const r=n.length>0;const c=e.theme==="mobile";if(s||r||c){const t="\n- ";const e=c?`\n\nThemes:${t}mobile`:"";const a=s?`\n\nPlugins:${t}${o.join(t)}`:"";const i=r?`\n\nOptions:${t}${n.join(t)}`:"";console.warn("The following deprecated features are currently enabled and have been removed in TinyMCE 8.0. These features will no longer work and should be removed from the TinyMCE configuration. See https://www.tiny.cloud/docs/tinymce/8/migration-from-7x/ for more information."+e+a+i)}};const zD=t=>at(TD,(e=>e.name===t)).fold((()=>t),(e=>e.replacedWith?`${t}, replaced by ${e.replacedWith}`:t));const $D=(t,e)=>{const n=PD(t);const o=FD(e);const s=o.length>0;const r=n.length>0;if(s||r){const t="\n- ";const e=s?`\n\nPlugins:${t}${o.map(zD).join(t)}`:"";const c=r?`\n\nOptions:${t}${n.join(t)}`:"";console.warn("The following deprecated features are currently enabled but will be removed soon."+e+c)}};const jD=(t,e)=>{UD(t,e);$D(t,e)};const HD={fire:'The "fire" event api has been deprecated and will be removed in TinyMCE 9. Use "dispatch" instead.',selectionSetContent:'The "editor.selection.setContent" method has been deprecated and will be removed in TinyMCE 9. Use "editor.insertContent" instead.'};const WD=t=>{console.warn(HD[t],(new Error).stack)};const VD=t=>{if(t.dom.length===0){Gs(t);return Optional.none()}return Optional.some(t)};const qD=(t,e)=>t.filter((t=>sw.isBookmarkNode(t.dom))).bind(e?es:ts);const KD=(t,e,n,o,s)=>{const r=t.dom;const c=e.dom;const a=o?r.length:c.length;if(o){Jx(r,c,s,false,!o);n.setStart(c,a)}else{Jx(c,r,s,false,!o);n.setEnd(c,a)}};const YD=(t,e,n)=>{Xo(t).each((o=>{const s=t.dom;e&&Ix(o,Hm(s,0),n)?Qx(s,0,n):!e&&Ux(o,Hm(s,s.length),n)&&Zx(s,s.length,n)}))};const GD=(t,e,n,o,s)=>{t.bind((t=>{const r=o?Zx:Qx;r(t.dom,o?t.dom.length:0,s);return e.filter(jo).map((e=>KD(t,e,n,o,s)))})).orThunk((()=>{const t=qD(e,o).or(e).filter(jo);return t.map((t=>YD(t,o,s)))}))};const XD=(t,e,n)=>{const o=Optional.from(e.firstChild).map(fo.fromDom);const s=Optional.from(e.lastChild).map(fo.fromDom);t.deleteContents();t.insertNode(e);const r=o.bind(ts).filter(jo).bind(VD);const c=s.bind(es).filter(jo).bind(VD);GD(r,o,t,true,n);GD(c,s,t,false,n);t.collapse(false)};const QD=(t,e)=>({format:"html",...t,set:true,selection:true,content:e});const ZD=(t,e)=>{if(e.format!=="raw"){const n=t.selection.getRng();const o=t.dom.getParent(n.commonAncestorContainer,t.dom.isBlock);const s=o?{context:o.nodeName.toLowerCase()}:{};const r=t.parser.parse(e.content,{forced_root_block:false,...s,...e});return DE({validate:false},t.schema).serialize(r)}return e.content};const JD=(t,e,n={})=>{const o=QD(n,e);_D(t,o).each((e=>{const n=ZD(t,e);const o=t.selection.getRng();XD(o,o.createContextualFragment(n),t.schema);t.selection.setRng(o);GO(t,o);ND(t,n,e)}))};const tT=(t,e,n={})=>{WD("selectionSetContent");JD(t,e,n)};const eT=t=>N(t.firstChild)&&t.firstChild===t.lastChild;const nT=t=>t.name==="br"||t.value===Pe;const oT=(t,e)=>{const n=t.getBlockElements();return n[e.name]&&eT(e)&&nT(e.firstChild)};const sT=(t,e)=>{const n=t.getNonEmptyElements();return N(e)&&(e.isEmpty(n)||oT(t,e))};const rT=(t,e)=>{let n=e.firstChild;let o=e.lastChild;n&&n.name==="meta"&&(n=n.next);o&&o.attr("id")==="mce_marker"&&(o=o.prev);sT(t,o)&&(o=o?.prev);return!(!n||n!==o)&&(n.name==="ul"||n.name==="ol")};const cT=t=>{const e=t.firstChild;const n=t.lastChild;e&&e.nodeName==="META"&&e.parentNode?.removeChild(e);n&&n.id==="mce_marker"&&n.parentNode?.removeChild(n);return t};const aT=(t,e,n)=>{const o=e.serialize(n);const s=t.createFragment(o);return cT(s)};const iT=t=>nt(t?.childNodes??[],(t=>t.nodeName==="LI"));const lT=t=>t.data===Pe||La(t);const dT=t=>N(t?.firstChild)&&t.firstChild===t.lastChild&&lT(t.firstChild);const uT=t=>!t.firstChild||dT(t);const mT=t=>t.length>0&&uT(t[t.length-1])?t.slice(0,-1):t;const fT=(t,e)=>{const n=t.getParent(e,t.isBlock);return n&&n.nodeName==="LI"?n:null};const pT=(t,e)=>!!fT(t,e);const gT=(t,e)=>{const n=e.cloneRange();const o=e.cloneRange();n.setStartBefore(t);o.setEndAfter(t);return[n.cloneContents(),o.cloneContents()]};const hT=(t,e)=>{const n=Hm.before(t);const o=jy(e);const s=o.next(n);return s?s.toRange():null};const bT=(t,e)=>{const n=Hm.after(t);const o=jy(e);const s=o.prev(n);return s?s.toRange():null};const yT=(t,e,n,o)=>{const s=gT(t,o);const r=t.parentNode;if(r){r.insertBefore(s[0],t);co.each(e,(e=>{r.insertBefore(e,t)}));r.insertBefore(s[1],t);r.removeChild(t)}return bT(e[e.length-1],n)};const vT=(t,e,n)=>{const o=t.parentNode;o&&co.each(e,(e=>{o.insertBefore(e,t)}));return hT(t,n)};const CT=(t,e,n,o)=>{o.insertAfter(e.reverse(),t);return bT(e[0],n)};const wT=(t,e,n,o)=>{const s=aT(e,t,o);const r=fT(e,n.startContainer);const c=mT(iT(s.firstChild));const a=1,i=2;const l=e.getRoot();const d=t=>{const o=Hm.fromRangeStart(n);const s=jy(e.getRoot());const c=t===a?s.prev(o):s.next(o);const i=c?.getNode();return!i||fT(e,i)!==r};return r?d(a)?vT(r,c,l):d(i)?CT(r,c,l,e):yT(r,c,l,n):null};const OT=["pre"];const ET=(t,e,n,o)=>{const s=e.firstChild;const r=e.lastChild;const c=r.attr("data-mce-type")==="bookmark"?r.prev:r;const a=s===c;const i=X(OT,s.name);if(a&&i){const e=s.attr("contenteditable")!=="false";const r=t.getParent(n,t.isBlock)?.nodeName.toLowerCase()===s.name;const c=Optional.from(US(o,n)).forall(Ia);return e&&r&&c}return false};const xT=za;const kT=(t,e,n)=>{if(N(n)){const o=t.getParent(e.endContainer,xT);return n===o&&Vv(fo.fromDom(n),e)}return false};const ST=(t,e)=>{if(t.isBlock(e)&&t.isEditable(e)){const t=e.childNodes;return t.length===1&&La(t[0])||t.length===0}return false};const _T=(t,e,n)=>{n.getAttribute("data-mce-bogus")==="all"?n.parentNode?.insertBefore(t.dom.createFragment(e),n):ST(t.dom,n)?t.dom.setHTML(n,e):JD(t,e,{no_events:true})};const NT=(t,e,n)=>{Optional.from(t.getParent(e,"td,th")).map(fo.fromDom).each((t=>xu(t,n)))};const RT=(t,e)=>{const n=t.schema.getTextInlineElements();const o=t.dom;if(e){const e=t.getBody();const s=jS(t);const r="*[data-mce-fragment]";const c=o.select(r);co.each(c,(t=>{const c=t=>N(n[t.nodeName.toLowerCase()]);const a=t=>t.childNodes.length===1;const i=t=>!(UE(o,t)||zE(o,t));if(i(t)&&c(t)&&a(t)){const n=ME(o,t);const i=(t,e)=>mt(t,(t=>X(e,t)));const l=e=>a(t)&&o.is(e,r)&&c(e)&&(e.nodeName===t.nodeName&&i(n,ME(o,e))||l(e.children[0]));const d=n=>N(n)&&n!==e&&(s.compare(t,n)||d(n.parentElement));const u=n=>N(n)&&n!==e&&o.is(n,r)&&(jE(o,t,n)||u(n.parentElement));(l(t.children[0])||d(t.parentElement)&&!u(t.parentElement))&&o.remove(t,true)}}));IN(t,or(c))}};const AT=t=>{let e=t;while(e=e.walk())e.type===1&&e.attr("data-mce-fragment","1")};const DT=t=>{co.each(t.getElementsByTagName("*"),(t=>{t.removeAttribute("data-mce-fragment")}))};const TT=t=>!!t.getAttribute("data-mce-fragment");const BT=(t,e)=>N(e)&&!t.schema.getVoidElements()[e.nodeName];const LT=(t,e)=>{let n;const o=t.dom;const s=t.selection;if(!e)return;s.scrollIntoView(e);const r=US(t.getBody(),e);if(r&&o.getContentEditable(r)==="false"){o.remove(e);s.select(r);return}let c=o.createRng();const a=e.previousSibling;if(Na(a)){c.setStart(a,a.nodeValue?.length??0);const t=e.nextSibling;if(Na(t)){a.appendData(t.data);t.parentNode?.removeChild(t)}}else{c.setStartBefore(e);c.setEndBefore(e)}const i=e=>{let n=Hm.fromRangeStart(e);const o=jy(t.getBody());n=o.next(n);return n?.toRange()};const l=o.getParent(e,o.isBlock);o.remove(e);if(l&&o.isEmpty(l)){const t=xT(l);Ys(fo.fromDom(l));c.setStart(l,0);c.setEnd(l,0);if(t||TT(l)||!(n=i(c)))o.add(l,o.create("br",t?{}:{"data-mce-bogus":"1"}));else{c=n;o.remove(l)}}s.setRng(c)};const PT=t=>{const e=t.dom;const n=rR(t.selection.getRng());t.selection.setRng(n);const o=e.getParent(n.startContainer,xT);kT(e,n,o)?vS(t,n,fo.fromDom(o)):Jv(n)||Zv(n)?n.deleteContents():t.getDoc().execCommand("Delete",false)};const MT=t=>{for(let e=t;e;e=e.walk())if(e.attr("id")==="mce_marker")return Optional.some(e);return Optional.none()};const IT=(t,e,n)=>Q(n.children(),FN)&&t.getParent(e,t.isBlock)?.nodeName==="SUMMARY";const FT=(t,e,n)=>{const o=t.selection;const s=t.dom;const r=t.parser;const c=n.merge;const a=DE({validate:true},t.schema);const i='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>';n.preserve_zwsp||(e=_u(e));e.indexOf("{$caret}")===-1&&(e+="{$caret}");e=e.replace(/\{\$caret\}/,i);let l=o.getRng();const d=l.startContainer;const u=t.getBody();if(d===u&&o.isCollapsed()&&s.isBlock(u.firstChild)&&BT(t,u.firstChild)&&s.isEmpty(u.firstChild)){l=s.createRng();l.setStart(u.firstChild,0);l.setEnd(u.firstChild,0);o.setRng(l)}o.isCollapsed()||PT(t);const m=o.getNode();const f={context:m.nodeName.toLowerCase(),data:n.data,insert:true};const p=r.parse(e,f);if(n.paste===true&&rT(t.schema,p)&&pT(s,m)){l=wT(a,s,o.getRng(),p);l&&o.setRng(l);return e}n.paste===true&&ET(s,p,m,t.getBody())&&p.firstChild?.unwrap();AT(p);let g=p.lastChild;if(g&&g.attr("id")==="mce_marker"){const e=g;for(g=g.prev;g;g=g.walk(true)){if(g.name==="table")break;if(g.type===3||!s.isBlock(g.name)){g.parent&&t.schema.isValidChild(g.parent.name,"span")&&g.parent.insert(e,g,g.name==="br");break}}}t._selectionOverrides.showBlockCaretContainer(m);if(f.invalid||IT(s,m,p)){JD(t,i);let n=o.getNode();let c;const l=t.getBody();Ta(n)?n=c=l:c=n;while(c&&c!==l){n=c;c=c.parentNode}e=n===l?l.innerHTML:s.getOuterHTML(n);const d=r.parse(e);const u=MT(d);const m=u.bind(QN).getOr(d);u.each((t=>t.replace(p)));const f=ZN(p);p.unwrap();const g=nt(f,(e=>nR(t.schema,e)));tR(g,t.schema,m);WN(r.getNodeFilters(),r.getAttributeFilters(),d);e=a.serialize(d);n===l?s.setHTML(l,e):s.setOuterHTML(n,e)}else{e=a.serialize(p);_T(t,e,m)}RT(t,c);LT(t,s.get("mce_marker"));DT(t.getBody());NT(s,o.getStart(),t.schema);xi(t.schema,t.getBody(),o.getStart());return e};const UT=t=>{Yw(t)&&nv(t.getBody()).each((e=>{const n=e.getNode();const o=ka(n)?nv(n).getOr(e):e;t.selection.setRng(o.toRange())}))};const zT=(t,e,n)=>{t.dom.setHTML(t.getBody(),e);n!==true&&UT(t)};const $T=(t,e,n,o)=>{n=_u(n);if(n.length===0||/^\s+$/.test(n)){const s='<br data-mce-bogus="1">';e.nodeName==="TABLE"?n="<tr><td>"+s+"</td></tr>":/^(UL|OL)$/.test(e.nodeName)&&(n="<li>"+s+"</li>");const r=Pg(t);if(t.schema.isValidChild(e.nodeName.toLowerCase(),r.toLowerCase())){n=s;n=t.dom.createHTML(r,Mg(t),n)}else n||(n=s);zT(t,n,o.no_selection);return{content:n,html:n}}{o.format!=="raw"&&(n=DE({validate:false},t.schema).serialize(t.parser.parse(n,{isRootContent:true,insert:true})));const s=vu(fo.fromDom(e))?n:co.trim(n);zT(t,s,o.no_selection);return{content:s,html:s}}};const jT=(t,e,n,o)=>{WN(t.parser.getNodeFilters(),t.parser.getAttributeFilters(),n);const s=DE({validate:false},t.schema).serialize(n);const r=_u(vu(fo.fromDom(e))?s:co.trim(s));zT(t,r,o.no_selection);return{content:n,html:r}};const HT=(t,e,n)=>Optional.from(t.getBody()).map((o=>wD(e)?jT(t,o,e,n):$T(t,o,e,n))).getOr({content:e,html:wD(n.content)?"":n.content});const WT={};const VT=Ca(["pre"]);const qT=(t,e)=>{const n=WT[t];n||(WT[t]=[]);WT[t].push(e)};const KT=(t,e)=>{Pt(WT,t)&&J(WT[t],(t=>{t(e)}))};qT("pre",(t=>{const e=t.selection.getRng();const n=t=>e=>{const n=e.previousSibling;return VT(n)&&X(t,n)};const o=(t,e)=>{const n=fo.fromDom(e);const o=Ko(n).dom;Gs(n);Fs(fo.fromDom(t),[fo.fromTag("br",o),fo.fromTag("br",o),...ss(n)])};if(!e.collapsed){const e=t.selection.getSelectedBlocks();const s=nt(nt(e,VT),n(e));J(s,(t=>{o(t.previousSibling,t)}))}}));const YT=co.each;const GT=(t,e,n,o)=>{const s=e=>{if(ba(e)&&ha(e.parentNode)&&t.isEditable(e)){const n=hC(t,e.parentNode);t.getStyle(e,"color")&&n?t.setStyle(e,"text-decoration",n):t.getStyle(e,"text-decoration")===n&&t.setStyle(e,"text-decoration",null)}};if(e.styles&&(e.styles.color||e.styles.textDecoration)){co.walk(o,s,"childNodes");s(o)}};const XT=(t,e,n,o)=>{if(e.styles&&e.styles.backgroundColor){const s=J_(t,"fontSize");Q_(o,(e=>s(e)&&t.isEditable(e)),tN(t,"backgroundColor",mC(e.styles.backgroundColor,n)))}};const QT=(t,e,n,o)=>{if(kC(e)&&(e.inline==="sub"||e.inline==="sup")){const n=J_(t,"fontSize");Q_(o,(e=>n(e)&&t.isEditable(e)),tN(t,"fontSize",""));const s=nt(t.select(e.inline==="sup"?"sub":"sup",o),t.isEditable);t.remove(s,true)}};const ZT=(t,e,n,o)=>{YT(e,(e=>{kC(e)&&YT(t.dom.select(e.inline,o),(o=>{q_(o)&&xN(t,e,n,o,e.exact?o:null)}));X_(t.dom,e,o)}))};const JT=(t,e,n,o,s)=>{const r=s.parentNode;c_(t,r,n,o)&&xN(t,e,o,s)||e.merge_with_parents&&r&&t.dom.getParent(r,(r=>{if(c_(t,r,n,o)){xN(t,e,o,s);return true}return false}))};const tB=co.each;const eB=(t,e,n,o)=>{if(wh(t)&&kC(e)&&n.parentNode){const e=Pl(t.schema);const s=bc(fo.fromDom(n),(t=>rv(t.dom)));return Mt(e,o)&&si(t.schema,n.parentNode,{skipBogus:false,includeZwsp:true})&&!s}return false};const nB=(t,e,n,o)=>{const s=t.formatter.get(e);const r=s[0];const c=!o&&t.selection.isCollapsed();const a=t.dom;const i=t.selection;const l=(e,o)=>{let s=false;tB(e,(e=>{if(!xC(e))return false;if(a.getContentEditable(o)==="false"&&!e.ceFalseOverride)return true;if(N(e.collapsed)&&e.collapsed!==c)return true;if(a.is(o,e.selector)&&!rv(o)){JS(t,o,e,n,o);s=true;return false}return true}));return s};const d=e=>{if(C(e)){const s=a.create(e);JS(t,s,r,n,o);return s}return null};const u=(c,a,i)=>{const u=[];let m=true;const f=r.inline||r.block;const p=d(f);const g=o=>OC(r)&&c_(t,o,e,n);const h=(e,n,o)=>{const s=EC(r)&&cC(t.schema,e)&&aC(t,n,f);return o&&s};const b=(e,n,o,s)=>{const a=e.nodeName.toLowerCase();const l=aC(t,f,a)&&aC(t,n,f);const d=!i&&Na(e)&&Su(e.data);const u=rv(e);const m=!kC(r)||!c.isBlock(e);return(o||s)&&l&&!d&&!u&&m};KC(c,a,(e=>{let o;const a=e=>{let i=false;let d=m;let y=false;const v=e.parentNode;const C=v.nodeName.toLowerCase();const w=c.getContentEditable(e);if(N(w)){d=m;m=w==="true";i=true;y=uC(t,e)}const O=m&&!i;if(!La(e)||eB(t,r,e,C))if(g(e))o=null;else if(h(e,C,O)){const s=c.rename(e,f);JS(t,s,r,n,e);u.push(s);o=null}else{if(xC(r)){let t=l(s,e);!t&&N(v)&&_C(r)&&(t=l(s,v));if(!kC(r)||t){o=null;return}}if(N(p)&&b(e,C,O,y)){if(!o){o=c.clone(p,false);v.insertBefore(o,e);u.push(o)}y&&i&&(m=d);o.appendChild(e)}else{o=null;J(Ct(e.childNodes),a);i&&(m=d);o=null}}else{o=null;wC(r)&&c.remove(e)}};J(e,a)}));r.links===true&&J(u,(e=>{const s=e=>{e.nodeName==="A"&&JS(t,e,r,n,o);J(Ct(e.childNodes),s)};s(e)}));MN(t,e,or(u));J(u,(o=>{const a=t=>{let e=0;J(t.childNodes,(t=>{lC(t)||Nv(t)||e++}));return e};const i=e=>{const o=at(e.childNodes,eC).filter((t=>c.getContentEditable(t)!=="false"&&s_(c,t,r)));return o.map((o=>{const s=c.clone(o,false);JS(t,s,r,n,e);c.replace(s,e,true);c.remove(o,true);return s})).getOr(e)};const l=a(o);if(!(u.length>1)&&c.isBlock(o)||l!==0){if(kC(r)||wC(r)&&r.wrapper){r.exact||l!==1||(o=i(o));ZT(t,s,n,o);JT(t,r,e,n,o);XT(c,r,n,o);GT(c,r,n,o);QT(c,r,n,o);G_(t,r,n,o)}}else c.remove(o,true)}))};const m=tC(o)?o:i.getNode();if(a.getContentEditable(m)!=="false"||uC(t,m)){if(r){if(o)if(tC(o)){if(!l(s,o)){const t=a.createRng();t.setStartBefore(o);t.setEndAfter(o);u(a,qC(a,t,s),true)}}else u(a,o,true);else{if(c&&kC(r)&&!Uv(t).length)k_(t,e,n);else{i.setRng(rR(i.getRng()));oC(t,(()=>{Yv(t,((t,e)=>{const n=e?t:qC(a,t,s);u(a,n,false)}))}),W);t.nodeChanged()}I_(t.formatter,e).each((e=>{const o=H_(t.selection);J(o,(t=>ZS(a,t,e,n)))}))}KT(e,t)}og(t,e,o,n)}else{o=m;l(s,o);og(t,e,o,n)}};const oB=(t,e,n,o)=>{(o||t.selection.isEditable())&&nB(t,e,n,o)};const sB=t=>Pt(t,"vars");const rB=(t,e)=>{t.set({});e.on("NodeChange",(n=>{lB(e,n.element,t.get())}));e.on("FormatApply FormatRemove",(n=>{const o=Optional.from(n.node).map((t=>tC(t)?t:t.startContainer)).bind((t=>ha(t)?Optional.some(t):Optional.from(t.parentElement))).getOrThunk((()=>cB(e)));lB(e,o,t.get())}))};const cB=t=>t.selection.getStart();const aB=(t,e,n,o,s)=>{const r=e=>{const r=t.formatter.matchNode(e,n,s??{},o);return!S(r)};const c=e=>!!n_(t,e,n)||!o&&N(t.formatter.matchNode(e,n,s,true));return ct(e,r,c)};const iB=(t,e)=>{const n=e??cB(t);return nt(bC(t.dom,n),(t=>ha(t)&&!Ea(t)))};const lB=(t,e,n)=>{const o=iB(t,e);kt(n,((n,s)=>{const r=n=>{const r=aB(t,o,s,n.similar,sB(n)?n.vars:void 0);const c=r.isSome();if(n.state.get()!==c){n.state.set(c);const t=r.getOr(e);sB(n)?n.callback(c,{node:t,format:s,parents:o}):J(n.callbacks,(e=>e(c,{node:t,format:s,parents:o})))}};J([n.withSimilar,n.withoutSimilar],r);J(n.withVars,r)}))};const dB=(t,e,n,o,s,r)=>{const c=e.get();J(n.split(","),(e=>{const n=Lt(c,e).getOrThunk((()=>{const t={withSimilar:{state:zt(false),similar:true,callbacks:[]},withoutSimilar:{state:zt(false),similar:false,callbacks:[]},withVars:[]};c[e]=t;return t}));const a=()=>{const n=iB(t);return aB(t,n,e,s,r).isSome()};if(S(r)){const t=s?n.withSimilar:n.withoutSimilar;t.callbacks.push(o);t.callbacks.length===1&&t.state.set(a())}else n.withVars.push({state:zt(a()),similar:s,vars:r,callback:o})}));e.set(c)};const uB=(t,e,n)=>{const o=t.get();J(e.split(","),(t=>Lt(o,t).each((e=>{o[t]={withSimilar:{...e.withSimilar,callbacks:nt(e.withSimilar.callbacks,(t=>t!==n))},withoutSimilar:{...e.withoutSimilar,callbacks:nt(e.withoutSimilar.callbacks,(t=>t!==n))},withVars:nt(e.withVars,(t=>t.callback!==n))}}))));t.set(o)};const mB=(t,e,n,o,s,r)=>{dB(t,e,n,o,s,r);return{unbind:()=>uB(e,n,o)}};const fB=(t,e,n,o)=>{const s=t.formatter.get(e);s&&(!a_(t,e,n,o)||"toggle"in s[0]&&!s[0].toggle?oB(t,e,n,o):ON(t,e,n,o))};const pB=(t,e,n)=>({element:t,width:e,rows:n});const gB=(t,e)=>({element:t,cells:e});const hB=(t,e)=>({x:t,y:e});const bB=(t,e)=>Hs(t,e).bind(Ae).getOr(1);const yB=(t,e,n,o,s)=>{const r=bB(s,"rowspan");const c=bB(s,"colspan");const a=t.rows;for(let t=n;t<n+r;t++){a[t]||(a[t]=gB(Js(o),[]));for(let o=e;o<e+c;o++){const r=a[t].cells;r[o]=t===n&&o===e?s:Zs(s)}}};const vB=(t,e,n)=>{const o=t.rows;const s=o[n]?o[n].cells:[];return!!s[e]};const CB=(t,e,n)=>{while(vB(t,e,n))e++;return e};const wB=t=>rt(t,((t,e)=>e.cells.length>t?e.cells.length:t),0);const OB=(t,e)=>{const n=t.rows;for(let t=0;t<n.length;t++){const o=n[t].cells;for(let n=0;n<o.length;n++)if(To(o[n],e))return Optional.some(hB(n,t))}return Optional.none()};const EB=(t,e,n,o,s)=>{const r=[];const c=t.rows;for(let t=n;t<=s;t++){const n=c[t].cells;const s=e<o?n.slice(e,o+1):n.slice(o,e+1);r.push(gB(c[t].element,s))}return r};const xB=(t,e,n)=>{const o=e.x,s=e.y;const r=n.x,c=n.y;const a=s<c?EB(t,o,s,r,c):EB(t,o,c,r,s);return pB(t.element,wB(a),a)};const kB=(t,e)=>{const n=Zs(t.element);const o=fo.fromTag("tbody");Fs(o,e);Ls(n,o);return n};const SB=t=>Z(t.rows,(t=>{const e=Z(t.cells,(t=>{const e=Js(t);Vs(e,"colspan");Vs(e,"rowspan");return e}));const n=Zs(t.element);Fs(n,e);return n}));const _B=t=>{const e=pB(Zs(t),0,[]);J(gc(t,"tr"),((t,n)=>{J(gc(t,"td,th"),((o,s)=>{yB(e,CB(e,s,n),n,t,o)}))}));return pB(e.element,wB(e.rows),e.rows)};const NB=t=>kB(t,SB(t));const RB=(t,e,n)=>OB(t,e).bind((e=>OB(t,n).map((n=>xB(t,e,n)))));const AB=t=>at(t,(t=>Mo(t)==="ul"||Mo(t)==="ol"));const DB=(t,e)=>at(t,(t=>Mo(t)==="li"&&Vv(t,e))).fold(P([]),(e=>AB(t).map((t=>{const e=fo.fromTag(Mo(t));const n=Dt(hr(t),((t,e)=>we(e,"list-style")));mr(e,n);return[fo.fromTag("li"),e]})).getOr([])));const TB=(t,e)=>{const n=rt(e,((t,e)=>{Ls(e,t);return e}),t);return e.length>0?Tr([n]):n};const BB=t=>hu(t)?Xo(t).filter(gu).fold(P([]),(e=>[t,e])):gu(t)?[t]:[];const LB=(t,e,n)=>{const o=fo.fromDom(e.commonAncestorContainer);const s=ax(o,t);const r=nt(s,(t=>n.isWrapper(Mo(t))));const c=DB(s,e);const a=r.concat(c.length?c:BB(o));return Z(a,Zs)};const PB=()=>Tr([]);const MB=(t,e,n)=>TB(fo.fromDom(e.cloneContents()),LB(t,e,n));const IB=(t,e)=>qr(e,"table",F(To,t));const FB=(t,e)=>IB(t,e[0]).bind((t=>{const n=e[0];const o=e[e.length-1];const s=_B(t);return RB(s,n,o).map((t=>Tr([NB(t)])))})).getOrThunk(PB);const UB=(t,e,n)=>e.length>0&&e[0].collapsed?PB():MB(t,e[0],n);const zB=(t,e,n)=>{const o=Fv(e,t);return o.length>0?FB(t,o):UB(t,e,n)};const $B=(t,e)=>e>=0&&e<t.length&&Dv(t.charAt(e));const jB=t=>_u(t.innerText);const HB=t=>t.map((t=>t.nodeName)).getOr("div").toLowerCase();const WB=t=>Optional.from(t.selection.getRng()).map((e=>{const n=Optional.from(t.dom.getParent(e.commonAncestorContainer,t.dom.isBlock));const o=t.getBody();const s=HB(n);const r=fo.fromDom(e.cloneContents());EE(r);xE(r);const c=t.dom.add(o,s,{"data-mce-bogus":"all",style:"overflow: hidden; opacity: 0;"},r.dom);const a=jB(c);const i=_u(c.textContent??"");t.dom.remove(c);if($B(i,0)||$B(i,i.length-1)){const t=n.getOr(o);const e=jB(t);const s=e.indexOf(a);if(s===-1)return a;{const t=$B(e,s-1);const n=$B(e,s+a.length);return(t?" ":"")+a+(n?" ":"")}}return a})).getOr("");const VB=(t,e)=>{const n=t.selection.getRng(),o=t.dom.create("body");const s=t.selection.getSel();const r=sE(t,Bv(s));const c=e.contextual?zB(fo.fromDom(t.getBody()),r,t.schema).dom:n.cloneContents();c&&o.appendChild(c);return t.selection.serializer.serialize(o,e)};const qB=(t,e)=>{if(e.format==="text")return WB(t);{const n=VB(t,e);return e.format==="tree"?n:t.selection.isCollapsed()?"":n}};const KB=(t,e)=>({...t,format:e,get:true,selection:true,getInner:true});const YB=(t,e,n={})=>{const o=KB(n,e);return kD(t,o).fold(M,(e=>{const n=qB(t,e);return SD(t,n,e)}))};const GB=0,XB=1,QB=2;const ZB=(t,e)=>{const n=t.length+e.length+2;const o=new Array(n);const s=new Array(n);const r=(t,e,n)=>({start:t,end:e,diag:n});const c=(n,o,s,r,a)=>{const l=i(n,o,s,r);if(l===null||l.start===o&&l.diag===o-r||l.end===n&&l.diag===n-s){let c=n;let i=s;while(c<o||i<r)if(c<o&&i<r&&t[c]===e[i]){a.push([GB,t[c]]);++c;++i}else if(o-n>r-s){a.push([QB,t[c]]);++c}else{a.push([XB,e[i]]);++i}}else{c(n,l.start,s,l.start-l.diag,a);for(let e=l.start;e<l.end;++e)a.push([GB,t[e]]);c(l.end,o,l.end-l.diag,r,a)}};const a=(n,o,s,c)=>{let a=n;while(a-o<c&&a<s&&t[a]===e[a-o])++a;return r(n,a,o)};const i=(n,r,c,i)=>{const l=r-n;const d=i-c;if(l===0||d===0)return null;const u=l-d;const m=d+l;const f=(m%2===0?m:m+1)/2;o[1+f]=n;s[1+f]=r+1;let p,g,h,b,y;for(p=0;p<=f;++p){for(g=-p;g<=p;g+=2){h=g+f;g===-p||g!==p&&o[h-1]<o[h+1]?o[h]=o[h+1]:o[h]=o[h-1]+1;b=o[h];y=b-n+c-g;while(b<r&&y<i&&t[b]===e[y]){o[h]=++b;++y}if(u%2!==0&&u-p<=g&&g<=u+p&&s[h-u]<=o[h])return a(s[h-u],g+n-c,r,i)}for(g=u-p;g<=u+p;g+=2){h=g+f-u;g===u-p||g!==u+p&&s[h+1]<=s[h-1]?s[h]=s[h+1]-1:s[h]=s[h-1];b=s[h]-1;y=b-n+c-g;while(b>=n&&y>=c&&t[b]===e[y]){s[h]=b--;y--}if(u%2===0&&-p<=g&&g<=p&&s[h]<=o[h+u])return a(s[h],g+n-c,r,i)}}return null};const l=[];c(0,t.length,0,e.length,l);return l};const JB=t=>ha(t)?t.outerHTML:Na(t)?ul.encodeRaw(t.data,false):Da(t)?"\x3c!--"+t.data+"--\x3e":"";const tL=t=>{let e;const n=document.createElement("div");const o=document.createDocumentFragment();t&&(n.innerHTML=t);while(e=n.firstChild)o.appendChild(e);return o};const eL=(t,e,n)=>{const o=tL(e);if(t.hasChildNodes()&&n<t.childNodes.length){const e=t.childNodes[n];t.insertBefore(o,e)}else t.appendChild(o)};const nL=(t,e)=>{if(t.hasChildNodes()&&e<t.childNodes.length){const n=t.childNodes[e];t.removeChild(n)}};const oL=(t,e)=>{let n=0;J(t,(t=>{if(t[0]===GB)n++;else if(t[0]===XB){eL(e,t[1],n);n++}else t[0]===QB&&nL(e,n)}))};const sL=(t,e)=>nt(Z(Ct(t.childNodes),e?B(_u,JB):JB),(t=>t.length>0));const rL=(t,e)=>{const n=Z(Ct(e.childNodes),JB);oL(ZB(n,t),e);return e};const cL=Be((()=>document.implementation.createHTMLDocument("undo")));const aL=t=>t.querySelector(`iframe, ${Ka}`)!==null;const iL=t=>({type:"fragmented",fragments:t,content:"",bookmark:null,beforeBookmark:null});const lL=t=>({type:"complete",fragments:null,content:t,bookmark:null,beforeBookmark:null});const dL=t=>{const e=t.serializer.getTempAttrs();const n=OE(t.getBody(),e);return aL(n)?iL(sL(n,true)):lL(_u(n.innerHTML))};const uL=(t,e,n)=>{const o=n?e.beforeBookmark:e.bookmark;e.type==="fragmented"?rL(e.fragments,t.getBody()):t.setContent(e.content,{format:"raw",no_selection:!N(o)||!uv(o)||!o.isFakeCaret});if(o){t.selection.moveToBookmark(o);t.selection.scrollIntoView()}};const mL=t=>t.type==="fragmented"?t.fragments.join(""):t.content;const fL=(t,e)=>{const n=fo.fromTag("body",cL());rr(n,mL(e));J(gc(n,"*[data-mce-bogus]"),Xs);t&&J(gc(n,"details[open]"),(t=>Vs(t,"open")));return sr(n)};const pL=(t,e)=>mL(t)===mL(e);const gL=(t,e,n)=>fL(t,e)===fL(t,n);const hL=(t,e,n)=>!(!e||!n)&&(!!pL(e,n)||gL(t,e,n));const bL=t=>t.get()===0;const yL=(t,e,n)=>{bL(n)&&(t.typing=e)};const vL=(t,e)=>{if(t.typing){yL(t,false,e);t.add()}};const CL=t=>{if(t.typing){t.typing=false;t.add()}};const wL=(t,e,n)=>{bL(e)&&n.set(xf(t.selection))};const OL=(t,e,n,o,s,r,c)=>{const a=dL(t);const i=co.extend(r||{},a);if(!bL(o)||t.removed)return null;const l=e.data[n.get()];if(t.dispatch("BeforeAddUndo",{level:i,lastLevel:l,originalEvent:c}).isDefaultPrevented())return null;if(l&&hL(t.readonly,l,i))return null;e.data[n.get()]&&s.get().each((t=>{e.data[n.get()].beforeBookmark=t}));const d=Rh(t);if(d&&e.data.length>d){for(let t=0;t<e.data.length-1;t++)e.data[t]=e.data[t+1];e.data.length--;n.set(e.data.length)}i.bookmark=xf(t.selection);n.get()<e.data.length-1&&(e.data.length=n.get()+1);e.data.push(i);n.set(e.data.length-1);const u={level:i,lastLevel:l,originalEvent:c};if(n.get()>0){t.setDirty(true);t.dispatch("AddUndo",u);t.dispatch("change",u)}else t.dispatch("AddUndo",u);return i};const EL=(t,e,n)=>{e.data=[];n.set(0);e.typing=false;t.dispatch("ClearUndos")};const xL=(t,e,n,o,s)=>{if(e.transact(o)){const o=e.data[n.get()].bookmark;const r=e.data[n.get()-1];uL(t,r,true);e.transact(s)&&(e.data[n.get()-1].beforeBookmark=o)}};const kL=(t,e,n)=>{let o;if(e.get()<n.length-1){e.set(e.get()+1);o=n[e.get()];uL(t,o,false);t.setDirty(true);t.dispatch("Redo",{level:o})}return o};const SL=(t,e,n,o)=>{let s;if(e.typing){e.add();e.typing=false;yL(e,false,n)}if(o.get()>0){o.set(o.get()-1);s=e.data[o.get()];uL(t,s,true);t.setDirty(true);t.dispatch("Undo",{level:s})}return s};const _L=t=>{t.clear();t.add()};const NL=(t,e,n)=>n.get()>0||e.typing&&e.data[0]&&!hL(t.readonly,dL(t),e.data[0]);const RL=(t,e)=>e.get()<t.data.length-1&&!t.typing;const AL=(t,e,n)=>{vL(t,e);t.beforeChange();t.ignore(n);return t.add()};const DL=(t,e)=>{try{t.set(t.get()+1);e()}finally{t.set(t.get()-1)}};const TL=(t,e)=>{const n=t.dom;const o=N(e)?e:t.getBody();J(n.select("table,a",o),(e=>{switch(e.nodeName){case"TABLE":const o=Fh(t);const s=n.getAttrib(e,"border");s&&s!=="0"||!t.hasVisual?n.removeClass(e,o):n.addClass(e,o);break;case"A":if(!n.getAttrib(e,"href")){const o=n.getAttrib(e,"name")||e.id;const s=Uh(t);o&&t.hasVisual?n.addClass(e,s):n.removeClass(e,s)}break}}));t.dispatch("VisualAid",{element:e,hasVisual:t.hasVisual})};const BL=t=>({init:{bindEvents:T},undoManager:{beforeChange:(e,n)=>wL(t,e,n),add:(e,n,o,s,r,c)=>OL(t,e,n,o,s,r,c),undo:(e,n,o)=>SL(t,e,n,o),redo:(e,n)=>kL(t,e,n),clear:(e,n)=>EL(t,e,n),reset:t=>_L(t),hasUndo:(e,n)=>NL(t,e,n),hasRedo:(t,e)=>RL(t,e),transact:(t,e,n)=>AL(t,e,n),ignore:(t,e)=>DL(t,e),extra:(e,n,o,s)=>xL(t,e,n,o,s)},formatter:{match:(e,n,o,s)=>a_(t,e,n,o,s),matchAll:(e,n)=>i_(t,e,n),matchNode:(e,n,o,s)=>c_(t,e,n,o,s),canApply:e=>d_(t,e),closest:e=>l_(t,e),apply:(e,n,o)=>oB(t,e,n,o),remove:(e,n,o,s)=>ON(t,e,n,o,s),toggle:(e,n,o)=>fB(t,e,n,o),formatChanged:(e,n,o,s,r)=>mB(t,e,n,o,s,r)},editor:{getContent:e=>NE(t,e),setContent:(e,n)=>HT(t,e,n),insertContent:(e,n)=>FT(t,e,n),addVisual:e=>TL(t,e)},selection:{getContent:(e,n)=>YB(t,e,n)},autocompleter:{addDecoration:T,removeDecoration:T},raw:{getModel:()=>Optional.none()}});const LL=t=>{const e=t=>w(t)?t:{};const{init:n,undoManager:o,formatter:s,editor:r,selection:c,autocompleter:a,raw:i}=t;return{init:{bindEvents:n.bindEvents},undoManager:{beforeChange:o.beforeChange,add:o.add,undo:o.undo,redo:o.redo,clear:o.clear,reset:o.reset,hasUndo:o.hasUndo,hasRedo:o.hasRedo,transact:(t,e,n)=>o.transact(n),ignore:(t,e)=>o.ignore(e),extra:(t,e,n,s)=>o.extra(n,s)},formatter:{match:(t,n,o,r)=>s.match(t,e(n),r),matchAll:s.matchAll,matchNode:s.matchNode,canApply:t=>s.canApply(t),closest:t=>s.closest(t),apply:(t,n,o)=>s.apply(t,e(n)),remove:(t,n,o,r)=>s.remove(t,e(n)),toggle:(t,n,o)=>s.toggle(t,e(n)),formatChanged:(t,e,n,o,r)=>s.formatChanged(e,n,o,r)},editor:{getContent:t=>r.getContent(t),setContent:(t,e)=>({content:r.setContent(t,e),html:""}),insertContent:(t,e)=>{r.insertContent(t);return""},addVisual:r.addVisual},selection:{getContent:(t,e)=>c.getContent(e)},autocompleter:{addDecoration:a.addDecoration,removeDecoration:a.removeDecoration},raw:{getModel:()=>Optional.some(i.getRawModel())}}};const PL=()=>{const t=P(null);const e=P("");return{init:{bindEvents:T},undoManager:{beforeChange:T,add:t,undo:t,redo:t,clear:T,reset:T,hasUndo:H,hasRedo:H,transact:t,ignore:T,extra:T},formatter:{match:H,matchAll:P([]),matchNode:P(void 0),canApply:H,closest:e,apply:T,remove:T,toggle:T,formatChanged:P({unbind:T})},editor:{getContent:e,setContent:P({content:"",html:""}),insertContent:P(""),addVisual:T},selection:{getContent:e},autocompleter:{addDecoration:T,removeDecoration:T},raw:{getModel:P(Optional.none())}}};const ML=t=>Pt(t.plugins,"rtc");const IL=t=>Lt(t.plugins,"rtc").bind((t=>Optional.from(t.setup)));const FL=t=>{const e=t;return IL(t).fold((()=>{e.rtcInstance=BL(t);return Optional.none()}),(t=>{e.rtcInstance=PL();return Optional.some((()=>t().then((t=>{e.rtcInstance=LL(t);return t.rtc.isRemote}))))}))};const UL=t=>t.rtcInstance?t.rtcInstance:BL(t);const zL=t=>{const e=t.rtcInstance;if(e)return e;throw new Error("Failed to get RTC instance not yet initialized.")};const $L=(t,e,n)=>{zL(t).undoManager.beforeChange(e,n)};const jL=(t,e,n,o,s,r,c)=>zL(t).undoManager.add(e,n,o,s,r,c);const HL=(t,e,n,o)=>zL(t).undoManager.undo(e,n,o);const WL=(t,e,n)=>zL(t).undoManager.redo(e,n);const VL=(t,e,n)=>{zL(t).undoManager.clear(e,n)};const qL=(t,e)=>{zL(t).undoManager.reset(e)};const KL=(t,e,n)=>zL(t).undoManager.hasUndo(e,n);const YL=(t,e,n)=>zL(t).undoManager.hasRedo(e,n);const GL=(t,e,n,o)=>zL(t).undoManager.transact(e,n,o);const XL=(t,e,n)=>{zL(t).undoManager.ignore(e,n)};const QL=(t,e,n,o,s)=>{zL(t).undoManager.extra(e,n,o,s)};const ZL=(t,e,n,o,s)=>zL(t).formatter.match(e,n,o,s);const JL=(t,e,n)=>zL(t).formatter.matchAll(e,n);const tP=(t,e,n,o,s)=>zL(t).formatter.matchNode(e,n,o,s);const eP=(t,e)=>zL(t).formatter.canApply(e);const nP=(t,e)=>zL(t).formatter.closest(e);const oP=(t,e,n,o)=>{zL(t).formatter.apply(e,n,o)};const sP=(t,e,n,o,s)=>{zL(t).formatter.remove(e,n,o,s)};const rP=(t,e,n,o)=>{zL(t).formatter.toggle(e,n,o)};const cP=(t,e,n,o,s,r)=>zL(t).formatter.formatChanged(e,n,o,s,r);const aP=(t,e)=>UL(t).editor.getContent(e);const iP=(t,e,n)=>UL(t).editor.setContent(e,n);const lP=(t,e,n)=>UL(t).editor.insertContent(e,n);const dP=(t,e,n)=>zL(t).selection.getContent(e,n);const uP=(t,e)=>zL(t).editor.addVisual(e);const mP=t=>zL(t).init.bindEvents();const fP=(t,e={})=>{const n=e.format?e.format:"html";return dP(t,n,e)};const pP=(t,e,n)=>{if(Pt(t,e)){const o=nt(t[e],(t=>t!==n));o.length===0?delete t[e]:t[e]=o}};var gP=(t,e)=>{let n;let o;const s=(e,n)=>at(n,(n=>t.is(n,e)));const r=e=>t.getParents(e,void 0,t.getRoot());const c=()=>{n={};o={};e.on("NodeChange",(t=>{const e=t.element;const c=r(e);const a={};kt(n,((t,e)=>{s(e,c).each((n=>{if(!o[e]){J(t,(t=>{t(true,{node:n,selector:e,parents:c})}));o[e]=t}a[e]=t}))}));kt(o,((t,n)=>{if(!a[n]){delete o[n];J(t,(t=>{t(false,{node:e,selector:n,parents:c})}))}}))}))};return{selectorChangedWithUnbind:(t,a)=>{n||c();n[t]||(n[t]=[]);n[t].push(a);s(t,r(e.selection.getStart())).each((()=>{o[t]=n[t]}));return{unbind:()=>{pP(n,t,a);pP(o,t,a)}}}}};const hP=t=>!!(t&&t.ownerDocument)&&Bo(fo.fromDom(t.ownerDocument),fo.fromDom(t));const bP=t=>!!t&&(hP(t.startContainer)&&hP(t.endContainer));
/**
   * Constructs a new selection instance.
   *
   * @constructor
   * @method Selection
   * @param {tinymce.dom.DOMUtils} dom DOMUtils object reference.
   * @param {Window} win Window to bind the selection object to.
   * @param {tinymce.dom.Serializer} serializer DOM serialization class to use for getContent.
   * @param {tinymce.Editor} editor Editor instance of the selection.
   */const yP=(t,e,n,o)=>{let s;let r;const{selectorChangedWithUnbind:c}=gP(t,o);
/**
     * Move the selection cursor range to the specified node and offset.
     * If there is no node specified it will move it to the first suitable location within the body.
     *
     * @method setCursorLocation
     * @param {Node} node Optional node to put the cursor in.
     * @param {Number} offset Optional offset from the start of the node to put the cursor at.
     */const a=(e,n)=>{const s=t.createRng();if(N(e)&&N(n)){s.setStart(e,n);s.setEnd(e,n);C(s);b(false)}else{qv(t,s,o.getBody(),true);C(s)}};
/**
     * Returns the selected contents using the DOM serializer passed in to this class.
     *
     * @method getContent
     * @param {Object} args Optional settings class with for example output format text or html.
     * @return {String} Selected contents in for example HTML format.
     * @example
     * // Alerts the currently selected contents
     * alert(tinymce.activeEditor.selection.getContent());
     *
     * // Alerts the currently selected contents as plain text
     * alert(tinymce.activeEditor.selection.getContent({ format: 'text' }));
     */const i=t=>fP(o,t)
/**
     * This method has been deprecated. Use "editor.insertContent" instead.
     *
     * Sets the current selection to the specified content. If any contents is selected it will be replaced
     * with the contents passed in to this function. If there is no selection the contents will be inserted
     * where the caret is placed in the editor/page.
     *
     * @method setContent
     * @param {String} content HTML contents to set could also be other formats depending on settings.
     * @param {Object} args Optional settings object with for example data format.
     * @example
     * // Inserts some HTML contents at the current selection
     * tinymce.activeEditor.selection.setContent('<strong>Some contents</strong>');
     */;const l=(t,e)=>tT(o,t,e)
/**
     * Returns the start element of a selection range. If the start is in a text
     * node the parent element will be returned.
     *
     * @method getStart
     * @param {Boolean} real Optional state to get the real parent when the selection is collapsed not the closest element.
     * @return {Element} Start element of selection range.
     */;const d=t=>ZO(o.getBody(),v(),t)
/**
     * Returns the end element of a selection range. If the end is in a text
     * node the parent element will be returned.
     *
     * @method getEnd
     * @param {Boolean} real Optional state to get the real parent when the selection is collapsed not the closest element.
     * @return {Element} End element of selection range.
     */;const u=t=>JO(o.getBody(),v(),t)
/**
     * Returns a bookmark location for the current selection. This bookmark object
     * can then be used to restore the selection after some content modification to the document.
     *
     * @method getBookmark
     * @param {Number} type Optional state if the bookmark should be simple or not. Default is complex.
     * @param {Boolean} normalized Optional state that enables you to get a position that it would be after normalization.
     * @return {Object} Bookmark object, use moveToBookmark with this object to restore the selection.
     * @example
     * // Stores a bookmark of the current selection
     * const bm = tinymce.activeEditor.selection.getBookmark();
     *
     * tinymce.activeEditor.setContent(tinymce.activeEditor.getContent() + 'Some new content');
     *
     * // Restore the selection bookmark
     * tinymce.activeEditor.selection.moveToBookmark(bm);
     */;const m=(t,e)=>P.getBookmark(t,e)
/**
     * Restores the selection to the specified bookmark.
     *
     * @method moveToBookmark
     * @param {Object} bookmark Bookmark to restore selection from.
     * @example
     * // Stores a bookmark of the current selection
     * const bm = tinymce.activeEditor.selection.getBookmark();
     *
     * tinymce.activeEditor.setContent(tinymce.activeEditor.getContent() + 'Some new content');
     *
     * // Restore the selection bookmark
     * tinymce.activeEditor.selection.moveToBookmark(bm);
     */;const f=t=>P.moveToBookmark(t)
/**
     * Selects the specified element. This will place the start and end of the selection range around the element.
     *
     * @method select
     * @param {Element} node HTML DOM element to select.
     * @param {Boolean} content Optional bool state if the contents should be selected or not on non IE browser.
     * @return {Element} Selected element the same element as the one that got passed in.
     * @example
     * // Select the first paragraph in the active editor
     * tinymce.activeEditor.selection.select(tinymce.activeEditor.dom.select('p')[0]);
     */;const p=(e,n)=>{oE(t,e,n).each(C);return e};const g=()=>{const t=v(),e=y();return!(!t||t.item)&&(t.compareEndPoints?t.compareEndPoints("StartToEnd",t)===0:!e||t.collapsed)};const h=()=>{if(o.mode.isReadOnly())return false;const e=v();const n=o.getBody().querySelectorAll('[data-mce-selected="1"]');return n.length>0?mt(n,(e=>t.isEditable(e.parentElement))):XO(t,e)};
/**
     * Collapse the selection to start or end of range.
     *
     * @method collapse
     * @param {Boolean} toStart Optional boolean state if to collapse to end or not. Defaults to false.
     */const b=t=>{const e=v();e.collapse(!!t);C(e)};const y=()=>e.getSelection?e.getSelection():e.document.selection;const v=()=>{let n;const c=(t,e,n)=>{try{return e.compareBoundaryPoints(t,n)}catch{return-1}};const a=e.document;if(N(o.bookmark)&&!Yw(o)){const t=bw(o);if(t.isSome())return t.map((t=>sE(o,[t])[0])).getOr(a.createRange())}try{const t=y();if(t&&!ga(t.anchorNode)){n=t.rangeCount>0?t.getRangeAt(0):a.createRange();n=sE(o,[n])[0]}}catch{}n||(n=a.createRange());if(Ta(n.startContainer)&&n.collapsed){const e=t.getRoot();n.setStart(e,0);n.setEnd(e,0)}if(s&&r)if(c(n.START_TO_START,n,s)===0&&c(n.END_TO_END,n,s)===0)n=r;else{s=null;r=null}return n};
/**
     * Changes the selection to the specified DOM range.
     *
     * @method setRng
     * @param {Range} rng Range to select.
     * @param {Boolean} forward Optional boolean if the selection is forwards or backwards.
     */const C=(t,e)=>{if(!bP(t))return;const n=y();const c=o.dispatch("SetSelectionRange",{range:t,forward:e});t=c.range;if(n){r=t;try{n.removeAllRanges();n.addRange(t)}catch{}if(e===false&&n.extend){n.collapse(t.endContainer,t.endOffset);n.extend(t.startContainer,t.startOffset)}s=n.rangeCount>0?n.getRangeAt(0):null}if(!t.collapsed&&t.startContainer===t.endContainer&&n?.setBaseAndExtent&&t.endOffset-t.startOffset<2&&t.startContainer.hasChildNodes()){const e=t.startContainer.childNodes[t.startOffset];if(e&&e.nodeName==="IMG"){n.setBaseAndExtent(t.startContainer,t.startOffset,t.endContainer,t.endOffset);n.anchorNode===t.startContainer&&n.focusNode===t.endContainer||n.setBaseAndExtent(e,0,e,1)}}o.dispatch("AfterSetSelectionRange",{range:t,forward:e})};
/**
     * Sets the current selection to the specified DOM element.
     *
     * @method setNode
     * @param {Element} elm Element to set as the contents of the selection.
     * @return {Element} Returns the element that got passed in.
     * @example
     * // Inserts a DOM node at current selection/caret location
     * tinymce.activeEditor.selection.setNode(tinymce.activeEditor.dom.create('img', { src: 'some.gif', title: 'some title' }));
     */const w=e=>{JD(o,t.getOuterHTML(e));return e};const O=()=>eE(o.getBody(),v());const E=(e,n)=>nE(t,v(),e,n);const x=()=>{const e=y();const n=e?.anchorNode;const o=e?.focusNode;if(!e||!n||!o||ga(n)||ga(o))return true;const s=t.createRng();const r=t.createRng();try{s.setStart(n,e.anchorOffset);s.collapse(true);r.setStart(o,e.focusOffset);r.collapse(true)}catch{return true}return s.compareBoundaryPoints(s.START_TO_START,r)<=0};const k=()=>{const e=v();const n=y();if(!Pv(n)&&Kv(o)){const n=yO(t,e);n.each((t=>{C(t,x())}));return n.getOr(e)}return e};
/**
     * Executes callback when the current selection starts/stops matching the specified selector. The current
     * state will be passed to the callback as it's first argument.
     *
     * @method selectorChanged
     * @param {String} selector CSS selector to check for.
     * @param {Function} callback Callback with state and args when the selector is matches or not.
     */const S=(t,e)=>{c(t,e);return L};const _=()=>{let e;let n=t.getRoot();while(n&&n.nodeName!=="BODY"){if(n.scrollHeight>n.clientHeight){e=n;break}n=n.parentNode}return e};const R=(t,e)=>{N(t)?YO(o,t,e):GO(o,v(),e)};const A=(t,e)=>C(aO(t,e,o.getDoc()));const D=()=>{const t=v();return t.collapsed?Hm.fromRangeStart(t).getClientRects()[0]:t.getBoundingClientRect()};const T=()=>{e=s=r=null;M.destroy()};
/**
     * Expands the selection range to contain the entire word when the selection is collapsed within the word.
     *
     * @method expand
     * @param {Object} options Optional options provided to the expansion. Defaults to { type: 'word' }
     */const B=(e={type:"word"})=>C(wO(t).expand(v(),e));const L={dom:t,win:e,serializer:n,editor:o,expand:B,collapse:b,setCursorLocation:a,getContent:i,setContent:l,getBookmark:m,moveToBookmark:f,select:p,isCollapsed:g,isEditable:h,isForward:x,setNode:w,getNode:O,getSel:y,setRng:C,getRng:v,getStart:d,getEnd:u,getSelectedBlocks:E,normalize:k,selectorChanged:S,selectorChangedWithUnbind:c,getScrollContainer:_,scrollIntoView:R,placeCaretAt:A,getBoundingClientRect:D,destroy:T};const P=sw(L);const M=cO(L,o);L.bookmarkManager=P;L.controlSelection=M;return L};const vP=(t,e,n)=>{e.addNodeFilter("br",((e,o,s)=>{const r=co.extend({},n.getBlockElements());const c=n.getNonEmptyElements();const a=n.getWhitespaceElements();r.body=1;const i=t=>t.name in r||Ai(n,t);for(let o=0,l=e.length;o<l;o++){let l=e[o];let d=l.parent;if(d&&i(d)&&l===d.lastChild){let e=l.prev;while(e){const t=e.name;if(t!=="span"||e.attr("data-mce-type")!=="bookmark"){t==="br"&&(l=null);break}e=e.prev}if(l){l.remove();if(GN(n,c,a,d)){const e=n.getElementRule(d.name);e&&(e.removeEmpty?d.remove():e.paddEmpty&&VN(t,s,i,d))}}}else{let t=l;while(d&&d.firstChild===t&&d.lastChild===t){t=d;if(r[d.name])break;d=d.parent}if(t===d){const t=new AstNode("#text",3);t.value=Pe;l.replace(t)}}}}))};const CP=(t,e,n)=>{t.addAttributeFilter("data-mce-tabindex",((t,e)=>{let n=t.length;while(n--){const o=t[n];o.attr("tabindex",o.attr("data-mce-tabindex"));o.attr(e,null)}}));t.addAttributeFilter("src,href,style",((t,o)=>{const s="data-mce-"+o;const r=e.url_converter;const c=e.url_converter_scope;let a=t.length;while(a--){const e=t[a];let i=e.attr(s);if(i!==void 0){e.attr(o,i.length>0?i:null);e.attr(s,null)}else{i=e.attr(o);o==="style"?i=n.serializeStyle(n.parseStyle(i),e.name):r&&(i=r.call(c,i,o,e.name));e.attr(o,i.length>0?i:null)}}}));t.addAttributeFilter("class",(t=>{let e=t.length;while(e--){const n=t[e];let o=n.attr("class");if(o){o=o.replace(/(?:^|\s)mce-item-\w+(?!\S)/g,"");n.attr("class",o.length>0?o:null)}}}));t.addAttributeFilter("data-mce-type",((t,e,n)=>{let o=t.length;while(o--){const e=t[o];if(e.attr("data-mce-type")==="bookmark"&&!n.cleanup){const t=Optional.from(e.firstChild).exists((t=>!Su(t.value??"")));t?e.unwrap():e.remove()}}}));t.addNodeFilter("script,style",((t,n)=>{const o=t=>t.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"");let s=t.length;while(s--){const r=t[s];const c=r.firstChild;const a=c?.value??"";if(n==="script"){const t=r.attr("type");t&&r.attr("type",t==="mce-no/type"?null:t.replace(/^mce\-/,""));e.element_format==="xhtml"&&c&&a.length>0&&(c.value="// <![CDATA[\n"+o(a)+"\n// ]]>")}else e.element_format==="xhtml"&&c&&a.length>0&&(c.value="\x3c!--\n"+o(a)+"\n--\x3e")}}));t.addNodeFilter("#comment",(t=>{let o=t.length;while(o--){const s=t[o];const r=s.value;if(e.preserve_cdata&&r?.indexOf("[CDATA[")===0){s.name="#cdata";s.type=4;s.value=n.decode(r.replace(/^\[CDATA\[|\]\]$/g,""))}else if(r?.indexOf("mce:protected ")===0){s.name="#text";s.type=3;s.raw=true;s.value=unescape(r).substr(14)}}}));t.addNodeFilter("xml:namespace,input",((t,e)=>{let n=t.length;while(n--){const o=t[n];o.type===7?o.remove():o.type===1&&(e!=="input"||o.attr("type")||o.attr("type","text"))}}));t.addAttributeFilter("data-mce-type",(e=>{J(e,(e=>{e.attr("data-mce-type")==="format-caret"&&(e.isEmpty(t.schema.getNonEmptyElements())?e.remove():e.unwrap())}))}));t.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-block,data-mce-type,data-mce-resize,data-mce-placeholder",((t,e)=>{let n=t.length;while(n--)t[n].attr(e,null)}));e.remove_trailing_brs&&vP(e,t,t.schema)};const wP=t=>{const e=t=>t?.name==="br";const n=t.lastChild;if(e(n)){const t=n.prev;if(e(t)){n.remove();t.remove()}}};const OP=(t,e,n)=>{let o;const s=t.dom;let r=e.cloneNode(true);const c=document.implementation;if(c.createHTMLDocument){const t=c.createHTMLDocument("");co.each(r.nodeName==="BODY"?r.childNodes:[r],(e=>{t.body.appendChild(t.importNode(e,true))}));r=r.nodeName!=="BODY"?t.body.firstChild:t.body;o=s.doc;s.doc=t}Vp(t,{...n,node:r});o&&(s.doc=o);return r};const EP=(t,e)=>N(t)&&t.hasEventListeners("PreProcess")&&!e.no_events;const xP=(t,e,n)=>EP(t,n)?OP(t,e,n):e;const kP=(t,e,n)=>{if(co.inArray(e,n)===-1){t.addAttributeFilter(n,((t,e)=>{let n=t.length;while(n--)t[n].attr(e,null)}));e.push(n)}};const SP=(t,e,n)=>{if(!e.no_events&&t){const o=qp(t,{...e,content:n});return o.content}return n};const _P=(t,e,n)=>{const o=_u(n.getInner?e.innerHTML:t.getOuterHTML(e));return n.selection||vu(fo.fromDom(e))?o:co.trim(o)};const NP=(t,e,n)=>{const o=n.selection?{forced_root_block:false,...n}:n;const s=t.parse(e,o);wP(s);return s};const RP=(t,e,n)=>{const o=DE(t,e);return o.serialize(n)};const AP=(t,e,n,o,s)=>{const r=RP(e,n,o);return SP(t,s,r)};const DP=(t,e)=>{const n=["data-mce-selected"];const o={entity_encoding:"named",remove_trailing_brs:true,pad_empty_with_br:false,...t};const s=e&&e.dom?e.dom:wd.DOM;const r=e&&e.schema?e.schema:Il(o);const c=CD(o,r);CP(c,o,s);const a=(t,n={})=>{const{indent:a,entity_encoding:i,...l}=n;const d={format:"html",...l};const u=xP(e,t,d);const m=_P(s,u,d);const f=NP(c,m,d);if(d.format==="tree")return f;const p={...o,...N(a)?{indent:a}:{},...N(i)?{entity_encoding:i}:{}};return AP(e,p,r,f,d)};return{schema:r,addNodeFilter:c.addNodeFilter,addAttributeFilter:c.addAttributeFilter,serialize:a,addRules:r.addValidElements,setRules:r.setValidElements,addTempAttr:F(kP,c,n),getTempAttrs:P(n),getNodeFilters:c.getNodeFilters,getAttributeFilters:c.getAttributeFilters,removeNodeFilter:c.removeNodeFilter,removeAttributeFilter:c.removeAttributeFilter}};const TP=(t,e)=>{const n=DP(t,e);return{schema:n.schema,
/**
       * Adds a node filter function to the parser used by the serializer, the parser will collect the specified nodes by name
       * and then execute the callback once it has finished parsing the document.
       *
       * @method addNodeFilter
       * @param {String} name Comma separated list of nodes to collect.
       * @param {Function} callback Callback function to execute once it has collected nodes.
       * @example
       * serializer.addNodeFilter('p,h1', (nodes, name) => {
       *   for (let i = 0; i < nodes.length; i++) {
       *     console.log(nodes[i].name);
       *   }
       * });
       */
addNodeFilter:n.addNodeFilter,
/**
       * Adds an attribute filter function to the parser used by the serializer, the parser will
       * collect nodes that has the specified attributes
       * and then execute the callback once it has finished parsing the document.
       *
       * @method addAttributeFilter
       * @param {String} name Comma separated list of attributes to collect.
       * @param {Function} callback Callback function to execute once it has collected nodes.
       * @example
       * serializer.addAttributeFilter('src,href', (nodes, name) => {
       *   for (let i = 0; i < nodes.length; i++) {
       *     console.log(nodes[i].name);
       *   }
       * });
       */
addAttributeFilter:n.addAttributeFilter,
/**
       * Serializes the specified browser DOM node into a HTML string.
       *
       * @method serialize
       * @param {DOMNode} node DOM node to serialize.
       * @param {Object} args Arguments option that gets passed to event handlers.
       */
serialize:n.serialize,
/**
       * Adds valid elements rules to the serializers schema instance this enables you to specify things
       * like what elements should be outputted and what attributes specific elements might have.
       * Consult the TinyMCE Documentation for more details on this format.
       *
       * @method addRules
       * @param {String} rules Valid elements rules string to add to schema.
       */
addRules:n.addRules,
/**
       * Sets the valid elements rules to the serializers schema instance this enables you to specify things
       * like what elements should be outputted and what attributes specific elements might have.
       * Consult the TinyMCE Documentation for more details on this format.
       *
       * @method setRules
       * @param {String} rules Valid elements rules string.
       */
setRules:n.setRules,
/**
       * Adds a temporary internal attribute these attributes will get removed on undo and
       * when getting contents out of the editor.
       *
       * @method addTempAttr
       * @param {String} name string
       */
addTempAttr:n.addTempAttr,getTempAttrs:n.getTempAttrs,getNodeFilters:n.getNodeFilters,getAttributeFilters:n.getAttributeFilters,
/**
       * Removes a node filter function or removes all filter functions from the parser used by the serializer for the node names provided.
       *
       * @method removeNodeFilter
       * @param {String} name Comma separated list of node names to remove filters for.
       * @param {Function} callback Optional callback function to only remove a specific callback.
       * @example
       * // Remove a single filter
       * serializer.removeNodeFilter('p,h1', someCallback);
       *
       * // Remove all filters
       * serializer.removeNodeFilter('p,h1');
       */
removeNodeFilter:n.removeNodeFilter,
/**
       * Removes an attribute filter function or removes all filter functions from the parser used by the serializer for the attribute names provided.
       *
       * @method removeAttributeFilter
       * @param {String} name Comma separated list of attribute names to remove filters for.
       * @param {Function} callback Optional callback function to only remove a specific callback.
       * @example
       * // Remove a single filter
       * serializer.removeAttributeFilter('src,href', someCallback);
       *
       * // Remove all filters
       * serializer.removeAttributeFilter('src,href');
       */
removeAttributeFilter:n.removeAttributeFilter}};const BP="html";const LP=(t,e)=>({...t,format:e,get:true,getInner:true});const PP=(t,e={})=>{const n=e.format?e.format:BP;const o=LP(e,n);return kD(t,o).fold(M,(e=>{const n=aP(t,e);return SD(t,n,e)}))};const MP="html";const IP=(t,e)=>({format:MP,...t,set:true,content:e});const FP=(t,e,n={})=>{const o=IP(n,e);_D(t,o).each((e=>{const n=iP(t,e.content,e);ND(t,n.html,e)}))};const UP=wd.DOM;const zP=t=>{UP.setStyle(t.id,"display",t.orgDisplay)};const $P=t=>Optional.from(t).each((t=>t.destroy()));const jP=t=>{const e=t;e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null;e.bodyElement=e.contentDocument=e.contentWindow=null;e.iframeElement=e.targetElm=null;const n=t.selection;if(n){const t=n.dom;e.selection=n.win=n.dom=t.doc=null}};const HP=t=>{const e=t.formElement;if(e){if(e._mceOldSubmit){e.submit=e._mceOldSubmit;delete e._mceOldSubmit}UP.unbind(e,"submit reset",t.formEventDelegate)}};const WP=t=>{if(!t.removed){const{_selectionOverrides:e,editorUpload:n}=t;const o=t.getBody();const s=t.getElement();o&&t.save({is_removing:true});t.removed=true;t.unbindAllNativeEvents();t.hasHiddenInput&&N(s?.nextSibling)&&UP.remove(s.nextSibling);Kp(t);t.editorManager.remove(t);!t.inline&&o&&zP(t);Yp(t);UP.remove(t.getContainer());$P(e);$P(n);t.destroy()}};const VP=(t,e)=>{const{selection:n,dom:o}=t;if(!t.destroyed)if(e||t.removed){if(!e){t.editorManager.off("beforeunload",t._beforeUnload);t.theme&&t.theme.destroy&&t.theme.destroy();$P(n);$P(o)}HP(t);jP(t);t.destroyed=true}else t.remove()};const qP=()=>{const t={};const e=(e,n)=>{t[e]=n};const n=e=>t[e]?t[e]:{icons:{}};const o=e=>Pt(t,e);return{add:e,get:n,has:o}};const KP=qP();const YP=$d.ModelManager;const GP=(t,e)=>{const n=e.dom;return n[t]};const XP=(t,e)=>parseInt(fr(e,t),10);const QP=F(GP,"clientWidth");const ZP=F(GP,"clientHeight");const JP=F(XP,"margin-top");const tM=F(XP,"margin-left");const eM=t=>t.dom.getBoundingClientRect();const nM=(t,e,n)=>{const o=QP(t);const s=ZP(t);return e>=0&&n>=0&&e<=o&&n<=s};const oM=(t,e,n,o)=>{const s=eM(e);const r=t?s.left+e.dom.clientLeft+tM(e):0;const c=t?s.top+e.dom.clientTop+JP(e):0;const a=n-r;const i=o-c;return{x:a,y:i}};const sM=(t,e,n)=>{const o=fo.fromDom(t.getBody());const s=t.inline?o:Yo(o);const r=oM(t.inline,s,e,n);return nM(s,r.x,r.y)};const rM=t=>Optional.from(t).map(fo.fromDom);const cM=t=>{const e=t.inline?t.getBody():t.getContentAreaContainer();return rM(e).map(ir).getOr(false)};var aM=()=>{const t=()=>{throw new Error("Theme did not provide a NotificationManager implementation.")};return{open:t,close:t,getArgs:t}};const iM=t=>{const e=[];const n=()=>{const e=t.theme;return e&&e.getNotificationManagerImpl?e.getNotificationManagerImpl():aM()};const o=()=>Optional.from(e[0]);const s=(t,e)=>t.type===e.type&&t.text===e.text&&!t.progressBar&&!t.timeout&&!e.progressBar&&!e.timeout;const r=()=>{o().each((t=>{t.reposition()}))};const c=t=>{e.push(t)};const a=t=>{it(e,(e=>e===t)).each((t=>{e.splice(t,1)}))};const i=(o,i=true)=>{if(t.removed||!cM(t))return{};i&&t.dispatch("BeforeOpenNotification",{notification:o});return at(e,(t=>s(n().getArgs(t),o))).getOrThunk((()=>{t.editorManager.setActive(t);const e=n().open(o,(()=>{a(e)}),(()=>Gw(t)));c(e);r();t.dispatch("OpenNotification",{notification:{...e}});return e}))};const l=()=>{o().each((t=>{n().close(t);a(t);r()}))};const d=P(e);const u=t=>{t.on("SkinLoaded",(()=>{const e=fh(t);e&&i({text:e,type:"warning",timeout:0},false);r()}));t.on("show ResizeEditor ResizeWindow NodeChange ToggleView FullscreenStateChanged",(()=>{requestAnimationFrame(r)}));t.on("remove",(()=>{J(e.slice(),(t=>{n().close(t)}))}));t.on("keydown",(t=>{const e=t.key?.toLowerCase()==="f12"||t.keyCode===123;if(t.altKey&&e){t.preventDefault();o().map((t=>fo.fromDom(t.getEl()))).each((t=>_s(t)))}}))};u(t);return{
/**
       * Opens a new notification.
       *
       * @method open
       * @param {Object} args A <code>name: value</code> collection containing settings such as: <code>timeout</code>, <code>type</code>, and message (<code>text</code>).
       * <br /><br />
       * For information on the available settings, see: <a href="https://www.tiny.cloud/docs/tinymce/8/creating-custom-notifications/">Create custom notifications</a>.
       */
open:i,close:l,getNotifications:d}};const lM=$d.PluginManager;const dM=$d.ThemeManager;var uM=()=>{const t=()=>{throw new Error("Theme did not provide a WindowManager implementation.")};return{open:t,openUrl:t,alert:t,confirm:t,close:t}};const mM=t=>{let e=[];const n=()=>{const e=t.theme;return e&&e.getWindowManagerImpl?e.getWindowManagerImpl():uM()};const o=(t,e)=>(...n)=>e?e.apply(t,n):void 0;const s=e=>{t.dispatch("OpenWindow",{dialog:e})};const r=e=>{t.dispatch("CloseWindow",{dialog:e})};const c=(t,n)=>{e.push({instanceApi:t,triggerElement:n});s(t)};const a=n=>{r(n);const o=wt(e,(({instanceApi:t,triggerElement:e})=>t===n?e:Optional.none()));e=nt(e,(({instanceApi:t})=>t!==n));e.length===0?t.focus():o.filter(ir).each(_s)};const i=()=>Optional.from(e[e.length-1]);const l=e=>{t.editorManager.setActive(t);hw(t);const n=Rs();t.ui.show();const o=e();c(o,n);return o};const d=(t,e)=>l((()=>n().open(t,e,a)));const u=t=>l((()=>n().openUrl(t,a)));const m=t=>{e.length!==0&&t.each((t=>_s(t)))};const f=(t,e,s)=>{const r=Rs();const c=n();c.alert(t,o(s||c,(()=>{m(r);e?.()})))};const p=(t,e,s)=>{const r=Rs();const c=n();c.confirm(t,o(s||c,(t=>{m(r);e?.(t)})))};const g=()=>{i().each((({instanceApi:t})=>{n().close(t);a(t)}))};t.on("remove",(()=>{J(e,(({instanceApi:t})=>{n().close(t)}))}));return{
/**
       * Opens a new window.
       *
       * @method open
       * @param {Object} config For information on the available options, see: <a href="https://www.tiny.cloud/docs/tinymce/8/dialog-configuration/#options">Dialog - Configuration options</a>.
       * @param {Object} params (Optional) For information on the available options, see: <a href="https://www.tiny.cloud/docs/tinymce/8/dialog-configuration/#configuration-parameters">Dialog - Configuration parameters</a>.
       * @returns {WindowManager.DialogInstanceApi} A new dialog instance.
       */
open:d,
/**
       * Opens a new window for the specified url.
       *
       * @method openUrl
       * @param {Object} config For information on the available options, see: <a href="https://www.tiny.cloud/docs/tinymce/8/urldialog/#configuration">URL dialog - Configuration</a>.
       * @returns {WindowManager.UrlDialogInstanceApi} A new URL dialog instance.
       */
openUrl:u,
/**
       * Creates an alert dialog. Do not use the blocking behavior of this
       * native version. Use the callback method instead; then it can be extended.
       *
       * @method alert
       * @param {String} message Text to display in the new alert dialog.
       * @param {Function} callback (Optional) Callback function to be executed after the user has selected ok.
       * @param {Object} scope (Optional) Scope to execute the callback in.
       * @example
       * // Displays an alert box using the active editors window manager instance
       * tinymce.activeEditor.windowManager.alert('Hello world!');
       */
alert:f,
/**
       * Creates an alert dialog. Do not use the blocking behavior of this
       * native version. Use the callback method instead; then it can be extended.
       *
       * @method confirm
       * @param {String} message Text to display in the new confirm dialog.
       * @param {Function} callback (Optional) Callback function to be executed after the user has selected ok or cancel.
       * @param {Object} scope (Optional) Scope to execute the callback in.
       * @example
       * // Displays a confirm box and an alert message will be displayed depending on what you choose in the confirm
       * tinymce.activeEditor.windowManager.confirm('Do you want to do something?', (state) => {
       *   const message = state ? 'Ok' : 'Cancel';
       *   tinymce.activeEditor.windowManager.alert(message);
       * });
       */
confirm:p,close:g}};const fM=(t,e)=>{t.notificationManager.open({type:"error",text:e})};const pM=(t,e)=>{t._skinLoaded?fM(t,e):t.on("SkinLoaded",(()=>{fM(t,e)}))};const gM=(t,e)=>{pM(t,zd.translate(["Failed to upload image: {0}",e]))};const hM=(t,e,n)=>{ng(t,e,{message:n});console.error(n)};const bM=(t,e,n)=>n?`Failed to load ${t}: ${n} from url ${e}`:`Failed to load ${t} url: ${e}`;const yM=(t,e,n)=>{hM(t,"PluginLoadError",bM("plugin",e,n))};const vM=(t,e,n)=>{hM(t,"IconsLoadError",bM("icons",e,n))};const CM=(t,e,n)=>{hM(t,"LanguageLoadError",bM("language",e,n))};const wM=(t,e,n)=>{hM(t,"ThemeLoadError",bM("theme",e,n))};const OM=(t,e,n)=>{hM(t,"ModelLoadError",bM("model",e,n))};const EM=(t,e)=>{hM(t,"LicenseKeyManagerLoadError",bM("license key manager",e))};const xM=(t,e)=>{hM(t,"ComponentLoadError",bM("component",e))};const kM=(t,e,n)=>{const o=zd.translate(["Failed to initialize plugin: {0}",e]);ng(t,"PluginLoadError",{message:o});SM(o,n);pM(t,o)};const SM=(t,...e)=>{const n=window.console;n&&(n.error?n.error(t,...e):n.log(t,...e))};const _M=new WeakMap;const NM=t=>{if(_M.has(t))return;_M.set(t,true);const e=()=>{t.on("SwitchMode",(e=>{const{mode:n}=e;n!=="readonly"&&t.mode.set("readonly")}))};const n=()=>{t.on("DisabledStateChange",(t=>{const{state:e}=t;e||t.preventDefault()}),true)};if(t.initialized){t.removed||t.mode.set("readonly");t.options.set("disabled",true)}else t.on("init",(()=>{t.removed||t.mode.set("readonly");t.options.set("disabled",true)}));n();e()};const RM=(t,e)=>{const{type:n,message:o}=e;t.notificationManager.open({type:n,text:o})};const AM=t=>{switch(t){case"error":return console.error;case"info":return console.info;case"warn":return console.warn;case"log":default:return console.log}};const DM=t=>{const e=AM(t.type);e(t.message)};const TM=(t,e)=>{const{console:n,editor:o}=e;N(o)&&(t._skinLoaded?RM(t,o):t.on("SkinLoaded",(()=>{RM(t,o)})));N(n)&&DM(n)};const BM="https://www.tiny.cloud/docs/tinymce/latest/license-key/";const LM=`Read more: ${BM}`;const PM="Make sure to provide a valid license key or add license_key: 'gpl' to the init config to agree to the open source license terms.";const MM=t=>{const e="The editor is disabled because a TinyMCE license key has not been provided.";TM(t,{console:{type:"error",message:[`${e}`,PM,LM].join(" ")},editor:{type:"warning",message:`${e}`}})};const IM=(t,e)=>{const n=(e==="online"?"API":"license")+" key";const o=`The editor is disabled because the TinyMCE ${n} could not be validated.`;TM(t,{console:{type:"error",message:[`${o}`,`The TinyMCE Commercial License Key Manager plugin is required for the provided ${n} to be validated but could not be loaded.`,LM].join(" ")},editor:{type:"warning",message:`${o}`}})};const FM=(t,e,n)=>{const o=`The "${e}" plugin requires a valid TinyMCE license key.`;TM(t,{console:{type:"error",message:[`${o}`,LM].join(" ")},...n?{}:{editor:{type:"warning",message:"One or more premium plugins are disabled due to license key restrictions."}}})};const UM="licensekeymanager";const zM=t=>{const e=C(Sb(t));return e?"online":"offline"};const $M=t=>{const e=kb(t)?.toLowerCase();return e==="gpl"?"gpl":_(e)?"no_key":"non_gpl"};const jM=t=>{const e=zM(t);const n=$M(t);const o=new Set([...Lh(t),...Et(Ph(t))]).has(UM);return n!=="gpl"||e==="online"||o?{type:"use_plugin",onlineStatus:e,licenseKeyType:n,forcePlugin:o}:{type:"use_gpl",onlineStatus:e,licenseKeyType:n,forcePlugin:o}};const HM=t=>e=>{let n=false;return{validate:o=>{const{plugin:s}=o;const r=C(s);if(r){FM(e,s,n);n=true}return Promise.resolve(t&&!r)}}};const WM=HM(false);const VM=HM(true);const qM="manager";const KM=UM;const YM=()=>{const t=$d();const e=e=>{t.add(qM,e)};const n=(e,n)=>{const o=jM(e);if(o.type==="use_plugin"){const o=Lt(Ph(e),KM).map(xe).filter(_e);const s=o.getOr(`plugins/${KM}/plugin${n}.js`);t.load(qM,s).catch((()=>{EM(e,s)}))}};const o=e=>{const n=t=>{Object.defineProperty(e,"licenseKeyManager",{value:t,writable:false,configurable:false,enumerable:true})};const o=jM(e);const s=t.get(qM);if(N(s)){const o=s(e,t.urls[qM]);n(o)}else switch(o.type){case"use_gpl":n(VM(e));break;case"use_plugin":NM(e);n(WM(e));o.onlineStatus==="offline"&&o.licenseKeyType==="no_key"?MM(e):IM(e,o.onlineStatus);break}e.licenseKeyManager.validate({})};return{load:n,add:e,init:o}};const GM=YM();const XM=t=>{Optional.from(t.selection.getNode()).each((t=>{t.removeAttribute("data-mce-selected")}))};const QM=(t,e,n)=>{try{t.getDoc().execCommand(e,false,String(n))}catch{}};const ZM=(t,e)=>{QM(t,"StyleWithCSS",e);QM(t,"enableInlineTableEditing",e);QM(t,"enableObjectResizing",e)};const JM=t=>{t.selection.setRng(t.selection.getRng())};const tI=(t,e,n)=>{sc(t,e)&&!n?nc(t,e):n&&tc(t,e)};const eI=t=>{const e=fo.fromDom(t.getBody());tI(e,"mce-content-readonly",true);t.selection.controlSelection.hideResizeRect();t._selectionOverrides.hideFakeCaret();XM(t)};const nI=t=>{const e=fo.fromDom(t.getBody());tI(e,"mce-content-readonly",false);t.hasEditableRoot()&&dc(e,true);ZM(t,false);Gw(t)&&t.focus();JM(t);t.nodeChanged()};const oI=t=>_b(t);const sI="data-mce-contenteditable";const rI=t=>{J(gc(t,'*[contenteditable="true"]'),(t=>{zs(t,sI,"true");dc(t,false)}))};const cI=t=>{J(gc(t,`*[${sI}="true"]`),(t=>{Vs(t,sI);dc(t,true)}))};const aI=(t,e)=>{const n=fo.fromDom(t.getBody());if(e){eI(t);dc(n,false);rI(n)}else{cI(n);nI(t)}};const iI=t=>{t.serializer?lI(t):t.on("PreInit",(()=>{lI(t)}))};const lI=t=>{t.parser.addAttributeFilter("contenteditable",(e=>{oI(t)&&J(e,(t=>{t.attr(sI,t.attr("contenteditable"));t.attr("contenteditable","false")}))}));t.serializer.addAttributeFilter(sI,(e=>{oI(t)&&J(e,(t=>{t.attr("contenteditable",t.attr(sI))}))}));t.serializer.addTempAttr(sI)};const dI=t=>t.type==="click";const uI=["copy"];const mI=t=>X(uI,t.type);const fI=(t,e)=>{const n=e=>To(e,fo.fromDom(t.getBody()));return Yr(e,"a",n).bind((t=>Hs(t,"href")))};const pI=(t,e)=>{const n=e=>To(e,fo.fromDom(t.getBody()));return wc(e,"details",n)};const gI=(t,e)=>{if(dI(e)&&!Jw.metaKeyPressed(e)){const n=fo.fromDom(e.target);fI(t,n).fold((()=>{pI(t,n)&&e.preventDefault()}),(n=>{e.preventDefault();if(/^#/.test(n)){const e=t.dom.select(`${n},[name="${ve(n,"#")}"]`);e.length&&t.selection.scrollIntoView(e[0],true)}else window.open(n,"_blank","rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes")}))}else mI(e)&&t.dispatch(e.type,e)};const hI=t=>{t.on("ShowCaret ObjectSelected",(e=>{oI(t)&&e.preventDefault()}));t.on("DisabledStateChange",(e=>{e.isDefaultPrevented()||aI(t,e.state)}))};const bI=t=>{iI(t);hI(t)};const yI=t=>/^[a-z0-9\-]+$/i.test(t);const vI=t=>"content/"+t+"/content.css";const CI=t=>tinymce.Resource.has(vI(t));const wI=t=>EI(t,sh(t));const OI=t=>EI(t,ch(t));const EI=(t,e)=>{const n=t.editorManager.baseURL+"/skins/content";const o=t.editorManager.suffix;const s=`content${o}.css`;return Z(e,(e=>CI(e)?e:yI(e)&&!t.inline?`${n}/${e}/${s}`:t.documentBaseURI.toAbsolute(e)))};const xI=t=>{t.contentCSS=t.contentCSS.concat(wI(t),OI(t))};const kI=t=>t?Ct(t.getElementsByTagName("img")):[];const SI=(t,e)=>{const n={};const o=(o,s=W)=>{const r=nt(kI(o),(e=>{const n=e.src;return!e.hasAttribute("data-mce-bogus")&&(!e.hasAttribute("data-mce-placeholder")&&(!(!n||n===Gn.transparentSrc)&&(we(n,"blob:")?!t.isUploaded(n)&&s(e):!!we(n,"data:")&&s(e))))}));const c=Z(r,(t=>{const o=t.src;if(Pt(n,o))return n[o].then((e=>C(e)?e:{image:t,blobInfo:e.blobInfo}));{const s=NR(e,o).then((e=>{delete n[o];return{image:t,blobInfo:e}})).catch((t=>{delete n[o];return t}));n[o]=s;return s}}));return Promise.all(c)};return{findAll:o}};const _I=()=>{const t=1,e=2;let n={};const o=(t,e)=>({status:t,resultUri:e});const s=t=>t in n;const r=t=>{const e=n[t];return e?e.resultUri:null};const c=e=>!!s(e)&&n[e].status===t;const a=t=>!!s(t)&&n[t].status===e;const i=e=>{n[e]=o(t,null)};const l=(t,s)=>{n[t]=o(e,s)};const d=t=>{delete n[t]};const u=()=>{n={}};return{hasBlobUri:s,getResultUri:r,isPending:c,isUploaded:a,markPending:i,markUploaded:l,removeFailed:d,destroy:u}};let NI=0;const RI=()=>{const t=()=>Math.round(Gt()*4294967295).toString(36);const e=(new Date).getTime();return"s"+e.toString(36)+t()+t()+t()};const AI=t=>t+NI+++RI();const DI=()=>{let t=[];const e=t=>{const e={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png","image/apng":"apng","image/avif":"avif","image/svg+xml":"svg","image/webp":"webp","image/bmp":"bmp","image/tiff":"tiff"};return e[t.toLowerCase()]||"dat"};const n=(t,e,n,s,r)=>{if(C(t)){const c=t;return o({id:c,name:s,filename:r,blob:e,base64:n})}if(w(t))return o(t);throw new Error("Unknown input type")};const o=t=>{if(!t.blob||!t.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created");const n=t.id||AI("blobid");const o=t.name||n;const s=t.blob;return{id:P(n),name:P(o),filename:P(t.filename||o+"."+e(s.type)),blob:P(s),base64:P(t.base64),blobUri:P(t.blobUri||URL.createObjectURL(s)),uri:P(t.uri)}};const s=e=>{c(e.id())||t.push(e)};const r=e=>at(t,e).getOrUndefined();const c=t=>r((e=>e.id()===t));const a=t=>r((e=>e.blobUri()===t));const i=(t,e)=>r((n=>n.base64()===t&&n.blob().type===e));const l=e=>{t=nt(t,(t=>{if(t.blobUri()===e){URL.revokeObjectURL(t.blobUri());return false}return true}))};const d=()=>{J(t,(t=>{URL.revokeObjectURL(t.blobUri())}));t=[]};return{create:n,add:s,get:c,getByUri:a,getByData:i,findFirst:r,removeByUri:l,destroy:d}};const TI=(t,e)=>{const n={};const o=(t,e)=>t?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):e;const s=(t,n)=>new Promise(((s,r)=>{const c=new XMLHttpRequest;c.open("POST",e.url);c.withCredentials=e.credentials;c.upload.onprogress=t=>{n(t.loaded/t.total*100)};c.onerror=()=>{r("Image upload failed due to a XHR Transport error. Code: "+c.status)};c.onload=()=>{if(c.status<200||c.status>=300){r("HTTP Error: "+c.status);return}const t=JSON.parse(c.responseText);t&&C(t.location)?s(o(e.basePath,t.location)):r("Invalid JSON: "+c.responseText)};const a=new FormData;a.append("file",t.blob(),t.filename());c.send(a)}));const r=R(e.handler)?e.handler:s;const c=()=>new Promise((t=>{t([])}));const a=(t,e)=>({url:e,blobInfo:t,status:true});const i=(t,e)=>({url:"",blobInfo:t,status:false,error:e});const l=(t,e)=>{co.each(n[t],(t=>{t(e)}));delete n[t]};const d=(e,n,o)=>{t.markPending(e.blobUri());return new Promise((s=>{let r;let c;try{const d=()=>{if(r){r.close();c=T}};const u=n=>{d();const o=C(n)?n:n.url;t.markUploaded(e.blobUri(),o);l(e.blobUri(),a(e,o));s(a(e,o))};const m=n=>{d();t.removeFailed(e.blobUri());l(e.blobUri(),i(e,n));s(i(e,n))};c=t=>{t<0||t>100||Optional.from(r).orThunk((()=>Optional.from(o).map($))).each((e=>{r=e;e.progressBar.value(t)}))};n(e,c).then(u,(t=>{m(C(t)?{message:t}:t)}))}catch(t){s(i(e,t))}}))};const u=t=>t===s;const m=t=>{const e=t.blobUri();return new Promise((t=>{n[e]=n[e]||[];n[e].push(t)}))};const f=(e,n)=>{e=co.grep(e,(e=>!t.isUploaded(e.blobUri())));return Promise.all(co.map(e,(e=>t.isPending(e.blobUri())?m(e):d(e,r,n))))};const p=(t,n)=>!e.url&&u(r)?c():f(t,n);return{upload:p}};const BI=t=>()=>t.notificationManager.open({text:t.translate("Image uploading..."),type:"info",timeout:-1,progressBar:true});const LI=(t,e)=>TI(e,{url:Kg(t),basePath:Yg(t),credentials:Gg(t),handler:Xg(t)});const PI=t=>{const e=_I();const n=LI(t,e);return{
/**
       * Uploads images to the configured image upload URL (`images_upload_url`) or passes the images to the defined image upload handler function (`images_upload_handler`).
       *
       * @method upload
       * @param {Array} blobInfos  A BlobInfo array containing the image data to upload. A BlobInfo can be created by calling `editor.editorUpload.blobCache.create()`.
       * @param {Boolean} showNotification (Optional) When set to true, a notification with a progress bar will be shown during image uploads.
       */
upload:(e,o=true)=>n.upload(e,o?BI(t):void 0)}};const MI=(t,e)=>t.dom.isEmpty(e.dom)&&N(t.schema.getTextBlockElements()[Mo(e)]);const II=t=>e=>{MI(t,e)&&Ls(e,fo.fromHtml('<br data-mce-bogus="1" />'))};const FI=t=>{const e=DI();let n,o;const s=_I();const r=[];const c=e=>n=>t.selection?e(n):[];const a=t=>t+(t.indexOf("?")===-1?"?":"&")+(new Date).getTime();const i=(t,e,n)=>{let o=0;do{o=t.indexOf(e,o);if(o!==-1){t=t.substring(0,o)+n+t.substr(o+e.length);o+=n.length-e.length+1}}while(o!==-1);return t};const l=(t,e,n)=>{const o=`src="${n}"${n===Gn.transparentSrc?' data-mce-placeholder="1"':""}`;t=i(t,`src="${e}"`,o);t=i(t,'data-mce-src="'+e+'"','data-mce-src="'+n+'"');return t};const d=(e,n)=>{J(t.undoManager.data,(t=>{t.type==="fragmented"?t.fragments=Z(t.fragments,(t=>l(t,e,n))):t.content=l(t.content,e,n)}))};const u=(e,n)=>{const o=t.convertURL(n,"src");d(e.src,n);$s(fo.fromDom(e),{src:Hg(t)?a(n):n,"data-mce-src":o})};const m=()=>{n||(n=LI(t,s));return h().then(c((o=>{const s=Z(o,(t=>t.blobInfo));return n.upload(s,BI(t)).then(c((n=>{const s=[];let r=false;const c=Z(n,((n,c)=>{const{blobInfo:a,image:i}=o[c];let l=false;if(n.status&&Wg(t)){n.url&&!Ce(i.src,n.url)&&(r=true);e.removeByUri(i.src);ML(t)||u(i,n.url)}else if(n.error){if(n.error.remove){d(i.src,Gn.transparentSrc);s.push(i);l=true}gM(t,n.error.message)}return{element:i,status:n.status,uploadUri:n.url,blobInfo:a,removed:l}}));s.length>0&&!ML(t)?t.undoManager.transact((()=>{J(or(s),(n=>{const o=Xo(n);Gs(n);o.each(II(t));e.removeByUri(n.dom.src)}))})):r&&t.undoManager.dispatchChange();return c})))})))};const f=()=>jg(t)?m():Promise.resolve([]);const p=t=>mt(r,(e=>e(t)));const g=t=>{r.push(t)};const h=()=>{o||(o=SI(s,e));return o.findAll(t.getBody(),p).then(c((e=>{const n=nt(e,(e=>{if(C(e)){pM(t,e);return false}return e.uriType!=="blob"}));ML(t)||J(n,(t=>{d(t.image.src,t.blobInfo.blobUri());t.image.src=t.blobInfo.blobUri();t.image.removeAttribute("data-mce-src")}));return n})))};const b=()=>{e.destroy();s.destroy();o=n=null};const y=n=>n.replace(/src="(blob:[^"]+)"/g,((n,o)=>{const r=s.getResultUri(o);if(r)return'src="'+r+'"';let c=e.getByUri(o);c||(c=rt(t.editorManager.get(),((t,e)=>t||e.editorUpload&&e.editorUpload.blobCache.getByUri(o)),void 0));if(c){const t=c.blob();return'src="data:'+t.type+";base64,"+c.base64()+'"'}return n}));t.on("SetContent",(()=>{jg(t)?f():h()}));t.on("RawSaveContent",(t=>{t.content=y(t.content)}));t.on("GetContent",(t=>{t.source_view||t.format==="raw"||t.format==="tree"||(t.content=y(t.content))}));t.on("PostRender",(()=>{t.parser.addNodeFilter("img",(t=>{J(t,(t=>{const n=t.attr("src");if(!n||e.getByUri(n))return;const o=s.getResultUri(n);o&&t.attr("src",o)}))}))}));return{blobCache:e,addFilter:g,uploadImages:m,uploadImagesAuto:f,scanForImages:h,destroy:b}};const UI=t=>{const e=t.dom;const n=t.schema.type;const o={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:false,classes:"align-left",ceFalseOverride:true,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"left"},inherit:false,preview:false},{selector:"img,audio,video",collapsed:false,styles:{float:"left"},preview:"font-family font-size"},{selector:".mce-placeholder",styles:{float:"left"},ceFalseOverride:true},{selector:"table",collapsed:false,styles:{marginLeft:"0px",marginRight:"auto"},onformat:t=>{e.setStyle(t,"float",null)},preview:"font-family font-size"},{selector:".mce-preview-object,[data-ephox-embed-iri]",ceFalseOverride:true,styles:{float:"left"}}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"center"},inherit:false,preview:"font-family font-size"},{selector:"figure.image",collapsed:false,classes:"align-center",ceFalseOverride:true,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:false,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:false},{selector:".mce-placeholder",styles:{display:"block",marginLeft:"auto",marginRight:"auto"},ceFalseOverride:true},{selector:"table",collapsed:false,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"},{selector:".mce-preview-object",ceFalseOverride:true,styles:{display:"table",marginLeft:"auto",marginRight:"auto"},preview:false},{selector:"[data-ephox-embed-iri]",ceFalseOverride:true,styles:{marginLeft:"auto",marginRight:"auto"},preview:false}],alignright:[{selector:"figure.image",collapsed:false,classes:"align-right",ceFalseOverride:true,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"right"},inherit:false,preview:"font-family font-size"},{selector:"img,audio,video",collapsed:false,styles:{float:"right"},preview:"font-family font-size"},{selector:".mce-placeholder",styles:{float:"right"},ceFalseOverride:true},{selector:"table",collapsed:false,styles:{marginRight:"0px",marginLeft:"auto"},onformat:t=>{e.setStyle(t,"float",null)},preview:"font-family font-size"},{selector:".mce-preview-object,[data-ephox-embed-iri]",ceFalseOverride:true,styles:{float:"right"},preview:false}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li,pre",styles:{textAlign:"justify"},inherit:false,preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all",preserve_attributes:["class","style"]}],italic:[{inline:"em",remove:"all",preserve_attributes:["class","style"]},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all",preserve_attributes:["class","style"]}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:true},{inline:"u",remove:"all",preserve_attributes:["class","style"]}],strikethrough:(()=>{const t={inline:"span",styles:{textDecoration:"line-through"},exact:true};const e={inline:"strike",remove:"all",preserve_attributes:["class","style"]};const o={inline:"s",remove:"all",preserve_attributes:["class","style"]};return n!=="html4"?[o,t,e]:[t,o,e]})(),forecolor:{inline:"span",styles:{color:"%value"},links:true,remove_similar:true,clear_child_styles:true},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:true,remove_similar:true,clear_child_styles:true},fontname:{inline:"span",toggle:false,styles:{fontFamily:"%value"},clear_child_styles:true},fontsize:{inline:"span",toggle:false,styles:{fontSize:"%value"},clear_child_styles:true},lineheight:{selector:"h1,h2,h3,h4,h5,h6,p,li,td,th,div",styles:{lineHeight:"%value"},remove_similar:true},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:true,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},samp:{inline:"samp"},link:{inline:"a",selector:"a",remove:"all",split:true,deep:true,onmatch:(t,e,n)=>ha(t)&&t.hasAttribute("href"),onformat:(t,n,o)=>{co.each(o,((n,o)=>{e.setAttrib(t,o,n)}))}},lang:{inline:"span",clear_child_styles:true,remove_similar:true,attributes:{lang:"%value","data-mce-lang":t=>t?.customValue??null}},removeformat:[{selector:"b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",remove:"all",split:true,expand:false,block_expand:true,deep:true},{selector:"span",attributes:["style","class"],remove:"empty",split:true,expand:false,deep:true},{selector:"*",attributes:["style","class"],split:false,expand:false,deep:true}]};co.each("p h1 h2 h3 h4 h5 h6 div address pre dt dd".split(/\s/),(t=>{o[t]={block:t,remove:"all"}}));return o};const zI={remove_similar:true,inherit:false};const $I={selector:"td,th",...zI};const jI={tablecellbackgroundcolor:{styles:{backgroundColor:"%value"},...$I},tablecellverticalalign:{styles:{"vertical-align":"%value"},...$I},tablecellbordercolor:{styles:{borderColor:"%value"},...$I},tablecellclass:{classes:["%value"],...$I},tableclass:{selector:"table",classes:["%value"],...zI},tablecellborderstyle:{styles:{borderStyle:"%value"},...$I},tablecellborderwidth:{styles:{borderWidth:"%value"},...$I}};const HI=P(jI);const WI=t=>{const e={};const n=t=>N(t)?e[t]:e;const o=t=>Pt(e,t);const s=(t,n)=>{if(t)if(C(t)){E(n)||(n=[n]);J(n,(t=>{S(t.deep)&&(t.deep=!xC(t));S(t.split)&&(t.split=!xC(t)||kC(t));S(t.remove)&&xC(t)&&!kC(t)&&(t.remove="none");if(xC(t)&&kC(t)){t.mixed=true;t.block_expand=true}C(t.classes)&&(t.classes=t.classes.split(/\s+/))}));e[t]=n}else kt(t,((t,e)=>{s(e,t)}))};const r=t=>{t&&e[t]&&delete e[t];return e};s(UI(t));s(HI());s(vh(t));return{get:n,has:o,register:s,unregister:r}};const VI=co.each;const qI=wd.DOM;const KI=t=>N(t)&&w(t);const YI=(t,e)=>{const n=e&&e.schema||Il({});const o=(t,e)=>{e.classes.length>0&&qI.addClass(t,e.classes.join(" "));qI.setAttribs(t,e.attrs)};const s=t=>{const e=C(t)?{name:t,classes:[],attrs:{}}:t;const n=qI.create(e.name);o(n,e);return n};const r=(t,e)=>{const o=n.getElementRule(t.nodeName.toLowerCase());const s=o?.parentsRequired;return!(!s||!s.length)&&(e&&X(s,e)?e:s[0])};const c=(t,e,n)=>{let o;const a=e[0];const i=KI(a)?a.name:void 0;const l=r(t,i);if(l)if(i===l){o=a;e=e.slice(1)}else o=l;else if(a){o=a;e=e.slice(1)}else if(!n)return t;const d=o?s(o):qI.create("div");d.appendChild(t);n&&co.each(n,(e=>{const n=s(e);d.insertBefore(n,t)}));const u=KI(o)?o.siblings:void 0;return c(d,e,u)};const a=qI.create("div");if(t.length>0){const e=t[0];const n=s(e);const o=KI(e)?e.siblings:void 0;a.appendChild(c(n,t.slice(1),o))}return a};const GI=t=>{t=co.trim(t);let e="div";const n={name:e,classes:[],attrs:{},selector:t};t!=="*"&&(e=t.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,((t,e,o,s,r)=>{switch(e){case"#":n.attrs.id=o;break;case".":n.classes.push(o);break;case":":co.inArray("checked disabled enabled read-only required".split(" "),o)!==-1&&(n.attrs[o]=o);break}if(s==="["){const t=r.match(/([\w\-]+)(?:\=\"([^\"]+))?/);t&&(n.attrs[t[1]]=t[2])}return""})));n.name=e||"div";return n};const XI=t=>{if(!C(t))return[];t=t.split(/\s*,\s*/)[0];t=t.replace(/\s*(~\+|~|\+|>)\s*/g,"$1");return co.map(t.split(/(?:>|\s+(?![^\[\]]+\]))/),(t=>{const e=co.map(t.split(/(?:~\+|~|\+)/),GI);const n=e.pop();e.length&&(n.siblings=e);return n})).reverse()};const QI=(t,e)=>{let n="";let o=Ch(t);if(o==="")return"";const s=t=>C(t)?t.replace(/%(\w+)/g,""):"";const r=(e,n)=>qI.getStyle(n??t.getBody(),e,true);if(C(e)){const n=t.formatter.get(e);if(!n)return"";e=n[0]}if("preview"in e){const t=e.preview;if(t===false)return"";o=t||o}let c=e.block||e.inline||"span";let a;const i=XI(e.selector);if(i.length>0){i[0].name||(i[0].name=c);c=e.selector;a=YI(i,t)}else a=YI([c],t);const l=qI.select(c,a)[0]||a.firstChild;VI(e.styles,((t,e)=>{const n=s(t);n&&qI.setStyle(l,e,n)}));VI(e.attributes,((t,e)=>{const n=s(t);n&&qI.setAttrib(l,e,n)}));VI(e.classes,(t=>{const e=s(t);qI.hasClass(l,e)||qI.addClass(l,e)}));t.dispatch("PreviewFormats");qI.setStyles(a,{position:"absolute",left:-65535});t.getBody().appendChild(a);const d=r("fontSize");const u=/px$/.test(d)?parseInt(d,10):0;VI(o.split(" "),(t=>{let e=r(t,l);if(t==="background-color"&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(e)){e=r(t);if(Gl(e).toLowerCase()==="#ffffff")return}if(t!=="color"||Gl(e).toLowerCase()!=="#000000"){if(t==="font-size"&&/em|%$/.test(e)){if(u===0)return;const t=parseFloat(e)/(/%$/.test(e)?100:1);e=t*u+"px"}t==="border"&&e&&(n+="padding:0 2px;");n+=t+":"+e+";"}}));t.dispatch("AfterPreviewFormats");qI.remove(a);return n};const ZI=t=>{t.addShortcut("meta+b","","Bold");t.addShortcut("meta+i","","Italic");t.addShortcut("meta+u","","Underline");for(let e=1;e<=6;e++)t.addShortcut("access+"+e,"",["FormatBlock",false,"h"+e]);t.addShortcut("access+7","",["FormatBlock",false,"p"]);t.addShortcut("access+8","",["FormatBlock",false,"div"]);t.addShortcut("access+9","",["FormatBlock",false,"address"])};const JI=t=>{const e=WI(t);const n=zt({});ZI(t);R_(t);ML(t)||rB(n,t);return{
/**
       * Returns the format by name or all formats if no name is specified.
       *
       * @method get
       * @param {String} name Optional name to retrieve by.
       * @return {Array/Object} Array/Object with all registered formats or a specific format.
       */
get:e.get,
/**
       * Returns true or false if a format is registered for the specified name.
       *
       * @method has
       * @param {String} name Format name to check if a format exists.
       * @return {Boolean} True/False if a format for the specified name exists.
       */
has:e.has,
/**
       * Registers a specific format by name.
       *
       * @method register
       * @param {Object/String} name Name of the format for example "bold".
       * @param {Object/Array} format Optional format object or array of format variants
       * can only be omitted if the first arg is an object.
       */
register:e.register,
/**
       * Unregister a specific format by name.
       *
       * @method unregister
       * @param {String} name Name of the format for example "bold".
       */
unregister:e.unregister,
/**
       * Applies the specified format to the current selection or specified node.
       *
       * @method apply
       * @param {String} name Name of format to apply.
       * @param {Object} vars Optional list of variables to replace within format before applying it.
       * @param {Node} node Optional node to apply the format to defaults to current selection.
       */
apply:(e,n,o)=>{oP(t,e,n,o)},
/**
       * Removes the specified format from the current selection or specified node.
       *
       * @method remove
       * @param {String} name Name of format to remove.
       * @param {Object} vars Optional list of variables to replace within format before removing it.
       * @param {Node/Range} node Optional node or DOM range to remove the format from defaults to current selection.
       */
remove:(e,n,o,s)=>{sP(t,e,n,o,s)},
/**
       * Toggles the specified format on/off.
       *
       * @method toggle
       * @param {String} name Name of format to apply/remove.
       * @param {Object} vars Optional list of variables to replace within format before applying/removing it.
       * @param {Node} node Optional node to apply the format to or remove from. Defaults to current selection.
       */
toggle:(e,n,o)=>{rP(t,e,n,o)},
/**
       * Matches the current selection or specified node against the specified format name.
       *
       * @method match
       * @param {String} name Name of format to match.
       * @param {Object} vars Optional list of variables to replace before checking it.
       * @param {Node} node Optional node to check.
       * @param {Boolean} similar Optional argument to specify that similar formats should be checked instead of only exact formats.
       * @return {Boolean} true/false if the specified selection/node matches the format.
       */
match:(e,n,o,s)=>ZL(t,e,n,o,s)
/**
       * Finds the closest matching format from a set of formats for the current selection.
       *
       * @method closest
       * @param {Array} names Format names to check for.
       * @return {String} The closest matching format name or null.
       */,closest:e=>nP(t,e)
/**
       * Matches the current selection against the array of formats and returns a new array with matching formats.
       *
       * @method matchAll
       * @param {Array} names Name of format to match.
       * @param {Object} vars Optional list of variables to replace before checking it.
       * @return {Array} Array with matched formats.
       */,matchAll:(e,n)=>JL(t,e,n)
/**
       * Return true/false if the specified node has the specified format.
       *
       * @method matchNode
       * @param {Node} node Node to check the format on.
       * @param {String} name Format name to check.
       * @param {Object} vars Optional list of variables to replace before checking it.
       * @param {Boolean} similar Match format that has similar properties.
       * @return {Object} Returns the format object it matches or undefined if it doesn't match.
       */,matchNode:(e,n,o,s)=>tP(t,e,n,o,s)
/**
       * Returns true/false if the specified format can be applied to the current selection or not. It
       * will currently only check the state for selector formats, it returns true on all other format types.
       *
       * @method canApply
       * @param {String} name Name of format to check.
       * @return {Boolean} true/false if the specified format can be applied to the current selection/node.
       */,canApply:e=>eP(t,e)
/**
       * Executes the specified callback when the current selection matches the formats or not.
       *
       * @method formatChanged
       * @param {String} formats Comma separated list of formats to check for.
       * @param {Function} callback Callback with state and args when the format is changed/toggled on/off.
       * @param {Boolean} similar True/false state if the match should handle similar or exact formats.
       * @param {Object} vars Restrict the format being watched to only match if the variables applied are equal to vars.
       */,formatChanged:(e,o,s,r)=>cP(t,n,e,o,s,r)
/**
       * Returns a preview css text for the specified format.
       *
       * @method getCssText
       * @param {String/Object} format Format to generate preview css text for.
       * @return {String} Css text for the specified format.
       * @example
       * const cssText1 = editor.formatter.getCssText('bold');
       * const cssText2 = editor.formatter.getCssText({ inline: 'b' });
       */,getCssText:F(QI,t)}};const tF=t=>{switch(t.toLowerCase()){case"undo":case"redo":case"mcefocus":return true;default:return false}};const eF=(t,e,n)=>{const o=zt(false);const s=t=>{yL(e,false,n);e.add({},t)};t.on("init",(()=>{e.add()}));t.on("BeforeExecCommand",(t=>{const o=t.command;if(!tF(o)){vL(e,n);e.beforeChange()}}));t.on("ExecCommand",(t=>{const e=t.command;tF(e)||s(t)}));t.on("ObjectResizeStart cut",(()=>{e.beforeChange()}));t.on("SaveContent ObjectResized blur",s);t.on("dragend",s);t.on("keyup",(n=>{const r=n.keyCode;if(n.isDefaultPrevented())return;const c=Gn.os.isMacOS()&&n.key==="Meta";if(r>=33&&r<=36||r>=37&&r<=40||r===45||n.ctrlKey||c){s();t.nodeChanged()}r!==46&&r!==8||t.nodeChanged();if(o.get()&&e.typing&&!hL(t.readonly,dL(t),e.data[0])){t.isDirty()||t.setDirty(true);t.dispatch("TypingUndo");o.set(false);t.nodeChanged()}}));t.on("keydown",(t=>{const r=t.keyCode;if(t.isDefaultPrevented())return;if(r>=33&&r<=36||r>=37&&r<=40||r===45){e.typing&&s(t);return}const c=t.ctrlKey&&!t.altKey||t.metaKey;if((r<16||r>20)&&r!==224&&r!==91&&!e.typing&&!c){e.beforeChange();yL(e,true,n);e.add({},t);o.set(true);return}const a=Gn.os.isMacOS()?t.metaKey:t.ctrlKey&&!t.altKey;a&&e.beforeChange()}));t.on("mousedown",(t=>{e.typing&&s(t)}));const r=t=>t.inputType==="insertReplacementText";const c=t=>t.inputType==="insertText"&&t.data===null;const a=t=>t.inputType==="insertFromPaste"||t.inputType==="insertFromDrop";t.on("input",(t=>{t.inputType&&(r(t)||c(t)||a(t))&&s(t)}));t.on("AddUndo Undo Redo ClearUndos",(e=>{e.isDefaultPrevented()||t.nodeChanged()}))};const nF=t=>{t.addShortcut("meta+z","","Undo");t.addShortcut("meta+y,meta+shift+z","","Redo")};const oF=t=>{const e=he();const n=zt(0);const o=zt(0);const s={data:[],typing:false,beforeChange:()=>{$L(t,n,e)},
/**
       * Adds a new undo level/snapshot to the undo list.
       *
       * @method add
       * @param {Object} level Optional undo level object to add.
       * @param {EditorEvent} event Optional event responsible for the creation of the undo level.
       * @return {Object} Undo level that got added or null if a level wasn't needed.
       */
add:(r,c)=>jL(t,s,o,n,e,r,c),dispatchChange:()=>{t.setDirty(true);const e=dL(t);e.bookmark=xf(t.selection);t.dispatch("change",{level:e,lastLevel:bt(s.data,o.get()).getOrUndefined()})},undo:()=>HL(t,s,n,o),redo:()=>WL(t,o,s.data),clear:()=>{VL(t,s,o)},reset:()=>{qL(t,s)},hasUndo:()=>KL(t,s,o),hasRedo:()=>YL(t,s,o),
/**
       * Executes the specified mutator function as an undo transaction. The selection
       * before the modification will be stored to the undo stack and if the DOM changes
       * it will add a new undo level. Any logic within the translation that adds undo levels will
       * be ignored. So a translation can include calls to execCommand or editor.insertContent.
       *
       * @method transact
       * @param {Function} callback Function that gets executed and has dom manipulation logic in it.
       * @return {Object} Undo level that got added or null it a level wasn't needed.
       */
transact:e=>GL(t,s,n,e),
/**
       * Executes the specified mutator function as an undo transaction. But without adding an undo level.
       * Any logic within the translation that adds undo levels will be ignored. So a translation can
       * include calls to execCommand or editor.insertContent.
       *
       * @method ignore
       * @param {Function} callback Function that gets executed and has dom manipulation logic in it.
       */
ignore:e=>{XL(t,n,e)},
/**
       * Adds an extra "hidden" undo level by first applying the first mutation and store that to the undo stack
       * then roll back that change and do the second mutation on top of the stack. This will produce an extra
       * undo level that the user doesn't see until they undo.
       *
       * @method extra
       * @param {Function} callback1 Function that does mutation but gets stored as a "hidden" extra undo level.
       * @param {Function} callback2 Function that does mutation but gets displayed to the user.
       */
extra:(e,n)=>{QL(t,s,o,e,n)}};ML(t)||eF(t,s,n);nF(t);return s};const sF=[9,27,Jw.HOME,Jw.END,19,20,44,144,145,33,34,45,16,17,18,91,92,93,Jw.DOWN,Jw.UP,Jw.LEFT,Jw.RIGHT].concat(Gn.browser.isFirefox()?[224]:[]);const rF="data-mce-placeholder";const cF=t=>t.type==="keydown"||t.type==="keyup";const aF=t=>{const e=t.keyCode;return e===Jw.BACKSPACE||e===Jw.DELETE};const iF=t=>{if(cF(t)){const e=t.keyCode;return!aF(t)&&(Jw.metaKeyPressed(t)||t.altKey||e>=112&&e<=123||X(sF,e))}return false};const lF=t=>cF(t)&&!(aF(t)||t.type==="keyup"&&t.keyCode===229);const dF=(t,e,n)=>{if(t.isEmpty(e,void 0,{skipBogus:false,includeZwsp:true})){const o=e.firstElementChild;return!o||!t.getStyle(e.firstElementChild,"padding-left")&&!t.getStyle(e.firstElementChild,"padding-right")&&n===o.nodeName.toLowerCase()}return false};const uF=t=>{const e=t.dom;const n=Pg(t);const o=uh(t)??"";const s=(r,c)=>{if(iF(r))return;const a=t.getBody();const i=!lF(r)&&dF(e,a,n);const l=e.getAttrib(a,rF)!=="";if(l!==i||c){e.setAttrib(a,rF,i?o:null);eg(t,i);t.on(i?"keydown":"keyup",s);t.off(i?"keyup":"keydown",s)}};_e(o)&&t.on("init",(e=>{s(e,true);t.on("change SetContent ExecCommand",s);t.on("paste",(e=>Ew.setEditorTimeout(t,(()=>s(e)))))}))};const mF=t=>e=>N(e)&&e.nodeName.toLowerCase()===t;const fF=t=>e=>N(e)&&t.test(e.nodeName);const pF=t=>N(t)&&t.nodeType===3;const gF=t=>N(t)&&t.nodeType===1;const hF=fF(/^(OL|UL|DL)$/);const bF=fF(/^(OL|UL)$/);const yF=fF(/^(LI|DT|DD)$/);const vF=fF(/^(DT|DD)$/);const CF=mF("br");const wF=t=>t.parentNode?.firstChild===t;const OF=(t,e)=>N(e)&&e.nodeName in t.schema.getTextBlockElements();const EF=(t,e)=>N(t)&&t.nodeName in e;const xF=(t,e)=>N(e)&&e.nodeName in t.schema.getVoidElements();const kF=(t,e)=>!!CF(e)&&(t.isBlock(e.nextSibling)&&!CF(e.previousSibling));const SF=(t,e,n)=>{const o=t.isEmpty(e);return!(n&&t.select("span[data-mce-type=bookmark]",e).length>0)&&o};const _F=(t,e)=>t.isChildOf(e,t.getRoot());const NF=wd.DOM;const RF=(t,e)=>{const n=e.parentElement;if(n&&n.nodeName==="LI"&&n.firstChild===e){const o=n.previousSibling;if(o&&o.nodeName==="LI"){o.appendChild(e);SF(t,n)&&NF.remove(n)}else NF.setStyle(n,"listStyleType","none")}if(hF(n)){const t=n.previousSibling;t&&t.nodeName==="LI"&&t.appendChild(e)}};const AF=(t,e)=>{const n=co.grep(t.select("ol,ul",e));co.each(n,(e=>{RF(t,e)}))};const DF=(t,e)=>{if(pF(t))return{container:t,offset:e};const n=wO.getNode(t,e);return pF(n)?{container:n,offset:e>=t.childNodes.length?n.data.length:0}:n.previousSibling&&pF(n.previousSibling)?{container:n.previousSibling,offset:n.previousSibling.data.length}:n.nextSibling&&pF(n.nextSibling)?{container:n.nextSibling,offset:0}:{container:t,offset:e}};const TF=t=>{const e=t.cloneRange();const n=DF(t.startContainer,t.startOffset);e.setStart(n.container,n.offset);const o=DF(t.endContainer,t.endOffset);e.setEnd(o.container,o.offset);return e};const BF=["OL","UL","DL"];const LF=BF.join(",");const PF=(t,e)=>{const n=e||t.selection.getStart(true);return t.dom.getParent(n,LF,WF(t,n))};const MF=(t,e)=>N(t)&&e.length===1&&e[0]===t;const IF=t=>nt(t.querySelectorAll(LF),hF);const FF=t=>{const e=PF(t);const n=t.selection.getSelectedBlocks();return MF(e,n)?IF(e):nt(n,(t=>hF(t)&&e!==t))};const UF=(t,e)=>{const n=co.map(e,(e=>{const n=t.dom.getParent(e,"li,dd,dt",WF(t,e));return n||e}));return Ot(n)};const zF=t=>{const e=t.selection.getSelectedBlocks();return nt(UF(t,e),yF)};const $F=t=>nt(zF(t),vF);const jF=(t,e)=>{const n=t.dom.getParents(e,"TD,TH");return n.length>0?n[0]:t.getBody()};const HF=(t,e)=>!hF(e)&&!yF(e)&&Q(BF,(n=>t.isValidChild(e.nodeName,n)));const WF=(t,e)=>{const n=t.dom.getParents(e,t.dom.isBlock);const o=e=>e.nodeName.toLowerCase()!==Pg(t);const s=at(n,(e=>o(e)&&HF(t.schema,e)));return s.getOr(t.getBody())};const VF=t=>Xo(t).exists((t=>yF(t.dom)&&cs(t).exists((t=>!hF(t.dom)))&&as(t).exists((t=>!hF(t.dom)))));const qF=(t,e)=>{const n=t.dom.getParents(e,"ol,ul",WF(t,e));return vt(n)};const KF=t=>{const e=qF(t,t.selection.getStart());const n=nt(t.selection.getSelectedBlocks(),bF);return e.toArray().concat(n)};const YF=t=>{const e=t.selection.getStart();return t.dom.getParents(e,"ol,ul",WF(t,e))};const GF=t=>{const e=KF(t);const n=YF(t);return at(n,(t=>VF(fo.fromDom(t)))).fold((()=>XF(t,e)),(t=>[t]))};const XF=(t,e)=>{const n=Z(e,(e=>qF(t,e).getOr(e)));return Ot(n)};const QF=t=>/\btox\-/.test(t.className);const ZF=(t,e)=>e!==null&&!t.dom.isEditable(e);const JF=t=>{const e=PF(t);return ZF(t,e)||!t.selection.isEditable()};const tU=(t,e)=>{const n=t.dom.getParent(e,"ol,ul,dl");return ZF(t,n)||!t.selection.isEditable()};const eU=(t,e,n)=>t.dispatch("ListMutation",{action:e,element:n});const nU=(t,e,n={})=>{const o=t.dom;const s=t.schema.getBlockElements();const r=o.createFragment();const c=Pg(t);const a=Mg(t);let i;let l;let d=false;l=o.create(c,{...a,...n.style?{style:n.style}:{}});EF(e.firstChild,s)||r.appendChild(l);while(i=e.firstChild){const t=i.nodeName;d||t==="SPAN"&&i.getAttribute("data-mce-type")==="bookmark"||(d=true);if(EF(i,s)){r.appendChild(i);l=null}else{if(!l){l=o.create(c,a);r.appendChild(l)}l.appendChild(i)}}!d&&l&&l.appendChild(o.create("br",{"data-mce-bogus":"1"}));return r};const oU=t=>Lo(t,"OL,UL");const sU=t=>Lo(t,"LI");const rU=t=>cs(t).exists(oU);const cU=t=>as(t).exists(oU);const aU=(t,e)=>Db(t).map((t=>t>=e)).getOr(true);const iU=t=>"listAttributes"in t;const lU=t=>"isComment"in t;const dU=t=>"isFragment"in t;const uU=t=>t.depth>0;const mU=t=>t.isSelected;const fU=t=>{const e=ss(t);const n=cU(t)?e.slice(0,-1):e;return Z(n,Js)};const pU=(t,e,n)=>Xo(t).filter($o).map((o=>({depth:e,dirty:false,isSelected:n,content:fU(t),itemAttributes:Ks(t),listAttributes:Ks(o),listType:Mo(o),isInPreviousLi:false})));const gU=(t,e)=>{Ls(t.item,e.list)};const hU=t=>{for(let e=1;e<t.length;e++)gU(t[e-1],t[e])};const bU=(t,e)=>{ae(vt(t),yt(e),gU)};const yU=(t,e)=>{const n={list:fo.fromTag(e,t),item:fo.fromTag("li",t)};Ls(n.list,n.item);return n};const vU=(t,e,n)=>{const o=[];for(let s=0;s<n;s++)o.push(yU(t,iU(e)?e.listType:e.parentListType));return o};const CU=(t,e)=>{for(let e=0;e<t.length-1;e++)ur(t[e].item,"list-style-type","none");vt(t).each((t=>{if(iU(e)){$s(t.list,e.listAttributes);$s(t.item,e.itemAttributes)}Fs(t.item,e.content)}))};const wU=(t,e)=>{Mo(t.list)!==e.listType&&(t.list=er(t.list,e.listType));$s(t.list,e.listAttributes)};const OU=(t,e,n)=>{const o=fo.fromTag("li",t);$s(o,e);Fs(o,n);return o};const EU=(t,e)=>{Ls(t.list,e);t.item=e};const xU=(t,e,n)=>{const o=e.slice(0,n.depth);vt(o).each((e=>{if(iU(n)){const o=OU(t,n.itemAttributes,n.content);EU(e,o);wU(e,n)}else if(dU(n))Fs(e.item,n.content);else{const t=fo.fromHtml(`\x3c!--${n.content}--\x3e`);Ls(e.list,t)}}));return o};const kU=(t,e,n)=>{const o=vU(t,n,n.depth-e.length);hU(o);CU(o,n);bU(e,o);return e.concat(o)};const SU=(t,e)=>{let n=Optional.none();const o=rt(e,((e,o,s)=>{if(lU(o)){if(s===0){n=Optional.some(o);return e}return xU(t,e,o)}return o.depth>e.length?kU(t,e,o):xU(t,e,o)}),[]);n.each((t=>{const e=fo.fromHtml(`\x3c!--${t.content}--\x3e`);yt(o).each((t=>{Bs(t.list,e)}))}));return yt(o).map((t=>t.list))};const _U=(t,e,n)=>{switch(e){case"Indent":if(!aU(t,n.depth))return;n.depth++;break;case"Outdent":n.depth--;break;case"Flatten":n.depth=0}n.dirty=true};const NU=(t,e)=>{if(iU(t)&&iU(e)){t.listType=e.listType;t.listAttributes={...e.listAttributes}}};const RU=t=>{t.listAttributes=Dt(t.listAttributes,((t,e)=>e!=="start"))};const AU=(t,e)=>{const n=t[e].depth;const o=t=>t.depth===n&&!t.dirty;const s=t=>t.depth<n;return ct(ft(t.slice(0,e)),o,s).orThunk((()=>ct(t.slice(e+1),o,s)))};const DU=t=>{J(t,((e,n)=>{AU(t,n).fold((()=>{e.dirty&&iU(e)&&RU(e)}),(t=>NU(e,t)))}));return t};const TU=(t,e,n,o)=>{if(Uo(o))return[{depth:t+1,content:o.dom.nodeValue??"",dirty:false,isSelected:false,isComment:true}];e.each((t=>{To(t.start,o)&&n.set(true)}));const s=pU(o,t,n.get());e.each((t=>{To(t.end,o)&&n.set(false)}));const r=as(o).filter(oU).map((o=>LU(t,e,n,o))).getOr([]);return s.toArray().concat(r)};const BU=(t,e,n,o)=>cs(o).filter(oU).fold((()=>TU(t,e,n,o)),(s=>{const r=rt(ss(o),((o,r,c)=>{if(c===0)return o;if(sU(r))return o.concat(TU(t,e,n,r));{const e={isFragment:true,depth:t,content:[r],isSelected:false,dirty:false,parentListType:Mo(s)};return o.concat(e)}}),[]);return LU(t,e,n,s).concat(r)}));const LU=(t,e,n,o)=>ut(ss(o),(o=>{const s=oU(o)?LU:BU;const r=t+1;return s(r,e,n,o)}));const PU=(t,e)=>{const n=zt(false);const o=0;return Z(t,(t=>({sourceList:t,entries:LU(o,e,n,t)})))};const MU=(t,e)=>{const n=DU(e);return Z(n,(e=>{const n=lU(e)?Tr([fo.fromHtml(`\x3c!--${e.content}--\x3e`)]):Tr(e.content);const o=iU(e)?e.itemAttributes:{};return fo.fromDom(nU(t,n.dom,o))}))};const IU=(t,e)=>{const n=DU(e);return SU(t.contentDocument,n).toArray()};const FU=(t,e)=>ut(ot(e,uU),(e=>{const n=yt(e).exists(uU);return n?IU(t,e):MU(t,e)}));const UU=(t,e,n)=>{J(nt(e,mU),(e=>_U(t,n,e)))};const zU=t=>{const e=Z(zF(t),fo.fromDom);return ae(at(e,U(rU)),at(ft(e),U(rU)),((t,e)=>({start:t,end:e})))};const $U=(t,e,n)=>{const o=PU(e,zU(t));J(o,(e=>{UU(t,e.entries,n);const o=FU(t,e.entries);J(o,(e=>{eU(t,n==="Indent"?"IndentList":"OutdentList",e.dom)}));Ms(e.sourceList,o);Gs(e.sourceList)}))};const jU=t=>Db(t).forall((e=>{const n=t.selection.getSelectedBlocks();return Q(n,(t=>Yr(fo.fromDom(t),"li").forall((t=>pc(t,"ol,ul").length<=e))))}));const HU=wd.DOM;const WU=(t,e,n)=>{const o=t=>{const e=t.parentNode;e&&co.each(s,(t=>{e.insertBefore(t,n.parentNode)}));HU.remove(t)};const s=HU.select('span[data-mce-type="bookmark"]',e);const r=nU(t,n);const c=HU.createRng();c.setStartAfter(n);c.setEndAfter(e);const a=c.extractContents();for(let e=a.firstChild;e;e=e.firstChild)if(e.nodeName==="LI"&&t.dom.isEmpty(e)){HU.remove(e);break}t.dom.isEmpty(a)||HU.insertAfter(a,e);HU.insertAfter(r,e);const i=n.parentElement;i&&SF(t.dom,i)&&o(i);HU.remove(n);SF(t.dom,e)&&HU.remove(e)};const VU=Vo("dd");const qU=Vo("dt");const KU=(t,e)=>{VU(e)?er(e,"dt"):qU(e)&&Qo(e).each((n=>WU(t,n.dom,e.dom)))};const YU=t=>{qU(t)&&er(t,"dd")};const GU=(t,e,n)=>{J(n,e==="Indent"?YU:e=>KU(t,e))};const XU=(t,e)=>{const n=or(GF(t));const o=or($F(t));let s=false;if(n.length||o.length){const r=t.selection.getBookmark();$U(t,n,e);GU(t,e,o);t.selection.moveToBookmark(r);t.selection.setRng(TF(t.selection.getRng()));t.nodeChanged();s=true}return s};const QU=(t,e)=>!JF(t)&&XU(t,e);const ZU=t=>QU(t,"Indent");const JU=t=>QU(t,"Outdent");const tz=t=>QU(t,"Flatten");const ez=t=>{switch(t){case"UL":return"ToggleUlList";case"OL":return"ToggleOlList";case"DL":return"ToggleDLList"}};const nz=(t,e,n)=>{const o=n["list-style-type"]?n["list-style-type"]:null;t.setStyle(e,"list-style-type",o)};const oz=(t,e)=>{co.each(e,((e,n)=>{t.setAttribute(n,e)}))};const sz=(t,e,n)=>{oz(e,n["list-attributes"]);co.each(t.select("li",e),(t=>{oz(t,n["list-item-attributes"])}))};const rz=(t,e,n)=>{nz(t,e,n);sz(t,e,n)};const cz=(t,e,n)=>{co.each(n,(n=>t.setStyle(e,n,"")))};const az=(t,e)=>N(e)&&!EF(e,t.schema.getBlockElements());const iz=(t,e,n,o)=>{let s=e[n?"startContainer":"endContainer"];const r=e[n?"startOffset":"endOffset"];gF(s)&&(s=s.childNodes[Math.min(r,s.childNodes.length-1)]||s);!n&&CF(s.nextSibling)&&(s=s.nextSibling);const c=e=>{while(!t.dom.isBlock(e)&&e.parentNode&&o!==e)e=e.parentNode;return e};const a=(e,n)=>{const o=new DomTreeWalker(e,c(e));const s=n?"next":"prev";let r;while(r=o[s]())if(!(xF(t,r)||Ie(r.textContent)||r.textContent?.length===0))return Optional.some(r);return Optional.none()};if(n&&pF(s))if(Ie(s.textContent))s=a(s,false).getOr(s);else{s.parentNode!==null&&az(t,s.parentNode)&&(s=s.parentNode);while(s.previousSibling!==null&&(az(t,s.previousSibling)||pF(s.previousSibling)))s=s.previousSibling}if(!n&&pF(s))if(Ie(s.textContent))s=a(s,true).getOr(s);else{s.parentNode!==null&&az(t,s.parentNode)&&(s=s.parentNode);while(s.nextSibling!==null&&(az(t,s.nextSibling)||pF(s.nextSibling)))s=s.nextSibling}while(s.parentNode!==o){const e=s.parentNode;if(OF(t,s))return s;if(/^(TD|TH)$/.test(e.nodeName))return s;s=e}return s};const lz=(t,e,n)=>{const o=[];const s=t.dom;const r=iz(t,e,true,n);const c=iz(t,e,false,n);let a;const i=[];for(let t=r;t;t=t.nextSibling){i.push(t);if(t===c)break}co.each(i,(e=>{if(OF(t,e)){o.push(e);a=null;return}if(s.isBlock(e)||CF(e)){CF(e)&&s.remove(e);a=null;return}const r=e.nextSibling;if(sw.isBookmarkNode(e)&&(hF(r)||OF(t,r)||!r&&e.parentNode===n))a=null;else{if(!a){a=s.create("p");e.parentNode?.insertBefore(a,e);o.push(a)}a.appendChild(e)}}));return o};const dz=(t,e,n)=>{const o=t.getStyle(e,"list-style-type");let s=n?n["list-style-type"]:"";s=s===null?"":s;return o===s};const uz=(t,e)=>{const n=t.selection.getStart(true);const o=iz(t,e,true,t.getBody());return vc(fo.fromDom(o),fo.fromDom(e.commonAncestorContainer))?e.commonAncestorContainer:n};const mz=(t,e,n)=>{const o=t.selection.getRng();let s="LI";const r=WF(t,uz(t,o));const c=t.dom;if(c.getContentEditable(t.selection.getNode())==="false")return;e=e.toUpperCase();e==="DL"&&(s="DT");const a=XS(o);const i=nt(lz(t,o,r),t.dom.isEditable);co.each(i,(o=>{let r;const a=o.previousSibling;const i=o.parentNode;if(!yF(i)){if(a&&hF(a)&&a.nodeName===e&&dz(c,a,n)){r=a;o=c.rename(o,s);a.appendChild(o)}else{r=c.create(e);i.insertBefore(r,o);r.appendChild(o);o=c.rename(o,s)}cz(c,o,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"]);rz(c,r,n);bz(t.dom,r)}}));t.selection.setRng(QS(a))};const fz=(t,e)=>hF(t)&&t.nodeName===e?.nodeName;const pz=(t,e,n)=>{const o=t.getStyle(e,"list-style-type",true);const s=t.getStyle(n,"list-style-type",true);return o===s};const gz=(t,e)=>t.className===e.className;const hz=(t,e,n)=>fz(e,n)&&pz(t,e,n)&&gz(e,n);const bz=(t,e)=>{let n;let o=e.nextSibling;if(hz(t,e,o)){const s=o;while(n=s.firstChild)e.appendChild(n);t.remove(s)}o=e.previousSibling;if(hz(t,e,o)){const s=o;while(n=s.lastChild)e.insertBefore(n,e.firstChild);t.remove(s)}};const yz=(t,e,n,o)=>{if(e.nodeName!==n){const s=t.dom.rename(e,n);rz(t.dom,s,o);eU(t,ez(n),s)}else{rz(t.dom,e,o);eU(t,ez(n),e)}};const vz=(t,e,n,o)=>{e.classList.forEach(((t,n,o)=>{if(t.startsWith("tox-")){o.remove(t);o.length===0&&e.removeAttribute("class")}}));if(e.nodeName!==n){const s=t.dom.rename(e,n);rz(t.dom,s,o);eU(t,ez(n),s)}else{rz(t.dom,e,o);eU(t,ez(n),e)}};const Cz=(t,e,n,o,s)=>{const r=hF(e);if(!r||e.nodeName!==o||wz(s)||QF(e)){mz(t,o,s);const c=XS(t.selection.getRng());const a=r?[e,...n]:n;const i=r&&QF(e)?vz:yz;co.each(a,(e=>{i(t,e,o,s)}));t.selection.setRng(QS(c))}else tz(t)};const wz=t=>"list-style-type"in t;const Oz=(t,e,n,o)=>{if(e!==t.getBody())if(e)if(e.nodeName!==n||wz(o)||QF(e)){const s=XS(t.selection.getRng());QF(e)&&e.classList.forEach(((t,n,o)=>{if(t.startsWith("tox-")){o.remove(t);o.length===0&&e.removeAttribute("class")}}));rz(t.dom,e,o);const r=t.dom.rename(e,n);bz(t.dom,r);t.selection.setRng(QS(s));mz(t,n,o);eU(t,ez(n),r)}else tz(t);else{mz(t,n,o);eU(t,ez(n),e)}};const Ez=(t,e,n)=>{const o=PF(t);if(tU(t,o))return;const s=FF(t);const r=w(n)?n:{};s.length>0?Cz(t,o,s,e,r):Oz(t,o,e,r)};const xz=(t,e,n,o)=>{let s=e.startContainer;const r=e.startOffset;if(pF(s)&&(n?r<s.data.length:r>0))return s;const c=t.schema.getNonEmptyElements();gF(s)&&(s=wO.getNode(s,r));const a=new DomTreeWalker(s,o);n&&kF(t.dom,s)&&a.next();const i=n?a.next.bind(a):a.prev2.bind(a);while(s=i()){if(s.nodeName==="LI"&&!s.hasChildNodes())return s;if(c[s.nodeName])return s;if(pF(s)&&s.data.length>0)return s}return null};const kz=(t,e)=>{const n=e.childNodes;return n.length===1&&!hF(n[0])&&t.isBlock(n[0])};const Sz=t=>Optional.from(t).map(fo.fromDom).filter(zo).exists((t=>ic(t)&&!X(["details"],Mo(t))));const _z=(t,e)=>{kz(t,e)&&Sz(e.firstChild)&&t.remove(e.firstChild,true)};const Nz=(t,e,n)=>{let o;const s=kz(t,n)?n.firstChild:n;_z(t,e);if(!SF(t,e,true))while(o=e.firstChild)s.appendChild(o)};const Rz=(t,e,n)=>{let o;const s=e.parentNode;if(!_F(t,e)||!_F(t,n))return;hF(n.lastChild)&&(o=n.lastChild);s===n.lastChild&&CF(s.previousSibling)&&t.remove(s.previousSibling);const r=n.lastChild;r&&CF(r)&&e.hasChildNodes()&&t.remove(r);SF(t,n,true)&&Ys(fo.fromDom(n));Nz(t,e,n);o&&n.appendChild(o);const c=Bo(fo.fromDom(n),fo.fromDom(e));const a=c?t.getParents(e,hF,n):[];t.remove(e);J(a,(e=>{SF(t,e)&&e!==t.getRoot()&&t.remove(e)}))};const Az=(t,e,n)=>{Ys(fo.fromDom(n));Rz(t.dom,e,n);t.selection.setCursorLocation(n,0)};const Dz=(t,e,n,o)=>{const s=t.dom;if(s.isEmpty(o))Az(t,n,o);else{const r=XS(e);Rz(s,n,o);t.selection.setRng(QS(r))}};const Tz=(t,e,n,o)=>{const s=XS(e);Rz(t.dom,n,o);const r=QS(s);t.selection.setRng(r)};const Bz=(t,e)=>{const n=t.dom,o=t.selection;const s=o.getStart();const r=jF(t,s);const c=n.getParent(o.getStart(),"LI",r);if(c){const s=c.parentElement;if(s===t.getBody()&&SF(n,s))return true;const a=TF(o.getRng());const i=n.getParent(xz(t,a,e,r),"LI",r);const l=i&&(e?n.isChildOf(c,i):n.isChildOf(i,c));if(i&&i!==c&&!l){t.undoManager.transact((()=>{e?Dz(t,a,i,c):wF(c)?JU(t):Tz(t,a,c,i)}));return true}if(l&&!e&&i!==c){const e=a.commonAncestorContainer.parentElement;if(!e||n.isChildOf(i,e))return false;t.undoManager.transact((()=>{const o=XS(a);Nz(n,e,i);e.remove();const s=QS(o);t.selection.setRng(s)}));return true}if(!i&&!e&&a.startOffset===0&&a.endOffset===0){t.undoManager.transact((()=>{tz(t)}));return true}}return false};const Lz=(t,e,n)=>{const o=t.getParent(e.parentNode,t.isBlock,n);t.remove(e);o&&t.isEmpty(o)&&t.remove(o)};const Pz=(t,e)=>{const n=t.dom;const o=t.selection.getStart();const s=jF(t,o);const r=n.getParent(o,n.isBlock,s);if(r&&n.isEmpty(r,void 0,{checkRootAsContent:true})){const o=TF(t.selection.getRng());const c=xz(t,o,e,s);const a=n.getParent(c,"LI",s);if(c&&a){const i=t=>X(["td","th","caption"],Mo(t));const l=t=>t.dom===s;const d=jr(fo.fromDom(a),i,l);const u=jr(fo.fromDom(o.startContainer),i,l);if(!re(d,u,To))return false;t.undoManager.transact((()=>{const o=a.parentNode;Lz(n,r,s);bz(n,o);t.selection.select(c,true);t.selection.collapse(e)}));return true}}return false};const Mz=(t,e)=>Bz(t,e)||Pz(t,e);const Iz=t=>{const e=t.selection.getStart();const n=jF(t,e);const o=t.dom.getParent(e,"LI,DT,DD",n);return N(o)||zF(t).length>0};const Fz=t=>{if(Iz(t)){t.undoManager.transact((()=>{let e=true;const n=()=>e=false;t.on("input",n);t.execCommand("Delete");t.off("input",n);e&&t.dispatch("input");AF(t.dom,t.getBody())}));return true}return false};const Uz=(t,e)=>{const n=t.selection;return!tU(t,n.getNode())&&(n.isCollapsed()?Mz(t,e):Fz(t))};const zz=(t,e)=>({block:t,position:e});const $z=(t,e)=>({from:t,to:e});const jz=(t,e)=>{const n=fo.fromDom(t);const o=fo.fromDom(e.container());return Mk(n,o).map((t=>zz(t,e)))};const Hz=t=>!(Bo(t.to.block,t.from.block)||Bo(t.from.block,t.to.block));const Wz=t=>!To(t.from.block,t.to.block);const Vz=(t,e)=>{const n=e=>To(e,t);const o=t=>yu(t)||Ia(t.dom);return jr(e,o,n).filter($o).getOr(t)};const qz=(t,e)=>{const n=fo.fromDom(t);return To(Vz(n,e.from.block),Vz(n,e.to.block))};const Kz=t=>Fa(t.from.block.dom)===false&&Fa(t.to.block.dom)===false;const Yz=t=>{const e=t=>pu(t)||ki(t.dom)||hu(t);return e(t.from.block)&&e(t.to.block)};const Gz=(t,e,n,o)=>La(o.position.getNode())&&!ri(t,o.block)?Jy(false,o.block.dom).bind((t=>t.isEqual(o.position)?Xy(n,e,t).bind((t=>jz(e,t))):Optional.some(o))).getOr(o):o;const Xz=(t,e,n,o)=>{const s=jz(e,Hm.fromRangeStart(o));const r=s.bind((o=>Xy(n,e,o.position).bind((o=>jz(e,o).map((o=>Gz(t,e,n,o)))))));return ae(s,r,$z).filter((t=>Wz(t)&&qz(e,t)&&Kz(t)&&Yz(t)&&Hz(t)))};const Qz=(t,e,n,o)=>o.collapsed?Xz(t,e,n,o):Optional.none();const Zz=(t,e)=>{const n=ss(t);return it(n,(t=>e.isBlock(Mo(t)))).fold(P(n),(t=>n.slice(0,t)))};const Jz=(t,e)=>{const n=Zz(t,e);J(n,Gs);return n};const t$=(t,e,n)=>{const o=ax(n,e);return at(o.reverse(),(e=>ri(t,e))).each(Gs)};const e$=(t,e)=>nt(ns(e),(e=>!ri(t,e))).length===0;const n$=(t,e,n,o,s)=>{if(ri(o,n)){Eu(n);return nv(n.dom)}e$(o,s)&&ri(o,e)&&Ds(s,fo.fromTag("br"));const r=ev(n.dom,Hm.before(s.dom));J(Jz(e,o),(t=>{Ds(s,t)}));t$(o,t,e);return r};const o$=(t,e)=>t.isInline(Mo(e));const s$=(t,e,n,o)=>{if(ri(o,n)){if(ri(o,e)){const t=t=>{const e=(t,n)=>cs(t).fold((()=>n),(t=>o$(o,t)?e(t,n.concat(Zs(t))):n));return e(t,[])};const s=st(t(n),((t,e)=>{Ps(t,e);return e}),Ou());Ys(e);Ls(e,s)}Gs(n);return nv(e.dom)}const s=ov(n.dom);J(Jz(e,o),(t=>{Ls(n,t)}));t$(o,t,e);return s};const r$=(t,e)=>{const n=ax(e,t);return Optional.from(n[n.length-1])};const c$=(t,e)=>Bo(e,t)?r$(e,t):Optional.none();const a$=(t,e)=>{Jy(t,e.dom).bind((t=>Optional.from(t.getNode()))).map(fo.fromDom).filter(fu).each(Gs)};const i$=(t,e,n,o)=>{a$(true,e);a$(false,n);return c$(e,n).fold(F(s$,t,e,n,o),F(n$,t,e,n,o))};const l$=(t,e,n,o,s)=>e?i$(t,o,n,s):i$(t,n,o,s);const d$=(t,e)=>{const n=fo.fromDom(t.getBody());const o=Qz(t.schema,n.dom,e,t.selection.getRng()).map((o=>()=>{l$(n,e,o.from.block,o.to.block,t.schema).each((e=>{t.selection.setRng(e.toRange())}))}));return o};const u$=(t,e,n)=>{const o=e.getRng();return ae(Mk(t,fo.fromDom(o.startContainer)),Mk(t,fo.fromDom(o.endContainer)),((s,r)=>To(s,r)?Optional.none():Optional.some((()=>{o.deleteContents();l$(t,true,s,r,n).each((t=>{e.setRng(t.toRange())}))})))).getOr(Optional.none())};const m$=(t,e)=>{const n=fo.fromDom(e);const o=F(To,t);return $r(n,yu,o).isSome()};const f$=(t,e)=>m$(t,e.startContainer)||m$(t,e.endContainer);const p$=(t,e)=>{const n=ev(t.dom,Hm.fromRangeStart(e)).isNone();const o=tv(t.dom,Hm.fromRangeEnd(e)).isNone();return!f$(t,e)&&n&&o};const g$=t=>Optional.some((()=>{t.setContent("");t.selection.setCursorLocation()}));const h$=t=>{const e=fo.fromDom(t.getBody());const n=t.selection.getRng();return p$(e,n)?g$(t):u$(e,t.selection,t.schema)};const b$=(t,e)=>t.selection.isCollapsed()?Optional.none():h$(t);const y$=(t,e,n,o,s)=>Optional.from(e._selectionOverrides.showCaret(t,n,o,s));const v$=t=>{const e=t.ownerDocument.createRange();e.selectNode(t);return e};const C$=(t,e)=>{const n=t.dispatch("BeforeObjectSelected",{target:e});return n.isDefaultPrevented()?Optional.none():Optional.some(v$(e))};const w$=(t,e,n)=>{const o=Ey(1,t.getBody(),e);const s=Hm.fromRangeStart(o);const r=s.getNode();if(Zb(r))return y$(1,t,r,!s.isAtEnd(),false);const c=s.getNode(true);if(Zb(c))return y$(1,t,c,false,false);const a=US(t.dom.getRoot(),s.getNode());return Zb(a)?y$(1,t,a,false,n):Optional.none()};const O$=(t,e,n)=>e.collapsed?w$(t,e,n).getOr(e):e;const E$=t=>nx(t)||ZE(t);const x$=t=>ox(t)||JE(t);const k$=(t,e)=>{Na(e)&&e.data.length===0&&t.remove(e)};const S$=(t,e,n,o,s,r)=>{y$(o,t,r.getNode(!s),s,true).each((n=>{if(e.collapsed){const t=e.cloneRange();s?t.setEnd(n.startContainer,n.startOffset):t.setStart(n.endContainer,n.endOffset);t.deleteContents()}else e.deleteContents();t.selection.setRng(n)}));k$(t.dom,n)};const _$=(t,e)=>{const n=t.selection.getRng();if(!Na(n.commonAncestorContainer))return Optional.none();const o=e?1:-1;const s=jy(t.getBody());const r=F(Ny,e?s.next:s.prev);const c=e?E$:x$;const a=ky(o,t.getBody(),n);const i=r(a);const l=i?_k(e,i):i;if(!l||!Ry(a,l))return Optional.none();if(c(l))return Optional.some((()=>S$(t,n,a.getNode(),o,e,l)));const d=r(l);return d&&c(d)&&Ry(l,d)?Optional.some((()=>S$(t,n,a.getNode(),o,e,d))):Optional.none()};const N$=(t,e)=>_$(t,e);const R$=(t,e)=>{const n=t.getBody();return e?nv(n).filter(nx):ov(n).filter(ox)};const A$=t=>{const e=t.selection.getRng();return!e.collapsed&&(R$(t,true).exists((t=>t.isEqual(Hm.fromRangeStart(e))))||R$(t,false).exists((t=>t.isEqual(Hm.fromRangeEnd(e)))))};const D$=t=>N(t)&&(yu(fo.fromDom(t))||hu(fo.fromDom(t)));const T$=Ut.generate([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}]);const B$=(t,e)=>{const n=e.getNode(!t);const o=t?"after":"before";return ha(n)&&n.getAttribute("data-mce-caret")===o};const L$=(t,e,n,o,s)=>{const r=e=>s.isInline(e.nodeName.toLowerCase())&&!hy(n,o,t);return xy(!e,n).fold((()=>xy(e,o).fold(H,r)),r)};const P$=(t,e,n,o,s)=>{const r=s.getNode(!n);return Mk(fo.fromDom(e),fo.fromDom(o.getNode())).map((e=>ri(t,e)?T$.remove(e.dom):T$.moveToElement(r))).orThunk((()=>Optional.some(T$.moveToElement(r))))};const M$=(t,e,n,o)=>Xy(e,t,n).bind((s=>D$(s.getNode())||L$(t,e,n,s,o)?Optional.none():e&&Fa(s.getNode())||!e&&Fa(s.getNode(true))?P$(o,t,e,n,s):e&&ox(n)||!e&&nx(n)?Optional.some(T$.moveToPosition(s)):Optional.none()));const I$=(t,e)=>_(e)?Optional.none():t&&Fa(e.nextSibling)?Optional.some(T$.moveToElement(e.nextSibling)):!t&&Fa(e.previousSibling)?Optional.some(T$.moveToElement(e.previousSibling)):Optional.none();const F$=(t,e,n)=>n.fold((t=>Optional.some(T$.remove(t))),(t=>Optional.some(T$.moveToElement(t))),(n=>hy(e,n,t)?Optional.none():Optional.some(T$.moveToPosition(n))));const U$=(t,e,n,o)=>B$(e,n)?I$(e,n.getNode(!e)).orThunk((()=>M$(t,e,n,o))):M$(t,e,n,o).bind((e=>F$(t,n,e)));const z$=(t,e,n,o)=>{const s=Ey(e?1:-1,t,n);const r=Hm.fromRangeStart(s);const c=fo.fromDom(t);return!e&&ox(r)?Optional.some(T$.remove(r.getNode(true))):e&&nx(r)?Optional.some(T$.remove(r.getNode())):!e&&nx(r)&&Cx(c,r,o)?wx(c,r,o).map((t=>T$.remove(t.getNode()))):e&&ox(r)&&vx(c,r,o)?Ox(c,r,o).map((t=>T$.remove(t.getNode()))):U$(t,e,r,o)};const $$=(t,e)=>n=>{t._selectionOverrides.hideFakeCaret();yk(t,e,fo.fromDom(n));return true};const j$=(t,e)=>n=>{const o=e?Hm.before(n):Hm.after(n);t.selection.setRng(o.toRange());return true};const H$=t=>e=>{t.selection.setRng(e.toRange());return true};const W$=(t,e)=>Optional.from(US(t.getBody(),e));const V$=(t,e)=>{const n=t.selection.getNode();return W$(t,n).filter(Fa).fold((()=>z$(t.getBody(),e,t.selection.getRng(),t.schema).map((n=>()=>n.fold($$(t,e),j$(t,e),H$(t))))),(()=>Optional.some(T)))};const q$=t=>{J(gc(t,".mce-offscreen-selection"),Gs)};const K$=(t,e)=>{const n=t.selection.getNode();if(Fa(n)&&!za(n)){const o=W$(t,n.parentNode).filter(Fa);return o.fold((()=>Optional.some((()=>{q$(fo.fromDom(t.getBody()));yk(t,e,fo.fromDom(t.selection.getNode()));Ik(t)}))),(()=>Optional.some(T)))}return A$(t)?Optional.some((()=>{zk(t,t.selection.getRng(),fo.fromDom(t.getBody()))})):Optional.none()};const Y$=t=>{const e=t.dom,n=t.selection;const o=US(t.getBody(),n.getNode());if(Ia(o)&&e.isBlock(o)&&e.isEmpty(o)){const t=e.create("br",{"data-mce-bogus":"1"});e.setHTML(o,"");o.appendChild(t);n.setRng(Hm.before(t).toRange())}return true};const G$=(t,e)=>t.selection.isCollapsed()?V$(t,e):K$(t,e);const X$=(t,e)=>{const n=t.dom;const o=n.getParent(t.selection.getStart(),n.isBlock);const s=n.getParent(t.selection.getEnd(),n.isBlock);const r=t.getBody();const c=o?.nodeName?.toLowerCase();if(c==="div"&&o&&s&&o===r.firstChild&&s===r.lastChild&&!n.isEmpty(r)){const n=o.cloneNode(false);const s=()=>{e?Bk(t):Tk(t);if(r.firstChild!==o){const e=XS(t.selection.getRng(),(()=>document.createElement("span")));Array.from(r.childNodes).forEach((t=>n.appendChild(t)));r.appendChild(n);t.selection.setRng(QS(e))}};return Optional.some(s)}return Optional.none()};const Q$=(t,e)=>{const n=Hm.fromRangeStart(t.selection.getRng());return Xy(e,t.getBody(),n).filter((t=>e?XE(t):QE(t))).bind((t=>by(e?0:-1,t))).map((e=>()=>t.selection.select(e)))};const Z$=(t,e)=>t.selection.isCollapsed()?Q$(t,e):Optional.none();const J$=Na;const tj=t=>J$(t)&&t.data[0]===ku;const ej=t=>J$(t)&&t.data[t.data.length-1]===ku;const nj=t=>{const e=t.ownerDocument??document;return e.createTextNode(ku)};const oj=t=>{if(J$(t.previousSibling)){if(ej(t.previousSibling))return t.previousSibling;t.previousSibling.appendData(ku);return t.previousSibling}if(J$(t)){if(tj(t))return t;t.insertData(0,ku);return t}{const e=nj(t);t.parentNode?.insertBefore(e,t);return e}};const sj=t=>{if(J$(t.nextSibling)){if(tj(t.nextSibling))return t.nextSibling;t.nextSibling.insertData(0,ku);return t.nextSibling}if(J$(t)){if(ej(t))return t;t.appendData(ku);return t}{const e=nj(t);t.nextSibling?t.parentNode?.insertBefore(e,t.nextSibling):t.parentNode?.appendChild(e);return e}};const rj=(t,e)=>t?oj(e):sj(e);const cj=F(rj,true);const aj=F(rj,false);const ij=(t,e)=>Na(t.container())?rj(e,t.container()):rj(e,t.getNode());const lj=(t,e)=>{const n=e.get();return n&&t.container()===n&&Tu(n)};const dj=(t,e)=>e.fold((e=>{Hb(t.get());const n=cj(e);t.set(n);return Optional.some(Hm(n,n.length-1))}),(e=>nv(e).map((e=>{if(lj(e,t)){const e=t.get();return Hm(e,1)}{Hb(t.get());const n=ij(e,true);t.set(n);return Hm(n,1)}}))),(e=>ov(e).map((e=>{if(lj(e,t)){const e=t.get();return Hm(e,e.length-1)}{Hb(t.get());const n=ij(e,false);t.set(n);return Hm(n,n.length-1)}}))),(e=>{Hb(t.get());const n=aj(e);t.set(n);return Optional.some(Hm(n,1))}));const uj=(t,e)=>{for(let n=0;n<t.length;n++){const o=t[n].apply(null,e);if(o.isSome())return o}return Optional.none()};const mj=Ut.generate([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}]);const fj=(t,e)=>{const n=gy(e,t);return n||t};const pj=(t,e,n)=>{const o=Nk(n);const s=fj(e,o.container());return xk(t,s,o).fold((()=>tv(s,o).bind(F(xk,t,s)).map((t=>mj.before(t)))),Optional.none)};const gj=(t,e)=>cv(t,e)===null;const hj=(t,e,n)=>xk(t,e,n).filter(F(gj,e));const bj=(t,e,n)=>{const o=Rk(n);return hj(t,e,o).bind((t=>{const e=ev(t,o);return e.isNone()?Optional.some(mj.start(t)):Optional.none()}))};const yj=(t,e,n)=>{const o=Nk(n);return hj(t,e,o).bind((t=>{const e=tv(t,o);return e.isNone()?Optional.some(mj.end(t)):Optional.none()}))};const vj=(t,e,n)=>{const o=Rk(n);const s=fj(e,o.container());return xk(t,s,o).fold((()=>ev(s,o).bind(F(xk,t,s)).map((t=>mj.after(t)))),Optional.none)};const Cj=t=>!Ok(Oj(t));const wj=(t,e,n)=>{const o=uj([pj,bj,yj,vj],[t,e,n]);return o.filter(Cj)};const Oj=t=>t.fold(M,M,M,M);const Ej=t=>t.fold(P("before"),P("start"),P("end"),P("after"));const xj=t=>t.fold(mj.before,mj.before,mj.after,mj.after);const kj=t=>t.fold(mj.start,mj.start,mj.end,mj.end);const Sj=(t,e)=>Ej(t)===Ej(e)&&Oj(t)===Oj(e);const _j=(t,e,n,o,s,r)=>ae(xk(e,n,o),xk(e,n,s),((e,o)=>e!==o&&kk(n,e,o)?mj.after(t?e:o):r)).getOr(r);const Nj=(t,e)=>t.fold(W,(t=>!Sj(t,e)));const Rj=(t,e,n,o,s)=>{const r=_k(t,s);const c=Xy(t,n,r).map(F(_k,t));const a=c.fold((()=>o.map(xj)),(s=>wj(e,n,s).map(F(_j,t,e,n,r,s)).filter(F(Nj,o))));return a.filter(Cj)};const Aj=(t,e)=>t?e.fold(B(Optional.some,mj.start),Optional.none,B(Optional.some,mj.after),Optional.none):e.fold(Optional.none,B(Optional.some,mj.before),Optional.none,B(Optional.some,mj.end));const Dj=(t,e,n,o)=>{const s=_k(t,o);const r=wj(e,n,s);return wj(e,n,s).bind(F(Aj,t)).orThunk((()=>Rj(t,e,n,r,o)))};const Tj=t=>R(t.selection.getSel().modify);const Bj=(t,e,n)=>{const o=t?1:-1;e.setRng(Hm(n.container(),n.offset()+o).toRange());e.getSel().modify("move",t?"forward":"backward","word");return true};const Lj=(t,e)=>{const n=e.selection.getRng();const o=t?Hm.fromRangeEnd(n):Hm.fromRangeStart(n);return!!Tj(e)&&(t&&Mu(o)?Bj(true,e.selection,o):!(t||!Iu(o))&&Bj(false,e.selection,o))};var Pj;(function(t){t[t.Br=0]="Br";t[t.Block=1]="Block";t[t.Wrap=2]="Wrap";t[t.Eol=3]="Eol"})(Pj||(Pj={}));const Mj=(t,e)=>t===-1?ft(e):e;const Ij=(t,e,n)=>t===1?e.next(n):e.prev(n);const Fj=(t,e,n,o)=>La(o.getNode(e===1))?Pj.Br:hy(n,o)===false?Pj.Block:Pj.Wrap;const Uj=(t,e,n,o)=>{const s=jy(n);let r=o;const c=[];while(r){const o=Ij(e,s,r);if(!o)break;if(La(o.getNode(false)))return e===1?{positions:Mj(e,c).concat([o]),breakType:Pj.Br,breakAt:Optional.some(o)}:{positions:Mj(e,c),breakType:Pj.Br,breakAt:Optional.some(o)};if(o.isVisible()){if(t(r,o)){const t=Fj(n,e,r,o);return{positions:Mj(e,c),breakType:t,breakAt:Optional.some(o)}}c.push(o);r=o}else r=o}return{positions:Mj(e,c),breakType:Pj.Eol,breakAt:Optional.none()}};const zj=(t,e,n,o)=>e(n,o).breakAt.map((o=>{const s=e(n,o).positions;return t===-1?s.concat(o):[o].concat(s)})).getOr([]);const $j=(t,e)=>rt(t,((t,n)=>t.fold((()=>Optional.some(n)),(o=>ae(yt(o.getClientRects()),yt(n.getClientRects()),((t,s)=>{const r=Math.abs(e-t.left);const c=Math.abs(e-s.left);return c<=r?n:o})).or(t)))),Optional.none());const jj=(t,e)=>yt(e.getClientRects()).bind((e=>$j(t,e.left)));const Hj=F(Uj,Hm.isAbove,-1);const Wj=F(Uj,Hm.isBelow,1);const Vj=F(zj,-1,Hj);const qj=F(zj,1,Wj);const Kj=(t,e)=>Hj(t,e).breakAt.isNone();const Yj=(t,e)=>Wj(t,e).breakAt.isNone();const Gj=t=>nv(t).map((e=>[e].concat(Wj(t,e).positions))).getOr([]);const Xj=t=>ov(t).map((e=>Hj(t,e).positions.concat(e))).getOr([]);const Qj=(t,e)=>jj(Vj(t,e),e);const Zj=(t,e)=>jj(qj(t,e),e);const Jj=Fa;const tH=(t,e)=>Math.abs(t.left-e);const eH=(t,e)=>Math.abs(t.right-e);const nH=t=>Mt(t,"node");const oH=(t,e)=>Ke(t,((t,n)=>{const o=Math.min(tH(t,e),eH(t,e));const s=Math.min(tH(n,e),eH(n,e));return s===o&&nH(n)&&Jj(n.node)||s<o?n:t}));const sH=t=>{const e=e=>Z(e,(e=>{const n=Vu(e);n.node=t;return n}));if(ha(t))return e(t.getClientRects());if(Na(t)){const n=t.ownerDocument.createRange();n.setStart(t,0);n.setEnd(t,t.data.length);return e(n.getClientRects())}return[]};const rH=t=>ut(t,sH);var cH;(function(t){t[t.Up=-1]="Up";t[t.Down=1]="Down"})(cH||(cH={}));const aH=(t,e,n,o)=>{let s=o;while(s=dy(s,t,Om,e))if(n(s))return};const iH=(t,e,n,o,s,r)=>{let c=0;const a=[];const i=o=>{let r=rH([o]);t===cH.Up&&(r=r.reverse());for(let t=0;t<r.length;t++){const o=r[t];if(!n(o,l)){a.length>0&&e(o,Ge(a))&&c++;o.line=c;if(s(o))return true;a.push(o)}}return false};const l=Ge(r.getClientRects());if(!l)return a;const d=r.getNode();if(d){i(d);aH(t,o,i,d)}return a};const lH=(t,e)=>e.line>t;const dH=(t,e)=>e.line===t;const uH=F(iH,cH.Up,Gu,Xu);const mH=F(iH,cH.Down,Xu,Gu);const fH=t=>Ge(t.getClientRects());const pH=(t,e,n,o)=>{const s=jy(e);let r;let c;let a;let i;const l=[];let d=0;if(t===cH.Down){r=s.next;c=Xu;a=Gu;i=Hm.after(o)}else{r=s.prev;c=Gu;a=Xu;i=Hm.before(o)}const u=fH(i);do{if(!i.isVisible())continue;const t=fH(i);if(a(t,u))continue;l.length>0&&c(t,Ge(l))&&d++;const e=Vu(t);e.position=i;e.line=d;if(n(e))return l;l.push(e)}while(i=r(i));return l};const gH=t=>e=>lH(t,e);const hH=t=>e=>dH(t,e);const bH=(t,e)=>{t.selection.setRng(e);GO(t,t.selection.getRng())};const yH=(t,e,n)=>Optional.some(O$(t,e,n));const vH=(t,e)=>{const n=t.getNode(e===-1);return N(n)&&my(n)?Optional.some(n):Optional.none()};const CH=(t,e)=>{const n=t.dom.createRng();n.selectNode(e);return n};const wH=(t,e,n,o,s,r)=>{const c=e===1;const a=jy(t.getBody());const i=F(Ny,c?a.next:a.prev);const l=c?o:s;if(!n.collapsed){const o=em(n);if(r(o)){if(my(o)){const o=ky(e,t.getBody(),n);return Optional.from(i(o)).map((t=>t.toRange()))}return y$(e,t,o,e===-1,false)}if(A$(t)){const t=n.cloneRange();t.collapse(e===-1);return Optional.from(t)}}const d=ky(e,t.getBody(),n);if(l(d))return C$(t,d.getNode(!c));let u=i(d);const m=Hu(n);if(!u)return m?Optional.some(n):Optional.none();u=_k(c,u);if(l(u))return vH(u,e).fold((()=>y$(e,t,u?.getNode(!c),c,false)),(e=>Optional.some(CH(t,e))));const f=i(u);return f&&l(f)&&Ry(u,f)?vH(u,e).fold((()=>y$(e,t,f.getNode(!c),c,false)),(e=>Optional.some(CH(t,e)))):m?yH(t,u.toRange(),false):Optional.none()};const OH=(t,e,n,o,s,r)=>{const c=ky(e,t.getBody(),n);const a=Ge(c.getClientRects());const i=e===cH.Down;const l=t.getBody();if(!a)return Optional.none();if(A$(t)){const t=i?Hm.fromRangeEnd(n):Hm.fromRangeStart(n);const e=i?Zj:Qj;return e(l,t).orThunk((()=>Optional.from(t))).map((t=>t.toRange()))}const d=i?mH:uH;const u=d(l,gH(1),c);const m=nt(u,hH(1));const f=a.left;const p=oH(m,f);if(p&&r(p.node)){const n=Math.abs(f-p.left);const o=Math.abs(f-p.right);return y$(e,t,p.node,n<o,false)}let g;g=o(c)?c.getNode():s(c)?c.getNode(true):em(n);if(g){const n=pH(e,l,gH(1),g);let o=oH(nt(n,hH(1)),f);if(o)return yH(t,o.position.toRange(),false);o=Ge(nt(n,hH(0)));if(o)return yH(t,o.position.toRange(),false)}return m.length===0?EH(t,i).filter(i?s:o).map((e=>O$(t,e.toRange(),false))):Optional.none()};const EH=(t,e)=>{const n=t.selection.getRng();const o=e?Hm.fromRangeEnd(n):Hm.fromRangeStart(n);const s=uy(o.container(),t.getBody());if(e){const t=Wj(s,o);return vt(t.positions)}{const t=Hj(s,o);return yt(t.positions)}};const xH=(t,e,n)=>EH(t,e).filter(n).exists((e=>{t.selection.setRng(e.toRange());return true}));const kH=(t,e)=>{const n=t.dom.createRng();n.setStart(e.container(),e.offset());n.setEnd(e.container(),e.offset());t.selection.setRng(n)};const SH=(t,e)=>{t?e.setAttribute("data-mce-selected","inline-boundary"):e.removeAttribute("data-mce-selected")};const _H=(t,e,n)=>dj(e,n).map((e=>{kH(t,e);return n}));const NH=(t,e,n)=>{const o=Hm.fromRangeStart(t);if(t.collapsed)return o;{const s=Hm.fromRangeEnd(t);return n?ev(e,s).getOr(s):tv(e,o).getOr(o)}};const RH=(t,e,n)=>{const o=t.getBody();const s=NH(t.selection.getRng(),o,n);const r=F(wk,t);const c=Dj(n,r,o,s);return c.bind((n=>_H(t,e,n)))};const AH=(t,e,n)=>{const o=Z(gc(fo.fromDom(e.getRoot()),'*[data-mce-selected="inline-boundary"]'),(t=>t.dom));const s=nt(o,t);const r=nt(n,t);J(pt(s,r),F(SH,false));J(pt(r,s),F(SH,true))};const DH=(t,e)=>{const n=e.get();if(t.selection.isCollapsed()&&!t.composing&&n){const o=Hm.fromRangeStart(t.selection.getRng());if(Hm.isTextPosition(o)&&!Sk(o)){kH(t,jb(n,o));e.set(null)}}};const TH=(t,e,n,o)=>{if(e.selection.isCollapsed()){const s=nt(o,t);J(s,(o=>{const s=Hm.fromRangeStart(e.selection.getRng());wj(t,e.getBody(),s).bind((t=>_H(e,n,t)))}))}};const BH=(t,e,n)=>!!yh(t)&&RH(t,e,n).isSome();const LH=(t,e,n)=>!!yh(e)&&Lj(t,e);const PH=t=>{const e=zt(null);const n=F(wk,t);t.on("NodeChange",(o=>{if(yh(t)){AH(n,t.dom,o.parents);DH(t,e);TH(n,t,e,o.parents)}}));return e};const MH=F(LH,true);const IH=F(LH,false);const FH=(t,e,n)=>{if(yh(t)){const o=EH(t,e).getOrThunk((()=>{const n=t.selection.getRng();return e?Hm.fromRangeEnd(n):Hm.fromRangeStart(n)}));return wj(F(wk,t),t.getBody(),o).exists((e=>{const o=xj(e);return dj(n,o).exists((e=>{kH(t,e);return true}))}))}return false};const UH=(t,e)=>{const n=document.createRange();n.setStart(t.container(),t.offset());n.setEnd(e.container(),e.offset());return n};const zH=t=>ae(nv(t),ov(t),((e,n)=>{const o=_k(true,e);const s=_k(false,n);return tv(t,o).forall((t=>t.isEqual(s)))})).getOr(true);const $H=(t,e)=>n=>dj(e,n).map((e=>()=>kH(t,e)));const jH=(t,e,n,o)=>{const s=t.getBody();const r=F(wk,t);t.undoManager.ignore((()=>{t.selection.setRng(UH(n,o));Tk(t);wj(r,s,Hm.fromRangeStart(t.selection.getRng())).map(kj).bind($H(t,e)).each(j)}));t.nodeChanged()};const HH=(t,e)=>{const n=gy(e,t);return n||t};const WH=(t,e,n,o)=>{const s=HH(t.getBody(),o.container());const r=F(wk,t);const c=wj(r,s,o);const a=c.bind((t=>n?t.fold(P(Optional.some(kj(t))),Optional.none,P(Optional.some(xj(t))),Optional.none):t.fold(Optional.none,P(Optional.some(xj(t))),Optional.none,P(Optional.some(kj(t))))));return a.map($H(t,e)).getOrThunk((()=>{const a=Qy(n,s,o);const i=a.bind((t=>wj(r,s,t)));return ae(c,i,(()=>xk(r,s,o).bind((e=>zH(e)?Optional.some((()=>{yk(t,n,fo.fromDom(e))})):Optional.none())))).getOrThunk((()=>i.bind((()=>a.map((s=>()=>{n?jH(t,e,o,s):jH(t,e,s,o)}))))))}))};const VH=(t,e,n)=>{if(t.selection.isCollapsed()&&yh(t)){const o=Hm.fromRangeStart(t.selection.getRng());return WH(t,e,n,o)}return Optional.none()};const qH=t=>is(t)>1;const KH=(t,e)=>{const n=fo.fromDom(t.getBody());const o=fo.fromDom(t.selection.getStart());const s=ax(o,n);return it(s,e).fold(P(s),(t=>s.slice(0,t)))};const YH=t=>is(t)===1;const GH=t=>KH(t,(e=>t.schema.isBlock(Mo(e))||qH(e)));const XH=t=>KH(t,(e=>t.schema.isBlock(Mo(e))));const QH=(t,e)=>{const n=F(B_,t);return ut(e,(t=>n(t)?[t.dom]:[]))};const ZH=t=>{const e=XH(t);return QH(t,e)};const JH=(t,e,n,o)=>{const s=QH(e,o);if(s.length===0)yk(e,t,n);else{const t=D_(n.dom,s);e.selection.setRng(t.toRange())}};const tW=(t,e)=>{const n=nt(GH(t),YH);return vt(n).bind((o=>{const s=Hm.fromRangeStart(t.selection.getRng());return Fk(e,s,o.dom)&&!AC(o)?Optional.some((()=>JH(e,t,o,n))):Optional.none()}))};const eW=(t,e)=>{const n=e.parentElement;return La(e)&&!x(n)&&t.dom.isEmpty(n)};const nW=t=>AC(fo.fromDom(t));const oW=(t,e)=>{const n=t.selection.getStart();const o=eW(t,n)||nW(n)?D_(n,e):T_(t.selection.getRng(),e);t.selection.setRng(o.toRange())};const sW=(t,e)=>{const n=pt(e,ZH(t));n.length>0&&oW(t,n)};const rW=t=>Na(t.startContainer);const cW=t=>t.startOffset===0&&rW(t);const aW=(t,e)=>{const n=e.startContainer.parentElement;return!x(n)&&B_(t,fo.fromDom(n))};const iW=t=>{const e=t.startContainer.parentNode;const n=t.endContainer.parentNode;return!x(e)&&!x(n)&&e.isEqualNode(n)};const lW=t=>{const e=t.endContainer;return t.endOffset===(Na(e)?e.length:e.childNodes.length)};const dW=t=>iW(t)&&lW(t);const uW=t=>!t.endContainer.isEqualNode(t.commonAncestorContainer);const mW=t=>dW(t)||uW(t);const fW=t=>{const e=t.selection.getRng();return cW(e)&&aW(t,e)&&mW(e)};const pW=t=>{if(fW(t)){const e=ZH(t);return Optional.some((()=>{Tk(t);sW(t,e)}))}return Optional.none()};const gW=(t,e)=>t.selection.isCollapsed()?tW(t,e):pW(t);const hW=(t,e)=>hc(t,(t=>rv(t.dom)),(t=>e.isBlock(Mo(t))));const bW=t=>hW(fo.fromDom(t.selection.getStart()),t.schema);const yW=t=>{const e=t.selection.getRng();return e.collapsed&&(rW(e)||t.dom.isEmpty(e.startContainer))&&!bW(t)};const vW=t=>{yW(t)&&oW(t,[]);return true};const CW=(t,e,n)=>N(n)?Optional.some((()=>{t._selectionOverrides.hideFakeCaret();yk(t,e,fo.fromDom(n))})):Optional.none();const wW=(t,e)=>{const n=e?ZE:JE;const o=e?1:-1;const s=ky(o,t.getBody(),t.selection.getRng());return n(s)?CW(t,e,s.getNode(!e)):Optional.from(_k(e,s)).filter((t=>n(t)&&Ry(s,t))).bind((n=>CW(t,e,n.getNode(!e))))};const OW=(t,e)=>{const n=t.selection.getNode();return Ha(n)?CW(t,e,n):Optional.none()};const EW=(t,e)=>t.selection.isCollapsed()?wW(t,e):OW(t,e);const xW=t=>jr(t,(t=>Ia(t.dom)||Fa(t.dom))).exists((t=>Ia(t.dom)));const kW=t=>Ae(t??"").getOr(0);const SW=(t,e)=>{const n=t||mu(e)?"margin":"padding";const o=fr(e,"direction")==="rtl"?"-right":"-left";return n+o};const _W=(t,e,n,o,s,r)=>{const c=SW(n,fo.fromDom(r));const a=kW(t.getStyle(r,c));if(e==="outdent"){const e=Math.max(0,a-o);t.setStyle(r,c,e?e+s:"")}else{const e=a+o+s;t.setStyle(r,c,e)}};const NW=(t,e)=>mt(e,(e=>{const n=SW(nh(t),e);const o=gr(e,n).map(kW).getOr(0);const s=t.dom.getContentEditable(e.dom);return s!=="false"&&o>0}));const RW=t=>{const e=BW(t);return!t.mode.isReadOnly()&&(e.length>1||NW(t,e))};const AW=t=>!t.mode.isReadOnly()&&jU(t);const DW=t=>gu(t)||hu(t);const TW=t=>Xo(t).exists(DW);const BW=t=>nt(or(t.selection.getSelectedBlocks()),(t=>!DW(t)&&!TW(t)&&xW(t)));const LW=(t,e)=>{if(t.mode.isReadOnly())return;const{dom:n}=t;const o=oh(t);const s=/[a-z%]+$/i.exec(o)?.[0]??"px";const r=kW(o);const c=nh(t);J(BW(t),(t=>{_W(n,e,c,r,s,t.dom)}));e==="indent"?ZU(t):JU(t)};const PW=t=>LW(t,"indent");const MW=t=>LW(t,"outdent");const IW=t=>{if(t.selection.isCollapsed()&&RW(t)){const e=t.dom;const n=t.selection.getRng();const o=Hm.fromRangeStart(n);const s=e.getParent(n.startContainer,e.isBlock);if(s!==null&&fx(fo.fromDom(s),o,t.schema))return Optional.some((()=>MW(t)))}return Optional.none()};const FW=(t,e)=>{const n=rR(t.selection.getRng());return Qv(n)?Optional.some((()=>yk(t,e,fo.fromDom(t.selection.getNode())))):Optional.none()};const UW=(t,e)=>t.selection.isCollapsed()?Optional.none():FW(t,e);const zW=(t,e,n)=>wt([IW,G$,N$,(t,n)=>VH(t,e,n),d$,FS,Z$,EW,b$,gW,X$,UW],(e=>e(t,n))).filter((e=>t.selection.isEditable()));const $W=(t,e)=>{const n=zW(t,e,false);n.fold((()=>{if(t.selection.isEditable()){Tk(t);Ik(t)}}),j);Iz(t)&&AF(t.dom,t.getBody())};const jW=(t,e)=>{const n=zW(t,e,true);n.fold((()=>{t.selection.isEditable()&&Bk(t)}),j);Iz(t)&&AF(t.dom,t.getBody())};const HW=(t,e)=>{t.addCommand("delete",(()=>{$W(t,e)}));t.addCommand("forwardDelete",(()=>{jW(t,e)}))};const WW=5;const VW=400;const qW=t=>t.touches===void 0||t.touches.length!==1?Optional.none():Optional.some(t.touches[0]);const KW=(t,e)=>{const n=Math.abs(t.clientX-e.x);const o=Math.abs(t.clientY-e.y);return n>WW||o>WW};const YW=t=>{const e=he();const n=zt(false);const o=Te((e=>{t.dispatch("longpress",{...e,type:"longpress"});n.set(true)}),VW);t.on("touchstart",(t=>{qW(t).each((s=>{o.cancel();const r={x:s.clientX,y:s.clientY,target:t.target};o.throttle(t);n.set(false);e.set(r)}))}),true);t.on("touchmove",(s=>{o.cancel();qW(s).each((o=>{e.on((s=>{if(KW(o,s)){e.clear();n.set(false);t.dispatch("longpresscancel")}}))}))}),true);t.on("touchend touchcancel",(s=>{o.cancel();s.type!=="touchcancel"&&e.get().filter((t=>t.target.isEqualNode(s.target))).each((()=>{n.get()?s.preventDefault():t.dispatch("tap",{...s,type:"tap"})}))}),true)};const GW=(t,e)=>Pt(t,e.nodeName);const XW=(t,e)=>!!Na(e)||!!ha(e)&&(!GW(t.getBlockElements(),e)&&!Nv(e)&&!Ni(t,e)&&!li(e)&&!ja(e));const QW=(t,e,n)=>Q(cx(fo.fromDom(n),fo.fromDom(e)),(e=>GW(t,e.dom)));const ZW=(t,e)=>{if(Na(e)){if(e.data.length===0)return true;if(/^\s+$/.test(e.data))return!e.nextSibling||GW(t,e.nextSibling)||li(e.nextSibling)}return false};const JW=t=>t.dom.create(Pg(t),Mg(t));const tV=t=>{const e=t.dom,n=t.selection;const o=t.schema;const s=o.getBlockElements();const r=n.getStart();const c=t.getBody();let a;let i;let l=null;const d=Pg(t);if(!r||!ha(r))return;const u=c.nodeName.toLowerCase();if(!o.isValidChild(u,d.toLowerCase())||QW(s,c,r))return;if(c.firstChild===c.lastChild&&La(c.firstChild)){a=JW(t);a.appendChild(Ou().dom);c.replaceChild(a,c.firstChild);t.selection.setCursorLocation(a,0);t.nodeChanged();return}let m=c.firstChild;while(m){ha(m)&&Ei(o,m);if(XW(o,m)){if(ZW(s,m)){i=m;m=m.nextSibling;e.remove(i);continue}if(!a){!l&&t.hasFocus()&&(l=XS(t.selection.getRng(),(()=>document.createElement("span"))));if(!m.parentNode){m=null;break}a=JW(t);c.insertBefore(a,m)}i=m;m=m.nextSibling;a.appendChild(i)}else{a=null;m=m.nextSibling}}if(l){t.selection.setRng(QS(l));t.nodeChanged()}};const eV=(t,e,n)=>{const o=fo.fromDom(JW(t));const s=Ou();Ls(o,s);n(e,o);const r=document.createRange();r.setStartBefore(s.dom);r.setEndBefore(s.dom);return r};const nV=t=>{t.on("NodeChange",(()=>tV(t)))};const oV=t=>e=>(" "+e.attr("class")+" ").indexOf(t)!==-1;const sV=(t,e,n)=>function(o){const s=arguments,r=s[s.length-2];const c=r>0?e.charAt(r-1):"";if(c==='"')return o;if(c===">"){const t=e.lastIndexOf("<",r);if(t!==-1){const n=e.substring(t,r);if(n.indexOf('contenteditable="false"')!==-1)return o}}return'<span class="'+n+'" data-mce-content="'+t.dom.encode(s[0])+'">'+t.dom.encode(typeof s[1]==="string"?s[1]:s[0])+"</span>"};const rV=(t,e,n)=>{let o=e.length,s=n.content;if(n.format!=="raw"){while(o--)s=s.replace(e[o],sV(t,s,ab(t)));n.content=s}};const cV=(t,e)=>mt(t,(t=>{const n=e.match(t);return n!==null&&n[0].length===e.length}));const aV=t=>{const e="contenteditable";const n=" "+co.trim(ib(t))+" ";const o=" "+co.trim(ab(t))+" ";const s=oV(n);const r=oV(o);const c=lb(t);c.length>0&&t.on("BeforeSetContent",(e=>{rV(t,c,e)}));t.parser.addAttributeFilter("class",(t=>{let n=t.length;while(n--){const o=t[n];s(o)?o.attr(e,"true"):r(o)&&o.attr(e,"false")}}));t.serializer.addAttributeFilter(e,(t=>{let n=t.length;while(n--){const o=t[n];if(!s(o)&&!r(o))continue;const a=o.attr("data-mce-content");if(c.length>0&&a)if(cV(c,a)){o.name="#text";o.type=3;o.raw=true;o.value=a}else o.remove();else o.attr(e,null)}}))};const iV=t=>Kr(fo.fromDom(t.getBody()),"*[data-mce-caret]").map((t=>t.dom)).getOrNull();const lV=(t,e)=>{if(e.hasAttribute("data-mce-caret")){ju(e);t.selection.setRng(t.selection.getRng());t.selection.scrollIntoView(e)}};const dV=(t,e)=>{const n=iV(t);if(n)if(e.type!=="compositionstart"){if(Lu(n)){lV(t,n);t.undoManager.add()}}else{e.preventDefault();e.stopPropagation();lV(t,n)}};const uV=t=>{t.on("keyup compositionstart",F(dV,t))};const mV=Fa;const fV=(t,e,n)=>wH(e,t,n,nx,ox,mV);const pV=(t,e,n)=>{const o=t=>nx(t)||tx(t);const s=t=>ox(t)||ex(t);return OH(e,t,n,o,s,mV)};const gV=t=>{const e=t.dom.create(Pg(t));e.innerHTML='<br data-mce-bogus="1">';return e};const hV=(t,e,n)=>{const o=jy(t.getBody());const s=F(Ny,e===1?o.next:o.prev);if(n.collapsed){const o=t.dom.getParent(n.startContainer,"PRE");if(!o)return;const r=s(Hm.fromRangeStart(n));if(!r){const n=fo.fromDom(gV(t));e===1?Ts(fo.fromDom(o),n):Ds(fo.fromDom(o),n);t.selection.select(n.dom,true);t.selection.collapse()}}};const bV=(t,e)=>{const n=e?1:-1;const o=t.selection.getRng();return fV(n,t,o).orThunk((()=>{hV(t,n,o);return Optional.none()}))};const yV=(t,e)=>{const n=e?1:-1;const o=t.selection.getRng();return pV(n,t,o).orThunk((()=>{hV(t,n,o);return Optional.none()}))};const vV=(t,e)=>{const n=e?t.getEnd(true):t.getStart(true);return Ok(n)?!e:e};const CV=(t,e)=>bV(t,vV(t.selection,e)).exists((e=>{bH(t,e);return true}));const wV=(t,e)=>yV(t,e).exists((e=>{bH(t,e);return true}));const OV=(t,e)=>{const n=e?ox:nx;return xH(t,e,n)};const EV=(t,e)=>R$(t,!e).map((n=>{const o=n.toRange();const s=t.selection.getRng();e?o.setStart(s.startContainer,s.startOffset):o.setEnd(s.endContainer,s.endOffset);return o})).exists((e=>{bH(t,e);return true}));const xV=(t,e)=>{const n=t=>To(t,e);const o=t=>Ia(t.dom);const s=fo.fromDom(t.container());const r=jr(s,o,n);return r.filter((t=>!n(t)))};const kV=(t,e,n)=>{const o=n?Zj:Qj;return o(t.getBody(),e).map((t=>t.toRange()))};const SV=(t,e)=>{const n=Hm.fromRangeStart(t.selection.getRng());const o=Hm.fromRangeEnd(t.selection.getRng());const s=fo.fromDom(t.getBody());const r=le(ae(xV(n,s),xV(o,s),((t,e)=>To(t,e)?Optional.some(t):Optional.none())));return r.fold(H,(s=>!!(e&&Yj(s.dom,o)||!e&&Kj(s.dom,n))&&kV(t,e?o:n,e).exists((e=>{bH(t,e);return true}))))};const _V=(t,e)=>SV(t,e);const NV=t=>X(["figcaption"],Mo(t));const RV=(t,e,n)=>{const o=F(To,e);return jr(fo.fromDom(t.container()),(t=>n.isBlock(Mo(t))),o).filter(NV)};const AV=(t,e,n)=>e?Yj(t.dom,n):Kj(t.dom,n);const DV=(t,e)=>{const n=fo.fromDom(t.getBody());const o=Hm.fromRangeStart(t.selection.getRng());return RV(o,n,t.schema).exists((()=>{if(AV(n,e,o)){const o=e?Ls:Bs;const s=eV(t,n,o);t.selection.setRng(s);return true}return false}))};const TV=(t,e)=>!!t.selection.isCollapsed()&&DV(t,e);const BV=(t,e,n)=>{const o=t.selection.getRng();const s=Hm.fromRangeStart(o);const r=t.getBody();if(r.firstChild===e&&Kj(n,s)){t.execCommand("InsertNewBlockBefore");return true}return false};const LV=(t,e)=>{const n=t.selection.getRng();const o=Hm.fromRangeStart(n);const s=t.getBody();if(s.lastChild===e&&Yj(e,o)){t.execCommand("InsertNewBlockAfter");return true}return false};const PV=(t,e)=>e?Optional.from(t.dom.getParent(t.selection.getNode(),"details")).map((e=>LV(t,e))).getOr(false):Optional.from(t.dom.getParent(t.selection.getNode(),"summary")).bind((e=>Optional.from(t.dom.getParent(e,"details")).map((n=>BV(t,n,e))))).getOr(false);const MV=(t,e)=>PV(t,e);const IV={shiftKey:false,altKey:false,ctrlKey:false,metaKey:false,keyCode:0};const FV=t=>Z(t,(t=>({...IV,...t})));const UV=t=>Z(t,(t=>({...IV,...t})));const zV=(t,e)=>e.keyCode===t.keyCode&&e.shiftKey===t.shiftKey&&e.altKey===t.altKey&&e.ctrlKey===t.ctrlKey&&e.metaKey===t.metaKey;const $V=(t,e)=>ut(FV(t),(t=>zV(t,e)?[t]:[]));const jV=(t,e)=>ut(UV(t),(t=>zV(t,e)?[t]:[]));const HV=(t,...e)=>()=>t.apply(null,e);const WV=(t,e)=>at($V(t,e),(t=>t.action()));const VV=(t,e)=>wt(jV(t,e),(t=>t.action()));const qV=(t,e)=>{const n=e?1:-1;const o=t.selection.getRng();return wH(t,n,o,ZE,JE,Ha).exists((e=>{bH(t,e);return true}))};const KV=(t,e)=>{const n=e?1:-1;const o=t.selection.getRng();return OH(t,n,o,ZE,JE,Ha).exists((e=>{bH(t,e);return true}))};const YV=(t,e)=>{const n=e?JE:ZE;return xH(t,e,n)};const GV=(t,e)=>XV(t,e,W);const XV=(t,e,n)=>ut(ss(t),(t=>No(t,e)?n(t)?[t]:[]:XV(t,e,n)));const QV=(t,e,n=H)=>{if(n(e))return Optional.none();if(X(t,Mo(e)))return Optional.some(e);const o=t=>No(t,"table")||n(t);return qr(e,t.join(","),o)};const ZV=(t,e)=>QV(["td","th"],t,e);const JV=t=>GV(t,"th,td");const tq=(t,e)=>Yr(t,"table",e);const eq=Ut.generate([{none:["current"]},{first:["current"]},{middle:["current","target"]},{last:["current"]}]);const nq=t=>eq.none(t);const oq={...eq,none:nq};const sq=(t,e,n,o,s=W)=>{const r=o===1;if(!r&&n<=0)return oq.first(t[0]);if(r&&n>=t.length-1)return oq.last(t[t.length-1]);{const r=n+o;const c=t[r];return s(c)?oq.middle(e,c):sq(t,e,r,o,s)}};const rq=(t,e)=>tq(t,e).bind((e=>{const n=JV(e);const o=it(n,(e=>To(t,e)));return o.map((t=>({index:t,all:n})))}));const cq=(t,e,n)=>{const o=rq(t,n);return o.fold((()=>oq.none(t)),(n=>sq(n.all,t,n.index,1,e)))};const aq=(t,e,n)=>{const o=rq(t,n);return o.fold((()=>oq.none()),(n=>sq(n.all,t,n.index,-1,e)))};var iq=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"];var lq=()=>{const t=t=>fo.fromDom(t.dom.cloneNode(false));const e=t=>Ko(t).dom;const n=t=>!!$o(t)&&(Mo(t)==="body"||X(iq,Mo(t)));const o=t=>!!$o(t)&&X(["br","img","hr","input"],Mo(t));const s=t=>$o(t)&&js(t,"contenteditable")==="false";const r=(t,e)=>t.dom.compareDocumentPosition(e.dom);const c=(t,e)=>{const n=Ks(t);$s(e,n)};const a=t=>{const e=Mo(t);return X(["script","noscript","iframe","noframes","noembed","title","style","textarea","xmp"],e)};const i=t=>$o(t)?Hs(t,"lang"):Optional.none();return{up:P({selector:qr,closest:Yr,predicate:$r,all:Zo}),down:P({selector:gc,predicate:fc}),styles:P({get:fr,getRaw:gr,set:ur,remove:br}),attrs:P({get:js,set:zs,remove:Vs,copyTo:c}),insert:P({before:Ds,after:Ts,afterAll:Is,append:Ls,appendAll:Fs,prepend:Bs,wrap:Ps}),remove:P({unwrap:Xs,remove:Gs}),create:P({nu:fo.fromTag,clone:t,text:fo.fromText}),query:P({comparePosition:r,prevSibling:ts,nextSibling:es}),property:P({children:ss,name:Mo,parent:Xo,document:e,isText:jo,isComment:Uo,isElement:$o,isSpecial:a,getLanguage:i,getText:Lr,setText:Mr,isBoundary:n,isEmptyTag:o,isNonEditable:s}),eq:To,is:Lo}};const dq=(t,e)=>({element:t,offset:e});const uq=(t,e)=>{if(t.property().isText(e))return dq(e,t.property().getText(e).length);{const n=t.property().children(e);return n.length>0?uq(t,n[n.length-1]):dq(e,n.length)}};const mq=(t,e,n)=>{const o=t.property().children(e);return o.length>0&&n<o.length?mq(t,o[n],0):o.length>0&&t.property().isElement(e)&&o.length===n?uq(t,o[o.length-1]):dq(e,n)};const fq=mq;const pq=lq();const gq=(t,e)=>fq(pq,t,e);const hq=Qt("image");const bq=t=>{const e=t;return Optional.from(e[hq])};const yq=(t,e)=>{const n=t;n[hq]=e};const vq=Qt("event");const Cq=t=>{const e=t;return Optional.from(e[vq])};const wq=t=>e=>{const n=e;n[vq]=t};const Oq=(t,e)=>wq(e)(t);const Eq=wq(0);const xq=wq(2);const kq=wq(1);const Sq=t=>e=>{const n=e;return Optional.from(n[vq]).exists((e=>e===t))};const _q=Sq(0);const Nq=()=>Object.freeze({length:0,item:t=>null});const Rq=Qt("mode");const Aq=t=>{const e=t;return Optional.from(e[Rq])};const Dq=t=>e=>{const n=e;n[Rq]=t};const Tq=(t,e)=>Dq(e)(t);const Bq=Dq(0);const Lq=Dq(2);const Pq=Dq(1);const Mq=t=>e=>{const n=e;return Optional.from(n[Rq]).exists((e=>e===t))};const Iq=Mq(0);const Fq=Mq(1);const Uq=(t,e)=>({...e,get length(){return e.length},add:(n,o)=>{if(Iq(t)){if(!C(n))return e.add(n);if(!S(o))return e.add(n,o)}return null},remove:n=>{Iq(t)&&e.remove(n)},clear:()=>{Iq(t)&&e.clear()}});const zq=["none","copy","link","move"];const $q=["none","copy","copyLink","copyMove","link","linkMove","move","all","uninitialized"];const jq=()=>{const t=new window.DataTransfer;let e="move";let n="all";const o={get dropEffect(){return e},set dropEffect(t){X(zq,t)&&(e=t)},get effectAllowed(){return n},set effectAllowed(t){_q(o)&&X($q,t)&&(n=t)},get items(){return Uq(o,t.items)},get files(){return Fq(o)?Nq():t.files},get types(){return t.types},setDragImage:(e,n,s)=>{if(Iq(o)){yq(o,{image:e,x:n,y:s});t.setDragImage(e,n,s)}},getData:e=>Fq(o)?"":t.getData(e),setData:(e,n)=>{Iq(o)&&t.setData(e,n)},clearData:e=>{Iq(o)&&t.clearData(e)}};Bq(o);return o};const Hq=t=>{const e=jq();const n=Aq(t);Lq(t);Eq(e);e.dropEffect=t.dropEffect;e.effectAllowed=t.effectAllowed;bq(t).each((t=>e.setDragImage(t.image,t.x,t.y)));J(t.types,(n=>{n!=="Files"&&e.setData(n,t.getData(n))}));J(t.files,(t=>e.items.add(t)));Cq(t).each((t=>{Oq(e,t)}));n.each((n=>{Tq(t,n);Tq(e,n)}));return e};const Wq=t=>{const e=t.getData("text/html");return e===""?Optional.none():Optional.some(e)};const Vq=(t,e)=>t.setData("text/html",e);const qq=(t,e)=>({left:t.left-e,top:t.top-e,right:t.right+e*2,bottom:t.bottom+e*2,width:t.width+e,height:t.height+e});const Kq=(t,e)=>ut(e,(e=>{const n=qq(Vu(e.getBoundingClientRect()),-1);return[{x:n.left,y:t(n),cell:e},{x:n.right,y:t(n),cell:e}]}));const Yq=(t,e,n)=>rt(t,((t,o)=>t.fold((()=>Optional.some(o)),(t=>{const s=Math.sqrt(Math.abs(t.x-e)+Math.abs(t.y-n));const r=Math.sqrt(Math.abs(o.x-e)+Math.abs(o.y-n));return Optional.some(r<s?o:t)}))),Optional.none());const Gq=(t,e,n,o,s)=>{const r=gc(fo.fromDom(n),"td,th,caption").map((t=>t.dom));const c=nt(Kq(t,r),(t=>e(t,s)));return Yq(c,o,s).map((t=>t.cell))};const Xq=t=>t.bottom;const Qq=t=>t.top;const Zq=(t,e)=>t.y<e;const Jq=(t,e)=>t.y>e;const tK=F(Gq,Xq,Zq);const eK=F(Gq,Qq,Jq);const nK=(t,e)=>yt(e.getClientRects()).bind((e=>tK(t,e.left,e.top))).bind((t=>jj(Xj(t),e)));const oK=(t,e)=>vt(e.getClientRects()).bind((e=>eK(t,e.left,e.top))).bind((t=>jj(Gj(t),e)));const sK=(t,e,n)=>n.breakAt.exists((n=>t(e,n).breakAt.isSome()));const rK=t=>t.breakType===Pj.Wrap&&t.positions.length===0;const cK=t=>t.breakType===Pj.Br&&t.positions.length===1;const aK=(t,e,n)=>{const o=t(e,n);return rK(o)||!La(n.getNode())&&cK(o)?!sK(t,e,o):o.breakAt.isNone()};const iK=F(aK,Hj);const lK=F(aK,Wj);const dK=(t,e,n)=>{const o=Hm.fromRangeStart(e);return Jy(!t,n).exists((t=>t.isEqual(o)))};const uK=(t,e,n,o)=>{const s=t.selection.getRng();const r=e?1:-1;if(Qb()&&dK(e,s,n)){y$(r,t,n,!e,false).each((e=>{bH(t,e)}));return true}return false};const mK=(t,e,n)=>nK(e,n).orThunk((()=>yt(n.getClientRects()).bind((n=>$j(Vj(t,Hm.before(e)),n.left))))).getOr(Hm.before(e));const fK=(t,e,n)=>oK(e,n).orThunk((()=>yt(n.getClientRects()).bind((n=>$j(qj(t,Hm.after(e)),n.left))))).getOr(Hm.after(e));const pK=(t,e)=>{const n=e.getNode(t);return ka(n)?Optional.some(n):Optional.none()};const gK=(t,e,n)=>{e.undoManager.transact((()=>{const o=t?Ts:Ds;const s=eV(e,fo.fromDom(n),o);bH(e,s)}))};const hK=(t,e,n)=>{const o=pK(!!e,n);const s=e===false;o.fold((()=>bH(t,n.toRange())),(o=>Jy(s,t.getBody()).filter((t=>t.isEqual(n))).fold((()=>bH(t,n.toRange())),(n=>gK(e,t,o)))))};const bK=(t,e,n,o)=>{const s=t.selection.getRng();const r=Hm.fromRangeStart(s);const c=t.getBody();if(!e&&iK(o,r)){const o=mK(c,n,r);hK(t,e,o);return true}if(e&&lK(o,r)){const o=fK(c,n,r);hK(t,e,o);return true}return false};const yK=(t,e,n)=>Optional.from(t.dom.getParent(t.selection.getNode(),"td,th")).bind((o=>Optional.from(t.dom.getParent(o,"table")).map((s=>n(t,e,s,o))))).getOr(false);const vK=(t,e)=>yK(t,e,uK);const CK=(t,e)=>yK(t,e,bK);const wK=t=>{const e=Kc.exact(t,0,t,0);return na(e)};const OK=t=>_K(t)||Jo(t).some((t=>zo(t)&&_K(t)));const EK=(t,e,n)=>n.fold(Optional.none,Optional.none,((t,e)=>Rc(e).map((t=>wK(t)))),(n=>{if(t.mode.isReadOnly()||!xK(n)||!OK(n))return Optional.none();t.execCommand("mceTableInsertRowAfter");return kK(t,e,n)}));const xK=t=>jr(t,Vo("table")).exists(ic);const kK=(t,e,n)=>EK(t,e,cq(n,_K));const SK=(t,e,n)=>EK(t,e,aq(n,_K));const _K=t=>ic(t)||yc(t,NK);const NK=t=>zo(t)&&ic(t);const RK=(t,e)=>{const n=["table","li","dl"];const o=fo.fromDom(t.getBody());const s=t=>{const e=Mo(t);return To(t,o)||X(n,e)};const r=t.selection.getRng();const c=fo.fromDom(e?r.endContainer:r.startContainer);return ZV(c,s).map((n=>{tq(n,s).each((e=>{t.model.table.clearSelectedCells(e.dom)}));t.selection.collapse(!e);const o=e?kK:SK;const r=o(t,s,n);r.each((e=>{t.selection.setRng(e)}));return true})).getOr(false)};const AK=(t,e,n)=>{const o=Gn.os.isMacOS()||Gn.os.isiOS();const s=Gn.browser.isFirefox();WV([{keyCode:Jw.RIGHT,action:HV(CV,t,true)},{keyCode:Jw.LEFT,action:HV(CV,t,false)},{keyCode:Jw.UP,action:HV(wV,t,false)},{keyCode:Jw.DOWN,action:HV(wV,t,true)},...o?[{keyCode:Jw.UP,action:HV(EV,t,false),metaKey:true,shiftKey:true},{keyCode:Jw.DOWN,action:HV(EV,t,true),metaKey:true,shiftKey:true}]:[],{keyCode:Jw.RIGHT,action:HV(vK,t,true)},{keyCode:Jw.LEFT,action:HV(vK,t,false)},{keyCode:Jw.UP,action:HV(CK,t,false)},{keyCode:Jw.DOWN,action:HV(CK,t,true)},{keyCode:Jw.UP,action:HV(CK,t,false)},{keyCode:Jw.UP,action:HV(MV,t,false)},{keyCode:Jw.DOWN,action:HV(MV,t,true)},{keyCode:Jw.RIGHT,action:HV(qV,t,true)},{keyCode:Jw.LEFT,action:HV(qV,t,false)},{keyCode:Jw.UP,action:HV(KV,t,false)},{keyCode:Jw.DOWN,action:HV(KV,t,true)},{keyCode:Jw.RIGHT,action:HV(BH,t,e,true)},{keyCode:Jw.LEFT,action:HV(BH,t,e,false)},{keyCode:Jw.RIGHT,ctrlKey:!o,altKey:o,action:HV(MH,t,e)},{keyCode:Jw.LEFT,ctrlKey:!o,altKey:o,action:HV(IH,t,e)},{keyCode:Jw.UP,action:HV(TV,t,false)},{keyCode:Jw.DOWN,action:HV(TV,t,true)},...s?[{keyCode:Jw.UP,action:HV(_V,t,false)},{keyCode:Jw.DOWN,action:HV(_V,t,true)}]:[]],n).each((t=>{n.preventDefault()}))};const DK=(t,e)=>{t.on("keydown",(n=>{n.isDefaultPrevented()||AK(t,e,n)}))};const TK=(t,e)=>({container:t,offset:e});const BK=wd.DOM;const LK=t=>e=>t===e?-1:0;const PK=t=>e=>t.isBlock(e)||X(["BR","IMG","HR","INPUT"],e.nodeName)||t.getContentEditable(e)==="false";const MK=(t,e,n)=>{if(Na(t)&&e>=0)return Optional.some(TK(t,e));{const o=su(BK);return Optional.from(o.backwards(t,e,LK(t),n)).map((t=>TK(t.container,t.container.data.length)))}};const IK=(t,e,n)=>{if(Na(t)&&e>=t.length)return Optional.some(TK(t,e));{const o=su(BK);return Optional.from(o.forwards(t,e,LK(t),n)).map((t=>TK(t.container,0)))}};const FK=(t,e,n)=>{if(!Na(t))return Optional.none();const o=t.data;if(e>=0&&e<=o.length)return Optional.some(TK(t,e));{const o=su(BK);return Optional.from(o.backwards(t,e,LK(t),n)).bind((t=>{const o=t.container.data;return FK(t.container,e+o.length,n)}))}};const UK=(t,e,n)=>{if(!Na(t))return Optional.none();const o=t.data;if(e<=o.length)return Optional.some(TK(t,e));{const s=su(BK);return Optional.from(s.forwards(t,e,LK(t),n)).bind((t=>UK(t.container,e-o.length,n)))}};const zK=(t,e,n,o,s)=>{const r=su(t,PK(t));return Optional.from(r.backwards(e,n,o,s))};const $K=t=>t.collapsed&&Na(t.startContainer);const jK=t=>_u(t.toString().replace(/\u00A0/g," "));const HK=t=>t!==""&&"  \ufeff\f\n\r\t\v".indexOf(t)!==-1;const WK=(t,e)=>t.substring(e.length);const VK=(t,e,n,o=false)=>{let s;const r=n.charAt(0);for(s=e-1;s>=0;s--){const c=t.charAt(s);if(!o&&HK(c))return Optional.none();if(r===c&&Ce(t,n,s,e))break}return Optional.some(s)};const qK=(t,e,n,o=false)=>{if(!$K(e))return Optional.none();const s={text:"",offset:0};const r=(t,e,r)=>{s.text=r+s.text;s.offset+=e;return VK(s.text,s.offset,n,o).getOr(e)};const c=t.getParent(e.startContainer,t.isBlock)||t.getRoot();return zK(t,e.startContainer,e.startOffset,r,c).bind((t=>{const o=e.cloneRange();o.setStart(t.container,t.offset);o.setEnd(e.endContainer,e.endOffset);if(o.collapsed)return Optional.none();const s=jK(o);const r=s.lastIndexOf(n);return r!==0?Optional.none():Optional.some({text:WK(s,n),range:o,trigger:n})}))};const KK=t=>t.nodeType===_o;const YK=t=>t.nodeType===So;const GK=t=>{if(KK(t))return TK(t,t.data.length);{const e=t.childNodes;return e.length>0?GK(e[e.length-1]):TK(t,e.length)}};const XK=(t,e)=>{const n=t.childNodes;return n.length>0&&e<n.length?XK(n[e],0):n.length>0&&YK(t)&&n.length===e?GK(n[n.length-1]):TK(t,e)};const QK=(t,e)=>{const n=t.getParent(e.container,t.isBlock)??t.getRoot();return zK(t,e.container,e.offset,((t,e)=>e===0?-1:e),n).filter((t=>{const e=t.container.data.charAt(t.offset-1);return!HK(e)})).isSome()};const ZK=t=>e=>{const n=XK(e.startContainer,e.startOffset);return!QK(t,n)};const JK=(t,e,n)=>wt(n.triggers,(n=>qK(t,e,n)));const tY=(t,e)=>{const n=e();const o=t.selection.getRng();return JK(t.dom,o,n).bind((n=>eY(t,e,n)))};const eY=(t,e,n,o={})=>{const s=e();const r=t.selection.getRng();const c=r.startContainer.nodeValue??"";const a=nt(s.lookupByTrigger(n.trigger),(e=>n.text.length>=e.minChars&&e.matches.getOrThunk((()=>ZK(t.dom)))(n.range,c,n.text)));if(a.length===0)return Optional.none();const i=Promise.all(Z(a,(t=>{const e=t.fetch(n.text,t.maxResults,o);return e.then((e=>({matchText:n.text,items:e,columns:t.columns,onAction:t.onAction,highlightOn:t.highlightOn})))})));return Optional.some({lookupData:i,context:n})};const nY=xp("type");const oY=kp("fetch");const sY=kp("onAction");Rp("name");Rp("text");Rp("role");Rp("icon");Rp("url");Rp("tooltip");Rp("chevronTooltip");Rp("label");Rp("shortcut");const rY=t=>Dp("columns",t);const cY=pp([nY,xp("trigger"),Bp("minChars",1),rY(1),Bp("maxResults",10),Ap("matches"),oY,sY,Lp("highlightOn",[],Gf)]);const aY=t=>vp("Autocompleter",cY,t);const iY=()=>{const t={};const e={};const n={};const o={};const s={};const r={};const c={};const a={};const i={};const l=(t,e)=>(n,o)=>{t[n.toLowerCase()]={...o,type:e}};const d=(t,e)=>(n,o)=>{t[n.toLowerCase()]={type:e,...o}};const u=(t,e)=>o[t.toLowerCase()]=e;const m=(t,e)=>c[t.toLowerCase()]=e;return{addButton:l(t,"button"),addGroupToolbarButton:l(t,"grouptoolbarbutton"),addToggleButton:l(t,"togglebutton"),addMenuButton:l(t,"menubutton"),addSplitButton:l(t,"splitbutton"),addMenuItem:l(e,"menuitem"),addNestedMenuItem:l(e,"nestedmenuitem"),addToggleMenuItem:l(e,"togglemenuitem"),addAutocompleter:l(n,"autocompleter"),addContextMenu:l(s,"contextmenu"),addContextToolbar:l(r,"contexttoolbar"),addContextForm:d(r,"contextform"),addSidebar:l(a,"sidebar"),addView:l(i,"views"),addIcon:u,addContext:m,getAll:()=>({buttons:t,menuItems:e,icons:o,popups:n,contextMenus:s,contextToolbars:r,sidebars:a,views:i,contexts:c})}};const lY=t=>{const e=t.ui.registry.getAll().popups;const n=St(e,(t=>aY(t).fold((t=>{throw new Error(Cp(t))}),M)));const o=Ue(Tt(n,(t=>t.trigger)));const s=Bt(n);const r=t=>nt(s,(e=>e.trigger===t));return{dataset:n,triggers:o,lookupByTrigger:r}};const dY=(t,e)=>{const n=Te(e.load,50);t.on("input",(e=>{(e.inputType!=="insertCompositionText"||t.composing)&&n.throttle()}));t.on("keydown",(t=>{const o=t.which;if(o===8)n.throttle();else if(o===27){n.cancel();e.cancelIfNecessary()}else o!==38&&o!==40||n.cancel()}),true);t.on("remove",n.cancel)};const uY=t=>{const e=he();const n=zt(false);const o=e.isSet;const s=()=>{if(o()){mg(t);n.set(false);e.clear()}};const r=t=>{o()||e.set({trigger:t.trigger,matchLength:t.text.length})};const c=Be((()=>lY(t)));const a=n=>e.get().map((e=>qK(t.dom,t.selection.getRng(),e.trigger,true).bind((e=>eY(t,c,e,n))))).getOrThunk((()=>tY(t,c)));const i=o=>{a(o).fold(s,(o=>{r(o.context);o.lookupData.then((s=>{e.get().map((r=>{const c=o.context;if(r.trigger===c.trigger){e.set({...r,matchLength:c.text.length});if(n.get()){ug(t,{range:c.range});dg(t,{lookupData:s})}else{n.set(true);ug(t,{range:c.range});lg(t,{lookupData:s})}}}))}))}))};const l=(t,e)=>{const n=t.compareBoundaryPoints(window.Range.START_TO_START,e);const o=t.compareBoundaryPoints(window.Range.END_TO_END,e);return n>=0&&o<=0};const d=()=>e.get().bind((({trigger:e})=>{const o=t.selection.getRng();return qK(t.dom,o,e,n.get()).filter((({range:t})=>l(o,t))).map((({range:t})=>t))}));t.addCommand("mceAutocompleterReload",((t,e)=>{const n=w(e)?e.fetchOptions:{};i(n)}));t.addCommand("mceAutocompleterClose",s);t.addCommand("mceAutocompleterRefreshActiveRange",(()=>{d().each((e=>{ug(t,{range:e})}))}));t.editorCommands.addQueryStateHandler("mceAutoCompleterInRange",(()=>d().isSome()));dY(t,{cancelIfNecessary:s,load:i})};const mY=In().browser;const fY=mY.isSafari();const pY=t=>Eu(fo.fromDom(t));const gY=(t,e)=>t.startOffset===0&&t.endOffset===e.textContent?.length;const hY=(t,e)=>Optional.from(t.getParent(e.container(),"details"));const bY=(t,e)=>hY(t,e).isSome();const yY=(t,e)=>{const n=Optional.from(t.getParent(e.startContainer,"details"));const o=Optional.from(t.getParent(e.endContainer,"details"));if(n.isSome()||o.isSome()){const e=n.bind((e=>Optional.from(t.select("summary",e)[0])));return Optional.some({startSummary:e,startDetails:n,endDetails:o})}return Optional.none()};const vY=(t,e)=>nv(e).exists((e=>e.isEqual(t)));const CY=(t,e)=>ov(e).exists((n=>La(n.getNode())&&ev(e,n).exists((e=>e.isEqual(t)))||n.isEqual(t)));const wY=(t,e)=>e.startSummary.exists((e=>vY(t,e)));const OY=(t,e)=>e.startSummary.exists((e=>CY(t,e)));const EY=(t,e)=>e.startDetails.exists((n=>ev(n,t).forall((n=>e.startSummary.exists((e=>!e.contains(t.container())&&e.contains(n.container())))))));const xY=(t,e,n)=>n.startDetails.exists((n=>tv(t,e).forall((t=>!n.contains(t.container())))));const kY=(t,e)=>{const n=e.getNode();S(n)||t.selection.setCursorLocation(n,e.offset())};const SY=(t,e,n)=>{const o=t.dom.getParent(e.container(),"details");if(o&&!o.open){const e=t.dom.select("summary",o)[0];if(e){const o=n?nv(e):ov(e);o.each((e=>kY(t,e)))}}else kY(t,e)};const _Y=(t,e)=>{const n=e=>e.contains(t.startContainer);const o=e=>e.contains(t.endContainer);const s=e.startSummary.exists(n);const r=e.startSummary.exists(o);const c=e.startDetails.forall((t=>e.endDetails.forall((e=>t!==e))));const a=(s||r)&&!(s&&r);return a||c};const NY=(t,e,n)=>{const{dom:o,selection:s}=t;const r=t.getBody();if(n==="character"){const n=Hm.fromRangeStart(s.getRng());const c=o.getParent(n.container(),o.isBlock);const a=hY(o,n);const i=c&&o.isEmpty(c);const l=x(c?.previousSibling);const d=x(c?.nextSibling);if(i){const t=e?d:l;if(t){const t=Qy(!e,r,n).exists((t=>bY(o,t)&&!re(a,hY(o,t))));if(t)return true}}return Qy(e,r,n).fold(H,(n=>{const s=hY(o,n);if(bY(o,n)&&!re(a,s)){e||SY(t,n,false);if(c&&i){if(e&&l)return true;if(!e&&d)return true;SY(t,n,e);t.dom.remove(c)}return true}return false}))}return false};const RY=(t,e,n,o)=>{const s=t.selection;const r=s.getRng();const c=Hm.fromRangeStart(r);const a=t.getBody();return o==="selection"?_Y(r,e):n?OY(c,e)||xY(a,c,e):wY(c,e)||EY(c,e)};const AY=(t,e,n)=>yY(t.dom,t.selection.getRng()).fold((()=>NY(t,e,n)),(o=>RY(t,o,e,n)||NY(t,e,n)));const DY=(t,e,n)=>{const o=t.selection;const s=o.getNode();const r=o.getRng();const c=Hm.fromRangeStart(r);if(qa(s)){n==="selection"&&gY(r,s)||Fk(e,c,s)?pY(s):t.undoManager.transact((()=>{const r=o.getSel();let{anchorNode:c,anchorOffset:a,focusNode:i,focusOffset:l}=r??{};const d=()=>{N(c)&&N(a)&&N(i)&&N(l)&&r?.setBaseAndExtent(c,a,i,l)};const u=()=>{c=r?.anchorNode;a=r?.anchorOffset;i=r?.focusNode;l=r?.focusOffset};const m=(t,e)=>{J(t.childNodes,(t=>{tC(t)&&e.appendChild(t)}))};const f=t.dom.create("span",{"data-mce-bogus":"1"});m(s,f);s.appendChild(f);d();n!=="word"&&n!=="line"||r?.modify("extend",e?"right":"left",n);if(!o.isCollapsed()&&gY(o.getRng(),f))pY(s);else{t.execCommand(e?"ForwardDelete":"Delete");u();m(f,s);d()}t.dom.remove(f)}));return true}return false};const TY=(t,e,n)=>AY(t,e,n)||fY&&DY(t,e,n)?Optional.some(T):Optional.none();const BY=t=>(e,n,o={})=>{const s=e.getBody();const r={bubbles:true,composed:true,data:null,isComposing:false,detail:0,view:null,target:s,currentTarget:s,eventPhase:Event.AT_TARGET,originalTarget:s,explicitOriginalTarget:s,isTrusted:false,srcElement:s,cancelable:false,preventDefault:T,inputType:n};const c=ed(new InputEvent(t));return e.dispatch(t,{...c,...r,...o})};const LY=BY("input");const PY=BY("beforeinput");const MY=In();const IY=MY.os;const FY=IY.isMacOS()||IY.isiOS();const UY=MY.browser;const zY=UY.isFirefox();const $Y=(t,e,n)=>{const o=n.keyCode===Jw.BACKSPACE?"deleteContentBackward":"deleteContentForward";const s=t.selection.isCollapsed();const r=s?"character":"selection";const c=t=>s?t?"word":"line":"selection";VV([{keyCode:Jw.BACKSPACE,action:HV(IW,t)},{keyCode:Jw.BACKSPACE,action:HV(G$,t,false)},{keyCode:Jw.DELETE,action:HV(G$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(N$,t,false)},{keyCode:Jw.DELETE,action:HV(N$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(VH,t,e,false)},{keyCode:Jw.DELETE,action:HV(VH,t,e,true)},{keyCode:Jw.BACKSPACE,action:HV(FS,t,false)},{keyCode:Jw.DELETE,action:HV(FS,t,true)},{keyCode:Jw.BACKSPACE,action:HV(TY,t,false,r)},{keyCode:Jw.DELETE,action:HV(TY,t,true,r)},...FY?[{keyCode:Jw.BACKSPACE,altKey:true,action:HV(TY,t,false,c(true))},{keyCode:Jw.DELETE,altKey:true,action:HV(TY,t,true,c(true))},{keyCode:Jw.BACKSPACE,metaKey:true,action:HV(TY,t,false,c(false))}]:[{keyCode:Jw.BACKSPACE,ctrlKey:true,action:HV(TY,t,false,c(true))},{keyCode:Jw.DELETE,ctrlKey:true,action:HV(TY,t,true,c(true))}],{keyCode:Jw.BACKSPACE,action:HV(Z$,t,false)},{keyCode:Jw.DELETE,action:HV(Z$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(EW,t,false)},{keyCode:Jw.DELETE,action:HV(EW,t,true)},{keyCode:Jw.BACKSPACE,action:HV(b$,t,false)},{keyCode:Jw.DELETE,action:HV(b$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(d$,t,false)},{keyCode:Jw.DELETE,action:HV(d$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(gW,t,false)},{keyCode:Jw.DELETE,action:HV(gW,t,true)},{keyCode:Jw.BACKSPACE,action:HV(X$,t,false)},{keyCode:Jw.DELETE,action:HV(X$,t,true)},{keyCode:Jw.BACKSPACE,action:HV(UW,t,false)},{keyCode:Jw.DELETE,action:HV(UW,t,true)}],n).filter((e=>t.selection.isEditable())).each((e=>{n.preventDefault();const s=PY(t,o);if(!s.isDefaultPrevented()){e();LY(t,o)}}))};const jY=(t,e,n,o)=>WV([{keyCode:Jw.BACKSPACE,action:HV(Y$,t)},{keyCode:Jw.DELETE,action:HV(Y$,t)},...FY?[{keyCode:Jw.BACKSPACE,altKey:true,action:HV(vW,t)},{keyCode:Jw.DELETE,altKey:true,action:HV(vW,t)},...n?[{keyCode:zY?224:91,action:HV((()=>{sW(t,o);return vW(t)}))}]:[]]:[{keyCode:Jw.BACKSPACE,ctrlKey:true,action:HV(vW,t)},{keyCode:Jw.DELETE,ctrlKey:true,action:HV(vW,t)}]],e);const HY=(t,e)=>{let n=false;let o=[];t.on("keydown",(s=>{n=s.keyCode===Jw.BACKSPACE;o=ZH(t);s.isDefaultPrevented()||$Y(t,e,s)}));t.on("keyup",(e=>{if(!e.isDefaultPrevented()){jY(t,e,n,o);o.length=0}n=false}))};const WY=(t,e)=>{const n=fo.fromDom(t);const o=fo.fromDom(e);const s=Vo("span");const r=F(To,n);const c=t=>$o(t)&&gr(t,"font-size").isSome();const a=[...c(o)?[o]:[],...uc(o,c,r)];J(a.slice(1),(t=>{br(t,"font-size");Vs(t,"data-mce-style");s(t)&&qs(t)&&Xs(t)}))};const VY=t=>{while(t){if(ha(t)||Na(t)&&t.data&&/[\r\n\s]/.test(t.data))return Optional.from(fo.fromDom(t));t=t.nextSibling}return Optional.none()};const qY=(t,e)=>{const n=t.dom;const o=t.schema.getMoveCaretBeforeOnEnterElements();if(!e)return;if(/^(LI|DT|DD)$/.test(e.nodeName)){const t=t=>/^(ul|ol|dl)$/.test(Mo(t));const o=e=>t(e)?Optional.from(e):Vr(e,t);const s=t=>n.isEmpty(t.dom);VY(e.firstChild).each((t=>{o(t).fold((()=>{if(s(t)){const e=gq(t,0).element;$o(e)&&!fu(e)&&Ls(e,fo.fromText(Pe))}}),(t=>{Ds(t,fo.fromText(Pe))}))}))}const s=n.createRng();e.normalize();if(e.hasChildNodes()){const t=new DomTreeWalker(e,e);let n=e;let r;while(r=t.current()){if(Na(r)){s.setStart(r,0);s.setEnd(r,0);break}if(o[r.nodeName.toLowerCase()]){s.setStartBefore(r);s.setEndBefore(r);break}n=r;r=t.next()}if(!r){s.setStart(n,0);s.setEnd(n,0)}}else if(La(e))if(e.nextSibling&&n.isBlock(e.nextSibling)){s.setStartBefore(e);s.setEndBefore(e)}else{s.setStartAfter(e);s.setEndAfter(e)}else{s.setStart(e,0);s.setEnd(e,0)}t.selection.setRng(s);GO(t,s)};const KY=(t,e)=>{const n=t.getRoot();let o;let s=e;while(s!==n&&s&&t.getContentEditable(s)!=="false"){if(t.getContentEditable(s)==="true"){o=s;break}s=s.parentNode}return s!==n?o:n};const YY=t=>Optional.from(t.dom.getParent(t.selection.getStart(true),t.dom.isBlock));const GY=t=>YY(t).fold(P(""),(t=>t.nodeName.toUpperCase()));const XY=t=>YY(t).filter((t=>hu(fo.fromDom(t)))).isSome();const QY=t=>{t.innerHTML='<br data-mce-bogus="1">'};const ZY=(t,e,n)=>{const o=t.dom;Optional.from(n.style).map(o.parseStyle).each((t=>{const n=hr(fo.fromDom(e));const s={...n,...t};o.setStyles(e,s)}));const s=Optional.from(n.class).map((t=>t.split(/\s+/)));const r=Optional.from(e.className).map((t=>nt(t.split(/\s+/),(t=>t!==""))));ae(s,r,((t,n)=>{const s=nt(n,(e=>!X(t,e)));const r=[...t,...s];o.setAttrib(e,"class",r.join(" "))}));const c=["style","class"];const a=Dt(n,((t,e)=>!X(c,e)));o.setAttribs(e,a)};const JY=(t,e)=>{const n=Pg(t);if(n.toLowerCase()===e.tagName.toLowerCase()){const n=Mg(t);ZY(t,e,n)}};const tG=(t,e,n,o,s=true,r,c)=>{const a=t.dom;const i=t.schema;const l=Pg(t);const d=n?n.nodeName.toUpperCase():"";let u=e;const m=i.getTextInlineElements();let f;f=r||d==="TABLE"||d==="HR"?a.create(r||l,c||{}):n.cloneNode(false);let p=f;if(s){do{if(m[u.nodeName]){if(rv(u)||Nv(u))continue;const t=u.cloneNode(false);a.setAttrib(t,"id","");if(f.hasChildNodes()){t.appendChild(f.firstChild);f.appendChild(t)}else{p=t;f.appendChild(t)}}}while((u=u.parentNode)&&u!==o);f.nodeName!=="LI"&&WY(f,p)}else{a.setAttrib(f,"style",null);a.setAttrib(f,"class",null)}JY(t,f);QY(p);return f};const eG=(t,e)=>t.dom.getParent(e,Va);const nG=(t,e,n)=>{let o=e;while(o&&o!==t&&x(o.nextSibling)){const t=o.parentElement;if(!t||!n(t))return Va(t);o=t}return false};const oG=(t,e,n)=>!e&&n.nodeName.toLowerCase()===Pg(t)&&t.dom.isEmpty(n)&&nG(t.getBody(),n,(e=>Pt(t.schema.getTextBlockElements(),e.nodeName.toLowerCase())));const sG=(t,e,n)=>{const o=e(Pg(t));const s=eG(t,n);if(s){t.dom.insertAfter(o,s);qY(t,o);(n.parentElement?.childNodes?.length??0)>1&&t.dom.remove(n)}};const rG=(t,e)=>t.firstChild&&t.firstChild.nodeName===e;const cG=t=>t.parentNode?.firstChild===t;const aG=(t,e)=>{const n=t?.parentNode;return N(n)&&n.nodeName===e};const iG=t=>N(t)&&/^(OL|UL|LI)$/.test(t.nodeName);const lG=t=>N(t)&&/^(LI|DT|DD)$/.test(t.nodeName);const dG=t=>iG(t)&&iG(t.parentNode);const uG=t=>{const e=t.parentNode;return lG(e)?e:t};const mG=(t,e,n)=>{let o=t[n?"firstChild":"lastChild"];while(o){if(ha(o))break;o=o[n?"nextSibling":"previousSibling"]}return o===e};const fG=t=>rt(Tt(hr(fo.fromDom(t)),((t,e)=>`${e}: ${t};`)),((t,e)=>t+e),"");const pG=(t,e,n,o,s)=>{const r=t.dom;const c=t.selection.getRng();const a=n.parentNode;if(n===t.getBody()||!a)return;dG(n)&&(s="LI");const i=lG(o)?fG(o):void 0;let l=lG(o)&&i?e(s,{style:fG(o)}):e(s);if(mG(n,o,true)&&mG(n,o,false))if(aG(n,"LI")){const t=uG(n);r.insertAfter(l,t);cG(n)?r.remove(t):r.remove(n)}else r.replace(l,n);else if(mG(n,o,true)){if(aG(n,"LI")){r.insertAfter(l,uG(n));l.appendChild(r.doc.createTextNode(" "));l.appendChild(n)}else a.insertBefore(l,n);r.remove(o)}else if(mG(n,o,false)){r.insertAfter(l,uG(n));r.remove(o)}else{n=uG(n);const t=c.cloneRange();t.setStartAfter(o);t.setEndAfter(n);const e=t.extractContents();if(s==="LI"&&rG(e,"LI")){const t=nt(Z(l.children,fo.fromDom),U(Vo("br")));l=e.firstChild;r.insertAfter(e,n);J(t,(t=>Bs(fo.fromDom(l),t)));i&&l.setAttribute("style",i)}else{r.insertAfter(e,n);r.insertAfter(l,n)}r.remove(o)}qY(t,l)};const gG=t=>{J(fc(fo.fromDom(t),jo),(t=>{const e=t.dom;e.nodeValue=_u(e.data)}))};const hG=(t,e)=>{const n=t.dom.getParent(e,"ol,ul,dl");return n!==null&&t.dom.getContentEditableParent(n)==="false"};const bG=(t,e)=>e&&e.nodeName==="A"&&t.isEmpty(e);const yG=(t,e)=>t.nodeName===e||t.previousSibling&&t.previousSibling.nodeName===e;const vG=(t,e)=>t.nodeName===e||t.nextSibling&&t.nextSibling.nodeName===e;const CG=(t,e)=>N(e)&&t.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&t.isEditable(e.parentNode)&&t.getContentEditable(e)!=="false";const wG=(t,e,n)=>{const o=[];if(!n)return;let s=n;while(s=s.firstChild){if(t.isBlock(s))return;ha(s)&&!e[s.nodeName.toLowerCase()]&&o.push(s)}let r=o.length;while(r--){s=o[r];(!s.hasChildNodes()||s.firstChild===s.lastChild&&s.firstChild?.nodeValue===""||bG(t,s))&&t.remove(s)}};const OG=(t,e,n)=>Na(e)?t?n===1&&e.data.charAt(n-1)===ku?0:n:n===e.data.length-1&&e.data.charAt(n)===ku?e.data.length:n:n;const EG=t=>{const e=t.cloneRange();e.setStart(t.startContainer,OG(true,t.startContainer,t.startOffset));e.setEnd(t.endContainer,OG(false,t.endContainer,t.endOffset));return e};const xG=t=>{let e=t;do{Na(e)&&(e.data=e.data.replace(/^[\r\n]+/,""));e=e.firstChild}while(e)};const kG=(t,e,n,o,s)=>{const r=t.dom;const c=KY(r,o)??r.getRoot();let a=r.getParent(o,r.isBlock);if(!a||!CG(r,a)){a=a||c;if(!a.hasChildNodes()){const o=r.create(e);JY(t,o);a.appendChild(o);n.setStart(o,0);n.setEnd(o,0);return o}let i=o;while(i&&i.parentNode!==a)i=i.parentNode;let l;while(i&&!r.isBlock(i)){l=i;i=i.previousSibling}const d=l?.parentElement?.nodeName;if(l&&d&&t.schema.isValidChild(d,e.toLowerCase())){const c=l.parentNode;const a=r.create(e);JY(t,a);c.insertBefore(a,l);i=l;while(i&&!r.isBlock(i)){const t=i.nextSibling;a.appendChild(i);i=t}n.setStart(o,s);n.setEnd(o,s)}}return o};const SG=(t,e)=>{e.normalize();const n=e.lastChild;(!n||ha(n)&&/^(left|right)$/gi.test(t.getStyle(n,"float",true)))&&t.add(e,"br")};const _G=(t,e)=>{const n=$g(t);return!_(e)&&(C(n)?X(co.explode(n),e.nodeName.toLowerCase()):n)};const NG=(t,e)=>{let n;let o;let s;let r;let c=false;const a=t.dom;const i=t.schema,l=i.getNonEmptyElements();const d=t.selection.getRng();const u=Pg(t);const m=fo.fromDom(d.startContainer);const f=rs(m,d.startOffset);const p=f.exists((t=>zo(t)&&!ic(t)));const g=d.collapsed&&p;const h=(e,o)=>tG(t,n,O,w,zg(t),e,o);const b=t=>{const e=OG(t,n,o);if(Na(n)&&(t?e>0:e<n.data.length))return false;if((n.parentNode===O||n===O)&&c&&!t)return true;if(t&&ha(n)&&n===O.firstChild)return true;if(yG(n,"TABLE")||yG(n,"HR"))return vG(n,"BR")?!t:c&&!t||!c&&t;const s=new DomTreeWalker(n,O);Na(n)&&(t&&e===0?s.prev():t||e!==n.data.length||s.next());let r;while(r=s.current()){if(ha(r)){if(!r.getAttribute("data-mce-bogus")){const t=r.nodeName.toLowerCase();if(l[t]&&t!=="br")return false}}else if(Na(r)&&!ia(r.data))return false;t?s.prev():s.next()}return true};const y=()=>{let e;e=/^(H[1-6]|PRE|FIGURE)$/.test(s)&&E!=="HGROUP"?h(u):h();_G(t,r)&&CG(a,r)&&a.isEmpty(O,void 0,{includeZwsp:true})?e=a.split(r,O):a.insertAfter(e,O);qY(t,e);return e};yO(a,d).each((t=>{d.setStart(t.startContainer,t.startOffset);d.setEnd(t.endContainer,t.endOffset)}));n=d.startContainer;o=d.startOffset;const v=!!(e&&e.shiftKey);const C=!!(e&&e.ctrlKey);if(ha(n)&&n.hasChildNodes()&&!g){c=o>n.childNodes.length-1;n=n.childNodes[Math.min(o,n.childNodes.length-1)]||n;o=c&&Na(n)?n.data.length:0}const w=KY(a,n);if(!w||hG(t,n))return;v||(n=kG(t,u,d,n,o));let O=a.getParent(n,a.isBlock)||a.getRoot();r=N(O?.parentNode)?a.getParent(O.parentNode,a.isBlock):null;s=O?O.nodeName.toUpperCase():"";const E=r?r.nodeName.toUpperCase():"";if(E==="LI"&&!C){const t=r;O=t;r=t.parentNode;s=E}if(ha(r)&&oG(t,v,O))return sG(t,h,O);if(/^(LI|DT|DD)$/.test(s)&&ha(r)&&a.isEmpty(O)){pG(t,h,r,O,u);return}if(!g&&(O===t.getBody()||!CG(a,O)))return;const x=O.parentNode;let k;if(g){k=h(u);f.fold((()=>{Ls(m,fo.fromDom(k))}),(t=>{Ds(t,fo.fromDom(k))}));t.selection.setCursorLocation(k,0)}else if(Du(O)){k=ju(O);a.isEmpty(O)&&QY(O);JY(t,k);qY(t,k)}else if(b(false))k=y();else if(b(true)&&x){const e=Hm.fromRangeStart(d);const n=ex(e);const o=fo.fromDom(O);const s=Cx(o,e,t.schema);const r=s?wx(o,e,t.schema).bind((t=>Optional.from(t.getNode()))):Optional.none();k=x.insertBefore(h(),O);const c=yG(O,"HR")||n?k:r.getOr(O);qY(t,c)}else{const e=EG(d).cloneRange();e.setEndAfter(O);const n=e.extractContents();gG(n);xG(n);k=n.firstChild;O===k?N(x)&&a.insertAfter(n,x):a.insertAfter(n,O);wG(a,l,k);SG(a,O);a.isEmpty(O)&&QY(O);k.normalize();if(a.isEmpty(k)){a.remove(k);y()}else{JY(t,k);qY(t,k)}}a.setAttrib(k,"id","");t.dispatch("NewBlock",{newBlock:k})};const RG="insertParagraph";const AG={insert:NG,fakeEventName:RG};const DG=(t,e,n)=>{const o=new DomTreeWalker(e,n);let s;const r=t.getNonEmptyElements();while(s=o.next())if(r[s.nodeName.toLowerCase()]||Na(s)&&s.length>0)return true;return false};const TG=(t,e,n)=>{const o=t.dom.createRng();if(n){o.setStartBefore(e);o.setEndBefore(e)}else{o.setStartAfter(e);o.setEndAfter(e)}t.selection.setRng(o);GO(t,o)};const BG=(t,e)=>{const n=t.selection;const o=t.dom;const s=n.getRng();let r;let c=false;yO(o,s).each((t=>{s.setStart(t.startContainer,t.startOffset);s.setEnd(t.endContainer,t.endOffset)}));let a=s.startOffset;let i=s.startContainer;if(ha(i)&&i.hasChildNodes()){const t=a>i.childNodes.length-1;i=i.childNodes[Math.min(a,i.childNodes.length-1)]||i;a=t&&Na(i)?i.data.length:0}let l=o.getParent(i,o.isBlock);const d=l&&l.parentNode?o.getParent(l.parentNode,o.isBlock):null;const u=d?d.nodeName.toUpperCase():"";const m=!!(e&&e.ctrlKey);u!=="LI"||m||(l=d);if(Na(i)&&a>=i.data.length&&!DG(t.schema,i,l||o.getRoot())){r=o.create("br");s.insertNode(r);s.setStartAfter(r);s.setEndAfter(r);c=true}r=o.create("br");Km(o,s,r);TG(t,r,c);t.undoManager.add()};const LG=(t,e)=>{const n=fo.fromTag("br");Ds(fo.fromDom(e),n);t.undoManager.add()};const PG=(t,e)=>{IG(t.getBody(),e)||Ts(fo.fromDom(e),fo.fromTag("br"));const n=fo.fromTag("br");Ts(fo.fromDom(e),n);TG(t,n.dom,false);t.undoManager.add()};const MG=t=>La(t.getNode());const IG=(t,e)=>!!MG(Hm.after(e))||tv(t,Hm.after(e)).map((t=>La(t.getNode()))).getOr(false);const FG=t=>t&&t.nodeName==="A"&&"href"in t;const UG=t=>t.fold(H,FG,FG,H);const zG=t=>{const e=F(wk,t);const n=Hm.fromRangeStart(t.selection.getRng());return wj(e,t.getBody(),n).filter(UG)};const $G=(t,e)=>{e.fold(T,F(LG,t),F(PG,t),T)};const jG=(t,e)=>{const n=zG(t);n.isSome()?n.each(F($G,t)):BG(t,e)};const HG="insertLineBreak";const WG={insert:jG,fakeEventName:HG};const VG=(t,e)=>YY(t).filter((t=>e.length>0&&No(fo.fromDom(t),e))).isSome();const qG=t=>VG(t,Fg(t));const KG=t=>VG(t,Ug(t));const YG=Ut.generate([{br:[]},{block:[]},{none:[]}]);const GG=(t,e)=>KG(t);const XG=t=>(e,n)=>XY(e)===t;const QG=(t,e)=>(n,o)=>{const s=GY(n)===t.toUpperCase();return s===e};const ZG=t=>{const e=KY(t.dom,t.selection.getStart());return _(e)};const JG=t=>QG("pre",t);const tX=()=>QG("summary",true);const eX=t=>(e,n)=>Lg(e)===t;const nX=(t,e)=>qG(t);const oX=(t,e)=>e;const sX=t=>{const e=Pg(t);const n=KY(t.dom,t.selection.getStart());return N(n)&&t.schema.isValidChild(n.nodeName,e)};const rX=t=>{const e=t.selection.getRng();const n=fo.fromDom(e.startContainer);const o=rs(n,e.startOffset);const s=o.map((t=>zo(t)&&!ic(t)));return e.collapsed&&s.getOr(true)};const cX=(t,e)=>(n,o)=>{const s=rt(t,((t,e)=>t&&e(n,o)),true);return s?Optional.some(e):Optional.none()};const aX=(t,e)=>uj([cX([GG],YG.none()),cX([JG(true),ZG],YG.none()),cX([tX()],YG.br()),cX([JG(true),eX(false),oX],YG.br()),cX([JG(true),eX(false)],YG.block()),cX([JG(true),eX(true),oX],YG.block()),cX([JG(true),eX(true)],YG.br()),cX([XG(true),oX],YG.br()),cX([XG(true)],YG.block()),cX([nX],YG.br()),cX([oX],YG.br()),cX([sX],YG.block()),cX([rX],YG.block())],[t,!!(e&&e.shiftKey)]).getOr(YG.none());const iX=(t,e,n)=>{if(!e.mode.isReadOnly()){e.selection.isCollapsed()||Dk(e);if(N(n)){const n=PY(e,t.fakeEventName);if(n.isDefaultPrevented())return}t.insert(e,n);N(n)&&LY(e,t.fakeEventName)}};const lX=(t,e)=>{if(t.mode.isReadOnly())return;const n=()=>iX(WG,t,e);const o=()=>iX(AG,t,e);const s=aX(t,e);switch(Ig(t)){case"linebreak":s.fold(n,n,T);break;case"block":s.fold(o,o,T);break;case"invert":s.fold(o,n,T);break;default:s.fold(n,o,T);break}};const dX=In();const uX=dX.os.isiOS()&&dX.browser.isSafari();const mX=(t,e)=>{if(!e.isDefaultPrevented()){e.preventDefault();CL(t.undoManager);t.undoManager.transact((()=>{lX(t,e)}))}};const fX=t=>{if(!t.collapsed)return false;const e=t.startContainer;if(Na(e)){const n=/^[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]$/;const o=e.data.charAt(t.startOffset-1);return n.test(o)}return false};const pX=t=>{let e=Optional.none();const n=t=>{e=Optional.some(t.selection.getBookmark());t.undoManager.add()};const o=(t,n)=>{t.undoManager.undo();e.fold(T,(e=>t.selection.moveToBookmark(e)));mX(t,n);e=Optional.none()};t.on("keydown",(e=>{e.keyCode===Jw.ENTER&&(uX&&fX(t.selection.getRng())?n(t):mX(t,e))}));t.on("keyup",(n=>{n.keyCode===Jw.ENTER&&e.each((()=>o(t,n)))}))};const gX=(t,e,n)=>{const o=Gn.os.isMacOS()||Gn.os.isiOS();WV([{keyCode:Jw.END,action:HV(OV,t,true)},{keyCode:Jw.HOME,action:HV(OV,t,false)},...o?[]:[{keyCode:Jw.HOME,action:HV(EV,t,false),ctrlKey:true,shiftKey:true},{keyCode:Jw.END,action:HV(EV,t,true),ctrlKey:true,shiftKey:true}],{keyCode:Jw.END,action:HV(YV,t,true)},{keyCode:Jw.HOME,action:HV(YV,t,false)},{keyCode:Jw.END,action:HV(FH,t,true,e)},{keyCode:Jw.HOME,action:HV(FH,t,false,e)}],n).each((t=>{n.preventDefault()}))};const hX=(t,e)=>{t.on("keydown",(n=>{n.isDefaultPrevented()||gX(t,e,n)}))};const bX=t=>{t.on("input",(e=>{e.isComposing||Gx(t)}))};const yX=In();const vX=(t,e,n)=>{WV([{keyCode:Jw.PAGE_UP,action:HV(FH,t,false,e)},{keyCode:Jw.PAGE_DOWN,action:HV(FH,t,true,e)}],n)};const CX=t=>t.stopImmediatePropagation();const wX=t=>t.keyCode===Jw.PAGE_UP||t.keyCode===Jw.PAGE_DOWN;const OX=(t,e,n)=>{n&&!t.get()?e.on("NodeChange",CX,true):!n&&t.get()&&e.off("NodeChange",CX);t.set(n)};const EX=(t,e)=>{if(yX.os.isMacOS())return;const n=zt(false);t.on("keydown",(e=>{wX(e)&&OX(n,t,true)}));t.on("keyup",(o=>{o.isDefaultPrevented()||vX(t,e,o);if(wX(o)&&n.get()){OX(n,t,false);t.nodeChanged()}}))};const xX=(t,e)=>t===e||t.contains(e);const kX=(t,e)=>!xX(t.getBody(),e.startContainer)||!xX(t.getBody(),e.endContainer)||XO(t.dom,e);const SX=t=>{t.on("beforeinput",(e=>{t.selection.isEditable()&&!Q(e.getTargetRanges(),(e=>!kX(t,e)))||e.preventDefault()}))};const _X=(t,e)=>{const n=e.container();const o=e.offset();if(Na(n)){n.insertData(o,t);return Optional.some(Hm(n,o+t.length))}return Sy(e).map((n=>{const o=fo.fromText(t);e.isAtEnd()?Ts(n,o):Ds(n,o);return Hm(o.dom,t.length)}))};const NX=F(_X,Pe);const RX=F(_X," ");const AX=(t,e,n)=>Mx(t,e,n)?NX(e):RX(e);const DX=t=>e=>e.fold((e=>ev(t.dom,Hm.before(e))),(t=>nv(t)),(t=>ov(t)),(e=>tv(t.dom,Hm.after(e))));const TX=(t,e,n)=>o=>Mx(t,o,n)?NX(e):RX(e);const BX=t=>e=>{t.selection.setRng(e.toRange());t.nodeChanged()};const LX=(t,e)=>t.isEditable(t.getParent(e,"summary"));const PX=t=>{const e=Hm.fromRangeStart(t.selection.getRng());const n=fo.fromDom(t.getBody());if(t.selection.isCollapsed()){const o=F(wk,t);const s=Hm.fromRangeStart(t.selection.getRng());return wj(o,t.getBody(),s).bind(DX(n)).map((o=>()=>TX(n,e,t.schema)(o).each(BX(t))))}return Optional.none()};const MX=t=>{const e=()=>{const e=fo.fromDom(t.getBody());t.selection.isCollapsed()||t.getDoc().execCommand("Delete");const n=Hm.fromRangeStart(t.selection.getRng());AX(e,n,t.schema).each(BX(t))};return de(Gn.browser.isFirefox()&&t.selection.isEditable()&&LX(t.dom,t.selection.getRng().startContainer),e)};const IX=(t,e)=>{VV([{keyCode:Jw.SPACEBAR,action:HV(PX,t)},{keyCode:Jw.SPACEBAR,action:HV(MX,t)}],e).each((n=>{e.preventDefault();const o=PY(t,"insertText",{data:" "});if(!o.isDefaultPrevented()){n();LY(t,"insertText",{data:" "})}}))};const FX=t=>{t.on("keydown",(e=>{e.isDefaultPrevented()||IX(t,e)}))};const UX=t=>vb(t)?[{keyCode:Jw.TAB,action:HV(RK,t,true)},{keyCode:Jw.TAB,shiftKey:true,action:HV(RK,t,false)}]:[];const zX=(t,e)=>{WV([...UX(t)],e).each((t=>{e.preventDefault()}))};const $X=t=>{t.on("keydown",(e=>{e.isDefaultPrevented()||zX(t,e)}))};const jX=t=>{t.addShortcut("Meta+P","","mcePrint");uY(t);if(ML(t))return zt(null);{const e=PH(t);SX(t);uV(t);DK(t,e);HY(t,e);pX(t);FX(t);bX(t);$X(t);hX(t,e);EX(t,e);return e}};const HX=(t,e)=>{const n=PF(t);n===null||tU(t,n)||t.undoManager.transact((()=>{w(e.styles)&&t.dom.setStyles(n,e.styles);w(e.attrs)&&kt(e.attrs,((e,o)=>t.dom.setAttrib(n,o,e)))}))};const WX=(t,e)=>()=>{const n=PF(t);return N(n)&&n.nodeName===e};const VX=t=>{t.addCommand("InsertUnorderedList",((e,n)=>{Ez(t,"UL",n)}));t.addCommand("InsertOrderedList",((e,n)=>{Ez(t,"OL",n)}));t.addCommand("InsertDefinitionList",((e,n)=>{Ez(t,"DL",n)}));t.addCommand("RemoveList",(()=>{tz(t)}));t.addCommand("mceListUpdate",((e,n)=>{w(n)&&HX(t,n)}));t.addCommand("mceListBackspaceDelete",((e,n)=>{Uz(t,n)}));t.addQueryStateHandler("InsertUnorderedList",WX(t,"UL"));t.addQueryStateHandler("InsertOrderedList",WX(t,"OL"));t.addQueryStateHandler("InsertDefinitionList",WX(t,"DL"))};const qX=t=>{t.on("keydown",(e=>{e.keyCode===Jw.BACKSPACE?Uz(t,false)&&e.preventDefault():e.keyCode===Jw.DELETE&&Uz(t,true)&&e.preventDefault()}))};const KX=t=>t.type===3;const YX=t=>t.length===0;const GX=t=>{const e=(e,n)=>{const o=AstNode.create("li");J(e,(t=>o.append(t)));n?t.insert(o,n,true):t.append(o)};const n=(t,n)=>{if(KX(n))return[...t,n];if(YX(t)||KX(n))return t;e(t,n);return[]};const o=rt(t.children(),n,[]);YX(o)||e(o)};const XX=t=>{t.on("PreInit",(()=>{const{parser:e}=t;e.addNodeFilter("ul,ol",(t=>J(t,GX)))}))};const QX=t=>{t.on("keydown",(e=>{e.keyCode!==Jw.TAB||Jw.metaKeyPressed(e)||t.undoManager.transact((()=>{(e.shiftKey?JU(t):ZU(t))&&e.preventDefault()}))}))};const ZX=t=>{Ab(t)&&QX(t)};const JX=t=>{qX(t);VX(t);XX(t);ZX(t)};class NodeChange{editor;lastPath=[];constructor(t){this.editor=t;let e;const n=this;"onselectionchange"in t.getDoc()||t.on("NodeChange click mouseup keyup focus",(n=>{const o=t.selection.getRng();const s={startContainer:o.startContainer,startOffset:o.startOffset,endContainer:o.endContainer,endOffset:o.endOffset};n.type!=="nodechange"&&iO(s,e)||t.dispatch("SelectionChange");e=s}));t.on("contextmenu",(()=>{hw(t);t.dispatch("SelectionChange")}));t.on("SelectionChange",(()=>{const e=t.selection.getStart(true);e&&Kv(t)&&!n.isSameElementPath(e)&&t.dom.isChildOf(e,t.getBody())&&t.nodeChanged({selectionChange:true})}));t.on("mouseup",(e=>{!e.isDefaultPrevented()&&Kv(t)&&(t.selection.getNode().nodeName==="IMG"?Ew.setEditorTimeout(t,(()=>{t.nodeChanged()})):t.nodeChanged())}))}
/**
     * Dispatches out a onNodeChange event to all observers. This method should be called when you
     * need to update the UI states or element path etc.
     *
     * @method nodeChanged
     * @param {Object} args Optional args to pass to NodeChange event handlers.
     */nodeChanged(t={}){const e=this.editor;const n=e.selection;let o;if(e.initialized&&n&&!Ah(e)&&!_b(e)){const s=e.getBody();o=n.getStart(true)||s;o.ownerDocument===e.getDoc()&&e.dom.isChildOf(o,s)||(o=s);const r=[];e.dom.getParent(o,(t=>{if(t===s)return true;r.push(t);return false}));e.dispatch("NodeChange",{...t,element:o,parents:r})}}isSameElementPath(t){let e;const n=this.editor;const o=ft(n.dom.getParents(t,W,n.getBody()));if(o.length===this.lastPath.length){for(e=o.length;e>=0;e--)if(o[e]!==this.lastPath[e])break;if(e===-1){this.lastPath=o;return true}}this.lastPath=o;return false}}const tQ="x-tinymce/html";const eQ=P(tQ);const nQ="\x3c!-- "+tQ+" --\x3e";const oQ=t=>nQ+t;const sQ=t=>t.replace(nQ,"");const rQ=t=>t.indexOf(nQ)!==-1;const cQ=t=>!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(t);const aQ=(t,e)=>{let n="<"+t;const o=Tt(e,((t,e)=>e+'="'+ul.encodeAllRaw(t)+'"'));o.length&&(n+=" "+o.join(" "));return n+">"};const iQ=(t,e,n)=>{const o=t.split(/\n\n/);const s=aQ(e,n);const r="</"+e+">";const c=Z(o,(t=>t.split(/\n/).join("<br />")));const a=t=>s+t+r;return c.length===1?c[0]:Z(c,a).join("")};const lQ="%MCEPASTEBIN%";const dQ=(t,e)=>{const{dom:n,selection:o}=t;const s=t.getBody();e.set(o.getRng());const r=n.add(t.getBody(),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:true,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},lQ);Gn.browser.isFirefox()&&n.setStyle(r,"left",n.getStyle(s,"direction",true)==="rtl"?65535:-65535);n.bind(r,"beforedeactivate focusin focusout",(t=>{t.stopPropagation()}));r.focus();o.select(r,true)};const uQ=(t,e)=>{const n=t.dom;if(mQ(t)){let o;const s=e.get();while(o=mQ(t)){n.remove(o);n.unbind(o)}s&&t.selection.setRng(s)}e.set(null)};const mQ=t=>t.dom.get("mcepastebin");const fQ=t=>N(t)&&t.id==="mcepastebin";const pQ=t=>{const e=t.dom;const n=(t,n)=>{t.appendChild(n);e.remove(n,true)};const[o,...s]=nt(t.getBody().childNodes,fQ);J(s,(t=>{n(o,t)}));const r=e.select("div[id=mcepastebin]",o);for(let t=r.length-1;t>=0;t--){const s=e.create("div");o.insertBefore(s,r[t]);n(s,r[t])}return o?o.innerHTML:""};const gQ=t=>t===lQ;const hQ=t=>{const e=zt(null);return{create:()=>dQ(t,e),remove:()=>uQ(t,e),getEl:()=>mQ(t),getHtml:()=>pQ(t),getLastRng:e.get}};const bQ=(t,e)=>{co.each(e,(e=>{t=v(e,RegExp)?t.replace(e,""):t.replace(e[0],e[1])}));return t};const yQ=t=>{const e=Il();const n=CD({},e);let o="";const s=e.getVoidElements();const r=co.makeMap("script noscript style textarea video audio iframe object"," ");const c=e.getBlockElements();const a=t=>{const n=t.name,i=t;if(n!=="br"){if(n!=="wbr"){s[n]&&(o+=" ");if(r[n])o+=" ";else{t.type===3&&(o+=t.value);if(!(t.name in e.getVoidElements())){let e=t.firstChild;if(e)do{a(e)}while(e=e.next)}if(c[n]&&i.next){o+="\n";n==="p"&&(o+="\n")}}}}else o+="\n"};t=bQ(t,[/<!\[[^\]]+\]>/g]);a(n.parse(t));return o};const vQ=t=>{const e=(t,e,n)=>e||n?Pe:" ";t=bQ(t,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,e],/<br class="Apple-interchange-newline">/g,/<br>$/i]);return t};const CQ=t=>{let e=0;return()=>t+e++};const wQ=t=>{const e=t.toLowerCase();const n={jpg:"jpeg",jpe:"jpeg",jfi:"jpeg",jif:"jpeg",jfif:"jpeg",pjpeg:"jpeg",pjp:"jpeg",svg:"svg+xml"};return co.hasOwn(n,e)?"image/"+n[e]:"image/"+e};const OQ=(t,e)=>{const n=CD({sanitize:mb(t),sandbox_iframes:Ob(t),sandbox_iframes_exclusions:Eb(t),convert_unsafe_embeds:xb(t)},t.schema);n.addNodeFilter("meta",(t=>{co.each(t,(t=>{t.remove()}))}));const o=n.parse(e,{forced_root_block:false,isRootContent:true});return DE({validate:true},t.schema).serialize(o)};const EQ=(t,e)=>({content:t,cancelled:e});const xQ=(t,e,n)=>{const o=t.dom.create("div",{style:"display:none"},e);const s=pg(t,o,n);return EQ(s.node.innerHTML,s.isDefaultPrevented())};const kQ=(t,e,n)=>{const o=fg(t,e,n);const s=OQ(t,o.content);return t.hasEventListeners("PastePostProcess")&&!o.isDefaultPrevented()?xQ(t,s,n):EQ(s,o.isDefaultPrevented())};const SQ=(t,e,n)=>kQ(t,e,n);const _Q=(t,e)=>{t.insertContent(e,{merge:tb(t),paste:true});return true};const NQ=t=>/^https?:\/\/[\w\-\/+=.,!;:&%@^~(){}?#]+$/i.test(t);const RQ=(t,e)=>NQ(e)&&Q(yb(t),(t=>Oe(e.toLowerCase(),`.${t.toLowerCase()}`)));const AQ=(t,e,n)=>{t.undoManager.extra((()=>{n(t,e)}),(()=>{t.insertContent('<img src="'+e+'">')}));return true};const DQ=(t,e,n)=>{t.undoManager.extra((()=>{n(t,e)}),(()=>{t.execCommand("mceInsertLink",false,e)}));return true};const TQ=(t,e,n)=>!(t.selection.isCollapsed()||!NQ(e))&&DQ(t,e,n);const BQ=(t,e,n)=>!!RQ(t,e)&&AQ(t,e,n);const LQ=(t,e)=>{co.each([TQ,BQ,_Q],(n=>!n(t,e,_Q)))};const PQ=(t,e,n)=>{n||!eb(t)?_Q(t,e):LQ(t,e)};const MQ=CQ("mceclip");const IQ=t=>{const e=jq();Vq(e,t);Lq(e);return e};const FQ=(t,e,n,o,s)=>{const r=SQ(t,e,n);if(!r.cancelled){const e=r.content;const n=()=>PQ(t,e,o);if(s){const o=PY(t,"insertFromPaste",{dataTransfer:IQ(e)});if(!o.isDefaultPrevented()){n();LY(t,"insertFromPaste")}}else n()}};const UQ=(t,e,n,o)=>{const s=n||rQ(e);FQ(t,sQ(e),s,false,o)};const zQ=(t,e,n)=>{const o=t.dom.encode(e).replace(/\r\n/g,"\n");const s=fa(o,ob(t));const r=iQ(s,Pg(t),Mg(t));FQ(t,r,false,true,n)};const $Q=t=>{const e={};if(t&&t.types)for(let n=0;n<t.types.length;n++){const o=t.types[n];try{e[o]=t.getData(o)}catch{e[o]=""}}return e};const jQ=(t,e)=>e in t&&t[e].length>0;const HQ=t=>jQ(t,"text/html")||jQ(t,"text/plain");const WQ=(t,e)=>{const n=e.match(/([\s\S]+?)(?:\.[a-z0-9.]+)$/i);return N(n)?t.dom.encode(n[1]):void 0};const VQ=(t,e,n,o)=>{const s=MQ();const r=Hg(t)&&N(n.name);const c=r?WQ(t,n.name):s;const a=r?n.name:void 0;const i=e.create(s,n,o,c,a);e.add(i);return i};const qQ=(t,e)=>{yR(e.uri).each((({data:n,type:o,base64Encoded:s})=>{const r=s?n:btoa(n);const c=e.file;const a=t.editorUpload.blobCache;const i=a.getByData(r,o);const l=i??VQ(t,a,c,r);UQ(t,`<img src="${l.blobUri()}">`,false,true)}))};const KQ=t=>t.type==="paste";const YQ=t=>Promise.all(Z(t,(t=>OR(t).then((e=>({file:t,uri:e}))))));const GQ=t=>{const e=yb(t);return t=>we(t.type,"image/")&&Q(e,(e=>wQ(e)===t.type))};const XQ=(t,e)=>{const n=e.items?ut(Ct(e.items),(t=>t.kind==="file"?[t.getAsFile()]:[])):[];const o=e.files?Ct(e.files):[];return nt(n.length>0?n:o,GQ(t))};const QQ=(t,e,n)=>{const o=KQ(e)?e.clipboardData:e.dataTransfer;if(Yh(t)&&o){const s=XQ(t,o);if(s.length>0){e.preventDefault();YQ(s).then((e=>{n&&t.selection.setRng(n);J(e,(e=>{qQ(t,e)}))}));return true}}return false};const ZQ=t=>Gn.os.isAndroid()&&t.clipboardData?.items?.length===0;const JQ=t=>Jw.metaKeyPressed(t)&&t.keyCode===86||t.shiftKey&&t.keyCode===45;const tZ=(t,e,n,o,s)=>{let r=vQ(n);const c=jQ(e,eQ())||rQ(n);const a=!c&&cQ(r);const i=NQ(r);(gQ(r)||!r.length||a&&!i)&&(o=true);(o||i)&&(r=jQ(e,"text/plain")&&a?e["text/plain"]:yQ(r));gQ(r)||(o?zQ(t,r,s):UQ(t,r,c,s))};const eZ=(t,e,n)=>{let o;const s=()=>e.getLastRng()||t.selection.getRng();t.on("keydown",(t=>{JQ(t)&&!t.isDefaultPrevented()&&(o=t.shiftKey&&t.keyCode===86)}));t.on("paste",(r=>{if(r.isDefaultPrevented()||ZQ(r))return;const c=n.get()==="text"||o;o=false;const a=$Q(r.clipboardData);if(HQ(a)||!QQ(t,r,s()))if(jQ(a,"text/html")){r.preventDefault();tZ(t,a,a["text/html"],c,true)}else if(jQ(a,"text/plain")&&jQ(a,"text/uri-list")){r.preventDefault();tZ(t,a,a["text/plain"],c,true)}else{e.create();Ew.setEditorTimeout(t,(()=>{const n=e.getHtml();e.remove();tZ(t,a,n,c,false)}),0)}}))};const nZ=t=>{const e=t=>we(t,"webkit-fake-url");const n=t=>we(t,"data:");const o=t=>t.data?.paste===true;t.parser.addNodeFilter("img",((s,r,c)=>{if(!Yh(t)&&o(c))for(const o of s){const s=o.attr("src");C(s)&&!o.attr("data-mce-object")&&s!==Gn.transparentSrc&&(e(s)||!sb(t)&&n(s))&&o.remove()}}))};const oZ=(t,e,n)=>{eZ(t,e,n);nZ(t)};const sZ=(t,e)=>{if(e.get()==="text"){e.set("html");gg(t,false)}else{e.set("text");gg(t,true)}t.focus()};const rZ=(t,e)=>{t.addCommand("mceTogglePlainTextPaste",(()=>{sZ(t,e)}));t.addCommand("mceInsertClipboardContent",((e,n)=>{n.html&&UQ(t,n.html,n.internal,false);n.text&&zQ(t,n.text,false)}))};const cZ=(t,e,n)=>{if(!t)return false;try{t.clearData();t.setData("text/html",e);t.setData("text/plain",n);t.setData(eQ(),e);return true}catch{return false}};const aZ=(t,e,n,o)=>{if(cZ(t.clipboardData,e.html,e.text)){t.preventDefault();o()}else n(e.html,o)};const iZ=t=>(e,n)=>{const{dom:o,selection:s}=t;const r=o.create("div",{contenteditable:"false","data-mce-bogus":"all"});const c=o.create("div",{contenteditable:"true"},e);o.setStyles(r,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"});r.appendChild(c);o.add(t.getBody(),r);const a=s.getRng();c.focus();const i=o.createRng();i.selectNodeContents(c);s.setRng(i);Ew.setEditorTimeout(t,(()=>{s.setRng(a);o.remove(r);n()}),0)};const lZ=t=>({html:oQ(t.selection.getContent({contextual:true})),text:t.selection.getContent({format:"text"})});const dZ=t=>!!t.dom.getParent(t.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",t.getBody());const uZ=t=>!t.selection.isCollapsed()||dZ(t);const mZ=(t,e)=>n=>{!n.isDefaultPrevented()&&uZ(t)&&t.selection.isEditable()&&aZ(n,lZ(t),iZ(t),(()=>{if(Gn.browser.isChromium()||Gn.browser.isFirefox()){const n=t.selection.getRng();Ew.setEditorTimeout(t,(()=>{t.selection.setRng(n);$W(t,e)}),0)}else $W(t,e)}))};const fZ=t=>e=>{!e.isDefaultPrevented()&&uZ(t)&&aZ(e,lZ(t),iZ(t),T)};const pZ=(t,e)=>{t.on("cut",mZ(t,e));t.on("copy",fZ(t))};const gZ=(t,e)=>wO.getCaretRangeFromPoint(e.clientX??0,e.clientY??0,t.getDoc());const hZ=t=>{const e=t["text/plain"];return!!e&&e.indexOf("file://")===0};const bZ=(t,e)=>{e&&t.selection.setRng(e);t.focus()};const yZ=t=>Q(t.files,(t=>/^image\//.test(t.type)));const vZ=(t,e,n,o)=>{const s=t.getParent(n,(t=>Ni(e,t)));const r=!x(t.getParent(n,"summary"));if(r)return true;if(s&&Pt(o,"text/html")){const t=(new DOMParser).parseFromString(o["text/html"],"text/html").body;return!x(t.querySelector(s.nodeName.toLowerCase()))}return false};const CZ=t=>{t.on("input",(e=>{const n=t=>x(t.querySelector("summary"));if(e.inputType==="deleteByDrag"){const e=nt(t.dom.select("details"),n);J(e,(e=>{La(e.firstChild)&&e.firstChild.remove();const n=t.dom.create("summary");n.appendChild(Ou().dom);e.prepend(n)}))}}))};const wZ=(t,e)=>{Kh(t)&&t.on("dragend dragover draggesture dragdrop drop drag",(t=>{t.preventDefault();t.stopPropagation()}));Yh(t)||t.on("drop",(t=>{const e=t.dataTransfer;e&&yZ(e)&&t.preventDefault()}));t.on("drop",(n=>{if(n.isDefaultPrevented())return;const o=gZ(t,n);if(_(o))return;const s=$Q(n.dataTransfer);const r=jQ(s,eQ());if((!HQ(s)||hZ(s))&&QQ(t,n,o))return;const c=s[eQ()];const a=c||s["text/html"]||s["text/plain"];const i=vZ(t.dom,t.schema,o.startContainer,s);const l=e.get();if((!l||i)&&a){n.preventDefault();Ew.setEditorTimeout(t,(()=>{t.undoManager.transact((()=>{(c||l&&i)&&t.execCommand("Delete");bZ(t,o);const e=vQ(a);s["text/html"]?UQ(t,e,r,true):zQ(t,e,true)}))}))}}));t.on("dragstart",(t=>{e.set(true)}));t.on("dragover dragend",(n=>{if(Yh(t)&&!e.get()){n.preventDefault();bZ(t,gZ(t,n))}n.type==="dragend"&&e.set(false)}));CZ(t)};const OZ=t=>{const e=e=>n=>{e(t,n)};const n=Gh(t);R(n)&&t.on("PastePreProcess",e(n));const o=Xh(t);R(o)&&t.on("PastePostProcess",e(o))};const EZ=(t,e)=>{t.on("PastePreProcess",(n=>{n.content=e(t,n.content,n.internal)}))};const xZ=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi;const kZ=t=>co.trim(t).replace(xZ,Gl).toLowerCase();const SZ=(t,e,n)=>{const o=Zh(t);if(n||o==="all"||!Jh(t))return e;const s=o?o.split(/[, ]/):[];if(s&&o!=="none"){const n=t.dom,o=t.selection.getNode();e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,((t,e,r,c)=>{const a=n.parseStyle(n.decode(r));const i={};for(let t=0;t<s.length;t++){const e=a[s[t]];let r=e;let c=n.getStyle(o,s[t],true);if(/color/.test(s[t])){r=kZ(r);c=kZ(c)}c!==r&&(i[s[t]]=e)}const l=n.serializeStyle(i,"span");return l?e+' style="'+l+'"'+c:e+c}))}else e=e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3");e=e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,((t,e,n,o)=>e+' style="'+n+'"'+o));return e};const _Z=t=>{(Gn.browser.isChromium()||Gn.browser.isSafari())&&EZ(t,SZ)};const NZ=(t,e)=>{const n=zt(false);const o=zt(nb(t)?"text":"html");const s=hQ(t);_Z(t);rZ(t,o);OZ(t);t.addQueryStateHandler("mceTogglePlainTextPaste",(()=>o.get()==="text"));t.on("PreInit",(()=>{pZ(t,e);wZ(t,n);oZ(t,s,o)}))};const RZ=t=>{t.on("click",(e=>{t.dom.getParent(e.target,"details")&&e.preventDefault()}))};const AZ=t=>{t.parser.addNodeFilter("details",(e=>{const n=Cb(t);J(e,(t=>{n==="expanded"?t.attr("open","open"):n==="collapsed"&&t.attr("open",null)}))}));t.serializer.addNodeFilter("details",(e=>{const n=wb(t);J(e,(t=>{n==="expanded"?t.attr("open","open"):n==="collapsed"&&t.attr("open",null)}))}))};const DZ=t=>{RZ(t);AZ(t)};const TZ=La;const BZ=Na;const LZ=t=>Fa(t.dom);const PZ=t=>Ia(t.dom);const MZ=t=>e=>To(fo.fromDom(t),e);const IZ=(t,e,n)=>jr(fo.fromDom(t),(t=>PZ(t)||n.isBlock(Mo(t))),MZ(e)).getOr(fo.fromDom(e)).dom;const FZ=(t,e)=>jr(fo.fromDom(t),LZ,MZ(e));const UZ=(t,e,n)=>{const o=new DomTreeWalker(t,e);const s=n?o.next.bind(o):o.prev.bind(o);let r=t;for(let e=n?t:s();e&&!TZ(e);e=s())hm(e)&&(r=e);return r};const zZ=(t,e,n)=>{const o=Hm.fromRangeStart(t);const s=o.getNode();const r=IZ(s,e,n);const c=UZ(s,r,false);const a=UZ(s,r,true);const i=document.createRange();FZ(c,r).fold((()=>{BZ(c)?i.setStart(c,0):i.setStartBefore(c)}),(t=>i.setStartBefore(t.dom)));FZ(a,r).fold((()=>{BZ(a)?i.setEnd(a,a.data.length):i.setEndAfter(a)}),(t=>i.setEndAfter(t.dom)));return i};const $Z=t=>{const e=zZ(t.selection.getRng(),t.getBody(),t.schema);t.selection.setRng(rR(e))};const jZ=t=>{t.on("mousedown",(e=>{if(e.detail>=3){e.preventDefault();$Z(t)}}))};var HZ;(function(t){t.Before="before";t.After="after"})(HZ||(HZ={}));const WZ=(t,e)=>Math.abs(t.left-e);const VZ=(t,e)=>Math.abs(t.right-e);const qZ=(t,e)=>t>=e.top&&t<=e.bottom;const KZ=(t,e)=>t.top<e.bottom&&t.bottom>e.top;const YZ=(t,e)=>{const n=tm(t,e)/Math.min(t.height,e.height);return KZ(t,e)&&n>.5};const GZ=(t,e)=>{const n=nt(t,(t=>qZ(e,t)));return Zu(n).fold((()=>[[],t]),(e=>{const{pass:n,fail:o}=et(t,(t=>YZ(t,e)));return[n,o]}))};const XZ=(t,e)=>({node:t.node,position:WZ(t,e)<VZ(t,e)?HZ.Before:HZ.After});const QZ=(t,e,n)=>e>t.left&&e<t.right?0:Math.min(Math.abs(t.left-e),Math.abs(t.right-e));const ZZ=(t,e,n,o)=>{const s=t=>hm(t.node)?Optional.some(t):ha(t.node)?ZZ(Ct(t.node.childNodes),e,n,false):Optional.none();const r=(t,o,r)=>s(o).filter((o=>{const s=Math.abs(r(t,e,n)-r(o,e,n));return s<2&&Na(o.node)}));const c=(t,c)=>{const a=ht(t,((t,o)=>c(t,e,n)-c(o,e,n)));return wt(a,s).map((t=>o&&!Na(t.node)&&a.length>1?r(t,a[1],c).getOr(t):t))};const[a,i]=GZ(rH(t),n);const{pass:l,fail:d}=et(i,(t=>t.top<n));return c(a,QZ).orThunk((()=>c(d,Ju))).orThunk((()=>c(l,Ju)))};const JZ=(t,e,n,o)=>{const s=(e,r)=>{const c=t=>ha(t)&&t.classList.contains("mce-drag-container");const a=nt(e.dom.childNodes,U(c));return r.fold((()=>ZZ(a,n,o,true)),(t=>{const e=nt(a,(e=>e!==t.dom));return ZZ(e,n,o,true)})).orThunk((()=>{const n=To(e,t)?Optional.none():Qo(e);return n.bind((t=>s(t,Optional.some(e))))}))};return s(e,Optional.none())};const tJ=(t,e,n)=>{const o=fo.fromDom(t);const s=Ko(o);const r=fo.fromPoint(s,e,n).filter((t=>Bo(o,t)));const c=r.getOr(o);return JZ(o,c,e,n)};const eJ=(t,e,n)=>tJ(t,e,n).filter((t=>Jb(t.node))).map((t=>XZ(t,e)));const nJ=t=>{const e=t.getBoundingClientRect();const n=t.ownerDocument;const o=n.documentElement;const s=n.defaultView;return{top:e.top+(s?.scrollY??0)-o.clientTop,left:e.left+(s?.scrollX??0)-o.clientLeft}};const oJ=t=>t.inline?nJ(t.getBody()):{left:0,top:0};const sJ=t=>{const e=t.getBody();return t.inline?{left:e.scrollLeft,top:e.scrollTop}:{left:0,top:0}};const rJ=t=>{const e=t.getBody(),n=t.getDoc().documentElement;const o={left:e.scrollLeft,top:e.scrollTop};const s={left:e.scrollLeft||n.scrollLeft,top:e.scrollTop||n.scrollTop};return t.inline?o:s};const cJ=(t,e)=>{if(e.target.ownerDocument!==t.getDoc()){const n=nJ(t.getContentAreaContainer());const o=rJ(t);return{left:e.pageX-n.left+o.left,top:e.pageY-n.top+o.top}}return{left:e.pageX,top:e.pageY}};const aJ=(t,e,n)=>({pageX:n.left-t.left+e.left,pageY:n.top-t.top+e.top});const iJ=(t,e)=>aJ(oJ(t),sJ(t),cJ(t,e));const lJ=t=>({target:t,srcElement:t});const dJ=(t,e,n,o)=>({...e,dataTransfer:o,type:t,...lJ(n)});const uJ=(t,e,n)=>{const o=z("Function not supported on simulated event.");const s={bubbles:true,cancelBubble:false,cancelable:true,composed:false,currentTarget:null,defaultPrevented:false,eventPhase:0,isTrusted:true,returnValue:false,timeStamp:0,type:t,composedPath:o,initEvent:o,preventDefault:T,stopImmediatePropagation:T,stopPropagation:T,AT_TARGET:window.Event.AT_TARGET,BUBBLING_PHASE:window.Event.BUBBLING_PHASE,CAPTURING_PHASE:window.Event.CAPTURING_PHASE,NONE:window.Event.NONE,altKey:false,button:0,buttons:0,clientX:0,clientY:0,ctrlKey:false,layerX:0,layerY:0,metaKey:false,movementX:0,movementY:0,offsetX:0,offsetY:0,pageX:0,pageY:0,relatedTarget:null,screenX:0,screenY:0,shiftKey:false,x:0,y:0,detail:0,view:null,which:0,initUIEvent:o,initMouseEvent:o,getModifierState:o,dataTransfer:n,...lJ(e)};return s};const mJ=(t,e)=>{const n=Hq(t);if(e==="dragstart"){Eq(n);Bq(n)}else if(e==="drop"){xq(n);Lq(n)}else{kq(n);Pq(n)}return n};const fJ=(t,e,n,o)=>{const s=mJ(n,t);return S(o)?uJ(t,e,s):dJ(t,o,e,s)};const pJ=32;const gJ=100;const hJ=8;const bJ=16;const yJ=Fa;const vJ=cm(yJ,Ia);const CJ=(t,e,n)=>yJ(n)&&n!==e&&t.isEditable(n.parentElement);const wJ=(t,e,n)=>!_(e)&&(e!==n&&!t.dom.isChildOf(e,n)&&t.dom.isEditable(e));const OJ=(t,e,n,o)=>{const s=t.dom;const r=e.cloneNode(true);s.setStyles(r,{width:n,height:o});s.setAttrib(r,"data-mce-selected",null);const c=s.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"});s.setStyles(c,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:n,height:o});s.setStyles(r,{margin:0,boxSizing:"border-box"});c.appendChild(r);return c};const EJ=(t,e)=>{t.parentNode!==e&&e.appendChild(t)};const xJ=(t,e)=>n=>()=>{const o=t==="left"?n.scrollX:n.scrollY;n.scroll({[t]:o+e,behavior:"smooth"})};const kJ=xJ("left",-pJ);const SJ=xJ("left",pJ);const _J=xJ("top",-pJ);const NJ=xJ("top",pJ);const RJ=(t,e,n,o,s,r,c,a,i,l,d,u)=>{let m=0,f=0;t.style.left=e.pageX+"px";t.style.top=e.pageY+"px";e.pageX+n>s&&(m=e.pageX+n-s);e.pageY+o>r&&(f=e.pageY+o-r);t.style.width=n-m+"px";t.style.height=o-f+"px";const p=i.clientHeight;const g=i.clientWidth;const h=c+i.getBoundingClientRect().top;const b=a+i.getBoundingClientRect().left;d.on((t=>{t.intervalId.clear();t.dragging&&u&&(c+hJ>=p?t.intervalId.set(NJ(l)):c-hJ<=0?t.intervalId.set(_J(l)):a+hJ>=g?t.intervalId.set(SJ(l)):a-hJ<=0?t.intervalId.set(kJ(l)):h+bJ>=window.innerHeight?t.intervalId.set(NJ(window)):h-bJ<=0?t.intervalId.set(_J(window)):b+bJ>=window.innerWidth?t.intervalId.set(SJ(window)):b-bJ<=0&&t.intervalId.set(kJ(window)))}))};const AJ=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)};const DJ=(t,e)=>{const n=t.getParent(e.parentNode,t.isBlock);AJ(e);n&&n!==t.getRoot()&&t.isEmpty(n)&&Eu(fo.fromDom(n))};const TJ=t=>t.button===0;const BJ=(t,e)=>({pageX:e.pageX-t.relX,pageY:e.pageY+5});const LJ=(t,e)=>n=>{if(TJ(n)){const o=at(e.dom.getParents(n.target),vJ).getOr(null);if(N(o)&&CJ(e.dom,e.getBody(),o)){const s=e.dom.getPos(o);const r=e.getBody();const c=e.getDoc().documentElement;t.set({element:o,dataTransfer:jq(),dragging:false,screenX:n.screenX,screenY:n.screenY,maxX:(e.inline?r.scrollWidth:c.offsetWidth)-2,maxY:(e.inline?r.scrollHeight:c.offsetHeight)-2,relX:n.pageX-s.x,relY:n.pageY-s.y,width:o.offsetWidth,height:o.offsetHeight,ghost:OJ(e,o,o.offsetWidth,o.offsetHeight),intervalId:ge(gJ)})}}};const PJ=(t,e,n)=>{t._selectionOverrides.hideFakeCaret();eJ(t.getBody(),e,n).fold((()=>t.selection.placeCaretAt(e,n)),(o=>{const s=t._selectionOverrides.showCaret(1,o.node,o.position===HZ.Before,false);s?t.selection.setRng(s):t.selection.placeCaretAt(e,n)}))};const MJ=(t,e,n,o,s)=>{e==="dragstart"&&Vq(o,t.dom.getOuterHTML(n));const r=fJ(e,n,o,s);const c=t.dispatch(e,r);return c};const IJ=(t,e)=>{const n=De(((t,n)=>PJ(e,t,n)),0);e.on("remove",n.cancel);const o=t;return s=>t.on((t=>{const r=Math.max(Math.abs(s.screenX-t.screenX),Math.abs(s.screenY-t.screenY));if(!t.dragging&&r>10){const n=MJ(e,"dragstart",t.element,t.dataTransfer,s);N(n.dataTransfer)&&(t.dataTransfer=n.dataTransfer);if(n.isDefaultPrevented())return;t.dragging=true;e.focus()}if(t.dragging){const r=s.currentTarget===e.getDoc().documentElement;const c=BJ(t,iJ(e,s));EJ(t.ghost,e.getBody());RJ(t.ghost,c,t.width,t.height,t.maxX,t.maxY,s.clientY,s.clientX,e.getContentAreaContainer(),e.getWin(),o,r);n.throttle(s.clientX,s.clientY)}}))};const FJ=t=>{const e=t.getSel();if(N(e)){const t=e.getRangeAt(0);const n=t.startContainer;return Na(n)?n.parentNode:n}return null};const UJ=(t,e)=>n=>{t.on((t=>{t.intervalId.clear();if(t.dragging){if(wJ(e,FJ(e.selection),t.element)){const o=e.getDoc().elementFromPoint(n.clientX,n.clientY)??e.getBody();const s=MJ(e,"drop",o,t.dataTransfer,n);s.isDefaultPrevented()||e.undoManager.transact((()=>{DJ(e.dom,t.element);Wq(t.dataTransfer).each((t=>e.insertContent(t)));e._selectionOverrides.hideFakeCaret()}))}MJ(e,"dragend",e.getBody(),t.dataTransfer,n)}}));jJ(t)};const zJ=(t,e,n)=>{t.on((t=>{t.intervalId.clear();t.dragging&&n.fold((()=>MJ(e,"dragend",t.element,t.dataTransfer)),(n=>MJ(e,"dragend",t.element,t.dataTransfer,n)))}));jJ(t)};const $J=(t,e)=>n=>zJ(t,e,Optional.some(n));const jJ=t=>{t.on((t=>{t.intervalId.clear();AJ(t.ghost)}));t.clear()};const HJ=t=>{const e=he();const n=wd.DOM;const o=document;const s=LJ(e,t);const r=IJ(e,t);const c=UJ(e,t);const a=$J(e,t);t.on("mousedown",s);t.on("mousemove",r);t.on("mouseup",c);n.bind(o,"mousemove",r);n.bind(o,"mouseup",a);t.on("remove",(()=>{n.unbind(o,"mousemove",r);n.unbind(o,"mouseup",a)}));t.on("keydown",(n=>{n.keyCode===Jw.ESC&&zJ(e,t,Optional.none())}))};const WJ=t=>{const e=e=>{if(!e.isDefaultPrevented()){const n=e.dataTransfer;if(n&&(X(n.types,"Files")||n.files.length>0)){e.preventDefault();e.type==="drop"&&pM(t,"Dropped file type is not supported")}}};const n=n=>{Bw(t,n.target)&&e(n)};const o=()=>{const o=wd.DOM;const s=t.dom;const r=document;const c=t.inline?t.getBody():t.getDoc();const a=["drop","dragover"];J(a,(t=>{o.bind(r,t,n);s.bind(c,t,e)}));t.on("remove",(()=>{J(a,(t=>{o.unbind(r,t,n);s.unbind(c,t,e)}))}))};t.on("init",(()=>{Ew.setEditorTimeout(t,o,0)}))};const VJ=t=>{HJ(t);Mh(t)&&WJ(t)};const qJ=t=>{const e=De((()=>{if(!t.removed&&t.getBody().contains(document.activeElement)){const e=t.selection.getRng();if(e.collapsed){const n=O$(t,e,false);t.selection.setRng(n)}}}),0);t.on("focus",(()=>{e.throttle()}));t.on("blur",(()=>{e.cancel()}))};const KJ=t=>{t.on("init",(()=>{t.on("focusin",(e=>{const n=e.target;if(Ha(n)){const e=US(t.getBody(),n);const o=Fa(e)?e:n;t.selection.getNode()!==o&&C$(t,o).each((e=>t.selection.setRng(e)))}}))}))};const YJ=Fa;const GJ=(t,e)=>US(t.getBody(),e);const XJ=t=>{const e=t.selection,n=t.dom;const o=t.getBody();const s=Xb(t,o,n.isBlock,(()=>Yw(t)));const r="sel-"+n.uniqueId();const c="data-mce-selected";let a;const i=t=>N(t)&&n.hasClass(t,"mce-offscreen-selection");const l=t=>t!==o&&(YJ(t)||Ha(t))&&n.isChildOf(t,o)&&n.isEditable(t.parentNode);const d=t=>{t&&e.setRng(t)};const u=(n,o,r,c=true)=>{const a=t.dispatch("ShowCaret",{target:o,direction:n,before:r});if(a.isDefaultPrevented())return null;c&&e.scrollIntoView(o,n===-1);return s.show(r,o)};const m=t=>{if(t.hasAttribute("data-mce-caret")){ju(t);e.scrollIntoView(t)}};const f=()=>{t.on("click",(e=>{if(!n.isEditable(e.target)){e.preventDefault();t.focus()}}));t.on("blur NewBlock",w);t.on("ResizeWindow FullscreenStateChanged",s.reposition);t.on("tap",(e=>{const n=e.target;const o=GJ(t,n);if(YJ(o)){e.preventDefault();C$(t,o).each(C)}else l(n)&&C$(t,n).each(C)}),true);t.on("mousedown",(e=>{const s=e.target;if(s!==o&&s.nodeName!=="HTML"&&!n.isChildOf(s,o))return;if(!sM(t,e.clientX,e.clientY))return;w();E();const r=GJ(t,s);if(YJ(r)){e.preventDefault();C$(t,r).each(C)}else eJ(o,e.clientX,e.clientY).each((n=>{e.preventDefault();const o=u(1,n.node,n.position===HZ.Before,false);d(o);ba(r)?r.focus():t.getBody().focus()}))}));t.on("keypress",(t=>{Jw.modifierPressed(t)||YJ(e.getNode())&&t.preventDefault()}));t.on("GetSelectionRange",(t=>{let e=t.range;if(a){if(!a.parentNode){a=null;return}e=e.cloneRange();e.selectNode(a);t.range=e}}));t.on("focusin",(e=>{if(!Ha(e.target)&&t.getBody().contains(e.target)&&e.target!==t.getBody()&&!t.dom.isEditable(e.target.parentNode)){s.isShowing()&&s.hide();if(!e.target.contains(t.selection.getNode())){t.selection.select(e.target,true);t.selection.collapse(true)}const n=C(t.selection.getRng(),true);n&&t.selection.setRng(n)}}));t.on("SetSelectionRange",(t=>{t.range=h(t.range);const e=C(t.range,t.forward);e&&(t.range=e)}));const r=t=>ha(t)&&t.id==="mcepastebin";t.on("AfterSetSelectionRange",(t=>{const e=t.range;const n=e.startContainer.parentElement;g(e)||r(n)||E();i(n)||w()}));VJ(t);qJ(t);KJ(t)};const p=t=>Bu(t)||Uu(t)||zu(t);const g=t=>p(t.startContainer)||p(t.endContainer);const h=e=>{const o=t.schema.getVoidElements();const s=n.createRng();const r=e.startContainer;const c=e.startOffset;const a=e.endContainer;const i=e.endOffset;Pt(o,r.nodeName.toLowerCase())?c===0?s.setStartBefore(r):s.setStartAfter(r):s.setStart(r,c);Pt(o,a.nodeName.toLowerCase())?i===0?s.setEndBefore(a):s.setEndAfter(a):s.setEnd(a,i);return s};const b=(o,s)=>{const c=fo.fromDom(t.getBody());const a=t.getDoc();const i=Kr(c,"#"+r).getOrThunk((()=>{const t=fo.fromHtml('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>',a);zs(t,"id",r);Ls(c,t);return t}));const l=n.createRng();Ys(i);Fs(i,[fo.fromText(Pe,a),fo.fromDom(s),fo.fromText(Pe,a)]);l.setStart(i.dom.firstChild,1);l.setEnd(i.dom.lastChild,0);mr(i,{top:n.getPos(o,t.getBody()).y+"px"});_s(i);const d=e.getSel();if(d){d.removeAllRanges();d.addRange(l)}return l};const y=e=>{const n=t.getDoc().createElement("div");n.style.width=e.style.width;n.style.height=e.style.height;const o=e.getAttribute("width");o&&n.setAttribute("width",o);const s=e.getAttribute("height");s&&n.setAttribute("height",s);return n};const v=e=>{const o=Ya(e)?y(e):e.cloneNode(true);const s=t.dispatch("ObjectSelected",{target:e,targetClone:o});if(s.isDefaultPrevented())return null;const r=b(e,s.targetClone);const i=fo.fromDom(e);J(gc(fo.fromDom(t.getBody()),`*[${c}]`),(t=>{To(i,t)||Vs(t,c)}));n.getAttrib(e,c)||e.setAttribute(c,"1");a=e;E();return r};const C=(t,e)=>{if(!t)return null;if(t.collapsed){if(!g(t)){const s=e?1:-1;const r=ky(s,o,t);const c=r.getNode(!e);if(N(c)){if(Jb(c))return u(s,c,!!e&&!r.isAtEnd(),false);if(Tu(c)&&Fa(c.nextSibling)){const t=n.createRng();t.setStart(c,0);t.setEnd(c,0);return t}}const a=r.getNode(e);if(N(a)){if(Jb(a))return u(s,a,!e&&!r.isAtEnd(),false);if(Tu(a)&&Fa(a.previousSibling)){const t=n.createRng();t.setStart(a,1);t.setEnd(a,1);return t}}}return null}let s=t.startContainer;let r=t.startOffset;const c=t.endOffset;if(Na(s)&&r===0&&YJ(s.parentNode)){s=s.parentNode;r=n.nodeIndex(s);s=s.parentNode}if(!ha(s))return null;if(c===r+1&&s===t.endContainer){const t=s.childNodes[r];if(l(t))return v(t)}return null};const w=()=>{a&&a.removeAttribute(c);Kr(fo.fromDom(t.getBody()),"#"+r).each(Gs);a=null};const O=()=>{s.destroy();a=null};const E=()=>{s.hide()};ML(t)||f();return{showCaret:u,showBlockCaretContainer:m,hideFakeCaret:E,destroy:O}};const QJ=(t,e)=>{let n=e;for(let e=t.previousSibling;Na(e);e=e.previousSibling)n+=e.data.length;return n};const ZJ=(t,e,n,o,s)=>{if(Na(n)&&(o<0||o>n.data.length))return[];const r=s&&Na(n)?[QJ(n,o)]:[o];let c=n;while(c!==e&&c.parentNode){r.push(t.nodeIndex(c,s));c=c.parentNode}return c===e?r.reverse():[]};const JJ=(t,e,n,o,s,r,c=false)=>{const a=ZJ(t,e,n,o,c);const i=ZJ(t,e,s,r,c);return{start:a,end:i}};const t0=(t,e)=>{const n=e.slice();const o=n.pop();if(A(o)){const e=rt(n,((t,e)=>t.bind((t=>Optional.from(t.childNodes[e])))),Optional.some(t));return e.bind((t=>Na(t)&&(o<0||o>t.data.length)?Optional.none():Optional.some({node:t,offset:o})))}return Optional.none()};const e0=(t,e)=>t0(t,e.start).bind((({node:n,offset:o})=>t0(t,e.end).map((({node:t,offset:e})=>{const s=document.createRange();s.setStart(n,o);s.setEnd(t,e);return s}))));const n0=(t,e,n,o=false)=>JJ(t,e,n.startContainer,n.startOffset,n.endContainer,n.endOffset,o);const o0=(t,e,n)=>{if(e&&t.isEmpty(e)&&!n(e)){const o=e.parentNode;t.remove(e,Na(e.firstChild)&&ia(e.firstChild.data));o0(t,o,n)}};const s0=(t,e,n,o=true)=>{const s=e.startContainer.parentNode;const r=e.endContainer.parentNode;e.deleteContents();if(o&&!n(e.startContainer)){Na(e.startContainer)&&e.startContainer.data.length===0&&t.remove(e.startContainer);Na(e.endContainer)&&e.endContainer.data.length===0&&t.remove(e.endContainer);o0(t,s,n);s!==r&&o0(t,r,n)}};const r0=(t,e)=>Optional.from(t.dom.getParent(e.startContainer,t.dom.isBlock));const c0=(t,e,n)=>{const o=t.dynamicPatternsLookup({text:n,block:e});return{...t,blockPatterns:Up(o).concat(t.blockPatterns),inlinePatterns:zp(o).concat(t.inlinePatterns)}};const a0=(t,e,n,o)=>{const s=t.createRng();s.setStart(e,0);s.setEnd(n,o);return s.toString()};const i0=(t,e)=>t.create("span",{"data-mce-type":"bookmark",id:e});const l0=(t,e)=>{const n=t.createRng();n.setStartAfter(e.start);n.setEndBefore(e.end);return n};const d0=(t,e,n)=>{const o=e0(t.getRoot(),n).getOrDie("Unable to resolve path range");const s=o.startContainer;const r=o.endContainer;const c=o.endOffset===0?r:r.splitText(o.endOffset);const a=o.startOffset===0?s:s.splitText(o.startOffset);const i=a.parentNode;const l=c.parentNode;return{prefix:e,end:l.insertBefore(i0(t,e+"-end"),c),start:i.insertBefore(i0(t,e+"-start"),a)}};const u0=(t,e,n)=>{o0(t,t.get(e.prefix+"-end"),n);o0(t,t.get(e.prefix+"-start"),n)};const m0=t=>t.start.length===0;const f0=t=>(e,n)=>{const o=e.data;const s=o.substring(0,n);const r=s.lastIndexOf(t.charAt(t.length-1));const c=s.lastIndexOf(t);return c!==-1?c+t.length:r!==-1?r+1:-1};const p0=(t,e,n,o)=>{const s=e.start;const r=zK(t,o.container,o.offset,f0(s),n);return r.bind((o=>{const r=n.textContent?.indexOf(s)??-1;const c=r!==-1&&o.offset>=r+s.length;if(c){const e=t.createRng();e.setStart(o.container,o.offset-s.length);e.setEnd(o.container,o.offset);return Optional.some(e)}{const r=o.offset-s.length;return FK(o.container,r,n).map((e=>{const n=t.createRng();n.setStart(e.container,e.offset);n.setEnd(o.container,o.offset);return n})).filter((t=>t.toString()===s)).orThunk((()=>p0(t,e,n,TK(o.container,0))))}}))};const g0=(t,e,n,o,s,r=false)=>{if(e.start.length===0&&!r){const e=t.createRng();e.setStart(n,o);e.setEnd(n,o);return Optional.some(e)}return MK(n,o,s).bind((n=>{const o=p0(t,e,s,n);return o.bind((t=>{if(r){if(t.endContainer===n.container&&t.endOffset===n.offset)return Optional.none();if(n.offset===0&&t.endContainer.textContent?.length===t.endOffset)return Optional.none()}return Optional.some(t)}))}))};const h0=(t,e,n,o)=>{const s=t.dom;const r=s.getRoot();const c=n.pattern;const a=n.position.container;const i=n.position.offset;return FK(a,i-n.pattern.end.length,e).bind((l=>{const d=JJ(s,r,l.container,l.offset,a,i,o);if(m0(c))return Optional.some({matches:[{pattern:c,startRng:d,endRng:d}],position:l});{const a=b0(t,n.remainingPatterns,l.container,l.offset,e,o);const i=a.getOr({matches:[],position:l});const u=i.position;const m=g0(s,c,u.container,u.offset,e,a.isNone());return m.map((t=>{const e=n0(s,r,t,o);return{matches:i.matches.concat([{pattern:c,startRng:e,endRng:d}]),position:TK(t.startContainer,t.startOffset)}}))}}))};const b0=(t,e,n,o,s,r)=>{const c=t.dom;return MK(n,o,c.getRoot()).bind((a=>{const i=a0(c,s,n,o);for(let c=0;c<e.length;c++){const l=e[c];if(!Oe(i,l.end))continue;const d=e.slice();d.splice(c,1);const u=h0(t,s,{pattern:l,remainingPatterns:d,position:a},r);if(u.isNone()&&o>0)return b0(t,e,n,o-1,s,r);if(u.isSome())return u}return Optional.none()}))};const y0=(t,e,n)=>{t.selection.setRng(n);e.type==="inline-format"?J(e.format,(e=>{t.formatter.apply(e)})):t.execCommand(e.cmd,false,e.value)};const v0=(t,e,n,o)=>{const s=l0(t.dom,n);s0(t.dom,s,o);y0(t,e,s)};const C0=(t,e,n,o,s)=>{const r=t.dom;const c=l0(r,o);const a=l0(r,n);s0(r,a,s);s0(r,c,s);const i={prefix:n.prefix,start:n.end,end:o.start};const l=l0(r,i);y0(t,e,l)};const w0=(t,e)=>{const n=Qt("mce_textpattern");const o=st(e,((e,o)=>{const s=d0(t,n+`_end${e.length}`,o.endRng);return e.concat([{...o,endMarker:s}])}),[]);return st(o,((e,s)=>{const r=o.length-e.length-1;const c=m0(s.pattern)?s.endMarker:d0(t,n+`_start${r}`,s.startRng);return e.concat([{...s,startMarker:c}])}),[])};const O0=t=>ht(t,((t,e)=>e.end.length-t.end.length));const E0=(t,e)=>{const n=mt(t,(t=>Q(e,(e=>t.pattern.start===e.pattern.start&&t.pattern.end===e.pattern.end))));return t.length===e.length?n?t:e:t.length>e.length?t:e};const x0=(t,e,n,o,s,r)=>{const c=b0(t,s.inlinePatterns,n,o,e,r).fold((()=>[]),(t=>t.matches));const a=b0(t,O0(s.inlinePatterns),n,o,e,r).fold((()=>[]),(t=>t.matches));return E0(c,a)};const k0=(t,e)=>{if(e.length===0)return;const n=t.dom;const o=t.selection.getBookmark();const s=w0(n,e);J(s,(e=>{const o=n.getParent(e.startMarker.start,n.isBlock);const s=t=>t===o;m0(e.pattern)?v0(t,e.pattern,e.endMarker,s):C0(t,e.pattern,e.startMarker,e.endMarker,s);u0(n,e.endMarker,s);u0(n,e.startMarker,s)}));t.selection.moveToBookmark(o)};const S0=(t,e,n)=>IK(e,0,e).map((o=>{const s=o.container;UK(s,n.start.length,e).each((n=>{const o=t.createRng();o.setStart(s,0);o.setEnd(n.container,n.offset);s0(t,o,(t=>t===e))}));return s}));const _0=t=>(e,n)=>{const o=e.dom;const s=n.pattern;const r=e0(o.getRoot(),n.range).getOrDie("Unable to resolve path range");const c=(t,e)=>{const n=e.get(t);return E(n)&&yt(n).exists((t=>Pt(t,"block")))};r0(e,r).each((n=>{s.type==="block-format"?c(s.format,e.formatter)&&e.undoManager.transact((()=>{t(e.dom,n,s);e.formatter.apply(s.format)})):s.type==="block-command"&&e.undoManager.transact((()=>{t(e.dom,n,s);e.execCommand(s.cmd,false,s.value)}))}));return true};const N0=t=>ht(t,((t,e)=>e.start.length-t.start.length));const R0=t=>(e,n)=>{const o=N0(e);const s=n.replace(Pe," ");return at(o,(e=>t(e,n,s)))};const A0=(t,e)=>(n,o,s,r,c=o.textContent??"")=>{const a=n.dom;const i=Pg(n);return a.is(o,i)?t(s.blockPatterns,c).map((t=>e&&co.trim(c).length===t.start.length?[]:[{pattern:t,range:JJ(a,a.getRoot(),o,0,o,0,r)}])).getOr([]):[]};const D0=t=>/^\s[^\s]/.test(t);const T0=(t,e,n)=>{S0(t,e,n).each((t=>{const e=fo.fromDom(t);const n=Lr(e);D0(n)&&Mr(e,n.slice(1))}))};const B0=_0(T0);const L0=R0(((t,e,n)=>e.indexOf(t.start)===0||n.indexOf(t.start)===0));const P0=A0(L0,true);const M0=(t,e)=>{const n=t.selection.getRng();return r0(t,n).map((o=>{const s=Math.max(0,n.startOffset);const r=c0(e,o,o.textContent??"");const c=x0(t,o,n.startContainer,s,r,true);const a=P0(t,o,r,true);return{inlineMatches:c,blockMatches:a}})).filter((({inlineMatches:t,blockMatches:e})=>e.length>0||t.length>0))};const I0=(t,e)=>{if(e.length===0)return;const n=t.selection.getBookmark();J(e,(e=>B0(t,e)));t.selection.moveToBookmark(n)};const F0=_0(S0);const U0=R0(((t,e,n)=>e===t.start||n===t.start));const z0=A0(U0,false);const $0=(t,e)=>{const n=t.selection.getRng();return r0(t,n).map((o=>{const s=Math.max(0,n.startOffset);const r=a0(t.dom,o,n.startContainer,s);const c=c0(e,o,r);return z0(t,o,c,false,r)})).filter((t=>t.length>0))};const j0=(t,e)=>{J(e,(e=>F0(t,e)))};const H0=(t,e)=>M0(t,e).fold(H,(({inlineMatches:e,blockMatches:n})=>{t.undoManager.add();t.undoManager.extra((()=>{t.execCommand("mceInsertNewLine")}),(()=>{Nu(t);k0(t,e);I0(t,n);const o=t.selection.getRng();const s=MK(o.startContainer,o.startOffset,t.dom.getRoot());t.execCommand("mceInsertNewLine");s.each((e=>{const n=e.container;if(n.data.charAt(e.offset-1)===Le){n.deleteData(e.offset-1,1);o0(t.dom,n.parentNode,(e=>e===t.dom.getRoot()))}}))}));return true}));const W0=(t,e)=>{const n=t.selection.getRng();r0(t,n).map((o=>{const s=Math.max(0,n.startOffset-1);const r=a0(t.dom,o,n.startContainer,s);const c=c0(e,o,r);const a=x0(t,o,n.startContainer,s,c,false);a.length>0&&t.undoManager.transact((()=>{k0(t,a)}))}))};const V0=(t,e)=>$0(t,e).fold(H,(e=>{t.undoManager.transact((()=>{j0(t,e)}));return true}));const q0=(t,e,n)=>{for(let o=0;o<t.length;o++)if(n(t[o],e))return true;return false};const K0=(t,e)=>q0(t,e,((t,e)=>t===e.keyCode&&!Jw.modifierPressed(e)));const Y0=(t,e)=>q0(t,e,((t,e)=>t.charCodeAt(0)===e.charCode));const G0=t=>{const e=[",",".",";",":","!","?"];const n=[32];const o=()=>$p(rb(t).filter((e=>e.type!=="inline-command"&&e.type!=="block-command"||t.queryCommandSupported(e.cmd))),cb(t));const s=()=>pb(t);t.on("keydown",(e=>{if(e.keyCode===13&&!Jw.modifierPressed(e)&&t.selection.isCollapsed()&&t.selection.isEditable()){const n=jp(o(),"enter");const r=n.inlinePatterns.length>0||n.blockPatterns.length>0||s();r&&H0(t,n)&&e.preventDefault()}}),true);t.on("keydown",(e=>{if(e.keyCode===32&&t.selection.isCollapsed()&&t.selection.isEditable()){const n=jp(o(),"space");const r=n.blockPatterns.length>0||s();r&&V0(t,n)&&e.preventDefault()}}),true);const r=()=>{if(t.selection.isCollapsed()&&t.selection.isEditable()){const e=jp(o(),"space");const n=e.inlinePatterns.length>0||s();n&&W0(t,e)}};t.on("keyup",(t=>{K0(n,t)&&r()}));t.on("keypress",(n=>{Y0(e,n)&&Ew.setEditorTimeout(t,r)}))};const X0=t=>{G0(t)};const Q0=t=>{const e=co.each;const n=Jw.BACKSPACE,o=Jw.DELETE,s=t.dom,r=t.selection,c=t.parser;const a=Gn.browser;const i=a.isFirefox();const l=a.isChromium()||a.isSafari();const d=Gn.deviceType.isiPhone()||Gn.deviceType.isiPad();const u=Gn.os.isMacOS()||Gn.os.isiOS();const m=(e,n)=>{try{t.getDoc().execCommand(e,false,String(n))}catch{}};
/**
     * Returns true/false if the event is prevented or not.
     *
     * @private
     * @param {Event} e Event object.
     * @return {Boolean} true/false if the event is prevented or not.
     */const f=t=>t.isDefaultPrevented();const p=()=>{const e=t=>{const e=s.create("body");const n=t.cloneContents();e.appendChild(n);return r.serializer.serialize(e,{format:"html"})};const c=n=>{const o=e(n);const r=s.createRng();r.selectNode(t.getBody());const c=e(r);return o===c};t.on("keydown",(e=>{const r=e.keyCode;if(!f(e)&&(r===o||r===n)&&t.selection.isEditable()){const n=t.selection.isCollapsed();const o=t.getBody();if(n&&!si(t.schema,o))return;if(!n&&!c(t.selection.getRng()))return;e.preventDefault();t.setContent("");o.firstChild&&s.isBlock(o.firstChild)?t.selection.setCursorLocation(o.firstChild,0):t.selection.setCursorLocation(o,0);t.nodeChanged()}}))};const g=()=>{t.shortcuts.add("meta+a",null,"SelectAll")};const h=()=>{t.inline||s.bind(t.getDoc(),"mousedown mouseup",(e=>{let n;if(e.target===t.getDoc().documentElement){n=r.getRng();t.getDoc().getSelection()?.anchorNode!==null&&t.getBody().focus();if(e.type==="mousedown"){if(Bu(n.startContainer))return;r.placeCaretAt(e.clientX,e.clientY)}else r.setRng(n)}}))};const b=()=>{t.on("keydown",(e=>{if(!f(e)&&e.keyCode===n){if(!t.getBody().getElementsByTagName("hr").length)return;if(r.isCollapsed()&&r.getRng().startOffset===0){const t=r.getNode();const n=t.previousSibling;if(t.nodeName==="HR"){s.remove(t);e.preventDefault();return}if(n&&n.nodeName&&n.nodeName.toLowerCase()==="hr"){s.remove(n);e.preventDefault()}}}}))};const y=()=>{Range.prototype.getClientRects||t.on("mousedown",(e=>{if(!f(e)&&e.target.nodeName==="HTML"){const e=t.getBody();e.blur();Ew.setEditorTimeout(t,(()=>{e.focus()}))}}))};const v=()=>{const e=Uh(t);t.on("click",(n=>{const o=n.target;if(/^(IMG|HR)$/.test(o.nodeName)&&s.isEditable(o)){n.preventDefault();t.selection.select(o);t.nodeChanged()}if(o.nodeName==="A"&&s.hasClass(o,e)&&o.childNodes.length===0&&s.isEditable(o.parentNode)){n.preventDefault();r.select(o)}}))};const C=()=>{const e=e=>e.nodeName==="IMG"&&t.dom.isEditable(e);t.on("mousedown",(n=>{ae(Optional.from(n.clientX),Optional.from(n.clientY),((o,s)=>{const r=t.getDoc().caretPositionFromPoint(o,s);const c=r?.offsetNode?.childNodes[r.offset-(r.offset>0?1:0)]||r?.offsetNode;if(N(c)&&e(c)){const e=c.getBoundingClientRect();n.preventDefault();t.hasFocus()||t.focus();t.selection.select(c);n.clientX<e.left||n.clientY<e.top?t.selection.collapse(true):(n.clientX>e.right||n.clientY>e.bottom)&&t.selection.collapse(false)}}))}))};const w=()=>{const n=()=>{const n=s.getAttribs(r.getStart().cloneNode(false));return()=>{const o=r.getStart();if(o!==t.getBody()){s.setAttrib(o,"style",null);e(n,(t=>{o.setAttributeNode(t.cloneNode(true))}))}}};const o=()=>!r.isCollapsed()&&s.getParent(r.getStart(),s.isBlock)!==s.getParent(r.getEnd(),s.isBlock);t.on("keypress",(e=>{let s;if(f(e)||e.keyCode!==8&&e.keyCode!==46||!o())return true;s=n();t.getDoc().execCommand("delete",false);s();e.preventDefault();return false}));s.bind(t.getDoc(),"cut",(e=>{if(!f(e)&&o()){const e=n();Ew.setEditorTimeout(t,(()=>{e()}))}}))};const O=()=>{t.on("keydown",(t=>{if(!f(t)&&t.keyCode===n&&r.isCollapsed()&&r.getRng().startOffset===0){const e=r.getNode().previousSibling;if(e&&e.nodeName&&e.nodeName.toLowerCase()==="table"){t.preventDefault();return false}}return true}))};const E=()=>{t.on("keydown",(e=>{if(f(e)||e.keyCode!==Jw.BACKSPACE)return;let n=r.getRng();const o=n.startContainer;const c=n.startOffset;const a=s.getRoot();let i=o;if(n.collapsed&&c===0){while(i.parentNode&&i.parentNode.firstChild===i&&i.parentNode!==a)i=i.parentNode;if(i.nodeName==="BLOCKQUOTE"){t.formatter.toggle("blockquote",void 0,i);n=s.createRng();n.setStart(o,0);n.setEnd(o,0);r.setRng(n)}}}))};const x=()=>{const e=Vo("figcaption");t.on("keydown",(n=>{if(n.keyCode===Jw.LEFT||n.keyCode===Jw.RIGHT){const o=fo.fromDom(t.selection.getNode());e(o)&&t.selection.isCollapsed()&&Xo(o).bind((e=>t.selection.getRng().startOffset===0&&n.keyCode===Jw.LEFT?ts(e):t.selection.getRng().endOffset===o.dom.textContent?.length&&n.keyCode===Jw.RIGHT?es(e):Optional.none())).each((e=>{t.selection.setCursorLocation(e.dom,0)}))}}))};const k=()=>{const e=()=>{m("StyleWithCSS",false);m("enableInlineTableEditing",false);lh(t)||m("enableObjectResizing",false)};Dh(t)||t.on("BeforeExecCommand mousedown",e)};const S=()=>{const n=()=>{e(s.select("a:not([data-mce-block])"),(t=>{let e=t.parentNode;const n=s.getRoot();if(e?.lastChild===t){while(e&&!s.isBlock(e)){if(e.parentNode?.lastChild!==e||e===n)return;e=e.parentNode}s.add(e,"br",{"data-mce-bogus":1})}}))};t.on("SetContent ExecCommand",(t=>{t.type!=="setcontent"&&t.command!=="mceInsertLink"||n()}))};const _=()=>{t.on("init",(()=>{m("DefaultParagraphSeparator",Pg(t))}))};const R=t=>{const e=t.getBody();const n=t.selection.getRng();return n.startContainer===n.endContainer&&n.startContainer===e&&n.startOffset===0&&n.endOffset===e.childNodes.length};const A=()=>{t.on("keyup focusin mouseup",(e=>{Jw.modifierPressed(e)||R(t)||r.normalize()}),true)};const D=()=>{t.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")};const B=()=>{t.inline||t.on("keydown",(()=>{document.activeElement===document.body&&t.getWin().focus()}))};const L=()=>{if(!t.inline){t.contentStyles.push("body {min-height: 150px}");t.on("click",(e=>{let n;if(e.target.nodeName==="HTML"){n=t.selection.getRng();t.getBody().focus();t.selection.setRng(n);t.selection.normalize();t.nodeChanged()}}))}};const P=()=>{u&&t.on("keydown",(e=>{if(Jw.metaKeyPressed(e)&&!e.shiftKey&&(e.keyCode===37||e.keyCode===39)){e.preventDefault();const n=t.selection.getSel();n.modify("move",e.keyCode===37?"backward":"forward","lineboundary")}}))};const M=()=>{t.on("click",(t=>{let e=t.target;do{if(e.tagName==="A"){t.preventDefault();return}}while(e=e.parentNode)}));t.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")};const I=()=>{t.on("init",(()=>{t.dom.bind(t.getBody(),"submit",(t=>{t.preventDefault()}))}))};const F=()=>{c.addNodeFilter("br",(t=>{let e=t.length;while(e--)t[e].attr("class")==="Apple-interchange-newline"&&t[e].remove()}))};const U=T;const z=()=>{if(!i||t.removed)return false;const e=t.selection.getSel();return!e||!e.rangeCount||e.rangeCount===0};const $=()=>{if(l){h();v();I();g();if(d){B();L();M()}}if(i){y();k();D();P()}};const j=()=>{E();p();Gn.windowsPhone||A();if(l){h();v();_();I();O();F();if(d){B();L();M()}else g()}if(i){x();C();b();y();w();k();S();D();P();O()}};ML(t)?$():j();return{refreshContentEditable:U,isHidden:z}};class ComponentLoadError extends Error{url;constructor(t,e){super(t);this.url=e}}const Z0={};const J0=(t,e,n)=>new Promise(((o,s)=>{const r=fo.fromTag("script");$s(r,{type:"text/javascript",src:t,...n});const c=()=>{Gs(r)};ks(r,"load",(()=>{c();o()}));ks(r,"error",(()=>{c();s(new Error(`Failed to load script url: ${t}`))}));Ls(ls(e),r)}));const t1=async(t,e)=>{const n=ScriptLoader.ScriptLoader.getScriptAttributes(t);await J0(t,e,n).catch((()=>Promise.reject(new ComponentLoadError(`Failed to load component url: ${t}`,t))));return t};const e1=t=>Tt(t,((t,e)=>Lt(Z0,t).getOrThunk((()=>{if(_(window.customElements.get(e))){const e=t1(t,Ss());Z0[t]=e;return e}return Promise.resolve(t)})).catch((e=>{delete Z0[t];return Promise.reject(e)}))));const n1=(t,e)=>{const n=Ot(Bt(t));return Z(n,(t=>t1(t,fo.fromDom(e))))};const o1=t=>{const e=t.schema.getComponentUrls();return t.inline?e1(e):n1(e,t.getDoc())};const s1=async t=>{const e=o1(t);const n=nt(await Promise.allSettled(e),(t=>t.status==="rejected"));n.length>0&&J(n,(e=>{if(e.reason instanceof ComponentLoadError){const{url:n}=e.reason;xM(t,n)}}))};const r1=t=>{s1(t)};const c1=wd.DOM;const a1=(t,e)=>{const n=fo.fromDom(t.getBody());const o=ms(us(n));const s=fo.fromTag("style");zs(s,"type","text/css");Ls(s,fo.fromText(e));Ls(o,s);t.on("remove",(()=>{Gs(s)}))};const i1=t=>t.inline?t.getElement().nodeName.toLowerCase():void 0;const l1=t=>Dt(t,(t=>S(t)===false));const d1=t=>{const e=t.options.get;const n=t.editorUpload.blobCache;return l1({allow_conditional_comments:e("allow_conditional_comments"),allow_html_data_urls:e("allow_html_data_urls"),allow_svg_data_urls:e("allow_svg_data_urls"),allow_html_in_named_anchor:e("allow_html_in_named_anchor"),allow_script_urls:e("allow_script_urls"),allow_html_in_comments:e("allow_html_in_comments"),allow_mathml_annotation_encodings:e("allow_mathml_annotation_encodings"),allow_unsafe_link_target:e("allow_unsafe_link_target"),convert_unsafe_embeds:e("convert_unsafe_embeds"),convert_fonts_to_spans:e("convert_fonts_to_spans"),extended_mathml_attributes:e("extended_mathml_attributes"),extended_mathml_elements:e("extended_mathml_elements"),fix_list_elements:e("fix_list_elements"),font_size_legacy_values:e("font_size_legacy_values"),forced_root_block:e("forced_root_block"),forced_root_block_attrs:e("forced_root_block_attrs"),preserve_cdata:e("preserve_cdata"),inline_styles:e("inline_styles"),root_name:i1(t),sandbox_iframes:e("sandbox_iframes"),sandbox_iframes_exclusions:Eb(t),sanitize:e("xss_sanitization"),validate:true,blob_cache:n,document:t.getDoc()})};const u1=t=>{const e=t.options.get;return l1({custom_elements:e("custom_elements"),extended_valid_elements:e("extended_valid_elements"),invalid_elements:e("invalid_elements"),invalid_styles:e("invalid_styles"),schema:e("schema"),valid_children:e("valid_children"),valid_classes:e("valid_classes"),valid_elements:e("valid_elements"),valid_styles:e("valid_styles"),verify_html:e("verify_html"),padd_empty_block_inline_children:e("format_empty_lines")})};const m1=t=>{const e=t.options.get;return{...d1(t),...u1(t),...l1({remove_trailing_brs:e("remove_trailing_brs"),pad_empty_with_br:e("pad_empty_with_br"),url_converter:e("url_converter"),url_converter_scope:e("url_converter_scope"),element_format:e("element_format"),entities:e("entities"),entity_encoding:e("entity_encoding"),indent:e("indent"),indent_after:e("indent_after"),indent_before:e("indent_before")})}};const f1=t=>{const e=CD(d1(t),t.schema);e.addAttributeFilter("src,href,style,tabindex",((e,n)=>{const o=t.dom;const s="data-mce-"+n;let r=e.length;while(r--){const c=e[r];let a=c.attr(n);if(a&&!c.attr(s)){if(a.indexOf("data:")===0||a.indexOf("blob:")===0)continue;if(n==="style"){a=o.serializeStyle(o.parseStyle(a),c.name);a.length||(a=null);c.attr(s,a);c.attr(n,a)}else if(n==="tabindex"){c.attr(s,a);c.attr(n,null)}else c.attr(s,t.convertURL(a,n,c.name))}}}));e.addNodeFilter("script",(t=>{let e=t.length;while(e--){const n=t[e];const o=n.attr("type")||"no/type";o.indexOf("mce-")!==0&&n.attr("type","mce-"+o)}}));db(t)&&e.addNodeFilter("#cdata",(e=>{let n=e.length;while(n--){const o=e[n];o.type=8;o.name="#comment";o.value="[CDATA["+t.dom.encode(o.value??"")+"]]"}}));e.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",(e=>{let n=e.length;const o=t.schema.getNonEmptyElements();while(n--){const t=e[n];t.isEmpty(o)&&t.getAll("br").length===0&&t.append(new AstNode("br",1))}}));return e};const p1=t=>{const e=Wh(t);e&&Ew.setEditorTimeout(t,(()=>{let n;n=e===true?t:t.editorManager.get(e);if(n&&!n.destroyed){n.focus();n.selection.scrollIntoView()}}),100)};const g1=t=>{const e=t.dom.getRoot();t.inline||Kv(t)&&t.selection.getStart(true)!==e||nv(e).each((e=>{const n=e.getNode();const o=ka(n)?nv(n).getOr(e):e;t.selection.setRng(o.toRange())}))};const h1=t=>{t.bindPendingEventDelegates();t.initialized=true;tg(t);t.focus(true);g1(t);t.nodeChanged({initial:true});const e=jh(t);R(e)&&e.call(t,t);p1(t);oI(t)&&aI(t,true)};const b1=t=>t.inline?t.ui.styleSheetLoader:t.dom.styleSheetLoader;const y1=(t,e,n)=>{const{pass:o,fail:s}=et(e,(t=>tinymce.Resource.has(vI(t))));const r=o.map((e=>{const n=tinymce.Resource.get(vI(e));return C(n)?Promise.resolve(b1(t).loadRawCss(e,n)):Promise.resolve()}));const c=[...r,b1(t).loadAll(s)];return t.inline?c:c.concat([t.ui.styleSheetLoader.loadAll(n)])};const v1=t=>{const e=b1(t);const n=ch(t);const o=t.contentCSS;const s=()=>{e.unloadAll(o);t.inline||t.ui.styleSheetLoader.unloadAll(n)};const r=()=>{t.removed?s():t.on("remove",s)};if(t.contentStyles.length>0){let e="";co.each(t.contentStyles,(t=>{e+=t+"\r\n"}));t.dom.addStyle(e)}const c=Promise.all(y1(t,o,n)).then(r).catch(r);const a=rh(t);a&&a1(t,a);return c};const C1=t=>{const e=t.getDoc(),n=t.getBody();Zp(t);if(!Vh(t)){e.body.spellcheck=false;c1.setAttrib(n,"spellcheck","false")}t.quirks=Q0(t);Jp(t);const o=ah(t);o!==void 0&&(n.dir=o);const s=qh(t);s&&t.on("BeforeSetContent",(t=>{co.each(s,(e=>{t.content=t.content.replace(e,(t=>"\x3c!--mce:protected "+escape(t)+"--\x3e"))}))}));t.on("SetContent",(()=>{t.addVisual(t.getBody())}));t.on("compositionstart compositionend",(e=>{t.composing=e.type==="compositionstart"}))};const w1=t=>{ML(t)||t.load({initial:true,format:"html"});t.startContent=t.getContent({format:"raw"})};const O1=t=>{if(t.removed!==true){w1(t);h1(t)}};const E1=t=>{let e=false;const n=setTimeout((()=>{e||t.setProgressState(true)}),500);return()=>{clearTimeout(n);e=true;t.setProgressState(false)}};const x1=t=>{const e=t.getElement();let n=t.getDoc();if(t.inline){c1.addClass(e,"mce-content-body");t.contentDocument=n=document;t.contentWindow=window;t.bodyElement=e;t.contentAreaContainer=e}const o=t.getBody();o.disabled=true;t.readonly=Dh(t);t._editableRoot=Th(t);if(!_b(t)&&t.hasEditableRoot()){t.inline&&c1.getStyle(o,"position",true)==="static"&&(o.style.position="relative");o.contentEditable="true"}o.disabled=false;t.editorUpload=FI(t);t.schema=Il(u1(t));t.dom=wd(n,{keep_values:true,url_converter:t.convertURL,url_converter_scope:t,update_styles:true,root_element:t.inline?t.getBody():null,collect:t.inline,schema:t.schema,contentCssCors:Qg(t),referrerPolicy:Zg(t),crossOrigin:Jg(t),onSetAttrib:e=>{t.dispatch("SetAttrib",e)}});t.parser=f1(t);t.serializer=TP(m1(t),t);t.selection=yP(t.dom,t.getWin(),t.serializer,t);t.annotator=ow(t);t.formatter=JI(t);t.undoManager=oF(t);t._nodeChangeDispatcher=new NodeChange(t);t._selectionOverrides=XJ(t);JX(t);YW(t);DZ(t);aV(t);if(!ML(t)){jZ(t);X0(t)}const s=jX(t);HW(t,s);nV(t);uF(t);NZ(t,s);const r=FL(t);C1(t);r1(t);r.fold((()=>{const e=E1(t);v1(t).then((()=>{O1(t);e()}))}),(e=>{t.setProgressState(true);v1(t).then((()=>{e().then((e=>{t.setProgressState(false);O1(t);mP(t)}),(e=>{t.notificationManager.open({type:"error",text:String(e)});O1(t);mP(t)}))}))}))};const k1=wd.DOM;const S1=(t,e,n,o)=>{const s=fo.fromTag("iframe");o.each((t=>zs(s,"tabindex",t)));$s(s,n);$s(s,{id:t+"_ifr",frameBorder:"0",allowTransparency:"true",...Gn.browser.isFirefox()?{title:e}:{}});tc(s,"tox-edit-area__iframe");return s};const _1=t=>{let e=Rg(t)+"<html><head>";Ag(t)!==t.editorManager.documentBaseURL&&(e+='<base href="'+t.documentBaseURI.getURI()+'" />');e+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';const n=Dg(t);const o=Tg(t);const s=t.translate(zh(t));const r=Gn.browser.isFirefox()?"":`aria-label="${s}"`;Bg(t)&&(e+='<meta http-equiv="Content-Security-Policy" content="'+Bg(t)+'" />');e+=`</head><body id="${n}" class="mce-content-body ${o}" data-id="${t.id}" ${r}><br></body></html>`;return e};const N1=(t,e)=>{const n=zh(t);const o=t.translate(n);const s=Hs(fo.fromDom(t.getElement()),"tabindex").bind(Ae);const r=S1(t.id,o,Ng(t),s).dom;r.onload=()=>{r.onload=null;t.dispatch("load")};t.contentAreaContainer=e.iframeContainer;t.iframeElement=r;t.iframeHTML=_1(t);k1.add(e.iframeContainer,r)};const R1=t=>{const e=t.iframeElement;const n=()=>{t.contentDocument=e.contentDocument;x1(t)};if(fb(t)||Gn.browser.isFirefox()){const e=t.getDoc();e.open();e.write(t.iframeHTML);e.close();n()}else{const o=ks(fo.fromDom(e),"load",(()=>{o.unbind();n()}));e.srcdoc=t.iframeHTML}};const A1=(t,e)=>{N1(t,e);if(e.editorContainer){e.editorContainer.style.display=t.orgDisplay;t.hidden=k1.isHidden(e.editorContainer)}t.getElement().style.display="none";k1.setAttrib(t.id,"aria-hidden","true");t.getElement().style.visibility=t.orgVisibility;R1(t)};const D1=wd.DOM;const T1=(t,e,n)=>{const o=lM.get(n);const s=lM.urls[n]||t.editorManager.documentBaseURL.replace(/\/$/,"");n=co.trim(n);if(o&&co.inArray(e,n)===-1){if(t.plugins[n])return;try{const r=o(t,s)||{};t.plugins[n]=r;if(R(r.init)){r.init(t,s);e.push(n)}}catch(e){kM(t,n,e)}}};const B1=t=>{const e=e=>{e.keyCode!==Jw.ESC||e.defaultPrevented||yg(t).isDefaultPrevented()&&e.preventDefault()};document.addEventListener("keyup",e);t.inline||t.on("keyup",e);t.on("remove",(()=>{document.removeEventListener("keyup",e);t.inline||t.off("keyup",e)}))};const L1=t=>t.replace(/^\-/,"");const P1=t=>{const e=[];J(Lh(t),(n=>{T1(t,e,L1(n))}))};const M1=t=>{const e=co.trim(Vg(t));const n=t.ui.registry.getAll().icons;const o={...KP.get("default").icons,...KP.get(e).icons};kt(o,((e,o)=>{Pt(n,o)||t.ui.registry.addIcon(o,e)}))};const I1=t=>{const e=ph(t);if(C(e)){const n=dM.get(e);t.theme=n(t,dM.urls[e])||{};R(t.theme.init)&&t.theme.init(t,dM.urls[e]||t.editorManager.documentBaseURL.replace(/\/$/,""))}else t.theme={}};const F1=t=>{const e=hh(t);const n=YP.get(e);t.model=n(t,YP.urls[e])};const U1=t=>{GM.init(t)};const z1=t=>{const e=t.theme.renderUI;return e?e():W1(t)};const $1=t=>{const e=t.getElement();const n=ph(t);const o=n(t,e);o.editorContainer.nodeType&&(o.editorContainer.id=o.editorContainer.id||t.id+"_parent");o.iframeContainer&&o.iframeContainer.nodeType&&(o.iframeContainer.id=o.iframeContainer.id||t.id+"_iframecontainer");o.height=o.iframeHeight?o.iframeHeight:e.offsetHeight;return o};const j1=(t,e)=>({editorContainer:t,iframeContainer:e,api:{}});const H1=t=>{const e=D1.create("div");D1.insertAfter(e,t);return j1(e,e)};const W1=t=>{const e=t.getElement();return t.inline?j1(null):H1(e)};const V1=t=>{const e=t.getElement();t.orgDisplay=e.style.display;return C(ph(t))?z1(t):R(ph(t))?$1(t):W1(t)};const q1=(t,e)=>{const n={show:Optional.from(e.show).getOr(T),hide:Optional.from(e.hide).getOr(T),isEnabled:Optional.from(e.isEnabled).getOr(W),setEnabled:n=>{const o=n&&(t.mode.get()==="readonly"||oI(t));o||Optional.from(e.setEnabled).each((t=>t(n)))}};t.ui={...t.ui,...n}};const K1=async t=>{t.dispatch("ScriptsLoaded");M1(t);B1(t);I1(t);F1(t);U1(t);P1(t);const e=await V1(t);q1(t,Optional.from(e.api).getOr({}));t.editorContainer=e.editorContainer;xI(t);t.inline?x1(t):A1(t,{editorContainer:e.editorContainer,iframeContainer:e.iframeContainer})};const Y1=wd.DOM;const G1=t=>t.charAt(0)==="-";const X1=(t,e)=>{const n=th(e);const o=eh(e);if(!zd.hasCode(n)&&n!=="en"){const s=_e(o)?o:`${e.editorManager.baseURL}/langs/${n}.js`;t.add(s).catch((()=>{CM(e,s,n)}))}};const Q1=(t,e)=>{const n=ph(t);if(C(n)&&!G1(n)&&!Pt(dM.urls,n)){const o=gh(t);const s=o?t.documentBaseURI.toAbsolute(o):`themes/${n}/theme${e}.js`;dM.load(n,s).catch((()=>{wM(t,s,n)}))}};const Z1=(t,e)=>{const n=hh(t);if(n!=="plugin"&&!Pt(YP.urls,n)){const o=bh(t);const s=C(o)?t.documentBaseURI.toAbsolute(o):`models/${n}/model${e}.js`;YP.load(n,s).catch((()=>{OM(t,s,n)}))}};const J1=(t,e)=>{GM.load(t,e)};const t2=t=>Optional.from(qg(t)).filter(_e).map((t=>({url:t,name:Optional.none()})));const e2=(t,e,n)=>Optional.from(e).filter((t=>_e(t)&&!KP.has(t))).map((e=>({url:`${t.editorManager.baseURL}/icons/${e}/icons${n}.js`,name:Optional.some(e)})));const n2=(t,e,n)=>{const o=e2(e,"default",n);const s=t2(e).orThunk((()=>e2(e,Vg(e),"")));J(ce([o,s]),(n=>{t.add(n.url).catch((()=>{vM(e,n.url,n.name.getOrUndefined())}))}))};const o2=(t,e)=>{const n=(e,n)=>{e!=="licensekeymanager"&&lM.load(e,n).catch((()=>{yM(t,n,e)}))};kt(Ph(t),((e,o)=>{n(o,e);t.options.set("plugins",Lh(t).concat(o))}));J(Lh(t),(t=>{t=co.trim(t);!t||lM.urls[t]||G1(t)||n(t,`plugins/${t}/plugin${e}.js`)}))};const s2=t=>{const e=ph(t);return!C(e)||N(dM.get(e))};const r2=t=>{const e=hh(t);return N(YP.get(e))};const c2=(t,e)=>{const n=ScriptLoader.ScriptLoader;const o=()=>{!t.removed&&s2(t)&&r2(t)&&K1(t)};Q1(t,e);Z1(t,e);J1(t,e);X1(n,t);n2(n,t,e);o2(t,e);n.loadQueue().then(o,o)};const a2=(t,e)=>Ui.forElement(t,{contentCssCors:Bh(e),referrerPolicy:Zg(e)});const i2=t=>{const e=t.id;zd.setCode(th(t));const n=()=>{Y1.unbind(window,"ready",n);t.render()};if(!EventUtils.Event.domLoaded){Y1.bind(window,"ready",n);return}if(!t.getElement())return;const o=fo.fromDom(t.getElement());const s=Ks(o);t.on("remove",(()=>{tt(o.dom.attributes,(t=>Vs(o,t.name)));$s(o,s)}));t.ui.styleSheetLoader=a2(o,t);if(xh(t))t.inline=true;else{t.orgVisibility=t.getElement().style.visibility;t.getElement().style.visibility="hidden"}const r=t.getElement().form||Y1.getParent(e,"form");if(r){t.formElement=r;if(kh(t)&&!_a(t.getElement())){Y1.insertAfter(Y1.create("input",{type:"hidden",name:e}),e);t.hasHiddenInput=true}t.formEventDelegate=e=>{t.dispatch(e.type,e)};Y1.bind(r,"submit reset",t.formEventDelegate);t.on("reset",(()=>{t.resetContent()}));if(Sh(t)&&!r.submit.nodeType&&!r.submit.length&&!r._mceOldSubmit){r._mceOldSubmit=r.submit;r.submit=()=>{t.editorManager.triggerSave();t.setDirty(false);return r._mceOldSubmit(r)}}}t.windowManager=mM(t);t.notificationManager=iM(t);bb(t)&&t.on("GetContent",(t=>{t.save&&(t.content=Y1.encode(t.content))}));_h(t)&&t.on("submit",(()=>{t.initialized&&t.save()}));if(Nh(t)){t._beforeUnload=()=>{!t.initialized||t.destroyed||t.isHidden()||t.save({format:"raw",no_events:true,set_dirty:false})};t.editorManager.on("BeforeUnload",t._beforeUnload)}t.editorManager.add(t);c2(t,t.suffix)};const l2=["#E41B60","#AD1457","#1939EC","#001CB5","#648000","#465B00","#006CE7","#0054B4","#00838F","#006064","#00866F","#004D40","#51742F","#385021","#CF4900","#A84600","#CC0000","#6A1B9A","#9C27B0","#6A00AB","#3041BA","#0A1877","#774433","#452B24","#607D8B","#455A64"];const d2=t=>{if(Intl.Segmenter){const e=new Intl.Segmenter;const n=e.segment(t)[Symbol.iterator]();return`${n.next().value?.segment}`}return t.trim()[0]};const u2=(t,e)=>{let n=5381;for(let e=0;e<t.length;e++)n=(n<<5)+n+t.charCodeAt(e);return(n>>>0)%(e+1)};const m2=t=>{const e=u2(t??"",l2.length-1);return l2[e]};const f2=(t,e,n)=>{const o=n/2;return`<svg height="${n}" width="${n}" xmlns="http://www.w3.org/2000/svg"><circle cx="${o}" cy="${o}" r="${o}" fill="${e}"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="#FFF" font-family="sans-serif" font-size="${o}">`+t+"</text></svg>"};
/**
   * Generates a data URL for an SVG avatar with the specified content, color, and size.
   *
   * @param content The text content to display in the avatar (typically a single character)
   * @param color The background color of the avatar (hex color string)
   * @param size The size of the avatar in pixels (width and height)
   * @returns A data URL string containing the encoded SVG avatar
   */const p2=(t,e,n)=>"data:image/svg+xml,"+encodeURIComponent(f2(t,e,n))
/**
   * Generates a user avatar based on the user's name and ID.
   *
   * @param user User object containing id and name properties
   * @param user.id Unique identifier used to determine the avatar color
   * @param user.name User's name, first character will be displayed in the avatar
   * @param config Configuration object for the avatar
   * @param config.size The size of the avatar in pixels (defaults to 36)
   * @returns A data URL string containing the encoded SVG avatar
   */;const g2=(t,e={size:36})=>p2(d2(t.name),m2(t.id),e.size);const h2=pp([Op("id"),Rp("name"),Rp("avatar"),_p("custom")]);const b2=t=>{const e={};kt(t,((t,n)=>{t.each((t=>{e[n]=t}))}));return e};const y2=t=>{if(!Array.isArray(t))throw new Error("fetch_users must return an array");const e=Z(t,(t=>vp("Invalid user object",h2,t)));const{errors:n,values:o}=fe(e);if(n.length>0){const t=Z(n,((t,e)=>`User at index ${e}: ${Cp(t)}`));console.warn("User validation errors:\n"+t.join("\n"))}return Z(o,(t=>{const{id:e,name:n,avatar:o,...s}=t;return{id:e,name:n.getOr(e),avatar:o.getOr(g2({id:e,name:n.getOr(e)})),...b2(s)}}))};const v2=t=>{const e=new Map;const n=new Map;const o=t=>Optional.from(e.get(t));const s=(t,n)=>{e.set(n,t)};const r=(t,e)=>Optional.from(n.get(t)).each((({reject:o})=>{o(e);n.delete(t)}));const c=(t,e)=>Optional.from(n.get(t)).each((({resolve:o})=>{o(e);n.delete(t)}));const a=e=>{const a=Rb(t);if(!Array.isArray(e))return{};if(!a)return gt(e,(t=>Promise.resolve({id:t,name:t,avatar:g2({id:t,name:t})})));const i=Ot(nt(e,(t=>!o(t).isSome())));J(i,(t=>{const e=new Promise(((e,o)=>{n.set(t,{resolve:e,reject:o})}));s(e,t)}));i.length>0&&a(i).then(y2).then((t=>{const e=new Set(Z(t,(t=>t.id)));J(t,(t=>c(t.id,t)));J(i,(t=>{e.has(t)||r(t,new Error(`User ${t} not found`))}))})).catch((t=>{J(i,(e=>r(e,t instanceof Error?t:new Error("Network error"))))}));return rt(e,((t,e)=>{t[e]=o(e).getOr(Promise.resolve({id:e,name:e,avatar:g2({id:e,name:e})}));return t}),{})};const i=Nb(t);return Object.freeze({userId:i,fetchUsers:a})};const C2=t=>v2(t);const w2=(t,e)=>{if(t._editableRoot!==e){t._editableRoot=e;if(!oI(t)){t.getBody().contentEditable=String(t.hasEditableRoot());t.nodeChanged()}hg(t,e)}};const O2=t=>t._editableRoot;const E2=(t,e)=>({sections:P(t),options:P(e)});const x2=In().deviceType;const k2=x2.isPhone();const S2=x2.isTablet();const _2=t=>{if(_(t))return[];{const e=E(t)?t:t.split(/[ ,]/);const n=Z(e,xe);return nt(n,_e)}};const N2=(t,e)=>{const n=At(e,((e,n)=>X(t,n)));return E2(n.t,n.f)};const R2=(t,e,n={})=>{const o=t.sections();const s=Lt(o,e).getOr({});return co.extend({},n,s)};const A2=(t,e)=>Pt(t.sections(),e);const D2=(t,e)=>A2(t,e)?t.sections()[e]:{};const T2=(t,e)=>{const n={table_grid:false,object_resizing:false,resize:false,toolbar_mode:Lt(t,"toolbar_mode").getOr("scrolling"),toolbar_sticky:false};const o={menubar:false};return{...n,...e?o:{}}};const B2=(t,e)=>{const n=e.external_plugins??{};return t&&t.external_plugins?co.extend({},t.external_plugins,n):n};const L2=(t,e)=>[..._2(t),..._2(e)];const P2=(t,e,n,o)=>t&&A2(e,"mobile")?o:n;const M2=(t,e,n,o)=>{const s=_2(n.forced_plugins);const r=_2(o.plugins);const c=D2(e,"mobile");const a=c.plugins?_2(c.plugins):r;const i=P2(t,e,r,a);const l=L2(s,i);return co.extend(o,{forced_plugins:s,plugins:l})};const I2=(t,e)=>t&&A2(e,"mobile");const F2=(t,e,n,o,s)=>{const r=t?{mobile:T2(s.mobile??{},e)}:{};const c=N2(["mobile"],ne(r,s));const a=co.extend(n,o,c.options(),I2(t,c)?R2(c,"mobile"):{},{external_plugins:B2(o,c.options())});return M2(t,c,o,a)};const U2=(t,e)=>{const n=oe(e);return F2(k2||S2,k2,n,t,n)};const z2=(t,e)=>uP(t,e);const $2=t=>{const e=(e,n)=>{t.formatter.toggle(e,n);t.nodeChanged()};const n=n=>()=>{J("left,center,right,justify".split(","),(e=>{n!==e&&t.formatter.remove("align"+e)}));n!=="none"&&e("align"+n)};t.editorCommands.addCommands({JustifyLeft:n("left"),JustifyCenter:n("center"),JustifyRight:n("right"),JustifyFull:n("justify"),JustifyNone:n("none")})};const j2=t=>{const e=e=>()=>{const n=t.selection;const o=n.isCollapsed()?[t.dom.getParent(n.getNode(),t.dom.isBlock)]:n.getSelectedBlocks();return Q(o,(n=>N(t.formatter.matchNode(n,e))))};t.editorCommands.addCommands({JustifyLeft:e("alignleft"),JustifyCenter:e("aligncenter"),JustifyRight:e("alignright"),JustifyFull:e("alignjustify")},"state")};const H2=t=>{$2(t);j2(t)};const W2=t=>{t.editorCommands.addCommands({"Cut,Copy,Paste":e=>{const n=t.getDoc();let o;try{n.execCommand(e)}catch{o=true}e!=="paste"||n.queryCommandEnabled(e)||(o=true);if(o||!n.queryCommandSupported(e)){let e=t.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");(Gn.os.isMacOS()||Gn.os.isiOS())&&(e=e.replace(/Ctrl\+/g,"⌘+"));t.notificationManager.open({text:e,type:"error"})}}})};const V2=(t,e,n,o)=>{const s=fo.fromDom(t.getRoot());n=Ix(s,Hm.fromRangeStart(e),o)?n.replace(/^ /,"&nbsp;"):n.replace(/^&nbsp;/," ");n=Ux(s,Hm.fromRangeEnd(e),o)?n.replace(/(&nbsp;| )(<br( \/)>)?$/,"&nbsp;"):n.replace(/&nbsp;(<br( \/)?>)?$/," ");return n};const q2=t=>{if(typeof t!=="string"){const e=co.extend({paste:t.paste,data:{paste:t.paste}},t);return{content:t.content,details:e}}return{content:t,details:{}}};const K2=(t,e)=>{const n=t.selection;const o=t.dom;return/^ | $/.test(e)?V2(o,n.getRng(),e,t.schema):e};const Y2=(t,e)=>{if(t.selection.isEditable()){const{content:n,details:o}=q2(e);_D(t,{...o,content:K2(t,n),format:"html",set:false,selection:true}).each((e=>{const n=lP(t,e.content,o);ND(t,n,e);t.addVisual()}))}};const G2=t=>{t.editorCommands.addCommands({mceCleanup:()=>{const e=t.selection.getBookmark();t.setContent(t.getContent());t.selection.moveToBookmark(e)},insertImage:(e,n,o)=>{Y2(t,t.dom.createHTML("img",{src:o}))},insertHorizontalRule:()=>{t.execCommand("mceInsertContent",false,"<hr>")},insertText:(e,n,o)=>{Y2(t,t.dom.encode(o))},insertHTML:(e,n,o)=>{Y2(t,o)},mceInsertContent:(e,n,o)=>{Y2(t,o)},mceSetContent:(e,n,o)=>{t.setContent(o)},mceReplaceContent:(e,n,o)=>{t.execCommand("mceInsertContent",false,o.replace(/\{\$selection\}/g,t.selection.getContent({format:"text"})))},mceNewDocument:()=>{t.setContent(Qh(t))}})};const X2={"font-size":"size","font-family":"face"};const Q2=Vo("font");const Z2=(t,e,n)=>{const o=e=>gr(e,t).orThunk((()=>Q2(e)?Lt(X2,t).bind((t=>Hs(e,t))):Optional.none()));const s=t=>To(fo.fromDom(e),t);return xc(fo.fromDom(n),(t=>o(t)),s)};const J2=t=>t.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",");const t3=(t,e)=>Optional.from(wd.DOM.getStyle(e,t,true));const e3=t=>(e,n)=>Optional.from(n).map(fo.fromDom).filter($o).bind((n=>Z2(t,e,n.dom).or(t3(t,n.dom)))).getOr("");const n3=e3("font-size");const o3=B(J2,e3("font-family"));const s3=t=>nv(t.getBody()).bind((t=>{const e=t.container();return Optional.from(Na(e)?e.parentNode:e)}));const r3=t=>Optional.from(t.selection.getRng()).bind((e=>{const n=t.getBody();const o=e.startContainer===n&&e.startOffset===0;return o?Optional.none():Optional.from(t.selection.getStart(true))}));const c3=(t,e)=>r3(t).orThunk(F(s3,t)).map(fo.fromDom).filter($o).bind(e);const a3=(t,e)=>c3(t,L(Optional.some,e));const i3=(t,e)=>{if(/^[0-9.]+$/.test(e)){const n=parseInt(e,10);if(n>=1&&n<=7){const o=gb(t);const s=hb(t);return s.length>0?s[n-1]||e:o[n-1]||e}return e}return e};const l3=t=>{const e=t.split(/\s*,\s*/);return Z(e,(t=>t.indexOf(" ")===-1||we(t,'"')||we(t,"'")?t:`'${t}'`)).join(",")};const d3=(t,e)=>{const n=i3(t,e);t.formatter.toggle("fontname",{value:l3(n)});t.nodeChanged()};const u3=t=>a3(t,(e=>o3(t.getBody(),e.dom))).getOr("");const m3=(t,e)=>{t.formatter.toggle("fontsize",{value:i3(t,e)});t.nodeChanged()};const f3=t=>a3(t,(e=>n3(t.getBody(),e.dom))).getOr("");const p3=t=>a3(t,(e=>{const n=fo.fromDom(t.getBody());const o=xc(e,(t=>gr(t,"line-height")),F(To,n));const s=()=>{const t=parseFloat(fr(e,"line-height"));const n=parseFloat(fr(e,"font-size"));return String(t/n)};return o.getOrThunk(s)})).getOr("");const g3=(t,e)=>{t.formatter.toggle("lineheight",{value:String(e)});t.nodeChanged()};const h3=t=>{const e=(e,n)=>{t.formatter.toggle(e,n);t.nodeChanged()};t.editorCommands.addCommands({"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":t=>{e(t)},"ForeColor,HiliteColor":(t,n,o)=>{e(t,{value:o})},BackColor:(t,n,o)=>{e("hilitecolor",{value:o})},FontName:(e,n,o)=>{d3(t,o)},FontSize:(e,n,o)=>{m3(t,o)},LineHeight:(e,n,o)=>{g3(t,o)},Lang:(t,n,o)=>{e(t,{value:o.code,customValue:o.customCode??null})},RemoveFormat:e=>{t.formatter.remove(e)},mceBlockQuote:()=>{e("blockquote")},FormatBlock:(t,n,o)=>{e(C(o)?o:"p")},mceToggleFormat:(t,n,o)=>{e(o)}})};const b3=t=>{const e=e=>t.formatter.match(e);t.editorCommands.addCommands({"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":t=>e(t),mceBlockQuote:()=>e("blockquote")},"state");t.editorCommands.addQueryValueHandler("FontName",(()=>u3(t)));t.editorCommands.addQueryValueHandler("FontSize",(()=>f3(t)));t.editorCommands.addQueryValueHandler("LineHeight",(()=>p3(t)))};const y3=t=>{h3(t);b3(t)};const v3=t=>{t.editorCommands.addCommands({mceAddUndoLevel:()=>{t.undoManager.add()},mceEndUndoLevel:()=>{t.undoManager.add()},Undo:()=>{t.undoManager.undo()},Redo:()=>{t.undoManager.redo()}})};const C3=t=>{t.editorCommands.addCommands({Indent:()=>{PW(t)},Outdent:()=>{MW(t)}});t.editorCommands.addCommands({Outdent:()=>RW(t),Indent:()=>AW(t)},"state")};const w3=t=>{const e=(e,n,o)=>{if(t.mode.isReadOnly())return;const s=C(o)?{href:o}:o;const r=t.dom.getParent(t.selection.getNode(),"a");if(w(s)&&C(s.href)){s.href=s.href.replace(/ /g,"%20").replace(/&amp;/g,"&");r&&s.href||t.formatter.remove("link");s.href&&t.formatter.apply("link",s,r)}};t.editorCommands.addCommands({unlink:()=>{if(t.selection.isEditable()){if(t.selection.isCollapsed()){const e=t.dom.getParent(t.selection.getStart(),"a");e&&t.dom.remove(e,true);return}t.formatter.remove("link")}},mceInsertLink:e,createLink:e})};const O3=(t,e,n,o)=>{const s=t.dom;const r=t=>s.isBlock(t)&&t.parentElement===n;const c=r(e)?e:s.getParent(o,r,n);return Optional.from(c).map(fo.fromDom)};const E3=(t,e)=>{if(t.mode.isReadOnly())return;const n=t.dom;const o=t.selection.getRng();const s=e?t.selection.getStart():t.selection.getEnd();const r=e?o.startContainer:o.endContainer;const c=KY(n,r);if(!c||!c.isContentEditable)return;const a=e?Ds:Ts;const i=Pg(t);O3(t,s,c,r).each((e=>{const n=tG(t,r,e.dom,c,false,i);a(e,fo.fromDom(n));t.selection.setCursorLocation(n,0);t.dispatch("NewBlock",{newBlock:n});LY(t,"insertParagraph")}))};const x3=t=>E3(t,true);const k3=t=>E3(t,false);const S3=t=>{t.editorCommands.addCommands({InsertNewBlockBefore:()=>{x3(t)},InsertNewBlockAfter:()=>{k3(t)}})};const _3=t=>{t.editorCommands.addCommands({insertParagraph:()=>{iX(AG,t)},mceInsertNewLine:(e,n,o)=>{lX(t,o)},InsertLineBreak:(e,n,o)=>{iX(WG,t)}})};const N3=t=>{t.editorCommands.addCommands({mceSelectNodeDepth:(e,n,o)=>{let s=0;t.dom.getParent(t.selection.getNode(),(e=>{if(ha(e)&&s++===o){t.selection.select(e);return false}return true}),t.getBody())},mceSelectNode:(e,n,o)=>{t.selection.select(o)},selectAll:()=>{const e=t.dom.getParent(t.selection.getStart(),Ia);if(e){const n=t.dom.createRng();n.selectNodeContents(e);t.selection.setRng(n)}}})};const R3=t=>{t.editorCommands.addCommands({mceRemoveNode:(e,n,o)=>{const s=o??t.selection.getNode();if(s!==t.getBody()){const e=t.selection.getBookmark();t.dom.remove(s,true);t.selection.moveToBookmark(e)}},mcePrint:()=>{t.getWin().print()},mceFocus:(e,n,o)=>{Zw(t,o===true)},mceToggleVisualAid:()=>{t.hasVisual=!t.hasVisual;t.addVisual()}})};const A3=t=>{H2(t);W2(t);v3(t);N3(t);G2(t);w3(t);C3(t);S3(t);_3(t);y3(t);R3(t)};const D3=["toggleview"];const T3=t=>X(D3,t.toLowerCase());class EditorCommands{editor;commands={state:{},exec:{},value:{}};constructor(t){this.editor=t}
/**
     * Executes a registered command on the current instance. A list of available commands can be found in
     * the tinymce command identifiers documentation.
     *
     * @method execCommand
     * @param {String} command Command name to execute, for example mceLink or Bold.
     * @param {Boolean} ui Specifies if a UI (dialog) should be presented or not.
     * @param {Object/Array/String/Number/Boolean} value Optional command value, this can be anything.
     * @param {Object} args Optional arguments object.
     * @return {Boolean} true or false if the command was supported or not.
     */execCommand(t,e=false,n,o){const s=this.editor;const r=t.toLowerCase();const c=o?.skip_focus;if(s.removed)return false;r!=="mcefocus"&&(/^(mceAddUndoLevel|mceEndUndoLevel)$/i.test(r)||c?yw(s):s.focus());const a=s.dispatch("BeforeExecCommand",{command:t,ui:e,value:n});if(a.isDefaultPrevented())return false;const i=this.commands.exec[r];if(R(i)){i(r,e,n,o);s.dispatch("ExecCommand",{command:t,ui:e,value:n,args:o});return true}return false}
/**
     * Queries the current state for a command. For example: If the current selection is "bold".
     *
     * @method queryCommandState
     * @param {String} command Command to check the state of.
     * @return {Boolean} true/false - For example: If the selected contents is bold or not.
     */queryCommandState(t){if(!T3(t)&&this.editor.quirks.isHidden()||this.editor.removed)return false;const e=t.toLowerCase();const n=this.commands.state[e];return!!R(n)&&n(e)}
/**
     * Returns a command specific value, for example the current font size.
     *
     * @method queryCommandValue
     * @param {String} command Command to query value from.
     * @return {String} Command value, for example the current font size or an empty string (`""`) if the query command is not found.
     */queryCommandValue(t){if(!T3(t)&&this.editor.quirks.isHidden()||this.editor.removed)return"";const e=t.toLowerCase();const n=this.commands.value[e];return R(n)?n(e):""}addCommands(t,e="exec"){const n=this.commands;kt(t,((t,o)=>{J(o.toLowerCase().split(","),(o=>{n[e][o]=t}))}))}addCommand(t,e,n){const o=t.toLowerCase();this.commands.exec[o]=(t,o,s,r)=>e.call(n??this.editor,o,s,r)}
/**
     * Removes a command from the command collection.
     *
     * @method removeCommand
     * @param {String} command Command name to remove.
     * @param {String} type Optional type to remove, defaults to removing all types. Can be 'exec', 'state', 'value', or omitted for all.
     */removeCommand(t,e){const n=t.toLowerCase();if(e)delete this.commands[e][n];else{delete this.commands.exec[n];delete this.commands.state[n];delete this.commands.value[n]}}
/**
     * Returns true/false if the command is supported or not.
     *
     * @method queryCommandSupported
     * @param {String} command Command that we check support for.
     * @return {Boolean} true/false if the command is supported or not.
     */queryCommandSupported(t){const e=t.toLowerCase();return!!this.commands.exec[e]}addQueryStateHandler(t,e,n){this.commands.state[t.toLowerCase()]=()=>e.call(n??this.editor)}addQueryValueHandler(t,e,n){this.commands.value[t.toLowerCase()]=()=>e.call(n??this.editor)}}const B3=co.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel"," ");class EventDispatcher{
/**
     * Returns true/false if the specified event name is a native browser event or not.
     *
     * @method isNative
     * @param {String} name Name to check if it's native.
     * @return {Boolean} true/false if the event is native or not.
     * @static
     */
static isNative(t){return!!B3[t.toLowerCase()]}settings;scope;toggleEvent;bindings={};constructor(t){this.settings=t||{};this.scope=this.settings.scope||this;this.toggleEvent=this.settings.toggleEvent||H}
/**
     * Fires the specified event by name.
     * <br>
     * <em>Marked for removal in TinyMCE 8.0. Use <code>dispatch</code> instead.</em>
     *
     * @method fire
     * @param {String} name Name of the event to fire.
     * @param {Object?} args Event arguments.
     * @return {Object} Event args instance passed in.
     * @deprecated Use dispatch() instead
     * @example
     * instance.fire('event', {...});
     */fire(t,e){return this.dispatch(t,e)}
/**
     * Dispatches the specified event by name.
     *
     * @method dispatch
     * @param {String} name Name of the event to dispatch
     * @param {Object?} args Event arguments.
     * @return {Object} Event args instance passed in.
     * @example
     * instance.dispatch('event', {...});
     */dispatch(t,e){const n=t.toLowerCase();const o=nd(n,e??{},this.scope);this.settings.beforeFire&&this.settings.beforeFire(o);const s=this.bindings[n];if(s)for(let t=0,e=s.length;t<e;t++){const e=s[t];if(!e.removed){e.once&&this.off(n,e.func);if(o.isImmediatePropagationStopped())return o;if(e.func.call(this.scope,o)===false){o.preventDefault();return o}}}return o}
/**
     * Binds an event listener to a specific event by name.
     *
     * @method on
     * @param {String} name Event name or space separated list of events to bind.
     * @param {Function} callback Callback to be executed when the event occurs.
     * @param {Boolean} prepend Optional flag if the event should be prepended. Use this with care.
     * @return {Object} Current class instance.
     * @example
     * instance.on('event', (e) => {
     *   // Callback logic
     * });
     */on(t,e,n,o){e===false&&(e=H);if(e){const s={func:e,removed:false};o&&co.extend(s,o);const r=t.toLowerCase().split(" ");let c=r.length;while(c--){const t=r[c];let e=this.bindings[t];if(!e){e=[];this.toggleEvent(t,true)}e=n?[s,...e]:[...e,s];this.bindings[t]=e}}return this}
/**
     * Unbinds an event listener to a specific event by name.
     *
     * @method off
     * @param {String?} name Name of the event to unbind.
     * @param {Function?} callback Callback to unbind.
     * @return {Object} Current class instance.
     * @example
     * // Unbind specific callback
     * instance.off('event', handler);
     *
     * // Unbind all listeners by name
     * instance.off('event');
     *
     * // Unbind all events
     * instance.off();
     */off(t,e){if(t){const n=t.toLowerCase().split(" ");let o=n.length;while(o--){const s=n[o];let r=this.bindings[s];if(!s){kt(this.bindings,((t,e)=>{this.toggleEvent(e,false);delete this.bindings[e]}));return this}if(r){if(e){const t=et(r,(t=>t.func===e));r=t.fail;this.bindings[s]=r;J(t.pass,(t=>{t.removed=true}))}else r.length=0;if(!r.length){this.toggleEvent(t,false);delete this.bindings[s]}}}}else{kt(this.bindings,((t,e)=>{this.toggleEvent(e,false)}));this.bindings={}}return this}
/**
     * Binds an event listener to a specific event by name
     * and automatically unbind the event once the callback fires.
     *
     * @method once
     * @param {String} name Event name or space separated list of events to bind.
     * @param {Function} callback Callback to be executed when the event occurs.
     * @param {Boolean} prepend Optional flag if the event should be prepended. Use this with care.
     * @return {Object} Current class instance.
     * @example
     * instance.once('event', (e) => {
     *   // Callback logic
     * });
     */once(t,e,n){return this.on(t,e,n,{once:true})}
/**
     * Returns true/false if the dispatcher has a event of the specified name.
     *
     * @method has
     * @param {String} name Name of the event to check for.
     * @return {Boolean} true/false if the event exists or not.
     */has(t){t=t.toLowerCase();const e=this.bindings[t];return!(!e||e.length===0)}}const L3=t=>{t._eventDispatcher||(t._eventDispatcher=new EventDispatcher({scope:t,toggleEvent:(e,n)=>{EventDispatcher.isNative(e)&&t.toggleNativeEvent&&t.toggleNativeEvent(e,n)}}));return t._eventDispatcher};const P3={
/**
     * Fires the specified event by name. Consult the
     * <a href="https://www.tiny.cloud/docs/tinymce/8/events/">event reference</a> for more details on each event.
     * <br>
     * <em>Deprecated in TinyMCE 6.0 and has been marked for removal in TinyMCE 9.0. Use <code>dispatch</code> instead.</em>
     *
     * @method fire
     * @param {String} name Name of the event to fire.
     * @param {Object?} args Event arguments.
     * @param {Boolean?} bubble True/false if the event is to be bubbled.
     * @return {Object} Event args instance passed in.
     * @deprecated Use dispatch() instead
     * @example
     * instance.fire('event', {...});
     */
fire(t,e,n){WD("fire");return this.dispatch(t,e,n)},
/**
     * Dispatches the specified event by name. Consult the
     * <a href="https://www.tiny.cloud/docs/tinymce/8/events/">event reference</a> for more details on each event.
     *
     * @method dispatch
     * @param {String} name Name of the event to dispatch.
     * @param {Object?} args Event arguments.
     * @param {Boolean?} bubble True/false if the event is to be bubbled.
     * @return {Object} Event args instance passed in.
     * @example
     * instance.dispatch('event', {...});
     */
dispatch(e,n,o){const s=this||t;if(s.removed&&e!=="remove"&&e!=="detach")return nd(e.toLowerCase(),n??{},s);const r=L3(s).dispatch(e,n);if(o!==false&&s.parent){let t=s.parent();while(t&&!r.isPropagationStopped()){t.dispatch(e,r,false);t=t.parent?t.parent():void 0}}return r},
/**
     * Binds an event listener to a specific event by name. Consult the
     * <a href="https://www.tiny.cloud/docs/tinymce/8/events/">event reference</a> for more details on each event.
     *
     * @method on
     * @param {String} name Event name or space separated list of events to bind.
     * @param {Function} callback Callback to be executed when the event occurs.
     * @param {Boolean} prepend Optional flag if the event should be prepended. Use this with care.
     * @return {Object} Current class instance.
     * @example
     * instance.on('event', (e) => {
     *   // Callback logic
     * });
     */
on(e,n,o){return L3(this||t).on(e,n,o)},
/**
     * Unbinds an event listener to a specific event by name. Consult the
     * <a href="https://www.tiny.cloud/docs/tinymce/8/events/">event reference</a> for more details on each event.
     *
     * @method off
     * @param {String?} name Name of the event to unbind.
     * @param {Function?} callback Callback to unbind.
     * @return {Object} Current class instance.
     * @example
     * // Unbind specific callback
     * instance.off('event', handler);
     *
     * // Unbind all listeners by name
     * instance.off('event');
     *
     * // Unbind all events
     * instance.off();
     */
off(e,n){return L3(this||t).off(e,n)},
/**
     * Bind the event callback and once it fires the callback is removed. Consult the
     * <a href="https://www.tiny.cloud/docs/tinymce/8/events/">event reference</a> for more details on each event.
     *
     * @method once
     * @param {String} name Name of the event to bind.
     * @param {Function} callback Callback to bind only once.
     * @return {Object} Current class instance.
     */
once(e,n){return L3(this||t).once(e,n)},
/**
     * Returns true/false if the object has a event of the specified name.
     *
     * @method hasEventListeners
     * @param {String} name Name of the event to check for.
     * @return {Boolean} true/false if the event exists or not.
     */
hasEventListeners(e){return L3(this||t).has(e)}};const M3=wd.DOM;let I3;
/**
   * Returns the event target for the specified event. Some events fire
   * only on document, some fire on documentElement etc. This also handles the
   * custom event root setting where it returns that element instead of the body.
   *
   * @private
   * @param {tinymce.Editor} editor Editor instance to get event target from.
   * @param {String} eventName Name of the event for example "click".
   * @return {Element/Document} HTML Element or document target to bind on.
   */const F3=(t,e)=>{if(e==="selectionchange")return t.getDoc();if(!t.inline&&/^(?:mouse|touch|click|contextmenu|drop|dragover|dragend)/.test(e))return t.getDoc().documentElement;const n=mh(t);if(n){t.eventRoot||(t.eventRoot=M3.select(n)[0]);return t.eventRoot}return t.getBody()};const U3=t=>!t.hidden&&!oI(t);const z3=(t,e,n)=>{U3(t)?t.dispatch(e,n):oI(t)&&gI(t,n)};
/**
   * Binds a event delegate for the specified name this delegate will fire
   * the event to the editor dispatcher.
   *
   * @private
   * @param {tinymce.Editor} editor Editor instance to get event target from.
   * @param {String} eventName Name of the event for example "click".
   */const $3=(t,e)=>{t.delegates||(t.delegates={});if(t.delegates[e]||t.removed)return;const n=F3(t,e);if(mh(t)){if(!I3){I3={};t.editorManager.on("removeEditor",(()=>{if(!t.editorManager.activeEditor&&I3){kt(I3,((e,n)=>{t.dom.unbind(F3(t,n))}));I3=null}}))}if(I3[e])return;const o=n=>{const o=n.target;const s=t.editorManager.get();let r=s.length;while(r--){const t=s[r].getBody();(t===o||M3.isChildOf(o,t))&&z3(s[r],e,n)}};I3[e]=o;M3.bind(n,e,o)}else{const o=n=>{z3(t,e,n)};M3.bind(n,e,o);t.delegates[e]=o}};const j3={...P3,bindPendingEventDelegates(){const e=this||t;co.each(e._pendingNativeEvents,(t=>{$3(e,t)}))},toggleNativeEvent(e,n){const o=this||t;if(e!=="focus"&&e!=="blur"&&!o.removed)if(n)o.initialized?$3(o,e):o._pendingNativeEvents?o._pendingNativeEvents.push(e):o._pendingNativeEvents=[e];else if(o.initialized&&o.delegates){o.dom.unbind(F3(o,e),e,o.delegates[e]);delete o.delegates[e]}},unbindAllNativeEvents(){const e=this||t;const n=e.getBody();const o=e.dom;if(e.delegates){kt(e.delegates,((t,n)=>{e.dom.unbind(F3(e,n),n,t)}));delete e.delegates}if(!e.inline&&n&&o){n.onload=null;o.unbind(e.getWin());o.unbind(e.getDoc())}if(o){o.unbind(n);o.unbind(e.getContainer())}}};const H3=t=>C(t)?{value:t.split(/[ ,]/),valid:true}:D(t,C)?{value:t,valid:true}:{valid:false,message:"The value must be a string[] or a comma/space separated string."};const W3=t=>{const e=(()=>{switch(t){case"array":return E;case"boolean":return k;case"function":return R;case"number":return A;case"object":return w;case"string":return C;case"string[]":return H3;case"object[]":return t=>D(t,w);case"regexp":return t=>v(t,RegExp);default:return W}})();return n=>Y3(n,e,`The value must be a ${t}.`)};const V3=t=>C(t.processor);const q3=(t,e)=>{const n=Ne(e.message)?"":`. ${e.message}`;return t+n};const K3=t=>t.valid;const Y3=(t,e,n="")=>{const o=e(t);return k(o)?o?{value:t,valid:true}:{valid:false,message:n}:o};const G3=(t,e,n)=>{if(!S(e)){const o=Y3(e,n);if(K3(o))return o.value;console.error(q3(`Invalid default value passed for the "${t}" option`,o))}};const X3=(t,e,n=e)=>{const o={};const s={};const r=(t,e,n)=>{const o=Y3(e,n);if(K3(o)){s[t]=o.value;return true}console.warn(q3(`Invalid value passed for the ${t} option`,o));return false};const c=(t,n)=>{const c=V3(n)?W3(n.processor):n.processor;const a=G3(t,n.default,c);o[t]={...n,default:a,processor:c};const i=Lt(s,t).orThunk((()=>Lt(e,t)));i.each((e=>r(t,e,c)))};const a=t=>Pt(o,t);const i=t=>Lt(s,t).orThunk((()=>Lt(o,t).map((t=>t.default)))).getOrUndefined();const l=(t,e)=>{if(a(t)){const n=o[t];if(n.immutable){console.error(`"${t}" is an immutable option and cannot be updated`);return false}return r(t,e,n.processor)}console.warn(`"${t}" is not a registered option. Ensure the option has been registered before setting a value.`);return false};const d=t=>{const e=a(t);e&&delete s[t];return e};const u=t=>Pt(s,t);const m=()=>{try{console.log(JSON.parse(JSON.stringify(n,((t,e)=>k(e)||A(e)||C(e)||x(e)||E(e)||O(e)?e:Object.prototype.toString.call(e)))))}catch(t){console.error(t)}};return{register:c,isRegistered:a,get:i,set:l,unset:d,isSet:u,debug:m}};const Q3=(t,e)=>{t.dom.contentEditable=e?"true":"false"};const Z3=(t,e)=>{const n=fo.fromDom(t.getBody());if(e){t.readonly=true;t.hasEditableRoot()&&Q3(n,true);eI(t)}else{t.readonly=false;nI(t)}};const J3=t=>t.readonly;const t8=t=>{const e=t.undoManager.add();if(N(e)){t.undoManager.undo();t.undoManager.reset()}};const e8=t=>Q(t,(t=>t.type==="characterData"||t.type==="childList"));const n8=t=>{const e=e=>{J3(t)&&e8(e)&&t8(t)};const n=new MutationObserver(e);t.on("beforeinput paste cut dragend dragover draggesture dragdrop drop drag",(e=>{J3(t)&&e.preventDefault()}));t.on("BeforeExecCommand",(e=>{e.command!=="Undo"&&e.command!=="Redo"||!J3(t)||e.preventDefault()}));t.on("compositionstart",(()=>{J3(t)&&n.observe(t.getBody(),{characterData:true,childList:true,subtree:true})}));t.on("compositionend",(()=>{if(J3(t)){const t=n.takeRecords();e(t)}n.disconnect()}))};const o8=["design","readonly"];const s8=(t,e,n,o)=>{const s=n[e.get()];const r=n[o];try{r.activate()}catch(t){console.error(`problem while activating editor mode ${o}:`,t);return}s.deactivate();s.editorReadOnly!==r.editorReadOnly&&Z3(t,r.editorReadOnly);e.set(o);Gp(t,o)};const r8=(t,e,n,o)=>{if(!(o===n.get()||t.initialized&&oI(t))){if(!Pt(e,o))throw new Error(`Editor mode '${o}' is invalid`);t.initialized?s8(t,n,e,o):t.on("init",(()=>s8(t,n,e,o)))}};const c8=(t,e,n)=>{if(X(o8,e))throw new Error(`Cannot override default mode ${e}`);return{...t,[e]:{...n,deactivate:()=>{try{n.deactivate()}catch(t){console.error(`problem while deactivating editor mode ${e}:`,t)}}}}};const a8=t=>{const e=zt("design");const n=zt({design:{activate:T,deactivate:T,editorReadOnly:false},readonly:{activate:T,deactivate:T,editorReadOnly:true}});n8(t);bI(t);return{isReadOnly:()=>J3(t),set:o=>r8(t,n.get(),e,o),get:()=>e.get(),register:(t,e)=>{n.set(c8(n.get(),t,e))}}};const i8=co.each,l8=co.explode;const d8={f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123};const u8=co.makeMap("alt,ctrl,shift,meta,access");const m8=t=>t in u8;const f8=t=>{const e={};const n=Gn.os.isMacOS()||Gn.os.isiOS();i8(l8(t.toLowerCase(),"+"),(t=>{if(m8(t))e[t]=true;else if(/^[0-9]{2,}$/.test(t))e.keyCode=parseInt(t,10);else{e.charCode=t.charCodeAt(0);e.keyCode=d8[t]||t.toUpperCase().charCodeAt(0)}}));const o=[e.keyCode];let s;for(s in u8)e[s]?o.push(s):e[s]=false;e.id=o.join(",");if(e.access){e.alt=true;n?e.ctrl=true:e.shift=true}if(e.meta)if(n)e.meta=true;else{e.ctrl=true;e.meta=false}return e};class Shortcuts{editor;shortcuts={};pendingPatterns=[];constructor(t){this.editor=t;const e=this;t.on("keyup keypress keydown",(t=>{if((e.hasModifier(t)||e.isFunctionKey(t))&&!t.isDefaultPrevented()){i8(e.shortcuts,(n=>{if(e.matchShortcut(t,n)){e.pendingPatterns=n.subpatterns.slice(0);t.type==="keydown"&&e.executeShortcutAction(n)}}));if(e.matchShortcut(t,e.pendingPatterns[0])){e.pendingPatterns.length===1&&t.type==="keydown"&&e.executeShortcutAction(e.pendingPatterns[0]);e.pendingPatterns.shift()}}}))}
/**
     * Adds a keyboard shortcut for some command or function.
     *
     * @method add
     * @param {String} pattern Shortcut pattern. Like for example: ctrl+alt+o.
     * @param {String} desc Text description for the command.
     * @param {String/Function} cmdFunc Command name string or function to execute when the key is pressed.
     * @param {Object} scope Optional scope to execute the function in.
     * @return {Boolean} true/false state if the shortcut was added or not.
     */add(t,e,n,o){const s=this;const r=s.normalizeCommandFunc(n);i8(l8(co.trim(t)),(t=>{const n=s.createShortcut(t,e,r,o);s.shortcuts[n.id]=n}));return true}
/**
     * Remove a keyboard shortcut by pattern.
     *
     * @method remove
     * @param {String} pattern Shortcut pattern. Like for example: ctrl+alt+o.
     * @return {Boolean} true/false state if the shortcut was removed or not.
     */remove(t){const e=this.createShortcut(t);if(this.shortcuts[e.id]){delete this.shortcuts[e.id];return true}return false}normalizeCommandFunc(t){const e=this;const n=t;return typeof n==="string"?()=>{e.editor.execCommand(n,false,null)}:co.isArray(n)?()=>{e.editor.execCommand(n[0],n[1],n[2])}:n}createShortcut(t,e,n,o){const s=co.map(l8(t,">"),f8);s[s.length-1]=co.extend(s[s.length-1],{func:n,scope:o||this.editor});return co.extend(s[0],{desc:this.editor.translate(e),subpatterns:s.slice(1)})}hasModifier(t){return t.altKey||t.ctrlKey||t.metaKey}isFunctionKey(t){return t.type==="keydown"&&t.keyCode>=112&&t.keyCode<=123}matchShortcut(t,e){if(!e)return false;if(e.ctrl!==t.ctrlKey||e.meta!==t.metaKey)return false;if(e.alt!==t.altKey||e.shift!==t.shiftKey)return false;if(t.keyCode===e.keyCode||t.charCode&&t.charCode===e.charCode){t.preventDefault();return true}return false}executeShortcutAction(t){return t.func?t.func.call(t.scope):null}}const p8=()=>{const t=iY();return{
/**
       * Registers a new auto completer component. When a configured string pattern
       * is matched in the content while typing, the autocompleter will be triggered.
       * Emoticons and Charmap use an autocompleter.
       * <br>
       * For information on creating an autocompleter, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/autocompleter/">
       * UI Components - Autocompleter</a>.
       *
       * @method addAutocompleter
       * @param {String} name Unique name identifying this autocomplete configuration.
       * @param {InlineContent.AutocompleterSpec} obj The autocomplete configuration object.
       */
addAutocompleter:t.addAutocompleter,
/**
       * Registers a new toolbar button that executes a command when clicked or activated
       * via keyboard navigation controls.
       * <br>
       * For information on creating a basic toolbar button, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-basic-toolbar-button/">
       * UI Components - Types of toolbar buttons: Basic button</a>.
       *
       * @method addButton
       * @param {String} name Unique name identifying the button, this button name will be used in the toolbar configuration to reference the button.
       * @param {Toolbar.ToolbarButtonSpec} obj the button configuration object.
       */
addButton:t.addButton,
/**
       * Registers a new contextual form item.
       * Similar to a context menu item, a contextual form is an item with an input
       * form element appearing when a content predicate is matched. An example
       * of a contextual form is the link plugin when the configuration
       * { link_context_toolbar: true } is used. When the cursor is on a link, a
       * contextual input form appears allowing for quick changes to the url field.
       * <br>
       * For information on creating context forms, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/contextform/">
       * UI Components - Context forms</a>.
       *
       * @method addContextForm
       * @param {String} name Unique name identifying the new contextual form item.
       * @param {Toolbar.ContextFormSpec} obj the context form configuration object.
       */
addContextForm:t.addContextForm,
/**
       * Registers a new context menu section that only appears when a content predicate is matched,
       * for example, the cursor is inside a table.
       * <br>
       * For information on creating context menus, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/contextmenu/">
       * UI Components - Context Menu</a>.
       *
       * @method addContextMenu
       * @param {String} name Unique name identifying the new context menu.
       * @param {Menu.ContextMenuSpec} obj The context menu configuration object.
       */
addContextMenu:t.addContextMenu,
/**
       * Registers a new context toolbar that only appears when a content predicate is matched for example
       * the cursor is on an image element.
       * <br>
       * For information on creating context toolbars, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/contexttoolbar/">
       * UI Components - Context Toolbar</a>.
       *
       * @method addContextToolbar
       * @param {String} name Unique name identifying the new context toolbar.
       * @param {Toolbar.ContextToolbarSpec} obj The context menu configuration object.
       */
addContextToolbar:t.addContextToolbar,
/**
       * Registers a new SVG icon. The icon name reference can be configured by any
       * TinyMCE UI components that can display an icon. The icon is only available
       * to the editor instance it was configured for.
       *
       * @method addIcon
       * @param {String} name Unique name identifying the new icon.
       * @param {String} svgData The SVG data string the browser will use to render the SVG icon.
       * @example
       * //To add a simple triangle icon:
       * editor.ui.registry.addIcon('triangleUp', '<svg height="24" width="24"><path d="M12 0 L24 24 L0 24 Z" /></svg>');
       */
addIcon:t.addIcon,
/**
       * Registers a new menu button. Adds a toolbar button that opens a menu when
       * clicked. The menu can be populated by items created by addMenuItem,
       * addNestedMenuItem or addToggleMenuItem.
       * <br>
       * For information on creating a toolbar menu button, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-menu-toolbar-button/">
       * UI Components - Types of toolbar buttons: Menu button</a>.
       *
       * @method addMenuButton
       * @param {String} name Unique name identifying the new menu button.
       * @param {Toolbar.ToolbarMenuButtonSpec} obj The menu button configuration object.
       */
addMenuButton:t.addMenuButton,
/**
       * Registers a new menu item that executes a command when clicked or activated
       * via keyboard navigation controls.
       * <br>
       * For information on creating a basic menu item, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/creating-custom-menu-items/">
       * UI Components - Custom menu items: Basic menu items</a>.
       *
       * @method addMenuItem
       * @param {String} name Unique name identifying the new menu item.
       * @param {Menu.MenuItemSpec} obj The menu item configuration object.
       */
addMenuItem:t.addMenuItem,
/**
       * Registers a new menu item that reveals a submenu when clicked or activated
       * by keyboard navigation controls.The submenu can be populated by items
       * created by addMenuItem, addNestedMenuItem or addToggleMenuItem.
       * <br>
       * For information on creating a nested menu item, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-nested-menu-items/">
       * UI Components - Custom menu items: Nested menu items</a>.
       *
       * @method addNestedMenuItem
       * @param {String} name Unique name identifying the new nested menu item.
       * @param {Menu.NestedMenuItemSpec} obj The nested menu item configuration object.
       */
addNestedMenuItem:t.addNestedMenuItem,
/**
       * Registers a new sidebar container.
       * This sidebar container is attached to the right side of the editor and
       * can be toggled open or closed. When registered, a new toolbar toggle
       * button with the same sidebar name is created. Additionally there is a
       * ToggleSidebar command and a 'ToggleSidebar' event that can used to
       * manage the sidebar open/closed state. The tinycomments plugin uses a
       * sidebar for its Ui components.
       * <br>
       * For information on creating a custom sidebar, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/customsidebar/">
       * UI Components - Custom sidebar</a>.
       *
       * @method addSidebar
       * @param {String} name Unique name identifying the new sidebar.
       * @param {Sidebar.SidebarSpec} obj The sidebar configuration object.
       */
addSidebar:t.addSidebar,
/**
       * Registers a new split button for the toolbar. The list styles plugin uses
       * a split button to simplify its functionality.
       * <br>
       * For information on creating a split toolbar button, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-split-toolbar-button/">
       * UI Components - Types of toolbar buttons: Split button</a>.
       *
       * @method addSplitButton
       * @param {String} name Unique name identifying the new split button.
       * @param {Toolbar.ToolbarSplitButtonSpec} obj The split button configuration object.
       */
addSplitButton:t.addSplitButton,
/**
       * Registers a new toggle button for the toolbar. A toggle buttons state can
       * be set in the configuration.
       * <br>
       * For information on creating a toggle toolbar button, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-toggle-toolbar-button/">
       * UI Components - Types of toolbar buttons: Toggle button</a>.
       *
       * @method addToggleButton
       * @param {String} name Unique name identifying the new split button.
       * @param {Toolbar.ToolbarToggleButtonSpec} obj The toggle button configuration object.
       */
addToggleButton:t.addToggleButton,
/**
       * Registers a new group toolbar button for the toolbar. Renders a toolbar button that opens a floating toolbar when
       * clicked.
       * <br>
       * <strong>Note:</strong> Group toolbar buttons can only be used when using the floating toolbar mode.
       * <br>
       * For information on creating a group toolbar button, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-group-toolbar-button/">
       * UI Components - Types of toolbar buttons: Group toolbar button</a>.
       *
       * @method addGroupToolbarButton
       * @param {String} name Unique name identifying the new group toolbar button.
       * @param {Toolbar.GroupToolbarButtonSpec} obj The group toolbar button configuration object.
       */
addGroupToolbarButton:t.addGroupToolbarButton,
/**
       * Registers a new menu item that will act like a toggle button,
       * showing a tick in the menu item to represent state.
       * <br>
       * For information on creating a toggle menu item, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-toggle-menu-items/">
       * UI Components - Custom menu items: Toggle menu items</a>.
       *
       * @method addToggleMenuItem
       * @param {String} name Unique name identifying the new menu item.
       * @param {Menu.ToggleMenuItemSpec} obj The menu item configuration object.
       */
addToggleMenuItem:t.addToggleMenuItem,
/**
       * Registers a new view container.
       * This view container is hidden (off) by default and attached next to the main view.
       * It can be toggled on or off.
       * When it is on, the main editor view is hidden and the specific view is shown.
       * When it is off, the specific view is hidden and the main view is shown.
       * There is also a ToggleView command.
       * The ToggleView command can toggle the view visibility.
       * The ToggleView command can be queried for its current state.
       * <br>
       * For information on creating a custom view, see:
       * <a href="https://www.tiny.cloud/docs/tinymce/8/custom-view/">
       * UI Components - Custom view</a>.
       *
       * @method addView
       * @param {String} name Unique name identifying the new view.
       * @param {View.ViewSpec} obj The view configuration object.
       */
addView:t.addView,
/**
       * Registers a new context configuration in the registry.
       * The registry stores all context configurations.
       * The buttons in editor configuration object can contain a context property.
       * These button specifications can use the registered contexts to determine
       * whether to enable or disable the buttons based on the current context.
       *
       * @method addContext
       * @param {String} name Unique name identifying the new context configuration.
       * @param {Function} pred A predicate function that determines if the context is active
       */
addContext:t.addContext,getAll:t.getAll}};const g8=wd.DOM;const h8=co.extend,b8=co.each;class Editor{baseUri;
/**
     * Editor instance id, normally the same as the div/textarea that was replaced.
     *
     * @property id
     * @type String
     */
id;
/**
     * A uuid string to uniquely identify an editor across any page.
     *
     * @property editorUid
     * @type String
     */
editorUid;
/**
     * Name/Value object containing plugin instances.
     *
     * @property plugins
     * @type Object
     * @example
     * // Execute a method inside a plugin directly
     * tinymce.activeEditor.plugins.someplugin.someMethod();
     */
plugins={};
/**
     * URI object to document configured for the TinyMCE instance.
     *
     * @property documentBaseURI
     * @type tinymce.util.URI
     * @example
     * // Get relative URL from the location of document_base_url
     * tinymce.activeEditor.documentBaseURI.toRelative('/somedir/somefile.htm');
     *
     * // Get absolute URL from the location of document_base_url
     * tinymce.activeEditor.documentBaseURI.toAbsolute('somefile.htm');
     */
documentBaseURI;
/**
     * URI object to current document that holds the TinyMCE editor instance.
     *
     * @property baseURI
     * @type tinymce.util.URI
     * @example
     * // Get relative URL from the location of the API
     * tinymce.activeEditor.baseURI.toRelative('/somedir/somefile.htm');
     *
     * // Get absolute URL from the location of the API
     * tinymce.activeEditor.baseURI.toAbsolute('somefile.htm');
     */
baseURI;
/**
     * Array with CSS files to load into the iframe.
     *
     * @property contentCSS
     * @type Array
     */
contentCSS=[];
/**
     * Array of CSS styles to add to head of document when the editor loads.
     *
     * @property contentStyles
     * @type Array
     */
contentStyles=[];
/**
     * Editor ui components
     *
     * @property ui
     * @type tinymce.editor.ui.Ui
     */
ui;
/**
     * Editor mode API
     *
     * @property mode
     * @type tinymce.EditorMode
     */
mode;
/**
     * Editor options API
     *
     * @property options
     * @type tinymce.EditorOptions
     */
options;
/**
     * Editor upload API
     *
     * @property editorUpload
     * @type tinymce.EditorUpload
     */
editorUpload;
/**
     * Editor user lookup API
     *
     * @property userLookup
     * @type tinymce.UserLookup
     */
userLookup;shortcuts;loadedCSS={};editorCommands;suffix;editorManager;hidden;inline;hasVisual;isNotDirty=false;annotator;bodyElement;bookmark;composing=false;container;contentAreaContainer;contentDocument;contentWindow;delegates;destroyed=false;dom;editorContainer;eventRoot;formatter;formElement;formEventDelegate;hasHiddenInput=false;iframeElement=null;iframeHTML;initialized=false;notificationManager;orgDisplay;orgVisibility;parser;quirks;readonly=false;removed=false;schema;selection;serializer;startContent="";targetElm;theme;model;undoManager;windowManager;licenseKeyManager;_beforeUnload;_eventDispatcher;_nodeChangeDispatcher;_pendingNativeEvents=[];_selectionOverrides;_skinLoaded=false;_editableRoot=true;bindPendingEventDelegates;toggleNativeEvent;unbindAllNativeEvents;fire;dispatch;on;off;once;hasEventListeners;
/**
     * Constructs a editor instance by id.
     *
     * @constructor
     * @method Editor
     * @param {String} id Unique id for the editor.
     * @param {Object} options Options for the editor.
     * @param {tinymce.EditorManager} editorManager EditorManager instance.
     */
constructor(t,e,n){this.editorManager=n;h8(this,j3);const o=this;this.id=t;this.editorUid=Zt();this.hidden=false;const s=U2(n.defaultOptions,e);this.options=X3(o,s,e);_g(o);this.userLookup=C2(this);const r=this.options.get;r("deprecation_warnings")&&jD(e,s);const c=r("suffix");c&&(n.suffix=c);this.suffix=n.suffix;const a=r("base_url");a&&n._setBaseUrl(a);this.baseUri=n.baseURI;const i=Zg(o);if(i){ScriptLoader.ScriptLoader._setReferrerPolicy(i);wd.DOM.styleSheetLoader._setReferrerPolicy(i)}ScriptLoader.ScriptLoader._setCrossOrigin((t=>{const e=Jg(o);return e(t,"script")}));wd.DOM.styleSheetLoader._setCrossOrigin((t=>{const e=Jg(o);return e(t,"stylesheet")}));const l=Bh(o);N(l)&&wd.DOM.styleSheetLoader._setContentCssCors(l);$d.languageLoad=r("language_load");$d.baseURL=n.baseURL;this.setDirty(false);this.documentBaseURI=new URI(Ag(o),{base_uri:this.baseUri});this.baseURI=this.baseUri;this.inline=xh(o);this.hasVisual=Ih(o);this.shortcuts=new Shortcuts(this);this.editorCommands=new EditorCommands(this);A3(this);const d=r("cache_suffix");d&&(Gn.cacheSuffix=d.replace(/^[\?\&]+/,""));this.ui={registry:p8(),styleSheetLoader:void 0,show:T,hide:T,setEnabled:T,isEnabled:W};this.mode=a8(o);Object.defineProperty(this,"editorUid",{writable:false,configurable:false,enumerable:true});n.dispatch("SetupEditor",{editor:this});const u=$h(o);R(u)&&u.call(o,o)}render(){i2(this)}
/**
     * Focuses/activates the editor. This will set this editor as the activeEditor in the tinymce collection
     * it will also place DOM focus inside the editor.
     *
     * @method focus
     * @param {Boolean} skipFocus Skip DOM focus. Just set is as the active editor.
     */focus(t){this.execCommand("mceFocus",false,t)}hasFocus(){return Yw(this)}
/**
     * Translates the specified string by replacing variables with language pack items it will also check if there is
     * a key matching the input.
     *
     * @method translate
     * @param {String} text String to translate by the language pack data.
     * @return {String} Translated string.
     */translate(t){return zd.translate(t)}getParam(t,e,n){const o=this.options;o.isRegistered(t)||(N(n)?o.register(t,{processor:n,default:e}):o.register(t,{processor:W,default:e}));return o.isSet(t)||S(e)?o.get(t):e}
/**
     * Checks that the plugin is in the editor configuration and can optionally check if the plugin has been loaded.
     *
     * @method hasPlugin
     * @param {String} name The name of the plugin, as specified for the TinyMCE `plugins` option.
     * @param {Boolean} loaded If `true`, will also check that the plugin has been loaded.
     * @return {Boolean} If `loaded` is `true`, returns `true` if the plugin is in the configuration and has been loaded. If `loaded` is `false`, returns `true` if the plugin is in the configuration, regardless of plugin load status.
     * @example
     * // Returns `true` if the Comments plugin is in the editor configuration and has loaded successfully:
     * tinymce.activeEditor.hasPlugin('tinycomments', true);
     * // Returns `true` if the Table plugin is in the editor configuration, regardless of whether or not it loads:
     * tinymce.activeEditor.hasPlugin('table');
     */hasPlugin(t,e){const n=X(Lh(this),t);return!!n&&(!e||lM.get(t)!==void 0)}
/**
     * Dispatches out a onNodeChange event to all observers. This method should be called when you
     * need to update the UI states or element path etc.
     *
     * @method nodeChanged
     * @param {Object} args Optional args to pass to NodeChange event handlers.
     */nodeChanged(t){this._nodeChangeDispatcher.nodeChanged(t)}addCommand(t,e,n){
/**
       * Callback function that gets called when a command is executed.
       *
       * @callback addCommandCallback
       * @param {Boolean} ui Display UI state true/false.
       * @param {Object} value Optional value for command.
       * @return {Boolean} True/false state if the command was handled or not.
       */
this.editorCommands.addCommand(t,e,n)}addQueryStateHandler(t,e,n){this.editorCommands.addQueryStateHandler(t,e,n)}addQueryValueHandler(t,e,n){this.editorCommands.addQueryValueHandler(t,e,n)}
/**
     * Adds a keyboard shortcut for some command or function.
     *
     * @method addShortcut
     * @param {String} pattern Shortcut pattern. Like for example: ctrl+alt+o.
     * @param {String} desc Text description for the command.
     * @param {String/Function} cmdFunc Command name string or function to execute when the key is pressed.
     * @param {Object} scope Optional scope to execute the function in.
     * @return {Boolean} true/false state if the shortcut was added or not.
     * @example
     * editor.addShortcut('ctrl+a', 'description of the shortcut', () => {});
     * editor.addShortcut('ctrl+alt+a', 'description of the shortcut', () => {});
     * // "meta" maps to Command on Mac and Ctrl on PC
     * editor.addShortcut('meta+a', 'description of the shortcut', () => {});
     * // "access" maps to Control+Option on Mac and shift+alt on PC
     * editor.addShortcut('access+a', 'description of the shortcut', () => {});
     *
     * editor.addShortcut('meta+access+c', 'Opens the code editor dialog.', () => {
     *   editor.execCommand('mceCodeEditor');
     * });
     *
     * editor.addShortcut('meta+shift+32', 'Inserts "Hello, World!" for meta+shift+space', () => {
     *   editor.execCommand('mceInsertContent', false, 'Hello, World!');
     * });
     */addShortcut(t,e,n,o){this.shortcuts.add(t,e,n,o)}
/**
     * Executes a registered command on the current instance. A list of available commands can be found in
     * the tinymce command identifiers documentation.
     *
     * @method execCommand
     * @param {String} cmd Command name to execute, for example mceLink or Bold.
     * @param {Boolean} ui Specifies if a UI (dialog) should be presented or not.
     * @param {Object/Array/String/Number/Boolean} value Optional command value, this can be anything.
     * @param {Object} args Optional arguments object.
     * @return {Boolean} true or false if the command was supported or not.
     */execCommand(t,e,n,o){return this.editorCommands.execCommand(t,e,n,o)}
/**
     * Returns a command specific state, for example if bold is enabled or not.
     *
     * @method queryCommandState
     * @param {String} cmd Command to query state from.
     * @return {Boolean} Command specific state, for example if bold is enabled or not.
     */queryCommandState(t){return this.editorCommands.queryCommandState(t)}
/**
     * Returns a command specific value, for example the current font size.
     *
     * @method queryCommandValue
     * @param {String} cmd Command to query value from.
     * @return {String} Command value, for example the current font size or an empty string (`""`) if the query command is not found.
     */queryCommandValue(t){return this.editorCommands.queryCommandValue(t)}
/**
     * Returns true/false if the command is supported or not.
     *
     * @method queryCommandSupported
     * @param {String} cmd Command that we check support for.
     * @return {Boolean} true/false if the command is supported or not.
     */queryCommandSupported(t){return this.editorCommands.queryCommandSupported(t)}show(){const t=this;if(t.hidden){t.hidden=false;if(t.inline)t.getBody().contentEditable="true";else{g8.show(t.getContainer());g8.hide(t.id)}t.load();t.dispatch("show")}}hide(){const t=this;if(!t.hidden){t.save();if(t.inline){t.getBody().contentEditable="false";t===t.editorManager.focusedEditor&&(t.editorManager.focusedEditor=null)}else{g8.hide(t.getContainer());g8.setStyle(t.id,"display",t.orgDisplay)}t.hidden=true;t.dispatch("hide")}}isHidden(){return this.hidden}
/**
     * Sets the progress state, this will display a throbber/progess for the editor.
     * This is ideal for asynchronous operations like an AJAX save call.
     *
     * @method setProgressState
     * @param {Boolean} state Boolean state if the progress should be shown or hidden.
     * @param {Number} time Optional time to wait before the progress gets shown.
     * @return {Boolean} Same as the input state.
     * @example
     * // Show progress for the active editor
     * tinymce.activeEditor.setProgressState(true);
     *
     * // Hide progress for the active editor
     * tinymce.activeEditor.setProgressState(false);
     *
     * // Show progress after 3 seconds
     * tinymce.activeEditor.setProgressState(true, 3000);
     */setProgressState(t,e){this.dispatch("ProgressState",{state:t,time:e})}
/**
     * Loads contents from the textarea, input or other element that got converted into an editor instance.
     * This method will move the contents from that textarea, input or other element into the editor by using setContent
     * so all events etc that method has will get dispatched as well.
     *
     * @method load
     * @param {Object} args Optional content object, this gets passed around through the whole load process.
     */load(t={}){const e=this;const n=e.getElement();if(!e.removed&&n){const o={...t,load:true};const s=_a(n)?n.value:n.innerHTML;e.setContent(s,o);o.no_events||e.dispatch("LoadContent",{...o,element:n})}}
/**
     * Saves the contents from an editor out to the textarea or div element that got converted into an editor instance.
     * This method will move the HTML contents from the editor into that textarea or div by getContent
     * so all events etc that method has will get dispatched as well.
     *
     * @method save
     * @param {Object} args Optional content object, this gets passed around through the whole save process.
     * @return {String} HTML string that got set into the textarea/div.
     */save(t={}){const e=this;let n=e.getElement();if(!n||!e.initialized||e.removed)return"";const o={...t,save:true,element:n};let s=e.getContent(o);const r={...o,content:s};r.no_events||e.dispatch("SaveContent",r);r.format==="raw"&&e.dispatch("RawSaveContent",r);s=r.content;if(_a(n))n.value=s;else{!t.is_removing&&e.inline||(n.innerHTML=s);const o=g8.getParent(e.id,"form");o&&b8(o.elements,(t=>{if(t.name===e.id){t.value=s;return false}return true}))}r.element=o.element=n=null;r.set_dirty!==false&&e.setDirty(false);return s}setContent(t,e){FP(this,t,e)}getContent(t){return PP(this,t)}
/**
     * Inserts content at caret position.
     *
     * @method insertContent
     * @param {String} content Content to insert.
     * @param {Object} args Optional args to pass to insert call.
     */insertContent(t,e){e&&(t=h8({content:t},e));this.execCommand("mceInsertContent",false,t)}
/**
     * Resets the editors content, undo/redo history and dirty state. If `initialContent` isn't specified, then
     * the editor is reset back to the initial start content.
     *
     * @method resetContent
     * @param {String} initialContent An optional string to use as the initial content of the editor.
     */resetContent(t){t===void 0?FP(this,this.startContent,{initial:true,format:"raw"}):FP(this,t,{initial:true});this.undoManager.reset();this.setDirty(false);this.nodeChanged()}isDirty(){return!this.isNotDirty}
/**
     * Explicitly sets the dirty state. This will fire the dirty event if the editor dirty state is changed from false to true
     * by invoking this method.
     *
     * @method setDirty
     * @param {Boolean} state True/false if the editor is considered dirty.
     * @example
     * const ajaxSave = () => {
     *   const editor = tinymce.get('elm1');
     *
     *   // Save contents using some XHR call
     *   alert(editor.getContent());
     *
     *   editor.setDirty(false); // Force not dirty state
     * }
     */setDirty(t){const e=!this.isNotDirty;this.isNotDirty=!t;t&&t!==e&&this.dispatch("dirty")}getContainer(){const t=this;t.container||(t.container=t.editorContainer||g8.get(t.id+"_parent"));return t.container}getContentAreaContainer(){return this.contentAreaContainer}getElement(){this.targetElm||(this.targetElm=g8.get(this.id));return this.targetElm}getWin(){const t=this;if(!t.contentWindow){const e=t.iframeElement;e&&(t.contentWindow=e.contentWindow)}return t.contentWindow}getDoc(){const t=this;if(!t.contentDocument){const e=t.getWin();e&&(t.contentDocument=e.document)}return t.contentDocument}getBody(){const t=this.getDoc();return this.bodyElement??t?.body??null}
/**
     * URL converter function this gets executed each time a user adds an img, a or
     * any other element that has a URL in it. This will be called both by the DOM and HTML
     * manipulation functions.
     *
     * @method convertURL
     * @param {String} url URL to convert.
     * @param {String} name Attribute name src, href etc.
     * @param {String/HTMLElement} elm Tag name or HTML DOM element depending on HTML or DOM insert.
     * @return {String} Converted URL string.
     */convertURL(t,e,n){const o=this,s=o.options.get;const r=Hh(o);if(R(r))return r.call(o,t,n,true,e);if(!s("convert_urls")||n==="link"||w(n)&&n.nodeName==="LINK"||t.indexOf("file:")===0||t.length===0)return t;const c=new URI(t);if(c.protocol!=="http"&&c.protocol!=="https"&&c.protocol!=="")return t;if(s("relative_urls"))return o.documentBaseURI.toRelative(t);t=o.documentBaseURI.toAbsolute(t,s("remove_script_host"));return t}
/**
     * Adds visual aids for tables, anchors, etc so they can be more easily edited inside the editor.
     *
     * @method addVisual
     * @param {Element} elm Optional root element to loop though to find tables, etc that needs the visual aid.
     */addVisual(t){z2(this,t)}
/**
     * Changes the editable state of the editor's root element.
     *
     * @method setEditableRoot
     * @param {Boolean} state State to set true for editable and false for non-editable.
     */setEditableRoot(t){w2(this,t)}hasEditableRoot(){return O2(this)}remove(){WP(this)}
/**
     * Destroys the editor instance by removing all events, element references or other resources
     * that could leak memory. This method will be called automatically when the page is unloaded
     * but you can also call it directly if you know what you are doing.
     *
     * @method destroy
     * @param {Boolean} automatic Optional state if the destroy is an automatic destroy or user called one.
     */destroy(t){VP(this,t)}uploadImages(){return this.editorUpload.uploadImages()}_scanForImages(){return this.editorUpload.scanForImages()}}const y8=wd.DOM;const v8=co.each;let C8=false;let w8;let O8=[];const E8=t=>{const e=t.type;v8(N8.get(),(n=>{switch(e){case"scroll":n.dispatch("ScrollWindow",t);break;case"resize":n.dispatch("ResizeWindow",t);break}}))};const x8=t=>{if(t!==C8){const e=wd.DOM;if(t){e.bind(window,"resize",E8);e.bind(window,"scroll",E8)}else{e.unbind(window,"resize",E8);e.unbind(window,"scroll",E8)}C8=t}};const k8=t=>{const e=O8;O8=nt(O8,(e=>t!==e));N8.activeEditor===t&&(N8.activeEditor=O8.length>0?O8[0]:null);N8.focusedEditor===t&&(N8.focusedEditor=null);return e.length!==O8.length};const S8=t=>{if(t&&t.initialized&&!(t.getContainer()||t.getBody()).parentNode){k8(t);t.unbindAllNativeEvents();t.destroy(true);t.removed=true}};const _8=document.compatMode!=="CSS1Compat";const N8={...P3,baseURI:null,baseURL:null,
/**
     * Object containing the options that will be passed by default to the <code>init</code> method upon each initialization of an editor. These defaults will be shallow merged with other options passed to <code>init</code>.
     *
     * @property defaultOptions
     * @type Object
     */
defaultOptions:{},documentBaseURL:null,suffix:null,
/**
     * A uuid string to anonymously identify the page tinymce is loaded in
     *
     * @property pageUid
     * @type String
     */
pageUid:Zt(),
/**
     * Major version of TinyMCE build.
     *
     * @property majorVersion
     * @type String
     */
majorVersion:"8",
/**
     * Minor version of TinyMCE build.
     *
     * @property minorVersion
     * @type String
     */
minorVersion:"3.2",
/**
     * Release date of TinyMCE build.
     *
     * @property releaseDate
     * @type String
     */
releaseDate:"2026-01-14",
/**
     * Collection of language pack data.
     *
     * @property i18n
     * @type Object
     */
i18n:zd,
/**
     * Currently active editor instance.
     *
     * @property activeEditor
     * @type tinymce.Editor
     * @example
     * tinyMCE.activeEditor.selection.getContent();
     * tinymce.EditorManager.activeEditor.selection.getContent();
     */
activeEditor:null,focusedEditor:null,setup(){const e=this||t;let n="";let o="";let s=URI.getDocumentBaseUrl(document.location);if(/^[^:]+:\/\/\/?[^\/]+\//.test(s)){s=s.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,"");/[\/\\]$/.test(s)||(s+="/")}const r=window.tinymce||window.tinyMCEPreInit;if(r){n=r.base||r.baseURL;o=r.suffix}else{const t=document.getElementsByTagName("script");for(let e=0;e<t.length;e++){const s=t[e].src||"";if(s==="")continue;const r=s.substring(s.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(s)){r.indexOf(".min")!==-1&&(o=".min");n=s.substring(0,s.lastIndexOf("/"));break}}if(!n&&document.currentScript){const t=document.currentScript.src;t.indexOf(".min")!==-1&&(o=".min");n=t.substring(0,t.lastIndexOf("/"))}}
/**
       * Base URL where the root directory if TinyMCE is located.
       *
       * @property baseURL
       * @type String
       */e.baseURL=new URI(s).toAbsolute(n);
/**
       * Document base URL where the current document is located.
       *
       * @property documentBaseURL
       * @type String
       */e.documentBaseURL=s;
/**
       * Absolute baseURI for the installation path of TinyMCE.
       *
       * @property baseURI
       * @type tinymce.util.URI
       */e.baseURI=new URI(e.baseURL);
/**
       * Current suffix to add to each plugin/theme that gets loaded for example ".min".
       *
       * @property suffix
       * @type String
       */e.suffix=o;Iw(e);J(["majorVersion","minorVersion","releaseDate","pageUid","_addLicenseKeyManager"],(t=>Object.defineProperty(e,t,{writable:false,configurable:false,enumerable:true})))},
/**
     * Overrides the default options for editor instances. The <code>overrideDefaults</code> method replaces the <code>defaultOptions</code>, including any set by a previous call to the <code>overrideDefaults</code> method.
     * <br /><br />
     * When using the Tiny Cloud, some of these defaults are required for the cloud-based editor to function.
     * <br /><br />
     * Therefore, when using <code>overrideDefaults</code> with the cloud-based editor, any newly integrated options must be combined with the options in <code>tinymce.defaultOptions</code>.
     *
     * @method overrideDefaults
     * @param {Object} defaultOptions Default options object.
     * @example
     * const customOptions = {
     *   toolbar_sticky: true
     * };
     *
     * tinymce.overrideDefaults({
     *   ...tinymce.defaultOptions,
     *   ...customOptions
     * });
     */
overrideDefaults(e){const n=e.base_url;n&&this._setBaseUrl(n);const o=e.suffix;o&&((this||t).suffix=o);(this||t).defaultOptions=e;const s=e.plugin_base_urls;s!==void 0&&kt(s,((t,e)=>{$d.PluginManager.urls[e]=t}))},
/**
     * Initializes a set of editors. This method will create editors based on various settings.
     * <br /><br />
     * For information on basic usage of <code>init</code>, see: <a href="https://www.tiny.cloud/docs/tinymce/8/basic-setup/">Basic setup</a>.
     *
     * @method init
     * @param {Object} options Options object to be passed to each editor instance.
     * @return {Promise} Promise that gets resolved with an array of editors when all editor instances are initialized.
     * @example
     * // Initializes a editor using the longer method
     * tinymce.EditorManager.init({
     *    some_settings : 'some value'
     * });
     *
     * // Initializes a editor instance using the shorter version and with a promise
     * tinymce.init({
     *   some_settings : 'some value'
     * }).then((editors) => {
     *   ...
     * });
     */
init(e){const n=this||t;let o;const s=co.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu"," ");const r=(t,e)=>t.inline&&e.tagName.toLowerCase()in s;const c=t=>{let e=t.id;if(!e){e=Lt(t,"name").filter((t=>!y8.get(t))).getOrThunk(y8.uniqueId);t.setAttribute("id",e)}return e};const a=t=>{const o=e[t];if(o)return o.apply(n,[])};const i=t=>{if(Gn.browser.isIE()||Gn.browser.isEdge()){SM("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tiny.cloud/docs/tinymce/8/support/#supportedwebbrowsers");return[]}if(_8){SM("Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode.");return[]}return C(t.selector)?y8.select(t.selector):N(t.target)?[t.target]:[]};let l=t=>{o=t};const d=()=>{let t=0;const o=[];let s;const u=(e,r,c)=>{const a=new Editor(e,r,n);o.push(a);a.on("init",(()=>{++t===s.length&&l(o)}));a.targetElm=a.targetElm||c;a.render()};y8.unbind(window,"ready",d);a("onpageload");s=Ot(i(e));co.each(s,(t=>{S8(n.get(t.id))}));s=co.grep(s,(t=>!n.get(t.id)));s.length===0?l([]):v8(s,(t=>{r(e,t)?SM("Could not initialize inline editor on invalid inline target element",t):u(c(t),e,t)}))};y8.bind(window,"ready",d);return new Promise((t=>{o?t(o):l=e=>{t(e)}}))},
/**
     * Returns an editor instance for a given id.
     *
     * @method get
     * @param {String/Number} id The id or index of the editor instance to return.
     * @return {tinymce.Editor/Array} Editor instance or an array of editor instances.
     * @example
     * // Adds an onclick event to an editor by id
     * tinymce.get('mytextbox').on('click', (e) => {
     *   ed.windowManager.alert('Hello world!');
     * });
     *
     * // Adds an onclick event to an editor by index
     * tinymce.get(0).on('click', (e) => {
     *   ed.windowManager.alert('Hello world!');
     * });
     *
     * // Adds an onclick event to an editor by id (longer version)
     * tinymce.EditorManager.get('mytextbox').on('click', (e) => {
     *   ed.windowManager.alert('Hello world!');
     * });
     */
get(t){return arguments.length===0?O8.slice(0):C(t)?at(O8,(e=>e.id===t)).getOr(null):A(t)&&O8[t]?O8[t]:null},
/**
     * Adds an editor instance to the editor collection. This will also set it as the active editor.
     *
     * @method add
     * @param {tinymce.Editor} editor Editor instance to add to the collection.
     * @return {tinymce.Editor} The same instance that got passed in.
     */
add(e){const n=this||t;const o=n.get(e.id);if(o===e)return e;o===null&&O8.push(e);x8(true);n.activeEditor=e;n.dispatch("AddEditor",{editor:e});if(!w8){w8=t=>{const e=n.dispatch("BeforeUnload");if(e.returnValue){t.preventDefault();t.returnValue=e.returnValue;return e.returnValue}};window.addEventListener("beforeunload",w8)}return e},
/**
     * Creates an editor instance and adds it to the EditorManager collection.
     *
     * @method createEditor
     * @param {String} id Instance id to use for editor.
     * @param {Object} options Editor instance options.
     * @return {tinymce.Editor} Editor instance that got created.
     */
createEditor(e,n){return this.add(new Editor(e,n,this||t))},
/**
     * Removes a editor or editors form page.
     *
     * @example
     * // Remove all editors bound to divs
     * tinymce.remove('div');
     *
     * // Remove all editors bound to textareas
     * tinymce.remove('textarea');
     *
     * // Remove all editors
     * tinymce.remove();
     *
     * // Remove specific instance by id
     * tinymce.remove('#id');
     *
     * @method remove
     * @param {tinymce.Editor/String/Object} [selector] CSS selector or editor instance to remove.
     * @return {tinymce.Editor} The editor that got passed in will be return if it was found otherwise null.
     */
remove(e){const n=this||t;let o;if(e){if(!C(e)){o=e;if(x(n.get(o.id)))return null;k8(o)&&n.dispatch("RemoveEditor",{editor:o});O8.length===0&&window.removeEventListener("beforeunload",w8);o.remove();x8(O8.length>0);return o}v8(y8.select(e),(t=>{o=n.get(t.id);o&&n.remove(o)}))}else for(let t=O8.length-1;t>=0;t--)n.remove(O8[t])},
/**
     * Executes a specific command on the currently active editor.
     *
     * @method execCommand
     * @param {String} cmd Command to perform for example Bold.
     * @param {Boolean} ui Optional boolean state if a UI should be presented for the command or not.
     * @param {Object/String/Number/Boolean} value Optional value parameter like for example an URL to a link.
     * @return {Boolean} true/false if the command was executed or not.
     */
execCommand(e,n,o){const s=this||t;const r=w(o)?o.id??o.index:o;switch(e){case"mceAddEditor":if(!s.get(r)){const t=o.options;new Editor(r,t,s).render()}return true;case"mceRemoveEditor":{const t=s.get(r);t&&t.remove();return true}case"mceToggleEditor":{const t=s.get(r);if(!t){s.execCommand("mceAddEditor",false,o);return true}t.isHidden()?t.show():t.hide();return true}}return!!s.activeEditor&&s.activeEditor.execCommand(e,n,o)},triggerSave:()=>{v8(O8,(t=>{t.save()}))},
/**
     * Adds a language pack, this gets called by the loaded language files like en.js.
     *
     * @method addI18n
     * @param {String} code Optional language code.
     * @param {Object} items Name/value object with translations.
     */
addI18n:(t,e)=>{zd.add(t,e)},
/**
     * Translates the specified string using the language pack items.
     *
     * @method translate
     * @param {String/Array/Object} text String to translate
     * @return {String} Translated string.
     */
translate:t=>zd.translate(t),
/**
     * Sets the active editor instance and fires the deactivate/activate events.
     *
     * @method setActive
     * @param {tinymce.Editor} editor Editor instance to set as the active instance.
     */
setActive(e){const n=(this||t).activeEditor;if((this||t).activeEditor!==e){n&&n.dispatch("deactivate",{relatedTarget:e});e.dispatch("activate",{relatedTarget:n})}(this||t).activeEditor=e},_setBaseUrl(e){(this||t).baseURL=new URI((this||t).documentBaseURL).toAbsolute(e.replace(/\/+$/,""));(this||t).baseURI=new URI((this||t).baseURL)},_addLicenseKeyManager:t=>GM.add(t)};N8.setup();const R8=()=>{const t=he();const e=t=>({items:t,types:Et(t),getType:e=>Lt(t,e).getOrUndefined()});const n=e=>{t.set(e)};const o=()=>t.get().getOrUndefined();const s=t.clear;return{FakeClipboardItem:e,write:n,read:o,clear:s}};const A8=R8();const D8=Math.min,T8=Math.max,B8=Math.round;
/**
   * Returns the rect positioned based on the relative position name
   * to the target rect.
   *
   * @method relativePosition
   * @param {Rect} rect Source rect to modify into a new rect.
   * @param {Rect} targetRect Rect to move relative to based on the rel option.
   * @param {String} rel Relative position. For example: tr-bl.
   */const L8=(t,e,n)=>{let o=e.x;let s=e.y;const r=t.w;const c=t.h;const a=e.w;const i=e.h;const l=(n||"").split("");l[0]==="b"&&(s+=i);l[1]==="r"&&(o+=a);l[0]==="c"&&(s+=B8(i/2));l[1]==="c"&&(o+=B8(a/2));l[3]==="b"&&(s-=c);l[4]==="r"&&(o-=r);l[3]==="c"&&(s-=B8(c/2));l[4]==="c"&&(o-=B8(r/2));return U8(o,s,r,c)};
/**
   * Tests various positions to get the most suitable one.
   *
   * @method findBestRelativePosition
   * @param {Rect} rect Rect to use as source.
   * @param {Rect} targetRect Rect to move relative to.
   * @param {Rect} constrainRect Rect to constrain within.
   * @param {Array} rels Array of relative positions to test against.
   */const P8=(t,e,n,o)=>{for(let s=0;s<o.length;s++){const r=L8(t,e,o[s]);if(r.x>=n.x&&r.x+r.w<=n.w+n.x&&r.y>=n.y&&r.y+r.h<=n.h+n.y)return o[s]}return null};
/**
   * Inflates the rect in all directions.
   *
   * @method inflate
   * @param {Rect} rect Rect to expand.
   * @param {Number} w Relative width to expand by.
   * @param {Number} h Relative height to expand by.
   * @return {Rect} New expanded rect.
   */const M8=(t,e,n)=>U8(t.x-e,t.y-n,t.w+e*2,t.h+n*2);
/**
   * Returns the intersection of the specified rectangles.
   *
   * @method intersect
   * @param {Rect} rect The first rectangle to compare.
   * @param {Rect} cropRect The second rectangle to compare.
   * @return {Rect} The intersection of the two rectangles or null if they don't intersect.
   */const I8=(t,e)=>{const n=T8(t.x,e.x);const o=T8(t.y,e.y);const s=D8(t.x+t.w,e.x+e.w);const r=D8(t.y+t.h,e.y+e.h);return s-n<0||r-o<0?null:U8(n,o,s-n,r-o)};
/**
   * Returns a rect clamped within the specified clamp rect. This forces the
   * rect to be inside the clamp rect.
   *
   * @method clamp
   * @param {Rect} rect Rectangle to force within clamp rect.
   * @param {Rect} clampRect Rectable to force within.
   * @param {Boolean} fixedSize True/false if size should be fixed.
   * @return {Rect} Clamped rect.
   */const F8=(t,e,n)=>{let o=t.x;let s=t.y;let r=t.x+t.w;let c=t.y+t.h;const a=e.x+e.w;const i=e.y+e.h;const l=T8(0,e.x-o);const d=T8(0,e.y-s);const u=T8(0,r-a);const m=T8(0,c-i);o+=l;s+=d;if(n){r+=l;c+=d;o-=u;s-=m}r-=u;c-=m;return U8(o,s,r-o,c-s)};
/**
   * Creates a new rectangle object.
   *
   * @method create
   * @param {Number} x Rectangle x location.
   * @param {Number} y Rectangle y location.
   * @param {Number} w Rectangle width.
   * @param {Number} h Rectangle height.
   * @return {Rect} New rectangle object.
   */const U8=(t,e,n,o)=>({x:t,y:e,w:n,h:o});
/**
   * Creates a new rectangle object form a clientRects object.
   *
   * @method fromClientRect
   * @param {ClientRect} clientRect DOM ClientRect object.
   * @return {Rect} New rectangle object.
   */const z8=t=>U8(t.left,t.top,t.width,t.height);const $8={inflate:M8,relativePosition:L8,findBestRelativePosition:P8,intersect:I8,clamp:F8,create:U8,fromClientRect:z8};const j8=(t,e,n=1e3)=>{let o=false;let s=null;const r=t=>(...e)=>{if(!o){o=true;if(s!==null){window.clearTimeout(s);s=null}t.apply(null,e)}};const c=r(t);const a=r(e);const i=(...t)=>{o||s!==null||(s=window.setTimeout((()=>a.apply(null,t)),n))};return{start:i,resolve:c,reject:a}};const H8=()=>{const t={};const e={};const n={};const o=(n,o)=>{const s=`Script at URL "${o}" failed to load`;const r=`Script at URL "${o}" did not call \`tinymce.Resource.add('${n}', data)\` within 1 second`;if(t[n]!==void 0)return t[n];{const c=new Promise(((t,c)=>{const a=j8(t,c);e[n]=a.resolve;ScriptLoader.ScriptLoader.loadScript(o).then((()=>a.start(r)),(()=>a.reject(s)))}));t[n]=c;return c}};const s=(o,s)=>{if(e[o]!==void 0){e[o](s);delete e[o]}t[o]=Promise.resolve(s);n[o]=s};const r=t=>t in n;const c=e=>{delete t[e];delete n[e]};const a=t=>n[t];return{load:o,add:s,has:r,get:a,unload:c}};const W8=H8();const V8=()=>(()=>{let t={};let e=[];const n={getItem:e=>{const n=t[e];return n||null},setItem:(n,o)=>{e.push(n);t[n]=String(o)},key:t=>e[t],removeItem:n=>{e=e.filter((t=>t===n));delete t[n]},clear:()=>{e=[];t={}},length:0};Object.defineProperty(n,"length",{get:()=>e.length,configurable:false,enumerable:false});return n})();let q8;try{const t="__storage_test__";q8=window.localStorage;q8.setItem(t,t);q8.removeItem(t)}catch{q8=V8()}var K8=q8;const Y8={geom:{Rect:$8},util:{Delay:Ew,Tools:co,VK:Jw,URI:URI,EventDispatcher:EventDispatcher,Observable:P3,I18n:zd,LocalStorage:K8,ImageUploader:PI},dom:{EventUtils:EventUtils,TreeWalker:DomTreeWalker,TextSeeker:su,DOMUtils:wd,ScriptLoader:ScriptLoader,RangeUtils:wO,Serializer:TP,StyleSheetLoader:Ii,ControlSelection:cO,BookmarkManager:sw,Selection:yP,Event:EventUtils.Event},html:{Styles:Xl,Entities:ul,Node:AstNode,Schema:Il,DomParser:CD,Writer:AE,Serializer:DE},Env:Gn,AddOnManager:$d,Annotator:ow,Formatter:JI,UndoManager:oF,EditorCommands:EditorCommands,WindowManager:mM,NotificationManager:iM,EditorObservable:j3,Shortcuts:Shortcuts,Editor:Editor,FocusManager:Cw,EditorManager:N8,DOM:wd.DOM,ScriptLoader:ScriptLoader.ScriptLoader,PluginManager:lM,ThemeManager:dM,ModelManager:YP,IconManager:KP,Resource:W8,FakeClipboard:A8,trim:co.trim,isArray:co.isArray,is:co.is,toArray:co.toArray,makeMap:co.makeMap,each:co.each,map:co.map,grep:co.grep,inArray:co.inArray,extend:co.extend,walk:co.walk,resolve:co.resolve,explode:co.explode,_addCacheSuffix:co._addCacheSuffix};const G8=co.extend(N8,Y8);const X8=t=>{true;try{e=t}catch{}};const Q8=t=>{window.tinymce=t;window.tinyMCE=t};Q8(G8);X8(G8)})();var n=e;const o=e.bookmarkManager,s=e.controlSelection;export{o as bookmarkManager,s as controlSelection,n as default};

