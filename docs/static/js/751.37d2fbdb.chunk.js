/*! For license information please see 751.37d2fbdb.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksimpleread=self.webpackChunksimpleread||[]).push([[751],{751:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(214),o=r(861),i=r(152),c=r(791),a=r(41),u=r(871),s=r(184),l=function(){var t=(0,a.cI)({name:"",position:"",level:"",records:[]}),e=(0,i.Z)(t,3),r=e[0],l=e[1],f=e[2],h=(0,u.UO)(),p=(0,u.s0)();return(0,c.useEffect)((function(){function t(){return(t=(0,o.Z)((0,n.Z)().mark((function t(){var e,r,o,i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=h.id.toString(),t.next=3,fetch("".concat("https://mct0c0-5000.preview.csb.app","/review/").concat(h.id.toString()));case 3:if((r=t.sent).ok){t.next=8;break}return o="An error has occurred: ".concat(r.statusText),window.alert(o),t.abrupt("return");case 8:return t.next=10,r.json();case 10:if(i=t.sent){t.next=15;break}return window.alert("Record with id ".concat(e," not found")),p("/"),t.abrupt("return");case 15:l(i);case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[h.id,p]),(0,s.jsx)("div",{className:"Edit","data-testid":"Edit",children:(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:r.name,position:r.position,level:r.level};(0,a.Ue)(e,"/review/update/".concat(h.id)),p("/simpleread/")},children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"name",children:"Name"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"name",value:r.name,onChange:function(t){return f({name:t.target.value})}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{htmlFor:"position",children:"Position"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"position",value:r.position,onChange:function(t){return f({position:t.target.value})}})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("div",{className:"form-check form-check-inline",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===r.level,onChange:function(t){return f({level:t.target.value})}}),(0,s.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),(0,s.jsxs)("div",{className:"form-check form-check-inline",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionJunior",value:"Junior",checked:"Junior"===r.level,onChange:function(t){return f({level:t.target.value})}}),(0,s.jsx)("label",{htmlFor:"positionJunior",className:"form-check-label",children:"Junior"})]}),(0,s.jsxs)("div",{className:"form-check form-check-inline",children:[(0,s.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===r.level,onChange:function(t){return f({level:t.target.value})}}),(0,s.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),(0,s.jsx)("div",{className:"form-group",children:(0,s.jsx)("input",{type:"submit",value:"Edit person",className:"btn btn-primary"})})]})})}},41:function(t,e,r){r.d(e,{Od:function(){return h},Ue:function(){return l},Wz:function(){return u},cI:function(){return s}});var n=r(683),o=r(214),i=r(861),c=r(152),a=r(791);function u(t){var e=(0,a.useState)([]),r=(0,c.Z)(e,2),n=r[0],u=r[1];return(0,a.useEffect)((function(){function e(){return(e=(0,i.Z)((0,o.Z)().mark((function e(){var r,n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mct0c0-5000.preview.csb.app"+t);case 2:if((r=e.sent).ok){e.next=7;break}return n="An error occurred: ".concat(r.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,r.json();case 9:i=e.sent,u(i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n.length]),[n,u]}function s(t){var e=(0,a.useState)(t),r=(0,c.Z)(e,2),o=r[0],i=r[1];return[o,i,function(t){return i((function(e){return(0,n.Z)((0,n.Z)({},e),t)}))}]}function l(t,e){return f.apply(this,arguments)}function f(){return(f=(0,i.Z)((0,o.Z)().mark((function t(e,r){var i;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=(0,n.Z)({},e),t.next=3,fetch("https://mct0c0-5000.preview.csb.app"+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).catch((function(t){window.alert(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e){return p.apply(this,arguments)}function p(){return(p=(0,i.Z)((0,o.Z)().mark((function t(e,r){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://mct0c0-5000.preview.csb.app").concat(r,"/").concat(e),{method:"DELETE"});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,e,r){function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}r.d(e,{Z:function(){return o}})},683:function(t,e,r){function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,{Z:function(){return i}})},214:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=j(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var m={};s(m,c,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==e&&r.call(g,c)&&(m=g);var w=v.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,c,a,u){var s=f(t[i],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},b(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=751.37d2fbdb.chunk.js.map