(self.webpackChunkchain_store=self.webpackChunkchain_store||[]).push([[660],{64317:function(H,W,u){"use strict";var A=u(67294),w=u(9706),g=u(22270),B=u(61834);function E(){return E=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(i[o]=a[o])}return i},E.apply(this,arguments)}function L(i,t){var a=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(i,l).enumerable})),a.push.apply(a,o)}return a}function x(i){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?L(Object(a),!0).forEach(function(o){Y(i,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach(function(o){Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(a,o))})}return i}function Y(i,t,a){return t in i?Object.defineProperty(i,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[t]=a,i}var $=A.forwardRef(function(i,t){var a=i.fieldProps,o=i.children,l=i.params,f=i.proFieldProps,y=i.mode,S=i.valueEnum,N=i.request,F=i.showSearch,M=i.options;return A.createElement(w.ZP,E({mode:"edit",valueEnum:(0,g.h)(S),request:N,params:l,valueType:"select",fieldProps:x({options:M,mode:y,showSearch:F},a),ref:t},f),o)}),c=A.forwardRef(function(i,t){var a=i.fieldProps,o=i.children,l=i.params,f=i.proFieldProps,y=i.mode,S=i.valueEnum,N=i.request,F=i.options,M=x({options:F,mode:y||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label",filterOption:!1},a);return A.createElement(w.ZP,E({mode:"edit",valueEnum:(0,g.h)(S),request:N,params:l,valueType:"select",fieldProps:M,ref:t},f),o)}),K=(0,B.Z)($,{customLightMode:!0}),d=(0,B.Z)(c,{customLightMode:!0}),j=K;j.SearchSelect=d,W.Z=j},5966:function(H,W,u){"use strict";var A=u(67294),w=u(9706),g=u(61834),B=["fieldProps","proFieldProps"];function E(){return E=Object.assign||function(t){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var l in o)Object.prototype.hasOwnProperty.call(o,l)&&(t[l]=o[l])}return t},E.apply(this,arguments)}function L(t,a){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);a&&(l=l.filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable})),o.push.apply(o,l)}return o}function x(t){for(var a=1;a<arguments.length;a++){var o=arguments[a]!=null?arguments[a]:{};a%2?L(Object(o),!0).forEach(function(l){Y(t,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(o,l))})}return t}function Y(t,a,o){return a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t}function $(t,a){if(t==null)return{};var o=c(t,a),l,f;if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(t);for(f=0;f<y.length;f++)l=y[f],!(a.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,l)||(o[l]=t[l]))}return o}function c(t,a){if(t==null)return{};var o={},l=Object.keys(t),f,y;for(y=0;y<l.length;y++)f=l[y],!(a.indexOf(f)>=0)&&(o[f]=t[f]);return o}var K="text",d=(0,g.Z)(function(t){var a=t.fieldProps,o=t.proFieldProps,l=$(t,B);return A.createElement(w.ZP,E({mode:"edit",valueType:K,fieldProps:x(x({},a),{},{onChange:function(){for(var y,S,N=arguments.length,F=new Array(N),M=0;M<N;M++)F[M]=arguments[M];a==null||(y=a.onChange)===null||y===void 0||y.call.apply(y,[a].concat(F)),l==null||(S=l.onChange)===null||S===void 0||S.call.apply(S,[l].concat(F))}})},o))},{valueType:K}),j=(0,g.Z)(function(t){var a=t.fieldProps,o=t.proFieldProps;return A.createElement(w.ZP,E({mode:"edit",valueType:"password",fieldProps:a},o))},{valueType:K}),i=d;i.Password=j,W.Z=i},70725:function(H,W,u){"use strict";u.d(W,{oM:function(){return A},Rk:function(){return E},P:function(){return L},O_:function(){return x},Pd:function(){return Y},mt:function(){return $}});var A={pageSize:10},w;(function(c){c[c.SUPER_ADMIN=1]="SUPER_ADMIN",c[c.NORMAL_ADMIN=2]="NORMAL_ADMIN",c[c.STORE_ADMIN=3]="STORE_ADMIN"})(w||(w={}));var g;(function(c){c[c.SUPER_ADMIN=1]="SUPER_ADMIN",c[c.NORMAL_ADMIN=2]="NORMAL_ADMIN",c[c.CASHIER=3]="CASHIER"})(g||(g={}));var B;(function(c){c[c.CASH=1]="CASH",c[c.ALIPAY=2]="ALIPAY",c[c.WECHAT=3]="WECHAT"})(B||(B={}));var E=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u73B0\u91D1",color:"#ff7b7b"},{value:2,label:"\u652F\u4ED8\u5B9D",color:"#03a6fc"},{value:3,label:"\u5FAE\u4FE1",color:"#62e367"}],L=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u91C7\u8D2D",color:"#03a6fc"},{value:3,label:"\u91C7\u8D2D\u5B8C\u6210",color:"#28c522"}],x=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u666E\u901A\u5165\u5E93"},{value:2,label:"\u91C7\u8D2D\u5165\u5E93"}],Y=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u5165\u5E93",color:"#03a6fc"},{value:3,label:"\u5165\u5E93\u5B8C\u6210",color:"#28c522"}],$=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u76D8\u70B9",color:"#03a6fc"},{value:3,label:"\u76D8\u70B9\u5B8C\u6210",color:"#28c522"}]},324:function(H,W,u){"use strict";u.r(W),u.d(W,{default:function(){return we}});var A=u(57663),w=u(71577),g=u(3182),B=u(71194),E=u(57016),L=u(49111),x=u(19650),Y=u(71153),$=u(60331),c=u(2824),K=u(94043),d=u.n(K),j=u(67294),i=u(81907),t=u(85224),a=u(33145),o=u(49101),l=u(11849),f=u(21010);function y(r,n,s,e){return S.apply(this,arguments)}function S(){return S=(0,g.Z)(d().mark(function r(n,s,e,p){return d().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,f.WY)("/api/category",(0,l.Z)({method:"GET",params:(0,l.Z)((0,l.Z)({},n),{},{sorter:s,filter:e})},p||{})));case 1:case"end":return Z.stop()}},r)})),S.apply(this,arguments)}function N(r){return F.apply(this,arguments)}function F(){return F=(0,g.Z)(d().mark(function r(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.WY)("/api/category/first",(0,l.Z)({method:"GET"},n||{})));case 1:case"end":return e.stop()}},r)})),F.apply(this,arguments)}function M(r){return z.apply(this,arguments)}function z(){return z=(0,g.Z)(d().mark(function r(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("options",n),e.abrupt("return",(0,f.WY)("/api/category",(0,l.Z)({method:"PUT"},n||{})));case 2:case"end":return e.stop()}},r)})),z.apply(this,arguments)}function oe(r){return J.apply(this,arguments)}function J(){return J=(0,g.Z)(d().mark(function r(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.WY)("/api/category/enabled",(0,l.Z)({method:"PUT"},n||{})));case 1:case"end":return e.stop()}},r)})),J.apply(this,arguments)}function le(r){return Q.apply(this,arguments)}function Q(){return Q=(0,g.Z)(d().mark(function r(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("options",n),e.abrupt("return",(0,f.WY)("/api/category",(0,l.Z)({method:"POST",headers:{"Content-Type":"application/json"}},n||{})));case 2:case"end":return e.stop()}},r)})),Q.apply(this,arguments)}function _(r){return X.apply(this,arguments)}function X(){return X=(0,g.Z)(d().mark(function r(n){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,f.WY)("/api/category",(0,l.Z)({method:"DELETE"},n||{})));case 1:case"end":return e.stop()}},r)})),X.apply(this,arguments)}var ue=u(37476),ee=u(5966),Ie=u(88983),re=u(47933),ie=u(9706),se=u(22270),te=u(61834),ce=["fieldProps","options","radioType","layout","proFieldProps","valueEnum"];function V(){return V=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(r[e]=s[e])}return r},V.apply(this,arguments)}function ne(r,n){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),s.push.apply(s,e)}return s}function de(r){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?ne(Object(s),!0).forEach(function(e){fe(r,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):ne(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}function fe(r,n,s){return n in r?Object.defineProperty(r,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[n]=s,r}function pe(r,n){if(r==null)return{};var s=ve(r,n),e,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(p=0;p<h.length;p++)e=h[p],!(n.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,e)||(s[e]=r[e]))}return s}function ve(r,n){if(r==null)return{};var s={},e=Object.keys(r),p,h;for(h=0;h<e.length;h++)p=e[h],!(n.indexOf(p)>=0)&&(s[p]=r[p]);return s}var he=j.forwardRef(function(r,n){var s=r.fieldProps,e=r.options,p=r.radioType,h=r.layout,Z=r.proFieldProps,T=r.valueEnum,P=pe(r,ce);return j.createElement(ie.ZP,V({mode:"edit",valueType:p==="button"?"radioButton":"radio",ref:n,valueEnum:(0,se.h)(T,void 0)},P,{fieldProps:de({options:e,layout:h},s)},Z))}),me=j.forwardRef(function(r,n){var s=r.fieldProps,e=r.children;return j.createElement(re.ZP,V({},s,{ref:n}),e)}),ge=(0,te.Z)(me,{valuePropName:"checked",ignoreWidth:!0}),Pe=(0,te.Z)(he,{customLightMode:!0}),q=ge;q.Group=Pe,q.Button=re.ZP.Button;var ye=q,Oe=u(64317),v=u(85893),be={labelCol:{span:4},wrapperCol:{span:16}},Ce=function(n){console.log("props.values-->",n.values,n.values.id!==void 0);var s=(0,j.useRef)(),e=j.useState(!1),p=(0,c.Z)(e,2),h=p[0],Z=p[1];return(0,v.jsxs)(ue.Z,(0,l.Z)((0,l.Z)({layout:"horizontal"},be),{},{title:n.values.id==null?"\u6DFB\u52A0\u5206\u7C7B":"\u4FEE\u6539\u5206\u7C7B",visible:n.visible,formRef:s,modalProps:{destroyOnClose:!0,afterClose:function(){var P;(P=s.current)===null||P===void 0||P.resetFields()},onCancel:function(){n.onCancel()}},initialValues:{id:n.values.id,name:n.values.name,level:n.values.level,parentId:n.values.parentId},onInit:function(P){console.log("values=====>",P),Z(P.level===2)},onFinish:n.onSubmit,onValuesChange:function(P,G){Z(G.level===2)},children:[(0,v.jsx)(ee.Z,{name:"id",label:"ID",hidden:!0}),(0,v.jsx)(ye.Group,{name:"level",label:"\u5206\u7C7B\u7EA7\u522B",disabled:n.values.id!==void 0,initialValue:n.values.level,options:[{label:"\u4E00\u7EA7\u5206\u7C7B",value:1},{label:"\u4E8C\u7EA7\u5206\u7C7B",value:2}]}),h?(0,v.jsx)(Oe.Z,{name:"parentId",label:"\u7236\u7EA7\u5206\u7C7B",disabled:n.values.id!==void 0,request:(0,g.Z)(d().mark(function T(){var P;return d().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,N();case 2:return P=U.sent,U.abrupt("return",P.data);case 4:case"end":return U.stop()}},T)}))}):null,(0,v.jsx)(ee.Z,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0\uFF01"}]})]}))},je=Ce,Ee=u(70725),Se=function(){var n=(0,j.useState)(!1),s=(0,c.Z)(n,2),e=s[0],p=s[1],h=(0,j.useRef)(),Z=(0,j.useState)([]),T=(0,c.Z)(Z,2),P=T[0],G=T[1],U=(0,j.useState)(),ae=(0,c.Z)(U,2),Fe=ae[0],k=ae[1],Ze=[{title:"ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u540D\u79F0",key:"name",dataIndex:"name"},{title:"\u72B6\u6001",key:"enabled",dataIndex:"enabled",valueType:"select",initialValue:"0",valueEnum:{0:{text:"\u4E0D\u9650",status:""},true:{text:"\u5DF2\u542F\u7528",checked:!0,status:""},false:{text:"\u5DF2\u7981\u7528",checked:!1,status:""}},render:function(O,m){return m.enabled?(0,v.jsx)($.Z,{color:"success",children:"\u5DF2\u542F\u7528"}):(0,v.jsx)($.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,render:function(O,m){return(0,v.jsxs)(x.Z,{size:"middle",children:[(0,v.jsx)("a",{onClick:function(b){b.stopPropagation(),k(m),p(!0)},children:"\u7F16\u8F91"},"edit"),(0,v.jsx)("a",{onClick:function(b){b.stopPropagation(),De(m)},children:m.enabled?"\u7981\u7528":"\u542F\u7528"},"enabled"),(0,v.jsx)("a",{onClick:function(b){b.stopPropagation(),Re(m)},children:"\u5220\u9664"},"delete")]})}}];function De(C){E.Z.confirm({title:"\u63D0\u793A",content:(0,v.jsxs)("div",{children:["\u786E\u5B9A\u8981",C.enabled?"\u7981\u7528":"\u5F00\u542F","\u5206\u7C7B\uFF1F"]}),onOk:function(){var O=(0,g.Z)(d().mark(function D(){var b;return d().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,oe({data:C});case 2:b=I.sent,b&&h.current&&h.current.reload();case 4:case"end":return I.stop()}},D)}));function m(){return O.apply(this,arguments)}return m}()})}function Re(C){E.Z.confirm({title:"\u63D0\u793A",content:(0,v.jsxs)("div",{children:["\u786E\u5B9A\u8981\u5220\u9664\u3010",C.name,"\u3011\u5206\u7C7B\uFF1F"]}),onOk:function(){var O=(0,g.Z)(d().mark(function D(){var b;return d().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,_({data:[C]});case 2:b=I.sent,b&&h.current&&h.current.reload();case 4:case"end":return I.stop()}},D)}));function m(){return O.apply(this,arguments)}return m}()})}return(0,v.jsxs)(i.ZP,{children:[(0,v.jsx)(a.ZP,{expandable:{expandRowByClick:!0,defaultExpandAllRows:!0},pagination:Ee.oM,headerTitle:"",actionRef:h,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,v.jsxs)(w.Z,{type:"primary",onClick:function(){e||(k(void 0),p(!0))},children:[(0,v.jsx)(o.Z,{})," \u6DFB\u52A0"]},"primary")]},request:y,columns:Ze,rowSelection:{onChange:function(O,m){G(m)}}}),(P==null?void 0:P.length)>0&&(0,v.jsx)(t.Z,{extra:(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",P.reduce(function(C,O){return C+O.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,v.jsx)(w.Z,{onClick:(0,g.Z)(d().mark(function C(){var O,m;return d().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return console.log("selectedRowsState--->",P),b.next=3,_({data:P});case 3:G([]),(O=h.current)===null||O===void 0||(m=O.reloadAndRest)===null||m===void 0||m.call(O);case 5:case"end":return b.stop()}},C)})),children:"\u6279\u91CF\u5220\u9664"})}),e?(0,v.jsx)(je,{onSubmit:function(){var C=(0,g.Z)(d().mark(function O(m){var D;return d().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(console.log("edit form value=====>",m),m.id==null){R.next=7;break}return R.next=4,M({data:m});case 4:D=R.sent,R.next=10;break;case 7:return R.next=9,le({data:m});case 9:D=R.sent;case 10:D&&(k(void 0),p(!1),h.current&&h.current.reload());case 11:case"end":return R.stop()}},O)}));return function(O){return C.apply(this,arguments)}}(),onCancel:function(){k(void 0),p(!1)},visible:e,values:Fe||{}}):null]})},we=Se}}]);