(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{30:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(31),c=function(t){return fetch("".concat(r.a,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},o=function(t){return fetch("".concat(r.a,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(t){return t.json()})).catch((function(t){console.log(t)}))},i=function(t,e){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(t)),e())},a=function(t){if("undefined"!==typeof window){var e=JSON.parse(localStorage.getItem("jwt")).token;return localStorage.removeItem("jwt"),t(),fetch("".concat(r.a,"/signout"),{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(t){console.log("signout",t)})).catch((function(t){return console.log(t)}))}},s=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))}},31:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r="https://flowtion.herokuapp.com/api"},32:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(37);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,c,o=[],i=!0,a=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(s){a=!0,c=s}finally{try{i||null==n.return||n.return()}finally{if(a)throw c}}return o}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},33:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},34:function(t,e,n){"use strict";var r=n(0),c=n.n(r),o=n(12),i=n(1),a=n(30),s=n(35),l=n.n(s),u=n.p+"static/media/logo.2f2bf886.png",d=n(3),f=function(t,e){return t.location.pathname===e?{backgroundColor:"#131D5A",borderRadius:"30px",color:"white"}:{color:"black",fontWeight:"bolder"}};e.a=Object(i.g)((function(t){return Object(d.jsxs)("div",{style:{paddingBottom:"95px"},children:[Object(d.jsxs)("ul",{className:"nav nav-tabs justify-content-start ".concat(l.a.nav),style:{float:"left",width:"50%",margin:0,padding:0},children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",to:"/",children:Object(d.jsx)("img",{height:"80px",width:"200px",src:u})})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link mt-3",style:f(t.history,"/leaderboard"),to:"/leaderboard",children:"\ud83c\udfc6Leaderboard"})})]}),Object(d.jsxs)("ul",{className:"nav nav-tabs justify-content-end ".concat(l.a.nav),style:{float:"right",width:"50%",margin:"0",padding:"20px",paddingRight:"50px"},children:[!Object(a.b)()&&Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",style:f(t.history,"/signin"),to:"/signin",children:"Signin"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",style:f(t.history,"/signup"),to:"/signup",children:"Signup"})})]}),Object(a.b)()&&Object(d.jsx)("li",{className:"nav-item ",children:Object(d.jsx)("span",{className:"nav-link ".concat(l.a.signout),style:{cursor:"pointer",fontWeight:"bolder"},onClick:function(){return Object(a.d)((function(){t.history.push("/")}))},children:"Signout \ud83d\udeb6"})})]})]})}))},35:function(t,e,n){t.exports={nav:"Menu_nav__1G_lM",signout:"Menu_signout__1FMS3"}},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(39);function c(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(33);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},39:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},45:function(t,e,n){t.exports={rform:"Signup_rform__vXluo",btn:"Signup_btn__3IZuf",ip:"Signup_ip__2VRJz"}},55:function(t,e,n){"use strict";n.r(e);var r=n(33),c=n(38),o=n(32),i=n(30),a=n(0),s=n(1),l=n(34),u=n(45),d=n.n(u),f=n(3);e.default=function(){var t=Object(a.useState)({email:"test@gmail.com",password:"Test@123",error:"",loading:!1,redirectToReferrer:!1}),e=Object(o.a)(t,2),n=e[0],u=e[1],b=n.email,j=n.password,p=n.error,g=n.loading,h=n.redirectToReferrer,O=Object(i.b)().user,m=function(t){return function(e){u(Object(c.a)(Object(c.a)({},n),{},Object(r.a)({error:!1},t,e.target.value)))}},y=function(t){t.preventDefault(),u(Object(c.a)(Object(c.a)({},n),{},{error:!1,loading:!0})),Object(i.c)({email:b,password:j}).then((function(t){t.error?"undefined"!==typeof t.error.message?u(Object(c.a)(Object(c.a)({},n),{},{error:t.error.message,loading:!1})):u(Object(c.a)(Object(c.a)({},n),{},{error:"Validation failed",success:!1})):Object(i.a)(t,(function(){u(Object(c.a)(Object(c.a)({},n),{},{redirectToReferrer:!0}))}))}))};return Object(f.jsxs)("div",{style:{backgroundColor:"rgba(5, 0, 255, 0.4)"},children:[Object(f.jsx)(l.a,{children:"  "}),Object(f.jsxs)("div",{style:{width:"100%",height:"80%",display:"flex",flexWrap:"wrap"},children:[Object(f.jsx)("img",{style:{marginTop:"10%",marginLeft:"15%",marginRight:"12%",borderRadius:"290px"},height:"200px",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Mvq2MGMEzWXPTUfqbqgtlUazwyoOYpB7lA&usqp=CAU"}),Object(f.jsxs)("div",{className:d.a.rform,children:[g&&Object(f.jsx)("div",{className:"alert alert-info",children:Object(f.jsx)("h2",{children:"Loading..."})}),Object(f.jsx)("div",{className:"alert alert-danger",style:{display:p?"":"none"},children:p}),Object(f.jsxs)("div",{style:{color:"#131D5A",paddingBottom:"20px"},children:["            ",Object(f.jsx)("h1",{children:"Sign In !"})]}),Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{style:{fontWeight:"bold",color:"#131D5A"},children:"Email"}),Object(f.jsx)("input",{onChange:m("email"),type:"email",className:"form-control",value:b})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{style:{fontWeight:"bold",color:"#131D5A"},children:"Password"}),Object(f.jsx)("input",{onChange:m("password"),type:"password",className:"form-control",value:j})]}),Object(f.jsx)("button",{onClick:y,className:d.a.btn,children:"Submit"})]}),function(){if(h)return O&&O.role,Object(f.jsx)(s.a,{to:"/"})}()]})]})]})}}}]);
//# sourceMappingURL=6.9f2e4545.chunk.js.map