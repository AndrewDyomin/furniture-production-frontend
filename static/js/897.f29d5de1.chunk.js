"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[897],{897:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(2791),i=n(4420),c=n(3050),o=n(5612),a=n(4253),s=n(6502),u=n(9439),l=n(3433),d=n(8363),f=n.n(d),p=n(7689),v=n(1087),m=n(9654),_="Product_wrapper__zXe1e",h="Product_image__vFGeO",b="Product_name__UUMEE",y="Product_size__D6VwJ",j=n(184),g=function(t){var e=t.id,n=(0,i.v9)(m.q).array.find((function(t){return t._id===e}));return(0,j.jsxs)("div",{className:_,children:[(0,j.jsx)("img",{src:n.images[0],alt:"".concat(n.name),className:h}),(0,j.jsxs)("div",{children:[(0,j.jsx)("p",{className:b,children:n.name}),(0,j.jsxs)("p",{className:y,children:[n.dimensions.width," x ",n.dimensions.depth]})]})]})},x={list:"ProductList_list__FKEtV",item:"ProductList_item__PNktw",productLink:"ProductList_productLink__Krgk2",btn:"ProductList_btn__9cmzX",activeBtn:"ProductList_activeBtn__Ox2VE"},O=n(9230),P=function(){var t=(0,i.I0)(),e=(0,O.$G)().t,n=(0,i.v9)(m.q),c=n.array?(0,l.Z)(n.array):[],a=(0,p.UO)().filter,s=(0,r.useState)(void 0!==a?[a]:["bed","sofa"]),d=(0,u.Z)(s,2),_=d[0],h=d[1];n.array&&(c=n.array.filter((function(t){return _.includes(t.group)})));var b=function(t){_.includes(t)?h((function(e){return e.filter((function(e){return e!==t}))})):h((function(e){return[].concat((0,l.Z)(e),[t])}))};return(0,j.jsxs)("div",{className:x.container,children:[(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{onClick:function(){return b("sofa")},className:_.includes("sofa")?"".concat(x.btn," ").concat(x.activeBtn):"".concat(x.btn),children:e("sofas")}),(0,j.jsx)("button",{onClick:function(){return b("bed")},className:_.includes("bed")?"".concat(x.btn," ").concat(x.activeBtn):"".concat(x.btn),children:e("beds")})]}),0!==n.length?(0,j.jsx)("ul",{className:x.list,children:c.map((function(e){var r=e._id;return(0,j.jsx)("li",{className:x.item,children:(0,j.jsx)(v.rU,{to:"/product-details/".concat(r),className:x.productLink,onClick:function(){return t((0,o.Qb)(n.array.find((function(t){return t._id===r}))))},children:(0,j.jsx)(g,{id:r})})},r)}))}):(0,j.jsx)(f(),{color:"#c8c19b",cssOverride:{position:"absolute",top:"20%",left:"50%"}})]})};function w(){var t=(0,i.I0)(),e=(0,i.v9)(s.NH);return(0,r.useEffect)((function(){t((0,o.aP)()),t((0,a.sd)())}),[t]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(c.B6,{children:[(0,j.jsx)(c.ql,{children:(0,j.jsx)("title",{children:"Our products"})}),(0,j.jsx)("div",{children:e&&"Request in progress..."}),(0,j.jsx)(P,{})]})})}},6502:function(t,e,n){n.d(e,{NH:function(){return c},ST:function(){return i},pi:function(){return r}});var r=function(t){return t.orders.items},i=function(t){return t.orders.activeItem},c=function(t){return t.orders.isLoading}},9654:function(t,e,n){n.d(e,{K:function(){return i},q:function(){return r}});var r=function(t){return t.products.items},i=function(t){return t.products.activeItem}},8363:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(t,e,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);i&&!("get"in i?!e.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]}),c=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&i(e,t,n);return c(e,t),e},a=this&&this.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};Object.defineProperty(e,"__esModule",{value:!0});var s=o(n(2791)),u=n(8945),l=(0,n(7074).createAnimation)("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse");e.default=function(t){var e=t.loading,n=void 0===e||e,i=t.color,c=void 0===i?"#000000":i,o=t.speedMultiplier,d=void 0===o?1:o,f=t.cssOverride,p=void 0===f?{}:f,v=t.size,m=void 0===v?15:v,_=t.margin,h=void 0===_?2:_,b=a(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=r({display:"inherit"},p),j=function(t){return{backgroundColor:c,width:(0,u.cssValue)(m),height:(0,u.cssValue)(m),margin:(0,u.cssValue)(h),borderRadius:"100%",display:"inline-block",animation:"".concat(l," ").concat(.75/d,"s ").concat(.12*t/d,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return n?s.createElement("span",r({style:y},b),s.createElement("span",{style:j(1)}),s.createElement("span",{style:j(2)}),s.createElement("span",{style:j(3)})):null}},7074:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.createAnimation=void 0;e.createAnimation=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var c=i.sheet,o="\n    @keyframes ".concat(r," {\n      ").concat(e,"\n    }\n  ");return c&&c.insertRule(o,0),r}},8945:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cssValue=e.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(t){if("number"===typeof t)return{value:t,unit:"px"};var e,r=(t.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(t.match(/[^0-9]*$/)||"").toString();return n[i]?{value:e,unit:i}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}e.parseLengthAndUnit=r,e.cssValue=function(t){var e=r(t);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=897.f29d5de1.chunk.js.map