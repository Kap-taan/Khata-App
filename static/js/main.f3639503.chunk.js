(this.webpackJsonpapplication=this.webpackJsonpapplication||[]).push([[0],{36:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},67:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),s=c(38),o=c.n(s),i=(c(44),c(9)),l=(c(45),c(2)),r=function(){var e=new Date,t=Object(n.useState)(e.getHours()),c=Object(i.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(e.getMinutes()),r=Object(i.a)(o,2),j=r[0],d=r[1],u=Object(n.useState)(e.getSeconds()),b=Object(i.a)(u,2),O=b[0],m=b[1];setInterval((function(){e=new Date,s(e.getHours()),d(e.getMinutes()),m(e.getSeconds())}),1e3);return Object(l.jsxs)("div",{className:"date__compo",children:[Object(l.jsxs)("div",{className:"date__parta",children:[Object(l.jsx)("h3",{children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}),Object(l.jsx)("h3",{children:e.getDate()}),Object(l.jsx)("h3",{children:["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]})]}),Object(l.jsx)("div",{className:"date__partb",children:Object(l.jsxs)("h4",{children:[a,":",j,":",O]})})]})},j=(c(36),c(28)),d=c.n(j),u=c(35);u.a.initializeApp({apiKey:"AIzaSyBWvCsoezd9HQBT9wGSc5ZYGGSkX5k7E4E",authDomain:"khataapp-d2522.firebaseapp.com",projectId:"khataapp-d2522",storageBucket:"khataapp-d2522.appspot.com",messagingSenderId:"42972545944",appId:"1:42972545944:web:96407300b00d47ca6ae1ed"});var b=u.a.firestore(),O=c(29),m=c(13),h=c(14),x=function(){var e=Object(O.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){var e=0;b.collection("money").get().then((function(t){t.docs.forEach((function(t){e+=t.data().amount})),console.log(e),a(e)}))})),Object(l.jsxs)("div",{className:"totalAmount",children:[Object(l.jsx)("div",{className:"totalAmount__title",children:Object(l.jsx)(m.a,{icon:h.e})}),Object(l.jsxs)("div",{className:"totalAmount_data",children:[Object(l.jsx)(d.a,{onInit:function(e){e.typeString("Amount to Gather").pauseFor(1e3).deleteAll().typeString("Amount: ").start()}}),Object(l.jsxs)("h4",{children:["Rs ",c]})]})]})},f=(c(56),c(19)),p=(c(57),function(e){return Object(l.jsxs)("div",{className:"packet",children:[Object(l.jsx)(m.a,{icon:h.i}),Object(l.jsx)("h3",{className:"packet__h3",children:e.name})]})}),v=(c(58),function(){var e=Object(O.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){b.collection("customers").get().then((function(e){var t=0,n=[];e.docs.forEach((function(e){++t<=5&&(n=[].concat(Object(f.a)(n),[e.data().name]))})),a(n),console.log(c)}),[])})),Object(l.jsxs)("div",{className:"recent",children:[Object(l.jsx)("div",{className:"recent__title",children:Object(l.jsx)("h3",{children:"Recent"})}),Object(l.jsx)("div",{className:"recent__data",children:c.map((function(e){return Object(l.jsx)(p,{name:e},Math.round())}))})]})}),g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),o=Object(i.a)(s,2),r=o[0],j=o[1];return Object(n.useEffect)((function(){b.collection("customers").get().then((function(e){a(e.docs.length.toString())})),j(!1)}),[]),console.log(c),Object(l.jsxs)("div",{className:"totalAmount",children:[Object(l.jsx)("div",{className:"totalAmount__title",children:Object(l.jsx)(m.a,{icon:h.j})}),Object(l.jsxs)("div",{className:"totalAmount_data",children:[!r&&Object(l.jsx)(d.a,{onInit:function(e){e.typeString("Total Members").pauseFor(500).deleteAll().typeString("Members").start()}}),Object(l.jsx)("h3",{children:c})]})]})},S=function(){return Object(l.jsxs)("div",{className:"dashboard",children:[Object(l.jsx)(x,{}),Object(l.jsx)(v,{}),Object(l.jsx)(g,{})]})},N=(c(59),c(60),c(24),function(){var e=[],t={};Object(n.useEffect)((function(){b.collection("customers").get().then((function(t){var c=[];t.docs.map((function(e){console.log(e.data().name),c=[].concat(Object(f.a)(c),[e.data().name])})),e=c,console.log(e)}))}),[t]);var c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],o=a[1],r=Object(n.useState)(""),j=Object(i.a)(r,2),d=j[0],u=j[1],O=Object(n.useState)(new Date),m=Object(i.a)(O,2),h=m[0],x=m[1];return Object(l.jsx)("div",{className:"newEntry",children:Object(l.jsxs)("form",{onSubmit:function(c){c.preventDefault(),t={name:s,amount:d,date:new Date(h)},b.collection(s).add(t),e.includes(s)||b.collection("customers").add({name:s}),b.collection("money").add({name:s,amount:parseInt(d)}),alert("Added Successfully"),o(""),u("")},children:[Object(l.jsx)("input",{type:"date",value:h,onChange:function(e){return x(e.target.value)}}),Object(l.jsx)("input",{type:"text",required:!0,placeholder:"Customer Name",value:s,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("input",{type:"text",required:!0,placeholder:"Amount",value:d,onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Submit"})]})})}),y=(c(61),c(62),c(67),c(23)),_=function(e){return console.log(e.name),Object(l.jsx)("div",{className:"member",children:Object(l.jsx)(y.b,{to:"/members/".concat(e.name),children:e.name})})},A=c(11),C=(c(70),c(71),function(e){var t=function(e){var t=new Date(1970,0,1);return t.setSeconds(e),t},c=t(e.date).toLocaleString("en-US",{month:"long"}),n=t(e.date).toLocaleString("en-US",{day:"2-digit"}),a=t(e.date).toLocaleString("en-US",{year:"2-digit"});return console.log(a),console.log(c),console.log(n),Object(l.jsxs)("div",{className:"expense__dates",children:[Object(l.jsx)("div",{className:"expense__month",children:c}),Object(l.jsx)("div",{className:"expense__year",children:a}),Object(l.jsx)("div",{className:"expense__date",children:n})]})}),D=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=[],o=Object(n.useState)(0),r=Object(i.a)(o,2),j=r[0],d=r[1],u=0,O=Object(A.f)().name;console.log(" i m in"),Object(n.useEffect)((function(){b.collection(O).orderBy("date").get().then((function(e){e.docs.map((function(e){console.log(e.data().date.seconds),s=[].concat(Object(f.a)(s),[{date:e.data().date.seconds,amount:e.data().amount,name:e.data().name,id:e.id}])})),console.log(s),a(s),s.map((function(e){console.log(e.amount),u+=parseInt(e.amount)})),console.log(u),d(u),console.log(j)}))}),[]);return Object(l.jsxs)("div",{className:"indi",children:[Object(l.jsx)("h3",{style:{textAlign:"center",fontSize:"30px"},children:O}),c.map((function(e){return Object(l.jsxs)("div",{className:"de ".concat(e.amount<0?"specialC":""),children:[Object(l.jsx)(C,{date:e.date}),Object(l.jsxs)("h3",{className:"".concat(e.amount<0?"specialC":""),children:["Rs. ",e.amount]}),Object(l.jsx)("button",{onClick:function(){return t=e.id,b.collection(O).doc(t).delete(),alert("Deleted Successfully"),void b.collection(O).orderBy("date").get().then((function(e){e.docs.map((function(e){console.log(e.data().date.seconds),s=[].concat(Object(f.a)(s),[{date:e.data().date.seconds,amount:e.data().amount,name:e.data().name,id:e.id}])})),console.log(s),a(s),s.map((function(e){console.log(e.amount),u+=parseInt(e.amount)})),console.log(u),d(u),console.log(j)}));var t},className:"".concat(e.amount<0?"specialC":""),children:Object(l.jsx)(m.a,{icon:h.h})})]})})),Object(l.jsxs)("h2",{style:{textAlign:"center"},children:["Total Amount : ",j]}),Object(l.jsx)(y.b,{to:"/",children:"Go Back"})]})},k=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),o=Object(i.a)(s,2),r=o[0],j=o[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),O=u[0],m=u[1];Object(n.useEffect)((function(){b.collection("customers").onSnapshot((function(e){var t=e.docChanges(),c=[];t.forEach((function(e){c=[].concat(Object(f.a)(c),[e.doc.data().name])})),j(c),m(!0)}))}),[]);return Object(l.jsx)(y.a,{children:Object(l.jsx)("div",{className:"people",children:Object(l.jsxs)(A.c,{children:[Object(l.jsx)(A.a,{path:"/members/:name",children:Object(l.jsx)(D,{})}),Object(l.jsxs)(A.a,{path:"/",children:[Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",placeholder:"Search a Customer",value:c,onChange:function(e){return a(e.target.value)},onKeyUp:function(e){return t=e.target.value,console.log(t),void j(r.filter((function(e){return e.toLowerCase().includes(t)})));var t}}),Object(l.jsx)("button",{type:"button",onClick:function(){b.collection("customers").get().then((function(e){var t=[];e.docs.map((function(e){console.log(e.data().name),t=[].concat(Object(f.a)(t),[e.data().name])})),j(t),a("")}))},children:"Clear"})]}),Object(l.jsxs)("div",{className:"peoples",children:[O&&r.map((function(e,t){return Object(l.jsx)(_,{name:e,id:t},t)})),!O&&Object(l.jsx)("h2",{style:{textAlign:"center"},children:"Loading..."})]})]})]})})})},B=function(e){var t=e.title;return Object(l.jsxs)("div",{className:"mainBody",children:[Object(l.jsx)("h1",{className:"mainTitle",children:t}),"People"===t&&Object(l.jsx)(k,{}),"DashBoard"===t&&Object(l.jsx)(S,{}),"Add"===t&&Object(l.jsx)(N,{})]})},E=(c(72),function(e){var t=Object(n.useState)("DashBoard"),c=Object(i.a)(t,2),a=c[0],s=c[1],o=function(t){console.log(t),e.addTitle(t),s(t)};return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("div",{className:"navbar__img",children:Object(l.jsx)(m.a,{icon:h.b})}),Object(l.jsxs)("div",{className:"navbar__options",children:[Object(l.jsxs)("div",{className:"navbar__option ".concat("DashBoard"===a?"special":""),onClick:function(){return o("DashBoard")},children:[Object(l.jsx)(m.a,{icon:h.c}),Object(l.jsx)("h4",{children:"DASHBOARD"})]}),Object(l.jsxs)("div",{className:"navbar__option ".concat("People"===a?"special":""),onClick:function(){return o("People")},children:[Object(l.jsx)(m.a,{icon:h.j}),Object(l.jsx)("h4",{children:"People"})]}),Object(l.jsxs)("div",{className:"navbar__option ".concat("Add"===a?"special":""),onClick:function(){return o("Add")},children:[Object(l.jsx)(m.a,{icon:h.f}),Object(l.jsx)("h4",{children:"Add"})]}),Object(l.jsxs)("div",{className:"navbar__option ".concat("Help"===a?"special":""),onClick:function(){return o("Help")},children:[Object(l.jsx)(m.a,{icon:h.g}),Object(l.jsx)("h4",{children:"Help"})]})]})]})}),w=(c(73),function(){return Object(l.jsxs)("div",{className:"navdetails",children:[Object(l.jsx)("div",{className:"bell",children:Object(l.jsx)(m.a,{icon:h.a})}),Object(l.jsx)("div",{className:"message",children:Object(l.jsx)(m.a,{icon:h.d})}),Object(l.jsx)("div",{className:"person__details",children:Object(l.jsx)(m.a,{icon:h.a})})]})});var I=function(){var e=Object(n.useState)("DashBoard"),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(E,{addTitle:function(e){a(e)}}),Object(l.jsx)(w,{}),Object(l.jsx)(r,{}),Object(l.jsx)(B,{title:c})]})};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.f3639503.chunk.js.map