import{r as d,j as C}from"./index-D0yKTez9.js";import{u as L}from"./useTranslation-BnLNuHpA.js";import{R as A}from"./LoadingOutlined-C56XeQD2.js";import{j as X,f as K,c as H,e as j,_ as V,g as F,m as B,a as G,o as p,A as Q,F as J,C as U,D as Y}from"./asyncToGenerator-BkuUPXfv.js";import{u as D}from"./isVisible-Sl-fNJj3.js";import{K as z}from"./KeyCode-YJeLD0Se.js";import{W as Z}from"./index-DZIr8kDV.js";import{u as ee}from"./useSize-B8LBL3U9.js";import"./AntdIcon-DJ4CBgrb.js";import"./reactNode-DXnur212.js";import"./UnstableContext-l-75MhYX.js";var ne=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],P=d.forwardRef(function(e,n){var a,i=e.prefixCls,l=i===void 0?"rc-switch":i,r=e.className,s=e.checked,c=e.defaultChecked,t=e.disabled,o=e.loadingIcon,h=e.checkedChildren,u=e.unCheckedChildren,I=e.onClick,$=e.onChange,v=e.onKeyDown,M=X(e,ne),E=D(!1,{value:s,defaultValue:c}),y=K(E,2),w=y[0],S=y[1];function f(g,k){var b=w;return t||(b=g,S(b),$==null||$(b,k)),b}function N(g){g.which===z.LEFT?f(!1,g):g.which===z.RIGHT&&f(!0,g),v==null||v(g)}function m(g){var k=f(!w,g);I==null||I(k,g)}var q=H(l,r,(a={},j(a,"".concat(l,"-checked"),w),j(a,"".concat(l,"-disabled"),t),a));return d.createElement("button",V({},M,{type:"button",role:"switch","aria-checked":w,disabled:t,className:q,ref:n,onKeyDown:N,onClick:m}),o,d.createElement("span",{className:"".concat(l,"-inner")},d.createElement("span",{className:"".concat(l,"-inner-checked")},h),d.createElement("span",{className:"".concat(l,"-inner-unchecked")},u)))});P.displayName="Switch";const ie=e=>{const{componentCls:n,trackHeightSM:a,trackPadding:i,trackMinWidthSM:l,innerMinMarginSM:r,innerMaxMarginSM:s,handleSizeSM:c,calc:t}=e,o=`${n}-inner`,h=p(t(c).add(t(i).mul(2)).equal()),u=p(t(s).mul(2).equal());return{[n]:{[`&${n}-small`]:{minWidth:l,height:a,lineHeight:p(a),[`${n}-inner`]:{paddingInlineStart:s,paddingInlineEnd:r,[`${o}-checked, ${o}-unchecked`]:{minHeight:a},[`${o}-checked`]:{marginInlineStart:`calc(-100% + ${h} - ${u})`,marginInlineEnd:`calc(100% - ${h} + ${u})`},[`${o}-unchecked`]:{marginTop:t(a).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`${n}-handle`]:{width:c,height:c},[`${n}-loading-icon`]:{top:t(t(c).sub(e.switchLoadingIconSize)).div(2).equal(),fontSize:e.switchLoadingIconSize},[`&${n}-checked`]:{[`${n}-inner`]:{paddingInlineStart:r,paddingInlineEnd:s,[`${o}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${o}-unchecked`]:{marginInlineStart:`calc(100% - ${h} + ${u})`,marginInlineEnd:`calc(-100% + ${h} - ${u})`}},[`${n}-handle`]:{insetInlineStart:`calc(100% - ${p(t(c).add(i).equal())})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${o}`]:{[`${o}-unchecked`]:{marginInlineStart:t(e.marginXXS).div(2).equal(),marginInlineEnd:t(e.marginXXS).mul(-1).div(2).equal()}},[`&${n}-checked ${o}`]:{[`${o}-checked`]:{marginInlineStart:t(e.marginXXS).mul(-1).div(2).equal(),marginInlineEnd:t(e.marginXXS).div(2).equal()}}}}}}},ae=e=>{const{componentCls:n,handleSize:a,calc:i}=e;return{[n]:{[`${n}-loading-icon${e.iconCls}`]:{position:"relative",top:i(i(a).sub(e.fontSize)).div(2).equal(),color:e.switchLoadingIconColor,verticalAlign:"top"},[`&${n}-checked ${n}-loading-icon`]:{color:e.switchColor}}}},te=e=>{const{componentCls:n,trackPadding:a,handleBg:i,handleShadow:l,handleSize:r,calc:s}=e,c=`${n}-handle`;return{[n]:{[c]:{position:"absolute",top:a,insetInlineStart:a,width:r,height:r,transition:`all ${e.switchDuration} ease-in-out`,"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:i,borderRadius:s(r).div(2).equal(),boxShadow:l,transition:`all ${e.switchDuration} ease-in-out`,content:'""'}},[`&${n}-checked ${c}`]:{insetInlineStart:`calc(100% - ${p(s(r).add(a).equal())})`},[`&:not(${n}-disabled):active`]:{[`${c}::before`]:{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0},[`&${n}-checked ${c}::before`]:{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}}}}},ce=e=>{const{componentCls:n,trackHeight:a,trackPadding:i,innerMinMargin:l,innerMaxMargin:r,handleSize:s,calc:c}=e,t=`${n}-inner`,o=p(c(s).add(c(i).mul(2)).equal()),h=p(c(r).mul(2).equal());return{[n]:{[t]:{display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:r,paddingInlineEnd:l,transition:`padding-inline-start ${e.switchDuration} ease-in-out, padding-inline-end ${e.switchDuration} ease-in-out`,[`${t}-checked, ${t}-unchecked`]:{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:`margin-inline-start ${e.switchDuration} ease-in-out, margin-inline-end ${e.switchDuration} ease-in-out`,pointerEvents:"none",minHeight:a},[`${t}-checked`]:{marginInlineStart:`calc(-100% + ${o} - ${h})`,marginInlineEnd:`calc(100% - ${o} + ${h})`},[`${t}-unchecked`]:{marginTop:c(a).mul(-1).equal(),marginInlineStart:0,marginInlineEnd:0}},[`&${n}-checked ${t}`]:{paddingInlineStart:l,paddingInlineEnd:r,[`${t}-checked`]:{marginInlineStart:0,marginInlineEnd:0},[`${t}-unchecked`]:{marginInlineStart:`calc(100% - ${o} + ${h})`,marginInlineEnd:`calc(-100% + ${o} - ${h})`}},[`&:not(${n}-disabled):active`]:{[`&:not(${n}-checked) ${t}`]:{[`${t}-unchecked`]:{marginInlineStart:c(i).mul(2).equal(),marginInlineEnd:c(i).mul(-1).mul(2).equal()}},[`&${n}-checked ${t}`]:{[`${t}-checked`]:{marginInlineStart:c(i).mul(-1).mul(2).equal(),marginInlineEnd:c(i).mul(2).equal()}}}}}},le=e=>{const{componentCls:n,trackHeight:a,trackMinWidth:i}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},G(e)),{position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:i,height:a,lineHeight:p(a),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:`all ${e.motionDurationMid}`,userSelect:"none",[`&:hover:not(${n}-disabled)`]:{background:e.colorTextTertiary}}),Q(e)),{[`&${n}-checked`]:{background:e.switchColor,[`&:hover:not(${n}-disabled)`]:{background:e.colorPrimaryHover}},[`&${n}-loading, &${n}-disabled`]:{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}},[`&${n}-rtl`]:{direction:"rtl"}})}},oe=e=>{const{fontSize:n,lineHeight:a,controlHeight:i,colorWhite:l}=e,r=n*a,s=i/2,c=2,t=r-c*2,o=s-c*2;return{trackHeight:r,trackHeightSM:s,trackMinWidth:t*2+c*4,trackMinWidthSM:o*2+c*2,trackPadding:c,handleBg:l,handleSize:t,handleSizeSM:o,handleShadow:`0 2px 4px 0 ${new J("#00230b").setA(.2).toRgbString()}`,innerMinMargin:t/2,innerMaxMargin:t+c+c*2,innerMinMarginSM:o/2,innerMaxMarginSM:o+c+c*2}},re=F("Switch",e=>{const n=B(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:e.calc(e.fontSizeIcon).mul(.75).equal(),switchLoadingIconColor:`rgba(0, 0, 0, ${e.opacityLoading})`,switchHandleActiveInset:"-30%"});return[le(n),ce(n),te(n),ae(n),ie(n)]},oe);var se=function(e,n){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(a[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,i=Object.getOwnPropertySymbols(e);l<i.length;l++)n.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(a[i[l]]=e[i[l]]);return a};const de=d.forwardRef((e,n)=>{const{prefixCls:a,size:i,disabled:l,loading:r,className:s,rootClassName:c,style:t,checked:o,value:h,defaultChecked:u,defaultValue:I,onChange:$}=e,v=se(e,["prefixCls","size","disabled","loading","className","rootClassName","style","checked","value","defaultChecked","defaultValue","onChange"]),[M,E]=D(!1,{value:o??h,defaultValue:u??I}),{getPrefixCls:y,direction:w,switch:S}=d.useContext(U),f=d.useContext(Y),N=(l??f)||r,m=y("switch",a),q=d.createElement("div",{className:`${m}-handle`},r&&d.createElement(A,{className:`${m}-loading-icon`})),[g,k,b]=re(m),_=ee(i),T=H(S==null?void 0:S.className,{[`${m}-small`]:_==="small",[`${m}-loading`]:r,[`${m}-rtl`]:w==="rtl"},s,c,k,b),W=Object.assign(Object.assign({},S==null?void 0:S.style),t),R=function(){E(arguments.length<=0?void 0:arguments[0]),$==null||$.apply(void 0,arguments)};return g(d.createElement(Z,{component:"Switch"},d.createElement(P,Object.assign({},v,{checked:M,onChange:R,prefixCls:m,className:T,style:W,disabled:N,ref:n,loadingIcon:q}))))}),O=de;O.__ANT_SWITCH=!0;const he="_wrap_wgqka_1",ge="_label_wgqka_6",ue="_title_wgqka_13",me="_info_wgqka_16",x={wrap:he,label:ge,title:ue,info:me},Se=d.memo(e=>{const{label:n,info:a,children:i}=e,{t:l}=L();return C.jsxs("div",{className:x.wrap,children:[C.jsxs("div",{className:[x.label].join(" "),children:[C.jsx("span",{className:x.title,children:l(n)}),i]}),a&&C.jsx("div",{className:x.info,children:l(a)})]})}),pe={},Ee=d.memo(e=>{const{value:n,setting:a,onChange:i}=e;return C.jsx(Se,{label:a.label,info:a.info,children:C.jsx("div",{className:pe.row,children:C.jsx(O,{value:n.value,onChange:l=>{i({value:l})}})})})});export{Ee as default};
