"use strict";(self.webpackChunksimpleread=self.webpackChunksimpleread||[]).push([[822],{775:function(e,n,a){a.d(n,{Z:function(){return i}});var r=a(683),t=(a(791),a(184)),o=function(e){return(0,t.jsxs)("div",{className:"form-group Field",children:[(0,t.jsx)("input",(0,r.Z)({className:"form-control",value:e.form[e.name.toString().toLowerCase()],type:e.type||"text",required:!0,onChange:function(n){return e.onChange(n,e.updateForm,e.name.toString().toLowerCase())},placeholder:e.name||e.label},e.extra)),e.children]})};o.defaultProps={};var i=o},822:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});var r=a(791),t=a(871),o=a(41),i=a(835),u=a(152),s=a(775),m=(a(435),a(184)),c=function(e){var n=(0,o.cI)({bookname:"",review:"",rating:0}),a=(0,u.Z)(n,3),t=a[0],c=a[1],d=a[2],l=(0,r.useContext)(i.Z).user;return(0,m.jsxs)("form",{className:"AddReviewForm","data-testid":"AddReviewForm",onSubmit:function(n){return e.onSubmit(n,t,c)},children:[(0,m.jsx)("h3",{children:"Create New Record"}),(0,m.jsx)(s.Z,{name:"Bookname",label:"Book name",form:t,onChange:e.onChange,updateForm:d}),(0,m.jsx)(s.Z,{name:"Review",form:t,onChange:e.onChange,updateForm:d}),(0,m.jsx)(s.Z,{name:"Rating",form:t,onChange:e.onChange,updateForm:d,type:"range",extra:{max:"5",min:"0",step:"0.5"},children:(0,m.jsx)("p",{className:"rating-value",children:t.rating})}),(0,m.jsx)("div",{className:"form-group cta",children:(0,m.jsx)("input",{type:"submit",value:"Submit Review",className:"btn btn-primary",disabled:!!l})})]})};c.defaultProps={onSubmit:function(e,n,a){return(0,o.Ue)(n,"/user")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}};var d=c;function l(){var e=(0,r.useContext)(i.Z).token,n=(0,t.s0)();return(0,m.jsx)("div",{children:e?(0,m.jsx)("p",{children:"have an account nerd"}):(0,m.jsx)(d,{onSubmit:function(e,a,r){e.preventDefault(),(0,o.Ue)(a,"/reviews/add","include"),r({bookname:"",review:"",rating:0}),n("/simpleread/")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}})})}},435:function(){}}]);
//# sourceMappingURL=822.e715f537.chunk.js.map