(function(t){function e(e){for(var n,a,c=e[0],u=e[1],s=e[2],d=0,l=[];d<c.length;d++)a=c[d],o[a]&&l.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);f&&f(e);while(l.length)l.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=u(u.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-0ead3052":"73b24ec0","chunk-a240de86":"91bdea55"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(t){var e=[],r={"chunk-0ead3052":1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise(function(e,r){for(var n="css/"+({}[t]||t)+"."+{"chunk-0ead3052":"4d03ce8f","chunk-a240de86":"31d6cfe0"}[t]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===o))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===n||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){a[t]=0}));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(t),s=function(e){d.onerror=d.onload=null,clearTimeout(l);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");i.type=n,i.request=a,r[1](i)}o[t]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,r){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(r,n,function(e){return t[e]}.bind(null,n));return r},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},1308:function(t,e,r){"use strict";r.d(e,"c",function(){return n}),r.d(e,"a",function(){return a}),r.d(e,"b",function(){return o}),r.d(e,"d",function(){return i}),r.d(e,"e",function(){return c});var n="loadOrders",a="getOrder",o="loadOrder",i="loadProducts",c="loadVariations"},"34fa":function(t,e,r){"use strict";r.d(e,"f",function(){return n}),r.d(e,"g",function(){return a}),r.d(e,"h",function(){return o}),r.d(e,"a",function(){return i}),r.d(e,"d",function(){return c}),r.d(e,"c",function(){return u}),r.d(e,"b",function(){return s}),r.d(e,"e",function(){return d}),r.d(e,"k",function(){return l}),r.d(e,"i",function(){return f}),r.d(e,"j",function(){return p});var n="setOrders",a="setProducts",o="setVariation",i="addProductToCart",c="removeItemFromCart",u="deleteItemFromCart",s="clearCart",d="setError",l="unsetError",f="startVariationsLoading",p="stopVariationsLoading"},"555f":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex d-flex-row justify-content-center align-self-center"},[r("div",{staticClass:"spinner-border",attrs:{role:"status"}},[r("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],o={name:"loader"},i=o,c=(r("556f"),r("2877")),u=Object(c["a"])(i,n,a,!1,null,"b693cf30",null);e["a"]=u.exports},"556f":function(t,e,r){"use strict";var n=r("d411"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("navbar"),t.error?r("alert",{attrs:{message:t.error}}):t._e(),r("router-view")],1)},o=[],i=r("cebc"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Shop")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[r("ul",{staticClass:"navbar-nav"},[r("li",{staticClass:"nav-item active"},[r("router-link",{staticClass:"nav-link",attrs:{to:"/orders"}},[t._v("Orders")])],1)])])],1)},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],s={name:"navbar"},d=s,l=r("2877"),f=Object(l["a"])(d,c,u,!1,null,null,null),p=f.exports,v=r("ecee"),h=r("c074"),b=r("ad3d"),m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"alert alert-danger fixed-top center-block",attrs:{role:"alert"}},[r("span",[t._v(t._s(t.message))]),r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},g=[],_=r("34fa"),y={name:"alert",props:["message"],methods:{close:function(){this.$store.commit(_["k"])}}},O=y,w=Object(l["a"])(O,m,g,!1,null,null,null),j=w.exports,k=r("2f62");v["c"].add(h["a"],h["b"],h["d"],h["c"]),n["a"].component("font-awesome-icon",b["a"]);var x={name:"App",components:{Navbar:p,Alert:j},computed:Object(i["a"])({},Object(k["b"])(["error"]))},C=x,I=Object(l["a"])(C,a,o,!1,null,null,null),E=I.exports,P=r("8c4f"),L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("loader"):t.order?r("div",{staticClass:"orders-list container"},[r("h1",[t._v("Order "),r("small",{staticClass:"text-muted"},[t._v("# "+t._s(t.order.id))])]),r("h3",[t._v("Customer")]),r("p",{staticClass:"mb5"},[t._v("\n      "+t._s(t.order.billing.first_name)+" "+t._s(t.order.billing.last_name)),r("br"),t._v("\n      "+t._s(t.order.billing.address_1)+" "+t._s(t.order.billing.address_2)),r("br"),t._v("\n      "+t._s(t.order.billing.city)+" "+t._s(t.order.billing.state)),r("br"),t._v("\n      "+t._s(t.order.billing.postcode)+" "+t._s(t.order.billing.country)),r("br")]),r("table",{staticClass:"table"},[r("tr",[r("th",[t._v("Product")]),r("th",[t._v("Quantity")]),r("th",[t._v("Price")]),r("th",[t._v("Total")])]),t._l(t.order.line_items,function(e){return r("tr",{key:e.id,staticClass:"line-item"},[r("td",[t._v(t._s(e.name))]),r("td",[t._v(t._s(e.quantity))]),r("td",[t._v(t._s(t.order.currency_symbol)+t._s(e.price))]),r("td",[t._v(t._s(t.order.currency_symbol)+t._s(e.total))])])})],2),r("p",[r("strong",[t._v("Total: ")]),t._v("\n      "+t._s(t.order.total)+" "+t._s(t.order.currency)+"\n    ")])]):t._e()],1)},R=[],U=(r("96cf"),r("3b8d")),A=r("1308"),S=r("555f"),T={name:"order",components:{Loader:S["a"]},data:function(){return{order:null,isLoading:!1}},created:function(){this.loadOrder()},methods:{loadOrder:function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.prev=1,t.next=4,this.$store.dispatch(A["a"],this.$route.params.id);case 4:this.order=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),this.$store.commit(_["e"],"Something went wrong");case 10:return t.prev=10,this.isLoading=!1,t.finish(10);case 13:case"end":return t.stop()}},t,this,[[1,7,10,13]])}));function e(){return t.apply(this,arguments)}return e}()}},$=T,q=Object(l["a"])($,L,R,!1,null,null,null),N=q.exports;n["a"].use(P["a"]);var D,V,M=new P["a"]({mode:"hash",base:"/",routes:[{path:"/orders",name:"ordersList",component:function(){return r.e("chunk-a240de86").then(r.bind(null,"bf4b"))}},{path:"/orders/new",name:"orderNew",component:function(){return r.e("chunk-0ead3052").then(r.bind(null,"8a5f"))}},{path:"/orders/:id",name:"order",component:N},{path:"*",redirect:"/orders/new"}]}),B=r("bd86"),F=(r("ac6a"),r("8e98")),J=(r("456d"),r("bc3a")),H=r.n(J),K={baseUrl:"http://new.ladaclubhungary.hu",basePath:"api/products",getAll:function(){return H.a.get(this.getUrl(null,{status:"publish",stock_status:"instock",orderby:"title",per_page:100}))},get:function(t){return H.a.get(this.getUrl(t))},getVariations:function(t){return H.a.get(this.getUrl("".concat(t,"/variations")))},getUrl:function(t,e){var r=this.baseUrl+"/"+this.basePath;if(t&&(r+="/"+t),e){r+="?";for(var n=0,a=Object.keys(e);n<a.length;n++){var o=a[n];r+=encodeURIComponent(o)+"="+encodeURIComponent(e[o])+"&"}}return r}},Q=(D={},Object(B["a"])(D,A["c"],function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F["a"].getAll();case 2:r=t.sent,e.commit(_["f"],r.data);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(B["a"])(D,A["b"],function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,F["a"].get(r);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()),Object(B["a"])(D,A["a"],function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters.order(r)||e.dispatch(A["b"],r),t.abrupt("return",n);case 2:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()),Object(B["a"])(D,A["d"],function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r={},e.commit(_["g"],r),t.next=4,K.getAll();case 4:return n=t.sent.data,n.forEach(function(t){t.variationsData=[],r[t.id]=t}),t.next=8,e.commit(_["g"],r);case 8:n.forEach(function(t){e.dispatch(A["e"],t)});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(B["a"])(D,A["e"],function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit(_["i"],r.id),t.next=3,K.getVariations(r.id);case 3:n=t.sent.data,n.forEach(function(){var t=Object(U["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.commit(_["h"],{productID:r.id,variation:n});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),e.commit(_["j"],r.id);case 6:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()),D),z=function(t,e){return t.productId===e.productId&&t.variationId===e.variationId},G=(V={},Object(B["a"])(V,_["f"],function(t,e){t.orders=e}),Object(B["a"])(V,_["g"],function(t,e){t.products=e}),Object(B["a"])(V,_["e"],function(t,e){t.error=e}),Object(B["a"])(V,_["k"],function(t){t.error=null}),Object(B["a"])(V,_["a"],function(t,e){var r=e.productId,n=e.variationId,a=e.quantity,o=!1,i={productId:r,variationId:n,quantity:a};t.cart.some(function(t){return z(t,i)&&(t.quantity+=i.quantity,o=!0),o}),o||t.cart.push({productId:r,variationId:n,quantity:a})}),Object(B["a"])(V,_["d"],function(t,e){var r=e.productId,n=e.variationId,a={productId:r,variationId:n};t.cart.some(function(e,r){return!!z(e,a)&&(e.quantity-=1,e.quantity<=0&&t.cart.splice(r,1),!0)})}),Object(B["a"])(V,_["c"],function(t,e){var r=e.productId,n=e.variationId,a={productId:r,variationId:n};t.cart.some(function(e,r){return!!z(e,a)&&(t.cart.splice(r,1),!0)})}),Object(B["a"])(V,_["b"],function(t){t.cart=[]}),Object(B["a"])(V,_["i"],function(t,e){t.variationLoading=Object(i["a"])({},t.variationLoading,Object(B["a"])({},e,!0))}),Object(B["a"])(V,_["j"],function(t,e){t.variationLoading=Object(i["a"])({},t.variationLoading,Object(B["a"])({},e,!1))}),Object(B["a"])(V,_["h"],function(t,e){var r=e.productID,n=e.variation;if(!t.products.hasOwnProperty(r))throw new Error("Could not find product for variation");t.products[r].variationsData.push(n),t.products=Object(i["a"])({},t.products)}),V),W={order:function(t){return function(e){var r=t.orders.filter(function(t){return t.id===e});return r.length?r.pop():null}},product:function(t){return function(e){return t.products[e]}},variation:function(t){return function(e,r){var n,a=t.products[e];return a&&(n=a.variationsData.filter(function(t){return t.id===r}),n=1===n.length?n[0]:void 0),n}}},X={state:{orders:[],products:{},cart:[],error:null,variationLoading:{}},actions:Q,mutations:G,getters:W};n["a"].use(k["a"]);var Y=function(){return new k["a"].Store(X)};n["a"].config.productionTip=!1,n["a"].use(k["a"]);var Z=Y();new n["a"]({router:M,store:Z,render:function(t){return t(E)}}).$mount("#app")},"8e98":function(t,e,r){"use strict";var n=r("bc3a"),a=r.n(n);e["a"]={baseUrl:"http://new.ladaclubhungary.hu",basePath:"api/orders",getAll:function(){return a.a.get(this.getUrl())},get:function(t){return a.a.get(this.getUrl(t))},create:function(t){return a.a.post(this.getUrl(),t)},getUrl:function(t){var e=this.baseUrl+"/"+this.basePath;return e+(t?"/"+t:"")}}},d411:function(t,e,r){}});
//# sourceMappingURL=app.26898d58.js.map