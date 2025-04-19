import{m as T,n as l,g as ar,r as ir,$ as wr,c as h,j as Br,d as f,_ as yr,q as Y}from"./asyncToGenerator-4zi380F6.js";import{R as u,r as N}from"./index-BAT9CQ3Y.js";import{g as Er}from"./useVariants-DkkxA4uc.js";function nr(r){return T(r,{inputAffixPadding:r.paddingXXS})}const lr=r=>{const{controlHeight:o,fontSize:e,lineHeight:a,lineWidth:i,controlHeightSM:b,controlHeightLG:g,fontSizeLG:d,lineHeightLG:m,paddingSM:$,controlPaddingHorizontalSM:I,controlPaddingHorizontal:j,colorFillAlter:H,colorPrimaryHover:z,colorPrimary:S,controlOutlineWidth:C,controlOutline:A,colorErrorOutline:B,colorWarningOutline:p,colorBgContainer:x,inputFontSize:y,inputFontSizeLG:F,inputFontSizeSM:s}=r,n=y||e,w=s||n,c=F||d,t=Math.round((o-n*a)/2*10)/10-i,E=Math.round((b-w*a)/2*10)/10-i,W=Math.ceil((g-c*m)/2*10)/10-i;return{paddingBlock:Math.max(t,0),paddingBlockSM:Math.max(E,0),paddingBlockLG:Math.max(W,0),paddingInline:$-i,paddingInlineSM:I-i,paddingInlineLG:j-i,addonBg:H,activeBorderColor:S,hoverBorderColor:z,activeShadow:`0 0 0 ${C}px ${A}`,errorActiveShadow:`0 0 0 ${C}px ${B}`,warningActiveShadow:`0 0 0 ${C}px ${p}`,hoverBg:x,activeBg:x,inputFontSize:n,inputFontSizeLG:c,inputFontSizeSM:w}},Rr=r=>({borderColor:r.hoverBorderColor,backgroundColor:r.hoverBg}),_=r=>({color:r.colorTextDisabled,backgroundColor:r.colorBgContainerDisabled,borderColor:r.colorBorder,boxShadow:"none",cursor:"not-allowed",opacity:1,"input[disabled], textarea[disabled]":{cursor:"not-allowed"},"&:hover:not([disabled])":Object.assign({},Rr(T(r,{hoverBorderColor:r.colorBorder,hoverBg:r.colorBgContainerDisabled})))}),tr=(r,o)=>({background:r.colorBgContainer,borderWidth:r.lineWidth,borderStyle:r.lineType,borderColor:o.borderColor,"&:hover":{borderColor:o.hoverBorderColor,backgroundColor:r.hoverBg},"&:focus, &:focus-within":{borderColor:o.activeBorderColor,boxShadow:o.activeShadow,outline:0,backgroundColor:r.activeBg}}),Z=(r,o)=>({[`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]:Object.assign(Object.assign({},tr(r,o)),{[`${r.componentCls}-prefix, ${r.componentCls}-suffix`]:{color:o.affixColor}}),[`&${r.componentCls}-status-${o.status}${r.componentCls}-disabled`]:{borderColor:o.borderColor}}),Or=(r,o)=>({"&-outlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},tr(r,{borderColor:r.colorBorder,hoverBorderColor:r.hoverBorderColor,activeBorderColor:r.activeBorderColor,activeShadow:r.activeShadow})),{[`&${r.componentCls}-disabled, &[disabled]`]:Object.assign({},_(r))}),Z(r,{status:"error",borderColor:r.colorError,hoverBorderColor:r.colorErrorBorderHover,activeBorderColor:r.colorError,activeShadow:r.errorActiveShadow,affixColor:r.colorError})),Z(r,{status:"warning",borderColor:r.colorWarning,hoverBorderColor:r.colorWarningBorderHover,activeBorderColor:r.colorWarning,activeShadow:r.warningActiveShadow,affixColor:r.colorWarning})),o)}),V=(r,o)=>({[`&${r.componentCls}-group-wrapper-status-${o.status}`]:{[`${r.componentCls}-group-addon`]:{borderColor:o.addonBorderColor,color:o.addonColor}}}),Ir=r=>({"&-outlined":Object.assign(Object.assign(Object.assign({[`${r.componentCls}-group`]:{"&-addon":{background:r.addonBg,border:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`},"&-addon:first-child":{borderInlineEnd:0},"&-addon:last-child":{borderInlineStart:0}}},V(r,{status:"error",addonBorderColor:r.colorError,addonColor:r.colorErrorText})),V(r,{status:"warning",addonBorderColor:r.colorWarning,addonColor:r.colorWarningText})),{[`&${r.componentCls}-group-wrapper-disabled`]:{[`${r.componentCls}-group-addon`]:Object.assign({},_(r))}})}),jr=(r,o)=>{const{componentCls:e}=r;return{"&-borderless":Object.assign({background:"transparent",border:"none","&:focus, &:focus-within":{outline:"none"},[`&${e}-disabled, &[disabled]`]:{color:r.colorTextDisabled,cursor:"not-allowed"},[`&${e}-status-error`]:{"&, & input, & textarea":{color:r.colorError}},[`&${e}-status-warning`]:{"&, & input, & textarea":{color:r.colorWarning}}},o)}},dr=(r,o)=>{var e;return{background:o.bg,borderWidth:r.lineWidth,borderStyle:r.lineType,borderColor:"transparent","input&, & input, textarea&, & textarea":{color:(e=o==null?void 0:o.inputColor)!==null&&e!==void 0?e:"unset"},"&:hover":{background:o.hoverBg},"&:focus, &:focus-within":{outline:0,borderColor:o.activeBorderColor,backgroundColor:r.activeBg}}},k=(r,o)=>({[`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]:Object.assign(Object.assign({},dr(r,o)),{[`${r.componentCls}-prefix, ${r.componentCls}-suffix`]:{color:o.affixColor}})}),Wr=(r,o)=>({"&-filled":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},dr(r,{bg:r.colorFillTertiary,hoverBg:r.colorFillSecondary,activeBorderColor:r.activeBorderColor})),{[`&${r.componentCls}-disabled, &[disabled]`]:Object.assign({},_(r))}),k(r,{status:"error",bg:r.colorErrorBg,hoverBg:r.colorErrorBgHover,activeBorderColor:r.colorError,inputColor:r.colorErrorText,affixColor:r.colorError})),k(r,{status:"warning",bg:r.colorWarningBg,hoverBg:r.colorWarningBgHover,activeBorderColor:r.colorWarning,inputColor:r.colorWarningText,affixColor:r.colorWarning})),o)}),rr=(r,o)=>({[`&${r.componentCls}-group-wrapper-status-${o.status}`]:{[`${r.componentCls}-group-addon`]:{background:o.addonBg,color:o.addonColor}}}),Tr=r=>({"&-filled":Object.assign(Object.assign(Object.assign({[`${r.componentCls}-group`]:{"&-addon":{background:r.colorFillTertiary},[`${r.componentCls}-filled:not(:focus):not(:focus-within)`]:{"&:not(:first-child)":{borderInlineStart:`${l(r.lineWidth)} ${r.lineType} ${r.colorSplit}`},"&:not(:last-child)":{borderInlineEnd:`${l(r.lineWidth)} ${r.lineType} ${r.colorSplit}`}}}},rr(r,{status:"error",addonBg:r.colorErrorBg,addonColor:r.colorErrorText})),rr(r,{status:"warning",addonBg:r.colorWarningBg,addonColor:r.colorWarningText})),{[`&${r.componentCls}-group-wrapper-disabled`]:{[`${r.componentCls}-group`]:{"&-addon":{background:r.colorFillTertiary,color:r.colorTextDisabled},"&-addon:first-child":{borderInlineStart:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderTop:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderBottom:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`},"&-addon:last-child":{borderInlineEnd:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderTop:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,borderBottom:`${l(r.lineWidth)} ${r.lineType} ${r.colorBorder}`}}}})}),cr=(r,o)=>({background:r.colorBgContainer,borderWidth:`${l(r.lineWidth)} 0`,borderStyle:`${r.lineType} none`,borderColor:`transparent transparent ${o.borderColor} transparent`,borderRadius:0,"&:hover":{borderColor:`transparent transparent ${o.borderColor} transparent`,backgroundColor:r.hoverBg},"&:focus, &:focus-within":{borderColor:`transparent transparent ${o.borderColor} transparent`,outline:0,backgroundColor:r.activeBg}}),or=(r,o)=>({[`&${r.componentCls}-status-${o.status}:not(${r.componentCls}-disabled)`]:Object.assign(Object.assign({},cr(r,o)),{[`${r.componentCls}-prefix, ${r.componentCls}-suffix`]:{color:o.affixColor}}),[`&${r.componentCls}-status-${o.status}${r.componentCls}-disabled`]:{borderColor:`transparent transparent ${o.borderColor} transparent`}}),Hr=(r,o)=>({"&-underlined":Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},cr(r,{borderColor:r.colorBorder,hoverBorderColor:r.hoverBorderColor,activeBorderColor:r.activeBorderColor,activeShadow:r.activeShadow})),{[`&${r.componentCls}-disabled, &[disabled]`]:{color:r.colorTextDisabled,boxShadow:"none",cursor:"not-allowed","&:hover":{borderColor:`transparent transparent ${r.colorBorder} transparent`}},"input[disabled], textarea[disabled]":{cursor:"not-allowed"}}),or(r,{status:"error",borderColor:r.colorError,hoverBorderColor:r.colorErrorBorderHover,activeBorderColor:r.colorError,activeShadow:r.errorActiveShadow,affixColor:r.colorError})),or(r,{status:"warning",borderColor:r.colorWarning,hoverBorderColor:r.colorWarningBorderHover,activeBorderColor:r.colorWarning,activeShadow:r.warningActiveShadow,affixColor:r.colorWarning})),o)}),zr=r=>({"&::-moz-placeholder":{opacity:1},"&::placeholder":{color:r,userSelect:"none"},"&:placeholder-shown":{textOverflow:"ellipsis"}}),sr=r=>{const{paddingBlockLG:o,lineHeightLG:e,borderRadiusLG:a,paddingInlineLG:i}=r;return{padding:`${l(o)} ${l(i)}`,fontSize:r.inputFontSizeLG,lineHeight:e,borderRadius:a}},ur=r=>({padding:`${l(r.paddingBlockSM)} ${l(r.paddingInlineSM)}`,fontSize:r.inputFontSizeSM,borderRadius:r.borderRadiusSM}),gr=r=>Object.assign(Object.assign({position:"relative",display:"inline-block",width:"100%",minWidth:0,padding:`${l(r.paddingBlock)} ${l(r.paddingInline)}`,color:r.colorText,fontSize:r.inputFontSize,lineHeight:r.lineHeight,borderRadius:r.borderRadius,transition:`all ${r.motionDurationMid}`},zr(r.colorTextPlaceholder)),{"&-lg":Object.assign({},sr(r)),"&-sm":Object.assign({},ur(r)),"&-rtl, &-textarea-rtl":{direction:"rtl"}}),Ar=r=>{const{componentCls:o,antCls:e}=r;return{position:"relative",display:"table",width:"100%",borderCollapse:"separate",borderSpacing:0,"&[class*='col-']":{paddingInlineEnd:r.paddingXS,"&:last-child":{paddingInlineEnd:0}},[`&-lg ${o}, &-lg > ${o}-group-addon`]:Object.assign({},sr(r)),[`&-sm ${o}, &-sm > ${o}-group-addon`]:Object.assign({},ur(r)),[`&-lg ${e}-select-single ${e}-select-selector`]:{height:r.controlHeightLG},[`&-sm ${e}-select-single ${e}-select-selector`]:{height:r.controlHeightSM},[`> ${o}`]:{display:"table-cell","&:not(:first-child):not(:last-child)":{borderRadius:0}},[`${o}-group`]:{"&-addon, &-wrap":{display:"table-cell",width:1,whiteSpace:"nowrap",verticalAlign:"middle","&:not(:first-child):not(:last-child)":{borderRadius:0}},"&-wrap > *":{display:"block !important"},"&-addon":{position:"relative",padding:`0 ${l(r.paddingInline)}`,color:r.colorText,fontWeight:"normal",fontSize:r.inputFontSize,textAlign:"center",borderRadius:r.borderRadius,transition:`all ${r.motionDurationSlow}`,lineHeight:1,[`${e}-select`]:{margin:`${l(r.calc(r.paddingBlock).add(1).mul(-1).equal())} ${l(r.calc(r.paddingInline).mul(-1).equal())}`,[`&${e}-select-single:not(${e}-select-customize-input):not(${e}-pagination-size-changer)`]:{[`${e}-select-selector`]:{backgroundColor:"inherit",border:`${l(r.lineWidth)} ${r.lineType} transparent`,boxShadow:"none"}}},[`${e}-cascader-picker`]:{margin:`-9px ${l(r.calc(r.paddingInline).mul(-1).equal())}`,backgroundColor:"transparent",[`${e}-cascader-input`]:{textAlign:"start",border:0,boxShadow:"none"}}}},[o]:{width:"100%",marginBottom:0,textAlign:"inherit","&:focus":{zIndex:1,borderInlineEndWidth:1},"&:hover":{zIndex:1,borderInlineEndWidth:1,[`${o}-search-with-button &`]:{zIndex:0}}},[`> ${o}:first-child, ${o}-group-addon:first-child`]:{borderStartEndRadius:0,borderEndEndRadius:0,[`${e}-select ${e}-select-selector`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${o}-affix-wrapper`]:{[`&:not(:first-child) ${o}`]:{borderStartStartRadius:0,borderEndStartRadius:0},[`&:not(:last-child) ${o}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`> ${o}:last-child, ${o}-group-addon:last-child`]:{borderStartStartRadius:0,borderEndStartRadius:0,[`${e}-select ${e}-select-selector`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`${o}-affix-wrapper`]:{"&:not(:last-child)":{borderStartEndRadius:0,borderEndEndRadius:0,[`${o}-search &`]:{borderStartStartRadius:r.borderRadius,borderEndStartRadius:r.borderRadius}},[`&:not(:first-child), ${o}-search &:not(:first-child)`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&${o}-group-compact`]:Object.assign(Object.assign({display:"block"},wr()),{[`${o}-group-addon, ${o}-group-wrap, > ${o}`]:{"&:not(:first-child):not(:last-child)":{borderInlineEndWidth:r.lineWidth,"&:hover, &:focus":{zIndex:1}}},"& > *":{display:"inline-flex",float:"none",verticalAlign:"top",borderRadius:0},[`
        & > ${o}-affix-wrapper,
        & > ${o}-number-affix-wrapper,
        & > ${e}-picker-range
      `]:{display:"inline-flex"},"& > *:not(:last-child)":{marginInlineEnd:r.calc(r.lineWidth).mul(-1).equal(),borderInlineEndWidth:r.lineWidth},[o]:{float:"none"},[`& > ${e}-select > ${e}-select-selector,
      & > ${e}-select-auto-complete ${o},
      & > ${e}-cascader-picker ${o},
      & > ${o}-group-wrapper ${o}`]:{borderInlineEndWidth:r.lineWidth,borderRadius:0,"&:hover, &:focus":{zIndex:1}},[`& > ${e}-select-focused`]:{zIndex:1},[`& > ${e}-select > ${e}-select-arrow`]:{zIndex:1},[`& > *:first-child,
      & > ${e}-select:first-child > ${e}-select-selector,
      & > ${e}-select-auto-complete:first-child ${o},
      & > ${e}-cascader-picker:first-child ${o}`]:{borderStartStartRadius:r.borderRadius,borderEndStartRadius:r.borderRadius},[`& > *:last-child,
      & > ${e}-select:last-child > ${e}-select-selector,
      & > ${e}-cascader-picker:last-child ${o},
      & > ${e}-cascader-picker-focused:last-child ${o}`]:{borderInlineEndWidth:r.lineWidth,borderStartEndRadius:r.borderRadius,borderEndEndRadius:r.borderRadius},[`& > ${e}-select-auto-complete ${o}`]:{verticalAlign:"top"},[`${o}-group-wrapper + ${o}-group-wrapper`]:{marginInlineStart:r.calc(r.lineWidth).mul(-1).equal(),[`${o}-affix-wrapper`]:{borderRadius:0}},[`${o}-group-wrapper:not(:last-child)`]:{[`&${o}-search > ${o}-group`]:{[`& > ${o}-group-addon > ${o}-search-button`]:{borderRadius:0},[`& > ${o}`]:{borderStartStartRadius:r.borderRadius,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:r.borderRadius}}}})}},Fr=r=>{const{componentCls:o,controlHeightSM:e,lineWidth:a,calc:i}=r,g=i(e).sub(i(a).mul(2)).sub(16).div(2).equal();return{[o]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},ir(r)),gr(r)),Or(r)),Wr(r)),jr(r)),Hr(r)),{'&[type="color"]':{height:r.controlHeight,[`&${o}-lg`]:{height:r.controlHeightLG},[`&${o}-sm`]:{height:e,paddingTop:g,paddingBottom:g}},'&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':{appearance:"none"}})}},Gr=r=>{const{componentCls:o}=r;return{[`${o}-clear-icon`]:{margin:0,padding:0,lineHeight:0,color:r.colorTextQuaternary,fontSize:r.fontSizeIcon,verticalAlign:-1,cursor:"pointer",transition:`color ${r.motionDurationSlow}`,border:"none",outline:"none",backgroundColor:"transparent","&:hover":{color:r.colorTextTertiary},"&:active":{color:r.colorText},"&-hidden":{visibility:"hidden"},"&-has-suffix":{margin:`0 ${l(r.inputAffixPadding)}`}}}},Mr=r=>{const{componentCls:o,inputAffixPadding:e,colorTextDescription:a,motionDurationSlow:i,colorIcon:b,colorIconHover:g,iconCls:d}=r,m=`${o}-affix-wrapper`,$=`${o}-affix-wrapper-disabled`;return{[m]:Object.assign(Object.assign(Object.assign(Object.assign({},gr(r)),{display:"inline-flex",[`&:not(${o}-disabled):hover`]:{zIndex:1,[`${o}-search-with-button &`]:{zIndex:0}},"&-focused, &:focus":{zIndex:1},[`> input${o}`]:{padding:0},[`> input${o}, > textarea${o}`]:{fontSize:"inherit",border:"none",borderRadius:0,outline:"none",background:"transparent",color:"inherit","&::-ms-reveal":{display:"none"},"&:focus":{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[o]:{"&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center","> *:not(:last-child)":{marginInlineEnd:r.paddingXS}},"&-show-count-suffix":{color:a},"&-show-count-has-suffix":{marginInlineEnd:r.paddingXXS},"&-prefix":{marginInlineEnd:e},"&-suffix":{marginInlineStart:e}}}),Gr(r)),{[`${d}${o}-password-icon`]:{color:b,cursor:"pointer",transition:`all ${i}`,"&:hover":{color:g}}}),[`${o}-underlined`]:{borderRadius:0},[$]:{[`${d}${o}-password-icon`]:{color:b,cursor:"not-allowed","&:hover":{color:b}}}}},Lr=r=>{const{componentCls:o,borderRadiusLG:e,borderRadiusSM:a}=r;return{[`${o}-group`]:Object.assign(Object.assign(Object.assign({},ir(r)),Ar(r)),{"&-rtl":{direction:"rtl"},"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",width:"100%",textAlign:"start",verticalAlign:"top","&-rtl":{direction:"rtl"},"&-lg":{[`${o}-group-addon`]:{borderRadius:e,fontSize:r.inputFontSizeLG}},"&-sm":{[`${o}-group-addon`]:{borderRadius:a}}},Ir(r)),Tr(r)),{[`&:not(${o}-compact-first-item):not(${o}-compact-last-item)${o}-compact-item`]:{[`${o}, ${o}-group-addon`]:{borderRadius:0}},[`&:not(${o}-compact-last-item)${o}-compact-first-item`]:{[`${o}, ${o}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${o}-compact-first-item)${o}-compact-last-item`]:{[`${o}, ${o}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}},[`&:not(${o}-compact-last-item)${o}-compact-item`]:{[`${o}-affix-wrapper`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${o}-compact-first-item)${o}-compact-item`]:{[`${o}-affix-wrapper`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})})}},Dr=r=>{const{componentCls:o,antCls:e}=r,a=`${o}-search`;return{[a]:{[o]:{"&:hover, &:focus":{[`+ ${o}-group-addon ${a}-button:not(${e}-btn-primary)`]:{borderInlineStartColor:r.colorPrimaryHover}}},[`${o}-affix-wrapper`]:{height:r.controlHeight,borderRadius:0},[`${o}-lg`]:{lineHeight:r.calc(r.lineHeightLG).sub(2e-4).equal()},[`> ${o}-group`]:{[`> ${o}-group-addon:last-child`]:{insetInlineStart:-1,padding:0,border:0,[`${a}-button`]:{marginInlineEnd:-1,borderStartStartRadius:0,borderEndStartRadius:0,boxShadow:"none"},[`${a}-button:not(${e}-btn-primary)`]:{color:r.colorTextDescription,"&:hover":{color:r.colorPrimaryHover},"&:active":{color:r.colorPrimaryActive},[`&${e}-btn-loading::before`]:{insetInlineStart:0,insetInlineEnd:0,insetBlockStart:0,insetBlockEnd:0}}}},[`${a}-button`]:{height:r.controlHeight,"&:hover, &:focus":{zIndex:1}},"&-large":{[`${o}-affix-wrapper, ${a}-button`]:{height:r.controlHeightLG}},"&-small":{[`${o}-affix-wrapper, ${a}-button`]:{height:r.controlHeightSM}},"&-rtl":{direction:"rtl"},[`&${o}-compact-item`]:{[`&:not(${o}-compact-last-item)`]:{[`${o}-group-addon`]:{[`${o}-search-button`]:{marginInlineEnd:r.calc(r.lineWidth).mul(-1).equal(),borderRadius:0}}},[`&:not(${o}-compact-first-item)`]:{[`${o},${o}-affix-wrapper`]:{borderRadius:0}},[`> ${o}-group-addon ${o}-search-button,
        > ${o},
        ${o}-affix-wrapper`]:{"&:hover, &:focus, &:active":{zIndex:2}},[`> ${o}-affix-wrapper-focused`]:{zIndex:2}}}}},Nr=r=>{const{componentCls:o}=r;return{[`${o}-out-of-range`]:{[`&, & input, & textarea, ${o}-show-count-suffix, ${o}-data-count`]:{color:r.colorError}}}},Qr=ar(["Input","Shared"],r=>{const o=T(r,nr(r));return[Fr(o),Mr(o)]},lr,{resetFont:!1}),Jr=ar(["Input","Component"],r=>{const o=T(r,nr(r));return[Lr(o),Dr(o),Nr(o),Er(o)]},lr,{resetFont:!1});function _r(r){return!!(r.addonBefore||r.addonAfter)}function Pr(r){return!!(r.prefix||r.suffix||r.allowClear)}function er(r,o,e){var a=o.cloneNode(!0),i=Object.create(r,{target:{value:a},currentTarget:{value:a}});return a.value=e,typeof o.selectionStart=="number"&&typeof o.selectionEnd=="number"&&(a.selectionStart=o.selectionStart,a.selectionEnd=o.selectionEnd),a.setSelectionRange=function(){o.setSelectionRange.apply(o,arguments)},i}function Kr(r,o,e,a){if(e){var i=o;if(o.type==="click"){i=er(o,r,""),e(i);return}if(r.type!=="file"&&a!==void 0){i=er(o,r,a),e(i);return}e(i)}}function Yr(r,o){if(r){r.focus(o);var e=o||{},a=e.cursor;if(a){var i=r.value.length;switch(a){case"start":r.setSelectionRange(0,0);break;case"end":r.setSelectionRange(i,i);break;default:r.setSelectionRange(0,i)}}}}var Zr=u.forwardRef(function(r,o){var e,a,i,b=r.inputElement,g=r.children,d=r.prefixCls,m=r.prefix,$=r.suffix,I=r.addonBefore,j=r.addonAfter,H=r.className,z=r.style,S=r.disabled,C=r.readOnly,A=r.focused,B=r.triggerFocus,p=r.allowClear,x=r.value,y=r.handleReset,F=r.hidden,s=r.classes,n=r.classNames,w=r.dataAttrs,c=r.styles,t=r.components,E=r.onClear,W=g??b,pr=(t==null?void 0:t.affixWrapper)||"span",br=(t==null?void 0:t.groupWrapper)||"span",$r=(t==null?void 0:t.wrapper)||"span",P=(t==null?void 0:t.groupAddon)||"span",G=N.useRef(null),hr=function(O){var D;(D=G.current)!==null&&D!==void 0&&D.contains(O.target)&&(B==null||B())},q=Pr(r),v=N.cloneElement(W,{value:x,className:h((e=W.props)===null||e===void 0?void 0:e.className,!q&&(n==null?void 0:n.variant))||null}),X=N.useRef(null);if(u.useImperativeHandle(o,function(){return{nativeElement:X.current||G.current}}),q){var U=null;if(p){var fr=!S&&!C&&x,M="".concat(d,"-clear-icon"),vr=Br(p)==="object"&&p!==null&&p!==void 0&&p.clearIcon?p.clearIcon:"✖";U=u.createElement("button",{type:"button",tabIndex:-1,onClick:function(O){y==null||y(O),E==null||E()},onMouseDown:function(O){return O.preventDefault()},className:h(M,f(f({},"".concat(M,"-hidden"),!fr),"".concat(M,"-has-suffix"),!!$))},vr)}var R="".concat(d,"-affix-wrapper"),mr=h(R,f(f(f(f(f({},"".concat(d,"-disabled"),S),"".concat(R,"-disabled"),S),"".concat(R,"-focused"),A),"".concat(R,"-readonly"),C),"".concat(R,"-input-with-clear-btn"),$&&p&&x),s==null?void 0:s.affixWrapper,n==null?void 0:n.affixWrapper,n==null?void 0:n.variant),Sr=($||p)&&u.createElement("span",{className:h("".concat(d,"-suffix"),n==null?void 0:n.suffix),style:c==null?void 0:c.suffix},U,$);v=u.createElement(pr,yr({className:mr,style:c==null?void 0:c.affixWrapper,onClick:hr},w==null?void 0:w.affixWrapper,{ref:G}),m&&u.createElement("span",{className:h("".concat(d,"-prefix"),n==null?void 0:n.prefix),style:c==null?void 0:c.prefix},m),v,Sr)}if(_r(r)){var L="".concat(d,"-group"),Q="".concat(L,"-addon"),J="".concat(L,"-wrapper"),Cr=h("".concat(d,"-wrapper"),L,s==null?void 0:s.wrapper,n==null?void 0:n.wrapper),xr=h(J,f({},"".concat(J,"-disabled"),S),s==null?void 0:s.group,n==null?void 0:n.groupWrapper);v=u.createElement(br,{className:xr,ref:X},u.createElement($r,{className:Cr},I&&u.createElement(P,{className:Q},I),v,j&&u.createElement(P,{className:Q},j)))}return u.cloneElement(v,{className:h((a=v.props)===null||a===void 0?void 0:a.className,H)||null,style:Y(Y({},(i=v.props)===null||i===void 0?void 0:i.style),z),hidden:F})});export{Zr as B,nr as a,Or as b,Wr as c,Hr as d,jr as e,zr as f,gr as g,Ar as h,lr as i,Ir as j,Tr as k,Jr as l,Kr as r,Yr as t,Qr as u};
