(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{1953:function(e,s,l){Promise.resolve().then(l.bind(l,8195))},8195:function(e,s,l){"use strict";l.d(s,{default:function(){return x}});var c=l(7437),i=l(2265),t=l(1444),a=l(6920),n=l(5079),r=l(2680);function o(e){let{product:s}=e;return(0,t.v9)(e=>e.cart.products),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"",children:(0,c.jsx)(r.Z,{product:s})})})}function d(e){let{slug:s,fullscreen:l}=e,i=(0,t.v9)(e=>e.cart.categories);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"flex flex-col gap-4 w-full bg-white ",children:(0,c.jsx)("ul",{className:"block",children:Object.keys(i).map((e,s)=>{var l,t;return(0,c.jsxs)("li",{className:"block ml-4 border-b",children:[(0,c.jsx)("div",{className:"flex items-center justify-between  py-5",children:(0,c.jsx)("a",{href:"/ecom/browse/".concat(e),className:"block",children:i[e].name})}),Object.keys(null===(l=i[e])||void 0===l?void 0:l.subCategories).length>0?(0,c.jsx)("ul",{className:"hidden",children:Object.keys(null===(t=i[e])||void 0===t?void 0:t.subCategories).map((s,l)=>{var t;return(0,c.jsx)("li",{className:"block ml-4",children:(0,c.jsx)("a",{href:"",children:null===(t=i[e])||void 0===t?void 0:t.subCategories[s].name})},"k-".concat(l))})}):null]},"k-".concat(s))})})})})}function x(e){let{slug:s}=e,[l,r]=(0,i.useState)(!1),x=(0,t.v9)(e=>e.cart.categoricalProducts.hasOwnProperty(s)?e.cart.categoricalProducts[s]:e.cart.categoricalProducts.greens);return(0,i.useEffect)(()=>{console.log("slug",s)},[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"flex gap-8 relative",children:[(0,c.jsx)("div",{className:"w-[320px] h-screen overflow-auto sticky top-0 left-0 hidden lg:block",children:(0,c.jsx)(d,{fullscreen:l})}),(0,c.jsxs)("div",{className:"flex-1",children:[l&&(0,c.jsxs)("div",{className:"fixed top-0 left-0 w-screen h-screen overflow-auto z-[1000] bg-white p-8",children:[(0,c.jsxs)("div",{className:"flex justify-between",children:[(0,c.jsx)("div",{className:""}),(0,c.jsx)("button",{className:"",onClick:()=>{r(!1)},children:(0,c.jsx)(a.G,{icon:n.YIN})})]}),(0,c.jsx)(d,{fullscreen:l})]}),(0,c.jsxs)("div",{className:"flex justify-between items-center",children:[(0,c.jsx)("h2",{className:"text-4xl capitalize",children:s.replaceAll("-"," ")}),(0,c.jsx)("button",{className:"block lg:hidden",onClick:()=>{r(!0)},children:(0,c.jsx)(a.G,{icon:n.xiG})})]}),(0,c.jsx)("div",{className:""}),(0,c.jsx)("div",{className:"grid grid-cols-4 gap-8 my-12",children:x&&(null==x?void 0:x.map((e,l)=>(console.log(x[s],e),(0,c.jsx)("div",{className:" ",children:(0,c.jsx)(o,{product:e})},"k-".concat(l)))))})]})]})})}},2680:function(e,s,l){"use strict";l.d(s,{Z:function(){return x}});var c=l(7437),i=l(6920),t=l(1970),a=l(5079),n=l(8771),r=l(1444),o=l(9124);function d(e){let{children:s}=e;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"",children:(0,c.jsxs)("div",{className:"flex gap-2",children:[(0,c.jsx)(i.G,{icon:a.Tab,width:"1em",size:"xs",color:"gold"}),(0,c.jsx)(i.G,{icon:a.Tab,width:"1em",size:"xs",color:"gold"}),(0,c.jsx)(i.G,{icon:a.Tab,width:"1em",size:"xs",color:"gold"}),(0,c.jsx)(i.G,{icon:a.Tab,width:"1em",size:"xs",color:"gold"}),(0,c.jsx)(i.G,{icon:t.a1Y,width:"1em",size:"xs",color:"gold"})]})})})}function x(e){let{children:s,img:l="",product:a}=e,x=(0,r.v9)(e=>e.cart.wishlist);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"group relative",children:[(0,c.jsxs)("div",{className:"group relative z-[1]",children:[(0,c.jsxs)("figure",{className:"relative overflow-hidden rounded-lg flex items-center justify-center hxx-[250px] bg-gray-100 overflow-hidden",children:[(0,c.jsx)("a",{href:"/ecom/product/".concat(null==a?void 0:a.slug),className:"bg-white py-4 flex flex-col gap-1",title:a.name,children:(0,c.jsx)("img",{src:a.img,alt:"",className:"object-cover aspect-[12/14]"})}),(0,c.jsx)("div",{className:"flex items-center justify-center absolute bottom-0 mx-auto py-2 rounded-lg opacity-0 group-hover:opacity-[1] transition ease-in duration-[0.3s]",children:(0,c.jsx)(o.Z,{slug:null==a?void 0:a.slug})})]}),(0,c.jsxs)("a",{href:"/ecom/product/".concat(null==a?void 0:a.slug),className:"bg-white py-4 flex flex-col gap-1",title:a.name,children:[(0,c.jsx)("div",{className:"text-xs text-gray-400",children:a.category}),(0,c.jsx)("div",{className:"font-semibold",children:a.name}),(0,c.jsxs)("div",{className:"text-sm font-semibold",children:["$",a.price]}),(0,c.jsx)("div",{className:"mt-1",children:(0,c.jsx)(d,{})}),(0,c.jsx)("div",{className:"text-xs flex flex-wrap gap-2 mt-2"})]})]}),(0,c.jsx)("button",{className:"absolute right-4 top-4 z-[11]",onClick:e=>{console.log("toggleWishlist",null==a?void 0:a.slug),n.ZP.dispatch((0,n.nG)(null==a?void 0:a.slug))},children:(0,c.jsx)(i.G,{icon:t.m6i,style:{color:x.includes(null==a?void 0:a.slug)?"red":""}})})]})})}}},function(e){e.O(0,[676,444,928,920,706,124,971,23,744],function(){return e(e.s=1953)}),_N_E=e.O()}]);