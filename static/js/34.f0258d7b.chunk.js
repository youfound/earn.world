/*! For license information please see 34.f0258d7b.chunk.js.LICENSE.txt */
(this.webpackJsonpstreak=this.webpackJsonpstreak||[]).push([[34],{1099:function(e,t,r){"use strict";var n=r(111),a=r(0),i=r.n(a),o=r(1101),c=["title","description","children"];t.a=function(e){var t=e.title,r=e.description,a=e.children,l=Object(n.a)(e,c);return i.a.createElement("div",l,i.a.createElement(o.Helmet,null,i.a.createElement("title",null,t," | Earn.world"),r&&i.a.createElement("meta",{name:"description",content:r})),a)}},1102:function(e,t,r){"use strict";var n=r(111),a=r(0),i=r.n(a),o=r(846),c=["label","type","clickHandler","isDisabled","isFullWidth","className","children"];t.a=function(e){var t=e.label,r=e.type,a=e.clickHandler,l=e.isDisabled,s=e.isFullWidth,u=e.className,h=e.children,d=Object(n.a)(e,c);return i.a.createElement(o.a,Object.assign({color:"primary",variant:"contained"},d,{type:r||"button",fullWidth:s,className:u,disabled:l,onClick:function(e){e.preventDefault(),a&&a(e)}}),t||h)}},1103:function(e,t,r){"use strict";var n=r(111),a=r(0),i=r.n(a),o=r(1023),c=r(1011),l=["label","name","value","type","changeHandler","isDisabled","isFullWidth","helperText","error","className"];t.a=function(e){var t=e.label,r=e.name,a=e.value,s=e.type,u=e.changeHandler,h=e.isDisabled,d=e.isFullWidth,p=e.helperText,f=e.error,m=e.className,v=Object(n.a)(e,l);return i.a.createElement(i.a.Fragment,null,t&&i.a.createElement(c.a,null,t),i.a.createElement(o.a,Object.assign({margin:"normal",variant:"outlined",className:m,fullWidth:d,disabled:h,name:r,onChange:function(e){e.persist(),u(e)},type:s||"text",value:a},v,{error:f,helperText:p})))}},1110:function(e,t,r){"use strict";var n=r(41),a=r(5),i=r(64),o=r(0),c=r(253),l=r.n(c),s={isValid:!1,values:{},touched:{},typings:{},errors:{}};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Object(o.useState)(Object(a.a)(Object(a.a)({},s),{},{values:t})),c=Object(i.a)(r,2),u=c[0],h=c[1],d=function(e){e.persist&&e.persist(),h((function(t){return Object(a.a)(Object(a.a)({},t),{},{values:Object(a.a)(Object(a.a)({},t.values),{},Object(n.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(a.a)(Object(a.a)({},t.touched),{},Object(n.a)({},e.target.name,!0)),typings:Object(n.a)({},e.target.name,!0)})}))},p=function(e){return!(!u.touched[e]||!u.errors[e])};Object(o.useEffect)((function(){var t=l()(u.values,e);h((function(e){return Object(a.a)(Object(a.a)({},e),{},{isValid:!t,errors:t||{}})}))}),[u.values]);var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;h(Object(a.a)(Object(a.a)({},s),{},{values:e}))};return{formState:u,changeHandler:d,hasError:p,resetState:f,setFormState:h}}},1198:function(e,t,r){"use strict";r.r(t);var n=r(17),a=r(64),i=r(0),o=r.n(i),c=r(99),l=r(97),s=r(120),u=r(323),h=r(998),d=r(247),p=Object(d.a)(i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline"),f=r(356),m=r(1099),v=r(334),g=r(96),b=r(362),y=r(1110),x=r(1103),O=r(1102),E=r(58),w=r(384),j=r(41),L=r(86),S=r(38),N={getSchema:function(e){return{emailAddress:{presence:{allowEmpty:!1,message:"^".concat(e(S.a.EMAIL_REQ))},email:{message:"^".concat(e(S.a.EMAIL_INVALID))},length:{maximum:128}}}},styles:Object(L.a)((function(e){return{root:{padding:"0px",margin:"0px",marginTop:"-20px"},container:{display:"flex",padding:"30px",alignItems:"center",flexDirection:"column",position:"relative",height:"100vh"},content:Object(j.a)({margin:"0",position:"absolute",top:"50%","-ms-transform":"translateY(-50%)",transform:"translateY(-50%)",minWidth:"485px",maxWidth:"485px",background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 3px 6px #00000029",border:"1px solid #707070",borderRadius:"42px",padding:"40px 50px",paddingBottom:"60px","@media (max-width:767px)":{minWidth:"auto"},"& .MuiOutlinedInput-root":{borderRadius:"21px",overflow:"hidden","& input":{borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}},"& button":{borderRadius:"16px",padding:"16px 16px"}},e.breakpoints.down("sm"),{borderRadius:"25px",padding:"20px 30px",maxWidth:"320px",margin:"auto"}),header:{textAlign:"center",padding:"20px 0 30px"},titleTxt:{fontWeight:"bold",textAlign:"center",color:"#000",fontSize:"30px",fontFamily:"Gilroy-Bold",lineHeight:"35px"},mailContainer:{textAlign:"center"},mailSentIcon:{color:"#27ae60",width:"100px",height:"100px"},signInContainer:{color:"#253144",textAlign:"center",marginTop:"50px",fontSize:"18px",fontFamily:"Karla"},signIn:{color:e.palette.primary.main,fontWeight:"bold"}}}))},k=r(8),_=r(20);function A(){A=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new w(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=x(o,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var u={};function h(){}function d(){}function p(){}var f={};c(f,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(j([])));v&&v!==t&&r.call(v,a)&&(f=v);var g=p.prototype=h.prototype=Object.create(f);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var l=s(e[a],e,i);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(l.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(y.prototype),c(y.prototype,i,(function(){return this})),e.AsyncIterator=y,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new y(l(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(g),c(g,o,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=Object(s.b)((function(e){return{user:e.user}}),(function(e){return{forgetPassword:Object(l.b)(b.a.forgetPassword,e)}}))((function(e){var t=e.history,r=e.forgetPassword,l=N.styles(),s=Object(v.a)(),d=Object(a.a)(s,2),b=d[0],j=d[1],L=Object(i.useState)(""),F=Object(a.a)(L,2),R=F[0],T=F[1],I=Object(h.a)().t,W=N.getSchema(I),D=Object(y.a)(W),G=D.formState,H=D.changeHandler,P=D.hasError,M=Object(f.b)().executeRecaptcha,C=function(){var e=Object(n.a)(A().mark((function e(t){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t);case 2:if(r=e.sent){e.next=6;break}return j(_.a.COMMON_ERROR,g.b.error),e.abrupt("return","");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(Object(E.c)())return t.push(k.a.DASHBOARD),null;var V=function(){var e=Object(n.a)(A().mark((function e(t){var n,a,i,o,c;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),n=G.values,a=n.emailAddress.trim(),e.next=6,C(_.d.FORGOT_PASSWORD);case 6:if(i=e.sent){e.next=9;break}return e.abrupt("return");case 9:return e.next=11,r(a,i);case 11:o=e.sent,c=o.isSuccess?g.b.success:g.b.error,o.isSuccess?T(a):j(o.message,c),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),j(e.t0.message,g.b.error);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement(m.a,{className:l.root,title:I(S.a.FORGOT_PASSWORD)},o.a.createElement("section",{className:l.container},o.a.createElement("div",{className:l.content},!R&&o.a.createElement("form",null,o.a.createElement("div",{className:l.header},o.a.createElement("span",{className:l.titleTxt},I(S.a.FORGOT_PASSWORD))),o.a.createElement(x.a,{isFullWidth:!0,label:"".concat(I(S.a.EMAIL),"*"),autoComplete:"new-email-address",placeholder:I(S.a.ENTER_EMAIL),name:"emailAddress",value:G.values.emailAddress||"",changeHandler:H,error:P("emailAddress"),helperText:P("emailAddress")?G.errors.emailAddress[0]:null}),o.a.createElement(O.a,{isFullWidth:!0,className:"mt2",isDisabled:!G.isValid,type:"submit",label:I(S.a.SEND),clickHandler:V}),o.a.createElement(u.a,{className:l.signInContainer},I(S.a.KNOW_PASSWORD)," \xa0",o.a.createElement(w.a,{component:c.a,to:k.a.LOGIN,text:I(S.a.LOGIN),className:l.signIn}))),R&&o.a.createElement("div",{className:l.mailContainer},o.a.createElement(p,{className:l.mailSentIcon}),o.a.createElement("br",null),o.a.createElement("span",{className:l.titleTxt},I(S.a.MSG_SENT)," ",R),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{className:l.subTitleTxt},I(S.a.RECOVERY_MSG)),o.a.createElement("br",null)))),b)}))}}]);