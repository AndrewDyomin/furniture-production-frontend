"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[818],{818:function(e,n,s){s.r(n),s.d(n,{default:function(){return x}});var i=s(3050),t=s(5861),r=s(9439),o=s(4687),a=s.n(o),l=s(5705),c=s(5294),d={wrapper:"CollectionEditor_wrapper__BODBf",formWrapper:"CollectionEditor_formWrapper__GYzoj",formItem:"CollectionEditor_formItem__qqpkN",field:"CollectionEditor_field__XQu45",inputArray:"CollectionEditor_inputArray__Ospp1",minBtn:"CollectionEditor_minBtn__6g+Kk",btn:"CollectionEditor_btn__PRioK"},m=s(2791),p=s(5842),h=s(184);c.Z.defaults.baseURL="https://furniture-production.onrender.com/";var u=[{value:"sofa",label:"Sofa"},{value:"bed",label:"Bed"}],f=function(){var e=(0,m.useState)("sofa"),n=(0,r.Z)(e,2),s=n[0],i=n[1],o=(0,m.useState)(""),f=(0,r.Z)(o,2),x=f[0],j=f[1];return(0,h.jsxs)("div",{className:d.wrapper,children:[(0,h.jsx)("h2",{className:d.title,children:"Collection Editor"}),(0,h.jsx)(l.J9,{initialValues:{group:s,name:"",dimensions:{width:"",height:"",depth:""},subscription:"",basePrice:"",images:[""],components:[""]},onSubmit:function(){var e=(0,t.Z)(a().mark((function e(n,s){var i,t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.resetForm,e.prev=1,(t=new FormData).append("group",n.group),t.append("name",n.name),t.append("dimensions[width]",n.dimensions.width),t.append("dimensions[height]",n.dimensions.height),t.append("dimensions[depth]",n.dimensions.depth),t.append("subscription",n.subscription),t.append("basePrice",n.basePrice),n.components.forEach((function(e,n){t.append("components[".concat(n,"]"),e)})),t.append("file",x[0]),e.next=14,c.Z.post("/collections/add",t,{headers:{"Content-Type":"multipart/form-data"}});case 14:r=e.sent,console.log(r),i(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(n,s){return e.apply(this,arguments)}}(),children:(0,h.jsxs)(l.l0,{className:d.formWrapper,children:[(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"group",children:"Group"}),(0,h.jsx)(p.ZP,{className:d.field,id:"group",name:"group",defaultValue:s,onChange:i,options:u})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"name",children:"Name"}),(0,h.jsx)(l.gN,{className:d.field,id:"name",name:"name",placeholder:"Faynee mini"})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"dimensions.width",children:"Width"}),(0,h.jsx)(l.gN,{className:d.field,id:"dimensions.width",name:"dimensions.width",placeholder:"Width"})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"dimensions.depth",children:"Depth"}),(0,h.jsx)(l.gN,{className:d.field,id:"dimensions.depth",name:"dimensions.depth",placeholder:"Depth"})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"dimensions.height",children:"Height"}),(0,h.jsx)(l.gN,{className:d.field,id:"dimensions.height",name:"dimensions.height",placeholder:"Height"})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"subscription",children:"Subscription"}),(0,h.jsx)(l.gN,{className:d.field,id:"subscription",name:"subscription",placeholder:"Subscription"})]}),(0,h.jsxs)("div",{className:d.formItem,children:[(0,h.jsx)("label",{htmlFor:"basePrice",children:"Base price"}),(0,h.jsx)(l.gN,{className:d.field,id:"basePrice",name:"basePrice",placeholder:"12500"})]}),(0,h.jsx)("div",{className:d.formItem,children:(0,h.jsx)(l.gN,{className:d.field,id:"files",name:"files",type:"file",onChange:function(e){j(e.target.files)}})}),(0,h.jsx)("div",{className:d.formItem,children:(0,h.jsx)(l.F2,{name:"components",render:function(e){return(0,h.jsx)("div",{children:e.form.values.components.map((function(n,s){return(0,h.jsxs)("div",{className:d.inputArray,children:[(0,h.jsx)(l.gN,{className:d.field,name:"components.".concat(s),placeholder:"components"}),e.form.values.components.length>1?(0,h.jsx)("button",{className:d.minBtn,type:"button",onClick:function(){return e.remove(s)},children:"-"}):(0,h.jsx)(h.Fragment,{}),s===e.form.values.components.length-1&&(0,h.jsx)("button",{className:d.minBtn,type:"button",onClick:function(){return e.push("")},children:"+"})]},s)}))})}})}),(0,h.jsx)("button",{type:"submit",className:d.btn,children:"Submit"})]})})]})};function x(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(i.B6,{children:[(0,h.jsx)(i.ql,{children:(0,h.jsx)("title",{children:"My room"})}),(0,h.jsx)("h1",{children:"It's your private room"}),(0,h.jsx)(f,{})]})})}}}]);
//# sourceMappingURL=818.dc5aff06.chunk.js.map