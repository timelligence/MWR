import{r as o,j as p}from"./jsx-runtime-56DGgGmo.js";import{E as C,i as h,d as M,c as y,m as g,s as E,a as S,g as b,b as F,e as P,f as k,u as D,R as z,h as H,j as L,k as O,r as T}from"./components-5PomSlkx.js";/**
 * @remix-run/react v2.16.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(u){if(!u)return null;let m=Object.entries(u),s={};for(let[a,e]of m)if(e&&e.__type==="RouteErrorResponse")s[a]=new C(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let i=window[e.__subType];if(typeof i=="function")try{let r=new i(e.message);r.stack=e.stack,s[a]=r}catch{}}if(s[a]==null){let i=new Error(e.message);i.stack=e.stack,s[a]=i}}else s[a]=e;return s}/**
 * @remix-run/react v2.16.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,t,c=!1,f;new Promise(u=>{f=u}).catch(()=>{});function B(u){if(!t){if(window.__remixContext.future.v3_singleFetch){if(!n){let d=window.__remixContext.stream;h(d,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=M(d,window).then(_=>{window.__remixContext.state=_.value,n.value=!0}).catch(_=>{n.error=_})}if(n.error)throw n.error;if(!n.value)throw n}let i=y(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),r;if(!window.__remixContext.isSpaMode){r={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let d=g(i,window.location,window.__remixContext.basename);if(d)for(let _ of d){let l=_.route.id,x=window.__remixRouteModules[l],w=window.__remixManifest.routes[l];x&&E(w,x,window.__remixContext.isSpaMode)&&(x.HydrateFallback||!w.hasLoader)?r.loaderData[l]=void 0:w&&!w.hasLoader&&(r.loaderData[l]=null)}r&&r.errors&&(r.errors=j(r.errors))}t=S({routes:i,history:P(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.v3_singleFetch===!0},hydrationData:r,mapRouteProperties:O,dataStrategy:window.__remixContext.future.v3_singleFetch&&!window.__remixContext.isSpaMode?F(window.__remixManifest,window.__remixRouteModules,()=>t):void 0,patchRoutesOnNavigation:b(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),t.state.initialized&&(c=!0,t.initialize()),t.createRoutesForHMR=k,window.__remixRouter=t,f&&f(t)}let[m,s]=o.useState(void 0),[a,e]=o.useState(t.state.location);return o.useLayoutEffect(()=>{c||(c=!0,t.initialize())},[]),o.useLayoutEffect(()=>t.subscribe(i=>{i.location!==a&&e(i.location)}),[a]),D(t,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),o.createElement(o.Fragment,null,o.createElement(z.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:m,isSpaMode:window.__remixContext.isSpaMode}},o.createElement(H,{location:a},o.createElement(L,{router:t,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.v3_singleFetch?o.createElement(o.Fragment,null):null)}var R,v=T;v.createRoot,R=v.hydrateRoot;o.startTransition(()=>{R(document,p.jsx(B,{}))});
