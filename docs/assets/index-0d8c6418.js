(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function T(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function Me(t){return t()}function ve(){return Object.create(null)}function R(t){t.forEach(Me)}function Be(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ne(t,e){return t!=t?e==e:t!==e}function Fe(t){return Object.keys(t).length===0}function de(t,e,n,o){if(t){const l=Oe(t,e,n,o);return t[0](l)}}function Oe(t,e,n,o){return t[1]&&o?H(n.ctx.slice(),t[1](o(e))):n.ctx}function _e(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const i=[],r=Math.max(e.dirty.length,l.length);for(let s=0;s<r;s+=1)i[s]=e.dirty[s]|l[s];return i}return e.dirty|l}return e.dirty}function me(t,e,n,o,l,i){if(l){const r=Oe(e,n,o,i);t.p(r,l)}}function he(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let o=0;o<n;o++)e[o]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ke(t,e){const n={};e=new Set(e);for(const o in t)!e.has(o)&&o[0]!=="$"&&(n[o]=t[o]);return n}function Xe(t){const e={};for(const n in t)e[n]=!0;return e}function y(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function Q(){return V(" ")}function ge(){return V("")}function Y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function Re(t){return function(e){return e.preventDefault(),t.call(this,e)}}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ve=["width","height"];function we(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)e[o]==null?t.removeAttribute(o):o==="style"?t.style.cssText=e[o]:o==="__value"?t.value=t[o]=e[o]:n[o]&&n[o].set&&Ve.indexOf(o)===-1?t[o]=e[o]:f(t,o,e[o])}function qe(t){return Array.from(t.childNodes)}function pe(t,e){e=""+e,t.data!==e&&(t.data=e)}function Le(t,e){t.value=e??""}function G(t,e,n,o){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function k(t,e,n){t.classList[n?"add":"remove"](e)}function Je(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,o,e),l}let te;function x(t){te=t}function be(){if(!te)throw new Error("Function called outside component initialization");return te}function We(t){be().$$.on_mount.push(t)}function Ke(t){be().$$.after_update.push(t)}function Ge(){const t=be();return(e,n,{cancelable:o=!1}={})=>{const l=t.$$.callbacks[e];if(l){const i=Je(e,n,{cancelable:o});return l.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}function Qe(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(o=>o.call(this,e))}const K=[],ne=[];let Z=[];const ce=[],Ye=Promise.resolve();let fe=!1;function Ze(){fe||(fe=!0,Ye.then(Ue))}function ae(t){Z.push(t)}function $e(t){ce.push(t)}const ue=new Set;let W=0;function Ue(){if(W!==0)return;const t=te;do{try{for(;W<K.length;){const e=K[W];W++,x(e),xe(e.$$)}}catch(e){throw K.length=0,W=0,e}for(x(null),K.length=0,W=0;ne.length;)ne.pop()();for(let e=0;e<Z.length;e+=1){const n=Z[e];ue.has(n)||(ue.add(n),n())}Z.length=0}while(K.length);for(;ce.length;)ce.pop()();fe=!1,ue.clear(),x(t)}function xe(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}function et(t){const e=[],n=[];Z.forEach(o=>t.indexOf(o)===-1?e.push(o):n.push(o)),n.forEach(o=>o()),Z=e}const ie=new Set;let X;function re(){X={r:0,c:[],p:X}}function se(){X.r||R(X.c),X=X.p}function w(t,e){t&&t.i&&(ie.delete(t),t.i(e))}function E(t,e,n,o){if(t&&t.o){if(ie.has(t))return;ie.add(t),X.c.push(()=>{ie.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function tt(t,e){E(t,1,1,()=>{e.delete(t.key)})}function nt(t,e,n,o,l,i,r,s,u,a,d,h){let m=t.length,p=i.length,_=m;const j={};for(;_--;)j[t[_].key]=_;const M=[],B=new Map,b=new Map,c=[];for(_=p;_--;){const v=h(l,i,_),U=n(v);let A=r.get(U);A?o&&c.push(()=>A.p(v,e)):(A=a(U,v),A.c()),B.set(U,M[_]=A),U in j&&b.set(U,Math.abs(_-j[U]))}const g=new Set,z=new Set;function D(v){w(v,1),v.m(s,d),r.set(v.key,v),d=v.first,p--}for(;m&&p;){const v=M[p-1],U=t[m-1],A=v.key,oe=U.key;v===U?(d=v.first,m--,p--):B.has(oe)?!r.has(A)||g.has(A)?D(v):z.has(oe)?m--:b.get(A)>b.get(oe)?(z.add(A),D(v)):(g.add(oe),m--):(u(U,r),m--)}for(;m--;){const v=t[m];B.has(v.key)||u(v,r)}for(;p;)D(M[p-1]);return R(c),M}function ye(t,e){const n={},o={},l={$$scope:1};let i=t.length;for(;i--;){const r=t[i],s=e[i];if(s){for(const u in r)u in s||(o[u]=1);for(const u in s)l[u]||(n[u]=s[u],l[u]=1);t[i]=s}else for(const u in r)l[u]=1}for(const r in o)r in n||(n[r]=void 0);return n}function Ae(t){return typeof t=="object"&&t!==null?t:{}}function ot(t,e,n){const o=t.$$.props[e];o!==void 0&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function F(t){t&&t.c()}function P(t,e,n,o){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),o||ae(()=>{const r=t.$$.on_mount.map(Me).filter(Be);t.$$.on_destroy?t.$$.on_destroy.push(...r):R(r),t.$$.on_mount=[]}),i.forEach(ae)}function N(t,e){const n=t.$$;n.fragment!==null&&(et(n.after_update),R(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(K.push(t),Ze(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,o,l,i,r,s=[-1]){const u=te;x(t);const a=t.$$={fragment:null,ctx:[],props:i,update:T,not_equal:l,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ve(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(h,m,...p)=>{const _=p.length?p[0]:m;return a.ctx&&l(a.ctx[h],a.ctx[h]=_)&&(!a.skip_bound&&a.bound[h]&&a.bound[h](_),d&&lt(t,h)),m}):[],a.update(),d=!0,R(a.before_update),a.fragment=o?o(a.ctx):!1,e.target){if(e.hydrate){const h=qe(e.target);a.fragment&&a.fragment.l(h),h.forEach(L)}else a.fragment&&a.fragment.c();e.intro&&w(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Ue()}x(u)}class J{$destroy(){N(this,1),this.$destroy=T}$on(e,n){if(!Be(n))return T;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let le;const it=new Uint8Array(16);function rt(){if(!le&&(le=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!le))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return le(it)}const I=[];for(let t=0;t<256;++t)I.push((t+256).toString(16).slice(1));function st(t,e=0){return(I[t[e+0]]+I[t[e+1]]+I[t[e+2]]+I[t[e+3]]+"-"+I[t[e+4]]+I[t[e+5]]+"-"+I[t[e+6]]+I[t[e+7]]+"-"+I[t[e+8]]+I[t[e+9]]+"-"+I[t[e+10]]+I[t[e+11]]+I[t[e+12]]+I[t[e+13]]+I[t[e+14]]+I[t[e+15]]).toLowerCase()}const ut=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ce={randomUUID:ut};function Ee(t,e,n){if(Ce.randomUUID&&!e&&!t)return Ce.randomUUID();t=t||{};const o=t.random||(t.rng||rt)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,e){n=n||0;for(let l=0;l<16;++l)e[n+l]=o[l];return e}return st(o)}function ct(t){let e,n,o;return{c(){e=C("input"),f(e,"type","text"),f(e,"placeholder",t[1]),f(e,"class","svelte-1nuxuv7")},m(l,i){S(l,e,i),Le(e,t[0]),n||(o=Y(e,"input",t[2]),n=!0)},p(l,[i]){i&2&&f(e,"placeholder",l[1]),i&1&&e.value!==l[0]&&Le(e,l[0])},i:T,o:T,d(l){l&&L(e),n=!1,o()}}}function ft(t,e,n){let{value:o}=e,{placeholder:l="Hello"}=e;function i(){o=this.value,n(0,o)}return t.$$set=r=>{"value"in r&&n(0,o=r.value),"placeholder"in r&&n(1,l=r.placeholder)},[o,l,i]}class at extends J{constructor(e){super(),q(this,e,ft,ct,Ne,{value:0,placeholder:1})}}const dt=t=>({}),Se=t=>({});function Ie(t){let e,n;const o=t[10].icoLeft,l=de(o,t,t[9],Se);return{c(){e=C("div"),l&&l.c(),f(e,"class","ico-left svelte-1moa7je"),k(e,"ico-left_big",t[0]=="L"||t[0]=="M"||t[0]=="Fill"),k(e,"ico-left_small",t[0]=="S"||t[0]=="XS")},m(i,r){S(i,e,r),l&&l.m(e,null),n=!0},p(i,r){l&&l.p&&(!n||r&512)&&me(l,o,i,i[9],n?_e(o,i[9],r,dt):he(i[9]),Se),(!n||r&1)&&k(e,"ico-left_big",i[0]=="L"||i[0]=="M"||i[0]=="Fill"),(!n||r&1)&&k(e,"ico-left_small",i[0]=="S"||i[0]=="XS")},i(i){n||(w(l,i),n=!0)},o(i){E(l,i),n=!1},d(i){i&&L(e),l&&l.d(i)}}}function Te(t){let e,n;const o=t[10].default,l=de(o,t,t[9],null),i=l||_t();return{c(){e=C("span"),i&&i.c(),f(e,"class","svelte-1moa7je"),k(e,"main-text_big",t[0]=="L"||t[0]=="M"||t[0]=="Fill"),k(e,"main-text_small",t[0]=="S"||t[0]=="XS")},m(r,s){S(r,e,s),i&&i.m(e,null),n=!0},p(r,s){l&&l.p&&(!n||s&512)&&me(l,o,r,r[9],n?_e(o,r[9],s,null):he(r[9]),null),(!n||s&1)&&k(e,"main-text_big",r[0]=="L"||r[0]=="M"||r[0]=="Fill"),(!n||s&1)&&k(e,"main-text_small",r[0]=="S"||r[0]=="XS")},i(r){n||(w(i,r),n=!0)},o(r){E(i,r),n=!1},d(r){r&&L(e),i&&i.d(r)}}}function _t(t){let e;return{c(){e=V("Button")},m(n,o){S(n,e,o)},d(n){n&&L(e)}}}function mt(t){let e,n,o,l,i,r=t[6].icoLeft&&Ie(t),s=t[2]&&Te(t),u=[t[5]],a={};for(let d=0;d<u.length;d+=1)a=H(a,u[d]);return{c(){e=C("button"),r&&r.c(),n=Q(),s&&s.c(),we(e,a),k(e,"size-L",t[0]=="L"),k(e,"size-M",t[0]=="M"),k(e,"size-S",t[0]=="S"),k(e,"size-XS",t[0]=="XS"),k(e,"size-fill",t[0]=="Fill"),G(e,"background",t[4]),G(e,"color",t[1]),k(e,"svelte-1moa7je",!0)},m(d,h){S(d,e,h),r&&r.m(e,null),y(e,n),s&&s.m(e,null),e.autofocus&&e.focus(),o=!0,l||(i=[Y(e,"mouseenter",t[12]),Y(e,"mouseleave",t[13]),Y(e,"click",t[11])],l=!0)},p(d,[h]){d[6].icoLeft?r?(r.p(d,h),h&64&&w(r,1)):(r=Ie(d),r.c(),w(r,1),r.m(e,n)):r&&(re(),E(r,1,1,()=>{r=null}),se()),d[2]?s?(s.p(d,h),h&4&&w(s,1)):(s=Te(d),s.c(),w(s,1),s.m(e,null)):s&&(re(),E(s,1,1,()=>{s=null}),se()),we(e,a=ye(u,[h&32&&d[5]])),k(e,"size-L",d[0]=="L"),k(e,"size-M",d[0]=="M"),k(e,"size-S",d[0]=="S"),k(e,"size-XS",d[0]=="XS"),k(e,"size-fill",d[0]=="Fill"),G(e,"background",d[4]),G(e,"color",d[1]),k(e,"svelte-1moa7je",!0)},i(d){o||(w(r),w(s),o=!0)},o(d){E(r),E(s),o=!1},d(d){d&&L(e),r&&r.d(),s&&s.d(),l=!1,R(i)}}}function ht(t,e,n){let o;const l=["size","backgroundColor","backgroundColorHover","textColor","label"];let i=ke(e,l),{$$slots:r={},$$scope:s}=e;const u=Xe(r);let{size:a="L"}=e,{backgroundColor:d="#526ED3"}=e,{backgroundColorHover:h="#6C86E2"}=e,{textColor:m="#fff"}=e,{label:p=!0}=e,_=!1;function j(b){Qe.call(this,t,b)}const M=()=>n(3,_=!0),B=()=>n(3,_=!1);return t.$$set=b=>{e=H(H({},e),ee(b)),n(5,i=ke(e,l)),"size"in b&&n(0,a=b.size),"backgroundColor"in b&&n(7,d=b.backgroundColor),"backgroundColorHover"in b&&n(8,h=b.backgroundColorHover),"textColor"in b&&n(1,m=b.textColor),"label"in b&&n(2,p=b.label),"$$scope"in b&&n(9,s=b.$$scope)},t.$$.update=()=>{t.$$.dirty&392&&n(4,o=_?h:d)},[a,m,p,_,o,i,u,d,h,s,r,j,M,B]}class He extends J{constructor(e){super(),q(this,e,ht,mt,$,{size:0,backgroundColor:7,backgroundColorHover:8,textColor:1,label:2})}}function je(t){let e,n;return{c(){e=O("title"),n=V(t[0])},m(o,l){S(o,e,l),y(e,n)},p(o,l){l&1&&pe(n,o[0])},d(o){o&&L(e)}}}function gt(t){let e,n,o,l=t[0]&&je(t);const i=t[4].default,r=de(i,t,t[3],null);return{c(){e=O("svg"),l&&l.c(),n=ge(),r&&r.c(),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"viewBox",t[1]),f(e,"class","svelte-1f5ynff"),G(e,"color",t[2])},m(s,u){S(s,e,u),l&&l.m(e,null),y(e,n),r&&r.m(e,null),o=!0},p(s,[u]){s[0]?l?l.p(s,u):(l=je(s),l.c(),l.m(e,n)):l&&(l.d(1),l=null),r&&r.p&&(!o||u&8)&&me(r,i,s,s[3],o?_e(i,s[3],u,null):he(s[3]),null),(!o||u&2)&&f(e,"viewBox",s[1]),u&4&&G(e,"color",s[2])},i(s){o||(w(r,s),o=!0)},o(s){E(r,s),o=!1},d(s){s&&L(e),l&&l.d(),r&&r.d(s)}}}function pt(t,e,n){let{$$slots:o={},$$scope:l}=e,{title:i=null}=e,{viewBox:r}=e,{color:s="currentColor"}=e;return t.$$set=u=>{"title"in u&&n(0,i=u.title),"viewBox"in u&&n(1,r=u.viewBox),"color"in u&&n(2,s=u.color),"$$scope"in u&&n(3,l=u.$$scope)},[i,r,s,l,o]}class Pe extends J{constructor(e){super(),q(this,e,pt,gt,$,{title:0,viewBox:1,color:2})}}function bt(t){let e,n,o,l,i;return{c(){e=O("svg"),n=O("polyline"),o=O("path"),l=O("line"),i=O("line"),f(n,"points","3 6 5 6 21 6"),f(o,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),f(l,"x1","10"),f(l,"y1","11"),f(l,"x2","10"),f(l,"y2","17"),f(i,"x1","14"),f(i,"y1","11"),f(i,"x2","14"),f(i,"y2","17"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"width","24"),f(e,"height","24"),f(e,"viewBox","0 0 24 24"),f(e,"fill","none"),f(e,"stroke","currentColor"),f(e,"stroke-width","2"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round"),f(e,"class","feather feather-trash-2")},m(r,s){S(r,e,s),y(e,n),y(e,o),y(e,l),y(e,i)},p:T,d(r){r&&L(e)}}}function yt(t){let e,n;const o=[{viewBox:"0 0 24 24"},t[0]];let l={$$slots:{default:[bt]},$$scope:{ctx:t}};for(let i=0;i<o.length;i+=1)l=H(l,o[i]);return e=new Pe({props:l}),{c(){F(e.$$.fragment)},m(i,r){P(e,i,r),n=!0},p(i,[r]){const s=r&1?ye(o,[o[0],Ae(i[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){N(e,i)}}}function vt(t,e,n){return t.$$set=o=>{n(0,e=H(H({},e),ee(o)))},e=ee(e),[e]}class kt extends J{constructor(e){super(),q(this,e,vt,yt,$,{})}}function ze(t,e,n){const o=t.slice();return o[11]=e[n],o}function wt(t){let e;return{c(){e=C("p"),e.textContent="Elements not founded",f(e,"class","todo-element__not-founded-label svelte-ruaae6")},m(n,o){S(n,e,o)},p:T,i:T,o:T,d(n){n&&L(e)}}}function Lt(t){let e=[],n=new Map,o,l,i=t[0];const r=s=>s[11].id;for(let s=0;s<i.length;s+=1){let u=ze(t,i,s),a=r(u);n.set(a,e[s]=De(a,u))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();o=ge()},m(s,u){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,u);S(s,o,u),l=!0},p(s,u){u&57&&(i=s[0],re(),e=nt(e,u,r,1,s,i,n,o.parentNode,tt,De,o,ze),se())},i(s){if(!l){for(let u=0;u<i.length;u+=1)w(e[u]);l=!0}},o(s){for(let u=0;u<e.length;u+=1)E(e[u]);l=!1},d(s){for(let u=0;u<e.length;u+=1)e[u].d(s);s&&L(o)}}}function Ct(t){let e;return{c(){e=C("p"),e.textContent="Loading...",f(e,"class","todo-element__not-founded-label svelte-ruaae6")},m(n,o){S(n,e,o)},p:T,i:T,o:T,d(n){n&&L(e)}}}function Et(t){let e,n;return{c(){e=C("p"),n=V(t[2]),f(e,"class","todo-element__not-founded-label svelte-ruaae6")},m(o,l){S(o,e,l),y(e,n)},p(o,l){l&4&&pe(n,o[2])},i:T,o:T,d(o){o&&L(e)}}}function St(t){let e,n,o;return n=new kt({}),{c(){e=C("div"),F(n.$$.fragment),f(e,"slot","icoLeft")},m(l,i){S(l,e,i),P(n,e,null),o=!0},p:T,i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){E(n.$$.fragment,l),o=!1},d(l){l&&L(e),N(n)}}}function De(t,e){let n,o,l,i,r,s,u,a=e[11].title+"",d,h,m,p,_,j,M;function B(){return e[7](e[11])}function b(){return e[8](e[11])}return m=new He({props:{label:!1,size:"S",backgroundColor:"var(--tui-negative)",backgroundColorHover:"var(--tui-negative-hover)","aria-label":`Remove element ${e[11].title}`,title:"Remove element",disabled:e[3].includes(e[11].id),$$slots:{icoLeft:[St]},$$scope:{ctx:e}}}),m.$on("click",b),{key:t,first:null,c(){n=C("ul"),o=C("label"),l=C("input"),s=Q(),u=C("li"),d=V(a),h=Q(),F(m.$$.fragment),p=Q(),f(l,"class","todo-element__delete-ico svelte-ruaae6"),f(l,"type","checkbox"),l.checked=i=e[11].completed,l.disabled=r=e[3].includes(e[11].id),f(u,"class","todo-element__title svelte-ruaae6"),k(u,"through",e[11].completed),f(o,"class","todo-element__label svelte-ruaae6"),f(n,"class","todo-element svelte-ruaae6"),this.first=n},m(c,g){S(c,n,g),y(n,o),y(o,l),y(o,s),y(o,u),y(u,d),y(n,h),P(m,n,null),y(n,p),_=!0,j||(M=Y(l,"input",B),j=!0)},p(c,g){e=c,(!_||g&1&&i!==(i=e[11].completed))&&(l.checked=i),(!_||g&9&&r!==(r=e[3].includes(e[11].id)))&&(l.disabled=r),(!_||g&1)&&a!==(a=e[11].title+"")&&pe(d,a),(!_||g&1)&&k(u,"through",e[11].completed);const z={};g&1&&(z["aria-label"]=`Remove element ${e[11].title}`),g&9&&(z.disabled=e[3].includes(e[11].id)),g&16384&&(z.$$scope={dirty:g,ctx:e}),m.$set(z)},i(c){_||(w(m.$$.fragment,c),_=!0)},o(c){E(m.$$.fragment,c),_=!1},d(c){c&&L(n),N(m),j=!1,M()}}}function It(t){let e,n,o,l;const i=[Et,Ct,Lt,wt],r=[];function s(u,a){return u[2]?0:u[1]?1:u[0].length>0?2:3}return e=s(t),n=r[e]=i[e](t),{c(){n.c(),o=ge()},m(u,a){r[e].m(u,a),S(u,o,a),l=!0},p(u,[a]){let d=e;e=s(u),e===d?r[e].p(u,a):(re(),E(r[d],1,1,()=>{r[d]=null}),se(),n=r[e],n?n.p(u,a):(n=r[e]=i[e](u),n.c()),w(n,1),n.m(o.parentNode,o))},i(u){l||(w(n),l=!0)},o(u){E(n),l=!1},d(u){r[e].d(u),u&&L(o)}}}function Tt(t,e,n){const o=Ge();let{todoItems:l=[]}=e,{isLoading:i=!1}=e,{loadingError:r=null}=e,{disabledItems:s=[]}=e,u=l,a=!1;function d(_,j){o("toggletodo",{id:_,value:j})}function h(_){o("deleTodo",{id:_})}Ke(()=>{o("afterUpdate",{autoScroll:a}),console.log(l)});const m=_=>{d(_.id,!_.completed)},p=_=>{h(_.id)};return t.$$set=_=>{"todoItems"in _&&n(0,l=_.todoItems),"isLoading"in _&&n(1,i=_.isLoading),"loadingError"in _&&n(2,r=_.loadingError),"disabledItems"in _&&n(3,s=_.disabledItems)},t.$$.update=()=>{t.$$.dirty&65&&(a=l.length>u.length,n(6,u=l))},[l,i,r,s,d,h,u,m,p]}class jt extends J{constructor(e){super(),q(this,e,Tt,It,$,{todoItems:0,isLoading:1,loadingError:2,disabledItems:3})}}function zt(t){let e,n,o,l;return{c(){e=O("g"),n=O("circle"),o=O("line"),l=O("line"),f(n,"cx","12"),f(n,"cy","12"),f(n,"r","10"),f(o,"x1","12"),f(o,"y1","8"),f(o,"x2","12"),f(o,"y2","16"),f(l,"x1","8"),f(l,"y1","12"),f(l,"x2","16"),f(l,"y2","12"),f(e,"fill","none"),f(e,"stroke-width","2"),f(e,"stroke-linecap","round"),f(e,"stroke-linejoin","round")},m(i,r){S(i,e,r),y(e,n),y(e,o),y(e,l)},p:T,d(i){i&&L(e)}}}function Dt(t){let e,n;const o=[{viewBox:"0 0 24 24"},t[0]];let l={$$slots:{default:[zt]},$$scope:{ctx:t}};for(let i=0;i<o.length;i+=1)l=H(l,o[i]);return e=new Pe({props:l}),{c(){F(e.$$.fragment)},m(i,r){P(e,i,r),n=!0},p(i,[r]){const s=r&1?ye(o,[o[0],Ae(i[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(w(e.$$.fragment,i),n=!0)},o(i){E(e.$$.fragment,i),n=!1},d(i){N(e,i)}}}function Mt(t,e,n){return t.$$set=o=>{n(0,e=H(H({},e),ee(o)))},e=ee(e),[e]}class Bt extends J{constructor(e){super(),q(this,e,Mt,Dt,$,{})}}function Ot(t){let e;return{c(){e=V("Add todo")},m(n,o){S(n,e,o)},d(n){n&&L(e)}}}function Ut(t){let e,n,o;return n=new Bt({}),{c(){e=C("div"),F(n.$$.fragment),f(e,"slot","icoLeft")},m(l,i){S(l,e,i),P(n,e,null),o=!0},p:T,i(l){o||(w(n.$$.fragment,l),o=!0)},o(l){E(n.$$.fragment,l),o=!1},d(l){l&&L(e),N(n)}}}function At(t){let e,n,o,l,i,r,s,u,a,d,h,m,p,_,j;function M(c){t[11](c)}let B={placeholder:"Write title of your todo"};t[0]!==void 0&&(B.value=t[0]),i=new at({props:B}),ne.push(()=>ot(i,"value",M)),a=new He({props:{size:"Fill",backgroundColor:"var(--tui-primary)",backgroundColorHover:"var(--tui-primary-hover)",textColor:"var(--tui-text-01-night)",type:"submit",disabled:!t[0],"aria-label":"Add element",title:"Add element",$$slots:{icoLeft:[Ut],default:[Ot]},$$scope:{ctx:t}}});let b={disabledItems:t[6],todoItems:t[3],isLoading:t[5],loadingError:t[4]};return m=new jt({props:b}),t[12](m),m.$on("toggletodo",t[8]),m.$on("deleTodo",t[9]),m.$on("afterUpdate",t[10]),{c(){e=C("main"),n=C("section"),o=C("form"),l=C("div"),F(i.$$.fragment),s=Q(),u=C("div"),F(a.$$.fragment),d=Q(),h=C("article"),F(m.$$.fragment),f(l,"class","todo__input svelte-16pw3ew"),f(u,"class","todo__button svelte-16pw3ew"),f(o,"class","todo__form"),f(o,"action",""),f(h,"class","todo__items svelte-16pw3ew"),f(n,"class","todo svelte-16pw3ew")},m(c,g){S(c,e,g),y(e,n),y(n,o),y(o,l),P(i,l,null),y(o,s),y(o,u),P(a,u,null),y(n,d),y(n,h),P(m,h,null),t[13](h),p=!0,_||(j=Y(o,"submit",Re(t[7])),_=!0)},p(c,[g]){const z={};!r&&g&1&&(r=!0,z.value=c[0],$e(()=>r=!1)),i.$set(z);const D={};g&1&&(D.disabled=!c[0]),g&65536&&(D.$$scope={dirty:g,ctx:c}),a.$set(D);const v={};g&64&&(v.disabledItems=c[6]),g&8&&(v.todoItems=c[3]),g&32&&(v.isLoading=c[5]),g&16&&(v.loadingError=c[4]),m.$set(v)},i(c){p||(w(i.$$.fragment,c),w(a.$$.fragment,c),w(m.$$.fragment,c),p=!0)},o(c){E(i.$$.fragment,c),E(a.$$.fragment,c),E(m.$$.fragment,c),p=!1},d(c){c&&L(e),N(i),N(a),t[12](null),N(m),t[13](null),_=!1,j()}}}function Ht(t,e,n){let o,l,i,r=[],s,u,a=!1,d=[];We(()=>{h()});async function h(){n(5,u=!0),await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(c=>{if(c.ok)return c.json();n(4,s="Error loading todos from server"),console.log("Loading error")}).then(c=>n(3,r=c)),n(5,u=!1)}function m(){o&&(a=!0,fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({id:Ee(),title:o,completed:!1})}).then(c=>c.json()).then(c=>{n(3,r=[...r,{...c,id:Ee()}])}),n(0,o=""))}function p(c){const g=c.detail.id;console.log(c),!d.includes(g)&&(n(6,d=[...d,g]),fetch(`https://jsonplaceholder.typicode.com/todos/${g}`,{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({completed:!c.detail.value})}).then(z=>{z.ok&&n(3,r=r.map(D=>D.id==c.detail.id?{...D,completed:c.detail.value}:{...D})),n(6,d=d.filter(D=>{}))}))}async function _(c){const g=c.detail.id;d.includes(g)||(n(6,d=[...d,g]),await fetch(`https://jsonplaceholder.typicode.com/todos/${g}`,{method:"DELETE"}).then(z=>{z.ok&&n(3,r=r.filter(D=>D.id!=c.detail.id))}),n(6,d=d.filter(z=>{})))}function j(c){c.detail.autoScroll&&a&&l.scrollTo(0,l.scrollHeight),a=!1}function M(c){o=c,n(0,o)}function B(c){ne[c?"unshift":"push"](()=>{i=c,n(2,i)})}function b(c){ne[c?"unshift":"push"](()=>{l=c,n(1,l)})}return[o,l,i,r,s,u,d,m,p,_,j,M,B,b]}class Pt extends J{constructor(e){super(),q(this,e,Ht,At,$,{})}}new Pt({target:document.getElementById("app")});function Nt(t){t.preventDefault()}function Ft(){document.body.addEventListener("touchmove",Nt,{passive:!1})}Ft();