(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{7745:function(e,s,l){Promise.resolve().then(l.bind(l,8987))},8987:function(e,s,l){"use strict";l.d(s,{default:function(){return A}});var a=l(7437),r=l(2265),n=l(6765),i=l(9033);function d(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var t=l(6219),c=l(7797),o=l(458),u=l(9791);class m extends r.Component{getSnapshotBeforeUpdate(e){let s=this.props.childRef.current;if(s&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=s.offsetHeight||0,e.width=s.offsetWidth||0,e.top=s.offsetTop,e.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:s}){let l=(0,r.useId)(),n=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,r.useContext)(u._);return(0,r.useInsertionEffect)(()=>{let{width:e,height:a,top:r,left:t}=i.current;if(s||!n.current||!e||!a)return;n.current.dataset.motionPopId=l;let c=document.createElement("style");return d&&(c.nonce=d),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${r}px !important;
            left: ${t}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[s]),(0,a.jsx)(m,{isPresent:s,childRef:n,sizeRef:i,children:r.cloneElement(e,{ref:n})})}let p=({children:e,initial:s,isPresent:l,onExitComplete:n,custom:i,presenceAffectsLayout:d,mode:t})=>{let u=(0,o.h)(v),m=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:m,initial:s,isPresent:l,custom:i,onExitComplete:e=>{for(let s of(u.set(e,!0),u.values()))if(!s)return;n&&n()},register:e=>(u.set(e,!1),()=>u.delete(e))}),d?[Math.random()]:[l]);return(0,r.useMemo)(()=>{u.forEach((e,s)=>u.set(s,!1))},[l]),r.useEffect(()=>{l||u.size||!n||n()},[l]),"popLayout"===t&&(e=(0,a.jsx)(h,{isPresent:l,children:e})),(0,a.jsx)(c.O.Provider,{value:p,children:e})};function v(){return new Map}var x=l(5050),f=l(9047);let g=e=>e.key||"",j=({children:e,custom:s,initial:l=!0,onExitComplete:n,exitBeforeEnter:c,presenceAffectsLayout:o=!0,mode:u="sync"})=>{var m;(0,f.k)(!c,"Replace exitBeforeEnter with mode='wait'");let h=(0,r.useContext)(x.p).forceRender||function(){let e=d(),[s,l]=(0,r.useState)(0),a=(0,r.useCallback)(()=>{e.current&&l(s+1)},[s]);return[(0,r.useCallback)(()=>t.Wi.postRender(a),[a]),s]}()[0],v=d(),j=function(e){let s=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&s.push(e)}),s}(e),y=j,N=(0,r.useRef)(new Map).current,b=(0,r.useRef)(y),w=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,i.L)(()=>{C.current=!1,function(e,s){e.forEach(e=>{let l=g(e);s.set(l,e)})}(j,w),b.current=y}),m=()=>{C.current=!0,w.clear(),N.clear()},(0,r.useEffect)(()=>()=>m(),[]),C.current)return(0,a.jsx)(a.Fragment,{children:y.map(e=>(0,a.jsx)(p,{isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:o,mode:u,children:e},g(e)))});y=[...y];let k=b.current.map(g),R=j.map(g),P=k.length;for(let e=0;e<P;e++){let s=k[e];-1!==R.indexOf(s)||N.has(s)||N.set(s,void 0)}return"wait"===u&&N.size&&(y=[]),N.forEach((e,l)=>{if(-1!==R.indexOf(l))return;let r=w.get(l);if(!r)return;let i=k.indexOf(l),d=e;d||(d=(0,a.jsx)(p,{isPresent:!1,onExitComplete:()=>{N.delete(l);let e=Array.from(w.keys()).filter(e=>!R.includes(e));if(e.forEach(e=>w.delete(e)),b.current=j.filter(s=>{let a=g(s);return a===l||e.includes(a)}),!N.size){if(!1===v.current)return;h(),n&&n()}},custom:s,presenceAffectsLayout:o,mode:u,children:r},g(r)),N.set(l,d)),y.splice(i,0,d)}),y=y.map(e=>{let s=e.key;return N.has(s)?e:(0,a.jsx)(p,{isPresent:!0,presenceAffectsLayout:o,mode:u,children:e},g(e))}),(0,a.jsx)(a.Fragment,{children:N.size?y:y.map(e=>(0,r.cloneElement)(e))})};function y(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{className:"px-4 py-3 w-full rounded-lg mb-6 shadow",...e})})})}function N(e){let{getFormValues:s,cancel:l,addressForm:n={}}=e,i=(0,r.useRef)(null),d=(0,r.useRef)(null),t=(0,r.useRef)(null),c=(0,r.useRef)(null),o=(0,r.useRef)(null),u=(0,r.useRef)(null),m=(0,r.useRef)(null),h=(0,r.useRef)(null),p=(0,r.useRef)(null),v=(0,r.useRef)(null),x=()=>{var e,s,l,a,r,n,x,f,g,j;return{country:null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.value,first_name:null==d?void 0:null===(s=d.current)||void 0===s?void 0:s.value,last_name:null==t?void 0:null===(l=t.current)||void 0===l?void 0:l.value,address1:null==c?void 0:null===(a=c.current)||void 0===a?void 0:a.value,address2:null==o?void 0:null===(r=o.current)||void 0===r?void 0:r.value,po_box:null==u?void 0:null===(n=u.current)||void 0===n?void 0:n.value,city:null==m?void 0:null===(x=m.current)||void 0===x?void 0:x.value,region:null==h?void 0:null===(f=h.current)||void 0===f?void 0:f.value,postal_code:null==p?void 0:null===(g=p.current)||void 0===g?void 0:g.value,mobile_number:null==v?void 0:null===(j=v.current)||void 0===j?void 0:j.value}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 my-4",children:(0,a.jsxs)("select",{className:"px-6 py-3 bg-white shadow",ref:i,value:null==n?void 0:n.country,onChange:()=>{},children:[(0,a.jsx)("option",{value:"",children:"Country"}),(0,a.jsx)("option",{value:"india",children:"India"}),(0,a.jsx)("option",{value:"us",children:"US"})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"First Name",ref:d,value:null==n?void 0:n.first_name,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Last Name",ref:t,value:null==n?void 0:n.last_name,onChange:()=>{}})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsx)("textarea",{placeholder:"Street Address",rows:1,className:"col-span-2 p-4",ref:c,value:null==n?void 0:n.address1,onChange:()=>{}})}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsx)("textarea",{placeholder:"Address 2",rows:1,className:"col-span-2 p-4",ref:o,value:null==n?void 0:n.address2,onChange:()=>{}})}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsxs)("label",{className:"flex items-center gap-2 p-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"checkbox",ref:u,checked:(null==n?void 0:n.po_box)=="on",onChange:()=>{}})}),(0,a.jsx)("div",{className:"",children:"PO Box"})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"City",ref:m,value:null==n?void 0:n.city,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Province/Region",ref:h,value:null==n?void 0:n.region,onChange:()=>{}})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"Postal Code",ref:p,value:null==n?void 0:n.postal_code,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Mobile Number",ref:v,value:null==n?void 0:n.mobile_number,onChange:()=>{}})]})]}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{l()},children:"Cancel"}),(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{s(x())},children:"Save"})]})]})})}var b=l(8771),w=l(1444);function C(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{className:"px-4 py-3 w-full rounded-lg mb-6 shadow",...e})})})}function k(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(C,{type:"password",placeholder:"Old Password"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)(C,{type:"password",placeholder:"New Password"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)(C,{type:"password",placeholder:"Confirm Password"})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",children:"Change Password"})})]})})}function R(e){let{getFormValues:s,cancel:l,addressForm:n={}}=e,i=(0,r.useRef)(null),d=(0,r.useRef)(null),t=(0,r.useRef)(null),c=(0,r.useRef)(null),o=(0,r.useRef)(null),u=(0,r.useRef)(null),m=()=>{var e,s,l,a,r,n;return{card_number:null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.value,mm:null==d?void 0:null===(s=d.current)||void 0===s?void 0:s.value,yy:null==t?void 0:null===(l=t.current)||void 0===l?void 0:l.value,code:null==c?void 0:null===(a=c.current)||void 0===a?void 0:a.value,type:null==o?void 0:null===(r=o.current)||void 0===r?void 0:r.value,save:null==u?void 0:null===(n=u.current)||void 0===n?void 0:n.value}};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(C,{placeholder:"XXXX-XXXX-XXXX-XXXX",ref:i})}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(C,{placeholder:"MM",ref:d})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(C,{placeholder:"YY",ref:t})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(C,{placeholder:"code",ref:c})})]}),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)("label",{className:"flex gap-2 items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"radio",name:"card",value:"visa",ref:o})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{src:"/visa.png"})})]}),(0,a.jsxs)("label",{className:"flex gap-2 items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"radio",name:"card",value:"mastercard",ref:o})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{src:"/master-card.png"})})]})]})}),(0,a.jsxs)("div",{className:"flex items-c flex gap-2 my-4 mb-10",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",ref:u})}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:"Save card for easy checkout."})})]})]})}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{l()},children:"Cancel"}),(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{s(m())},children:"Save"})]})]})}function P(){let[e,s]=(0,r.useState)({}),[l,n]=(0,r.useState)("list"),i=(0,w.v9)(e=>e.account.cards);return(0,r.useEffect)(()=>{console.log("getFormValues",e),Object.keys(e).length>0&&"add"==l&&(b.ZP.dispatch((0,b.BN)(e)),n("list"))},[e]),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h2",{className:"text-2xl my-6",children:"Payment"})}),(0,a.jsx)("div",{className:"",children:"list"==l?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Card"}):null}),(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("div",{className:"",children:i.map((e,s)=>(0,a.jsxs)("div",{className:"flex gap-4 border px-6 py-3",children:[(0,a.jsxs)("div",{className:"flex-1 w-full flex gap-2 items-center",children:["visa"==e.type?(0,a.jsx)("img",{src:"/visa.png"}):"mastercard"==e.type?(0,a.jsx)("img",{src:"/master-card.png"}):null,(0,a.jsx)("div",{className:"",children:"XXXX-XXXX-XXXX-".concat(e.card_number.slice(-4))})]}),(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsx)("button",{className:" ",onClick:()=>{b.ZP.dispatch((0,b.yJ)(s))},children:"Remove"})})]},"k-".concat(s)))}):(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-sm my-6",children:"No cards avaialable, please add one."})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Card"})})]})})]}):null}),(0,a.jsx)("div",{className:"",children:"add"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(R,{getFormValues:e=>{s(e)},cancel:()=>{n("list")}})}):null})]})})}function X(){let[e,s]=(0,r.useState)({}),[l,n]=(0,r.useState)("list"),i=(0,w.v9)(e=>e.account.addresses),d=e=>{s(e)},t=()=>{n("list")};return(0,r.useEffect)(()=>{console.log("getFormValues",e),Object.keys(e).length>0&&"add"==l&&(b.ZP.dispatch((0,b.y$)(e)),n("list"))},[e]),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h2",{className:"text-2xl my-6",children:"Delivery Addresses"})}),(0,a.jsx)("div",{className:"",children:"list"==l?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Address"}):null}),(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("div",{className:"",children:i.map((e,l)=>(0,a.jsxs)("div",{className:"flex gap-4 border px-6 py-3",children:[(0,a.jsxs)("div",{className:"flex-1 w-full",children:[(0,a.jsxs)("div",{className:"",children:[e.first_name," ",e.last_name]}),(0,a.jsx)("div",{className:"",children:e.address1}),(0,a.jsx)("div",{className:""})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("button",{className:" ",onClick:()=>{n("edit"),s(e)},children:"Edit"})," |",(0,a.jsx)("button",{className:" ",onClick:()=>{b.ZP.dispatch((0,b.Ro)(l))},children:"Remove"})]})]},"k-".concat(l)))}):(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-sm my-6",children:"No address avaialable, please add a delivery address."})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Address"})})]})})]}):null}),(0,a.jsx)("div",{className:"",children:"add"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(N,{getFormValues:d,cancel:t})}):null}),(0,a.jsx)("div",{className:"",children:"edit"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(N,{getFormValues:d,cancel:t,addressForm:e})}):null})]})})}function E(e){let{child:s}=e;return"change-password"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(k,{})}):"payment"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(P,{})}):"address"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(X,{})}):(0,a.jsx)(a.Fragment,{})}let[S,O,_]=[{icon:"\uD83C\uDF45",label:"Addresses",child:"address"},{icon:"\uD83E\uDD6C",label:"Payments",child:"payment"},{icon:"\uD83E\uDDC0",label:"Change Password",child:"change-password"}],F=[S,O,_];function A(){let[e,s]=(0,r.useState)(F[0]);return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("nav",{className:"h-12 border-b bg-white px-1 pt-1",children:(0,a.jsx)("ul",{className:"flex w-full flex-1 items-end justify-start grow-1 ",children:F.map(l=>(0,a.jsxs)("li",{className:l===e?"selected  p-2 h-[calc(100%-0.25rem)] w-full flex bg-gray-100 relative":" p-2 h-[calc(100%-0.25rem)] w-full flex relative",onClick:()=>s(l),children:["".concat(l.icon," ").concat(l.label),l===e?(0,a.jsx)(n.E.div,{className:"underline",layoutId:"underline"}):null]},l.label))})}),(0,a.jsx)("main",{className:"flex items-center jusify-center grow-1 bg-white p-4 ",children:(0,a.jsx)(j,{mode:"wait",children:(0,a.jsx)(n.E.div,{initial:{y:0,opacity:0},animate:{y:0,opacity:1},exit:{y:-0,opacity:0},transition:{duration:.2},className:"w-full",children:(0,a.jsx)(E,{child:null==e?void 0:e.child})},e?e.label:"empty")})})]})}},8771:function(e,s,l){"use strict";l.d(s,{BN:function(){return P},Dj:function(){return O},Ro:function(){return k},SN:function(){return f},UY:function(){return N},Xq:function(){return j},nG:function(){return y},s1:function(){return b},y$:function(){return w},yJ:function(){return R}});var a=l(5154),r=l(6804),n=l(1046),i=l(5574);(0,l(4643).MD)();let d={key:"root",storage:n.Z},t={brassica:{slug:"brassica",name:"Brassica",subCategories:{cabbage:{slug:"cabbage",name:"Cabbage"},broccoli:{slug:"broccoli",name:"Broccoli"},"brussels-sprouts":{slug:"brussels-sprouts",name:"Brussels Sprouts"},"bok-choy":{slug:"bok-choy",name:"Bok Choy"},kohlrabi:{slug:"kohlrabi",name:"Kohlrabi"},cauliflower:{slug:"cauliflower",name:"Cauliflower"},radicchio:{slug:"radicchio",name:"Radicchio"},turnips:{slug:"turnips",name:"Turnips"},"mustard-greens":{slug:"mustard-greens",name:"Mustard Greens"},"collard-greens":{slug:"collard-greens",name:"Collard Greens"},watercress:{slug:"watercress",name:"Watercress"},arugula:{slug:"arugula",name:"Arugula"}}},fungus:{slug:"fungus",name:"Fungus",subCategories:{"button-mushroom":{slug:"button-mushroom",name:"Button Mushroom"},shiitake:{slug:"shiitake",name:"Shiitake"},portabella:{slug:"portabella",name:"Portabella"},porcini:{slug:"porcini",name:"Porcini"}}},"roots-and-tubers":{slug:"roots-and-tubers",name:"Roots And Tubers",subCategories:{carrots:{slug:"carrots",name:"Carrots"},radishes:{slug:"radishes",name:"Radishes"},onions:{slug:"onions",name:"Onions"},potatoes:{slug:"potatoes",name:"Potatoes"},okra:{slug:"okra",name:"Okra"}}},greens:{slug:"greens",name:"Greens",subCategories:{spinach:{slug:"spinach",name:"Spinach"},watercress:{slug:"watercress",name:"Watercress"},radicchio:{slug:"radicchio",name:"Radicchio"},kale:{slug:"kale",name:"Kale"},"swiss-chard":{slug:"swiss-chard",name:"Swiss Chard"}}},fruits:{slug:"fruits",name:"Fruits",subCategories:{spinach:{slug:"spinach",name:"Spinach"},watercress:{slug:"watercress",name:"Watercress"},radicchio:{slug:"radicchio",name:"Radicchio"},kale:{slug:"kale",name:"Kale"},"swiss-chard":{slug:"swiss-chard",name:"Swiss Chard"}}}},c={"dragon-fruit":{slug:"dragon-fruit",name:"Dragon Fruit",category:"fruits",price:7.34,msp:10.34},cherry:{slug:"cherry",name:"Cherry",category:"fruits",price:7.34,msp:10.34},apple:{slug:"apple",name:"Apple",category:"fruits",price:7.34,msp:10.34},grape:{slug:"grape",name:"Grape",category:"fruits",price:7.34,msp:10.34},orange:{slug:"orange",name:"Orange",category:"fruits",price:7.34,msp:10.34}},o=(e,s)=>{let l=[];return Object.keys(e).forEach(a=>{var r;(null===(r=e[a])||void 0===r?void 0:r.category)==s&&l.push(e[a])}),l},u={};Object.keys(t).forEach(e=>{u[e]=o(c,"fruits")});let m=(0,a.oM)({name:"cart",initialState:{categories:t,categoricalProducts:u,products:c,cart:{},wishlist:[]},reducers:{setSidebarOpened:(e,s)=>{e.sidebarOpened=!!s.payload},toggleWishlist:(e,s)=>{if(e.wishlist.includes(s.payload)){let l=[];for(let a=0;a<e.wishlist.length;a++)e.wishlist[a]!=s.payload&&l.push(e.wishlist[a]);e.wishlist=[...l]}else e.wishlist=[...e.wishlist,s.payload]},addToCart:(e,s)=>{var l,a,r,n,i,d,t,c,o,u,m,h,p,v,x,f;let g={};g[null===(l=s.payload)||void 0===l?void 0:l.slug]={slug:null===(a=s.payload)||void 0===a?void 0:a.slug,quantity:1},e.cart.hasOwnProperty(null===(r=s.payload)||void 0===r?void 0:r.slug)?((null===(n=s.payload)||void 0===n?void 0:n.op)&&(null===(i=s.payload)||void 0===i?void 0:i.op)=="+"&&(g[null===(d=s.payload)||void 0===d?void 0:d.slug].quantity=e.cart[null===(t=s.payload)||void 0===t?void 0:t.slug].quantity+1),(null===(c=s.payload)||void 0===c?void 0:c.op)&&(null===(o=s.payload)||void 0===o?void 0:o.op)=="-"&&(g[null===(u=s.payload)||void 0===u?void 0:u.slug].quantity=e.cart[null===(m=s.payload)||void 0===m?void 0:m.slug].quantity-1),g[null===(h=s.payload)||void 0===h?void 0:h.slug].quantity=g[null===(p=s.payload)||void 0===p?void 0:p.slug].quantity<0?0:g[null===(v=s.payload)||void 0===v?void 0:v.slug].quantity,0==g[null===(x=s.payload)||void 0===x?void 0:x.slug].quantity?(delete e.cart[null===(f=s.payload)||void 0===f?void 0:f.slug],e.cart={...e.cart}):e.cart={...e.cart,...g}):e.cart={...e.cart,...g}},emptyCart:e=>{e.cart={}}}}),h=(0,a.oM)({name:"account",initialState:{username:"",email:"",password:"",firstName:"",lastName:"",address:[],payments:[],orders:{},addresses:[],cards:[]},reducers:{setUserName:(e,s)=>{e.username=s.payload},placeOrder:(e,s)=>{console.log("placeOrder",s.payload,{...e.orders,...s.payload}),e.orders={...e.orders,...s.payload}},changePassword:(e,s)=>{var l,a,r,n;(null==s?void 0:null===(l=s.payload)||void 0===l?void 0:l.old_password)==e.password&&(null==s?void 0:null===(a=s.payload)||void 0===a?void 0:a.password)==(null==s?void 0:null===(r=s.payload)||void 0===r?void 0:r.confirm_password)&&(e.password=null==s?void 0:null===(n=s.payload)||void 0===n?void 0:n.password)},addAddress:(e,s)=>{e.addresses=[...e.addresses,null==s?void 0:s.payload]},removeAddress:(e,s)=>{let l=0,a=e.addresses.length,r=[];for(l=0;l<a;l++)l!==(null==s?void 0:s.payload)&&r.push(e.addresses[l]);e.addresses=r},addCards:(e,s)=>{e.cards=[...e.cards,null==s?void 0:s.payload]},removeCard:(e,s)=>{let l=0,a=e.cards.length,r=[];for(l=0;l<a;l++)l!==(null==s?void 0:s.payload)&&r.push(e.cards[l]);e.cards=r}}}),p=(0,a.oM)({name:"root",initialState:{width:0,height:0,sidebarOpened:!1,url:"/ecom",ecom:"/ecom",showSidebar:!1},reducers:{setWidth:(e,s)=>{e.width=s.payload},setHeight:(e,s)=>{e.height=s.payload},setSidebarOpened:(e,s)=>{e.sidebarOpened=!!s.payload},setShowSideBar:(e,s)=>{e.showSidebar=!!s.payload}}}),{setWidth:v,setHeight:x,setSidebarOpened:f,setShowSideBar:g}=p.actions,{addToCart:j,toggleWishlist:y,emptyCart:N}=m.actions,{placeOrder:b,addAddress:w,changePassword:C,removeAddress:k,removeCard:R,addCards:P}=h.actions,X=(0,r.UY)({root:p.reducer,cart:m.reducer,account:h.reducer}),E=(0,i.OJ)(d,X),S=(0,a.xC)({reducer:E,middleware:e=>e({serializableCheck:{ignoredActions:[i._P,i.I2,i.E7,i.ex,i.e,i.Nz]}})});s.ZP=S;let O=(0,i.p5)(S)}},function(e){e.O(0,[444,928,765,971,23,744],function(){return e(e.s=7745)}),_N_E=e.O()}]);