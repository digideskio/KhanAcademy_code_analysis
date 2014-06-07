(function(){var e="ace"
var t=function(){return this}()
if(!e&&typeof requirejs!=="undefined")return
var i=function(e,t,n){if(typeof e!=="string"){if(i.original)i.original.apply(window,arguments)
else{console.error("dropping module because define wasn't a string.")
console.trace()}return}if(arguments.length==2)n=t
if(!i.modules){i.modules={}
i.payloads={}}i.payloads[e]=n
i.modules[e]=null}
var n=function(e,t,i){if(Object.prototype.toString.call(t)==="[object Array]"){var r=[]
for(var o=0,a=t.length;o<a;++o){var l=s(e,t[o])
if(!l&&n.original)return n.original.apply(window,arguments)
r.push(l)}if(i){i.apply(null,r)}}else if(typeof t==="string"){var h=s(e,t)
if(!h&&n.original)return n.original.apply(window,arguments)
if(i){i()}return h}else{if(n.original)return n.original.apply(window,arguments)}}
var r=function(e,t){if(t.indexOf("!")!==-1){var i=t.split("!")
return r(e,i[0])+"!"+r(e,i[1])}if(t.charAt(0)=="."){var n=e.split("/").slice(0,-1).join("/")
t=n+"/"+t
while(t.indexOf(".")!==-1&&s!=t){var s=t
t=t.replace(/\/\.\//,"/").replace(/[^\/]+\/\.\.\//,"")}}return t}
var s=function(e,t){t=r(e,t)
var s=i.modules[t]
if(!s){s=i.payloads[t]
if(typeof s==="function"){var o={}
var a={id:t,uri:"",exports:o,packaged:true}
var l=function(e,i){return n(t,e,i)}
var h=s(l,o,a)
o=h||a.exports
i.modules[t]=o
delete i.payloads[t]}s=i.modules[t]=o||s}return s}
function o(e){var r=function(e,t){return n("",e,t)}
var s=t
if(e){if(!t[e])t[e]={}
s=t[e]}if(!s.define||!s.define.packaged){i.original=s.define
s.define=i
s.define.packaged=true}if(!s.require||!s.require.packaged){n.original=s.require
s.require=r
s.require.packaged=true}}o(e)})()
ace.define("ace/ace",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/dom","ace/lib/event","ace/editor","ace/edit_session","ace/undomanager","ace/virtual_renderer","ace/multi_select","ace/worker/worker_client","ace/keyboard/hash_handler","ace/placeholder","ace/mode/folding/fold_mode","ace/theme/textmate","ace/config"],function(e,t,i){e("./lib/fixoldbrowsers")
var n=e("./lib/dom")
var r=e("./lib/event")
var s=e("./editor").Editor
var o=e("./edit_session").EditSession
var a=e("./undomanager").UndoManager
var l=e("./virtual_renderer").VirtualRenderer
var h=e("./multi_select").MultiSelect
e("./worker/worker_client")
e("./keyboard/hash_handler")
e("./placeholder")
e("./mode/folding/fold_mode")
e("./theme/textmate")
t.config=e("./config")
t.require=e
t.edit=function(e){if(typeof e=="string"){var i=e
var e=document.getElementById(i)
if(!e)throw new Error("ace.edit can't find div #"+i)}if(e.env&&e.env.editor instanceof s)return e.env.editor
var o=t.createEditSession(n.getInnerText(e))
e.innerHTML=""
var a=new s(new l(e))
new h(a)
a.setSession(o)
var c={document:o,editor:a,onResize:a.resize.bind(a,null)}
r.addListener(window,"resize",c.onResize)
a.on("destroy",function(){r.removeListener(window,"resize",c.onResize)})
e.env=a.env=c
return a}
t.createEditSession=function(e,t){var i=new o(e,t)
i.setUndoManager(new a)
return i}
t.EditSession=o
t.UndoManager=a})
ace.define("ace/lib/fixoldbrowsers",["require","exports","module","ace/lib/regexp","ace/lib/es5-shim"],function(e,t,i){e("./regexp")
e("./es5-shim")})
ace.define("ace/lib/regexp",["require","exports","module"],function(e,t,i){var n={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},r=n.exec.call(/()??/,"")[1]===undefined,s=function(){var e=/^/g
n.test.call(e,"")
return!e.lastIndex}()
if(s&&r)return
RegExp.prototype.exec=function(e){var t=n.exec.apply(this,arguments),i,l
if(typeof e=="string"&&t){if(!r&&t.length>1&&a(t,"")>-1){l=RegExp(this.source,n.replace.call(o(this),"g",""))
n.replace.call(e.slice(t.index),l,function(){for(var e=1;e<arguments.length-2;e++){if(arguments[e]===undefined)t[e]=undefined}})}if(this._xregexp&&this._xregexp.captureNames){for(var h=1;h<t.length;h++){i=this._xregexp.captureNames[h-1]
if(i)t[i]=t[h]}}if(!s&&this.global&&!t[0].length&&this.lastIndex>t.index)this.lastIndex--}return t}
if(!s){RegExp.prototype.test=function(e){var t=n.exec.call(this,e)
if(t&&this.global&&!t[0].length&&this.lastIndex>t.index)this.lastIndex--
return!!t}}function o(e){return(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":"")}function a(e,t,i){if(Array.prototype.indexOf)return e.indexOf(t,i)
for(var n=i||0;n<e.length;n++){if(e[n]===t)return n}return-1}})
ace.define("ace/lib/es5-shim",["require","exports","module"],function(e,t,i){function n(){}if(!Function.prototype.bind){Function.prototype.bind=function P(e){var t=this
if(typeof t!="function"){throw new TypeError("Function.prototype.bind called on incompatible "+t)}var i=a.call(arguments,1)
var r=function(){if(this instanceof r){var n=t.apply(this,i.concat(a.call(arguments)))
if(Object(n)===n){return n}return this}else{return t.apply(e,i.concat(a.call(arguments)))}}
if(t.prototype){n.prototype=t.prototype
r.prototype=new n
n.prototype=null}return r}}var r=Function.prototype.call
var s=Array.prototype
var o=Object.prototype
var a=s.slice
var l=r.bind(o.toString)
var h=r.bind(o.hasOwnProperty)
var c
var u
var d
var f
var g
if(g=h(o,"__defineGetter__")){c=r.bind(o.__defineGetter__)
u=r.bind(o.__defineSetter__)
d=r.bind(o.__lookupGetter__)
f=r.bind(o.__lookupSetter__)}if([1,2].splice(0).length!=2){if(function(){function e(e){var t=new Array(e+2)
t[0]=t[1]=0
return t}var t=[],i
t.splice.apply(t,e(20))
t.splice.apply(t,e(26))
i=t.length
t.splice(5,0,"XXX")
i+1==t.length
if(i+1==t.length){return true}}()){var m=Array.prototype.splice
Array.prototype.splice=function(e,t){if(!arguments.length){return[]}else{return m.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(a.call(arguments,2)))}}}else{Array.prototype.splice=function(e,t){var i=this.length
if(e>0){if(e>i)e=i}else if(e==void 0){e=0}else if(e<0){e=Math.max(i+e,0)}if(!(e+t<i))t=i-e
var n=this.slice(e,e+t)
var r=a.call(arguments,2)
var s=r.length
if(e===i){if(s){this.push.apply(this,r)}}else{var o=Math.min(t,i-e)
var l=e+o
var h=l+s-o
var c=i-l
var u=i-o
if(h<l){for(var d=0;d<c;++d){this[h+d]=this[l+d]}}else if(h>l){for(d=c;d--;){this[h+d]=this[l+d]}}if(s&&e===u){this.length=u
this.push.apply(this,r)}else{this.length=u+s
for(d=0;d<s;++d){this[e+d]=r[d]}}}return n}}}if(!Array.isArray){Array.isArray=function H(e){return l(e)=="[object Array]"}}var v=Object("a"),A=v[0]!="a"||!(0 in v)
if(!Array.prototype.forEach){Array.prototype.forEach=function N(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=arguments[1],r=-1,s=i.length>>>0
if(l(e)!="[object Function]"){throw new TypeError}while(++r<s){if(r in i){e.call(n,i[r],r,t)}}}}if(!Array.prototype.map){Array.prototype.map=function z(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0,r=Array(n),s=arguments[1]
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}for(var o=0;o<n;o++){if(o in i)r[o]=e.call(s,i[o],o,t)}return r}}if(!Array.prototype.filter){Array.prototype.filter=function G(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0,r=[],s,o=arguments[1]
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}for(var a=0;a<n;a++){if(a in i){s=i[a]
if(e.call(o,s,a,t)){r.push(s)}}}return r}}if(!Array.prototype.every){Array.prototype.every=function U(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0,r=arguments[1]
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}for(var s=0;s<n;s++){if(s in i&&!e.call(r,i[s],s,t)){return false}}return true}}if(!Array.prototype.some){Array.prototype.some=function V(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0,r=arguments[1]
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}for(var s=0;s<n;s++){if(s in i&&e.call(r,i[s],s,t)){return true}}return false}}if(!Array.prototype.reduce){Array.prototype.reduce=function j(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}if(!n&&arguments.length==1){throw new TypeError("reduce of empty array with no initial value")}var r=0
var s
if(arguments.length>=2){s=arguments[1]}else{do{if(r in i){s=i[r++]
break}if(++r>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;r<n;r++){if(r in i){s=e.call(void 0,s,i[r],r,t)}}return s}}if(!Array.prototype.reduceRight){Array.prototype.reduceRight=function K(e){var t=W(this),i=A&&l(this)=="[object String]"?this.split(""):t,n=i.length>>>0
if(l(e)!="[object Function]"){throw new TypeError(e+" is not a function")}if(!n&&arguments.length==1){throw new TypeError("reduceRight of empty array with no initial value")}var r,s=n-1
if(arguments.length>=2){r=arguments[1]}else{do{if(s in i){r=i[s--]
break}if(--s<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}do{if(s in this){r=e.call(void 0,r,i[s],s,t)}}while(s--)
return r}}if(!Array.prototype.indexOf||[0,1].indexOf(1,2)!=-1){Array.prototype.indexOf=function Y(e){var t=A&&l(this)=="[object String]"?this.split(""):W(this),i=t.length>>>0
if(!i){return-1}var n=0
if(arguments.length>1){n=_(arguments[1])}n=n>=0?n:Math.max(0,i+n)
for(;n<i;n++){if(n in t&&t[n]===e){return n}}return-1}}if(!Array.prototype.lastIndexOf||[0,1].lastIndexOf(0,-3)!=-1){Array.prototype.lastIndexOf=function Z(e){var t=A&&l(this)=="[object String]"?this.split(""):W(this),i=t.length>>>0
if(!i){return-1}var n=i-1
if(arguments.length>1){n=Math.min(n,_(arguments[1]))}n=n>=0?n:i-Math.abs(n)
for(;n>=0;n--){if(n in t&&e===t[n]){return n}}return-1}}if(!Object.getPrototypeOf){Object.getPrototypeOf=function Q(e){return e.__proto__||(e.constructor?e.constructor.prototype:o)}}if(!Object.getOwnPropertyDescriptor){var p="Object.getOwnPropertyDescriptor called on a "+"non-object: "
Object.getOwnPropertyDescriptor=function X(e,t){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError(p+e)
if(!h(e,t))return
var i,n,r
i={enumerable:true,configurable:true}
if(g){var s=e.__proto__
e.__proto__=o
var n=d(e,t)
var r=f(e,t)
e.__proto__=s
if(n||r){if(n)i.get=n
if(r)i.set=r
return i}}i.value=e[t]
return i}}if(!Object.getOwnPropertyNames){Object.getOwnPropertyNames=function J(e){return Object.keys(e)}}if(!Object.create){var C
if(Object.prototype.__proto__===null){C=function(){return{__proto__:null}}}else{C=function(){var e={}
for(var t in e)e[t]=null
e.constructor=e.hasOwnProperty=e.propertyIsEnumerable=e.isPrototypeOf=e.toLocaleString=e.toString=e.valueOf=e.__proto__=null
return e}}Object.create=function q(e,t){var i
if(e===null){i=C()}else{if(typeof e!="object")throw new TypeError("typeof prototype["+typeof e+"] != 'object'")
var n=function(){}
n.prototype=e
i=new n
i.__proto__=e}if(t!==void 0)Object.defineProperties(i,t)
return i}}function F(e){try{Object.defineProperty(e,"sentinel",{})
return"sentinel"in e}catch(t){}}if(Object.defineProperty){var E=F({})
var w=typeof document=="undefined"||F(document.createElement("div"))
if(!E||!w){var B=Object.defineProperty}}if(!Object.defineProperty||B){var D="Property description must be an object: "
var y="Object.defineProperty called on non-object: "
var b="getters & setters can not be defined "+"on this javascript engine"
Object.defineProperty=function et(e,t,i){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError(y+e)
if(typeof i!="object"&&typeof i!="function"||i===null)throw new TypeError(D+i)
if(B){try{return B.call(Object,e,t,i)}catch(n){}}if(h(i,"value")){if(g&&(d(e,t)||f(e,t))){var r=e.__proto__
e.__proto__=o
delete e[t]
e[t]=i.value
e.__proto__=r}else{e[t]=i.value}}else{if(!g)throw new TypeError(b)
if(h(i,"get"))c(e,t,i.get)
if(h(i,"set"))u(e,t,i.set)}return e}}if(!Object.defineProperties){Object.defineProperties=function tt(e,t){for(var i in t){if(h(t,i))Object.defineProperty(e,i,t[i])}return e}}if(!Object.seal){Object.seal=function it(e){return e}}if(!Object.freeze){Object.freeze=function nt(e){return e}}try{Object.freeze(function(){})}catch($){Object.freeze=function rt(e){return function t(i){if(typeof i=="function"){return i}else{return e(i)}}}(Object.freeze)}if(!Object.preventExtensions){Object.preventExtensions=function st(e){return e}}if(!Object.isSealed){Object.isSealed=function ot(e){return false}}if(!Object.isFrozen){Object.isFrozen=function at(e){return false}}if(!Object.isExtensible){Object.isExtensible=function lt(e){if(Object(e)===e){throw new TypeError}var t=""
while(h(e,t)){t+="?"}e[t]=true
var i=h(e,t)
delete e[t]
return i}}if(!Object.keys){var S=true,k=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],x=k.length
for(var L in{toString:null}){S=false}Object.keys=function ht(e){if(typeof e!="object"&&typeof e!="function"||e===null){throw new TypeError("Object.keys called on a non-object")}var ht=[]
for(var t in e){if(h(e,t)){ht.push(t)}}if(S){for(var i=0,n=x;i<n;i++){var r=k[i]
if(h(e,r)){ht.push(r)}}}return ht}}if(!Date.now){Date.now=function ct(){return(new Date).getTime()}}var R="	\n\f\r   ᠎    "+"         　\u2028"+"\u2029﻿"
if(!String.prototype.trim||R.trim()){R="["+R+"]"
var T=new RegExp("^"+R+R+"*"),M=new RegExp(R+R+"*$")
String.prototype.trim=function ut(){return String(this).replace(T,"").replace(M,"")}}function _(e){e=+e
if(e!==e){e=0}else if(e!==0&&e!==1/0&&e!==-(1/0)){e=(e>0||-1)*Math.floor(Math.abs(e))}return e}function O(e){var t=typeof e
return e===null||t==="undefined"||t==="boolean"||t==="number"||t==="string"}function I(e){var t,i,n
if(O(e)){return e}i=e.valueOf
if(typeof i==="function"){t=i.call(e)
if(O(t)){return t}}n=e.toString
if(typeof n==="function"){t=n.call(e)
if(O(t)){return t}}throw new TypeError}var W=function(e){if(e==null){throw new TypeError("can't convert "+e+" to object")}return Object(e)}})
ace.define("ace/lib/dom",["require","exports","module"],function(e,t,i){if(typeof document=="undefined")return
var n="http://www.w3.org/1999/xhtml"
t.getDocumentHead=function(e){if(!e)e=document
return e.head||e.getElementsByTagName("head")[0]||e.documentElement}
t.createElement=function(e,t){return document.createElementNS?document.createElementNS(t||n,e):document.createElement(e)}
t.hasCssClass=function(e,t){var i=e.className.split(/\s+/g)
return i.indexOf(t)!==-1}
t.addCssClass=function(e,i){if(!t.hasCssClass(e,i)){e.className+=" "+i}}
t.removeCssClass=function(e,t){var i=e.className.split(/\s+/g)
while(true){var n=i.indexOf(t)
if(n==-1){break}i.splice(n,1)}e.className=i.join(" ")}
t.toggleCssClass=function(e,t){var i=e.className.split(/\s+/g),n=true
while(true){var r=i.indexOf(t)
if(r==-1){break}n=false
i.splice(r,1)}if(n)i.push(t)
e.className=i.join(" ")
return n}
t.setCssClass=function(e,i,n){if(n){t.addCssClass(e,i)}else{t.removeCssClass(e,i)}}
t.hasCssString=function(e,t){var i=0,n
t=t||document
if(t.createStyleSheet&&(n=t.styleSheets)){while(i<n.length)if(n[i++].owningElement.id===e)return true}else if(n=t.getElementsByTagName("style")){while(i<n.length)if(n[i++].id===e)return true}return false}
t.importCssString=function r(e,i,s){s=s||document
if(i&&t.hasCssString(i,s))return null
var o
if(s.createStyleSheet){o=s.createStyleSheet()
o.cssText=e
if(i)o.owningElement.id=i}else{o=s.createElementNS?s.createElementNS(n,"style"):s.createElement("style")
o.appendChild(s.createTextNode(e))
if(i)o.id=i
t.getDocumentHead(s).appendChild(o)}}
t.importCssStylsheet=function(e,i){if(i.createStyleSheet){i.createStyleSheet(e)}else{var n=t.createElement("link")
n.rel="stylesheet"
n.href=e
t.getDocumentHead(i).appendChild(n)}}
t.getInnerWidth=function(e){return parseInt(t.computedStyle(e,"paddingLeft"),10)+parseInt(t.computedStyle(e,"paddingRight"),10)+e.clientWidth}
t.getInnerHeight=function(e){return parseInt(t.computedStyle(e,"paddingTop"),10)+parseInt(t.computedStyle(e,"paddingBottom"),10)+e.clientHeight}
if(window.pageYOffset!==undefined){t.getPageScrollTop=function(){return window.pageYOffset}
t.getPageScrollLeft=function(){return window.pageXOffset}}else{t.getPageScrollTop=function(){return document.body.scrollTop}
t.getPageScrollLeft=function(){return document.body.scrollLeft}}if(window.getComputedStyle)t.computedStyle=function(e,t){if(t)return(window.getComputedStyle(e,"")||{})[t]||""
return window.getComputedStyle(e,"")||{}}
else t.computedStyle=function(e,t){if(t)return e.currentStyle[t]
return e.currentStyle}
t.scrollbarWidth=function(e){var i=t.createElement("ace_inner")
i.style.width="100%"
i.style.minWidth="0px"
i.style.height="200px"
i.style.display="block"
var n=t.createElement("ace_outer")
var r=n.style
r.position="absolute"
r.left="-10000px"
r.overflow="hidden"
r.width="200px"
r.minWidth="0px"
r.height="150px"
r.display="block"
n.appendChild(i)
var s=e.documentElement
s.appendChild(n)
var o=i.offsetWidth
r.overflow="scroll"
var a=i.offsetWidth
if(o==a){a=n.clientWidth}s.removeChild(n)
return o-a}
t.setInnerHtml=function(e,t){var i=e.cloneNode(false)
i.innerHTML=t
e.parentNode.replaceChild(i,e)
return i}
if("textContent"in document.documentElement){t.setInnerText=function(e,t){e.textContent=t}
t.getInnerText=function(e){return e.textContent}}else{t.setInnerText=function(e,t){e.innerText=t}
t.getInnerText=function(e){return e.innerText}}t.getParentWindow=function(e){return e.defaultView||e.parentWindow}})
ace.define("ace/lib/event",["require","exports","module","ace/lib/keys","ace/lib/useragent","ace/lib/dom"],function(e,t,i){var n=e("./keys")
var r=e("./useragent")
var s=e("./dom")
t.addListener=function(e,t,i){if(e.addEventListener){return e.addEventListener(t,i,false)}if(e.attachEvent){var n=function(){i.call(e,window.event)}
i._wrapper=n
e.attachEvent("on"+t,n)}}
t.removeListener=function(e,t,i){if(e.removeEventListener){return e.removeEventListener(t,i,false)}if(e.detachEvent){e.detachEvent("on"+t,i._wrapper||i)}}
t.stopEvent=function(e){t.stopPropagation(e)
t.preventDefault(e)
return false}
t.stopPropagation=function(e){if(e.stopPropagation)e.stopPropagation()
else e.cancelBubble=true}
t.preventDefault=function(e){if(e.preventDefault)e.preventDefault()
else e.returnValue=false}
t.getButton=function(e){if(e.type=="dblclick")return 0
if(e.type=="contextmenu"||e.ctrlKey&&r.isMac)return 2
if(e.preventDefault){return e.button}else{return{1:0,2:2,4:1}[e.button]}}
t.capture=function(e,i,n){function r(e){i&&i(e)
n&&n(e)
t.removeListener(document,"mousemove",i,true)
t.removeListener(document,"mouseup",r,true)
t.removeListener(document,"dragstart",r,true)}t.addListener(document,"mousemove",i,true)
t.addListener(document,"mouseup",r,true)
t.addListener(document,"dragstart",r,true)}
t.addMouseWheelListener=function(e,i){if("onmousewheel"in e){var n=8
t.addListener(e,"mousewheel",function(e){if(e.wheelDeltaX!==undefined){e.wheelX=-e.wheelDeltaX/n
e.wheelY=-e.wheelDeltaY/n}else{e.wheelX=0
e.wheelY=-e.wheelDelta/n}i(e)})}else if("onwheel"in e){t.addListener(e,"wheel",function(e){e.wheelX=(e.deltaX||0)*5
e.wheelY=(e.deltaY||0)*5
i(e)})}else{t.addListener(e,"DOMMouseScroll",function(e){if(e.axis&&e.axis==e.HORIZONTAL_AXIS){e.wheelX=(e.detail||0)*5
e.wheelY=0}else{e.wheelX=0
e.wheelY=(e.detail||0)*5}i(e)})}}
t.addMultiMouseDownListener=function(e,i,n,s){var o=0
var a,l,h
var c={2:"dblclick",3:"tripleclick",4:"quadclick"}
t.addListener(e,"mousedown",function(e){if(t.getButton(e)!=0){o=0}else if(e.detail>1){o++
if(o>4)o=1}else{o=1}if(r.isIE){var i=Math.abs(e.clientX-a)>5||Math.abs(e.clientY-l)>5
if(i){o=1}if(o==1){a=e.clientX
l=e.clientY}}n[s]("mousedown",e)
if(o>4)o=0
else if(o>1)return n[s](c[o],e)})
if(r.isOldIE){t.addListener(e,"dblclick",function(e){o=2
if(h)clearTimeout(h)
h=setTimeout(function(){h=null},i[o-1]||600)
n[s]("mousedown",e)
n[s](c[o],e)})}}
function o(e,t,i){var s=0
if(r.isOpera&&!("KeyboardEvent"in window)&&r.isMac){s=0|(t.metaKey?1:0)|(t.altKey?2:0)|(t.shiftKey?4:0)|(t.ctrlKey?8:0)}else{s=0|(t.ctrlKey?1:0)|(t.altKey?2:0)|(t.shiftKey?4:0)|(t.metaKey?8:0)}if(!r.isMac&&a){if(a[91]||a[92])s|=8
if(a.altGr){if((3&s)!=3)a.altGr=0
else return}if(i===18||i===17){var o=t.location||t.keyLocation
if(i===17&&o===1){l=t.timeStamp}else if(i===18&&s===3&&o===2){var h=-l
l=t.timeStamp
h+=l
if(h<3)a.altGr=true}}}if(i in n.MODIFIER_KEYS){switch(n.MODIFIER_KEYS[i]){case"Alt":s=2
break
case"Shift":s=4
break
case"Ctrl":s=1
break
default:s=8
break}i=0}if(s&8&&(i===91||i===93)){i=0}if(!s&&i===13){if(t.location||t.keyLocation===3){e(t,s,-i)
if(t.defaultPrevented)return}}if(!s&&!(i in n.FUNCTION_KEYS)&&!(i in n.PRINTABLE_KEYS)){return false}return e(t,s,i)}var a=null
var l=0
t.addCommandKeyListener=function(e,i){var n=t.addListener
if(r.isOldGecko||r.isOpera&&!("KeyboardEvent"in window)){var s=null
n(e,"keydown",function(e){s=e.keyCode})
n(e,"keypress",function(e){return o(i,e,s)})}else{var l=null
n(e,"keydown",function(e){a[e.keyCode]=true
var t=o(i,e,e.keyCode)
l=e.defaultPrevented
return t})
n(e,"keypress",function(e){if(l&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey)){t.stopEvent(e)
l=null}})
n(e,"keyup",function(e){a[e.keyCode]=null})
if(!a){a=Object.create(null)
n(window,"focus",function(e){a=Object.create(null)})}}}
if(window.postMessage&&!r.isOldIE){var h=1
t.nextTick=function(e,i){i=i||window
var n="zero-timeout-message-"+h
t.addListener(i,"message",function r(s){if(s.data==n){t.stopPropagation(s)
t.removeListener(i,"message",r)
e()}})
i.postMessage(n,"*")}}t.nextFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame
if(t.nextFrame)t.nextFrame=t.nextFrame.bind(window)
else t.nextFrame=function(e){setTimeout(e,17)}})
ace.define("ace/lib/keys",["require","exports","module","ace/lib/oop"],function(e,t,i){var n=e("./oop")
var r=function(){var e={MODIFIER_KEYS:{16:"Shift",17:"Ctrl",18:"Alt",224:"Meta"},KEY_MODS:{ctrl:1,alt:2,option:2,shift:4,meta:8,command:8,cmd:8},FUNCTION_KEYS:{8:"Backspace",9:"Tab",13:"Return",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock"},PRINTABLE_KEYS:{32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",188:",",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}}
for(var t in e.FUNCTION_KEYS){var i=e.FUNCTION_KEYS[t].toLowerCase()
e[i]=parseInt(t,10)}n.mixin(e,e.MODIFIER_KEYS)
n.mixin(e,e.PRINTABLE_KEYS)
n.mixin(e,e.FUNCTION_KEYS)
e.enter=e["return"]
e.escape=e.esc
e.del=e["delete"]
e[173]="-"
return e}()
n.mixin(t,r)
t.keyCodeToString=function(e){return(r[e]||String.fromCharCode(e)).toLowerCase()}})
ace.define("ace/lib/oop",["require","exports","module"],function(e,t,i){t.inherits=function(){var e=function(){}
return function(t,i){e.prototype=i.prototype
t.super_=i.prototype
t.prototype=new e
t.prototype.constructor=t}}()
t.mixin=function(e,t){for(var i in t){e[i]=t[i]}return e}
t.implement=function(e,i){t.mixin(e,i)}})
ace.define("ace/lib/useragent",["require","exports","module"],function(e,t,i){t.OS={LINUX:"LINUX",MAC:"MAC",WINDOWS:"WINDOWS"}
t.getOS=function(){if(t.isMac){return t.OS.MAC}else if(t.isLinux){return t.OS.LINUX}else{return t.OS.WINDOWS}}
if(typeof navigator!="object")return
var n=(navigator.platform.match(/mac|win|linux/i)||["other"])[0].toLowerCase()
var r=navigator.userAgent
t.isWin=n=="win"
t.isMac=n=="mac"
t.isLinux=n=="linux"
t.isIE=(navigator.appName=="Microsoft Internet Explorer"||navigator.appName.indexOf("MSAppHost")>=0)&&parseFloat(navigator.userAgent.match(/MSIE ([0-9]+[\.0-9]+)/)[1])
t.isOldIE=t.isIE&&t.isIE<9
t.isGecko=t.isMozilla=window.controllers&&window.navigator.product==="Gecko"
t.isOldGecko=t.isGecko&&parseInt((navigator.userAgent.match(/rv\:(\d+)/)||[])[1],10)<4
t.isOpera=window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"
t.isWebKit=parseFloat(r.split("WebKit/")[1])||undefined
t.isChrome=parseFloat(r.split(" Chrome/")[1])||undefined
t.isAIR=r.indexOf("AdobeAIR")>=0
t.isIPad=r.indexOf("iPad")>=0
t.isTouchPad=r.indexOf("TouchPad")>=0})
ace.define("ace/editor",["require","exports","module","ace/lib/fixoldbrowsers","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/keyboard/textinput","ace/mouse/mouse_handler","ace/mouse/fold_handler","ace/keyboard/keybinding","ace/edit_session","ace/search","ace/range","ace/lib/event_emitter","ace/commands/command_manager","ace/commands/default_commands","ace/config"],function(e,t,i){e("./lib/fixoldbrowsers")
var n=e("./lib/oop")
var r=e("./lib/dom")
var s=e("./lib/lang")
var o=e("./lib/useragent")
var a=e("./keyboard/textinput").TextInput
var l=e("./mouse/mouse_handler").MouseHandler
var h=e("./mouse/fold_handler").FoldHandler
var c=e("./keyboard/keybinding").KeyBinding
var u=e("./edit_session").EditSession
var d=e("./search").Search
var f=e("./range").Range
var g=e("./lib/event_emitter").EventEmitter
var m=e("./commands/command_manager").CommandManager
var v=e("./commands/default_commands").commands
var A=e("./config")
var p=function(e,t){var i=e.getContainerElement()
this.container=i
this.renderer=e
this.commands=new m(o.isMac?"mac":"win",v)
this.textInput=new a(e.getTextAreaContainer(),this)
this.renderer.textarea=this.textInput.getElement()
this.keyBinding=new c(this)
this.$mouseHandler=new l(this)
new h(this)
this.$blockScrolling=0
this.$search=(new d).set({wrap:true})
this.$historyTracker=this.$historyTracker.bind(this)
this.commands.on("exec",this.$historyTracker)
this.$initOperationListeners()
this._$emitInputEvent=s.delayedCall(function(){this._signal("input",{})
this.session.bgTokenizer&&this.session.bgTokenizer.scheduleStart()}.bind(this))
this.on("change",function(e,t){t._$emitInputEvent.schedule(31)})
this.setSession(t||new u(""))
A.resetOptions(this)
A._emit("editor",this)};(function(){n.implement(this,g)
this.$initOperationListeners=function(){function e(e){return e[e.length-1]}this.selections=[]
this.commands.on("exec",function(t){this.startOperation(t)
var i=t.command
if(i.group=="fileJump"){var n=this.prevOp
if(!n||n.command.group!="fileJump"){this.lastFileJumpPos=e(this.selections)}}else{this.lastFileJumpPos=null}}.bind(this),true)
this.commands.on("afterExec",function(e){var t=e.command
if(t.group=="fileJump"){if(this.lastFileJumpPos&&!this.curOp.selectionChanged){this.selection.fromJSON(this.lastFileJumpPos)
return}}this.endOperation(e)}.bind(this),true)
this.$opResetTimer=s.delayedCall(this.endOperation.bind(this))
this.on("change",function(){this.curOp||this.startOperation()
this.curOp.docChanged=true}.bind(this),true)
this.on("changeSelection",function(){this.curOp||this.startOperation()
this.curOp.selectionChanged=true}.bind(this),true)}
this.curOp=null
this.prevOp={}
this.startOperation=function(e){if(this.curOp){if(!e||this.curOp.command)return
this.prevOp=this.curOp}if(!e){this.previousCommand=null
e={}}this.$opResetTimer.schedule()
this.curOp={command:e.command||{},args:e.args}
this.selections.push(this.selection.toJSON())}
this.endOperation=function(){if(this.curOp){this.prevOp=this.curOp
this.curOp=null}}
this.$historyTracker=function(e){if(!this.$mergeUndoDeltas)return
var t=this.prevOp
var i=["backspace","del","insertstring"]
var n=t.command&&e.command.name==t.command.name
if(e.command.name=="insertstring"){var r=e.args
if(this.mergeNextCommand===undefined)this.mergeNextCommand=true
n=n&&this.mergeNextCommand&&(!/\s/.test(r)||/\s/.test(t.args))
this.mergeNextCommand=true}else{n=n&&i.indexOf(e.command.name)!==-1}if(this.$mergeUndoDeltas!="always"&&Date.now()-this.sequenceStartTime>2e3){n=false}if(n)this.session.mergeUndoDeltas=true
else if(i.indexOf(e.command.name)!==-1)this.sequenceStartTime=Date.now()}
this.setKeyboardHandler=function(e){if(!e){this.keyBinding.setKeyboardHandler(null)}else if(typeof e=="string"){this.$keybindingId=e
var t=this
A.loadModule(["keybinding",e],function(i){if(t.$keybindingId==e)t.keyBinding.setKeyboardHandler(i&&i.handler)})}else{this.$keybindingId=null
this.keyBinding.setKeyboardHandler(e)}}
this.getKeyboardHandler=function(){return this.keyBinding.getKeyboardHandler()}
this.setSession=function(e){if(this.session==e)return
if(this.session){var t=this.session
this.session.removeEventListener("change",this.$onDocumentChange)
this.session.removeEventListener("changeMode",this.$onChangeMode)
this.session.removeEventListener("tokenizerUpdate",this.$onTokenizerUpdate)
this.session.removeEventListener("changeTabSize",this.$onChangeTabSize)
this.session.removeEventListener("changeWrapLimit",this.$onChangeWrapLimit)
this.session.removeEventListener("changeWrapMode",this.$onChangeWrapMode)
this.session.removeEventListener("onChangeFold",this.$onChangeFold)
this.session.removeEventListener("changeFrontMarker",this.$onChangeFrontMarker)
this.session.removeEventListener("changeBackMarker",this.$onChangeBackMarker)
this.session.removeEventListener("changeBreakpoint",this.$onChangeBreakpoint)
this.session.removeEventListener("changeAnnotation",this.$onChangeAnnotation)
this.session.removeEventListener("changeOverwrite",this.$onCursorChange)
this.session.removeEventListener("changeScrollTop",this.$onScrollTopChange)
this.session.removeEventListener("changeScrollLeft",this.$onScrollLeftChange)
var i=this.session.getSelection()
i.removeEventListener("changeCursor",this.$onCursorChange)
i.removeEventListener("changeSelection",this.$onSelectionChange)}this.session=e
this.$onDocumentChange=this.onDocumentChange.bind(this)
e.addEventListener("change",this.$onDocumentChange)
this.renderer.setSession(e)
this.$onChangeMode=this.onChangeMode.bind(this)
e.addEventListener("changeMode",this.$onChangeMode)
this.$onTokenizerUpdate=this.onTokenizerUpdate.bind(this)
e.addEventListener("tokenizerUpdate",this.$onTokenizerUpdate)
this.$onChangeTabSize=this.renderer.onChangeTabSize.bind(this.renderer)
e.addEventListener("changeTabSize",this.$onChangeTabSize)
this.$onChangeWrapLimit=this.onChangeWrapLimit.bind(this)
e.addEventListener("changeWrapLimit",this.$onChangeWrapLimit)
this.$onChangeWrapMode=this.onChangeWrapMode.bind(this)
e.addEventListener("changeWrapMode",this.$onChangeWrapMode)
this.$onChangeFold=this.onChangeFold.bind(this)
e.addEventListener("changeFold",this.$onChangeFold)
this.$onChangeFrontMarker=this.onChangeFrontMarker.bind(this)
this.session.addEventListener("changeFrontMarker",this.$onChangeFrontMarker)
this.$onChangeBackMarker=this.onChangeBackMarker.bind(this)
this.session.addEventListener("changeBackMarker",this.$onChangeBackMarker)
this.$onChangeBreakpoint=this.onChangeBreakpoint.bind(this)
this.session.addEventListener("changeBreakpoint",this.$onChangeBreakpoint)
this.$onChangeAnnotation=this.onChangeAnnotation.bind(this)
this.session.addEventListener("changeAnnotation",this.$onChangeAnnotation)
this.$onCursorChange=this.onCursorChange.bind(this)
this.session.addEventListener("changeOverwrite",this.$onCursorChange)
this.$onScrollTopChange=this.onScrollTopChange.bind(this)
this.session.addEventListener("changeScrollTop",this.$onScrollTopChange)
this.$onScrollLeftChange=this.onScrollLeftChange.bind(this)
this.session.addEventListener("changeScrollLeft",this.$onScrollLeftChange)
this.selection=e.getSelection()
this.selection.addEventListener("changeCursor",this.$onCursorChange)
this.$onSelectionChange=this.onSelectionChange.bind(this)
this.selection.addEventListener("changeSelection",this.$onSelectionChange)
this.onChangeMode()
this.$blockScrolling+=1
this.onCursorChange()
this.$blockScrolling-=1
this.onScrollTopChange()
this.onScrollLeftChange()
this.onSelectionChange()
this.onChangeFrontMarker()
this.onChangeBackMarker()
this.onChangeBreakpoint()
this.onChangeAnnotation()
this.session.getUseWrapMode()&&this.renderer.adjustWrapLimit()
this.renderer.updateFull()
this._emit("changeSession",{session:e,oldSession:t})}
this.getSession=function(){return this.session}
this.setValue=function(e,t){this.session.doc.setValue(e)
if(!t)this.selectAll()
else if(t==1)this.navigateFileEnd()
else if(t==-1)this.navigateFileStart()
return e}
this.getValue=function(){return this.session.getValue()}
this.getSelection=function(){return this.selection}
this.resize=function(e){this.renderer.onResize(e)}
this.setTheme=function(e){this.renderer.setTheme(e)}
this.getTheme=function(){return this.renderer.getTheme()}
this.setStyle=function(e){this.renderer.setStyle(e)}
this.unsetStyle=function(e){this.renderer.unsetStyle(e)}
this.getFontSize=function(){return this.getOption("fontSize")||r.computedStyle(this.container,"fontSize")}
this.setFontSize=function(e){this.setOption("fontSize",e)}
this.$highlightBrackets=function(){if(this.session.$bracketHighlight){this.session.removeMarker(this.session.$bracketHighlight)
this.session.$bracketHighlight=null}if(this.$highlightPending){return}var e=this
this.$highlightPending=true
setTimeout(function(){e.$highlightPending=false
var t=e.session.findMatchingBracket(e.getCursorPosition())
if(t){var i=new f(t.row,t.column,t.row,t.column+1)}else if(e.session.$mode.getMatching){var i=e.session.$mode.getMatching(e.session)}if(i)e.session.$bracketHighlight=e.session.addMarker(i,"ace_bracket","text")},50)}
this.focus=function(){var e=this
setTimeout(function(){e.textInput.focus()})
this.textInput.focus()}
this.isFocused=function(){return this.textInput.isFocused()}
this.blur=function(){this.textInput.blur()}
this.onFocus=function(){if(this.$isFocused)return
this.$isFocused=true
this.renderer.showCursor()
this.renderer.visualizeFocus()
this._emit("focus")}
this.onBlur=function(){if(!this.$isFocused)return
this.$isFocused=false
this.renderer.hideCursor()
this.renderer.visualizeBlur()
this._emit("blur")}
this.$cursorChange=function(){this.renderer.updateCursor()}
this.onDocumentChange=function(e){var t=e.data
var i=t.range
var n
if(i.start.row==i.end.row&&t.action!="insertLines"&&t.action!="removeLines")n=i.end.row
else n=Infinity
this.renderer.updateLines(i.start.row,n)
this._emit("change",e)
this.$cursorChange()}
this.onTokenizerUpdate=function(e){var t=e.data
this.renderer.updateLines(t.first,t.last)}
this.onScrollTopChange=function(){this.renderer.scrollToY(this.session.getScrollTop())}
this.onScrollLeftChange=function(){this.renderer.scrollToX(this.session.getScrollLeft())}
this.onCursorChange=function(){this.$cursorChange()
if(!this.$blockScrolling){this.renderer.scrollCursorIntoView()}this.$highlightBrackets()
this.$updateHighlightActiveLine()
this._emit("changeSelection")}
this.$updateHighlightActiveLine=function(){var e=this.getSession()
var t
if(this.$highlightActiveLine){if(this.$selectionStyle!="line"||!this.selection.isMultiLine())t=this.getCursorPosition()
if(this.renderer.$maxLines&&this.session.getLength()===1)t=false}if(e.$highlightLineMarker&&!t){e.removeMarker(e.$highlightLineMarker.id)
e.$highlightLineMarker=null}else if(!e.$highlightLineMarker&&t){var i=new f(t.row,t.column,t.row,Infinity)
i.id=e.addMarker(i,"ace_active-line","screenLine")
e.$highlightLineMarker=i}else if(t){e.$highlightLineMarker.start.row=t.row
e.$highlightLineMarker.end.row=t.row
e.$highlightLineMarker.start.column=t.column
e._emit("changeBackMarker")}}
this.onSelectionChange=function(e){var t=this.session
if(t.$selectionMarker){t.removeMarker(t.$selectionMarker)}t.$selectionMarker=null
if(!this.selection.isEmpty()){var i=this.selection.getRange()
var n=this.getSelectionStyle()
t.$selectionMarker=t.addMarker(i,"ace_selection",n)}else{this.$updateHighlightActiveLine()}var r=this.$highlightSelectedWord&&this.$getSelectionHighLightRegexp()
this.session.highlight(r)
this._emit("changeSelection")}
this.$getSelectionHighLightRegexp=function(){var e=this.session
var t=this.getSelectionRange()
if(t.isEmpty()||t.isMultiLine())return
var i=t.start.column-1
var n=t.end.column+1
var r=e.getLine(t.start.row)
var s=r.length
var o=r.substring(Math.max(i,0),Math.min(n,s))
if(i>=0&&/^[\w\d]/.test(o)||n<=s&&/[\w\d]$/.test(o))return
o=r.substring(t.start.column,t.end.column)
if(!/^[\w\d]+$/.test(o))return
var a=this.$search.$assembleRegExp({wholeWord:true,caseSensitive:true,needle:o})
return a}
this.onChangeFrontMarker=function(){this.renderer.updateFrontMarkers()}
this.onChangeBackMarker=function(){this.renderer.updateBackMarkers()}
this.onChangeBreakpoint=function(){this.renderer.updateBreakpoints()}
this.onChangeAnnotation=function(){this.renderer.setAnnotations(this.session.getAnnotations())}
this.onChangeMode=function(e){this.renderer.updateText()
this._emit("changeMode",e)}
this.onChangeWrapLimit=function(){this.renderer.updateFull()}
this.onChangeWrapMode=function(){this.renderer.onResize(true)}
this.onChangeFold=function(){this.$updateHighlightActiveLine()
this.renderer.updateFull()}
this.getSelectedText=function(){return this.session.getTextRange(this.getSelectionRange())}
this.getCopyText=function(){var e=this.getSelectedText()
this._signal("copy",e)
return e}
this.onCopy=function(){this.commands.exec("copy",this)}
this.onCut=function(){this.commands.exec("cut",this)}
this.onPaste=function(e){if(this.$readOnly)return
this._emit("paste",e)
this.insert(e)}
this.execCommand=function(e,t){this.commands.exec(e,this,t)}
this.insert=function(e){var t=this.session
var i=t.getMode()
var n=this.getCursorPosition()
if(this.getBehavioursEnabled()){var r=i.transformAction(t.getState(n.row),"insertion",this,t,e)
if(r){if(e!==r.text){this.session.mergeUndoDeltas=false
this.$mergeNextCommand=false}e=r.text}}if(e=="	")e=this.session.getTabString()
if(!this.selection.isEmpty()){var s=this.getSelectionRange()
n=this.session.remove(s)
this.clearSelection()}else if(this.session.getOverwrite()){var s=new f.fromPoints(n,n)
s.end.column+=e.length
this.session.remove(s)}if(e=="\n"||e=="\r\n"){var o=t.getLine(n.row)
if(n.column>o.search(/\S|$/)){var a=o.substr(n.column).search(/\S|$/)
t.doc.removeInLine(n.row,n.column,n.column+a)}}this.clearSelection()
var l=n.column
var h=t.getState(n.row)
var o=t.getLine(n.row)
var c=i.checkOutdent(h,o,e)
var u=t.insert(n,e)
if(r&&r.selection){if(r.selection.length==2){this.selection.setSelectionRange(new f(n.row,l+r.selection[0],n.row,l+r.selection[1]))}else{this.selection.setSelectionRange(new f(n.row+r.selection[0],r.selection[1],n.row+r.selection[2],r.selection[3]))}}if(t.getDocument().isNewLine(e)){var d=i.getNextLineIndent(h,o.slice(0,n.column),t.getTabString())
t.insert({row:n.row+1,column:0},d)}if(c)i.autoOutdent(h,t,n.row)}
this.onTextInput=function(e){this.keyBinding.onTextInput(e)}
this.onCommandKey=function(e,t,i){this.keyBinding.onCommandKey(e,t,i)}
this.setOverwrite=function(e){this.session.setOverwrite(e)}
this.getOverwrite=function(){return this.session.getOverwrite()}
this.toggleOverwrite=function(){this.session.toggleOverwrite()}
this.setScrollSpeed=function(e){this.setOption("scrollSpeed",e)}
this.getScrollSpeed=function(){return this.getOption("scrollSpeed")}
this.setDragDelay=function(e){this.setOption("dragDelay",e)}
this.getDragDelay=function(){return this.getOption("dragDelay")}
this.setSelectionStyle=function(e){this.setOption("selectionStyle",e)}
this.getSelectionStyle=function(){return this.getOption("selectionStyle")}
this.setHighlightActiveLine=function(e){this.setOption("highlightActiveLine",e)}
this.getHighlightActiveLine=function(){return this.getOption("highlightActiveLine")}
this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)}
this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")}
this.setHighlightSelectedWord=function(e){this.setOption("highlightSelectedWord",e)}
this.getHighlightSelectedWord=function(){return this.$highlightSelectedWord}
this.setAnimatedScroll=function(e){this.renderer.setAnimatedScroll(e)}
this.getAnimatedScroll=function(){return this.renderer.getAnimatedScroll()}
this.setShowInvisibles=function(e){this.renderer.setShowInvisibles(e)}
this.getShowInvisibles=function(){return this.renderer.getShowInvisibles()}
this.setDisplayIndentGuides=function(e){this.renderer.setDisplayIndentGuides(e)}
this.getDisplayIndentGuides=function(){return this.renderer.getDisplayIndentGuides()}
this.setShowPrintMargin=function(e){this.renderer.setShowPrintMargin(e)}
this.getShowPrintMargin=function(){return this.renderer.getShowPrintMargin()}
this.setPrintMarginColumn=function(e){this.renderer.setPrintMarginColumn(e)}
this.getPrintMarginColumn=function(){return this.renderer.getPrintMarginColumn()}
this.setReadOnly=function(e){this.setOption("readOnly",e)}
this.getReadOnly=function(){return this.getOption("readOnly")}
this.setBehavioursEnabled=function(e){this.setOption("behavioursEnabled",e)}
this.getBehavioursEnabled=function(){return this.getOption("behavioursEnabled")}
this.setWrapBehavioursEnabled=function(e){this.setOption("wrapBehavioursEnabled",e)}
this.getWrapBehavioursEnabled=function(){return this.getOption("wrapBehavioursEnabled")}
this.setShowFoldWidgets=function(e){this.setOption("showFoldWidgets",e)}
this.getShowFoldWidgets=function(){return this.getOption("showFoldWidgets")}
this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)}
this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")}
this.remove=function(e){if(this.selection.isEmpty()){if(e=="left")this.selection.selectLeft()
else this.selection.selectRight()}var t=this.getSelectionRange()
if(this.getBehavioursEnabled()){var i=this.session
var n=i.getState(t.start.row)
var r=i.getMode().transformAction(n,"deletion",this,i,t)
if(t.end.column==0){var s=i.getTextRange(t)
if(s[s.length-1]=="\n"){var o=i.getLine(t.end.row)
if(/^\s+$/.test(o)){t.end.column=o.length}}}if(r)t=r}this.session.remove(t)
this.clearSelection()}
this.removeWordRight=function(){if(this.selection.isEmpty())this.selection.selectWordRight()
this.session.remove(this.getSelectionRange())
this.clearSelection()}
this.removeWordLeft=function(){if(this.selection.isEmpty())this.selection.selectWordLeft()
this.session.remove(this.getSelectionRange())
this.clearSelection()}
this.removeToLineStart=function(){if(this.selection.isEmpty())this.selection.selectLineStart()
this.session.remove(this.getSelectionRange())
this.clearSelection()}
this.removeToLineEnd=function(){if(this.selection.isEmpty())this.selection.selectLineEnd()
var e=this.getSelectionRange()
if(e.start.column==e.end.column&&e.start.row==e.end.row){e.end.column=0
e.end.row++}this.session.remove(e)
this.clearSelection()}
this.splitLine=function(){if(!this.selection.isEmpty()){this.session.remove(this.getSelectionRange())
this.clearSelection()}var e=this.getCursorPosition()
this.insert("\n")
this.moveCursorToPosition(e)}
this.transposeLetters=function(){if(!this.selection.isEmpty()){return}var e=this.getCursorPosition()
var t=e.column
if(t===0)return
var i=this.session.getLine(e.row)
var n,r
if(t<i.length){n=i.charAt(t)+i.charAt(t-1)
r=new f(e.row,t-1,e.row,t+1)}else{n=i.charAt(t-1)+i.charAt(t-2)
r=new f(e.row,t-2,e.row,t)}this.session.replace(r,n)}
this.toLowerCase=function(){var e=this.getSelectionRange()
if(this.selection.isEmpty()){this.selection.selectWord()}var t=this.getSelectionRange()
var i=this.session.getTextRange(t)
this.session.replace(t,i.toLowerCase())
this.selection.setSelectionRange(e)}
this.toUpperCase=function(){var e=this.getSelectionRange()
if(this.selection.isEmpty()){this.selection.selectWord()}var t=this.getSelectionRange()
var i=this.session.getTextRange(t)
this.session.replace(t,i.toUpperCase())
this.selection.setSelectionRange(e)}
this.indent=function(){var e=this.session
var t=this.getSelectionRange()
if(t.start.row<t.end.row){var i=this.$getSelectedRows()
e.indentRows(i.first,i.last,"	")
return}else if(t.start.column<t.end.column){var n=e.getTextRange(t)
if(!/^\s+$/.test(n)){var i=this.$getSelectedRows()
e.indentRows(i.first,i.last,"	")
return}}var r=e.getLine(t.start.row)
var o=t.start
var a=e.getTabSize()
var l=e.documentToScreenColumn(o.row,o.column)
if(this.session.getUseSoftTabs()){var h=a-l%a
var c=s.stringRepeat(" ",h)}else{var h=l%a
while(r[t.start.column]==" "&&h){t.start.column--
h--}this.selection.setSelectionRange(t)
c="	"}return this.insert(c)}
this.blockIndent=function(){var e=this.$getSelectedRows()
this.session.indentRows(e.first,e.last,"	")}
this.blockOutdent=function(){var e=this.session.getSelection()
this.session.outdentRows(e.getRange())}
this.sortLines=function(){var e=this.$getSelectedRows()
var t=this.session
var i=[]
for(r=e.first;r<=e.last;r++)i.push(t.getLine(r))
i.sort(function(e,t){if(e.toLowerCase()<t.toLowerCase())return-1
if(e.toLowerCase()>t.toLowerCase())return 1
return 0})
var n=new f(0,0,0,0)
for(var r=e.first;r<=e.last;r++){var s=t.getLine(r)
n.start.row=r
n.end.row=r
n.end.column=s.length
t.replace(n,i[r-e.first])}}
this.toggleCommentLines=function(){var e=this.session.getState(this.getCursorPosition().row)
var t=this.$getSelectedRows()
this.session.getMode().toggleCommentLines(e,this.session,t.first,t.last)}
this.toggleBlockComment=function(){var e=this.getCursorPosition()
var t=this.session.getState(e.row)
var i=this.getSelectionRange()
this.session.getMode().toggleBlockComment(t,this.session,i,e)}
this.getNumberAt=function(e,t){var i=/[\-]?[0-9]+(?:\.[0-9]+)?/g
i.lastIndex=0
var n=this.session.getLine(e)
while(i.lastIndex<t){var r=i.exec(n)
if(r.index<=t&&r.index+r[0].length>=t){var s={value:r[0],start:r.index,end:r.index+r[0].length}
return s}}return null}
this.modifyNumber=function(e){var t=this.selection.getCursor().row
var i=this.selection.getCursor().column
var n=new f(t,i-1,t,i)
var r=this.session.getTextRange(n)
if(!isNaN(parseFloat(r))&&isFinite(r)){var s=this.getNumberAt(t,i)
if(s){var o=s.value.indexOf(".")>=0?s.start+s.value.indexOf(".")+1:s.end
var a=s.start+s.value.length-o
var l=parseFloat(s.value)
l*=Math.pow(10,a)
if(o!==s.end&&i<o){e*=Math.pow(10,s.end-i-1)}else{e*=Math.pow(10,s.end-i)}l+=e
l/=Math.pow(10,a)
var h=l.toFixed(a)
var c=new f(t,s.start,t,s.end)
this.session.replace(c,h)
this.moveCursorTo(t,Math.max(s.start+1,i+h.length-s.value.length))}}}
this.removeLines=function(){var e=this.$getSelectedRows()
var t
if(e.first===0||e.last+1<this.session.getLength())t=new f(e.first,0,e.last+1,0)
else t=new f(e.first-1,this.session.getLine(e.first-1).length,e.last,this.session.getLine(e.last).length)
this.session.remove(t)
this.clearSelection()}
this.duplicateSelection=function(){var e=this.selection
var t=this.session
var i=e.getRange()
var n=e.isBackwards()
if(i.isEmpty()){var r=i.start.row
t.duplicateLines(r,r)}else{var s=n?i.start:i.end
var o=t.insert(s,t.getTextRange(i),false)
i.start=s
i.end=o
e.setSelectionRange(i,n)}}
this.moveLinesDown=function(){this.$moveLines(function(e,t){return this.session.moveLinesDown(e,t)})}
this.moveLinesUp=function(){this.$moveLines(function(e,t){return this.session.moveLinesUp(e,t)})}
this.moveText=function(e,t,i){return this.session.moveText(e,t,i)}
this.copyLinesUp=function(){this.$moveLines(function(e,t){this.session.duplicateLines(e,t)
return 0})}
this.copyLinesDown=function(){this.$moveLines(function(e,t){return this.session.duplicateLines(e,t)})}
this.$moveLines=function(e){var t=this.selection
if(!t.inMultiSelectMode||this.inVirtualSelectionMode){var i=t.toOrientedRange()
var n=this.$getSelectedRows(i)
var r=e.call(this,n.first,n.last)
i.moveBy(r,0)
t.fromOrientedRange(i)}else{var s=t.rangeList.ranges
t.rangeList.detach(this.session)
for(var o=s.length;o--;){var a=o
var n=s[o].collapseRows()
var l=n.end.row
var h=n.start.row
while(o--){var n=s[o].collapseRows()
if(h-n.end.row<=1)h=n.end.row
else break}o++
var r=e.call(this,h,l)
while(a>=o){s[a].moveBy(r,0)
a--}}t.fromOrientedRange(t.ranges[0])
t.rangeList.attach(this.session)}}
this.$getSelectedRows=function(){var e=this.getSelectionRange().collapseRows()
return{first:e.start.row,last:e.end.row}}
this.onCompositionStart=function(e){this.renderer.showComposition(this.getCursorPosition())}
this.onCompositionUpdate=function(e){this.renderer.setCompositionText(e)}
this.onCompositionEnd=function(){this.renderer.hideComposition()}
this.getFirstVisibleRow=function(){return this.renderer.getFirstVisibleRow()}
this.getLastVisibleRow=function(){return this.renderer.getLastVisibleRow()}
this.isRowVisible=function(e){return e>=this.getFirstVisibleRow()&&e<=this.getLastVisibleRow()}
this.isRowFullyVisible=function(e){return e>=this.renderer.getFirstFullyVisibleRow()&&e<=this.renderer.getLastFullyVisibleRow()}
this.$getVisibleRowCount=function(){return this.renderer.getScrollBottomRow()-this.renderer.getScrollTopRow()+1}
this.$moveByPage=function(e,t){var i=this.renderer
var n=this.renderer.layerConfig
var r=e*Math.floor(n.height/n.lineHeight)
this.$blockScrolling++
if(t==true){this.selection.$moveSelection(function(){this.moveCursorBy(r,0)})}else if(t==false){this.selection.moveCursorBy(r,0)
this.selection.clearSelection()}this.$blockScrolling--
var s=i.scrollTop
i.scrollBy(0,r*n.lineHeight)
if(t!=null)i.scrollCursorIntoView(null,.5)
i.animateScrolling(s)}
this.selectPageDown=function(){this.$moveByPage(1,true)}
this.selectPageUp=function(){this.$moveByPage(-1,true)}
this.gotoPageDown=function(){this.$moveByPage(1,false)}
this.gotoPageUp=function(){this.$moveByPage(-1,false)}
this.scrollPageDown=function(){this.$moveByPage(1)}
this.scrollPageUp=function(){this.$moveByPage(-1)}
this.scrollToRow=function(e){this.renderer.scrollToRow(e)}
this.scrollToLine=function(e,t,i,n){this.renderer.scrollToLine(e,t,i,n)}
this.centerSelection=function(){var e=this.getSelectionRange()
var t={row:Math.floor(e.start.row+(e.end.row-e.start.row)/2),column:Math.floor(e.start.column+(e.end.column-e.start.column)/2)}
this.renderer.alignCursor(t,.5)}
this.getCursorPosition=function(){return this.selection.getCursor()}
this.getCursorPositionScreen=function(){return this.session.documentToScreenPosition(this.getCursorPosition())}
this.getSelectionRange=function(){return this.selection.getRange()}
this.selectAll=function(){this.$blockScrolling+=1
this.selection.selectAll()
this.$blockScrolling-=1}
this.clearSelection=function(){this.selection.clearSelection()}
this.moveCursorTo=function(e,t){this.selection.moveCursorTo(e,t)}
this.moveCursorToPosition=function(e){this.selection.moveCursorToPosition(e)}
this.jumpToMatching=function(e){var t=this.getCursorPosition()
var i=this.session.getBracketRange(t)
if(!i){i=this.find({needle:/[{}()\[\]]/g,preventScroll:true,start:{row:t.row,column:t.column-1}})
if(!i)return
var n=i.start
if(n.row==t.row&&Math.abs(n.column-t.column)<2)i=this.session.getBracketRange(n)}n=i&&i.cursor||n
if(n){if(e){if(i&&i.isEqual(this.getSelectionRange()))this.clearSelection()
else this.selection.selectTo(n.row,n.column)}else{this.clearSelection()
this.moveCursorTo(n.row,n.column)}}}
this.gotoLine=function(e,t,i){this.selection.clearSelection()
this.session.unfold({row:e-1,column:t||0})
this.$blockScrolling+=1
this.exitMultiSelectMode&&this.exitMultiSelectMode()
this.moveCursorTo(e-1,t||0)
this.$blockScrolling-=1
if(!this.isRowFullyVisible(e-1))this.scrollToLine(e-1,true,i)}
this.navigateTo=function(e,t){this.clearSelection()
this.moveCursorTo(e,t)}
this.navigateUp=function(e){if(this.selection.isMultiLine()&&!this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection()
e=e||1
this.selection.moveCursorBy(-e,0)}
this.navigateDown=function(e){if(this.selection.isMultiLine()&&this.selection.isBackwards()){var t=this.selection.anchor.getPosition()
return this.moveCursorToPosition(t)}this.selection.clearSelection()
e=e||1
this.selection.moveCursorBy(e,0)}
this.navigateLeft=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().start
this.moveCursorToPosition(t)}else{e=e||1
while(e--){this.selection.moveCursorLeft()}}this.clearSelection()}
this.navigateRight=function(e){if(!this.selection.isEmpty()){var t=this.getSelectionRange().end
this.moveCursorToPosition(t)}else{e=e||1
while(e--){this.selection.moveCursorRight()}}this.clearSelection()}
this.navigateLineStart=function(){this.selection.moveCursorLineStart()
this.clearSelection()}
this.navigateLineEnd=function(){this.selection.moveCursorLineEnd()
this.clearSelection()}
this.navigateFileEnd=function(){var e=this.renderer.scrollTop
this.selection.moveCursorFileEnd()
this.clearSelection()
this.renderer.animateScrolling(e)}
this.navigateFileStart=function(){var e=this.renderer.scrollTop
this.selection.moveCursorFileStart()
this.clearSelection()
this.renderer.animateScrolling(e)}
this.navigateWordRight=function(){this.selection.moveCursorWordRight()
this.clearSelection()}
this.navigateWordLeft=function(){this.selection.moveCursorWordLeft()
this.clearSelection()}
this.replace=function(e,t){if(t)this.$search.set(t)
var i=this.$search.find(this.session)
var n=0
if(!i)return n
if(this.$tryReplace(i,e)){n=1}if(i!==null){this.selection.setSelectionRange(i)
this.renderer.scrollSelectionIntoView(i.start,i.end)}return n}
this.replaceAll=function(e,t){if(t){this.$search.set(t)}var i=this.$search.findAll(this.session)
var n=0
if(!i.length)return n
this.$blockScrolling+=1
var r=this.getSelectionRange()
this.clearSelection()
this.selection.moveCursorTo(0,0)
for(var s=i.length-1;s>=0;--s){if(this.$tryReplace(i[s],e)){n++}}this.selection.setSelectionRange(r)
this.$blockScrolling-=1
return n}
this.$tryReplace=function(e,t){var i=this.session.getTextRange(e)
t=this.$search.replace(i,t)
if(t!==null){e.end=this.session.replace(e,t)
return e}else{return null}}
this.getLastSearchOptions=function(){return this.$search.getOptions()}
this.find=function(e,t,i){if(!t)t={}
if(typeof e=="string"||e instanceof RegExp)t.needle=e
else if(typeof e=="object")n.mixin(t,e)
var r=this.selection.getRange()
if(t.needle==null){e=this.session.getTextRange(r)||this.$search.$options.needle
if(!e){r=this.session.getWordRange(r.start.row,r.start.column)
e=this.session.getTextRange(r)}this.$search.set({needle:e})}this.$search.set(t)
if(!t.start)this.$search.set({start:r})
var s=this.$search.find(this.session)
if(t.preventScroll)return s
if(s){this.revealRange(s,i)
return s}if(t.backwards)r.start=r.end
else r.end=r.start
this.selection.setRange(r)}
this.findNext=function(e,t){this.find({skipCurrent:true,backwards:false},e,t)}
this.findPrevious=function(e,t){this.find(e,{skipCurrent:true,backwards:true},t)}
this.revealRange=function(e,t){this.$blockScrolling+=1
this.session.unfold(e)
this.selection.setSelectionRange(e)
this.$blockScrolling-=1
var i=this.renderer.scrollTop
this.renderer.scrollSelectionIntoView(e.start,e.end,.5)
if(t!=false)this.renderer.animateScrolling(i)}
this.undo=function(){this.$blockScrolling++
this.session.getUndoManager().undo()
this.$blockScrolling--
this.renderer.scrollCursorIntoView(null,.5)}
this.redo=function(){this.$blockScrolling++
this.session.getUndoManager().redo()
this.$blockScrolling--
this.renderer.scrollCursorIntoView(null,.5)}
this.destroy=function(){this.renderer.destroy()
this._emit("destroy",this)}
this.setAutoScrollEditorIntoView=function(e){if(e===false)return
var t
var i=this
var n=false
if(!this.$scrollAnchor)this.$scrollAnchor=document.createElement("div")
var r=this.$scrollAnchor
r.style.cssText="position:absolute"
this.container.insertBefore(r,this.container.firstChild)
var s=this.on("changeSelection",function(){n=true})
var o=this.renderer.on("beforeRender",function(){if(n)t=i.renderer.container.getBoundingClientRect()})
var a=this.renderer.on("afterRender",function(){if(n&&t&&i.isFocused()){var e=i.renderer
var s=e.$cursorLayer.$pixelPos
var o=e.layerConfig
var a=s.top-o.offset
if(s.top>=0&&a+t.top<0){n=true}else if(s.top<o.height&&s.top+t.top+o.lineHeight>window.innerHeight){n=false}else{n=null}if(n!=null){r.style.top=a+"px"
r.style.left=s.left+"px"
r.style.height=o.lineHeight+"px"
r.scrollIntoView(n)}n=t=null}})
this.setAutoScrollEditorIntoView=function(e){if(e===true)return
delete this.setAutoScrollEditorIntoView
this.removeEventListener("changeSelection",s)
this.renderer.removeEventListener("afterRender",a)
this.renderer.removeEventListener("beforeRender",o)}}
this.$resetCursorStyle=function(){var e=this.$cursorStyle||"ace"
var t=this.renderer.$cursorLayer
if(!t)return
t.setSmoothBlinking(e=="smooth")
t.isBlinking=!this.$readOnly&&e!="wide"}}).call(p.prototype)
A.defineOptions(p.prototype,"editor",{selectionStyle:{set:function(e){this.onSelectionChange()
this._emit("changeSelectionStyle",{data:e})},initialValue:"line"},highlightActiveLine:{set:function(){this.$updateHighlightActiveLine()},initialValue:true},highlightSelectedWord:{set:function(e){this.$onSelectionChange()},initialValue:true},readOnly:{set:function(e){this.textInput.setReadOnly(e)
this.$resetCursorStyle()},initialValue:false},cursorStyle:{set:function(e){this.$resetCursorStyle()},values:["ace","slim","smooth","wide"],initialValue:"ace"},mergeUndoDeltas:{values:[false,true,"always"],initialValue:true},behavioursEnabled:{initialValue:true},wrapBehavioursEnabled:{initialValue:true},hScrollBarAlwaysVisible:"renderer",vScrollBarAlwaysVisible:"renderer",highlightGutterLine:"renderer",animatedScroll:"renderer",showInvisibles:"renderer",showPrintMargin:"renderer",printMarginColumn:"renderer",printMargin:"renderer",fadeFoldWidgets:"renderer",showFoldWidgets:"renderer",showGutter:"renderer",displayIndentGuides:"renderer",fontSize:"renderer",fontFamily:"renderer",maxLines:"renderer",minLines:"renderer",scrollPastEnd:"renderer",fixedWidthGutter:"renderer",scrollSpeed:"$mouseHandler",dragDelay:"$mouseHandler",dragEnabled:"$mouseHandler",focusTimout:"$mouseHandler",firstLineNumber:"session",overwrite:"session",newLineMode:"session",useWorker:"session",useSoftTabs:"session",tabSize:"session",wrap:"session",foldStyle:"session"})
t.Editor=p})
ace.define("ace/lib/lang",["require","exports","module"],function(e,t,i){t.stringReverse=function(e){return e.split("").reverse().join("")}
t.stringRepeat=function(e,t){var i=""
while(t>0){if(t&1)i+=e
if(t>>=1)e+=e}return i}
var n=/^\s\s*/
var r=/\s\s*$/
t.stringTrimLeft=function(e){return e.replace(n,"")}
t.stringTrimRight=function(e){return e.replace(r,"")}
t.copyObject=function(e){var t={}
for(var i in e){t[i]=e[i]}return t}
t.copyArray=function(e){var t=[]
for(var i=0,n=e.length;i<n;i++){if(e[i]&&typeof e[i]=="object")t[i]=this.copyObject(e[i])
else t[i]=e[i]}return t}
t.deepCopy=function(e){if(typeof e!="object"){return e}var t=e.constructor()
for(var i in e){if(typeof e[i]=="object"){t[i]=this.deepCopy(e[i])}else{t[i]=e[i]}}return t}
t.arrayToMap=function(e){var t={}
for(var i=0;i<e.length;i++){t[e[i]]=1}return t}
t.createMap=function(e){var t=Object.create(null)
for(var i in e){t[i]=e[i]}return t}
t.arrayRemove=function(e,t){for(var i=0;i<=e.length;i++){if(t===e[i]){e.splice(i,1)}}}
t.escapeRegExp=function(e){return e.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")}
t.escapeHTML=function(e){return e.replace(/&/g,"&#38;").replace(/"/g,"&#34;").replace(/'/g,"&#39;").replace(/</g,"&#60;")}
t.getMatchOffsets=function(e,t){var i=[]
e.replace(t,function(e){i.push({offset:arguments[arguments.length-2],length:e.length})})
return i}
t.deferredCall=function(e){var t=null
var i=function(){t=null
e()}
var n=function(e){n.cancel()
t=setTimeout(i,e||0)
return n}
n.schedule=n
n.call=function(){this.cancel()
e()
return n}
n.cancel=function(){clearTimeout(t)
t=null
return n}
return n}
t.delayedCall=function(e,t){var i=null
var n=function(){i=null
e()}
var r=function(e){i&&clearTimeout(i)
i=setTimeout(n,e||t)}
r.delay=r
r.schedule=function(e){if(i==null)i=setTimeout(n,e||0)}
r.call=function(){this.cancel()
e()}
r.cancel=function(){i&&clearTimeout(i)
i=null}
r.isPending=function(){return i}
return r}})
ace.define("ace/keyboard/textinput",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/lib/dom","ace/lib/lang"],function(e,t,i){var n=e("../lib/event")
var r=e("../lib/useragent")
var s=e("../lib/dom")
var o=e("../lib/lang")
var a=r.isChrome<18
var l=function(e,t){var i=s.createElement("textarea")
i.className="ace_text-input"
if(r.isTouchPad)i.setAttribute("x-palm-disable-auto-cap",true)
i.wrap="off"
i.autocorrect="off"
i.autocapitalize="off"
i.spellcheck=false
i.style.opacity="0"
e.insertBefore(i,e.firstChild)
var l=""
var h=false
var c=false
var u=false
var d=false
var f=""
var g=true
try{var m=document.activeElement===i}catch(v){}n.addListener(i,"blur",function(){t.onBlur()
m=false})
n.addListener(i,"focus",function(){m=true
t.onFocus()
C()})
this.focus=function(){i.focus()}
this.blur=function(){i.blur()}
this.isFocused=function(){return m}
var A=o.delayedCall(function(){m&&C(g)})
var p=o.delayedCall(function(){if(!d){i.value=l
m&&C()}})
function C(e){if(d)return
if($){t=0
n=e?0:i.value.length-1}else{var t=e?2:1
var n=2}try{i.setSelectionRange(t,n)}catch(r){}}function F(){if(d)return
i.value=l
if(r.isWebKit)p.schedule()}r.isWebKit||t.addEventListener("changeSelection",function(){if(t.selection.isEmpty()!=g){g=!g
A.schedule()}})
F()
if(m)t.onFocus()
var E=function(e){return e.selectionStart===0&&e.selectionEnd===e.value.length}
if(!i.setSelectionRange&&i.createTextRange){i.setSelectionRange=function(e,t){var i=this.createTextRange()
i.collapse(true)
i.moveStart("character",e)
i.moveEnd("character",t)
i.select()}
E=function(e){try{var t=e.ownerDocument.selection.createRange()}catch(i){}if(!t||t.parentElement()!=e)return false
return t.text==e.value}}if(r.isOldIE){var w=false
var B=function(e){if(w)return
var t=i.value
if(d||!t||t==l)return
if(e&&t==l[0])return D.schedule()
k(t)
w=true
F()
w=false}
var D=o.delayedCall(B)
n.addListener(i,"propertychange",B)
var y={13:1,27:1}
n.addListener(i,"keyup",function(e){if(d&&(!i.value||y[e.keyCode]))setTimeout(O,0)
if((i.value.charCodeAt(0)||0)<129){return D.call()}d?_():M()})
n.addListener(i,"keydown",function(e){D.schedule(50)})}var b=function(e){if(h){h=false}else if(c){c=false}else if(E(i)){t.selectAll()
C()}else if($){C(t.selection.isEmpty())}}
var $=null
this.setInputHandler=function(e){$=e}
this.getInputHandler=function(){return $}
var S=false
var k=function(e){if($){e=$(e)
$=null}if(u){C()
if(e)t.onPaste(e)
u=false}else if(e==l.charAt(0)){if(S)t.execCommand("del",{source:"ace"})}else{if(e.substring(0,2)==l)e=e.substr(2)
else if(e.charAt(0)==l.charAt(0))e=e.substr(1)
else if(e.charAt(e.length-1)==l.charAt(0))e=e.slice(0,-1)
if(e.charAt(e.length-1)==l.charAt(0))e=e.slice(0,-1)
if(e)t.onTextInput(e)}if(S)S=false}
var x=function(e){if(d)return
var t=i.value
k(t)
F()}
var L=function(e){var r=t.getCopyText()
if(!r){n.preventDefault(e)
return}var s=e.clipboardData||window.clipboardData
if(s&&!a){var o=s.setData("Text",r)
if(o){t.onCut()
n.preventDefault(e)}}if(!o){h=true
i.value=r
i.select()
setTimeout(function(){h=false
F()
C()
t.onCut()})}}
var R=function(e){var r=t.getCopyText()
if(!r){n.preventDefault(e)
return}var s=e.clipboardData||window.clipboardData
if(s&&!a){var o=s.setData("Text",r)
if(o){t.onCopy()
n.preventDefault(e)}}if(!o){c=true
i.value=r
i.select()
setTimeout(function(){c=false
F()
C()
t.onCopy()})}}
var T=function(e){var s=e.clipboardData||window.clipboardData
if(s){var o=s.getData("Text")
if(o)t.onPaste(o)
if(r.isIE)setTimeout(C)
n.preventDefault(e)}else{i.value=""
u=true}}
n.addCommandKeyListener(i,t.onCommandKey.bind(t))
n.addListener(i,"select",b)
n.addListener(i,"input",x)
n.addListener(i,"cut",L)
n.addListener(i,"copy",R)
n.addListener(i,"paste",T)
if(!("oncut"in i)||!("oncopy"in i)||!("onpaste"in i)){n.addListener(e,"keydown",function(e){if(r.isMac&&!e.metaKey||!e.ctrlKey)return
switch(e.keyCode){case 67:R(e)
break
case 86:T(e)
break
case 88:L(e)
break}})}var M=function(e){if(d)return
d={}
t.onCompositionStart()
setTimeout(_,0)
t.on("mousedown",O)
if(!t.selection.isEmpty()){t.insert("")
t.session.markUndoGroup()
t.selection.clearSelection()}t.session.markUndoGroup()}
var _=function(){if(!d)return
var e=i.value.replace(/\x01/g,"")
if(d.lastValue===e)return
t.onCompositionUpdate(e)
if(d.lastValue)t.undo()
d.lastValue=e
if(d.lastValue){var n=t.selection.getRange()
t.insert(d.lastValue)
t.session.markUndoGroup()
d.range=t.selection.getRange()
t.selection.setRange(n)
t.selection.clearSelection()}}
var O=function(e){var n=d
d=false
var r=setTimeout(function(){r=null
var e=i.value.replace(/\x01/g,"")
if(d)return
else if(e==n.lastValue)F()
else if(!n.lastValue&&e){F()
k(e)}})
$=function s(e){if(r)clearTimeout(r)
e=e.replace(/\x01/g,"")
if(e==n.lastValue)return""
if(n.lastValue&&r)t.undo()
return e}
t.onCompositionEnd()
t.removeListener("mousedown",O)
if(e.type=="compositionend"&&n.range){t.selection.setRange(n.range)}}
var I=o.delayedCall(_,50)
n.addListener(i,"compositionstart",M)
if(r.isGecko){n.addListener(i,"text",function(){I.schedule()})}else{n.addListener(i,"keyup",function(){I.schedule()})
n.addListener(i,"keydown",function(){I.schedule()})}n.addListener(i,"compositionend",O)
this.getElement=function(){return i}
this.setReadOnly=function(e){i.readOnly=e}
this.onContextMenu=function(e){S=true
if(!f)f=i.style.cssText
i.style.cssText="z-index:100000;"+(r.isIE?"opacity:0.1;":"")
C(t.selection.isEmpty())
t._emit("nativecontextmenu",{target:t,domEvent:e})
var o=t.container.getBoundingClientRect()
var a=s.computedStyle(t.container)
var l=o.top+(parseInt(a.borderTopWidth)||0)
var h=o.left+(parseInt(o.borderLeftWidth)||0)
var c=o.bottom-l-i.clientHeight
var u=function(e){i.style.left=e.clientX-h-2+"px"
i.style.top=Math.min(e.clientY-l-2,c)+"px"}
u(e)
if(e.type!="mousedown")return
if(t.renderer.$keepTextAreaAtCursor)t.renderer.$keepTextAreaAtCursor=null
if(r.isWin)n.capture(t.container,u,W)}
this.onContextMenuClose=W
function W(){setTimeout(function(){if(f){i.style.cssText=f
f=""}if(t.renderer.$keepTextAreaAtCursor==null){t.renderer.$keepTextAreaAtCursor=true
t.renderer.$moveTextAreaToCursor()}},0)}if(!r.isGecko||r.isMac){var P=function(e){t.textInput.onContextMenu(e)
W()}
n.addListener(t.renderer.scroller,"contextmenu",P)
n.addListener(i,"contextmenu",P)}}
t.TextInput=l})
ace.define("ace/mouse/mouse_handler",["require","exports","module","ace/lib/event","ace/lib/useragent","ace/mouse/default_handlers","ace/mouse/default_gutter_handler","ace/mouse/mouse_event","ace/mouse/dragdrop_handler","ace/config"],function(e,t,i){var n=e("../lib/event")
var r=e("../lib/useragent")
var s=e("./default_handlers").DefaultHandlers
var o=e("./default_gutter_handler").GutterHandler
var a=e("./mouse_event").MouseEvent
var l=e("./dragdrop_handler").DragdropHandler
var h=e("../config")
var c=function(e){this.editor=e
new s(this)
new o(this)
new l(this)
var t=e.renderer.getMouseEventTarget()
n.addListener(t,"click",this.onMouseEvent.bind(this,"click"))
n.addListener(t,"mousemove",this.onMouseMove.bind(this,"mousemove"))
n.addMultiMouseDownListener(t,[300,300,250],this,"onMouseEvent")
if(e.renderer.scrollBarV){n.addMultiMouseDownListener(e.renderer.scrollBarV.inner,[300,300,250],this,"onMouseEvent")
n.addMultiMouseDownListener(e.renderer.scrollBarH.inner,[300,300,250],this,"onMouseEvent")}n.addMouseWheelListener(e.container,this.onMouseWheel.bind(this,"mousewheel"))
var i=e.renderer.$gutter
n.addListener(i,"mousedown",this.onMouseEvent.bind(this,"guttermousedown"))
n.addListener(i,"click",this.onMouseEvent.bind(this,"gutterclick"))
n.addListener(i,"dblclick",this.onMouseEvent.bind(this,"gutterdblclick"))
n.addListener(i,"mousemove",this.onMouseEvent.bind(this,"guttermousemove"))
n.addListener(t,"mousedown",function(t){e.focus()})
n.addListener(i,"mousedown",function(t){e.focus()
return n.preventDefault(t)})};(function(){this.onMouseEvent=function(e,t){this.editor._emit(e,new a(t,this.editor))}
this.onMouseMove=function(e,t){var i=this.editor._eventRegistry&&this.editor._eventRegistry.mousemove
if(!i||!i.length)return
this.editor._emit(e,new a(t,this.editor))}
this.onMouseWheel=function(e,t){var i=new a(t,this.editor)
i.speed=this.$scrollSpeed*2
i.wheelX=t.wheelX
i.wheelY=t.wheelY
this.editor._emit(e,i)}
this.setState=function(e){this.state=e}
this.captureMouse=function(e,t){this.x=e.x
this.y=e.y
this.isMousePressed=true
var i=this.editor.renderer
if(i.$keepTextAreaAtCursor)i.$keepTextAreaAtCursor=null
var s=this
var o=function(e){s.x=e.clientX
s.y=e.clientY
t&&t(e)}
var a=function(e){clearInterval(h)
l()
s[s.state+"End"]&&s[s.state+"End"](e)
s.$clickSelection=null
if(i.$keepTextAreaAtCursor==null){i.$keepTextAreaAtCursor=true
i.$moveTextAreaToCursor()}s.isMousePressed=false
s.onMouseEvent("mouseup",e)}
var l=function(){s[s.state]&&s[s.state]()}
if(r.isOldIE&&e.domEvent.type=="dblclick"){return setTimeout(function(){a(e)})}n.capture(this.editor.container,o,a)
var h=setInterval(l,20)}}).call(c.prototype)
h.defineOptions(c.prototype,"mouseHandler",{scrollSpeed:{initialValue:2},dragDelay:{initialValue:150},dragEnabled:{initialValue:true},focusTimout:{initialValue:0}})
t.MouseHandler=c})
ace.define("ace/mouse/default_handlers",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(e,t,i){var n=e("../lib/dom")
var r=e("../lib/event")
var s=e("../lib/useragent")
var o=0
function a(e){e.$clickSelection=null
var t=e.editor
t.setDefaultHandler("mousedown",this.onMouseDown.bind(e))
t.setDefaultHandler("dblclick",this.onDoubleClick.bind(e))
t.setDefaultHandler("tripleclick",this.onTripleClick.bind(e))
t.setDefaultHandler("quadclick",this.onQuadClick.bind(e))
t.setDefaultHandler("mousewheel",this.onMouseWheel.bind(e))
var i=["select","startSelect","selectEnd","selectAllEnd","selectByWordsEnd","selectByLinesEnd","dragWait","dragWaitEnd","focusWait"]
i.forEach(function(t){e[t]=this[t]},this)
e.selectByLines=this.extendSelectionBy.bind(e,"getLineRange")
e.selectByWords=this.extendSelectionBy.bind(e,"getWordRange")}(function(){this.onMouseDown=function(e){var t=e.inSelection()
var i=e.getDocumentPosition()
this.mousedownEvent=e
var n=this.editor
var r=e.getButton()
if(r!==0){var s=n.getSelectionRange()
var o=s.isEmpty()
if(o){n.moveCursorToPosition(i)
n.selection.clearSelection()}n.textInput.onContextMenu(e.domEvent)
return}if(t&&!n.isFocused()){n.focus()
if(this.$focusTimout&&!this.$clickSelection&&!n.inMultiSelectMode){this.mousedownEvent.time=(new Date).getTime()
this.setState("focusWait")
this.captureMouse(e)
return}}if(!t||this.$clickSelection||e.getShiftKey()||n.inMultiSelectMode){this.startSelect(i)}else if(t){this.mousedownEvent.time=(new Date).getTime()
this.startSelect(i)}this.captureMouse(e)
return e.preventDefault()}
this.startSelect=function(e){e=e||this.editor.renderer.screenToTextCoordinates(this.x,this.y)
var t=this.editor
setTimeout(function(){if(this.mousedownEvent.getShiftKey()){t.selection.selectToPosition(e)}else if(!this.$clickSelection){t.moveCursorToPosition(e)
t.selection.clearSelection()}}.bind(this),0)
if(t.renderer.scroller.setCapture){t.renderer.scroller.setCapture()}t.setStyle("ace_selecting")
this.setState("select")}
this.select=function(){var e,t=this.editor
var i=t.renderer.screenToTextCoordinates(this.x,this.y)
if(this.$clickSelection){var n=this.$clickSelection.comparePoint(i)
if(n==-1){e=this.$clickSelection.end}else if(n==1){e=this.$clickSelection.start}else{var r=h(this.$clickSelection,i)
i=r.cursor
e=r.anchor}t.selection.setSelectionAnchor(e.row,e.column)}t.selection.selectToPosition(i)
t.renderer.scrollCursorIntoView()}
this.extendSelectionBy=function(e){var t,i=this.editor
var n=i.renderer.screenToTextCoordinates(this.x,this.y)
var r=i.selection[e](n.row,n.column)
if(this.$clickSelection){var s=this.$clickSelection.comparePoint(r.start)
var o=this.$clickSelection.comparePoint(r.end)
if(s==-1&&o<=0){t=this.$clickSelection.end
if(r.end.row!=n.row||r.end.column!=n.column)n=r.start}else if(o==1&&s>=0){t=this.$clickSelection.start
if(r.start.row!=n.row||r.start.column!=n.column)n=r.end}else if(s==-1&&o==1){n=r.end
t=r.start}else{var a=h(this.$clickSelection,n)
n=a.cursor
t=a.anchor}i.selection.setSelectionAnchor(t.row,t.column)}i.selection.selectToPosition(n)
i.renderer.scrollCursorIntoView()}
this.selectEnd=this.selectAllEnd=this.selectByWordsEnd=this.selectByLinesEnd=function(){this.editor.unsetStyle("ace_selecting")
if(this.editor.renderer.scroller.releaseCapture){this.editor.renderer.scroller.releaseCapture()}}
this.focusWait=function(){var e=l(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)
var t=(new Date).getTime()
if(e>o||t-this.mousedownEvent.time>this.$focusTimout)this.startSelect(this.mousedownEvent.getDocumentPosition())}
this.onDoubleClick=function(e){var t=e.getDocumentPosition()
var i=this.editor
var n=i.session
var r=n.getBracketRange(t)
if(r){if(r.isEmpty()){r.start.column--
r.end.column++}this.$clickSelection=r
this.setState("select")
return}this.$clickSelection=i.selection.getWordRange(t.row,t.column)
this.setState("selectByWords")}
this.onTripleClick=function(e){var t=e.getDocumentPosition()
var i=this.editor
this.setState("selectByLines")
this.$clickSelection=i.selection.getLineRange(t.row)}
this.onQuadClick=function(e){var t=this.editor
t.selectAll()
this.$clickSelection=t.getSelectionRange()
this.setState("selectAll")}
this.onMouseWheel=function(e){if(e.getShiftKey()||e.getAccelKey())return
var t=e.domEvent.timeStamp
var i=t-(this.$lastScrollTime||0)
var n=this.editor
var r=n.renderer.isScrollableBy(e.wheelX*e.speed,e.wheelY*e.speed)
if(r||i<200){this.$lastScrollTime=t
n.renderer.scrollBy(e.wheelX*e.speed,e.wheelY*e.speed)
return e.stop()}}}).call(a.prototype)
t.DefaultHandlers=a
function l(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))}function h(e,t){if(e.start.row==e.end.row)var i=2*t.column-e.start.column-e.end.column
else if(e.start.row==e.end.row-1&&!e.start.column&&!e.end.column)var i=t.column-4
else var i=2*t.row-e.start.row-e.end.row
if(i<0)return{cursor:e.start,anchor:e.end}
else return{cursor:e.end,anchor:e.start}}})
ace.define("ace/mouse/default_gutter_handler",["require","exports","module","ace/lib/dom","ace/lib/event"],function(e,t,i){var n=e("../lib/dom")
var r=e("../lib/event")
function s(e){var t=e.editor
var i=t.renderer.$gutterLayer
e.editor.setDefaultHandler("guttermousedown",function(n){if(!t.isFocused()||n.getButton()!=0)return
var r=i.getRegion(n)
if(r=="foldWidgets")return
var s=n.getDocumentPosition().row
var o=t.session.selection
if(n.getShiftKey())o.selectTo(s,0)
else{if(n.domEvent.detail==2){t.selectAll()
return n.preventDefault()}e.$clickSelection=t.selection.getLineRange(s)}e.setState("selectByLines")
e.captureMouse(n)
return n.preventDefault()})
var s,o,a,l
function h(){a=n.createElement("div")
a.className="ace_gutter-tooltip"
a.style.display="none"
t.container.appendChild(a)}function c(){if(!a){h()}var e=o.getDocumentPosition().row
var n=i.$annotations[e]
if(!n)return u()
var r=t.session.getLength()
if(e==r){var s=t.renderer.pixelToScreenCoordinates(0,o.y).row
var c=o.$pos
if(s>t.session.documentToScreenRow(c.row,c.column))return u()}if(l==n)return
l=n.text.join("<br/>")
a.style.display="block"
a.innerHTML=l
t.on("mousewheel",u)
d(o)}function u(){if(s)s=clearTimeout(s)
if(l){a.style.display="none"
l=null
t.removeEventListener("mousewheel",u)}}function d(e){var i=t.renderer.$gutter.getBoundingClientRect()
a.style.left=e.x+15+"px"
if(e.y+3*t.renderer.lineHeight+15<i.bottom){a.style.bottom=""
a.style.top=e.y+15+"px"}else{a.style.top=""
var n=window.innerHeight||document.documentElement.clientHeight
a.style.bottom=n-e.y+5+"px"}}e.editor.setDefaultHandler("guttermousemove",function(t){var i=t.domEvent.target||t.domEvent.srcElement
if(n.hasCssClass(i,"ace_fold-widget"))return u()
if(l)d(t)
o=t
if(s)return
s=setTimeout(function(){s=null
if(o&&!e.isMousePressed)c()
else u()},50)})
r.addListener(t.renderer.$gutter,"mouseout",function(e){o=null
if(!l||s)return
s=setTimeout(function(){s=null
u()},50)})
t.on("changeSession",u)}t.GutterHandler=s})
ace.define("ace/mouse/mouse_event",["require","exports","module","ace/lib/event","ace/lib/useragent"],function(e,t,i){var n=e("../lib/event")
var r=e("../lib/useragent")
var s=t.MouseEvent=function(e,t){this.domEvent=e
this.editor=t
this.x=this.clientX=e.clientX
this.y=this.clientY=e.clientY
this.$pos=null
this.$inSelection=null
this.propagationStopped=false
this.defaultPrevented=false};(function(){this.stopPropagation=function(){n.stopPropagation(this.domEvent)
this.propagationStopped=true}
this.preventDefault=function(){n.preventDefault(this.domEvent)
this.defaultPrevented=true}
this.stop=function(){this.stopPropagation()
this.preventDefault()}
this.getDocumentPosition=function(){if(this.$pos)return this.$pos
this.$pos=this.editor.renderer.screenToTextCoordinates(this.clientX,this.clientY)
return this.$pos}
this.inSelection=function(){if(this.$inSelection!==null)return this.$inSelection
var e=this.editor
var t=e.getSelectionRange()
if(t.isEmpty())this.$inSelection=false
else{var i=this.getDocumentPosition()
this.$inSelection=t.contains(i.row,i.column)}return this.$inSelection}
this.getButton=function(){return n.getButton(this.domEvent)}
this.getShiftKey=function(){return this.domEvent.shiftKey}
this.getAccelKey=r.isMac?function(){return this.domEvent.metaKey}:function(){return this.domEvent.ctrlKey}}).call(s.prototype)})
ace.define("ace/mouse/dragdrop_handler",["require","exports","module","ace/lib/dom","ace/lib/event","ace/lib/useragent"],function(e,t,i){var n=e("../lib/dom")
var r=e("../lib/event")
var s=e("../lib/useragent")
var o=200
var a=200
var l=5
function h(e){var t=e.editor
var i=n.createElement("img")
i.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
if(s.isOpera)i.style.cssText="width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;"
var h=["dragWait","dragWaitEnd","startDrag","dragReadyEnd","onMouseDrag"]
h.forEach(function(t){e[t]=this[t]},this)
t.addEventListener("mousedown",this.onMouseDown.bind(e))
var u=t.container
var d,f,g
var m,v
var A,p=0
var C
var F
var E
var w
var B
this.onDragStart=function(e){if(this.cancelDrag||!u.draggable){var n=this
setTimeout(function(){n.startSelect()
n.captureMouse(e)},0)
return e.preventDefault()}v=t.getSelectionRange()
var r=e.dataTransfer
r.effectAllowed=t.getReadOnly()?"copy":"copyMove"
if(s.isOpera){t.container.appendChild(i)
i._top=i.offsetTop}r.setDragImage&&r.setDragImage(i,0,0)
if(s.isOpera){t.container.removeChild(i)}r.clearData()
r.setData("Text",t.session.getTextRange())
F=true
this.setState("drag")}
this.onDragEnd=function(e){u.draggable=false
F=false
this.setState(null)
if(!t.getReadOnly()){var i=e.dataTransfer.dropEffect
if(!C&&i=="move")t.session.remove(t.getSelectionRange())
t.renderer.$cursorLayer.setBlinking(true)}this.editor.unsetStyle("ace_dragging")}
this.onDragEnter=function(e){if(t.getReadOnly()||!L(e.dataTransfer))return
if(!d)$()
p++
e.dataTransfer.dropEffect=C=R(e)
return r.preventDefault(e)}
this.onDragOver=function(e){if(t.getReadOnly()||!L(e.dataTransfer))return
if(!d){$()
p++}if(k!==null)k=null
f=e.clientX
g=e.clientY
e.dataTransfer.dropEffect=C=R(e)
return r.preventDefault(e)}
this.onDragLeave=function(e){p--
if(p<=0&&d){S()
C=null
return r.preventDefault(e)}}
this.onDrop=function(e){if(!d)return
var i=e.dataTransfer
if(F){switch(C){case"move":if(v.contains(A.row,A.column)){v={start:A,end:A}}else{v=t.moveText(v,A)}break
case"copy":v=t.moveText(v,A,true)
break}}else{var n=i.getData("Text")
v={start:A,end:t.session.insert(A,n)}
t.focus()
C=null}S()
return r.preventDefault(e)}
r.addListener(u,"dragstart",this.onDragStart.bind(e))
r.addListener(u,"dragend",this.onDragEnd.bind(e))
r.addListener(u,"dragenter",this.onDragEnter.bind(e))
r.addListener(u,"dragover",this.onDragOver.bind(e))
r.addListener(u,"dragleave",this.onDragLeave.bind(e))
r.addListener(u,"drop",this.onDrop.bind(e))
function D(e,i){var n=(new Date).getTime()
var r=!i||e.row!=i.row
var s=!i||e.column!=i.column
if(!w||r||s){t.$blockScrolling+=1
t.moveCursorToPosition(e)
t.$blockScrolling-=1
w=n
B={x:f,y:g}}else{var o=c(B.x,B.y,f,g)
if(o>l){w=null}else if(n-w>=a){t.renderer.scrollCursorIntoView()
w=null}}}function y(e,i){var n=(new Date).getTime()
var r=t.renderer.layerConfig.lineHeight
var s=t.renderer.layerConfig.characterWidth
var a=t.renderer.scroller.getBoundingClientRect()
var l={x:{left:f-a.left,right:a.right-f},y:{top:g-a.top,bottom:a.bottom-g}}
var h=Math.min(l.x.left,l.x.right)
var c=Math.min(l.y.top,l.y.bottom)
var u={row:e.row,column:e.column}
if(h/s<=2){u.column+=l.x.left<l.x.right?-3:+2}if(c/r<=1){u.row+=l.y.top<l.y.bottom?-1:+1}var d=e.row!=u.row
var m=e.column!=u.column
var v=!i||e.row!=i.row
if(d||m&&!v){if(!E)E=n
else if(n-E>=o)t.renderer.scrollCursorIntoView(u)}else{E=null}}function b(){var e=A
A=t.renderer.screenToTextCoordinates(f,g)
D(A,e)
y(A,e)}function $(){v=t.selection.toOrientedRange()
d=t.session.addMarker(v,"ace_selection",t.getSelectionStyle())
t.clearSelection()
if(t.isFocused())t.renderer.$cursorLayer.setBlinking(false)
clearInterval(m)
m=setInterval(b,20)
p=0
r.addListener(document,"mousemove",x)}function S(){clearInterval(m)
t.session.removeMarker(d)
d=null
t.$blockScrolling+=1
t.selection.fromOrientedRange(v)
t.$blockScrolling-=1
if(t.isFocused()&&!F)t.renderer.$cursorLayer.setBlinking(!t.getReadOnly())
v=null
p=0
E=null
w=null
r.removeListener(document,"mousemove",x)}var k=null
function x(){if(k==null){k=setTimeout(function(){if(k!=null&&d)S()},20)}}function L(e){var t=e.types
return!t||Array.prototype.some.call(t,function(e){return e=="text/plain"||e=="Text"})}function R(e){var t=["copy","copymove","all","uninitialized"]
var i=["move","copymove","linkmove","all","uninitialized"]
var n=s.isMac?e.altKey:e.ctrlKey
var r="uninitialized"
try{r=e.dataTransfer.effectAllowed.toLowerCase()}catch(e){}var o="none"
if(n&&t.indexOf(r)>=0)o="copy"
else if(i.indexOf(r)>=0)o="move"
else if(t.indexOf(r)>=0)o="copy"
return o}}(function(){this.dragWait=function(){var e=(new Date).getTime()-this.mousedownEvent.time
if(e>this.editor.getDragDelay())this.startDrag()}
this.dragWaitEnd=function(){var e=this.editor.container
e.draggable=false
this.startSelect(this.mousedownEvent.getDocumentPosition())
this.selectEnd()}
this.dragReadyEnd=function(e){this.editor.renderer.$cursorLayer.setBlinking(!this.editor.getReadOnly())
this.editor.unsetStyle("ace_dragging")
this.dragWaitEnd()}
this.startDrag=function(){this.cancelDrag=false
var e=this.editor.container
e.draggable=true
this.editor.renderer.$cursorLayer.setBlinking(false)
this.editor.setStyle("ace_dragging")
this.setState("dragReady")}
this.onMouseDrag=function(e){var t=this.editor.container
if(s.isIE&&this.state=="dragReady"){var i=c(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)
if(i>3)t.dragDrop()}if(this.state==="dragWait"){var i=c(this.mousedownEvent.x,this.mousedownEvent.y,this.x,this.y)
if(i>0){t.draggable=false
this.startSelect(this.mousedownEvent.getDocumentPosition())}}}
this.onMouseDown=function(e){if(!this.$dragEnabled)return
this.mousedownEvent=e
var t=this.editor
var i=e.inSelection()
var n=e.getButton()
var r=e.domEvent.detail||1
if(r===1&&n===0&&i){this.mousedownEvent.time=(new Date).getTime()
var o=e.domEvent.target||e.domEvent.srcElement
if("unselectable"in o)o.unselectable="on"
if(t.getDragDelay()){if(s.isWebKit){self.cancelDrag=true
var a=t.container
a.draggable=true}this.setState("dragWait")}else{this.startDrag()}this.captureMouse(e,this.onMouseDrag.bind(this))
e.defaultPrevented=true}}}).call(h.prototype)
function c(e,t,i,n){return Math.sqrt(Math.pow(i-e,2)+Math.pow(n-t,2))}t.DragdropHandler=h})
ace.define("ace/config",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/lib/net","ace/lib/event_emitter"],function(e,t,i){"no use strict"
var n=e("./lib/lang")
var r=e("./lib/oop")
var s=e("./lib/net")
var o=e("./lib/event_emitter").EventEmitter
var a=function(){return this}()
var l={packaged:false,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{}}
t.get=function(e){if(!l.hasOwnProperty(e))throw new Error("Unknown config key: "+e)
return l[e]}
t.set=function(e,t){if(!l.hasOwnProperty(e))throw new Error("Unknown config key: "+e)
l[e]=t}
t.all=function(){return n.copyObject(l)}
r.implement(t,o)
t.moduleUrl=function(e,t){if(l.$moduleUrls[e])return l.$moduleUrls[e]
var i=e.split("/")
t=t||i[i.length-2]||""
var n=t=="snippets"?"/":"-"
var r=i[i.length-1]
if(n=="-"){var s=new RegExp("^"+t+"[\\-_]|[\\-_]"+t+"$","g")
r=r.replace(s,"")}if((!r||r==t)&&i.length>1)r=i[i.length-2]
var o=l[t+"Path"]
if(o==null){o=l.basePath}else if(n=="/"){t=n=""}if(o&&o.slice(-1)!="/")o+="/"
return o+t+n+r+this.get("suffix")}
t.setModuleUrl=function(e,t){return l.$moduleUrls[e]=t}
t.$loading={}
t.loadModule=function(i,n){var r,o
if(Array.isArray(i)){o=i[0]
i=i[1]}try{r=e(i)}catch(a){}if(r&&!t.$loading[i])return n&&n(r)
if(!t.$loading[i])t.$loading[i]=[]
t.$loading[i].push(n)
if(t.$loading[i].length>1)return
var l=function(){e([i],function(e){t._emit("load.module",{name:i,module:e})
var n=t.$loading[i]
t.$loading[i]=null
n.forEach(function(t){t&&t(e)})})}
if(!t.get("packaged"))return l()
s.loadScript(t.moduleUrl(i,o),l)}
t.init=function(){l.packaged=e.packaged||i.packaged||a.define&&define.packaged
if(!a.document)return""
var n={}
var r=""
var s=document.getElementsByTagName("script")
for(var o=0;o<s.length;o++){var c=s[o]
var u=c.src||c.getAttribute("src")
if(!u)continue
var d=c.attributes
for(var f=0,g=d.length;f<g;f++){var m=d[f]
if(m.name.indexOf("data-ace-")===0){n[h(m.name.replace(/^data-ace-/,""))]=m.value}}var v=u.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/)
if(v)r=v[1]}if(r){n.base=n.base||r
n.packaged=true}n.basePath=n.base
n.workerPath=n.workerPath||n.base
n.modePath=n.modePath||n.base
n.themePath=n.themePath||n.base
delete n.base
for(var A in n)if(typeof n[A]!=="undefined")t.set(A,n[A])}
function h(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}var c={setOptions:function(e){Object.keys(e).forEach(function(t){this.setOption(t,e[t])},this)},getOptions:function(e){var t={}
if(!e){e=Object.keys(this.$options)}else if(!Array.isArray(e)){t=e
e=Object.keys(t)}e.forEach(function(e){t[e]=this.getOption(e)},this)
return t},setOption:function(e,t){if(this["$"+e]===t)return
var i=this.$options[e]
if(!i){if(typeof console!="undefined"&&console.warn)console.warn('misspelled option "'+e+'"')
return undefined}if(i.forwardTo)return this[i.forwardTo]&&this[i.forwardTo].setOption(e,t)
if(!i.handlesSet)this["$"+e]=t
if(i&&i.set)i.set.call(this,t)},getOption:function(e){var t=this.$options[e]
if(!t){if(typeof console!="undefined"&&console.warn)console.warn('misspelled option "'+e+'"')
return undefined}if(t.forwardTo)return this[t.forwardTo]&&this[t.forwardTo].getOption(e)
return t&&t.get?t.get.call(this):this["$"+e]}}
var u={}
t.defineOptions=function(e,t,i){if(!e.$options)u[t]=e.$options={}
Object.keys(i).forEach(function(t){var n=i[t]
if(typeof n=="string")n={forwardTo:n}
n.name||(n.name=t)
e.$options[n.name]=n
if("initialValue"in n)e["$"+n.name]=n.initialValue})
r.implement(e,c)
return this}
t.resetOptions=function(e){Object.keys(e.$options).forEach(function(t){var i=e.$options[t]
if("value"in i)e.setOption(t,i.value)})}
t.setDefaultValue=function(e,i,n){var r=u[e]||(u[e]={})
if(r[i]){if(r.forwardTo)t.setDefaultValue(r.forwardTo,i,n)
else r[i].value=n}}
t.setDefaultValues=function(e,i){Object.keys(i).forEach(function(n){t.setDefaultValue(e,n,i[n])})}})
ace.define("ace/lib/net",["require","exports","module","ace/lib/dom"],function(e,t,i){var n=e("./dom")
t.get=function(e,t){var i=new XMLHttpRequest
i.open("GET",e,true)
i.onreadystatechange=function(){if(i.readyState===4){t(i.responseText)}}
i.send(null)}
t.loadScript=function(e,t){var i=n.getDocumentHead()
var r=document.createElement("script")
r.src=e
i.appendChild(r)
r.onload=r.onreadystatechange=function(e,i){if(i||!r.readyState||r.readyState=="loaded"||r.readyState=="complete"){r=r.onload=r.onreadystatechange=null
if(!i)t()}}}})
ace.define("ace/lib/event_emitter",["require","exports","module"],function(e,t,i){var n={}
var r=function(){this.propagationStopped=true}
var s=function(){this.defaultPrevented=true}
n._emit=n._dispatchEvent=function(e,t){this._eventRegistry||(this._eventRegistry={})
this._defaultHandlers||(this._defaultHandlers={})
var i=this._eventRegistry[e]||[]
var n=this._defaultHandlers[e]
if(!i.length&&!n)return
if(typeof t!="object"||!t)t={}
if(!t.type)t.type=e
if(!t.stopPropagation)t.stopPropagation=r
if(!t.preventDefault)t.preventDefault=s
i=i.slice()
for(var o=0;o<i.length;o++){i[o](t,this)
if(t.propagationStopped)break}if(n&&!t.defaultPrevented)return n(t,this)}
n._signal=function(e,t){var i=(this._eventRegistry||{})[e]
if(!i)return
i=i.slice()
for(var n=0;n<i.length;n++)i[n](t,this)}
n.once=function(e,t){var i=this
t&&this.addEventListener(e,function n(){i.removeEventListener(e,n)
t.apply(null,arguments)})}
n.setDefaultHandler=function(e,t){var i=this._defaultHandlers
if(!i)i=this._defaultHandlers={_disabled_:{}}
if(i[e]){var n=i[e]
var r=i._disabled_[e]
if(!r)i._disabled_[e]=r=[]
r.push(n)
var s=r.indexOf(t)
if(s!=-1)r.splice(s,1)}i[e]=t}
n.removeDefaultHandler=function(e,t){var i=this._defaultHandlers
if(!i)return
var n=i._disabled_[e]
if(i[e]==t){var r=i[e]
if(n)this.setDefaultHandler(e,n.pop())}else if(n){var s=n.indexOf(t)
if(s!=-1)n.splice(s,1)}}
n.on=n.addEventListener=function(e,t,i){this._eventRegistry=this._eventRegistry||{}
var n=this._eventRegistry[e]
if(!n)n=this._eventRegistry[e]=[]
if(n.indexOf(t)==-1)n[i?"unshift":"push"](t)
return t}
n.off=n.removeListener=n.removeEventListener=function(e,t){this._eventRegistry=this._eventRegistry||{}
var i=this._eventRegistry[e]
if(!i)return
var n=i.indexOf(t)
if(n!==-1)i.splice(n,1)}
n.removeAllListeners=function(e){if(this._eventRegistry)this._eventRegistry[e]=[]}
t.EventEmitter=n})
ace.define("ace/mouse/fold_handler",["require","exports","module"],function(e,t,i){function n(e){e.on("click",function(t){var i=t.getDocumentPosition()
var n=e.session
var r=n.getFoldAt(i.row,i.column,1)
if(r){if(t.getAccelKey())n.removeFold(r)
else n.expandFold(r)
t.stop()}})
e.on("gutterclick",function(t){var i=e.renderer.$gutterLayer.getRegion(t)
if(i=="foldWidgets"){var n=t.getDocumentPosition().row
var r=e.session
if(r.foldWidgets&&r.foldWidgets[n])e.session.onFoldWidgetClick(n,t)
if(!e.isFocused())e.focus()
t.stop()}})
e.on("gutterdblclick",function(t){var i=e.renderer.$gutterLayer.getRegion(t)
if(i=="foldWidgets"){var n=t.getDocumentPosition().row
var r=e.session
var s=r.getParentFoldRangeData(n,true)
var o=s.range||s.firstRange
if(o){var n=o.start.row
var a=r.getFoldAt(n,r.getLine(n).length,1)
if(a){r.removeFold(a)}else{r.addFold("...",o)
e.renderer.scrollCursorIntoView({row:o.start.row,column:0})}}t.stop()}})}t.FoldHandler=n})
ace.define("ace/keyboard/keybinding",["require","exports","module","ace/lib/keys","ace/lib/event"],function(e,t,i){var n=e("../lib/keys")
var r=e("../lib/event")
var s=function(e){this.$editor=e
this.$data={}
this.$handlers=[]
this.setDefaultHandler(e.commands)};(function(){this.setDefaultHandler=function(e){this.removeKeyboardHandler(this.$defaultHandler)
this.$defaultHandler=e
this.addKeyboardHandler(e,0)
this.$data={editor:this.$editor}}
this.setKeyboardHandler=function(e){var t=this.$handlers
if(t[t.length-1]==e)return
while(t[t.length-1]&&t[t.length-1]!=this.$defaultHandler)this.removeKeyboardHandler(t[t.length-1])
this.addKeyboardHandler(e,1)}
this.addKeyboardHandler=function(e,t){if(!e)return
var i=this.$handlers.indexOf(e)
if(i!=-1)this.$handlers.splice(i,1)
if(t==undefined)this.$handlers.push(e)
else this.$handlers.splice(t,0,e)
if(i==-1&&e.attach)e.attach(this.$editor)}
this.removeKeyboardHandler=function(e){var t=this.$handlers.indexOf(e)
if(t==-1)return false
this.$handlers.splice(t,1)
e.detach&&e.detach(this.$editor)
return true}
this.getKeyboardHandler=function(){return this.$handlers[this.$handlers.length-1]}
this.$callKeyboardHandlers=function(e,t,i,n){var s
var o=false
var a=this.$editor.commands
for(var l=this.$handlers.length;l--;){s=this.$handlers[l].handleKeyboard(this.$data,e,t,i,n)
if(!s||!s.command)continue
if(s.command=="null"){o=true}else{o=a.exec(s.command,this.$editor,s.args,n)}if(o&&n&&e!=-1&&s.passEvent!=true&&s.command.passEvent!=true){r.stopEvent(n)}if(o)break}return o}
this.onCommandKey=function(e,t,i){var r=n.keyCodeToString(i)
this.$callKeyboardHandlers(t,r,i,e)}
this.onTextInput=function(e){var t=this.$callKeyboardHandlers(-1,e)
if(!t)this.$editor.commands.exec("insertstring",this.$editor,e)}}).call(s.prototype)
t.KeyBinding=s})
ace.define("ace/edit_session",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/config","ace/lib/event_emitter","ace/selection","ace/mode/text","ace/range","ace/document","ace/background_tokenizer","ace/search_highlight","ace/edit_session/folding","ace/edit_session/bracket_match"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/lang")
var s=e("./config")
var o=e("./lib/event_emitter").EventEmitter
var a=e("./selection").Selection
var l=e("./mode/text").Mode
var h=e("./range").Range
var c=e("./document").Document
var u=e("./background_tokenizer").BackgroundTokenizer
var d=e("./search_highlight").SearchHighlight
var f=function(e,t){this.$breakpoints=[]
this.$decorations=[]
this.$frontMarkers={}
this.$backMarkers={}
this.$markerId=1
this.$undoSelect=true
this.$foldData=[]
this.$foldData.toString=function(){return this.join("\n")}
this.on("changeFold",this.onChangeFold.bind(this))
this.$onChange=this.onChange.bind(this)
if(typeof e!="object"||!e.getLine)e=new c(e)
this.setDocument(e)
this.selection=new a(this)
s.resetOptions(this)
this.setMode(t)
s._emit("session",this)};(function(){n.implement(this,o)
this.setDocument=function(e){if(this.doc)this.doc.removeListener("change",this.$onChange)
this.doc=e
e.on("change",this.$onChange)
if(this.bgTokenizer)this.bgTokenizer.setDocument(this.getDocument())
this.resetCaches()}
this.getDocument=function(){return this.doc}
this.$resetRowCache=function(e){if(!e){this.$docRowCache=[]
this.$screenRowCache=[]
return}var t=this.$docRowCache.length
var i=this.$getRowCacheIndex(this.$docRowCache,e)+1
if(t>i){this.$docRowCache.splice(i,t)
this.$screenRowCache.splice(i,t)}}
this.$getRowCacheIndex=function(e,t){var i=0
var n=e.length-1
while(i<=n){var r=i+n>>1
var s=e[r]
if(t>s)i=r+1
else if(t<s)n=r-1
else return r}return i-1}
this.resetCaches=function(){this.$modified=true
this.$wrapData=[]
this.$rowLengthCache=[]
this.$resetRowCache(0)
if(this.bgTokenizer)this.bgTokenizer.start(0)}
this.onChangeFold=function(e){var t=e.data
this.$resetRowCache(t.start.row)}
this.onChange=function(e){var t=e.data
this.$modified=true
this.$resetRowCache(t.range.start.row)
var i=this.$updateInternalDataOnChange(e)
if(!this.$fromUndo&&this.$undoManager&&!t.ignore){this.$deltasDoc.push(t)
if(i&&i.length!=0){this.$deltasFold.push({action:"removeFolds",folds:i})}this.$informUndoManager.schedule()}this.bgTokenizer.$updateOnChange(t)
this._emit("change",e)}
this.setValue=function(e){this.doc.setValue(e)
this.selection.moveCursorTo(0,0)
this.selection.clearSelection()
this.$resetRowCache(0)
this.$deltas=[]
this.$deltasDoc=[]
this.$deltasFold=[]
this.getUndoManager().reset()}
this.getValue=this.toString=function(){return this.doc.getValue()}
this.getSelection=function(){return this.selection}
this.getState=function(e){return this.bgTokenizer.getState(e)}
this.getTokens=function(e){return this.bgTokenizer.getTokens(e)}
this.getTokenAt=function(e,t){var i=this.bgTokenizer.getTokens(e)
var n,r=0
if(t==null){s=i.length-1
r=this.getLine(e).length}else{for(var s=0;s<i.length;s++){r+=i[s].value.length
if(r>=t)break}}n=i[s]
if(!n)return null
n.index=s
n.start=r-n.value.length
return n}
this.setUndoManager=function(e){this.$undoManager=e
this.$deltas=[]
this.$deltasDoc=[]
this.$deltasFold=[]
if(this.$informUndoManager)this.$informUndoManager.cancel()
if(e){var t=this
this.$syncInformUndoManager=function(){t.$informUndoManager.cancel()
if(t.$deltasFold.length){t.$deltas.push({group:"fold",deltas:t.$deltasFold})
t.$deltasFold=[]}if(t.$deltasDoc.length){t.$deltas.push({group:"doc",deltas:t.$deltasDoc})
t.$deltasDoc=[]}if(t.$deltas.length>0){e.execute({action:"aceupdate",args:[t.$deltas,t],merge:t.mergeUndoDeltas})}t.mergeUndoDeltas=false
t.$deltas=[]}
this.$informUndoManager=r.delayedCall(this.$syncInformUndoManager)}}
this.markUndoGroup=function(){if(this.$syncInformUndoManager)this.$syncInformUndoManager()}
this.$defaultUndoManager={undo:function(){},redo:function(){},reset:function(){}}
this.getUndoManager=function(){return this.$undoManager||this.$defaultUndoManager}
this.getTabString=function(){if(this.getUseSoftTabs()){return r.stringRepeat(" ",this.getTabSize())}else{return"	"}}
this.setUseSoftTabs=function(e){this.setOption("useSoftTabs",e)}
this.getUseSoftTabs=function(){return this.$useSoftTabs&&!this.$mode.$indentWithTabs}
this.setTabSize=function(e){this.setOption("tabSize",e)}
this.getTabSize=function(){return this.$tabSize}
this.isTabStop=function(e){return this.$useSoftTabs&&e.column%this.$tabSize==0}
this.$overwrite=false
this.setOverwrite=function(e){this.setOption("overwrite",e)}
this.getOverwrite=function(){return this.$overwrite}
this.toggleOverwrite=function(){this.setOverwrite(!this.$overwrite)}
this.addGutterDecoration=function(e,t){if(!this.$decorations[e])this.$decorations[e]=""
this.$decorations[e]+=" "+t
this._emit("changeBreakpoint",{})}
this.removeGutterDecoration=function(e,t){this.$decorations[e]=(this.$decorations[e]||"").replace(" "+t,"")
this._emit("changeBreakpoint",{})}
this.getBreakpoints=function(){return this.$breakpoints}
this.setBreakpoints=function(e){this.$breakpoints=[]
for(var t=0;t<e.length;t++){this.$breakpoints[e[t]]="ace_breakpoint"}this._emit("changeBreakpoint",{})}
this.clearBreakpoints=function(){this.$breakpoints=[]
this._emit("changeBreakpoint",{})}
this.setBreakpoint=function(e,t){if(t===undefined)t="ace_breakpoint"
if(t)this.$breakpoints[e]=t
else delete this.$breakpoints[e]
this._emit("changeBreakpoint",{})}
this.clearBreakpoint=function(e){delete this.$breakpoints[e]
this._emit("changeBreakpoint",{})}
this.addMarker=function(e,t,i,n){var r=this.$markerId++
var s={range:e,type:i||"line",renderer:typeof i=="function"?i:null,clazz:t,inFront:!!n,id:r}
if(n){this.$frontMarkers[r]=s
this._emit("changeFrontMarker")}else{this.$backMarkers[r]=s
this._emit("changeBackMarker")}return r}
this.addDynamicMarker=function(e,t){if(!e.update)return
var i=this.$markerId++
e.id=i
e.inFront=!!t
if(t){this.$frontMarkers[i]=e
this._emit("changeFrontMarker")}else{this.$backMarkers[i]=e
this._emit("changeBackMarker")}return e}
this.removeMarker=function(e){var t=this.$frontMarkers[e]||this.$backMarkers[e]
if(!t)return
var i=t.inFront?this.$frontMarkers:this.$backMarkers
if(t){delete i[e]
this._emit(t.inFront?"changeFrontMarker":"changeBackMarker")}}
this.getMarkers=function(e){return e?this.$frontMarkers:this.$backMarkers}
this.highlight=function(e){if(!this.$searchHighlight){var t=new d(null,"ace_selected-word","text")
this.$searchHighlight=this.addDynamicMarker(t)}this.$searchHighlight.setRegexp(e)}
this.highlightLines=function(e,t,i,n){if(typeof t!="number"){i=t
t=e}if(!i)i="ace_step"
var r=new h(e,0,t,Infinity)
r.id=this.addMarker(r,i,"fullLine",n)
return r}
this.setAnnotations=function(e){this.$annotations=e
this._emit("changeAnnotation",{})}
this.getAnnotations=function(){return this.$annotations||[]}
this.clearAnnotations=function(){this.setAnnotations([])}
this.$detectNewLine=function(e){var t=e.match(/^.*?(\r?\n)/m)
if(t){this.$autoNewLine=t[1]}else{this.$autoNewLine="\n"}}
this.getWordRange=function(e,t){var i=this.getLine(e)
var n=false
if(t>0)n=!!i.charAt(t-1).match(this.tokenRe)
if(!n)n=!!i.charAt(t).match(this.tokenRe)
if(n)var r=this.tokenRe
else if(/^\s+$/.test(i.slice(t-1,t+1)))var r=/\s/
else var r=this.nonTokenRe
var s=t
if(s>0){do{s--}while(s>=0&&i.charAt(s).match(r))
s++}var o=t
while(o<i.length&&i.charAt(o).match(r)){o++}return new h(e,s,e,o)}
this.getAWordRange=function(e,t){var i=this.getWordRange(e,t)
var n=this.getLine(i.end.row)
while(n.charAt(i.end.column).match(/[ \t]/)){i.end.column+=1}return i}
this.setNewLineMode=function(e){this.doc.setNewLineMode(e)}
this.getNewLineMode=function(){return this.doc.getNewLineMode()}
this.setUseWorker=function(e){this.setOption("useWorker",e)}
this.getUseWorker=function(){return this.$useWorker}
this.onReloadTokenizer=function(e){var t=e.data
this.bgTokenizer.start(t.first)
this._emit("tokenizerUpdate",e)}
this.$modes={}
this.$mode=null
this.$modeId=null
this.setMode=function(e,t){if(e&&typeof e==="object"){if(e.getTokenizer)return this.$onChangeMode(e)
var i=e
var n=i.path}else{n=e||"ace/mode/text"}if(!this.$modes["ace/mode/text"])this.$modes["ace/mode/text"]=new l
if(this.$modes[n]&&!i){this.$onChangeMode(this.$modes[n])
t&&t()
return}this.$modeId=n
s.loadModule(["mode",n],function(e){if(this.$modeId!==n)return t&&t()
if(this.$modes[n]&&!i)return this.$onChangeMode(this.$modes[n])
if(e&&e.Mode){e=new e.Mode(i)
if(!i){this.$modes[n]=e
e.$id=n}this.$onChangeMode(e)
t&&t()}}.bind(this))
if(!this.$mode)this.$onChangeMode(this.$modes["ace/mode/text"],true)}
this.$onChangeMode=function(e,t){if(!t)this.$modeId=e.$id
if(this.$mode===e)return
this.$mode=e
this.$stopWorker()
if(this.$useWorker)this.$startWorker()
var i=e.getTokenizer()
if(i.addEventListener!==undefined){var n=this.onReloadTokenizer.bind(this)
i.addEventListener("update",n)}if(!this.bgTokenizer){this.bgTokenizer=new u(i)
var r=this
this.bgTokenizer.addEventListener("update",function(e){r._emit("tokenizerUpdate",e)})}else{this.bgTokenizer.setTokenizer(i)}this.bgTokenizer.setDocument(this.getDocument())
this.tokenRe=e.tokenRe
this.nonTokenRe=e.nonTokenRe
this.$options.wrapMethod.set.call(this,this.$wrapMethod)
if(!t){this.$setFolding(e.foldingRules)
this._emit("changeMode")
this.bgTokenizer.start(0)}}
this.$stopWorker=function(){if(this.$worker)this.$worker.terminate()
this.$worker=null}
this.$startWorker=function(){if(typeof Worker!=="undefined"&&!e.noWorker){try{this.$worker=this.$mode.createWorker(this)}catch(t){console.log("Could not load worker")
console.log(t)
this.$worker=null}}else this.$worker=null}
this.getMode=function(){return this.$mode}
this.$scrollTop=0
this.setScrollTop=function(e){if(this.$scrollTop===e||isNaN(e))return
this.$scrollTop=e
this._signal("changeScrollTop",e)}
this.getScrollTop=function(){return this.$scrollTop}
this.$scrollLeft=0
this.setScrollLeft=function(e){if(this.$scrollLeft===e||isNaN(e))return
this.$scrollLeft=e
this._signal("changeScrollLeft",e)}
this.getScrollLeft=function(){return this.$scrollLeft}
this.getScreenWidth=function(){this.$computeWidth()
return this.screenWidth}
this.$computeWidth=function(e){if(this.$modified||e){this.$modified=false
if(this.$useWrapMode)return this.screenWidth=this.$wrapLimit
var t=this.doc.getAllLines()
var i=this.$rowLengthCache
var n=0
var r=0
var s=this.$foldData[r]
var o=s?s.start.row:Infinity
var a=t.length
for(var l=0;l<a;l++){if(l>o){l=s.end.row+1
if(l>=a)break
s=this.$foldData[r++]
o=s?s.start.row:Infinity}if(i[l]==null)i[l]=this.$getStringScreenWidth(t[l])[0]
if(i[l]>n)n=i[l]}this.screenWidth=n}}
this.getLine=function(e){return this.doc.getLine(e)}
this.getLines=function(e,t){return this.doc.getLines(e,t)}
this.getLength=function(){return this.doc.getLength()}
this.getTextRange=function(e){return this.doc.getTextRange(e||this.selection.getRange())}
this.insert=function(e,t){return this.doc.insert(e,t)}
this.remove=function(e){return this.doc.remove(e)}
this.undoChanges=function(e,t){if(!e.length)return
this.$fromUndo=true
var i=null
for(var n=e.length-1;n!=-1;n--){var r=e[n]
if(r.group=="doc"){this.doc.revertDeltas(r.deltas)
i=this.$getUndoSelection(r.deltas,true,i)}else{r.deltas.forEach(function(e){this.addFolds(e.folds)},this)}}this.$fromUndo=false
i&&this.$undoSelect&&!t&&this.selection.setSelectionRange(i)
return i}
this.redoChanges=function(e,t){if(!e.length)return
this.$fromUndo=true
var i=null
for(var n=0;n<e.length;n++){var r=e[n]
if(r.group=="doc"){this.doc.applyDeltas(r.deltas)
i=this.$getUndoSelection(r.deltas,false,i)}}this.$fromUndo=false
i&&this.$undoSelect&&!t&&this.selection.setSelectionRange(i)
return i}
this.setUndoSelect=function(e){this.$undoSelect=e}
this.$getUndoSelection=function(e,t,i){function n(e){var i=e.action==="insertText"||e.action==="insertLines"
return t?!i:i}var r=e[0]
var s,o
var a=false
if(n(r)){s=h.fromPoints(r.range.start,r.range.end)
a=true}else{s=h.fromPoints(r.range.start,r.range.start)
a=false}for(var l=1;l<e.length;l++){r=e[l]
if(n(r)){o=r.range.start
if(s.compare(o.row,o.column)==-1){s.setStart(r.range.start)}o=r.range.end
if(s.compare(o.row,o.column)==1){s.setEnd(r.range.end)}a=true}else{o=r.range.start
if(s.compare(o.row,o.column)==-1){s=h.fromPoints(r.range.start,r.range.start)}a=false}}if(i!=null){if(h.comparePoints(i.start,s.start)==0){i.start.column+=s.end.column-s.start.column
i.end.column+=s.end.column-s.start.column}var c=i.compareRange(s)
if(c==1){s.setStart(i.start)}else if(c==-1){s.setEnd(i.end)}}return s}
this.replace=function(e,t){return this.doc.replace(e,t)}
this.moveText=function(e,t,i){var n=this.getTextRange(e)
var r=this.getFoldsInRange(e)
var s=h.fromPoints(t,t)
if(!i){this.remove(e)
var o=e.start.row-e.end.row
var a=o?-e.end.column:e.start.column-e.end.column
if(a){if(s.start.row==e.end.row&&s.start.column>e.end.column)s.start.column+=a
if(s.end.row==e.end.row&&s.end.column>e.end.column)s.end.column+=a}if(o&&s.start.row>=e.end.row){s.start.row+=o
s.end.row+=o}}s.end=this.insert(s.start,n)
if(r.length){var l=e.start
var c=s.start
var o=c.row-l.row
var a=c.column-l.column
this.addFolds(r.map(function(e){e=e.clone()
if(e.start.row==l.row)e.start.column+=a
if(e.end.row==l.row)e.end.column+=a
e.start.row+=o
e.end.row+=o
return e}))}return s}
this.indentRows=function(e,t,i){i=i.replace(/\t/g,this.getTabString())
for(var n=e;n<=t;n++)this.insert({row:n,column:0},i)}
this.outdentRows=function(e){var t=e.collapseRows()
var i=new h(0,0,0,0)
var n=this.getTabSize()
for(var r=t.start.row;r<=t.end.row;++r){var s=this.getLine(r)
i.start.row=r
i.end.row=r
for(var o=0;o<n;++o)if(s.charAt(o)!=" ")break
if(o<n&&s.charAt(o)=="	"){i.start.column=o
i.end.column=o+1}else{i.start.column=0
i.end.column=o}this.remove(i)}}
this.$moveLines=function(e,t,i){e=this.getRowFoldStart(e)
t=this.getRowFoldEnd(t)
if(i<0){var n=this.getRowFoldStart(e+i)
if(n<0)return 0
var r=n-e}else if(i>0){var n=this.getRowFoldEnd(t+i)
if(n>this.doc.getLength()-1)return 0
var r=n-t}else{e=this.$clipRowToDocument(e)
t=this.$clipRowToDocument(t)
var r=t-e+1}var s=new h(e,0,t,Number.MAX_VALUE)
var o=this.getFoldsInRange(s).map(function(e){e=e.clone()
e.start.row+=r
e.end.row+=r
return e})
var a=i==0?this.doc.getLines(e,t):this.doc.removeLines(e,t)
this.doc.insertLines(e+r,a)
o.length&&this.addFolds(o)
return r}
this.moveLinesUp=function(e,t){return this.$moveLines(e,t,-1)}
this.moveLinesDown=function(e,t){return this.$moveLines(e,t,1)}
this.duplicateLines=function(e,t){return this.$moveLines(e,t,0)}
this.$clipRowToDocument=function(e){return Math.max(0,Math.min(e,this.doc.getLength()-1))}
this.$clipColumnToRow=function(e,t){if(t<0)return 0
return Math.min(this.doc.getLine(e).length,t)}
this.$clipPositionToDocument=function(e,t){t=Math.max(0,t)
if(e<0){e=0
t=0}else{var i=this.doc.getLength()
if(e>=i){e=i-1
t=this.doc.getLine(i-1).length}else{t=Math.min(this.doc.getLine(e).length,t)}}return{row:e,column:t}}
this.$clipRangeToDocument=function(e){if(e.start.row<0){e.start.row=0
e.start.column=0}else{e.start.column=this.$clipColumnToRow(e.start.row,e.start.column)}var t=this.doc.getLength()-1
if(e.end.row>t){e.end.row=t
e.end.column=this.doc.getLine(t).length}else{e.end.column=this.$clipColumnToRow(e.end.row,e.end.column)}return e}
this.$wrapLimit=80
this.$useWrapMode=false
this.$wrapLimitRange={min:null,max:null}
this.setUseWrapMode=function(e){if(e!=this.$useWrapMode){this.$useWrapMode=e
this.$modified=true
this.$resetRowCache(0)
if(e){var t=this.getLength()
this.$wrapData=[]
for(var i=0;i<t;i++){this.$wrapData.push([])}this.$updateWrapData(0,t-1)}this._emit("changeWrapMode")}}
this.getUseWrapMode=function(){return this.$useWrapMode}
this.setWrapLimitRange=function(e,t){if(this.$wrapLimitRange.min!==e||this.$wrapLimitRange.max!==t){this.$wrapLimitRange={min:e,max:t}
this.$modified=true
this._emit("changeWrapMode")}}
this.adjustWrapLimit=function(e,t){var i=this.$wrapLimitRange
if(i.max<0)i={min:t,max:t}
var n=this.$constrainWrapLimit(e,i.min,i.max)
if(n!=this.$wrapLimit&&n>1){this.$wrapLimit=n
this.$modified=true
if(this.$useWrapMode){this.$updateWrapData(0,this.getLength()-1)
this.$resetRowCache(0)
this._emit("changeWrapLimit")}return true}return false}
this.$constrainWrapLimit=function(e,t,i){if(t)e=Math.max(t,e)
if(i)e=Math.min(i,e)
return e}
this.getWrapLimit=function(){return this.$wrapLimit}
this.setWrapLimit=function(e){this.setWrapLimitRange(e,e)}
this.getWrapLimitRange=function(){return{min:this.$wrapLimitRange.min,max:this.$wrapLimitRange.max}}
this.$updateInternalDataOnChange=function(e){var t=this.$useWrapMode
var i
var n=e.data.action
var r=e.data.range.start.row
var s=e.data.range.end.row
var o=e.data.range.start
var a=e.data.range.end
var l=null
if(n.indexOf("Lines")!=-1){if(n=="insertLines"){s=r+e.data.lines.length}else{s=r}i=e.data.lines?e.data.lines.length:s-r}else{i=s-r}this.$updating=true
if(i!=0){if(n.indexOf("remove")!=-1){this[t?"$wrapData":"$rowLengthCache"].splice(r,i)
var h=this.$foldData
l=this.getFoldsInRange(e.data.range)
this.removeFolds(l)
var c=this.getFoldLine(a.row)
var u=0
if(c){c.addRemoveChars(a.row,a.column,o.column-a.column)
c.shiftRow(-i)
var d=this.getFoldLine(r)
if(d&&d!==c){d.merge(c)
c=d}u=h.indexOf(c)+1}for(u;u<h.length;u++){var c=h[u]
if(c.start.row>=a.row){c.shiftRow(-i)}}s=r}else{var f
if(t){f=[r,0]
for(var g=0;g<i;g++)f.push([])
this.$wrapData.splice.apply(this.$wrapData,f)}else{f=Array(i)
f.unshift(r,0)
this.$rowLengthCache.splice.apply(this.$rowLengthCache,f)}var h=this.$foldData
var c=this.getFoldLine(r)
var u=0
if(c){var m=c.range.compareInside(o.row,o.column)
if(m==0){c=c.split(o.row,o.column)
c.shiftRow(i)
c.addRemoveChars(s,0,a.column-o.column)}else if(m==-1){c.addRemoveChars(r,0,a.column-o.column)
c.shiftRow(i)}u=h.indexOf(c)+1}for(u;u<h.length;u++){var c=h[u]
if(c.start.row>=r){c.shiftRow(i)}}}}else{i=Math.abs(e.data.range.start.column-e.data.range.end.column)
if(n.indexOf("remove")!=-1){l=this.getFoldsInRange(e.data.range)
this.removeFolds(l)
i=-i}var c=this.getFoldLine(r)
if(c){c.addRemoveChars(r,o.column,i)}}if(t&&this.$wrapData.length!=this.doc.getLength()){console.error("doc.getLength() and $wrapData.length have to be the same!")}this.$updating=false
if(t)this.$updateWrapData(r,s)
else this.$updateRowLengthCache(r,s)
return l}
this.$updateRowLengthCache=function(e,t,i){this.$rowLengthCache[e]=null
this.$rowLengthCache[t]=null}
this.$updateWrapData=function(e,t){var i=this.doc.getAllLines()
var n=this.getTabSize()
var r=this.$wrapData
var s=this.$wrapLimit
var o
var l
var h=e
t=Math.min(t,i.length-1)
while(h<=t){l=this.getFoldLine(h,l)
if(!l){o=this.$getDisplayTokens(i[h])
r[h]=this.$computeWrapSplits(o,s,n)
h++}else{o=[]
l.walk(function(e,t,n,r){var s
if(e!=null){s=this.$getDisplayTokens(e,o.length)
s[0]=a
for(var l=1;l<s.length;l++){s[l]=c}}else{s=this.$getDisplayTokens(i[t].substring(r,n),o.length)}o=o.concat(s)}.bind(this),l.end.row,i[l.end.row].length+1)
r[l.start.row]=this.$computeWrapSplits(o,s,n)
h=l.end.row+1}}}
var t=1,i=2,a=3,c=4,f=9,g=10,m=11,v=12
this.$computeWrapSplits=function(e,t){if(e.length==0){return[]}var i=[]
var n=e.length
var r=0,s=0
var o=this.$wrapAsCode
function l(t){var n=e.slice(r,t)
var o=n.length
n.join("").replace(/12/g,function(){o-=1}).replace(/2/g,function(){o-=1})
s+=o
i.push(s)
r=t}while(n-r>t){var h=r+t
if(e[h-1]>=g&&e[h]>=g){l(h)
continue}if(e[h]==a||e[h]==c){for(h;h!=r-1;h--){if(e[h]==a){break}}if(h>r){l(h)
continue}h=r+t
for(h;h<e.length;h++){if(e[h]!=c){break}}if(h==e.length){break}l(h)
continue}var u=Math.max(h-(o?10:t-(t>>2)),r-1)
while(h>u&&e[h]<a){h--}if(o){while(h>u&&e[h]<a){h--}while(h>u&&e[h]==f){h--}}else{while(h>u&&e[h]<g){h--}}if(h>u){l(++h)
continue}h=r+t
l(h)}return i}
this.$getDisplayTokens=function(e,n){var r=[]
var s
n=n||0
for(var o=0;o<e.length;o++){var a=e.charCodeAt(o)
if(a==9){s=this.getScreenTabSize(r.length+n)
r.push(m)
for(var l=1;l<s;l++){r.push(v)}}else if(a==32){r.push(g)}else if(a>39&&a<48||a>57&&a<64){r.push(f)}else if(a>=4352&&A(a)){r.push(t,i)}else{r.push(t)}}return r}
this.$getStringScreenWidth=function(e,t,i){if(t==0)return[0,0]
if(t==null)t=Infinity
i=i||0
var n,r
for(r=0;r<e.length;r++){n=e.charCodeAt(r)
if(n==9){i+=this.getScreenTabSize(i)}else if(n>=4352&&A(n)){i+=2}else{i+=1}if(i>t){break}}return[i,r]}
this.getRowLength=function(e){if(!this.$useWrapMode||!this.$wrapData[e]){return 1}else{return this.$wrapData[e].length+1}}
this.getScreenLastRowColumn=function(e){var t=this.screenToDocumentPosition(e,Number.MAX_VALUE)
return this.documentToScreenColumn(t.row,t.column)}
this.getDocumentLastRowColumn=function(e,t){var i=this.documentToScreenRow(e,t)
return this.getScreenLastRowColumn(i)}
this.getDocumentLastRowColumnPosition=function(e,t){var i=this.documentToScreenRow(e,t)
return this.screenToDocumentPosition(i,Number.MAX_VALUE/10)}
this.getRowSplitData=function(e){if(!this.$useWrapMode){return undefined}else{return this.$wrapData[e]}}
this.getScreenTabSize=function(e){return this.$tabSize-e%this.$tabSize}
this.screenToDocumentRow=function(e,t){return this.screenToDocumentPosition(e,t).row}
this.screenToDocumentColumn=function(e,t){return this.screenToDocumentPosition(e,t).column}
this.screenToDocumentPosition=function(e,t){if(e<0)return{row:0,column:0}
var i
var n=0
var r=0
var s
var o=0
var a=0
var l=this.$screenRowCache
var h=this.$getRowCacheIndex(l,e)
var c=l.length
if(c&&h>=0){var o=l[h]
var n=this.$docRowCache[h]
var u=e>l[c-1]}else{var u=!c}var d=this.getLength()-1
var f=this.getNextFoldLine(n)
var g=f?f.start.row:Infinity
while(o<=e){a=this.getRowLength(n)
if(o+a-1>=e||n>=d){break}else{o+=a
n++
if(n>g){n=f.end.row+1
f=this.getNextFoldLine(n,f)
g=f?f.start.row:Infinity}}if(u){this.$docRowCache.push(n)
this.$screenRowCache.push(o)}}if(f&&f.start.row<=n){i=this.getFoldDisplayLine(f)
n=f.start.row}else if(o+a<=e||n>d){return{row:d,column:this.getLine(d).length}}else{i=this.getLine(n)
f=null}if(this.$useWrapMode){var m=this.$wrapData[n]
if(m){s=m[e-o]
if(e>o&&m.length){r=m[e-o-1]||m[m.length-1]
i=i.substring(r)}}}r+=this.$getStringScreenWidth(i,t)[1]
if(this.$useWrapMode&&r>=s)r=s-1
if(f)return f.idxToPosition(r)
return{row:n,column:r}}
this.documentToScreenPosition=function(e,t){if(typeof t==="undefined")var i=this.$clipPositionToDocument(e.row,e.column)
else i=this.$clipPositionToDocument(e,t)
e=i.row
t=i.column
var n=0
var r=null
var s=null
s=this.getFoldAt(e,t,1)
if(s){e=s.start.row
t=s.start.column}var o,a=0
var l=this.$docRowCache
var h=this.$getRowCacheIndex(l,e)
var c=l.length
if(c&&h>=0){var a=l[h]
var n=this.$screenRowCache[h]
var u=e>l[c-1]}else{var u=!c}var d=this.getNextFoldLine(a)
var f=d?d.start.row:Infinity
while(a<e){if(a>=f){o=d.end.row+1
if(o>e)break
d=this.getNextFoldLine(o,d)
f=d?d.start.row:Infinity}else{o=a+1}n+=this.getRowLength(a)
a=o
if(u){this.$docRowCache.push(a)
this.$screenRowCache.push(n)}}var g=""
if(d&&a>=f){g=this.getFoldDisplayLine(d,e,t)
r=d.start.row}else{g=this.getLine(e).substring(0,t)
r=e}if(this.$useWrapMode){var m=this.$wrapData[r]
var v=0
while(g.length>=m[v]){n++
v++}g=g.substring(m[v-1]||0,g.length)}return{row:n,column:this.$getStringScreenWidth(g)[0]}}
this.documentToScreenColumn=function(e,t){return this.documentToScreenPosition(e,t).column}
this.documentToScreenRow=function(e,t){return this.documentToScreenPosition(e,t).row}
this.getScreenLength=function(){var e=0
var t=null
if(!this.$useWrapMode){e=this.getLength()
var i=this.$foldData
for(var n=0;n<i.length;n++){t=i[n]
e-=t.end.row-t.start.row}}else{var r=this.$wrapData.length
var s=0,n=0
var t=this.$foldData[n++]
var o=t?t.start.row:Infinity
while(s<r){e+=this.$wrapData[s].length+1
s++
if(s>o){s=t.end.row+1
t=this.$foldData[n++]
o=t?t.start.row:Infinity}}}return e}
function A(e){if(e<4352)return false
return e>=4352&&e<=4447||e>=4515&&e<=4519||e>=4602&&e<=4607||e>=9001&&e<=9002||e>=11904&&e<=11929||e>=11931&&e<=12019||e>=12032&&e<=12245||e>=12272&&e<=12283||e>=12288&&e<=12350||e>=12353&&e<=12438||e>=12441&&e<=12543||e>=12549&&e<=12589||e>=12593&&e<=12686||e>=12688&&e<=12730||e>=12736&&e<=12771||e>=12784&&e<=12830||e>=12832&&e<=12871||e>=12880&&e<=13054||e>=13056&&e<=19903||e>=19968&&e<=42124||e>=42128&&e<=42182||e>=43360&&e<=43388||e>=44032&&e<=55203||e>=55216&&e<=55238||e>=55243&&e<=55291||e>=63744&&e<=64255||e>=65040&&e<=65049||e>=65072&&e<=65106||e>=65108&&e<=65126||e>=65128&&e<=65131||e>=65281&&e<=65376||e>=65504&&e<=65510}}).call(f.prototype)
e("./edit_session/folding").Folding.call(f.prototype)
e("./edit_session/bracket_match").BracketMatch.call(f.prototype)
s.defineOptions(f.prototype,"session",{wrap:{set:function(e){if(!e||e=="off")e=false
else if(e=="free")e=true
else if(e=="printMargin")e=-1
else if(typeof e=="string")e=parseInt(e,10)||false
if(this.$wrap==e)return
if(!e){this.setUseWrapMode(false)}else{var t=typeof e=="number"?e:null
this.setWrapLimitRange(t,t)
this.setUseWrapMode(true)}this.$wrap=e},get:function(){return this.getUseWrapMode()?this.getWrapLimitRange().min||"free":"off"},handlesSet:true},wrapMethod:{set:function(e){if(e=="auto")this.$wrapAsCode=this.$mode.type!="text"
else this.$wrapAsCode=e!="text"},initialValue:"auto"},firstLineNumber:{set:function(){this._emit("changeBreakpoint")},initialValue:1},useWorker:{set:function(e){this.$useWorker=e
this.$stopWorker()
if(e)this.$startWorker()},initialValue:true},useSoftTabs:{initialValue:true},tabSize:{set:function(e){if(isNaN(e)||this.$tabSize===e)return
this.$modified=true
this.$rowLengthCache=[]
this.$tabSize=e
this._emit("changeTabSize")},initialValue:4,handlesSet:true},overwrite:{set:function(e){this._emit("changeOverwrite")},initialValue:false},newLineMode:{set:function(e){this.doc.setNewLineMode(e)},get:function(){return this.doc.getNewLineMode()},handlesSet:true}})
t.EditSession=f})
ace.define("ace/selection",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter","ace/range"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/lang")
var s=e("./lib/event_emitter").EventEmitter
var o=e("./range").Range
var a=function(e){this.session=e
this.doc=e.getDocument()
this.clearSelection()
this.lead=this.selectionLead=this.doc.createAnchor(0,0)
this.anchor=this.selectionAnchor=this.doc.createAnchor(0,0)
var t=this
this.lead.on("change",function(e){t._emit("changeCursor")
if(!t.$isEmpty)t._emit("changeSelection")
if(!t.$keepDesiredColumnOnChange&&e.old.column!=e.value.column)t.$desiredColumn=null})
this.selectionAnchor.on("change",function(){if(!t.$isEmpty)t._emit("changeSelection")})};(function(){n.implement(this,s)
this.isEmpty=function(){return this.$isEmpty||this.anchor.row==this.lead.row&&this.anchor.column==this.lead.column}
this.isMultiLine=function(){if(this.isEmpty()){return false}return this.getRange().isMultiLine()}
this.getCursor=function(){return this.lead.getPosition()}
this.setSelectionAnchor=function(e,t){this.anchor.setPosition(e,t)
if(this.$isEmpty){this.$isEmpty=false
this._emit("changeSelection")}}
this.getSelectionAnchor=function(){if(this.$isEmpty)return this.getSelectionLead()
else return this.anchor.getPosition()}
this.getSelectionLead=function(){return this.lead.getPosition()}
this.shiftSelection=function(e){if(this.$isEmpty){this.moveCursorTo(this.lead.row,this.lead.column+e)
return}var t=this.getSelectionAnchor()
var i=this.getSelectionLead()
var n=this.isBackwards()
if(!n||t.column!==0)this.setSelectionAnchor(t.row,t.column+e)
if(n||i.column!==0){this.$moveSelection(function(){this.moveCursorTo(i.row,i.column+e)})}}
this.isBackwards=function(){var e=this.anchor
var t=this.lead
return e.row>t.row||e.row==t.row&&e.column>t.column}
this.getRange=function(){var e=this.anchor
var t=this.lead
if(this.isEmpty())return o.fromPoints(t,t)
if(this.isBackwards()){return o.fromPoints(t,e)}else{return o.fromPoints(e,t)}}
this.clearSelection=function(){if(!this.$isEmpty){this.$isEmpty=true
this._emit("changeSelection")}}
this.selectAll=function(){var e=this.doc.getLength()-1
this.setSelectionAnchor(0,0)
this.moveCursorTo(e,this.doc.getLine(e).length)}
this.setRange=this.setSelectionRange=function(e,t){if(t){this.setSelectionAnchor(e.end.row,e.end.column)
this.selectTo(e.start.row,e.start.column)}else{this.setSelectionAnchor(e.start.row,e.start.column)
this.selectTo(e.end.row,e.end.column)}if(this.getRange().isEmpty())this.$isEmpty=true
this.$desiredColumn=null}
this.$moveSelection=function(e){var t=this.lead
if(this.$isEmpty)this.setSelectionAnchor(t.row,t.column)
e.call(this)}
this.selectTo=function(e,t){this.$moveSelection(function(){this.moveCursorTo(e,t)})}
this.selectToPosition=function(e){this.$moveSelection(function(){this.moveCursorToPosition(e)})}
this.selectUp=function(){this.$moveSelection(this.moveCursorUp)}
this.selectDown=function(){this.$moveSelection(this.moveCursorDown)}
this.selectRight=function(){this.$moveSelection(this.moveCursorRight)}
this.selectLeft=function(){this.$moveSelection(this.moveCursorLeft)}
this.selectLineStart=function(){this.$moveSelection(this.moveCursorLineStart)}
this.selectLineEnd=function(){this.$moveSelection(this.moveCursorLineEnd)}
this.selectFileEnd=function(){this.$moveSelection(this.moveCursorFileEnd)}
this.selectFileStart=function(){this.$moveSelection(this.moveCursorFileStart)}
this.selectWordRight=function(){this.$moveSelection(this.moveCursorWordRight)}
this.selectWordLeft=function(){this.$moveSelection(this.moveCursorWordLeft)}
this.getWordRange=function(e,t){if(typeof t=="undefined"){var i=e||this.lead
e=i.row
t=i.column}return this.session.getWordRange(e,t)}
this.selectWord=function(){this.setSelectionRange(this.getWordRange())}
this.selectAWord=function(){var e=this.getCursor()
var t=this.session.getAWordRange(e.row,e.column)
this.setSelectionRange(t)}
this.getLineRange=function(e,t){var i=typeof e=="number"?e:this.lead.row
var n
var r=this.session.getFoldLine(i)
if(r){i=r.start.row
n=r.end.row}else{n=i}if(t===true)return new o(i,0,n,this.session.getLine(n).length)
else return new o(i,0,n+1,0)}
this.selectLine=function(){this.setSelectionRange(this.getLineRange())}
this.moveCursorUp=function(){this.moveCursorBy(-1,0)}
this.moveCursorDown=function(){this.moveCursorBy(1,0)}
this.moveCursorLeft=function(){var e=this.lead.getPosition(),t
if(t=this.session.getFoldAt(e.row,e.column,-1)){this.moveCursorTo(t.start.row,t.start.column)}else if(e.column==0){if(e.row>0){this.moveCursorTo(e.row-1,this.doc.getLine(e.row-1).length)}}else{var i=this.session.getTabSize()
if(this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(e.column-i,e.column).split(" ").length-1==i)this.moveCursorBy(0,-i)
else this.moveCursorBy(0,-1)}}
this.moveCursorRight=function(){var e=this.lead.getPosition(),t
if(t=this.session.getFoldAt(e.row,e.column,1)){this.moveCursorTo(t.end.row,t.end.column)}else if(this.lead.column==this.doc.getLine(this.lead.row).length){if(this.lead.row<this.doc.getLength()-1){this.moveCursorTo(this.lead.row+1,0)}}else{var i=this.session.getTabSize()
var e=this.lead
if(this.session.isTabStop(e)&&this.doc.getLine(e.row).slice(e.column,e.column+i).split(" ").length-1==i)this.moveCursorBy(0,i)
else this.moveCursorBy(0,1)}}
this.moveCursorLineStart=function(){var e=this.lead.row
var t=this.lead.column
var i=this.session.documentToScreenRow(e,t)
var n=this.session.screenToDocumentPosition(i,0)
var r=this.session.getDisplayLine(e,null,n.row,n.column)
var s=r.match(/^\s*/)
if(s[0].length!=t&&!this.session.$useEmacsStyleLineStart)n.column+=s[0].length
this.moveCursorToPosition(n)}
this.moveCursorLineEnd=function(){var e=this.lead
var t=this.session.getDocumentLastRowColumnPosition(e.row,e.column)
if(this.lead.column==t.column){var i=this.session.getLine(t.row)
if(t.column==i.length){var n=i.search(/\s+$/)
if(n>0)t.column=n}}this.moveCursorTo(t.row,t.column)}
this.moveCursorFileEnd=function(){var e=this.doc.getLength()-1
var t=this.doc.getLine(e).length
this.moveCursorTo(e,t)}
this.moveCursorFileStart=function(){this.moveCursorTo(0,0)}
this.moveCursorLongWordRight=function(){var e=this.lead.row
var t=this.lead.column
var i=this.doc.getLine(e)
var n=i.substring(t)
var r
this.session.nonTokenRe.lastIndex=0
this.session.tokenRe.lastIndex=0
var s=this.session.getFoldAt(e,t,1)
if(s){this.moveCursorTo(s.end.row,s.end.column)
return}if(r=this.session.nonTokenRe.exec(n)){t+=this.session.nonTokenRe.lastIndex
this.session.nonTokenRe.lastIndex=0
n=i.substring(t)}if(t>=i.length){this.moveCursorTo(e,i.length)
this.moveCursorRight()
if(e<this.doc.getLength()-1)this.moveCursorWordRight()
return}if(r=this.session.tokenRe.exec(n)){t+=this.session.tokenRe.lastIndex
this.session.tokenRe.lastIndex=0}this.moveCursorTo(e,t)}
this.moveCursorLongWordLeft=function(){var e=this.lead.row
var t=this.lead.column
var i
if(i=this.session.getFoldAt(e,t,-1)){this.moveCursorTo(i.start.row,i.start.column)
return}var n=this.session.getFoldStringAt(e,t,-1)
if(n==null){n=this.doc.getLine(e).substring(0,t)}var s=r.stringReverse(n)
var o
this.session.nonTokenRe.lastIndex=0
this.session.tokenRe.lastIndex=0
if(o=this.session.nonTokenRe.exec(s)){t-=this.session.nonTokenRe.lastIndex
s=s.slice(this.session.nonTokenRe.lastIndex)
this.session.nonTokenRe.lastIndex=0}if(t<=0){this.moveCursorTo(e,0)
this.moveCursorLeft()
if(e>0)this.moveCursorWordLeft()
return}if(o=this.session.tokenRe.exec(s)){t-=this.session.tokenRe.lastIndex
this.session.tokenRe.lastIndex=0}this.moveCursorTo(e,t)}
this.$shortWordEndIndex=function(e){var t,i=0,n
var r=/\s/
var s=this.session.tokenRe
s.lastIndex=0
if(t=this.session.tokenRe.exec(e)){i=this.session.tokenRe.lastIndex}else{while((n=e[i])&&r.test(n))i++
if(i<1){s.lastIndex=0
while((n=e[i])&&!s.test(n)){s.lastIndex=0
i++
if(r.test(n)){if(i>2){i--
break}else{while((n=e[i])&&r.test(n))i++
if(i>2)break}}}}}s.lastIndex=0
return i}
this.moveCursorShortWordRight=function(){var e=this.lead.row
var t=this.lead.column
var i=this.doc.getLine(e)
var n=i.substring(t)
var r=this.session.getFoldAt(e,t,1)
if(r)return this.moveCursorTo(r.end.row,r.end.column)
if(t==i.length){var s=this.doc.getLength()
do{e++
n=this.doc.getLine(e)}while(e<s&&/^\s*$/.test(n))
if(!/^\s+/.test(n))n=""
t=0}var o=this.$shortWordEndIndex(n)
this.moveCursorTo(e,t+o)}
this.moveCursorShortWordLeft=function(){var e=this.lead.row
var t=this.lead.column
var i
if(i=this.session.getFoldAt(e,t,-1))return this.moveCursorTo(i.start.row,i.start.column)
var n=this.session.getLine(e).substring(0,t)
if(t==0){do{e--
n=this.doc.getLine(e)}while(e>0&&/^\s*$/.test(n))
t=n.length
if(!/\s+$/.test(n))n=""}var s=r.stringReverse(n)
var o=this.$shortWordEndIndex(s)
return this.moveCursorTo(e,t-o)}
this.moveCursorWordRight=function(){if(this.session.$selectLongWords)this.moveCursorLongWordRight()
else this.moveCursorShortWordRight()}
this.moveCursorWordLeft=function(){if(this.session.$selectLongWords)this.moveCursorLongWordLeft()
else this.moveCursorShortWordLeft()}
this.moveCursorBy=function(e,t){var i=this.session.documentToScreenPosition(this.lead.row,this.lead.column)
if(t===0){if(this.$desiredColumn)i.column=this.$desiredColumn
else this.$desiredColumn=i.column}var n=this.session.screenToDocumentPosition(i.row+e,i.column)
this.moveCursorTo(n.row,n.column+t,t===0)}
this.moveCursorToPosition=function(e){this.moveCursorTo(e.row,e.column)}
this.moveCursorTo=function(e,t,i){var n=this.session.getFoldAt(e,t,1)
if(n){e=n.start.row
t=n.start.column}this.$keepDesiredColumnOnChange=true
this.lead.setPosition(e,t)
this.$keepDesiredColumnOnChange=false
if(!i)this.$desiredColumn=null}
this.moveCursorToScreen=function(e,t,i){var n=this.session.screenToDocumentPosition(e,t)
this.moveCursorTo(n.row,n.column,i)}
this.detach=function(){this.lead.detach()
this.anchor.detach()
this.session=this.doc=null}
this.fromOrientedRange=function(e){this.setSelectionRange(e,e.cursor==e.start)
this.$desiredColumn=e.desiredColumn||this.$desiredColumn}
this.toOrientedRange=function(e){var t=this.getRange()
if(e){e.start.column=t.start.column
e.start.row=t.start.row
e.end.column=t.end.column
e.end.row=t.end.row}else{e=t}e.cursor=this.isBackwards()?e.start:e.end
e.desiredColumn=this.$desiredColumn
return e}
this.toJSON=function(){if(this.rangeCount){var e=this.ranges.map(function(e){var t=e.clone()
t.isBackwards=e.cursor==e.start
return t})}else{var e=this.getRange()
e.isBackwards=this.isBackwards()}return e}
this.fromJSON=function(e){if(e.start==undefined){if(this.rangeList){this.toSingleRange(e[0])
for(var t=e.length;t--;){var i=o.fromPoints(e[t].start,e[t].end)
if(e.isBackwards)i.cursor=i.start
this.addRange(i,true)}return}else e=e[0]}if(this.rangeList)this.toSingleRange(e)
this.setSelectionRange(e,e.isBackwards)}
this.isEqual=function(e){if((e.length||this.rangeCount)&&e.length!=this.rangeCount)return false
if(!e.length||!this.ranges)return this.getRange().isEqual(e)
for(var t=this.ranges.length;t--;){if(!this.ranges[t].isEqual(e[t]))return false}return true}}).call(a.prototype)
t.Selection=a})
ace.define("ace/range",["require","exports","module"],function(e,t,i){var n=function(e,t){return e.row-t.row||e.column-t.column}
var r=function(e,t,i,n){this.start={row:e,column:t}
this.end={row:i,column:n}};(function(){this.isEqual=function(e){return this.start.row===e.start.row&&this.end.row===e.end.row&&this.start.column===e.start.column&&this.end.column===e.end.column}
this.toString=function(){return"Range: ["+this.start.row+"/"+this.start.column+"] -> ["+this.end.row+"/"+this.end.column+"]"}
this.contains=function(e,t){return this.compare(e,t)==0}
this.compareRange=function(e){var t,i=e.end,n=e.start
t=this.compare(i.row,i.column)
if(t==1){t=this.compare(n.row,n.column)
if(t==1){return 2}else if(t==0){return 1}else{return 0}}else if(t==-1){return-2}else{t=this.compare(n.row,n.column)
if(t==-1){return-1}else if(t==1){return 42}else{return 0}}}
this.comparePoint=function(e){return this.compare(e.row,e.column)}
this.containsRange=function(e){return this.comparePoint(e.start)==0&&this.comparePoint(e.end)==0}
this.intersects=function(e){var t=this.compareRange(e)
return t==-1||t==0||t==1}
this.isEnd=function(e,t){return this.end.row==e&&this.end.column==t}
this.isStart=function(e,t){return this.start.row==e&&this.start.column==t}
this.setStart=function(e,t){if(typeof e=="object"){this.start.column=e.column
this.start.row=e.row}else{this.start.row=e
this.start.column=t}}
this.setEnd=function(e,t){if(typeof e=="object"){this.end.column=e.column
this.end.row=e.row}else{this.end.row=e
this.end.column=t}}
this.inside=function(e,t){if(this.compare(e,t)==0){if(this.isEnd(e,t)||this.isStart(e,t)){return false}else{return true}}return false}
this.insideStart=function(e,t){if(this.compare(e,t)==0){if(this.isEnd(e,t)){return false}else{return true}}return false}
this.insideEnd=function(e,t){if(this.compare(e,t)==0){if(this.isStart(e,t)){return false}else{return true}}return false}
this.compare=function(e,t){if(!this.isMultiLine()){if(e===this.start.row){return t<this.start.column?-1:t>this.end.column?1:0}}if(e<this.start.row)return-1
if(e>this.end.row)return 1
if(this.start.row===e)return t>=this.start.column?0:-1
if(this.end.row===e)return t<=this.end.column?0:1
return 0}
this.compareStart=function(e,t){if(this.start.row==e&&this.start.column==t){return-1}else{return this.compare(e,t)}}
this.compareEnd=function(e,t){if(this.end.row==e&&this.end.column==t){return 1}else{return this.compare(e,t)}}
this.compareInside=function(e,t){if(this.end.row==e&&this.end.column==t){return 1}else if(this.start.row==e&&this.start.column==t){return-1}else{return this.compare(e,t)}}
this.clipRows=function(e,t){if(this.end.row>t)var i={row:t+1,column:0}
else if(this.end.row<e)var i={row:e,column:0}
if(this.start.row>t)var n={row:t+1,column:0}
else if(this.start.row<e)var n={row:e,column:0}
return r.fromPoints(n||this.start,i||this.end)}
this.extend=function(e,t){var i=this.compare(e,t)
if(i==0)return this
else if(i==-1)var n={row:e,column:t}
else var s={row:e,column:t}
return r.fromPoints(n||this.start,s||this.end)}
this.isEmpty=function(){return this.start.row===this.end.row&&this.start.column===this.end.column}
this.isMultiLine=function(){return this.start.row!==this.end.row}
this.clone=function(){return r.fromPoints(this.start,this.end)}
this.collapseRows=function(){if(this.end.column==0)return new r(this.start.row,0,Math.max(this.start.row,this.end.row-1),0)
else return new r(this.start.row,0,this.end.row,0)}
this.toScreenRange=function(e){var t=e.documentToScreenPosition(this.start)
var i=e.documentToScreenPosition(this.end)
return new r(t.row,t.column,i.row,i.column)}
this.moveBy=function(e,t){this.start.row+=e
this.start.column+=t
this.end.row+=e
this.end.column+=t}}).call(r.prototype)
r.fromPoints=function(e,t){return new r(e.row,e.column,t.row,t.column)}
r.comparePoints=n
r.comparePoints=function(e,t){return e.row-t.row||e.column-t.column}
t.Range=r})
ace.define("ace/mode/text",["require","exports","module","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/behaviour","ace/unicode","ace/lib/lang","ace/token_iterator","ace/range"],function(e,t,i){var n=e("../tokenizer").Tokenizer
var r=e("./text_highlight_rules").TextHighlightRules
var s=e("./behaviour").Behaviour
var o=e("../unicode")
var a=e("../lib/lang")
var l=e("../token_iterator").TokenIterator
var h=e("../range").Range
var c=function(){this.HighlightRules=r
this.$behaviour=new s};(function(){this.tokenRe=new RegExp("^["+o.packages.L+o.packages.Mn+o.packages.Mc+o.packages.Nd+o.packages.Pc+"\\$_]+","g")
this.nonTokenRe=new RegExp("^(?:[^"+o.packages.L+o.packages.Mn+o.packages.Mc+o.packages.Nd+o.packages.Pc+"\\$_]|s])+","g")
this.getTokenizer=function(){if(!this.$tokenizer){this.$highlightRules=new this.HighlightRules
this.$tokenizer=new n(this.$highlightRules.getRules())}return this.$tokenizer}
this.lineCommentStart=""
this.blockComment=""
this.toggleCommentLines=function(e,t,i,n){var r=t.doc
var s=true
var o=true
var l=Infinity
var h=t.getTabSize()
var c=false
if(!this.lineCommentStart){if(!this.blockComment)return false
var u=this.blockComment.start
var d=this.blockComment.end
var f=new RegExp("^(\\s*)(?:"+a.escapeRegExp(u)+")")
var g=new RegExp("(?:"+a.escapeRegExp(d)+")\\s*$")
var m=function(e,t){if(A(e,t))return
if(!s||/\S/.test(e)){r.insertInLine({row:t,column:e.length},d)
r.insertInLine({row:t,column:l},u)}}
var v=function(e,t){var i
if(i=e.match(g))r.removeInLine(t,e.length-i[0].length,e.length)
if(i=e.match(f))r.removeInLine(t,i[1].length,i[0].length)}
var A=function(e,i){if(f.test(e))return true
var n=t.getTokens(i)
for(var r=0;r<n.length;r++){if(n[r].type==="comment")return true}}}else{if(Array.isArray(this.lineCommentStart)){var f=this.lineCommentStart.map(a.escapeRegExp).join("|")
var u=this.lineCommentStart[0]}else{var f=a.escapeRegExp(this.lineCommentStart)
var u=this.lineCommentStart}f=new RegExp("^(\\s*)(?:"+f+") ?")
c=t.getUseSoftTabs()
var v=function(e,t){var i=e.match(f)
if(!i)return
var n=i[1].length,s=i[0].length
if(!C(e,n,s)&&i[0][s-1]==" ")s--
r.removeInLine(t,n,s)}
var p=u+" "
var m=function(e,t){if(!s||/\S/.test(e)){if(C(e,l,l))r.insertInLine({row:t,column:l},p)
else r.insertInLine({row:t,column:l},u)}}
var A=function(e,t){return f.test(e)}
var C=function(e,t,i){var n=0
while(t--&&e.charAt(t)==" ")n++
if(n%h!=0)return false
var n=0
while(e.charAt(i++)==" ")n++
if(h>2)return n%h!=h-1
else return n%h==0
return true}}function F(e){for(var t=i;t<=n;t++)e(r.getLine(t),t)}var E=Infinity
F(function(e,t){var i=e.search(/\S/)
if(i!==-1){if(i<l)l=i
if(o&&!A(e,t))o=false}else if(E>e.length){E=e.length}})
if(l==Infinity){l=E
s=false
o=false}if(c&&l%h!=0)l=Math.floor(l/h)*h
F(o?v:m)}
this.toggleBlockComment=function(e,t,i,n){var r=this.blockComment
if(!r)return
if(!r.start&&r[0])r=r[0]
var s=new l(t,n.row,n.column)
var o=s.getCurrentToken()
var a=t.selection
var c=t.selection.toOrientedRange()
var u,d
if(o&&/comment/.test(o.type)){var f,g
while(o&&/comment/.test(o.type)){var m=o.value.indexOf(r.start)
if(m!=-1){var v=s.getCurrentTokenRow()
var A=s.getCurrentTokenColumn()+m
f=new h(v,A,v,A+r.start.length)
break}o=s.stepBackward()}var s=new l(t,n.row,n.column)
var o=s.getCurrentToken()
while(o&&/comment/.test(o.type)){var m=o.value.indexOf(r.end)
if(m!=-1){var v=s.getCurrentTokenRow()
var A=s.getCurrentTokenColumn()+m
g=new h(v,A,v,A+r.end.length)
break}o=s.stepForward()}if(g)t.remove(g)
if(f){t.remove(f)
u=f.start.row
d=-r.start.length}}else{d=r.start.length
u=i.start.row
t.insert(i.end,r.end)
t.insert(i.start,r.start)}if(c.start.row==u)c.start.column+=d
if(c.end.row==u)c.end.column+=d
t.selection.fromOrientedRange(c)}
this.getNextLineIndent=function(e,t,i){return this.$getIndent(t)}
this.checkOutdent=function(e,t,i){return false}
this.autoOutdent=function(e,t,i){}
this.$getIndent=function(e){return e.match(/^\s*/)[0]}
this.createWorker=function(e){return null}
this.createModeDelegates=function(e){this.$embeds=[]
this.$modes={}
for(var t in e){if(e[t]){this.$embeds.push(t)
this.$modes[t]=new e[t]}}var i=["toggleCommentLines","getNextLineIndent","checkOutdent","autoOutdent","transformAction","getCompletions"]
for(var t=0;t<i.length;t++){(function(e){var n=i[t]
var r=e[n]
e[i[t]]=function(){return this.$delegator(n,arguments,r)}})(this)}}
this.$delegator=function(e,t,i){var n=t[0]
if(typeof n!="string")n=n[0]
for(var r=0;r<this.$embeds.length;r++){if(!this.$modes[this.$embeds[r]])continue
var s=n.split(this.$embeds[r])
if(!s[0]&&s[1]){t[0]=s[1]
var o=this.$modes[this.$embeds[r]]
return o[e].apply(o,t)}}var a=i.apply(this,t)
return i?a:undefined}
this.transformAction=function(e,t,i,n,r){if(this.$behaviour){var s=this.$behaviour.getBehaviours()
for(var o in s){if(s[o][t]){var a=s[o][t].apply(this,arguments)
if(a){return a}}}}}
this.getKeywords=function(e){if(!this.completionKeywords){var t=this.$tokenizer.rules
var i=[]
for(var n in t){var r=t[n]
for(var s=0,o=r.length;s<o;s++){if(typeof r[s].token==="string"){if(/keyword|support|storage/.test(r[s].token))i.push(r[s].regex)}else if(typeof r[s].token==="object"){for(var a=0,l=r[s].token.length;a<l;a++){if(/keyword|support|storage/.test(r[s].token[a])){var n=r[s].regex.match(/\(.+?\)/g)[a]
i.push(n.substr(1,n.length-2))}}}}}this.completionKeywords=i}if(!e)return this.$keywordList
return i.concat(this.$keywordList||[])}
this.$createKeywordList=function(){if(!this.$highlightRules)this.getTokenizer()
return this.$keywordList=this.$highlightRules.$keywordList||[]}
this.getCompletions=function(e,t,i,n){var r=this.$keywordList||this.$createKeywordList()
return r.map(function(e){return{name:e,value:e,score:0,meta:"keyword"}})}}).call(c.prototype)
t.Mode=c})
ace.define("ace/tokenizer",["require","exports","module"],function(e,t,i){var n=1e3
var r=function(e){this.states=e
this.regExps={}
this.matchMappings={}
for(var t in this.states){var i=this.states[t]
var n=[]
var r=0
var s=this.matchMappings[t]={defaultToken:"text"}
var o="g"
var a=[]
for(var l=0;l<i.length;l++){var h=i[l]
if(h.defaultToken)s.defaultToken=h.defaultToken
if(h.caseInsensitive)o="gi"
if(h.regex==null)continue
if(h.regex instanceof RegExp)h.regex=h.regex.toString().slice(1,-1)
var c=h.regex
var u=new RegExp("(?:("+c+")|(.))").exec("a").length-2
if(Array.isArray(h.token)){if(h.token.length==1||u==1){h.token=h.token[0]}else if(u-1!=h.token.length){throw new Error("number of classes and regexp groups in '"+h.token+"'\n'"+h.regex+"' doesn't match\n"+(u-1)+"!="+h.token.length)}else{h.tokenArray=h.token
h.token=null
h.onMatch=this.$arrayTokens}}else if(typeof h.token=="function"&&!h.onMatch){if(u>1)h.onMatch=this.$applyToken
else h.onMatch=h.token}if(u>1){if(/\\\d/.test(h.regex)){c=h.regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+r+1)})}else{u=1
c=this.removeCapturingGroups(h.regex)}if(!h.splitRegex&&typeof h.token!="string")a.push(h)}s[r]=l
r+=u
n.push(c)
if(!h.onMatch)h.onMatch=null
h.__proto__=null}a.forEach(function(e){e.splitRegex=this.createSplitterRegexp(e.regex,o)},this)
this.regExps[t]=new RegExp("("+n.join(")|(")+")|($)",o)}};(function(){this.$setMaxTokenCount=function(e){n=e|0}
this.$applyToken=function(e){var t=this.splitRegex.exec(e).slice(1)
var i=this.token.apply(this,t)
if(typeof i==="string")return[{type:i,value:e}]
var n=[]
for(var r=0,s=i.length;r<s;r++){if(t[r])n[n.length]={type:i[r],value:t[r]}}return n},this.$arrayTokens=function(e){if(!e)return[]
var t=this.splitRegex.exec(e)
if(!t)return"text"
var i=[]
var n=this.tokenArray
for(var r=0,s=n.length;r<s;r++){if(t[r+1])i[i.length]={type:n[r],value:t[r+1]}}return i}
this.removeCapturingGroups=function(e){var t=e.replace(/\[(?:\\.|[^\]])*?\]|\\.|\(\?[:=!]|(\()/g,function(e,t){return t?"(?:":e})
return t}
this.createSplitterRegexp=function(e,t){if(e.indexOf("(?=")!=-1){var i=0
var n=false
var r={}
e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g,function(e,t,s,o,a,l){if(n){n=a!="]"}else if(a){n=true}else if(o){if(i==r.stack){r.end=l+1
r.stack=-1}i--}else if(s){i++
if(s.length!=1){r.stack=i
r.start=l}}return e})
if(r.end!=null&&/^\)*$/.test(e.substr(r.end)))e=e.substring(0,r.start)+e.substr(r.end)}return new RegExp(e,(t||"").replace("g",""))}
this.getLineTokens=function(e,t){if(t&&typeof t!="string"){var i=t.slice(0)
t=i[0]}else var i=[]
var r=t||"start"
var s=this.states[r]
var o=this.matchMappings[r]
var a=this.regExps[r]
a.lastIndex=0
var l,h=[]
var c=0
var u={type:null,value:""}
while(l=a.exec(e)){var d=o.defaultToken
var f=null
var g=l[0]
var m=a.lastIndex
if(m-g.length>c){var v=e.substring(c,m-g.length)
if(u.type==d){u.value+=v}else{if(u.type)h.push(u)
u={type:d,value:v}}}for(var A=0;A<l.length-2;A++){if(l[A+1]===undefined)continue
f=s[o[A]]
if(f.onMatch)d=f.onMatch(g,r,i)
else d=f.token
if(f.next){if(typeof f.next=="string")r=f.next
else r=f.next(r,i)
s=this.states[r]
if(!s){window.console&&console.error&&console.error(r,"doesn't exist")
r="start"
s=this.states[r]}o=this.matchMappings[r]
c=m
a=this.regExps[r]
a.lastIndex=m}break}if(g){if(typeof d=="string"){if((!f||f.merge!==false)&&u.type===d){u.value+=g}else{if(u.type)h.push(u)
u={type:d,value:g}}}else if(d){if(u.type)h.push(u)
u={type:null,value:""}
for(var A=0;A<d.length;A++)h.push(d[A])}}if(c==e.length)break
c=m
if(h.length>n){while(c<e.length){if(u.type)h.push(u)
u={value:e.substring(c,c+=2e3),type:"overflow"}}r="start"
i=[]
break}}if(u.type)h.push(u)
return{tokens:h,state:i.length?i:r}}}).call(r.prototype)
t.Tokenizer=r})
ace.define("ace/mode/text_highlight_rules",["require","exports","module","ace/lib/lang"],function(e,t,i){var n=e("../lib/lang")
var r=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{defaultToken:"text"}]}};(function(){this.addRules=function(e,t){if(!t){for(var i in e)this.$rules[i]=e[i]
return}for(var i in e){var n=e[i]
for(var r=0;r<n.length;r++){var s=n[r]
if(s.next){if(typeof s.next!="string"){if(s.nextState&&s.nextState.indexOf(t)!==0)s.nextState=t+s.nextState}else{if(s.next.indexOf(t)!==0)s.next=t+s.next}}}this.$rules[t+i]=n}}
this.getRules=function(){return this.$rules}
this.embedRules=function(e,t,i,r,s){var o=(new e).getRules()
if(r){for(var a=0;a<r.length;a++)r[a]=t+r[a]}else{r=[]
for(var l in o)r.push(t+l)}this.addRules(o,t)
if(i){var h=Array.prototype[s?"push":"unshift"]
for(var a=0;a<r.length;a++)h.apply(this.$rules[r[a]],n.deepCopy(i))}if(!this.$embeds)this.$embeds=[]
this.$embeds.push(t)}
this.getEmbeds=function(){return this.$embeds}
var e=function(e,t){if(e!="start")t.unshift(this.nextState,e)
return this.nextState}
var t=function(e,t){if(t[0]!==e)return"start"
t.shift()
return t.shift()}
this.normalizeRules=function(){var i=0
var n=this.$rules
function r(s){var o=n[s]
o.processed=true
for(var a=0;a<o.length;a++){var l=o[a]
if(!l.regex&&l.start){l.regex=l.start
if(!l.next)l.next=[]
l.next.push({defaultToken:l.token},{token:l.token+".end",regex:l.end||l.start,next:"pop"})
l.token=l.token+".start"
l.push=true}var h=l.next||l.push
if(h&&Array.isArray(h)){var c=l.stateName
if(!c){c=l.token
if(typeof c!="string")c=c[0]||""
if(n[c])c+=i++}n[c]=h
l.next=c
r(c)}else if(h=="pop"){l.next=t}if(l.push){l.nextState=l.next||l.push
l.next=e
delete l.push}if(l.rules){for(var u in l.rules){if(n[u]){if(n[u].push)n[u].push.apply(n[u],l.rules[u])}else{n[u]=l.rules[u]}}}if(l.include||typeof l=="string"){var d=l.include||l
var f=n[d]}else if(Array.isArray(l))f=l
if(f){var g=[a,1].concat(f)
if(l.noEscape)g=g.filter(function(e){return!e.next})
o.splice.apply(o,g)
a--
f=null}if(l.keywordMap){l.token=this.createKeywordMapper(l.keywordMap,l.defaultToken||"text",l.caseInsensitive)
delete l.defaultToken}}}Object.keys(n).forEach(r,this)}
this.createKeywordMapper=function(e,t,i,n){var r=Object.create(null)
Object.keys(e).forEach(function(t){var s=e[t]
if(i)s=s.toLowerCase()
var o=s.split(n||"|")
for(var a=o.length;a--;)r[o[a]]=t})
if(Object.getPrototypeOf(r)){r.__proto__=null}this.$keywordList=Object.keys(r)
e=null
return i?function(e){return r[e.toLowerCase()]||t}:function(e){return r[e]||t}}
this.getKeywords=function(){return this.$keywords}}).call(r.prototype)
t.TextHighlightRules=r})
ace.define("ace/mode/behaviour",["require","exports","module"],function(e,t,i){var n=function(){this.$behaviours={}};(function(){this.add=function(e,t,i){switch(undefined){case this.$behaviours:this.$behaviours={}
case this.$behaviours[e]:this.$behaviours[e]={}}this.$behaviours[e][t]=i}
this.addBehaviours=function(e){for(var t in e){for(var i in e[t]){this.add(t,i,e[t][i])}}}
this.remove=function(e){if(this.$behaviours&&this.$behaviours[e]){delete this.$behaviours[e]}}
this.inherit=function(e,t){if(typeof e==="function"){var i=(new e).getBehaviours(t)}else{var i=e.getBehaviours(t)}this.addBehaviours(i)}
this.getBehaviours=function(e){if(!e){return this.$behaviours}else{var t={}
for(var i=0;i<e.length;i++){if(this.$behaviours[e[i]]){t[e[i]]=this.$behaviours[e[i]]}}return t}}}).call(n.prototype)
t.Behaviour=n})
ace.define("ace/unicode",["require","exports","module"],function(e,t,i){t.packages={}
n({L:"0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",Ll:"0061-007A00AA00B500BA00DF-00F600F8-00FF01010103010501070109010B010D010F01110113011501170119011B011D011F01210123012501270129012B012D012F01310133013501370138013A013C013E014001420144014601480149014B014D014F01510153015501570159015B015D015F01610163016501670169016B016D016F0171017301750177017A017C017E-0180018301850188018C018D019201950199-019B019E01A101A301A501A801AA01AB01AD01B001B401B601B901BA01BD-01BF01C601C901CC01CE01D001D201D401D601D801DA01DC01DD01DF01E101E301E501E701E901EB01ED01EF01F001F301F501F901FB01FD01FF02010203020502070209020B020D020F02110213021502170219021B021D021F02210223022502270229022B022D022F02310233-0239023C023F0240024202470249024B024D024F-02930295-02AF037103730377037B-037D039003AC-03CE03D003D103D5-03D703D903DB03DD03DF03E103E303E503E703E903EB03ED03EF-03F303F503F803FB03FC0430-045F04610463046504670469046B046D046F04710473047504770479047B047D047F0481048B048D048F04910493049504970499049B049D049F04A104A304A504A704A904AB04AD04AF04B104B304B504B704B904BB04BD04BF04C204C404C604C804CA04CC04CE04CF04D104D304D504D704D904DB04DD04DF04E104E304E504E704E904EB04ED04EF04F104F304F504F704F904FB04FD04FF05010503050505070509050B050D050F05110513051505170519051B051D051F0521052305250561-05871D00-1D2B1D62-1D771D79-1D9A1E011E031E051E071E091E0B1E0D1E0F1E111E131E151E171E191E1B1E1D1E1F1E211E231E251E271E291E2B1E2D1E2F1E311E331E351E371E391E3B1E3D1E3F1E411E431E451E471E491E4B1E4D1E4F1E511E531E551E571E591E5B1E5D1E5F1E611E631E651E671E691E6B1E6D1E6F1E711E731E751E771E791E7B1E7D1E7F1E811E831E851E871E891E8B1E8D1E8F1E911E931E95-1E9D1E9F1EA11EA31EA51EA71EA91EAB1EAD1EAF1EB11EB31EB51EB71EB91EBB1EBD1EBF1EC11EC31EC51EC71EC91ECB1ECD1ECF1ED11ED31ED51ED71ED91EDB1EDD1EDF1EE11EE31EE51EE71EE91EEB1EED1EEF1EF11EF31EF51EF71EF91EFB1EFD1EFF-1F071F10-1F151F20-1F271F30-1F371F40-1F451F50-1F571F60-1F671F70-1F7D1F80-1F871F90-1F971FA0-1FA71FB0-1FB41FB61FB71FBE1FC2-1FC41FC61FC71FD0-1FD31FD61FD71FE0-1FE71FF2-1FF41FF61FF7210A210E210F2113212F21342139213C213D2146-2149214E21842C30-2C5E2C612C652C662C682C6A2C6C2C712C732C742C76-2C7C2C812C832C852C872C892C8B2C8D2C8F2C912C932C952C972C992C9B2C9D2C9F2CA12CA32CA52CA72CA92CAB2CAD2CAF2CB12CB32CB52CB72CB92CBB2CBD2CBF2CC12CC32CC52CC72CC92CCB2CCD2CCF2CD12CD32CD52CD72CD92CDB2CDD2CDF2CE12CE32CE42CEC2CEE2D00-2D25A641A643A645A647A649A64BA64DA64FA651A653A655A657A659A65BA65DA65FA663A665A667A669A66BA66DA681A683A685A687A689A68BA68DA68FA691A693A695A697A723A725A727A729A72BA72DA72F-A731A733A735A737A739A73BA73DA73FA741A743A745A747A749A74BA74DA74FA751A753A755A757A759A75BA75DA75FA761A763A765A767A769A76BA76DA76FA771-A778A77AA77CA77FA781A783A785A787A78CFB00-FB06FB13-FB17FF41-FF5A",Lu:"0041-005A00C0-00D600D8-00DE01000102010401060108010A010C010E01100112011401160118011A011C011E01200122012401260128012A012C012E01300132013401360139013B013D013F0141014301450147014A014C014E01500152015401560158015A015C015E01600162016401660168016A016C016E017001720174017601780179017B017D018101820184018601870189-018B018E-0191019301940196-0198019C019D019F01A001A201A401A601A701A901AC01AE01AF01B1-01B301B501B701B801BC01C401C701CA01CD01CF01D101D301D501D701D901DB01DE01E001E201E401E601E801EA01EC01EE01F101F401F6-01F801FA01FC01FE02000202020402060208020A020C020E02100212021402160218021A021C021E02200222022402260228022A022C022E02300232023A023B023D023E02410243-02460248024A024C024E03700372037603860388-038A038C038E038F0391-03A103A3-03AB03CF03D2-03D403D803DA03DC03DE03E003E203E403E603E803EA03EC03EE03F403F703F903FA03FD-042F04600462046404660468046A046C046E04700472047404760478047A047C047E0480048A048C048E04900492049404960498049A049C049E04A004A204A404A604A804AA04AC04AE04B004B204B404B604B804BA04BC04BE04C004C104C304C504C704C904CB04CD04D004D204D404D604D804DA04DC04DE04E004E204E404E604E804EA04EC04EE04F004F204F404F604F804FA04FC04FE05000502050405060508050A050C050E05100512051405160518051A051C051E0520052205240531-055610A0-10C51E001E021E041E061E081E0A1E0C1E0E1E101E121E141E161E181E1A1E1C1E1E1E201E221E241E261E281E2A1E2C1E2E1E301E321E341E361E381E3A1E3C1E3E1E401E421E441E461E481E4A1E4C1E4E1E501E521E541E561E581E5A1E5C1E5E1E601E621E641E661E681E6A1E6C1E6E1E701E721E741E761E781E7A1E7C1E7E1E801E821E841E861E881E8A1E8C1E8E1E901E921E941E9E1EA01EA21EA41EA61EA81EAA1EAC1EAE1EB01EB21EB41EB61EB81EBA1EBC1EBE1EC01EC21EC41EC61EC81ECA1ECC1ECE1ED01ED21ED41ED61ED81EDA1EDC1EDE1EE01EE21EE41EE61EE81EEA1EEC1EEE1EF01EF21EF41EF61EF81EFA1EFC1EFE1F08-1F0F1F18-1F1D1F28-1F2F1F38-1F3F1F48-1F4D1F591F5B1F5D1F5F1F68-1F6F1FB8-1FBB1FC8-1FCB1FD8-1FDB1FE8-1FEC1FF8-1FFB21022107210B-210D2110-211221152119-211D212421262128212A-212D2130-2133213E213F214521832C00-2C2E2C602C62-2C642C672C692C6B2C6D-2C702C722C752C7E-2C802C822C842C862C882C8A2C8C2C8E2C902C922C942C962C982C9A2C9C2C9E2CA02CA22CA42CA62CA82CAA2CAC2CAE2CB02CB22CB42CB62CB82CBA2CBC2CBE2CC02CC22CC42CC62CC82CCA2CCC2CCE2CD02CD22CD42CD62CD82CDA2CDC2CDE2CE02CE22CEB2CEDA640A642A644A646A648A64AA64CA64EA650A652A654A656A658A65AA65CA65EA662A664A666A668A66AA66CA680A682A684A686A688A68AA68CA68EA690A692A694A696A722A724A726A728A72AA72CA72EA732A734A736A738A73AA73CA73EA740A742A744A746A748A74AA74CA74EA750A752A754A756A758A75AA75CA75EA760A762A764A766A768A76AA76CA76EA779A77BA77DA77EA780A782A784A786A78BFF21-FF3A",Lt:"01C501C801CB01F21F88-1F8F1F98-1F9F1FA8-1FAF1FBC1FCC1FFC",Lm:"02B0-02C102C6-02D102E0-02E402EC02EE0374037A0559064006E506E607F407F507FA081A0824082809710E460EC610FC17D718431AA71C78-1C7D1D2C-1D611D781D9B-1DBF2071207F2090-20942C7D2D6F2E2F30053031-3035303B309D309E30FC-30FEA015A4F8-A4FDA60CA67FA717-A71FA770A788A9CFAA70AADDFF70FF9EFF9F",Lo:"01BB01C0-01C3029405D0-05EA05F0-05F20621-063F0641-064A066E066F0671-06D306D506EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA0800-08150904-0939093D09500958-096109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E450E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10D0-10FA1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317DC1820-18421844-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C771CE9-1CEC1CEE-1CF12135-21382D30-2D652D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE3006303C3041-3096309F30A1-30FA30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A014A016-A48CA4D0-A4F7A500-A60BA610-A61FA62AA62BA66EA6A0-A6E5A7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2AA00-AA28AA40-AA42AA44-AA4BAA60-AA6FAA71-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADBAADCABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF66-FF6FFF71-FF9DFFA0-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",M:"0300-036F0483-04890591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DE-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0903093C093E-094E0951-0955096209630981-098309BC09BE-09C409C709C809CB-09CD09D709E209E30A01-0A030A3C0A3E-0A420A470A480A4B-0A4D0A510A700A710A750A81-0A830ABC0ABE-0AC50AC7-0AC90ACB-0ACD0AE20AE30B01-0B030B3C0B3E-0B440B470B480B4B-0B4D0B560B570B620B630B820BBE-0BC20BC6-0BC80BCA-0BCD0BD70C01-0C030C3E-0C440C46-0C480C4A-0C4D0C550C560C620C630C820C830CBC0CBE-0CC40CC6-0CC80CCA-0CCD0CD50CD60CE20CE30D020D030D3E-0D440D46-0D480D4A-0D4D0D570D620D630D820D830DCA0DCF-0DD40DD60DD8-0DDF0DF20DF30E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F3E0F3F0F71-0F840F860F870F90-0F970F99-0FBC0FC6102B-103E1056-1059105E-10601062-10641067-106D1071-10741082-108D108F109A-109D135F1712-17141732-1734175217531772177317B6-17D317DD180B-180D18A91920-192B1930-193B19B0-19C019C819C91A17-1A1B1A55-1A5E1A60-1A7C1A7F1B00-1B041B34-1B441B6B-1B731B80-1B821BA1-1BAA1C24-1C371CD0-1CD21CD4-1CE81CED1CF21DC0-1DE61DFD-1DFF20D0-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66F-A672A67CA67DA6F0A6F1A802A806A80BA823-A827A880A881A8B4-A8C4A8E0-A8F1A926-A92DA947-A953A980-A983A9B3-A9C0AA29-AA36AA43AA4CAA4DAA7BAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE3-ABEAABECABEDFB1EFE00-FE0FFE20-FE26",Mn:"0300-036F0483-04870591-05BD05BF05C105C205C405C505C70610-061A064B-065E067006D6-06DC06DF-06E406E706E806EA-06ED07110730-074A07A6-07B007EB-07F30816-0819081B-08230825-08270829-082D0900-0902093C0941-0948094D0951-095509620963098109BC09C1-09C409CD09E209E30A010A020A3C0A410A420A470A480A4B-0A4D0A510A700A710A750A810A820ABC0AC1-0AC50AC70AC80ACD0AE20AE30B010B3C0B3F0B41-0B440B4D0B560B620B630B820BC00BCD0C3E-0C400C46-0C480C4A-0C4D0C550C560C620C630CBC0CBF0CC60CCC0CCD0CE20CE30D41-0D440D4D0D620D630DCA0DD2-0DD40DD60E310E34-0E3A0E47-0E4E0EB10EB4-0EB90EBB0EBC0EC8-0ECD0F180F190F350F370F390F71-0F7E0F80-0F840F860F870F90-0F970F99-0FBC0FC6102D-10301032-10371039103A103D103E10581059105E-10601071-1074108210851086108D109D135F1712-17141732-1734175217531772177317B7-17BD17C617C9-17D317DD180B-180D18A91920-19221927192819321939-193B1A171A181A561A58-1A5E1A601A621A65-1A6C1A73-1A7C1A7F1B00-1B031B341B36-1B3A1B3C1B421B6B-1B731B801B811BA2-1BA51BA81BA91C2C-1C331C361C371CD0-1CD21CD4-1CE01CE2-1CE81CED1DC0-1DE61DFD-1DFF20D0-20DC20E120E5-20F02CEF-2CF12DE0-2DFF302A-302F3099309AA66FA67CA67DA6F0A6F1A802A806A80BA825A826A8C4A8E0-A8F1A926-A92DA947-A951A980-A982A9B3A9B6-A9B9A9BCAA29-AA2EAA31AA32AA35AA36AA43AA4CAAB0AAB2-AAB4AAB7AAB8AABEAABFAAC1ABE5ABE8ABEDFB1EFE00-FE0FFE20-FE26",Mc:"0903093E-09400949-094C094E0982098309BE-09C009C709C809CB09CC09D70A030A3E-0A400A830ABE-0AC00AC90ACB0ACC0B020B030B3E0B400B470B480B4B0B4C0B570BBE0BBF0BC10BC20BC6-0BC80BCA-0BCC0BD70C01-0C030C41-0C440C820C830CBE0CC0-0CC40CC70CC80CCA0CCB0CD50CD60D020D030D3E-0D400D46-0D480D4A-0D4C0D570D820D830DCF-0DD10DD8-0DDF0DF20DF30F3E0F3F0F7F102B102C10311038103B103C105610571062-10641067-106D108310841087-108C108F109A-109C17B617BE-17C517C717C81923-19261929-192B193019311933-193819B0-19C019C819C91A19-1A1B1A551A571A611A631A641A6D-1A721B041B351B3B1B3D-1B411B431B441B821BA11BA61BA71BAA1C24-1C2B1C341C351CE11CF2A823A824A827A880A881A8B4-A8C3A952A953A983A9B4A9B5A9BAA9BBA9BD-A9C0AA2FAA30AA33AA34AA4DAA7BABE3ABE4ABE6ABE7ABE9ABEAABEC",Me:"0488048906DE20DD-20E020E2-20E4A670-A672",N:"0030-003900B200B300B900BC-00BE0660-066906F0-06F907C0-07C90966-096F09E6-09EF09F4-09F90A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BF20C66-0C6F0C78-0C7E0CE6-0CEF0D66-0D750E50-0E590ED0-0ED90F20-0F331040-10491090-10991369-137C16EE-16F017E0-17E917F0-17F91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C5920702074-20792080-20892150-21822185-21892460-249B24EA-24FF2776-27932CFD30073021-30293038-303A3192-31953220-32293251-325F3280-328932B1-32BFA620-A629A6E6-A6EFA830-A835A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nd:"0030-00390660-066906F0-06F907C0-07C90966-096F09E6-09EF0A66-0A6F0AE6-0AEF0B66-0B6F0BE6-0BEF0C66-0C6F0CE6-0CEF0D66-0D6F0E50-0E590ED0-0ED90F20-0F291040-10491090-109917E0-17E91810-18191946-194F19D0-19DA1A80-1A891A90-1A991B50-1B591BB0-1BB91C40-1C491C50-1C59A620-A629A8D0-A8D9A900-A909A9D0-A9D9AA50-AA59ABF0-ABF9FF10-FF19",Nl:"16EE-16F02160-21822185-218830073021-30293038-303AA6E6-A6EF",No:"00B200B300B900BC-00BE09F4-09F90BF0-0BF20C78-0C7E0D70-0D750F2A-0F331369-137C17F0-17F920702074-20792080-20892150-215F21892460-249B24EA-24FF2776-27932CFD3192-31953220-32293251-325F3280-328932B1-32BFA830-A835",P:"0021-00230025-002A002C-002F003A003B003F0040005B-005D005F007B007D00A100AB00B700BB00BF037E0387055A-055F0589058A05BE05C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F3A-0F3D0F850FD0-0FD4104A-104F10FB1361-13681400166D166E169B169C16EB-16ED1735173617D4-17D617D8-17DA1800-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD32010-20272030-20432045-20512053-205E207D207E208D208E2329232A2768-277527C527C627E6-27EF2983-299829D8-29DB29FC29FD2CF9-2CFC2CFE2CFF2E00-2E2E2E302E313001-30033008-30113014-301F3030303D30A030FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFD3EFD3FFE10-FE19FE30-FE52FE54-FE61FE63FE68FE6AFE6BFF01-FF03FF05-FF0AFF0C-FF0FFF1AFF1BFF1FFF20FF3B-FF3DFF3FFF5BFF5DFF5F-FF65",Pd:"002D058A05BE140018062010-20152E172E1A301C303030A0FE31FE32FE58FE63FF0D",Ps:"0028005B007B0F3A0F3C169B201A201E2045207D208D23292768276A276C276E27702772277427C527E627E827EA27EC27EE2983298529872989298B298D298F299129932995299729D829DA29FC2E222E242E262E283008300A300C300E3010301430163018301A301DFD3EFE17FE35FE37FE39FE3BFE3DFE3FFE41FE43FE47FE59FE5BFE5DFF08FF3BFF5BFF5FFF62",Pe:"0029005D007D0F3B0F3D169C2046207E208E232A2769276B276D276F27712773277527C627E727E927EB27ED27EF298429862988298A298C298E2990299229942996299829D929DB29FD2E232E252E272E293009300B300D300F3011301530173019301B301E301FFD3FFE18FE36FE38FE3AFE3CFE3EFE40FE42FE44FE48FE5AFE5CFE5EFF09FF3DFF5DFF60FF63",Pi:"00AB2018201B201C201F20392E022E042E092E0C2E1C2E20",Pf:"00BB2019201D203A2E032E052E0A2E0D2E1D2E21",Pc:"005F203F20402054FE33FE34FE4D-FE4FFF3F",Po:"0021-00230025-0027002A002C002E002F003A003B003F0040005C00A100B700BF037E0387055A-055F058905C005C305C605F305F40609060A060C060D061B061E061F066A-066D06D40700-070D07F7-07F90830-083E0964096509700DF40E4F0E5A0E5B0F04-0F120F850FD0-0FD4104A-104F10FB1361-1368166D166E16EB-16ED1735173617D4-17D617D8-17DA1800-18051807-180A1944194519DE19DF1A1E1A1F1AA0-1AA61AA8-1AAD1B5A-1B601C3B-1C3F1C7E1C7F1CD3201620172020-20272030-2038203B-203E2041-20432047-205120532055-205E2CF9-2CFC2CFE2CFF2E002E012E06-2E082E0B2E0E-2E162E182E192E1B2E1E2E1F2E2A-2E2E2E302E313001-3003303D30FBA4FEA4FFA60D-A60FA673A67EA6F2-A6F7A874-A877A8CEA8CFA8F8-A8FAA92EA92FA95FA9C1-A9CDA9DEA9DFAA5C-AA5FAADEAADFABEBFE10-FE16FE19FE30FE45FE46FE49-FE4CFE50-FE52FE54-FE57FE5F-FE61FE68FE6AFE6BFF01-FF03FF05-FF07FF0AFF0CFF0EFF0FFF1AFF1BFF1FFF20FF3CFF61FF64FF65",S:"0024002B003C-003E005E0060007C007E00A2-00A900AC00AE-00B100B400B600B800D700F702C2-02C502D2-02DF02E5-02EB02ED02EF-02FF03750384038503F604820606-0608060B060E060F06E906FD06FE07F609F209F309FA09FB0AF10B700BF3-0BFA0C7F0CF10CF20D790E3F0F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-139917DB194019E0-19FF1B61-1B6A1B74-1B7C1FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE20442052207A-207C208A-208C20A0-20B8210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B2140-2144214A-214D214F2190-2328232B-23E82400-24262440-244A249C-24E92500-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE27C0-27C427C7-27CA27CC27D0-27E527F0-29822999-29D729DC-29FB29FE-2B4C2B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F309B309C319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A700-A716A720A721A789A78AA828-A82BA836-A839AA77-AA79FB29FDFCFDFDFE62FE64-FE66FE69FF04FF0BFF1C-FF1EFF3EFF40FF5CFF5EFFE0-FFE6FFE8-FFEEFFFCFFFD",Sm:"002B003C-003E007C007E00AC00B100D700F703F60606-060820442052207A-207C208A-208C2140-2144214B2190-2194219A219B21A021A321A621AE21CE21CF21D221D421F4-22FF2308-230B23202321237C239B-23B323DC-23E125B725C125F8-25FF266F27C0-27C427C7-27CA27CC27D0-27E527F0-27FF2900-29822999-29D729DC-29FB29FE-2AFF2B30-2B442B47-2B4CFB29FE62FE64-FE66FF0BFF1C-FF1EFF5CFF5EFFE2FFE9-FFEC",Sc:"002400A2-00A5060B09F209F309FB0AF10BF90E3F17DB20A0-20B8A838FDFCFE69FF04FFE0FFE1FFE5FFE6",Sk:"005E006000A800AF00B400B802C2-02C502D2-02DF02E5-02EB02ED02EF-02FF0375038403851FBD1FBF-1FC11FCD-1FCF1FDD-1FDF1FED-1FEF1FFD1FFE309B309CA700-A716A720A721A789A78AFF3EFF40FFE3",So:"00A600A700A900AE00B000B60482060E060F06E906FD06FE07F609FA0B700BF3-0BF80BFA0C7F0CF10CF20D790F01-0F030F13-0F170F1A-0F1F0F340F360F380FBE-0FC50FC7-0FCC0FCE0FCF0FD5-0FD8109E109F13601390-1399194019E0-19FF1B61-1B6A1B74-1B7C210021012103-21062108210921142116-2118211E-2123212521272129212E213A213B214A214C214D214F2195-2199219C-219F21A121A221A421A521A7-21AD21AF-21CD21D021D121D321D5-21F32300-2307230C-231F2322-2328232B-237B237D-239A23B4-23DB23E2-23E82400-24262440-244A249C-24E92500-25B625B8-25C025C2-25F72600-266E2670-26CD26CF-26E126E326E8-26FF2701-27042706-2709270C-27272729-274B274D274F-27522756-275E2761-276727942798-27AF27B1-27BE2800-28FF2B00-2B2F2B452B462B50-2B592CE5-2CEA2E80-2E992E9B-2EF32F00-2FD52FF0-2FFB300430123013302030363037303E303F319031913196-319F31C0-31E33200-321E322A-32503260-327F328A-32B032C0-32FE3300-33FF4DC0-4DFFA490-A4C6A828-A82BA836A837A839AA77-AA79FDFDFFE4FFE8FFEDFFEEFFFCFFFD",Z:"002000A01680180E2000-200A20282029202F205F3000",Zs:"002000A01680180E2000-200A202F205F3000",Zl:"2028",Zp:"2029",C:"0000-001F007F-009F00AD03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-0605061C061D0620065F06DD070E070F074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17B417B517DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF200B-200F202A-202E2060-206F20722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-F8FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFD-FF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFFBFFFEFFFF",Cc:"0000-001F007F-009F",Cf:"00AD0600-060306DD070F17B417B5200B-200F202A-202E2060-2064206A-206FFEFFFFF9-FFFB",Co:"E000-F8FF",Cs:"D800-DFFF",Cn:"03780379037F-0383038B038D03A20526-05300557055805600588058B-059005C8-05CF05EB-05EF05F5-05FF06040605061C061D0620065F070E074B074C07B2-07BF07FB-07FF082E082F083F-08FF093A093B094F095609570973-097809800984098D098E0991099209A909B109B3-09B509BA09BB09C509C609C909CA09CF-09D609D8-09DB09DE09E409E509FC-0A000A040A0B-0A0E0A110A120A290A310A340A370A3A0A3B0A3D0A43-0A460A490A4A0A4E-0A500A52-0A580A5D0A5F-0A650A76-0A800A840A8E0A920AA90AB10AB40ABA0ABB0AC60ACA0ACE0ACF0AD1-0ADF0AE40AE50AF00AF2-0B000B040B0D0B0E0B110B120B290B310B340B3A0B3B0B450B460B490B4A0B4E-0B550B58-0B5B0B5E0B640B650B72-0B810B840B8B-0B8D0B910B96-0B980B9B0B9D0BA0-0BA20BA5-0BA70BAB-0BAD0BBA-0BBD0BC3-0BC50BC90BCE0BCF0BD1-0BD60BD8-0BE50BFB-0C000C040C0D0C110C290C340C3A-0C3C0C450C490C4E-0C540C570C5A-0C5F0C640C650C70-0C770C800C810C840C8D0C910CA90CB40CBA0CBB0CC50CC90CCE-0CD40CD7-0CDD0CDF0CE40CE50CF00CF3-0D010D040D0D0D110D290D3A-0D3C0D450D490D4E-0D560D58-0D5F0D640D650D76-0D780D800D810D840D97-0D990DB20DBC0DBE0DBF0DC7-0DC90DCB-0DCE0DD50DD70DE0-0DF10DF5-0E000E3B-0E3E0E5C-0E800E830E850E860E890E8B0E8C0E8E-0E930E980EA00EA40EA60EA80EA90EAC0EBA0EBE0EBF0EC50EC70ECE0ECF0EDA0EDB0EDE-0EFF0F480F6D-0F700F8C-0F8F0F980FBD0FCD0FD9-0FFF10C6-10CF10FD-10FF1249124E124F12571259125E125F1289128E128F12B112B612B712BF12C112C612C712D7131113161317135B-135E137D-137F139A-139F13F5-13FF169D-169F16F1-16FF170D1715-171F1737-173F1754-175F176D17711774-177F17DE17DF17EA-17EF17FA-17FF180F181A-181F1878-187F18AB-18AF18F6-18FF191D-191F192C-192F193C-193F1941-1943196E196F1975-197F19AC-19AF19CA-19CF19DB-19DD1A1C1A1D1A5F1A7D1A7E1A8A-1A8F1A9A-1A9F1AAE-1AFF1B4C-1B4F1B7D-1B7F1BAB-1BAD1BBA-1BFF1C38-1C3A1C4A-1C4C1C80-1CCF1CF3-1CFF1DE7-1DFC1F161F171F1E1F1F1F461F471F4E1F4F1F581F5A1F5C1F5E1F7E1F7F1FB51FC51FD41FD51FDC1FF01FF11FF51FFF2065-206920722073208F2095-209F20B9-20CF20F1-20FF218A-218F23E9-23FF2427-243F244B-245F26CE26E226E4-26E727002705270A270B2728274C274E2753-2755275F27602795-279727B027BF27CB27CD-27CF2B4D-2B4F2B5A-2BFF2C2F2C5F2CF2-2CF82D26-2D2F2D66-2D6E2D70-2D7F2D97-2D9F2DA72DAF2DB72DBF2DC72DCF2DD72DDF2E32-2E7F2E9A2EF4-2EFF2FD6-2FEF2FFC-2FFF3040309730983100-3104312E-3130318F31B8-31BF31E4-31EF321F32FF4DB6-4DBF9FCC-9FFFA48D-A48FA4C7-A4CFA62C-A63FA660A661A674-A67BA698-A69FA6F8-A6FFA78D-A7FAA82C-A82FA83A-A83FA878-A87FA8C5-A8CDA8DA-A8DFA8FC-A8FFA954-A95EA97D-A97FA9CEA9DA-A9DDA9E0-A9FFAA37-AA3FAA4EAA4FAA5AAA5BAA7C-AA7FAAC3-AADAAAE0-ABBFABEEABEFABFA-ABFFD7A4-D7AFD7C7-D7CAD7FC-D7FFFA2EFA2FFA6EFA6FFADA-FAFFFB07-FB12FB18-FB1CFB37FB3DFB3FFB42FB45FBB2-FBD2FD40-FD4FFD90FD91FDC8-FDEFFDFEFDFFFE1A-FE1FFE27-FE2FFE53FE67FE6C-FE6FFE75FEFDFEFEFF00FFBF-FFC1FFC8FFC9FFD0FFD1FFD8FFD9FFDD-FFDFFFE7FFEF-FFF8FFFEFFFF"})
function n(e){var i=/\w{4}/g
for(var n in e)t.packages[n]=e[n].replace(i,"\\u$&")}})
ace.define("ace/token_iterator",["require","exports","module"],function(e,t,i){var n=function(e,t,i){this.$session=e
this.$row=t
this.$rowTokens=e.getTokens(t)
var n=e.getTokenAt(t,i)
this.$tokenIndex=n?n.index:-1};(function(){this.stepBackward=function(){this.$tokenIndex-=1
while(this.$tokenIndex<0){this.$row-=1
if(this.$row<0){this.$row=0
return null}this.$rowTokens=this.$session.getTokens(this.$row)
this.$tokenIndex=this.$rowTokens.length-1}return this.$rowTokens[this.$tokenIndex]}
this.stepForward=function(){this.$tokenIndex+=1
var e
while(this.$tokenIndex>=this.$rowTokens.length){this.$row+=1
if(!e)e=this.$session.getLength()
if(this.$row>=e){this.$row=e-1
return null}this.$rowTokens=this.$session.getTokens(this.$row)
this.$tokenIndex=0}return this.$rowTokens[this.$tokenIndex]}
this.getCurrentToken=function(){return this.$rowTokens[this.$tokenIndex]}
this.getCurrentTokenRow=function(){return this.$row}
this.getCurrentTokenColumn=function(){var e=this.$rowTokens
var t=this.$tokenIndex
var i=e[t].start
if(i!==undefined)return i
i=0
while(t>0){t-=1
i+=e[t].value.length}return i}}).call(n.prototype)
t.TokenIterator=n})
ace.define("ace/document",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/range","ace/anchor"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/event_emitter").EventEmitter
var s=e("./range").Range
var o=e("./anchor").Anchor
var a=function(e){this.$lines=[]
if(e.length==0){this.$lines=[""]}else if(Array.isArray(e)){this._insertLines(0,e)}else{this.insert({row:0,column:0},e)}};(function(){n.implement(this,r)
this.setValue=function(e){var t=this.getLength()
this.remove(new s(0,0,t,this.getLine(t-1).length))
this.insert({row:0,column:0},e)}
this.getValue=function(){return this.getAllLines().join(this.getNewLineCharacter())}
this.createAnchor=function(e,t){return new o(this,e,t)}
if("aaa".split(/a/).length==0)this.$split=function(e){return e.replace(/\r\n|\r/g,"\n").split("\n")}
else this.$split=function(e){return e.split(/\r\n|\r|\n/)}
this.$detectNewLine=function(e){var t=e.match(/^.*?(\r\n|\r|\n)/m)
this.$autoNewLine=t?t[1]:"\n"}
this.getNewLineCharacter=function(){switch(this.$newLineMode){case"windows":return"\r\n"
case"unix":return"\n"
default:return this.$autoNewLine}}
this.$autoNewLine="\n"
this.$newLineMode="auto"
this.setNewLineMode=function(e){if(this.$newLineMode===e)return
this.$newLineMode=e}
this.getNewLineMode=function(){return this.$newLineMode}
this.isNewLine=function(e){return e=="\r\n"||e=="\r"||e=="\n"}
this.getLine=function(e){return this.$lines[e]||""}
this.getLines=function(e,t){return this.$lines.slice(e,t+1)}
this.getAllLines=function(){return this.getLines(0,this.getLength())}
this.getLength=function(){return this.$lines.length}
this.getTextRange=function(e){if(e.start.row==e.end.row){return this.getLine(e.start.row).substring(e.start.column,e.end.column)}var t=this.getLines(e.start.row,e.end.row)
t[0]=(t[0]||"").substring(e.start.column)
var i=t.length-1
if(e.end.row-e.start.row==i)t[i]=t[i].substring(0,e.end.column)
return t.join(this.getNewLineCharacter())}
this.$clipPosition=function(e){var t=this.getLength()
if(e.row>=t){e.row=Math.max(0,t-1)
e.column=this.getLine(t-1).length}else if(e.row<0)e.row=0
return e}
this.insert=function(e,t){if(!t||t.length===0)return e
e=this.$clipPosition(e)
if(this.getLength()<=1)this.$detectNewLine(t)
var i=this.$split(t)
var n=i.splice(0,1)[0]
var r=i.length==0?null:i.splice(i.length-1,1)[0]
e=this.insertInLine(e,n)
if(r!==null){e=this.insertNewLine(e)
e=this._insertLines(e.row,i)
e=this.insertInLine(e,r||"")}return e}
this.insertLines=function(e,t){if(e>=this.getLength())return this.insert({row:e,column:0},"\n"+t.join("\n"))
return this._insertLines(Math.max(e,0),t)}
this._insertLines=function(e,t){if(t.length==0)return{row:e,column:0}
if(t.length>65535){var i=this._insertLines(e,t.slice(65535))
t=t.slice(0,65535)}var n=[e,0]
n.push.apply(n,t)
this.$lines.splice.apply(this.$lines,n)
var r=new s(e,0,e+t.length,0)
var o={action:"insertLines",range:r,lines:t}
this._emit("change",{data:o})
return i||r.end}
this.insertNewLine=function(e){e=this.$clipPosition(e)
var t=this.$lines[e.row]||""
this.$lines[e.row]=t.substring(0,e.column)
this.$lines.splice(e.row+1,0,t.substring(e.column,t.length))
var i={row:e.row+1,column:0}
var n={action:"insertText",range:s.fromPoints(e,i),text:this.getNewLineCharacter()}
this._emit("change",{data:n})
return i}
this.insertInLine=function(e,t){if(t.length==0)return e
var i=this.$lines[e.row]||""
this.$lines[e.row]=i.substring(0,e.column)+t+i.substring(e.column)
var n={row:e.row,column:e.column+t.length}
var r={action:"insertText",range:s.fromPoints(e,n),text:t}
this._emit("change",{data:r})
return n}
this.remove=function(e){if(!e instanceof s)e=s.fromPoints(e.start,e.end)
e.start=this.$clipPosition(e.start)
e.end=this.$clipPosition(e.end)
if(e.isEmpty())return e.start
var t=e.start.row
var i=e.end.row
if(e.isMultiLine()){var n=e.start.column==0?t:t+1
var r=i-1
if(e.end.column>0)this.removeInLine(i,0,e.end.column)
if(r>=n)this._removeLines(n,r)
if(n!=t){this.removeInLine(t,e.start.column,this.getLine(t).length)
this.removeNewLine(e.start.row)}}else{this.removeInLine(t,e.start.column,e.end.column)}return e.start}
this.removeInLine=function(e,t,i){if(t==i)return
var n=new s(e,t,e,i)
var r=this.getLine(e)
var o=r.substring(t,i)
var a=r.substring(0,t)+r.substring(i,r.length)
this.$lines.splice(e,1,a)
var l={action:"removeText",range:n,text:o}
this._emit("change",{data:l})
return n.start}
this.removeLines=function(e,t){if(e<0||t>=this.getLength())return this.remove(new s(e,0,t+1,0))
return this._removeLines(e,t)}
this._removeLines=function(e,t){var i=new s(e,0,t+1,0)
var n=this.$lines.splice(e,t-e+1)
var r={action:"removeLines",range:i,nl:this.getNewLineCharacter(),lines:n}
this._emit("change",{data:r})
return n}
this.removeNewLine=function(e){var t=this.getLine(e)
var i=this.getLine(e+1)
var n=new s(e,t.length,e+1,0)
var r=t+i
this.$lines.splice(e,2,r)
var o={action:"removeText",range:n,text:this.getNewLineCharacter()}
this._emit("change",{data:o})}
this.replace=function(e,t){if(!e instanceof s)e=s.fromPoints(e.start,e.end)
if(t.length==0&&e.isEmpty())return e.start
if(t==this.getTextRange(e))return e.end
this.remove(e)
if(t){var i=this.insert(e.start,t)}else{i=e.start}return i}
this.applyDeltas=function(e){for(var t=0;t<e.length;t++){var i=e[t]
var n=s.fromPoints(i.range.start,i.range.end)
if(i.action=="insertLines")this.insertLines(n.start.row,i.lines)
else if(i.action=="insertText")this.insert(n.start,i.text)
else if(i.action=="removeLines")this._removeLines(n.start.row,n.end.row-1)
else if(i.action=="removeText")this.remove(n)}}
this.revertDeltas=function(e){for(var t=e.length-1;t>=0;t--){var i=e[t]
var n=s.fromPoints(i.range.start,i.range.end)
if(i.action=="insertLines")this._removeLines(n.start.row,n.end.row-1)
else if(i.action=="insertText")this.remove(n)
else if(i.action=="removeLines")this._insertLines(n.start.row,i.lines)
else if(i.action=="removeText")this.insert(n.start,i.text)}}
this.indexToPosition=function(e,t){var i=this.$lines||this.getAllLines()
var n=this.getNewLineCharacter().length
for(var r=t||0,s=i.length;r<s;r++){e-=i[r].length+n
if(e<0)return{row:r,column:e+i[r].length+n}}return{row:s-1,column:i[s-1].length}}
this.positionToIndex=function(e,t){var i=this.$lines||this.getAllLines()
var n=this.getNewLineCharacter().length
var r=0
var s=Math.min(e.row,i.length)
for(var o=t||0;o<s;++o)r+=i[o].length+n
return r+e.column}}).call(a.prototype)
t.Document=a})
ace.define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/event_emitter").EventEmitter
var s=t.Anchor=function(e,t,i){this.$onChange=this.onChange.bind(this)
this.attach(e)
if(typeof i=="undefined")this.setPosition(t.row,t.column)
else this.setPosition(t,i)};(function(){n.implement(this,r)
this.getPosition=function(){return this.$clipPositionToDocument(this.row,this.column)}
this.getDocument=function(){return this.document}
this.$insertRight=false
this.onChange=function(e){var t=e.data
var i=t.range
if(i.start.row==i.end.row&&i.start.row!=this.row)return
if(i.start.row>this.row)return
if(i.start.row==this.row&&i.start.column>this.column)return
var n=this.row
var r=this.column
var s=i.start
var o=i.end
if(t.action==="insertText"){if(s.row===n&&s.column<=r){if(s.column===r&&this.$insertRight){}else if(s.row===o.row){r+=o.column-s.column}else{r-=s.column
n+=o.row-s.row}}else if(s.row!==o.row&&s.row<n){n+=o.row-s.row}}else if(t.action==="insertLines"){if(s.row<=n){n+=o.row-s.row}}else if(t.action==="removeText"){if(s.row===n&&s.column<r){if(o.column>=r)r=s.column
else r=Math.max(0,r-(o.column-s.column))}else if(s.row!==o.row&&s.row<n){if(o.row===n)r=Math.max(0,r-o.column)+s.column
n-=o.row-s.row}else if(o.row===n){n-=o.row-s.row
r=Math.max(0,r-o.column)+s.column}}else if(t.action=="removeLines"){if(s.row<=n){if(o.row<=n)n-=o.row-s.row
else{n=s.row
r=0}}}this.setPosition(n,r,true)}
this.setPosition=function(e,t,i){var n
if(i){n={row:e,column:t}}else{n=this.$clipPositionToDocument(e,t)}if(this.row==n.row&&this.column==n.column)return
var r={row:this.row,column:this.column}
this.row=n.row
this.column=n.column
this._emit("change",{old:r,value:n})}
this.detach=function(){this.document.removeEventListener("change",this.$onChange)}
this.attach=function(e){this.document=e||this.document
this.document.on("change",this.$onChange)}
this.$clipPositionToDocument=function(e,t){var i={}
if(e>=this.document.getLength()){i.row=Math.max(0,this.document.getLength()-1)
i.column=this.document.getLine(i.row).length}else if(e<0){i.row=0
i.column=0}else{i.row=e
i.column=Math.min(this.document.getLine(i.row).length,Math.max(0,t))}if(t<0)i.column=0
return i}}).call(s.prototype)})
ace.define("ace/background_tokenizer",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/event_emitter").EventEmitter
var s=function(e,t){this.running=false
this.lines=[]
this.states=[]
this.currentLine=0
this.tokenizer=e
var i=this
this.$worker=function(){if(!i.running){return}var e=new Date
var t=i.currentLine
var n=-1
var r=i.doc
while(i.lines[t])t++
var s=t
var o=r.getLength()
var a=0
i.running=false
while(t<o){i.$tokenizeRow(t)
n=t
do{t++}while(i.lines[t])
a++
if(a%5==0&&new Date-e>20){i.running=setTimeout(i.$worker,20)
i.currentLine=t
return}}i.currentLine=t
if(s<=n)i.fireUpdateEvent(s,n)}};(function(){n.implement(this,r)
this.setTokenizer=function(e){this.tokenizer=e
this.lines=[]
this.states=[]
this.start(0)}
this.setDocument=function(e){this.doc=e
this.lines=[]
this.states=[]
this.stop()}
this.fireUpdateEvent=function(e,t){var i={first:e,last:t}
this._emit("update",{data:i})}
this.start=function(e){this.currentLine=Math.min(e||0,this.currentLine,this.doc.getLength())
this.lines.splice(this.currentLine,this.lines.length)
this.states.splice(this.currentLine,this.states.length)
this.stop()
this.running=setTimeout(this.$worker,700)}
this.scheduleStart=function(){if(!this.running)this.running=setTimeout(this.$worker,700)}
this.$updateOnChange=function(e){var t=e.range
var i=t.start.row
var n=t.end.row-i
if(n===0){this.lines[i]=null}else if(e.action=="removeText"||e.action=="removeLines"){this.lines.splice(i,n+1,null)
this.states.splice(i,n+1,null)}else{var r=Array(n+1)
r.unshift(i,1)
this.lines.splice.apply(this.lines,r)
this.states.splice.apply(this.states,r)}this.currentLine=Math.min(i,this.currentLine,this.doc.getLength())
this.stop()}
this.stop=function(){if(this.running)clearTimeout(this.running)
this.running=false}
this.getTokens=function(e){return this.lines[e]||this.$tokenizeRow(e)}
this.getState=function(e){if(this.currentLine==e)this.$tokenizeRow(e)
return this.states[e]||"start"}
this.$tokenizeRow=function(e){var t=this.doc.getLine(e)
var i=this.states[e-1]
var n=this.tokenizer.getLineTokens(t,i,e)
if(this.states[e]+""!==n.state+""){this.states[e]=n.state
this.lines[e+1]=null
if(this.currentLine>e+1)this.currentLine=e+1}else if(this.currentLine==e){this.currentLine=e+1}return this.lines[e]=n.tokens}}).call(s.prototype)
t.BackgroundTokenizer=s})
ace.define("ace/search_highlight",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,i){var n=e("./lib/lang")
var r=e("./lib/oop")
var s=e("./range").Range
var o=function(e,t,i){this.setRegexp(e)
this.clazz=t
this.type=i||"text"};(function(){this.MAX_RANGES=500
this.setRegexp=function(e){if(this.regExp+""==e+"")return
this.regExp=e
this.cache=[]}
this.update=function(e,t,i,r){if(!this.regExp)return
var o=r.firstRow,a=r.lastRow
for(var l=o;l<=a;l++){var h=this.cache[l]
if(h==null){h=n.getMatchOffsets(i.getLine(l),this.regExp)
if(h.length>this.MAX_RANGES)h=h.slice(0,this.MAX_RANGES)
h=h.map(function(e){return new s(l,e.offset,l,e.offset+e.length)})
this.cache[l]=h.length?h:""}for(var c=h.length;c--;){t.drawSingleLineMarker(e,h[c].toScreenRange(i),this.clazz,r)}}}}).call(o.prototype)
t.SearchHighlight=o})
ace.define("ace/edit_session/folding",["require","exports","module","ace/range","ace/edit_session/fold_line","ace/edit_session/fold","ace/token_iterator"],function(e,t,i){var n=e("../range").Range
var r=e("./fold_line").FoldLine
var s=e("./fold").Fold
var o=e("../token_iterator").TokenIterator
function a(){this.getFoldAt=function(e,t,i){var n=this.getFoldLine(e)
if(!n)return null
var r=n.folds
for(var s=0;s<r.length;s++){var o=r[s]
if(o.range.contains(e,t)){if(i==1&&o.range.isEnd(e,t)){continue}else if(i==-1&&o.range.isStart(e,t)){continue}return o}}}
this.getFoldsInRange=function(e){var t=e.start
var i=e.end
var n=this.$foldData
var r=[]
t.column+=1
i.column-=1
for(var s=0;s<n.length;s++){var o=n[s].range.compareRange(e)
if(o==2){continue}else if(o==-2){break}var a=n[s].folds
for(var l=0;l<a.length;l++){var h=a[l]
o=h.range.compareRange(e)
if(o==-2){break}else if(o==2){continue}else if(o==42){break}r.push(h)}}t.column-=1
i.column+=1
return r}
this.getAllFolds=function(){var e=[]
var t=this.$foldData
function i(t){e.push(t)}for(var n=0;n<t.length;n++)for(var r=0;r<t[n].folds.length;r++)i(t[n].folds[r])
return e}
this.getFoldStringAt=function(e,t,i,n){n=n||this.getFoldLine(e)
if(!n)return null
var r={end:{column:0}}
var s,o
for(var a=0;a<n.folds.length;a++){o=n.folds[a]
var l=o.range.compareEnd(e,t)
if(l==-1){s=this.getLine(o.start.row).substring(r.end.column,o.start.column)
break}else if(l===0){return null}r=o}if(!s)s=this.getLine(o.start.row).substring(r.end.column)
if(i==-1)return s.substring(0,t-r.end.column)
else if(i==1)return s.substring(t-r.end.column)
else return s}
this.getFoldLine=function(e,t){var i=this.$foldData
var n=0
if(t)n=i.indexOf(t)
if(n==-1)n=0
for(n;n<i.length;n++){var r=i[n]
if(r.start.row<=e&&r.end.row>=e){return r}else if(r.end.row>e){return null}}return null}
this.getNextFoldLine=function(e,t){var i=this.$foldData
var n=0
if(t)n=i.indexOf(t)
if(n==-1)n=0
for(n;n<i.length;n++){var r=i[n]
if(r.end.row>=e){return r}}return null}
this.getFoldedRowCount=function(e,t){var i=this.$foldData,n=t-e+1
for(var r=0;r<i.length;r++){var s=i[r],o=s.end.row,a=s.start.row
if(o>=t){if(a<t){if(a>=e)n-=t-a
else n=0}break}else if(o>=e){if(a>=e)n-=o-a
else n-=o-e+1}}return n}
this.$addFoldLine=function(e){this.$foldData.push(e)
this.$foldData.sort(function(e,t){return e.start.row-t.start.row})
return e}
this.addFold=function(e,t){var i=this.$foldData
var n=false
var o
if(e instanceof s)o=e
else{o=new s(t,e)
o.collapseChildren=t.collapseChildren}this.$clipRangeToDocument(o.range)
var a=o.start.row
var l=o.start.column
var h=o.end.row
var c=o.end.column
if(!(a<h||a==h&&l<=c-2))throw new Error("The range has to be at least 2 characters width")
var u=this.getFoldAt(a,l,1)
var d=this.getFoldAt(h,c,-1)
if(u&&d==u)return u.addSubFold(o)
if(u&&!u.range.isStart(a,l)||d&&!d.range.isEnd(h,c)){throw new Error("A fold can't intersect already existing fold"+o.range+u.range)}var f=this.getFoldsInRange(o.range)
if(f.length>0){this.removeFolds(f)
f.forEach(function(e){o.addSubFold(e)})}for(var g=0;g<i.length;g++){var m=i[g]
if(h==m.start.row){m.addFold(o)
n=true
break}else if(a==m.end.row){m.addFold(o)
n=true
if(!o.sameRow){var v=i[g+1]
if(v&&v.start.row==h){m.merge(v)
break}}break}else if(h<=m.start.row){break}}if(!n)m=this.$addFoldLine(new r(this.$foldData,o))
if(this.$useWrapMode)this.$updateWrapData(m.start.row,m.start.row)
else this.$updateRowLengthCache(m.start.row,m.start.row)
this.$modified=true
this._emit("changeFold",{data:o,action:"add"})
return o}
this.addFolds=function(e){e.forEach(function(e){this.addFold(e)},this)}
this.removeFold=function(e){var t=e.foldLine
var i=t.start.row
var n=t.end.row
var r=this.$foldData
var s=t.folds
if(s.length==1){r.splice(r.indexOf(t),1)}else if(t.range.isEnd(e.end.row,e.end.column)){s.pop()
t.end.row=s[s.length-1].end.row
t.end.column=s[s.length-1].end.column}else if(t.range.isStart(e.start.row,e.start.column)){s.shift()
t.start.row=s[0].start.row
t.start.column=s[0].start.column}else if(e.sameRow){s.splice(s.indexOf(e),1)}else{var o=t.split(e.start.row,e.start.column)
s=o.folds
s.shift()
o.start.row=s[0].start.row
o.start.column=s[0].start.column}if(!this.$updating){if(this.$useWrapMode)this.$updateWrapData(i,n)
else this.$updateRowLengthCache(i,n)}this.$modified=true
this._emit("changeFold",{data:e,action:"remove"})}
this.removeFolds=function(e){var t=[]
for(var i=0;i<e.length;i++){t.push(e[i])}t.forEach(function(e){this.removeFold(e)},this)
this.$modified=true}
this.expandFold=function(e){this.removeFold(e)
e.subFolds.forEach(function(t){e.restoreRange(t)
this.addFold(t)},this)
if(e.collapseChildren>0){this.foldAll(e.start.row+1,e.end.row,e.collapseChildren-1)}e.subFolds=[]}
this.expandFolds=function(e){e.forEach(function(e){this.expandFold(e)},this)}
this.unfold=function(e,t){var i,r
if(e==null){i=new n(0,0,this.getLength(),0)
t=true}else if(typeof e=="number")i=new n(e,0,e,this.getLine(e).length)
else if("row"in e)i=n.fromPoints(e,e)
else i=e
r=this.getFoldsInRange(i)
if(t){this.removeFolds(r)}else{while(r.length){this.expandFolds(r)
r=this.getFoldsInRange(i)}}}
this.isRowFolded=function(e,t){return!!this.getFoldLine(e,t)}
this.getRowFoldEnd=function(e,t){var i=this.getFoldLine(e,t)
return i?i.end.row:e}
this.getRowFoldStart=function(e,t){var i=this.getFoldLine(e,t)
return i?i.start.row:e}
this.getFoldDisplayLine=function(e,t,i,n,r){if(n==null){n=e.start.row
r=0}if(t==null){t=e.end.row
i=this.getLine(t).length}var s=this.doc
var o=""
e.walk(function(e,t,i,a){if(t<n)return
if(t==n){if(i<r)return
a=Math.max(r,a)}if(e!=null){o+=e}else{o+=s.getLine(t).substring(a,i)}},t,i)
return o}
this.getDisplayLine=function(e,t,i,n){var r=this.getFoldLine(e)
if(!r){var s
s=this.doc.getLine(e)
return s.substring(n||0,t||s.length)}else{return this.getFoldDisplayLine(r,e,t,i,n)}}
this.$cloneFoldData=function(){var e=[]
e=this.$foldData.map(function(t){var i=t.folds.map(function(e){return e.clone()})
return new r(e,i)})
return e}
this.toggleFold=function(e){var t=this.selection
var i=t.getRange()
var n
var r
if(i.isEmpty()){var s=i.start
n=this.getFoldAt(s.row,s.column)
if(n){this.expandFold(n)
return}else if(r=this.findMatchingBracket(s)){if(i.comparePoint(r)==1){i.end=r}else{i.start=r
i.start.column++
i.end.column--}}else if(r=this.findMatchingBracket({row:s.row,column:s.column+1})){if(i.comparePoint(r)==1)i.end=r
else i.start=r
i.start.column++}else{i=this.getCommentFoldRange(s.row,s.column)||i}}else{var o=this.getFoldsInRange(i)
if(e&&o.length){this.expandFolds(o)
return}else if(o.length==1){n=o[0]}}if(!n)n=this.getFoldAt(i.start.row,i.start.column)
if(n&&n.range.toString()==i.toString()){this.expandFold(n)
return}var a="..."
if(!i.isMultiLine()){a=this.getTextRange(i)
if(a.length<4)return
a=a.trim().substring(0,2)+".."}this.addFold(a,i)}
this.getCommentFoldRange=function(e,t,i){var r=new o(this,e,t)
var s=r.getCurrentToken()
if(s&&/^comment|string/.test(s.type)){var a=new n
var l=new RegExp(s.type.replace(/\..*/,"\\."))
if(i!=1){do{s=r.stepBackward()}while(s&&l.test(s.type))
r.stepForward()}a.start.row=r.getCurrentTokenRow()
a.start.column=r.getCurrentTokenColumn()+2
r=new o(this,e,t)
if(i!=-1){do{s=r.stepForward()}while(s&&l.test(s.type))
s=r.stepBackward()}else s=r.getCurrentToken()
a.end.row=r.getCurrentTokenRow()
a.end.column=r.getCurrentTokenColumn()+s.value.length-2
return a}}
this.foldAll=function(e,t,i){if(i==undefined)i=1e5
var n=this.foldWidgets
t=t||this.getLength()
e=e||0
for(var r=e;r<t;r++){if(n[r]==null)n[r]=this.getFoldWidget(r)
if(n[r]!="start")continue
var s=this.getFoldWidgetRange(r)
var o=s.end.row
if(s&&s.isMultiLine()&&o<=t&&s.start.row>=e)try{var a=this.addFold("...",s)
a.collapseChildren=i
r=o}catch(l){}}}
this.$foldStyles={manual:1,markbegin:1,markbeginend:1}
this.$foldStyle="markbegin"
this.setFoldStyle=function(e){if(!this.$foldStyles[e])throw new Error("invalid fold style: "+e+"["+Object.keys(this.$foldStyles).join(", ")+"]")
if(this.$foldStyle==e)return
this.$foldStyle=e
if(e=="manual")this.unfold()
var t=this.$foldMode
this.$setFolding(null)
this.$setFolding(t)}
this.$setFolding=function(e){if(this.$foldMode==e)return
this.$foldMode=e
this.removeListener("change",this.$updateFoldWidgets)
this._emit("changeAnnotation")
if(!e||this.$foldStyle=="manual"){this.foldWidgets=null
return}this.foldWidgets=[]
this.getFoldWidget=e.getFoldWidget.bind(e,this,this.$foldStyle)
this.getFoldWidgetRange=e.getFoldWidgetRange.bind(e,this,this.$foldStyle)
this.$updateFoldWidgets=this.updateFoldWidgets.bind(this)
this.on("change",this.$updateFoldWidgets)}
this.getParentFoldRangeData=function(e,t){var i=this.foldWidgets
if(!i||t&&i[e])return{}
var n=e-1,r
while(n>=0){var s=i[n]
if(s==null)s=i[n]=this.getFoldWidget(n)
if(s=="start"){var o=this.getFoldWidgetRange(n)
if(!r)r=o
if(o&&o.end.row>=e)break}n--}return{range:n!==-1&&o,firstRange:r}}
this.onFoldWidgetClick=function(e,t){var i=this.getFoldWidget(e)
var n=this.getLine(e)
t=t.domEvent
var r=t.shiftKey
var s=t.ctrlKey||t.metaKey
var o=t.altKey
var a=i==="end"?-1:1
var l=this.getFoldAt(e,a===-1?0:n.length,a)
if(l){if(r||s)this.removeFold(l)
else this.expandFold(l)
return}var h=this.getFoldWidgetRange(e)
if(h&&!h.isMultiLine()){l=this.getFoldAt(h.start.row,h.start.column,1)
if(l&&h.isEqual(l.range)){this.removeFold(l)
return}}if(o){var c=this.getParentFoldRangeData(e)
if(c.range){var u=c.range.start.row+1
var d=c.range.end.row}this.foldAll(u,d,s?1e4:0)}else if(r){var d=h?h.end.row:this.getLength()
this.foldAll(e+1,h.end.row,s?1e4:0)}else if(h){if(s)h.collapseChildren=1e4
this.addFold("...",h)}if(!h)(t.target||t.srcElement).className+=" ace_invalid"}
this.updateFoldWidgets=function(e){var t=e.data
var i=t.range
var n=i.start.row
var r=i.end.row-n
if(r===0){this.foldWidgets[n]=null}else if(t.action=="removeText"||t.action=="removeLines"){this.foldWidgets.splice(n,r+1,null)}else{var s=Array(r+1)
s.unshift(n,1)
this.foldWidgets.splice.apply(this.foldWidgets,s)}}}t.Folding=a})
ace.define("ace/edit_session/fold_line",["require","exports","module","ace/range"],function(e,t,i){var n=e("../range").Range
function r(e,t){this.foldData=e
if(Array.isArray(t)){this.folds=t}else{t=this.folds=[t]}var i=t[t.length-1]
this.range=new n(t[0].start.row,t[0].start.column,i.end.row,i.end.column)
this.start=this.range.start
this.end=this.range.end
this.folds.forEach(function(e){e.setFoldLine(this)},this)}(function(){this.shiftRow=function(e){this.start.row+=e
this.end.row+=e
this.folds.forEach(function(t){t.start.row+=e
t.end.row+=e})}
this.addFold=function(e){if(e.sameRow){if(e.start.row<this.startRow||e.endRow>this.endRow){throw new Error("Can't add a fold to this FoldLine as it has no connection")}this.folds.push(e)
this.folds.sort(function(e,t){return-e.range.compareEnd(t.start.row,t.start.column)})
if(this.range.compareEnd(e.start.row,e.start.column)>0){this.end.row=e.end.row
this.end.column=e.end.column}else if(this.range.compareStart(e.end.row,e.end.column)<0){this.start.row=e.start.row
this.start.column=e.start.column}}else if(e.start.row==this.end.row){this.folds.push(e)
this.end.row=e.end.row
this.end.column=e.end.column}else if(e.end.row==this.start.row){this.folds.unshift(e)
this.start.row=e.start.row
this.start.column=e.start.column}else{throw new Error("Trying to add fold to FoldRow that doesn't have a matching row")}e.foldLine=this}
this.containsRow=function(e){return e>=this.start.row&&e<=this.end.row}
this.walk=function(e,t,i){var n=0,r=this.folds,s,o,a,l=true
if(t==null){t=this.end.row
i=this.end.column}for(var h=0;h<r.length;h++){s=r[h]
o=s.range.compareStart(t,i)
if(o==-1){e(null,t,i,n,l)
return}a=e(null,s.start.row,s.start.column,n,l)
a=!a&&e(s.placeholder,s.start.row,s.start.column,n)
if(a||o==0){return}l=!s.sameRow
n=s.end.column}e(null,t,i,n,l)}
this.getNextFoldTo=function(e,t){var i,n
for(var r=0;r<this.folds.length;r++){i=this.folds[r]
n=i.range.compareEnd(e,t)
if(n==-1){return{fold:i,kind:"after"}}else if(n==0){return{fold:i,kind:"inside"}}}return null}
this.addRemoveChars=function(e,t,i){var n=this.getNextFoldTo(e,t),r,s
if(n){r=n.fold
if(n.kind=="inside"&&r.start.column!=t&&r.start.row!=e){window.console&&window.console.log(e,t,r)}else if(r.start.row==e){s=this.folds
var o=s.indexOf(r)
if(o==0){this.start.column+=i}for(o;o<s.length;o++){r=s[o]
r.start.column+=i
if(!r.sameRow){return}r.end.column+=i}this.end.column+=i}}}
this.split=function(e,t){var i=this.getNextFoldTo(e,t).fold
var n=this.folds
var s=this.foldData
if(!i)return null
var o=n.indexOf(i)
var a=n[o-1]
this.end.row=a.end.row
this.end.column=a.end.column
n=n.splice(o,n.length-o)
var l=new r(s,n)
s.splice(s.indexOf(this)+1,0,l)
return l}
this.merge=function(e){var t=e.folds
for(var i=0;i<t.length;i++){this.addFold(t[i])}var n=this.foldData
n.splice(n.indexOf(e),1)}
this.toString=function(){var e=[this.range.toString()+": ["]
this.folds.forEach(function(t){e.push("  "+t.toString())})
e.push("]")
return e.join("\n")}
this.idxToPosition=function(e){var t=0
var i
for(var n=0;n<this.folds.length;n++){var i=this.folds[n]
e-=i.start.column-t
if(e<0){return{row:i.start.row,column:i.start.column+e}}e-=i.placeholder.length
if(e<0){return i.start}t=i.end.column}return{row:this.end.row,column:this.end.column+e}}}).call(r.prototype)
t.FoldLine=r})
ace.define("ace/edit_session/fold",["require","exports","module","ace/range","ace/range_list","ace/lib/oop"],function(e,t,i){var n=e("../range").Range
var r=e("../range_list").RangeList
var s=e("../lib/oop")
var o=t.Fold=function(e,t){this.foldLine=null
this.placeholder=t
this.range=e
this.start=e.start
this.end=e.end
this.sameRow=e.start.row==e.end.row
this.subFolds=this.ranges=[]}
s.inherits(o,r);(function(){this.toString=function(){return'"'+this.placeholder+'" '+this.range.toString()}
this.setFoldLine=function(e){this.foldLine=e
this.subFolds.forEach(function(t){t.setFoldLine(e)})}
this.clone=function(){var e=this.range.clone()
var t=new o(e,this.placeholder)
this.subFolds.forEach(function(e){t.subFolds.push(e.clone())})
t.collapseChildren=this.collapseChildren
return t}
this.addSubFold=function(e){if(this.range.isEqual(e))return
if(!this.range.containsRange(e))throw new Error("A fold can't intersect already existing fold"+e.range+this.range)
l(e,this.start)
var t=e.start.row,i=e.start.column
for(var n=0,r=-1;n<this.subFolds.length;n++){r=this.subFolds[n].range.compare(t,i)
if(r!=1)break}var s=this.subFolds[n]
if(r==0)return s.addSubFold(e)
var t=e.range.end.row,i=e.range.end.column
for(var o=n,r=-1;o<this.subFolds.length;o++){r=this.subFolds[o].range.compare(t,i)
if(r!=1)break}var a=this.subFolds[o]
if(r==0)throw new Error("A fold can't intersect already existing fold"+e.range+this.range)
var h=this.subFolds.splice(n,o-n,e)
e.setFoldLine(this.foldLine)
return e}
this.restoreRange=function(e){return c(e,this.start)}}).call(o.prototype)
function a(e,t){e.row-=t.row
if(e.row==0)e.column-=t.column}function l(e,t){a(e.start,t)
a(e.end,t)}function h(e,t){if(e.row==0)e.column+=t.column
e.row+=t.row}function c(e,t){h(e.start,t)
h(e.end,t)}})
ace.define("ace/range_list",["require","exports","module","ace/range"],function(e,t,i){var n=e("./range").Range
var r=n.comparePoints
var s=function(){this.ranges=[]};(function(){this.comparePoints=r
this.pointIndex=function(e,t,i){var n=this.ranges
for(var s=i||0;s<n.length;s++){var o=n[s]
var a=r(e,o.end)
if(a>0)continue
var l=r(e,o.start)
if(a===0)return t&&l!==0?-s-2:s
if(l>0||l===0&&!t)return s
return-s-1}return-s-1}
this.add=function(e){var t=!e.isEmpty()
var i=this.pointIndex(e.start,t)
if(i<0)i=-i-1
var n=this.pointIndex(e.end,t,i)
if(n<0)n=-n-1
else n++
return this.ranges.splice(i,n-i,e)}
this.addList=function(e){var t=[]
for(var i=e.length;i--;){t.push.call(t,this.add(e[i]))}return t}
this.substractPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges.splice(t,1)}
this.merge=function(){var e=[]
var t=this.ranges
t=t.sort(function(e,t){return r(e.start,t.start)})
var i=t[0],n
for(var s=1;s<t.length;s++){n=i
i=t[s]
var o=r(n.end,i.start)
if(o<0)continue
if(o==0&&!n.isEmpty()&&!i.isEmpty())continue
if(r(n.end,i.end)<0){n.end.row=i.end.row
n.end.column=i.end.column}t.splice(s,1)
e.push(i)
i=n
s--}this.ranges=t
return e}
this.contains=function(e,t){return this.pointIndex({row:e,column:t})>=0}
this.containsPoint=function(e){return this.pointIndex(e)>=0}
this.rangeAtPoint=function(e){var t=this.pointIndex(e)
if(t>=0)return this.ranges[t]}
this.clipRows=function(e,t){var i=this.ranges
if(i[0].start.row>t||i[i.length-1].start.row<e)return[]
var n=this.pointIndex({row:e,column:0})
if(n<0)n=-n-1
var r=this.pointIndex({row:t,column:0},n)
if(r<0)r=-r-1
var s=[]
for(var o=n;o<r;o++){s.push(i[o])}return s}
this.removeAll=function(){return this.ranges.splice(0,this.ranges.length)}
this.attach=function(e){if(this.session)this.detach()
this.session=e
this.onChange=this.$onChange.bind(this)
this.session.on("change",this.onChange)}
this.detach=function(){if(!this.session)return
this.session.removeListener("change",this.onChange)
this.session=null}
this.$onChange=function(e){var t=e.data.range
if(e.data.action[0]=="i"){var i=t.start
var n=t.end}else{var n=t.start
var i=t.end}var r=i.row
var s=n.row
var o=s-r
var a=-i.column+n.column
var l=this.ranges
for(var h=0,c=l.length;h<c;h++){var u=l[h]
if(u.end.row<r)continue
if(u.start.row>r)break
if(u.start.row==r&&u.start.column>=i.column){if(u.start.column==i.column&&this.$insertRight){}else{u.start.column+=a
u.start.row+=o}}if(u.end.row==r&&u.end.column>=i.column){if(u.end.column==i.column&&this.$insertRight){continue}if(u.end.column==i.column&&a>0&&h<c-1){if(u.end.column>u.start.column&&u.end.column==l[h+1].start.column)u.end.column-=a}u.end.column+=a
u.end.row+=o}}if(o!=0&&h<c){for(;h<c;h++){var u=l[h]
u.start.row+=o
u.end.row+=o}}}}).call(s.prototype)
t.RangeList=s})
ace.define("ace/edit_session/bracket_match",["require","exports","module","ace/token_iterator","ace/range"],function(e,t,i){var n=e("../token_iterator").TokenIterator
var r=e("../range").Range
function s(){this.findMatchingBracket=function(e,t){if(e.column==0)return null
var i=t||this.getLine(e.row).charAt(e.column-1)
if(i=="")return null
var n=i.match(/([\(\[\{])|([\)\]\}])/)
if(!n)return null
if(n[1])return this.$findClosingBracket(n[1],e)
else return this.$findOpeningBracket(n[2],e)}
this.getBracketRange=function(e){var t=this.getLine(e.row)
var i=true,n
var s=t.charAt(e.column-1)
var o=s&&s.match(/([\(\[\{])|([\)\]\}])/)
if(!o){s=t.charAt(e.column)
e={row:e.row,column:e.column+1}
o=s&&s.match(/([\(\[\{])|([\)\]\}])/)
i=false}if(!o)return null
if(o[1]){var a=this.$findClosingBracket(o[1],e)
if(!a)return null
n=r.fromPoints(e,a)
if(!i){n.end.column++
n.start.column--}n.cursor=n.end}else{var a=this.$findOpeningBracket(o[2],e)
if(!a)return null
n=r.fromPoints(a,e)
if(!i){n.start.column++
n.end.column--}n.cursor=n.start}return n}
this.$brackets={")":"(","(":")","]":"[","[":"]","{":"}","}":"{"}
this.$findOpeningBracket=function(e,t,i){var r=this.$brackets[e]
var s=1
var o=new n(this,t.row,t.column)
var a=o.getCurrentToken()
if(!a)a=o.stepForward()
if(!a)return
if(!i){i=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("rparen",".paren")+")+")}var l=t.column-o.getCurrentTokenColumn()-2
var h=a.value
while(true){while(l>=0){var c=h.charAt(l)
if(c==r){s-=1
if(s==0){return{row:o.getCurrentTokenRow(),column:l+o.getCurrentTokenColumn()}}}else if(c==e){s+=1}l-=1}do{a=o.stepBackward()}while(a&&!i.test(a.type))
if(a==null)break
h=a.value
l=h.length-1}return null}
this.$findClosingBracket=function(e,t,i){var r=this.$brackets[e]
var s=1
var o=new n(this,t.row,t.column)
var a=o.getCurrentToken()
if(!a)a=o.stepForward()
if(!a)return
if(!i){i=new RegExp("(\\.?"+a.type.replace(".","\\.").replace("lparen",".paren")+")+")}var l=t.column-o.getCurrentTokenColumn()
while(true){var h=a.value
var c=h.length
while(l<c){var u=h.charAt(l)
if(u==r){s-=1
if(s==0){return{row:o.getCurrentTokenRow(),column:l+o.getCurrentTokenColumn()}}}else if(u==e){s+=1}l+=1}do{a=o.stepForward()}while(a&&!i.test(a.type))
if(a==null)break
l=0}return null}}t.BracketMatch=s})
ace.define("ace/search",["require","exports","module","ace/lib/lang","ace/lib/oop","ace/range"],function(e,t,i){var n=e("./lib/lang")
var r=e("./lib/oop")
var s=e("./range").Range
var o=function(){this.$options={}};(function(){this.set=function(e){r.mixin(this.$options,e)
return this}
this.getOptions=function(){return n.copyObject(this.$options)}
this.setOptions=function(e){this.$options=e}
this.find=function(e){var t=this.$matchIterator(e,this.$options)
if(!t)return false
var i=null
t.forEach(function(e,t,n){if(!e.start){var r=e.offset+(n||0)
i=new s(t,r,t,r+e.length)}else i=e
return true})
return i}
this.findAll=function(e){var t=this.$options
if(!t.needle)return[]
this.$assembleRegExp(t)
var i=t.range
var r=i?e.getLines(i.start.row,i.end.row):e.doc.getAllLines()
var o=[]
var a=t.re
if(t.$isMultiLine){var l=a.length
var h=r.length-l
for(var c=a.offset||0;c<=h;c++){for(var u=0;u<l;u++)if(r[c+u].search(a[u])==-1)break
var d=r[c]
var f=r[c+l-1]
var g=d.match(a[0])[0].length
var m=f.match(a[l-1])[0].length
o.push(new s(c,d.length-g,c+l-1,m))}}else{for(var v=0;v<r.length;v++){var A=n.getMatchOffsets(r[v],a)
for(var u=0;u<A.length;u++){var p=A[u]
o.push(new s(v,p.offset,v,p.offset+p.length))}}}if(i){var C=i.start.column
var F=i.start.column
var v=0,u=o.length-1
while(v<u&&o[v].start.column<C&&o[v].start.row==i.start.row)v++
while(v<u&&o[u].end.column>F&&o[u].end.row==i.end.row)u--
o=o.slice(v,u+1)
for(v=0,u=o.length;v<u;v++){o[v].start.row+=i.start.row
o[v].end.row+=i.start.row}}return o}
this.replace=function(e,t){var i=this.$options
var n=this.$assembleRegExp(i)
if(i.$isMultiLine)return t
if(!n)return
var r=n.exec(e)
if(!r||r[0].length!=e.length)return null
t=e.replace(n,t)
if(i.preserveCase){t=t.split("")
for(var s=Math.min(e.length,e.length);s--;){var o=e[s]
if(o&&o.toLowerCase()!=o)t[s]=t[s].toUpperCase()
else t[s]=t[s].toLowerCase()}t=t.join("")}return t}
this.$matchIterator=function(e,t){var i=this.$assembleRegExp(t)
if(!i)return false
var r=this,o,a=t.backwards
if(t.$isMultiLine){var l=i.length
var h=function(t,n,r){var a=t.search(i[0])
if(a==-1)return
for(var h=1;h<l;h++){t=e.getLine(n+h)
if(t.search(i[h])==-1)return}var c=t.match(i[l-1])[0].length
var u=new s(n,a,n+l-1,c)
if(i.offset==1){u.start.row--
u.start.column=Number.MAX_VALUE}else if(r)u.start.column+=r
if(o(u))return true}}else if(a){var h=function(e,t,r){var s=n.getMatchOffsets(e,i)
for(var a=s.length-1;a>=0;a--)if(o(s[a],t,r))return true}}else{var h=function(e,t,r){var s=n.getMatchOffsets(e,i)
for(var a=0;a<s.length;a++)if(o(s[a],t,r))return true}}return{forEach:function(i){o=i
r.$lineIterator(e,t).forEach(h)}}}
this.$assembleRegExp=function(e,t){if(e.needle instanceof RegExp)return e.re=e.needle
var i=e.needle
if(!e.needle)return e.re=false
if(!e.regExp)i=n.escapeRegExp(i)
if(e.wholeWord)i="\\b"+i+"\\b"
var r=e.caseSensitive?"g":"gi"
e.$isMultiLine=!t&&/[\n\r]/.test(i)
if(e.$isMultiLine)return e.re=this.$assembleMultilineRegExp(i,r)
try{var s=new RegExp(i,r)}catch(o){s=false}return e.re=s}
this.$assembleMultilineRegExp=function(e,t){var i=e.replace(/\r\n|\r|\n/g,"$\n^").split("\n")
var n=[]
for(var r=0;r<i.length;r++)try{n.push(new RegExp(i[r],t))}catch(s){return false}if(i[0]==""){n.shift()
n.offset=1}else{n.offset=0}return n}
this.$lineIterator=function(e,t){var i=t.backwards==true
var n=t.skipCurrent!=false
var r=t.range
var s=t.start
if(!s)s=r?r[i?"end":"start"]:e.selection.getRange()
if(s.start)s=s[n!=i?"end":"start"]
var o=r?r.start.row:0
var a=r?r.end.row:e.getLength()-1
var l=i?function(i){var n=s.row
var r=e.getLine(n).substring(0,s.column)
if(i(r,n))return
for(n--;n>=o;n--)if(i(e.getLine(n),n))return
if(t.wrap==false)return
for(n=a,o=s.row;n>=o;n--)if(i(e.getLine(n),n))return}:function(i){var n=s.row
var r=e.getLine(n).substr(s.column)
if(i(r,n,s.column))return
for(n=n+1;n<=a;n++)if(i(e.getLine(n),n))return
if(t.wrap==false)return
for(n=o,a=s.row;n<=a;n++)if(i(e.getLine(n),n))return}
return{forEach:l}}}).call(o.prototype)
t.Search=o})
ace.define("ace/commands/command_manager",["require","exports","module","ace/lib/oop","ace/keyboard/hash_handler","ace/lib/event_emitter"],function(e,t,i){var n=e("../lib/oop")
var r=e("../keyboard/hash_handler").HashHandler
var s=e("../lib/event_emitter").EventEmitter
var o=function(e,t){r.call(this,t,e)
this.byName=this.commands
this.setDefaultHandler("exec",function(e){return e.command.exec(e.editor,e.args||{})})}
n.inherits(o,r);(function(){n.implement(this,s)
this.exec=function(e,t,i){if(typeof e==="string")e=this.commands[e]
if(!e)return false
if(t&&t.$readOnly&&!e.readOnly)return false
var n={editor:t,command:e,args:i}
var r=this._emit("exec",n)
this._signal("afterExec",n)
return r===false?false:true}
this.toggleRecording=function(e){if(this.$inReplay)return
e&&e._emit("changeStatus")
if(this.recording){this.macro.pop()
this.removeEventListener("exec",this.$addCommandToMacro)
if(!this.macro.length)this.macro=this.oldMacro
return this.recording=false}if(!this.$addCommandToMacro){this.$addCommandToMacro=function(e){this.macro.push([e.command,e.args])}.bind(this)}this.oldMacro=this.macro
this.macro=[]
this.on("exec",this.$addCommandToMacro)
return this.recording=true}
this.replay=function(e){if(this.$inReplay||!this.macro)return
if(this.recording)return this.toggleRecording(e)
try{this.$inReplay=true
this.macro.forEach(function(t){if(typeof t=="string")this.exec(t,e)
else this.exec(t[0],e,t[1])},this)}finally{this.$inReplay=false}}
this.trimMacro=function(e){return e.map(function(e){if(typeof e[0]!="string")e[0]=e[0].name
if(!e[1])e=e[0]
return e})}}).call(o.prototype)
t.CommandManager=o})
ace.define("ace/keyboard/hash_handler",["require","exports","module","ace/lib/keys","ace/lib/useragent"],function(e,t,i){var n=e("../lib/keys")
var r=e("../lib/useragent")
function s(e,t){this.platform=t||(r.isMac?"mac":"win")
this.commands={}
this.commandKeyBinding={}
if(this.__defineGetter__&&this.__defineSetter__&&typeof console!="undefined"&&console.error){var i=false
var n=function(){if(!i){i=true
console.error("commmandKeyBinding has too many m's. use commandKeyBinding")}}
this.__defineGetter__("commmandKeyBinding",function(){n()
return this.commandKeyBinding})
this.__defineSetter__("commmandKeyBinding",function(e){n()
return this.commandKeyBinding=e})}else{this.commmandKeyBinding=this.commandKeyBinding}this.addCommands(e)}(function(){this.addCommand=function(e){if(this.commands[e.name])this.removeCommand(e)
this.commands[e.name]=e
if(e.bindKey)this._buildKeyHash(e)}
this.removeCommand=function(e){var t=typeof e==="string"?e:e.name
e=this.commands[t]
delete this.commands[t]
var i=this.commandKeyBinding
for(var n in i){for(var r in i[n]){if(i[n][r]==e)delete i[n][r]}}}
this.bindKey=function(e,t){if(!e)return
if(typeof t=="function"){this.addCommand({exec:t,bindKey:e,name:t.name||e})
return}var i=this.commandKeyBinding
e.split("|").forEach(function(e){var n=this.parseKeys(e,t)
var r=n.hashId;(i[r]||(i[r]={}))[n.key]=t},this)}
this.addCommands=function(e){e&&Object.keys(e).forEach(function(t){var i=e[t]
if(!i)return
if(typeof i==="string")return this.bindKey(i,t)
if(typeof i==="function")i={exec:i}
if(!i.name)i.name=t
this.addCommand(i)},this)}
this.removeCommands=function(e){Object.keys(e).forEach(function(t){this.removeCommand(e[t])},this)}
this.bindKeys=function(e){Object.keys(e).forEach(function(t){this.bindKey(t,e[t])},this)}
this._buildKeyHash=function(e){var t=e.bindKey
if(!t)return
var i=typeof t=="string"?t:t[this.platform]
this.bindKey(i,e)}
this.parseKeys=function(e){if(e.indexOf(" ")!=-1)e=e.split(/\s+/).pop()
var t=e.toLowerCase().split(/[\-\+]([\-\+])?/).filter(function(e){return e})
var i=t.pop()
var r=n[i]
if(n.FUNCTION_KEYS[r])i=n.FUNCTION_KEYS[r].toLowerCase()
else if(!t.length)return{key:i,hashId:-1}
else if(t.length==1&&t[0]=="shift")return{key:i.toUpperCase(),hashId:-1}
var s=0
for(var o=t.length;o--;){var a=n.KEY_MODS[t[o]]
if(a==null){if(typeof console!="undefined")console.error("invalid modifier "+t[o]+" in "+e)
return false}s|=a}return{key:i,hashId:s}}
this.findKeyCommand=function e(t,i){var n=this.commandKeyBinding
return n[t]&&n[t][i]}
this.handleKeyboard=function(e,t,i,n){return{command:this.findKeyCommand(t,i)}}}).call(s.prototype)
t.HashHandler=s})
ace.define("ace/commands/default_commands",["require","exports","module","ace/lib/lang","ace/config"],function(e,t,i){var n=e("../lib/lang")
var r=e("../config")
function s(e,t){return{win:e,mac:t}}t.commands=[{name:"showSettingsMenu",bindKey:s("Ctrl-,","Command-,"),exec:function(e){r.loadModule("ace/ext/settings_menu",function(t){t.init(e)
e.showSettingsMenu()})},readOnly:true},{name:"selectall",bindKey:s("Ctrl-A","Command-A"),exec:function(e){e.selectAll()},readOnly:true},{name:"centerselection",bindKey:s(null,"Ctrl-L"),exec:function(e){e.centerSelection()},readOnly:true},{name:"gotoline",bindKey:s("Ctrl-L","Command-L"),exec:function(e){var t=parseInt(prompt("Enter line number:"),10)
if(!isNaN(t)){e.gotoLine(t)}},readOnly:true},{name:"fold",bindKey:s("Alt-L|Ctrl-F1","Command-Alt-L|Command-F1"),exec:function(e){e.session.toggleFold(false)},readOnly:true},{name:"unfold",bindKey:s("Alt-Shift-L|Ctrl-Shift-F1","Command-Alt-Shift-L|Command-Shift-F1"),exec:function(e){e.session.toggleFold(true)},readOnly:true},{name:"foldall",bindKey:s("Alt-0","Command-Option-0"),exec:function(e){e.session.foldAll()},readOnly:true},{name:"unfoldall",bindKey:s("Alt-Shift-0","Command-Option-Shift-0"),exec:function(e){e.session.unfold()},readOnly:true},{name:"findnext",bindKey:s("Ctrl-K","Command-G"),exec:function(e){e.findNext()},readOnly:true},{name:"findprevious",bindKey:s("Ctrl-Shift-K","Command-Shift-G"),exec:function(e){e.findPrevious()},readOnly:true},{name:"find",bindKey:s("Ctrl-F","Command-F"),exec:function(e){r.loadModule("ace/ext/searchbox",function(t){t.Search(e)})},readOnly:true},{name:"overwrite",bindKey:"Insert",exec:function(e){e.toggleOverwrite()},readOnly:true},{name:"selecttostart",bindKey:s("Ctrl-Shift-Home","Command-Shift-Up"),exec:function(e){e.getSelection().selectFileStart()},multiSelectAction:"forEach",readOnly:true,group:"fileJump"},{name:"gotostart",bindKey:s("Ctrl-Home","Command-Home|Command-Up"),exec:function(e){e.navigateFileStart()},multiSelectAction:"forEach",readOnly:true,group:"fileJump"},{name:"selectup",bindKey:s("Shift-Up","Shift-Up"),exec:function(e){e.getSelection().selectUp()},multiSelectAction:"forEach",readOnly:true},{name:"golineup",bindKey:s("Up","Up|Ctrl-P"),exec:function(e,t){e.navigateUp(t.times)},multiSelectAction:"forEach",readOnly:true},{name:"selecttoend",bindKey:s("Ctrl-Shift-End","Command-Shift-Down"),exec:function(e){e.getSelection().selectFileEnd()},multiSelectAction:"forEach",readOnly:true,group:"fileJump"},{name:"gotoend",bindKey:s("Ctrl-End","Command-End|Command-Down"),exec:function(e){e.navigateFileEnd()},multiSelectAction:"forEach",readOnly:true,group:"fileJump"},{name:"selectdown",bindKey:s("Shift-Down","Shift-Down"),exec:function(e){e.getSelection().selectDown()},multiSelectAction:"forEach",readOnly:true},{name:"golinedown",bindKey:s("Down","Down|Ctrl-N"),exec:function(e,t){e.navigateDown(t.times)},multiSelectAction:"forEach",readOnly:true},{name:"selectwordleft",bindKey:s("Ctrl-Shift-Left","Option-Shift-Left"),exec:function(e){e.getSelection().selectWordLeft()},multiSelectAction:"forEach",readOnly:true},{name:"gotowordleft",bindKey:s("Ctrl-Left","Option-Left"),exec:function(e){e.navigateWordLeft()},multiSelectAction:"forEach",readOnly:true},{name:"selecttolinestart",bindKey:s("Alt-Shift-Left","Command-Shift-Left"),exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:true},{name:"gotolinestart",bindKey:s("Alt-Left|Home","Command-Left|Home|Ctrl-A"),exec:function(e){e.navigateLineStart()},multiSelectAction:"forEach",readOnly:true},{name:"selectleft",bindKey:s("Shift-Left","Shift-Left"),exec:function(e){e.getSelection().selectLeft()},multiSelectAction:"forEach",readOnly:true},{name:"gotoleft",bindKey:s("Left","Left|Ctrl-B"),exec:function(e,t){e.navigateLeft(t.times)},multiSelectAction:"forEach",readOnly:true},{name:"selectwordright",bindKey:s("Ctrl-Shift-Right","Option-Shift-Right"),exec:function(e){e.getSelection().selectWordRight()},multiSelectAction:"forEach",readOnly:true},{name:"gotowordright",bindKey:s("Ctrl-Right","Option-Right"),exec:function(e){e.navigateWordRight()},multiSelectAction:"forEach",readOnly:true},{name:"selecttolineend",bindKey:s("Alt-Shift-Right","Command-Shift-Right"),exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:true},{name:"gotolineend",bindKey:s("Alt-Right|End","Command-Right|End|Ctrl-E"),exec:function(e){e.navigateLineEnd()},multiSelectAction:"forEach",readOnly:true},{name:"selectright",bindKey:s("Shift-Right","Shift-Right"),exec:function(e){e.getSelection().selectRight()},multiSelectAction:"forEach",readOnly:true},{name:"gotoright",bindKey:s("Right","Right|Ctrl-F"),exec:function(e,t){e.navigateRight(t.times)},multiSelectAction:"forEach",readOnly:true},{name:"selectpagedown",bindKey:"Shift-PageDown",exec:function(e){e.selectPageDown()},readOnly:true},{name:"pagedown",bindKey:s(null,"Option-PageDown"),exec:function(e){e.scrollPageDown()},readOnly:true},{name:"gotopagedown",bindKey:s("PageDown","PageDown|Ctrl-V"),exec:function(e){e.gotoPageDown()},readOnly:true},{name:"selectpageup",bindKey:"Shift-PageUp",exec:function(e){e.selectPageUp()},readOnly:true},{name:"pageup",bindKey:s(null,"Option-PageUp"),exec:function(e){e.scrollPageUp()},readOnly:true},{name:"gotopageup",bindKey:"PageUp",exec:function(e){e.gotoPageUp()},readOnly:true},{name:"scrollup",bindKey:s("Ctrl-Up",null),exec:function(e){e.renderer.scrollBy(0,-2*e.renderer.layerConfig.lineHeight)},readOnly:true},{name:"scrolldown",bindKey:s("Ctrl-Down",null),exec:function(e){e.renderer.scrollBy(0,2*e.renderer.layerConfig.lineHeight)},readOnly:true},{name:"selectlinestart",bindKey:"Shift-Home",exec:function(e){e.getSelection().selectLineStart()},multiSelectAction:"forEach",readOnly:true},{name:"selectlineend",bindKey:"Shift-End",exec:function(e){e.getSelection().selectLineEnd()},multiSelectAction:"forEach",readOnly:true},{name:"togglerecording",bindKey:s("Ctrl-Alt-E","Command-Option-E"),exec:function(e){e.commands.toggleRecording(e)},readOnly:true},{name:"replaymacro",bindKey:s("Ctrl-Shift-E","Command-Shift-E"),exec:function(e){e.commands.replay(e)},readOnly:true},{name:"jumptomatching",bindKey:s("Ctrl-P","Ctrl-Shift-P"),exec:function(e){e.jumpToMatching()},multiSelectAction:"forEach",readOnly:true},{name:"selecttomatching",bindKey:s("Ctrl-Shift-P",null),exec:function(e){e.jumpToMatching(true)},multiSelectAction:"forEach",readOnly:true},{name:"cut",exec:function(e){var t=e.getSelectionRange()
e._emit("cut",t)
if(!e.selection.isEmpty()){e.session.remove(t)
e.clearSelection()}},multiSelectAction:"forEach"},{name:"removeline",bindKey:s("Ctrl-D","Command-D"),exec:function(e){e.removeLines()},multiSelectAction:"forEachLine"},{name:"duplicateSelection",bindKey:s("Ctrl-Shift-D","Command-Shift-D"),exec:function(e){e.duplicateSelection()},multiSelectAction:"forEach"},{name:"sortlines",bindKey:s("Ctrl-Alt-S","Command-Alt-S"),exec:function(e){e.sortLines()},multiSelectAction:"forEachLine"},{name:"togglecomment",bindKey:s("Ctrl-/","Command-/"),exec:function(e){e.toggleCommentLines()},multiSelectAction:"forEachLine"},{name:"toggleBlockComment",bindKey:s("Ctrl-Shift-/","Command-Shift-/"),exec:function(e){e.toggleBlockComment()},multiSelectAction:"forEach"},{name:"modifyNumberUp",bindKey:s("Ctrl-Shift-Up","Alt-Shift-Up"),exec:function(e){e.modifyNumber(1)},multiSelectAction:"forEach"},{name:"modifyNumberDown",bindKey:s("Ctrl-Shift-Down","Alt-Shift-Down"),exec:function(e){e.modifyNumber(-1)},multiSelectAction:"forEach"},{name:"replace",bindKey:s("Ctrl-H","Command-Option-F"),exec:function(e){r.loadModule("ace/ext/searchbox",function(t){t.Search(e,true)})}},{name:"undo",bindKey:s("Ctrl-Z","Command-Z"),exec:function(e){e.undo()}},{name:"redo",bindKey:s("Ctrl-Shift-Z|Ctrl-Y","Command-Shift-Z|Command-Y"),exec:function(e){e.redo()}},{name:"copylinesup",bindKey:s("Alt-Shift-Up","Command-Option-Up"),exec:function(e){e.copyLinesUp()}},{name:"movelinesup",bindKey:s("Alt-Up","Option-Up"),exec:function(e){e.moveLinesUp()}},{name:"copylinesdown",bindKey:s("Alt-Shift-Down","Command-Option-Down"),exec:function(e){e.copyLinesDown()}},{name:"movelinesdown",bindKey:s("Alt-Down","Option-Down"),exec:function(e){e.moveLinesDown()}},{name:"del",bindKey:s("Delete","Delete|Ctrl-D|Shift-Delete"),exec:function(e){e.remove("right")},multiSelectAction:"forEach"},{name:"backspace",bindKey:s("Shift-Backspace|Backspace","Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),exec:function(e){e.remove("left")},multiSelectAction:"forEach"},{name:"cut_or_delete",bindKey:s("Shift-Delete",null),exec:function(e){if(e.selection.isEmpty()){e.remove("left")}else{return false}},multiSelectAction:"forEach"},{name:"removetolinestart",bindKey:s("Alt-Backspace","Command-Backspace"),exec:function(e){e.removeToLineStart()},multiSelectAction:"forEach"},{name:"removetolineend",bindKey:s("Alt-Delete","Ctrl-K"),exec:function(e){e.removeToLineEnd()},multiSelectAction:"forEach"},{name:"removewordleft",bindKey:s("Ctrl-Backspace","Alt-Backspace|Ctrl-Alt-Backspace"),exec:function(e){e.removeWordLeft()},multiSelectAction:"forEach"},{name:"removewordright",bindKey:s("Ctrl-Delete","Alt-Delete"),exec:function(e){e.removeWordRight()},multiSelectAction:"forEach"},{name:"outdent",bindKey:s("Shift-Tab","Shift-Tab"),exec:function(e){e.blockOutdent()},multiSelectAction:"forEach"},{name:"indent",bindKey:s("Tab","Tab"),exec:function(e){e.indent()},multiSelectAction:"forEach"},{name:"blockoutdent",bindKey:s("Ctrl-[","Ctrl-["),exec:function(e){e.blockOutdent()},multiSelectAction:"forEachLine"},{name:"blockindent",bindKey:s("Ctrl-]","Ctrl-]"),exec:function(e){e.blockIndent()},multiSelectAction:"forEachLine"},{name:"insertstring",exec:function(e,t){e.insert(t)},multiSelectAction:"forEach"},{name:"inserttext",exec:function(e,t){e.insert(n.stringRepeat(t.text||"",t.times||1))},multiSelectAction:"forEach"},{name:"splitline",bindKey:s(null,"Ctrl-O"),exec:function(e){e.splitLine()},multiSelectAction:"forEach"},{name:"transposeletters",bindKey:s("Ctrl-T","Ctrl-T"),exec:function(e){e.transposeLetters()},multiSelectAction:function(e){e.transposeSelections(1)}},{name:"touppercase",bindKey:s("Ctrl-U","Ctrl-U"),exec:function(e){e.toUpperCase()},multiSelectAction:"forEach"},{name:"tolowercase",bindKey:s("Ctrl-Shift-U","Ctrl-Shift-U"),exec:function(e){e.toLowerCase()},multiSelectAction:"forEach"}]})
ace.define("ace/undomanager",["require","exports","module"],function(e,t,i){var n=function(){this.reset()};(function(){this.execute=function(e){var t=e.args[0]
this.$doc=e.args[1]
if(e.merge&&this.hasUndo()){t=this.$undoStack.pop().concat(t)}this.$undoStack.push(t)
this.$redoStack=[]
if(this.dirtyCounter<0){this.dirtyCounter=NaN}this.dirtyCounter++}
this.undo=function(e){var t=this.$undoStack.pop()
var i=null
if(t){i=this.$doc.undoChanges(t,e)
this.$redoStack.push(t)
this.dirtyCounter--}return i}
this.redo=function(e){var t=this.$redoStack.pop()
var i=null
if(t){i=this.$doc.redoChanges(t,e)
this.$undoStack.push(t)
this.dirtyCounter++}return i}
this.reset=function(){this.$undoStack=[]
this.$redoStack=[]
this.dirtyCounter=0}
this.hasUndo=function(){return this.$undoStack.length>0}
this.hasRedo=function(){return this.$redoStack.length>0}
this.markClean=function(){this.dirtyCounter=0}
this.isClean=function(){return this.dirtyCounter===0}}).call(n.prototype)
t.UndoManager=n})
ace.define("ace/virtual_renderer",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/useragent","ace/config","ace/layer/gutter","ace/layer/marker","ace/layer/text","ace/layer/cursor","ace/scrollbar","ace/renderloop","ace/lib/event_emitter"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/dom")
var s=e("./lib/useragent")
var o=e("./config")
var a=e("./layer/gutter").Gutter
var l=e("./layer/marker").Marker
var h=e("./layer/text").Text
var c=e("./layer/cursor").Cursor
var u=e("./scrollbar").ScrollBarH
var d=e("./scrollbar").ScrollBarV
var f=e("./renderloop").RenderLoop
var g=e("./lib/event_emitter").EventEmitter
var m=".ace_editor {position: relative;overflow: hidden;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;font-size: 12px;line-height: normal;color: black;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: text;}.ace_dragging, .ace_dragging * {cursor: move !important;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTQ4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTU4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBMjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBMzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkgXxbAAAAJbSURBVHjapFNNaBNBFH4zs5vdZLP5sQmNpT82QY209heh1ioWisaDRcSKF0WKJ0GQnrzrxasHsR6EnlrwD0TagxJabaVEpFYxLWlLSS822tr87m66ccfd2GKyVhA6MMybgfe97/vmPUQphd0sZjto9XIn9OOsvlu2nkqRzVU+6vvlzPf8W6bk8dxQ0NPbxAALgCgg2JkaQuhzQau/El0zbmUA7U0Es8v2CiYmKQJHGO1QICCLoqilMhkmurDAyapKgqItezi/USRdJqEYY4D5jCy03ht2yMkkvL91jTTX10qzyyu2hruPRN7jgbH+EOsXcMLgYiThEgAMhABW85oqy1DXdRIdvP1AHJ2acQXvDIrVHcdQNrEKNYSVMSZGMjEzIIAwDXIo+6G/FxcGnzkC3T2oMhLjre49sBB+RRcHLqdafK6sYdE/GGBwU1VpFNj0aN8pJbe+BkZyevUrvLl6Xmm0W9IuTc0DxrDNAJd5oEvI/KRsNC3bQyNjPO9yQ1YHcfj2QvfQc/5TUhJTBc2iM0U7AWDQtc1nJHvD/cfO2s7jaGkiTEfa/Ep8coLu7zmNmh8+dc5lZDuUeFAGUNA/OY6JVaypQ0vjr7XYjUvJM37vt+j1vuTK5DgVfVUoTjVe+y3/LxMxY2GgU+CSLy4cpfsYorRXuXIOi0Vt40h67uZFTdIo6nLaZcwUJWAzwNS0tBnqqKzQDnjdG/iPyZxo46HaKUpbvYkj8qYRTZsBhge+JHhZyh0x9b95JqjVJkT084kZIPwu/mPWqPgfQ5jXh2+92Ay7HedfAgwA6KDWafb4w3cAAAAASUVORK5CYII=\");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUM2OEZDQTg4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUM2OEZDQTk4RTU0MTFFMUEzM0VFRTM2RUY1M0RBMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQzY4RkNBNjhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQzY4RkNBNzhFNTQxMUUxQTMzRUVFMzZFRjUzREEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgd7PfIAAAGmSURBVHjaYvr//z8DJZiJgUIANoCRkREb9gLiSVAaQx4OQM7AAkwd7XU2/v++/rOttdYGEB9dASEvOMydGKfH8Gv/p4XTkvRBfLxeQAP+1cUhXopyvzhP7P/IoSj7g7Mw09cNKO6J1QQ0L4gICPIv/veg/8W+JdFvQNLHVsW9/nmn9zk7B+cCkDwhL7gt6knSZnx9/LuCEOcvkIAMP+cvto9nfqyZmmUAksfnBUtbM60gX/3/kgyv3/xSFOL5DZT+L8vP+Yfh5cvfPvp/xUHyQHXGyAYwgpwBjZYFT3Y1OEl/OfCH4ffv3wzc4iwMvNIsDJ+f/mH4+vIPAxsb631WW0Yln6ZpQLXdMK/DXGDflh+sIv37EivD5x//Gb7+YWT4y86sl7BCCkSD+Z++/1dkvsFRl+HnD1Rvje4F8whjMXmGj58YGf5zsDMwcnAwfPvKcml62DsQDeaDxN+/Y0qwlpEHqrdB94IRNIDUgfgfKJChGK4OikEW3gTiXUB950ASLFAF54AC94A0G9QAfOnmF9DCDzABFqS08IHYDIScdijOjQABBgC+/9awBH96jwAAAABJRU5ErkJggg==\");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url(\"data:image/gif;base64,R0lGODlhEAAQAMQAAAAAAEFBQVJSUl5eXmRkZGtra39/f4WFhYmJiZGRkaampry8vMPDw8zMzNXV1dzc3OTk5Orq6vDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABQALAAAAAAQABAAAAUuICWOZGmeaBml5XGwFCQSBGyXRSAwtqQIiRuiwIM5BoYVbEFIyGCQoeJGrVptIQA7\");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRTk5MTVGREIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRTk5MTVGRUIxNDkxMUUxOTc5Q0FFREQyMTNGMjBFQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZFOTkxNUZCQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFOTkxNUZDQjE0OTExRTE5NzlDQUVERDIxM0YyMEVDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SIDkjAAAAJ1JREFUeNpi/P//PwMlgImBQkB7A6qrq/+DMC55FkIGKCoq4pVnpFkgTp069f/+/fv/r1u37r+tre1/kg0A+ptn9uzZYLaRkRHpLvjw4cNXWVlZhufPnzOcO3eOdAO0tbVPAjHDmzdvGA4fPsxIsgGSkpJmv379Ynj37h2DjIyMCMkG3LhxQ/T27dsMampqDHZ2dq/pH41DxwCAAAMAFdc68dUsFZgAAAAASUVORK5CYII=\");}.ace_scrollbar {position: absolute;overflow-x: hidden;overflow-y: auto;right: 0;top: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-h {position: absolute;overflow-x: auto;overflow-y: hidden;right: 0;left: 0;bottom: 0;z-index: 6;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;}.ace_text-input.ace_composition {background: #f8f8f8;color: #111;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: nowrap;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;/* setting pointer-events: auto; on node under the mouse, which changesduring scroll, will break mouse wheel scrolling in Safari */pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0px;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-moz-transition: opacity 0.18s;-webkit-transition: opacity 0.18s;-o-transition: opacity 0.18s;-ms-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_cursor[style*=\"opacity: 0\"]{-ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_line {white-space: nowrap;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%3AIDAT8%11c%FC%FF%FF%7F%18%03%1A%60%01%F2%3F%A0%891%80%04%FF%11-%F8%17%9BJ%E2%05%B1ZD%81v%26t%E7%80%F8%A3%82h%A12%1A%20%A3%01%02%0F%01%BA%25%06%00%19%C0%0D%AEF%D5%3ES%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%11%00%00%00%09%08%06%00%00%00%D4%E8%C7%0C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%00%B5IDAT(%15%A5%91%3D%0E%02!%10%85ac%E1%05%D6%CE%D6%C6%CE%D2%E8%ED%CD%DE%C0%C6%D6N.%E0V%F8%3D%9Ca%891XH%C2%BE%D9y%3F%90!%E6%9C%C3%BFk%E5%011%C6-%F5%C8N%04%DF%BD%FF%89%DFt%83DN%60%3E%F3%AB%A0%DE%1A%5Dg%BE%10Q%97%1B%40%9C%A8o%10%8F%5E%828%B4%1B%60%87%F6%02%26%85%1Ch%1E%C1%2B%5Bk%FF%86%EE%B7j%09%9A%DA%9B%ACe%A3%F9%EC%DA!9%B4%D5%A6%81%86%86%98%CC%3C%5B%40%FA%81%B3%E9%CB%23%94%C16Azo%05%D4%E1%C1%95a%3B%8A'%A0%E8%CC%17%22%85%1D%BA%00%A2%FA%DC%0A%94%D1%D1%8D%8B%3A%84%17B%C7%60%1A%25Z%FC%8D%00%00%00%00IEND%AEB%60%82\"),url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%007%08%06%00%00%00%C4%DD%80C%00%00%03%1EiCCPICC%20Profile%00%00x%01%85T%DFk%D3P%14%FE%DAe%9D%B0%E1%8B%3Ag%11%09%3Eh%91ndStC%9C%B6kW%BA%CDZ%EA6%B7!H%9B%A6m%5C%9A%C6%24%ED~%B0%07%D9%8Bo%3A%C5w%F1%07%3E%F9%07%0C%D9%83o%7B%92%0D%C6%14a%F8%AC%88%22L%F6%22%B3%9E%9B4M'S%03%B9%F7%BB%DF%F9%EE9'%E7%E4%5E%A0%F9qZ%D3%14%2F%0F%14USO%C5%C2%FC%C4%E4%14%DF%F2%01%5E%1CC%2B%FChM%8B%86%16J%26G%40%0F%D3%B2y%EF%B3%F3%0E%1E%C6lt%EEo%DF%AB%FEc%D5%9A%95%0C%11%F0%1C%20%BE%945%C4%22%E1Y%A0i%5C%D4t%13%E0%D6%89%EF%9D15%C2%CDLsX%A7%04%09%1Fg8oc%81%E1%8C%8D%23%96f45%40%9A%09%C2%07%C5B%3AK%B8%408%98i%E0%F3%0D%D8%CE%81%14%E4'%26%A9%92.%8B%3C%ABER%2F%E5dE%B2%0C%F6%F0%1Fs%83%F2_%B0%A8%94%E9%9B%AD%E7%10%8Dm%9A%19N%D1%7C%8A%DE%1F9%7Dp%8C%E6%00%D5%C1%3F_%18%BDA%B8%9DpX6%E3%A35~B%CD%24%AE%11%26%BD%E7%EEti%98%EDe%9A%97Y)%12%25%1C%24%BCbT%AE3li%E6%0B%03%89%9A%E6%D3%ED%F4P%92%B0%9F4%BF43Y%F3%E3%EDP%95%04%EB1%C5%F5%F6KF%F4%BA%BD%D7%DB%91%93%07%E35%3E%A7)%D6%7F%40%FE%BD%F7%F5r%8A%E5y%92%F0%EB%B4%1E%8D%D5%F4%5B%92%3AV%DB%DB%E4%CD%A6%23%C3%C4wQ%3F%03HB%82%8E%1Cd(%E0%91B%0Ca%9Ac%C4%AA%F8L%16%19%22J%A4%D2itTy%B28%D6%3B(%93%96%ED%1CGx%C9_%0E%B8%5E%16%F5%5B%B2%B8%F6%E0%FB%9E%DD%25%D7%8E%BC%15%85%C5%B7%A3%D8Q%ED%B5%81%E9%BA%B2%13%9A%1B%7Fua%A5%A3n%E17%B9%E5%9B%1Bm%AB%0B%08Q%FE%8A%E5%B1H%5Ee%CAO%82Q%D7u6%E6%90S%97%FCu%0B%CF2%94%EE%25v%12X%0C%BA%AC%F0%5E%F8*l%0AO%85%17%C2%97%BF%D4%C8%CE%DE%AD%11%CB%80q%2C%3E%AB%9ES%CD%C6%EC%25%D2L%D2%EBd%B8%BF%8A%F5B%C6%18%F9%901CZ%9D%BE%24M%9C%8A9%F2%DAP%0B'%06w%82%EB%E6%E2%5C%2F%D7%07%9E%BB%CC%5D%E1%FA%B9%08%AD.r%23%8E%C2%17%F5E%7C!%F0%BE3%BE%3E_%B7o%88a%A7%DB%BE%D3d%EB%A31Z%EB%BB%D3%91%BA%A2%B1z%94%8F%DB'%F6%3D%8E%AA%13%19%B2%B1%BE%B1~V%08%2B%B4%A2cjJ%B3tO%00%03%25mN%97%F3%05%93%EF%11%84%0B%7C%88%AE-%89%8F%ABbW%90O%2B%0Ao%99%0C%5E%97%0CI%AFH%D9.%B0%3B%8F%ED%03%B6S%D6%5D%E6i_s9%F3*p%E9%1B%FD%C3%EB.7U%06%5E%19%C0%D1s.%17%A03u%E4%09%B0%7C%5E%2C%EB%15%DB%1F%3C%9E%B7%80%91%3B%DBc%AD%3Dma%BA%8B%3EV%AB%DBt.%5B%1E%01%BB%0F%AB%D5%9F%CF%AA%D5%DD%E7%E4%7F%0Bx%A3%FC%06%A9%23%0A%D6%C2%A1_2%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%9A%9C%18%00%00%003IDAT8%11c%FC%FF%FF%7F%3E%03%1A%60%01%F2%3F%A3%891%80%04%FFQ%26%F8w%C0%B43%A1%DB%0C%E2%8F%0A%A2%85%CAh%80%8C%06%08%3C%04%E8%96%18%00%A3S%0D%CD%CF%D8%C1%9D%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat, repeat-x;background-position: center center, top left;}.ace_gutter-tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;display: inline-block;max-width: 500px;padding: 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre-line;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAe%8A%B1%0D%000%0C%C2%F2%2CK%96%BC%D0%8F9%81%88H%E9%D0%0E%96%C0%10%92%3E%02%80%5E%82%E4%A9*-%EEsw%C8%CC%11%EE%96w%D8%DC%E9*Eh%0C%151(%00%00%00%00IEND%AEB%60%82\");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%8Do%26%E5%00%00%004IDATx%DAm%C7%C1%09%000%08C%D1%8C%ECE%C8E(%8E%EC%02)%1EZJ%F1%C1'%04%07I%E1%E5%EE%CAL%F5%A2%99%99%22%E2%D6%1FU%B5%FE0%D9x%A7%26Wz5%0E%D5%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget.ace_closed {background-image: url(\"data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%03%00%00%00%06%08%06%00%00%00%06%E5%24%0C%00%00%009IDATx%DA5%CA%C1%09%000%08%03%C0%AC*(%3E%04%C1%0D%BA%B1%23%A4Uh%E0%20%81%C0%CC%F8%82%81%AA%A2%AArGfr%88%08%11%11%1C%DD%7D%E0%EE%5B%F6%F6%CB%B8%05Q%2F%E9tai%D9%00%00%00%00IEND%AEB%60%82\");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}/*** Dark version for fold widgets*/.ace_dark .ace_fold-widget {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC\");}.ace_dark .ace_fold-widget.ace_end {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget.ace_closed {background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==\");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-moz-transition: opacity 0.4s ease 0.05s;-webkit-transition: opacity 0.4s ease 0.05s;-o-transition: opacity 0.4s ease 0.05s;-ms-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-moz-transition: opacity 0.05s ease 0.05s;-webkit-transition: opacity 0.05s ease 0.05s;-o-transition: opacity 0.05s ease 0.05s;-ms-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}"
r.importCssString(m,"ace_editor")
var v=function(e,t){var i=this
this.container=e||r.createElement("div")
this.$keepTextAreaAtCursor=true
r.addCssClass(this.container,"ace_editor")
this.setTheme(t)
this.$gutter=r.createElement("div")
this.$gutter.className="ace_gutter"
this.container.appendChild(this.$gutter)
this.scroller=r.createElement("div")
this.scroller.className="ace_scroller"
this.container.appendChild(this.scroller)
this.content=r.createElement("div")
this.content.className="ace_content"
this.scroller.appendChild(this.content)
this.$gutterLayer=new a(this.$gutter)
this.$gutterLayer.on("changeGutterWidth",this.onGutterResize.bind(this))
this.$markerBack=new l(this.content)
var n=this.$textLayer=new h(this.content)
this.canvas=n.element
this.$markerFront=new l(this.content)
this.$cursorLayer=new c(this.content)
this.$horizScroll=false
this.$vScroll=false
this.scrollBar=this.scrollBarV=new d(this.container,this)
this.scrollBarH=new u(this.container,this)
this.scrollBarV.addEventListener("scroll",function(e){if(!i.$scrollAnimation)i.session.setScrollTop(e.data-i.scrollMargin.top)})
this.scrollBarH.addEventListener("scroll",function(e){if(!i.$scrollAnimation)i.session.setScrollLeft(e.data-i.scrollMargin.left)})
this.scrollTop=0
this.scrollLeft=0
this.cursorPos={row:0,column:0}
this.$textLayer.addEventListener("changeCharacterSize",function(){i.updateCharacterSize()
i.onResize(true)
i._signal("changeCharacterSize")})
this.$size={width:0,height:0,scrollerHeight:0,scrollerWidth:0}
this.layerConfig={width:1,padding:0,firstRow:0,firstRowScreen:0,lastRow:0,lineHeight:0,characterWidth:0,minHeight:1,maxHeight:1,offset:0,height:1}
this.scrollMargin={left:0,right:0,top:0,bottom:0,v:0,h:0}
this.$loop=new f(this.$renderChanges.bind(this),this.container.ownerDocument.defaultView)
this.$loop.schedule(this.CHANGE_FULL)
this.updateCharacterSize()
this.setPadding(4)
o.resetOptions(this)
o._emit("renderer",this)};(function(){this.CHANGE_CURSOR=1
this.CHANGE_MARKER=2
this.CHANGE_GUTTER=4
this.CHANGE_SCROLL=8
this.CHANGE_LINES=16
this.CHANGE_TEXT=32
this.CHANGE_SIZE=64
this.CHANGE_MARKER_BACK=128
this.CHANGE_MARKER_FRONT=256
this.CHANGE_FULL=512
this.CHANGE_H_SCROLL=1024
n.implement(this,g)
this.updateCharacterSize=function(){if(this.$textLayer.allowBoldFonts!=this.$allowBoldFonts){this.$allowBoldFonts=this.$textLayer.allowBoldFonts
this.setStyle("ace_nobold",!this.$allowBoldFonts)}this.layerConfig.characterWidth=this.characterWidth=this.$textLayer.getCharacterWidth()
this.layerConfig.lineHeight=this.lineHeight=this.$textLayer.getLineHeight()
this.$updatePrintMargin()}
this.setSession=function(e){this.session=e
this.scroller.className="ace_scroller"
this.$cursorLayer.setSession(e)
this.$markerBack.setSession(e)
this.$markerFront.setSession(e)
this.$gutterLayer.setSession(e)
this.$textLayer.setSession(e)
this.$loop.schedule(this.CHANGE_FULL)}
this.updateLines=function(e,t){if(t===undefined)t=Infinity
if(!this.$changedLines){this.$changedLines={firstRow:e,lastRow:t}}else{if(this.$changedLines.firstRow>e)this.$changedLines.firstRow=e
if(this.$changedLines.lastRow<t)this.$changedLines.lastRow=t}if(this.$changedLines.firstRow>this.layerConfig.lastRow||this.$changedLines.lastRow<this.layerConfig.firstRow)return
this.$loop.schedule(this.CHANGE_LINES)}
this.onChangeTabSize=function(){this.$loop.schedule(this.CHANGE_TEXT|this.CHANGE_MARKER)
this.$textLayer.onChangeTabSize()}
this.updateText=function(){this.$loop.schedule(this.CHANGE_TEXT)}
this.updateFull=function(e){if(e)this.$renderChanges(this.CHANGE_FULL,true)
else this.$loop.schedule(this.CHANGE_FULL)}
this.updateFontSize=function(){this.$textLayer.checkForSizeChanges()}
this.$changes=0
this.onResize=function(e,t,i,n){if(this.resizing>2)return
else if(this.resizing>0)this.resizing++
else this.resizing=e?1:0
var r=this.container
if(!n)n=r.clientHeight||r.scrollHeight
if(!i)i=r.clientWidth||r.scrollWidth
var s=this.$updateCachedSize(e,t,i,n)
if(!this.$size.scrollerHeight||!i&&!n)return this.resizing=0
if(e)this.$gutterLayer.$padding=null
if(e)this.$renderChanges(s,true)
else this.$loop.schedule(s|this.$changes)
if(this.resizing)this.resizing=0}
this.$updateCachedSize=function(e,t,i,n){var r=0
var s=this.$size
var o={width:s.width,height:s.height,scrollerHeight:s.scrollerHeight,scrollerWidth:s.scrollerWidth}
if(n&&(e||s.height!=n)){s.height=n
r=this.CHANGE_SIZE
s.scrollerHeight=s.height
if(this.$horizScroll)s.scrollerHeight-=this.scrollBarH.getHeight()
this.scrollBarV.element.style.bottom=this.scrollBarH.getHeight()+"px"
if(this.session){this.session.setScrollTop(this.getScrollTop())
r=r|this.CHANGE_SCROLL}}if(i&&(e||s.width!=i)){r=this.CHANGE_SIZE
s.width=i
if(t==null)t=this.$showGutter?this.$gutter.offsetWidth:0
this.gutterWidth=t
this.scrollBarH.element.style.left=this.scroller.style.left=t+"px"
s.scrollerWidth=Math.max(0,i-t-this.scrollBarV.getWidth())
this.scrollBarH.element.style.right=this.scroller.style.right=this.scrollBarV.getWidth()+"px"
this.scroller.style.bottom=this.scrollBarH.getHeight()+"px"
if(this.session&&this.session.getUseWrapMode()&&this.adjustWrapLimit()||e)r=r|this.CHANGE_FULL}if(r)this._signal("resize",o)
return r}
this.onGutterResize=function(){var e=this.$showGutter?this.$gutter.offsetWidth:0
if(e!=this.gutterWidth)this.$changes|=this.$updateCachedSize(true,e,this.$size.width,this.$size.height)
if(this.session.getUseWrapMode()&&this.adjustWrapLimit())this.$loop.schedule(this.CHANGE_FULL)
else{this.$computeLayerConfig()
this.$loop.schedule(this.CHANGE_MARKER)}}
this.adjustWrapLimit=function(){var e=this.$size.scrollerWidth-this.$padding*2
var t=Math.floor(e/this.characterWidth)
return this.session.adjustWrapLimit(t,this.$showPrintMargin&&this.$printMarginColumn)}
this.setAnimatedScroll=function(e){this.setOption("animatedScroll",e)}
this.getAnimatedScroll=function(){return this.$animatedScroll}
this.setShowInvisibles=function(e){this.setOption("showInvisibles",e)}
this.getShowInvisibles=function(){return this.getOption("showInvisibles")}
this.getDisplayIndentGuides=function(){return this.getOption("displayIndentGuides")}
this.setDisplayIndentGuides=function(e){this.setOption("displayIndentGuides",e)}
this.setShowPrintMargin=function(e){this.setOption("showPrintMargin",e)}
this.getShowPrintMargin=function(){return this.getOption("showPrintMargin")}
this.setPrintMarginColumn=function(e){this.setOption("printMarginColumn",e)}
this.getPrintMarginColumn=function(){return this.getOption("printMarginColumn")}
this.getShowGutter=function(){return this.getOption("showGutter")}
this.setShowGutter=function(e){return this.setOption("showGutter",e)}
this.getFadeFoldWidgets=function(){return this.getOption("fadeFoldWidgets")}
this.setFadeFoldWidgets=function(e){this.setOption("fadeFoldWidgets",e)}
this.setHighlightGutterLine=function(e){this.setOption("highlightGutterLine",e)}
this.getHighlightGutterLine=function(){return this.getOption("highlightGutterLine")}
this.$updateGutterLineHighlight=function(){var e=this.$cursorLayer.$pixelPos
var t=this.layerConfig.lineHeight
if(this.session.getUseWrapMode()){var i=this.session.selection.getCursor()
i.column=0
e=this.$cursorLayer.getPixelPosition(i,true)
t*=this.session.getRowLength(i.row)}this.$gutterLineHighlight.style.top=e.top-this.layerConfig.offset+"px"
this.$gutterLineHighlight.style.height=t+"px"}
this.$updatePrintMargin=function(){if(!this.$showPrintMargin&&!this.$printMarginEl)return
if(!this.$printMarginEl){var e=r.createElement("div")
e.className="ace_layer ace_print-margin-layer"
this.$printMarginEl=r.createElement("div")
this.$printMarginEl.className="ace_print-margin"
e.appendChild(this.$printMarginEl)
this.content.insertBefore(e,this.content.firstChild)}var t=this.$printMarginEl.style
t.left=this.characterWidth*this.$printMarginColumn+this.$padding+"px"
t.visibility=this.$showPrintMargin?"visible":"hidden"
if(this.session&&this.session.$wrap==-1)this.adjustWrapLimit()}
this.getContainerElement=function(){return this.container}
this.getMouseEventTarget=function(){return this.content}
this.getTextAreaContainer=function(){return this.container}
this.$moveTextAreaToCursor=function(){if(!this.$keepTextAreaAtCursor)return
var e=this.layerConfig
var t=this.$cursorLayer.$pixelPos.top
var i=this.$cursorLayer.$pixelPos.left
t-=e.offset
var n=this.lineHeight
if(t<0||t>e.height-n)return
var r=this.characterWidth
if(this.$composition){var s=this.textarea.value.replace(/^\x01+/,"")
r*=this.session.$getStringScreenWidth(s)[0]+2
n+=2
t-=1}i-=this.scrollLeft
if(i>this.$size.scrollerWidth-r)i=this.$size.scrollerWidth-r
i-=this.scrollBar.width
this.textarea.style.height=n+"px"
this.textarea.style.width=r+"px"
this.textarea.style.right=Math.max(0,this.$size.scrollerWidth-i-r)+"px"
this.textarea.style.bottom=Math.max(0,this.$size.height-t-n)+"px"}
this.getFirstVisibleRow=function(){return this.layerConfig.firstRow}
this.getFirstFullyVisibleRow=function(){return this.layerConfig.firstRow+(this.layerConfig.offset===0?0:1)}
this.getLastFullyVisibleRow=function(){var e=Math.floor((this.layerConfig.height+this.layerConfig.offset)/this.layerConfig.lineHeight)
return this.layerConfig.firstRow-1+e}
this.getLastVisibleRow=function(){return this.layerConfig.lastRow}
this.$padding=null
this.setPadding=function(e){this.$padding=e
this.$textLayer.setPadding(e)
this.$cursorLayer.setPadding(e)
this.$markerFront.setPadding(e)
this.$markerBack.setPadding(e)
this.$loop.schedule(this.CHANGE_FULL)
this.$updatePrintMargin()}
this.setScrollMargin=function(e,t,i,n){var r=this.scrollMargin
r.top=e|0
r.bottom=t|0
r.right=n|0
r.left=i|0
r.v=r.top+r.bottom
r.h=r.left+r.right
this.updateFull()}
this.getHScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible}
this.setHScrollBarAlwaysVisible=function(e){this.setOption("hScrollBarAlwaysVisible",e)}
this.getVScrollBarAlwaysVisible=function(){return this.$hScrollBarAlwaysVisible}
this.setVScrollBarAlwaysVisible=function(e){this.setOption("vScrollBarAlwaysVisible",e)}
this.$updateScrollBarV=function(){this.scrollBarV.setInnerHeight(this.layerConfig.maxHeight+this.scrollMargin.v)
this.scrollBarV.setScrollTop(this.scrollTop+this.scrollMargin.top)}
this.$updateScrollBarH=function(){this.scrollBarH.setInnerWidth(this.layerConfig.width+2*this.$padding+this.scrollMargin.h)
this.scrollBarH.setScrollLeft(this.scrollLeft+this.scrollMargin.left)}
this.$renderChanges=function(e,t){if(this.$changes){e|=this.$changes
this.$changes=0}if(!this.session||!this.container.offsetWidth||!e&&!t){this.$changes|=e
return}if(!this.$size.width){this.$changes|=e
return this.onResize(true)}if(!this.lineHeight){this.$textLayer.checkForSizeChanges()}this._signal("beforeRender")
if(e&this.CHANGE_FULL||e&this.CHANGE_SIZE||e&this.CHANGE_TEXT||e&this.CHANGE_LINES||e&this.CHANGE_SCROLL||e&this.CHANGE_H_SCROLL)e|=this.$computeLayerConfig()
if(e&this.CHANGE_H_SCROLL){this.$updateScrollBarH()
this.content.style.marginLeft=-this.scrollLeft+"px"
this.scroller.className=this.scrollLeft<=0?"ace_scroller":"ace_scroller ace_scroll-left"}if(e&this.CHANGE_FULL){this.$updateScrollBarV()
this.$updateScrollBarH()
this.$textLayer.update(this.layerConfig)
if(this.$showGutter)this.$gutterLayer.update(this.layerConfig)
this.$markerBack.update(this.layerConfig)
this.$markerFront.update(this.layerConfig)
this.$cursorLayer.update(this.layerConfig)
this.$moveTextAreaToCursor()
this.$highlightGutterLine&&this.$updateGutterLineHighlight()
this._signal("afterRender")
return}if(e&this.CHANGE_SCROLL){this.$updateScrollBarV()
if(e&this.CHANGE_TEXT||e&this.CHANGE_LINES)this.$textLayer.update(this.layerConfig)
else this.$textLayer.scrollLines(this.layerConfig)
if(this.$showGutter)this.$gutterLayer.update(this.layerConfig)
this.$markerBack.update(this.layerConfig)
this.$markerFront.update(this.layerConfig)
this.$cursorLayer.update(this.layerConfig)
this.$highlightGutterLine&&this.$updateGutterLineHighlight()
this.$moveTextAreaToCursor()
this._signal("afterRender")
return}if(e&this.CHANGE_TEXT){this.$textLayer.update(this.layerConfig)
if(this.$showGutter)this.$gutterLayer.update(this.layerConfig)}else if(e&this.CHANGE_LINES){if(this.$updateLines()||e&this.CHANGE_GUTTER&&this.$showGutter)this.$gutterLayer.update(this.layerConfig)}else if(e&this.CHANGE_TEXT||e&this.CHANGE_GUTTER){if(this.$showGutter)this.$gutterLayer.update(this.layerConfig)}if(e&this.CHANGE_CURSOR){this.$cursorLayer.update(this.layerConfig)
this.$moveTextAreaToCursor()
this.$highlightGutterLine&&this.$updateGutterLineHighlight()}if(e&(this.CHANGE_MARKER|this.CHANGE_MARKER_FRONT)){this.$markerFront.update(this.layerConfig)}if(e&(this.CHANGE_MARKER|this.CHANGE_MARKER_BACK)){this.$markerBack.update(this.layerConfig)}if(e&this.CHANGE_SIZE||e&this.CHANGE_LINES){this.$updateScrollBarV()
this.$updateScrollBarH()}this._signal("afterRender")}
this.$autosize=function(e,t){var e=this.session.getScreenLength()*this.lineHeight
var i=this.$maxLines*this.lineHeight
var n=Math.max((this.$minLines||1)*this.lineHeight,Math.min(i,e))
var r=e>i
if(n!=this.desiredHeight||this.$size.height!=this.desiredHeight||r!=this.$vScroll){if(r!=this.$vScroll){this.$vScroll=r
this.scrollBarV.setVisible(r)}var s=this.container.clientWidth
this.container.style.height=n+"px"
this.$updateCachedSize(true,this.$gutterWidth,s,n)
this.desiredHeight=n}}
this.$computeLayerConfig=function(){if(this.$maxLines&&this.lineHeight>1)this.$autosize()
var e=this.session
var t=this.$size.height<=2*this.lineHeight
var i=this.session.getScreenLength()
var n=i*this.lineHeight
var r=this.scrollTop%this.lineHeight
var s=this.$size.scrollerHeight+this.lineHeight
var o=this.$getLongestLine()
var a=!t&&(this.$hScrollBarAlwaysVisible||this.$size.scrollerWidth-o-2*this.$padding<0)
var l=this.$horizScroll!==a
if(l){this.$horizScroll=a
this.scrollBarH.setVisible(a)}if(!this.$maxLines&&this.$scrollPastEnd){if(this.scrollTop>n-this.$size.scrollerHeight)n+=Math.min((this.$size.scrollerHeight-this.lineHeight)*this.$scrollPastEnd,this.scrollTop-n+this.$size.scrollerHeight)}var h=!t&&(this.$vScrollBarAlwaysVisible||this.$size.scrollerHeight-n<0)
var c=this.$vScroll!==h
if(c){this.$vScroll=h
this.scrollBarV.setVisible(h)}this.session.setScrollTop(Math.max(-this.scrollMargin.top,Math.min(this.scrollTop,n-this.$size.scrollerHeight+this.scrollMargin.v)))
this.session.setScrollLeft(Math.max(-this.scrollMargin.left,Math.min(this.scrollLeft,o+2*this.$padding-this.$size.scrollerWidth+this.scrollMargin.h)))
var u=Math.ceil(s/this.lineHeight)-1
var d=Math.max(0,Math.round((this.scrollTop-r)/this.lineHeight))
var f=d+u
var g,m
var v=this.lineHeight
d=e.screenToDocumentRow(d,0)
var A=e.getFoldLine(d)
if(A){d=A.start.row}g=e.documentToScreenRow(d,0)
m=e.getRowLength(d)*v
f=Math.min(e.screenToDocumentRow(f,0),e.getLength()-1)
s=this.$size.scrollerHeight+e.getRowLength(f)*v+m
r=this.scrollTop-g*v
var p=0
if(l||c){p=this.$updateCachedSize(true,this.gutterWidth,this.$size.width,this.$size.height)
this._signal("scrollbarVisibilityChanged")
if(c)o=this.$getLongestLine()}this.layerConfig={width:o,padding:this.$padding,firstRow:d,firstRowScreen:g,lastRow:f,lineHeight:v,characterWidth:this.characterWidth,minHeight:s,maxHeight:n,offset:r,height:this.$size.scrollerHeight}
this.$gutterLayer.element.style.marginTop=-r+"px"
this.content.style.marginTop=-r+"px"
this.content.style.width=o+2*this.$padding+"px"
this.content.style.height=s+"px"
return p}
this.$updateLines=function(){var e=this.$changedLines.firstRow
var t=this.$changedLines.lastRow
this.$changedLines=null
var i=this.layerConfig
if(e>i.lastRow+1){return}if(t<i.firstRow){return}if(t===Infinity){if(this.$showGutter)this.$gutterLayer.update(i)
this.$textLayer.update(i)
return}this.$textLayer.updateLines(i,e,t)
return true}
this.$getLongestLine=function(){var e=this.session.getScreenWidth()
if(this.showInvisibles&&!this.session.$useWrapMode)e+=1
return Math.max(this.$size.scrollerWidth-2*this.$padding,Math.round(e*this.characterWidth))}
this.updateFrontMarkers=function(){this.$markerFront.setMarkers(this.session.getMarkers(true))
this.$loop.schedule(this.CHANGE_MARKER_FRONT)}
this.updateBackMarkers=function(){this.$markerBack.setMarkers(this.session.getMarkers())
this.$loop.schedule(this.CHANGE_MARKER_BACK)}
this.addGutterDecoration=function(e,t){this.$gutterLayer.addGutterDecoration(e,t)}
this.removeGutterDecoration=function(e,t){this.$gutterLayer.removeGutterDecoration(e,t)}
this.updateBreakpoints=function(e){this.$loop.schedule(this.CHANGE_GUTTER)}
this.setAnnotations=function(e){this.$gutterLayer.setAnnotations(e)
this.$loop.schedule(this.CHANGE_GUTTER)}
this.updateCursor=function(){this.$loop.schedule(this.CHANGE_CURSOR)}
this.hideCursor=function(){this.$cursorLayer.hideCursor()}
this.showCursor=function(){this.$cursorLayer.showCursor()}
this.scrollSelectionIntoView=function(e,t,i){this.scrollCursorIntoView(e,i)
this.scrollCursorIntoView(t,i)}
this.scrollCursorIntoView=function(e,t){if(this.$size.scrollerHeight===0)return
var i=this.$cursorLayer.getPixelPosition(e)
var n=i.left
var r=i.top
var s=this.$scrollAnimation?this.session.getScrollTop():this.scrollTop
if(s>r){if(t)r-=t*this.$size.scrollerHeight
if(r==0)r=-this.scrollMargin.top
else if(r==0)r=+this.scrollMargin.bottom
this.session.setScrollTop(r)}else if(s+this.$size.scrollerHeight<r+this.lineHeight){if(t)r+=t*this.$size.scrollerHeight
this.session.setScrollTop(r+this.lineHeight-this.$size.scrollerHeight)}var o=this.scrollLeft
if(o>n){if(n<this.$padding+2*this.layerConfig.characterWidth)n=-this.scrollMargin.left
this.session.setScrollLeft(n)}else if(o+this.$size.scrollerWidth<n+this.characterWidth){this.session.setScrollLeft(Math.round(n+this.characterWidth-this.$size.scrollerWidth))}else if(o<=this.$padding&&n-o<this.characterWidth){this.session.setScrollLeft(0)}}
this.getScrollTop=function(){return this.session.getScrollTop()}
this.getScrollLeft=function(){return this.session.getScrollLeft()}
this.getScrollTopRow=function(){return this.scrollTop/this.lineHeight}
this.getScrollBottomRow=function(){return Math.max(0,Math.floor((this.scrollTop+this.$size.scrollerHeight)/this.lineHeight)-1)}
this.scrollToRow=function(e){this.session.setScrollTop(e*this.lineHeight)}
this.alignCursor=function(e,t){if(typeof e=="number")e={row:e,column:0}
var i=this.$cursorLayer.getPixelPosition(e)
var n=this.$size.scrollerHeight-this.lineHeight
var r=i.top-n*(t||0)
this.session.setScrollTop(r)
return r}
this.STEPS=8
this.$calcSteps=function(e,t){var i=0
var n=this.STEPS
var r=[]
var s=function(e,t,i){return i*(Math.pow(e-1,3)+1)+t}
for(i=0;i<n;++i)r.push(s(i/this.STEPS,e,t-e))
return r}
this.scrollToLine=function(e,t,i,n){var r=this.$cursorLayer.getPixelPosition({row:e,column:0})
var s=r.top
if(t)s-=this.$size.scrollerHeight/2
var o=this.scrollTop
this.session.setScrollTop(s)
if(i!==false)this.animateScrolling(o,n)}
this.animateScrolling=function(e,t){var i=this.scrollTop
if(!this.$animatedScroll)return
var n=this
if(e==i)return
if(this.$scrollAnimation){var r=this.$scrollAnimation.steps
if(r.length){e=r[0]
if(e==i)return}}var s=n.$calcSteps(e,i)
this.$scrollAnimation={from:e,to:i,steps:s}
clearInterval(this.$timer)
n.session.setScrollTop(s.shift())
this.$timer=setInterval(function(){if(s.length){n.session.setScrollTop(s.shift())
n.session.$scrollTop=i}else if(i!=null){n.session.$scrollTop=-1
n.session.setScrollTop(i)
i=null}else{n.$timer=clearInterval(n.$timer)
n.$scrollAnimation=null
t&&t()}},10)}
this.scrollToY=function(e){if(this.scrollTop!==e){this.$loop.schedule(this.CHANGE_SCROLL)
this.scrollTop=e}}
this.scrollToX=function(e){if(this.scrollLeft!==e)this.scrollLeft=e
this.$loop.schedule(this.CHANGE_H_SCROLL)}
this.scrollTo=function(e,t){this.session.setScrollTop(t)
this.session.setScrollLeft(t)}
this.scrollBy=function(e,t){t&&this.session.setScrollTop(this.session.getScrollTop()+t)
e&&this.session.setScrollLeft(this.session.getScrollLeft()+e)}
this.isScrollableBy=function(e,t){if(t<0&&this.session.getScrollTop()>=1-this.scrollMargin.top)return true
if(t>0&&this.session.getScrollTop()+this.$size.scrollerHeight-this.layerConfig.maxHeight-(this.$size.scrollerHeight-this.lineHeight)*this.$scrollPastEnd<-1+this.scrollMargin.bottom)return true
if(e<0&&this.session.getScrollLeft()>=1-this.scrollMargin.left)return true
if(e>0&&this.session.getScrollLeft()+this.$size.scrollerWidth-this.layerConfig.width<-1+this.scrollMargin.right)return true}
this.pixelToScreenCoordinates=function(e,t){var i=this.scroller.getBoundingClientRect()
var n=(e+this.scrollLeft-i.left-this.$padding)/this.characterWidth
var r=Math.floor((t+this.scrollTop-i.top)/this.lineHeight)
var s=Math.round(n)
return{row:r,column:s,side:n-s>0?1:-1}}
this.screenToTextCoordinates=function(e,t){var i=this.scroller.getBoundingClientRect()
var n=Math.round((e+this.scrollLeft-i.left-this.$padding)/this.characterWidth)
var r=Math.floor((t+this.scrollTop-i.top)/this.lineHeight)
return this.session.screenToDocumentPosition(r,Math.max(n,0))}
this.textToScreenCoordinates=function(e,t){var i=this.scroller.getBoundingClientRect()
var n=this.session.documentToScreenPosition(e,t)
var r=this.$padding+Math.round(n.column*this.characterWidth)
var s=n.row*this.lineHeight
return{pageX:i.left+r-this.scrollLeft,pageY:i.top+s-this.scrollTop}}
this.visualizeFocus=function(){r.addCssClass(this.container,"ace_focus")}
this.visualizeBlur=function(){r.removeCssClass(this.container,"ace_focus")}
this.showComposition=function(e){if(!this.$composition)this.$composition={keepTextAreaAtCursor:this.$keepTextAreaAtCursor,cssText:this.textarea.style.cssText}
this.$keepTextAreaAtCursor=true
r.addCssClass(this.textarea,"ace_composition")
this.textarea.style.cssText=""
this.$moveTextAreaToCursor()}
this.setCompositionText=function(e){this.$moveTextAreaToCursor()}
this.hideComposition=function(){if(!this.$composition)return
r.removeCssClass(this.textarea,"ace_composition")
this.$keepTextAreaAtCursor=this.$composition.keepTextAreaAtCursor
this.textarea.style.cssText=this.$composition.cssText
this.$composition=null}
this.setTheme=function(e,t){var i=this
this.$themeValue=e
i._dispatchEvent("themeChange",{theme:e})
if(!e||typeof e=="string"){var n=e||"ace/theme/textmate"
o.loadModule(["theme",n],s)}else{s(e)}function s(n){if(i.$themeValue!=e)return t&&t()
if(!n.cssClass)return
r.importCssString(n.cssText,n.cssClass,i.container.ownerDocument)
if(i.theme)r.removeCssClass(i.container,i.theme.cssClass)
i.$theme=n.cssClass
i.theme=n
r.addCssClass(i.container,n.cssClass)
r.setCssClass(i.container,"ace_dark",n.isDark)
var s="padding"in n?n.padding:4
if(i.$padding&&s!=i.$padding)i.setPadding(s)
if(i.$size){i.$size.width=0
i.onResize()}i._dispatchEvent("themeLoaded",{theme:n})
t&&t()}}
this.getTheme=function(){return this.$themeValue}
this.setStyle=function(e,t){r.setCssClass(this.container,e,t!=false)}
this.unsetStyle=function(e){r.removeCssClass(this.container,e)}
this.setMouseCursor=function(e){this.content.style.cursor=e}
this.destroy=function(){this.$textLayer.destroy()
this.$cursorLayer.destroy()}}).call(v.prototype)
o.defineOptions(v.prototype,"renderer",{animatedScroll:{initialValue:false},showInvisibles:{set:function(e){if(this.$textLayer.setShowInvisibles(e))this.$loop.schedule(this.CHANGE_TEXT)},initialValue:false},showPrintMargin:{set:function(){this.$updatePrintMargin()},initialValue:true},printMarginColumn:{set:function(){this.$updatePrintMargin()},initialValue:80},printMargin:{set:function(e){if(typeof e=="number")this.$printMarginColumn=e
this.$showPrintMargin=!!e
this.$updatePrintMargin()},get:function(){return this.$showPrintMargin&&this.$printMarginColumn}},showGutter:{set:function(e){this.$gutter.style.display=e?"block":"none"
this.onGutterResize()},initialValue:true},fadeFoldWidgets:{set:function(e){r.setCssClass(this.$gutter,"ace_fade-fold-widgets",e)},initialValue:false},showFoldWidgets:{set:function(e){this.$gutterLayer.setShowFoldWidgets(e)},initialValue:true},displayIndentGuides:{set:function(e){if(this.$textLayer.setDisplayIndentGuides(e))this.$loop.schedule(this.CHANGE_TEXT)},initialValue:true},highlightGutterLine:{set:function(e){if(!this.$gutterLineHighlight){this.$gutterLineHighlight=r.createElement("div")
this.$gutterLineHighlight.className="ace_gutter-active-line"
this.$gutter.appendChild(this.$gutterLineHighlight)
return}this.$gutterLineHighlight.style.display=e?"":"none"
if(this.$cursorLayer.$pixelPos)this.$updateGutterLineHighlight()},initialValue:false,value:true},hScrollBarAlwaysVisible:{set:function(e){if(!this.$hScrollBarAlwaysVisible||!this.$horizScroll)this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:false},vScrollBarAlwaysVisible:{set:function(e){if(!this.$vScrollBarAlwaysVisible||!this.$vScroll)this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:false},fontSize:{set:function(e){if(typeof e=="number")e=e+"px"
this.container.style.fontSize=e
this.updateFontSize()},initialValue:12},fontFamily:{set:function(e){this.container.style.fontFamily=e
this.updateFontSize()}},maxLines:{set:function(e){this.updateFull()}},minLines:{set:function(e){this.updateFull()}},scrollPastEnd:{set:function(e){e=+e||0
if(this.$scrollPastEnd==e)return
this.$scrollPastEnd=e
this.$loop.schedule(this.CHANGE_SCROLL)},initialValue:0,handlesSet:true},fixedWidthGutter:{set:function(e){this.$gutterLayer.$fixedWidth=!!e
this.$loop.schedule(this.CHANGE_GUTTER)}}})
t.VirtualRenderer=v})
ace.define("ace/layer/gutter",["require","exports","module","ace/lib/dom","ace/lib/oop","ace/lib/lang","ace/lib/event_emitter"],function(e,t,i){var n=e("../lib/dom")
var r=e("../lib/oop")
var s=e("../lib/lang")
var o=e("../lib/event_emitter").EventEmitter
var a=function(e){this.element=n.createElement("div")
this.element.className="ace_layer ace_gutter-layer"
e.appendChild(this.element)
this.setShowFoldWidgets(this.$showFoldWidgets)
this.gutterWidth=0
this.$annotations=[]
this.$updateAnnotations=this.$updateAnnotations.bind(this)
this.$cells=[]};(function(){r.implement(this,o)
this.setSession=function(e){if(this.session)this.session.removeEventListener("change",this.$updateAnnotations)
this.session=e
e.on("change",this.$updateAnnotations)}
this.addGutterDecoration=function(e,t){if(window.console)console.warn&&console.warn("deprecated use session.addGutterDecoration")
this.session.addGutterDecoration(e,t)}
this.removeGutterDecoration=function(e,t){if(window.console)console.warn&&console.warn("deprecated use session.removeGutterDecoration")
this.session.removeGutterDecoration(e,t)}
this.setAnnotations=function(e){this.$annotations=[]
var t,i
for(var n=0;n<e.length;n++){var r=e[n]
var i=r.row
var t=this.$annotations[i]
if(!t)t=this.$annotations[i]={text:[]}
var o=r.text
o=o?s.escapeHTML(o):r.html||""
if(t.text.indexOf(o)===-1)t.text.push(o)
var a=r.type
if(a=="error")t.className=" ace_error"
else if(a=="warning"&&t.className!=" ace_error")t.className=" ace_warning"
else if(a=="info"&&!t.className)t.className=" ace_info"}}
this.$updateAnnotations=function(e){if(!this.$annotations.length)return
var t=e.data
var i=t.range
var n=i.start.row
var r=i.end.row-n
if(r===0){}else if(t.action=="removeText"||t.action=="removeLines"){this.$annotations.splice(n,r+1,null)}else{var s=Array(r+1)
s.unshift(n,1)
this.$annotations.splice.apply(this.$annotations,s)}}
this.update=function(e){var t=e.firstRow
var i=e.lastRow
var r=this.session.getNextFoldLine(t)
var s=r?r.start.row:Infinity
var o=this.$showFoldWidgets&&this.session.foldWidgets
var a=this.session.$breakpoints
var l=this.session.$decorations
var h=this.session.$firstLineNumber
var c=0
var u=null
var d=-1
var f=t
while(true){if(f>s){f=r.end.row+1
r=this.session.getNextFoldLine(f,r)
s=r?r.start.row:Infinity}if(f>i){while(this.$cells.length>d+1){u=this.$cells.pop()
this.element.removeChild(u.element)}break}u=this.$cells[++d]
if(!u){u={element:null,textNode:null,foldWidget:null}
u.element=n.createElement("div")
u.textNode=document.createTextNode("")
u.element.appendChild(u.textNode)
this.element.appendChild(u.element)
this.$cells[d]=u}var g="ace_gutter-cell "
if(a[f])g+=a[f]
if(l[f])g+=l[f]
if(this.$annotations[f])g+=this.$annotations[f].className
if(u.element.className!=g)u.element.className=g
var m=this.session.getRowLength(f)*e.lineHeight+"px"
if(m!=u.element.style.height)u.element.style.height=m
var v=c=f+h
if(v!=u.textNode.data)u.textNode.data=v
if(o){var A=o[f]
if(A==null)A=o[f]=this.session.getFoldWidget(f)}if(A){if(!u.foldWidget){u.foldWidget=n.createElement("span")
u.element.appendChild(u.foldWidget)}var g="ace_fold-widget ace_"+A
if(A=="start"&&f==s&&f<r.end.row)g+=" ace_closed"
else g+=" ace_open"
if(u.foldWidget.className!=g)u.foldWidget.className=g
var m=e.lineHeight+"px"
if(u.foldWidget.style.height!=m)u.foldWidget.style.height=m}else{if(u.foldWidget!=null){u.element.removeChild(u.foldWidget)
u.foldWidget=null}}f++}this.element.style.height=e.minHeight+"px"
if(this.$fixedWidth||this.session.$useWrapMode)c=this.session.getLength()
var p=c.toString().length*e.characterWidth
var C=this.$padding||this.$computePadding()
p+=C.left+C.right
if(p!==this.gutterWidth&&!isNaN(p)){this.gutterWidth=p
this.element.style.width=Math.ceil(this.gutterWidth)+"px"
this._emit("changeGutterWidth",p)}}
this.$fixedWidth=false
this.$showFoldWidgets=true
this.setShowFoldWidgets=function(e){if(e)n.addCssClass(this.element,"ace_folding-enabled")
else n.removeCssClass(this.element,"ace_folding-enabled")
this.$showFoldWidgets=e
this.$padding=null}
this.getShowFoldWidgets=function(){return this.$showFoldWidgets}
this.$computePadding=function(){if(!this.element.firstChild)return{left:0,right:0}
var e=n.computedStyle(this.element.firstChild)
this.$padding={}
this.$padding.left=parseInt(e.paddingLeft)+1||0
this.$padding.right=parseInt(e.paddingRight)||0
return this.$padding}
this.getRegion=function(e){var t=this.$padding||this.$computePadding()
var i=this.element.getBoundingClientRect()
if(e.x<t.left+i.left)return"markers"
if(this.$showFoldWidgets&&e.x>i.right-t.right)return"foldWidgets"}}).call(a.prototype)
t.Gutter=a})
ace.define("ace/layer/marker",["require","exports","module","ace/range","ace/lib/dom"],function(e,t,i){var n=e("../range").Range
var r=e("../lib/dom")
var s=function(e){this.element=r.createElement("div")
this.element.className="ace_layer ace_marker-layer"
e.appendChild(this.element)};(function(){this.$padding=0
this.setPadding=function(e){this.$padding=e}
this.setSession=function(e){this.session=e}
this.setMarkers=function(e){this.markers=e}
this.update=function(e){var e=e||this.config
if(!e)return
this.config=e
var t=[]
for(var i in this.markers){var n=this.markers[i]
if(!n.range){n.update(t,this,this.session,e)
continue}var s=n.range.clipRows(e.firstRow,e.lastRow)
if(s.isEmpty())continue
s=s.toScreenRange(this.session)
if(n.renderer){var o=this.$getTop(s.start.row,e)
var a=this.$padding+s.start.column*e.characterWidth
n.renderer(t,s,a,o,e)}else if(n.type=="fullLine"){this.drawFullLineMarker(t,s,n.clazz,e)}else if(n.type=="screenLine"){this.drawScreenLineMarker(t,s,n.clazz,e)}else if(s.isMultiLine()){if(n.type=="text")this.drawTextMarker(t,s,n.clazz,e)
else this.drawMultiLineMarker(t,s,n.clazz,e)}else{this.drawSingleLineMarker(t,s,n.clazz+" ace_start",e)}}this.element=r.setInnerHtml(this.element,t.join(""))}
this.$getTop=function(e,t){return(e-t.firstRowScreen)*t.lineHeight}
this.drawTextMarker=function(e,t,i,r,s){var o=t.start.row
var a=new n(o,t.start.column,o,this.session.getScreenLastRowColumn(o))
this.drawSingleLineMarker(e,a,i+" ace_start",r,1,s)
o=t.end.row
a=new n(o,0,o,t.end.column)
this.drawSingleLineMarker(e,a,i,r,0,s)
for(o=t.start.row+1;o<t.end.row;o++){a.start.row=o
a.end.row=o
a.end.column=this.session.getScreenLastRowColumn(o)
this.drawSingleLineMarker(e,a,i,r,1,s)}}
this.drawMultiLineMarker=function(e,t,i,n,r){var s=this.$padding
var o=n.lineHeight
var a=this.$getTop(t.start.row,n)
var l=s+t.start.column*n.characterWidth
r=r||""
e.push("<div class='",i," ace_start' style='","height:",o,"px;","right:0;","top:",a,"px;","left:",l,"px;",r,"'></div>")
a=this.$getTop(t.end.row,n)
var h=t.end.column*n.characterWidth
e.push("<div class='",i,"' style='","height:",o,"px;","width:",h,"px;","top:",a,"px;","left:",s,"px;",r,"'></div>")
o=(t.end.row-t.start.row-1)*n.lineHeight
if(o<0)return
a=this.$getTop(t.start.row+1,n)
e.push("<div class='",i,"' style='","height:",o,"px;","right:0;","top:",a,"px;","left:",s,"px;",r,"'></div>")}
this.drawSingleLineMarker=function(e,t,i,n,r,s){var o=n.lineHeight
var a=(t.end.column+(r||0)-t.start.column)*n.characterWidth
var l=this.$getTop(t.start.row,n)
var h=this.$padding+t.start.column*n.characterWidth
e.push("<div class='",i,"' style='","height:",o,"px;","width:",a,"px;","top:",l,"px;","left:",h,"px;",s||"","'></div>")}
this.drawFullLineMarker=function(e,t,i,n,r){var s=this.$getTop(t.start.row,n)
var o=n.lineHeight
if(t.start.row!=t.end.row)o+=this.$getTop(t.end.row,n)-s
e.push("<div class='",i,"' style='","height:",o,"px;","top:",s,"px;","left:0;right:0;",r||"","'></div>")}
this.drawScreenLineMarker=function(e,t,i,n,r){var s=this.$getTop(t.start.row,n)
var o=n.lineHeight
e.push("<div class='",i,"' style='","height:",o,"px;","top:",s,"px;","left:0;right:0;",r||"","'></div>")}}).call(s.prototype)
t.Marker=s})
ace.define("ace/layer/text",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/lang","ace/lib/useragent","ace/lib/event_emitter"],function(e,t,i){var n=e("../lib/oop")
var r=e("../lib/dom")
var s=e("../lib/lang")
var o=e("../lib/useragent")
var a=e("../lib/event_emitter").EventEmitter
var l=function(e){this.element=r.createElement("div")
this.element.className="ace_layer ace_text-layer"
e.appendChild(this.element)
this.$characterSize={width:0,height:0}
this.checkForSizeChanges()
this.$pollSizeChanges()};(function(){n.implement(this,a)
this.EOF_CHAR="¶"
this.EOL_CHAR="¬"
this.TAB_CHAR="→"
this.SPACE_CHAR="·"
this.$padding=0
this.setPadding=function(e){this.$padding=e
this.element.style.padding="0 "+e+"px"}
this.getLineHeight=function(){return this.$characterSize.height||0}
this.getCharacterWidth=function(){return this.$characterSize.width||0}
this.checkForSizeChanges=function(){var e=this.$measureSizes()
if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold"
var t=this.$measureSizes()
this.$measureNode.style.fontWeight=""
this.$characterSize=e
this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height
this._emit("changeCharacterSize",{data:e})}}
this.$pollSizeChanges=function(){var e=this
this.$pollSizeChangesTimer=setInterval(function(){e.checkForSizeChanges()},500)}
this.$fontStyles={fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1}
this.$measureSizes=o.isIE||o.isOldGecko?function(){var e=1e3
if(!this.$measureNode){var t=this.$measureNode=r.createElement("div")
var i=t.style
i.width=i.height="auto"
i.left=i.top=-e*40+"px"
i.visibility="hidden"
i.position="fixed"
i.overflow="visible"
i.whiteSpace="nowrap"
t.innerHTML=s.stringRepeat("Xy",e)
if(this.element.ownerDocument.body){this.element.ownerDocument.body.appendChild(t)}else{var n=this.element.parentNode
while(!r.hasCssClass(n,"ace_editor"))n=n.parentNode
n.appendChild(t)}}if(!this.element.offsetWidth)return null
var i=this.$measureNode.style
var o=r.computedStyle(this.element)
for(var a in this.$fontStyles)i[a]=o[a]
var l={height:this.$measureNode.offsetHeight,width:this.$measureNode.offsetWidth/(e*2)}
if(l.width==0||l.height==0)return null
return l}:function(){if(!this.$measureNode){var e=this.$measureNode=r.createElement("div")
var t=e.style
t.width=t.height="auto"
t.left=t.top=-100+"px"
t.visibility="hidden"
t.position="fixed"
t.overflow="visible"
t.whiteSpace="nowrap"
e.innerHTML=s.stringRepeat("X",100)
var i=this.element.parentNode
while(i&&!r.hasCssClass(i,"ace_editor"))i=i.parentNode
if(!i)return this.$measureNode=null
i.appendChild(e)}var n=this.$measureNode.getBoundingClientRect()
var o={height:n.height,width:n.width/100}
if(o.width==0||o.height==0)return null
return o}
this.setSession=function(e){this.session=e
this.$computeTabString()}
this.showInvisibles=false
this.setShowInvisibles=function(e){if(this.showInvisibles==e)return false
this.showInvisibles=e
this.$computeTabString()
return true}
this.displayIndentGuides=true
this.setDisplayIndentGuides=function(e){if(this.displayIndentGuides==e)return false
this.displayIndentGuides=e
this.$computeTabString()
return true}
this.$tabStrings=[]
this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize()
this.tabSize=e
var t=this.$tabStrings=[0]
for(var i=1;i<e+1;i++){if(this.showInvisibles){t.push("<span class='ace_invisible'>"+this.TAB_CHAR+s.stringRepeat(" ",i-1)+"</span>")}else{t.push(s.stringRepeat(" ",i))}}if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/
var n="ace_indent-guide"
if(this.showInvisibles){n+=" ace_invisible"
var r=s.stringRepeat(this.SPACE_CHAR,this.tabSize)
var o=this.TAB_CHAR+s.stringRepeat(" ",this.tabSize-1)}else{var r=s.stringRepeat(" ",this.tabSize)
var o=r}this.$tabStrings[" "]="<span class='"+n+"'>"+r+"</span>"
this.$tabStrings["	"]="<span class='"+n+"'>"+o+"</span>"}}
this.updateLines=function(e,t,i){if(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow){this.scrollLines(e)}this.config=e
var n=Math.max(t,e.firstRow)
var s=Math.min(i,e.lastRow)
var o=this.element.childNodes
var a=0
for(var l=e.firstRow;l<n;l++){var h=this.session.getFoldLine(l)
if(h){if(h.containsRow(n)){n=h.start.row
break}else{l=h.end.row}}a++}var l=n
var h=this.session.getNextFoldLine(l)
var c=h?h.start.row:Infinity
while(true){if(l>c){l=h.end.row+1
h=this.session.getNextFoldLine(l,h)
c=h?h.start.row:Infinity}if(l>s)break
var u=o[a++]
if(u){var d=[]
this.$renderLine(d,l,!this.$useLineGroups(),l==c?h:false)
r.setInnerHtml(u,d.join(""))}l++}}
this.scrollLines=function(e){var t=this.config
this.config=e
if(!t||t.lastRow<e.firstRow)return this.update(e)
if(e.lastRow<t.firstRow)return this.update(e)
var i=this.element
if(t.firstRow<e.firstRow)for(var n=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);n>0;n--)i.removeChild(i.firstChild)
if(t.lastRow>e.lastRow)for(var n=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);n>0;n--)i.removeChild(i.lastChild)
if(e.firstRow<t.firstRow){var r=this.$renderLinesFragment(e,e.firstRow,t.firstRow-1)
if(i.firstChild)i.insertBefore(r,i.firstChild)
else i.appendChild(r)}if(e.lastRow>t.lastRow){var r=this.$renderLinesFragment(e,t.lastRow+1,e.lastRow)
i.appendChild(r)}}
this.$renderLinesFragment=function(e,t,i){var n=this.element.ownerDocument.createDocumentFragment()
var s=t
var o=this.session.getNextFoldLine(s)
var a=o?o.start.row:Infinity
while(true){if(s>a){s=o.end.row+1
o=this.session.getNextFoldLine(s,o)
a=o?o.start.row:Infinity}if(s>i)break
var l=r.createElement("div")
var h=[]
this.$renderLine(h,s,false,s==a?o:false)
l.innerHTML=h.join("")
if(this.$useLineGroups()){l.className="ace_line_group"
n.appendChild(l)}else{var c=l.childNodes
while(c.length)n.appendChild(c[0])}s++}return n}
this.update=function(e){this.config=e
var t=[]
var i=e.firstRow,n=e.lastRow
var s=i
var o=this.session.getNextFoldLine(s)
var a=o?o.start.row:Infinity
while(true){if(s>a){s=o.end.row+1
o=this.session.getNextFoldLine(s,o)
a=o?o.start.row:Infinity}if(s>n)break
if(this.$useLineGroups())t.push("<div class='ace_line_group'>")
this.$renderLine(t,s,false,s==a?o:false)
if(this.$useLineGroups())t.push("</div>")
s++}this.element=r.setInnerHtml(this.element,t.join(""))}
this.$textToken={text:true,rparen:true,lparen:true}
this.$renderToken=function(e,t,i,n){var r=this
var o=/\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g
var a=function(e,i,n,o,a){if(i){return r.showInvisibles?"<span class='ace_invisible'>"+s.stringRepeat(r.SPACE_CHAR,e.length)+"</span>":s.stringRepeat(" ",e.length)}else if(e=="&"){return"&#38;"}else if(e=="<"){return"&#60;"}else if(e=="	"){var l=r.session.getScreenTabSize(t+o)
t+=l-1
return r.$tabStrings[l]}else if(e=="　"){var h=r.showInvisibles?"ace_cjk ace_invisible":"ace_cjk"
var c=r.showInvisibles?r.SPACE_CHAR:""
t+=1
return"<span class='"+h+"' style='width:"+r.config.characterWidth*2+"px'>"+c+"</span>"}else if(n){return"<span class='ace_invisible ace_invalid'>"+r.SPACE_CHAR+"</span>"}else{t+=1
return"<span class='ace_cjk' style='width:"+r.config.characterWidth*2+"px'>"+e+"</span>"}}
var l=n.replace(o,a)
if(!this.$textToken[i.type]){var h="ace_"+i.type.replace(/\./g," ace_")
var c=""
if(i.type=="fold")c=" style='width:"+i.value.length*this.config.characterWidth+"px;' "
e.push("<span class='",h,"'",c,">",l,"</span>")}else{e.push(l)}return t+n.length}
this.renderIndentGuide=function(e,t,i){var n=t.search(this.$indentGuideRe)
if(n<=0||n>=i)return t
if(t[0]==" "){n-=n%this.tabSize
e.push(s.stringRepeat(this.$tabStrings[" "],n/this.tabSize))
return t.substr(n)}else if(t[0]=="	"){e.push(s.stringRepeat(this.$tabStrings["	"],n))
return t.substr(n)}return t}
this.$renderWrappedLine=function(e,t,i,n){var r=0
var s=0
var o=i[0]
var a=0
for(var l=0;l<t.length;l++){var h=t[l]
var c=h.value
if(l==0&&this.displayIndentGuides){r=c.length
c=this.renderIndentGuide(e,c,o)
if(!c)continue
r-=c.length}if(r+c.length<o){a=this.$renderToken(e,a,h,c)
r+=c.length}else{while(r+c.length>=o){a=this.$renderToken(e,a,h,c.substring(0,o-r))
c=c.substring(o-r)
r=o
if(!n){e.push("</div>","<div class='ace_line' style='height:",this.config.lineHeight,"px'>")}s++
a=0
o=i[s]||Number.MAX_VALUE}if(c.length!=0){r+=c.length
a=this.$renderToken(e,a,h,c)}}}}
this.$renderSimpleLine=function(e,t){var i=0
var n=t[0]
var r=n.value
if(this.displayIndentGuides)r=this.renderIndentGuide(e,r)
if(r)i=this.$renderToken(e,i,n,r)
for(var s=1;s<t.length;s++){n=t[s]
r=n.value
i=this.$renderToken(e,i,n,r)}}
this.$renderLine=function(e,t,i,n){if(!n&&n!=false)n=this.session.getFoldLine(t)
if(n)var r=this.$getFoldLineTokens(t,n)
else var r=this.session.getTokens(t)
if(!i){e.push("<div class='ace_line' style='height:",this.config.lineHeight,"px'>")}if(r.length){var s=this.session.getRowSplitData(t)
if(s&&s.length)this.$renderWrappedLine(e,r,s,i)
else this.$renderSimpleLine(e,r)}if(this.showInvisibles){if(n)t=n.end.row
e.push("<span class='ace_invisible'>",t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,"</span>")}if(!i)e.push("</div>")}
this.$getFoldLineTokens=function(e,t){var i=this.session
var n=[]
function r(e,t,i){var r=0,s=0
while(s+e[r].value.length<t){s+=e[r].value.length
r++
if(r==e.length)return}if(s!=t){var o=e[r].value.substring(t-s)
if(o.length>i-t)o=o.substring(0,i-t)
n.push({type:e[r].type,value:o})
s=t+o.length
r+=1}while(s<i&&r<e.length){var o=e[r].value
if(o.length+s>i){n.push({type:e[r].type,value:o.substring(0,i-s)})}else n.push(e[r])
s+=o.length
r+=1}}var s=i.getTokens(e)
t.walk(function(e,t,o,a,l){if(e!=null){n.push({type:"fold",value:e})}else{if(l)s=i.getTokens(t)
if(s.length)r(s,a,o)}},t.end.row,this.session.getLine(t.end.row).length)
return n}
this.$useLineGroups=function(){return this.session.getUseWrapMode()}
this.destroy=function(){clearInterval(this.$pollSizeChangesTimer)
if(this.$measureNode)this.$measureNode.parentNode.removeChild(this.$measureNode)
delete this.$measureNode}}).call(l.prototype)
t.Text=l})
ace.define("ace/layer/cursor",["require","exports","module","ace/lib/dom"],function(e,t,i){var n=e("../lib/dom")
var r=function(e){this.element=n.createElement("div")
this.element.className="ace_layer ace_cursor-layer"
e.appendChild(this.element)
this.isVisible=false
this.isBlinking=true
this.blinkInterval=1e3
this.smoothBlinking=false
this.cursors=[]
this.cursor=this.addCursor()
n.addCssClass(this.element,"ace_hidden-cursors")};(function(){this.$padding=0
this.setPadding=function(e){this.$padding=e}
this.setSession=function(e){this.session=e}
this.setBlinking=function(e){if(e!=this.isBlinking){this.isBlinking=e
this.restartTimer()}}
this.setBlinkInterval=function(e){if(e!=this.blinkInterval){this.blinkInterval=e
this.restartTimer()}}
this.setSmoothBlinking=function(e){if(e!=this.smoothBlinking){this.smoothBlinking=e
if(e)n.addCssClass(this.element,"ace_smooth-blinking")
else n.removeCssClass(this.element,"ace_smooth-blinking")
this.restartTimer()}}
this.addCursor=function(){var e=n.createElement("div")
e.className="ace_cursor"
this.element.appendChild(e)
this.cursors.push(e)
return e}
this.removeCursor=function(){if(this.cursors.length>1){var e=this.cursors.pop()
e.parentNode.removeChild(e)
return e}}
this.hideCursor=function(){this.isVisible=false
n.addCssClass(this.element,"ace_hidden-cursors")
this.restartTimer()}
this.showCursor=function(){this.isVisible=true
n.removeCssClass(this.element,"ace_hidden-cursors")
this.restartTimer()}
this.restartTimer=function(){clearInterval(this.intervalId)
clearTimeout(this.timeoutId)
if(this.smoothBlinking)n.removeCssClass(this.element,"ace_smooth-blinking")
for(var e=this.cursors.length;e--;)this.cursors[e].style.opacity=""
if(!this.isBlinking||!this.blinkInterval||!this.isVisible)return
if(this.smoothBlinking)setTimeout(function(){n.addCssClass(this.element,"ace_smooth-blinking")}.bind(this))
var t=function(){this.timeoutId=setTimeout(function(){for(var e=this.cursors.length;e--;){this.cursors[e].style.opacity=0}}.bind(this),.6*this.blinkInterval)}.bind(this)
this.intervalId=setInterval(function(){for(var e=this.cursors.length;e--;){this.cursors[e].style.opacity=""}t()}.bind(this),this.blinkInterval)
t()}
this.getPixelPosition=function(e,t){if(!this.config||!this.session)return{left:0,top:0}
if(!e)e=this.session.selection.getCursor()
var i=this.session.documentToScreenPosition(e)
var n=this.$padding+i.column*this.config.characterWidth
var r=(i.row-(t?this.config.firstRowScreen:0))*this.config.lineHeight
return{left:n,top:r}}
this.update=function(e){this.config=e
var t=this.session.$selectionMarkers
var i=0,n=0
if(t===undefined||t.length===0){t=[{cursor:null}]}for(var i=0,r=t.length;i<r;i++){var s=this.getPixelPosition(t[i].cursor,true)
if((s.top>e.height+e.offset||s.top<-e.offset)&&i>1){continue}var o=(this.cursors[n++]||this.addCursor()).style
o.left=s.left+"px"
o.top=s.top+"px"
o.width=e.characterWidth+"px"
o.height=e.lineHeight+"px"}while(this.cursors.length>n)this.removeCursor()
var a=this.session.getOverwrite()
this.$setOverwrite(a)
this.$pixelPos=s
this.restartTimer()}
this.$setOverwrite=function(e){if(e!=this.overwrite){this.overwrite=e
if(e)n.addCssClass(this.element,"ace_overwrite-cursors")
else n.removeCssClass(this.element,"ace_overwrite-cursors")}}
this.destroy=function(){clearInterval(this.intervalId)
clearTimeout(this.timeoutId)}}).call(r.prototype)
t.Cursor=r})
ace.define("ace/scrollbar",["require","exports","module","ace/lib/oop","ace/lib/dom","ace/lib/event","ace/lib/event_emitter"],function(e,t,i){var n=e("./lib/oop")
var r=e("./lib/dom")
var s=e("./lib/event")
var o=e("./lib/event_emitter").EventEmitter
var a=function(e,t){this.element=r.createElement("div")
this.element.className="ace_scrollbar"
this.inner=r.createElement("div")
this.inner.className="ace_scrollbar-inner"
this.element.appendChild(this.inner)
e.appendChild(this.element)
t.$scrollbarWidth=this.width=r.scrollbarWidth(e.ownerDocument)
t.$scrollbarWidth=this.width=r.scrollbarWidth(e.ownerDocument)
this.fullWidth=this.width
this.inner.style.width=this.element.style.width=(this.width||15)+5+"px"
this.setVisible(false)
this.element.style.overflowY="scroll"
s.addListener(this.element,"scroll",this.onScrollV.bind(this))
s.addListener(this.element,"mousedown",s.preventDefault)}
var l=function(e,t){this.element=r.createElement("div")
this.element.className="ace_scrollbar-h"
this.inner=r.createElement("div")
this.inner.className="ace_scrollbar-inner"
this.element.appendChild(this.inner)
e.appendChild(this.element)
this.height=t.$scrollbarWidth
this.fullHeight=this.height
this.inner.style.height=this.element.style.height=(this.height||15)+5+"px"
this.setVisible(false)
this.element.style.overflowX="scroll"
s.addListener(this.element,"scroll",this.onScrollH.bind(this))
s.addListener(this.element,"mousedown",s.preventDefault)};(function(){n.implement(this,o)
this.setVisible=function(e){if(e){this.element.style.display=""
if(this.fullWidth)this.width=this.fullWidth
if(this.fullHeight)this.height=this.fullHeight}else{this.element.style.display="none"
this.height=this.width=0}}
this.onScrollV=function(){if(!this.skipEvent){this.scrollTop=this.element.scrollTop
this._emit("scroll",{data:this.scrollTop})}this.skipEvent=false}
this.onScrollH=function(){if(!this.skipEvent){this.scrollLeft=this.element.scrollLeft
this._emit("scroll",{data:this.scrollLeft})}this.skipEvent=false}
this.getWidth=function(){return this.width}
this.getHeight=function(){return this.height}
this.setHeight=function(e){this.element.style.height=e+"px"}
this.setWidth=function(e){this.element.style.width=e+"px"}
this.setInnerHeight=function(e){this.inner.style.height=e+"px"}
this.setInnerWidth=function(e){this.inner.style.width=e+"px"}
this.setScrollTop=function(e){if(this.scrollTop!=e){this.skipEvent=true
this.scrollTop=this.element.scrollTop=e}}
this.setScrollLeft=function(e){if(this.scrollLeft!=e){this.skipEvent=true
this.scrollLeft=this.element.scrollLeft=e}}}).call(a.prototype)
l.prototype=a.prototype
t.ScrollBar=a
t.ScrollBarV=a
t.ScrollBarH=l})
ace.define("ace/renderloop",["require","exports","module","ace/lib/event"],function(e,t,i){var n=e("./lib/event")
var r=function(e,t){this.onRender=e
this.pending=false
this.changes=0
this.window=t||window};(function(){this.schedule=function(e){this.changes=this.changes|e
if(!this.pending){this.pending=true
var t=this
n.nextFrame(function(){t.pending=false
var e
while(e=t.changes){t.changes=0
t.onRender(e)}},this.window)}}}).call(r.prototype)
t.RenderLoop=r})
ace.define("ace/multi_select",["require","exports","module","ace/range_list","ace/range","ace/selection","ace/mouse/multi_select_handler","ace/lib/event","ace/lib/lang","ace/commands/multi_select_commands","ace/search","ace/edit_session","ace/editor","ace/config"],function(e,t,i){var n=e("./range_list").RangeList
var r=e("./range").Range
var s=e("./selection").Selection
var o=e("./mouse/multi_select_handler").onMouseDown
var a=e("./lib/event")
var l=e("./lib/lang")
var h=e("./commands/multi_select_commands")
t.commands=h.defaultCommands.concat(h.multiSelectCommands)
var c=e("./search").Search
var u=new c
function d(e,t,i){u.$options.wrap=true
u.$options.needle=t
u.$options.backwards=i==-1
return u.find(e)}var f=e("./edit_session").EditSession;(function(){this.getSelectionMarkers=function(){return this.$selectionMarkers}}).call(f.prototype);(function(){this.ranges=null
this.rangeList=null
this.addRange=function(e,t){if(!e)return
if(!this.inMultiSelectMode&&this.rangeCount==0){var i=this.toOrientedRange()
this.rangeList.add(i)
this.rangeList.add(e)
if(this.rangeList.ranges.length!=2){this.rangeList.removeAll()
return t||this.fromOrientedRange(e)}this.rangeList.removeAll()
this.rangeList.add(i)
this.$onAddRange(i)}if(!e.cursor)e.cursor=e.end
var n=this.rangeList.add(e)
this.$onAddRange(e)
if(n.length)this.$onRemoveRange(n)
if(this.rangeCount>1&&!this.inMultiSelectMode){this._emit("multiSelect")
this.inMultiSelectMode=true
this.session.$undoSelect=false
this.rangeList.attach(this.session)}return t||this.fromOrientedRange(e)}
this.toSingleRange=function(e){e=e||this.ranges[0]
var t=this.rangeList.removeAll()
if(t.length)this.$onRemoveRange(t)
e&&this.fromOrientedRange(e)}
this.substractPoint=function(e){var t=this.rangeList.substractPoint(e)
if(t){this.$onRemoveRange(t)
return t[0]}}
this.mergeOverlappingRanges=function(){var e=this.rangeList.merge()
if(e.length)this.$onRemoveRange(e)
else if(this.ranges[0])this.fromOrientedRange(this.ranges[0])}
this.$onAddRange=function(e){this.rangeCount=this.rangeList.ranges.length
this.ranges.unshift(e)
this._emit("addRange",{range:e})}
this.$onRemoveRange=function(e){this.rangeCount=this.rangeList.ranges.length
if(this.rangeCount==1&&this.inMultiSelectMode){var t=this.rangeList.ranges.pop()
e.push(t)
this.rangeCount=0}for(var i=e.length;i--;){var n=this.ranges.indexOf(e[i])
this.ranges.splice(n,1)}this._emit("removeRange",{ranges:e})
if(this.rangeCount==0&&this.inMultiSelectMode){this.inMultiSelectMode=false
this._emit("singleSelect")
this.session.$undoSelect=true
this.rangeList.detach(this.session)}t=t||this.ranges[0]
if(t&&!t.isEqual(this.getRange()))this.fromOrientedRange(t)}
this.$initRangeList=function(){if(this.rangeList)return
this.rangeList=new n
this.ranges=[]
this.rangeCount=0}
this.getAllRanges=function(){return this.rangeCount?this.rangeList.ranges.concat():[this.getRange()]}
this.splitIntoLines=function(){if(this.rangeCount>1){var e=this.rangeList.ranges
var t=e[e.length-1]
var i=r.fromPoints(e[0].start,t.end)
this.toSingleRange()
this.setSelectionRange(i,t.cursor==t.start)}else{var i=this.getRange()
var n=this.isBackwards()
var s=i.start.row
var o=i.end.row
if(s==o){if(n)var a=i.end,l=i.start
else var a=i.start,l=i.end
this.addRange(r.fromPoints(l,l))
this.addRange(r.fromPoints(a,a))
return}var h=[]
var c=this.getLineRange(s,true)
c.start.column=i.start.column
h.push(c)
for(var u=s+1;u<o;u++)h.push(this.getLineRange(u,true))
c=this.getLineRange(o,true)
c.end.column=i.end.column
h.push(c)
h.forEach(this.addRange,this)}}
this.toggleBlockSelection=function(){if(this.rangeCount>1){var e=this.rangeList.ranges
var t=e[e.length-1]
var i=r.fromPoints(e[0].start,t.end)
this.toSingleRange()
this.setSelectionRange(i,t.cursor==t.start)}else{var n=this.session.documentToScreenPosition(this.selectionLead)
var s=this.session.documentToScreenPosition(this.selectionAnchor)
var o=this.rectangularRangeBlock(n,s)
o.forEach(this.addRange,this)}}
this.rectangularRangeBlock=function(e,t,i){var n=[]
var s=e.column<t.column
if(s){var o=e.column
var a=t.column}else{var o=t.column
var a=e.column}var l=e.row<t.row
if(l){var h=e.row
var c=t.row}else{var h=t.row
var c=e.row}if(o<0)o=0
if(h<0)h=0
if(h==c)i=true
for(var u=h;u<=c;u++){var d=r.fromPoints(this.session.screenToDocumentPosition(u,o),this.session.screenToDocumentPosition(u,a))
if(d.isEmpty()){if(f&&m(d.end,f))break
var f=d.end}d.cursor=s?d.start:d.end
n.push(d)}if(l)n.reverse()
if(!i){var g=n.length-1
while(n[g].isEmpty()&&g>0)g--
if(g>0){var v=0
while(n[v].isEmpty())v++}for(var A=g;A>=v;A--){if(n[A].isEmpty())n.splice(A,1)}}return n}}).call(s.prototype)
var g=e("./editor").Editor;(function(){this.updateSelectionMarkers=function(){this.renderer.updateCursor()
this.renderer.updateBackMarkers()}
this.addSelectionMarker=function(e){if(!e.cursor)e.cursor=e.end
var t=this.getSelectionStyle()
e.marker=this.session.addMarker(e,"ace_selection",t)
this.session.$selectionMarkers.push(e)
this.session.selectionMarkerCount=this.session.$selectionMarkers.length
return e}
this.removeSelectionMarker=function(e){if(!e.marker)return
this.session.removeMarker(e.marker)
var t=this.session.$selectionMarkers.indexOf(e)
if(t!=-1)this.session.$selectionMarkers.splice(t,1)
this.session.selectionMarkerCount=this.session.$selectionMarkers.length}
this.removeSelectionMarkers=function(e){var t=this.session.$selectionMarkers
for(var i=e.length;i--;){var n=e[i]
if(!n.marker)continue
this.session.removeMarker(n.marker)
var r=t.indexOf(n)
if(r!=-1)t.splice(r,1)}this.session.selectionMarkerCount=t.length}
this.$onAddRange=function(e){this.addSelectionMarker(e.range)
this.renderer.updateCursor()
this.renderer.updateBackMarkers()}
this.$onRemoveRange=function(e){this.removeSelectionMarkers(e.ranges)
this.renderer.updateCursor()
this.renderer.updateBackMarkers()}
this.$onMultiSelect=function(e){if(this.inMultiSelectMode)return
this.inMultiSelectMode=true
this.setStyle("ace_multiselect")
this.keyBinding.addKeyboardHandler(h.keyboardHandler)
this.commands.setDefaultHandler("exec",this.$onMultiSelectExec)
this.renderer.updateCursor()
this.renderer.updateBackMarkers()}
this.$onSingleSelect=function(e){if(this.session.multiSelect.inVirtualMode)return
this.inMultiSelectMode=false
this.unsetStyle("ace_multiselect")
this.keyBinding.removeKeyboardHandler(h.keyboardHandler)
this.commands.removeDefaultHandler("exec",this.$onMultiSelectExec)
this.renderer.updateCursor()
this.renderer.updateBackMarkers()}
this.$onMultiSelectExec=function(e){var t=e.command
var i=e.editor
if(!i.multiSelect)return
if(!t.multiSelectAction){var n=t.exec(i,e.args||{})
i.multiSelect.addRange(i.multiSelect.toOrientedRange())
i.multiSelect.mergeOverlappingRanges()}else if(t.multiSelectAction=="forEach"){n=i.forEachSelection(t,e.args)}else if(t.multiSelectAction=="forEachLine"){n=i.forEachSelection(t,e.args,true)}else if(t.multiSelectAction=="single"){i.exitMultiSelectMode()
n=t.exec(i,e.args||{})}else{n=t.multiSelectAction(i,e.args||{})}return n}
this.forEachSelection=function(e,t,i){if(this.inVirtualSelectionMode)return
var n=this.session
var r=this.selection
var o=r.rangeList
var a
var l=r._eventRegistry
r._eventRegistry={}
var h=new s(n)
this.inVirtualSelectionMode=true
for(var c=o.ranges.length;c--;){if(i){while(c>0&&o.ranges[c].start.row==o.ranges[c-1].end.row)c--}h.fromOrientedRange(o.ranges[c])
this.selection=n.selection=h
var u=e.exec(this,t||{})
if(!a==undefined)a=u
h.toOrientedRange(o.ranges[c])}h.detach()
this.selection=n.selection=r
this.inVirtualSelectionMode=false
r._eventRegistry=l
r.mergeOverlappingRanges()
var d=this.renderer.$scrollAnimation
this.onCursorChange()
this.onSelectionChange()
if(d&&d.from==d.to)this.renderer.animateScrolling(d.from)
return a}
this.exitMultiSelectMode=function(){if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return
this.multiSelect.toSingleRange()}
this.getSelectedText=function(){var e=""
if(this.inMultiSelectMode&&!this.inVirtualSelectionMode){var t=this.multiSelect.rangeList.ranges
var i=[]
for(var n=0;n<t.length;n++){i.push(this.session.getTextRange(t[n]))}var r=this.session.getDocument().getNewLineCharacter()
e=i.join(r)
if(e.length==(i.length-1)*r.length)e=""}else if(!this.selection.isEmpty()){e=this.session.getTextRange(this.getSelectionRange())}return e}
this.onPaste=function(e){if(this.$readOnly)return
this._signal("paste",e)
if(!this.inMultiSelectMode||this.inVirtualSelectionMode)return this.insert(e)
var t=e.split(/\r\n|\r|\n/)
var i=this.selection.rangeList.ranges
if(t.length>i.length||t.length<2||!t[1])return this.commands.exec("insertstring",this,e)
for(var n=i.length;n--;){var r=i[n]
if(!r.isEmpty())this.session.remove(r)
this.session.insert(r.start,t[n])}}
this.findAll=function(e,t,i){t=t||{}
t.needle=e||t.needle
this.$search.set(t)
var n=this.$search.findAll(this.session)
if(!n.length)return 0
this.$blockScrolling+=1
var r=this.multiSelect
if(!i)r.toSingleRange(n[0])
for(var s=n.length;s--;)r.addRange(n[s],true)
this.$blockScrolling-=1
return n.length}
this.selectMoreLines=function(e,t){var i=this.selection.toOrientedRange()
var n=i.cursor==i.end
var s=this.session.documentToScreenPosition(i.cursor)
if(this.selection.$desiredColumn)s.column=this.selection.$desiredColumn
var o=this.session.screenToDocumentPosition(s.row+e,s.column)
if(!i.isEmpty()){var a=this.session.documentToScreenPosition(n?i.end:i.start)
var l=this.session.screenToDocumentPosition(a.row+e,a.column)}else{var l=o}if(n){var h=r.fromPoints(o,l)
h.cursor=h.start}else{var h=r.fromPoints(l,o)
h.cursor=h.end}h.desiredColumn=s.column
if(!this.selection.inMultiSelectMode){this.selection.addRange(i)}else{if(t)var c=i.cursor}this.selection.addRange(h)
if(c)this.selection.substractPoint(c)}
this.transposeSelections=function(e){var t=this.session
var i=t.multiSelect
var n=i.ranges
for(var r=n.length;r--;){var s=n[r]
if(s.isEmpty()){var o=t.getWordRange(s.start.row,s.start.column)
s.start.row=o.start.row
s.start.column=o.start.column
s.end.row=o.end.row
s.end.column=o.end.column}}i.mergeOverlappingRanges()
var a=[]
for(var r=n.length;r--;){var s=n[r]
a.unshift(t.getTextRange(s))}if(e<0)a.unshift(a.pop())
else a.push(a.shift())
for(var r=n.length;r--;){var s=n[r]
var o=s.clone()
t.replace(s,a[r])
s.start.row=o.start.row
s.start.column=o.start.column}}
this.selectMore=function(e,t){var i=this.session
var n=i.multiSelect
var r=n.toOrientedRange()
if(r.isEmpty()){var r=i.getWordRange(r.start.row,r.start.column)
r.cursor=e==-1?r.start:r.end
this.multiSelect.addRange(r)
return}var s=i.getTextRange(r)
var o=d(i,s,e)
if(o){o.cursor=e==-1?o.start:o.end
this.multiSelect.addRange(o)}if(t)this.multiSelect.substractPoint(r.cursor)}
this.alignCursors=function(){var e=this.session
var t=e.multiSelect
var i=t.ranges
if(!i.length){var n=this.selection.getRange()
var s=n.start.row,o=n.end.row
var a=this.session.doc.removeLines(s,o)
a=this.$reAlignText(a)
this.session.doc.insertLines(s,a)
n.start.column=0
n.end.column=a[a.length-1].length
this.selection.setRange(n)}else{var h=-1
var c=i.filter(function(e){if(e.cursor.row==h)return true
h=e.cursor.row})
t.$onRemoveRange(c)
var u=0
var d=Infinity
var f=i.map(function(t){var i=t.cursor
var n=e.getLine(i.row)
var r=n.substr(i.column).search(/\S/g)
if(r==-1)r=0
if(i.column>u)u=i.column
if(r<d)d=r
return r})
i.forEach(function(t,i){var n=t.cursor
var s=u-n.column
var o=f[i]-d
if(s>o)e.insert(n,l.stringRepeat(" ",s-o))
else e.remove(new r(n.row,n.column,n.row,n.column-s+o))
t.start.column=t.end.column=u
t.start.row=t.end.row=n.row
t.cursor=t.end})
t.fromOrientedRange(i[0])
this.renderer.updateCursor()
this.renderer.updateBackMarkers()}}
this.$reAlignText=function(e){var t=true,i=true
var n,r,s
return e.map(function(e){var o=e.match(/(\s*)(.*?)(\s*)([=:].*)/)
if(!o)return[e]
if(n==null){n=o[1].length
r=o[2].length
s=o[3].length
return o}if(n+r+s!=o[1].length+o[2].length+o[3].length)i=false
if(n!=o[1].length)t=false
if(n>o[1].length)n=o[1].length
if(r<o[2].length)r=o[2].length
if(s>o[3].length)s=o[3].length
return o}).map(t?i?h:a:c)
function o(e){return l.stringRepeat(" ",e)}function a(e){return!e[2]?e[0]:o(n)+e[2]+o(r-e[2].length+s)+e[4].replace(/^([=:])\s+/,"$1 ")}function h(e){return!e[2]?e[0]:o(n+r-e[2].length)+e[2]+o(s," ")+e[4].replace(/^([=:])\s+/,"$1 ")}function c(e){return!e[2]?e[0]:o(n)+e[2]+o(s)+e[4].replace(/^([=:])\s+/,"$1 ")}}}).call(g.prototype)
function m(e,t){return e.row==t.row&&e.column==t.column}t.onSessionChange=function(e){var t=e.session
if(!t.multiSelect){t.$selectionMarkers=[]
t.selection.$initRangeList()
t.multiSelect=t.selection}this.multiSelect=t.multiSelect
var i=e.oldSession
if(i){i.multiSelect.removeEventListener("addRange",this.$onAddRange)
i.multiSelect.removeEventListener("removeRange",this.$onRemoveRange)
i.multiSelect.removeEventListener("multiSelect",this.$onMultiSelect)
i.multiSelect.removeEventListener("singleSelect",this.$onSingleSelect)}t.multiSelect.on("addRange",this.$onAddRange)
t.multiSelect.on("removeRange",this.$onRemoveRange)
t.multiSelect.on("multiSelect",this.$onMultiSelect)
t.multiSelect.on("singleSelect",this.$onSingleSelect)
if(this.inMultiSelectMode!=t.selection.inMultiSelectMode){if(t.selection.inMultiSelectMode)this.$onMultiSelect()
else this.$onSingleSelect()}}
function v(e){if(e.$multiselectOnSessionChange)return
e.$onAddRange=e.$onAddRange.bind(e)
e.$onRemoveRange=e.$onRemoveRange.bind(e)
e.$onMultiSelect=e.$onMultiSelect.bind(e)
e.$onSingleSelect=e.$onSingleSelect.bind(e)
e.$multiselectOnSessionChange=t.onSessionChange.bind(e)
e.$multiselectOnSessionChange(e)
e.on("changeSession",e.$multiselectOnSessionChange)
e.on("mousedown",o)
e.commands.addCommands(h.defaultCommands)
A(e)}function A(e){var t=e.textInput.getElement()
var i=false
a.addListener(t,"keydown",function(t){if(t.keyCode==18&&!(t.ctrlKey||t.shiftKey||t.metaKey)){if(!i){e.renderer.setMouseCursor("crosshair")
i=true}}else if(i){n()}})
a.addListener(t,"keyup",n)
a.addListener(t,"blur",n)
function n(t){if(i){e.renderer.setMouseCursor("")
i=false}}}t.MultiSelect=v
e("./config").defineOptions(g.prototype,"editor",{enableMultiselect:{set:function(e){v(this)
if(e){this.on("changeSession",this.$multiselectOnSessionChange)
this.on("mousedown",o)}else{this.off("changeSession",this.$multiselectOnSessionChange)
this.off("mousedown",o)}},value:true}})})
ace.define("ace/mouse/multi_select_handler",["require","exports","module","ace/lib/event"],function(e,t,i){var n=e("../lib/event")
function r(e,t){return e.row==t.row&&e.column==t.column}function s(e){var t=e.domEvent
var i=t.altKey
var s=t.shiftKey
var o=e.getAccelKey()
var a=e.getButton()
if(e.editor.inMultiSelectMode&&a==2){e.editor.textInput.onContextMenu(e.domEvent)
return}if(!o&&!i){if(a==0&&e.editor.inMultiSelectMode)e.editor.exitMultiSelectMode()
return}var l=e.editor
var h=l.selection
var c=l.inMultiSelectMode
var u=e.getDocumentPosition()
var d=h.getCursor()
var f=e.inSelection()||h.isEmpty()&&r(u,d)
var g=e.x,m=e.y
var v=function(e){g=e.clientX
m=e.clientY}
var A=function(){var e=l.renderer.pixelToScreenCoordinates(g,m)
var t=p.screenToDocumentPosition(e.row,e.column)
if(r(F,e)&&r(t,h.selectionLead))return
F=e
l.selection.moveCursorToPosition(t)
l.selection.clearSelection()
l.renderer.scrollCursorIntoView()
l.removeSelectionMarkers(B)
B=h.rectangularRangeBlock(F,C)
B.forEach(l.addSelectionMarker,l)
l.updateSelectionMarkers()}
var p=l.session
var C=l.renderer.pixelToScreenCoordinates(g,m)
var F=C
if(o&&!s&&!i&&a==0){if(!c&&f)return
if(!c){var E=h.toOrientedRange()
l.addSelectionMarker(E)}var w=h.rangeList.rangeAtPoint(u)
l.once("mouseup",function(){var e=h.toOrientedRange()
if(w&&e.isEmpty()&&r(w.cursor,e.cursor))h.substractPoint(e.cursor)
else{if(E){l.removeSelectionMarker(E)
h.addRange(E)}h.addRange(e)}})}else if(i&&a==0){e.stop()
if(c&&!o)h.toSingleRange()
else if(!c&&o)h.addRange()
var B=[]
if(s){C=p.documentToScreenPosition(h.lead)
A()}else{h.moveCursorToPosition(u)
h.clearSelection()}var D=function(e){clearInterval(b)
l.removeSelectionMarkers(B)
for(var t=0;t<B.length;t++)h.addRange(B[t])}
var y=A
n.capture(l.container,v,D)
var b=setInterval(function(){y()},20)
return e.preventDefault()}}t.onMouseDown=s})
ace.define("ace/commands/multi_select_commands",["require","exports","module","ace/keyboard/hash_handler"],function(e,t,i){t.defaultCommands=[{name:"addCursorAbove",exec:function(e){e.selectMoreLines(-1)},bindKey:{win:"Ctrl-Alt-Up",mac:"Ctrl-Alt-Up"},readonly:true},{name:"addCursorBelow",exec:function(e){e.selectMoreLines(1)},bindKey:{win:"Ctrl-Alt-Down",mac:"Ctrl-Alt-Down"},readonly:true},{name:"addCursorAboveSkipCurrent",exec:function(e){e.selectMoreLines(-1,true)},bindKey:{win:"Ctrl-Alt-Shift-Up",mac:"Ctrl-Alt-Shift-Up"},readonly:true},{name:"addCursorBelowSkipCurrent",exec:function(e){e.selectMoreLines(1,true)},bindKey:{win:"Ctrl-Alt-Shift-Down",mac:"Ctrl-Alt-Shift-Down"},readonly:true},{name:"selectMoreBefore",exec:function(e){e.selectMore(-1)},bindKey:{win:"Ctrl-Alt-Left",mac:"Ctrl-Alt-Left"},readonly:true},{name:"selectMoreAfter",exec:function(e){e.selectMore(1)},bindKey:{win:"Ctrl-Alt-Right",mac:"Ctrl-Alt-Right"},readonly:true},{name:"selectNextBefore",exec:function(e){e.selectMore(-1,true)},bindKey:{win:"Ctrl-Alt-Shift-Left",mac:"Ctrl-Alt-Shift-Left"},readonly:true},{name:"selectNextAfter",exec:function(e){e.selectMore(1,true)},bindKey:{win:"Ctrl-Alt-Shift-Right",mac:"Ctrl-Alt-Shift-Right"},readonly:true},{name:"splitIntoLines",exec:function(e){e.multiSelect.splitIntoLines()},bindKey:{win:"Ctrl-Alt-L",mac:"Ctrl-Alt-L"},readonly:true},{name:"alignCursors",exec:function(e){e.alignCursors()},bindKey:{win:"Ctrl-Alt-A",mac:"Ctrl-Alt-A"}}]
t.multiSelectCommands=[{name:"singleSelection",bindKey:"esc",exec:function(e){e.exitMultiSelectMode()},readonly:true,isAvailable:function(e){return e&&e.inMultiSelectMode}}]
var n=e("../keyboard/hash_handler").HashHandler
t.keyboardHandler=new n(t.multiSelectCommands)})
ace.define("ace/worker/worker_client",["require","exports","module","ace/lib/oop","ace/lib/event_emitter","ace/config"],function(e,t,i){var n=e("../lib/oop")
var r=e("../lib/event_emitter").EventEmitter
var s=e("../config")
var o=function(t,i,n){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this)
this.changeListener=this.changeListener.bind(this)
this.onMessage=this.onMessage.bind(this)
this.onError=this.onError.bind(this)
if(e.nameToUrl&&!e.toUrl)e.toUrl=e.nameToUrl
var r
if(s.get("packaged")||!e.toUrl){r=s.moduleUrl(i,"worker")}else{var o=this.$normalizePath
r=o(e.toUrl("ace/worker/worker.js",null,"_"))
var a={}
t.forEach(function(t){a[t]=o(e.toUrl(t,null,"_").replace(/(\.js)?(\?.*)?$/,""))})}this.$worker=new Worker(r)
this.$worker.postMessage({init:true,tlns:a,module:i,classname:n})
this.callbackId=1
this.callbacks={}
this.$worker.onerror=this.onError
this.$worker.onmessage=this.onMessage};(function(){n.implement(this,r)
this.onError=function(e){window.console&&console.log&&console.log(e)
throw e}
this.onMessage=function(e){var t=e.data
switch(t.type){case"log":window.console&&console.log&&console.log.apply(console,t.data)
break
case"event":this._emit(t.name,{data:t.data})
break
case"call":var i=this.callbacks[t.id]
if(i){i(t.data)
delete this.callbacks[t.id]}break}}
this.$normalizePath=function(e){if(!location.host)return e
e=e.replace(/^[a-z]+:\/\/[^\/]+/,"")
e=location.protocol+"//"+location.host+(e.charAt(0)=="/"?"":location.pathname.replace(/\/[^\/]*$/,""))+"/"+e.replace(/^[\/]+/,"")
return e}
this.terminate=function(){this._emit("terminate",{})
this.deltaQueue=null
this.$worker.terminate()
this.$worker=null
this.$doc.removeEventListener("change",this.changeListener)
this.$doc=null}
this.send=function(e,t){this.$worker.postMessage({command:e,args:t})}
this.call=function(e,t,i){if(i){var n=this.callbackId++
this.callbacks[n]=i
t.push(n)}this.send(e,t)}
this.emit=function(e,t){try{this.$worker.postMessage({event:e,data:{data:t.data}})}catch(i){}}
this.attachToDocument=function(e){if(this.$doc)this.terminate()
this.$doc=e
this.call("setValue",[e.getValue()])
e.on("change",this.changeListener)}
this.changeListener=function(e){if(!this.deltaQueue){this.deltaQueue=[e.data]
setTimeout(this.$sendDeltaQueue,1)}else this.deltaQueue.push(e.data)}
this.$sendDeltaQueue=function(){var e=this.deltaQueue
if(!e)return
this.deltaQueue=null
if(e.length>20&&e.length>this.$doc.getLength()>>1){this.call("setValue",[this.$doc.getValue()])}else this.emit("change",{data:e})}}).call(o.prototype)
var a=function(e,t,i){this.$sendDeltaQueue=this.$sendDeltaQueue.bind(this)
this.changeListener=this.changeListener.bind(this)
this.callbackId=1
this.callbacks={}
this.messageBuffer=[]
var n=null
var o=Object.create(r)
var a=this
this.$worker={}
this.$worker.terminate=function(){}
this.$worker.postMessage=function(e){a.messageBuffer.push(e)
n&&setTimeout(l)}
var l=function(){var e=a.messageBuffer.shift()
if(e.command)n[e.command].apply(n,e.args)
else if(e.event)o._emit(e.event,e.data)}
o.postMessage=function(e){a.onMessage({data:e})}
o.callback=function(e,t){this.postMessage({type:"call",id:t,data:e})}
o.emit=function(e,t){this.postMessage({type:"event",name:e,data:t})}
s.loadModule(["worker",t],function(e){n=new e[i](o)
while(a.messageBuffer.length)l()})}
a.prototype=o.prototype
t.UIWorkerClient=a
t.WorkerClient=o})
ace.define("ace/placeholder",["require","exports","module","ace/range","ace/lib/event_emitter","ace/lib/oop"],function(e,t,i){var n=e("./range").Range
var r=e("./lib/event_emitter").EventEmitter
var s=e("./lib/oop")
var o=function(e,t,i,n,r,s){var o=this
this.length=t
this.session=e
this.doc=e.getDocument()
this.mainClass=r
this.othersClass=s
this.$onUpdate=this.onUpdate.bind(this)
this.doc.on("change",this.$onUpdate)
this.$others=n
this.$onCursorChange=function(){setTimeout(function(){o.onCursorChange()})}
this.$pos=i
var a=e.getUndoManager().$undoStack||e.getUndoManager().$undostack||{length:-1}
this.$undoStackDepth=a.length
this.setup()
e.selection.on("changeCursor",this.$onCursorChange)};(function(){s.implement(this,r)
this.setup=function(){var e=this
var t=this.doc
var i=this.session
var r=this.$pos
this.pos=t.createAnchor(r.row,r.column)
this.markerId=i.addMarker(new n(r.row,r.column,r.row,r.column+this.length),this.mainClass,null,false)
this.pos.on("change",function(t){i.removeMarker(e.markerId)
e.markerId=i.addMarker(new n(t.value.row,t.value.column,t.value.row,t.value.column+e.length),e.mainClass,null,false)})
this.others=[]
this.$others.forEach(function(i){var n=t.createAnchor(i.row,i.column)
e.others.push(n)})
i.setUndoSelect(false)}
this.showOtherMarkers=function(){if(this.othersActive)return
var e=this.session
var t=this
this.othersActive=true
this.others.forEach(function(i){i.markerId=e.addMarker(new n(i.row,i.column,i.row,i.column+t.length),t.othersClass,null,false)
i.on("change",function(r){e.removeMarker(i.markerId)
i.markerId=e.addMarker(new n(r.value.row,r.value.column,r.value.row,r.value.column+t.length),t.othersClass,null,false)})})}
this.hideOtherMarkers=function(){if(!this.othersActive)return
this.othersActive=false
for(var e=0;e<this.others.length;e++){this.session.removeMarker(this.others[e].markerId)}}
this.onUpdate=function(e){var t=e.data
var i=t.range
if(i.start.row!==i.end.row)return
if(i.start.row!==this.pos.row)return
if(this.$updating)return
this.$updating=true
var r=t.action==="insertText"?i.end.column-i.start.column:i.start.column-i.end.column
if(i.start.column>=this.pos.column&&i.start.column<=this.pos.column+this.length+1){var s=i.start.column-this.pos.column
this.length+=r
if(!this.session.$fromUndo){if(t.action==="insertText"){for(var o=this.others.length-1;o>=0;o--){var a=this.others[o]
var l={row:a.row,column:a.column+s}
if(a.row===i.start.row&&i.start.column<a.column)l.column+=r
this.doc.insert(l,t.text)}}else if(t.action==="removeText"){for(var o=this.others.length-1;o>=0;o--){var a=this.others[o]
var l={row:a.row,column:a.column+s}
if(a.row===i.start.row&&i.start.column<a.column)l.column+=r
this.doc.remove(new n(l.row,l.column,l.row,l.column-r))}}if(i.start.column===this.pos.column&&t.action==="insertText"){setTimeout(function(){this.pos.setPosition(this.pos.row,this.pos.column-r)
for(var e=0;e<this.others.length;e++){var t=this.others[e]
var n={row:t.row,column:t.column-r}
if(t.row===i.start.row&&i.start.column<t.column)n.column+=r
t.setPosition(n.row,n.column)}}.bind(this),0)}else if(i.start.column===this.pos.column&&t.action==="removeText"){setTimeout(function(){for(var e=0;e<this.others.length;e++){var t=this.others[e]
if(t.row===i.start.row&&i.start.column<t.column){t.setPosition(t.row,t.column-r)}}}.bind(this),0)}}this.pos._emit("change",{value:this.pos})
for(var o=0;o<this.others.length;o++){this.others[o]._emit("change",{value:this.others[o]})}}this.$updating=false}
this.onCursorChange=function(e){if(this.$updating)return
var t=this.session.selection.getCursor()
if(t.row===this.pos.row&&t.column>=this.pos.column&&t.column<=this.pos.column+this.length){this.showOtherMarkers()
this._emit("cursorEnter",e)}else{this.hideOtherMarkers()
this._emit("cursorLeave",e)}}
this.detach=function(){this.session.removeMarker(this.markerId)
this.hideOtherMarkers()
this.doc.removeEventListener("change",this.$onUpdate)
this.session.selection.removeEventListener("changeCursor",this.$onCursorChange)
this.pos.detach()
for(var e=0;e<this.others.length;e++){this.others[e].detach()}this.session.setUndoSelect(true)}
this.cancel=function(){if(this.$undoStackDepth===-1)throw Error("Canceling placeholders only supported with undo manager attached to session.")
var e=this.session.getUndoManager()
var t=(e.$undoStack||e.$undostack).length-this.$undoStackDepth
for(var i=0;i<t;i++){e.undo(true)}}}).call(o.prototype)
t.PlaceHolder=o})
ace.define("ace/mode/folding/fold_mode",["require","exports","module","ace/range"],function(e,t,i){var n=e("../../range").Range
var r=t.FoldMode=function(){};(function(){this.foldingStartMarker=null
this.foldingStopMarker=null
this.getFoldWidget=function(e,t,i){var n=e.getLine(i)
if(this.foldingStartMarker.test(n))return"start"
if(t=="markbeginend"&&this.foldingStopMarker&&this.foldingStopMarker.test(n))return"end"
return""}
this.getFoldWidgetRange=function(e,t,i){return null}
this.indentationBlock=function(e,t,i){var r=/\S/
var s=e.getLine(t)
var o=s.search(r)
if(o==-1)return
var a=i||s.length
var l=e.getLength()
var h=t
var c=t
while(++t<l){var u=e.getLine(t).search(r)
if(u==-1)continue
if(u<=o)break
c=t}if(c>h){var d=e.getLine(c).length
return new n(h,a,c,d)}}
this.openingBracketBlock=function(e,t,i,r,s){var o={row:i,column:r+1}
var a=e.$findClosingBracket(t,o,s)
if(!a)return
var l=e.foldWidgets[a.row]
if(l==null)l=this.getFoldWidget(e,a.row)
if(l=="start"&&a.row>o.row){a.row--
a.column=e.getLine(a.row).length}return n.fromPoints(o,a)}
this.closingBracketBlock=function(e,t,i,r,s){var o={row:i,column:r}
var a=e.$findOpeningBracket(t,o)
if(!a)return
a.column++
o.column--
return n.fromPoints(a,o)}}).call(r.prototype)})
ace.define("ace/theme/textmate",["require","exports","module","ace/lib/dom"],function(e,t,i){t.isDark=false
t.cssClass="ace-tm"
t.cssText='.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}'
var n=e("../lib/dom")
n.importCssString(t.cssText,t.cssClass)});(function(){ace.require(["ace/ace"],function(e){e&&e.config.init()
if(!window.ace)window.ace={}
for(var t in e)if(e.hasOwnProperty(t))ace[t]=e[t]})})()
KAdefine("third_party/javascript-khansrc/ace-builds/src-noconflict/ace.js", function(require, requireWithVars, module, exports) {
    module.exports = ace;
});
ace.define("ace/mode/javascript",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/javascript_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/worker/worker_client","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],function(e,t,n){var r=e("../lib/oop")
var o=e("./text").Mode
var a=e("../tokenizer").Tokenizer
var i=e("./javascript_highlight_rules").JavaScriptHighlightRules
var s=e("./matching_brace_outdent").MatchingBraceOutdent
var c=e("../range").Range
var l=e("../worker/worker_client").WorkerClient
var u=e("./behaviour/cstyle").CstyleBehaviour
var g=e("./folding/cstyle").FoldMode
var d=function(){this.HighlightRules=i
this.$outdent=new s
this.$behaviour=new u
this.foldingRules=new g}
r.inherits(d,o);(function(){this.lineCommentStart="//"
this.blockComment={start:"/*",end:"*/"}
this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t)
var o=this.getTokenizer().getLineTokens(t,e)
var a=o.tokens
var i=o.state
if(a.length&&a[a.length-1].type=="comment"){return r}if(e=="start"||e=="no_regex"){var s=t.match(/^.*(?:\bcase\b.*\:|[\{\(\[])\s*$/)
if(s){r+=n}}else if(e=="doc-start"){if(i=="start"||i=="no_regex"){return""}var s=t.match(/^\s*(\/?)\*/)
if(s){if(s[1]){r+=" "}r+="* "}}return r}
this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)}
this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}
this.createWorker=function(e){var t=new l(["ace"],"ace/mode/javascript_worker","JavaScriptWorker")
t.attachToDocument(e.getDocument())
t.on("jslint",function(t){e.setAnnotations(t.data)})
t.on("terminate",function(){e.clearAnnotations()})
return t}}).call(d.prototype)
t.Mode=d})
ace.define("ace/mode/javascript_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop")
var o=e("./doc_comment_highlight_rules").DocCommentHighlightRules
var a=e("./text_highlight_rules").TextHighlightRules
var i=function(){var e=this.createKeywordMapper({"variable.language":"Array|Boolean|Date|Function|Iterator|Number|Object|RegExp|String|Proxy|"+"Namespace|QName|XML|XMLList|"+"ArrayBuffer|Float32Array|Float64Array|Int16Array|Int32Array|Int8Array|"+"Uint16Array|Uint32Array|Uint8Array|Uint8ClampedArray|"+"Error|EvalError|InternalError|RangeError|ReferenceError|StopIteration|"+"SyntaxError|TypeError|URIError|"+"decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|"+"isNaN|parseFloat|parseInt|"+"JSON|Math|"+"this|arguments|prototype|window|document",keyword:"const|yield|import|get|set|"+"break|case|catch|continue|default|delete|do|else|finally|for|function|"+"if|in|instanceof|new|return|switch|throw|try|typeof|let|var|while|with|debugger|"+"__parent__|__count__|escape|unescape|with|__proto__|"+"class|enum|extends|super|export|implements|private|public|interface|package|protected|static","storage.type":"const|let|var|function","constant.language":"null|Infinity|NaN|undefined","support.function":"alert","constant.language.boolean":"true|false"},"identifier")
var t="case|do|else|finally|in|instanceof|return|throw|try|typeof|yield|void"
var n="[a-zA-Z\\$_¡-￿][a-zA-Z\\d\\$_¡-￿]*\\b"
var r="\\\\(?:x[0-9a-fA-F]{2}|"+"u[0-9a-fA-F]{4}|"+"[0-2][0-7]{0,2}|"+"3[0-6][0-7]?|"+"37[0-7]?|"+"[4-7][0-7]?|"+".)"
this.$rules={no_regex:[{token:"comment",regex:"\\/\\/",next:"line_comment"},o.getStartRule("doc-start"),{token:"comment",regex:/\/\*/,next:"comment"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:/0[xX][0-9a-fA-F]+\b/},{token:"constant.numeric",regex:/[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?\b/},{token:["storage.type","punctuation.operator","support.function","punctuation.operator","entity.name.function","text","keyword.operator"],regex:"("+n+")(\\.)(prototype)(\\.)("+n+")(\\s*)(=)",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\.)("+n+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","keyword.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\s*)(=)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","punctuation.operator","entity.name.function","text","keyword.operator","text","storage.type","text","entity.name.function","text","paren.lparen"],regex:"("+n+")(\\.)("+n+")(\\s*)(=)(\\s*)(function)(\\s+)(\\w+)(\\s*)(\\()",next:"function_arguments"},{token:["storage.type","text","entity.name.function","text","paren.lparen"],regex:"(function)(\\s+)("+n+")(\\s*)(\\()",next:"function_arguments"},{token:["entity.name.function","text","punctuation.operator","text","storage.type","text","paren.lparen"],regex:"("+n+")(\\s*)(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:["text","text","storage.type","text","paren.lparen"],regex:"(:)(\\s*)(function)(\\s*)(\\()",next:"function_arguments"},{token:"keyword",regex:"(?:"+t+")\\b",next:"start"},{token:["punctuation.operator","support.function"],regex:/(\.)(s(?:h(?:ift|ow(?:Mod(?:elessDialog|alDialog)|Help))|croll(?:X|By(?:Pages|Lines)?|Y|To)?|t(?:op|rike)|i(?:n|zeToContent|debar|gnText)|ort|u(?:p|b(?:str(?:ing)?)?)|pli(?:ce|t)|e(?:nd|t(?:Re(?:sizable|questHeader)|M(?:i(?:nutes|lliseconds)|onth)|Seconds|Ho(?:tKeys|urs)|Year|Cursor|Time(?:out)?|Interval|ZOptions|Date|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Date|FullYear)|FullYear|Active)|arch)|qrt|lice|avePreferences|mall)|h(?:ome|andleEvent)|navigate|c(?:har(?:CodeAt|At)|o(?:s|n(?:cat|textual|firm)|mpile)|eil|lear(?:Timeout|Interval)?|a(?:ptureEvents|ll)|reate(?:StyleSheet|Popup|EventObject))|t(?:o(?:GMTString|S(?:tring|ource)|U(?:TCString|pperCase)|Lo(?:caleString|werCase))|est|a(?:n|int(?:Enabled)?))|i(?:s(?:NaN|Finite)|ndexOf|talics)|d(?:isableExternalCapture|ump|etachEvent)|u(?:n(?:shift|taint|escape|watch)|pdateCommands)|j(?:oin|avaEnabled)|p(?:o(?:p|w)|ush|lugins.refresh|a(?:ddings|rse(?:Int|Float)?)|r(?:int|ompt|eference))|e(?:scape|nableExternalCapture|val|lementFromPoint|x(?:p|ec(?:Script|Command)?))|valueOf|UTC|queryCommand(?:State|Indeterm|Enabled|Value)|f(?:i(?:nd|le(?:ModifiedDate|Size|CreatedDate|UpdatedDate)|xed)|o(?:nt(?:size|color)|rward)|loor|romCharCode)|watch|l(?:ink|o(?:ad|g)|astIndexOf)|a(?:sin|nchor|cos|t(?:tachEvent|ob|an(?:2)?)|pply|lert|b(?:s|ort))|r(?:ou(?:nd|teEvents)|e(?:size(?:By|To)|calc|turnValue|place|verse|l(?:oad|ease(?:Capture|Events)))|andom)|g(?:o|et(?:ResponseHeader|M(?:i(?:nutes|lliseconds)|onth)|Se(?:conds|lection)|Hours|Year|Time(?:zoneOffset)?|Da(?:y|te)|UTC(?:M(?:i(?:nutes|lliseconds)|onth)|Seconds|Hours|Da(?:y|te)|FullYear)|FullYear|A(?:ttention|llResponseHeaders)))|m(?:in|ove(?:B(?:y|elow)|To(?:Absolute)?|Above)|ergeAttributes|a(?:tch|rgins|x))|b(?:toa|ig|o(?:ld|rderWidths)|link|ack))\b(?=\()/},{token:["punctuation.operator","support.function.dom"],regex:/(\.)(s(?:ub(?:stringData|mit)|plitText|e(?:t(?:NamedItem|Attribute(?:Node)?)|lect))|has(?:ChildNodes|Feature)|namedItem|c(?:l(?:ick|o(?:se|neNode))|reate(?:C(?:omment|DATASection|aption)|T(?:Head|extNode|Foot)|DocumentFragment|ProcessingInstruction|E(?:ntityReference|lement)|Attribute))|tabIndex|i(?:nsert(?:Row|Before|Cell|Data)|tem)|open|delete(?:Row|C(?:ell|aption)|T(?:Head|Foot)|Data)|focus|write(?:ln)?|a(?:dd|ppend(?:Child|Data))|re(?:set|place(?:Child|Data)|move(?:NamedItem|Child|Attribute(?:Node)?)?)|get(?:NamedItem|Element(?:sBy(?:Name|TagName)|ById)|Attribute(?:Node)?)|blur)\b(?=\()/},{token:["punctuation.operator","support.constant"],regex:/(\.)(s(?:ystemLanguage|cr(?:ipts|ollbars|een(?:X|Y|Top|Left))|t(?:yle(?:Sheets)?|atus(?:Text|bar)?)|ibling(?:Below|Above)|ource|uffixes|e(?:curity(?:Policy)?|l(?:ection|f)))|h(?:istory|ost(?:name)?|as(?:h|Focus))|y|X(?:MLDocument|SLDocument)|n(?:ext|ame(?:space(?:s|URI)|Prop))|M(?:IN_VALUE|AX_VALUE)|c(?:haracterSet|o(?:n(?:structor|trollers)|okieEnabled|lorDepth|mp(?:onents|lete))|urrent|puClass|l(?:i(?:p(?:boardData)?|entInformation)|osed|asses)|alle(?:e|r)|rypto)|t(?:o(?:olbar|p)|ext(?:Transform|Indent|Decoration|Align)|ags)|SQRT(?:1_2|2)|i(?:n(?:ner(?:Height|Width)|put)|ds|gnoreCase)|zIndex|o(?:scpu|n(?:readystatechange|Line)|uter(?:Height|Width)|p(?:sProfile|ener)|ffscreenBuffering)|NEGATIVE_INFINITY|d(?:i(?:splay|alog(?:Height|Top|Width|Left|Arguments)|rectories)|e(?:scription|fault(?:Status|Ch(?:ecked|arset)|View)))|u(?:ser(?:Profile|Language|Agent)|n(?:iqueID|defined)|pdateInterval)|_content|p(?:ixelDepth|ort|ersonalbar|kcs11|l(?:ugins|atform)|a(?:thname|dding(?:Right|Bottom|Top|Left)|rent(?:Window|Layer)?|ge(?:X(?:Offset)?|Y(?:Offset)?))|r(?:o(?:to(?:col|type)|duct(?:Sub)?|mpter)|e(?:vious|fix)))|e(?:n(?:coding|abledPlugin)|x(?:ternal|pando)|mbeds)|v(?:isibility|endor(?:Sub)?|Linkcolor)|URLUnencoded|P(?:I|OSITIVE_INFINITY)|f(?:ilename|o(?:nt(?:Size|Family|Weight)|rmName)|rame(?:s|Element)|gColor)|E|whiteSpace|l(?:i(?:stStyleType|n(?:eHeight|kColor))|o(?:ca(?:tion(?:bar)?|lName)|wsrc)|e(?:ngth|ft(?:Context)?)|a(?:st(?:M(?:odified|atch)|Index|Paren)|yer(?:s|X)|nguage))|a(?:pp(?:MinorVersion|Name|Co(?:deName|re)|Version)|vail(?:Height|Top|Width|Left)|ll|r(?:ity|guments)|Linkcolor|bove)|r(?:ight(?:Context)?|e(?:sponse(?:XML|Text)|adyState))|global|x|m(?:imeTypes|ultiline|enubar|argin(?:Right|Bottom|Top|Left))|L(?:N(?:10|2)|OG(?:10E|2E))|b(?:o(?:ttom|rder(?:Width|RightWidth|BottomWidth|Style|Color|TopWidth|LeftWidth))|ufferDepth|elow|ackground(?:Color|Image)))\b/},{token:["storage.type","punctuation.operator","support.function.firebug"],regex:/(console)(\.)(warn|info|log|error|time|timeEnd|assert)\b/},{token:e,regex:n},{token:"keyword.operator",regex:/--|\+\+|[!$%&*+\-~]|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\|\||\?\:|\*=|%=|\+=|\-=|&=|\^=/,next:"start"},{token:"punctuation.operator",regex:/\?|\:|\,|\;|\./,next:"start"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:"keyword.operator",regex:/\/=?/,next:"start"},{token:"comment",regex:/^#!.*$/}],start:[o.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment_regex_allowed"},{token:"comment",regex:"\\/\\/",next:"line_comment_regex_allowed"},{token:"string.regexp",regex:"\\/",next:"regex"},{token:"text",regex:"\\s+|^$",next:"start"},{token:"empty",regex:"",next:"no_regex"}],regex:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"string.regexp",regex:"/\\w*",next:"no_regex"},{token:"invalid",regex:/\{\d+\b,?\d*\}[+*]|[+*$^?][+*]|[$^][?]|\?{3,}/},{token:"constant.language.escape",regex:/\(\?[:=!]|\)|\{\d+\b,?\d*\}|[+*]\?|[()$^+*?]/},{token:"constant.language.delimiter",regex:/\|/},{token:"constant.language.escape",regex:/\[\^?/,next:"regex_character_class"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp"}],regex_character_class:[{token:"regexp.keyword.operator",regex:"\\\\(?:u[\\da-fA-F]{4}|x[\\da-fA-F]{2}|.)"},{token:"constant.language.escape",regex:"]",next:"regex"},{token:"constant.language.escape",regex:"-"},{token:"empty",regex:"$",next:"no_regex"},{defaultToken:"string.regexp.charachterclass"}],function_arguments:[{token:"variable.parameter",regex:n},{token:"punctuation.operator",regex:"[, ]+"},{token:"punctuation.operator",regex:"$"},{token:"empty",regex:"",next:"no_regex"}],comment_regex_allowed:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],comment:[{token:"comment",regex:"\\*\\/",next:"no_regex"},{defaultToken:"comment"}],line_comment_regex_allowed:[{token:"comment",regex:"$|^",next:"start"},{defaultToken:"comment"}],line_comment:[{token:"comment",regex:"$|^",next:"no_regex"},{defaultToken:"comment"}],qqstring:[{token:"constant.language.escape",regex:r},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"no_regex"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:r},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"no_regex"},{defaultToken:"string"}]}
this.embedRules(o,"doc-",[o.getEndRule("no_regex")])}
r.inherits(i,a)
t.JavaScriptHighlightRules=i})
ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop")
var o=e("./text_highlight_rules").TextHighlightRules
var a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}}
r.inherits(a,o)
a.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}}
a.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}}
t.DocCommentHighlightRules=a})
ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t,n){var r=e("../range").Range
var o=function(){};(function(){this.checkOutdent=function(e,t){if(!/^\s+$/.test(e))return false
return/^\s*\}/.test(t)}
this.autoOutdent=function(e,t){var n=e.getLine(t)
var o=n.match(/^(\s*\})/)
if(!o)return 0
var a=o[1].length
var i=e.findMatchingBracket({row:t,column:a})
if(!i||i.row==t)return 0
var s=this.$getIndent(e.getLine(i.row))
e.replace(new r(t,0,t,a-1),s)}
this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype)
t.MatchingBraceOutdent=o})
ace.define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t,n){var r=e("../../lib/oop")
var o=e("../behaviour").Behaviour
var a=e("../../token_iterator").TokenIterator
var i=e("../../lib/lang")
var s=["text","paren.rparen","punctuation.operator"]
var c=["text","paren.rparen","punctuation.operator","comment"]
var l=0
var u=-1
var g=""
var d=0
var m=-1
var p=""
var f=""
var x=function(){x.isSaneInsertion=function(e,t){var n=e.getCursorPosition()
var r=new a(t,n.row,n.column)
if(!this.$matchTokenType(r.getCurrentToken()||"text",s)){var o=new a(t,n.row,n.column+1)
if(!this.$matchTokenType(o.getCurrentToken()||"text",s))return false}r.stepForward()
return r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",c)}
x.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1}
x.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition()
var o=t.doc.getLine(r.row)
if(!this.isAutoInsertedClosing(r,o,g[0]))l=0
u=r.row
g=n+o.substr(r.column)
l++}
x.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition()
var o=t.doc.getLine(r.row)
if(!this.isMaybeInsertedClosing(r,o))d=0
m=r.row
p=o.substr(0,r.column)+n
f=o.substr(r.column)
d++}
x.isAutoInsertedClosing=function(e,t,n){return l>0&&e.row===u&&n===g[0]&&t.substr(e.column)===g}
x.isMaybeInsertedClosing=function(e,t){return d>0&&e.row===m&&t.substr(e.column)===f&&t.substr(0,e.column)==p}
x.popAutoInsertedClosing=function(){g=g.substr(1)
l--}
x.clearMaybeInsertedClosing=function(){d=0
m=-1}
this.add("braces","insertion",function(e,t,n,r,o){var a=n.getCursorPosition()
var s=r.doc.getLine(a.row)
if(o=="{"){var c=n.getSelectionRange()
var l=r.doc.getTextRange(c)
if(l!==""&&l!=="{"&&n.getWrapBehavioursEnabled()){return{text:"{"+l+"}",selection:false}}else if(x.isSaneInsertion(n,r)){if(/[\]\}\)]/.test(s[a.column])){x.recordAutoInsert(n,r,"}")
return{text:"{}",selection:[1,1]}}else{x.recordMaybeInsert(n,r,"{")
return{text:"{",selection:[1,1]}}}}else if(o=="}"){var u=s.substring(a.column,a.column+1)
if(u=="}"){var g=r.$findOpeningBracket("}",{column:a.column+1,row:a.row})
if(g!==null&&x.isAutoInsertedClosing(a,s,o)){x.popAutoInsertedClosing()
return{text:"",selection:[1,1]}}}}else if(o=="\n"||o=="\r\n"){var m=""
if(x.isMaybeInsertedClosing(a,s)){m=i.stringRepeat("}",d)
x.clearMaybeInsertedClosing()}var u=s.substring(a.column,a.column+1)
if(u=="}"||m!==""){var p=r.findMatchingBracket({row:a.row,column:a.column},"}")
if(!p)return null
var f=this.getNextLineIndent(e,s.substring(0,a.column),r.getTabString())
var h=this.$getIndent(s)
return{text:"\n"+f+"\n"+h+m,selection:[1,f.length,1,f.length]}}}})
this.add("braces","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o)
if(!o.isMultiLine()&&a=="{"){var i=r.doc.getLine(o.start.row)
var s=i.substring(o.end.column,o.end.column+1)
if(s=="}"){o.end.column++
return o}else{d--}}})
this.add("parens","insertion",function(e,t,n,r,o){if(o=="("){var a=n.getSelectionRange()
var i=r.doc.getTextRange(a)
if(i!==""&&n.getWrapBehavioursEnabled()){return{text:"("+i+")",selection:false}}else if(x.isSaneInsertion(n,r)){x.recordAutoInsert(n,r,")")
return{text:"()",selection:[1,1]}}}else if(o==")"){var s=n.getCursorPosition()
var c=r.doc.getLine(s.row)
var l=c.substring(s.column,s.column+1)
if(l==")"){var u=r.$findOpeningBracket(")",{column:s.column+1,row:s.row})
if(u!==null&&x.isAutoInsertedClosing(s,c,o)){x.popAutoInsertedClosing()
return{text:"",selection:[1,1]}}}}})
this.add("parens","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o)
if(!o.isMultiLine()&&a=="("){var i=r.doc.getLine(o.start.row)
var s=i.substring(o.start.column+1,o.start.column+2)
if(s==")"){o.end.column++
return o}}})
this.add("brackets","insertion",function(e,t,n,r,o){if(o=="["){var a=n.getSelectionRange()
var i=r.doc.getTextRange(a)
if(i!==""&&n.getWrapBehavioursEnabled()){return{text:"["+i+"]",selection:false}}else if(x.isSaneInsertion(n,r)){x.recordAutoInsert(n,r,"]")
return{text:"[]",selection:[1,1]}}}else if(o=="]"){var s=n.getCursorPosition()
var c=r.doc.getLine(s.row)
var l=c.substring(s.column,s.column+1)
if(l=="]"){var u=r.$findOpeningBracket("]",{column:s.column+1,row:s.row})
if(u!==null&&x.isAutoInsertedClosing(s,c,o)){x.popAutoInsertedClosing()
return{text:"",selection:[1,1]}}}}})
this.add("brackets","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o)
if(!o.isMultiLine()&&a=="["){var i=r.doc.getLine(o.start.row)
var s=i.substring(o.start.column+1,o.start.column+2)
if(s=="]"){o.end.column++
return o}}})
this.add("string_dquotes","insertion",function(e,t,n,r,o){if(o=='"'||o=="'"){var a=o
var i=n.getSelectionRange()
var s=r.doc.getTextRange(i)
if(s!==""&&s!=="'"&&s!='"'&&n.getWrapBehavioursEnabled()){return{text:a+s+a,selection:false}}else{var c=n.getCursorPosition()
var l=r.doc.getLine(c.row)
var u=l.substring(c.column-1,c.column)
if(u=="\\"){return null}var g=r.getTokens(i.start.row)
var d=0,m
var p=-1
for(var f=0;f<g.length;f++){m=g[f]
if(m.type=="string"){p=-1}else if(p<0){p=m.value.indexOf(a)}if(m.value.length+d>i.start.column){break}d+=g[f].value.length}if(!m||p<0&&m.type!=="comment"&&(m.type!=="string"||i.start.column!==m.value.length+d-1&&m.value.lastIndexOf(a)===m.value.length-1)){if(!x.isSaneInsertion(n,r))return
return{text:a+a,selection:[1,1]}}else if(m&&m.type==="string"){var h=l.substring(c.column,c.column+1)
if(h==a){return{text:"",selection:[1,1]}}}}}})
this.add("string_dquotes","deletion",function(e,t,n,r,o){var a=r.doc.getTextRange(o)
if(!o.isMultiLine()&&(a=='"'||a=="'")){var i=r.doc.getLine(o.start.row)
var s=i.substring(o.start.column+1,o.start.column+2)
if(s==a){o.end.column++
return o}}})}
r.inherits(x,o)
t.CstyleBehaviour=x})
ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){var r=e("../../lib/oop")
var o=e("../../range").Range
var a=e("./fold_mode").FoldMode
var i=t.FoldMode=function(e){if(e){this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start))
this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end))}}
r.inherits(i,a);(function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/
this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/
this.getFoldWidgetRange=function(e,t,n){var r=e.getLine(n)
var o=r.match(this.foldingStartMarker)
if(o){var a=o.index
if(o[1])return this.openingBracketBlock(e,o[1],n,a)
return e.getCommentFoldRange(n,a+o[0].length,1)}if(t!=="markbeginend")return
var o=r.match(this.foldingStopMarker)
if(o){var a=o.index+o[0].length
if(o[1])return this.closingBracketBlock(e,o[1],n,a)
return e.getCommentFoldRange(n,a,-1)}}}).call(i.prototype)})
KAdefine("third_party/javascript-khansrc/ace-builds/src-noconflict/mode-javascript.js", function(require, requireWithVars, module, exports) {
});
ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/keyboard/hash_handler","ace/lib/keys"],function(e,t,i){var n=e("../lib/dom")
var a=e("../lib/lang")
var o=e("../lib/event")
var c="/* ------------------------------------------------------------------------------------------* Editor Search Form* --------------------------------------------------------------------------------------- */.ace_search {background-color: #ddd;border: 1px solid #cbcbcb;border-top: 0 none;max-width: 297px;overflow: hidden;margin: 0;padding: 4px;padding-right: 6px;padding-bottom: 0;position: absolute;top: 0px;z-index: 99;}.ace_search.left {border-left: 0 none;border-radius: 0px 0px 5px 0px;left: 0;}.ace_search.right {border-radius: 0px 0px 0px 5px;border-right: 0 none;right: 0;}.ace_search_form, .ace_replace_form {border-radius: 3px;border: 1px solid #cbcbcb;float: left;margin-bottom: 4px;overflow: hidden;}.ace_search_form.ace_nomatch {outline: 1px solid red;}.ace_search_field {background-color: white;border-right: 1px solid #cbcbcb;border: 0 none;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;display: block;float: left;height: 22px;outline: 0;padding: 0 7px;width: 214px;margin: 0;}.ace_searchbtn,.ace_replacebtn {background: #fff;border: 0 none;border-left: 1px solid #dcdcdc;cursor: pointer;display: block;float: left;height: 22px;margin: 0;padding: 0;position: relative;}.ace_searchbtn:last-child,.ace_replacebtn:last-child {border-top-right-radius: 3px;border-bottom-right-radius: 3px;}.ace_searchbtn:disabled {background: none;cursor: default;}.ace_searchbtn {background-position: 50% 50%;background-repeat: no-repeat;width: 27px;}.ace_searchbtn.prev {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADFJREFUeNpiSU1NZUAC/6E0I0yACYskCpsJiySKIiY0SUZk40FyTEgCjGgKwTRAgAEAQJUIPCE+qfkAAAAASUVORK5CYII=);    }.ace_searchbtn.next {background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADRJREFUeNpiTE1NZQCC/0DMyIAKwGJMUAYDEo3M/s+EpvM/mkKwCQxYjIeLMaELoLMBAgwAU7UJObTKsvAAAAAASUVORK5CYII=);    }.ace_searchbtn_close {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;border-radius: 50%;border: 0 none;color: #656565;cursor: pointer;display: block;float: right;font-family: Arial;font-size: 16px;height: 14px;line-height: 16px;margin: 5px 1px 9px 5px;padding: 0;text-align: center;width: 14px;}.ace_searchbtn_close:hover {background-color: #656565;background-position: 50% 100%;color: white;}.ace_replacebtn.prev {width: 54px}.ace_replacebtn.next {width: 27px}.ace_button {margin-left: 2px;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;overflow: hidden;opacity: 0.7;border: 1px solid rgba(100,100,100,0.23);padding: 1px;-moz-box-sizing: border-box;box-sizing:    border-box;color: black;}.ace_button:hover {background-color: #eee;opacity:1;}.ace_button:active {background-color: #ddd;}.ace_button.checked {border-color: #3399ff;opacity:1;}.ace_search_options{margin-bottom: 3px;text-align: right;-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;-ms-user-select: none;user-select: none;}"
var r=e("../keyboard/hash_handler").HashHandler
var s=e("../lib/keys")
n.importCssString(c,"ace_searchbox")
var l='<div class="ace_search right">    <button type="button" action="hide" class="ace_searchbtn_close"></button>    <div class="ace_search_form">        <input class="ace_search_field" placeholder="Search for" spellcheck="false"></input>        <button type="button" action="findNext" class="ace_searchbtn next"></button>        <button type="button" action="findPrev" class="ace_searchbtn prev"></button>    </div>    <div class="ace_replace_form">        <input class="ace_search_field" placeholder="Replace with" spellcheck="false"></input>        <button type="button" action="replaceAndFindNext" class="ace_replacebtn">Replace</button>        <button type="button" action="replaceAll" class="ace_replacebtn">All</button>    </div>    <div class="ace_search_options">        <span action="toggleRegexpMode" class="ace_button" title="RegExp Search">.*</span>        <span action="toggleCaseSensitive" class="ace_button" title="CaseSensitive Search">Aa</span>        <span action="toggleWholeWords" class="ace_button" title="Whole Word Search">\\b</span>    </div></div>'.replace(/>\s+/g,">")
var h=function(e,t,i){var a=n.createElement("div")
a.innerHTML=l
this.element=a.firstChild
this.$init()
this.setEditor(e)};(function(){this.setEditor=function(e){e.searchBox=this
e.container.appendChild(this.element)
this.editor=e}
this.$initElements=function(e){this.searchBox=e.querySelector(".ace_search_form")
this.replaceBox=e.querySelector(".ace_replace_form")
this.searchOptions=e.querySelector(".ace_search_options")
this.regExpOption=e.querySelector("[action=toggleRegexpMode]")
this.caseSensitiveOption=e.querySelector("[action=toggleCaseSensitive]")
this.wholeWordOption=e.querySelector("[action=toggleWholeWords]")
this.searchInput=this.searchBox.querySelector(".ace_search_field")
this.replaceInput=this.replaceBox.querySelector(".ace_search_field")}
this.$init=function(){var e=this.element
this.$initElements(e)
var t=this
o.addListener(e,"mousedown",function(e){setTimeout(function(){t.activeInput.focus()},0)
o.stopPropagation(e)})
o.addListener(e,"click",function(e){var i=e.target||e.srcElement
var n=i.getAttribute("action")
if(n&&t[n])t[n]()
else if(t.$searchBarKb.commands[n])t.$searchBarKb.commands[n].exec(t)
o.stopPropagation(e)})
o.addCommandKeyListener(e,function(e,i,n){var a=s.keyCodeToString(n)
var c=t.$searchBarKb.findKeyCommand(i,a)
if(c&&c.exec){c.exec(t)
o.stopEvent(e)}})
this.$onChange=a.delayedCall(function(){t.find(false,false)})
o.addListener(this.searchInput,"input",function(){t.$onChange.schedule(20)})
o.addListener(this.searchInput,"focus",function(){t.activeInput=t.searchInput
t.searchInput.value&&t.highlight()})
o.addListener(this.replaceInput,"focus",function(){t.activeInput=t.replaceInput
t.searchInput.value&&t.highlight()})}
this.$closeSearchBarKb=new r([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}])
this.$searchBarKb=new r
this.$searchBarKb.bindKeys({"Ctrl-f|Command-f|Ctrl-H|Command-Option-F":function(e){var t=e.isReplace=!e.isReplace
e.replaceBox.style.display=t?"":"none"
e[t?"replaceInput":"searchInput"].focus()},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout(function(){e.hide()})},Return:function(e){if(e.activeInput==e.replaceInput)e.replace()
e.findNext()},"Shift-Return":function(e){if(e.activeInput==e.replaceInput)e.replace()
e.findPrev()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}})
this.$searchBarKb.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked
e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked
e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked
e.$syncOptions()}}])
this.$syncOptions=function(){n.setCssClass(this.regExpOption,"checked",this.regExpOption.checked)
n.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked)
n.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked)
this.find(false,false)}
this.highlight=function(e){this.editor.session.highlight(e||this.editor.$search.$options.re)
this.editor.renderer.updateBackMarkers()}
this.find=function(e,t){var i=this.editor.find(this.searchInput.value,{skipCurrent:e,backwards:t,wrap:true,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked})
var a=!i&&this.searchInput.value
n.setCssClass(this.searchBox,"ace_nomatch",a)
this.editor._emit("findSearchBox",{match:!a})
this.highlight()}
this.findNext=function(){this.find(true,false)}
this.findPrev=function(){this.find(true,true)}
this.replace=function(){if(!this.editor.getReadOnly())this.editor.replace(this.replaceInput.value)}
this.replaceAndFindNext=function(){if(!this.editor.getReadOnly()){this.editor.replace(this.replaceInput.value)
this.findNext()}}
this.replaceAll=function(){if(!this.editor.getReadOnly())this.editor.replaceAll(this.replaceInput.value)}
this.hide=function(){this.element.style.display="none"
this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb)
this.editor.focus()}
this.show=function(e,t){this.element.style.display=""
this.replaceBox.style.display=t?"":"none"
this.isReplace=t
if(e)this.searchInput.value=e
this.searchInput.focus()
this.searchInput.select()
this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb)}}).call(h.prototype)
t.SearchBox=h
t.Search=function(e,t){var i=e.searchBox||new h(e)
i.show(e.session.getTextRange(),t)}})
KAdefine("third_party/javascript-khansrc/ace-builds/src-noconflict/ext-searchbox.js", function(require, requireWithVars, module, exports) {
});
(function(e,t){"use strict"
var i=null
function n(i,n){this.setupOptions={url:i||null,flashVersion:8,debugMode:true,debugFlash:false,useConsole:true,consoleOnly:true,waitForWindowLoad:false,bgColor:"#ffffff",useHighPerformance:false,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1e3,wmode:null,allowScriptAccess:"always",useFlashBlock:false,useHTML5Audio:true,html5Test:/^(probably|maybe)$/i,preferFlash:false,noSWFCache:false,idPrefix:"sound"}
this.defaultOptions={autoLoad:false,autoPlay:false,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:true,multiShotEvents:false,position:null,pan:0,stream:true,to:null,type:null,usePolicyFile:false,volume:100}
this.flash9Options={isMovieStar:null,usePeakData:false,useWaveformData:false,useEQData:false,onbufferchange:null,ondataerror:null}
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null}
this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:true},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:false},ogg:{type:["audio/ogg; codecs=vorbis"],required:false},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:false},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],required:false}}
this.movieID="sm2-container"
this.id=n||"sm2movie"
this.debugID="soundmanager-debug"
this.debugURLParam=/([#?&])debug=1/i
this.versionNumber="V2.97a.20131201"
this.version=null
this.movieURL=null
this.altURL=null
this.swfLoaded=false
this.enabled=false
this.oMC=null
this.sounds={}
this.soundIDs=[]
this.muted=false
this.didFlashBlock=false
this.filePattern=null
this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i}
this.features={buffering:false,peakData:false,waveformData:false,eqData:false,movieStar:false}
this.sandbox={type:null,types:{remote:"remote (domain-based) rules",localWithFile:"local with file access (no internet access)",localWithNetwork:"local with network (internet access only, no local access)",localTrusted:"local, trusted (local+internet access)"},description:null,noRemote:null,noLocal:null}
this.html5={usingFlash:null}
this.flash={}
this.html5Only=false
this.ignoreFlash=false
var o,a=this,s=null,l=null,r="soundManager",u=r+": ",f="HTML5::",d,h=navigator.userAgent,c=e.location.href.toString(),p=document,m,_,g,y,w=[],v=true,b,O=false,D=false,M=false,L=false,T=false,P,S=0,F,I,H,A,k,E,C,x,R,N,U,B,W,j,q,V,Q,K,$,J,X,G,Z,Y=["log","info","warn","error"],z=8,et,tt,it,nt=null,ot=null,at,st,lt,rt,ut,ft,dt,ht,ct,pt=false,mt=false,_t,gt,yt,wt=0,vt=null,bt,Ot=[],Dt,Mt=null,Lt,Tt,Pt,St,Ft,It,Ht,At,kt=Array.prototype.slice,Et=false,Ct,xt,Rt,Nt,Ut,Bt,Wt,jt,qt=0,Vt=h.match(/(ipad|iphone|ipod)/i),Qt=h.match(/android/i),Kt=h.match(/msie/i),$t=h.match(/webkit/i),Jt=h.match(/safari/i)&&!h.match(/chrome/i),Xt=h.match(/opera/i),Gt=h.match(/(mobile|pre\/|xoom)/i)||Vt||Qt,Zt=!c.match(/usehtml5audio/i)&&!c.match(/sm2\-ignorebadua/i)&&Jt&&!h.match(/silk/i)&&h.match(/OS X 10_6_([3-7])/i),Yt=e.console!==t&&console.log!==t,zt=p.hasFocus!==t?p.hasFocus():null,ei=Jt&&(p.hasFocus===t||!p.hasFocus()),ti=!ei,ii=/(mp3|mp4|mpa|m4a|m4b)/i,ni=1e3,oi="about:blank",ai="data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==",si=p.location?p.location.protocol.match(/http/i):null,li=!si?"http:/"+"/":"",ri=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,ui=["mpeg4","aac","flv","mov","mp4","m4v","f4v","m4a","m4b","mp4v","3gp","3g2"],fi=new RegExp("\\.("+ui.join("|")+")(\\?.*)?$","i")
this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i
this.useAltURL=!si
rt={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",highPerf:"high_performance",flashDebug:"flash_debug"}
this.hasHTML5=function(){try{return Audio!==t&&(Xt&&opera!==t&&opera.version()<10?new Audio(null):new Audio).canPlayType!==t}catch(e){return false}}()
this.setup=function(e){var i=!a.url
if(e!==t&&M&&Mt&&a.ok()&&(e.flashVersion!==t||e.url!==t||e.html5Test!==t)){ht(at("setupLate"))}H(e)
if(e){if(i&&K&&e.url!==t){a.beginDelayedInit()}if(!K&&e.url!==t&&p.readyState==="complete"){setTimeout(V,1)}}return a}
this.ok=function(){return Mt?M&&!L:a.useHTML5Audio&&a.hasHTML5}
this.supported=this.ok
this.getMovie=function(t){return d(t)||p[t]||e[t]}
this.createSound=function(e,i){var n,s,u,f=null
n=r+".createSound(): "
s=n+at(!M?"notReady":"notOK")
if(!M||!a.ok()){ht(s)
return false}if(i!==t){e={id:e,url:i}}u=I(e)
u.url=bt(u.url)
if(u.id===undefined){u.id=a.setupOptions.idPrefix+qt++}if(u.id.toString().charAt(0).match(/^[0-9]$/)){a._wD(n+at("badID",u.id),2)}a._wD(n+u.id+(u.url?" ("+u.url+")":""),1)
if(ct(u.id,true)){a._wD(n+u.id+" exists",1)
return a.sounds[u.id]}function d(){u=ft(u)
a.sounds[u.id]=new o(u)
a.soundIDs.push(u.id)
return a.sounds[u.id]}if(Tt(u)){f=d()
a._wD(u.id+": Using HTML5")
f._setup_html5(u)}else{if(a.html5Only){a._wD(u.id+": No HTML5 support for this sound, and no Flash. Exiting.")
return d()}if(a.html5.usingFlash&&u.url&&u.url.match(/data\:/i)){a._wD(u.id+": data: URIs not supported via Flash. Exiting.")
return d()}if(y>8){if(u.isMovieStar===null){u.isMovieStar=!!(u.serverURL||(u.type?u.type.match(ri):false)||u.url&&u.url.match(fi))}if(u.isMovieStar){a._wD(n+"using MovieStar handling")
if(u.loops>1){P("noNSLoop")}}}u=dt(u,n)
f=d()
if(y===8){l._createSound(u.id,u.loops||1,u.usePolicyFile)}else{l._createSound(u.id,u.url,u.usePeakData,u.useWaveformData,u.useEQData,u.isMovieStar,u.isMovieStar?u.bufferTime:false,u.loops||1,u.serverURL,u.duration||null,u.autoPlay,true,u.autoLoad,u.usePolicyFile)
if(!u.serverURL){f.connected=true
if(u.onconnect){u.onconnect.apply(f)}}}if(!u.serverURL&&(u.autoLoad||u.autoPlay)){f.load(u)}}if(!u.serverURL&&u.autoPlay){f.play()}return f}
this.destroySound=function(e,t){if(!ct(e)){return false}var i=a.sounds[e],n
i._iO={}
i.stop()
i.unload()
for(n=0;n<a.soundIDs.length;n++){if(a.soundIDs[n]===e){a.soundIDs.splice(n,1)
break}}if(!t){i.destruct(true)}i=null
delete a.sounds[e]
return true}
this.load=function(e,t){if(!ct(e)){return false}return a.sounds[e].load(t)}
this.unload=function(e){if(!ct(e)){return false}return a.sounds[e].unload()}
this.onPosition=function(e,t,i,n){if(!ct(e)){return false}return a.sounds[e].onposition(t,i,n)}
this.onposition=this.onPosition
this.clearOnPosition=function(e,t,i){if(!ct(e)){return false}return a.sounds[e].clearOnPosition(t,i)}
this.play=function(e,t){var i=null,n=t&&!(t instanceof Object)
if(!M||!a.ok()){ht(r+".play(): "+at(!M?"notReady":"notOK"))
return false}if(!ct(e,n)){if(!n){return false}if(n){t={url:t}}if(t&&t.url){a._wD(r+'.play(): Attempting to create "'+e+'"',1)
t.id=e
i=a.createSound(t).play()}}else if(n){t={url:t}}if(i===null){i=a.sounds[e].play(t)}return i}
this.start=this.play
this.setPosition=function(e,t){if(!ct(e)){return false}return a.sounds[e].setPosition(t)}
this.stop=function(e){if(!ct(e)){return false}a._wD(r+".stop("+e+")",1)
return a.sounds[e].stop()}
this.stopAll=function(){var e
a._wD(r+".stopAll()",1)
for(e in a.sounds){if(a.sounds.hasOwnProperty(e)){a.sounds[e].stop()}}}
this.pause=function(e){if(!ct(e)){return false}return a.sounds[e].pause()}
this.pauseAll=function(){var e
for(e=a.soundIDs.length-1;e>=0;e--){a.sounds[a.soundIDs[e]].pause()}}
this.resume=function(e){if(!ct(e)){return false}return a.sounds[e].resume()}
this.resumeAll=function(){var e
for(e=a.soundIDs.length-1;e>=0;e--){a.sounds[a.soundIDs[e]].resume()}}
this.togglePause=function(e){if(!ct(e)){return false}return a.sounds[e].togglePause()}
this.setPan=function(e,t){if(!ct(e)){return false}return a.sounds[e].setPan(t)}
this.setVolume=function(e,t){if(!ct(e)){return false}return a.sounds[e].setVolume(t)}
this.mute=function(e){var t=0
if(e instanceof String){e=null}if(!e){a._wD(r+".mute(): Muting all sounds")
for(t=a.soundIDs.length-1;t>=0;t--){a.sounds[a.soundIDs[t]].mute()}a.muted=true}else{if(!ct(e)){return false}a._wD(r+'.mute(): Muting "'+e+'"')
return a.sounds[e].mute()}return true}
this.muteAll=function(){a.mute()}
this.unmute=function(e){var t
if(e instanceof String){e=null}if(!e){a._wD(r+".unmute(): Unmuting all sounds")
for(t=a.soundIDs.length-1;t>=0;t--){a.sounds[a.soundIDs[t]].unmute()}a.muted=false}else{if(!ct(e)){return false}a._wD(r+'.unmute(): Unmuting "'+e+'"')
return a.sounds[e].unmute()}return true}
this.unmuteAll=function(){a.unmute()}
this.toggleMute=function(e){if(!ct(e)){return false}return a.sounds[e].toggleMute()}
this.getMemoryUse=function(){var e=0
if(l&&y!==8){e=parseInt(l._getMemoryUse(),10)}return e}
this.disable=function(i){var n
if(i===t){i=false}if(L){return false}L=true
P("shutdown",1)
for(n=a.soundIDs.length-1;n>=0;n--){et(a.sounds[a.soundIDs[n]])}F(i)
At.remove(e,"load",C)
return true}
this.canPlayMIME=function(e){var t
if(a.hasHTML5){t=Pt({type:e})}if(!t&&Mt){t=e&&a.ok()?!!((y>8?e.match(ri):null)||e.match(a.mimePattern)):null}return t}
this.canPlayURL=function(e){var t
if(a.hasHTML5){t=Pt({url:e})}if(!t&&Mt){t=e&&a.ok()?!!e.match(a.filePattern):null}return t}
this.canPlayLink=function(e){if(e.type!==t&&e.type){if(a.canPlayMIME(e.type)){return true}}return a.canPlayURL(e.href)}
this.getSoundById=function(e,t){if(!e){return null}var i=a.sounds[e]
if(!i&&!t){a._wD(r+'.getSoundById(): Sound "'+e+'" not found.',2)}return i}
this.onready=function(t,i){var n="onready",o=false
if(typeof t==="function"){if(M){a._wD(at("queue",n))}if(!i){i=e}k(n,t,i)
E()
o=true}else{throw at("needFunction",n)}return o}
this.ontimeout=function(t,i){var n="ontimeout",o=false
if(typeof t==="function"){if(M){a._wD(at("queue",n))}if(!i){i=e}k(n,t,i)
E({type:n})
o=true}else{throw at("needFunction",n)}return o}
this._writeDebug=function(e,i){var n="soundmanager-debug",o,s
if(!a.debugMode){return false}if(Yt&&a.useConsole){if(i&&typeof i==="object"){console.log(e,i)}else if(Y[i]!==t){console[Y[i]](e)}else{console.log(e)}if(a.consoleOnly){return true}}o=d(n)
if(!o){return false}s=p.createElement("div")
if(++S%2===0){s.className="sm2-alt"}if(i===t){i=0}else{i=parseInt(i,10)}s.appendChild(p.createTextNode(e))
if(i){if(i>=2){s.style.fontWeight="bold"}if(i===3){s.style.color="#ff3333"}}o.insertBefore(s,o.firstChild)
o=null
return true}
if(c.indexOf("sm2-debug=alert")!==-1){this._writeDebug=function(t){e.alert(t)}}this._wD=this._writeDebug
this._debug=function(){var e,t
P("currentObj",1)
for(e=0,t=a.soundIDs.length;e<t;e++){a.sounds[a.soundIDs[e]]._debug()}}
this.reboot=function(t,i){if(a.soundIDs.length){a._wD("Destroying "+a.soundIDs.length+" SMSound object"+(a.soundIDs.length!==1?"s":"")+"...")}var n,o,s
for(n=a.soundIDs.length-1;n>=0;n--){a.sounds[a.soundIDs[n]].destruct()}if(l){try{if(Kt){ot=l.innerHTML}nt=l.parentNode.removeChild(l)}catch(u){P("badRemove",2)}}ot=nt=Mt=l=null
a.enabled=K=M=pt=mt=O=D=L=Et=a.swfLoaded=false
a.soundIDs=[]
a.sounds={}
qt=0
if(!t){for(n in w){if(w.hasOwnProperty(n)){for(o=0,s=w[n].length;o<s;o++){w[n][o].fired=false}}}}else{w=[]}if(!i){a._wD(r+": Rebooting...")}a.html5={usingFlash:null}
a.flash={}
a.html5Only=false
a.ignoreFlash=false
e.setTimeout(function(){q()
if(!i){a.beginDelayedInit()}},20)
return a}
this.reset=function(){P("reset")
return a.reboot(true,true)}
this.getMoviePercent=function(){return l&&"PercentLoaded"in l?l.PercentLoaded():null}
this.beginDelayedInit=function(){T=true
V()
setTimeout(function(){if(mt){return false}J()
j()
mt=true
return true},20)
x()}
this.destruct=function(){a._wD(r+".destruct()")
a.disable(true)}
o=function(e){var i=this,n,o,r,u,f,d,h=false,c=[],p=0,m,_,g=null,w,v
w={duration:null,time:null}
this.id=e.id
this.sID=this.id
this.url=e.url
this.options=I(e)
this.instanceOptions=this.options
this._iO=this.instanceOptions
this.pan=this.options.pan
this.volume=this.options.volume
this.isHTML5=false
this._a=null
v=this.url?false:true
this.id3={}
this._debug=function(){a._wD(i.id+": Merged options:",i.options)}
this.load=function(e){var n=null,o
if(e!==t){i._iO=I(e,i.options)}else{e=i.options
i._iO=e
if(g&&g!==i.url){P("manURL")
i._iO.url=i.url
i.url=null}}if(!i._iO.url){i._iO.url=i.url}i._iO.url=bt(i._iO.url)
i.instanceOptions=i._iO
o=i._iO
a._wD(i.id+": load ("+o.url+")")
if(!o.url&&!i.url){a._wD(i.id+": load(): url is unassigned. Exiting.",2)
return i}if(!i.isHTML5&&y===8&&!i.url&&!o.autoPlay){a._wD(i.id+": Flash 8 load() limitation: Wait for onload() before calling play().",1)}if(o.url===i.url&&i.readyState!==0&&i.readyState!==2){P("onURL",1)
if(i.readyState===3&&o.onload){jt(i,function(){o.onload.apply(i,[!!i.duration])})}return i}i.loaded=false
i.readyState=1
i.playState=0
i.id3={}
if(Tt(o)){n=i._setup_html5(o)
if(!n._called_load){i._html5_canplay=false
if(i.url!==o.url){a._wD(P("manURL")+": "+o.url)
i._a.src=o.url
i.setPosition(0)}i._a.autobuffer="auto"
i._a.preload="auto"
i._a._called_load=true}else{a._wD(i.id+": Ignoring request to load again")}}else{if(a.html5Only){a._wD(i.id+": No flash support. Exiting.")
return i}if(i._iO.url&&i._iO.url.match(/data\:/i)){a._wD(i.id+": data: URIs not supported via Flash. Exiting.")
return i}try{i.isHTML5=false
i._iO=dt(ft(o))
o=i._iO
if(y===8){l._load(i.id,o.url,o.stream,o.autoPlay,o.usePolicyFile)}else{l._load(i.id,o.url,!!o.stream,!!o.autoPlay,o.loops||1,!!o.autoLoad,o.usePolicyFile)}}catch(s){P("smError",2)
b("onload",false)
X({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:true})}}i.url=o.url
return i}
this.unload=function(){if(i.readyState!==0){a._wD(i.id+": unload()")
if(!i.isHTML5){if(y===8){l._unload(i.id,oi)}else{l._unload(i.id)}}else{u()
if(i._a){i._a.pause()
g=Ft(i._a)}}n()}return i}
this.destruct=function(e){a._wD(i.id+": Destruct")
if(!i.isHTML5){i._iO.onfailure=null
l._destroySound(i.id)}else{u()
if(i._a){i._a.pause()
Ft(i._a)
if(!Et){r()}i._a._s=null
i._a=null}}if(!e){a.destroySound(i.id,true)}}
this.play=function(e,n){var o,s,r,u,c,p,m,g=true,w=null
o=i.id+": play(): "
n=n===t?true:n
if(!e){e={}}if(i.url){i._iO.url=i.url}i._iO=I(i._iO,i.options)
i._iO=I(e,i._iO)
i._iO.url=bt(i._iO.url)
i.instanceOptions=i._iO
if(!i.isHTML5&&i._iO.serverURL&&!i.connected){if(!i.getAutoPlay()){a._wD(o+" Netstream not connected yet - setting autoPlay")
i.setAutoPlay(true)}return i}if(Tt(i._iO)){i._setup_html5(i._iO)
f()}if(i.playState===1&&!i.paused){s=i._iO.multiShot
if(!s){a._wD(o+"Already playing (one-shot)",1)
if(i.isHTML5){i.setPosition(i._iO.position)}w=i}else{a._wD(o+"Already playing (multi-shot)",1)}}if(w!==null){return w}if(e.url&&e.url!==i.url){if(!i.readyState&&!i.isHTML5&&y===8&&v){v=false}else{i.load(i._iO)}}if(!i.loaded){if(i.readyState===0){a._wD(o+"Attempting to load")
if(!i.isHTML5&&!a.html5Only){i._iO.autoPlay=true
i.load(i._iO)}else if(i.isHTML5){i.load(i._iO)}else{a._wD(o+"Unsupported type. Exiting.")
w=i}i.instanceOptions=i._iO}else if(i.readyState===2){a._wD(o+"Could not load - exiting",2)
w=i}else{a._wD(o+"Loading - attempting to play...")}}else{a._wD(o.substr(0,o.lastIndexOf(":")))}if(w!==null){return w}if(!i.isHTML5&&y===9&&i.position>0&&i.position===i.duration){a._wD(o+"Sound at end, resetting to position:0")
e.position=0}if(i.paused&&i.position>=0&&(!i._iO.serverURL||i.position>0)){a._wD(o+"Resuming from paused state",1)
i.resume()}else{i._iO=I(e,i._iO)
if(i._iO.from!==null&&i._iO.to!==null&&i.instanceCount===0&&i.playState===0&&!i._iO.serverURL){u=function(){i._iO=I(e,i._iO)
i.play(i._iO)}
if(i.isHTML5&&!i._html5_canplay){a._wD(o+"Beginning load for from/to case")
i.load({_oncanplay:u})
w=false}else if(!i.isHTML5&&!i.loaded&&(!i.readyState||i.readyState!==2)){a._wD(o+"Preloading for from/to case")
i.load({onload:u})
w=false}if(w!==null){return w}i._iO=_()}if(!i.instanceCount||i._iO.multiShotEvents||i.isHTML5&&i._iO.multiShot&&!Et||!i.isHTML5&&y>8&&!i.getAutoPlay()){i.instanceCount++}if(i._iO.onposition&&i.playState===0){d(i)}i.playState=1
i.paused=false
i.position=i._iO.position!==t&&!isNaN(i._iO.position)?i._iO.position:0
if(!i.isHTML5){i._iO=dt(ft(i._iO))}if(i._iO.onplay&&n){i._iO.onplay.apply(i)
h=true}i.setVolume(i._iO.volume,true)
i.setPan(i._iO.pan,true)
if(!i.isHTML5){g=l._start(i.id,i._iO.loops||1,y===9?i.position:i.position/ni,i._iO.multiShot||false)
if(y===9&&!g){a._wD(o+"No sound hardware, or 32-sound ceiling hit",2)
if(i._iO.onplayerror){i._iO.onplayerror.apply(i)}}}else{if(i.instanceCount<2){f()
r=i._setup_html5()
i.setPosition(i._iO.position)
r.play()}else{a._wD(i.id+": Cloning Audio() for instance #"+i.instanceCount+"...")
c=new Audio(i._iO.url)
p=function(){At.remove(c,"ended",p)
i._onfinish(i)
Ft(c)
c=null}
m=function(){At.remove(c,"canplay",m)
try{c.currentTime=i._iO.position/ni}catch(e){ht(i.id+": multiShot play() failed to apply position of "+i._iO.position/ni)}c.play()}
At.add(c,"ended",p)
if(i._iO.volume!==undefined){c.volume=Math.max(0,Math.min(1,i._iO.volume/100))}if(i.muted){c.muted=true}if(i._iO.position){At.add(c,"canplay",m)}else{c.play()}}}}return i}
this.start=this.play
this.stop=function(e){var t=i._iO,n
if(i.playState===1){a._wD(i.id+": stop()")
i._onbufferchange(0)
i._resetOnPosition(0)
i.paused=false
if(!i.isHTML5){i.playState=0}m()
if(t.to){i.clearOnPosition(t.to)}if(!i.isHTML5){l._stop(i.id,e)
if(t.serverURL){i.unload()}}else{if(i._a){n=i.position
i.setPosition(0)
i.position=n
i._a.pause()
i.playState=0
i._onTimer()
u()}}i.instanceCount=0
i._iO={}
if(t.onstop){t.onstop.apply(i)}}return i}
this.setAutoPlay=function(e){a._wD(i.id+": Autoplay turned "+(e?"on":"off"))
i._iO.autoPlay=e
if(!i.isHTML5){l._setAutoPlay(i.id,e)
if(e){if(!i.instanceCount&&i.readyState===1){i.instanceCount++
a._wD(i.id+": Incremented instance count to "+i.instanceCount)}}}}
this.getAutoPlay=function(){return i._iO.autoPlay}
this.setPosition=function(e){if(e===t){e=0}var n,o,s=i.isHTML5?Math.max(e,0):Math.min(i.duration||i._iO.duration,Math.max(e,0))
i.position=s
o=i.position/ni
i._resetOnPosition(i.position)
i._iO.position=s
if(!i.isHTML5){n=y===9?i.position:o
if(i.readyState&&i.readyState!==2){l._setPosition(i.id,n,i.paused||!i.playState,i._iO.multiShot)}}else if(i._a){if(i._html5_canplay){if(i._a.currentTime!==o){a._wD(i.id+": setPosition("+o+")")
try{i._a.currentTime=o
if(i.playState===0||i.paused){i._a.pause()}}catch(r){a._wD(i.id+": setPosition("+o+") failed: "+r.message,2)}}}else if(o){a._wD(i.id+": setPosition("+o+"): Cannot seek yet, sound not ready",2)
return i}if(i.paused){i._onTimer(true)}}return i}
this.pause=function(e){if(i.paused||i.playState===0&&i.readyState!==1){return i}a._wD(i.id+": pause()")
i.paused=true
if(!i.isHTML5){if(e||e===t){l._pause(i.id,i._iO.multiShot)}}else{i._setup_html5().pause()
u()}if(i._iO.onpause){i._iO.onpause.apply(i)}return i}
this.resume=function(){var e=i._iO
if(!i.paused){return i}a._wD(i.id+": resume()")
i.paused=false
i.playState=1
if(!i.isHTML5){if(e.isMovieStar&&!e.serverURL){i.setPosition(i.position)}l._pause(i.id,e.multiShot)}else{i._setup_html5().play()
f()}if(!h&&e.onplay){e.onplay.apply(i)
h=true}else if(e.onresume){e.onresume.apply(i)}return i}
this.togglePause=function(){a._wD(i.id+": togglePause()")
if(i.playState===0){i.play({position:y===9&&!i.isHTML5?i.position:i.position/ni})
return i}if(i.paused){i.resume()}else{i.pause()}return i}
this.setPan=function(e,n){if(e===t){e=0}if(n===t){n=false}if(!i.isHTML5){l._setPan(i.id,e)}i._iO.pan=e
if(!n){i.pan=e
i.options.pan=e}return i}
this.setVolume=function(e,n){if(e===t){e=100}if(n===t){n=false}if(!i.isHTML5){l._setVolume(i.id,a.muted&&!i.muted||i.muted?0:e)}else if(i._a){if(a.muted&&!i.muted){i.muted=true
i._a.muted=true}i._a.volume=Math.max(0,Math.min(1,e/100))}i._iO.volume=e
if(!n){i.volume=e
i.options.volume=e}return i}
this.mute=function(){i.muted=true
if(!i.isHTML5){l._setVolume(i.id,0)}else if(i._a){i._a.muted=true}return i}
this.unmute=function(){i.muted=false
var e=i._iO.volume!==t
if(!i.isHTML5){l._setVolume(i.id,e?i._iO.volume:i.options.volume)}else if(i._a){i._a.muted=false}return i}
this.toggleMute=function(){return i.muted?i.unmute():i.mute()}
this.onPosition=function(e,n,o){c.push({position:parseInt(e,10),method:n,scope:o!==t?o:i,fired:false})
return i}
this.onposition=this.onPosition
this.clearOnPosition=function(e,t){var i
e=parseInt(e,10)
if(isNaN(e)){return false}for(i=0;i<c.length;i++){if(e===c[i].position){if(!t||t===c[i].method){if(c[i].fired){p--}c.splice(i,1)}}}}
this._processOnPosition=function(){var e,t,n=c.length
if(!n||!i.playState||p>=n){return false}for(e=n-1;e>=0;e--){t=c[e]
if(!t.fired&&i.position>=t.position){t.fired=true
p++
t.method.apply(t.scope,[t.position])
n=c.length}}return true}
this._resetOnPosition=function(e){var t,i,n=c.length
if(!n){return false}for(t=n-1;t>=0;t--){i=c[t]
if(i.fired&&e<=i.position){i.fired=false
p--}}return true}
_=function(){var e=i._iO,t=e.from,n=e.to,o,s
s=function(){a._wD(i.id+': "To" time of '+n+" reached.")
i.clearOnPosition(n,s)
i.stop()}
o=function(){a._wD(i.id+': Playing "from" '+t)
if(n!==null&&!isNaN(n)){i.onPosition(n,s)}}
if(t!==null&&!isNaN(t)){e.position=t
e.multiShot=false
o()}return e}
d=function(){var e,t=i._iO.onposition
if(t){for(e in t){if(t.hasOwnProperty(e)){i.onPosition(parseInt(e,10),t[e])}}}}
m=function(){var e,t=i._iO.onposition
if(t){for(e in t){if(t.hasOwnProperty(e)){i.clearOnPosition(parseInt(e,10))}}}}
f=function(){if(i.isHTML5){_t(i)}}
u=function(){if(i.isHTML5){gt(i)}}
n=function(e){if(!e){c=[]
p=0}h=false
i._hasTimer=null
i._a=null
i._html5_canplay=false
i.bytesLoaded=null
i.bytesTotal=null
i.duration=i._iO&&i._iO.duration?i._iO.duration:null
i.durationEstimate=null
i.buffered=[]
i.eqData=[]
i.eqData.left=[]
i.eqData.right=[]
i.failures=0
i.isBuffering=false
i.instanceOptions={}
i.instanceCount=0
i.loaded=false
i.metadata={}
i.readyState=0
i.muted=false
i.paused=false
i.peakData={left:0,right:0}
i.waveformData={left:[],right:[]}
i.playState=0
i.position=null
i.id3={}}
n()
this._onTimer=function(e){var t,n=false,o,a={}
if(i._hasTimer||e){if(i._a&&(e||(i.playState>0||i.readyState===1)&&!i.paused)){t=i._get_html5_duration()
if(t!==w.duration){w.duration=t
i.duration=t
n=true}i.durationEstimate=i.duration
o=i._a.currentTime*ni||0
if(o!==w.time){w.time=o
n=true}if(n||e){i._whileplaying(o,a,a,a,a)}}return n}}
this._get_html5_duration=function(){var e=i._iO,t=i._a&&i._a.duration?i._a.duration*ni:e&&e.duration?e.duration:null,n=t&&!isNaN(t)&&t!==Infinity?t:null
return n}
this._apply_loop=function(e,t){if(!e.loop&&t>1){a._wD("Note: Native HTML5 looping is infinite.",1)}e.loop=t>1?"loop":""}
this._setup_html5=function(e){var t=I(i._iO,e),a=Et?s:i._a,l=decodeURI(t.url),r
if(Et){if(l===decodeURI(Ct)){r=true}}else if(l===decodeURI(g)){r=true}if(a){if(a._s){if(Et){if(a._s&&a._s.playState&&!r){a._s.stop()}}else if(!Et&&l===decodeURI(g)){i._apply_loop(a,t.loops)
return a}}if(!r){if(g){n(false)}a.src=t.url
i.url=t.url
g=t.url
Ct=t.url
a._called_load=false}}else{if(t.autoLoad||t.autoPlay){i._a=new Audio(t.url)
i._a.load()}else{i._a=Xt&&opera.version()<10?new Audio(null):new Audio}a=i._a
a._called_load=false
if(Et){s=a}}i.isHTML5=true
i._a=a
a._s=i
o()
i._apply_loop(a,t.loops)
if(t.autoLoad||t.autoPlay){i.load()}else{a.autobuffer=false
a.preload="auto"}return a}
o=function(){if(i._a._added_events){return false}var e
function t(e,t,n){return i._a?i._a.addEventListener(e,t,n||false):null}i._a._added_events=true
for(e in Ut){if(Ut.hasOwnProperty(e)){t(e,Ut[e])}}return true}
r=function(){var e
function t(e,t,n){return i._a?i._a.removeEventListener(e,t,n||false):null}a._wD(i.id+": Removing event listeners")
i._a._added_events=false
for(e in Ut){if(Ut.hasOwnProperty(e)){t(e,Ut[e])}}}
this._onload=function(e){var t,n=!!e||!i.isHTML5&&y===8&&i.duration
t=i.id+": "
a._wD(t+(n?"onload()":"Failed to load / invalid sound?"+(!i.duration?" Zero-length duration reported.":" -")+" ("+i.url+")"),n?1:2)
if(!n&&!i.isHTML5){if(a.sandbox.noRemote===true){a._wD(t+at("noNet"),1)}if(a.sandbox.noLocal===true){a._wD(t+at("noLocal"),1)}}i.loaded=n
i.readyState=n?3:2
i._onbufferchange(0)
if(i._iO.onload){jt(i,function(){i._iO.onload.apply(i,[n])})}return true}
this._onbufferchange=function(e){if(i.playState===0){return false}if(e&&i.isBuffering||!e&&!i.isBuffering){return false}i.isBuffering=e===1
if(i._iO.onbufferchange){a._wD(i.id+": Buffer state change: "+e)
i._iO.onbufferchange.apply(i)}return true}
this._onsuspend=function(){if(i._iO.onsuspend){a._wD(i.id+": Playback suspended")
i._iO.onsuspend.apply(i)}return true}
this._onfailure=function(e,t,n){i.failures++
a._wD(i.id+": Failures = "+i.failures)
if(i._iO.onfailure&&i.failures===1){i._iO.onfailure(i,e,t,n)}else{a._wD(i.id+": Ignoring failure")}}
this._onfinish=function(){var e=i._iO.onfinish
i._onbufferchange(0)
i._resetOnPosition(0)
if(i.instanceCount){i.instanceCount--
if(!i.instanceCount){m()
i.playState=0
i.paused=false
i.instanceCount=0
i.instanceOptions={}
i._iO={}
u()
if(i.isHTML5){i.position=0}}if(!i.instanceCount||i._iO.multiShotEvents){if(e){a._wD(i.id+": onfinish()")
jt(i,function(){e.apply(i)})}}}}
this._whileloading=function(e,t,n,o){var a=i._iO
i.bytesLoaded=e
i.bytesTotal=t
i.duration=Math.floor(n)
i.bufferLength=o
if(!i.isHTML5&&!a.isMovieStar){if(a.duration){i.durationEstimate=i.duration>a.duration?i.duration:a.duration}else{i.durationEstimate=parseInt(i.bytesTotal/i.bytesLoaded*i.duration,10)}}else{i.durationEstimate=i.duration}if(!i.isHTML5){i.buffered=[{start:0,end:i.duration}]}if((i.readyState!==3||i.isHTML5)&&a.whileloading){a.whileloading.apply(i)}}
this._whileplaying=function(e,n,o,a,s){var l=i._iO,r
if(isNaN(e)||e===null){return false}i.position=Math.max(0,e)
i._processOnPosition()
if(!i.isHTML5&&y>8){if(l.usePeakData&&n!==t&&n){i.peakData={left:n.leftPeak,right:n.rightPeak}}if(l.useWaveformData&&o!==t&&o){i.waveformData={left:o.split(","),right:a.split(",")}}if(l.useEQData){if(s!==t&&s&&s.leftEQ){r=s.leftEQ.split(",")
i.eqData=r
i.eqData.left=r
if(s.rightEQ!==t&&s.rightEQ){i.eqData.right=s.rightEQ.split(",")}}}}if(i.playState===1){if(!i.isHTML5&&y===8&&!i.position&&i.isBuffering){i._onbufferchange(0)}if(l.whileplaying){l.whileplaying.apply(i)}}return true}
this._oncaptiondata=function(e){a._wD(i.id+": Caption data received.")
i.captiondata=e
if(i._iO.oncaptiondata){i._iO.oncaptiondata.apply(i,[e])}}
this._onmetadata=function(e,t){a._wD(i.id+": Metadata received.")
var n={},o,s
for(o=0,s=e.length;o<s;o++){n[e[o]]=t[o]}i.metadata=n
if(i._iO.onmetadata){i._iO.onmetadata.apply(i)}}
this._onid3=function(e,t){a._wD(i.id+": ID3 data received.")
var n=[],o,s
for(o=0,s=e.length;o<s;o++){n[e[o]]=t[o]}i.id3=I(i.id3,n)
if(i._iO.onid3){i._iO.onid3.apply(i)}}
this._onconnect=function(e){e=e===1
a._wD(i.id+": "+(e?"Connected.":"Failed to connect? - "+i.url),e?1:2)
i.connected=e
if(e){i.failures=0
if(ct(i.id)){if(i.getAutoPlay()){i.play(t,i.getAutoPlay())}else if(i._iO.autoLoad){i.load()}}if(i._iO.onconnect){i._iO.onconnect.apply(i,[e])}}}
this._ondataerror=function(e){if(i.playState>0){a._wD(i.id+": Data error: "+e)
if(i._iO.ondataerror){i._iO.ondataerror.apply(i)}}}
this._debug()}
$=function(){return p.body||p.getElementsByTagName("div")[0]}
d=function(e){return p.getElementById(e)}
I=function(e,i){var n=e||{},o,s
o=i===t?a.defaultOptions:i
for(s in o){if(o.hasOwnProperty(s)&&n[s]===t){if(typeof o[s]!=="object"||o[s]===null){n[s]=o[s]}else{n[s]=I(n[s],o[s])}}}return n}
jt=function(t,i){if(!t.isHTML5&&y===8){e.setTimeout(i,0)}else{i()}}
A={onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1}
H=function(e,i){var n,o=true,s=i!==t,l=a.setupOptions,r=A
if(e===t){o=[]
for(n in l){if(l.hasOwnProperty(n)){o.push(n)}}for(n in r){if(r.hasOwnProperty(n)){if(typeof a[n]==="object"){o.push(n+": {...}")}else if(a[n]instanceof Function){o.push(n+": function() {...}")}else{o.push(n)}}}a._wD(at("setup",o.join(", ")))
return false}for(n in e){if(e.hasOwnProperty(n)){if(typeof e[n]!=="object"||e[n]===null||e[n]instanceof Array||e[n]instanceof RegExp){if(s&&r[i]!==t){a[i][n]=e[n]}else if(l[n]!==t){a.setupOptions[n]=e[n]
a[n]=e[n]}else if(r[n]===t){ht(at(a[n]===t?"setupUndef":"setupError",n),2)
o=false}else{if(a[n]instanceof Function){a[n].apply(a,e[n]instanceof Array?e[n]:[e[n]])}else{a[n]=e[n]}}}else{if(r[n]===t){ht(at(a[n]===t?"setupUndef":"setupError",n),2)
o=false}else{return H(e[n],n)}}}}return o}
function di(e){return a.preferFlash&&xt&&!a.ignoreFlash&&(a.flash[e]!==t&&a.flash[e])}At=function(){var t=e.attachEvent,i={add:t?"attachEvent":"addEventListener",remove:t?"detachEvent":"removeEventListener"}
function n(e){var i=kt.call(e),n=i.length
if(t){i[1]="on"+i[1]
if(n>3){i.pop()}}else if(n===3){i.push(false)}return i}function o(e,n){var o=e.shift(),a=[i[n]]
if(t){o[a](e[0],e[1])}else{o[a].apply(o,e)}}function a(){o(n(arguments),"add")}function s(){o(n(arguments),"remove")}return{add:a,remove:s}}()
function hi(e){return function(t){var i=this._s,n
if(!i||!i._a){if(i&&i.id){a._wD(i.id+": Ignoring "+t.type)}else{a._wD(f+"Ignoring "+t.type)}n=null}else{n=e.call(this,t)}return n}}Ut={abort:hi(function(){a._wD(this._s.id+": abort")}),canplay:hi(function(){var e=this._s,i
if(e._html5_canplay){return true}e._html5_canplay=true
a._wD(e.id+": canplay")
e._onbufferchange(0)
i=e._iO.position!==t&&!isNaN(e._iO.position)?e._iO.position/ni:null
if(e.position&&this.currentTime!==i){a._wD(e.id+": canplay: Setting position to "+i)
try{this.currentTime=i}catch(n){a._wD(e.id+": canplay: Setting position of "+i+" failed: "+n.message,2)}}if(e._iO._oncanplay){e._iO._oncanplay()}}),canplaythrough:hi(function(){var e=this._s
if(!e.loaded){e._onbufferchange(0)
e._whileloading(e.bytesLoaded,e.bytesTotal,e._get_html5_duration())
e._onload(true)}}),ended:hi(function(){var e=this._s
a._wD(e.id+": ended")
e._onfinish()}),error:hi(function(){a._wD(this._s.id+": HTML5 error, code "+this.error.code)
this._s._onload(false)}),loadeddata:hi(function(){var e=this._s
a._wD(e.id+": loadeddata")
if(!e._loaded&&!Jt){e.duration=e._get_html5_duration()}}),loadedmetadata:hi(function(){a._wD(this._s.id+": loadedmetadata")}),loadstart:hi(function(){a._wD(this._s.id+": loadstart")
this._s._onbufferchange(1)}),play:hi(function(){this._s._onbufferchange(0)}),playing:hi(function(){a._wD(this._s.id+": playing")
this._s._onbufferchange(0)}),progress:hi(function(e){var t=this._s,i,n,o,s=0,l=e.type==="progress",r=e.target.buffered,u=e.loaded||0,f=e.total||1
t.buffered=[]
if(r&&r.length){for(i=0,n=r.length;i<n;i++){t.buffered.push({start:r.start(i)*ni,end:r.end(i)*ni})}s=(r.end(0)-r.start(0))*ni
u=Math.min(1,s/(e.target.duration*ni))
if(l&&r.length>1){o=[]
n=r.length
for(i=0;i<n;i++){o.push(e.target.buffered.start(i)*ni+"-"+e.target.buffered.end(i)*ni)}a._wD(this._s.id+": progress, timeRanges: "+o.join(", "))}if(l&&!isNaN(u)){a._wD(this._s.id+": progress, "+Math.floor(u*100)+"% loaded")}}if(!isNaN(u)){t._onbufferchange(0)
t._whileloading(u,f,t._get_html5_duration())
if(u&&f&&u===f){Ut.canplaythrough.call(this,e)}}}),ratechange:hi(function(){a._wD(this._s.id+": ratechange")}),suspend:hi(function(e){var t=this._s
a._wD(this._s.id+": suspend")
Ut.progress.call(this,e)
t._onsuspend()}),stalled:hi(function(){a._wD(this._s.id+": stalled")}),timeupdate:hi(function(){this._s._onTimer()}),waiting:hi(function(){var e=this._s
a._wD(this._s.id+": waiting")
e._onbufferchange(1)})}
Tt=function(e){var t
if(!e||!e.type&&!e.url&&!e.serverURL){t=false}else if(e.serverURL||e.type&&di(e.type)){t=false}else{t=e.type?Pt({type:e.type}):Pt({url:e.url})||a.html5Only||e.url.match(/data\:/i)}return t}
Ft=function(e){var t
if(e){t=Jt?oi:a.html5.canPlayType("audio/wav")?ai:oi
e.src=t
if(e._called_unload!==undefined){e._called_load=false}}if(Et){Ct=null}return t}
Pt=function(e){if(!a.useHTML5Audio||!a.hasHTML5){return false}var i=e.url||null,n=e.type||null,o=a.audioFormats,s,l,r,u
if(n&&a.html5[n]!==t){return a.html5[n]&&!di(n)}if(!St){St=[]
for(u in o){if(o.hasOwnProperty(u)){St.push(u)
if(o[u].related){St=St.concat(o[u].related)}}}St=new RegExp("\\.("+St.join("|")+")(\\?.*)?$","i")}r=i?i.toLowerCase().match(St):null
if(!r||!r.length){if(!n){s=false}else{l=n.indexOf(";")
r=(l!==-1?n.substr(0,l):n).substr(6)}}else{r=r[1]}if(r&&a.html5[r]!==t){s=a.html5[r]&&!di(r)}else{n="audio/"+r
s=a.html5.canPlayType({type:n})
a.html5[r]=s
s=s&&a.html5[n]&&!di(n)}return s}
Ht=function(){if(!a.useHTML5Audio||!a.hasHTML5){a.html5.usingFlash=true
Mt=true
return false}var e=Audio!==t?Xt&&opera.version()<10?new Audio(null):new Audio:null,i,n,o={},s,l
function r(t){var i,n,o=false,s=false
if(!e||typeof e.canPlayType!=="function"){return o}if(t instanceof Array){for(l=0,n=t.length;l<n;l++){if(a.html5[t[l]]||e.canPlayType(t[l]).match(a.html5Test)){s=true
a.html5[t[l]]=true
a.flash[t[l]]=!!t[l].match(ii)}}o=s}else{i=e&&typeof e.canPlayType==="function"?e.canPlayType(t):false
o=!!(i&&i.match(a.html5Test))}return o}s=a.audioFormats
for(i in s){if(s.hasOwnProperty(i)){n="audio/"+i
o[i]=r(s[i].type)
o[n]=o[i]
if(i.match(ii)){a.flash[i]=true
a.flash[n]=true}else{a.flash[i]=false
a.flash[n]=false}if(s[i]&&s[i].related){for(l=s[i].related.length-1;l>=0;l--){o["audio/"+s[i].related[l]]=o[i]
a.html5[s[i].related[l]]=o[i]
a.flash[s[i].related[l]]=o[i]}}}}o.canPlayType=e?r:null
a.html5=I(a.html5,o)
a.html5.usingFlash=Lt()
Mt=a.html5.usingFlash
return true}
W={notReady:"Unavailable - wait until onready() has fired.",notOK:"Audio support is not available.",domError:r+"exception caught while appending SWF to DOM.",spcWmode:"Removing wmode, preventing known SWF loading issue(s)",swf404:u+"Verify that %s is a valid path.",tryDebug:"Try "+r+".debugFlash = true for more security details (output goes to SWF.)",checkSWF:"See SWF output for more debug info.",localFail:u+"Non-HTTP page ("+p.location.protocol+" URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/",waitFocus:u+"Special case: Waiting for SWF to load with window focus...",waitForever:u+"Waiting indefinitely for Flash (will recover if unblocked)...",waitSWF:u+"Waiting for 100% SWF load...",needFunction:u+"Function object expected for %s",badID:'Sound ID "%s" should be a string, starting with a non-numeric character',currentObj:u+"_debug(): Current sound objects",waitOnload:u+"Waiting for window.onload()",docLoaded:u+"Document already loaded",onload:u+"initComplete(): calling soundManager.onload()",onloadOK:r+".onload() complete",didInit:u+"init(): Already called?",secNote:"Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html",badRemove:u+"Failed to remove Flash node.",shutdown:r+".disable(): Shutting down",queue:u+"Queueing %s handler",smError:"SMSound.load(): Exception: JS-Flash communication failed, or JS error.",fbTimeout:"No flash response, applying ."+rt.swfTimedout+" CSS...",fbLoaded:"Flash loaded",fbHandler:u+"flashBlockHandler()",manURL:"SMSound.load(): Using manually-assigned URL",onURL:r+".load(): current URL already assigned.",badFV:r+'.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',as2loop:"Note: Setting stream:false so looping can work (flash 8 limitation)",noNSLoop:"Note: Looping not implemented for MovieStar formats",needfl9:"Note: Switching to flash 9, required for MP4 formats.",mfTimeout:"Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case",needFlash:u+"Fatal error: Flash is needed to play some required formats, but is not available.",gotFocus:u+"Got window focus.",policy:"Enabling usePolicyFile for data access",setup:r+".setup(): allowed parameters: %s",setupError:r+'.setup(): "%s" cannot be assigned with this method.',setupUndef:r+'.setup(): Could not find option "%s"',setupLate:r+".setup(): url, flashVersion and html5Test property changes will not take effect until reboot().",noURL:u+"Flash URL required. Call soundManager.setup({url:...}) to get started.",sm2Loaded:"SoundManager 2: Ready.",reset:r+".reset(): Removing event callbacks",mobileUA:"Mobile UA detected, preferring HTML5 by default.",globalHTML5:"Using singleton HTML5 Audio() pattern for this device."}
at=function(){var e,t,i,n,o
e=kt.call(arguments)
n=e.shift()
o=W&&W[n]?W[n]:""
if(o&&e&&e.length){for(t=0,i=e.length;t<i;t++){o=o.replace("%s",e[t])}}return o}
ft=function(e){if(y===8&&e.loops>1&&e.stream){P("as2loop")
e.stream=false}return e}
dt=function(e,t){if(e&&!e.usePolicyFile&&(e.onid3||e.usePeakData||e.useWaveformData||e.useEQData)){a._wD((t||"")+at("policy"))
e.usePolicyFile=true}return e}
ht=function(e){if(Yt&&console.warn!==t){console.warn(e)}else{a._wD(e)}}
m=function(){return false}
et=function(e){var t
for(t in e){if(e.hasOwnProperty(t)&&typeof e[t]==="function"){e[t]=m}}t=null}
tt=function(e){if(e===t){e=false}if(L||e){a.disable(e)}}
it=function(e){var t=null,i
if(e){if(e.match(/\.swf(\?.*)?$/i)){t=e.substr(e.toLowerCase().lastIndexOf(".swf?")+4)
if(t){return e}}else if(e.lastIndexOf("/")!==e.length-1){e+="/"}}i=(e&&e.lastIndexOf("/")!==-1?e.substr(0,e.lastIndexOf("/")+1):"./")+a.movieURL
if(a.noSWFCache){i+="?ts="+(new Date).getTime()}return i}
U=function(){y=parseInt(a.flashVersion,10)
if(y!==8&&y!==9){a._wD(at("badFV",y,z))
a.flashVersion=y=z}var e=a.debugMode||a.debugFlash?"_debug.swf":".swf"
if(a.useHTML5Audio&&!a.html5Only&&a.audioFormats.mp4.required&&y<9){a._wD(at("needfl9"))
a.flashVersion=y=9}a.version=a.versionNumber+(a.html5Only?" (HTML5-only mode)":y===9?" (AS3/Flash 9)":" (AS2/Flash 8)")
if(y>8){a.defaultOptions=I(a.defaultOptions,a.flash9Options)
a.features.buffering=true
a.defaultOptions=I(a.defaultOptions,a.movieStarOptions)
a.filePatterns.flash9=new RegExp("\\.(mp3|"+ui.join("|")+")(\\?.*)?$","i")
a.features.movieStar=true}else{a.features.movieStar=false}a.filePattern=a.filePatterns[y!==8?"flash9":"flash8"]
a.movieURL=(y===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",e)
a.features.peakData=a.features.waveformData=a.features.eqData=y>8}
G=function(e,t){if(!l){return false}l._setPolling(e,t)}
Z=function(){if(a.debugURLParam.test(c)){a.debugMode=true}if(d(a.debugID)){return false}var e,t,i,n,o
if(a.debugMode&&!d(a.debugID)&&(!Yt||!a.useConsole||!a.consoleOnly)){e=p.createElement("div")
e.id=a.debugID+"-toggle"
n={position:"fixed",bottom:"0px",right:"0px",width:"1.2em",height:"1.2em",lineHeight:"1.2em",margin:"2px",textAlign:"center",border:"1px solid #999",cursor:"pointer",background:"#fff",color:"#333",zIndex:10001}
e.appendChild(p.createTextNode("-"))
e.onclick=ut
e.title="Toggle SM2 debug console"
if(h.match(/msie 6/i)){e.style.position="absolute"
e.style.cursor="hand"}for(o in n){if(n.hasOwnProperty(o)){e.style[o]=n[o]}}t=p.createElement("div")
t.id=a.debugID
t.style.display=a.debugMode?"block":"none"
if(a.debugMode&&!d(e.id)){try{i=$()
i.appendChild(e)}catch(s){throw new Error(at("domError")+" \n"+s.toString())}i.appendChild(t)}}i=null}
ct=this.getSoundById
P=function(e,t){return!e?"":a._wD(at(e),t)}
ut=function(){var e=d(a.debugID),t=d(a.debugID+"-toggle")
if(!e){return false}if(v){t.innerHTML="+"
e.style.display="none"}else{t.innerHTML="-"
e.style.display="block"}v=!v}
b=function(i,n,o){if(e.sm2Debugger!==t){try{sm2Debugger.handleEvent(i,n,o)}catch(a){return false}}return true}
lt=function(){var e=[]
if(a.debugMode){e.push(rt.sm2Debug)}if(a.debugFlash){e.push(rt.flashDebug)}if(a.useHighPerformance){e.push(rt.highPerf)}return e.join(" ")}
st=function(){var e=at("fbHandler"),t=a.getMoviePercent(),i=rt,n={type:"FLASHBLOCK"}
if(a.html5Only){return false}if(!a.ok()){if(Mt){a.oMC.className=lt()+" "+i.swfDefault+" "+(t===null?i.swfTimedout:i.swfError)
a._wD(e+": "+at("fbTimeout")+(t?" ("+at("fbLoaded")+")":""))}a.didFlashBlock=true
E({type:"ontimeout",ignoreInit:true,error:n})
X(n)}else{if(a.didFlashBlock){a._wD(e+": Unblocked")}if(a.oMC){a.oMC.className=[lt(),i.swfDefault,i.swfLoaded+(a.didFlashBlock?" "+i.swfUnblocked:"")].join(" ")}}}
k=function(e,i,n){if(w[e]===t){w[e]=[]}w[e].push({method:i,scope:n||null,fired:false})}
E=function(e){if(!e){e={type:a.ok()?"onready":"ontimeout"}}if(!M&&e&&!e.ignoreInit){return false}if(e.type==="ontimeout"&&(a.ok()||L&&!e.ignoreInit)){return false}var t={success:e&&e.ignoreInit?a.ok():!L},i=e&&e.type?w[e.type]||[]:[],n=[],o,s,l=[t],r=Mt&&!a.ok()
if(e.error){l[0].error=e.error}for(o=0,s=i.length;o<s;o++){if(i[o].fired!==true){n.push(i[o])}}if(n.length){for(o=0,s=n.length;o<s;o++){if(n[o].scope){n[o].method.apply(n[o].scope,l)}else{n[o].method.apply(this,l)}if(!r){n[o].fired=true}}}return true}
C=function(){e.setTimeout(function(){if(a.useFlashBlock){st()}E()
if(typeof a.onload==="function"){P("onload",1)
a.onload.apply(e)
P("onloadOK",1)}if(a.waitForWindowLoad){At.add(e,"load",C)}},1)}
Rt=function(){if(xt!==t){return xt}var i=false,n=navigator,o=n.plugins,a,s,l,r=e.ActiveXObject
if(o&&o.length){s="application/x-shockwave-flash"
l=n.mimeTypes
if(l&&l[s]&&l[s].enabledPlugin&&l[s].enabledPlugin.description){i=true}}else if(r!==t&&!h.match(/MSAppHost/i)){try{a=new r("ShockwaveFlash.ShockwaveFlash")}catch(u){a=null}i=!!a
a=null}xt=i
return i}
Lt=function(){var e,t,i=a.audioFormats,n=Vt&&!!h.match(/os (1|2|3_0|3_1)/i)
if(n){a.hasHTML5=false
a.html5Only=true
if(a.oMC){a.oMC.style.display="none"}}else{if(a.useHTML5Audio){if(!a.html5||!a.html5.canPlayType){a._wD("SoundManager: No HTML5 Audio() support detected.")
a.hasHTML5=false}if(Zt){a._wD(u+"Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - "+(!xt?" would use flash fallback for MP3/MP4, but none detected.":"will use flash fallback for MP3/MP4, if available"),1)}}}if(a.useHTML5Audio&&a.hasHTML5){Dt=true
for(t in i){if(i.hasOwnProperty(t)){if(i[t].required){if(!a.html5.canPlayType(i[t].type)){Dt=false
e=true}else if(a.preferFlash&&(a.flash[t]||a.flash[i[t].type])){e=true}}}}}if(a.ignoreFlash){e=false
Dt=true}a.html5Only=a.hasHTML5&&a.useHTML5Audio&&!e
return!a.html5Only}
bt=function(e){var t,i,n=0,o
if(e instanceof Array){for(t=0,i=e.length;t<i;t++){if(e[t]instanceof Object){if(a.canPlayMIME(e[t].type)){n=t
break}}else if(a.canPlayURL(e[t])){n=t
break}}if(e[n].url){e[n]=e[n].url}o=e[n]}else{o=e}return o}
_t=function(e){if(!e._hasTimer){e._hasTimer=true
if(!Gt&&a.html5PollingInterval){if(vt===null&&wt===0){vt=setInterval(yt,a.html5PollingInterval)}wt++}}}
gt=function(e){if(e._hasTimer){e._hasTimer=false
if(!Gt&&a.html5PollingInterval){wt--}}}
yt=function(){var e
if(vt!==null&&!wt){clearInterval(vt)
vt=null
return false}for(e=a.soundIDs.length-1;e>=0;e--){if(a.sounds[a.soundIDs[e]].isHTML5&&a.sounds[a.soundIDs[e]]._hasTimer){a.sounds[a.soundIDs[e]]._onTimer()}}}
X=function(i){i=i!==t?i:{}
if(typeof a.onerror==="function"){a.onerror.apply(e,[{type:i.type!==t?i.type:null}])}if(i.fatal!==t&&i.fatal){a.disable()}}
Nt=function(){if(!Zt||!Rt()){return false}var e=a.audioFormats,t,i
for(i in e){if(e.hasOwnProperty(i)){if(i==="mp3"||i==="mp4"){a._wD(r+": Using flash fallback for "+i+" format")
a.html5[i]=false
if(e[i]&&e[i].related){for(t=e[i].related.length-1;t>=0;t--){a.html5[e[i].related[t]]=false}}}}}}
this._setSandboxType=function(e){var i=a.sandbox
i.type=e
i.description=i.types[i.types[e]!==t?e:"unknown"]
if(i.type==="localWithFile"){i.noRemote=true
i.noLocal=false
P("secNote",2)}else if(i.type==="localWithNetwork"){i.noRemote=false
i.noLocal=true}else if(i.type==="localTrusted"){i.noRemote=false
i.noLocal=false}}
this._externalInterfaceOK=function(e){if(a.swfLoaded){return false}var t
b("swf",true)
b("flashtojs",true)
a.swfLoaded=true
ei=false
if(Zt){Nt()}if(!e||e.replace(/\+dev/i,"")!==a.versionNumber.replace(/\+dev/i,"")){t=r+': Fatal: JavaScript file build "'+a.versionNumber+'" does not match Flash SWF build "'+e+'" at '+a.url+". Ensure both are up-to-date."
setTimeout(function i(){throw new Error(t)},0)
return false}setTimeout(g,Kt?100:1)}
J=function(e,i){if(O&&D){return false}function n(){var e=[],t,i=[],n=" + "
t="SoundManager "+a.version+(!a.html5Only&&a.useHTML5Audio?a.hasHTML5?" + HTML5 audio":", no HTML5 audio support":"")
if(!a.html5Only){if(a.preferFlash){e.push("preferFlash")}if(a.useHighPerformance){e.push("useHighPerformance")}if(a.flashPollingInterval){e.push("flashPollingInterval ("+a.flashPollingInterval+"ms)")}if(a.html5PollingInterval){e.push("html5PollingInterval ("+a.html5PollingInterval+"ms)")}if(a.wmode){e.push("wmode ("+a.wmode+")")}if(a.debugFlash){e.push("debugFlash")}if(a.useFlashBlock){e.push("flashBlock")}}else{if(a.html5PollingInterval){e.push("html5PollingInterval ("+a.html5PollingInterval+"ms)")}}if(e.length){i=i.concat([e.join(n)])}a._wD(t+(i.length?n+i.join(", "):""),1)
Bt()}if(a.html5Only){U()
n()
a.oMC=d(a.movieID)
g()
O=true
D=true
return false}var o=i||a.url,s=a.altURL||o,l="JS/Flash audio component (SoundManager 2)",r=$(),u=lt(),f=null,c=p.getElementsByTagName("html")[0],m,_,y,w,v,b,M,L
f=c&&c.dir&&c.dir.match(/rtl/i)
e=e===t?a.id:e
function T(e,t){return'<param name="'+e+'" value="'+t+'" />'}U()
a.url=it(si?o:s)
i=a.url
a.wmode=!a.wmode&&a.useHighPerformance?"transparent":a.wmode
if(a.wmode!==null&&(h.match(/msie 8/i)||!Kt&&!a.useHighPerformance)&&navigator.platform.match(/win32|win64/i)){Ot.push(W.spcWmode)
a.wmode=null}m={name:e,id:e,src:i,quality:"high",allowScriptAccess:a.allowScriptAccess,bgcolor:a.bgColor,pluginspage:li+"www.macromedia.com/go/getflashplayer",title:l,type:"application/x-shockwave-flash",wmode:a.wmode,hasPriority:"true"}
if(a.debugFlash){m.FlashVars="debug=1"}if(!a.wmode){delete m.wmode}if(Kt){_=p.createElement("div")
w=['<object id="'+e+'" data="'+i+'" type="'+m.type+'" title="'+m.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+li+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',T("movie",i),T("AllowScriptAccess",a.allowScriptAccess),T("quality",m.quality),a.wmode?T("wmode",a.wmode):"",T("bgcolor",a.bgColor),T("hasPriority","true"),a.debugFlash?T("FlashVars",m.FlashVars):"","</object>"].join("")}else{_=p.createElement("embed")
for(y in m){if(m.hasOwnProperty(y)){_.setAttribute(y,m[y])}}}Z()
u=lt()
r=$()
if(r){a.oMC=d(a.movieID)||p.createElement("div")
if(!a.oMC.id){a.oMC.id=a.movieID
a.oMC.className=rt.swfDefault+" "+u
b=null
v=null
if(!a.useFlashBlock){if(a.useHighPerformance){b={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"}}else{b={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"}
if(f){b.left=Math.abs(parseInt(b.left,10))+"px"}}}if($t){a.oMC.style.zIndex=1e4}if(!a.debugFlash){for(M in b){if(b.hasOwnProperty(M)){a.oMC.style[M]=b[M]}}}try{if(!Kt){a.oMC.appendChild(_)}r.appendChild(a.oMC)
if(Kt){v=a.oMC.appendChild(p.createElement("div"))
v.className=rt.swfBox
v.innerHTML=w}D=true}catch(P){throw new Error(at("domError")+" \n"+P.toString())}}else{L=a.oMC.className
a.oMC.className=(L?L+" ":rt.swfDefault)+(u?" "+u:"")
a.oMC.appendChild(_)
if(Kt){v=a.oMC.appendChild(p.createElement("div"))
v.className=rt.swfBox
v.innerHTML=w}D=true}}O=true
n()
return true}
j=function(){if(a.html5Only){J()
return false}if(l){return false}if(!a.url){P("noURL")
return false}l=a.getMovie(a.id)
if(!l){if(!nt){J(a.id,a.url)}else{if(!Kt){a.oMC.appendChild(nt)}else{a.oMC.innerHTML=ot}nt=null
O=true}l=a.getMovie(a.id)}if(typeof a.oninitmovie==="function"){setTimeout(a.oninitmovie,1)}Wt()
return true}
x=function(){setTimeout(R,1e3)}
N=function(){e.setTimeout(function(){ht(u+"useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...")
a.setup({preferFlash:false}).reboot()
a.didFlashBlock=true
a.beginDelayedInit()},1)}
R=function(){var t,i=false
if(!a.url){return false}if(pt){return false}pt=true
At.remove(e,"load",x)
if(xt&&ei&&!zt){P("waitFocus")
return false}if(!M){t=a.getMoviePercent()
if(t>0&&t<100){i=true}}setTimeout(function(){t=a.getMoviePercent()
if(i){pt=false
a._wD(at("waitSWF"))
e.setTimeout(x,1)
return false}if(!M){a._wD(r+": No Flash response within expected time. Likely causes: "+(t===0?"SWF load failed, ":"")+"Flash blocked or JS-Flash security error."+(a.debugFlash?" "+at("checkSWF"):""),2)
if(!si&&t){P("localFail",2)
if(!a.debugFlash){P("tryDebug",2)}}if(t===0){a._wD(at("swf404",a.url),1)}b("flashtojs",false,": Timed out"+si?" (Check flash security or flash blockers)":" (No plugin/missing SWF?)")}if(!M&&ti){if(t===null){if(a.useFlashBlock||a.flashLoadTimeout===0){if(a.useFlashBlock){st()}P("waitForever")}else{if(!a.useFlashBlock&&Dt){N()}else{P("waitForever")
E({type:"ontimeout",ignoreInit:true,error:{type:"INIT_FLASHBLOCK"}})}}}else{if(a.flashLoadTimeout===0){P("waitForever")}else{if(!a.useFlashBlock&&Dt){N()}else{tt(true)}}}}},a.flashLoadTimeout)}
B=function(){function t(){At.remove(e,"focus",B)}if(zt||!ei){t()
return true}ti=true
zt=true
P("gotFocus")
pt=false
x()
t()
return true}
Wt=function(){if(Ot.length){a._wD("SoundManager 2: "+Ot.join(" "),1)
Ot=[]}}
Bt=function(){Wt()
var e,t=[]
if(a.useHTML5Audio&&a.hasHTML5){for(e in a.audioFormats){if(a.audioFormats.hasOwnProperty(e)){t.push(e+" = "+a.html5[e]+(!a.html5[e]&&Mt&&a.flash[e]?" (using flash)":a.preferFlash&&a.flash[e]&&Mt?" (preferring flash)":!a.html5[e]?" ("+(a.audioFormats[e].required?"required, ":"")+"and no flash support)":""))}}a._wD("SoundManager 2 HTML5 support: "+t.join(", "),1)}}
F=function(t){if(M){return false}if(a.html5Only){P("sm2Loaded")
M=true
C()
b("onload",true)
return true}var i=a.useFlashBlock&&a.flashLoadTimeout&&!a.getMoviePercent(),n=true,o
if(!i){M=true}o={type:!xt&&Mt?"NO_FLASH":"INIT_TIMEOUT"}
a._wD("SoundManager 2 "+(L?"failed to load":"loaded")+" ("+(L?"Flash security/load error":"OK")+")",L?2:1)
if(L||t){if(a.useFlashBlock&&a.oMC){a.oMC.className=lt()+" "+(a.getMoviePercent()===null?rt.swfTimedout:rt.swfError)}E({type:"ontimeout",error:o,ignoreInit:true})
b("onload",false)
X(o)
n=false}else{b("onload",true)}if(!L){if(a.waitForWindowLoad&&!T){P("waitOnload")
At.add(e,"load",C)}else{if(a.waitForWindowLoad&&T){P("docLoaded")}C()}}return n}
_=function(){var e,i=a.setupOptions
for(e in i){if(i.hasOwnProperty(e)){if(a[e]===t){a[e]=i[e]}else if(a[e]!==i[e]){a.setupOptions[e]=a[e]}}}}
g=function(){if(M){P("didInit")
return false}function t(){At.remove(e,"load",a.beginDelayedInit)}if(a.html5Only){if(!M){t()
a.enabled=true
F()}return true}j()
try{l._externalInterfaceTest(false)
G(true,a.flashPollingInterval||(a.useHighPerformance?10:50))
if(!a.debugMode){l._disableDebug()}a.enabled=true
b("jstoflash",true)
if(!a.html5Only){At.add(e,"unload",m)}}catch(i){a._wD("js/flash exception: "+i.toString())
b("jstoflash",false)
X({type:"JS_TO_FLASH_EXCEPTION",fatal:true})
tt(true)
F()
return false}F()
t()
return true}
V=function(){if(K){return false}K=true
_()
Z();(function(){var e="sm2-usehtml5audio=",t="sm2-preferflash=",i=null,n=null,o=c.toLowerCase()
if(o.indexOf(e)!==-1){i=o.charAt(o.indexOf(e)+e.length)==="1"
if(Yt){console.log((i?"Enabling ":"Disabling ")+"useHTML5Audio via URL parameter")}a.setup({useHTML5Audio:i})}if(o.indexOf(t)!==-1){n=o.charAt(o.indexOf(t)+t.length)==="1"
if(Yt){console.log((n?"Enabling ":"Disabling ")+"preferFlash via URL parameter")}a.setup({preferFlash:n})}})()
if(!xt&&a.hasHTML5){a._wD("SoundManager 2: No Flash detected"+(!a.useHTML5Audio?", enabling HTML5.":". Trying HTML5-only mode."),1)
a.setup({useHTML5Audio:true,preferFlash:false})}Ht()
if(!xt&&Mt){Ot.push(W.needFlash)
a.setup({flashLoadTimeout:1})}if(p.removeEventListener){p.removeEventListener("DOMContentLoaded",V,false)}j()
return true}
It=function(){if(p.readyState==="complete"){V()
p.detachEvent("onreadystatechange",It)}return true}
Q=function(){T=true
At.remove(e,"load",Q)}
q=function(){if(Gt){if(!a.setupOptions.useHTML5Audio||a.setupOptions.preferFlash){Ot.push(W.mobileUA)}a.setupOptions.useHTML5Audio=true
a.setupOptions.preferFlash=false
if(Vt||Qt&&!h.match(/android\s2\.3/i)){Ot.push(W.globalHTML5)
if(Vt){a.ignoreFlash=true}Et=true}}}
q()
Rt()}if(e.SM2_DEFER===undefined||!SM2_DEFER){i=new n}e.SoundManager=n
e.soundManager=i})(window)
KAdefine("third_party/javascript-khansrc/SoundManager2/soundmanager2.js", function(require, requireWithVars, module, exports) {
    exports.soundManager = soundManager;
    exports.SoundManager = SoundManager;
});
(function(e){var t="./multirecorder-worker.js"
var n=function(n,r){var o=r||{}
var i=o.bufferLen||4096
this.context=n.context
this.pausePoints=[]
this.node=this.context.createJavaScriptNode(i,2,2)
var a=new Worker(o.workerPath||t)
a.postMessage({command:"init",config:{sampleRate:this.context.sampleRate}})
var c=false
function s(t){if(!t){throw new Error("Callback not set")}var n="RecorderCallback"+Math.round(Math.random()*1000001)
e[n]=function(r){t(r)
delete e[n]}
return n}function u(e,t){if(t){e.callbackId=s(t)}a.postMessage(e)}this.node.onaudioprocess=function(e){if(!c){return}u({command:"record",buffer:[e.inputBuffer.getChannelData(0),e.inputBuffer.getChannelData(1)]})}
this.configure=function(e){for(var t in e){if(e.hasOwnProperty(t)){o[t]=e[t]}}}
this.record=function(){c=true}
this.stop=function(){c=false}
this.isRecording=function(){return c}
this.clear=function(){u({command:"clear"})}
this.finishRecording=function(e){var t=this
var n=function(n){t.wav=n.wav
t.samples=n.samples
e(t)}
u({command:"finishRecording"},n)}
this.combineRecordings=function(e,t){var n=this
var r=[]
for(var o=0;o<t.length;o++){r.push(t[o].samples)}var i=function(t){n.wav=t.wav
n.samples=t.samples
e(n)}
u({command:"combineRecordings",samples:r},i)}
this.createAudioPlayer=function(){var e=URL.createObjectURL(this.wav)
var t=document.createElement("audio")
t.controls=true
t.src=e
return t}
this.createDownloadLink=function(){var e=URL.createObjectURL(this.wav)
var t=document.createElement("a")
t.href=e
t.download=(new Date).toISOString()+".wav"
t.innerHTML=t.download
return t}
a.onmessage=function(t){var n=t.data.callbackId
if(n){e[n](t.data.result)}}
n.connect(this.node)
this.node.connect(this.context.destination)}
function r(r){var o
var i
var a
r=r||{}
e.AudioContext=e.AudioContext||e.webkitAudioContext
navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia
e.URL=e.URL||e.webkitURL
this.isRecording=function(){return a&&a.isRecording()}
this.startRecording=function(c){var s=jQuery.Deferred()
if(!e.AudioContext||!navigator.getUserMedia){s.reject("Audio recording does not work in this browser")}function u(){a=new n(i,{workerPath:r.workerPath||t})
if(c){var o=e.setInterval(function(){if(c===0){s.resolve(a)
a.record()
e.clearInterval(o)}else{s.notify(c)
c--}},1e3)}else{a.record()}}if(!o){o=new AudioContext
navigator.getUserMedia({audio:true},function(e){i=o.createMediaStreamSource(e)
i.connect(o.destination)
u()},function(){s.reject("Error getting mic input")})}else{u()}return s}
this.stopRecording=function(){var e=jQuery.Deferred()
a.stop()
a.finishRecording(function(){e.resolve(a)})
return e}
this.combineRecordings=function(e){var o=jQuery.Deferred()
var a=new n(i,{workerPath:r.workerPath||t})
a.combineRecordings(function(){o.resolve(a)},e)
return o}}e.MultiRecorder=r})(window)
KAdefine("third_party/javascript-khansrc/multirecorderjs/multirecorder.js", function(require, requireWithVars, module, exports) {
    module.exports = MultiRecorder;
});
(function(e){function t(e){this.authKey=e.authKey
this.templateId=e.templateId
this.successCb=e.successCb||null
this.errorCb=e.errorCb||null}t.prototype.checkAssemblyStatus=function(e){var t=this
e=e.replace(/^http:/,"https:")
e=e.replace(/api2.[^.]*.transloadit/,"api2.transloadit")
$.ajax({url:e,type:"GET",dataType:"json",success:function(r,s){if(r.ok&&r.ok=="ASSEMBLY_COMPLETED"){if(typeof t.successCb==="function"){t.successCb(r.results)}return}if(r.error||r.ok!="ASSEMBLY_EXECUTING"&&r.ok!="ASSEMBLY_UPLOADING"){if(typeof t.errorCb==="function"){t.errorCb("Failed to check assembly ("+s+")")}return}setTimeout(function(){t.checkAssemblyStatus(e)},1e3)},error:function(e,r){if(typeof t.errorCb==="function"){t.errorCb("Failed to check assembly ("+r+")")}}})}
t.prototype.uploadFile=function(e){var t={auth:{key:this.authKey},template_id:this.templateId}
var r=this
var s=new FormData
s.append("params",JSON.stringify(t))
s.append("file",e)
var a=new XMLHttpRequest
a.open("POST","https://api2.transloadit.com/assemblies",true)
a.onreadystatechange=function(e){var t=e.target
if(t.readyState===4){if(t.status===200){var s=jQuery.parseJSON(t.responseText)
r.checkAssemblyStatus(s.assembly_url)}else if(typeof r.errorCb==="function"){r.errorCb("Failed to upload file")}}}
a.send(s)}
e.TransloaditXhr=t})(window)
KAdefine("third_party/javascript-khansrc/transloaditxhr/transloadit_xhr.js", function(require, requireWithVars, module, exports) {
    module.exports = TransloaditXhr;
});
(function(t,e){var i,s,n,o,a="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",r=function(){var e=t(this).find(":ui-button")
setTimeout(function(){e.button("refresh")},1)},d=function(e){var i=e.name,s=e.form,n=t([])
if(i){i=i.replace(/'/g,"\\'")
if(s){n=t(s).find("[name='"+i+"']")}else{n=t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})}}return n}
t.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,r)
if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType()
this.hasTitle=!!this.buttonElement.attr("title")
var e=this,u=this.options,l=this.type==="checkbox"||this.type==="radio",h=!l?"ui-state-active":"",c="ui-state-focus"
if(u.label===null){u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()}this._hoverable(this.buttonElement)
this.buttonElement.addClass(a).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled){return}if(this===i){t(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled){return}t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){if(u.disabled){t.preventDefault()
t.stopImmediatePropagation()}})
this.element.bind("focus"+this.eventNamespace,function(){e.buttonElement.addClass(c)}).bind("blur"+this.eventNamespace,function(){e.buttonElement.removeClass(c)})
if(l){this.element.bind("change"+this.eventNamespace,function(){if(o){return}e.refresh()})
this.buttonElement.bind("mousedown"+this.eventNamespace,function(t){if(u.disabled){return}o=false
s=t.pageX
n=t.pageY}).bind("mouseup"+this.eventNamespace,function(t){if(u.disabled){return}if(s!==t.pageX||n!==t.pageY){o=true}})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||o){return false}})}else if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||o){return false}t(this).addClass("ui-state-active")
e.buttonElement.attr("aria-pressed","true")
var i=e.element[0]
d(i).not(i).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled){return false}t(this).addClass("ui-state-active")
i=this
e.document.one("mouseup",function(){i=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled){return false}t(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(e){if(u.disabled){return false}if(e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER){t(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")})
if(this.buttonElement.is("a")){this.buttonElement.keyup(function(e){if(e.keyCode===t.ui.keyCode.SPACE){t(this).click()}})}}this._setOption("disabled",u.disabled)
this._resetButton()},_determineButtonType:function(){var t,e,i
if(this.element.is("[type=checkbox]")){this.type="checkbox"}else if(this.element.is("[type=radio]")){this.type="radio"}else if(this.element.is("input")){this.type="input"}else{this.type="button"}if(this.type==="checkbox"||this.type==="radio"){t=this.element.parents().last()
e="label[for='"+this.element.attr("id")+"']"
this.buttonElement=t.find(e)
if(!this.buttonElement.length){t=t.length?t.siblings():this.element.siblings()
this.buttonElement=t.filter(e)
if(!this.buttonElement.length){this.buttonElement=t.find(e)}}this.element.addClass("ui-helper-hidden-accessible")
i=this.element.is(":checked")
if(i){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",i)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible")
this.buttonElement.removeClass(a+" "+u+" "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html())
if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(t,e){this._super(t,e)
if(t==="disabled"){if(e){this.element.prop("disabled",true)}else{this.element.prop("disabled",false)}return}this._resetButton()},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled")
if(e!==this.options.disabled){this._setOption("disabled",e)}if(this.type==="radio"){d(this.element[0]).each(function(){if(t(this).is(":checked")){t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var e=this.buttonElement.removeClass(l),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,o=[]
if(s.primary||s.secondary){if(this.options.text){o.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary"))}if(s.primary){e.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>")}if(s.secondary){e.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>")}if(!this.options.text){o.push(n?"ui-button-icons-only":"ui-button-icon-only")
if(!this.hasTitle){e.attr("title",t.trim(i))}}}else{o.push("ui-button-text-only")}e.addClass(o.join(" "))}})
t.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){if(t==="disabled"){this.buttons.button("option",t,e)}this._super(t,e)},refresh:function(){var e=this.element.css("direction")==="rtl"
this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset")
this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.button.js", function(require, requireWithVars, module, exports) {
});
(function(i,t){var e={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},o={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true}
i.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=i(this).css(t).offset().top
if(e<0){i(this).css("top",t.top-e)}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height}
this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)}
this.originalTitle=this.element.attr("title")
this.options.title=this.options.title||this.originalTitle
this._createWrapper()
this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog)
this._createTitlebar()
this._createButtonPane()
if(this.options.draggable&&i.fn.draggable){this._makeDraggable()}if(this.options.resizable&&i.fn.resizable){this._makeResizable()}this._isOpen=false},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var t=this.options.appendTo
if(t&&(t.jquery||t.nodeType)){return i(t)}return this.document.find(t||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition
this._destroyOverlay()
this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach()
this.uiDialog.stop(true,true).remove()
if(this.originalTitle){this.element.attr("title",this.originalTitle)}i=t.parent.children().eq(t.index)
if(i.length&&i[0]!==this.element[0]){i.before(this.element)}else{t.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:i.noop,enable:i.noop,close:function(t){var e=this
if(!this._isOpen||this._trigger("beforeClose",t)===false){return}this._isOpen=false
this._destroyOverlay()
if(!this.opener.filter(":focusable").focus().length){i(this.document[0].activeElement).blur()}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(i,t){var e=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length
if(e&&!t){this._trigger("focus",i)}return e},open:function(){var t=this
if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}return}this._isOpen=true
this.opener=i(this.document[0].activeElement)
this._size()
this._position()
this._createOverlay()
this._moveToTop(null,true)
this._show(this.uiDialog,this.options.show,function(){t._focusTabbable()
t._trigger("focus")})
this._trigger("open")},_focusTabbable:function(){var i=this.element.find("[autofocus]")
if(!i.length){i=this.element.find(":tabbable")}if(!i.length){i=this.uiDialogButtonPane.find(":tabbable")}if(!i.length){i=this.uiDialogTitlebarClose.filter(":tabbable")}if(!i.length){i=this.uiDialog}i.eq(0).focus()},_keepFocus:function(t){function e(){var t=this.document[0].activeElement,e=this.uiDialog[0]===t||i.contains(this.uiDialog[0],t)
if(!e){this._focusTabbable()}}t.preventDefault()
e.call(this)
this._delay(e)},_createWrapper:function(){this.uiDialog=i("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo())
this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===i.ui.keyCode.ESCAPE){t.preventDefault()
this.close(t)
return}if(t.keyCode!==i.ui.keyCode.TAB){return}var e=this.uiDialog.find(":tabbable"),o=e.filter(":first"),s=e.filter(":last")
if((t.target===s[0]||t.target===this.uiDialog[0])&&!t.shiftKey){o.focus(1)
t.preventDefault()}else if((t.target===o[0]||t.target===this.uiDialog[0])&&t.shiftKey){s.focus(1)
t.preventDefault()}},mousedown:function(i){if(this._moveToTop(i)){this._focusTabbable()}}})
if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var t
this.uiDialogTitlebar=i("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog)
this._on(this.uiDialogTitlebar,{mousedown:function(t){if(!i(t.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}})
this.uiDialogTitlebarClose=i("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar)
this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault()
this.close(i)}})
t=i("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar)
this._title(t)
this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(i){if(!this.options.title){i.html("&#160;")}i.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=i("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
this.uiButtonSet=i("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane)
this._createButtons()},_createButtons:function(){var t=this,e=this.options.buttons
this.uiDialogButtonPane.remove()
this.uiButtonSet.empty()
if(i.isEmptyObject(e)||i.isArray(e)&&!e.length){this.uiDialog.removeClass("ui-dialog-buttons")
return}i.each(e,function(e,o){var s,n
o=i.isFunction(o)?{click:o,text:e}:o
o=i.extend({type:"button"},o)
s=o.click
o.click=function(){s.apply(t.element[0],arguments)}
n={icons:o.icons,text:o.showText}
delete o.icons
delete o.showText
i("<button></button>",o).button(n).appendTo(t.uiButtonSet)})
this.uiDialog.addClass("ui-dialog-buttons")
this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var t=this,e=this.options
function o(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(e,s){i(this).addClass("ui-dialog-dragging")
t._blockFrames()
t._trigger("dragStart",e,o(s))},drag:function(i,e){t._trigger("drag",i,o(e))},stop:function(s,n){e.position=[n.position.left-t.document.scrollLeft(),n.position.top-t.document.scrollTop()]
i(this).removeClass("ui-dialog-dragging")
t._unblockFrames()
t._trigger("dragStop",s,o(n))}})},_makeResizable:function(){var t=this,e=this.options,o=e.resizable,s=this.uiDialog.css("position"),n=typeof o==="string"?o:"n,e,s,w,se,sw,ne,nw"
function a(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:n,start:function(e,o){i(this).addClass("ui-dialog-resizing")
t._blockFrames()
t._trigger("resizeStart",e,a(o))},resize:function(i,e){t._trigger("resize",i,a(e))},stop:function(o,s){e.height=i(this).height()
e.width=i(this).width()
i(this).removeClass("ui-dialog-resizing")
t._unblockFrames()
t._trigger("resizeStop",o,a(s))}}).css("position",s)},_minHeight:function(){var i=this.options
return i.height==="auto"?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible")
if(!i){this.uiDialog.show()}this.uiDialog.position(this.options.position)
if(!i){this.uiDialog.hide()}},_setOptions:function(t){var s=this,n=false,a={}
i.each(t,function(i,t){s._setOption(i,t)
if(i in e){n=true}if(i in o){a[i]=t}})
if(n){this._size()
this._position()}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",a)}},_setOption:function(i,t){var e,o,s=this.uiDialog
if(i==="dialogClass"){s.removeClass(this.options.dialogClass).addClass(t)}if(i==="disabled"){return}this._super(i,t)
if(i==="appendTo"){this.uiDialog.appendTo(this._appendTo())}if(i==="buttons"){this._createButtons()}if(i==="closeText"){this.uiDialogTitlebarClose.button({label:""+t})}if(i==="draggable"){e=s.is(":data(ui-draggable)")
if(e&&!t){s.draggable("destroy")}if(!e&&t){this._makeDraggable()}}if(i==="position"){this._position()}if(i==="resizable"){o=s.is(":data(ui-resizable)")
if(o&&!t){s.resizable("destroy")}if(o&&typeof t==="string"){s.resizable("option","handles",t)}if(!o&&t!==false){this._makeResizable()}}if(i==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var i,t,e,o=this.options
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0})
if(o.minWidth>o.width){o.width=o.minWidth}i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight()
t=Math.max(0,o.minHeight-i)
e=typeof o.maxHeight==="number"?Math.max(0,o.maxHeight-i):"none"
if(o.height==="auto"){this.element.css({minHeight:t,maxHeight:e,height:"auto"})}else{this.element.height(Math.max(0,o.height-i))}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=i(this)
return i("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove()
delete this.iframeBlocks}},_createOverlay:function(){if(!this.options.modal){return}if(!i.ui.dialog.overlayInstances){this._delay(function(){if(i.ui.dialog.overlayInstances){this.document.bind("focusin.dialog",function(t){if(!i(t.target).closest(".ui-dialog").length&&!i(t.target).closest(".ui-datepicker").length){t.preventDefault()
i(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable()}})}})}this.overlay=i("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo())
this._on(this.overlay,{mousedown:"_keepFocus"})
i.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal){return}if(this.overlay){i.ui.dialog.overlayInstances--
if(!i.ui.dialog.overlayInstances){this.document.unbind("focusin.dialog")}this.overlay.remove()
this.overlay=null}}})
i.ui.dialog.overlayInstances=0
if(i.uiBackCompat!==false){i.widget("ui.dialog",i.ui.dialog,{_position:function(){var t=this.options.position,e=[],o=[0,0],s
if(t){if(typeof t==="string"||typeof t==="object"&&"0"in t){e=t.split?t.split(" "):[t[0],t[1]]
if(e.length===1){e[1]=e[0]}i.each(["left","top"],function(i,t){if(+e[i]===e[i]){o[i]=e[i]
e[i]=t}})
t={my:e[0]+(o[0]<0?o[0]:"+"+o[0])+" "+e[1]+(o[1]<0?o[1]:"+"+o[1]),at:e.join(" ")}}t=i.extend({},i.ui.dialog.prototype.options.position,t)}else{t=i.ui.dialog.prototype.options.position}s=this.uiDialog.is(":visible")
if(!s){this.uiDialog.show()}this.uiDialog.position(t)
if(!s){this.uiDialog.hide()}}})}})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.dialog.js", function(require, requireWithVars, module, exports) {
});
(function(t,e){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))){this.element[0].style.position="relative"}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled")
this._mouseDestroy()},_mouseCapture:function(e){var i=this.options
if(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(e)
if(!this.handle){return false}t(i.iframeFix===true?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")})
return true},_mouseStart:function(e){var i=this.options
this.helper=this._createHelper(e)
this.helper.addClass("ui-draggable-dragging")
this._cacheHelperProportions()
if(t.ui.ddmanager){t.ui.ddmanager.current=this}this._cacheMargins()
this.cssPosition=this.helper.css("position")
this.scrollParent=this.helper.scrollParent()
this.offset=this.positionAbs=this.element.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.originalPosition=this.position=this._generatePosition(e)
this.originalPageX=e.pageX
this.originalPageY=e.pageY
i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt)
if(i.containment){this._setContainment()}if(this._trigger("start",e)===false){this._clear()
return false}this._cacheHelperProportions()
if(t.ui.ddmanager&&!i.dropBehaviour){t.ui.ddmanager.prepareOffsets(this,e)}this._mouseDrag(e,true)
if(t.ui.ddmanager){t.ui.ddmanager.dragStart(this,e)}return true},_mouseDrag:function(e,i){this.position=this._generatePosition(e)
this.positionAbs=this._convertPositionTo("absolute")
if(!i){var s=this._uiHash()
if(this._trigger("drag",e,s)===false){this._mouseUp({})
return false}this.position=s.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}if(t.ui.ddmanager){t.ui.ddmanager.drag(this,e)}return false},_mouseStop:function(e){var i,s=this,o=false,n=false
if(t.ui.ddmanager&&!this.options.dropBehaviour){n=t.ui.ddmanager.drop(this,e)}if(this.dropped){n=this.dropped
this.dropped=false}i=this.element[0]
while(i&&(i=i.parentNode)){if(i===document){o=true}}if(!o&&this.options.helper==="original"){return false}if(this.options.revert==="invalid"&&!n||this.options.revert==="valid"&&n||this.options.revert===true||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(s._trigger("stop",e)!==false){s._clear()}})}else{if(this._trigger("stop",e)!==false){this._clear()}}return false},_mouseUp:function(e){t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})
if(t.ui.ddmanager){t.ui.ddmanager.dragStop(this,e)}return t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(e){var i=!this.options.handle||!t(this.options.handle,this.element).length?true:false
t(this.options.handle,this.element).find("*").addBack().each(function(){if(this===e.target){i=true}})
return i},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):i.helper==="clone"?this.element.clone().removeAttr("id"):this.element
if(!s.parents("body").length){s.appendTo(i.appendTo==="parent"?this.element[0].parentNode:i.appendTo)}if(s[0]!==this.element[0]&&!/(fixed|absolute)/.test(s.css("position"))){s.css("position","absolute")}return s},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")}if(t.isArray(e)){e={left:+e[0],top:+e[1]||0}}if("left"in e){this.offset.click.left=e.left+this.margins.left}if("right"in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left}if("top"in e){this.offset.click.top=e.top+this.margins.top}if("bottom"in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft()
e.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&t.ui.ie){e={top:0,left:0}}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var t=this.element.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,o=this.options
if(o.containment==="parent"){o.containment=this.helper[0].parentNode}if(o.containment==="document"||o.containment==="window"){this.containment=[o.containment==="document"?0:t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,o.containment==="document"?0:t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(o.containment==="document"?0:t(window).scrollLeft())+t(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(o.containment==="document"?0:t(window).scrollTop())+(t(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(o.containment)&&o.containment.constructor!==Array){i=t(o.containment)
s=i[0]
if(!s){return}e=t(s).css("overflow")!=="hidden"
this.containment=[(parseInt(t(s).css("borderLeftWidth"),10)||0)+(parseInt(t(s).css("paddingLeft"),10)||0),(parseInt(t(s).css("borderTopWidth"),10)||0)+(parseInt(t(s).css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(t(s).css("borderLeftWidth"),10)||0)-(parseInt(t(s).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(t(s).css("borderTopWidth"),10)||0)-(parseInt(t(s).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]
this.relative_container=i}else if(o.containment.constructor===Array){this.containment=o.containment}},_convertPositionTo:function(e,i){if(!i){i=this.position}var s=e==="absolute"?1:-1,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,n=/(html|body)/i.test(o[0].tagName)
return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():n?0:o.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():n?0:o.scrollLeft())*s}},_generatePosition:function(e){var i,s,o,n,r=this.options,a=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(a[0].tagName),h=e.pageX,f=e.pageY
if(this.originalPosition){if(this.containment){if(this.relative_container){s=this.relative_container.offset()
i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]}else{i=this.containment}if(e.pageX-this.offset.click.left<i[0]){h=i[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<i[1]){f=i[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>i[2]){h=i[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>i[3]){f=i[3]+this.offset.click.top}}if(r.grid){o=r.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY
f=i?o-this.offset.click.top>=i[1]||o-this.offset.click.top>i[3]?o:o-this.offset.click.top>=i[1]?o-r.grid[1]:o+r.grid[1]:o
n=r.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX
h=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n}}return{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():l?0:a.scrollTop()),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:a.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging")
if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null
this.cancelHelperRemoval=false},_trigger:function(e,i,s){s=s||this._uiHash()
t.ui.plugin.call(this,e,[i,s])
if(e==="drag"){this.positionAbs=this._convertPositionTo("absolute")}return t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}})
t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),o=s.options,n=t.extend({},i,{item:s.element})
s.sortables=[]
t(o.connectToSortable).each(function(){var i=t.data(this,"ui-sortable")
if(i&&!i.options.disabled){s.sortables.push({instance:i,shouldRevert:i.options.revert})
i.refreshPositions()
i._trigger("activate",e,n)}})},stop:function(e,i){var s=t(this).data("ui-draggable"),o=t.extend({},i,{item:s.element})
t.each(s.sortables,function(){if(this.instance.isOver){this.instance.isOver=0
s.cancelHelperRemoval=true
this.instance.cancelHelperRemoval=false
if(this.shouldRevert){this.instance.options.revert=true}this.instance._mouseStop(e)
this.instance.options.helper=this.instance.options._helper
if(s.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})}}else{this.instance.cancelHelperRemoval=false
this.instance._trigger("deactivate",e,o)}})},drag:function(e,i){var s=t(this).data("ui-draggable"),o=this
t.each(s.sortables,function(){var n=false,r=this
this.instance.positionAbs=s.positionAbs
this.instance.helperProportions=s.helperProportions
this.instance.offset.click=s.offset.click
if(this.instance._intersectsWith(this.instance.containerCache)){n=true
t.each(s.sortables,function(){this.instance.positionAbs=s.positionAbs
this.instance.helperProportions=s.helperProportions
this.instance.offset.click=s.offset.click
if(this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(r.instance.element[0],this.instance.element[0])){n=false}return n})}if(n){if(!this.instance.isOver){this.instance.isOver=1
this.instance.currentItem=t(o).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true)
this.instance.options._helper=this.instance.options.helper
this.instance.options.helper=function(){return i.helper[0]}
e.target=this.instance.currentItem[0]
this.instance._mouseCapture(e,true)
this.instance._mouseStart(e,true,true)
this.instance.offset.click.top=s.offset.click.top
this.instance.offset.click.left=s.offset.click.left
this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left
this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top
s._trigger("toSortable",e)
s.dropped=this.instance.element
s.currentItem=s.element
this.instance.fromOutside=s}if(this.instance.currentItem){this.instance._mouseDrag(e)}}else{if(this.instance.isOver){this.instance.isOver=0
this.instance.cancelHelperRemoval=true
this.instance.options.revert=false
this.instance._trigger("out",e,this.instance._uiHash(this.instance))
this.instance._mouseStop(e,true)
this.instance.options.helper=this.instance.options._helper
this.instance.currentItem.remove()
if(this.instance.placeholder){this.instance.placeholder.remove()}s._trigger("fromSortable",e)
s.dropped=false}}})}})
t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options
if(e.css("cursor")){i._cursor=e.css("cursor")}e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options
if(e._cursor){t("body").css("cursor",e._cursor)}}})
t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),o=t(this).data("ui-draggable").options
if(s.css("opacity")){o._opacity=s.css("opacity")}s.css("opacity",o.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options
if(s._opacity){t(i.helper).css("opacity",s._opacity)}}})
t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable")
if(e.scrollParent[0]!==document&&e.scrollParent[0].tagName!=="HTML"){e.overflowOffset=e.scrollParent.offset()}},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,o=false
if(i.scrollParent[0]!==document&&i.scrollParent[0].tagName!=="HTML"){if(!s.axis||s.axis!=="x"){if(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity){i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop+s.scrollSpeed}else if(e.pageY-i.overflowOffset.top<s.scrollSensitivity){i.scrollParent[0].scrollTop=o=i.scrollParent[0].scrollTop-s.scrollSpeed}}if(!s.axis||s.axis!=="y"){if(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity){i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft+s.scrollSpeed}else if(e.pageX-i.overflowOffset.left<s.scrollSensitivity){i.scrollParent[0].scrollLeft=o=i.scrollParent[0].scrollLeft-s.scrollSpeed}}}else{if(!s.axis||s.axis!=="x"){if(e.pageY-t(document).scrollTop()<s.scrollSensitivity){o=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed)}else if(t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity){o=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed)}}if(!s.axis||s.axis!=="y"){if(e.pageX-t(document).scrollLeft()<s.scrollSensitivity){o=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed)}else if(t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity){o=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)}}}if(o!==false&&t.ui.ddmanager&&!s.dropBehaviour){t.ui.ddmanager.prepareOffsets(i,e)}}})
t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options
e.snapElements=[]
t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset()
if(this!==e.element[0]){e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})}})},drag:function(e,i){var s,o,n,r,a,l,h,f,c,p,d=t(this).data("ui-draggable"),g=d.options,u=g.snapTolerance,m=i.offset.left,v=m+d.helperProportions.width,P=i.offset.top,b=P+d.helperProportions.height
for(c=d.snapElements.length-1;c>=0;c--){a=d.snapElements[c].left
l=a+d.snapElements[c].width
h=d.snapElements[c].top
f=h+d.snapElements[c].height
if(!(a-u<m&&m<l+u&&h-u<P&&P<f+u||a-u<m&&m<l+u&&h-u<b&&b<f+u||a-u<v&&v<l+u&&h-u<P&&P<f+u||a-u<v&&v<l+u&&h-u<b&&b<f+u)){if(d.snapElements[c].snapping){d.options.snap.release&&d.options.snap.release.call(d.element,e,t.extend(d._uiHash(),{snapItem:d.snapElements[c].item}))}d.snapElements[c].snapping=false
continue}if(g.snapMode!=="inner"){s=Math.abs(h-b)<=u
o=Math.abs(f-P)<=u
n=Math.abs(a-v)<=u
r=Math.abs(l-m)<=u
if(s){i.position.top=d._convertPositionTo("relative",{top:h-d.helperProportions.height,left:0}).top-d.margins.top}if(o){i.position.top=d._convertPositionTo("relative",{top:f,left:0}).top-d.margins.top}if(n){i.position.left=d._convertPositionTo("relative",{top:0,left:a-d.helperProportions.width}).left-d.margins.left}if(r){i.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left}}p=s||o||n||r
if(g.snapMode!=="outer"){s=Math.abs(h-P)<=u
o=Math.abs(f-b)<=u
n=Math.abs(a-m)<=u
r=Math.abs(l-v)<=u
if(s){i.position.top=d._convertPositionTo("relative",{top:h,left:0}).top-d.margins.top}if(o){i.position.top=d._convertPositionTo("relative",{top:f-d.helperProportions.height,left:0}).top-d.margins.top}if(n){i.position.left=d._convertPositionTo("relative",{top:0,left:a}).left-d.margins.left}if(r){i.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left}}if(!d.snapElements[c].snapping&&(s||o||n||r||p)){d.options.snap.snap&&d.options.snap.snap.call(d.element,e,t.extend(d._uiHash(),{snapItem:d.snapElements[c].item}))}d.snapElements[c].snapping=s||o||n||r||p}}})
t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)})
if(!s.length){return}e=parseInt(t(s[0]).css("zIndex"),10)||0
t(s).each(function(i){t(this).css("zIndex",e+i)})
this.css("zIndex",e+s.length)}})
t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),o=t(this).data("ui-draggable").options
if(s.css("zIndex")){o._zIndex=s.css("zIndex")}s.css("zIndex",o.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options
if(s._zIndex){t(i.helper).css("zIndex",s._zIndex)}}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.draggable.js", function(require, requireWithVars, module, exports) {
});
(function(i,t){function e(i){return parseInt(i,10)||0}function s(i){return!isNaN(parseInt(i,10))}i.widget("ui.resizable",i.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,e,s,h,n,o=this,a=this.options
this.element.addClass("ui-resizable")
i.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null})
if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){this.element.wrap(i("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}))
this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable"))
this.elementIsWrapper=true
this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")})
this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0})
this.originalResizeStyle=this.originalElement.css("resize")
this.originalElement.css("resize","none")
this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}))
this.originalElement.css({margin:this.originalElement.css("margin")})
this._proportionallyResize()}this.handles=a.handles||(!i(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"})
if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}t=this.handles.split(",")
this.handles={}
for(e=0;e<t.length;e++){s=i.trim(t[e])
n="ui-resizable-"+s
h=i("<div class='ui-resizable-handle "+n+"'></div>")
h.css({zIndex:a.zIndex})
if("se"===s){h.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[s]=".ui-resizable-"+s
this.element.append(h)}}this._renderAxis=function(t){var e,s,h,n
t=t||this.element
for(e in this.handles){if(this.handles[e].constructor===String){this.handles[e]=i(this.handles[e],this.element).show()}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){s=i(this.handles[e],this.element)
n=/sw|ne|nw|se|n|s/.test(e)?s.outerHeight():s.outerWidth()
h=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join("")
t.css(h,n)
this._proportionallyResize()}if(!i(this.handles[e]).length){continue}}}
this._renderAxis(this.element)
this._handles=i(".ui-resizable-handle",this.element).disableSelection()
this._handles.mouseover(function(){if(!o.resizing){if(this.className){h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}o.axis=h&&h[1]?h[1]:"se"}})
if(a.autoHide){this._handles.hide()
i(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(a.disabled){return}i(this).removeClass("ui-resizable-autohide")
o._handles.show()}).mouseleave(function(){if(a.disabled){return}if(!o.resizing){i(this).addClass("ui-resizable-autohide")
o._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy()
var t,e=function(t){i(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}
if(this.elementIsWrapper){e(this.element)
t=this.element
this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t)
t.remove()}this.originalElement.css("resize",this.originalResizeStyle)
e(this.originalElement)
return this},_mouseCapture:function(t){var e,s,h=false
for(e in this.handles){s=i(this.handles[e])[0]
if(s===t.target||i.contains(s,t.target)){h=true}}return!this.options.disabled&&h},_mouseStart:function(t){var s,h,n,o=this.options,a=this.element.position(),l=this.element
this.resizing=true
if(/absolute/.test(l.css("position"))){l.css({position:"absolute",top:l.css("top"),left:l.css("left")})}else if(l.is(".ui-draggable")){l.css({position:"absolute",top:a.top,left:a.left})}this._renderProxy()
s=e(this.helper.css("left"))
h=e(this.helper.css("top"))
if(o.containment){s+=i(o.containment).scrollLeft()||0
h+=i(o.containment).scrollTop()||0}this.offset=this.helper.offset()
this.position={left:s,top:h}
this.size=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()}
this.originalSize=this._helper?{width:l.outerWidth(),height:l.outerHeight()}:{width:l.width(),height:l.height()}
this.originalPosition={left:s,top:h}
this.sizeDiff={width:l.outerWidth()-l.width(),height:l.outerHeight()-l.height()}
this.originalMousePosition={left:t.pageX,top:t.pageY}
this.aspectRatio=typeof o.aspectRatio==="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1
n=i(".ui-resizable-"+this.axis).css("cursor")
i("body").css("cursor",n==="auto"?this.axis+"-resize":n)
l.addClass("ui-resizable-resizing")
this._propagate("start",t)
return true},_mouseDrag:function(t){var e,s=this.helper,h={},n=this.originalMousePosition,o=this.axis,a=this.position.top,l=this.position.left,r=this.size.width,p=this.size.height,f=t.pageX-n.left||0,d=t.pageY-n.top||0,g=this._change[o]
if(!g){return false}e=g.apply(this,[t,f,d])
this._updateVirtualBoundaries(t.shiftKey)
if(this._aspectRatio||t.shiftKey){e=this._updateRatio(e,t)}e=this._respectSize(e,t)
this._updateCache(e)
this._propagate("resize",t)
if(this.position.top!==a){h.top=this.position.top+"px"}if(this.position.left!==l){h.left=this.position.left+"px"}if(this.size.width!==r){h.width=this.size.width+"px"}if(this.size.height!==p){h.height=this.size.height+"px"}s.css(h)
if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!i.isEmptyObject(h)){this._trigger("resize",t,this.ui())}return false},_mouseStop:function(t){this.resizing=false
var e,s,h,n,o,a,l,r=this.options,p=this
if(this._helper){e=this._proportionallyResizeElements
s=e.length&&/textarea/i.test(e[0].nodeName)
h=s&&i.ui.hasScroll(e[0],"left")?0:p.sizeDiff.height
n=s?0:p.sizeDiff.width
o={width:p.helper.width()-n,height:p.helper.height()-h}
a=parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left)||null
l=parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top)||null
if(!r.animate){this.element.css(i.extend(o,{top:l,left:a}))}p.helper.height(p.size.height)
p.helper.width(p.size.width)
if(this._helper&&!r.animate){this._proportionallyResize()}}i("body").css("cursor","auto")
this.element.removeClass("ui-resizable-resizing")
this._propagate("stop",t)
if(this._helper){this.helper.remove()}return false},_updateVirtualBoundaries:function(i){var t,e,h,n,o,a=this.options
o={minWidth:s(a.minWidth)?a.minWidth:0,maxWidth:s(a.maxWidth)?a.maxWidth:Infinity,minHeight:s(a.minHeight)?a.minHeight:0,maxHeight:s(a.maxHeight)?a.maxHeight:Infinity}
if(this._aspectRatio||i){t=o.minHeight*this.aspectRatio
h=o.minWidth/this.aspectRatio
e=o.maxHeight*this.aspectRatio
n=o.maxWidth/this.aspectRatio
if(t>o.minWidth){o.minWidth=t}if(h>o.minHeight){o.minHeight=h}if(e<o.maxWidth){o.maxWidth=e}if(n<o.maxHeight){o.maxHeight=n}}this._vBoundaries=o},_updateCache:function(i){this.offset=this.helper.offset()
if(s(i.left)){this.position.left=i.left}if(s(i.top)){this.position.top=i.top}if(s(i.height)){this.size.height=i.height}if(s(i.width)){this.size.width=i.width}},_updateRatio:function(i){var t=this.position,e=this.size,h=this.axis
if(s(i.height)){i.width=i.height*this.aspectRatio}else if(s(i.width)){i.height=i.width/this.aspectRatio}if(h==="sw"){i.left=t.left+(e.width-i.width)
i.top=null}if(h==="nw"){i.top=t.top+(e.height-i.height)
i.left=t.left+(e.width-i.width)}return i},_respectSize:function(i){var t=this._vBoundaries,e=this.axis,h=s(i.width)&&t.maxWidth&&t.maxWidth<i.width,n=s(i.height)&&t.maxHeight&&t.maxHeight<i.height,o=s(i.width)&&t.minWidth&&t.minWidth>i.width,a=s(i.height)&&t.minHeight&&t.minHeight>i.height,l=this.originalPosition.left+this.originalSize.width,r=this.position.top+this.size.height,p=/sw|nw|w/.test(e),f=/nw|ne|n/.test(e)
if(o){i.width=t.minWidth}if(a){i.height=t.minHeight}if(h){i.width=t.maxWidth}if(n){i.height=t.maxHeight}if(o&&p){i.left=l-t.minWidth}if(h&&p){i.left=l-t.maxWidth}if(a&&f){i.top=r-t.minHeight}if(n&&f){i.top=r-t.maxHeight}if(!i.width&&!i.height&&!i.left&&i.top){i.top=null}else if(!i.width&&!i.height&&!i.top&&i.left){i.left=null}return i},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var i,t,e,s,h,n=this.helper||this.element
for(i=0;i<this._proportionallyResizeElements.length;i++){h=this._proportionallyResizeElements[i]
if(!this.borderDif){this.borderDif=[]
e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")]
s=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")]
for(t=0;t<e.length;t++){this.borderDif[t]=(parseInt(e[t],10)||0)+(parseInt(s[t],10)||0)}}h.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,e=this.options
this.elementOffset=t.offset()
if(this._helper){this.helper=this.helper||i("<div style='overflow:hidden;'></div>")
this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex})
this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(i,t){return{width:this.originalSize.width+t}},w:function(i,t){var e=this.originalSize,s=this.originalPosition
return{left:s.left+t,width:e.width-t}},n:function(i,t,e){var s=this.originalSize,h=this.originalPosition
return{top:h.top+e,height:s.height-e}},s:function(i,t,e){return{height:this.originalSize.height+e}},se:function(t,e,s){return i.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,s]))},sw:function(t,e,s){return i.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,s]))},ne:function(t,e,s){return i.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,s]))},nw:function(t,e,s){return i.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,s]))}},_propagate:function(t,e){i.ui.plugin.call(this,t,[e,this.ui()])
t!=="resize"&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}})
i.ui.plugin.add("resizable","animate",{stop:function(t){var e=i(this).data("ui-resizable"),s=e.options,h=e._proportionallyResizeElements,n=h.length&&/textarea/i.test(h[0].nodeName),o=n&&i.ui.hasScroll(h[0],"left")?0:e.sizeDiff.height,a=n?0:e.sizeDiff.width,l={width:e.size.width-a,height:e.size.height-o},r=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null,p=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null
e.element.animate(i.extend(l,p&&r?{top:p,left:r}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)}
if(h&&h.length){i(h[0]).css({width:s.width,height:s.height})}e._updateCache(s)
e._propagate("resize",t)}})}})
i.ui.plugin.add("resizable","containment",{start:function(){var t,s,h,n,o,a,l,r=i(this).data("ui-resizable"),p=r.options,f=r.element,d=p.containment,g=d instanceof i?d.get(0):/parent/.test(d)?f.parent().get(0):d
if(!g){return}r.containerElement=i(g)
if(/document/.test(d)||d===document){r.containerOffset={left:0,top:0}
r.containerPosition={left:0,top:0}
r.parentData={element:i(document),left:0,top:0,width:i(document).width(),height:i(document).height()||document.body.parentNode.scrollHeight}}else{t=i(g)
s=[]
i(["Top","Right","Left","Bottom"]).each(function(i,h){s[i]=e(t.css("padding"+h))})
r.containerOffset=t.offset()
r.containerPosition=t.position()
r.containerSize={height:t.innerHeight()-s[3],width:t.innerWidth()-s[1]}
h=r.containerOffset
n=r.containerSize.height
o=r.containerSize.width
a=i.ui.hasScroll(g,"left")?g.scrollWidth:o
l=i.ui.hasScroll(g)?g.scrollHeight:n
r.parentData={element:g,left:h.left,top:h.top,width:a,height:l}}},resize:function(t){var e,s,h,n,o=i(this).data("ui-resizable"),a=o.options,l=o.containerOffset,r=o.position,p=o._aspectRatio||t.shiftKey,f={top:0,left:0},d=o.containerElement
if(d[0]!==document&&/static/.test(d.css("position"))){f=l}if(r.left<(o._helper?l.left:0)){o.size.width=o.size.width+(o._helper?o.position.left-l.left:o.position.left-f.left)
if(p){o.size.height=o.size.width/o.aspectRatio}o.position.left=a.helper?l.left:0}if(r.top<(o._helper?l.top:0)){o.size.height=o.size.height+(o._helper?o.position.top-l.top:o.position.top)
if(p){o.size.width=o.size.height*o.aspectRatio}o.position.top=o._helper?l.top:0}o.offset.left=o.parentData.left+o.position.left
o.offset.top=o.parentData.top+o.position.top
e=Math.abs((o._helper?o.offset.left-f.left:o.offset.left-f.left)+o.sizeDiff.width)
s=Math.abs((o._helper?o.offset.top-f.top:o.offset.top-l.top)+o.sizeDiff.height)
h=o.containerElement.get(0)===o.element.parent().get(0)
n=/relative|absolute/.test(o.containerElement.css("position"))
if(h&&n){e-=o.parentData.left}if(e+o.size.width>=o.parentData.width){o.size.width=o.parentData.width-e
if(p){o.size.height=o.size.width/o.aspectRatio}}if(s+o.size.height>=o.parentData.height){o.size.height=o.parentData.height-s
if(p){o.size.width=o.size.height*o.aspectRatio}}},stop:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.containerOffset,h=t.containerPosition,n=t.containerElement,o=i(t.helper),a=o.offset(),l=o.outerWidth()-t.sizeDiff.width,r=o.outerHeight()-t.sizeDiff.height
if(t._helper&&!e.animate&&/relative/.test(n.css("position"))){i(this).css({left:a.left-h.left-s.left,width:l,height:r})}if(t._helper&&!e.animate&&/static/.test(n.css("position"))){i(this).css({left:a.left-h.left-s.left,width:l,height:r})}}})
i.ui.plugin.add("resizable","alsoResize",{start:function(){var t=i(this).data("ui-resizable"),e=t.options,s=function(t){i(t).each(function(){var t=i(this)
t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})}
if(typeof e.alsoResize==="object"&&!e.alsoResize.parentNode){if(e.alsoResize.length){e.alsoResize=e.alsoResize[0]
s(e.alsoResize)}else{i.each(e.alsoResize,function(i){s(i)})}}else{s(e.alsoResize)}},resize:function(t,e){var s=i(this).data("ui-resizable"),h=s.options,n=s.originalSize,o=s.originalPosition,a={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},l=function(t,s){i(t).each(function(){var t=i(this),h=i(this).data("ui-resizable-alsoresize"),n={},o=s&&s.length?s:t.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"]
i.each(o,function(i,t){var e=(h[t]||0)+(a[t]||0)
if(e&&e>=0){n[t]=e||null}})
t.css(n)})}
if(typeof h.alsoResize==="object"&&!h.alsoResize.nodeType){i.each(h.alsoResize,function(i,t){l(i,t)})}else{l(h.alsoResize)}},stop:function(){i(this).removeData("resizable-alsoresize")}})
i.ui.plugin.add("resizable","ghost",{start:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.size
t.ghost=t.originalElement.clone()
t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof e.ghost==="string"?e.ghost:"")
t.ghost.appendTo(t.helper)},resize:function(){var t=i(this).data("ui-resizable")
if(t.ghost){t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})}},stop:function(){var t=i(this).data("ui-resizable")
if(t.ghost&&t.helper){t.helper.get(0).removeChild(t.ghost.get(0))}}})
i.ui.plugin.add("resizable","grid",{resize:function(){var t=i(this).data("ui-resizable"),e=t.options,s=t.size,h=t.originalSize,n=t.originalPosition,o=t.axis,a=typeof e.grid==="number"?[e.grid,e.grid]:e.grid,l=a[0]||1,r=a[1]||1,p=Math.round((s.width-h.width)/l)*l,f=Math.round((s.height-h.height)/r)*r,d=h.width+p,g=h.height+f,u=e.maxWidth&&e.maxWidth<d,c=e.maxHeight&&e.maxHeight<g,m=e.minWidth&&e.minWidth>d,z=e.minHeight&&e.minHeight>g
e.grid=a
if(m){d=d+l}if(z){g=g+r}if(u){d=d-l}if(c){g=g-r}if(/^(se|s|e)$/.test(o)){t.size.width=d
t.size.height=g}else if(/^(ne)$/.test(o)){t.size.width=d
t.size.height=g
t.position.top=n.top-f}else if(/^(sw)$/.test(o)){t.size.width=d
t.size.height=g
t.position.left=n.left-p}else{t.size.width=d
t.size.height=g
t.position.top=n.top-f
t.position.left=n.left-p}}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.resizable.js", function(require, requireWithVars, module, exports) {
});
(function(e,i){var t=5
e.widget("ui.slider",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=false
this._mouseSliding=false
this._animateOff=true
this._handleIndex=null
this._detectOrientation()
this._mouseInit()
this.element.addClass("ui-slider"+" ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._refresh()
this._setOption("disabled",this.options.disabled)
this._animateOff=false},_refresh:function(){this._createRange()
this._createHandles()
this._setupEvents()
this._refreshValue()},_createHandles:function(){var i,t,s=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",l=[]
t=s.values&&s.values.length||1
if(a.length>t){a.slice(t).remove()
a=a.slice(0,t)}for(i=a.length;i<t;i++){l.push(n)}this.handles=a.add(e(l.join("")).appendTo(this.element))
this.handle=this.handles.eq(0)
this.handles.each(function(i){e(this).data("ui-slider-handle-index",i)})},_createRange:function(){var i=this.options,t=""
if(i.range){if(i.range===true){if(!i.values){i.values=[this._valueMin(),this._valueMin()]}else if(i.values.length&&i.values.length!==2){i.values=[i.values[0],i.values[0]]}else if(e.isArray(i.values)){i.values=i.values.slice(0)}}if(!this.range||!this.range.length){this.range=e("<div></div>").appendTo(this.element)
t="ui-slider-range"+" ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(t+(i.range==="min"||i.range==="max"?" ui-slider-range-"+i.range:""))}else{this.range=e([])}},_setupEvents:function(){var e=this.handles.add(this.range).filter("a")
this._off(e)
this._on(e,this._handleEvents)
this._hoverable(e)
this._focusable(e)},_destroy:function(){this.handles.remove()
this.range.remove()
this.element.removeClass("ui-slider"+" ui-slider-horizontal"+" ui-slider-vertical"+" ui-widget"+" ui-widget-content"+" ui-corner-all")
this._mouseDestroy()},_mouseCapture:function(i){var t,s,a,n,l,h,u,r,o=this,f=this.options
if(f.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()}
this.elementOffset=this.element.offset()
t={x:i.pageX,y:i.pageY}
s=this._normValueFromMouse(t)
a=this._valueMax()-this._valueMin()+1
this.handles.each(function(i){var t=Math.abs(s-o.values(i))
if(a>t||a===t&&(i===o._lastChangedValue||o.values(i)===f.min)){a=t
n=e(this)
l=i}})
h=this._start(i,l)
if(h===false){return false}this._mouseSliding=true
this._handleIndex=l
n.addClass("ui-state-active").focus()
u=n.offset()
r=!e(i.target).parents().addBack().is(".ui-slider-handle")
this._clickOffset=r?{left:0,top:0}:{left:i.pageX-u.left-n.width()/2,top:i.pageY-u.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)}
if(!this.handles.hasClass("ui-state-hover")){this._slide(i,l,s)}this._animateOff=true
return true},_mouseStart:function(){return true},_mouseDrag:function(e){var i={x:e.pageX,y:e.pageY},t=this._normValueFromMouse(i)
this._slide(e,this._handleIndex,t)
return false},_mouseStop:function(e){this.handles.removeClass("ui-state-active")
this._mouseSliding=false
this._stop(e,this._handleIndex)
this._change(e,this._handleIndex)
this._handleIndex=null
this._clickOffset=null
this._animateOff=false
return false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var i,t,s,a,n
if(this.orientation==="horizontal"){i=this.elementSize.width
t=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{i=this.elementSize.height
t=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}s=t/i
if(s>1){s=1}if(s<0){s=0}if(this.orientation==="vertical"){s=1-s}a=this._valueMax()-this._valueMin()
n=this._valueMin()+s*a
return this._trimAlignValue(n)},_start:function(e,i){var t={handle:this.handles[i],value:this.value()}
if(this.options.values&&this.options.values.length){t.value=this.values(i)
t.values=this.values()}return this._trigger("start",e,t)},_slide:function(e,i,t){var s,a,n
if(this.options.values&&this.options.values.length){s=this.values(i?0:1)
if(this.options.values.length===2&&this.options.range===true&&(i===0&&t>s||i===1&&t<s)){t=s}if(t!==this.values(i)){a=this.values()
a[i]=t
n=this._trigger("slide",e,{handle:this.handles[i],value:t,values:a})
s=this.values(i?0:1)
if(n!==false){this.values(i,t,true)}}}else{if(t!==this.value()){n=this._trigger("slide",e,{handle:this.handles[i],value:t})
if(n!==false){this.value(t)}}}},_stop:function(e,i){var t={handle:this.handles[i],value:this.value()}
if(this.options.values&&this.options.values.length){t.value=this.values(i)
t.values=this.values()}this._trigger("stop",e,t)},_change:function(e,i){if(!this._keySliding&&!this._mouseSliding){var t={handle:this.handles[i],value:this.value()}
if(this.options.values&&this.options.values.length){t.value=this.values(i)
t.values=this.values()}this._lastChangedValue=i
this._trigger("change",e,t)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e)
this._refreshValue()
this._change(null,0)
return}return this._value()},values:function(i,t){var s,a,n
if(arguments.length>1){this.options.values[i]=this._trimAlignValue(t)
this._refreshValue()
this._change(null,i)
return}if(arguments.length){if(e.isArray(arguments[0])){s=this.options.values
a=arguments[0]
for(n=0;n<s.length;n+=1){s[n]=this._trimAlignValue(a[n])
this._change(null,n)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(i)}else{return this.value()}}}else{return this._values()}},_setOption:function(i,t){var s,a=0
if(i==="range"&&this.options.range===true){if(t==="min"){this.options.value=this._values(0)
this.options.values=null}else if(t==="max"){this.options.value=this._values(this.options.values.length-1)
this.options.values=null}}if(e.isArray(this.options.values)){a=this.options.values.length}e.Widget.prototype._setOption.apply(this,arguments)
switch(i){case"orientation":this._detectOrientation()
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation)
this._refreshValue()
break
case"value":this._animateOff=true
this._refreshValue()
this._change(null,0)
this._animateOff=false
break
case"values":this._animateOff=true
this._refreshValue()
for(s=0;s<a;s+=1){this._change(null,s)}this._animateOff=false
break
case"min":case"max":this._animateOff=true
this._refreshValue()
this._animateOff=false
break
case"range":this._animateOff=true
this._refresh()
this._animateOff=false
break}},_value:function(){var e=this.options.value
e=this._trimAlignValue(e)
return e},_values:function(e){var i,t,s
if(arguments.length){i=this.options.values[e]
i=this._trimAlignValue(i)
return i}else if(this.options.values&&this.options.values.length){t=this.options.values.slice()
for(s=0;s<t.length;s+=1){t[s]=this._trimAlignValue(t[s])}return t}else{return[]}},_trimAlignValue:function(e){if(e<=this._valueMin()){return this._valueMin()}if(e>=this._valueMax()){return this._valueMax()}var i=this.options.step>0?this.options.step:1,t=(e-this._valueMin())%i,s=e-t
if(Math.abs(t)*2>=i){s+=t>0?i:-i}return parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var i,t,s,a,n,l=this.options.range,h=this.options,u=this,r=!this._animateOff?h.animate:false,o={}
if(this.options.values&&this.options.values.length){this.handles.each(function(s){t=(u.values(s)-u._valueMin())/(u._valueMax()-u._valueMin())*100
o[u.orientation==="horizontal"?"left":"bottom"]=t+"%"
e(this).stop(1,1)[r?"animate":"css"](o,h.animate)
if(u.options.range===true){if(u.orientation==="horizontal"){if(s===0){u.range.stop(1,1)[r?"animate":"css"]({left:t+"%"},h.animate)}if(s===1){u.range[r?"animate":"css"]({width:t-i+"%"},{queue:false,duration:h.animate})}}else{if(s===0){u.range.stop(1,1)[r?"animate":"css"]({bottom:t+"%"},h.animate)}if(s===1){u.range[r?"animate":"css"]({height:t-i+"%"},{queue:false,duration:h.animate})}}}i=t})}else{s=this.value()
a=this._valueMin()
n=this._valueMax()
t=n!==a?(s-a)/(n-a)*100:0
o[this.orientation==="horizontal"?"left":"bottom"]=t+"%"
this.handle.stop(1,1)[r?"animate":"css"](o,h.animate)
if(l==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[r?"animate":"css"]({width:t+"%"},h.animate)}if(l==="max"&&this.orientation==="horizontal"){this.range[r?"animate":"css"]({width:100-t+"%"},{queue:false,duration:h.animate})}if(l==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[r?"animate":"css"]({height:t+"%"},h.animate)}if(l==="max"&&this.orientation==="vertical"){this.range[r?"animate":"css"]({height:100-t+"%"},{queue:false,duration:h.animate})}}},_handleEvents:{keydown:function(i){var s,a,n,l,h=e(i.target).data("ui-slider-handle-index")
switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:i.preventDefault()
if(!this._keySliding){this._keySliding=true
e(i.target).addClass("ui-state-active")
s=this._start(i,h)
if(s===false){return}}break}l=this.options.step
if(this.options.values&&this.options.values.length){a=n=this.values(h)}else{a=n=this.value()}switch(i.keyCode){case e.ui.keyCode.HOME:n=this._valueMin()
break
case e.ui.keyCode.END:n=this._valueMax()
break
case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(a+(this._valueMax()-this._valueMin())/t)
break
case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(a-(this._valueMax()-this._valueMin())/t)
break
case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(a===this._valueMax()){return}n=this._trimAlignValue(a+l)
break
case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(a===this._valueMin()){return}n=this._trimAlignValue(a-l)
break}this._slide(i,h,n)},click:function(e){e.preventDefault()},keyup:function(i){var t=e(i.target).data("ui-slider-handle-index")
if(this._keySliding){this._keySliding=false
this._stop(i,t)
this._change(i,t)
e(i.target).removeClass("ui-state-active")}}}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.slider.js", function(require, requireWithVars, module, exports) {
});
(function(t,e){function i(t,e,i){return t>e&&t<e+i}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.1",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options
this.containerCache={}
this.element.addClass("ui-sortable")
this.refresh()
this.floating=this.items.length?t.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false
this.offset=this.element.offset()
this._mouseInit()
this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled")
this._mouseDestroy()
for(var t=this.items.length-1;t>=0;t--){this.items[t].item.removeData(this.widgetName+"-item")}return this},_setOption:function(e,i){if(e==="disabled"){this.options[e]=i
this.widget().toggleClass("ui-sortable-disabled",!!i)}else{t.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(e,i){var s=null,o=false,r=this
if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(e)
t(e.target).parents().each(function(){if(t.data(this,r.widgetName+"-item")===r){s=t(this)
return false}})
if(t.data(e.target,r.widgetName+"-item")===r){s=t(e.target)}if(!s){return false}if(this.options.handle&&!i){t(this.options.handle,s).find("*").addBack().each(function(){if(this===e.target){o=true}})
if(!o){return false}}this.currentItem=s
this._removeCurrentsFromItems()
return true},_mouseStart:function(e,i,s){var o,r=this.options
this.currentContainer=this
this.refreshPositions()
this.helper=this._createHelper(e)
this._cacheHelperProportions()
this._cacheMargins()
this.scrollParent=this.helper.scrollParent()
this.offset=this.currentItem.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.helper.css("position","absolute")
this.cssPosition=this.helper.css("position")
this.originalPosition=this._generatePosition(e)
this.originalPageX=e.pageX
this.originalPageY=e.pageY
r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt)
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder()
if(r.containment){this._setContainment()}if(r.cursor){if(t("body").css("cursor")){this._storedCursor=t("body").css("cursor")}t("body").css("cursor",r.cursor)}if(r.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",r.opacity)}if(r.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",r.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash())
if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!s){for(o=this.containers.length-1;o>=0;o--){this.containers[o]._trigger("activate",e,this._uiHash(this))}}if(t.ui.ddmanager){t.ui.ddmanager.current=this}if(t.ui.ddmanager&&!r.dropBehaviour){t.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true
this.helper.addClass("ui-sortable-helper")
this._mouseDrag(e)
return true},_mouseDrag:function(e){var i,s,o,r,n=this.options,h=false
this.position=this._generatePosition(e)
this.positionAbs=this._convertPositionTo("absolute")
if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<n.scrollSensitivity){this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+n.scrollSpeed}else if(e.pageY-this.overflowOffset.top<n.scrollSensitivity){this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-n.scrollSpeed}if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<n.scrollSensitivity){this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+n.scrollSpeed}else if(e.pageX-this.overflowOffset.left<n.scrollSensitivity){this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-n.scrollSpeed}}else{if(e.pageY-t(document).scrollTop()<n.scrollSensitivity){h=t(document).scrollTop(t(document).scrollTop()-n.scrollSpeed)}else if(t(window).height()-(e.pageY-t(document).scrollTop())<n.scrollSensitivity){h=t(document).scrollTop(t(document).scrollTop()+n.scrollSpeed)}if(e.pageX-t(document).scrollLeft()<n.scrollSensitivity){h=t(document).scrollLeft(t(document).scrollLeft()-n.scrollSpeed)}else if(t(window).width()-(e.pageX-t(document).scrollLeft())<n.scrollSensitivity){h=t(document).scrollLeft(t(document).scrollLeft()+n.scrollSpeed)}}if(h!==false&&t.ui.ddmanager&&!n.dropBehaviour){t.ui.ddmanager.prepareOffsets(this,e)}}this.positionAbs=this._convertPositionTo("absolute")
if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(i=this.items.length-1;i>=0;i--){s=this.items[i]
o=s.item[0]
r=this._intersectsWithPointer(s)
if(!r){continue}if(s.instance!==this.currentContainer){continue}if(o!==this.currentItem[0]&&this.placeholder[r===1?"next":"prev"]()[0]!==o&&!t.contains(this.placeholder[0],o)&&(this.options.type==="semi-dynamic"?!t.contains(this.element[0],o):true)){this.direction=r===1?"down":"up"
if(this.options.tolerance==="pointer"||this._intersectsWithSides(s)){this._rearrange(e,s)}else{break}this._trigger("change",e,this._uiHash())
break}}this._contactContainers(e)
if(t.ui.ddmanager){t.ui.ddmanager.drag(this,e)}this._trigger("sort",e,this._uiHash())
this.lastPositionAbs=this.positionAbs
return false},_mouseStop:function(e,i){if(!e){return}if(t.ui.ddmanager&&!this.options.dropBehaviour){t.ui.ddmanager.drop(this,e)}if(this.options.revert){var s=this,o=this.placeholder.offset()
this.reverting=true
t(this.helper).animate({left:o.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:o.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else{this._clear(e,i)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null})
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this))
if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this))
this.containers[e].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}t.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null})
if(this.domPosition.prev){t(this.domPosition.prev).after(this.currentItem)}else{t(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[]
e=e||{}
t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/)
if(i){s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}})
if(!s.length&&e.key){s.push(e.key+"=")}return s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[]
e=e||{}
i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")})
return s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,o=s+this.helperProportions.height,r=t.left,n=r+t.width,h=t.top,l=h+t.height,a=this.offset.click.top,c=this.offset.click.left,f=s+a>h&&s+a<l&&e+c>r&&e+c<n
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]){return f}else{return r<e+this.helperProportions.width/2&&i-this.helperProportions.width/2<n&&h<s+this.helperProportions.height/2&&o-this.helperProportions.height/2<l}},_intersectsWithPointer:function(t){var e=this.options.axis==="x"||i(this.positionAbs.top+this.offset.click.top,t.top,t.height),s=this.options.axis==="y"||i(this.positionAbs.left+this.offset.click.left,t.left,t.width),o=e&&s,r=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection()
if(!o){return false}return this.floating?n&&n==="right"||r==="down"?2:1:r&&(r==="down"?2:1)},_intersectsWithSides:function(t){var e=i(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=i(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),o=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
if(this.floating&&r){return r==="right"&&s||r==="left"&&!s}else{return o&&(o==="down"&&e||o==="up"&&!e)}},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top
return t!==0&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left
return t!==0&&(t>0?"right":"left")},refresh:function(t){this._refreshItems(t)
this.refreshPositions()
return this},_connectWith:function(){var t=this.options
return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){var i,s,o,r,n=[],h=[],l=this._connectWith()
if(l&&e){for(i=l.length-1;i>=0;i--){o=t(l[i])
for(s=o.length-1;s>=0;s--){r=t.data(o[s],this.widgetFullName)
if(r&&r!==this&&!r.options.disabled){h.push([t.isFunction(r.options.items)?r.options.items.call(r.element):t(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r])}}}}h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
for(i=h.length-1;i>=0;i--){h[i][0].each(function(){n.push(this)})}return t(n)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)")
this.items=t.grep(this.items,function(t){for(var i=0;i<e.length;i++){if(e[i]===t.item[0]){return false}}return true})},_refreshItems:function(e){this.items=[]
this.containers=[this]
var i,s,o,r,n,h,l,a,c=this.items,f=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],p=this._connectWith()
if(p&&this.ready){for(i=p.length-1;i>=0;i--){o=t(p[i])
for(s=o.length-1;s>=0;s--){r=t.data(o[s],this.widgetFullName)
if(r&&r!==this&&!r.options.disabled){f.push([t.isFunction(r.options.items)?r.options.items.call(r.element[0],e,{item:this.currentItem}):t(r.options.items,r.element),r])
this.containers.push(r)}}}}for(i=f.length-1;i>=0;i--){n=f[i][1]
h=f[i][0]
for(s=0,a=h.length;s<a;s++){l=t(h[s])
l.data(this.widgetName+"-item",n)
c.push({item:l,instance:n,width:0,height:0,left:0,top:0})}}},refreshPositions:function(e){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var i,s,o,r
for(i=this.items.length-1;i>=0;i--){s=this.items[i]
if(s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]){continue}o=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item
if(!e){s.width=o.outerWidth()
s.height=o.outerHeight()}r=o.offset()
s.left=r.left
s.top=r.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(i=this.containers.length-1;i>=0;i--){r=this.containers[i].element.offset()
this.containers[i].containerCache.left=r.left
this.containers[i].containerCache.top=r.top
this.containers[i].containerCache.width=this.containers[i].element.outerWidth()
this.containers[i].containerCache.height=this.containers[i].element.outerHeight()}}return this},_createPlaceholder:function(e){e=e||this
var i,s=e.options
if(!s.placeholder||s.placeholder.constructor===String){i=s.placeholder
s.placeholder={element:function(){var s=t(document.createElement(e.currentItem[0].nodeName)).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]
if(!i){s.style.visibility="hidden"}return s},update:function(t,o){if(i&&!s.forcePlaceholderSize){return}if(!o.height()){o.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))}if(!o.width()){o.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}}e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem))
e.currentItem.after(e.placeholder)
s.placeholder.update(e,e.placeholder)},_contactContainers:function(e){var i,s,o,r,n,h,l,a,c,f=null,p=null
for(i=this.containers.length-1;i>=0;i--){if(t.contains(this.currentItem[0],this.containers[i].element[0])){continue}if(this._intersectsWith(this.containers[i].containerCache)){if(f&&t.contains(this.containers[i].element[0],f.element[0])){continue}f=this.containers[i]
p=i}else{if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",e,this._uiHash(this))
this.containers[i].containerCache.over=0}}}if(!f){return}if(this.containers.length===1){this.containers[p]._trigger("over",e,this._uiHash(this))
this.containers[p].containerCache.over=1}else{o=1e4
r=null
n=this.containers[p].floating?"left":"top"
h=this.containers[p].floating?"width":"height"
l=this.positionAbs[n]+this.offset.click[n]
for(s=this.items.length-1;s>=0;s--){if(!t.contains(this.containers[p].element[0],this.items[s].item[0])){continue}if(this.items[s].item[0]===this.currentItem[0]){continue}a=this.items[s].item.offset()[n]
c=false
if(Math.abs(a-l)>Math.abs(a+this.items[s][h]-l)){c=true
a+=this.items[s][h]}if(Math.abs(a-l)<o){o=Math.abs(a-l)
r=this.items[s]
this.direction=c?"up":"down"}}if(!r&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[p]
r?this._rearrange(e,r,null,true):this._rearrange(e,null,this.containers[p].element,true)
this._trigger("change",e,this._uiHash())
this.containers[p]._trigger("change",e,this._uiHash(this))
this.options.placeholder.update(this.currentContainer,this.placeholder)
this.containers[p]._trigger("over",e,this._uiHash(this))
this.containers[p].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):i.helper==="clone"?this.currentItem.clone():this.currentItem
if(!s.parents("body").length){t(i.appendTo!=="parent"?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0])}if(s[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!s[0].style.width||i.forceHelperSize){s.width(this.currentItem.width())}if(!s[0].style.height||i.forceHelperSize){s.height(this.currentItem.height())}return s},_adjustOffsetFromHelper:function(e){if(typeof e==="string"){e=e.split(" ")}if(t.isArray(e)){e={left:+e[0],top:+e[1]||0}}if("left"in e){this.offset.click.left=e.left+this.margins.left}if("right"in e){this.offset.click.left=this.helperProportions.width-e.right+this.margins.left}if("top"in e){this.offset.click.top=e.top+this.margins.top}if("bottom"in e){this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft()
e.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&t.ui.ie){e={top:0,left:0}}return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var t=this.currentItem.position()
return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,o=this.options
if(o.containment==="parent"){o.containment=this.helper[0].parentNode}if(o.containment==="document"||o.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t(o.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t(o.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!/^(document|window|parent)$/.test(o.containment)){e=t(o.containment)[0]
i=t(o.containment).offset()
s=t(e).css("overflow")!=="hidden"
this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(e,i){if(!i){i=this.position}var s=e==="absolute"?1:-1,o=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,r=/(html|body)/i.test(o[0].tagName)
return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():r?0:o.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():r?0:o.scrollLeft())*s}},_generatePosition:function(e){var i,s,o=this.options,r=e.pageX,n=e.pageY,h=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,l=/(html|body)/i.test(h[0].tagName)
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(e.pageX-this.offset.click.left<this.containment[0]){r=this.containment[0]+this.offset.click.left}if(e.pageY-this.offset.click.top<this.containment[1]){n=this.containment[1]+this.offset.click.top}if(e.pageX-this.offset.click.left>this.containment[2]){r=this.containment[2]+this.offset.click.left}if(e.pageY-this.offset.click.top>this.containment[3]){n=this.containment[3]+this.offset.click.top}}if(o.grid){i=this.originalPageY+Math.round((n-this.originalPageY)/o.grid[1])*o.grid[1]
n=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-o.grid[1]:i+o.grid[1]:i
s=this.originalPageX+Math.round((r-this.originalPageX)/o.grid[0])*o.grid[0]
r=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-o.grid[0]:s+o.grid[0]:s}}return{top:n-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():l?0:h.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():l?0:h.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?e.item[0]:e.item[0].nextSibling)
this.counter=this.counter?++this.counter:1
var o=this.counter
this._delay(function(){if(o===this.counter){this.refreshPositions(!s)}})},_clear:function(e,i){this.reverting=false
var s,o=[]
if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null
if(this.helper[0]===this.currentItem[0]){for(s in this._storedCSS){if(this._storedCSS[s]==="auto"||this._storedCSS[s]==="static"){this._storedCSS[s]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!i){o.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!i){o.push(function(t){this._trigger("update",t,this._uiHash())})}if(this!==this.currentContainer){if(!i){o.push(function(t){this._trigger("remove",t,this._uiHash())})
o.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer))
o.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer))}}for(s=this.containers.length-1;s>=0;s--){if(!i){o.push(function(t){return function(e){t._trigger("deactivate",e,this._uiHash(this))}}.call(this,this.containers[s]))}if(this.containers[s].containerCache.over){o.push(function(t){return function(e){t._trigger("out",e,this._uiHash(this))}}.call(this,this.containers[s]))
this.containers[s].containerCache.over=0}}if(this._storedCursor){t("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false
if(this.cancelHelperRemoval){if(!i){this._trigger("beforeStop",e,this._uiHash())
for(s=0;s<o.length;s++){o[s].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false
return false}if(!i){this._trigger("beforeStop",e,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0])
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null
if(!i){for(s=0;s<o.length;s++){o[s].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false
return true},_trigger:function(){if(t.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(e){var i=e||this
return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.sortable.js", function(require, requireWithVars, module, exports) {
});
(function(t,e){var i=0,a=/#.*$/
function s(){return++i}function n(t){return t.hash.length>1&&decodeURIComponent(t.href.replace(a,""))===decodeURIComponent(location.href.replace(a,""))}t.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options
this.running=false
this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){if(t(this).is(".ui-state-disabled")){e.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(t(this).closest("li").is(".ui-state-disabled")){this.blur()}})
this._processTabs()
i.active=this._initialActive()
if(t.isArray(i.disabled)){i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(i.active)}else{this.active=t()}this._refresh()
if(this.active.length){this.load(i.active)}},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,a=location.hash.substring(1)
if(e===null){if(a){this.tabs.each(function(i,s){if(t(s).attr("aria-controls")===a){e=i
return false}})}if(e===null){e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(e===null||e===-1){e=this.tabs.length?0:false}}if(e!==false){e=this.tabs.index(this.tabs.eq(e))
if(e===-1){e=i?false:0}}if(!i&&e===false&&this.anchors.length){e=0}return e},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?t():this._getPanelForTab(this.active)}},_tabKeydown:function(e){var i=t(this.document[0].activeElement).closest("li"),a=this.tabs.index(i),s=true
if(this._handlePageNav(e)){return}switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:a++
break
case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:s=false
a--
break
case t.ui.keyCode.END:a=this.anchors.length-1
break
case t.ui.keyCode.HOME:a=0
break
case t.ui.keyCode.SPACE:e.preventDefault()
clearTimeout(this.activating)
this._activate(a)
return
case t.ui.keyCode.ENTER:e.preventDefault()
clearTimeout(this.activating)
this._activate(a===this.options.active?false:a)
return
default:return}e.preventDefault()
clearTimeout(this.activating)
a=this._focusNextTab(a,s)
if(!e.ctrlKey){i.attr("aria-selected","false")
this.tabs.eq(a).attr("aria-selected","true")
this.activating=this._delay(function(){this.option("active",a)},this.delay)}},_panelKeydown:function(e){if(this._handlePageNav(e)){return}if(e.ctrlKey&&e.keyCode===t.ui.keyCode.UP){e.preventDefault()
this.active.focus()}},_handlePageNav:function(e){if(e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false))
return true}if(e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true))
return true}},_findNextTab:function(e,i){var a=this.tabs.length-1
function s(){if(e>a){e=0}if(e<0){e=a}return e}while(t.inArray(s(),this.options.disabled)!==-1){e=i?e+1:e-1}return e},_focusNextTab:function(t,e){t=this._findNextTab(t,e)
this.tabs.eq(t).focus()
return t},_setOption:function(t,e){if(t==="active"){this._activate(e)
return}if(t==="disabled"){this._setupDisabled(e)
return}this._super(t,e)
if(t==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",e)
if(!e&&this.options.active===false){this._activate(0)}}if(t==="event"){this._setupEvents(e)}if(t==="heightStyle"){this._setupHeightStyle(e)}},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+s()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])")
e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)})
this._processTabs()
if(e.active===false||!this.anchors.length){e.active=false
this.active=t()}else if(this.active.length&&!t.contains(this.tablist[0],this.active[0])){if(this.tabs.length===e.disabled.length){e.active=false
this.active=t()}else{this._activate(this._findNextTab(Math.max(0,e.active-1),false))}}else{e.active=this.tabs.index(this.active)}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled)
this._setupEvents(this.options.event)
this._setupHeightStyle(this.options.heightStyle)
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1})
this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"})
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0})
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})}},_processTabs:function(){var e=this
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist")
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1})
this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1})
this.panels=t()
this.anchors.each(function(i,a){var s,r,l,h=t(a).uniqueId().attr("id"),o=t(a).closest("li"),u=o.attr("aria-controls")
if(n(a)){s=a.hash
r=e.element.find(e._sanitizeSelector(s))}else{l=e._tabId(o)
s="#"+l
r=e.element.find(s)
if(!r.length){r=e._createPanel(l)
r.insertAfter(e.panels[i-1]||e.tablist)}r.attr("aria-live","polite")}if(r.length){e.panels=e.panels.add(r)}if(u){o.data("ui-tabs-aria-controls",u)}o.attr({"aria-controls":s.substring(1),"aria-labelledby":h})
r.attr("aria-labelledby",h)})
this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(e){if(t.isArray(e)){if(!e.length){e=false}else if(e.length===this.anchors.length){e=true}}for(var i=0,a;a=this.tabs[i];i++){if(e===true||t.inArray(i,e)!==-1){t(a).addClass("ui-state-disabled").attr("aria-disabled","true")}else{t(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}}
if(e){t.each(e.split(" "),function(t,e){i[e]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels))
this._on(this.anchors,i)
this._on(this.tabs,{keydown:"_tabKeydown"})
this._on(this.panels,{keydown:"_panelKeydown"})
this._focusable(this.tabs)
this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,a=this.element.parent()
if(e==="fill"){i=a.height()
i-=this.element.outerHeight()-this.element.height()
this.element.siblings(":visible").each(function(){var e=t(this),a=e.css("position")
if(a==="absolute"||a==="fixed"){return}i-=e.outerHeight(true)})
this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(true)})
this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")}else if(e==="auto"){i=0
this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i)}},_eventHandler:function(e){var i=this.options,a=this.active,s=t(e.currentTarget),n=s.closest("li"),r=n[0]===a[0],l=r&&i.collapsible,h=l?t():this._getPanelForTab(n),o=!a.length?t():this._getPanelForTab(a),u={oldTab:a,oldPanel:o,newTab:l?t():n,newPanel:h}
e.preventDefault()
if(n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||r&&!i.collapsible||this._trigger("beforeActivate",e,u)===false){return}i.active=l?false:this.tabs.index(n)
this.active=r?t():n
if(this.xhr){this.xhr.abort()}if(!o.length&&!h.length){t.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(h.length){this.load(this.tabs.index(n),e)}this._toggle(e,u)},_toggle:function(e,i){var a=this,s=i.newPanel,n=i.oldPanel
this.running=true
function r(){a.running=false
a._trigger("activate",e,i)}function l(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active")
if(s.length&&a.options.show){a._show(s,a.options.show,r)}else{s.show()
r()}}if(n.length&&this.options.hide){this._hide(n,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active")
l()})}else{i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active")
n.hide()
l()}n.attr({"aria-expanded":"false","aria-hidden":"true"})
i.oldTab.attr("aria-selected","false")
if(s.length&&n.length){i.oldTab.attr("tabIndex",-1)}else if(s.length){this.tabs.filter(function(){return t(this).attr("tabIndex")===0}).attr("tabIndex",-1)}s.attr({"aria-expanded":"true","aria-hidden":"false"})
i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,a=this._findActive(e)
if(a[0]===this.active[0]){return}if(!a.length){a=this.active}i=a.find(".ui-tabs-anchor")[0]
this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop})},_findActive:function(e){return e===false?t():this.tabs.eq(e)},_getIndex:function(t){if(typeof t==="string"){t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))}return t},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible")
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role")
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId()
this.tabs.add(this.panels).each(function(){if(t.data(this,"ui-tabs-destroy")){t(this).remove()}else{t(this).removeClass("ui-state-default ui-state-active ui-state-disabled "+"ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}})
this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls")
if(i){e.attr("aria-controls",i).removeData("ui-tabs-aria-controls")}else{e.removeAttr("aria-controls")}})
this.panels.show()
if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(i){var a=this.options.disabled
if(a===false){return}if(i===e){a=false}else{i=this._getIndex(i)
if(t.isArray(a)){a=t.map(a,function(t){return t!==i?t:null})}else{a=t.map(this.tabs,function(t,e){return e!==i?e:null})}}this._setupDisabled(a)},disable:function(i){var a=this.options.disabled
if(a===true){return}if(i===e){a=true}else{i=this._getIndex(i)
if(t.inArray(i,a)!==-1){return}if(t.isArray(a)){a=t.merge([i],a).sort()}else{a=[i]}}this._setupDisabled(a)},load:function(e,i){e=this._getIndex(e)
var a=this,s=this.tabs.eq(e),r=s.find(".ui-tabs-anchor"),l=this._getPanelForTab(s),h={tab:s,panel:l}
if(n(r[0])){return}this.xhr=t.ajax(this._ajaxSettings(r,i,h))
if(this.xhr&&this.xhr.statusText!=="canceled"){s.addClass("ui-tabs-loading")
l.attr("aria-busy","true")
this.xhr.success(function(t){setTimeout(function(){l.html(t)
a._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){if(e==="abort"){a.panels.stop(false,true)}s.removeClass("ui-tabs-loading")
l.removeAttr("aria-busy")
if(t===a.xhr){delete a.xhr}},1)})}},_ajaxSettings:function(e,i,a){var s=this
return{url:e.attr("href"),beforeSend:function(e,n){return s._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:n},a))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls")
return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery)
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.tabs.js", function(require, requireWithVars, module, exports) {
});
(function(e){var o=function(){var o={},t,r=65,i,a='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',n={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:true,flat:false},c=function(o,t){var r=D(o)
e(t).data("colorpicker").fields.eq(1).val(r.r).end().eq(2).val(r.g).end().eq(3).val(r.b).end()},l=function(o,t){e(t).data("colorpicker").fields.eq(4).val(o.h).end().eq(5).val(o.s).end().eq(6).val(o.b).end()},d=function(o,t){e(t).data("colorpicker").fields.eq(0).val(X(o)).end()},s=function(o,t){e(t).data("colorpicker").selector.css("backgroundColor","#"+X({h:o.h,s:100,b:100}))
e(t).data("colorpicker").selectorIndic.css({left:parseInt(150*o.s/100,10),top:parseInt(150*(100-o.b)/100,10)})},p=function(o,t){e(t).data("colorpicker").hue.css("top",parseInt(150-150*o.h/360,10))},u=function(o,t){e(t).data("colorpicker").currentColor.css("backgroundColor","#"+X(o))},f=function(o,t){e(t).data("colorpicker").newColor.css("backgroundColor","#"+X(o))},h=function(o){var t=o.charCode||o.keyCode||-1
if(t>r&&t<=90||t==32){return false}var i=e(this).parent().parent()
if(i.data("colorpicker").livePreview===true){v.apply(this)}},v=function(o){var t=e(this).parent().parent(),r
if(this.parentNode.className.indexOf("_hex")>0){t.data("colorpicker").color=r=W(T(this.value))}else if(this.parentNode.className.indexOf("_hsb")>0){t.data("colorpicker").color=r=Y({h:parseInt(t.data("colorpicker").fields.eq(4).val(),10),s:parseInt(t.data("colorpicker").fields.eq(5).val(),10),b:parseInt(t.data("colorpicker").fields.eq(6).val(),10)})}else{t.data("colorpicker").color=r=B(E({r:parseInt(t.data("colorpicker").fields.eq(1).val(),10),g:parseInt(t.data("colorpicker").fields.eq(2).val(),10),b:parseInt(t.data("colorpicker").fields.eq(3).val(),10)}))}if(o){c(r,t.get(0))
d(r,t.get(0))
l(r,t.get(0))}s(r,t.get(0))
p(r,t.get(0))
f(r,t.get(0))
t.data("colorpicker").onChange.apply(t,[r,X(r),D(r)])},m=function(o){var t=e(this).parent().parent()
t.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},g=function(){r=this.parentNode.className.indexOf("_hex")>0?70:65
e(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")
e(this).parent().addClass("colorpicker_focus")},k=function(o){var t=e(this).parent().find("input").focus()
var r={el:e(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:o.pageY,field:t,val:parseInt(t.val(),10),preview:e(this).parent().parent().data("colorpicker").livePreview}
e(document).bind("mouseup",r,_)
e(document).bind("mousemove",r,b)},b=function(e){e.data.field.val(Math.max(0,Math.min(e.data.max,parseInt(e.data.val+e.pageY-e.data.y,10))))
if(e.data.preview){v.apply(e.data.field.get(0),[true])}return false},_=function(o){v.apply(o.data.field.get(0),[true])
o.data.el.removeClass("colorpicker_slider").find("input").focus()
e(document).unbind("mouseup",_)
e(document).unbind("mousemove",b)
return false},x=function(o){var t={cal:e(this).parent(),y:e(this).offset().top}
t.preview=t.cal.data("colorpicker").livePreview
e(document).bind("mouseup",t,y)
e(document).bind("mousemove",t,w)},w=function(e){v.apply(e.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,e.pageY-e.data.y)))/150,10)).get(0),[e.data.preview])
return false},y=function(o){w(o)
c(o.data.cal.data("colorpicker").color,o.data.cal.get(0))
d(o.data.cal.data("colorpicker").color,o.data.cal.get(0))
e(document).unbind("mouseup",y)
e(document).unbind("mousemove",w)
return false},C=function(o){var t={cal:e(this).parent(),pos:e(this).offset()}
t.preview=t.cal.data("colorpicker").livePreview
e(document).bind("mouseup",t,I)
e(document).bind("mousemove",t,M)},M=function(e){v.apply(e.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,e.pageY-e.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,e.pageX-e.data.pos.left))/150,10)).get(0),[e.data.preview])
return false},I=function(o){M(o)
c(o.data.cal.data("colorpicker").color,o.data.cal.get(0))
d(o.data.cal.data("colorpicker").color,o.data.cal.get(0))
e(document).unbind("mouseup",I)
e(document).unbind("mousemove",M)
return false},q=function(o){e(this).addClass("colorpicker_focus")},P=function(o){e(this).removeClass("colorpicker_focus")},N=function(o){var t=e(this).parent()
var r=t.data("colorpicker").color
t.data("colorpicker").origColor=r
u(r,t.get(0))
t.data("colorpicker").onSubmit(r,X(r),D(r),t.data("colorpicker").el,t.data("colorpicker").parent)},S=function(o){var t=e("#"+e(this).data("colorpickerId"))
t.data("colorpicker").onBeforeShow.apply(this,[t.get(0)])
var r=e(this).offset()
var i=z()
var a=r.top+this.offsetHeight
var n=r.left
if(a+176>i.t+i.h){a-=this.offsetHeight+176}if(n+356>i.l+i.w){n-=356}t.css({left:n+"px",top:a+"px"})
if(t.data("colorpicker").onShow.apply(this,[t.get(0)])!=false){t.show()}e(document).bind("mousedown",{cal:t},H)
return false},H=function(o){if(!O(o.data.cal.get(0),o.target,o.data.cal.get(0))){if(o.data.cal.data("colorpicker").onHide.apply(this,[o.data.cal.get(0)])!=false){o.data.cal.hide()}e(document).unbind("mousedown",H)}},O=function(e,o,t){if(e==o){return true}if(e.contains){return e.contains(o)}if(e.compareDocumentPosition){return!!(e.compareDocumentPosition(o)&16)}var r=o.parentNode
while(r&&r!=t){if(r==e)return true
r=r.parentNode}return false},z=function(){var e=document.compatMode=="CSS1Compat"
return{l:window.pageXOffset||(e?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(e?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(e?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(e?document.documentElement.clientHeight:document.body.clientHeight)}},Y=function(e){return{h:Math.min(360,Math.max(0,e.h)),s:Math.min(100,Math.max(0,e.s)),b:Math.min(100,Math.max(0,e.b))}},E=function(e){return{r:Math.min(255,Math.max(0,e.r)),g:Math.min(255,Math.max(0,e.g)),b:Math.min(255,Math.max(0,e.b))}},T=function(e){var o=6-e.length
if(o>0){var t=[]
for(var r=0;r<o;r++){t.push("0")}t.push(e)
e=t.join("")}return e},j=function(e){var e=parseInt(e.indexOf("#")>-1?e.substring(1):e,16)
return{r:e>>16,g:(e&65280)>>8,b:e&255}},W=function(e){return B(j(e))},B=function(e){var o={h:0,s:0,b:0}
var t=Math.min(e.r,e.g,e.b)
var r=Math.max(e.r,e.g,e.b)
var i=r-t
o.b=r
if(r!=0){}o.s=r!=0?255*i/r:0
if(o.s!=0){if(e.r==r){o.h=(e.g-e.b)/i}else if(e.g==r){o.h=2+(e.b-e.r)/i}else{o.h=4+(e.r-e.g)/i}}else{o.h=-1}o.h*=60
if(o.h<0){o.h+=360}o.s*=100/255
o.b*=100/255
return o},D=function(e){var o={}
var t=Math.round(e.h)
var r=Math.round(e.s*255/100)
var i=Math.round(e.b*255/100)
if(r==0){o.r=o.g=o.b=i}else{var a=i
var n=(255-r)*i/255
var c=(a-n)*(t%60)/60
if(t==360)t=0
if(t<60){o.r=a
o.b=n
o.g=n+c}else if(t<120){o.g=a
o.b=n
o.r=a-c}else if(t<180){o.g=a
o.r=n
o.b=n+c}else if(t<240){o.b=a
o.r=n
o.g=a-c}else if(t<300){o.b=a
o.g=n
o.r=n+c}else if(t<360){o.r=a
o.g=n
o.b=a-c}else{o.r=0
o.g=0
o.b=0}}return{r:Math.round(o.r),g:Math.round(o.g),b:Math.round(o.b)}},L=function(o){var t=[o.r.toString(16),o.g.toString(16),o.b.toString(16)]
e.each(t,function(e,o){if(o.length==1){t[e]="0"+o}})
return t.join("")},X=function(e){return L(D(e))},Q=function(){var o=e(this).parent()
var t=o.data("colorpicker").origColor
o.data("colorpicker").color=t
c(t,o.get(0))
d(t,o.get(0))
l(t,o.get(0))
s(t,o.get(0))
p(t,o.get(0))
f(t,o.get(0))}
return{init:function(o){o=e.extend({},n,o||{})
if(typeof o.color=="string"){o.color=W(o.color)}else if(o.color.r!=undefined&&o.color.g!=undefined&&o.color.b!=undefined){o.color=B(o.color)}else if(o.color.h!=undefined&&o.color.s!=undefined&&o.color.b!=undefined){o.color=Y(o.color)}else{return this}return this.each(function(){if(!e(this).data("colorpickerId")){var t=e.extend({},o)
t.origColor=o.color
var r="collorpicker_"+parseInt(Math.random()*1e3)
e(this).data("colorpickerId",r)
t.parent=e(this)
var i=e(a).attr("id",r).attr("data-parent",e(this).attr("id"))
if(t.flat){i.appendTo(this).show()}else{i.appendTo(document.body)}t.fields=i.find("input").bind("keyup",h).bind("change",v).bind("blur",m).bind("focus",g)
i.find("span").bind("mousedown",k).end().find(">div.colorpicker_current_color").bind("click",Q)
t.selector=i.find("div.colorpicker_color").bind("mousedown",C)
t.selectorIndic=t.selector.find("div div")
t.el=this
t.hue=i.find("div.colorpicker_hue div")
i.find("div.colorpicker_hue").bind("mousedown",x)
t.newColor=i.find("div.colorpicker_new_color")
t.currentColor=i.find("div.colorpicker_current_color")
i.data("colorpicker",t)
i.find("div.colorpicker_submit").bind("mouseenter",q).bind("mouseleave",P).bind("click",N)
c(t.color,i.get(0))
l(t.color,i.get(0))
d(t.color,i.get(0))
p(t.color,i.get(0))
s(t.color,i.get(0))
u(t.color,i.get(0))
f(t.color,i.get(0))
if(t.flat){i.css({position:"relative",display:"block"})}else{e(this).bind(t.eventName,S)}}})},showPicker:function(){return this.each(function(){if(e(this).data("colorpickerId")){S.apply(this)}})},hidePicker:function(){return this.each(function(){if(e(this).data("colorpickerId")){e("#"+e(this).data("colorpickerId")).hide()}})},setColor:function(o){if(typeof o=="string"){o=W(o)}else if(o.r!=undefined&&o.g!=undefined&&o.b!=undefined){o=B(o)}else if(o.h!=undefined&&o.s!=undefined&&o.b!=undefined){o=Y(o)}else{return this}return this.each(function(){if(e(this).data("colorpickerId")){var t=e("#"+e(this).data("colorpickerId"))
t.data("colorpicker").color=o
t.data("colorpicker").origColor=o
c(o,t.get(0))
l(o,t.get(0))
d(o,t.get(0))
p(o,t.get(0))
s(o,t.get(0))
u(o,t.get(0))
f(o,t.get(0))}})}}}()
e.fn.extend({ColorPicker:o.init,ColorPickerHide:o.hidePicker,ColorPickerShow:o.showPicker,ColorPickerSetColor:o.setColor})})(jQuery)
KAdefine("third_party/javascript-khansrc/colorpicker/colorpicker.js", function(require, requireWithVars, module, exports) {
});
window.guiders=function(e){var i={}
i.ButtonAction={NEXT:0,CLOSE:1}
i._defaultSettings={attachTo:null,buttons:[{action:i.ButtonAction.CLOSE,text:"Close"}],buttonCustomHTML:"",classString:null,description:"",highlight:null,isHashable:true,offset:{top:null,left:null},onShow:null,overlay:false,position:0,title:"Sample title goes here",width:400,xButton:false}
i._htmlSkeleton=["<div class='guider'>","  <div class='guider_content'>","    <h1 class='guider_title'></h1>","    <div class='guider_close'></div>","    <p class='guider_description'></p>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join("")
i._arrowSize=42
i._currentGuiderID=null
i._guiders={}
i._lastCreatedGuiderID=null
i._zIndexForHighlight=1031
i._addButtons=function(t){var r=t.elem.find(".guider_buttons")
if(t.buttons===null||t.buttons.length===0){r.remove()
return}for(var n=t.buttons.length-1;n>=0;n--){var o=t.buttons[n]
var d=e("<a></a>",{"class":"ka_guider_button",text:o.text})
if(typeof o.classString!=="undefined"&&o.classString!==null){d.addClass(o.classString)}r.append(d)
if(o.onclick){d.bind("click",o.onclick)}else if(!o.onclick&&o.action===i.ButtonAction.CLOSE){d.bind("click",function(){i.hideAll()})}else if(!o.onclick&&o.action===i.ButtonAction.NEXT){d.bind("click",function(){i.next()})}}if(t.buttonCustomHTML!==""){var l=e(t.buttonCustomHTML)
t.elem.find(".guider_buttons").append(l)}if(t.buttons.length==0){r.remove()}}
i._addXButton=function(t){var r=t.elem.find(".guider_close")
var n=e("<div></div>",{"class":"x_button",role:"button"})
r.append(n)
n.click(function(){i.hideAll()})}
i._attach=function(t){if(t===null){return}var r=t.elem.innerHeight()
var n=t.elem.innerWidth()
if(t.position===0||t.attachTo===null){t.elem.css("position","absolute")
t.elem.css("top",(e(window).height()-r)/3+e(window).scrollTop()+"px")
t.elem.css("left",(e(window).width()-n)/2+e(window).scrollLeft()+"px")
return}t.attachTo=e(t.attachTo)
var o=t.attachTo.offset()
var d=t.attachTo.innerHeight()
var l=t.attachTo.innerWidth()
var u=o.top
var a=o.left
var s=.9*i._arrowSize
var f={1:[-s-r,l-n],2:[0,s+l],3:[d/2-r/2,s+l],4:[d-r,s+l],5:[s+d,l-n],6:[s+d,l/2-n/2],7:[s+d,0],8:[d-r,-n-s],9:[d/2-r/2,-n-s],10:[0,-n-s],11:[-s-r,0],12:[-s-r,l/2-n/2]}
offset=f[t.position]
u+=offset[0]
a+=offset[1]
if(t.offset.top!==null){u+=t.offset.top}if(t.offset.left!==null){a+=t.offset.left}t.elem.css({position:"absolute",top:u,left:a})}
i._guiderById=function(e){if(typeof i._guiders[e]==="undefined"){throw new Error("Cannot find guider with id "+e)}return i._guiders[e]}
i._showOverlay=function(){e("#guider_overlay").fadeIn("fast",function(){if(this.style.removeAttribute){this.style.removeAttribute("filter")}e("#guider_click_mask").show()})}
i._highlightElement=function(t){e(t).css({"z-index":i._zIndexForHighlight})}
i._dehighlightElement=function(i){e(i).css({"z-index":""})}
i._hideOverlay=function(){e("#guider_overlay").fadeOut("fast")
e("#guider_click_mask").hide()}
i._initializeOverlay=function(){if(e("#guider_overlay").length===0){e('<div id="guider_overlay"></div>').hide().appendTo("body")
e('<div id="guider_click_mask"></div>').hide().click(function(e){e.preventDefault()
e.stopPropagation()}).appendTo("body")}}
i._styleArrow=function(t){var r=t.position||0
if(!r){return}var n=e(t.elem.find(".guider_arrow"))
var o={1:"guider_arrow_down",2:"guider_arrow_left",3:"guider_arrow_left",4:"guider_arrow_left",5:"guider_arrow_up",6:"guider_arrow_up",7:"guider_arrow_up",8:"guider_arrow_right",9:"guider_arrow_right",10:"guider_arrow_right",11:"guider_arrow_down",12:"guider_arrow_down"}
n.addClass(o[r])
var d=t.elem.innerHeight()
var l=t.elem.innerWidth()
var u=i._arrowSize/2
var a={1:["right",u],2:["top",u],3:["top",d/2-u],4:["bottom",u],5:["right",u],6:["left",l/2-u],7:["left",u],8:["bottom",u],9:["top",d/2-u],10:["top",u],11:["left",u],12:["left",l/2-u]}
var r=a[t.position]
n.css(r[0],r[1]+"px")}
i._showIfHashed=function(e){var t="guider="
var r=window.location.hash.indexOf(t)
if(r!==-1){var n=window.location.hash.substr(r+t.length)
if(e.id.toLowerCase()===n.toLowerCase()){i.show(e.id)}}}
i.next=function(){var e=i._guiders[i._currentGuiderID]
if(typeof e==="undefined"){return}var t=e.next||null
if(t!==null&&t!==""){var r=i._guiderById(t)
var n=r.overlay?true:false
i.hideAll(n)
i.show(t)}}
i.createGuider=function(t){if(t===null||t===undefined){t={}}myGuider=e.extend({},i._defaultSettings,t)
myGuider.id=myGuider.id||String(Math.floor(Math.random()*1e3))
var r=e(i._htmlSkeleton)
myGuider.elem=r
if(typeof myGuider.classString!=="undefined"&&myGuider.classString!==null){myGuider.elem.addClass(myGuider.classString)}myGuider.elem.css("width",myGuider.width+"px")
var n=r.find(".guider_title")
n.html(myGuider.title)
r.find(".guider_description").html(myGuider.description)
i._addButtons(myGuider)
if(myGuider.xButton){i._addXButton(myGuider)}r.hide()
r.appendTo("body")
r.attr("id",myGuider.id)
if(typeof myGuider.attachTo!=="undefined"&&myGuider!==null){i._attach(myGuider)
i._styleArrow(myGuider)}i._initializeOverlay()
i._guiders[myGuider.id]=myGuider
i._lastCreatedGuiderID=myGuider.id
if(myGuider.isHashable){i._showIfHashed(myGuider)}return i}
i.hideAll=function(t){var r=i._guiders[i._currentGuiderID]
if(r&&r.highlight){i._dehighlightElement(r.highlight)}e(".guider").fadeOut("fast")
if(typeof t!=="undefined"&&t===true){}else{i._hideOverlay()}return i}
i.show=function(t){if(!t&&i._lastCreatedGuiderID){t=i._lastCreatedGuiderID}var r=i._guiderById(t)
if(r.overlay){i._showOverlay()
if(r.highlight){i._highlightElement(r.highlight)}}i._attach(r)
if(r.onShow){r.onShow(r)}r.elem.fadeIn("fast")
var n=e(window).height()
var o=e(window).scrollTop()
var d=r.elem.offset()
var l=r.elem.height()
if(d.top-o<0||d.top+l+40>o+n){window.scrollTo(0,Math.max(d.top+l/2-n/2,0))}i._currentGuiderID=t
return i}
return i}.call(this,jQuery)
KAdefine("third_party/javascript-khansrc/Guiders-JS/guiders.js", function(require, requireWithVars, module, exports) {
});
KAdefine("javascript/scratchpads-package/jquery.button.js", function(require, requireWithVars, module, exports) {
$(document).delegate("a.ui-button",{mouseenter:function(){if(!$(this).hasClass("ui-state-disabled")){$(this).addClass("ui-state-hover")}},mouseleave:function(){$(this).removeClass("ui-state-hover")},click:function(t){t.preventDefault()
if(!$(this).hasClass("ui-state-disabled")){$(this).trigger("buttonClick")}}})
$.fn.buttonize=function(){return this.find(".ui-button").addClass("ui-widget ui-state-default ui-corner-all").find("span:first").addClass("ui-button-icon-primary ui-icon").end().filter(":has(.ui-button-text)").addClass("ui-button-text-icon-primary").end().not(":has(.ui-button-text)").addClass("ui-button-icon-only").append("<span class='ui-button-text'>&nbsp;</span>").end().end()}
});
KAdefine("javascript/scratchpads-package/jquery.hotnumber.js", function(require, requireWithVars, module, exports) {
(function(){var e,r,t,n,o,i,s,a,c,l=false,g="cute/Blank"
$.fn.hotNumber=function(e){var r=ScratchpadUI.editor.editor
var t=r.session.selection
if(e){h.call(r)}else{t.on("changeCursor",$.proxy(h,r))
t.on("changeSelection",$.proxy(h,r))
r.renderer.scrollBar.addEventListener("scroll",function(){if(s){m(r)}})
f(r)
d(r)}Record.handlers.hot=function(e){h.call(r)
x(r,e.hot)
m(r)}
return this}
function u(e){var r=e.indexOf(".")
if(r===-1){return 0}else{return e.length-(r+1)}}function d(e){if(!o){var r=$("<div class='scrubber-handle'/>").text("◄ ◆ ►").draggable({axis:"x",drag:function(){o.addClass("dragging")
var e=$(this).offset()
var r=$(this).parent().offset()
var t=e.left-r.left
var i=-u(n)
if(i<-5){i=-5}if(c){c(Math.round(t/2)*Math.pow(10,i))}},stop:function(){o.removeClass("dragging")
$(this).css({left:0,top:0})
h.call(e)}})
o=$("<div class='hotnumber'><div class='scrubber'></div><div class='arrow'></div></div>").appendTo("body").find(".scrubber").append(r).end().hide()}}function f(e){if(!i){var r=false,t=false
var n=function(r){var t=e.selection.getCursor(),n=e.renderer.textToScreenCoordinates(t.row,e.session.getDocument().getLine(t.row).length)
r.css({top:$(window).scrollTop()+n.pageY,left:n.pageX})}
i=$("<div class='hotnumber picker'><div id='hotpicker' class='picker'></div><div class='arrow'></div></div>").appendTo("body").find(".picker").ColorPicker({flat:true,onChange:function(e,r,t){if(c){c(t)}}}).end().bind("mouseenter",function(){r=true}).bind("mouseleave",function(){r=false
if(!t){n($(this))}e.focus()}).mousedown(function(){var e=$(this)
e.addClass("active")
t=true
$(document).one("mouseup",function(){e.removeClass("active")
t=false
if(!r){n(e)}})}).hide()}}function p(e){if(!a){var r=Templates.get("scratchpads.imagepicker")
var t=r({groups:OutputImages})
a=$("<div class='hotnumber imagepicker'>"+t+"<div class='arrow'></div></div>").appendTo("body").delegate(".image","click",function(){$(".imagepicker .active").removeClass("active")
if(c){$(this).addClass("active")
c($(this).attr("data-path"))}}).bind("mouseleave",function(){var r=e.selection.getCursor(),t=e.renderer.textToScreenCoordinates(r.row,e.session.getDocument().getLine(r.row).length)
$(this).css({top:$(window).scrollTop()+t.pageY,left:t.pageX})}).hide()}}function v(e){var r=0
for(var t=0;t<e.length;t++){if(e[t]==="("){r++}else if(e[t]===")"){r--}}return r>0}function h(){if(l){return}r=null
var u=this,d=u.selection.getCursor(),f=u.session.getDocument().getLine(d.row),h=f.slice(0,d.column),$=s,x
if(/\b(background|fill|stroke|color)(\s*)\(\s*([\s\d,]*)\s*$/.test(h)){var C=d.column-RegExp.$3.length
var k=C-RegExp.$1.length-RegExp.$2.length-1
var E=h.substring(0,k)
var S=RegExp.$1!=="color"||!v(E)
if(/^\s*((?:\s*\d+,){0,2}(?:\s*\d+)?)(?:,\s*\d+)?\s*(\)|$)/.test(f.slice(C))){var L=ace.require("ace/range").Range
e=RegExp.$1
r=new L(d.row,C,d.row,C+e.length)
if(RegExp.$2.length===0){l=true
Record.pauseLog()
u.session.getDocument().insertInLine({row:d.row,column:f.length},(e?"":e="255, 0, 0")+")"+(S?";":""))
u.selection.setSelectionRange(r)
u.selection.clearSelection()
Record.resumeLog()
l=false}c=function(e){b(u,e)}
x=i}}else if(/(\bgetImage\s*\(\s*)([^\)]*)$/.test(h)){var C=d.column-RegExp.$2.length
var T=h.substring(0,C-RegExp.$1.length)
if(/^([^\s]*?)\s*(\)|$)/.test(f.slice(C))){var L=ace.require("ace/range").Range
e=RegExp.$1
r=new L(d.row,C,d.row,C+e.length)
if(RegExp.$2.length===0){l=true
Record.pauseLog()
u.session.getDocument().insertInLine({row:d.row,column:f.length},(e?"":e='"'+g+'"')+")"+(v(T)?"":";"))
u.selection.setSelectionRange(r)
u.selection.clearSelection()
Record.resumeLog()
l=false}c=function(e){w(u,e)}
p(u)
w(u,e)
x=a}}else{var F=d.column-(/([\d.-]+)$/.test(h)?RegExp.$1.length:0)
if(/^([\d.-]+)/.test(f.slice(F))&&!isNaN(parseFloat(RegExp.$1))){var L=ace.require("ace/range").Range
e=RegExp.$1
n=e
t=parseFloat(e)
r=new L(d.row,F,d.row,F+e.length)
c=function(e){R(u,e)}
x=o}}if($&&$!==x){$.hide()}if(x){s=x
m(u)}else{s=null}}function m(r){if(!s){return}var t=r.selection.getCursor(),n=r.renderer.scroller.getBoundingClientRect(),a=r.renderer.textToScreenCoordinates(t.row,s!==o?r.session.getDocument().getLine(t.row).length:t.column),c=a.pageY-n.top
s.css({top:$(window).scrollTop()+a.pageY,left:a.pageX}).toggle(!(c<0||c>=n.height))
if(s===i){var l=e.replace(/\s/,"").split(",")
i.find(".picker").ColorPickerSetColor(l.length===3?{r:parseFloat(l[0]),g:parseFloat(l[1]),b:parseFloat(l[2])}:l.length===1&&!l[0]?{r:255,g:0,b:0}:{r:parseFloat(l[0]),g:parseFloat(l[0]),b:parseFloat(l[0])})}}function w(e,t){if(!r){return}t=t.replace(/"/g,"")
var n=t.split("/")
var o=n[0]
var i=n[1]
var s=g
_.each(OutputImages,function(e){if(e.groupName===o){_.each(e.images,function(e){if(e===i){s=t}})}})
t=s
$(".imagepicker .current-image img").attr("src","/stylesheets/scratchpads-exec-package/images/"+t+".png")
x(e,'"'+t+'"')}function b(e,t){if(!r){return}x(e,t.r+", "+t.g+", "+t.b)
ScratchpadUI.editor.trigger("colorPicker")}function R(e,o){if(!r){return}o=t+o
var i=o.toString()
var s=o.toFixed(5)
if(s.length<i.length){i=s}var a=u(n)
var c=u(i)
if(c>a){i=i.substr(0,i.length-(c-a))}else if(c<a){if(c===0){i+="."}i+=Array(1+(a-c)).join("0")}x(e,i)
ScratchpadUI.editor.trigger("scrubber")}function x(t,n){if(!r){return}l=true
Record.pauseLog()
r.end.column=r.start.column+e.length
t.session.replace(r,n)
if(s!==a){r.end.column=r.start.column+n.length
t.selection.setSelectionRange(r)}Record.resumeLog()
Record.log({hot:n})
l=false
e=n}})()
});
KAdefine("javascript/scratchpads-package/browser-notice.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,r=Handlebars.templates=Handlebars.templates||{}
r["scratchpads-package_browser-notice"]=module.exports=e(function(e,r,o,n,a){o=o||e.helpers
var t="",s,i,c,p=this,h="function",l=o.blockHelperMissing
function f(e,r){return"Uh oh!"}function g(e,r){return"You're using a browser that doesn't support the features that we\n        need in order to run the code of this page. Please switch your\n        browser to one of the following in order for it to work correctly:"}t+='<div id="browser-notice-container">\n    <div id="browser-notice">\n        <h3>'
i=o["_"]
s=i||r["_"]
c=p.program(1,f,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof s===h){s=s.call(r,c)}else{s=l.call(r,s,c)}if(s||s===0){t+=s}t+="</h3>\n        <p>"
i=o["_"]
s=i||r["_"]
c=p.program(3,g,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof s===h){s=s.call(r,c)}else{s=l.call(r,s,c)}if(s||s===0){t+=s}t+='</p>\n        <p>\n            <a href="https://www.google.com/chrome"><img src="/images/scratchapads/chrome.sm.png"/></a>\n            <a href="http://www.mozilla.org/en-US/firefox/new/"><img src="/images/scratchpads/gecko.sm.png"/></a>\n            <a href="http://www.apple.com/safari/"><img src="/images/scratchpads/webkit.sm.png"/></a>\n        </p>\n    </div>\n</div>'
return t})})()
});
KAdefine("javascript/scratchpads-package/goal-tab.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_goal-tab"]=module.exports=n(function(n,e,a,i,t){a=a||n.helpers
var l="",s,o,r,c,f=this,p="function",h=a.blockHelperMissing,u=a.helperMissing,v=void 0,g=this.escapeExpression
function d(n,e){var i="",t
i+="\n		<h1>"
r=a["_"]
t=r||n["_"]
c=f.program(2,m,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof t===p){t=t.call(n,c)}else{t=h.call(n,t,c)}if(t||t===0){i+=t}i+="</h1>\n		"
return i}function m(n,e){return"Congratulations!"}function b(n,e){var i="",t
i+="\n		<h1>"
r=a["_"]
t=r||n["_"]
c=f.program(5,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof t===p){t=t.call(n,c)}else{t=h.call(n,t,c)}if(t||t===0){i+=t}i+="</h1>\n		"
return i}function _(n,e){return"Thanks for watching!"}function x(n,e){return"POINTS EARNED"}function T(n,e){return"Save as a spin-off"}function y(n,e){var i="",t
i+='\n			<button id="complete-tutorial-continue" class="simple-button green">'
r=a.continueText
t=r||n.continueText
if(typeof t===p){t=t.call(n,{hash:{}})}else if(t===v){t=u.call(n,"continueText",{hash:{}})}i+=g(t)+"</button>\n		"
return i}function C(n,e){var i="",t
i+='\n<a class="scratchpad-challenge-feedback-btn" href="javascript:void(0);">('
r=a["_"]
t=r||n["_"]
c=f.program(14,k,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof t===p){t=t.call(n,c)}else{t=h.call(n,t,c)}if(t||t===0){i+=t}i+=")</a>\n"
return i}function k(n,e){return"Report a problem"}l+='<div class="goal-pane">\n	<div class="left-pane">\n		'
r=a.isChallenge
s=r||e.isChallenge
o=a["if"]
c=f.program(1,d,t)
c.hash={}
c.fn=c
c.inverse=f.program(4,b,t)
s=o.call(e,s,c)
if(s||s===0){l+=s}l+='\n		<div class="points">\n			<span class="point-label">\n			'
r=a["_"]
s=r||e["_"]
c=f.program(7,x,t)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===p){s=s.call(e,c)}else{s=h.call(e,s,c)}if(s||s===0){l+=s}l+='\n			</span>\n			<span class="point-counter">\n			<img src="/images/throbber-full.gif">\n			</span>\n		</div>\n	</div>\n	<div id="complete-critter" class="cool-critter"></div>\n	<div class="right-pane">\n		<button id="complete-spin-off" class="simple-button">'
r=a["_"]
s=r||e["_"]
c=f.program(9,T,t)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===p){s=s.call(e,c)}else{s=h.call(e,s,c)}if(s||s===0){l+=s}l+="</button>\n\n		"
r=a.continueText
s=r||e.continueText
o=a["if"]
c=f.program(11,y,t)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(e,s,c)
if(s||s===0){l+=s}l+="\n	</div>\n\n</div>\n\n"
r=a.isChallenge
s=r||e.isChallenge
o=a["if"]
c=f.program(13,C,t)
c.hash={}
c.fn=c
c.inverse=f.noop
s=o.call(e,s,c)
if(s||s===0){l+=s}return l})})()
});
KAdefine("javascript/scratchpads-package/community-programs.handlebars", function(require, requireWithVars, module, exports) {
(function(){var i=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_community-programs"]=module.exports=i(function(i,e,n,s,r){n=n||i.helpers
s=s||i.partials
var a="",o,t,c,l=this,d="function",v=n.blockHelperMissing
function p(i,e){return"Computer programming"}function f(i,e){return"Browse Programs"}function u(i,e){return"Explore all the programs and check out the featured ones. Vote for your favorites and become inspired to create your own!"}a+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        <div class="main-header">\n            <div class="topic-info">\n            <div class="topic-info-inner">\n                <div class="welcome-info tutorial-welcome">\n                    <div class=\'subject-breadcrumb\'><a href="/cs" class="subject-link" data-id="cs"><i class="icon-caret-left"></i>'
t=n["_"]
o=t||e["_"]
c=l.program(1,p,r)
c.hash={}
c.fn=c
c.inverse=l.noop
if(t&&typeof o===d){o=o.call(e,c)}else{o=v.call(e,o,c)}if(o||o===0){a+=o}a+='</a></div>\n                    <div class="topic-title">'
t=n["_"]
o=t||e["_"]
c=l.program(3,f,r)
c.hash={}
c.fn=c
c.inverse=l.noop
if(t&&typeof o===d){o=o.call(e,c)}else{o=v.call(e,o,c)}if(o||o===0){a+=o}a+='</div>\n\n                    <div id="tutorial-sorter"></div>\n\n                    <div class="topic-desc">'
t=n["_"]
o=t||e["_"]
c=l.program(5,u,r)
c.hash={}
c.fn=c
c.inverse=l.noop
if(t&&typeof o===d){o=o.call(e,c)}else{o=v.call(e,o,c)}if(o||o===0){a+=o}a+='</div>\n                </div>\n            </div>\n            </div>\n        </div>\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="sub-header-spacer tutorial-color"></div>\n            <div class="spin-offs"></div>\n            <div class="throbber-container">\n                '
o=e
o=l.invokePartial(s["shared_throbber-grid"],"shared_throbber-grid",o,n,s)
if(o||o===0){a+=o}a+="\n            </div>\n        </div>\n	</div>\n	</div>\n</div>\n"
return a})})()
});
KAdefine("javascript/scratchpads-package/dev-controls-modal.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["scratchpads-package_dev-controls-modal"]=module.exports=n(function(n,a,e,l,o){e=e||n.helpers
var s="",t,c,i,r=this,d="function",p=e.blockHelperMissing
function v(n,a){return"Developer-Only Settings"}function u(n,a){return"Save & Close"}s+='\n\n<div class="modal hide fade scratchpad-dev-controls-modal">\n\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
c=e["_"]
t=c||a["_"]
i=r.program(1,v,o)
i.hash={}
i.fn=i
i.inverse=r.noop
if(c&&typeof t===d){t=t.call(a,i)}else{t=p.call(a,t,i)}if(t||t===0){s+=t}s+='</h2>\n    </div>\n\n    <div class="modal-body">\n    <fieldset>\n        <div class="control-group">\n            <label class="control-label" for="category-regular">\n                Category\n            </label>\n            <div class="scratchpad-category controls">\n                <select name="category">\n                    <option value="" selected>Regular</option>\n                    <option value="tutorial">Tutorial</option>\n                    <option value="challenge">Challenge</option>\n                    <option value="project">Project</option>\n                    <option value="documentation">Documentation</option>\n                    <option value="official">Official</option>\n                    <option value="sanctioned">Sanctioned</option>\n                </select>\n            </div>\n        </div>\n\n        <div class="control-group trusted-version" style="display: none">\n            <label class="control-label">\n                Trusted Revision\n            </label>\n            <p class="trusted-desc">User scratchpads marked "Sanctioned" must\n            have a trusted version set in order to be used in tutorials.</p>\n            <div class="trusted-version-panel"></div>\n        </div>\n\n        <div class="control-group">\n            <label class="control-label">\n                Canvas Size\n            </label>\n            <div class="controls">\n                <input type="number" name="scratchpad-width" value="400"\n                    min="400" max="940"/> x\n                <input type="number" name="scratchpad-height" value="400"\n                    min="400" max="600"/>\n            </div>\n        </div>\n\n        <div class="control-group">\n            <div class="controls">\n                <input type="checkbox" name="scratchpad-canvas-only"/>\n                <label for="scratchpad-hide-editor">Show only the canvas when\n                    embedded in a tutorial.</label>\n            </div>\n        </div>\n\n        <div class="control-group">\n            <label class="control-label" for="scratchpad-difficulty-select">\n                Difficulty\n            </label>\n            <div class="controls">\n                <select name="scratchpad-difficulty-select"></select>\n            </div>\n        </div>\n\n        <div class="control-group">\n            <label class="control-label" for="scratchpad-config-version">\n                Config Version\n            </label>\n            <div class="controls">\n                <select name="scratchpad-config-version"></select>\n            </div>\n        </div>\n\n        <div class="control-group">\n            <label class="control-label" for="scratchpad-youtube-id">\n                Youtube ID\n            </label>\n            <div class="controls">\n                <input name="scratchpad-youtube-id">\n            </div>\n        </div>\n\n        <div class="control-group">\n            <label class="control-label" for="scratchpad-description">\n                Description\n            </label>\n            <div class="controls">\n                <textarea name="scratchpad-description"></textarea>\n            </div>\n        </div>\n\n    </fieldset>\n    </div>\n\n    <div class="modal-footer">\n        <button data-dismiss="modal" class="scratchpad-dev-controls-save simple-button">'
c=e["_"]
t=c||a["_"]
i=r.program(3,u,o)
i.hash={}
i.fn=i
i.inverse=r.noop
if(c&&typeof t===d){t=t.call(a,i)}else{t=p.call(a,t,i)}if(t||t===0){s+=t}s+="</span>\n    </div>\n\n</div>\n"
return s})})()
});
KAdefine("javascript/scratchpads-package/dev-trusted-revision-panel.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["scratchpads-package_dev-trusted-revision-panel"]=module.exports=e(function(e,n,r,i,s){r=r||e.helpers
var t="",a,u,o,d,l=this,v="function",c=r.helperMissing,f=void 0,h=this.escapeExpression
function p(e,n){var i="",s,t
i+="\n  "
o=r.currentRevisionTrusted
s=o||e.currentRevisionTrusted
t=r["if"]
d=l.program(2,b,n)
d.hash={}
d.fn=d
d.inverse=l.program(4,m,n)
s=t.call(e,s,d)
if(s||s===0){i+=s}i+="\n"
return i}function b(e,n){return'\n  <div class="mark-trusted"></div>\n  '}function m(e,n){return'\n  <button class="simple-button primary mark-trusted">Mark trusted</button>\n  '}function R(e,n){return'\n<button class="simple-button primary mark-trusted">Mark trusted</button>\n'}function g(e,n){var i="",s,t
i+='\n  <button class="simple-button secondary see-trusted">View trusted</button>\n  '
o=r.currentRevisionTrusted
s=o||e.currentRevisionTrusted
t=r["if"]
d=l.program(9,y,n)
d.hash={}
d.fn=d
d.inverse=l.program(11,T,n)
s=t.call(e,s,d)
if(s||s===0){i+=s}i+="\n"
return i}function y(e,n){return'\n  <div class="rev-info"><b>Trusted revision:</b> Current revision is trusted.</div>\n  '}function T(e,n){var i="",s
i+='\n  <div class="rev-info"><b>Trusted revision:</b> '
o=r.trustedRevision
s=o||e.trustedRevision
s=s===null||s===undefined||s===false?s:s.id
if(typeof s===v){s=s.call(e,{hash:{}})}else if(s===f){s=c.call(e,"trustedRevision.id",{hash:{}})}i+=h(s)+", created "
o=r.trustedRevision
s=o||e.trustedRevision
s=s===null||s===undefined||s===false?s:s.created
if(typeof s===v){s=s.call(e,{hash:{}})}else if(s===f){s=c.call(e,"trustedRevision.created",{hash:{}})}i+=h(s)+".</div>\n  "
return i}function k(e,n){return'\n  <div class="see-trusted"></div>\n  <div class="rev-info"><b>Trusted revision:</b> No revision selected.</div>\n'}o=r.trustedRevision
a=o||n.trustedRevision
u=r["if"]
d=l.program(1,p,s)
d.hash={}
d.fn=d
d.inverse=l.program(6,R,s)
a=u.call(n,a,d)
if(a||a===0){t+=a}t+='\n<div class="rev-info"><b>Current revision:</b> '
o=r.revision
a=o||n.revision
a=a===null||a===undefined||a===false?a:a.id
if(typeof a===v){a=a.call(n,{hash:{}})}else if(a===f){a=c.call(n,"revision.id",{hash:{}})}t+=h(a)+", created "
o=r.revision
a=o||n.revision
a=a===null||a===undefined||a===false?a:a.created
if(typeof a===v){a=a.call(n,{hash:{}})}else if(a===f){a=c.call(n,"revision.created",{hash:{}})}t+=h(a)+".</div>\n"
o=r.trustedRevision
a=o||n.trustedRevision
u=r["if"]
d=l.program(8,g,s)
d.hash={}
d.fn=d
d.inverse=l.program(13,k,s)
a=u.call(n,a,d)
if(a||a===0){t+=a}t+="\n"
return t})})()
});
KAdefine("javascript/scratchpads-package/dev-record.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["scratchpads-package_dev-record"]=module.exports=e(function(e,n,t,a,o){t=t||e.helpers
var s="",r,l,i,c=this,u="function",p=t.blockHelperMissing
function h(e,n){return"Start New Chunk"}function f(e,n){return"Discard Recorded Chunk"}function d(e,n){return"Save Recorded Chunk"}function v(e,n){return"Refresh Editor State"}function y(e,n){return"Last audio chunk recorded: "}function m(e,n){return"Empty"}function b(e,n){return"All saved audio chunks: "}function g(e,n){return"Empty"}function k(e,n){return'These buttons let you record in chunks, rather than having to get everything right in one go. There is no way to edit a chunk once you save it, sorry. Also, because command playback has some weird bugs, sometimes discarding a chunk might get you in a bad state. If that happens, just hit "Refresh editor state" and hope for the best. This is pretty brittle -- just record everything in one chunk if you want the old system back :)'}function _(e,n){return'<strong>DO NOT TOUCH THE EDITOR (or the canvas) between chunks -- especially not the cursor or selection.</strong> If you do, you might destroy your whole recording -- try hitting "Refresh Editor State" to recover.'}s+='<div class="scratchpad-dev-record">\n    <div class="scratchpad-dev-record-buttons">\n        <button class="scratchpad-dev-new-chunk simple-button pull-left">'
l=t["_"]
r=l||n["_"]
i=c.program(1,h,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='</button>\n        <button class="scratchpad-dev-discard-chunk simple-button pull-left">'
l=t["_"]
r=l||n["_"]
i=c.program(3,f,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='</button>\n        <button class="scratchpad-dev-save-chunk simple-button pull-left">'
l=t["_"]
r=l||n["_"]
i=c.program(5,d,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='</button>\n        <button class="scratchpad-dev-refresh-editor-state simple-button pull-left">'
l=t["_"]
r=l||n["_"]
i=c.program(7,v,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='</button>\n    </div>\n    <br />\n    <div class="show-audio-chunks-wrapper">\n        <p>'
l=t["_"]
r=l||n["_"]
i=c.program(9,y,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='<span class="last-audio-chunk">'
l=t["_"]
r=l||n["_"]
i=c.program(11,m,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+="</span></p>\n        <p>"
l=t["_"]
r=l||n["_"]
i=c.program(13,b,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+='<span class="saved-audio-chunks">'
l=t["_"]
r=l||n["_"]
i=c.program(15,g,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+="</span></p>\n    </div>\n    <p>"
l=t.i18nDoNotTranslate
r=l||n.i18nDoNotTranslate
i=c.program(17,k,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+="</p>\n    <p>"
l=t.i18nDoNotTranslate
r=l||n.i18nDoNotTranslate
i=c.program(19,_,o)
i.hash={}
i.fn=i
i.inverse=c.noop
if(l&&typeof r===u){r=r.call(n,i)}else{r=p.call(n,r,i)}if(r||r===0){s+=r}s+="</p>\n</div>"
return s})})()
});
KAdefine("javascript/scratchpads-package/imagepicker.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_imagepicker"]=module.exports=a(function(a,e,s,i,l){s=s||a.helpers
var c="",h,n,r,t,p=this,o="function",f=s.helperMissing,g=void 0,m=this.escapeExpression
function u(a,e){var i="",l,c
i+='\n<div class="image-group">\n    <h3 class="image-group">'
r=s.groupName
l=r||a.groupName
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===g){l=f.call(a,"groupName",{hash:{}})}i+=m(l)+"</h3>\n    "
r=s.cite
l=r||a.cite
c=s["if"]
t=p.program(2,d,e)
t.hash={}
t.fn=t
t.inverse=p.noop
l=c.call(a,l,t)
if(l||l===0){i+=l}i+="\n    "
r=s.images
l=r||a.images
c=s.each
t=p.programWithDepth(v,e,a)
t.hash={}
t.fn=t
t.inverse=p.noop
l=c.call(a,l,t)
if(l||l===0){i+=l}i+="\n</div>\n"
return i}function d(a,e){var i="",l
i+='\n        <p><a href="'
r=s.citeLink
l=r||a.citeLink
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===g){l=f.call(a,"citeLink",{hash:{}})}i+=m(l)+'" target="_blank">'
r=s.cite
l=r||a.cite
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===g){l=f.call(a,"cite",{hash:{}})}i+=m(l)+"</a></p>\n    "
return i}function v(a,e,i){var l="",c
l+='\n    <div class="image" data-path="'
r=s.groupName
c=r||i.groupName
if(typeof c===o){c=c.call(a,{hash:{}})}else if(c===g){c=f.call(a,"...groupName",{hash:{}})}l+=m(c)+"/"
c=a
if(typeof c===o){c=c.call(a,{hash:{}})}else if(c===g){c=f.call(a,"this",{hash:{}})}l+=m(c)+'">\n        <img src="/stylesheets/scratchpads-exec-package/images/'
r=s.groupName
c=r||i.groupName
if(typeof c===o){c=c.call(a,{hash:{}})}else if(c===g){c=f.call(a,"...groupName",{hash:{}})}l+=m(c)+"/"
c=a
if(typeof c===o){c=c.call(a,{hash:{}})}else if(c===g){c=f.call(a,"this",{hash:{}})}l+=m(c)+'.png"/>\n        <span class="name">'
c=a
if(typeof c===o){c=c.call(a,{hash:{}})}else if(c===g){c=f.call(a,"this",{hash:{}})}l+=m(c)+"</span>\n    </div>\n    "
return l}c+='<div class="current-image"><img src="/stylesheets/scratchpads-exec-package/images/cute/Blank.png"/></div>\n<div class="image-groups">\n'
r=s.groups
h=r||e.groups
n=s.each
t=p.program(1,u,l)
t.hash={}
t.fn=t
t.inverse=p.noop
h=n.call(e,h,t)
if(h||h===0){c+=h}c+="\n</div>\n"
return c})})()
});
KAdefine("javascript/scratchpads-package/share-modal.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_share-modal"]=module.exports=n(function(n,e,a,t,r){a=a||n.helpers
var s="",l,o,i,c,p=this,h="function",f=a.blockHelperMissing
function u(n,e){var t="",r
t+='\n<div class="modal hide fade scratchpad-share-modal">\n\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
i=a["_"]
r=i||n["_"]
c=p.program(2,d,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='</h2>\n    </div>\n\n    <div class="modal-body">\n        <p class="scratchpad-share-warning alert" style="display:none;">\n            '
i=a["_"]
r=i||n["_"]
c=p.program(4,b,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+="\n            <br>\n        </p>\n\n        <p>"
i=a["_"]
r=i||n["_"]
c=p.program(6,m,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='</p>\n        <input class="scratchpad-share-url"></input>\n        <br>\n        <button class="simple-button scratchpad-share-facebook-button">\n            <span class="icon-facebook icon-large"></span>\n            '
i=a["_"]
r=i||n["_"]
c=p.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='\n        </button>\n        <button class="simple-button scratchpad-share-twitter-button">\n            <span class="icon-twitter icon-large"></span>\n            '
i=a["_"]
r=i||n["_"]
c=p.program(10,g,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='\n        </button>\n        <button class="simple-button scratchpad-share-email-button">\n            <span class="icon-envelope icon-large"></span>\n            '
i=a["_"]
r=i||n["_"]
c=p.program(12,_,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='\n        </button>\n\n        <!-- Allow the user to embed the scratchpad on their\n             site using an iframe -->\n        <div class="scratchpad-share-embed">\n            <p>'
i=a["_"]
r=i||n["_"]
c=p.program(14,y,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='</p>\n            <textarea></textarea>\n            <br>\n            <label><input type="checkbox" name="hide-editor" value="no"/>\n                '
i=a["_"]
r=i||n["_"]
c=p.program(16,k,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='</label>\n            <label><input type="checkbox" name="hide-buttons"  value="no"/>\n                '
i=a["_"]
r=i||n["_"]
c=p.program(18,H,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+='</label>\n            <label><input type="checkbox" name="hide-author"  value="no"/>\n                '
i=a["_"]
r=i||n["_"]
c=p.program(20,w,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(i&&typeof r===h){r=r.call(n,c)}else{r=f.call(n,r,c)}if(r||r===0){t+=r}t+="</label>\n        </div>\n\n    </div>\n\n</div>\n"
return t}function d(n,e){return"Share this Program"}function b(n,e){return"Warning: there are un-saved changes in this program."}function m(n,e){return"Share this program by using this link:"}function v(n,e){return"Share"}function g(n,e){return"Tweet"}function _(n,e){return"Email"}function y(n,e){return"Have a website? Embed this program on your site:"}function k(n,e){return"Hide Editor"}function H(n,e){return"Hide Buttons"}function w(n,e){return"Hide Author and Playback"}i=a.scratchpad
l=i||e.scratchpad
o=a["if"]
c=p.program(1,u,r)
c.hash={}
c.fn=c
c.inverse=p.noop
l=o.call(e,l,c)
if(l||l===0){s+=l}s+="\n"
return s})})()
});
KAdefine("javascript/scratchpads-package/play-page.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_play-page"]=module.exports=n(function(n,e,a,r,i){a=a||n.helpers
r=r||n.partials
var l="",s,t,o,c,f=this,d="function",p=a.blockHelperMissing,h=a.helperMissing,u=void 0,v=this.escapeExpression
function g(n,e){var r="",i,l
r+='\n    <!-- If the scratchpad is a project or it was forked from a project. -->\n    <div id="challenge-task-container"\n            class="task-container '
o=a.projectTopic
i=o||n.projectTopic
i=i===null||i===undefined||i===false?i:i.root
i=i===null||i===undefined||i===false?i:i.nodeSlug
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"projectTopic.root.nodeSlug",{hash:{}})}r+=v(i)+'">\n        <div class="task-header-container">\n            <div class="task-root-nav">\n                <a href="/cs" class="domain">'
o=a["_"]
i=o||n["_"]
c=f.program(2,m,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                "
o=a.isDocumentation
i=o||n.isDocumentation
l=a["if"]
c=f.program(4,b,e)
c.hash={}
c.fn=c
c.inverse=f.program(7,_,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n            </div>\n            <div class="task-header domain-color'
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(11,w,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='">\n                '
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(13,P,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                "
o=a.originScratchpad
i=o||n.originScratchpad
l=a["if"]
c=f.program(15,T,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n                <div class="buttons">\n\n                    '
o=a.isNew
i=o||n.isNew
l=a.unless
c=f.program(22,A,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                </div>\n\n                <!-- Title bar above editor + canvas -->\n                "
o=a.embedded
i=o||n.embedded
l=a["if"]
c=f.program(66,se,e)
c.hash={}
c.fn=c
c.inverse=f.program(68,te,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                "
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(71,ce,e)
c.hash={}
c.fn=c
c.inverse=f.program(73,fe,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n                <div class="clear"></div>\n            </div>\n        </div>\n        '
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(87,_e,e)
c.hash={}
c.fn=c
c.inverse=f.program(90,Se,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n    </div>\n    "
return r}function m(n,e){return"Computer Programming"}function b(n,e){var r="",i
r+='\n                    <a href="/cs/program-docs" class="topic">'
o=a["_"]
i=o||n["_"]
c=f.program(5,y,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                "
return r}function y(n,e){return"Documentation"}function _(n,e){var r="",i,l
r+="\n                    "
o=a.isOwner
i=o||n.isOwner
l=a["if"]
c=f.program(8,k,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                "
return r}function k(n,e){var r="",i
r+='\n                        <a href="'
o=a.profileRoot
i=o||n.profileRoot
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"profileRoot",{hash:{}})}r+=v(i)+'programs" class="topic">'
o=a["_"]
i=o||n["_"]
c=f.program(9,S,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                    "
return r}function S(n,e){return"My Programs"}function w(n,e){return" has-progress"}function P(n,e){return'\n                <div class="challenge-progress">\n                    <div id="challenge-status-message"></div>\n                    <div id="challenge-progress-bar">\n                    </div>\n                </div>\n                '}function T(n,e){var r="",i,l
r+='\n                <div class="task-description">\n                    <span class="tutorial-back">\n                    '
o=a["_"]
i=o||n["_"]
c=f.program(16,U,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                    "
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.deleted
l=a["if"]
c=f.program(18,D,e)
c.hash={}
c.fn=c
c.inverse=f.program(20,C,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                    </span>\n                </div>\n                "
return r}function U(n,e){return"Based on:"}function D(n,e){var r="",i
r+="\n                        "
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.translatedTitle",{hash:{}})}r+=v(i)+"\n                    "
return r}function C(n,e){var r="",i
r+='\n                    <a href="'
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.url",{hash:{}})}r+=v(i)+'">\n                        '
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.translatedTitle",{hash:{}})}r+=v(i)+"\n                    </a>\n                    "
return r}function A(n,e){var r="",i,l
r+="\n\n                        "
o=a.embedded
i=o||n.embedded
l=a.unless
c=f.program(23,F,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n\n                        "
o=a.isOwner
i=o||n.isOwner
l=a["if"]
c=f.program(26,j,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                        "
o=a.isDeveloper
i=o||n.isDeveloper
l=a["if"]
c=f.program(29,R,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n\n                        "
o=a.embedded
i=o||n.embedded
l=a["if"]
c=f.program(32,E,e)
c.hash={}
c.fn=c
c.inverse=f.program(36,B,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n\n                        <!-- Share Button -->\n                        <button class="simple-button pull-right scratchpad-share-button">\n                            <i class="icon-share icon-large"></i>\n                            '
o=a["_"]
i=o||n["_"]
c=f.program(41,q,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                        </button>\n                        "
r+="\n                        "
o=a["private"]
i=o||n["private"]
l=a["if"]
c=f.program(43,L,e)
c.hash={}
c.fn=c
c.inverse=f.program(47,Y,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                    "
return r}function F(n,e){var r="",i
r+='\n                        <!-- New Program button -->\n                        <a href="/cs/new" class="new-scratchpad">\n                            <input type="button" class="simple-button green"\n                                value="'
o=a["_"]
i=o||n["_"]
c=f.program(24,x,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='" />\n                        </a>\n                        '
return r}function x(n,e){return"New Program"}function j(n,e){var r="",i
r+='\n                        <!-- Hard delete button -->\n                        <button class="scratchpad-delete-button simple-button warning pull-right">\n                            '
o=a["_"]
i=o||n["_"]
c=f.program(27,N,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                        </button>\n                        "
return r}function N(n,e){return"Delete"}function R(n,e){var r="",i
r+='\n                            <!-- Developer-only Settings Button -->\n                            <button class="dev-settings-button simple-button pull-right">\n                                '
o=a["_"]
i=o||n["_"]
c=f.program(30,W,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</button>\n                        "
return r}function W(n,e){return"Settings"}function E(n,e){var r="",i,l
r+="\n                            "
o=a.canEdit
i=o||n.canEdit
l=a["if"]
c=f.program(33,H,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                        "
return r}function H(n,e){var r="",i
r+='\n                                <a class="simple-button pull-right" href="'
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"scratchpad.url",{hash:{}})}r+=v(i)+'" target="_blank">'
o=a["_"]
i=o||n["_"]
c=f.program(34,M,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                            "
return r}function M(n,e){return"Edit"}function B(n,e){var r="",i,l
r+="\n                            "
o=a.tutorialUrl
i=o||n.tutorialUrl
l=a["if"]
c=f.program(37,I,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                        "
return r}function I(n,e){var r="",i,l
r+="\n                                "
o=a.canEdit
i=o||n.canEdit
l=a["if"]
c=f.program(38,O,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                            "
return r}function O(n,e){var r="",i
r+='\n                                    <a class="simple-button pull-right" href="'
o=a.tutorialUrl
i=o||n.tutorialUrl
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"tutorialUrl",{hash:{}})}r+=v(i)+'" target="_blank">'
o=a["_"]
i=o||n["_"]
c=f.program(39,V,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                                "
return r}function V(n,e){return"View in Tutorial"}function q(n,e){return"Share"}function L(n,e){var r="",i,l
r+="\n                            "
o=a.creatorProfile
i=o||n.creatorProfile
l=a["if"]
c=f.program(44,K,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                        "
return r}function K(n,e){var r="",i
r+='\n                            <span class="pull-right" id="child-account-notice">\n                                '
o=a["_"]
i=o||n["_"]
c=f.program(45,X,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</span>\n                            "
return r}function X(n,e){return"Child account program"}function Y(n,e){var r="",i,l
r+="\n                        <!-- Voting Controls -->\n                        "
o=a.key
i=o||n.key
l=a["if"]
c=f.program(48,G,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                        <!-- Moderators area, for non official programs-->\n                        "
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.isPublished
l=a.unless
c=f.program(50,Z,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                        "
return r}function G(n,e){var i="",l
i+='\n                        <div class="scratchpad-vote pull-right">\n                            '
l=n
l=f.invokePartial(r["discussion_discussion-meta"],"discussion_discussion-meta",l,a,r)
if(l||l===0){i+=l}i+="\n                        </div>\n                        "
return i}function Z(n,e){var r="",i,l
r+='\n                        <div class="clear"></div>\n                        <div class="scratchpad-restricted-buttons-area">\n\n                            <a class="pull-right" href="/cs/program-guidelines" target="_blank">'
o=a["_"]
i=o||n["_"]
c=f.program(51,z,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n\n                            "
o=a.isModerator
i=o||n.isModerator
l=a["if"]
c=f.program(53,J,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                        </div>\n                        "
return r}function z(n,e){return"Program Guidelines"}function J(n,e){var r="",i,l
r+='\n                            <!-- Soft delete Button -->\n                            <button class="scratchpad-softdelete-button simple-button pull-right">\n                                '
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.deleted
l=a["if"]
c=f.program(54,Q,e)
c.hash={}
c.fn=c
c.inverse=f.program(57,ne,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n                            </button>\n\n                            <!-- Hide from hotlist -->\n                            <button class="scratchpad-hotlist-button simple-button pull-right">\n                                '
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.hideFromHotlist
l=a["if"]
c=f.program(60,ae,e)
c.hash={}
c.fn=c
c.inverse=f.program(63,ie,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                            </button>\n                            "
return r}function Q(n,e){var r="",i
r+="\n                                "
o=a["_"]
i=o||n["_"]
c=f.program(55,$,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                                "
return r}function $(n,e){return"Undo hide everywhere"}function ne(n,e){var r="",i
r+="\n                                "
o=a["_"]
i=o||n["_"]
c=f.program(58,ee,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                                "
return r}function ee(n,e){return"Hide everywhere"}function ae(n,e){var r="",i
r+="\n                                "
o=a["_"]
i=o||n["_"]
c=f.program(61,re,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                                "
return r}function re(n,e){return"Undo hide from hotlist"}function ie(n,e){var r="",i
r+="\n                                "
o=a["_"]
i=o||n["_"]
c=f.program(64,le,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                                "
return r}function le(n,e){return"Hide from hotlist"}function se(n,e){var r="",i
r+='\n                <h2 id="scratchpad-title" class="task-title">\n                    '
o=a.translatedTitle
i=o||n.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"translatedTitle",{hash:{}})}r+=v(i)+"</h2>\n                "
return r}function te(n,e){var r="",i
r+='\n                <div class="title-box">\n                    <button id="edit-title" class="simple-button">\n                        '
o=a["_"]
i=o||n["_"]
c=f.program(69,oe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</button>\n                    <h2 id="scratchpad-title" class="task-title">\n                        '
o=a.translatedTitle
i=o||n.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"translatedTitle",{hash:{}})}r+=v(i)+"</h2>\n                </div>\n                "
return r}function oe(n,e){return"Edit Title"}function ce(n,e){var r="",i
r+='\n                <div id="challenge-description" class="task-description" title="'
o=a.translatedDescription
i=o||n.translatedDescription
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"translatedDescription",{hash:{}})}r+=v(i)+'">\n                    '
o=a.translatedDescription
i=o||n.translatedDescription
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"translatedDescription",{hash:{}})}if(i||i===0){r+=i}r+="\n                </div>\n                "
return r}function fe(n,e){var r="",i,l
r+="\n                "
r+="\n                "
o=a.creatorProfile
i=o||n.creatorProfile
l=a["if"]
c=f.program(74,de,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                "
return r}function de(n,e){var r="",i,l
r+="\n                "
o=a.isDocumentation
i=o||n.isDocumentation
l=a.unless
c=f.program(75,pe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                "
return r}function pe(n,e){var r="",i,l
r+='\n                <div class="task-description">\n                <div class="author">\n                    '
o=a["_"]
i=o||n["_"]
c=f.program(76,he,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n\n                        "
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.nickname
l=a["if"]
c=f.program(78,ue,e)
c.hash={}
c.fn=c
c.inverse=f.program(81,ge,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n                    "
o=a.embedded
i=o||n.embedded
l=a.unless
c=f.program(84,be,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                </div>\n                </div>\n                "
return r}function he(n,e){return"Created by:"}function ue(n,e){var r="",i,l
r+='\n                        <a href="'
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.is_public
l=a["if"]
c=f.program(79,ve,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='"\n                            class="author-nickname profile-programs" data-user-id="'
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.userId
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"scratchpad.userId",{hash:{}})}r+=v(i)+'">'
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.nickname
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"creatorProfile.nickname",{hash:{}})}r+=v(i)+"</a>\n                        "
return r}function ve(n,e){var r
o=a.creatorProfile
r=o||n.creatorProfile
r=r===null||r===undefined||r===false?r:r.profile_root
if(typeof r===d){r=r.call(n,{hash:{}})}else if(r===u){r=h.call(n,"creatorProfile.profile_root",{hash:{}})}return v(r)}function ge(n,e){var r="",i
r+="\n                        "
o=a["_"]
i=o||n["_"]
c=f.program(82,me,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                        "
return r}function me(n,e){return"New visitor"}function be(n,e){var r="",i
r+="\n                    \n                    ("
o=a["_"]
i=o||n["_"]
c=f.program(85,ye,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='\n                    <time class="timeago" datetime="'
o=a.lastUpdatedTime
i=o||n.lastUpdatedTime
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"lastUpdatedTime",{hash:{}})}r+=v(i)+'">'
o=a.lastUpdatedTime
i=o||n.lastUpdatedTime
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"lastUpdatedTime",{hash:{}})}r+=v(i)+"</time>)\n                    "
return r}function ye(n,e){return"Updated"}function _e(n,e){var r="",i
r+='\n        <div id="objectives-pane">\n            <div class="objectives-loading">\n                <img src="/images/throbber-full.gif">\n                <span>'
o=a["_"]
i=o||n["_"]
c=f.program(88,ke,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</span>\n            </div>\n        </div>\n        <div class="challenge-warning span-full-column">\n            <span id="challenge-warning-message">\n            </span>\n        </div>\n        '
return r}function ke(n,e){return"Waiting for code to run..."}function Se(n,e){var r="",i,l
r+="\n        "
o=a.isUneditableProjectFork
i=o||n.isUneditableProjectFork
l=a.unless
c=f.program(91,we,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n        "
return r}function we(n,e){var r="",i,l
r+="\n        "
o=a.translatedDescription
i=o||n.translatedDescription
l=a["if"]
c=f.program(92,Pe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n        "
return r}function Pe(n,e){var r="",i
r+='\n        <div id="objectives-pane" class="scratchpad-objectives-notchallenge">\n            <div class="challenge-step">\n                <div class="test-description full-width">\n                    '
o=a.translatedDescription
i=o||n.translatedDescription
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"translatedDescription",{hash:{}})}if(i||i===0){r+=i}r+="\n                </div>\n            </div>\n        </div>\n        "
return r}function Te(n,e){var r,i
o=a.isDeveloper
r=o||n.isDeveloper
i=a["if"]
c=f.program(95,Ue,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function Ue(n,e){var i="",l
i+="\n        "
l=n
l=f.invokePartial(r["scratchpads_dev-controls-modal"],"scratchpads_dev-controls-modal",l,a,r)
if(l||l===0){i+=l}i+="\n    "
return i}function De(n,e){var i="",l
i+="\n        "
l=n
l=f.invokePartial(r["scratchpads_share-modal"],"scratchpads_share-modal",l,a,r)
if(l||l===0){i+=l}i+="\n    "
return i}function Ce(n,e){var r="",i
r+='\n        <div class="spinoff-notice" style="display: none;">\n            <strong>'
o=a["_"]
i=o||n["_"]
c=f.program(100,Ae,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</strong>\n            <a href="#spinoffs-tab-header" class="simple-button green pull-right"><span class="icon-th-list"></span> '
o=a["_"]
i=o||n["_"]
c=f.program(102,Fe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n        </div>\n        "
return r}function Ae(n,e){return"You already have a spin-off of this program!"}function Fe(n,e){return"View Your Spin-offs"}function xe(n,e){return"Loading..."}function je(n,e){return"Restart"}function Ne(n,e){var r,i
o=a.canRecord
r=o||n.canRecord
i=a["if"]
c=f.program(109,Re,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function Re(n,e){var r="",i,l
r+='\n                <div id="draw-widgets" style="display:none;">\n                    <a href="" id="draw-clear-button" class="ui-button">\n                        <span class="ui-icon-cancel"></span>\n                    </a>\n                    '
o=a.colors
i=o||n.colors
l=a.each
c=f.program(110,We,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                </div>\n                "
return r}function We(n,e){var a="",r
a+='\n                    <a href="" class="draw-color-button" id="'
r=n
if(typeof r===d){r=r.call(n,{hash:{}})}else if(r===u){r=h.call(n,"this",{hash:{}})}a+=v(r)+'">\n                        <span></span>\n                    </a>\n                    '
return a}function Ee(n,e){var r="",i
r+='\n                <button id="save-button"\n                    class="simple-button green pull-left" style="display:none;">'
o=a["_"]
i=o||n["_"]
c=f.program(113,He,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</button>\n                "
return r}function He(n,e){return"Save"}function Me(n,e){var r="",i,l
r+="\n                    "
o=a.embeddedAndWithFrame
i=o||n.embeddedAndWithFrame
l=a["if"]
c=f.program(116,Be,e)
c.hash={}
c.fn=c
c.inverse=f.program(121,Ve,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                "
return r}function Be(n,e){var r="",i,l
r+="\n                        "
r+='\n                        <a class="simple-button pull-left green" '
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(117,Ie,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+=' href="'
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"scratchpad.url",{hash:{}})}r+=v(i)+'" target="_blank">'
o=a["_"]
i=o||n["_"]
c=f.program(119,Oe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a>\n                        "
return r}function Ie(n,e){return'style="display:none;"'}function Oe(n,e){return"Save on Khan Academy"}function Ve(n,e){var r="",i,l
r+='\n                        <!-- Save as/Fork Button -->\n                        <button id="fork-button"\n                            class="simple-button pull-left" '
o=a.isChallenge
i=o||n.isChallenge
l=a["if"]
c=f.program(122,qe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+=">"
o=a["_"]
i=o||n["_"]
c=f.program(124,Le,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</button>\n                    "
return r}function qe(n,e){return'style="display:none;"'}function Le(n,e){return"Save as a spin-off"}function Ke(n,e){var r,i
o=a.canRecord
r=o||n.canRecord
i=a["if"]
c=f.program(127,Xe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function Xe(n,e){var r="",i
r+='\n                <!-- Record button -->\n                <button id="record" class="simple-button pull-left">'
o=a["_"]
i=o||n["_"]
c=f.program(128,Ye,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</button>\n                "
return r}function Ye(n,e){return"Record"}function Ge(n,e){return"Code"}function Ze(n,e){var r="",i
r+='\n                <li><a href="#tests-editor-tab">'
o=a["_"]
i=o||n["_"]
c=f.program(133,ze,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</a></li>\n              "
return r}function ze(n,e){return"Tests"}function Je(n,e){var r="",i
r+='\n                <div class="scratchpad-editor-bigplay-loading">\n                    <img src="/images/throbber-full.gif">\n                    <span class="hide-text">'
o=a["_"]
i=o||n["_"]
c=f.program(136,Qe,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</span>\n                </div>\n\n                <!-- This cannot be removed, if we want Flash to keep working! -->\n                <div id="sm2-container">\n                    '
o=a["_"]
i=o||n["_"]
c=f.program(138,$e,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='\n                    <br>\n                </div>\n\n                <button class="scratchpad-editor-bigplay-button" style="display:none;">\n                    <span class="icon-play"></span>\n                    <span class="hide-text">'
o=a["_"]
i=o||n["_"]
c=f.program(140,na,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</span>\n                </button>\n                "
return r}function Qe(n,e){return"Loading..."}function $e(n,e){return"Enable Flash to load audio:"}function na(n,e){return"Play"}function ea(n,e){var r="",i
r+='\n              <div id="tests-editor-tab" style="display:none;">\n                <a href="https://docs.google.com/a/khanacademy.org/document/d/1_j04mrSUg6ZV-D455MqkamDXi6557xoTOkPXmcdKo_E/edit?usp=sharing" target="_blank">'
o=a.i18nDoNotTranslate
i=o||n.i18nDoNotTranslate
c=f.program(143,aa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</a>\n                <div id="tests-editor"></div>\n              </div>\n              '
return r}function aa(n,e){return"How To Make A Challenge"}function ra(n,e){var r,i
o=a.embedded
r=o||n.embedded
i=a["if"]
c=f.program(146,ia,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function ia(n,e){var r="",i,l
r+='\n                <div class="origin-scratchpad pull-right">\n                    '
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.deleted
l=a.unless
c=f.program(147,la,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n                    <div class="text-contents">\n                        <div>'
o=a["_"]
i=o||n["_"]
c=f.program(150,ta,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="</div>\n                        "
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.deleted
l=a["if"]
c=f.program(152,oa,e)
c.hash={}
c.fn=c
c.inverse=f.program(154,ca,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                    </div>\n                </div>\n                "
return r}function la(n,e){var r="",i,l
r+='\n                    <a href="'
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.url",{hash:{}})}r+=v(i)+'"'
o=a.embedded
i=o||n.embedded
l=a["if"]
c=f.program(148,sa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='>\n                        <img src="'
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.imageUrl
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.imageUrl",{hash:{}})}r+=v(i)+'" class="pull-right" />\n                    </a>\n                    '
return r}function sa(n,e){return' target="_blank"'}function ta(n,e){return"Based on:"}function oa(n,e){var r="",i
r+="\n                        "
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.translatedTitle",{hash:{}})}r+=v(i)+"\n                        "
return r}function ca(n,e){var r="",i
r+='\n                        <a href="'
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.url",{hash:{}})}r+=v(i)+'" target="_blank">\n                            '
o=a.originScratchpad
i=o||n.originScratchpad
i=i===null||i===undefined||i===false?i:i.translatedTitle
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"originScratchpad.translatedTitle",{hash:{}})}r+=v(i)+"\n                        </a>\n                        "
return r}function fa(n,e){return"Undo Change"}function da(n,e){var r="",i,l
r+='\n                <button class="scratchpad-startover-button simple-button pull-left" style="display:none;">\n                    '
o=a["_"]
i=o||n["_"]
c=f.program(159,pa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                </button>\n\n                "
o=a.showProjectFeedbackButtons
i=o||n.showProjectFeedbackButtons
l=a["if"]
c=f.program(161,ha,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n                "
return r}function pa(n,e){return"Start Over"}function ha(n,e){var r="",i
r+='\n                <a href="#projecthelp" class="request-help-button simple-button pull-right">\n                    '
o=a["_"]
i=o||n["_"]
c=f.program(162,ua,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                </a>\n                "
return r}function ua(n,e){return"Request Help"}function va(n,e){var r,i
o=a.scratchpad
r=o||n.scratchpad
r=r===null||r===undefined||r===false?r:r.isPublished
i=a.unless
c=f.program(165,ga,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function ga(n,e){var r,i
o=a.embedded
r=o||n.embedded
i=a["if"]
c=f.program(166,ma,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function ma(n,e){var r,i
o=a.hasAudio
r=o||n.hasAudio
i=a.unless
c=f.program(167,ba,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function ba(n,e){var r="",i,l
r+='\n                <div class="author">\n                    <img class="user-avatar pull-left" src="'
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.avatar_url
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"creatorProfile.avatar_url",{hash:{}})}r+=v(i)+'"/>\n\n                    <div class="pull-left">\n                        <div>\n                            <a href="'
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.is_public
l=a["if"]
c=f.program(168,ya,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='"\n                                class="author-nickname profile-programs" data-user-id="'
o=a.scratchpad
i=o||n.scratchpad
i=i===null||i===undefined||i===false?i:i.userId
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"scratchpad.userId",{hash:{}})}r+=v(i)+'"\n                                '
o=a.embedded
i=o||n.embedded
l=a["if"]
c=f.program(170,_a,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+=">\n                                "
o=a.creatorProfile
i=o||n.creatorProfile
i=i===null||i===undefined||i===false?i:i.nickname
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"creatorProfile.nickname",{hash:{}})}r+=v(i)+"\n                            </a>\n                        </div>\n\n                        <div>\n                            ("
o=a["_"]
i=o||n["_"]
c=f.program(172,ka,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='\n                            <time class="timeago" datetime="'
o=a.lastUpdatedTime
i=o||n.lastUpdatedTime
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"lastUpdatedTime",{hash:{}})}r+=v(i)+'">\n                                '
o=a.lastUpdatedTime
i=o||n.lastUpdatedTime
if(typeof i===d){i=i.call(n,{hash:{}})}else if(i===u){i=h.call(n,"lastUpdatedTime",{hash:{}})}r+=v(i)+"\n                            </time>)\n                        </div>\n                    </div>\n                </div>\n                "
return r}function ya(n,e){var r
o=a.creatorProfile
r=o||n.creatorProfile
r=r===null||r===undefined||r===false?r:r.profile_root
if(typeof r===d){r=r.call(n,{hash:{}})}else if(r===u){r=h.call(n,"creatorProfile.profile_root",{hash:{}})}return v(r)}function _a(n,e){return'target="_blank"'}function ka(n,e){return"Updated"}function Sa(n,e){var r="",i
r+='\n                <!-- Row for playback controls -->\n                <div class="scratchpad-playbar">\n                    <div class="scratchpad-playbar-area" style="display:none;">\n                        <button\n                            class="simple-button primary scratchpad-playbar-play"\n                            type="button">\n                            <span class="icon-play"></span>\n                        </button>\n\n                        <div class="scratchpad-playbar-progress"></div>\n\n                        <span class="scratchpad-playbar-timeleft"></span>\n\n                        <span class="dropdown scratchpad-playbar-options">\n                            <button class="dropdown-toggle" disabled>\n                                <i class="icon-cog icon-large"></i>\n                                <i class="icon-caret-down"></i>\n                            </button>\n                            <ul class="dropdown-menu no-submenus">\n                                <li>\n                                    <label>\n                                        <input type="checkbox">\n                                        <span class="link-text">'
o=a["_"]
i=o||n["_"]
c=f.program(175,wa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</span>\n                                    </label>\n                                </li>\n                                <li style="display:none;" data-no-transcript>\n                                    <a href="http://cs-blog.khanacademy.org/2013/11/call-for-volunteers-caption-our.html">'
o=a["_"]
i=o||n["_"]
c=f.program(177,Pa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+='</a>\n                                </li>\n                            </ul>\n                        </span>\n\n                    </div>\n                    <div class="loading-msg">\n                        '
o=a["_"]
i=o||n["_"]
c=f.program(179,Ta,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+="\n                    </div>\n                </div>\n                "
return r}function wa(n,e){return"Interactive transcript"}function Pa(n,e){return"No transcript available.\n                                        <br>Want to help?"}function Ta(n,e){return"Loading audio..."}function Ua(n,e){var a=""
a+="\n                "
a+="\n                &nbsp;\n                "
return a}function Da(n,e){var r="",i,l
r+="\n        "
o=a.embedded
i=o||n.embedded
l=a.unless
c=f.program(184,Ca,e)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(n,i,c)
if(i||i===0){r+=i}r+="\n\n        "
o=a.isNew
i=o||n.isNew
l=a["if"]
c=f.program(187,Fa,e)
c.hash={}
c.fn=c
c.inverse=f.program(189,xa,e)
i=l.call(n,i,c)
if(i||i===0){r+=i}r+='\n        <div class="license">'
o=a["_"]
i=o||n["_"]
c=f.program(191,ja,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof i===d){i=i.call(n,c)}else{i=p.call(n,i,c)}if(i||i===0){r+=i}r+=".</div>\n        "
return r}function Ca(n,e){var r,i
o=a.canRecord
r=o||n.canRecord
i=a["if"]
c=f.program(185,Aa,e)
c.hash={}
c.fn=c
c.inverse=f.noop
r=i.call(n,r,c)
if(r||r===0){return r}else{return""}}function Aa(n,e){return'\n            <div class="scratchpad-toolbar scratchpad-dev-record-row"></div>\n        '}function Fa(n,e){return'\n        <div class="documentation"></div>\n        '}function xa(n,e){var i="",l
i+="\n        "
l=n
l=f.invokePartial(r.discussion_discussion,"discussion_discussion",l,a,r)
if(l||l===0){i+=l}i+="\n        "
return i}function ja(n,e){return'All code is owned by its respective author and made available under an <a href="http://opensource.org/licenses/mit-license.php">MIT license</a>. For more information please see the <a href="/about/tos#5">Terms of Service</a>'}l+="<div>\n    "
o=a.embeddedAndWithFrame
s=o||e.embeddedAndWithFrame
t=a.unless
c=f.program(1,g,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n\n    "
l+="\n    "
o=a.embedded
s=o||e.embedded
t=a.unless
c=f.program(94,Te,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n\n    "
o=a.isNew
s=o||e.isNew
t=a.unless
c=f.program(97,De,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n\n    <!-- Main scratchpad content -->\n    <div class="scratchpad-wrap">\n        '
o=a.embeddedAndWithFrame
s=o||e.embeddedAndWithFrame
t=a.unless
c=f.program(99,Ce,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n\n        <!-- Canvases (Drawing + Output) -->\n        <div class="scratchpad-canvas-wrap">\n            <div id="output">\n                <!-- Extra data-src attribute to work around\n                     cross-origin access policies. -->\n                <iframe id="output-frame"\n                    src="'
o=a.sandboxUrl
s=o||e.sandboxUrl
if(typeof s===d){s=s.call(e,{hash:{}})}else if(s===u){s=h.call(e,"sandboxUrl",{hash:{}})}l+=v(s)+"&amp;v="
o=a.appVersion
s=o||e.appVersion
if(typeof s===d){s=s.call(e,{hash:{}})}else if(s===u){s=h.call(e,"appVersion",{hash:{}})}l+=v(s)+'"\n                    data-src="'
o=a.sandboxUrl
s=o||e.sandboxUrl
if(typeof s===d){s=s.call(e,{hash:{}})}else if(s===u){s=h.call(e,"sandboxUrl",{hash:{}})}l+=v(s)+'"></iframe>\n                <canvas class="scratchpad-draw-canvas" style="display:none;"\n                    width="400" height="400"></canvas>\n\n                <div class="overlay disable-overlay" style="display:none;">\n                </div>\n\n                <div class="scratchpad-canvas-loading">\n                    <img src="/images/throbber-full.gif">\n                    <span class="hide-text">'
o=a["_"]
s=o||e["_"]
c=f.program(104,xe,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){l+=s}l+='</span>\n                </div>\n            </div>\n\n            <div class="scratchpad-toolbar">\n                <button id="restart-code"\n                    class="simple-button pull-right">\n                    <span class="icon-refresh"></span>\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(106,je,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){l+=s}l+="</button>\n\n                <!-- Widgets for selecting colors to doodle on the canvas during\n                    recordings -->\n                "
o=a.embedded
s=o||e.embedded
t=a.unless
c=f.program(108,Ne,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n                <!-- Save Button -->\n                "
o=a.hideSave
s=o||e.hideSave
t=a.unless
c=f.program(112,Ee,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n                "
o=a.isNew
s=o||e.isNew
t=a.unless
c=f.program(115,Me,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n                "
o=a.embedded
s=o||e.embedded
t=a.unless
c=f.program(126,Ke,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n            </div>\n        </div>\n\n        <!-- Editor -->\n        <div class="scratchpad-editor-wrap overlay-container">\n            <div id="editor-tabs">\n              <ul id="editor-tabs-links" style="display:none;">\n                <li><a href="#editor-tab">'
o=a["_"]
s=o||e["_"]
c=f.program(130,Ge,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){l+=s}l+="</a></li>\n              "
o=a.embedded
s=o||e.embedded
t=a.unless
c=f.program(132,Ze,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n              </ul>\n              <div id="editor-tab">\n                <div class="scratchpad-editor"></div>\n                <div class="overlay disable-overlay" style="display:none;">\n                </div>\n\n                '
o=a.hasAudio
s=o||e.hasAudio
t=a["if"]
c=f.program(135,Je,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n              </div>\n\n              "
o=a.embedded
s=o||e.embedded
t=a.unless
c=f.program(142,ea,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n            </div>\n\n            <div class="scratchpad-toolbar">\n                '
o=a.originScratchpad
s=o||e.originScratchpad
t=a["if"]
c=f.program(145,ra,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n\n                <button class="scratchpad-editor-undo-button simple-button pull-left" style="display:none;">\n                    <span class="icon-undo"></span>\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(156,fa,i)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===d){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){l+=s}l+="\n                </button>\n\n                "
o=a.embeddedAndWithFrame
s=o||e.embeddedAndWithFrame
t=a.unless
c=f.program(158,da,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n\n                <p id="save-progress-text" class="pull-right"></p>\n                '
o=a.creatorProfile
s=o||e.creatorProfile
t=a["if"]
c=f.program(164,va,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n\n                "
o=a.hasAudio
s=o||e.hasAudio
t=a["if"]
c=f.program(174,Sa,i)
c.hash={}
c.fn=c
c.inverse=f.program(181,Ua,i)
s=t.call(e,s,c)
if(s||s===0){l+=s}l+="\n            </div>\n        </div>\n\n        "
o=a.embeddedAndWithFrame
s=o||e.embeddedAndWithFrame
t=a.unless
c=f.program(183,Da,i)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){l+=s}l+='\n    </div>\n\n    <div id="page-overlay" class="overlay"></div>\n</div>\n'
return l})})()
});
KAdefine("javascript/scratchpads-package/tutorial-topic.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{}
l["scratchpads-package_tutorial-topic"]=module.exports=a(function(a,l,t,s,e){t=t||a.helpers
var i="",n,o,c,r,h=this,d="function",f=t.blockHelperMissing,p=t.helperMissing,u=void 0,v=this.escapeExpression
function m(a,l){var s="",e
s+='\n            <!-- Developer-only Settings Button -->\n            <button class="dev-settings-button simple-button secondary">\n                '
c=t["_"]
e=c||a["_"]
r=h.program(2,g,l)
r.hash={}
r.fn=r
r.inverse=h.noop
if(c&&typeof e===d){e=e.call(a,r)}else{e=f.call(a,e,r)}if(e||e===0){s+=e}s+='\n            </button>\n            <div id="tutorial-sorter"></div>\n            '
return s}function g(a,l){return"Developer-only Settings"}function y(a,l){return"Tutorials"}function D(a,l){var s="",e
s+='\n        <li class="tutorial-link">\n            <a href='
c=t.showPath
e=c||a.showPath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"showPath",{hash:{}})}s+=v(e)+'>\n                <img class="tutorial-thumb" src='
c=t.imagePath
e=c||a.imagePath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"imagePath",{hash:{}})}s+=v(e)+'></img>\n                <div class="tutorial-info">\n                    '
c=t.translatedTitle
e=c||a.translatedTitle
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"translatedTitle",{hash:{}})}s+=v(e)+'\n                    <div class="tutorial-desc">\n                        '
c=t.translatedDesc
e=c||a.translatedDesc
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"translatedDesc",{hash:{}})}s+=v(e)+"\n                    </div>\n                </div>\n            </a>\n        </li>\n    "
return s}function T(a,l){var s="",e
s+='\n        <li class="tutorial-link">\n            <a href='
c=t.showPath
e=c||a.showPath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"showPath",{hash:{}})}s+=v(e)+'>\n                <img class="tutorial-thumb" src='
c=t.imagePath
e=c||a.imagePath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"imagePath",{hash:{}})}s+=v(e)+'></img>\n                <div class="tutorial-info">\n                    '
c=t.translatedTitle
e=c||a.translatedTitle
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"translatedTitle",{hash:{}})}s+=v(e)+'\n                    <div class="tutorial-desc">\n                        '
c=t.translatedDesc
e=c||a.translatedDesc
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===u){e=p.call(a,"translatedDesc",{hash:{}})}s+=v(e)+"\n                    </div>\n                </div>\n            </a>\n        </li>\n    "
return s}i+='<div class=\'headline-container topic-color cs\'>\n    <div class="main-header">\n        <div class="tutorial-topic-thumb" id="'
c=t.topicId
n=c||l.topicId
if(typeof n===d){n=n.call(l,{hash:{}})}else if(n===u){n=p.call(l,"topicId",{hash:{}})}i+=v(n)+'"></div>\n        <div class="welcome-info tutorial-welcome">\n            <div class="welcome-title">'
c=t.translatedTopic
n=c||l.translatedTopic
if(typeof n===d){n=n.call(l,{hash:{}})}else if(n===u){n=p.call(l,"translatedTopic",{hash:{}})}i+=v(n)+"</div>\n\n            "
c=t.isDeveloper
n=c||l.isDeveloper
o=t["if"]
r=h.program(1,m,e)
r.hash={}
r.fn=r
r.inverse=h.noop
n=o.call(l,n,r)
if(n||n===0){i+=n}i+='\n\n            <div class="welcome-desc">'
c=t.translatedTopicDesc
n=c||l.translatedTopicDesc
if(typeof n===d){n=n.call(l,{hash:{}})}else if(n===u){n=p.call(l,"translatedTopicDesc",{hash:{}})}i+=v(n)+'</div>\n        </div>\n    </div>\n</div>\n<div class="sub-header-spacer tutorial-color cs"> </div>\n\n<div class="tutorials-header">'
c=t["_"]
n=c||l["_"]
r=h.program(4,y,e)
r.hash={}
r.fn=r
r.inverse=h.noop
if(c&&typeof n===d){n=n.call(l,r)}else{n=f.call(l,n,r)}if(n||n===0){i+=n}i+='</div>\n<div class="tutorials-list">\n    <ul class="tutorial-column first">\n    '
c=t.tutorialsA
n=c||l.tutorialsA
o=t.each
r=h.program(6,D,e)
r.hash={}
r.fn=r
r.inverse=h.noop
n=o.call(l,n,r)
if(n||n===0){i+=n}i+='\n    </ul>\n\n    <ul class="tutorial-column second">\n    '
c=t.tutorialsB
n=c||l.tutorialsB
o=t.each
r=h.program(8,T,e)
r.hash={}
r.fn=r
r.inverse=h.noop
n=o.call(l,n,r)
if(n||n===0){i+=n}i+="\n    </ul>\n</div>\n"
return i})})()
});
KAdefine("javascript/scratchpads-package/tutorial-sorter.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_tutorial-sorter"]=module.exports=a(function(a,e,t,l,s){t=t||a.helpers
var i="",r,n,o,h,p=this,c="function",d=t.helperMissing,f=void 0,u=this.escapeExpression,g=t.blockHelperMissing
function m(a,e){return"Drag tutorials to order them."}function v(a,e){var l="",s
l+='\n	<li data-scratchpad-id="'
o=t.id
s=o||a.id
if(typeof s===c){s=s.call(a,{hash:{}})}else if(s===f){s=d.call(a,"id",{hash:{}})}l+=u(s)+'"><span>'
o=t.translatedTitle
s=o||a.translatedTitle
if(typeof s===c){s=s.call(a,{hash:{}})}else if(s===f){s=d.call(a,"translatedTitle",{hash:{}})}l+=u(s)+"</span><li>\n	"
return l}i+="<h4>"
o=t["_"]
r=o||e["_"]
h=p.program(1,m,s)
h.hash={}
h.fn=h
h.inverse=p.noop
if(o&&typeof r===c){r=r.call(e,h)}else{r=g.call(e,r,h)}if(r||r===0){i+=r}i+='</h4>\n\n<ul id="tutorial-sorting-list">\n	'
o=t.tutorials
r=o||e.tutorials
n=t.each
h=p.program(3,v,s)
h.hash={}
h.fn=h
h.inverse=p.noop
r=n.call(e,r,h)
if(r||r===0){i+=r}i+="\n</ul>\n"
return i})})()
});
KAdefine("javascript/scratchpads-package/scratchpads-grouped.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,i=Handlebars.templates=Handlebars.templates||{}
i["scratchpads-package_scratchpads-grouped"]=module.exports=a(function(a,i,l,s,e){l=l||a.helpers
var t="",c,f,h,n,r=this,d="function",p=l.helperMissing,o=void 0,u=this.escapeExpression
function y(a,i){var s="",e,t
s+='\n<div class="scratchpads-header">'
h=l.headerText
e=h||a.headerText
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"headerText",{hash:{}})}s+=u(e)+"</div>\n\n"
h=l.scratchpadGroups
e=h||a.scratchpadGroups
t=l.each
n=r.program(2,v,i)
n.hash={}
n.fn=n
n.inverse=r.noop
e=t.call(a,e,n)
if(e||e===0){s+=e}s+="\n\n"
return s}function v(a,i){var s="",e,t
s+='\n    <h3>\n        <div class="difficulty-icon-'
h=l.difficulty
e=h||a.difficulty
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"difficulty",{hash:{}})}s+=u(e)+'"></div>\n        <div class="difficulty-header">'
h=l.difficultyText
e=h||a.difficultyText
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"difficultyText",{hash:{}})}s+=u(e)+'</div>\n    </h3>\n    <ul class="scratchpad-list">\n        '
h=l.scratchpads
e=h||a.scratchpads
t=l.each
n=r.program(3,m,i)
n.hash={}
n.fn=n
n.inverse=r.noop
e=t.call(a,e,n)
if(e||e===0){s+=e}s+="\n    </ul>\n"
return s}function m(a,i){var s="",e,t
s+='\n        <li>\n            <a href="'
h=l.showPath
e=h||a.showPath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"showPath",{hash:{}})}s+=u(e)+'">\n                <div class="scratchpad-thumbnail">\n                    <img src="'
h=l.imagePath
e=h||a.imagePath
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"imagePath",{hash:{}})}s+=u(e)+'">\n                    '
h=l.displayDifficulty
e=h||a.displayDifficulty
t=l["if"]
n=r.program(4,T,i)
n.hash={}
n.fn=n
n.inverse=r.noop
e=t.call(a,e,n)
if(e||e===0){s+=e}s+="\n                </div>\n                <h4>\n                    "
h=l.translatedTitle
e=h||a.translatedTitle
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"translatedTitle",{hash:{}})}s+=u(e)+"\n                </h4>\n            </a>\n        </li>\n        "
return s}function T(a,i){var s="",e
s+='\n                    <span class="scratchpad-difficulty-'
h=l.difficulty
e=h||a.difficulty
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"difficulty",{hash:{}})}s+=u(e)+'">\n                        '
h=l.difficultyText
e=h||a.difficultyText
if(typeof e===d){e=e.call(a,{hash:{}})}else if(e===o){e=p.call(a,"difficultyText",{hash:{}})}s+=u(e)+"\n                    </span>\n                    "
return s}h=l.display
c=h||i.display
f=l["if"]
n=r.program(1,y,e)
n.hash={}
n.fn=n
n.inverse=r.noop
c=f.call(i,c,n)
if(c||c===0){t+=c}t+="\n"
return t})})()
});
KAdefine("javascript/scratchpads-package/share-embed.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpads-package_share-embed"]=module.exports=a(function(a,e,s,l,r){s=s||a.helpers
var t="",h,i,n,c=this,p="function",f=s.helperMissing,o=void 0,d=this.escapeExpression,m=s.blockHelperMissing
function u(a,e){return'Made using: <a href="http://www.khanacademy.org/cs">Khan Academy Computer Science</a>.'}t+='<h2><a href="'
i=s.shareURL
h=i||e.shareURL
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===o){h=f.call(e,"shareURL",{hash:{}})}t+=d(h)+'">'
i=s.translatedTitle
h=i||e.translatedTitle
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===o){h=f.call(e,"translatedTitle",{hash:{}})}t+=d(h)+'</a></h2>\n<script src="'
i=s.url
h=i||e.url
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===o){h=f.call(e,"url",{hash:{}})}t+=d(h)+"/embed.js?"
i=s.params
h=i||e.params
if(typeof h===p){h=h.call(e,{hash:{}})}else if(h===o){h=f.call(e,"params",{hash:{}})}t+=d(h)+'"><\\/script>\n<p>'
i=s["_"]
h=i||e["_"]
n=c.program(1,u,r)
n.hash={}
n.fn=n
n.inverse=c.noop
if(i&&typeof h===p){h=h.call(e,n)}else{h=m.call(e,h,n)}if(h||h===0){t+=h}t+="</p>\n"
return t})})()
});
KAdefine("javascript/scratchpads-exec-package/images.js", function(require, requireWithVars, module, exports) {
window.OutputImages=[{groupName:"avatars",images:"leaf-blue leaf-green leaf-grey leaf-orange leaf-red leaf-yellow leafers-seed leafers-seedling leafers-sapling leafers-tree leafers-ultimate marcimus mr-pants mr-pink piceratops-seed piceratops-seedling piceratops-sapling piceratops-tree piceratops-ultimate old-spice-man orange-juice-squid purple-pi questionmark robot_female_1 robot_female_2 robot_female_3 robot_male_1 robot_male_2 robot_male_3 spunky-sam".split(" ")},{groupName:"creatures",images:"Hopper-Happy Hopper-Cool Hopper-Jumping OhNoes BabyWinston Winston".split(" ")},{groupName:"cute",images:"Blank BrownBlock CharacterBoy CharacterCatGirl CharacterHornGirl CharacterPinkGirl CharacterPrincessGirl ChestClosed ChestLid ChestOpen DirtBlock DoorTallClosed DoorTallOpen EnemyBug GemBlue GemGreen GemOrange GrassBlock Heart Key PlainBlock RampEast RampNorth RampSouth RampWest Rock RoofEast RoofNorth RoofNorthEast RoofNorthWest RoofSouth RoofSouthEast RoofSouthWest RoofWest Selector ShadowEast ShadowNorth ShadowNorthEast ShadowNorthWest ShadowSideWest ShadowSouth ShadowSouthEast ShadowSouthWest ShadowWest Star StoneBlock StoneBlockTall TreeShort TreeTall TreeUgly WallBlock WallBlockTall WaterBlock WindowTall WoodBlock".split(" "),cite:$._("'Planet Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/05/dancs-miraculously-flexible-game.html"},{groupName:"space",images:"background beetleship collisioncircle girl1 girl2 girl3 girl4 girl5 healthheart minus octopus planet plus rocketship star 0 1 2 3 4 5 6 7 8 9".split(" "),cite:$._("'Space Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/03/spacecute-prototyping-challenge.html"}]
});
KAdefine("javascript/scratchpads-package/scratchpad-bingo.js", function(require, requireWithVars, module, exports) {
var Analytics=require("../shared-package/analytics.js")
window.ScratchpadBingo={_alreadyBingod:{},_bingoOnce:function(a){var c=[]
_.each(a,function(a){if(ScratchpadBingo._alreadyBingod[a]){return}ScratchpadBingo._alreadyBingod[a]=true
c.push(a)})
if(c.length>0){gae_bingo.bingo(c,function(){window.console&&console.log("bingo!",c)})}},init:function(){function a(a){return"CS Scratchpad "+a}function c(){var a=ScratchpadUI.scratchpad
return{"Scratchpad ID":a.get("id"),"Scratchpad Title":a.get("title"),"Scratchpad Category":a.get("category"),"Scratchpad - Not Theirs":!a.isOwner(),"Scratchpad Current Time":Record.currentTime()}}$(ScratchpadUI).bind({started:function(){var t=ScratchpadUI.scratchpad
var e=t.get("userId")
var n=KA.getUserID()
if(t.isNew()){Analytics.trackSingleEvent(a("New"))}else{Analytics.trackSingleEvent(a("Viewed"),c())}if(t.isNew()){ScratchpadBingo._bingoOnce(["scratchpad_new_visited_binary","scratchpad_new_visited_count"])}else{ScratchpadBingo._bingoOnce(["scratchpad_viewed_binary","scratchpad_viewed_count"])
var r=t.get("category")
if(r==="tutorial"){ScratchpadBingo._bingoOnce(["scratchpad_tutorial_viewed_binary","scratchpad_tutorial_viewed_count"])}else if(r==="official"){ScratchpadBingo._bingoOnce(["scratchpad_official_viewed_binary","scratchpad_official_viewed_count"])}else if(r==="documentation"){ScratchpadBingo._bingoOnce(["scratchpad_documentation_viewed_binary","scratchpad_documentation_viewed_count"])}else if(r==="challenge"){ScratchpadBingo._bingoOnce(["scratchpad_challenge_viewed_binary","scratchpad_challenge_viewed_count"])}else if(e!==n){ScratchpadBingo._bingoOnce(["scratchpad_other_viewed_binary","scratchpad_other_viewed_count"])}}},readyToPlay:function(){Analytics.trackSingleEvent(a("Ready to Play"),c())},sharedViaFacebook:function(){ScratchpadBingo._bingoOnce(["scratchpad_shared_facebook_binary","scratchpad_shared_facebook_count"])
Analytics.trackSingleEvent(a("Shared Facebook"),c())},sharedViaTwitter:function(){ScratchpadBingo._bingoOnce(["scratchpad_shared_twitter_binary","scratchpad_shared_twitter_count"])
Analytics.trackSingleEvent(a("Shared Twitter"),c())},sharedViaEmail:function(){ScratchpadBingo._bingoOnce(["scratchpad_shared_email_binary","scratchpad_shared_email_count"])
Analytics.trackSingleEvent(a("Shared Email"),c())},clickedSpinoff:function(){ScratchpadBingo._bingoOnce(["scratchpad_clicked_spinoff_binary","scratchpad_clicked_spinoff_count","scratchpad_clicked_program_binary","scratchpad_clicked_program_count"])
Analytics.trackSingleEvent(a("Saved as Spinoff"),c())},clickedSpinoffAuthor:function(){ScratchpadBingo._bingoOnce(["scratchpad_clicked_spinoff_author_binary","scratchpad_clicked_spinoff_author_count","scratchpad_clicked_program_author_binary","scratchpad_clicked_program_author_count"])
Analytics.trackSingleEvent(a("Saved as Spinoff (Author)"),c())}})
Record.bind({playStarted:function(){ScratchpadBingo._bingoOnce(["scratchpad_playback_started_binary","scratchpad_playback_started_count"])
Analytics.trackSingleEvent(a("Play Started"),c())},playEnded:function(){ScratchpadBingo._bingoOnce(["scratchpad_playback_completed_binary","scratchpad_playback_completed_count"])
Analytics.trackSingleEvent(a("Play Finished"),c())},playPaused:function(){ScratchpadBingo._bingoOnce(["scratchpad_playback_completed_binary","scratchpad_playback_completed_count"])
Analytics.trackSingleEvent(a("Play Paused"),c())},playUpdate:function(){var t=ScratchpadUI.scratchpad
if(!t.trackedPercentage){t.trackedPercentage={}}var e=Math.floor(Record.currentTime()/Record.endTime()*100)
if(e>0&&e%10===0&&!t.trackedPercentage[e]){t.trackedPercentage[e]=true
Analytics.trackSingleEvent(a("Play Progress -"+e+"%"),c())}}})
ScratchpadUI.editor.on({colorPicker:function(){ScratchpadBingo._bingoOnce(["scratchpad_colorpicker_binary","scratchpad_colorpicker_count"])},scrubber:function(){ScratchpadBingo._bingoOnce(["scratchpad_scrubber_binary","scratchpad_scrubber_count"])},keyInput:function(){var t=ScratchpadUI.scratchpad
if(!Record.playing&&!Record.recording&&!t.trackedEdit){t.trackedEdit=true
Analytics.trackSingleEvent(a("Edited"),c())}}})}}
});
KAdefine("javascript/scratchpads-package/scratchpad-config.js", function(require, requireWithVars, module, exports) {
var ScratchpadConfig={version:null,runCurVersion:function(e){var t=Array.prototype.slice.call(arguments,0)
t.unshift(ScratchpadConfig.curVersion())
return ScratchpadConfig.runVersion.apply(ScratchpadConfig,t)},runVersion:function(e,t){var r=Array.prototype.slice.call(arguments,2)
for(var n=0;n<=e;n++){var i=ScratchpadConfig.versions[n][t]
if(i){i.apply(window,r)}}},switchVersion:function(e){if(e!==ScratchpadConfig.curVersion()){ScratchpadConfig.version=e
$(ScratchpadConfig).trigger("versionSwitched",e)}},curVersion:function(){if(ScratchpadConfig.version!==null){return ScratchpadConfig.version}return typeof ScratchpadUI!=="undefined"?ScratchpadUI.scratchpad.getVersion():ScratchpadConfig.latestVersion()},latestVersion:function(){return ScratchpadConfig.versions.length-1},versions:[{name:"Initial Configuration",editor:function(e){e.setHighlightActiveLine(false)
e.$highlightBrackets=function(){}
e.renderer.setHScrollBarAlwaysVisible(false)
var t=e.getSession()
t.setUseWrapMode(true)
t.setUseSoftTabs(true)
t.setUseWorker(false)
e.setFontSize("14px")
e.setHighlightSelectedWord(false)
e.renderer.setShowGutter(true)
e.renderer.setShowPrintMargin(false)
t.setMode("ace/mode/javascript")
e.setTheme("ace/theme/textmate")
ScratchpadConfig.editor.bindAutoComplete(e,{autoBrace:true})},jshint:function(){if(typeof Output==="undefined"){return}Output.JSHint={undef:true,noempty:true,plusplus:true,noarg:true,latedef:true,eqeqeq:true,curly:true,shadow:true}},processing:function(e){e.size(400,400)
e.frameRate(30)
e.angleMode="radians"}},{name:"Switch to Degress from Radians",processing:function(e){e.angleMode="degrees"}},{name:"Brace Autocompletion Changes",editor:function(e){ScratchpadConfig.editor.bindAutoComplete(e,{autoBrace:false,braceIndent:true,equalsInsert:true})}},{name:"Disable Un-needed JSHint Rules",jshint:function(){if(typeof Output==="undefined"){return}delete Output.JSHint.noempty
delete Output.JSHint.plusplus}}]}
window.ScratchpadConfig=ScratchpadConfig
module.exports=ScratchpadConfig
});
KAdefine("javascript/scratchpads-package/editor.js", function(require, requireWithVars, module, exports) {
window.ScratchpadEditor=Backbone.View.extend({initialize:function(t){var e=this
this.defaultCode=t.code
this.autoFocus=t.autoFocus
this.config=t.config
this.record=t.record
this.editor=ace.edit(this.el)
this.textarea=this.$(this.dom.TEXT_INPUT)
this.content=this.$(this.dom.CONTENT)
this.offset=this.content.offset()
this.editor.commands.removeCommand("gotoline")
this.editor.selection.addEventListener("changeCursor",function(){e.setErrorHighlight(false)})
$(this.config).on("versionSwitched",function(t){e.config.runVersion(t,"editor",e.editor)})
this.config.editor=this
this.reset()
if(this.record){this.bindRecord()}},dom:{ACTIVE_LINE:".ace_active_line",TEXT_INPUT:"textarea",CONTENT:"div.ace_content"},autoCompleteBehavior:{autoBrace:false,braceIndent:true,equalsInsert:true},bindAutoComplete:function(t,e){var n=this
e=e||this.autoCompleteBehavior
var i=t.getSession().getMode().$behaviour
i.add("parens","insertion",function(){})
i.add("parens","deletion",function(){})
i.add("brackets","insertion",function(){})
i.add("brackets","deletion",function(){})
i.add("string_dquotes","insertion",function(){})
i.add("string_dquotes","deletion",function(){})
i.add("braces","insertion",function(t,n,i,o,r){var s=i.getCursorPosition()
var c=o.doc.getLine(s.row)
if(r==="{"){var a=i.getSelectionRange()
var u=o.doc.getTextRange(a)
if(e.autoBrace){if(u!==""){return{text:"{"+u+"}",selection:false}}else{return{text:"{}",selection:[1,1]}}}else if(e.braceIndent){var d=/=\s*function/.test(c)?";":""
var l=this.getNextLineIndent(t,c.substring(0,c.length-1),o.getTabString())
var g=this.$getIndent(o.doc.getLine(s.row))
if(l===g){l+=o.getTabString()}return{text:"{\n"+l+u+"\n"+g+"}"+d,selection:[1,l.length,1,l.length]}}}else if(r==="}"){var f=c.substring(s.column,s.column+1)
if(f==="}"){var h=o.$findOpeningBracket("}",{column:s.column+1,row:s.row})
if(h!==null){return{text:"",selection:[1,1]}}}}else if(r==="\n"){var f=c.substring(s.column,s.column+1)
if(f==="}"){var v=o.findMatchingBracket({row:s.row,column:s.column+1})
if(!v){return null}var l=this.getNextLineIndent(t,c.substring(0,c.length-1),o.getTabString())
var g=this.$getIndent(o.doc.getLine(v.row))
return{text:"\n"+l+"\n"+g,selection:[1,l.length,1,l.length]}}}})
i.add("equals","insertion",function(t,n,i,o,r){if(!e.equalsInsert){return}var s=i.getCursorPosition()
var c=o.doc.getLine(s.row)
if(r==="="&&/\bdraw\s*$/.test(c)){var a=i.getSelectionRange()
var u=o.doc.getTextRange(a)
var d=this.getNextLineIndent(t,c.substring(0,c.length-1),o.getTabString())
var l=this.$getIndent(o.doc.getLine(s.row))
if(d===l){d+=o.getTabString()}return{text:"= function() {\n"+d+u+"\n"+l+"};",selection:[1,d.length,1,d.length]}}})},bindRecord:function(){var t=this
var e=this.editor
var n=this.record
e.setKeyboardHandler({handleKeyboard:function(i,o,r,s,c){if(!n.playing){t.trigger("userChangedCode")}if(o===-1){t.trigger("keyInput")}if(!n.recording){return}var a=e.commands.findKeyCommand(o,r),u=jQuery.isEmptyObject(c)
if(a&&!u){n.log({cmd:a.name})
t.blockSelection()
var d=a.exec
a.exec=function(){n.recording=false
var t=d.apply(this,arguments)
n.recording=true
return t}
return a}else if(!a&&u){n.log({key:r})
t.blockSelection()}}})
e.addEventListener("copy",function(){n.log({copy:1})})
e.addEventListener("paste",function(e){t.trigger("userChangedCode")
if(n.recording){n.log({paste:e})}})
e.addEventListener("cut",function(){t.trigger("userChangedCode")
n.log({cut:1})
t.blockSelection()})
e.renderer.scrollBar.addEventListener("scroll",function(t){n.log({top:t.data})})
e.selection.addEventListener("changeCursor",function(){if(e.selection.isEmpty()){t.handleSelect()}})
e.selection.addEventListener("changeSelection",this.handleSelect.bind(this))
$.extend(n.handlers,{cut:function(){e.onCut()},copy:function(){e.getCopyText()},paste:function(t){e.onPaste(t.paste)},cmd:function(n){e.commands.exec(n.cmd,t.editor)},key:function(t){e.onTextInput(t.key,false)},top:function(t){e.renderer.scrollBar.setScrollTop(t.top)},start:function(t){if(!t.end){t.end=t.start}e.selection.setSelectionRange(t)},focus:function(){t.textarea[0].focus()}})
n.seekCachers.editor={getState:function(){return{text:t.text(),cursor:t.getCursor()}},restoreState:function(e){t.text(e.text)
t.setCursor(e.cursor)}}
n.on({runSeek:function(){t.reset(n.initData.code)}})},doSelect:true,curRange:null,blockSelection:function(){var t=this
this.doSelect=false
setTimeout(function(){t.doSelect=true},13)},handleSelect:function(){if(!this.doSelect||!this.record.recording){return}var t=this
if(this.curRange){return}setTimeout(function(){var e=t.curRange
var n={start:{row:e.start.row,column:e.start.column}}
if(e.end.row!==e.start.row||e.end.column!==e.start.column){n.end={row:e.end.row,column:e.end.column}}var i=t.record.commands[t.record.commands.length-1]
if(i){i=JSON.stringify({start:i.start,end:i.end})}if(!i||i!==JSON.stringify(n)){t.record.log(n)}t.curRange=null},13)
this.curRange=this.editor.selection.getRange()},reset:function(t,e){t=t||this.defaultCode
this.config.runCurVersion("editor",this.editor)
this.text(t)
this.setCursor({row:0,column:0},e)},setErrorHighlight:function(t){var e=this
this.editor.setHighlightActiveLine(t)
setTimeout(function(){var t=e.$(e.dom.ACTIVE_LINE).addClass("hilite")
setTimeout(function(){t.removeClass("hilite")},100)},1)},toggleGutter:function(t){this.editor.renderer.setShowGutter(t)},focus:function(){if(this.autoFocus!==false){this.editor.focus()}},getCursor:function(){return this.editor.getCursorPosition()},setCursor:function(t,e){this.editor.moveCursorToPosition(t)
this.editor.clearSelection()
if(e!==false&&this.autoFocus!==false){this.editor.focus()}},setSelection:function(t){this.editor.selection.setSelectionRange(t)},setReadOnly:function(t){this.editor.setReadOnly(t)},text:function(t){if(t!=null){this.editor.getSession().setValue(t)}else{return this.editor.getSession().getValue().replace(/\r/g,"\n")}return this},unfold:function(){return this.editor.getSession().unfold()},insertNewlineIfCursorAtEnd:function(){var t=this.editor.getSession().getLength()-1
var e=this.editor.getSession().getLine(t)
var n=e.length
var i=this.editor.getCursorPosition()
if(i.row===t&&i.column===n){var o=this.text()
if(o.length&&o[o.length-1]!=="\n"){this.text(this.text()+"\n")
this.setCursor({row:t+1,column:0})}}}})
});
KAdefine("javascript/scratchpads-package/record.js", function(require, requireWithVars, module, exports) {
window.ScratchpadRecord=Backbone.Model.extend({initialize:function(){this.handlers={}
this.seekCache={}
this.seekCacheInterval=20
this.initData={}
this.seekTime=null
this.seekCachers={}
this.allSavedCommands=[]
this.actualInitData},setActualInitData:function(t){this.actualInitData=t},hasNoChunks:function(){return _.isEmpty(this.allSavedCommands)},numChunksSaved:function(){return this.allSavedCommands.length},startRecordChunk:function(t){t=Math.max(t,e())
Record._resetForNewChunk()
this.record(t)
function e(){var t=0
if(this.allSavedCommands&&this.allSavedCommands.length>0){if(_.last(this.allSavedCommands).length>0){t=_.last(_.last(this.allSavedCommands)).time}}return t}},stopRecordChunk:function(){this.stopRecord()},saveRecordChunk:function(){this.allSavedCommands.push(this.commands)
this._resetForNewChunk()},discardRecordChunk:function(){this._resetForNewChunk()},_resetForNewChunk:function(){this.commands=[]
this.initData={}},record:function(t){t=t||0
if(!this.recording){this.commands=[]
this.recording=true
this.startTime=(new Date).getTime()-t
this.trigger("recordStarted")}},stopRecord:function(){if(this.recording){this.recording=false
this.recorded=true
this.trigger("recordEnded")}},loadRecording:function(t){if(t&&t.commands&&t.init){this.initData=t.init
t=t.commands}this.commands=t},dumpRecording:function(){if(this.actualInitData){this.initData=this.actualInitData
this.commands=_.flatten(this.allSavedCommands,true)}return{init:this.initData,commands:this.commands}},getVersion:function(){return this.initData.configVersion||0},seekTo:function(t){if(this.seekRunning){return false}this.seekRunning=true
this.seekTime=t
this.pauseTime=(new Date).getTime()
this.playStart=this.pauseTime-t
if(!this.seekInterval){this.seekInterval=setInterval(_.bind(function(){if(this.seekTime!==null){this.runSeek(this.seekTime)
this.seekTime=null}},this),200)}},runSeek:function(t){this.trigger("runSeek",t)
this.cache(-1*this.seekCacheInterval)
var e=this.commands.length
for(var i=0;i<this.commands.length;i++){if(this.commands[i].time>t){e=i-1
break}}var s=Math.floor(e/this.seekCacheInterval)
var n=null
var a=0
for(var i=s;i>=0;i--){if(this.seekCache[i]){n=i
break}}if(n!==null){this.cacheRestore(n)
a=n*this.seekCacheInterval+1}else{this.cacheRestore(-1*this.seekCacheInterval)}this.runSeekCommands(a,e)
this.playPos=e+1},runSeekCommands:function(t,e){for(var i=t;i<=e;i++){var s=_.bind(function(t){var i=this.commands[t]
if(i){this.runCommand(i)
if(i.copy||i.cut||i.paste||i.key){setTimeout(_.bind(function(){this.cache(t)
this.runSeekCommands(t+1,e)},this),1)
return true}this.cache(t)}},this)(i)
if(s){return}}this.seekRunning=false
this.trigger("seekDone")},cache:function(t){if(t%this.seekCacheInterval===0){var e=Math.floor(t/this.seekCacheInterval)
if(!this.seekCache[e]){this.seekCache[e]={}
_.each(this.seekCachers,function(t,i){this.seekCache[e][i]=t.getState()},this)}}},cacheRestore:function(t){if(this.seekCache[t]){_.each(this.seekCachers,function(e,i){var s=this.seekCache[t][i]
if(s){e.restoreState(s)}},this)}},play:function(){if(this.recording||this.playing||!this.commands||this.seekRunning||this.commands.length===0){return}this.trigger("playInit")
var t=this.playStart?this.pauseTime-this.playStart:0
this.seekTo(t)
this.playing=true
this.playPos=this.playPos||0
this.playStart=(new Date).getTime()-t
this.playInterval=setInterval(_.bind(function(){if(this.seekRunning){return}var t=this.commands[this.playPos]
if(t&&this.currentTime()>=t.time){this.runCommand(t)
this.cache(this.playPos)
if(++this.playPos===this.commands.length){this.stopPlayback(true)
this.trigger("playEnded")}}},this),1)
this.trigger("playStarted",t>0)},pausePlayback:function(t){clearInterval(this.playInterval)
this.playing=false
this.playInterval=null
this.pauseTime=(new Date).getTime()
if(!t){this.trigger("playPaused")}},stopPlayback:function(t){this.pausePlayback(t)
if(!t){this.trigger("playStopped")}this.playPos=null
this.playStart=null
this.pauseTime=null
clearInterval(this.seekInterval)
this.seekInterval=null},reset:function(){this.initData={}
this.commands=[]
this.seekCache={}
this.playPos=null
this.playStart=null
this.pauseTime=null
this.seekTime=null
this.playing=false
this.recording=false
this.recorded=false
clearInterval(this.seekInterval)
this.seekInterval=null},currentTime:function(){return(new Date).getTime()-this.playStart},runCommand:function(t){if(t){for(var e in this.handlers){if(typeof t[e]!=="undefined"){try{return this.handlers[e](t)}catch(i){KAConsole.log("Scratchpad playback error: ")
KAConsole.log(i)}}}}},log:function(t){if(!this.playing&&this.recording&&this.commands){t.time=(new Date).getTime()-this.startTime
this.commands.push(t)
return true}},pauseLog:function(){this.oldRecording=this.recording
this.recording=false},resumeLog:function(){this.recording=this.oldRecording},dump:function(){if(this.commands){return this.commands.map(function(t){var e=[]
for(var i in t){if(i!=="time"){e.push(i+":"+t[i])}}return e.join()}).join()}}})
});
KAdefine("javascript/scratchpads-package/canvas.js", function(require, requireWithVars, module, exports) {
window.ScratchpadDrawCanvas=Backbone.View.extend({initialize:function(t){this.recordView=t.record
this.undoStack=[]
this.isDrawing=false
this.ctx=this.el.getContext("2d")
this.ctx.shadowBlur=2
this.ctx.lineCap="round"
this.ctx.lineJoin="round"
this.ctx.lineWidth=1
this.clear(true)
if(this.recordView){this.bindRecordView()}},commands:["startLine","drawLine","endLine","setColor","clear"],mouseCommands:["move","over","out","down","up"],colors:{black:[0,0,0],red:[255,0,0],orange:[255,165,0],green:[0,128,0],blue:[0,0,255],lightblue:[173,216,230],violet:[128,0,128]},remove:function(){this.clear(true)
this.endDraw()
this.$el.off(".draw-canvas")
$(document).off(".draw-canvas")},bindRecordView:function(){var t=this
var i=this.recordView
this.$el.on({"mousedown.draw-canvas":function(n){if(i.recording&&n.button===0){t.startLine(n.offsetX,n.offsetY)
n.preventDefault()}},"mousemove.draw-canvas":function(n){if(i.recording){t.drawLine(n.offsetX,n.offsetY)}},"mouseup.draw-canvas":function(n){if(i.recording){t.endLine()}},"mouseout.draw-canvas":function(n){if(i.recording){t.endLine()}}})
i.on({runSeek:function(){t.clear(true)
t.endDraw()}})
i.seekCachers.canvas={getState:function(){if(!t.isDrawing){return}var i=document.createElement("canvas")
i.width=i.height=t.el.width
i.getContext("2d").drawImage(t.el,0,0)
return{x:t.x,y:t.y,down:t.down,color:t.color,canvas:i}},restoreState:function(i){t.startDraw()
t.x=i.x
t.y=i.y
t.down=i.down
t.setColor(i.color)
t.ctx.drawImage(i.canvas,0,0)}}
_.each(this.commands,function(n){i.handlers[n]=function(i){t[n].apply(t,i[n]||[])}})
_.each(this.mouseCommands,function(t){i.handlers[t]=function(i){ScratchpadUI.postFrame({name:t,action:i})}})
$(document).on("keydown.draw-canvas",function(n){if(!i.playing||!t.isDrawing){return}if(n.which===8){n.preventDefault()
t.undo()}})},undo:function(){this.recordView.log({canvas:"undo"})
var t=this.undoStack.pop()
if(t&&t.name==="endLine"){while(t.name!=="startLine"){t=this.undoStack.pop()}}this.redraw()},redraw:function(){var t=this.undoStack.slice(0)
this.clear(true)
this.undoStack.length=0
this.undoRunning=true
for(var i=0,n=t.length;i<n;i++){this[t[i].name].apply(this,t[i].args)}this.undoRunning=false},startLine:function(t,i){if(!this.down){this.down=true
this.x=t
this.y=i
this.log("startLine",[t,i])}},drawLine:function(t,i){if(this.down&&this.x!=null&&this.y!=null){this.ctx.beginPath()
this.ctx.moveTo(this.x,this.y)
this.ctx.lineTo(t,i)
this.ctx.stroke()
this.ctx.closePath()
this.x=t
this.y=i
this.log("drawLine",[t,i])}},endLine:function(){if(this.down){this.down=false
this.log("endLine")}},log:function(t,i){i=i||[]
if(!this.undoRunning){var n={}
n[t]=i
Record.log(n)}this.undoStack.push({name:t,args:i})},setColor:function(t){if(t!=null){if(!this.isDrawing){this.startDraw(true)}this.color=t
this.ctx.shadowColor="rgba("+this.colors[t]+",0.5)"
this.ctx.strokeStyle="rgba("+this.colors[t]+",1.0)"
this.log("setColor",[t])}this.trigger("colorSet",t)},clear:function(t){this.ctx.clearRect(0,0,600,480)
this.x=null
this.y=null
this.down=false
if(t!==true){this.log("clear")}},startDraw:function(t){if(this.isDrawing){return}this.isDrawing=true
this.undoStack.length=0
if(t!==true){this.setColor("black")}this.trigger("drawStarted")},endDraw:function(){if(!this.isDrawing){return}this.isDrawing=false
this.setColor(null)
this.trigger("drawEnded")}})
});
KAdefine("javascript/scratchpads-package/scratchpad-ui.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var HoverCard=require("../shared-package/hover-card.js")
window.ScratchpadUI=window.ScratchpadUI||{}
$.extend(ScratchpadUI,{dom:{PAGE:".scratchpad-page",EDITOR:".scratchpad-editor",CANVAS_LOADING:".scratchpad-canvas-loading",OUTPUT_FRAME:"#output-frame",ALL_OUTPUT:"#output, #output-frame",DRAW_CANVAS:".scratchpad-draw-canvas",DRAW_COLOR_BUTTONS:"#draw-widgets a.draw-color-button",CANVAS_WRAP:".scratchpad-canvas-wrap",EDITOR_WRAP:".scratchpad-editor-wrap",SAVE_BUTTON:"#save-button",FORK_BUTTON:"#fork-button",SAVE_AND_FORK_BUTTONS:"#save-button, #fork-button",HEADER_VOTE:".task-header .discussion-vote",HEADER_VOTE_UP:".task-header .discussion-vote .vote-up",SPINOFF_NOTICE:".spinoff-notice",SPINOFF_NOTICE_BUTTON:".spinoff-notice a",MOD_HOTLIST_BUTTON:".scratchpad-hotlist-button",MOD_DELETE_BUTTON:".scratchpad-softdelete-button",VOTE_CONTROL:".scratchpad-vote .discussion-vote",VOTE_UP:".scratchpad-vote .discussion-vote .vote-up",VOTE_DOWN:".scratchpad-vote .discussion-vote .vote-DOWN"},forceRedirect:function(t){ScratchpadUI.checkForListenedTime()
$(window).unbind("beforeunload")
var e={url:t}
$(ScratchpadUI).trigger("redirect",e)
top.location.href=e.url},initKeybindings:function(){$(document).off("keydown",scratchpadListenKeydown)
$(document).on("keydown",scratchpadListenKeydown)},canEditChallenge:function(){if(ScratchpadUI.scratchpad.isChallenge()){return KA.isDeveloper()||_.contains(KA.getGlobalPermissions(),"EDIT_ALL_CS_CHALLENGES")||ScratchpadUI.scratchpad.isOwner()&&_.contains(KA.getGlobalPermissions(),"EDIT_OWN_CS_CHALLENGES")}return false},canEditCurrentScratchpad:function(){return ScratchpadUI.scratchpad.isNew()||ScratchpadUI.scratchpad.isOwner()||ScratchpadUI.canEditChallenge()},bindStartOverButton:function(){ScratchpadUI.$el.find(".scratchpad-startover-button").show().on("click",function(){$("<div/>").text($._("Are you sure you want to discard your changes? "+"This can't be undone.")).dialog({closeOnEscape:false,modal:true,title:$._("Do you wish to start over?"),buttons:[{text:$._("Cancel"),click:function(){$(this).dialog("close")}},{text:$._("Start Over"),click:function(){ScratchpadUI.editor.text(ScratchpadUI.scratchpad.currentRevision().get("code"))
$(ScratchpadUI).trigger("startCodeOver")
$(this).dialog("close")}}]}).parent().addClass("ui-dialog-no-close-button").end()})},hasUnsavedChanges:function(){var t=ScratchpadUI.scratchpad
var e=ScratchpadUI.editor.text()
var a=t.currentRevision()
var r=$("#save-button, #fork-button").is(":visible")
return r&&e!==a.get("code")},isSaveable:function(){var t=$("#save-button")
return t.is(":visible")&&!t.hasClass("disabled")},triggerSave:function(){$("#save-button").click()},loadDocumentationScratchpads:function(){if(ScratchpadUI._loadingDocumentationScratchpads){return}ScratchpadUI._loadingDocumentationScratchpads=true
$.get("/api/labs/scratchpads/documentation/titles",function(t){ScratchpadUI.postFrame({documentation:t})})},displayLanguageAllowsEditing:function(){return ScratchpadUI.scratchpad&&(!ScratchpadUI.scratchpad.get("category")||KA.language.indexOf("en")===0)},sandboxUrl:function(t){var e=window.location.host.toLowerCase()
if(t.indexOf("lang=")<0){t+="?lang="+KA.language}if(!/\.khanacademy\.org$/.test(e)){return t}else{var a=/([\w-]+)\.wild\.khanacademy\.org/.exec(e)
if(a){return"http://"+a[1]+".khan-academy.appspot.com"+t}else{return"https://kasandbox.org"+t}}},loadData:function(t,e){$.ajax({type:"GET",url:"/api/labs/show_scratchpad?scratchpad_id="+t,success:e,error:function(){}})},init:function(t){t=t||{}
var e=/(\d+)(\/embedded)?$/.exec(window.location.pathname)
t.id=t.id||e&&e[1]||""
t.embedded=e&&e[2]||t.embedded
t.domainSlug=t.domainSlug||"cs"
if(!t.scratchpad&&t.id){ScratchpadUI.loadData(t.id,ScratchpadUI.init)
return}var a=t.el||".scratchpad-page"
ScratchpadUI.$el=a?$(a):$(document)
ScratchpadUI.el=ScratchpadUI.$el[0]
if(t.scratchpad){ScratchpadUI.scratchpad=new Scratchpad
ScratchpadUI.scratchpad.set(ScratchpadUI.scratchpad.parse(t.scratchpad))}else{ScratchpadUI.scratchpad=new Scratchpad({title:$._("New Program"),translatedTitle:$._("New Program"),category:null,difficulty:null,tags:[],revision:new ScratchpadRevision({code:"",created:new Date})})}ScratchpadUI.userScratchpad=new UserScratchpad({scratchpad_id:ScratchpadUI.scratchpad.get("id")})
var r=ScratchpadUI.userScratchpad
ScratchpadUI.embedded=t.embedded
ScratchpadUI.trusted=t.embedded
var c=ScratchpadUI.scratchpad
var i=c.currentRevision()
var o=KA.getUserProfile()
var n={scratchpad:c.toJSON(),originScratchpad:t.originScratchpad,creatorProfile:t.creatorProfile,embedded:t.embedded,embeddedAndWithFrame:t.embedded&&/\/embedded$/.test(window.location.pathname),trusted:t.embedded,appVersion:KA.version,sandboxUrl:ScratchpadUI.sandboxUrl("/cs/exec.html"),colors:["black","red","orange","green","blue","lightblue","violet"],canEdit:ScratchpadUI.canEditCurrentScratchpad(),canRecord:KA.isDeveloper()||o&&o.get("canRecordTutorial"),isDeveloper:KA.isDeveloper(),isOwner:c.isOwner(),isModerator:o&&o.get("isModerator"),profileRoot:o&&o.get("profileRoot"),translatedDescription:c.get("translatedDescription"),translatedTitle:c.get("translatedTitle"),tutorialUrl:c.get("defaultUrlPath"),isNew:c.isNew(),isDocumentation:c.get("category")==="documentation",isProject:c.isProject(),isChallenge:c.isChallenge(),isUneditableProjectFork:c.get("originIsProject")&&!ScratchpadUI.canEditCurrentScratchpad(),hasAudio:c.isTalkie(),lastUpdatedTime:i.get("created").toISOString(),showProjectFeedbackButtons:o&&!o.get("isChildAccount")&&(c.isOwner()||c.isProject()),hideSave:t.embedded&&!c.isChallenge()}
if(c.get("byChild")){n.private=true}else if(c.get("key")){$.extend(n,{sumVotesIncremented:c.get("sumVotesIncremented"),key:c.get("key"),showModControls:o&&o.get("isModerator"),flags:c.get("flags"),flaggedBy:c.get("flaggedBy"),numberOfFlags:c.get("flags").length,definitelyNotSpam:c.get("definitelyNotSpam"),hideFlagControls:c.inTutorial(),showAuthorControls:c.isOwner(),isScratchpad:true,inQueue:false,hideModDelete:c.isOwner()||KA.isDeveloper()})}if(!t.embeddedAndWithFrame&&t.discussion){var d=parseQueryString(window.location.search.slice(1))
if(d.qa_expand_key){t.discussion.expandFeedbackType="questions"
t.discussion.qaExpandKey=d.qa_expand_key}$.extend(n,t.discussion)}ScratchpadUI.registerDiscussionTemplates()
$(ScratchpadUI).trigger("render")
var s=Templates.get("scratchpads.play-page")
ScratchpadUI.$el.html(s(n))
if(!t.embeddedAndWithFrame){ScratchpadUI.initDiscussion(t.discussion)}if(t.domainSlug){ScratchpadUI.$el.find("#challenge-task-container").removeClass("cs").addClass(t.domainSlug)}ScratchpadUI.initAndBind()
if(t.id&&(!ScratchpadUI.initVoting(t)||!ScratchpadUI.initUserScratchpad(t))){if(!(c.isChallenge()||c.isProject()||c.isTalkie())){ScratchpadUI.startScratch()}ScratchpadUI.loadData(t.id,function(t){ScratchpadUI.initVoting(t)
ScratchpadUI.initUserScratchpad(t)
ScratchpadUI.startScratch()})}else{ScratchpadUI.startScratch()}},initUserScratchpad:function(t){if(t.userScratchpad){ScratchpadUI.userScratchpad.set(ScratchpadUI.userScratchpad.parse(t.userScratchpad))
return true}},initVoting:function(t){if(!t.embedded&&("upVoted"in t||"downVoted"in t)){$(ScratchpadUI.dom[t.upVoted?"VOTE_UP":"VOTE_DOWN"]).addClass("voted")
Discussion.Voting.init($(ScratchpadUI.dom.VOTE_CONTROL))
return true}return!!t.embedded},initDiscussion:function(t){if(ScratchpadUI.scratchpad.isNew()){Discussion.Documentation.load(true)}else if(t){Discussion.init(t)}},registerDiscussionTemplates:function(){Discussion._registerTemplates()
Handlebars.registerPartial("discussion_discussion",Templates.get("discussion.discussion"))
Handlebars.registerPartial("discussion_video-discussion",Templates.get("discussion.video-discussion"))
Handlebars.registerPartial("discussion_question-form",Templates.get("discussion.question-form"))
Handlebars.registerPartial("discussion_comment-form",Templates.get("discussion.comment-form"))
Handlebars.registerPartial("discussion_question-guidelines",Templates.get("discussion.question-guidelines"))
Handlebars.registerPartial("discussion_feedback-guidelines",Templates.get("discussion.feedback-guidelines"))
Handlebars.registerPartial("discussion_discussion-guidelines",Templates.get("discussion.discussion-guidelines"))
Handlebars.registerPartial("discussion_discussion-list",Templates.get("discussion.discussion-list"))}})
window.featureDetect=function(){var t=document.createElement("canvas")
return!!(window.JSON&&window.postMessage&&t&&t.getContext)}
function scratchpadListenKeydown(t){if(!jQuery.browser.msie&&t.which===8&&!$(t.target).is(":input")){t.preventDefault()}if(t.which===83&&(t.ctrlKey||t.metaKey)){if(ScratchpadUI.isSaveable()){ScratchpadUI.triggerSave()}t.preventDefault()}}window.ScratchpadUIStart=function(t){(function(){var e
$(document).on("mouseenter",".author-nickname",function(){var t="top left"
if(window!==window.top){t="bottom left"}HoverCard.createHoverCardQtip($(this),{my:t,at:"bottom left"})})
var a=true
var r=document.documentElement
var c=parseQueryString(t)
if(c.editor==="no"){r.className+=" no-editor"}if(c.output==="no"){r.className+=" no-output"}if(c.buttons==="no"){r.className+=" no-buttons"}if(c.author==="no"){r.className+=" no-author"}if(c.blank==="yes"){ScratchpadUI.blank=true}if(c.autoFocus==="no"){a=false}if(c.settings){ScratchpadUI.settings=JSON.parse(c.settings)}if($(window).width()<=1024){a=false}ScratchpadUI.localStorage=$.extend(ScratchpadUI.localStorage||{},{SCRATCHPADS:"cs-scratchpad-new"+KA.getUserID()})
ScratchpadUI.initAndBind=function(){var t=this
if(o()){return}if(!window.featureDetect()){return}$(ScratchpadUI).trigger("load")
if(Discussion.data){if(ScratchpadUI.scratchpad.isOwner()){Discussion.maybeShowTab("questions")
Discussion.maybeShowTab("comments")}else if(!ScratchpadUI.scratchpad.inTutorial()){Discussion._switchType("spin-offs")
Discussion.maybeShowTab("projectfeedback")}else if(ScratchpadUI.scratchpad.isTalkie()){Discussion._switchType("questions")}}this.drawCanvas=new ScratchpadDrawCanvas({el:ScratchpadUI.dom.DRAW_CANVAS,record:Record})
this.drawCanvas.on({drawStarted:function(){$(ScratchpadUI.dom.DRAW_CANVAS).show()},drawEnded:function(){$(ScratchpadUI.dom.DRAW_CANVAS).hide()},colorSet:function(t){$(ScratchpadUI.dom.DRAW_COLOR_BUTTONS).removeClass("ui-state-active")
if(t!==null){$("#"+t).addClass("ui-state-active")}}})
var e=this.editor=new ScratchpadEditor({el:ScratchpadUI.dom.EDITOR,autoFocus:a,config:ScratchpadConfig,record:Record})
ScratchpadUI.editor.$el.hotNumber(false)
ScratchpadUI.editor.$el.resizable({handles:"s",resize:function(){e.editor.resize()}})
if(c.background){t.$el.find(t.dom.PAGE).css("background",c.background)}var r=false
var i=function(){if(!KA.isPhantom()&&!r&&Record.currentTime()){r=true
$.post("/api/labs/user/badge_action",{action:"SCRATCHPAD_TINKER",casing:"camel"})}}
ScratchpadUI.editor.on("userChangedCode",_.debounce(i,500))
t.$el.delegate(".hotnumber","mousedown",function(t){t.preventDefault()})
t.$el.delegate(".simple-button.disabled, .ui-state-disabled","click",function(t){t.stopImmediatePropagation()
return false})
var n=function(){var e={"true":$._("Undo hide from hotlist"),"false":$._("Hide from hotlist")}
var a={"true":$._("Undo hide everywhere"),"false":$._("Hide everywhere")}
$(t.dom.MOD_HOTLIST_BUTTON).removeAttr("disabled").text(e[ScratchpadUI.scratchpad.get("hideFromHotlist")])
$(t.dom.MOD_DELETE_BUTTON).removeAttr("disabled").text(a[ScratchpadUI.scratchpad.get("deleted")])}
var d=function(e,a){t.$el.delegate(e,"click",function(){$(this).text("Processing...").attr("disabled","disabled")
var t={}
t[a]=!ScratchpadUI.scratchpad.get(a)
ScratchpadUI.scratchpad.save(t,{patch:true,success:function(){n()},error:function(){window.alert("There was an error processing the request.")
n()}})})}
d(t.dom.MOD_HOTLIST_BUTTON,"hideFromHotlist")
d(t.dom.MOD_DELETE_BUTTON,"deleted")
t.$el.delegate(".scratchpad-delete-button","click",function(){var t=$("<div/>").text($._("Are you sure you want to delete this project? "+"This can't be undone.")).dialog({closeOnEscape:false,modal:true,title:$._("Delete this project?"),buttons:[{text:$._("Cancel"),click:function(){$(this).dialog("close")}},{text:$._("Delete"),click:function(){t.dialog("option",{title:$._("Deleting..."),buttons:{}}).text($._("Deleting project. You'll be redirected "+"when it's done."))
ScratchpadUI.scratchpad.destroy({success:function(){ScratchpadUI.forceRedirect("/cs")},error:function(){t.dialog("option",{title:$._("Deletion Failed."),buttons:[{text:$._("Okay")}]}).html($._("Something went wrong and we "+"couldn't delete the project. "+"Please try again!"))}})}}]}).parent().addClass("ui-dialog-no-close-button").end()})
t.$el.delegate("#restart-code","click",function(){s()})
t.$el.on("click",".fork",function(t){if($(t.target).hasClass("discussion-author")){$(ScratchpadUI).trigger("clickedSpinoffAuthor")}else{$(ScratchpadUI).trigger("clickedSpinoff")}})
t.$el.on("click",".hover-card-content a",function(){$(ScratchpadUI).trigger("clickedSpinoffAuthor")})
t.$el.delegate("#save-button, #fork-button","click",function(){$("#save-button, #fork-button").addClass("disabled")
var t={isNewScratchpad:ScratchpadUI.scratchpad.isNew(),fork:$(this).is("#fork-button"),cancelSave:function(){t.dialog.dialog("close")
$("#save-button").text($._("Save"))
$("#save-button, #fork-button").removeClass("disabled")
$(ScratchpadUI).trigger("cancelSave")},showError:function(e){var a=t.dialog
var r={}
r[$._("Okay")]=t.cancelSave
a.html(e)
a.dialog("option",{buttons:r})
a.dialog("open")}}
t.showDialog=!!(t.fork||t.isNewScratchpad)
t.dialog=$("<div/>").dialog({closeOnEscape:false,modal:true,autoOpen:t.showDialog,width:600}).parent().addClass("ui-dialog-no-close-button").end()
$(ScratchpadUI).trigger("save",t)
ScratchpadUI.saveTitle(t)})
var l=$(ScratchpadUI.dom.HEADER_VOTE_UP)
if(l.length){$(ScratchpadUI.dom.HEADER_VOTE).html($("<button>").addClass(l.attr("class")).addClass("simple-button").data(l.data()).html("<i class='icon-thumbs-up icon-large'></i> "+$._("Vote Up")))}$(window).bind("beforeunload",function(){ScratchpadUI.checkForListenedTime()
var t=ScratchpadUI.scratchpad
var e=ScratchpadUI.editor.text()
var a=t.currentRevision()
if(!t.isNew()){var r={defaultMsg:$._("You have unsaved changes! "+"Are you sure you wish to leave the page?")}
if(ScratchpadUI.hasUnsavedChanges()){r.warnMsg=r.defaultMsg}$(ScratchpadUI).trigger("beforeunload",r)
return r.warnMsg}a.set("code",e)
var c={}
LocalStore.set(ScratchpadUI.localStorage.SCRATCHPADS,{cursor:ScratchpadUI.editor.getCursor(),scratchpad:ScratchpadUI.scratchpad})})}
ScratchpadUI.saveTitle=function(t){if(!t.fork&&!t.isNewScratchpad){ScratchpadUI.validate(t)
return}var e=ScratchpadUI.scratchpad
var a=e.currentRevision()
var r=t.dialog
var c=e.get("translatedTitle")
var i='Spin-off of ".*"'
var o=$._('Spin-off of "%(title)s"',{title:"%%%"}).replace(/[\\^$*+?.()|[\]{}]/g,"\\$&").replace("%%%",".*")
var n="^("+o+"|"+i+")"
if(t.fork&&!RegExp(n,"i").test(c)){c=$._('Spin-off of "%(title)s"',{title:c})}if(t.saveMessage){$(r).append(t.saveMessage)}else{$("<p>").text($._("We're going to save your program now, please set a "+"descriptive title for it:")).appendTo(r)}var d=$("<div class='scratchpad-change-title-prompt'/>").append($("<input/>",{val:c})).append("<p>"+$._("To find your programs later, you can:")+"</p><ul>"+"<li>"+$._('Click "My Programs" from links around the '+"programming part of the site.")+"</li>"+"<li>"+$._("Click your name in the upper right corner to get "+'to your profile, then click "programs".')+"</li>"+(t.fork?"<li>"+$._("To find all of your spin-offs of this program, "+'click "Spin-offs" and look under "Your spin-offs."')+"</li>":"")+"</ul>").appendTo(r)
var s={}
s[$._("Save")]=function(){var a=d.children("input").val()
if(!a){return}e.setTitle(a)
d.remove()
ScratchpadUI.validate(t)}
s[$._("Cancel")]=t.cancelSave
r.dialog("option",{title:$._("Save As..."),buttons:s,close:t.cancelSave})
d.children("input").focus().select()}
ScratchpadUI.isAttemptingSomething=function(){if(ScratchpadUI.embedded){return true}return!ScratchpadUI.canEditCurrentScratchpad()}
ScratchpadUI.loadUserSpinOffs=function(){Discussion.maybeShowTab("spin-offs",function(){if(!Discussion.SpinOffs.userForkList||Discussion.SpinOffs.userForkList.isEmpty()){$(Discussion.SpinOffs._tabHeaderSelector).hide()}else{Discussion._switchType("spin-offs")
$(ScratchpadUI.dom.SPINOFF_NOTICE).slideDown(1e3)}})
this.$el.on("click",this.dom.SPINOFF_NOTICE_BUTTON,function(){Discussion._switchType("spin-offs")
$("html, body").animate({scrollTop:$(".discussion-container").offset().top-100},1e3)
return false})}
ScratchpadUI.stashUserCode=function(t){var e=ScratchpadUI.editor.text()
var a=ScratchpadUI.userScratchpad
t=t||{}
t.patch=true
a.save({stashed_code:e},t)}
ScratchpadUI.save=function(t){var e=t.dialog
$("#save-button").html("<span class='loading'></span> "+$._("Saving..."))
e.html($._("Saving Project..."))
u(function(a){h(a,t)
var r=ScratchpadUI.scratchpad
if(t.fork){r=r.fork()}r.save({},{success:function(a){if(t.isNewScratchpad){LocalStore.del(ScratchpadUI.localStorage.SCRATCHPADS)}if(t.showDialog){e.html($._("Saved! Loading project..."))
ScratchpadUI.forceRedirect(a.pathForShow())}else{i()}$(ScratchpadUI).trigger("saveCompleted",a)},error:function(){t.showError($._("Error saving scratchpad to the server. "+"Please try again!"))}})})}
var i=function(){$("#save-button, #fork-button").removeClass("disabled")
$("#save-button").addClass("hilite").text($._("Saved!"))
setTimeout(function(){$("#save-button").removeClass("hilite").text($._("Save"))},2e3)}
var o=function(){var t=ScratchpadUI.scratchpad.get("defaultUrlPath")
if(t&&!ScratchpadUI.embedded&&!ScratchpadUI.canEditCurrentScratchpad()){ScratchpadUI.forceRedirect(t)
return true}return false}
var n=function(){var t=/^.*:\/\/[^\/]*/.exec($("#output-frame").attr("data-src"))
return t?t[0]:window.location.protocol+"//"+window.location.host}
var d=function(t){$("#output-frame")[0].contentWindow.postMessage(JSON.stringify(t),n())}
ScratchpadUI.postFrame=d
var s=function(){d({restart:true})}
var l=function(e){var a=parseQueryString(t)
if(a.fast_n_furious){d({fastNFurious:true})}var r={code:e,version:ScratchpadConfig.curVersion(),settings:ScratchpadUI.settings||{}}
$(ScratchpadUI).trigger("runCode",r)
d(r)}
ScratchpadUI.updateCanvasSize=function(t,e){var a=400
var r=400
t=t||a
e=e||r
var i=ScratchpadUI.$el
var o=ScratchpadUI.dom
i.find(o.OUTPUT_FRAME).width(t)
i.find(o.ALL_OUTPUT).height(e)
i.find(o.EDITOR).height(e)
var n=c.buttons==="no"?0:2
i.find(o.CANVAS_WRAP).width(t+n)
var d=c.output!=="no"?t+n:0
var s=i.find(o.EDITOR_WRAP)
s.css(KA.languageIsRtl?"margin-left":"margin-right",d)
if(ScratchpadUI.embedded&&c.editor==="no"){$("html").width(t+n).height(e)}var l=ScratchpadUI.editor.editor
l.resize()
l.setFontSize(s.width()<400?"12px":"14px")
$(ScratchpadUI).trigger("canvasSizeUpdated",{width:t,height:e})}
window.toExec=null
ScratchpadUI.startScratch=function(){var t=ScratchpadUI.scratchpad
var a=ScratchpadUI.editor.editor
var r
if(t.isNew()){var i=LocalStore.get(ScratchpadUI.localStorage.SCRATCHPADS)
if(i){t.set(t.parse(i.scratchpad))
r=i.cursor}}var o=t.currentRevision()
var n,d,u
try{n=window.parent
d=c.origin||n.location.origin}catch(h){}var p=function(t){if(n&&d&&n!==window){t.id=u||c.id||""
try{n.postMessage(JSON.stringify(t),d)}catch(e){}}}
$(window).bind("message",function(t){var a=t.originalEvent
var r
try{r=JSON.parse(a.data)}catch(c){}if(r){$(ScratchpadUI).trigger("update",r)
if(r.loaded){ScratchpadUI.$el.find(ScratchpadUI.dom.CANVAS_LOADING).hide()}if(r.code!==undefined){ScratchpadUI.editor.text(r.code)
ScratchpadUI.editor.originalCode=r.code
s()}if(r.validate!=null){e=r.validate}if(r.lines!==undefined){ScratchpadUI.editor.toggleGutter(r.lines)}if(r.restart){s()}if(r.cursor){ScratchpadUI.editor.setCursor(r.cursor)
ScratchpadUI.editor.setErrorHighlight(true)}if(r.focus){ScratchpadUI.editor.focus()}}})
$("#output-frame").bind("load",function(){toExec=true})
a.on("change",function(){toExec=true})
setInterval(function(){if(toExec!==null){l(toExec===true?ScratchpadUI.editor.text():toExec)
toExec=null}},100)
$(ScratchpadConfig).bind("versionSwitched",function(t,e){toExec=true
ScratchpadConfig.runVersion(e,"jshint")})
ScratchpadBingo.init()
var f={code:""}
$(ScratchpadUI).trigger("initCode",f)
var g=f.code
if(!ScratchpadUI.blank&&!c.code){g=g||c.code||o.get("code")||""}if(g!==undefined){ScratchpadUI.editor.text(g)
ScratchpadUI.editor.originalCode=g}ScratchpadUI.editor.focus()
if(r){ScratchpadUI.editor.setCursor(r)}else{ScratchpadUI.editor.editor.selection.setSelectionRange({start:{row:0,column:0},end:{row:0,column:0}})}$("#page-overlay").hide()
setTimeout(function(){ScratchpadUI.editor.$el.hotNumber(true)},100)
ScratchpadUI.updateCanvasSize(parseFloat(c.width)||t.get("width"),parseFloat(c.height)||t.get("height"))
if(ScratchpadUI.embedded&&t.get("canvasOnly")){$(ScratchpadUI.dom.PAGE).addClass("no-editor no-buttons")}if(!ScratchpadUI.embedded&&ScratchpadUI.canEditCurrentScratchpad()){$("#save-button").show()}$(".timeago").timeago()
var S=$("#save-button").is(":visible")
var v=$(".title-box").click(function(){if(!S||$("#edit-title").hasClass("disabled")){return}$("#edit-title").hide()
U.val(t.get("translatedTitle")).show().focus().select()
v.find("#scratchpad-title").addClass("hidden-title")}).find("#scratchpad-title").text(t.get("translatedTitle")).end()
if(!S){$("#edit-title").hide()
v.css("cursor","auto")}else if(!ScratchpadUI.displayLanguageAllowsEditing()){$("#edit-title").addClass("disabled")
$("#edit-title").text($._("(Must be in English to edit this scratchpad title)"))}var U=$("<input>").addClass("title").hide().appendTo(v).blur(function(){if(U.val().length>0){t.setTitle(U.val())}if(!t.isNew()){$("#edit-title").show()
v.find("#scratchpad-title").text(t.get("translatedTitle")).removeClass("hidden-title")
U.hide()}}).keypress(function(t){if(t.which===13){U.trigger("blur")
t.preventDefault()}})
if(t.isNew()){v.click()}ScratchpadUI.initKeybindings()
$(ScratchpadUI).trigger("started")
p({embedReady:true})
if(!S){$("#fork-button").addClass("green")}}
var u=function(t){$(window).unbind("message.getScreenshot")
$(window).bind("message.getScreenshot",function(e){if(/^data:/.test(e.originalEvent.data)){t(e.originalEvent.data)}})
d({screenshot:true})}
var h=function(t,e){var a=ScratchpadUI.scratchpad
var r=a.currentRevision()
var c={code:ScratchpadUI.editor.text(),image_url:t,config_version:a.getVersion()}
e.data=c
$(ScratchpadUI).trigger("saveData",e)
r.set(c)}
var p=function(t){var e=["function(){var draw = function(){};}","function(){draw = function(){};}","function(){var mousePressed = function(){};}","function(){var mouseReleased = function(){};}","function(){var mouseMoved = function(){};}","function(){var mouseClicked = function(){};}","function(){var keyPressed = function(){};}","function(){mousePressed = function(){};}","function(){mouseReleased = function(){};}","function(){mouseMoved = function(){};}","function(){mouseClicked = function(){};}","function(){keyPressed = function(){};}","function(){random();}","function(){var _ = new Random();}","function(){var _ = random();}"]
try{for(var a=0;a<e.length;a++){if(Structured.match(t,e[a])){return false}}return true}catch(r){}}
var f=function(){var t=ScratchpadUI.editor.text()
var e=p(t)
if(e!==undefined){$("#restart-code").toggle(!e)}}
var g=function(){var t=ScratchpadUI.scratchpad.isChallenge()
var e=ScratchpadUI.scratchpad.isTalkie()
if(e&&(!Record.playPos||Record.playing)||t){$("#fork-button").hide()}else{$("#fork-button").show()}}
$(ScratchpadUI).on({started:function(){f()
g()
var t=ScratchpadUI.editor.editor
t.on("change",_.debounce(function(){ScratchpadUI.loadDocumentationScratchpads()
g()
f()},300))
t.addEventListener("click",function(){var t=ScratchpadUI.scratchpad.isTalkie()
if(t&&!Record.playing||!t&&!Record.recording){ScratchpadUI.editor.insertNewlineIfCursorAtEnd()}})}})})()}
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-playback.js", function(require, requireWithVars, module, exports) {
(function(){$.extend(ScratchpadUI.dom,{BIG_PLAY_LOADING:".scratchpad-editor-bigplay-loading",BIG_PLAY_BUTTON:".scratchpad-editor-bigplay-button",PLAYBAR:".scratchpad-playbar",PLAYBAR_AREA:".scratchpad-playbar-area",PLAYBAR_OPTIONS:".scratchpad-playbar-options",PLAYBAR_LOADING:".scratchpad-playbar .loading-msg",PLAYBAR_PROGRESS:".scratchpad-playbar-progress",PLAYBAR_PLAY:".scratchpad-playbar-play",PLAYBAR_TIMELEFT:".scratchpad-playbar-timeleft",PLAYBAR_UI:".scratchpad-playbar-play, .scratchpad-playbar-progress"})
$(ScratchpadUI).bind({load:function(){ScratchpadUI.player=null
ScratchpadUI.listenStart=null
window.Record=this.record=new ScratchpadRecord({editor:this.editor})
var e=ScratchpadUI.$el
e.find(ScratchpadUI.dom.DRAW_COLOR_BUTTONS).each(function(){$(this).addClass("ui-button").children().css("background",this.id)})
e.buttonize()
e.delegate("a.draw-color-button","buttonClick",function(){ScratchpadUI.drawCanvas.setColor(this.id)
ScratchpadUI.editor.focus()})
e.delegate(".disable-overlay","click",function(){Record.pausePlayback()})
e.find(ScratchpadUI.dom.PLAYBAR_PROGRESS).slider({range:"min",value:0,min:0,max:100,start:function(){if(Record.recording){return false}Record.seeking=true
ScratchpadUI.wasPlaying=Record.playing
Record.pausePlayback()},slide:function(e,a){var r=a.value*1e3
if(r!==Record.endTime()){i(r)
s(r)}},stop:function(e,a){Record.seeking=false
i(a.value*1e3)
if(ScratchpadUI.wasPlaying){setTimeout(function(){Record.play()},1e3)}}})
var a=function(){if(Record.playing){Record.pausePlayback()}else{Record.play()}}
e.find(ScratchpadUI.dom.PLAYBAR_PLAY).off("click.play-button").on("click.play-button",function(){a()})
$(ScratchpadUI).one("readyToPlay",function(){var e=ScratchpadUI.$el
var r=ScratchpadUI.dom
e.find(r.PLAYBAR_LOADING).hide()
e.find(r.PLAYBAR_AREA).show()
e.find(r.BIG_PLAY_BUTTON).off("click.big-play-button").on("click.big-play-button",function(){e.find(r.BIG_PLAY_BUTTON).hide()
a()})
e.find(r.PLAYBAR_PLAY).on("click",function(){e.find(r.BIG_PLAY_BUTTON).hide()})
e.find(r.EDITOR).on("click",function(){e.find(r.BIG_PLAY_BUTTON).hide()})
e.find(r.BIG_PLAY_LOADING).hide()
e.find(r.BIG_PLAY_BUTTON).show()})
e.delegate("#draw-clear-button","buttonClick",function(){ScratchpadUI.drawCanvas.clear()
ScratchpadUI.drawCanvas.endDraw()
ScratchpadUI.editor.focus()})
e.delegate("#restart-code","click",function(){Record.log({restart:true})})
e.find("#record").on("click",t)
Record.loadRecording(ScratchpadUI.scratchpad.currentRevision().get("recording"))
if(ScratchpadUI.scratchpad.getYoutubeId()){c()}},started:function(){var e=ScratchpadUI.scratchpad.currentRevision()
var a
if(e.hasAudio()){soundManager.setup({url:"/soundmanager"+soundManager.versionNumber+"/",debugMode:false,useFlashBlock:true,onready:function(){window.clearTimeout(a)
r()},ontimeout:function(e){window.clearTimeout(a)
a=window.setTimeout(function(){$("#sm2-container div").remove()
soundManager.reboot()},3e3)}})
soundManager.beginDelayedInit()}},update:function(e,a){if(a.log){Record.log(a.log)}},save:function(e,a){var r=ScratchpadUI.scratchpad
var t=r.currentRevision()
a.user_can_record=KA.isDeveloper()||KA.getUserProfile()&&KA.getUserProfile().get("canRecordTutorial")
a.hasRecording=a.user_can_record&&(Record.recorded||t.hasAudio())},saveData:function(e,a){var r=ScratchpadUI.scratchpad
var t=r.currentRevision()
var d=ScratchpadUI.editor.text()
a.data.code=a.saveRecording&&Record.recorded?t.get("code"):d
a.data.recording=a.saveRecording?Record.dumpRecording():{}
a.data.config_version=a.saveRecording?r.getVersion():ScratchpadConfig.curVersion()},beforeunload:function(e,a){if(a.warnMsg&&Record.playing){a.warnMsg=undefined}},remove:function(){if(window.Recorder&&window.Recorder.recordingAudio){window.Recorder.realStop()}if(ScratchpadUI.player){ScratchpadUI.player.destruct()
Record.stopPlayback()}ScratchpadUI.recordHandlersBound=false}})
ScratchpadUI.checkForRecording=function(e){var r=ScratchpadUI.scratchpad
var t=r.currentRevision()
var d=Record.initData.code||t.get("code")
var c=ScratchpadUI.editor.text()
var o=Record.recorded?t.get("code"):ScratchpadUI.editor.text()
if(!o){var i=$._("Whoops!"),n=$._("You aren't saving any code. "+"You should enter some code to save!")
e.showError("<strong>"+i+"</strong><p>"+n+"</p>")
return}if(!e.showDialog&&e.hasRecording){e.showDialog=true}if(e.hasRecording&&!Record.recorded&&(d!==c||Record.getVersion()!==r.getVersion())){e.dialog.dialog({closeOnEscape:false,modal:true,autoOpen:true,title:"Keep Recording?",buttons:[{text:"Delete Recording",click:function(){$(this).dialog("close")
e.saveRecording=false
a(e,ScratchpadUI.save)}},{text:"Keep Recording",click:function(){$(this).dialog("close")
Record.initData.code=ScratchpadUI.editor.originalCode
e.saveRecording=true
a(e,ScratchpadUI.save)}}]}).parent().addClass("ui-dialog-no-close-button").end()
e.dialog.html("<p>You've made changes to the code or version and the "+"recording is no longer up-to-date. What do you wish to do?</p>")}else{e.saveRecording=e.hasRecording
a(e,ScratchpadUI.save)}}
var e=function(){d()
if(!ScratchpadUI.recordView){var e=ScratchpadUI.$el
ScratchpadUI.recordView=new ScratchpadRecordView({el:e.find(".scratchpad-dev-record-row"),recordButton:e.find("#record"),saveButton:$("#save-button"),scratchpad:ScratchpadUI.scratchpad})}ScratchpadUI.recordView.initializeRecordingAudio()}
var a=function(e,a){var r=ScratchpadUI.scratchpad
var t=r.currentRevision()
e.dialog.dialog("option",{title:$._("Saving..."),buttons:{}})
if(!Record.recorded||!Record.recordingAudio){a(e)
return}e.dialog.html($._("Uploading recording..."))
var d=new TransloaditXhr({authKey:window.localStorage["TRANSLOADIT_AUTH_KEY"],templateId:"7b622b7a661855d67280551cf499aca0",successCb:function(r){t.set("mp3_url",r.mp3[0].url.replace(/^http:/,"https:"))
a(e)},errorCb:function(a){e.showError(a)}})
ScratchpadUI.recordView.getFinalAudioRecording(function(e){d.uploadFile(e.wav)})}
var r=function(){var e=ScratchpadUI.scratchpad
var a=e.currentRevision()
if(!a.hasAudio()){return}ScratchpadUI.wasPlaying=undefined
Record.time=0
ScratchpadUI.player=soundManager.createSound({id:"sound"+(new Date).getTime(),url:a.getMp3Url(),autoLoad:true,whileplaying:function(){i(Record.currentTime())
if(!Record.seeking){$(ScratchpadUI.dom.PLAYBAR_PROGRESS).slider("option","value",Record.currentTime()/1e3)}Record.trigger("playUpdate")},onplay:function(){Record.play()},onresume:function(){Record.play()},onpause:function(){Record.pausePlayback()},onload:function(){Record.durationEstimate=Record.duration=this.duration
Record.trigger("loaded")},whileloading:function(){Record.duration=null
Record.durationEstimate=this.durationEstimate
Record.trigger("loading")},onfinish:function(){Record.trigger("playPaused")
Record.trigger("playStopped")
Record.trigger("playEnded")},onsuspend:function(){$(ScratchpadUI).trigger("readyToPlay")}})
var r=setInterval(function(){if(ScratchpadUI.player&&ScratchpadUI.player.bytesLoaded>0){clearInterval(r)
$(ScratchpadUI).trigger("readyToPlay")}},16)
d()}
var t=function(){if(Record.recording){ScratchpadUI.recordView.stopRecordingCommands()
return}var a=ScratchpadUI.scratchpad
var r=a.currentRevision()
var t=ScratchpadUI.editor.text()
var d
if(!t){d=$("<div>").dialog({modal:true,title:$._("There is no code in the editor!")})
d.append($("<p>").text($._("The student won't see anything when they first see "+"the project, you should enter some code.")))}else if(a&&a.getVersion()!==ScratchpadConfig.latestVersion()){d=$("<div>").dialog({modal:true,title:$._("Outdated Code")})
d.append($("<p>").text($._("Your code is on an old version of the API, you "+"should upgrade your code before recording!")))}else if(!r||!r.hasAudio()){e()
ScratchpadUI.editor.focus()}else{d=$("<div>").text($._("There is already a recording attached to this "+"project. What do you wish to do?")).dialog({closeOnEscape:true,modal:true,title:$._("New Recording"),buttons:[{text:$._("Record New Audio"),click:function(){$(this).dialog("close")
e()}}]})}}
var d=function(){if(Record.recordHandlersBound){return}Record.recordHandlersBound=true
if(ScratchpadUI.player){Record.bind({loading:function(){o()},loaded:function(){if(Record.commands){Record.commands.push({time:Record.endTime()})}o()},playStarted:function(){if(ScratchpadUI.player.paused){ScratchpadUI.player.resume()}else if(ScratchpadUI.player.playState===0){ScratchpadUI.player.play()}},playPaused:function(){ScratchpadUI.player.pause()}})}Record.bind({playPaused:function(){if(!Record.recordingAudio){ScratchpadUI.scratchpad.get("revision").set("code",ScratchpadUI.editor.text())}},seekDone:function(){if(!Record.recordingAudio){ScratchpadUI.scratchpad.get("revision").set("code",ScratchpadUI.editor.text())}}})
Record.bind({playStarted:function(){if(!Record.recordingAudio){ScratchpadUI.listenStart=(new Date).getTime()}},playPaused:function(){ScratchpadUI.checkForListenedTime()}})
Record.bind({playStarted:function(e,a){ScratchpadConfig.switchVersion(Record.getVersion())
if(!Record.recording&&!a){ScratchpadUI.editor.reset(Record.initData.code,false)
ScratchpadUI.drawCanvas.clear(true)
ScratchpadUI.drawCanvas.endDraw()}if(!Record.recording){$("#record").addClass("disabled")}$("#restart-code").addClass("disabled")
if(!Record.recording){$("html").addClass("playing")
$(".disable-overlay").show()}ScratchpadUI.editor.unfold()
$(ScratchpadUI.dom.PLAYBAR_PLAY).find("span").removeClass("icon-play").addClass("icon-pause")},playEnded:function(){$.post("/api/labs/user/badge_action",{action:"SCRATCHPAD_FINISH_TUTORIAL",casing:"camel"})
ScratchpadUI.renderComplete(false,$("#objectives-pane"))
if(window.Tutorial&&window.Tutorial.Nav&&window.Tutorial.Nav.liveContext){var e=Tutorial.Nav.liveContext.navListView.getNextNode()
if(e){var a=e.get("translatedTitle")
var r=$._('Continue to "%(title)s"',{title:a})
$(".scratchpad-continue-button").remove()
$("<button>").addClass("simple-button green scratchpad-continue-button").text(r).hide().on("click",function(){Tutorial.Nav.navigateToNode(Tutorial.Nav.getNodeUrl(e))}).prependTo(".tutorial-description .title-header").fadeIn()}}ScratchpadConfig.switchVersion(ScratchpadUI.scratchpad.getVersion())},playPaused:function(){$("html").removeClass("playing")
$(".disable-overlay").hide()
$("#restart-code").removeClass("disabled")
$("#record").removeClass("disabled")
$(ScratchpadUI.dom.PLAYBAR_PLAY).find("span").addClass("icon-play").removeClass("icon-pause")},recordStarted:function(){ScratchpadUI.postFrame({recording:true})
$("#draw-widgets").removeClass("hidden").show()
$(".disable-overlay").hide()
ScratchpadUI.editor.editor.setReadOnly(false)
$("html").removeClass("playing")
if(Record.hasNoChunks()){ScratchpadUI.drawCanvas.clear(true)
ScratchpadUI.drawCanvas.endDraw()}$("#save-button, #fork-button").addClass("disabled")
$("#record").addClass("toggled")},recordEnded:function(){ScratchpadUI.postFrame({recording:false})
if(Record.recordingAudio){ScratchpadUI.recordView.stopRecordingAudio()}$("#save-button, #fork-button").removeClass("disabled")
$(ScratchpadUI.dom.PLAYBAR_UI).removeClass("ui-state-disabled")
$("#record").removeClass("toggled disabled")
Record.stopPlayback()
$(".disable-overlay").show()
$("html").addClass("playing")
ScratchpadUI.editor.editor.setReadOnly(true)
$("#draw-widgets").addClass("hidden").hide()
ScratchpadUI.drawCanvas.endDraw()
ScratchpadUI.drawCanvas.redraw()}})
Record.handlers.restart=function(){var e=$("#restart-code")
if(!e.hasClass("hilite")){e.addClass("hilite green")
setTimeout(function(){e.removeClass("hilite green")},300)}ScratchpadUI.postFrame({restart:true})}
Record.currentTime=function(){return!_.isNull(ScratchpadUI.player)?ScratchpadUI.player.position:0}
Record.endTime=function(){return this.duration||this.durationEstimate}}
var c=function(){var e
function a(){e=new InteractiveTranscriptView({model:r})
ScratchpadUI.$el.find(ScratchpadUI.dom.PAGE).append(e.render().el)
e.on("subtitleSelection",function(e){var a=e*1e3
ScratchpadUI.$el.find(ScratchpadUI.dom.PLAYBAR_PROGRESS).slider("option","value",e)
Record.seeking=true
ScratchpadUI.wasPlaying=Record.playing
Record.pausePlayback()
i(a)
s(a)
Record.seeking=false
if(ScratchpadUI.wasPlaying){setTimeout(function(){Record.play()},1e3)}})
Record.bind({playUpdate:function(){e.onPlayerUpdate(Record.currentTime()/1e3)}})}var r=new VideoTranscript({youtubeId:ScratchpadUI.scratchpad.getYoutubeId()})
r.fetch({success:function(){var t=ScratchpadUI.$el.find(ScratchpadUI.dom.PLAYBAR_OPTIONS)
t.find(".dropdown-toggle").dropdown("click").prop("disabled",false)
if(!r.hasValid()){t.find("input").attr("disabled","disabled")
t.find("label").addClass("disabled")
t.find("[data-no-transcript]").show()
return}t.delegate("input","click",function(){if(!e){a()}if($(this).is(":checked")){e.showWithSlide()}else{e.hideWithSlide()}})
if(KA.language!=="en"){t.find("input").click()}}})}
var o=function(){i(Record.currentTime())
$(ScratchpadUI.dom.PLAYBAR_PROGRESS).slider("option","max",Record.endTime()/1e3)}
var i=function(e){$(".scratchpad-playbar-timeleft").text("-"+n(Record.endTime()-e))}
var n=function(e){var a=e/1e3,r=Math.floor(a/60),t=Math.floor(a%60)
if(r<0||t<0){r=0
t=0}return r+":"+(t<10?"0":"")+t}
var s=function(e){if(!Record.seeking){$(ScratchpadUI.dom.PLAYBAR_PROGRESS).slider("option","value",e/1e3)}if(Record.seekTo(e)!==false){ScratchpadUI.player.setPosition(e)}}
ScratchpadUI.checkForListenedTime=function(){if(window.Record&&!Record.recordingAudio){if(ScratchpadUI.listenStart){var e=(new Date).getTime()
var a=e-ScratchpadUI.listenStart
ScratchpadUI.userScratchpad.addMillisecondsWatched(a,Record.currentTime(),Record.endTime())
ScratchpadUI.listenStart=null}}}
ScratchpadUI.renderComplete=function(e,a){var r
var t
if(window.Tutorial&&window.Tutorial.Nav&&window.Tutorial.Nav.liveContext){t=Tutorial.Nav.liveContext.navListView.getNextNode()
if(t){var d=t.get("translatedTitle")
r=$._('Continue to "%(title)s"',{title:d})}}var c=Templates.get("scratchpads.goal-tab")
a.html(c({isChallenge:e,continueText:r}))
if(t){a.find("#complete-tutorial-continue").on("click",function(){Tutorial.Nav.navigateToNode(Tutorial.Nav.getNodeUrl(t))})}a.find("#complete-spin-off").on("click",function(){$("#fork-button").trigger("click")})
var o=ScratchpadUI.userScratchpad.get("points")
if(o>=0){a.find(".point-counter").text(o)}ScratchpadUI.userScratchpad.on("change:points",function(e,r){var t=a.find(".point-counter")
$({num:0}).animate({num:r},{duration:500,easing:"easeOutCirc",step:function(e){t.text(Math.round(e))}})})}})()
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-challenge.js", function(require, requireWithVars, module, exports) {
(function(){$(ScratchpadUI).bind({load:function(){var e=ScratchpadUI.$el
var t=ScratchpadUI.dom
var a=e.find(t.DEV_MODAL)
ScratchpadUI.testsEditorInitialized=false
a.find(t.DEV_CATEGORY).on("change",function(e){if(this.value==="challenge"){n()}else{i()}})
var c=$("#challenge-description p")
a.find(t.DEV_DESCRIPTION).change(function(e){c.text(e.target.value)})},started:function(c){if(!e()){return}var s=ScratchpadUI.editor
var i=s.editor
var o=ScratchpadUI.$el
if(!ScratchpadUI.canEditChallenge()){if(!i.originalCut){i.originalCut=i.onCut
i.originalCopy=i.onCopy
i.originalPaste=i.onPaste}var d
i.onCut=function(e){s.lastCopied=this.getSelectedText()
i.originalCut.apply(i)}
i.onCopy=function(e){s.lastCopied=this.getSelectedText()
i.originalCopy.apply(i)}
i.onPaste=function(e){if(e===s.lastCopied||e.length<3){i.originalPaste.apply(i,[e])
return}if(!d){var t=$._("To make sure you get the most out of "+"these challenges, we've disabled pasting code from outside."+" Studies show that typing code helps "+"our brain solidify the concepts more.")
d=$("<div>").addClass("modal generic-dialog").css("top","50%").html("<span class='close' data-dismiss='modal'>&#215;"+"</span><div>"+t+"</div>").appendTo("body")}d.modal({show:true,backdrop:false})}}ScratchpadUI.challenge=t()
var l=a()
if(l){ScratchpadUI.userScratchpad.setChallengeTimeTaken()
var p=ScratchpadUI.userScratchpad
if(p.get("stashed_code")){ScratchpadUI.editor.text(p.get("stashed_code"))}p.set("stashed_code",ScratchpadUI.editor.text())}ScratchpadUI.loadUserSpinOffs()
if(ScratchpadUI.canEditChallenge()){n()}r()
i.on("change",function(){$("#save-progress-text").stop(true).show().text($._("Saving progress..."))
h()})
o.find(".scratchpad-editor-undo-button").show().on("click",function(){i.undo()
s.focus()})
ScratchpadUI.bindStartOverButton()
$("#edit-title").hide()
$(".title-box").css("cursor","auto")},startCodeOver:function(e){if(a()){window.setTimeout(function(){ScratchpadUI.challenge.moveToStep(0)},100)}},initCode:function(e,t){if(a()){t.code=ScratchpadUI.userScratchpad.get("stashed_code")}},runCode:function(e,t){t.validate=ScratchpadUI.testsEditorInitialized?ace.edit("tests-editor").getValue():ScratchpadUI.scratchpad.get("translatedTests")},update:function(t,a){if(a.results&&e()&&ScratchpadUI.challenge){ScratchpadUI.challenge.processResults(a.results)}},saveData:function(){if(ScratchpadUI.canEditChallenge()&&e()&&ScratchpadUI.testsEditorInitialized){ScratchpadUI.scratchpad.currentRevision().set("tests",ace.edit("tests-editor").getValue())
ScratchpadUI.scratchpad.set("tests","")}},remove:function(){d()},beforeunload:function(e,t){if(a()){var c=ScratchpadUI.editor.text()
if(c!==ScratchpadUI.userScratchpad.get("stashed_code")){t.warnMsg=t.defaultMsg}ScratchpadUI.userScratchpad.saveChallengeTimeTaken()}}})
var e=function(){return ScratchpadUI.scratchpad.isChallenge()}
var t=function(){var e=new ScratchpadChallenge({userScratchpad:ScratchpadUI.userScratchpad,editor:ScratchpadUI.editor.editor})
new ChallengePanels({challenge:e,el:$("#objectives-pane")})
new ChallengeProgress({challenge:e,el:$("#challenge-progress-bar")})
new ChallengeStatusMessage({challenge:e,el:$("#challenge-status-message")})
return e}
var a=function(){return ScratchpadUI.isAttemptingSomething()&&e()}
var c=function(){var e=$("#editor-tabs")
var t=function(t,a){if(a.newTab.index()===1){var c=ace.edit("tests-editor")
ScratchpadUI.testsEditorInitialized=true
c.on("change",function(){toExec=true})
var r=c.getSession()
r.setUseWorker(false)
r.setMode("ace/mode/javascript")
var s=ScratchpadUI.scratchpad.currentRevision().get("tests")
if(!s){s=ScratchpadUI.scratchpad.get("tests")}c.setValue(s)
e.tabs({activate:$.noop()})}}
e.tabs({activate:t})}
var r=function(){$("#challenge-header, #objectives-container").show()
$("#objectives").tabs()}
var s=function(){$("#challenge-header, #objectives-container").hide()
$("#objectives").tabs().tabs("destroy")}
var n=function(){c()
$("#editor-tabs-links, #tests-editor").show()
$("#questions-tab-header, #comments-tab-header").hide()
$("#editor-tabs").tabs()
$("#record").hide()
r()}
var i=function(){$("#editor-tabs-links, #tests-editor-tab, #tests-editor").hide()
$("#questions-tab-header, #comments-tab-header").show()
$("#editor-tabs").tabs().tabs("destroy")
$("#record").show()
s()}
var o=function(e){if(a()){$("#save-progress-text").text(e)}}
var d=function(){if(!a()){return}var e={success:function(){o($._("All changes saved."))},error:function(){o($._("Failed to save changes."))}}
ScratchpadUI.stashUserCode(e)}
var h=_.debounce(d,3e3)})()
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-project.js", function(require, requireWithVars, module, exports) {
(function(){var e=function(){return ScratchpadUI.isAttemptingSomething()&&ScratchpadUI.scratchpad.isProject()}
var t=function(){ScratchpadUI.stashUserCode()}
var a=_.debounce(t,3e3)
$.extend(ScratchpadUI.dom,{PROJECT_FEEDBACK_BUTTONS:".request-help-button, .request-critique-button"})
$(ScratchpadUI).on({started:function(t){if(!e()){return}var r=ScratchpadUI.editor.editor
r.on("change",function(){a()})
ScratchpadUI.bindStartOverButton()
ScratchpadUI.loadUserSpinOffs()
this.$el.on("click",this.dom.PROJECT_FEEDBACK_BUTTONS,function(e){if(KA.isPhantom()){$(this).qtip({content:$._("You'll need to <a href='%(loginUrl)s'>"+"login or sign up</a> in order to request "+"feedback!",{loginUrl:KA.loginUrl}),style:{classes:"qtip-light qtip-shadow"},hide:{delay:100,fixed:true},position:{my:"top center",at:"bottom center"},show:true})
return false}var t=e.target
$(ScratchpadUI.dom.PROJECT_FEEDBACK_BUTTONS).addClass("disabled")
$(ScratchpadUI).on({"redirect.feedback":function(e,a){a.url+=t.hash},"cancelSave.feedback":function(e,t){$(ScratchpadUI.dom.PROJECT_FEEDBACK_BUTTONS).removeClass("disabled")
$(ScratchpadUI).off(".feedback")},"save.feedback":function(e,t){t.saveMessage="<p>"+$._("We need to save your "+"progress before requesting feedback, please set a "+"descriptive title for your project:")+"</p>"}})
$(ScratchpadUI.dom.FORK_BUTTON).click()
return false})},initCode:function(t,a){if(!e()){return}a.code=ScratchpadUI.userScratchpad.get("stashed_code")},remove:function(a){if(!e()){return}t()}})})()
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-share.js", function(require, requireWithVars, module, exports) {
(function(){$(ScratchpadUI).bind({render:function(){Handlebars.registerPartial("scratchpads_share-modal",Templates.get("scratchpads.share-modal"))},load:function(){var r=ScratchpadUI.$el
var c=r.find(".scratchpad-share-modal")
r.delegate(".scratchpad-share-button","click",function(){n()
c.modal({keyboard:true,backdrop:false,show:true})
c.find("input, textarea").on("focus",function(){$(this).select()}).on("mouseup",function(a){a.preventDefault()})
c.find(".scratchpad-share-warning").toggle(ScratchpadUI.hasUnsavedChanges())
Social.prepFacebook()
FacebookUtil.runOnFbReady(function(){})})
r.delegate(".scratchpad-share-facebook-button","click",function(){$(ScratchpadUI).trigger("sharedViaFacebook")
a("SCRATCHPAD_SHARE")
var e=t()
Social.facebookShare(e.message,e.url,e.imageUrl)
c.modal("hide")})
r.delegate(".scratchpad-share-twitter-button","click",function(){$(ScratchpadUI).trigger("sharedViaTwitter")
a("SCRATCHPAD_SHARE")
var e=t("@khanacademy")
Social.openTwitterPopup(Social.formatTwitterShareUrl({url:e.url,text:e.message}))
c.modal("hide")})
r.delegate(".scratchpad-share-email-button","click",function(){$(ScratchpadUI).trigger("sharedViaEmail")
a("SCRATCHPAD_SHARE")
var e=t()
var r=$._("Check it out at %(url)s.",{url:e.url})
window.open(Social.formatMailtoUrl({subject:e.message,body:r}),"_newtab")
c.modal("hide")})
var d=Templates.get("scratchpads.share-embed")
var n=function(){var a=r.find(".scratchpad-share-embed")
r.find(".scratchpad-share-url").val(e)
var t=function(e){return a.find("[name="+e+"]").prop("checked")?"no":"yes"}
var c=a.find("textarea")
c.val(d({shareURL:e(),url:ScratchpadUI.scratchpad.urlForShow(),translatedTitle:ScratchpadUI.scratchpad.get("translatedTitle"),params:$.param({editor:t("hide-editor"),buttons:t("hide-buttons"),author:t("hide-author"),embed:"yes"})}).replace(/\n\s*/g," ").replace(/\\\//g,"/"))}
r.delegate(".scratchpad-share-embed input, .scratchpad-share-embed textarea","click",n)}})
var a=function(a){if(!KA.isPhantom()){$.post("/api/labs/user/badge_action",{action:a,casing:"camel"})}}
var e=function(){return ScratchpadUI.scratchpad.inTutorial()?window.location.protocol+"//"+window.location.host+ScratchpadUI.scratchpad.get("defaultUrlPath"):ScratchpadUI.scratchpad.urlForShow()}
var t=function(a){var t=ScratchpadUI.scratchpad
var r=t.get("translatedTitle")
var c
a=a||$._("Khan Academy")
if(t.isOwner()){c=$._('I just created "%(translatedTitle)s" on %(khanAcademy)s!',{translatedTitle:r,khanAcademy:a})}else{c=$._('I just explored "%(translatedTitle)s" on %(khanAcademy)s!',{translatedTitle:r,khanAcademy:a})}return{message:c,url:e(),imageUrl:t.urlForImage()}}})()
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-intro.js", function(require, requireWithVars, module, exports) {
(function(){ScratchpadUI.guiders={WELCOME:"scratchpad-guider-welcome",PLAY:"scratchpad-guider-play",PLAYBAR:"scratchpad-guider-playbar"}
$(ScratchpadUI).on({started:function(){ScratchpadUI.showLoginTeaser()},readyToPlay:function(){ScratchpadUI.localStorage=$.extend(ScratchpadUI.localStorage||{},{WELCOME_MODAL:"cs-scratchpad-welcome-modal"+KA.getUserID()})
t()},saveCompleted:function(){e()}})
var t=function(){var t=ScratchpadUI.scratchpad
if(!t||!t.isTalkie()){return}if(!LocalStore.get(ScratchpadUI.localStorage.WELCOME_MODAL)){guiders.createGuider({id:ScratchpadUI.guiders.WELCOME,buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Tell me more!"),classString:"simple-button green"}],title:$._("Welcome! This is a coding talk-through."),description:$._("<p><span class='icon-arrow-left'></span> "+"You'll see code written on the left side.</p>"+"<p style='text-align:right;'>"+"You'll see the result on the right side."+" <span class='icon-arrow-right'></span></p>"),next:ScratchpadUI.guiders.PLAY,overlay:true,width:460}).show()
guiders.createGuider({id:ScratchpadUI.guiders.PLAY,buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Coool!"),classString:"simple-button green"}],attachTo:ScratchpadUI.dom.PLAYBAR,position:11,offset:{left:0,top:0},title:$._("You can control it all down here."),description:$._("Press the play button to start watching the "+"talk-through. You can pause at any time by clicking it "+"again, or clicking either side. You can even edit the code "+"yourself at those points, too."),next:ScratchpadUI.guiders.PLAYBAR,overlay:true})
guiders.createGuider({id:ScratchpadUI.guiders.PLAYBAR,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Ok, I got it!"),classString:"simple-button green"}],attachTo:ScratchpadUI.dom.PLAYBAR_OPTIONS,position:11,offset:{left:-30,top:0},title:$._("See what we say"),description:$._("You can click the gear button to turn on the interactive transcript feature, which are like subtitles that you can scroll."),overlay:true})
LocalStore.set(ScratchpadUI.localStorage.WELCOME_MODAL,1)}}
var e=function(){if(!KA.isPhantom()){return}if(!readCookie("csPhantomBait")){return createCookie("csPhantomBait","saved scratchpad")}}})()
});
KAdefine("javascript/scratchpads-package/scratchpad-ui-dev.js", function(require, requireWithVars, module, exports) {
(function(){$.extend(ScratchpadUI.dom,{DEV_WIDTH:"[name='scratchpad-width']",DEV_HEIGHT:"[name='scratchpad-height']",DEV_DIMENSIONS:"[name='scratchpad-width'], [name='scratchpad-height']",DEV_CANVAS_ONLY:"[name='scratchpad-canvas-only']",DEV_SETTINGS_BUTTON:".dev-settings-button",DEV_MODAL:".scratchpad-dev-controls-modal",DEV_SAVE_BUTTON:".scratchpad-dev-controls-save",DEV_TRUSTED_VERSION:"div.trusted-version",DEV_CATEGORY:".scratchpad-category [name=category]",DEV_DIFFICULTY:"[name=scratchpad-difficulty-select]",DEV_VERSION:"[name=scratchpad-config-version]",DEV_YOUTUBE:"[name=scratchpad-youtube-id]",DEV_DESCRIPTION_LABEL:"[for=scratchpad-description]",DEV_DESCRIPTION:"[name=scratchpad-description]"})
$(ScratchpadUI).on({render:function(){Handlebars.registerPartial("scratchpads_dev-controls-modal",Templates.get("scratchpads.dev-controls-modal"))},load:function(){var a=ScratchpadUI.$el
var t=ScratchpadUI.dom
a.delegate(t.DEV_SETTINGS_BUTTON,"click",function(){a.find(t.DEV_MODAL).modal({keyboard:true,backdrop:false,show:true}).find(t.DEV_SAVE_BUTTON).on("click",function(){a.find(t.SAVE_BUTTON).trigger("click")})})},started:function(){if(!KA.isDeveloper()){return}var a=ScratchpadUI.$el
var t=ScratchpadUI.dom
var e=a.find(t.DEV_MODAL)
var c=ScratchpadUI.scratchpad
var i=new ScratchpadTrustedVersionView({el:e.find(t.DEV_TRUSTED_VERSION)})
i.render(c.toJSON())
e.find(t.DEV_CATEGORY).val(c.get("category")||"").on("change",function(){i.update(this.value)
c.set("category",this.value||null)})
var r=e.find(t.DEV_DIFFICULTY)
$("<option/>").val(-1).text($._("Difficulty")).prop("selected",c.get("difficulty")===-1).appendTo(r)
var d=_.keys(Scratchpad.difficultyMapping).sort()
_.each(d,function(a){var t=Scratchpad.difficultyMapping[a]
$("<option/>").val(a).text(t).prop("selected",parseFloat(a)===c.get("difficulty")).appendTo(r)})
e.find(t.DEV_WIDTH).val(c.get("width")||400)
e.find(t.DEV_HEIGHT).val(c.get("height")||400)
e.find(t.DEV_DIMENSIONS).on("change",function(){ScratchpadUI.updateCanvasSize(parseFloat(e.find(t.DEV_WIDTH).val()),parseFloat(e.find(t.DEV_HEIGHT).val()))})
e.find(t.DEV_CANVAS_ONLY).prop("checked",c.get("canvasOnly")||false)
var n=e.find(t.DEV_VERSION)
n.on("change",function(){var a=parseFloat(n.val())
ScratchpadConfig.switchVersion(a)
c.setVersion(a)})
e.find(t.DEV_YOUTUBE).val(c.getYoutubeId()).on("change",function(){c.setYoutubeId($(this).val())})
_.each(ScratchpadConfig.versions,function(a,t){$("<option>").attr({value:t,selected:t===c.getVersion()}).text(t+". "+a.name).appendTo(n)})
e.find(t.DEV_DESCRIPTION).val(c.get("translatedDescription"))
if(!ScratchpadUI.displayLanguageAllowsEditing()){e.find(t.DEV_DESCRIPTION_LABEL).text($._("Description (can only change when viewing page in English)"))
e.find(t.DEV_DESCRIPTION).prop("disabled",true)}if(!ScratchpadUI.embedded&&c.get("isPublished")){a.find(t.SAVE_BUTTON).show()}},canvasSizeUpdated:function(a,t){if(KA.isDeveloper()){ScratchpadUI.scratchpad.set("width",t.width)
ScratchpadUI.scratchpad.set("height",t.height)}},saveData:function(){if(!KA.isDeveloper()){return}var a=ScratchpadUI.$el
var t=ScratchpadUI.dom
var e=ScratchpadUI.scratchpad
var c=a.find(t.DEV_MODAL)
e.set("difficulty",parseFloat(c.find(t.DEV_DIFFICULTY).val()))
e.set("canvas_only",!!c.find(t.DEV_CANVAS_ONLY).prop("checked"))
if(ScratchpadUI.displayLanguageAllowsEditing()){e.set("description",c.find(t.DEV_DESCRIPTION).val())}}})
var a=ScratchpadUI.canEditCurrentScratchpad
ScratchpadUI.canEditCurrentScratchpad=function(){return KA.isDeveloper()||a()}
ScratchpadUI.validate=function(a){var t=ScratchpadUI.$el
var e=ScratchpadUI.dom
var c=a.dialog
var i=t.find(e.DEV_MODAL)
var r=i.find(e.DEV_CATEGORY).val()
var d=i.find(e.DEV_DIFFICULTY).val()
if(KA.isDeveloper()&&(r==="tutorial"||r==="official")&&d==="-1"){a.showError($._("You must select a difficulty to save an "+"official program!"))
return}if(!a.fork&&KA.isDeveloper()&&r){a.dialog.text($._("Are you sure you want to save an official scratchpad?")).dialog({closeOnEscape:false,modal:true,autoOpen:true,title:$._("Save official scratchpad?"),buttons:[{text:$._("Cancel"),click:a.cancelSave},{text:$._("Save"),click:function(){ScratchpadUI.checkForRecording(a)
$(this).dialog("close")}}]}).parent().addClass("ui-dialog-no-close-button").end()}else{ScratchpadUI.checkForRecording(a)}}})()
});
KAdefine("javascript/scratchpads-package/scratchpad-views.js", function(require, requireWithVars, module, exports) {
window.ScratchpadAudioChunks=Backbone.Model.extend({initialize:function(t){this.audioChunks=[]
this.currentChunk=null},setCurrentChunk:function(t){this.currentChunk=t},currentChunkExists:function(){return!_.isNull(this.currentChunk)},startNewChunk:function(){this.currentChunk=null},discardCurrentChunk:function(){this.currentChunk=null},saveCurrentChunk:function(){if(!this.currentChunk){KAConsole.log("Tried to save non-existent current chunk")
return}this.audioChunks.push(this.currentChunk)
this.currentChunk=null},getAllChunks:function(){return this.audioChunks}})
window.ScratchpadRecordView=Backbone.View.extend({template:Templates.get("scratchpads.dev-record"),initialize:function(t){this.$el.html(this.template())
this.$recordButton=this.options.recordButton
this.$finalSaveButton=this.options.saveButton
this.scratchpad=this.options.scratchpad
this.audioChunks=new ScratchpadAudioChunks
this.recordInProgress=false
this.commandChunks=[]
this.startingCode=""
this.$editor=this.options.editor
this.lastSavedCode=ScratchpadUI.editor.text()
this.$lastAudioChunkElem=this.$el.find(".last-audio-chunk")
this.$savedAudioChunksElem=this.$el.find(".saved-audio-chunks")
this.initializeButtons()},initializeButtons:function(){this.$newChunkButton=this.$el.find(".scratchpad-dev-new-chunk")
this.$discardChunkButton=this.$el.find(".scratchpad-dev-discard-chunk")
this.$saveChunkButton=this.$el.find(".scratchpad-dev-save-chunk")
this.$refreshEditorButton=this.$el.find(".scratchpad-dev-refresh-editor-state")
this.disableChunkButtons(true,true,true,true,false)
this.$newChunkButton.on("click",_.bind(this.newChunk,this))
this.$discardChunkButton.on("click",_.bind(this.discardChunk,this))
this.$saveChunkButton.on("click",_.bind(this.saveChunk,this))
this.$refreshEditorButton.on("click",_.bind(this.refreshEditor,this))},initializeRecordingAudio:function(){this.multirecorder=new MultiRecorder({workerPath:"../../third_party/javascript-khansrc/multirecorderjs/multirecorder-worker.js"})
this.$recordButton.text("Use the chunks (and give permission)")
this.setButtonDisableStatus(this.$recordButton,true)
this.disableChunkButtons(false,true,true,true,true)},startRecordingAudio:function(){this.lastSavedCode=ScratchpadUI.editor.text()
this.multirecorder.startRecording(1).progress(_.bind(function(t){this.$newChunkButton.text(t+"...")},this)).done(_.bind(function(){this.disableChunkButtons(false,true,true,true,true)
Record.recordingAudio=true
this.$newChunkButton.html("Stop recording chunk")
this.startRecordingCommands()},this)).fail(function(t){KAConsole.error(t)})},stopRecordingAudio:function(){this.multirecorder.stopRecording().done(_.bind(function(t){this.audioChunks.setCurrentChunk(t)
this.$lastAudioChunkElem.html(t.createAudioPlayer())},this))},showSavedAudioChunks:function(){this.getFinalAudioRecording(_.bind(function(t){this.$savedAudioChunksElem.html(t.createAudioPlayer())},this))},getDurationMsOfSavedAudio:function(){var t=0
var e=$(this.$savedAudioChunksElem).find("audio")
if(e&&e.length>0){t=e[0].duration*1e3}return t},startRecordingCommands:function(){if(Record.hasNoChunks()){this.scratchpad.get("revision").set("code",ScratchpadUI.editor.text())
this.startingCode=ScratchpadUI.editor.text()
var t=this.scratchpad.getVersion()
ScratchpadConfig.switchVersion(t)
Record.setActualInitData({configVersion:t,code:this.startingCode})}ScratchpadUI.editor.focus()
Record.startRecordChunk(this.getDurationMsOfSavedAudio())
Record.log({start:{column:0,row:0}})
ScratchpadUI.editor.setCursor({row:0,column:0})},stopRecordingCommands:function(){Record.stopRecordChunk()},getFinalAudioRecording:function(t){this.multirecorder.combineRecordings(this.audioChunks.getAllChunks()).done(t)},getFinalCommandRecording:function(){return Record.dumpRecording()},newChunk:function(){if(this.audioChunks.currentChunkExists()){return}if(!this.recordInProgress){ScratchpadUI.editor.editor.setReadOnly(false)
this.recordInProgress=true
this.startRecordingAudio()}else{this.recordInProgress=false
this.stopRecordingCommands()
this.disableChunkButtons(true,false,false,true,true)
this.$newChunkButton.html("Start new chunk")}},discardChunk:function(t){if(!this.audioChunks.currentChunkExists()){return}this.audioChunks.discardCurrentChunk()
Record.discardRecordChunk()
this.$lastAudioChunkElem.empty()
this.refreshEditor()},saveChunk:function(t){if(!this.audioChunks.currentChunkExists()){return}this.audioChunks.saveCurrentChunk()
Record.saveRecordChunk()
this.lastSavedCode=ScratchpadUI.editor.text()
this.disableChunkButtons(false,true,true,false,false)
this.showSavedAudioChunks()
this.$lastAudioChunkElem.empty()},refreshEditor:function(t){Record.loadRecording(Record.dumpRecording())
ScratchpadUI.editor.editor.setReadOnly(false)
Record.initData=Record.actualInitData
if(Record.commands){Record.commands.push({time:this.getDurationMsOfSavedAudio()})}Record.time=0
ScratchpadUI.editor.text(this.startingCode)
ScratchpadUI.drawCanvas.clear(true)
ScratchpadUI.drawCanvas.endDraw()
Record.runSeek(this.getDurationMsOfSavedAudio())
setTimeout(_.bind(function(){this.disableChunkButtons(false,true,true,false,false)},this),1e3)},disableChunkButtons:function(t,e,i,s,n){this.setButtonDisableStatus(this.$newChunkButton,t)
this.setButtonDisableStatus(this.$discardChunkButton,e)
this.setButtonDisableStatus(this.$saveChunkButton,i)
this.setButtonDisableStatus(this.$refreshEditorButton,s)
this.setButtonDisableStatus(this.$finalSaveButton,n)},setButtonDisableStatus:function(t,e){if(!_.isUndefined(e)){t.prop("disabled",e)}}})
window.BrowseListView=Backbone.View.extend({template:Templates.get("scratchpads.community-programs"),render:function(){Handlebars.registerPartial("discussion_meta-separator",Templates.get("discussion.meta-separator"))
Handlebars.registerPartial("discussion_vote-controls",Templates.get("discussion.vote-controls"))
Handlebars.registerPartial("discussion_flag-controls",Templates.get("discussion.flag-controls"))
Handlebars.registerPartial("moderation_mod-controls",Templates.get("moderation.mod-controls"))
Handlebars.registerPartial("discussion_author-controls",Templates.get("discussion.author-controls"))
Handlebars.registerPartial("discussion_discussion-meta",Templates.get("discussion.discussion-meta"))
this.$el.html(this.template())
var t=this.$el.find(".throbber-container")
t.show()
var e=require("../discussion-package/discussion-list.js")
new e({requestURL:"/api/labs/scratchpads/top",itemTemplate:"discussion.fork",itemKey:"scratchpads",sorts:[{name:$._("Hot"),title:$._("Popular"),value:3,isDefault:true},{name:$._("Spotlight"),title:$._("Spotlight"),value:4,isDefault:false},{name:$._("Top"),title:$._("Top Overall"),value:5,isDefault:false},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}],limit:40,params:{casing:"camel"},containerSelector:this.$el.find(".spin-offs"),onInitialFetch:_(this._onInitialFetch).bind(this),preRenderTransformData:function(t){_(t).each(function(t){t.isScratchpad=true
t.isScratchpadCard=true
t.hideFlagControls=true})
return t},onSort:function(){t.show()},onFetchComplete:function(){t.hide()}})},_onInitialFetch:$.noop})
window.ScratchpadTrustedVersionView=Backbone.View.extend({template:Templates.get("scratchpads.dev-trusted-revision-panel"),events:{"click .mark-trusted":"markTrusted","click .see-trusted":"seeTrusted"},initialize:function(){var t=this
$(ScratchpadUI).bind("saveCompleted",function(e,i){t.render(i.toJSON())})},update:function(t){if(t==="sanctioned"){this.$el.show()}else{this.$el.hide()}},render:function(t){this.scratchpadID=t.id
this.revisionID=t.revision.id
this.trustedRevisionID=t.trusted_revision?t.trusted_revision.id:-1
var e=t.revision.cid?t.revision.toJSON():t.revision
var i=t.trusted_revision&&t.trusted_revision.id===e.id
var s={revision:e,trustedRevision:t.trusted_revision,currentRevisionTrusted:i}
this.$el.find(".trusted-version-panel").html(this.template(s))
this.update(t.category)},markTrusted:function(){var t=this
$.ajax({url:"/api/labs/scratchpads/"+this.scratchpadID+"/"+this.revisionID+"/set_trusted",type:"POST",success:function(e){t.render(e)}})},seeTrusted:function(){window.open("/cs/blah/"+this.scratchpadID+"/embedded/trusted",this.scratchpadID)}})
});
KAdefine("javascript/transcripts-package/transcripts.js", function(require, requireWithVars, module, exports) {
window.VideoTranscript=Backbone.Model.extend({url:function(){return"/api/v1/videos/"+this.get("youtubeId")+"/transcript"},hasValid:function(){var t=this.get("subtitles").length
var e=false
for(var i=0;i<t;i++){if(this.get("subtitles")[i]["ka_is_valid"]){e=true
break}}KAConsole.log("Transcript data received. "+(e?"Some":"No")+" valid entries.")
return e},parse:function(t){var e={subtitles:[]}
if(_.isObject(t)){e.subtitles=t}return e}})
window.InteractiveTranscriptView=Backbone.View.extend({autoscroll:true,events:{"click a":"onSubtitleClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"},render:function(){if(this.model){var t=Templates.get("shared.video-transcript")({subtitles:this.model.get("subtitles")})
this.$el.html(Templates.get("shared.video-transcript")({subtitles:this.model.get("subtitles")}))}return this},onMouseEnter:function(t){this.autoscroll=false},onMouseLeave:function(){this.autoscroll=true},onSubtitleClick:function(t){var e=$(t.target).parent(),i=parseFloat(e.data("milliseconds"))/1e3
if(!isNaN(i)){this.trigger("subtitleSelection",i)}},showWithSlide:function(){this.$(".subtitles-container").slideDown("fast")},hideWithSlide:function(){this.$(".subtitles-container").slideUp("fast")},onPlayerUpdate:function(t){var e,i,s=this.$("li"),a=s.length,o
for(o=0;o<a;o++){e=parseFloat($(s[o]).data("milliseconds"))/1e3
if(!isNaN(e)&&e>t){i=o===0?s[0]:s[o-1]
break}}if(!$(i).is(".active")){this._setActiveSubtitle(i||s[a-1])}},_setActiveSubtitle:function(t){var e,i
this.$(".active").removeClass("active")
$(t).addClass("active")
if(this.autoscroll){e=t.offsetTop
i=$(t).height()
var s=Math.min(i*3,this.$(".subtitles").height()-i)
this.$(".subtitles").stop().animate({scrollTop:e-s})}}})
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/scratchpads-package/jquery.button.js");
KAdefine.require("./javascript/scratchpads-package/jquery.hotnumber.js");
KAdefine.require("./javascript/scratchpads-package/browser-notice.handlebars");
KAdefine.require("./javascript/scratchpads-package/goal-tab.handlebars");
KAdefine.require("./javascript/scratchpads-package/community-programs.handlebars");
KAdefine.require("./javascript/scratchpads-package/dev-controls-modal.handlebars");
KAdefine.require("./javascript/scratchpads-package/dev-trusted-revision-panel.handlebars");
KAdefine.require("./javascript/scratchpads-package/dev-record.handlebars");
KAdefine.require("./javascript/scratchpads-package/imagepicker.handlebars");
KAdefine.require("./javascript/scratchpads-package/share-modal.handlebars");
KAdefine.require("./javascript/scratchpads-package/play-page.handlebars");
KAdefine.require("./javascript/scratchpads-package/tutorial-topic.handlebars");
KAdefine.require("./javascript/scratchpads-package/tutorial-sorter.handlebars");
KAdefine.require("./javascript/scratchpads-package/scratchpads-grouped.handlebars");
KAdefine.require("./javascript/scratchpads-package/share-embed.handlebars");
KAdefine.require("./javascript/scratchpads-exec-package/images.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-bingo.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-config.js");
KAdefine.require("./javascript/scratchpads-package/editor.js");
KAdefine.require("./javascript/scratchpads-package/record.js");
KAdefine.require("./javascript/scratchpads-package/canvas.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-playback.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-challenge.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-project.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-share.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-intro.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-ui-dev.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-views.js");
KAdefine.require("./javascript/transcripts-package/transcripts.js");
