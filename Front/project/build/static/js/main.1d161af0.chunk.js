(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(15),r=n.n(s),l=(n(25),n(26),n(27),n(18)),i=n(2),o=n(7),h=n.n(o),j=n(8),u=n(10),b=n(16),m=n(17),d="http://localhost:5000/api/",p=function(){function e(){Object(b.a)(this,e),this.baseURL=d}return Object(m.a)(e,[{key:"postData",value:function(){var e=Object(j.a)(h.a.mark((function e(){var t,n,a,c=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},""===t){e.next=8;break}return t=this.baseURL+t,e.next=6,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 6:return a=e.sent,e.abrupt("return",a.json());case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=Object(j.a)(h.a.mark((function e(){var t,n=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(t=n.length>0&&void 0!==n[0]?n[0]:"")){e.next=4;break}return t=this.baseURL+t,e.abrupt("return",fetch(t,{method:"GET",mode:"cors",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e)})));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),f=n(0),O=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(u.a)(s,2),l=r[0],i=r[1],o=Object(a.useState)(null),b=Object(u.a)(o,2),m=b[0],d=b[1],O=Object(a.useState)([]),x=Object(u.a)(O,2),y=x[0],g=x[1],v=Object(a.useState)({name:"",age:"",happy:"",healthy:"",busy:""}),w=Object(u.a)(v,2),N=w[0],D=w[1],C=Object(a.useState)({name:!0,age:!0,happy:!0,healthy:!0,busy:!0}),k=Object(u.a)(C,2),F=k[0],S=k[1],T=new p;Object(a.useEffect)((function(){T.getData("getAll").then((function(e){console.log(e,N),0===e.length&&""===N.name&&""===N.age&&""===N.happy&&""===N.healthy&&""===N.busy?(T.getData("create-base-data"),setTimeout((function(){T.getData("getAll").then((function(e){g(e)}))}),2e3)):g(e)}))}),[]),Object(a.useEffect)((function(){U(),E(),L()}),[y]),Object(a.useEffect)((function(){J()}),[N]),Object(a.useEffect)((function(){J()}),[F]);var U=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(Object(f.jsx)("div",{className:"card",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("p",{className:"text-primary font-weight-bolder h5",children:"Displays Columns".toUpperCase()}),Object(f.jsxs)("form",{className:"d-flex flex-row flex-wrap",children:[Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn mr-sm-2 w-100 ".concat(F.name?"btn-info":"btn-outline-warning"),name:"name",onClick:function(e){e.preventDefault(),A(e)},children:"Display name"})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn mr-sm-2 w-100 ".concat(F.age?"btn-info":"btn-outline-warning"),name:"age",onClick:function(e){e.preventDefault(),A(e)},children:"Display age"})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn mr-sm-2 w-100 ".concat(F.happy?"btn-info":"btn-outline-warning"),name:"happy",onClick:function(e){e.preventDefault(),A(e)},children:"Display happy"})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn mr-sm-2 w-100 ".concat(F.healthy?"btn-info":"btn-outline-warning"),name:"healthy",onClick:function(e){e.preventDefault(),A(e)},children:"Display healthy"})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn mr-sm-2 w-100 ".concat(F.busy?"btn-info":"btn-outline-warning"),name:"busy",onClick:function(e){e.preventDefault(),A(e)},children:"Display busy"})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn btn-warning text-white font-weight-bold mr-sm-2 w-100",onClick:function(e){e.preventDefault(),R()},children:"Display All Columns"})})]})]})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i(Object(f.jsx)("div",{className:"card",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("p",{className:"text-primary font-weight-bolder h5",children:"Search Fields".toUpperCase()}),Object(f.jsxs)("form",{className:"d-flex flex-row flex-wrap",children:[Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("input",{name:"name",type:"text",className:"form-control",placeholder:"name",id:"name",value:N.name,onChange:function(e){e.preventDefault(),B(e)}})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("input",{name:"age",type:"number",className:"form-control",placeholder:"age",id:"age",value:N.age,onChange:function(e){e.preventDefault(),B(e)}})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsxs)("select",{name:"happy",className:"custom-select mr-sm-2 bg-white",id:"happy",value:N.happy,onChange:function(e){e.preventDefault(),B(e)},children:[Object(f.jsx)("option",{value:"",children:"Happy"}),Object(f.jsx)("option",{value:"true",children:"True"}),Object(f.jsx)("option",{value:"false",children:"False"})]})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsxs)("select",{name:"healthy",className:"custom-select mr-sm-2 bg-white",id:"healthy",value:N.healthy,onChange:function(e){e.preventDefault(),B(e)},children:[Object(f.jsx)("option",{value:"",children:"Healthy"}),Object(f.jsx)("option",{value:"true",children:"True"}),Object(f.jsx)("option",{value:"false",children:"False"})]})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsxs)("select",{name:"busy",className:"custom-select mr-sm-2 bg-white",id:"busy",value:N.busy,onChange:function(e){e.preventDefault(),B(e)},children:[Object(f.jsx)("option",{value:"",children:"Busy"}),Object(f.jsx)("option",{value:"true",children:"True"}),Object(f.jsx)("option",{value:"false",children:"False"})]})}),Object(f.jsx)("div",{className:"col-md-4 col-12 mt-sm-3",children:Object(f.jsx)("button",{className:"btn btn-warning text-white font-weight-bold mr-sm-2 w-100",onClick:function(e){e.preventDefault(),P()},children:"Clear Form"})})]})]})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=y.map((function(e,t){return Object(f.jsxs)("tr",{className:"text-center",children:[F.name?Object(f.jsx)("td",{children:e.name}):Object(f.jsx)(f.Fragment,{}),F.age?Object(f.jsx)("td",{children:e.age}):Object(f.jsx)(f.Fragment,{}),F.happy?Object(f.jsx)("td",{children:String(e.happy)}):Object(f.jsx)(f.Fragment,{}),F.healthy?Object(f.jsx)("td",{children:String(e.healthy)}):Object(f.jsx)(f.Fragment,{}),F.busy?Object(f.jsx)("td",{children:String(e.busy)}):Object(f.jsx)(f.Fragment,{})]},t)})),d(Object(f.jsx)("div",{className:"card",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("p",{className:"text-primary font-weight-bolder h5 ",children:"Table".toUpperCase()}),Object(f.jsx)("div",{className:"table-responsive",children:Object(f.jsxs)("table",{className:"table table-striped",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{className:"text-center bg-info text-white",children:[F.name?Object(f.jsx)("th",{children:"name"}):Object(f.jsx)(f.Fragment,{}),F.age?Object(f.jsx)("th",{children:"age"}):Object(f.jsx)(f.Fragment,{}),F.happy?Object(f.jsx)("th",{children:"happy"}):Object(f.jsx)(f.Fragment,{}),F.healthy?Object(f.jsx)("th",{children:"healthy"}):Object(f.jsx)(f.Fragment,{}),F.busy?Object(f.jsx)("th",{children:"busy"}):Object(f.jsx)(f.Fragment,{})]})}),Object(f.jsx)("tbody",{className:" ",children:t})]})})]})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){var t=F;F[e.target.name]=!F[e.target.name],S(t),J()},B=function(e){var t=N;N[e.target.name]=e.target.value,D(t),J()},J=function(){T.getData("filter?name=".concat(N.name,"&age=").concat(N.age,"&happy=").concat(N.happy,"&healthy=").concat(N.healthy,"&busy=").concat(N.busy)).then((function(e){g(e)}))},P=function(){D({name:"",age:"",happy:"",healthy:"",busy:""})},R=function(){S({name:!0,age:!0,happy:!0,healthy:!0,busy:!0})};return Object(f.jsxs)("div",{className:"w-100",children:[n,Object(f.jsx)("p",{className:"alert alert-warning py-2 font-weight-bold",children:"Click buttons for display colums"}),l,Object(f.jsx)("p",{className:"alert alert-warning py-2 font-weight-bold",children:"Use filters for get the info"}),m]})},x=function(){return Object(f.jsx)(l.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.d,{children:[Object(f.jsx)(i.b,{exact:!0,path:"/",component:O}),Object(f.jsx)(i.a,{to:{pathname:"/"}})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),y()}},[[38,1,2]]]);
//# sourceMappingURL=main.1d161af0.chunk.js.map