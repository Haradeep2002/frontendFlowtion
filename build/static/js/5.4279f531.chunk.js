(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{30:function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return d}));var c=n(31),o=function(t){return fetch("".concat(c.a,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},r=function(t){return fetch("".concat(c.a,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},a=function(t,e){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(t)),e())},i=function(t){if("undefined"!==typeof window){var e=JSON.parse(localStorage.getItem("jwt")).token;return localStorage.removeItem("jwt"),t(),fetch("".concat(c.a,"/signout"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){console.log("signout",t)})).catch((function(t){return console.log(t)}))}},d=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))}},31:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c="https://flowtion.herokuapp.com/api"},34:function(t,e,n){"use strict";var c=n(0),o=n.n(c),r=n(12),a=n(1),i=n(30),d=n(35),s=n.n(d),l=n.p+"static/media/logo.2f2bf886.png",b=n(3),u=function(t,e){return t.location.pathname===e?{backgroundColor:"#131D5A",borderRadius:"30px",color:"white"}:{color:"black",fontWeight:"bolder"}};e.a=Object(a.g)((function(t){return Object(b.jsxs)("div",{style:{paddingBottom:"95px"},children:[Object(b.jsxs)("ul",{className:"nav nav-tabs justify-content-start ".concat(s.a.nav),style:{float:"left",width:"50%",margin:0,padding:0},children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",to:"/",children:Object(b.jsx)("img",{height:"80px",width:"200px",src:l})})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link mt-3",style:u(t.history,"/leaderboard"),to:"/leaderboard",children:"\ud83c\udfc6Leaderboard"})})]}),Object(b.jsxs)("ul",{className:"nav nav-tabs justify-content-end ".concat(s.a.nav),style:{float:"right",width:"50%",margin:"0",padding:"20px",paddingRight:"50px"},children:[!Object(i.b)()&&Object(b.jsxs)(o.a.Fragment,{children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",style:u(t.history,"/signin"),to:"/signin",children:"Signin"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(r.b,{className:"nav-link",style:u(t.history,"/signup"),to:"/signup",children:"Signup"})})]}),Object(i.b)()&&Object(b.jsx)("li",{className:"nav-item ",children:Object(b.jsx)("span",{className:"nav-link ".concat(s.a.signout),style:{cursor:"pointer",fontWeight:"bolder"},onClick:function(){return Object(i.d)((function(){t.history.push("/")}))},children:"Signout \ud83d\udeb6"})})]})]})}))},35:function(t,e,n){t.exports={nav:"Menu_nav__1G_lM",signout:"Menu_signout__1FMS3"}},36:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var c=n(31),o=function(t){return fetch("".concat(c.a,"/readAll"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},r=function(t,e){return fetch("".concat(c.a,"/update/").concat(t),{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},a=function(t){return fetch("".concat(c.a,"/readAllCat"),{method:"GET",headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},i=function(t){return fetch("".concat(c.a,"/read/").concat(t),{method:"GET"}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(33);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(0);var c=n(40),o=(n(42),n(3)),r={rectangle:function(t){var e=t.data;return Object(o.jsxs)("div",{style:{background:"yellow",padding:"1rem",border:"2px solid black"},children:[Object(o.jsx)(c.b,{type:"target",position:"top",id:"".concat(e.id,".top"),style:{borderRadius:0}}),Object(o.jsx)("div",{id:e.id,children:e.label}),Object(o.jsx)(c.b,{type:"source",position:"bottom",id:"".concat(e.id,".bottom"),style:{borderRadius:0}})]})},startNode:function(t){var e=t.data;return Object(o.jsxs)("div",{style:{background:"lightGreen",padding:"1rem",borderRadius:"50%",border:"2px solid black"},children:[Object(o.jsx)("div",{id:e.id,children:e.label}),Object(o.jsx)(c.b,{type:"source",position:"bottom",id:"".concat(e.id,".bottom"),style:{borderRadius:0}})]})},endNode:function(t){var e=t.data;return Object(o.jsxs)("div",{style:{background:"lightGreen",padding:"1rem",borderRadius:"50%",border:"2px solid black"},children:[Object(o.jsx)(c.b,{type:"target",position:"top",id:"".concat(e.id,".top"),style:{borderRadius:"0"}}),Object(o.jsx)("div",{id:e.id,children:e.label})]})},paraNode:function(t){var e=t.data;return Object(o.jsxs)("div",{style:{background:"lightBlue",padding:"1rem",transform:"skew(155deg)",border:"2px solid black"},children:[Object(o.jsx)(c.b,{type:"target",position:"top",id:"".concat(e.id,".top"),style:{borderRadius:0}}),Object(o.jsx)("div",{id:e.id,children:e.label}),Object(o.jsx)(c.b,{type:"source",position:"bottom",id:"".concat(e.id,".bottom"),style:{borderRadius:0}})]})},diamond:function(t){var e=t.data;return Object(o.jsxs)("div",{style:{background:"orange",transform:"rotate(45deg)",minWidth:"100px",minHeight:"100px",width:"60%",height:"60%",textAlign:"left",border:"2px solid black"},children:[Object(o.jsx)(c.b,{type:"target",position:"top",id:"".concat(e.id,".top"),style:{left:"0%",borderRadius:0}}),Object(o.jsx)(c.b,{type:"source",position:"top",id:"".concat(e.id,".top"),style:{left:"100%",borderRadius:0}}),Object(o.jsx)("div",{className:"mydiv",id:e.id,children:e.label}),Object(o.jsx)(c.b,{type:"source",position:"bottom",id:"".concat(e.id,".bottom"),style:{left:"0%",borderRadius:0}})]})}}},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(39);var o=n(37);function r(t){return function(t){if(Array.isArray(t))return Object(c.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},46:function(t,e,n){"use strict";var c=n(32),o=n(0),r=n(36),a=n(1),i=(n(43),n(3));e.a=Object(a.g)((function(t){var e=Object(o.useState)(!1),n=Object(c.a)(e,2),a=(n[0],n[1]),d=Object(o.useState)(!1),s=Object(c.a)(d,2),l=s[0],b=s[1];Object(o.useEffect)((function(){Object(r.c)().then((function(t){t.error?console.log("error occured"):a(t)}))}),[]);var u=function(){window.location.reload(!1)};return Object(i.jsxs)("div",{style:{height:"1000px"},children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("h2",{style:{marginLeft:"20%",color:"black",fontWeight:"bolder"},children:"Select a Flowchart"}),Object(i.jsx)("div",{style:{marginLeft:"80%"},children:Object(i.jsx)("button",{className:"text-white",style:{border:"2px solid black",backgroundColor:"black",color:"#001233",textDecoration:"none",padding:"10px"},onClick:u,children:"Go Back"})}),Object(i.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginLeft:"80px"},children:t.flow&&t.flow.map((function(e,n){return Object(i.jsx)("div",{style:{margin:"50px"},children:Object(i.jsx)("div",{className:"cards-list",children:Object(i.jsxs)("div",{class:"card 3",children:[Object(i.jsx)("div",{class:"card_image",children:Object(i.jsx)("img",{style:{backgroundColor:"#E4BCFE"},src:"https://media1.giphy.com/media/veOuvpRopgi8w0qZL9/giphy.gif?cid=790b76110cad0a93128f073275dc8536ddec9e7d86993d08&rid=giphy.gif&ct=s  "})}),Object(i.jsx)("div",{class:"card_title",children:Object(i.jsxs)("button",{type:"submit",value:e._id,onClick:function(e){return function(e){Object(r.b)(e.target.value).then((function(e){e.error?console.log("error occured"):(b(e),console.log(l),t.history.push("/display/".concat(e._id)))}))}(e)},children:["\ud83d\ude80",e.name]},n)})]})})},n)}))})]})}))},47:function(t,e,n){"use strict";var c=n(44),o=n(38),r=n(32),a=n(0),i=n(1),d=n(40),s=n(31),l=n(41),b=n(3);e.a=Object(i.g)((function(t){var e=Object(a.useState)([]),n=Object(r.a)(e,2),i=n[0],u=n[1],j=Object(a.useState)(""),f=Object(r.a)(j,2),h=f[0],O=f[1],p=Object(a.useState)(""),g=Object(r.a)(p,2),x=g[0],y=g[1],m=Object(a.useState)(""),v=Object(r.a)(m,2),w=v[0],k=v[1],S=Object(a.useState)(),C=Object(r.a)(S,2),N=C[0],W=C[1],E=Object(a.useState)(""),D=Object(r.a)(E,2),L=D[0],A=D[1],R=Object(a.useState)(),_=Object(r.a)(R,2),T=_[0],P=_[1],B=Object(a.useState)(""),G=Object(r.a)(B,2),J=G[0],F=G[1];Object(a.useEffect)((function(){N&&A(N.data.label)}),[N]);return Object(b.jsxs)("div",{style:{fontWeight:"bolder",backgroundColor:"white"},children:[Object(b.jsxs)("div",{style:{fontWeight:"bolder"},children:[Object(b.jsx)("h1",{style:{fontWeight:"bolder"},children:"Create Flow Chart"}),Object(b.jsx)("label",{style:{fontWeight:"bolder"},children:"Enter name of your flowchart :"}),Object(b.jsx)("input",{value:x,onChange:function(t){return y(t.target.value)},type:"text",placeholder:"flowchart name",style:{fontWeight:"bolder"}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{style:{fontWeight:"bolder"},children:"Enter the category  : "}),Object(b.jsx)("input",{value:w,onChange:function(t){return k(t.target.value)},type:"text",placeholder:"category",style:{fontWeight:"bolder"}}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{style:{fontWeight:"bolder"},children:"Enter hint  : "}),Object(b.jsx)("input",{value:J,onChange:function(t){return F(t.target.value)},type:"text",placeholder:"hint"})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{style:{height:"87vh",width:"87vw",border:"1px solid black",marginLeft:"6vw",backgroundColor:"#131D5A",fontWeight:"bolder"},children:[Object(b.jsxs)(d.e,{elements:i,onElementsRemove:function(t){u((function(e){return Object(d.f)(t,e)}))},onConnect:function(t){u((function(e){return Object(d.d)(t,e)}))},deleteKeyCode:8,onEdgeUpdate:function(t,e){return u((function(n){return Object(d.g)(t,e,n)}))},nodeTypes:l.a,snapToGrid:!0,snapGrid:[16,16],connectionLineStyle:{stroke:"black",strokeWidth:2},onDoubleClick:function(t){var e=t.target.outerHTML.toString(),n=e.indexOf(' id="');n+=5;var c=e.substr(n,13);i.forEach((function(t){t.id===c&&W(t)}))},onLoad:function(t){P(t),t.fitView()},children:[Object(b.jsx)(d.c,{nodeColor:function(t){switch(t.type){case"rectangle":return"red";case"startNode":return"#00ff00";case"endNode":return"rgb(0,0,255)";case"paraNode":return"rgb(120,120,120)";default:return"#eee"}}}),Object(b.jsx)(d.a,{})]}),Object(b.jsxs)("div",{style:{fontWeight:"bolder"},children:[Object(b.jsx)("input",{value:h,onChange:function(t){return O(t.target.value)},type:"text",placeholder:"Enter new node name",style:{fontWeight:"bolder"}}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t={id:"".concat(Date.now()),data:{label:"".concat(h)},type:"startNode",position:{x:0,y:0}};t.data=Object(o.a)(Object(o.a)({},t.data),{},{id:"".concat(t.id)}),u((function(e){return[].concat(Object(c.a)(e),[t])})),O("")},children:"Create Start Node"}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t={id:"".concat(Date.now()),data:{label:"".concat(h)},type:"rectangle",position:{x:0,y:0}};t.data=Object(o.a)(Object(o.a)({},t.data),{},{id:"".concat(t.id)}),u((function(e){return[].concat(Object(c.a)(e),[t])})),O("")},children:"Create Rectangle"}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t={id:"".concat(Date.now()),data:{label:"".concat(h)},type:"paraNode",position:{x:0,y:0}};t.data=Object(o.a)(Object(o.a)({},t.data),{},{id:"".concat(t.id)}),u((function(e){return[].concat(Object(c.a)(e),[t])})),O("")},children:"Create Paralellogram"}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t={id:"".concat(Date.now()),data:{label:"".concat(h)},type:"endNode",position:{x:0,y:0}};t.data=Object(o.a)(Object(o.a)({},t.data),{},{id:"".concat(t.id)}),u((function(e){return[].concat(Object(c.a)(e),[t])})),O("")},children:"Create End Node"}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t={id:"".concat(Date.now()),data:{label:"".concat(h)},type:"diamond",position:{x:100,y:0}};t.data=Object(o.a)(Object(o.a)({},t.data),{},{id:"".concat(t.id)});var e={id:"".concat(Date.now()+1),data:{label:"Yes"},type:"rectangle",position:{x:0,y:100}};e.data=Object(o.a)(Object(o.a)({},e.data),{},{id:"".concat(e.id)});var n={id:"".concat(Date.now()+2),data:{label:"No"},type:"rectangle",position:{x:200,y:100}};n.data=Object(o.a)(Object(o.a)({},n.data),{},{id:"".concat(n.id)});var r={id:"".concat(Date.now()+3),source:"".concat(t.id),sourceHandle:"".concat(t.id,".bottom"),target:"".concat(e.id),targetHandle:"".concat(e.id,".top"),flg:1},a={id:"".concat(Date.now()+4),source:"".concat(t.id),sourceHandle:"".concat(t.id,".top"),target:"".concat(n.id),targetHandle:"".concat(n.id,".top"),flg:1};u((function(o){return[].concat(Object(c.a)(o),[t,e,n,r,a])})),console.log(i),O("")},children:"Create Diamond"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:L,onChange:function(t){return A(t.target.value)},type:"text",style:{fontWeight:"bolder"}}),Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){N&&u(i.map((function(t){return t.id===N.id?Object(o.a)(Object(o.a)({},t),{},{data:{label:L,id:t.data.id}}):t})))},children:"Update"})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{style:{fontWeight:"bolder"},type:"button",onClick:function(){var t,e={};e.nodes=T.getElements(),e.name=x,e.category=w,e.hint=J,(t=JSON.stringify(e),fetch("".concat(s.a,"/saveflow"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:t}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))).then((function(t){t.error||(console.log(t),alert("changes saved"))}))},children:"Save changes"})})]})]})}))},49:function(t,e,n){"use strict";n.r(e);var c=n(32),o=n(0),r=n(12),a=n(34),i=n(36),d=n(3);e.default=function(t){var e=Object(o.useState)(!1),n=Object(c.a)(e,2),s=n[0],l=n[1],b=Object(o.useState)(!1),u=Object(c.a)(b,2),j=u[0],f=u[1];Object(o.useEffect)((function(){h(t.match.params.id)}),[]);var h=function(t){Object(i.b)(t).then((function(t){t.error||(t.leaderboard.sort((function(t,e){return t.time>e.time?1:e.time>t.time?-1:0})),f(t.name),l(t.leaderboard),console.log(t.leaderboard))}))};return Object(d.jsxs)("div",{style:{backgroundColor:"rgba(5, 0, 255, 0.4)"},children:[Object(d.jsx)(a.a,{children:"  "}),Object(d.jsxs)("div",{style:{width:"100%",height:"1000px",display:"flex",flexWrap:"wrap"},children:[Object(d.jsxs)("ul",{style:{listStyle:"none"},children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("h1",{style:{fontWeight:"bolder"},children:["Leaderboard of ",j]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),s&&s.map((function(t,e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:Object(d.jsxs)("div",{style:{backgroundColor:"#131D5A",color:"white",padding:"10px",textAlign:"center",marginLeft:"80px",fontSize:"25px",height:"70px",borderRadius:"10px"},children:[t.name," | ",t.time," seconds"]})},e),Object(d.jsx)("br",{})]})}))]}),Object(d.jsxs)("div",{className:"mt-5",style:{marginLeft:"30%"},children:[Object(d.jsx)("br",{}),Object(d.jsx)(r.b,{to:"/leaderboard",className:"text-white",style:{border:"2px solid black",backgroundColor:"black",color:"#001233",textDecoration:"none",padding:"10px"},children:"Back to Leaderboard"})]})]})]})}},61:function(t,e,n){"use strict";n.r(e);var c=n(44),o=n(32),r=(n(30),n(36)),a=n(0),i=(n(47),n(46),n(34)),d=(n(49),n(1)),s=(n(43),n(3)),l=Object(d.g)((function(t){var e=Object(a.useState)(!1),n=Object(o.a)(e,2),c=(n[0],n[1]),i=Object(a.useState)(!1),d=Object(o.a)(i,2),l=d[0],b=d[1];Object(a.useEffect)((function(){Object(r.c)().then((function(t){t.error?console.log("error occured"):c(t)}))}),[]);var u=function(){window.location.reload(!1)};return Object(s.jsxs)("div",{style:{height:"1000px"},children:[Object(s.jsx)("h2",{style:{marginLeft:"20%",color:"black",fontWeight:"bolder"},children:"Select a Flowchart"}),Object(s.jsx)("div",{style:{marginLeft:"80%"},children:Object(s.jsx)("button",{className:"text-white",style:{border:"2px solid black",backgroundColor:"black",color:"#001233",textDecoration:"none",padding:"10px"},onClick:u,children:"Go Back"})}),Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginLeft:"80px"},children:t.flow&&t.flow.map((function(e,n){return Object(s.jsx)("div",{style:{margin:"50px"},children:Object(s.jsx)("div",{className:"cards-list",children:Object(s.jsxs)("div",{class:"card 3",children:[Object(s.jsx)("div",{class:"card_image",children:Object(s.jsx)("img",{style:{backgroundColor:"#E4BCFE"},src:"https://media1.giphy.com/media/veOuvpRopgi8w0qZL9/giphy.gif?cid=790b76110cad0a93128f073275dc8536ddec9e7d86993d08&rid=giphy.gif&ct=s  "})}),Object(s.jsx)("div",{class:"card_title",children:Object(s.jsxs)("button",{type:"submit",value:e._id,onClick:function(e){return function(e){Object(r.b)(e.target.value).then((function(e){e.error?console.log("error occured"):(b(e),console.log(l),t.history.push("/leaderboard/".concat(e._id)))}))}(e)},children:["\ud83d\ude80",e.name]},n)})]})})},n)}))})]})}));e.default=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),n=e[0],d=e[1],b=Object(a.useState)(!1),u=Object(o.a)(b,2),j=u[0],f=u[1],h=Object(a.useState)([]),O=Object(o.a)(h,2),p=O[0],g=O[1],x=Object(a.useState)(!1),y=Object(o.a)(x,2),m=(y[0],y[1],Object(a.useState)(!1)),v=Object(o.a)(m,2),w=v[0],k=v[1];return Object(a.useEffect)((function(){Object(r.a)().then((function(t){if(t.error)console.log("error occured");else{var e=new Set;t.map((function(t,n){e.add(t.category)}));var n=Object(c.a)(e);d(n)}})),Object(r.c)().then((function(t){t.error?console.log("error occured"):f(t)}))}),[]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{style:{backgroundColor:"rgba(5, 0, 255, 0.35)"},children:[Object(s.jsx)(i.a,{children:"  "}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),!w&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{style:{marginLeft:"20%",color:"black",fontWeight:"bolder",marginBottom:"16px"},children:"Please select a Category"}),Object(s.jsx)("br",{}),Object(s.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginLeft:"80px"},children:n&&n.map((function(t,e){return Object(s.jsx)("div",{style:{margin:"50px"},children:Object(s.jsx)("div",{className:"cards-list",children:Object(s.jsxs)("div",{class:"card 3",children:[Object(s.jsx)("div",{class:"card_image",children:Object(s.jsx)("img",{style:{backgroundColor:"pink"},src:"https://media0.giphy.com/media/iF0qnPWMvobyNk5g8C/200w.webp?cid=ecf05e47u9ciivmvaqhvs9izrqch4ghgwatnms4hii2usyil&rid=200w.webp&ct=g"})}),Object(s.jsx)("div",{class:"card_title",children:Object(s.jsxs)("button",{type:"submit",value:t,onClick:function(t){return function(t){g([]);var e=[];j.map((function(n,c){n.category===t.target.value&&e.push(n)})),g(e),k(!0)}(t)},children:[Object(s.jsx)("text",{children:"\ud83d\ude80"})," ",t]},e)})]})})},e)}))})]}),w&&Object(s.jsx)(l,{flow:p})]})})}}}]);
//# sourceMappingURL=5.4279f531.chunk.js.map