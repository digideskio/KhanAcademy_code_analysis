KAdefine(javascripttypeahead-packagetypeahead-search-result.handlebars, function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates{}
a[typeahead-package_typeahead-search-result]=module.exports=e(function(e,a,n,s,r){n=ne.helpers
var t=,i,l,o,c,f=this,h=function,p=n.helperMissing,d=void 0,u=this.escapeExpression,v=n.blockHelperMissing
function y(e,a){returnlast}function m(e,a){var s=,r
s+=n            
o=n.translatedKind
r=oe.translatedKind
if(typeof r===h){r=r.call(e,{hash{}})}else if(r===d){r=p.call(e,translatedKind,{hash{}})}s+=u(r)+n        
return s}function g(e,a){returnn            &nbsp;n        }function k(e,a){return'n            i class=icon-bookin        '}function b(e,a){var s=,r,t,i,l
s+=n            
r=progress-icon-subway
t=shared
i={}
o=n.kind
l=oe.kind
i[type]=l
o=n.progressKey
l=oe.progressKey
i[key]=l
o=n.invokePartial
l=oe.invokePartial
c=f.program(10,H,a)
c.hash=i
c.fn=c
c.inverse=f.noop
if(o&&typeof l===h){r=l.call(e,t,r,c)}else{r=v.call(e,l,t,r,c)}if(rr===0){s+=r}s+=n        
return s}function H(e,a){var n=
return n}t+='div class=clearfixn    a class=typeahead-result-kind '
o=n.last
i=oa.last
l=n[if]
c=f.program(1,y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(a,i,c)
if(ii===0){t+=i}t+='n        '
o=n.first
i=oa.first
l=n[if]
c=f.program(3,m,r)
c.hash={}
c.fn=c
c.inverse=f.program(5,g,r)
i=l.call(a,i,c)
if(ii===0){t+=i}t+='n    aa class=typeahead-result typeahead-result-content href='
o=n.href
i=oa.href
if(typeof i===h){i=i.call(a,{hash{}})}else if(i===d){i=p.call(a,href,{hash{}})}t+=u(i)+' tabindex=-1n        '
o=n.isTopic
i=oa.isTopic
l=n[if]
c=f.program(7,k,r)
c.hash={}
c.fn=c
c.inverse=f.program(9,b,r)
i=l.call(a,i,c)
if(ii===0){t+=i}t+='nn        div class=scented-contentn            '
o=n.scentedValueHtml
i=oa.scentedValueHtml
if(typeof i===h){i=i.call(a,{hash{}})}else if(i===d){i=p.call(a,scentedValueHtml,{hash{}})}if(ii===0){t+=i}t+=n        divn    andivn
return t})})()
});
KAdefine(javascripttypeahead-packagetypeahead-search-student.handlebars, function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates{}
e[typeahead-package_typeahead-search-student]=module.exports=a(function(a,e,n,s,l){n=na.helpers
var t=,r,i,f,h,c=this,o=function,p=n.blockHelperMissing,u=n.helperMissing,d=void 0,v=this.escapeExpression
function m(a,e){returnlast}function y(a,e){var s=,l
s+=n            
f=n[_]
l=fa[_]
h=c.program(4,g,e)
h.hash={}
h.fn=h
h.inverse=c.noop
if(f&&typeof l===o){l=l.call(a,h)}else{l=p.call(a,l,h)}if(ll===0){s+=l}s+=n        
return s}function g(a,e){returnStudent}function b(a,e){returnn            &nbsp;n        }t+='div class=clearfixn    a class=typeahead-result-kind '
f=n.last
r=fe.last
i=n[if]
h=c.program(1,m,l)
h.hash={}
h.fn=h
h.inverse=c.noop
r=i.call(e,r,h)
if(rr===0){t+=r}t+='n        '
f=n.first
r=fe.first
i=n[if]
h=c.program(3,y,l)
h.hash={}
h.fn=h
h.inverse=c.program(6,b,l)
r=i.call(e,r,h)
if(rr===0){t+=r}t+='n    aa class=typeahead-result typeahead-result-content href='
f=n.href
r=fe.href
if(typeof r===o){r=r.call(e,{hash{}})}else if(r===d){r=u.call(e,href,{hash{}})}t+=v(r)+' tabindex=-1n        img class=avatar-small src='
f=n.avatarUrl
r=fe.avatarUrl
if(typeof r===o){r=r.call(e,{hash{}})}else if(r===d){r=u.call(e,avatarUrl,{hash{}})}t+=v(r)+'nn        div class=scented-contentn            '
f=n.value
r=fe.value
if(typeof r===o){r=r.call(e,{hash{}})}else if(r===d){r=u.call(e,value,{hash{}})}t+=v(r)+n        divn    andivn
return t})})()
});
KAdefine(javascripttypeahead-packagetypeahead-search-footer.handlebars, function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates{}
a[typeahead-package_typeahead-search-footer]=module.exports=e(function(e,a,s,n,l){s=se.helpers
var r=,t,i,o,f,h=this,p=function,c=s.helperMissing,u=void 0,d=this.escapeExpression,y=s.blockHelperMissing
function v(e,a){return typeahead-result-kind-footer-only-result}function g(e,a){return typeahead-result-footer-only-result}function m(e,a){var n=,l
n+=Search all of Khan Academy for strong
o=s.query
l=oe.query
if(typeof l===p){l=l.call(e,{hash{}})}else if(l===u){l=c.call(e,query,{hash{}})}n+=d(l)+strong
return n}r+='div class=clearfixn    a class=typeahead-result-kind typeahead-result-kind-footer'
o=s.isOnlyResult
t=oa.isOnlyResult
i=s[if]
f=h.program(1,v,l)
f.hash={}
f.fn=f
f.inverse=h.noop
t=i.call(a,t,f)
if(tt===0){r+=t}r+='n        &nbsp;n    aa class=typeahead-result typeahead-result-footer'
o=s.isOnlyResult
t=oa.isOnlyResult
i=s[if]
f=h.program(3,g,l)
f.hash={}
f.fn=f
f.inverse=h.noop
t=i.call(a,t,f)
if(tt===0){r+=t}r+=' href='
o=s.href
t=oa.href
if(typeof t===p){t=t.call(a,{hash{}})}else if(t===u){t=c.call(a,href,{hash{}})}r+=d(t)+' tabindex=-1n        div class=scented-contentn            '
o=s[_]
t=oa[_]
f=h.program(5,m,l)
f.hash={}
f.fn=f
f.inverse=h.noop
if(o&&typeof t===p){t=t.call(a,f)}else{t=y.call(a,t,f)}if(tt===0){r+=t}r+=n        divn    andivn
return r})})()
});
(function(t){var e=0.9.3
var i={isMsiefunction(){var t=(msie) ([w.]+)i.exec(navigator.userAgent)
return tparseInt(t[2],10)false},isBlankStringfunction(t){return!t^s$.test(t)},escapeRegExCharsfunction(t){return t.replace([-[]{}()+.^$]g,$&)},isStringfunction(t){return typeof t===string},isNumberfunction(t){return typeof t===number},isArrayt.isArray,isFunctiont.isFunction,isObjectt.isPlainObject,isUndefinedfunction(t){return typeof t===undefined},bindt.proxy,bindAllfunction(e){var i
for(var n in e){t.isFunction(i=e[n])&&(e[n]=t.proxy(i,e))}},indexOffunction(t,e){for(var i=0;it.length;i++){if(t[i]===e){return i}}return-1},eacht.each,mapt.map,filtert.grep,everyfunction(e,i){var n=true
if(!e){return n}t.each(e,function(t,s){if(!(n=i.call(null,s,t,e))){return false}})
return!!n},somefunction(e,i){var n=false
if(!e){return n}t.each(e,function(t,s){if(n=i.call(null,s,t,e)){return false}})
return!!n},mixint.extend,getUniqueIdfunction(){var t=0
return function(){return t++}}(),deferfunction(t){setTimeout(t,0)},debouncefunction(t,e,i){var n,s
return function(){var r=this,o=arguments,u,a
u=function(){n=null
if(!i){s=t.apply(r,o)}}
a=i&&!n
clearTimeout(n)
n=setTimeout(u,e)
if(a){s=t.apply(r,o)}return s}},throttlefunction(t,e){var i,n,s,r,o,u
o=0
u=function(){o=new Date
s=null
r=t.apply(i,n)}
return function(){var a=new Date,c=e-(a-o)
i=this
n=arguments
if(c=0){clearTimeout(s)
s=null
o=a
r=t.apply(i,n)}else if(!s){s=setTimeout(u,c)}return r}},tokenizeQueryfunction(e){return t.trim(e).toLowerCase().split([s]+)},tokenizeTextfunction(e){return t.trim(e).toLowerCase().split([s-_]+)},getProtocolfunction(){return location.protocol},noopfunction(){}}
var n=function(){var t=s+
return{onfunction(e,i){var n
if(!i){return this}this._callbacks=this._callbacks{}
e=e.split(t)
while(n=e.shift()){this._callbacks[n]=this._callbacks[n][]
this._callbacks[n].push(i)}return this},triggerfunction(e,i){var n,s
if(!this._callbacks){return this}e=e.split(t)
while(n=e.shift()){if(s=this._callbacks[n]){for(var r=0;rs.length;r+=1){s[r].call(this,{typen,datai})}}}return this}}}()
var s=function(){var e=typeahead
function n(e){if(!e!e.el){t.error(EventBus initialized without el)}this.$el=t(e.el)}i.mixin(n.prototype,{triggerfunction(t){var i=[].slice.call(arguments,1)
this.$el.trigger(e+t,i)}})
return n}()
var r=function(){var t,e
try{t=window.localStorage
t.setItem(~~~,!)
t.removeItem(~~~)}catch(n){t=null}function s(t){this.prefix=[__,t,__].join()
this.ttlKey=__ttl__
this.keyMatcher=new RegExp(^+this.prefix)}if(t&&window.JSON){e={_prefixfunction(t){return this.prefix+t},_ttlKeyfunction(t){return this._prefix(t)+this.ttlKey},getfunction(e){if(this.isExpired(e)){this.remove(e)}return u(t.getItem(this._prefix(e)))},setfunction(e,n,s){if(i.isNumber(s)){t.setItem(this._ttlKey(e),o(r()+s))}else{t.removeItem(this._ttlKey(e))}return t.setItem(this._prefix(e),o(n))},removefunction(e){t.removeItem(this._ttlKey(e))
t.removeItem(this._prefix(e))
return this},clearfunction(){var e,i,n=[],s=t.length
for(e=0;es;e++){if((i=t.key(e)).match(this.keyMatcher)){n.push(i.replace(this.keyMatcher,))}}for(e=n.length;e--;){this.remove(n[e])}return this},isExpiredfunction(e){var n=u(t.getItem(this._ttlKey(e)))
return i.isNumber(n)&&r()ntruefalse}}}else{e={geti.noop,seti.noop,removei.noop,cleari.noop,isExpiredi.noop}}i.mixin(s.prototype,e)
return s
function r(){return(new Date).getTime()}function o(t){return JSON.stringify(i.isUndefined(t)nullt)}function u(t){return JSON.parse(t)}}()
var o=function(){function t(t){i.bindAll(this)
t=t{}
this.sizeLimit=t.sizeLimit10
this.cache={}
this.cachedKeysByAge=[]}i.mixin(t.prototype,{getfunction(t){return this.cache[t]},setfunction(t,e){var i
if(this.cachedKeysByAge.length===this.sizeLimit){i=this.cachedKeysByAge.shift()
delete this.cache[i]}this.cache[t]=e
this.cachedKeysByAge.push(t)}})
return t}()
var u=function(){var e=0,n={},s,r
function u(t){i.bindAll(this)
t=i.isString(t){urlt}t
r=rnew o
s=i.isNumber(t.maxParallelRequests)t.maxParallelRequestss6
this.url=t.url
this.wildcard=t.wildcard%QUERY
this.filter=t.filter
this.replace=t.replace
this.ajaxSettings={typeget,cachet.cache,timeoutt.timeout,dataTypet.dataTypejson,beforeSendt.beforeSend}
this._get=(^throttle$i.test(t.rateLimitFn)i.throttlei.debounce)(this._get,t.rateLimitWait300)}i.mixin(u.prototype,{_getfunction(t,e){var i=this
if(h()){this._sendRequest(t).done(n)}else{this.onDeckRequestArgs=[].slice.call(arguments,0)}function n(n){var s=i.filteri.filter(n)n
e&&e(s)
r.set(t,n)}},_sendRequestfunction(e){var i=this,s=n[e]
if(!s){a()
s=n[e]=t.ajax(e,this.ajaxSettings).always(r)}return s
function r(){c()
n[e]=null
if(i.onDeckRequestArgs){i._get.apply(i,i.onDeckRequestArgs)
i.onDeckRequestArgs=null}}},getfunction(t,e){var n=this,s=encodeURIComponent(t),o,u
e=ei.noop
o=this.replacethis.replace(this.url,s)this.url.replace(this.wildcard,s)
if(u=r.get(o)){i.defer(function(){e(n.filtern.filter(u)u)})}else{this._get(o,e)}return!!u}})
return u
function a(){e++}function c(){e--}function h(){return es}}()
var a=function(){var n={thumbprintthumbprint,protocolprotocol,itemHashitemHash,adjacencyListadjacencyList}
function s(e){i.bindAll(this)
if(i.isString(e.template)&&!e.engine){t.error(no template engine specified)}if(!e.local&&!e.prefetch&&!e.remote){t.error(one of local, prefetch, or remote is required)}this.name=e.namei.getUniqueId()
this.limit=e.limit5
this.minLength=e.minLength1
this.header=e.header
this.footer=e.footer
this.valueKey=e.valueKeyvalue
this.template=o(e.template,e.engine,this.valueKey)
this.beforeRender=e.beforeRender
this.local=e.local
this.prefetch=e.prefetch
this.remote=e.remote
this.itemHash={}
this.adjacencyList={}
this.storage=e.namenew r(e.name)null}i.mixin(s.prototype,{_processLocalDatafunction(t){this._mergeProcessedData(this._processData(t))},_loadPrefetchDatafunction(s){var r=this,o=e+(s.thumbprint),u,a,c,h,l,d
if(this.storage){u=this.storage.get(n.thumbprint)
a=this.storage.get(n.protocol)
c=this.storage.get(n.itemHash)
h=this.storage.get(n.adjacencyList)}l=u!==oa!==i.getProtocol()
s=i.isString(s){urls}s
s.ttl=i.isNumber(s.ttl)s.ttl2460601e3
if(c&&h&&!l){this._mergeProcessedData({itemHashc,adjacencyListh})
d=t.Deferred().resolve()}else{if(s.deferred){d=s.deferred.done(f)}else{d=t.getJSON(s.url).done(f)}}return d
function f(t){var e=s.filters.filter(t)t,u=r._processData(e),a=u.itemHash,c=u.adjacencyList
if(r.storage){r.storage.set(n.itemHash,a,s.ttl)
r.storage.set(n.adjacencyList,c,s.ttl)
r.storage.set(n.thumbprint,o,s.ttl)
r.storage.set(n.protocol,i.getProtocol(),s.ttl)}r._mergeProcessedData(u)}},_transformDatumfunction(t){var e=i.isString(t)tt[this.valueKey],n=t.tokensi.tokenizeText(e),s={valuee,tokensn}
if(i.isString(t)){s.datum={}
s.datum[this.valueKey]=t}else{s.datum=t}s.tokens=i.filter(s.tokens,function(t){return!i.isBlankString(t)})
s.tokens=i.map(s.tokens,function(t){return t.toLowerCase()})
return s},_processDatafunction(t){var e=this,n={},s={}
i.each(t,function(t,r){var o=e._transformDatum(r),u=i.getUniqueId(o.value)
n[u]=o
i.each(o.tokens,function(t,e){var n=e.charAt(0),r=s[n](s[n]=[u])
!~i.indexOf(r,u)&&r.push(u)})})
return{itemHashn,adjacencyLists}},_mergeProcessedDatafunction(t){var e=this
i.mixin(this.itemHash,t.itemHash)
i.each(t.adjacencyList,function(t,i){var n=e.adjacencyList[t]
e.adjacencyList[t]=nn.concat(i)i})},_getLocalSuggestionsfunction(t){var e=this,n=[],s=[],r,o=[]
i.each(t,function(t,e){var s=e.charAt(0)
!~i.indexOf(n,s)&&n.push(s)})
i.each(n,function(t,i){var n=e.adjacencyList[i]
if(!n){return false}s.push(n)
if(!rn.lengthr.length){r=n}})
if(s.lengthn.length){return[]}i.each(r,function(n,r){var u=e.itemHash[r],a,c
a=i.every(s,function(t){return~i.indexOf(t,r)})
c=a&&i.every(t,function(t){return i.some(u.tokens,function(e){return e.indexOf(t)===0})})
c&&o.push(u)})
return o},initializefunction(){var e
this.local&&this._processLocalData(this.local)
this.transport=this.remotenew u(this.remote)null
e=this.prefetchthis._loadPrefetchData(this.prefetch)t.Deferred().resolve()
this.local=this.prefetch=this.remote=null
this.initialize=function(){return e}
return e},getSuggestionsfunction(t,e){var n=this,s,r,o=false
if(t.lengththis.minLength){return}s=i.tokenizeQuery(t)
r=this._getLocalSuggestions(s).slice(0,this.limit)
if(r.lengththis.limit&&this.transport){o=this.transport.get(t,u)}!o&&e&&e(r)
function u(t){r=r.slice(0)
i.each(t,function(t,e){var s=n._transformDatum(e),o
o=i.some(r,function(t){return s.value===t.value})
!o&&r.push(s)
return r.lengthn.limit})
e&&e(r)}}})
return s
function o(t,e,n){var s,r
if(i.isFunction(t)){s=t}else if(i.isString(t)){r=e.compile(t)
s=i.bind(r.render,r)}else{s=function(t){returnp+t[n]+p}}return s}}()
var c=function(){function e(e){var n=this
i.bindAll(this)
this.specialKeyCodeMap={9tab,27esc,37left,39right,13enter,38up,40down}
this.$hint=t(e.hint)
this.$input=t(e.input).on(blur.tt,this._handleBlur).on(focus.tt,this._handleFocus).on(keydown.tt,this._handleSpecialKeyEvent)
if(!i.isMsie()){this.$input.on(input.tt,this._compareQueryToInputValue)}else{this.$input.on(keydown.tt keypress.tt cut.tt paste.tt,function(t){if(n.specialKeyCodeMap[t.whicht.keyCode]){return}i.defer(n._compareQueryToInputValue)})}this.query=this.$input.val()
this.$overflowHelper=s(this.$input)}i.mixin(e.prototype,n,{_handleFocusfunction(){this.trigger(focused)},_handleBlurfunction(){this.trigger(blured)},_handleSpecialKeyEventfunction(t){var e=this.specialKeyCodeMap[t.whicht.keyCode]
e&&this.trigger(e+Keyed,t)},_compareQueryToInputValuefunction(){var t=this.getInputValue(),e=r(this.query,t),i=ethis.query.length!==t.lengthfalse
if(i){this.trigger(whitespaceChanged,{valuethis.query})}else if(!e){this.trigger(queryChanged,{valuethis.query=t})}},destroyfunction(){this.$hint.off(.tt)
this.$input.off(.tt)
this.$hint=this.$input=this.$overflowHelper=null},focusfunction(){this.$input.focus()},blurfunction(){this.$input.blur()},getQueryfunction(){return this.query},setQueryfunction(t){this.query=t},getInputValuefunction(){return this.$input.val()},setInputValuefunction(t,e){this.$input.val(t)
!e&&this._compareQueryToInputValue()},getHintValuefunction(){return this.$hint.val()},setHintValuefunction(t){this.$hint.val(t)},getLanguageDirectionfunction(){return(this.$input.css(direction)ltr).toLowerCase()},isOverflowfunction(){this.$overflowHelper.text(this.getInputValue())
return this.$overflowHelper.width()this.$input.width()},isCursorAtEndfunction(){var t=this.$input.val().length,e=this.$input[0].selectionStart,n
if(i.isNumber(e)){return e===t}else if(document.selection){n=document.selection.createRange()
n.moveStart(character,-t)
return t===n.text.length}return true}})
return e
function s(e){return t(spanspan).css({positionabsolute,left-9999px,visibilityhidden,whiteSpacenowrap,fontFamilye.css(font-family),fontSizee.css(font-size),fontStylee.css(font-style),fontVariante.css(font-variant),fontWeighte.css(font-weight),wordSpacinge.css(word-spacing),letterSpacinge.css(letter-spacing),textIndente.css(text-indent),textRenderinge.css(text-rendering),textTransforme.css(text-transform)}).insertAfter(e)}function r(t,e){t=(t).replace(^sg,).replace(s{2,}g, )
e=(e).replace(^sg,).replace(s{2,}g, )
return t===e}}()
var h=function(){var e={suggestionsList'span class=tt-suggestionsspan'},s={suggestionsList{displayblock},suggestion{whiteSpacenowrap,cursorpointer},suggestionChild{whiteSpacenormal}}
function r(e){i.bindAll(this)
this.isOpen=false
this.isEmpty=true
this.isMouseOverDropdown=false
this.$menu=t(e.menu).on(mouseenter.tt,this._handleMouseenter).on(mouseleave.tt,this._handleMouseleave).on(click.tt,.tt-suggestion,this._handleSelection).on(mouseover.tt,.tt-suggestion,this._handleMouseover)}i.mixin(r.prototype,n,{_handleMouseenterfunction(){this.isMouseOverDropdown=true},_handleMouseleavefunction(){this.isMouseOverDropdown=false},_handleMouseoverfunction(e){var i=t(e.currentTarget)
this._getSuggestions().removeClass(tt-is-under-cursor)
i.addClass(tt-is-under-cursor)},_handleSelectionfunction(e){var i=t(e.currentTarget)
this.trigger(suggestionSelected,o(i))},_showfunction(){this.$menu.css(display,block)},_hidefunction(){this.$menu.hide()},_moveCursorfunction(t){var e,i,n,s
if(!this.isVisible()){return}e=this._getSuggestions()
i=e.filter(.tt-is-under-cursor)
i.removeClass(tt-is-under-cursor)
n=e.index(i)+t
n=(n+1)%(e.length+1)-1
if(n===-1){this.trigger(cursorRemoved)
return}else if(n-1){n=e.length-1}s=e.eq(n).addClass(tt-is-under-cursor)
this._ensureVisibility(s)
this.trigger(cursorMoved,o(s))},_getSuggestionsfunction(){return this.$menu.find(.tt-suggestions  .tt-suggestion)},_ensureVisibilityfunction(t){var e=this.$menu.height()+parseInt(this.$menu.css(paddingTop),10)+parseInt(this.$menu.css(paddingBottom),10),i=this.$menu.scrollTop(),n=t.position().top,s=n+t.outerHeight(true)
if(n0){this.$menu.scrollTop(i+n)}else if(es){this.$menu.scrollTop(i+(s-e))}},destroyfunction(){this.$menu.off(.tt)
this.$menu=null},isVisiblefunction(){return this.isOpen&&!this.isEmpty},closeUnlessMouseIsOverDropdownfunction(){if(!this.isMouseOverDropdown){this.close()}},closefunction(){if(this.isOpen){this.isOpen=false
this.isMouseOverDropdown=false
this._hide()
this.$menu.find(.tt-suggestions  .tt-suggestion).removeClass(tt-is-under-cursor)
this.trigger(closed)}},openfunction(){if(!this.isOpen){this.isOpen=true
!this.isEmpty&&this._show()
this.trigger(opened)}},setLanguageDirectionfunction(t){var e={left0,rightauto},i={leftauto,right 0}
t===ltrthis.$menu.css(e)this.$menu.css(i)},moveCursorUpfunction(){this._moveCursor(-1)},moveCursorDownfunction(){this._moveCursor(+1)},setCursorfunction(t){this.$menu.find(.tt-suggestions  .tt-suggestion).removeClass(tt-is-under-cursor)
this._moveCursor(t)},getSuggestionUnderCursorfunction(){var t=this._getSuggestions().filter(.tt-is-under-cursor).first()
return t.length0o(t)null},getFirstSuggestionfunction(){var t=this._getSuggestions().first()
return t.length0o(t)null},renderSuggestionsfunction(n,r){var o=tt-dataset-+n.name,u='div class=tt-suggestion%bodydiv',a,c,h=this.$menu.find(.+o),l,d,f
r=n.beforeRendern.beforeRender(r)r
if(h.length===0){c=t(e.suggestionsList).css(s.suggestionsList)
h=t(divdiv).addClass(o).append(n.header).append(c).append(n.footer).appendTo(this.$menu)}if(r.length0){this.isEmpty=false
this.isOpen&&this._show()
l=document.createElement(div)
d=document.createDocumentFragment()
i.each(r,function(e,i){i.dataset=n.name
a=n.template(i.datum)
l.innerHTML=u.replace(%body,a)
f=t(l.firstChild).css(s.suggestion).data(suggestion,i)
f.children().each(function(){t(this).css(s.suggestionChild)})
d.appendChild(f[0])})
h.show().find(.tt-suggestions).html(d)}else{this.clearSuggestions(n.name)}this.trigger(suggestionsRendered)},clearSuggestionsfunction(t){var e=tthis.$menu.find(.tt-dataset-+t)this.$menu.find('[class^=tt-dataset-]'),i=e.find(.tt-suggestions)
e.hide()
i.empty()
if(this._getSuggestions().length===0){this.isEmpty=true
this._hide()}}})
return r
function o(t){return t.data(suggestion)}}()
var l=function(){var e={wrapper'span class=twitter-typeaheadspan',hint'input class=tt-hint type=text autocomplete=off spellcheck=off disabled',dropdown'span class=tt-dropdown-menuspan'},s={wrapper{positionrelative,displayinline-block},hint{positionabsolute,top0,left0,borderColortransparent,boxShadownone},query{positionrelative,verticalAligntop,backgroundColortransparent},dropdown{positionabsolute,top100%,left0,zIndex100,displaynone}}
if(i.isMsie()){i.mixin(s.query,{backgroundImageurl(dataimagegif;base64,R0lGODlhAQABAIAAAAAAAPyH5BAEAAAAALAAAAAABAAEAAAIBRAA7)})}if(i.isMsie()&&i.isMsie()=7){i.mixin(s.wrapper,{displayinline,zoom1})
i.mixin(s.query,{marginTop-1px})}function r(t){var e,n,s
i.bindAll(this)
this.$node=o(t.input)
this.datasets=t.datasets
this.dir=null
this.eventBus=t.eventBus
e=this.$node.find(.tt-dropdown-menu)
n=this.$node.find(.tt-query)
s=this.$node.find(.tt-hint)
this.dropdownView=new h({menue}).on(suggestionSelected,this._handleSelection).on(cursorMoved,this._clearHint).on(cursorMoved,this._setInputValueToSuggestionUnderCursor).on(cursorRemoved,this._setInputValueToQuery).on(cursorRemoved,this._updateHint).on(suggestionsRendered,this._updateHint).on(opened,this._updateHint).on(opened,this._getSuggestions).on(closed,this._clearHint).on(opened closed,this._propagateEvent)
this.inputView=new c({inputn,hints}).on(focused,this._openDropdown).on(blured,this._closeDropdown).on(blured,this._setInputValueToQuery).on(enterKeyed tabKeyed,this._handleSelection).on(queryChanged,this._clearHint).on(queryChanged,this._clearSuggestions).on(queryChanged,this._getSuggestions).on(whitespaceChanged,this._updateHint).on(queryChanged whitespaceChanged,this._openDropdown).on(queryChanged whitespaceChanged,this._setLanguageDirection).on(escKeyed,this._closeDropdown).on(escKeyed,this._setInputValueToQuery).on(tabKeyed upKeyed downKeyed,this._managePreventDefault).on(upKeyed downKeyed,this._moveDropdownCursor).on(upKeyed downKeyed,this._openDropdown).on(tabKeyed leftKeyed rightKeyed,this._autocomplete)}i.mixin(r.prototype,n,{_managePreventDefaultfunction(t){var e=t.data,i,n,s=false
switch(t.type){casetabKeyedi=this.inputView.getHintValue()
n=this.inputView.getInputValue()
s=i&&i!==n
break
caseupKeyedcasedownKeyeds=!e.shiftKey&&!e.ctrlKey&&!e.metaKey
break}s&&e.preventDefault()},_setLanguageDirectionfunction(){var t=this.inputView.getLanguageDirection()
if(t!==this.dir){this.dir=t
this.$node.css(direction,t)
this.dropdownView.setLanguageDirection(t)}},_updateHintfunction(){var t=this.dropdownView.getFirstSuggestion(),e=tt.valuenull,n=this.dropdownView.isVisible(),s=this.inputView.isOverflow(),r,o,u,a,c
if(e&&n&&!s){r=this.inputView.getInputValue()
o=r.replace(s{2,}g, ).replace(^s+g,)
u=i.escapeRegExChars(o)
a=new RegExp(^(+u+)(.$),i)
c=a.exec(e)
if(!i.isBlankString(r)){this.inputView.setHintValue(r+(cc[1]))}}},_clearHintfunction(){this.inputView.setHintValue()},_clearSuggestionsfunction(){this.dropdownView.clearSuggestions()},_setInputValueToQueryfunction(){this.inputView.setInputValue(this.inputView.getQuery())},_setInputValueToSuggestionUnderCursorfunction(t){var e=t.data
this.inputView.setInputValue(e.value,true)},_openDropdownfunction(){this.dropdownView.open()},_closeDropdownfunction(t){this.dropdownView[t.type===bluredcloseUnlessMouseIsOverDropdownclose]()},_moveDropdownCursorfunction(t){var e=t.data
if(!e.shiftKey&&!e.ctrlKey&&!e.metaKey){this.dropdownView[t.type===upKeyedmoveCursorUpmoveCursorDown]()}},_handleSelectionfunction(t){var e=t.type===suggestionSelected,n=et.datathis.dropdownView.getSuggestionUnderCursor()
if(n){this.inputView.setInputValue(n.value)
ethis.inputView.focus()t.data.preventDefault()
e&&i.isMsie()i.defer(this.dropdownView.close)this.dropdownView.close()
this.eventBus.trigger(selected,n.datum,n.dataset)}},_getSuggestionsfunction(){var t=this,e=this.inputView.getQuery()
if(i.isBlankString(e)){var n=i.some(this.datasets,function(t){return t.minLength=0})
if(!n){return}}i.each(this.datasets,function(i,n){n.getSuggestions(e,function(i){if(e===t.inputView.getQuery()){t.dropdownView.renderSuggestions(n,i)}})})},_autocompletefunction(t){var e,i,n,s,r
if(t.type===rightKeyedt.type===leftKeyed){e=this.inputView.isCursorAtEnd()
i=this.inputView.getLanguageDirection()===ltrt.type===leftKeyedt.type===rightKeyed
if(!ei){return}}n=this.inputView.getQuery()
s=this.inputView.getHintValue()
if(s!==&&n!==s){r=this.dropdownView.getFirstSuggestion()
this.inputView.setInputValue(r.value)
this.eventBus.trigger(autocompleted,r.datum,r.dataset)}},_propagateEventfunction(t){this.eventBus.trigger(t.type)},destroyfunction(){this.inputView.destroy()
this.dropdownView.destroy()
u(this.$node)
this.$node=null},setQueryfunction(t){this.inputView.setQuery(t)
this.inputView.setInputValue(t)
this._clearHint()
this._clearSuggestions()
this._getSuggestions()}})
return r
function o(i){var n=t(e.wrapper),r=t(e.dropdown),o=t(i),u=t(e.hint)
n=n.css(s.wrapper)
r=r.css(s.dropdown)
u.css(s.hint).css({backgroundAttachmento.css(background-attachment),backgroundClipo.css(background-clip),backgroundColoro.css(background-color),backgroundImageo.css(background-image),backgroundOrigino.css(background-origin),backgroundPositiono.css(background-position),backgroundRepeato.css(background-repeat),backgroundSizeo.css(background-size)})
o.data(ttAttrs,{diro.attr(dir),autocompleteo.attr(autocomplete),spellchecko.attr(spellcheck),styleo.attr(style)})
o.addClass(tt-query).attr({autocompleteoff,spellcheckfalse}).css(s.query)
try{!o.attr(dir)&&o.attr(dir,auto)}catch(a){}return o.wrap(n).parent().prepend(u).append(r)}function u(t){var e=t.find(.tt-query)
i.each(e.data(ttAttrs),function(t,n){i.isUndefined(n)e.removeAttr(t)e.attr(t,n)})
e.detach().removeData(ttAttrs).removeClass(tt-query).insertAfter(t)
t.remove()}}();(function(){var e={},n=ttView,r
r={initializefunction(r){var o
r=i.isArray(r)r[r]
if(r.length===0){t.error(no datasets provided)}o=i.map(r,function(t){var i=e[t.name]e[t.name]new a(t)
if(t.name){e[t.name]=i}return i})
return this.each(u)
function u(){var e=t(this),r,u=new s({ele})
r=i.map(o,function(t){return t.initialize()})
e.data(n,new l({inpute,eventBusu=new s({ele}),datasetso}))
t.when.apply(t,r).always(function(){i.defer(function(){u.trigger(initialized)})})}},destroyfunction(){return this.each(e)
function e(){var e=t(this),i=e.data(n)
if(i){i.destroy()
e.removeData(n)}}},setQueryfunction(e){return this.each(i)
function i(){var i=t(this).data(n)
i&&i.setQuery(e)}},setCursorfunction(e){return this.each(i)
function i(){var i=t(this).data(n)
i&&i.dropdownView.setCursor(e)}}}
jQuery.fn.typeahead=function(t){if(r[t]){return r[t].apply(this,[].slice.call(arguments,1))}else{return r.initialize.apply(this,arguments)}}})()})(window.jQuery)
KAdefine(third_partyjavascript-khansrctypeaheadjsdisttypeahead.js, function(require, requireWithVars, module, exports) {
});
KAdefine(javascripttypeahead-packagetypeahead-search.js, function(require, requireWithVars, module, exports) {
(function(e){var t={resultKinds[{kindtopics,limit4},{kindexercises,limit5},{kindvideos,limit5},{kindarticles,limit3},{kindscratchpads,limit2}],translatedKinds{scratchpade._(Program),topice._(Topic),exercisee._(Skill),videoe._(Video),articlee._(Article)},exampleKeys{videos[563207734,1174169184],exercises[1031282414,1425290397],scratchpads[1881142843]},exampleSuggestions{},datumizefunction(e,n,a,r){var i=t.tokenize(n),o=a.substring(0,a.length-1),s=o===scratchpadpo[0]
return{valuen,tokensi,kindo,translatedKindt.translatedKinds[o],isTopico===topic,progressKeys+e,scentedValueHtmlfunction(){return r(n,i)},hrefautocomplete+o++encodeURIComponent(e)}},tokenizefunction(e){var t=e.toLowerCase().split( )
if(e&&RegexUtil.anyAccentedCharRegex.test(e)){_.each(t,function(e){var n=e
_.each(RegexUtil.accentedCharRegexes,function(e,t){n=n.replace(e,t)})
if(n!==e){t.push(n)}})}return t},beforeRenderfunction(e){_.each(e,function(t,n){t.datum.first=n===0
t.datum.last=n===e.length-1})
return e},indexToDatumfunction(e,n){return function(a){var r=a[e],i=t.exampleKeys[e]
if(i){t.exampleSuggestions[e]=[]}return _.map(_.keys(r{}),function(a){var o=t.datumize(a,r[a],e,n)
if(_.contains(i,a)){t.exampleSuggestions[e].push({valueo.value,datumo})}return o})}},indexDatasetfunction(e,n,a){return{templateTemplates.get(typeahead.typeahead-search-result),beforeRendern,prefetch{deferredTypeaheadLoader.requireIndex(),filtert.indexToDatum(e.kind,a)},minLength-1,limite.limit}},studentsToDatumfunction(e){return _.map(e,function(e){var n=e.nickname,a=t.tokenize(n)
return{valuen,tokensa,avatarUrle.avatarUrl,hrefe.url}})},studentsDatasetfunction(e){var n=KA.getUserProfile()
if(!n!n.get(hasStudents)){return null}return{templateTemplates.get(typeahead.typeahead-search-student),beforeRendere,remote{urlapiv1autocompletestudents%Qcasing=camel&max=3,wildcard%Q,cachefalse,timeout5e3,rateLimitWait500,maxParallelRequests1,filtert.studentsToDatum},limit3}},commonCoreTagToDatumfunction(e){return _.map(e,function(e){var n=e.id,a=e.name
return{valuea,tokenst.tokenize(a),kindexercise,translatedKindt.translatedKinds[exercise],isTopicfalse,progressKeye+n,scentedValueHtmlfunction(){return a},hrefautocompleteexercise+encodeURIComponent(n)}})},commonCoreTagDatasetfunction(e){return{templateTemplates.get(typeahead.typeahead-search-result),beforeRendere,remote{urlapiv1autocompletecc_tags%Qcasing=camel&max=10,wildcard%Q,cachetrue,timeout5e3,rateLimitWait500,maxParallelRequests1,filtert.commonCoreTagToDatum},limit10}},footerDatasetfunction(e){return{templateTemplates.get(typeahead.typeahead-search-footer),local[],beforeRendere}}}
e.fn.typeaheadSearch=function(e){this.each(function(){n.call(this,e)})
return this}
function n(n){var a=e(this),r=e(),i=e(),o=null,s=false
function u(){r=a.closest(.twitter-typeahead)
i=a.closest(form)
o=a.data(ttView)
var e=r.find(.tt-dropdown-menu)
e.addClass(dropdown-menu)
if(Modernizr.touchevents){e.addClass(touch)}s=true}function c(e,t){if(t.href){window.location=t.href}}function d(){a.typeahead(setCursor,1)}function l(t){var n=[e.ui.keyCode.ENTER,e.ui.keyCode.NUMPAD_ENTER]
if(_.contains(n,t.keyCode)){var a=r.find(.tt-is-under-cursor)
if(a.length===0){i.submit()
t.stopPropagation()}}}function f(n,r){var i=e.trim(a.val()).replace( +g, ),o=t.tokenize(i),s=_.map(o,RegexUtil.accentInsensitive),u=_.compact(_.map(s,function(e){return new RegExp((b+e+(!)),i)}))
var c=n
_.each(u,function(e){c=c.replace(e,b$1b)})
return c}function p(){var e=o.datasets[7]
o.dropdownView.renderSuggestions(e,[])}function m(n){return function(r){if(!s){return[]}if(!r.length&&!e.trim(a.val()).length){if(t.exampleSuggestions[n.kind]){r=t.exampleSuggestions[n.kind]}}return t.beforeRender(r)}}function h(e){if(!s){return[]}if(e.length){_.defer(p)}return t.beforeRender(e)}function g(e){if(!s){return[]}var t=r.find(.typeahead-result-contentvisible)
var n=a.val(),i=encodeURIComponent(n)
e.push({valuen,datum{queryn,hrefsearchpage_search_query=+i,isOnlyResultt.length===0}})
return e}var v=_.map(t.resultKinds,function(e){var n=m(e)
return t.indexDataset(e,n,f)})
v.push(t.commonCoreTagDataset(h))
v.push(t.studentsDataset(h))
v.push(t.footerDataset(g))
v=_.compact(v)
a.keydown(l).typeahead(v).on(typeaheadinitialized,u).on(typeaheadselected,c).on(typeaheadautocompleted,d)
if(Modernizr.touchevents){a.css(backgroundColor,a.prev(.tt-hint).css(backgroundColor))}e(document.body).click(function(t){if(e(t.target).is(a)){return}if(s&&o.dropdownView.isOpen){o.dropdownView.closeUnlessMouseIsOverDropdown()}})}})(jQuery)
});
; KAdefine.updateFilenameRewriteMap({javascriptnode_modulesreact-componentstimeago.jsx ......third_partyjavascript-khansrcreact-componentsjstimeago.jsx, javascriptnode_modulesreact-componentsi18n.jsx ......third_partyjavascript-khansrcreact-componentsjsi18n.jsx, javascriptnode_modulesasyncindex.js ......third_partyjavascript-khansrcasyncasync.js, javascriptnode_modulesreact-componentstooltip.jsx ......third_partyjavascript-khansrcreact-componentsjstooltip.jsx, javascriptnode_modulesjqueryindex.js ......third_partyjavascript-khansrcjqueryjquery.js, javascriptnode_modulesreact-componentsblur-input.jsx ......third_partyjavascript-khansrcreact-componentsjsblur-input.jsx, javascriptnode_modulesbackboneindex.js ......third_partyjavascript-khansrcbackbonebackbone.js, javascriptnode_modulesunderscoreindex.js ......third_partyjavascript-khansrcunderscoreunderscore.js, javascriptnode_modulesreact-componentsinfo-tip.jsx ......third_partyjavascript-khansrcreact-componentsjsinfo-tip.jsx, javascriptnode_modulesreact-componentstex.jsx ......third_partyjavascript-khansrcreact-componentsjstex.jsx, javascriptnode_modulesreact-componentsset-interval-mixin.jsx ......third_partyjavascript-khansrcreact-componentsjsset-interval-mixin.jsx, javascriptnode_modulesreact-componentsbutton-group.jsx ......third_partyjavascript-khansrcreact-componentsjsbutton-group.jsx, javascriptnode_modulesreact-componentsbackbone-mixin.jsx ......third_partyjavascript-khansrcreact-componentsjsbackbone-mixin.jsx, javascriptnode_modulesreact-componentslayered-component-mixin.jsx ......third_partyjavascript-khansrcreact-componentsjslayered-component-mixin.jsx, javascriptnode_modulesrcssindex.js ......third_partyjavascript-khansrcrcss-compiledrcss.js});
KAdefine.require(.javascripttypeahead-packagetypeahead-search-result.handlebars);
KAdefine.require(.javascripttypeahead-packagetypeahead-search-student.handlebars);
KAdefine.require(.javascripttypeahead-packagetypeahead-search-footer.handlebars);
KAdefine.require(.javascripttypeahead-packagetypeahead-search.js);