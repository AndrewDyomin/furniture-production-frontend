"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[913],{8742:function(e,r,n){var a=n(1413),t=n(2791),s=n(2310),i=(n(8353),n(4452)),c=(n(4103),n(184)),d={Dots:!1,Thumbs:{type:"modern"}};r.Z=function(e){var r=(0,t.useRef)(null);return(0,t.useEffect)((function(){var n=r.current,t=(0,a.Z)((0,a.Z)({},d),e.options||{}),c=new s.lr(n,t,{Thumbs:i.o3});return function(){c.destroy()}})),(0,c.jsx)("div",{className:"f-carousel",ref:r,children:e.children})}},1072:function(e,r,n){var a=n(2791),t=n(2310),s=(n(1167),n(184));r.Z=function(e){var r=(0,a.useRef)(null);return(0,a.useEffect)((function(){var n=r.current,a=e.delegate||"[data-fancybox]",s=e.options||{};return t.KR.bind(n,a,s),function(){t.KR.unbind(n),t.KR.close()}})),(0,s.jsx)("div",{ref:r,children:e.children})}},381:function(e,r,n){n.d(r,{N:function(){return o}});var a=n(3439),t=n(7948),s=n.n(t),i="PopUp_modalCloseButton__m06-1",c="PopUp_menuIcon__5-11v",d=n(184),o=function(e){var r=e.isOpen,n=e.close,t=e.body;return(0,d.jsxs)(s(),{isOpen:r,onRequestClose:n,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,d.jsx)("button",{className:i,type:"button",onClick:n,children:(0,d.jsx)("svg",{className:c,children:(0,d.jsx)("use",{href:"".concat(a.Z,"#icon-close-circle")})})}),t]})}},9913:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var a=n(4420),t=n(7689),s=n(3050),i=n(6502),c=n(5861),d=n(3433),o=n(9439),l=n(4687),p=n.n(l),u={backIcon:"OrderInfo_backIcon__N0wiA",orderNumber:"OrderInfo_orderNumber__2q9MF",description:"OrderInfo_description__zLh2V",orderName:"OrderInfo_orderName__-OHBi",orderSize:"OrderInfo_orderSize__BVU05",orderFabric:"OrderInfo_orderFabric__X9Sm5",orderDescription:"OrderInfo_orderDescription__iXIxd",orderDeadline:"OrderInfo_orderDeadline__8ywa6",imagesList:"OrderInfo_imagesList__LA3Fp",orderImage:"OrderInfo_orderImage__2G8nz",btn:"OrderInfo_btn__fLqg+",minBtn:"OrderInfo_minBtn__uJ0Ts",activeBtn:"OrderInfo_activeBtn__zF9Bf",backBtn:"OrderInfo_backBtn__RBKzG",formWrapper:"OrderInfo_formWrapper__+kjz9",formItem:"OrderInfo_formItem__kNYm6",label:"OrderInfo_label__s3BbH",field:"OrderInfo_field__Q3vr4",inputItem:"OrderInfo_inputItem__GG5Bb",optionWrapper:"OrderInfo_optionWrapper__qdKC2"},m=n(2791),f=n(9230),b=n(8363),x=n.n(b),h=n(5294),j=n(5842),v=n(3439),g=n(5705),N=n(4217),_=n(8384),S=n(381),I=n(1087),O=n(1072),F=n(8742),k=n(184),z=function(e){e.id;var r,n,s=(0,f.$G)().t,l=(0,a.I0)(),b=(0,a.v9)(i.ST),z=(0,a.v9)(N.dy),y=(0,t.TH)(),D=(0,t.s0)(),w=null!==(r=null===(n=y.state)||void 0===n?void 0:n.from)&&void 0!==r?r:"/orders",C=[{value:"",label:"".concat(s("not ordered"))},{value:"ordered",label:"".concat(s("ordered"))},{value:"received",label:"".concat(s("received"))}],B=b.fabricStatus?{value:"",label:"".concat(s(b.fabricStatus))}:{value:"",label:"".concat(s("not ordered"))};function Z(e){var r=new Date(e),n=r.getMonth()+1;return"".concat(r.getDate().toString().padStart(2,"0"),".").concat(n.toString().padStart(2,"0"),".").concat(r.getFullYear())}(0,m.useEffect)((function(){}),[b]);var R=(0,m.useState)(!1),P=(0,o.Z)(R,2),T=P[0],E=P[1],W=(0,m.useState)([]),U=(0,o.Z)(W,2),H=U[0],L=U[1],q=(0,m.useState)(!1),G=(0,o.Z)(q,2),K=G[0],V=G[1];"ordered"===b.fabricStatus?B={value:"ordered",label:"".concat(s("ordered"))}:"received"===b.fabricStatus&&(B={value:"received",label:"".concat(s("received"))});var A=function(){E(!0),document.body.classList.add("modal-open"),L([])},J=function(){E(!1),document.body.classList.remove("modal-open")},M=function(){var e=(0,c.Z)(p().mark((function e(r){var n,a,t,s,i,c;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),n=b.orderStatus,a=b.fabricStatus,t=b.coverStatus,s=b.frameStatus,""===r.value?a="":r.value&&(a=r.value),r.target&&("isSewn"===r.target.name?t="TRUE"!==b.coverStatus?"TRUE":"":"frame"===r.target.name?s="TRUE"!==b.frameStatus?"TRUE":"":"order"===r.target.name&&(n="TRUE"!==b.orderStatus?"TRUE":"")),(i=new FormData).append("group",b.group),i.append("size",b.size),i.append("name",b.name),i.append("fabric",b.fabric),i.append("description",b.description),i.append("base",b.base),i.append("deliveryDate",b.deliveryDate),i.append("innerPrice",b.innerPrice),i.append("number",b.number),i.append("dealer",b.dealer),i.append("deadline",b.deadline),i.append("dateOfOrder",Z(b.dateOfOrder)),i.append("adress",b.adress),i.append("additional",b.additional),i.append("rest",b.rest),i.append("plannedDeadline",Z(b.plannedDeadline)),i.append("orderStatus",n),i.append("_id",b._id),b.images.forEach((function(e,r){i.append("images[".concat(r,"]"),b.images[r])})),i.append("fabricStatus",a),i.append("coverStatus",t),i.append("frameStatus",s),e.next=32,h.Z.post("/orders/update",i,{headers:{"Content-Type":"multipart/form-data"}});case 32:c=e.sent,l((0,_.zH)(c.data)),V(!1);case 35:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),X=function(){var e=(0,c.Z)(p().mark((function e(){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(b._id),e.next=3,l((0,_.iI)(b._id));case 3:r=e.sent,console.log(r),D("/orders",{replace:!0});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,k.jsxs)("div",{className:u.wrapper,children:[(0,k.jsx)(I.rU,{to:w,children:(0,k.jsx)("button",{className:"".concat(u.btn," ").concat(u.backBtn),children:(0,k.jsx)("svg",{className:u.backIcon,children:(0,k.jsx)("use",{href:"".concat(v.Z,"#icon-arrow-right"),width:"32px"})})})}),(0,k.jsx)("p",{className:u.orderNumber,children:b.number}),(0,k.jsxs)("div",{className:u.description,children:[(0,k.jsxs)("p",{className:u.orderName,children:[b.group," ",b.name]}),(0,k.jsxs)("p",{className:u.orderSize,children:[s("size"),": ",b.size]}),(0,k.jsxs)("p",{className:u.orderFabric,children:[s("fabric"),": ",b.fabric]}),(0,k.jsxs)("p",{className:u.orderDescription,children:[s("description"),": ",b.description]}),"manager"===z.description||"administrator"===z.description?(0,k.jsxs)("p",{className:u.orderDescription,children:[s("inner price"),": ",b.innerPrice]}):(0,k.jsx)(k.Fragment,{}),(0,k.jsxs)("p",{className:u.orderDeadline,children:[s("deadline"),": ",Z(b.plannedDeadline)]}),(0,k.jsx)("p",{children:b.dealer}),"manager"===z.description||"administrator"===z.description?(0,k.jsxs)("div",{children:[(0,k.jsxs)("p",{className:u.orderAdress,children:[s("adress"),": ",b.adress]}),(0,k.jsxs)("p",{className:u.orderRest,children:[s("rest"),": ",b.rest]})]}):(0,k.jsx)(k.Fragment,{})]}),b.images&&0!==b.images.length?(0,k.jsx)(O.Z,{options:{Carousel:{infinite:!1}},children:(0,k.jsx)(F.Z,{options:{infinite:!1},children:b.images.map((function(e){return(0,k.jsx)("div",{className:"f-carousel__slide","data-fancybox":"gallery","data-src":"https://lh3.googleusercontent.com/d/".concat(e,"=w800?authuser=0"),children:(0,k.jsx)("img",{src:"https://lh3.googleusercontent.com/d/".concat(e,"=w800?authuser=0"),alt:e,width:"auto",height:"500"})},e)}))})}):(0,k.jsx)(k.Fragment,{}),"administrator"===z.description?(0,k.jsxs)("div",{className:u.optionWrapper,children:[(0,k.jsx)("button",{className:u.btn,onClick:A,children:s("edit")}),(0,k.jsx)(j.ZP,{className:u.fabricStatusSelector,name:"fabricStatusSelector",id:"fabricStatusSelector",onChange:function(e){return M(e)},options:C,defaultValue:B,placeholder:s("fabric")}),(0,k.jsx)("button",{name:"isSewn",className:""===b.coverStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("is sewn"))}),(0,k.jsx)("button",{name:"frame",className:""===b.frameStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("frame is done"))}),(0,k.jsx)("button",{name:"order",className:""===b.orderStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("order is done"))}),(0,k.jsx)("button",{name:"done",className:u.btn,onClick:X,children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("to archive"))})]}):(0,k.jsx)(k.Fragment,{}),"manager"===z.description?(0,k.jsxs)("div",{className:u.optionWrapper,children:[(0,k.jsx)("button",{className:u.btn,onClick:A,children:s("edit")}),(0,k.jsx)(j.ZP,{className:u.fabricStatusSelector,name:"fabricStatusSelector",id:"fabricStatusSelector",onChange:function(e){return M(e)},options:C,defaultValue:B,placeholder:s("fabric")}),(0,k.jsx)("button",{name:"order",className:""===b.orderStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("order is done"))}),(0,k.jsx)("button",{name:"done",className:u.btn,onClick:X,children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("to archive"))})]}):(0,k.jsx)(k.Fragment,{}),"seamstress"===z.description?(0,k.jsx)("div",{className:u.optionWrapper,children:(0,k.jsx)("button",{name:"isSewn",className:""===b.coverStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("is sewn"))})}):(0,k.jsx)(k.Fragment,{}),"carpenter"===z.description?(0,k.jsx)("div",{className:u.optionWrapper,children:(0,k.jsx)("button",{name:"frame",className:""===b.frameStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("frame is done"))})}):(0,k.jsx)(k.Fragment,{}),"upholsterer"===z.description?(0,k.jsx)("div",{className:u.optionWrapper,children:(0,k.jsx)("button",{name:"order",className:""===b.orderStatus?u.btn:"".concat(u.btn," ").concat(u.activeBtn),onClick:function(e){return M(e)},children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("order is done"))})}):(0,k.jsx)(k.Fragment,{}),(0,k.jsx)(S.N,{isOpen:T,close:J,className:u.modalContent,body:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("p",{children:"Edit mode"}),(0,k.jsx)(g.J9,{initialValues:{group:b.group,size:b.size,name:b.name,fabric:b.fabric,description:b.description,base:b.base,deliveryDate:b.deliveryDate,innerPrice:b.innerPrice,number:b.number,dealer:b.dealer,deadline:b.deadline,dateOfOrder:Z(b.dateOfOrder),adress:b.adress,additional:b.additional,rest:b.rest,plannedDeadline:Z(b.plannedDeadline),orderStatus:b.orderStatus,_id:b._id,images:b.images,fabricStatus:b.fabricStatus,coverStatus:b.coverStatus,frameStatus:b.frameStatus},onSubmit:function(){var e=(0,c.Z)(p().mark((function e(r){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,V(!0),(n=new FormData).append("group",r.group),n.append("size",r.size),n.append("name",r.name),n.append("fabric",r.fabric),n.append("description",r.description),n.append("base",r.base),n.append("deliveryDate",r.deliveryDate),n.append("innerPrice",r.innerPrice),n.append("number",r.number),n.append("dealer",r.dealer),n.append("deadline",r.deadline),n.append("dateOfOrder",r.dateOfOrder),n.append("adress",r.adress),n.append("additional",r.additional),n.append("rest",r.rest),n.append("plannedDeadline",r.plannedDeadline),n.append("orderStatus",r.orderStatus),n.append("_id",r._id),r.images.forEach((function(e,a){n.append("images[".concat(a,"]"),r.images[a])})),n.append("fabricStatus",r.fabricStatus),n.append("coverStatus",r.coverStatus),n.append("frameStatus",r.frameStatus),H.forEach((function(e){n.append("file",e)})),e.next=28,h.Z.post("/orders/update",n,{headers:{"Content-Type":"multipart/form-data"}});case 28:a=e.sent,l((0,_.zH)(a.data)),V(!1),J(),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(0),console.log(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(r){return e.apply(this,arguments)}}(),children:(0,k.jsxs)(g.l0,{className:u.formWrapper,children:[(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"group",children:s("group")}),(0,k.jsx)(g.gN,{className:u.field,id:"group",name:"group"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"size",children:s("size")}),(0,k.jsx)(g.gN,{className:u.field,id:"size",name:"size"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"name",children:s("order name")}),(0,k.jsx)(g.gN,{className:u.field,id:"name",name:"name"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"fabric",children:s("fabric")}),(0,k.jsx)(g.gN,{className:u.field,id:"fabric",name:"fabric"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"description",children:s("description")}),(0,k.jsx)(g.gN,{className:u.field,id:"description",name:"description",placeholder:"Description"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"base",children:s("base")}),(0,k.jsx)(g.gN,{className:u.field,id:"base",name:"base"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"innerPrice",children:s("inner price")}),(0,k.jsx)(g.gN,{className:u.field,id:"innerPrice",name:"innerPrice"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"number",children:s("number")}),(0,k.jsx)(g.gN,{className:u.field,id:"number",name:"number"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"adress",children:s("adress")}),(0,k.jsx)(g.gN,{className:u.field,id:"adress",name:"adress"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"additional",children:s("additional")}),(0,k.jsx)(g.gN,{className:u.field,id:"additional",name:"additional"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"rest",children:s("rest")}),(0,k.jsx)(g.gN,{className:u.field,id:"rest",name:"rest"})]}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"plannedDeadline",children:s("planned deadline")}),(0,k.jsx)(g.gN,{className:u.field,id:"plannedDeadline",name:"plannedDeadline"})]}),(0,k.jsx)("div",{className:u.formItem,children:(0,k.jsx)(g.F2,{name:"images",render:function(e){return(0,k.jsx)("div",{className:u.field,children:e.form.values.images.map((function(r,n){return(0,k.jsxs)("div",{className:u.inputItem,children:[(0,k.jsx)("img",{src:"https://lh3.googleusercontent.com/d/".concat(r,"=w200?authuser=0"),alt:r}),(0,k.jsx)("button",{className:u.btn,type:"button",onClick:function(){return e.remove(n)},children:s("delete")})]},n)}))})}})}),(0,k.jsxs)("div",{className:u.formItem,children:[(0,k.jsx)("label",{htmlFor:"files",children:s("add new images")}),(0,k.jsx)(g.gN,{className:u.field,id:"files",name:"files",type:"file",onChange:function(e){L((0,d.Z)(e.target.files))},multiple:!0})]}),(0,k.jsx)("button",{type:"submit",className:"".concat(u.btn," ").concat(u.modalSubmitButton),children:K?(0,k.jsx)(x(),{color:"#c8c19b",size:"10px"}):"".concat(s("submit"))})]})})]})})]})};function y(){var e=(0,a.v9)(i.NH),r=(0,t.UO)().orderId;return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(s.B6,{children:[(0,k.jsx)(s.ql,{children:(0,k.jsx)("title",{children:"Order details"})}),(0,k.jsx)("div",{children:e&&"Request in progress..."}),(0,k.jsx)(z,{id:r})]})})}},6502:function(e,r,n){n.d(r,{NH:function(){return s},ST:function(){return t},pi:function(){return a}});var a=function(e){return e.orders.items},t=function(e){return e.orders.activeItem},s=function(e){return e.orders.isLoading}}}]);
//# sourceMappingURL=913.46b68733.chunk.js.map