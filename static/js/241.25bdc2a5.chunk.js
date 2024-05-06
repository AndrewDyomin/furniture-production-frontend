"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[241],{381:function(e,n,t){t.d(n,{N:function(){return l}});var i=t(3439),s=t(7948),a=t.n(s),c="PopUp_modalCloseButton__m06-1",r="PopUp_menuIcon__5-11v",o=t(184),l=function(e){var n=e.isOpen,t=e.close,s=e.body;return(0,o.jsxs)(a(),{isOpen:n,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,o.jsx)("button",{className:c,type:"button",onClick:t,children:(0,o.jsx)("svg",{className:r,children:(0,o.jsx)("use",{href:"".concat(i.Z,"#icon-close-circle")})})}),s]})}},4629:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var i=t(9439),s=t(7689),a=t(4420),c=(t(8040),t(197)),r=t(9654),o=t(5536),l=t(5612),d={section:"ProductDetails_section__nPSK1",title:"ProductDetails_title__Qkudl",image:"ProductDetails_image__LbA4l",baseInfoTitle:"ProductDetails_baseInfoTitle__0a0ed",price:"ProductDetails_price__DFFDm",adminBlock:"ProductDetails_adminBlock__bY86e"},u=t(2791),m=t(9230),p=t(5842),h=t(7834),f=t(5861),x=t(3433),b=t(4687),j=t.n(b),_={delModalWrapper:"AdminMenu_delModalWrapper__Gfzrs",formWrapper:"AdminMenu_formWrapper__ybfPv",formItem:"AdminMenu_formItem__KchmS",label:"AdminMenu_label__UnqU9",field:"AdminMenu_field__bFN4e",quantityField:"AdminMenu_quantityField__Kt6mI",inputArray:"AdminMenu_inputArray__+FLIB",selectComponent:"AdminMenu_selectComponent__6Gq8o",minBtn:"AdminMenu_minBtn__BCYDU",btn:"AdminMenu_btn__7lnqu",delBtn:"AdminMenu_delBtn__LcZEy",modalSubmitButton:"AdminMenu_modalSubmitButton__lp4X-"},v=t(381),N=t(5705),g=t(5294),y=t(184);g.Z.defaults.baseURL="https://furniture-production.onrender.com/";var I=function(e){var n=(0,a.I0)(),t=(0,m.$G)().t,s=(0,a.v9)(r.K),c=(0,a.v9)(o._).array,d=s.components.length>0?s.components:[""],h=[],b=[],I=[];try{c.forEach((function(e){h.push({value:e._id,label:"".concat(e.name,"/").concat(e.units)})}))}catch(J){}try{d.forEach((function(e){b.push(e.id),I.push(e.quantity)}))}catch(R){}var C=(0,u.useState)(!1),F=(0,i.Z)(C,2),k=F[0],P=F[1],Z=(0,u.useState)([].concat(b)),w=(0,i.Z)(Z,2),S=w[0],A=w[1],M=(0,u.useState)([].concat(I)),B=(0,i.Z)(M,2),q=B[0],D=B[1],W=(0,u.useState)(!1),E=(0,i.Z)(W,2),L=E[0],T=E[1],U=(0,u.useState)([]),O=(0,i.Z)(U,2),K=O[0],G=O[1];(0,u.useEffect)((function(){A([].concat(b)),D([].concat(I))}),[k]);var $=function(){P(!1),document.body.classList.remove("modal-open")},z=function(){T(!1),document.body.classList.remove("modal-open")},H=function(e){try{return h.find((function(n){return n.value===e})).label}catch(n){return"Select..."}};return(0,y.jsxs)("div",{children:[(0,y.jsx)("button",{onClick:function(){T(!0),document.body.classList.add("modal-open")},className:_.btn,children:t("delete")}),(0,y.jsx)("button",{className:_.btn,onClick:function(){P(!0),document.body.classList.add("modal-open")},children:t("edit")}),(0,y.jsx)(v.N,{isOpen:k,close:$,className:_.modalContent,body:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("p",{children:t("edit mode")}),(0,y.jsx)(N.J9,{initialValues:{name:s.name,dimensions:{width:s.dimensions.width,height:s.dimensions.height,depth:s.dimensions.depth},description:s.description,basePrice:s.basePrice,components:S,quantity:q,images:s.images},onSubmit:function(){var n=(0,f.Z)(j().mark((function n(t){var i,s,a,c;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i=new FormData,s=[],t.images.forEach((function(e,n){i.append("images[".concat(n,"]"),t.images[n])})),K.forEach((function(e){i.append("file",e)})),a=JSON.stringify(t.dimensions),i.append("dimensions",a),i.append("name",t.name),i.append("description",t.description),i.append("basePrice",t.basePrice),i.append("_id",e.id),S.forEach((function(e,n){var t=e,i=q[n];s.push({id:t,quantity:i})})),c=JSON.stringify(s),i.append("components",c),n.next=16,g.Z.post("/collections/update",i,{headers:{"Content-Type":"multipart/form-data"}});case 16:$(),n.next=22;break;case 19:n.prev=19,n.t0=n.catch(0),console.log(n.t0);case 22:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(e){return n.apply(this,arguments)}}(),children:(0,y.jsxs)(N.l0,{className:_.formWrapper,children:[(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"name",children:t("unit name")}),(0,y.jsx)(N.gN,{className:_.field,id:"name",name:"name"})]}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"dimensions.width",children:t("width")}),(0,y.jsx)(N.gN,{className:_.field,id:"dimensions.width",name:"dimensions.width",placeholder:"Width"})]}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"dimensions.depth",children:t("depth")}),(0,y.jsx)(N.gN,{className:_.field,id:"dimensions.depth",name:"dimensions.depth",placeholder:"Depth"})]}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"dimensions.height",children:t("height")}),(0,y.jsx)(N.gN,{className:_.field,id:"dimensions.height",name:"dimensions.height",placeholder:"Height"})]}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"description",children:t("description")}),(0,y.jsx)(N.gN,{className:_.field,id:"description",name:"description",placeholder:"Description"})]}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"basePrice",children:t("base price")}),(0,y.jsx)(N.gN,{className:_.field,id:"basePrice",name:"basePrice",placeholder:"12500"})]}),(0,y.jsx)("div",{className:_.formItem,children:(0,y.jsx)(N.F2,{name:"images",render:function(e){return(0,y.jsx)("div",{className:_.field,children:e.form.values.images.map((function(n,i){return(0,y.jsxs)("div",{className:_.inputItem,children:[(0,y.jsx)("img",{src:n,alt:n,width:"200px"}),(0,y.jsx)("button",{className:_.btn,type:"button",onClick:function(){return e.remove(i)},children:t("delete")})]},i)}))})}})}),(0,y.jsxs)("div",{className:_.formItem,children:[(0,y.jsx)("label",{htmlFor:"files",children:t("add new images")}),(0,y.jsx)(N.gN,{className:_.field,id:"files",name:"files",type:"file",onChange:function(e){G((0,x.Z)(e.target.files))},multiple:!0})]}),(0,y.jsx)("div",{className:_.formItem,children:(0,y.jsx)(N.F2,{name:"components",render:function(e){return(0,y.jsx)("div",{children:S.map((function(e,n){return(0,y.jsxs)("div",{className:_.inputArray,children:[(0,y.jsx)(N.gN,{component:p.ZP,className:_.selectComponent,name:"components.".concat(n),onChange:function(e){return A((function(t){var i=(0,x.Z)(t);return i[n]=e.value,i}))},options:h,placeholder:H(e)}),(0,y.jsx)(N.gN,{className:"".concat(_.field," ").concat(_.quantityField),name:"quantity.".concat(n),value:q[n]||"",onChange:function(e){return D((function(t){var i=(0,x.Z)(t);return i[n]=e.target.value,i}))},placeholder:"Quantity"}),S.length>1?(0,y.jsx)("button",{className:_.minBtn,type:"button",onClick:function(){return function(e){A((function(n){return n.filter((function(n){return n!==e}))})),D((function(n){return n.filter((function(n,t){return S[t]!==e}))}))}(e)},children:"-"}):(0,y.jsx)(y.Fragment,{}),n===S.length-1&&(0,y.jsx)("button",{className:_.minBtn,type:"button",onClick:function(){return A((function(e){return[].concat((0,x.Z)(e),[""])})),void D((function(e){return[].concat((0,x.Z)(e),[""])}))},children:"+"})]},e)}))})}})}),(0,y.jsx)("button",{type:"submit",className:"".concat(_.btn," ").concat(_.modalSubmitButton),children:t("submit")})]})})]})}),(0,y.jsx)(v.N,{isOpen:L,close:z,body:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("p",{children:[t("are you sure"),"???"]}),(0,y.jsxs)("div",{className:_.delModalWrapper,children:[(0,y.jsx)("button",{onClick:z,className:_.btn,children:t("cancel")}),(0,y.jsx)("button",{onClick:function(){n((0,l.Ir)(e))},className:"".concat(_.btn," ").concat(_.delBtn),children:t("delete")})]})]})})]})},C=function(e){var n=e.components,t=(0,a.v9)(o._).array,s=(0,m.$G)().t,c=(0,u.useState)(0),r=(0,i.Z)(c,2),l=r[0],d=r[1],p=(0,u.useState)(0),h=(0,i.Z)(p,2),f=h[0],x=h[1],b=(0,u.useCallback)((function(e){return t&&0!==t.length?t.find((function(n){return n._id===e})):{_id:"",name:"",price:0,currency:"USD",units:"\u0448\u0442"}}),[t]);(0,u.useEffect)((function(){var e=0,t=0;n.forEach((function(n){var i=b(n.id).price*n.quantity;"\u0433\u0440\u043d"===b(n.id).currency?e+=i:t+=i})),d(Math.round(e)),x(Math.round(t))}),[n,b]);try{return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("p",{children:[s("product components"),":"]}),(0,y.jsx)("ul",{children:n.map((function(e){return(0,y.jsx)("li",{children:(0,y.jsx)("p",{children:"".concat(b(e.id).name," - ").concat(e.quantity," ").concat(b(e.id).units)})},e.id)}))}),(0,y.jsx)("p",{children:"".concat(s("total"),": ").concat(l,"\u0433\u0440\u043d, $").concat(f)})]})}catch(j){return(0,y.jsx)("p",{children:"not found"})}},F=t(4253),k=[{value:"140",label:"140 x 200(190)"},{value:"160",label:"160 x 200(190)"},{value:"180",label:"180 x 200(190)"},{value:"200",label:"200 x 200(190)"}],P=function(){var e=(0,a.I0)(),n=(0,h.a)(),t=n.user,f=n.isLoggedIn,x=(0,u.useState)({value:"160",label:"160 x 200(190)"}),b=(0,i.Z)(x,2),j=b[0],_=b[1],v=(0,s.UO)().id,N=(0,a.v9)(r.K),g=(0,a.v9)(o._),P=(0,m.$G)().t,Z=N.dimensions.width-160,w=N.basePrice;return(0,u.useEffect)((function(){e((0,l.wv)(v)),f&&0===g.length&&e((0,F.sd)())}),[e,g.length,f,v]),(0,y.jsxs)("div",{className:d.section,children:[(0,y.jsx)("h1",{className:d.title,children:N.name}),(0,y.jsx)(c.lr,{showIndicators:!1,children:N.images.map((function(e){return(0,y.jsx)("div",{children:(0,y.jsx)("img",{src:e,alt:N.name})},e)}))}),"bed"===N.group?(0,y.jsxs)("div",{className:d.baseInfoWrapper,children:[(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("sleeping area"),":"]}),(0,y.jsx)(p.ZP,{defaultValue:j,onChange:_,options:k}),(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("overall size"),":"]}),(0,y.jsxs)("p",{children:[Number(j.value)+Number(Z)," x ",N.dimensions.depth,"(",N.dimensions.depth-10,")"]}),(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("price"),":"]}),(0,y.jsxs)("p",{className:d.price,children:[w," \u20b4"]})]}):(0,y.jsxs)("div",{className:d.baseInfoWrapper,children:[(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("overall size"),":"]}),(0,y.jsxs)("p",{children:[N.dimensions.depth," x ",N.dimensions.width," x ",N.dimensions.height]}),(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("price"),":"]}),(0,y.jsxs)("p",{className:d.price,children:[N.basePrice," \u20b4"]})]}),(0,y.jsxs)("p",{className:d.baseInfoTitle,children:[P("description"),":"]}),(0,y.jsx)("p",{children:N.description}),f?"administrator"===t.description&&(0,y.jsxs)("div",{className:d.adminBlock,children:[(0,y.jsx)(C,{components:N.components}),(0,y.jsx)(I,{id:v})]}):(0,y.jsx)(y.Fragment,{})]})};function Z(){return(0,y.jsx)(P,{})}},5536:function(e,n,t){t.d(n,{_:function(){return i}});var i=function(e){return e.components.items}},9654:function(e,n,t){t.d(n,{K:function(){return s},q:function(){return i}});var i=function(e){return e.products.items},s=function(e){return e.products.activeItem}}}]);
//# sourceMappingURL=241.25bdc2a5.chunk.js.map