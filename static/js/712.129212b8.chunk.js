"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[712],{381:function(e,r,n){n.d(r,{N:function(){return c}});var a=n(3439),t=n(7948),i=n.n(t),l="PopUp_modalCloseButton__m06-1",s="PopUp_menuIcon__5-11v",o=n(184),c=function(e){var r=e.isOpen,n=e.close,t=e.body;return(0,o.jsxs)(i(),{isOpen:r,onRequestClose:n,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,o.jsx)("button",{className:l,type:"button",onClick:n,children:(0,o.jsx)("svg",{className:s,children:(0,o.jsx)("use",{href:"".concat(a.Z,"#icon-close-circle")})})}),t]})}},9712:function(e,r,n){n.r(r),n.d(r,{default:function(){return P}});var a=n(2791),t=n(4420),i=n(3050),l=n(8384),s=n(6502),o=n(5861),c=n(9439),d=n(4687),u=n.n(d),m=n(8363),p=n.n(m),f=n(1087),h="Order_wrapper__hSe-H",v="Order_number__YkUyJ",b="Order_discription__O8Cz6",x="Order_orderName__2RZDO",_="Order_orderDeadline__N6MRk",j="Order_orderDealer__Dw2lE",g=n(184),O=function(e){var r=e.id,n=(0,t.v9)(s.pi).allOrdersArray.find((function(e){return e._id===r})),a=new Date(n.plannedDeadline);return(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("p",{className:v,children:n.number}),(0,g.jsxs)("div",{className:b,children:[(0,g.jsx)("p",{className:x,children:n.name}),(0,g.jsx)("p",{className:_,children:"".concat(a.getDate(),".").concat(a.getMonth()+1,".").concat(a.getFullYear())}),(0,g.jsx)("p",{className:j,children:n.dealer})]})]})},y=n(381),N=n(5705),w=n(5294),F=n(5218),L={list:"OrdersList_list__QGi1g",item:"OrdersList_item__AQirm",orderLink:"OrdersList_orderLink__1O6g2",navigation:"OrdersList_navigation__3Rmp5",addOrderBtn:"OrdersList_addOrderBtn__vAwBs",formWrapper:"OrdersList_formWrapper__D+6CQ",formItem:"OrdersList_formItem__EveLI",label:"OrdersList_label__mx1aV",field:"OrdersList_field__b6Rcj",btn:"OrdersList_btn__vek9I"},k=n(5842);w.Z.defaults.baseURL="https://furniture-production.onrender.com/";var C=[{value:"sofa",label:"Sofa"},{value:"bed",label:"Bed"}],I=[{value:"160 x 200",label:"160 x 200"},{value:"180 x 200",label:"180 x 200"},{value:"200 x 200",label:"200 x 200"},{value:"160 x 190",label:"160 x 190"},{value:"180 x 190",label:"180 x 190"},{value:"200 x 190",label:"200 x 190"},{value:"90 x 200",label:"90 x 200"},{value:"120 x 200",label:"120 x 200"},{value:"140 x 200",label:"140 x 200"},{value:"90 x 190",label:"90 x 190"},{value:"120 x 190",label:"120 x 190"},{value:"140 x 190",label:"140 x 190"}],A=function(){var e=(0,a.useState)(""),r=(0,c.Z)(e,2),n=r[0],i=r[1],d=(0,a.useState)(!1),m=(0,c.Z)(d,2),h=m[0],v=m[1],b=(0,a.useState)({value:"sofa",label:"Sofa"}),x=(0,c.Z)(b,2),_=x[0],j=x[1],A=(0,a.useState)({value:"160 x 200",label:"160 x 200"}),P=(0,c.Z)(A,2),S=P[0],D=P[1],Z=(0,t.I0)(),z=(0,t.v9)(s.pi),M=[],R=[{value:"",label:"All"}];z.allOrdersArray&&(z.allOrdersArray.forEach((function(e,r){M.push({value:"".concat(e.dealer),label:"".concat(e.dealer)})})),M.forEach((function(e){R.some((function(r){return r.value.toLowerCase()===e.value.toLowerCase()}))||R.push(e)})));var E=z.allOrdersArray?z.allOrdersArray.filter((function(e){return e.dealer.toLowerCase().includes(n.toLowerCase())})):[];return(0,g.jsxs)("div",{className:L.container,children:[(0,g.jsxs)("div",{className:L.navigation,children:[(0,g.jsx)(k.ZP,{className:L.filter,name:"filter",id:"filter",onChange:function(e){return i(e.value)},options:R,defaultValue:n,placeholder:"Filter"}),(0,g.jsx)("button",{className:"".concat(L.btn," ").concat(L.addOrderBtn),onClick:function(){v(!0),document.body.classList.add("modal-open")},children:"Add order"})]}),0!==E.length?(0,g.jsx)("ul",{className:L.list,children:E.map((function(e){var r=e._id;return(0,g.jsx)("li",{className:L.item,children:(0,g.jsx)(f.rU,{to:"".concat(r),className:L.orderLink,onClick:function(){return Z((0,l.z)(z.allOrdersArray.find((function(e){return e._id===r}))))},children:(0,g.jsx)(O,{id:r})})},r)}))}):(0,g.jsx)(p(),{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"45%"}}),(0,g.jsx)(y.N,{isOpen:h,close:function(){v(!1),document.body.classList.remove("modal-open")},body:(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:L.orderModalWrapper,children:(0,g.jsx)(N.J9,{initialValues:{group:_.value,name:"",size:"",fabric:"",description:"",number:"",adress:"",rest:"",deadline:""},onSubmit:function(){var e=(0,o.Z)(u().mark((function e(r,n){var a,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.resetForm,e.prev=1,(t=new FormData).append("group",_.value),t.append("name",r.name),t.append("size",r.size),t.append("fabric",r.fabric),t.append("description",r.description),t.append("number",r.number),t.append("adress",r.adress),t.append("rest",r.rest),t.append("deadline",r.deadline),e.next=14,w.Z.post("/orders/add",t,{headers:{"Content-Type":"multipart/form-data"}});case 14:F.ZP.success("Order sended"),a(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),F.ZP.error("".concat(e.t0.response.data.message));case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(r,n){return e.apply(this,arguments)}}(),children:(0,g.jsxs)(N.l0,{className:L.formWrapper,children:[(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"group",children:"Group"}),(0,g.jsx)(N.gN,{component:k.ZP,name:"group",id:"group",onChange:function(e){return j(e)},options:C,defaultValue:_.value})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"name",children:"Name"}),(0,g.jsx)(N.gN,{className:L.field,id:"name",name:"name",placeholder:"Faynee mini"})]}),"bed"===_.value?(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"sleepingArea",children:"Sleeping area"}),(0,g.jsx)(N.gN,{component:k.ZP,name:"sleepingArea",id:"sleepingArea",onChange:function(e){return D(e)},options:I,defaultValue:S.value,placeholder:S.value})]}):(0,g.jsx)(g.Fragment,{}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"size",children:"Size"}),(0,g.jsx)(N.gN,{className:L.field,id:"size",name:"size",placeholder:"".concat(_.label," size")})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"fabric",children:"Fabric"}),(0,g.jsx)(N.gN,{className:L.field,id:"fabric",name:"fabric",placeholder:"Fabric"})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"description",children:"Description"}),(0,g.jsx)(N.gN,{className:L.field,id:"description",name:"description",placeholder:"Description"})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"number",children:"Number"}),(0,g.jsx)(N.gN,{className:L.field,id:"number",name:"number",placeholder:"125"})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"adress",children:"Adress"}),(0,g.jsx)(N.gN,{className:L.field,id:"adress",name:"adress",placeholder:"Kiev, Kyrylivska street, 103"})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"rest",children:"Rest"}),(0,g.jsx)(N.gN,{className:L.field,id:"rest",name:"rest",placeholder:"21000"})]}),(0,g.jsxs)("div",{className:L.formItem,children:[(0,g.jsx)("label",{htmlFor:"deadline",children:"Deadline"}),(0,g.jsx)(N.gN,{className:L.field,id:"deadline",name:"deadline",placeholder:"21"})]}),(0,g.jsx)("button",{type:"submit",className:L.btn,children:"Submit"})]})})})})})]})};function P(){var e=(0,t.I0)(),r=(0,t.v9)(s.NH);return(0,a.useEffect)((function(){e((0,l.h)())}),[e]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(i.B6,{children:[(0,g.jsx)(i.ql,{children:(0,g.jsx)("title",{children:"Your orders"})}),(0,g.jsx)("div",{children:r&&"Request in progress..."}),(0,g.jsx)(A,{})]})})}},6502:function(e,r,n){n.d(r,{NH:function(){return i},ST:function(){return t},pi:function(){return a}});var a=function(e){return e.orders.items},t=function(e){return e.orders.activeItem},i=function(e){return e.orders.loading}},8363:function(e,r,n){var a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++)for(var t in r=arguments[n])Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);return e},a.apply(this,arguments)},t=this&&this.__createBinding||(Object.create?function(e,r,n,a){void 0===a&&(a=n);var t=Object.getOwnPropertyDescriptor(r,n);t&&!("get"in t?!r.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return r[n]}}),Object.defineProperty(e,a,t)}:function(e,r,n,a){void 0===a&&(a=n),e[a]=r[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&t(r,e,n);return i(r,e),r},s=this&&this.__rest||function(e,r){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)r.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(n[a[t]]=e[a[t]])}return n};Object.defineProperty(r,"__esModule",{value:!0});var o=l(n(2791)),c=n(8945),d=(0,n(7074).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");r.default=function(e){var r=e.loading,n=void 0===r||r,t=e.color,i=void 0===t?"#000000":t,l=e.speedMultiplier,u=void 0===l?1:l,m=e.cssOverride,p=void 0===m?{}:m,f=e.size,h=void 0===f?15:f,v=e.margin,b=void 0===v?2:v,x=s(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),_=a({display:"inherit"},p),j=function(e){return{backgroundColor:i,width:(0,c.cssValue)(h),height:(0,c.cssValue)(h),margin:(0,c.cssValue)(b),borderRadius:"100%",display:"inline-block",animation:"".concat(d," ").concat(.75/u,"s ").concat(.12*e/u,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?o.createElement("span",a({style:_},x),o.createElement("span",{style:j(1)}),o.createElement("span",{style:j(2)}),o.createElement("span",{style:j(3)})):null}},7074:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.createAnimation=void 0;r.createAnimation=function(e,r,n){var a="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return a;var t=document.createElement("style");document.head.appendChild(t);var i=t.sheet,l="\n    @keyframes ".concat(a," {\n      ").concat(r,"\n    }\n  ");return i&&i.insertRule(l,0),a}},8945:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.cssValue=r.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){if("number"===typeof e)return{value:e,unit:"px"};var r,a=(e.match(/^[0-9.]*/)||"").toString();r=a.includes(".")?parseFloat(a):parseInt(a,10);var t=(e.match(/[^0-9]*$/)||"").toString();return n[t]?{value:r,unit:t}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(r,"px.")),{value:r,unit:"px"})}r.parseLengthAndUnit=a,r.cssValue=function(e){var r=a(e);return"".concat(r.value).concat(r.unit)}}}]);
//# sourceMappingURL=712.129212b8.chunk.js.map