"use strict";(self.webpackChunksimpleread=self.webpackChunksimpleread||[]).push([[831],{831:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var r=a(791),t=a(152),o=a(41),s=a(184),u=function(e){return(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:e.name.toString().toLowerCase(),children:e.name||e.label}),(0,s.jsx)("input",{className:"form-control",value:e.form[e.name.toString().toLowerCase()],type:e.type||"text",required:!0,onChange:function(n){return e.onChange(n,e.updateForm,e.name.toString().toLowerCase())}})]})};u.defaultProps={};var i=u,m=function(e){var n=(0,o.cI)({email:"",username:"",password:""}),a=(0,t.Z)(n,3),r=a[0],u=a[1],m=a[2];return(0,s.jsxs)("form",{className:"SignUpForm","data-testid":"SignUpForm",onSubmit:function(n){return e.onSubmit(n,r,u)},children:[(0,s.jsx)(i,{name:"Username",form:r,onChange:e.onChange,updateForm:m}),(0,s.jsx)(i,{name:"Email",form:r,onChange:e.onChange,updateForm:m,type:"email"}),(0,s.jsx)(i,{name:"Password",form:r,onChange:e.onChange,updateForm:m,type:"password"}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsx)("input",{type:"submit",value:"Sign Up",className:"btn btn-primary"})})]})};m.defaultProps={onSubmit:function(e,n,a){return(0,o.Ue)(n,"/user")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}};var l=m,d=function(e){var n=(0,o.cI)({username:"",password:""}),a=(0,t.Z)(n,3),r=a[0],u=a[1],m=a[2];return(0,s.jsxs)("form",{className:"SignInForm","data-testid":"SignInForm",onSubmit:function(n){return e.onSubmit(n,r,u)},children:[(0,s.jsx)(i,{name:"Username",label:"Username or email",form:r,onChange:e.onChange,updateForm:m}),(0,s.jsx)(i,{name:"Password",form:r,onChange:e.onChange,updateForm:m,type:"password"}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsx)("input",{type:"submit",value:"Sign In",className:"btn btn-primary"})})]})};d.defaultProps={onSubmit:function(e,n,a){return(0,o.Ue)(n,"/user")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}};var c=d,p=a(835),f=a(871),g=function(){var e=(0,f.s0)(),n=(0,r.useContext)(p.Z).setToken;return(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{children:"Create a new account"}),(0,s.jsx)(l,{onSubmit:function(n,a,r){n.preventDefault(),(0,o.Ue)(a,"/user/register"),r({email:"",username:"",password:""}),e("/simpleread/")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}}),(0,s.jsx)(c,{onSubmit:function(a,r,t){a.preventDefault(),(0,o.Ue)(r,"/user/login","include").then((function(e){e.isLoggedIn&&n(null===e||void 0===e?void 0:e.token)})),t({username:"",password:""}),e("/simpleread/")},onChange:function(e,n,a){var r={};r[a]=e.target.value,n(r)}})]})}}}]);
//# sourceMappingURL=831.faf150bf.chunk.js.map