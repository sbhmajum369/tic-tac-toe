(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{47:function(e,n,t){},48:function(e,n,t){},54:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),r=t(38),l=t.n(r),s=(t(47),t(48),t(6)),o=t(11),a=t(74),u=t(76),j=t(77),d=t(3),b=function(){var e=Object(c.useState)(Array(9).fill("_")),n=Object(o.a)(e,2),t=n[0],i=n[1],r=Object(c.useState)(Array(9).fill(!1)),l=Object(o.a)(r,2),b=l[0],f=l[1],O=Object(c.useState)(!1),x=Object(o.a)(O,2),h=x[0],v=x[1],m=Object(c.useState)("O"),g=Object(o.a)(m,2),C=g[0],p=g[1],k=Object(c.useState)(""),y=Object(o.a)(k,2),F=y[0],S=y[1],X=[[0,1,2],[3,4,5],[6,7,8]],E=[[0,3,6],[1,4,7],[2,5,8]],W=[[0,4,8],[2,4,6]],N=function(e){return Object(d.jsx)(a.a,{className:"button",variant:"outlined",style:{color:"#FFFFFF",borderColor:"#FD8C12"},onClick:e.onClick,disabled:e.disabled,children:e.value})},T=function(e){v(!h);var n=Object(s.a)(t),c=Object(s.a)(b);h&&(n[e]="X",i(n),p("O")),h||(n[e]="O",i(n),p("X")),c[e]=!0,f(c);var r=n.map((function(e,n){return"X"===e?n:""})).filter(String),l=n.map((function(e,n){return"O"===e?n:""})).filter(String);X.forEach((function(e){if(e.every((function(e){return r.includes(e)})))return console.log("X Won",e),S("X"),p(null),c.fill(!0,0,9),void f(c)})),E.forEach((function(e){if(e.every((function(e){return r.includes(e)})))return console.log("X Won",e),p(null),S("X"),c.fill(!0,0,9),void f(c)})),W.forEach((function(e){if(e.every((function(e){return r.includes(e)})))return console.log("X Won",e),p(null),S("X"),c.fill(!0,0,9),void f(c)})),X.forEach((function(e){if(e.every((function(e){return l.includes(e)})))return console.log("O Won",e),p(null),S("O"),c.fill(!0,0,9),void f(c)})),E.forEach((function(e){if(e.every((function(e){return l.includes(e)})))return console.log("O Won",e),p(null),S("O"),c.fill(!0,0,9),void f(c)})),W.forEach((function(e){if(e.every((function(e){return l.includes(e)})))return console.log("O Won",e),p(null),S("O"),c.fill(!0,0,9),void f(c)})),c.every((function(e){return!0===e}))&&p(null)};return Object(d.jsxs)("div",{className:"board",children:[Object(d.jsx)("div",{className:"headline",children:null!=C?Object(d.jsxs)("h3",{children:[" Player ",C,"'s turn "]}):[""!==F?Object(d.jsxs)("h2",{children:[" Winner: ",F," "]},"0"):Object(d.jsx)("h2",{children:" Draw "},"1")]}),Object(d.jsx)("div",{className:"arena",children:Object(d.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(d.jsxs)(u.a,{container:!0,spacing:1,children:[Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[0],disabled:b[0],onClick:function(){return T(0)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[1],disabled:b[1],onClick:function(){return T(1)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[2],disabled:b[2],onClick:function(){return T(2)}})})]}),Object(d.jsxs)(u.a,{container:!0,spacing:1,children:[Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[3],disabled:b[3],onClick:function(){return T(3)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[4],disabled:b[4],onClick:function(){return T(4)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[5],disabled:b[5],onClick:function(){return T(5)}})})]}),Object(d.jsxs)(u.a,{container:!0,spacing:1,children:[Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[6],disabled:b[6],onClick:function(){return T(6)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[7],disabled:b[7],onClick:function(){return T(7)}})}),Object(d.jsx)(u.a,{item:!0,xs:4,children:Object(d.jsx)(N,{value:t[8],disabled:b[8],onClick:function(){return T(8)}})})]})]})})]})},f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"App-header",children:[Object(d.jsx)("h1",{children:" Tic-Tac-Toe Playgorund "}),Object(d.jsx)(b,{})]})})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,78)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,l=n.getTTFB;t(e),c(e),i(e),r(e),l(e)}))};l.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),O()}},[[54,1,2]]]);
//# sourceMappingURL=main.909a7951.chunk.js.map