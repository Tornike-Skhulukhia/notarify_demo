(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{129:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(78),l=a(29),r=a.n(l),c=a(84),o=a(15),s=a(79),i=a(13),j=a(0),b=a(80),u=a.n(b),d=a(175),p=a(182),O=a(183),g=a(177),x=a(178),h=a(180),m=a(179),f=a(171),v=a(56),y=(a(120),a(2));function C(){var e=Object(j.useState)(0),t=Object(i.a)(e,2),a=t[0],n=t[1],l=Object(j.useState)(),r=Object(i.a)(l,2),c=r[0],o=r[1],b=Object(j.useState)(),C=Object(i.a)(b,2),S=C[0],_=C[1],k=Object(j.useState)(),W=Object(i.a)(k,2),w=W[0],F=W[1],L=Object(j.useState)(),P=Object(i.a)(L,2),T=P[0],A=P[1],B=Object(j.useState)("Georgia"),G=Object(i.a)(B,2),H=G[0],I=G[1];return Object(y.jsxs)("div",{className:"content",children:[1===a?Object(y.jsx)("div",{style:{textAlign:"center"},children:"Loading..."}):"",Object(y.jsxs)("div",{children:[Object(y.jsx)("h1",{style:{textAlign:"center"},children:"Please fill in some details"}),Object(y.jsxs)("div",{id:"inputs",children:[Object(y.jsx)(d.a,{style:{margin:"20px"},label:"Name",value:c,onChange:function(e){return o(e.target.value)},variant:"filled",fullWidth:!0}),Object(y.jsx)("br",{}),Object(y.jsx)(d.a,{style:{margin:"20px"},label:"Last Name",value:S,onChange:function(e){return _(e.target.value)},variant:"filled",fullWidth:!0}),Object(y.jsx)("br",{}),Object(y.jsx)(d.a,{style:{margin:"20px"},label:"Email",value:w,onChange:function(e){return F(e.target.value)},variant:"filled",fullWidth:!0}),Object(y.jsxs)("div",{style:{margin:"20px"},children:[Object(y.jsx)("label",{htmlFor:"img_upload_btn",children:Object(y.jsx)(p.a,{style:{fontWeight:"bold",marginRight:"30px"},variant:"outlined",component:"span",children:"Select Image"})}),Object(y.jsx)("input",{id:"img_upload_btn",accept:"image/*",type:"file"})]}),Object(y.jsxs)(m.a,{component:"fieldset",style:{marginLeft:"20px",marginTop:"10px"},children:[Object(y.jsx)(f.a,{component:"legend",children:"Country"}),Object(y.jsxs)(x.a,{"aria-label":"country",value:H,onChange:function(e){return I(e.target.value)},children:[Object(y.jsx)(h.a,{value:"Georgia",control:Object(y.jsx)(g.a,{}),label:"Georgia"}),Object(y.jsx)(h.a,{value:"Italy",control:Object(y.jsx)(g.a,{}),label:"Italy"}),Object(y.jsx)(h.a,{value:"Spain",control:Object(y.jsx)(g.a,{}),label:"Spain"}),Object(y.jsx)(h.a,{value:"France",control:Object(y.jsx)(g.a,{}),label:"France"})]})]}),Object(y.jsx)("br",{}),Object(y.jsx)(d.a,{style:{margin:"20px"},label:"Company Tax Code",value:T,onChange:function(e){return A(e.target.value)},variant:"filled",fullWidth:!0}),Object(y.jsx)("br",{}),Object(y.jsx)(O.a,{textAlign:"center",children:Object(y.jsx)(p.a,{onClick:function(){n(1);var e=new FormData;e.append("name",c),e.append("last_name",S),e.append("country",H),e.append("email",w),e.append("company_tax_code",T),e.append("document_picture",document.querySelector("#img_upload_btn").files[0]),console.log("Sending ",e),u.a.post("http://localhost:8000/reports/api/handle_data_submission/",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(console.log(e.data),0===e.data.errors.length)v.b.success("Congratulations, please check your email in few minutes to see your report link",{position:"bottom-center",autoClose:1e4,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var t,a=Object(s.a)(e.data.errors);try{for(a.s();!(t=a.n()).done;){var l=t.value;v.b.error(l,{position:"bottom-center",autoClose:1e4,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}}catch(r){a.e(r)}finally{a.f()}}n(0)})).catch((function(e){return console.log(e)}))},style:{fontWeight:"bold",background:"#007494",color:"#fff",fontSize:"1rem",padding:"12px 120px"},variant:"contaned",size:"large",children:"Submit"})})]})]}),Object(y.jsx)(v.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}a(129);var S=function(){return Object(y.jsx)(c.a,{children:Object(y.jsx)(o.a,{path:"/",exact:!0,render:function(e){return Object(y.jsx)(C,Object(n.a)({},e))}})})};r.a.render(Object(y.jsx)(S,{}),document.querySelector("#root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.5a5e5ffc.chunk.js.map