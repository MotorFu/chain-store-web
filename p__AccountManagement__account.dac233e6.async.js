(self.webpackChunkchain_store=self.webpackChunkchain_store||[]).push([[845],{70725:function(oe,B,a){"use strict";a.d(B,{oM:function(){return p},Rk:function(){return ee},P:function(){return k},O_:function(){return te},Pd:function(){return U},mt:function(){return ne}});var p={pageSize:10},N;(function(f){f[f.SUPER_ADMIN=1]="SUPER_ADMIN",f[f.NORMAL_ADMIN=2]="NORMAL_ADMIN",f[f.STORE_ADMIN=3]="STORE_ADMIN"})(N||(N={}));var T;(function(f){f[f.SUPER_ADMIN=1]="SUPER_ADMIN",f[f.NORMAL_ADMIN=2]="NORMAL_ADMIN",f[f.CASHIER=3]="CASHIER"})(T||(T={}));var A;(function(f){f[f.CASH=1]="CASH",f[f.ALIPAY=2]="ALIPAY",f[f.WECHAT=3]="WECHAT"})(A||(A={}));var ee=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u73B0\u91D1",color:"#ff7b7b"},{value:2,label:"\u652F\u4ED8\u5B9D",color:"#03a6fc"},{value:3,label:"\u5FAE\u4FE1",color:"#62e367"}],k=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u91C7\u8D2D",color:"#03a6fc"},{value:3,label:"\u91C7\u8D2D\u5B8C\u6210",color:"#28c522"}],te=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u666E\u901A\u5165\u5E93"},{value:2,label:"\u91C7\u8D2D\u5165\u5E93"}],U=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u5165\u5E93",color:"#03a6fc"},{value:3,label:"\u5165\u5E93\u5B8C\u6210",color:"#28c522"}],ne=[{value:0,label:"\u4E0D\u9650"},{value:1,label:"\u8349\u7A3F",color:"#ccc"},{value:2,label:"\u5F85\u76D8\u70B9",color:"#03a6fc"},{value:3,label:"\u76D8\u70B9\u5B8C\u6210",color:"#28c522"}]},53563:function(oe,B,a){"use strict";a.r(B),a.d(B,{default:function(){return $e}});var p=a(11849),N=a(57663),T=a(71577),A=a(3182),ee=a(71194),k=a(57016),te=a(49111),U=a(19650),ne=a(59250),f=a(13013),Oe=a(30887),L=a(99210),Be=a(71153),D=a(60331),w=a(2824),se=a(94043),h=a.n(se),$=a(67294),ie=a(81907),ce=a(85224),de=a(33145),ve=a(8812),fe=a(49101),O=a(21010);function he(n,t,r,e){return z.apply(this,arguments)}function z(){return z=(0,A.Z)(h().mark(function n(t,r,e,u){return h().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",(0,O.WY)("/api/account",(0,p.Z)({method:"GET",params:(0,p.Z)((0,p.Z)({},t),{},{sorter:r,filter:e})},u||{})));case 1:case"end":return m.stop()}},n)})),z.apply(this,arguments)}function pe(n){return W.apply(this,arguments)}function W(){return W=(0,A.Z)(h().mark(function n(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.WY)("/api/account",(0,p.Z)({method:"PUT"},t||{})));case 1:case"end":return e.stop()}},n)})),W.apply(this,arguments)}function me(n,t){return G.apply(this,arguments)}function G(){return G=(0,A.Z)(h().mark(function n(t,r){return h().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",(0,O.WY)("/api/account/enabled",(0,p.Z)({method:"PUT",data:t},r||{})));case 1:case"end":return u.stop()}},n)})),G.apply(this,arguments)}function ye(n){return Y.apply(this,arguments)}function Y(){return Y=(0,A.Z)(h().mark(function n(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.WY)("/api/account",(0,p.Z)({method:"POST"},t||{})));case 1:case"end":return e.stop()}},n)})),Y.apply(this,arguments)}function re(n){return H.apply(this,arguments)}function H(){return H=(0,A.Z)(h().mark(function n(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,O.WY)("/api/account",(0,p.Z)({method:"DELETE"},t||{})));case 1:case"end":return e.stop()}},n)})),H.apply(this,arguments)}function we(n,t,r){return V.apply(this,arguments)}function V(){return V=_asyncToGenerator(_regeneratorRuntime.mark(function n(t,r,e){return _regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",request("/api/account/".concat(r,"/store/relation"),_objectSpread({method:"GET",params:_objectSpread({},t)},e||{})));case 1:case"end":return s.stop()}},n)})),V.apply(this,arguments)}function Pe(n){return K.apply(this,arguments)}function K(){return K=_asyncToGenerator(_regeneratorRuntime.mark(function n(t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/account/store/relation",_objectSpread({method:"POST"},t||{})));case 1:case"end":return e.stop()}},n)})),K.apply(this,arguments)}function Me(n){return J.apply(this,arguments)}function J(){return J=_asyncToGenerator(_regeneratorRuntime.mark(function n(t){return _regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",request("/api/account/store/relation",_objectSpread({method:"DELETE"},t||{})));case 1:case"end":return e.stop()}},n)})),J.apply(this,arguments)}var Q=a(3843),P=a(5966),ge=a(26743),X=a(64317),Se=a(86582),Ae=a(27484),q=a.n(Ae),be=a(8575),ae=a(96486),_=a(15623);function Ze(n,t,r){var e=n.body,u=e.id,s=e.enabled,m=r.filter(function(F){return F.id===u})[0];m.enabled=!s,t.send({status:"ok",success:!0})}function Re(n,t,r){var e=n.body;console.log("mock update",e),e.length>0&&e.forEach(function(u){var s=r.findIndex(function(m){return m.id===u.id});r.splice(s,1)}),t.send({status:"ok",success:!0})}function xe(n,t,r,e){var u=n.body;console.log("mock create ",u);var s=[];r.forEach(function(m){s.push(m.id)}),u.id=Math.max.apply(Math,s)+1,u.key=String(u.id),u.enabled=!0,u.createdAt=q()().valueOf(),r.push((0,p.Z)((0,p.Z)({},u),e)),t.send({status:"ok",success:!0})}function Fe(n,t,r){var e=n.body;e.lastModifiedAt=q()().valueOf(),console.log("mock update",e);var u=r.findIndex(function(s){return s.id===e.id});r[u]=e,t.send({status:"ok",success:!0})}var ue=["https://img2.fr-trading.com/0/2_592_67091_800_600.jpg.webp","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8fMtwaPzUkLKdDdo8dtkMAT0pomCy8WBSg&usqp=CAU"],je=function(t,r){console.log("store init data");for(var e=[],u=0;u<r;u+=1){var s=(t-1)*10+u;e.push({id:s+1,key:"".concat(s+1),name:"\u95E8\u5E97-".concat((0,_.mock)("@ctitle(3,7)")),image:ue[_.Random.natural(0,ue.length-1)],phone:"".concat(16688e6+u),address:(0,_.mock)("@county(true)"),enabled:u%4!=0,createdAt:q()().add(-(r-u),"day").valueOf()})}return e.reverse(),e},E=je(1,15);function Ie(){var n=[];return E.forEach(function(t){n.push(t)}),n}function Ee(n,t,r){var e=Ie(),u=r;(!u||Object.prototype.toString.call(u)!=="[object String]")&&(u=n.url);var s=n.query,m=s.current,F=m===void 0?1:m,S=s.pageSize,b=S===void 0?10:S,i=(0,be.Qc)(u,!0).query;if(i.sorter){var j=JSON.parse(i.sorter);e=e.sort(function(d,y){var I=0;return Object.keys(j).forEach(function(c){if(j[c]==="descend"){d[c]-y[c]>0?I+=-1:I+=1;return}d[c]-y[c]>0?I+=1:I+=-1}),I})}console.log("params----->",i),i.id&&(e=e.filter(function(d){return(d==null?void 0:d.id)===(0,ae.parseInt)("".concat(i.id),10)})),i.name&&(e=e.filter(function(d){var y;return d==null||(y=d.name)===null||y===void 0?void 0:y.includes(i.name||"")})),i.phone&&(e=e.filter(function(d){var y;return d==null||(y=d.phone)===null||y===void 0?void 0:y.includes(i.phone||"")})),i.address&&(e=e.filter(function(d){var y;return d==null||(y=d.address)===null||y===void 0?void 0:y.includes(i.address||"")})),i.enabled&&(String(i.enabled)==="true"||String(i.enabled)==="false")&&(e=e.filter(function(d){return(d!=null&&d.enabled?"true":"false")===String(i.enabled)}));var M=(0,Se.Z)(e).slice((F-1)*b,F*b),C={data:M,total:e.length,success:!0,pageSize:b,current:(0,ae.parseInt)("".concat(i.current),10)||1};return t.json(C)}var Ne={"GET /api/store":Ee,"POST /api/store":function(t,r){return xe(t,r,E)},"PUT /api/store":function(t,r){return Fe(t,r,E)},"PUT /api/store/enabled":function(t,r){return Ze(t,r,E)},"DELETE /api/store":function(t,r){return Re(t,r,E)}},l=a(85893),le={labelCol:{span:4},wrapperCol:{span:16}},Ce=function(t){var r,e,u=(0,$.useState)(!1),s=(0,w.Z)(u,2),m=s[0],F=s[1];return(0,l.jsxs)(Q.Z,{stepsProps:{size:"small"},stepsFormRender:function(b,i){return(0,l.jsx)(k.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:t.values.id==null?"\u6DFB\u52A0\u8D26\u53F7":"\u4FEE\u6539\u8D26\u53F7",visible:t.visible,footer:i,onCancel:function(){t.onCancel()},children:b})},onFinish:t.onSubmit,children:[(0,l.jsxs)(Q.Z.StepForm,(0,p.Z)((0,p.Z)({layout:"horizontal"},le),{},{initialValues:{id:t.values.id,username:t.values.username,phone:t.values.phone,icon:t.values.icon?[{thumbUrl:t.values.icon}]:null},title:"\u57FA\u672C\u4FE1\u606F",children:[(0,l.jsx)(P.Z,{name:"id",width:"md",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",hidden:!0}),(0,l.jsx)(ge.Z,{name:"icon",label:"\u5934\u50CF",max:1,fieldProps:{name:"file",listType:"picture-card"},transform:function(b){return{icon:b[0].thumbUrl}},action:"/upload.do",rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247\uFF01"}]}),(0,l.jsx)(P.Z,{name:"username",label:"\u8D26\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\uFF01"}]}),(0,l.jsx)(P.Z,{name:"phone",width:"md",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",rules:[{required:!0,message:"\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\u683C\u5F0F!"}]})]})),(0,l.jsxs)(Q.Z.StepForm,(0,p.Z)((0,p.Z)({layout:"horizontal"},le),{},{initialValues:{id:t.values.id,type:t.values.type,storeRelation:{role:(r=t.values.storeRelation)===null||r===void 0?void 0:r.role,storeId:(e=t.values.storeRelation)===null||e===void 0?void 0:e.storeId}},title:"\u8D26\u53F7\u7C7B\u578B",onValuesChange:function(b,i){console.log("onValuesChange---->",b,i),F(i.type===3)},children:[(0,l.jsx)(P.Z,{name:"id",width:"md",label:"\u624B\u673A\u53F7",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",hidden:!0}),(0,l.jsx)(X.Z,{name:"type",label:"\u8D26\u53F7\u7C7B\u578B",disabled:t.values.type===1,options:t.values.type===1?[{value:1,label:"\u8D85\u7EA7\u7CFB\u7EDF\u7BA1\u7406\u5458"}]:[{value:2,label:"\u7CFB\u7EDF\u7BA1\u7406\u5458"},{value:3,label:"\u95E8\u5E97\u7BA1\u7406\u5458"}]}),t.values.type===3||m?[(0,l.jsx)(X.Z,{name:["storeRelation","role"],label:"\u95E8\u5E97\u89D2\u8272",options:[{value:1,label:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{value:2,label:"\u666E\u901A\u7BA1\u7406\u5458"},{value:3,label:"\u6536\u94F6\u5458"}]},"storeRelation.role"),(0,l.jsx)(X.Z,{name:["storeRelation","storeId"],label:"\u95E8\u5E97",request:(0,A.Z)(h().mark(function S(){return h().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",E.map(function(j){return{value:j.id,label:j.name}}));case 1:case"end":return i.stop()}},S)}))},"storeRelation.storeId")]:null]}))]})},Te=Ce,ke=a(70725),De=function(){var t=(0,$.useState)(!1),r=(0,w.Z)(t,2),e=r[0],u=r[1],s=(0,$.useRef)(),m=(0,$.useState)([]),F=(0,w.Z)(m,2),S=F[0],b=F[1],i=(0,$.useState)(),j=(0,w.Z)(i,2),M=j[0],C=j[1],d=[{title:"\u8D26\u53F7ID",key:"id",dataIndex:"id",sorter:!0},{title:"\u5934\u50CF",key:"icon",dataIndex:"icon",valueType:"avatar"},{title:"\u8D26\u53F7",key:"username",dataIndex:"username"},{title:"\u624B\u673A\u53F7",key:"phone",dataIndex:"phone"},{title:"\u8D26\u53F7\u7C7B\u578B",key:"type",dataIndex:"type",valueEnum:{0:{text:"\u4E0D\u9650",status:""},1:{text:"\u8D85\u7EA7\u7BA1\u7406\u5458",status:""},2:{text:"\u7CFB\u7EDF\u7BA1\u7406\u5458",status:""},3:{text:"\u95E8\u5E97\u7BA1\u7406\u5458",status:""}},render:function(v,o){return o.type===1?(0,l.jsx)(D.Z,{color:"#108ee9",children:"\u8D85\u7EA7\u7BA1\u7406\u5458"},o.key):o.type===2?(0,l.jsx)(D.Z,{color:"cyan",children:"\u7CFB\u7EDF\u7BA1\u7406\u5458"},o.key):(0,l.jsx)(D.Z,{color:"purple",children:"\u95E8\u5E97\u7BA1\u7406\u5458"},o.key)}},{title:"\u95E8\u5E97\u540D\u79F0",key:"storeRelation.storeName",dataIndex:"storeRelation.storeName",hideInSearch:!0,render:function(v,o){return o.storeRelation?o.storeRelation.storeName:"-"}},{title:"\u95E8\u5E97\u89D2\u8272",key:"storeRelation.role",dataIndex:"storeRelation.role",hideInSearch:!0,render:function(v,o){var g;switch((g=o.storeRelation)===null||g===void 0?void 0:g.role){case 1:return"\u95E8\u5E97\u8D85\u7EA7\u7BA1\u7406\u5458";case 2:return"\u95E8\u5E97\u666E\u901A\u7BA1\u7406\u5458";case 3:return"\u95E8\u5E97\u6536\u94F6\u5458";default:return"-"}}},{title:"\u8D26\u53F7\u72B6\u6001",key:"enabled",dataIndex:"enabled",valueType:"select",initialValue:"0",valueEnum:{0:{text:"\u4E0D\u9650",status:""},true:{text:"\u5DF2\u542F\u7528",checked:!0,status:""},false:{text:"\u5DF2\u7981\u7528",checked:!1,status:""}},render:function(v,o){return o.enabled?(0,l.jsx)(D.Z,{color:"success",children:"\u5DF2\u542F\u7528"}):(0,l.jsx)(D.Z,{color:"error",children:"\u5DF2\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"createdAt",dataIndex:"createdAt",valueType:"dateTime",sorter:!0,hideInSearch:!0},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createdAt",valueType:"dateRange",hideInTable:!0,search:{transform:function(v){return{startTime:v[0],endTime:v[1]}}}},{title:"\u64CD\u4F5C",key:"option",dataIndex:"option",hideInSearch:!0,width:160,render:function(v,o){return(0,l.jsxs)(U.Z,{size:"middle",children:[(0,l.jsx)("a",{onClick:function(){C(o),u(!0)},children:"\u7F16\u8F91"},"edit"),(0,l.jsx)("a",{onClick:function(){return y(o)},children:o.enabled?"\u7981\u7528":"\u542F\u7528"},"enabled"),(0,l.jsx)(f.Z,{trigger:["click"],overlay:(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(L.Z.Item,{children:"\u4FEE\u6539\u5BC6\u7801"},0),o.type===1?null:(0,l.jsx)(L.Z.Item,{onClick:function(){return I(o)},children:"\u5220\u9664\u8D26\u53F7"},1)]}),children:(0,l.jsxs)("a",{children:["\u66F4\u591A",(0,l.jsx)(ve.Z,{})]})},"more")]})}}];function y(c){k.Z.confirm({title:"\u63D0\u793A",content:(0,l.jsxs)("div",{children:["\u786E\u5B9A\u8981",c.enabled?"\u7981\u7528":"\u5F00\u542F","\u8D26\u53F7\uFF1F"]}),onOk:function(){var v=(0,A.Z)(h().mark(function g(){var Z;return h().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,me(c);case 2:Z=x.sent,Z&&s.current&&s.current.reload();case 4:case"end":return x.stop()}},g)}));function o(){return v.apply(this,arguments)}return o}()})}function I(c){k.Z.confirm({title:"\u63D0\u793A",content:(0,l.jsxs)("div",{children:["\u786E\u5B9A\u8981\u5220\u9664\u3010",c.username,"\u3011\u8D26\u53F7\uFF1F"]}),onOk:function(){var v=(0,A.Z)(h().mark(function g(){var Z;return h().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,re({data:[c]});case 2:Z=x.sent,Z&&s.current&&s.current.reload();case 4:case"end":return x.stop()}},g)}));function o(){return v.apply(this,arguments)}return o}()})}return(0,l.jsxs)(ie.ZP,{children:[(0,l.jsx)(de.ZP,{pagination:ke.oM,headerTitle:"",actionRef:s,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,l.jsxs)(T.Z,{type:"primary",onClick:function(){e||(u(!0),C(void 0))},children:[(0,l.jsx)(fe.Z,{})," \u6DFB\u52A0"]},"primary")]},request:he,columns:d,rowSelection:{onChange:function(v,o){b(o)}}}),(S==null?void 0:S.length)>0&&(0,l.jsx)(ce.Z,{extra:(0,l.jsx)("div",{children:(0,l.jsxs)("span",{children:["\u5DF2\u9009\u4E2D",S.reduce(function(c,v){return c+v.id},0)," \u4E2A\u8D26\u53F7"]})}),children:(0,l.jsx)(T.Z,{onClick:(0,A.Z)(h().mark(function c(){var v,o;return h().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return console.log("selectedRowsState--->",S),Z.next=3,re({data:S});case 3:b([]),(v=s.current)===null||v===void 0||(o=v.reloadAndRest)===null||o===void 0||o.call(v);case 5:case"end":return Z.stop()}},c)})),children:"\u6279\u91CF\u5220\u9664"})}),(0,l.jsx)(Te,{onSubmit:function(){var c=(0,A.Z)(h().mark(function v(o){var g;return h().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(console.log("edit item values--->",o),!o.id){R.next=7;break}return R.next=4,pe({data:(0,p.Z)((0,p.Z)({},M),o)});case 4:g=R.sent,R.next=10;break;case 7:return R.next=9,ye({data:o});case 9:g=R.sent;case 10:g&&(u(!1),C(void 0),s.current&&s.current.reload());case 11:case"end":return R.stop()}},v)}));return function(v){return c.apply(this,arguments)}}(),onCancel:function(){u(!1),C(void 0)},visible:e,values:M||{}})]})},$e=De}}]);