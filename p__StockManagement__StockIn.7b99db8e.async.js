(self.webpackChunkchain_store=self.webpackChunkchain_store||[]).push([[826],{70725:function(Y,A,e){"use strict";e.d(A,{oM:function(){return E},Rk:function(){return f},P:function(){return P},O_:function(){return Z},Pd:function(){return F},mt:function(){return j}});var E={pageSize:10},g;(function(t){t[t.SUPER_ADMIN=1]="SUPER_ADMIN",t[t.NORMAL_ADMIN=2]="NORMAL_ADMIN",t[t.STORE_ADMIN=3]="STORE_ADMIN"})(g||(g={}));var R;(function(t){t[t.SUPER_ADMIN=1]="SUPER_ADMIN",t[t.NORMAL_ADMIN=2]="NORMAL_ADMIN",t[t.CASHIER=3]="CASHIER"})(R||(R={}));var C;(function(t){t[t.CASH=1]="CASH",t[t.ALIPAY=2]="ALIPAY",t[t.WECHAT=3]="WECHAT"})(C||(C={}));var f=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u73B0\u91D1",color:"#ff7b7b"},{value:2,label:"\u652F\u4ED8\u5B9D",color:"#03a6fc"},{value:3,label:"\u5FAE\u4FE1",color:"#62e367"}],P=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u91C7\u8D2D",color:"#03a6fc"},{value:3,label:"\u91C7\u8D2D\u5B8C\u6210",color:"#28c522"}],Z=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u666E\u901A\u5165\u5E93"},{value:2,label:"\u91C7\u8D2D\u5165\u5E93"}],F=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u5165\u5E93",color:"#03a6fc"},{value:3,label:"\u5165\u5E93\u5B8C\u6210",color:"#28c522"}],j=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u76D8\u70B9",color:"#03a6fc"},{value:3,label:"\u76D8\u70B9\u5B8C\u6210",color:"#28c522"}]},13320:function(Y,A,e){"use strict";e.r(A),e.d(A,{default:function(){return re}});var E=e(57338),g=e(25084),R=e(57663),C=e(71577),f=e(3182),P=e(71194),Z=e(57016),F=e(49111),j=e(19650),t=e(71153),z=e(60331),D=e(2824),V=e(94043),d=e.n(V),x=e(67294),K=e(81907),J=e(85224),Q=e(33145),y=e(11849),$=e(21010);function X(u,s,i,l){return N.apply(this,arguments)}function N(){return N=(0,f.Z)(d().mark(function u(s,i,l,c){return d().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.abrupt("return",(0,$.WY)("/api/store/stockIn/order",(0,y.Z)({method:"GET",params:(0,y.Z)((0,y.Z)({},s),{},{sorter:i,filter:l})},c||{})));case 1:case"end":return I.stop()}},u)})),N.apply(this,arguments)}function L(u){return b.apply(this,arguments)}function b(){return b=(0,f.Z)(d().mark(function u(s){return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",(0,$.WY)("/api/store/stockIn/order",(0,y.Z)({method:"DELETE"},s||{})));case 1:case"end":return l.stop()}},u)})),b.apply(this,arguments)}function ae(u,s,i,l,c){return M.apply(this,arguments)}function M(){return M=_asyncToGenerator(_regeneratorRuntime.mark(function u(s,i,l,c,h){return _regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",request("/api/store/stockIn/order/".concat(s),_objectSpread({method:"GET",params:_objectSpread(_objectSpread({},i),{},{sorter:l,filter:c})},h||{})));case 1:case"end":return p.stop()}},u)})),M.apply(this,arguments)}function oe(u,s){return w.apply(this,arguments)}function w(){return w=_asyncToGenerator(_regeneratorRuntime.mark(function u(s,i){return _regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",request("/api/store/stockIn/orderItem",_objectSpread({method:"DELETE",data:s},i||{})));case 1:case"end":return c.stop()}},u)})),w.apply(this,arguments)}var q=e(96459),T=e(70725),_=e(49101),n=e(85893),ee=function(){var s=(0,x.useState)(!1),i=(0,D.Z)(s,2),l=i[0],c=i[1],h=(0,x.useRef)(),I=(0,x.useState)([]),p=(0,D.Z)(I,2),O=p[0],H=p[1],te=(0,x.useState)(),B=(0,D.Z)(te,2),S=B[0],G=B[1],W=[{title:"ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u8BA2\u5355\u53F7",key:"orderNo",dataIndex:"orderNo"},{title:"\u95E8\u5E97",key:"storeName",dataIndex:"storeName"},{title:"\u5546\u54C1\u6570",key:"productCount",dataIndex:"productCount"},{title:"\u6765\u6E90",key:"source",dataIndex:"source",render:function(o,r){return r.source?T.O_[r.source].label:"\u672A\u77E5"}},{title:"\u6765\u6E90ID",key:"sourceOrderId",dataIndex:"sourceOrderId",render:function(o,r){return r.sourceOrderId?r.sourceOrderId:"-"}},{title:"\u72B6\u6001",key:"status",dataIndex:"status",render:function(o,r){var v=T.Pd[r.status];return(0,n.jsx)(z.Z,{color:v.color,children:v.label})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,hideInDescriptions:!0,render:function(o,r){return(0,n.jsxs)(j.Z,{size:"middle",children:[(0,n.jsx)("a",{onClick:function(){G(r),c(!0)},children:"\u67E5\u770B"},"view"),(0,n.jsx)("a",{onClick:function(){},children:"\u7F16\u8F91"},"edit"),(0,n.jsx)("a",{onClick:function(){return ne(r)},children:"\u5220\u9664"},"delete")]})}}];function ne(a){Z.Z.confirm({title:"\u63D0\u793A",content:(0,n.jsxs)("div",{children:["\u786E\u5B9A\u8981\u5220\u9664\u3010",a.orderNo,"\u3011\u5165\u5E93\u5355\uFF1F"]}),onOk:function(){var o=(0,f.Z)(d().mark(function v(){var m;return d().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,L({data:[a]});case 2:m=k.sent,m&&h.current&&h.current.reload();case 4:case"end":return k.stop()}},v)}));function r(){return o.apply(this,arguments)}return r}()})}return(0,n.jsxs)(K.ZP,{children:[(0,n.jsx)(Q.ZP,{pagination:T.oM,headerTitle:"",actionRef:h,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,n.jsxs)(C.Z,{type:"primary",onClick:function(){},children:[(0,n.jsx)(_.Z,{})," \u6DFB\u52A0"]},"primary")]},request:X,columns:W,rowSelection:{onChange:function(o,r){H(r)}}}),(O==null?void 0:O.length)>0&&(0,n.jsx)(J.Z,{extra:(0,n.jsx)("div",{children:(0,n.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",O.reduce(function(a,o){return a+o.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,n.jsx)(C.Z,{onClick:(0,f.Z)(d().mark(function a(){var o,r;return d().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return console.log("selectedRowsState--->",O),m.next=3,L(O.map(function(U){return U.id}));case 3:H([]),(o=h.current)===null||o===void 0||(r=o.reloadAndRest)===null||r===void 0||r.call(o);case 5:case"end":return m.stop()}},a)})),children:"\u6279\u91CF\u5220\u9664"})}),(0,n.jsx)(g.Z,{width:600,visible:l,onClose:function(){G(void 0),c(!1)},closable:!1,children:(S==null?void 0:S.orderNo)&&(0,n.jsx)(q.Z,{column:2,title:"\u5165\u5E93\u5355\u8BE6\u60C5",request:(0,f.Z)(d().mark(function a(){return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{data:S||{}});case 1:case"end":return r.stop()}},a)})),params:{id:S==null?void 0:S.id},columns:W})})]})},re=ee}}]);