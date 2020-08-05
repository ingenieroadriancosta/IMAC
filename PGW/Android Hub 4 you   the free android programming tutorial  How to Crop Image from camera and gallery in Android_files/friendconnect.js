window.google = window["google"] || {};google.friendconnect = google.friendconnect_ || {};if (!window['__ps_loaded__']) {/*http://www-a-fc-opensocial.googleusercontent.com/gadgets/js/rpc:core.util.js?c=1*/
window['___jsl'] = window['___jsl'] || {};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});window['___jsl']=window['___jsl']||{};(window['___jsl']['ci'] = (window['___jsl']['ci'] || [])).push({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
/* [start] feature=taming */
var safeJSON=window.safeJSON;
var tamings___=window.tamings___||[];
var bridge___;
var caja___=window.caja___;
var ___=window.___;;

/* [end] feature=taming */

/* [start] feature=gapi-globals */
var gapi=window.gapi||{};gapi.client=window.gapi&&window.gapi.client||{};
;
;

/* [end] feature=gapi-globals */

/* [start] feature=globals */
var gadgets=window.gadgets||{},shindig=window.shindig||{},osapi=window.osapi=window.osapi||{},google=window.google||{};
;
;

/* [end] feature=globals */

/* [start] feature=core.config.base */
window['___cfg'] = window['___cfg'] || window['___gcfg'];;
if(!window.gadgets["config"]){gadgets.config=function(){var f;
var h={};
var b={};
function c(j,l){for(var k in l){if(!l.hasOwnProperty(k)){continue
}if(typeof j[k]==="object"&&typeof l[k]==="object"){c(j[k],l[k])
}else{j[k]=l[k]
}}}function i(){var j=document.scripts||document.getElementsByTagName("script");
if(!j||j.length==0){return null
}var m;
if(f.u){for(var k=0;
!m&&k<j.length;
++k){var l=j[k];
if(l.src&&l.src.indexOf(f.u)==0){m=l
}}}if(!m){m=j[j.length-1]
}if(!m.src){return null
}return m
}function a(j){var k="";
if(j.nodeType==3||j.nodeType==4){k=j.nodeValue
}else{if(j.innerText){k=j.innerText
}else{if(j.innerHTML){k=j.innerHTML
}else{if(j.firstChild){var l=[];
for(var m=j.firstChild;
m;
m=m.nextSibling){l.push(a(m))
}k=l.join("")
}}}}return k
}function e(k){if(!k){return{}
}var j;
while(k.charCodeAt(k.length-1)==0){k=k.substring(0,k.length-1)
}try{j=(new Function("return ("+k+"\n)"))()
}catch(l){}if(typeof j==="object"){return j
}try{j=(new Function("return ({"+k+"\n})"))()
}catch(l){}return typeof j==="object"?j:{}
}function g(n){var p=window.___cfg;
if(p){c(n,p)
}var o=i();
if(!o){return
}var k=a(o);
var j=e(k);
if(f.f&&f.f.length==1){var m=f.f[0];
if(!j[m]){var l={};
l[f.f[0]]=j;
j=l
}}c(n,j)
}function d(o){for(var l in h){if(h.hasOwnProperty(l)){var n=h[l];
for(var m=0,k=n.length;
m<k;
++m){o(l,n[m])
}}}}return{register:function(l,k,j,m){var n=h[l];
if(!n){n=[];
h[l]=n
}n.push({validators:k||{},callback:j,callOnUpdate:m})
},get:function(j){if(j){return b[j]||{}
}return b
},init:function(k,j){f=window.___jsl||{};
c(b,k);
g(b);
var l=window.___config||{};
c(b,l);
d(function(q,p){var o=b[q];
if(o&&!j){var m=p.validators;
for(var n in m){if(m.hasOwnProperty(n)){if(!m[n](o[n])){throw new Error('Invalid config value "'+o[n]+'" for parameter "'+n+'" in component "'+q+'"')
}}}}if(p.callback){p.callback(b)
}})
},update:function(k,p){var o=(window.gapi&&window.gapi["config"]&&window.gapi["config"]["update"]);
if(!p&&o){o(k)
}var n=[];
d(function(q,j){if(k.hasOwnProperty(q)||(p&&b&&b[q])){if(j.callback&&j.callOnUpdate){n.push(j.callback)
}}});
b=p?{}:b||{};
c(b,k);
for(var m=0,l=n.length;
m<l;
++m){n[m](b)
}}}
}()
}else{gadgets.config=window.gadgets["config"];
gadgets.config.register=gadgets.config.register;
gadgets.config.get=gadgets.config.get;
gadgets.config.init=gadgets.config.init;
gadgets.config.update=gadgets.config.update
};;

/* [end] feature=core.config.base */

/* [start] feature=core.log */
gadgets.log=(function(){var e=1;
var a=2;
var f=3;
var c=4;
var d=function(i){b(e,i)
};
gadgets.warn=function(i){b(a,i)
};
gadgets.error=function(i){b(f,i)
};
gadgets.debug=function(i){};
gadgets.setLogLevel=function(i){h=i
};
function b(k,i){if(k<h||!g){return
}if(k===a&&g.warn){g.warn(i)
}else{if(k===f&&g.error){try{g.error(i)
}catch(j){}}else{if(g.log){g.log(i)
}}}}d.INFO=e;
d.WARNING=a;
d.NONE=c;
var h=e;
var g=window.console?window.console:window.opera?window.opera.postError:undefined;
return d
})();;
;

/* [end] feature=core.log */

/* [start] feature=gapi.util-globals */
gapi.util=window.gapi&&window.gapi.util||{};
;

/* [end] feature=gapi.util-globals */

/* [start] feature=core.config */
(function(){gadgets.config.EnumValidator=function(d){var c=[];
if(arguments.length>1){for(var b=0,a;
(a=arguments[b]);
++b){c.push(a)
}}else{c=d
}return function(f){for(var e=0,g;
(g=c[e]);
++e){if(f===c[e]){return true
}}return false
}
};
gadgets.config.RegExValidator=function(a){return function(b){return a.test(b)
}
};
gadgets.config.ExistsValidator=function(a){return typeof a!=="undefined"
};
gadgets.config.NonEmptyStringValidator=function(a){return typeof a==="string"&&a.length>0
};
gadgets.config.BooleanValidator=function(a){return typeof a==="boolean"
};
gadgets.config.LikeValidator=function(a){return function(c){for(var d in a){if(a.hasOwnProperty(d)){var b=a[d];
if(!b(c[d])){return false
}}}return true
}
}
})();;

/* [end] feature=core.config */

/* [start] feature=core.util.base */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.makeClosure=function(d,f,e){var c=[];
for(var b=2,a=arguments.length;
b<a;
++b){c.push(arguments[b])
}return function(){var g=c.slice();
for(var k=0,h=arguments.length;
k<h;
++k){g.push(arguments[k])
}return f.apply(d,g)
}
};
gadgets.util.makeEnum=function(b){var c,a,d={};
for(c=0;
(a=b[c]);
++c){d[a]=a
}return d
}
})();;

/* [end] feature=core.util.base */

/* [start] feature=core.util.dom */
gadgets.util=gadgets.util||{};
(function(){var c="http://www.w3.org/1999/xhtml";
function b(f,e){var h=e||{};
for(var g in h){if(h.hasOwnProperty(g)){f[g]=h[g]
}}}function d(g,f){var e=["<",g];
var i=f||{};
for(var h in i){if(i.hasOwnProperty(h)){e.push(" ");
e.push(h);
e.push('="');
e.push(gadgets.util.escapeString(i[h]));
e.push('"')
}}e.push("></");
e.push(g);
e.push(">");
return e.join("")
}function a(f){var g="";
if(f.nodeType==3||f.nodeType==4){g=f.nodeValue
}else{if(f.innerText){g=f.innerText
}else{if(f.innerHTML){g=f.innerHTML
}else{if(f.firstChild){var e=[];
for(var h=f.firstChild;
h;
h=h.nextSibling){e.push(a(h))
}g=e.join("")
}}}}return g
}gadgets.util.createElement=function(f){var e;
if((!document.body)||document.body.namespaceURI){try{e=document.createElementNS(c,f)
}catch(g){}}return e||document.createElement(f)
};
gadgets.util.createIframeElement=function(g){var i=gadgets.util.createElement("iframe");
try{var e=d("iframe",g);
var f=gadgets.util.createElement(e);
if(f&&((!i)||((f.tagName==i.tagName)&&(f.namespaceURI==i.namespaceURI)))){i=f
}}catch(h){}b(i,g);
return i
};
gadgets.util.getBodyElement=function(){if(document.body){return document.body
}try{var f=document.getElementsByTagNameNS(c,"body");
if(f&&(f.length==1)){return f[0]
}}catch(e){}return document.documentElement||document
};
gadgets.util.getInnerText=function(e){return a(e)
}
})();;

/* [end] feature=core.util.dom */

/* [start] feature=core.util.event */
gadgets.util=gadgets.util||{};
(function(){gadgets.util.attachBrowserEvent=function(c,b,d,a){if(typeof c.addEventListener!="undefined"){c.addEventListener(b,d,a)
}else{if(typeof c.attachEvent!="undefined"){c.attachEvent("on"+b,d)
}else{gadgets.warn("cannot attachBrowserEvent: "+b)
}}};
gadgets.util.removeBrowserEvent=function(c,b,d,a){if(c.removeEventListener){c.removeEventListener(b,d,a)
}else{if(c.detachEvent){c.detachEvent("on"+b,d)
}else{gadgets.warn("cannot removeBrowserEvent: "+b)
}}}
})();;

/* [end] feature=core.util.event */

/* [start] feature=core.util.onload */
gadgets.util=gadgets.util||{};
(function(){var a=[];
gadgets.util.registerOnLoadHandler=function(b){a.push(b)
};
gadgets.util.runOnLoadHandlers=function(){for(var c=0,b=a.length;
c<b;
++c){a[c]()
}}
})();;

/* [end] feature=core.util.onload */

/* [start] feature=core.util.string */
gadgets.util=gadgets.util||{};
(function(){var a={0:false,10:true,13:true,34:true,39:true,60:true,62:true,92:true,8232:true,8233:true,65282:true,65287:true,65308:true,65310:true,65340:true};
function b(c,d){return String.fromCharCode(d)
}gadgets.util.escape=function(c,g){if(!c){return c
}else{if(typeof c==="string"){return gadgets.util.escapeString(c)
}else{if(typeof c==="Array"){for(var f=0,d=c.length;
f<d;
++f){c[f]=gadgets.util.escape(c[f])
}}else{if(typeof c==="object"&&g){var e={};
for(var h in c){if(c.hasOwnProperty(h)){e[gadgets.util.escapeString(h)]=gadgets.util.escape(c[h],true)
}}return e
}}}}return c
};
gadgets.util.escapeString=function(g){if(!g){return g
}var d=[],f,h;
for(var e=0,c=g.length;
e<c;
++e){f=g.charCodeAt(e);
h=a[f];
if(h===true){d.push("&#",f,";")
}else{if(h!==false){d.push(g.charAt(e))
}}}return d.join("")
};
gadgets.util.unescapeString=function(c){if(!c){return c
}return c.replace(/&#([0-9]+);/g,b)
}
})();;

/* [end] feature=core.util.string */

/* [start] feature=core.util.urlparams */
gadgets.util=gadgets.util||{};
(function(){var a=null;
function b(e){var f;
var c=e.indexOf("?");
var d=e.indexOf("#");
if(d===-1){f=e.substr(c+1)
}else{f=[e.substr(c+1,d-c-1),"&",e.substr(d+1)].join("")
}return f.split("&")
}gadgets.util.getUrlParameters=function(p){var d=typeof p==="undefined";
if(a!==null&&d){return a
}var l={};
var f=b(p||window.location.href);
var n=window.decodeURIComponent?decodeURIComponent:unescape;
for(var h=0,g=f.length;
h<g;
++h){var m=f[h].indexOf("=");
if(m===-1){continue
}var c=f[h].substring(0,m);
var o=f[h].substring(m+1);
o=o.replace(/\+/g," ");
try{l[c]=n(o)
}catch(k){}}if(d){a=l
}return l
};
gadgets.util.getUrlParameters()
})();;

/* [end] feature=core.util.urlparams */

/* [start] feature=gapi.util.getOrigin */
gapi.util.getOrigin=function(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1),b=b.substring(0,d);if("http"===
a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c};
;

/* [end] feature=gapi.util.getOrigin */

/* [start] feature=core.json */
if(window.JSON&&window.JSON.parse&&window.JSON.stringify){gadgets.json=(function(){var a=/___$/;
function b(d,e){var c=this[d];
return c
}return{parse:function(d){try{return window.JSON.parse(d)
}catch(c){return false
}},stringify:function(d){var h=window.JSON.stringify;
function f(e){return h.call(this,e,b)
}var g=(Array.prototype.toJSON&&h([{x:1}])==='"[{\\"x\\": 1}]"')?f:h;
try{return g(d,function(i,e){return !a.test(i)?e:void 0
})
}catch(c){return null
}}}
})()
};;
;
if(!(window.JSON&&window.JSON.parse&&window.JSON.stringify)){gadgets.json=function(){function f(n){return n<10?"0"+n:n
}Date.prototype.toJSON=function(){return[this.getUTCFullYear(),"-",f(this.getUTCMonth()+1),"-",f(this.getUTCDate()),"T",f(this.getUTCHours()),":",f(this.getUTCMinutes()),":",f(this.getUTCSeconds()),"Z"].join("")
};
var m={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
function stringify(value){var a,i,k,l,r=/[\"\\\x00-\x1f\x7f-\x9f]/g,v;
switch(typeof value){case"string":return r.test(value)?'"'+value.replace(r,function(a){var c=m[a];
if(c){return c
}c=a.charCodeAt();
return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)
})+'"':'"'+value+'"';
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}a=[];
if(typeof value.length==="number"&&!value.propertyIsEnumerable("length")){l=value.length;
for(i=0;
i<l;
i+=1){a.push(stringify(value[i])||"null")
}return"["+a.join(",")+"]"
}for(k in value){if(/___$/.test(k)){continue
}if(value.hasOwnProperty(k)){if(typeof k==="string"){v=stringify(value[k]);
if(v){a.push(stringify(k)+":"+v)
}}}}return"{"+a.join(",")+"}"
}return""
}return{stringify:stringify,parse:function(text){if(/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){return eval("("+text+")")
}return false
}}
}()
};;
gadgets.json.flatten=function(c){var d={};
if(c===null||c===undefined){return d
}for(var a in c){if(c.hasOwnProperty(a)){var b=c[a];
if(null===b||undefined===b){continue
}d[a]=(typeof b==="string")?b:gadgets.json.stringify(b)
}}return d
};;

/* [end] feature=core.json */

/* [start] feature=core.util */
gadgets.util=gadgets.util||{};
(function(){var b={};
var a={};
function c(d){b=d["core.util"]||{}
}if(gadgets.config){gadgets.config.register("core.util",null,c)
}gadgets.util.getFeatureParameters=function(d){return typeof b[d]==="undefined"?null:b[d]
};
gadgets.util.hasFeature=function(d){return typeof b[d]!=="undefined"
};
gadgets.util.getServices=function(){return a
}
})();;

/* [end] feature=core.util */

/* [start] feature=rpc */
gadgets.rpctx=gadgets.rpctx||{};
if(!gadgets.rpctx.wpm){gadgets.rpctx.wpm=function(){var e,d;
var c=true;
function b(h,j,g){if(typeof window.addEventListener!="undefined"){window.addEventListener(h,j,g)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("on"+h,j)
}}if(h==="message"){window.___jsl=window.___jsl||{};
var i=window.___jsl;
i.RPMQ=i.RPMQ||[];
i.RPMQ.push(j)
}}function a(h,i,g){if(window.removeEventListener){window.removeEventListener(h,i,g)
}else{if(window.detachEvent){window.detachEvent("on"+h,i)
}}}function f(h){var i=gadgets.json.parse(h.data);
if(!i||!i.f){return
}gadgets.debug("gadgets.rpc.receive("+window.name+"): "+h.data);
var g=gadgets.rpc.getTargetOrigin(i.f);
if(c&&(typeof h.origin!=="undefined"?h.origin!==g:h.domain!==/^.+:\/\/([^:]+).*/.exec(g)[1])){gadgets.error("Invalid rpc message origin. "+g+" vs "+(h.origin||""));
return
}e(i,h.origin)
}return{getCode:function(){return"wpm"
},isParentVerifiable:function(){return true
},init:function(h,i){function g(k){var j=k&&k.rpc||{};
if(String(j.disableForceSecure)==="true"){c=false
}}gadgets.config.register("rpc",null,g);
e=h;
d=i;
b("message",f,false);
d("..",true);
return true
},setup:function(h,g){d(h,true);
return true
},call:function(h,k,j){var g=gadgets.rpc.getTargetOrigin(h);
var i=gadgets.rpc._getTargetWin(h);
if(g){window.setTimeout(function(){var l=gadgets.json.stringify(j);
gadgets.debug("gadgets.rpc.send("+window.name+"): "+l);
i.postMessage(l,g)
},0)
}else{if(h!=".."){gadgets.error("No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message")
}}return true
}}
}()
};;

       gadgets.rpctx.ifpc = gadgets.rpctx.wpm;
    ;
if(!window.gadgets||!window.gadgets["rpc"]){gadgets.rpc=function(){var M="__cb";
var S="";
var T="__ack";
var f=500;
var G=10;
var b="|";
var u="callback";
var g="origin";
var r="referer";
var s="legacy__";
var q={};
var W={};
var D={};
var B={};
var z=0;
var l={};
var m={};
var d={};
var n={};
var E={};
var e=null;
var p=null;
var A=(window.top!==window.self);
var v=window.name;
var J=function(){};
var P=0;
var Y=1;
var a=2;
var x=window.console;
var V=x&&x.log&&function(ae){x.log(ae)
}||function(){};
var R=(function(){function ae(af){return function(){V(af+": call ignored")
}
}return{getCode:function(){return"noop"
},isParentVerifiable:function(){return true
},init:ae("init"),setup:ae("setup"),call:ae("call")}
})();
if(gadgets.util){d=gadgets.util.getUrlParameters()
}function K(){if(d.rpctx=="flash"){return gadgets.rpctx.flash
}if(d.rpctx=="rmr"){return gadgets.rpctx.rmr
}var ae=typeof window.postMessage==="function"?gadgets.rpctx.wpm:typeof window.postMessage==="object"?gadgets.rpctx.wpm:window.ActiveXObject?(gadgets.rpctx.flash?gadgets.rpctx.flash:(gadgets.rpctx.nix?gadgets.rpctx.nix:gadgets.rpctx.ifpc)):navigator.userAgent.indexOf("WebKit")>0?gadgets.rpctx.rmr:navigator.product==="Gecko"?gadgets.rpctx.frameElement:gadgets.rpctx.ifpc;
if(!ae){ae=R
}return ae
}function k(aj,ah){if(n[aj]){return
}var af=H;
if(!ah){af=R
}n[aj]=af;
var ae=E[aj]||[];
for(var ag=0;
ag<ae.length;
++ag){var ai=ae[ag];
ai.t=F(aj);
af.call(aj,ai.f,ai)
}E[aj]=[]
}var I=false,U=false;
function N(){if(U){return
}function ae(){I=true
}if(typeof window.addEventListener!="undefined"){window.addEventListener("unload",ae,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onunload",ae)
}}U=true
}function j(ae,ai,af,ah,ag){if(!B[ai]||B[ai]!==af){gadgets.error("Invalid gadgets.rpc token. "+B[ai]+" vs "+af);
J(ai,a)
}ag.onunload=function(){if(m[ai]&&!I){J(ai,Y);
gadgets.rpc.removeReceiver(ai)
}};
N();
ah=gadgets.json.parse(decodeURIComponent(ah))
}function Z(ak,af){if(ak&&typeof ak.s==="string"&&typeof ak.f==="string"&&ak.a instanceof Array){if(B[ak.f]){if(B[ak.f]!==ak.t){gadgets.error("Invalid gadgets.rpc token. "+B[ak.f]+" vs "+ak.t);
J(ak.f,a)
}}if(ak.s===T){window.setTimeout(function(){k(ak.f,true)
},0);
return
}if(ak.c){ak[u]=function(al){var am=ak.g?s:"";
gadgets.rpc.call(ak.f,am+M,null,ak.c,al)
}
}if(af){var ag=t(af);
ak[g]=af;
var ah=ak.r,aj;
try{aj=t(ah)
}catch(ai){}if(!ah||aj!=ag){ah=af
}ak[r]=ah
}var ae=(q[ak.s]||q[S]).apply(ak,ak.a);
if(ak.c&&typeof ae!=="undefined"){gadgets.rpc.call(ak.f,M,null,ak.c,ae)
}}}function t(ag){if(!ag){return""
}ag=((ag.split("#"))[0].split("?"))[0];
ag=ag.toLowerCase();
if(ag.indexOf("//")==0){ag=window.location.protocol+ag
}if(ag.indexOf("://")==-1){ag=window.location.protocol+"//"+ag
}var ah=ag.substring(ag.indexOf("://")+3);
var ae=ah.indexOf("/");
if(ae!=-1){ah=ah.substring(0,ae)
}var aj=ag.substring(0,ag.indexOf("://"));
if(aj!=="http"&&aj!=="https"&&aj!=="chrome-extension"&&aj!=="file"){throw Error("Invalid URI scheme in origin")
}var ai="";
var ak=ah.indexOf(":");
if(ak!=-1){var af=ah.substring(ak+1);
ah=ah.substring(0,ak);
if((aj==="http"&&af!=="80")||(aj==="https"&&af!=="443")){ai=":"+af
}}return aj+"://"+ah+ai
}function C(af,ae){return"/"+af+(ae?b+ae:"")
}function y(ah){if(ah.charAt(0)=="/"){var af=ah.indexOf(b);
var ag=af>0?ah.substring(1,af):ah.substring(1);
var ae=af>0?ah.substring(af+1):null;
return{id:ag,origin:ae}
}else{return null
}}function ad(ag){if(typeof ag==="undefined"||ag===".."){return window.parent
}var af=y(ag);
if(af){return window.top.frames[af.id]
}ag=String(ag);
var ae=window.frames[ag];
if(ae){return ae
}ae=document.getElementById(ag);
if(ae&&ae.contentWindow){return ae.contentWindow
}return null
}function L(ah){var ag=null;
var ae=O(ah);
if(ae){ag=ae
}else{var af=y(ah);
if(af){ag=af.origin
}else{if(ah==".."){ag=d.parent
}else{ag=document.getElementById(ah).src
}}}return t(ag)
}var H=K();
q[S]=function(){V("Unknown RPC service: "+this["s"])
};
q[M]=function(af,ae){var ag=l[af];
if(ag){delete l[af];
ag.call(this,ae)
}};
function X(ag,ae){if(m[ag]===true){return
}if(typeof m[ag]==="undefined"){m[ag]=0
}var af=ad(ag);
if(ag===".."||af!=null){if(H.setup(ag,ae)===true){m[ag]=true;
return
}}if(m[ag]!==true&&m[ag]++<G){window.setTimeout(function(){X(ag,ae)
},f)
}else{n[ag]=R;
m[ag]=true
}}function O(af){var ae=W[af];
if(ae&&ae.substring(0,1)==="/"){if(ae.substring(1,2)==="/"){ae=document.location.protocol+ae
}else{ae=document.location.protocol+"//"+document.location.host+ae
}}return ae
}function ac(af,ae,ag){if(ae&&!/http(s)?:\/\/.+/.test(ae)){if(ae.indexOf("//")==0){ae=window.location.protocol+ae
}else{if(ae.charAt(0)=="/"){ae=window.location.protocol+"//"+window.location.host+ae
}else{if(ae.indexOf("://")==-1){ae=window.location.protocol+"//"+ae
}}}}W[af]=ae;
if(typeof ag!=="undefined"){D[af]=!!ag
}}function F(ae){return B[ae]
}function c(ae,af){af=af||"";
B[ae]=String(af);
X(ae,af)
}function ab(af){var ae=af.passReferrer||"";
var ag=ae.split(":",2);
e=ag[0]||"none";
p=ag[1]||"origin"
}function aa(ae){if(Q(ae)){H=gadgets.rpctx.ifpc||R;
H.init(Z,k)
}}function Q(ae){return String(ae.useLegacyProtocol)==="true"
}function h(af,ae){function ag(aj){var ai=aj&&aj.rpc||{};
ab(ai);
var ah=ai.parentRelayUrl||"";
ah=t(d.parent||ae)+ah;
ac("..",ah,Q(ai));
aa(ai);
c("..",af)
}if(!d.parent&&ae){ag({});
return
}gadgets.config.register("rpc",null,ag)
}function o(af,aj,al){var ai=null;
if(af.charAt(0)!="/"){if(!gadgets.util){return
}ai=document.getElementById(af);
if(!ai){throw new Error("Cannot set up gadgets.rpc receiver with ID: "+af+", element not found.")
}}var ae=ai&&ai.src;
var ag=aj||gadgets.rpc.getOrigin(ae);
ac(af,ag);
var ak=gadgets.util.getUrlParameters(ae);
var ah=al||ak.rpctoken;
c(af,ah)
}function i(ae,ag,ah){if(ae===".."){var af=ah||d.rpctoken||d.ifpctok||"";
h(af,ag)
}else{o(ae,ag,ah)
}}function w(ag){if(e==="bidir"||(e==="c2p"&&ag==="..")||(e==="p2c"&&ag!=="..")){var af=window.location.href;
var ah="?";
if(p==="query"){ah="#"
}else{if(p==="hash"){return af
}}var ae=af.lastIndexOf(ah);
ae=ae===-1?af.length:ae;
return af.substring(0,ae)
}return null
}return{config:function(ae){if(typeof ae.securityCallback==="function"){J=ae.securityCallback
}},register:function(af,ae){if(af===M||af===T){throw new Error("Cannot overwrite callback/ack service")
}if(af===S){throw new Error("Cannot overwrite default service: use registerDefault")
}q[af]=ae
},unregister:function(ae){if(ae===M||ae===T){throw new Error("Cannot delete callback/ack service")
}if(ae===S){throw new Error("Cannot delete default service: use unregisterDefault")
}delete q[ae]
},registerDefault:function(ae){q[S]=ae
},unregisterDefault:function(){delete q[S]
},forceParentVerifiable:function(){if(!H.isParentVerifiable()){H=gadgets.rpctx.ifpc
}},call:function(ae,ag,al,aj){ae=ae||"..";
var ak="..";
if(ae===".."){ak=v
}else{if(ae.charAt(0)=="/"){ak=C(v,gadgets.rpc.getOrigin(window.location.href))
}}++z;
if(al){l[z]=al
}var ai={s:ag,f:ak,c:al?z:0,a:Array.prototype.slice.call(arguments,3),t:B[ae],l:!!D[ae]};
var af=w(ae);
if(af){ai.r=af
}if(ae!==".."&&y(ae)==null&&!document.getElementById(ae)){return
}var ah=n[ae];
if(!ah&&y(ae)!==null){ah=H
}if(ag.indexOf(s)===0){ah=H;
ai.s=ag.substring(s.length);
ai.c=ai.c?ai.c:z
}ai.g=true;
ai.r=ak;
if(!ah){if(!E[ae]){E[ae]=[ai]
}else{E[ae].push(ai)
}return
}if(D[ae]){ah=gadgets.rpctx.ifpc
}if(ah.call(ae,ak,ai)===false){n[ae]=R;
H.call(ae,ak,ai)
}},getRelayUrl:O,setRelayUrl:ac,setAuthToken:c,setupReceiver:i,getAuthToken:F,removeReceiver:function(ae){delete W[ae];
delete D[ae];
delete B[ae];
delete m[ae];
delete n[ae]
},getRelayChannel:function(){return H.getCode()
},receive:function(af,ae){if(af.length>4){H._receiveMessage(af,Z)
}else{j.apply(null,af.concat(ae))
}},receiveSameDomain:function(ae){ae.a=Array.prototype.slice.call(ae.a);
window.setTimeout(function(){Z(ae)
},0)
},getOrigin:t,getTargetOrigin:L,init:function(){if(H.init(Z,k)===false){H=R
}if(A){i("..")
}else{gadgets.config.register("rpc",null,function(af){var ae=af.rpc||{};
ab(ae);
aa(ae)
})
}},_getTargetWin:ad,_parseSiblingId:y,ACK:T,RPC_ID:v||"..",SEC_ERROR_LOAD_TIMEOUT:P,SEC_ERROR_FRAME_PHISH:Y,SEC_ERROR_FORGED_MSG:a}
}();
gadgets.rpc.init()
}else{if(typeof gadgets.rpc=="undefined"||!gadgets.rpc){gadgets.rpc=window.gadgets["rpc"];
gadgets.rpc.config=gadgets.rpc.config;
gadgets.rpc.register=gadgets.rpc.register;
gadgets.rpc.unregister=gadgets.rpc.unregister;
gadgets.rpc.registerDefault=gadgets.rpc.registerDefault;
gadgets.rpc.unregisterDefault=gadgets.rpc.unregisterDefault;
gadgets.rpc.forceParentVerifiable=gadgets.rpc.forceParentVerifiable;
gadgets.rpc.call=gadgets.rpc.call;
gadgets.rpc.getRelayUrl=gadgets.rpc.getRelayUrl;
gadgets.rpc.setRelayUrl=gadgets.rpc.setRelayUrl;
gadgets.rpc.setAuthToken=gadgets.rpc.setAuthToken;
gadgets.rpc.setupReceiver=gadgets.rpc.setupReceiver;
gadgets.rpc.getAuthToken=gadgets.rpc.getAuthToken;
gadgets.rpc.removeReceiver=gadgets.rpc.removeReceiver;
gadgets.rpc.getRelayChannel=gadgets.rpc.getRelayChannel;
gadgets.rpc.receive=gadgets.rpc.receive;
gadgets.rpc.receiveSameDomain=gadgets.rpc.receiveSameDomain;
gadgets.rpc.getOrigin=gadgets.rpc.getOrigin;
gadgets.rpc.getTargetOrigin=gadgets.rpc.getTargetOrigin;
gadgets.rpc._getTargetWin=gadgets.rpc._getTargetWin;
gadgets.rpc._parseSiblingId=gadgets.rpc._parseSiblingId
}};;

/* [end] feature=rpc */
gadgets.config.init({"rpc":{"commSwf":"//xpc.googleusercontent.com/gadgets/xpc.swf","passReferrer":"p2c:query","parentRelayUrl":"/rpc_relay.html"}});
(function(){var j=window['___jsl']=window['___jsl']||{};j['l']=(j['l']||[]).concat(['rpc','core.util']);})();(function(){var j=window['___jsl']=window['___jsl']||{};if(j['c']){j['c']();delete j['c'];}})();var friendconnect_serverBase = "https://www.google.com";var friendconnect_loginUrl = "https://www.google.com/accounts";var friendconnect_gadgetPrefix = "http://www-a-fc-opensocial.googleusercontent.com/gadgets";
var friendconnect_serverVersion = "0.1-c17d2763_4b230aa2_a1298c5c_cdd7a7a7_2396ca6a.7";
var friendconnect_imageUrl = "https://www.google.com/friendconnect/scs/images";
var friendconnect_lightbox = true;
var fca=gadgets,fcb=encodeURIComponent,fcc=window,fcaa=Object,fcd=friendconnect_serverBase,fcba=setTimeout,fce=document,fcf=Array,fcg=Math,fch=Error,fcca=parseInt,fci=String;function fcj(a,b){return a.width=b}function fcda(a,b){return a.toString=b}function fck(a,b){return a.height=b}function fcl(a,b){return a.innerHTML=b}function fcea(a,b){return a.length=b}function fcfa(a,b){return a.className=b}
var fcm="appendChild",fcga="shift",fcn="width",fco="replace",fcha="data",fcp="charAt",fcq="match",fcr="createElement",fcs="setAttribute",fcia="auth",fcja="getSecurityToken",fcka="bind",fct="register",fcla="toString",fcma="propertyIsEnumerable",fcu="split",fcv="location",fcna="Dialog",fcw="style",fcx="options",fcy="json",fcoa="href",fcz="util",fcpa="maxHeight",fcA="apply",fcqa="reset",fcB="height",fcra="right",fcC="push",fcsa="stringify",fcta="test",fcD="round",fcE="slice",fcF="getElementById",fcG=
"indexOf",fcua="left",fcva="addEventListener",fcwa="locale",fcxa="type",fcH="name",fcI="length",fc="prototype",fcJ="document",fcK="getUrlParameters",fcL="body",fcM="call",fcya="friendconnect_serverBase",fcza="charCodeAt",fcAa="substring",fcBa="getContentElement",fcN="update",fcO="join",fcCa="toLowerCase",goog=goog||{},fcP=this,fcDa=function(a){return void 0!==a},fcEa=function(a,b,c){a=a[fcu](".");c=c||fcP;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a[fcI]&&(d=a[fcga]());)!a[fcI]&&
fcDa(b)?c[d]=b:c=c[d]?c[d]:c[d]={}},fcFa=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof fcf)return"array";if(a instanceof fcaa)return b;var c=fcaa[fc][fcla][fcM](a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a[fcI]&&"undefined"!=typeof a.splice&&"undefined"!=typeof a[fcma]&&!a[fcma]("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a[fcM]&&"undefined"!=typeof a[fcma]&&!a[fcma]("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a[fcM])return"object";return b},fcGa=function(a){var b=fcFa(a);return"array"==b||"object"==b&&"number"==typeof a[fcI]},fcQ=function(a){return"string"==typeof a},fcHa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},fcR=function(a){var b=fcFa(a);if("object"==b||"array"==b){if(a.clone)return a.clone();var b="array"==b?[]:{},c;for(c in a)b[c]=fcR(a[c]);return b}return a},fcIa=function(a,b,c){return a[fcM][fcA](a[fcka],arguments)},fcJa=function(a,b,c){if(!a)throw fch();
if(2<arguments[fcI]){var d=fcf[fc][fcE][fcM](arguments,2);return function(){var c=fcf[fc][fcE][fcM](arguments);fcf[fc].unshift[fcA](c,d);return a[fcA](b,c)}}return function(){return a[fcA](b,arguments)}},fcS=function(a,b,c){fcS=Function[fc][fcka]&&-1!=Function[fc][fcka][fcla]()[fcG]("native code")?fcIa:fcJa;return fcS[fcA](null,arguments)},fcKa=function(a,b){var c=fcf[fc][fcE][fcM](arguments,1);return function(){var b=c[fcE]();b[fcC][fcA](b,arguments);return a[fcA](this,b)}},fcLa=function(a,b){for(var c in b)a[c]=
b[c]},fcMa=Date.now||function(){return+new Date},fcT=function(a,b,c){fcEa(a,b,c)},fcU=function(a,b){function c(){}c.prototype=b[fc];a.Yc=b[fc];a.prototype=new c;a[fc].constructor=a;a.base=function(a,c,f){for(var k=fcf(arguments[fcI]-2),l=2;l<arguments[fcI];l++)k[l-2]=arguments[l];return b[fc][c][fcA](a,k)}};Function[fc].bind=Function[fc][fcka]||function(a,b){if(1<arguments[fcI]){var c=fcf[fc][fcE][fcM](arguments,1);c.unshift(this,a);return fcS[fcA](null,c)}return fcS(this,a)};var fcNa=function(a){if(fch.captureStackTrace)fch.captureStackTrace(this,fcNa);else{var b=fch().stack;b&&(this.stack=b)}a&&(this.message=fci(a))};fcU(fcNa,fch);fcNa[fc].name="CustomError";var fcOa=function(a,b){for(var c=a[fcu]("%s"),d="",e=fcf[fc][fcE][fcM](arguments,1);e[fcI]&&1<c[fcI];)d+=c[fcga]()+e[fcga]();return d+c[fcO]("%s")},fcPa=fci[fc].trim?function(a){return a.trim()}:function(a){return a[fco](/^[\s\xa0]+|[\s\xa0]+$/g,"")},fcQa=function(a,b){var c=fci(a)[fcCa](),d=fci(b)[fcCa]();return c<d?-1:c==d?0:1},fcYa=function(a,b){if(b)a=a[fco](fcRa,"&amp;")[fco](fcSa,"&lt;")[fco](fcTa,"&gt;")[fco](fcUa,"&quot;")[fco](fcVa,"&#39;")[fco](fcWa,"&#0;");else{if(!fcXa[fcta](a))return a;
-1!=a[fcG]("&")&&(a=a[fco](fcRa,"&amp;"));-1!=a[fcG]("<")&&(a=a[fco](fcSa,"&lt;"));-1!=a[fcG](">")&&(a=a[fco](fcTa,"&gt;"));-1!=a[fcG]('"')&&(a=a[fco](fcUa,"&quot;"));-1!=a[fcG]("'")&&(a=a[fco](fcVa,"&#39;"));-1!=a[fcG]("\x00")&&(a=a[fco](fcWa,"&#0;"))}return a},fcRa=/&/g,fcSa=/</g,fcTa=/>/g,fcUa=/"/g,fcVa=/'/g,fcWa=/\x00/g,fcXa=/[\x00&<>"']/,fc_a=function(a,b){for(var c=0,d=fcPa(fci(a))[fcu]("."),e=fcPa(fci(b))[fcu]("."),f=fcg.max(d[fcI],e[fcI]),k=0;0==c&&k<f;k++){var l=d[k]||"",m=e[k]||"",n=RegExp("(\\d*)(\\D*)",
"g"),g=RegExp("(\\d*)(\\D*)","g");do{var h=n.exec(l)||["","",""],p=g.exec(m)||["","",""];if(0==h[0][fcI]&&0==p[0][fcI])break;var c=0==h[1][fcI]?0:fcca(h[1],10),t=0==p[1][fcI]?0:fcca(p[1],10),c=fcZa(c,t)||fcZa(0==h[2][fcI],0==p[2][fcI])||fcZa(h[2],p[2])}while(0==c)}return c},fcZa=function(a,b){return a<b?-1:a>b?1:0},fc0a=function(a){return fci(a)[fco](/\-([a-z])/g,function(a,c){return c.toUpperCase()})},fc1a=function(a,b){var c=fcQ(b)?fci(b)[fco](/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")[fco](/\x08/g,
"\\x08"):"\\s",c=c?"|["+c+"]+":"",c=new RegExp("(^"+c+")([a-z])","g");return a[fco](c,function(a,b,c){return b+c.toUpperCase()})};var fc2a=function(a,b){b.unshift(a);fcNa[fcM](this,fcOa[fcA](null,b));b[fcga]();this.messagePattern=a};fcU(fc2a,fcNa);fc2a[fc].name="AssertionError";var fc3a=function(a){throw a;},fc4a=fc3a,fc5a=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);a=new fc2a(""+e,f||[]);fc4a(a)},fc6a=function(a,b,c){a||fc5a("",null,b,fcf[fc][fcE][fcM](arguments,2));return a};var fc7a=fcf[fc],fc8a=fc7a[fcG]?function(a,b,c){fc6a(null!=a[fcI]);return fc7a[fcG][fcM](a,b,c)}:function(a,b,c){c=null==c?0:0>c?fcg.max(0,a[fcI]+c):c;if(fcQ(a))return fcQ(b)&&1==b[fcI]?a[fcG](b,c):-1;for(;c<a[fcI];c++)if(c in a&&a[c]===b)return c;return-1},fc9a=fc7a.forEach?function(a,b,c){fc6a(null!=a[fcI]);fc7a.forEach[fcM](a,b,c)}:function(a,b,c){for(var d=a[fcI],e=fcQ(a)?a[fcu](""):a,f=0;f<d;f++)f in e&&b[fcM](c,e[f],f,a)},fc$a=function(a,b){return 0<=fc8a(a,b)},fcab=function(a){var b=a[fcI];
if(0<b){for(var c=fcf(b),d=0;d<b;d++)c[d]=a[d];return c}return[]},fcbb=function(a,b,c){fc6a(null!=a[fcI]);return 2>=arguments[fcI]?fc7a[fcE][fcM](a,b):fc7a[fcE][fcM](a,b,c)};var fccb=function(a,b,c){for(var d in a)b[fcM](c,a[d],d,a)},fcdb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},fceb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},fcfb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),fcgb=function(a,b){for(var c,d,e=1;e<arguments[fcI];e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<fcfb[fcI];f++)c=fcfb[f],fcaa[fc].hasOwnProperty[fcM](d,c)&&(a[c]=d[c])}};var fchb=function(){var a=fcP.navigator;return a&&(a=a.userAgent)?a:""},fcib=fchb(),fcV=function(a){var b=fcib;return-1!=b[fcG](a)},fcjb=function(a){var b=fcib;return-1!=b[fcCa]()[fcG](a[fcCa]())};var fckb=function(){return fcV("Opera")||fcV("OPR")},fclb=function(){return fcV("Trident")||fcV("MSIE")},fcmb=fckb,fcnb=fclb;var fcob=fcmb(),fcW=fcnb(),fcpb=fcV("Gecko")&&!fcjb("WebKit")&&!(fcV("Trident")||fcV("MSIE")),fcqb=fcjb("WebKit"),fcsb=function(){var a="",b;if(fcob&&fcP.opera)return a=fcP.opera.version,"function"==fcFa(a)?a():a;fcpb?b=/rv\:([^\);]+)(\)|;)/:fcW?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:fcqb&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(fcib))?a[1]:"");return fcW&&(b=fcrb(),b>parseFloat(a))?fci(b):a},fcrb=function(){var a=fcP[fcJ];return a?a.documentMode:void 0},fctb=fcsb(),fcub={},fcvb=function(a){return fcub[a]||
(fcub[a]=0<=fc_a(fctb,a))},fcwb=function(){var a=fcP[fcJ];if(a&&fcW){var b=fcrb();return b||("CSS1Compat"==a.compatMode?fcca(fctb,10):5)}}();var fcxb=function(a){for(var b=[],c=0,d=0;d<a[fcI];d++){for(var e=a[fcza](d);255<e;)b[c++]=e&255,e>>=8;b[c++]=e}return b};var fcyb=null,fczb=null,fcAb=null,fcBb=null,fcDb=function(a,b){if(!fcGa(a))throw fch("encodeByteArray takes an array as a parameter");fcCb();for(var c=b?fcAb:fcyb,d=[],e=0;e<a[fcI];e+=3){var f=a[e],k=e+1<a[fcI],l=k?a[e+1]:0,m=e+2<a[fcI],n=m?a[e+2]:0,g=f>>2,f=(f&3)<<4|l>>4,l=(l&15)<<2|n>>6,n=n&63;m||(n=64,k||(l=64));d[fcC](c[g],c[f],c[l],c[n])}return d[fcO]("")},fcEb=function(a,b){fcCb();for(var c=b?fcBb:fczb,d=[],e=0;e<a[fcI];){var f=c[a[fcp](e++)],k=e<a[fcI],k=k?c[a[fcp](e)]:0;++e;var l=e<a[fcI],
l=l?c[a[fcp](e)]:64;++e;var m=e<a[fcI],m=m?c[a[fcp](e)]:64;++e;if(null==f||null==k||null==l||null==m)throw fch();f=f<<2|k>>4;d[fcC](f);64!=l&&(f=k<<4&240|l>>2,d[fcC](f),64!=m&&(f=l<<6&192|m,d[fcC](f)))}return d},fcCb=function(){if(!fcyb){fcyb={};fczb={};fcAb={};fcBb={};for(var a=0;65>a;a++)fcyb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcp](a),fczb[fcyb[a]]=a,fcAb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcp](a),fcBb[fcAb[a]]=a,62<=a&&(fczb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[fcp](a)]=
a,fcBb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="[fcp](a)]=a)}};var fcFb=function(){this.blockSize=-1};var fcX=function(a,b,c){fcFb[fcM](this);this.i=a;this.blockSize=c||a.blockSize||16;this.Xb=fcf(this.blockSize);this.Va=fcf(this.blockSize);this.Tb(b)};fcU(fcX,fcFb);fcX[fc].Tb=function(a){a[fcI]>this.blockSize&&(this.i[fcN](a),a=this.i.digest(),this.i[fcqa]());for(var b,c=0;c<this.blockSize;c++)b=c<a[fcI]?a[c]:0,this.Xb[c]=b^92,this.Va[c]=b^54;this.i[fcN](this.Va)};fcX[fc].reset=function(){this.i[fcqa]();this.i[fcN](this.Va)};fcX[fc].update=function(a,b){this.i[fcN](a,b)};
fcX[fc].digest=function(){var a=this.i.digest();this.i[fcqa]();this.i[fcN](this.Xb);this.i[fcN](a);return this.i.digest()};fcX[fc].Jb=function(a){this[fcqa]();this[fcN](a);return this.digest()};var fcY=function(){fcFb[fcM](this);this.blockSize=64;this.c=[];this.Ca=[];this.Lc=[];this.sa=[];this.sa[0]=128;for(var a=1;a<this.blockSize;++a)this.sa[a]=0;this.ya=this.G=0;this[fcqa]()};fcU(fcY,fcFb);fcY[fc].reset=function(){this.c[0]=1732584193;this.c[1]=4023233417;this.c[2]=2562383102;this.c[3]=271733878;this.c[4]=3285377520;this.ya=this.G=0};
fcY[fc].L=function(a,b){b||(b=0);var c=this.Lc;if(fcQ(a))for(var d=0;16>d;d++)c[d]=a[fcza](b)<<24|a[fcza](b+1)<<16|a[fcza](b+2)<<8|a[fcza](b+3),b+=4;else for(d=0;16>d;d++)c[d]=a[b]<<24|a[b+1]<<16|a[b+2]<<8|a[b+3],b+=4;for(d=16;80>d;d++){var e=c[d-3]^c[d-8]^c[d-14]^c[d-16];c[d]=(e<<1|e>>>31)&4294967295}for(var f=this.c[0],k=this.c[1],l=this.c[2],m=this.c[3],n=this.c[4],g,d=0;80>d;d++)40>d?20>d?(e=m^k&(l^m),g=1518500249):(e=k^l^m,g=1859775393):60>d?(e=k&l|m&(k|l),g=2400959708):(e=k^l^m,g=3395469782),
e=(f<<5|f>>>27)+e+n+g+c[d]&4294967295,n=m,m=l,l=(k<<30|k>>>2)&4294967295,k=f,f=e;this.c[0]=this.c[0]+f&4294967295;this.c[1]=this.c[1]+k&4294967295;this.c[2]=this.c[2]+l&4294967295;this.c[3]=this.c[3]+m&4294967295;this.c[4]=this.c[4]+n&4294967295};
fcY[fc].update=function(a,b){if(null!=a){fcDa(b)||(b=a[fcI]);for(var c=b-this.blockSize,d=0,e=this.Ca,f=this.G;d<b;){if(0==f)for(;d<=c;)this.L(a,d),d+=this.blockSize;if(fcQ(a))for(;d<b;){if(e[f]=a[fcza](d),++f,++d,f==this.blockSize){this.L(e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){this.L(e);f=0;break}}this.G=f;this.ya+=b}};
fcY[fc].digest=function(){var a=[],b=8*this.ya;56>this.G?this[fcN](this.sa,56-this.G):this[fcN](this.sa,this.blockSize-(this.G-56));for(var c=this.blockSize-1;56<=c;c--)this.Ca[c]=b&255,b/=256;this.L(this.Ca);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.c[c]>>d&255,++b;return a};var fcZ=function(a){this.xb=a},fcGb=/\s*;\s*/;fcZ[fc].isEnabled=function(){return navigator.cookieEnabled};fcZ[fc].Vb=function(a){return!/[;=\s]/[fcta](a)};fcZ[fc].Wb=function(a){return!/[;\r\n]/[fcta](a)};
fcZ[fc].set=function(a,b,c,d,e,f){if(!this.Vb(a))throw fch('Invalid cookie name "'+a+'"');if(!this.Wb(b))throw fch('Invalid cookie value "'+b+'"');fcDa(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";0>c?c="":(c=0==c?new Date(1970,1,1):new Date(fcMa()+1E3*c),c=";expires="+c.toUTCString());this.zc(a+"="+b+e+d+c+f)};fcZ[fc].get=function(a,b){for(var c=a+"=",d=this.ja(),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c[fcI]);if(f==a)return""}return b};
fcZ[fc].remove=function(a,b,c){var d=this.M(a);this.set(a,"",0,b,c);return d};fcZ[fc].r=function(){return this.ha().keys};fcZ[fc].F=function(){return this.ha().values};fcZ[fc].P=function(){var a=this.Na();return a?this.ja()[fcI]:0};fcZ[fc].M=function(a){return fcDa(this.get(a))};fcZ[fc].clear=function(){for(var a=this.ha().keys,b=a[fcI]-1;0<=b;b--)this.remove(a[b])};fcZ[fc].zc=function(a){this.xb.cookie=a};fcZ[fc].Na=function(){return this.xb.cookie};fcZ[fc].ja=function(){return(this.Na()||"")[fcu](fcGb)};
fcZ[fc].ha=function(){for(var a=this.ja(),b=[],c=[],d,e,f=0;e=a[f];f++)d=e[fcG]("="),-1==d?(b[fcC](""),c[fcC](e)):(b[fcC](e[fcAa](0,d)),c[fcC](e[fcAa](d+1)));return{keys:b,values:c}};var fcHb=new fcZ(fce);fcHb.MAX_COOKIE_LENGTH=3950;var fcIb=function(a,b){fcfa(a,b)},fcJb=function(a){a=a.className;return fcQ(a)&&a[fcq](/\S+/g)||[]},fcLb=function(a,b){var c=fcJb(a),d=fcbb(arguments,1),e=c[fcI]+d[fcI];fcKb(c,d);fcIb(a,c[fcO](" "));return c[fcI]==e},fcKb=function(a,b){for(var c=0;c<b[fcI];c++)fc$a(a,b[c])||a[fcC](b[c])};var fcNb=function(){this.kc="";this.Tc=fcMb},fcMb={};fcda(fcNb[fc],function(){return"SafeStyle{"+this.kc+"}"});var fcOb=function(a){var b=new fcNb;b.kc=a;return b};fcOb("");var fcQb=function(){this.jc="";this.Sc=fcPb},fcPb={};fcda(fcQb[fc],function(){return"SafeStyleSheet{"+this.jc+"}"});var fcRb=function(a){var b=new fcQb;b.jc=a;return b};fcRb("");var fcTb=function(){this.ic="";this.Rc=fcSb;this.Oc=null};fcda(fcTb[fc],function(){return"SafeHtml{"+this.ic+"}"});var fcSb={},fcUb=function(a,b){var c=new fcTb;c.ic=a;c.Oc=b;return c};fcUb("",0);var fc_=function(a,b){fcj(this,a);fck(this,b)};fc_[fc].clone=function(){return new fc_(this[fcn],this[fcB])};fcda(fc_[fc],function(){return"("+this[fcn]+" x "+this[fcB]+")"});fc_[fc].ceil=function(){fcj(this,fcg.ceil(this[fcn]));fck(this,fcg.ceil(this[fcB]));return this};fc_[fc].floor=function(){fcj(this,fcg.floor(this[fcn]));fck(this,fcg.floor(this[fcB]));return this};fc_[fc].round=function(){fcj(this,fcg[fcD](this[fcn]));fck(this,fcg[fcD](this[fcB]));return this};
fc_[fc].scale=function(a,b){var c="number"==typeof b?b:a;fcj(this,this[fcn]*a);fck(this,this[fcB]*c);return this};var fcVb=!fcW||fcW&&9<=fcwb;!fcpb&&!fcW||fcW&&fcW&&9<=fcwb||fcpb&&fcvb("1.9.1");fcW&&fcvb("9");var fcWb=function(a){return fcQ(a)?fce[fcF](a):a},fcXb=fcWb,fcYb=function(a,b,c,d){a=d||a;b=b&&"*"!=b?b.toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return c=b+(c?"."+c:""),a.querySelectorAll(c);if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,k;k=a[f];f++)b==k.nodeName&&(d[e++]=k);fcea(d,e);return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;k=a[f];f++)b=k.className,"function"==typeof b[fcu]&&fc$a(b[fcu](/\s+/),c)&&(d[e++]=
k);fcea(d,e);return d}return a},fc_b=function(a,b){fccb(b,function(b,d){"style"==d?a[fcw].cssText=b:"class"==d?fcfa(a,b):"for"==d?a.htmlFor=b:d in fcZb?a[fcs](fcZb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a[fcs](d,b):a[d]=b})},fcZb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},fc0b=function(a){a=a[fcJ];
a="CSS1Compat"==a.compatMode?a.documentElement:a[fcL];return new fc_(a.clientWidth,a.clientHeight)},fc0=function(a,b,c){return fc1b(fce,arguments)},fc1b=function(a,b){var c=b[0],d=b[1];if(!fcVb&&d&&(d[fcH]||d[fcxa])){c=["<",c];d[fcH]&&c[fcC](' name="',fcYa(d[fcH]),'"');if(d[fcxa]){c[fcC](' type="',fcYa(d[fcxa]),'"');var e={};fcgb(e,d);delete e[fcxa];d=e}c[fcC](">");c=c[fcO]("")}c=a[fcr](c);d&&(fcQ(d)?fcfa(c,d):"array"==fcFa(d)?fcfa(c,d[fcO](" ")):fc_b(c,d));2<b[fcI]&&fc2b(a,c,b,2);return c},fc2b=
function(a,b,c,d){function e(c){c&&b[fcm](fcQ(c)?a.createTextNode(c):c)}for(;d<c[fcI];d++){var f=c[d];!fcGa(f)||fcHa(f)&&0<f.nodeType?e(f):fc9a(fc3b(f)?fcab(f):f,e)}},fc4b=function(a){fc6a(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||a[fcJ]},fc3b=function(a){if(a&&"number"==typeof a[fcI]){if(fcHa(a))return"function"==typeof a.item||"string"==typeof a.item;if("function"==fcFa(a))return"function"==typeof a.item}return!1};var fc5b="StopIteration"in fcP?fcP.StopIteration:fch("StopIteration"),fc6b=function(){};fc6b[fc].next=function(){throw fc5b;};fc6b[fc].__iterator__=function(){return this};var fc1=function(a,b){this.j={};this.e=[];this.$=this.v=0;var c=arguments[fcI];if(1<c){if(c%2)throw fch("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.ob(a)};fc1[fc].P=function(){return this.v};fc1[fc].F=function(){this.K();for(var a=[],b=0;b<this.e[fcI];b++){var c=this.e[b];a[fcC](this.j[c])}return a};fc1[fc].r=function(){this.K();return this.e.concat()};fc1[fc].M=function(a){return fc7b(this.j,a)};
fc1[fc].clear=function(){this.j={};fcea(this.e,0);this.$=this.v=0};fc1[fc].remove=function(a){return fc7b(this.j,a)?(delete this.j[a],this.v--,this.$++,this.e[fcI]>2*this.v&&this.K(),!0):!1};fc1[fc].K=function(){if(this.v!=this.e[fcI]){for(var a=0,b=0;a<this.e[fcI];){var c=this.e[a];fc7b(this.j,c)&&(this.e[b++]=c);a++}fcea(this.e,b)}if(this.v!=this.e[fcI]){for(var d={},b=a=0;a<this.e[fcI];)c=this.e[a],fc7b(d,c)||(this.e[b++]=c,d[c]=1),a++;fcea(this.e,b)}};
fc1[fc].get=function(a,b){return fc7b(this.j,a)?this.j[a]:b};fc1[fc].set=function(a,b){fc7b(this.j,a)||(this.v++,this.e[fcC](a),this.$++);this.j[a]=b};fc1[fc].ob=function(a){var b;a instanceof fc1?(b=a.r(),a=a.F()):(b=fceb(a),a=fcdb(a));for(var c=0;c<b[fcI];c++)this.set(b[c],a[c])};fc1[fc].forEach=function(a,b){for(var c=this.r(),d=0;d<c[fcI];d++){var e=c[d],f=this.get(e);a[fcM](b,f,e,this)}};fc1[fc].clone=function(){return new fc1(this)};
fc1[fc].__iterator__=function(a){this.K();var b=0,c=this.e,d=this.j,e=this.$,f=this,k=new fc6b;k.next=function(){for(;;){if(e!=f.$)throw fch("The map has changed since the iterator was created");if(b>=c[fcI])throw fc5b;var k=c[b++];return a?k:d[k]}};return k};var fc7b=function(a,b){return fcaa[fc].hasOwnProperty[fcM](a,b)};var fc9b=function(a,b,c){if(fcQ(b))fc8b(a,c,b);else for(var d in b)fc8b(a,b[d],d)},fc8b=function(a,b,c){(c=fc$b(a,c))&&(a[fcw][c]=b)},fcac={},fc$b=function(a,b){var c=fcac[b];if(!c){var d=fc0a(b),c=d;void 0===a[fcw][d]&&(d=(fcqb?"Webkit":fcpb?"Moz":fcW?"ms":fcob?"O":null)+fc1a(d),void 0!==a[fcw][d]&&(c=d));fcac[b]=c}return c},fcbc=function(a,b){var c=fc4b(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""},fccc=function(a,
b){return fcbc(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a[fcw]&&a[fcw][b]},fcdc=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}fcW&&a.ownerDocument[fcL]&&(a=a.ownerDocument,b.left=b[fcua]-(a.documentElement.clientLeft+a[fcL].clientLeft),b.top-=a.documentElement.clientTop+a[fcL].clientTop);return b},fcgc=function(a,b,c){if(b instanceof fc_)c=b[fcB],b=b[fcn];else if(void 0==c)throw fch("missing height argument");fcec(a,b);fcfc(a,c)},fchc=function(a,
b){"number"==typeof a&&(a=(b?fcg[fcD](a):a)+"px");return a},fcfc=function(a,b){fck(a[fcw],fchc(b,!0))},fcec=function(a,b){fcj(a[fcw],fchc(b,!0))},fcic=function(a,b){if("none"!=fccc(b,"display"))return a(b);var c=b[fcw],d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";var k=a(b);c.display=d;c.position=f;c.visibility=e;return k},fcjc=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=fcqb&&!b&&!c;return fcDa(b)&&!d||!a.getBoundingClientRect?new fc_(b,
c):(a=fcdc(a),new fc_(a[fcra]-a[fcua],a.bottom-a.top))},fckc=function(a,b){a[fcw].display=b?"":"none"};var fclc={},fcmc={};var fcnc=function(a,b,c,d){b=b||"800";c=c||"550";d=d||"friendconnect";a=fcc.open(a,d,"menubar=no,toolbar=no,dialog=yes,location=yes,alwaysRaised=yes,width="+b+",height="+c+",resizable=yes,scrollbars=1,status=1");fcc.focus&&a&&a.focus()},fcoc=function(a,b){var c=fca[fcz][fcK]().communityId;fca.rpc[fcM](null,"signin",null,c,a,b)};fcT("goog.peoplesense.util.openPopup",fcnc);fcT("goog.peoplesense.util.finishSignIn",fcoc);var fcrc=function(a,b){var c=fcpc()+"/friendconnect/invite/friends",d=fcb(shindig[fcia][fcja]());fcqc(c,d,a,b)},fcqc=function(a,b,c,d){a+="?st="+b;c&&(a+="&customMessage="+fcb(c));d&&(a+="&customInviteUrl="+fcb(d));b=760;fcW&&(b+=25);fcnc(a,fci(b),"515","friendconnect_invite")};fcT("goog.peoplesense.util.invite",fcrc);fcT("goog.peoplesense.util.inviteFriends",fcqc);var fcsc=function(a){this.url=a};fcsc[fc].l=function(a,b){if(0<=this.url[fcG]("?"+a+"=")||0<=this.url[fcG]("&"+a+"="))throw fch("duplicate: "+a);if(null===b||void 0===b)return this;var c=0<=this.url[fcG]("?")?"&":"?";this.url+=c+a+"="+fcb(fci(b));return this};fcda(fcsc[fc],function(){return this.url});var fcpc=function(){return fcc[fcya]},fctc=function(a,b,c,d,e,f,k){b=b||"800";c=c||"550";d=d||"friendconnect";f=f||!1;fca.rpc[fcM](null,"openLightboxIframe",k,a,shindig[fcia][fcja](),b,c,d,e,null,null,null,f)},fcuc=function(a,b){var c=fca[fcz][fcK]().psinvite||"",d=new fcsc(fcpc()+"/friendconnect/signin/home");d.l("st",fcc.shindig[fcia][fcja]());d.l("psinvite",c);d.l("iframeId",a);d.l("loginProvider",b);d.l("subscribeOnSignin","1");fcnc(d[fcla]());return!1},fcvc=function(){var a=fca[fcz][fcK]().communityId;
fca.rpc[fcM](null,"signout",null,a)},fcxc=function(a,b){var c=fcpc()+"/friendconnect/settings/edit?st="+fcb(shindig[fcia][fcja]())+(a?"&iframeId="+fcb(a):"");b&&(c=c+"&"+b);fcwc(c)},fcyc=function(a){a=fcpc()+"/friendconnect/settings/siteProfile?st="+fcb(a);fcwc(a)},fcwc=function(a){var b=800;fcW&&(b+=25);fcnc(a,fci(b),"510")},fczc=function(a,b,c,d){d=d||2;var e=null;if("text"==b)e=fc0("div",{"class":"gfc-button-text"},fc0("div",{"class":"gfc-icon"},fc0("a",{href:"javascript:void(0);"},c))),a[fcm](e);
else if("long"==b||"standard"==b)e=1==d?fc0("div",{"class":"gfc-inline-block gfc-primaryactionbutton gfc-button-base"},fc0("div",{"class":"gfc-inline-block gfc-button-base-outer-box"},fc0("div",{"class":"gfc-inline-block gfc-button-base-inner-box"},fc0("div",{"class":"gfc-button-base-pos"},fc0("div",{"class":"gfc-button-base-top-shadow",innerHTML:"&nbsp;"}),fc0("div",{"class":"gfc-button-base-content"},fc0("div",{"class":"gfc-icon"},c)))))):fc0("table",{"class":"gfc-button-base-v2 gfc-button",cellpadding:"0",
cellspacing:"0"},fc0("tbody",{"class":""},fc0("tr",{"class":""},fc0("td",{"class":"gfc-button-base-v2 gfc-button-1"}),fc0("td",{"class":"gfc-button-base-v2 gfc-button-2"},c),fc0("td",{"class":"gfc-button-base-v2 gfc-button-3"})))),a[fcm](e),"standard"==b&&(b=fc0("div",{"class":"gfc-footer-msg"},"with Google Friend Connect"),1==d&&a[fcm](fc0("br")),a[fcm](b));return e},fcAc=function(a,b){if(!a)throw"google.friendconnect.renderSignInButton: missing options";var c=a[fcw]||"standard",d=a.text,e=a.version;
if("standard"==c)d=a.text||"Sign in";else if("text"==c||"long"==c)d=a.text||"Sign in with Friend Connect";var f=a.element;if(!f){f=a.id;if(!f)throw"google.friendconnect.renderSignInButton: options[id] and options[element] == null";f=fcXb(f);if(!f)throw"google.friendconnect.renderSignInButton: element "+a.id+" not found";}fcl(f,"");c=fczc(f,c,d,e);fcc[fcva]?c[fcva]("click",b,!1):c.attachEvent("onclick",b)},fcBc=function(a,b){b=b||fcS(fcuc,null,null,null,null);fcAc(a,b)},fcCc=function(a,b){fca.rpc[fcM](null,
"putReloadViewParam",null,a,b);var c=fca.views.getParams();c[a]=b},fcDc=function(a,b){var c=new fcsc("/friendconnect/gadgetshare/friends");c.l("customMessage",a);c.l("customInviteUrl",b);c.l("container","glb");var d=310;fcW&&(d+=25);fctc(c[fcla](),fci(d),"370")};fcT("goog.peoplesense.util.getBaseUrl",fcpc);fcT("goog.peoplesense.util.finishSignIn",fcoc);fcT("goog.peoplesense.util.signout",fcvc);fcT("goog.peoplesense.util.signin",fcuc);fcT("goog.peoplesense.util.editSettings",fcxc);
fcT("goog.peoplesense.util.editSSProfile",fcyc);fcT("goog.peoplesense.util.setStickyViewParamToken",fcCc);fcT("google.friendconnect.renderSignInButton",fcBc);fcT("goog.peoplesense.util.share",fcDc);fcT("goog.peoplesense.util.userAgent.IE",fcW);var fcEc={},fc2=function(a){this.h=new fc1;this.snippetId=a.id;this.site=a.site;a=a["view-params"];var b=a.skin;this.hc=(b?b.POSITION:"top")||"top";this.Mc={allowAnonymousPost:a.allowAnonymousPost||!1,scope:a.scope||"SITE",docId:a.docId||"",features:a.features||"video,comment",startMaximized:"true",disableMinMax:"true",skin:b};this.absoluteBottom=fcW&&!fcvb("7");this.fixedIeSizes=fcW;fcc[fcva]?fcc[fcva]("resize",fcS(this.eb,this),!1):fcc.attachEvent("onresize",fcS(this.eb,this));this.tb()};
fc2[fc].tb=function(){if(!this.site)throw fch("Must supply site ID.");if(!this.snippetId)throw fch("Must supply a snippet ID.");};fc2[fc].b=10;fc2[fc].Ba=1;fc2[fc].q="fc-friendbar-";fc2[fc].t=fc2[fc].q+"outer";fc2[fc].hb=fc2[fc].t+"-shadow";fc2[fc].render=function(){fce.write(this.Bb());var a=fcWb(this.snippetId);fcl(a,this.O())};fc2[fc].Cb=function(){var a=fcWb(this.t);return a=fcic(fcjc,a)[fcn]};fc2[fc].eb=function(){for(var a=this.h.r(),b=0;b<a[fcI];b++)this.wc(a[b]);goog&&fclc&&fcmc&&fcFc&&fcGc("resize")};
fc2[fc].n=function(){return this.hc};fc2[fc].d=function(a){return this.q+"shadow-"+a};fc2[fc].ia=function(a){return this.q+"menus-"+a};fc2[fc].R=function(a){return this.q+a+"Target"};fc2[fc].fa=function(a){return this.q+a+"Drawer"};fc2[fc].Sa=function(){return this.R("")};fc2[fc].Ta=function(){return this.q+"wallpaper"};fc2[fc].Oa=function(){return this.fa("")};
fc2[fc].Bb=function(){var a=fcc.friendconnect_imageUrl+"/",b=a+"shadow_tc.png",c=a+"shadow_bc.png",d=a+"shadow_bl.png",e=a+"shadow_tl.png",f=a+"shadow_tr.png",k=a+"shadow_br.png",a=a+"shadow_cr.png",l=function(a,b){return fcW?'filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="'+a+'", sizingMethod="scale");':"background-image: url("+a+");background-repeat: "+b+"; "},m="position:absolute; top:";"top"!=this.n()&&(m="position:fixed; bottom:",this.absoluteBottom&&(m="position:absolute; bottom:"));
var n=c;"top"!=this.n()&&(n=b);var g=0,h=[];h[g++]='<style type="text/css">';"top"!=this.n()&&this.absoluteBottom&&(h[g++]="html, body {height: 100%; overflow: auto; };");h[g++]="#"+this.t+" {";h[g++]="background:#E0ECFF;";h[g++]="left:0;";h[g++]="height: "+(fcW?"35px;":"36px;");"top"!=this.n()&&this.absoluteBottom&&(h[g++]="margin-right: 20px;");h[g++]="padding:0;";h[g++]=m+" 0;";h[g++]="width:100%;";h[g++]="z-index:5000;";h[g++]="}";h[g++]="#"+this.hb+" {";h[g++]=l(n,"repeat-x");h[g++]="left:0;";
h[g++]="height:"+this.b+"px;";"top"!=this.n()&&this.absoluteBottom&&(h[g++]="margin-right: 20px;");h[g++]="padding:0;";h[g++]=m+(fcW?"35px;":"36px;");h[g++]="width:100%;";h[g++]="z-index:4998;";h[g++]="}";h[g++]="."+this.Oa()+" {";h[g++]="display: block;";h[g++]="padding:0;";h[g++]=m+(fcW?"34px;":"35px;");h[g++]="z-index:4999;";h[g++]="}";h[g++]="."+this.Ta()+" {";h[g++]="background: white;";h[g++]="height: 100%;";h[g++]="margin-right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.Sa()+" {";h[g++]="border: "+
this.Ba+"px solid #ccc;";h[g++]="height: 100%;";h[g++]="left: 0;";h[g++]="background-image: url("+fcc.friendconnect_imageUrl+"/loading.gif);";h[g++]="background-position: center;";h[g++]="background-repeat: no-repeat;";h[g++]="}";h[g++]="."+this.d("cr")+" {";h[g++]=l(a,"repeat-y");h[g++]="height: 100%;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="top: 0;";h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.d("bl")+" {";h[g++]=l(d,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";
h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.d("tl")+" {";h[g++]=l(e,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="left:0px;";h[g++]="width:"+this.b+"px;";h[g++]="}";h[g++]="."+this.d("bc")+" {";h[g++]=l(c,"repeat-x");h[g++]="height: "+this.b+"px;";h[g++]="left: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.d("tc")+" {";h[g++]=l(b,"repeat-x");h[g++]="height: "+this.b+"px;";h[g++]="left: "+this.b+"px;";
h[g++]="margin-left: "+this.b+"px;";h[g++]="margin-right: "+this.b+"px;";h[g++]="right: "+this.b+"px;";h[g++]="}";h[g++]="."+this.d("br")+" {";h[g++]=l(k,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="width: "+this.b+"px;";h[g++]="}";h[g++]="."+this.d("tr")+" {";h[g++]=l(f,"no-repeat");h[g++]="height: "+this.b+"px;";h[g++]="position:absolute;";h[g++]="right: 0;";h[g++]="top: 0;";h[g++]="width: "+this.b+"px;";h[g++]="}";h[g++]="</style>";return h[fcO]("")};
fc2[fc].O=function(){var a=['<div id="'+this.t+'"></div>','<div id="'+this.hb+'"></div>','<div id="'+this.ia(this.h.P())+'"></div>'];return a[fcO]("")};fc2[fc].vb=function(a,b,c,d){this.h.M(a)||(b=new fc3(this,a,b,c,d),c=this.h.P(),d=fcWb(this.ia(c)),fcl(d,b.O()+'<div id="'+this.ia(c+1)+'"></div>'),this.h.set(a,b))};fc2[fc].ma=function(a){(a=this.h.get(a))&&a.drawer&&fckc(a.drawer,!1)};fc2[fc].mc=function(a){if(a=this.h.get(a))a.rendered=!1};
fc2[fc].refresh=function(){for(var a=this.h.r(),b=0;b<a[fcI];b++){var c=a[b];this.ma(c);this.mc(c)}};fc2[fc].dc=function(a){for(var b=this.h.F(),c=0;c<b[fcI];c++){var d=b[c];if(d.id==a){d.Jc();break}}};fc2[fc].cc=function(a){for(var b=this.h.F(),c=0;c<b[fcI];c++){var d=b[c];if(d.id==a){d.$b();break}}};fc2[fc].wc=function(a){(a=this.h.get(a))&&a.drawer&&a.oa()&&(a.da(),a.Ka(),a.Aa())};
fc2[fc].Ic=function(a,b){var c=this.h.get(a);if(c){c.drawer||(c.drawer=fcWb(this.fa(c[fcH])),c.target=fcWb(this.R(c[fcH])),c.sha_bc=fcYb(fce,"div","top"==this.n()?this.d("bc"):this.d("tc"),c.drawer)[0],c.sha_cr=fcYb(fce,"div",this.d("cr"),c.drawer)[0]);for(var d=this.h.r(),e=0;e<d[fcI];e++){var f=d[e];a!==f&&this.ma(f)}c.da(b);fckc(c.drawer,!0);fcc.setTimeout(function(){c.Aa();c.Ka();c.render()},0)}};
var fc3=function(a,b,c,d,e){this.id=-1;this.bar=a;this.name=b;this.constraints=d;this.skin=e||{};fck(this,this.skin.HEIGHT||"0");this.url=fcc[fcya]+c;this.sha_bc=this.target=this.drawer=null;this.loaded=this.rendered=!1;this.da()};
fc3[fc].da=function(a){fcgb(this.constraints,a||{});fcgb(this.skin,this.constraints);if(this.bar.fixedIeSizes&&this.constraints[fcua]&&this.constraints[fcra]){a=this.bar.Cb();var b=this.constraints[fcua],c=this.constraints[fcra];a-=b+c;a%2&&(--a,this.skin.right=this.skin[fcra]+1);fcj(this.skin,a);delete this.skin[fcua]}};
fc3[fc].Aa=function(){if(this.drawer){if(this.skin[fcn]){var a=this.bar.Ba,b=this.bar.b,c=fcW?2:0;fcgc(this.target,this.skin[fcn],"");fcgc(this.sha_bc,this.skin[fcn]-b+2*a-c,"");this.skin.rightShadow?fcgc(this.drawer,this.skin[fcn]+b+2*a-c,""):fcgc(this.drawer,this.skin[fcn]+2*a-c,"")}this.skin[fcra]&&(this.drawer[fcw].right=this.skin[fcra]+0+"px")}};
fc3[fc].Ka=function(){if(fcW&&this.drawer){var a=fcic(fcjc,this.target),b=a[fcn]-this.bar.b,a=a[fcB];0>b&&(b=0);this.sha_bc&&this.sha_bc[fcw]&&fcgc(this.sha_bc,b,"");this.sha_cr&&this.sha_cr[fcw]&&fcgc(this.sha_cr,"",a)}};
fc3[fc].O=function(){var a="display:none;",b="position: relative; ",c="",d="",e="",f="",k=!!this.skin.rightShadow;k||(c+="display: none; ",e+="display: none; ",d+="right: 0px; ",f+="margin-right: 0px; ");for(var l in this.skin){var m=Number(this.skin[l]);k&&0==fcQa(l,"width")&&(m+=this.bar.b);0==fcQa(l,"height")&&(b+=l+": "+m+"px; ");"rightShadow"!=l&&(0==fcQa(l,"height")&&(m+=this.bar.b),0==fcQa(l,"width")&&(m+=2),a+=l+": "+m+"px; ");fcW&&0==fcQa(l,"width")&&(m=k?m-2*this.bar.b:m-this.bar.b,d+=l+
": "+m+"px; ")}fcW&&0<(this[fcB]|0)&&(k=(this[fcB]|0)+2,c+="height: "+k+"px; ");k=0;l=[];l[k++]='<div id="'+this.bar.fa(this[fcH])+'"class="'+this.bar.Oa()+'"style="'+a+'"> ';"bottom"==this.bar.n()&&(l[k++]='<div class="'+this.bar.d("tl")+'"></div> <div class="'+this.bar.d("tc")+'"style="'+d+'"></div> <div class="'+this.bar.d("tr")+'"style="'+e+'"></div> ');l[k++]='<div style="'+b+'"> <div class="'+this.bar.Ta()+'"style="'+f+'"><div id="'+this.bar.R(this[fcH])+'"class="'+this.bar.Sa()+'"></div> <div class="'+
this.bar.d("cr")+'"style="'+c+'"></div> </div> </div> ';"top"==this.bar.n()&&(l[k++]='<div class="'+this.bar.d("bl")+'"></div> <div class="'+this.bar.d("bc")+'"style="'+d+'"></div> <div class="'+this.bar.d("br")+'"style="'+e+'"></div> ');l[k++]="</div> ";return l[fcO]("")};fc3[fc].Jc=function(){this.rendered=this.oa()};fc3[fc].$b=function(){this.loaded=this.oa()};fc3[fc].oa=function(){return!!this.drawer&&"none"!=this.drawer[fcw].display};
fc3[fc].render=function(){if(0==this.rendered){var a={};a.url=this.url;a.id=this.bar.R(this[fcH]);a.site=this.bar.site;a["view-params"]=fcR(this.bar.Mc);"profile"==this[fcH]&&(a["view-params"].profileId="VIEWER");this.skin&&fcgb(a["view-params"].skin,this.skin);a["view-params"].menuName=this[fcH];a["view-params"].opaque="true";a["view-params"].menuPosition=this.bar.hc;fck(a,"1px");fcc.google&&fcEc&&fc4&&(this.id=fc4.render(a))}};fcT("google.friendconnect.FriendBar",fc2);var fcIc=function(a){a=new fcHc(a);if(a.qa()%5)throw fch();for(var b=[],c=0;0<a.qa();c++)b[c]="0123456789abcdefghijklmnopqrstuv"[fcp](a.fc(5));return b[fcO]("")},fcHc=function(a){this.H=this.o=0;this.ca=a};fcHc[fc].qa=function(){return 8*(this.ca[fcI]-this.H)-this.o};
fcHc[fc].fc=function(a){var b=0;if(a>this.qa())throw fch();if(0<this.o){var b=255>>this.o&this.ca[this.H],c=8-this.o,d=fcg.min(a%8,c),c=c-d,b=b>>c;a-=d;this.o+=d;8==this.o&&(this.o=0,this.H++)}for(;8<=a;)b<<=8,b|=this.ca[this.H],this.H++,a-=8;0<a&&(b<<=a,b|=this.ca[this.H]>>8-a,this.o=a);return b};var fcJc=(new Date).getTime(),fc5=function(){},fcKc=function(){},fcLc=function(){},fcMc=function(){};fcU(fcMc,fcLc);var fcNc=function(a){if(a)for(var b in a)a.hasOwnProperty(b)&&(this[b]=a[b]);if(this.viewParams)for(var c in this.viewParams)/^FC_RELOAD_.*$/[fcta](c)&&(this.viewParams[c]=null)};fcNc[fc].render=function(a){var b=this;a&&(b.Kc(),this.Eb(function(c){fc9b(a,"visibility","hidden");fcl(a,c);b.refresh(a,c);c=function(a){fc9b(a,"visibility","visible")};c=fcKa(c,a);fcba(c,500);b.chrome=a}))};
fcNc[fc].Eb=function(a){return this.Kb(a)};var fc6=function(a){fcNc[fcM](this,a);this.V="../../";this.rpcToken=fci(fcg[fcD](2147483647*fcg.random()))};fcU(fc6,fcNc);fc6[fc].mb="gfc_iframe_";fc6[fc].nb="friendconnect";fc6[fc].La="";fc6[fc].xc="rpc_relay.html";fc6[fc].Y=function(a){this.V=a};fc6[fc].Kc=function(){return this.La=fci(fcg[fcD](2147483647*fcg.random()))};fc6[fc].ga=function(){return this.mb+this.La+"_"+this.id};
fc6[fc].refresh=function(a,b){var c=fc4.Qc,d,e={},f=fc4.Ma(this.communityId),k=f[fcu]("~"),l=fc4.wb;if(l&&1<k[fcI]){d=k[2];var k=k[1],m=[this.specUrl,this.communityId,k,l][fcO](":");e.sig=fc4.hash(d,m);e.userId=k;e.dateStamp=l}e.container=this.nb;e.mid=this.id;e.nocache=fc4.gc;e.view=this.aa;e.parent=fc4.T;this.debug&&(e.debug="1");this.specUrl&&(e.url=this.specUrl);this.communityId&&(l=fca[fcz][fcK]().profileId,e.communityId=this.communityId,(d=fca[fcz][fcK]().psinvite)&&(e.psinvite=d),l&&(e.profileId=
l));e.caller=fcOc();e.rpctoken=this.rpcToken;l=!1;d="";k=/Version\/3\..*Safari/;if((k=fcqb&&fcib[fcq](k))||!fc4.S[this.specUrl]&&this.viewParams)e["view-params"]=fca[fcy][fcsa](this.viewParams),d="?viewParams="+fcb(e["view-params"]),l=!0;this.prefs&&(e.prefs=fca[fcy][fcsa](this.prefs));this.viewParams&&this.sendViewParamsToServer&&(e["view-params"]=fca[fcy][fcsa](this.viewParams));this[fcwa]&&(e.locale=this[fcwa]);this.secureToken&&(e.st=this.secureToken);k=fc4.Ra(this.specUrl);d=k+"ifr"+d+(this.hashData?
"&"+this.hashData:"");1!=fc4.Pc||l||f||this.secureToken?f&&!e.sig&&(e.fcauth=f):e.sig||(c="get");f=this.ga();fcPc(f,d,c,e,a,b,this.rpcToken)};var fc7=function(){this.k={};this.T="http://"+fce[fcv].host;this.aa="default";this.gc=1;this.Xc=0;this.Uc="US";this.Vc="en";this.Wc=2147483647};fcU(fc7,fcKc);fc7[fc].w=fcNc;fc7[fc].B=new fcMc;fc7[fc].gb=function(a){this.gc=a};fc7[fc].Ja=function(a){this.Pc=a};fc7[fc].Qa=function(a){return"gadget_"+a};fc7[fc].A=function(a){return this.k[this.Qa(a)]};
fc7[fc].N=function(a){return new this.w(a)};fc7[fc].pb=function(a){a.id=this.Lb();this.k[this.Qa(a.id)]=a};fc7[fc].ec=0;fc7[fc].Lb=function(){return this.ec++};var fcRc=function(){fc7[fcM](this);this.B=new fcQc};fcU(fcRc,fc7);fcRc[fc].w=fc6;fcRc[fc].X=function(a){a[fcq](/^http[s]?:\/\//)||(a=fce[fcv][fcoa][fcq](/^[^?#]+\//)[0]+a);this.T=a};fcRc[fc].J=function(a){var b=this.B.Pa(a);a.render(b)};var fcQc=function(){this.Ab={}};fcU(fcQc,fcLc);
fcQc[fc].qb=function(a,b){this.Ab[a]=b;var c=fce[fcF](b).className;c||0!=c[fcI]||fcfa(fce[fcF](b),"gadgets-gadget-container")};fcQc[fc].Pa=function(a){return(a=this.Ab[a.id])?fce[fcF](a):null};var fc8=function(a){fc6[fcM](this,a);a=a||{};this.aa=a.view||"profile"};fcU(fc8,fc6);fc8[fc].sb="canvas.html";fc8[fc].yb="/friendconnect/embed/";
var fcOc=function(){var a="1"==fca[fcz][fcK]().canvas||"1"==fca[fcz][fcK]().embed,b=null;a&&(b=fca[fcz][fcK]().caller);b||(a=fce[fcv],b=a.search[fco](/([&?]?)psinvite=[^&]*(&?)/,function(a,b,e){return e?b:""}),b=a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+a.pathname+b);return b};fc8[fc].Gc=function(a){this.aa=a};fc8[fc].la=function(){return this.aa};fc8[fc].getBodyId=function(){return this.ga()+"_body"};
fc8[fc].Kb=function(a){var b=this.specUrl;void 0===b&&(b="");var b=(fc4.Ra(b)||this.V)+this.xc,c=this.ga();fca.rpc.setRelayUrl(c,b);b='<div id="'+this.getBodyId()+'"><iframe id="'+c+'" name="'+c;b=0==this[fcB]?b+'" style="width:1px; height:1px;':b+'" style="width:100%;';this.viewParams.opaque&&(b+="background-color:white;");b+='"';b+=' frameborder="0" scrolling="no"';this.viewParams.opaque||(b+=' allowtransparency="true"');b+=this[fcB]?' height="'+this[fcB]+'"':"";b+=this[fcn]?' width="'+this[fcn]+
'"':"";b+="></iframe>";this.showEmbedThis&&(b+='<a href="javascript:void(0);" onclick="google.friendconnect.container.showEmbedDialog(\''+this.divId+"'); return false;\">Embed this</a>");b+="</div>";a(b)};
fc8[fc].Db=function(){var a=fcOc(),a="canvas=1&caller="+fcb(a),b=fca[fcz][fcK]().psinvite;b&&(a+="&psinvite="+fcb(b));a+="&site="+fcb(this.communityId);b=fcR(this.viewParams);if(null!=b.skin)for(var c="BG_IMAGE BG_COLOR FONT_COLOR BG_POSITION BG_REPEAT ANCHOR_COLOR FONT_FACE BORDER_COLOR CONTENT_BG_COLOR CONTENT_HEADLINE_COLOR CONTENT_LINK_COLOR CONTENT_SECONDARY_TEXT_COLOR CONTENT_SECONDARY_LINK_COLOR CONTENT_TEXT_COLOR ENDCAP_BG_COLOR ENDCAP_LINK_COLOR ENDCAP_TEXT_COLOR CONTENT_VISITED_LINK_COLOR ALTERNATE_BG_COLOR".split(" "),d=
0;d<c[fcI];d++)delete b.skin[c[d]];b=fcb(fca[fcy][fcsa](b));b=b[fco]("\\","%5C");return fc4.T+this.sb+"?url="+fcb(this.specUrl)+(a?"&"+a:"")+"&view-params="+b};fc8[fc].D=function(a){a=a||fcd+this.yb+this.communityId;return this.Fb(a,"embed=1")};fc8[fc].C=function(a){return'<iframe src="'+this.D(a)+'" style="height:500px" scrolling="no" allowtransparency="true" border="0" frameborder="0" ></iframe>'};
fc8[fc].Fb=function(a,b){var c=fcb(fca[fcy][fcsa](this.viewParams)),c=c[fco]("\\","%5C");return a+"?url="+fcb(this.specUrl)+(b?"&"+b:"")+"&view-params="+c};fc8[fc].Ob=function(){var a="1"==fca[fcz][fcK]().canvas||"1"==fca[fcz][fcK]().embed,b=null;a&&((b=fca[fcz][fcK]().caller)||(b="javascript:history.go(-1)"));return b};fc8[fc].Pb=function(a){var b=null;"canvas"==a?b=this.Db():"profile"==a&&(b=this.Ob());return b};
var fc9=function(){fcRc[fcM](this);fca.rpc[fct]("signin",fc5[fc].signin);fca.rpc[fct]("signout",fc5[fc].signout);fca.rpc[fct]("resize_iframe",fc5[fc].fb);fca.rpc[fct]("set_title",fc5[fc].setTitle);fca.rpc[fct]("requestNavigateTo",fc5[fc].cb);fca.rpc[fct]("api_loaded",fc5[fc].za);fca.rpc[fct]("createFriendBarMenu",fc5[fc].Fa);fca.rpc[fct]("showFriendBarMenu",fc5[fc].ib);fca.rpc[fct]("hideFriendBarMenu",fc5[fc].Ua);fca.rpc[fct]("putReloadViewParam",fc5[fc].Za);fca.rpc[fct]("getViewParams",fc5[fc].Ia);
fca.rpc[fct]("getContainerBaseTime",fc5[fc].Ha);fca.rpc[fct]("openLightboxIframe",fc5[fc].Ya);fca.rpc[fct]("showMemberProfile",fc5[fc].kb);fca.rpc[fct]("closeLightboxIframe",fcS(this.u,this));fca.rpc[fct]("setLightboxIframeTitle",fcS(this.Cc,this));fca.rpc[fct]("refreshAndCloseIframeLightbox",fcS(this.lc,this));var a=fcSc;a[fct]();a.lb(this,"load",this.Rb);a.lb(this,"start",this.Sb);this.V="../../";this.X("");this.gb(0);this.Ja(1);this.pa=null;this.apiVersion="0.8";this.openSocialSecurityToken=null;
this.W="";this.Ga={};this.Zb=null;this.Yb=!1;this.wb=this.bc=this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=null;this.Qc="post"};fcU(fc9,fcRc);fc9[fc].Ac=function(a){this.wb=a};fc9[fc].w=fc8;fc9[fc].S={};fc9[fc].Ec=function(a){this.pa=a};fc9[fc].Ra=function(a){var b=fc9[fc].S[a];if(!b)if(0!==this.pa[fcG]("https://")){var b=this.ub(a),c="//";0==a[fcG]("https://")?c="https://":0==a[fcG]("http://")&&(c="http://");b=[c,b,this.pa][fcO]("")}else b=this.pa;return b};
fc9[fc].ub=function(a){var b=new fcY;a=fcxb(a);b[fcN](a);b=b.digest();return b=fcIc(b)};
var fcTc=function(a,b){var c=b?b:fcc.top,d=c.frames;try{if(c.frameElement.id==a)return c}catch(e){}for(c=0;c<d[fcI];++c){var f=fcTc(a,d[c]);if(f)return f}return null},fcPc=function(a,b,c,d,e,f,k){var l="gfc_load_"+a;b='<html><head><style type="text/css">body {background:transparent;}</style>'+(fcW?'<script type="text/javascript">window.goback=function(){history.go(-1);};setTimeout("goback();", 0);\x3c/script>':"")+"</head><body><form onsubmit='window.goback=function(){};return false;' style='margin:0;padding:0;' id='"+
l+"' method='"+c+"' ' action='"+fca[fcz].escapeString(b)+"'>";for(var m in d)b+="<input type='hidden' name='"+fca[fcz].escapeString(m)+"' value='' >";b+="</form></body></html>";c=fcTc(a);var n;try{n=c[fcJ]||c.contentWindow[fcJ]}catch(g){e&&f&&(fcl(e,""),fcl(e,f),c=fcTc(a),n=c[fcJ]||c.contentWindow[fcJ])}k&&fca.rpc.setAuthToken(a,k);n.open();n.write(b);n.close();a=n[fcF](l);for(m in d)a[m].value=d[m];if(fcW)a.onsubmit();a.submit()};
fc9[fc].zb=function(){var a=fca[fcz][fcK]().fcsite,b=fca[fcz][fcK]().fcprofile;a&&b&&fc4.xa(b,a)};fc9[fc].Bc=function(a,b){this.S[a]=b};fc9[fc].U=function(){var a=/Version\/3\..*Safari/;if(a=fcqb&&fcib[fcq](a))fce[fcv].reload();else{null!=fc4.g&&fc4.g.refresh();for(var b in fc4.k)a=fc4.k[b],this.J(a);null!=this.lastIframeLightboxOpenArguments&&(b=this.lastIframeLightboxOpenArguments,this.u(),this.ra[fcA](this,b))}};
fc9[fc].X=function(a){a[fcq](/^http[s]?:\/\//)||(a=a&&0<a[fcI]&&"/"==a[fcAa](0,1)?fce[fcv][fcoa][fcq](/^http[s]?:\/\/[^\/]+\//)[0]+a[fcAa](1):fce[fcv][fcoa][fcq](/^[^?#]+\//)[0]+a);this.T=a};fc9[fc].ea=function(a){return"fcauth"+a};fc9[fc].ka=function(a){return"fcauth"+a+"-s"};fc9[fc].hash=function(a,b){var c=new fcY,d=fcEb(a,!0),c=new fcX(c,d,64),d=fcxb(b),c=c.Jb(d);return fcDb(c,!0)};fc9[fc].Ma=function(a){return a=fcHb.get(this.ea(a))||fcHb.get(this.ka(a))||this.Ga[a]||""};
fc9[fc].Y=function(a){this.V=a};fc9[fc].Fc=function(a){this.W=a};fc9[fc].N=function(a){a=new this.w(a);a.Y(this.V);return a};fc9[fc].la=function(){return this.aa};fc9[fc].Dc=function(a){this.bc=a};var fc$=function(a){return(a=a[fcq](/_([0-9]+)$/))?fcca(a[1],10):null};
fc9[fc].Z=function(a,b,c,d,e,f){this.Nc||(this.ba(fcc[fcya]+"/friendconnect/styles/container.css?d="+this.W),this.Nc=!0);var k=fcUc(d);this.Zb!=(k?"rtl":"ltr")&&(this.ba(fcc[fcya]+"/friendconnect/styles/lightbox"+(k?"-rtl":"")+".css?d="+this.W),this.Zb=k?"rtl":"ltr");this.Yb||(this.rb(fcc[fcya]+"/friendconnect/script/lightbox.js?d="+this.W),this.Yb=!0);b=b||0;if(goog.ui&&goog.ui[fcna]){this.u();b=new goog.ui[fcna]("lightbox-dialog",!0);var l=this;goog.events.listen(b,goog.ui[fcna].EventType.AFTER_HIDE,
function(){l.lastLightboxCallback&&l.lastLightboxCallback();l.Ea()});b.setDraggable(!0);b.setDisposeOnHide(!0);b.setBackgroundElementOpacity(.5);b.setButtonSet(new goog.ui[fcna].ButtonSet);this.lastLightboxDialog=b;this.lastLightboxCallback=c||null;c=b.getDialogElement();e=e||702;fc9b(c,"width",fci(e)+"px");f&&fc9b(c,"height",fci(f)+"px");a(b);b.getDialogElement()[fcw].direction=k?"rtl":"ltr"}else if(5>b)b++,a=fcS(this.Z,this,a,b,c,d,e,f),fcba(a,1E3);else throw this.Ea(),fch("lightbox.js failed to load");
};fc9[fc].u=function(a){var b=this.lastLightboxDialog,c=this.lastLightboxCallback;this.lastLightboxCallback=null;null!=b&&(this.lastLightboxDialog.dispatchEvent(goog.ui[fcna].EventType.AFTER_HIDE),b.dispose(),null!=c&&c(a))};fc9[fc].Ea=function(){this.lastIframeLightboxOpenArguments=this.lastLightboxCallback=this.lastLightboxDialog=null};fc9[fc].Cc=function(a){this.lastLightboxDialog&&this.lastLightboxDialog.setTitle(a)};fc9[fc].lc=function(){this.u();this.U()};
fc5[fc].cb=function(a,b){var c=fc$(this.f),c=fc4.A(c),d=fcR(c.originalParams);b&&(d["view-params"]=d["view-params"]||{},d["view-params"]=b);d.locale=c[fcwa];if(c.useLightBoxForCanvas)d.presentation=a,null!=fc4.lastLightboxDialog?fc4.u():fc4.jb(d);else if((c=c.Pb(a))&&fce[fcv][fcoa]!=c)if("1"==fca[fcz][fcK]().embed)try{fcc.parent.location=c}catch(e){fcc.top.location=c}else fce[fcv].href=c};
fc9[fc].jb=function(a,b){a=a||{};var c=a[fcwa],d=fcUc(c),e=this;this.u();this.Z(function(b){var c=fc0("div",{},fc0("div",{id:"gadget-signin",style:"background-color:#ffffff;height:32px;"}),fc0("div",{id:"gadget-lb-canvas",style:"background-color:#ffffff;"}));b.getTitleTextElement()[fcm](fc0("div",{id:"gfc-canvas-title",style:"color:#000000;"}));b[fcBa]()[fcm](c);b.setVisible(!0);var c=fcR(a),l=fc0b(fcc),m=fcg[fcD](.7*l[fcB]),l={BORDER_COLOR:"#cccccc",ENDCAP_BG_COLOR:"#e0ecff",ENDCAP_TEXT_COLOR:"#333333",
ENDCAP_LINK_COLOR:"#0000cc",ALTERNATE_BG_COLOR:"#ffffff",CONTENT_BG_COLOR:"#ffffff",CONTENT_LINK_COLOR:"#0000cc",CONTENT_TEXT_COLOR:"#333333",CONTENT_SECONDARY_LINK_COLOR:"#7777cc",CONTENT_SECONDARY_TEXT_COLOR:"#666666",CONTENT_HEADLINE_COLOR:"#333333"};c.id="gadget-lb-canvas";fck(c,fcg.min(498,m)+"px");c.maxHeight=m;c.keepMax&&(fck(c,m),fc9b(b[fcBa](),"height",m+35+"px"));c["view-params"]=c["view-params"]||{};c["view-params"].opaque=!0;c["view-params"].skin=c["view-params"].skin||{};fcLa(c["view-params"].skin,
l);e.render(c);m={id:"gadget-signin",presentation:"canvas"};m.site=c.site;m.titleDivId="gfc-canvas-title";m["view-params"]={};m["view-params"].opaque=!0;m.keepMax=c.keepMax;c.securityToken&&(m.securityToken=c.securityToken);c=fcR(l);c.ALIGNMENT=d?"left":"right";e.ab(m,c);b.reposition()},void 0,b,c)};fc5[fc].ib=function(a,b){null!=fc4.g&&fc4.g.Ic(a,b)};fc5[fc].Ua=function(a){null!=fc4.g&&fc4.g.ma(a)};
fc5[fc].Ya=function(a,b,c,d,e,f,k,l,m,n){var g=this.f;a=a+(0<=a[fcG]("?")?"&":"?")+"iframeId="+g;fc4.ra(a,b,c,d,e,f,k,l,m,n,this.callback)};
fc9[fc].ra=function(a,b,c,d,e,f,k,l,m,n,g){var h=fc0b(fcc);null==d&&(d=fcg[fcD](.7*h[fcB]));null==c&&(c=fcg[fcD](.7*h[fcn]));for(var p=[],h=0;h<arguments[fcI]&&10>h;h++)p[fcC](arguments[h]);if("/"==!a[0])throw fch("lightbox iframes must be relative to fc server");var t=this,q=f?fcR(f):{},u=fci(fcg[fcD](2147483647*fcg.random())),r="gfc_lbox_iframe_"+u;fca.rpc.setAuthToken(r,u);b||(b=fc4.openSocialSecurityToken);var v=fc4.openSocialSiteId;fc4.Z(function(c){t.lastIframeLightboxOpenArguments=p;var f=
"st="+fcb(b)+"&parent="+fcb(fc4.T)+"&rpctoken="+fcb(u);l||(q.iframeId=r,q.iurl=a,a=fcd+"/friendconnect/lightbox");var g=d-54;fck(q,g);var h='<iframe id="'+r,h=h+('" width="100%" height="'+g+'" frameborder="0" scrolling="auto"></iframe>');c.setContent(h);e&&(c.setTitle(e),n&&(g=c.getTitleTextElement(),fcLb(g,"lightbox-dialog-title-small-text")));c.setVisible(!0);m||(q.fcauth=fc4.Ma(v));a+=(0<=a[fcG]("?")?"&":"?")+f+"&communityId="+v;fcPc(r,a,"POST",q,null,null,null)},void 0,g,void 0,c,d)};
fc5[fc].Ia=function(){var a=fc$(this.f),a=fc4.A(a);return a.viewParams};fc5[fc].Ha=function(){return fcJc};fc5[fc].Za=function(a,b){var c=fc$(this.f),c=fc4.A(c);c.viewParams[a]=b};fc9[fc].Rb=function(a,b){null!=fc4.g&&fc4.g.cc(b)};fc9[fc].Sb=function(a,b){null!=fc4.g&&fc4.g.dc(b)};fc5[fc].Fa=function(a,b,c,d){null!=fc4.g&&fc4.g.vb(a,b,c,d)};fc9[fc].J=function(a){var b=this.B.Pa(a);a.render(b);this.B.postProcessGadget&&this.B.postProcessGadget(a)};
fc5[fc].signout=function(a){fc4.$a(fc4.ea(a));fc4.$a(fc4.ka(a));fc4.Ga={};fc4.U();return!1};fc9[fc].$a=function(a){for(var b=fce[fcv].pathname,b=b[fcu]("/"),c=0;c<b[fcI];c++){for(var d=fcf(c+1),e=0;e<c+1;e++)d[e]=b[e];fcHb.remove(a,d[fcO]("/")+"/")}};
fc5[fc].fb=function(a){var b=fce[fcF](this.f);b&&0<a&&fck(b[fcw],a+"px");(b=fce[fcF](this.f+"_body"))&&0<a&&fck(b[fcw],a+"px");if(b=fc$(this.f)){var c=fc4.A(b);c&&((b=fce[fcF](c.divId))&&0<a&&(c&&c[fcpa]&&c[fcpa]<a&&(a=c[fcpa],b[fcw].overflowY="auto"),fck(b[fcw],a+"px")),!c.keepMax&&"canvas"==c.la()&&fc4.lastLightboxDialog&&fc4.lastLightboxDialog.reposition(),fc9b(c.chrome,"visibility","visible"))}};fc5[fc].setTitle=function(a){var b=fc$(this.f),b=fc4.A(b);(b=b.titleDivId)&&fcl(fce[fcF](b),fca[fcz].escapeString(a))};
fc5[fc].signin=function(a,b,c){fcHb.set(fc4.ea(a),b,31104E3,c);fcHb.set(fc4.ka(a),b,-1,c);fc4.Ga[a]=b;fc4.U()};var fcWc=function(a){fcBc(a,fcVc)};fc9[fc].rc=function(a,b){b&&this.m(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/members.xml";this.render(this.s(a,c))};fc9[fc].tc=function(a,b){b&&this.m(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/review.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"review"};this.render(this.s(a,c))};
fc9[fc].ta=function(a,b){b&&this.m(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/wall.xml";c["view-params"]={startMaximized:"true",disableMinMax:"true",features:"comment"};this.render(this.s(a,c))};fc9[fc].ab=function(a,b){b&&this.m(b,a);var c={};c.url=fcd+"/friendconnect/gadgets/signin.xml";fck(c,32);this.render(this.s(a,c))};
fc9[fc].oc=function(a,b){b&&this.m(b,a);a.prefs=a.prefs||{};a.sendViewParamsToServer=!0;a.prefs.hints=fcc.google_hints;var c={};c.url=fcd+"/friendconnect/gadgets/ads.xml";fck(c,90);this.render(this.s(a,c))};fc9[fc].wa=function(a,b){if(a.id){b&&this.m(b,a);a["view-params"]=a["view-params"]||{};a["view-params"].opaque="true";this.g=new fc2(a);this.g.render();var c={};c.url=fcd+"/friendconnect/gadgets/friendbar.xml";a.id=this.g.t;fck(a,"1");this.render(this.s(a,c))}};fc9[fc].qc=fc9[fc].wa;
fc9[fc].va=function(a,b){a=a||{};a.url=fcd+"/friendconnect/gadgets/signin.xml";a.site=a.site||fca[fcz][fcK]().site;fck(a,32);this.ua(a,b)};fc9[fc].pc=fc9[fc].va;fc9[fc].vc=fc9[fc].ta;fc9[fc].m=function(a,b){var c=b["view-params"];c||(c={},b["view-params"]=c);c.skin=a};fc9[fc].s=function(a,b){var c=this.Xa(b,a);if(b["view-params"]){var d=b["view-params"];a["view-params"]&&(d=this.Xa(d,a["view-params"]));c["view-params"]=d}return c};fc9[fc].sc=function(a,b){b&&this.m(b,a);this.render(a)};
fc9[fc].Xa=function(a,b){var c={},d;for(d in b)c[d]=b[d];for(d in a)"undefined"==typeof c[d]&&(c[d]=a[d]);return c};
fc9[fc].render=function(a){this.openSocialSiteId=a.site;a["view-params"]=a["view-params"]||{};var b=this.N({divId:a.id,specUrl:a.url,communityId:a.site,height:a[fcB],locale:a[fcwa]||this.bc,secureToken:a.securityToken,titleDivId:a.titleDivId,showEmbedThis:a.showEmbedThis,useLightBoxForCanvas:a.useLightBoxForCanvas||"undefined"==typeof a.useLightBoxForCanvas&&fcc.friendconnect_lightbox,viewParams:a["view-params"],prefs:a.prefs,originalParams:a,debug:a.debug,maxHeight:a[fcpa],sendViewParamsToServer:a.sendViewParamsToServer,
keepMax:a.keepMax});a.presentation&&b.Gc(a.presentation);this.pb(b);this.B.qb(b.id,a.id);fcba(function(){fc4.J(b)},0);return b.id};fc9[fc].uc=function(a,b){a=a||{};a.presentation="canvas";this.bb(a,b)};
fc9[fc].bb=function(a,b,c){a=a||{};a.url=fca[fcz][fcK]().url;a.site=fca[fcz][fcK]().site||a.site;var d=fca[fcz][fcK]()["view-params"];d&&(a["view-params"]=fca[fcy].parse(decodeURIComponent(d)));c&&(a["view-params"]=a["view-params"]||{},a["view-params"].useFixedHeight=!0,fck(a["view-params"],c),b=b||{},b.HEIGHT=fci(c));this.ua(a,b)};fc9[fc].ua=function(a,b){a=a||{};b&&this.m(b,a);"1"==fca[fcz][fcK]().canvas?a.presentation="canvas":"1"==fca[fcz][fcK]().embed&&(a.presentation="embed");fc4.render(a)};
fc9[fc].Qb=function(){var a=fca[fcz][fcK]().caller;a&&fce[fcv][fcoa]!=a&&8<a[fcI]&&("http://"==a.substr(0,7)[fcCa]()||"https://"==a.substr(0,8)[fcCa]())?fce[fcv].href=a:(a=fca[fcz][fcK]().site)?fce[fcv].href=fcd+"/friendconnect/directory/site?id="+a:fcc.history.go(-1)};fc9[fc].I="";fc9[fc].Mb=function(){return this.I};fc9[fc].yc=function(a){this.apiVersion=a};fc9[fc].ba=function(a){var b=fce[fcr]("link");b[fcs]("rel","stylesheet");b[fcs]("type","text/css");b[fcs]("href",a);fce.getElementsByTagName("head")[0][fcm](b)};
fc9[fc].rb=function(a){var b=fce[fcr]("script");b[fcs]("src",a);b[fcs]("type","text/javascript");fce.getElementsByTagName("head")[0][fcm](b)};fc9[fc].Da=function(a){fce[fcL]?a():fcc[fcva]?fcc[fcva]("load",a,!1):fcc.attachEvent("onload",a)};fc9[fc].na=function(a){if(!a.site)throw"API not loaded, please pass in a 'site'";this.ba(fcc[fcya]+"/friendconnect/styles/container.css?d="+this.W);this.openSocialSiteId=a.site;this.apiLoadedCallback=a.onload;this.Da(fcS(this.Wa,this,a,"fc-opensocial-api"))};
fc9[fc].ac=fc9[fc].na;fc9[fc].Ub=function(a){var b={};b.site=this.openSocialSiteId;b["view-params"]={txnId:a};this.Wa(b,"gfc-"+a)};fc9[fc].nc=function(a){var b={},c;for(c in this.k){var d=this.k[c];if(d.viewParams&&d.viewParams.txnId==a)break;else b[c]=d}this.k=b;(a=fce[fcF]("gfc-"+a))&&a.parentNode&&a.parentNode.removeChild&&a.parentNode.removeChild(a)};fc9[fc].Gb=function(){return"<Templates xmlns:fc='http://www.google.com/friendconnect/makeThisReal'>  <Namespace prefix='fc' url='http://www.google.com/friendconnect/makeThisReal'/>  <Template tag='fc:signIn'>    <div onAttach='google.friendconnect.renderSignInButton({element: this})'></div>  </Template></Templates>"};
fc9[fc].Nb=function(){return"<Templates xmlns:os='http://ns.opensocial.org/2008/markup'><Namespace prefix='os' url='http://ns.opensocial.org/2008/markup'/><Template tag='os:Name'>  <span if='${!My.person.profileUrl}'>${My.person.displayName}</span>  <a if='${My.person.profileUrl}' href='${My.person.profileUrl}'>      ${My.person.displayName}</a></Template><Template tag='os:Badge'>  <div><img if='${My.person.thumbnailUrl}' src='${My.person.thumbnailUrl}'/>   <os:Name person='${My.person}'/></div></Template><Template tag='os:PeopleSelector'>  <select onchange='google.friendconnect.PeopleSelectorOnChange(this)' name='${My.inputName}'          multiple='${My.multiple}' x-var='${My.var}' x-max='${My.max}'          x-onselect='${My.onselect}'>    <option repeat='${My.group}' value='${Cur.id}' selected='${Cur.id == My.selected}'>        ${Cur.displayName}    </option>  </select></Template></Templates>"};
var fcXc=function(a){var b;if(a.multiple){b=[];for(var c=0;c<a[fcx][fcI];c++)a[fcx][c].selected&&b[fcC](a[fcx][c].value);c=a.getAttribute("x-max");try{c*=1}catch(d){c=0}if(c&&b[fcI]>c&&a["x-selected"])for(b=a["x-selected"],c=0;c<a[fcx][fcI];c++){a[fcx][c].selected=!1;for(var e=0;e<b[fcI];e++)if(a[fcx][c].value==b[e]){a[fcx][c].selected=!0;break}}}else b=a[fcx][a.selectedIndex].value;a["x-selected"]=b;(c=a.getAttribute("x-var"))&&fcc.opensocial[fcha]&&fcc.opensocial[fcha].getDataContext().putDataSet(c,
b);if(c=a.getAttribute("x-onselect"))if(fcc[c]&&"function"==typeof fcc[c])fcc[c](b);else a["x-onselect-fn"]?a["x-onselect-fn"][fcA](a):a["x-onselect-fn"]=new Function(c)};
fc9[fc].Wa=function(a,b){fcc.opensocial.template.Loader.loadContent(this.Nb());fcc.opensocial.template.Loader.loadContent(this.Gb());fcc.opensocial[fcha].processDocumentMarkup();var c=fce[fcr]("div");c.id=b;fck(c[fcw],"0px");fcj(c[fcw],"0px");c[fcw].position="absolute";c[fcw].visibility="hidden";fce[fcL][fcm](c);var d={};d.url=fcd+"/friendconnect/gadgets/osapi-"+this.apiVersion+".xml";fck(d,0);d.id=c.id;d.site=a.site;d["view-params"]=a["view-params"];this.render(d)};
fc5[fc].za=function(){fc4.I=this.f;fc4.openSocialSecurityToken=this.a[0];var a=fc4.openSocialSecurityToken;fcc.opensocial[fcha].executeRequests();fcc.opensocial.template.process();fc4.apiLoadedCallback&&(a=fcKa(fc4.apiLoadedCallback,a),fcba(a,0))};fc9[fc].Q=function(a){var b=null,c;for(c in this.k)if(this.k[c].divId==a){b=this.k[c];break}return b};fc9[fc].D=function(a,b){var c=this.Q(a),d=null;c&&(d=c.D(b));return d};fc9[fc].C=function(a,b){var c=this.Q(a),d=null;c&&(d=c.C(b));return d};
fc9[fc].Hc=function(a,b){this.Z(function(c){var d=fce.createTextNode("Copy & paste this code into your site.");c[fcBa]()[fcm](d);c[fcBa]()[fcm](fce[fcr]("br"));var d=fc4.C(a,b),e=fce[fcr]("textarea");fcl(e,d);e[fcs]("style","width:500px;");c[fcBa]()[fcm](e);c.setVisible(!0)})};var fcYc="ar dv fa iw he ku pa sd tk ug ur yi".split(" "),fcUc=function(a){var b=!1;a?(a=a[fcu]("_")[0],b=fc$a(fcYc,a)):b=(a=fcbc(fce[fcL],"direction"))&&"rtl"==a;return b};
fc5[fc].kb=function(a,b){var c=0,d=null;try{var e=fc$(this.f),f=fc4.A(e),d=f.secureToken,c=f.communityId}catch(k){}b&&(c=b);fc4.xa(a,c,this.callback,d)};fc9[fc].xa=function(a,b,c,d){b=b||this.openSocialSiteId;a={keepMax:!0,presentation:"canvas",url:fcd+"/friendconnect/gadgets/members.xml",site:b,"view-params":{profileId:a}};d&&(a.securityToken=d);this.jb(a,c)};fc9[fc].Ib=function(a){var b=null;(a=this.Q(a))&&a.secureToken&&(b=a.secureToken);return b};
fc9[fc].Hb=function(a){var b=null;(a=this.Q(a))&&a.communityId&&(b=a.communityId);return b};var fcVc=function(a){fc4.I&&fcuc(fc4.I,a)},fcZc=function(){fc5[fc].signout(fc4.openSocialSiteId)},fc_c=function(){fcxc(fc4.I)},fc0c=function(a,b){fcrc(a,b)},fcFc=function(){this.p={}};fcFc[fc].register=function(){fca.rpc[fct]("subscribeEventType",fc5[fc].subscribe);fca.rpc[fct]("publishEvent",fc5[fc].publish)};fc5[fc].subscribe=function(a){var b=fcSc;b.p[a]=b.p[a]||[];a=b.p[a];a[a[fcI]]={frameId:this}};
fcFc[fc].lb=function(a,b,c){var d=this;d.p[b]=d.p[b]||[];b=d.p[b];b[b[fcI]]={container:a,callback:c}};fc5[fc].publish=function(a){var b=fcSc,c=0;this.f&&(c=fc$(this.f));b.p[a]=b.p[a]||[];for(var b=b.p[a],d=0;d<b[fcI];d++)b[d].container?b[d].callback[fcM](b[d].container,a,c):fca.rpc[fcM](b[d].frameId,a,null,a,c)};var fcGc=fcS(fc5[fc].publish,new fc5),fcSc=new fcFc,fc4=new fc9;fc4.Da(fc4.zb);fcT("google.friendconnect.container",fc4);fcT("google.friendconnect.container.refreshGadgets",fc4.U);
fcT("google.friendconnect.container.setParentUrl",fc4.X);fcT("google.friendconnect.container.setServerBase",fc4.Y);fcT("google.friendconnect.container.setServerVersion",fc4.Fc);fcT("google.friendconnect.container.createGadget",fc4.N);fcT("google.friendconnect.container.openLightboxIframe",fc4.ra);fcT("google.friendconnect.container.renderGadget",fc4.J);fcT("google.friendconnect.container.render",fc4.render);fcT("google.friendconnect.container.goBackToSite",fc4.Qb);
fcT("google.friendconnect.container.renderMembersGadget",fc4.rc);fcT("google.friendconnect.container.renderReviewGadget",fc4.tc);fcT("google.friendconnect.container.renderCommentsGadget",fc4.ta);fcT("google.friendconnect.container.renderSignInGadget",fc4.ab);fcT("google.friendconnect.container.renderFriendBar",fc4.qc);fcT("google.friendconnect.container.renderSocialBar",fc4.wa);fcT("google.friendconnect.container.renderCanvasSignInGadget",fc4.pc);
fcT("google.friendconnect.container.renderUrlCanvasGadget",fc4.uc);fcT("google.friendconnect.container.renderEmbedSignInGadget",fc4.va);fcT("google.friendconnect.container.renderUrlEmbedGadget",fc4.bb);fcT("google.friendconnect.container.renderEmbedGadget",fc4.ua);fcT("google.friendconnect.container.renderWallGadget",fc4.vc);fcT("google.friendconnect.container.renderAdsGadget",fc4.oc);fcT("google.friendconnect.container.renderOpenSocialGadget",fc4.sc);
fcT("google.friendconnect.container.setNoCache",fc4.gb);fcT("google.friendconnect.container.enableProxy",fc4.Ja);fcT("google.friendconnect.container.setDomain",fc4.Bc);fcT("google.friendconnect.container.setLockedDomainSuffix",fc4.Ec);fcT("google.friendconnect.container.setLocale",fc4.Dc);fcT("google.friendconnect.container.loadOpenSocialApi",fc4.ac);fcT("google.friendconnect.container.initOpenSocialApi",fc4.na);fcT("google.friendconnect.container.getOpenSocialApiIframeId",fc4.Mb);
fcT("google.friendconnect.container.setApiVersion",fc4.yc);fcT("google.friendconnect.container.getEmbedUrl",fc4.D);fcT("google.friendconnect.container.getEmbedHtml",fc4.C);fcT("google.friendconnect.container.getGadgetSecurityToken",fc4.Ib);fcT("google.friendconnect.container.getGadgetCommunityId",fc4.Hb);fcT("google.friendconnect.container.showEmbedDialog",fc4.Hc);fcT("google.friendconnect.container.showMemberProfile",fc4.xa);fcT("google.friendconnect.requestSignIn",fcVc);
fcT("google.friendconnect.requestSignOut",fcZc);fcT("google.friendconnect.requestSettings",fc_c);fcT("google.friendconnect.requestInvite",fc0c);fcT("google.friendconnect.renderSignInButton",fcWc);fcT("google.friendconnect.container.invokeOpenSocialApiViaIframe",fc4.Ub);fcT("google.friendconnect.container.removeOpenSocialApiViaIframe",fc4.nc);fcT("google.friendconnect.userAgent.WEBKIT",fcqb);fcT("google.friendconnect.userAgent.IE",fcW);fcT("google.friendconnect.PeopleSelectorOnChange",fcXc);
fcT("google.friendconnect.container.setDateStamp_",fc4.Ac);
google.friendconnect.container.setServerBase('http://www-a-fc-opensocial.googleusercontent.com/ps/');google.friendconnect.container.setServerVersion('0.1-c17d2763_4b230aa2_a1298c5c_cdd7a7a7_2396ca6a.7');google.friendconnect.container.setApiVersion('0.8');
google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/activities.xml', 'https://umvqpbsra7b9da3v73i9b1f1h35v9875-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/ask.xml', 'https://c5n5mdkbldclvs9c4cmka1i473qj7347-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/friendbar.xml', 'https://tc1gsfg1bpg3dh74e58frg31jhrlijmb-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/content_reveal.xml', 'https://vpkdf3e9ad3mo1u6rf6q8mkvlfh4nhb8-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/chat.xml', 'https://ensh8e52b69562jd5dd9d9fej214p35j-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/donate.xml', 'https://gdp3j78c303214vet22si9nv69isi5so-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/lamegame.xml', 'https://6odruuecb3fkc62vkrn46k05ar324r65-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/map.xml', 'https://42v8m9qahgskau24qus2aa8llgtoj86r-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/members.xml', 'https://4t4qjto8n6vcba9cabf6v2lrng9ast6r-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/newsletterSubscribe.xml', 'https://grcrlo3milo17raaukkj6qnod5edu0v0-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/poll.xml', 'https://0a3ga3vn4gfsdhlqn7pruh1qtq66jpl4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/recommended_pages.xml', 'https://9pn9h0ef3oqan95jq679oms4lbrhvqkf-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/review.xml', 'https://bvb14dk05gfgdvof7iqdkoufuclkqhg6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/sample.xml', 'https://kl1m4ltugaae61po1k12eouge39oohh6-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/signin.xml', 'https://9fruo8jik01ke9p21si44s2pu0vt6kk4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/wall.xml', 'https://fp8527dih8ahqgno54vjfjeju73lvgf4-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setDomain('https://www.google.com/friendconnect/gadgets/osapi-0.8.xml', 'https://3lijfq2nn4jrph2q8dn9vdup48cr0vv5-a-fc-opensocial.googleusercontent.com/ps/');

google.friendconnect.container.setLockedDomainSuffix('-a-fc-opensocial.googleusercontent.com/ps/');
window['__ps_loaded__'] = true; 
 }google.friendconnect_ = google.friendconnect;
google.friendconnect.container.setDateStamp_('14b717c8a9a');