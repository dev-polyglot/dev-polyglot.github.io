(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{9610:function(e,s,l){Promise.resolve().then(l.bind(l,7064))},356:function(e,s,l){"use strict";l.d(s,{default:function(){return r}});var t=l(7437),n=l(6648),c=l(9620);let i=e=>{let{src:s}=e;return s};function r(e){let{alt:s,src:l,width:r,height:a,...d}=e;return(0,t.jsx)(n.default,{...d,loader:i,placeholder:"blur",blurDataURL:"/blur.png",loading:"lazy",alt:s||"",src:"".concat((0,c.Z)()).concat(l.replace("/","")),width:r||1e3,height:a||1e3})}},9124:function(e,s,l){"use strict";l.d(s,{Z:function(){return a}});var t=l(7437),n=l(1444),c=l(6920),i=l(5079),r=l(8771);function a(e){var s;let{slug:l}=e,a=(0,n.v9)(e=>e.cart.cart),d=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+";r.ZP.dispatch((0,r.Xq)({slug:e,op:s}))};return(0,t.jsx)(t.Fragment,{children:a.hasOwnProperty(l)?(0,t.jsx)("div",{className:"my-4",children:(0,t.jsxs)("div",{className:"flex items-center gap-8 rounded-full bg-white overflow-hidden border w-[min-content] px-4 py-2 ",children:[(0,t.jsx)("button",{className:"",onClick:()=>{d(l,"-")},children:(0,t.jsx)(c.G,{icon:i.Kl4})}),(0,t.jsx)("div",{className:"",children:a.hasOwnProperty(l)&&(null===(s=a[l])||void 0===s?void 0:s.quantity)||0}),(0,t.jsx)("button",{className:"",onClick:()=>{d(l,"+")},children:(0,t.jsx)(c.G,{icon:i.r8p})})]})}):(0,t.jsx)("div",{className:"my-4",children:(0,t.jsx)("button",{className:"border px-6 py-2 rounded-full bg-white",onClick:()=>{d(l)},children:"Add To Cart"})})})}},7064:function(e,s,l){"use strict";var t=l(7437),n=l(8771),c=l(1444),i=l(9124),r=l(356);s.default=(0,c.$j)(function(e){return{wishlist:e.cart.wishlist}})(function(e){let{slug:s,wishlist:l}=e,a=(0,c.v9)(e=>e.cart.products);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"relative w-full",children:[l.map((e,s)=>{let l=a[e];return(0,t.jsx)("div",{className:" border-b mb-2 py-2",children:(0,t.jsxs)("div",{className:"flex gap-8 justify-between",children:[(0,t.jsxs)("div",{className:"flex gap-8",children:[(0,t.jsx)("div",{className:"h-24 w-24 flex justify-center items-center mb-4",children:(0,t.jsx)(r.default,{src:null==l?void 0:l.img,className:"object-cover w-full h-full bg-white"})}),(0,t.jsx)("div",{className:" mb-2",children:l.name})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-between text-right",children:[(0,t.jsxs)("div",{className:" mb-2",children:["$",l.price]}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-6 text-sm ",children:[(0,t.jsx)("button",{className:" ",onClick:()=>{n.ZP.dispatch((0,n.$f)(l.slug))},children:"Remove"}),(0,t.jsx)("div",{className:" ",children:(0,t.jsx)(i.Z,{slug:l.slug})})]})]})]})},"k-".concat(s))}),0==l.length?(0,t.jsxs)("div",{className:"h-[calc(100vh-40vh)] w-full bg-gray-100 flex items-center justify-center py-8",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)("h2",{className:"text-5xl",children:"Wishlist empty!"})}),(0,t.jsx)("div",{className:""})]}):null]})})})}},function(e){e.O(0,[676,444,928,920,648,771,971,23,744],function(){return e(e.s=9610)}),_N_E=e.O()}]);