(self.webpackChunkchain_store=self.webpackChunkchain_store||[]).push([[414],{70725:function(H,I,e){"use strict";e.d(I,{oM:function(){return c},Rk:function(){return w},P:function(){return A},O_:function(){return N},Pd:function(){return k},mt:function(){return $}});var c={pageSize:10},R;(function(r){r[r.SUPER_ADMIN=1]="SUPER_ADMIN",r[r.NORMAL_ADMIN=2]="NORMAL_ADMIN",r[r.STORE_ADMIN=3]="STORE_ADMIN"})(R||(R={}));var b;(function(r){r[r.SUPER_ADMIN=1]="SUPER_ADMIN",r[r.NORMAL_ADMIN=2]="NORMAL_ADMIN",r[r.CASHIER=3]="CASHIER"})(b||(b={}));var d;(function(r){r[r.CASH=1]="CASH",r[r.ALIPAY=2]="ALIPAY",r[r.WECHAT=3]="WECHAT"})(d||(d={}));var w=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u73B0\u91D1",color:"#ff7b7b"},{value:2,label:"\u652F\u4ED8\u5B9D",color:"#03a6fc"},{value:3,label:"\u5FAE\u4FE1",color:"#62e367"}],A=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u91C7\u8D2D",color:"#03a6fc"},{value:3,label:"\u91C7\u8D2D\u5B8C\u6210",color:"#28c522"}],N=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u666E\u901A\u5165\u5E93"},{value:2,label:"\u91C7\u8D2D\u5165\u5E93"}],k=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u5165\u5E93",color:"#03a6fc"},{value:3,label:"\u5165\u5E93\u5B8C\u6210",color:"#28c522"}],$=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u76D8\u70B9",color:"#03a6fc"},{value:3,label:"\u76D8\u70B9\u5B8C\u6210",color:"#28c522"}]},94007:function(H,I,e){"use strict";e.r(I),e.d(I,{default:function(){return se}});var c=e(11849),R=e(57663),b=e(71577),d=e(3182),w=e(71194),A=e(57016),N=e(49111),k=e(19650),$=e(71153),r=e(60331),D=e(2824),z=e(94043),l=e.n(z),y=e(67294),G=e(81907),V=e(85224),K=e(33145),J=e(49101),F=e(21010);function Q(o,n,f,a){return E.apply(this,arguments)}function E(){return E=(0,d.Z)(l().mark(function o(n,f,a,v){return l().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.abrupt("return",(0,F.WY)("/api/store",(0,c.Z)({method:"GET",params:(0,c.Z)((0,c.Z)({},n),{},{sorter:f,filter:a})},v||{})));case 1:case"end":return Z.stop()}},o)})),E.apply(this,arguments)}function X(o){return M.apply(this,arguments)}function M(){return M=(0,d.Z)(l().mark(function o(n){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,F.WY)("/api/store",(0,c.Z)({method:"PUT"},n||{})));case 1:case"end":return a.stop()}},o)})),M.apply(this,arguments)}function q(o){return O.apply(this,arguments)}function O(){return O=(0,d.Z)(l().mark(function o(n){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,F.WY)("/api/store/enabled",(0,c.Z)({method:"PUT"},n||{})));case 1:case"end":return a.stop()}},o)})),O.apply(this,arguments)}function _(o){return T.apply(this,arguments)}function T(){return T=(0,d.Z)(l().mark(function o(n){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,F.WY)("/api/store",(0,c.Z)({method:"POST",headers:{"Content-Type":"application/json"}},n||{})));case 1:case"end":return a.stop()}},o)})),T.apply(this,arguments)}function B(o){return P.apply(this,arguments)}function P(){return P=(0,d.Z)(l().mark(function o(n){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("removeStore options--->",n),a.abrupt("return",(0,F.WY)("/api/store",(0,c.Z)({method:"DELETE"},n||{})));case 2:case"end":return a.stop()}},o)})),P.apply(this,arguments)}var ee=e(37476),x=e(5966),ae=e(26743),t=e(85893),ne={labelCol:{span:4},wrapperCol:{span:16}},re=function(n){console.log("props.values-->",n.values);var f=(0,y.useRef)();return(0,t.jsxs)(ee.Z,(0,c.Z)((0,c.Z)({layout:"horizontal"},ne),{},{title:n.values.id==null?"\u6DFB\u52A0\u95E8\u5E97":"\u4FEE\u6539\u95E8\u5E97",visible:n.visible,formRef:f,modalProps:{destroyOnClose:!0,afterClose:function(){var v;(v=f.current)===null||v===void 0||v.resetFields()},onCancel:function(){n.onCancel()}},initialValues:{id:n.values.id,image:n.values.image?[{thumbUrl:n.values.image}]:null,name:n.values.name,phone:n.values.phone,address:n.values.address},onFinish:n.onSubmit,children:[(0,t.jsx)(x.Z,{name:"id",width:"md",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",hidden:!0}),(0,t.jsx)(ae.Z,{name:"image",label:"\u56FE\u7247",max:1,fieldProps:{name:"file",listType:"picture-card"},action:"/upload.do",transform:function(v){return{image:v[0].thumbUrl}},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247\uFF01"}]}),(0,t.jsx)(x.Z,{name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF01"}]}),(0,t.jsx)(x.Z,{name:"phone",label:"\u8054\u7CFB\u7535\u8BDD",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD\uFF01"}]}),(0,t.jsx)(x.Z,{name:"address",label:"\u5730\u5740",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95E8\u5E97\u5730\u5740\uFF01"}]})]}))},te=re,ue=e(70725),le=function(){var n=(0,y.useState)(!1),f=(0,D.Z)(n,2),a=f[0],v=f[1],g=(0,y.useRef)(),Z=(0,y.useState)([]),U=(0,D.Z)(Z,2),C=U[0],L=U[1],oe=(0,y.useState)(),W=(0,D.Z)(oe,2),Y=W[0],j=W[1],ie=[{title:"\u95E8\u5E97ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u56FE\u7247",key:"image",dataIndex:"image",valueType:"image",hideInSearch:!0},{title:"\u5E97\u540D",key:"name",dataIndex:"name"},{title:"\u8054\u7CFB\u7535\u8BDD",key:"phone",dataIndex:"phone"},{title:"\u5730\u5740",key:"address",dataIndex:"address"},{title:"\u72B6\u6001",key:"enabled",dataIndex:"enabled",valueType:"select",initialValue:"0",valueEnum:{0:{text:"\u4E0D\u9650",status:""},true:{text:"\u5DF2\u542F\u7528",checked:!0,status:""},false:{text:"\u5DF2\u7981\u7528",checked:!1,status:""}},render:function(s,u){return u.enabled?(0,t.jsx)(r.Z,{color:"success",children:"\u5DF2\u542F\u7528"}):(0,t.jsx)(r.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,width:160,render:function(s,u){return(0,t.jsxs)(k.Z,{size:"middle",children:[(0,t.jsx)("a",{onClick:function(){j(u),v(!0)},children:"\u7F16\u8F91"},"edit"),(0,t.jsx)("a",{onClick:function(){return ce(u)},children:u.enabled?"\u7981\u7528":"\u542F\u7528"},"enabled"),(0,t.jsx)("a",{onClick:function(){return de(u)},children:"\u5220\u9664"},"delete")]})}}];function ce(i){A.Z.confirm({title:"\u63D0\u793A",content:(0,t.jsxs)("div",{children:["\u786E\u5B9A\u8981",i.enabled?"\u7981\u7528":"\u5F00\u542F","\u95E8\u5E97\uFF1F"]}),onOk:function(){var s=(0,d.Z)(l().mark(function h(){var m;return l().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,q({data:i});case 2:m=S.sent,m&&g.current&&g.current.reload();case 4:case"end":return S.stop()}},h)}));function u(){return s.apply(this,arguments)}return u}()})}function de(i){A.Z.confirm({title:"\u63D0\u793A",content:(0,t.jsxs)("div",{children:["\u786E\u5B9A\u8981\u5220\u9664\u3010",i.name,"\u3011\u95E8\u5E97\uFF1F"]}),onOk:function(){var s=(0,d.Z)(l().mark(function h(){var m;return l().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,B({data:[i]});case 2:m=S.sent,m&&g.current&&g.current.reload();case 4:case"end":return S.stop()}},h)}));function u(){return s.apply(this,arguments)}return u}()})}return(0,t.jsxs)(G.ZP,{children:[(0,t.jsx)(K.ZP,{pagination:ue.oM,headerTitle:"",actionRef:g,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,t.jsxs)(b.Z,{type:"primary",onClick:function(){a||(j(void 0),v(!0))},children:[(0,t.jsx)(J.Z,{})," \u6DFB\u52A0"]},"primary")]},request:Q,columns:ie,rowSelection:{onChange:function(s,u){L(u)}}}),(C==null?void 0:C.length)>0&&(0,t.jsx)(V.Z,{extra:(0,t.jsx)("div",{children:(0,t.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",C.reduce(function(i,s){return i+s.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,t.jsx)(b.Z,{onClick:(0,d.Z)(l().mark(function i(){var s,u;return l().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return console.log("selectedRowsState--->",C),m.next=3,B({data:C});case 3:L([]),(s=g.current)===null||s===void 0||(u=s.reloadAndRest)===null||u===void 0||u.call(s);case 5:case"end":return m.stop()}},i)})),children:"\u6279\u91CF\u5220\u9664"})}),(0,t.jsx)(te,{onSubmit:function(){var i=(0,d.Z)(l().mark(function s(u){var h;return l().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(u.id==null){p.next=6;break}return p.next=3,X({data:(0,c.Z)((0,c.Z)({},Y),u)});case 3:h=p.sent,p.next=9;break;case 6:return p.next=8,_({data:u});case 8:h=p.sent;case 9:h&&(j(void 0),v(!1),g.current&&g.current.reload());case 10:case"end":return p.stop()}},s)}));return function(s){return i.apply(this,arguments)}}(),onCancel:function(){j(void 0),v(!1)},visible:a,values:Y||{}})]})},se=le}}]);
