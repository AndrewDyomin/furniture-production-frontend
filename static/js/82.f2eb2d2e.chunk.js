"use strict";(self.webpackChunkfurniture_production_frontend=self.webpackChunkfurniture_production_frontend||[]).push([[82],{8082:function(t,i,e){e.r(i);var n=e(1413),r=e(9439),o=e(2791),s=e(1178),h=e(184),d=(0,o.forwardRef)((function(t,i){var e=t.dimensions,d=t.productWidth,c=t.productDepth,u=t.activeModules,x=t.setActiveModules,a=(0,o.useState)(1),l=(0,r.Z)(a,2),k=l[0],f=l[1],m=(0,o.useRef)(null),y=c*k,g=d*k,p=e.width/2,w=e.height/2,j=u.some((function(t){return"ARML"===t.id}))&&u.some((function(t){return"ARMR"===t.id}));(0,o.useEffect)((function(){var t=Math.min(.7*e.width/d,.7*e.height/c);(t>0||t!==k)&&f(t)}),[e,d,c,k]),(0,o.useImperativeHandle)(i,(function(){return{getImage:function(){return m.current.toDataURL({mimeType:"image/jpeg",quality:1})}}}));var R=(0,o.useMemo)((function(){return[{id:"FM01",name:"\u043c\u043e\u0434\u0443\u043b\u044c",position:{x:p,y:w},height:120,width:100,mark:function(t,i,e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.x1,{points:[t.x,t.y+8*k,t.x+e/2,t.y+3*k,t.x+e,t.y+8*k],stroke:"black",strokeWidth:1,closed:!1,lineJoin:"round",tension:.7}),(0,h.jsx)(s.UL,{x:t.x,y:t.y+8*k,width:e,height:i/6,stroke:"black",strokeWidth:1,cornerRadius:2}),(0,h.jsx)(s.UL,{x:t.x,y:t.y+i/6+8*k,width:e,height:i-(i/6+8*k),stroke:"black",strokeWidth:1,cornerRadius:4})]})}},{id:"ARML",name:"\u043f\u043e\u0434\u043b\u043e\u043a\u043e\u0442\u043d\u0438\u043a \u043b\u0435\u0432\u044b\u0439",position:{x:p,y:w},height:120,width:17.5,mark:function(t,i,e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.x1,{points:[t.x+2.5*k,t.y,t.x,t.y+i/2,t.x+2.5*k,t.y+i],stroke:"black",strokeWidth:1,closed:!1,lineJoin:"round",tension:1}),(0,h.jsx)(s.UL,{x:t.x+2.5*k,y:t.y,width:e-2.5*k,height:i,stroke:"black",strokeWidth:1,cornerRadius:[0,3,3,0]})]})}},{id:"ARMR",name:"\u043f\u043e\u0434\u043b\u043e\u043a\u043e\u0442\u043d\u0438\u043a \u043f\u0440\u0430\u0432\u044b\u0439",position:{x:p,y:w},height:120,width:17.5,mark:function(t,i,e){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s.x1,{points:[t.x+e-2.5*k,t.y,t.x+e,t.y+i/2,t.x+e-2.5*k,t.y+i],stroke:"black",strokeWidth:1,closed:!1,lineJoin:"round",tension:1}),(0,h.jsx)(s.UL,{x:t.x,y:t.y,width:e-2.5*k,height:i,stroke:"black",strokeWidth:1,cornerRadius:[3,0,0,3]})]})}},{id:"BKPL",name:"\u043f\u0440\u0438\u0441\u0442\u0435\u043d\u043e\u043a",position:{x:p,y:w},height:3,width:200,mark:function(t,i,e,n){return n?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(s.UL,{x:u[0]?p-g/2+u[0].width*k:0,y:t.y,width:u[0]?g-u[0].width*k+u[u.length-2].width*k:0,height:3*k,stroke:"black",strokeWidth:1,cornerRadius:[3,3,0,0]})}):(console.warn("not enough arms"),(0,h.jsx)(h.Fragment,{}))}}]}),[p,w,k,u,g]);return(0,o.useEffect)((function(){var t=-g/2,i=w-y/2;if(0===u.length){var e=["ARML","FM01","FM01","ARMR","BKPL"].map((function(t){return R.find((function(i){return i.id===t}))})).filter(Boolean);x(e)}else if(u[0].position.x===p){var r={x:t,y:i},o=u.map((function(i,e){return 0!==e&&(t+=i.width*k),(0,n.Z)((0,n.Z)({},i),{},{position:r})}));x(o)}}),[u,x,k,R,p,w,y,g]),(0,h.jsx)("div",{children:(0,h.jsxs)(s.Hf,{ref:m,width:e.width,height:e.height,children:[(0,h.jsx)(s.mh,{children:(0,h.jsx)(s.UL,{x:0,y:0,width:e.width,height:e.height,fill:"#FFF"})}),function(){var t=p-g/2,i=w-y/2,e={},n=u.filter((function(t){return"FM01"===t.id}));return 0!==n.length&&(e.position={x:n[0].position.x,y:n[0].position.y},e.width=n[0].width+n[1].width),(0,h.jsx)(s.mh,{children:u.map((function(n,r){var o={x:t,y:i},d=n.height*k,c=n.width*k;return t+=n.width*k,i+=0,(0,h.jsx)(s.ZA,{children:"BKPL"===n.id?n.mark(e.position,d,c,j):n.mark(o,d,c,j)},r)}))})}(),(0,h.jsxs)(s.mh,{children:[(0,h.jsx)(s.x1,{points:[p+50,w+y/1.4,p+g/2,w+y/1.4],stroke:"black",strokeWidth:1,closed:!1}),(0,h.jsx)(s.x1,{points:[p-50,w+y/1.4,p-g/2,w+y/1.4],stroke:"black",strokeWidth:1,closed:!1}),(0,h.jsx)(s.xv,{x:p-50,y:w+y/1.4-9,text:d,width:100,align:"center",fontSize:18}),(0,h.jsx)(s.x1,{points:[p-g/1.7,w-y/2,p-g/1.7,w-50],stroke:"black",strokeWidth:1,closed:!1}),(0,h.jsx)(s.x1,{points:[p-g/1.7,w+50,p-g/1.7,w+y/2],stroke:"black",strokeWidth:1,closed:!1}),(0,h.jsx)(s.xv,{x:p-g/1.7-9,y:w+50,text:c,width:100,align:"center",rotation:270,fontSize:18})]})]})})}));i.default=d}}]);
//# sourceMappingURL=82.f2eb2d2e.chunk.js.map