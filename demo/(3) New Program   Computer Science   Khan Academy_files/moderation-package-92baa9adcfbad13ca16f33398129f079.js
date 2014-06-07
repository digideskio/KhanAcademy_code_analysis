KAdefine("javascript/moderation-package/moderation.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var Moderation={ModAction:{CLEAR_FLAGS:"clearflags",CHANGE_TYPE:"changetype",UNDELETE:"undelete"},LOW_QUALITY_FIRST:1,LOWEST_VOTES_FIRST:2,init:function(){Moderation.Flag.init()
$(document).on("click",".mod-tools .edit",Moderation.editEntity).on("click",".mod-tools .delete",Moderation.deleteEntity).on("click",".mod-tools .change-type",Moderation.changeEntityType).on("click",".mod-tools .clear-flags",Moderation.clearFlags).on("mouseenter",".mod-tools .clear-flags",this.showFlagsHovercard).on("click",".mod-tools .approve",Moderation.clearFlags).on("click",".mod-tools .undelete",Moderation.undelete).on("click",".mod-tools .skip",Moderation.skip).on("click",".mod-tools .hide-hotlist",{hide_from_hotlist:true},Moderation.hideHotlist).on("click",".mod-tools .unhide-hotlist",{hide_from_hotlist:false},Moderation.hideHotlist)
Handlebars.registerPartial("discussion_meta-separator",Templates.get("discussion.meta-separator"))},getEntityKey_:function(e){return e.closest(".mod-tools").data("key")},deleteEntity:function(){var e=$(this),t=e.closest(".mod-tools"),o=Moderation.getEntityKey_(e),s=t.data("isAuthor"),a=t.data("inQueue"),i=KA.getUserProfile().get("isModerator"),n=t.closest(".program")
if(!o){return}var d
if(s){d=confirm($._("Are you sure you want to delete this?"))}else{d=i}if(d){if(s||a){Discussion.remove(e)
var r=Discussion.getParentType(e)
if(r==="reply"){var l=Discussion.getParent(Discussion.getParent(t)),c=Discussion.getKey(l)
Discussion.Replies.decrementReplyCount(c)}else if(s&&r==="answer"){Discussion.setHasAnswered(e,false)}}else{e.text($._("Undelete")).removeClass("delete").addClass("undelete").closest(".discussion-item").addClass("deleted")}$.ajax({type:"DELETE",url:"/api/v1/feedback/"+o+"?casing=camel",dataType:"json"})}return false},editEntity:function(){Discussion.edit(this)
return false},changeEntityType:function(e){var t=$(this),o=Moderation.getEntityKey_(t),s=e&&e["targetType"]||t.data("targetType"),a={type:s}
if(!o||!s){return}var i=s
if(s==="comment"){i="feedback"}Moderation.showMessage(t,$._("Changed to %(targetTypeName)s",{targetTypeName:i}))
Discussion.remove(t)
$.ajax({type:"PUT",url:"/api/v1/feedback/"+o+"/"+Moderation.ModAction.CHANGE_TYPE+"?casing=camel",contentType:"application/json",data:JSON.stringify(a),dataType:"json"})},clearFlags:function(){var e=$(this),t=e.closest(".mod-tools").data("inQueue"),o=Moderation.getEntityKey_(e),s="/api/v1/feedback/"+o+"/"+Moderation.ModAction.CLEAR_FLAGS+"?casing=camel"
if(!o){return false}Moderation.showMessage(e,$._("Cleared flags"))
if(t){Discussion.remove(e)}$.ajax({type:"PUT",url:s,dataType:"json"})},undelete:function(){var e=$(this),t=Moderation.getEntityKey_(e),o="/api/v1/feedback/"+t+"/"+Moderation.ModAction.UNDELETE+"?casing=camel"
if(!t){return false}e.text($._("Delete")).removeClass("undelete").addClass("delete").parents(".discussion-item").removeClass("deleted")
$.ajax({type:"PUT",url:o,dataType:"json"})},hideHotlist:function(e){var t=$(this),o=t.closest(".mod-tools"),s=Moderation.getEntityKey_(t),a=o.closest("#"+s).attr("data-id"),i="/api/labs/scratchpads/"+a
if(!s||!a){return false}if(e.data.hide_from_hotlist){t.text($._("Undo hide from hotlist")).removeClass("hide-hotlist").addClass("unhide-hotlist")}else{t.text($._("Hide from hotlist")).removeClass("unhide-hotlist").addClass("hide-hotlist")}$.ajax({type:"PATCH",url:i,dataType:"json",contentType:"application/json",data:JSON.stringify(e.data),success:function(e){Moderation.clearFlags.apply(this)}.bind(this)})},showMessage:function(e,t){e.text(t).addClass("action-complete").parent().addClass("mod-action-complete")},skip:function(){Discussion.remove($(this))},showFlagsHovercard:function(e){var t=$(e.target)
if(!t.data("has-tip")){var o=Templates.get("moderation.flags-hovercard")
var s=t.data("flaggedBy").split(",")
var a=t.data("flags").split(",")
var i=[]
var n=t.parent()&&t.parent().data("key"),d=Moderation.Queue.discussionList_&&Moderation.Queue.discussionList_.data
if(n&&d){var r=_(d).find(function(e){return e.key===n})
if(r){s=r.flaggedBy
a=r.flags}}_.each(s,function(e,t){i.push({user:e,type:a[t]})})
t.qtip({content:{text:o(i)},style:{classes:"custom-override flags-hovercard"},hide:{delay:100,fixed:true},position:{my:"top left",at:"bottom left"}})
t.data("has-tip",true)}t.qtip("show")}}
module.exports=Moderation
});
KAdefine("javascript/moderation-package/queue.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("../discussion-package/discussion-list.js")
var Moderation=require("./moderation.js")
Moderation.Queue={}
Moderation.Queue.init=function(){_.bindAll(this,"show_","autoLoad_","reset_","bindEvents_","fetchSort_","fetchType_","transformDataBeforeRender")
Discussion.init({page:0,which:"moderation-queue",container:$(".mod-queue")})
this.bindEvents_()
this.reset_()
this.show_()}
Moderation.Queue.reset_=function(e,t){$(".mod-queue").html("")
this.type_=e||"question"
this.sort_=t||Moderation.LOW_QUALITY_FIRST}
Moderation.Queue.bindEvents_=function(){$(".mod-queue-header").on("click",".mod-queue-type",this.fetchType_).on("click",".mod-queue-sort",this.fetchSort_)
$(document).on("click",".mod-tools a",this.autoLoad_)
$(document).keypress(this.onHotkey_)}
Moderation.Queue.onHotkey_=function(e){if(!$(document.activeElement).is("body")){return}var t
var s={}
switch(e.which){case 97:t=Moderation.clearFlags
break
case 99:t=Moderation.clearFlags
break
case 100:t=Moderation.deleteEntity
break
case 101:Discussion.edit($(".discussion-list .mod-tools").first())
return
case 102:t=Moderation.changeEntityType
s["targetType"]="comment"
break
case 113:t=Moderation.changeEntityType
s["targetType"]="question"
break
case 115:t=Moderation.skip
break}if(t){Moderation.Queue.autoLoad_()
t.call($(".discussion-list .mod-tools").first(),s)}}
Moderation.Queue.fetchSort_=function(e){var t=$(e.target)
var s=t.parent()
s.addClass("selected").siblings().removeClass("selected")
this.reset_(this.type_,t.data("value"))
this.show_()}
Moderation.Queue.fetchType_=function(e){var t=$(e.target),s=t.parent(),i=t.data("value")
s.addClass("selected").siblings().removeClass("selected")
this.reset_(i,this.sort_)
this.show_()
$("#modpanel .mod-queue").toggleClass("wide",i==="program")}
Moderation.Queue.show_=function(){var e
if(this.type_==="question"||this.type_==="projecthelp"){e="discussion.thread"}else{e="discussion."+this.type_}this.discussionList_=new DiscussionList({hideHeader:true,requestURL:"/api/v1/moderation/feedback",itemKey:"feedback",itemTemplate:e,containerSelector:".mod-queue",page:0,sortValue:this.sort_,params:{casing:"camel",type:this.type_,offset:this.offset_},onInitialFetch:this.onInitialFetch_,preRenderTransformData:this.transformDataBeforeRender})}
Moderation.Queue.onInitialFetch_=function(e){var t=$(".mod-happy-message")
if(e.length===0){t.show()}else{t.hide()}}
Moderation.Queue.transformDataBeforeRender=function(e){_.each(e,function(e){e=Discussion.transformFeedback(e)
e.inQueue=true
e.showModControls=true})
return e}
Moderation.Queue.autoLoad_=function(){var e=5
if(this.discussionList_){if($(".mod-queue .discussion-item").length<=e){this.discussionList_.fetchMore()}}}
});
KAdefine("javascript/moderation-package/moderator-list.jsx", function(require, requireWithVars, module, exports) {
var HoverCardItem=require("../react-package/hover-card-item.jsx")
var ProfileModel=require("../shared-package/profile-model.js")
var BRONZE=1
var SILVER=2
var GOLD=3
var PLATINUM=4
var ModeratorList={init:function(e){React.renderComponent(ModeratorListView({initialModerators:e.moderators}),$(".moderator-management")[0])}}
var ModeratorListView=React.createClass({displayName:"ModeratorListView",propTypes:{initialModerators:React.PropTypes.array.isRequired},getInitialState:function(){return{moderators:this.props.initialModerators}},render:function(){var e=_.chain(this.state.moderators).sortBy(function(e){return e.moderatorLevel+e.nickname.toLowerCase()}).map(function(e){return ModeratorRow({key:e.userKey,moderator:e,onRemove:this.handleRemove.bind(null,e),onLevelChange:this.handleLevelChange.bind(null,e)})}.bind(this)).value()
return React.DOM.div(null,React.DOM.div(null,React.DOM.input({ref:"newEmail",placeholder:$._("Moderator email"),onKeyDown:this.handleEmailKeyDown,type:"text"}),React.DOM.span({className:"simple-button",onClick:this.handleAdd},$._("Add moderator"))),React.DOM.div({className:"moderator-list clearfix"},e))},handleEmailKeyDown:function(e){if(e.key==="Enter"){this.handleAdd()}},handleAdd:function(){var e=this.refs.newEmail.getDOMNode()
var r=e.value
this._setLevel({email:r},GOLD).then(function(){e.value=""})},handleRemove:function(e){$.ajax({url:"/api/v1/moderators/remove",type:"POST",data:{casing:"camel",userKey:e.userKey},dataType:"json",success:function(){var r=this.state.moderators.filter(function(r){return r.userKey!==e.userKey})
this.setState({moderators:r})}.bind(this)})},handleLevelChange:function(e,r){this._setLevel({userKey:e.userKey},r)},_setLevel:function(e,r){return $.ajax({url:"/api/v1/moderators/set_level",type:"POST",data:_.extend({casing:"camel",level:r},e),dataType:"json",success:function(e){var r=this.state.moderators.filter(function(r){return r.userKey!==e.userKey})
r.push(e)
this.setState({moderators:r})}.bind(this)})}})
var LevelButton=React.createClass({displayName:"LevelButton",propTypes:{levelName:React.PropTypes.string.isRequired,moderator:React.PropTypes.object.isRequired},handleClick:function(){this.props.onClick&&this.props.onClick(this._getLevel())},_getLevel:function(){var e={bronze:BRONZE,silver:SILVER,gold:GOLD,platinum:PLATINUM}[this.props.levelName]
if(!e){throw new Error("Unrecognized level "+e)}return e},render:function(){var e=this._getLevel()
var r="level "+this.props.levelName
if(this.props.moderator.moderatorLevel>=e){r+=" enabled"}return React.DOM.span({className:r,onClick:this.handleClick},this.props.levelName)}})
var ModeratorRow=React.createClass({displayName:"ModeratorRow",propTypes:{moderator:React.PropTypes.object.isRequired,onRemove:React.PropTypes.func.isRequired,onLevelChange:React.PropTypes.func.isRequired},render:function(){var e=this.props.moderator
return React.DOM.div({className:"moderator-row clearfix"},HoverCardItem({model:new ProfileModel(e),hideShadow:false}),React.DOM.div({className:"controls"},React.DOM.span({className:"simple-button",onClick:this.props.onRemove},$._("Remove")),LevelButton({levelName:"gold",moderator:e,onClick:this.props.onLevelChange}),LevelButton({levelName:"platinum",moderator:e,onClick:this.props.onLevelChange})))}})
module.exports=ModeratorList
});
KAdefine("javascript/moderation-package/mod-controls.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["moderation-package_mod-controls"]=module.exports=e(function(e,n,a,r,i){a=a||e.helpers
r=r||e.partials
var t="",o,s,l,f,u=this,c="function",h=a.helperMissing,p=void 0,g=this.escapeExpression,v=a.blockHelperMissing
function m(e,n){var r="",i,t
r+="\n        "
l=a.flags
i=l||e.flags
t=a["if"]
f=u.program(2,d,n)
f.hash={}
f.fn=f
f.inverse=u.program(17,j,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function d(e,n){var i="",t,o
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
i+="\n            "
i+="\n            "
i+='\n            <a href="javascript:void(0);" data-flags="'
l=a.flags
t=l||e.flags
o=a.each
f=u.program(3,_,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=o.call(e,t,f)
if(t||t===0){i+=t}i+='" '
l=a.flaggedBy
t=l||e.flaggedBy
o=a["if"]
f=u.program(5,y,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=o.call(e,t,f)
if(t||t===0){i+=t}i+=' class="clear-flags call-to-action">'
l=a.inQueue
t=l||e.inQueue
o=a["if"]
f=u.program(7,Q,n)
f.hash={}
f.fn=f
f.inverse=u.program(12,C,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n        "
return i}function _(e,n){var a="",r
r=e
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=h.call(e,"this",{hash:{}})}a+=g(r)+","
return a}function y(e,n){var r="",i
r+='data-flagged-by="'
l=a.flaggedBy
i=l||e.flaggedBy
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"flaggedBy",{hash:{}})}r+=g(i)+'"'
return r}function Q(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(8,k,n)
f.hash={}
f.fn=f
f.inverse=u.program(10,b,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function k(e,n){return"(C)lear  Flag"}function b(e,n){var r="",i
r+="(C)lear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function C(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(13,F,n)
f.hash={}
f.fn=f
f.inverse=u.program(15,B,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function F(e,n){return"Clear  Flag"}function B(e,n){var r="",i
r+="Clear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function j(e,n){var r="",i,t
r+="\n            "
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(18,O,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n        "
return r}function O(e,n){var i="",t
i+="\n                "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n                <a href="javascript:void(0);" class="approve">'
l=a["_"]
t=l||e["_"]
f=u.program(19,S,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n            "
return i}function S(e,n){return"(A)pprove"}function H(e,n){var i="",t
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n        <a href="javascript:void(0);" title="'
l=a["_"]
t=l||e["_"]
f=u.program(22,P,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+='" class="skip">'
l=a["_"]
t=l||e["_"]
f=u.program(24,x,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n    "
return i}function P(e,n){return"Skip taking an action on this post right now."}function x(e,n){return"(S)kip"}function D(e,n){var i="",t,o
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.isComment
t=l||e.isComment
o=a["if"]
f=u.program(27,w,n)
f.hash={}
f.fn=f
f.inverse=u.program(36,U,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n\n        <a href="javascript:void(0);" class="edit">'
l=a.inQueue
t=l||e.inQueue
o=a["if"]
f=u.program(45,L,n)
f.hash={}
f.fn=f
f.inverse=u.program(48,T,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n    "
return i}function w(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(28,A,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="question">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(30,M,n)
f.hash={}
f.fn=f
f.inverse=u.program(33,E,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function A(e,n){return"call-to-action"}function M(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(31,q,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function q(e,n){return"Change to (Q)uestion"}function E(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(34,N,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function N(e,n){return"Change to question"}function U(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(37,z,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="comment">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(39,G,n)
f.hash={}
f.fn=f
f.inverse=u.program(42,J,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function z(e,n){return"call-to-action"}function G(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(40,I,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function I(e,n){return"Change to (F)eedback"}function J(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(43,K,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function K(e,n){return"Change to feedback"}function L(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(46,R,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function R(e,n){return"(E)dit"}function T(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(49,V,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function V(e,n){return"Edit"}function W(e,n){var i="",t,o
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.deleted
t=l||e.deleted
o=a["if"]
f=u.program(52,X,n)
f.hash={}
f.fn=f
f.inverse=u.program(55,Z,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n    "
return i}function X(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="undelete">'
l=a["_"]
i=l||e["_"]
f=u.program(53,Y,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n        "
return r}function Y(e,n){return"Undelete"}function Z(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="delete '
l=a.highlightDeleteButton
i=l||e.highlightDeleteButton
t=a["if"]
f=u.program(56,$,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(58,en,n)
f.hash={}
f.fn=f
f.inverse=u.program(61,an,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function $(e,n){return"call-to-action"}function en(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(59,nn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function nn(e,n){return"(D)elete"}function an(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(62,rn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function rn(e,n){return"Delete"}function tn(e,n){var r="",i,t
r+="\n        "
l=a.isScratchpad
i=l||e.isScratchpad
t=a["if"]
f=u.program(65,on,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function on(e,n){var i="",t,o
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
l=a.hideFromHotlist
t=l||e.hideFromHotlist
o=a["if"]
f=u.program(66,sn,n)
f.hash={}
f.fn=f
f.inverse=u.program(69,fn,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n        "
return i}function sn(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="unhide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(67,ln,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function ln(e,n){return"Undo hide from hotlist"}function fn(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="hide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(70,un,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function un(e,n){return"Hide from hotlist"}t+='\n<span class="mod-tools" data-key="'
l=a.key
o=l||n.key
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"key",{hash:{}})}t+=g(o)+'" data-is-author="'
l=a.showAuthorControls
o=l||n.showAuthorControls
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"showAuthorControls",{hash:{}})}t+=g(o)+'" data-in-queue="'
l=a.inQueue
o=l||n.inQueue
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"inQueue",{hash:{}})}t+=g(o)+'">\n\n    '
l=a.definitelyNotSpam
o=l||n.definitelyNotSpam
s=a.unless
f=u.program(1,m,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.inQueue
o=l||n.inQueue
s=a["if"]
f=u.program(21,H,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.isScratchpad
o=l||n.isScratchpad
s=a.unless
f=u.program(26,D,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.hideModDelete
o=l||n.hideModDelete
s=a.unless
f=u.program(51,W,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.inQueue
o=l||n.inQueue
s=a["if"]
f=u.program(64,tn,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n</span>\n"
return t})})()
});
KAdefine("javascript/moderation-package/flag.js", function(require, requireWithVars, module, exports) {
var Discussion=require("../discussion-package/discussion.js")
var Moderation=require("./moderation.js")
Moderation.Flag={init:function(){$(document).on("click",".flag-show",Moderation.Flag.showControls_).on("click","#flag-modal .flag-as:not(.disabled)",Moderation.Flag.flag_).on("input propertychange","#flag-modal textarea[name=justification]",Moderation.Flag.enableSubmit_)},showControls_:function(){var a=$(this),e=a.parents(".flag-tools").data("key"),s=Discussion.getParent(this),t=Discussion.getParentType(this)
if(Discussion.Note.checkNeedsLogin(this,"flag")){return false}var i=275
var n=$(".discussion-content",s).text()
if(n.length>i){n=n.substring(0,i)+"..."}var o=a.hasClass("scratchpad-flagging")?"discussion.scratchpad-flag-modal":"discussion.flag-modal"
var l=Templates.get(o)({feedback:n,isQuestion:t==="question",isAnswer:t==="answer",isComment:t==="comment",canBeChanged:t==="question"||t==="comment",translatedFeedbackType:Discussion._translateFeedbackType(t)})
if($("#flag-modal").length){$("#flag-modal").replaceWith(l)}else{$("body").append(l)}var r=$("#flag-modal"),d=r.height()
r.data("key",e).modal({backdrop:true,show:true,keyboard:true})
return false},flag_:function(){var a=$(this),e=a.parents("#flag-modal"),s=a.data("flag")||e.find("[name=flag]").val(),t=e.data("key"),i=e.find("textarea[name=justification]")
if(!s||!t){return false}var n={flag:s,entity_key:t}
if(i.length){n["justification"]=i.val()}Moderation.Flag.postAndNotify_(e,n)},enableSubmit_:function(){var a=$(this),e=a.siblings(".flag-row").find(".simple-button").removeClass("disabled")
e.toggleClass("disabled",!a.val())},postAndNotify_:function(a,e){$.post("/api/v1/discussions/flagentity",e)
var s=$(".flag-tools[data-key="+e["entity_key"]+"]"),t=$(".flag-show",s)
Moderation.showMessage(t,$._("Flagged"))
a.modal("hide")
return false}}
});
KAdefine("javascript/moderation-package/flags-hovercard.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["moderation-package_flags-hovercard"]=module.exports=e(function(e,a,n,s,l){n=n||e.helpers
var r="",i,c,t,o,h=this,p="function",d=n.helperMissing,f=void 0,v=this.escapeExpression,u=n.blockHelperMissing
function g(e,a){return"Flagged By"}function y(e,a){var s="",l
s+='\n                <li class="sample-content-link">\n                    '
t=n.user
l=t||e.user
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===f){l=d.call(e,"user",{hash:{}})}s+=v(l)+' - <span class="flag-type">'
t=n.type
l=t||e.type
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===f){l=d.call(e,"type",{hash:{}})}s+=v(l)+"</span>\n                </li>\n            "
return s}r+='<div class="hover-card-container">\n    <div class="hover-card-triangle"></div>\n    <div class="hover-card-content-container vertical-shadow">\n        <div class="hover-card-content clearfix">\n            <h4 class="pulls">\n                '
t=n["_"]
i=t||a["_"]
o=h.program(1,g,l)
o.hash={}
o.fn=o
o.inverse=h.noop
if(t&&typeof i===p){i=i.call(a,o)}else{i=u.call(a,i,o)}if(i||i===0){r+=i}r+='\n            </h4>\n            <ul class="flagged-by-users">\n            '
i=a
c=n.each
o=h.program(3,y,l)
o.hash={}
o.fn=o
o.inverse=h.noop
i=c.call(a,i,o)
if(i||i===0){r+=i}r+="\n            </ul>\n        </div>\n    </div>\n</div>\n"
return r})})()
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/moderation-package/moderation.js");
KAdefine.require("./javascript/moderation-package/queue.js");
KAdefine.require("./javascript/moderation-package/moderator-list.jsx");
KAdefine.require("./javascript/moderation-package/mod-controls.handlebars");
KAdefine.require("./javascript/moderation-package/flag.js");
KAdefine.require("./javascript/moderation-package/flags-hovercard.handlebars");
