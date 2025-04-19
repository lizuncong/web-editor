import{r,R as w,j as ge}from"./index-BFCfRDwP.js";import{C as We}from"./index-DLdyuPN8.js";import{S as Ge}from"./plus-5tC8YLdL.js";import{_ as B,e as T,j as Ie,c as z,d as pe,T as Ke,i as $e,q as Q,t as X,g as Ue,m as Be,r as Ve,C as Ce,y as Xe,p as qe,U as Ye}from"./asyncToGenerator-BXTvlP9k.js";import{g as Je}from"./UnstableContext-CQP7ETIn.js";import{I as ye}from"./AntdIcon-B8w2zbpd.js";import{p as Ze,R as Qe}from"./pickAttrs-BgrcGGCZ.js";import{R as et}from"./LoadingOutlined-hvJs2DGl.js";import{r as tt}from"./index-B8vqiPTS.js";import{K as nt}from"./KeyCode-YJeLD0Se.js";import{u as we}from"./useCSSVarCls-Czfjidfd.js";import{K as Ne,C as ot}from"./useZIndex-D-CyyMf0.js";import{R as at}from"./CloseOutlined-KpPnHHWK.js";import{u as rt}from"./constant-CvMX17Mv.js";var st={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},ct=function(t,a){return r.createElement(ye,B({},t,{ref:a,icon:st}))},it=r.forwardRef(ct),lt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},ut=function(t,a){return r.createElement(ye,B({},t,{ref:a,icon:lt}))},ft=r.forwardRef(ut),dt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},mt=function(t,a){return r.createElement(ye,B({},t,{ref:a,icon:dt}))},vt=r.forwardRef(mt),Me=r.forwardRef(function(e,t){var a=e.prefixCls,n=e.style,o=e.className,c=e.duration,u=c===void 0?4.5:c,y=e.showProgress,l=e.pauseOnHover,i=l===void 0?!0:l,h=e.eventKey,g=e.content,m=e.closable,v=e.closeIcon,S=v===void 0?"x":v,d=e.props,p=e.onClick,M=e.onNoticeClose,k=e.times,O=e.hovering,R=r.useState(!1),b=T(R,2),x=b[0],F=b[1],f=r.useState(0),s=T(f,2),C=s[0],E=s[1],j=r.useState(0),_=T(j,2),$=_[0],q=_[1],P=O||x,H=u>0&&y,W=function(){M(h)},Y=function(N){(N.key==="Enter"||N.code==="Enter"||N.keyCode===nt.ENTER)&&W()};r.useEffect(function(){if(!P&&u>0){var L=Date.now()-$,N=setTimeout(function(){W()},u*1e3-$);return function(){i&&clearTimeout(N),q(Date.now()-L)}}},[u,P,k]),r.useEffect(function(){if(!P&&H&&(i||$===0)){var L=performance.now(),N,I=function ce(){cancelAnimationFrame(N),N=requestAnimationFrame(function(ie){var V=ie+$-L,G=Math.min(V/(u*1e3),1);E(G*100),G<1&&ce()})};return I(),function(){i&&cancelAnimationFrame(N)}}},[u,$,P,H,k]);var ne=r.useMemo(function(){return Ie(m)==="object"&&m!==null?m:m?{closeIcon:S}:{}},[m,S]),se=Ze(ne,!0),J=100-(!C||C<0?0:C>100?100:C),D="".concat(a,"-notice");return r.createElement("div",B({},d,{ref:t,className:z(D,o,pe({},"".concat(D,"-closable"),m)),style:n,onMouseEnter:function(N){var I;F(!0),d==null||(I=d.onMouseEnter)===null||I===void 0||I.call(d,N)},onMouseLeave:function(N){var I;F(!1),d==null||(I=d.onMouseLeave)===null||I===void 0||I.call(d,N)},onClick:p}),r.createElement("div",{className:"".concat(D,"-content")},g),m&&r.createElement("a",B({tabIndex:0,className:"".concat(D,"-close"),onKeyDown:Y,"aria-label":"Close"},se,{onClick:function(N){N.preventDefault(),N.stopPropagation(),W()}}),ne.closeIcon),H&&r.createElement("progress",{className:"".concat(D,"-progress"),max:"100",value:J},J+"%"))}),je=w.createContext({}),gt=function(t){var a=t.children,n=t.classNames;return w.createElement(je.Provider,{value:{classNames:n}},a)},Se=8,be=3,Oe=16,pt=function(t){var a={offset:Se,threshold:be,gap:Oe};if(t&&Ie(t)==="object"){var n,o,c;a.offset=(n=t.offset)!==null&&n!==void 0?n:Se,a.threshold=(o=t.threshold)!==null&&o!==void 0?o:be,a.gap=(c=t.gap)!==null&&c!==void 0?c:Oe}return[!!t,a]},Ct=["className","style","classNames","styles"],yt=function(t){var a=t.configList,n=t.placement,o=t.prefixCls,c=t.className,u=t.style,y=t.motion,l=t.onAllNoticeRemoved,i=t.onNoticeClose,h=t.stack,g=r.useContext(je),m=g.classNames,v=r.useRef({}),S=r.useState(null),d=T(S,2),p=d[0],M=d[1],k=r.useState([]),O=T(k,2),R=O[0],b=O[1],x=a.map(function(P){return{config:P,key:String(P.key)}}),F=pt(h),f=T(F,2),s=f[0],C=f[1],E=C.offset,j=C.threshold,_=C.gap,$=s&&(R.length>0||x.length<=j),q=typeof y=="function"?y(n):y;return r.useEffect(function(){s&&R.length>1&&b(function(P){return P.filter(function(H){return x.some(function(W){var Y=W.key;return H===Y})})})},[R,x,s]),r.useEffect(function(){var P;if(s&&v.current[(P=x[x.length-1])===null||P===void 0?void 0:P.key]){var H;M(v.current[(H=x[x.length-1])===null||H===void 0?void 0:H.key])}},[x,s]),w.createElement(Ke,B({key:n,className:z(o,"".concat(o,"-").concat(n),m==null?void 0:m.list,c,pe(pe({},"".concat(o,"-stack"),!!s),"".concat(o,"-stack-expanded"),$)),style:u,keys:x,motionAppear:!0},q,{onAllRemoved:function(){l(n)}}),function(P,H){var W=P.config,Y=P.className,ne=P.style,se=P.index,J=W,D=J.key,L=J.times,N=String(D),I=W,ce=I.className,ie=I.style,V=I.classNames,G=I.styles,Le=$e(I,Ct),le=x.findIndex(function(ae){return ae.key===N}),oe={};if(s){var Z=x.length-1-(le>-1?le:se-1),xe=n==="top"||n==="bottom"?"-50%":"0";if(Z>0){var ue,fe,de;oe.height=$?(ue=v.current[N])===null||ue===void 0?void 0:ue.offsetHeight:p==null?void 0:p.offsetHeight;for(var Ee=0,me=0;me<Z;me++){var ve;Ee+=((ve=v.current[x[x.length-1-me].key])===null||ve===void 0?void 0:ve.offsetHeight)+_}var Te=($?Ee:Z*E)*(n.startsWith("top")?1:-1),De=!$&&p!==null&&p!==void 0&&p.offsetWidth&&(fe=v.current[N])!==null&&fe!==void 0&&fe.offsetWidth?((p==null?void 0:p.offsetWidth)-E*2*(Z<3?Z:3))/((de=v.current[N])===null||de===void 0?void 0:de.offsetWidth):1;oe.transform="translate3d(".concat(xe,", ").concat(Te,"px, 0) scaleX(").concat(De,")")}else oe.transform="translate3d(".concat(xe,", 0, 0)")}return w.createElement("div",{ref:H,className:z("".concat(o,"-notice-wrapper"),Y,V==null?void 0:V.wrapper),style:Q(Q(Q({},ne),oe),G==null?void 0:G.wrapper),onMouseEnter:function(){return b(function(K){return K.includes(N)?K:[].concat(X(K),[N])})},onMouseLeave:function(){return b(function(K){return K.filter(function(ze){return ze!==N})})}},w.createElement(Me,B({},Le,{ref:function(K){le>-1?v.current[N]=K:delete v.current[N]},prefixCls:o,classNames:V,styles:G,className:z(ce,m==null?void 0:m.notice),style:ie,times:L,key:D,eventKey:D,onNoticeClose:i,hovering:s&&R.length>0})))})},ht=r.forwardRef(function(e,t){var a=e.prefixCls,n=a===void 0?"rc-notification":a,o=e.container,c=e.motion,u=e.maxCount,y=e.className,l=e.style,i=e.onAllRemoved,h=e.stack,g=e.renderNotifications,m=r.useState([]),v=T(m,2),S=v[0],d=v[1],p=function(s){var C,E=S.find(function(j){return j.key===s});E==null||(C=E.onClose)===null||C===void 0||C.call(E),d(function(j){return j.filter(function(_){return _.key!==s})})};r.useImperativeHandle(t,function(){return{open:function(s){d(function(C){var E=X(C),j=E.findIndex(function(q){return q.key===s.key}),_=Q({},s);if(j>=0){var $;_.times=((($=C[j])===null||$===void 0?void 0:$.times)||0)+1,E[j]=_}else _.times=0,E.push(_);return u>0&&E.length>u&&(E=E.slice(-u)),E})},close:function(s){p(s)},destroy:function(){d([])}}});var M=r.useState({}),k=T(M,2),O=k[0],R=k[1];r.useEffect(function(){var f={};S.forEach(function(s){var C=s.placement,E=C===void 0?"topRight":C;E&&(f[E]=f[E]||[],f[E].push(s))}),Object.keys(O).forEach(function(s){f[s]=f[s]||[]}),R(f)},[S]);var b=function(s){R(function(C){var E=Q({},C),j=E[s]||[];return j.length||delete E[s],E})},x=r.useRef(!1);if(r.useEffect(function(){Object.keys(O).length>0?x.current=!0:x.current&&(i==null||i(),x.current=!1)},[O]),!o)return null;var F=Object.keys(O);return tt.createPortal(r.createElement(r.Fragment,null,F.map(function(f){var s=O[f],C=r.createElement(yt,{key:f,configList:s,placement:f,prefixCls:n,className:y==null?void 0:y(f),style:l==null?void 0:l(f),motion:c,onNoticeClose:p,onAllNoticeRemoved:b,stack:h});return g?g(C,{prefixCls:n,key:f}):C})),o)}),xt=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],Et=function(){return document.body},Re=0;function Nt(){for(var e={},t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach(function(o){o&&Object.keys(o).forEach(function(c){var u=o[c];u!==void 0&&(e[c]=u)})}),e}function St(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,a=t===void 0?Et:t,n=e.motion,o=e.prefixCls,c=e.maxCount,u=e.className,y=e.style,l=e.onAllRemoved,i=e.stack,h=e.renderNotifications,g=$e(e,xt),m=r.useState(),v=T(m,2),S=v[0],d=v[1],p=r.useRef(),M=r.createElement(ht,{container:S,ref:p,prefixCls:o,motion:n,maxCount:c,className:u,style:y,onAllRemoved:l,stack:i,renderNotifications:h}),k=r.useState([]),O=T(k,2),R=O[0],b=O[1],x=r.useMemo(function(){return{open:function(f){var s=Nt(g,f);(s.key===null||s.key===void 0)&&(s.key="rc-notification-".concat(Re),Re+=1),b(function(C){return[].concat(X(C),[{type:"open",config:s}])})},close:function(f){b(function(s){return[].concat(X(s),[{type:"close",key:f}])})},destroy:function(){b(function(f){return[].concat(X(f),[{type:"destroy"}])})}}},[]);return r.useEffect(function(){d(a())}),r.useEffect(function(){if(p.current&&R.length){R.forEach(function(s){switch(s.type){case"open":p.current.open(s.config);break;case"close":p.current.close(s.key);break;case"destroy":p.current.destroy();break}});var F,f;b(function(s){return(F!==s||!f)&&(F=s,f=s.filter(function(C){return!R.includes(C)})),f})}},[R]),[x,M]}const bt=e=>{const{componentCls:t,iconCls:a,boxShadow:n,colorText:o,colorSuccess:c,colorError:u,colorWarning:y,colorInfo:l,fontSizeLG:i,motionEaseInOutCirc:h,motionDurationSlow:g,marginXS:m,paddingXS:v,borderRadiusLG:S,zIndexPopup:d,contentPadding:p,contentBg:M}=e,k=`${t}-notice`,O=new Ne("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:v,transform:"translateY(0)",opacity:1}}),R=new Ne("MessageMoveOut",{"0%":{maxHeight:e.height,padding:v,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),b={padding:v,textAlign:"center",[`${t}-custom-content`]:{display:"flex",alignItems:"center"},[`${t}-custom-content > ${a}`]:{marginInlineEnd:m,fontSize:i},[`${k}-content`]:{display:"inline-block",padding:p,background:M,borderRadius:S,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${a}`]:{color:c},[`${t}-error > ${a}`]:{color:u},[`${t}-warning > ${a}`]:{color:y},[`${t}-info > ${a},
      ${t}-loading > ${a}`]:{color:l}};return[{[t]:Object.assign(Object.assign({},Ve(e)),{color:o,position:"fixed",top:m,width:"100%",pointerEvents:"none",zIndex:d,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:O,animationDuration:g,animationPlayState:"paused",animationTimingFunction:h},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:R,animationDuration:g,animationPlayState:"paused",animationTimingFunction:h},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${k}-wrapper`]:Object.assign({},b)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},b),{padding:0,textAlign:"start"})}]},Ot=e=>({zIndexPopup:e.zIndexPopupBase+ot+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),Fe=Ue("Message",e=>{const t=Be(e,{height:150});return[bt(t)]},Ot);var Rt=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const Pt={info:r.createElement(vt,null),success:r.createElement(it,null),error:r.createElement(Qe,null),warning:r.createElement(ft,null),loading:r.createElement(et,null)},Ae=e=>{let{prefixCls:t,type:a,icon:n,children:o}=e;return r.createElement("div",{className:z(`${t}-custom-content`,`${t}-${a}`)},n||Pt[a],r.createElement("span",null,o))},kt=e=>{const{prefixCls:t,className:a,type:n,icon:o,content:c}=e,u=Rt(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:y}=r.useContext(Ce),l=t||y("message"),i=we(l),[h,g,m]=Fe(l,i);return h(r.createElement(Me,Object.assign({},u,{prefixCls:l,className:z(a,g,`${l}-notice-pure-panel`,m,i),eventKey:"pure",duration:null,content:r.createElement(Ae,{prefixCls:l,type:n,icon:o},c)})))};function It(e,t){return{motionName:t??`${e}-move-up`}}function he(e){let t;const a=new Promise(o=>{t=e(()=>{o(!0)})}),n=()=>{t==null||t()};return n.then=(o,c)=>a.then(o,c),n.promise=a,n}var $t=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]]);return a};const wt=8,Mt=3,jt=e=>{let{children:t,prefixCls:a}=e;const n=we(a),[o,c,u]=Fe(a,n);return o(r.createElement(gt,{classNames:{list:z(c,u,n)}},t))},Ft=(e,t)=>{let{prefixCls:a,key:n}=t;return r.createElement(jt,{prefixCls:a,key:n},e)},At=r.forwardRef((e,t)=>{const{top:a,prefixCls:n,getContainer:o,maxCount:c,duration:u=Mt,rtl:y,transitionName:l,onAllRemoved:i}=e,{getPrefixCls:h,getPopupContainer:g,message:m,direction:v}=r.useContext(Ce),S=n||h("message"),d=()=>({left:"50%",transform:"translateX(-50%)",top:a??wt}),p=()=>z({[`${S}-rtl`]:y??v==="rtl"}),M=()=>It(S,l),k=r.createElement("span",{className:`${S}-close-x`},r.createElement(at,{className:`${S}-close-icon`})),[O,R]=St({prefixCls:S,style:d,className:p,motion:M,closable:!1,closeIcon:k,duration:u,getContainer:()=>(o==null?void 0:o())||(g==null?void 0:g())||document.body,maxCount:c,onAllRemoved:i,renderNotifications:Ft});return r.useImperativeHandle(t,()=>Object.assign(Object.assign({},O),{prefixCls:S,message:m})),R});let Pe=0;function _e(e){const t=r.useRef(null);return Xe(),[r.useMemo(()=>{const n=l=>{var i;(i=t.current)===null||i===void 0||i.close(l)},o=l=>{if(!t.current){const x=()=>{};return x.then=()=>{},x}const{open:i,prefixCls:h,message:g}=t.current,m=`${h}-notice`,{content:v,icon:S,type:d,key:p,className:M,style:k,onClose:O}=l,R=$t(l,["content","icon","type","key","className","style","onClose"]);let b=p;return b==null&&(Pe+=1,b=`antd-message-${Pe}`),he(x=>(i(Object.assign(Object.assign({},R),{key:b,content:r.createElement(Ae,{prefixCls:h,type:d,icon:S},v),placement:"top",className:z(d&&`${m}-${d}`,M,g==null?void 0:g.className),style:Object.assign(Object.assign({},g==null?void 0:g.style),k),onClose:()=>{O==null||O(),x()}})),()=>{n(b)}))},u={open:o,destroy:l=>{var i;l!==void 0?n(l):(i=t.current)===null||i===void 0||i.destroy()}};return["info","success","warning","error","loading"].forEach(l=>{const i=(h,g,m)=>{let v;h&&typeof h=="object"&&"content"in h?v=h:v={content:h};let S,d;typeof g=="function"?d=g:(S=g,d=m);const p=Object.assign(Object.assign({onClose:d,duration:S},v),{type:l});return o(p)};u[l]=i}),u},[]),r.createElement(At,Object.assign({key:"message-holder"},e,{ref:t}))]}function _t(e){return _e(e)}const Ht=w.createContext({});let A=null,U=e=>e(),ee=[],te={};function ke(){const{getContainer:e,duration:t,rtl:a,maxCount:n,top:o}=te,c=(e==null?void 0:e())||document.body;return{getContainer:()=>c,duration:t,rtl:a,maxCount:n,top:o}}const Lt=w.forwardRef((e,t)=>{const{messageConfig:a,sync:n}=e,{getPrefixCls:o}=r.useContext(Ce),c=te.prefixCls||o("message"),u=r.useContext(Ht),[y,l]=_e(Object.assign(Object.assign(Object.assign({},a),{prefixCls:c}),u.message));return w.useImperativeHandle(t,()=>{const i=Object.assign({},y);return Object.keys(i).forEach(h=>{i[h]=function(){return n(),y[h].apply(y,arguments)}}),{instance:i,sync:n}}),l}),Tt=w.forwardRef((e,t)=>{const[a,n]=w.useState(ke),o=()=>{n(ke)};w.useEffect(o,[]);const c=Ye(),u=c.getRootPrefixCls(),y=c.getIconPrefixCls(),l=c.getTheme(),i=w.createElement(Lt,{ref:t,sync:o,messageConfig:a});return w.createElement(qe,{prefixCls:u,iconPrefixCls:y,theme:l},c.holderRender?c.holderRender(i):i)});function re(){if(!A){const e=document.createDocumentFragment(),t={fragment:e};A=t,U(()=>{Je()(w.createElement(Tt,{ref:n=>{const{instance:o,sync:c}=n||{};Promise.resolve().then(()=>{!t.instance&&o&&(t.instance=o,t.sync=c,re())})}}),e)});return}A.instance&&(ee.forEach(e=>{const{type:t,skipped:a}=e;if(!a)switch(t){case"open":{U(()=>{const n=A.instance.open(Object.assign(Object.assign({},te),e.config));n==null||n.then(e.resolve),e.setCloseFn(n)});break}case"destroy":U(()=>{A==null||A.instance.destroy(e.key)});break;default:U(()=>{var n;const o=(n=A.instance)[t].apply(n,X(e.args));o==null||o.then(e.resolve),e.setCloseFn(o)})}}),ee=[])}function Dt(e){te=Object.assign(Object.assign({},te),e),U(()=>{var t;(t=A==null?void 0:A.sync)===null||t===void 0||t.call(A)})}function zt(e){const t=he(a=>{let n;const o={type:"open",config:e,resolve:a,setCloseFn:c=>{n=c}};return ee.push(o),()=>{n?U(()=>{n()}):o.skipped=!0}});return re(),t}function Wt(e,t){const a=he(n=>{let o;const c={type:e,args:t,resolve:n,setCloseFn:u=>{o=u}};return ee.push(c),()=>{o?U(()=>{o()}):c.skipped=!0}});return re(),a}const Gt=e=>{ee.push({type:"destroy",key:e}),re()},Kt=["success","info","warning","error","loading"],Ut={open:zt,destroy:Gt,config:Dt,useMessage:_t,_InternalPanelDoNotUseOrYouWillBeFired:kt},He=Ut;Kt.forEach(e=>{He[e]=function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return Wt(e,a)}});const Bt="_container_1pvcg_1",Vt={container:Bt},ln=r.memo(e=>{const[t,a]=He.useMessage(),{setting:n}=e,{t:o}=rt();return ge.jsxs(We,{label:n.label,info:n.info,children:[a,ge.jsxs("div",{onClick:()=>{t.open({type:"warning",content:"开发中，敬请期待！"})},className:Vt.container,children:[ge.jsx(Ge,{}),o("editor.selectvideo")]})]})});export{ln as default};
