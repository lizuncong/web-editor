const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DEYHX23J.js","assets/index-5YH52zMZ.js","assets/index-D6BXZ84r.css","assets/index-C_Zf6tU4.js","assets/isVisible-B1n3f-qW.js","assets/ContextIsolator-BmMToll3.js","assets/useTranslation-B875NlvU.js","assets/index-DpNFnSlG.css","assets/useSize-CG-0m2SO.js","assets/index-BQNngmwn.js","assets/index-B8lCSNry.js","assets/KeyCode-Bgp7GvX-.js","assets/index-DI1LBibc.js","assets/index--6lNlyuo.css","assets/index-BSh6gzGV.js","assets/index-BcJXxwDV.css"])))=>i.map(i=>d[i]);
import{r as s,_ as h,j as c}from"./index-5YH52zMZ.js";import{u as _,a as f}from"./index-C_lfwP19.js";import{W as t}from"./section-B0_XSMRP.js";import{u as v}from"./useTranslation-B875NlvU.js";const o=s.lazy(()=>h(()=>import("./index-DEYHX23J.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),C=s.lazy(()=>h(()=>import("./index-B8lCSNry.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,11,12,8,13]))),x=s.lazy(()=>h(()=>import("./index-BSh6gzGV.js"),__vite__mapDeps([14,1,2,6,9,4,8,11,15]))),D={[t.text]:o,[t.range]:C,[t.group_header]:o,[t.collection_picker]:o,[t.image_picker]:o,[t.product]:o,[t.product_picker]:o,[t.select]:o,[t.switch]:x,[t.url]:o,[t.video]:o,[t.video_url]:o},E={},R=s.memo(a=>{const{settings:g,settingValue:u,onSettingValueChange:r}=a,i=s.useRef(u),l=s.useRef(r);i.current=u,l.current=r;const m=s.useCallback((n,e)=>{const d={...i.current,[n.id]:e};l.current(d)},[]);return c.jsx("div",{className:E.form,children:g.map(n=>{const e=D[n.type],d=n.id?u[n.id]:{value:""};return c.jsx(e,{setting:n,value:d,onChange:S=>{m(n,S)}},n.id??n.label)})})}),V="_container_mper9_1",y="_header_mper9_10",j="_list_mper9_17",p={container:V,header:y,list:j},w=s.memo(()=>{const a=_(e=>e.editor.currentEditingForm),g=_(e=>e.editor.sectionConfigData),r=_(e=>e.editor.allSectionSchema)[a.type],i=g.sections[a.sectionId],{updateSectionConfigSectionBySectionId:l}=f(),{t:m}=v(),n=s.useCallback(e=>{console.log("newSettingValue...",e);const d={...i,settingsData:{...i.settingsData,settings:e}};l(a.sectionId,d)},[a,i,l]);return c.jsxs("div",{className:p.container,children:[c.jsx("div",{className:p.header,children:m(r.name)}),c.jsx("div",{className:p.list,children:c.jsx(R,{settings:r.settings??[],settingValue:i.settingsData.settings,onSettingValueChange:n})})]})});export{w as default};
