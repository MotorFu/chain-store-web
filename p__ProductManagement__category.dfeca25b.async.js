(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[660],{5966:function(J,w,r){"use strict";var g=r(67294),W=r(22892),j=r(61834),k=["fieldProps","proFieldProps"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},E.apply(this,arguments)}function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?M(Object(a),!0).forEach(function(n){z(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function F(e,t){if(e==null)return{};var a=G(e,t),n,d;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(d=0;d<c.length;d++)n=c[d],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(a[n]=e[n]))}return a}function G(e,t){if(e==null)return{};var a={},n=Object.keys(e),d,c;for(c=0;c<n.length;c++)d=n[c],!(t.indexOf(d)>=0)&&(a[d]=e[d]);return a}var T="text",S=(0,j.Z)(function(e){var t=e.fieldProps,a=e.proFieldProps,n=F(e,k);return g.createElement(W.ZP,E({mode:"edit",valueType:T,fieldProps:A(A({},t),{},{onChange:function(){for(var c,v,Z=arguments.length,D=new Array(Z),P=0;P<Z;P++)D[P]=arguments[P];t==null||(c=t.onChange)===null||c===void 0||c.call.apply(c,[t].concat(D)),n==null||(v=n.onChange)===null||v===void 0||v.call.apply(v,[n].concat(D))}})},a))},{valueType:T}),B=(0,j.Z)(function(e){var t=e.fieldProps,a=e.proFieldProps;return g.createElement(W.ZP,E({mode:"edit",valueType:"password",fieldProps:t},a))},{valueType:T}),s=S;s.Password=B,w.Z=s},30587:function(J,w,r){"use strict";r.r(w),r.d(w,{default:function(){return ae}});var g=r(3182),W=r(57663),j=r(71577),k=r(49111),E=r(19650),M=r(59250),A=r(13013),z=r(30887),F=r(99210),G=r(71153),T=r(60331),S=r(2824),B=r(94043),s=r.n(B),e=r(67294),t=r(81907),a=r(85224),n=r(65319),d=r(8812),c=r(49101),v=r(11849),Z=r(21010);function D(p,u,h,o){return P.apply(this,arguments)}function P(){return P=(0,g.Z)(s().mark(function p(u,h,o,i){return s().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,Z.WY)("/api/category",(0,v.Z)({method:"GET",params:(0,v.Z)((0,v.Z)({},u),{},{sorter:h,filter:o})},i||{})));case 1:case"end":return x.stop()}},p)})),P.apply(this,arguments)}function N(p){return L.apply(this,arguments)}function L(){return L=(0,g.Z)(s().mark(function p(u){return s().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return console.log("options",u),o.abrupt("return",(0,Z.WY)("/api/category",(0,v.Z)({method:"PUT"},u||{})));case 2:case"end":return o.stop()}},p)})),L.apply(this,arguments)}function Q(p,u){return K.apply(this,arguments)}function K(){return K=(0,g.Z)(s().mark(function p(u,h){return s().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("options",h),i.abrupt("return",(0,Z.WY)("/api/category",(0,v.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:u},h||{})));case 2:case"end":return i.stop()}},p)})),K.apply(this,arguments)}function X(p){return U.apply(this,arguments)}function U(){return U=(0,g.Z)(s().mark(function p(u){return s().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,Z.WY)("/api/category",(0,v.Z)({method:"DELETE"},u||{})));case 1:case"end":return o.stop()}},p)})),U.apply(this,arguments)}var q=r(37476),_=r(5966),l=r(85893),ee={labelCol:{span:4},wrapperCol:{span:16}},re=function(u){console.log("props.values-->",u.values);var h=(0,e.useRef)();return(0,l.jsx)(q.Z,(0,v.Z)((0,v.Z)({layout:"horizontal"},ee),{},{title:u.values.id==null?"\u6DFB\u52A0\u95E8\u5E97":"\u4FEE\u6539\u95E8\u5E97",visible:u.visible,formRef:h,modalProps:{afterClose:function(){var i;(i=h.current)===null||i===void 0||i.resetFields()},onCancel:function(){u.onCancel()}},submitter:{render:function(i){var O=i.reset,x=i.submit;return[(0,l.jsx)(j.Z,{onClick:function(){return u.onCancel()},children:"\u53D6\u6D88"},"cancel"),(0,l.jsx)(j.Z,{onClick:O,children:"\u91CD\u7F6E"},"reset"),(0,l.jsx)(j.Z,{onClick:x,type:"primary",children:"\u63D0\u4EA4"},"submit")]}},onFinish:u.onSubmit,children:(0,l.jsx)(_.Z,{name:"name",label:"\u540D\u79F0",initialValue:u.values.name,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF01"}]})}))},te=re,ne=function(){var u=(0,e.useState)(!1),h=(0,S.Z)(u,2),o=h[0],i=h[1],O=(0,e.useRef)(),x=(0,e.useState)([]),Y=(0,S.Z)(x,2),b=Y[0],V=Y[1],le=(0,e.useState)(),H=(0,S.Z)(le,2),ue=H[0],$=H[1],oe=[{title:"\u95E8\u5E97ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u56FE\u7247",key:"image",dataIndex:"image",valueType:"image",hideInSearch:!0},{title:"\u5E97\u540D",key:"name",dataIndex:"name"},{title:"\u8054\u7CFB\u7535\u8BDD",key:"phone",dataIndex:"phone"},{title:"\u5730\u5740",key:"address",dataIndex:"address"},{title:"\u72B6\u6001",key:"enabled",dataIndex:"enabled",valueType:"select",initialValue:"0",valueEnum:{0:{text:"\u4E0D\u9650",status:""},true:{text:"\u5DF2\u542F\u7528",checked:!0,status:""},false:{text:"\u5DF2\u7981\u7528",checked:!1,status:""}},render:function(m,f){return f.enabled?(0,l.jsx)(T.Z,{color:"success",children:"\u5DF2\u542F\u7528"}):(0,l.jsx)(T.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdTime",dataIndex:"createdTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,render:function(m,f){return(0,l.jsxs)(E.Z,{size:"middle",children:[(0,l.jsx)("a",{onClick:function(){$(f),i(!0)},children:"\u7F16\u8F91"},"edit"),(0,l.jsx)("a",{children:f.enabled?"\u7981\u7528":"\u542F\u7528"},"enabled"),(0,l.jsx)(A.Z,{trigger:["click"],overlay:(0,l.jsxs)(F.Z,{children:[(0,l.jsx)(F.Z.Item,{children:"\u4FEE\u6539\u5BC6\u7801"},0),(0,l.jsx)(F.Z.Item,{children:"\u6240\u5C5E\u95E8\u5E97"},1),(0,l.jsx)(F.Z.Item,{children:"\u5220\u9664\u8D26\u53F7"},2)]}),children:(0,l.jsxs)("a",{children:["\u66F4\u591A",(0,l.jsx)(d.Z,{})]})},"more")]})}}];return(0,l.jsxs)(t.ZP,{children:[(0,l.jsx)(n.ZP,{headerTitle:"headerTitle",actionRef:O,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,l.jsxs)(j.Z,{type:"primary",onClick:function(){o||($(void 0),i(!0))},children:[(0,l.jsx)(c.Z,{})," \u6DFB\u52A0"]},"primary")]},request:D,columns:oe,rowSelection:{onChange:function(m,f){V(f)}}}),(b==null?void 0:b.length)>0&&(0,l.jsx)(a.Z,{extra:(0,l.jsx)("div",{children:(0,l.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",b.reduce(function(y,m){return y+m.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,l.jsx)(j.Z,{onClick:(0,g.Z)(s().mark(function y(){var m,f;return s().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return console.log("selectedRowsState--->",b),R.next=3,X(b);case 3:V([]),(m=O.current)===null||m===void 0||(f=m.reloadAndRest)===null||f===void 0||f.call(m);case 5:case"end":return R.stop()}},y)})),children:"\u6279\u91CF\u5220\u9664"})}),(0,l.jsx)(te,{onSubmit:function(){var y=(0,g.Z)(s().mark(function m(f){var I;return s().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(f.id==null){C.next=6;break}return C.next=3,N(f);case 3:I=C.sent,C.next=9;break;case 6:return C.next=8,Q(f);case 8:I=C.sent;case 9:I&&($(void 0),i(!1),O.current&&O.current.reload());case 10:case"end":return C.stop()}},m)}));return function(m){return y.apply(this,arguments)}}(),onCancel:function(){$(void 0),i(!1)},visible:o,values:ue||{}})]})},ae=ne}}]);
