!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=179)}({0:function(t,e){t.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(t,e,o){"use strict";function n(t,e,o,n,r,i,s,a,c,u){var l,f="function"==typeof t?t.options:t;if(c){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in c)p.call(c,d)&&!p.call(f.components,d)&&(f.components[d]=c[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=o,f._compiled=!0),n&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(f.functional){f._injectStyles=l;var h=f.render;f.render=function(t,e){return l.call(e),h(t,e)}}else{var y=f.beforeCreate;f.beforeCreate=y?[].concat(y,l):[l]}return{exports:t,options:f}}o.d(e,"a",(function(){return n}))},127:function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["page"]},[o("view",{staticClass:["sex-box"]},[o("view",{class:{"sex-item":!t.boyTouched,"sex-item-touched":t.boyTouched},staticStyle:{display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"},on:{click:function(e){t.switchSex(1)},touchstart:t.touchstartBoy,touchend:t.touchendBoy}},[o("view",{staticClass:["left-sex-part"]},[o("u-text",{staticClass:["left-sex"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u7537")])]),o("view",{staticClass:["left-choose"]},[1==t.sex?o("u-image",{staticClass:["icon-right"],staticStyle:{alignSelf:"center"},attrs:{src:"/static/images/icon-right.png"}}):t._e()],1)]),o("view",{staticClass:["line"],staticStyle:{alignSelf:"center"}}),o("view",{class:{"sex-item":!t.girlTouched,"sex-item-touched":t.girlTouched},staticStyle:{display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px"},on:{click:function(e){t.switchSex(0)},touchstart:function(e){t.touchstartGirl()},touchend:function(e){t.touchendGirl()}}},[o("view",{staticClass:["left-sex-part"]},[o("u-text",{staticClass:["left-sex"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u5973")])]),o("view",{staticClass:["left-choose"]},[0==t.sex?o("u-image",{staticClass:["icon-right"],staticStyle:{alignSelf:"center"},attrs:{src:"/static/images/icon-right.png"}}):t._e()],1)])])])])},r=[]},154:function(t,e,o){"use strict";o.r(e);var n=o(71),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},179:function(t,e,o){"use strict";o.r(e);o(2);var n=o(31);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),n.default.mpType="page",n.default.route="pages/me/modifySex",n.default.el="#root",new Vue(n.default)},2:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(3).default,Vue.prototype.__$appStyle__)},3:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);e.default=r.a},31:function(t,e,o){"use strict";var n=o(127),r=o(69),i=o(1);var s=Object(i.a)(r.default,n.b,n.c,!1,null,null,"cb5521c6",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(154).default,this.options.style):Object.assign(this.options.style,o(154).default)}).call(s),e.default=s.exports},69:function(t,e,o){"use strict";var n=o(70),r=o.n(n);e.default=r.a},70:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),r={data:function(){return{sex:getApp().getUserInfoSession().sex,boyTouched:!1,girlTouched:!1}},onNavigationBarButtonTap:function(){this.updateSex()},methods:{updateSex:function(){var t=getApp().getUserInfoSession().id,e={id:t,sex:this.sex},o=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:t,headerUserToken:n.getUserSessionToken()},url:o+"/userInfo/modifyUserInfo?type=3",data:e,success:function(t){if(200==t.data.status){var e=t.data.data;n.setUserInfoSession(e),uni.navigateBack({delta:1,animationType:"fade-out"})}else uni.showToast({title:t.data.msg,icon:"none",duration:3e3})}})},switchSex:function(t){this.sex=t},touchstartBoy:function(){this.boyTouched=!0},touchendBoy:function(){this.boyTouched=!1},touchstartGirl:function(){this.girlTouched=!0},touchendGirl:function(){this.girlTouched=!1}}};e.default=r},71:function(t,e){t.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0],display:["flex",0,0,0],flexDirection:["row",0,0,0],justifyContent:["center",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#605e5e",0,0,1],width:["620rpx",0,0,1]}},".sex-box":{"":{width:["680rpx",0,0,2],height:["240rpx",0,0,2],display:["flex",0,0,2],flexDirection:["column",0,0,2],justifyContent:["center",0,0,2],marginTop:["50rpx",0,0,2],backgroundColor:["#4a4c52",0,0,2],borderRadius:["20",0,0,2]}},".sex-item":{"":{backgroundColor:["#4a4c52",0,0,3]}},".sex-item-touched":{"":{backgroundColor:["#6d6b6b",0,0,4]}},".left-sex-part":{"":{width:["580rpx",0,0,5],height:["120rpx",0,0,5],display:["flex",0,0,5],flexDirection:["row",0,0,5],justifyContent:["flex-start",0,0,5]}},".left-sex":{"":{marginLeft:["30rpx",0,0,6],color:["#FFFFFF",0,0,6]}},".left-choose":{"":{width:["100rpx",0,0,7],height:["120rpx",0,0,7],display:["flex",0,0,7],flexDirection:["row",0,0,7],justifyContent:["flex-start",0,0,7]}},".icon-right":{"":{width:["60rpx",0,0,8],height:["60rpx",0,0,8]}},"@VERSION":2}}});