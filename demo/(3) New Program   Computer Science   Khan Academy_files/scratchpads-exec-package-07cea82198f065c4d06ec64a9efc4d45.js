(function(){var e=function(r,i){var n=e._makeRequire(r)
e._moduleDefinitions[r]=function(){if(!e._moduleCache[r]){var a=e._moduleCache[r]={exports:{}}
i.call(window,n,n,a,a.exports)}}}
e._moduleCache={}
e._moduleDefinitions={}
function r(r){var i=o(r)
while(e._filenameRewriteMap[i]){i=o(a(i)+"/"+e._filenameRewriteMap[i])}if(!e._moduleCache[i]){var n=e._moduleDefinitions[i]
if(n){n()}}return e._moduleCache[i]}e._makeRequire=function(e){return function(i){if(!i){throw new Error("Missing argument to require().")}var n
var t
if(i.charAt(0)==="."){t=a(e)+"/"+i}else{var u=/\.jsx?$/.test(i)?"":"/index.js"
t="javascript/node_modules/"+i+u}n=r(t)
if(!n){throw new Error("Cannot find module '"+t+"'.")}return n.exports}}
e.require=e._makeRequire("")
e.requireWithVars=e._makeRequire("")
e._filenameRewriteMap={}
e.updateFilenameRewriteMap=function(r){for(var i in r){if(r.hasOwnProperty(i)){e._filenameRewriteMap[i]=r[i]}}}
window.KAdefine=e
var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
var n=function(e){return i.exec(e).slice(1)}
var a=function(e){var r=n(e),i=r[0],a=r[1]
if(!i&&!a){return"."}if(a){a=a.substr(0,a.length-1)}return i+a}
var t=function(e,r){var i=0
for(var n=e.length-1;n>=0;n--){var a=e[n]
if(a==="."){e.splice(n,1)}else if(a===".."){e.splice(n,1)
i++}else if(i){e.splice(n,1)
i--}}if(r){for(;i--;i){e.unshift("..")}}return e}
var u=function(e){return e.charAt(0)==="/"}
var o=function(e){var r=u(e),i=e.substr(-1)==="/"
var n=e.split("/")
var a=[]
for(var o=0;o<n.length;o++){var f=n[o]
if(!!f){a.push(n[o])}}e=t(a,!r).join("/")
if(!e&&!r){e="."}if(e&&i){e+="/"}return(r?"/":"")+e}})()
;
(function(e,t){var n,i,r=typeof t,o=e.document,s=e.location,a=e.jQuery,u=e.$,l={},f=[],c="1.9.1",p=f.concat,d=f.push,h=f.slice,g=f.indexOf,m=l.toString,y=l.hasOwnProperty,v=c.trim,b=function(e,t){return new b.fn.init(e,t,i)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){if(o.addEventListener||e.type==="load"||o.readyState==="complete"){q()
b.ready()}},q=function(){if(o.addEventListener){o.removeEventListener("DOMContentLoaded",H,false)
e.removeEventListener("load",H,false)}else{o.detachEvent("onreadystatechange",H)
e.detachEvent("onload",H)}}
b.fn=b.prototype={jquery:c,constructor:b,init:function(e,n,i){var r,s
if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){r=[null,e,null]}else{r=N.exec(e)}if(r&&(r[1]||!n)){if(r[1]){n=n instanceof b?n[0]:n
b.merge(this,b.parseHTML(r[1],n&&n.nodeType?n.ownerDocument||n:o,true))
if(C.test(r[1])&&b.isPlainObject(n)){for(r in n){if(b.isFunction(this[r])){this[r](n[r])}else{this.attr(r,n[r])}}}return this}else{s=o.getElementById(r[2])
if(s&&s.parentNode){if(s.id!==r[2]){return i.find(e)}this.length=1
this[0]=s}this.context=o
this.selector=e
return this}}else if(!n||n.jquery){return(n||i).find(e)}else{return this.constructor(n).find(e)}}else if(e.nodeType){this.context=this[0]=e
this.length=1
return this}else if(b.isFunction(e)){return i.ready(e)}if(e.selector!==t){this.selector=e.selector
this.context=e.context}return b.makeArray(e,this)},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e)
t.prevObject=this
t.context=this.context
return t},each:function(e,t){return b.each(this,e,t)},ready:function(e){b.ready.promise().done(e)
return this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice}
b.fn.init.prototype=b.fn
b.extend=b.fn.extend=function(){var e,n,i,r,o,s,a=arguments[0]||{},u=1,l=arguments.length,f=false
if(typeof a==="boolean"){f=a
a=arguments[1]||{}
u=2}if(typeof a!=="object"&&!b.isFunction(a)){a={}}if(l===u){a=this;--u}for(;u<l;u++){if((o=arguments[u])!=null){for(r in o){e=a[r]
i=o[r]
if(a===i){continue}if(f&&i&&(b.isPlainObject(i)||(n=b.isArray(i)))){if(n){n=false
s=e&&b.isArray(e)?e:[]}else{s=e&&b.isPlainObject(e)?e:{}}a[r]=b.extend(f,s,i)}else if(i!==t){a[r]=i}}}}return a}
b.extend({noConflict:function(t){if(e.$===b){e.$=u}if(t&&e.jQuery===b){e.jQuery=a}return b},isReady:false,readyWait:1,holdReady:function(e){if(e){b.readyWait++}else{b.ready(true)}},ready:function(e){if(e===true?--b.readyWait:b.isReady){return}if(!o.body){return setTimeout(b.ready)}b.isReady=true
if(e!==true&&--b.readyWait>0){return}n.resolveWith(o,[b])
if(b.fn.trigger){b(o).trigger("ready").off("ready")}},isFunction:function(e){return b.type(e)==="function"},isArray:Array.isArray||function(e){return b.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)}return typeof e==="object"||typeof e==="function"?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||b.type(e)!=="object"||e.nodeType||b.isWindow(e)){return false}try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}var i
for(i in e){}return i===t||y.call(e,i)},isEmptyObject:function(e){var t
for(t in e){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t
t=false}t=t||o
var i=C.exec(e),r=!n&&[]
if(i){return[t.createElement(i[1])]}i=b.buildFragment([e],t,r)
if(r){b(r).remove()}return b.merge([],i.childNodes)},parseJSON:function(t){if(e.JSON&&e.JSON.parse){return e.JSON.parse(t)}if(t===null){return t}if(typeof t==="string"){t=b.trim(t)
if(t){if(k.test(t.replace(S,"@").replace(A,"]").replace(E,""))){return new Function("return "+t)()}}}b.error("Invalid JSON: "+t)},parseXML:function(n){var i,r
if(!n||typeof n!=="string"){return null}try{if(e.DOMParser){r=new DOMParser
i=r.parseFromString(n,"text/xml")}else{i=new ActiveXObject("Microsoft.XMLDOM")
i.async="false"
i.loadXML(n)}}catch(o){i=t}if(!i||!i.documentElement||i.getElementsByTagName("parsererror").length){b.error("Invalid XML: "+n)}return i},noop:function(){},globalEval:function(t){if(t&&b.trim(t)){(e.execScript||function(t){e["eval"].call(e,t)})(t)}},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var i,r=0,o=e.length,s=M(e)
if(n){if(s){for(;r<o;r++){i=t.apply(e[r],n)
if(i===false){break}}}else{for(r in e){i=t.apply(e[r],n)
if(i===false){break}}}}else{if(s){for(;r<o;r++){i=t.call(e[r],r,e[r])
if(i===false){break}}}else{for(r in e){i=t.call(e[r],r,e[r])
if(i===false){break}}}}return e},trim:v&&!v.call("﻿ ")?function(e){return e==null?"":v.call(e)}:function(e){return e==null?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[]
if(e!=null){if(M(Object(e))){b.merge(n,typeof e==="string"?[e]:e)}else{d.call(n,e)}}return n},inArray:function(e,t,n){var i
if(t){if(g){return g.call(t,e,n)}i=t.length
n=n?n<0?Math.max(0,i+n):n:0
for(;n<i;n++){if(n in t&&t[n]===e){return n}}}return-1},merge:function(e,n){var i=n.length,r=e.length,o=0
if(typeof i==="number"){for(;o<i;o++){e[r++]=n[o]}}else{while(n[o]!==t){e[r++]=n[o++]}}e.length=r
return e},grep:function(e,t,n){var i,r=[],o=0,s=e.length
n=!!n
for(;o<s;o++){i=!!t(e[o],o)
if(n!==i){r.push(e[o])}}return r},map:function(e,t,n){var i,r=0,o=e.length,s=M(e),a=[]
if(s){for(;r<o;r++){i=t(e[r],r,n)
if(i!=null){a[a.length]=i}}}else{for(r in e){i=t(e[r],r,n)
if(i!=null){a[a.length]=i}}}return p.apply([],a)},guid:1,proxy:function(e,n){var i,r,o
if(typeof n==="string"){o=e[n]
n=e
e=o}if(!b.isFunction(e)){return t}i=h.call(arguments,2)
r=function(){return e.apply(n||this,i.concat(h.call(arguments)))}
r.guid=e.guid=e.guid||b.guid++
return r},access:function(e,n,i,r,o,s,a){var u=0,l=e.length,f=i==null
if(b.type(i)==="object"){o=true
for(u in i){b.access(e,n,u,i[u],true,s,a)}}else if(r!==t){o=true
if(!b.isFunction(r)){a=true}if(f){if(a){n.call(e,r)
n=null}else{f=n
n=function(e,t,n){return f.call(b(e),n)}}}if(n){for(;u<l;u++){n(e[u],i,a?r:r.call(e[u],u,n(e[u],i)))}}}return o?e:f?n.call(e):l?n(e[0],i):s},now:function(){return(new Date).getTime()}})
b.ready.promise=function(t){if(!n){n=b.Deferred()
if(o.readyState==="complete"){setTimeout(b.ready)}else if(o.addEventListener){o.addEventListener("DOMContentLoaded",H,false)
e.addEventListener("load",H,false)}else{o.attachEvent("onreadystatechange",H)
e.attachEvent("onload",H)
var i=false
try{i=e.frameElement==null&&o.documentElement}catch(r){}if(i&&i.doScroll){(function s(){if(!b.isReady){try{i.doScroll("left")}catch(e){return setTimeout(s,50)}q()
b.ready()}})()}}}return n.promise(t)}
b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()})
function M(e){var t=e.length,n=b.type(e)
if(b.isWindow(e)){return false}if(e.nodeType===1&&t){return true}return n==="array"||n!=="function"&&(t===0||typeof t==="number"&&t>0&&t-1 in e)}i=b(o)
var _={}
function F(e){var t=_[e]={}
b.each(e.match(w)||[],function(e,n){t[n]=true})
return t}b.Callbacks=function(e){e=typeof e==="string"?_[e]||F(e):b.extend({},e)
var n,i,r,o,s,a,u=[],l=!e.once&&[],f=function(t){i=e.memory&&t
r=true
s=a||0
a=0
o=u.length
n=true
for(;u&&s<o;s++){if(u[s].apply(t[0],t[1])===false&&e.stopOnFalse){i=false
break}}n=false
if(u){if(l){if(l.length){f(l.shift())}}else if(i){u=[]}else{c.disable()}}},c={add:function(){if(u){var t=u.length;(function r(t){b.each(t,function(t,n){var i=b.type(n)
if(i==="function"){if(!e.unique||!c.has(n)){u.push(n)}}else if(n&&n.length&&i!=="string"){r(n)}})})(arguments)
if(n){o=u.length}else if(i){a=t
f(i)}}return this},remove:function(){if(u){b.each(arguments,function(e,t){var i
while((i=b.inArray(t,u,i))>-1){u.splice(i,1)
if(n){if(i<=o){o--}if(i<=s){s--}}}})}return this},has:function(e){return e?b.inArray(e,u)>-1:!!(u&&u.length)},empty:function(){u=[]
return this},disable:function(){u=l=i=t
return this},disabled:function(){return!u},lock:function(){l=t
if(!i){c.disable()}return this},locked:function(){return!l},fireWith:function(e,t){t=t||[]
t=[e,t.slice?t.slice():t]
if(u&&(!r||l)){if(n){l.push(t)}else{f(t)}}return this},fire:function(){c.fireWith(this,arguments)
return this},fired:function(){return!!r}}
return c}
b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){r.done(arguments).fail(arguments)
return this},then:function(){var e=arguments
return b.Deferred(function(n){b.each(t,function(t,o){var s=o[0],a=b.isFunction(e[t])&&e[t]
r[o[1]](function(){var e=a&&a.apply(this,arguments)
if(e&&b.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[s+"With"](this===i?n.promise():this,a?[e]:arguments)}})})
e=null}).promise()},promise:function(e){return e!=null?b.extend(e,i):i}},r={}
i.pipe=i.then
b.each(t,function(e,o){var s=o[2],a=o[3]
i[o[1]]=s.add
if(a){s.add(function(){n=a},t[e^1][2].disable,t[2][2].lock)}r[o[0]]=function(){r[o[0]+"With"](this===r?i:this,arguments)
return this}
r[o[0]+"With"]=s.fireWith})
i.promise(r)
if(e){e.call(r,r)}return r},when:function(e){var t=0,n=h.call(arguments),i=n.length,r=i!==1||e&&b.isFunction(e.promise)?i:0,o=r===1?e:b.Deferred(),s=function(e,t,n){return function(i){t[e]=this
n[e]=arguments.length>1?h.call(arguments):i
if(n===a){o.notifyWith(t,n)}else if(!--r){o.resolveWith(t,n)}}},a,u,l
if(i>1){a=new Array(i)
u=new Array(i)
l=new Array(i)
for(;t<i;t++){if(n[t]&&b.isFunction(n[t].promise)){n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a))}else{--r}}}if(!r){o.resolveWith(l,n)}return o.promise()}})
b.support=function(){var t,n,i,s,a,u,l,f,c,p,d=o.createElement("div")
d.setAttribute("className","t")
d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"
n=d.getElementsByTagName("*")
i=d.getElementsByTagName("a")[0]
if(!n||!i||!n.length){return{}}a=o.createElement("select")
l=a.appendChild(o.createElement("option"))
s=d.getElementsByTagName("input")[0]
i.style.cssText="top:1px;float:left;opacity:.5"
t={getSetAttribute:d.className!=="t",leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:i.getAttribute("href")==="/a",opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:o.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:o.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false}
s.checked=true
t.noCloneChecked=s.cloneNode(true).checked
a.disabled=true
t.optDisabled=!l.disabled
try{delete d.test}catch(h){t.deleteExpando=false}s=o.createElement("input")
s.setAttribute("value","")
t.input=s.getAttribute("value")===""
s.value="t"
s.setAttribute("type","radio")
t.radioValue=s.value==="t"
s.setAttribute("checked","t")
s.setAttribute("name","t")
u=o.createDocumentFragment()
u.appendChild(s)
t.appendChecked=s.checked
t.checkClone=u.cloneNode(true).cloneNode(true).lastChild.checked
if(d.attachEvent){d.attachEvent("onclick",function(){t.noCloneEvent=false})
d.cloneNode(true).click()}for(p in{submit:true,change:true,focusin:true}){d.setAttribute(f="on"+p,"t")
t[p+"Bubbles"]=f in e||d.attributes[f].expando===false}d.style.backgroundClip="content-box"
d.cloneNode(true).style.backgroundClip=""
t.clearCloneStyle=d.style.backgroundClip==="content-box"
b(function(){var n,i,s,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0]
if(!u){return}n=o.createElement("div")
n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"
u.appendChild(n).appendChild(d)
d.innerHTML="<table><tr><td></td><td>t</td></tr></table>"
s=d.getElementsByTagName("td")
s[0].style.cssText="padding:0;margin:0;border:0;display:none"
c=s[0].offsetHeight===0
s[0].style.display=""
s[1].style.display="none"
t.reliableHiddenOffsets=c&&s[0].offsetHeight===0
d.innerHTML=""
d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"
t.boxSizing=d.offsetWidth===4
t.doesNotIncludeMarginInBodyOffset=u.offsetTop!==1
if(e.getComputedStyle){t.pixelPosition=(e.getComputedStyle(d,null)||{}).top!=="1%"
t.boxSizingReliable=(e.getComputedStyle(d,null)||{width:"4px"}).width==="4px"
i=d.appendChild(o.createElement("div"))
i.style.cssText=d.style.cssText=a
i.style.marginRight=i.style.width="0"
d.style.width="1px"
t.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)}if(typeof d.style.zoom!==r){d.innerHTML=""
d.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1"
t.inlineBlockNeedsLayout=d.offsetWidth===3
d.style.display="block"
d.innerHTML="<div></div>"
d.firstChild.style.width="5px"
t.shrinkWrapBlocks=d.offsetWidth!==3
if(t.inlineBlockNeedsLayout){u.style.zoom=1}}u.removeChild(n)
n=d=s=i=null})
n=a=u=l=i=s=null
return t}()
var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g
function P(e,n,i,r){if(!b.acceptData(e)){return}var o,s,a=b.expando,u=typeof n==="string",l=e.nodeType,c=l?b.cache:e,p=l?e[a]:e[a]&&a
if((!p||!c[p]||!r&&!c[p].data)&&u&&i===t){return}if(!p){if(l){e[a]=p=f.pop()||b.guid++}else{p=a}}if(!c[p]){c[p]={}
if(!l){c[p].toJSON=b.noop}}if(typeof n==="object"||typeof n==="function"){if(r){c[p]=b.extend(c[p],n)}else{c[p].data=b.extend(c[p].data,n)}}o=c[p]
if(!r){if(!o.data){o.data={}}o=o.data}if(i!==t){o[b.camelCase(n)]=i}if(u){s=o[n]
if(s==null){s=o[b.camelCase(n)]}}else{s=o}return s}function R(e,t,n){if(!b.acceptData(e)){return}var i,r,o,s=e.nodeType,a=s?b.cache:e,u=s?e[b.expando]:b.expando
if(!a[u]){return}if(t){o=n?a[u]:a[u].data
if(o){if(!b.isArray(t)){if(t in o){t=[t]}else{t=b.camelCase(t)
if(t in o){t=[t]}else{t=t.split(" ")}}}else{t=t.concat(b.map(t,b.camelCase))}for(i=0,r=t.length;i<r;i++){delete o[t[i]]}if(!(n?$:b.isEmptyObject)(o)){return}}}if(!n){delete a[u].data
if(!$(a[u])){return}}if(s){b.cleanData([e],true)}else if(b.support.deleteExpando||a!=a.window){delete a[u]}else{a[u]=null}}b.extend({cache:{},expando:"jQuery"+(c+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando]
return!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,true)},_removeData:function(e,t){return R(e,t,true)},acceptData:function(e){if(e.nodeType&&e.nodeType!==1&&e.nodeType!==9){return false}var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()]
return!t||t!==true&&e.getAttribute("classid")===t}})
b.fn.extend({data:function(e,n){var i,r,o=this[0],s=0,a=null
if(e===t){if(this.length){a=b.data(o)
if(o.nodeType===1&&!b._data(o,"parsedAttrs")){i=o.attributes
for(;s<i.length;s++){r=i[s].name
if(!r.indexOf("data-")){r=b.camelCase(r.slice(5))
W(o,r,a[r])}}b._data(o,"parsedAttrs",true)}}return a}if(typeof e==="object"){return this.each(function(){b.data(this,e)})}return b.access(this,function(n){if(n===t){return o?W(o,e,b.data(o,e)):null}this.each(function(){b.data(this,e,n)})},null,n,arguments.length>1,null,true)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}})
function W(e,n,i){if(i===t&&e.nodeType===1){var r="data-"+n.replace(B,"-$1").toLowerCase()
i=e.getAttribute(r)
if(typeof i==="string"){try{i=i==="true"?true:i==="false"?false:i==="null"?null:+i+""===i?+i:O.test(i)?b.parseJSON(i):i}catch(o){}b.data(e,n,i)}else{i=t}}return i}function $(e){var t
for(t in e){if(t==="data"&&b.isEmptyObject(e[t])){continue}if(t!=="toJSON"){return false}}return true}b.extend({queue:function(e,t,n){var i
if(e){t=(t||"fx")+"queue"
i=b._data(e,t)
if(n){if(!i||b.isArray(n)){i=b._data(e,t,b.makeArray(n))}else{i.push(n)}}return i||[]}},dequeue:function(e,t){t=t||"fx"
var n=b.queue(e,t),i=n.length,r=n.shift(),o=b._queueHooks(e,t),s=function(){b.dequeue(e,t)}
if(r==="inprogress"){r=n.shift()
i--}o.cur=r
if(r){if(t==="fx"){n.unshift("inprogress")}delete o.stop
r.call(e,s,o)}if(!i&&o){o.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks"
return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue")
b._removeData(e,n)})})}})
b.fn.extend({queue:function(e,n){var i=2
if(typeof e!=="string"){n=e
e="fx"
i--}if(arguments.length<i){return b.queue(this[0],e)}return n===t?this:this.each(function(){var t=b.queue(this,e,n)
b._queueHooks(this,e)
if(e==="fx"&&t[0]!=="inprogress"){b.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){e=b.fx?b.fx.speeds[e]||e:e
t=t||"fx"
return this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var i,r=1,o=b.Deferred(),s=this,a=this.length,u=function(){if(!--r){o.resolveWith(s,[s])}}
if(typeof e!=="string"){n=e
e=t}e=e||"fx"
while(a--){i=b._data(s[a],e+"queueHooks")
if(i&&i.empty){r++
i.empty.add(u)}}u()
return o.promise(n)}})
var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input
b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){e=b.propFix[e]||e
return this.each(function(){try{this[e]=t
delete this[e]}catch(n){}})},addClass:function(e){var t,n,i,r,o,s=0,a=this.length,u=typeof e==="string"&&e
if(b.isFunction(e)){return this.each(function(t){b(this).addClass(e.call(this,t,this.className))})}if(u){t=(e||"").match(w)||[]
for(;s<a;s++){n=this[s]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):" ")
if(i){o=0
while(r=t[o++]){if(i.indexOf(" "+r+" ")<0){i+=r+" "}}n.className=b.trim(i)}}}return this},removeClass:function(e){var t,n,i,r,o,s=0,a=this.length,u=arguments.length===0||typeof e==="string"&&e
if(b.isFunction(e)){return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))})}if(u){t=(e||"").match(w)||[]
for(;s<a;s++){n=this[s]
i=n.nodeType===1&&(n.className?(" "+n.className+" ").replace(X," "):"")
if(i){o=0
while(r=t[o++]){while(i.indexOf(" "+r+" ")>=0){i=i.replace(" "+r+" "," ")}}n.className=e?b.trim(i):""}}}return this},toggleClass:function(e,t){var n=typeof e,i=typeof t==="boolean"
if(b.isFunction(e)){return this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var o,s=0,a=b(this),u=t,l=e.match(w)||[]
while(o=l[s++]){u=i?u:!a.hasClass(o)
a[u?"addClass":"removeClass"](o)}}else if(n===r||n==="boolean"){if(this.className){b._data(this,"__className__",this.className)}this.className=this.className||e===false?"":b._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,i=this.length
for(;n<i;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0){return true}}return false},val:function(e){var n,i,r,o=this[0]
if(!arguments.length){if(o){i=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()]
if(i&&"get"in i&&(n=i.get(o,"value"))!==t){return n}n=o.value
return typeof n==="string"?n.replace(U,""):n==null?"":n}return}r=b.isFunction(e)
return this.each(function(n){var o,s=b(this)
if(this.nodeType!==1){return}if(r){o=e.call(this,n,s.val())}else{o=e}if(o==null){o=""}else if(typeof o==="number"){o+=""}else if(b.isArray(o)){o=b.map(o,function(e){return e==null?"":e+""})}i=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()]
if(!i||!("set"in i)||i.set(this,o,"value")===t){this.value=o}})}})
b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value
return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,i=e.options,r=e.selectedIndex,o=e.type==="select-one"||r<0,s=o?null:[],a=o?r+1:i.length,u=r<0?a:o?r:0
for(;u<a;u++){n=i[u]
if((n.selected||u===r)&&(b.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!b.nodeName(n.parentNode,"optgroup"))){t=b(n).val()
if(o){return t}s.push(t)}}return s},set:function(e,t){var n=b.makeArray(t)
b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0})
if(!n.length){e.selectedIndex=-1}return n}}},attr:function(e,n,i){var o,s,a,u=e.nodeType
if(!e||u===3||u===8||u===2){return}if(typeof e.getAttribute===r){return b.prop(e,n,i)}s=u!==1||!b.isXMLDoc(e)
if(s){n=n.toLowerCase()
o=b.attrHooks[n]||(J.test(n)?z:I)}if(i!==t){if(i===null){b.removeAttr(e,n)}else if(o&&s&&"set"in o&&(a=o.set(e,i,n))!==t){return a}else{e.setAttribute(n,i+"")
return i}}else if(o&&s&&"get"in o&&(a=o.get(e,n))!==null){return a}else{if(typeof e.getAttribute!==r){a=e.getAttribute(n)}return a==null?t:a}},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(w)
if(o&&e.nodeType===1){while(n=o[r++]){i=b.propFix[n]||n
if(J.test(n)){if(!Q&&G.test(n)){e[b.camelCase("default-"+n)]=e[i]=false}else{e[i]=false}}else{b.attr(e,n,"")}e.removeAttribute(Q?n:i)}}},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&t==="radio"&&b.nodeName(e,"input")){var n=e.value
e.setAttribute("type",t)
if(n){e.value=n}return t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,i){var r,o,s,a=e.nodeType
if(!e||a===3||a===8||a===2){return}s=a!==1||!b.isXMLDoc(e)
if(s){n=b.propFix[n]||n
o=b.propHooks[n]}if(i!==t){if(o&&"set"in o&&(r=o.set(e,i,n))!==t){return r}else{return e[n]=i}}else{if(o&&"get"in o&&(r=o.get(e,n))!==null){return r}else{return e[n]}}},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex")
return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}})
z={get:function(e,n){var i=b.prop(e,n),r=typeof i==="boolean"&&e.getAttribute(n),o=typeof i==="boolean"?K&&Q?r!=null:G.test(n)?e[b.camelCase("default-"+n)]:!!r:e.getAttributeNode(n)
return o&&o.value!==false?n.toLowerCase():t},set:function(e,t,n){if(t===false){b.removeAttr(e,n)}else if(K&&Q||!G.test(n)){e.setAttribute(!Q&&b.propFix[n]||n,n)}else{e[b.camelCase("default-"+n)]=e[n]=true}return n}}
if(!K||!Q){b.attrHooks.value={get:function(e,n){var i=e.getAttributeNode(n)
return b.nodeName(e,"input")?e.defaultValue:i&&i.specified?i.value:t},set:function(e,t,n){if(b.nodeName(e,"input")){e.defaultValue=t}else{return I&&I.set(e,t,n)}}}}if(!Q){I=b.valHooks.button={get:function(e,n){var i=e.getAttributeNode(n)
return i&&(n==="id"||n==="name"||n==="coords"?i.value!=="":i.specified)?i.value:t},set:function(e,n,i){var r=e.getAttributeNode(i)
if(!r){e.setAttributeNode(r=e.ownerDocument.createAttribute(i))}r.value=n+=""
return i==="value"||n===e.getAttribute(i)?n:t}}
b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,t===""?false:t,n)}}
b.each(["width","height"],function(e,t){b.attrHooks[t]=b.extend(b.attrHooks[t],{set:function(e,n){if(n===""){e.setAttribute(t,"auto")
return n}}})})}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var i=e.getAttribute(n,2)
return i==null?t:i}})})
b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode
if(t){t.selectedIndex
if(t.parentNode){t.parentNode.selectedIndex}}return null}})}if(!b.support.enctype){b.propFix.enctype="encoding"}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,t){if(b.isArray(t)){return e.checked=b.inArray(b(e).val(),t)>=0}}})})
var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,it=/^([^.]*)(?:\.(.+)|)$/
function rt(){return true}function ot(){return false}b.event={global:{},add:function(e,n,i,o,s){var a,u,l,f,c,p,d,h,g,m,y,v=b._data(e)
if(!v){return}if(i.handler){f=i
i=f.handler
s=f.selector}if(!i.guid){i.guid=b.guid++}if(!(u=v.events)){u=v.events={}}if(!(p=v.handle)){p=v.handle=function(e){return typeof b!==r&&(!e||b.event.triggered!==e.type)?b.event.dispatch.apply(p.elem,arguments):t}
p.elem=e}n=(n||"").match(w)||[""]
l=n.length
while(l--){a=it.exec(n[l])||[]
g=y=a[1]
m=(a[2]||"").split(".").sort()
c=b.event.special[g]||{}
g=(s?c.delegateType:c.bindType)||g
c=b.event.special[g]||{}
d=b.extend({type:g,origType:y,data:o,handler:i,guid:i.guid,selector:s,needsContext:s&&b.expr.match.needsContext.test(s),namespace:m.join(".")},f)
if(!(h=u[g])){h=u[g]=[]
h.delegateCount=0
if(!c.setup||c.setup.call(e,o,m,p)===false){if(e.addEventListener){e.addEventListener(g,p,false)}else if(e.attachEvent){e.attachEvent("on"+g,p)}}}if(c.add){c.add.call(e,d)
if(!d.handler.guid){d.handler.guid=i.guid}}if(s){h.splice(h.delegateCount++,0,d)}else{h.push(d)}b.event.global[g]=true}e=null},remove:function(e,t,n,i,r){var o,s,a,u,l,f,c,p,d,h,g,m=b.hasData(e)&&b._data(e)
if(!m||!(f=m.events)){return}t=(t||"").match(w)||[""]
l=t.length
while(l--){a=it.exec(t[l])||[]
d=g=a[1]
h=(a[2]||"").split(".").sort()
if(!d){for(d in f){b.event.remove(e,d+t[l],n,i,true)}continue}c=b.event.special[d]||{}
d=(i?c.delegateType:c.bindType)||d
p=f[d]||[]
a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)")
u=o=p.length
while(o--){s=p[o]
if((r||g===s.origType)&&(!n||n.guid===s.guid)&&(!a||a.test(s.namespace))&&(!i||i===s.selector||i==="**"&&s.selector)){p.splice(o,1)
if(s.selector){p.delegateCount--}if(c.remove){c.remove.call(e,s)}}}if(u&&!p.length){if(!c.teardown||c.teardown.call(e,h,m.handle)===false){b.removeEvent(e,d,m.handle)}delete f[d]}}if(b.isEmptyObject(f)){delete m.handle
b._removeData(e,"events")}},trigger:function(n,i,r,s){var a,u,l,f,c,p,d,h=[r||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[]
l=p=r=r||o
if(r.nodeType===3||r.nodeType===8){return}if(nt.test(g+b.event.triggered)){return}if(g.indexOf(".")>=0){m=g.split(".")
g=m.shift()
m.sort()}u=g.indexOf(":")<0&&"on"+g
n=n[b.expando]?n:new b.Event(g,typeof n==="object"&&n)
n.isTrigger=true
n.namespace=m.join(".")
n.namespace_re=n.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null
n.result=t
if(!n.target){n.target=r}i=i==null?[n]:b.makeArray(i,[n])
c=b.event.special[g]||{}
if(!s&&c.trigger&&c.trigger.apply(r,i)===false){return}if(!s&&!c.noBubble&&!b.isWindow(r)){f=c.delegateType||g
if(!nt.test(f+g)){l=l.parentNode}for(;l;l=l.parentNode){h.push(l)
p=l}if(p===(r.ownerDocument||o)){h.push(p.defaultView||p.parentWindow||e)}}d=0
while((l=h[d++])&&!n.isPropagationStopped()){n.type=d>1?f:c.bindType||g
a=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle")
if(a){a.apply(l,i)}a=u&&l[u]
if(a&&b.acceptData(l)&&a.apply&&a.apply(l,i)===false){n.preventDefault()}}n.type=g
if(!s&&!n.isDefaultPrevented()){if((!c._default||c._default.apply(r.ownerDocument,i)===false)&&!(g==="click"&&b.nodeName(r,"a"))&&b.acceptData(r)){if(u&&r[g]&&!b.isWindow(r)){p=r[u]
if(p){r[u]=null}b.event.triggered=g
try{r[g]()}catch(v){}b.event.triggered=t
if(p){r[u]=p}}}}return n.result},dispatch:function(e){e=b.event.fix(e)
var n,i,r,o,s,a=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],f=b.event.special[e.type]||{}
u[0]=e
e.delegateTarget=this
if(f.preDispatch&&f.preDispatch.call(this,e)===false){return}a=b.event.handlers.call(this,e,l)
n=0
while((o=a[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem
s=0
while((r=o.handlers[s++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(r.namespace)){e.handleObj=r
e.data=r.data
i=((b.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,u)
if(i!==t){if((e.result=i)===false){e.preventDefault()
e.stopPropagation()}}}}}if(f.postDispatch){f.postDispatch.call(this,e)}return e.result},handlers:function(e,n){var i,r,o,s,a=[],u=n.delegateCount,l=e.target
if(u&&l.nodeType&&(!e.button||e.type!=="click")){for(;l!=this;l=l.parentNode||this){if(l.nodeType===1&&(l.disabled!==true||e.type!=="click")){o=[]
for(s=0;s<u;s++){r=n[s]
i=r.selector+" "
if(o[i]===t){o[i]=r.needsContext?b(i,this).index(l)>=0:b.find(i,this,null,[l]).length}if(o[i]){o.push(r)}}if(o.length){a.push({elem:l,handlers:o})}}}}if(u<n.length){a.push({elem:this,handlers:n.slice(u)})}return a},fix:function(e){if(e[b.expando]){return e}var t,n,i,r=e.type,s=e,a=this.fixHooks[r]
if(!a){this.fixHooks[r]=a=tt.test(r)?this.mouseHooks:et.test(r)?this.keyHooks:{}}i=a.props?this.props.concat(a.props):this.props
e=new b.Event(s)
t=i.length
while(t--){n=i[t]
e[n]=s[n]}if(!e.target){e.target=s.srcElement||o}if(e.target.nodeType===3){e.target=e.target.parentNode}e.metaKey=!!e.metaKey
return a.filter?a.filter(e,s):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var i,r,s,a=n.button,u=n.fromElement
if(e.pageX==null&&n.clientX!=null){r=e.target.ownerDocument||o
s=r.documentElement
i=r.body
e.pageX=n.clientX+(s&&s.scrollLeft||i&&i.scrollLeft||0)-(s&&s.clientLeft||i&&i.clientLeft||0)
e.pageY=n.clientY+(s&&s.scrollTop||i&&i.scrollTop||0)-(s&&s.clientTop||i&&i.clientTop||0)}if(!e.relatedTarget&&u){e.relatedTarget=u===e.target?n.toElement:u}if(!e.which&&a!==t){e.which=a&1?1:a&2?3:a&4?2:0}return e}},special:{load:{noBubble:true},click:{trigger:function(){if(b.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click()
return false}}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus){try{this.focus()
return false}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===o.activeElement&&this.blur){this.blur()
return false}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==t){e.originalEvent.returnValue=e.result}}}},simulate:function(e,t,n,i){var r=b.extend(new b.Event,n,{type:e,isSimulated:true,originalEvent:{}})
if(i){b.event.trigger(r,null,t)}else{b.event.dispatch.call(t,r)}if(r.isDefaultPrevented()){n.preventDefault()}}}
b.removeEvent=o.removeEventListener?function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}:function(e,t,n){var i="on"+t
if(e.detachEvent){if(typeof e[i]===r){e[i]=null}e.detachEvent(i,n)}}
b.Event=function(e,t){if(!(this instanceof b.Event)){return new b.Event(e,t)}if(e&&e.type){this.originalEvent=e
this.type=e.type
this.isDefaultPrevented=e.defaultPrevented||e.returnValue===false||e.getPreventDefault&&e.getPreventDefault()?rt:ot}else{this.type=e}if(t){b.extend(this,t)}this.timeStamp=e&&e.timeStamp||b.now()
this[b.expando]=true}
b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=rt
if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=rt
if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=rt
this.stopPropagation()}}
b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj
if(!r||r!==i&&!b.contains(i,r)){e.type=o.origType
n=o.handler.apply(this,arguments)
e.type=t}return n}}})
if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false}b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,i=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t
if(i&&!b._data(i,"submitBubbles")){b.event.add(i,"submit._submit",function(e){e._submit_bubble=true})
b._data(i,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble
if(this.parentNode&&!e.isTrigger){b.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(b.nodeName(this,"form")){return false}b.event.remove(this,"._submit")}}}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(Z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}})
b.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}b.event.simulate("change",this,e,true)})}return false}b.event.add(this,"beforeactivate._change",function(e){var t=e.target
if(Z.test(t.nodeName)&&!b._data(t,"changeBubbles")){b.event.add(t,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){b.event.simulate("change",this.parentNode,e,true)}})
b._data(t,"changeBubbles",true)}})},handle:function(e){var t=e.target
if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox"){return e.handleObj.handler.apply(this,arguments)}},teardown:function(){b.event.remove(this,"._change")
return!Z.test(this.nodeName)}}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,i=function(e){b.event.simulate(t,e.target,b.event.fix(e),true)}
b.event.special[t]={setup:function(){if(n++===0){o.addEventListener(e,i,true)}},teardown:function(){if(--n===0){o.removeEventListener(e,i,true)}}}})}b.fn.extend({on:function(e,n,i,r,o){var s,a
if(typeof e==="object"){if(typeof n!=="string"){i=i||n
n=t}for(s in e){this.on(s,n,i,e[s],o)}return this}if(i==null&&r==null){r=n
i=n=t}else if(r==null){if(typeof n==="string"){r=i
i=t}else{r=i
i=n
n=t}}if(r===false){r=ot}else if(!r){return this}if(o===1){a=r
r=function(e){b().off(e)
return a.apply(this,arguments)}
r.guid=a.guid||(a.guid=b.guid++)}return this.each(function(){b.event.add(this,e,r,i,n)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,n,i){var r,o
if(e&&e.preventDefault&&e.handleObj){r=e.handleObj
b(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler)
return this}if(typeof e==="object"){for(o in e){this.off(o,n,e[o])}return this}if(n===false||typeof n==="function"){i=n
n=t}if(i===false){i=ot}return this.each(function(){b.event.remove(this,e,i,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n){return b.event.trigger(e,t,n,true)}}});(function(e,t){var n,i,r,o,s,a,u,l,f,c,p,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=rt(),E=rt(),S=rt(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length
for(;t<n;t++){if(this[t]===e){return t}}return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=new RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=new RegExp("^"+_+"*,"+_+"*"),I=new RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=new RegExp(R),X=new RegExp("^"+O+"$"),U={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:new RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536
return n!==n?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,n&1023|56320)}
try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[]
while(t=this[e++]){n.push(t)}return n}}function it(e){return Y.test(e+"")}function rt(){var e,t=[]
return e=function(n,i){if(t.push(n+=" ")>r.cacheLength){delete e[t.shift()]}return e[n]=i}}function ot(e){e[x]=true
return e}function st(e){var t=c.createElement("div")
try{return e(t)}catch(n){return false}finally{t=null}}function at(e,t,n,i){var r,o,s,a,u,l,p,g,m,v
if((t?t.ownerDocument||t:w)!==c){f(t)}t=t||c
n=n||[]
if(!e||typeof e!=="string"){return n}if((a=t.nodeType)!==1&&a!==9){return[]}if(!d&&!i){if(r=J.exec(e)){if(s=r[1]){if(a===9){o=t.getElementById(s)
if(o&&o.parentNode){if(o.id===s){n.push(o)
return n}}else{return n}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&y(t,o)&&o.id===s){n.push(o)
return n}}}else if(r[2]){H.apply(n,q.call(t.getElementsByTagName(e),0))
return n}else if((s=r[3])&&T.getByClassName&&t.getElementsByClassName){H.apply(n,q.call(t.getElementsByClassName(s),0))
return n}}if(T.qsa&&!h.test(e)){p=true
g=x
m=t
v=a===9&&e
if(a===1&&t.nodeName.toLowerCase()!=="object"){l=pt(e)
if(p=t.getAttribute("id")){g=p.replace(K,"\\$&")}else{t.setAttribute("id",g)}g="[id='"+g+"'] "
u=l.length
while(u--){l[u]=g+dt(l[u])}m=V.test(e)&&t.parentNode||t
v=l.join(",")}if(v){try{H.apply(n,q.call(m.querySelectorAll(v),0))
return n}catch(b){}finally{if(!p){t.removeAttribute("id")}}}}}return wt(e.replace(W,"$1"),t,n,i)}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?t.nodeName!=="HTML":false}
f=at.setDocument=function(e){var n=e?e.ownerDocument||e:w
if(n===c||n.nodeType!==9||!n.documentElement){return c}c=n
p=n.documentElement
d=s(n)
T.tagNameNoComments=st(function(e){e.appendChild(n.createComment(""))
return!e.getElementsByTagName("*").length})
T.attributes=st(function(e){e.innerHTML="<select></select>"
var t=typeof e.lastChild.getAttribute("multiple")
return t!=="boolean"&&t!=="string"})
T.getByClassName=st(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>"
if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false}e.lastChild.className="e"
return e.getElementsByClassName("e").length===2})
T.getByName=st(function(e){e.id=x+0
e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>"
p.insertBefore(e,p.firstChild)
var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length
T.getIdNotName=!n.getElementById(x)
p.removeChild(e)
return t})
r.attrHandle=st(function(e){e.innerHTML="<a href='#'></a>"
return e.firstChild&&typeof e.firstChild.getAttribute!==A&&e.firstChild.getAttribute("href")==="#"})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}}
if(T.getIdNotName){r.find["ID"]=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}}
r.filter["ID"]=function(e){var t=e.replace(et,tt)
return function(e){return e.getAttribute("id")===t}}}else{r.find["ID"]=function(e,n){if(typeof n.getElementById!==A&&!d){var i=n.getElementById(e)
return i?i.id===e||typeof i.getAttributeNode!==A&&i.getAttributeNode("id").value===e?[i]:t:[]}}
r.filter["ID"]=function(e){var t=e.replace(et,tt)
return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id")
return n&&n.value===t}}}r.find["TAG"]=T.tagNameNoComments?function(e,t){if(typeof t.getElementsByTagName!==A){return t.getElementsByTagName(e)}}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e)
if(e==="*"){while(n=o[r++]){if(n.nodeType===1){i.push(n)}}return i}return o}
r.find["NAME"]=T.getByName&&function(e,t){if(typeof t.getElementsByName!==A){return t.getElementsByName(name)}}
r.find["CLASS"]=T.getByClassName&&function(e,t){if(typeof t.getElementsByClassName!==A&&!d){return t.getElementsByClassName(e)}}
g=[]
h=[":focus"]
if(T.qsa=it(n.querySelectorAll)){st(function(e){e.innerHTML="<select><option selected=''></option></select>"
if(!e.querySelectorAll("[selected]").length){h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!e.querySelectorAll(":checked").length){h.push(":checked")}})
st(function(e){e.innerHTML="<input type='hidden' i=''/>"
if(e.querySelectorAll("[i^='']").length){h.push("[*^$]="+_+"*(?:\"\"|'')")}if(!e.querySelectorAll(":enabled").length){h.push(":enabled",":disabled")}e.querySelectorAll("*,:x")
h.push(",.*:")})}if(T.matchesSelector=it(m=p.matchesSelector||p.mozMatchesSelector||p.webkitMatchesSelector||p.oMatchesSelector||p.msMatchesSelector)){st(function(e){T.disconnectedMatch=m.call(e,"div")
m.call(e,"[s!='']:x")
g.push("!=",R)})}h=new RegExp(h.join("|"))
g=new RegExp(g.join("|"))
y=it(p.contains)||p.compareDocumentPosition?function(e,t){var n=e.nodeType===9?e.documentElement:e,i=t&&t.parentNode
return e===i||!!(i&&i.nodeType===1&&(n.contains?n.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return true}}}return false}
v=p.compareDocumentPosition?function(e,t){var i
if(e===t){u=true
return 0}if(i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t)){if(i&1||e.parentNode&&e.parentNode.nodeType===11){if(e===n||y(w,e)){return-1}if(t===n||y(w,t)){return 1}return 0}return i&4?-1:1}return e.compareDocumentPosition?-1:1}:function(e,t){var i,r=0,o=e.parentNode,s=t.parentNode,a=[e],l=[t]
if(e===t){u=true
return 0}else if(!o||!s){return e===n?-1:t===n?1:o?-1:s?1:0}else if(o===s){return ut(e,t)}i=e
while(i=i.parentNode){a.unshift(i)}i=t
while(i=i.parentNode){l.unshift(i)}while(a[r]===l[r]){r++}return r?ut(a[r],l[r]):a[r]===w?-1:l[r]===w?1:0}
u=false;[0,0].sort(v)
T.detectDuplicates=u
return c}
at.matches=function(e,t){return at(e,null,null,t)}
at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==c){f(e)}t=t.replace(Z,"='$1']")
if(T.matchesSelector&&!d&&(!g||!g.test(t))&&!h.test(t)){try{var n=m.call(e,t)
if(n||T.disconnectedMatch||e.document&&e.document.nodeType!==11){return n}}catch(i){}}return at(t,c,null,[e]).length>0}
at.contains=function(e,t){if((e.ownerDocument||e)!==c){f(e)}return y(e,t)}
at.attr=function(e,t){var n
if((e.ownerDocument||e)!==c){f(e)}if(!d){t=t.toLowerCase()}if(n=r.attrHandle[t]){return n(e)}if(d||T.attributes){return e.getAttribute(t)}return((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===true?t:n&&n.specified?n.value:null}
at.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
at.uniqueSort=function(e){var t,n=[],i=1,r=0
u=!T.detectDuplicates
e.sort(v)
if(u){for(;t=e[i];i++){if(t===e[i-1]){r=n.push(i)}}while(r--){e.splice(n[r],1)}}return e}
function ut(e,t){var n=t&&e,i=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j)
if(i){return i}if(n){while(n=n.nextSibling){if(n===t){return-1}}}return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase()
return n==="input"&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase()
return(n==="input"||n==="button")&&t.type===e}}function ct(e){return ot(function(t){t=+t
return ot(function(n,i){var r,o=e([],n.length,t),s=o.length
while(s--){if(n[r=o[s]]){n[r]=!(i[r]=n[r])}}})})}o=at.getText=function(e){var t,n="",i=0,r=e.nodeType
if(!r){for(;t=e[i];i++){n+=o(t)}}else if(r===1||r===9||r===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=o(e)}}}else if(r===3||r===4){return e.nodeValue}return n}
r=at.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(et,tt)
e[3]=(e[4]||e[5]||"").replace(et,tt)
if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if(e[1].slice(0,3)==="nth"){if(!e[3]){at.error(e[0])}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"))
e[5]=+(e[7]+e[8]||e[3]==="odd")}else if(e[3]){at.error(e[0])}return e},PSEUDO:function(e){var t,n=!e[5]&&e[2]
if(U["CHILD"].test(e[0])){return null}if(e[4]){e[2]=e[4]}else if(n&&z.test(n)&&(t=pt(n,true))&&(t=n.indexOf(")",n.length-t)-n.length)){e[0]=e[0].slice(0,t)
e[2]=n.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace(et,tt).toLowerCase()
return function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(e){var t=k[e+" "]
return t||(t=new RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(i){var r=at.attr(i,e)
if(r==null){return t==="!="}if(!t){return true}r+=""
return t==="="?r===n:t==="!="?r!==n:t==="^="?n&&r.indexOf(n)===0:t==="*="?n&&r.indexOf(n)>-1:t==="$="?n&&r.slice(-n.length)===n:t==="~="?(" "+r+" ").indexOf(n)>-1:t==="|="?r===n||r.slice(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,i,r){var o=e.slice(0,3)!=="nth",s=e.slice(-4)!=="last",a=t==="of-type"
return i===1&&r===0?function(e){return!!e.parentNode}:function(t,n,u){var l,f,c,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a
if(m){if(o){while(g){c=t
while(c=c[g]){if(a?c.nodeName.toLowerCase()===y:c.nodeType===1){return false}}h=g=e==="only"&&!h&&"nextSibling"}return true}h=[s?m.firstChild:m.lastChild]
if(s&&v){f=m[x]||(m[x]={})
l=f[e]||[]
d=l[0]===N&&l[1]
p=l[0]===N&&l[2]
c=d&&m.childNodes[d]
while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if(c.nodeType===1&&++p&&c===t){f[e]=[N,d,p]
break}}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N){p=l[1]}else{while(c=++d&&c&&c[g]||(p=d=0)||h.pop()){if((a?c.nodeName.toLowerCase()===y:c.nodeType===1)&&++p){if(v){(c[x]||(c[x]={}))[e]=[N,p]}if(c===t){break}}}}p-=r
return p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e)
if(i[x]){return i(t)}if(i.length>1){n=[e,e,"",t]
return r.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var r,o=i(e,t),s=o.length
while(s--){r=M.call(e,o[s])
e[r]=!(n[r]=o[s])}}):function(e){return i(e,0,n)}}return i}},pseudos:{not:ot(function(e){var t=[],n=[],i=a(e.replace(W,"$1"))
return i[x]?ot(function(e,t,n,r){var o,s=i(e,null,r,[]),a=e.length
while(a--){if(o=s[a]){e[a]=!(t[a]=o)}}}):function(e,r,o){t[0]=e
i(t,null,o,n)
return!n.pop()}}),has:ot(function(e){return function(t){return at(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){if(!X.test(e||"")){at.error("unsupported lang: "+e)}e=e.replace(et,tt).toLowerCase()
return function(t){var n
do{if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){n=n.toLowerCase()
return n===e||n.indexOf(e+"-")===0}}while((t=t.parentNode)&&t.nodeType===1)
return false}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===c.activeElement&&(!c.hasFocus||c.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false}}return true},parent:function(e){return!r.pseudos["empty"](e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return t==="input"&&e.type==="button"||t==="button"},text:function(e){var t
return e.nodeName.toLowerCase()==="input"&&e.type==="text"&&((t=e.getAttribute("type"))==null||t.toLowerCase()===e.type)},first:ct(function(){return[0]}),last:ct(function(e,t){return[t-1]}),eq:ct(function(e,t,n){return[n<0?n+t:n]}),even:ct(function(e,t){var n=0
for(;n<t;n+=2){e.push(n)}return e}),odd:ct(function(e,t){var n=1
for(;n<t;n+=2){e.push(n)}return e}),lt:ct(function(e,t,n){var i=n<0?n+t:n
for(;--i>=0;){e.push(i)}return e}),gt:ct(function(e,t,n){var i=n<0?n+t:n
for(;++i<t;){e.push(i)}return e})}}
for(n in{radio:true,checkbox:true,file:true,password:true,image:true}){r.pseudos[n]=lt(n)}for(n in{submit:true,reset:true}){r.pseudos[n]=ft(n)}function pt(e,t){var n,i,o,s,a,u,l,f=E[e+" "]
if(f){return t?0:f.slice(0)}a=e
u=[]
l=r.preFilter
while(a){if(!n||(i=$.exec(a))){if(i){a=a.slice(i[0].length)||a}u.push(o=[])}n=false
if(i=I.exec(a)){n=i.shift()
o.push({value:n,type:i[0].replace(W," ")})
a=a.slice(n.length)}for(s in r.filter){if((i=U[s].exec(a))&&(!l[s]||(i=l[s](i)))){n=i.shift()
o.push({value:n,type:s,matches:i})
a=a.slice(n.length)}}if(!n){break}}return t?a.length:a?at.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,i=""
for(;t<n;t++){i+=e[t].value}return i}function ht(e,t,n){var r=t.dir,o=n&&r==="parentNode",s=C++
return t.first?function(t,n,i){while(t=t[r]){if(t.nodeType===1||o){return e(t,n,i)}}}:function(t,n,a){var u,l,f,c=N+" "+s
if(a){while(t=t[r]){if(t.nodeType===1||o){if(e(t,n,a)){return true}}}}else{while(t=t[r]){if(t.nodeType===1||o){f=t[x]||(t[x]={})
if((l=f[r])&&l[0]===c){if((u=l[1])===true||u===i){return u===true}}else{l=f[r]=[c]
l[1]=e(t,n,a)||i
if(l[1]===true){return true}}}}}}}function gt(e){return e.length>1?function(t,n,i){var r=e.length
while(r--){if(!e[r](t,n,i)){return false}}return true}:e[0]}function mt(e,t,n,i,r){var o,s=[],a=0,u=e.length,l=t!=null
for(;a<u;a++){if(o=e[a]){if(!n||n(o,i,r)){s.push(o)
if(l){t.push(a)}}}}return s}function yt(e,t,n,i,r,o){if(i&&!i[x]){i=yt(i)}if(r&&!r[x]){r=yt(r,o)}return ot(function(o,s,a,u){var l,f,c,p=[],d=[],h=s.length,g=o||xt(t||"*",a.nodeType?[a]:a,[]),m=e&&(o||!t)?mt(g,p,e,a,u):g,y=n?r||(o?e:h||i)?[]:s:m
if(n){n(m,y,a,u)}if(i){l=mt(y,d)
i(l,[],a,u)
f=l.length
while(f--){if(c=l[f]){y[d[f]]=!(m[d[f]]=c)}}}if(o){if(r||e){if(r){l=[]
f=y.length
while(f--){if(c=y[f]){l.push(m[f]=c)}}r(null,y=[],l,u)}f=y.length
while(f--){if((c=y[f])&&(l=r?M.call(o,c):p[f])>-1){o[l]=!(s[l]=c)}}}}else{y=mt(y===s?y.splice(h,y.length):y)
if(r){r(null,s,y,u)}else{H.apply(s,y)}}})}function vt(e){var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,f=ht(function(e){return e===t},a,true),c=ht(function(e){return M.call(t,e)>-1},a,true),p=[function(e,n,i){return!s&&(i||n!==l)||((t=n).nodeType?f(e,n,i):c(e,n,i))}]
for(;u<o;u++){if(n=r.relative[e[u].type]){p=[ht(gt(p),n)]}else{n=r.filter[e[u].type].apply(null,e[u].matches)
if(n[x]){i=++u
for(;i<o;i++){if(r.relative[e[i].type]){break}}return yt(u>1&&gt(p),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,u<i&&vt(e.slice(u,i)),i<o&&vt(e=e.slice(i)),i<o&&dt(e))}p.push(n)}}return gt(p)}function bt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,u,f,p,d){var h,g,m,y=[],v=0,b="0",x=a&&[],w=d!=null,T=l,C=a||s&&r.find["TAG"]("*",d&&u.parentNode||u),k=N+=T==null?1:Math.random()||.1
if(w){l=u!==c&&u
i=n}for(;(h=C[b])!=null;b++){if(s&&h){g=0
while(m=e[g++]){if(m(h,u,f)){p.push(h)
break}}if(w){N=k
i=++n}}if(o){if(h=!m&&h){v--}if(a){x.push(h)}}}v+=b
if(o&&b!==v){g=0
while(m=t[g++]){m(x,y,u,f)}if(a){if(v>0){while(b--){if(!(x[b]||y[b])){y[b]=L.call(p)}}}y=mt(y)}H.apply(p,y)
if(w&&!a&&y.length>0&&v+t.length>1){at.uniqueSort(p)}}if(w){N=k
l=T}return x}
return o?ot(a):a}a=at.compile=function(e,t){var n,i=[],r=[],o=S[e+" "]
if(!o){if(!t){t=pt(e)}n=t.length
while(n--){o=vt(t[n])
if(o[x]){i.push(o)}else{r.push(o)}}o=S(e,bt(r,i))}return o}
function xt(e,t,n){var i=0,r=t.length
for(;i<r;i++){at(e,t[i],n)}return n}function wt(e,t,n,i){var o,s,u,l,f,c=pt(e)
if(!i){if(c.length===1){s=c[0]=c[0].slice(0)
if(s.length>2&&(u=s[0]).type==="ID"&&t.nodeType===9&&!d&&r.relative[s[1].type]){t=r.find["ID"](u.matches[0].replace(et,tt),t)[0]
if(!t){return n}e=e.slice(s.shift().value.length)}o=U["needsContext"].test(e)?0:s.length
while(o--){u=s[o]
if(r.relative[l=u.type]){break}if(f=r.find[l]){if(i=f(u.matches[0].replace(et,tt),V.test(s[0].type)&&t.parentNode||t)){s.splice(o,1)
e=i.length&&dt(s)
if(!e){H.apply(n,q.call(i,0))
return n}break}}}}}a(e,c)(i,t,d,n,V.test(e))
return n}r.pseudos["nth"]=r.pseudos["eq"]
function Tt(){}r.filters=Tt.prototype=r.pseudos
r.setFilters=new Tt
f()
at.attr=b.attr
b.find=at
b.expr=at.selectors
b.expr[":"]=b.expr.pseudos
b.unique=at.uniqueSort
b.text=at.getText
b.isXMLDoc=at.isXML
b.contains=at.contains})(e)
var st=/Until$/,at=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ft={children:true,contents:true,next:true,prev:true}
b.fn.extend({find:function(e){var t,n,i,r=this.length
if(typeof e!=="string"){i=this
return this.pushStack(b(e).filter(function(){for(t=0;t<r;t++){if(b.contains(i[t],this)){return true}}}))}n=[]
for(t=0;t<r;t++){b.find(e,this[t],n)}n=this.pushStack(r>1?b.unique(n):n)
n.selector=(this.selector?this.selector+" ":"")+e
return n},has:function(e){var t,n=b(e,this),i=n.length
return this.filter(function(){for(t=0;t<i;t++){if(b.contains(this,n[t])){return true}}})},not:function(e){return this.pushStack(pt(this,e,false))},filter:function(e){return this.pushStack(pt(this,e,true))},is:function(e){return!!e&&(typeof e==="string"?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,i=0,r=this.length,o=[],s=lt.test(e)||typeof e!=="string"?b(e,t||this.context):0
for(;i<r;i++){n=this[i]
while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(s?s.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n)
break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1}if(typeof e==="string"){return b.inArray(this[0],b(e))}return b.inArray(e.jquery?e[0]:e,this)},add:function(e,t){var n=typeof e==="string"?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),i=b.merge(this.get(),n)
return this.pushStack(b.unique(i))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}})
b.fn.andSelf=b.fn.addBack
function ct(e,t){do{e=e[t]}while(e&&e.nodeType!==1)
return e}b.each({parent:function(e){var t=e.parentNode
return t&&t.nodeType!==11?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return ct(e,"nextSibling")},prev:function(e){return ct(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,i){var r=b.map(this,t,n)
if(!st.test(e)){i=n}if(i&&typeof i==="string"){r=b.filter(i,r)}r=this.length>1&&!ft[e]?b.unique(r):r
if(this.length>1&&at.test(e)){r=r.reverse()}return this.pushStack(r)}})
b.extend({filter:function(e,t,n){if(n){e=":not("+e+")"}return t.length===1?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,i){var r=[],o=e[n]
while(o&&o.nodeType!==9&&(i===t||o.nodeType!==1||!b(o).is(i))){if(o.nodeType===1){r.push(o)}o=o[n]}return r},sibling:function(e,t){var n=[]
for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}})
function pt(e,t,n){t=t||0
if(b.isFunction(t)){return b.grep(e,function(e,i){var r=!!t.call(e,i,e)
return r===n})}else if(t.nodeType){return b.grep(e,function(e){return e===t===n})}else if(typeof t==="string"){var i=b.grep(e,function(e){return e.nodeType===1})
if(ut.test(t)){return b.filter(t,i,!n)}else{t=b.filter(t,i)}}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment()
if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=new RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"))
At.optgroup=At.option
At.tbody=At.tfoot=At.colgroup=At.caption=At.thead
At.th=At.td
b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapAll(e.call(this,t))})}if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(true)
if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this
while(e.firstChild&&e.firstChild.nodeType===1){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=b(this),n=t.contents()
if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=b.isFunction(e)
return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)}})},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)}})},remove:function(e,t){var n,i=0
for(;(n=this[i])!=null;i++){if(!e||b.filter(e,[n]).length>0){if(!t&&n.nodeType===1){b.cleanData(Ot(n))}if(n.parentNode){if(t&&b.contains(n.ownerDocument,n)){Mt(Ot(n,"script"))}n.parentNode.removeChild(n)}}}return this},empty:function(){var e,t=0
for(;(e=this[t])!=null;t++){if(e.nodeType===1){b.cleanData(Ot(e,false))}while(e.firstChild){e.removeChild(e.firstChild)}if(e.options&&b.nodeName(e,"select")){e.options.length=0}}return this},clone:function(e,t){e=e==null?false:e
t=t==null?e:t
return this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},i=0,r=this.length
if(e===t){return n.nodeType===1?n.innerHTML.replace(gt,""):t}if(typeof e==="string"&&!Tt.test(e)&&(b.support.htmlSerialize||!mt.test(e))&&(b.support.leadingWhitespace||!yt.test(e))&&!At[(bt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(vt,"<$1></$2>")
try{for(;i<r;i++){n=this[i]||{}
if(n.nodeType===1){b.cleanData(Ot(n,false))
n.innerHTML=e}}n=0}catch(o){}}if(n){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e)
if(!t&&typeof e!=="string"){e=b(e).not(this).detach()}return this.domManip([e],true,function(e){var t=this.nextSibling,n=this.parentNode
if(n){b(this).remove()
n.insertBefore(e,t)}})},detach:function(e){return this.remove(e,true)},domManip:function(e,n,i){e=p.apply([],e)
var r,o,s,a,u,l,f=0,c=this.length,d=this,h=c-1,g=e[0],m=b.isFunction(g)
if(m||!(c<=1||typeof g!=="string"||b.support.checkClone||!Ct.test(g))){return this.each(function(r){var o=d.eq(r)
if(m){e[0]=g.call(this,r,n?o.html():t)}o.domManip(e,n,i)})}if(c){l=b.buildFragment(e,this[0].ownerDocument,false,this)
r=l.firstChild
if(l.childNodes.length===1){l=r}if(r){n=n&&b.nodeName(r,"tr")
a=b.map(Ot(l,"script"),Ht)
s=a.length
for(;f<c;f++){o=l
if(f!==h){o=b.clone(o,true,true)
if(s){b.merge(a,Ot(o,"script"))}}i.call(n&&b.nodeName(this[f],"table")?Lt(this[f],"tbody"):this[f],o,f)}if(s){u=a[a.length-1].ownerDocument
b.map(a,qt)
for(f=0;f<s;f++){o=a[f]
if(kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)){if(o.src){b.ajax({url:o.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,""))}}}}l=r=null}}return this}})
function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type")
e.type=(t&&t.specified)+"/"+e.type
return e}function qt(e){var t=Et.exec(e.type)
if(t){e.type=t[1]}else{e.removeAttribute("type")}return e}function Mt(e,t){var n,i=0
for(;(n=e[i])!=null;i++){b._data(n,"globalEval",!t||b._data(t[i],"globalEval"))}}function _t(e,t){if(t.nodeType!==1||!b.hasData(e)){return}var n,i,r,o=b._data(e),s=b._data(t,o),a=o.events
if(a){delete s.handle
s.events={}
for(n in a){for(i=0,r=a[n].length;i<r;i++){b.event.add(t,n,a[n][i])}}}if(s.data){s.data=b.extend({},s.data)}}function Ft(e,t){var n,i,r
if(t.nodeType!==1){return}n=t.nodeName.toLowerCase()
if(!b.support.noCloneEvent&&t[b.expando]){r=b._data(t)
for(i in r.events){b.removeEvent(t,i,r.handle)}t.removeAttribute(b.expando)}if(n==="script"&&t.text!==e.text){Ht(t).text=e.text
qt(t)}else if(n==="object"){if(t.parentNode){t.outerHTML=e.outerHTML}if(b.support.html5Clone&&(e.innerHTML&&!b.trim(t.innerHTML))){t.innerHTML=e.innerHTML}}else if(n==="input"&&Nt.test(e.type)){t.defaultChecked=t.checked=e.checked
if(t.value!==e.value){t.value=e.value}}else if(n==="option"){t.defaultSelected=t.selected=e.defaultSelected}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,i=0,r=[],o=b(e),s=o.length-1
for(;i<=s;i++){n=i===s?this:this.clone(true)
b(o[i])[t](n)
d.apply(r,n.get())}return this.pushStack(r)}})
function Ot(e,n){var i,o,s=0,a=typeof e.getElementsByTagName!==r?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==r?e.querySelectorAll(n||"*"):t
if(!a){for(a=[],i=e.childNodes||e;(o=i[s])!=null;s++){if(!n||b.nodeName(o,n)){a.push(o)}else{b.merge(a,Ot(o,n))}}}return n===t||n&&b.nodeName(e,n)?b.merge([e],a):a}function Bt(e){if(Nt.test(e.type)){e.defaultChecked=e.checked}}b.extend({clone:function(e,t,n){var i,r,o,s,a,u=b.contains(e.ownerDocument,e)
if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")){o=e.cloneNode(true)}else{Dt.innerHTML=e.outerHTML
Dt.removeChild(o=Dt.firstChild)}if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!b.isXMLDoc(e)){i=Ot(o)
a=Ot(e)
for(s=0;(r=a[s])!=null;++s){if(i[s]){Ft(r,i[s])}}}if(t){if(n){a=a||Ot(e)
i=i||Ot(o)
for(s=0;(r=a[s])!=null;s++){_t(r,i[s])}}else{_t(e,o)}}i=Ot(o,"script")
if(i.length>0){Mt(i,!u&&Ot(e,"script"))}i=a=r=null
return o},buildFragment:function(e,t,n,i){var r,o,s,a,u,l,f,c=e.length,p=dt(t),d=[],h=0
for(;h<c;h++){o=e[h]
if(o||o===0){if(b.type(o)==="object"){b.merge(d,o.nodeType?[o]:o)}else if(!wt.test(o)){d.push(t.createTextNode(o))}else{a=a||p.appendChild(t.createElement("div"))
u=(bt.exec(o)||["",""])[1].toLowerCase()
f=At[u]||At._default
a.innerHTML=f[1]+o.replace(vt,"<$1></$2>")+f[2]
r=f[0]
while(r--){a=a.lastChild}if(!b.support.leadingWhitespace&&yt.test(o)){d.push(t.createTextNode(yt.exec(o)[0]))}if(!b.support.tbody){o=u==="table"&&!xt.test(o)?a.firstChild:f[1]==="<table>"&&!xt.test(o)?a:0
r=o&&o.childNodes.length
while(r--){if(b.nodeName(l=o.childNodes[r],"tbody")&&!l.childNodes.length){o.removeChild(l)}}}b.merge(d,a.childNodes)
a.textContent=""
while(a.firstChild){a.removeChild(a.firstChild)}a=p.lastChild}}}if(a){p.removeChild(a)}if(!b.support.appendChecked){b.grep(Ot(d,"input"),Bt)}h=0
while(o=d[h++]){if(i&&b.inArray(o,i)!==-1){continue}s=b.contains(o.ownerDocument,o)
a=Ot(p.appendChild(o),"script")
if(s){Mt(a)}if(n){r=0
while(o=a[r++]){if(kt.test(o.type||"")){n.push(o)}}}}a=null
return p},cleanData:function(e,t){var n,i,o,s,a=0,u=b.expando,l=b.cache,c=b.support.deleteExpando,p=b.event.special
for(;(n=e[a])!=null;a++){if(t||b.acceptData(n)){o=n[u]
s=o&&l[o]
if(s){if(s.events){for(i in s.events){if(p[i]){b.event.remove(n,i)}else{b.removeEvent(n,i,s.handle)}}}if(l[o]){delete l[o]
if(c){delete n[u]}else if(typeof n.removeAttribute!==r){n.removeAttribute(u)}else{n[u]=null}f.push(o)}}}}}})
var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=new RegExp("^("+x+")(.*)$","i"),Yt=new RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=new RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"]
function tn(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),i=t,r=en.length
while(r--){t=en[r]+n
if(t in e){return t}}return i}function nn(e,t){e=t||e
return b.css(e,"display")==="none"||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,i,r,o=[],s=0,a=e.length
for(;s<a;s++){i=e[s]
if(!i.style){continue}o[s]=b._data(i,"olddisplay")
n=i.style.display
if(t){if(!o[s]&&n==="none"){i.style.display=""}if(i.style.display===""&&nn(i)){o[s]=b._data(i,"olddisplay",un(i.nodeName))}}else{if(!o[s]){r=nn(i)
if(n&&n!=="none"||!r){b._data(i,"olddisplay",r?n:b.css(i,"display"))}}}}for(s=0;s<a;s++){i=e[s]
if(!i.style){continue}if(!t||i.style.display==="none"||i.style.display===""){i.style.display=t?o[s]||"":"none"}}return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,i){var r,o,s={},a=0
if(b.isArray(n)){o=Rt(e)
r=n.length
for(;a<r;a++){s[n[a]]=b.css(e,n[a],false,o)}return s}return i!==t?b.style(e,n,i):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,true)},hide:function(){return rn(this)},toggle:function(e){var t=typeof e==="boolean"
return this.each(function(){if(t?e:nn(this)){b(this).show()}else{b(this).hide()}})}})
b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity")
return n===""?"1":n}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,i,r){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var o,s,a,u=b.camelCase(n),l=e.style
n=b.cssProps[u]||(b.cssProps[u]=tn(l,u))
a=b.cssHooks[n]||b.cssHooks[u]
if(i!==t){s=typeof i
if(s==="string"&&(o=Jt.exec(i))){i=(o[1]+1)*o[2]+parseFloat(b.css(e,n))
s="number"}if(i==null||s==="number"&&isNaN(i)){return}if(s==="number"&&!b.cssNumber[u]){i+="px"}if(!b.support.clearCloneStyle&&i===""&&n.indexOf("background")===0){l[n]="inherit"}if(!a||!("set"in a)||(i=a.set(e,i,r))!==t){try{l[n]=i}catch(f){}}}else{if(a&&"get"in a&&(o=a.get(e,false,r))!==t){return o}return l[n]}},css:function(e,n,i,r){var o,s,a,u=b.camelCase(n)
n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u))
a=b.cssHooks[n]||b.cssHooks[u]
if(a&&"get"in a){s=a.get(e,true,i)}if(s===t){s=Wt(e,n,r)}if(s==="normal"&&n in Kt){s=Kt[n]}if(i===""||i){o=parseFloat(s)
return i===true||b.isNumeric(o)?o||0:s}return s},swap:function(e,t,n,i){var r,o,s={}
for(o in t){s[o]=e.style[o]
e.style[o]=t[o]}r=n.apply(e,i||[])
for(o in t){e.style[o]=s[o]}return r}})
if(e.getComputedStyle){Rt=function(t){return e.getComputedStyle(t,null)}
Wt=function(e,n,i){var r,o,s,a=i||Rt(e),u=a?a.getPropertyValue(n)||a[n]:t,l=e.style
if(a){if(u===""&&!b.contains(e.ownerDocument,e)){u=b.style(e,n)}if(Yt.test(u)&&Ut.test(n)){r=l.width
o=l.minWidth
s=l.maxWidth
l.minWidth=l.maxWidth=l.width=u
u=a.width
l.width=r
l.minWidth=o
l.maxWidth=s}}return u}}else if(o.documentElement.currentStyle){Rt=function(e){return e.currentStyle}
Wt=function(e,n,i){var r,o,s,a=i||Rt(e),u=a?a[n]:t,l=e.style
if(u==null&&l&&l[n]){u=l[n]}if(Yt.test(u)&&!zt.test(n)){r=l.left
o=e.runtimeStyle
s=o&&o.left
if(s){o.left=e.currentStyle.left}l.left=n==="fontSize"?"1em":u
u=l.pixelLeft+"px"
l.left=r
if(s){o.left=s}}return u===""?"auto":u}}function on(e,t,n){var i=Vt.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function sn(e,t,n,i,r){var o=n===(i?"border":"content")?4:t==="width"?1:0,s=0
for(;o<4;o+=2){if(n==="margin"){s+=b.css(e,n+Zt[o],true,r)}if(i){if(n==="content"){s-=b.css(e,"padding"+Zt[o],true,r)}if(n!=="margin"){s-=b.css(e,"border"+Zt[o]+"Width",true,r)}}else{s+=b.css(e,"padding"+Zt[o],true,r)
if(n!=="padding"){s+=b.css(e,"border"+Zt[o]+"Width",true,r)}}}return s}function an(e,t,n){var i=true,r=t==="width"?e.offsetWidth:e.offsetHeight,o=Rt(e),s=b.support.boxSizing&&b.css(e,"boxSizing",false,o)==="border-box"
if(r<=0||r==null){r=Wt(e,t,o)
if(r<0||r==null){r=e.style[t]}if(Yt.test(r)){return r}i=s&&(b.support.boxSizingReliable||r===e.style[t])
r=parseFloat(r)||0}return r+sn(e,t,n||(s?"border":"content"),i,o)+"px"}function un(e){var t=o,n=Gt[e]
if(!n){n=ln(e,t)
if(n==="none"||!n){Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement)
t=(Pt[0].contentWindow||Pt[0].contentDocument).document
t.write("<!doctype html><html><body>")
t.close()
n=ln(e,t)
Pt.detach()}Gt[e]=n}return n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),i=b.css(n[0],"display")
n.remove()
return i}b.each(["height","width"],function(e,t){b.cssHooks[t]={get:function(e,n,i){if(n){return e.offsetWidth===0&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return an(e,t,i)}):an(e,t,i)}},set:function(e,n,i){var r=i&&Rt(e)
return on(e,n,i?sn(e,t,i,b.support.boxSizing&&b.css(e,"boxSizing",false,r)==="border-box",r):0)}}})
if(!b.support.opacity){b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,i=e.currentStyle,r=b.isNumeric(t)?"alpha(opacity="+t*100+")":"",o=i&&i.filter||n.filter||""
n.zoom=1
if((t>=1||t==="")&&b.trim(o.replace($t,""))===""&&n.removeAttribute){n.removeAttribute("filter")
if(t===""||i&&!i.filter){return}}n.filter=$t.test(o)?o.replace($t,r):o+" "+r}}}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(e,t){if(t){return b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"])}}}}if(!b.support.pixelPosition&&b.fn.position){b.each(["top","left"],function(e,t){b.cssHooks[t]={get:function(e,n){if(n){n=Wt(e,t)
return Yt.test(n)?b(e).position()[t]+"px":n}}}})}})
if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!b.support.reliableHiddenOffsets&&(e.style&&e.style.display||b.css(e,"display"))==="none"}
b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}}b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var i=0,r={},o=typeof n==="string"?n.split(" "):[n]
for(;i<4;i++){r[e+Zt[i]+t]=o[i]||o[i-2]||o[0]}return r}}
if(!Ut.test(e)){b.cssHooks[e+t].set=on}})
var fn=/%20/g,cn=/\[\]$/,pn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i
b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements")
return e?b.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val()
return n==null?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(pn,"\r\n")}}):{name:t.name,value:n.replace(pn,"\r\n")}}).get()}})
b.param=function(e,n){var i,r=[],o=function(e,t){t=b.isFunction(t)?t():t==null?"":t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(n===t){n=b.ajaxSettings&&b.ajaxSettings.traditional}if(b.isArray(e)||e.jquery&&!b.isPlainObject(e)){b.each(e,function(){o(this.name,this.value)})}else{for(i in e){gn(i,e[i],n,o)}}return r.join("&").replace(fn,"+")}
function gn(e,t,n,i){var r
if(b.isArray(t)){b.each(t,function(t,r){if(n||cn.test(e)){i(e,r)}else{gn(e+"["+(typeof r==="object"?t:"")+"]",r,n,i)}})}else if(!n&&b.type(t)==="object"){for(r in t){gn(e+"["+r+"]",t[r],n,i)}}else{i(e,t)}}b.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}})
b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)}
var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*")
try{yn=s.href}catch(Ln){yn=o.createElement("a")
yn.href=""
yn=yn.href}mn=En.exec(yn.toLowerCase())||[]
function Hn(e){return function(t,n){if(typeof t!=="string"){n=t
t="*"}var i,r=0,o=t.toLowerCase().match(w)||[]
if(b.isFunction(n)){while(i=o[r++]){if(i[0]==="+"){i=i.slice(1)||"*";(e[i]=e[i]||[]).unshift(n)}else{(e[i]=e[i]||[]).push(n)}}}}}function qn(e,t,n,i){var r={},o=e===jn
function s(a){var u
r[a]=true
b.each(e[a]||[],function(e,a){var l=a(t,n,i)
if(typeof l==="string"&&!o&&!r[l]){t.dataTypes.unshift(l)
s(l)
return false}else if(o){return!(u=l)}})
return u}return s(t.dataTypes[0])||!r["*"]&&s("*")}function Mn(e,n){var i,r,o=b.ajaxSettings.flatOptions||{}
for(r in n){if(n[r]!==t){(o[r]?e:i||(i={}))[r]=n[r]}}if(i){b.extend(true,e,i)}return e}b.fn.load=function(e,n,i){if(typeof e!=="string"&&Sn){return Sn.apply(this,arguments)}var r,o,s,a=this,u=e.indexOf(" ")
if(u>=0){r=e.slice(u,e.length)
e=e.slice(0,u)}if(b.isFunction(n)){i=n
n=t}else if(n&&typeof n==="object"){s="POST"}if(a.length>0){b.ajax({url:e,type:s,dataType:"html",data:n}).done(function(e){o=arguments
a.html(r?b("<div>").append(b.parseHTML(e)).find(r):e)}).complete(i&&function(e,t){a.each(i,o||[e.responseText,t,e])})}return this}
b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}})
b.each(["get","post"],function(e,n){b[n]=function(e,i,r,o){if(b.isFunction(i)){o=o||r
r=i
i=t}return b.ajax({url:e,type:n,dataType:o,data:i,success:r})}})
b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){if(typeof e==="object"){n=e
e=t}n=n||{}
var i,r,o,s,a,u,l,f,c=b.ajaxSetup({},n),p=c.context||c,d=c.context&&(p.nodeType||p.jquery)?b(p):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=c.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t
if(x===2){if(!f){f={}
while(t=Tn.exec(s)){f[t[1].toLowerCase()]=t[2]}}t=f[e.toLowerCase()]}return t==null?null:t},getAllResponseHeaders:function(){return x===2?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
if(!x){e=v[n]=v[n]||e
y[e]=t}return this},overrideMimeType:function(e){if(!x){c.mimeType=e}return this},statusCode:function(e){var t
if(e){if(x<2){for(t in e){m[t]=[m[t],e[t]]}}else{N.always(e[N.status])}}return this},abort:function(e){var t=e||T
if(l){l.abort(t)}k(0,t)
return this}}
h.promise(N).complete=g.add
N.success=N.done
N.error=N.fail
c.url=((e||c.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//")
c.type=n.method||n.type||c.method||c.type
c.dataTypes=b.trim(c.dataType||"*").toLowerCase().match(w)||[""]
if(c.crossDomain==null){i=En.exec(c.url.toLowerCase())
c.crossDomain=!!(i&&(i[1]!==mn[1]||i[2]!==mn[2]||(i[3]||(i[1]==="http:"?80:443))!=(mn[3]||(mn[1]==="http:"?80:443))))}if(c.data&&c.processData&&typeof c.data!=="string"){c.data=b.param(c.data,c.traditional)}qn(An,c,n,N)
if(x===2){return N}u=c.global
if(u&&b.active++===0){b.event.trigger("ajaxStart")}c.type=c.type.toUpperCase()
c.hasContent=!Cn.test(c.type)
o=c.url
if(!c.hasContent){if(c.data){o=c.url+=(bn.test(o)?"&":"?")+c.data
delete c.data}if(c.cache===false){c.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++}}if(c.ifModified){if(b.lastModified[o]){N.setRequestHeader("If-Modified-Since",b.lastModified[o])}if(b.etag[o]){N.setRequestHeader("If-None-Match",b.etag[o])}}if(c.data&&c.hasContent&&c.contentType!==false||n.contentType){N.setRequestHeader("Content-Type",c.contentType)}N.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Dn+"; q=0.01":""):c.accepts["*"])
for(r in c.headers){N.setRequestHeader(r,c.headers[r])}if(c.beforeSend&&(c.beforeSend.call(p,N,c)===false||x===2)){return N.abort()}T="abort"
for(r in{success:1,error:1,complete:1}){N[r](c[r])}l=qn(jn,c,n,N)
if(!l){k(-1,"No Transport")}else{N.readyState=1
if(u){d.trigger("ajaxSend",[N,c])}if(c.async&&c.timeout>0){a=setTimeout(function(){N.abort("timeout")},c.timeout)}try{x=1
l.send(y,k)}catch(C){if(x<2){k(-1,C)}else{throw C}}}function k(e,n,i,r){var f,y,v,w,T,C=n
if(x===2){return}x=2
if(a){clearTimeout(a)}l=t
s=r||""
N.readyState=e>0?4:0
if(i){w=_n(c,N,i)}if(e>=200&&e<300||e===304){if(c.ifModified){T=N.getResponseHeader("Last-Modified")
if(T){b.lastModified[o]=T}T=N.getResponseHeader("etag")
if(T){b.etag[o]=T}}if(e===204){f=true
C="nocontent"}else if(e===304){f=true
C="notmodified"}else{f=Fn(c,w)
C=f.state
y=f.data
v=f.error
f=!v}}else{v=C
if(e||!C){C="error"
if(e<0){e=0}}}N.status=e
N.statusText=(n||C)+""
if(f){h.resolveWith(p,[y,C,N])}else{h.rejectWith(p,[N,C,v])}N.statusCode(m)
m=t
if(u){d.trigger(f?"ajaxSuccess":"ajaxError",[N,c,f?y:v])}g.fireWith(p,[N,C])
if(u){d.trigger("ajaxComplete",[N,c])
if(!--b.active){b.event.trigger("ajaxStop")}}}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}})
function _n(e,n,i){var r,o,s,a,u=e.contents,l=e.dataTypes,f=e.responseFields
for(a in f){if(a in i){n[f[a]]=i[a]}}while(l[0]==="*"){l.shift()
if(o===t){o=e.mimeType||n.getResponseHeader("Content-Type")}}if(o){for(a in u){if(u[a]&&u[a].test(o)){l.unshift(a)
break}}}if(l[0]in i){s=l[0]}else{for(a in i){if(!l[0]||e.converters[a+" "+l[0]]){s=a
break}if(!r){r=a}}s=s||r}if(s){if(s!==l[0]){l.unshift(s)}return i[s]}}function Fn(e,t){var n,i,r,o,s={},a=0,u=e.dataTypes.slice(),l=u[0]
if(e.dataFilter){t=e.dataFilter(t,e.dataType)}if(u[1]){for(r in e.converters){s[r.toLowerCase()]=e.converters[r]}}for(;i=u[++a];){if(i!=="*"){if(l!=="*"&&l!==i){r=s[l+" "+i]||s["* "+i]
if(!r){for(n in s){o=n.split(" ")
if(o[1]===i){r=s[l+" "+o[0]]||s["* "+o[0]]
if(r){if(r===true){r=s[n]}else if(s[n]!==true){i=o[0]
u.splice(a--,0,i)}break}}}}if(r!==true){if(r&&e["throws"]){t=r(t)}else{try{t=r(t)}catch(f){return{state:"parsererror",error:r?f:"No conversion from "+l+" to "+i}}}}}l=i}}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){b.globalEval(e)
return e}}})
b.ajaxPrefilter("script",function(e){if(e.cache===t){e.cache=false}if(e.crossDomain){e.type="GET"
e.global=false}})
b.ajaxTransport("script",function(e){if(e.crossDomain){var n,i=o.head||b("head")[0]||o.documentElement
return{send:function(t,r){n=o.createElement("script")
n.async=true
if(e.scriptCharset){n.charset=e.scriptCharset}n.src=e.url
n.onload=n.onreadystatechange=function(e,t){if(t||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null
if(n.parentNode){n.parentNode.removeChild(n)}n=null
if(!t){r(200,"success")}}}
i.insertBefore(n,i.firstChild)},abort:function(){if(n){n.onload(t,true)}}}}})
var On=[],Bn=/(=)\?(?=&|$)|\?\?/
b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++
this[e]=true
return e}})
b.ajaxPrefilter("json jsonp",function(n,i,r){var o,s,a,u=n.jsonp!==false&&(Bn.test(n.url)?"url":typeof n.data==="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data")
if(u||n.dataTypes[0]==="jsonp"){o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback
if(u){n[u]=n[u].replace(Bn,"$1"+o)}else if(n.jsonp!==false){n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o}n.converters["script json"]=function(){if(!a){b.error(o+" was not called")}return a[0]}
n.dataTypes[0]="json"
s=e[o]
e[o]=function(){a=arguments}
r.always(function(){e[o]=s
if(n[o]){n.jsonpCallback=i.jsonpCallback
On.push(o)}if(a&&b.isFunction(s)){s(a[0])}a=s=t})
return"script"}})
var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e
for(e in Pn){Pn[e](t,true)}}
function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In
Rn=b.ajaxSettings.xhr()
b.support.cors=!!Rn&&"withCredentials"in Rn
Rn=b.support.ajax=!!Rn
if(Rn){b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var i
return{send:function(r,o){var s,a,u=n.xhr()
if(n.username){u.open(n.type,n.url,n.async,n.username,n.password)}else{u.open(n.type,n.url,n.async)}if(n.xhrFields){for(a in n.xhrFields){u[a]=n.xhrFields[a]}}if(n.mimeType&&u.overrideMimeType){u.overrideMimeType(n.mimeType)}if(!n.crossDomain&&!r["X-Requested-With"]){r["X-Requested-With"]="XMLHttpRequest"}try{for(a in r){u.setRequestHeader(a,r[a])}}catch(l){}u.send(n.hasContent&&n.data||null)
i=function(e,r){var a,l,f,c
try{if(i&&(r||u.readyState===4)){i=t
if(s){u.onreadystatechange=b.noop
if($n){delete Pn[s]}}if(r){if(u.readyState!==4){u.abort()}}else{c={}
a=u.status
l=u.getAllResponseHeaders()
if(typeof u.responseText==="string"){c.text=u.responseText}try{f=u.statusText}catch(p){f=""}if(!a&&n.isLocal&&!n.crossDomain){a=c.text?200:404}else if(a===1223){a=204}}}}catch(d){if(!r){o(-1,d)}}if(c){o(a,f,c,l)}}
if(!n.async){i()}else if(u.readyState===4){setTimeout(i)}else{s=++Wn
if($n){if(!Pn){Pn={}
b(e).unload($n)}Pn[s]=i}u.onreadystatechange=i}},abort:function(){if(i){i(t,true)}}}}})}var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=new RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[ni],Qn={"*":[function(e,t){var n,i,r=this.createTween(e,t),o=Yn.exec(t),s=r.cur(),a=+s||0,u=1,l=20
if(o){n=+o[2]
i=o[3]||(b.cssNumber[e]?"":"px")
if(i!=="px"&&a){a=b.css(r.elem,e,true)||n||1
do{u=u||".5"
a=a/u
b.style(r.elem,e,a+i)}while(u!==(u=r.cur()/s)&&u!==1&&--l)}r.unit=i
r.start=a
r.end=o[1]?a+(o[1]+1)*n:n}return r}]}
function Kn(){setTimeout(function(){Xn=t})
return Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var i=(Qn[t]||[]).concat(Qn["*"]),r=0,o=i.length
for(;r<o;r++){if(i[r].call(e,t,n)){return}}})}function ei(e,t,n){var i,r,o=0,s=Gn.length,a=b.Deferred().always(function(){delete u.elem}),u=function(){if(r){return false}var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),i=n/l.duration||0,o=1-i,s=0,u=l.tweens.length
for(;s<u;s++){l.tweens[s].run(o)}a.notifyWith(e,[l,o,n])
if(o<1&&u){return n}else{a.resolveWith(e,[l])
return false}},l=a.promise({elem:e,props:b.extend({},t),opts:b.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var i=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
l.tweens.push(i)
return i},stop:function(t){var n=0,i=t?l.tweens.length:0
if(r){return this}r=true
for(;n<i;n++){l.tweens[n].run(1)}if(t){a.resolveWith(e,[l,t])}else{a.rejectWith(e,[l,t])}return this}}),f=l.props
ti(f,l.opts.specialEasing)
for(;o<s;o++){i=Gn[o].call(l,e,f,l.opts)
if(i){return i}}Zn(l,f)
if(b.isFunction(l.opts.start)){l.opts.start.call(e,l)}b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue}))
return l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function ti(e,t){var n,i,r,o,s
for(r in e){i=b.camelCase(r)
o=t[i]
n=e[r]
if(b.isArray(n)){o=n[1]
n=e[r]=n[0]}if(r!==i){e[i]=n
delete e[r]}s=b.cssHooks[i]
if(s&&"expand"in s){n=s.expand(n)
delete e[i]
for(r in n){if(!(r in e)){e[r]=n[r]
t[r]=o}}}else{t[i]=o}}}b.Animation=b.extend(ei,{tweener:function(e,t){if(b.isFunction(e)){t=e
e=["*"]}else{e=e.split(" ")}var n,i=0,r=e.length
for(;i<r;i++){n=e[i]
Qn[n]=Qn[n]||[]
Qn[n].unshift(t)}},prefilter:function(e,t){if(t){Gn.unshift(e)}else{Gn.push(e)}}})
function ni(e,t,n){var i,r,o,s,a,u,l,f,c,p=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e)
if(!n.queue){f=b._queueHooks(e,"fx")
if(f.unqueued==null){f.unqueued=0
c=f.empty.fire
f.empty.fire=function(){if(!f.unqueued){c()}}}f.unqueued++
p.always(function(){p.always(function(){f.unqueued--
if(!b.queue(e,"fx").length){f.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[d.overflow,d.overflowX,d.overflowY]
if(b.css(e,"display")==="inline"&&b.css(e,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||un(e.nodeName)==="inline"){d.display="inline-block"}else{d.zoom=1}}}if(n.overflow){d.overflow="hidden"
if(!b.support.shrinkWrapBlocks){p.always(function(){d.overflow=n.overflow[0]
d.overflowX=n.overflow[1]
d.overflowY=n.overflow[2]})}}for(r in t){s=t[r]
if(Vn.exec(s)){delete t[r]
u=u||s==="toggle"
if(s===(m?"hide":"show")){continue}g.push(r)}}o=g.length
if(o){a=b._data(e,"fxshow")||b._data(e,"fxshow",{})
if("hidden"in a){m=a.hidden}if(u){a.hidden=!m}if(m){b(e).show()}else{p.done(function(){b(e).hide()})}p.done(function(){var t
b._removeData(e,"fxshow")
for(t in h){b.style(e,t,h[t])}})
for(r=0;r<o;r++){i=g[r]
l=p.createTween(i,m?a[i]:0)
h[i]=a[i]||b.style(e,i)
if(!(i in a)){a[i]=l.start
if(m){l.end=l.start
l.start=i==="width"||i==="height"?1:0}}}}}function ii(e,t,n,i,r){return new ii.prototype.init(e,t,n,i,r)}b.Tween=ii
ii.prototype={constructor:ii,init:function(e,t,n,i,r,o){this.elem=e
this.prop=n
this.easing=r||"swing"
this.options=t
this.start=this.now=this.cur()
this.end=i
this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=ii.propHooks[this.prop]
return e&&e.get?e.get(this):ii.propHooks._default.get(this)},run:function(e){var t,n=ii.propHooks[this.prop]
if(this.options.duration){this.pos=t=b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start
if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{ii.propHooks._default.set(this)}return this}}
ii.prototype.init.prototype=ii.prototype
ii.propHooks={_default:{get:function(e){var t
if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=b.css(e.elem,e.prop,"")
return!t||t==="auto"?0:t},set:function(e){if(b.fx.step[e.prop]){b.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[b.cssProps[e.prop]]!=null||b.cssHooks[e.prop])){b.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}}
ii.propHooks.scrollTop=ii.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}}
b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t]
b.fn[t]=function(e,i,r){return e==null||typeof e==="boolean"?n.apply(this,arguments):this.animate(ri(t,true),e,i,r)}})
b.fn.extend({fadeTo:function(e,t,n,i){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=b.isEmptyObject(e),o=b.speed(t,n,i),s=function(){var t=ei(this,b.extend({},e),o)
s.finish=function(){t.stop(true)}
if(r||b._data(this,"finish")){t.stop(true)}}
s.finish=s
return r||o.queue===false?this.each(s):this.queue(o.queue,s)},stop:function(e,n,i){var r=function(e){var t=e.stop
delete e.stop
t(i)}
if(typeof e!=="string"){i=n
n=e
e=t}if(n&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,n=e!=null&&e+"queueHooks",o=b.timers,s=b._data(this)
if(n){if(s[n]&&s[n].stop){r(s[n])}}else{for(n in s){if(s[n]&&s[n].stop&&Jn.test(n)){r(s[n])}}}for(n=o.length;n--;){if(o[n].elem===this&&(e==null||o[n].queue===e)){o[n].anim.stop(i)
t=false
o.splice(n,1)}}if(t||!i){b.dequeue(this,e)}})},finish:function(e){if(e!==false){e=e||"fx"}return this.each(function(){var t,n=b._data(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=b.timers,s=i?i.length:0
n.finish=true
b.queue(this,e,[])
if(r&&r.cur&&r.cur.finish){r.cur.finish.call(this)}for(t=o.length;t--;){if(o[t].elem===this&&o[t].queue===e){o[t].anim.stop(true)
o.splice(t,1)}}for(t=0;t<s;t++){if(i[t]&&i[t].finish){i[t].finish.call(this)}}delete n.finish})}})
function ri(e,t){var n,i={height:e},r=0
t=t?1:0
for(;r<4;r+=2-t){n=Zt[r]
i["margin"+n]=i["padding"+n]=e}if(t){i.opacity=i.width=e}return i}b.each({slideDown:ri("show"),slideUp:ri("hide"),slideToggle:ri("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}})
b.speed=function(e,t,n){var i=e&&typeof e==="object"?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t}
i.duration=b.fx.off?0:typeof i.duration==="number"?i.duration:i.duration in b.fx.speeds?b.fx.speeds[i.duration]:b.fx.speeds._default
if(i.queue==null||i.queue===true){i.queue="fx"}i.old=i.complete
i.complete=function(){if(b.isFunction(i.old)){i.old.call(this)}if(i.queue){b.dequeue(this,i.queue)}}
return i}
b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}}
b.timers=[]
b.fx=ii.prototype.init
b.fx.tick=function(){var e,n=b.timers,i=0
Xn=b.now()
for(;i<n.length;i++){e=n[i]
if(!e()&&n[i]===e){n.splice(i--,1)}}if(!n.length){b.fx.stop()}Xn=t}
b.fx.timer=function(e){if(e()&&b.timers.push(e)){b.fx.start()}}
b.fx.interval=13
b.fx.start=function(){if(!Un){Un=setInterval(b.fx.tick,b.fx.interval)}}
b.fx.stop=function(){clearInterval(Un)
Un=null}
b.fx.speeds={slow:600,fast:200,_default:400}
b.fx.step={}
if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}}b.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)})}var n,i,o={top:0,left:0},s=this[0],a=s&&s.ownerDocument
if(!a){return}n=a.documentElement
if(!b.contains(n,s)){return o}if(typeof s.getBoundingClientRect!==r){o=s.getBoundingClientRect()}i=oi(a)
return{top:o.top+(i.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(i.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}}
b.offset={setOffset:function(e,t,n){var i=b.css(e,"position")
if(i==="static"){e.style.position="relative"}var r=b(e),o=r.offset(),s=b.css(e,"top"),a=b.css(e,"left"),u=(i==="absolute"||i==="fixed")&&b.inArray("auto",[s,a])>-1,l={},f={},c,p
if(u){f=r.position()
c=f.top
p=f.left}else{c=parseFloat(s)||0
p=parseFloat(a)||0}if(b.isFunction(t)){t=t.call(e,n,o)}if(t.top!=null){l.top=t.top-o.top+c}if(t.left!=null){l.left=t.left-o.left+p}if("using"in t){t.using.call(e,l)}else{r.css(l)}}}
b.fn.extend({position:function(){if(!this[0]){return}var e,t,n={top:0,left:0},i=this[0]
if(b.css(i,"position")==="fixed"){t=i.getBoundingClientRect()}else{e=this.offsetParent()
t=this.offset()
if(!b.nodeName(e[0],"html")){n=e.offset()}n.top+=b.css(e[0],"borderTopWidth",true)
n.left+=b.css(e[0],"borderLeftWidth",true)}return{top:t.top-n.top-b.css(i,"marginTop",true),left:t.left-n.left-b.css(i,"marginLeft",true)}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement
while(e&&(!b.nodeName(e,"html")&&b.css(e,"position")==="static")){e=e.offsetParent}return e||o.documentElement})}})
b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var i=/Y/.test(n)
b.fn[e]=function(r){return b.access(this,function(e,r,o){var s=oi(e)
if(o===t){return s?n in s?s[n]:s.document.documentElement[r]:e[r]}if(s){s.scrollTo(!i?o:b(s).scrollLeft(),i?o:b(s).scrollTop())}else{e[r]=o}},e,r,arguments.length,null)}})
function oi(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(i,r){b.fn[r]=function(r,o){var s=arguments.length&&(i||typeof r!=="boolean"),a=i||(r===true||o===true?"margin":"border")
return b.access(this,function(n,i,r){var o
if(b.isWindow(n)){return n.document.documentElement["client"+e]}if(n.nodeType===9){o=n.documentElement
return Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])}return r===t?b.css(n,i,a):b.style(n,i,r,a)},n,s?r:t,s,null)}})})
e.jQuery=e.$=b
if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b})}})(window)
KAdefine("third_party/javascript-khansrc/jquery/jquery.js", function(require, requireWithVars, module, exports) {
    module.exports = jQuery;
});
(function(){var n=this
var r=n._
var t={}
var e=Array.prototype,i=Object.prototype,u=Function.prototype
var a=e.push,f=e.slice,l=e.concat,c=i.toString,o=i.hasOwnProperty
var s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,g=e.filter,y=e.every,m=e.some,d=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=u.bind
var j=function(n){if(n instanceof j)return n
if(!(this instanceof j))return new j(n)
this._wrapped=n}
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=j}exports._=j}else{n._=j}j.VERSION="1.4.4"
var A=j.each=j.forEach=function(n,r,e){if(n==null)return
if(s&&n.forEach===s){n.forEach(r,e)}else if(n.length===+n.length){for(var i=0,u=n.length;i<u;i++){if(r.call(e,n[i],i,n)===t)return}}else{for(var a in n){if(j.has(n,a)){if(r.call(e,n[a],a,n)===t)return}}}}
j.map=j.collect=function(n,r,t){var e=[]
if(n==null)return e
if(p&&n.map===p)return n.map(r,t)
A(n,function(n,i,u){e[e.length]=r.call(t,n,i,u)})
return e}
var O="Reduce of empty array with no initial value"
j.reduce=j.foldl=j.inject=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(v&&n.reduce===v){if(e)r=j.bind(r,e)
return i?n.reduce(r,t):n.reduce(r)}A(n,function(n,u,a){if(!i){t=n
i=true}else{t=r.call(e,t,n,u,a)}})
if(!i)throw new TypeError(O)
return t}
j.reduceRight=j.foldr=function(n,r,t,e){var i=arguments.length>2
if(n==null)n=[]
if(h&&n.reduceRight===h){if(e)r=j.bind(r,e)
return i?n.reduceRight(r,t):n.reduceRight(r)}var u=n.length
if(u!==+u){var a=j.keys(n)
u=a.length}A(n,function(f,l,c){l=a?a[--u]:--u
if(!i){t=n[l]
i=true}else{t=r.call(e,t,n[l],l,c)}})
if(!i)throw new TypeError(O)
return t}
j.find=j.detect=function(n,r,t){var e
E(n,function(n,i,u){if(r.call(t,n,i,u)){e=n
return true}})
return e}
j.filter=j.select=function(n,r,t){var e=[]
if(n==null)return e
if(g&&n.filter===g)return n.filter(r,t)
A(n,function(n,i,u){if(r.call(t,n,i,u))e[e.length]=n})
return e}
j.reject=function(n,r,t){return j.filter(n,function(n,e,i){return!r.call(t,n,e,i)},t)}
j.every=j.all=function(n,r,e){r||(r=j.identity)
var i=true
if(n==null)return i
if(y&&n.every===y)return n.every(r,e)
A(n,function(n,u,a){if(!(i=i&&r.call(e,n,u,a)))return t})
return!!i}
var E=j.some=j.any=function(n,r,e){r||(r=j.identity)
var i=false
if(n==null)return i
if(m&&n.some===m)return n.some(r,e)
A(n,function(n,u,a){if(i||(i=r.call(e,n,u,a)))return t})
return!!i}
j.contains=j.include=function(n,r){if(n==null)return false
if(d&&n.indexOf===d)return n.indexOf(r)!=-1
return E(n,function(n){return n===r})}
j.invoke=function(n,r){var t=f.call(arguments,2)
var e=j.isFunction(r)
return j.map(n,function(n){return(e?r:n[r]).apply(n,t)})}
j.pluck=function(n,r){return j.map(n,function(n){return n[r]})}
j.where=function(n,r,t){if(j.isEmpty(r))return t?null:[]
return j[t?"find":"filter"](n,function(n){for(var t in r){if(r[t]!==n[t])return false}return true})}
j.findWhere=function(n,r){return j.where(n,r,true)}
j.max=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.max.apply(Math,n)}if(!r&&j.isEmpty(n))return-Infinity
var e={computed:-Infinity,value:-Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a>=e.computed&&(e={value:n,computed:a})})
return e.value}
j.min=function(n,r,t){if(!r&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535){return Math.min.apply(Math,n)}if(!r&&j.isEmpty(n))return Infinity
var e={computed:Infinity,value:Infinity}
A(n,function(n,i,u){var a=r?r.call(t,n,i,u):n
a<e.computed&&(e={value:n,computed:a})})
return e.value}
j.shuffle=function(n){var r
var t=0
var e=[]
A(n,function(n){r=j.random(t++)
e[t-1]=e[r]
e[r]=n})
return e}
var k=function(n){return j.isFunction(n)?n:function(r){return r[n]}}
j.sortBy=function(n,r,t){var e=k(r)
return j.pluck(j.map(n,function(n,r,i){return{value:n,index:r,criteria:e.call(t,n,r,i)}}).sort(function(n,r){var t=n.criteria
var e=r.criteria
if(t!==e){if(t>e||t===void 0)return 1
if(t<e||e===void 0)return-1}return n.index<r.index?-1:1}),"value")}
var I=function(n,r,t,e){var i={}
var u=k(r||j.identity)
A(n,function(r,a){var f=u.call(t,r,a,n)
e(i,f,r)})
return i}
j.groupBy=function(n,r,t){return I(n,r,t,function(n,r,t){(j.has(n,r)?n[r]:n[r]=[]).push(t)})}
j.countBy=function(n,r,t){return I(n,r,t,function(n,r){if(!j.has(n,r))n[r]=0
n[r]++})}
j.sortedIndex=function(n,r,t,e){t=t==null?j.identity:k(t)
var i=t.call(e,r)
var u=0,a=n.length
while(u<a){var f=u+a>>>1
t.call(e,n[f])<i?u=f+1:a=f}return u}
j.toArray=function(n){if(!n)return[]
if(j.isArray(n))return f.call(n)
if(n.length===+n.length)return j.map(n,j.identity)
return j.values(n)}
j.size=function(n){if(n==null)return 0
return n.length===+n.length?n.length:j.keys(n).length}
j.first=j.head=j.take=function(n,r,t){if(n==null)return void 0
return r!=null&&!t?f.call(n,0,r):n[0]}
j.initial=function(n,r,t){return f.call(n,0,n.length-(r==null||t?1:r))}
j.last=function(n,r,t){if(n==null)return void 0
if(r!=null&&!t){return f.call(n,Math.max(n.length-r,0))}else{return n[n.length-1]}}
j.rest=j.tail=j.drop=function(n,r,t){return f.call(n,r==null||t?1:r)}
j.compact=function(n){return j.filter(n,j.identity)}
var F=function(n,r,t){A(n,function(n){if(j.isArray(n)){r?a.apply(t,n):F(n,r,t)}else{t.push(n)}})
return t}
j.flatten=function(n,r){return F(n,r,[])}
j.without=function(n){return j.difference(n,f.call(arguments,1))}
j.uniq=j.unique=function(n,r,t,e){if(j.isFunction(r)){e=t
t=r
r=false}var i=t?j.map(n,t,e):n
var u=[]
var a=[]
A(i,function(t,e){if(r?!e||a[a.length-1]!==t:!j.contains(a,t)){a.push(t)
u.push(n[e])}})
return u}
j.union=function(){return j.uniq(l.apply(e,arguments))}
j.intersection=function(n){var r=f.call(arguments,1)
return j.filter(j.uniq(n),function(n){return j.every(r,function(r){return j.indexOf(r,n)>=0})})}
j.difference=function(n){var r=l.apply(e,f.call(arguments,1))
return j.filter(n,function(n){return!j.contains(r,n)})}
j.zip=function(){var n=f.call(arguments)
var r=j.max(j.pluck(n,"length"))
var t=new Array(r)
for(var e=0;e<r;e++){t[e]=j.pluck(n,""+e)}return t}
j.object=function(n,r){if(n==null)return{}
var t={}
for(var e=0,i=n.length;e<i;e++){if(r){t[n[e]]=r[e]}else{t[n[e][0]]=n[e][1]}}return t}
j.indexOf=function(n,r,t){if(n==null)return-1
var e=0,i=n.length
if(t){if(typeof t=="number"){e=t<0?Math.max(0,i+t):t}else{e=j.sortedIndex(n,r)
return n[e]===r?e:-1}}if(d&&n.indexOf===d)return n.indexOf(r,t)
for(;e<i;e++)if(n[e]===r)return e
return-1}
j.lastIndexOf=function(n,r,t){if(n==null)return-1
var e=t!=null
if(b&&n.lastIndexOf===b){return e?n.lastIndexOf(r,t):n.lastIndexOf(r)}var i=e?t:n.length
while(i--)if(n[i]===r)return i
return-1}
j.range=function(n,r,t){if(arguments.length<=1){r=n||0
n=0}t=arguments[2]||1
var e=Math.max(Math.ceil((r-n)/t),0)
var i=0
var u=new Array(e)
while(i<e){u[i++]=n
n+=t}return u}
j.bind=function(n,r){if(n.bind===w&&w)return w.apply(n,f.call(arguments,1))
var t=f.call(arguments,2)
return function(){return n.apply(r,t.concat(f.call(arguments)))}}
j.partial=function(n){var r=f.call(arguments,1)
return function(){return n.apply(this,r.concat(f.call(arguments)))}}
j.bindAll=function(n){var r=f.call(arguments,1)
if(r.length===0)r=j.functions(n)
A(r,function(r){n[r]=j.bind(n[r],n)})
return n}
j.memoize=function(n,r){var t={}
r||(r=j.identity)
return function(){var e=r.apply(this,arguments)
return j.has(t,e)?t[e]:t[e]=n.apply(this,arguments)}}
j.delay=function(n,r){var t=f.call(arguments,2)
return setTimeout(function(){return n.apply(null,t)},r)}
j.defer=function(n){return j.delay.apply(j,[n,1].concat(f.call(arguments,1)))}
j.throttle=function(n,r){var t,e,i,u
var a=0
var f=function(){a=new Date
i=null
u=n.apply(t,e)}
return function(){var l=new Date
var c=r-(l-a)
t=this
e=arguments
if(c<=0){clearTimeout(i)
i=null
a=l
u=n.apply(t,e)}else if(!i){i=setTimeout(f,c)}return u}}
j.debounce=function(n,r,t){var e,i
return function(){var u=this,a=arguments
var f=function(){e=null
if(!t)i=n.apply(u,a)}
var l=t&&!e
clearTimeout(e)
e=setTimeout(f,r)
if(l)i=n.apply(u,a)
return i}}
j.once=function(n){var r=false,t
return function(){if(r)return t
r=true
t=n.apply(this,arguments)
n=null
return t}}
j.wrap=function(n,r){return function(){var t=[n]
a.apply(t,arguments)
return r.apply(this,t)}}
j.compose=function(){var n=arguments
return function(){var r=arguments
for(var t=n.length-1;t>=0;t--){r=[n[t].apply(this,r)]}return r[0]}}
j.after=function(n,r){if(n<=0)return r()
return function(){if(--n<1){return r.apply(this,arguments)}}}
j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object")
var r=[]
for(var t in n)if(j.has(n,t))r[r.length]=t
return r}
j.values=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push(n[t])
return r}
j.pairs=function(n){var r=[]
for(var t in n)if(j.has(n,t))r.push([t,n[t]])
return r}
j.invert=function(n){var r={}
for(var t in n)if(j.has(n,t))r[n[t]]=t
return r}
j.functions=j.methods=function(n){var r=[]
for(var t in n){if(j.isFunction(n[t]))r.push(t)}return r.sort()}
j.extend=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){n[t]=r[t]}}})
return n}
j.pick=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
A(t,function(t){if(t in n)r[t]=n[t]})
return r}
j.omit=function(n){var r={}
var t=l.apply(e,f.call(arguments,1))
for(var i in n){if(!j.contains(t,i))r[i]=n[i]}return r}
j.defaults=function(n){A(f.call(arguments,1),function(r){if(r){for(var t in r){if(n[t]==null)n[t]=r[t]}}})
return n}
j.clone=function(n){if(!j.isObject(n))return n
return j.isArray(n)?n.slice():j.extend({},n)}
j.tap=function(n,r){r(n)
return n}
var R=function(n,r,t,e){if(n===r)return n!==0||1/n==1/r
if(n==null||r==null)return n===r
if(n instanceof j)n=n._wrapped
if(r instanceof j)r=r._wrapped
var i=c.call(n)
if(i!=c.call(r))return false
switch(i){case"[object String]":return n==String(r)
case"[object Number]":return n!=+n?r!=+r:n==0?1/n==1/r:n==+r
case"[object Date]":case"[object Boolean]":return+n==+r
case"[object RegExp]":return n.source==r.source&&n.global==r.global&&n.multiline==r.multiline&&n.ignoreCase==r.ignoreCase}if(typeof n!="object"||typeof r!="object")return false
var u=t.length
while(u--){if(t[u]==n)return e[u]==r}t.push(n)
e.push(r)
var a=0,f=true
if(i=="[object Array]"){a=n.length
f=a==r.length
if(f){while(a--){if(!(f=R(n[a],r[a],t,e)))break}}}else{var l=n.constructor,o=r.constructor
if(l!==o&&!(j.isFunction(l)&&l instanceof l&&j.isFunction(o)&&o instanceof o)){return false}for(var s in n){if(j.has(n,s)){a++
if(!(f=j.has(r,s)&&R(n[s],r[s],t,e)))break}}if(f){for(s in r){if(j.has(r,s)&&!a--)break}f=!a}}t.pop()
e.pop()
return f}
j.isEqual=function(n,r){return R(n,r,[],[])}
j.isEmpty=function(n){if(n==null)return true
if(j.isArray(n)||j.isString(n))return n.length===0
for(var r in n)if(j.has(n,r))return false
return true}
j.isElement=function(n){return!!(n&&n.nodeType===1)}
j.isArray=x||function(n){return c.call(n)=="[object Array]"}
j.isObject=function(n){return n===Object(n)}
A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(r){return c.call(r)=="[object "+n+"]"}})
if(!j.isArguments(arguments)){j.isArguments=function(n){return!!(n&&j.has(n,"callee"))}}if(typeof/./!=="function"){j.isFunction=function(n){return typeof n==="function"}}j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))}
j.isNaN=function(n){return j.isNumber(n)&&n!=+n}
j.isBoolean=function(n){return n===true||n===false||c.call(n)=="[object Boolean]"}
j.isNull=function(n){return n===null}
j.isUndefined=function(n){return n===void 0}
j.has=function(n,r){return o.call(n,r)}
j.noConflict=function(){n._=r
return this}
j.identity=function(n){return n}
j.times=function(n,r,t){var e=Array(n)
for(var i=0;i<n;i++)e[i]=r.call(t,i)
return e}
j.random=function(n,r){if(r==null){r=n
n=0}return n+Math.floor(Math.random()*(r-n+1))}
var S={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}}
S.unescape=j.invert(S.escape)
var M={escape:new RegExp("["+j.keys(S.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(S.unescape).join("|")+")","g")}
j.each(["escape","unescape"],function(n){j[n]=function(r){if(r==null)return""
return(""+r).replace(M[n],function(r){return S[n][r]})}})
j.result=function(n,r){if(n==null)return null
var t=n[r]
return j.isFunction(t)?t.call(n):t}
j.mixin=function(n){A(j.functions(n),function(r){var t=j[r]=n[r]
j.prototype[r]=function(){var n=[this._wrapped]
a.apply(n,arguments)
return D.call(this,t.apply(j,n))}})}
var N=0
j.uniqueId=function(n){var r=++N+""
return n?n+r:r}
j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g}
var T=/(.)^/
var q={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"}
var B=/\\|'|\r|\n|\t|\u2028|\u2029/g
j.template=function(n,r,t){var e
t=j.defaults({},t,j.templateSettings)
var i=new RegExp([(t.escape||T).source,(t.interpolate||T).source,(t.evaluate||T).source].join("|")+"|$","g")
var u=0
var a="__p+='"
n.replace(i,function(r,t,e,i,f){a+=n.slice(u,f).replace(B,function(n){return"\\"+q[n]})
if(t){a+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'"}if(e){a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"}if(i){a+="';\n"+i+"\n__p+='"}u=f+r.length
return r})
a+="';\n"
if(!t.variable)a="with(obj||{}){\n"+a+"}\n"
a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n"
try{e=new Function(t.variable||"obj","_",a)}catch(f){f.source=a
throw f}if(r)return e(r,j)
var l=function(n){return e.call(this,n,j)}
l.source="function("+(t.variable||"obj")+"){\n"+a+"}"
return l}
j.chain=function(n){return j(n).chain()}
var D=function(n){return this._chain?j(n).chain():n}
j.mixin(j)
A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=e[n]
j.prototype[n]=function(){var t=this._wrapped
r.apply(t,arguments)
if((n=="shift"||n=="splice")&&t.length===0)delete t[0]
return D.call(this,t)}})
A(["concat","join","slice"],function(n){var r=e[n]
j.prototype[n]=function(){return D.call(this,r.apply(this._wrapped,arguments))}})
j.extend(j.prototype,{chain:function(){this._chain=true
return this},value:function(){return this._wrapped}})}).call(this)
KAdefine("third_party/javascript-khansrc/underscore/underscore.js", function(require, requireWithVars, module, exports) {
    module.exports = _;
});
KAdefine("javascript/shared-package/packageloader.js", function(require, requireWithVars, module, exports) {
(function(){var e=false
function t(a,n,r){var i=this
this.files=[]
this.progress=0
this.lastProgress=0
this.downloadStarted=false
this.evaluationRequested=false
this.packageName=a
_.each(n,function(e){i.files.push({filename:e,content:null,evaled:false})})
this.startDownload=function(){if(i.downloadStarted){return}i.downloadStarted=true
_.each(i.files,function(e){$.ajax({type:"GET",url:e.filename,data:null,success:function(t){i.finishDownload(e,t)},error:function(e,t,a){r.getDeferred().fail()},dataType:"html"})})}
this.finishDownload=function(t,a){if(e){KAConsole.log("Package "+i.packageName+" downloaded "+t.filename)}t.content=a
i.progress++
r.getDeferred().notify(i.progress/(2*i.files.length))
i.lastProgress=i.progress
if(i.evaluationRequested){i._evaluate()}}
this.evaluateWhenReady=function(){if(i.evaluationRequested){return}i.evaluationRequested=true
if(!i.downloadStarted){i.startDownload()
return}i._evaluate()}
this._evaluate=function(){var t=false
_.each(i.files,function(e){if(t){return}if(e.content){if(!e.evaled){o(e,i.packageName)}}else{t=true}})
if(t){if(i.progress!==i.lastProgress){r.getDeferred().notify(i.progress/(2*i.files.length))
i.lastProgress=i.progress}}else{var a=true
try{r.getDeferred().resolve(r.toExport)
a=false}finally{if(a){KAConsole.log("Listener failed on load of "+this.packageName)}}if(e){KAConsole.log("Package "+i.packageName+" evaluated.")}}}
function o(a,n){var r
var o=a.filename.slice(a.filename.lastIndexOf(".")+1)
r=t.Formats[o](a,n)
if(e){KAConsole.log("Package "+n+" evaled "+a.filename)}a.evaled=true
i.progress++
return r}}(function(){t._getHead=function(){return document.getElementsByTagName("head")[0]||document.documentElement}
var e
t._qualifyUrl=function(t){if(!e){e=document.createElement("a")}e.href=t
return e.href}
function a(e){var t=e.split("/")
var a=t.pop().replace(".","_")
var n=t.pop().replace("-package","")
return n+"_"+a}t.Formats={js:function(e){var a=t._qualifyUrl(e.filename)
$.globalEval(e.content+"\n//# sourceURL="+a+"\n")},css:function(e){var n=a(e.filename)
var r=document.getElementById(n)
if(!r){r=document.createElement("style")
r.id=n
r.setAttribute("data-href",e.filename)
t._getHead().appendChild(r)}if(r.styleSheet){try{r.styleSheet.cssText=e.content}catch(i){throw new Error("Couldn't reassign styleSheet.cssText.")}}else{(function(e){if(r.childNodes.length>0){if(r.firstChild.nodeValue!==e.nodeValue){r.replaceChild(e,r.firstChild)}}else{r.appendChild(e)}})(document.createTextNode(e.content))}}}})()
window.PackageManager=_.extend(window.PackageManager||{},{_packages:{},_getPackage:function(e){if(!this._packages[e]){this._packages[e]={dependencies:[],toExport:{},_deferred:null,getDeferred:function(){if(this._deferred===null){this._deferred=new $.Deferred}return this._deferred}}}return this._packages[e]},setLoadedAndExport:function(e,t){this.define(e,t)
this.setLoaded(e)},setLoaded:function(){_.each(arguments,function(e){var t=this._getPackage(e)
t.getDeferred().resolve(t.toExport)},this)},define:function(e,t){_.extend(this._getPackage(e).toExport,t)},registerDynamic:function(a,n){var r=a.name
var i=this._getPackage(r)
if(!i.loader){i.loader=n||new t(r,a.files,i)
i.dependencies=a.dependencies||[]}if(e){KAConsole.log("Package "+r+" registered.")}},registerManifests:function(e){var t=this
_.each(e,function(e,a){_.each(e,function(e){t.registerDynamic(e)})})},precache:function(e,t){var a=this._getPackage(e)
if(a.getDeferred().state()==="resolved"){return}if(!a.loader){throw new Error("Cannot dynamically load '"+e+"' without it first being registered.")}if(a.loader.downloadStarted){return}_.each(a.dependencies,function(e){PackageManager.precache(e,t)})
if(t){_.delay(_.bind(a.loader.startDownload,a.loader),t)}else{a.loader.startDownload()}},require:function(){return $.when.apply(this,_.map(arguments,function(e){var t=this._getPackage(e)
if(t.getDeferred().state()!=="resolved"){this.precache(e)
this.require.apply(this,t.dependencies).then(function(){t.loader.evaluateWhenReady()})}return t.getDeferred()},this))},whenLoaded:function(e){return this._getPackage(e).getDeferred()},getCurrentPackage:function(e){return this._getPackage(e).toExport},isLoaded:function(e){return this._getPackage(e).getDeferred().state()==="resolved"},PackageLoader:t})
if(PackageManager._q){PackageManager.setLoaded.apply(PackageManager,PackageManager._q)
delete PackageManager._q}})()
});
(function(t,e){var r=Array.prototype,n=Object.prototype,i=r.slice,s=n.hasOwnProperty,a=r.forEach,l={}
var o={forEach:function(t,e,r){var n,i,o
if(t===null){return}if(a&&t.forEach===a){t.forEach(e,r)}else if(t.length===+t.length){for(n=0,i=t.length;n<i;n++){if(n in t&&e.call(r,t[n],n,t)===l){return}}}else{for(o in t){if(s.call(t,o)){if(e.call(r,t[o],o,t)===l){return}}}}},extend:function(t){this.forEach(i.call(arguments,1),function(e){for(var r in e){t[r]=e[r]}})
return t}}
var h=function(t){this.defaults={locale_data:{messages:{"":{domain:"messages",lang:"en",plural_forms:"nplurals=2; plural=(n != 1);"}}},domain:"messages"}
this.options=o.extend({},this.defaults,t)
this.textdomain(this.options.domain)
if(t.domain&&!this.options.locale_data[this.options.domain]){throw new Error("Text domain set to non-existent domain: `"+t.domain+"`")}}
h.context_delimiter=String.fromCharCode(4)
function u(t){return h.PF.compile(t||"nplurals=2; plural=(n != 1);")}function c(t,e){this._key=t
this._i18n=e}o.extend(c.prototype,{onDomain:function(t){this._domain=t
return this},withContext:function(t){this._context=t
return this},ifPlural:function(t,e){this._val=t
this._pkey=e
return this},fetch:function(t){if({}.toString.call(t)!="[object Array]"){t=[].slice.call(arguments)}return(t&&t.length?h.sprintf:function(t){return t})(this._i18n.dcnpgettext(this._domain,this._context,this._key,this._pkey,this._val),t)}})
o.extend(h.prototype,{translate:function(t){return new c(t,this)},textdomain:function(t){if(!t){return this._textdomain}this._textdomain=t},gettext:function(t){return this.dcnpgettext.call(this,e,e,t)},dgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},dcgettext:function(t,r){return this.dcnpgettext.call(this,t,e,r)},ngettext:function(t,r,n){return this.dcnpgettext.call(this,e,e,t,r,n)},dngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcngettext:function(t,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},pgettext:function(t,r){return this.dcnpgettext.call(this,e,t,r)},dpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},dcpgettext:function(t,e,r){return this.dcnpgettext.call(this,t,e,r)},npgettext:function(t,r,n,i){return this.dcnpgettext.call(this,e,t,r,n,i)},dnpgettext:function(t,e,r,n,i){return this.dcnpgettext.call(this,t,e,r,n,i)},dcnpgettext:function(t,e,r,n,i){n=n||r
t=t||this._textdomain
i=typeof i=="undefined"?1:i
var s
if(!this.options){s=new h
return s.dcnpgettext.call(s,undefined,undefined,r,n,i)}if(!this.options.locale_data){throw new Error("No locale data provided.")}if(!this.options.locale_data[t]){throw new Error("Domain `"+t+"` was not found.")}if(!this.options.locale_data[t][""]){throw new Error("No locale meta information provided.")}if(!r){throw new Error("No translation key found.")}if(typeof i!="number"){i=parseInt(i,10)
if(isNaN(i)){throw new Error("The number that was passed in is not a number.")}}var a=e?e+h.context_delimiter+r:r,l=this.options.locale_data,o=l[t],c=o[""].plural_forms||(l.messages||this.defaults.locale_data.messages)[""].plural_forms,f=u(c)(i)+1,p,d
if(!o){throw new Error("No domain named `"+t+"` could be found.")}p=o[a]
if(!p||f>=p.length){if(this.options.missing_key_callback){this.options.missing_key_callback(a)}d=[null,r,n]
return d[u(c)(i)+1]}d=p[f]
if(!d){d=[null,r,n]
return d[u(c)(i)+1]}return d}})
var f=function(){function t(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}function e(t,e){for(var r=[];e>0;r[--e]=t){}return r.join("")}var r=function(){if(!r.cache.hasOwnProperty(arguments[0])){r.cache[arguments[0]]=r.parse(arguments[0])}return r.format.call(null,r.cache[arguments[0]],arguments)}
r.format=function(r,n){var i=1,s=r.length,a="",l,o=[],h,u,c,p,d,y
for(h=0;h<s;h++){a=t(r[h])
if(a==="string"){o.push(r[h])}else if(a==="array"){c=r[h]
if(c[2]){l=n[i]
for(u=0;u<c[2].length;u++){if(!l.hasOwnProperty(c[2][u])){throw f('[sprintf] property "%s" does not exist',c[2][u])}l=l[c[2][u]]}}else if(c[1]){l=n[c[1]]}else{l=n[i++]}if(/[^s]/.test(c[8])&&t(l)!="number"){throw f("[sprintf] expecting number but found %s",t(l))}if(typeof l=="undefined"||l===null){l=""}switch(c[8]){case"b":l=l.toString(2)
break
case"c":l=String.fromCharCode(l)
break
case"d":l=parseInt(l,10)
break
case"e":l=c[7]?l.toExponential(c[7]):l.toExponential()
break
case"f":l=c[7]?parseFloat(l).toFixed(c[7]):parseFloat(l)
break
case"o":l=l.toString(8)
break
case"s":l=(l=String(l))&&c[7]?l.substring(0,c[7]):l
break
case"u":l=Math.abs(l)
break
case"x":l=l.toString(16)
break
case"X":l=l.toString(16).toUpperCase()
break}l=/[def]/.test(c[8])&&c[3]&&l>=0?"+"+l:l
d=c[4]?c[4]=="0"?"0":c[4].charAt(1):" "
y=c[6]-String(l).length
p=c[6]?e(d,y):""
o.push(c[5]?l+p:p+l)}}return o.join("")}
r.cache={}
r.parse=function(t){var e=t,r=[],n=[],i=0
while(e){if((r=/^[^\x25]+/.exec(e))!==null){n.push(r[0])}else if((r=/^\x25{2}/.exec(e))!==null){n.push("%")}else if((r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))!==null){if(r[2]){i|=1
var s=[],a=r[2],l=[]
if((l=/^([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])
while((a=a.substring(l[0].length))!==""){if((l=/^\.([a-z_][a-z_\d]*)/i.exec(a))!==null){s.push(l[1])}else if((l=/^\[(\d+)\]/.exec(a))!==null){s.push(l[1])}else{throw"[sprintf] huh?"}}}else{throw"[sprintf] huh?"}r[2]=s}else{i|=2}if(i===3){throw"[sprintf] mixing positional and named placeholders is not (yet) supported"}n.push(r)}else{throw"[sprintf] huh?"}e=e.substring(r[0].length)}return n}
return r}()
var p=function(t,e){e.unshift(t)
return f.apply(null,e)}
h.parse_plural=function(t,e){t=t.replace(/n/g,e)
return h.parse_expression(t)}
h.sprintf=function(t,e){if({}.toString.call(e)=="[object Array]"){return p(t,[].slice.call(e))}return f.apply(this,[].slice.call(arguments))}
h.prototype.sprintf=function(){return h.sprintf.apply(this,arguments)}
h.PF={}
h.PF.parse=function(t){var e=h.PF.extractPluralExpr(t)
return h.PF.parser.parse.call(h.PF.parser,e)}
h.PF.compile=function(t){function e(t){return t===true?1:t?t:0}var r=h.PF.parse(t)
return function(t){return e(h.PF.interpreter(r)(t))}}
h.PF.interpreter=function(t){return function(e){var r
switch(t.type){case"GROUP":return h.PF.interpreter(t.expr)(e)
case"TERNARY":if(h.PF.interpreter(t.expr)(e)){return h.PF.interpreter(t.truthy)(e)}return h.PF.interpreter(t.falsey)(e)
case"OR":return h.PF.interpreter(t.left)(e)||h.PF.interpreter(t.right)(e)
case"AND":return h.PF.interpreter(t.left)(e)&&h.PF.interpreter(t.right)(e)
case"LT":return h.PF.interpreter(t.left)(e)<h.PF.interpreter(t.right)(e)
case"GT":return h.PF.interpreter(t.left)(e)>h.PF.interpreter(t.right)(e)
case"LTE":return h.PF.interpreter(t.left)(e)<=h.PF.interpreter(t.right)(e)
case"GTE":return h.PF.interpreter(t.left)(e)>=h.PF.interpreter(t.right)(e)
case"EQ":return h.PF.interpreter(t.left)(e)==h.PF.interpreter(t.right)(e)
case"NEQ":return h.PF.interpreter(t.left)(e)!=h.PF.interpreter(t.right)(e)
case"MOD":return h.PF.interpreter(t.left)(e)%h.PF.interpreter(t.right)(e)
case"VAR":return e
case"NUM":return t.val
default:throw new Error("Invalid Token found.")}}}
h.PF.extractPluralExpr=function(t){t=t.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
if(!/;\s*$/.test(t)){t=t.concat(";")}var e=/nplurals\=(\d+);/,r=/plural\=(.*);/,n=t.match(e),i={},s
if(n.length>1){i.nplurals=n[1]}else{throw new Error("nplurals not found in plural_forms string: "+t)}t=t.replace(e,"")
s=t.match(r)
if(!(s&&s.length>1)){throw new Error("`plural` expression not found: "+t)}return s[1]}
h.PF.parser=function(){var t={trace:function r(){},yy:{},symbols_:{error:2,expressions:3,e:4,EOF:5,"?":6,":":7,"||":8,"&&":9,"<":10,"<=":11,">":12,">=":13,"!=":14,"==":15,"%":16,"(":17,")":18,n:19,NUMBER:20,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",6:"?",7:":",8:"||",9:"&&",10:"<",11:"<=",12:">",13:">=",14:"!=",15:"==",16:"%",17:"(",18:")",19:"n",20:"NUMBER"},productions_:[0,[3,2],[4,5],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1]],performAction:function n(t,e,r,i,s,a,l){var o=a.length-1
switch(s){case 1:return{type:"GROUP",expr:a[o-1]}
break
case 2:this.$={type:"TERNARY",expr:a[o-4],truthy:a[o-2],falsey:a[o]}
break
case 3:this.$={type:"OR",left:a[o-2],right:a[o]}
break
case 4:this.$={type:"AND",left:a[o-2],right:a[o]}
break
case 5:this.$={type:"LT",left:a[o-2],right:a[o]}
break
case 6:this.$={type:"LTE",left:a[o-2],right:a[o]}
break
case 7:this.$={type:"GT",left:a[o-2],right:a[o]}
break
case 8:this.$={type:"GTE",left:a[o-2],right:a[o]}
break
case 9:this.$={type:"NEQ",left:a[o-2],right:a[o]}
break
case 10:this.$={type:"EQ",left:a[o-2],right:a[o]}
break
case 11:this.$={type:"MOD",left:a[o-2],right:a[o]}
break
case 12:this.$={type:"GROUP",expr:a[o-1]}
break
case 13:this.$={type:"VAR"}
break
case 14:this.$={type:"NUM",val:Number(t)}
break}},table:[{3:1,4:2,17:[1,3],19:[1,4],20:[1,5]},{1:[3]},{5:[1,6],6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{4:17,17:[1,3],19:[1,4],20:[1,5]},{5:[2,13],6:[2,13],7:[2,13],8:[2,13],9:[2,13],10:[2,13],11:[2,13],12:[2,13],13:[2,13],14:[2,13],15:[2,13],16:[2,13],18:[2,13]},{5:[2,14],6:[2,14],7:[2,14],8:[2,14],9:[2,14],10:[2,14],11:[2,14],12:[2,14],13:[2,14],14:[2,14],15:[2,14],16:[2,14],18:[2,14]},{1:[2,1]},{4:18,17:[1,3],19:[1,4],20:[1,5]},{4:19,17:[1,3],19:[1,4],20:[1,5]},{4:20,17:[1,3],19:[1,4],20:[1,5]},{4:21,17:[1,3],19:[1,4],20:[1,5]},{4:22,17:[1,3],19:[1,4],20:[1,5]},{4:23,17:[1,3],19:[1,4],20:[1,5]},{4:24,17:[1,3],19:[1,4],20:[1,5]},{4:25,17:[1,3],19:[1,4],20:[1,5]},{4:26,17:[1,3],19:[1,4],20:[1,5]},{4:27,17:[1,3],19:[1,4],20:[1,5]},{6:[1,7],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[1,28]},{6:[1,7],7:[1,29],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16]},{5:[2,3],6:[2,3],7:[2,3],8:[2,3],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,3]},{5:[2,4],6:[2,4],7:[2,4],8:[2,4],9:[2,4],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,4]},{5:[2,5],6:[2,5],7:[2,5],8:[2,5],9:[2,5],10:[2,5],11:[2,5],12:[2,5],13:[2,5],14:[2,5],15:[2,5],16:[1,16],18:[2,5]},{5:[2,6],6:[2,6],7:[2,6],8:[2,6],9:[2,6],10:[2,6],11:[2,6],12:[2,6],13:[2,6],14:[2,6],15:[2,6],16:[1,16],18:[2,6]},{5:[2,7],6:[2,7],7:[2,7],8:[2,7],9:[2,7],10:[2,7],11:[2,7],12:[2,7],13:[2,7],14:[2,7],15:[2,7],16:[1,16],18:[2,7]},{5:[2,8],6:[2,8],7:[2,8],8:[2,8],9:[2,8],10:[2,8],11:[2,8],12:[2,8],13:[2,8],14:[2,8],15:[2,8],16:[1,16],18:[2,8]},{5:[2,9],6:[2,9],7:[2,9],8:[2,9],9:[2,9],10:[2,9],11:[2,9],12:[2,9],13:[2,9],14:[2,9],15:[2,9],16:[1,16],18:[2,9]},{5:[2,10],6:[2,10],7:[2,10],8:[2,10],9:[2,10],10:[2,10],11:[2,10],12:[2,10],13:[2,10],14:[2,10],15:[2,10],16:[1,16],18:[2,10]},{5:[2,11],6:[2,11],7:[2,11],8:[2,11],9:[2,11],10:[2,11],11:[2,11],12:[2,11],13:[2,11],14:[2,11],15:[2,11],16:[2,11],18:[2,11]},{5:[2,12],6:[2,12],7:[2,12],8:[2,12],9:[2,12],10:[2,12],11:[2,12],12:[2,12],13:[2,12],14:[2,12],15:[2,12],16:[2,12],18:[2,12]},{4:30,17:[1,3],19:[1,4],20:[1,5]},{5:[2,2],6:[1,7],7:[2,2],8:[1,8],9:[1,9],10:[1,10],11:[1,11],12:[1,12],13:[1,13],14:[1,14],15:[1,15],16:[1,16],18:[2,2]}],defaultActions:{6:[2,1]},parseError:function i(t,e){throw new Error(t)},parse:function s(t){var e=this,r=[0],n=[null],i=[],s=this.table,a="",l=0,o=0,h=0,u=2,c=1
this.lexer.setInput(t)
this.lexer.yy=this.yy
this.yy.lexer=this.lexer
if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={}
var f=this.lexer.yylloc
i.push(f)
if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError
function p(t){r.length=r.length-2*t
n.length=n.length-t
i.length=i.length-t}function d(){var t
t=e.lexer.lex()||1
if(typeof t!=="number"){t=e.symbols_[t]||t}return t}var y,g,x,m,_,b,k={},w,E,P,v
while(true){x=r[r.length-1]
if(this.defaultActions[x]){m=this.defaultActions[x]}else{if(y==null)y=d()
m=s[x]&&s[x][y]}t:if(typeof m==="undefined"||!m.length||!m[0]){if(!h){v=[]
for(w in s[x])if(this.terminals_[w]&&w>2){v.push("'"+this.terminals_[w]+"'")}var F=""
if(this.lexer.showPosition){F="Parse error on line "+(l+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+this.terminals_[y]+"'"}else{F="Parse error on line "+(l+1)+": Unexpected "+(y==1?"end of input":"'"+(this.terminals_[y]||y)+"'")}this.parseError(F,{text:this.lexer.match,token:this.terminals_[y]||y,line:this.lexer.yylineno,loc:f,expected:v})}if(h==3){if(y==c){throw new Error(F||"Parsing halted.")}o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
y=d()}while(1){if(u.toString()in s[x]){break}if(x==0){throw new Error(F||"Parsing halted.")}p(1)
x=r[r.length-1]}g=y
y=u
x=r[r.length-1]
m=s[x]&&s[x][u]
h=3}if(m[0]instanceof Array&&m.length>1){throw new Error("Parse Error: multiple actions possible at state: "+x+", token: "+y)}switch(m[0]){case 1:r.push(y)
n.push(this.lexer.yytext)
i.push(this.lexer.yylloc)
r.push(m[1])
y=null
if(!g){o=this.lexer.yyleng
a=this.lexer.yytext
l=this.lexer.yylineno
f=this.lexer.yylloc
if(h>0)h--}else{y=g
g=null}break
case 2:E=this.productions_[m[1]][1]
k.$=n[n.length-E]
k._$={first_line:i[i.length-(E||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(E||1)].first_column,last_column:i[i.length-1].last_column}
b=this.performAction.call(k,a,o,l,this.yy,m[1],n,i)
if(typeof b!=="undefined"){return b}if(E){r=r.slice(0,-1*E*2)
n=n.slice(0,-1*E)
i=i.slice(0,-1*E)}r.push(this.productions_[m[1]][0])
n.push(k.$)
i.push(k._$)
P=s[r[r.length-2]][r[r.length-1]]
r.push(P)
break
case 3:return true}}return true}}
var e=function(){var t={EOF:1,parseError:function e(t,r){if(this.yy.parseError){this.yy.parseError(t,r)}else{throw new Error(t)}},setInput:function(t){this._input=t
this._more=this._less=this.done=false
this.yylineno=this.yyleng=0
this.yytext=this.matched=this.match=""
this.conditionStack=["INITIAL"]
this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0}
return this},input:function(){var t=this._input[0]
this.yytext+=t
this.yyleng++
this.match+=t
this.matched+=t
var e=t.match(/\n/)
if(e)this.yylineno++
this._input=this._input.slice(1)
return t},unput:function(t){this._input=t+this._input
return this},more:function(){this._more=true
return this},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length)
return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match
if(t.length<20){t+=this._input.substr(0,20-t.length)}return(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput()
var e=new Array(t.length+1).join("-")
return t+this.upcomingInput()+"\n"+e+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true
var t,e,r,n
if(!this._more){this.yytext=""
this.match=""}var i=this._currentRules()
for(var s=0;s<i.length;s++){e=this._input.match(this.rules[i[s]])
if(e){n=e[0].match(/\n.*/g)
if(n)this.yylineno+=n.length
this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-1:this.yylloc.last_column+e[0].length}
this.yytext+=e[0]
this.match+=e[0]
this.matches=e
this.yyleng=this.yytext.length
this._more=false
this._input=this._input.slice(e[0].length)
this.matched+=e[0]
t=this.performAction.call(this,this.yy,this,i[s],this.conditionStack[this.conditionStack.length-1])
if(t)return t
else return}}if(this._input===""){return this.EOF}else{this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function r(){var t=this.next()
if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function n(t){this.conditionStack.push(t)},popState:function i(){return this.conditionStack.pop()},_currentRules:function s(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function a(t){this.begin(t)}}
t.performAction=function l(t,e,r,n){var i=n
switch(r){case 0:break
case 1:return 20
break
case 2:return 19
break
case 3:return 8
break
case 4:return 9
break
case 5:return 6
break
case 6:return 7
break
case 7:return 11
break
case 8:return 13
break
case 9:return 10
break
case 10:return 12
break
case 11:return 14
break
case 12:return 15
break
case 13:return 16
break
case 14:return 17
break
case 15:return 18
break
case 16:return 5
break
case 17:return"INVALID"
break}}
t.rules=[/^\s+/,/^[0-9]+(\.[0-9]+)?\b/,/^n\b/,/^\|\|/,/^&&/,/^\?/,/^:/,/^<=/,/^>=/,/^</,/^>/,/^!=/,/^==/,/^%/,/^\(/,/^\)/,/^$/,/^./]
t.conditions={INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],inclusive:true}}
return t}()
t.lexer=e
return t}()
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=h}exports.Jed=h}else{if(typeof define==="function"&&define.amd){define("jed",function(){return h})}t["Jed"]=h}})(this)
KAdefine("third_party/javascript-khansrc/jed/jed.js", function(require, requireWithVars, module, exports) {
    module.exports = Jed;
});
KAdefine("javascript/shared-package/i18n.js", function(require, requireWithVars, module, exports) {
(function(){var n="en"
var l={af:"nplurals=2; plural=(n != 1)",ar:"nplurals=6; plural= n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5",az:"nplurals=2; plural=(n != 1)",bg:"nplurals=2; plural=(n != 1)",ca:"nplurals=2; plural=(n != 1)",cs:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",da:"nplurals=2; plural=(n != 1)",de:"nplurals=2; plural=(n != 1)",el:"nplurals=2; plural=(n != 1)",en:"nplurals=2; plural=(n != 1)","es-ES":"nplurals=2; plural=(n != 1)",fi:"nplurals=2; plural=(n != 1)",fr:"nplurals=2; plural=(n > 1)",he:"nplurals=2; plural=(n != 1)",hi:"nplurals=2; plural=(n!=1)",hu:"nplurals=2; plural=(n != 1)",it:"nplurals=2; plural=(n != 1)",ja:"nplurals=1; plural=0",ko:"nplurals=1; plural=0",nl:"nplurals=2; plural=(n != 1)",no:"nplurals=2; plural=(n != 1)",pl:"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","pt-BR":"nplurals=2; plural=(n != 1)","pt-PT":"nplurals=2; plural=(n != 1)",ro:"nplurals=3; plural=(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)",ru:"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","si-LK":"nplurals=2; plural=(n != 1)",sk:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",sr:"nplurals=4; plural=n==1? 3 : n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","sv-SE":"nplurals=2; plural=(n != 1) ",tr:"nplurals=1; plural=0",uk:"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","ur-PK":"nplurals=2; plural=(n != 1)",vi:"nplurals=1; plural=0",xh:"nplurals=2; plural=(n != 1)","zh-CN":"nplurals=1; plural=0","zh-TW":"nplurals=1; plural=0"}
var r=function(r){return l[r]||l[n]}
var a=new Jed({})
a.options.locale_data={}
var u=function(n,l){l=l||{}
var r=n.split(/%\(([\w_]+)\)s/g)
for(var a=1;a<r.length;a+=2){var u=l[r[a]]
r[a]=_.isUndefined(u)?"%("+r[a]+")s":u}return r}
jQuery._=function(n,l){if(typeof n==="object"&&n.messages){n=n.messages[0]}return u(n,l).join("")}
window.$_=function(n,l){if(arguments.length!==2||!_.isString(l)){return"<$_> must have exactly one child, which must be a string"}return u(l,n)}
jQuery.ngettext=function(l,u,p,s){var e=l
var t=e.lang||n
if(!a.options.locale_data[t]){a.options.locale_data[t]={"":{domain:t,lang:t,plural_forms:r(t)}}}if(typeof e==="object"){s=p
p=u
l=e.messages[0]
a.options.locale_data[t][l]=[null].concat(e.messages)}s=s||{}
s.num=s.num||p
return jQuery._(a.dngettext(t,l,u,p),s)}
jQuery.ngetpos=function(n,l){l=l||"en"
return Jed.PF.compile(r(l))(n)}
jQuery.isSingular=function(n,l){return jQuery.ngetpos(n,l)===0}
jQuery.i18nDoNotTranslate=jQuery._
a.handlebars_underscore=function(n){return n.fn(this)}
a.handlebars_do_not_translate=function(n){return n.fn(this)}
a.handlebars_ngettext=function(n,l,r,a){if(typeof l!=="string"){a=l
l="en"
r=0}this.num=this.num||n
return jQuery.ngetpos(n)===r?a.fn(this):a.inverse(this)}
window.i18n=a})()
});
(function(){var t={am_pm:["AM","PM"],day_name:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],era:["BC","AD"],era_name:["Before Christ","Anno Domini"],month_name:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],order_full:"MDY",order_long:"MDY",order_medium:"MDY",order_short:"MDY"}
var e={decimal_separator:".",grouping_separator:",",minus:"-"}
var n={SHORT_PADDED_CENTURY:function(t){if(t){return(t.getMonth()+101+"").substring(1)+"/"+(t.getDate()+101+"").substring(1)+"/"+t.getFullYear()}},SHORT:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()+"/"+(t.getFullYear()+"").substring(2)}},SHORT_NOYEAR:function(t){if(t){return t.getMonth()+1+"/"+t.getDate()}},SHORT_NODAY:function(t){if(t){return t.getMonth()+1+" "+(t.getFullYear()+"").substring(2)}},MEDIUM:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},MEDIUM_NOYEAR:function(e){if(e){return t.month_short[e.getMonth()]+" "+e.getDate()}},MEDIUM_WEEKDAY_NOYEAR:function(e){if(e){return t.day_short[e.getDay()]+" "+t.month_short[e.getMonth()]+" "+e.getDate()}},LONG_NODAY:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getFullYear()}},LONG:function(e){if(e){return t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}},FULL:function(e){if(e){return t.day_name[e.getDay()]+","+" "+t.month_name[e.getMonth()]+" "+e.getDate()+","+" "+e.getFullYear()}}}
window.icu=window.icu||new Object
var r=window.icu
r.getCountry=function(){return""}
r.getCountryName=function(){return""}
r.getDateFormat=function(t){var e={}
e.format=n[t]
return e}
r.getDateFormats=function(){return n}
r.getDateFormatSymbols=function(){return t}
r.getDecimalFormat=function(t){var n={}
n.format=function(n){var r=n<0?Math.abs(n).toFixed(t):n.toFixed(t)
var a=r.split(".")
s=a[0]
var o=a[1]
var u=/(\d+)(\d{3})/
while(u.test(s)){s=s.replace(u,"$1"+e["grouping_separator"]+"$2")}return(n<0?e["minus"]:"")+s+e["decimal_separator"]+o}
return n}
r.getDecimalFormatSymbols=function(){return e}
r.getIntegerFormat=function(){var t={}
t.format=function(t){var n=t<0?Math.abs(t).toString():t.toString()
var r=/(\d+)(\d{3})/
while(r.test(n)){n=n.replace(r,"$1"+e["grouping_separator"]+"$2")}return t<0?e["minus"]+n:n}
return t}
r.getLanguage=function(){return"en"}
r.getLanguageName=function(){return"English"}
r.getLocale=function(){return"en"}
r.getLocaleName=function(){return"English"}})()
KAdefine("third_party/javascript-khansrc/localeplanet/icu.en.js", function(require, requireWithVars, module, exports) {
});
(function(e,t){"use strict"
if(typeof define==="function"&&define.amd){define(["exports"],t)}else if(typeof exports!=="undefined"){t(exports)}else{t(e.esprima={})}})(this,function(e){"use strict"
var t,r,n,a,i,o,c,u,l,s,f,p,m,d,y,h,S,k
t={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9}
r={}
r[t.BooleanLiteral]="Boolean"
r[t.EOF]="<end>"
r[t.Identifier]="Identifier"
r[t.Keyword]="Keyword"
r[t.NullLiteral]="Null"
r[t.NumericLiteral]="Numeric"
r[t.Punctuator]="Punctuator"
r[t.StringLiteral]="String"
r[t.RegularExpression]="RegularExpression"
n=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="]
a={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement"}
i={Data:1,Get:2,Set:4}
o={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictDuplicateProperty:"Duplicate data property in object literal not allowed in strict mode",AccessorDataProperty:"Object literal may not have data and accessor property with the same name",AccessorGetSet:"Object literal may not have multiple get/set accessors with the same name",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode"}
c={NonAsciiIdentifierStart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),NonAsciiIdentifierPart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")}
function g(e,t){if(!e){throw new Error("ASSERT: "+t)}}function v(e){return e>=48&&e<=57}function b(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function E(e){return"01234567".indexOf(e)>=0}function x(e){return e===32||e===9||e===11||e===12||e===160||e>=5760&&" ᠎             　﻿".indexOf(String.fromCharCode(e))>0}function w(e){return e===10||e===13||e===8232||e===8233}function I(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e===92||e>=128&&c.NonAsciiIdentifierStart.test(String.fromCharCode(e))}function C(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===92||e>=128&&c.NonAsciiIdentifierPart.test(String.fromCharCode(e))}function L(e){switch(e){case"class":case"enum":case"export":case"extends":case"import":case"super":return true
default:return false}}function A(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return true
default:return false}}function P(e){return e==="eval"||e==="arguments"}function N(e){if(s&&A(e)){return true}switch(e.length){case 2:return e==="if"||e==="in"||e==="do"
case 3:return e==="var"||e==="for"||e==="new"||e==="try"||e==="let"
case 4:return e==="this"||e==="else"||e==="case"||e==="void"||e==="with"||e==="enum"
case 5:return e==="while"||e==="break"||e==="catch"||e==="throw"||e==="const"||e==="yield"||e==="class"||e==="super"
case 6:return e==="return"||e==="typeof"||e==="delete"||e==="switch"||e==="export"||e==="import"
case 7:return e==="default"||e==="finally"||e==="extends"
case 8:return e==="function"||e==="continue"||e==="debugger"
case 10:return e==="instanceof"
default:return false}}function O(e,t,r,n,a){var i
g(typeof r==="number","Comment must have valid position")
if(S.lastCommentStart>=r){return}S.lastCommentStart=r
i={type:e,value:t}
if(k.range){i.range=[r,n]}if(k.loc){i.loc=a}k.comments.push(i)}function U(){var e,t,r,n
e=f-2
t={start:{line:p,column:f-m-2}}
while(f<d){r=l.charCodeAt(f);++f
if(w(r)){if(k.comments){n=l.slice(e+2,f-1)
t.end={line:p,column:f-m-1}
O("Line",n,e,f-1,t)}if(r===13&&l.charCodeAt(f)===10){++f}++p
m=f
return}}if(k.comments){n=l.slice(e+2,f)
t.end={line:p,column:f-m}
O("Line",n,e,f,t)}}function F(){var e,t,r,n
if(k.comments){e=f-2
t={start:{line:p,column:f-m-2}}}while(f<d){r=l.charCodeAt(f)
if(w(r)){if(r===13&&l.charCodeAt(f+1)===10){++f}++p;++f
m=f
if(f>=d){_({},o.UnexpectedToken,"ILLEGAL")}}else if(r===42){if(l.charCodeAt(f+1)===47){++f;++f
if(k.comments){n=l.slice(e+2,f-2)
t.end={line:p,column:f-m}
O("Block",n,e,f,t)}return}++f}else{++f}}_({},o.UnexpectedToken,"ILLEGAL")}function D(){var e
while(f<d){e=l.charCodeAt(f)
if(x(e)){++f}else if(w(e)){++f
if(e===13&&l.charCodeAt(f)===10){++f}++p
m=f}else if(e===47){e=l.charCodeAt(f+1)
if(e===47){++f;++f
U()}else if(e===42){++f;++f
F()}else{break}}else{break}}}function T(e){var t,r,n,a=0
r=e==="u"?4:2
for(t=0;t<r;++t){if(f<d&&b(l[f])){n=l[f++]
a=a*16+"0123456789abcdef".indexOf(n.toLowerCase())}else{return""}}return String.fromCharCode(a)}function B(){var e,t
e=l.charCodeAt(f++)
t=String.fromCharCode(e)
if(e===92){if(l.charCodeAt(f)!==117){_({},o.UnexpectedToken,"ILLEGAL")}++f
e=T("u")
if(!e||e==="\\"||!I(e.charCodeAt(0))){_({},o.UnexpectedToken,"ILLEGAL")}t=e}while(f<d){e=l.charCodeAt(f)
if(!C(e)){break}++f
t+=String.fromCharCode(e)
if(e===92){t=t.substr(0,t.length-1)
if(l.charCodeAt(f)!==117){_({},o.UnexpectedToken,"ILLEGAL")}++f
e=T("u")
if(!e||e==="\\"||!C(e.charCodeAt(0))){_({},o.UnexpectedToken,"ILLEGAL")}t+=e}}return t}function R(){var e,t
e=f++
while(f<d){t=l.charCodeAt(f)
if(t===92){f=e
return B()}if(C(t)){++f}else{break}}return l.slice(e,f)}function W(){var e,r,n
e=f
r=l.charCodeAt(f)===92?B():R()
if(r.length===1){n=t.Identifier}else if(N(r)){n=t.Keyword}else if(r==="null"){n=t.NullLiteral}else if(r==="true"||r==="false"){n=t.BooleanLiteral}else{n=t.Identifier}return{type:n,value:r,lineNumber:p,lineStart:m,range:[e,f]}}function j(){var e=f,r=l.charCodeAt(f),n,a=l[f],i,c,u
switch(r){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:++f
if(k.tokenize){if(r===40){k.openParenToken=k.tokens.length}else if(r===123){k.openCurlyToken=k.tokens.length}}return{type:t.Punctuator,value:String.fromCharCode(r),lineNumber:p,lineStart:m,range:[e,f]}
default:n=l.charCodeAt(f+1)
if(n===61){switch(r){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 94:case 124:f+=2
return{type:t.Punctuator,value:String.fromCharCode(r)+String.fromCharCode(n),lineNumber:p,lineStart:m,range:[e,f]}
case 33:case 61:f+=2
if(l.charCodeAt(f)===61){++f}return{type:t.Punctuator,value:l.slice(e,f),lineNumber:p,lineStart:m,range:[e,f]}
default:break}}break}i=l[f+1]
c=l[f+2]
u=l[f+3]
if(a===">"&&i===">"&&c===">"){if(u==="="){f+=4
return{type:t.Punctuator,value:">>>=",lineNumber:p,lineStart:m,range:[e,f]}}}if(a===">"&&i===">"&&c===">"){f+=3
return{type:t.Punctuator,value:">>>",lineNumber:p,lineStart:m,range:[e,f]}}if(a==="<"&&i==="<"&&c==="="){f+=3
return{type:t.Punctuator,value:"<<=",lineNumber:p,lineStart:m,range:[e,f]}}if(a===">"&&i===">"&&c==="="){f+=3
return{type:t.Punctuator,value:">>=",lineNumber:p,lineStart:m,range:[e,f]}}if(a===i&&"+-<>&|".indexOf(a)>=0){f+=2
return{type:t.Punctuator,value:a+i,lineNumber:p,lineStart:m,range:[e,f]}}if("<>=!+-*%&|^/".indexOf(a)>=0){++f
return{type:t.Punctuator,value:a,lineNumber:p,lineStart:m,range:[e,f]}}_({},o.UnexpectedToken,"ILLEGAL")}function G(e){var r=""
while(f<d){if(!b(l[f])){break}r+=l[f++]}if(r.length===0){_({},o.UnexpectedToken,"ILLEGAL")}if(I(l.charCodeAt(f))){_({},o.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt("0x"+r,16),lineNumber:p,lineStart:m,range:[e,f]}}function K(e){var r="0"+l[f++]
while(f<d){if(!E(l[f])){break}r+=l[f++]}if(I(l.charCodeAt(f))||v(l.charCodeAt(f))){_({},o.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt(r,8),octal:true,lineNumber:p,lineStart:m,range:[e,f]}}function V(){var e,r,n
n=l[f]
g(v(n.charCodeAt(0))||n===".","Numeric literal must start with a decimal digit or a decimal point")
r=f
e=""
if(n!=="."){e=l[f++]
n=l[f]
if(e==="0"){if(n==="x"||n==="X"){++f
return G(r)}if(E(n)){return K(r)}if(n&&v(n.charCodeAt(0))){_({},o.UnexpectedToken,"ILLEGAL")}}while(v(l.charCodeAt(f))){e+=l[f++]}n=l[f]}if(n==="."){e+=l[f++]
while(v(l.charCodeAt(f))){e+=l[f++]}n=l[f]}if(n==="e"||n==="E"){e+=l[f++]
n=l[f]
if(n==="+"||n==="-"){e+=l[f++]}if(v(l.charCodeAt(f))){while(v(l.charCodeAt(f))){e+=l[f++]}}else{_({},o.UnexpectedToken,"ILLEGAL")}}if(I(l.charCodeAt(f))){_({},o.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseFloat(e),lineNumber:p,lineStart:m,range:[r,f]}}function M(){var e="",r,n,a,i,c,u,s=false
r=l[f]
g(r==="'"||r==='"',"String literal must starts with a quote")
n=f;++f
while(f<d){a=l[f++]
if(a===r){r=""
break}else if(a==="\\"){a=l[f++]
if(!a||!w(a.charCodeAt(0))){switch(a){case"n":e+="\n"
break
case"r":e+="\r"
break
case"t":e+="	"
break
case"u":case"x":u=f
c=T(a)
if(c){e+=c}else{f=u
e+=a}break
case"b":e+="\b"
break
case"f":e+="\f"
break
case"v":e+=""
break
default:if(E(a)){i="01234567".indexOf(a)
if(i!==0){s=true}if(f<d&&E(l[f])){s=true
i=i*8+"01234567".indexOf(l[f++])
if("0123".indexOf(a)>=0&&f<d&&E(l[f])){i=i*8+"01234567".indexOf(l[f++])}}e+=String.fromCharCode(i)}else{e+=a}break}}else{++p
if(a==="\r"&&l[f]==="\n"){++f}}}else if(w(a.charCodeAt(0))){break}else{e+=a}}if(r!==""){_({},o.UnexpectedToken,"ILLEGAL")}return{type:t.StringLiteral,value:e,octal:s,lineNumber:p,lineStart:m,range:[n,f]}}function H(){var e,r,n,a,i,c,u=false,s,y=false
h=null
D()
n=f
r=l[f]
g(r==="/","Regular expression literal must start with a slash")
e=l[f++]
while(f<d){r=l[f++]
e+=r
if(u){if(r==="]"){u=false}}else{if(r==="\\"){r=l[f++]
if(w(r.charCodeAt(0))){_({},o.UnterminatedRegExp)}e+=r}else if(r==="/"){y=true
break}else if(r==="["){u=true}else if(w(r.charCodeAt(0))){_({},o.UnterminatedRegExp)}}}if(!y){_({},o.UnterminatedRegExp)}a=e.substr(1,e.length-2)
i=""
while(f<d){r=l[f]
if(!C(r.charCodeAt(0))){break}++f
if(r==="\\"&&f<d){r=l[f]
if(r==="u"){++f
s=f
r=T("u")
if(r){i+=r
for(e+="\\u";s<f;++s){e+=l[s]}}else{f=s
i+="u"
e+="\\u"}}else{e+="\\"}}else{i+=r
e+=r}}try{c=new RegExp(a,i)}catch(S){_({},o.InvalidRegExp)}Y()
if(k.tokenize){return{type:t.RegularExpression,value:c,lineNumber:p,lineStart:m,range:[n,f]}}return{literal:e,value:c,range:[n,f]}}function q(){var e,t,r,n
D()
e=f
t={start:{line:p,column:f-m}}
r=H()
t.end={line:p,column:f-m}
if(!k.tokenize){if(k.tokens.length>0){n=k.tokens[k.tokens.length-1]
if(n.range[0]===e&&n.type==="Punctuator"){if(n.value==="/"||n.value==="/="){k.tokens.pop()}}}k.tokens.push({type:"RegularExpression",value:r.literal,range:[e,f],loc:t})}return r}function z(e){return e.type===t.Identifier||e.type===t.Keyword||e.type===t.BooleanLiteral||e.type===t.NullLiteral}function $(){var e,t
e=k.tokens[k.tokens.length-1]
if(!e){return q()}if(e.type==="Punctuator"){if(e.value===")"){t=k.tokens[k.openParenToken-1]
if(t&&t.type==="Keyword"&&(t.value==="if"||t.value==="while"||t.value==="for"||t.value==="with")){return q()}return j()}if(e.value==="}"){if(k.tokens[k.openCurlyToken-3]&&k.tokens[k.openCurlyToken-3].type==="Keyword"){t=k.tokens[k.openCurlyToken-4]
if(!t){return j()}}else if(k.tokens[k.openCurlyToken-4]&&k.tokens[k.openCurlyToken-4].type==="Keyword"){t=k.tokens[k.openCurlyToken-5]
if(!t){return q()}}else{return j()}if(n.indexOf(t.value)>=0){return j()}return q()}return q()}if(e.type==="Keyword"){return q()}return j()}function X(){var e
D()
if(f>=d){return{type:t.EOF,lineNumber:p,lineStart:m,range:[f,f]}}e=l.charCodeAt(f)
if(e===40||e===41||e===58){return j()}if(e===39||e===34){return M()}if(I(e)){return W()}if(e===46){if(v(l.charCodeAt(f+1))){return V()}return j()}if(v(e)){return V()}if(k.tokenize&&e===47){return $()}return j()}function J(){var e,n,a,i,o
D()
e=f
n={start:{line:p,column:f-m}}
a=X()
n.end={line:p,column:f-m}
if(a.type!==t.EOF){i=[a.range[0],a.range[1]]
o=l.slice(a.range[0],a.range[1])
k.tokens.push({type:r[a.type],value:o,range:i,loc:n})}return a}function Q(){var e
e=h
f=e.range[1]
p=e.lineNumber
m=e.lineStart
h=typeof k.tokens!=="undefined"?J():X()
f=e.range[1]
p=e.lineNumber
m=e.lineStart
return e}function Y(){var e,t,r
e=f
t=p
r=m
h=typeof k.tokens!=="undefined"?J():X()
f=e
p=t
m=r}u={name:"SyntaxTree",markStart:function(){if(k.loc){S.markerStack.push(f-m)
S.markerStack.push(p)}if(k.range){S.markerStack.push(f)}},markEnd:function(e){if(k.range){e.range=[S.markerStack.pop(),f]}if(k.loc){e.loc={start:{line:S.markerStack.pop(),column:S.markerStack.pop()},end:{line:p,column:f-m}}
this.postProcess(e)}return e},markEndIf:function(e){if(e.range||e.loc){if(k.loc){S.markerStack.pop()
S.markerStack.pop()}if(k.range){S.markerStack.pop()}}else{this.markEnd(e)}return e},postProcess:function(e){if(k.source){e.loc.source=k.source}return e},createArrayExpression:function(e){return{type:a.ArrayExpression,elements:e}},createAssignmentExpression:function(e,t,r){return{type:a.AssignmentExpression,operator:e,left:t,right:r}},createBinaryExpression:function(e,t,r){var n=e==="||"||e==="&&"?a.LogicalExpression:a.BinaryExpression
return{type:n,operator:e,left:t,right:r}},createBlockStatement:function(e){return{type:a.BlockStatement,body:e}},createBreakStatement:function(e){return{type:a.BreakStatement,label:e}},createCallExpression:function(e,t){return{type:a.CallExpression,callee:e,arguments:t}},createCatchClause:function(e,t){return{type:a.CatchClause,param:e,body:t}},createConditionalExpression:function(e,t,r){return{type:a.ConditionalExpression,test:e,consequent:t,alternate:r}},createContinueStatement:function(e){return{type:a.ContinueStatement,label:e}},createDebuggerStatement:function(){return{type:a.DebuggerStatement}},createDoWhileStatement:function(e,t){return{type:a.DoWhileStatement,body:e,test:t}},createEmptyStatement:function(){return{type:a.EmptyStatement}},createExpressionStatement:function(e){return{type:a.ExpressionStatement,expression:e}},createForStatement:function(e,t,r,n){return{type:a.ForStatement,init:e,test:t,update:r,body:n}},createForInStatement:function(e,t,r){return{type:a.ForInStatement,left:e,right:t,body:r,each:false}},createFunctionDeclaration:function(e,t,r,n){return{type:a.FunctionDeclaration,id:e,params:t,defaults:r,body:n,rest:null,generator:false,expression:false}},createFunctionExpression:function(e,t,r,n){return{type:a.FunctionExpression,id:e,params:t,defaults:r,body:n,rest:null,generator:false,expression:false}},createIdentifier:function(e){return{type:a.Identifier,name:e}},createIfStatement:function(e,t,r){return{type:a.IfStatement,test:e,consequent:t,alternate:r}},createLabeledStatement:function(e,t){return{type:a.LabeledStatement,label:e,body:t}},createLiteral:function(e){return{type:a.Literal,value:e.value,raw:l.slice(e.range[0],e.range[1])}},createMemberExpression:function(e,t,r){return{type:a.MemberExpression,computed:e==="[",object:t,property:r}},createNewExpression:function(e,t){return{type:a.NewExpression,callee:e,arguments:t}},createObjectExpression:function(e){return{type:a.ObjectExpression,properties:e}},createPostfixExpression:function(e,t){return{type:a.UpdateExpression,operator:e,argument:t,prefix:false}},createProgram:function(e){return{type:a.Program,body:e}},createProperty:function(e,t,r){return{type:a.Property,key:t,value:r,kind:e}},createReturnStatement:function(e){return{type:a.ReturnStatement,argument:e}},createSequenceExpression:function(e){return{type:a.SequenceExpression,expressions:e}},createSwitchCase:function(e,t){return{type:a.SwitchCase,test:e,consequent:t}},createSwitchStatement:function(e,t){return{type:a.SwitchStatement,discriminant:e,cases:t}},createThisExpression:function(){return{type:a.ThisExpression}},createThrowStatement:function(e){return{type:a.ThrowStatement,argument:e}},createTryStatement:function(e,t,r,n){return{type:a.TryStatement,block:e,guardedHandlers:t,handlers:r,finalizer:n}},createUnaryExpression:function(e,t){if(e==="++"||e==="--"){return{type:a.UpdateExpression,operator:e,argument:t,prefix:true}}return{type:a.UnaryExpression,operator:e,argument:t,prefix:true}},createVariableDeclaration:function(e,t){return{type:a.VariableDeclaration,declarations:e,kind:t}},createVariableDeclarator:function(e,t){return{type:a.VariableDeclarator,id:e,init:t}},createWhileStatement:function(e,t){return{type:a.WhileStatement,test:e,body:t}},createWithStatement:function(e,t){return{type:a.WithStatement,object:e,body:t}}}
function Z(){var e,t,r,n
e=f
t=p
r=m
D()
n=p!==t
f=e
p=t
m=r
return n}function _(e,t){var r,n=Array.prototype.slice.call(arguments,2),a=t.replace(/%(\d)/g,function(e,t){g(t<n.length,"Message reference must be in range")
return n[t]})
if(typeof e.lineNumber==="number"){r=new Error("Line "+e.lineNumber+": "+a)
r.index=e.range[0]
r.lineNumber=e.lineNumber
r.column=e.range[0]-m+1}else{r=new Error("Line "+p+": "+a)
r.index=f
r.lineNumber=p
r.column=f-m+1}r.description=a
throw r}function et(){try{_.apply(null,arguments)}catch(e){if(k.errors){k.errors.push(e)}else{throw e}}}function tt(e){if(e.type===t.EOF){_(e,o.UnexpectedEOS)}if(e.type===t.NumericLiteral){_(e,o.UnexpectedNumber)}if(e.type===t.StringLiteral){_(e,o.UnexpectedString)}if(e.type===t.Identifier){_(e,o.UnexpectedIdentifier)}if(e.type===t.Keyword){if(L(e.value)){_(e,o.UnexpectedReserved)}else if(s&&A(e.value)){et(e,o.StrictReservedWord)
return}_(e,o.UnexpectedToken,e.value)}_(e,o.UnexpectedToken,e.value)}function rt(e){var r=Q()
if(r.type!==t.Punctuator||r.value!==e){tt(r)}}function nt(e){var r=Q()
if(r.type!==t.Keyword||r.value!==e){tt(r)}}function at(e){return h.type===t.Punctuator&&h.value===e}function it(e){return h.type===t.Keyword&&h.value===e}function ot(){var e
if(h.type!==t.Punctuator){return false}e=h.value
return e==="="||e==="*="||e==="/="||e==="%="||e==="+="||e==="-="||e==="<<="||e===">>="||e===">>>="||e==="&="||e==="^="||e==="|="}function ct(){var e
if(l.charCodeAt(f)===59){Q()
return}e=p
D()
if(p!==e){return}if(at(";")){Q()
return}if(h.type!==t.EOF&&!at("}")){tt(h)}}function ut(e){return e.type===a.Identifier||e.type===a.MemberExpression}function lt(){var e=[]
rt("[")
while(!at("]")){if(at(",")){Q()
e.push(null)}else{e.push(At())
if(!at("]")){rt(",")}}}rt("]")
return y.createArrayExpression(e)}function st(e,t){var r,n
r=s
D()
y.markStart()
n=tr()
if(t&&s&&P(e[0].name)){et(t,o.StrictParamName)}s=r
return y.markEnd(y.createFunctionExpression(null,e,[],n))}function ft(){var e
D()
y.markStart()
e=Q()
if(e.type===t.StringLiteral||e.type===t.NumericLiteral){if(s&&e.octal){et(e,o.StrictOctalLiteral)}return y.markEnd(y.createLiteral(e))}return y.markEnd(y.createIdentifier(e.value))}function pt(){var e,r,n,a,i
e=h
D()
y.markStart()
if(e.type===t.Identifier){n=ft()
if(e.value==="get"&&!at(":")){r=ft()
rt("(")
rt(")")
a=st([])
return y.markEnd(y.createProperty("get",r,a))}if(e.value==="set"&&!at(":")){r=ft()
rt("(")
e=h
if(e.type!==t.Identifier){rt(")")
et(e,o.UnexpectedToken,e.value)
a=st([])}else{i=[Ut()]
rt(")")
a=st(i,e)}return y.markEnd(y.createProperty("set",r,a))}rt(":")
a=At()
return y.markEnd(y.createProperty("init",n,a))}if(e.type===t.EOF||e.type===t.Punctuator){tt(e)}else{r=ft()
rt(":")
a=At()
return y.markEnd(y.createProperty("init",r,a))}}function mt(){var e=[],t,r,n,c,u={},l=String
rt("{")
while(!at("}")){t=pt()
if(t.key.type===a.Identifier){r=t.key.name}else{r=l(t.key.value)}c=t.kind==="init"?i.Data:t.kind==="get"?i.Get:i.Set
n="$"+r
if(Object.prototype.hasOwnProperty.call(u,n)){if(u[n]===i.Data){if(s&&c===i.Data){et({},o.StrictDuplicateProperty)}else if(c!==i.Data){et({},o.AccessorDataProperty)}}else{if(c===i.Data){et({},o.AccessorDataProperty)}else if(u[n]&c){et({},o.AccessorGetSet)}}u[n]|=c}else{u[n]=c}e.push(t)
if(!at("}")){rt(",")}}rt("}")
return y.createObjectExpression(e)}function dt(){var e
rt("(")
e=Pt()
rt(")")
return e}function yt(){var e,r,n
if(at("(")){return dt()}e=h.type
y.markStart()
if(e===t.Identifier){n=y.createIdentifier(Q().value)}else if(e===t.StringLiteral||e===t.NumericLiteral){if(s&&h.octal){et(h,o.StrictOctalLiteral)}n=y.createLiteral(Q())}else if(e===t.Keyword){if(it("this")){Q()
n=y.createThisExpression()}else if(it("function")){n=ar()}}else if(e===t.BooleanLiteral){r=Q()
r.value=r.value==="true"
n=y.createLiteral(r)}else if(e===t.NullLiteral){r=Q()
r.value=null
n=y.createLiteral(r)}else if(at("[")){n=lt()}else if(at("{")){n=mt()}else if(at("/")||at("/=")){if(typeof k.tokens!=="undefined"){n=y.createLiteral(q())}else{n=y.createLiteral(H())}}if(n){return y.markEnd(n)}tt(Q())}function ht(){var e=[]
rt("(")
if(!at(")")){while(f<d){e.push(At())
if(at(")")){break}rt(",")}}rt(")")
return e}function St(){var e
y.markStart()
e=Q()
if(!z(e)){tt(e)}return y.markEnd(y.createIdentifier(e.value))}function kt(){rt(".")
return St()}function gt(){var e
rt("[")
e=Pt()
rt("]")
return e}function vt(){var e,t
y.markStart()
nt("new")
e=Et()
t=at("(")?ht():[]
return y.markEnd(y.createNewExpression(e,t))}function bt(){var e,t,r,n
e=sr()
t=it("new")?vt():yt()
while(at(".")||at("[")||at("(")){if(at("(")){r=ht()
t=y.createCallExpression(t,r)}else if(at("[")){n=gt()
t=y.createMemberExpression("[",t,n)}else{n=kt()
t=y.createMemberExpression(".",t,n)}if(e){e.end()
e.apply(t)}}return t}function Et(){var e,t,r
e=sr()
t=it("new")?vt():yt()
while(at(".")||at("[")){if(at("[")){r=gt()
t=y.createMemberExpression("[",t,r)}else{r=kt()
t=y.createMemberExpression(".",t,r)}if(e){e.end()
e.apply(t)}}return t}function xt(){var e,r
y.markStart()
e=bt()
if(h.type===t.Punctuator){if((at("++")||at("--"))&&!Z()){if(s&&e.type===a.Identifier&&P(e.name)){et({},o.StrictLHSPostfix)}if(!ut(e)){_({},o.InvalidLHSInAssignment)}r=Q()
e=y.createPostfixExpression(r.value,e)}}return y.markEndIf(e)}function wt(){var e,r
y.markStart()
if(h.type!==t.Punctuator&&h.type!==t.Keyword){r=xt()}else if(at("++")||at("--")){e=Q()
r=wt()
if(s&&r.type===a.Identifier&&P(r.name)){et({},o.StrictLHSPrefix)}if(!ut(r)){_({},o.InvalidLHSInAssignment)}r=y.createUnaryExpression(e.value,r)}else if(at("+")||at("-")||at("~")||at("!")){e=Q()
r=wt()
r=y.createUnaryExpression(e.value,r)}else if(it("delete")||it("void")||it("typeof")){e=Q()
r=wt()
r=y.createUnaryExpression(e.value,r)
if(s&&r.operator==="delete"&&r.argument.type===a.Identifier){et({},o.StrictDelete)}}else{r=xt()}return y.markEndIf(r)}function It(e,r){var n=0
if(e.type!==t.Punctuator&&e.type!==t.Keyword){return 0}switch(e.value){case"||":n=1
break
case"&&":n=2
break
case"|":n=3
break
case"^":n=4
break
case"&":n=5
break
case"==":case"!=":case"===":case"!==":n=6
break
case"<":case">":case"<=":case">=":case"instanceof":n=7
break
case"in":n=r?7:0
break
case"<<":case">>":case">>>":n=8
break
case"+":case"-":n=9
break
case"*":case"/":case"%":n=11
break
default:break}return n}function Ct(){var e,t,r,n,a,i,o,c,u,l,s
i=S.allowIn
S.allowIn=true
e=sr()
l=wt()
n=h
a=It(n,i)
if(a===0){return l}n.prec=a
Q()
t=[e,sr()]
c=wt()
o=[l,n,c]
while((a=It(h,i))>0){while(o.length>2&&a<=o[o.length-2].prec){c=o.pop()
u=o.pop().value
l=o.pop()
r=y.createBinaryExpression(u,l,c)
t.pop()
e=t.pop()
if(e){e.end()
e.apply(r)}o.push(r)
t.push(e)}n=Q()
n.prec=a
o.push(n)
t.push(sr())
r=wt()
o.push(r)}S.allowIn=i
s=o.length-1
r=o[s]
t.pop()
while(s>1){r=y.createBinaryExpression(o[s-1].value,o[s-2],r)
s-=2
e=t.pop()
if(e){e.end()
e.apply(r)}}return r}function Lt(){var e,t,r,n
y.markStart()
e=Ct()
if(at("?")){Q()
t=S.allowIn
S.allowIn=true
r=At()
S.allowIn=t
rt(":")
n=At()
e=y.markEnd(y.createConditionalExpression(e,r,n))}else{y.markEnd({})}return e}function At(){var e,t,r,n
e=h
y.markStart()
n=t=Lt()
if(ot()){if(!ut(t)){_({},o.InvalidLHSInAssignment)}if(s&&t.type===a.Identifier&&P(t.name)){et(e,o.StrictLHSAssignment)}e=Q()
r=At()
n=y.createAssignmentExpression(e.value,t,r)}return y.markEndIf(n)}function Pt(){var e
y.markStart()
e=At()
if(at(",")){e=y.createSequenceExpression([e])
while(f<d){if(!at(",")){break}Q()
e.expressions.push(At())}}return y.markEndIf(e)}function Nt(){var e=[],t
while(f<d){if(at("}")){break}t=ir()
if(typeof t==="undefined"){break}e.push(t)}return e}function Ot(){var e
D()
y.markStart()
rt("{")
e=Nt()
rt("}")
return y.markEnd(y.createBlockStatement(e))}function Ut(){var e
D()
y.markStart()
e=Q()
if(e.type!==t.Identifier){tt(e)}return y.markEnd(y.createIdentifier(e.value))}function Ft(e){var t=null,r
D()
y.markStart()
r=Ut()
if(s&&P(r.name)){et({},o.StrictVarName)}if(e==="const"){rt("=")
t=At()}else if(at("=")){Q()
t=At()}return y.markEnd(y.createVariableDeclarator(r,t))}function Dt(e){var t=[]
do{t.push(Ft(e))
if(!at(",")){break}Q()}while(f<d)
return t}function Tt(){var e
nt("var")
e=Dt()
ct()
return y.createVariableDeclaration(e,"var")}function Bt(e){var t
D()
y.markStart()
nt(e)
t=Dt(e)
ct()
return y.markEnd(y.createVariableDeclaration(t,e))}function Rt(){rt(";")
return y.createEmptyStatement()}function Wt(){var e=Pt()
ct()
return y.createExpressionStatement(e)}function jt(){var e,t,r
nt("if")
rt("(")
e=Pt()
rt(")")
t=er()
if(it("else")){Q()
r=er()}else{r=null}return y.createIfStatement(e,t,r)}function Gt(){var e,t,r
nt("do")
r=S.inIteration
S.inIteration=true
e=er()
S.inIteration=r
nt("while")
rt("(")
t=Pt()
rt(")")
if(at(";")){Q()}return y.createDoWhileStatement(e,t)}function Kt(){var e,t,r
nt("while")
rt("(")
e=Pt()
rt(")")
r=S.inIteration
S.inIteration=true
t=er()
S.inIteration=r
return y.createWhileStatement(e,t)}function Vt(){var e,t
y.markStart()
e=Q()
t=Dt()
return y.markEnd(y.createVariableDeclaration(t,e.value))}function Mt(){var e,t,r,n,a,i,c
e=t=r=null
nt("for")
rt("(")
if(at(";")){Q()}else{if(it("var")||it("let")){S.allowIn=false
e=Vt()
S.allowIn=true
if(e.declarations.length===1&&it("in")){Q()
n=e
a=Pt()
e=null}}else{S.allowIn=false
e=Pt()
S.allowIn=true
if(it("in")){if(!ut(e)){_({},o.InvalidLHSInForIn)}Q()
n=e
a=Pt()
e=null}}if(typeof n==="undefined"){rt(";")}}if(typeof n==="undefined"){if(!at(";")){t=Pt()}rt(";")
if(!at(")")){r=Pt()}}rt(")")
c=S.inIteration
S.inIteration=true
i=er()
S.inIteration=c
return typeof n==="undefined"?y.createForStatement(e,t,r,i):y.createForInStatement(n,a,i)}function Ht(){var e=null,r
nt("continue")
if(l.charCodeAt(f)===59){Q()
if(!S.inIteration){_({},o.IllegalContinue)}return y.createContinueStatement(null)}if(Z()){if(!S.inIteration){_({},o.IllegalContinue)}return y.createContinueStatement(null)}if(h.type===t.Identifier){e=Ut()
r="$"+e.name
if(!Object.prototype.hasOwnProperty.call(S.labelSet,r)){_({},o.UnknownLabel,e.name)}}ct()
if(e===null&&!S.inIteration){_({},o.IllegalContinue)}return y.createContinueStatement(e)}function qt(){var e=null,r
nt("break")
if(l.charCodeAt(f)===59){Q()
if(!(S.inIteration||S.inSwitch)){_({},o.IllegalBreak)}return y.createBreakStatement(null)}if(Z()){if(!(S.inIteration||S.inSwitch)){_({},o.IllegalBreak)}return y.createBreakStatement(null)}if(h.type===t.Identifier){e=Ut()
r="$"+e.name
if(!Object.prototype.hasOwnProperty.call(S.labelSet,r)){_({},o.UnknownLabel,e.name)}}ct()
if(e===null&&!(S.inIteration||S.inSwitch)){_({},o.IllegalBreak)}return y.createBreakStatement(e)}function zt(){var e=null
nt("return")
if(!S.inFunctionBody){et({},o.IllegalReturn)}if(l.charCodeAt(f)===32){if(I(l.charCodeAt(f+1))){e=Pt()
ct()
return y.createReturnStatement(e)}}if(Z()){return y.createReturnStatement(null)}if(!at(";")){if(!at("}")&&h.type!==t.EOF){e=Pt()}}ct()
return y.createReturnStatement(e)}function $t(){var e,t
if(s){et({},o.StrictModeWith)}nt("with")
rt("(")
e=Pt()
rt(")")
t=er()
return y.createWithStatement(e,t)}function Xt(){var e,t=[],r
D()
y.markStart()
if(it("default")){Q()
e=null}else{nt("case")
e=Pt()}rt(":")
while(f<d){if(at("}")||it("default")||it("case")){break}r=er()
t.push(r)}return y.markEnd(y.createSwitchCase(e,t))}function Jt(){var e,t,r,n,a
nt("switch")
rt("(")
e=Pt()
rt(")")
rt("{")
if(at("}")){Q()
return y.createSwitchStatement(e)}t=[]
n=S.inSwitch
S.inSwitch=true
a=false
while(f<d){if(at("}")){break}r=Xt()
if(r.test===null){if(a){_({},o.MultipleDefaultsInSwitch)}a=true}t.push(r)}S.inSwitch=n
rt("}")
return y.createSwitchStatement(e,t)}function Qt(){var e
nt("throw")
if(Z()){_({},o.NewlineAfterThrow)}e=Pt()
ct()
return y.createThrowStatement(e)}function Yt(){var e,t
D()
y.markStart()
nt("catch")
rt("(")
if(at(")")){tt(h)}e=Ut()
if(s&&P(e.name)){et({},o.StrictCatchVariable)}rt(")")
t=Ot()
return y.markEnd(y.createCatchClause(e,t))}function Zt(){var e,t=[],r=null
nt("try")
e=Ot()
if(it("catch")){t.push(Yt())}if(it("finally")){Q()
r=Ot()}if(t.length===0&&!r){_({},o.NoCatchOrFinally)}return y.createTryStatement(e,[],t,r)}function _t(){nt("debugger")
ct()
return y.createDebuggerStatement()}function er(){var e=h.type,r,n,i
if(e===t.EOF){tt(h)}D()
y.markStart()
if(e===t.Punctuator){switch(h.value){case";":return y.markEnd(Rt())
case"{":return y.markEnd(Ot())
case"(":return y.markEnd(Wt())
default:break}}if(e===t.Keyword){switch(h.value){case"break":return y.markEnd(qt())
case"continue":return y.markEnd(Ht())
case"debugger":return y.markEnd(_t())
case"do":return y.markEnd(Gt())
case"for":return y.markEnd(Mt())
case"function":return y.markEnd(nr())
case"if":return y.markEnd(jt())
case"return":return y.markEnd(zt())
case"switch":return y.markEnd(Jt())
case"throw":return y.markEnd(Qt())
case"try":return y.markEnd(Zt())
case"var":return y.markEnd(Tt())
case"while":return y.markEnd(Kt())
case"with":return y.markEnd($t())
default:break}}r=Pt()
if(r.type===a.Identifier&&at(":")){Q()
i="$"+r.name
if(Object.prototype.hasOwnProperty.call(S.labelSet,i)){_({},o.Redeclaration,"Label",r.name)}S.labelSet[i]=true
n=er()
delete S.labelSet[i]
return y.markEnd(y.createLabeledStatement(r,n))}ct()
return y.markEnd(y.createExpressionStatement(r))}function tr(){var e,r=[],n,i,c,u,p,m,k
D()
y.markStart()
rt("{")
while(f<d){if(h.type!==t.StringLiteral){break}n=h
e=ir()
r.push(e)
if(e.expression.type!==a.Literal){break}i=l.slice(n.range[0]+1,n.range[1]-1)
if(i==="use strict"){s=true
if(c){et(c,o.StrictOctalLiteral)}}else{if(!c&&n.octal){c=n}}}u=S.labelSet
p=S.inIteration
m=S.inSwitch
k=S.inFunctionBody
S.labelSet={}
S.inIteration=false
S.inSwitch=false
S.inFunctionBody=true
while(f<d){if(at("}")){break}e=ir()
if(typeof e==="undefined"){break}r.push(e)}rt("}")
S.labelSet=u
S.inIteration=p
S.inSwitch=m
S.inFunctionBody=k
return y.markEnd(y.createBlockStatement(r))}function rr(e){var t,r=[],n,a,i,c,u
rt("(")
if(!at(")")){i={}
while(f<d){n=h
t=Ut()
c="$"+n.value
if(s){if(P(n.value)){a=n
u=o.StrictParamName}if(Object.prototype.hasOwnProperty.call(i,c)){a=n
u=o.StrictParamDupe}}else if(!e){if(P(n.value)){e=n
u=o.StrictParamName}else if(A(n.value)){e=n
u=o.StrictReservedWord}else if(Object.prototype.hasOwnProperty.call(i,c)){e=n
u=o.StrictParamDupe}}r.push(t)
i[c]=true
if(at(")")){break}rt(",")}}rt(")")
return{params:r,stricted:a,firstRestricted:e,message:u}}function nr(){var e,t=[],r,n,a,i,c,u,l
D()
y.markStart()
nt("function")
n=h
e=Ut()
if(s){if(P(n.value)){et(n,o.StrictFunctionName)}}else{if(P(n.value)){c=n
u=o.StrictFunctionName}else if(A(n.value)){c=n
u=o.StrictReservedWord}}i=rr(c)
t=i.params
a=i.stricted
c=i.firstRestricted
if(i.message){u=i.message}l=s
r=tr()
if(s&&c){_(c,u)}if(s&&a){et(a,u)}s=l
return y.markEnd(y.createFunctionDeclaration(e,t,[],r))}function ar(){var e,t=null,r,n,a,i,c=[],u,l
y.markStart()
nt("function")
if(!at("(")){e=h
t=Ut()
if(s){if(P(e.value)){et(e,o.StrictFunctionName)}}else{if(P(e.value)){n=e
a=o.StrictFunctionName}else if(A(e.value)){n=e
a=o.StrictReservedWord}}}i=rr(n)
c=i.params
r=i.stricted
n=i.firstRestricted
if(i.message){a=i.message}l=s
u=tr()
if(s&&n){_(n,a)}if(s&&r){et(r,a)}s=l
return y.markEnd(y.createFunctionExpression(t,c,[],u))}function ir(){if(h.type===t.Keyword){switch(h.value){case"const":case"let":return Bt(h.value)
case"function":return nr()
default:return er()}}if(h.type!==t.EOF){return er()}}function or(){var e,r=[],n,i,c
while(f<d){n=h
if(n.type!==t.StringLiteral){break}e=ir()
r.push(e)
if(e.expression.type!==a.Literal){break}i=l.slice(n.range[0]+1,n.range[1]-1)
if(i==="use strict"){s=true
if(c){et(c,o.StrictOctalLiteral)}}else{if(!c&&n.octal){c=n}}}while(f<d){e=ir()
if(typeof e==="undefined"){break}r.push(e)}return r}function cr(){var e
D()
y.markStart()
s=false
Y()
e=or()
return y.markEnd(y.createProgram(e))}function ur(){var e,t,r,n=[]
for(e=0;e<k.tokens.length;++e){t=k.tokens[e]
r={type:t.type,value:t.value}
if(k.range){r.range=t.range}if(k.loc){r.loc=t.loc}n.push(r)}k.tokens=n}function lr(){this.marker=[f,p,f-m,0,0,0]}lr.prototype={constructor:lr,end:function(){this.marker[3]=f
this.marker[4]=p
this.marker[5]=f-m},apply:function(e){if(k.range){e.range=[this.marker[0],this.marker[3]]}if(k.loc){e.loc={start:{line:this.marker[1],column:this.marker[2]},end:{line:this.marker[4],column:this.marker[5]}}}e=y.postProcess(e)}}
function sr(){if(!k.loc&&!k.range){return null}D()
return new lr}function fr(e,r){var n,a,i
n=String
if(typeof e!=="string"&&!(e instanceof String)){e=n(e)}y=u
l=e
f=0
p=l.length>0?1:0
m=0
d=l.length
h=null
S={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1}
k={}
r=r||{}
r.tokens=true
k.tokens=[]
k.tokenize=true
k.openParenToken=-1
k.openCurlyToken=-1
k.range=typeof r.range==="boolean"&&r.range
k.loc=typeof r.loc==="boolean"&&r.loc
if(typeof r.comment==="boolean"&&r.comment){k.comments=[]}if(typeof r.tolerant==="boolean"&&r.tolerant){k.errors=[]}if(d>0){if(typeof l[0]==="undefined"){if(e instanceof String){l=e.valueOf()}}}try{Y()
if(h.type===t.EOF){return k.tokens}a=Q()
while(h.type!==t.EOF){try{a=Q()}catch(o){a=h
if(k.errors){k.errors.push(o)
break}else{throw o}}}ur()
i=k.tokens
if(typeof k.comments!=="undefined"){i.comments=k.comments}if(typeof k.errors!=="undefined"){i.errors=k.errors}}catch(c){throw c}finally{k={}}return i}function pr(e,t){var r,n
n=String
if(typeof e!=="string"&&!(e instanceof String)){e=n(e)}y=u
l=e
f=0
p=l.length>0?1:0
m=0
d=l.length
h=null
S={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1,markerStack:[]}
k={}
if(typeof t!=="undefined"){k.range=typeof t.range==="boolean"&&t.range
k.loc=typeof t.loc==="boolean"&&t.loc
if(k.loc&&t.source!==null&&t.source!==undefined){k.source=n(t.source)}if(typeof t.tokens==="boolean"&&t.tokens){k.tokens=[]}if(typeof t.comment==="boolean"&&t.comment){k.comments=[]}if(typeof t.tolerant==="boolean"&&t.tolerant){k.errors=[]}}if(d>0){if(typeof l[0]==="undefined"){if(e instanceof String){l=e.valueOf()}}}try{r=cr()
if(typeof k.comments!=="undefined"){r.comments=k.comments}if(typeof k.tokens!=="undefined"){ur()
r.tokens=k.tokens}if(typeof k.errors!=="undefined"){r.errors=k.errors}}catch(a){throw a}finally{k={}}return r}e.version="1.1.0-dev"
e.tokenize=fr
e.parse=pr
e.Syntax=function(){var e,t={}
if(typeof Object.create==="function"){t=Object.create(null)}for(e in a){if(a.hasOwnProperty(e)){t[e]=a[e]}}if(typeof Object.freeze==="function"){Object.freeze(t)}return t}()})
KAdefine("third_party/javascript-khansrc/structuredjs/external/esprima.js", function(require, requireWithVars, module, exports) {
    module.exports = esprima;
});
(function(e){var r
var n
var t
var a={}
var i
var s
if(typeof module!=="undefined"&&module.exports){r=module.exports={}
n=require("esprima")
t=require("underscore")}else{r=this.Structured={}
n=e.esprima
t=e._}if(!n||!t){throw"Error: Both Esprima and UnderscoreJS are required dependencies."}function o(e,r,a){a=a||{}
var o=a.varCallbacks||{}
var l={order:[],skipData:{},values:{}}
var p=f(r,l)
var d=i===e?s:n.parse(e)
i=e
s=d
c(d)
var v=p.body
var h=[]
if(t.isArray(p.body)){v=p.body[0]
h=p.body.slice(1)}var b
if(l.order.length===0){b=y(d,v,h,l)}else{b=m(0,l,o)}return b
function m(e,r,n){var a=r.order
r.skipData[a[e]]=0
do{for(var i=e+1;i<a.length;i+=1){r.skipData[a[i]]=0}if(e===a.length-1){t.each(r.values,function(e,n){t.each(r.values[n],function(e,t){delete r.values[n][t]})})
r.leftToSkip=t.extend({},r.skipData)
if(y(d,v,h.slice(),r)&&u(r,n)){return true}}else if(m(e+1,r,n)){return true}r.skipData[a[e]]+=1}while(!t.isEmpty(r.values[a[e]]))
return false}}function u(e,r){delete r.failure
for(var n in r){var a=n.split(",")
var i=t.map(a,function(r){r=o(r)
if(!t.has(e.values,r)){console.error("Callback var "+r+" doesn't exist")
return undefined}return JSON.parse(JSON.stringify(e.values[r]))})
var s=r[n].apply(null,i)
if(!s||t.has(s,"failure")){if(t.has(s,"failure")){r.failure=s.failure}return false}}return true
function o(e){if(String.prototype.trim){return e.trim()}return e.replace(/^\s+|\s+$/g,"")}}function l(e){if(a[e]){return JSON.parse(a[e])}var r=n.parse("("+e+")")
if(r.body[0].expression.type!=="FunctionExpression"||!r.body[0].expression.body){throw"Poorly formatted structure code"}var t=r.body[0].expression.body
a[e]=JSON.stringify(t)
return t}function f(e,r){var n=l(e)
c(n)
p(n,r)
return n}function c(e){for(var r in e){if(!e.hasOwnProperty(r)){continue}var a=e[r]
if(t.isObject(a)){c(a)
if(a.type==n.Syntax.UnaryExpression){var i=a.argument
if(i.type===n.Syntax.Literal&&t.isNumber(i.value)){if(a.operator==="-"){i.value=-i.value
e[r]=i}else if(a.operator==="+"){i.value=+i.value
e[r]=i}}}}}}function p(e,r){for(var a in e){if(!e.hasOwnProperty(a)){continue}if(t.isObject(e[a])){if(d(e[a])){e[a]=undefined}else if(v(e[a])){var i=e[a].name
if(!r.values[i]){r.values[i]={}
e[a]={wildcardVar:i}
r.order.push(i)
r.skipData[i]=0}else{e[a]=r.values[i]}}else if(e[a].type===n.Syntax.EmptyStatement){t.isArray(e)?e.splice(a,1):delete e[a]}else{p(e[a],r)}}}}function d(e){return e.name&&e.name==="_"||t.isArray(e.body)&&e.body.length===0}function v(e){return e.name&&t.isString(e.name)&&e.name.length>=2&&e.name[0]==="$"}function y(e,r,n,a){if(t.isArray(r)){console.error("toFind should never be an array.")
console.error(r)}if(b(e,r,n,a)){return true}for(var i in e){if(!e.hasOwnProperty(i)||!t.isObject(e[i])){continue}if(t.isArray(e[i])&&h(e[i],r,n,a)||!t.isArray(e[i])&&y(e[i],r,n,a)){return true}}return false}function h(e,r,n,t){for(var a=0;a<e.length;a+=1){if(y(e[a],r,n,t)){if(!n||n.length===0){return true}else{r=n.shift()}}}return false}function b(e,r,n,a){for(var i in r){if(!r.hasOwnProperty(i)||r[i]===null){continue}var s=r[i]
var o=e[i]
if(s===undefined){if(o===null||o===undefined){return false}else{continue}}if(o===undefined||o===null){if(i==="wildcardVar"){if(a.leftToSkip[s]>0){a.leftToSkip[s]-=1
return false}t.extend(a.values[s],e)
return true}return false}if(t.isObject(o)!==t.isObject(s)||t.isArray(o)!==t.isArray(s)||typeof o!==typeof s){console.error("Object/array/other type mismatch.")
return false}else if(t.isArray(o)){if(s.length===0){continue}var u=s[0]
var l=s.slice(1)
if(!h(o,u,l,a)){return false}}else if(t.isObject(o)){if(!y(o,s,n,a)){return false}}else if(!t.isObject(o)){if(o!==s){return false}}else{console.error("Some weird never-before-seen situation!")
console.error(e)
console.error(o)
throw"Error: logic inside of structure analysis code broke."}}return true}function m(e,r){if(!Rainbow){return e}Rainbow.color(e,"javascript",function(e){var n="<pre class='rainbowjs'>"+w(e)+"</pre>"
r(n)})}function w(e,r){if(!r){w.styleMap={}
w.counter=0}e=e.replace(/(^|[^A-Za-z0-9])_(?![A-Za-z0-9])/g,"$1<span class='structuredjs_blank'></span>")
var n=/(?:(^|[^\w])\$(\w+))|(?:\$<span class="function call">(\w+)<\/span>)/g
return e.replace(n,function(e,r,n,t){r=r||""
n=n||t
var a=w
if(!(n in a.styleMap)){a.styleMap[n]=a.counter<a.styles.length?a.styles[a.counter]:"extra"
a.counter+=1}return r+"<span class='structuredjs_var "+a.styleMap[n]+"'>"+"</span>"})}w.styles=["one","two","three","four","five","six","seven"]
w.styleMap={}
w.counter=0
r.match=o
r.prettify=m})(typeof window!=="undefined"?window:global)
KAdefine("third_party/javascript-khansrc/structuredjs/structured.js", function(require, requireWithVars, module, exports) {
    module.exports = Structured;
});
(function(e,t,r,n){var i=function(){}
var s=function(){if("console"in e){return function(t){e.console.log("Processing.js: "+t)}}return i()}()
var a=function(e){var t=new XMLHttpRequest
t.open("GET",e,false)
if(t.overrideMimeType){t.overrideMimeType("text/plain")}t.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
t.send(null)
if(t.status!==200&&t.status!==0){throw"XMLHttpRequest failed, status code "+t.status}return t.responseText}
var o="document"in this&&!("fake"in this.document)
t.head=t.head||t.getElementsByTagName("head")[0]
function l(t,r){if(t in e){return e[t]}if(typeof e[r]==="function"){return e[r]}return function(e){if(e instanceof Array){return e}if(typeof e==="number"){var t=[]
t.length=e
return t}}}var u=l("Float32Array","WebGLFloatArray"),f=l("Int32Array","WebGLIntArray"),h=l("Uint16Array","WebGLUnsignedShortArray"),c=l("Uint8Array","WebGLUnsignedByteArray")
var g={NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:r.PI,TWO_PI:2*r.PI,HALF_PI:r.PI/2,THIRD_PI:r.PI/3,QUARTER_PI:r.PI/4,DEG_TO_RAD:r.PI/180,RAD_TO_DEG:180/r.PI,WHITESPACE:" 	\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1<<0,ADD:1<<1,SUBTRACT:1<<2,LIGHTEST:1<<3,DARKEST:1<<4,DIFFERENCE:1<<5,EXCLUSION:1<<6,MULTIPLY:1<<7,SCREEN:1<<8,OVERLAY:1<<9,HARD_LIGHT:1<<10,SOFT_LIGHT:1<<11,DODGE:1<<12,BURN:1<<13,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:1<<15,PREC_MAXVAL:(1<<15)-1,PREC_ALPHA_SHIFT:24-15,PREC_RED_SHIFT:16-15,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}
function p(e){if(typeof e==="string"){var t=0
for(var i=0;i<e.length;++i){t=t*31+e.charCodeAt(i)&4294967295}return t}if(typeof e!=="object"){return e&4294967295}if(e.hashCode instanceof Function){return e.hashCode()}if(e.$id===n){e.$id=r.floor(r.random()*65536)-32768<<16|r.floor(r.random()*65536)}return e.$id}function m(e,t){if(e===null||t===null){return e===null&&t===null}if(typeof e==="string"){return e===t}if(typeof e!=="object"){return e===t}if(e.equals instanceof Function){return e.equals(t)}return e===t}var d=function(e){if(e.iterator instanceof Function){return e.iterator()}if(e instanceof Array){var t=-1
this.hasNext=function(){return++t<e.length}
this.next=function(){return e[t]}}else{throw"Unable to iterate: "+e}}
var v=function(){function e(e){var t=0
this.hasNext=function(){return t<e.length}
this.next=function(){return e[t++]}
this.remove=function(){e.splice(t,1)}}function t(){var r
if(arguments.length===0){r=[]}else if(arguments.length>0&&typeof arguments[0]!=="number"){r=arguments[0].toArray()}else{r=[]
r.length=0|arguments[0]}this.get=function(e){return r[e]}
this.contains=function(e){return this.indexOf(e)>-1}
this.indexOf=function(e){for(var t=0,n=r.length;t<n;++t){if(m(e,r[t])){return t}}return-1}
this.add=function(){if(arguments.length===1){r.push(arguments[0])}else if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<=r.length){r.splice(e,0,arguments[1])}else{throw e+" is not a valid index"}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.addAll=function(e,t){var n
if(typeof e==="number"){if(e<0||e>r.length){throw"Index out of bounds for addAll: "+e+" greater or equal than "+r.length}n=new d(t)
while(n.hasNext()){r.splice(e++,0,n.next())}}else{n=new d(e)
while(n.hasNext()){r.push(n.next())}}}
this.set=function(){if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<r.length){r.splice(e,1,arguments[1])}else{throw e+" is not a valid index."}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.size=function(){return r.length}
this.clear=function(){r.length=0}
this.remove=function(e){if(typeof e==="number"){return r.splice(e,1)[0]}e=this.indexOf(e)
if(e>-1){r.splice(e,1)
return true}return false}
this.isEmpty=function(){return!r.length}
this.clone=function(){return new t(this)}
this.toArray=function(){return r.slice(0)}
this.iterator=function(){return new e(r)}}return t}()
var y=function(){function e(){if(arguments.length===1&&arguments[0]instanceof e){return arguments[0].clone()}var t=arguments.length>0?arguments[0]:16
var r=arguments.length>1?arguments[1]:.75
var i=[]
i.length=t
var s=0
var a=this
function o(e){var t=p(e)%i.length
return t<0?i.length+t:t}function l(){if(s<=r*i.length){return}var e=[]
for(var t=0;t<i.length;++t){if(i[t]!==n){e=e.concat(i[t])}}var a=i.length*2
i=[]
i.length=a
for(var l=0;l<e.length;++l){var u=o(e[l].key)
var f=i[u]
if(f===n){i[u]=f=[]}f.push(e[l])}}function u(e,t){var r=0
var s=-1
var a=false
function o(){while(!a){++s
if(r>=i.length){a=true}else if(i[r]===n||s>=i[r].length){s=-1;++r}else{return}}}this.hasNext=function(){return!a}
this.next=function(){var t=e(i[r][s])
o()
return t}
this.remove=function(){t(this.next());--s}
o()}function f(e,t,r){this.clear=function(){a.clear()}
this.contains=function(e){return t(e)}
this.containsAll=function(e){var t=e.iterator()
while(t.hasNext()){if(!this.contains(t.next())){return false}}return true}
this.isEmpty=function(){return a.isEmpty()}
this.iterator=function(){return new u(e,r)}
this.remove=function(e){if(this.contains(e)){r(e)
return true}return false}
this.removeAll=function(e){var t=e.iterator()
var n=false
while(t.hasNext()){var i=t.next()
if(this.contains(i)){r(i)
n=true}}return true}
this.retainAll=function(e){var t=this.iterator()
var n=[]
while(t.hasNext()){var i=t.next()
if(!e.contains(i)){n.push(i)}}for(var s=0;s<n.length;++s){r(n[s])}return n.length>0}
this.size=function(){return a.size()}
this.toArray=function(){var e=[]
var t=this.iterator()
while(t.hasNext()){e.push(t.next())}return e}}function h(e){this._isIn=function(t){return t===a&&e.removed===n}
this.equals=function(t){return m(e.key,t.getKey())}
this.getKey=function(){return e.key}
this.getValue=function(){return e.value}
this.hashCode=function(t){return p(e.key)}
this.setValue=function(t){var r=e.value
e.value=t
return r}}this.clear=function(){s=0
i=[]
i.length=t}
this.clone=function(){var t=new e
t.putAll(this)
return t}
this.containsKey=function(e){var t=o(e)
var r=i[t]
if(r===n){return false}for(var s=0;s<r.length;++s){if(m(r[s].key,e)){return true}}return false}
this.containsValue=function(e){for(var t=0;t<i.length;++t){var r=i[t]
if(r===n){continue}for(var s=0;s<r.length;++s){if(m(r[s].value,e)){return true}}}return false}
this.entrySet=function(){return new f(function(e){return new h(e)},function(e){return e instanceof h&&e._isIn(a)},function(e){return a.remove(e.getKey())})}
this.get=function(e){var t=o(e)
var r=i[t]
if(r===n){return null}for(var s=0;s<r.length;++s){if(m(r[s].key,e)){return r[s].value}}return null}
this.isEmpty=function(){return s===0}
this.keySet=function(){return new f(function(e){return e.key},function(e){return a.containsKey(e)},function(e){return a.remove(e)})}
this.values=function(){return new f(function(e){return e.value},function(e){return a.containsValue(e)},function(e){return a.removeByValue(e)})}
this.put=function(e,t){var r=o(e)
var a=i[r]
if(a===n){++s
i[r]=[{key:e,value:t}]
l()
return null}for(var u=0;u<a.length;++u){if(m(a[u].key,e)){var f=a[u].value
a[u].value=t
return f}}++s
a.push({key:e,value:t})
l()
return null}
this.putAll=function(e){var t=e.entrySet().iterator()
while(t.hasNext()){var r=t.next()
this.put(r.getKey(),r.getValue())}}
this.remove=function(e){var t=o(e)
var r=i[t]
if(r===n){return null}for(var a=0;a<r.length;++a){if(m(r[a].key,e)){--s
var l=r[a].value
r[a].removed=true
if(r.length>1){r.splice(a,1)}else{i[t]=n}return l}}return null}
this.removeByValue=function(e){var t,r,n,s
for(t in i){if(i.hasOwnProperty(t)){for(r=0,n=i[t].length;r<n;r++){s=i[t][r]
if(s.value===e){i[t].splice(r,1)
return true}}}}return false}
this.size=function(){return s}}return e}()
function b(){}b.prototype=g
var A=new b
A.ArrayList=v
A.HashMap=y
A.ObjectIterator=d
A.PConstants=g
A.defineProperty=function(e,t,r){if("defineProperty"in Object){Object.defineProperty(e,t,r)}else{if(r.hasOwnProperty("get")){e.__defineGetter__(t,r.get)}if(r.hasOwnProperty("set")){e.__defineSetter__(t,r.set)}}}
function w(e,t){function r(r){A.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},enumerable:true})}var n=[]
for(var i in t){if(typeof t[i]==="function"){if(!e.hasOwnProperty(i)){e[i]=t[i]}}else if(i.charAt(0)!=="$"&&!(i in e)){n.push(i)}}while(n.length>0){r(n.shift())}}A.extendClassChain=function(e){var t=[e]
for(var r=e.$upcast;r;r=r.$upcast){w(r,e)
t.push(r)
e=r}while(t.length>0){t.pop().$self=e}}
A.extendStaticMembers=function(e,t){w(e,t)}
A.extendInterfaceMembers=function(e,t){w(e,t)}
A.addMethod=function(e,t,r,n){if(e[t]){var i=r.length,s=e[t]
e[t]=function(){if(arguments.length===i){return r.apply(this,arguments)}return s.apply(this,arguments)}}else{e[t]=r}}
A.createJavaArray=function(e,t){var r=null
if(typeof t[0]==="number"){var n=0|t[0]
if(t.length<=1){r=[]
r.length=n
for(var i=0;i<n;++i){r[i]=0}}else{r=[]
var s=t.slice(1)
for(var a=0;a<n;++a){r.push(A.createJavaArray(e,s))}}}return r}
var x={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};(function(e){var t=("open() createOutput() createInput() BufferedReader selectFolder() "+"dataPath() createWriter() selectOutput() beginRecord() "+"saveStream() endRecord() selectInput() saveBytes() createReader() "+"beginRaw() endRaw() PrintWriter delay()").split(" "),r=t.length,n,i
function s(e){return function(){throw"Processing.js does not support "+e+"."}}while(r--){n=t[r]
i=n.replace("()","")
e[i]=s(n)}})(A)
A.defineProperty(A,"screenWidth",{get:function(){return e.innerWidth}})
A.defineProperty(A,"screenHeight",{get:function(){return e.innerHeight}})
var E=[]
var S={}
var _=function(e){E.splice(S[e],1)
delete S[e]}
var T=function(e){if(e.externals.canvas.id===n||!e.externals.canvas.id.length){e.externals.canvas.id="__processing"+E.length}S[e.externals.canvas.id]=E.length
E.push(e)}
function R(e){var n=250,s=e.size/n,a=t.createElement("canvas")
a.width=2*n
a.height=2*n
a.style.opacity=0
var o=e.getCSSDefinition(n+"px","normal"),l=a.getContext("2d")
l.font=o
e.context2d=l
var u="dbflkhyjqpg"
a.width=l.measureText(u).width
l.font=o
var f=t.createElement("div")
f.style.position="absolute"
f.style.opacity=0
f.style.fontFamily='"'+e.name+'"'
f.style.fontSize=n+"px"
f.innerHTML=u+"<br/>"+u
t.body.appendChild(f)
var h=a.width,c=a.height,g=c/2
l.fillStyle="white"
l.fillRect(0,0,h,c)
l.fillStyle="black"
l.fillText(u,0,g)
var p=l.getImageData(0,0,h,c).data
var m=0,d=h*4,v=p.length
while(++m<v&&p[m]===255){i()}var y=r.round(m/d)
m=v-1
while(--m>0&&p[m]===255){i()}var b=r.round(m/d)
e.ascent=s*(g-y)
e.descent=s*(b-g)
if(t.defaultView.getComputedStyle){var A=t.defaultView.getComputedStyle(f,null).getPropertyValue("height")
A=s*A.replace("px","")
if(A>=e.size*2){e.leading=r.round(A/2)}}t.body.removeChild(f)}function P(e,t){if(e===n){e=""}this.name=e
if(t===n){t=0}this.size=t
this.glyph=false
this.ascent=0
this.descent=0
this.leading=1.2*t
var r=e.indexOf(" Italic Bold")
if(r!==-1){e=e.substring(0,r)}this.style="normal"
var i=e.indexOf(" Italic")
if(i!==-1){e=e.substring(0,i)
this.style="italic"}this.weight="normal"
var s=e.indexOf(" Bold")
if(s!==-1){e=e.substring(0,s)
this.weight="bold"}this.family="sans-serif"
if(e!==n){switch(e){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=e
break
default:this.family='"'+e+'", sans-serif'
break}}this.context2d=null
R(this)
this.css=this.getCSSDefinition()
this.context2d.font=this.css}P.prototype.getCSSDefinition=function(e,t){if(e===n){e=this.size+"px"}if(t===n){t=this.leading+"px"}var r=[this.style,"normal",this.weight,e+"/"+t,this.family]
return r.join(" ")}
P.prototype.measureTextWidth=function(e){return this.context2d.measureText(e).width}
P.PFontCache={}
P.get=function(e,t){var r=P.PFontCache
var n=e+"/"+t
if(!r[n]){r[n]=new P(e,t)}return r[n]}
P.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]}
P.preloading={template:{},initialized:false,initialize:function(){var e=function(){var e="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm"+"7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3"+"AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG"+"9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3"+"#yld0xg32QAB77#E777773B#E3C#I#Q77773E#"+"Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#"+"E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#"+"Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#"
var t=function(e){return"AAAAAAAA".substr(~~e?7-e:6)}
return e.replace(/[#237]/g,t)}
var r=t.createElement("style")
r.setAttribute("type","text/css")
r.innerHTML="@font-face {\n"+'  font-family: "PjsEmptyFont";'+"\n"+"  src: url('data:application/x-font-ttf;base64,"+e()+"')\n"+"       format('truetype');\n"+"}"
t.head.appendChild(r)
var n=t.createElement("span")
n.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;'
n.innerHTML="AAAAAAAA"
t.body.appendChild(n)
this.template=n
this.initialized=true},getElementWidth:function(e){return t.defaultView.getComputedStyle(e,"").getPropertyValue("width")},timeAttempted:0,pending:function(e){if(!this.initialized){this.initialize()}var r,n,i=this.getElementWidth(this.template)
for(var s=0;s<this.fontList.length;s++){r=this.fontList[s]
n=this.getElementWidth(r)
if(this.timeAttempted<4e3&&n===i){this.timeAttempted+=e
return true}else{t.body.removeChild(r)
this.fontList.splice(s--,1)
this.timeAttempted=0}}if(this.fontList.length===0){return false}return true},fontList:[],addedList:{},add:function(e){if(!this.initialized){this.initialize()}var r=typeof e==="object"?e.fontFace:e,n=typeof e==="object"?e.url:e
if(this.addedList[r]){return}var i=t.createElement("style")
i.setAttribute("type","text/css")
i.innerHTML="@font-face{\n  font-family: '"+r+"';\n  src:  url('"+n+"');\n}\n"
t.head.appendChild(i)
this.addedList[r]=true
var s=t.createElement("span")
s.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;"
s.style.fontFamily='"'+r+'", "PjsEmptyFont", fantasy'
s.innerHTML="AAAAAAAA"
t.body.appendChild(s)
this.fontList.push(s)}}
A.PFont=P
var C=this.Processing=function(s,o){if(!(this instanceof C)){throw"called Processing constructor as if it were a function: missing 'new'."}var l,m=s===n&&o===n
if(m){l=t.createElement("canvas")}else{l=typeof s==="string"?t.getElementById(s):s}if(!(l instanceof HTMLCanvasElement)){throw"called Processing constructor without passing canvas element reference or id."}function d(e){C.debug("Unimplemented - "+e)}var v=this
v.externals={canvas:l,context:n,sketch:n}
v.name="Processing.js Instance"
v.use3DContext=false
v.focused=false
v.breakShape=false
v.glyphTable={}
v.pmouseX=0
v.pmouseY=0
v.mouseX=0
v.mouseY=0
v.mouseButton=0
v.mouseScroll=0
v.mouseClicked=n
v.mouseDragged=n
v.mouseMoved=n
v.mousePressed=n
v.mouseReleased=n
v.mouseScrolled=n
v.mouseOver=n
v.mouseOut=n
v.touchStart=n
v.touchEnd=n
v.touchMove=n
v.touchCancel=n
v.key=n
v.keyCode=n
v.keyPressed=i
v.keyReleased=i
v.keyTyped=i
v.draw=n
v.setup=n
v.__mousePressed=false
v.__keyPressed=false
v.__frameRate=60
v.mouseIsPressed=false
v.keyIsPressed=false
v.frameCount=0
v.width=100
v.height=100
v.angleMode="radians"
var y=v.PVector=function(){function e(e,t,r){this.x=e||0
this.y=t||0
this.z=r||0}e.fromAngle=function(t,r){if(r===n||r===null){r=new e}r.x=v.cos(t)
r.y=v.sin(t)
return r}
e.random2D=function(t){return e.fromAngle(r.random()*360,t)}
e.random3D=function(t){var i=r.random()*360
var s=r.random()*2-1
var a=r.sqrt(1-s*s)
var o=a*v.cos(i)
var l=a*v.sin(i)
if(t===n||t===null){t=new e(o,l,s)}else{t.set(o,l,s)}return t}
e.dist=function(e,t){return e.dist(t)}
e.dot=function(e,t){return e.dot(t)}
e.cross=function(e,t){return e.cross(t)}
e.sub=function(t,r){return new e(t.x-r.x,t.y-r.y,t.z-r.z)}
e.angleBetween=function(e,t){return v.acos(e.dot(t)/(e.mag()*t.mag()))}
e.lerp=function(t,r,n){var i=new e(t.x,t.y,t.z)
i.lerp(r,n)
return i}
e.prototype={set:function(e,t,r){if(arguments.length===1){this.set(e.x||e[0]||0,e.y||e[1]||0,e.z||e[2]||0)}else{this.x=e
this.y=t
this.z=r}},get:function(){return new e(this.x,this.y,this.z)},mag:function(){var e=this.x,t=this.y,n=this.z
return r.sqrt(e*e+t*t+n*n)},magSq:function(){var e=this.x,t=this.y,r=this.z
return e*e+t*t+r*r},setMag:function(e,t){if(t===n){t=e
this.normalize()
this.mult(t)}else{var r=e
r.normalize()
r.mult(t)
return r}},add:function(e,t,r){if(arguments.length===1){this.x+=e.x
this.y+=e.y
this.z+=e.z}else{this.x+=e
this.y+=t
this.z+=r}},sub:function(e,t,r){if(arguments.length===1){this.x-=e.x
this.y-=e.y
this.z-=e.z}else{this.x-=e
this.y-=t
this.z-=r}},mult:function(e){if(typeof e==="number"){this.x*=e
this.y*=e
this.z*=e}else{this.x*=e.x
this.y*=e.y
this.z*=e.z}},div:function(e){if(typeof e==="number"){this.x/=e
this.y/=e
this.z/=e}else{this.x/=e.x
this.y/=e.y
this.z/=e.z}},rotate:function(e){var t=this.x
var r=v.cos(e)
var n=v.sin(e)
this.x=r*this.x-n*this.y
this.y=n*t+r*this.y},dist:function(e){var t=this.x-e.x,n=this.y-e.y,i=this.z-e.z
return r.sqrt(t*t+n*n+i*i)},dot:function(e,t,r){if(arguments.length===1){return this.x*e.x+this.y*e.y+this.z*e.z}return this.x*e+this.y*t+this.z*r},cross:function(t){var r=this.x,n=this.y,i=this.z
return new e(n*t.z-t.y*i,i*t.x-t.z*r,r*t.y-t.x*n)},lerp:function(e,t,r,n){var i=function(e,t,r){return e+(t-e)*r}
var s,a
if(arguments.length===2){n=t
s=e.x
a=e.y
r=e.z}else{s=e
a=t}this.x=i(this.x,s,n)
this.y=i(this.y,a,n)
this.z=i(this.z,r,n)},normalize:function(){var e=this.mag()
if(e>0){this.div(e)}},limit:function(e){if(this.mag()>e){this.normalize()
this.mult(e)}},heading:function(){return-v.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}}
function t(e){return function(t,r){var n=t.get()
n[e](r)
return n}}for(var i in e.prototype){if(e.prototype.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&i!=="toString"){e[i]=t(i)}}return e}()
var b,w,E,S=true,R=true,L=[1,1,1,1],I=4294967295,D=true,N=true,M=[0,0,0,1],O=4278190080,k=true,F=1,B=false,$=false,G=true,z=0,U=g.CORNER,V=g.CENTER,H=0,K=0,X=0,Y=g.NORMAL_MODE_AUTO,W=60,Z=1e3/W,j=g.ARROW,q=l.style.cursor,Q=g.POLYGON,J=0,et=[],tt=0,rt=20,nt=false,it=-3355444,st=20,at=255,ot=255,lt=255,ut=255,ft=false,ht=false,ct=0,gt=0,pt=g.RGB,mt=null,dt=null,vt=false,yt=Date.now(),bt=yt,At=0,wt,xt,Et,St,_t,Tt,Rt,Pt={attributes:{},locations:{}},Ct,Lt,It,Dt,Nt,Mt,Ot,kt,Ft,Bt,$t,Gt,zt,Ut,Vt,Ht,Kt,Xt={width:0,height:0},Yt=g.IMAGE,Wt=false,Zt,jt,qt,Qt=g.LEFT,Jt=g.BASELINE,er=g.MODEL,tr="Arial",rr=12,nr=9,ir=2,sr=14,ar=P.get(tr,rr),or,lr=null,ur=false,fr,hr=1e3,cr=[],gr=null,pr=[g.SHIFT,g.CONTROL,g.ALT,g.CAPSLK,g.PGUP,g.PGDN,g.END,g.HOME,g.LEFT,g.UP,g.RIGHT,g.DOWN,g.NUMLK,g.INSERT,g.F1,g.F2,g.F3,g.F4,g.F5,g.F6,g.F7,g.F8,g.F9,g.F10,g.F11,g.F12,g.META]
var mr,dr,vr,yr
if(t.defaultView&&t.defaultView.getComputedStyle){mr=parseInt(t.defaultView.getComputedStyle(l,null)["paddingLeft"],10)||0
dr=parseInt(t.defaultView.getComputedStyle(l,null)["paddingTop"],10)||0
vr=parseInt(t.defaultView.getComputedStyle(l,null)["borderLeftWidth"],10)||0
yr=parseInt(t.defaultView.getComputedStyle(l,null)["borderTopWidth"],10)||0}var br=0
var Ar=0,wr=0,xr=[],Er=[],Sr=[],_r=new u(g.SINCOS_LENGTH),Tr=new u(g.SINCOS_LENGTH),Rr,Pr
var Cr,Lr,Ir,Dr,Nr,Mr,Or,kr,Fr=false,Br=false,$r=60*(r.PI/180),Gr=v.width/2,zr=v.height/2,Ur=zr/r.tan($r/2),Vr=Ur/10,Hr=Ur*10,Kr=v.width/v.height
var Xr=[],Yr=[],Wr=0,Zr=false,jr=false,qr=true
var Qr=g.CORNER
var Jr=[]
var en=new u([.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5])
var tn=new u([.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5])
var rn=new u([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0])
var nn=new u([0,0,0,0,1,0,1,1,0,1,0,0])
var sn=new u([0,0,1,0,0,1,0,0,1,0,0,1])
var an="varying vec4 frontColor;"+"attribute vec3 aVertex;"+"attribute vec4 aColor;"+"uniform mat4 uView;"+"uniform mat4 uProjection;"+"uniform float pointSize;"+"void main(void) {"+"  frontColor = aColor;"+"  gl_PointSize = pointSize;"+"  gl_Position = uProjection * uView * vec4(aVertex, 1.0);"+"}"
var on="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"void main(void){"+"  gl_FragColor = frontColor;"+"}"
var ln="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec2 aTextureCoord;"+"uniform vec4 color;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform float pointSize;"+"varying vec2 vTextureCoord;"+"void main(void) {"+"  gl_PointSize = pointSize;"+"  frontColor = color;"+"  gl_Position = projection * view * model * vec4(Vertex, 1.0);"+"  vTextureCoord = aTextureCoord;"+"}"
var un="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"varying vec2 vTextureCoord;"+"uniform sampler2D uSampler;"+"uniform int picktype;"+"void main(void){"+"  if(picktype == 0){"+"    gl_FragColor = frontColor;"+"  }"+"  else if(picktype == 1){"+"    float alpha = texture2D(uSampler, vTextureCoord).a;"+"    gl_FragColor = vec4(frontColor.rgb*alpha, alpha);\n"+"  }"+"}"
var fn=/Windows/.test(navigator.userAgent)
var hn="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec3 Normal;"+"attribute vec4 aColor;"+"attribute vec2 aTexture;"+"varying   vec2 vTexture;"+"uniform vec4 color;"+"uniform bool usingMat;"+"uniform vec3 specular;"+"uniform vec3 mat_emissive;"+"uniform vec3 mat_ambient;"+"uniform vec3 mat_specular;"+"uniform float shininess;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform mat4 normalTransform;"+"uniform int lightCount;"+"uniform vec3 falloff;"+"struct Light {"+"  int type;"+"  vec3 color;"+"  vec3 position;"+"  vec3 direction;"+"  float angle;"+"  vec3 halfVector;"+"  float concentration;"+"};"+"uniform Light lights0;"+"uniform Light lights1;"+"uniform Light lights2;"+"uniform Light lights3;"+"uniform Light lights4;"+"uniform Light lights5;"+"uniform Light lights6;"+"uniform Light lights7;"+"Light getLight(int index){"+"  if(index == 0) return lights0;"+"  if(index == 1) return lights1;"+"  if(index == 2) return lights2;"+"  if(index == 3) return lights3;"+"  if(index == 4) return lights4;"+"  if(index == 5) return lights5;"+"  if(index == 6) return lights6;"+"  return lights7;"+"}"+"void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {"+"  float d = length( light.position - ecPos );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  totalAmbient += light.color * attenuation;"+"}"+"void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor = 0.0;"+"  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));"+"  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));"+"  if( nDotVP != 0.0 ){"+"    powerfactor = pow( nDotVH, shininess );"+"  }"+"  col += light.color * nDotVP;"+"  spec += specular * powerfactor;"+"}"+"void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor;"+"   vec3 VP = light.position - ecPos;"+"  float d = length( VP ); "+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0) {"+"    powerfactor = 0.0;"+"  }"+"  else{"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float spotAttenuation;"+"  float powerfactor;"+"  vec3 VP = light.position - ecPos; "+"  vec3 ldir = normalize( -light.direction );"+"  float d = length( VP );"+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ) );"+"  float spotDot = dot( VP, ldir );"+(fn?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {"+"    spotAttenuation = pow( spotDot, light.concentration );"+"  }"+"  else{"+"    spotAttenuation = 0.0;"+"  }"+"  attenuation *= spotAttenuation;"+"")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0 ) {"+"    powerfactor = 0.0;"+"  }"+"  else {"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void main(void) {"+"  vec3 finalAmbient = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalDiffuse = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalSpecular = vec3( 0.0, 0.0, 0.0 );"+"  vec4 col = color;"+"  if(color[0] == -1.0){"+"    col = aColor;"+"  }"+"  vec3 norm = normalize(vec3( normalTransform * vec4( Normal, 0.0 ) ));"+"  vec4 ecPos4 = view * model * vec4(Vertex,1.0);"+"  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;"+"  if( lightCount == 0 ) {"+"    frontColor = col + vec4(mat_specular,1.0);"+"  }"+"  else {"+"    for( int i = 0; i < 8; i++ ) {"+"      Light l = getLight(i);"+"      if( i >= lightCount ){"+"        break;"+"      }"+"      if( l.type == 0 ) {"+"        AmbientLight( finalAmbient, ecPos, l );"+"      }"+"      else if( l.type == 1 ) {"+"        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else if( l.type == 2 ) {"+"        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else {"+"        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"    }"+"   if( usingMat == false ) {"+"     frontColor = vec4("+"       vec3(col) * finalAmbient +"+"       vec3(col) * finalDiffuse +"+"       vec3(col) * finalSpecular,"+"       col[3] );"+"   }"+"   else{"+"     frontColor = vec4( "+"       mat_emissive + "+"       (vec3(col) * mat_ambient * finalAmbient) + "+"       (vec3(col) * finalDiffuse) + "+"       (mat_specular * finalSpecular), "+"       col[3] );"+"    }"+"  }"+"  vTexture.xy = aTexture.xy;"+"  gl_Position = projection * view * model * vec4( Vertex, 1.0 );"+"}"
var cn="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"uniform sampler2D sampler;"+"uniform bool usingTexture;"+"varying vec2 vTexture;"+"void main(void){"+"  if(usingTexture){"+"    gl_FragColor = vec4(texture2D(sampler, vTexture.xy)) * frontColor;"+"  }"+"  else{"+"    gl_FragColor = frontColor;"+"  }"+"}"
function gn(e,t,r,i){var s=Pt.locations[e]
if(s===n){s=b.getUniformLocation(t,r)
Pt.locations[e]=s}if(s!==null){if(i.length===4){b.uniform4fv(s,i)}else if(i.length===3){b.uniform3fv(s,i)}else if(i.length===2){b.uniform2fv(s,i)}else{b.uniform1f(s,i)}}}function pn(e,t,r,i){var s=Pt.locations[e]
if(s===n){s=b.getUniformLocation(t,r)
Pt.locations[e]=s}if(s!==null){if(i.length===4){b.uniform4iv(s,i)}else if(i.length===3){b.uniform3iv(s,i)}else if(i.length===2){b.uniform2iv(s,i)}else{b.uniform1i(s,i)}}}function mn(e,t,r,i,s){var a=Pt.locations[e]
if(a===n){a=b.getUniformLocation(t,r)
Pt.locations[e]=a}if(a!==-1){if(s.length===16){b.uniformMatrix4fv(a,i,s)}else if(s.length===9){b.uniformMatrix3fv(a,i,s)}else{b.uniformMatrix2fv(a,i,s)}}}function dn(e,t,r,i,s){var a=Pt.attributes[e]
if(a===n){a=b.getAttribLocation(t,r)
Pt.attributes[e]=a}if(a!==-1){b.bindBuffer(b.ARRAY_BUFFER,s)
b.vertexAttribPointer(a,i,b.FLOAT,false,0,0)
b.enableVertexAttribArray(a)}}function vn(e,t,r){var i=Pt.attributes[e]
if(i===n){i=b.getAttribLocation(t,r)
Pt.attributes[e]=i}if(i!==-1){b.disableVertexAttribArray(i)}}var yn=function(e,t,r){var n=e.createShader(e.VERTEX_SHADER)
e.shaderSource(n,t)
e.compileShader(n)
if(!e.getShaderParameter(n,e.COMPILE_STATUS)){throw e.getShaderInfoLog(n)}var i=e.createShader(e.FRAGMENT_SHADER)
e.shaderSource(i,r)
e.compileShader(i)
if(!e.getShaderParameter(i,e.COMPILE_STATUS)){throw e.getShaderInfoLog(i)}var s=e.createProgram()
e.attachShader(s,n)
e.attachShader(s,i)
e.linkProgram(s)
if(!e.getProgramParameter(s,e.LINK_STATUS)){throw"Error linking shaders."}return s}
var bn=function(e,t,r,n,i){return{x:e,y:t,w:r,h:n}}
var An=bn
var wn=function(e,t,r,n,i){return{x:e,y:t,w:i?r:r-e,h:i?n:n-t}}
var xn=function(e,t,r,n,i){return{x:e-r/2,y:t-n/2,w:r,h:n}}
var En=function(){}
var Sn=function(){}
var _n=function(){}
var Tn=function(){}
Sn.prototype=new En
Sn.prototype.constructor=Sn
_n.prototype=new En
_n.prototype.constructor=_n
Tn.prototype=new En
Tn.prototype.constructor=Tn
En.prototype.a3DOnlyFunction=i
var Rn={}
var Pn=v.Character=function(e){if(typeof e==="string"&&e.length===1){this.code=e.charCodeAt(0)}else if(typeof e==="number"){this.code=e}else if(e instanceof Pn){this.code=e}else{this.code=NaN}return Rn[this.code]===n?Rn[this.code]=this:Rn[this.code]}
Pn.prototype.toString=function(){return String.fromCharCode(this.code)}
Pn.prototype.valueOf=function(){return this.code}
var Cn=v.PShape=function(e){this.family=e||g.GROUP
this.visible=true
this.style=true
this.children=[]
this.nameTable=[]
this.params=[]
this.name=""
this.image=null
this.matrix=null
this.kind=null
this.close=null
this.width=null
this.height=null
this.parent=null}
Cn.prototype={isVisible:function(){return this.visible},setVisible:function(e){this.visible=e},disableStyle:function(){this.style=false
for(var e=0,t=this.children.length;e<t;e++){this.children[e].disableStyle()}},enableStyle:function(){this.style=true
for(var e=0,t=this.children.length;e<t;e++){this.children[e].enableStyle()}},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(e){this.name=e},getName:function(){return this.name},draw:function(){if(this.visible){this.pre()
this.drawImpl()
this.post()}},drawImpl:function(){if(this.family===g.GROUP){this.drawGroup()}else if(this.family===g.PRIMITIVE){this.drawPrimitive()}else if(this.family===g.GEOMETRY){this.drawGeometry()}else if(this.family===g.PATH){this.drawPath()}},drawPath:function(){var e,t
if(this.vertices.length===0){return}v.beginShape()
if(this.vertexCodes.length===0){if(this.vertices[0].length===2){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1])}}else{for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1],this.vertices[e][2])}}}else{var r=0
if(this.vertices[0].length===2){for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===g.VERTEX){v.vertex(this.vertices[r][0],this.vertices[r][1])
if(this.vertices[r]["moveTo"]===true){Xr[Xr.length-1]["moveTo"]=true}else if(this.vertices[r]["moveTo"]===false){Xr[Xr.length-1]["moveTo"]=false}v.breakShape=false
r++}else if(this.vertexCodes[e]===g.BEZIER_VERTEX){v.bezierVertex(this.vertices[r+0][0],this.vertices[r+0][1],this.vertices[r+1][0],this.vertices[r+1][1],this.vertices[r+2][0],this.vertices[r+2][1])
r+=3}else if(this.vertexCodes[e]===g.CURVE_VERTEX){v.curveVertex(this.vertices[r][0],this.vertices[r][1])
r++}else if(this.vertexCodes[e]===g.BREAK){v.breakShape=true}}}else{for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===g.VERTEX){v.vertex(this.vertices[r][0],this.vertices[r][1],this.vertices[r][2])
if(this.vertices[r]["moveTo"]===true){Xr[Xr.length-1]["moveTo"]=true}else if(this.vertices[r]["moveTo"]===false){Xr[Xr.length-1]["moveTo"]=false}v.breakShape=false}else if(this.vertexCodes[e]===g.BEZIER_VERTEX){v.bezierVertex(this.vertices[r+0][0],this.vertices[r+0][1],this.vertices[r+0][2],this.vertices[r+1][0],this.vertices[r+1][1],this.vertices[r+1][2],this.vertices[r+2][0],this.vertices[r+2][1],this.vertices[r+2][2])
r+=3}else if(this.vertexCodes[e]===g.CURVE_VERTEX){v.curveVertex(this.vertices[r][0],this.vertices[r][1],this.vertices[r][2])
r++}else if(this.vertexCodes[e]===g.BREAK){v.breakShape=true}}}}v.endShape(this.close?g.CLOSE:g.OPEN)},drawGeometry:function(){var e,t
v.beginShape(this.kind)
if(this.style){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e])}}else{for(e=0,t=this.vertices.length;e<t;e++){var r=this.vertices[e]
if(r[2]===0){v.vertex(r[0],r[1])}else{v.vertex(r[0],r[1],r[2])}}}v.endShape()},drawGroup:function(){for(var e=0,t=this.children.length;e<t;e++){this.children[e].draw()}},drawPrimitive:function(){if(this.kind===g.POINT){v.point(this.params[0],this.params[1])}else if(this.kind===g.LINE){if(this.params.length===4){v.line(this.params[0],this.params[1],this.params[2],this.params[3])}else{v.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}}else if(this.kind===g.TRIANGLE){v.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===g.QUAD){v.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])}else if(this.kind===g.RECT){if(this.image!==null){v.imageMode(g.CORNER)
v.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3])}else{v.rectMode(g.CORNER)
v.rect(this.params[0],this.params[1],this.params[2],this.params[3])}}else if(this.kind===g.ELLIPSE){v.ellipseMode(g.CORNER)
v.ellipse(this.params[0],this.params[1],this.params[2],this.params[3])}else if(this.kind===g.ARC){v.ellipseMode(g.CORNER)
v.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===g.BOX){if(this.params.length===1){v.box(this.params[0])}else{v.box(this.params[0],this.params[1],this.params[2])}}else if(this.kind===g.SPHERE){v.sphere(this.params[0])}},pre:function(){if(this.matrix){v.pushMatrix()
b.transform(this.matrix.elements[0],this.matrix.elements[3],this.matrix.elements[1],this.matrix.elements[4],this.matrix.elements[2],this.matrix.elements[5])}if(this.style){v.pushStyle()
this.styles()}},post:function(){if(this.matrix){v.popMatrix()}if(this.style){v.popStyle()}},styles:function(){if(this.stroke){v.stroke(this.strokeColor)
v.strokeWeight(this.strokeWeight)
v.strokeCap(this.strokeCap)
v.strokeJoin(this.strokeJoin)}else{v.noStroke()}if(this.fill){v.fill(this.fillColor)}else{v.noFill()}},getChild:function(e){var t,r
if(typeof e==="number"){return this.children[e]}var n
if(e===""||this.name===e){return this}if(this.nameTable.length>0){for(t=0,r=this.nameTable.length;t<r||n;t++){if(this.nameTable[t].getName===e){n=this.nameTable[t]
break}}if(n){return n}}for(t=0,r=this.children.length;t<r;t++){n=this.children[t].getChild(e)
if(n){return n}}return null},getChildCount:function(){return this.children.length},addChild:function(e){this.children.push(e)
e.parent=this
if(e.getName()!==null){this.addName(e.getName(),e)}},addName:function(e,t){if(this.parent!==null){this.parent.addName(e,t)}else{this.nameTable.push([e,t])}},translate:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.translate(arguments[0],arguments[1])}else{this.checkMatrix(3)
this.matrix.translate(arguments[0],arguments[1],0)}},checkMatrix:function(e){if(this.matrix===null){if(e===2){this.matrix=new v.PMatrix2D}else{this.matrix=new v.PMatrix3D}}else if(e===3&&this.matrix instanceof v.PMatrix2D){this.matrix=new v.PMatrix3D}},rotateX:function(e){this.rotate(e,1,0,0)},rotateY:function(e){this.rotate(e,0,1,0)},rotateZ:function(e){this.rotate(e,0,0,1)},rotate:function(){if(arguments.length===1){this.checkMatrix(2)
this.matrix.rotate(arguments[0])}else{this.checkMatrix(3)
this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3])}},scale:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1])}else if(arguments.length===3){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1],arguments[2])}else{this.checkMatrix(2)
this.matrix.scale(arguments[0])}},resetMatrix:function(){this.checkMatrix(2)
this.matrix.reset()},applyMatrix:function(e){if(arguments.length===1){this.applyMatrix(e.elements[0],e.elements[1],0,e.elements[2],e.elements[3],e.elements[4],0,e.elements[5],0,0,1,0,0,0,0,1)}else if(arguments.length===6){this.checkMatrix(2)
this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)}else if(arguments.length===16){this.checkMatrix(3)
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15])}}}
var Ln=v.PShapeSVG=function(){v.PShape.call(this)
if(arguments.length===1){this.element=arguments[0]
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=g.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=g.SQUARE
this.strokeJoin=g.MITER
this.strokeGradient=null
this.strokeGradientPaint=null
this.strokeName=null
this.strokeOpacity=1
this.fill=true
this.fillColor=g.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillName=null
this.fillOpacity=1
if(this.element.getName()!=="svg"){throw"root is not <svg>, it's <"+this.element.getName()+">"}}else if(arguments.length===2){if(typeof arguments[1]==="string"){if(arguments[1].indexOf(".svg")>-1){this.element=new v.XMLElement(null,arguments[1])
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=g.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=g.SQUARE
this.strokeJoin=g.MITER
this.strokeGradient=""
this.strokeGradientPaint=""
this.strokeName=""
this.strokeOpacity=1
this.fill=true
this.fillColor=g.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillOpacity=1}}else{if(arguments[0]){this.element=arguments[1]
this.vertexCodes=arguments[0].vertexCodes.slice()
this.vertices=arguments[0].vertices.slice()
this.stroke=arguments[0].stroke
this.strokeColor=arguments[0].strokeColor
this.strokeWeight=arguments[0].strokeWeight
this.strokeCap=arguments[0].strokeCap
this.strokeJoin=arguments[0].strokeJoin
this.strokeGradient=arguments[0].strokeGradient
this.strokeGradientPaint=arguments[0].strokeGradientPaint
this.strokeName=arguments[0].strokeName
this.fill=arguments[0].fill
this.fillColor=arguments[0].fillColor
this.fillGradient=arguments[0].fillGradient
this.fillGradientPaint=arguments[0].fillGradientPaint
this.fillName=arguments[0].fillName
this.strokeOpacity=arguments[0].strokeOpacity
this.fillOpacity=arguments[0].fillOpacity
this.opacity=arguments[0].opacity}}}this.name=this.element.getStringAttribute("id")
var e=this.element.getStringAttribute("display","inline")
this.visible=e!=="none"
var t=this.element.getAttribute("transform")
if(t){this.matrix=this.parseMatrix(t)}var r=this.element.getStringAttribute("viewBox")
if(r!==null){var n=r.split(" ")
this.width=n[2]
this.height=n[3]}var i=this.element.getStringAttribute("width")
var s=this.element.getStringAttribute("height")
if(i!==null){this.width=this.parseUnitSize(i)
this.height=this.parseUnitSize(s)}else{if(this.width===0||this.height===0){this.width=1
this.height=1
throw"The width and/or height is not "+"readable in the <svg> tag of this file."}}this.parseColors(this.element)
this.parseChildren(this.element)}
Ln.prototype=new Cn
Ln.prototype.parseMatrix=function(){function e(e){var t=[]
e.replace(/\((.*?)\)/,function(){return function(e,r){t=r.replace(/,+/g," ").split(/\s+/)}}())
return t}return function(t){this.checkMatrix(2)
var r=[]
t.replace(/\s*(\w+)\((.*?)\)/g,function(e){r.push(v.trim(e))})
if(r.length===0){return null}for(var n=0,i=r.length;n<i;n++){var s=e(r[n])
if(r[n].indexOf("matrix")!==-1){this.matrix.set(s[0],s[2],s[4],s[1],s[3],s[5])}else if(r[n].indexOf("translate")!==-1){var a=s[0]
var o=s.length===2?s[1]:0
this.matrix.translate(a,o)}else if(r[n].indexOf("scale")!==-1){var l=s[0]
var u=s.length===2?s[1]:s[0]
this.matrix.scale(l,u)}else if(r[n].indexOf("rotate")!==-1){var f=s[0]
if(s.length===1){this.matrix.rotate(v.angleMode==="degrees"?f:v.radians(f))}else if(s.length===3){this.matrix.translate(s[1],s[2])
this.matrix.rotate(v.angleMode==="degrees"?s[0]:v.radians(s[0]))
this.matrix.translate(-s[1],-s[2])}}else if(r[n].indexOf("skewX")!==-1){this.matrix.skewX(parseFloat(s[0]))}else if(r[n].indexOf("skewY")!==-1){this.matrix.skewY(s[0])}}return this.matrix}}()
Ln.prototype.parseChildren=function(e){var t=e.getChildren()
var r=new v.PShape
for(var n=0,i=t.length;n<i;n++){var s=this.parseChild(t[n])
if(s){r.addChild(s)}}this.children.push(r)}
Ln.prototype.getName=function(){return this.name}
Ln.prototype.parseChild=function(e){var t=e.getName()
var r
if(t==="g"){r=new Ln(this,e)}else if(t==="defs"){r=new Ln(this,e)}else if(t==="line"){r=new Ln(this,e)
r.parseLine()}else if(t==="circle"){r=new Ln(this,e)
r.parseEllipse(true)}else if(t==="ellipse"){r=new Ln(this,e)
r.parseEllipse(false)}else if(t==="rect"){r=new Ln(this,e)
r.parseRect()}else if(t==="polygon"){r=new Ln(this,e)
r.parsePoly(true)}else if(t==="polyline"){r=new Ln(this,e)
r.parsePoly(false)}else if(t==="path"){r=new Ln(this,e)
r.parsePath()}else if(t==="radialGradient"){d("PShapeSVG.prototype.parseChild, name = radialGradient")}else if(t==="linearGradient"){d("PShapeSVG.prototype.parseChild, name = linearGradient")}else if(t==="text"){d("PShapeSVG.prototype.parseChild, name = text")}else if(t==="filter"){d("PShapeSVG.prototype.parseChild, name = filter")}else if(t==="mask"){d("PShapeSVG.prototype.parseChild, name = mask")}else{i()}return r}
Ln.prototype.parsePath=function(){this.family=g.PATH
this.kind=0
var e=[]
var t
var r=v.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "))
if(r===null){return}r=v.__toCharArray(r)
var n=0,i=0,s=0,a=0,o=0,l=0,u=0,f=0,h=0,c=0,p=0,m=0,d=0,y=0,b=0,A=0
var w=""
var x=[]
var E=false
var S
var _
var T,R
while(b<r.length){A=r[b].valueOf()
if(A>=65&&A<=90||A>=97&&A<=122){T=b
b++
if(b<r.length){x=[]
A=r[b].valueOf()
while(!(A>=65&&A<=90||A>=97&&A<=100||A>=102&&A<=122)&&E===false){if(A===32){if(w!==""){x.push(parseFloat(w))
w=""}b++}else if(A===45){if(r[b-1].valueOf()===101){w+=r[b].toString()
b++}else{if(w!==""){x.push(parseFloat(w))}w=r[b].toString()
b++}}else{w+=r[b].toString()
b++}if(b===r.length){E=true}else{A=r[b].valueOf()}}}if(w!==""){x.push(parseFloat(w))
w=""}_=r[T]
A=_.valueOf()
if(A===77){if(x.length>=2&&x.length%2===0){n=x[0]
i=x[1]
this.parsePathMoveto(n,i)
if(x.length>2){for(T=2,R=x.length;T<R;T+=2){n=x[T]
i=x[T+1]
this.parsePathLineto(n,i)}}}}else if(A===109){if(x.length>=2&&x.length%2===0){n+=x[0]
i+=x[1]
this.parsePathMoveto(n,i)
if(x.length>2){for(T=2,R=x.length;T<R;T+=2){n+=x[T]
i+=x[T+1]
this.parsePathLineto(n,i)}}}}else if(A===76){if(x.length>=2&&x.length%2===0){for(T=0,R=x.length;T<R;T+=2){n=x[T]
i=x[T+1]
this.parsePathLineto(n,i)}}}else if(A===108){if(x.length>=2&&x.length%2===0){for(T=0,R=x.length;T<R;T+=2){n+=x[T]
i+=x[T+1]
this.parsePathLineto(n,i)}}}else if(A===72){for(T=0,R=x.length;T<R;T++){n=x[T]
this.parsePathLineto(n,i)}}else if(A===104){for(T=0,R=x.length;T<R;T++){n+=x[T]
this.parsePathLineto(n,i)}}else if(A===86){for(T=0,R=x.length;T<R;T++){i=x[T]
this.parsePathLineto(n,i)}}else if(A===118){for(T=0,R=x.length;T<R;T++){i+=x[T]
this.parsePathLineto(n,i)}}else if(A===67){if(x.length>=6&&x.length%6===0){for(T=0,R=x.length;T<R;T+=6){o=x[T]
u=x[T+1]
l=x[T+2]
f=x[T+3]
h=x[T+4]
c=x[T+5]
this.parsePathCurveto(o,u,l,f,h,c)
n=h
i=c}}}else if(A===99){if(x.length>=6&&x.length%6===0){for(T=0,R=x.length;T<R;T+=6){o=n+x[T]
u=i+x[T+1]
l=n+x[T+2]
f=i+x[T+3]
h=n+x[T+4]
c=i+x[T+5]
this.parsePathCurveto(o,u,l,f,h,c)
n=h
i=c}}}else if(A===83){if(x.length>=4&&x.length%4===0){for(T=0,R=x.length;T<R;T+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){p=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
d=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=d+(d-p)
u=y+(y-m)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=x[T]
f=x[T+1]
h=x[T+2]
c=x[T+3]
this.parsePathCurveto(o,u,l,f,h,c)
n=h
i=c}}}else if(A===115){if(x.length>=4&&x.length%4===0){for(T=0,R=x.length;T<R;T+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){p=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
d=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=d+(d-p)
u=y+(y-m)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=n+x[T]
f=i+x[T+1]
h=n+x[T+2]
c=i+x[T+3]
this.parsePathCurveto(o,u,l,f,h,c)
n=h
i=c}}}else if(A===81){if(x.length>=4&&x.length%4===0){for(T=0,R=x.length;T<R;T+=4){s=x[T]
a=x[T+1]
h=x[T+2]
c=x[T+3]
this.parsePathQuadto(n,i,s,a,h,c)
n=h
i=c}}}else if(A===113){if(x.length>=4&&x.length%4===0){for(T=0,R=x.length;T<R;T+=4){s=n+x[T]
a=i+x[T+1]
h=n+x[T+2]
c=i+x[T+3]
this.parsePathQuadto(n,i,s,a,h,c)
n=h
i=c}}}else if(A===84){if(x.length>=2&&x.length%2===0){for(T=0,R=x.length;T<R;T+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){p=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
d=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
s=d+(d-p)
a=y+(y-m)}else{s=n
a=i}h=x[T]
c=x[T+1]
this.parsePathQuadto(n,i,s,a,h,c)
n=h
i=c}}}else if(A===116){if(x.length>=2&&x.length%2===0){for(T=0,R=x.length;T<R;T+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){p=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
d=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
s=d+(d-p)
a=y+(y-m)}else{s=n
a=i}h=n+x[T]
c=i+x[T+1]
this.parsePathQuadto(n,i,s,a,h,c)
n=h
i=c}}}else if(A===90||A===122){this.close=true}S=_.toString()}else{b++}}}
Ln.prototype.parsePathQuadto=function(e,t,r,n,i,s){if(this.vertices.length>0){this.parsePathCode(g.BEZIER_VERTEX)
this.parsePathVertex(e+(r-e)*2/3,t+(n-t)*2/3)
this.parsePathVertex(i+(r-i)*2/3,s+(n-s)*2/3)
this.parsePathVertex(i,s)}else{throw"Path must start with M/m"}}
Ln.prototype.parsePathCurveto=function(e,t,r,n,i,s){if(this.vertices.length>0){this.parsePathCode(g.BEZIER_VERTEX)
this.parsePathVertex(e,t)
this.parsePathVertex(r,n)
this.parsePathVertex(i,s)}else{throw"Path must start with M/m"}}
Ln.prototype.parsePathLineto=function(e,t){if(this.vertices.length>0){this.parsePathCode(g.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=false}else{throw"Path must start with M/m"}}
Ln.prototype.parsePathMoveto=function(e,t){if(this.vertices.length>0){this.parsePathCode(g.BREAK)}this.parsePathCode(g.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=true}
Ln.prototype.parsePathVertex=function(e,t){var r=[]
r[0]=e
r[1]=t
this.vertices.push(r)}
Ln.prototype.parsePathCode=function(e){this.vertexCodes.push(e)}
Ln.prototype.parsePoly=function(e){this.family=g.PATH
this.close=e
var t=v.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "))
if(t!==null){var r=t.split(" ")
if(r.length%2===0){for(var n=0,i=r.length;n<i;n++){var s=[]
s[0]=r[n]
s[1]=r[++n]
this.vertices.push(s)}}else{throw"Error parsing polygon points: odd number of coordinates provided"}}}
Ln.prototype.parseRect=function(){this.kind=g.RECT
this.family=g.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x")
this.params[1]=this.element.getFloatAttribute("y")
this.params[2]=this.element.getFloatAttribute("width")
this.params[3]=this.element.getFloatAttribute("height")
if(this.params[2]<0||this.params[3]<0){throw"svg error: negative width or height found while parsing <rect>"}}
Ln.prototype.parseEllipse=function(e){this.kind=g.ELLIPSE
this.family=g.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("cx")|0
this.params[1]=this.element.getFloatAttribute("cy")|0
var t,r
if(e){t=r=this.element.getFloatAttribute("r")
if(t<0){throw"svg error: negative radius found while parsing <circle>"}}else{t=this.element.getFloatAttribute("rx")
r=this.element.getFloatAttribute("ry")
if(t<0||r<0){throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"}}this.params[0]-=t
this.params[1]-=r
this.params[2]=t*2
this.params[3]=r*2}
Ln.prototype.parseLine=function(){this.kind=g.LINE
this.family=g.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x1")
this.params[1]=this.element.getFloatAttribute("y1")
this.params[2]=this.element.getFloatAttribute("x2")
this.params[3]=this.element.getFloatAttribute("y2")}
Ln.prototype.parseColors=function(e){if(e.hasAttribute("opacity")){this.setOpacity(e.getAttribute("opacity"))}if(e.hasAttribute("stroke")){this.setStroke(e.getAttribute("stroke"))}if(e.hasAttribute("stroke-width")){this.setStrokeWeight(e.getAttribute("stroke-width"))}if(e.hasAttribute("stroke-linejoin")){this.setStrokeJoin(e.getAttribute("stroke-linejoin"))}if(e.hasAttribute("stroke-linecap")){this.setStrokeCap(e.getStringAttribute("stroke-linecap"))}if(e.hasAttribute("fill")){this.setFill(e.getStringAttribute("fill"))}if(e.hasAttribute("style")){var t=e.getStringAttribute("style")
var r=t.toString().split(";")
for(var n=0,i=r.length;n<i;n++){var s=v.trim(r[n].split(":"))
if(s[0]==="fill"){this.setFill(s[1])}else if(s[0]==="fill-opacity"){this.setFillOpacity(s[1])}else if(s[0]==="stroke"){this.setStroke(s[1])}else if(s[0]==="stroke-width"){this.setStrokeWeight(s[1])}else if(s[0]==="stroke-linecap"){this.setStrokeCap(s[1])}else if(s[0]==="stroke-linejoin"){this.setStrokeJoin(s[1])}else if(s[0]==="stroke-opacity"){this.setStrokeOpacity(s[1])}else if(s[0]==="opacity"){this.setOpacity(s[1])}}}}
Ln.prototype.setFillOpacity=function(e){this.fillOpacity=parseFloat(e)
this.fillColor=this.fillOpacity*255<<24|this.fillColor&16777215}
Ln.prototype.setFill=function(e){var t=this.fillColor&4278190080
if(e==="none"){this.fill=false}else if(e.indexOf("#")===0){this.fill=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.fillColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.fill=true
this.fillColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.fillName=e.substring(5,e.length-1)}else if(x[e]){this.fill=true
this.fillColor=t|parseInt(x[e].substring(1),16)&16777215}}
Ln.prototype.setOpacity=function(e){this.strokeColor=parseFloat(e)*255<<24|this.strokeColor&16777215
this.fillColor=parseFloat(e)*255<<24|this.fillColor&16777215}
Ln.prototype.setStroke=function(e){var t=this.strokeColor&4278190080
if(e==="none"){this.stroke=false}else if(e.charAt(0)==="#"){this.stroke=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.strokeColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.stroke=true
this.strokeColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.strokeName=e.substring(5,e.length-1)}else if(x[e]){this.stroke=true
this.strokeColor=t|parseInt(x[e].substring(1),16)&16777215}}
Ln.prototype.setStrokeWeight=function(e){this.strokeWeight=this.parseUnitSize(e)}
Ln.prototype.setStrokeJoin=function(e){if(e==="miter"){this.strokeJoin=g.MITER}else if(e==="round"){this.strokeJoin=g.ROUND}else if(e==="bevel"){this.strokeJoin=g.BEVEL}}
Ln.prototype.setStrokeCap=function(e){if(e==="butt"){this.strokeCap=g.SQUARE}else if(e==="round"){this.strokeCap=g.ROUND}else if(e==="square"){this.strokeCap=g.PROJECT}}
Ln.prototype.setStrokeOpacity=function(e){this.strokeOpacity=parseFloat(e)
this.strokeColor=this.strokeOpacity*255<<24|this.strokeColor&16777215}
Ln.prototype.parseRGB=function(e){var t=e.substring(e.indexOf("(")+1,e.indexOf(")"))
var r=t.split(", ")
return r[0]<<16|r[1]<<8|r[2]}
Ln.prototype.parseUnitSize=function(e){var t=e.length-2
if(t<0){return e}if(e.indexOf("pt")===t){return parseFloat(e.substring(0,t))*1.25}if(e.indexOf("pc")===t){return parseFloat(e.substring(0,t))*15}if(e.indexOf("mm")===t){return parseFloat(e.substring(0,t))*3.543307}if(e.indexOf("cm")===t){return parseFloat(e.substring(0,t))*35.43307}if(e.indexOf("in")===t){return parseFloat(e.substring(0,t))*90}if(e.indexOf("px")===t){return parseFloat(e.substring(0,t))}return parseFloat(e)}
v.shape=function(e,t,r,n,i){if(arguments.length>=1&&arguments[0]!==null){if(e.isVisible()){v.pushMatrix()
if(Qr===g.CENTER){if(arguments.length===5){v.translate(t-n/2,r-i/2)
v.scale(n/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t-e.getWidth()/2,-e.getHeight()/2)}else{v.translate(-e.getWidth()/2,-e.getHeight()/2)}}else if(Qr===g.CORNER){if(arguments.length===5){v.translate(t,r)
v.scale(n/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,r)}}else if(Qr===g.CORNERS){if(arguments.length===5){n-=t
i-=r
v.translate(t,r)
v.scale(n/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,r)}}e.draw()
if(arguments.length===1&&Qr===g.CENTER||arguments.length>1){v.popMatrix()}}}}
v.shapeMode=function(e){Qr=e}
v.loadShape=function(e){if(arguments.length===1){if(e.indexOf(".svg")>-1){return new Ln(null,e)}}return null}
var In=function(e,t,r,n,i){this.fullName=e||""
this.name=t||""
this.namespace=r||""
this.value=n
this.type=i}
In.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(e){this.value=e}}
var Dn=v.XMLElement=function(){this.attributes=[]
this.children=[]
this.fullName=null
this.name=null
this.namespace=""
this.content=null
this.parent=null
this.lineNr=""
this.systemID=""
this.type="ELEMENT"
if(arguments.length===4){this.fullName=arguments[0]||""
if(arguments[1]){this.name=arguments[1]}else{var e=this.fullName.indexOf(":")
if(e>=0){this.name=this.fullName.substring(e+1)}else{this.name=this.fullName}}this.namespace=arguments[1]
this.lineNr=arguments[3]
this.systemID=arguments[2]}else if(arguments.length===2&&arguments[1].indexOf(".")>-1){this.parse(arguments[arguments.length-1])}else if(arguments.length===1&&typeof arguments[0]==="string"){this.parse(arguments[0])}}
Dn.prototype={parse:function(e){var t
try{var r=e.substring(e.length-4)
if(r===".xml"||r===".svg"){e=a(e)}t=(new DOMParser).parseFromString(e,"text/xml")
var n=t.documentElement
if(n){this.parseChildrenRecursive(null,n)}else{throw"Error loading document"}return this}catch(i){throw i}},parseChildrenRecursive:function(e,t){var r,n,i,s,a,o
if(!e){this.fullName=t.localName
this.name=t.nodeName
r=this}else{r=new Dn(t.localName,t.nodeName,"","")
r.parent=e}if(t.nodeType===3&&t.textContent!==""){return this.createPCDataElement(t.textContent)}for(s=0,a=t.attributes.length;s<a;s++){i=t.attributes[s]
n=new In(i.getname,i.nodeName,i.namespaceURI,i.nodeValue,i.nodeType)
r.attributes.push(n)}for(s=0,a=t.childNodes.length;s<a;s++){var l=t.childNodes[s]
if(l.nodeType===1||l.nodeType===3){o=r.parseChildrenRecursive(r,l)
if(o!==null){r.children.push(o)}}}return r},createElement:function(){if(arguments.length===2){return new Dn(arguments[0],arguments[1],null,null)}return new Dn(arguments[0],arguments[1],arguments[2],arguments[3])},createPCDataElement:function(e){if(e.replace(/^\s+$/g,"")===""){return null}var t=new Dn
t.content=e
t.type="TEXT"
return t},hasAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])!==null}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])!==null}},equals:function(e){if(!(e instanceof Dn)){return false}var t,r
if(this.name!==e.getLocalName()){return false}if(this.attributes.length!==e.getAttributeCount()){return false}if(this.attributes.length!==e.attributes.length){return false}var n,i,s,a,o
for(t=0,r=this.attributes.length;t<r;t++){n=this.attributes[t].getName()
i=this.attributes[t].getNamespace()
o=e.findAttribute(n,i)
if(o===null){return false}if(this.attributes[t].getValue()!==o.getValue()){return false}if(this.attributes[t].getType()!==o.getType()){return false}}if(this.children.length!==e.getChildCount()){return false}if(this.children.length>0){var l,u
for(t=0,r=this.children.length;t<r;t++){l=this.getChild(t)
u=e.getChild(t)
if(!l.equals(u)){return false}}return true}return this.content===e.content},getContent:function(){if(this.type==="TEXT"){return this.content}var e=this.children
if(e.length===1&&e[0].type==="TEXT"){return e[0].content}return null},getAttribute:function(){var e
if(arguments.length===2){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return arguments[1]}else if(arguments.length===1){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return null}else if(arguments.length===3){e=this.findAttribute(arguments[0],arguments[1])
if(e){return e.getValue()}return arguments[2]}},getStringAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(e){return this.getStringAttribute(e)},getFloatAttribute:function(){if(arguments.length===1){return parseFloat(this.getAttribute(arguments[0],0))}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(e){return this.getFloatAttribute(e)},getIntAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0],0)}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(e){return this.getIntAttribute(e)},hasChildren:function(){return this.children.length>0},addChild:function(e){if(e!==null){e.parent=this
this.children.push(e)}},insertChild:function(e,t){if(e){if(e.getLocalName()===null&&!this.hasChildren()){var r=this.children[this.children.length-1]
if(r.getLocalName()===null){r.setContent(r.getContent()+e.getContent())
return}}e.parent=this
this.children.splice(t,0,e)}},getChild:function(){if(typeof arguments[0]==="number"){return this.children[arguments[0]]}if(arguments[0].indexOf("/")!==-1){this.getChildRecursive(arguments[0].split("/"),0)
return null}var e,t
for(var r=0,n=this.getChildCount();r<n;r++){e=this.getChild(r)
t=e.getName()
if(t!==null&&t===arguments[0]){return e}}return null},getChildren:function(){if(arguments.length===1){if(typeof arguments[0]==="number"){return this.getChild(arguments[0])}if(arguments[0].indexOf("/")!==-1){return this.getChildrenRecursive(arguments[0].split("/"),0)}var e=[]
var t,r
for(var n=0,i=this.getChildCount();n<i;n++){t=this.getChild(n)
r=t.getName()
if(r!==null&&r===arguments[0]){e.push(t)}}return e}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(e,t){var r,n
for(var i=0,s=this.getChildCount();i<s;i++){r=this.getChild(i)
n=r.getName()
if(n!==null&&n===e[t]){if(t===e.length-1){return r}t+=1
return r.getChildRecursive(e,t)}}return null},getChildrenRecursive:function(e,t){if(t===e.length-1){return this.getChildren(e[t])}var r=this.getChildren(e[t])
var n=[]
for(var i=0;i<r.length;i++){n=n.concat(r[i].getChildrenRecursive(e,t+1))}return n},isLeaf:function(){return!this.hasChildren()},listChildren:function(){var e=[]
for(var t=0,r=this.children.length;t<r;t++){e.push(this.getChild(t).getName())}return e},removeAttribute:function(e,t){this.namespace=t||""
for(var r=0,n=this.attributes.length;r<n;r++){if(this.attributes[r].getName()===e&&this.attributes[r].getNamespace()===this.namespace){this.attributes.splice(r,1)
break}}},removeChild:function(e){if(e){for(var t=0,r=this.children.length;t<r;t++){if(this.children[t].equals(e)){this.children.splice(t,1)
break}}}},removeChildAtIndex:function(e){if(this.children.length>e){this.children.splice(e,1)}},findAttribute:function(e,t){this.namespace=t||""
for(var r=0,n=this.attributes.length;r<n;r++){if(this.attributes[r].getName()===e&&this.attributes[r].getNamespace()===this.namespace){return this.attributes[r]}}return null},setAttribute:function(){var e
if(arguments.length===3){var t=arguments[0].indexOf(":")
var r=arguments[0].substring(t+1)
e=this.findAttribute(r,arguments[1])
if(e){e.setValue(arguments[2])}else{e=new In(arguments[0],r,arguments[1],arguments[2],"CDATA")
this.attributes.push(e)}}else{e=this.findAttribute(arguments[0])
if(e){e.setValue(arguments[1])}else{e=new In(arguments[0],arguments[0],null,arguments[1],"CDATA")
this.attributes.push(e)}}},setString:function(e,t){this.setAttribute(e,t)},setInt:function(e,t){this.setAttribute(e,t)},setFloat:function(e,t){this.setAttribute(e,t)},setContent:function(e){if(this.children.length>0){C.debug("Tried to set content for XMLElement with children")}this.content=e},setName:function(){if(arguments.length===1){this.name=arguments[0]
this.fullName=arguments[0]
this.namespace=null}else{var e=arguments[0].indexOf(":")
if(arguments[1]===null||e<0){this.name=arguments[0]}else{this.name=arguments[0].substring(e+1)}this.fullName=arguments[0]
this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if(this.type==="TEXT"){return this.content}var e=(this.namespace!==""&&this.namespace!==this.name?this.namespace+":":"")+this.name
var t="<"+e
var r,n
for(r=0;r<this.attributes.length;r++){var i=this.attributes[r]
t+=" "+i.getName()+"="+'"'+i.getValue()+'"'}if(this.children.length===0){if(this.content===""){t+="/>"}else{t+=">"+this.content+"</"+e+">"}}else{t+=">"
for(n=0;n<this.children.length;n++){t+=this.children[n].toString()}t+="</"+e+">"}return t}}
Dn.parse=function(e){var t=new Dn
t.parse(e)
return t}
var Nn=function(e){var t=0
for(var n=0;n<e.length;n++){if(n!==0){t=r.max(t,r.abs(e[n]))}else{t=r.abs(e[n])}}var i=(t+"").indexOf(".")
if(i===0){i=1}else if(i===-1){i=(t+"").length}return i}
var Mn=v.PMatrix2D=function(){if(arguments.length===0){this.reset()}else if(arguments.length===1&&arguments[0]instanceof Mn){this.set(arguments[0].array())}else if(arguments.length===6){this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
Mn.prototype={set:function(){if(arguments.length===6){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else if(arguments.length===1&&arguments[0]instanceof Mn){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new Mn
e.set(this.elements)
return e},reset:function(){this.set([1,0,0,0,1,0])},array:function as(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2]
this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var r,n
if(e instanceof y){r=e.x
n=e.y
if(!t){t=new y}}else if(e instanceof Array){r=e[0]
n=e[1]
if(!t){t=[]}}if(t instanceof Array){t[0]=this.elements[0]*r+this.elements[1]*n+this.elements[2]
t[1]=this.elements[3]*r+this.elements[4]*n+this.elements[5]}else if(t instanceof y){t.x=this.elements[0]*r+this.elements[1]*n+this.elements[2]
t.y=this.elements[3]*r+this.elements[4]*n+this.elements[5]
t.z=0}return t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(r.abs(e)>g.MIN_INT){var t=this.elements[0]
var n=this.elements[1]
var i=this.elements[2]
var s=this.elements[3]
var a=this.elements[4]
var o=this.elements[5]
this.elements[0]=a/e
this.elements[3]=-s/e
this.elements[1]=-n/e
this.elements[4]=t/e
this.elements[2]=(n*o-a*i)/e
this.elements[5]=(s*i-t*o)/e
return true}return false},scale:function(e,t){if(e&&!t){t=e}if(e&&t){this.elements[0]*=e
this.elements[1]*=t
this.elements[3]*=e
this.elements[4]*=t}},invScale:function(e,t){if(e&&!t){t=e}this.scale(1/e,1/t)},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Mn){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,this.elements[2],0,0,this.elements[5]]
var r=0
for(var n=0;n<2;n++){for(var i=0;i<3;i++,r++){t[r]+=this.elements[n*3+0]*e[i+0]+this.elements[n*3+1]*e[i+3]}}this.elements=t.slice()},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Mn){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1]
t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4]
t[0]=this.elements[0]*e[0]+this.elements[3]*e[1]
t[3]=this.elements[0]*e[3]+this.elements[3]*e[4]
t[1]=this.elements[1]*e[0]+this.elements[4]*e[1]
t[4]=this.elements[1]*e[3]+this.elements[4]*e[4]
this.elements=t.slice()},rotate:function(e){var t=v.cos(e)
var r=v.sin(e)
var n=this.elements[0]
var i=this.elements[1]
this.elements[0]=t*n+r*i
this.elements[1]=-r*n+t*i
n=this.elements[3]
i=this.elements[4]
this.elements[3]=t*n+r*i
this.elements[4]=-r*n+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-(v.angleMode==="degrees"?180:r.PI))},print:function(){var e=Nn(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+"\n"+v.nfs(this.elements[3],e,4)+" "+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+"\n\n"
v.println(t)}}
var On=v.PMatrix3D=function(){this.reset()}
On.prototype={set:function(){if(arguments.length===16){this.elements=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof On){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new On
e.set(this.elements)
return e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function os(){return this.elements.slice()},translate:function(e,t,r){if(r===n){r=0}this.elements[3]+=e*this.elements[0]+t*this.elements[1]+r*this.elements[2]
this.elements[7]+=e*this.elements[4]+t*this.elements[5]+r*this.elements[6]
this.elements[11]+=e*this.elements[8]+t*this.elements[9]+r*this.elements[10]
this.elements[15]+=e*this.elements[12]+t*this.elements[13]+r*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1]
this.elements[1]=e
e=this.elements[8]
this.elements[8]=this.elements[2]
this.elements[2]=e
e=this.elements[6]
this.elements[6]=this.elements[9]
this.elements[9]=e
e=this.elements[3]
this.elements[3]=this.elements[12]
this.elements[12]=e
e=this.elements[7]
this.elements[7]=this.elements[13]
this.elements[13]=e
e=this.elements[11]
this.elements[11]=this.elements[14]
this.elements[14]=e},mult:function(e,t){var r,n,i,s
if(e instanceof y){r=e.x
n=e.y
i=e.z
s=1
if(!t){t=new y}}else if(e instanceof Array){r=e[0]
n=e[1]
i=e[2]
s=e[3]||1
if(!t||t.length!==3&&t.length!==4){t=[0,0,0]}}if(t instanceof Array){if(t.length===3){t[0]=this.elements[0]*r+this.elements[1]*n+this.elements[2]*i+this.elements[3]
t[1]=this.elements[4]*r+this.elements[5]*n+this.elements[6]*i+this.elements[7]
t[2]=this.elements[8]*r+this.elements[9]*n+this.elements[10]*i+this.elements[11]}else if(t.length===4){t[0]=this.elements[0]*r+this.elements[1]*n+this.elements[2]*i+this.elements[3]*s
t[1]=this.elements[4]*r+this.elements[5]*n+this.elements[6]*i+this.elements[7]*s
t[2]=this.elements[8]*r+this.elements[9]*n+this.elements[10]*i+this.elements[11]*s
t[3]=this.elements[12]*r+this.elements[13]*n+this.elements[14]*i+this.elements[15]*s}}if(t instanceof y){t.x=this.elements[0]*r+this.elements[1]*n+this.elements[2]*i+this.elements[3]
t.y=this.elements[4]*r+this.elements[5]*n+this.elements[6]*i+this.elements[7]
t.z=this.elements[8]*r+this.elements[9]*n+this.elements[10]*i+this.elements[11]}return t},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof On){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var r=0
for(var n=0;n<4;n++){for(var i=0;i<4;i++,r++){t[r]+=this.elements[i+0]*e[n*4+0]+this.elements[i+4]*e[n*4+1]+this.elements[i+8]*e[n*4+2]+this.elements[i+12]*e[n*4+3]}}this.elements=t.slice()},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof On){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var r=0
for(var n=0;n<4;n++){for(var i=0;i<4;i++,r++){t[r]+=this.elements[n*4+0]*e[i+0]+this.elements[n*4+1]*e[i+4]+this.elements[n*4+2]*e[i+8]+this.elements[n*4+3]*e[i+12]}}this.elements=t.slice()},rotate:function(e,t,r,n){if(!r){this.rotateZ(e)}else{var i=v.cos(e)
var s=v.sin(e)
var a=1-i
this.apply(a*t*t+i,a*t*r-s*n,a*t*n+s*r,0,a*t*r+s*n,a*r*r+i,a*r*n-s*t,0,a*t*n-s*r,a*r*n+s*t,a*n*n+i,0,0,0,0,1)}},invApply:function(){if(Or===n){Or=new On}var e=arguments
Or.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
if(!Or.invert()){return false}this.preApply(Or)
return true},rotateX:function(e){var t=v.cos(e)
var r=v.sin(e)
this.apply([1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1])},rotateY:function(e){var t=v.cos(e)
var r=v.sin(e)
this.apply([t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1])},rotateZ:function(e){var t=v.cos(e)
var r=v.sin(e)
this.apply([t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,t,r){if(e&&!t&&!r){t=r=e}else if(e&&t&&!r){r=1}if(e&&t&&r){this.elements[0]*=e
this.elements[1]*=t
this.elements[2]*=r
this.elements[4]*=e
this.elements[5]*=t
this.elements[6]*=r
this.elements[8]*=e
this.elements[9]*=t
this.elements[10]*=r
this.elements[12]*=e
this.elements[13]*=t
this.elements[14]*=r}},skewX:function(e){var t=v.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=v.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,r,n){if(!r){return this.elements[0]*e+this.elements[1]*t+this.elements[3]}if(!n){return this.elements[0]*e+this.elements[1]*t+this.elements[2]*r+this.elements[3]}return this.elements[0]*e+this.elements[1]*t+this.elements[2]*r+this.elements[3]*n},multY:function(e,t,r,n){if(!r){return this.elements[4]*e+this.elements[5]*t+this.elements[7]}if(!n){return this.elements[4]*e+this.elements[5]*t+this.elements[6]*r+this.elements[7]}return this.elements[4]*e+this.elements[5]*t+this.elements[6]*r+this.elements[7]*n},multZ:function(e,t,r,n){if(!n){return this.elements[8]*e+this.elements[9]*t+this.elements[10]*r+this.elements[11]}return this.elements[8]*e+this.elements[9]*t+this.elements[10]*r+this.elements[11]*n},multW:function(e,t,r,n){if(!n){return this.elements[12]*e+this.elements[13]*t+this.elements[14]*r+this.elements[15]}return this.elements[12]*e+this.elements[13]*t+this.elements[14]*r+this.elements[15]*n},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4]
var t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4]
var n=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4]
var i=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5]
var s=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5]
var a=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6]
var o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12]
var l=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12]
var u=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12]
var f=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13]
var h=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13]
var c=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14]
var g=e*c-t*h+n*f+i*u-s*l+a*o
if(r.abs(g)<=1e-9){return false}var p=[]
p[0]=+this.elements[5]*c-this.elements[6]*h+this.elements[7]*f
p[4]=-this.elements[4]*c+this.elements[6]*u-this.elements[7]*l
p[8]=+this.elements[4]*h-this.elements[5]*u+this.elements[7]*o
p[12]=-this.elements[4]*f+this.elements[5]*l-this.elements[6]*o
p[1]=-this.elements[1]*c+this.elements[2]*h-this.elements[3]*f
p[5]=+this.elements[0]*c-this.elements[2]*u+this.elements[3]*l
p[9]=-this.elements[0]*h+this.elements[1]*u-this.elements[3]*o
p[13]=+this.elements[0]*f-this.elements[1]*l+this.elements[2]*o
p[2]=+this.elements[13]*a-this.elements[14]*s+this.elements[15]*i
p[6]=-this.elements[12]*a+this.elements[14]*n-this.elements[15]*t
p[10]=+this.elements[12]*s-this.elements[13]*n+this.elements[15]*e
p[14]=-this.elements[12]*i+this.elements[13]*t-this.elements[14]*e
p[3]=-this.elements[9]*a+this.elements[10]*s-this.elements[11]*i
p[7]=+this.elements[8]*a-this.elements[10]*n+this.elements[11]*t
p[11]=-this.elements[8]*s+this.elements[9]*n-this.elements[11]*e
p[15]=+this.elements[8]*i-this.elements[9]*t+this.elements[10]*e
var m=1/g
p[0]*=m
p[1]*=m
p[2]*=m
p[3]*=m
p[4]*=m
p[5]*=m
p[6]*=m
p[7]*=m
p[8]*=m
p[9]*=m
p[10]*=m
p[11]*=m
p[12]*=m
p[13]*=m
p[14]*=m
p[15]*=m
this.elements=p.slice()
return true},toString:function(){var e=""
for(var t=0;t<15;t++){e+=this.elements[t]+", "}e+=this.elements[15]
return e},print:function(){var e=Nn(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+" "+v.nfs(this.elements[3],e,4)+"\n"+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+" "+v.nfs(this.elements[6],e,4)+" "+v.nfs(this.elements[7],e,4)+"\n"+v.nfs(this.elements[8],e,4)+" "+v.nfs(this.elements[9],e,4)+" "+v.nfs(this.elements[10],e,4)+" "+v.nfs(this.elements[11],e,4)+"\n"+v.nfs(this.elements[12],e,4)+" "+v.nfs(this.elements[13],e,4)+" "+v.nfs(this.elements[14],e,4)+" "+v.nfs(this.elements[15],e,4)+"\n\n"
v.println(t)},invTranslate:function(e,t,r){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-r,0,0,0,1)},invRotateX:function(e){var t=v.cos(-e)
var r=v.sin(-e)
this.preApply([1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1])},invRotateY:function(e){var t=v.cos(-e)
var r=v.sin(-e)
this.preApply([t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=v.cos(-e)
var r=v.sin(-e)
this.preApply([t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,r){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/r,0,0,0,0,1])}}
var kn=v.PMatrixStack=function(){this.matrixStack=[]}
kn.prototype.load=function(){var e=E.$newPMatrix()
if(arguments.length===1){e.set(arguments[0])}else{e.set(arguments)}this.matrixStack.push(e)}
Sn.prototype.$newPMatrix=function(){return new Mn}
_n.prototype.$newPMatrix=function(){return new On}
kn.prototype.push=function(){this.matrixStack.push(this.peek())}
kn.prototype.pop=function(){return this.matrixStack.pop()}
kn.prototype.peek=function(){var e=E.$newPMatrix()
e.set(this.matrixStack[this.matrixStack.length-1])
return e}
kn.prototype.mult=function(e){this.matrixStack[this.matrixStack.length-1].apply(e)}
v.split=function(e,t){return e.split(t)}
v.splitTokens=function(e,t){if(arguments.length===1){t="\n	\r\f "}t="["+t+"]"
var r=[]
var i=0
var s=e.search(t)
while(s>=0){if(s===0){e=e.substring(1)}else{r[i]=e.substring(0,s)
i++
e=e.substring(s)}s=e.search(t)}if(e.length>0){r[i]=e}if(r.length===0){r=n}return r}
v.append=function(e,t){e[e.length]=t
return e}
v.concat=function(e,t){return e.concat(t)}
v.sort=function(e,t){var r=[]
if(e.length>0){var n=t>0?t:e.length
for(var i=0;i<n;i++){r.push(e[i])}if(typeof e[0]==="string"){r.sort()}else{r.sort(function(e,t){return e-t})}if(t>0){for(var s=r.length;s<e.length;s++){r.push(e[s])}}}return r}
v.splice=function(e,t,r){if(t.length===0){return e}if(t instanceof Array){for(var n=0,i=r;n<t.length;i++,n++){e.splice(i,0,t[n])}}else{e.splice(r,0,t)}return e}
v.subset=function(e,t,r){var i=r!==n?t+r:e.length
return e.slice(t,i)}
v.join=function(e,t){return e.join(t)}
v.shorten=function(e){var t=[]
var r=e.length
for(var n=0;n<r;n++){t[n]=e[n]}t.pop()
return t}
v.expand=function(e,t){var r=e.slice(0),n=t||e.length*2
r.length=n
return r}
v.arrayCopy=function(){var e,t=0,r,i=0,s
if(arguments.length===2){e=arguments[0]
r=arguments[1]
s=e.length}else if(arguments.length===3){e=arguments[0]
r=arguments[1]
s=arguments[2]}else if(arguments.length===5){e=arguments[0]
t=arguments[1]
r=arguments[2]
i=arguments[3]
s=arguments[4]}for(var a=t,o=i;a<s+t;a++,o++){if(r[o]!==n){r[o]=e[a]}else{throw"array index out of bounds exception"}}}
v.reverse=function(e){return e.reverse()}
v.mix=function(e,t,r){return e+((t-e)*r>>8)}
v.peg=function(e){return e<0?0:e>255?255:e}
v.modes=function(){var e=g.ALPHA_MASK,t=g.RED_MASK,n=g.GREEN_MASK,i=g.BLUE_MASK,s=r.min,a=r.max
function o(e,t,r,n,i,a,o,l,u,f,h){var c=s(((e&4278190080)>>>24)+t,255)<<24
var g=r+((u-r)*t>>8)
g=(g<0?0:g>255?255:g)<<16
var p=n+((f-n)*t>>8)
p=(p<0?0:p>255?255:p)<<8
var m=i+((h-i)*t>>8)
m=m<0?0:m>255?255:m
return c|g|p|m}return{replace:function(e,t){return t},blend:function(r,a){var o=(a&e)>>>24,l=r&t,u=r&n,f=r&i,h=a&t,c=a&n,g=a&i
return s(((r&e)>>>24)+o,255)<<24|l+((h-l)*o>>8)&t|u+((c-u)*o>>8)&n|f+((g-f)*o>>8)&i},add:function(r,a){var o=(a&e)>>>24
return s(((r&e)>>>24)+o,255)<<24|s((r&t)+((a&t)>>8)*o,t)&t|s((r&n)+((a&n)>>8)*o,n)&n|s((r&i)+((a&i)*o>>8),i)},subtract:function(r,o){var l=(o&e)>>>24
return s(((r&e)>>>24)+l,255)<<24|a((r&t)-((o&t)>>8)*l,n)&t|a((r&n)-((o&n)>>8)*l,i)&n|a((r&i)-((o&i)*l>>8),0)},lightest:function(r,o){var l=(o&e)>>>24
return s(((r&e)>>>24)+l,255)<<24|a(r&t,((o&t)>>8)*l)&t|a(r&n,((o&n)>>8)*l)&n|a(r&i,(o&i)*l>>8)},darkest:function(r,a){var o=(a&e)>>>24,l=r&t,u=r&n,f=r&i,h=s(r&t,((a&t)>>8)*o),c=s(r&n,((a&n)>>8)*o),g=s(r&i,(a&i)*o>>8)
return s(((r&e)>>>24)+o,255)<<24|l+((h-l)*o>>8)&t|u+((c-u)*o>>8)&n|f+((g-f)*o>>8)&i},difference:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=l>h?l-h:h-l,m=u>c?u-c:c-u,d=f>g?f-g:g-f
return o(r,a,l,u,f,h,c,g,p,m,d)},exclusion:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=l+h-(l*h>>7),m=u+c-(u*c>>7),d=f+g-(f*g>>7)
return o(r,a,l,u,f,h,c,g,p,m,d)},multiply:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=l*h>>8,m=u*c>>8,d=f*g>>8
return o(r,a,l,u,f,h,c,g,p,m,d)},screen:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=255-((255-l)*(255-h)>>8),m=255-((255-u)*(255-c)>>8),d=255-((255-f)*(255-g)>>8)
return o(r,a,l,u,f,h,c,g,p,m,d)},hard_light:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=h<128?l*h>>7:255-((255-l)*(255-h)>>7),m=c<128?u*c>>7:255-((255-u)*(255-c)>>7),d=g<128?f*g>>7:255-((255-f)*(255-g)>>7)
return o(r,a,l,u,f,h,c,g,p,m,d)},soft_light:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=(l*h>>7)+(l*l>>8)-(l*l*h>>15),m=(u*c>>7)+(u*u>>8)-(u*u*c>>15),d=(f*g>>7)+(f*f>>8)-(f*f*g>>15)
return o(r,a,l,u,f,h,c,g,p,m,d)},overlay:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i,p=l<128?l*h>>7:255-((255-l)*(255-h)>>7),m=u<128?u*c>>7:255-((255-u)*(255-c)>>7),d=f<128?f*g>>7:255-((255-f)*(255-g)>>7)
return o(r,a,l,u,f,h,c,g,p,m,d)},dodge:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i
var p=255
if(h!==255){p=(l<<8)/(255-h)
p=p<0?0:p>255?255:p}var m=255
if(c!==255){m=(u<<8)/(255-c)
m=m<0?0:m>255?255:m}var d=255
if(g!==255){d=(f<<8)/(255-g)
d=d<0?0:d>255?255:d}return o(r,a,l,u,f,h,c,g,p,m,d)},burn:function(r,s){var a=(s&e)>>>24,l=(r&t)>>16,u=(r&n)>>8,f=r&i,h=(s&t)>>16,c=(s&n)>>8,g=s&i
var p=0
if(h!==0){p=(255-l<<8)/h
p=255-(p<0?0:p>255?255:p)}var m=0
if(c!==0){m=(255-u<<8)/c
m=255-(m<0?0:m>255?255:m)}var d=0
if(g!==0){d=(255-f<<8)/g
d=255-(d<0?0:d>255?255:d)}return o(r,a,l,u,f,h,c,g,p,m,d)}}}()
function Fn(e,t,n,i){var s,a,o,l
if(pt===g.HSB){var u=v.color.toRGB(e,t,n)
s=u[0]
a=u[1]
o=u[2]}else{s=r.round(255*(e/ot))
a=r.round(255*(t/lt))
o=r.round(255*(n/ut))}l=r.round(255*(i/at))
s=s<0?0:s
a=a<0?0:a
o=o<0?0:o
l=l<0?0:l
s=s>255?255:s
a=a>255?255:a
o=o>255?255:o
l=l>255?255:l
return l<<24&g.ALPHA_MASK|s<<16&g.RED_MASK|a<<8&g.GREEN_MASK|o&g.BLUE_MASK}function Bn(e,t){var n
if(e&g.ALPHA_MASK){n=r.round(255*(t/at))
n=n>255?255:n
n=n<0?0:n
return e-(e&g.ALPHA_MASK)+(n<<24&g.ALPHA_MASK)}if(pt===g.RGB){return Fn(e,e,e,t)}if(pt===g.HSB){return Fn(0,0,e/ot*ut,t)}}function $n(e){if(e<=ot&&e>=0){if(pt===g.RGB){return Fn(e,e,e,at)}if(pt===g.HSB){return Fn(0,0,e/ot*ut,at)}}if(e){if(e>2147483647){e-=4294967296}return e}}v.color=function(e,t,r,i){if(e!==n&&t!==n&&r!==n&&i!==n){return Fn(e,t,r,i)}if(e!==n&&t!==n&&r!==n){return Fn(e,t,r,at)}if(e!==n&&t!==n){return Bn(e,t)}if(typeof e==="number"){return $n(e)}return Fn(ot,lt,ut,at)}
v.color.toString=function(e){return"rgba("+((e&g.RED_MASK)>>>16)+","+((e&g.GREEN_MASK)>>>8)+","+(e&g.BLUE_MASK)+","+((e&g.ALPHA_MASK)>>>24)/255+")"}
v.color.toInt=function(e,t,r,n){return n<<24&g.ALPHA_MASK|e<<16&g.RED_MASK|t<<8&g.GREEN_MASK|r&g.BLUE_MASK}
v.color.toArray=function(e){return[(e&g.RED_MASK)>>>16,(e&g.GREEN_MASK)>>>8,e&g.BLUE_MASK,(e&g.ALPHA_MASK)>>>24]}
v.color.toGLArray=function(e){return[((e&g.RED_MASK)>>>16)/255,((e&g.GREEN_MASK)>>>8)/255,(e&g.BLUE_MASK)/255,((e&g.ALPHA_MASK)>>>24)/255]}
v.color.toRGB=function(e,t,n){e=e>ot?ot:e
t=t>lt?lt:t
n=n>ut?ut:n
e=e/ot*360
t=t/lt*100
n=n/ut*100
var i=r.round(n/100*255)
if(t===0){return[i,i,i]}var s=e%360
var a=s%60
var o=r.round(n*(100-t)/1e4*255)
var l=r.round(n*(6e3-t*a)/6e5*255)
var u=r.round(n*(6e3-t*(60-a))/6e5*255)
switch(r.floor(s/60)){case 0:return[i,u,o]
case 1:return[l,i,o]
case 2:return[o,i,u]
case 3:return[o,l,i]
case 4:return[u,o,i]
case 5:return[i,o,l]}}
function Gn(e){var t,r,n
t=((e&g.RED_MASK)>>>16)/255
r=((e&g.GREEN_MASK)>>>8)/255
n=(e&g.BLUE_MASK)/255
var i=v.max(v.max(t,r),n),s=v.min(v.min(t,r),n),a,o
if(s===i){return[0,0,i*ut]}o=(i-s)/i
if(t===i){a=(r-n)/(i-s)}else if(r===i){a=2+(n-t)/(i-s)}else{a=4+(t-r)/(i-s)}a/=6
if(a<0){a+=1}else if(a>1){a-=1}return[a*ot,o*lt,i*ut]}v.brightness=function(e){return Gn(e)[2]}
v.saturation=function(e){return Gn(e)[1]}
v.hue=function(e){return Gn(e)[0]}
v.red=function(e){return((e&g.RED_MASK)>>>16)/255*ot}
v.green=function(e){return((e&g.GREEN_MASK)>>>8)/255*lt}
v.blue=function(e){return(e&g.BLUE_MASK)/255*ut}
v.alpha=function(e){return((e&g.ALPHA_MASK)>>>24)/255*at}
v.lerpColor=function(e,t,r){var n,i,s,a,o,l,u,f,h,c,p,m
var d,y,b,A,w
var x=v.color(e)
var E=v.color(t)
if(pt===g.HSB){d=Gn(x)
f=((x&g.ALPHA_MASK)>>>24)/at
y=Gn(E)
m=((E&g.ALPHA_MASK)>>>24)/at
A=v.lerp(d[0],y[0],r)
w=v.lerp(d[1],y[1],r)
s=v.lerp(d[2],y[2],r)
b=v.color.toRGB(A,w,s)
a=v.lerp(f,m,r)*at
return a<<24&g.ALPHA_MASK|b[0]<<16&g.RED_MASK|b[1]<<8&g.GREEN_MASK|b[2]&g.BLUE_MASK}o=(x&g.RED_MASK)>>>16
l=(x&g.GREEN_MASK)>>>8
u=x&g.BLUE_MASK
f=((x&g.ALPHA_MASK)>>>24)/at
h=(E&g.RED_MASK)>>>16
c=(E&g.GREEN_MASK)>>>8
p=E&g.BLUE_MASK
m=((E&g.ALPHA_MASK)>>>24)/at
n=v.lerp(o,h,r)|0
i=v.lerp(l,c,r)|0
s=v.lerp(u,p,r)|0
a=v.lerp(f,m,r)*at
return a<<24&g.ALPHA_MASK|n<<16&g.RED_MASK|i<<8&g.GREEN_MASK|s&g.BLUE_MASK}
v.colorMode=function(){pt=arguments[0]
if(arguments.length>1){ot=arguments[1]
lt=arguments[2]||arguments[1]
ut=arguments[3]||arguments[1]
at=arguments[4]||arguments[1]}}
v.blendColor=function(e,t,r){if(r===g.REPLACE){return v.modes.replace(e,t)}else if(r===g.BLEND){return v.modes.blend(e,t)}else if(r===g.ADD){return v.modes.add(e,t)}else if(r===g.SUBTRACT){return v.modes.subtract(e,t)}else if(r===g.LIGHTEST){return v.modes.lightest(e,t)}else if(r===g.DARKEST){return v.modes.darkest(e,t)}else if(r===g.DIFFERENCE){return v.modes.difference(e,t)}else if(r===g.EXCLUSION){return v.modes.exclusion(e,t)}else if(r===g.MULTIPLY){return v.modes.multiply(e,t)}else if(r===g.SCREEN){return v.modes.screen(e,t)}else if(r===g.HARD_LIGHT){return v.modes.hard_light(e,t)}else if(r===g.SOFT_LIGHT){return v.modes.soft_light(e,t)}else if(r===g.OVERLAY){return v.modes.overlay(e,t)}else if(r===g.DODGE){return v.modes.dodge(e,t)}else if(r===g.BURN){return v.modes.burn(e,t)}}
function zn(){b.save()}function Un(){b.restore()
k=true
D=true}v.printMatrix=function(){Ir.print()}
Sn.prototype.translate=function(e,t){Ir.translate(e,t)
Dr.invTranslate(e,t)
b.translate(e,t)}
_n.prototype.translate=function(e,t,r){Ir.translate(e,t,r)
Dr.invTranslate(e,t,r)}
Sn.prototype.scale=function(e,t){Ir.scale(e,t)
Dr.invScale(e,t)
b.scale(e,t||e)}
_n.prototype.scale=function(e,t,r){Ir.scale(e,t,r)
Dr.invScale(e,t,r)}
Sn.prototype.pushMatrix=function(){Nr.load(Ir)
Mr.load(Dr)
zn()}
_n.prototype.pushMatrix=function(){Nr.load(Ir)
Mr.load(Dr)}
Sn.prototype.popMatrix=function(){Ir.set(Nr.pop())
Dr.set(Mr.pop())
Un()}
_n.prototype.popMatrix=function(){Ir.set(Nr.pop())
Dr.set(Mr.pop())}
Sn.prototype.resetMatrix=function(){Ir.reset()
Dr.reset()
b.setTransform(1,0,0,1,0,0)}
_n.prototype.resetMatrix=function(){Ir.reset()
Dr.reset()}
En.prototype.applyMatrix=function(){var e=arguments
Ir.apply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
Dr.invApply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}
Sn.prototype.applyMatrix=function(){var e=arguments
for(var t=e.length;t<16;t++){e[t]=0}e[10]=e[15]=1
En.prototype.applyMatrix.apply(this,e)}
v.rotateX=function(e){Ir.rotateX(e)
Dr.invRotateX(e)}
Sn.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."}
_n.prototype.rotateZ=function(e){Ir.rotateZ(e)
Dr.invRotateZ(e)}
v.rotateY=function(e){Ir.rotateY(e)
Dr.invRotateY(e)}
Sn.prototype.rotate=function(e){Ir.rotateZ(e)
Dr.invRotateZ(e)
b.rotate(v.convertToRadians(e))}
_n.prototype.rotate=function(e){v.rotateZ(e)}
v.pushStyle=function(){zn()
v.pushMatrix()
var e={doFill:R,currentFillColor:I,doStroke:N,currentStrokeColor:O,curTint:mt,curRectMode:U,curColorMode:pt,colorModeX:ot,colorModeZ:ut,colorModeY:lt,colorModeA:at,curTextFont:ar,horizontalTextAlignment:Qt,verticalTextAlignment:Jt,textMode:er,curFontName:tr,curTextSize:rr,curTextAscent:nr,curTextDescent:ir,curTextLeading:sr}
Jr.push(e)}
v.popStyle=function(){var e=Jr.pop()
if(e){Un()
v.popMatrix()
R=e.doFill
I=e.currentFillColor
N=e.doStroke
O=e.currentStrokeColor
mt=e.curTint
U=e.curRectmode
pt=e.curColorMode
ot=e.colorModeX
ut=e.colorModeZ
lt=e.colorModeY
at=e.colorModeA
ar=e.curTextFont
tr=e.curFontName
rr=e.curTextSize
Qt=e.horizontalTextAlignment
Jt=e.verticalTextAlignment
er=e.textMode
nr=e.curTextAscent
ir=e.curTextDescent
sr=e.curTextLeading}else{throw"Too many popStyle() without enough pushStyle()"}}
v.year=function(){return(new Date).getFullYear()}
v.month=function(){return(new Date).getMonth()+1}
v.day=function(){return(new Date).getDate()}
v.hour=function(){return(new Date).getHours()}
v.minute=function(){return(new Date).getMinutes()}
v.second=function(){return(new Date).getSeconds()}
v.millis=function(){return Date.now()-yt}
function Vn(){var e=(Date.now()-bt)/1e3
At++
var t=At/e
if(e>.5){bt=Date.now()
At=0
v.__frameRate=t}v.frameCount++}Sn.prototype.redraw=function(){Vn()
b.lineWidth=F
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=ct
v.pmouseY=gt
zn()
v.draw()
Un()
ct=v.mouseX
gt=v.mouseY
v.pmouseX=e
v.pmouseY=t}
_n.prototype.redraw=function(){Vn()
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=ct
v.pmouseY=gt
b.clear(b.DEPTH_BUFFER_BIT)
Pt={attributes:{},locations:{}}
v.noLights()
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
v.camera()
v.draw()
ct=v.mouseX
gt=v.mouseY
v.pmouseX=e
v.pmouseY=t}
v.noLoop=function(){G=false
B=false
clearInterval(z)
w.onPause()}
v.loop=function(){if(B){return}bt=Date.now()
At=0
z=e.setInterval(function(){try{w.onFrameStart()
v.redraw()
w.onFrameEnd()}catch(t){e.clearInterval(z)
throw t}},Z)
G=true
B=true
w.onLoop()}
v.frameRate=function(e){W=e
Z=1e3/W
if(G){v.noLoop()
v.loop()}}
var Hn=[]
function Kn(e,t,r){if(e.addEventListener){e.addEventListener(t,r,false)}else{e.attachEvent("on"+t,r)}Hn.push({elem:e,type:t,fn:r})}function Xn(e){var t=e.elem,r=e.type,n=e.fn
if(t.removeEventListener){t.removeEventListener(r,n,false)}else if(t.detachEvent){t.detachEvent("on"+r,n)}}v.exit=function(){e.clearInterval(z)
_(v.externals.canvas.id)
for(var t in C.lib){if(C.lib.hasOwnProperty(t)){if(C.lib[t].hasOwnProperty("detach")){C.lib[t].detach(v)}}}var r=Hn.length
while(r--){Xn(Hn[r])}w.onExit()}
v.cursor=function(){if(arguments.length>1||arguments.length===1&&arguments[0]instanceof v.PImage){var e=arguments[0],t,r
if(arguments.length>=3){t=arguments[1]
r=arguments[2]
if(t<0||r<0||r>=e.height||t>=e.width){throw"x and y must be non-negative and less than the dimensions of the image"}}else{t=e.width>>>1
r=e.height>>>1}var n=e.toDataURL()
var i='url("'+n+'") '+t+" "+r+", default"
j=l.style.cursor=i}else if(arguments.length===1){var s=arguments[0]
j=l.style.cursor=s}else{j=l.style.cursor=q}}
v.noCursor=function(){j=l.style.cursor=g.NOCURSOR}
v.link=function(t,r){if(r!==n){e.open(t,r)}else{e.location=t}}
v.beginDraw=i
v.endDraw=i
Sn.prototype.toImageData=function(e,t,r,i){e=e!==n?e:0
t=t!==n?t:0
r=r!==n?r:v.width
i=i!==n?i:v.height
return b.getImageData(e,t,r,i)}
_n.prototype.toImageData=function(e,i,s,a){e=e!==n?e:0
i=i!==n?i:0
s=s!==n?s:v.width
a=a!==n?a:v.height
var o=t.createElement("canvas"),l=o.getContext("2d"),u=l.createImageData(s,a),f=new c(s*a*4)
b.readPixels(e,i,s,a,b.RGBA,b.UNSIGNED_BYTE,f)
for(var h=0,g=f.length,p=u.data;h<g;h++){p[h]=f[(a-1-r.floor(h/4/s))*s*4+h%(s*4)]}return u}
v.status=function(t){e.status=t}
v.binary=function(e,t){var r
if(t>0){r=t}else if(e instanceof Pn){r=16
e|=0}else{r=32
while(r>1&&!(e>>>r-1&1)){r--}}var n=""
while(r>0){n+=e>>>--r&1?"1":"0"}return n}
v.unbinary=function(e){var t=e.length-1,r=1,n=0
while(t>=0){var i=e[t--]
if(i!=="0"&&i!=="1"){throw"the value passed into unbinary was not an 8 bit binary number"}if(i==="1"){n+=r}r<<=1}return n}
function Yn(e,t,i,s,a,o){var l=e<0?i:t
var u=a===0
var f=a===n||a<0?0:a
var h=r.abs(e)
if(u){f=1
h*=10
while(r.abs(r.round(h)-h)>1e-6&&f<7){++f
h*=10}}else if(f!==0){h*=r.pow(10,f)}var c,g=h*2
if(r.floor(h)===h){c=h}else if(r.floor(g)===g){var p=r.floor(h)
c=p+p%2}else{c=r.round(h)}var m=""
var d=s+f
while(d>0||c>0){d--
m=""+c%10+m
c=r.floor(c/10)}if(o!==n){var v=m.length-3-f
while(v>0){m=m.substring(0,v)+o+m.substring(v)
v-=3}}if(f>0){return l+m.substring(0,m.length-f)+"."+m.substring(m.length-f,m.length)}return l+m}function Wn(e,t,r,n,i,s){if(e instanceof Array){var a=[]
for(var o=0,l=e.length;o<l;o++){a.push(Yn(e[o],t,r,n,i,s))}return a}return Yn(e,t,r,n,i,s)}v.nf=function(e,t,r){return Wn(e,"","-",t,r)}
v.nfs=function(e,t,r){return Wn(e," ","-",t,r)}
v.nfp=function(e,t,r){return Wn(e,"+","-",t,r)}
v.nfc=function(e,t,r){return Wn(e,"","-",t,r,",")}
var Zn=function(e,t){t=t===n||t===null?t=8:t
if(e<0){e=4294967295+e+1}var r=Number(e).toString(16).toUpperCase()
while(r.length<t){r="0"+r}if(r.length>=t){r=r.substring(r.length-t,r.length)}return r}
v.hex=function(e,t){if(arguments.length===1){if(e instanceof Pn){t=4}else{t=8}}return Zn(e,t)}
function jn(e){var t=parseInt("0x"+e,16)
if(t>2147483647){t-=4294967296}return t}v.unhex=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(jn(e[r]))}return t}return jn(e)}
v.loadStrings=function(e){if(localStorage[e]){return localStorage[e].split("\n")}var t=a(e)
if(typeof t!=="string"||t===""){return[]}t=t.replace(/(\r\n?)/g,"\n").replace(/\n$/,"")
return t.split("\n")}
v.saveStrings=function(e,t){localStorage[e]=t.join("\n")}
v.loadBytes=function(e){var t=a(e)
var r=[]
for(var n=0;n<t.length;n++){r.push(t.charCodeAt(n))}return r}
function qn(e){return Array.prototype.slice.call(e,1)}v.matchAll=function(e,t){var r=[],n
var i=new RegExp(t,"g")
while((n=i.exec(e))!==null){r.push(n)
if(n[0].length===0){++i.lastIndex}}return r.length>0?r:null}
v.__contains=function(e,t){if(typeof e!=="string"){return e.contains.apply(e,qn(arguments))}return e!==null&&t!==null&&typeof t==="string"&&e.indexOf(t)>-1}
v.__replaceAll=function(e,t,r){if(typeof e!=="string"){return e.replaceAll.apply(e,qn(arguments))}return e.replace(new RegExp(t,"g"),r)}
v.__replaceFirst=function(e,t,r){if(typeof e!=="string"){return e.replaceFirst.apply(e,qn(arguments))}return e.replace(new RegExp(t,""),r)}
v.__replace=function(e,t,r){if(typeof e!=="string"){return e.replace.apply(e,qn(arguments))}if(t instanceof RegExp){return e.replace(t,r)}if(typeof t!=="string"){t=t.toString()}if(t===""){return e}var n=e.indexOf(t)
if(n<0){return e}var i=0,s=""
do{s+=e.substring(i,n)+r
i=n+t.length}while((n=e.indexOf(t,i))>=0)
return s+e.substring(i)}
v.__equals=function(e,t){if(e.equals instanceof Function){return e.equals.apply(e,qn(arguments))}return e.valueOf()===t.valueOf()}
v.__equalsIgnoreCase=function(e,t){if(typeof e!=="string"){return e.equalsIgnoreCase.apply(e,qn(arguments))}return e.toLowerCase()===t.toLowerCase()}
v.__toCharArray=function(e){if(typeof e!=="string"){return e.toCharArray.apply(e,qn(arguments))}var t=[]
for(var r=0,n=e.length;r<n;++r){t[r]=new Pn(e.charAt(r))}return t}
v.__split=function(e,t,r){if(typeof e!=="string"){return e.split.apply(e,qn(arguments))}var i=new RegExp(t)
if(r===n||r<1){return e.split(i)}var s=[],a=e,o
while((o=a.search(i))!==-1&&s.length<r-1){var l=i.exec(a).toString()
s.push(a.substring(0,o))
a=a.substring(o+l.length)}if(o!==-1||a!==""){s.push(a)}return s}
v.__codePointAt=function(e,t){var r=e.charCodeAt(t),n,i
if(55296<=r&&r<=56319){n=r
i=e.charCodeAt(t+1)
return(n-55296)*1024+(i-56320)+65536}return r}
v.match=function(e,t){return e.match(t)}
v.__startsWith=function(e,t,r){if(typeof e!=="string"){return e.startsWith.apply(e,qn(arguments))}r=r||0
if(r<0||r>e.length){return false}return t===""||t===e?true:e.indexOf(t)===r}
v.__endsWith=function(e,t){if(typeof e!=="string"){return e.endsWith.apply(e,qn(arguments))}var r=t?t.length:0
return t===""||t===e?true:e.indexOf(t)===e.length-r}
v.__hashCode=function(e){if(e.hashCode instanceof Function){return e.hashCode.apply(e,qn(arguments))}return p(e)}
v.__printStackTrace=function(e){v.println("Exception: "+e.toString())}
var Qn=[]
v.println=function(e){var t=Qn.length
if(t){C.logger.log(Qn.join(""))
Qn.length=0}if(arguments.length===0&&t===0){C.logger.log("")}else if(arguments.length!==0){C.logger.log(e)}}
v.print=function(e){Qn.push(e)}
v.str=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(e[r].toString()+"")}return t}return e.toString()+""}
v.trim=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(e[r].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))}return t}return e.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")}
function Jn(e){if(typeof e==="number"){return e!==0}if(typeof e==="boolean"){return e}if(typeof e==="string"){return e.toLowerCase()==="true"}if(e instanceof Pn){return e.code===49||e.code===84||e.code===116}}v.parseBoolean=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(Jn(e[r]))}return t}return Jn(e)}
v.parseByte=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(0-(e[r]&128)|e[r]&127)}return t}return 0-(e&128)|e&127}
v.parseChar=function(e){if(typeof e==="number"){return new Pn(String.fromCharCode(e&65535))}if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(new Pn(String.fromCharCode(e[r]&65535)))}return t}throw"char() may receive only one argument of type int, byte, int[], or byte[]."}
function ei(e){if(typeof e==="number"){return e}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){return parseFloat(e)}if(e instanceof Pn){return e.code}}v.parseFloat=function(e){if(e instanceof Array){var t=[]
for(var r=0;r<e.length;r++){t.push(ei(e[r]))}return t}return ei(e)}
function ti(e,t){if(typeof e==="number"){return e&4294967295}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){var r=parseInt(e,t||10)
return r&4294967295}if(e instanceof Pn){return e.code}}v.parseInt=function(e,t){if(e instanceof Array){var r=[]
for(var n=0;n<e.length;n++){if(typeof e[n]==="string"&&!/^\s*[+\-]?\d+\s*$/.test(e[n])){r.push(0)}else{r.push(ti(e[n],t))}}return r}return ti(e,t)}
v.__int_cast=function(e){return 0|e}
v.__instanceof=function(e,t){if(typeof t!=="function"){throw"Function is expected as type argument for instanceof operator"}if(typeof e==="string"){return t===Object||t===String}if(e instanceof t){return true}if(typeof e!=="object"||e===null){return false}var r=e.constructor
if(t.$isInterface){var n=[]
while(r){if(r.$interfaces){n=n.concat(r.$interfaces)}r=r.$base}while(n.length>0){var i=n.shift()
if(i===t){return true}if(i.$interfaces){n=n.concat(i.$interfaces)}}return false}while(r.hasOwnProperty("$base")){r=r.$base
if(r===t){return true}}return false}
v.abs=r.abs
v.ceil=r.ceil
v.constrain=function(e,t,r){return e>r?r:e<t?t:e}
v.dist=function(){var e,t,n
if(arguments.length===4){e=arguments[0]-arguments[2]
t=arguments[1]-arguments[3]
return r.sqrt(e*e+t*t)}if(arguments.length===6){e=arguments[0]-arguments[3]
t=arguments[1]-arguments[4]
n=arguments[2]-arguments[5]
return r.sqrt(e*e+t*t+n*n)}}
v.exp=r.exp
v.floor=r.floor
v.lerp=function(e,t,r){return(t-e)*r+e}
v.log=r.log
v.mag=function(e,t,n){if(n){return r.sqrt(e*e+t*t+n*n)}return r.sqrt(e*e+t*t)}
v.map=function(e,t,r,n,i){return n+(i-n)*((e-t)/(r-t))}
v.max=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[1]:arguments[0]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],r=e.length
for(var n=1;n<r;++n){if(t<e[n]){t=e[n]}}return t}
v.min=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[0]:arguments[1]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],r=e.length
for(var n=1;n<r;++n){if(t>e[n]){t=e[n]}}return t}
v.norm=function(e,t,r){return(e-t)/(r-t)}
v.pow=r.pow
v.round=r.round
v.sq=function(e){return e*e}
v.sqrt=r.sqrt
v.convertToDegrees=function(e){return v.angleMode==="degrees"?v.degrees(e):e}
v.convertToRadians=function(e){return v.angleMode==="degrees"?v.radians(e):e}
var ri=function(){var e=arguments
return function(){var t=arguments
for(var r=0;r<e.length;r++){t=[e[r].apply(e[r],t)]}return t[0]}}
v.acos=ri(r.acos,v.convertToDegrees)
v.asin=ri(r.asin,v.convertToDegrees)
v.atan=ri(r.atan,v.convertToDegrees)
v.atan2=ri(r.atan2,v.convertToDegrees)
v.cos=ri(v.convertToRadians,r.cos)
v.degrees=function(e){return e*180/r.PI}
v.radians=function(e){return e/180*r.PI}
v.sin=ri(v.convertToRadians,r.sin)
v.tan=ri(v.convertToRadians,r.tan)
$r=v.angleMode==="degrees"?60:v.radians(60)
Ur=zr/v.tan($r/2)
var ni=r.random
v.random=function(){if(arguments.length===0){return ni()}if(arguments.length===1){return ni()*arguments[0]}var e=arguments[0],t=arguments[1]
return ni()*(t-e)+e}
function ii(e,t){var r=e||362436069,n=t||521288629
var i=function(){r=36969*(r&65535)+(r>>>16)&4294967295
n=18e3*(n&65535)+(n>>>16)&4294967295
return((r&65535)<<16|n&65535)&4294967295}
this.nextDouble=function(){var e=i()/4294967296
return e<0?1+e:e}
this.nextInt=i}ii.createRandomized=function(){var e=new Date
return new ii(e/6e4&4294967295,e&4294967295)}
v.randomSeed=function(e){ni=new ii(e).nextDouble}
v.Random=function(e){var t=false,i,s
this.nextGaussian=function(){if(t){t=false
return i}var e,n,a
do{e=2*s()-1
n=2*s()-1
a=e*e+n*n}while(a>=1||a===0)
var o=r.sqrt(-2*r.log(a)/a)
i=n*o
t=true
return e*o}
s=e===n?r.random:new ii(e).nextDouble}
function si(e){var t=e!==n?new ii(e):ii.createRandomized()
var i,s
var a=new c(512)
for(i=0;i<256;++i){a[i]=i}for(i=0;i<256;++i){var o=a[s=t.nextInt()&255]
a[s]=a[i]
a[i]=o}for(i=0;i<256;++i){a[i+256]=a[i]}function l(e,t,r,n){var i=e&15
var s=i<8?t:r,a=i<4?r:i===12||i===14?t:n
return((i&1)===0?s:-s)+((i&2)===0?a:-a)}function u(e,t,r){var n=(e&1)===0?t:r
return(e&2)===0?-n:n}function f(e,t){return(e&1)===0?-t:t}function h(e,t,r){return t+e*(r-t)}this.noise3d=function(e,t,n){var i=r.floor(e)&255,s=r.floor(t)&255,o=r.floor(n)&255
e-=r.floor(e)
t-=r.floor(t)
n-=r.floor(n)
var u=(3-2*e)*e*e,f=(3-2*t)*t*t,c=(3-2*n)*n*n
var g=a[i]+s,p=a[g]+o,m=a[g+1]+o,d=a[i+1]+s,v=a[d]+o,y=a[d+1]+o
return h(c,h(f,h(u,l(a[p],e,t,n),l(a[v],e-1,t,n)),h(u,l(a[m],e,t-1,n),l(a[y],e-1,t-1,n))),h(f,h(u,l(a[p+1],e,t,n-1),l(a[v+1],e-1,t,n-1)),h(u,l(a[m+1],e,t-1,n-1),l(a[y+1],e-1,t-1,n-1))))}
this.noise2d=function(e,t){var n=r.floor(e)&255,i=r.floor(t)&255
e-=r.floor(e)
t-=r.floor(t)
var s=(3-2*e)*e*e,o=(3-2*t)*t*t
var l=a[n]+i,f=a[n+1]+i
return h(o,h(s,u(a[l],e,t),u(a[f],e-1,t)),h(s,u(a[l+1],e,t-1),u(a[f+1],e-1,t-1)))}
this.noise1d=function(e){var t=r.floor(e)&255
e-=r.floor(e)
var n=(3-2*e)*e*e
return h(n,f(a[t],e),f(a[t+1],e-1))}}var ai={generator:n,octaves:4,fallout:.5,seed:n}
v.noise=function(e,t,r){if(ai.generator===n){ai.generator=new si(ai.seed)}var i=ai.generator
var s=1,a=1,o=0
for(var l=0;l<ai.octaves;++l){s*=ai.fallout
switch(arguments.length){case 1:o+=s*(1+i.noise1d(a*e))/2
break
case 2:o+=s*(1+i.noise2d(a*e,a*t))/2
break
case 3:o+=s*(1+i.noise3d(a*e,a*t,a*r))/2
break}a*=2}return o}
v.noiseDetail=function(e,t){ai.octaves=e
if(t!==n){ai.fallout=t}}
v.noiseSeed=function(e){ai.seed=e
ai.generator=n}
En.prototype.size=function(e,t,n){if(N){v.stroke(0)}if(R){v.fill(255)}var i={fillStyle:b.fillStyle,strokeStyle:b.strokeStyle,lineCap:b.lineCap,lineJoin:b.lineJoin}
if(l.style.length>0){l.style.removeProperty("width")
l.style.removeProperty("height")}l.width=v.width=e||100
l.height=v.height=t||100
for(var s in i){if(i.hasOwnProperty(s)){b[s]=i[s]}}v.textFont(ar)
v.background()
hr=r.max(1e3,e*t*.05)
v.externals.context=b
for(var a=0;a<g.SINCOS_LENGTH;a++){_r[a]=v.sin(v.angleMode==="degrees"?a:v.radians(a))
Tr[a]=v.cos(v.angleMode==="degrees"?a:v.radians(a))}}
Sn.prototype.size=function(e,t,r){if(b===n){b=l.getContext("2d")
Nr=new kn
Mr=new kn
Ir=new Mn
Dr=new Mn}En.prototype.size.apply(this,arguments)}
_n.prototype.size=function(){var e=false
return function t(r,n,i){if(e){throw"Multiple calls to size() for 3D renders are not allowed."}e=true
function s(e){var t=["experimental-webgl","webgl","webkit-3d"],r
for(var n=0,i=t.length;n<i;n++){r=e.getContext(t[n],{antialias:false})
if(r){break}}return r}try{l.width=v.width=r||100
l.height=v.height=n||100
b=s(l)
Ht=b.createTexture()
Kt=b.createTexture()}catch(a){C.debug(a)}if(!b){throw"WebGL context is not supported on this browser."}b.viewport(0,0,l.width,l.height)
b.enable(b.DEPTH_TEST)
b.enable(b.BLEND)
b.blendFunc(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA)
Lt=yn(b,ln,un)
It=yn(b,an,on)
v.strokeWeight(1)
Ct=yn(b,hn,cn)
b.useProgram(Ct)
pn("usingTexture3d",Ct,"usingTexture",Wt)
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
Dt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Dt)
b.bufferData(b.ARRAY_BUFFER,en,b.STATIC_DRAW)
Nt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Nt)
b.bufferData(b.ARRAY_BUFFER,rn,b.STATIC_DRAW)
Mt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Mt)
b.bufferData(b.ARRAY_BUFFER,tn,b.STATIC_DRAW)
Ot=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Ot)
b.bufferData(b.ARRAY_BUFFER,nn,b.STATIC_DRAW)
kt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,kt)
b.bufferData(b.ARRAY_BUFFER,sn,b.STATIC_DRAW)
Ft=b.createBuffer()
Bt=b.createBuffer()
$t=b.createBuffer()
Gt=b.createBuffer()
zt=b.createBuffer()
Vt=b.createBuffer()
Ut=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Ut)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,0]),b.STATIC_DRAW)
Zt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Zt)
b.bufferData(b.ARRAY_BUFFER,new u([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),b.STATIC_DRAW)
jt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,jt)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,1,0,1,1,0,1]),b.STATIC_DRAW)
qt=b.createBuffer()
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,qt)
b.bufferData(b.ELEMENT_ARRAY_BUFFER,new h([0,1,2,2,3,0]),b.STATIC_DRAW)
Cr=new On
Lr=new On
Ir=new On
Dr=new On
kr=new On
v.camera()
v.perspective()
Nr=new kn
Mr=new kn
xt=new On
Et=new On
St=new On
_t=new On
Tt=new On
Rt=new On
Rt.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0)
En.prototype.size.apply(this,arguments)}}()
Sn.prototype.ambientLight=En.prototype.a3DOnlyFunction
_n.prototype.ambientLight=function(e,t,r,n,i,s){if(br===g.MAX_LIGHTS){throw"can only create "+g.MAX_LIGHTS+" lights"}var a=new y(n,i,s)
var o=new On
o.scale(1,-1,1)
o.apply(Ir.array())
o.mult(a,a)
var l=Fn(e,t,r,0)
var u=[((l&g.RED_MASK)>>>16)/255,((l&g.GREEN_MASK)>>>8)/255,(l&g.BLUE_MASK)/255]
b.useProgram(Ct)
gn("lights.color.3d."+br,Ct,"lights"+br+".color",u)
gn("lights.position.3d."+br,Ct,"lights"+br+".position",a.array())
pn("lights.type.3d."+br,Ct,"lights"+br+".type",0)
pn("lightCount3d",Ct,"lightCount",++br)}
Sn.prototype.directionalLight=En.prototype.a3DOnlyFunction
_n.prototype.directionalLight=function(e,t,r,n,i,s){if(br===g.MAX_LIGHTS){throw"can only create "+g.MAX_LIGHTS+" lights"}b.useProgram(Ct)
var a=new On
a.scale(1,-1,1)
a.apply(Ir.array())
a=a.array()
var o=[a[0]*n+a[4]*i+a[8]*s,a[1]*n+a[5]*i+a[9]*s,a[2]*n+a[6]*i+a[10]*s]
var l=Fn(e,t,r,0)
var u=[((l&g.RED_MASK)>>>16)/255,((l&g.GREEN_MASK)>>>8)/255,(l&g.BLUE_MASK)/255]
gn("lights.color.3d."+br,Ct,"lights"+br+".color",u)
gn("lights.position.3d."+br,Ct,"lights"+br+".position",o)
pn("lights.type.3d."+br,Ct,"lights"+br+".type",1)
pn("lightCount3d",Ct,"lightCount",++br)}
Sn.prototype.lightFalloff=En.prototype.a3DOnlyFunction
_n.prototype.lightFalloff=function(e,t,r){b.useProgram(Ct)
gn("falloff3d",Ct,"falloff",[e,t,r])}
Sn.prototype.lightSpecular=En.prototype.a3DOnlyFunction
_n.prototype.lightSpecular=function(e,t,r){var n=Fn(e,t,r,0)
var i=[((n&g.RED_MASK)>>>16)/255,((n&g.GREEN_MASK)>>>8)/255,(n&g.BLUE_MASK)/255]
b.useProgram(Ct)
gn("specular3d",Ct,"specular",i)}
v.lights=function(){v.ambientLight(128,128,128)
v.directionalLight(128,128,128,0,0,-1)
v.lightFalloff(1,0,0)
v.lightSpecular(0,0,0)}
Sn.prototype.pointLight=En.prototype.a3DOnlyFunction
_n.prototype.pointLight=function(e,t,r,n,i,s){if(br===g.MAX_LIGHTS){throw"can only create "+g.MAX_LIGHTS+" lights"}var a=new y(n,i,s)
var o=new On
o.scale(1,-1,1)
o.apply(Ir.array())
o.mult(a,a)
var l=Fn(e,t,r,0)
var u=[((l&g.RED_MASK)>>>16)/255,((l&g.GREEN_MASK)>>>8)/255,(l&g.BLUE_MASK)/255]
b.useProgram(Ct)
gn("lights.color.3d."+br,Ct,"lights"+br+".color",u)
gn("lights.position.3d."+br,Ct,"lights"+br+".position",a.array())
pn("lights.type.3d."+br,Ct,"lights"+br+".type",2)
pn("lightCount3d",Ct,"lightCount",++br)}
Sn.prototype.noLights=En.prototype.a3DOnlyFunction
_n.prototype.noLights=function(){br=0
b.useProgram(Ct)
pn("lightCount3d",Ct,"lightCount",br)}
Sn.prototype.spotLight=En.prototype.a3DOnlyFunction
_n.prototype.spotLight=function(e,t,r,n,i,s,a,o,l,u,f){if(br===g.MAX_LIGHTS){throw"can only create "+g.MAX_LIGHTS+" lights"}b.useProgram(Ct)
var h=new y(n,i,s)
var c=new On
c.scale(1,-1,1)
c.apply(Ir.array())
c.mult(h,h)
c=c.array()
var p=[c[0]*a+c[4]*o+c[8]*l,c[1]*a+c[5]*o+c[9]*l,c[2]*a+c[6]*o+c[10]*l]
var m=Fn(e,t,r,0)
var d=[((m&g.RED_MASK)>>>16)/255,((m&g.GREEN_MASK)>>>8)/255,(m&g.BLUE_MASK)/255]
gn("lights.color.3d."+br,Ct,"lights"+br+".color",d)
gn("lights.position.3d."+br,Ct,"lights"+br+".position",h.array())
gn("lights.direction.3d."+br,Ct,"lights"+br+".direction",p)
gn("lights.concentration.3d."+br,Ct,"lights"+br+".concentration",f)
gn("lights.angle.3d."+br,Ct,"lights"+br+".angle",u)
pn("lights.type.3d."+br,Ct,"lights"+br+".type",3)
pn("lightCount3d",Ct,"lightCount",++br)}
Sn.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"}
_n.prototype.beginCamera=function(){if(Fr){throw"You cannot call beginCamera() again before calling endCamera()"}Fr=true
Ir=Lr
Dr=Cr}
Sn.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"}
_n.prototype.endCamera=function(){if(!Fr){throw"You cannot call endCamera() before calling beginCamera()"}Ir.set(Cr)
Dr.set(Lr)
Fr=false}
v.camera=function(e,t,r,i,s,a,o,l,u){if(e===n){Gr=v.width/2
zr=v.height/2
Ur=zr/v.tan($r/2)
e=Gr
t=zr
r=Ur
i=Gr
s=zr
a=0
o=0
l=1
u=0}var f=new y(e-i,t-s,r-a)
var h=new y(o,l,u)
f.normalize()
var c=y.cross(h,f)
h=y.cross(f,c)
c.normalize()
h.normalize()
var g=c.x,p=c.y,m=c.z
var d=h.x,b=h.y,A=h.z
var w=f.x,x=f.y,E=f.z
Cr.set(g,p,m,0,d,b,A,0,w,x,E,0,0,0,0,1)
Cr.translate(-e,-t,-r)
Lr.reset()
Lr.invApply(g,p,m,0,d,b,A,0,w,x,E,0,0,0,0,1)
Lr.translate(e,t,r)
Ir.set(Cr)
Dr.set(Lr)}
v.perspective=function(e,t,r,n){if(arguments.length===0){zr=l.height/2
Ur=zr/v.tan($r/2)
Vr=Ur/10
Hr=Ur*10
Kr=v.width/v.height
e=$r
t=Kr
r=Vr
n=Hr}var i,s,a,o
i=r*v.tan(e/2)
s=-i
a=i*t
o=s*t
v.frustum(o,a,s,i,r,n)}
Sn.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"}
_n.prototype.frustum=function(e,t,r,n,i,s){Br=true
kr=new On
kr.set(2*i/(t-e),0,(t+e)/(t-e),0,0,2*i/(n-r),(n+r)/(n-r),0,0,0,-(s+i)/(s-i),-(2*s*i)/(s-i),0,0,-1,0)
var a=new On
a.set(kr)
a.transpose()
b.useProgram(Lt)
mn("projection2d",Lt,"projection",false,a.array())
b.useProgram(Ct)
mn("projection3d",Ct,"projection",false,a.array())
b.useProgram(It)
mn("uProjectionUS",It,"uProjection",false,a.array())}
v.ortho=function(e,t,r,n,i,s){if(arguments.length===0){e=0
t=v.width
r=0
n=v.height
i=-10
s=10}var a=2/(t-e)
var o=2/(n-r)
var l=-2/(s-i)
var u=-(t+e)/(t-e)
var f=-(n+r)/(n-r)
var h=-(s+i)/(s-i)
kr=new On
kr.set(a,0,0,u,0,o,0,f,0,0,l,h,0,0,0,1)
var c=new On
c.set(kr)
c.transpose()
b.useProgram(Lt)
mn("projection2d",Lt,"projection",false,c.array())
b.useProgram(Ct)
mn("projection3d",Ct,"projection",false,c.array())
b.useProgram(It)
mn("uProjectionUS",It,"uProjection",false,c.array())
Br=false}
v.printProjection=function(){kr.print()}
v.printCamera=function(){Cr.print()}
Sn.prototype.box=En.prototype.a3DOnlyFunction
_n.prototype.box=function(e,t,r){if(!t||!r){t=r=e}var n=new On
n.scale(e,t,r)
var i=new On
i.scale(1,-1,1)
i.apply(Ir.array())
i.transpose()
if(R){b.useProgram(Ct)
mn("model3d",Ct,"model",false,n.array())
mn("view3d",Ct,"view",false,i.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
gn("color3d",Ct,"color",L)
if(br>0){var s=new On
s.set(i)
var a=new On
a.set(n)
s.mult(a)
var o=new On
o.set(s)
o.invert()
o.transpose()
mn("normalTransform3d",Ct,"normalTransform",false,o.array())
dn("normal3d",Ct,"Normal",3,Nt)}else{vn("normal3d",Ct,"Normal")}dn("vertex3d",Ct,"Vertex",3,Dt)
vn("aColor3d",Ct,"aColor")
vn("aTexture3d",Ct,"aTexture")
b.drawArrays(b.TRIANGLES,0,en.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(F>0&&N){b.useProgram(Lt)
mn("model2d",Lt,"model",false,n.array())
mn("view2d",Lt,"view",false,i.array())
gn("color2d",Lt,"color",M)
pn("picktype2d",Lt,"picktype",0)
dn("vertex2d",Lt,"Vertex",3,Mt)
vn("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.LINES,0,tn.length/3)}}
var oi=function(){var e
Rr=[]
for(e=0;e<wr;e++){Rr.push(0)
Rr.push(-1)
Rr.push(0)
Rr.push(xr[e])
Rr.push(Er[e])
Rr.push(Sr[e])}Rr.push(0)
Rr.push(-1)
Rr.push(0)
Rr.push(xr[0])
Rr.push(Er[0])
Rr.push(Sr[0])
var t,r,n
var i=0
for(e=2;e<Ar;e++){t=r=i
i+=wr
n=i
for(var s=0;s<wr;s++){Rr.push(xr[t])
Rr.push(Er[t])
Rr.push(Sr[t++])
Rr.push(xr[n])
Rr.push(Er[n])
Rr.push(Sr[n++])}t=r
n=i
Rr.push(xr[t])
Rr.push(Er[t])
Rr.push(Sr[t])
Rr.push(xr[n])
Rr.push(Er[n])
Rr.push(Sr[n])}for(e=0;e<wr;e++){n=i+e
Rr.push(xr[n])
Rr.push(Er[n])
Rr.push(Sr[n])
Rr.push(0)
Rr.push(1)
Rr.push(0)}Rr.push(xr[i])
Rr.push(Er[i])
Rr.push(Sr[i])
Rr.push(0)
Rr.push(1)
Rr.push(0)
b.bindBuffer(b.ARRAY_BUFFER,Ft)
b.bufferData(b.ARRAY_BUFFER,new u(Rr),b.STATIC_DRAW)}
v.sphereDetail=function(e,t){var r
if(arguments.length===1){e=t=arguments[0]}if(e<3){e=3}if(t<2){t=2}if(e===wr&&t===Ar){return}var n=g.SINCOS_LENGTH/e
var i=new u(e)
var s=new u(e)
for(r=0;r<e;r++){i[r]=Tr[r*n%g.SINCOS_LENGTH|0]
s[r]=_r[r*n%g.SINCOS_LENGTH|0]}var a=e*(t-1)+2
var o=0
xr=new u(a)
Er=new u(a)
Sr=new u(a)
var l=g.SINCOS_LENGTH*.5/t
var f=l
for(r=1;r<t;r++){var h=_r[f%g.SINCOS_LENGTH|0]
var c=-Tr[f%g.SINCOS_LENGTH|0]
for(var p=0;p<e;p++){xr[o]=i[p]*h
Er[o]=c
Sr[o++]=s[p]*h}f+=l}wr=e
Ar=t
oi()}
Sn.prototype.sphere=En.prototype.a3DOnlyFunction
_n.prototype.sphere=function(){var e=arguments[0]
if(wr<3||Ar<2){v.sphereDetail(30)}var t=new On
t.scale(e,e,e)
var r=new On
r.scale(1,-1,1)
r.apply(Ir.array())
r.transpose()
if(R){if(br>0){var n=new On
n.set(r)
var i=new On
i.set(t)
n.mult(i)
var s=new On
s.set(n)
s.invert()
s.transpose()
mn("normalTransform3d",Ct,"normalTransform",false,s.array())
dn("normal3d",Ct,"Normal",3,Ft)}else{vn("normal3d",Ct,"Normal")}b.useProgram(Ct)
vn("aTexture3d",Ct,"aTexture")
mn("model3d",Ct,"model",false,t.array())
mn("view3d",Ct,"view",false,r.array())
dn("vertex3d",Ct,"Vertex",3,Ft)
vn("aColor3d",Ct,"aColor")
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
gn("color3d",Ct,"color",L)
b.drawArrays(b.TRIANGLE_STRIP,0,Rr.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(F>0&&N){b.useProgram(Lt)
mn("model2d",Lt,"model",false,t.array())
mn("view2d",Lt,"view",false,r.array())
dn("vertex2d",Lt,"Vertex",3,Ft)
vn("aTextureCoord2d",Lt,"aTextureCoord")
gn("color2d",Lt,"color",M)
pn("picktype2d",Lt,"picktype",0)
b.drawArrays(b.LINE_STRIP,0,Rr.length/3)}}
v.modelX=function(e,t,r){var n=Ir.array()
var i=Lr.array()
var s=n[0]*e+n[1]*t+n[2]*r+n[3]
var a=n[4]*e+n[5]*t+n[6]*r+n[7]
var o=n[8]*e+n[9]*t+n[10]*r+n[11]
var l=n[12]*e+n[13]*t+n[14]*r+n[15]
var u=i[0]*s+i[1]*a+i[2]*o+i[3]*l
var f=i[12]*s+i[13]*a+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelY=function(e,t,r){var n=Ir.array()
var i=Lr.array()
var s=n[0]*e+n[1]*t+n[2]*r+n[3]
var a=n[4]*e+n[5]*t+n[6]*r+n[7]
var o=n[8]*e+n[9]*t+n[10]*r+n[11]
var l=n[12]*e+n[13]*t+n[14]*r+n[15]
var u=i[4]*s+i[5]*a+i[6]*o+i[7]*l
var f=i[12]*s+i[13]*a+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelZ=function(e,t,r){var n=Ir.array()
var i=Lr.array()
var s=n[0]*e+n[1]*t+n[2]*r+n[3]
var a=n[4]*e+n[5]*t+n[6]*r+n[7]
var o=n[8]*e+n[9]*t+n[10]*r+n[11]
var l=n[12]*e+n[13]*t+n[14]*r+n[15]
var u=i[8]*s+i[9]*a+i[10]*o+i[11]*l
var f=i[12]*s+i[13]*a+i[14]*o+i[15]*l
return f!==0?u/f:u}
Sn.prototype.ambient=En.prototype.a3DOnlyFunction
_n.prototype.ambient=function(e,t,r){b.useProgram(Ct)
pn("usingMat3d",Ct,"usingMat",true)
var n=v.color(e,t,r)
gn("mat_ambient3d",Ct,"mat_ambient",v.color.toGLArray(n).slice(0,3))}
Sn.prototype.emissive=En.prototype.a3DOnlyFunction
_n.prototype.emissive=function(e,t,r){b.useProgram(Ct)
pn("usingMat3d",Ct,"usingMat",true)
var n=v.color(e,t,r)
gn("mat_emissive3d",Ct,"mat_emissive",v.color.toGLArray(n).slice(0,3))}
Sn.prototype.shininess=En.prototype.a3DOnlyFunction
_n.prototype.shininess=function(e){b.useProgram(Ct)
pn("usingMat3d",Ct,"usingMat",true)
gn("shininess3d",Ct,"shininess",e)}
Sn.prototype.specular=En.prototype.a3DOnlyFunction
_n.prototype.specular=function(e,t,r){b.useProgram(Ct)
pn("usingMat3d",Ct,"usingMat",true)
var n=v.color(e,t,r)
gn("mat_specular3d",Ct,"mat_specular",v.color.toGLArray(n).slice(0,3))}
v.screenX=function(e,t,r){var n=Ir.array()
if(n.length===16){var i=n[0]*e+n[1]*t+n[2]*r+n[3]
var s=n[4]*e+n[5]*t+n[6]*r+n[7]
var a=n[8]*e+n[9]*t+n[10]*r+n[11]
var o=n[12]*e+n[13]*t+n[14]*r+n[15]
var l=kr.array()
var u=l[0]*i+l[1]*s+l[2]*a+l[3]*o
var f=l[12]*i+l[13]*s+l[14]*a+l[15]*o
if(f!==0){u/=f}return v.width*(1+u)/2}return Ir.multX(e,t)}
v.screenY=function ls(e,t,r){var n=Ir.array()
if(n.length===16){var i=n[0]*e+n[1]*t+n[2]*r+n[3]
var s=n[4]*e+n[5]*t+n[6]*r+n[7]
var a=n[8]*e+n[9]*t+n[10]*r+n[11]
var o=n[12]*e+n[13]*t+n[14]*r+n[15]
var l=kr.array()
var u=l[4]*i+l[5]*s+l[6]*a+l[7]*o
var f=l[12]*i+l[13]*s+l[14]*a+l[15]*o
if(f!==0){u/=f}return v.height*(1+u)/2}return Ir.multY(e,t)}
v.screenZ=function us(e,t,r){var n=Ir.array()
if(n.length!==16){return 0}var i=kr.array()
var s=n[0]*e+n[1]*t+n[2]*r+n[3]
var a=n[4]*e+n[5]*t+n[6]*r+n[7]
var o=n[8]*e+n[9]*t+n[10]*r+n[11]
var l=n[12]*e+n[13]*t+n[14]*r+n[15]
var u=i[8]*s+i[9]*a+i[10]*o+i[11]*l
var f=i[12]*s+i[13]*a+i[14]*o+i[15]*l
if(f!==0){u/=f}return(u+1)/2}
En.prototype.fill=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===I&&R){return}R=true
I=e}
Sn.prototype.fill=function(){En.prototype.fill.apply(this,arguments)
D=true}
_n.prototype.fill=function(){En.prototype.fill.apply(this,arguments)
L=v.color.toGLArray(I)}
function li(){if(R){if(D){b.fillStyle=v.color.toString(I)
D=false}b.fill()}}v.noFill=function(){R=false}
En.prototype.stroke=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===O&&N){return}N=true
O=e}
Sn.prototype.stroke=function(){En.prototype.stroke.apply(this,arguments)
k=true}
_n.prototype.stroke=function(){En.prototype.stroke.apply(this,arguments)
M=v.color.toGLArray(O)}
function ui(){if(N){if(k){b.strokeStyle=v.color.toString(O)
k=false}b.stroke()}}v.noStroke=function(){N=false}
En.prototype.strokeWeight=function(e){F=e}
Sn.prototype.strokeWeight=function(e){En.prototype.strokeWeight.apply(this,arguments)
b.lineWidth=e}
_n.prototype.strokeWeight=function(e){En.prototype.strokeWeight.apply(this,arguments)
b.useProgram(Lt)
gn("pointSize2d",Lt,"pointSize",e)
b.useProgram(It)
gn("pointSizeUnlitShape",It,"pointSize",e)
b.lineWidth(e)}
v.strokeCap=function(e){E.$ensureContext().lineCap=e}
v.strokeJoin=function(e){E.$ensureContext().lineJoin=e}
Sn.prototype.smooth=function(){$=true
var e=l.style
e.setProperty("image-rendering","optimizeQuality","important")
e.setProperty("-ms-interpolation-mode","bicubic","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=true}}
_n.prototype.smooth=i
Sn.prototype.noSmooth=function(){$=false
var e=l.style
e.setProperty("image-rendering","optimizeSpeed","important")
e.setProperty("image-rendering","-moz-crisp-edges","important")
e.setProperty("image-rendering","-webkit-optimize-contrast","important")
e.setProperty("image-rendering","optimize-contrast","important")
e.setProperty("-ms-interpolation-mode","nearest-neighbor","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=false}}
_n.prototype.noSmooth=i
Sn.prototype.point=function(e,t){if(!N){return}e=r.round(e)
t=r.round(t)
b.fillStyle=v.color.toString(O)
D=true
if(F>1){b.beginPath()
b.arc(e,t,F/2,0,g.TWO_PI,false)
b.fill()}else{b.fillRect(e,t,1,1)}}
_n.prototype.point=function(e,t,r){var n=new On
n.translate(e,t,r||0)
n.transpose()
var i=new On
i.scale(1,-1,1)
i.apply(Ir.array())
i.transpose()
b.useProgram(Lt)
mn("model2d",Lt,"model",false,n.array())
mn("view2d",Lt,"view",false,i.array())
if(F>0&&N){gn("color2d",Lt,"color",M)
pn("picktype2d",Lt,"picktype",0)
dn("vertex2d",Lt,"Vertex",3,Ut)
vn("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.POINTS,0,1)}}
v.beginShape=function(e){Q=e
et=[]
Xr=[]}
Sn.prototype.vertex=function(e,t,r,n){var i=[]
if(qr){qr=false}i["isVert"]=true
i[0]=e
i[1]=t
i[2]=0
i[3]=r
i[4]=n
i[5]=I
i[6]=O
Xr.push(i)}
_n.prototype.vertex=function(e,t,r,i,s){var a=[]
if(qr){qr=false}a["isVert"]=true
if(s===n&&Wt){s=i
i=r
r=0}if(i!==n&&s!==n){if(Yt===g.IMAGE){i/=Xt.width
s/=Xt.height}i=i>1?1:i
i=i<0?0:i
s=s>1?1:s
s=s<0?0:s}a[0]=e
a[1]=t
a[2]=r||0
a[3]=i||0
a[4]=s||0
a[5]=L[0]
a[6]=L[1]
a[7]=L[2]
a[8]=L[3]
a[9]=M[0]
a[10]=M[1]
a[11]=M[2]
a[12]=M[3]
a[13]=H
a[14]=K
a[15]=X
Xr.push(a)}
var fi=function(e,t){var r=new On
r.scale(1,-1,1)
r.apply(Ir.array())
r.transpose()
b.useProgram(It)
mn("uViewUS",It,"uView",false,r.array())
dn("aVertexUS",It,"aVertex",3,Ut)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
dn("aColorUS",It,"aColor",4,Gt)
b.bufferData(b.ARRAY_BUFFER,new u(t),b.STREAM_DRAW)
b.drawArrays(b.POINTS,0,e.length/3)}
var hi=function(e,t,r){var n
if(t==="LINES"){n=b.LINES}else if(t==="LINE_LOOP"){n=b.LINE_LOOP}else{n=b.LINE_STRIP}var i=new On
i.scale(1,-1,1)
i.apply(Ir.array())
i.transpose()
b.useProgram(It)
mn("uViewUS",It,"uView",false,i.array())
dn("aVertexUS",It,"aVertex",3,Bt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
dn("aColorUS",It,"aColor",4,zt)
b.bufferData(b.ARRAY_BUFFER,new u(r),b.STREAM_DRAW)
b.drawArrays(n,0,e.length/3)}
var ci=function(e,t,r,n){var i
if(t==="TRIANGLES"){i=b.TRIANGLES}else if(t==="TRIANGLE_FAN"){i=b.TRIANGLE_FAN}else{i=b.TRIANGLE_STRIP}var s=new On
s.scale(1,-1,1)
s.apply(Ir.array())
s.transpose()
b.useProgram(Ct)
mn("model3d",Ct,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
mn("view3d",Ct,"view",false,s.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
gn("color3d",Ct,"color",[-1,0,0,0])
dn("vertex3d",Ct,"Vertex",3,$t)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
if(Wt&&mt!==null){dt(r)}dn("aColor3d",Ct,"aColor",4,Gt)
b.bufferData(b.ARRAY_BUFFER,new u(r),b.STREAM_DRAW)
vn("normal3d",Ct,"Normal")
if(Wt){pn("usingTexture3d",Ct,"usingTexture",Wt)
dn("aTexture3d",Ct,"aTexture",2,Vt)
b.bufferData(b.ARRAY_BUFFER,new u(n),b.STREAM_DRAW)}b.drawArrays(i,0,e.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}
function gi(){li()
ui()
b.closePath()}Sn.prototype.endShape=function(e){if(Xr.length===0){return}var t=e===g.CLOSE
if(t){Xr.push(Xr[0])}var r=[]
var i=[]
var s=[]
var a=[]
var o=[]
var l
qr=true
var u,f,h
var c=Xr.length
for(u=0;u<c;u++){l=Xr[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
for(f=5;f<9;f++){s.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
for(f=9;f<13;f++){a.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
o.push(l[3])
o.push(l[4])}if(Zr&&(Q===g.POLYGON||Q===n)){if(c>3){var p=[],m=1-tt
b.beginPath()
b.moveTo(Xr[1][0],Xr[1][1])
for(u=1;u+2<c;u++){l=Xr[u]
p[0]=[l[0],l[1]]
p[1]=[l[0]+(m*Xr[u+1][0]-m*Xr[u-1][0])/6,l[1]+(m*Xr[u+1][1]-m*Xr[u-1][1])/6]
p[2]=[Xr[u+1][0]+(m*Xr[u][0]-m*Xr[u+2][0])/6,Xr[u+1][1]+(m*Xr[u][1]-m*Xr[u+2][1])/6]
p[3]=[Xr[u+1][0],Xr[u+1][1]]
b.bezierCurveTo(p[1][0],p[1][1],p[2][0],p[2][1],p[3][0],p[3][1])}gi()}}else if(jr&&(Q===g.POLYGON||Q===n)){b.beginPath()
for(u=0;u<c;u++){l=Xr[u]
if(Xr[u]["isVert"]){if(Xr[u]["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}else{b.bezierCurveTo(Xr[u][0],Xr[u][1],Xr[u][2],Xr[u][3],Xr[u][4],Xr[u][5])}}gi()}else{if(Q===g.POINTS){for(u=0;u<c;u++){l=Xr[u]
if(N){v.stroke(l[6])}v.point(l[0],l[1])}}else if(Q===g.LINES){for(u=0;u+1<c;u+=2){l=Xr[u]
if(N){v.stroke(Xr[u+1][6])}v.line(l[0],l[1],Xr[u+1][0],Xr[u+1][1])}}else if(Q===g.TRIANGLES){for(u=0;u+2<c;u+=3){l=Xr[u]
b.beginPath()
b.moveTo(l[0],l[1])
b.lineTo(Xr[u+1][0],Xr[u+1][1])
b.lineTo(Xr[u+2][0],Xr[u+2][1])
b.lineTo(l[0],l[1])
if(R){v.fill(Xr[u+2][5])
li()}if(N){v.stroke(Xr[u+2][6])
ui()}b.closePath()}}else if(Q===g.TRIANGLE_STRIP){for(u=0;u+1<c;u++){l=Xr[u]
b.beginPath()
b.moveTo(Xr[u+1][0],Xr[u+1][1])
b.lineTo(l[0],l[1])
if(N){v.stroke(Xr[u+1][6])}if(R){v.fill(Xr[u+1][5])}if(u+2<c){b.lineTo(Xr[u+2][0],Xr[u+2][1])
if(N){v.stroke(Xr[u+2][6])}if(R){v.fill(Xr[u+2][5])}}gi()}}else if(Q===g.TRIANGLE_FAN){if(c>2){b.beginPath()
b.moveTo(Xr[0][0],Xr[0][1])
b.lineTo(Xr[1][0],Xr[1][1])
b.lineTo(Xr[2][0],Xr[2][1])
if(R){v.fill(Xr[2][5])
li()}if(N){v.stroke(Xr[2][6])
ui()}b.closePath()
for(u=3;u<c;u++){l=Xr[u]
b.beginPath()
b.moveTo(Xr[0][0],Xr[0][1])
b.lineTo(Xr[u-1][0],Xr[u-1][1])
b.lineTo(l[0],l[1])
if(R){v.fill(l[5])
li()}if(N){v.stroke(l[6])
ui()}b.closePath()}}}else if(Q===g.QUADS){for(u=0;u+3<c;u+=4){l=Xr[u]
b.beginPath()
b.moveTo(l[0],l[1])
for(f=1;f<4;f++){b.lineTo(Xr[u+f][0],Xr[u+f][1])}b.lineTo(l[0],l[1])
if(R){v.fill(Xr[u+3][5])
li()}if(N){v.stroke(Xr[u+3][6])
ui()}b.closePath()}}else if(Q===g.QUAD_STRIP){if(c>3){for(u=0;u+1<c;u+=2){l=Xr[u]
b.beginPath()
if(u+3<c){b.moveTo(Xr[u+2][0],Xr[u+2][1])
b.lineTo(l[0],l[1])
b.lineTo(Xr[u+1][0],Xr[u+1][1])
b.lineTo(Xr[u+3][0],Xr[u+3][1])
if(R){v.fill(Xr[u+3][5])}if(N){v.stroke(Xr[u+3][6])}}else{b.moveTo(l[0],l[1])
b.lineTo(Xr[u+1][0],Xr[u+1][1])}gi()}}}else{b.beginPath()
b.moveTo(Xr[0][0],Xr[0][1])
for(u=1;u<c;u++){l=Xr[u]
if(l["isVert"]){if(l["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}}gi()}}Zr=false
jr=false
Yr=[]
Wr=0
if(t){Xr.pop()}}
_n.prototype.endShape=function(e){if(Xr.length===0){return}var t=e===g.CLOSE
var r=[]
var i=[]
var s=[]
var a=[]
var o=[]
var l
qr=true
var u,f,h
var c=Xr.length
for(u=0;u<c;u++){l=Xr[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
for(f=5;f<9;f++){s.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
for(f=9;f<13;f++){a.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
o.push(l[3])
o.push(l[4])}if(t){i.push(Xr[0][0])
i.push(Xr[0][1])
i.push(Xr[0][2])
for(u=5;u<9;u++){s.push(Xr[0][u])}for(u=9;u<13;u++){a.push(Xr[0][u])}o.push(Xr[0][3])
o.push(Xr[0][4])}if(Zr&&(Q===g.POLYGON||Q===n)){r=i
if(N){hi(r,null,a)}if(R){ci(i,null,s)}}else if(jr&&(Q===g.POLYGON||Q===n)){r=i
r.splice(r.length-3)
a.splice(a.length-4)
if(N){hi(r,null,a)}if(R){ci(i,"TRIANGLES",s)}}else{if(Q===g.POINTS){for(u=0;u<c;u++){l=Xr[u]
for(f=0;f<3;f++){r.push(l[f])}}fi(r,a)}else if(Q===g.LINES){for(u=0;u<c;u++){l=Xr[u]
for(f=0;f<3;f++){r.push(l[f])}}for(u=0;u<c;u++){l=Xr[u]
for(f=5;f<9;f++){s.push(l[f])}}hi(r,"LINES",a)}else if(Q===g.TRIANGLES){if(c>2){for(u=0;u+2<c;u+=3){i=[]
o=[]
r=[]
s=[]
a=[]
for(f=0;f<3;f++){for(h=0;h<3;h++){r.push(Xr[u+f][h])
i.push(Xr[u+f][h])}}for(f=0;f<3;f++){for(h=3;h<5;h++){o.push(Xr[u+f][h])}}for(f=0;f<3;f++){for(h=5;h<9;h++){s.push(Xr[u+f][h])
a.push(Xr[u+f][h+4])}}if(N){hi(r,"LINE_LOOP",a)}if(R||Wt){ci(i,"TRIANGLES",s,o)}}}}else if(Q===g.TRIANGLE_STRIP){if(c>2){for(u=0;u+2<c;u++){r=[]
i=[]
a=[]
s=[]
o=[]
for(f=0;f<3;f++){for(h=0;h<3;h++){r.push(Xr[u+f][h])
i.push(Xr[u+f][h])}}for(f=0;f<3;f++){for(h=3;h<5;h++){o.push(Xr[u+f][h])}}for(f=0;f<3;f++){for(h=5;h<9;h++){a.push(Xr[u+f][h+4])
s.push(Xr[u+f][h])}}if(R||Wt){ci(i,"TRIANGLE_STRIP",s,o)}if(N){hi(r,"LINE_LOOP",a)}}}}else if(Q===g.TRIANGLE_FAN){if(c>2){for(u=0;u<3;u++){l=Xr[u]
for(f=0;f<3;f++){r.push(l[f])}}for(u=0;u<3;u++){l=Xr[u]
for(f=9;f<13;f++){a.push(l[f])}}if(N){hi(r,"LINE_LOOP",a)}for(u=2;u+1<c;u++){r=[]
a=[]
r.push(Xr[0][0])
r.push(Xr[0][1])
r.push(Xr[0][2])
a.push(Xr[0][9])
a.push(Xr[0][10])
a.push(Xr[0][11])
a.push(Xr[0][12])
for(f=0;f<2;f++){for(h=0;h<3;h++){r.push(Xr[u+f][h])}}for(f=0;f<2;f++){for(h=9;h<13;h++){a.push(Xr[u+f][h])}}if(N){hi(r,"LINE_STRIP",a)}}if(R||Wt){ci(i,"TRIANGLE_FAN",s,o)}}}else if(Q===g.QUADS){for(u=0;u+3<c;u+=4){r=[]
for(f=0;f<4;f++){l=Xr[u+f]
for(h=0;h<3;h++){r.push(l[h])}}if(N){hi(r,"LINE_LOOP",a)}if(R){i=[]
s=[]
o=[]
for(f=0;f<3;f++){i.push(Xr[u][f])}for(f=5;f<9;f++){s.push(Xr[u][f])}for(f=0;f<3;f++){i.push(Xr[u+1][f])}for(f=5;f<9;f++){s.push(Xr[u+1][f])}for(f=0;f<3;f++){i.push(Xr[u+3][f])}for(f=5;f<9;f++){s.push(Xr[u+3][f])}for(f=0;f<3;f++){i.push(Xr[u+2][f])}for(f=5;f<9;f++){s.push(Xr[u+2][f])}if(Wt){o.push(Xr[u+0][3])
o.push(Xr[u+0][4])
o.push(Xr[u+1][3])
o.push(Xr[u+1][4])
o.push(Xr[u+3][3])
o.push(Xr[u+3][4])
o.push(Xr[u+2][3])
o.push(Xr[u+2][4])}ci(i,"TRIANGLE_STRIP",s,o)}}}else if(Q===g.QUAD_STRIP){var p=[]
if(c>3){for(u=0;u<2;u++){l=Xr[u]
for(f=0;f<3;f++){r.push(l[f])}}for(u=0;u<2;u++){l=Xr[u]
for(f=9;f<13;f++){a.push(l[f])}}hi(r,"LINE_STRIP",a)
if(c>4&&c%2>0){p=i.splice(i.length-3)
Xr.pop()}for(u=0;u+3<c;u+=2){r=[]
a=[]
for(f=0;f<3;f++){r.push(Xr[u+1][f])}for(f=0;f<3;f++){r.push(Xr[u+3][f])}for(f=0;f<3;f++){r.push(Xr[u+2][f])}for(f=0;f<3;f++){r.push(Xr[u+0][f])}for(f=9;f<13;f++){a.push(Xr[u+1][f])}for(f=9;f<13;f++){a.push(Xr[u+3][f])}for(f=9;f<13;f++){a.push(Xr[u+2][f])}for(f=9;f<13;f++){a.push(Xr[u+0][f])}if(N){hi(r,"LINE_STRIP",a)}}if(R||Wt){ci(i,"TRIANGLE_LIST",s,o)}}}else{if(c===1){for(f=0;f<3;f++){r.push(Xr[0][f])}for(f=9;f<13;f++){a.push(Xr[0][f])}fi(r,a)}else{for(u=0;u<c;u++){l=Xr[u]
for(f=0;f<3;f++){r.push(l[f])}for(f=5;f<9;f++){a.push(l[f])}}if(N&&t){hi(r,"LINE_LOOP",a)}else if(N&&!t){hi(r,"LINE_STRIP",a)}if(R||Wt){ci(i,"TRIANGLE_FAN",s,o)}}}Wt=false
b.useProgram(Ct)
pn("usingTexture3d",Ct,"usingTexture",Wt)}Zr=false
jr=false
Yr=[]
Wr=0}
var pi=function(e,t){var r=1/e
var n=r*r
var i=n*r
t.set(0,0,0,1,i,n,r,0,6*i,2*n,0,0,6*i,0,0,0)}
var mi=function(){if(!St){xt=new On
St=new On
nt=true}var e=tt
xt.set((e-1)/2,(e+3)/2,(-3-e)/2,(1-e)/2,1-e,(-5-e)/2,e+2,(e-1)/2,(e-1)/2,0,(1-e)/2,0,0,1,0,0)
pi(rt,St)
if(!Tt){Et=new On}Et.set(xt)
Et.preApply(Tt)
St.apply(xt)}
Sn.prototype.bezierVertex=function(){jr=true
var e=[]
if(qr){throw"vertex() must be used at least once before calling bezierVertex()"}for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}Xr.push(e)
Xr[Xr.length-1]["isVert"]=false}
_n.prototype.bezierVertex=function(){jr=true
var e=[]
if(qr){throw"vertex() must be used at least once before calling bezierVertex()"}if(arguments.length===9){if(_t===n){_t=new On}var t=Xr.length-1
pi(st,_t)
_t.apply(Rt)
var r=_t.array()
var i=Xr[t][0],s=Xr[t][1],a=Xr[t][2]
var o=r[4]*i+r[5]*arguments[0]+r[6]*arguments[3]+r[7]*arguments[6]
var l=r[8]*i+r[9]*arguments[0]+r[10]*arguments[3]+r[11]*arguments[6]
var u=r[12]*i+r[13]*arguments[0]+r[14]*arguments[3]+r[15]*arguments[6]
var f=r[4]*s+r[5]*arguments[1]+r[6]*arguments[4]+r[7]*arguments[7]
var h=r[8]*s+r[9]*arguments[1]+r[10]*arguments[4]+r[11]*arguments[7]
var c=r[12]*s+r[13]*arguments[1]+r[14]*arguments[4]+r[15]*arguments[7]
var g=r[4]*a+r[5]*arguments[2]+r[6]*arguments[5]+r[7]*arguments[8]
var p=r[8]*a+r[9]*arguments[2]+r[10]*arguments[5]+r[11]*arguments[8]
var m=r[12]*a+r[13]*arguments[2]+r[14]*arguments[5]+r[15]*arguments[8]
for(var d=0;d<st;d++){i+=o
o+=l
l+=u
s+=f
f+=h
h+=c
a+=g
g+=p
p+=m
v.vertex(i,s,a)}v.vertex(arguments[6],arguments[7],arguments[8])}}
v.texture=function(e){var r=E.$ensureContext()
if(e.__texture){r.bindTexture(r.TEXTURE_2D,e.__texture)}else if(e.localName==="canvas"){r.bindTexture(r.TEXTURE_2D,Ht)
r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR)
r.generateMipmap(r.TEXTURE_2D)
Xt.width=e.width
Xt.height=e.height}else{var n=r.createTexture(),i=t.createElement("canvas"),s=i.getContext("2d"),a
if(e.width&e.width-1===0){i.width=e.width}else{a=1
while(a<e.width){a*=2}i.width=a}if(e.height&e.height-1===0){i.height=e.height}else{a=1
while(a<e.height){a*=2}i.height=a}s.drawImage(e.sourceImg,0,0,e.width,e.height,0,0,i.width,i.height)
r.bindTexture(r.TEXTURE_2D,n)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR_MIPMAP_LINEAR)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)
r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)
r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i)
r.generateMipmap(r.TEXTURE_2D)
e.__texture=n
Xt.width=e.width
Xt.height=e.height}Wt=true
r.useProgram(Ct)
pn("usingTexture3d",Ct,"usingTexture",Wt)}
v.textureMode=function(e){Yt=e}
var di=function(e,t,r,n,i,s,a,o,l,u,f,h){var c=n
var g=i
var p=s
var m=St.array()
var d=m[4]*e+m[5]*n+m[6]*a+m[7]*u
var y=m[8]*e+m[9]*n+m[10]*a+m[11]*u
var b=m[12]*e+m[13]*n+m[14]*a+m[15]*u
var A=m[4]*t+m[5]*i+m[6]*o+m[7]*f
var w=m[8]*t+m[9]*i+m[10]*o+m[11]*f
var x=m[12]*t+m[13]*i+m[14]*o+m[15]*f
var E=m[4]*r+m[5]*s+m[6]*l+m[7]*h
var S=m[8]*r+m[9]*s+m[10]*l+m[11]*h
var _=m[12]*r+m[13]*s+m[14]*l+m[15]*h
v.vertex(c,g,p)
for(var T=0;T<rt;T++){c+=d
d+=y
y+=b
g+=A
A+=w
w+=x
p+=E
E+=S
S+=_
v.vertex(c,g,p)}}
Sn.prototype.curveVertex=function(e,t){Zr=true
v.vertex(e,t)}
_n.prototype.curveVertex=function(e,t,r){Zr=true
if(!nt){mi()}var n=[]
n[0]=e
n[1]=t
n[2]=r
Yr.push(n)
Wr++
if(Wr>3){di(Yr[Wr-4][0],Yr[Wr-4][1],Yr[Wr-4][2],Yr[Wr-3][0],Yr[Wr-3][1],Yr[Wr-3][2],Yr[Wr-2][0],Yr[Wr-2][1],Yr[Wr-2][2],Yr[Wr-1][0],Yr[Wr-1][1],Yr[Wr-1][2])}}
Sn.prototype.curve=function(){if(arguments.length===8){v.beginShape()
v.curveVertex(arguments[0],arguments[1])
v.curveVertex(arguments[2],arguments[3])
v.curveVertex(arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7])
v.endShape()}}
_n.prototype.curve=function(){if(arguments.length===12){v.beginShape()
v.curveVertex(arguments[0],arguments[1],arguments[2])
v.curveVertex(arguments[3],arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7],arguments[8])
v.curveVertex(arguments[9],arguments[10],arguments[11])
v.endShape()}}
v.curveTightness=function(e){tt=e}
v.curveDetail=function(e){rt=e
mi()}
v.rectMode=function(e){U=e}
v.imageMode=function(e){switch(e){case g.CORNER:An=bn
break
case g.CORNERS:An=wn
break
case g.CENTER:An=xn
break
default:throw"Invalid imageMode"}}
v.ellipseMode=function(e){V=e}
v.arc=function(e,t,r,n,i,s){if(r<=0||s<i){return}i=v.convertToRadians(i)
s=v.convertToRadians(s)
if(V===g.CORNERS){r=r-e
n=n-t}else if(V===g.RADIUS){e=e-r
t=t-n
r=r*2
n=n*2}else if(V===g.CENTER){e=e-r/2
t=t-n/2}while(i<0){i+=g.TWO_PI
s+=g.TWO_PI}if(s-i>g.TWO_PI){i=0
s=g.TWO_PI}var a=r/2
var o=n/2
var l=e+a
var u=t+o
var f=0|-.5+i*v.RAD_TO_DEG
var h=0|.5+s*v.RAD_TO_DEG
var c,p
if(R){var m=N
N=false
v.beginShape()
v.vertex(l,u)
for(c=f;c<=h;c++){p=c%g.SINCOS_LENGTH
v.vertex(l+Tr[p]*a,u+_r[p]*o)}v.endShape(g.CLOSE)
N=m}if(N){var d=R
R=false
v.beginShape()
for(c=f;c<=h;c++){p=c%g.SINCOS_LENGTH
v.vertex(l+Tr[p]*a,u+_r[p]*o)}v.endShape()
R=d}}
Sn.prototype.line=function(e,t,i,s){if(!N){return}e=r.round(e)
i=r.round(i)
t=r.round(t)
s=r.round(s)
if(e===i&&t===s){v.point(e,t)
return}var a=n,o=n,l=true,u=Ir.array(),f=[1,0,0,0,1,0]
for(var h=0;h<6&&l;h++){l=u[h]===f[h]}if(l){if(e===i){if(t>s){a=t
t=s
s=a}s++
if(F%2===1){b.translate(.5,0)}}else if(t===s){if(e>i){a=e
e=i
i=a}i++
if(F%2===1){b.translate(0,.5)}}if(F===1){o=b.lineCap
b.lineCap="butt"}}b.beginPath()
b.moveTo(e||0,t||0)
b.lineTo(i||0,s||0)
ui()
if(l){if(e===i&&F%2===1){b.translate(-.5,0)}else if(t===s&&F%2===1){b.translate(0,-.5)}if(F===1){b.lineCap=o}}}
_n.prototype.line=function(e,t,r,i,s,a){if(s===n||a===n){a=0
s=i
i=r
r=0}if(e===i&&t===s&&r===a){v.point(e,t,r)
return}var o=[e,t,r,i,s,a]
var l=new On
l.scale(1,-1,1)
l.apply(Ir.array())
l.transpose()
if(F>0&&N){b.useProgram(Lt)
mn("model2d",Lt,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
mn("view2d",Lt,"view",false,l.array())
gn("color2d",Lt,"color",M)
pn("picktype2d",Lt,"picktype",0)
dn("vertex2d",Lt,"Vertex",3,Bt)
vn("aTextureCoord2d",Lt,"aTextureCoord")
b.bufferData(b.ARRAY_BUFFER,new u(o),b.STREAM_DRAW)
b.drawArrays(b.LINES,0,2)}}
Sn.prototype.bezier=function(){if(arguments.length!==8){throw"You must use 8 parameters for bezier() in 2D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1])
v.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])
v.endShape()}
_n.prototype.bezier=function(){if(arguments.length!==12){throw"You must use 12 parameters for bezier() in 3D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1],arguments[2])
v.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11])
v.endShape()}
v.bezierDetail=function(e){st=e}
v.bezierPoint=function(e,t,r,n,i){return(1-i)*(1-i)*(1-i)*e+3*(1-i)*(1-i)*i*t+3*(1-i)*i*i*r+i*i*i*n}
v.bezierTangent=function(e,t,r,n,i){return 3*i*i*(-e+3*t-3*r+n)+6*i*(e-2*t+r)+3*(-e+t)}
v.curvePoint=function(e,t,r,n,i){return.5*(2*t+(-e+r)*i+(2*e-5*t+4*r-n)*i*i+(-e+3*t-3*r+n)*i*i*i)}
v.curveTangent=function(e,t,r,n,i){return.5*(-e+r+2*(2*e-5*t+4*r-n)*i+3*(-e+3*t-3*r+n)*i*i)}
v.triangle=function(e,t,r,n,i,s){v.beginShape(g.TRIANGLES)
v.vertex(e,t,0)
v.vertex(r,n,0)
v.vertex(i,s,0)
v.endShape()}
v.quad=function(e,t,r,n,i,s,a,o){v.beginShape(g.QUADS)
v.vertex(e,t,0)
v.vertex(r,n,0)
v.vertex(i,s,0)
v.vertex(a,o,0)
v.endShape()}
var vi=function(e,t,i,s,a,o,l,u){if(u===n){o=a
l=a
u=a}var f=i/2,h=s/2
if(a>f||a>h){a=r.min(f,h)}if(o>f||o>h){o=r.min(f,h)}if(l>f||l>h){l=r.min(f,h)}if(u>f||u>h){u=r.min(f,h)}if(!R||N){b.translate(.5,.5)}b.beginPath()
b.moveTo(e+a,t)
b.lineTo(e+i-o,t)
b.quadraticCurveTo(e+i,t,e+i,t+o)
b.lineTo(e+i,t+s-l)
b.quadraticCurveTo(e+i,t+s,e+i-l,t+s)
b.lineTo(e+u,t+s)
b.quadraticCurveTo(e,t+s,e,t+s-u)
b.lineTo(e,t+a)
b.quadraticCurveTo(e,t,e+a,t)
if(!R||N){b.translate(-.5,-.5)}li()
ui()}
Sn.prototype.rect=function(e,t,i,s,a,o,l,u){if(!i&&!s){return}if(U===g.CORNERS){i-=e
s-=t}else if(U===g.RADIUS){i*=2
s*=2
e-=i/2
t-=s/2}else if(U===g.CENTER){e-=i/2
t-=s/2}e=r.round(e)
t=r.round(t)
i=r.round(i)
s=r.round(s)
if(a!==n){vi(e,t,i,s,a,o,l,u)
return}if(N&&F%2===1){b.translate(.5,.5)}b.beginPath()
b.rect(e,t,i,s)
li()
ui()
if(N&&F%2===1){b.translate(-.5,-.5)}}
_n.prototype.rect=function(e,t,r,i,s,a,o,l){if(s!==n){throw"rect() with rounded corners is not supported in 3D mode"}if(U===g.CORNERS){r-=e
i-=t}else if(U===g.RADIUS){r*=2
i*=2
e-=r/2
t-=i/2}else if(U===g.CENTER){e-=r/2
t-=i/2}var u=new On
u.translate(e,t,0)
u.scale(r,i,1)
u.transpose()
var f=new On
f.scale(1,-1,1)
f.apply(Ir.array())
f.transpose()
if(F>0&&N){b.useProgram(Lt)
mn("model2d",Lt,"model",false,u.array())
mn("view2d",Lt,"view",false,f.array())
gn("color2d",Lt,"color",M)
pn("picktype2d",Lt,"picktype",0)
dn("vertex2d",Lt,"Vertex",3,Ot)
vn("aTextureCoord2d",Lt,"aTextureCoord")
b.drawArrays(b.LINE_LOOP,0,nn.length/3)}if(R){b.useProgram(Ct)
mn("model3d",Ct,"model",false,u.array())
mn("view3d",Ct,"view",false,f.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
gn("color3d",Ct,"color",L)
if(br>0){var h=new On
h.set(f)
var c=new On
c.set(u)
h.mult(c)
var p=new On
p.set(h)
p.invert()
p.transpose()
mn("normalTransform3d",Ct,"normalTransform",false,p.array())
dn("normal3d",Ct,"Normal",3,kt)}else{vn("normal3d",Ct,"Normal")}dn("vertex3d",Ct,"Vertex",3,Ot)
b.drawArrays(b.TRIANGLE_FAN,0,nn.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}}
Sn.prototype.ellipse=function(e,t,r,n){e=e||0
t=t||0
if(r<=0&&n<=0){return}if(V===g.RADIUS){r*=2
n*=2}else if(V===g.CORNERS){r=r-e
n=n-t
e+=r/2
t+=n/2}else if(V===g.CORNER){e+=r/2
t+=n/2}if(r===n){b.beginPath()
b.arc(e,t,r/2,0,g.TWO_PI,false)
li()
ui()}else{var i=r/2,s=n/2,a=.5522847498307933,o=a*i,l=a*s
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,e+o,t-s,e,t-s)
v.bezierVertex(e-o,t-s,e-i,t-l,e-i,t)
v.bezierVertex(e-i,t+l,e-o,t+s,e,t+s)
v.bezierVertex(e+o,t+s,e+i,t+l,e+i,t)
v.endShape()}}
_n.prototype.ellipse=function(e,t,r,n){e=e||0
t=t||0
if(r<=0&&n<=0){return}if(V===g.RADIUS){r*=2
n*=2}else if(V===g.CORNERS){r=r-e
n=n-t
e+=r/2
t+=n/2}else if(V===g.CORNER){e+=r/2
t+=n/2}var i=r/2,s=n/2,a=.5522847498307933,o=a*i,l=a*s
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,0,e+o,t-s,0,e,t-s,0)
v.bezierVertex(e-o,t-s,0,e-i,t-l,0,e-i,t,0)
v.bezierVertex(e-i,t+l,0,e-o,t+s,0,e,t+s,0)
v.bezierVertex(e+o,t+s,0,e+i,t+l,0,e+i,t,0)
v.endShape()
if(R){var u=0,f=0,h,c
for(h=0;h<Xr.length;h++){u+=Xr[h][0]
f+=Xr[h][1]}u/=Xr.length
f/=Xr.length
var p=[],m=[],d=[]
p[0]=u
p[1]=f
p[2]=0
p[3]=0
p[4]=0
p[5]=L[0]
p[6]=L[1]
p[7]=L[2]
p[8]=L[3]
p[9]=M[0]
p[10]=M[1]
p[11]=M[2]
p[12]=M[3]
p[13]=H
p[14]=K
p[15]=X
Xr.unshift(p)
for(h=0;h<Xr.length;h++){for(c=0;c<3;c++){m.push(Xr[h][c])}for(c=5;c<9;c++){d.push(Xr[h][c])}}ci(m,"TRIANGLE_FAN",d)}}
v.normal=function(e,t,r){if(arguments.length!==3||!(typeof e==="number"&&typeof t==="number"&&typeof r==="number")){throw"normal() requires three numeric arguments."}H=e
K=t
X=r
if(Q!==0){if(Y===g.NORMAL_MODE_AUTO){Y=g.NORMAL_MODE_SHAPE}else if(Y===g.NORMAL_MODE_SHAPE){Y=g.NORMAL_MODE_VERTEX}}}
v.save=function(t,r){if(r!==n){return e.open(r.toDataURL(),"_blank")}return e.open(v.externals.canvas.toDataURL(),"_blank")}
var yi=0
v.saveFrame=function(e){if(e===n){e="screen-####.png"}var t=e.replace(/#+/,function(e){var t=""+yi++
while(t.length<e.length){t="0"+t}return t})
v.save(t)}
var bi=t.createElement("canvas").getContext("2d")
var Ai=[n,n,n]
function wi(e,r,i){var s=Ai.shift()
if(s===n){s={}
s.canvas=t.createElement("canvas")
s.context=s.canvas.getContext("2d")}Ai.push(s)
var a=s.canvas,o=s.context,l=r||e.width,u=i||e.height
a.width=l
a.height=u
if(!e){o.clearRect(0,0,l,u)}else if("data"in e){o.putImageData(e,0,0)}else{o.clearRect(0,0,l,u)
o.drawImage(e,0,0,l,u)}return s}function xi(e){return{getLength:function(e){return function(){if(e.isRemote){throw"Image is loaded remotely. Cannot get length."}else{return e.imageData.data.length?e.imageData.data.length/4:0}}}(e),getPixel:function(e){return function(t){var r=t*4,n=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}return n[r+3]<<24&g.ALPHA_MASK|n[r]<<16&g.RED_MASK|n[r+1]<<8&g.GREEN_MASK|n[r+2]&g.BLUE_MASK}}(e),setPixel:function(e){return function(t,r){var n=t*4,i=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot set pixel."}i[n+0]=(r&g.RED_MASK)>>>16
i[n+1]=(r&g.GREEN_MASK)>>>8
i[n+2]=r&g.BLUE_MASK
i[n+3]=(r&g.ALPHA_MASK)>>>24
e.__isDirty=true}}(e),toArray:function(e){return function(){var t=[],r=e.imageData.data,n=e.width*e.height
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}for(var i=0,s=0;i<n;i++,s+=4){t.push(r[s+3]<<24&g.ALPHA_MASK|r[s]<<16&g.RED_MASK|r[s+1]<<8&g.GREEN_MASK|r[s+2]&g.BLUE_MASK)}return t}}(e),set:function(e){return function(t){var r,n,i
if(this.isRemote){throw"Image is loaded remotely. Cannot set pixels."}n=e.imageData.data
for(var s=0,a=t.length;s<a;s++){i=t[s]
r=s*4
n[r+0]=(i&g.RED_MASK)>>>16
n[r+1]=(i&g.GREEN_MASK)>>>8
n[r+2]=i&g.BLUE_MASK
n[r+3]=(i&g.ALPHA_MASK)>>>24}e.__isDirty=true}}(e)}}var Ei=function(e,r,n){this.__isDirty=false
if(e instanceof HTMLImageElement){this.fromHTMLImageData(e)}else if(r||n){this.width=e||1
this.height=r||1
var i=this.sourceImg=t.createElement("canvas")
i.width=this.width
i.height=this.height
this.format=n===g.ARGB||n===g.ALPHA?n:g.RGB}else{this.width=0
this.height=0
this.format=g.ARGB}}
Ei.prototype={__isPImage:true,updatePixels:function(){var e=this.sourceImg
if(e&&e instanceof HTMLCanvasElement&&this.__isDirty){e.getContext("2d").putImageData(this.imageData,0,0)}this.__isDirty=false},fromHTMLImageData:function(e){var t=wi(e)
if(e.width&&e.height){this.isRemote=true
this.width=e.width
this.height=e.height}this.sourceImg=e},get:function(e,t,r,n){if(!arguments.length){return v.get(this)}if(arguments.length===2){return v.get(e,t,this)}if(arguments.length===4){return v.get(e,t,r,n,this)}},set:function(e,t,r){v.set(e,t,r,this)
this.__isDirty=true},blend:function(e,t,r,n,i,s,a,o,l,u){if(arguments.length===9){v.blend(this,e,t,r,n,i,s,a,o,l,this)}else if(arguments.length===10){v.blend(e,t,r,n,i,s,a,o,l,u,this)}delete this.sourceImg},copy:function(e,t,r,n,i,s,a,o,l){if(arguments.length===8){v.blend(this,e,t,r,n,i,s,a,o,g.REPLACE,this)}else if(arguments.length===9){v.blend(e,t,r,n,i,s,a,o,l,g.REPLACE,this)}delete this.sourceImg},filter:function(e,t){if(arguments.length===2){v.filter(e,t,this)}else if(arguments.length===1){v.filter(e,null,this)}delete this.sourceImg},save:function(e){v.save(e,this)},resize:function(e,t){if(this.isRemote){throw"Image is loaded remotely. Cannot resize."}if(this.width!==0||this.height!==0){if(e===0&&t!==0){e=r.floor(this.width/this.height*t)}else if(t===0&&e!==0){t=r.floor(this.height/this.width*e)}var n=wi(this.imageData).canvas
var i=wi(n,e,t).context.getImageData(0,0,e,t)
this.fromImageData(i)}},mask:function(e){var t=this.toImageData(),r,n
if(e instanceof Ei||e.__isPImage){if(e.width===this.width&&e.height===this.height){e=e.toImageData()
for(r=2,n=this.width*this.height*4;r<n;r+=4){t.data[r+1]=e.data[r]}}else{throw"mask must have the same dimensions as PImage."}}else if(e instanceof Array){if(this.width*this.height===e.length){for(r=0,n=e.length;r<n;++r){t.data[r*4+3]=e[r]}}else{throw"mask array must be the same length as PImage pixels array."}}this.fromImageData(t)},loadPixels:i,toImageData:function(){if(this.isRemote){return this.sourceImg}if(!this.__isDirty){return this.imageData}var e=wi(this.imageData)
return e.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote){throw"Image is loaded remotely. Cannot create dataURI."}var e=wi(this.imageData)
return e.canvas.toDataURL()},fromImageData:function(e){var r=e.width,n=e.height,i=t.createElement("canvas"),s=i.getContext("2d")
this.width=i.width=r
this.height=i.height=n
s.putImageData(e,0,0)
this.format=g.ARGB
this.imageData=e
this.sourceImg=i}}
v.PImage=Ei
v.createImage=function(e,t,r){return new Ei(e,t,r)}
v.loadImage=function(e,r,n){if(r){e=e+"."+r}var i
if(w.imageCache.images[e]){i=new Ei(w.imageCache.images[e])
i.loaded=true
return i}i=new Ei
var s=t.createElement("img")
i.sourceImg=s
s.onload=function(e,t,r){var n=e
var i=t
var s=r
return function(){i.fromHTMLImageData(n)
i.loaded=true
if(s){s()}}}(s,i,n)
s.src=e
return i}
v.requestImage=v.loadImage
function Si(e,t){var r
if(e>=v.width||e<0||t<0||t>=v.height){return 0}if(ur){var n=((0|e)+v.width*(0|t))*4
r=v.imageData.data
return r[n+3]<<24&g.ALPHA_MASK|r[n]<<16&g.RED_MASK|r[n+1]<<8&g.GREEN_MASK|r[n+2]&g.BLUE_MASK}r=v.toImageData(0|e,0|t,1,1).data
return r[3]<<24&g.ALPHA_MASK|r[0]<<16&g.RED_MASK|r[1]<<8&g.GREEN_MASK|r[2]&g.BLUE_MASK}function _i(e,t,r){if(r.isRemote){throw"Image is loaded remotely. Cannot get x,y."}var n=t*r.width*4+e*4,i=r.imageData.data
return i[n+3]<<24&g.ALPHA_MASK|i[n]<<16&g.RED_MASK|i[n+1]<<8&g.GREEN_MASK|i[n+2]&g.BLUE_MASK}function Ti(e,t,r,n){var i=new Ei(r,n,g.ARGB)
i.fromImageData(v.toImageData(e,t,r,n))
return i}function Ri(e,t,n,i,s){if(s.isRemote){throw"Image is loaded remotely. Cannot get x,y,w,h."}var a=new Ei(n,i,g.ARGB),o=a.imageData.data,l=s.width,u=s.height,f=s.imageData.data
var h=r.max(0,-t),c=r.max(0,-e),p=r.min(i,u-t),m=r.min(n,l-e)
for(var d=h;d<p;++d){var v=((t+d)*l+(e+c))*4
var y=(d*n+c)*4
for(var b=c;b<m;++b){o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]}}a.__isDirty=true
return a}v.get=function(e,t,r,n,i){if(i!==undefined){return Ri(e,t,r,n,i)}if(n!==undefined){return Ti(e,t,r,n)}if(r!==undefined){return _i(e,t,r)}if(t!==undefined){return Si(e,t)}if(e!==undefined){return Ri(0,0,e.width,e.height,e)}return Ti(0,0,v.width,v.height)}
v.createGraphics=function(e,t,r){var n=new C
n.size(e,t,r)
return n}
function Pi(){if(ur){b=or
ur=false
v.updatePixels()}}function Ci(){function e(e,t){function r(){Pi()
b[t].apply(b,arguments)}e[t]=r}function t(e,t){function r(){Pi()
return b[t]}function n(e){Pi()
b[t]=e}v.defineProperty(e,t,{get:r,set:n})}for(var r in b){if(typeof b[r]==="function"){e(this,r)}else{t(this,r)}}}function Li(){if(ur){return}v.loadPixels()
if(lr===null){or=b
lr=new Ci}ur=true
b=lr
fr=0}function Ii(e,t,r){if(e<v.width&&e>=0&&t>=0&&t<v.height){Li()
v.pixels.setPixel((0|e)+v.width*(0|t),r)
if(++fr>hr){Pi()}}}function Di(e,t,r,n){if(n.isRemote){throw"Image is loaded remotely. Cannot set x,y."}var i=v.color.toArray(r)
var s=t*n.width*4+e*4
var a=n.imageData.data
a[s]=i[0]
a[s+1]=i[1]
a[s+2]=i[2]
a[s+3]=i[3]}v.set=function(e,t,r,n){var i,s
if(arguments.length===3){if(typeof r==="number"){Ii(e,t,r)}else if(r instanceof Ei||r.__isPImage){v.image(r,e,t)}}else if(arguments.length===4){Di(e,t,r,n)}}
v.imageData={}
v.pixels={getLength:function(){return v.imageData.data.length?v.imageData.data.length/4:0},getPixel:function(e){var t=e*4,r=v.imageData.data
return r[t+3]<<24&4278190080|r[t+0]<<16&16711680|r[t+1]<<8&65280|r[t+2]&255},setPixel:function(e,t){var r=e*4,n=v.imageData.data
n[r+0]=(t&16711680)>>>16
n[r+1]=(t&65280)>>>8
n[r+2]=t&255
n[r+3]=(t&4278190080)>>>24},toArray:function(){var e=[],t=v.imageData.width*v.imageData.height,r=v.imageData.data
for(var n=0,i=0;n<t;n++,i+=4){e.push(r[i+3]<<24&4278190080|r[i+0]<<16&16711680|r[i+1]<<8&65280|r[i+2]&255)}return e},set:function(e){for(var t=0,r=e.length;t<r;t++){this.setPixel(t,e[t])}}}
v.loadPixels=function(){v.imageData=E.$ensureContext().getImageData(0,0,v.width,v.height)}
v.updatePixels=function(){if(v.imageData){E.$ensureContext().putImageData(v.imageData,0,0)}}
v.hint=function(e){var t=E.$ensureContext()
if(e===g.DISABLE_DEPTH_TEST){t.disable(t.DEPTH_TEST)
t.depthMask(false)
t.clear(t.DEPTH_BUFFER_BIT)}else if(e===g.ENABLE_DEPTH_TEST){t.enable(t.DEPTH_TEST)
t.depthMask(true)}}
var Ni=function(e,t,r,n){var i
if(e instanceof Ei||e.__isPImage){i=e
if(!i.loaded){throw"Error using image in background(): PImage not loaded."}if(i.width!==v.width||i.height!==v.height){throw"Background image must be the same dimensions as the canvas."}}else{i=v.color(e,t,r,n)}it=i}
Sn.prototype.background=function(e,t,r,i){if(e!==n){Ni(e,t,r,i)}if(it instanceof Ei||it.__isPImage){zn()
b.setTransform(1,0,0,1,0,0)
v.image(it,0,0)
Un()}else{zn()
b.setTransform(1,0,0,1,0,0)
if(v.alpha(it)!==at){b.clearRect(0,0,v.width,v.height)}b.fillStyle=v.color.toString(it)
b.fillRect(0,0,v.width,v.height)
D=true
Un()}}
_n.prototype.background=function(e,t,r,n){if(arguments.length>0){Ni(e,t,r,n)}var i=v.color.toGLArray(it)
b.clearColor(i[0],i[1],i[2],i[3])
b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)}
Sn.prototype.image=function(e,t,n,i,s){t=r.round(t)
n=r.round(n)
if(e.width>0){var a=i||e.width
var o=s||e.height
var l=An(t||0,n||0,i||e.width,s||e.height,arguments.length<4)
var u=!!e.sourceImg&&mt===null
if(u){var f=e.sourceImg
if(e.__isDirty){e.updatePixels()}b.drawImage(f,0,0,f.width,f.height,l.x,l.y,l.w,l.h)}else{var h=e.toImageData()
if(mt!==null){mt(h)
e.__isDirty=true}b.drawImage(wi(h).canvas,0,0,e.width,e.height,l.x,l.y,l.w,l.h)}}}
_n.prototype.image=function(e,t,n,i,s){if(e.width>0){t=r.round(t)
n=r.round(n)
i=i||e.width
s=s||e.height
v.beginShape(v.QUADS)
v.texture(e)
v.vertex(t,n,0,0,0)
v.vertex(t,n+s,0,0,s)
v.vertex(t+i,n+s,0,i,s)
v.vertex(t+i,n,0,i,0)
v.endShape()}}
v.tint=function(e,t,r,n){var i=v.color(e,t,r,n)
var s=v.red(i)/ot
var a=v.green(i)/lt
var o=v.blue(i)/ut
var l=v.alpha(i)/at
mt=function(e){var t=e.data,r=4*e.width*e.height
for(var n=0;n<r;){t[n++]*=s
t[n++]*=a
t[n++]*=o
t[n++]*=l}}
dt=function(e){for(var t=0;t<e.length;){e[t++]=s
e[t++]=a
e[t++]=o
e[t++]=l}}}
v.noTint=function(){mt=null
dt=null}
v.copy=function(e,t,r,i,s,a,o,l,u){if(u===n){u=l
l=o
o=a
a=s
s=i
i=r
r=t
t=e
e=v}v.blend(e,t,r,i,s,a,o,l,u,g.REPLACE)}
v.blend=function(e,t,r,i,s,a,o,l,u,f,h){if(e.isRemote){throw"Image is loaded remotely. Cannot blend image."}if(f===n){f=u
u=l
l=o
o=a
a=s
s=i
i=r
r=t
t=e
e=v}var c=t+i,g=r+s,p=a+l,m=o+u,d=h||v
if(h===n||f===n){v.loadPixels()}e.loadPixels()
if(e===v&&v.intersect(t,r,c,g,a,o,p,m)){v.blit_resize(v.get(t,r,c-t,g-r),0,0,c-t-1,g-r-1,d.imageData.data,d.width,d.height,a,o,p,m,f)}else{v.blit_resize(e,t,r,c,g,d.imageData.data,d.width,d.height,a,o,p,m,f)}if(h===n){v.updatePixels()}}
var Mi=function(e){var t=v.floor(e*3.5),r,n
t=t<1?1:t<248?t:248
if(v.shared.blurRadius!==t){v.shared.blurRadius=t
v.shared.blurKernelSize=1+(v.shared.blurRadius<<1)
v.shared.blurKernel=new u(v.shared.blurKernelSize)
var i=v.shared.blurKernel
var s=v.shared.blurKernelSize
var a=v.shared.blurRadius
for(r=0;r<s;r++){i[r]=0}var o=(t-1)*(t-1)
for(r=1;r<t;r++){i[t+r]=i[n]=o}i[t]=t*t}}
var Oi=function(e,t){var r,n,i,s,a,o,l
var f,h,c,g,p
var m=t.pixels.getLength()
var d=new u(m)
var y=new u(m)
var b=new u(m)
var A=new u(m)
var w=0
var x,E,S,_
Mi(e)
var T=t.height
var R=t.width
var P=v.shared.blurKernelSize
var C=v.shared.blurRadius
var L=v.shared.blurKernel
var I=t.imageData.data
for(E=0;E<T;E++){for(x=0;x<R;x++){s=i=n=a=r=0
f=x-C
if(f<0){p=-f
f=0}else{if(f>=R){break}p=0}for(S=p;S<P;S++){if(f>=R){break}_=(f+w)*4
l=L[S]
a+=l*I[_+3]
n+=l*I[_]
i+=l*I[_+1]
s+=l*I[_+2]
r+=l
f++}h=w+x
A[h]=a/r
d[h]=n/r
y[h]=i/r
b[h]=s/r}w+=R}w=0
c=-C
g=c*R
for(E=0;E<T;E++){for(x=0;x<R;x++){s=i=n=a=r=0
if(c<0){p=h=-c
f=x}else{if(c>=T){break}p=0
h=c
f=x+g}for(S=p;S<P;S++){if(h>=T){break}l=L[S]
a+=l*A[f]
n+=l*d[f]
i+=l*y[f]
s+=l*b[f]
r+=l
h++
f+=R}_=(x+w)*4
I[_]=n/r
I[_+1]=i/r
I[_+2]=s/r
I[_+3]=a/r}w+=R
g+=R
c++}}
var ki=function(e,t){var r=0
var n=t.pixels.getLength()
var i=new f(n)
var s,a,o,l,u
var h,c,g,p,m,d,v,y,b,A,w,x
if(!e){while(r<n){s=r
a=r+t.width
while(r<a){o=l=t.pixels.getPixel(r)
c=r-1
h=r+1
g=r-t.width
p=r+t.width
if(c<s){c=r}if(h>=a){h=r}if(g<0){g=0}if(p>=n){p=r}v=t.pixels.getPixel(g)
d=t.pixels.getPixel(c)
y=t.pixels.getPixel(p)
m=t.pixels.getPixel(h)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
A=77*(d>>16&255)+151*(d>>8&255)+28*(d&255)
b=77*(m>>16&255)+151*(m>>8&255)+28*(m&255)
w=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
x=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(A>u){l=d
u=A}if(b>u){l=m
u=b}if(w>u){l=v
u=w}if(x>u){l=y
u=x}i[r++]=l}}}else{while(r<n){s=r
a=r+t.width
while(r<a){o=l=t.pixels.getPixel(r)
c=r-1
h=r+1
g=r-t.width
p=r+t.width
if(c<s){c=r}if(h>=a){h=r}if(g<0){g=0}if(p>=n){p=r}v=t.pixels.getPixel(g)
d=t.pixels.getPixel(c)
y=t.pixels.getPixel(p)
m=t.pixels.getPixel(h)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
A=77*(d>>16&255)+151*(d>>8&255)+28*(d&255)
b=77*(m>>16&255)+151*(m>>8&255)+28*(m&255)
w=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
x=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(A<u){l=d
u=A}if(b<u){l=m
u=b}if(w<u){l=v
u=w}if(x<u){l=y
u=x}i[r++]=l}}}t.pixels.set(i)}
v.filter=function(e,t,r){var i,s,a,o
if(arguments.length===3){r.loadPixels()
i=r}else{v.loadPixels()
i=v}if(t===n){t=null}if(i.isRemote){throw"Image is loaded remotely. Cannot filter image."}var l=i.pixels.getLength()
switch(e){case g.BLUR:var u=t||1
Oi(u,i)
break
case g.GRAY:if(i.format===g.ALPHA){for(o=0;o<l;o++){s=255-i.pixels.getPixel(o)
i.pixels.setPixel(o,4278190080|s<<16|s<<8|s)}i.format=g.RGB}else{for(o=0;o<l;o++){s=i.pixels.getPixel(o)
a=77*(s>>16&255)+151*(s>>8&255)+28*(s&255)>>8
i.pixels.setPixel(o,s&g.ALPHA_MASK|a<<16|a<<8|a)}}break
case g.INVERT:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)^16777215)}break
case g.POSTERIZE:if(t===null){throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"}var f=v.floor(t)
if(f<2||f>255){throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"}var h=f-1
for(o=0;o<l;o++){var c=i.pixels.getPixel(o)>>16&255
var p=i.pixels.getPixel(o)>>8&255
var m=i.pixels.getPixel(o)&255
c=(c*f>>8)*255/h
p=(p*f>>8)*255/h
m=(m*f>>8)*255/h
i.pixels.setPixel(o,4278190080&i.pixels.getPixel(o)|c<<16|p<<8|m)}break
case g.OPAQUE:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)|4278190080)}i.format=g.RGB
break
case g.THRESHOLD:if(t===null){t=.5}if(t<0||t>1){throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"}var d=v.floor(t*255)
for(o=0;o<l;o++){var y=v.max((i.pixels.getPixel(o)&g.RED_MASK)>>16,v.max((i.pixels.getPixel(o)&g.GREEN_MASK)>>8,i.pixels.getPixel(o)&g.BLUE_MASK))
i.pixels.setPixel(o,i.pixels.getPixel(o)&g.ALPHA_MASK|(y<d?0:16777215))}break
case g.ERODE:ki(true,i)
break
case g.DILATE:ki(false,i)
break}i.updatePixels()}
v.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null}
v.intersect=function(e,t,r,n,i,s,a,o){var l=r-e+1
var u=n-t+1
var f=a-i+1
var h=o-s+1
if(i<e){f+=i-e
if(f>l){f=l}}else{var c=l+e-i
if(f>c){f=c}}if(s<t){h+=s-t
if(h>u){h=u}}else{var g=u+t-s
if(h>g){h=g}}return!(f<=0||h<=0)}
var Fi={}
Fi[g.BLEND]=v.modes.blend
Fi[g.ADD]=v.modes.add
Fi[g.SUBTRACT]=v.modes.subtract
Fi[g.LIGHTEST]=v.modes.lightest
Fi[g.DARKEST]=v.modes.darkest
Fi[g.REPLACE]=v.modes.replace
Fi[g.DIFFERENCE]=v.modes.difference
Fi[g.EXCLUSION]=v.modes.exclusion
Fi[g.MULTIPLY]=v.modes.multiply
Fi[g.SCREEN]=v.modes.screen
Fi[g.OVERLAY]=v.modes.overlay
Fi[g.HARD_LIGHT]=v.modes.hard_light
Fi[g.SOFT_LIGHT]=v.modes.soft_light
Fi[g.DODGE]=v.modes.dodge
Fi[g.BURN]=v.modes.burn
v.blit_resize=function(e,t,n,i,s,a,o,l,u,f,h,c,p){var m,d
if(t<0){t=0}if(n<0){n=0}if(i>=e.width){i=e.width-1}if(s>=e.height){s=e.height-1}var y=i-t
var b=s-n
var A=h-u
var w=c-f
if(A<=0||w<=0||y<=0||b<=0||u>=o||f>=l||t>=e.width||n>=e.height){return}var x=r.floor(y/A*g.PRECISIONF)
var E=r.floor(b/w*g.PRECISIONF)
var S=v.shared
S.srcXOffset=r.floor(u<0?-u*x:t*g.PRECISIONF)
S.srcYOffset=r.floor(f<0?-f*E:n*g.PRECISIONF)
if(u<0){A+=u
u=0}if(f<0){w+=f
f=0}A=r.min(A,o-u)
w=r.min(w,l-f)
var _=f*o+u
var T
S.srcBuffer=e.imageData.data
S.iw=e.width
S.iw1=e.width-1
S.ih1=e.height-1
var R=v.filter_bilinear,P=v.filter_new_scanline,C=Fi[p],L,I,D,N,M,O,k=g.ALPHA_MASK,F=g.RED_MASK,B=g.GREEN_MASK,$=g.BLUE_MASK,G=g.PREC_MAXVAL,z=g.PRECISIONB,U=g.PREC_RED_SHIFT,V=g.PREC_ALPHA_SHIFT,H=S.srcBuffer,K=r.min
for(d=0;d<w;d++){S.sX=S.srcXOffset
S.fracV=S.srcYOffset&G
S.ifV=G-S.fracV
S.v1=(S.srcYOffset>>z)*S.iw
S.v2=K((S.srcYOffset>>z)+1,S.ih1)*S.iw
for(m=0;m<A;m++){I=(_+m)*4
T=a[I+3]<<24&k|a[I]<<16&F|a[I+1]<<8&B|a[I+2]&$
S.fracU=S.sX&G
S.ifU=G-S.fracU
S.ul=S.ifU*S.ifV>>z
S.ll=S.ifU*S.fracV>>z
S.ur=S.fracU*S.ifV>>z
S.lr=S.fracU*S.fracV>>z
S.u1=S.sX>>z
S.u2=K(S.u1+1,S.iw1)
D=(S.v1+S.u1)*4
N=(S.v1+S.u2)*4
M=(S.v2+S.u1)*4
O=(S.v2+S.u2)*4
S.cUL=H[D+3]<<24&k|H[D]<<16&F|H[D+1]<<8&B|H[D+2]&$
S.cUR=H[N+3]<<24&k|H[N]<<16&F|H[N+1]<<8&B|H[N+2]&$
S.cLL=H[M+3]<<24&k|H[M]<<16&F|H[M+1]<<8&B|H[M+2]&$
S.cLR=H[O+3]<<24&k|H[O]<<16&F|H[O+1]<<8&B|H[O+2]&$
S.r=S.ul*((S.cUL&F)>>16)+S.ll*((S.cLL&F)>>16)+S.ur*((S.cUR&F)>>16)+S.lr*((S.cLR&F)>>16)<<U&F
S.g=S.ul*(S.cUL&B)+S.ll*(S.cLL&B)+S.ur*(S.cUR&B)+S.lr*(S.cLR&B)>>>z&B
S.b=S.ul*(S.cUL&$)+S.ll*(S.cLL&$)+S.ur*(S.cUR&$)+S.lr*(S.cLR&$)>>>z
S.a=S.ul*((S.cUL&k)>>>24)+S.ll*((S.cLL&k)>>>24)+S.ur*((S.cUR&k)>>>24)+S.lr*((S.cLR&k)>>>24)<<V&k
L=C(T,S.a|S.r|S.g|S.b)
a[I]=(L&F)>>>16
a[I+1]=(L&B)>>>8
a[I+2]=L&$
a[I+3]=(L&k)>>>24
S.sX+=x}_+=o
S.srcYOffset+=E}}
v.loadFont=function(e,t){if(e===n){throw"font name required in loadFont."}if(e.indexOf(".svg")===-1){if(t===n){t=ar.size}return P.get(e,t)}var r=v.loadGlyphs(e)
return{name:e,css:"12px sans-serif",glyph:true,units_per_em:r.units_per_em,horiz_adv_x:1/r.units_per_em*r.horiz_adv_x,ascent:r.ascent,descent:r.descent,width:function(t){var r=0
var n=t.length
for(var i=0;i<n;i++){try{r+=parseFloat(v.glyphLook(v.glyphTable[e],t[i]).horiz_adv_x)}catch(s){C.debug(s)}}return r/v.glyphTable[e].units_per_em}}}
v.createFont=function(e,t){return v.loadFont(e,t)}
v.textFont=function(e,t){if(t!==n){if(!e.glyph){e=P.get(e.name,t)}rr=t}ar=e
tr=ar.name
nr=ar.ascent
ir=ar.descent
sr=ar.leading
var r=E.$ensureContext()
r.font=ar.css}
v.textSize=function(e){if(e!==rr){ar=P.get(tr,e)
rr=e
nr=ar.ascent
ir=ar.descent
sr=ar.leading
var t=E.$ensureContext()
t.font=ar.css}}
v.textAscent=function(){return nr}
v.textDescent=function(){return ir}
v.textLeading=function(e){sr=e}
v.textAlign=function(e,t){Qt=e
Jt=t||g.BASELINE}
function Bi(e){if(e instanceof String){return e}if(typeof e==="number"){if(e===(0|e)){return e.toString()}return v.nf(e,0,3)}if(e===null||e===n){return""}return e.toString()}Sn.prototype.textWidth=function(e){var t=Bi(e).split(/\r?\n/g),n=0
var i,s=t.length
b.font=ar.css
for(i=0;i<s;++i){n=r.max(n,ar.measureTextWidth(t[i]))}return n|0}
_n.prototype.textWidth=function(e){var i=Bi(e).split(/\r?\n/g),s=0
var a,o=i.length
if(wt===n){wt=t.createElement("canvas")}var l=wt.getContext("2d")
l.font=ar.css
for(a=0;a<o;++a){s=r.max(s,l.measureText(i[a]).width)}return s|0}
v.glyphLook=function(e,t){try{switch(t){case"1":return e.one
case"2":return e.two
case"3":return e.three
case"4":return e.four
case"5":return e.five
case"6":return e.six
case"7":return e.seven
case"8":return e.eight
case"9":return e.nine
case"0":return e.zero
case" ":return e.space
case"$":return e.dollar
case"!":return e.exclam
case'"':return e.quotedbl
case"#":return e.numbersign
case"%":return e.percent
case"&":return e.ampersand
case"'":return e.quotesingle
case"(":return e.parenleft
case")":return e.parenright
case"*":return e.asterisk
case"+":return e.plus
case",":return e.comma
case"-":return e.hyphen
case".":return e.period
case"/":return e.slash
case"_":return e.underscore
case":":return e.colon
case";":return e.semicolon
case"<":return e.less
case"=":return e.equal
case">":return e.greater
case"?":return e.question
case"@":return e.at
case"[":return e.bracketleft
case"\\":return e.backslash
case"]":return e.bracketright
case"^":return e.asciicircum
case"`":return e.grave
case"{":return e.braceleft
case"|":return e.bar
case"}":return e.braceright
case"~":return e.asciitilde
default:return e[t]}}catch(r){C.debug(r)}}
Sn.prototype.text$line=function(e,t,r,n,i){var s=0,a=0
if(!ar.glyph){if(e&&"fillText"in b){if(D){b.fillStyle=v.color.toString(I)
D=false}if(i===g.RIGHT||i===g.CENTER){s=ar.measureTextWidth(e)
if(i===g.RIGHT){a=-s}else{a=-s/2}}b.fillText(e,t+a,r)}}else{var o=v.glyphTable[tr]
zn()
b.translate(t,r+rr)
if(i===g.RIGHT||i===g.CENTER){s=o.width(e)
if(i===g.RIGHT){a=-s}else{a=-s/2}}var l=o.units_per_em,u=1/l*rr
b.scale(u,u)
for(var f=0,h=e.length;f<h;f++){try{v.glyphLook(o,e[f]).draw()}catch(c){C.debug(c)}}Un()}}
_n.prototype.text$line=function(e,r,i,s,a){if(wt===n){wt=t.createElement("canvas")}var o=b
b=wt.getContext("2d")
b.font=ar.css
var l=ar.measureTextWidth(e)
wt.width=l
wt.height=rr
b=wt.getContext("2d")
b.font=ar.css
b.textBaseline="top"
Sn.prototype.text$line(e,0,0,0,g.LEFT)
var u=wt.width/wt.height
b=o
b.bindTexture(b.TEXTURE_2D,Kt)
b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,wt)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE)
var f=0
if(a===g.RIGHT){f=-l}else if(a===g.CENTER){f=-l/2}var h=new On
var c=rr*.5
h.translate(r+f-c/2,i-c,s)
h.scale(-u*c,-c,c)
h.translate(-1,-1,-1)
h.transpose()
var p=new On
p.scale(1,-1,1)
p.apply(Ir.array())
p.transpose()
b.useProgram(Lt)
dn("vertex2d",Lt,"Vertex",3,Zt)
dn("aTextureCoord2d",Lt,"aTextureCoord",2,jt)
pn("uSampler2d",Lt,"uSampler",[0])
pn("picktype2d",Lt,"picktype",1)
mn("model2d",Lt,"model",false,h.array())
mn("view2d",Lt,"view",false,p.array())
gn("color2d",Lt,"color",L)
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,qt)
b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}
function $i(e,t,r,n){var i,s
if(e.indexOf("\n")<0){i=[e]
s=1}else{i=e.split(/\r?\n/g)
s=i.length}var a=0
if(Jt===g.TOP){a=nr+ir}else if(Jt===g.CENTER){a=nr/2-(s-1)*sr/2}else if(Jt===g.BOTTOM){a=-(ir+(s-1)*sr)}for(var o=0;o<s;++o){var l=i[o]
E.text$line(l,t,r+a,n,Qt)
a+=sr}}function Gi(e,t,n,i,s,a){if(e.length===0||i===0||s===0){return}if(rr>s){return}var o=-1
var l=0
var u=0
var f=[]
for(var h=0,c=e.length;h<c;h++){var p=e[h]
var m=p===" "
var d=ar.measureTextWidth(p)
if(p!=="\n"&&u+d<=i){if(m){o=h}u+=d}else{if(o+1===l){if(h>0){o=h}else{return}}if(p==="\n"){f.push({text:e.substring(l,h),width:u})
l=h+1}else{f.push({text:e.substring(l,o+1),width:u})
l=o+1}u=0
h=l-1}}if(l<c){f.push({text:e.substring(l),width:u})}var v=1,y=nr
if(Qt===g.CENTER){v=i/2}else if(Qt===g.RIGHT){v=i}var b=f.length,A=r.min(b,r.floor(s/sr))
if(Jt===g.TOP){y=nr+ir}else if(Jt===g.CENTER){y=s/2-sr*(A/2-1)}else if(Jt===g.BOTTOM){y=ir+sr}var w,x,S
for(w=0;w<b;w++){S=w*sr
if(y+S>s-ir){break}x=f[w]
E.text$line(x.text,t+v,n+y+S,a,Qt)}}v.text=function(){if(b.font!==ar.css){b.font=ar.css}if(er===g.SHAPE){return}if(arguments.length===3){$i(Bi(arguments[0]),arguments[1],arguments[2],0)}else if(arguments.length===4){$i(Bi(arguments[0]),arguments[1],arguments[2],arguments[3])}else if(arguments.length===5){Gi(Bi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0)}else if(arguments.length===6){Gi(Bi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
v.textMode=function(e){er=e}
v.loadGlyphs=function(i){var s,a,o,l,u,f,h,c,g,p,m,d="[0-9\\-]+",y
var b=function(e,t){var r=0,n=[],i,s=new RegExp(e,"g")
i=n[r]=s.exec(t)
while(i){r++
i=n[r]=s.exec(t)}return n}
var A=function(e){var t=b("[A-Za-z][0-9\\- ]+|Z",e)
var n=function(){zn()
return E.$ensureContext()}
var i=function(){li()
ui()
Un()}
y="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();"
s=0
a=0
o=0
l=0
u=0
f=0
e=0
c=0
g=""
p=t.length-1
for(var h=0;h<p;h++){var A=t[h][0],w=b(d,A)
switch(A[0]){case"M":s=parseFloat(w[0][0])
a=parseFloat(w[1][0])
y+="curContext.moveTo("+s+","+-a+");"
break
case"L":s=parseFloat(w[0][0])
a=parseFloat(w[1][0])
y+="curContext.lineTo("+s+","+-a+");"
break
case"H":s=parseFloat(w[0][0])
y+="curContext.lineTo("+s+","+-a+");"
break
case"V":a=parseFloat(w[0][0])
y+="curContext.lineTo("+s+","+-a+");"
break
case"T":u=parseFloat(w[0][0])
f=parseFloat(w[1][0])
if(g==="Q"||g==="T"){e=r.sqrt(r.pow(s-o,2)+r.pow(l-a,2))
c=(v.angleMode==="degrees"?180:r.PI)+v.atan2(o-s,l-a)
o=s+v.sin(c)*e
l=a+v.cos(c)*e}else{o=s
l=a}y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
s=u
a=f
break
case"Q":o=parseFloat(w[0][0])
l=parseFloat(w[1][0])
u=parseFloat(w[2][0])
f=parseFloat(w[3][0])
y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
s=u
a=f
break
case"Z":y+="curContext.closePath();"
break}g=A[0]}y+="afterPathDraw();"
y+="curContext.translate("+m+",0);"
y+="}}"
return new Function("beforePathDraw","afterPathDraw",y)(n,i)}
var w=function(e){var t=e.getElementsByTagName("font")
v.glyphTable[i].horiz_adv_x=t[0].getAttribute("horiz-adv-x")
var r=e.getElementsByTagName("font-face")[0]
v.glyphTable[i].units_per_em=parseFloat(r.getAttribute("units-per-em"))
v.glyphTable[i].ascent=parseFloat(r.getAttribute("ascent"))
v.glyphTable[i].descent=parseFloat(r.getAttribute("descent"))
var s=e.getElementsByTagName("glyph"),a=s.length
for(var o=0;o<a;o++){var l=s[o].getAttribute("unicode")
var u=s[o].getAttribute("glyph-name")
m=s[o].getAttribute("horiz-adv-x")
if(m===null){m=v.glyphTable[i].horiz_adv_x}h=s[o].getAttribute("d")
if(h!==n){y=A(h)
v.glyphTable[i][u]={name:u,unicode:l,horiz_adv_x:m,draw:y.draw}}}}
var x=function(){var r
try{r=t.implementation.createDocument("","",null)}catch(n){C.debug(n.message)
return}try{r.async=false
r.load(i)
w(r.getElementsByTagName("svg")[0])}catch(s){C.debug(s)
try{var a=new e.XMLHttpRequest
a.open("GET",i,false)
a.send(null)
w(a.responseXML.documentElement)}catch(o){C.debug(s)}}}
v.glyphTable[i]={}
x(i)
return v.glyphTable[i]}
v.param=function(e){var t="data-processing-"+e
if(l.hasAttribute(t)){return l.getAttribute(t)}for(var r=0,n=l.childNodes.length;r<n;++r){var i=l.childNodes.item(r)
if(i.nodeType!==1||i.tagName.toLowerCase()!=="param"){continue}if(i.getAttribute("name")===e){return i.getAttribute("value")}}if(w.params.hasOwnProperty(e)){return w.params[e]}return null}
function zi(e){if(e==="3D"){E=new _n}else if(e==="2D"){E=new Sn}else{E=new Tn}for(var t in Tn.prototype){if(Tn.prototype.hasOwnProperty(t)&&t.indexOf("$")<0){v[t]=E[t]}}E.$init()}function Ui(e){return function(){zi("2D")
return E[e].apply(this,arguments)}}Tn.prototype.translate=Ui("translate")
Tn.prototype.scale=Ui("scale")
Tn.prototype.pushMatrix=Ui("pushMatrix")
Tn.prototype.popMatrix=Ui("popMatrix")
Tn.prototype.resetMatrix=Ui("resetMatrix")
Tn.prototype.applyMatrix=Ui("applyMatrix")
Tn.prototype.rotate=Ui("rotate")
Tn.prototype.rotateZ=Ui("rotateZ")
Tn.prototype.redraw=Ui("redraw")
Tn.prototype.toImageData=Ui("toImageData")
Tn.prototype.ambientLight=Ui("ambientLight")
Tn.prototype.directionalLight=Ui("directionalLight")
Tn.prototype.lightFalloff=Ui("lightFalloff")
Tn.prototype.lightSpecular=Ui("lightSpecular")
Tn.prototype.pointLight=Ui("pointLight")
Tn.prototype.noLights=Ui("noLights")
Tn.prototype.spotLight=Ui("spotLight")
Tn.prototype.beginCamera=Ui("beginCamera")
Tn.prototype.endCamera=Ui("endCamera")
Tn.prototype.frustum=Ui("frustum")
Tn.prototype.box=Ui("box")
Tn.prototype.sphere=Ui("sphere")
Tn.prototype.ambient=Ui("ambient")
Tn.prototype.emissive=Ui("emissive")
Tn.prototype.shininess=Ui("shininess")
Tn.prototype.specular=Ui("specular")
Tn.prototype.fill=Ui("fill")
Tn.prototype.stroke=Ui("stroke")
Tn.prototype.strokeWeight=Ui("strokeWeight")
Tn.prototype.smooth=Ui("smooth")
Tn.prototype.noSmooth=Ui("noSmooth")
Tn.prototype.point=Ui("point")
Tn.prototype.vertex=Ui("vertex")
Tn.prototype.endShape=Ui("endShape")
Tn.prototype.bezierVertex=Ui("bezierVertex")
Tn.prototype.curveVertex=Ui("curveVertex")
Tn.prototype.curve=Ui("curve")
Tn.prototype.line=Ui("line")
Tn.prototype.bezier=Ui("bezier")
Tn.prototype.rect=Ui("rect")
Tn.prototype.ellipse=Ui("ellipse")
Tn.prototype.background=Ui("background")
Tn.prototype.image=Ui("image")
Tn.prototype.textWidth=Ui("textWidth")
Tn.prototype.text$line=Ui("text$line")
Tn.prototype.$ensureContext=Ui("$ensureContext")
Tn.prototype.$newPMatrix=Ui("$newPMatrix")
Tn.prototype.size=function(e,t,r){zi(r===g.WEBGL?"3D":"2D")
v.size(e,t,r)}
Tn.prototype.$init=i
Sn.prototype.$init=function(){v.size(v.width,v.height)
b.lineCap="round"
v.noSmooth()
v.disableContextMenu()}
_n.prototype.$init=function(){v.use3DContext=true}
En.prototype.$ensureContext=function(){return b}
function Vi(t,r){var n=t,i=0,s=0
v.pmouseX=v.mouseX
v.pmouseY=v.mouseY
if(n.offsetParent){do{i+=n.offsetLeft
s+=n.offsetTop}while(!!(n=n.offsetParent))}n=t
do{i-=n.scrollLeft||0
s-=n.scrollTop||0}while(!!(n=n.parentNode))
i+=mr
s+=dr
i+=vr
s+=yr
i+=e.pageXOffset
s+=e.pageYOffset
return{X:i,Y:s}}function Hi(e,t){var r=Vi(e,t)
v.mouseX=t.pageX-r.X
v.mouseY=t.pageY-r.Y}function Ki(e){var t=Vi(e.changedTouches[0].target,e.changedTouches[0]),r
for(r=0;r<e.touches.length;r++){var n=e.touches[r]
n.offsetX=n.pageX-t.X
n.offsetY=n.pageY-t.Y}for(r=0;r<e.targetTouches.length;r++){var i=e.targetTouches[r]
i.offsetX=i.pageX-t.X
i.offsetY=i.pageY-t.Y}for(r=0;r<e.changedTouches.length;r++){var s=e.changedTouches[r]
s.offsetX=s.pageX-t.X
s.offsetY=s.pageY-t.Y}return e}Kn(l,"touchstart",function(e){l.setAttribute("style","-webkit-user-select: none")
l.setAttribute("onclick","void(0)")
l.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)")
for(var t=0,r=Hn.length;t<r;t++){var i=Hn[t].type
if(i==="mouseout"||i==="mousemove"||i==="mousedown"||i==="mouseup"||i==="DOMMouseScroll"||i==="mousewheel"||i==="touchstart"){Xn(Hn[t])}}if(v.touchStart!==n||v.touchMove!==n||v.touchEnd!==n||v.touchCancel!==n){Kn(l,"touchstart",function(e){if(v.touchStart!==n){e=Ki(e)
v.touchStart(e)}})
Kn(l,"touchmove",function(e){if(v.touchMove!==n){e.preventDefault()
e=Ki(e)
v.touchMove(e)}})
Kn(l,"touchend",function(e){if(v.touchEnd!==n){e=Ki(e)
v.touchEnd(e)}})
Kn(l,"touchcancel",function(e){if(v.touchCancel!==n){e=Ki(e)
v.touchCancel(e)}})}else{Kn(l,"touchstart",function(e){Hi(l,e.touches[0])
v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
v.mouseButton=g.LEFT
if(typeof v.mousePressed==="function"){v.mousePressed()}})
Kn(l,"touchmove",function(e){e.preventDefault()
Hi(l,e.touches[0])
if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
Kn(l,"touchend",function(e){v.mouseIsPressed=v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})}l.dispatchEvent(e)});(function(){var e=true,t=function(e){e.preventDefault()
e.stopPropagation()}
v.disableContextMenu=function(){if(!e){return}Kn(l,"contextmenu",t)
e=false}
v.enableContextMenu=function(){if(e){return}Xn({elem:l,type:"contextmenu",fn:t})
e=true}})()
Kn(l,"mousemove",function(e){Hi(l,e)
if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
Kn(l,"mouseout",function(e){if(typeof v.mouseOut==="function"){v.mouseOut()}})
Kn(l,"mouseover",function(e){Hi(l,e)
if(typeof v.mouseOver==="function"){v.mouseOver()}})
Kn(l,"mousedown",function(e){v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
switch(e.which){case 1:v.mouseButton=g.LEFT
break
case 2:v.mouseButton=g.CENTER
break
case 3:v.mouseButton=g.RIGHT
break}if(typeof v.mousePressed==="function"){v.mousePressed()}})
Kn(l,"mouseup",function(e){v.mouseIsPressed=v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})
var Xi=function(t){var r=0
if(t.wheelDelta){r=t.wheelDelta/120
if(e.opera){r=-r}}else if(t.detail){r=-t.detail/3}v.mouseScroll=r
if(r&&typeof v.mouseScrolled==="function"){v.mouseScrolled()}}
Kn(t,"DOMMouseScroll",Xi)
Kn(t,"mousewheel",Xi)
if(typeof l==="string"){l=t.getElementById(l)}if(!l.getAttribute("tabindex")){l.setAttribute("tabindex",0)}function Yi(e){var t=e.which||e.keyCode
switch(t){case 13:return 10
case 91:case 93:case 224:return 157
case 57392:return 17
case 46:return 127
case 45:return 155}return t}function Wi(e){var t=e.which||e.keyCode
var r=e.shiftKey||e.ctrlKey||e.altKey||e.metaKey
switch(t){case 13:t=r?13:10
break
case 8:t=r?127:8
break}return new Pn(t)}function Zi(e){if(typeof e.preventDefault==="function"){e.preventDefault()}else if(typeof e.stopPropagation==="function"){e.stopPropagation()}return false}function ji(){var e
for(e in cr){if(cr.hasOwnProperty(e)){v.keyIsPressed=v.__keyPressed=true
return}}v.keyIsPressed=v.__keyPressed=false}function qi(){v.keyIsPressed=v.__keyPressed=false
cr=[]
gr=null}function Qi(e,t){cr[e]=t
gr=null
v.key=t
v.keyCode=e
v.keyPressed()
v.keyCode=0
v.keyTyped()
ji()}function Ji(e){var t=Yi(e)
if(t===g.DELETE||t===g.BACKSPACE){Qi(t,new Pn(t))
return Zi(e)}if(pr.indexOf(t)<0){gr=t
return}var r=new Pn(g.CODED)
v.key=r
v.keyCode=t
cr[t]=r
v.keyPressed()
gr=null
ji()
return Zi(e)}function es(e){if(gr===null){return}var t=gr,r=Wi(e)
Qi(t,r)
return Zi(e)}function ts(e){var t=Yi(e),r=cr[t]
if(r===n){return}v.key=r
v.keyCode=t
v.keyReleased()
delete cr[t]
ji()}if(!m){if(o instanceof C.Sketch){w=o}else if(typeof o==="function"){w=new C.Sketch(o)}else if(!o){w=new C.Sketch(function(){})}else{w=C.compile(o)}v.externals.sketch=w
zi()
l.onfocus=function(){v.focused=true}
l.onblur=function(){v.focused=false
if(!w.options.globalKeyEvents){qi()}}
if(w.options.pauseOnBlur){Kn(e,"focus",function(){if(G){v.loop()}})
Kn(e,"blur",function(){if(G&&B){v.noLoop()
G=true}qi()})}var rs=w.options.globalKeyEvents?e:l
Kn(rs,"keydown",Ji)
Kn(rs,"keypress",es)
Kn(rs,"keyup",ts)
for(var ns in C.lib){if(C.lib.hasOwnProperty(ns)){if(C.lib[ns].hasOwnProperty("attach")){C.lib[ns].attach(v)}else if(C.lib[ns]instanceof Function){C.lib[ns].call(this)}}}var is=100
var ss=function(r){if(!(w.imageCache.pending||P.preloading.pending(is))){if(e.opera){var n,i,s=w.imageCache.operaCache
for(n in s){if(s.hasOwnProperty(n)){i=s[n]
if(i!==null){t.body.removeChild(i)}delete s[n]}}}w.attach(r,A)
w.onLoad(r)
if(r.setup){r.setup()
r.resetMatrix()
w.onSetup()}Pi()
if(r.draw){if(!G){r.redraw()}else{r.loop()}}}else{e.setTimeout(function(){ss(r)},is)}}
T(this)
ss(v)}else{w=new C.Sketch
zi()
v.size=function(e,t,r){if(r&&r===g.WEBGL){zi("3D")}else{zi("2D")}v.size(e,t,r)}}}
C.debug=s
C.prototype=A
function L(){var e=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","Random","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","mouseIsPressed","keyIsPressed","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith"]
var t={}
var r,n
for(r=0,n=e.length;r<n;++r){t[e[r]]=null}for(var i in C.lib){if(C.lib.hasOwnProperty(i)){if(C.lib[i].exports){var s=C.lib[i].exports
for(r=0,n=s.length;r<n;++r){t[s[r]]=null}}}}return t}function I(e){var t=L()
function r(e){var t=[]
var r=e.split(/([\{\[\(\)\]\}])/)
var n=r[0]
var i=[]
for(var s=1;s<r.length;s+=2){var a=r[s]
if(a==="["||a==="{"||a==="("){i.push(n)
n=a}else if(a==="]"||a==="}"||a===")"){var o=a==="}"?"A":a===")"?"B":"C"
var l=t.length
t.push(n+a)
n=i.pop()+'"'+o+(l+1)+'"'}n+=r[s+1]}t.unshift(n)
return t}function i(e,t){return e.replace(/'(\d+)'/g,function(e,r){var n=t[r]
if(n.charAt(0)==="/"){return n}return/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(n)?"(new $p.Character("+n+"))":n})}function s(e){var t=/^\s*/.exec(e),r
if(t[0].length===e.length){r={left:t[0],middle:"",right:""}}else{var n=/\s*$/.exec(e)
r={left:t[0],middle:e.substring(t[0].length,n.index),right:n[0]}}r.untrim=function(e){return this.left+e+this.right}
return r}function a(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function o(e,t){for(var r=0,n=t.length;r<n;++r){e[t[r]]=null}return e}function l(e){for(var t in e){if(e.hasOwnProperty(t)){return false}}return true}function u(e){return e.substring(2,e.length-1)}var f=e.replace(/\r\n?|\n\r/g,"\n")
var h=[]
var c=f.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(e,t,r,n,i,s,a,o){var l
if(t||r){l=h.length
h.push(e)
return"'"+l+"'"}if(n){l=h.length
h.push(s)
return i+"'"+l+"'"}return o!==""?" ":"\n"})
var p
var m=c
var d=function(e,t,r,n){if(!!t||!!n){return e}p=true
return""}
do{p=false
m=m.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,d)}while(p)
var v=r(m)
var y
var b={},w,x=0
function E(e,t){var r=v.length
v.push(e)
return'"'+t+r+'"'}function S(){return"class"+ ++x}function _(e,t,r){e.classId=t
e.scopeId=r
b[t]=e}var T,R,P,C,I,D
var N=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g
var M=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g
var O=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/
var k=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g
var F=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/
var B=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g
function $(e){var t=e
t=t.replace(N,function(e){return E(e,"E")})
t=t.replace(M,function(e){return E(e,"D")})
t=t.replace(B,function(e){return E(e,"H")})
return t}function G(e,t){var r=e.replace(k,function(e,r,n,i,s,a){if(n!==t){return e}return E(e,"G")})
return r}function z(e){this.name=e}z.prototype.toString=function(){return this.name}
function U(e){this.params=e}U.prototype.getNames=function(){var e=[]
for(var t=0,r=this.params.length;t<r;++t){e.push(this.params[t].name)}return e}
U.prototype.toString=function(){if(this.params.length===0){return"()"}var e="("
for(var t=0,r=this.params.length;t<r;++t){e+=this.params[t]+", "}return e.substring(0,e.length-2)+")"}
function V(e){var t=a(e.substring(1,e.length-1))
var r=[]
if(t!==""){var n=t.split(",")
for(var i=0;i<n.length;++i){var s=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(n[i])
r.push(new z(s[1]))}}return new U(r)}function H(e){var t=e
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(e,t,r){return r})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(e,t,r){return E(e,"F")})
t=t.replace(B,function(e){return E(e,"H")})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(e,t,r){var n=r.replace(/"C(\d+)"/g,function(e,t){return v[t]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ")
var i="{"+n.substring(1,n.length-1)+"}"
var s="('"+t+"', "+E(i,"A")+")"
return"$p.createJavaArray"+E(s,"B")})
t=t.replace(/(\.\s*length)\s*"B\d+"/g,"$1")
t=t.replace(/#([0-9A-Fa-f]{6})\b/g,function(e,t){return"0xFF"+t})
t=t.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(e,t,r){var n=v[t]
if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(n)){return e}if(/^\(\s*int\s*\)$/.test(n)){return"(int)"+r}var i=n.split(/"C(\d+)"/g)
if(i.length>1){if(!/^\[\s*\]$/.test(v[i[1]])){return e}}return""+r})
t=t.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(e,t){var r=s(t)
return r.untrim("__int_cast("+r.middle+")")})
t=t.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1")
t=t.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(e,t,r){if(t===r){return e}return r===""?"0"+t:t})
t=t.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1")
t=t.replace(/([^\s])%([^=\s])/g,"$1 % $2")
t=t.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1")
t=t.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(e,t){return"parse"+t.substring(0,1).toUpperCase()+t.substring(1)+'"B'})
t=t.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(e,t,r,n,i,s){if(r){var a=v[n]
if(i){return"pixels.setPixel"+E("("+a.substring(1,a.length-1)+","+s+")","B")}return"pixels.getPixel"+E("("+a.substring(1,a.length-1)+")","B")}if(t){return"pixels.getLength"+E("()","B")}if(i){return"pixels.set"+E("("+s+")","B")}return"pixels.toArray"+E("()","B")})
var r
function n(e,t,n,i){var a=v[i]
r=true
var o=s(a.substring(1,a.length-1))
return"__"+n+(o.middle===""?E("("+t.replace(/\.\s*$/,"")+")","B"):E("("+t.replace(/\.\s*$/,"")+","+o.middle+")","B"))}do{r=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt)\s*"B(\d+)"/g,n)}while(r)
function i(e,t,n){r=true
return"__instanceof"+E("("+t+", "+n+")","B")}do{r=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,i)}while(r)
t=t.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")
return t}function K(e,t){this.baseInterfaceName=e
this.body=t
t.owner=this}K.prototype.toString=function(){return"new ("+this.body+")"}
function X(e){var t=new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e)
var r=w,n=S()
w=n
var i=t[1]+"$"+n
var s=new K(i,T(v[t[2]],i,"","implements "+t[1]))
_(s,n,r)
w=r
return s}function Y(e,t,r){this.name=e
this.params=t
this.body=r}Y.prototype.toString=function(){var e=y
var t=o({"this":null},this.params.getNames())
y=function(r){return t.hasOwnProperty(r.name)?r.name:e(r)}
var r="function"
if(this.name){r+=" "+this.name}r+=this.params+" "+this.body
y=e
return r}
function W(e){var t=new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e)
return new Y(t[1]!=="function"?t[1]:null,V(v[t[2]]),P(v[t[3]]))}function Z(e){this.members=e}Z.prototype.toString=function(){var e=y
y=function(t){return t.name==="this"?"this":e(t)}
var t=""
for(var r=0,n=this.members.length;r<n;++r){if(this.members[r].label){t+=this.members[r].label+": "}t+=this.members[r].value.toString()+", "}y=e
return t.substring(0,t.length-2)}
function j(e){var t=e.split(",")
for(var r=0;r<t.length;++r){var n=t[r].indexOf(":")
if(n<0){t[r]={value:D(t[r])}}else{t[r]={label:a(t[r].substring(0,n)),value:D(a(t[r].substring(n+1)))}}}return new Z(t)}function q(e){if(e.charAt(0)==="("||e.charAt(0)==="["){return e.charAt(0)+q(e.substring(1,e.length-1))+e.charAt(e.length-1)}if(e.charAt(0)==="{"){if(/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e)){return"{"+E(e.substring(1,e.length-1),"I")+"}"}return"["+q(e.substring(1,e.length-1))+"]"}var t=s(e)
var r=H(t.middle)
r=r.replace(/"[ABC](\d+)"/g,function(e,t){return q(v[t])})
return t.untrim(r)}function Q(e){return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(e,t,r,i,s,a){if(t){return e}var o={name:r,member:s,callSign:!!a}
return y(o)+(i===n?"":i)})}function J(e,t){this.expr=e
this.transforms=t}J.prototype.toString=function(){var e=this.transforms
var t=Q(this.expr)
return t.replace(/"!(\d+)"/g,function(t,r){return e[r].toString()})}
D=function(e){var t=[]
var r=q(e)
r=r.replace(/"H(\d+)"/g,function(e,r){t.push(W(v[r]))
return'"!'+(t.length-1)+'"'})
r=r.replace(/"F(\d+)"/g,function(e,r){t.push(X(v[r]))
return'"!'+(t.length-1)+'"'})
r=r.replace(/"I(\d+)"/g,function(e,r){t.push(j(v[r]))
return'"!'+(t.length-1)+'"'})
return new J(r,t)}
function et(e,t,r){this.name=e
this.value=t
this.isDefault=r}et.prototype.toString=function(){return this.name+" = "+this.value}
function tt(e,t){var r=e.indexOf("=")
var n,i,s
if(r<0){n=e
i=t
s=true}else{n=e.substring(0,r)
i=D(e.substring(r+1))
s=false}return new et(a(n.replace(/(\s*"C\d+")+/g,"")),i,s)}function rt(e){if(e==="int"||e==="float"){return"0"}if(e==="boolean"){return"false"}if(e==="color"){return"0x00000000"}return"null"}function nt(e,t){this.definitions=e
this.varType=t}nt.prototype.getNames=function(){var e=[]
for(var t=0,r=this.definitions.length;t<r;++t){e.push(this.definitions[t].name)}return e}
nt.prototype.toString=function(){return"var "+this.definitions.join(",")}
function it(e){this.expression=e}it.prototype.toString=function(){return this.expression.toString()}
function st(e){if(O.test(e)){var t=F.exec(e)
var r=e.substring(t[0].length).split(",")
var n=rt(t[2])
for(var i=0;i<r.length;++i){r[i]=tt(r[i],n)}return new nt(r,t[2])}return new it(D(e))}function at(e,t,r){this.initStatement=e
this.condition=t
this.step=r}at.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"}
function ot(e,t){this.initStatement=e
this.container=t}ot.prototype.toString=function(){var e=this.initStatement.toString()
if(e.indexOf("=")>=0){e=e.substring(0,e.indexOf("="))}return"("+e+" in "+this.container+")"}
function lt(e,t){this.initStatement=e
this.container=t}lt.iteratorId=0
lt.prototype.toString=function(){var e=this.initStatement.toString()
var t="$it"+lt.iteratorId++
var r=e.replace(/^\s*var\s*/,"").split("=")[0]
var n="var "+t+" = new $p.ObjectIterator("+this.container+"), "+r+" = void(0)"
var i=t+".hasNext() && (("+r+" = "+t+".next()) || true)"
return"("+n+"; "+i+";)"}
function ut(e){var t
if(/\bin\b/.test(e)){t=e.substring(1,e.length-1).split(/\bin\b/g)
return new ot(st(a(t[0])),D(t[1]))}if(e.indexOf(":")>=0&&e.indexOf(";")<0){t=e.substring(1,e.length-1).split(":")
return new lt(st(a(t[0])),D(t[1]))}t=e.substring(1,e.length-1).split(";")
return new at(st(a(t[0])),D(t[1]),D(t[2]))}function ft(e){e.sort(function(e,t){return t.weight-e.weight})}function ht(e,t,r){this.name=e
this.body=t
this.isStatic=r
t.owner=this}ht.prototype.toString=function(){return""+this.body}
function ct(e,t,r){this.name=e
this.body=t
this.isStatic=r
t.owner=this}ct.prototype.toString=function(){return""+this.body}
function gt(e){var t=N.exec(e)
N.lastIndex=0
var r=t[1].indexOf("static")>=0
var n=v[u(t[6])],i
var s=w,a=S()
w=a
if(t[2]==="interface"){i=new ht(t[3],R(n,t[3],t[4]),r)}else{i=new ct(t[3],T(n,t[3],t[4],t[5]),r)}_(i,a,s)
w=s
return i}function pt(e,t,r,n){this.name=e
this.params=t
this.body=r
this.isStatic=n}pt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(r){return e.hasOwnProperty(r.name)?r.name:t(r)}
var r="function "+this.methodId+this.params+" "+this.body+"\n"
y=t
return r}
function mt(e){var t=M.exec(e)
M.lastIndex=0
var r=t[1].indexOf("static")>=0
var n=t[6]!==";"?v[u(t[6])]:"{}"
return new pt(t[3],V(v[u(t[4])]),P(n),r)}function dt(e,t,r){this.definitions=e
this.fieldType=t
this.isStatic=r}dt.prototype.getNames=function(){var e=[]
for(var t=0,r=this.definitions.length;t<r;++t){e.push(this.definitions[t].name)}return e}
dt.prototype.toString=function(){var e=y({name:"[this]"})
if(this.isStatic){var t=this.owner.name
var r=[]
for(var n=0,i=this.definitions.length;n<i;++n){var s=this.definitions[n]
var a=s.name,o=t+"."+a
var l="if("+o+" === void(0)) {\n"+" "+o+" = "+s.value+"; }\n"+"$p.defineProperty("+e+", "+"'"+a+"', { get: function(){return "+o+";}, "+"set: function(val){"+o+" = val;} });\n"
r.push(l)}return r.join("")}return e+"."+this.definitions.join("; "+e+".")}
function vt(e){var t=F.exec(e)
var r=t[1].indexOf("static")>=0
var n=e.substring(t[0].length).split(/,\s*/g)
var i=rt(t[2])
for(var s=0;s<n.length;++s){n[s]=tt(n[s],i)}return new dt(n,t[2],r)}function yt(e,t){this.params=e
this.body=t}yt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(r){return e.hasOwnProperty(r.name)?r.name:t(r)}
var r="function $constr_"+this.params.params.length+this.params.toString()
var n=this.body.toString()
if(!/\$(superCstr|constr)\b/.test(n)){n="{\n$superCstr();\n"+n.substring(1)}y=t
return r+n+"\n"}
function bt(e){var t=new RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e)
var r=V(v[t[1]])
return new yt(r,P(v[t[2]]))}function At(e,t,r,n,i,s){var a,o
this.name=e
this.interfacesNames=t
this.methodsNames=r
this.fields=n
this.innerClasses=i
this.misc=s
for(a=0,o=n.length;a<o;++a){n[a].owner=this}}At.prototype.getMembers=function(e,t,r){if(this.owner.base){this.owner.base.body.getMembers(e,t,r)}var n,i,s,a
for(n=0,s=this.fields.length;n<s;++n){var o=this.fields[n].getNames()
for(i=0,a=o.length;i<a;++i){e[o[i]]=this.fields[n]}}for(n=0,s=this.methodsNames.length;n<s;++n){var l=this.methodsNames[n]
t[l]=true}for(n=0,s=this.innerClasses.length;n<s;++n){var u=this.innerClasses[n]
r[u.name]=u}}
At.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var r=this.name
var n=""
var i=""
var s={},a={},o={}
this.getMembers(s,a,o)
var l,u,f,h
if(this.owner.interfaces){var c=[],g
for(l=0,u=this.interfacesNames.length;l<u;++l){if(!this.owner.interfaces[l]){continue}g=y({name:this.interfacesNames[l]})
c.push(g)
n+="$p.extendInterfaceMembers("+r+", "+g+");\n"}i+=r+".$interfaces = ["+c.join(", ")+"];\n"}i+=r+".$isInterface = true;\n"
i+=r+".$methods = ['"+this.methodsNames.join("', '")+"'];\n"
ft(this.innerClasses)
for(l=0,u=this.innerClasses.length;l<u;++l){var p=this.innerClasses[l]
if(p.isStatic){n+=r+"."+p.name+" = "+p+";\n"}}for(l=0,u=this.fields.length;l<u;++l){var m=this.fields[l]
if(m.isStatic){n+=r+"."+m.definitions.join(";\n"+r+".")+";\n"}}return"(function() {\n"+"function "+r+"() { throw 'Unable to create the interface'; }\n"+n+i+"return "+r+";\n"+"})()"}
R=function(e,t,r){var i=e.substring(1,e.length-1)
i=$(i)
i=G(i,t)
var a=[],o=[]
i=i.replace(/"([DE])(\d+)"/g,function(e,t,r){if(t==="D"){a.push(r)}else if(t==="E"){o.push(r)}return""})
var l=i.split(/;(?:\s*;)*/g)
var u
var f,h
if(r!==n){u=r.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(f=0,h=a.length;f<h;++f){var c=mt(v[a[f]])
a[f]=c.name}for(f=0,h=l.length-1;f<h;++f){var g=s(l[f])
l[f]=vt(g.middle)}var p=l.pop()
for(f=0,h=o.length;f<h;++f){o[f]=gt(v[o[f]])}return new At(t,u,a,l,o,{tail:p})}
function wt(e,t,r,n,i,s,a,o,l){var u,f
this.name=e
this.baseClassName=t
this.interfacesNames=r
this.functions=n
this.methods=i
this.fields=s
this.cstrs=a
this.innerClasses=o
this.misc=l
for(u=0,f=s.length;u<f;++u){s[u].owner=this}}wt.prototype.getMembers=function(e,t,r){if(this.owner.base){this.owner.base.body.getMembers(e,t,r)}var n,i,s,a
for(n=0,s=this.fields.length;n<s;++n){var o=this.fields[n].getNames()
for(i=0,a=o.length;i<a;++i){e[o[i]]=this.fields[n]}}for(n=0,s=this.methods.length;n<s;++n){var l=this.methods[n]
t[l.name]=l}for(n=0,s=this.innerClasses.length;n<s;++n){var u=this.innerClasses[n]
r[u.name]=u}}
wt.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var r="$this_"+t
var n=this.name
var i="var "+r+" = this;\n"
var s=""
var o=""
var l={},u={},f={}
this.getMembers(l,u,f)
var h=y
y=function(e){var t=e.name
if(t==="this"){return e.callSign||!e.member?r+".$self":r}if(l.hasOwnProperty(t)){return l[t].isStatic?n+"."+t:r+"."+t}if(f.hasOwnProperty(t)){return r+"."+t}if(u.hasOwnProperty(t)){return u[t].isStatic?n+"."+t:r+".$self."+t}return h(e)}
var c
if(this.baseClassName){c=h({name:this.baseClassName})
i+="var $super = { $upcast: "+r+" };\n"
i+="function $superCstr(){"+c+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"
o+=n+".$base = "+c+";\n"}else{i+="function $superCstr(){$p.extendClassChain("+r+")}\n"}if(this.owner.base){s+="$p.extendStaticMembers("+n+", "+c+");\n"}var g,p,m,d
if(this.owner.interfaces){var v=[],b
for(g=0,p=this.interfacesNames.length;g<p;++g){if(!this.owner.interfaces[g]){continue}b=h({name:this.interfacesNames[g]})
v.push(b)
s+="$p.extendInterfaceMembers("+n+", "+b+");\n"}o+=n+".$interfaces = ["+v.join(", ")+"];\n"}if(this.functions.length>0){i+=this.functions.join("\n")+"\n"}ft(this.innerClasses)
for(g=0,p=this.innerClasses.length;g<p;++g){var A=this.innerClasses[g]
if(A.isStatic){s+=n+"."+A.name+" = "+A+";\n"
i+=r+"."+A.name+" = "+n+"."+A.name+";\n"}else{i+=r+"."+A.name+" = "+A+";\n"}}for(g=0,p=this.fields.length;g<p;++g){var w=this.fields[g]
if(w.isStatic){s+=n+"."+w.definitions.join(";\n"+n+".")+";\n"
for(m=0,d=w.definitions.length;m<d;++m){var x=w.definitions[m].name,E=n+"."+x
i+="$p.defineProperty("+r+", '"+x+"', {"+"get: function(){return "+E+"}, "+"set: function(val){"+E+" = val}});\n"}}else{i+=r+"."+w.definitions.join(";\n"+r+".")+";\n"}}var S={}
for(g=0,p=this.methods.length;g<p;++g){var _=this.methods[g]
var T=S[_.name]
var R=_.name+"$"+_.params.params.length
if(T){++T
R+="_"+T}else{T=1}_.methodId=R
S[_.name]=T
if(_.isStatic){s+=_
s+="$p.addMethod("+n+", '"+_.name+"', "+R+");\n"
i+="$p.addMethod("+r+", '"+_.name+"', "+R+");\n"}else{i+=_
i+="$p.addMethod("+r+", '"+_.name+"', "+R+");\n"}}i+=a(this.misc.tail)
if(this.cstrs.length>0){i+=this.cstrs.join("\n")+"\n"}i+="function $constr() {\n"
var P=[]
for(g=0,p=this.cstrs.length;g<p;++g){var C=this.cstrs[g].params.params.length
P.push("if(arguments.length === "+C+") { "+"$constr_"+C+".apply("+r+", arguments); }")}if(P.length>0){i+=P.join(" else ")+" else "}i+="$superCstr();\n}\n"
i+="$constr.apply(null, arguments);\n"
y=h
return"(function() {\n"+"function "+n+"() {\n"+i+"}\n"+s+o+"return "+n+";\n"+"})()"}
T=function(e,t,r,i){var a=e.substring(1,e.length-1)
a=$(a)
a=G(a,t)
var o=[],l=[],u=[],f=[]
a=a.replace(/"([DEGH])(\d+)"/g,function(e,t,r){if(t==="D"){o.push(r)}else if(t==="E"){l.push(r)}else if(t==="H"){f.push(r)}else{u.push(r)}return""})
var h=a.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g)
var c,g
var p
if(r!==n){c=r.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")}if(i!==n){g=i.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(p=0;p<f.length;++p){f[p]=W(v[f[p]])}for(p=0;p<o.length;++p){o[p]=mt(v[o[p]])}for(p=0;p<h.length-1;++p){var m=s(h[p])
h[p]=vt(m.middle)}var d=h.pop()
for(p=0;p<u.length;++p){u[p]=bt(v[u[p]])}for(p=0;p<l.length;++p){l[p]=gt(v[l[p]])}return new wt(t,c,g,f,o,h,u,l,{tail:d})}
function xt(e,t){this.name=e
this.body=t
t.owner=this}xt.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function Et(e,t){this.name=e
this.body=t
t.owner=this}Et.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function St(e){var t=N.exec(e)
N.lastIndex=0
var r=v[u(t[6])]
var n=w,i=S()
w=i
var s
if(t[2]==="interface"){s=new xt(t[3],R(r,t[3],t[4]))}else{s=new Et(t[3],T(r,t[3],t[4],t[5]))}_(s,i,n)
w=n
return s}function _t(e,t,r){this.name=e
this.params=t
this.body=r}_t.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(r){return e.hasOwnProperty(r.name)?r.name:t(r)}
var r="function "+this.name+this.params+" "+this.body+"\n"+"$p."+this.name+" = "+this.name+";"
y=t
return r}
function Tt(e){var t=M.exec(e)
var r=M.lastIndex=0
return new _t(t[3],V(v[u(t[4])]),P(v[u(t[6])]))}function Rt(e){var t=e
t=t.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1")
return t}function Pt(e,t){this.argument=e
this.misc=t}Pt.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function Ct(e,t){this.argument=e
this.misc=t}Ct.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function Lt(e,t,r){this.name=e
this.argument=t
this.misc=r}Lt.prototype.toString=function(){var e=this.misc.prefix
if(this.argument!==n){e+=this.argument.toString()}return e}
function It(e){this.expr=e}It.prototype.toString=function(){return"case "+this.expr+":"}
function Dt(e){this.label=e}Dt.prototype.toString=function(){return this.label}
C=function(e,t,r){var i=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g)
var o=[]
e=Rt(e)
var l=0,u,f
while((u=i.exec(e))!==null){if(u[1]!==n){var h=e.lastIndexOf('"B',i.lastIndex)
var c=e.substring(l,h)
if(u[1]==="for"){o.push(new Pt(ut(v[u[2]]),{prefix:c}))}else if(u[1]==="catch"){o.push(new Ct(V(v[u[2]]),{prefix:c}))}else{o.push(new Lt(u[1],D(v[u[2]]),{prefix:c}))}}else if(u[3]!==n){o.push(new Lt(u[3],n,{prefix:e.substring(l,i.lastIndex)}))}else if(u[4]!==n){f=e.substring(l,i.lastIndex-u[4].length)
if(a(f).length!==0){continue}o.push(f)
var g=u[4].charAt(1),p=u[5]
if(g==="D"){o.push(t(v[p]))}else if(g==="E"){o.push(r(v[p]))}else if(g==="H"){o.push(W(v[p]))}else{o.push(P(v[p]))}}else if(u[6]!==n){o.push(new It(D(a(u[7]))))}else if(u[8]!==n){f=e.substring(l,i.lastIndex-u[8].length)
if(a(f).length!==0){continue}o.push(new Dt(e.substring(l,i.lastIndex)))}else{var m=s(e.substring(l,i.lastIndex-1))
o.push(m.left)
o.push(st(m.middle))
o.push(m.right+";")}l=i.lastIndex}var d=s(e.substring(l))
o.push(d.left)
if(d.middle!==""){o.push(st(d.middle))
o.push(";"+d.right)}return o}
function Nt(e){var t=[]
for(var r=0,n=e.length;r<n;++r){var i=e[r]
if(i instanceof nt){t=t.concat(i.getNames())}else if(i instanceof Pt&&i.argument.initStatement instanceof nt){t=t.concat(i.argument.initStatement.getNames())}else if(i instanceof ht||i instanceof ct||i instanceof xt||i instanceof Et||i instanceof _t||i instanceof Y){t.push(i.name)}}return o({},t)}function Mt(e){this.statements=e}Mt.prototype.toString=function(){var e=Nt(this.statements)
var t=y
if(!l(e)){y=function(r){return e.hasOwnProperty(r.name)?r.name:t(r)}}var r="{\n"+this.statements.join("")+"\n}"
y=t
return r}
P=function(e){var t=s(e.substring(1,e.length-1))
return new Mt(C(t.middle))}
function Ot(e){this.statements=e}Ot.prototype.toString=function(){var e=[],r=[],n
for(var i=0,s=this.statements.length;i<s;++i){n=this.statements[i]
if(n instanceof Et||n instanceof xt){e.push(n)}else{r.push(n)}}ft(e)
var a=Nt(this.statements)
y=function(e){var r=e.name
if(a.hasOwnProperty(r)){return r}if(t.hasOwnProperty(r)||g.hasOwnProperty(r)||A.hasOwnProperty(r)){return"$p."+r}return r}
var o="// this code was autogenerated from PJS\n"+"(function($p) {\n"+e.join("")+"\n"+r.join("")+"\n})"
y=null
return o}
I=function(){var e=$(v[0])
e=e.replace(/\bimport\s+[^;]+;/g,"")
return new Ot(C(e,Tt,St))}
function kt(e){var t={}
var r,i
for(r in b){if(b.hasOwnProperty(r)){i=b[r]
var s=i.scopeId,a=i.name
if(s){var o=b[s]
i.scope=o
if(o.inScope===n){o.inScope={}}o.inScope[a]=i}else{t[a]=i}}}function l(e,r){var i=r.split(".")
var s=e.scope,a
while(s){if(s.hasOwnProperty(i[0])){a=s[i[0]]
break}s=s.scope}if(a===n){a=t[i[0]]}for(var o=1,l=i.length;o<l&&a;++o){a=a.inScope[i[o]]}return a}for(r in b){if(b.hasOwnProperty(r)){i=b[r]
var u=i.body.baseClassName
if(u){var f=l(i,u)
if(f){i.base=f
if(!f.derived){f.derived=[]}f.derived.push(i)}}var h=i.body.interfacesNames,c=[],g,p
if(h&&h.length>0){for(g=0,p=h.length;g<p;++g){var m=l(i,h[g])
c.push(m)
if(!m){continue}if(!m.derived){m.derived=[]}m.derived.push(i)}if(c.length>0){i.interfaces=c}}}}}function Ft(e){var t=[],r={}
var n,i,s
for(n in b){if(b.hasOwnProperty(n)){s=b[n]
if(!s.inScope&&!s.derived){t.push(n)
s.weight=0}else{var a=[]
if(s.inScope){for(i in s.inScope){if(s.inScope.hasOwnProperty(i)){a.push(s.inScope[i])}}}if(s.derived){a=a.concat(s.derived)}r[n]=a}}}function o(e,t){var n=r[e]
if(!n){return false}var i=n.indexOf(t)
if(i<0){return false}n.splice(i,1)
if(n.length>0){return false}delete r[e]
return true}while(t.length>0){n=t.shift()
s=b[n]
if(s.scopeId&&o(s.scopeId,s)){t.push(s.scopeId)
b[s.scopeId].weight=s.weight+1}if(s.base&&o(s.base.classId,s)){t.push(s.base.classId)
s.base.weight=s.weight+1}if(s.interfaces){var l,u
for(l=0,u=s.interfaces.length;l<u;++l){if(!s.interfaces[l]||!o(s.interfaces[l].classId,s)){continue}t.push(s.interfaces[l].classId)
s.interfaces[l].weight=s.weight+1}}}}var Bt=I()
kt(Bt)
Ft(Bt)
var $t=Bt.toString()
$t=$t.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n")
return i($t,h)}function D(e,t){var r=new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e)
if(r&&r.length===2){var n=[],i=r.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(e,t){n.push(t)
return"{"+(n.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";")
var s=function(e){return e.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")}
for(var a=0,o=i.length;a<o;a++){var l=i[a].split("=")
if(l&&l.length===2){var u=s(l[0]),f=s(l[1]),h=[]
if(u==="preload"){h=f.split(",")
for(var c=0,g=h.length;c<g;c++){var p=s(h[c])
t.imageCache.add(p)}}else if(u==="font"){h=f.split(",")
for(var m=0,d=h.length;m<d;m++){var v=s(h[m]),y=/^\{(\d*?)\}$/.exec(v)
P.preloading.add(y?JSON.parse("{"+n[y[1]]+"}"):v)}}else if(u==="pauseOnBlur"){t.options.pauseOnBlur=f==="true"}else if(u==="globalKeyEvents"){t.options.globalKeyEvents=f==="true"}else if(u.substring(0,6)==="param-"){t.params[u.substring(6)]=f}else{t.options[u]=f}}}}return e}C.compile=function(e){var t=new C.Sketch
var r=D(e,t)
var n=I(r)
t.sourceCode=n
return t}
var N=function(){"use strict"
var e={},r="undefined",n="function",i=!1,s=!0,a=512,o="log"
if(typeof tinylog!==r&&typeof tinylog[o]===n){e[o]=tinylog[o]}else if(typeof t!==r&&!t.fake){(function(){var r=t,n="div",l="style",u="title",f={zIndex:1e4,position:"fixed",bottom:"0px",width:"100%",height:"15%",fontFamily:"sans-serif",color:"#ccc",backgroundColor:"black"},h={position:"relative",fontFamily:"monospace",overflow:"auto",height:"100%",paddingTop:"5px"},c={height:"5px",marginTop:"-5px",cursor:"n-resize",backgroundColor:"darkgrey"},g={position:"absolute",top:"5px",right:"20px",color:"#111",MozBorderRadius:"4px",webkitBorderRadius:"4px",borderRadius:"4px",cursor:"pointer",fontWeight:"normal",textAlign:"center",padding:"3px 5px",backgroundColor:"#333",fontSize:"12px"},p={minHeight:"16px"},m={fontSize:"12px",margin:"0 8px 0 8px",maxWidth:"100%",whiteSpace:"pre-wrap",overflow:"auto"},d=r.defaultView,v=r.body||r.documentElement,y=v[l],b=function(){var e=arguments.length,t,r,n
while(e--){r=arguments[e--]
t=arguments[e][l]
for(n in r){if(r.hasOwnProperty(n)){t[n]=r[n]}}}},A=function(e,t,r){if(e.addEventListener){e.addEventListener(t,r,i)}else if(e.attachEvent){e.attachEvent("on"+t,r)}return[e,t,r]},w=function(e,t,r){if(e.removeEventListener){e.removeEventListener(t,r,i)}else if(e.detachEvent){e.detachEvent("on"+t,r)}},x=function(e){var t=e.childNodes,r=t.length
while(r--){e.removeChild(t.item(0))}},E=function(e,t){return e.appendChild(t)},S=function(e){return r.createElement(e)},_=function(e){return r.createTextNode(e)},T=e[o]=function(t){var R,P=y.paddingBottom,C=S(n),L=C[l],I=E(C,S(n)),D=E(C,S(n)),N=E(C,S(n)),M=i,O=i,k=i,F=0,B=function(){y.paddingBottom=C.clientHeight+"px"},$=function(e){var t=d.innerHeight,r=I.clientHeight
if(e<0){e=0}else if(e+r>t){e=t-r}L.height=e/t*100+"%"
B()},G=[A(r,"mousemove",function(e){if(M){$(d.innerHeight-e.clientY)
D.scrollTop=k}}),A(r,"mouseup",function(){if(M){M=k=i}}),A(I,"dblclick",function(e){e.preventDefault()
if(O){$(O)
O=i}else{O=C.clientHeight
L.height="0px"}}),A(I,"mousedown",function(e){e.preventDefault()
M=s
k=D.scrollTop}),A(I,"contextmenu",function(){M=i}),A(N,"click",function(){R()})]
R=function(){var t=G.length
while(t--){w.apply(e,G[t])}v.removeChild(C)
y.paddingBottom=P
x(D)
x(C)
e[o]=T}
b(C,f,D,h,I,c,N,g)
N[u]="Close Log"
E(N,_("✖"))
I[u]="Double-click to toggle log minimization"
v.insertBefore(C,v.firstChild)
e[o]=function(e){if(F===a){D.removeChild(D.firstChild)}else{F++}var t=E(D,S(n)),r=E(t,S(n))
t[u]=(new Date).toLocaleTimeString()
b(t,p,r,m)
E(r,_(e))
D.scrollTop=D.scrollHeight}
e[o](t)
B()}})()}else if(typeof print===n){e[o]=print}return e}()
C.logger=N
C.version="@VERSION@"
C.lib={}
C.registerLibrary=function(e,t){C.lib[e]=t
if(t.hasOwnProperty("init")){t.init(A)}}
C.instances=E
C.getInstanceById=function(e){return E[S[e]]}
C.Sketch=function(r){this.attachFunction=r
this.options={pauseOnBlur:false,globalKeyEvents:false}
this.onLoad=i
this.onSetup=i
this.onPause=i
this.onLoop=i
this.onFrameStart=i
this.onFrameEnd=i
this.onExit=i
this.params={}
this.imageCache={pending:0,images:{},operaCache:{},add:function(r,n){if(this.images[r]){return}if(!o){this.images[r]=null}if(!n){n=new Image
n.onload=function(e){return function(){e.pending--}}(this)
this.pending++
n.src=r}this.images[r]=n
if(e.opera){var i=t.createElement("div")
i.appendChild(n)
i.style.position="absolute"
i.style.opacity=0
i.style.width="1px"
i.style.height="1px"
if(!this.operaCache[r]){t.body.appendChild(i)
this.operaCache[r]=i}}}}
this.sourceCode=undefined
this.attach=function(e){if(typeof this.attachFunction==="function"){this.attachFunction(e)}else if(this.sourceCode){var t=new Function("return ("+this.sourceCode+");")()
t(e)
this.attachFunction=t}else{throw"Unable to attach sketch to the processing instance"}}
this.toString=function(){var e
var t="((function(Sketch) {\n"
t+="var sketch = new Sketch(\n"+this.sourceCode+");\n"
for(e in this.options){if(this.options.hasOwnProperty(e)){var r=this.options[e]
t+="sketch.options."+e+" = "+(typeof r==="string"?'"'+r+'"':""+r)+";\n"}}for(e in this.imageCache){if(this.options.hasOwnProperty(e)){t+='sketch.imageCache.add("'+e+'");\n'}}t+="return sketch;\n})(Processing.Sketch))"
return t}}
var M=function(r,n){var i=[],s=[],a=n.length,o=0
function l(t,r){var n=new XMLHttpRequest
n.onreadystatechange=function(){if(n.readyState===4){var t
if(n.status!==200&&n.status!==0){t="Invalid XHR status "+n.status}else if(n.responseText===""){if("withCredentials"in new XMLHttpRequest&&(new XMLHttpRequest).withCredentials===false&&e.location.protocol==="file:"){t="XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."}else{t="File is empty."}}r(n.responseText,t)}}
n.open("GET",t,true)
if(n.overrideMimeType){n.overrideMimeType("application/json")}n.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
n.send(null)}function u(e,n){function u(t,l){i[e]=t;++o
if(l){s.push(n+" ==> "+l)}if(o===a){if(s.length===0){try{return new C(r,i.join("\n"))}catch(u){throw"Processing.js: Unable to execute pjs sketch: "+u}}else{throw"Processing.js: Unable to load pjs sketch files: "+s.join("\n")}}}if(n.charAt(0)==="#"){var f=t.getElementById(n.substring(1))
if(f){u(f.text||f.textContent)}else{u("","Unable to load pjs sketch: element with id '"+n.substring(1)+"' was not found")}return}l(n,u)}for(var f=0;f<a;++f){u(f,n[f])}}
var O=function(){t.removeEventListener("DOMContentLoaded",O,false)
var e=t.getElementsByTagName("canvas"),r
for(var i=0,s=e.length;i<s;i++){var a=e[i].getAttribute("data-processing-sources")
if(a===null){a=e[i].getAttribute("data-src")
if(a===null){a=e[i].getAttribute("datasrc")}}if(a){r=a.split(" ")
for(var o=0;o<r.length;){if(r[o]){o++}else{r.splice(o,1)}}M(e[i],r)}}var l=t.getElementsByTagName("script")
var u,f,h
for(u=0;u<l.length;u++){var c=l[u]
if(!c.getAttribute){continue}var g=c.getAttribute("type")
if(g&&(g.toLowerCase()==="text/processing"||g.toLowerCase()==="application/processing")){var p=c.getAttribute("data-processing-target")
e=n
if(p){e=t.getElementById(p)}else{var m=c.nextSibling
while(m&&m.nodeType!==1){m=m.nextSibling}if(m.nodeName.toLowerCase()==="canvas"){e=m}}if(e){if(c.getAttribute("src")){r=c.getAttribute("src").split(/\s+/)
M(e,r)
continue}f=c.textContent||c.text
h=new C(e,f)}}}}
C.loadSketchFromSources=M
C.disableInit=function(){if(o){t.removeEventListener("DOMContentLoaded",O,false)}}
if(o){e["Processing"]=C
t.addEventListener("DOMContentLoaded",O,false)}else{this.Processing=C}})(window,window.document,Math)
KAdefine("third_party/javascript-khansrc/processing-js/processing.js", function(require, requireWithVars, module, exports) {
    module.exports = Processing;
});
var JSHINT
if(typeof window==="undefined")window={};(function(){var e
e=function(t,n,r){function i(r,o){if(!n[r]){if(!t[r]){var a=typeof e=="function"&&e
if(!o&&a)return a(r,!0)
if(s)return s(r,!0)
throw new Error("Cannot find module '"+r+"'")}var f=n[r]={exports:{}}
t[r][0].call(f.exports,function(e){var n=t[r][1][e]
return i(n?n:e)},f,f.exports)}return n[r].exports}var s=typeof e=="function"&&e
for(var o=0;o<r.length;o++)i(r[o])
return i}({1:[function(e,t,n){var r=t.exports={}
r.nextTick=function(){var e=typeof window!=="undefined"&&window.setImmediate
var t=typeof window!=="undefined"&&window.postMessage&&window.addEventListener
if(e){return function(e){return window.setImmediate(e)}}if(t){var n=[]
window.addEventListener("message",function(e){if(e.source===window&&e.data==="process-tick"){e.stopPropagation()
if(n.length>0){var t=n.shift()
t()}}},true)
return function r(e){n.push(e)
window.postMessage("process-tick","*")}}return function i(e){setTimeout(e,0)}}()
r.title="browser"
r.browser=true
r.env={}
r.argv=[]
r.binding=function(e){throw new Error("process.binding is not supported")}
r.cwd=function(){return"/"}
r.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],2:[function(e,t,n){(function(e){if(!e.EventEmitter)e.EventEmitter=function(){}
var t=n.EventEmitter=e.EventEmitter
var r=typeof Array.isArray==="function"?Array.isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"}
function i(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0;n<e.length;n++){if(t===e[n])return n}return-1}var s=10
t.prototype.setMaxListeners=function(e){if(!this._events)this._events={}
this._events.maxListeners=e}
t.prototype.emit=function(e){if(e==="error"){if(!this._events||!this._events.error||r(this._events.error)&&!this._events.error.length){if(arguments[1]instanceof Error){throw arguments[1]}else{throw new Error("Uncaught, unspecified 'error' event.")}return false}}if(!this._events)return false
var t=this._events[e]
if(!t)return false
if(typeof t=="function"){switch(arguments.length){case 1:t.call(this)
break
case 2:t.call(this,arguments[1])
break
case 3:t.call(this,arguments[1],arguments[2])
break
default:var n=Array.prototype.slice.call(arguments,1)
t.apply(this,n)}return true}else if(r(t)){var n=Array.prototype.slice.call(arguments,1)
var i=t.slice()
for(var s=0,o=i.length;s<o;s++){i[s].apply(this,n)}return true}else{return false}}
t.prototype.addListener=function(e,t){if("function"!==typeof t){throw new Error("addListener only takes instances of Function")}if(!this._events)this._events={}
this.emit("newListener",e,t)
if(!this._events[e]){this._events[e]=t}else if(r(this._events[e])){if(!this._events[e].warned){var n
if(this._events.maxListeners!==undefined){n=this._events.maxListeners}else{n=s}if(n&&n>0&&this._events[e].length>n){this._events[e].warned=true
console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length)
console.trace()}}this._events[e].push(t)}else{this._events[e]=[this._events[e],t]}return this}
t.prototype.on=t.prototype.addListener
t.prototype.once=function(e,t){var n=this
n.on(e,function r(){n.removeListener(e,r)
t.apply(this,arguments)})
return this}
t.prototype.removeListener=function(e,t){if("function"!==typeof t){throw new Error("removeListener only takes instances of Function")}if(!this._events||!this._events[e])return this
var n=this._events[e]
if(r(n)){var s=i(n,t)
if(s<0)return this
n.splice(s,1)
if(n.length==0)delete this._events[e]}else if(this._events[e]===t){delete this._events[e]}return this}
t.prototype.removeAllListeners=function(e){if(arguments.length===0){this._events={}
return this}if(e&&this._events&&this._events[e])this._events[e]=null
return this}
t.prototype.listeners=function(e){if(!this._events)this._events={}
if(!this._events[e])this._events[e]=[]
if(!r(this._events[e])){this._events[e]=[this._events[e]]}return this._events[e]}})(e("__browserify_process"))},{__browserify_process:1}],3:[function(e,t,n){(function(){"use strict"
n.reservedVars={arguments:false,NaN:false}
n.ecmaIdentifiers={Array:false,Boolean:false,Date:false,decodeURI:false,decodeURIComponent:false,encodeURI:false,encodeURIComponent:false,Error:false,eval:false,EvalError:false,Function:false,hasOwnProperty:false,isFinite:false,isNaN:false,JSON:false,Math:false,Map:false,Number:false,Object:false,parseInt:false,parseFloat:false,RangeError:false,ReferenceError:false,RegExp:false,Set:false,String:false,SyntaxError:false,TypeError:false,URIError:false,WeakMap:false}
n.browser={Audio:false,Blob:false,addEventListener:false,applicationCache:false,atob:false,blur:false,btoa:false,clearInterval:false,clearTimeout:false,close:false,closed:false,CustomEvent:false,DOMParser:false,defaultStatus:false,document:false,Element:false,ElementTimeControl:false,event:false,FileReader:false,FormData:false,focus:false,frames:false,getComputedStyle:false,HTMLElement:false,HTMLAnchorElement:false,HTMLBaseElement:false,HTMLBlockquoteElement:false,HTMLBodyElement:false,HTMLBRElement:false,HTMLButtonElement:false,HTMLCanvasElement:false,HTMLDirectoryElement:false,HTMLDivElement:false,HTMLDListElement:false,HTMLFieldSetElement:false,HTMLFontElement:false,HTMLFormElement:false,HTMLFrameElement:false,HTMLFrameSetElement:false,HTMLHeadElement:false,HTMLHeadingElement:false,HTMLHRElement:false,HTMLHtmlElement:false,HTMLIFrameElement:false,HTMLImageElement:false,HTMLInputElement:false,HTMLIsIndexElement:false,HTMLLabelElement:false,HTMLLayerElement:false,HTMLLegendElement:false,HTMLLIElement:false,HTMLLinkElement:false,HTMLMapElement:false,HTMLMenuElement:false,HTMLMetaElement:false,HTMLModElement:false,HTMLObjectElement:false,HTMLOListElement:false,HTMLOptGroupElement:false,HTMLOptionElement:false,HTMLParagraphElement:false,HTMLParamElement:false,HTMLPreElement:false,HTMLQuoteElement:false,HTMLScriptElement:false,HTMLSelectElement:false,HTMLStyleElement:false,HTMLTableCaptionElement:false,HTMLTableCellElement:false,HTMLTableColElement:false,HTMLTableElement:false,HTMLTableRowElement:false,HTMLTableSectionElement:false,HTMLTextAreaElement:false,HTMLTitleElement:false,HTMLUListElement:false,HTMLVideoElement:false,history:false,Image:false,length:false,localStorage:false,location:false,MessageChannel:false,MessageEvent:false,MessagePort:false,MouseEvent:false,moveBy:false,moveTo:false,MutationObserver:false,name:false,Node:false,NodeFilter:false,navigator:false,onbeforeunload:true,onblur:true,onerror:true,onfocus:true,onload:true,onresize:true,onunload:true,open:false,openDatabase:false,opener:false,Option:false,parent:false,print:false,removeEventListener:false,resizeBy:false,resizeTo:false,screen:false,scroll:false,scrollBy:false,scrollTo:false,sessionStorage:false,setInterval:false,setTimeout:false,SharedWorker:false,status:false,SVGAElement:false,SVGAltGlyphDefElement:false,SVGAltGlyphElement:false,SVGAltGlyphItemElement:false,SVGAngle:false,SVGAnimateColorElement:false,SVGAnimateElement:false,SVGAnimateMotionElement:false,SVGAnimateTransformElement:false,SVGAnimatedAngle:false,SVGAnimatedBoolean:false,SVGAnimatedEnumeration:false,SVGAnimatedInteger:false,SVGAnimatedLength:false,SVGAnimatedLengthList:false,SVGAnimatedNumber:false,SVGAnimatedNumberList:false,SVGAnimatedPathData:false,SVGAnimatedPoints:false,SVGAnimatedPreserveAspectRatio:false,SVGAnimatedRect:false,SVGAnimatedString:false,SVGAnimatedTransformList:false,SVGAnimationElement:false,SVGCSSRule:false,SVGCircleElement:false,SVGClipPathElement:false,SVGColor:false,SVGColorProfileElement:false,SVGColorProfileRule:false,SVGComponentTransferFunctionElement:false,SVGCursorElement:false,SVGDefsElement:false,SVGDescElement:false,SVGDocument:false,SVGElement:false,SVGElementInstance:false,SVGElementInstanceList:false,SVGEllipseElement:false,SVGExternalResourcesRequired:false,SVGFEBlendElement:false,SVGFEColorMatrixElement:false,SVGFEComponentTransferElement:false,SVGFECompositeElement:false,SVGFEConvolveMatrixElement:false,SVGFEDiffuseLightingElement:false,SVGFEDisplacementMapElement:false,SVGFEDistantLightElement:false,SVGFEFloodElement:false,SVGFEFuncAElement:false,SVGFEFuncBElement:false,SVGFEFuncGElement:false,SVGFEFuncRElement:false,SVGFEGaussianBlurElement:false,SVGFEImageElement:false,SVGFEMergeElement:false,SVGFEMergeNodeElement:false,SVGFEMorphologyElement:false,SVGFEOffsetElement:false,SVGFEPointLightElement:false,SVGFESpecularLightingElement:false,SVGFESpotLightElement:false,SVGFETileElement:false,SVGFETurbulenceElement:false,SVGFilterElement:false,SVGFilterPrimitiveStandardAttributes:false,SVGFitToViewBox:false,SVGFontElement:false,SVGFontFaceElement:false,SVGFontFaceFormatElement:false,SVGFontFaceNameElement:false,SVGFontFaceSrcElement:false,SVGFontFaceUriElement:false,SVGForeignObjectElement:false,SVGGElement:false,SVGGlyphElement:false,SVGGlyphRefElement:false,SVGGradientElement:false,SVGHKernElement:false,SVGICCColor:false,SVGImageElement:false,SVGLangSpace:false,SVGLength:false,SVGLengthList:false,SVGLineElement:false,SVGLinearGradientElement:false,SVGLocatable:false,SVGMPathElement:false,SVGMarkerElement:false,SVGMaskElement:false,SVGMatrix:false,SVGMetadataElement:false,SVGMissingGlyphElement:false,SVGNumber:false,SVGNumberList:false,SVGPaint:false,SVGPathElement:false,SVGPathSeg:false,SVGPathSegArcAbs:false,SVGPathSegArcRel:false,SVGPathSegClosePath:false,SVGPathSegCurvetoCubicAbs:false,SVGPathSegCurvetoCubicRel:false,SVGPathSegCurvetoCubicSmoothAbs:false,SVGPathSegCurvetoCubicSmoothRel:false,SVGPathSegCurvetoQuadraticAbs:false,SVGPathSegCurvetoQuadraticRel:false,SVGPathSegCurvetoQuadraticSmoothAbs:false,SVGPathSegCurvetoQuadraticSmoothRel:false,SVGPathSegLinetoAbs:false,SVGPathSegLinetoHorizontalAbs:false,SVGPathSegLinetoHorizontalRel:false,SVGPathSegLinetoRel:false,SVGPathSegLinetoVerticalAbs:false,SVGPathSegLinetoVerticalRel:false,SVGPathSegList:false,SVGPathSegMovetoAbs:false,SVGPathSegMovetoRel:false,SVGPatternElement:false,SVGPoint:false,SVGPointList:false,SVGPolygonElement:false,SVGPolylineElement:false,SVGPreserveAspectRatio:false,SVGRadialGradientElement:false,SVGRect:false,SVGRectElement:false,SVGRenderingIntent:false,SVGSVGElement:false,SVGScriptElement:false,SVGSetElement:false,SVGStopElement:false,SVGStringList:false,SVGStylable:false,SVGStyleElement:false,SVGSwitchElement:false,SVGSymbolElement:false,SVGTRefElement:false,SVGTSpanElement:false,SVGTests:false,SVGTextContentElement:false,SVGTextElement:false,SVGTextPathElement:false,SVGTextPositioningElement:false,SVGTitleElement:false,SVGTransform:false,SVGTransformList:false,SVGTransformable:false,SVGURIReference:false,SVGUnitTypes:false,SVGUseElement:false,SVGVKernElement:false,SVGViewElement:false,SVGViewSpec:false,SVGZoomAndPan:false,TimeEvent:false,top:false,WebSocket:false,window:false,Worker:false,XMLHttpRequest:false,XMLSerializer:false,XPathEvaluator:false,XPathException:false,XPathExpression:false,XPathNamespace:false,XPathNSResolver:false,XPathResult:false}
n.devel={alert:false,confirm:false,console:false,Debug:false,opera:false,prompt:false}
n.worker={importScripts:true,postMessage:true,self:true}
n.nonstandard={escape:false,unescape:false}
n.couch={require:false,respond:false,getRow:false,emit:false,send:false,start:false,sum:false,log:false,exports:false,module:false,provides:false}
n.node={__filename:false,__dirname:false,Buffer:false,console:false,exports:true,GLOBAL:false,global:false,module:false,process:false,require:false,setTimeout:false,clearTimeout:false,setInterval:false,clearInterval:false,setImmediate:false,clearImmediate:false}
n.phantom={phantom:true,require:true,WebPage:true,console:true,exports:true}
n.rhino={defineClass:false,deserialize:false,gc:false,help:false,importPackage:false,java:false,load:false,loadClass:false,print:false,quit:false,readFile:false,readUrl:false,runCommand:false,seal:false,serialize:false,spawn:false,sync:false,toint32:false,version:false}
n.shelljs={target:false,echo:false,exit:false,cd:false,pwd:false,ls:false,find:false,cp:false,rm:false,mv:false,mkdir:false,test:false,cat:false,sed:false,grep:false,which:false,dirs:false,pushd:false,popd:false,env:false,exec:false,chmod:false,config:false,error:false,tempdir:false}
n.typed={ArrayBuffer:false,ArrayBufferView:false,DataView:false,Float32Array:false,Float64Array:false,Int16Array:false,Int32Array:false,Int8Array:false,Uint16Array:false,Uint32Array:false,Uint8Array:false,Uint8ClampedArray:false}
n.wsh={ActiveXObject:true,Enumerator:true,GetObject:true,ScriptEngine:true,ScriptEngineBuildVersion:true,ScriptEngineMajorVersion:true,ScriptEngineMinorVersion:true,VBArray:true,WSH:true,WScript:true,XDomainRequest:true}
n.dojo={dojo:false,dijit:false,dojox:false,define:false,require:false}
n.jquery={$:false,jQuery:false}
n.mootools={$:false,$$:false,Asset:false,Browser:false,Chain:false,Class:false,Color:false,Cookie:false,Core:false,Document:false,DomReady:false,DOMEvent:false,DOMReady:false,Drag:false,Element:false,Elements:false,Event:false,Events:false,Fx:false,Group:false,Hash:false,HtmlTable:false,Iframe:false,IframeShim:false,InputValidator:false,instanceOf:false,Keyboard:false,Locale:false,Mask:false,MooTools:false,Native:false,Options:false,OverText:false,Request:false,Scroller:false,Slick:false,Slider:false,Sortables:false,Spinner:false,Swiff:false,Tips:false,Type:false,typeOf:false,URI:false,Window:false}
n.prototypejs={$:false,$$:false,$A:false,$F:false,$H:false,$R:false,$break:false,$continue:false,$w:false,Abstract:false,Ajax:false,Class:false,Enumerable:false,Element:false,Event:false,Field:false,Form:false,Hash:false,Insertion:false,ObjectRange:false,PeriodicalExecuter:false,Position:false,Prototype:false,Selector:false,Template:false,Toggle:false,Try:false,Autocompleter:false,Builder:false,Control:false,Draggable:false,Draggables:false,Droppables:false,Effect:false,Sortable:false,SortableObserver:false,Sound:false,Scriptaculous:false}
n.yui={YUI:false,Y:false,YUI_config:false}})()},{}],4:[function(e,t,n){(function(){"use strict"
var e={_:function(e){return e}}
var t={E001:e._("Bad option: '{a}'."),E002:e._("Bad option value."),E003:e._("Expected a JSON value."),E004:e._("Input is neither a string nor an array of strings."),E005:e._("Input is empty."),E006:e._("Unexpected early end of program."),E007:e._('Missing "use strict" statement.'),E008:e._("Strict violation."),E009:e._("Option 'validthis' can't be used in a global scope."),E010:e._("'with' is not allowed in strict mode."),E011:e._("const '{a}' has already been declared."),E012:e._("const '{a}' is initialized to 'undefined'."),E013:e._("Attempting to override '{a}' which is a constant."),E014:e._("A regular expression literal can be confused with '/='."),E015:e._("Unclosed regular expression."),E016:e._("Invalid regular expression."),E017:e._('It looks like your comment isn\'t closed. Use "*/" to end a multi-line comment.'),E018:e._('It looks like you never started your comment. Use "/*" to start a multi-line comment.'),E019:e._('Unmatched "{a}".'),E020:e._('I thought you were going to type "{a}" to match "{b}" from line {c} but you typed "{d}"'),E021:e._('I thought you were going to type "{a}" but you typed "{b}"!'),E022:e._("Line breaking error '{a}'."),E023:e._('I think you\'re missing a "{a}"!'),E024:e._('Unexpected "{a}".'),E025:e._("I think you're missing ':' on a case clause."),E026:e._("I think you're missing a '}' to match '{' from line {a}."),E027:e._("I think you're missing a ']' to match '[' from line {a}."),E028:e._("Illegal comma."),E029:e._("Unclosed string! Make sure you end your string with a quote."),E030:e._("I thought you were going to type an identifier but you typed '{a}'."),E031:e._("The left side of an assignment must be a single variable name, not an expression."),E032:e._("I thought you were going to type a number or 'false' but you typed '{a}'."),E033:e._("I thought you were going to type an operator but you typed '{a}'."),E034:e._("get/set are ES5 features."),E035:e._("I think you're missing a property name."),E036:e._("I thought you were going to type a statement but you typed a block instead."),E037:null,E038:null,E039:e._("Function declarations are not invocable. Wrap the whole function invocation in parens."),E040:e._("Each value should have its own case label."),E041:e._("Unrecoverable syntax error."),E042:e._("Stopping."),E043:e._("Too many errors."),E044:e._("'{a}' is already defined and can't be redefined."),E045:e._("Invalid for each loop."),E046:e._("A yield statement shall be within a generator function (with syntax: `function*`)"),E047:e._("A generator function shall contain a yield statement."),E048:e._("Let declaration not directly within block."),E049:e._("A {a} cannot be named '{b}'."),E050:e._("Mozilla requires the yield expression to be parenthesized here."),E051:e._("Regular parameters cannot come after default parameters."),E052:e._("I think you meant to type a value or variable name before that comma?"),E053:e._("I think you either have an extra comma or a missing argument?")}
var r={W001:e._("'hasOwnProperty' is a really bad name."),W002:e._("Value of '{a}' may be overwritten in IE 8 and earlier."),W003:e._("'{a}' was used before it was defined."),W004:e._("'{a}' is already defined."),W005:e._("A dot following a number can be confused with a decimal point."),W006:e._("Confusing minuses."),W007:e._("Confusing pluses."),W008:e._('Please put a 0 in front of the decimal point: "{a}"!'),W009:e._("The array literal notation [] is preferrable."),W010:e._("The object literal notation {} is preferrable."),W011:e._("Unexpected space after '{a}'."),W012:e._("Unexpected space before '{a}'."),W013:e._('I think you\'re missing a space after "{a}".'),W014:e._("Bad line breaking before '{a}'."),W015:e._("Expected '{a}' to have an indentation at {b} instead at {c}."),W016:e._("Unexpected use of '{a}'."),W017:e._("Bad operand."),W018:e._("Confusing use of '{a}'."),W019:e._("Use the isNaN function to compare with NaN."),W020:e._("Read only."),W021:e._("'{a}' is a function."),W022:e._("Do not assign to the exception parameter."),W023:e._("I thought you were going to type an identifier in an assignment but you typed a function invocation instead."),W024:e._("I thought you were going to type an identifier but you typed '{a}' (a reserved word)."),W025:e._("I think you're missing the name in your function declaration."),W026:e._("Inner functions should be listed at the top of the outer function."),W027:e._("Unreachable '{a}' after '{b}'."),W028:e._("Label '{a}' on {b} statement."),W030:e._("I thought you were going to type an assignment or function call but you typed an expression instead."),W031:e._("Do not use 'new' for side effects."),W032:e._("It looks like you have an unnecessary semicolon."),W033:e._("It looks like you're missing a semicolon."),W034:e._('Unnecessary directive "{a}".'),W035:e._("Empty block."),W036:e._("Unexpected /*member '{a}'."),W037:e._("'{a}' is a statement label."),W038:e._("'{a}' used out of scope."),W039:e._("'{a}' is not allowed."),W040:e._("Possible strict violation."),W041:e._("Use '{a}' to compare with '{b}'."),W042:e._("Avoid EOL escaping."),W043:e._("Bad escaping of EOL. Use option multistr if needed."),W044:e._("Bad or unnecessary escaping."),W045:e._("Bad number '{a}'."),W046:e._('Don\'t use extra leading zeros "{a}".'),W047:e._("A trailing decimal point can be confused with a dot: '{a}'."),W048:e._("Unexpected control character in regular expression."),W049:e._("Unexpected escaped character '{a}' in regular expression."),W050:e._("JavaScript URL."),W051:e._("Variables should not be deleted."),W052:e._("Unexpected '{a}'."),W053:e._("Do not use {a} as a constructor."),W054:e._("The Function constructor is a form of eval."),W055:e._("A constructor name should start with an uppercase letter."),W056:e._("Bad constructor."),W057:e._("Weird construction. Is 'new' necessary?"),W058:e._('I think you\'re missing the "()" to invoke the constructor.'),W059:e._("Avoid arguments.{a}."),W060:e._("document.write can be a form of eval."),W061:e._("eval can be harmful."),W062:e._("Wrap an immediate function invocation in parens "+"to assist the reader in understanding that the expression "+"is the result of a function, and not the function itself."),W063:e._("Math is not a function."),W064:e._("I think you're missing using 'new' to call a constructor."),W065:e._("It looks like you're missing a radix parameter."),W066:e._("Implied eval. Consider passing a function instead of a string."),W067:e._("Bad invocation."),W068:e._("Wrapping non-IIFE function literals in parens is unnecessary."),W069:e._("['{a}'] is better written in dot notation."),W070:e._("Extra comma. (it breaks older versions of IE)"),W071:e._("This function has too many statements. ({a})"),W072:e._("This function has too many parameters. ({a})"),W073:e._("Blocks are nested too deeply. ({a})"),W074:e._("This function's cyclomatic complexity is too high. ({a})"),W075:e._("Duplicate key '{a}'."),W076:e._("Unexpected parameter '{a}' in get {b} function."),W077:e._("Expected a single parameter in set {a} function."),W078:e._("Setter is defined without getter."),W079:e._("Redefinition of '{a}'."),W080:e._("It's not necessary to initialize '{a}' to 'undefined'."),W081:e._("Too many var statements."),W082:e._("Function declarations should not be placed in blocks. "+"Use a function expression or move the statement to the top of "+"the outer function."),W083:e._("It's not a good idea to define functions within a loop. Can you define them outside instead?"),W084:e._("I thought you were going to type a conditional expression but you typed an assignment instead."),W085:e._("Don't use 'with'."),W086:e._("Did you forget a 'break' statement before '{a}'?"),W087:e._("Forgotten 'debugger' statement?"),W088:e._("Creating global 'for' variable. Should be 'for (var {a} ...'."),W089:e._("The body of a for in should be wrapped in an if statement to filter "+"unwanted properties from the prototype."),W090:e._("'{a}' is not a statement label."),W091:e._("'{a}' is out of scope."),W092:e._("Wrap the /regexp/ literal in parens to disambiguate the slash operator."),W093:e._("Did you mean to return a conditional instead of an assignment?"),W094:e._("Unexpected comma."),W095:e._("I thought you were going to type a string but you typed {a}."),W096:e._("The '{a}' key may produce unexpected results."),W097:e._('Use the function form of "use strict".'),W098:e._("'{a}' is defined but never used."),W099:e._("Mixed spaces and tabs."),W100:e._("This character may get silently deleted by one or more browsers."),W101:e._("Line is too long."),W102:e._("Trailing whitespace."),W103:e._("The '{a}' property is deprecated."),W104:e._("'{a}' is only available in JavaScript 1.7."),W105:e._("Unexpected {a} in '{b}'."),W106:e._("Identifier '{a}' is not in camel case."),W107:e._("Script URL."),W108:e._("Strings must use doublequote."),W109:e._("Strings must use singlequote."),W110:e._("Mixed double and single quotes."),W112:e._("Unclosed string! Make sure you end your string with a quote."),W113:e._("Control character in string: {a}."),W114:e._("Avoid {a}."),W115:e._("Octal literals are not allowed in strict mode."),W116:e._('I thought you were going to type "{a}" but you typed "{b}".'),W117:e._('"{a}" is not defined. Make sure you\'re spelling it correctly and that you declared it.'),W118:e._("'{a}' is only available in Mozilla JavaScript extensions (use moz option)."),W119:e._("'{a}' is only available in ES6 (use esnext option)."),W120:e._("You might be leaking a variable ({a}) here."),W121:e._("I thought you were going to type a conditional expression but you typed an assignment instead. Maybe you meant to type === instead of =?")}
var i={I001:e._("Comma warnings can be turned off with 'laxcomma'."),I002:e._("Reserved words as properties can be used under the 'es5' option."),I003:e._("ES5 option is now set per default")}
n.errors={}
n.warnings={}
n.info={}
for(var s in t){n.errors[s]={code:s,desc:t[s]}}for(var s in r){n.warnings[s]={code:s,desc:r[s]}}for(var s in i){n.info[s]={code:s,desc:i[s]}}})()},{}],5:[function(e,t,n){"use string"
n.unsafeString=/@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i
n.unsafeChars=/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEsc=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEscGlobal=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
n.starSlash=/\*\//
n.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/
n.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
n.fallsThrough=/^\s*\/\*\s*falls?\sthrough\s*\*\/\s*$/},{}],6:[function(e,t,n){"use strict"
var r={syntax:{},reset:function(){this.tokens={prev:null,next:null,curr:null}
this.option={}
this.ignored={}
this.directive={}
this.jsonMode=false
this.jsonWarnings=[]
this.lines=[]
this.tab=""
this.cache={}}}
n.state=r},{}],7:[function(e,t,n){(function(){"use strict"
n.register=function(e){e.on("Identifier",function t(n){if(e.getOption("proto")){return}if(n.name==="__proto__"){e.warn("W103",{line:n.line,"char":n.char,data:[n.name]})}})
e.on("Identifier",function n(t){if(e.getOption("iterator")){return}if(t.name==="__iterator__"){e.warn("W104",{line:t.line,"char":t.char,data:[t.name]})}})
e.on("Identifier",function r(t){if(!e.getOption("nomen")){return}if(t.name==="_"){return}if(e.getOption("node")){if(/^(__dirname|__filename)$/.test(t.name)&&!t.isProperty){return}}if(/^(_+.*|.*_+)$/.test(t.name)){e.warn("W105",{line:t.line,"char":t.from,data:["dangling '_'",t.name]})}})
e.on("Identifier",function i(t){if(!e.getOption("camelcase")){return}if(t.name.replace(/^_+/,"").indexOf("_")>-1&&!t.name.match(/^[A-Z0-9_]*$/)){e.warn("W106",{line:t.line,"char":t.from,data:[t.name]})}})
e.on("String",function s(t){var n=e.getOption("quotmark")
var r
if(!n){return}if(n==="single"&&t.quote!=="'"){r="W109"}if(n==="double"&&t.quote!=='"'){r="W108"}if(n===true){if(!e.getCache("quotmark")){e.setCache("quotmark",t.quote)}if(e.getCache("quotmark")!==t.quote){r="W110"}}if(r){e.warn(r,{line:t.line,"char":t.char})}})
e.on("Number",function o(t){if(t.value.charAt(0)==="."){e.warn("W008",{line:t.line,"char":t.char,data:[t.value]})}if(t.value.substr(t.value.length-1)==="."){e.warn("W047",{line:t.line,"char":t.char,data:[t.value]})}if(/^00+/.test(t.value)){e.warn("W046",{line:t.line,"char":t.char,data:[t.value]})}})
e.on("String",function a(t){var n=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
if(e.getOption("scripturl")){return}if(n.test(t.value)){e.warn("W107",{line:t.line,"char":t.char})}})}})()},{}],8:[function(e,t,n){(function(){"use strict"
var t=e("events")
var r=e("./reg.js")
var i=e("./state.js").state
var s={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9}
var o=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,880,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1319,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1568,1610,1646,1647,1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2308,2361,2365,2365,2384,2384,2392,2401,2417,2423,2425,2431,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3133,3160,3161,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3261,3261,3294,3294,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3389,3389,3406,3406,3424,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3805,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,4225,4238,4238,4256,4293,4304,4346,4348,4348,4352,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6e3,6016,6067,6103,6103,6108,6108,6176,6263,6272,6312,6314,6314,6320,6389,6400,6428,6480,6509,6512,6516,6528,6571,6593,6599,6656,6678,6688,6740,6823,6823,6917,6963,6981,6987,7043,7072,7086,7087,7104,7141,7168,7203,7245,7247,7258,7293,7401,7404,7406,7409,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11502,11520,11557,11568,11621,11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11823,11823,12293,12295,12321,12329,12337,12341,12344,12348,12353,12438,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,13312,19893,19893,19968,19968,40907,40907,40960,42124,42192,42237,42240,42508,42512,42527,42538,42539,42560,42606,42623,42647,42656,42735,42775,42783,42786,42888,42891,42894,42896,42897,42912,42921,43002,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43259,43259,43274,43301,43312,43334,43360,43388,43396,43442,43471,43471,43520,43560,43584,43586,43588,43595,43616,43638,43642,43642,43648,43695,43697,43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43741,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44002,44032,44032,55203,55203,55216,55238,55243,55291,63744,64045,64048,64109,64112,64217,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500,65536,65547,65549,65574,65576,65594,65596,65597,65599,65613,65616,65629,65664,65786,65856,65908,66176,66204,66208,66256,66304,66334,66352,66378,66432,66461,66464,66499,66504,66511,66513,66517,66560,66717,67584,67589,67592,67592,67594,67637,67639,67640,67644,67644,67647,67669,67840,67861,67872,67897,68096,68096,68112,68115,68117,68119,68121,68147,68192,68220,68352,68405,68416,68437,68448,68466,68608,68680,69635,69687,69763,69807,73728,74606,74752,74850,77824,78894,92160,92728,110592,110593,119808,119892,119894,119964,119966,119967,119970,119970,119973,119974,119977,119980,119982,119993,119995,119995,119997,120003,120005,120069,120071,120074,120077,120084,120086,120092,120094,120121,120123,120126,120128,120132,120134,120134,120138,120144,120146,120485,120488,120512,120514,120538,120540,120570,120572,120596,120598,120628,120630,120654,120656,120686,120688,120712,120714,120744,120746,120770,120772,120779,131072,131072,173782,173782,173824,173824,177972,177972,177984,177984,178205,178205,194560,195101]
var a=[]
for(var f=0;f<128;f++){a[f]=f===36||f>=65&&f<=90||f===95||f>=97&&f<=122}var u=[]
for(var f=0;f<128;f++){u[f]=a[f]||f>=48&&f<=57}function l(){var e=[]
return{push:function(t){e.push(t)},check:function(){for(var t=0;t<e.length;++t){e[t]()}e.splice(0,e.length)}}}function c(e){var n=e
if(typeof n==="string"){n=n.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n")}if(n[0]&&n[0].substr(0,2)==="#!"){n[0]=""}this.emitter=new t.EventEmitter
this.source=e
this.setLines(n)
this.prereg=true
this.line=0
this.char=1
this.from=1
this.input=""
for(var r=0;r<i.option.indent;r+=1){i.tab+=" "}}c.prototype={_lines:[],getLines:function(){this._lines=i.lines
return this._lines},setLines:function(e){this._lines=e
i.lines=this._lines},peek:function(e){return this.input.charAt(e||0)},skip:function(e){e=e||1
this.char+=e
this.input=this.input.slice(e)},on:function(e,t){e.split(" ").forEach(function(e){this.emitter.on(e,t)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(e,t,n,r){n.push(function(){if(r()){this.trigger(e,t)}}.bind(this))},scanPunctuator:function(){var e=this.peek()
var t,n,r
switch(e){case".":if(/^[0-9]$/.test(this.peek(1))){return null}if(this.peek(1)==="."&&this.peek(2)==="."){return{type:s.Punctuator,value:"..."}}case"(":case")":case";":case",":case"{":case"}":case"[":case"]":case":":case"~":case"?":return{type:s.Punctuator,value:e}
case"#":return{type:s.Punctuator,value:e}
case"":return null}t=this.peek(1)
n=this.peek(2)
r=this.peek(3)
if(e===">"&&t===">"&&n===">"&&r==="="){return{type:s.Punctuator,value:">>>="}}if(e==="="&&t==="="&&n==="="){return{type:s.Punctuator,value:"==="}}if(e==="!"&&t==="="&&n==="="){return{type:s.Punctuator,value:"!=="}}if(e===">"&&t===">"&&n===">"){return{type:s.Punctuator,value:">>>"}}if(e==="<"&&t==="<"&&n==="="){return{type:s.Punctuator,value:"<<="}}if(e===">"&&t===">"&&n==="="){return{type:s.Punctuator,value:">>="}}if(e==="="&&t===">"){return{type:s.Punctuator,value:e+t}}if(e===t&&"+-<>&|".indexOf(e)>=0){return{type:s.Punctuator,value:e+t}}if("<>=!+-*%&|^".indexOf(e)>=0){if(t==="="){return{type:s.Punctuator,value:e+t}}return{type:s.Punctuator,value:e}}if(e==="/"){if(t==="="&&/\/=(?!(\S*\/[gim]?))/.test(this.input)){return{type:s.Punctuator,value:"/="}}return{type:s.Punctuator,value:"/"}}return null},scanComments:function(){var e=this.peek()
var t=this.peek(1)
var n=this.input.substr(2)
var r=this.line
var i=this.char
function o(e,t,n){var r=["jshint","jslint","members","member","globals","global","exported"]
var i=false
var o=e+t
var a="plain"
n=n||{}
if(n.isMultiline){o+="*/"}r.forEach(function(n){if(i){return}if(e==="//"&&n!=="jshint"){return}if(t.substr(0,n.length)===n){i=true
e=e+n
t=t.substr(n.length)}if(!i&&t.charAt(0)===" "&&t.substr(1,n.length)===n){i=true
e=e+" "+n
t=t.substr(n.length+1)}if(!i){return}switch(n){case"member":a="members"
break
case"global":a="globals"
break
default:a=n}})
return{type:s.Comment,commentType:a,value:o,body:t,isSpecial:i,isMultiline:n.isMultiline||false,isMalformed:n.isMalformed||false}}if(e==="*"&&t==="/"){this.trigger("error",{code:"E018",line:r,character:i})
this.skip(2)
return null}if(e!=="/"||t!=="*"&&t!=="/"){return null}if(t==="/"){this.skip(this.input.length)
return o("//",n)}var a=""
if(t==="*"){this.skip(2)
while(this.peek()!=="*"||this.peek(1)!=="/"){if(this.peek()===""){a+="\n"
if(!this.nextLine()){this.trigger("error",{code:"E017",line:r,character:i})
return o("/*",a,{isMultiline:true,isMalformed:true})}}else{a+=this.peek()
this.skip()}}this.skip(2)
return o("/*",a,{isMultiline:true})}},scanKeyword:function(){var e=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input)
var t=["if","in","do","var","for","new","try","let","this","else","case","void","with","enum","while","break","catch","throw","const","yield","class","super","return","typeof","delete","switch","export","import","default","finally","extends","function","continue","debugger","instanceof"]
if(e&&t.indexOf(e[0])>=0){return{type:s.Keyword,value:e[0]}}return null},scanIdentifier:function(){var e=""
var t=0
var n,r
function i(e){for(var t=0;t<o.length;){if(e<o[t++]){return false}if(e<=o[t++]){return true}}return false}function f(e){return/^[0-9a-fA-F]$/.test(e)}var l=function(){t+=1
if(this.peek(t)!=="u"){return null}var e=this.peek(t+1)
var n=this.peek(t+2)
var r=this.peek(t+3)
var s=this.peek(t+4)
var o
if(f(e)&&f(n)&&f(r)&&f(s)){o=parseInt(e+n+r+s,16)
if(i(o)){t+=5
return"\\u"+e+n+r+s}return null}return null}.bind(this)
var c=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return l()}if(n<128){if(a[n]){t+=1
return e}return null}if(i(n)){t+=1
return e}return null}.bind(this)
var p=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return l()}if(n<128){if(u[n]){t+=1
return e}return null}if(i(n)){t+=1
return e}return null}.bind(this)
r=c()
if(r===null){return null}e=r
for(;;){r=p()
if(r===null){break}e+=r}switch(e){case"true":case"false":n=s.BooleanLiteral
break
case"null":n=s.NullLiteral
break
default:n=s.Identifier}return{type:n,value:e}},scanNumericLiteral:function(){var e=0
var t=""
var n=this.input.length
var r=this.peek(e)
var i
function o(e){return/^[0-9]$/.test(e)}function a(e){return/^[0-7]$/.test(e)}function f(e){return/^[0-9a-fA-F]$/.test(e)}function u(e){return e==="$"||e==="_"||e==="\\"||e>="a"&&e<="z"||e>="A"&&e<="Z"}if(r!=="."&&!o(r)){return null}if(r!=="."){t=this.peek(e)
e+=1
r=this.peek(e)
if(t==="0"){if(r==="x"||r==="X"){e+=1
t+=r
while(e<n){r=this.peek(e)
if(!f(r)){break}t+=r
e+=1}if(t.length<=2){return{type:s.NumericLiteral,value:t,isMalformed:true}}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:s.NumericLiteral,value:t,base:16,isMalformed:false}}if(a(r)){e+=1
t+=r
i=false
while(e<n){r=this.peek(e)
if(o(r)){i=true}else if(!a(r)){break}t+=r
e+=1}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:s.NumericLiteral,value:t,base:8,isMalformed:false}}if(o(r)){e+=1
t+=r}}while(e<n){r=this.peek(e)
if(!o(r)){break}t+=r
e+=1}}if(r==="."){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!o(r)){break}t+=r
e+=1}}if(r==="e"||r==="E"){t+=r
e+=1
r=this.peek(e)
if(r==="+"||r==="-"){t+=this.peek(e)
e+=1}r=this.peek(e)
if(o(r)){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!o(r)){break}t+=r
e+=1}}else{return null}}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:s.NumericLiteral,value:t,base:10,isMalformed:!isFinite(t)}},scanStringLiteral:function(e){var t=this.peek()
if(t!=='"'&&t!=="'"){return null}this.triggerAsync("warning",{code:"W108",line:this.line,character:this.char},e,function(){return i.jsonMode&&t!=='"'})
var n=""
var r=this.line
var o=this.char
var a=false
this.skip()
while(this.peek()!==t){while(this.peek()===""){if(!a){this.trigger("warning",{code:"W112",line:this.line,character:this.char})}else{a=false
this.triggerAsync("warning",{code:"W043",line:this.line,character:this.char},e,function(){return!i.option.multistr})
this.triggerAsync("warning",{code:"W042",line:this.line,character:this.char},e,function(){return i.jsonMode&&i.option.multistr})}if(!this.nextLine()){this.trigger("error",{code:"E029",line:r,character:o})
return{type:s.StringLiteral,value:n,isUnclosed:true,quote:t}}}a=false
var f=this.peek()
var u=1
if(f<" "){this.trigger("warning",{code:"W113",line:this.line,character:this.char,data:["<non-printable>"]})}if(f==="\\"){this.skip()
f=this.peek()
switch(f){case"'":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\'"]},e,function(){return i.jsonMode})
break
case"b":f="\b"
break
case"f":f="\f"
break
case"n":f="\n"
break
case"r":f="\r"
break
case"t":f="	"
break
case"0":f="\x00"
var l=parseInt(this.peek(1),10)
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return l>=0&&l<=7&&i.directive["use strict"]})
break
case"u":f=String.fromCharCode(parseInt(this.input.substr(1,4),16))
u=5
break
case"v":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\v"]},e,function(){return i.jsonMode})
f=""
break
case"x":var c=parseInt(this.input.substr(1,2),16)
this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\x-"]},e,function(){return i.jsonMode})
f=String.fromCharCode(c)
u=3
break
case"\\":case'"':case"/":break
case"":a=true
f=""
break
case"!":if(n.slice(n.length-2)==="<"){break}default:this.trigger("warning",{code:"W044",line:this.line,character:this.char})}}n+=f
this.skip(u)}this.skip()
return{type:s.StringLiteral,value:n,isUnclosed:false,quote:t}},scanRegExp:function(){var e=0
var t=this.input.length
var n=this.peek()
var r=n
var i=""
var o=[]
var a=false
var f=false
var u
var l=function(){if(n<" "){a=true
this.trigger("warning",{code:"W048",line:this.line,character:this.char})}if(n==="<"){a=true
this.trigger("warning",{code:"W049",line:this.line,character:this.char,data:[n]})}}.bind(this)
if(!this.prereg||n!=="/"){return null}e+=1
u=false
while(e<t){n=this.peek(e)
r+=n
i+=n
if(f){if(n==="]"){if(this.peek(e-1)!=="\\"||this.peek(e-2)==="\\"){f=false}}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
l()}e+=1
continue}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
l()
if(n==="/"){e+=1
continue}if(n==="["){e+=1
continue}}if(n==="["){f=true
e+=1
continue}if(n==="/"){i=i.substr(0,i.length-1)
u=true
e+=1
break}e+=1}if(!u){this.trigger("error",{code:"E015",line:this.line,character:this.from})
return void this.trigger("fatal",{line:this.line,from:this.from})}while(e<t){n=this.peek(e)
if(!/[gim]/.test(n)){break}o.push(n)
r+=n
e+=1}try{new RegExp(i,o.join(""))}catch(c){a=true
this.trigger("error",{code:"E016",line:this.line,character:this.char,data:[c.message]})}return{type:s.RegExp,value:r,flags:o,isMalformed:a}},scanMixedSpacesAndTabs:function(){var e,t
if(i.option.smarttabs){t=this.input.match(/(\/\/|^\s?\*)? \t/)
e=t&&!t[1]?0:-1}else{e=this.input.search(/ \t|\t [^\*]/)}return e},scanUnsafeChars:function(){return this.input.search(r.unsafeChars)},next:function(e){this.from=this.char
var t
if(/\s/.test(this.peek())){t=this.char
while(/\s/.test(this.peek())){this.from+=1
this.skip()}if(this.peek()===""){if(!/^\s*$/.test(this.getLines()[this.line-1])&&i.option.trailing){this.trigger("warning",{code:"W102",line:this.line,character:t})}}}var n=this.scanComments()||this.scanStringLiteral(e)
if(n){return n}n=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral()
if(n){this.skip(n.value.length)
return n}return null},nextLine:function(){var e
if(this.line>=this.getLines().length){return false}this.input=this.getLines()[this.line]
this.line+=1
this.char=1
this.from=1
e=this.scanMixedSpacesAndTabs()
if(e>=0){this.trigger("warning",{code:"W099",line:this.line,character:e+1})}this.input=this.input.replace(/\t/g,i.tab)
e=this.scanUnsafeChars()
if(e>=0){this.trigger("warning",{code:"W100",line:this.line,character:e})}if(i.option.maxlen&&i.option.maxlen<this.input.length){this.trigger("warning",{code:"W101",line:this.line,character:this.input.length})}return true},start:function(){this.nextLine()},token:function(){var e=l()
var t
function n(e,t){if(!e.reserved){return false}var n=e.meta
if(n&&n.isFutureReservedWord&&i.option.inES5()){if(!n.es5){return false}if(n.strictOnly){if(!i.option.strict&&!i.directive["use strict"]){return false}}if(t){return false}}return true}var r=function(t,r,s){var o
if(t!=="(endline)"&&t!=="(end)"){this.prereg=false}if(t==="(punctuator)"){switch(r){case".":case")":case"~":case"#":case"]":this.prereg=false
break
default:this.prereg=true}o=Object.create(i.syntax[r]||i.syntax["(error)"])}if(t==="(identifier)"){if(r==="return"||r==="case"||r==="typeof"){this.prereg=true}if(i.syntax.hasOwnProperty(r)){o=Object.create(i.syntax[r]||i.syntax["(error)"])
if(!n(o,s&&t==="(identifier)")){o=null}}}if(!o){o=Object.create(i.syntax[t])}o.identifier=t==="(identifier)"
o.type=o.type||t
o.value=r
o.line=this.line
o.character=this.char
o.from=this.from
if(s&&o.identifier){o.isProperty=s}o.check=e.check
return o}.bind(this)
for(;;){if(!this.input.length){return r(this.nextLine()?"(endline)":"(end)","")}t=this.next(e)
if(!t){if(this.input.length){this.trigger("error",{code:"E024",line:this.line,character:this.char,data:[this.peek()]})
this.input=""}continue}switch(t.type){case s.StringLiteral:this.triggerAsync("String",{line:this.line,"char":this.char,from:this.from,value:t.value,quote:t.quote},e,function(){return true})
return r("(string)",t.value)
case s.Identifier:this.trigger("Identifier",{line:this.line,"char":this.char,from:this.form,name:t.value,isProperty:i.tokens.curr.id==="."})
case s.Keyword:case s.NullLiteral:case s.BooleanLiteral:return r("(identifier)",t.value,i.tokens.curr.id===".")
case s.NumericLiteral:if(t.isMalformed){this.trigger("warning",{code:"W045",line:this.line,character:this.char,data:[t.value]})}this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["0x-"]},e,function(){return t.base===16&&i.jsonMode})
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return i.directive["use strict"]&&t.base===8})
this.trigger("Number",{line:this.line,"char":this.char,from:this.from,value:t.value,base:t.base,isMalformed:t.malformed})
return r("(number)",t.value)
case s.RegExp:return r("(regexp)",t.value)
case s.Comment:i.tokens.curr.comment=true
if(t.isSpecial){return{id:"(comment)",value:t.value,body:t.body,type:t.commentType,isSpecial:t.isSpecial,line:this.line,character:this.char,from:this.from}}break
case"":break
default:return r("(punctuator)",t.value)}}}}
n.Lexer=c})()},{events:2,"./reg.js":5,"./state.js":6}],jshint:[function(e,t,n){t.exports=e("FD4Lxs")},{}],FD4Lxs:[function(e,t,n){(function(){var t=e("events")
var r=e("./vars.js")
var i=e("./messages.js")
var s=e("./lex.js").Lexer
var o=e("./reg.js")
var a=e("./state.js").state
var f=e("./style.js")
var u=e("console-browserify")
var l=function(){"use strict"
var e,n,u={"<":true,"<=":true,"==":true,"===":true,"!==":true,"!=":true,">":true,">=":true,"+":true,"-":true,"*":true,"/":true,"%":true},c={asi:true,bitwise:true,boss:true,browser:true,camelcase:true,couch:true,curly:true,debug:true,devel:true,dojo:true,eqeqeq:true,eqnull:true,es3:true,es5:true,esnext:true,moz:true,evil:true,expr:true,forin:true,funcscope:true,gcl:true,globalstrict:true,immed:true,iterator:true,jquery:true,lastsemic:true,laxbreak:true,laxcomma:true,loopfunc:true,mootools:true,multistr:true,newcap:true,noarg:true,node:true,noempty:true,nonew:true,nonstandard:true,nomen:true,onevar:true,passfail:true,phantom:true,plusplus:true,proto:true,prototypejs:true,rhino:true,shelljs:true,typed:true,undef:true,scripturl:true,shadow:true,smarttabs:true,strict:true,sub:true,supernew:true,trailing:true,validthis:true,withstmt:true,white:true,worker:true,wsh:true,yui:true,onecase:true,regexp:true,regexdash:true},p={maxlen:false,indent:false,maxerr:false,predef:false,quotmark:false,scope:false,maxstatements:false,maxdepth:false,maxparams:false,maxcomplexity:false,unused:true,latedef:false},h={bitwise:true,forin:true,newcap:true,nomen:true,plusplus:true,regexp:true,undef:true,white:true,eqeqeq:true,onevar:true,strict:true},d={eqeq:"eqeqeq",vars:"onevar",windows:"wsh",sloppy:"strict"},k,v,g=["closure","exception","global","label","outer","unused","var"],m,y,b,x,E,w,S,W,_,L,I,M,G,V,A,T,j,O=[],C=new t.EventEmitter,F=Object.prototype.hasOwnProperty,P={}
P.has=function(e,t){return F.call(e,t)}
P.contains=function(e,t){if(e===null||e===undefined){return false}return e.indexOf(t)!==-1}
function N(e,t){e=e.trim()
if(/^[+-]W\d{3}$/g.test(e)){return true}if(p[e]===undefined&&c[e]===undefined){if(t.type!=="jslint"){K("E001",t,e)
return false}}return true}function B(e){return Object.prototype.toString.call(e)==="[object String]"}function U(e,t){if(!e)return false
if(!e.identifier||e.value!==t)return false
return true}function D(e){if(!e.reserved){return false}var t=e.meta
if(t&&t.isFutureReservedWord&&a.option.inES5()){if(!t.es5){return false}if(t.strictOnly){if(!a.option.strict&&!a.directive["use strict"]){return false}}if(e.isProperty){return false}}return true}function R(e,t){return e.replace(/\{([^{}]*)\}/g,function(e,n){var r=t[n]
return typeof r==="string"||typeof r==="number"?r:e})}function H(e,t){var n
for(n in t){if(P.has(t,n)&&!P.has(l.blacklist,n)){e[n]=t[n]}}}function q(){Object.keys(l.blacklist).forEach(function(e){delete M[e]})}function z(){if(a.option.es5){Z("I003")}if(a.option.couch){H(M,r.couch)}if(a.option.rhino){H(M,r.rhino)}if(a.option.shelljs){H(M,r.shelljs)
H(M,r.node)}if(a.option.typed){H(M,r.typed)}if(a.option.phantom){H(M,r.phantom)}if(a.option.prototypejs){H(M,r.prototypejs)}if(a.option.node){H(M,r.node)
H(M,r.typed)}if(a.option.devel){H(M,r.devel)}if(a.option.dojo){H(M,r.dojo)}if(a.option.browser){H(M,r.browser)
H(M,r.typed)}if(a.option.nonstandard){H(M,r.nonstandard)}if(a.option.jquery){H(M,r.jquery)}if(a.option.mootools){H(M,r.mootools)}if(a.option.worker){H(M,r.worker)}if(a.option.wsh){H(M,r.wsh)}if(a.option.globalstrict&&a.option.strict!==false){a.option.strict=true}if(a.option.yui){H(M,r.yui)}a.option.inMoz=function(e){if(e){return a.option.moz&&!a.option.esnext}return a.option.moz}
a.option.inESNext=function(e){if(e){return!a.option.moz&&a.option.esnext}return a.option.moz||a.option.esnext}
a.option.inES5=function(){return!a.option.es3}
a.option.inES3=function(e){if(e){return!a.option.moz&&!a.option.esnext&&a.option.es3}return a.option.es3}}function $(e,t,n){var r=Math.floor(t/a.lines.length*100)
var s=i.errors[e].desc
throw{name:"JSHintError",line:t,character:n,message:s+" ("+r+"% scanned).",raw:s,code:e}}function J(e,t,n,r){return l.undefs.push([e,t,n,r])}function Z(e,t,n,r,s,o){var f,u,c,p
if(/^W\d{3}$/.test(e)){if(a.ignored[e])return
p=i.warnings[e]}else if(/E\d{3}/.test(e)){p=i.errors[e]}else if(/I\d{3}/.test(e)){p=i.info[e]}t=t||a.tokens.next
if(t.id==="(end)"){t=a.tokens.curr}u=t.line||0
f=t.from||0
c={id:"(error)",raw:p.desc,code:p.code,evidence:a.lines[u-1]||"",line:u,character:f,scope:l.scope,a:n,b:r,c:s,d:o}
c.reason=R(p.desc,c)
l.errors.push(c)
if(a.option.passfail){$("E042",u,f)}j+=1
if(j>=a.option.maxerr){$("E043",u,f)}return c}function X(e,t,n,r,i,s,o){return Z(e,{line:t,from:n},r,i,s,o)}function K(e,t,n,r,i,s){Z(e,t,n,r,i,s)}function Y(e,t,n,r,i,s,o){return K(e,{line:t,from:n},r,i,s,o)}function Q(e,t){var n
n={id:"(internal)",elem:e,value:t}
l.internals.push(n)
return n}function et(e,t,n,r){if(t==="exception"){if(P.has(m["(context)"],e)){if(m[e]!==true&&!a.option.node){Z("W002",a.tokens.next,e)}}}if(P.has(m,e)&&!m["(global)"]){if(m[e]===true){if(a.option.latedef){if(a.option.latedef===true&&P.contains([m[e],t],"unction")||!P.contains([m[e],t],"unction")){Z("W003",a.tokens.next,e)}}}else{if(!a.option.shadow&&t!=="exception"||m["(blockscope)"].getlabel(e)){Z("W004",a.tokens.next,e)}}}if(m["(blockscope)"]&&m["(blockscope)"].current.has(e)){K("E044",a.tokens.next,e)}if(r){m["(blockscope)"].current.add(e,t,a.tokens.curr)}else{m[e]=t
if(n){m["(tokens)"][e]=n}if(m["(global)"]){b[e]=m
if(P.has(x,e)){if(a.option.latedef){if(a.option.latedef===true&&P.contains([m[e],t],"unction")||!P.contains([m[e],t],"unction")){Z("W003",a.tokens.next,e)}}delete x[e]}}else{G[e]=m}}}function tt(){var e=a.tokens.next
var t=e.body.split(",").map(function(e){return e.trim()})
var n={}
if(e.type==="globals"){t.forEach(function(e){e=e.split(":")
var t=(e[0]||"").trim()
var r=(e[1]||"").trim()
if(t.charAt(0)==="-"){t=t.slice(1)
r=false
l.blacklist[t]=t
q()}else{n[t]=r==="true"}})
H(M,n)
for(var r in n){if(P.has(n,r)){k[r]=e}}}if(e.type==="exported"){t.forEach(function(e){v[e]=true})}if(e.type==="members"){L=L||{}
t.forEach(function(e){var t=e.charAt(0)
var n=e.charAt(e.length-1)
if(t===n&&(t==='"'||t==="'")){e=e.substr(1,e.length-2).replace("\\b","\b").replace("\\t","	").replace("\\n","\n").replace("\\v","").replace("\\f","\f").replace("\\r","\r").replace("\\\\","\\").replace('\\"','"')}L[e]=false})}var i=["maxstatements","maxparams","maxdepth","maxcomplexity","maxerr","maxlen","indent"]
if(e.type==="jshint"||e.type==="jslint"){t.forEach(function(t){t=t.split(":")
var n=(t[0]||"").trim()
var r=(t[1]||"").trim()
if(!N(n,e)){return}if(i.indexOf(n)>=0){if(r!=="false"){r=+r
if(typeof r!=="number"||!isFinite(r)||r<=0||Math.floor(r)!==r){K("E032",e,t[1].trim())
return}if(n==="indent"){a.option["(explicitIndent)"]=true}a.option[n]=r}else{if(n==="indent"){a.option["(explicitIndent)"]=false}else{a.option[n]=false}}return}if(n==="validthis"){if(m["(global)"]){K("E009")}else{if(r==="true"||r==="false"){a.option.validthis=r==="true"}else{K("E002",e)}}return}if(n==="quotmark"){switch(r){case"true":case"false":a.option.quotmark=r==="true"
break
case"double":case"single":a.option.quotmark=r
break
default:K("E002",e)}return}if(n==="unused"){switch(r){case"true":a.option.unused=true
break
case"false":a.option.unused=false
break
case"vars":case"strict":a.option.unused=r
break
default:K("E002",e)}return}if(n==="latedef"){switch(r){case"true":a.option.latedef=true
break
case"false":a.option.latedef=false
break
case"nofunc":a.option.latedef="nofunc"
break
default:K("E002",e)}return}var s=/^([+-])(W\d{3})$/g.exec(n)
if(s){a.ignored[s[2]]=s[1]==="-"
return}var o
if(r==="true"||r==="false"){if(e.type==="jslint"){o=d[n]||n
a.option[o]=r==="true"
if(h[o]!==undefined){a.option[o]=!a.option[o]}}else{a.option[n]=r==="true"}if(n==="newcap"){a.option["(explicitNewcap)"]=true}return}K("E002",e)})
z()}}function nt(e){var t=e||0,n=0,r
while(n<=t){r=S[n]
if(!r){r=S[n]=W.token()}n+=1}return r}function rt(t,n){switch(a.tokens.curr.id){case"(number)":if(a.tokens.next.id==="."){Z("W005",a.tokens.curr)}break
case"-":if(a.tokens.next.id==="-"||a.tokens.next.id==="--"){Z("W006")}break
case"+":if(a.tokens.next.id==="+"||a.tokens.next.id==="++"){Z("W007")}break}if(a.tokens.curr.type==="(string)"||a.tokens.curr.identifier){e=a.tokens.curr.value}if(t&&a.tokens.next.id!==t){if(n){if(a.tokens.next.id==="(end)"){K("E019",n,n.id)}else{K("E020",a.tokens.next,t,n.id,n.line,a.tokens.next.value)}}else if(a.tokens.next.type!=="(identifier)"||a.tokens.next.value!==t){Z("W116",a.tokens.next,t,a.tokens.next.value)}}a.tokens.prev=a.tokens.curr
a.tokens.curr=a.tokens.next
for(;;){a.tokens.next=S.shift()||W.token()
if(!a.tokens.next){$("E041",a.tokens.curr.line)}if(a.tokens.next.id==="(end)"||a.tokens.next.id==="(error)"){return}if(a.tokens.next.check){a.tokens.next.check()}if(a.tokens.next.isSpecial){tt()}else{if(a.tokens.next.id!=="(endline)"){break}}}}function it(e){return e.infix||!e.identifier&&!!e.led}function st(){var e=a.tokens.curr
var t=a.tokens.next
if(t.id===";"||t.id==="}"||t.id===":"){return true}if(it(t)===it(e)||e.id==="yield"&&a.option.inMoz(true)){return e.line!==t.line}return false}function ot(t,n){var r,i=false,s=false,o=false
if(!n&&a.tokens.next.value==="let"&&nt(0).value==="("){if(!a.option.inMoz(true)){Z("W118",a.tokens.next,"let expressions")}o=true
m["(blockscope)"].stack()
rt("let")
rt("(")
a.syntax["let"].fud.call(a.syntax["let"].fud,false)
rt(")")}if(a.tokens.next.id==="(end)")K("E006",a.tokens.curr)
rt()
if(n){e="anonymous"
m["(verb)"]=a.tokens.curr.value}if(n===true&&a.tokens.curr.fud){r=a.tokens.curr.fud()}else{if(a.tokens.curr.nud){r=a.tokens.curr.nud()}else{if(a.tokens.curr.value===","){K("E052",a.tokens.curr,a.tokens.curr.id)}else{K("E030",a.tokens.curr,a.tokens.curr.id)}}while(t<a.tokens.next.lbp&&!st()){i=a.tokens.curr.value==="Array"
s=a.tokens.curr.value==="Object"
if(r&&(r.value||r.first&&r.first.value)){if(r.value!=="new"||r.first&&r.first.value&&r.first.value==="."){i=false
if(r.value!==a.tokens.curr.value){s=false}}}rt()
if(i&&a.tokens.curr.id==="("&&a.tokens.next.id===")"){Z("W009",a.tokens.curr)}if(s&&a.tokens.curr.id==="("&&a.tokens.next.id===")"){Z("W010",a.tokens.curr)}if(r&&a.tokens.curr.led){r=a.tokens.curr.led(r)}else{K("E033",a.tokens.curr,a.tokens.curr.id)}}}if(o){m["(blockscope)"].unstack()}return r}function at(e,t){e=e||a.tokens.curr
t=t||a.tokens.next
if(a.option.white){if(e.character!==t.from&&e.line===t.line){e.from+=e.character-e.from
Z("W011",e,e.value)}}}function ft(e,t){e=e||a.tokens.curr
t=t||a.tokens.next
if(a.option.white&&(e.character!==t.from||e.line!==t.line)){Z("W012",t,t.value)}}function ut(e,t){e=e||a.tokens.curr
t=t||a.tokens.next
if(a.option.white&&!e.comment){if(e.line===t.line){at(e,t)}}}function lt(e,t){if(a.option.white){e=e||a.tokens.curr
t=t||a.tokens.next
if(e.value===";"&&t.value===";"){return}if(e.line===t.line&&e.character===t.from){e.from+=e.character-e.from
Z("W013",e,e.value)}}}function ct(e,t){e=e||a.tokens.curr
t=t||a.tokens.next
if(!a.option.laxbreak&&e.line!==t.line){Z("W014",t,t.value)}else if(a.option.white){e=e||a.tokens.curr
t=t||a.tokens.next
if(e.character===t.from){e.from+=e.character-e.from
Z("W013",e,e.value)}}}function pt(e){if(!a.option.white&&!a.option["(explicitIndent)"]){return}if(a.tokens.next.id==="(end)"){return}var t=w+(e||0)
if(a.tokens.next.from!==t){Z("W015",a.tokens.next,a.tokens.next.value,t,a.tokens.next.from)}}function ht(e){e=e||a.tokens.curr
if(e.line!==a.tokens.next.line){Z("E022",e,e.value)}}function dt(e,t){if(e.line!==t.line){if(!a.option.laxcomma){if(kt.first){Z("I001")
kt.first=false}Z("W014",e,t.value)}}else if(!e.comment&&e.character!==t.from&&a.option.white){e.from+=e.character-e.from
Z("W011",e,e.value)}}function kt(e){e=e||{}
if(!e.peek){dt(a.tokens.curr,a.tokens.next)
rt(",")}else{dt(a.tokens.prev,a.tokens.curr)}if(a.tokens.next.value!=="]"&&a.tokens.next.value!=="}"){lt(a.tokens.curr,a.tokens.next)}if(a.tokens.next.identifier&&!(e.property&&a.option.inES5())){switch(a.tokens.next.value){case"break":case"case":case"catch":case"continue":case"default":case"do":case"else":case"finally":case"for":case"if":case"in":case"instanceof":case"return":case"switch":case"throw":case"try":case"var":case"let":case"while":case"with":K("E024",a.tokens.next,a.tokens.next.value)
return false}}if(a.tokens.next.type==="(punctuator)"){switch(a.tokens.next.value){case"}":case"]":case",":if(e.allowTrailing){return true}case")":var t="E024"
if(a.tokens.next.value===")"){t="E053"}else if(a.tokens.next.value===","){t="E052"}K(t,a.tokens.next,a.tokens.next.value)
return false}}return true}function vt(e,t){var n=a.syntax[e]
if(!n||typeof n!=="object"){a.syntax[e]=n={id:e,lbp:t,value:e}}return n}function gt(e){return vt(e,0)}function mt(e,t){var n=gt(e)
n.identifier=n.reserved=true
n.fud=t
return n}function yt(e,t){var n=mt(e,t)
n.block=true
return n}function bt(e){var t=e.id.charAt(0)
if(t>="a"&&t<="z"||t>="A"&&t<="Z"){e.identifier=e.reserved=true}return e}function xt(e,t){var n=vt(e,150)
bt(n)
n.nud=typeof t==="function"?t:function(){this.right=ot(150)
this.arity="unary"
if(this.id==="++"||this.id==="--"){if(a.option.plusplus){Z("W016",this,this.id)}else if((!this.right.identifier||D(this.right))&&this.right.id!=="."&&this.right.id!=="["){Z("W017",this)}}return this}
return n}function Et(e,t){var n=gt(e)
n.type=e
n.nud=t
return n}function wt(e,t){var n=Et(e,t)
n.identifier=true
n.reserved=true
return n}function St(e,t){var n=Et(e,t&&t.nud||function(){return this})
t=t||{}
t.isFutureReservedWord=true
n.value=e
n.identifier=true
n.reserved=true
n.meta=t
return n}function Wt(e,t){return wt(e,function(){if(typeof t==="function"){t(this)}return this})}function _t(e,t,n,r){var i=vt(e,n)
bt(i)
i.infix=true
i.led=function(i){if(!r){ct(a.tokens.prev,a.tokens.curr)
lt(a.tokens.curr,a.tokens.next)}if(e==="in"&&i.id==="!"){Z("W018",i,"!")}if(typeof t==="function"){return t(i,this)}else{this.left=i
this.right=ot(n)
return this}}
return i}function Lt(e){var t=vt(e,42)
t.led=function(e){if(!a.option.inESNext()){Z("W104",a.tokens.curr,"arrow function syntax (=>)")}ct(a.tokens.prev,a.tokens.curr)
lt(a.tokens.curr,a.tokens.next)
this.left=e
this.right=$t(undefined,undefined,false,e)
return this}
return t}function It(e,t){var n=vt(e,100)
n.led=function(e){ct(a.tokens.prev,a.tokens.curr)
lt(a.tokens.curr,a.tokens.next)
var n=ot(100)
if(U(e,"NaN")||U(n,"NaN")){Z("W019",this)}else if(t){t.apply(this,[e,n])}if(!e||!n){$("E041",a.tokens.curr.line)}if(e.id==="!"){Z("W018",e,"!")}if(n.id==="!"){Z("W018",n,"!")}this.left=e
this.right=n
return this}
return n}function Mt(e){return e&&(e.type==="(number)"&&+e.value===0||e.type==="(string)"&&e.value===""||e.type==="null"&&!a.option.eqnull||e.type==="true"||e.type==="false"||e.type==="undefined")}function Gt(e,t,n){var r=_t(e,typeof t==="function"?t:function(e,t){t.left=e
if(e){if(M[e.value]===false&&G[e.value]["(global)"]===true){Z("W020",e)}else if(e["function"]){Z("W021",e,e.value)}if(m[e.value]==="const"){K("E013",e,e.value)}if(e.id==="."){if(!e.left){Z("E031",t)}else if(e.left.value==="arguments"&&!a.directive["use strict"]){Z("E031",t)}t.right=ot(10)
return t}else if(e.id==="["){if(a.tokens.curr.left.first){a.tokens.curr.left.first.forEach(function(e){if(m[e.value]==="const"){K("E013",e,e.value)}})}else if(!e.left){Z("E031",t)}else if(e.left.value==="arguments"&&!a.directive["use strict"]){Z("E031",t)}t.right=ot(10)
return t}else if(e.identifier&&!D(e)){if(m[e.value]==="exception"){Z("W022",e)}t.right=ot(10)
return t}if(e===a.syntax["function"]){Z("W023",a.tokens.curr)}}K("E031",t)},n)
r.exps=true
r.assign=true
return r}function Vt(e,t,n){var r=vt(e,n)
bt(r)
r.led=typeof t==="function"?t:function(e){if(a.option.bitwise){Z("W016",this,this.id)}this.left=e
this.right=ot(n)
return this}
return r}function At(e){return Gt(e,function(e,t){if(a.option.bitwise){Z("W016",t,t.id)}lt(a.tokens.prev,a.tokens.curr)
lt(a.tokens.curr,a.tokens.next)
if(e){if(e.id==="."||e.id==="["||e.identifier&&!D(e)){ot(10)
return t}if(e===a.syntax["function"]){Z("W023",a.tokens.curr)}return t}K("E031",t)},20)}function Tt(e){var t=vt(e,150)
t.led=function(e){if(a.option.plusplus){Z("W016",this,this.id)}else if((!e.identifier||D(e))&&e.id!=="."&&e.id!=="["){Z("W017",this)}this.left=e
return this}
return t}function jt(e,t){if(!a.tokens.next.identifier){return}rt()
var r=a.tokens.curr
var i=a.tokens.curr.value
if(!D(r)){return i}if(t){if(a.option.inES5()){return i}}if(e&&i==="undefined"){return i}if(t&&!n.getCache("displayed:I002")){n.setCache("displayed:I002",true)
Z("I002")}Z("W024",a.tokens.curr,a.tokens.curr.id)
return i}function Ot(e,t){var n=jt(e,t)
if(n){return n}if(a.tokens.curr.id==="function"&&a.tokens.next.id==="("){Z("W025")}else{K("E030",a.tokens.next,a.tokens.next.value)}}function Ct(e){var t=0,n
if(a.tokens.next.id!==";"||I){return}for(;;){do{n=nt(t)
t+=1}while(n.id!="(end)"&&n.id==="(comment)")
if(n.reach){return}if(n.id!=="(endline)"){if(n.id==="function"){if(!a.option.latedef){break}Z("W026",n)
break}Z("W027",n,n.value,e)
break}}}function Ft(e){var t
var n=w,r,i=G,s=a.tokens.next
if(s.id===";"){rt(";")
return}var o=D(s)
if(o&&s.meta&&s.meta.isFutureReservedWord&&nt().id===":"){Z("W024",s,s.id)
o=false}if(P.has(["[","{"],s.value)){if(sn().isDestAssign){if(!a.option.inESNext()){Z("W104",a.tokens.curr,"destructuring expression")}t=Kt()
t.forEach(function(e){J(m,"W117",e.token,e.id)})
rt("=")
Yt(t,ot(10,true))
rt(";")
return}}if(s.identifier&&!o&&nt().id===":"){rt()
rt(":")
G=Object.create(i)
et(s.value,"label")
if(!a.tokens.next.labelled&&a.tokens.next.value!=="{"){Z("W028",a.tokens.next,s.value,a.tokens.next.value)}a.tokens.next.label=s.value
s=a.tokens.next}if(s.id==="{"){Bt(true,true)
return}if(!e){pt()}r=ot(0,true)
if(!s.block){if(!a.option.expr&&(!r||!r.exps)){Z("W030",a.tokens.curr)}else if(a.option.nonew&&r&&r.left&&r.id==="("&&r.left.id==="new"){Z("W031",s)}if(a.tokens.next.id!==";"){if(!a.option.asi){if(!a.option.lastsemic||a.tokens.next.id!=="}"||a.tokens.next.line!==a.tokens.curr.line){X("W033",a.tokens.curr.line,a.tokens.curr.character)}}}else{at(a.tokens.curr,a.tokens.next)
rt(";")
lt(a.tokens.curr,a.tokens.next)}}w=n
G=i
return r}function Pt(e){var t=[],n
while(!a.tokens.next.reach&&a.tokens.next.id!=="(end)"){if(a.tokens.next.id===";"){n=nt()
if(!n||n.id!=="("&&n.id!=="["){Z("W032")}rt(";")}else{t.push(Ft(e===a.tokens.next.line))}}return t}function Nt(){var e,t,n
for(;;){if(a.tokens.next.id==="(string)"){t=nt(0)
if(t.id==="(endline)"){e=1
do{n=nt(e)
e=e+1}while(n.id==="(endline)")
if(n.id!==";"){if(n.id!=="(string)"&&n.id!=="(number)"&&n.id!=="(regexp)"&&n.identifier!==true&&n.id!=="}"){break}Z("W033",a.tokens.next)}else{t=n}}else if(t.id==="}"){Z("W033",t)}else if(t.id!==";"){break}pt()
rt()
if(a.directive[a.tokens.curr.value]){Z("W034",a.tokens.curr,a.tokens.curr.value)}if(a.tokens.curr.value==="use strict"){if(!a.option["(explicitNewcap)"])a.option.newcap=true
a.option.undef=true}a.directive[a.tokens.curr.value]=true
if(t.id===";"){rt(";")}continue}break}}function Bt(e,t,n,r){var i,s=E,o=w,f,u=G,l,c,p
E=e
if(!e||!a.option.funcscope)G=Object.create(G)
lt(a.tokens.curr,a.tokens.next)
l=a.tokens.next
var h=m["(metrics)"]
h.nestedBlockDepth+=1
h.verifyMaxNestedBlockDepthPerFunction()
if(a.tokens.next.id==="{"){rt("{")
m["(blockscope)"].stack()
c=a.tokens.curr.line
if(a.tokens.next.id!=="}"){w+=a.option.indent
while(!e&&a.tokens.next.from>w){w+=a.option.indent}if(n){f={}
for(p in a.directive){if(P.has(a.directive,p)){f[p]=a.directive[p]}}Nt()
if(a.option.strict&&m["(context)"]["(global)"]){if(!f["use strict"]&&!a.directive["use strict"]){Z("E007")}}}i=Pt(c)
h.statementCount+=i.length
if(n){a.directive=f}w-=a.option.indent
if(c!==a.tokens.next.line){pt()}}else if(c!==a.tokens.next.line){pt()}rt("}",l)
m["(blockscope)"].unstack()
w=o}else if(!e){if(n){f={}
if(t&&!r&&!a.option.inMoz(true)){K("W118",a.tokens.curr,"function closure expressions")}if(!t){for(p in a.directive){if(P.has(a.directive,p)){f[p]=a.directive[p]}}}ot(10)
if(a.option.strict&&m["(context)"]["(global)"]){if(!f["use strict"]&&!a.directive["use strict"]){Z("E007")}}}else{K("E021",a.tokens.next,"{",a.tokens.next.value)}}else{m["(nolet)"]=true
if(!t||a.option.curly){Z("W116",a.tokens.next,"{",a.tokens.next.value)}I=true
w+=a.option.indent
i=[Ft(a.tokens.next.line===a.tokens.curr.line)]
w-=a.option.indent
I=false
delete m["(nolet)"]}m["(verb)"]=null
if(!e||!a.option.funcscope)G=u
E=s
if(e&&a.option.noempty&&(!i||i.length===0)){Z("W035")}h.nestedBlockDepth-=1
return i}function Ut(e){if(L&&typeof L[e]!=="boolean"){Z("W036",a.tokens.curr,e)}if(typeof _[e]==="number"){_[e]+=1}else{_[e]=1}}function Dt(e){var t=e.value,n=e.line,r=x[t]
if(typeof r==="function"){r=false}if(!r){r=[n]
x[t]=r}else if(r[r.length-1]!==n){r.push(n)}}Et("(number)",function(){return this})
Et("(string)",function(){return this})
a.syntax["(identifier)"]={type:"(identifier)",lbp:0,identifier:true,nud:function(){var t=this.value,n=G[t],r
if(typeof n==="function"){n=undefined}else if(typeof n==="boolean"){r=m
m=y[0]
et(t,"var")
n=m
m=r}var i
if(P.has(m,"(blockscope)")){i=m["(blockscope)"].getlabel(t)}if(m===n||i){switch(i?i[t]["(type)"]:m[t]){case"unused":if(i)i[t]["(type)"]="var"
else m[t]="var"
break
case"unction":if(i)i[t]["(type)"]="function"
else m[t]="function"
this["function"]=true
break
case"function":this["function"]=true
break
case"label":Z("W037",a.tokens.curr,t)
break}}else if(m["(global)"]){if(typeof M[t]!=="boolean"){if(!(e==="typeof"||e==="delete")||a.tokens.next&&(a.tokens.next.value==="."||a.tokens.next.value==="[")){if(!m["(comparray)"].check(t)){J(m,"W117",a.tokens.curr,t)}}}Dt(a.tokens.curr)}else{switch(m[t]){case"closure":case"function":case"var":case"unused":Z("W038",a.tokens.curr,t)
break
case"label":Z("W037",a.tokens.curr,t)
break
case"outer":case"global":break
default:if(n===true){m[t]=true}else if(n===null){Z("W039",a.tokens.curr,t)
Dt(a.tokens.curr)}else if(typeof n!=="object"){if(!(e==="typeof"||e==="delete")||a.tokens.next&&(a.tokens.next.value==="."||a.tokens.next.value==="[")){J(m,"W117",a.tokens.curr,t)}m[t]=true
Dt(a.tokens.curr)}else{switch(n[t]){case"function":case"unction":this["function"]=true
n[t]="closure"
m[t]=n["(global)"]?"global":"outer"
break
case"var":case"unused":n[t]="closure"
m[t]=n["(global)"]?"global":"outer"
break
case"closure":m[t]=n["(global)"]?"global":"outer"
break
case"label":Z("W037",a.tokens.curr,t)}}}}return this},led:function(){K("E033",a.tokens.next,a.tokens.next.value)}}
Et("(regexp)",function(){return this})
gt("(endline)")
gt("(begin)")
gt("(end)").reach=true
gt("(error)").reach=true
gt("}").reach=true
gt(")")
gt("]")
gt('"').reach=true
gt("'").reach=true
gt(";")
gt(":").reach=true
gt("#")
wt("else")
wt("case").reach=true
wt("catch")
wt("default").reach=true
wt("finally")
Wt("arguments",function(e){if(a.directive["use strict"]&&m["(global)"]){Z("E008",e)}})
Wt("eval")
Wt("false")
Wt("Infinity")
Wt("null")
Wt("this",function(e){if(a.directive["use strict"]&&!a.option.validthis&&(m["(statement)"]&&m["(name)"].charAt(0)>"Z"||m["(global)"])){Z("W040",e)}})
Wt("true")
Wt("undefined")
Gt("=","assign",20)
Gt("+=","assignadd",20)
Gt("-=","assignsub",20)
Gt("*=","assignmult",20)
Gt("/=","assigndiv",20).nud=function(){K("E014")}
Gt("%=","assignmod",20)
At("&=","assignbitand",20)
At("|=","assignbitor",20)
At("^=","assignbitxor",20)
At("<<=","assignshiftleft",20)
At(">>=","assignshiftright",20)
At(">>>=","assignshiftrightunsigned",20)
_t(",",function(e,t){var n
t.exprs=[e]
if(!kt({peek:true})){return t}while(true){if(!(n=ot(10))){break}t.exprs.push(n)
if(a.tokens.next.value!==","||!kt()){break}}return t},10,true)
_t("?",function(e,t){Zt()
t.left=e
t.right=ot(10)
rt(":")
t["else"]=ot(10)
return t},30)
var Rt=40
_t("||",function(e,t){Zt()
t.left=e
t.right=ot(Rt)
return t},Rt)
_t("&&","and",50)
Vt("|","bitor",70)
Vt("^","bitxor",80)
Vt("&","bitand",90)
It("==",function(e,t){var n=a.option.eqnull&&(e.value==="null"||t.value==="null")
if(!n&&a.option.eqeqeq)Z("W116",this,"===","==")
else if(Mt(e))Z("W041",this,"===",e.value)
else if(Mt(t))Z("W041",this,"===",t.value)
return this})
It("===")
It("!=",function(e,t){var n=a.option.eqnull&&(e.value==="null"||t.value==="null")
if(!n&&a.option.eqeqeq){Z("W116",this,"!==","!=")}else if(Mt(e)){Z("W041",this,"!==",e.value)}else if(Mt(t)){Z("W041",this,"!==",t.value)}return this})
It("!==")
It("<")
It(">")
It("<=")
It(">=")
Vt("<<","shiftleft",120)
Vt(">>","shiftright",120)
Vt(">>>","shiftrightunsigned",120)
_t("in","in",120)
_t("instanceof","instanceof",120)
_t("+",function(e,t){var n=ot(130)
if(e&&n&&e.id==="(string)"&&n.id==="(string)"){e.value+=n.value
e.character=n.character
if(!a.option.scripturl&&o.javascriptURL.test(e.value)){Z("W050",e)}return e}t.left=e
t.right=n
return t},130)
xt("+","num")
xt("+++",function(){Z("W007")
this.right=ot(150)
this.arity="unary"
return this})
_t("+++",function(e){Z("W007")
this.left=e
this.right=ot(130)
return this},130)
_t("-","sub",130)
xt("-","neg")
xt("---",function(){Z("W006")
this.right=ot(150)
this.arity="unary"
return this})
_t("---",function(e){Z("W006")
this.left=e
this.right=ot(130)
return this},130)
_t("*","mult",140)
_t("/","div",140)
_t("%","mod",140)
Tt("++","postinc")
xt("++","preinc")
a.syntax["++"].exps=true
Tt("--","postdec")
xt("--","predec")
a.syntax["--"].exps=true
xt("delete",function(){var e=ot(10)
if(!e||e.id!=="."&&e.id!=="["){Z("W051")}this.first=e
return this}).exps=true
xt("~",function(){if(a.option.bitwise){Z("W052",this,"~")}ot(150)
return this})
xt("...",function(){if(!a.option.inESNext()){Z("W104",this,"spread/rest operator")}if(!a.tokens.next.identifier){K("E030",a.tokens.next,a.tokens.next.value)}ot(150)
return this})
xt("!",function(){this.right=ot(150)
this.arity="unary"
if(!this.right){$("E041",this.line||0)}if(u[this.right.id]===true){Z("W018",this,"!")}return this})
xt("typeof","typeof")
xt("new",function(){var e=ot(155),t
if(e&&e.id!=="function"){if(e.identifier){e["new"]=true
switch(e.value){case"Number":case"String":case"Boolean":case"Math":case"JSON":Z("W053",a.tokens.prev,e.value)
break
case"Function":if(!a.option.evil){Z("W054")}break
case"Date":case"RegExp":break
default:if(e.id!=="function"){t=e.value.substr(0,1)
if(a.option.newcap&&(t<"A"||t>"Z")&&!P.has(b,e.value)){Z("W055",a.tokens.curr)}}}}else{if(e.id!=="."&&e.id!=="["&&e.id!=="("){Z("W056",a.tokens.curr)}}}else{if(!a.option.supernew)Z("W057",this)}at(a.tokens.curr,a.tokens.next)
if(a.tokens.next.id!=="("&&!a.option.supernew){Z("W058",a.tokens.curr,a.tokens.curr.value)}this.first=e
return this})
a.syntax["new"].exps=true
xt("void").exps=true
_t(".",function(e,t){at(a.tokens.prev,a.tokens.curr)
ft()
var n=Ot(false,true)
if(typeof n==="string"){Ut(n)}t.left=e
t.right=n
if(n&&n==="hasOwnProperty"&&a.tokens.next.value==="="){Z("W001")}if(e&&e.value==="arguments"&&(n==="callee"||n==="caller")){if(a.option.noarg)Z("W059",e,n)
else if(a.directive["use strict"])K("E008")}else if(!a.option.evil&&e&&e.value==="document"&&(n==="write"||n==="writeln")){Z("W060",e)}if(!a.option.evil&&(n==="eval"||n==="execScript")){Z("W061")}return t},160,true)
_t("(",function(e,t){if(a.tokens.prev.id!=="}"&&a.tokens.prev.id!==")"){ft(a.tokens.prev,a.tokens.curr)}ut()
if(a.option.immed&&e&&!e.immed&&e.id==="function"){Z("W062")}var n=0
var r=[]
if(e){if(e.type==="(identifier)"){if(e.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)){if("Number String Boolean Date Object".indexOf(e.value)===-1){if(e.value==="Math"){Z("W063",e)}else if(a.option.newcap){Z("W064",e)}}}}}if(a.tokens.next.id!==")"){for(;;){r[r.length]=ot(10)
n+=1
if(a.tokens.next.id!==","){break}kt()}}rt(")")
ut(a.tokens.prev,a.tokens.curr)
if(typeof e==="object"){if(e.value==="parseInt"&&n===1){Z("W065",a.tokens.curr)}if(!a.option.evil){if(e.value==="eval"||e.value==="Function"||e.value==="execScript"){Z("W061",e)
if(r[0]&&[0].id==="(string)"){Q(e,r[0].value)}}else if(r[0]&&r[0].id==="(string)"&&(e.value==="setTimeout"||e.value==="setInterval")){Z("W066",e)
Q(e,r[0].value)}else if(r[0]&&r[0].id==="(string)"&&e.value==="."&&e.left.value==="window"&&(e.right==="setTimeout"||e.right==="setInterval")){Z("W066",e)
Q(e,r[0].value)}}if(!e.identifier&&e.id!=="."&&e.id!=="["&&e.id!=="("&&e.id!=="&&"&&e.id!=="||"&&e.id!=="?"){Z("W067",e)}}t.left=e
return t},155,true).exps=true
xt("(",function(){ut()
var e,t=[]
var n,r,i=0
var s
do{n=nt(i)
i+=1
r=nt(i)
i+=1}while(n.value!==")"&&r.value!=="=>"&&r.value!==";"&&r.type!=="(end)")
if(a.tokens.next.id==="function"){a.tokens.next.immed=true}var o=[]
if(a.tokens.next.id!==")"){for(;;){if(r.value==="=>"&&a.tokens.next.value==="{"){e=a.tokens.next
e.left=Kt()
t.push(e)
for(var f in e.left){o.push(e.left[f].token)}}else{o.push(ot(10))}if(a.tokens.next.id!==","){break}kt()}}rt(")",this)
ut(a.tokens.prev,a.tokens.curr)
if(a.option.immed&&o[0]&&o[0].id==="function"){if(a.tokens.next.id!=="("&&(a.tokens.next.id!=="."||nt().value!=="call"&&nt().value!=="apply")){Z("W068",this)}}if(a.tokens.next.value==="=>"){return o}if(!o.length){return}if(o.length>1){s=Object.create(a.syntax[","])
s.exprs=o}else{s=o[0]}if(s){s.paren=true}return s})
Lt("=>")
_t("[",function(e,t){ft(a.tokens.prev,a.tokens.curr)
ut()
var n=ot(10),r
if(n&&n.type==="(string)"){if(!a.option.evil&&(n.value==="eval"||n.value==="execScript")){Z("W061",t)}Ut(n.value)
if(!a.option.sub&&o.identifier.test(n.value)){r=a.syntax[n.value]
if(!r||!D(r)){Z("W069",a.tokens.prev,n.value)}}}rt("]",t)
if(n&&n.value==="hasOwnProperty"&&a.tokens.next.value==="="){Z("W001")}ut(a.tokens.prev,a.tokens.curr)
t.left=e
t.right=n
return t},160,true)
function Ht(){var e={}
e.exps=true
m["(comparray)"].stack()
var t=false
if(a.tokens.next.value!=="for"){t=true
if(!a.option.inMoz(true)){Z("W116",a.tokens.next,"for",a.tokens.next.value)}m["(comparray)"].setState("use")
e.right=ot(10)}rt("for")
if(a.tokens.next.value==="each"){rt("each")
if(!a.option.inMoz(true)){Z("W118",a.tokens.curr,"for each")}}rt("(")
m["(comparray)"].setState("define")
e.left=ot(130)
if(P.contains(["in","of"],a.tokens.next.value)){rt()}else{K("E045",a.tokens.curr)}m["(comparray)"].setState("generate")
ot(10)
rt(")")
if(a.tokens.next.value==="if"){rt("if")
rt("(")
m["(comparray)"].setState("filter")
e.filter=ot(10)
rt(")")}if(!t){m["(comparray)"].setState("use")
e.right=ot(10)}rt("]")
m["(comparray)"].unstack()
return e}xt("[",function(){var e=sn(true)
if(e.isCompArray){if(!a.option.inESNext()){Z("W119",a.tokens.curr,"array comprehension")}return Ht()}else if(e.isDestAssign&&!a.option.inESNext()){Z("W104",a.tokens.curr,"destructuring assignment")}var t=a.tokens.curr.line!==a.tokens.next.line
this.first=[]
if(t){w+=a.option.indent
if(a.tokens.next.from===w+a.option.indent){w+=a.option.indent}}while(a.tokens.next.id!=="(end)"){while(a.tokens.next.id===","){if(!a.option.inES5())Z("W070")
rt(",")}if(a.tokens.next.id==="]"){break}if(t&&a.tokens.curr.line!==a.tokens.next.line){pt()}this.first.push(ot(10))
if(a.tokens.next.id===","){kt({allowTrailing:true})
if(a.tokens.next.id==="]"&&!a.option.inES5(true)){Z("W070",a.tokens.curr)
break}}else{break}}if(t){w-=a.option.indent
pt()}rt("]",this)
return this},160)
function qt(){var e=jt(false,true)
if(!e){if(a.tokens.next.id==="(string)"){e=a.tokens.next.value
rt()}else if(a.tokens.next.id==="(number)"){e=a.tokens.next.value.toString()
rt()}}if(e==="hasOwnProperty"){Z("W001")}return e}function zt(e){var t,n
var r=[]
var i
var s=[]
var o
var f=false
if(e){if(e instanceof Array){for(var u in e){t=e[u]
if(P.contains(["{","["],t.id)){for(o in t.left){o=s[o]
if(o.id){r.push(o.id)
et(o.id,"unused",o.token)}}}else if(t.value==="..."){if(!a.option.inESNext()){Z("W104",t,"spread/rest operator")}continue}else{et(t.value,"unused",t)}}return r}else{if(e.identifier===true){et(e.value,"unused",e)
return[e]}}}n=a.tokens.next
rt("(")
ut()
if(a.tokens.next.id===")"){rt(")")
return}for(;;){if(P.contains(["{","["],a.tokens.next.id)){s=Kt()
for(o in s){o=s[o]
if(o.id){r.push(o.id)
et(o.id,"unused",o.token)}}}else if(a.tokens.next.value==="..."){if(!a.option.inESNext()){Z("W104",a.tokens.next,"spread/rest operator")}rt("...")
ut()
i=Ot(true)
r.push(i)
et(i,"unused",a.tokens.curr)}else{i=Ot(true)
r.push(i)
et(i,"unused",a.tokens.curr)}if(f){if(a.tokens.next.id!=="="){K("E051",a.tokens.current)}}if(a.tokens.next.id==="="){if(!a.option.inESNext()){Z("W119",a.tokens.next,"default parameters")}rt("=")
f=true
ot(10)}if(a.tokens.next.id===","){kt()}else{rt(")",n)
ut(a.tokens.prev,a.tokens.curr)
return r}}}function $t(t,n,r,i){var s
var o=a.option
var f=a.ignored
var u=G
a.option=Object.create(a.option)
a.ignored=Object.create(a.ignored)
G=Object.create(G)
m={"(name)":t||'"'+e+'"',"(line)":a.tokens.next.line,"(character)":a.tokens.next.character,"(context)":m,"(breakage)":0,"(loopage)":0,"(metrics)":Jt(a.tokens.next),"(scope)":G,"(statement)":n,"(tokens)":{},"(blockscope)":m["(blockscope)"],"(comparray)":m["(comparray)"]}
if(r){m["(generator)"]=true}s=m
a.tokens.curr.funct=m
y.push(m)
if(t){et(t,"function")}m["(params)"]=zt(i)
m["(metrics)"].verifyMaxParametersPerFunction(m["(params)"])
Bt(false,true,true,i?true:false)
if(r&&m["(generator)"]!=="yielded"){K("E047",a.tokens.curr)}m["(metrics)"].verifyMaxStatementsPerFunction()
m["(metrics)"].verifyMaxComplexityPerFunction()
m["(unusedOption)"]=a.option.unused
G=u
a.option=o
a.ignored=f
m["(last)"]=a.tokens.curr.line
m["(lastcharacter)"]=a.tokens.curr.character
m=m["(context)"]
return s}function Jt(e){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,verifyMaxStatementsPerFunction:function(){if(a.option.maxstatements&&this.statementCount>a.option.maxstatements){Z("W071",e,this.statementCount)}},verifyMaxParametersPerFunction:function(t){t=t||[]
if(a.option.maxparams&&t.length>a.option.maxparams){Z("W072",e,t.length)}},verifyMaxNestedBlockDepthPerFunction:function(){if(a.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===a.option.maxdepth+1){Z("W073",null,this.nestedBlockDepth)}},verifyMaxComplexityPerFunction:function(){var t=a.option.maxcomplexity
var n=this.ComplexityCount
if(t&&n>t){Z("W074",e,n)}}}}function Zt(){m["(metrics)"].ComplexityCount+=1}function Xt(e){var t,n
if(e){t=e.id
n=e.paren
if(t===","&&(e=e.exprs[e.exprs.length-1])){t=e.id
n=n||e.paren}}switch(t){case"=":if(!n&&!a.option.boss){Z("W121")
break}case"+=":case"-=":case"*=":case"%=":case"&=":case"|=":case"^=":case"/=":if(!n&&!a.option.boss){Z("W084")}}}(function(e){e.nud=function(e){var t,n,r,i,s,o
var f={}
var u=""
function l(e,t){if(f[e]&&P.has(f,e))Z("W075",a.tokens.next,r)
else f[e]={}
f[e].basic=true
f[e].basictkn=t}function c(e,t){if(f[e]&&P.has(f,e)){if(f[e].basic||f[e].setter)Z("W075",a.tokens.next,r)}else{f[e]={}}f[e].setter=true
f[e].setterToken=t}function p(e){if(f[e]&&P.has(f,e)){if(f[e].basic||f[e].getter)Z("W075",a.tokens.next,r)}else{f[e]={}}f[e].getter=true
f[e].getterToken=a.tokens.curr}t=a.tokens.curr.line!==a.tokens.next.line
if(t){w+=a.option.indent
if(a.tokens.next.from===w+a.option.indent){w+=a.option.indent}}for(;;){if(a.tokens.next.id==="}"){break}if(t){pt()}if(e&&a.tokens.next.value==="static"){rt("static")
u="static "}if(a.tokens.next.value==="get"&&nt().id!==":"){rt("get")
if(!a.option.inES5(!e)){K("E034")}r=qt()
if(!r){K("E035")}if(e&&r==="constructor"){K("E049",a.tokens.next,"class getter method",r)}p(u+r)
s=a.tokens.next
at(a.tokens.curr,a.tokens.next)
n=$t()
i=n["(params)"]
if(i){Z("W076",s,i[0],r)}at(a.tokens.curr,a.tokens.next)}else if(a.tokens.next.value==="set"&&nt().id!==":"){rt("set")
if(!a.option.inES5(!e)){K("E034")}r=qt()
if(!r){K("E035")}if(e&&r==="constructor"){K("E049",a.tokens.next,"class setter method",r)}c(u+r,a.tokens.next)
s=a.tokens.next
at(a.tokens.curr,a.tokens.next)
n=$t()
i=n["(params)"]
if(!i||i.length!==1){Z("W077",s,r)}}else{o=false
if(a.tokens.next.value==="*"&&a.tokens.next.type==="(punctuator)"){if(!a.option.inESNext()){Z("W104",a.tokens.next,"generator functions")}rt("*")
o=true}r=qt()
l(u+r,a.tokens.next)
if(typeof r!=="string"){break}if(a.tokens.next.value==="("){if(!a.option.inESNext()){Z("W104",a.tokens.curr,"concise methods")}$t(r,undefined,o)}else if(!e){rt(":")
lt(a.tokens.curr,a.tokens.next)
ot(10)}}if(e&&r==="prototype"){K("E049",a.tokens.next,"class method",r)}Ut(r)
if(e){u=""
continue}if(a.tokens.next.id===","){kt({allowTrailing:true,property:true})
if(a.tokens.next.id===","){Z("W070",a.tokens.curr)}else if(a.tokens.next.id==="}"&&!a.option.inES5(true)){Z("W070",a.tokens.curr)}}else{break}}if(t){w-=a.option.indent
pt()}rt("}",this)
if(a.option.inES5()){for(var h in f){if(P.has(f,h)&&f[h].setter&&!f[h].getter){Z("W078",f[h].setterToken)}}}return this}
e.fud=function(){K("E036",a.tokens.curr)}})(gt("{"))
function Kt(){var e,t
var n=[]
if(!a.option.inESNext()){Z("W104",a.tokens.curr,"destructuring expression")}var r=function(){var e
if(P.contains(["[","{"],a.tokens.next.value)){t=Kt()
for(var r in t){r=t[r]
n.push({id:r.id,token:r.token})}}else if(a.tokens.next.value===","){n.push({id:null,token:a.tokens.curr})}else{e=Ot()
if(e)n.push({id:e,token:a.tokens.curr})}}
if(a.tokens.next.value==="["){rt("[")
r()
while(a.tokens.next.value!=="]"){rt(",")
r()}rt("]")}else if(a.tokens.next.value==="{"){rt("{")
e=Ot()
if(a.tokens.next.value===":"){rt(":")
r()}else{n.push({id:e,token:a.tokens.curr})}while(a.tokens.next.value!=="}"){rt(",")
e=Ot()
if(a.tokens.next.value===":"){rt(":")
r()}else{n.push({id:e,token:a.tokens.curr})}}rt("}")}return n}function Yt(e,t){if(t.first){for(var n=0;n<e.length&&n<t.first.length;n++){var r=e[n]
var i=t.first[n]
if(r&&i){r.first=i}else if(r&&r.first&&!i){Z("W080",r.first,r.first.value)}}}}var Qt=mt("const",function(e){var t,n
var r
if(!a.option.inESNext()){Z("W104",a.tokens.curr,"const")}this.first=[]
for(;;){var i=[]
lt(a.tokens.curr,a.tokens.next)
if(P.contains(["{","["],a.tokens.next.value)){t=Kt()
r=false}else{t=[{id:Ot(),token:a.tokens.curr}]
r=true}for(var s in t){s=t[s]
if(m[s.id]==="const"){Z("E011",null,s.id)}if(m["(global)"]&&M[s.id]===false){Z("W079",s.token,s.id)}if(s.id){et(s.id,"const")
i.push(s.token)}}if(e){break}this.first=this.first.concat(i)
if(a.tokens.next.id!=="="){Z("E012",a.tokens.curr,a.tokens.curr.value)}if(a.tokens.next.id==="="){lt(a.tokens.curr,a.tokens.next)
rt("=")
lt(a.tokens.curr,a.tokens.next)
if(a.tokens.next.id==="undefined"){Z("W080",a.tokens.prev,a.tokens.prev.value)}if(nt(0).id==="="&&a.tokens.next.identifier){Z("W120",a.tokens.next,a.tokens.next.value)}n=ot(10)
if(r){t[0].first=n}else{Yt(i,n)}}if(a.tokens.next.id!==","){break}kt()}return this})
Qt.exps=true
var en=mt("var",function(e){var t,n,r
if(m["(onevar)"]&&a.option.onevar){Z("W081")}else if(!m["(global)"]){m["(onevar)"]=true}this.first=[]
for(;;){var i=[]
lt(a.tokens.curr,a.tokens.next)
if(P.contains(["{","["],a.tokens.next.value)){t=Kt()
n=false}else{t=[{id:Ot(),token:a.tokens.curr}]
n=true}for(var s in t){s=t[s]
if(a.option.inESNext()&&m[s.id]==="const"){Z("E011",null,s.id)}if(m["(global)"]&&M[s.id]===false){Z("W079",s.token,s.id)}if(s.id){et(s.id,"unused",s.token)
i.push(s.token)}}if(e){break}this.first=this.first.concat(i)
if(a.tokens.next.id==="="){lt(a.tokens.curr,a.tokens.next)
rt("=")
lt(a.tokens.curr,a.tokens.next)
if(a.tokens.next.id==="undefined"){Z("W080",a.tokens.prev,a.tokens.prev.value)}if(nt(0).id==="="&&a.tokens.next.identifier){Z("W120",a.tokens.next,a.tokens.next.value)}r=ot(10)
if(n){t[0].first=r}else{Yt(i,r)}}if(a.tokens.next.id!==","){break}kt()}return this})
en.exps=true
var tn=mt("let",function(e){var t,n,r,i
if(!a.option.inESNext()){Z("W104",a.tokens.curr,"let")}if(a.tokens.next.value==="("){if(!a.option.inMoz(true)){Z("W118",a.tokens.next,"let block")}rt("(")
m["(blockscope)"].stack()
i=true}else if(m["(nolet)"]){K("E048",a.tokens.curr)}if(m["(onevar)"]&&a.option.onevar){Z("W081")}else if(!m["(global)"]){m["(onevar)"]=true}this.first=[]
for(;;){var s=[]
lt(a.tokens.curr,a.tokens.next)
if(P.contains(["{","["],a.tokens.next.value)){t=Kt()
n=false}else{t=[{id:Ot(),token:a.tokens.curr.value}]
n=true}for(var o in t){o=t[o]
if(a.option.inESNext()&&m[o.id]==="const"){Z("E011",null,o.id)}if(m["(global)"]&&M[o.id]===false){Z("W079",o.token,o.id)}if(o.id&&!m["(nolet)"]){et(o.id,"unused",o.token,true)
s.push(o.token)}}if(e){break}this.first=this.first.concat(s)
if(a.tokens.next.id==="="){lt(a.tokens.curr,a.tokens.next)
rt("=")
lt(a.tokens.curr,a.tokens.next)
if(a.tokens.next.id==="undefined"){Z("W080",a.tokens.prev,a.tokens.prev.value)}if(nt(0).id==="="&&a.tokens.next.identifier){Z("W120",a.tokens.next,a.tokens.next.value)}r=ot(10)
if(n){t[0].first=r}else{Yt(s,r)}}if(a.tokens.next.id!==","){break}kt()}if(i){rt(")")
Bt(true,true)
this.block=true
m["(blockscope)"].unstack()}return this})
tn.exps=true
yt("class",function(){return nn.call(this,true)})
function nn(e){if(!a.option.inESNext()){Z("W104",a.tokens.curr,"class")}if(e){this.name=Ot()
et(this.name,"unused",a.tokens.curr)}else if(a.tokens.next.identifier&&a.tokens.next.value!=="extends"){this.name=Ot()}rn(this)
return this}function rn(e){var t=a.directive["use strict"]
if(a.tokens.next.value==="extends"){rt("extends")
e.heritage=ot(10)}a.directive["use strict"]=true
rt("{")
e.body=a.syntax["{"].nud(true)
a.directive["use strict"]=t}yt("function",function(){var e=false
if(a.tokens.next.value==="*"){rt("*")
if(a.option.inESNext(true)){e=true}else{Z("W119",a.tokens.curr,"function*")}}if(E){Z("W082",a.tokens.curr)}var t=Ot()
if(m[t]==="const"){Z("E011",null,t)}at(a.tokens.curr,a.tokens.next)
et(t,"unction",a.tokens.curr)
$t(t,{statement:true},e)
if(a.tokens.next.id==="("&&a.tokens.next.line===a.tokens.curr.line){K("E039")}return this})
xt("function",function(){var e=false
if(a.tokens.next.value==="*"){if(!a.option.inESNext()){Z("W119",a.tokens.curr,"function*")}rt("*")
e=true}var t=jt()
if(t||a.option.gcl){at(a.tokens.curr,a.tokens.next)}else{lt(a.tokens.curr,a.tokens.next)}$t(t,undefined,e)
if(!a.option.loopfunc&&m["(loopage)"]){Z("W083")}return this})
yt("if",function(){var e=a.tokens.next
Zt()
a.condition=true
rt("(")
lt(this,e)
ut()
Xt(ot(0))
rt(")",e)
a.condition=false
ut(a.tokens.prev,a.tokens.curr)
Bt(true,true)
if(a.tokens.next.id==="else"){lt(a.tokens.curr,a.tokens.next)
rt("else")
if(a.tokens.next.id==="if"||a.tokens.next.id==="switch"){Ft(true)}else{Bt(true,true)}}return this})
yt("try",function(){var e
function t(){var e=G
var t
rt("catch")
lt(a.tokens.curr,a.tokens.next)
rt("(")
G=Object.create(e)
t=a.tokens.next.value
if(a.tokens.next.type!=="(identifier)"){t=null
Z("E030",a.tokens.next,t)}rt()
m={"(name)":"(catch)","(line)":a.tokens.next.line,"(character)":a.tokens.next.character,"(context)":m,"(breakage)":m["(breakage)"],"(loopage)":m["(loopage)"],"(scope)":G,"(statement)":false,"(metrics)":Jt(a.tokens.next),"(catch)":true,"(tokens)":{},"(blockscope)":m["(blockscope)"],"(comparray)":m["(comparray)"]}
if(t){et(t,"exception")}if(a.tokens.next.value==="if"){if(!a.option.inMoz(true)){Z("W118",a.tokens.curr,"catch filter")}rt("if")
ot(0)}rt(")")
a.tokens.curr.funct=m
y.push(m)
Bt(false)
G=e
m["(last)"]=a.tokens.curr.line
m["(lastcharacter)"]=a.tokens.curr.character
m=m["(context)"]}Bt(false)
while(a.tokens.next.id==="catch"){Zt()
if(e&&!a.option.inMoz(true)){Z("W118",a.tokens.next,"multiple catch blocks")}t()
e=true}if(a.tokens.next.id==="finally"){rt("finally")
Bt(false)
return}if(!e){K("E021",a.tokens.next,"catch",a.tokens.next.value)}return this})
yt("while",function(){var e=a.tokens.next
m["(breakage)"]+=1
m["(loopage)"]+=1
Zt()
rt("(")
lt(this,e)
ut()
Xt(ot(0))
rt(")",e)
ut(a.tokens.prev,a.tokens.curr)
Bt(true,true)
m["(breakage)"]-=1
m["(loopage)"]-=1
return this}).labelled=true
yt("with",function(){var e=a.tokens.next
if(a.directive["use strict"]){K("E010",a.tokens.curr)}else if(!a.option.withstmt){Z("W085",a.tokens.curr)}rt("(")
lt(this,e)
ut()
ot(0)
rt(")",e)
ut(a.tokens.prev,a.tokens.curr)
Bt(true,true)
return this})
yt("switch",function(){var e=a.tokens.next,t=false
m["(breakage)"]+=1
rt("(")
lt(this,e)
ut()
Xt(ot(0))
rt(")",e)
ut(a.tokens.prev,a.tokens.curr)
lt(a.tokens.curr,a.tokens.next)
e=a.tokens.next
rt("{")
lt(a.tokens.curr,a.tokens.next)
w+=a.option.indent
this.cases=[]
for(;;){switch(a.tokens.next.id){case"case":switch(m["(verb)"]){case"yield":case"break":case"case":case"continue":case"return":case"switch":case"throw":break
default:if(!o.fallsThrough.test(a.lines[a.tokens.next.line-2])){Z("W086",a.tokens.curr,"case")}}pt(-a.option.indent)
rt("case")
this.cases.push(ot(20))
Zt()
t=true
rt(":")
m["(verb)"]="case"
break
case"default":switch(m["(verb)"]){case"yield":case"break":case"continue":case"return":case"throw":break
default:if(this.cases.length){if(!o.fallsThrough.test(a.lines[a.tokens.next.line-2])){Z("W086",a.tokens.curr,"default")}}}pt(-a.option.indent)
rt("default")
t=true
rt(":")
break
case"}":w-=a.option.indent
pt()
rt("}",e)
m["(breakage)"]-=1
m["(verb)"]=undefined
return
case"(end)":K("E023",a.tokens.next,"}")
return
default:if(t){switch(a.tokens.curr.id){case",":K("E040")
return
case":":t=false
Pt()
break
default:K("E025",a.tokens.curr)
return}}else{if(a.tokens.curr.id===":"){rt(":")
K("E024",a.tokens.curr,":")
Pt()}else{K("E021",a.tokens.next,"case",a.tokens.next.value)
return}}}}}).labelled=true
mt("debugger",function(){if(!a.option.debug){Z("W087",this)}return this}).exps=true;(function(){var e=mt("do",function(){m["(breakage)"]+=1
m["(loopage)"]+=1
Zt()
this.first=Bt(true,true)
rt("while")
var e=a.tokens.next
lt(a.tokens.curr,e)
rt("(")
ut()
Xt(ot(0))
rt(")",e)
ut(a.tokens.prev,a.tokens.curr)
m["(breakage)"]-=1
m["(loopage)"]-=1
return this})
e.labelled=true
e.exps=true})()
yt("for",function(){var e,t=a.tokens.next
var n=false
var r=null
if(t.value==="each"){r=t
rt("each")
if(!a.option.inMoz(true)){Z("W118",a.tokens.curr,"for each")}}m["(breakage)"]+=1
m["(loopage)"]+=1
Zt()
rt("(")
lt(this,t)
ut()
var i
var s=0
var o=["in","of"]
do{i=nt(s);++s}while(!P.contains(o,i.value)&&i.value!==";"&&i.type!=="(end)")
if(P.contains(o,i.value)){if(!a.option.inESNext()&&i.value==="of"){K("W104",i,"for of")}if(a.tokens.next.id==="var"){rt("var")
a.syntax["var"].fud.call(a.syntax["var"].fud,true)}else if(a.tokens.next.id==="let"){rt("let")
n=true
m["(blockscope)"].stack()
a.syntax["let"].fud.call(a.syntax["let"].fud,true)}else{switch(m[a.tokens.next.value]){case"unused":m[a.tokens.next.value]="var"
break
case"var":break
default:if(!m["(blockscope)"].getlabel(a.tokens.next.value))Z("W088",a.tokens.next,a.tokens.next.value)}rt()}rt(i.value)
ot(20)
rt(")",t)
e=Bt(true,true)
if(a.option.forin&&e&&(e.length>1||typeof e[0]!=="object"||e[0].value!=="if")){Z("W089",this)}m["(breakage)"]-=1
m["(loopage)"]-=1}else{if(r){K("E045",r)}if(a.tokens.next.id!==";"){if(a.tokens.next.id==="var"){rt("var")
a.syntax["var"].fud.call(a.syntax["var"].fud)}else if(a.tokens.next.id==="let"){rt("let")
n=true
m["(blockscope)"].stack()
a.syntax["let"].fud.call(a.syntax["let"].fud)}else{for(;;){ot(0,"for")
if(a.tokens.next.id!==","){break}kt()}}}ht(a.tokens.curr)
rt(";")
if(a.tokens.next.id!==";"){Xt(ot(0))}ht(a.tokens.curr)
rt(";")
if(a.tokens.next.id===";"){K("E021",a.tokens.next,")",";")}if(a.tokens.next.id!==")"){for(;;){ot(0,"for")
if(a.tokens.next.id!==","){break}kt()}}rt(")",t)
ut(a.tokens.prev,a.tokens.curr)
Bt(true,true)
m["(breakage)"]-=1
m["(loopage)"]-=1}if(n){m["(blockscope)"].unstack()}return this}).labelled=true
mt("break",function(){var e=a.tokens.next.value
if(m["(breakage)"]===0)Z("W052",a.tokens.next,this.value)
if(!a.option.asi)ht(this)
if(a.tokens.next.id!==";"&&!a.tokens.next.reach){if(a.tokens.curr.line===a.tokens.next.line){if(m[e]!=="label"){Z("W090",a.tokens.next,e)}else if(G[e]!==m){Z("W091",a.tokens.next,e)}this.first=a.tokens.next
rt()}}Ct("break")
return this}).exps=true
mt("continue",function(){var e=a.tokens.next.value
if(m["(breakage)"]===0)Z("W052",a.tokens.next,this.value)
if(!a.option.asi)ht(this)
if(a.tokens.next.id!==";"&&!a.tokens.next.reach){if(a.tokens.curr.line===a.tokens.next.line){if(m[e]!=="label"){Z("W090",a.tokens.next,e)}else if(G[e]!==m){Z("W091",a.tokens.next,e)}this.first=a.tokens.next
rt()}}else if(!m["(loopage)"]){Z("W052",a.tokens.next,this.value)}Ct("continue")
return this}).exps=true
mt("return",function(){if(this.line===a.tokens.next.line){if(a.tokens.next.id==="(regexp)")Z("W092")
if(a.tokens.next.id!==";"&&!a.tokens.next.reach){lt(a.tokens.curr,a.tokens.next)
this.first=ot(0)
if(this.first&&this.first.type==="(punctuator)"&&this.first.value==="="&&!a.option.boss){X("W093",this.first.line,this.first.character)}}}else{if(a.tokens.next.type==="(punctuator)"&&["[","{","+","-"].indexOf(a.tokens.next.value)>-1){ht(this)}}Ct("return")
return this}).exps=true;(function(e){e.exps=true
e.lbp=25})(xt("yield",function(){var e=a.tokens.prev
if(a.option.inESNext(true)&&!m["(generator)"]){K("E046",a.tokens.curr,"yield")}else if(!a.option.inESNext()){Z("W104",a.tokens.curr,"yield")}m["(generator)"]="yielded"
if(this.line===a.tokens.next.line||!a.option.inMoz(true)){if(a.tokens.next.id==="(regexp)")Z("W092")
if(a.tokens.next.id!==";"&&!a.tokens.next.reach&&a.tokens.next.nud){ct(a.tokens.curr,a.tokens.next)
this.first=ot(10)
if(this.first.type==="(punctuator)"&&this.first.value==="="&&!a.option.boss){X("W093",this.first.line,this.first.character)}}if(a.option.inMoz(true)&&a.tokens.next.id!==")"&&(e.lbp>30||!e.assign&&!st()||e.id==="yield")){K("E050",this)}}else if(!a.option.asi){ht(this)}return this}))
mt("throw",function(){ht(this)
lt(a.tokens.curr,a.tokens.next)
this.first=ot(20)
Ct("throw")
return this}).exps=true
mt("import",function(){if(!a.option.inESNext()){Z("W119",a.tokens.curr,"import")}if(a.tokens.next.identifier){this.name=Ot()
et(this.name,"unused",a.tokens.curr)}else{rt("{")
for(;;){var e
if(a.tokens.next.type==="default"){e="default"
rt("default")}else{e=Ot()}if(a.tokens.next.value==="as"){rt("as")
e=Ot()}et(e,"unused",a.tokens.curr)
if(a.tokens.next.value===","){rt(",")}else if(a.tokens.next.value==="}"){rt("}")
break}else{K("E024",a.tokens.next,a.tokens.next.value)
break}}}rt("from")
rt("(string)")
return this}).exps=true
mt("export",function(){if(!a.option.inESNext()){Z("W119",a.tokens.curr,"export")}if(a.tokens.next.type==="default"){rt("default")
if(a.tokens.next.id==="function"||a.tokens.next.id==="class"){this.block=true}this.exportee=ot(10)
return this}if(a.tokens.next.value==="{"){rt("{")
for(;;){Ot()
if(a.tokens.next.value===","){rt(",")}else if(a.tokens.next.value==="}"){rt("}")
break}else{K("E024",a.tokens.next,a.tokens.next.value)
break}}return this}if(a.tokens.next.id==="var"){rt("var")
a.syntax["var"].fud.call(a.syntax["var"].fud)}else if(a.tokens.next.id==="let"){rt("let")
a.syntax["let"].fud.call(a.syntax["let"].fud)}else if(a.tokens.next.id==="const"){rt("const")
a.syntax["const"].fud.call(a.syntax["const"].fud)}else if(a.tokens.next.id==="function"){this.block=true
rt("function")
a.syntax["function"].fud()}else if(a.tokens.next.id==="class"){this.block=true
rt("class")
a.syntax["class"].fud()}else{K("E024",a.tokens.next,a.tokens.next.value)}return this}).exps=true
St("abstract")
St("boolean")
St("byte")
St("char")
St("class",{es5:true,nud:nn})
St("double")
St("enum",{es5:true})
St("export",{es5:true})
St("extends",{es5:true})
St("final")
St("float")
St("goto")
St("implements",{es5:true,strictOnly:true})
St("import",{es5:true})
St("int")
St("interface",{es5:true,strictOnly:true})
St("long")
St("native")
St("package",{es5:true,strictOnly:true})
St("private",{es5:true,strictOnly:true})
St("protected",{es5:true,strictOnly:true})
St("public",{es5:true,strictOnly:true})
St("short")
St("static",{es5:true,strictOnly:true})
St("super",{es5:true})
St("synchronized")
St("throws")
St("transient")
St("volatile")
var sn=function(){var e,t
var n=-1
var r=0
var i={}
if(P.contains(["[","{"],a.tokens.curr.value))r+=1
do{e=n===-1?a.tokens.next:nt(n)
t=nt(n+1)
n=n+1
if(P.contains(["[","{"],e.value)){r+=1}else if(P.contains(["]","}"],e.value)){r-=1}if(e.identifier&&e.value==="for"&&r===1){i.isCompArray=true
i.notJson=true
break}if(P.contains(["}","]"],e.value)&&t.value==="="&&r===0){i.isDestAssign=true
i.notJson=true
break}if(e.value===";"){i.isBlock=true
i.notJson=true}}while(r>0&&e.id!=="(end)"&&n<15)
return i}
function on(){var e=sn()
if(e.notJson){if(!a.option.inESNext()&&e.isDestAssign){Z("W104",a.tokens.curr,"destructuring assignment")}Pt()}else{a.option.laxbreak=true
a.jsonMode=true
fn()}}var an=function(){var e=function(){this.mode="use"
this.variables=[]}
var t=[]
var n
function r(e){var t=n.variables.filter(function(t){if(t.value===e){t.undef=false
return e}}).length
return t!==0}function i(e){var t=n.variables.filter(function(t){if(t.value===e&&!t.undef){if(t.unused===true){t.unused=false}return e}}).length
return t===0}return{stack:function(){n=new e
t.push(n)},unstack:function(){n.variables.filter(function(e){if(e.unused)Z("W098",e.token,e.value)
if(e.undef)J(e.funct,"W117",e.token,e.value)})
t.splice(-1,1)
n=t[t.length-1]},setState:function(e){if(P.contains(["use","define","generate","filter"],e))n.mode=e},check:function(e){if(!n){return}if(n&&n.mode==="use"){if(i(e)){n.variables.push({funct:m,token:a.tokens.curr,value:e,undef:true,unused:false})}return true}else if(n&&n.mode==="define"){if(!r(e)){n.variables.push({funct:m,token:a.tokens.curr,value:e,undef:false,unused:true})}return true}else if(n&&n.mode==="generate"){J(m,"W117",a.tokens.curr,e)
return true}else if(n&&n.mode==="filter"){if(i(e)){J(m,"W117",a.tokens.curr,e)}return true}return false}}}
function fn(){function e(){var e={},t=a.tokens.next
rt("{")
if(a.tokens.next.id!=="}"){for(;;){if(a.tokens.next.id==="(end)"){K("E026",a.tokens.next,t.line)}else if(a.tokens.next.id==="}"){Z("W094",a.tokens.curr)
break}else if(a.tokens.next.id===","){K("E028",a.tokens.next)}else if(a.tokens.next.id!=="(string)"){Z("W095",a.tokens.next,a.tokens.next.value)}if(e[a.tokens.next.value]===true){Z("W075",a.tokens.next,a.tokens.next.value)}else if(a.tokens.next.value==="__proto__"&&!a.option.proto||a.tokens.next.value==="__iterator__"&&!a.option.iterator){Z("W096",a.tokens.next,a.tokens.next.value)}else{e[a.tokens.next.value]=true}rt()
rt(":")
fn()
if(a.tokens.next.id!==","){break}rt(",")}}rt("}")}function t(){var e=a.tokens.next
rt("[")
if(a.tokens.next.id!=="]"){for(;;){if(a.tokens.next.id==="(end)"){K("E027",a.tokens.next,e.line)}else if(a.tokens.next.id==="]"){Z("W094",a.tokens.curr)
break}else if(a.tokens.next.id===","){K("E028",a.tokens.next)}fn()
if(a.tokens.next.id!==","){break}rt(",")}}rt("]")}switch(a.tokens.next.id){case"{":e()
break
case"[":t()
break
case"true":case"false":case"null":case"(number)":case"(string)":rt()
break
case"-":rt("-")
if(a.tokens.curr.character!==a.tokens.next.from){Z("W011",a.tokens.curr)}at(a.tokens.curr,a.tokens.next)
rt("(number)")
break
default:K("E003",a.tokens.next)}}var un=function(){var e={}
var t=[e]
function n(){for(var t in e){if(e[t]["(type)"]==="unused"){if(a.option.unused){var n=e[t]["(token)"]
var r=n.line
var i=n.character
X("W098",r,i,t)}}}}return{stack:function(){e={}
t.push(e)},unstack:function(){n()
t.splice(t.length-1,1)
e=t[t.length-1]},getlabel:function(e){for(var n=t.length-1;n>=0;--n){if(P.has(t[n],e)){return t[n]}}},current:{has:function(t){return P.has(e,t)},add:function(t,n,r){e[t]={"(type)":n,"(token)":r}}}}}
var ln=function(e,t,i){var o,f,u
var c
var p={}
var h={}
a.reset()
if(t&&t.scope){l.scope=t.scope}else{l.errors=[]
l.undefs=[]
l.internals=[]
l.blacklist={}
l.scope="(main)"}M=Object.create(null)
H(M,r.ecmaIdentifiers)
H(M,r.reservedVars)
H(M,i||{})
k=Object.create(null)
v=Object.create(null)
function d(e,t){if(!e)return
if(!Array.isArray(e)&&typeof e==="object")e=Object.keys(e)
e.forEach(t)}if(t){d(t.predef||null,function(e){var n,r
if(e[0]==="-"){n=e.slice(1)
l.blacklist[n]=n}else{r=Object.getOwnPropertyDescriptor(t.predef,e)
M[e]=r?r.value:false}})
d(t.exported||null,function(e){v[e]=true})
delete t.predef
delete t.exported
c=Object.keys(t)
for(u=0;u<c.length;u++){if(/^-W\d{3}$/g.test(c[u])){h[c[u].slice(1)]=true}else{p[c[u]]=t[c[u]]
if(c[u]==="newcap"&&t[c[u]]===false)p["(explicitNewcap)"]=true
if(c[u]==="indent")p["(explicitIndent)"]=t[c[u]]===false?false:true}}}a.option=p
a.ignored=h
a.option.indent=a.option.indent||4
a.option.maxerr=a.option.maxerr||50
w=1
b=Object.create(M)
G=b
m={"(global)":true,"(name)":"(global)","(scope)":G,"(breakage)":0,"(loopage)":0,"(tokens)":{},"(metrics)":Jt(a.tokens.next),"(blockscope)":un(),"(comparray)":an()}
y=[m]
T=[]
V=null
_={}
L=null
x={}
E=false
S=[]
j=0
A=[]
if(!B(e)&&!Array.isArray(e)){Y("E004",0)
return false}n={get isJSON(){return a.jsonMode},getOption:function(e){return a.option[e]||null},getCache:function(e){return a.cache[e]},setCache:function(e,t){a.cache[e]=t},warn:function(e,t){X.apply(null,[e,t.line,t.char].concat(t.data))},on:function(e,t){e.split(" ").forEach(function(e){C.on(e,t)}.bind(this))}}
C.removeAllListeners();(O||[]).forEach(function(e){e(n)})
a.tokens.prev=a.tokens.curr=a.tokens.next=a.syntax["(begin)"]
W=new s(e)
W.on("warning",function(e){X.apply(null,[e.code,e.line,e.character].concat(e.data))})
W.on("error",function(e){Y.apply(null,[e.code,e.line,e.character].concat(e.data))})
W.on("fatal",function(e){$("E041",e.line,e.from)})
W.on("Identifier",function(e){C.emit("Identifier",e)})
W.on("String",function(e){C.emit("String",e)})
W.on("Number",function(e){C.emit("Number",e)})
W.start()
for(var g in t){if(P.has(t,g)){N(g,a.tokens.curr)}}z()
H(M,i||{})
kt.first=true
try{rt()
switch(a.tokens.next.id){case"{":case"[":on()
break
default:Nt()
if(a.directive["use strict"]){if(!a.option.globalstrict&&!(a.option.node||a.option.phantom)){Z("W097",a.tokens.prev)}}Pt()}rt(a.tokens.next&&a.tokens.next.value!=="."?"(end)":undefined)
m["(blockscope)"].unstack()
var I=function(e,t){do{if(typeof t[e]==="string"){if(t[e]==="unused")t[e]="var"
else if(t[e]==="unction")t[e]="closure"
return true}t=t["(context)"]}while(t)
return false}
var F=function(e,t){if(!x[e])return
var n=[]
for(var r=0;r<x[e].length;r+=1){if(x[e][r]!==t)n.push(x[e][r])}if(n.length===0)delete x[e]
else x[e]=n}
var U=function(e,t,n,r){var i=t.line
var s=t.character
if(r===undefined){r=a.option.unused}if(r===true){r="last-param"}var o={vars:["var"],"last-param":["var","param"],strict:["var","param","last-param"]}
if(r){if(o[r]&&o[r].indexOf(n)!==-1){X("W098",i,s,e)}}A.push({name:e,line:i,character:s})}
var D=function(e,t){var n=e[t]
var r=e["(tokens)"][t]
if(t.charAt(0)==="(")return
if(n!=="unused"&&n!=="unction")return
if(e["(params)"]&&e["(params)"].indexOf(t)!==-1)return
if(e["(global)"]&&P.has(v,t)){return}U(t,r,"var")}
for(o=0;o<l.undefs.length;o+=1){f=l.undefs[o].slice(0)
if(I(f[2].value,f[0])){F(f[2].value,f[2].line)}else if(a.option.undef){Z.apply(Z,f.slice(1))}}y.forEach(function(e){if(e["(unusedOption)"]===false){return}for(var t in e){if(P.has(e,t)){D(e,t)}}if(!e["(params)"])return
var n=e["(params)"].slice()
var r=n.pop()
var i,s
while(r){i=e[r]
s=e["(unusedOption)"]||a.option.unused
s=s===true?"last-param":s
if(r==="undefined")return
if(i==="unused"||i==="unction"){U(r,e["(tokens)"][r],"param",e["(unusedOption)"])}else if(s==="last-param"){return}r=n.pop()}})
for(var R in k){if(P.has(k,R)&&!P.has(b,R)){U(R,k[R],"var")}}}catch(q){if(q&&q.name==="JSHintError"){var J=a.tokens.next||{}
l.errors.push({scope:"(main)",raw:q.raw,code:q.code,reason:q.message,line:q.line||J.line,character:q.character||J.from},null)}else{throw q}}if(l.scope==="(main)"){t=t||{}
for(o=0;o<l.internals.length;o+=1){f=l.internals[o]
t.scope=f.elem
ln(f.value,t,i)}}return l.errors.length===0}
ln.addModule=function(e){O.push(e)}
ln.addModule(f.register)
ln.data=function(){var e={functions:[],options:a.option}
var t=[]
var n=[]
var r,i,s,o,f,u
if(ln.errors.length){e.errors=ln.errors}if(a.jsonMode){e.json=true}for(f in x){if(P.has(x,f)){t.push({name:f,line:x[f]})}}if(t.length>0){e.implieds=t}if(T.length>0){e.urls=T}u=Object.keys(G)
if(u.length>0){e.globals=u}for(s=1;s<y.length;s+=1){i=y[s]
r={}
for(o=0;o<g.length;o+=1){r[g[o]]=[]}for(o=0;o<g.length;o+=1){if(r[g[o]].length===0){delete r[g[o]]}}r.name=i["(name)"]
r.param=i["(params)"]
r.line=i["(line)"]
r.character=i["(character)"]
r.last=i["(last)"]
r.lastcharacter=i["(lastcharacter)"]
r.metrics={complexity:i["(metrics)"].ComplexityCount,parameters:(i["(params)"]||[]).length,statements:i["(metrics)"].statementCount}
e.functions.push(r)}if(A.length>0){e.unused=A}n=[]
for(f in _){if(typeof _[f]==="number"){e.member=_
break}}return e}
ln.jshint=ln
return ln}()
if(typeof n==="object"&&n){n.JSHINT=l}})()},{events:2,"./vars.js":3,"./messages.js":4,"./lex.js":8,"./reg.js":5,"./state.js":6,"./style.js":7,"console-browserify":9}],9:[function(e,t,n){(function(n){var r=e("util")
var i=e("assert")
var s=Array.prototype.slice
var o
var a={}
if(typeof n!=="undefined"&&n.console){o=n.console}else if(typeof window!=="undefined"&&window.console){o=window.console}else{o=window.console={}}var f=[[h,"log"],[d,"info"],[k,"warn"],[v,"error"],[g,"time"],[m,"timeEnd"],[y,"trace"],[b,"dir"],[i,"assert"]]
for(var u=0;u<f.length;u++){var l=f[u]
var c=l[0]
var p=l[1]
if(!o[p]){o[p]=c}}t.exports=o
function h(){}function d(){o.log.apply(o,arguments)}function k(){o.log.apply(o,arguments)}function v(){o.warn.apply(o,arguments)}function g(e){a[e]=Date.now()}function m(e){var t=a[e]
if(!t){throw new Error("No such label: "+e)}var n=Date.now()-t
o.log(e+": "+n+"ms")}function y(){var e=new Error
e.name="Trace"
e.message=r.format.apply(null,arguments)
o.error(e.stack)}function b(e){o.log(r.inspect(e)+"\n")}function i(e){if(!e){var t=s.call(arguments,1)
i.ok(false,r.format.apply(null,t))}}})(window)},{util:10,assert:11}],10:[function(e,t,n){var r=e("events")
n.isArray=i
n.isDate=function(e){return Object.prototype.toString.call(e)==="[object Date]"}
n.isRegExp=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"}
n.print=function(){}
n.puts=function(){}
n.debug=function(){}
n.inspect=function(e,t,r,a){var f=[]
var u=function(e,t){var n={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]}
var r={special:"cyan",number:"blue","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"}[t]
if(r){return"["+n[r][0]+"m"+e+"["+n[r][1]+"m"}else{return e}}
if(!a){u=function(e,t){return e}}function p(e,r){if(e&&typeof e.inspect==="function"&&e!==n&&!(e.constructor&&e.constructor.prototype===e)){return e.inspect(r)}switch(typeof e){case"undefined":return u("undefined","undefined")
case"string":var a="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return u(a,"string")
case"number":return u(""+e,"number")
case"boolean":return u(""+e,"boolean")}if(e===null){return u("null","null")}var h=l(e)
var d=t?c(e):h
if(typeof e==="function"&&d.length===0){if(s(e)){return u(""+e,"regexp")}else{var k=e.name?": "+e.name:""
return u("[Function"+k+"]","special")}}if(o(e)&&d.length===0){return u(e.toUTCString(),"date")}var v,g,m
if(i(e)){g="Array"
m=["[","]"]}else{g="Object"
m=["{","}"]}if(typeof e==="function"){var y=e.name?": "+e.name:""
v=s(e)?" "+e:" [Function"+y+"]"}else{v=""}if(o(e)){v=" "+e.toUTCString()}if(d.length===0){return m[0]+v+m[1]}if(r<0){if(s(e)){return u(""+e,"regexp")}else{return u("[Object]","special")}}f.push(e)
var b=d.map(function(t){var n,s
if(e.__lookupGetter__){if(e.__lookupGetter__(t)){if(e.__lookupSetter__(t)){s=u("[Getter/Setter]","special")}else{s=u("[Getter]","special")}}else{if(e.__lookupSetter__(t)){s=u("[Setter]","special")}}}if(h.indexOf(t)<0){n="["+t+"]"}if(!s){if(f.indexOf(e[t])<0){if(r===null){s=p(e[t])}else{s=p(e[t],r-1)}if(s.indexOf("\n")>-1){if(i(e)){s=s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2)}else{s="\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")}}}else{s=u("[Circular]","special")}}if(typeof n==="undefined"){if(g==="Array"&&t.match(/^\d+$/)){return s}n=JSON.stringify(""+t)
if(n.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){n=n.substr(1,n.length-2)
n=u(n,"name")}else{n=n.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'")
n=u(n,"string")}}return n+": "+s})
f.pop()
var x=0
var E=b.reduce(function(e,t){x++
if(t.indexOf("\n")>=0)x++
return e+t.length+1},0)
if(E>50){b=m[0]+(v===""?"":v+"\n ")+" "+b.join(",\n  ")+" "+m[1]}else{b=m[0]+v+" "+b.join(", ")+" "+m[1]}return b}return p(e,typeof r==="undefined"?2:r)}
function i(e){return e instanceof Array||Array.isArray(e)||e&&e!==Object.prototype&&i(e.__proto__)}function s(e){return e instanceof RegExp||typeof e==="object"&&Object.prototype.toString.call(e)==="[object RegExp]"}function o(e){if(e instanceof Date)return true
if(typeof e!=="object")return false
var t=Date.prototype&&c(Date.prototype)
var n=e.__proto__&&c(e.__proto__)
return JSON.stringify(n)===JSON.stringify(t)}function a(e){return e<10?"0"+e.toString(10):e.toString(10)}var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function u(){var e=new Date
var t=[a(e.getHours()),a(e.getMinutes()),a(e.getSeconds())].join(":")
return[e.getDate(),f[e.getMonth()],t].join(" ")}n.log=function(e){}
n.pump=null
var l=Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t}
var c=Object.getOwnPropertyNames||function(e){var t=[]
for(var n in e){if(Object.hasOwnProperty.call(e,n))t.push(n)}return t}
var p=Object.create||function(e,t){var n
if(e===null){n={__proto__:null}}else{if(typeof e!=="object"){throw new TypeError("typeof prototype["+typeof e+"] != 'object'")}var r=function(){}
r.prototype=e
n=new r
n.__proto__=e}if(typeof t!=="undefined"&&Object.defineProperties){Object.defineProperties(n,t)}return n}
n.inherits=function(e,t){e.super_=t
e.prototype=p(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}
var h=/%[sdj%]/g
n.format=function(e){if(typeof e!=="string"){var t=[]
for(var r=0;r<arguments.length;r++){t.push(n.inspect(arguments[r]))}return t.join(" ")}var r=1
var i=arguments
var s=i.length
var o=String(e).replace(h,function(e){if(e==="%%")return"%"
if(r>=s)return e
switch(e){case"%s":return String(i[r++])
case"%d":return Number(i[r++])
case"%j":return JSON.stringify(i[r++])
default:return e}})
for(var a=i[r];r<s;a=i[++r]){if(a===null||typeof a!=="object"){o+=" "+a}else{o+=" "+n.inspect(a)}}return o}},{events:2}],11:[function(e,t,n){(function(){var n=e("util")
var r=e("buffer").Buffer
var i=Array.prototype.slice
function s(e){if(Object.keys)return Object.keys(e)
var t=[]
for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){t.push(n)}}return t}var o=t.exports=l
o.AssertionError=function g(e){this.name="AssertionError"
this.message=e.message
this.actual=e.actual
this.expected=e.expected
this.operator=e.operator
var t=e.stackStartFunction||u
if(Error.captureStackTrace){Error.captureStackTrace(this,t)}}
n.inherits(o.AssertionError,Error)
function a(e,t){if(t===undefined){return""+t}if(typeof t==="number"&&(isNaN(t)||!isFinite(t))){return t.toString()}if(typeof t==="function"||t instanceof RegExp){return t.toString()}return t}function f(e,t){if(typeof e=="string"){return e.length<t?e:e.slice(0,t)}else{return e}}o.AssertionError.prototype.toString=function(){if(this.message){return[this.name+":",this.message].join(" ")}else{return[this.name+":",f(JSON.stringify(this.actual,a),128),this.operator,f(JSON.stringify(this.expected,a),128)].join(" ")}}
o.AssertionError.__proto__=Error.prototype
function u(e,t,n,r,i){throw new o.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}o.fail=u
function l(e,t){if(!!!e)u(e,true,t,"==",o.ok)}o.ok=l
o.equal=function m(e,t,n){if(e!=t)u(e,t,n,"==",o.equal)}
o.notEqual=function y(e,t,n){if(e==t){u(e,t,n,"!=",o.notEqual)}}
o.deepEqual=function b(e,t,n){if(!c(e,t)){u(e,t,n,"deepEqual",o.deepEqual)}}
function c(e,t){if(e===t){return true}else if(r.isBuffer(e)&&r.isBuffer(t)){if(e.length!=t.length)return false
for(var n=0;n<e.length;n++){if(e[n]!==t[n])return false}return true}else if(e instanceof Date&&t instanceof Date){return e.getTime()===t.getTime()}else if(typeof e!="object"&&typeof t!="object"){return e==t}else{return d(e,t)}}function p(e){return e===null||e===undefined}function h(e){return Object.prototype.toString.call(e)=="[object Arguments]"}function d(e,t){if(p(e)||p(t))return false
if(e.prototype!==t.prototype)return false
if(h(e)){if(!h(t)){return false}e=i.call(e)
t=i.call(t)
return c(e,t)}try{var n=s(e),r=s(t),o,a}catch(f){return false}if(n.length!=r.length)return false
n.sort()
r.sort()
for(a=n.length-1;a>=0;a--){if(n[a]!=r[a])return false}for(a=n.length-1;a>=0;a--){o=n[a]
if(!c(e[o],t[o]))return false}return true}o.notDeepEqual=function x(e,t,n){if(c(e,t)){u(e,t,n,"notDeepEqual",o.notDeepEqual)}}
o.strictEqual=function E(e,t,n){if(e!==t){u(e,t,n,"===",o.strictEqual)}}
o.notStrictEqual=function w(e,t,n){if(e===t){u(e,t,n,"!==",o.notStrictEqual)}}
function k(e,t){if(!e||!t){return false}if(t instanceof RegExp){return t.test(e)}else if(e instanceof t){return true}else if(t.call({},e)===true){return true}return false}function v(e,t,n,r){var i
if(typeof n==="string"){r=n
n=null}try{t()}catch(s){i=s}r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:".")
if(e&&!i){u("Missing expected exception"+r)}if(!e&&k(i,n)){u("Got unwanted exception"+r)}if(e&&i&&n&&!k(i,n)||!e&&i){throw i}}o.throws=function(e,t,n){v.apply(this,[true].concat(i.call(arguments)))}
o.doesNotThrow=function(e,t,n){v.apply(this,[false].concat(i.call(arguments)))}
o.ifError=function(e){if(e){throw e}}})()},{util:10,buffer:12}],13:[function(e,t,n){n.readIEEE754=function(e,t,n,r,i){var s,o,a=i*8-r-1,f=(1<<a)-1,u=f>>1,l=-7,c=n?0:i-1,p=n?1:-1,h=e[t+c]
c+=p
s=h&(1<<-l)-1
h>>=-l
l+=a
for(;l>0;s=s*256+e[t+c],c+=p,l-=8);o=s&(1<<-l)-1
s>>=-l
l+=r
for(;l>0;o=o*256+e[t+c],c+=p,l-=8);if(s===0){s=1-u}else if(s===f){return o?NaN:(h?-1:1)*Infinity}else{o=o+Math.pow(2,r)
s=s-u}return(h?-1:1)*o*Math.pow(2,s-r)}
n.writeIEEE754=function(e,t,n,r,i,s){var o,a,f,u=s*8-i-1,l=(1<<u)-1,c=l>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?s-1:0,d=r?-1:1,k=t<0||t===0&&1/t<0?1:0
t=Math.abs(t)
if(isNaN(t)||t===Infinity){a=isNaN(t)?1:0
o=l}else{o=Math.floor(Math.log(t)/Math.LN2)
if(t*(f=Math.pow(2,-o))<1){o--
f*=2}if(o+c>=1){t+=p/f}else{t+=p*Math.pow(2,1-c)}if(t*f>=2){o++
f/=2}if(o+c>=l){a=0
o=l}else if(o+c>=1){a=(t*f-1)*Math.pow(2,i)
o=o+c}else{a=t*Math.pow(2,c-1)*Math.pow(2,i)
o=0}}for(;i>=8;e[n+h]=a&255,h+=d,a/=256,i-=8);o=o<<i|a
u+=i
for(;u>0;e[n+h]=o&255,h+=d,o/=256,u-=8);e[n+h-d]|=k*128}},{}],12:[function(e,t,n){(function(){function t(e){this.length=e}var r=e("assert")
n.INSPECT_MAX_BYTES=50
function i(e){if(e<16)return"0"+e.toString(16)
return e.toString(16)}function s(e){var t=[]
for(var n=0;n<e.length;n++)if(e.charCodeAt(n)<=127)t.push(e.charCodeAt(n))
else{var r=encodeURIComponent(e.charAt(n)).substr(1).split("%")
for(var i=0;i<r.length;i++)t.push(parseInt(r[i],16))}return t}function o(e){var t=[]
for(var n=0;n<e.length;n++)t.push(e.charCodeAt(n)&255)
return t}function a(t){return e("base64-js").toByteArray(t)}t.byteLength=function(e,t){switch(t||"utf8"){case"hex":return e.length/2
case"utf8":case"utf-8":return s(e).length
case"ascii":case"binary":return e.length
case"base64":return a(e).length
default:throw new Error("Unknown encoding")}}
function f(e,t,n,r){var i,s=0
while(s<r){if(s+n>=t.length||s>=e.length)break
t[s+n]=e[s]
s++}return s}t.prototype.utf8Write=function(e,n,r){var i,o
return t._charsWritten=f(s(e),this,n,r)}
t.prototype.asciiWrite=function(e,n,r){var i,s
return t._charsWritten=f(o(e),this,n,r)}
t.prototype.binaryWrite=t.prototype.asciiWrite
t.prototype.base64Write=function(e,n,r){var i,s
return t._charsWritten=f(a(e),this,n,r)}
t.prototype.base64Slice=function(t,n){var r=Array.prototype.slice.apply(this,arguments)
return e("base64-js").fromByteArray(r)}
function u(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}t.prototype.utf8Slice=function(){var e=Array.prototype.slice.apply(this,arguments)
var t=""
var n=""
var r=0
while(r<e.length){if(e[r]<=127){t+=u(n)+String.fromCharCode(e[r])
n=""}else n+="%"+e[r].toString(16)
r++}return t+u(n)}
t.prototype.asciiSlice=function(){var e=Array.prototype.slice.apply(this,arguments)
var t=""
for(var n=0;n<e.length;n++)t+=String.fromCharCode(e[n])
return t}
t.prototype.binarySlice=t.prototype.asciiSlice
t.prototype.inspect=function(){var e=[],t=this.length
for(var r=0;r<t;r++){e[r]=i(this[r])
if(r==n.INSPECT_MAX_BYTES){e[r+1]="..."
break}}return"<SlowBuffer "+e.join(" ")+">"}
t.prototype.hexSlice=function(e,t){var n=this.length
if(!e||e<0)e=0
if(!t||t<0||t>n)t=n
var r=""
for(var s=e;s<t;s++){r+=i(this[s])}return r}
t.prototype.toString=function(e,t,n){e=String(e||"utf8").toLowerCase()
t=+t||0
if(typeof n=="undefined")n=this.length
if(+n==t){return""}switch(e){case"hex":return this.hexSlice(t,n)
case"utf8":case"utf-8":return this.utf8Slice(t,n)
case"ascii":return this.asciiSlice(t,n)
case"binary":return this.binarySlice(t,n)
case"base64":return this.base64Slice(t,n)
case"ucs2":case"ucs-2":return this.ucs2Slice(t,n)
default:throw new Error("Unknown encoding")}}
t.prototype.hexWrite=function(e,n,r){n=+n||0
var i=this.length-n
if(!r){r=i}else{r=+r
if(r>i){r=i}}var s=e.length
if(s%2){throw new Error("Invalid hex string")}if(r>s/2){r=s/2}for(var o=0;o<r;o++){var a=parseInt(e.substr(o*2,2),16)
if(isNaN(a))throw new Error("Invalid hex string")
this[n+o]=a}t._charsWritten=o*2
return o}
t.prototype.write=function(e,t,n,r){if(isFinite(t)){if(!isFinite(n)){r=n
n=undefined}}else{var i=r
r=t
t=n
n=i}t=+t||0
var s=this.length-t
if(!n){n=s}else{n=+n
if(n>s){n=s}}r=String(r||"utf8").toLowerCase()
switch(r){case"hex":return this.hexWrite(e,t,n)
case"utf8":case"utf-8":return this.utf8Write(e,t,n)
case"ascii":return this.asciiWrite(e,t,n)
case"binary":return this.binaryWrite(e,t,n)
case"base64":return this.base64Write(e,t,n)
case"ucs2":case"ucs-2":return this.ucs2Write(e,t,n)
default:throw new Error("Unknown encoding")}}
t.prototype.slice=function(e,t){if(t===undefined)t=this.length
if(t>this.length){throw new Error("oob")}if(e>t){throw new Error("oob")}return new c(this,t-e,+e)}
t.prototype.copy=function(e,t,n,i){var s=[]
for(var o=n;o<i;o++){r.ok(typeof this[o]!=="undefined","copying undefined buffer bytes!")
s.push(this[o])}for(var o=t;o<t+s.length;o++){e[o]=s[o-t]}}
t.prototype.fill=function(e,t,n){if(n>this.length){throw new Error("oob")}if(t>n){throw new Error("oob")}for(var r=t;r<n;r++){this[r]=e}}
function l(e){e=~~Math.ceil(+e)
return e<0?0:e}function c(e,n,r){if(!(this instanceof c)){return new c(e,n,r)}var i
if(typeof r==="number"){this.length=l(n)
this.parent=e
this.offset=r}else{switch(i=typeof e){case"number":this.length=l(e)
break
case"string":this.length=c.byteLength(e,n)
break
case"object":this.length=l(e.length)
break
default:throw new Error("First argument needs to be a number, "+"array or string.")}if(this.length>c.poolSize){this.parent=new t(this.length)
this.offset=0}else{if(!h||h.length-h.used<this.length)d()
this.parent=h
this.offset=h.used
h.used+=this.length}if(p(e)){for(var s=0;s<this.length;s++){if(e instanceof c){this.parent[s+this.offset]=e.readUInt8(s)}else{this.parent[s+this.offset]=e[s]}}}else if(i=="string"){this.length=this.write(e,0,n)}}}function p(e){return Array.isArray(e)||c.isBuffer(e)||e&&typeof e==="object"&&typeof e.length==="number"}n.SlowBuffer=t
n.Buffer=c
c.poolSize=8*1024
var h
function d(){h=new t(c.poolSize)
h.used=0}c.isBuffer=function G(e){return e instanceof c||e instanceof t}
c.concat=function(e,t){if(!Array.isArray(e)){throw new Error("Usage: Buffer.concat(list, [totalLength])\n       list should be an Array.")}if(e.length===0){return new c(0)}else if(e.length===1){return e[0]}if(typeof t!=="number"){t=0
for(var n=0;n<e.length;n++){var r=e[n]
t+=r.length}}var i=new c(t)
var s=0
for(var n=0;n<e.length;n++){var r=e[n]
r.copy(i,s)
s+=r.length}return i}
c.prototype.inspect=function V(){var e=[],t=this.length
for(var r=0;r<t;r++){e[r]=i(this.parent[r+this.offset])
if(r==n.INSPECT_MAX_BYTES){e[r+1]="..."
break}}return"<Buffer "+e.join(" ")+">"}
c.prototype.get=function A(e){if(e<0||e>=this.length)throw new Error("oob")
return this.parent[this.offset+e]}
c.prototype.set=function T(e,t){if(e<0||e>=this.length)throw new Error("oob")
return this.parent[this.offset+e]=t}
c.prototype.write=function(e,n,r,i){if(isFinite(n)){if(!isFinite(r)){i=r
r=undefined}}else{var s=i
i=n
n=r
r=s}n=+n||0
var o=this.length-n
if(!r){r=o}else{r=+r
if(r>o){r=o}}i=String(i||"utf8").toLowerCase()
var a
switch(i){case"hex":a=this.parent.hexWrite(e,this.offset+n,r)
break
case"utf8":case"utf-8":a=this.parent.utf8Write(e,this.offset+n,r)
break
case"ascii":a=this.parent.asciiWrite(e,this.offset+n,r)
break
case"binary":a=this.parent.binaryWrite(e,this.offset+n,r)
break
case"base64":a=this.parent.base64Write(e,this.offset+n,r)
break
case"ucs2":case"ucs-2":a=this.parent.ucs2Write(e,this.offset+n,r)
break
default:throw new Error("Unknown encoding")}c._charsWritten=t._charsWritten
return a}
c.prototype.toString=function(e,t,n){e=String(e||"utf8").toLowerCase()
if(typeof t=="undefined"||t<0){t=0}else if(t>this.length){t=this.length}if(typeof n=="undefined"||n>this.length){n=this.length}else if(n<0){n=0}t=t+this.offset
n=n+this.offset
switch(e){case"hex":return this.parent.hexSlice(t,n)
case"utf8":case"utf-8":return this.parent.utf8Slice(t,n)
case"ascii":return this.parent.asciiSlice(t,n)
case"binary":return this.parent.binarySlice(t,n)
case"base64":return this.parent.base64Slice(t,n)
case"ucs2":case"ucs-2":return this.parent.ucs2Slice(t,n)
default:throw new Error("Unknown encoding")}}
c.byteLength=t.byteLength
c.prototype.fill=function j(e,t,n){e||(e=0)
t||(t=0)
n||(n=this.length)
if(typeof e==="string"){e=e.charCodeAt(0)}if(!(typeof e==="number")||isNaN(e)){throw new Error("value is not a number")}if(n<t)throw new Error("end < start")
if(n===t)return 0
if(this.length==0)return 0
if(t<0||t>=this.length){throw new Error("start out of bounds")}if(n<0||n>this.length){throw new Error("end out of bounds")}return this.parent.fill(e,t+this.offset,n+this.offset)}
c.prototype.copy=function(e,t,n,r){var i=this
n||(n=0)
r||(r=this.length)
t||(t=0)
if(r<n)throw new Error("sourceEnd < sourceStart")
if(r===n)return 0
if(e.length==0||i.length==0)return 0
if(t<0||t>=e.length){throw new Error("targetStart out of bounds")}if(n<0||n>=i.length){throw new Error("sourceStart out of bounds")}if(r<0||r>i.length){throw new Error("sourceEnd out of bounds")}if(r>this.length){r=this.length}if(e.length-t<r-n){r=e.length-t+n}return this.parent.copy(e.parent,t+e.offset,n+this.offset,r+this.offset)}
c.prototype.slice=function(e,t){if(t===undefined)t=this.length
if(t>this.length)throw new Error("oob")
if(e>t)throw new Error("oob")
return new c(this.parent,t-e,+e+this.offset)}
c.prototype.utf8Slice=function(e,t){return this.toString("utf8",e,t)}
c.prototype.binarySlice=function(e,t){return this.toString("binary",e,t)}
c.prototype.asciiSlice=function(e,t){return this.toString("ascii",e,t)}
c.prototype.utf8Write=function(e,t){return this.write(e,t,"utf8")}
c.prototype.binaryWrite=function(e,t){return this.write(e,t,"binary")}
c.prototype.asciiWrite=function(e,t){return this.write(e,t,"ascii")}
c.prototype.readUInt8=function(e,t){var n=this
if(!t){r.ok(e!==undefined&&e!==null,"missing offset")
r.ok(e<n.length,"Trying to read beyond buffer length")}if(e>=n.length)return
return n.parent[n.offset+e]}
function k(e,t,n,i){var s=0
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+1<e.length,"Trying to read beyond buffer length")}if(t>=e.length)return 0
if(n){s=e.parent[e.offset+t]<<8
if(t+1<e.length){s|=e.parent[e.offset+t+1]}}else{s=e.parent[e.offset+t]
if(t+1<e.length){s|=e.parent[e.offset+t+1]<<8}}return s}c.prototype.readUInt16LE=function(e,t){return k(this,e,false,t)}
c.prototype.readUInt16BE=function(e,t){return k(this,e,true,t)}
function v(e,t,n,i){var s=0
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+3<e.length,"Trying to read beyond buffer length")}if(t>=e.length)return 0
if(n){if(t+1<e.length)s=e.parent[e.offset+t+1]<<16
if(t+2<e.length)s|=e.parent[e.offset+t+2]<<8
if(t+3<e.length)s|=e.parent[e.offset+t+3]
s=s+(e.parent[e.offset+t]<<24>>>0)}else{if(t+2<e.length)s=e.parent[e.offset+t+2]<<16
if(t+1<e.length)s|=e.parent[e.offset+t+1]<<8
s|=e.parent[e.offset+t]
if(t+3<e.length)s=s+(e.parent[e.offset+t+3]<<24>>>0)}return s}c.prototype.readUInt32LE=function(e,t){return v(this,e,false,t)}
c.prototype.readUInt32BE=function(e,t){return v(this,e,true,t)}
c.prototype.readInt8=function(e,t){var n=this
var i
if(!t){r.ok(e!==undefined&&e!==null,"missing offset")
r.ok(e<n.length,"Trying to read beyond buffer length")}if(e>=n.length)return
i=n.parent[n.offset+e]&128
if(!i){return n.parent[n.offset+e]}return(255-n.parent[n.offset+e]+1)*-1}
function g(e,t,n,i){var s,o
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+1<e.length,"Trying to read beyond buffer length")}o=k(e,t,n,i)
s=o&32768
if(!s){return o}return(65535-o+1)*-1}c.prototype.readInt16LE=function(e,t){return g(this,e,false,t)}
c.prototype.readInt16BE=function(e,t){return g(this,e,true,t)}
function m(e,t,n,i){var s,o
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+3<e.length,"Trying to read beyond buffer length")}o=v(e,t,n,i)
s=o&2147483648
if(!s){return o}return(4294967295-o+1)*-1}c.prototype.readInt32LE=function(e,t){return m(this,e,false,t)}
c.prototype.readInt32BE=function(e,t){return m(this,e,true,t)}
function y(t,n,i,s){if(!s){r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n+3<t.length,"Trying to read beyond buffer length")}return e("./buffer_ieee754").readIEEE754(t,n,i,23,4)}c.prototype.readFloatLE=function(e,t){return y(this,e,false,t)}
c.prototype.readFloatBE=function(e,t){return y(this,e,true,t)}
function b(t,n,i,s){if(!s){r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n+7<t.length,"Trying to read beyond buffer length")}return e("./buffer_ieee754").readIEEE754(t,n,i,52,8)}c.prototype.readDoubleLE=function(e,t){return b(this,e,false,t)}
c.prototype.readDoubleBE=function(e,t){return b(this,e,true,t)}
function x(e,t){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e>=0,"specified a negative value for writing an unsigned value")
r.ok(e<=t,"value is larger than maximum value for type")
r.ok(Math.floor(e)===e,"value has a fractional component")}c.prototype.writeUInt8=function(e,t,n){var i=this
if(!n){r.ok(e!==undefined&&e!==null,"missing value")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t<i.length,"trying to write beyond buffer length")
x(e,255)}if(t<i.length){i.parent[i.offset+t]=e}}
function E(e,t,n,i,s){if(!s){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+1<e.length,"trying to write beyond buffer length")
x(t,65535)}for(var o=0;o<Math.min(e.length-n,2);o++){e.parent[e.offset+n+o]=(t&255<<8*(i?1-o:o))>>>(i?1-o:o)*8}}c.prototype.writeUInt16LE=function(e,t,n){E(this,e,t,false,n)}
c.prototype.writeUInt16BE=function(e,t,n){E(this,e,t,true,n)}
function w(e,t,n,i,s){if(!s){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+3<e.length,"trying to write beyond buffer length")
x(t,4294967295)}for(var o=0;o<Math.min(e.length-n,4);o++){e.parent[e.offset+n+o]=t>>>(i?3-o:o)*8&255}}c.prototype.writeUInt32LE=function(e,t,n){w(this,e,t,false,n)}
c.prototype.writeUInt32BE=function(e,t,n){w(this,e,t,true,n)}
function S(e,t,n){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e<=t,"value larger than maximum allowed value")
r.ok(e>=n,"value smaller than minimum allowed value")
r.ok(Math.floor(e)===e,"value has a fractional component")}function W(e,t,n){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e<=t,"value larger than maximum allowed value")
r.ok(e>=n,"value smaller than minimum allowed value")}c.prototype.writeInt8=function(e,t,n){var i=this
if(!n){r.ok(e!==undefined&&e!==null,"missing value")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t<i.length,"Trying to write beyond buffer length")
S(e,127,-128)}if(e>=0){i.writeUInt8(e,t,n)}else{i.writeUInt8(255+e+1,t,n)}}
function _(e,t,n,i,s){if(!s){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+1<e.length,"Trying to write beyond buffer length")
S(t,32767,-32768)}if(t>=0){E(e,t,n,i,s)}else{E(e,65535+t+1,n,i,s)}}c.prototype.writeInt16LE=function(e,t,n){_(this,e,t,false,n)}
c.prototype.writeInt16BE=function(e,t,n){_(this,e,t,true,n)}
function L(e,t,n,i,s){if(!s){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+3<e.length,"Trying to write beyond buffer length")
S(t,2147483647,-2147483648)}if(t>=0){w(e,t,n,i,s)}else{w(e,4294967295+t+1,n,i,s)}}c.prototype.writeInt32LE=function(e,t,n){L(this,e,t,false,n)}
c.prototype.writeInt32BE=function(e,t,n){L(this,e,t,true,n)}
function I(t,n,i,s,o){if(!o){r.ok(n!==undefined&&n!==null,"missing value")
r.ok(typeof s==="boolean","missing or invalid endian")
r.ok(i!==undefined&&i!==null,"missing offset")
r.ok(i+3<t.length,"Trying to write beyond buffer length")
W(n,3.4028234663852886e38,-3.4028234663852886e38)}e("./buffer_ieee754").writeIEEE754(t,n,i,s,23,4)}c.prototype.writeFloatLE=function(e,t,n){I(this,e,t,false,n)}
c.prototype.writeFloatBE=function(e,t,n){I(this,e,t,true,n)}
function M(t,n,i,s,o){if(!o){r.ok(n!==undefined&&n!==null,"missing value")
r.ok(typeof s==="boolean","missing or invalid endian")
r.ok(i!==undefined&&i!==null,"missing offset")
r.ok(i+7<t.length,"Trying to write beyond buffer length")
W(n,1.7976931348623157e308,-1.7976931348623157e308)}e("./buffer_ieee754").writeIEEE754(t,n,i,s,52,8)}c.prototype.writeDoubleLE=function(e,t,n){M(this,e,t,false,n)}
c.prototype.writeDoubleBE=function(e,t,n){M(this,e,t,true,n)}
t.prototype.readUInt8=c.prototype.readUInt8
t.prototype.readUInt16LE=c.prototype.readUInt16LE
t.prototype.readUInt16BE=c.prototype.readUInt16BE
t.prototype.readUInt32LE=c.prototype.readUInt32LE
t.prototype.readUInt32BE=c.prototype.readUInt32BE
t.prototype.readInt8=c.prototype.readInt8
t.prototype.readInt16LE=c.prototype.readInt16LE
t.prototype.readInt16BE=c.prototype.readInt16BE
t.prototype.readInt32LE=c.prototype.readInt32LE
t.prototype.readInt32BE=c.prototype.readInt32BE
t.prototype.readFloatLE=c.prototype.readFloatLE
t.prototype.readFloatBE=c.prototype.readFloatBE
t.prototype.readDoubleLE=c.prototype.readDoubleLE
t.prototype.readDoubleBE=c.prototype.readDoubleBE
t.prototype.writeUInt8=c.prototype.writeUInt8
t.prototype.writeUInt16LE=c.prototype.writeUInt16LE
t.prototype.writeUInt16BE=c.prototype.writeUInt16BE
t.prototype.writeUInt32LE=c.prototype.writeUInt32LE
t.prototype.writeUInt32BE=c.prototype.writeUInt32BE
t.prototype.writeInt8=c.prototype.writeInt8
t.prototype.writeInt16LE=c.prototype.writeInt16LE
t.prototype.writeInt16BE=c.prototype.writeInt16BE
t.prototype.writeInt32LE=c.prototype.writeInt32LE
t.prototype.writeInt32BE=c.prototype.writeInt32BE
t.prototype.writeFloatLE=c.prototype.writeFloatLE
t.prototype.writeFloatBE=c.prototype.writeFloatBE
t.prototype.writeDoubleLE=c.prototype.writeDoubleLE
t.prototype.writeDoubleBE=c.prototype.writeDoubleBE})()},{assert:11,"./buffer_ieee754":13,"base64-js":14}],14:[function(e,t,n){(function(e){"use strict"
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function r(e){var t,r,i,s,o,a
if(e.length%4>0){throw"Invalid string. Length must be a multiple of 4"}o=e.indexOf("=")
o=o>0?e.length-o:0
a=[]
i=o>0?e.length-4:e.length
for(t=0,r=0;t<i;t+=4,r+=3){s=n.indexOf(e[t])<<18|n.indexOf(e[t+1])<<12|n.indexOf(e[t+2])<<6|n.indexOf(e[t+3])
a.push((s&16711680)>>16)
a.push((s&65280)>>8)
a.push(s&255)}if(o===2){s=n.indexOf(e[t])<<2|n.indexOf(e[t+1])>>4
a.push(s&255)}else if(o===1){s=n.indexOf(e[t])<<10|n.indexOf(e[t+1])<<4|n.indexOf(e[t+2])>>2
a.push(s>>8&255)
a.push(s&255)}return a}function i(e){var t,r=e.length%3,i="",s,o
function a(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[e&63]}for(t=0,o=e.length-r;t<o;t+=3){s=(e[t]<<16)+(e[t+1]<<8)+e[t+2]
i+=a(s)}switch(r){case 1:s=e[e.length-1]
i+=n[s>>2]
i+=n[s<<4&63]
i+="=="
break
case 2:s=(e[e.length-2]<<8)+e[e.length-1]
i+=n[s>>10]
i+=n[s>>4&63]
i+=n[s<<2&63]
i+="="
break}return i}t.exports.toByteArray=r
t.exports.fromByteArray=i})()},{}]},{},["FD4Lxs"])
JSHINT=e("jshint").JSHINT})()
KAdefine("javascript/scratchpads-exec-package/jshint.js", function(require, requireWithVars, module, exports) {
    module.exports = JSHINT;
});
KAdefine("javascript/scratchpads-exec-package/babyhint.js", function(require, requireWithVars, module, exports) {
var Jed=require("../../third_party/javascript-khansrc/jed/jed.js")
require("../shared-package/i18n.js")
var BabyHint={EDIT_DISTANCE_THRESHOLD:2,keywords:["break","case","catch","continue","default","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","while","charAt","charCodeAt","fromCharCode","indexOf","lastIndexOf","length","pop","prototype","push","replace","search","shift","slice","substring","toLowerCase","toUpperCase","unshift"],functionParamCount:{acos:1,asin:1,atan:1,atan2:2,background:[1,3],beginShape:[0,1],bezier:8,bezierVertex:[6],box:[1,2,3],color:[3,4],colorMode:[1,2,4,5],createFont:[1,2],cos:1,curve:8,endShape:[0,1],dist:4,fill:[1,3,4],filter:[1,2],get:[2,3,4,5],image:[3,5],line:4,loadImage:[1,3],mag:[2,3],max:2,min:2,noise:[1,2,3],PVector:[0,2,3],random:[0,1,2],RegExp:[1,2],rect:[4,5],scale:[1,2],set:[3,4],sin:1,stroke:[1,3,4],tan:1,text:[3,5],textFont:[1,2],translate:[2,3],vertex:[2,4]},functionFormSuggestion:{"function":"var drawWinston = function() { ... };","while":"while (x < 20) { ... };"},functionParamBlacklist:["debug","max","min"],bannedProperties:{location:true,document:true,ownerDocument:true,createElement:true},variables:[],errors:[],inComment:false,spellChecked:false,init:function(){for(var e in Output.context){if(typeof Output.context[e]==="function"){BabyHint.keywords.push(e)
if(!(e in BabyHint.functionParamCount)&&!_.include(BabyHint.functionParamBlacklist,e)){BabyHint.functionParamCount[e]=Output.context[e].length}}}},initDocumentation:function(e){for(var n=0;n<e.length;n++){var a=e[n]
var r=a.indexOf("(")
var t=a
if(r>=0){t=t.substring(0,r).trim()
BabyHint.functionFormSuggestion[t]=a}}},babyErrors:function(e,n){var a={}
var r=e.split("\n")
BabyHint.errors=[]
BabyHint.variables=[]
BabyHint.inComment=false
BabyHint.spellChecked=false
_.each(n,function(e){if(e){a[e.line-2]=true}})
_.each(r,function(e,n){BabyHint.errors=BabyHint.errors.concat(BabyHint.parseLine(e,n,a[n]))})
return BabyHint.errors},parseLine:function(e,n,a){var r=[]
if(BabyHint.inComment){e=BabyHint.removeEndOfMultilineComment(e)}if(!BabyHint.inComment){e=BabyHint.removeComments(e)
e=BabyHint.removeStrings(e)
r=r.concat(BabyHint.checkFunctionDecl(e,n)).concat(BabyHint.checkTrailingEquals(e,n)).concat(BabyHint.checkFunctionParams(e,n)).concat(BabyHint.checkBannedProperties(e,n))
if(a){r=r.concat(BabyHint.checkSpaceAfterVar(e,n))
if(!BabyHint.spellChecked){r=r.concat(BabyHint.checkSpelling(e,n))
BabyHint.spellChecked=true}}BabyHint.variables=BabyHint.variables.concat(BabyHint.getVariables(e))}return r},removeComments:function(e){var n=e.indexOf("//")
if(n!==-1){e=e.slice(0,n)}while(e.indexOf("/*")!==-1){n=e.indexOf("/*")
var a=e.indexOf("*/")
while(a!==-1&&a<=n+1){e=e.slice(0,a)+"  "+e.slice(a+2)
a=e.indexOf("*/")}if(a>n+1){var r=e.slice(n,a+2)
e=e.slice(0,n)+r.replace(/./g," ")+e.slice(a+2)}else if(a===-1){BabyHint.inComment=true
e=e.slice(0,n)}}return e},removeEndOfMultilineComment:function(e){var n=e.indexOf("*/")
if(n!==-1){BabyHint.inComment=false
e=e.slice(0,n+2).replace(/./g," ")+e.slice(n+2)}return e},removeStrings:function(e){var n=-1
var a=null
for(var r=0;r<e.length;r++){var t=e[r]
if(n===-1){if(t==='"'){n=r
a='"'}else if(t==="'"){n=r
a="'"}}else if(t===a){var i=e.slice(n+1,r)
e=e.slice(0,n+1)+i.replace(/./g," ")+e.slice(r)
n=-1}}return e},checkFunctionDecl:function(e,n){var a=[]
var r=e.match(/function\s+\w+/g)
_.each(r,function(r){var t=r.split(/\s+/g)[1]
var i={row:n,column:e.indexOf(r),text:$._('If you want to define a function, you should use "var %(name)s = function() {}; " instead!',{name:t}),breaksCode:true,source:"funcdeclaration"}
a.push(i)})
return a},checkBannedProperties:function(e,n){var a=[]
var r=e.split(/[^~`@#\$\^\w]/g)
_.each(r,function(r){if(BabyHint.bannedProperties.hasOwnProperty(r)){var t={row:n,column:e.indexOf(r),text:$._("%(word)s is a reserved word.",{word:r}),breaksCode:true,source:"bannedwords"}
a.push(t)}})
return a},checkSpelling:function(e,n){var a=[]
var r=e.split(/[^~`@#\$\^\w]/g)
var t=false
_.each(r,function(r){if(r.length>0&&!t){var i=BabyHint.editDistance(r)
var o=i.editDistance
var s=i.keyword
if(o>0&&o<=BabyHint.EDIT_DISTANCE_THRESHOLD&&o<s.length-1&&BabyHint.keywords.indexOf(r)===-1){var c={row:n,column:e.indexOf(r),text:$._('Did you mean to type "%(keyword)s" instead of "%(word)s"?',{keyword:s,word:r}),breaksCode:false,source:"spellcheck"}
if(BabyHint.functionFormSuggestion[s]){c.text+=" "+$._('In case you forgot, you can use it like "%(usage)s"',{usage:BabyHint.functionFormSuggestion[s]})}a.push(c)}}t=r==="var"||r==="function"})
return a},editDistance:function(e){var n=e
e=e.toLowerCase()
var a=function(e,n,a){a=typeof a==="undefined"?0:a
var r=[]
for(var t=0;t<e;t++){r[t]=[]
for(var i=0;i<n;i++){r[t][i]=a}}return r}
var r=Infinity
var t=""
_.each(BabyHint.keywords.concat(BabyHint.variables),function(i){if(i===n){r=0
t=i
return}if(i.toLowerCase()===e&&i!==n){r=1
t=i
return}if(Math.abs(i.length-e.length)>BabyHint.EDIT_DISTANCE_THRESHOLD){return}var o=i.length
var s=e.length
var c=a(o,s,1)
if(i[0]===e[0]){c[0][0]=0}for(var u=1;u<s;u++){var f=i[0]===e[u]?0:1
c[0][u]=c[0][u-1]+f}for(var l=1;l<o;l++){var f=i[l]===e[0]?0:1
c[l][0]=c[l-1][0]+f}for(var v=1;v<o;v++){var h=Number.MAX_VALUE
for(var m=1;m<s;m++){var f=i[v]===e[m]?0:1
var d=_.min([c[v-1][m]+1,c[v][m-1]+1,c[v-1][m-1]+f])
h=Math.min(h,d)
c[v][m]=d}if(h>BabyHint.EDIT_DISTANCE_THRESHOLD){return}}if(c[o-1][s-1]<r){r=c[o-1][s-1]
t=i}})
return{editDistance:r,keyword:t}},checkSpaceAfterVar:function(e,n){var a=[]
var r=/var\w+/g
var t=e.match(r)
if(t){var i=t[0].slice(3)
var o={row:n,column:e.search(r)+3,text:$._('Did you forget a space between "var" and "%(variable)s"?',{variable:i}),breaksCode:false}
a.push(o)}return a},checkTrailingEquals:function(e,n){var a=[]
var r=e.length-1
while(e[r]===" "){r--}if(e[r]==="="){var t={row:n,column:r,text:$._('You can\'t end a line with "="'),breaksCode:true}
a.push(t)}return a},getVariables:function(e){var n=[]
var a=/\s*var\s*([A-z]\w*)\s*(;|=)/
if(a.exec(e)){var r=a.exec(e)[1]
n.push(r)}var t=/function\s*\(([\w\s,]*)\)/
if(t.exec(e)){var i=RegExp.$1
var o=i.split(/\s*,\s*/)
_.each(o,function(e){if(e){n.push(e)}})}return n},checkFunctionParams:function(e,n){var a=[]
var r={}
var t=[]
for(var i=0;i<e.length;i++){if(e[i]==="("){t.push(i)}else if(e[i]===")"){if(t.length===0){var o={row:n,column:i,text:$._('It looks like you have an extra ")"'),breaksCode:false,source:"paramschecker"}
a.push(o)
return a}else{r[t.pop()]=i}}}if(t.length>0){var o={row:n,column:t.pop(),text:$._('It looks like you are missing a ")" - does every "(" have a corresponding closing ")"?'),breaksCode:false,source:"paramschecker"}
a.push(o)
return a}var s=e.match(/\w+\s*\(/g)||[]
var c=e.match(/\.\s*\w+\s*\(/g)||[]
c=_.map(c,function(e){var n=e.indexOf(e.match(/\w/g)[0])
return e.slice(n)})
for(var i=s.length-1;i>=0;i--){var u=e.lastIndexOf(s[i])
var f=s[i].split(/\(\s*/g)[0]
u+=f.length
var l=e.slice(u,r[u]+1)
var v=l.match(/[A-z0-9]+\s+[A-z0-9]+/g)
if(v){var h=e.indexOf(v[0])
while(e[h]!==" "){h++}var o={row:n,column:h,text:$._("Did you forget to add a comma between two parameters?"),breaksCode:false,source:"paramschecker"}
a.push(o)
break}var m
var d=l.match(/,/g)
if(d){m=d.length+1}else{m=l.match(/[^\s()]/g)?1:0}if(!_.include(c,s[i])){f=f.replace(/\s/g,"")
var b=BabyHint.functionParamCount[f]
var g
var y
if(typeof b!=="undefined"){y='"'+f+'()"'
if(typeof b==="number"&&m!==b){g=$.ngettext("%(name)s takes 1 parameter, not %(given)s!","%(name)s takes %(num)s parameters, not %(given)s!",b,{name:y,given:m})}else if(typeof b!=="number"&&!_.include(b,m)){var p=""+b[0]
for(var k=1;k<b.length-1;k++){p+=", "+b[k]}p+=" "+$._("or")+" "+b[b.length-1]
g=$._("%(name)s takes %(list)s parameters, not %(given)s!",{name:y,list:p,given:m})}}if(g){var w=BabyHint.functionFormSuggestion[f]
if(w){g=$._("It looks like you're trying to use %(name)s. In case you forgot, you can use it like: %(usage)s",{name:y,usage:'"'+w+'"'})}}if(g){var o={row:n,column:u,text:g,breaksCode:true,source:"paramschecker"}
a.push(o)}}e=e.slice(0,u)+l.replace(/./g,"0")+e.slice(r[u]+1)}return a}}
window.BabyHint=BabyHint
module.exports=BabyHint
});
KAdefine("javascript/shared-package/analytics.js", function(require, requireWithVars, module, exports) {
var getNow=Date.now||function(){return+new Date}
var diffMS=function(t,e,r){var n=e-t
if(r){return n}return Math.round(n)}
var diffS=function(t,e,r){var n=diffMS(t,e,true)/1e3
if(r){return n}return Math.round(n)}
var NORMALIZE_PATH_RULES=[{firstPart:"profile",partsToExtract:[{index:1,token:":username"}]},{firstPart:"mission",partsToExtract:[{index:1,token:":missionSlug"},{index:3,token:":taskId"}]}]
var getNormalizedPathParams=function(t){var e=t.toLowerCase().replace(/(\/+$|^\/)/g,"")
var r=e.split("/")
if(!r.length){return{}}var n=_.find(NORMALIZE_PATH_RULES,function(t){return r[0]===t.firstPart})
if(!n){return{}}var a={}
_.chain(n.partsToExtract).filter(function(t){return r.length>t.index}).each(function(t){a["Path Token "+t.token]=r[t.index]
r[t.index]=t.token})
_.extend(a,{"Path Normalized":"/"+r.join("/")})
return a}
var currentPath=null
var currentTrackingActivity=null
var eventQueue=[]
var analyticsStore={persistData:{timestamp:0,events:{},trackingProperties:{}},loadAndSendPersistData:function(){if(!window.mixpanelEnabled){return}if(window.sessionStorage){var t=null
try{t=$.parseJSON(sessionStorage.getItem("ka_analytics"))}catch(e){return}if(!t||!t.timestamp){return}var r=getNow()
if(diffS(t.timestamp,r,true)<60){this.persistData=t
_.each(t.events,this._sendEvent,this)}}},addEvent:function(t){if(!window.mixpanelEnabled){return $.when()}this.persistData.events[t.id]=t
this._storePersistData()
return this._sendEvent(t)},_sendEvent:function(t){var e=$.Deferred()
window.mixpanel.push(["track",t.name,t.parameters,_(function(r,n){if(r===1||r.status===1){delete this.persistData.events[t.id]
this._storePersistData()
KAConsole.log("Successfully sent event "+t.id)
e.resolve()}else{KAConsole.log("Failed to send event "+t.id,r.error)
e.reject()}}).bind(this)])
return e.promise()},_storePersistData:function(){if(window.sessionStorage){this.persistData.timestamp=getNow()
var t=JSON.stringify(this.persistData)
sessionStorage.setItem("ka_analytics",t)}},setTrackingProperty:function(t,e){if(!window.mixpanelEnabled){return}this.persistData.trackingProperties[t]=e
this._storePersistData()},getTrackingProperty:function(t){return this.persistData.trackingProperties[t]}}
var Analytics={trackInitialPageLoad:function(t){if(!window.mixpanelEnabled){return}analyticsStore.loadAndSendPersistData()
$(window).unload(function(){Analytics._trackActivityEnd(getNow())})
$("body").on("click","a",function(t){var e=$(this).attr("data-tag")
if(e){var r=$(this).attr("href")
Analytics.trackSingleEvent("Link Click",{"Link Tag":e,Href:r})}})
var e=diffMS(t,getNow())
var r=document.referrer.split("/")[2]
var n=/^([0-9a-z-]+\.)*khanacademy\.org$/
var a=n.test(r)
var i=!a
this.trackPageView({"Load Time (ms)":e,"Loading Type":"Server-side","Is Referrer KA":a},i)
_.each(eventQueue,function(t){this.trackSingleEvent(t.name,t.parameters)},this)
setTimeout(function(){Analytics._trackActivityEnd(getNow())
currentPath=null},4*60*60*1e3)},trackPageView:function(t,e){if(!window.mixpanelEnabled){return}var r=getNow()
if(e){analyticsStore.setTrackingProperty("Session Start",r)
analyticsStore.setTrackingProperty("Session Pages",1)}else{var n=analyticsStore.getTrackingProperty("Session Pages")
if(n){analyticsStore.setTrackingProperty("Session Pages",n+1)}}currentPath=window.location.pathname
this.trackActivityBegin("Page View",t)},handleRouterNavigation:function(){if(!window.mixpanelEnabled){return}_gaq.push(["_trackPageview",window.location.pathname])
if(window.VisitTracking){VisitTracking.trackVisit()}if(!currentPath){return}if(window.location.pathname!==currentPath){Analytics.trackPageView({"Loading Type":"Client-side"})}},trackActivityBegin:function(t,e){if(!window.mixpanelEnabled||!currentPath){return null}var r=getNow()
this._trackActivityEnd(r)
e._startTime=r
_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
currentTrackingActivity={id:t+r,name:t,parameters:e}
KAConsole.log("Started tracking activity "+(t+r))
return currentTrackingActivity},trackActivityEnd:function(t){if(!window.mixpanelEnabled){return}if(t===currentTrackingActivity){this._trackActivityEnd(getNow())
this.trackPageView({})}},_trackActivityEnd:function(t){if(!currentTrackingActivity){return}var e=currentTrackingActivity
var r=diffS(e.parameters._startTime,t)
_.extend(e.parameters,{"Duration (s)":r})
delete e.parameters._startTime
var n=analyticsStore.getTrackingProperty("Session Start")
if(n){var a=diffS(n,t)
var i=analyticsStore.getTrackingProperty("Session Pages")
_.extend(e.parameters,{"Session Time (s)":a,"Session Page Number":i})}KAConsole.log("Stopped tracking activity "+e.name+" after "+r+" sec.")
analyticsStore.addEvent(e)
currentTrackingActivity=null},trackSingleEvent:function(t,e){if(!window.mixpanelEnabled){return $.when()}e=e||{}
if(!currentPath){eventQueue.push({name:t,parameters:e})
return $.when()}_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
var r=getNow()
var n={id:t+r,name:t,parameters:e}
KAConsole.log("Tracking single event "+(t+r))
return analyticsStore.addEvent(n)},reportTiming:function(t,e){if(!window.mixpanelEnabled||!window.performance||!window.performance.timing){return}var r=window.performance.timing
var n=r.navigationStart
var a=r.redirectEnd-r.redirectStart
var i=r.domainLookupEnd-r.domainLookupStart
var s=r.connectEnd-r.connectStart
var o=r.responseStart-r.requestStart
var c=r.responseEnd-r.responseStart
var d=r.domContentLoadedEventEnd-r.responseEnd
var u=r.domContentLoadedEventEnd-n
var l={}
var v={"stats.time.client.redirect_ms":a,"stats.time.client.dns_ms":i,"stats.time.client.connect_ms":s,"stats.time.client.request_ms":o,"stats.time.client.response_ms":c,"stats.time.client.client_ms":d,"stats.time.client.start_to_content_loaded_ms":u}
$.post("/api/v1/elog",_.extend(l,v,{_request_id:t,_graphite_key_prefix:e,_graphite_keys:_.keys(v).join()}))}}
module.exports=Analytics
});
KAdefine("javascript/scratchpads-exec-package/jquery.tipbar.js", function(require, requireWithVars, module, exports) {
$(document).delegate(".tipbar .tipnav a","click",function(){if(!$(this).hasClass("ui-state-disabled")){var t=$("#output"),i=t.data("tipData")
i.pos+=$(this).hasClass("next")?1:-1
t.showTip()}postParent({focus:true})
return false})
$(document).delegate(".tipbar.error .text-wrap a","click",function(){var t=$("#output"),i=t.data("tipData"),a=i.Error[i.pos]
postParent({cursor:a})
return false})
$.fn.showTip=function(t,i,a){var s=this.data("tipData")
if(!s){s={pos:0}
this.data("tipData",s)
this.append($("#tipbar-tmpl").html())}t=t||s.cur
if(i){s.pos=0
s[t]=i
s.callback=a}s.cur=t
i=i||s[t]
var e=s.pos,n=this.find(".tipbar").attr("class","tipbar "+t.toLowerCase()).find(".current-pos").text(i.length>1?e+1+"/"+i.length:"").end().find(".message").html(i[e].text||i[e]||"").end().find("a.prev").toggleClass("ui-state-disabled",e===0).end().find("a.next").toggleClass("ui-state-disabled",e+1===i.length).end()
$(".show-me").toggle(i[e].row!==-1)
n.find(".tipnav").toggle(i.length>1)
if(!n.is(":visible")){n.css({top:400,opacity:.1}).show().animate({top:this.find(".toolbar").is(":visible")?33:100,opacity:1},300)}if(s.callback){s.callback(i[e])}return this}
$.fn.hideTip=function(t){var i=this.data("tipData")
if(i&&(!t||t===i.cur)){this.find(".tipbar").animate({top:400,opacity:.1},300,function(){$(this).hide()})}return this}
$.fn.toggleTip=function(t,i,a){var s=this.data("tipData")
if(!s||!this.find(".tipbar").is(":visible")||s.cur!==t){this.showTip(t,i,a)}else{this.hideTip()}return this}
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
KAdefine("javascript/scratchpads-exec-package/images.js", function(require, requireWithVars, module, exports) {
window.OutputImages=[{groupName:"avatars",images:"leaf-blue leaf-green leaf-grey leaf-orange leaf-red leaf-yellow leafers-seed leafers-seedling leafers-sapling leafers-tree leafers-ultimate marcimus mr-pants mr-pink piceratops-seed piceratops-seedling piceratops-sapling piceratops-tree piceratops-ultimate old-spice-man orange-juice-squid purple-pi questionmark robot_female_1 robot_female_2 robot_female_3 robot_male_1 robot_male_2 robot_male_3 spunky-sam".split(" ")},{groupName:"creatures",images:"Hopper-Happy Hopper-Cool Hopper-Jumping OhNoes BabyWinston Winston".split(" ")},{groupName:"cute",images:"Blank BrownBlock CharacterBoy CharacterCatGirl CharacterHornGirl CharacterPinkGirl CharacterPrincessGirl ChestClosed ChestLid ChestOpen DirtBlock DoorTallClosed DoorTallOpen EnemyBug GemBlue GemGreen GemOrange GrassBlock Heart Key PlainBlock RampEast RampNorth RampSouth RampWest Rock RoofEast RoofNorth RoofNorthEast RoofNorthWest RoofSouth RoofSouthEast RoofSouthWest RoofWest Selector ShadowEast ShadowNorth ShadowNorthEast ShadowNorthWest ShadowSideWest ShadowSouth ShadowSouthEast ShadowSouthWest ShadowWest Star StoneBlock StoneBlockTall TreeShort TreeTall TreeUgly WallBlock WallBlockTall WaterBlock WindowTall WoodBlock".split(" "),cite:$._("'Planet Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/05/dancs-miraculously-flexible-game.html"},{groupName:"space",images:"background beetleship collisioncircle girl1 girl2 girl3 girl4 girl5 healthheart minus octopus planet plus rocketship star 0 1 2 3 4 5 6 7 8 9".split(" "),cite:$._("'Space Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/03/spacecute-prototyping-challenge.html"}]
});
KAdefine("javascript/scratchpads-exec-package/output.js", function(require, requireWithVars, module, exports) {
var $=require("../../third_party/javascript-khansrc/jquery/jquery.js")
var Analytics=require("../shared-package/analytics.js")
var BabyHint=require("./babyhint.js")
var Esprima=require("../../third_party/javascript-khansrc/structuredjs/external/esprima.js")
var Processing=require("../../third_party/javascript-khansrc/processing-js/processing.js")
var ScratchpadConfig=require("../scratchpads-package/scratchpad-config.js")
var _=require("../../third_party/javascript-khansrc/underscore/underscore.js")
var Structured=require("../../third_party/javascript-khansrc/structuredjs/structured.js")
var OutputTester=require("./output-tester.js")
var JSHINT=require("./jshint.js")
require("./jquery.tipbar.js");(function(){if(window!==window.top){window.alert=$.noop
window.open=$.noop
window.showModalDialog=$.noop
window.confirm=$.noop
window.prompt=$.noop
window.eval=$.noop}var t
var e
$(window).bind("message",function(a){var o=a.originalEvent
var s
t=o.source
e=o.origin
r()
try{s=JSON.parse(o.data)}catch(u){return}if(s.validate!=null){n.initTests(s.validate)}if(s.settings!=null){n.settings=s.settings}if(s.code!=null){ScratchpadConfig.switchVersion(s.version)
n.runCode(s.code)}if(s.restart){n.restart()}if(s.screenshot){var i=document.createElement("canvas")
var c=s.screenshotSize||200
i.width=c
i.height=c
i.getContext("2d").drawImage($("#output-canvas")[0],0,0,c,c)
t.postMessage(i.toDataURL("image/png"),e)}if(s.recording!=null){n.recording=s.recording}if(s.action){if(CanvasOutput.handlers[s.name]){CanvasOutput.handlers[s.name](s.action)}}if(s.fastNFurious){n.fastNFurious=s.fastNFurious}if(s.documentation){BabyHint.initDocumentation(s.documentation)}})
window.postParent=function(r){if(t){t.postMessage(JSON.stringify(r),e)}}
var r=_.once(function(){postParent({active:true})})
var n={icons:{pass:"check",fail:"none",error:"alert",info:"info"},recording:false,init:function(t){this.id=t||"output"
this.$elem=$("#"+t)
this.validate=null
this.errors=[]
this.context={}
this.loaded=false
ScratchpadConfig.runCurVersion("jshint")
n.setOutput(CanvasOutput)
BabyHint.init()},fastNFurious:false,initTests:function(t){if(n.validate===t){return}n.validate=t
var e=n.exec(t,OutputTester.testContext)
if(e&&e.message){$("#test-errors").text(e.message).show()}else{$("#test-errors").hide()}},setOutput:function(t){if(n.output){n.output.kill()}n.output=t.init()},registerOutput:function(t){if(!n.outputs){n.outputs=[]}n.outputs.push(t)
$.extend(n.testContext,t.testContext)},getUserCode:function(){return n.currentCode||""},exposedProps:function(){return n.output?n.output.props:{}},bannedProps:function(){return n.output?n.output.bannedProps:{}},propListString:function(t){var e=n.bannedProps()
var r=[]
for(var a in t){if(!e[a]){r.push(a+":"+t[a])}}return r.join(",")},runCode:function(t,e){n.currentCode=t
var r="/*jshint "+n.propListString(n.JSHint)+" */"+"/*global "+n.propListString(n.exposedProps())+"*/\n"+t
var a=function(r,a){n.hintDone(t,r,a,e)}
if(!t){a(null,[])}else{n.hintWorker.exec(r,a)}},hintDone:function(t,e,r,a){var o=n.exposedProps()
n.globals={}
if(e&&e.globals){for(var s=0,u=e.globals.length;s<u;s++){var i=e.globals[s]
if(!o[i]&&!(i in n.context)){n.context[i]=undefined}n.globals[i]=true}}n.babyErrors=BabyHint.babyErrors(t,r)
n.errors=[]
n.mergeErrors(r,n.babyErrors)
var c=function(){if(!n.loaded){postParent({loaded:true})
n.loaded=true}if(a){a(n.errors)
return}postParent({results:{code:t,errors:n.errors,tests:n.testResults||[]}})
n.toggleErrors()}
n.globals={}
if(e&&e.globals){for(var s=0,u=e.globals.length;s<u;s++){var i=e.globals[s]
if(!o[i]&&!(i in n.context)){n.context[i]=undefined}n.globals[i]=true}}var p=function(){if(n.errors.length===0){if(n.output&&n.output.runCode){if(n.fastNFurious){n.output.runCode(t,n.context,c)}else{try{n.output.runCode(t,n.context,c)}catch(e){n.handleError(e)
c()}}return}else{n.exec(t,n.context)}}c()}
n.testWorker.exec(t,n.validate,n.errors,p)},mergeErrors:function(t,e){var r=[]
var a=[]
_.each(t,function(t){if(t&&t.line&&t.character&&t.reason&&!/unable to continue/i.test(t.reason)){r.push(t.line-2)
a.push({row:t.line-2,column:t.character-1,text:_.compose(n.prettify,n.clean)(t.reason),type:"error",lint:t,source:"jshint"})}})
_.each(e,function(t){if(_.include(r,t.row)||t.breaksCode){n.errors.push({row:t.row,column:t.column,text:_.compose(n.prettify,n.clean)(t.text),type:"error",source:t.source})}})
n.errors=n.errors.concat(a)},toggleErrors:function(){var t=!!n.errors.length
$("#show-errors").toggleClass("ui-state-disabled",!t)
$("#output .error-overlay").toggle(t)
n.toggle(!t)
if(t){n.errors=n.errors.sort(function(t,e){return t.row-e.row})
if(n.errorDelay){clearTimeout(n.errorDelay)}n.errorDelay=setTimeout(function(){if(n.errors.length>0){$("#output").showTip("Error",n.errors)}},1500)}else{$("#output").hideTip("Error")}},trackFunctions:function(){n.tracking={}
n.fnCalls=[]
_.each(n.context,function(t,e){if(typeof t==="function"){n.tracking[e]=t
n.context[e]=function(){var t=n.tracking[e].apply(n.context,arguments)
n.fnCalls.push({name:e,args:Array.prototype.slice.call(arguments),retVal:t})
return t}}})},endTrackFunctions:function(){_.each(n.tracking,function(t,e){n.context[e]=t})
n.tracking={}},toggle:function(t){if(n.output&&n.output.toggle){n.output.toggle(t)}},start:function(){if(n.output&&n.output.start){n.output.start()}},stop:function(){if(n.output&&n.output.stop){n.output.stop()}},restart:function(){if(n.output&&n.output.restart){n.output.restart()}},clear:function(){if(n.output&&n.output.clear){n.output.clear()}},handleError:function(t){if(n.testing){var e=$._("Error: %(message)s",{message:t.message})
$("#test-errors").text(e).show()
n.testContext.assert(false,e,$._("A critical problem occurred in your program "+"making it unable to run."))
return}var r=t.lineno?t.lineno-2:-1
_.each(n.babyErrors,function(t){if(t.row+1===r){n.errors.push({row:t.row,column:t.column,text:_.compose(n.prettify,n.clean)(t.text),type:"error"})}})
n.errors.push({row:r,column:0,text:n.clean(t.message),type:"error"})
n.toggleErrors()},exec:function(t){if(!t){return true}var e=Array.prototype.slice.call(arguments,1)
function r(){var r=function(){return"__env__"+Math.floor(Math.random()*1e9)}
if(n.output&&n.output.compile){t=n.output.compile(t)}var a=r()
for(var o=0;o<e.length;o++){if(e[o]){t="with("+a+"["+o+"]){\n"+t+"\n}"}}var s=$._("This program uses capabilities we've turned off for security reasons. Khan Academy prohibits showing external images, playing sounds, or displaying pop-ups.")
var u="{ get externals() { throw { message: "+JSON.stringify(s)+" } } }"
t="var "+a+" = arguments;\n(function(){\n"+t+"\n}).apply("+u+");"
new Function(t).apply(n.context,e)
return true}if(n.fastNFurious){return r()}else{try{return r()}catch(a){n.handleError(a)
return a}}},stringify:function(t){if(typeof t==="function"){return t.toString()}else if(t&&t.__id){return t.__id()}else if(t&&Object.prototype.toString.call(t)==="[object Array]"){return n.stringifyArray(t)}else if(typeof t==="undefined"){return"undefined"}else{return JSON.stringify(t,function(t,e){if(e&&(e.id!==undefined&&e.id==="output-canvas"||typeof CanvasRenderingContext2D!=="undefined"&&e instanceof CanvasRenderingContext2D)){return undefined}return e})}},stringifyArray:function(t){var e=[]
for(var r=0,a=t.length;r<a;r++){e.push(n.stringify(t[r]))}return e.join(", ")},applyInstance:function(t,e){try{var r=(/^function\s*(\w+)/.exec(t)||[])[1]
if(r&&window[r]===t){return t}}catch(a){}if(!t.__name&&e){t.__name=e}return function(){var e=arguments
function r(){t.apply(this,e)}r.prototype=t.prototype
var a=new r
a.constructor=t
a.__id=function(){return"new "+t.__name+"("+n.stringifyArray(e)+")"}
if(n.instances){n.instances.push(a)}return a}}}
window.Output=n
module.exports=n
window.CanvasOutput={trackedMouseEvents:["move","over","out","down","up"],bannedProps:{externals:true},init:function(){this.$elem=$("#output-canvas")
if(this.$elem.length===0){this.$elem=$("<canvas>").attr("id","output-canvas").appendTo("body")}this.$elem.show()
CanvasOutput.bind()
CanvasOutput.reseedRandom()
CanvasOutput.lastGrab=null
CanvasOutput.build(this.$elem[0])
if(!CanvasOutput.props){var t=CanvasOutput.props={},e=CanvasOutput.safeCalls={}
for(var r in n.context){if(r.indexOf("__")<0){var a=n.context[r],o=typeof a==="function"
t[r]=!(/^[A-Z]/.test(r)||r==="height"||r==="width"||r==="key"||o&&r.indexOf("key")<0)
if(o){try{var s=String(a)
if(/native code/.test(s)||/return /.test(s)&&!/p\./.test(s)&&!/new P/.test(s)){e[r]=true}}catch(u){}}}}e.PVector=true
t.draw=true}return this},bind:function(){var t=this.$elem.offset()
jQuery.each(CanvasOutput.trackedMouseEvents,function(e,r){var a="mouse"+r
CanvasOutput.$elem.bind(a,function(e){if(n.recording){var a={}
a[r]={x:e.pageX-t.left,y:e.pageY-t.top}
postParent({log:a})}})
CanvasOutput.handlers[r]=function(e){var n=e[r]
var o=n.x+t.left
var s=n.y+t.top
var u=o-$(window).scrollLeft()
var i=s-$(window).scrollTop()
var c=document.createEvent("MouseEvents")
c.initMouseEvent(a,true,true,window,0,0,0,u,i,false,false,false,false,0,document.documentElement)
CanvasOutput.$elem[0].dispatchEvent(c)}})
$(window).on("resize",function(){var t=$(window)
var e=t.width()
var r=t.height()
if(e!==CanvasOutput.canvas.width||r!==CanvasOutput.canvas.height){$("#output-canvas").width(e).height(r)
CanvasOutput.canvas.size(e,r)
n.restart()}})},handlers:{},build:function(t){CanvasOutput.canvas=n.context=new Processing(t,function(t){t.draw=CanvasOutput.DUMMY})
$.extend(CanvasOutput.canvas,CanvasOutput.processing)
ScratchpadConfig.runCurVersion("processing",CanvasOutput.canvas)
CanvasOutput.clear()
$(window).resize()},imageCache:{},imagesCached:false,imageCacheStarted:false,imageHolder:null,cacheImages:function(t,e){var r=t.match(/getImage\s*\(.*?\)/g)
var n=0
if(!CanvasOutput.imageHolder){CanvasOutput.imageHolder=$("<div>").css({height:0,width:0,overflow:"hidden",position:"absolute"}).appendTo("body")}var a=function(){n+=1
if(n===r.length){e()}}
_.each(r,function(t){var e=/"([A-Za-z0-9_\/-]*?)"/.exec(t)
if(CanvasOutput.imageCache[t]||!e){return a()}t=e[1]
var r="/stylesheets/scratchpads-exec-package/images/"+t+".png"
var n=document.createElement("img")
n.onload=a
n.src=r
CanvasOutput.imageHolder.append(n)
CanvasOutput.imageCache[t]=n})},processing:{Object:window.Object,RegExp:window.RegExp,Math:window.Math,Array:window.Array,String:window.String,getImage:function(t){var e=CanvasOutput.imageCache[t]
if(!e){return n.handleError({message:$._("Image '%(file)s' was not found.",{file:t})})}var r=new CanvasOutput.canvas.PImage(e)
r.__id=function(){return"getImage('"+t+"')"}
return r},loadImage:function(t){n.handleError({message:"Use getImage instead of loadImage."})},requestImage:function(t){n.handleError({message:"Use getImage instead of requestImage."})},link:function(){n.handleError({message:$._("link() method is disabled.")})},debug:function(){console.log.apply(console,arguments)},Program:{settings:function(){return n.settings||{}},restart:function(){n.restart()},runTests:function(){n.test()
return n.testResults},runTest:function(t,e){if(arguments.length===1){e=t
t=""}var r=!!e()
postParent({results:{code:n.currentCode,errors:[],tests:[{name:t,state:r?"pass":"fail",results:[]}]},pass:r})}}},DUMMY:function(){},preTest:function(){CanvasOutput.oldContext=n.context
if(CanvasOutput.testingContext){CanvasOutput.canvas=n.context=CanvasOutput.testingContext}else{CanvasOutput.testCanvas=document.createElement("canvas")
CanvasOutput.build(CanvasOutput.testCanvas)
CanvasOutput.testingContext=n.context}},postTest:function(){CanvasOutput.canvas=n.context=CanvasOutput.oldContext
return CanvasOutput.testCanvas},runTest:function(t,e,r){},runCode:function(t,e,r){if(n.globals.getImage){CanvasOutput.cacheImages(t,a)}else{a()}function a(){if(window.Worker){var e={}
_.each(n.globals,function(t,r){var a=n.context[r]
e[r]=typeof a==="function"||r==="Math"?"__STUBBED_FUNCTION__":typeof a!=="object"||$.isPlainObject(a)?a:{}})
n.worker.exec(t,e,function(t){if(n.fastNFurious){CanvasOutput.injectCode(t,r)}else{try{CanvasOutput.injectCode(t,r)}catch(e){n.handleError(e)
r()}}})}else{CanvasOutput.injectCode(t,r)}}},injectCode:function(t,e){var r={},a=[],o=false,s={},u={},i=CanvasOutput.props,c=""
CanvasOutput.grabObj={}
n.instances=[]
t=t&&t.replace(/\bnew[\s\n]+([A-Z]{1,2}[a-z0-9_]+)([\s\n]*\()/g,"Output.applyInstance($1,'$1')$2")
var p=n.globals.draw||CanvasOutput.lastGrab&&CanvasOutput.lastGrab.draw
if(p){_.each(n.globals,function(t,e){var o=n.context[e]
r[e]=typeof o==="function"&&!CanvasOutput.safeCalls[e]?function(){a.push([e,arguments])
return 0}:o})
if(!n.exec(t,r)){return}_.each(r,function(t,e){if(typeof t==="function"){t.__name=e}})
for(var l=0,f=n.instances.length;l<f;l++){u[n.instances[l].constructor.__name]=true}if(n.oldInstances&&n.stringifyArray(n.oldInstances)!==n.stringifyArray(n.instances)){o=true}n.oldInstances=n.instances
n.instances=null
for(var l=0;l<a.length;l++){var d=Array.prototype.slice.call(a[l][1])
c+=a[l][0]+"("+n.stringifyArray(d)+");\n"}_.each(r,function(t,e){try{r[e]=n.stringify(r[e])
if(CanvasOutput.lastGrab&&i[e]!==false&&(!(e in CanvasOutput.lastGrab)||r[e]!==CanvasOutput.lastGrab[e])){if(typeof t==="function"){if(u[e]){o=true}s[e]=true
c+="var "+e+" = "+r[e]+";\n"
c+=e+".__name = '"+e+"';\n"}else{n.context[e]=t}}if(typeof t==="function"&&i[e]!==false){CanvasOutput.objectExtract(e,t)
CanvasOutput.objectExtract(e,t,"prototype")}}catch(a){CanvasOutput.objectExtract(e,t)}})
_.each(CanvasOutput.grabObj,function(t,e){var r=/^[^.[]*/.exec(e)[0]
if(!CanvasOutput.lastGrabObj||CanvasOutput.lastGrabObj[e]!==t||s[r]){c+=e+" = "+t+";\n"}})
for(var v in CanvasOutput.lastGrabObj){if(!(v in CanvasOutput.grabObj)){c+="delete "+v+";\n"}}for(var g in CanvasOutput.lastGrab){if(!(g in r)&&(!(g in CanvasOutput.props)||g==="draw")){c+="delete Output.context."+g+";\n"
if(g==="draw"){CanvasOutput.clear()}}}}n.context.resetMatrix()
CanvasOutput.restoreRandomSeed()
if(CanvasOutput.lastGrab){if(!n.globals.background&&CanvasOutput.lastGrab.background){CanvasOutput.resetBackground()}if(!n.globals.stroke&&CanvasOutput.lastGrab.stroke){CanvasOutput.resetStroke()}if(!n.globals.strokeWeight&&CanvasOutput.lastGrab.strokeWeight){CanvasOutput.resetStrokeWeight()}if(!n.globals.fill&&CanvasOutput.lastGrab.fill){CanvasOutput.resetFill()}if(!n.globals.textSize&&CanvasOutput.lastGrab.textSize){CanvasOutput.resetTextSize()}}if(!p||n.context.draw===CanvasOutput.DUMMY||!CanvasOutput.lastGrab||o){CanvasOutput.clear()
if(n.globals.draw){t+="\ndraw();"}n.exec(t,n.context)
_.each(n.globals,function(t,e){if(typeof t==="function"){t.__name=e}})}else if(c){if(n.globals.draw){c+="\ndraw();"}n.exec(c,n.context)}if(!n.context.draw){n.context.draw=CanvasOutput.DUMMY}if(p){CanvasOutput.lastGrab=r
CanvasOutput.lastGrabObj=CanvasOutput.grabObj}if(e){try{e()}catch(h){}}},objectExtract:function(t,e,r){if(!n.context[t]){n.context[t]=$.isArray(e)?[]:{}}if(r){e=e[r]}for(var a in e){if(e.hasOwnProperty(a)&&a.indexOf("__")<0){if(typeof e[a]==="function"){CanvasOutput.grabObj[t+(r?"."+r:"")+"['"+a+"']"]=n.stringify(e[a])}else{var o=n.context[t]
if(r){o=o[r]}o[a]=e[a]}}}},restart:function(){CanvasOutput.lastGrab=null
CanvasOutput.lastGrabObj=null
CanvasOutput.reseedRandom()
CanvasOutput.canvas.frameCount=0
n.runCode(n.getUserCode())},testContext:{testCanvas:function(t,e){n.testContext.test(t,e,CanvasOutput)}},toggle:function(t){if(t){CanvasOutput.start()}else{CanvasOutput.stop()}},stop:function(){CanvasOutput.canvas.noLoop()},start:function(){CanvasOutput.canvas.loop()},clear:function(){CanvasOutput.resetStrokeWeight()
CanvasOutput.resetStroke()
CanvasOutput.resetBackground()
CanvasOutput.resetFill()
CanvasOutput.resetTextSize()},seed:null,reseedRandom:function(){CanvasOutput.seed=Math.floor(Math.random()*4294967296)},restoreRandomSeed:function(){CanvasOutput.canvas.randomSeed(CanvasOutput.seed)},resetStroke:function(){if(n.dark){CanvasOutput.canvas.stroke(255,255,255)}else{CanvasOutput.canvas.stroke(0,0,0)}},resetStrokeWeight:function(){CanvasOutput.canvas.strokeWeight(1)},resetBackground:function(){if(n.dark){CanvasOutput.canvas.background(15,15,15)}else{CanvasOutput.canvas.background(255)}},resetFill:function(){if(n.dark){CanvasOutput.canvas.fill(15,15,15)}else{CanvasOutput.canvas.fill(255,255,255)}},resetTextSize:function(){CanvasOutput.canvas.textSize(12)},kill:function(){CanvasOutput.canvas.exit()
CanvasOutput.$elem.hide()}}
n.registerOutput(CanvasOutput)
$(ScratchpadConfig).bind("versionSwitched",function(t,e){ScratchpadConfig.runVersion(e,"processing",CanvasOutput.canvas)})
n.prettify=function(t){t=t.split('"')
var e=""
for(var r=0;r<t.length;r++){if(r%2===0){e+='<span class="text">'+t[r]+"</span>"}else{e+='<span class="quote">'+t[r]+"</span>"}}return e}
n.clean=function(t){return String(t).replace(/</g,"&lt;")}
var a=function(){var t="jshint.js"
var e=RegExp("genfiles/javascript/([^/]*)/scratchpads-exec-package")
var r=document.getElementsByTagName("script")
for(var n=0;n<r.length;n++){if(r[n].src.indexOf(t)>=0){return r[n].src.replace(t,"").replace(/\?.*$/,"")}var a=e.exec(r[n].src)
if(a&&a[1]!=="en"){return"/genfiles/translations/"+a[1]+"/javascript/scratchpads-exec-package/"}}return"/javascript/scratchpads-exec-package/"}
var o=function(t,e){this.pool=[]
this.curID=0
this.url=a()+t+"?cachebust="+(new Date).toDateString()
this.onExec=e||function(){}}
o.prototype.getWorkerFromPool=function(){var t=this.pool.shift()
if(!t){t=new window.Worker(this.url)}this.curID+=1
t.id=this.curID
return t}
o.prototype.isCurrentWorker=function(t){return this.curID===t.id}
o.prototype.addWorkerToPool=function(t){this.pool.push(t)}
o.prototype.exec=function(){this.onExec.apply(this,arguments)}
n.testWorker=new o("test-worker.js",function(t,e,r,a){var o=this
n.testing=true
var s=function(t){n.testResults=t.testResults
n.errors.concat(t.errors)
n.testing=false}
if(!window.Worker||r.length>0){OutputTester.test(t,e,r)
s(OutputTester)
a()
return}var u=this.getWorkerFromPool()
u.onmessage=function(t){if(t.data.type==="test"){if(o.isCurrentWorker(u)){var e=t.data.message
s(e)
a()}o.addWorkerToPool(u)}}
u.postMessage({code:t,validate:e,errors:r})})
n.hintWorker=new o("jshint-worker.js",function(t,e){if(!window.Worker){JSHINT(t)
e(JSHINT.data(),JSHINT.errors)
return}var r=this
var n=this.getWorkerFromPool()
n.onmessage=function(t){if(t.data.type==="jshint"){if(r.isCurrentWorker(n)){var a=t.data.message
e(a.hintData,a.hintErrors)}r.addWorkerToPool(n)}}
n.postMessage({code:t})})
n.worker={timeout:null,running:false,init:function(){var t=n.worker.worker=new window.Worker(a()+"worker.js?cachebust="+(new Date).toDateString())
t.onmessage=function(t){if(t.data.execStarted){n.worker.timeout=window.setTimeout(function(){n.worker.stop()
n.worker.done({message:$._("The program is taking too long to run. Perhaps "+"you have a mistake in your code?")})},500)}else if(t.data.type==="end"){n.worker.done()}else if(t.data.type==="error"){n.worker.done({message:t.data.message})}}
t.onerror=function(t){t.preventDefault()
n.worker.done(t)}},exec:function(t,e,r){if(n.worker.running){n.worker.stop()}if(!n.worker.worker){n.worker.init()}n.worker.done=function(e){n.worker.running=false
n.worker.clearTimeout()
if(e){n.handleError(e)
r()}else{r(t)}}
try{n.worker.worker.postMessage({code:t,context:e})
n.worker.running=true}catch(a){n.worker.done()}},clearTimeout:function(){if(n.worker.timeout!==null){window.clearTimeout(n.worker.timeout)
n.worker.timeout=null}},stop:function(){n.worker.clearTimeout()
if(n.worker.worker){n.worker.worker.terminate()
n.worker.worker=null
return true}return false}}
if(window!==window.top&&Object.freeze){}})()
});
KAdefine("javascript/scratchpads-exec-package/output-tester.js", function(require, requireWithVars, module, exports) {
(function(){var t={tests:[],test:function(n,e,r){t.userCode=n
t.validate=e
t.tests=[]
t.exec(t.validate,t.testContext)
t.testResults=[]
t.errors=r||[]
t.curTask=null
t.curTest=null
for(var s=0;s<t.tests.length;s++){t.testResults.push(t.runTest(n||"",t.tests[s],s))}},runTest:function(n,e,r){var s={name:e.name,state:"pass",results:[]}
t.curTest=s
if(t.validate&&e.type==="static"){e.fn()}t.curTest=null
return s},exec:function(t){if(!t){return true}var n=Array.prototype.slice.call(arguments,1)
function e(){for(var e=0;e<n.length;e++){if(n[e]){t="with(arguments["+e+"]){\n"+t+"\n}"}}new Function(t).apply({},n)
return true}return e()},testContext:{test:function(n,e,r){if(!e){e=n
n=$._("Test Case")}t.tests.push({name:n,type:r||"default",fn:function(){try{return e.apply(this,arguments)}catch(t){console.warn(t)}}})},staticTest:function(n,e){t.testContext.test(n,e,"static")},log:function(n,e,r,s,a){s=s||"info"
var u={type:s,msg:n,state:e,expected:r,meta:a||{}}
if(t.curTest){if(e!=="pass"){t.curTest.state=e}t.curTest.results.push(u)}if(t.curTask){if(e!=="pass"){t.curTask.state=e}t.curTask.results.push(u)}return u},task:function(n,e){t.curTask=t.testContext.log(n,"pass",e,"task")
t.curTask.results=[]},endTask:function(){t.curTask=null},assert:function(n,e,r,s){n=!!n
t.testContext.log(e,n?"pass":"fail",r,"assertion",s)
return n},isEqual:function(n,e,r){return t.testContext.assert(n===e,r,[n,e])},hasFnCall:function(n,e){for(var r=0,s=t.fnCalls.length;r<s;r++){var a=t.testContext.checkFn(t.fnCalls[r],n,e)
if(a===true){return}}t.testContext.assert(false,$._("Expected function call to %(name)s was not made.",{name:n}))},orderedFnCalls:function(n){var e=0
for(var r=0,s=t.fnCalls.length;r<s;r++){var a=t.testContext.checkFn(t.fnCalls[r],n[e][0],n[e][1])
if(a===true){e+=1
if(e===n.length){return}}}t.testContext.assert(false,$._("Expected function call to %(name)s was not made.",{name:n[e][0]}))},checkFn:function(n,e,r){if(n.name!==e){return}var s=true
if(typeof r==="object"){if(r.length!==n.args.length){s=false}else{for(var a=0;a<r.length;a++){if(r[a]!==null&&r[a]!==n.args[a]){s=false}}}}else if(typeof r==="function"){s=r(n)}if(s){t.testContext.assert(true,$._("Correct function call made to %(name)s.",{name:e}))}return s},pass:function(t){return{success:true,message:t}},fail:function(t){return{success:false,message:t}},anyPass:function(){return _.find(arguments,this.passes)||arguments[0]||this.fail()},allPass:function(){return _.find(arguments,this.fails)||arguments[0]||this.pass()},firstMatchingPattern:function(t){return _.find(t,_.bind(function(t){return this.matches(this.structure(t))},this))},passes:function(t){return t.success},fails:function(t){return!t.success},match:function(n){if(t.errors.length){return{success:false,message:$._("Syntax error!")}}if(n&&_.isUndefined(n.pattern)){n={pattern:n}}if(!n||!n.pattern){return{success:false,message:""}}try{var e=n.constraint
var r
if(e){r={}
r[e.variables.join(", ")]=e.fn}var s=Structured.match(t.userCode,n.pattern,{varCallbacks:r})
return{success:s,message:r&&r.failure}}catch(a){console.warn(a)
return{success:true,message:$._("Hm, we're having some trouble "+"verifying your answer for this step, so we'll give you "+"the benefit of the doubt as we work to fix it. "+"Please click 'Report a problem' to notify us.")}}},matches:function(t){return this.match(t).success},assertMatch:function(n,e,r,s,a){if(a){var u=_.any(t.errors,function(t){return t.lint})
if(u){_.each(a,function(n){var e=t.userCode.search(n.re)
var r=-1,s=-1,a
if(e>-1){a=n.msg
var u=t.userCode.split("\n")
var i=0
_.each(u,function(t,n){if(r===-1&&e<i+t.length){r=n
s=e-i}i+=t.length})
t.errors.splice(0,1,{text:a,row:r,col:s,type:"error"})}})}}var i
var o
if(n.success){i=n.message}else{o=n.message}t.testContext.assert(n.success,e,"",{structure:_.isString(r)?"function() {"+r+"}":r.toString(),alternateMessage:i,alsoMessage:o,image:s})},structure:function(t,n){return{pattern:t,constraint:n}},constraint:function(t,n){return{variables:t,fn:n}},_isVarName:function(t){return _.isString(t)&&t.length>0&&t[0]==="$"},_assertVarName:function(t){if(!this._isVarName(t)){throw new Error("Expected "+t+" to be a valid variable name.")}},unaryOp:function(t,n){this._assertVarName(t)
return this.constraint([t],function(t){return!!(t&&!_.isUndefined(t.value)&&n(t.value))})},isLiteral:function(t){function n(){return true}return this.unaryOp(t,n)},isNumber:function(t){return this.unaryOp(t,_.isNumber)},isIdentifier:function(t){return this.constraint([t],function(t){return!!(t&&t.type&&t.type==="Identifier")})},isBoolean:function(t){return this.unaryOp(t,_.isBoolean)},isString:function(t){return this.unaryOp(t,_.isString)},binaryOp:function(t,n,e){var r=[]
var s
if(this._isVarName(t)){r.push(t)
if(this._isVarName(n)){r.push(n)
s=function(t,n){return!!(t&&n&&!_.isUndefined(t.value)&&!_.isUndefined(n.value)&&e(t.value,n.value))}}else{s=function(t){return!!(t&&!_.isUndefined(t.value)&&e(t.value,n))}}}else if(this._isVarName(n)){r.push(n)
s=function(n){return!!(n&&!_.isUndefined(n.value)&&e(t,n.value))}}else{throw new Error("Expected either "+t+" or "+n+" to be a valid variable name.")}return this.constraint(r,s)},lessThan:function(t,n){return this.binaryOp(t,n,function(t,n){return t<n})},lessThanOrEqual:function(t,n){return this.binaryOp(t,n,function(t,n){return t<=n})},greaterThan:function(t,n){return this.binaryOp(t,n,function(t,n){return t>n})},positive:function(t){return this.unaryOp(t,function(t){return t>0})},negative:function(t){return this.unaryOp(t,function(t){return t<0})},greaterThanOrEqual:function(t,n){return this.binaryOp(t,n,function(t,n){return t>=n})},inRange:function(t,n,e){return this.and(this.greaterThanOrEqual(t,n),this.lessThanOrEqual(t,e))},equal:function(t,n){return this.binaryOp(t,n,function(t,n){return t===n})},notEqual:function(t,n){return this.binaryOp(t,n,function(t,n){return t!==n})},not:function(t){return this.constraint(t.variables,function(){return!t.fn.apply({},arguments)})},_naryShortCircuitingOp:function(t,n){var e=_.union.apply({},_.pluck(n,"variables"))
var r=_.object(_.map(e,function(t,n){return[t,n]}))
return this.constraint(e,function(){var e=arguments
return t(n,function(t){var n=_.map(t.variables,function(t){return e[r[t]]})
return t.fn.apply({},n)})})},and:function(){return this._naryShortCircuitingOp(_.all,arguments)},or:function(){return this._naryShortCircuitingOp(_.any,arguments)}}}
if(typeof module!=="undefined"&&module.exports){module.exports=t}else{window.OutputTester=t}})()
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/shared-package/packageloader.js");
KAdefine.require("./javascript/shared-package/i18n.js");
KAdefine.require("./javascript/scratchpads-exec-package/babyhint.js");
KAdefine.require("./javascript/shared-package/analytics.js");
KAdefine.require("./javascript/scratchpads-exec-package/jquery.tipbar.js");
KAdefine.require("./javascript/scratchpads-package/scratchpad-config.js");
KAdefine.require("./javascript/scratchpads-exec-package/images.js");
KAdefine.require("./javascript/scratchpads-exec-package/output.js");
KAdefine.require("./javascript/scratchpads-exec-package/output-tester.js");
