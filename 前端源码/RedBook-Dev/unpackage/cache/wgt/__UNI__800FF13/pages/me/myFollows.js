!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=172)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,o){"use strict";function r(e,t,o,r,n,a,i,s,l,c){var u,f="function"==typeof e?e.options:e;if(l){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in l)p.call(l,d)&&!p.call(f.components,d)&&(f.components[d]=l[d])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),t&&(f.render=t,f.staticRenderFns=o,f._compiled=!0),r&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=u):n&&(u=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(f.functional){f._injectStyles=u;var g=f.render;f.render=function(e,t){return u.call(t),g(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,u):[u]}return{exports:e,options:f}}o.d(t,"a",(function(){return r}))},120:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[o("view",{staticClass:["page"]},[o("view",{staticClass:["line"]}),o("scroll-view",{attrs:{scrollY:"true"},on:{scrolltolower:function(t){e.pagingFollowsList()}}},e._l(e.followsList,(function(t,r){return o("view",{key:r,staticClass:["user-wrapper"]},[o("view",{staticClass:["user-info"]},[o("u-image",{staticClass:["face"],staticStyle:{alignSelf:"center"},attrs:{src:t.face}}),o("u-text",{staticClass:["user-name"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.nickname))])],1),t.followed?e._e():o("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center"}},[o("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#FFFFFF"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(o){e.followMe(t.vlogerId)}}},[e._v("\u5173\u6ce8")])]),t.followed?o("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center",borderWidth:"1px",borderColor:"#ef274d",backgroundColor:"#181b27"}},[o("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#ef274d"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(o){e.cancelFollow(t.vlogerId)}}},[e._v("\u53d6\u5173")])]):e._e()])})),0)],1)])},n=[]},147:function(e,t,o){"use strict";o.r(t);var r=o(50),n=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},172:function(e,t,o){"use strict";o.r(t);o(3);var r=o(24);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(o){return t.resolve(e()).then((function(){return o}))}),(function(o){return t.resolve(e()).then((function(){throw o}))}))}),r.default.mpType="page",r.default.route="pages/me/myFollows",r.default.el="#root",new Vue(r.default)},2:function(e,t,o){"use strict";function r(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function a(e,t){switch(r(t)){case"Function":return"function() { [native code] }";default:return t}}Object.defineProperty(t,"__esModule",{value:!0}),t.log=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];console[e].apply(console,o)},t.default=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];var i=t.shift();if(n())return t.push(t.pop().replace("at ","uni-app:///")),console[i].apply(console,t);var s=t.map((function(e){var t=Object.prototype.toString.call(e).toLowerCase();if("[object object]"===t||"[object array]"===t)try{e="---BEGIN:JSON---"+JSON.stringify(e,a)+"---END:JSON---"}catch(o){e=t}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var o=r(e).toUpperCase();e="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+e+"---END:"+o+"---":String(e)}return e})),l="";if(s.length>1){var c=s.pop();l=s.join("---COMMA---"),0===c.indexOf(" at ")?l+=c:l+="---COMMA---"+c}else l=s[0];console[i](l)}},24:function(e,t,o){"use strict";var r=o(120),n=o(48),a=o(1);var i=Object(a.a)(n.default,r.b,r.c,!1,null,null,"71661a13",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(147).default,this.options.style):Object.assign(this.options.style,o(147).default)}).call(i),t.default=i.exports},3:function(e,t,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(4).default,Vue.prototype.__$appStyle__)},4:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r);for(var a in r)"default"!==a&&function(e){o.d(t,e,(function(){return r[e]}))}(a);t.default=n.a},48:function(e,t,o){"use strict";var r=o(49),n=o.n(r);t.default=n.a},49:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;uni.getSystemInfoSync();var o=getApp(),r={components:{},data:function(){return{screenHeight:0,page:0,totalPage:0,followsList:[{vlogerId:"1001",face:"../../static/face/face-arrow-1.png",nickname:"\u98ce\u95f4\u5f71\u6708",followed:!1},{vlogerId:"1002",face:"../../static/face/face-arrow-1.png",nickname:"\u6155\u8bfe\u7f51",followed:!0},{vlogerId:"1003",face:"../../static/face/face-arrow-1.png",nickname:"\u98ce\u95f4\u5f71\u6708",followed:!1}]}},onLoad:function(){this.queryMyFollowList(0)},methods:{reFreshList:function(t,o){var r=this.followsList;e("log",o," at pages/me/myFollows.nvue:143");for(var n=0;n<r.length;n++){var a=r[n];a.vlogerId==t&&(a.followed=o,r.splice(n,1,a))}this.followsList=r,e("log",this.followsList," at pages/me/myFollows.nvue:152")},cancelFollow:function(t){var r=this,n=getApp().getUserInfoSession().id,a=o.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:n,headerUserToken:o.getUserSessionToken()},url:a+"/fans/cancel?myId="+n+"&vlogerId="+t,success:function(o){e("log",o," at pages/me/myFollows.nvue:166"),200==o.data.status?r.reFreshList(t,!1):uni.showToast({title:o.data.msg,icon:"none",duration:3e3})}})},followMe:function(t){var r=this,n=getApp().getUserInfoSession().id,a=o.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:n,headerUserToken:o.getUserSessionToken()},url:a+"/fans/follow?myId="+n+"&vlogerId="+t,success:function(o){e("log",o," at pages/me/myFollows.nvue:194"),200==o.data.status?r.reFreshList(t,!0):uni.showToast({title:o.data.msg,icon:"none",duration:3e3})}})},queryMyFollowList:function(t){var r=this;t+=1;var n=getApp().getUserInfoSession().id,a=o.globalData.serverUrl;uni.request({method:"GET",header:{headerUserId:n,headerUserToken:o.getUserSessionToken()},url:a+"/fans/queryMyFollows?myId="+n+"&page="+t+"&pageSize=10",success:function(o){if(e("log",o," at pages/me/myFollows.nvue:227"),200==o.data.status){var n=o.data.data.rows,a=o.data.data.total;r.followsList=r.followsList.concat(n),r.page=t,r.totalPage=a}}})},pagingFollowsList:function(){this.page>=this.totalPage||this.queryMyFollowList(this.page)}}};t.default=r}).call(this,o(2).default)},50:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".user-wrapper":{"":{paddingLeft:["30rpx",0,0,5],paddingRight:["30rpx",0,0,5],width:["750rpx",0,0,5],height:["120rpx",0,0,5],display:["flex",0,0,5],flexDirection:["row",0,0,5],justifyContent:["space-between",0,0,5],marginTop:["20rpx",0,0,5],marginBottom:["20rpx",0,0,5]}},".user-name":{"":{color:["#FFFFFF",0,0,6],fontSize:["15",0,0,6],marginLeft:["20rpx",0,0,6]}},".operator-wrapper":{"":{width:["140rpx",0,0,7],height:["60rpx",0,0,7],display:["flex",0,0,7],flexDirection:["row",0,0,7],justifyContent:["center",0,0,7],backgroundColor:["#ef274d",0,0,7],borderRadius:["10",0,0,7]}},".operator-words":{"":{color:["#FFFFFF",0,0,8],fontSize:["14",0,0,8]}},".user-info":{"":{display:["flex",0,0,9],flexDirection:["row",0,0,9],justifyContent:["flex-start",0,0,9]}},".face":{"":{width:["110rpx",0,0,10],height:["110rpx",0,0,10],borderRadius:["100rpx",0,0,10],borderWidth:["1",0,0,10],borderColor:["#F1F1F1",0,0,10]}},"@VERSION":2}}});