const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6514x0G_.js","assets/index-a9eID7YS.js","assets/index-D6BXZ84r.css","assets/index-DrGT2J21.js","assets/constant-j6zW90Pt.js","assets/index-DpNFnSlG.css","assets/index-Bjo3r85t.js","assets/BaseInput-C6aG96u7.js","assets/ContextIsolator-CFzSj3VJ.js","assets/reactNode-bNKIO282.js","assets/index-i6lPJqqm.js","assets/UnstableContext-Cx9pVqPh.js","assets/index-oyGqBJpl.js","assets/index-BT0EMfNV.js","assets/index--6lNlyuo.css","assets/index-Cc0xIbNP.js","assets/index-BcJXxwDV.css","assets/index-CnRZHcOK.js","assets/index-r09RI9h-.js","assets/plus-_-wSu53M.js","assets/index-Ci8OvecK.css","assets/index-Bz5j9tdq.js","assets/index-BRsw1Exp.js","assets/index-BKgG73Yl.css","assets/index-BlHVunsj.js","assets/index-C0wJFtpv.js","assets/index-CPG9vnxT.css"])))=>i.map(i=>d[i]);
import{r as e,_ as r,j as c}from"./index-a9eID7YS.js";import{a as u,u as C}from"./constant-j6zW90Pt.js";import{u as D}from"./index-ConONMsG.js";import{W as i}from"./section-nwD_CGUa.js";const f=e.lazy(()=>r(()=>import("./index-6514x0G_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]))),x=e.lazy(()=>r(()=>import("./index-oyGqBJpl.js"),__vite__mapDeps([12,1,2,3,4,5,13,8,9,7,14]))),j=e.lazy(()=>r(()=>import("./index-Cc0xIbNP.js"),__vite__mapDeps([15,1,2,4,10,9,11,16]))),R=e.lazy(()=>r(()=>import("./index-CnRZHcOK.js"),__vite__mapDeps([17,1,2,3,4,5]))),W=e.lazy(()=>r(()=>import("./index-r09RI9h-.js"),__vite__mapDeps([18,1,2,3,4,5,19,11,20]))),P=e.lazy(()=>r(()=>import("./index-Bz5j9tdq.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11]))),T=e.lazy(()=>r(()=>import("./index-BRsw1Exp.js"),__vite__mapDeps([22,1,2,4,23]))),b=e.lazy(()=>r(()=>import("./index-BlHVunsj.js"),__vite__mapDeps([24,1,2,3,4,5]))),A=e.lazy(()=>r(()=>import("./index-C0wJFtpv.js"),__vite__mapDeps([25,1,2,3,4,5,19,26]))),z={[i.text]:f,[i.range]:x,[i.select]:R,[i.switch]:j,[i.group_header]:T,[i.collection_picker]:b,[i.image_picker]:A,[i.video]:W,[i.video_url]:P,[i.product_picker]:f,[i.url]:f},F="_container_11jyg_1",L="_header_11jyg_10",O="_list_11jyg_17",S={container:F,header:L,list:O},V=e.memo(o=>{const{settings:l,title:h,settingValue:d,onSettingValueChange:g}=o,n=e.useRef(d),a=e.useRef(g);n.current=d,a.current=g;const m=e.useCallback((t,p)=>{const _={...n.current,[t.id]:p};a.current(_)},[]);return c.jsxs("div",{className:S.container,children:[c.jsx("div",{className:S.header,children:h}),c.jsx("div",{className:S.list,children:l.map(t=>{const p=z[t.type],_=t.id?d[t.id]:{value:""};return c.jsx(p,{setting:t,value:_,onChange:E=>{m(t,E)}},t.id??t.label)})})]})}),w=e.memo(()=>{var y;const o=u(s=>s.editor.currentEditingForm),l=u(s=>s.editor.sectionConfigData),h=u(s=>s.editor.allSectionSchema),{t:d}=C(),{type:g,sectionId:n,blockId:a}=o,m=l.sections[n],t=m.settingsData.blocks[a],_=(y=h[m.type].blocks)==null?void 0:y.find(s=>s.type===g),{updateBlockConfigData:E}=D(),k=e.useCallback(s=>{console.log("newSettingValue...",s);const I={...t,settings:s};E(n,a,I)},[t,a,n,E]);return _?c.jsx(V,{title:d(_.name),settings:_.settings??[],settingValue:t.settings,onSettingValueChange:k}):c.jsx("div",{children:"not found"})}),B="_nodata_19oeg_1",v={nodata:B},N=e.memo(()=>{const o=u(t=>t.editor.currentEditingForm),l=u(t=>t.editor.sectionConfigData),h=u(t=>t.editor.allSectionSchema),{t:d}=C(),g=h[o.type],n=l.sections[o.sectionId],{updateSectionConfigSectionBySectionId:a}=D(),m=e.useCallback(t=>{console.log("newSettingValue...",t);const p={...n,settingsData:{...n.settingsData,settings:t}};a(o.sectionId,p)},[o,n,a]);return c.jsx(V,{title:d(g.name),settings:g.settings??[],settingValue:n.settingsData.settings,onSettingValueChange:m})}),G=e.memo(()=>{const o=u(l=>l.editor.currentEditingForm);if(!o)return c.jsx("div",{className:[v.container,v.nodata].join(" "),children:"在左侧边栏点击选择一个组件进行编辑"});if(o.sectionId&&!o.blockId)return c.jsx(N,{});if(o.sectionId&&o.blockId)return c.jsx(w,{})});export{G as default};
