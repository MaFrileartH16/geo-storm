import{a as P,r as h,u as Y,b as Zt,c as Jt,d as te,e as ee,k as q,f as ne,j as f,p as pt,g as re,h as oe}from"./app-CQq0w004.js";import{R as ae}from"./index-CKc9Ydet.js";function ie(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function Q(t){return Object.keys(t).reduce((e,n)=>(t[n]!==void 0&&(e[n]=t[n]),e),{})}function ft(t){if(typeof t=="number")return!0;if(typeof t=="string"){if(t.startsWith("calc(")||t.startsWith("var(")||t.includes(" ")&&t.trim()!=="")return!0;const e=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return t.trim().split(/\s+/).every(r=>e.test(r))}return!1}function B(t,e="size",n=!0){if(t!==void 0)return ft(t)?n?P(t):t:`var(--${e}-${t})`}function ut(t){return t===void 0?"var(--mantine-radius-default)":B(t,"mantine-radius")}function I(t){return B(t,"mantine-font-size")}function se(t,e){try{return t.addEventListener("change",e),()=>t.removeEventListener("change",e)}catch{return t.addListener(e),()=>t.removeListener(e)}}function ce(t,e){return typeof window<"u"&&"matchMedia"in window?window.matchMedia(t).matches:!1}function pe(t,e,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){const[r,o]=h.useState(n?e:ce(t)),a=h.useRef(null);return h.useEffect(()=>{if("matchMedia"in window)return a.current=window.matchMedia(t),o(a.current.matches),se(a.current,i=>o(i.matches))},[t]),r}function fe(t,e){const n=h.useRef(!1);h.useEffect(()=>()=>{n.current=!1},[]),h.useEffect(()=>{if(n.current)return t();n.current=!0},e)}function ue(t,e){return pe("(prefers-reduced-motion: reduce)",t,e)}function dt(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(e=0;e<o;e++)t[e]&&(n=dt(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function O(){for(var t,e,n=0,r="",o=arguments.length;n<o;n++)(t=arguments[n])&&(e=dt(t))&&(r&&(r+=" "),r+=e);return r}const de={};function me(t){const e={};return t.forEach(n=>{Object.entries(n).forEach(([r,o])=>{e[r]?e[r]=O(e[r],o):e[r]=o})}),e}function K({theme:t,classNames:e,props:n,stylesCtx:r}){const a=(Array.isArray(e)?e:[e]).map(i=>typeof i=="function"?i(t,n,r):i||de);return me(a)}function V({theme:t,styles:e,props:n,stylesCtx:r}){return(Array.isArray(e)?e:[e]).reduce((a,i)=>typeof i=="function"?{...a,...i(t,n,r)}:{...a,...i},{})}const le={always:"mantine-focus-always",auto:"mantine-focus-auto",never:"mantine-focus-never"};function ye({theme:t,options:e,unstyled:n}){return O((e==null?void 0:e.focusable)&&!n&&(t.focusClassName||le[t.focusRing]),(e==null?void 0:e.active)&&!n&&t.activeClassName)}function ge({selector:t,stylesCtx:e,options:n,props:r,theme:o}){return K({theme:o,classNames:n==null?void 0:n.classNames,props:(n==null?void 0:n.props)||r,stylesCtx:e})[t]}function rt({selector:t,stylesCtx:e,theme:n,classNames:r,props:o}){return K({theme:n,classNames:r,props:o,stylesCtx:e})[t]}function he({rootSelector:t,selector:e,className:n}){return t===e?n:void 0}function be({selector:t,classes:e,unstyled:n}){return n?void 0:e[t]}function Se({themeName:t,classNamesPrefix:e,selector:n,withStaticClass:r}){return r===!1?[]:t.map(o=>`${e}-${o}-${n}`)}function xe({themeName:t,theme:e,selector:n,props:r,stylesCtx:o}){return t.map(a=>{var i,s;return(s=K({theme:e,classNames:(i=e.components[a])==null?void 0:i.classNames,props:r,stylesCtx:o}))==null?void 0:s[n]})}function we({options:t,classes:e,selector:n,unstyled:r}){return t!=null&&t.variant&&!r?e[`${n}--${t.variant}`]:void 0}function ve({theme:t,options:e,themeName:n,selector:r,classNamesPrefix:o,classNames:a,classes:i,unstyled:s,className:p,rootSelector:c,props:u,stylesCtx:d,withStaticClasses:m,headless:g,transformedStyles:l}){return O(ye({theme:t,options:e,unstyled:s||g}),xe({theme:t,themeName:n,selector:r,props:u,stylesCtx:d}),we({options:e,classes:i,selector:r,unstyled:s}),rt({selector:r,stylesCtx:d,theme:t,classNames:a,props:u}),rt({selector:r,stylesCtx:d,theme:t,classNames:l,props:u}),ge({selector:r,stylesCtx:d,options:e,props:u,theme:t}),he({rootSelector:c,selector:r,className:p}),be({selector:r,classes:i,unstyled:s||g}),m&&!g&&Se({themeName:n,classNamesPrefix:o,selector:r,withStaticClass:e==null?void 0:e.withStaticClass}),e==null?void 0:e.className)}function Ne({theme:t,themeName:e,props:n,stylesCtx:r,selector:o}){return e.map(a=>{var i;return V({theme:t,styles:(i=t.components[a])==null?void 0:i.styles,props:n,stylesCtx:r})[o]}).reduce((a,i)=>({...a,...i}),{})}function X({style:t,theme:e}){return Array.isArray(t)?[...t].reduce((n,r)=>({...n,...X({style:r,theme:e})}),{}):typeof t=="function"?t(e):t??{}}function $e(t){return t.reduce((e,n)=>(n&&Object.keys(n).forEach(r=>{e[r]={...e[r],...Q(n[r])}}),e),{})}function Re({vars:t,varsResolver:e,theme:n,props:r,stylesCtx:o,selector:a,themeName:i,headless:s}){var p;return(p=$e([s?{}:e==null?void 0:e(n,r,o),...i.map(c=>{var u,d,m;return(m=(d=(u=n.components)==null?void 0:u[c])==null?void 0:d.vars)==null?void 0:m.call(d,n,r,o)}),t==null?void 0:t(n,r,o)]))==null?void 0:p[a]}function je({theme:t,themeName:e,selector:n,options:r,props:o,stylesCtx:a,rootSelector:i,styles:s,style:p,vars:c,varsResolver:u,headless:d,withStylesTransform:m}){return{...!m&&Ne({theme:t,themeName:e,props:o,stylesCtx:a,selector:n}),...!m&&V({theme:t,styles:s,props:o,stylesCtx:a})[n],...!m&&V({theme:t,styles:r==null?void 0:r.styles,props:(r==null?void 0:r.props)||o,stylesCtx:a})[n],...Re({theme:t,props:o,stylesCtx:a,vars:c,varsResolver:u,selector:n,themeName:e,headless:d}),...i===n?X({style:p,theme:t}):null,...X({style:r==null?void 0:r.style,theme:t})}}function Te({props:t,stylesCtx:e,themeName:n}){var i;const r=Y(),o=(i=Zt())==null?void 0:i();return{getTransformedStyles:s=>o?[...s.map(c=>o(c,{props:t,theme:r,ctx:e})),...n.map(c=>{var u;return o((u=r.components[c])==null?void 0:u.styles,{props:t,theme:r,ctx:e})})].filter(Boolean):[],withStylesTransform:!!o}}function M({name:t,classes:e,props:n,stylesCtx:r,className:o,style:a,rootSelector:i="root",unstyled:s,classNames:p,styles:c,vars:u,varsResolver:d}){const m=Y(),g=Jt(),l=te(),S=ee(),x=(Array.isArray(t)?t:[t]).filter(b=>b),{withStylesTransform:N,getTransformedStyles:T}=Te({props:n,stylesCtx:r,themeName:x});return(b,v)=>({className:ve({theme:m,options:v,themeName:x,selector:b,classNamesPrefix:g,classNames:p,classes:e,unstyled:s,className:o,rootSelector:i,props:n,stylesCtx:r,withStaticClasses:l,headless:S,transformedStyles:T([v==null?void 0:v.styles,c])}),style:je({theme:m,themeName:x,selector:b,options:v,props:n,stylesCtx:r,rootSelector:i,styles:c,style:a,vars:u,varsResolver:d,headless:S,withStylesTransform:N})})}function A(t,e,n){var i;const r=Y(),o=(i=r.components[t])==null?void 0:i.defaultProps,a=typeof o=="function"?o(r):o;return{...e,...a,...Q(n)}}function D(t){return q(t).reduce((e,n)=>t[n]!==void 0?`${e}${ie(n)}:${t[n]};`:e,"").trim()}function Pe({selector:t,styles:e,media:n,container:r}){const o=e?D(e):"",a=Array.isArray(n)?n.map(s=>`@media${s.query}{${t}{${D(s.styles)}}}`):[],i=Array.isArray(r)?r.map(s=>`@container ${s.query}{${t}{${D(s.styles)}}}`):[];return`${o?`${t}{${o}}`:""}${a.join("")}${i.join("")}`.trim()}function Ce(t){const e=ne();return f.jsx("style",{"data-mantine-styles":"inline",nonce:e==null?void 0:e(),dangerouslySetInnerHTML:{__html:Pe(t)}})}function _e(t){const{m:e,mx:n,my:r,mt:o,mb:a,ml:i,mr:s,me:p,ms:c,p:u,px:d,py:m,pt:g,pb:l,pl:S,pr:x,pe:N,ps:T,bd:b,bg:v,c:C,opacity:y,ff:$,fz:w,fw:_,lts:z,ta:G,lh:$t,fs:Rt,tt:jt,td:Tt,w:Pt,miw:Ct,maw:_t,h:Bt,mih:At,mah:Ot,bgsz:Lt,bgp:Et,bgr:Yt,bga:Mt,pos:Ft,top:kt,left:It,bottom:Wt,right:zt,inset:Gt,display:Dt,flex:Ht,hiddenFrom:Vt,visibleFrom:Xt,lightHidden:Ut,darkHidden:qt,sx:Qt,...Kt}=t;return{styleProps:Q({m:e,mx:n,my:r,mt:o,mb:a,ml:i,mr:s,me:p,ms:c,p:u,px:d,py:m,pt:g,pb:l,pl:S,pr:x,pe:N,ps:T,bd:b,bg:v,c:C,opacity:y,ff:$,fz:w,fw:_,lts:z,ta:G,lh:$t,fs:Rt,tt:jt,td:Tt,w:Pt,miw:Ct,maw:_t,h:Bt,mih:At,mah:Ot,bgsz:Lt,bgp:Et,bgr:Yt,bga:Mt,pos:Ft,top:kt,left:It,bottom:Wt,right:zt,inset:Gt,display:Dt,flex:Ht,hiddenFrom:Vt,visibleFrom:Xt,lightHidden:Ut,darkHidden:qt,sx:Qt}),rest:Kt}}const Be={m:{type:"spacing",property:"margin"},mt:{type:"spacing",property:"marginTop"},mb:{type:"spacing",property:"marginBottom"},ml:{type:"spacing",property:"marginLeft"},mr:{type:"spacing",property:"marginRight"},ms:{type:"spacing",property:"marginInlineStart"},me:{type:"spacing",property:"marginInlineEnd"},mx:{type:"spacing",property:"marginInline"},my:{type:"spacing",property:"marginBlock"},p:{type:"spacing",property:"padding"},pt:{type:"spacing",property:"paddingTop"},pb:{type:"spacing",property:"paddingBottom"},pl:{type:"spacing",property:"paddingLeft"},pr:{type:"spacing",property:"paddingRight"},ps:{type:"spacing",property:"paddingInlineStart"},pe:{type:"spacing",property:"paddingInlineEnd"},px:{type:"spacing",property:"paddingInline"},py:{type:"spacing",property:"paddingBlock"},bd:{type:"border",property:"border"},bg:{type:"color",property:"background"},c:{type:"textColor",property:"color"},opacity:{type:"identity",property:"opacity"},ff:{type:"fontFamily",property:"fontFamily"},fz:{type:"fontSize",property:"fontSize"},fw:{type:"identity",property:"fontWeight"},lts:{type:"size",property:"letterSpacing"},ta:{type:"identity",property:"textAlign"},lh:{type:"lineHeight",property:"lineHeight"},fs:{type:"identity",property:"fontStyle"},tt:{type:"identity",property:"textTransform"},td:{type:"identity",property:"textDecoration"},w:{type:"spacing",property:"width"},miw:{type:"spacing",property:"minWidth"},maw:{type:"spacing",property:"maxWidth"},h:{type:"spacing",property:"height"},mih:{type:"spacing",property:"minHeight"},mah:{type:"spacing",property:"maxHeight"},bgsz:{type:"size",property:"backgroundSize"},bgp:{type:"identity",property:"backgroundPosition"},bgr:{type:"identity",property:"backgroundRepeat"},bga:{type:"identity",property:"backgroundAttachment"},pos:{type:"identity",property:"position"},top:{type:"size",property:"top"},left:{type:"size",property:"left"},bottom:{type:"size",property:"bottom"},right:{type:"size",property:"right"},inset:{type:"size",property:"inset"},display:{type:"identity",property:"display"},flex:{type:"identity",property:"flex"}};function Z(t,e){const n=pt({color:t,theme:e});return n.color==="dimmed"?"var(--mantine-color-dimmed)":n.color==="bright"?"var(--mantine-color-bright)":n.variable?`var(${n.variable})`:n.color}function Ae(t,e){const n=pt({color:t,theme:e});return n.isThemeColor&&n.shade===void 0?`var(--mantine-color-${n.color}-text)`:Z(t,e)}function Oe(t,e){if(typeof t=="number")return P(t);if(typeof t=="string"){const[n,r,...o]=t.split(" ").filter(i=>i.trim()!=="");let a=`${P(n)}`;return r&&(a+=` ${r}`),o.length>0&&(a+=` ${Z(o.join(" "),e)}`),a.trim()}return t}const ot={text:"var(--mantine-font-family)",mono:"var(--mantine-font-family-monospace)",monospace:"var(--mantine-font-family-monospace)",heading:"var(--mantine-font-family-headings)",headings:"var(--mantine-font-family-headings)"};function Le(t){return typeof t=="string"&&t in ot?ot[t]:t}const Ee=["h1","h2","h3","h4","h5","h6"];function Ye(t,e){return typeof t=="string"&&t in e.fontSizes?`var(--mantine-font-size-${t})`:typeof t=="string"&&Ee.includes(t)?`var(--mantine-${t}-font-size)`:typeof t=="number"?P(t):typeof t=="string"?P(t):t}function Me(t){return t}const Fe=["h1","h2","h3","h4","h5","h6"];function ke(t,e){return typeof t=="string"&&t in e.lineHeights?`var(--mantine-line-height-${t})`:typeof t=="string"&&Fe.includes(t)?`var(--mantine-${t}-line-height)`:t}function Ie(t){return typeof t=="number"?P(t):t}function We(t,e){if(typeof t=="number")return P(t);if(typeof t=="string"){const n=t.replace("-","");if(!(n in e.spacing))return P(t);const r=`--mantine-spacing-${n}`;return t.startsWith("-")?`calc(var(${r}) * -1)`:`var(${r})`}return t}const H={color:Z,textColor:Ae,fontSize:Ye,spacing:We,identity:Me,size:Ie,lineHeight:ke,fontFamily:Le,border:Oe};function at(t){return t.replace("(min-width: ","").replace("em)","")}function ze({media:t,...e}){const r=Object.keys(t).sort((o,a)=>Number(at(o))-Number(at(a))).map(o=>({query:o,styles:t[o]}));return{...e,media:r}}function Ge(t){if(typeof t!="object"||t===null)return!1;const e=Object.keys(t);return!(e.length===1&&e[0]==="base")}function De(t){return typeof t=="object"&&t!==null?"base"in t?t.base:void 0:t}function He(t){return typeof t=="object"&&t!==null?q(t).filter(e=>e!=="base"):[]}function Ve(t,e){return typeof t=="object"&&t!==null&&e in t?t[e]:t}function Xe({styleProps:t,data:e,theme:n}){return ze(q(t).reduce((r,o)=>{if(o==="hiddenFrom"||o==="visibleFrom"||o==="sx")return r;const a=e[o],i=Array.isArray(a.property)?a.property:[a.property],s=De(t[o]);if(!Ge(t[o]))return i.forEach(c=>{r.inlineStyles[c]=H[a.type](s,n)}),r;r.hasResponsiveStyles=!0;const p=He(t[o]);return i.forEach(c=>{s&&(r.styles[c]=H[a.type](s,n)),p.forEach(u=>{const d=`(min-width: ${n.breakpoints[u]})`;r.media[d]={...r.media[d],[c]:H[a.type](Ve(t[o],u),n)}})}),r},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function Ue(){return`__m__-${h.useId().replace(/:/g,"")}`}function mt(t){return t.startsWith("data-")?t:`data-${t}`}function qe(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return r===void 0||r===""||r===!1||r===null||(e[mt(n)]=t[n]),e},{})}function lt(t){return t?typeof t=="string"?{[mt(t)]:!0}:Array.isArray(t)?[...t].reduce((e,n)=>({...e,...lt(n)}),{}):qe(t):null}function U(t,e){return Array.isArray(t)?[...t].reduce((n,r)=>({...n,...U(r,e)}),{}):typeof t=="function"?t(e):t??{}}function Qe({theme:t,style:e,vars:n,styleProps:r}){const o=U(e,t),a=U(n,t);return{...o,...a,...r}}const yt=h.forwardRef(({component:t,style:e,__vars:n,className:r,variant:o,mod:a,size:i,hiddenFrom:s,visibleFrom:p,lightHidden:c,darkHidden:u,renderRoot:d,__size:m,...g},l)=>{var w;const S=Y(),x=t||"div",{styleProps:N,rest:T}=_e(g),b=re(),v=(w=b==null?void 0:b())==null?void 0:w(N.sx),C=Ue(),y=Xe({styleProps:N,theme:S,data:Be}),$={ref:l,style:Qe({theme:S,style:e,vars:n,styleProps:y.inlineStyles}),className:O(r,v,{[C]:y.hasResponsiveStyles,"mantine-light-hidden":c,"mantine-dark-hidden":u,[`mantine-hidden-from-${s}`]:s,[`mantine-visible-from-${p}`]:p}),"data-variant":o,"data-size":ft(i)?void 0:i||void 0,size:m,...lt(a),...T};return f.jsxs(f.Fragment,{children:[y.hasResponsiveStyles&&f.jsx(Ce,{selector:`.${C}`,styles:y.styles,media:y.media}),typeof d=="function"?d($):f.jsx(x,{...$})]})});yt.displayName="@mantine/core/Box";const R=yt;function gt(t){return t}function J(t){const e=h.forwardRef(t);return e.extend=gt,e.withProps=n=>{const r=h.forwardRef((o,a)=>f.jsx(e,{...n,...o,ref:a}));return r.extend=e.extend,r.displayName=`WithProps(${e.displayName})`,r},e}function ht(t){const e=h.forwardRef(t);return e.withProps=n=>{const r=h.forwardRef((o,a)=>f.jsx(e,{...n,...o,ref:a}));return r.extend=e.extend,r.displayName=`WithProps(${e.displayName})`,r},e.extend=gt,e}var bt={root:"m_87cf2631"};const Ke={__staticSelector:"UnstyledButton"},tt=ht((t,e)=>{const n=A("UnstyledButton",Ke,t),{className:r,component:o="button",__staticSelector:a,unstyled:i,classNames:s,styles:p,style:c,...u}=n,d=M({name:a,props:n,classes:bt,className:r,style:c,classNames:s,styles:p,unstyled:i});return f.jsx(R,{...d("root",{focusable:!0}),component:o,ref:e,type:o==="button"?"button":void 0,...u})});tt.classes=bt;tt.displayName="@mantine/core/UnstyledButton";const E=t=>({in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:`scale(.9) translateY(${t==="bottom"?10:-10}px)`},transitionProperty:"transform, opacity"}),k={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:"opacity"},"fade-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(30px)"},transitionProperty:"opacity, transform"},"fade-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-30px)"},transitionProperty:"opacity, transform"},"fade-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(30px)"},transitionProperty:"opacity, transform"},"fade-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-30px)"},transitionProperty:"opacity, transform"},scale:{in:{opacity:1,transform:"scale(1)"},out:{opacity:0,transform:"scale(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-y":{in:{opacity:1,transform:"scaleY(1)"},out:{opacity:0,transform:"scaleY(0)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"scale-x":{in:{opacity:1,transform:"scaleX(1)"},out:{opacity:0,transform:"scaleX(0)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"skew-up":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(-20px) skew(-10deg, -5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"skew-down":{in:{opacity:1,transform:"translateY(0) skew(0deg, 0deg)"},out:{opacity:0,transform:"translateY(20px) skew(-10deg, -5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-left":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(-5deg)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"rotate-right":{in:{opacity:1,transform:"translateY(0) rotate(0deg)"},out:{opacity:0,transform:"translateY(20px) rotate(5deg)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-down":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(-100%)"},common:{transformOrigin:"top"},transitionProperty:"transform, opacity"},"slide-up":{in:{opacity:1,transform:"translateY(0)"},out:{opacity:0,transform:"translateY(100%)"},common:{transformOrigin:"bottom"},transitionProperty:"transform, opacity"},"slide-left":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(100%)"},common:{transformOrigin:"left"},transitionProperty:"transform, opacity"},"slide-right":{in:{opacity:1,transform:"translateX(0)"},out:{opacity:0,transform:"translateX(-100%)"},common:{transformOrigin:"right"},transitionProperty:"transform, opacity"},pop:{...E("bottom"),common:{transformOrigin:"center center"}},"pop-bottom-left":{...E("bottom"),common:{transformOrigin:"bottom left"}},"pop-bottom-right":{...E("bottom"),common:{transformOrigin:"bottom right"}},"pop-top-left":{...E("top"),common:{transformOrigin:"top left"}},"pop-top-right":{...E("top"),common:{transformOrigin:"top right"}}},it={entering:"in",entered:"in",exiting:"out",exited:"out","pre-exiting":"out","pre-entering":"out"};function Ze({transition:t,state:e,duration:n,timingFunction:r}){const o={transitionDuration:`${n}ms`,transitionTimingFunction:r};return typeof t=="string"?t in k?{transitionProperty:k[t].transitionProperty,...o,...k[t].common,...k[t][it[e]]}:{}:{transitionProperty:t.transitionProperty,...o,...t.common,...t[it[e]]}}function Je({duration:t,exitDuration:e,timingFunction:n,mounted:r,onEnter:o,onExit:a,onEntered:i,onExited:s,enterDelay:p,exitDelay:c}){const u=Y(),d=ue(),m=u.respectReducedMotion?d:!1,[g,l]=h.useState(m?0:t),[S,x]=h.useState(r?"entered":"exited"),N=h.useRef(-1),T=h.useRef(-1),b=h.useRef(-1),v=y=>{const $=y?o:a,w=y?i:s;window.clearTimeout(N.current);const _=m?0:y?t:e;l(_),_===0?(typeof $=="function"&&$(),typeof w=="function"&&w(),x(y?"entered":"exited")):b.current=requestAnimationFrame(()=>{ae.flushSync(()=>{x(y?"pre-entering":"pre-exiting")}),b.current=requestAnimationFrame(()=>{typeof $=="function"&&$(),x(y?"entering":"exiting"),N.current=window.setTimeout(()=>{typeof w=="function"&&w(),x(y?"entered":"exited")},_)})})},C=y=>{if(window.clearTimeout(T.current),typeof(y?p:c)!="number"){v(y);return}T.current=window.setTimeout(()=>{v(y)},y?p:c)};return fe(()=>{C(r)},[r]),h.useEffect(()=>()=>{window.clearTimeout(N.current),cancelAnimationFrame(b.current)},[]),{transitionDuration:g,transitionStatus:S,transitionTimingFunction:n||"ease"}}function St({keepMounted:t,transition:e="fade",duration:n=250,exitDuration:r=n,mounted:o,children:a,timingFunction:i="ease",onExit:s,onEntered:p,onEnter:c,onExited:u,enterDelay:d,exitDelay:m}){const{transitionDuration:g,transitionStatus:l,transitionTimingFunction:S}=Je({mounted:o,exitDuration:r,duration:n,timingFunction:i,onExit:s,onEntered:p,onEnter:c,onExited:u,enterDelay:d,exitDelay:m});return g===0?o?f.jsx(f.Fragment,{children:a({})}):t?a({display:"none"}):null:l==="exited"?t?a({display:"none"}):null:f.jsx(f.Fragment,{children:a(Ze({transition:e,duration:g,state:l,timingFunction:S}))})}St.displayName="@mantine/core/Transition";var j={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};const xt=h.forwardRef(({className:t,...e},n)=>f.jsxs(R,{component:"span",className:O(j.barsLoader,t),...e,ref:n,children:[f.jsx("span",{className:j.bar}),f.jsx("span",{className:j.bar}),f.jsx("span",{className:j.bar})]}));xt.displayName="@mantine/core/Bars";const wt=h.forwardRef(({className:t,...e},n)=>f.jsxs(R,{component:"span",className:O(j.dotsLoader,t),...e,ref:n,children:[f.jsx("span",{className:j.dot}),f.jsx("span",{className:j.dot}),f.jsx("span",{className:j.dot})]}));wt.displayName="@mantine/core/Dots";const vt=h.forwardRef(({className:t,...e},n)=>f.jsx(R,{component:"span",className:O(j.ovalLoader,t),...e,ref:n}));vt.displayName="@mantine/core/Oval";const Nt={bars:xt,oval:vt,dots:wt},tn={loaders:Nt,type:"oval"},en=(t,{size:e,color:n})=>({root:{"--loader-size":B(e,"loader-size"),"--loader-color":n?oe(n,t):void 0}}),W=J((t,e)=>{const n=A("Loader",tn,t),{size:r,color:o,type:a,vars:i,className:s,style:p,classNames:c,styles:u,unstyled:d,loaders:m,variant:g,children:l,...S}=n,x=M({name:"Loader",props:n,classes:j,className:s,style:p,classNames:c,styles:u,unstyled:d,vars:i,varsResolver:en});return l?f.jsx(R,{...x("root"),ref:e,...S,children:l}):f.jsx(R,{...x("root"),ref:e,component:m[a],variant:g,size:r,...S})});W.defaultLoaders=Nt;W.classes=j;W.displayName="@mantine/core/Loader";var L={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844",groupSection:"m_70be2a01"};const st={orientation:"horizontal"},nn=(t,{borderWidth:e})=>({group:{"--button-border-width":P(e)}}),et=J((t,e)=>{const n=A("ButtonGroup",st,t),{className:r,style:o,classNames:a,styles:i,unstyled:s,orientation:p,vars:c,borderWidth:u,variant:d,mod:m,...g}=A("ButtonGroup",st,t),l=M({name:"ButtonGroup",props:n,classes:L,className:r,style:o,classNames:a,styles:i,unstyled:s,vars:c,varsResolver:nn,rootSelector:"group"});return f.jsx(R,{...l("group"),ref:e,variant:d,mod:[{"data-orientation":p},m],role:"group",...g})});et.classes=L;et.displayName="@mantine/core/ButtonGroup";const ct={},rn=(t,{radius:e,color:n,gradient:r,variant:o,autoContrast:a,size:i})=>{const s=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:r,variant:o||"filled",autoContrast:a});return{groupSection:{"--section-height":B(i,"section-height"),"--section-padding-x":B(i,"section-padding-x"),"--section-fz":i!=null&&i.includes("compact")?I(i.replace("compact-","")):I(i),"--section-radius":e===void 0?void 0:ut(e),"--section-bg":n||o?s.background:void 0,"--section-color":s.color,"--section-bd":n||o?s.border:void 0}}},nt=J((t,e)=>{const n=A("ButtonGroupSection",ct,t),{className:r,style:o,classNames:a,styles:i,unstyled:s,vars:p,variant:c,gradient:u,radius:d,autoContrast:m,...g}=A("ButtonGroupSection",ct,t),l=M({name:"ButtonGroupSection",props:n,classes:L,className:r,style:o,classNames:a,styles:i,unstyled:s,vars:p,varsResolver:rn,rootSelector:"groupSection"});return f.jsx(R,{...l("groupSection"),ref:e,variant:c,...g})});nt.classes=L;nt.displayName="@mantine/core/ButtonGroupSection";const on={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${P(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},an={},sn=(t,{radius:e,color:n,gradient:r,variant:o,size:a,justify:i,autoContrast:s})=>{const p=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:r,variant:o||"filled",autoContrast:s});return{root:{"--button-justify":i,"--button-height":B(a,"button-height"),"--button-padding-x":B(a,"button-padding-x"),"--button-fz":a!=null&&a.includes("compact")?I(a.replace("compact-","")):I(a),"--button-radius":e===void 0?void 0:ut(e),"--button-bg":n||o?p.background:void 0,"--button-hover":n||o?p.hover:void 0,"--button-color":p.color,"--button-bd":n||o?p.border:void 0,"--button-hover-color":n||o?p.hoverColor:void 0}}},F=ht((t,e)=>{const n=A("Button",an,t),{style:r,vars:o,className:a,color:i,disabled:s,children:p,leftSection:c,rightSection:u,fullWidth:d,variant:m,radius:g,loading:l,loaderProps:S,gradient:x,classNames:N,styles:T,unstyled:b,"data-disabled":v,autoContrast:C,mod:y,...$}=n,w=M({name:"Button",props:n,classes:L,className:a,style:r,classNames:N,styles:T,unstyled:b,vars:o,varsResolver:sn}),_=!!c,z=!!u;return f.jsxs(tt,{ref:e,...w("root",{active:!s&&!l&&!v}),unstyled:b,variant:m,disabled:s||l,mod:[{disabled:s||v,loading:l,block:d,"with-left-section":_,"with-right-section":z},y],...$,children:[f.jsx(St,{mounted:!!l,transition:on,duration:150,children:G=>f.jsx(R,{component:"span",...w("loader",{style:G}),"aria-hidden":!0,children:f.jsx(W,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...S})})}),f.jsxs("span",{...w("inner"),children:[c&&f.jsx(R,{component:"span",...w("section"),mod:{position:"left"},children:c}),f.jsx(R,{component:"span",mod:{loading:l},...w("label"),children:p}),u&&f.jsx(R,{component:"span",...w("section"),mod:{position:"right"},children:u})]})]})});F.classes=L;F.displayName="@mantine/core/Button";F.Group=et;F.GroupSection=nt;function un({auth:t,laravelVersion:e,phpVersion:n}){return f.jsxs(f.Fragment,{children:[f.jsx(F,{children:"dfsfdf"})," "]})}export{un as default};
