"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[45],{9870:function(e,r,t){t.d(r,{K:function(){return j}});var n="Order_wrapper__hSe-H",a="Order_onePart__z8EQC",i="Order_twoPart__kW2Wj",c="Order_done__PAJ0w",o="Order_number__YkUyJ",s="Order_discription__O8Cz6",l="Order_orderName__2RZDO",u="Order_orderDeadline__N6MRk",d="Order_orderFabric__Dd6Qe",f="Order_orderDealer__Dw2lE",p="Order_backgroundBlue__WKiIX",_="Order_backgroundGreen__-mewF",h=t(4420),m=t(4217),v=t(4805),x=t(7689),b=t(184),j=function(e){var r=e.order,t=new Date(r.plannedDeadline)||"",j=(0,h.v9)(m.dy),g=(0,v.useMediaQuery)({query:"(max-width: 833px)"}),y=!1,O=d,A=n;return"/furniture-production-frontend/archive"===(0,x.oQ)()&&(y=!0),"ordered"===r.fabricStatus?O="".concat(d," ").concat(p):"received"===r.fabricStatus&&(O="".concat(d," ").concat(_)),"TRUE"===r.orderStatus?A="".concat(n," ").concat(c):"TRUE"===r.coverStatus&&"TRUE"===r.frameStatus?A="".concat(n," ").concat(i):"TRUE"!==r.coverStatus&&"TRUE"!==r.frameStatus||(A="".concat(n," ").concat(a)),(0,b.jsxs)("div",{className:A,children:[(0,b.jsx)("p",{className:o,children:r.number}),(0,b.jsxs)("div",{className:s,children:[(0,b.jsxs)("p",{className:l,children:[!g&&r.group," ",r.name]}),"administrator"===j.description||"seamstress"===j.description?(0,b.jsx)("p",{className:O,children:r.fabric}):(0,b.jsx)(b.Fragment,{}),g&&(0,b.jsx)("p",{className:u,children:"".concat(t.getDate(),".").concat(t.getMonth()+1,".").concat(t.getFullYear())}),y&&(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:r.size}),(0,b.jsxs)("p",{children:[r.innerPrice,"\u0433\u0440\u043d."]})]}),!y&&(0,b.jsx)("p",{className:f,children:r.dealer})]})]})}},381:function(e,r,t){t.d(r,{N:function(){return l}});var n=t(3439),a=t(7948),i=t.n(a),c="PopUp_modalCloseButton__m06-1",o="PopUp_menuIcon__5-11v",s=t(184),l=function(e){var r=e.isOpen,t=e.close,a=e.body;return(0,s.jsxs)(i(),{isOpen:r,onRequestClose:t,style:{overlay:{backgroundColor:"rgba(9, 9, 9, 0.75)",position:"fixed",top:0,left:0,right:0,bottom:0,display:"flex",justifyContent:"center",alignItems:"center"},content:{position:"relative",top:"auto",left:"auto",right:"auto",bottom:"auto",minWidth:"300px",maxWidth:"80%",width:"auto",maxHeight:"80%",padding:"50px 20px",borderRadius:"12px",border:"2px solid black",backgroundColor:"FFF",transition:"top 0.3s ease-in-out"}},ariaHideApp:!1,children:[(0,s.jsx)("button",{className:c,type:"button",onClick:t,children:(0,s.jsx)("svg",{className:o,children:(0,s.jsx)("use",{href:"".concat(n.Z,"#icon-close-circle")})})}),a]})}},7896:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(2791),a=t(4420),i=t(3050),c=t(8384),o=t(9439),s=t(8363),l=t.n(s),u=t(7689),d=t(1087),f=t(9870),p=t(381),_=t(5294),h=t(9230),m=t(6502),v={list:"ArchiveList_list__kUBZi",item:"ArchiveList_item__W2rxm",orderLink:"ArchiveList_orderLink__jiaZs",navigation:"ArchiveList_navigation__PIeb6",addOrderBtn:"ArchiveList_addOrderBtn__tbpel",formWrapper:"ArchiveList_formWrapper__7jKX5",formItem:"ArchiveList_formItem__qilck",label:"ArchiveList_label__Ibfb8",field:"ArchiveList_field__WLwn8",formError:"ArchiveList_formError__-MYhv",filter:"ArchiveList_filter__QHXAV",btn:"ArchiveList_btn__zLlYh",toArchive:"ArchiveList_toArchive__gfnSQ",searchInput:"ArchiveList_searchInput__TtHrx",pcs:"ArchiveList_pcs__TrvNg",dateWrapper:"ArchiveList_dateWrapper__UWXhS",dayTitle:"ArchiveList_dayTitle__JGP7B",dateItem:"ArchiveList_dateItem__NChKT"},x=t(5842),b=t(4805),j=t(184);_.Z.defaults.baseURL="http://localhost:3030/";var g=function(){var e=(0,h.$G)().t,r=(0,b.useMediaQuery)({query:"(max-width: 833px)"}),t=(0,a.v9)((function(e){return e.orders.archiveFilter})),i=(0,a.v9)((function(e){return e.orders.archiveSearch})),s=(0,n.useState)(!1),_=(0,o.Z)(s,2),g=_[0],y=_[1],O=(0,u.TH)(),A=(0,a.I0)(),L=(0,a.v9)(m.NH),w=(0,a.v9)(m.Hz),N=[],C=w.allOrdersArray,k=[],S=[{value:"",label:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e"}];w.allOrdersArray&&(w.allOrdersArray.forEach((function(e,r){N.push({value:"".concat(e.dealer),label:"".concat(e.dealer)})})),N.forEach((function(e){S.some((function(r){return r.value.toLowerCase()===e.value.toLowerCase()}))||S.push(e)})));var P=C&&0!==C.length?C.filter((function(e){return(0===t.length||t.some((function(r){return r.value.toLowerCase()===e.dealer.toLowerCase()})))&&(""===i||e.name.toLowerCase().includes(i.toLowerCase()))})):[];function E(e){var r=new Date(e),t=r.getMonth()+1;return"".concat(r.getDate().toString().padStart(2,"0"),".").concat(t.toString().padStart(2,"0"),".").concat(r.getFullYear())}r||P.forEach((function(e,r){var t=E(e.plannedDeadline);!k.includes(t)&&k.push(t)}));var I=function(){return r?(0,j.jsx)("ul",{className:v.list,children:P.map((function(e){var r=e._id;return(0,j.jsx)("li",{className:v.item,children:(0,j.jsx)(d.rU,{to:"".concat(r),state:{from:O},className:v.orderLink,onClick:function(){return A((0,c.zH)(w.allOrdersArray.find((function(e){return e._id===r}))))},children:(0,j.jsx)(f.K,{id:r,order:w.allOrdersArray.find((function(e){return e._id===r}))})})},r)}))}):(0,j.jsx)("ul",{className:v.list,children:k.map((function(e){return(0,j.jsxs)("li",{className:v.dateItem,children:[(0,j.jsx)("p",{className:v.dayTitle,children:e}),(0,j.jsx)("ul",{className:"".concat(v.list," ").concat(v.dateWrapper),children:P.map((function(r){var t=r._id;return E(r.plannedDeadline)===e&&(0,j.jsx)("li",{className:v.item,children:(0,j.jsx)(d.rU,{to:"".concat(t),state:{from:O},className:v.orderLink,onClick:function(){return A((0,c.zH)(w.allOrdersArray.find((function(e){return e._id===t}))))},children:(0,j.jsx)(f.K,{id:t,order:w.allOrdersArray.find((function(e){return e._id===t}))})})},t)}))})]},e)}))})};return(0,j.jsxs)("div",{className:v.container,children:[(0,j.jsxs)("div",{className:v.navigation,children:[(0,j.jsx)(x.ZP,{className:v.filter,isMulti:!0,name:"filter",id:"filter",onChange:function(e){return A((0,c.Ay)(e))},options:S.sort((function(e,r){return e.label.localeCompare(r.label)})),defaultValue:t,placeholder:e("dealers filter")}),(0,j.jsx)("input",{className:v.searchInput,defaultValue:i,placeholder:e("search"),onChange:function(e){return A((0,c.Yz)(e.target.value))}}),(0,j.jsxs)("p",{className:v.pcs,children:[P.length," \u0448\u0442."]})]}),L?(0,j.jsx)(l(),{color:"#c8c19b",cssOverride:{marginTop:"15px",display:"flex",justifyContent:"center"}}):(0,j.jsx)(j.Fragment,{}),0!==P.length?(0,j.jsx)(I,{}):(0,j.jsx)(j.Fragment,{}),(0,j.jsx)(p.N,{isOpen:g,close:function(){y(!1),document.body.classList.remove("modal-open")},body:(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:v.modalWrapper})})})]})};function y(){var e=(0,a.I0)();return(0,n.useEffect)((function(){e((0,c.zH)({})),e((0,c.T)())}),[e]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(i.B6,{children:[(0,j.jsx)(i.ql,{children:(0,j.jsx)("title",{children:"Archive"})}),(0,j.jsx)(g,{})]})})}},6502:function(e,r,t){t.d(r,{Hz:function(){return a},NH:function(){return c},ST:function(){return i},pi:function(){return n}});var n=function(e){return e.orders.items},a=function(e){return e.orders.archive},i=function(e){return e.orders.activeItem},c=function(e){return e.orders.isLoading}},8363:function(e,r,t){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},n.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&!("get"in a?!r.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,n,a)}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),i=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&a(r,e,t);return i(r,e),r},o=this&&this.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t};Object.defineProperty(r,"__esModule",{value:!0});var s=c(t(2791)),l=t(8945),u=(0,t(7074).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");r.default=function(e){var r=e.loading,t=void 0===r||r,a=e.color,i=void 0===a?"#000000":a,c=e.speedMultiplier,d=void 0===c?1:c,f=e.cssOverride,p=void 0===f?{}:f,_=e.size,h=void 0===_?15:_,m=e.margin,v=void 0===m?2:m,x=o(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),b=n({display:"inherit"},p),j=function(e){return{backgroundColor:i,width:(0,l.cssValue)(h),height:(0,l.cssValue)(h),margin:(0,l.cssValue)(v),borderRadius:"100%",display:"inline-block",animation:"".concat(u," ").concat(.75/d,"s ").concat(.12*e/d,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return t?s.createElement("span",n({style:b},x),s.createElement("span",{style:j(1)}),s.createElement("span",{style:j(2)}),s.createElement("span",{style:j(3)})):null}},7074:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.createAnimation=void 0;r.createAnimation=function(e,r,t){var n="react-spinners-".concat(e,"-").concat(t);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var i=a.sheet,c="\n    @keyframes ".concat(n," {\n      ").concat(r,"\n    }\n  ");return i&&i.insertRule(c,0),n}},8945:function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.cssValue=r.parseLengthAndUnit=void 0;var t={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var r,n=(e.match(/^[0-9.]*/)||"").toString();r=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return t[a]?{value:r,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(r,"px.")),{value:r,unit:"px"})}r.parseLengthAndUnit=n,r.cssValue=function(e){var r=n(e);return"".concat(r.value).concat(r.unit)}}}]);
//# sourceMappingURL=45.d0c5a2a2.chunk.js.map