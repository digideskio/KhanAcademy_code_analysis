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
window.Rainbow=function(){function e(e){var n,t=e.getAttribute&&e.getAttribute("data-language")||0
if(!t){e=e.attributes
for(n=0;n<e.length;++n)if("data-language"===e[n].nodeName)return e[n].nodeValue}return t}function n(n){var t=e(n)||e(n.parentNode)
if(!t){var a=/\blang(?:uage)?-(\w+)/;(n=n.className.match(a)||n.parentNode.className.match(a))&&(t=n[1])}return t}function t(e,n){for(var t in g[d]){t=parseInt(t,10)
if(e==t&&n==g[d][t]?0:e<=t&&n>=g[d][t])delete g[d][t],delete l[d][t]
if(e>=t&&e<g[d][t]||n>t&&n<g[d][t])return!0}return!1}function a(e,n){return'<span class="'+e.replace(/\./g," ")+(w?" "+w:"")+'">'+n+"</span>"}function r(e,n,c,f){var s=e.exec(c)
if(s){++v
!n.name&&"string"==typeof n.matches[0]&&(n.name=n.matches[0],delete n.matches[0])
var m=s[0],h=s.index,p=s[0].length+h,b=function(){function t(){r(e,n,c,f)}v%100>0?t():setTimeout(t,0)}
if(t(h,p))b()
else{var w=o(n.matches),N=function(e,t,r){if(e>=t.length)r(m)
else{var o=s[t[e]]
if(o){var c=n.matches[t[e]],f=c.language,l=c.name&&c.matches?c.matches:c,g=function(n,o,i){var c
c=0
var u
for(u=1;u<t[e];++u)s[u]&&(c=c+s[u].length)
o=i?a(i,o):o
m=m.substr(0,c)+m.substr(c).replace(n,o)
N(++e,t,r)}
f?u(o,f,function(e){g(o,e)}):typeof c==="string"?g(o,o,c):i(o,l.length?l:[l],function(e){g(o,e,c.matches?c.name:0)})}else N(++e,t,r)}}
N(0,w,function(e){n.name&&(e=a(n.name,e))
if(!l[d]){l[d]={}
g[d]={}}l[d][h]={replace:s[0],"with":e}
g[d][h]=p
b()})}}else f()}function o(e){var n=[],t
for(t in e)e.hasOwnProperty(t)&&n.push(t)
return n.sort(function(e,n){return n-e})}function i(e,n,t){function a(n,o){o<n.length?r(n[o].pattern,n[o],e,function(){a(n,++o)}):c(e,function(e){delete l[d]
delete g[d];--d
t(e)})}++d
a(n,0)}function c(e,n){function t(e,n,a,r){if(a<n.length){++b
var o=n[a],i=l[d][o],e=e.substr(0,o)+e.substr(o).replace(i.replace,i["with"]),o=function(){t(e,n,++a,r)}
0<b%250?o():setTimeout(o,0)}else r(e)}var a=o(l[d])
t(e,a,0,n)}function u(e,n,t){var a=m[n]||[],r=m[p]||[],n=h[n]?a:a.concat(r)
i(e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&(?![\w\#]+;)/g,"&amp;"),n,t)}function f(e,t,a){if(t<e.length){var r=e[t],o=n(r)
return!(-1<(" "+r.className+" ").indexOf(" rainbow "))&&o?(o=o.toLowerCase(),r.className+=r.className?" rainbow":"rainbow",u(r.innerHTML,o,function(n){r.innerHTML=n
l={}
g={}
N&&N(r,o)
setTimeout(function(){f(e,++t,a)},0)})):f(e,++t,a)}a&&a()}function s(e,n){var e=e&&"function"==typeof e.getElementsByTagName?e:document,t=e.getElementsByTagName("pre"),a=e.getElementsByTagName("code"),r,o=[]
for(r=0;r<a.length;++r)o.push(a[r])
for(r=0;r<t.length;++r)t[r].getElementsByTagName("code").length||o.push(t[r])
f(o,0,n)}var l={},g={},m={},h={},d=0,p=0,v=0,b=0,w,N
return{extend:function(e,n,t){1==arguments.length&&(n=e,e=p)
h[e]=t
m[e]=n.concat(m[e]||[])},b:function(e){N=e},a:function(e){w=e},color:function(e,n,t){if("string"==typeof e)return u(e,n,t)
if("function"==typeof e)return s(0,e)
s(e,n)}}}()
document.addEventListener?document.addEventListener("DOMContentLoaded",Rainbow.color,!1):window.attachEvent("onload",Rainbow.color)
Rainbow.onHighlight=Rainbow.b
Rainbow.addClass=Rainbow.a
KAdefine("third_party/javascript-khansrc/structuredjs/external/rainbow/rainbow.min.js", function(require, requireWithVars, module, exports) {
});
Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}])
KAdefine("third_party/javascript-khansrc/structuredjs/external/rainbow/language/generic.js", function(require, requireWithVars, module, exports) {
});
Rainbow.extend("javascript",[{name:"selector",pattern:/(\s|^)\$(?=\.|\()/g},{name:"support",pattern:/\b(window|document)\b/g},{matches:{1:"support.property"},pattern:/\.(length|node(Name|Value))\b/g},{matches:{1:"support.function"},pattern:/(setTimeout|setInterval)(?=\()/g},{matches:{1:"support.method"},pattern:/\.(getAttribute|push|getElementById|getElementsByClassName|log|setTimeout|setInterval)(?=\()/g},{name:"string.regexp",matches:{1:"string.regexp.open",2:{name:"constant.regexp.escape",pattern:/\\(.){1}/g},3:"string.regexp.close",4:"string.regexp.modifier"},pattern:/(\/)(?!\*)(.+)(\/)([igm]{0,3})/g},{matches:{1:"storage",3:"entity.function"},pattern:/(var)?(\s|^)(\S*)(?=\s?=\s?function\()/g},{matches:{1:"keyword",2:"entity.function"},pattern:/(new)\s+(.*)(?=\()/g},{name:"entity.function",pattern:/(\w+)(?=:\s{0,}function)/g}])
KAdefine("third_party/javascript-khansrc/structuredjs/external/rainbow/language/javascript.js", function(require, requireWithVars, module, exports) {
});
Rainbow.extend([{matches:{1:{name:"keyword.operator",pattern:/\=/g},2:{name:"string",matches:{name:"constant.character.escape",pattern:/\\('|"){1}/g}}},pattern:/(\(|\s|\[|\=|:)(('|")([^\\\1]|\\.)*?(\3))/gm},{name:"comment",pattern:/\/\*[\s\S]*?\*\/|(\/\/|\#)[\s\S]*?$/gm},{name:"constant.numeric",pattern:/\b(\d+(\.\d+)?(e(\+|\-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi},{matches:{1:"keyword"},pattern:/\b(and|array|as|b(ool(ean)?|reak)|c(ase|atch|har|lass|on(st|tinue))|d(ef|elete|o(uble)?)|e(cho|lse(if)?|xit|xtends|xcept)|f(inally|loat|or(each)?|unction)|global|if|import|int(eger)?|long|new|object|or|pr(int|ivate|otected)|public|return|self|st(ring|ruct|atic)|switch|th(en|is|row)|try|(un)?signed|var|void|while)(?=\(|\b)/gi},{name:"constant.language",pattern:/true|false|null/g},{name:"keyword.operator",pattern:/\+|\!|\-|&(gt|lt|amp);|\||\*|\=/g},{matches:{1:"function.call"},pattern:/(\w+?)(?=\()/g},{matches:{1:"storage.function",2:"entity.name.function"},pattern:/(function)\s(.*?)(?=\()/g}])
KAdefine("third_party/javascript-khansrc/structuredjs/external/rainbow/language/generic.js", function(require, requireWithVars, module, exports) {
});
KAdefine("javascript/scratchpad-challenge-package/scratchpad-challenge.js", function(require, requireWithVars, module, exports) {
(function(){var e=function(e){return e.type==="assertion"&&e.state==="fail"&&e.expected===$._("A critical problem occurred in your "+"program making it unable to run.")}
var t=function(e){return e.length>0&&e[0]==="pass"&&_.contains(e,"fail")&&_.indexOf(e,"fail")>_.lastIndexOf(e,"pass")}
window.ScratchpadChallenge=Backbone.Model.extend({initialize:function(e){this.userScratchpad=e.userScratchpad
this.editor=e.editor
var t=this.userScratchpad.get("points")
var a=t>0
this.set("complete",a)
this.set("lastCompleted",a?Number.POSITIVE_INFINITY:-1)
this.set("step",a?Number.POSITIVE_INFINITY:0)
this.set("points",t)
this.on("change:complete",_.bind(function(e,t){if(t){this.userScratchpad.saveChallengeStatus("complete",{success:_.bind(function(e){this.set("points",e.get("points"))},this)})}},this))},triggerUpdate:function(){this.trigger("challengeUpdate",this)},completeChallenge:function(){this.set("complete",true)
this.set("step",this.get("tests").length)
this.set("lastCompleted",this.get("tests").length)
this.triggerUpdate()},onGoalStep:function(){return this.get("step")>=this.get("tests").length},moveToStep:function(e){this.set("step",e)
this.triggerUpdate()
this.editor.focus()},allTestsPass:function(){return _.all(this.get("tests"),function(e){return e.state==="pass"})},firstFailure:function(){return _.pluck(this.get("tests"),"state").indexOf("fail")},previousStepFailed:function(){var e=this.firstFailure()
return e>=0&&e<this.get("step")},currentStepHasWarning:function(){var e=this.get("tests")[this.get("step")]["results"]
return _.find(e,function(e){return e.meta.alsoMessage})},getDebugInfo:function(){return["complete: "+this.get("complete"),"lastCompleted: "+this.get("lastCompleted"),"points: "+this.get("points"),"step: "+this.get("step")].join("\n")},processResults:function(e){if(!e.tests.length){return}if(this.userScratchpad.get("challenge_status")===-1){this.userScratchpad.saveChallengeStatus("started")}if(_.isEqual(this.get("tests"),e.tests)&&_.isEqual(this.get("errors"),e.errors)){return}var a=e.tests
this.set("errors",e.errors)
g(a,_.bind(function(){this.set("tests",a)
if(!this.get("complete")){var e=_.map(a,function(e){return e.state})
if(t(e)){var s=_.indexOf(e,"fail")-1
if(s>this.get("lastCompleted")){this.set("lastCompleted",s)
this.set("step",s)}}}this.triggerUpdate()},this))}})
window.ChallengePanels=Backbone.View.extend({events:{"click .test-challenge-whats-this-hint":"showExplainModal","click .scratchpad-challenge-feedback-btn":"showFeedbackModal"},initialize:function(e){this.challenge=e.challenge
var t=_.bind(function(e){if(e.onGoalStep()){ScratchpadUI.renderComplete(true,this.$el)}else{var t=e.get("tests")[e.get("step")]
if(t){this.render(t)}}},this)
this.challenge.on("challengeUpdate",t)
this.getEncouragingMessage=_.memoize(r)
this.getCompletionMessage=_.memoize(h)},render:function(e){if(this.challenge.get("errors")&&this.challenge.get("errors").length&&this.$(".objectives-loading").length===0){return}var t=this.challenge.get("step")
var a=this.challenge.get("lastCompleted")===t&&e.state==="pass"
var s=!this.challenge.get("complete")&&this.challenge.allTestsPass()
var i=[]
var n=Templates.get("scratchpad-challenge.challenge-pane-header")
i.push(n({title:e.name,showFinishPrompt:s,showCritter:a}))
var r=Templates.get("scratchpad-challenge.challenge-step")
i=i.concat(_.map(e.results,_.bind(function(e){var t=c[e.meta.structure]
var a=$(t).find(".structuredjs_var").length>0
var s=r({description:e.msg,structure:t,alternateMessage:e.meta.alternateMessage,alsoMessage:e.meta.alsoMessage,image:e.meta.image,hasMatchingBlanks:a})
return s},this)))
this.$el.html(i)
var l={my:"right bottom",at:"left top",container:this.$el}
if(KA.languageIsRtl){l={my:"left bottom",at:"right top",container:this.$el}}this.$el.find(".challenge-tooltip").qtip("destroy")
if(s){var o=this.$el.find(".jumping-critter")
o.qtip({content:$(this.getCompletionMessage()).append($("<button>",{"class":"simple-button green",text:$._("Finish!")}).on("click",_.bind(function(){this.challenge.completeChallenge()},this))),style:{classes:"qtip-light qtip-shadow challenge-tooltip"},position:l,hide:false,show:false})
o.qtip("show")}else if(a){var o=this.$el.find(".happy-critter")
o.qtip({content:$(this.getEncouragingMessage(t)).append($("<button>",{"class":"simple-button green",text:$._("Next Step!")}).on("click",_.bind(function(){this.challenge.moveToStep(t+1)},this))),style:{classes:"qtip-light qtip-shadow challenge-tooltip"},position:l,hide:false,show:false})
o.qtip("show")}},showExplainModal:function(){this.$(".test-challenge-modal").modal({keyboard:true,backdrop:false,show:true})},showFeedbackModal:function(){this.feedbackModal=new ChallengeFeedbackModal({challenge:this.challenge})
this.$el.append(this.feedbackModal.render().$el)
this.feedbackModal.show()}})
window.ChallengeFeedbackModal=Backbone.View.extend({events:{"click [data-startover]":"startOver","click [data-cancel]":"hide","click [data-deadend]":"deadend","click [data-step1] input[type=radio]":"selectProblem","click input[data-next-part]":"showNextPart","submit form":"submitForm"},initialize:function(e){this.challenge=e.challenge},render:function(){var e=Templates.get("scratchpad-challenge.challenge-feedback-modal")
var t=icu.getLocale()==="es-ES"||icu.getLocale()==="pt-BR"
this.$el.html(e({shouldBeTranslated:t}))
this.$(".modal").modal({keyboard:true,backdrop:false,show:true})
this.$step1=this.$el.find("[data-step1]")
this.$step2=this.$el.find("[data-step2]")
this.$submit=this.$el.find("[data-feedback-submit]")
this.$startover=this.$el.find("[data-startover]")
return this},show:function(){this.$(".modal").modal("show")
this.startOver()},showNextPart:function(e){var t=$(e.currentTarget).closest("[data-problem-part]")
var a=t.next("[data-problem-part]")
t.hide()
a.fadeIn()
if(a.next("[data-problem-part]").length===0){this.$submit.fadeIn()}},deadend:function(){this.submitForm(null,true)},hide:function(){this.$(".modal").modal("hide")},selectProblem:function(e){var t=$(e.currentTarget).attr("data-problem")
this.$step1.hide()
this.$step2.show()
this.$step2.find("[data-problem]").hide()
var a=this.$step2.find("[data-problem="+t+"]")
a.show()
this.$submit.show()
if(t==="grader"){a.find("[data-grader-part]").hide()
if(this.challenge.previousStepFailed()){a.find("[data-grader-goback]").show()
this.$submit.hide()}else if(this.challenge.currentStepHasWarning()){a.find("[data-grader-fail]").show()
a.find("[data-grader-details]").show()}else{a.find("[data-grader-details]").show()}}else if(t==="inability"||t==="hintcode"||t==="syntax"){this.$submit.hide()
a.find("[data-problem-part]").hide()
a.find("[data-problem-part]").eq(0).show()}else if(t==="editor"||t==="translated"&&a.find("textarea").length===0){this.$submit.hide()}this.$startover.show()},startOver:function(){this.$step2.hide()
this.$step1.show()
this.$startover.hide()
this.$("input").removeAttr("checked")
this.$("textarea").val("")},submitForm:function(e,t){e&&e.preventDefault()
this.hide()
var a=[]
var s=this.$("[data-problem]:visible")
s.find("[data-extra-input]").each(function(){var e=$(this)
if(e.attr("type")==="radio"&&e.is(":checked")||e.attr("type")!=="radio"){a.push($(this).attr("name")+": "+$(this).val())}})
var i=s.find("[data-moredetails]").val()||""
a.push(i)
a=a.join("\n")
var n=this.$("[name=problem-type]:checked").val()
var r=document.title.split(" | ")[0]
var l=i.substr(0,50).replace(/\n/g," ")+(i.length>50?"...":"")
var o=r+" - "+n+" - "+l
var h=a+"\n\n"+"{code:JavaScript}"+ScratchpadUI.editor.text()+"{code}\n\n"+this.challenge.getDebugInfo()
var c=KA.getUserID()+"\n\n"+"https://www.khanacademy.org/devadmin/users?authEmail=&username=&userId="+KA.getUserID()
var d=window.location.href.substr(window.location.href.lastIndexOf("/")+1)
var p=window.location.href
var g=""
var u=""
if(window.Tutorial&&window.Tutorial.Nav&&window.Tutorial.Nav.liveContext){g=window.Tutorial.Nav.liveContext.topicModel.get("domainSlug")
u=window.Tutorial.Nav.liveContext.topicModel.get("slug")}var f=KA.getUserProfile()
var m=f&&f.get("points")>=5e5
var v=KA.vipIssueReporter
var b=[]
if(m){b.push({value:"500k+ points"})}if(v){b.push({value:"VIP"})
if(f){h+="\nVIP issue from "+f.get("nickname")+" ("+f.get("email")+")\n\n"}}var w={editor:"The editor is broken",translated:"Not translated",syntax:"Syntax error won't go away",hintcode:"Question or hints confusing",inability:"Videos didn't prepare adequately",grader:"Grader won't accept code",instructions:"Question or hints confusing",other:"Other"}[n]
var _={dontSendToJIRA:t,fields:{project:{key:"CC"},issuetype:{name:"Item issue report"},summary:o,description:h,customfield_10024:[d],customfield_10027:p,customfield_10028:p,customfield_10029:{value:"coding-challenges"},customfield_10202:c,customfield_10204:b,customfield_10205:navigator.userAgent,customfield_10300:{value:w},customfield_10301:[icu.getLocale()],customfield_10400:u,customfield_10401:g}}
$.ajax({url:"/jirapost",type:"POST",data:JSON.stringify(_),contentType:"application/json",dataType:"json"})}})
window.ChallengeProgress=Backbone.View.extend({initialize:function(e){this.challenge=e.challenge
var t=_.bind(function(e){this.render(e)},this)
this.challenge.on("challengeUpdate",t)},render:function(e){var t=e.get("complete")
var a=e.get("tests")
var s=e.get("step")
var i=this
var n=Templates.get("scratchpad-challenge.challenge-checkmark")
var r=_.map(a,function(e,a){var r=$(n({pass:t||e.state==="pass"}))
r.toggleClass("active",a===s)
r.on("click",function(){i.challenge.moveToStep(a)})
return r})
this.$el.empty()
this.$el.append(r)
var l=Templates.get("scratchpad-challenge.challenge-goal-flag")
var o=$(l({pass:t})).toggleClass("active",e.onGoalStep())
if(t||this.challenge.allTestsPass()){o.on("click",_.bind(function(){this.challenge.completeChallenge()},this))}else{o.addClass("no-hover")}this.$el.append(o).toggleClass("complete",t)}})
window.ChallengeStatusMessage=Backbone.View.extend({initialize:function(e){this.challenge=e.challenge
var t=_.bind(this.render,this)
this.challenge.on("challengeUpdate",t)},render:function(e){var t=e.get("tests")
if(!t){return}var a=$._("All Steps Complete!")
var s
if(this.challenge.get("complete")){s=a}else if(this.challenge.allTestsPass()){s=a}else{var i=e.get("step")
if(e.previousStepFailed()){s=$._("Oops! Go check Step %(n)s!",{n:e.firstFailure()+1})}else{s=$._("Working on Step %(n)s of %(total)s",{n:i+1,total:t.length})}}this.$el.text(s)}})
var a=function(e){return e.slice(e.indexOf("{")+1,e.lastIndexOf("}"))}
var s=_.shuffle([$._("Way to go!"),$._("Awesome!"),$._("Good job!"),$._("Nice work!"),$._("Amazing!"),$._("Brilliant!"),$._("Incredible!"),$._("Making progress!"),$._("Getting closer!")])
var i=_.shuffle([$._("Onward!"),$._("Moving forward!"),$._("Ready for more?"),$._("Onto the next step!"),$._("Keep it up!"),$._("You can do it!"),$._("Great things are ahead!"),$._("Keep moving on!")])
var n=-1
var r=function(){n+=1
var e="<span>"+s[n%s.length]+"</span>"
var t="<span>"+i[n%i.length]+"</span>"
return"<span class='encouraging-message'>"+e+" "+t+"</span>"}
var l=_.shuffle([$._("All steps complete!"),$._("Great job!"),$._("You did it!"),$._("You figured it out!")])
var o=-1
var h=function(){o+=1
var e=l[o%l.length]
return"<span class='completion-message'><span>"+e+"</span></span>"}
var c={}
var d=0
var p=-1
var g=function(e,t){var s=1
var i=d
d+=1
p=i
for(var n=0;n<e.length;n++){var r=e[n].results
for(var l=0;l<r.length;l++){if(r[l].meta.structure){(function(e){if(!c.hasOwnProperty(e)){s+=1
Structured.prettify(a(e),function(a){c[e]=a
s-=1
if(s<=0&&i===p){t()}})}})(r[l].meta.structure)}}}s-=1
if(s===0){t()}}})()
});
KAdefine("javascript/scratchpad-challenge-package/challenge-checkmark.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["scratchpad-challenge-package_challenge-checkmark"]=module.exports=a(function(a,s,e,n,r){e=e||a.helpers
var i="",c,l,t,d,h=this
function o(a,s){return"check-pass"}function p(a,s){return"check-fail"}i+='<div class="task-icon">\n	<div class="'
t=e.pass
c=t||s.pass
l=e["if"]
d=h.program(1,o,r)
d.hash={}
d.fn=d
d.inverse=h.program(3,p,r)
c=l.call(s,c,d)
if(c||c===0){i+=c}i+='">\n		<i class="icon-ok"></i>\n		<div class="cs-themed-arrow-right">\n		</div>\n	</div>\n	<div class="white-arrow-right">\n	</div>\n	<div class="arrow-up"></div>\n</div>'
return i})})()
});
KAdefine("javascript/scratchpad-challenge-package/challenge-goal-flag.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpad-challenge-package_challenge-goal-flag"]=module.exports=a(function(a,e,n,s,r){n=n||a.helpers
var i="",l,t,c,o,p=this,d="function",f=n.blockHelperMissing
function h(a,e){return"Complete all steps to claim your reward!"}function v(a,e){return"check-pass"}function u(a,e){return"check-fail"}i+='<div class="task-icon" title="'
c=n["_"]
l=c||e["_"]
o=p.program(1,h,r)
o.hash={}
o.fn=o
o.inverse=p.noop
if(c&&typeof l===d){l=l.call(e,o)}else{l=f.call(e,l,o)}if(l||l===0){i+=l}i+='">\n	<div class="'
c=n.pass
l=c||e.pass
t=n["if"]
o=p.program(3,v,r)
o.hash={}
o.fn=o
o.inverse=p.program(5,u,r)
l=t.call(e,l,o)
if(l||l===0){i+=l}i+='">\n		<i class="icon-star"></i>\n		<div class="cs-themed-arrow-right">\n		</div>\n	</div>\n	<div class="white-arrow-right">\n	</div>\n	<div class="arrow-up"></div>\n\n</div>'
return i})})()
});
KAdefine("javascript/scratchpad-challenge-package/challenge-feedback-modal.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["scratchpad-challenge-package_challenge-feedback-modal"]=module.exports=e(function(e,n,a,t,l){a=a||e.helpers
var o="",r,i,s,p,f=this,d="function",u=a.blockHelperMissing
function c(e,n){return"What best describes your problem?"}function h(e,n){return"This step is too hard, I don't feel prepared enough to do it."}function m(e,n){return"I don't understand what the hint code with the boxes and blanks mean."}function y(e,n){return"There's an \"Oh Noes!\" message, and I can't get it to go away."}function g(e,n){return"I did this step correctly, but it won't let me continue."}function b(e,n){return"This step's instructions are confusing. I'm not sure what it wants me to do."}function v(e,n){return"The editor in my browser is broken."}function _(e,n){return"I don't speak English &mdash; and the instructions aren't translated."}function x(e,n){return"I have other feedback."}function w(e,n){return"Problem:"}function k(e,n){return"I did the step correctly, but it won't let me continue."}function I(e,n){return"Our automated grader checks your code before passing you to the next step, but sometimes it doesn't consider all the possible ways to code something."}function T(e,n){return"It looks like there's a message instructing you to go back a step. Check that step to see if something's wrong there that makes sense."}function q(e,n){return"If the message in that step does not make sense, \n                        please report a problem from there."}function P(e,n){return"It looks like there's an orange warning message for this step. Please read the message."}function N(e,n){return"\n                        If you still want to report a problem, please help us understand more:"}function Y(e,n){return"I tried to fix it according to the message, but it still won't accept it."}function H(e,n){return"I don't understand what the message wants me to do."}function S(e,n){return"We will automatically record your current code in the problem report, and try to see why the grader did not pass it. You can give additional details here:"}function W(e,n){return"Problem:"}function C(e,n){return"This step's instructions are confusing. I'm not sure what it wants me to do."}function D(e,n){return"Sorry if our instructions are confusing!\n                    Please describe what is unclear about the instructions:"}function E(e,n){return"Problem:"}function B(e,n){return"This step is too hard, I don't feel prepared enough to do it."}function O(e,n){return"We try to make these challenges build upon what we've taught in the talk-through before."}function F(e,n){return"Did you watch the talk-through that came before this challenge?"}function R(e,n){return"No, I'll do that now."}function j(e,n){return"Yes, and it didn't prepare me enough."}function G(e,n){return"Sometimes it helps to re-watch the talk-through. Have you tried that?"}function M(e,n){return"No, I'll do that now."}function z(e,n){return"No, I don't think it will help."}function A(e,n){return"Yes!"}function J(e,n){return"It can help to play with the final code at the end of the talk-through,\n                    going through it line by line and editing it to see how the ouput changes.\n                    Have you tried that?"}function K(e,n){return"No, I'll try that now."}function L(e,n){return"Yes!"}function Q(e,n){return"Sometimes it helps to ask a question underneath the talk-through, when something is confusing. Did you try that?"}function U(e,n){return"No, I'll try that now."}function V(e,n){return"No, but I had no questions."}function X(e,n){return"Yes, but the answer didn't help."}function Z(e,n){return"Yes, but nobody answered."}function $(e,n){return"Thank you for answering those questions. Please give us more details on what you feel under-prepared for:"}function en(e,n){return"Problem:"}function nn(e,n){return"I don't understand what the hint code with the boxes and blanks mean."}function an(e,n){return"There's a \"What's this?\" link next to the hint code. If you click that, you'll get\n                        an explanation of what it means. <strong>Have you read that?</strong>"}function tn(e,n){return"No, I'll try that now."}function ln(e,n){return"Yes, I have read the explanation, and it does not make sense."}function on(e,n){return"What is confusing about the hint code?"}function rn(e,n){return"Problem:"}function sn(e,n){return"There's an \"Oh Noes!\" message, and I can't get it to go away."}function pn(e,n){return"Sorry about that! The syntax messages can be confusing sometimes."}function fn(e,n){return"Have you tried comparing your code to the hint code on the right?"}function dn(e,n){return"No, I'll try that now."}function un(e,n){return"Yes, but it doesn't help because my code isn't in the hint code."}function cn(e,n){return"Yes, but I don't see the difference."}function hn(e,n){return"Does the message make sense?"}function mn(e,n){return"No, it doesn't make sense."}function yn(e,n){return"It makes a little sense."}function gn(e,n){return"Yes, it makes sense."}function bn(e,n){return"Have you tried anything to fix the syntax error?"}function vn(e,n){return"No, I'll try something now."}function _n(e,n){return"No, I don't know what I can do."}function xn(e,n){return"Yes, but it didn't work."}function wn(e,n){return"If you tried to fix it, what did you do? If you didn't, you can leave this blank."}function kn(e,n){return"Problem:"}function In(e,n){return"The editor in my browser is broken!"}function Tn(e,n){return'If you are on an iPad, we have various known issues on that browser. <a target="_blank" href="https://code.google.com/p/khanacademy/issues/detail?id=23517&thanks=23517&ts=1381857891">Star this issue\n                    to be notified when we resolve those issues.'}function qn(e,n){return"The editor should work in Chrome, Firefox, and IE9+."}function Pn(e,n){return'If it is not working on those browsers, <a target="_blank" href="https://code.google.com/p/khanacademy/issues/entry?template=Programming%20Editor">please report your problem here</a>. Thanks!'}function Nn(e,n){return"Problem:"}function Yn(e,n){return"I don't speak English &mdash; and the instructions aren't translated!"}function Hn(e,n){var t="",l
t+="\n                <p>"
s=a["_"]
l=s||e["_"]
p=f.program(142,Sn,n)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof l===d){l=l.call(e,p)}else{l=u.call(e,l,p)}if(l||l===0){t+=l}t+="</p>\n                <textarea data-moredetails></textarea>\n                "
return t}function Sn(e,n){return"Which part is not translated?"}function Wn(e,n){var t="",l
t+="\n                <p>"
s=a["_"]
l=s||e["_"]
p=f.program(145,Cn,n)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof l===d){l=l.call(e,p)}else{l=u.call(e,l,p)}if(l||l===0){t+=l}t+="\n                </p>\n                \n                <p>"
s=a["_"]
l=s||e["_"]
p=f.program(147,Dn,n)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof l===d){l=l.call(e,p)}else{l=u.call(e,l,p)}if(l||l===0){t+=l}t+=" \n                </p>\n                "
return t}function Cn(e,n){return'Please see the current translation requests \n                    <a target="_blank" href="https://code.google.com/p/khanacademy/issues/list?can=2&q=ChallengeTranslationRequest&colspec=ID+Stars+Summary&cells=tiles">here</a>.\n                    If your language is on that list, please "star" the request.'}function Dn(e,n){return'If your language is not on that list, \n                    <a target="_blank" href="https://code.google.com/p/khanacademy/issues/entry?template=Programming%20Translation%20Request">request it here</a>.'}function En(e,n){return"We like feedback!"}function Bn(e,n){return"Before you leave feedback here, please make sure your report\n                    doesn't fall into any of the other categories. You'll get better help that way!\n                "}function On(e,n){return"What other feedback do you have for us?"}function Fn(e,n){return"Give Feedback"}function Rn(e,n){return"Cancel"}function jn(e,n){return"Choose different problem"}o+='<!-- Scratchpad challenge feedback modal -->\n<div class="modal hide fade scratchpad-challenge-feedback-modal">\n    <div class="modal-body">\n        \n        <span class="close" data-dismiss="modal">&#215;</span>\n\n        <form>\n\n        <div data-step1>\n\n            <fieldset>\n                <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(1,c,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</strong></legend>\n\n                <ul class="scratchpad-challenge-feedback-modal-problems">\n                    <li><label>\n                        <input type="radio" name="problem-type" value="inability" data-problem="inability">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(3,h,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="hintcode" data-problem="hintcode">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(5,m,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="syntax" data-problem="syntax">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(7,y,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="grader" data-problem="grader"> \n                        '
s=a["_"]
r=s||n["_"]
p=f.program(9,g,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="instructions" data-problem="instructions">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(11,b,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="editor" data-problem="editor">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(13,v,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="translated" data-problem="translated">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(15,_,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                    <li><label>\n                        <input type="radio" name="problem-type" value="other" data-problem="other">\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(17,x,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label></li>\n                </ul>\n            </fieldset>\n\n        </div>\n\n        <div data-step2 style="display:none;">\n\n            <div data-problem="grader">\n\n                <p><strong>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(19,w,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(21,k,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</strong></p>\n        \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(23,I,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n                 \n                <div data-grader-goback data-grader-part style="display:none;">\n                    <span style="color:darkorange; font-weight: bold;">\n                        <span class="icon-warning-sign"></span>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(25,T,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="\n                        "
s=a["_"]
r=s||n["_"]
p=f.program(27,q,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </span>\n\n                </div>\n\n\n                <div data-grader-fail data-grader-part style="display:none;">\n                \n                    <span style="color:darkorange; font-weight: bold;">\n                        <span class="icon-warning-sign"></span>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(29,P,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="\n                    </span>\n\n                    <span>"
s=a["_"]
r=s||n["_"]
p=f.program(31,N,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </span>\n                    <br>\n                    <label>\n                        <input type="radio" value="tried-to-fix-it" name="grader-message" data-extra-input>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(33,Y,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </label>\n                    <br>\n                    <label>\n                        <input type="radio" value="dont-understand" name="grader-message" data-extra-input>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(35,H,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="\n                    </label>\n                    <br>\n                </div>\n\n                <div data-grader-details data-grader-part>\n\n                    <p>"
s=a["_"]
r=s||n["_"]
p=f.program(37,S,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n\n                    <textarea data-moredetails></textarea>\n\n                </div>\n\n                \n\n            </div>\n\n\n            <div data-problem="instructions">\n                <p><strong>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(39,W,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(41,C,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</strong></p>\n \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(43,D,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n\n                <textarea data-moredetails></textarea>\n            </div>\n\n\n            <div data-problem="inability">\n                <h4>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(45,E,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(47,B,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</h4>\n    \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(49,O,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                </p>\n\n                <fieldset data-problem-part style="display:none;">\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(51,F,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</strong></legend>\n                    <ul>\n                    <li>\n                    <label>\n                        <input type="radio" value="no-trynow" name="grader-inability-watched" data-extra-input data-deadend>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(53,R,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </label>\n                    </li>\n                    <li>\n                    <label>\n                        <input type="radio" value="yes" name="grader-inability-watched" data-extra-input data-next-part>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(55,j,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </label>\n                    </li>\n                    </ul>\n                </fieldset>\n                \n                <fieldset data-problem-part style="display:none;">\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(57,G,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</strong><legend>\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" value="no-trynow" name="grader-inability-rewatched" data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(59,M,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="no-wonthelp" name="grader-inability-rewatched" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(61,z,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="yes" name="grader-inability-rewatched" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(63,A,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(65,J,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</strong></legend>\n\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" value="no-trynow" name="grader-inability-tinkered" data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(67,K,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="yes" name="grader-inability-tinkered" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(69,L,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(71,Q,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</strong></legend>\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" value="no-trynow" name="grader-inability-question" data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(73,U,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="yes-no-questions" name="grader-inability-question" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(75,V,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="yes-answer-didnthelp" name="grader-inability-question" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(77,X,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" value="yes-no-answer" name="grader-inability-question" data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(79,Z,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n                    <label>'
s=a["_"]
r=s||n["_"]
p=f.program(81,$,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    <textarea data-moredetails></textarea>\n                    </label>\n                </fieldset>\n\n            </div>\n\n            <div data-problem="hintcode">\n                <p><strong>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(83,en,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(85,nn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p></strong>\n    \n                <fieldset data-problem-part style="display:none;">\n                    <legend>'
s=a["_"]
r=s||n["_"]
p=f.program(87,an,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</legend>\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" name="hintcode" value="no-trynow"  data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(89,tn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="hintcode" value="read-it-still-confusing"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(91,ln,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</label>\n                    </ul>\n\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n                    <label>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(93,on,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        <textarea data-moredetails></textarea>\n                    </label>\n                </fieldset>\n\n            </div>\n\n            <div data-problem="syntax">\n                <p><strong>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(95,rn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(97,sn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</p></strong>\n                \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(99,pn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n\n                <fieldset data-problem-part style="display:none;">\n                    <legend><strong>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(101,fn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </legend></strong>\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-compare-to-hintcode" value="no-try-now"  data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(103,dn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-compare-to-hintcode" value="yes-but-not-in-hint"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(105,un,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-compare-to-hintcode" value="yes-but-cant-see-diff"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(107,cn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(109,hn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </strong></legend>\n\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-message-make-sense" value="no"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(111,mn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-message-make-sense" value="kindof"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(113,yn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-message-make-sense" value="yes"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(115,gn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n                </fieldset>\n\n                <fieldset data-problem-part style="display:none;">\n\n                    <legend><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(117,bn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                    </strong></legend>\n\n                    <ul>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-tried-fixing" value="no-trynow"  data-extra-input data-deadend>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(119,vn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-tried-fixing" value="no-dont-know-how"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(121,_n,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    <li>\n                        <label>\n                            <input type="radio" name="syntax-tried-fixing" value="yes"  data-extra-input data-next-part>\n                            '
s=a["_"]
r=s||n["_"]
p=f.program(123,xn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        </label>\n                    </ul>\n\n                </fieldset>\n\n                <fielset data-problem-part style="display:none;">\n                    <label>\n                        '
s=a["_"]
r=s||n["_"]
p=f.program(125,wn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='\n                        <textarea name="syntax-how-i-tried-to-fix" data-extra-input></textarea>\n                    </label>\n                </fieldset>\n\n            </div>\n\n\n             <div data-problem="editor">\n                <p><strong>\n                '
s=a["_"]
r=s||n["_"]
p=f.program(127,kn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                "
s=a["_"]
r=s||n["_"]
p=f.program(129,In,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</p></strong>\n            \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(131,Tn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</a>\n                </p>\n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(133,qn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</p>\n    \n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(135,Pn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n\n            </div>\n\n            <div data-problem="translated">\n                <p><strong>\n                    '
s=a["_"]
r=s||n["_"]
p=f.program(137,Nn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+=" \n                    "
s=a["_"]
r=s||n["_"]
p=f.program(139,Yn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="\n                </p></strong>\n\n                "
s=a.shouldBeTranslated
r=s||n.shouldBeTranslated
i=a["if"]
p=f.program(141,Hn,l)
p.hash={}
p.fn=p
p.inverse=f.program(144,Wn,l)
r=i.call(n,r,p)
if(r||r===0){o+=r}o+='\n            </div>\n\n\n            <div data-problem="other">\n                <p><strong>'
s=a["_"]
r=s||n["_"]
p=f.program(149,En,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</p></strong>\n\n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(151,Bn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="\n                </p>\n\n                <p>"
s=a["_"]
r=s||n["_"]
p=f.program(153,On,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</p>\n                <textarea data-moredetails></textarea>\n            </div>\n            \n            <!-- Common to each step -->\n            <div data-feedback-submit>\n                <button data-submit name="submit" type="submit" class="simple-button primary" style="margin:10px 0;">'
s=a["_"]
r=s||n["_"]
p=f.program(155,Fn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</button>\n            </div>\n\n\n        </div>\n\n    </div>\n\n    <div class="modal-footer">\n\n        <button type="button" class="simple-button" data-cancel style="float:right;">'
s=a["_"]
r=s||n["_"]
p=f.program(157,Rn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+='</button>\n\n        <a data-startover href="javascript:void(0);" style="display:none; float:left; display: block; margin-top: 6px;"> &laquo;'
s=a["_"]
r=s||n["_"]
p=f.program(159,jn,l)
p.hash={}
p.fn=p
p.inverse=f.noop
if(s&&typeof r===d){r=r.call(n,p)}else{r=u.call(n,r,p)}if(r||r===0){o+=r}o+="</button>\n\n        \n        &nbsp;\n    </div>\n\n    </form>\n    \n</div>"
return o})})()
});
KAdefine("javascript/scratchpad-challenge-package/challenge-pane-header.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["scratchpad-challenge-package_challenge-pane-header"]=module.exports=e(function(e,n,r,t,i){r=r||e.helpers
var a="",s,l,h,o,p=this,c="function",f=r.helperMissing,u=void 0,d=this.escapeExpression
function m(e,n){return'\n   <div class="jumping-critter"></div>\n'}function v(e,n){var t="",i,a
t+="\n	"
h=r.showCritter
i=h||e.showCritter
a=r["if"]
o=p.program(4,g,n)
o.hash={}
o.fn=o
o.inverse=p.noop
i=a.call(e,i,o)
if(i||i===0){t+=i}t+="\n"
return t}function g(e,n){return'\n    	<div class="happy-critter"></div>\n    '}a+="<h2>"
h=r.title
s=h||n.title
if(typeof s===c){s=s.call(n,{hash:{}})}else if(s===u){s=f.call(n,"title",{hash:{}})}a+=d(s)+"</h2>\n\n\n"
h=r.showFinishPrompt
s=h||n.showFinishPrompt
l=r["if"]
o=p.program(1,m,i)
o.hash={}
o.fn=o
o.inverse=p.program(3,v,i)
s=l.call(n,s,o)
if(s||s===0){a+=s}return a})})()
});
KAdefine("javascript/scratchpad-challenge-package/challenge-step.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{}
a["scratchpad-challenge-package_challenge-step"]=module.exports=e(function(e,a,n,s,l){n=n||e.helpers
var t="",i,o,r,c,h=this,f="function",p=n.helperMissing,u=void 0,g=this.escapeExpression,d=n.blockHelperMissing
function m(e,a){return"Hint"}function v(e,a){return"(What's this?)"}function y(e,a){var s="",l
s+='\n        <img src="'
r=n.image
l=r||e.image
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"image",{hash:{}})}s+=g(l)+'" class="test-challenge-image" alt="'
r=n["_"]
l=r||e["_"]
c=h.program(6,_,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof l===f){l=l.call(e,c)}else{l=d.call(e,l,c)}if(l||l===0){s+=l}s+='" title="'
r=n["_"]
l=r||e["_"]
c=h.program(8,b,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof l===f){l=l.call(e,c)}else{l=d.call(e,l,c)}if(l||l===0){s+=l}s+='">\n        '
return s}function _(e,a){return"Screenshot of what your code should output"}function b(e,a){return"Your code in this step should output something that looks like this"}function M(e,a){var s="",l
s+='\n            <div class="test-challenge-also-message-wrapper">\n                <span class="test-challenge-also-message">\n                    '
r=n.alsoMessage
l=r||e.alsoMessage
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"alsoMessage",{hash:{}})}s+=g(l)+"\n                </span>\n            </div>\n        "
return s}function k(e,a){var s="",l,t
s+="\n            "
r=n.alternateMessage
l=r||e.alternateMessage
t=n["if"]
c=h.program(13,w,a)
c.hash={}
c.fn=c
c.inverse=h.noop
l=t.call(e,l,c)
if(l||l===0){s+=l}s+="\n        "
return s}function w(e,a){var s="",l
s+='\n            <div class="test-challenge-alternate-message-wrapper">\n                <span class="test-challenge-alternate-message">\n                    '
r=n.alternateMessage
l=r||e.alternateMessage
if(typeof l===f){l=l.call(e,{hash:{}})}else if(l===u){l=p.call(e,"alternateMessage",{hash:{}})}s+=g(l)+"\n                </span>\n            </div>\n            "
return s}function x(e,a){return"This hint shows the code you'll need to successfully complete this step,\n                but it is not the complete answer."}function H(e,a){return"The empty blanks are parts that you will need to figure out yourself."}function S(e,a){var s="",l
s+="\n            <li>"
r=n["_"]
l=r||e["_"]
c=h.program(20,T,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof l===f){l=l.call(e,c)}else{l=d.call(e,l,c)}if(l||l===0){s+=l}s+="</li>\n            "
return s}function T(e,a){return"If you see <strong>colored blanks</strong>, the values you put in two blanks of the same color must be <strong>exactly the same.</strong>"}function j(e,a){var s="",l
s+="\n            <li>"
r=n["_"]
l=r||e["_"]
c=h.program(23,B,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof l===f){l=l.call(e,c)}else{l=d.call(e,l,c)}if(l||l===0){s+=l}s+="\n            </li>\n            "
return s}function B(e,a){return"The image on the right shows what your program should output, if the code is correct.\n                Some things might be different, like the exact colors or position."}function E(e,a){return"Report a problem"}t+='<div class="challenge-step">\n    <div class="test-structure">\n        <h3>'
r=n["_"]
i=r||a["_"]
c=h.program(1,m,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof i===f){i=i.call(a,c)}else{i=d.call(a,i,c)}if(i||i===0){t+=i}t+='\n            <a href="javascript:void(0);" class="test-challenge-whats-this-hint">\n                '
r=n["_"]
i=r||a["_"]
c=h.program(3,v,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof i===f){i=i.call(a,c)}else{i=d.call(a,i,c)}if(i||i===0){t+=i}t+='</a></h3>\n        <div class="test-challenge-wrap">\n        '
r=n.image
i=r||a.image
o=n["if"]
c=h.program(5,y,l)
c.hash={}
c.fn=c
c.inverse=h.noop
i=o.call(a,i,c)
if(i||i===0){t+=i}t+="\n        "
r=n.structure
i=r||a.structure
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===u){i=p.call(a,"structure",{hash:{}})}if(i||i===0){t+=i}t+='\n        </div>\n    </div>\n\n    <div class="test-description">\n        <p>'
r=n.description
i=r||a.description
if(typeof i===f){i=i.call(a,{hash:{}})}else if(i===u){i=p.call(a,"description",{hash:{}})}t+=g(i)+"</p>\n\n        "
r=n.alsoMessage
i=r||a.alsoMessage
o=n["if"]
c=h.program(10,M,l)
c.hash={}
c.fn=c
c.inverse=h.program(12,k,l)
i=o.call(a,i,c)
if(i||i===0){t+=i}t+='\n\n    </div>\n\n    <div style="clear:both;"></div>\n\n</div>\n\n<!-- Scratchpad challenge hint explanation modal -->\n<div class="modal hide fade test-challenge-modal">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <ul>\n            <li>'
r=n["_"]
i=r||a["_"]
c=h.program(15,x,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof i===f){i=i.call(a,c)}else{i=d.call(a,i,c)}if(i||i===0){t+=i}t+="</li>\n            <li>"
r=n["_"]
i=r||a["_"]
c=h.program(17,H,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof i===f){i=i.call(a,c)}else{i=d.call(a,i,c)}if(i||i===0){t+=i}t+="</li>\n            \n            "
r=n.hasMatchingBlanks
i=r||a.hasMatchingBlanks
o=n["if"]
c=h.program(19,S,l)
c.hash={}
c.fn=c
c.inverse=h.noop
i=o.call(a,i,c)
if(i||i===0){t+=i}t+="\n            \n            "
r=n.image
i=r||a.image
o=n["if"]
c=h.program(22,j,l)
c.hash={}
c.fn=c
c.inverse=h.noop
i=o.call(a,i,c)
if(i||i===0){t+=i}t+='\n        </ul>\n</div>\n\n<a class="scratchpad-challenge-feedback-btn" href="javascript:void(0);">('
r=n["_"]
i=r||a["_"]
c=h.program(25,E,l)
c.hash={}
c.fn=c
c.inverse=h.noop
if(r&&typeof i===f){i=i.call(a,c)}else{i=d.call(a,i,c)}if(i||i===0){t+=i}t+=")</a>\n"
return t})})()
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/scratchpad-challenge-package/scratchpad-challenge.js");
KAdefine.require("./javascript/scratchpad-challenge-package/challenge-checkmark.handlebars");
KAdefine.require("./javascript/scratchpad-challenge-package/challenge-goal-flag.handlebars");
KAdefine.require("./javascript/scratchpad-challenge-package/challenge-feedback-modal.handlebars");
KAdefine.require("./javascript/scratchpad-challenge-package/challenge-pane-header.handlebars");
KAdefine.require("./javascript/scratchpad-challenge-package/challenge-step.handlebars");
