import{ac as q,ad as _,V as D,O as J,J as L,q as b,e as l,p as N,A as R,c as M,B as h,_ as U,ae as V,af as W}from"./isVisible-B1n3f-qW.js";import{r as s,R as g}from"./index-5YH52zMZ.js";function F(n){return n.replace(/-(.)/g,function(e,o){return o.toUpperCase()})}function G(n,e){L(n,"[@ant-design/icons] ".concat(e))}function k(n){return b(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(b(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(e,o){var r=n[o];switch(o){case"class":e.className=r,delete e.class;break;default:delete e[o],e[F(o)]=r}return e},{})}function v(n,e,o){return o?g.createElement(n.tag,l(l({key:e},I(n.attrs)),o),(n.children||[]).map(function(r,a){return v(r,"".concat(e,"-").concat(n.tag,"-").concat(a))})):g.createElement(n.tag,l({key:e},I(n.attrs)),(n.children||[]).map(function(r,a){return v(r,"".concat(e,"-").concat(n.tag,"-").concat(a))}))}function E(n){return q(n)[0]}function S(n){return n?Array.isArray(n)?n:[n]:[]}var H=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,K=function(e){var o=s.useContext(_),r=o.csp,a=o.prefixCls,c=o.layer,t=H;a&&(t=t.replace(/anticon/g,a)),c&&(t="@layer ".concat(c,` {
`).concat(t,`
}`)),s.useEffect(function(){var f=e.current,u=D(f);J(t,"@ant-design-icons",{prepend:!c,csp:r,attachTo:u})},[])},Q=["icon","className","onClick","style","primaryColor","secondaryColor"],C={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function X(n){var e=n.primaryColor,o=n.secondaryColor;C.primaryColor=e,C.secondaryColor=o||E(e),C.calculated=!!o}function Y(){return l({},C)}var d=function(e){var o=e.icon,r=e.className,a=e.onClick,c=e.style,t=e.primaryColor,f=e.secondaryColor,u=N(e,Q),y=s.useRef(),m=C;if(t&&(m={primaryColor:t,secondaryColor:f||E(t)}),K(y),G(k(o),"icon should be icon definiton, but got ".concat(o)),!k(o))return null;var i=o;return i&&typeof i.icon=="function"&&(i=l(l({},i),{},{icon:i.icon(m.primaryColor,m.secondaryColor)})),v(i.icon,"svg-".concat(i.name),l(l({className:r,onClick:a,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},u),{},{ref:y}))};d.displayName="IconReact";d.getTwoToneColors=Y;d.setTwoToneColors=X;function z(n){var e=S(n),o=R(e,2),r=o[0],a=o[1];return d.setTwoToneColors({primaryColor:r,secondaryColor:a})}function Z(){var n=d.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var nn=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];z(V.primary);var w=s.forwardRef(function(n,e){var o=n.className,r=n.icon,a=n.spin,c=n.rotate,t=n.tabIndex,f=n.onClick,u=n.twoToneColor,y=N(n,nn),m=s.useContext(_),i=m.prefixCls,p=i===void 0?"anticon":i,A=m.rootClassName,j=M(A,p,h(h({},"".concat(p,"-").concat(r.name),!!r.name),"".concat(p,"-spin"),!!a||r.name==="loading"),o),T=t;T===void 0&&f&&(T=-1);var $=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,P=S(u),x=R(P,2),B=x[0],O=x[1];return s.createElement("span",U({role:"img","aria-label":r.name},y,{ref:e,tabIndex:T,onClick:f,className:j}),s.createElement(d,{icon:r,primaryColor:B,secondaryColor:O,style:$}))});w.displayName="AntdIcon";w.getTwoToneColor=Z;w.setTwoToneColor=z;const rn=n=>{const e=g.useContext(W);return g.useMemo(()=>n?typeof n=="string"?n??e:typeof n=="function"?n(e):e:e,[n,e])};export{w as I,rn as u};
