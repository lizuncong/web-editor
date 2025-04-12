import{r as c,g as F,a as M,j as z}from"./index-dyMB8-Bg.js";const U=(e,s,n,a)=>{var t,d,p,h;const r=[n,{code:s,...a||{}}];if((d=(t=e==null?void 0:e.services)==null?void 0:t.logger)!=null&&d.forward)return e.services.logger.forward(r,"warn","react-i18next::",!0);N(r[0])&&(r[0]=`react-i18next:: ${r[0]}`),(h=(p=e==null?void 0:e.services)==null?void 0:p.logger)!=null&&h.warn?e.services.logger.warn(...r):console!=null&&console.warn&&console.warn(...r)},L={},E=(e,s,n,a)=>{N(n)&&L[n]||(N(n)&&(L[n]=new Date),U(e,s,n,a))},A=(e,s)=>()=>{if(e.isInitialized)s();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),s()};e.on("initialized",n)}},C=(e,s,n)=>{e.loadNamespaces(s,A(e,n))},_=(e,s,n,a)=>{if(N(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(s)>-1)return C(e,n,a);n.forEach(r=>{e.options.ns.indexOf(r)<0&&e.options.ns.push(r)}),e.loadLanguages(s,A(e,a))},G=(e,s,n={})=>!s.languages||!s.languages.length?(E(s,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:s.languages}),!0):s.hasLoadedNamespace(e,{lng:n.lng,precheck:(a,r)=>{var t;if(((t=n.bindI18n)==null?void 0:t.indexOf("languageChanging"))>-1&&a.services.backendConnector.backend&&a.isLanguageChangingTo&&!r(a.isLanguageChangingTo,e))return!1}}),N=e=>typeof e=="string",$=e=>typeof e=="object"&&e!==null,H=c.createContext();class J{constructor(){this.usedNamespaces={}}addUsedNamespaces(s){s.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const W=(e,s)=>{const n=c.useRef();return c.useEffect(()=>{n.current=e},[e,s]),n.current},P=(e,s,n,a)=>e.getFixedT(s,n,a),X=(e,s,n,a)=>c.useCallback(P(e,s,n,a),[e,s,n,a]),Y=(e,s={})=>{var j,v,I,O;const{i18n:n}=s,{i18n:a,defaultNS:r}=c.useContext(H)||{},t=n||a||F();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new J),!t){E(t,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const i=(l,f)=>N(f)?f:$(f)&&N(f.defaultValue)?f.defaultValue:Array.isArray(l)?l[l.length-1]:l,u=[i,{},!1];return u.t=i,u.i18n={},u.ready=!1,u}(j=t.options.react)!=null&&j.wait&&E(t,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const d={...M(),...t.options.react,...s},{useSuspense:p,keyPrefix:h}=d;let o=r||((v=t.options)==null?void 0:v.defaultNS);o=N(o)?[o]:o||["translation"],(O=(I=t.reportNamespaces).addUsedNamespaces)==null||O.call(I,o);const g=(t.isInitialized||t.initializedStoreOnce)&&o.every(i=>G(i,t,d)),k=X(t,s.lng||null,d.nsMode==="fallback"?o:o[0],h),S=()=>k,T=()=>P(t,s.lng||null,d.nsMode==="fallback"?o:o[0],h),[b,w]=c.useState(S);let x=o.join();s.lng&&(x=`${s.lng}${x}`);const R=W(x),m=c.useRef(!0);c.useEffect(()=>{const{bindI18n:i,bindI18nStore:u}=d;m.current=!0,!g&&!p&&(s.lng?_(t,s.lng,o,()=>{m.current&&w(T)}):C(t,o,()=>{m.current&&w(T)})),g&&R&&R!==x&&m.current&&w(T);const l=()=>{m.current&&w(T)};return i&&(t==null||t.on(i,l)),u&&(t==null||t.store.on(u,l)),()=>{m.current=!1,t&&(i==null||i.split(" ").forEach(f=>t.off(f,l))),u&&t&&u.split(" ").forEach(f=>t.store.off(f,l))}},[t,x]),c.useEffect(()=>{m.current&&g&&w(S)},[t,h,g]);const y=[b,t,g];if(y.t=b,y.i18n=t,y.ready=g,g||!g&&!p)return y;throw new Promise(i=>{s.lng?_(t,s.lng,o,()=>i()):C(t,o,()=>i())})},q="_home_15mur_1",B={home:q},K=c.memo(()=>{const{t:e}=Y();return z.jsxs("div",{className:B.home,children:["首页",z.jsxs("span",{children:["(",e("home.title"),")"]})]})});export{K as default};
