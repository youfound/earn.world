/*! For license information please see 33.692bf1b6.chunk.js.LICENSE.txt */
(this.webpackJsonpstreak=this.webpackJsonpstreak||[]).push([[33],{1e3:function(t,e,n){"use strict";var a=n(1),r=n(3),i=n(0),o=n(6),c=n(12),s=i.forwardRef((function(t,e){var n=t.disableSpacing,c=void 0!==n&&n,s=t.classes,l=t.className,u=Object(r.a)(t,["disableSpacing","classes","className"]);return i.createElement("div",Object(a.a)({className:Object(o.a)(s.root,l,!c&&s.spacing),ref:e},u))}));e.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},1002:function(t,e,n){"use strict";var a=n(3),r=n(1),i=n(0),o=n(6),c=n(12),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(t);return"".concat(n/e).concat(String(t).replace(String(n),"")||"px")}var d=i.forwardRef((function(t,e){var n=t.alignContent,c=void 0===n?"stretch":n,s=t.alignItems,l=void 0===s?"stretch":s,u=t.classes,d=t.className,p=t.component,f=void 0===p?"div":p,m=t.container,g=void 0!==m&&m,h=t.direction,x=void 0===h?"row":h,v=t.item,y=void 0!==v&&v,b=t.justify,w=t.justifyContent,j=void 0===w?"flex-start":w,E=t.lg,k=void 0!==E&&E,O=t.md,R=void 0!==O&&O,N=t.sm,L=void 0!==N&&N,S=t.spacing,W=void 0===S?0:S,C=t.wrap,B=void 0===C?"wrap":C,I=t.xl,T=void 0!==I&&I,A=t.xs,_=void 0!==A&&A,F=t.zeroMinWidth,G=void 0!==F&&F,M=Object(a.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),P=Object(o.a)(u.root,d,g&&[u.container,0!==W&&u["spacing-xs-".concat(String(W))]],y&&u.item,G&&u.zeroMinWidth,"row"!==x&&u["direction-xs-".concat(String(x))],"wrap"!==B&&u["wrap-xs-".concat(String(B))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==(b||j)&&u["justify-content-xs-".concat(String(b||j))],!1!==_&&u["grid-xs-".concat(String(_))],!1!==L&&u["grid-sm-".concat(String(L))],!1!==R&&u["grid-md-".concat(String(R))],!1!==k&&u["grid-lg-".concat(String(k))],!1!==T&&u["grid-xl-".concat(String(T))]);return i.createElement(f,Object(r.a)({className:P,ref:e},M))})),p=Object(c.a)((function(t){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var n={};return s.forEach((function(a){var r=t.spacing(a);0!==r&&(n["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),n}(t,"xs"),t.breakpoints.keys.reduce((function(e,n){return function(t,e,n){var a={};l.forEach((function(t){var e="grid-".concat(n,"-").concat(t);if(!0!==t)if("auto"!==t){var r="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(t,a):t[e.breakpoints.up(n)]=a}(e,t,n),e}),{}))}),{name:"MuiGrid"})(d);e.a=p},1004:function(t,e,n){"use strict";var a=n(1),r=n(3),i=n(0),o=n(6),c=n(177),s=n(12),l=i.forwardRef((function(t,e){var n=t.classes,s=t.className,l=t.raised,u=void 0!==l&&l,d=Object(r.a)(t,["classes","className","raised"]);return i.createElement(c.a,Object(a.a)({className:Object(o.a)(n.root,s),elevation:u?8:1,ref:e},d))}));e.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},1005:function(t,e,n){"use strict";var a=n(1),r=n(3),i=n(0),o=n(6),c=n(12),s=i.forwardRef((function(t,e){var n=t.classes,c=t.className,s=t.component,l=void 0===s?"div":s,u=Object(r.a)(t,["classes","className","component"]);return i.createElement(l,Object(a.a)({className:Object(o.a)(n.root,c),ref:e},u))}));e.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},1195:function(t,e,n){"use strict";n.r(e);var a=n(5),r=n(17),i=n(64),o=n(0),c=n.n(o),s=n(97),l=n(120),u=n(999),d=n(330),p=n(1002),f=n(323),m=n(1111),g=n(1099),h=n(334),x=n(96),v=n(1004),y=n(1005),b=n(86),w={getInitState:function(){return{bonuses:[],totalRankRoyalty:"",achievableBonus:"-",totalBonusReceived:"-"}},rankRoyaltyStyles:Object(b.a)((function(t){return{root:{paddingTop:t.spacing(3),paddingBottom:t.spacing(3)},container:{alignItems:"center"},header:{padding:"15px !important"},overviewPage:{borderRadius:"0px"},levelBonusCard:{"& .MuiCardHeader-root":{textAlign:"center",background:t.palette.primary.main},"@media (max-width:767px)":{marginTop:"15px"}},cardContent:{background:t.palette.primary.main,padding:"15px",paddingBottom:"15px !important",textAlign:"center","@media (max-width:767px)":{height:"100%",display:"flex",gap:"20px",justifyContent:"space-between"},"& h3":{color:"#fff"},"& p":{color:"#fff"}},tableHeader:{background:"#EDECEA",padding:"15px",display:"flex",justifyContent:"space-between","& Typograhy":{fontWeight:"500"}},tableHeaderText:{fontWeight:"600",textAlign:"center",fontSize:"16px"},tableList:{padding:"15px",display:"flex",justifyContent:"space-between","&:nth-of-type(odd)":{backgroundColor:"#FFFFFF"},"&:nth-of-type(even)":{backgroundColor:t.palette.lightBg},"& Typograhy":{fontWeight:"500"}},iconWrapper:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"5px","& img":{width:"40px",height:"40px"},"& p":{color:"#4B4B4B",fontWeight:"500"}},rankTextWrapperGrid:{textAlign:"center"},rankTextWrapper:{background:t.palette.primary.main,borderRadius:"10px",padding:"10px 20px",display:"inline-block",textAlign:"center",margin:"auto",minWidth:"200px","@media (max-width:767px)":{padding:"5px 10px",minWidth:"150px"},"& p":{fontSize:"16px",color:"#FFFFFF",fontWeight:"500"}},rankProcess:{display:"block",padding:"5px 0px",width:"90%",margin:"auto","& ul":{margin:"0px",padding:"0px",display:"flex",position:"relative",justifyContent:"space-between","&:after":{position:"absolute",content:'""',top:"25%",left:"0",right:"0",width:"98%",height:"4px",backgroundColor:t.palette.darkBg,marginLeft:"auto",marginRight:"auto"},"& li":{listStyle:"none",textAlign:"center",zIndex:"10",width:"45px","& img":{width:"36px",height:"36px"},"& span":{fontSize:"14px",marginTop:"10px",whiteSpace:"nowrap",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"500",color:"#4B4B4B"}}}}}}))},j=n(998),E=n(38),k=function(t){var e=t.totalRankRoyalty,n=t.bonusReceived,a=w.rankRoyaltyStyles(),r=Object(j.a)().t;return c.a.createElement(d.a,{className:"".concat(a.header," innerHeader")},c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xl:9,lg:9,md:9,sm:12,xs:12},c.a.createElement(f.a,{variant:"h2",color:"textPrimary"},r(E.a.RANK_ROYALTY),": ",e)),c.a.createElement(p.a,{item:!0,xl:3,lg:3,md:3,sm:12,xs:12},c.a.createElement("div",{className:"topRightList"},c.a.createElement(v.a,{className:a.levelBonusCard},c.a.createElement(y.a,{className:a.cardContent},c.a.createElement(f.a,{variant:"subtitle1",color:"textPrimary",component:"p"},r(E.a.RR_EARNED)),c.a.createElement(f.a,{variant:"h3",color:"textPrimary"},n)))))))},O=n(1e3),R=n(148),N=function(t){var e=t.rankItem,n=w.rankRoyaltyStyles();return c.a.createElement(d.a,{className:n.tableList},c.a.createElement(p.a,{container:!0,className:n.container},c.a.createElement(p.a,{item:!0,xl:2,lg:2,md:2,sm:12,xs:12},c.a.createElement(d.a,{className:n.iconWrapper},c.a.createElement("img",{src:Object(R.c)(e.rankID),alt:e.rankName}),c.a.createElement(f.a,{variant:"subtitle1",component:"p"},e.rankName))),c.a.createElement(p.a,{item:!0,xl:8,lg:7,md:7,sm:12,xs:12},c.a.createElement(O.a,{className:n.rankProcess},c.a.createElement("ul",null,e.installments.map((function(t){return c.a.createElement("li",{key:t.installmentNo},c.a.createElement("img",{src:(e=t.isReceived,e?"/images/check-circle.png":"/images/times-circle.png"),alt:""}),c.a.createElement(f.a,{variant:"subtitle1",component:"span"},t.installmentDate));var e}))))),c.a.createElement(p.a,{item:!0,xl:2,lg:3,md:3,sm:12,xs:12,className:n.rankTextWrapperGrid},c.a.createElement(d.a,{className:n.rankTextWrapper},c.a.createElement(f.a,{variant:"subtitle1",component:"p"},e.bonusReceived,"/",e.totalBonus)))))};function L(){L=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(R){c=function(t,e,n){return t[e]=n}}function s(t,e,n,a){var r=e&&e.prototype instanceof d?e:d,i=Object.create(r.prototype),o=new E(a||[]);return i._invoke=function(t,e,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return O()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var c=b(o,n);if(c){if(c===u)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var s=l(t,e,n);if("normal"===s.type){if(a=n.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a="completed",n.method="throw",n.arg=s.arg)}}}(t,n,o),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=s;var u={};function d(){}function p(){}function f(){}var m={};c(m,r,(function(){return this}));var g=Object.getPrototypeOf,h=g&&g(g(k([])));h&&h!==e&&n.call(h,r)&&(m=h);var x=f.prototype=d.prototype=Object.create(m);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var a;this._invoke=function(r,i){function o(){return new e((function(a,o){!function a(r,i,o,c){var s=l(t[r],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,o,c)}),(function(t){a("throw",t,o,c)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return a("throw",t,o,c)}))}c(s.arg)}(r,i,a,o)}))}return a=a?a.then(o,o):o()}}function b(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=l(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,u;var r=a.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function e(){for(;++a<t.length;)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=f,c(x,"constructor",f),c(f,"constructor",p),p.displayName=c(f,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,o,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},v(y.prototype),c(y.prototype,i,(function(){return this})),t.AsyncIterator=y,t.async=function(e,n,a,r,i){void 0===i&&(i=Promise);var o=new y(s(e,n,a,r),i);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},v(x),c(x,o,"Generator"),c(x,r,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var a=e.pop();if(a in t)return n.value=a,n.done=!1,n}return n.done=!0,n}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(n,a){return o.type="throw",o.arg=t,e.next=n,a&&(e.method="next",e.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}e.default=Object(l.b)(null,(function(t){return{action:{gets:Object(s.b)(m.a.getRankBonuses,t)}}}))((function(t){var e=t.action,n=w.rankRoyaltyStyles(),s=Object(h.a)(),l=Object(i.a)(s,2),m=l[0],v=l[1],y=Object(o.useState)(w.getInitState()),b=Object(i.a)(y,2),O=b[0],R=b[1],S=function(){var t=Object(r.a)(L().mark((function t(){var n;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.gets();case 2:if((n=t.sent).isSuccess){t.next=6;break}return v(n.message,x.b.error),t.abrupt("return");case 6:R((function(t){return Object(a.a)(Object(a.a)({},t),{},{bonuses:n.data.ranks,totalRankRoyalty:n.data.totalRankRoyalty||"$0",achievableBonus:n.data.achievableBonus||"$0",bonusReceived:n.data.bonusReceived||"$0"})}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){S()}),[]);var W=Object(j.a)().t;return c.a.createElement(g.a,{className:n.root,title:W(E.a.RANK_ROYALTY)},c.a.createElement(u.a,{maxWidth:!1},c.a.createElement(k,{bonusReceived:O.bonusReceived,totalRankRoyalty:O.totalRankRoyalty}),c.a.createElement(d.a,{className:n.tableHeader},c.a.createElement(p.a,{container:!0},c.a.createElement(p.a,{item:!0,xl:2,lg:2,md:2,sm:12,xs:12},c.a.createElement(f.a,{className:n.tableHeaderText},W(E.a.RANK))),c.a.createElement(p.a,{item:!0,xl:8,lg:7,md:7,sm:12,xs:12}),c.a.createElement(p.a,{item:!0,xl:2,lg:3,md:3,sm:12,xs:12},c.a.createElement(f.a,{className:n.tableHeaderText},W(E.a.RANK_ROYALTY))))),O.bonuses.map((function(t){return c.a.createElement(N,{key:t.rankID,rankItem:t})}))),m)}))},999:function(t,e,n){"use strict";var a=n(1),r=n(3),i=n(15),o=n(0),c=n(6),s=n(12),l=n(14),u=o.forwardRef((function(t,e){var n=t.classes,i=t.className,s=t.component,u=void 0===s?"div":s,d=t.disableGutters,p=void 0!==d&&d,f=t.fixed,m=void 0!==f&&f,g=t.maxWidth,h=void 0===g?"lg":g,x=Object(r.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(u,Object(a.a)({className:Object(c.a)(n.root,i,m&&n.fixed,p&&n.disableGutters,!1!==h&&n["maxWidth".concat(Object(l.a)(String(h)))]),ref:e},x))}));e.a=Object(s.a)((function(t){return{root:Object(i.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(e,n){var a=t.breakpoints.values[n];return 0!==a&&(e[t.breakpoints.up(n)]={maxWidth:a}),e}),{}),maxWidthXs:Object(i.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(i.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(i.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(i.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(i.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)}}]);