"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[897],{897:function(t,n,e){e.r(n),e.d(n,{default:function(){return P}});var r=e(2791),i=e(4420),c=e(3050),a=e(5612),o=e(6502),u=e(9439),s=e(3433),l=e(8363),d=e.n(l),f=e(7689),p=e(1087),v=e(9654),m="Product_wrapper__zXe1e",b="Product_image__vFGeO",h="Product_name__UUMEE",_="Product_size__D6VwJ",y=e(184),j=function(t){var n=t.id,e=(0,i.v9)(v.q).array.find((function(t){return t._id===n}));return(0,y.jsxs)("div",{className:m,children:[(0,y.jsx)("img",{src:e.images[0],alt:"".concat(e.name),className:b}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:h,children:e.name}),(0,y.jsxs)("p",{className:_,children:[e.dimensions.width," x ",e.dimensions.depth]})]})]})},g={list:"ProductList_list__FKEtV",item:"ProductList_item__PNktw",productLink:"ProductList_productLink__Krgk2",btn:"ProductList_btn__9cmzX",activeBtn:"ProductList_activeBtn__Ox2VE",btnWrapper:"ProductList_btnWrapper__6rTj6"},x=e(9230),O=function(){var t=(0,i.I0)(),n=(0,x.$G)().t,e=(0,i.v9)(v.q),c=e.array?(0,s.Z)(e.array):[],o=(0,f.UO)().filter,l=(0,r.useState)(void 0!==o?[o]:["bed","sofa","banquette","pouf"]),m=(0,u.Z)(l,2),b=m[0],h=m[1];e.array&&(c=e.array.filter((function(t){return b.includes(t.group)})));var _=function(t){4===b.length&&h([t]),b.includes(t)&&b.length<4?h((function(n){return n.filter((function(n){return n!==t}))})):h((function(n){return[].concat((0,s.Z)(n),[t])}))};return(0,y.jsxs)("div",{className:g.container,children:[(0,y.jsxs)("div",{className:g.btnWrapper,children:[(0,y.jsx)("button",{onClick:function(){return _("sofa")},className:b.includes("sofa")?"".concat(g.btn," ").concat(g.activeBtn):"".concat(g.btn),children:n("sofas")}),(0,y.jsx)("button",{onClick:function(){return _("bed")},className:b.includes("bed")?"".concat(g.btn," ").concat(g.activeBtn):"".concat(g.btn),children:n("beds")}),(0,y.jsx)("button",{onClick:function(){return _("banquette")},className:b.includes("banquette")?"".concat(g.btn," ").concat(g.activeBtn):"".concat(g.btn),children:n("banquettes")}),(0,y.jsx)("button",{onClick:function(){return _("pouf")},className:b.includes("pouf")?"".concat(g.btn," ").concat(g.activeBtn):"".concat(g.btn),children:n("poufs")})]}),0!==e.length?(0,y.jsx)("ul",{className:g.list,children:c.map((function(n){var r=n._id;return(0,y.jsx)("li",{className:g.item,children:(0,y.jsx)(p.rU,{to:"/product-details/".concat(r),className:g.productLink,onClick:function(){return t((0,a.Qb)(e.array.find((function(t){return t._id===r}))))},children:(0,y.jsx)(j,{id:r})})},r)}))}):(0,y.jsx)(d(),{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%"}})]})};function P(){var t=(0,i.I0)(),n=(0,i.v9)(o.NH);return(0,r.useEffect)((function(){t((0,a.aP)())}),[t]),(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(c.B6,{children:[(0,y.jsx)(c.ql,{children:(0,y.jsx)("title",{children:"Our products"})}),(0,y.jsx)("div",{children:n&&"Request in progress..."}),(0,y.jsx)(O,{})]})})}},6502:function(t,n,e){e.d(n,{Hz:function(){return i},NH:function(){return a},ST:function(){return c},pi:function(){return r}});var r=function(t){return t.orders.items},i=function(t){return t.orders.archive},c=function(t){return t.orders.activeItem},a=function(t){return t.orders.isLoading}},9654:function(t,n,e){e.d(n,{K:function(){return i},q:function(){return r}});var r=function(t){return t.products.items},i=function(t){return t.products.activeItem}},8363:function(t,n,e){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e);var i=Object.getOwnPropertyDescriptor(n,e);i&&!("get"in i?!n.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return n[e]}}),Object.defineProperty(t,r,i)}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),c=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&i(n,t,e);return c(n,t),n},o=this&&this.__rest||function(t,n){var e={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(e[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)n.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(e[r[i]]=t[r[i]])}return e};Object.defineProperty(n,"__esModule",{value:!0});var u=a(e(2791)),s=e(8945),l=(0,e(7074).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");n.default=function(t){var n=t.loading,e=void 0===n||n,i=t.color,c=void 0===i?"#000000":i,a=t.speedMultiplier,d=void 0===a?1:a,f=t.cssOverride,p=void 0===f?{}:f,v=t.size,m=void 0===v?15:v,b=t.margin,h=void 0===b?2:b,_=o(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=r({display:"inherit"},p),j=function(t){return{backgroundColor:c,width:(0,s.cssValue)(m),height:(0,s.cssValue)(m),margin:(0,s.cssValue)(h),borderRadius:"100%",display:"inline-block",animation:"".concat(l," ").concat(.75/d,"s ").concat(.12*t/d,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return e?u.createElement("span",r({style:y},_),u.createElement("span",{style:j(1)}),u.createElement("span",{style:j(2)}),u.createElement("span",{style:j(3)})):null}},7074:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(t,n,e){var r="react-spinners-".concat(t,"-").concat(e);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var c=i.sheet,a="\n    @keyframes ".concat(r," {\n      ").concat(n,"\n    }\n  ");return c&&c.insertRule(a,0),r}},8945:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var e={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(t){if("number"===typeof t)return{value:t,unit:"px"};var n,r=(t.match(/^[0-9.]*/)||"").toString();n=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(t.match(/[^0-9]*$/)||"").toString();return e[i]?{value:n,unit:i}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=r,n.cssValue=function(t){var n=r(t);return"".concat(n.value).concat(n.unit)}}}]);
//# sourceMappingURL=897.5b2c5b17.chunk.js.map