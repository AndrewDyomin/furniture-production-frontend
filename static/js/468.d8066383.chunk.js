"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[468],{9870:function(e,r,a){a.d(r,{K:function(){return g}});var n="Order_wrapper__hSe-H",t="Order_onePart__z8EQC",s="Order_twoPart__kW2Wj",l="Order_done__PAJ0w",i="Order_number__YkUyJ",c="Order_discription__O8Cz6",o="Order_orderName__2RZDO",d="Order_orderDeadline__N6MRk",u="Order_orderFabric__Dd6Qe",m="Order_orderDealer__Dw2lE",f="Order_backgroundBlue__WKiIX",p="Order_backgroundGreen__-mewF",h=a(4420),x=a(4217),v=a(4805),b=a(7689),_=a(184),g=function(e){var r=e.order,a=new Date(r.plannedDeadline)||"",g=(0,h.v9)(x.dy),j=(0,v.useMediaQuery)({query:"(max-width: 833px)"}),N=!1,O=u,y=n;return"/furniture-production-frontend/archive"===(0,b.oQ)()&&(N=!0),"ordered"===r.fabricStatus?O="".concat(u," ").concat(f):"received"===r.fabricStatus&&(O="".concat(u," ").concat(p)),"TRUE"===r.orderStatus?y="".concat(n," ").concat(l):"TRUE"===r.coverStatus&&"TRUE"===r.frameStatus?y="".concat(n," ").concat(s):"TRUE"!==r.coverStatus&&"TRUE"!==r.frameStatus||(y="".concat(n," ").concat(t)),(0,_.jsxs)("div",{className:y,children:[(0,_.jsx)("p",{className:i,children:r.number}),(0,_.jsxs)("div",{className:c,children:[(0,_.jsxs)("p",{className:o,children:[!j&&r.group," ",r.name]}),"administrator"===g.description||"seamstress"===g.description?(0,_.jsx)("p",{className:O,children:r.fabric}):(0,_.jsx)(_.Fragment,{}),j&&(0,_.jsx)("p",{className:d,children:"".concat(a.getDate(),".").concat(a.getMonth()+1,".").concat(a.getFullYear())}),N&&(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:r.size}),(0,_.jsxs)("p",{children:[r.innerPrice,"\u0433\u0440\u043d."]})]}),!N&&(0,_.jsx)("p",{className:m,children:r.dealer})]})]})}},381:function(e,r,a){a.d(r,{N:function(){return o}});var n=a(3439),t=a(7948),s=a.n(t),l="PopUp_modalCloseButton__m06-1",i="PopUp_menuIcon__5-11v",c=a(184),o=function(e){var r=e.isOpen,a=e.close,t=e.body;return(0,c.jsxs)(s(),{isOpen:r,onRequestClose:a,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,c.jsx)("button",{className:l,type:"button",onClick:a,children:(0,c.jsx)("svg",{className:i,children:(0,c.jsx)("use",{href:"".concat(n.Z,"#icon-close-circle")})})}),t]})}},8468:function(e,r,a){a.r(r),a.d(r,{default:function(){return k}});var n=a(2791),t=a(4420),s=a(3050),l=a(8384),i=a(5861),c=a(3433),o=a(9439),d=a(4687),u=a.n(d),m=a(8363),f=a.n(m),p=a(7689),h=a(1087),x=a(9870),v=a(381),b=a(5705),_=a(8007),g=a(5294),j=a(5218),N=a(9230),O=a(6502),y={list:"OrdersList_list__QGi1g",item:"OrdersList_item__AQirm",orderLink:"OrdersList_orderLink__1O6g2",navigation:"OrdersList_navigation__3Rmp5",addOrderBtn:"OrdersList_addOrderBtn__vAwBs",formWrapper:"OrdersList_formWrapper__D+6CQ",formItem:"OrdersList_formItem__EveLI",label:"OrdersList_label__mx1aV",field:"OrdersList_field__b6Rcj",formError:"OrdersList_formError__FYCQa",filter:"OrdersList_filter__PMCnu",btn:"OrdersList_btn__vek9I",toArchive:"OrdersList_toArchive__bqGCW",dateWrapper:"OrdersList_dateWrapper__-kC8y",dayTitle:"OrdersList_dayTitle__aqtaK",dateItem:"OrdersList_dateItem__q1vzl"},C=a(5842),S=a(4217),Z=a(4805),F=a(184);g.Z.defaults.baseURL="http://localhost:3030/";var L=function(){var e=(0,N.$G)().t,r=(0,Z.useMediaQuery)({query:"(max-width: 833px)"}),a=[{value:"".concat(e("sofa")),label:"".concat(e("sofa"))},{value:"".concat(e("bed")),label:"".concat(e("bed"))},{value:"".concat(e("kitchen banquette")),label:"".concat(e("kitchen banquette"))},{value:"".concat(e("pouf")),label:"".concat(e("pouf"))},{value:"".concat(e("mattress")),label:"".concat(e("mattress"))}],s=[{value:"160 x 200",label:"160 x 200"},{value:"180 x 200",label:"180 x 200"},{value:"200 x 200",label:"200 x 200"},{value:"160 x 190",label:"160 x 190"},{value:"180 x 190",label:"180 x 190"},{value:"200 x 190",label:"200 x 190"},{value:"90 x 200",label:"90 x 200"},{value:"120 x 200",label:"120 x 200"},{value:"140 x 200",label:"140 x 200"},{value:"90 x 190",label:"90 x 190"},{value:"120 x 190",label:"120 x 190"},{value:"140 x 190",label:"140 x 190"}],d=(0,t.v9)((function(e){return e.orders.itemsFilter})),m=(0,n.useState)(!1),L=(0,o.Z)(m,2),k=L[0],E=L[1],A=(0,n.useState)({value:"".concat(e("sofa")),label:"".concat(e("sofa"))}),z=(0,o.Z)(A,2),I=z[0],q=z[1],w=(0,n.useState)(""),R=(0,o.Z)(w,2),T=R[0],U=R[1],D=(0,n.useState)({value:"160 x 200",label:"160 x 200"}),W=(0,o.Z)(D,2),P=W[0],H=W[1],Q=(0,n.useState)(""),M=(0,o.Z)(Q,2),B=M[0],K=M[1],V=(0,n.useState)(""),Y=(0,o.Z)(V,2),G=Y[0],J=Y[1],X=(0,n.useState)(""),$=(0,o.Z)(X,2),ee=$[0],re=$[1],ae=(0,n.useState)(""),ne=(0,o.Z)(ae,2),te=ne[0],se=ne[1],le=(0,n.useState)(""),ie=(0,o.Z)(le,2),ce=ie[0],oe=ie[1],de=(0,n.useState)(""),ue=(0,o.Z)(de,2),me=ue[0],fe=ue[1],pe=(0,n.useState)(""),he=(0,o.Z)(pe,2),xe=he[0],ve=he[1],be=(0,n.useState)(""),_e=(0,o.Z)(be,2),ge=_e[0],je=_e[1],Ne=(0,n.useState)(!1),Oe=(0,o.Z)(Ne,2),ye=Oe[0],Ce=Oe[1],Se=(0,p.TH)(),Ze=(0,t.v9)(S.dy),Fe=(0,t.I0)(),Le=(0,t.v9)(O.NH),ke=(0,t.v9)(O.pi),Ee=[],Ae=ke.allOrdersArray,ze=[],Ie=[{value:"",label:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}];ke.allOrdersArray&&(ke.allOrdersArray.forEach((function(e,r){Ee.push({value:"".concat(e.dealer),label:"".concat(e.dealer)})})),Ee.forEach((function(e){Ie.some((function(r){return r.value.toLowerCase()===e.value.toLowerCase()}))||Ie.push(e)}))),"seamstress"===Ze.description&&(Ae=ke.allOrdersArray&&0!==ke.allOrdersArray.length?ke.allOrdersArray.filter((function(e){return"TRUE"!==e.coverStatus&&"TRUE"!==e.orderStatus})):[]),"carpenter"===Ze.description&&(Ae=ke.allOrdersArray&&0!==ke.allOrdersArray.length?ke.allOrdersArray.filter((function(e){return"TRUE"!==e.frameStatus&&"TRUE"!==e.orderStatus})):[]),"upholsterer"===Ze.description&&(Ae=ke.allOrdersArray&&0!==ke.allOrdersArray.length?ke.allOrdersArray.filter((function(e){return"TRUE"!==e.orderStatus})):[]);var qe=Ae&&0!==Ae.length?Ae.filter((function(e){return 0===d.length||d.some((function(r){return r.value.toLowerCase()===e.dealer.toLowerCase()}))})):[],we=function(){E(!1),document.body.classList.remove("modal-open")},Re=function(e){je((0,c.Z)(e.target.files))};function Te(e){var r=new Date(e),a=r.getMonth()+1;return"".concat(r.getDate().toString().padStart(2,"0"),".").concat(a.toString().padStart(2,"0"),".").concat(r.getFullYear())}var Ue=_.Ry().shape({group:_.Z_().required("".concat(e("required"))),name:_.Z_().required("".concat(e("required"))),size:_.Z_().required("".concat(e("required"))),fabric:_.Z_().required("".concat(e("required"))),description:_.Z_().required("".concat(e("required"))),number:_.Z_().required("".concat(e("required"))),adress:_.Z_(),rest:_.Z_(),deadline:_.Rx().min(10,"".concat(e("too small"))).max(60,"".concat(e("too large"))).required("".concat(e("required")))});r||qe.forEach((function(e,r){var a=Te(e.plannedDeadline);!ze.includes(a)&&ze.push(a)}));var De=function(){return r?(0,F.jsx)("ul",{className:y.list,children:qe.map((function(e){var r=e._id;return(0,F.jsx)("li",{className:y.item,children:(0,F.jsx)(h.rU,{to:"".concat(r),state:{from:Se},className:y.orderLink,onClick:function(){return Fe((0,l.zH)(ke.allOrdersArray.find((function(e){return e._id===r}))))},children:(0,F.jsx)(x.K,{id:r,order:ke.allOrdersArray.find((function(e){return e._id===r}))})})},r)}))}):(0,F.jsx)("ul",{className:y.list,children:ze.map((function(e){return(0,F.jsxs)("li",{className:y.dateItem,children:[(0,F.jsx)("p",{className:y.dayTitle,children:e}),(0,F.jsx)("ul",{className:"".concat(y.list," ").concat(y.dateWrapper),children:qe.map((function(r){var a=r._id;return Te(r.plannedDeadline)===e&&(0,F.jsx)("li",{className:y.item,children:(0,F.jsx)(h.rU,{to:"".concat(a),state:{from:Se},className:y.orderLink,onClick:function(){return Fe((0,l.zH)(ke.allOrdersArray.find((function(e){return e._id===a}))))},children:(0,F.jsx)(x.K,{id:a,order:ke.allOrdersArray.find((function(e){return e._id===a}))})})},a)}))})]},e)}))})};return(0,F.jsxs)("div",{className:y.container,children:[(0,F.jsxs)("div",{className:y.navigation,children:[(0,F.jsx)(C.ZP,{className:y.filter,isMulti:!0,name:"filter",id:"filter",onChange:function(e){return Fe((0,l.gr)(e))},options:Ie.sort((function(e,r){return e.label.localeCompare(r.label)})),defaultValue:d,placeholder:e("dealers filter")}),(0,F.jsx)("button",{className:"".concat(y.btn," ").concat(y.addOrderBtn),onClick:function(){E(!0),document.body.classList.add("modal-open")},children:e("add order")}),(0,F.jsx)(h.rU,{className:"".concat(y.link," ").concat(y.toArchive),to:"/archive",children:(0,F.jsx)("button",{className:y.btn,children:e("to archive")})})]}),Le?(0,F.jsx)(f(),{color:"#c8c19b",cssOverride:{marginTop:"15px",display:"flex",justifyContent:"center"}}):(0,F.jsx)(F.Fragment,{}),0!==qe.length?(0,F.jsx)(De,{}):(0,F.jsx)(F.Fragment,{}),(0,F.jsx)(v.N,{isOpen:k,close:we,body:(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("div",{className:y.orderModalWrapper,children:(0,F.jsx)(b.J9,{enableReinitialize:!0,initialValues:{group:I.value,name:T,size:B,fabric:G,description:ee,number:te,adress:ce,rest:me,deadline:xe},validationSchema:Ue,onSubmit:function(){var r=(0,i.Z)(u().mark((function r(a,n){var t,s;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.resetForm,r.prev=1,Ce(!0),(s=new FormData).append("group",I.value),s.append("name",a.name),s.append("size",a.size),s.append("fabric",a.fabric),I.value==="".concat(e("bed"))?s.append("description",a.description+" \u0421\u043f\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e ".concat(P.value)):s.append("description",a.description),s.append("number",a.number),s.append("adress",a.adress),s.append("rest",a.rest),s.append("deadline",a.deadline),ge&&0!==ge.length&&ge.forEach((function(e){s.append("file",e)})),r.next=16,g.Z.post("/orders/add",s,{headers:{"Content-Type":"multipart/form-data"}});case 16:j.ZP.success("Order sended"),t(),Ce(!1),q({value:"".concat(e("sofa")),label:"".concat(e("sofa"))}),U(""),K(""),J(""),re(""),se(""),oe(""),fe(""),ve(""),we(),Fe((0,l.h_)()),r.next=35;break;case 32:r.prev=32,r.t0=r.catch(1),j.ZP.error("".concat(r.t0.response.data.message));case 35:case"end":return r.stop()}}),r,null,[[1,32]])})));return function(e,a){return r.apply(this,arguments)}}(),children:function(r){var n=r.errors,t=r.touched,l=r.setFieldValue;return(0,F.jsxs)(b.l0,{className:y.formWrapper,children:[(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"group",children:e("group")}),(0,F.jsx)(b.gN,{component:C.ZP,name:"group",id:"group",onChange:function(e){return q(e)},options:a,defaultValue:I.value,placeholder:I.label}),n.group&&t.group?(0,F.jsx)("div",{children:n.group}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"name",children:e("order name")}),(0,F.jsx)(b.gN,{className:n.name&&t.name?"".concat(y.field," ").concat(y.formError):y.field,id:"name",name:"name",placeholder:"Faynee mini",value:T,onChange:function(e){U(e.target.value),l("name",e.target.value)}}),n.name&&t.name?(0,F.jsx)("div",{children:n.name}):null]}),I.value==="".concat(e("bed"))?(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"sleepingArea",children:e("sleeping area")}),(0,F.jsx)(b.gN,{component:C.ZP,name:"sleepingArea",id:"sleepingArea",onChange:function(e){return H(e)},options:s,defaultValue:P.value,placeholder:P.value})]}):(0,F.jsx)(F.Fragment,{}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"size",children:e("size")}),(0,F.jsx)(b.gN,{className:n.size&&t.size?"".concat(y.field," ").concat(y.formError):y.field,id:"size",name:"size",placeholder:"".concat(e("overall size")),value:B,onChange:function(e){K(e.target.value),l("size",e.target.value)}}),n.size&&t.size?(0,F.jsx)("div",{children:n.size}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"fabric",children:e("fabric")}),(0,F.jsx)(b.gN,{className:n.fabric&&t.fabric?"".concat(y.field," ").concat(y.formError):y.field,id:"fabric",name:"fabric",placeholder:e("fabric name"),value:G,onChange:function(e){J(e.target.value),l("fabric",e.target.value)}}),n.fabric&&t.fabric?(0,F.jsx)("div",{children:n.fabric}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"description",children:e("description")}),(0,F.jsx)(b.gN,{as:"textarea",rows:"3",className:n.description&&t.description?"".concat(y.field," ").concat(y.formError):y.field,id:"description",name:"description",placeholder:e("description"),value:ee,onChange:function(e){re(e.target.value),l("description",e.target.value)}}),n.description&&t.description?(0,F.jsx)("div",{children:n.description}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"number",children:e("number")}),(0,F.jsx)(b.gN,{className:n.number&&t.number?"".concat(y.field," ").concat(y.formError):y.field,id:"number",name:"number",placeholder:"125",value:te,onChange:function(e){se(e.target.value),l("number",e.target.value)}}),n.number&&t.number?(0,F.jsx)("div",{children:n.number}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"adress",children:e("adress")}),(0,F.jsx)(b.gN,{className:n.adress&&t.adress?"".concat(y.field," ").concat(y.formError):y.field,id:"adress",name:"adress",placeholder:e("Kiev, Kyrylivska street, 103"),value:ce,onChange:function(e){oe(e.target.value),l("adress",e.target.value)}}),n.adress&&t.adress?(0,F.jsx)("div",{children:n.adress}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"rest",children:e("rest")}),(0,F.jsx)(b.gN,{className:n.rest&&t.rest?"".concat(y.field," ").concat(y.formError):y.field,id:"rest",name:"rest",placeholder:"21000",value:me,onChange:function(e){fe(e.target.value),l("rest",e.target.value)}}),n.rest&&t.rest?(0,F.jsx)("div",{children:n.rest}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"deadline",children:e("deadline")}),(0,F.jsx)(b.gN,{className:n.deadline&&t.deadline?"".concat(y.field," ").concat(y.formError):y.field,id:"deadline",name:"deadline",placeholder:"21",value:xe,onChange:function(e){ve(e.target.value),l("deadline",e.target.value)}}),n.deadline&&t.deadline?(0,F.jsx)("div",{children:n.deadline}):null]}),(0,F.jsxs)("div",{className:y.formItem,children:[(0,F.jsx)("label",{htmlFor:"files",children:e("add new images")}),(0,F.jsx)(b.gN,{className:y.field,id:"files",name:"files",type:"file",onChange:Re,multiple:!0})]}),(0,F.jsx)("button",{type:"submit",className:y.btn,children:ye?(0,F.jsx)(f(),{color:"#c8c19b",size:"10px"}):"".concat(e("submit"))})]})}})})})})]})};function k(){var e=(0,t.I0)();return(0,n.useEffect)((function(){e((0,l.zH)({})),e((0,l.h_)())}),[e]),(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(s.B6,{children:[(0,F.jsx)(s.ql,{children:(0,F.jsx)("title",{children:"Your orders"})}),(0,F.jsx)(L,{})]})})}},6502:function(e,r,a){a.d(r,{Hz:function(){return t},NH:function(){return l},ST:function(){return s},pi:function(){return n}});var n=function(e){return e.orders.items},t=function(e){return e.orders.archive},s=function(e){return e.orders.activeItem},l=function(e){return e.orders.isLoading}}}]);
//# sourceMappingURL=468.d8066383.chunk.js.map