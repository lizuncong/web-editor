const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DejOdTjx.js","assets/index-BWMJH7Cd.js","assets/index-D6BXZ84r.css","assets/index-BGOPLpxr.js","assets/useTranslation-DoOqtXlC.js","assets/index-DpNFnSlG.css","assets/index-BQFcI1nw.js","assets/asyncToGenerator-DPkdMSAf.js","assets/context-DMZxHnX6.js","assets/BaseInput-d3Mqhu7C.js","assets/compact-item-5orumCwJ.js","assets/isVisible-B4AkwhvB.js","assets/omit-DXgDXInf.js","assets/ContextIsolator-DA5_f77J.js","assets/pickAttrs-D-mlM0Oj.js","assets/AntdIcon-BYAAspU2.js","assets/useVariants-HYCIjJOI.js","assets/useCSSVarCls-BlLnlEzV.js","assets/useSize-CFIsf3Bm.js","assets/SearchOutlined-Ci_QLKr3.js","assets/reactNode-D2g5sgHi.js","assets/button-B2JRTFzf.js","assets/index-noSSZuSQ.js","assets/UnstableContext-BzeqDAHX.js","assets/LoadingOutlined-nuQyCjIx.js","assets/index-ze2mz5tR.js","assets/index-C05CgJlJ.js","assets/KeyCode-YJeLD0Se.js","assets/index-CVp-OPj8.js","assets/index-BBBl-LDV.js","assets/useId-OO8Iw62d.js","assets/useZIndex-CXIywrrk.js","assets/zoom-DwM6KK5C.js","assets/DownOutlined-CRbDGdiP.js","assets/index--6lNlyuo.css","assets/index-nk8VwgNL.js","assets/index-BcJXxwDV.css","assets/index-_dwTHF-B.js","assets/PurePanel-DGjjSPqY.js","assets/CloseOutlined-DiHaSCN5.js","assets/index-ZgptYddr.js","assets/plus-CLSs4F7B.js","assets/index-Ci8OvecK.css","assets/index-BkB6ajQl.js","assets/index-Dcygj8lm.js","assets/index-CkIIEt-m.css","assets/index-Cg4Hqmtb.js","assets/index-BdfMp9Gm.js","assets/index-L8WfHCt7.css"])))=>i.map(i=>d[i]);
import{r as t,_ as n,j as c}from"./index-BWMJH7Cd.js";import{u as m,a as v}from"./index-DVd2vBtl.js";import{W as i}from"./section-nwD_CGUa.js";import{u as V}from"./useTranslation-DoOqtXlC.js";const p=t.lazy(()=>n(()=>import("./index-DejOdTjx.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),S=t.lazy(()=>n(()=>import("./index-C05CgJlJ.js"),__vite__mapDeps([26,1,2,3,4,5,7,11,27,28,29,30,25,8,13,31,20,32,33,15,9,10,16,17,18,34]))),f=t.lazy(()=>n(()=>import("./index-nk8VwgNL.js"),__vite__mapDeps([35,1,2,4,24,7,15,11,27,22,20,23,18,36]))),D=t.lazy(()=>n(()=>import("./index-_dwTHF-B.js"),__vite__mapDeps([37,1,2,3,4,5,7,11,29,30,25,8,27,14,15,12,31,38,16,17,18,10,39,33,24,19]))),R=t.lazy(()=>n(()=>import("./index-ZgptYddr.js"),__vite__mapDeps([40,1,2,3,4,5,41,7,15,23,14,24,27,17,31,39,42]))),y=t.lazy(()=>n(()=>import("./index-BkB6ajQl.js"),__vite__mapDeps([43,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),x=t.lazy(()=>n(()=>import("./index-Dcygj8lm.js"),__vite__mapDeps([44,1,2,4,45]))),C=t.lazy(()=>n(()=>import("./index-Cg4Hqmtb.js"),__vite__mapDeps([46,1,2,3,4,5]))),W=t.lazy(()=>n(()=>import("./index-BdfMp9Gm.js"),__vite__mapDeps([47,1,2,3,4,5,41,7,15,23,14,31,30,21,12,22,11,20,18,8,13,24,10,39,27,17,38,32,48]))),I={[i.text]:p,[i.range]:S,[i.select]:D,[i.switch]:f,[i.group_header]:x,[i.collection_picker]:C,[i.image_picker]:W,[i.video]:R,[i.video_url]:y,[i.product_picker]:p,[i.url]:p},P={},T=t.memo(a=>{const{settings:u,settingValue:d,onSettingValueChange:r}=a,s=t.useRef(d),l=t.useRef(r);s.current=d,l.current=r;const g=t.useCallback((o,e)=>{const _={...s.current,[o.id]:e};l.current(_)},[]);return c.jsx("div",{className:P.form,children:u.map(o=>{const e=I[o.type],_=o.id?d[o.id]:{value:""};return c.jsx(e,{setting:o,value:_,onChange:h=>{g(o,h)}},o.id??o.label)})})}),A="_container_2s4um_1",z="_header_2s4um_10",L="_list_2s4um_17",E={container:A,header:z,list:L},N=t.memo(()=>{const a=m(e=>e.editor.currentEditingForm),u=m(e=>e.editor.sectionConfigData),r=m(e=>e.editor.allSectionSchema)[a.type],s=u.sections[a.sectionId],{updateSectionConfigSectionBySectionId:l}=v(),{t:g}=V(),o=t.useCallback(e=>{console.log("newSettingValue...",e);const _={...s,settingsData:{...s.settingsData,settings:e}};l(a.sectionId,_)},[a,s,l]);return c.jsxs("div",{className:E.container,children:[c.jsx("div",{className:E.header,children:g(r.name)}),c.jsx("div",{className:E.list,children:c.jsx(T,{settings:r.settings??[],settingValue:s.settingsData.settings,onSettingValueChange:o})})]})});export{N as default};
