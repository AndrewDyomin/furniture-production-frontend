"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[712],{381:function(e,r,a){a.d(r,{N:function(){return c}});var n=a(3439),t=a(7948),s=a.n(t),i="PopUp_modalCloseButton__m06-1",l="PopUp_menuIcon__5-11v",o=a(184),c=function(e){var r=e.isOpen,a=e.close,t=e.body;return(0,o.jsxs)(s(),{isOpen:r,onRequestClose:a,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,o.jsx)("button",{className:i,type:"button",onClick:a,children:(0,o.jsx)("svg",{className:l,children:(0,o.jsx)("use",{href:"".concat(n.Z,"#icon-close-circle")})})}),t]})}},9712:function(e,r,a){a.r(r),a.d(r,{default:function(){return z}});var n=a(2791),t=a(4420),s=a(3050),i=a(8384),l=a(6502),o=a(5861),c=a(9439),d=a(4687),u=a.n(d),m=a(8363),p=a.n(m),f=a(1087),h="Order_wrapper__hSe-H",v="Order_number__YkUyJ",b="Order_discription__O8Cz6",x="Order_orderName__2RZDO",_="Order_orderDeadline__N6MRk",j="Order_orderFabric__Dd6Qe",g="Order_orderDealer__Dw2lE",O="Order_backgroundBlue__WKiIX",y="Order_backgroundGreen__-mewF",N=a(4217),w=a(184),F=function(e){var r=e.id,a=(0,t.v9)(l.pi).allOrdersArray.find((function(e){return e._id===r})),n=new Date(a.plannedDeadline),s=(0,t.v9)(N.dy),i=j;return"ordered"===a.fabricStatus?i="".concat(j," ").concat(O):"received"===a.fabricStatus&&(i="".concat(j," ").concat(y)),(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("p",{className:v,children:a.number}),(0,w.jsxs)("div",{className:b,children:[(0,w.jsx)("p",{className:x,children:a.name}),"administrator"===s.description||"seamstress"===s.description?(0,w.jsx)("p",{className:i,children:a.fabric}):(0,w.jsx)(w.Fragment,{}),(0,w.jsx)("p",{className:_,children:"".concat(n.getDate(),".").concat(n.getMonth()+1,".").concat(n.getFullYear())}),(0,w.jsx)("p",{className:g,children:a.dealer})]})]})},L=a(381),k=a(5705),A=a(5294),C=a(5218),I=a(9230),P={list:"OrdersList_list__QGi1g",item:"OrdersList_item__AQirm",orderLink:"OrdersList_orderLink__1O6g2",navigation:"OrdersList_navigation__3Rmp5",addOrderBtn:"OrdersList_addOrderBtn__vAwBs",formWrapper:"OrdersList_formWrapper__D+6CQ",formItem:"OrdersList_formItem__EveLI",label:"OrdersList_label__mx1aV",field:"OrdersList_field__b6Rcj",btn:"OrdersList_btn__vek9I"},S=a(5842);A.Z.defaults.baseURL="https://furniture-production.onrender.com/";var Z=function(){var e=(0,I.$G)().t,r=[{value:"".concat(e("sofa")),label:"".concat(e("sofa"))},{value:"".concat(e("bed")),label:"".concat(e("bed"))}],a=(0,n.useState)(""),s=(0,c.Z)(a,2),d=s[0],m=s[1],h=(0,n.useState)(!1),v=(0,c.Z)(h,2),b=v[0],x=v[1],_=(0,n.useState)({value:"".concat(e("sofa")),label:"".concat(e("sofa"))}),j=(0,c.Z)(_,2),g=j[0],O=j[1],y=(0,n.useState)({value:"160 x 200",label:"160 x 200"}),Z=(0,c.Z)(y,2),z=Z[0],D=Z[1],E=(0,n.useState)(""),R=(0,c.Z)(E,2),M=R[0],V=R[1],U=(0,t.v9)(N.dy),B=(0,t.I0)(),W=(0,t.v9)(l.NH),H=(0,t.v9)(l.pi),Q=[],T=H.allOrdersArray,q=[{value:"",label:"All"}];H.allOrdersArray&&(H.allOrdersArray.forEach((function(e,r){Q.push({value:"".concat(e.dealer),label:"".concat(e.dealer)})})),Q.forEach((function(e){q.some((function(r){return r.value.toLowerCase()===e.value.toLowerCase()}))||q.push(e)}))),"seamstress"===U.description&&(T=H.allOrdersArray&&0!==H.allOrdersArray.length?H.allOrdersArray.filter((function(e){return"TRUE"!==e.coverStatus})):[]),"carpenter"===U.description&&(T=H.allOrdersArray&&0!==H.allOrdersArray.length?H.allOrdersArray.filter((function(e){return"TRUE"!==e.frameStatus})):[]);var G=T&&0!==T.length?T.filter((function(e){return e.dealer.toLowerCase().includes(d.toLowerCase())})):[],K=function(){x(!1),document.body.classList.remove("modal-open")};return(0,w.jsxs)("div",{className:P.container,children:[(0,w.jsxs)("div",{className:P.navigation,children:[(0,w.jsx)(S.ZP,{className:P.filter,name:"filter",id:"filter",onChange:function(e){return m(e.value)},options:q,defaultValue:d,placeholder:e("filter")}),(0,w.jsx)("button",{className:"".concat(P.btn," ").concat(P.addOrderBtn),onClick:function(){x(!0),document.body.classList.add("modal-open")},children:e("add order")})]}),0!==G.length?(0,w.jsx)("ul",{className:P.list,children:G.map((function(e){var r=e._id;return(0,w.jsx)("li",{className:P.item,children:(0,w.jsx)(f.rU,{to:"".concat(r),className:P.orderLink,onClick:function(){return B((0,i.z)(H.allOrdersArray.find((function(e){return e._id===r}))))},children:(0,w.jsx)(F,{id:r})})},r)}))}):(0,w.jsx)(w.Fragment,{}),W?(0,w.jsx)(p(),{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%",transform:"translate(50%, 50%)"}}):(0,w.jsx)(w.Fragment,{}),(0,w.jsx)(L.N,{isOpen:b,close:K,body:(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:P.orderModalWrapper,children:(0,w.jsx)(k.J9,{initialValues:{group:g.value,name:"",size:"",fabric:"",description:"",number:"",adress:"",rest:"",deadline:""},onSubmit:function(){var e=(0,o.Z)(u().mark((function e(r,a){var n,t,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in n=a.resetForm,e.prev=1,(t=new FormData).append("group",g.value),t.append("name",r.name),t.append("size",r.size),t.append("fabric",r.fabric),"bed"===g.value?t.append("description",r.description+" \u0421\u043f\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e ".concat(z.value)):t.append("description",r.description),t.append("number",r.number),t.append("adress",r.adress),t.append("rest",r.rest),t.append("deadline",r.deadline),M)"object"===typeof M[s]&&t.append("file",M[s]);return e.next=16,A.Z.post("/orders/add",t,{headers:{"Content-Type":"multipart/form-data"}});case 16:C.ZP.success("Order sended"),n(),K(),B((0,i.h)()),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(1),C.ZP.error("".concat(e.t0.response.data.message));case 25:case"end":return e.stop()}}),e,null,[[1,22]])})));return function(r,a){return e.apply(this,arguments)}}(),children:(0,w.jsxs)(k.l0,{className:P.formWrapper,children:[(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"group",children:e("group")}),(0,w.jsx)(k.gN,{component:S.ZP,name:"group",id:"group",onChange:function(e){return O(e)},options:r,defaultValue:g.value,placeholder:g.label})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"name",children:e("order name")}),(0,w.jsx)(k.gN,{className:P.field,id:"name",name:"name",placeholder:"Faynee mini"})]}),g.value==="".concat(e("bed"))?(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"sleepingArea",children:e("sleeping area")}),(0,w.jsx)(k.gN,{component:S.ZP,name:"sleepingArea",id:"sleepingArea",onChange:function(e){return D(e)},options:[{value:"160 x 200",label:"160 x 200"},{value:"180 x 200",label:"180 x 200"},{value:"200 x 200",label:"200 x 200"},{value:"160 x 190",label:"160 x 190"},{value:"180 x 190",label:"180 x 190"},{value:"200 x 190",label:"200 x 190"},{value:"90 x 200",label:"90 x 200"},{value:"120 x 200",label:"120 x 200"},{value:"140 x 200",label:"140 x 200"},{value:"90 x 190",label:"90 x 190"},{value:"120 x 190",label:"120 x 190"},{value:"140 x 190",label:"140 x 190"}],defaultValue:z.value,placeholder:z.value})]}):(0,w.jsx)(w.Fragment,{}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"size",children:e("size")}),(0,w.jsx)(k.gN,{className:P.field,id:"size",name:"size",placeholder:"".concat(e("overall size"))})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"fabric",children:e("fabric")}),(0,w.jsx)(k.gN,{className:P.field,id:"fabric",name:"fabric",placeholder:e("fabric name")})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"description",children:e("description")}),(0,w.jsx)(k.gN,{className:P.field,id:"description",name:"description",placeholder:e("description")})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"number",children:e("number")}),(0,w.jsx)(k.gN,{className:P.field,id:"number",name:"number",placeholder:"125"})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"adress",children:e("adress")}),(0,w.jsx)(k.gN,{className:P.field,id:"adress",name:"adress",placeholder:e("Kiev, Kyrylivska street, 103")})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"rest",children:e("rest")}),(0,w.jsx)(k.gN,{className:P.field,id:"rest",name:"rest",placeholder:"21000"})]}),(0,w.jsxs)("div",{className:P.formItem,children:[(0,w.jsx)("label",{htmlFor:"deadline",children:e("deadline")}),(0,w.jsx)(k.gN,{className:P.field,id:"deadline",name:"deadline",placeholder:"21"})]}),(0,w.jsx)("div",{className:P.formItem,children:(0,w.jsx)(k.gN,{className:P.field,id:"files",name:"files",type:"file",onChange:function(e){V(e.target.files)},multiple:!0})}),(0,w.jsx)("button",{type:"submit",className:P.btn,children:e("submit")})]})})})})})]})};function z(){var e=(0,t.I0)(),r=(0,t.v9)(l.NH);return(0,n.useEffect)((function(){e((0,i.h)())}),[e]),(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(s.B6,{children:[(0,w.jsx)(s.ql,{children:(0,w.jsx)("title",{children:"Your orders"})}),(0,w.jsx)("div",{children:r&&"Request in progress..."}),(0,w.jsx)(Z,{})]})})}},6502:function(e,r,a){a.d(r,{NH:function(){return s},ST:function(){return t},pi:function(){return n}});var n=function(e){return e.orders.items},t=function(e){return e.orders.activeItem},s=function(e){return e.orders.isLoading}},8363:function(e,r,a){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,a=1,n=arguments.length;a<n;a++)for(var t in r=arguments[a])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},n.apply(this,arguments)},t=this&&this.__createBinding||(Object.create?function(e,r,a,n){void 0===n&&(n=a);var t=Object.getOwnPropertyDescriptor(r,a);t&&!("get"in t?!r.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return r[a]}}),Object.defineProperty(e,n,t)}:function(e,r,a,n){void 0===n&&(n=a),e[n]=r[a]}),s=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&t(r,e,a);return s(r,e),r},l=this&&this.__rest||function(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]])}return a};Object.defineProperty(r,"__esModule",{value:!0});var o=i(a(2791)),c=a(8945),d=(0,a(7074).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");r.default=function(e){var r=e.loading,a=void 0===r||r,t=e.color,s=void 0===t?"#000000":t,i=e.speedMultiplier,u=void 0===i?1:i,m=e.cssOverride,p=void 0===m?{}:m,f=e.size,h=void 0===f?15:f,v=e.margin,b=void 0===v?2:v,x=l(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),_=n({display:"inherit"},p),j=function(e){return{backgroundColor:s,width:(0,c.cssValue)(h),height:(0,c.cssValue)(h),margin:(0,c.cssValue)(b),borderRadius:"100%",display:"inline-block",animation:"".concat(d," ").concat(.75/u,"s ").concat(.12*e/u,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return a?o.createElement("span",n({style:_},x),o.createElement("span",{style:j(1)}),o.createElement("span",{style:j(2)}),o.createElement("span",{style:j(3)})):null}},7074:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.createAnimation=void 0;r.createAnimation=function(e,r,a){var n="react-spinners-".concat(e,"-").concat(a);if("undefined"==typeof window||!window.document)return n;var t=document.createElement("style");document.head.appendChild(t);var s=t.sheet,i="\n    @keyframes ".concat(n," {\n      ").concat(r,"\n    }\n  ");return s&&s.insertRule(i,0),n}},8945:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.cssValue=r.parseLengthAndUnit=void 0;var a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var r,n=(e.match(/^[0-9.]*/)||"").toString();r=n.includes(".")?parseFloat(n):parseInt(n,10);var t=(e.match(/[^0-9]*$/)||"").toString();return a[t]?{value:r,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(r,"px.")),{value:r,unit:"px"})}r.parseLengthAndUnit=n,r.cssValue=function(e){var r=n(e);return"".concat(r.value).concat(r.unit)}}}]);
//# sourceMappingURL=712.91d04ed5.chunk.js.map