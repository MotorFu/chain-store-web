(self.webpackChunkchain_store=self.webpackChunkchain_store||[]).push([[874],{70725:function(R,i,a){"use strict";a.d(i,{oM:function(){return m},Rk:function(){return A},P:function(){return v},O_:function(){return p},Pd:function(){return r},mt:function(){return u}});var m={pageSize:10},d;(function(e){e[e.SUPER_ADMIN=1]="SUPER_ADMIN",e[e.NORMAL_ADMIN=2]="NORMAL_ADMIN",e[e.STORE_ADMIN=3]="STORE_ADMIN"})(d||(d={}));var s;(function(e){e[e.SUPER_ADMIN=1]="SUPER_ADMIN",e[e.NORMAL_ADMIN=2]="NORMAL_ADMIN",e[e.CASHIER=3]="CASHIER"})(s||(s={}));var S;(function(e){e[e.CASH=1]="CASH",e[e.ALIPAY=2]="ALIPAY",e[e.WECHAT=3]="WECHAT"})(S||(S={}));var A=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u73B0\u91D1",color:"#ff7b7b"},{value:2,label:"\u652F\u4ED8\u5B9D",color:"#03a6fc"},{value:3,label:"\u5FAE\u4FE1",color:"#62e367"}],v=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u91C7\u8D2D",color:"#03a6fc"},{value:3,label:"\u91C7\u8D2D\u5B8C\u6210",color:"#28c522"}],p=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u666E\u901A\u5165\u5E93"},{value:2,label:"\u91C7\u8D2D\u5165\u5E93"}],r=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u5165\u5E93",color:"#03a6fc"},{value:3,label:"\u5165\u5E93\u5B8C\u6210",color:"#28c522"}],u=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u76D8\u70B9",color:"#03a6fc"},{value:3,label:"\u76D8\u70B9\u5B8C\u6210",color:"#28c522"}]},85126:function(R,i,a){"use strict";a.r(i),a.d(i,{default:function(){return H}});var m=a(57338),d=a(25084),s=a(3182),S=a(49111),A=a(19650),v=a(2824),p=a(94043),r=a.n(p),u=a(67294),e=a(81907),Z=a(33145),N=a(11849),O=a(21010);function k(M,f,c,I){return C.apply(this,arguments)}function C(){return C=(0,s.Z)(r().mark(function M(f,c,I,h){return r().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,O.WY)("/api/store/product/stock",(0,N.Z)({method:"GET",params:(0,N.Z)((0,N.Z)({},f),{},{sorter:c,filter:I})},h||{})));case 1:case"end":return n.stop()}},M)})),C.apply(this,arguments)}var j=a(96459),y=a(70725),l=a(85893),T=function(){var f=(0,u.useState)(!1),c=(0,v.Z)(f,2),I=c[0],h=c[1],x=(0,u.useRef)(),n=(0,u.useState)(),D=(0,v.Z)(n,2),t=D[0],g=D[1],P=[{title:"ID",key:"productId",dataIndex:"productId",sorter:!0},{title:"\u56FE\u7247",key:"productImage",dataIndex:"productImage",valueType:"image",hideInSearch:!0},{title:"\u5546\u54C1\u540D",key:"productName",dataIndex:"productName"},{title:"\u95E8\u5E97",key:"storeName",dataIndex:"storeName"},{title:"\u5E93\u5B58",key:"stock",dataIndex:"stock"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,hideInDescriptions:!0,render:function(L,o){return(0,l.jsx)(A.Z,{size:"middle",children:(0,l.jsx)("a",{onClick:function(){g(o),h(!0)},children:"\u67E5\u770B"},"edit")})}}];return(0,l.jsxs)(e.ZP,{children:[(0,l.jsx)(Z.ZP,{pagination:y.oM,headerTitle:"",actionRef:x,rowKey:"key",search:{labelWidth:120},request:k,columns:P,rowSelection:!1}),(0,l.jsx)(d.Z,{width:600,visible:I,onClose:function(){g(void 0),h(!1)},closable:!1,children:(t==null?void 0:t.id)&&(0,l.jsx)(j.Z,{column:2,title:"\u5546\u54C1\u5E93\u5B58\u8BE6\u60C5",request:(0,s.Z)(r().mark(function b(){return r().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",{data:t||{}});case 1:case"end":return o.stop()}},b)})),params:{id:t==null?void 0:t.id},columns:P})})]})},H=T}}]);