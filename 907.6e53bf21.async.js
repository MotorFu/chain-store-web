(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[907],{64335:function(he,Y,c){"use strict";var K=c(67294),V=(0,K.createContext)({});Y.Z=V},85224:function(he,Y,c){"use strict";var K=c(84305),V=c(69224),N=c(67294),L=c(94184),ie=c.n(L),le=c(97435),R=c(28267),J=c.n(R),F=c(64335),o=["children","className","extra","style","renderContent"];function S(){return S=Object.assign||function(m){for(var u=1;u<arguments.length;u++){var b=arguments[u];for(var y in b)Object.prototype.hasOwnProperty.call(b,y)&&(m[y]=b[y])}return m},S.apply(this,arguments)}function Z(m,u){var b=Object.keys(m);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(m);u&&(y=y.filter(function(T){return Object.getOwnPropertyDescriptor(m,T).enumerable})),b.push.apply(b,y)}return b}function $(m){for(var u=1;u<arguments.length;u++){var b=arguments[u]!=null?arguments[u]:{};u%2?Z(Object(b),!0).forEach(function(y){Q(m,y,b[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(b)):Z(Object(b)).forEach(function(y){Object.defineProperty(m,y,Object.getOwnPropertyDescriptor(b,y))})}return m}function Q(m,u,b){return u in m?Object.defineProperty(m,u,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[u]=b,m}function D(m,u){if(m==null)return{};var b=re(m,u),y,T;if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(m);for(T=0;T<M.length;T++)y=M[T],!(u.indexOf(y)>=0)&&(!Object.prototype.propertyIsEnumerable.call(m,y)||(b[y]=m[y]))}return b}function re(m,u){if(m==null)return{};var b={},y=Object.keys(m),T,M;for(M=0;M<y.length;M++)T=y[M],!(u.indexOf(T)>=0)&&(b[T]=m[T]);return b}var W=function(u){var b=u.children,y=u.className,T=u.extra,M=u.style,ce=u.renderContent,G=D(u,o),Ce=(0,N.useContext)(V.ZP.ConfigContext),de=Ce.getPrefixCls,ve=u.prefixCls||de("pro"),ne="".concat(ve,"-footer-bar"),O=(0,N.useContext)(F.Z),H=(0,N.useMemo)(function(){var q=O.hasSiderMenu,xe=O.isMobile,ae=O.siderWidth;if(!!q)return ae?xe?"100%":"calc(100% - ".concat(ae,"px)"):"100%"},[O.collapsed,O.hasSiderMenu,O.isMobile,O.siderWidth]),_=N.createElement(N.Fragment,null,N.createElement("div",{className:"".concat(ne,"-left")},T),N.createElement("div",{className:"".concat(ne,"-right")},b));return(0,N.useEffect)(function(){return!O||!(O==null?void 0:O.setHasFooterToolbar)?function(){}:(O==null||O.setHasFooterToolbar(!0),function(){var q;O==null||(q=O.setHasFooterToolbar)===null||q===void 0||q.call(O,!1)})},[]),N.createElement("div",S({className:ie()(y,"".concat(ne)),style:$({width:H},M)},(0,le.Z)(G,["prefixCls"])),ce?ce($($($({},u),O),{},{leftWidth:H}),_):_)};Y.Z=W},81907:function(he,Y,c){"use strict";c.d(Y,{ZP:function(){return zt}});var K=c(43673),V=c(29938),N=c(22122),L=c(96156),ie=c(6610),le=c(5991),R=c(10379),J=c(44144),F=c(90484),o=c(67294),S=c(94184),Z=c.n(S),$=c(98423),Q=c(4084),D=c(65632),re=c(85061),W=c(75164);function m(n){var e,t=function(i){return function(){e=null,n.apply(void 0,(0,re.Z)(i))}},r=function(){if(e==null){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];e=(0,W.Z)(t(s))}};return r.cancel=function(){return W.Z.cancel(e)},r}function u(){return function(e,t,r){var a=r.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(t))return a;var l=m(a.bind(this));return i=!0,Object.defineProperty(this,t,{value:l,configurable:!0,writable:!0}),i=!1,l}}}}var b=c(64019);function y(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function T(n,e,t){if(t!==void 0&&e.top>n.top-t)return t+e.top}function M(n,e,t){if(t!==void 0&&e.bottom<n.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var ce=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],G=[];function Ce(){return G}function de(n,e){if(!!n){var t=G.find(function(r){return r.target===n});t?t.affixList.push(e):(t={target:n,affixList:[e],eventHandlers:{}},G.push(t),ce.forEach(function(r){t.eventHandlers[r]=(0,b.Z)(n,r,function(){t.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function ve(n){var e=G.find(function(t){var r=t.affixList.some(function(a){return a===n});return r&&(t.affixList=t.affixList.filter(function(a){return a!==n})),r});e&&e.affixList.length===0&&(G=G.filter(function(t){return t!==e}),ce.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var ne=function(n,e,t,r){var a=arguments.length,i=a<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if((typeof Reflect=="undefined"?"undefined":(0,F.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,e,t,r);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(i=(a<3?s(i):a>3?s(e,t,i):s(e,t))||i);return a>3&&i&&Object.defineProperty(e,t,i),i};function O(){return typeof window!="undefined"?window:null}var H;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(H||(H={}));var _=function(n){(0,R.Z)(t,n);var e=(0,J.Z)(t);function t(){var r;return(0,ie.Z)(this,t),r=e.apply(this,arguments),r.state={status:H.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var a=r.props.offsetBottom,i=r.props.offsetTop;return a===void 0&&i===void 0&&(i=0),i},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(a){r.placeholderNode=a},r.saveFixedNode=function(a){r.fixedNode=a},r.measure=function(){var a=r.state,i=a.status,s=a.lastAffix,l=r.props.onChange,f=r.getTargetFunc();if(!(i!==H.Prepare||!r.fixedNode||!r.placeholderNode||!f)){var g=r.getOffsetTop(),h=r.getOffsetBottom(),d=f();if(!!d){var v={status:H.None},P=y(d),p=y(r.placeholderNode),x=T(p,P,g),C=M(p,P,h);x!==void 0?(v.affixStyle={position:"fixed",top:x,width:p.width,height:p.height},v.placeholderStyle={width:p.width,height:p.height}):C!==void 0&&(v.affixStyle={position:"fixed",bottom:C,width:p.width,height:p.height},v.placeholderStyle={width:p.width,height:p.height}),v.lastAffix=!!v.affixStyle,l&&s!==v.lastAffix&&l(v.lastAffix),r.setState(v)}}},r.prepareMeasure=function(){if(r.setState({status:H.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},r.render=function(){var a=r.context.getPrefixCls,i=r.state,s=i.affixStyle,l=i.placeholderStyle,f=r.props,g=f.prefixCls,h=f.children,d=Z()((0,L.Z)({},a("affix",g),!!s)),v=(0,$.Z)(r.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return o.createElement(Q.Z,{onResize:function(){r.updatePosition()}},o.createElement("div",(0,N.Z)({},v,{ref:r.savePlaceholderNode}),s&&o.createElement("div",{style:l,"aria-hidden":"true"}),o.createElement("div",{className:d,ref:r.saveFixedNode,style:s},o.createElement(Q.Z,{onResize:function(){r.updatePosition()}},h))))},r}return(0,le.Z)(t,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a||O}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){de(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,s=this.getTargetFunc(),l=null;s&&(l=s()||null),i!==l&&(ve(this),l&&(de(l,this),this.updatePosition()),this.setState({prevTarget:l})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ve(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var s=this.getOffsetTop(),l=this.getOffsetBottom(),f=a();if(f&&this.placeholderNode){var g=y(f),h=y(this.placeholderNode),d=T(h,g,s),v=M(h,g,l);if(d!==void 0&&i.top===d||v!==void 0&&i.bottom===v)return}}this.prepareMeasure()}}]),t}(o.Component);_.contextType=D.E_,ne([u()],_.prototype,"updatePosition",null),ne([u()],_.prototype,"lazyUpdatePosition",null);var q=_,xe=c(84305),ae=c(69224),rr=c(51399),nr=c(66157),ar=c(30887),or=c(59250),ir=c(94233),$e=c(28481),Ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},ke=Ge,Oe=c(27029),Ee=function(e,t){return o.createElement(Oe.Z,Object.assign({},e,{ref:t,icon:ke}))};Ee.displayName="ArrowLeftOutlined";var Xe=o.forwardRef(Ee),Ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ve=Ye,Ne=function(e,t){return o.createElement(Oe.Z,Object.assign({},e,{ref:t,icon:Ve}))};Ne.displayName="ArrowRightOutlined";var Je=o.forwardRef(Ne),Qe=c(50344),_e=c(57254),qe=c(81555),et=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t},Re=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.children,s=e.overlay,l=e.dropdownProps,f=et(e,["prefixCls","separator","children","overlay","dropdownProps"]),g=o.useContext(D.E_),h=g.getPrefixCls,d=h("breadcrumb",t),v=function(x){return s?o.createElement(qe.Z,(0,N.Z)({overlay:s,placement:"bottomCenter"},l),o.createElement("span",{className:"".concat(d,"-overlay-link")},x,o.createElement(_e.Z,null))):x},P;return"href"in f?P=o.createElement("a",(0,N.Z)({className:"".concat(d,"-link")},f),i):P=o.createElement("span",(0,N.Z)({className:"".concat(d,"-link")},f),i),P=v(P),i?o.createElement("span",null,P,a&&o.createElement("span",{className:"".concat(d,"-separator")},a)):null};Re.__ANT_BREADCRUMB_ITEM=!0;var Te=Re,Se=function(e){var t=e.children,r=o.useContext(D.E_),a=r.getPrefixCls,i=a("breadcrumb");return o.createElement("span",{className:"".concat(i,"-separator")},t||"/")};Se.__ANT_BREADCRUMB_SEPARATOR=!0;var tt=Se,we=c(99210),rt=c(21687),nt=c(96159),at=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(t[r[a]]=n[r[a]]);return t};function ot(n,e){if(!n.breadcrumbName)return null;var t=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(t,")"),"g"),function(a,i){return e[i]||a});return r}function it(n,e,t,r){var a=t.indexOf(n)===t.length-1,i=ot(n,e);return a?o.createElement("span",null,i):o.createElement("a",{href:"#/".concat(r.join("/"))},i)}var Be=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach(function(r){e=e.replace(":".concat(r),t[r])}),e},lt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,a=(0,re.Z)(e),i=Be(t,r);return i&&a.push(i),a},pe=function(e){var t=e.prefixCls,r=e.separator,a=r===void 0?"/":r,i=e.style,s=e.className,l=e.routes,f=e.children,g=e.itemRender,h=g===void 0?it:g,d=e.params,v=d===void 0?{}:d,P=at(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),p=o.useContext(D.E_),x=p.getPrefixCls,C=p.direction,w,I=x("breadcrumb",t);if(l&&l.length>0){var j=[];w=l.map(function(E){var A=Be(E.path,v);A&&j.push(A);var ee;return E.children&&E.children.length&&(ee=o.createElement(we.Z,null,E.children.map(function(z){return o.createElement(we.Z.Item,{key:z.path||z.breadcrumbName},h(z,v,l,lt(j,z.path,v)))}))),o.createElement(Te,{overlay:ee,separator:a,key:A||E.breadcrumbName},h(E,v,l,j))})}else f&&(w=(0,Qe.Z)(f).map(function(E,A){return E&&((0,rt.Z)(E.type&&(E.type.__ANT_BREADCRUMB_ITEM===!0||E.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,nt.Tm)(E,{separator:a,key:A}))}));var B=Z()(I,(0,L.Z)({},"".concat(I,"-rtl"),C==="rtl"),s);return o.createElement("div",(0,N.Z)({className:B,style:i},P),w)};pe.Item=Te,pe.Separator=tt;var ct=pe,st=ct,ft=c(51890),ut=c(34952),dt=c(42051),vt=function(e,t,r){return!t||!r?null:o.createElement(dt.Z,{componentName:"PageHeader"},function(a){var i=a.back;return o.createElement("div",{className:"".concat(e,"-back")},o.createElement(ut.Z,{onClick:function(l){r==null||r(l)},className:"".concat(e,"-back-button"),"aria-label":i},t))})},mt=function(e){return o.createElement(st,e)},gt=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?o.createElement(Je,null):o.createElement(Xe,null)},ht=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=t.title,i=t.avatar,s=t.subTitle,l=t.tags,f=t.extra,g=t.onBack,h="".concat(e,"-heading"),d=a||s||l||f;if(!d)return null;var v=gt(t,r),P=vt(e,v,g),p=P||i||d;return o.createElement("div",{className:h},p&&o.createElement("div",{className:"".concat(h,"-left")},P,i&&o.createElement(ft.C,i),a&&o.createElement("span",{className:"".concat(h,"-title"),title:typeof a=="string"?a:void 0},a),s&&o.createElement("span",{className:"".concat(h,"-sub-title"),title:typeof s=="string"?s:void 0},s),l&&o.createElement("span",{className:"".concat(h,"-tags")},l)),f&&o.createElement("span",{className:"".concat(h,"-extra")},f))},pt=function(e,t){return t?o.createElement("div",{className:"".concat(e,"-footer")},t):null},yt=function(e,t){return o.createElement("div",{className:"".concat(e,"-content")},t)},bt=function(e){var t=o.useState(!1),r=(0,$e.Z)(t,2),a=r[0],i=r[1],s=function(f){var g=f.width;i(g<768)};return o.createElement(D.C,null,function(l){var f,g=l.getPrefixCls,h=l.pageHeader,d=l.direction,v=e.prefixCls,P=e.style,p=e.footer,x=e.children,C=e.breadcrumb,w=e.breadcrumbRender,I=e.className,j=!0;"ghost"in e?j=e.ghost:h&&"ghost"in h&&(j=h.ghost);var B=g("page-header",v),E=function(){var oe;return((oe=C)===null||oe===void 0?void 0:oe.routes)?mt(C):null},A=E(),ee=C&&"props"in C,z=(w==null?void 0:w(e,A))||A,se=ee?C:z,ge=Z()(B,I,(f={"has-breadcrumb":!!se,"has-footer":!!p},(0,L.Z)(f,"".concat(B,"-ghost"),j),(0,L.Z)(f,"".concat(B,"-rtl"),d==="rtl"),(0,L.Z)(f,"".concat(B,"-compact"),a),f));return o.createElement(Q.Z,{onResize:s},o.createElement("div",{className:ge,style:P},se,ht(B,e,d),x&&yt(B,x),pt(B,p)))})},Pt=bt,lr=c(18106),Ae=c(51752),ye=c(64335),cr=c(17781),Ct=function(e){var t=(0,o.useContext)(ye.Z),r=e.children,a=e.contentWidth,i=e.className,s=e.style,l=(0,o.useContext)(ae.ZP.ConfigContext),f=l.getPrefixCls,g=e.prefixCls||f("pro"),h=a||t.contentWidth,d="".concat(g,"-grid-content");return o.createElement("div",{className:Z()(d,i,{wide:h==="Fixed"}),style:s},o.createElement("div",{className:"".concat(g,"-grid-content-children")},r))},xt=Ct,Ot=c(85224),sr=c(32331),Et=c(83832);function De(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function je(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?De(Object(t),!0).forEach(function(r){Nt(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):De(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Nt(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Rt(n,e){return Bt(n)||wt(n,e)||St(n,e)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function St(n,e){if(!!n){if(typeof n=="string")return Ze(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ze(n,e)}}function Ze(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function wt(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r=[],a=!0,i=!1,s,l;try{for(t=t.call(n);!(a=(s=t.next()).done)&&(r.push(s.value),!(e&&r.length===e));a=!0);}catch(f){i=!0,l=f}finally{try{!a&&t.return!=null&&t.return()}finally{if(i)throw l}}return r}}function Bt(n){if(Array.isArray(n))return n}var At=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},Dt=function(e){var t=e.children,r=e.style,a=e.className,i=e.markStyle,s=e.markClassName,l=e.zIndex,f=l===void 0?9:l,g=e.gapX,h=g===void 0?212:g,d=e.gapY,v=d===void 0?222:d,P=e.width,p=P===void 0?120:P,x=e.height,C=x===void 0?64:x,w=e.rotate,I=w===void 0?-22:w,j=e.image,B=e.content,E=e.offsetLeft,A=e.offsetTop,ee=e.fontStyle,z=ee===void 0?"normal":ee,se=e.fontWeight,ge=se===void 0?"normal":se,Pe=e.fontColor,oe=Pe===void 0?"rgba(0,0,0,.15)":Pe,Ie=e.fontSize,Le=Ie===void 0?16:Ie,Fe=e.fontFamily,We=Fe===void 0?"sans-serif":Fe,Kt=e.prefixCls,$t=(0,o.useContext)(ae.ZP.ConfigContext),Gt=$t.getPrefixCls,He=Gt("pro-layout-watermark",Kt),kt=Z()("".concat(He,"-wrapper"),a),Xt=Z()(He,s),Yt=(0,o.useState)(""),Ue=Rt(Yt,2),Vt=Ue[0],ze=Ue[1];return(0,o.useEffect)(function(){var fe=document.createElement("canvas"),X=fe.getContext("2d"),te=At(X),Jt="".concat((h+p)*te,"px"),Qt="".concat((v+C)*te,"px"),_t=E||h/2,qt=A||v/2;if(fe.setAttribute("width",Jt),fe.setAttribute("height",Qt),X){X.translate(_t*te,qt*te),X.rotate(Math.PI/180*Number(I));var er=p*te,Ke=C*te;if(j){var ue=new Image;ue.crossOrigin="anonymous",ue.referrerPolicy="no-referrer",ue.src=j,ue.onload=function(){X.drawImage(ue,0,0,er,Ke),ze(fe.toDataURL())}}else if(B){var tr=Number(Le)*te;X.font="".concat(z," normal ").concat(ge," ").concat(tr,"px/").concat(Ke,"px ").concat(We),X.fillStyle=oe,X.fillText(B,0,0),ze(fe.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[h,v,E,A,I,z,ge,p,C,We,oe,j,B,Le]),o.createElement("div",{style:je({position:"relative"},r),className:kt},t,o.createElement("div",{className:Xt,style:je({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(h+p,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Vt,"')")},i)}))},jt=Dt,Zt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"];function Me(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),t.push.apply(t,r)}return t}function U(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Me(Object(t),!0).forEach(function(r){be(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Me(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function be(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Mt(n,e){if(n==null)return{};var t=It(n,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(n,r)||(t[r]=n[r]))}return t}function It(n,e){if(n==null)return{};var t={},r=Object.keys(n),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(t[a]=n[a]);return t}function k(){return k=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},k.apply(this,arguments)}function me(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(t){return typeof t}:me=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(n)}function Lt(n){return me(n)==="object"?n:{spinning:n}}var Ft=function(e){var t=e.tabList,r=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,s=e.tabProps,l=e.prefixedClassName;return t&&t.length?o.createElement(Ae.Z,k({className:"".concat(l,"-tabs"),activeKey:r,onChange:function(g){a&&a(g)},tabBarExtraContent:i},s),t.map(function(f,g){return o.createElement(Ae.Z.TabPane,k({},f,{tab:f.tab,key:f.key||g}))})):null},Wt=function(e,t,r){return!e&&!t?null:o.createElement("div",{className:"".concat(r,"-detail")},o.createElement("div",{className:"".concat(r,"-main")},o.createElement("div",{className:"".concat(r,"-row")},e&&o.createElement("div",{className:"".concat(r,"-content")},e),t&&o.createElement("div",{className:"".concat(r,"-extraContent")},t))))},fr=function(e){var t=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,k({},t==null?void 0:t.breadcrumb,t==null?void 0:t.breadcrumbProps,e)))},Ht=function(e){var t,r=(0,o.useContext)(ye.Z),a=e.title,i=e.content,s=e.pageHeaderRender,l=e.header,f=e.prefixedClassName,g=e.extraContent,h=e.style,d=e.prefixCls,v=e.breadcrumbRender,P=Mt(e,Zt);if(s===!1)return null;if(s)return o.createElement(o.Fragment,null," ",s(U(U({},e),r)));var p=a;!a&&a!==!1&&(p=r.title);var x=U(U(U({},r),{},{title:p},P),{},{footer:Ft(U(U({},P),{},{breadcrumbRender:v,prefixedClassName:f}))},l),C=x.breadcrumb;return["title","subTitle","breadcrumb","extra","tags","footer","avatar","backIcon"].every(function(w){return!x[w]})&&(!C||!(C==null?void 0:C.itemRender)&&!(C==null||(t=C.routes)===null||t===void 0?void 0:t.length))&&!i&&!g?null:o.createElement("div",{className:"".concat(f,"-warp")},o.createElement(Pt,k({},x,{breadcrumb:v===!1?void 0:U(U({},x.breadcrumb),r.breadcrumbProps),prefixCls:d}),(l==null?void 0:l.children)||Wt(i,g,f)))},Ut=function(e){var t,r=e.children,a=e.loading,i=a===void 0?!1:a,s=e.style,l=e.footer,f=e.affixProps,g=e.ghost,h=e.fixedHeader,d=(0,o.useContext)(ye.Z),v=(0,o.useContext)(ae.ZP.ConfigContext),P=v.getPrefixCls,p=e.prefixCls||P("pro"),x="".concat(p,"-page-container"),C=Z()(x,e.className,(t={},be(t,"".concat(p,"-page-container-ghost"),g),be(t,"".concat(p,"-page-container-with-footer"),l),t)),w=r?o.createElement("div",null,o.createElement("div",{className:"".concat(x,"-children-content")},r),d.hasFooterToolbar&&o.createElement("div",{style:{height:48,marginTop:24}})):null,I=o.createElement(Ht,k({},e,{prefixCls:void 0,prefixedClassName:x})),j=function(){var E=Lt(i),A=E.spinning?o.createElement(Et.Z,E):w;return e.waterMarkProps||d.waterMarkProps?o.createElement(jt,e.waterMarkProps||d.waterMarkProps,A):A};return o.createElement("div",{style:s,className:C},h&&I?o.createElement(q,k({offsetTop:d.hasHeader&&d.fixedHeader?d.headerHeight:0},f),I):I,o.createElement(xt,null,j()),l&&o.createElement(Ot.Z,{prefixCls:p},l))},zt=Ut},28267:function(){},17781:function(){},32331:function(){},29938:function(){},66157:function(){},51399:function(){},34952:function(he,Y,c){"use strict";var K=c(22122),V=c(67294),N=c(15105),L=function(R,J){var F={};for(var o in R)Object.prototype.hasOwnProperty.call(R,o)&&J.indexOf(o)<0&&(F[o]=R[o]);if(R!=null&&typeof Object.getOwnPropertySymbols=="function")for(var S=0,o=Object.getOwnPropertySymbols(R);S<o.length;S++)J.indexOf(o[S])<0&&Object.prototype.propertyIsEnumerable.call(R,o[S])&&(F[o[S]]=R[o[S]]);return F},ie={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},le=V.forwardRef(function(R,J){var F=function(W){var m=W.keyCode;m===N.Z.ENTER&&W.preventDefault()},o=function(W){var m=W.keyCode,u=R.onClick;m===N.Z.ENTER&&u&&u()},S=R.style,Z=R.noStyle,$=R.disabled,Q=L(R,["style","noStyle","disabled"]),D={};return Z||(D=(0,K.Z)({},ie)),$&&(D.pointerEvents="none"),D=(0,K.Z)((0,K.Z)({},D),S),V.createElement("div",(0,K.Z)({role:"button",tabIndex:0,ref:J},Q,{onKeyDown:F,onKeyUp:o,style:D}))});Y.Z=le}}]);
