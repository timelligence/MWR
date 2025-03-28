import{r as i,j as t}from"./jsx-runtime-56DGgGmo.js";import{l as y,n as f,o as d,p as g,_ as x,O as w,M as S,L as j,S as k}from"./components-5PomSlkx.js";/**
 * @remix-run/react v2.16.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function M({getKey:e,...l}){let{isSpaMode:c}=y(),o=f(),p=d();g({getKey:e,storageKey:a});let h=i.useMemo(()=>{if(!e)return null;let s=e(o,p);return s!==o.key?s:null},[]);if(c)return null;let u=((s,m)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[m||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",x({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${u})(${JSON.stringify(a)}, ${JSON.stringify(h)})`}}))}const O="/assets/tailwind-BQJgJmfh.css",I=()=>[{rel:"stylesheet",href:O},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"}];function N({children:e}){return t.jsxs("html",{lang:"ro",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(S,{}),t.jsx(j,{})]}),t.jsxs("body",{className:"font-sans bg-gray-50 text-gray-800",children:[e,t.jsx(M,{}),t.jsx(k,{})]})]})}function R(){return t.jsx(w,{})}export{N as Layout,R as default,I as links};
