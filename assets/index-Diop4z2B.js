import{r as f}from"./index-BAT9CQ3Y.js";import{c as j,i as Et,q as T,_ as Lt,n as M,g as Vt,m as dt,r as kt,t as ft,C as Bt,x as Dt,u as Mt,y as Xt}from"./asyncToGenerator-4zi380F6.js";import{a as Ht,u as Wt,T as Yt,g as Zt}from"./index-BevjlU19.js";import{u as Kt}from"./isVisible-CKdX2ET-.js";import{P as U,C as qt}from"./ContextIsolator-Dt87C3K0.js";import{K as v,u as Ft,z as Ut}from"./useZIndex-Bi-Jo7r9.js";import{i as Gt,c as Jt}from"./reactNode-An1eJuOb.js";import"./index-C9qh0_V-.js";import"./context-vsnPlEy5.js";function Qt(e,o){return U.reduce((n,t)=>{const r=e[`${t}1`],s=e[`${t}3`],a=e[`${t}6`],l=e[`${t}7`];return Object.assign(Object.assign({},n),o(t,{lightColor:r,lightBorderColor:s,darkColor:a,textColor:l}))},{})}const te=new v("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),ee=new v("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),mt=new v("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),pt=new v("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),oe=new v("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),re=new v("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),ae=new v("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),ne=new v("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),se=new v("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),ie=new v("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),le=new v("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),ce=new v("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),fe={zoom:{inKeyframes:te,outKeyframes:ee},"zoom-big":{inKeyframes:mt,outKeyframes:pt},"zoom-big-fast":{inKeyframes:mt,outKeyframes:pt},"zoom-left":{inKeyframes:ae,outKeyframes:ne},"zoom-right":{inKeyframes:se,outKeyframes:ie},"zoom-up":{inKeyframes:oe,outKeyframes:re},"zoom-down":{inKeyframes:le,outKeyframes:ce}},me=(e,o)=>{const{antCls:n}=e,t=`${n}-${o}`,{inKeyframes:r,outKeyframes:s}=fe[o];return[Ht(t,r,s,o==="zoom-big-fast"?e.motionDurationFast:e.motionDurationMid),{[`
        ${t}-enter,
        ${t}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:e.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${t}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]};function gt(e){var o=e.children,n=e.prefixCls,t=e.id,r=e.overlayInnerStyle,s=e.bodyClassName,a=e.className,l=e.style;return f.createElement("div",{className:j("".concat(n,"-content"),a),style:l},f.createElement("div",{className:j("".concat(n,"-inner"),s),id:t,role:"tooltip",style:r},typeof o=="function"?o():o))}var E={shiftX:64,adjustY:1},L={adjustX:1,shiftY:!0},h=[0,0],pe={left:{points:["cr","cl"],overflow:L,offset:[-4,0],targetOffset:h},right:{points:["cl","cr"],overflow:L,offset:[4,0],targetOffset:h},top:{points:["bc","tc"],overflow:E,offset:[0,-4],targetOffset:h},bottom:{points:["tc","bc"],overflow:E,offset:[0,4],targetOffset:h},topLeft:{points:["bl","tl"],overflow:E,offset:[0,-4],targetOffset:h},leftTop:{points:["tr","tl"],overflow:L,offset:[-4,0],targetOffset:h},topRight:{points:["br","tr"],overflow:E,offset:[0,-4],targetOffset:h},rightTop:{points:["tl","tr"],overflow:L,offset:[4,0],targetOffset:h},bottomRight:{points:["tr","br"],overflow:E,offset:[0,4],targetOffset:h},rightBottom:{points:["bl","br"],overflow:L,offset:[4,0],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:E,offset:[0,4],targetOffset:h},leftBottom:{points:["br","bl"],overflow:L,offset:[-4,0],targetOffset:h}},ue=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow","classNames","styles"],de=function(o,n){var t=o.overlayClassName,r=o.trigger,s=r===void 0?["hover"]:r,a=o.mouseEnterDelay,l=a===void 0?0:a,i=o.mouseLeaveDelay,p=i===void 0?.1:i,c=o.overlayStyle,m=o.prefixCls,b=m===void 0?"rc-tooltip":m,u=o.children,g=o.onVisibleChange,y=o.afterVisibleChange,P=o.transitionName,C=o.animation,w=o.motion,V=o.placement,k=V===void 0?"right":V,X=o.align,G=X===void 0?{}:X,H=o.destroyTooltipOnHide,J=H===void 0?!1:H,Q=o.defaultVisible,tt=o.getTooltipContainer,_=o.overlayInnerStyle;o.arrowContent;var $=o.overlay,W=o.id,B=o.showArrow,I=B===void 0?!0:B,S=o.classNames,x=o.styles,et=Et(o,ue),Y=Wt(W),Z=f.useRef(null);f.useImperativeHandle(n,function(){return Z.current});var D=T({},et);"visible"in o&&(D.popupVisible=o.visible);var K=function(){return f.createElement(gt,{key:"content",prefixCls:b,id:Y,bodyClassName:S==null?void 0:S.body,overlayInnerStyle:T(T({},_),x==null?void 0:x.body)},$)},ot=function(){var R=f.Children.only(u),rt=(R==null?void 0:R.props)||{},at=T(T({},rt),{},{"aria-describedby":$?Y:null});return f.cloneElement(u,at)};return f.createElement(Yt,Lt({popupClassName:j(t,S==null?void 0:S.root),prefixCls:b,popup:K,action:s,builtinPlacements:pe,popupPlacement:k,ref:Z,popupAlign:G,getPopupContainer:tt,onPopupVisibleChange:g,afterPopupVisibleChange:y,popupTransitionName:P,popupAnimation:C,popupMotion:w,defaultPopupVisible:Q,autoDestroy:J,mouseLeaveDelay:p,popupStyle:T(T({},c),x==null?void 0:x.root),mouseEnterDelay:l,arrow:I},D),ot())};const ge=f.forwardRef(de);function be(e){const{sizePopupArrow:o,borderRadiusXS:n,borderRadiusOuter:t}=e,r=o/2,s=0,a=r,l=t*1/Math.sqrt(2),i=r-t*(1-1/Math.sqrt(2)),p=r-n*(1/Math.sqrt(2)),c=t*(Math.sqrt(2)-1)+n*(1/Math.sqrt(2)),m=2*r-p,b=c,u=2*r-l,g=i,y=2*r-s,P=a,C=r*Math.sqrt(2)+t*(Math.sqrt(2)-2),w=t*(Math.sqrt(2)-1),V=`polygon(${w}px 100%, 50% ${w}px, ${2*r-w}px 100%, ${w}px 100%)`,k=`path('M ${s} ${a} A ${t} ${t} 0 0 0 ${l} ${i} L ${p} ${c} A ${n} ${n} 0 0 1 ${m} ${b} L ${u} ${g} A ${t} ${t} 0 0 0 ${y} ${P} Z')`;return{arrowShadowWidth:C,arrowPath:k,arrowPolygon:V}}const he=(e,o,n)=>{const{sizePopupArrow:t,arrowPolygon:r,arrowPath:s,arrowShadowWidth:a,borderRadiusXS:l,calc:i}=e;return{pointerEvents:"none",width:t,height:t,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t,height:i(t).div(2).equal(),background:o,clipPath:{_multi_value_:!0,value:[r,s]},content:'""'},"&::after":{content:'""',position:"absolute",width:a,height:a,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${M(l)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:n,zIndex:0,background:"transparent"}}},bt=8;function ht(e){const{contentRadius:o,limitVerticalRadius:n}=e,t=o>12?o+2:12;return{arrowOffsetHorizontal:t,arrowOffsetVertical:n?bt:t}}function F(e,o){return e?o:{}}function ve(e,o,n){const{componentCls:t,boxShadowPopoverArrow:r,arrowOffsetVertical:s,arrowOffsetHorizontal:a}=e,{arrowDistance:l=0,arrowPlacement:i={left:!0,right:!0,top:!0,bottom:!0}}={};return{[t]:Object.assign(Object.assign(Object.assign(Object.assign({[`${t}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},he(e,o,r)),{"&:before":{background:o}})]},F(!!i.top,{[[`&-placement-top > ${t}-arrow`,`&-placement-topLeft > ${t}-arrow`,`&-placement-topRight > ${t}-arrow`].join(",")]:{bottom:l,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},"&-placement-topLeft":{"--arrow-offset-horizontal":a,[`> ${t}-arrow`]:{left:{_skip_check_:!0,value:a}}},"&-placement-topRight":{"--arrow-offset-horizontal":`calc(100% - ${M(a)})`,[`> ${t}-arrow`]:{right:{_skip_check_:!0,value:a}}}})),F(!!i.bottom,{[[`&-placement-bottom > ${t}-arrow`,`&-placement-bottomLeft > ${t}-arrow`,`&-placement-bottomRight > ${t}-arrow`].join(",")]:{top:l,transform:"translateY(-100%)"},[`&-placement-bottom > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},"&-placement-bottomLeft":{"--arrow-offset-horizontal":a,[`> ${t}-arrow`]:{left:{_skip_check_:!0,value:a}}},"&-placement-bottomRight":{"--arrow-offset-horizontal":`calc(100% - ${M(a)})`,[`> ${t}-arrow`]:{right:{_skip_check_:!0,value:a}}}})),F(!!i.left,{[[`&-placement-left > ${t}-arrow`,`&-placement-leftTop > ${t}-arrow`,`&-placement-leftBottom > ${t}-arrow`].join(",")]:{right:{_skip_check_:!0,value:l},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${t}-arrow`]:{top:s},[`&-placement-leftBottom > ${t}-arrow`]:{bottom:s}})),F(!!i.right,{[[`&-placement-right > ${t}-arrow`,`&-placement-rightTop > ${t}-arrow`,`&-placement-rightBottom > ${t}-arrow`].join(",")]:{left:{_skip_check_:!0,value:l},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${t}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${t}-arrow`]:{top:s},[`&-placement-rightBottom > ${t}-arrow`]:{bottom:s}}))}}function ye(e,o,n,t){if(t===!1)return{adjustX:!1,adjustY:!1};const r=t&&typeof t=="object"?t:{},s={};switch(e){case"top":case"bottom":s.shiftX=o.arrowOffsetHorizontal*2+n,s.shiftY=!0,s.adjustY=!0;break;case"left":case"right":s.shiftY=o.arrowOffsetVertical*2+n,s.shiftX=!0,s.adjustX=!0;break}const a=Object.assign(Object.assign({},s),r);return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}const ut={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},we={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},Oe=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function Ce(e){const{arrowWidth:o,autoAdjustOverflow:n,arrowPointAtCenter:t,offset:r,borderRadius:s}=e,a=o/2,l={};return Object.keys(ut).forEach(i=>{const p=t&&we[i]||ut[i],c=Object.assign(Object.assign({},p),{offset:[0,0],dynamicInset:!0});switch(l[i]=c,Oe.has(i)&&(c.autoArrow=!1),i){case"top":case"topLeft":case"topRight":c.offset[1]=-a-r;break;case"bottom":case"bottomLeft":case"bottomRight":c.offset[1]=a+r;break;case"left":case"leftTop":case"leftBottom":c.offset[0]=-a-r;break;case"right":case"rightTop":case"rightBottom":c.offset[0]=a+r;break}const m=ht({contentRadius:s,limitVerticalRadius:!0});if(t)switch(i){case"topLeft":case"bottomLeft":c.offset[0]=-m.arrowOffsetHorizontal-a;break;case"topRight":case"bottomRight":c.offset[0]=m.arrowOffsetHorizontal+a;break;case"leftTop":case"rightTop":c.offset[1]=-m.arrowOffsetHorizontal*2+a;break;case"leftBottom":case"rightBottom":c.offset[1]=m.arrowOffsetHorizontal*2-a;break}c.overflow=ye(i,m,o,n),c.htmlRegion="visibleFirst"}),l}const $e=e=>{const{calc:o,componentCls:n,tooltipMaxWidth:t,tooltipColor:r,tooltipBg:s,tooltipBorderRadius:a,zIndexPopup:l,controlHeight:i,boxShadowSecondary:p,paddingSM:c,paddingXS:m,arrowOffsetHorizontal:b,sizePopupArrow:u}=e,g=o(a).add(u).add(b).equal(),y=o(a).mul(2).add(u).equal();return[{[n]:Object.assign(Object.assign(Object.assign(Object.assign({},kt(e)),{position:"absolute",zIndex:l,display:"block",width:"max-content",maxWidth:t,visibility:"visible","--valid-offset-x":"var(--arrow-offset-horizontal, var(--arrow-x))",transformOrigin:["var(--valid-offset-x, 50%)","var(--arrow-y, 50%)"].join(" "),"&-hidden":{display:"none"},"--antd-arrow-background-color":s,[`${n}-inner`]:{minWidth:y,minHeight:i,padding:`${M(e.calc(c).div(2).equal())} ${M(m)}`,color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:s,borderRadius:a,boxShadow:p,boxSizing:"border-box"},[["&-placement-topLeft","&-placement-topRight","&-placement-bottomLeft","&-placement-bottomRight"].join(",")]:{minWidth:g},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${n}-inner`]:{borderRadius:e.min(a,bt)}},[`${n}-content`]:{position:"relative"}}),Qt(e,(P,C)=>{let{darkColor:w}=C;return{[`&${n}-${P}`]:{[`${n}-inner`]:{backgroundColor:w},[`${n}-arrow`]:{"--antd-arrow-background-color":w}}}})),{"&-rtl":{direction:"rtl"}})},ve(e,"var(--antd-arrow-background-color)"),{[`${n}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow}}]},xe=e=>Object.assign(Object.assign({zIndexPopup:e.zIndexPopupBase+70},ht({contentRadius:e.borderRadius,limitVerticalRadius:!0})),be(dt(e,{borderRadiusOuter:Math.min(e.borderRadiusOuter,4)}))),vt=function(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Vt("Tooltip",t=>{const{borderRadius:r,colorTextLightSolid:s,colorBgSpotlight:a}=t,l=dt(t,{tooltipMaxWidth:250,tooltipColor:s,tooltipBorderRadius:r,tooltipBg:a});return[$e(l),me(t,"zoom-big-fast")]},xe,{resetStyle:!1,injectStyle:o})(e)},Pe=U.map(e=>`${e}-inverse`);function _e(e){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0)?[].concat(ft(Pe),ft(U)).includes(e):U.includes(e)}function yt(e,o){const n=_e(o),t=j({[`${e}-${o}`]:o&&n}),r={},s={};return o&&!n&&(r.background=o,s["--antd-arrow-background-color"]=o),{className:t,overlayStyle:r,arrowStyle:s}}const Se=e=>{const{prefixCls:o,className:n,placement:t="top",title:r,color:s,overlayInnerStyle:a}=e,{getPrefixCls:l}=f.useContext(Bt),i=l("tooltip",o),[p,c,m]=vt(i),b=yt(i,s),u=b.arrowStyle,g=Object.assign(Object.assign({},a),b.overlayStyle),y=j(c,m,i,`${i}-pure`,`${i}-placement-${t}`,n,b.className);return p(f.createElement("div",{className:y,style:u},f.createElement("div",{className:`${i}-arrow`}),f.createElement(gt,Object.assign({},e,{className:c,prefixCls:i,overlayInnerStyle:g}),r)))};var je=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]]);return n};const Te=f.forwardRef((e,o)=>{var n,t;const{prefixCls:r,openClassName:s,getTooltipContainer:a,color:l,overlayInnerStyle:i,children:p,afterOpenChange:c,afterVisibleChange:m,destroyTooltipOnHide:b,arrow:u=!0,title:g,overlay:y,builtinPlacements:P,arrowPointAtCenter:C=!1,autoAdjustOverflow:w=!0,motion:V,getPopupContainer:k,placement:X="top",mouseEnterDelay:G=.1,mouseLeaveDelay:H=.1,overlayStyle:J,rootClassName:Q,overlayClassName:tt,styles:_,classNames:$}=e,W=je(e,["prefixCls","openClassName","getTooltipContainer","color","overlayInnerStyle","children","afterOpenChange","afterVisibleChange","destroyTooltipOnHide","arrow","title","overlay","builtinPlacements","arrowPointAtCenter","autoAdjustOverflow","motion","getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName","overlayClassName","styles","classNames"]),B=!!u,[,I]=Dt(),{getPopupContainer:S,getPrefixCls:x,direction:et,className:Y,style:Z,classNames:D,styles:K}=Mt("tooltip"),ot=Xt(),z=f.useRef(null),R=()=>{var d;(d=z.current)===null||d===void 0||d.forceAlign()};f.useImperativeHandle(o,()=>{var d,O;return{forceAlign:R,forcePopupAlign:()=>{ot.deprecated(!1,"forcePopupAlign","forceAlign"),R()},nativeElement:(d=z.current)===null||d===void 0?void 0:d.nativeElement,popupElement:(O=z.current)===null||O===void 0?void 0:O.popupElement}});const[rt,at]=Kt(!1,{value:(n=e.open)!==null&&n!==void 0?n:e.visible,defaultValue:(t=e.defaultOpen)!==null&&t!==void 0?t:e.defaultVisible}),nt=!g&&!y&&g!==0,wt=d=>{var O,A;at(nt?!1:d),nt||((O=e.onOpenChange)===null||O===void 0||O.call(e,d),(A=e.onVisibleChange)===null||A===void 0||A.call(e,d))},Ot=f.useMemo(()=>{var d,O;let A=C;return typeof u=="object"&&(A=(O=(d=u.pointAtCenter)!==null&&d!==void 0?d:u.arrowPointAtCenter)!==null&&O!==void 0?O:C),P||Ce({arrowPointAtCenter:A,autoAdjustOverflow:w,arrowWidth:B?I.sizePopupArrow:0,borderRadius:I.borderRadius,offset:I.marginXXS})},[C,u,P,I]),st=f.useMemo(()=>g===0?g:y||g||"",[y,g]),Ct=f.createElement(qt,{space:!0},typeof st=="function"?st():st),N=x("tooltip",r),$t=x(),xt=e["data-popover-inject"];let it=rt;!("open"in e)&&!("visible"in e)&&nt&&(it=!1);const lt=f.isValidElement(p)&&!Gt(p)?p:f.createElement("span",null,p),q=lt.props,Pt=!q.className||typeof q.className=="string"?j(q.className,s||`${N}-open`):q.className,[_t,St,jt]=vt(N,!xt),ct=yt(N,l),Tt=ct.arrowStyle,It=j(tt,{[`${N}-rtl`]:et==="rtl"},ct.className,Q,St,jt,Y,D.root,$==null?void 0:$.root),zt=j(D.body,$==null?void 0:$.body),[Rt,Nt]=Ft("Tooltip",W.zIndex),At=f.createElement(ge,Object.assign({},W,{zIndex:Rt,showArrow:B,placement:X,mouseEnterDelay:G,mouseLeaveDelay:H,prefixCls:N,classNames:{root:It,body:zt},styles:{root:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Tt),K.root),Z),J),_==null?void 0:_.root),body:Object.assign(Object.assign(Object.assign(Object.assign({},K.body),i),_==null?void 0:_.body),ct.overlayStyle)},getTooltipContainer:k||a||S,ref:z,builtinPlacements:Ot,overlay:Ct,visible:it,onVisibleChange:wt,afterVisibleChange:c??m,arrowContent:f.createElement("span",{className:`${N}-arrow-content`}),motion:{motionName:Zt($t,"zoom-big-fast",e.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!b}),it?Jt(lt,{className:Pt}):lt);return _t(f.createElement(Ut.Provider,{value:Nt},At))}),Ie=Te;Ie._InternalPanelDoNotUseOrYouWillBeFired=Se;export{gt as P,Ie as T,be as a,ht as b,ve as g,me as i};
