(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[414],{79289:function(re,A,n){"use strict";n.r(A),n.d(A,{default:function(){return _}});var v=n(3182),ae=n(57663),x=n(71577),ue=n(49111),k=n(19650),le=n(59250),V=n(13013),se=n(30887),j=n(99210),ie=n(71153),P=n(60331),F=n(2824),W=n(94043),o=n.n(W),Z=n(67294),Y=n(81907),w=n(85224),M=n(65319),O=n(8812),U=n(49101),m=n(11849),C=n(21010);function z(l,t,s,r){return E.apply(this,arguments)}function E(){return E=(0,v.Z)(o().mark(function l(t,s,r,a){return o().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.abrupt("return",(0,C.WY)("/api/store",(0,m.Z)({method:"GET",params:(0,m.Z)((0,m.Z)({},t),{},{sorter:s,filter:r})},a||{})));case 1:case"end":return f.stop()}},l)})),E.apply(this,arguments)}function G(l){return T.apply(this,arguments)}function T(){return T=(0,v.Z)(o().mark(function l(t){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("options",t),r.abrupt("return",(0,C.WY)("/api/store",(0,m.Z)({method:"PUT"},t||{})));case 2:case"end":return r.stop()}},l)})),T.apply(this,arguments)}function L(l,t){return I.apply(this,arguments)}function I(){return I=(0,v.Z)(o().mark(function l(t,s){return o().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("options",s),a.abrupt("return",(0,C.WY)("/api/store",(0,m.Z)({method:"POST",headers:{"Content-Type":"application/json"},data:t},s||{})));case 2:case"end":return a.stop()}},l)})),I.apply(this,arguments)}function K(l){return D.apply(this,arguments)}function D(){return D=(0,v.Z)(o().mark(function l(t){return o().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",(0,C.WY)("/api/store",(0,m.Z)({method:"DELETE"},t||{})));case 1:case"end":return r.stop()}},l)})),D.apply(this,arguments)}var H=n(37476),J=n(26743),R=n(5966),e=n(85893),N={labelCol:{span:4},wrapperCol:{span:16}},Q=function(t){console.log("props.values-->",t.values);var s=(0,Z.useRef)();return(0,e.jsxs)(H.Z,(0,m.Z)((0,m.Z)({layout:"horizontal"},N),{},{title:t.values.id==null?"\u6DFB\u52A0\u95E8\u5E97":"\u4FEE\u6539\u95E8\u5E97",visible:t.visible,formRef:s,modalProps:{afterClose:function(){var a;(a=s.current)===null||a===void 0||a.resetFields()},onCancel:function(){t.onCancel()}},submitter:{render:function(a){var h=a.reset,f=a.submit;return[(0,e.jsx)(x.Z,{onClick:function(){return t.onCancel()},children:"\u53D6\u6D88"},"cancel"),(0,e.jsx)(x.Z,{onClick:h,children:"\u91CD\u7F6E"},"reset"),(0,e.jsx)(x.Z,{onClick:f,type:"primary",children:"\u63D0\u4EA4"},"submit")]}},onFinish:t.onSubmit,children:[(0,e.jsx)(J.Z,{name:"image",initialValue:[{thumbUrl:t.values.image}],label:"\u56FE\u7247",max:1,fieldProps:{name:"file",listType:"picture-card"},action:"/upload.do",extra:"",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247\uFF01"}]}),(0,e.jsx)(R.Z,{name:"name",label:"\u540D\u79F0",initialValue:t.values.name,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF01"}]}),(0,e.jsx)(R.Z,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",initialValue:t.values.phone,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD\uFF01"}]}),(0,e.jsx)(R.Z,{name:"address",label:"\u5730\u5740",initialValue:t.values.address,rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95E8\u5E97\u5730\u5740\uFF01"}]})]}))},X=Q,q=function(){var t=(0,Z.useState)(!1),s=(0,F.Z)(t,2),r=s[0],a=s[1],h=(0,Z.useRef)(),f=(0,Z.useState)([]),$=(0,F.Z)(f,2),p=$[0],b=$[1],ee=(0,Z.useState)(),B=(0,F.Z)(ee,2),ne=B[0],S=B[1],te=[{title:"\u95E8\u5E97ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u56FE\u7247",key:"image",dataIndex:"image",valueType:"image",hideInSearch:!0},{title:"\u5E97\u540D",key:"name",dataIndex:"name"},{title:"\u8054\u7CFB\u7535\u8BDD",key:"phone",dataIndex:"phone"},{title:"\u5730\u5740",key:"address",dataIndex:"address"},{title:"\u72B6\u6001",key:"enabled",dataIndex:"enabled",valueType:"select",initialValue:"0",valueEnum:{0:{text:"\u4E0D\u9650",status:""},true:{text:"\u5DF2\u542F\u7528",checked:!0,status:""},false:{text:"\u5DF2\u7981\u7528",checked:!1,status:""}},render:function(i,u){return u.enabled?(0,e.jsx)(P.Z,{color:"success",children:"\u5DF2\u542F\u7528"}):(0,e.jsx)(P.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdTime",dataIndex:"createdTime",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,render:function(i,u){return(0,e.jsxs)(k.Z,{size:"middle",children:[(0,e.jsx)("a",{onClick:function(){S(u),a(!0)},children:"\u7F16\u8F91"},"edit"),(0,e.jsx)("a",{children:u.enabled?"\u7981\u7528":"\u542F\u7528"},"enabled"),(0,e.jsx)(V.Z,{trigger:["click"],overlay:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(j.Z.Item,{children:"\u4FEE\u6539\u5BC6\u7801"},0),(0,e.jsx)(j.Z.Item,{children:"\u6240\u5C5E\u95E8\u5E97"},1),(0,e.jsx)(j.Z.Item,{children:"\u5220\u9664\u8D26\u53F7"},2)]}),children:(0,e.jsxs)("a",{children:["\u66F4\u591A",(0,e.jsx)(O.Z,{})]})},"more")]})}}];return(0,e.jsxs)(Y.ZP,{children:[(0,e.jsx)(M.ZP,{headerTitle:"headerTitle",actionRef:h,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsxs)(x.Z,{type:"primary",onClick:function(){r||(S(void 0),a(!0))},children:[(0,e.jsx)(U.Z,{})," \u6DFB\u52A0"]},"primary")]},request:z,columns:te,rowSelection:{onChange:function(i,u){b(u)}}}),(p==null?void 0:p.length)>0&&(0,e.jsx)(w.Z,{extra:(0,e.jsx)("div",{children:(0,e.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",p.reduce(function(d,i){return d+i.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,e.jsx)(x.Z,{onClick:(0,v.Z)(o().mark(function d(){var i,u;return o().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return console.log("selectedRowsState--->",p),g.next=3,K(p);case 3:b([]),(i=h.current)===null||i===void 0||(u=i.reloadAndRest)===null||u===void 0||u.call(i);case 5:case"end":return g.stop()}},d)})),children:"\u6279\u91CF\u5220\u9664"})}),(0,e.jsx)(X,{onSubmit:function(){var d=(0,v.Z)(o().mark(function i(u){var y;return o().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(console.log("edit item values--->",u),u.id==null){c.next=7;break}return c.next=4,G(u);case 4:y=c.sent,c.next=10;break;case 7:return c.next=9,L(u);case 9:y=c.sent;case 10:y&&(S(void 0),a(!1),h.current&&h.current.reload());case 11:case"end":return c.stop()}},i)}));return function(i){return d.apply(this,arguments)}}(),onCancel:function(){console.log("cancel------>"),S(void 0),a(!1)},visible:r,values:ne||{}})]})},_=q}}]);
