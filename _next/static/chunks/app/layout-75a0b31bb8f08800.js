(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1871:function(e,t,n){Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481)),Promise.resolve().then(n.t.bind(n,2912,23)),Promise.resolve().then(n.t.bind(n,8911,23)),Promise.resolve().then(n.t.bind(n,7244,23)),Promise.resolve().then(n.bind(n,646))},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let r=n(5592);function o(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new r.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return l}});let r=n(7437),o=n(8512);function l(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,o.getExpectedRequestStore)("next/dynamic css"),l=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));l.push(...t)}}return 0===l.length?null:(0,r.jsx)(r.Fragment,{children:l.map(e=>(0,r.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},646:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeToggle:function(){return a}});var r=n(7437),o=n(2265);function l(){return(0,r.jsx)("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z"})})}function i(){return(0,r.jsx)("svg",{fill:"currentColor",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:(0,r.jsx)("path",{d:"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"})})}n(4714);let s="theme";function c(){let e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",t=window.localStorage.getItem(s),n="string"==typeof t&&("light"===t||"dark"===t)?t:void 0;return null!=n?n:e}let u={toggleToDark:"Toggle to the dark theme",toggleToLight:"Toggle to the light theme"};function a(){let[e,t]=(0,o.useState)(()=>c());(0,o.useEffect)(()=>{let e=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>{t(c())};return e.addEventListener("change",n),()=>e.removeEventListener("change",n)},[]),(0,o.useEffect)(()=>{let t=document.querySelector(":root");t instanceof HTMLElement&&(t.dataset.theme=e)},[e]);let n="dark"===e?u.toggleToLight:u.toggleToDark;return(0,r.jsx)("button",{className:"theme-toggle-button","aria-label":n,title:n,onClick:()=>{t(e=>{let t="dark"===e?"light":"dark";return window.localStorage.setItem(s,t),t})},children:"dark"===e?(0,r.jsx)(l,{}):(0,r.jsx)(i,{})})}},2912:function(){},8911:function(){},7244:function(){},4714:function(){}},function(e){e.O(0,[390,971,23,744],function(){return e(e.s=1871)}),_N_E=e.O()}]);