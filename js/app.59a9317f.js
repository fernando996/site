(function(t){function e(e){for(var o,s,i=e[0],c=e[1],u=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],o=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var o={},n={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f37df37d"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,o){r=n[t]=[e,o]}));e.push(r[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var r=n[t];if(0!==r){if(r){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,r[1](u)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(r,o,function(e){return t[e]}.bind(null,o));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2e6e":function(t,e,r){"use strict";var o=r("ee0c"),n=r.n(o);n.a},"4dfc":function(t,e,r){t.exports=r.p+"img/programming.6f820574.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("Header"),r("v-content",[r("router-view")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{app:"",color:t.locationColor,flat:t.locationFlat,dark:""}},[r("v-spacer"),t._l(t.socialNetworks,(function(e,o){return r("v-tooltip",{key:o,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,a=o.attrs;return[r("v-btn",t._g(t._b({attrs:{href:e.href,target:"_blank",icon:"",color:""}},"v-btn",a,!1),n),[r("v-icon",[t._v(t._s(e.icon))])],1)]}}],null,!0)},[r("span",[t._v(t._s(e.text))])])}))],2)},i=[],c={name:"Header",data:function(){return{offsetTop:0,socialNetworks:[{text:"Facebook",href:"https://github.com/vuetifyjs/awesome-vuetify",icon:"fab fa-facebook-square"},{text:"Instagram",href:"https://github.com/vuetifyjs/vuetify",icon:"fab fa-instagram"},{text:"GitHub",href:"https://github.com/fernando996",icon:"fab fa-github"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},computed:{locationColor:function(){return this.appBarLocDef()?"transparent":"primary"},locationFlat:function(){return this.appBarLocDef()}},methods:{onScroll:function(){this.offsetTop=window.pageYOffset||document.documentElement.scrollTop},appBarLocDef:function(){var t=this.$route.path||!1;return"/"==t&&this.offsetTop<445}},mounted:function(){document.addEventListener("scroll",this.scrollListener)}},u=c,l=r("2877"),f=r("6544"),p=r.n(f),h=r("40dc"),m=r("8336"),d=r("132d"),v=r("2fa4"),b=r("3a2f"),y=r("269a"),g=r.n(y),x=r("f977"),w=Object(l["a"])(u,s,i,!1,null,null,null),_=w.exports;p()(w,{VAppBar:h["a"],VBtn:m["a"],VIcon:d["a"],VSpacer:v["a"],VTooltip:b["a"]}),g()(w,{Scroll:x["b"]});var j={name:"App",components:{Header:_},data:function(){return{}}},C=j,k=r("7496"),V=r("a75b"),O=Object(l["a"])(C,n,a,!1,null,null,null),S=O.exports;p()(O,{VApp:k["a"],VContent:V["a"]});r("15f5");var E=r("f309");o["a"].use(E["a"]);var T=new E["a"]({icons:{iconfont:"fa"}}),L=(r("d3b7"),r("8c4f")),P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("v-parallax",{attrs:{dark:"",src:r("4dfc")}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"350"}},[o("v-img",{staticClass:"white--text align-end",attrs:{src:r("aa55"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[o("v-card-title",[t._v("Fernando Martins")])],1),o("v-card-subtitle",[t._v("Software Engineer")])],1)],1)],1)],1),o("HelloWorld")],1)},q=[],A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:r("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,r){return o("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,r){return o("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,r){return o("a",{key:r,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},H=[],F={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},M=F,D=r("62ad"),N=r("a523"),$=r("adda"),B=r("0fd9"),I=Object(l["a"])(M,A,H,!1,null,null,null),W=I.exports;p()(I,{VCol:D["a"],VContainer:N["a"],VImg:$["a"],VRow:B["a"]});var J={name:"Home",components:{HelloWorld:W}},Q=J,R=(r("2e6e"),r("b0af")),G=r("99d9"),Y=r("8b9c"),z=Object(l["a"])(Q,P,q,!1,null,"66fc38ec",null),K=z.exports;p()(z,{VCard:R["a"],VCardSubtitle:G["a"],VCardTitle:G["b"],VCol:D["a"],VImg:$["a"],VParallax:Y["a"],VRow:B["a"]}),o["a"].use(L["a"]);var U=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],X=new L["a"]({routes:U}),Z=X;o["a"].config.productionTip=!1,new o["a"]({vuetify:T,router:Z,render:function(t){return t(S)}}).$mount("#app")},"9b19":function(t,e,r){t.exports=r.p+"img/logo.63a7d78d.svg"},aa55:function(t,e,r){t.exports=r.p+"img/card-profile1-square.3122abf4.jpg"},ee0c:function(t,e,r){}});
//# sourceMappingURL=app.59a9317f.js.map