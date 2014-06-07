!function(t){"use strict"
var e='[data-dismiss="alert"]',r=function(r){t(r).on("click",e,this.close)}
r.prototype.close=function(e){var r=t(this),n=r.attr("data-target"),a
if(!n){n=r.attr("href")
n=n&&n.replace(/.*(?=#[^\s]*$)/,"")}a=t(n)
e&&e.preventDefault()
a.length||(a=r.hasClass("alert")?r:r.parent())
a.trigger(e=t.Event("close"))
if(e.isDefaultPrevented())return
a.removeClass("in")
function i(){a.trigger("closed").remove()}t.support.transition&&a.hasClass("fade")?a.on(t.support.transition.end,i):i()}
var n=t.fn.alert
t.fn.alert=function(e){return this.each(function(){var n=t(this),a=n.data("alert")
if(!a)n.data("alert",a=new r(this))
if(typeof e=="string")a[e].call(n)})}
t.fn.alert.Constructor=r
t.fn.alert.noConflict=function(){t.fn.alert=n
return this}
t(document).on("click.alert.data-api",e,r.prototype.close)}(window.jQuery)
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js", function(require, requireWithVars, module, exports) {
});
KAdefine("javascript/discussion-package/handlebars-helpers.js", function(require, requireWithVars, module, exports) {
Handlebars.registerHelper("discussionFormControls",function(r){var s=Templates.get("discussion.form-controls")
return s({label:r})})
});
(function(e){e.expander={version:"1.4.2",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:false,summaryClass:"summary",detailClass:"details",moreClass:"read-more",lessClass:"read-less",collapseTimer:0,expandEffect:"slideDown",expandSpeed:250,collapseEffect:"slideUp",collapseSpeed:200,userCollapse:true,userCollapseText:"read less",userCollapsePrefix:" ",onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}}
e.fn.expander=function(a){var s="init"
if(typeof a=="string"){s=a
a={}}var l=e.extend({},e.expander.defaults,a),n=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,i=l.wordEnd||/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,t=/<\/?(\w+)[^>]*>/g,r=/<(\w+)[^>]*>/g,d=/<\/(\w+)>/g,o=/(<\/[^>]+>)\s*$/,f=/^<[^>]+>.?/,p
var c={init:function(){this.each(function(){var a,s,i,o,c,v,g,b,y,w,E,S,T=[],P=[],k={},$=this,A=e(this),j=e([]),D=e.meta?e.extend({},l,A.data()):l,L=!!A.find("."+D.detailClass).length,I=!!A.find("*").filter(function(){var a=e(this).css("display")
return/^block|table|list/.test(a)}).length,O=I?"div":"span",z=O+"."+D.detailClass,F="span."+D.moreClass,W=D.expandSpeed||0,Q=e.trim(A.html()),U=e.trim(A.text()),Z=Q.slice(0,D.slicePoint)
if(e.data(this,"expander")){return}e.data(this,"expander",true)
e.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(a,s){k[s]=e.isFunction(D[s])})
Z=h(Z)
c=Z.replace(t,"").length
while(c<D.slicePoint){o=Q.charAt(Z.length)
if(o=="<"){o=Q.slice(Z.length).match(f)[0]}Z+=o
c++}Z=h(Z,D.preserveWords)
v=Z.match(r)||[]
g=Z.match(d)||[]
i=[]
e.each(v,function(e,a){if(!n.test(a)){i.push(a)}})
v=i
s=g.length
for(a=0;a<s;a++){g[a]=g[a].replace(d,"$1")}e.each(v,function(a,s){var l=s.replace(r,"$1")
var n=e.inArray(l,g)
if(n===-1){T.push(s)
P.push("</"+l+">")}else{g.splice(n,1)}})
P.reverse()
if(!L){y=Q.slice(Z.length)
w=e.trim(y.replace(t,""))
if(w===""||w.split(/\s+/).length<D.widow){return}b=P.pop()||""
Z+=P.join("")
y=T.join("")+y}else{y=A.find(z).remove().html()
Z=A.html()
Q=Z+y
b=""}D.moreLabel=A.find(F).length?"":m(D)
if(I){y=Q}Z+=b
D.summary=Z
D.details=y
D.lastCloseTag=b
if(k.onSlice){i=D.onSlice.call($,D)
D=i&&i.details?i:D}var q=u(D,I)
A.html(q)
E=A.find(z)
S=A.find(F)
E.hide()
S.find("a").unbind("click.expander").bind("click.expander",B)
j=A.find("div."+D.summaryClass)
if(D.userCollapse&&!A.find("span."+D.lessClass).length){A.find(z).append('<span class="'+D.lessClass+'">'+D.userCollapsePrefix+'<a href="#">'+D.userCollapseText+"</a></span>")}A.find("span."+D.lessClass+" a").unbind("click.expander").bind("click.expander",function(a){a.preventDefault()
clearTimeout(p)
var s=e(this).closest(z)
x(D,s)
if(k.onCollapse){D.onCollapse.call($,true)}})
function B(e){e.preventDefault()
S.hide()
j.hide()
if(k.beforeExpand){D.beforeExpand.call($)}E.stop(false,true)[D.expandEffect](W,function(){E.css({zoom:""})
if(k.afterExpand){D.afterExpand.call($)}C(D,E,$)})}})},destroy:function(){if(!this.data("expander")){return}this.removeData("expander")
this.each(function(){var a=e(this),s=e.meta?e.extend({},l,a.data()):l,n=a.find("."+s.detailClass).contents()
a.find("."+s.moreClass).remove()
a.find("."+s.summaryClass).remove()
a.find("."+s.detailClass).after(n).remove()
a.find("."+s.lessClass).remove()})}}
if(c[s]){c[s].call(this)}function u(e,a){var s="span",l=e.summary
if(a){s="div"
if(o.test(l)&&!e.expandAfterSummary){l=l.replace(o,e.moreLabel+"$1")}else{l+=e.moreLabel}l='<div class="'+e.summaryClass+'">'+l+"</div>"}else{l+=e.moreLabel}return[l,"<",s+' class="'+e.detailClass+'"',">",e.details,"</"+s+">"].join("")}function m(e){var a='<span class="'+e.moreClass+'">'+e.expandPrefix
a+='<a href="#">'+e.expandText+"</a></span>"
return a}function h(a,s){if(a.lastIndexOf("<")>a.lastIndexOf(">")){a=a.slice(0,a.lastIndexOf("<"))}if(s){a=a.replace(i,"")}return e.trim(a)}function x(e,a){a.stop(true,true)[e.collapseEffect](e.collapseSpeed,function(){var s=a.prev("span."+e.moreClass).show()
if(!s.length){a.parent().children("div."+e.summaryClass).show().find("span."+e.moreClass).show()}})}function C(a,s,l){if(a.collapseTimer){p=setTimeout(function(){x(a,s)
if(e.isFunction(a.onCollapse)){a.onCollapse.call(l,false)}},a.collapseTimer)}}return this}
e.fn.expander.defaults=e.expander.defaults})(jQuery)
KAdefine("third_party/javascript-khansrc/jquery-expander/jquery.expander.js", function(require, requireWithVars, module, exports) {
});
KAdefine("javascript/discussion-package/discussion-list.js", function(require, requireWithVars, module, exports) {
var DiscussionList=function(t){this._init(t)
_.bindAll(this)}
DiscussionList.prototype._init=function(t){this.complete=false
this.page=0
this.count=0
this.expanderSettings={slicePoint:500,expandText:$._("(more)"),userCollapseText:""}
var s=t.listTemplate||"discussion.discussion-list"
this.templates={list:Templates.get(s),item:Templates.get(t.itemTemplate)}
this.itemKey=t.itemKey||"feedback"
this.$container=$(t.containerSelector)
this.requestURL=t.requestURL
this.params=t.params
this.data=t.data||[]
this.hideHeader=t.hideHeader
this.title=t.title||""
this.titleUrl=t.titleUrl||""
this.limit=t.limit||10
Handlebars.registerPartial("discussion_sorts",Templates.get("discussion.sorts"))
if(t.sorts!==undefined){this.sorts=t.sorts
_.each(this.sorts,_.bind(function(t){if(t.isDefault){this.sortValue=t.value}},this))}else{this.sorts=[{name:$._("Top"),title:$._("Most Voted"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}]}if(t.sortValue){this.sortValue=t.sortValue}this.onSort=t.onSort||$.noop
this.onInitialFetch=t.onInitialFetch||$.noop
this.preRenderTransformData=t.preRenderTransformData||_.identity
this.onFetchComplete=t.onFetchComplete||$.noop
if(!t.preloaded){this._buildHtml()
if(this.data.length){this._append(this.data)}if(this.requestURL){if(t.prefetched){this._fetchSuccess(t.prefetched,this.onInitialFetch)}else{this._fetch(this.onInitialFetch)}}}else{this._attachEvents()}}
DiscussionList.prototype._buildHtml=function(){this.$container.append(this.templates.list({hideHeader:this.hideHeader,title:this.title,titleUrl:this.titleUrl,count:this.count,sorts:this.sorts,questions:{isComplete:true}}))
this._attachEvents()}
DiscussionList.prototype._attachEvents=function(){if(this.sorts){this.$container.find(".discussion-list-sort a").on("click",_.bind(function(t){var s=$(t.target)
s.addClass("selected")
s.siblings().removeClass("selected")
this.sort(s.data("value"))},this))}this.$moreButton=this.$container.find(".discussion-list-more").on("click",_.bind(function(){this.fetchMore()},this))
this.$content=this.$container.find(".discussion-list-content")}
DiscussionList.prototype._reset=function(){this.data=[]
this.$content.html("")
this.complete=false
this.page=0
this.hideMore_()
delete this.cursor
delete this.params.cursor}
DiscussionList.prototype._fetch=function(t){var s=this.params
_.extend(s,{sort:this.sortValue,limit:this.limit})
if("cursor"in this){s.cursor=this.cursor}else{s.page=this.page}return $.ajax({type:"GET",url:this.requestURL,data:s,dataType:"json",success:_.bind(function(s){this._fetchSuccess(s,t)},this)})}
DiscussionList.prototype._fetchSuccess=function(t,s){var i=this.preRenderTransformData(this.getItemsFromData(t))
this.setItemsInData(t,i)
this.data=this.data.concat(i)
if("cursor"in t){this.cursor=t.cursor}this._append(t)
this.setMoreAsLoading_(false)
var e=i.length
this.setCount(this.count+e)
this.onFetchComplete(t)
if(s){s(t)}if("isComplete"in t){this.setComplete(t.isComplete)}else if("complete"in t){this.setComplete(t.complete)}else{this.setComplete(!e)}}
DiscussionList.prototype.fetchMore=function(){if(!this.complete){this.page++
this.setMoreAsLoading_(true)
this._fetch()}}
DiscussionList.prototype.getItemsFromData=function(t){if(_.isArray(t)){return t}else{return t[this.itemKey]}}
DiscussionList.prototype.setItemsInData=function(t,s){if(_.isArray(t)){t=s}else{t[this.itemKey]=s}}
DiscussionList.prototype._append=function(t){var s=this.getItemsFromData(t)
_.each(s,function(t){this.$content.append(this.templates.item(t))},this)
this.prettify_()}
DiscussionList.prototype.sort=function(t){this.sortValue=t
this._reset()
this._fetch()
this.onSort()}
DiscussionList.prototype.showMore_=function(){this.$moreButton.css("display","block")}
DiscussionList.prototype.hideMore_=function(){this.$moreButton.css("display","none")}
DiscussionList.prototype.setMoreAsLoading_=function(t){if(t){this.$moreButton.addClass("disabled").prop("disabled",true).val($._("Loading..."))}else{this.$moreButton.removeClass("disabled").prop("disabled",false).val($._("More"))}}
DiscussionList.prototype.setCount=function(t){this.count=t
this.$container.find(".discussion-list-count").show().find(".discussion-list-count-value").html(t)}
DiscussionList.prototype.setComplete=function(t){this.complete=t
if(this.complete){this.hideMore_()}else{this.showMore_()}}
DiscussionList.prototype.isEmpty=function(){return this.complete&&this.data.length===0}
DiscussionList.prototype.isComplete=function(){return this.complete}
DiscussionList.prototype.prettify_=function(){$(".timeago",this.$content).timeago()
$(".discussion-content",this.$content).expander(this.expanderSettings)}
module.exports=DiscussionList
});
KAdefine("javascript/discussion-package/discussion-list.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_discussion-list"]=module.exports=s(function(s,n,i,e,l){i=i||s.helpers
e=e||s.partials
var a="",t,o,r,c,u=this,f="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(s,n){var e="",l,a
e+='\n    <h2 class="discussion-list-header">\n        '
e+='\n        <a class="no-underline" href="discussion/'
r=i.titleUrl
l=r||s.titleUrl
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"titleUrl",{hash:{}})}e+=d(l)+'">'
r=i.title
l=r||s.title
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"title",{hash:{}})}e+=d(l)+'</a>\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=i["_"]
l=r||s["_"]
c=u.program(2,y,n)
c.hash={}
c.fn=c
c.inverse=u.noop
if(r&&typeof l===f){l=l.call(s,c)}else{l=v.call(s,l,c)}if(l||l===0){e+=l}e+="\n        </span>\n\n        "
r=i.sorts
l=r||s.sorts
a=i["if"]
c=u.program(4,g,n)
c.hash={}
c.fn=c
c.inverse=u.noop
l=a.call(s,l,c)
if(l||l===0){e+=l}e+="\n    </h2>\n"
return e}function y(s,n){var e="",l
e+='(<span class="discussion-list-count-value">'
r=i.count
l=r||s.count
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"count",{hash:{}})}e+=d(l)+"</span> total)"
return e}function g(s,n){var l="",a
l+='\n            <span class="discussion-list-sort">\n                '
a=s
a=u.invokePartial(e.discussion_sorts,"discussion_sorts",a,i,e)
if(a||a===0){l+=a}l+="\n            </span>\n        "
return l}function _(s,n){var e="",l,a
e+="\n                "
r=i.questions
l=r||s.questions
l=l===null||l===undefined||l===false?l:l.feedback
a=i.each
c=u.program(7,q,n)
c.hash={}
c.fn=c
c.inverse=u.noop
l=a.call(s,l,c)
if(l||l===0){e+=l}e+="\n        "
return e}function q(s,n){var l="",a
l+="\n                    "
a=s
a=u.invokePartial(e.discussion_thread,"discussion_thread",a,i,e)
if(a||a===0){l+=a}l+="\n                "
return l}function b(s,n){return'style="display:none"'}function H(s,n){return'style="display:none"'}function k(s,n){return"More"}a+='<div class="discussion-list">\n    '
r=i.hideHeader
t=r||n.hideHeader
o=i.unless
c=u.program(1,m,l)
c.hash={}
c.fn=c
c.inverse=u.noop
t=o.call(n,t,c)
if(t||t===0){a+=t}a+='\n    <div class="discussion-list-content">\n        '
r=i.questions
t=r||n.questions
o=i["if"]
c=u.program(6,_,l)
c.hash={}
c.fn=c
c.inverse=u.noop
t=o.call(n,t,c)
if(t||t===0){a+=t}a+="\n    </div>\n\n    "
a+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=i.questions
t=r||n.questions
o=i.unless
c=u.program(9,b,l)
c.hash={}
c.fn=c
c.inverse=u.noop
t=o.call(n,t,c)
if(t||t===0){a+=t}a+="\n           "
r=i.questions
t=r||n.questions
t=t===null||t===undefined||t===false?t:t.isComplete
o=i["if"]
c=u.program(11,H,l)
c.hash={}
c.fn=c
c.inverse=u.noop
t=o.call(n,t,c)
if(t||t===0){a+=t}a+='\n           value="'
r=i["_"]
t=r||n["_"]
c=u.program(13,k,l)
c.hash={}
c.fn=c
c.inverse=u.noop
if(r&&typeof t===f){t=t.call(n,c)}else{t=v.call(n,t,c)}if(t||t===0){a+=t}a+='">\n</div>\n'
return a})})()
});
KAdefine("javascript/discussion-package/discussion-list-profile-widget.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_discussion-list-profile-widget"]=module.exports=s(function(s,n,i,e,l){i=i||s.helpers
e=e||s.partials
var t="",a,o,r,u,c=this,f="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(s,n){var e="",l,t
e+='\n    <h4 class="profile-widget-section-header">\n        '
e+='\n        <a href="discussion/'
r=i.titleUrl
l=r||s.titleUrl
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"titleUrl",{hash:{}})}e+=d(l)+'">'
r=i.title
l=r||s.title
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"title",{hash:{}})}e+=d(l)+'</a>\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=i["_"]
l=r||s["_"]
u=c.program(2,g,n)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof l===f){l=l.call(s,u)}else{l=v.call(s,l,u)}if(l||l===0){e+=l}e+="\n        </span>\n\n        "
r=i.sorts
l=r||s.sorts
t=i["if"]
u=c.program(4,y,n)
u.hash={}
u.fn=u
u.inverse=c.noop
l=t.call(s,l,u)
if(l||l===0){e+=l}e+="\n    </h4>\n    "
return e}function g(s,n){var e="",l
e+='(<span class="discussion-list-count-value">'
r=i.count
l=r||s.count
if(typeof l===f){l=l.call(s,{hash:{}})}else if(l===h){l=p.call(s,"count",{hash:{}})}e+=d(l)+"</span> total)"
return e}function y(s,n){var l="",t
l+='\n            <span class="discussion-list-sort">\n                '
t=s
t=c.invokePartial(e.discussion_sorts,"discussion_sorts",t,i,e)
if(t||t===0){l+=t}l+="\n            </span>\n        "
return l}function q(s,n){var e="",l,t
e+="\n                "
r=i.questions
l=r||s.questions
l=l===null||l===undefined||l===false?l:l.questions
t=i.each
u=c.program(7,_,n)
u.hash={}
u.fn=u
u.inverse=c.noop
l=t.call(s,l,u)
if(l||l===0){e+=l}e+="\n        "
return e}function _(s,n){var l="",t
l+="\n                    "
t=s
t=c.invokePartial(e.discussion_thread,"discussion_thread",t,i,e)
if(t||t===0){l+=t}l+="\n                "
return l}function b(s,n){return'style="display:none"'}function H(s,n){return'style="display:none"'}function k(s,n){return"More"}t+='\n<div class="discussion-list">\n    '
r=i.hideHeader
a=r||n.hideHeader
o=i.unless
u=c.program(1,m,l)
u.hash={}
u.fn=u
u.inverse=c.noop
a=o.call(n,a,u)
if(a||a===0){t+=a}t+='\n    <div class="discussion-list-content">\n        '
r=i.questions
a=r||n.questions
o=i["if"]
u=c.program(6,q,l)
u.hash={}
u.fn=u
u.inverse=c.noop
a=o.call(n,a,u)
if(a||a===0){t+=a}t+="\n    </div>\n\n    "
t+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=i.questions
a=r||n.questions
o=i.unless
u=c.program(9,b,l)
u.hash={}
u.fn=u
u.inverse=c.noop
a=o.call(n,a,u)
if(a||a===0){t+=a}t+="\n           "
r=i.questions
a=r||n.questions
a=a===null||a===undefined||a===false?a:a.isComplete
o=i["if"]
u=c.program(11,H,l)
u.hash={}
u.fn=u
u.inverse=c.noop
a=o.call(n,a,u)
if(a||a===0){t+=a}t+='\n           value="'
r=i["_"]
a=r||n["_"]
u=c.program(13,k,l)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof a===f){a=a.call(n,u)}else{a=v.call(n,a,u)}if(a||a===0){t+=a}t+='">\n</div>\n'
return t})})()
});
KAdefine("javascript/discussion-package/discussion.js", function(require, requireWithVars, module, exports) {
var HoverCard=require("../shared-package/hover-card.js")
var Analytics=require("../shared-package/analytics.js")
var Discussion={_registered:false,_minHeight:200,init:function(s){this.data=s
this._currentTab=null
if(this.data.container==null){this.data.container=".video-discussion"}this.data.$container=$(this.data.container)
this.data.$container.find(".login-link").attr("href","/login?continue="+encodeURIComponent(this.data.url))
if(KA.language!=="en"){this.data.$container.find(".discussion-i18n-message").attr("href","http://en.khanacademy.org"+window.location.pathname).show()}if(!s.preloaded){this.data.$container.find(".discussion-progress-bar").show()}this.initObjects()
Discussion.Clarifications._fetch()
if(this.data.which==="video-questions"||this.data.which==="article-questions"||this.data.which==="scratchpad-questions"){_(this.tabOb).chain().keys().each(function(e){if(!s.preloaded||e!=="questions"){Discussion.tabOb[e].reset()}})
var e="questions"
if(this.data.expandFeedbackType){e=this.data.expandFeedbackType}else if(this._getTabForHash()){e=this._getTabForHash()}else if(this.data.showDocumentation){e="documentation"}Discussion._switchType(e)}if(this._registered&&!this.data.reset){return}this._registered=true
var i=require("../moderation-package/moderation.js")
i.init()
this.Voting.init(this.data.$container)
this.Note.init()
_(this.feedbackOb).each(_.bind(function(s){if(s.init){s.init(this.data.$container)}},this))
this.data.$container.on("click",".tabitem a",function(s){Discussion.switchTab(this)})
this.data.$container.on("click","[data-tab-target]",function(s){Discussion._switchType($(this).data("tab-target"))})
this.data.$container.on("click",".discussion-list-sort a",function(s){Discussion.sort(this)})
this.data.$container.on("mouseenter",".author-nickname",function(){HoverCard.createHoverCardQtip($(this))})
this.data.$container.on("click",".show-formatting-tips",function(s){Discussion.toggleFormattingTips(Discussion.getParent(this))
s.preventDefault()})
this.data.$container.on("click",".discussion-submit",this.submit).on("click",".discussion-cancel",this.cancel).on("focus",".discussion-text",this.focus)
this.data.$container.on("click",".post-feedback-instead",this.addFeedback).on("click",".ask-question-instead",this.askQuestion)
this.data.$container.add(".discussion-guidelines").on("click",".suggest-clarification",this._switchType.bind(this,"clarifications"))
if(this.data.$container.is(".all-questions, .mod-queue")){this.data.$container.on("click",".youTube, .modal-video",function(s){if(s.metaKey){return}var e=$(this),i,t
if(e.is(".youTube")){i=Math.max(0,e.data("seconds")-2)
t=e.parents(".thread").find(".modal-video")}else{i=null
t=e}PackageManager.require("video.css","video.js").then(function(){ModalVideo.show({translatedTitle:t.data("translatedTitle"),translatedDescription:t.data("translatedDescription"),relative_url:t.attr("href"),youtubeId:t.data("youtubeId"),translatedYoutubeId:t.data("translatedYoutubeId"),timestamp:i})})
return false})}$(window).on("hashchange",this._handleHashUpdate.bind(this))
this._registerTemplates()
delete s["preloaded"]},initObjects:function(){if(this.tabOb&&this.feedbackOb){return}this.tabOb={questions:Discussion.Questions,comments:Discussion.Comments,"spin-offs":Discussion.SpinOffs,documentation:Discussion.Documentation,clarifications:Discussion.Clarifications,projectfeedback:Discussion.ProjectFeedback}
this.feedbackOb={question:Discussion.Questions,answer:Discussion.Answers,comment:Discussion.Comments,reply:Discussion.Replies,scratchpad:{},clarification:{},projecthelp:{},projectcritique:{}}},checkCollectionStatus:function(s,e,i){if(!s._loadComplete){return}if(s._component){var t=s._component.state.collection
if(t.length>0){i()}else{t.on("sync",function(){if(t.length>0){i()}})}}else if(!s.list.isEmpty()&&(!s.userForkList||!s.userForkList.isEmpty())){i()}clearInterval(e)},maybeShowTab:function(s,e){if(s===this._currentTab){return}var i=this.tabOb[s]
var t=setInterval(function(){this.checkCollectionStatus(i,t,function(){$(i._tabHeaderSelector).show()
if(e){e()}})}.bind(this),100)
$(i._tabHeaderSelector).hide()
this.checkCollectionStatus(i,t)
if(!i._loadComplete){i.load()}},_getTabForHash:function(){if(window.location.hash==="#projectcritique"||window.location.hash==="#projecthelp"){return"projectfeedback"}return null},_handleHashUpdate:function(){var s=this._getTabForHash()
if(s){this._switchType(s)}},_finishLoad:function(s){if(s){var e=Discussion.getFeedbackFromKey(s)
if(e.length!==0){if(e.hasClass("comment")){Discussion._switchType("comments")
Discussion.highlight(e,"success")}else{var i=e.parents(".thread")
Discussion.highlight(i,"success")
i.find(".show-answer-links").hide().end().find(".hidden-answers").show()
if(!Discussion.hasAnswered(e)){i.find(".add-answer").show()}}if(Discussion.Replies.getReplyCount(s)||e.hasClass("answer")){Discussion.Replies.toggle(s,true)}$("html, body").animate({scrollTop:e.offset().top-10})}Discussion.data.qaExpandKey=null}Discussion._refreshHeight()
Discussion._enablePlaceholders()
Discussion.hideProgressBar()
$(KA).trigger("contentLoaded")},_refreshHeight:function(){var s=this.data.$container.height()
if(s>Discussion._minHeight){Discussion._minHeight=s
this.data.$container.css("min-height",s)}},_registerTemplates:function(){Handlebars.registerPartial("discussion_thread",Templates.get("discussion.thread"))
Handlebars.registerPartial("discussion_question",Templates.get("discussion.question"))
Handlebars.registerPartial("discussion_answer",Templates.get("discussion.answer"))
Handlebars.registerPartial("discussion_meta-separator",Templates.get("discussion.meta-separator"))
Handlebars.registerPartial("discussion_question-form",Templates.get("discussion.question-form"))
Handlebars.registerPartial("discussion_answer-form",Templates.get("discussion.answer-form"))
Handlebars.registerPartial("discussion_vote-controls",Templates.get("discussion.vote-controls"))
Handlebars.registerPartial("discussion_flag-controls",Templates.get("discussion.flag-controls"))
Handlebars.registerPartial("moderation_mod-controls",Templates.get("moderation.mod-controls"))
Handlebars.registerPartial("discussion_author-controls",Templates.get("discussion.author-controls"))
Handlebars.registerPartial("visit-profile-promo",Templates.get("discussion.visit-profile-promo"))
Handlebars.registerPartial("duplicate-notice",Templates.get("discussion.duplicate-notice"))
Handlebars.registerPartial("discussion_discussion-meta",Templates.get("discussion.discussion-meta"))},_translateFeedbackType:function(s){if(s==="question"){return $._("question")}else if(s==="answer"){return $._("answer")}else if(s==="comment"){return $._("post")}else if(s==="reply"){return $._("comments")}else if(s==="scratchpad"){return $._("scratchpad")}else{return $._("post")}},sort:function(s){var e=$(s)
if(e.hasClass("selected")){return}Discussion.showProgressBar()
e.addClass("selected").siblings().removeClass("selected")
this.tabOb[this._currentTab].sort(e.data("value"))
Analytics.trackSingleEvent("Changed Video Discussion's Tab Sort")},switchTab:function(s){var e=$(s).parents(".tabitem"),i=e.data("type")
return this._switchType(i)},_switchType:function(s){if(s===this._currentTab){return $.Deferred().resolve().promise()}return function(){var e=$.Deferred()
if(s==="clarifications"){$(".video-discussion-header [data-type=clarifications]").fadeIn("fast",e.resolve)}else{e.resolve()}return e}().done(function(){Discussion.showProgressBar()
this._currentTab=s
Discussion._showTabBody(s)
Discussion._showTabSorts(s)
Analytics.trackSingleEvent("Changed Video Discussion's Tab")}.bind(this))},_showTabBody:function(s){var e
_(this.tabOb).chain().keys().each(function(t){i=Discussion.tabOb[t]
if(t===s){e=i.sortValue
i.show()}else{i.hide()}})
this.data.$container.parent().toggleClass("nosidebar",s==="spin-offs"||s==="documentation")
this.data.$container.parent().toggleClass("nouserforks",s!=="spin-offs"||KA.isPhantom())
var i=".tabitem[data-type="+s+"]"
this.data.$container.find(i).addClass("selected").siblings().removeClass("selected")},_showTabSorts:function(s){var e=this.tabOb[s],i=this.data.$container.find(".discussion-list-sort")
if(e.list){var t=Templates.get("discussion.sorts")
i.html(t({sorts:e.list.sorts}))}else{i.empty()}},getKey:function(s){return s.attr("id")},getFeedbackFromKey:function(s){return $("#"+s)},getParent:function(s){return $(s).parent().closest([".reply",".answer",".question",".comment",".scratchpad-vote",".clarification"].join(","))},getParentType:function(s){return Discussion._getFeedbackType(Discussion.getParent(s))},_getFeedbackType:function(s){var e=_(Discussion.feedbackOb).chain().keys().find(_(s.hasClass).bind(s)).value()
return e||null},focus:function(){var s=Discussion.getParent(this)
Discussion.DuplicateNotice.removeAll(s)
var e=Discussion._getFeedbackType(s)
if(Discussion.Note.checkNeedsLogin(this,e)){$(this).blur()
return false}var i=s.parent()
if(i.hasClass("ask-question")||i.hasClass("post-feedback")||i.hasClass("officialClarificationView")){Discussion._revealGuidelines(i)
Discussion._startEditing(s,true)}else{Discussion._startEditing(s)}Discussion.ProfilePromo.check()},focusWithoutScrolling:function(s){var e=window.scrollX,i=window.scrollY
s.focus()
window.scrollTo(e,i)},_revealGuidelines:function(s){s.find(".post-guidelines").slideDown(function(){Discussion.scrollDownToReveal(s)})},scrollDownToReveal:function(s){var e=10
var i=s.offset().top+s.height()+e
var t=$(window)
if(t.scrollTop()<s.offset().top&&t.scrollTop()+t.height()<i){var n=i-t.height()
if(t.height()<s.height()){n=s.offset().top}$("body, html").animate({scrollTop:n+"px"})}},edit:function(s){var e=Discussion.getParent(s)
if(!e.length){return}e.addClass("discussion-edit")
var i=$(".discussion-content:first",e)
i.expander("destroy")
var t=i.html()
t=t.replace(/<em>(.*?)<\/em>/g,function(s,e){return"_"+e+"_"})
t=t.replace(/<b>(.*?)<\/b>/g,function(s,e){return"*"+e+"*"})
t=t.replace(/<pre><code>(.*?)<\/code><\/pre>/g,function(s,e){return"```\n"+e+"\n```"})
t=t.replace(/<code>(.*?)<\/code>/g,function(s,e){return"`"+e+"`"})
var n=/<br>/gi
t=t.replace(n,"\n")
var a=$("<div>").html(t)
var o=a.text()
var r=$("<textarea>",{"class":"discussion-text open"})
r.css("height",i.height()+8)
r.val($.trim(o))
i.hide().after(r)
$(".from-video-author",e).hide()
$(".discussion-scratchpad-thumbnail",e).hide()
$(".discussion-embed-video",e).hide()
Discussion._setTabIndex(r)
_.defer(function(){r.focus()})
Discussion._showControls(e)
$(".discussion-meta:first",e).hide()},submit:function(){var s=Discussion.getParentType(this)
Discussion.feedbackOb[s]._onSubmit(this)},_onSubmit:function(s,e){Discussion._showThrobber(e)
Discussion._disableControls(e)},_onSubmitSuccess:function(s,e,i,t){if(s==="question"||s==="answer"){if(Discussion.LowQualityNotice.init(s,e,i,t)){Discussion._hideThrobber(e)
Discussion._enableControls(e)
return false}}Discussion._stopEditing(e,s==="answer"&&!t)
Discussion._trackAddFeedbackEvent(s,t,i["lowQualityScore"],i["appearsAsDeleted"],i["authorUserId"])
return true},setHasAnswered:function(s,e){s.parents(".thread").toggleClass("has-answered",e)},hasAnswered:function(s){return s.parents(".thread").hasClass("has-answered")},toggleFormattingTips:function(s){if(!s.find(".formatting-tips-container").length){var e=Templates.get("discussion.formatting-tips")
s.find(".discussion-controls").append(e({}))}s.find(".formatting-tips-container").slideToggle(300)},cancel:function(){return Discussion._cancel(Discussion.getParent(this))},_cancel:function(s){s.removeClass("discussion-edit")
if(!Discussion.getKey(s)){Discussion._stopEditing(s)}else{$(".from-video-author",s).show()
$(".discussion-scratchpad-thumbnail",s).show()
$(".discussion-embed-video",s).show()
$(".discussion-content",s).show()
$(".discussion-meta",s).show()
$(".discussion-text:first",s).remove()
Discussion._enableControls(s)
Discussion._hideControls(s)}Discussion.LowQualityNotice.hide(s)
return false},addFeedback:function(s){Discussion._cancel($(".ask-question .question"))
$(".ask-question .question-guidelines").promise().done(function(){Discussion._switchType("comments")
$(".post-feedback .discussion-text").focus()})
return false},askQuestion:function(s){Discussion._cancel($(".post-feedback .comment"))
$(".post-feedback .feedback-guidelines").promise().done(function(){Discussion._switchType("questions")
$(".ask-question .discussion-text").focus()})
return false},remove:function(s){var e=Discussion.getParent(s)
if(e.hasClass("question")){var i=e.parent(".thread")
if(i.length>0){e=i}}e.delay(100).animate({height:0,opacity:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},300,function(){e.remove()})},prependFeedback:function(s,e){return s.find(".timeago").timeago().end().prependTo(e)},appendFeedback:function(s,e){return s.find(".timeago").timeago().end().appendTo(e)},replaceFeedback:function(s,e){e.find(".timeago").timeago()
s.replaceWith(e)},sendRequest:function(s,e,i,t){s+="?casing=camel"
$.ajax({type:e,url:s,contentType:"application/json",data:i,dataType:"json",success:t})},getSanitizedText:function(s){var e=$(".discussion-text",s)
if(e.length===0){return false}var i=$.trim(e.val())
if(i===""||i===e.data("placeholder")){return false}return i},_enablePlaceholders:function(){this.data.$container.find(".discussion-text").placeholder()},_hidePlaceholder:function(s){s.data("placeholder",s.attr("placeholder"))
s.attr("placeholder","")},_showPlaceholder:function(s){s.attr("placeholder",s.data("placeholder"))},_setTabIndex:function(s){s.attr("tabindex","1")},_clearTabIndex:function(s){s.removeAttr("tabindex")},_showControls:function(s,e){var i=$(".discussion-controls:first",s)
i.slideDown(100).promise().done(function(){if(!e){Discussion.scrollDownToReveal(i)}})},_hideControls:function(s){$(".discussion-controls:first",s).hide()},_enableControls:function(s){$(".discussion-text",s).removeAttr("disabled")
$(".discussion-submit",s).removeAttr("disabled")},_disableControls:function(s){$(".discussion-text",s).attr("disabled","disabled")
$(".discussion-submit",s).attr("disabled","disabled")},_showThrobber:function(s){Throbber.show(s.find(".discussion-cancel"),true)},_hideThrobber:function(s){Throbber.hide(s.find(".discussion-cancel"),true)},_startEditing:function(s,e){var i=$(".discussion-text:first",s)
Discussion._hidePlaceholder(i)
i.addClass("open")
Discussion._showControls(s,e)
if(!s.is(".newClarification")){Discussion._setTabIndex(i)}},_stopEditing:function(s,e){Discussion._hideThrobber(s)
Discussion._hideControls(s)
if(e){Discussion.setHasAnswered(s,true)}Discussion._enableControls(s)
var i=$(".discussion-text:first",s)
Discussion._showPlaceholder(i)
i.val("").removeClass("open").css("height","").blur()
var t=s.parent()
if(t.hasClass("ask-question")||t.hasClass("post-feedback")||t.hasClass("officialClarificationView")){t.find(".post-guidelines").slideUp()}else if(s.hasClass("reply")){Discussion.Replies.normalBlur(s)}Discussion._clearTabIndex(i)},highlight:function(s,e){s.addClass("highlight")
s.switchClass("",e+"-highlight",400)},unhighlight:function(s,e){s.switchClass(e+"-highlight","",400)},_trackAddFeedbackEvent:function(s,e,i,t,n){Analytics.trackSingleEvent("Added Feedback",{"Feedback Type":s,"Post Type":e?"Edit":"New","Low-Quality Score":i,"Appears as deleted":t,"Author's user_id":n})},showProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").show()}},hideProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").hide()}},transformFeedback:function(s){_.extend(s,{isQuestion:s.type==="question",isAnswer:s.type==="answer",isComment:s.type==="comment",isReply:s.type==="reply",isScratchpad:s.type==="scratchpad",isClarification:s.type==="clarification"})
if(!s.isReply&&!s.isScratchpad){s.expandKey=s.key}if(s.isScratchpad){s.focus={relativeUrl:s.relativeUrl,title:s.title}
s.type="program"
s.key=s.strKey}else if(s.isClarification){}else{if(Discussion.feedbackOb[s.type].transform){s=Discussion.feedbackOb[s.type].transform(s)}Discussion._embedScratchpadImage(s)}var e=KA.getUserProfile()
s.showModControls=e&&e.get("isModerator")
s.isDeveloper=Discussion.data.isDeveloper
s.restrictPosting=Discussion.data.restrictPosting
return s},_embedYoutubeVideo:function(s){if(!s.fromVideoAuthor){return}var e=/\bhttps?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)\b/g,i=e.exec(s.content),t=i&&i[1]
if(t){s.embedVideoUrl="https://www.youtube.com/embed/"+t}},_embedScratchpadImage:function(s){PackageManager.require("scratchpad-base.js").then(function(){var e=/\/cs\/[^\/]+\/(\d+)\b/g,i=e.exec(s.content),t=i&&i[1]
if(t){var n=new window.Scratchpad({id:t})
n.fetch({success:function(){var e=s.key,i=$("#"+e+" .discussion-content")
$("#"+e+" .discussion-scratchpad-thumbnail").remove()
var t=Templates.get("discussion.scratchpad-thumbnail"),a=$(t(n.toJSONForTemplate()))
a.insertBefore(i)}})}})}}
$(window).unload(function(){(function(s){s(function(){if(typeof __flash__removeCallback!=="undefined"){__flash__removeCallback=function(s,e){if(s!=null&&e!=null){s[e]=null}}}})})(jQuery)})
module.exports=Discussion
});
KAdefine("javascript/discussion-package/discussion-questions.js", function(require, requireWithVars, module, exports) {
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
Discussion.Questions={_loadComplete:false,sortValue:1,_containerSelector:".questions",_tabSelector:".questions-tab",_tabHeaderSelector:"#questions-tab-header",init:function(s){s.on("click",".show-hidden-answers",function(){Discussion.Questions.showHiddenAnswers($(this).parents(".thread"))}).on("click",".show-answer-form",function(){Discussion.Questions.showHiddenAnswers($(this).parents(".thread"),true)})},_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var n=Discussion.getKey(i)
var t=Discussion.getSanitizedText(i)
if(!t){return false}var o=JSON.stringify({text:t,shownLowQualityNotice:Discussion.LowQualityNotice.exists(i)})
var a=i.parents(".thread").data("focusId")||Discussion.data.focusId
var r=i.parents(".thread").data("focusKind")||Discussion.data.focusKind
var c="/api/v1/discussions/"+r+"/"+a+"/questions",u="POST"
if(n){c+="/"+n
u="PUT"}Discussion.sendRequest(c,u,o,function(s){Discussion.Questions._onSubmitSuccess(s,i)})
Discussion._onSubmit("question",i)},_onSubmitSuccess:function(s,e){var i=s["key"],n=Discussion.getFeedbackFromKey(i),t=n.length>0
if(!Discussion._onSubmitSuccess("question",e,s,t)){return}s=Discussion.transformFeedback(s)
if(!t){var o=Templates.get("discussion.thread")
Discussion.ProfilePromo.show(s,true)
var a=$(o(s))
Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))
$(".discussion-text",a).placeholder()}else{var o=Templates.get("discussion.question")
Discussion.replaceFeedback(n,$(o(s)))}},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="questions"){s=Discussion.data.qaExpandKey}var e="/api/v1/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/questions",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:"discussion.thread",containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:this.transformDataBeforeRender,preloaded:Discussion.data.preloaded})
if(Discussion.data.preloaded){this._finishLoad(Discussion.data)}},_finishLoad:function(s){Discussion.Questions._loadComplete=true
Discussion._finishLoad(s.qaExpandKey)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){s.expandKey=s.key
var e=s.answers.length
s.answerCount=e
if(e>0){s.expandedAnswers=[s.answers[0]]
s.answers.shift()
if(e>1){s.hasHiddenAnswers=true}}_.each(s.expandedAnswers,Discussion.transformFeedback)
_.each(s.answers,Discussion.transformFeedback)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")},showHiddenAnswers:function(s,e){s.find(".show-answer-links").hide().end().find(".hidden-answers").show()
var i=s.find(".add-answer")
i.show()
if(e){var n=$(".discussion-text",i)
Discussion.focusWithoutScrolling(n)}else{Discussion.scrollDownToReveal(s)}Analytics.trackSingleEvent("Expanded Hidden Answers in Video Discussion")}}
});
KAdefine("javascript/discussion-package/discussion-answers.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Answers={init:function(s){Discussion.DuplicateNotice.init(s)},_onSubmit:function(s){var i=$(s),e=Discussion.getParent(i),n=$(".question",e.parents(".thread"))
var o=Discussion.getKey(n)||e.data("questionKey"),t=Discussion.getKey(e)
var u=Discussion.getSanitizedText(e)
if(!u){return false}var c=JSON.stringify({text:u,shownLowQualityNotice:Discussion.LowQualityNotice.exists(e),fromVideoAuthor:e.find(".from-video-author").is(":checked")})
Discussion.DuplicateNotice.removeAll(n)
if(!t&&Discussion.DuplicateNotice.show(u,e)){Discussion.cancel.call(i)
return}var r="/api/v1/questions/"+o+"/answers",a="POST"
if(t){r+="/"+t
a="PUT"}Discussion.sendRequest(r,a,c,function(s){Discussion.Answers._onSubmitSuccess(s,e)})
Discussion._onSubmit("answer",e)},_onSubmitSuccess:function(s,i){var e=s["key"],n=Discussion.getFeedbackFromKey(e),o=n.length>0
if(!Discussion._onSubmitSuccess("answer",i,s,o)){return}Discussion.setHasAnswered(i,true)
s=Discussion.transformFeedback(s)
var t=Templates.get("discussion.answer"),u=$(t(s))
Discussion.ProfilePromo.show(s,false)
if(!o){var c=Discussion.getFeedbackFromKey(s["questionKey"]).parents(".thread").find(".answers")
c.removeClass("with-no-answers")
Discussion.appendFeedback(u,c)}else{Discussion.replaceFeedback(n,u)}},transform:function(s){Discussion._embedYoutubeVideo(s)
return s}}
});
KAdefine("javascript/discussion-package/discussion-comments.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
Discussion.Comments={_loadComplete:false,sortValue:1,_containerSelector:".comments",_tabSelector:".comments-tab",_tabHeaderSelector:"#comments-tab-header",_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var t=Discussion.getKey(i)
var n=Discussion.getSanitizedText(i)
if(!n){return false}var o=JSON.stringify({text:n})
var a=i.data("focusId")||Discussion.data.focusId
var c=i.data("focusKind")||Discussion.data.focusKind
var r="/api/v1/discussions/"+c+"/"+a+"/comments",u="POST"
if(t){r+="/"+t
u="PUT"}Discussion.sendRequest(r,u,o,function(s){Discussion.Comments._onSubmitSuccess(s,i)})
Discussion._onSubmit("comment",i)},_onSubmitSuccess:function(s,e){var i=s["key"],t=Discussion.getFeedbackFromKey(i),n=t.length>0
if(!Discussion._onSubmitSuccess("comment",e,s,n)){return}s=Discussion.transformFeedback(s)
var o=Templates.get("discussion.comment"),a=$(o(s))
if(!n){Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))}else{Discussion.replaceFeedback(t,a)}},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="comments"){s=Discussion.data.qaExpandKey}var e="/api/v1/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/comments",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:"discussion.comment",containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:_.bind(function(s){return this.transformDataBeforeRender(s)},this)})},_finishLoad:function(s){Discussion.Comments._loadComplete=true
Discussion._finishLoad(s.qaExpandKey)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){Discussion._embedYoutubeVideo(s)
Discussion._embedScratchpadImage(s)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")}}
});
KAdefine("javascript/discussion-package/discussion-replies.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Replies={_slideRate:200,Model:Backbone.Model.extend({defaults:{content:""}}),View:Backbone.View.extend({initialize:function(){this.template=Templates.get("discussion.reply")},render:function(){this.el=this.template(this.model.toJSON())
return this}}),init:function(e){e.on("click",".toggle-replies",function(){var e=Discussion.getParent(this),s=Discussion.getKey(e)
Discussion.Replies.toggle(s)})},_onSubmit:function(e){var s=$(e),i=Discussion.getParent(s),n=Discussion.getSanitizedText(i),t=Discussion.getParent(i),o=Discussion.getKey(t)
if(!n){return false}var l="/api/v1/discussions/"+o+"/replies",r="POST",a=JSON.stringify({text:n})
Discussion._onSubmit("reply",i)
Discussion.sendRequest(l,r,a,function(e){var s=Discussion.Replies._getRepliesContainer(o).find(".replies")
Discussion.Replies._render(e).css("opacity",0).appendTo(s).animate({opacity:1})
Discussion.Replies.incrementReplyCount(o)
Discussion._onSubmitSuccess("reply",i,e)})},decrementReplyCount:function(e){Discussion.Replies._updateReplyCount(e,-1)},incrementReplyCount:function(e){Discussion.Replies._updateReplyCount(e,1)},_updateReplyCount:function(e,s){var i=Discussion.Replies._getToggleButton(e),n=Discussion.Replies.getReplyCount(e)
n+=s
i.data("replyCount",n)
if(n===0){i.text($._("Comment"))}else{i.text($.ngettext("%(num)s Comment","%(num)s Comments",n))}},transform:_.identity,toggle:function(e,s){var i=Discussion.Replies._getToggleButton(e)
if(i.hasClass("show-replies")){if(!i.data("hasFetched")){i.data("hasFetched",true)
Discussion.Replies._renderContainer(e,s)
Discussion.Replies._fetch(e)}else{Discussion.Replies._getRepliesContainer(e).slideDown(Discussion.Replies._slideRate,function(){Discussion.Replies._revealReplies(e)})}}else{Discussion.Replies._getRepliesContainer(e).slideUp(Discussion.Replies._slideRate)}i.toggleClass("show-replies").toggleClass("hide-replies")},_fetch:function(e){var s="/api/v1/discussions/"+e+"/replies"+"?casing=camel"
$.ajax({type:"GET",url:s,contentType:"application/json",dataType:"json",success:_.bind(Discussion.Replies._renderReplies,this,e)})},_replyFormTemplate:null,getReplyFormTemplate:function(){if(this._replyFormTemplate===null){this._replyFormTemplate=Templates.get("discussion.reply-form")}return this._replyFormTemplate},_repliesContainerTemplate:null,getRepliesContainerTemplate:function(){if(this._repliesContainerTemplate===null){this._repliesContainerTemplate=Templates.get("discussion.replies-container")}return this._repliesContainerTemplate},_renderContainer:function(e,s){var i=this.getReplyCount(e),n=this.getRepliesContainerTemplate(),t=n({replyCount:i}),o=$(t),l=o.find(".replies"),r=o.find(".add-reply")
Discussion.getFeedbackFromKey(e).append(o)
o.find(".loading").slideDown(Discussion.Replies._slideRate).find(".discussion-item").delay(200).animate({opacity:1})
if(!Discussion.data.restrictPosting){if(i>20&&Discussion.data.which!=="scratchpad-questions"){r.hide()
r.append("<div class='replies-closed'>"+$._("Comments on this post are closed.")+"</div>")
return}var a=this.getReplyFormTemplate()
r.hide()
var u=r.append(a({})).find(".discussion-text")
var c=Discussion.getParentType(o)
if(Discussion.Replies._usesReplyAltInterface(r)){var p=Discussion.Replies._isOriginalAuthor(Discussion.getParent(r))
var d=r.find(".discussion-text-dummy")
$.each([u,d],function(){Discussion.Replies._setPlaceholder($(this),c,p)})
u.hide()
var f=r.find(".choose-reply-alt")
if(p){f.val($._("Edit your %(parentType)s",{parentType:$._(c)}))
f.on("click",this.editParentPost)}else{f.val($._("Answer this question"))
f.on("click",this.answerQuestion)}d.on("focus",this.normalFocus)
r.find(".reply-alt-controls").show()
if(i===0){r.slideDown(Discussion.Replies._slideRate)}}else{Discussion.Replies._setPlaceholder(u,c,false)
if(i===0){r.show()
if(!s){Discussion.focusWithoutScrolling(u)
Discussion.scrollDownToReveal(o)}}}}},_renderReplies:function(e,s){var i=this._getRepliesContainer(e),n=i.find(".replies"),t=i.find(".add-reply")
n.find(".loading").remove()
_.each(s,function(e){Discussion.Replies._render(e).appendTo(n).slideDown(Discussion.Replies._slideRate)})
t.slideDown(Discussion.Replies._slideRate,function(){Discussion.Replies._revealReplies(e)})},_render:function(e){var s=new Discussion.Replies.Model(Discussion.transformFeedback(e)),i=new Discussion.Replies.View({model:s})
return $(i.render().el).find(".timeago").timeago().end()},_revealReplies:function(e){var s=Discussion.Replies._getRepliesContainer(e)
Discussion.scrollDownToReveal(s)},editParentPost:function(){var e=Discussion.getParent(Discussion.getParent(this))
if(!e.hasClass("discussion-edit")){Discussion.edit(e.find(".discussion-content")[0])}},answerQuestion:function(){if(Discussion.Note.checkNeedsLogin(this,"answer")){return}var e=Discussion.getParent(Discussion.getParent(this))
Discussion.Replies.toggle(Discussion.getKey(e))
Discussion.Questions.showHiddenAnswers(e.parents(".thread"),true)},normalFocus:function(){if(Discussion.Note.checkNeedsLogin(this,"reply")){$(this).blur()
return}var e=Discussion.getParent(this)
e.find(".reply-alt-controls").hide()
e.find(".discussion-text").show().focus()},normalBlur:function(e){if(Discussion.Replies._usesReplyAltInterface(e)){e.find(".reply-alt-controls").show()
e.find(".discussion-text").hide()}},_setPlaceholder:function(e,s,i){var n=""
if(s==="question"){if(i){n=$._("Comment on your question...")}else{n=$._("Suggest a way to improve this question...")}}else if(s==="comment"){if(i){n=$._("Comment on your tip/feedback...")}else{n=$._("Comment on this tip/feedback...")}}else if(s==="answer"){if(i){n=$._("Comment on your answer...")}else{n=$._("Comment on this answer...")}}e.attr("placeholder",n).placeholder()},_usesReplyAltInterface:function(e){var s=Discussion.getParent(e)
var i=Discussion.hasAnswered(s)
var n=Discussion.getParentType(e)
var t=Discussion.Replies._isOriginalAuthor(s)
return!!(t&&(n==="answer"||n==="question")||n==="question"&&!i)},_getRepliesContainer:function(e){return Discussion.getFeedbackFromKey(e).find(".replies-container")},_getToggleButton:function(e){return Discussion.getFeedbackFromKey(e).find(".toggle-replies")},getReplyCount:function(e){return Discussion.Replies._getToggleButton(e).data("replyCount")},_isOriginalAuthor:function(e){return e.hasClass("is-author")}}
});
KAdefine("javascript/discussion-package/discussion-voting.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Voting={init:function(t){t.on("click",".vote-for-js",Discussion.Voting.voteEntity).on("mouseover",".vote-for-js",Discussion.Voting._activateHover).on("mouseout",".vote-for-js",Discussion.Voting._deactivateHover)},voteEntity:function(t){if(Discussion.Note.checkNeedsLogin(this,"vote")){return false}var e=$(this)
var o=e.data("voteType")
if(!o){return false}var s=e.data("key")
if(!s){return false}var i=e.is(".voted")
var n=e.parents(".comment, .answer, .question, .scratchpad-vote").first()
var a=n.find(".sum-votes")
$.post("/api/v1/discussions/voteentity",{entity_key:s,vote_type:i?0:o},function(t){Discussion.Voting.finishVoteEntity(t,e,n,a)})
var r=Discussion.Voting.clearVote(e,n,a)
r+=i?0:o
Discussion.Voting.setVoteCount(n,a,r)
a.addClass("sum-votes-changed")
if(!i){e.addClass("voted")}e.removeClass("vote-hover")
return false},_activateHover:function(t){$(this).addClass("vote-hover")},_deactivateHover:function(t){$(this).removeClass("vote-hover")},setVoteCount:function(t,e,o){e.html($.ngettext("1 Vote","%(num)s Votes",o))},clearVote:function(t,e,o){var s=parseInt(o.text(),10)
e.find(".vote-for.voted").each(function(){var t=$(this)
t.removeClass("voted")
s-=t.data("voteType")})
o.removeClass("sum-votes-changed")
Discussion.Voting.setVoteCount(e,o,s)
return s},finishVoteEntity:function(t,e,o,s){if(t&&t.error){Discussion.Voting.clearVote(e,o,s)
Discussion.Note.showInfo(e.get(0),t.error)}}}
});
KAdefine("javascript/discussion-package/clarifications.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Clarifications={_tabSelector:".clarifications-tab",_areaMount:null,_popupMount:null,_renderDeferred:$.Deferred(),_official:null,_suggested:null,_videoView:null,reset:function(){if(this._areaMount){React.unmountComponentAtNode(this._areaMount)}if(this._popupMount){React.unmountComponentAtNode(this._popupMount)}this._loadComplete=false
this._renderDeferred=$.Deferred()
$(this._containerSelector).html("")},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._areaMount=$("<div>").appendTo(".clarifications-tab .clarifications")[0]
Discussion.Clarifications._fetchSuggested()
$.when(PackageManager.require("react.js"),Discussion.Clarifications._renderDeferred).done(function(){React.renderComponent(Discussion.Clarifications._area,this._areaMount)
Discussion.hideProgressBar()
this._loadComplete=true
var i=Discussion.Clarifications._suggested.get(Discussion.data.qaExpandKey)
if(i){i.set({highlight:"success",replyCountOpen:true})}}.bind(this))},_fetchSuggested:function(){if(!Discussion.Clarifications._suggested){this._fetchWhenReady=true
return}function i(){Discussion.Clarifications._renderDeferred.resolve(true)}Discussion.Clarifications._suggested.fetch({success:i,error:i})},_fetch:function(){if(window.Tutorial===undefined||window.Tutorial.Nav.currentContext===undefined){return}var i=_(Tutorial.Nav.currentContext.contentModels).find(function(i){return i.get("readableId")===Discussion.data.focusId})
if(i&&Discussion.data.focusKind==="video"){var e=window.videoViews.getWhenReadyDeferred(i.get("youtubeId")),s=PackageManager.require("clarifications.js")
$.when(e,s).done(function(i,e){Discussion.Clarifications._videoView=i
Discussion.Clarifications._official=new e.OfficialClarificationCollection([],{videoView:i})
Discussion.Clarifications._official.fetch()
Discussion.Clarifications._suggested=new e.SuggestedClarificationCollection([],{videoView:i})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){Discussion.Clarifications._fetchSuggested()}Discussion.Clarifications._popupMount=$("<div>").appendTo(i.$(".youtube-video"))[0]
var s=e.ClarificationNotifications({collection:Discussion.Clarifications._official,videoView:i})
React.renderComponent(s,Discussion.Clarifications._popupMount)
Discussion.Clarifications._area=new e.ClarificationArea({videoView:i,official:Discussion.Clarifications._official,suggested:Discussion.Clarifications._suggested})})}else if(Discussion.data.focusKind==="article"){PackageManager.require("clarifications.js").then(function(i){Discussion.Clarifications._suggested=new i.SuggestedClarificationCollection([],{articleId:Discussion.data.focusId})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){Discussion.Clarifications._fetchSuggested()}Discussion.Clarifications._area=new i.ClarificationArea({articleId:Discussion.data.focusId,suggested:Discussion.Clarifications._suggested})})}}}
});
KAdefine("javascript/discussion-package/discussion-projectfeedback.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.ProjectFeedback={_loadComplete:false,_tabSelector:".projectfeedback-tab",subTab:"projectfeedback",_tabHeaderSelector:"#projectfeedback-tab-header",_componentMount:null,show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(e){this.sortValue=e
this.reset()
this.load(0,this.sortValue)},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._componentMount=$("<div>").appendTo(".projectfeedback-tab .projectfeedback")[0]
PackageManager.require("react.js").then(function(){return PackageManager.require("clarifications.js")}).then(function(e){var t
if(Discussion.data.expandFeedbackType==="projectfeedback"){t=Discussion.data.qaExpandKey}this._component=React.renderComponent(e.ProjectFeedbackArea({scratchpadId:Discussion.data.focusId,expandKey:t,canRequestFeedback:Discussion.data.canRequestFeedback}),this._componentMount)
Discussion.hideProgressBar()
this._loadComplete=true}.bind(this))},reset:function(){if(this._componentMount){React.unmountComponentAtNode(this._componentMount)}this._loadComplete=false
$(this._containerSelector).html("")}}
});
KAdefine("javascript/discussion-package/note.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_note"]=module.exports=n(function(n,e,i,o,s){i=i||n.helpers
var l="",r,a,t,c,f=this,p="function",h=i.helperMissing,u=void 0,g=this.escapeExpression,d=i.blockHelperMissing
function v(n,e){var o="",s,l
o+='\n        <a class="login-link" href="'
t=i.loginContinueUrl
s=t||n.loginContinueUrl
t=i.toLoginRedirectHref
l=t||n.toLoginRedirectHref
if(typeof l===p){s=l.call(n,s,{hash:{}})}else if(l===u){s=h.call(n,"toLoginRedirectHref",s,{hash:{}})}else{s=l}o+=g(s)+'">'
t=i["_"]
s=t||n["_"]
c=f.program(2,m,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof s===p){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){o+=s}o+="</a>\n    "
return o}function m(n,e){return"Log in first"}function H(n,e){return"Close"}l+='<div class="note">\n    '
t=i.loginContinueUrl
r=t||e.loginContinueUrl
a=i["if"]
c=f.program(1,v,s)
c.hash={}
c.fn=c
c.inverse=f.noop
r=a.call(e,r,c)
if(r||r===0){l+=r}l+='\n\n    <span class="note-description"></span>\n    <a href="javascript:void(0);" class="close-note">'
t=i["_"]
r=t||e["_"]
c=f.program(4,H,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof r===p){r=r.call(e,c)}else{r=d.call(e,r,c)}if(r||r===0){l+=r}l+="</a>\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/discussion-note.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Note={template_:Templates.get("discussion.note"),$notes_:$([]),init:function(){},checkNeedsLogin:function(t,e){var o=KA.getUserProfile(),s=o&&!o.isPhantom()
if(!s){var i=$._("to perform this operation.")
if(e==="question"){i=$._("to ask your question.")}else if(e==="answer"){i=$._("to answer this question.")}else if(e==="reply"){i=$._("to comment on this post.")}else if(e==="comment"){i=$._("to add a tip or thanks.")}else if(e==="flag"){i=$._("to flag this item.")}else if(e==="vote"){i=$._("to vote.")}this.show_(t,i,true,function(t){_.defer(function(){$(t).find(".login-link").focus()})})
return true}else{return false}},showInfo:function(t,e){this.show_(t,e,false)},closeAll:function(){this.$notes_.remove()
this.$notes_=$([])},close_:function(t){var e=$(t.target).parents(".note")
e.remove()
this.$notes_=this.$notes_.not(e)
return false},show_:function(t,e,o,s){if(!t){return}var i=$(t),n=i.offset()
var r=null
if(o){r=window.location.pathname+window.location.search}var u=$(this.template_({loginContinueUrl:r})).find(".note-description").text(e).end().on("click",".close-note",this.close_).appendTo("body")
u.css({left:n.left+i.outerWidth(true)/2-u.outerWidth(true)/2,top:n.top+i.outerHeight(true)/2-u.outerHeight(true)/2})
this.$notes_=this.$notes_.add(u)
if(s){s()}}}
_.bindAll(Discussion.Note)
});
KAdefine("javascript/discussion-package/discussion-profilepromo.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.ProfilePromo={name_:"visit_profile_after_post",shouldShow_:false,check:function(){Promos.hasUserSeen(this.name_,function(o){this.shouldShow_=!o},this)},show:function(o,s){if(this.shouldShow_){_.extend(o,{showProfilePromo:true,profileRoot:KA.getUserProfile().get("profileRoot"),askedQuestion:s})
Promos.markAsSeen(this.name_)}}}
});
KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, requireWithVars, module, exports) {
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
Discussion.LowQualityNotice={init:function(e,i,t,o){if(t["showLowQualityNotice"]){var s=Discussion.LowQualityNotice.getFormContainer_(t,e)
Discussion.LowQualityNotice.show(s,e,t["translatedFeedbackEditTip"],t["lowQualityScore"])
Discussion.LowQualityNotice.trackShownLowQualityEvent_(e,o,t["lowQualityScore"],t["authorUserId"])
return true}if(Discussion.LowQualityNotice.exists(i)){var a=Discussion.LowQualityNotice.getScore(i),c=t["lowQualityScore"]
Discussion.LowQualityNotice.trackResubmittedEvent(i,a,c,e,o,t["authorUserId"])
Discussion.LowQualityNotice.hide(i)}return false},show:function(e,i,t,o){if(t){t=$._("Tip: %(translatedFeedbackEditTip)s",{translatedFeedbackEditTip:t})}var s=$(Templates.get("discussion.low-quality-notice-header")({translatedFeedbackType:Discussion._translateFeedbackType(i)}))
var a=$(Templates.get("discussion.low-quality-notice-footer")({translatedFeedbackEditTip:t}))
var c=100
e.switchClass("","low-quality-notice",c)
try{e.find(".discussion-text:first").focus()}catch(n){}setTimeout(function(){var i={opacity:0,height:0}
e.prepend(s)
var o=s.height()
s.css(i).animate({opacity:1,height:o},"slow")
var c=e.find(".discussion-controls:first")
if(t){a.insertBefore(c)
var n=a.height()
a.css(i).animate({opacity:1,height:n},"slow")}a.promise().done(function(){Discussion.scrollDownToReveal(c)})},c)
Discussion.LowQualityNotice.setScore(e,o)},getFormContainer_:function(e,i){var t
var o=e["feedbackKey"]
if(o){t=Discussion.getFeedbackFromKey(e["feedbackKey"])}else if(i==="answer"){var s=Discussion.getFeedbackFromKey(e["questionKey"]).parents(".thread")
t=$(".answer:not([id])",s)}else if(i==="suggested-clarification"){t=$(".newClarification")}else{t=$(".question:not([id])")}return t},trackShownLowQualityEvent_:function(e,i,t,o){Analytics.trackSingleEvent("Shown Low Quality Notice",{"Feedback Type":e,"Post Type":i?"Edit":"New","Low-Quality Score":t,"Author's user_id":o})},trackResubmittedEvent:function(e,i,t,o,s,a){var c
if(t<i){c="better quality"}else if(t>i){c="worse quality"}else{c="same quality"}Analytics.trackSingleEvent("Resubmitted After Low Quality Notice",{"Change in quality":c,"Feedback Type":o,"Post Type":s?"Edit":"New","Low-Quality Score: Before":i,"Low-Quality Score: After":t,"Author's user_id":a})},setScore:function(e,i){e.data("low-quality-score",i)},getScore:function(e){return e.data("low-quality-score")},clearScore:function(e){Discussion.LowQualityNotice.setScore(e,"")},hide:function(e){e.removeClass("low-quality-notice").find(".low-quality-notice-header").remove().end().find(".low-quality-notice-footer").remove()
Discussion.LowQualityNotice.clearScore(e)},exists:function(e){return e.hasClass("low-quality-notice")}}
});
KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, requireWithVars, module, exports) {
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
Discussion.DuplicateNotice={init:function(e){e.on("click",".duplicate-notice .close",Discussion.DuplicateNotice.close)},removeAll:function(e){var i=$(".duplicate-notice .close",e.parents(".thread"))
Discussion.DuplicateNotice.close.call(i)
i.alert("close")},close:function(){var e=$(this).parents(".duplicate-notice"),i=e.data("duplicate-key"),s=Discussion.getFeedbackFromKey(i)
Discussion.unhighlight(s,"warning")},findDuplicate_:function(e,i){var i=i.toLowerCase(),s=$(".answers",e.parents(".thread")).find(".answer")
var t=null
_.each(s,function(e){var s=$(".discussion-content",e).text().toLowerCase()
if(s===i||s.indexOf(i)>-1){t=e}})
return $(t)},show:function(e,i){var s=Discussion.DuplicateNotice.findDuplicate_(i,e)
if(s.length){var t=Templates.get("discussion.duplicate-notice")({translatedFeedbackType:$._("answer")}),c=$(t)
i.before(c)
Discussion.highlight(s,"warning")
c.data("duplicate-key",Discussion.getKey(s))
Analytics.trackSingleEvent("Duplicated Feedback")
return true}return false}}
});
KAdefine("javascript/discussion-package/thread.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_thread"]=module.exports=n(function(n,s,e,r,a){e=e||n.helpers
r=r||n.partials
var i="",o,t,l,f,c=this,u="function",h=e.helperMissing,d=void 0,p=this.escapeExpression,v=e.blockHelperMissing
function w(n,s){return" has-answered"}function g(n,s){var r="",a
r+='\n     data-focus-kind="'
l=e.focus
a=l||n.focus
a=a===null||a===undefined||a===false?a:a.kind
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"focus.kind",{hash:{}})}r+=p(a)+'"\n     data-focus-id="'
l=e.focus
a=l||n.focus
a=a===null||a===undefined||a===false?a:a.id
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"focus.id",{hash:{}})}r+=p(a)+'"\n     '
return r}function m(n,s){var r="",a,i
r+='\n        <div class="answers '
l=e.expandedAnswers
a=l||n.expandedAnswers
i=e.unless
f=c.program(6,A,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+='">\n            '
l=e.expandedAnswers
a=l||n.expandedAnswers
i=e.each
f=c.program(8,_,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n\n            "
l=e.hasHiddenAnswers
a=l||n.hasHiddenAnswers
i=e["if"]
f=c.program(10,k,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n        </div>\n\n        "
l=e.showAuthorControls
a=l||n.showAuthorControls
i=e.unless
f=c.program(21,q,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n    "
return r}function A(n,s){return" with-no-answers"}function _(n,s){var a="",i
a+="\n                "
i=n
i=c.invokePartial(r.discussion_answer,"discussion_answer",i,e,r)
if(i||i===0){a+=i}a+="\n            "
return a}function k(n,s){var r="",a,i
r+='\n                <div class="show-answer-links">\n                    <a href="javascript:void(0);" class="show-hidden-answers">\n                        '
l=e.answerCount
a=l||n.answerCount
l=e.ngettext
i=l||n.ngettext
f=c.program(11,P,s)
f.hash={}
f.fn=f
f.inverse=c.program(13,y,s)
if(l&&typeof i===u){a=i.call(n,a,f)}else{a=v.call(n,i,a,f)}if(a||a===0){r+=a}r+="\n                    </a>\n                    "
l=e.showAuthorControls
a=l||n.showAuthorControls
i=e.unless
f=c.program(15,C,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+='\n                </a>\n                </div>\n                <div class="hidden-answers" style="display: none">\n                    '
l=e.answers
a=l||n.answers
i=e.each
f=c.program(19,b,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n                </div>\n            "
return r}function P(n,s){return"Show answer"}function y(n,s){var r="",a
r+="Show all "
l=e.answerCount
a=l||n.answerCount
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"answerCount",{hash:{}})}r+=p(a)+" answers"
return r}function C(n,s){var r="",a,i
r+="\n                        "
l=e.restrictPosting
a=l||n.restrictPosting
i=e.unless
f=c.program(16,x,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n                    "
return r}function x(n,s){var a="",i
a+="\n                            "
i=n
i=c.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",i,e,r)
if(i||i===0){a+=i}a+='\n                            <a href="javascript:void(0);" class="show-answer-form">\n                                '
l=e["_"]
i=l||n["_"]
f=c.program(17,H,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(l&&typeof i===u){i=i.call(n,f)}else{i=v.call(n,i,f)}if(i||i===0){a+=i}a+="\n                            </a>\n                        "
return a}function H(n,s){return"Answer this question"}function b(n,s){var a="",i
a+="\n                        "
i=n
i=c.invokePartial(r.discussion_answer,"discussion_answer",i,e,r)
if(i||i===0){a+=i}a+="\n                    "
return a}function q(n,s){var r="",a,i
r+="\n            "
l=e.restrictPosting
a=l||n.restrictPosting
i=e.unless
f=c.program(22,j,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n        "
return r}function j(n,s){var a="",i,o
a+="\n                "
l=e.hasHiddenAnswers
i=l||n.hasHiddenAnswers
o=e["if"]
f=c.program(23,M,s)
f.hash={}
f.fn=f
f.inverse=c.program(25,S,s)
i=o.call(n,i,f)
if(i||i===0){a+=i}a+="\n                "
i=n
i=c.invokePartial(r["discussion_answer-form"],"discussion_answer-form",i,e,r)
if(i||i===0){a+=i}a+="\n                </div>\n            "
return a}function M(n,s){return'\n                    <div class="add-answer" style="display: none">\n                '}function S(n,s){return'\n                    <div class="add-answer">\n                '}i+='<div class="thread'
l=e.hasAnswered
o=l||s.hasAnswered
t=e["if"]
f=c.program(1,w,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+='"\n     '
l=e.focus
o=l||s.focus
t=e["if"]
f=c.program(3,g,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+=">\n    "
o=s
o=c.invokePartial(r.discussion_question,"discussion_question",o,e,r)
if(o||o===0){i+=o}i+="\n\n    "
l=e.inUserProfile
o=l||s.inUserProfile
t=e.unless
f=c.program(5,m,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+="\n</div>\n\n"
return i})})()
});
KAdefine("javascript/discussion-package/program.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,i=Handlebars.templates=Handlebars.templates||{}
i["discussion-package_program"]=module.exports=e(function(e,i,s,a,l){s=s||e.helpers
a=a||e.partials
var t="",n,r,o,h,f=this,c="function",d=s.helperMissing,p=void 0,u=this.escapeExpression
function m(e,i){return"deleted"}function y(e,i){return" context-link"}function v(e,i){return" is-author"}function k(e,i){var a="",l
a+='data-kind="program" data-id="'
o=s.id
l=o||e.id
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"id",{hash:{}})}a+=u(l)+'"'
return a}t+='<div class="scratchpad-vote '
o=s.appearsAsDeleted
n=o||i.appearsAsDeleted
r=s["if"]
h=f.program(1,m,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+=" discussion-item"
o=s.inUserProfile
n=o||i.inUserProfile
r=s["if"]
h=f.program(3,y,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}o=s.showAuthorControls
n=o||i.showAuthorControls
r=s["if"]
h=f.program(5,v,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+='" id="'
o=s.key
n=o||i.key
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"key",{hash:{}})}t+=u(n)+'"\n     data-key="'
o=s.key
n=o||i.key
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"key",{hash:{}})}t+=u(n)+'"\n     '
o=s.focus
n=o||i.focus
r=s["if"]
h=f.program(7,k,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+=">\n\n    "
t+='\n    <h2><a href="/cs/'
o=s.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+"/"
o=s.id
n=o||i.id
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"id",{hash:{}})}t+=u(n)+'">'
o=s.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+'</a></h2>\n    <iframe src="/cs/'
o=s.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+"/"
o=s.id
n=o||i.id
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"id",{hash:{}})}t+=u(n)+'/embedded?editor=yes"\n            style="width: 940px; height: 440px; border: 0px;"\n            frameborder="0"\n            scrolling="no">\n    </iframe>\n\n    '
n=i
n=f.invokePartial(a["discussion_discussion-meta"],"discussion_discussion-meta",n,s,a)
if(n||n===0){t+=n}t+="\n</div>\n"
return t})})()
});
KAdefine("javascript/discussion-package/question.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_question"]=module.exports=e(function(e,s,n,i,o){n=n||e.helpers
i=i||e.partials
var l="",a,r,t,f,c,h=this,u="function",p=n.helperMissing,d=void 0,m=this.escapeExpression,v=n.blockHelperMissing
function y(e,s){return"deleted"}function k(e,s){return" context-link"}function g(e,s){return" is-author"}function C(e,s){var i="",o
i+='\n        <a href="'
f=n.focus
o=f||e.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
if(typeof o===u){o=o.call(e,{hash:{}})}else if(o===d){o=p.call(e,"focus.relativeUrl",{hash:{}})}i+=m(o)+"?qa_expand_key="
f=n.key
o=f||e.key
if(typeof o===u){o=o.call(e,{hash:{}})}else if(o===d){o=p.call(e,"key",{hash:{}})}i+=m(o)+'" class="covering-link"></a>\n    '
return i}function _(e,s){var i,o
i="Edit this question"
f=n.discussionFormControls
o=f||e.discussionFormControls
if(typeof o===u){i=o.call(e,i,{hash:{}})}else if(o===d){i=p.call(e,"discussionFormControls",i,{hash:{}})}else{i=o}if(i||i===0){return i}else{return""}}l+='<div class="question '
f=n.appearsAsDeleted
a=f||s.appearsAsDeleted
r=n["if"]
c=h.program(1,y,o)
c.hash={}
c.fn=c
c.inverse=h.noop
a=r.call(s,a,c)
if(a||a===0){l+=a}l+=" discussion-item"
f=n.inUserProfile
a=f||s.inUserProfile
r=n["if"]
c=h.program(3,k,o)
c.hash={}
c.fn=c
c.inverse=h.noop
a=r.call(s,a,c)
if(a||a===0){l+=a}f=n.showAuthorControls
a=f||s.showAuthorControls
r=n["if"]
c=h.program(5,g,o)
c.hash={}
c.fn=c
c.inverse=h.noop
a=r.call(s,a,c)
if(a||a===0){l+=a}l+='"\n     id="'
f=n.key
a=f||s.key
if(typeof a===u){a=a.call(s,{hash:{}})}else if(a===d){a=p.call(s,"key",{hash:{}})}l+=m(a)+'">\n\n    '
f=n.inUserProfile
a=f||s.inUserProfile
r=n["if"]
c=h.program(7,C,o)
c.hash={}
c.fn=c
c.inverse=h.noop
a=r.call(s,a,c)
if(a||a===0){l+=a}l+='\n\n    <div class="discussion-content">\n        '
f=n.content
a=f||s.content
r={}
t=1
r["nofollow"]=t
f=n.formatContent
t=f||s.formatContent
c={}
c.hash=r
if(typeof t===u){a=t.call(s,a,c)}else if(t===d){a=p.call(s,"formatContent",a,c)}else{a=t}l+=m(a)+"\n    </div>\n\n    "
a=s
a=h.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",a,n,i)
if(a||a===0){l+=a}l+="\n\n    "
f=n["_"]
a=f||s["_"]
c=h.program(9,_,o)
c.hash={}
c.fn=c
c.inverse=h.noop
if(f&&typeof a===u){a=a.call(s,c)}else{a=v.call(s,a,c)}if(a||a===0){l+=a}l+="\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/answer.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_answer"]=module.exports=e(function(e,n,s,i,o){s=s||e.helpers
i=i||e.partials
var a="",l,r,t,f,u,c=this,d="function",h=s.helperMissing,p=void 0,m=this.escapeExpression,v=s.blockHelperMissing
function y(e,n){return"deleted"}function q(e,n){return" context-link"}function g(e,n){return" is-author"}function b(e,n){var i="",o
i+='data-question-key="'
f=s.questionKey
o=f||e.questionKey
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===p){o=h.call(e,"questionKey",{hash:{}})}i+=m(o)+'"'
return i}function k(e,n){var i="",o,a
i+="\n        "
f=s.question
o=f||e.question
o=o===null||o===undefined||o===false?o:o.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
a=s["if"]
u=c.program(10,C,n)
u.hash={}
u.fn=u
u.inverse=c.noop
o=a.call(e,o,u)
if(o||o===0){i+=o}i+='\n\n        <div class="discussion-question-title discussion-light">\n            '
f=s.question
o=f||e.question
o=o===null||o===undefined||o===false?o:o.content
f=s.formatContent
a=f||e.formatContent
if(typeof a===d){o=a.call(e,o,{hash:{}})}else if(a===p){o=h.call(e,"formatContent",o,{hash:{}})}else{o=a}i+=m(o)+'\n        </div>\n        <div class="discussion-indent">\n    '
return i}function C(e,n){var i="",o
i+='\n            <a href="'
f=s.question
o=f||e.question
o=o===null||o===undefined||o===false?o:o.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===p){o=h.call(e,"question.focus.relativeUrl",{hash:{}})}i+=m(o)+"?qa_expand_key="
f=s.question
o=f||e.question
o=o===null||o===undefined||o===false?o:o.key
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===p){o=h.call(e,"question.key",{hash:{}})}i+=m(o)+'"\n                class="covering-link"\n                data-feedback-type="answer"\n                data-votes="'
f=s.sumVotesIncremented
o=f||e.sumVotesIncremented
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===p){o=h.call(e,"sumVotesIncremented",{hash:{}})}i+=m(o)+'">\n            </a>\n        '
return i}function U(e,n){return'\n        <div class="item-separator"></div>\n    '}function V(e,n){var i="",o
i+='\n        <strong class="from-video-author">'
f=s["_"]
o=f||e["_"]
u=c.program(15,w,n)
u.hash={}
u.fn=u
u.inverse=c.noop
if(f&&typeof o===d){o=o.call(e,u)}else{o=v.call(e,o,u)}if(o||o===0){i+=o}i+="</strong>\n        <br>\n    "
return i}function w(e,n){return"From the author:"}function _(e,n){var i="",o
i+='\n    <div class="discussion-embed-video">\n        <iframe width="488" height="275" src="'
f=s.embedVideoUrl
o=f||e.embedVideoUrl
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===p){o=h.call(e,"embedVideoUrl",{hash:{}})}i+=m(o)+'?modestbranding=1;rel=0;fs=1" frameborder="0" allowfullscreen></iframe>\n    </div>\n    '
return i}function A(e,n){var i,o
i="Edit this answer"
f=s.discussionFormControls
o=f||e.discussionFormControls
if(typeof o===d){i=o.call(e,i,{hash:{}})}else if(o===p){i=h.call(e,"discussionFormControls",i,{hash:{}})}else{i=o}if(i||i===0){return i}else{return""}}function K(e,n){return"\n        </div>\n    "}a+='<div class="answer '
f=s.appearsAsDeleted
l=f||n.appearsAsDeleted
r=s["if"]
u=c.program(1,y,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+=" discussion-item"
f=s.inUserProfile
l=f||n.inUserProfile
r=s["if"]
u=c.program(3,q,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}f=s.showAuthorControls
l=f||n.showAuthorControls
r=s["if"]
u=c.program(5,g,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+='"\n     '
f=s.questionKey
l=f||n.questionKey
r=s["if"]
u=c.program(7,b,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+='\n     id="'
f=s.key
l=f||n.key
if(typeof l===d){l=l.call(n,{hash:{}})}else if(l===p){l=h.call(n,"key",{hash:{}})}a+=m(l)+'">\n\n    '
f=s.question
l=f||n.question
r=s["if"]
u=c.program(9,k,o)
u.hash={}
u.fn=u
u.inverse=c.program(12,U,o)
l=r.call(n,l,u)
if(l||l===0){a+=l}a+="\n\n    "
f=s.fromVideoAuthor
l=f||n.fromVideoAuthor
r=s["if"]
u=c.program(14,V,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+='\n\n    <div class="discussion-content">\n        '
f=s.content
l=f||n.content
r={}
t=1
r["nofollow"]=t
f=s.formatContent
t=f||n.formatContent
u={}
u.hash=r
if(typeof t===d){l=t.call(n,l,u)}else if(t===p){l=h.call(n,"formatContent",l,u)}else{l=t}a+=m(l)+"\n    </div>\n\n    "
f=s.embedVideoUrl
l=f||n.embedVideoUrl
r=s["if"]
u=c.program(17,_,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+="\n\n    "
l=n
l=c.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",l,s,i)
if(l||l===0){a+=l}a+="\n\n    "
f=s["_"]
l=f||n["_"]
u=c.program(19,A,o)
u.hash={}
u.fn=u
u.inverse=c.noop
if(f&&typeof l===d){l=l.call(n,u)}else{l=v.call(n,l,u)}if(l||l===0){a+=l}a+="\n\n    "
f=s.question
l=f||n.question
r=s["if"]
u=c.program(21,K,o)
u.hash={}
u.fn=u
u.inverse=c.noop
l=r.call(n,l,u)
if(l||l===0){a+=l}a+="\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/comment.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_comment"]=module.exports=e(function(e,s,n,i,l){n=n||e.helpers
i=i||e.partials
var o="",a,f,r,t,c,h=this,u="function",d=n.helperMissing,p=void 0,m=this.escapeExpression,v=n.blockHelperMissing
function k(e,s){return"deleted"}function y(e,s){return" context-link"}function g(e,s){return" is-author"}function C(e,s){var i="",l
i+='data-focus-kind="'
t=n.focus
l=t||e.focus
l=l===null||l===undefined||l===false?l:l.kind
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"focus.kind",{hash:{}})}i+=m(l)+'" data-focus-id="'
t=n.focus
l=t||e.focus
l=l===null||l===undefined||l===false?l:l.id
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"focus.id",{hash:{}})}i+=m(l)+'"'
return i}function _(e,s){var i="",l
i+='\n        <a href="'
t=n.focus
l=t||e.focus
l=l===null||l===undefined||l===false?l:l.relativeUrl
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"focus.relativeUrl",{hash:{}})}i+=m(l)+"?qa_expand_key="
t=n.key
l=t||e.key
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"key",{hash:{}})}i+=m(l)+'" class="covering-link"></a>\n    '
return i}function U(e,s){var i,l
i="Edit this feedback"
t=n.discussionFormControls
l=t||e.discussionFormControls
if(typeof l===u){i=l.call(e,i,{hash:{}})}else if(l===p){i=d.call(e,"discussionFormControls",i,{hash:{}})}else{i=l}if(i||i===0){return i}else{return""}}o+='<div class="comment '
t=n.appearsAsDeleted
a=t||s.appearsAsDeleted
f=n["if"]
c=h.program(1,k,l)
c.hash={}
c.fn=c
c.inverse=h.noop
a=f.call(s,a,c)
if(a||a===0){o+=a}o+=" discussion-item"
t=n.inUserProfile
a=t||s.inUserProfile
f=n["if"]
c=h.program(3,y,l)
c.hash={}
c.fn=c
c.inverse=h.noop
a=f.call(s,a,c)
if(a||a===0){o+=a}t=n.showAuthorControls
a=t||s.showAuthorControls
f=n["if"]
c=h.program(5,g,l)
c.hash={}
c.fn=c
c.inverse=h.noop
a=f.call(s,a,c)
if(a||a===0){o+=a}o+='" id="'
t=n.key
a=t||s.key
if(typeof a===u){a=a.call(s,{hash:{}})}else if(a===p){a=d.call(s,"key",{hash:{}})}o+=m(a)+'"\n     data-key="'
t=n.key
a=t||s.key
if(typeof a===u){a=a.call(s,{hash:{}})}else if(a===p){a=d.call(s,"key",{hash:{}})}o+=m(a)+'"\n     '
t=n.focus
a=t||s.focus
f=n["if"]
c=h.program(7,C,l)
c.hash={}
c.fn=c
c.inverse=h.noop
a=f.call(s,a,c)
if(a||a===0){o+=a}o+='>\n\n    <div class="item-separator"></div>\n    '
t=n.inUserProfile
a=t||s.inUserProfile
f=n["if"]
c=h.program(9,_,l)
c.hash={}
c.fn=c
c.inverse=h.noop
a=f.call(s,a,c)
if(a||a===0){o+=a}o+='\n\n    <div class="discussion-content">\n        '
t=n.content
a=t||s.content
f={}
r=1
f["nofollow"]=r
t=n.formatContent
r=t||s.formatContent
c={}
c.hash=f
if(typeof r===u){a=r.call(s,a,c)}else if(r===p){a=d.call(s,"formatContent",a,c)}else{a=r}o+=m(a)+"\n    </div>\n\n    "
a=s
a=h.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",a,n,i)
if(a||a===0){o+=a}o+="\n\n    "
t=n["_"]
a=t||s["_"]
c=h.program(11,U,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(t&&typeof a===u){a=a.call(s,c)}else{a=v.call(s,a,c)}if(a||a===0){o+=a}o+="\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/reply.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_reply"]=module.exports=a(function(a,e,s,n,o){s=s||a.helpers
var l="",t,r,i,h,c,f=this,u="function",d=s.blockHelperMissing,p=s.helperMissing,v=void 0,m=this.escapeExpression
function y(a,e){return" deleted"}function g(a,e){var n="",o,l
n+='\n            <span class="mod-tools" data-key="'
h=s.key
o=h||a.key
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"key",{hash:{}})}n+=m(o)+'" data-is-author="'
h=s.showAuthorControls
o=h||a.showAuthorControls
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"showAuthorControls",{hash:{}})}n+=m(o)+'" data-in-queue="'
h=s.inQueue
o=h||a.inQueue
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"inQueue",{hash:{}})}n+=m(o)+'">\n                '
h=s.deleted
o=h||a.deleted
l=s["if"]
c=f.program(4,k,e)
c.hash={}
c.fn=c
c.inverse=f.program(7,C,e)
o=l.call(a,o,c)
if(o||o===0){n+=o}n+="\n            </span>\n            "
return n}function k(a,e){var n="",o
n+='\n                    <a href="javascript:void(0);" class="undelete">'
h=s["_"]
o=h||a["_"]
c=f.program(5,A,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(h&&typeof o===u){o=o.call(a,c)}else{o=d.call(a,o,c)}if(o||o===0){n+=o}n+="</a>\n                "
return n}function A(a,e){return"Undelete"}function C(a,e){var n="",o
n+='\n                    <a href="javascript:void(0);" class="delete">'
h=s["_"]
o=h||a["_"]
c=f.program(8,w,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(h&&typeof o===u){o=o.call(a,c)}else{o=d.call(a,o,c)}if(o||o===0){n+=o}n+="</a>\n                "
return n}function w(a,e){return"Delete"}function _(a,e){var n="",o,l
n+="\n                "
h=s.showAuthorControls
o=h||a.showAuthorControls
l=s["if"]
c=f.program(11,Q,e)
c.hash={}
c.fn=c
c.inverse=f.noop
o=l.call(a,o,c)
if(o||o===0){n+=o}n+="\n            "
return n}function Q(a,e){var n="",o
n+='\n                <span class="mod-tools" data-key="'
h=s.key
o=h||a.key
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"key",{hash:{}})}n+=m(o)+'" data-is-author="'
h=s.showAuthorControls
o=h||a.showAuthorControls
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"showAuthorControls",{hash:{}})}n+=m(o)+'" data-in-queue="'
h=s.inQueue
o=h||a.inQueue
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"inQueue",{hash:{}})}n+=m(o)+'">\n                    <a href="javascript:void(0);" class="delete">'
h=s["_"]
o=h||a["_"]
c=f.program(12,U,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(h&&typeof o===u){o=o.call(a,c)}else{o=d.call(a,o,c)}if(o||o===0){n+=o}n+="</a>\n                </span>\n                "
return n}function U(a,e){return"Delete"}function b(a,e){var n="",o,l
n+="\n                "
n+='\n                <span class="discussion-meta-faded">'
h=s["_"]
o=h||a["_"]
c=f.program(15,S,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(h&&typeof o===u){o=o.call(a,c)}else{o=d.call(a,o,c)}if(o||o===0){n+=o}n+='</span>\n                <a class="author-nickname discussion-author" data-user-id="'
h=s.authorUserId
o=h||a.authorUserId
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"authorUserId",{hash:{}})}n+=m(o)+'">\n                    '
h=s.authorAvatarSrc
o=h||a.authorAvatarSrc
l=s["if"]
c=f.program(17,D,e)
c.hash={}
c.fn=c
c.inverse=f.noop
o=l.call(a,o,c)
if(o||o===0){n+=o}h=s.authorNickname
o=h||a.authorNickname
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"authorNickname",{hash:{}})}n+=m(o)+"\n                </a>\n            "
return n}function S(a,e){return"by"}function D(a,e){var n="",o
n+='<img class="discussion-author-avatar" src="'
h=s.authorAvatarSrc
o=h||a.authorAvatarSrc
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=p.call(a,"authorAvatarSrc",{hash:{}})}n+=m(o)+'">'
return n}l+='<div class="discussion-item reply'
h=s.appearsAsDeleted
t=h||e.appearsAsDeleted
r=s["if"]
c=f.program(1,y,o)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(e,t,c)
if(t||t===0){l+=t}l+='" id="'
h=s.key
t=h||e.key
if(typeof t===u){t=t.call(e,{hash:{}})}else if(t===v){t=p.call(e,"key",{hash:{}})}l+=m(t)+'">\n    <div class="discussion-content">\n        '
h=s.content
t=h||e.content
r={}
i=1
r["nofollow"]=i
h=s.formatContent
i=h||e.formatContent
c={}
c.hash=r
if(typeof i===u){t=i.call(e,t,c)}else if(i===v){t=p.call(e,"formatContent",t,c)}else{t=i}l+=m(t)+"\n    </div>\n\n    "
l+='\n    <div class="discussion-meta">\n        <div class="discussion-meta-controls">\n            '
h=s.showModControls
t=h||e.showModControls
r=s["if"]
c=f.program(3,g,o)
c.hash={}
c.fn=c
c.inverse=f.program(10,_,o)
t=r.call(e,t,c)
if(t||t===0){l+=t}l+='\n        </div>\n        <div class="discussion-meta-info">\n            <span class="timeago" title="'
h=s.date
t=h||e.date
if(typeof t===u){t=t.call(e,{hash:{}})}else if(t===v){t=p.call(e,"date",{hash:{}})}l+=m(t)+'">\n                '
h=s.date
t=h||e.date
if(typeof t===u){t=t.call(e,{hash:{}})}else if(t===v){t=p.call(e,"date",{hash:{}})}l+=m(t)+"\n            </span>\n\n            "
h=s.inUserProfile
t=h||e.inUserProfile
r=s.unless
c=f.program(14,b,o)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(e,t,c)
if(t||t===0){l+=t}l+='\n        </div>\n    </div>\n    <div class="item-separator"></div>\n</div>\n'
return l})})()
});
KAdefine("javascript/discussion-package/replies-container.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,i=Handlebars.templates=Handlebars.templates||{}
i["discussion-package_replies-container"]=module.exports=n(function(n,i,e,s,l){e=e||n.helpers
var a="",r,d,t,o,c=this,p="function",v=e.blockHelperMissing
function u(n,i){var s="",l
s+='\n            <div class="loading" style="display:none;">\n                <div class="discussion-item reply" style="opacity:0;">\n                    <div class="throbber"></div>\n                    <div class="discussion-content">'
t=e["_"]
l=t||n["_"]
o=c.program(2,f,i)
o.hash={}
o.fn=o
o.inverse=c.noop
if(t&&typeof l===p){l=l.call(n,o)}else{l=v.call(n,l,o)}if(l||l===0){s+=l}s+="</div>\n                </div>\n            </div>\n            "
return s}function f(n,i){return"Loading..."}a+='<div class="replies-container">\n    <div class="replies-triangle"></div>\n    <div class="replies-panel">\n        <div class="replies">\n            '
t=e.replyCount
r=t||i.replyCount
d=e["if"]
o=c.program(1,u,l)
o.hash={}
o.fn=o
o.inverse=c.noop
r=d.call(i,r,o)
if(r||r===0){a+=r}a+='\n        </div>\n\n        <div class="add-reply"></div>\n    </div>\n</div>\n'
return a})})()
});
KAdefine("javascript/discussion-package/question-form.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_question-form"]=module.exports=s(function(s,e,i,n,o){i=i||s.helpers
n=n||s.partials
var a="",l,t,r,u=this,c="function",d=i.helperMissing,f=void 0,p=i.blockHelperMissing
function h(s,e){return"Ask a question..."}function v(s,e){var n,o
n="Ask your question"
t=i.discussionFormControls
o=t||s.discussionFormControls
if(typeof o===c){n=o.call(s,n,{hash:{}})}else if(o===f){n=d.call(s,"discussionFormControls",n,{hash:{}})}else{n=o}if(n||n===0){return n}else{return""}}a+='<div class="ask-question">\n    '
l=e
l=u.invokePartial(n["discussion_question-guidelines"],"discussion_question-guidelines",l,i,n)
if(l||l===0){a+=l}a+='\n    <div class="question">\n        <textarea class="discussion-text" placeholder="'
t=i["_"]
l=t||e["_"]
r=u.program(1,h,o)
r.hash={}
r.fn=r
r.inverse=u.noop
if(t&&typeof l===c){l=l.call(e,r)}else{l=p.call(e,l,r)}if(l||l===0){a+=l}a+='"></textarea>\n\n        '
t=i["_"]
l=t||e["_"]
r=u.program(3,v,o)
r.hash={}
r.fn=r
r.inverse=u.noop
if(t&&typeof l===c){l=l.call(e,r)}else{l=p.call(e,l,r)}if(l||l===0){a+=l}a+="\n    </div>\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/question-guidelines.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_question-guidelines"]=module.exports=e(function(e,n,a,i,s){a=a||e.helpers
var l="",r,t,o,c,f=this,h="function",u=a.blockHelperMissing
function p(e,n){var i="",s
i+='\n                <h4 class="guideline-header">\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(2,d,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
s=o||e["_"]
c=f.program(4,g,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+="\n                    </em>\n                </div>\n                "
return i}function d(e,n){return"Be specific, and indicate a location in the text:"}function g(e,n){return"In the second paragraph, how is the moon large enough to block the sun? Isn't the sun way larger?"}function m(e,n){var i="",s
i+='\n                <h4 class="guideline-header">\n                    '
o=a["_"]
s=o||e["_"]
c=f.program(7,v,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
s=o||e["_"]
c=f.program(9,_,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+="\n                    </em>\n                </div>\n                "
return i}function v(e,n){return"Be specific, and indicate a time in the video:"}function _(e,n){return"At 5:31, how is the moon large enough to block the sun? Isn't the sun way larger?"}function y(e,n){return"Have something that's not a question about this content?"}function k(e,n){return"Post a tip or thanks"}function b(e,n){return"Join our help discussions"}function w(e,n){return"Report a technical problem with the site"}function q(e,n){return'Request a <a class="alert-link" href="http://khanacademyfeedback.uservoice.com/forums/252108-general">feature</a>'}function H(e,n){var i,s
o=a.showSpinoffs
i=o||e.showSpinoffs
s=a.unless
c=f.program(22,x,n)
c.hash={}
c.fn=c
c.inverse=f.noop
i=s.call(e,i,c)
if(i||i===0){return i}else{return""}}function x(e,n){var i="",s
i+='\n                    <li>\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(23,A,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                    </li>\n                    "
return i}function A(e,n){return"Report a mistake in the video"}function I(e,n){return"This discussion area is not meant for answering homework questions."}l+='<div class="question-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                '
o=a.isArticle
r=o||n.isArticle
t=a["if"]
c=f.program(1,p,s)
c.hash={}
c.fn=c
c.inverse=f.program(6,m,s)
r=t.call(n,r,c)
if(r||r===0){l+=r}l+='\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(11,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link post-feedback-instead" href="javascript:void(0);">'
o=a["_"]
r=o||n["_"]
c=f.program(13,k,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademyfeedback.uservoice.com/">'
o=a["_"]
r=o||n["_"]
c=f.program(15,b,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=a["_"]
r=o||n["_"]
c=f.program(17,w,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="</a>\n                    </li>\n                    <li>\n                        "
o=a["_"]
r=o||n["_"]
c=f.program(19,q,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="\n                    </li>\n                    "
o=a.scratchpad
r=o||n.scratchpad
t=a.unless
c=f.program(21,H,s)
c.hash={}
c.fn=c
c.inverse=f.noop
r=t.call(n,r,c)
if(r||r===0){l+=r}l+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="no-homework">\n        <h5 class="guideline-message">\n            '
o=a["_"]
r=o||n["_"]
c=f.program(25,I,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="\n        </h5>\n    </div>\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/answer-form.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_answer-form"]=module.exports=e(function(e,s,n,r,o){n=n||e.helpers
var a="",l,i,t,c,f=this,p="function",h=n.blockHelperMissing,u=n.helperMissing,d=void 0,m=this.escapeExpression
function v(e,s){var r="",o
r+='\n    <label><input type="checkbox" class="from-video-author"> <strong>'
t=n["_"]
o=t||e["_"]
c=f.program(2,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof o===p){o=o.call(e,c)}else{o=h.call(e,o,c)}if(o||o===0){r+=o}r+="</strong></label><br>\n    "
return r}function y(e,s){return"From the author:"}function g(e,s){return"Answer this question..."}function b(e,s){var r,o
r="Answer"
t=n.discussionFormControls
o=t||e.discussionFormControls
if(typeof o===p){r=o.call(e,r,{hash:{}})}else if(o===d){r=u.call(e,"discussionFormControls",r,{hash:{}})}else{r=o}if(r||r===0){return r}else{return""}}a+='<div class="answer">\n    <input type="hidden" name="question-key" value="'
t=n.key
l=t||s.key
if(typeof l===p){l=l.call(s,{hash:{}})}else if(l===d){l=u.call(s,"key",{hash:{}})}a+=m(l)+'">\n\n    '
t=n.isDeveloper
l=t||s.isDeveloper
i=n["if"]
c=f.program(1,v,o)
c.hash={}
c.fn=c
c.inverse=f.noop
l=i.call(s,l,c)
if(l||l===0){a+=l}a+='\n\n    <textarea class="discussion-text" placeholder="'
t=n["_"]
l=t||s["_"]
c=f.program(4,g,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===p){l=l.call(s,c)}else{l=h.call(s,l,c)}if(l||l===0){a+=l}a+='"></textarea>\n\n    '
t=n["_"]
l=t||s["_"]
c=f.program(6,b,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(t&&typeof l===p){l=l.call(s,c)}else{l=h.call(s,l,c)}if(l||l===0){a+=l}a+="\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/feedback-guidelines.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_feedback-guidelines"]=module.exports=e(function(e,n,a,i,s){a=a||e.helpers
var l="",r,t,o,c,f=this,h="function",u=a.blockHelperMissing
function p(e,n){return"Share a tip"}function d(e,n){return"When naming a variable, it is okay to use most letters, but some are reserved, like 'e', which represents the value 2.7831..."}function m(e,n){return"Thank the author"}function g(e,n){return"This is great, I finally understand quadratic functions!"}function v(e,n){return"Have something that's not a tip or thanks about this content?"}function _(e,n){return"Ask a question"}function k(e,n){return"Join our help discussions"}function y(e,n){return"Report a technical problem with the site"}function b(e,n){return'Request a \n                        <a class="alert-link" href="http://khanacademyfeedback.uservoice.com/forums/252108-general">feature</a>'}function w(e,n){var i,s
o=a.showSpinoffs
i=o||e.showSpinoffs
s=a.unless
c=f.program(20,q,n)
c.hash={}
c.fn=c
c.inverse=f.noop
i=s.call(e,i,c)
if(i||i===0){return i}else{return""}}function q(e,n){var i="",s
i+='\n                    <li>\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(21,H,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                    </li>\n                    "
return i}function H(e,n){return"Report a mistake in the video"}function x(e,n){return"This discussion area is not meant for answering homework questions."}l+='<div class="feedback-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(1,p,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(3,d,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n                <br>\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(5,m,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(7,g,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(9,v,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link ask-question-instead" href="javascript:void(0);">'
o=a["_"]
r=o||n["_"]
c=f.program(11,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademyfeedback.uservoice.com/">'
o=a["_"]
r=o||n["_"]
c=f.program(13,k,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=a["_"]
r=o||n["_"]
c=f.program(15,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="</a>\n                    </li>\n                    <li>\n                        "
o=a["_"]
r=o||n["_"]
c=f.program(17,b,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="\n                    </li>\n                    "
o=a.scratchpad
r=o||n.scratchpad
t=a.unless
c=f.program(19,w,s)
c.hash={}
c.fn=c
c.inverse=f.noop
r=t.call(n,r,c)
if(r||r===0){l+=r}l+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="no-homework">\n        <h5 class="guideline-message">\n            '
o=a["_"]
r=o||n["_"]
c=f.program(23,x,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="\n        </h5>\n    </div>\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/comment-form.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_comment-form"]=module.exports=s(function(s,e,n,i,o){n=n||s.helpers
i=i||s.partials
var a="",l,t,r,c=this,d="function",f=n.helperMissing,p=void 0,u=n.blockHelperMissing
function h(s,e){return"Post a tip or thanks..."}function m(s,e){var i,o
i="Post your tip or thanks"
t=n.discussionFormControls
o=t||s.discussionFormControls
if(typeof o===d){i=o.call(s,i,{hash:{}})}else if(o===p){i=f.call(s,"discussionFormControls",i,{hash:{}})}else{i=o}if(i||i===0){return i}else{return""}}a+='<div class="post-feedback">\n    '
l=e
l=c.invokePartial(i["discussion_feedback-guidelines"],"discussion_feedback-guidelines",l,n,i)
if(l||l===0){a+=l}a+='\n    <div class="comment">\n        <textarea class="discussion-text" placeholder="'
t=n["_"]
l=t||e["_"]
r=c.program(1,h,o)
r.hash={}
r.fn=r
r.inverse=c.noop
if(t&&typeof l===d){l=l.call(e,r)}else{l=u.call(e,l,r)}if(l||l===0){a+=l}a+='"></textarea>\n        '
t=n["_"]
l=t||e["_"]
r=c.program(3,m,o)
r.hash={}
r.fn=r
r.inverse=c.noop
if(t&&typeof l===d){l=l.call(e,r)}else{l=u.call(e,l,r)}if(l||l===0){a+=l}a+="\n    </div>\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/reply-form.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_reply-form"]=module.exports=s(function(s,e,n,i,l){n=n||s.helpers
var t="",a,o,r,c=this,d="function",p=n.helperMissing,u=void 0,f=n.blockHelperMissing
function m(s,e){return"or"}function v(s,e){var i,l
i="Comment"
o=n.discussionFormControls
l=o||s.discussionFormControls
if(typeof l===d){i=l.call(s,i,{hash:{}})}else if(l===u){i=p.call(s,"discussionFormControls",i,{hash:{}})}else{i=l}if(i||i===0){return i}else{return""}}t+='<div class="discussion-item reply">\n    <div class="reply-alt-controls" style="display:none">\n        <div>\n            <input class="simple-button choose-reply-alt"\n                   type="button"\n                   value="">\n        </div>\n        <div class="or">\n        '
o=n["_"]
a=o||e["_"]
r=c.program(1,m,l)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof a===d){a=a.call(e,r)}else{a=f.call(e,a,r)}if(a||a===0){t+=a}t+='\n        </div>\n        <div class="div-text-dummy">\n            <textarea class="discussion-text-dummy"></textarea>\n        </div>\n    </div>\n    <textarea class="discussion-text"></textarea>\n\n    '
o=n["_"]
a=o||e["_"]
r=c.program(3,v,l)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof a===d){a=a.call(e,r)}else{a=f.call(e,a,r)}if(a||a===0){t+=a}t+="\n</div>\n"
return t})})()
});
KAdefine("javascript/discussion-package/discussion-meta.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_discussion-meta"]=module.exports=n(function(n,e,a,s,r){a=a||n.helpers
s=s||n.partials
var o="",t,l,i,f,c=this,u="function",h=a.helperMissing,p=void 0,d=this.escapeExpression,v=a.blockHelperMissing
function m(n,e){var r="",o,t
r+="\n            "
i=a.badges
o=i||n.badges
t=a.each
f=c.program(2,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(n,o,f)
if(o||o===0){r+=o}r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n        "
return r}function y(n,e){var s="",r,o
s+='\n                <img class="discussion-badge-icon" title="'
i=a.translatedDescription
r=i||n.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"translatedDescription",{hash:{}})}s+=d(r)+'"\n                     src="'
i=a.iconSrc
r=i||n.iconSrc
i=a.stripProtocol
o=i||n.stripProtocol
if(typeof o===u){r=o.call(n,r,{hash:{}})}else if(o===p){r=h.call(n,"stripProtocol",r,{hash:{}})}else{r=o}s+=d(r)+'" />\n            '
return s}function g(n,e){var s="",r,o
s+='\n        <span class="sum-votes">\n            '
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
i=a.ngettext
o=i||n.ngettext
f=c.program(5,C,e)
f.hash={}
f.fn=f
f.inverse=c.program(7,_,e)
if(i&&typeof o===u){r=o.call(n,r,f)}else{r=v.call(n,o,r,f)}if(r||r===0){s+=r}s+="\n        </span>\n        "
return s}function C(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+" Vote"
return s}function _(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+" Votes"
return s}function x(n,e){var r="",o,t
r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n            <span>"
i=a.spinoffCount
o=i||n.spinoffCount
i=a.ngettext
t=i||n.ngettext
f=c.program(10,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(12,P,e)
if(i&&typeof t===u){o=t.call(n,o,f)}else{o=v.call(n,t,o,f)}if(o||o===0){r+=o}r+="</span>\n        "
return r}function k(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-off"
return s}function P(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-offs"
return s}function I(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.isScratchpadCard
r=i||n.isScratchpadCard
o=a.unless
f=c.program(15,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n            "
s+="\n            "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(17,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function S(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["discussion_vote-controls"],"discussion_vote-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function b(n,e){var s="",r,o
s+="\n\n"
s+="\n                "
i=a.restrictPosting
r=i||n.restrictPosting
o=a["if"]
f=c.program(18,U,e)
f.hash={}
f.fn=f
f.inverse=c.program(24,w,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function U(n,e){var s="",r,o
s+="\n                    "
i=a.replyCount
r=i||n.replyCount
o=a["if"]
f=c.program(19,V,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                "
return s}function V(n,e){var r="",o,t
r+="\n                        "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                        "
r+='\n                        <a href="javascript:void(0);" class="toggle-replies show-replies"\n                           data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">'
i=a.replyCount
o=i||n.replyCount
i=a.ngettext
t=i||n.ngettext
f=c.program(20,K,e)
f.hash={}
f.fn=f
f.inverse=c.program(22,A,e)
if(i&&typeof t===u){o=t.call(n,o,f)}else{o=v.call(n,t,o,f)}if(o||o===0){r+=o}r+="</a>\n                    "
return r}function K(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment"
return s}function A(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments"
return s}function w(n,e){var r="",o,t
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                    "
r+='\n                    <a href="javascript:void(0);" class="toggle-replies show-replies"\n                       data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">'
i=a.replyCount
o=i||n.replyCount
t=a["if"]
f=c.program(25,T,e)
f.hash={}
f.fn=f
f.inverse=c.program(30,H,e)
o=t.call(n,o,f)
if(o||o===0){r+=o}r+="</a>\n                "
return r}function T(n,e){var s,r
i=a.replyCount
s=i||n.replyCount
i=a.ngettext
r=i||n.ngettext
f=c.program(26,D,e)
f.hash={}
f.fn=f
f.inverse=c.program(28,F,e)
if(i&&typeof r===u){s=r.call(n,s,f)}else{s=v.call(n,r,s,f)}if(s||s===0){return s}else{return""}}function D(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment"
return s}function F(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments"
return s}function H(n,e){var s
i=a["_"]
s=i||n["_"]
f=c.program(31,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===u){s=s.call(n,f)}else{s=v.call(n,s,f)}if(s||s===0){return s}else{return""}}function M(n,e){return"Comment"}function q(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(34,N,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function N(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["moderation_mod-controls"],"moderation_mod-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function j(n,e){var s="",r,o
s+="\n            "
i=a.showAuthorControls
r=i||n.showAuthorControls
o=a["if"]
f=c.program(37,Y,e)
f.hash={}
f.fn=f
f.inverse=c.program(40,z,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function Y(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(38,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function E(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_author-controls"],"discussion_author-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function z(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(41,B,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function B(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_flag-controls"],"discussion_flag-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function G(n,e){var s="",r,o
s+='\n    <div class="discussion-meta-info">\n'
s+='\n        <a href="'
i=a.focusUrl
r=i||n.focusUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focusUrl",{hash:{}})}s+=d(r)
i=a.expandKey
r=i||n.expandKey
o=a["if"]
f=c.program(44,J,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+='"\n           class="timeago" title="'
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+'">\n            '
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+"\n        </a>\n\n        "
i=a.focus
r=i||n.focus
o=a["if"]
f=c.program(46,L,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n        "
i=a.inUserProfile
r=i||n.inUserProfile
o=a.unless
f=c.program(53,W,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n    </div>\n    "
return s}function J(n,e){var s="",r
s+="?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)
return s}function L(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(47,O,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=v.call(n,r,f)}if(r||r===0){s+=r}s+="</span>\n            "
i=a.focusIsVideo
r=i||n.focusIsVideo
o=a["if"]
f=c.program(49,Q,e)
f.hash={}
f.fn=f
f.inverse=c.program(51,R,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function O(n,e){return"on"}function Q(n,e){var s="",r
s+='\n                <a class="modal-video"\n                   href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'"\n                   data-translated-title="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+'"\n                   data-translated-description="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedDescription",{hash:{}})}s+=d(r)+'"\n                   data-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.youtubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.youtubeId",{hash:{}})}s+=d(r)+'"\n                   data-translated-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedYoutubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedYoutubeId",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function R(n,e){var s="",r
s+='\n                <a href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function W(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(54,X,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=v.call(n,r,f)}if(r||r===0){s+=r}s+='</span>\n            <a class="author-nickname discussion-author" data-user-id="'
i=a.authorUserId
r=i||n.authorUserId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorUserId",{hash:{}})}s+=d(r)+'">\n                '
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
o=a["if"]
f=c.program(56,Z,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                "
i=a.authorNickname
r=i||n.authorNickname
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorNickname",{hash:{}})}s+=d(r)+"\n            </a>\n        "
return s}function X(n,e){return"by"}function Z(n,e){var s="",r
s+='\n                    <img class="discussion-author-avatar" src="'
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorAvatarSrc",{hash:{}})}s+=d(r)+'">\n                '
return s}o+='\n<div class="discussion-meta">\n    <div class="discussion-meta-controls">\n'
o+="\n        "
i=a.badges
t=i||e.badges
l=a["if"]
f=c.program(1,m,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n"
o+="\n        "
i=a.hideVotes
t=i||e.hideVotes
l=a.unless
f=c.program(4,g,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.spinoffCount
t=i||e.spinoffCount
l=a["if"]
f=c.program(9,x,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.inUserProfile
t=i||e.inUserProfile
l=a.unless
f=c.program(14,I,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.showModControls
t=i||e.showModControls
l=a["if"]
f=c.program(33,q,r)
f.hash={}
f.fn=f
f.inverse=c.program(36,j,r)
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n    </div>\n\n"
o+="\n    "
i=a.isScratchpad
t=i||e.isScratchpad
l=a.unless
f=c.program(43,G,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/vote-controls.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,o=Handlebars.templates=Handlebars.templates||{}
o["discussion-package_vote-controls"]=module.exports=e(function(e,o,n,t,a){n=n||e.helpers
var i="",s,l,r,f,c=this,p="function",d=n.blockHelperMissing,u=n.helperMissing,v=void 0,h=this.escapeExpression
function y(e,o){return" voted"}function g(e,o){return"Vote up, this is encouraging or helpful (click again to undo)"}function k(e,o){return" voted"}function m(e,o){return"Vote down, this is not encouraging or helpful (click again to undo)"}i+='<div class="discussion-vote">\n    <div class="vote-for vote-for-js vote-up'
r=n.upVoted
s=r||o.upVoted
l=n["if"]
f=c.program(1,y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
s=l.call(o,s,f)
if(s||s===0){i+=s}i+='"\n                title="'
r=n["_"]
s=r||o["_"]
f=c.program(3,g,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof s===p){s=s.call(o,f)}else{s=d.call(o,s,f)}if(s||s===0){i+=s}i+='"\n                data-key="'
r=n.key
s=r||o.key
if(typeof s===p){s=s.call(o,{hash:{}})}else if(s===v){s=u.call(o,"key",{hash:{}})}i+=h(s)+'"\n                data-vote-type="1">\n    </div>\n    <div class="vote-for vote-for-js vote-down'
r=n.downVoted
s=r||o.downVoted
l=n["if"]
f=c.program(5,k,a)
f.hash={}
f.fn=f
f.inverse=c.noop
s=l.call(o,s,f)
if(s||s===0){i+=s}i+='"\n                title="'
r=n["_"]
s=r||o["_"]
f=c.program(7,m,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof s===p){s=s.call(o,f)}else{s=d.call(o,s,f)}if(s||s===0){i+=s}i+='"\n                data-key="'
r=n.key
s=r||o.key
if(typeof s===p){s=s.call(o,{hash:{}})}else if(s===v){s=u.call(o,"key",{hash:{}})}i+=h(s)+'"\n                data-vote-type="-1">\n    </div>\n</div>\n'
return i})})()
});
KAdefine("javascript/discussion-package/flag-controls.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_flag-controls"]=module.exports=a(function(a,e,n,l,s){n=n||a.helpers
var r="",o,t,i,f,c=this,p="function",h=n.helperMissing,g=void 0,u=this.escapeExpression,d=n.blockHelperMissing
function y(a,e){var l="",s
l+='\n    <span class="flag-tools mod-action-complete" data-key="'
i=n.key
s=i||a.key
if(typeof s===p){s=s.call(a,{hash:{}})}else if(s===g){s=h.call(a,"key",{hash:{}})}l+=u(s)+'">\n            '
l+='\n            <a href="javascript:void(0);" class="flag-show action-complete" title="'
i=n["_"]
s=i||a["_"]
f=c.program(2,m,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===p){s=s.call(a,f)}else{s=d.call(a,s,f)}if(s||s===0){l+=s}l+='">'
i=n["_"]
s=i||a["_"]
f=c.program(4,v,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===p){s=s.call(a,f)}else{s=d.call(a,s,f)}if(s||s===0){l+=s}l+="</a>\n    </span>\n"
return l}function m(a,e){return"Flagged"}function v(a,e){return"Flagged"}function k(a,e){var l="",s,r
l+='\n    <span class="flag-tools" data-key="'
i=n.key
s=i||a.key
if(typeof s===p){s=s.call(a,{hash:{}})}else if(s===g){s=h.call(a,"key",{hash:{}})}l+=u(s)+'">\n        <a href="javascript:void(0);" class="flag-show'
i=n.isScratchpad
s=i||a.isScratchpad
r=n["if"]
f=c.program(7,_,e)
f.hash={}
f.fn=f
f.inverse=c.noop
s=r.call(a,s,f)
if(s||s===0){l+=s}l+='" title="'
i=n["_"]
s=i||a["_"]
f=c.program(9,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===p){s=s.call(a,f)}else{s=d.call(a,s,f)}if(s||s===0){l+=s}l+='">'
i=n["_"]
s=i||a["_"]
f=c.program(11,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===p){s=s.call(a,f)}else{s=d.call(a,s,f)}if(s||s===0){l+=s}l+="</a>\n    </span>\n"
return l}function _(a,e){return" scratchpad-flagging"}function b(a,e){return"Flag for moderator attention"}function F(a,e){return"Flag"}r+="\n"
i=n.flaggedByUser
o=i||e.flaggedByUser
t=n["if"]
f=c.program(1,y,s)
f.hash={}
f.fn=f
f.inverse=c.program(6,k,s)
o=t.call(e,o,f)
if(o||o===0){r+=o}r+="\n"
return r})})()
});
KAdefine("javascript/discussion-package/author-controls.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_author-controls"]=module.exports=a(function(a,s,e,o,t){e=e||a.helpers
o=o||a.partials
var l="",r,i,n,h=this,c="function",p=e.helperMissing,f=void 0,u=this.escapeExpression,d=e.blockHelperMissing
function v(a,s){return"Edit"}function m(a,s){return"Delete"}l+='<span class="mod-tools" data-key="'
i=e.key
r=i||s.key
if(typeof r===c){r=r.call(s,{hash:{}})}else if(r===f){r=p.call(s,"key",{hash:{}})}l+=u(r)+'" data-is-author="'
i=e.showAuthorControls
r=i||s.showAuthorControls
if(typeof r===c){r=r.call(s,{hash:{}})}else if(r===f){r=p.call(s,"showAuthorControls",{hash:{}})}l+=u(r)+'">\n    <a href="javascript:void(0);" class="edit">'
i=e["_"]
r=i||s["_"]
n=h.program(1,v,t)
n.hash={}
n.fn=n
n.inverse=h.noop
if(i&&typeof r===c){r=r.call(s,n)}else{r=d.call(s,r,n)}if(r||r===0){l+=r}l+="</a>\n    "
r=s
r=h.invokePartial(o["discussion_meta-separator"],"discussion_meta-separator",r,e,o)
if(r||r===0){l+=r}l+='\n    <a href="javascript:void(0);" class="delete">'
i=e["_"]
r=i||s["_"]
n=h.program(3,m,t)
n.hash={}
n.fn=n
n.inverse=h.noop
if(i&&typeof r===c){r=r.call(s,n)}else{r=d.call(s,r,n)}if(r||r===0){l+=r}l+="</a>\n</span>\n"
return l})})()
});
KAdefine("javascript/discussion-package/visit-profile-promo.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_visit-profile-promo"]=module.exports=n(function(n,e,s,i,r){s=s||n.helpers
var a="",o,l,t,f,p=this,c="function",u=s.blockHelperMissing,h=s.helperMissing,d=void 0,v=this.escapeExpression
function g(n,e){var i="",r
i+="\n            "
t=s["_"]
r=t||n["_"]
f=p.program(2,m,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof r===c){r=r.call(n,f)}else{r=u.call(n,r,f)}if(r||r===0){i+=r}i+="\n        "
return i}function m(n,e){return"Thanks for asking!"}function k(n,e){var i="",r
i+="\n            "
t=s["_"]
r=t||n["_"]
f=p.program(5,y,e)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof r===c){r=r.call(n,f)}else{r=u.call(n,r,f)}if(r||r===0){i+=r}i+="\n        "
return i}function y(n,e){return"Thanks for answering!"}function _(n,e){var i="",r
i+='You can view your public discussion history\n            <a class="alert-link" href="'
t=s.profileRoot
r=t||n.profileRoot
if(typeof r===c){r=r.call(n,{hash:{}})}else if(r===d){r=h.call(n,"profileRoot",{hash:{}})}i+=v(r)+'discussion">on your\n            profile</a>.'
return i}a+='<div class="alert alert-info">\n    <span class="close" data-dismiss="alert">&#215;</span>\n    <div><strong>\n        '
t=s.askedQuestion
o=t||e.askedQuestion
l=s["if"]
f=p.program(1,g,r)
f.hash={}
f.fn=f
f.inverse=p.program(4,k,r)
o=l.call(e,o,f)
if(o||o===0){a+=o}a+="\n    </strong></div>\n    <div>"
t=s["_"]
o=t||e["_"]
f=p.program(7,_,r)
f.hash={}
f.fn=f
f.inverse=p.noop
if(t&&typeof o===c){o=o.call(e,f)}else{o=u.call(e,o,f)}if(o||o===0){a+=o}a+="\n    </div>\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/meta-separator.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_meta-separator"]=module.exports=a(function(a,s,e,t,n){e=e||a.helpers
var r,p=this
return'<span class="discussion-meta-separator">&#8226;</span>\n'})})()
});
KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_low-quality-notice-header"]=module.exports=e(function(e,a,n,l,r){n=n||e.helpers
var t="",s,i,o,c,h=this,p="function",f=n.helperMissing,d=void 0,u=this.escapeExpression,y=n.blockHelperMissing
function b(e,a){var l="",r
l+="\n        <h4>"
o=n["_"]
r=o||e["_"]
c=h.program(2,v,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===p){r=r.call(e,c)}else{r=y.call(e,r,c)}if(r||r===0){l+=r}l+="</h4>\n        "
l+="\n        "
o=n["_"]
r=o||e["_"]
c=h.program(4,m,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===p){r=r.call(e,c)}else{r=y.call(e,r,c)}if(r||r===0){l+=r}l+="\n        <br><br>\n        "
o=n["_"]
r=o||e["_"]
c=h.program(6,g,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===p){r=r.call(e,c)}else{r=y.call(e,r,c)}if(r||r===0){l+=r}l+="\n    "
return l}function v(e,a){return"Reduce, Reuse, Recycle."}function m(e,a){var l="",r
l+="Thank you for your "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}l+=u(r)+". Our scrub-bots have integrated it\n        into the earlier "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}l+=u(r)+" highlighted above and voted that up."
return l}function g(e,a){return"Yours in cleanliness, the Khan Academy Guardians."}function k(e,a){var l="",r
l+="\n        "
l+="\n        <h4>"
o=n["_"]
r=o||e["_"]
c=h.program(9,T,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===p){r=r.call(e,c)}else{r=y.call(e,r,c)}if(r||r===0){l+=r}l+="</h4>\n\n        "
l+="\n        "
o=n["_"]
r=o||e["_"]
c=h.program(11,F,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof r===p){r=r.call(e,c)}else{r=y.call(e,r,c)}if(r||r===0){l+=r}l+="\n    "
return l}function T(e,a){var l="",r
l+="Please clarify your "
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}l+=u(r)+"."
return l}function F(e,a){var l="",r
l+='Our robot army has targeted your post as "low quality". To appear on the\n        site as originally written, the Khan Academy Guardians must manually\n        approve your '
o=n.translatedFeedbackType
r=o||e.translatedFeedbackType
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===d){r=f.call(e,"translatedFeedbackType",{hash:{}})}l+=u(r)+"."
return l}t+='<div class="low-quality-notice-header">\n    '
o=n.duplicate
s=o||a.duplicate
i=n["if"]
c=h.program(1,b,r)
c.hash={}
c.fn=c
c.inverse=h.program(8,k,r)
s=i.call(a,s,c)
if(s||s===0){t+=s}t+="\n</div>\n"
return t})})()
});
KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_low-quality-notice-footer"]=module.exports=e(function(e,a,t,i,s){t=t||e.helpers
var l="",n,d,o=this,r="function",c=t.helperMissing,p=void 0,f=this.escapeExpression
l+='<div class="low-quality-notice-footer">\n    <em>'
d=t.translatedFeedbackEditTip
n=d||a.translatedFeedbackEditTip
if(typeof n===r){n=n.call(a,{hash:{}})}else if(n===p){n=c.call(a,"translatedFeedbackEditTip",{hash:{}})}l+=f(n)+"</em>\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_duplicate-notice"]=module.exports=e(function(e,a,n,s,t){n=n||e.helpers
var l="",i,r,c,o=this,d="function",p=n.helperMissing,h=void 0,u=this.escapeExpression,f=n.blockHelperMissing
function y(e,a){return"Reduce, Reuse, Recycle."}function b(e,a){var s="",t
s+="Thank you for your "
r=n.translatedFeedbackType
t=r||e.translatedFeedbackType
if(typeof t===d){t=t.call(e,{hash:{}})}else if(t===h){t=p.call(e,"translatedFeedbackType",{hash:{}})}s+=u(t)+". Our scrub-bots have integrated it\n    into the earlier "
r=n.translatedFeedbackType
t=r||e.translatedFeedbackType
if(typeof t===d){t=t.call(e,{hash:{}})}else if(t===h){t=p.call(e,"translatedFeedbackType",{hash:{}})}s+=u(t)+" highlighted above and voted that up.\n    <br>\n    Yours in cleanliness, the Khan Academy Guardians."
return s}l+='<div class="low-quality-notice duplicate-notice">\n    <span class="close" data-dismiss="alert">&#215;</span>\n    <h4>'
r=n["_"]
i=r||a["_"]
c=o.program(1,y,t)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof i===d){i=i.call(a,c)}else{i=f.call(a,i,c)}if(i||i===0){l+=i}l+="</h4>\n    "
l+="\n    "
r=n["_"]
i=r||a["_"]
c=o.program(3,b,t)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof i===d){i=i.call(a,c)}else{i=f.call(a,i,c)}if(i||i===0){l+=i}l+="\n</div>\n"
return l})})()
});
KAdefine("javascript/discussion-package/flag-modal.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_flag-modal"]=module.exports=n(function(n,e,i,a,l){i=i||n.helpers
var o="",r,s,t,f,c=this,p="function",u=i.helperMissing,h=void 0,v=this.escapeExpression,d=i.blockHelperMissing
function m(n,e){return"Flag for Guardian attention"}function g(n,e){var a="",l
a+="This "
t=i.translatedFeedbackType
l=t||n.translatedFeedbackType
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===h){l=u.call(n,"translatedFeedbackType",{hash:{}})}a+=v(l)+" is:"
return a}function _(n,e){return"abuse"}function y(n,e){return"disrespectful or offensive"}function b(n,e){return"an advertisement"}function k(n,e){var a="",l,o
a+='<div class="simple-button flag-as" data-flag="'
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(12,w,e)
f.hash={}
f.fn=f
f.inverse=c.program(14,Q,e)
l=o.call(n,l,f)
if(l||l===0){a+=l}a+='">\n                    <h4>\n                        '
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(16,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        "
t=i.isComment
l=t||n.isComment
o=i["if"]
f=c.program(19,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        "
t=i.isAnswer
l=t||n.isAnswer
o=i["if"]
f=c.program(22,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                    </h4>\n                    <ul>\n                        <li>\n                            "
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(25,x,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                            "
t=i.isComment
l=t||n.isComment
o=i["if"]
f=c.program(28,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                            "
t=i.isAnswer
l=t||n.isAnswer
o=i["if"]
f=c.program(31,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        </li>\n                    </ul>\n                </div>"
return a}function w(n,e){return"changetocomment"}function Q(n,e){return"changetoquestion"}function T(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(17,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function q(n,e){return"a tip or thanks"}function A(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(20,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function C(n,e){return"a question"}function F(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(23,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function H(n,e){return"a tip or thanks"}function x(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(26,B,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function B(n,e){return"should be in Tips & Thanks"}function M(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(29,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function E(n,e){return"should be in Questions"}function G(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(32,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function K(n,e){return"should be in Tips & Thanks"}function S(n,e){return"not helpful"}function W(n,e){return"low quality"}function j(n,e){return"not about the video topic"}function z(n,e){return"soliciting votes or seeking badges"}function D(n,e){var a="",l
a+="\n                            <li>"
t=i["_"]
l=t||n["_"]
f=c.program(43,I,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){a+=l}a+="</li>\n                        "
return a}function I(n,e){return"a homework question"}function J(n,e){var a="",l
a+="\n                            <li>"
t=i["_"]
l=t||n["_"]
f=c.program(46,L,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){a+=l}a+="</li>\n                        "
return a}function L(n,e){return"a duplicate answer"}function N(n,e){return"repeatedly making the same post"}function O(n,e){return"about the site"}function P(n,e){return'a question about Khan Academy (e.g. "What software does Sal use?")'}function R(n,e){return"a post about badges"}function U(n,e){return"a technical problem with the site"}function V(n,e){return"a request for videos or features"}o+='<div class="modal hide" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
t=i["_"]
r=t||e["_"]
f=c.program(1,m,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</h2>\n    </div>\n    <div class="modal-body">\n        <em>'
t=i.feedback
r=t||e.feedback
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===h){r=u.call(e,"feedback",{hash:{}})}o+=v(r)+'</em>\n\n        <div class="flag-options">\n            '
o+="\n            <h4>"
t=i["_"]
r=t||e["_"]
f=c.program(3,g,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</h4>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="inappropriate">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(5,_,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(7,y,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(9,b,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                '
t=i.canBeChanged
r=t||e.canBeChanged
s=i["if"]
f=c.program(11,k,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+='\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="lowquality">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(34,S,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(36,W,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(38,j,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(40,z,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        "
t=i.isQuestion
r=t||e.isQuestion
s=i["if"]
f=c.program(42,D,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+="\n                        "
t=i.isAnswer
r=t||e.isAnswer
s=i["if"]
f=c.program(45,J,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+="\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(48,N,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" data-flag="doesnotbelong">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(50,O,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(52,P,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(54,R,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(56,U,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(58,V,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/scratchpad-flag-modal.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_scratchpad-flag-modal"]=module.exports=n(function(n,a,i,l,e){i=i||n.helpers
var o="",s,t,r,f=this,p="function",c=i.blockHelperMissing
function d(n,a){return"Flag program for Guardian attention"}function g(n,a){return'Please consult our <a href="/cs/program-guidelines/" target="_blank">program guidelines</a> for what we consider to be appropriate programs.'}function u(n,a){return"How does this program violate the guidelines?"}function v(n,a){return"This program is:"}function h(n,a){return"<h4>abuse</h4>\n                    <ul>\n                        <li>disrespectful or offensive</li>\n                        <li>advertisement for off-site company/service</li>\n                    </ul>"}function m(n,a){return"<h4>plagiarism</h4>\n                    <ul>\n                        <li>not a spin-off and not giving credit to original author</li>\n                    </ul>"}function b(n,a){return"<h4>soliciting votes</h4>\n                    <ul>\n                        <li>requesting votes</li>\n                        <li>making promises for votes</li>\n                        <li>receiving votes from a voting ring</li>\n                    </ul>"}function y(n,a){return"<h4>using disallowed functionality</h4>\n                    <ul>\n                        <li>accessing externals or the DOM to go beyond allowed functionality</li>\n                        <li>examples: playing sounds, opening web pages, using localStorage</li>\n                    </ul>"}function _(n,a){return"<h4>off-topic</h4>\n                    <ul>\n                        <li>petitions to change the site</li>\n                        <li>contentious programs about politics, religion/atheism, or personal issues</li>\n                    </ul>"}o+='<div class="modal hide scratchpad-flag-modal" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
t=i["_"]
s=t||a["_"]
r=f.program(1,d,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='</h2>\n    </div>\n    <div class="modal-body">\n        '
t=i["_"]
s=t||a["_"]
r=f.program(3,g,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+="<br>\n        <label>"
t=i["_"]
s=t||a["_"]
r=f.program(5,u,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='</label>\n        <br>\n        <textarea name="justification" rows="3"></textarea>\n        <div class="flag-options">\n            <label>'
t=i["_"]
s=t||a["_"]
r=f.program(7,v,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='</label><br>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="inappropriate">\n                    '
t=i["_"]
s=t||a["_"]
r=f.program(9,h,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="plagiarism">\n                    '
t=i["_"]
s=t||a["_"]
r=f.program(11,m,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="vote-soliciting">\n                    '
t=i["_"]
s=t||a["_"]
r=f.program(13,b,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='\n                </div>\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="using-disallowed">\n                    '
t=i["_"]
s=t||a["_"]
r=f.program(15,y,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="doesnotbelong">\n                    '
t=i["_"]
s=t||a["_"]
r=f.program(17,_,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof s===p){s=s.call(a,r)}else{s=c.call(a,s,r)}if(s||s===0){o+=s}o+="\n                </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/discussion.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,i=Handlebars.templates=Handlebars.templates||{}
i["discussion-package_discussion"]=module.exports=s(function(s,i,n,e,a){n=n||s.helpers
e=e||s.partials
var d="",c,o,l=this
d+='<div class="discussion-container">\n    <div class="clear"></div>\n    '
c=i
c=l.invokePartial(e["discussion_video-discussion"],"discussion_video-discussion",c,n,e)
if(c||c===0){d+=c}d+="\n    "
c=i
c=l.invokePartial(e["discussion_discussion-guidelines"],"discussion_discussion-guidelines",c,n,e)
if(c||c===0){d+=c}d+='\n    <div class="clear"></div>\n</div>\n'
return d})})()
});
KAdefine("javascript/discussion-package/video-discussion.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_video-discussion"]=module.exports=n(function(n,s,i,e,a){i=i||n.helpers
e=e||n.partials
var o="",t,r,l,c,f=this,d="function",p=i.blockHelperMissing
function u(n,s){return'style="display:none;"'}function v(n,s){return"Questions"}function h(n,s){return'style="display:none;"'}function m(n,s){return"Tips &amp; Thanks"}function b(n,s){return'style="display:none;"'}function y(n,s){return"Spin-Offs"}function g(n,s){var e="",a
e+='\n            <li data-type="documentation" class="tabitem">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=f.program(14,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="</a>\n            </li>\n            "
return e}function _(n,s){return"Documentation"}function k(n,s){var e="",a
e+='\n            <li id="projectfeedback-tab-header" data-type="projectfeedback" class="tabitem">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=f.program(17,j,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="</a>\n            </li>\n            "
return e}function j(n,s){return"Help Requests"}function q(n,s){return"Clarifications"}function w(n,s){var e="",a
e+='\n            <div class="post-guidelines alert">\n                '
l=i["_"]
a=l||n["_"]
c=f.program(22,P,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="\n            </div>\n        "
return e}function P(n,s){return'\n                Want to ask a question to the community about improving your program?\n                <br>\n                Head over to the <a href="javascript:void(0);" data-tab-target="projectfeedback">help requests tab</a>!\n                <br>\n                We\'ll keep this area for questions that the community has for you about your program.'}function D(n,s){var e="",a,o
e+="\n            "
l=i.restrictPosting
a=l||n.restrictPosting
o=i.unless
c=f.program(25,F,s)
c.hash={}
c.fn=c
c.inverse=f.noop
a=o.call(n,a,c)
if(a||a===0){e+=a}e+="\n        "
return e}function F(n,s){var a="",o
a+="\n                "
o=n
o=f.invokePartial(e["discussion_question-form"],"discussion_question-form",o,i,e)
if(o||o===0){a+=o}a+="\n            "
return a}function H(n,s){var a="",o
a+="\n            "
o=n
o=f.invokePartial(e["discussion_comment-form"],"discussion_comment-form",o,i,e)
if(o||o===0){a+=o}a+="\n        "
return a}function C(n,s){return'\n    <div class="tab documentation-tab" style="display: none;">\n        <div class="documentation"></div>\n    </div>\n    '}function Q(n,s){return'\n    <div class="tab projectfeedback-tab" style="display:none;">\n        <div class="projectfeedback"></div>\n    </div>\n    '}function R(n,s){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}o+='\n<div class="video-discussion">\n    '
o+='\n    <div class="video-feedback-container upper" style="display: none;"></div>\n    <div class="video-discussion-header">\n        <ul class="tabrow">\n            <li id="questions-tab-header" data-type="questions" class="tabitem selected" '
l=i.hideQuestions
t=l||s.hideQuestions
r=i["if"]
c=f.program(1,u,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
t=l||s["_"]
c=f.program(3,v,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+='\n                </a>\n            </li>\n            <li id="comments-tab-header" data-type="comments" class="tabitem" '
l=i.hideComments
t=l||s.hideComments
r=i["if"]
c=f.program(5,h,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
t=l||s["_"]
c=f.program(7,m,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="\n                </a>\n            </li>\n            "
o+='\n            <li id="spinoffs-tab-header" data-type="spin-offs" class="tabitem"\n                '
l=i.showSpinoffs
t=l||s.showSpinoffs
r=i.unless
c=f.program(9,b,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">'
l=i["_"]
t=l||s["_"]
c=f.program(11,y,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="</a>\n            </li>\n            "
l=i.showDocumentation
t=l||s.showDocumentation
r=i["if"]
c=f.program(13,g,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+="\n            "
l=i.showProjectFeedback
t=l||s.showProjectFeedback
r=i["if"]
c=f.program(16,k,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n            <li data-type="clarifications" class="tabitem" style="display: none;">\n                <a href="javascript:void(0);">'
l=i["_"]
t=l||s["_"]
c=f.program(19,q,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+='</a>\n            </li>\n        </ul>\n        <span class="discussion-list-sort"></span>\n    </div>\n\n    <div class="tab questions-tab">\n        '
l=i.canRequestFeedback
t=l||s.canRequestFeedback
r=i["if"]
c=f.program(21,w,a)
c.hash={}
c.fn=c
c.inverse=f.program(24,D,a)
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n        <div class="questions">\n            '
t=s
t=f.invokePartial(e["discussion_discussion-list"],"discussion_discussion-list",t,i,e)
if(t||t===0){o+=t}o+='\n        </div>\n    </div>\n\n    <div class="tab comments-tab" style="display: none;">\n        '
l=i.restrictPosting
t=l||s.restrictPosting
r=i.unless
c=f.program(27,H,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n        <div class="comments"></div>\n    </div>\n\n    <div class="tab spin-offs-tab" style="display: none;">\n        <div class="spin-offs"></div>\n    </div>\n\n    '
l=i.showDocumentation
t=l||s.showDocumentation
r=i["if"]
c=f.program(29,C,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+="\n\n    "
l=i.showProjectFeedback
t=l||s.showProjectFeedback
r=i["if"]
c=f.program(31,Q,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n\n    <div class="tab clarifications-tab" style="display: none;">\n        <div class="clarifications"></div>\n    </div>\n\n    <div class="discussion-progress-bar" style="display:none"><img src="/images/throbber.gif"></div>\n    <a class="discussion-i18n-message" style="display: none">'
l=i["_"]
t=l||s["_"]
c=f.program(33,R,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="</a>\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/discussion-guidelines.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["discussion-package_discussion-guidelines"]=module.exports=n(function(n,e,i,s,a){i=i||n.helpers
var r="",l,o,t,f,c=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(n,e){var s="",a,r
s+="\n    "
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
r=i["if"]
f=c.program(2,g,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isVideo
a=t||n.isVideo
r=i["if"]
f=c.program(7,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isArticle
a=t||n.isArticle
r=i["if"]
f=c.program(25,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(43,I,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n        <p>\n            "
t=i["_"]
a=t||n["_"]
f=c.program(45,O,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n        </p>\n    <br>\n    "
return s}function g(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(3,_,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n    <p>\n        "
t=i["_"]
a=t||n["_"]
f=c.program(5,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </p>\n    <br>\n    "
return s}function _(n,e){return"Answer more questions"}function y(n,e){var s="",a
s+='Visit <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">Community Questions</a>\n        to answer new questions in\n        <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">'
t=i.translatedCommunityQuestionsTitle
a=t||n.translatedCommunityQuestionsTitle
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"translatedCommunityQuestionsTitle",{hash:{}})}s+=d(a)+"</a>."
return s}function b(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(8,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(17,x,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function k(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(9,Q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(11,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(13,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(15,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function Q(n,e){return"Report a mistake in the video"}function w(n,e){return"Example:"}function E(n,e){return'At 2:33, Sal said "single bonds" but meant "covalent bonds."'}function q(n,e){return"Report a mistake in the video"}function x(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(18,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function U(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(19,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(21,R,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(23,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function A(n,e){return"Report a mistake in the video"}function R(n,e){return"Clarifications are disabled for this video."}function C(n,e){return"View existing clarifications"}function T(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(26,V,e)
f.hash={}
f.fn=f
f.inverse=c.program(35,D,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function V(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(27,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(29,j,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(31,P,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(33,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function H(n,e){return"Report a mistake in the article"}function j(n,e){return"Example:"}function P(n,e){return"The link in the third paragraph is broken."}function F(n,e){return"Report a mistake in the article"}function D(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(36,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function K(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(37,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(39,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(41,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function M(n,e){return"Report a mistake in the article"}function S(n,e){return"Clarifications are disabled for this article."}function G(n,e){return"View existing clarifications"}function I(n,e){return"Discuss the site"}function O(n,e){return'For general discussions about Khan Academy, \n            <a href="http://khanacademyfeedback.uservoice.com/">\n                click here</a>.'}function Y(n,e){return"Flag inappropriate posts"}function z(n,e){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function B(n,e){return"abuse"}function J(n,e){return"disrespectful or offensive"}function L(n,e){return"an advertisement"}function N(n,e){return"not helpful"}function W(n,e){return"low quality"}function X(n,e){return"not about the video topic"}function Z(n,e){return"soliciting votes or seeking badges"}function $(n,e){return"a homework question"}function ne(n,e){return"a duplicate answer"}function ee(n,e){return"repeatedly making the same post"}function ie(n,e){return"wrong category"}function se(n,e){return"a tip or thanks in Questions"}function ae(n,e){return"a question in Tips & Thanks"}function re(n,e){return"an answer that should be its own question"}function le(n,e){return"about the site"}function oe(n,e){return"a question about Khan Academy"}function te(n,e){return"Visit our FAQ"}function fe(n,e){return"a post about badges"}function ce(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(88,ue,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(90,pe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function ue(n,e){return"a technical problem with the site"}function pe(n,e){return"a request for videos or features"}function he(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(93,de,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+='\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
t=i["_"]
a=t||n["_"]
f=c.program(95,ve,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="</a>)</div>\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(97,me,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function de(n,e){return"a technical problem with the site"}function ve(n,e){return"Report a problem"}function me(n,e){return'a request for <a href="http://khanacademyfeedback.uservoice.com/forums/252108-general">features</a>'}function ge(n,e){return"Your Spin-Offs"}r+='<div class="main-discussion-guidelines discussion-guidelines">\n    '
t=i.restrictPosting
l=t||e.restrictPosting
o=i.unless
f=c.program(1,m,a)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(e,l,f)
if(l||l===0){r+=l}r+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
l=t||e["_"]
f=c.program(47,Y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</div>\n\n    <p>\n        "
t=i["_"]
l=t||e["_"]
f=c.program(49,z,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="\n    </p>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
l=t||e["_"]
f=c.program(51,B,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(53,J,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(55,L,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
l=t||e["_"]
f=c.program(57,N,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(59,W,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(61,X,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(63,Z,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(65,$,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(67,ne,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(69,ee,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
l=t||e["_"]
f=c.program(71,ie,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(73,se,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(75,ae,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(77,re,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
l=t||e["_"]
f=c.program(79,le,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</div>\n    <ul>\n        <li>\n            "
t=i["_"]
l=t||e["_"]
f=c.program(81,oe,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+='\n            <div class="discussion-guidelines-link">(<a href="http://khanacademy.desk.com/">'
t=i["_"]
l=t||e["_"]
f=c.program(83,te,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</a>)</div>\n        </li>\n        <li>"
t=i["_"]
l=t||e["_"]
f=c.program(85,fe,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+="</li>\n        "
t=i.restrictPosting
l=t||e.restrictPosting
o=i["if"]
f=c.program(87,ce,a)
f.hash={}
f.fn=f
f.inverse=c.program(92,he,a)
l=o.call(e,l,f)
if(l||l===0){r+=l}r+='\n    </ul>\n</div>\n<div class="user-forks discussion-guidelines">\n    <div class="discussion-guidelines-header">'
t=i["_"]
l=t||e["_"]
f=c.program(99,ge,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===u){l=l.call(e,f)}else{l=v.call(e,l,f)}if(l||l===0){r+=l}r+='</div>\n    <div class="user-fork-list"></div>\n</div>\n'
return r})})()
});
KAdefine("javascript/discussion-package/scratchpad-thumbnail.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["discussion-package_scratchpad-thumbnail"]=module.exports=a(function(a,s,e,t,l){e=e||a.helpers
var i="",h,c,n=this,r="function",d=e.helperMissing,o=void 0,p=this.escapeExpression
i+='<a href="'
c=e.showPath
h=c||s.showPath
if(typeof h===r){h=h.call(s,{hash:{}})}else if(h===o){h=d.call(s,"showPath",{hash:{}})}i+=p(h)+'" class="discussion-scratchpad-thumbnail">\n    <img src="'
c=e.imagePath
h=c||s.imagePath
if(typeof h===r){h=h.call(s,{hash:{}})}else if(h===o){h=d.call(s,"imagePath",{hash:{}})}i+=p(h)+'" class="scratchpad-thumbnail">\n    <div class="discussion-scratchpad-title">'
c=e.translatedTitle
h=c||s.translatedTitle
if(typeof h===r){h=h.call(s,{hash:{}})}else if(h===o){h=d.call(s,"translatedTitle",{hash:{}})}i+=p(h)+"</div>\n</a>\n"
return i})})()
});
KAdefine("javascript/discussion-package/topic-discussion.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_topic-discussion"]=module.exports=e(function(e,n,i,o,l){i=i||e.helpers
var a="",r,s,t,f=this,c="function",p=i.blockHelperMissing
function h(e,n){return"Give a great answer"}function u(e,n){return"Be a guide"}function d(e,n){return'We\'re teaching each other &ndash; so don\'t just answer "Yes" or "No", share your answer the way your favorite teacher would.'}function _(e,n){return"Vote, don't echo"}function g(e,n){return"If someone has already answered the question well, don't repeat their answer &ndash; vote it up instead."}function m(e,n){return"Flag inappropriate posts"}function v(e,n){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function y(e,n){return"abuse"}function b(e,n){return"disrespectful or offensive"}function k(e,n){return"an advertisement"}function w(e,n){return"not helpful"}function q(e,n){return"low quality"}function H(e,n){return"not about the video topic"}function A(e,n){return"soliciting votes or seeking badges"}function D(e,n){return"a homework question"}function E(e,n){return"a duplicate answer"}function F(e,n){return"repeatedly making the same post"}function G(e,n){return"wrong category"}function I(e,n){return"a tip or thanks in Questions"}function K(e,n){return"an answer that should be its own question"}function Q(e,n){return"about the site"}function R(e,n){return"a question about Khan Academy"}function V(e,n){return"Visit our FAQ"}function j(e,n){return"a post about badges"}function x(e,n){return"a technical problem with the site"}function B(e,n){return"Report a problem"}function C(e,n){return'a request for <a href="http://khanacademyfeedback.uservoice.com/forums/252108-general">features</a>'}function M(e,n){return"Recent questions"}function N(e,n){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}a+='<div class="content-pane-inner">\n<div class="topic-discussion-guidelines visible-desktop">\n\n<h3>'
s=i["_"]
r=s||n["_"]
t=f.program(1,h,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h3>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(3,u,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<p>"
s=i["_"]
r=s||n["_"]
t=f.program(5,d,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</p>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(7,_,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<p>"
s=i["_"]
r=s||n["_"]
t=f.program(9,g,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</p>\n\n<h3>"
s=i["_"]
r=s||n["_"]
t=f.program(11,m,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h3>\n<p>"
s=i["_"]
r=s||n["_"]
t=f.program(13,v,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</p>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(15,y,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<ul>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(17,b,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(19,k,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n</ul>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(21,w,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<ul>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(23,q,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(25,H,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(27,A,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(29,D,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(31,E,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(33,F,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n</ul>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(35,G,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<ul>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(37,I,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(39,K,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n</ul>\n\n<h4>"
s=i["_"]
r=s||n["_"]
t=f.program(41,Q,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</h4>\n<ul>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(43,R,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+=' <div class="discussion-guidelines-link">(<a href="http://khanacademy.desk.com/">'
s=i["_"]
r=s||n["_"]
t=f.program(45,V,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</a>)</div></li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(47,j,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(49,x,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+=' <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
s=i["_"]
r=s||n["_"]
t=f.program(51,B,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</a>)</div></li>\n<li>"
s=i["_"]
r=s||n["_"]
t=f.program(53,C,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+='</li>\n</ul>\n\n</div>\n<div class="all-questions video-discussion">\n<h3>'
s=i["_"]
r=s||n["_"]
t=f.program(55,M,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+='</h3>\n<div class="discussion-progress-bar"><img src="/images/throbber.gif"></div>\n<a class="discussion-i18n-message" style="display: none">'
s=i["_"]
r=s||n["_"]
t=f.program(57,N,l)
t.hash={}
t.fn=t
t.inverse=f.noop
if(s&&typeof r===c){r=r.call(n,t)}else{r=p.call(n,r,t)}if(r||r===0){a+=r}a+="</a>\n</div>\n</div>\n"
return a})})()
});
KAdefine("javascript/discussion-package/spinoffs.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
Discussion.SpinOffs={_loadComplete:false,_loadProgress:0,_loadMax:2,_containerSelector:".spin-offs",_userContainerSelector:".user-fork-list",_tabSelector:".spin-offs-tab",_tabHeaderSelector:"#spinoffs-tab-header",subTab:"spin-offs",show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(s){this.sortValue=s
this.reset()
this.load()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._loadProgress=0
var s=$(".main-discussion-guidelines").height()||0,i=$(".video-discussion").height()||0,e=Math.max(s,i)
Discussion._minHeight=e
Discussion.data.$container.css("min-height",e)
var t="/api/labs/scratchpads/"+Discussion.data.focusId+"/top-forks",o={casing:"camel"}
this.list=new DiscussionList({itemTemplate:"discussion.fork",containerSelector:this._containerSelector,requestURL:t,params:o,itemKey:"scratchpads",sorts:[{name:$._("Top"),title:$._("Highest Quality"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true})
return s}})
if(KA.isPhantom()){this._loadMax=1
return}var t="/api/labs/scratchpads/"+Discussion.data.focusId+"/user-forks",o={casing:"camel"}
this.userForkList=new DiscussionList({itemTemplate:"discussion.fork",containerSelector:this._userContainerSelector,requestURL:t,params:o,itemKey:"scratchpads",sorts:[{name:$._("Top"),title:$._("Highest Quality"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishUserLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true
s.hideAuthorName=true
s.showDate=true
s.wide=true})
return s}})},_checkComplete:function(){Discussion.SpinOffs._loadProgress+=1
if(Discussion.SpinOffs._loadProgress===Discussion.SpinOffs._loadMax){Discussion.SpinOffs._loadComplete=true
Discussion._finishLoad()}},_finishLoad:function(s){Discussion.SpinOffs.list.$container.find(".discussion-list-content").addClass("row")
var i=Discussion.SpinOffs._containerSelector
if(!$(i).find(".fork").length){$(i).html("<p class='no-results'>"+$._("Be the first to "+"<button id='fork-button' class='simple-button green'>"+"save as a spin-off"+"</button>!")+"</p>")}Discussion.SpinOffs._checkComplete()},_finishUserLoad:function(s){Discussion.SpinOffs.userForkList.$container.find(".discussion-list-content").addClass("row")
var i=Discussion.SpinOffs._userContainerSelector
if(!$(i).find(".fork").length){if(!KA.isPhantom()){$(i).html("<p class='no-results'>"+$._("If you save a spin-off "+"of this program, you will see it here (as well as "+"in your <a href='"+KA.getUserProfile().get("profileRoot")+"programs'>My Programs</a> list).")+"</p>")}else{$(i).html("<p class='no-results'>"+$._("Login to view your spin-offs of this program.")+"</p>")}}Discussion.SpinOffs._checkComplete()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")
$(this._userContainerSelector).html("")}}
});
KAdefine("javascript/discussion-package/documentation.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
Discussion.Documentation={_containerSelector:".documentation",_tabSelector:".documentation-tab",subTab:"documentation",show:function(){PackageManager.require("scratchpad-base.js").then(function(){Discussion.Documentation.load()
$(Discussion.Documentation._tabSelector).show()})},hide:function(){$(this._tabSelector).hide()},load:function(n){this._independent=!!n
new ScratchpadDocsView({el:$(this._containerSelector)}).render()
Discussion.hideProgressBar()},_finishLoad:function(n){if(!this._independent){Discussion._finishLoad()}},reset:$.noop}
});
KAdefine("javascript/discussion-package/fork.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_fork"]=module.exports=e(function(e,a,s,i,l){s=s||e.helpers
i=i||e.partials
var n="",r,t,o,h,f=this,c="function",d=s.helperMissing,u=void 0,p=this.escapeExpression,v=s.blockHelperMissing
function m(e,a){return" ellipsis"}function g(e,a){var i="",l,n
i+='\n        <div>\n            <a class="author-nickname discussion-author'
o=s.wide
l=o||e.wide
n=s.unless
h=f.program(4,k,a)
h.hash={}
h.fn=h
h.inverse=f.noop
l=n.call(e,l,h)
if(l||l===0){i+=l}i+=' profile-programs" data-user-id="'
o=s.authorUserId
l=o||e.authorUserId
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"authorUserId",{hash:{}})}i+=p(l)+'">'
o=s.authorNickname
l=o||e.authorNickname
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"authorNickname",{hash:{}})}i+=p(l)+"</a>\n        </div>\n        "
return i}function k(e,a){return" ellipsis"}function y(e,a){var i="",l
i+="\n        <div>\n            "
o=s["_"]
l=o||e["_"]
h=f.program(7,b,a)
h.hash={}
h.fn=h
h.inverse=f.noop
if(o&&typeof l===c){l=l.call(e,h)}else{l=v.call(e,l,h)}if(l||l===0){i+=l}i+='\n            <time class="timeago" datetime="'
o=s.created
l=o||e.created
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"created",{hash:{}})}i+=p(l)+'">\n                '
o=s.created
l=o||e.created
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"created",{hash:{}})}i+=p(l)+"</time>\n        </div>\n        "
return i}function b(e,a){return"Updated"}function w(e,a){var i="",l
i+='\n            <div class="discussion-vote">\n                <div class="vote-for vote-'
o=s.userVote
l=o||e.userVote
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"userVote",{hash:{}})}i+=p(l)+' voted" data-vote-type="1"></div>\n            </div>\n            '
return i}n+='<div class="fork span1">\n    <a href="'
o=s.url
r=o||a.url
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"url",{hash:{}})}n+=p(r)+'"><img class="fork-thumb" src="'
o=s.thumb
r=o||a.thumb
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"thumb",{hash:{}})}n+=p(r)+'" /></a>\n    <div class="fork-info">\n        <div><a href="'
o=s.url
r=o||a.url
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"url",{hash:{}})}n+=p(r)+'" class="fork-info-title'
o=s.wide
r=o||a.wide
t=s.unless
h=f.program(1,m,l)
h.hash={}
h.fn=h
h.inverse=f.noop
r=t.call(a,r,h)
if(r||r===0){n+=r}n+='">'
o=s.translatedTitle
r=o||a.translatedTitle
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"translatedTitle",{hash:{}})}n+=p(r)+"</a></div>\n        "
o=s.hideAuthorName
r=o||a.hideAuthorName
t=s.unless
h=f.program(3,g,l)
h.hash={}
h.fn=h
h.inverse=f.noop
r=t.call(a,r,h)
if(r||r===0){n+=r}n+="\n        "
o=s.showDate
r=o||a.showDate
t=s["if"]
h=f.program(6,y,l)
h.hash={}
h.fn=h
h.inverse=f.noop
r=t.call(a,r,h)
if(r||r===0){n+=r}n+="\n        <div>\n            "
r=a
r=f.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",r,s,i)
if(r||r===0){n+=r}n+="\n            "
o=s.userVote
r=o||a.userVote
t=s["if"]
h=f.program(9,w,l)
h.hash={}
h.fn=h
h.inverse=f.noop
r=t.call(a,r,h)
if(r||r===0){n+=r}n+="\n        </div>\n    </div>\n</div>\n"
return n})})()
});
KAdefine("javascript/discussion-package/sorts.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["discussion-package_sorts"]=module.exports=e(function(e,a,s,l,t){s=s||e.helpers
var i="",n,r,h,o,f=this,c="function",p=s.helperMissing,u=void 0,v=this.escapeExpression
function d(e,a){var l="",t,i
l+='\n    <a data-value="'
t=e.value
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.value",{hash:{}})}l+=v(t)+'"\n        '
t=e.isDefault
i=s["if"]
o=f.program(2,m,a)
o.hash={}
o.fn=o
o.inverse=f.noop
t=i.call(e,t,o)
if(t||t===0){l+=t}l+='\n        title="'
t=e.title
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.title",{hash:{}})}l+=v(t)+'"\n        href="javascript:void(0);">'
t=e.name
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.name",{hash:{}})}l+=v(t)+"</a>\n"
return l}function m(e,a){return'class="selected"'}h=s.sorts
n=h||a.sorts
r=s.each
o=f.program(1,d,t)
o.hash={}
o.fn=o
o.inverse=f.noop
n=r.call(a,n,o)
if(n||n===0){i+=n}i+="\n"
return i})})()
});
KAdefine("javascript/discussion-package/formatting-tips.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,t=Handlebars.templates=Handlebars.templates||{}
t["discussion-package_formatting-tips"]=module.exports=n(function(n,t,e,r,i){e=e||n.helpers
var o="",a,s,l,c=this,f="function",p=e.blockHelperMissing
function d(n,t){return"Typing this:"}function u(n,t){return"Displays this:"}function h(n,t){return"Accent your posts with *bold* or _italics_ and format `code`"}function g(n,t){return"```if (x < 0) {<br>    return;<br>}```"}function m(n,t){return"Accent your posts with <strong>bold</strong> or <i>italics</i> and format <code>code</code>"}function b(n,t){return"<code>if (x < 0) {<br>    return;<br>}</code>"}o+='<div class="formatting-tips-container" style="display:none;">\n    <div class="formatting-tips-triangle"></div>\n    <div class="formatting-tips-panel">\n        <table>\n            <tr class="discussion-guidelines-format-table-header">\n            <td>\n                '
s=e["_"]
a=s||t["_"]
l=c.program(1,d,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n            </td>\n            <td>\n                "
s=e["_"]
a=s||t["_"]
l=c.program(3,u,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+='\n            </td>\n            </tr>\n            <tr class="discussion-guidelines-format-table">\n            <td>\n                '
s=e["_"]
a=s||t["_"]
l=c.program(5,h,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n                <pre>"
s=e.i18nDoNotTranslate
a=s||t.i18nDoNotTranslate
l=c.program(7,g,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="</pre>\n            </td>\n            <td>\n                "
s=e["_"]
a=s||t["_"]
l=c.program(9,m,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n                <pre>"
s=e.i18nDoNotTranslate
a=s||t.i18nDoNotTranslate
l=c.program(11,b,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="</pre>\n            </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"
return o})})()
});
KAdefine("javascript/discussion-package/form-controls.handlebars", function(require, requireWithVars, module, exports) {
(function(){var s=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["discussion-package_form-controls"]=module.exports=s(function(s,n,e,a,i){e=e||s.helpers
var l="",t,o,r,c=this,p="function",f=e.blockHelperMissing,u=e.helperMissing,d=void 0,h=this.escapeExpression
function m(s,n){return"Formatting tips"}function b(s,n){return'<a href="#" class="discussion-cancel" tabindex="3">Cancel</a>\n    or'}l+='<div class="discussion-controls" style="display: none">\n    <div class="formatting-tips">\n        <a href="#" class="show-formatting-tips">'
o=e["_"]
t=o||n["_"]
r=c.program(1,m,i)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=f.call(n,t,r)}if(t||t===0){l+=t}l+="</a>\n    </div>\n    "
o=e["_"]
t=o||n["_"]
r=c.program(3,b,i)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=f.call(n,t,r)}if(t||t===0){l+=t}l+='\n    <input class="simple-button primary discussion-submit"\n           type="button"\n           value="'
o=e.label
t=o||n.label
if(typeof t===p){t=t.call(n,{hash:{}})}else if(t===d){t=u.call(n,"label",{hash:{}})}l+=h(t)+'"\n           tabindex="2" />\n</div>\n'
return l})})()
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/discussion-package/handlebars-helpers.js");
KAdefine.require("./javascript/discussion-package/discussion-list.js");
KAdefine.require("./javascript/discussion-package/discussion-list.handlebars");
KAdefine.require("./javascript/discussion-package/discussion-list-profile-widget.handlebars");
KAdefine.require("./javascript/discussion-package/discussion.js");
KAdefine.require("./javascript/discussion-package/discussion-questions.js");
KAdefine.require("./javascript/discussion-package/discussion-answers.js");
KAdefine.require("./javascript/discussion-package/discussion-comments.js");
KAdefine.require("./javascript/discussion-package/discussion-replies.js");
KAdefine.require("./javascript/discussion-package/discussion-voting.js");
KAdefine.require("./javascript/discussion-package/clarifications.js");
KAdefine.require("./javascript/discussion-package/discussion-projectfeedback.js");
KAdefine.require("./javascript/discussion-package/note.handlebars");
KAdefine.require("./javascript/discussion-package/discussion-note.js");
KAdefine.require("./javascript/discussion-package/discussion-profilepromo.js");
KAdefine.require("./javascript/discussion-package/low-quality-notice.js");
KAdefine.require("./javascript/discussion-package/duplicate-notice.js");
KAdefine.require("./javascript/discussion-package/thread.handlebars");
KAdefine.require("./javascript/discussion-package/program.handlebars");
KAdefine.require("./javascript/discussion-package/question.handlebars");
KAdefine.require("./javascript/discussion-package/answer.handlebars");
KAdefine.require("./javascript/discussion-package/comment.handlebars");
KAdefine.require("./javascript/discussion-package/reply.handlebars");
KAdefine.require("./javascript/discussion-package/replies-container.handlebars");
KAdefine.require("./javascript/discussion-package/question-form.handlebars");
KAdefine.require("./javascript/discussion-package/question-guidelines.handlebars");
KAdefine.require("./javascript/discussion-package/answer-form.handlebars");
KAdefine.require("./javascript/discussion-package/feedback-guidelines.handlebars");
KAdefine.require("./javascript/discussion-package/comment-form.handlebars");
KAdefine.require("./javascript/discussion-package/reply-form.handlebars");
KAdefine.require("./javascript/discussion-package/discussion-meta.handlebars");
KAdefine.require("./javascript/discussion-package/vote-controls.handlebars");
KAdefine.require("./javascript/discussion-package/flag-controls.handlebars");
KAdefine.require("./javascript/discussion-package/author-controls.handlebars");
KAdefine.require("./javascript/discussion-package/visit-profile-promo.handlebars");
KAdefine.require("./javascript/discussion-package/meta-separator.handlebars");
KAdefine.require("./javascript/discussion-package/low-quality-notice-header.handlebars");
KAdefine.require("./javascript/discussion-package/low-quality-notice-footer.handlebars");
KAdefine.require("./javascript/discussion-package/duplicate-notice.handlebars");
KAdefine.require("./javascript/discussion-package/flag-modal.handlebars");
KAdefine.require("./javascript/discussion-package/scratchpad-flag-modal.handlebars");
KAdefine.require("./javascript/discussion-package/discussion.handlebars");
KAdefine.require("./javascript/discussion-package/video-discussion.handlebars");
KAdefine.require("./javascript/discussion-package/discussion-guidelines.handlebars");
KAdefine.require("./javascript/discussion-package/scratchpad-thumbnail.handlebars");
KAdefine.require("./javascript/discussion-package/topic-discussion.handlebars");
KAdefine.require("./javascript/discussion-package/spinoffs.js");
KAdefine.require("./javascript/discussion-package/documentation.js");
KAdefine.require("./javascript/discussion-package/fork.handlebars");
KAdefine.require("./javascript/discussion-package/sorts.handlebars");
KAdefine.require("./javascript/discussion-package/formatting-tips.handlebars");
KAdefine.require("./javascript/discussion-package/form-controls.handlebars");
