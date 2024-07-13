import{j as O}from"./jsx-runtime-Cw0GR0a5.js";import{r as f,a as V}from"./index-CTjT7uj6.js";import"./index-D0cFg0-4.js";/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},P.apply(this,arguments)}var v;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(v||(v={}));const L="popstate";function $(t){t===void 0&&(t={});function e(n,a){let{pathname:h,search:i,hash:s}=n.location;return E("",{pathname:h,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:F(a)}return W(e,r,null,t)}function _(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function H(){return Math.random().toString(36).substr(2,8)}function T(t,e){return{usr:t.state,key:t.key,idx:e}}function E(t,e,r,n){return r===void 0&&(r=null),P({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?M(e):e,{state:r,key:e&&e.key||n||H()})}function F(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function M(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function W(t,e,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:h=!1}=n,i=a.history,s=v.Pop,l=null,c=p();c==null&&(c=0,i.replaceState(P({},i.state,{idx:c}),""));function p(){return(i.state||{idx:null}).idx}function g(){s=v.Pop;let o=p(),u=o==null?null:o-c;c=o,l&&l({action:s,location:d.location,delta:u})}function x(o,u){s=v.Push;let m=E(d.location,o,u);c=p()+1;let R=T(m,c),S=d.createHref(m);try{i.pushState(R,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(S)}h&&l&&l({action:s,location:d.location,delta:1})}function y(o,u){s=v.Replace;let m=E(d.location,o,u);c=p();let R=T(m,c),S=d.createHref(m);i.replaceState(R,"",S),h&&l&&l({action:s,location:d.location,delta:0})}function w(o){let u=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof o=="string"?o:F(o);return m=m.replace(/ $/,"%20"),_(u,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,u)}let d={get action(){return s},get location(){return t(a,i)},listen(o){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(L,g),l=o,()=>{a.removeEventListener(L,g),l=null}},createHref(o){return e(a,o)},createURL:w,encodeLocation(o){let u=w(o);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:x,replace:y,go(o){return i.go(o)}};return d}var U;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(U||(U={}));function q(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}const B=["post","put","patch","delete"];new Set(B);const K=["get",...B];new Set(K);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},C.apply(this,arguments)}const Z=f.createContext(null),N=f.createContext(null);function k(){return f.useContext(N)!=null}function z(t){let{basename:e="/",children:r=null,location:n,navigationType:a=v.Pop,navigator:h,static:i=!1,future:s}=t;k()&&_(!1);let l=e.replace(/^\/*/,"/"),c=f.useMemo(()=>({basename:l,navigator:h,static:i,future:C({v7_relativeSplatPath:!1},s)}),[l,s,h,i]);typeof n=="string"&&(n=M(n));let{pathname:p="/",search:g="",hash:x="",state:y=null,key:w="default"}=n,d=f.useMemo(()=>{let o=q(p,l);return o==null?null:{location:{pathname:o,search:g,hash:x,state:y,key:w},navigationType:a}},[l,p,g,x,y,w,a]);return d==null?null:f.createElement(Z.Provider,{value:c},f.createElement(N.Provider,{children:r,value:d}))}new Promise(()=>{});/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const G="6";try{window.__reactRouterVersion=G}catch{}const J="startTransition",I=V[J];function Q(t){let{basename:e,children:r,future:n,window:a}=t,h=f.useRef();h.current==null&&(h.current=$({window:a,v5Compat:!0}));let i=h.current,[s,l]=f.useState({action:i.action,location:i.location}),{v7_startTransition:c}=n||{},p=f.useCallback(g=>{c&&I?I(()=>l(g)):l(g)},[l,c]);return f.useLayoutEffect(()=>i.listen(p),[i,p]),f.createElement(z,{basename:e,children:r,location:s.location,navigationType:s.action,navigator:i,future:n})}var j;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(j||(j={}));var A;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(A||(A={}));const tt={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},et=[t=>O.jsx(Q,{children:O.jsx(t,{})})];export{et as decorators,tt as parameters};
