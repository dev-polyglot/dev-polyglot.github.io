(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{7745:function(e,s,l){Promise.resolve().then(l.bind(l,8987))},8987:function(e,s,l){"use strict";l.d(s,{default:function(){return B}});var a=l(7437),r=l(2265),n=l(6765),i=l(9033);function d(){let e=(0,r.useRef)(!1);return(0,i.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var t=l(6219),o=l(7797),c=l(458),u=l(9791);class m extends r.Component{getSnapshotBeforeUpdate(e){let s=this.props.childRef.current;if(s&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=s.offsetHeight||0,e.width=s.offsetWidth||0,e.top=s.offsetTop,e.left=s.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function g({children:e,isPresent:s}){let l=(0,r.useId)(),n=(0,r.useRef)(null),i=(0,r.useRef)({width:0,height:0,top:0,left:0}),{nonce:d}=(0,r.useContext)(u._);return(0,r.useInsertionEffect)(()=>{let{width:e,height:a,top:r,left:t}=i.current;if(s||!n.current||!e||!a)return;n.current.dataset.motionPopId=l;let o=document.createElement("style");return d&&(o.nonce=d),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${r}px !important;
            left: ${t}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[s]),(0,a.jsx)(m,{isPresent:s,childRef:n,sizeRef:i,children:r.cloneElement(e,{ref:n})})}let p=({children:e,initial:s,isPresent:l,onExitComplete:n,custom:i,presenceAffectsLayout:d,mode:t})=>{let u=(0,c.h)(h),m=(0,r.useId)(),p=(0,r.useMemo)(()=>({id:m,initial:s,isPresent:l,custom:i,onExitComplete:e=>{for(let s of(u.set(e,!0),u.values()))if(!s)return;n&&n()},register:e=>(u.set(e,!1),()=>u.delete(e))}),d?[Math.random()]:[l]);return(0,r.useMemo)(()=>{u.forEach((e,s)=>u.set(s,!1))},[l]),r.useEffect(()=>{l||u.size||!n||n()},[l]),"popLayout"===t&&(e=(0,a.jsx)(g,{isPresent:l,children:e})),(0,a.jsx)(o.O.Provider,{value:p,children:e})};function h(){return new Map}var v=l(5050),f=l(9047);let x=e=>e.key||"",j=({children:e,custom:s,initial:l=!0,onExitComplete:n,exitBeforeEnter:o,presenceAffectsLayout:c=!0,mode:u="sync"})=>{var m;(0,f.k)(!o,"Replace exitBeforeEnter with mode='wait'");let g=(0,r.useContext)(v.p).forceRender||function(){let e=d(),[s,l]=(0,r.useState)(0),a=(0,r.useCallback)(()=>{e.current&&l(s+1)},[s]);return[(0,r.useCallback)(()=>t.Wi.postRender(a),[a]),s]}()[0],h=d(),j=function(e){let s=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&s.push(e)}),s}(e),y=j,b=(0,r.useRef)(new Map).current,N=(0,r.useRef)(y),w=(0,r.useRef)(new Map).current,C=(0,r.useRef)(!0);if((0,i.L)(()=>{C.current=!1,function(e,s){e.forEach(e=>{let l=x(e);s.set(l,e)})}(j,w),N.current=y}),m=()=>{C.current=!0,w.clear(),b.clear()},(0,r.useEffect)(()=>()=>m(),[]),C.current)return(0,a.jsx)(a.Fragment,{children:y.map(e=>(0,a.jsx)(p,{isPresent:!0,initial:!!l&&void 0,presenceAffectsLayout:c,mode:u,children:e},x(e)))});y=[...y];let k=N.current.map(x),R=j.map(x),S=k.length;for(let e=0;e<S;e++){let s=k[e];-1!==R.indexOf(s)||b.has(s)||b.set(s,void 0)}return"wait"===u&&b.size&&(y=[]),b.forEach((e,l)=>{if(-1!==R.indexOf(l))return;let r=w.get(l);if(!r)return;let i=k.indexOf(l),d=e;d||(d=(0,a.jsx)(p,{isPresent:!1,onExitComplete:()=>{b.delete(l);let e=Array.from(w.keys()).filter(e=>!R.includes(e));if(e.forEach(e=>w.delete(e)),N.current=j.filter(s=>{let a=x(s);return a===l||e.includes(a)}),!b.size){if(!1===h.current)return;g(),n&&n()}},custom:s,presenceAffectsLayout:c,mode:u,children:r},x(r)),b.set(l,d)),y.splice(i,0,d)}),y=y.map(e=>{let s=e.key;return b.has(s)?e:(0,a.jsx)(p,{isPresent:!0,presenceAffectsLayout:c,mode:u,children:e},x(e))}),(0,a.jsx)(a.Fragment,{children:b.size?y:y.map(e=>(0,r.cloneElement)(e))})};function y(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{className:"px-4 py-3 w-full rounded-lg mb-6 shadow",...e})})})}function b(e){let{getFormValues:s,cancel:l,addressForm:n={}}=e,i=(0,r.useRef)(null),d=(0,r.useRef)(null),t=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(null),u=(0,r.useRef)(null),m=(0,r.useRef)(null),g=(0,r.useRef)(null),p=(0,r.useRef)(null),h=(0,r.useRef)(null),v=()=>{var e,s,l,a,r,n,v,f,x,j;return{country:null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.value,first_name:null==d?void 0:null===(s=d.current)||void 0===s?void 0:s.value,last_name:null==t?void 0:null===(l=t.current)||void 0===l?void 0:l.value,address1:null==o?void 0:null===(a=o.current)||void 0===a?void 0:a.value,address2:null==c?void 0:null===(r=c.current)||void 0===r?void 0:r.value,po_box:null==u?void 0:null===(n=u.current)||void 0===n?void 0:n.value,city:null==m?void 0:null===(v=m.current)||void 0===v?void 0:v.value,region:null==g?void 0:null===(f=g.current)||void 0===f?void 0:f.value,postal_code:null==p?void 0:null===(x=p.current)||void 0===x?void 0:x.value,mobile_number:null==h?void 0:null===(j=h.current)||void 0===j?void 0:j.value}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4 my-4",children:(0,a.jsxs)("select",{className:"px-6 py-3 bg-white shadow",ref:i,value:null==n?void 0:n.country,onChange:()=>{},children:[(0,a.jsx)("option",{value:"",children:"Country"}),(0,a.jsx)("option",{value:"india",children:"India"}),(0,a.jsx)("option",{value:"us",children:"US"})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"First Name",ref:d,value:null==n?void 0:n.first_name,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Last Name",ref:t,value:null==n?void 0:n.last_name,onChange:()=>{}})]}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsx)("textarea",{placeholder:"Street Address",rows:1,className:"col-span-2 p-4",ref:o,value:null==n?void 0:n.address1,onChange:()=>{}})}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsx)("textarea",{placeholder:"Address 2",rows:1,className:"col-span-2 p-4",ref:c,value:null==n?void 0:n.address2,onChange:()=>{}})}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-4",children:(0,a.jsxs)("label",{className:"flex items-center gap-2 p-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"checkbox",ref:u,checked:(null==n?void 0:n.po_box)=="on",onChange:()=>{}})}),(0,a.jsx)("div",{className:"",children:"PO Box"})]})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"City",ref:m,value:null==n?void 0:n.city,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Province/Region",ref:g,value:null==n?void 0:n.region,onChange:()=>{}})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,a.jsx)(y,{placeholder:"Postal Code",ref:p,value:null==n?void 0:n.postal_code,onChange:()=>{}}),(0,a.jsx)(y,{placeholder:"Mobile Number",ref:h,value:null==n?void 0:n.mobile_number,onChange:()=>{}})]})]}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{l()},children:"Cancel"}),(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{s(v())},children:"Save"})]})]})})}var N=l(8771),w=l(1444),C=l(6920),k=l(5079);function R(e){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{className:"px-4 py-3 w-full rounded-lg mb-6 shadow",...e})})})}function S(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(R,{type:"password",placeholder:"Old Password"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)(R,{type:"password",placeholder:"New Password"})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)(R,{type:"password",placeholder:"Confirm Password"})}),(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",children:"Change Password"})})]})})}function P(e){let{getFormValues:s,cancel:l,addressForm:n={}}=e,i=(0,r.useRef)(null),d=(0,r.useRef)(null),t=(0,r.useRef)(null),o=(0,r.useRef)(null),c=(0,r.useRef)(null),u=(0,r.useRef)(null),m=()=>{var e,s,l,a,r,n;return{card_number:null==i?void 0:null===(e=i.current)||void 0===e?void 0:e.value,mm:null==d?void 0:null===(s=d.current)||void 0===s?void 0:s.value,yy:null==t?void 0:null===(l=t.current)||void 0===l?void 0:l.value,code:null==o?void 0:null===(a=o.current)||void 0===a?void 0:a.value,type:null==c?void 0:null===(r=c.current)||void 0===r?void 0:r.value,save:null==u?void 0:null===(n=u.current)||void 0===n?void 0:n.value}};return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(R,{placeholder:"XXXX-XXXX-XXXX-XXXX",ref:i})}),(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(R,{placeholder:"MM",ref:d})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(R,{placeholder:"YY",ref:t})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(R,{placeholder:"code",ref:o})})]}),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsxs)("label",{className:"flex gap-2 items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"radio",name:"card",value:"visa",ref:c})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{src:"/visa.png"})})]}),(0,a.jsxs)("label",{className:"flex gap-2 items-center",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("input",{type:"radio",name:"card",value:"mastercard",ref:c})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("img",{src:"/master-card.png"})})]})]})}),(0,a.jsxs)("div",{className:"flex items-c flex gap-2 my-4 mb-10",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"checkbox",ref:u})}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:"Save card for easy checkout."})})]})]})}),(0,a.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{l()},children:"Cancel"}),(0,a.jsx)("button",{className:"border px-6 py-3 rounded-full",onClick:()=>{s(m())},children:"Save"})]})]})}function X(){let[e,s]=(0,r.useState)({}),[l,n]=(0,r.useState)("list"),i=(0,w.v9)(e=>e.account.cards);return(0,r.useEffect)(()=>{console.log("getFormValues",e),Object.keys(e).length>0&&"add"==l&&(N.ZP.dispatch((0,N.BN)(e)),n("list"))},[e]),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h2",{className:"text-2xl my-6",children:"Payment"})}),(0,a.jsx)("div",{className:"",children:"list"==l?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Card"}):null}),(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("div",{className:"",children:i.map((e,s)=>(0,a.jsxs)("div",{className:"flex gap-4 border px-6 py-3",children:[(0,a.jsxs)("div",{className:"flex-1 w-full flex gap-2 items-center",children:["visa"==e.type?(0,a.jsx)("img",{src:"/visa.png"}):"mastercard"==e.type?(0,a.jsx)("img",{src:"/master-card.png"}):null,(0,a.jsx)("div",{className:"",children:"XXXX-XXXX-XXXX-".concat(e.card_number.slice(-4))})]}),(0,a.jsx)("div",{className:"flex items-center gap-2",children:(0,a.jsx)("button",{className:" ",onClick:()=>{N.ZP.dispatch((0,N.yJ)(s))},children:"Remove"})})]},"k-".concat(s)))}):(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-sm my-6",children:"No cards avaialable, please add one."})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Card"})})]})})]}):null}),(0,a.jsx)("div",{className:"",children:"add"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(P,{getFormValues:e=>{s(e)},cancel:()=>{n("list")}})}):null})]})})}function E(){let[e,s]=(0,r.useState)({}),[l,n]=(0,r.useState)("list"),i=(0,w.v9)(e=>e.account.addresses),d=e=>{s(e)},t=()=>{n("list")};return(0,r.useEffect)(()=>{console.log("getFormValues",e),Object.keys(e).length>0&&"add"==l&&(N.ZP.dispatch((0,N.y$)(e)),n("list"))},[e]),(0,a.jsx)("div",{className:"",children:(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("h2",{className:"text-2xl my-6",children:"Delivery Addresses"})}),(0,a.jsx)("div",{className:"",children:"list"==l?(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Address"}):null}),(0,a.jsx)("div",{className:"",children:i&&i.length>0?(0,a.jsx)("div",{className:"",children:i.map((e,l)=>(0,a.jsxs)("div",{className:"flex gap-4 border px-6 py-3",children:[(0,a.jsxs)("div",{className:"flex-1 w-full",children:[(0,a.jsxs)("div",{className:"",children:[e.first_name," ",e.last_name]}),(0,a.jsx)("div",{className:"",children:e.address1}),(0,a.jsx)("div",{className:""})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("button",{className:" ",onClick:()=>{n("edit"),s(e)},children:"Edit"})," |",(0,a.jsx)("button",{className:" ",onClick:()=>{N.ZP.dispatch((0,N.Ro)(l))},children:"Remove"})]})]},"k-".concat(l)))}):(0,a.jsxs)("div",{className:"flex gap-4",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)("p",{className:"text-sm my-6",children:"No address avaialable, please add a delivery address."})}),(0,a.jsx)("div",{className:"",children:(0,a.jsx)("button",{className:"text-sm my-6",onClick:()=>{n("add")},children:"+Add Address"})})]})})]}):null}),(0,a.jsx)("div",{className:"",children:"add"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(b,{getFormValues:d,cancel:t})}):null}),(0,a.jsx)("div",{className:"",children:"edit"==l?(0,a.jsx)("div",{className:"",children:(0,a.jsx)(b,{getFormValues:d,cancel:t,addressForm:e})}):null})]})})}function O(e){let{child:s}=e;return"change-password"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(S,{})}):"payment"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(X,{})}):"address"==s?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(E,{})}):(0,a.jsx)(a.Fragment,{})}let[_,F,A]=[{icon:(0,a.jsx)(C.G,{icon:k.dLO}),label:"Addresses",child:"address"},{icon:(0,a.jsx)(C.G,{icon:k.Ozh}),label:"Payments",child:"payment"},{icon:(0,a.jsx)(C.G,{icon:k.DD4}),label:"Change Password",child:"change-password"}],M=[_,F,A];function B(){let[e,s]=(0,r.useState)(M[0]);return(0,r.useEffect)(()=>{s(M[0])},[M]),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("nav",{className:"h-12 border-b bg-white px-1 pt-1",children:(0,a.jsx)("ul",{className:"flex w-full flex-1 items-end justify-start grow-1 h-full ",children:M.map(l=>(0,a.jsxs)("li",{className:l===e?"selected  p-2 h-full w-full flex bg-gray-100 relative":" p-2 h-full w-full flex relative",onClick:()=>s(l),children:[l.icon," ",(0,a.jsx)("span",{className:"pl-2",children:" ".concat(l.label)}),l===e?(0,a.jsx)(n.E.div,{className:"underline",layoutId:"underline"}):null]},l.label))})}),(0,a.jsx)("main",{className:"flex items-center jusify-center grow-1 bg-white p-4 ",children:(0,a.jsx)(j,{mode:"wait",children:(0,a.jsx)(n.E.div,{initial:{y:0,opacity:0},animate:{y:0,opacity:1},exit:{y:-0,opacity:0},transition:{duration:.2},className:"w-full",children:(0,a.jsx)(O,{child:null==e?void 0:e.child})},e?e.label:"empty")})})]})}},8771:function(e,s,l){"use strict";l.d(s,{BN:function(){return E},Dj:function(){return A},Ro:function(){return P},UY:function(){return C},Xp:function(){return y},Xq:function(){return N},nG:function(){return w},s1:function(){return k},wJ:function(){return b},y$:function(){return R},yJ:function(){return X}});var a=l(5154),r=l(6804),n=l(1046),i=l(5574);(0,l(4643).MD)();let d={key:"root",storage:n.Z},t={brassica:{slug:"brassica",name:"Brassica",img:"/images/greens/char-beck-5eM6sRTCCUc-unsplash.jpg",subCategories:{cabbage:{slug:"cabbage",name:"Cabbage"},broccoli:{slug:"broccoli",name:"Broccoli"},"brussels-sprouts":{slug:"brussels-sprouts",name:"Brussels Sprouts"},"bok-choy":{slug:"bok-choy",name:"Bok Choy"},kohlrabi:{slug:"kohlrabi",name:"Kohlrabi"},cauliflower:{slug:"cauliflower",name:"Cauliflower"},radicchio:{slug:"radicchio",name:"Radicchio"},turnips:{slug:"turnips",name:"Turnips"},"mustard-greens":{slug:"mustard-greens",name:"Mustard Greens"},"collard-greens":{slug:"collard-greens",name:"Collard Greens"},watercress:{slug:"watercress",name:"Watercress"},arugula:{slug:"arugula",name:"Arugula"}}},fungus:{slug:"fungus",name:"Fungus",img:"/images/fungus/j-yeo-Rx5SQ4a1CA4-unsplash.jpg",subCategories:{"button-mushroom":{slug:"button-mushroom",name:"Button Mushroom"},shiitake:{slug:"shiitake",name:"Shiitake"},portabella:{slug:"portabella",name:"Portabella"},porcini:{slug:"porcini",name:"Porcini"}}},"roots-and-tubers":{slug:"roots-and-tubers",name:"Roots And Tubers",img:"/images/greens/christina-rumpf-sj-wTHJs9qU-unsplash.jpg",subCategories:{carrots:{slug:"carrots",name:"Carrots"},radishes:{slug:"radishes",name:"Radishes"},onions:{slug:"onions",name:"Onions"},potatoes:{slug:"potatoes",name:"Potatoes"},okra:{slug:"okra",name:"Okra"}}},greens:{slug:"greens",name:"Greens",img:"/images/greens/brian-mcgowan-w46WZBxI_uk-unsplash.jpg",subCategories:{spinach:{slug:"spinach",name:"Spinach"},watercress:{slug:"watercress",name:"Watercress"},radicchio:{slug:"radicchio",name:"Radicchio"},kale:{slug:"kale",name:"Kale"},"swiss-chard":{slug:"swiss-chard",name:"Swiss Chard"}}},fruits:{slug:"fruits",name:"Fruits",img:"/images/fruits/mockup-graphics-KfX5c9TxYPg-unsplash.jpg",subCategories:{spinach:{slug:"spinach",name:"Spinach"},watercress:{slug:"watercress",name:"Watercress"},radicchio:{slug:"radicchio",name:"Radicchio"},kale:{slug:"kale",name:"Kale"},"swiss-chard":{slug:"swiss-chard",name:"Swiss Chard"}}}},o={"dragon-fruit":{slug:"dragon-fruit",name:"Dragon Fruit",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/dragon-fruit.jpg"},apple:{slug:"apple",name:"Apple",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/amit-lahav-rxN2MRdFJVg-unsplash.jpg",bestseller:!0},grape:{slug:"grape",name:"Grape",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/mockup-graphics-KfX5c9TxYPg-unsplash.jpg",bestseller:!0},strawberry:{slug:"strawberry",name:"Strawberry",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/isaac-quesada-DYbr5utVs8s-unsplash.jpg"},blueberry:{slug:"blueberry",name:"Blueberry",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/eiliv-aceron--D6xO2LUVdk-unsplash.jpg"},pomgrenate:{slug:"pomgrenate",name:"Pomgrenate",category:"fruits",price:7.34,msp:10.34,img:"/images/fruits/mockup-graphics-XiWQbLEhFyo-unsplash.jpg"},mushroom1:{slug:"mushroom1",name:"mushroom1",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/beth-macdonald-xHwRfau81rE-unsplash.jpg"},mushroom2:{slug:"mushroom2",name:"mushroom2",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/blackieshoot-b_XBdFNi7FE-unsplash.jpg",bestseller:!0},mushroom3:{slug:"mushroom3",name:"mushroom3",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/bryony-elena-XTHbvHuZNNM-unsplash.jpg"},mushroom4:{slug:"mushroom4",name:"mushroom4",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/dennis-scherdt-afvdKrcS09M-unsplash.jpg",bestseller:!0},mushroom5:{slug:"mushroom5",name:"mushroom5",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/j-yeo-Rx5SQ4a1CA4-unsplash.jpg"},mushroom6:{slug:"mushroom6",name:"mushroom6",category:"fungus",price:7.34,msp:10.34,img:"/images/fungus/rachel-horton-kitchlew-FSLmk8OBhtg-unsplash.jpg"},green1:{slug:"green1",name:"green1",category:"greens",price:7.34,msp:10.34,img:"/images/greens/brian-mcgowan-w46WZBxI_uk-unsplash.jpg",bestseller:!0},green2:{slug:"green2",name:"green2",category:"greens",price:7.34,msp:10.34,img:"/images/greens/char-beck-5eM6sRTCCUc-unsplash.jpg"},green3:{slug:"green3",name:"green3",category:"greens",price:7.34,msp:10.34,img:"/images/greens/christina-rumpf-sj-wTHJs9qU-unsplash.jpg",bestseller:!0},green4:{slug:"green4",name:"green4",category:"greens",price:7.34,msp:10.34,img:"/images/greens/olya-JTIJEcmw0HA-unsplash.jpg"},green5:{slug:"green5",name:"green5",category:"greens",price:7.34,msp:10.34,img:"/images/greens/2.jpg"},green6:{slug:"green6",name:"green6",category:"greens",price:7.34,msp:10.34,img:"/images/greens/3.jpg"},green7:{slug:"green7",name:"green7",category:"greens",price:7.34,msp:10.34,img:"/images/greens/5.jpg"}},c=(e,s)=>{let l=[];return Object.keys(e).forEach(a=>{var r;(null===(r=e[a])||void 0===r?void 0:r.category)==s&&l.push(e[a])}),l},u={};Object.keys(t).forEach(e=>{}),u.fruits=c(o,"fruits"),u.fungus=c(o,"fungus"),u.greens=c(o,"greens");let m=(0,a.oM)({name:"cart",initialState:{categories:t,categoricalProducts:u,products:o,cart:{},wishlist:[]},reducers:{setSidebarOpened:(e,s)=>{e.sidebarOpened=!!s.payload},toggleWishlist:(e,s)=>{if(e.wishlist.includes(s.payload)){let l=[];for(let a=0;a<e.wishlist.length;a++)e.wishlist[a]!=s.payload&&l.push(e.wishlist[a]);e.wishlist=[...l]}else e.wishlist=[...e.wishlist,s.payload]},addToCart:(e,s)=>{var l,a,r,n,i,d,t,o,c,u,m,g,p,h,v,f;let x={};x[null===(l=s.payload)||void 0===l?void 0:l.slug]={slug:null===(a=s.payload)||void 0===a?void 0:a.slug,quantity:1},e.cart.hasOwnProperty(null===(r=s.payload)||void 0===r?void 0:r.slug)?((null===(n=s.payload)||void 0===n?void 0:n.op)&&(null===(i=s.payload)||void 0===i?void 0:i.op)=="+"&&(x[null===(d=s.payload)||void 0===d?void 0:d.slug].quantity=e.cart[null===(t=s.payload)||void 0===t?void 0:t.slug].quantity+1),(null===(o=s.payload)||void 0===o?void 0:o.op)&&(null===(c=s.payload)||void 0===c?void 0:c.op)=="-"&&(x[null===(u=s.payload)||void 0===u?void 0:u.slug].quantity=e.cart[null===(m=s.payload)||void 0===m?void 0:m.slug].quantity-1),x[null===(g=s.payload)||void 0===g?void 0:g.slug].quantity=x[null===(p=s.payload)||void 0===p?void 0:p.slug].quantity<0?0:x[null===(h=s.payload)||void 0===h?void 0:h.slug].quantity,0==x[null===(v=s.payload)||void 0===v?void 0:v.slug].quantity?(delete e.cart[null===(f=s.payload)||void 0===f?void 0:f.slug],e.cart={...e.cart}):e.cart={...e.cart,...x}):e.cart={...e.cart,...x}},emptyCart:e=>{e.cart={}}}}),g=(0,a.oM)({name:"account",initialState:{username:"",email:"",password:"",firstName:"",lastName:"",address:[],payments:[],orders:{},addresses:[],cards:[]},reducers:{setUserName:(e,s)=>{e.username=s.payload},placeOrder:(e,s)=>{console.log("placeOrder",s.payload,{...e.orders,...s.payload}),e.orders={...e.orders,...s.payload}},changePassword:(e,s)=>{var l,a,r,n;(null==s?void 0:null===(l=s.payload)||void 0===l?void 0:l.old_password)==e.password&&(null==s?void 0:null===(a=s.payload)||void 0===a?void 0:a.password)==(null==s?void 0:null===(r=s.payload)||void 0===r?void 0:r.confirm_password)&&(e.password=null==s?void 0:null===(n=s.payload)||void 0===n?void 0:n.password)},addAddress:(e,s)=>{e.addresses=[...e.addresses,null==s?void 0:s.payload]},removeAddress:(e,s)=>{let l=0,a=e.addresses.length,r=[];for(l=0;l<a;l++)l!==(null==s?void 0:s.payload)&&r.push(e.addresses[l]);e.addresses=r},addCards:(e,s)=>{e.cards=[...e.cards,null==s?void 0:s.payload]},removeCard:(e,s)=>{let l=0,a=e.cards.length,r=[];for(l=0;l<a;l++)l!==(null==s?void 0:s.payload)&&r.push(e.cards[l]);e.cards=r}}}),p=(0,a.oM)({name:"root",initialState:{width:0,height:0,sidebarOpened:!1,url:"/ecom",ecom:"/ecom",showSidebar:!1},reducers:{setWidth:(e,s)=>{e.width=s.payload},setHeight:(e,s)=>{e.height=s.payload},setSidebarOpened:(e,s)=>{e.sidebarOpened=!!s.payload},setShowSideBar:(e,s)=>{e.showSidebar=!!s.payload},toggleSidebar:e=>{console.log("showSidebar",e.showSidebar),e.showSidebar=!e.showSidebar},closeSidebar:e=>{e.showSidebar=!1},openSidebar:e=>{e.showSidebar=!0}}}),{setWidth:h,setHeight:v,setSidebarOpened:f,setShowSideBar:x,toggleSidebar:j,closeSidebar:y,openSidebar:b}=p.actions,{addToCart:N,toggleWishlist:w,emptyCart:C}=m.actions,{placeOrder:k,addAddress:R,changePassword:S,removeAddress:P,removeCard:X,addCards:E}=g.actions,O=(0,r.UY)({root:p.reducer,cart:m.reducer,account:g.reducer}),_=(0,i.OJ)(d,O),F=(0,a.xC)({reducer:_,middleware:e=>e({serializableCheck:{ignoredActions:[i._P,i.I2,i.E7,i.ex,i.e,i.Nz]}})});s.ZP=F;let A=(0,i.p5)(F)}},function(e){e.O(0,[676,444,928,920,765,971,23,744],function(){return e(e.s=7745)}),_N_E=e.O()}]);