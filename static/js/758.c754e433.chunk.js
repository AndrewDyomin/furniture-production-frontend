"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[758],{381:function(e,n,t){t.d(n,{N:function(){return c}});var i=t(3439),s=t(7948),r=t.n(s),a="PopUp_modalCloseButton__m06-1",l="PopUp_menuIcon__5-11v",o=t(184),c=function(e){var n=e.isOpen,t=e.close,s=e.body;return(0,o.jsxs)(r(),{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,o.jsx)("button",{className:a,type:"button",onClick:t,children:(0,o.jsx)("svg",{className:l,children:(0,o.jsx)("use",{href:"".concat(i.Z,"#icon-close-circle")})})}),s]})}},8758:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var i=t(3050),s=t(3433),r=t(5861),a=t(9439),l=t(4687),o=t.n(l),c=t(5705),d=t(5536),m=t(5294),p=t(3439),u={wrapper:"CollectionEditor_wrapper__BODBf",title:"CollectionEditor_title__K5kie",titleArea:"CollectionEditor_titleArea__XDnvo",openBtn:"CollectionEditor_openBtn__2KO2d",openBtnIcon:"CollectionEditor_openBtnIcon__JoypF",active:"CollectionEditor_active__2uyO7",formWrapper:"CollectionEditor_formWrapper__GYzoj",formItem:"CollectionEditor_formItem__qqpkN",label:"CollectionEditor_label__MQZp3",field:"CollectionEditor_field__XQu45",quantityField:"CollectionEditor_quantityField__u3ybJ",inputArray:"CollectionEditor_inputArray__Ospp1",selectComponent:"CollectionEditor_selectComponent__CvOZ7",minBtn:"CollectionEditor_minBtn__6g+Kk",btn:"CollectionEditor_btn__PRioK",error:"CollectionEditor_error__T-eMv"},h=t(2791),x=t(5842),f=t(4420),j=t(184);m.Z.defaults.baseURL="https://furniture-production.onrender.com/";var _=[{value:"sofa",label:"Sofa"},{value:"bed",label:"Bed"}],v=function(){var e=(0,f.v9)(d._),n=[];try{e.array.forEach((function(e){n.push({value:e._id,label:"".concat(e.name,"/").concat(e.units)})}))}catch(S){}var t=(0,h.useState)({value:"sofa",label:"Sofa"}),i=(0,a.Z)(t,2),l=i[0],v=i[1],b=(0,h.useState)(""),N=(0,a.Z)(b,2),g=N[0],y=N[1],C=(0,h.useState)([]),F=(0,a.Z)(C,2),I=F[0],w=F[1],B=(0,h.useState)(!1),E=(0,a.Z)(B,2),Z=E[0],O=E[1];return(0,j.jsxs)("div",{className:u.wrapper,children:[(0,j.jsxs)("div",{className:u.titleArea,children:[(0,j.jsx)("p",{className:u.title,children:"Collection Editor"}),(0,j.jsx)("button",{className:u.openBtn,id:"isOpen",onClick:function(e){O(!Z),e.target.classList=Z?u.notActive:u.active},children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{className:u.openBtnIcon,href:"".concat(p.Z,"#icon-arrow-down"),width:"32px"})})})]}),Z?(0,j.jsx)(c.J9,{initialValues:{group:l.value,name:"",dimensions:{width:"",height:"",depth:""},description:"",basePrice:"",images:[""],components:[""],quantity:[""]},onSubmit:function(){var e=(0,r.Z)(o().mark((function e(n,t){var i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.resetForm,e.prev=1,(s=new FormData).append("group",l.value),s.append("name",n.name),s.append("dimensions[width]",n.dimensions.width),s.append("dimensions[height]",n.dimensions.height),s.append("dimensions[depth]",n.dimensions.depth),s.append("description",n.description),s.append("basePrice",n.basePrice),I.forEach((function(e,t){var i=I[t],r=n.quantity[t];s.append("components[".concat(t,"][id]"),i),s.append("components[".concat(t,"][quantity]"),r)})),s.append("file",g[0]),e.next=14,m.Z.post("/collections/add",s,{headers:{"Content-Type":"multipart/form-data"}});case 14:w([]),i(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,j.jsxs)(c.l0,{className:u.formWrapper,children:[(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"group",children:"Group"}),(0,j.jsx)(c.gN,{component:x.ZP,name:"group",id:"group",onChange:function(e){return v(e)},options:_,defaultValue:l.value})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"name",children:"Name"}),(0,j.jsx)(c.gN,{className:u.field,id:"name",name:"name",placeholder:"Faynee mini"})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"dimensions.width",children:"Width"}),(0,j.jsx)(c.gN,{className:u.field,id:"dimensions.width",name:"dimensions.width",placeholder:"Width"})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"dimensions.depth",children:"Depth"}),(0,j.jsx)(c.gN,{className:u.field,id:"dimensions.depth",name:"dimensions.depth",placeholder:"Depth"})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"dimensions.height",children:"Height"}),(0,j.jsx)(c.gN,{className:u.field,id:"dimensions.height",name:"dimensions.height",placeholder:"Height"})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"description",children:"Description"}),(0,j.jsx)(c.gN,{className:u.field,id:"description",name:"description",placeholder:"Description"})]}),(0,j.jsxs)("div",{className:u.formItem,children:[(0,j.jsx)("label",{htmlFor:"basePrice",children:"Base price"}),(0,j.jsx)(c.gN,{className:u.field,id:"basePrice",name:"basePrice",placeholder:"12500"})]}),(0,j.jsx)("div",{className:u.formItem,children:(0,j.jsx)(c.gN,{className:u.field,id:"files",name:"files",type:"file",onChange:function(e){y(e.target.files)}})}),(0,j.jsx)("div",{className:u.formItem,children:(0,j.jsx)(c.F2,{name:"components",render:function(e){return(0,j.jsx)("div",{children:e.form.values.components.map((function(t,i){return(0,j.jsxs)("div",{className:u.inputArray,children:[(0,j.jsx)(c.gN,{component:x.ZP,className:u.selectComponent,name:"components.".concat(i),onChange:function(e){return w((function(n){var t=(0,s.Z)(n);return t[i]=e.value,t}))},options:n}),(0,j.jsx)(c.gN,{className:"".concat(u.field," ").concat(u.quantityField),name:"quantity.".concat(i),placeholder:"Quantity"}),e.form.values.components.length>1?(0,j.jsx)("button",{className:u.minBtn,type:"button",onClick:function(){e.remove(i),e.form.values.quantity.splice(i,1)},children:"-"}):(0,j.jsx)(j.Fragment,{}),i===e.form.values.components.length-1&&(0,j.jsx)("button",{className:u.minBtn,type:"button",onClick:function(){e.push(""),e.form.values.quantity.push("")},children:"+"})]},i)}))})}})}),(0,j.jsx)("button",{type:"submit",className:u.btn,children:"Submit"})]})}):(0,j.jsx)(j.Fragment,{})]})},b=t(1413),N=t(4253),g=t(381),y={wrapper:"ComponentList_wrapper__giwUD",title:"ComponentList_title__EfwIm",titleArea:"ComponentList_titleArea__mSre9",openBtn:"ComponentList_openBtn__JXZrR",openBtnIcon:"ComponentList_openBtnIcon__81Ht3",active:"ComponentList_active__b-xnh",list:"ComponentList_list__nKaDk",item:"ComponentList_item__rBpvr",price:"ComponentList_price__b8Be0",buttons:"ComponentList_buttons__MMPMv",editBtn:"ComponentList_editBtn__8we70",formItem:"ComponentList_formItem__tEUVD",field:"ComponentList_field__+BOaR",inputArray:"ComponentList_inputArray__tvYgw",btn:"ComponentList_btn__9-6O+",delBtn:"ComponentList_delBtn__uRtU-"},C=[{value:"USD",label:"USD"},{value:"\u0433\u0440\u043d",label:"\u0433\u0440\u043d"}],F=[{value:"\u0448\u0442",label:"\u0448\u0442"},{value:"\u043c",label:"\u043c"},{value:"\u043a\u0433",label:"\u043a\u0433"}],I={},w=function(){var e=(0,f.v9)(d._),n=(0,f.I0)(),t=(0,h.useState)(!1),i=(0,a.Z)(t,2),s=i[0],l=i[1],m=(0,h.useState)(!1),u=(0,a.Z)(m,2),_=u[0],v=u[1],w=(0,h.useState)({value:"\u0433\u0440\u043d",label:"\u0433\u0440\u043d"}),B=(0,a.Z)(w,2),E=B[0],Z=B[1],O=(0,h.useState)({value:"\u0448\u0442.",label:"\u0448\u0442"}),S=(0,a.Z)(O,2),k=S[0],A=S[1],L=(0,h.useState)(!1),P=(0,a.Z)(L,2),D=P[0],q=P[1],W=function(){q(!1),document.body.classList.remove("modal-open")},U=function(){v(!1),document.body.classList.remove("modal-open")},K=function(){try{return e.array.map((function(e){return(0,j.jsxs)("li",{className:y.item,children:[(0,j.jsx)("p",{children:e.name}),(0,j.jsx)("div",{children:(0,j.jsx)("p",{children:e.description})}),(0,j.jsxs)("div",{className:y.price,children:[(0,j.jsxs)("p",{children:["Price: ",e.price]}),(0,j.jsx)("p",{children:e.currency}),(0,j.jsxs)("p",{children:["/",e.units]})]}),(0,j.jsxs)("div",{className:y.buttons,children:[(0,j.jsx)("button",{className:y.editBtn,onClick:function(){return function(e){I=e,v(!0),document.body.classList.add("modal-open")}(e)},children:"Edit"}),(0,j.jsx)("button",{className:y.editBtn,onClick:function(){return function(e){I=e,q(!0),document.body.classList.add("modal-open")}(e)},children:"Delete"})]})]},e._id)}))}catch(n){return(0,j.jsx)(j.Fragment,{})}};return(0,j.jsxs)("div",{className:y.wrapper,children:[(0,j.jsxs)("div",{className:y.titleArea,children:[(0,j.jsx)("p",{className:y.title,children:"Component list"}),(0,j.jsx)("button",{className:y.openBtn,id:"isOpen",onClick:function(e){l(!s),e.target.classList=s?y.notActive:y.active},children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{className:y.openBtnIcon,href:"".concat(p.Z,"#icon-arrow-down"),width:"32px"})})})]}),s?(0,j.jsxs)("div",{children:[(0,j.jsx)("ul",{className:y.list,children:(0,j.jsx)(K,{})}),(0,j.jsx)("p",{className:y.title,children:"Add new component"}),(0,j.jsx)(c.J9,{initialValues:{name:"",description:"",price:"",currency:E.value,units:k.value},onSubmit:function(){var e=(0,r.Z)(o().mark((function e(t,i){var s,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=i.resetForm;try{r=(0,b.Z)((0,b.Z)({},t),{},{currency:E.value,units:k.value}),n((0,N.Tk)(r)),s()}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,j.jsxs)(c.l0,{className:y.formWrapper,children:[(0,j.jsx)("div",{className:y.formItem,children:(0,j.jsx)(c.gN,{className:y.field,id:"name",name:"name",placeholder:"Name"})}),(0,j.jsx)("div",{className:y.formItem,children:(0,j.jsx)(c.gN,{className:y.field,id:"description",name:"description",placeholder:"Description"})}),(0,j.jsx)("div",{className:y.formItem,children:(0,j.jsx)(c.gN,{className:y.field,id:"price",name:"price",placeholder:"Price"})}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"currency",children:"Currency"}),(0,j.jsx)(c.gN,{component:x.ZP,name:"currency",id:"currency",onChange:function(e){return Z(e)},options:C,defaultValue:E.value})]}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"units",children:"Units"}),(0,j.jsx)(c.gN,{component:x.ZP,name:"units",id:"units",onChange:function(e){return A(e)},options:F,defaultValue:k.value})]}),(0,j.jsx)("button",{type:"submit",className:y.btn,children:"Add component"})]})}),(0,j.jsx)(g.N,{isOpen:_,close:U,body:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:"Edit mode"}),(0,j.jsx)(c.J9,{initialValues:{name:I.name,description:I.description,price:I.price,currency:I.currency,units:I.units},onSubmit:function(){var e=(0,r.Z)(o().mark((function e(t){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{i=I._id,n((0,N.KL)((0,b.Z)({id:i},t))),U()}catch(s){console.log(s)}case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:(0,j.jsxs)(c.l0,{className:y.formWrapper,children:[(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"name",children:"Name"}),(0,j.jsx)(c.gN,{className:y.field,id:"name",name:"name"})]}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"description",children:"Description"}),(0,j.jsx)(c.gN,{className:y.field,id:"description",name:"description"})]}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"price",children:"Price"}),(0,j.jsx)(c.gN,{className:y.field,id:"price",name:"price"})]}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"currency",children:"Currency"}),(0,j.jsx)(c.gN,{className:y.field,id:"currency",name:"currency"})]}),(0,j.jsxs)("div",{className:y.formItem,children:[(0,j.jsx)("label",{htmlFor:"units",children:"Units"}),(0,j.jsx)(c.gN,{className:y.field,id:"units",name:"units"})]}),(0,j.jsx)("button",{type:"submit",className:y.btn,children:"Submit"})]})})]})}),(0,j.jsx)(g.N,{isOpen:D,close:W,body:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("p",{children:"Are you sure???"}),(0,j.jsxs)("div",{className:y.delModalWrapper,children:[(0,j.jsx)("button",{onClick:W,className:y.btn,children:"Cancel"}),(0,j.jsx)("button",{onClick:function(){n((0,N.v7)(I._id)),W()},className:"".concat(y.btn," ").concat(y.delBtn),children:"Delete"})]})]})})]}):(0,j.jsx)(j.Fragment,{})]})},B={wrapper:"OrderEditor_wrapper__l+KKo",title:"OrderEditor_title__AiSZh",titleArea:"OrderEditor_titleArea__T5fKl",openBtn:"OrderEditor_openBtn__CO+dT",openBtnIcon:"OrderEditor_openBtnIcon__LMSux",active:"OrderEditor_active__vh9IE",formWrapper:"OrderEditor_formWrapper__WT18n",formItem:"OrderEditor_formItem__Fao6h",label:"OrderEditor_label__G-wuQ",field:"OrderEditor_field__6vQUf",quantityField:"OrderEditor_quantityField__cNSnd",inputArray:"OrderEditor_inputArray__AXKm1",selectComponent:"OrderEditor_selectComponent__R0c-n",minBtn:"OrderEditor_minBtn__mWTcS",btn:"OrderEditor_btn__lwtdU",error:"OrderEditor_error__8FptM"},E=t(5218);m.Z.defaults.baseURL="https://furniture-production.onrender.com/";var Z=[{value:"sofa",label:"Sofa"},{value:"bed",label:"Bed"}],O=[{value:"160 x 200",label:"160 x 200"},{value:"180 x 200",label:"180 x 200"},{value:"200 x 200",label:"200 x 200"},{value:"160 x 190",label:"160 x 190"},{value:"180 x 190",label:"180 x 190"},{value:"200 x 190",label:"200 x 190"},{value:"90 x 200",label:"90 x 200"},{value:"120 x 200",label:"120 x 200"},{value:"140 x 200",label:"140 x 200"},{value:"90 x 190",label:"90 x 190"},{value:"120 x 190",label:"120 x 190"},{value:"140 x 190",label:"140 x 190"}],S=function(){var e=(0,h.useState)({value:"sofa",label:"Sofa"}),n=(0,a.Z)(e,2),t=n[0],i=n[1],s=(0,h.useState)({value:"160 x 200",label:"160 x 200"}),l=(0,a.Z)(s,2),d=l[0],u=l[1],f=(0,h.useState)(!1),_=(0,a.Z)(f,2),v=_[0],b=_[1];return(0,j.jsxs)("div",{className:B.wrapper,children:[(0,j.jsxs)("div",{className:B.titleArea,children:[(0,j.jsx)("p",{className:B.title,children:"Order Editor"}),(0,j.jsx)("button",{className:B.openBtn,id:"isOpen",onClick:function(e){b(!v),e.target.classList=v?B.notActive:B.active},children:(0,j.jsx)("svg",{children:(0,j.jsx)("use",{className:B.openBtnIcon,href:"".concat(p.Z,"#icon-arrow-down"),width:"32px"})})})]}),v?(0,j.jsx)(c.J9,{initialValues:{group:t.value,name:"",size:"",fabric:"",description:"",number:"",adress:"",rest:"",deadline:""},onSubmit:function(){var e=(0,r.Z)(o().mark((function e(n,i){var s,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.resetForm,e.prev=1,(r=new FormData).append("group",t.value),r.append("name",n.name),r.append("size",n.size),r.append("fabric",n.fabric),r.append("description",n.description),r.append("number",n.number),r.append("adress",n.adress),r.append("rest",n.rest),r.append("deadline",n.deadline),e.next=14,m.Z.post("/orders/add",r,{headers:{"Content-Type":"multipart/form-data"}});case 14:E.ZP.success("Order sended"),s(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),E.ZP.error("".concat(e.t0.response.data.message));case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(n,t){return e.apply(this,arguments)}}(),children:(0,j.jsxs)(c.l0,{className:B.formWrapper,children:[(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"group",children:"Group"}),(0,j.jsx)(c.gN,{component:x.ZP,name:"group",id:"group",onChange:function(e){return i(e)},options:Z,defaultValue:t.value})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"name",children:"Name"}),(0,j.jsx)(c.gN,{className:B.field,id:"name",name:"name",placeholder:"Faynee mini"})]}),"bed"===t.value?(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"sleepingArea",children:"Sleeping area"}),(0,j.jsx)(c.gN,{component:x.ZP,name:"sleepingArea",id:"sleepingArea",onChange:function(e){return u(e)},options:O,defaultValue:d.value})]}):(0,j.jsx)(j.Fragment,{}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"size",children:"Size"}),(0,j.jsx)(c.gN,{className:B.field,id:"size",name:"size",placeholder:"".concat(t.label," size")})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"fabric",children:"Fabric"}),(0,j.jsx)(c.gN,{className:B.field,id:"fabric",name:"fabric",placeholder:"Fabric"})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"description",children:"Description"}),(0,j.jsx)(c.gN,{className:B.field,id:"description",name:"description",placeholder:"Description"})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"number",children:"Number"}),(0,j.jsx)(c.gN,{className:B.field,id:"number",name:"number",placeholder:"125"})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"adress",children:"Adress"}),(0,j.jsx)(c.gN,{className:B.field,id:"adress",name:"adress",placeholder:"Kiev, Kyrylivska street, 103"})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"rest",children:"Rest"}),(0,j.jsx)(c.gN,{className:B.field,id:"rest",name:"rest",placeholder:"21000"})]}),(0,j.jsxs)("div",{className:B.formItem,children:[(0,j.jsx)("label",{htmlFor:"deadline",children:"Deadline"}),(0,j.jsx)(c.gN,{className:B.field,id:"deadline",name:"deadline",placeholder:"21"})]}),(0,j.jsx)("button",{type:"submit",className:B.btn,children:"Submit"})]})}):(0,j.jsx)(j.Fragment,{})]})};function k(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(i.B6,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:"My room"})}),(0,j.jsx)("h1",{children:"It's your private room"}),(0,j.jsx)(v,{}),(0,j.jsx)(w,{}),(0,j.jsx)(S,{})]})})}},5536:function(e,n,t){t.d(n,{_:function(){return i}});var i=function(e){return e.components.items}}}]);
//# sourceMappingURL=758.c754e433.chunk.js.map