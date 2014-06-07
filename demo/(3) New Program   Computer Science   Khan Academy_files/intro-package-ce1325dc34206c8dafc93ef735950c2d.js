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
KAdefine("javascript/intro-package/profile-intro.js", function(require, requireWithVars, module, exports) {
var Analytics=require("../shared-package/analytics.js")
if(typeof Profile!=="undefined"){Profile._showIntro=function(){var t=Profile.profile.isPhantom()
var o=Profile.profile.isFullyEditable()
Analytics.trackSingleEvent("Profile Intro Tour",{isPhantom:t,isFullyEditable:o})
if(t){if($(".phantom-notification-bar").length){return}guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("No thanks, my hard work should go unrecognized."),classString:"simple-button"},{action:guiders.ButtonAction.CLOSE,text:$._("Yes, please. Sign me up!"),onclick:function(){window.location.href="/signup?continue="+encodeURIComponent(window.location.pathname)},classString:"simple-button green"}],width:475,title:$._("Claim your profile"),description:$._("Your profile page shows all the great "+"progress you've made on Khan Academy. "+"Once you sign up, you can also choose "+"your avatar and display your badges."),overlay:true}).show()
return}guiders.createGuider({id:"welcome",next:"basic-profile",buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Cool. Show me around!"),classString:"simple-button green"}],title:$._("Welcome to your profile page!"),description:$._("Here, you can share your achievements and "+"track your progress."),overlay:true}).show()
guiders.createGuider({id:"basic-profile",next:"more-info",attachTo:".basic-user-info",highlight:".basic-user-info",overlay:true,position:3,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("This is you."),description:o?$._("Choose your avatar, username, and how you want to be "+"known to the Khan Academy community."):$._("Click on the image to choose your avatar!")})
guiders.createGuider({id:"more-info",next:o?"discussion-history":"programs-view",attachTo:".accomplishments-statistics-section",highlight:".accomplishments-statistics-section",overlay:true,position:3,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("Check your vitals."),description:$._("Check out your badges and visualize your stats. "+"These tabs are only visible to you and your coach.")})
if(o){guiders.createGuider({id:"discussion-history",next:"programs-view",attachTo:".community-discussion",highlight:".community-discussion",overlay:true,position:3,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("Talk it up!"),description:$._("You and the community can browse your questions, "+"answers, and comments.")})}guiders.createGuider({id:"programs-view",attachTo:".community-programs",highlight:".community-programs",overlay:true,position:3,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("OK, thanks!"),classString:"simple-button green"}],title:$._("Learn to program."),description:o?$._("Everyone can see (and be inspired by) your programs "+"and spin-offs."):$._("Spin off other people's computer programs and create "+"your own.")})}}
});
KAdefine("javascript/intro-package/cs-intro.js", function(require, requireWithVars, module, exports) {
window.ScratchpadUI={showLoginTeaser:function(){var o=KA.getUserProfile()
if(o&&!o.get("isPhantom")){return}if($(".phantom-notification-bar").length){return}var t=readCookie("csPhantomBait")
if(!t||t==="shown promo"){return}var e="CS Login Teaser"
var n=$._("Congratulations on your first program! Sign up and "+"experiment more!")
guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("No, thanks. I don't want to be awesome."),classString:"simple-button"},{action:guiders.ButtonAction.CLOSE,text:$._("Yes, please. Sign me up!"),onclick:function(){window.location.href="/signup?continue="+encodeURIComponent(window.location.pathname)},classString:"simple-button green"}],title:$._("Become a computer science superstar"),description:n,overlay:true}).show()
createCookie("csPhantomBait","shown promo")}}
});
KAdefine("javascript/intro-package/dashboard-intro.js", function(require, requireWithVars, module, exports) {
window.Dashboard=window.Dashboard||{}
window.Dashboard.showIntro=function(t){this.initGuiders()
var e=function(t){_.defer(function(){$(document.body).animate({scrollTop:t.elem.offset().top-20},400,"easeInOutCubic")})}
guiders.createGuider({buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Start your learning adventure!"),classString:"simple-button green"}],classString:"dashboard-intro",title:$._("Welcome to the new learning dashboard!"),description:$("<iframe width='100%' height='380' "+"src='https://www.youtube.com/embed/"+t+"?enablejsapi=1&wmode=transparent&modestbranding=1&rel=0' "+"frameborder='0' allowfullscreen></iframe>"),id:"dashintro",next:"progressbar",overlay:true,width:600}).show()
guiders.createGuider({buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Got it"),classString:"simple-button green"}],classString:"dashboard-intro",attachTo:".mission-progress-container",highlight:".mission-progress-container",position:KA.ATHENA_VNEXT?3:9,title:$._("Your mission, should you choose to accept it..."),description:$._("Every time you finish a task, this progress bar "+"updates. As you master skills, individual cells will "+"<span class='darken-holder'>darken</span>. "+"Try to see if you can get all of these cells to turn deep blue "+"by sharpening your skills."),id:"progressbar",next:"startfirsttask",overlay:true,width:480})
var o
if(!window.Dashboard.options||window.Dashboard.options.newIntroTest==="control"){var o=$._("Go ahead and take your pretest to unlock the mission")}else{var o=$._("Go ahead and take your pretest to unlock the mission. By "+"taking this pretest, you might be able to skip ahead in the "+"World of Math!")}guiders.createGuider({buttons:[],classString:"dashboard-intro",attachTo:".assessment-container .start-button",position:KA.ATHENA_VNEXT?9:3,title:$._("Ready to start?"),description:o,id:"startfirsttask",width:320,overlay:false,onShow:function(){window.Dashboard.introShown=true}})}
Dashboard.showAssessmentCompletionGuider=function(t){this.initGuiders()
if(t){guiders.createGuider({buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Awesome!"),classString:"simple-button green"}],classString:"dashboard-intro",attachTo:".mission-progress-container",highlight:".mission-progress-container",position:KA.ATHENA_VNEXT?2:10,title:$._("Congratulations!"),description:$._("Did you see those tiles change colors? "+"You've started your journey to master the skills here!"),id:"progressbar",next:"startfirsttask",overlay:true,width:480}).show()}var e=guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Got it!"),classString:"simple-button green"}],classString:"dashboard-intro",attachTo:".dashboard-task-list-container",position:KA.ATHENA_VNEXT?10:2,title:$._("Next up..."),id:"startfirsttask",description:$._("You've unlocked your tasks. "+"Each one you finish will give you point rewards!"),width:200})
if(!t){e.show()}}
Dashboard.showFirstPracticeCompletionGuider=function(t){this.initGuiders()
var e
var o
if(t){e=[]
o=$._("A new challenge awaits")}else{e=[{action:guiders.ButtonAction.CLOSE,text:$._("I can't wait!"),classString:"simple-button green"}]
o=$._("Watch out for a new challenge")}guiders.createGuider({buttons:e,classString:"dashboard-intro",attachTo:"#mastery-challenge",position:6,title:o,description:$._("As you practice tasks, you will unlock "+"<strong>Mastery Challenges</strong>. These let you potentially "+"level up multiple skills at once. ")}).show()}
Dashboard.showMissionsIntro=function(t){this.initGuiders()
var e=$._("Choose to focus on a specific math subject "+"or grade level!")
var o=_.bind(t.openMenu,t)
if(this.options.noIntroTestValue==="integrated_mission_picker"){e=$._("Switch your math subject or grade level at "+"any time!")
o=undefined}guiders.createGuider({buttons:[],classString:"dashboard-intro-mini",attachTo:".mission-selector .dashboard-mission-info",position:3,offset:{top:10,left:0},id:"missionsintro",width:200,description:e,onShow:o}).show()}
Dashboard.initGuiders=_.once(function(){Dashboard.on("mission-picker-open",guiders.hideAll,guiders)
Dashboard.on("dashboard-hidden",guiders.hideAll,guiders)
Dashboard.on("task-start",guiders.hideAll,guiders)})
Dashboard.showLearnMenuTooltip=function(){$(".watch-link").qtip({content:{text:$._("Want to learn something other than math? Use the "+"LEARN menu or the search bar to navigate!"),button:true},show:{event:false,ready:true},hide:{event:"click"},style:{classes:"topic-selector-tooltip",tip:{width:30,height:16}},position:{my:"top center",at:"bottom center",adjust:{x:158,y:-10}},events:{show:function(t,e){$("<div />").addClass("topic-selector-tooltip-background").appendTo($(".topic-selector-tooltip"))}}})}
Dashboard.hideLearnMenuTooltip=function(){var t=$(".watch-link").qtip("api")
if(t){t.hide()}}
});
KAdefine("javascript/intro-package/dashboard-topic-selector.js", function(require, requireWithVars, module, exports) {
window.Dashboard=window.Dashboard||{}
var DashboardTopicSelectorView=require("./dashboard-topic-selector-view.jsx")
var topicSelectorWrapper
window.Dashboard.showTopicSelector=function(){topicSelectorWrapper=$("<div />",{id:"topic-selector-splash","class":"full_selector"}).appendTo("#page-container")
React.renderComponent(DashboardTopicSelectorView({handleMissionClick:function(o){Dashboard.setUserDataInfoInitialTopic(o)
Dashboard.switchToMission({slug:o},{force:true})},handleLibraryClick:function(o){Dashboard.setUserDataInfoInitialTopic(o,function(){window.location="/"+o})}}),topicSelectorWrapper[0],function(){var o=function(){var o=100
var e=800
var r=e-o
var i=Math.max(document.body.clientHeight-o,r)
topicSelectorWrapper.height(i)}
o()
$(window).resize(_.debounce(function(){o()},150))})}
window.Dashboard.removeTopicSelector=function(){if(topicSelectorWrapper&&topicSelectorWrapper[0]){React.unmountComponentAtNode(topicSelectorWrapper[0])
topicSelectorWrapper.remove()}}
});
KAdefine("javascript/intro-package/dashboard-topic-selector-view.jsx", function(require, requireWithVars, module, exports) {
var ThrobberGrid=require("../react-package/throbber-grid.jsx")
var RP=React.PropTypes
var TopicOption=React.createClass({displayName:"TopicOption",propTypes:{title:RP.string.isRequired,handleClick:RP.func.isRequired},render:function(t){return React.DOM.div({className:"full-selector-option"},React.DOM.a({href:"javascript: void 0",onClick:this.props.handleClick},this.props.title))}})
var FullTopicSelectorTab=React.createClass({displayName:"FullTopicSelectorTab",render:function(t){var i=this.props.active?" active":""
return React.DOM.div({className:"full-selector-tab-row"},React.DOM.div({id:"full-selector-tab-"+this.props.tabName,className:"full-selector-tab"+i,onClick:this.props.switchTab},React.DOM.div(null,$._(this.props.tabTitle))))}})
var DashboardTopicSelectorView=React.createClass({displayName:"DashboardTopicSelectorView",propTypes:{handleMissionClick:RP.func.isRequired,handleLibraryClick:RP.func.isRequired},getInitialState:function(){return{activeTab:"math",loading:false}},switchTabFn:function(t){return function(){this.setState({activeTab:t})}.bind(this)},switchMission:function(t){return function(){this.setState({loading:true})
this.props.handleMissionClick(t)}.bind(this)},switchToLibrary:function(t){return function(){this.setState({loading:true})
this.props.handleLibraryClick(t)}.bind(this)},renderMathTab:function(){return React.DOM.div({id:"full-selector-tab-inner-math",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"K–8th Grade (U.S.)")),TopicOption({title:$._("Early Math"),handleClick:this.switchMission("early-math")}),TopicOption({title:$._("3rd Grade"),handleClick:this.switchMission("cc-third-grade-math")}),TopicOption({title:$._("4th Grade"),handleClick:this.switchMission("cc-fourth-grade-math")}),TopicOption({title:$._("5th Grade"),handleClick:this.switchMission("cc-fifth-grade-math")}),TopicOption({title:$._("6th Grade"),handleClick:this.switchMission("cc-sixth-grade-math")}),TopicOption({title:$._("7th Grade"),handleClick:this.switchMission("cc-seventh-grade-"+"math")}),TopicOption({title:$._("8th Grade"),handleClick:this.switchMission("cc-eighth-grade-math")})),React.DOM.div({style:{display:"inline-block"}},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"High school and beyond")),React.DOM.div({className:"full-selector-tab-column"},TopicOption({title:$._("Algebra I"),handleClick:this.switchMission("algebra")}),TopicOption({title:$._("Geometry"),handleClick:this.switchMission("geometry")}),TopicOption({title:$._("Algebra II"),handleClick:this.switchMission("algebra2")}),TopicOption({title:$._("SAT Prep"),handleClick:this.switchToLibrary("sat")}),TopicOption({title:$._("Trigonometry"),handleClick:this.switchMission("trigonometry")}),TopicOption({title:$._("Probability and statistics"),handleClick:this.switchMission("probability")}),TopicOption({title:$._("Precalculus"),handleClick:this.switchToLibrary("precalculus")})),React.DOM.div({className:"full-selector-tab-column"},TopicOption({title:$._("Differential calculus"),handleClick:this.switchMission("differential-"+"calculus")}),TopicOption({title:$._("Integral calculus"),handleClick:this.switchToLibrary("integral-calculus")}),TopicOption({title:$._("Multivariable calculus"),handleClick:this.switchToLibrary("multivariable-calculus")}),TopicOption({title:$._("Linear algebra"),handleClick:this.switchToLibrary("linear-algebra")}),TopicOption({title:$._("Differental equations"),handleClick:this.switchToLibrary("differential-equations")}))),React.DOM.div({className:"full-selector-tab-column",style:{"margin-top":20}},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Foundations")),React.DOM.div({className:"full-selector-tab-column"},TopicOption({title:$._("Arithmetic"),handleClick:this.switchMission("arithmetic")}),TopicOption({title:$._("Pre-algebra"),handleClick:this.switchMission("pre-algebra")}))),React.DOM.div({style:{display:"inline-block","margin-top":20}},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Everything")),TopicOption({title:$._("Learn all the math on Khan Academy »"),handleClick:this.switchMission("math")})))},renderScienceTab:function(){return React.DOM.div({id:"full-selector-tab-inner-science",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Science")),TopicOption({title:$._("Biology"),handleClick:this.switchToLibrary("biology")}),TopicOption({title:$._("Physics"),handleClick:this.switchToLibrary("physics")}),TopicOption({title:$._("Cosmology and astronomy"),handleClick:this.switchToLibrary("cosmology-and-astronomy")}),TopicOption({title:$._("Chemistry"),handleClick:this.switchToLibrary("chemistry")}),TopicOption({title:$._("Organic chemistry"),handleClick:this.switchToLibrary("science/organic-chemistry")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Medicine")),TopicOption({title:$._("Health and medicine"),handleClick:this.switchToLibrary("health-and-medicine")}),TopicOption({title:$._("MCAT"),handleClick:this.switchToLibrary("mcat")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Other")),TopicOption({title:$._("Scientific discoveries"),handleClick:this.switchToLibrary("discoveries")}),TopicOption({title:$._("Robots"),handleClick:this.switchToLibrary("robots")}),TopicOption({title:$._("Projects"),handleClick:this.switchToLibrary("discoveries-projects")})))},renderHumanitiesTab:function(){return React.DOM.div({id:"full-selector-tab-inner-humanities",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"History")),React.DOM.p(null,$_(null,"The history of the world (eventually)!")),TopicOption({title:$._("Learn history »"),handleClick:this.switchToLibrary("history")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Art history")),React.DOM.p(null,$_(null,"Spontaneous conversations about works of art where the"+" "+"speakers are not afraid to disagree with each other or art"+" "+"history orthodoxy.")),TopicOption({title:$._("Learn art history »"),handleClick:this.switchToLibrary("art-history")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"American civics")),React.DOM.p(null,$_(null,"Videos about how government works in the United"+" "+"States.")),TopicOption({title:$._("Learn civics »"),handleClick:this.switchToLibrary("american-civics")})))},renderEconomicsTab:function(){return React.DOM.div({id:"full-selector-tab-inner-economics",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Economics")),React.DOM.p(null,$_(null,"Topics covered in traditional college level introductory"+" "+"courses.")),TopicOption({title:$._("Learn microeconomics »"),handleClick:this.switchToLibrary("microeconomics")}),TopicOption({title:$._("Learn macroeconomics »"),handleClick:this.switchToLibrary("macroeconomics")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Finance and capital markets")),React.DOM.p(null,$_(null,"Covers the modern financial system, investments, and"+" "+"banking.")),TopicOption({title:$._("Learn about finance and capital "+"markets »"),handleClick:this.switchToLibrary("core-finance")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Entrepreneurship")),React.DOM.p(null,$_(null,"Personal lessons and insights from accomplished"+" "+"entrepreneurs.")),TopicOption({title:$._("Watch interviews with "+"entrepreneurs »"),handleClick:this.switchToLibrary("interviews-entrepreneurs")})))},renderComputingTab:function(){return React.DOM.div({id:"full-selector-tab-inner-computing",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Computer programming")),React.DOM.p(null,$_(null,"Learn the fundamentals of programming on the Khan"+" "+"Academy Computer Science platform. Explore programs made by"+" "+"others. Write your own programs and share them!")),TopicOption({title:$._("Start programming »"),handleClick:this.switchToLibrary("cs")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Computer science")),React.DOM.p(null,$_(null,"Learn about concepts from computer science, starting"+" "+"with cryptography and information theory.")),TopicOption({title:$._("Learn computer science »"),handleClick:this.switchToLibrary("computer-science")})))},renderOtherTab:function(){return React.DOM.div({id:"full-selector-tab-inner-other",className:"full-selector-tab-inner"},React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Partner content")),TopicOption({title:$._("MIT+K12"),handleClick:this.switchToLibrary("mit-k12")}),TopicOption({title:$._("The J. Paul Getty Museum"),handleClick:this.switchToLibrary("getty-museum")}),TopicOption({title:$._("The Museum of Modern Art"),handleClick:this.switchToLibrary("MoMA")}),TopicOption({title:$._("Stanford School of Medicine"),handleClick:this.switchToLibrary("stanford-medicine")}),TopicOption({title:$._("California Academy of Sciences"),handleClick:this.switchToLibrary("CAS-biodiversity")}),TopicOption({title:$._("Crash Course"),handleClick:this.switchToLibrary("crash-course1")}),TopicOption({title:$._("LeBron asks"),handleClick:this.switchToLibrary("lebron-asks-subject")}),TopicOption({title:$._("Exploratorium"),handleClick:this.switchToLibrary("Exploratorium")}),TopicOption({title:$._("The Brookings Institution"),handleClick:this.switchToLibrary("brookings-institution")}),TopicOption({title:$._("Asian Art Museum"),handleClick:this.switchToLibrary("asian-art-museum")})),React.DOM.div({className:"full-selector-tab-column"},React.DOM.h2({className:"full-selector-tab-category"},$_(null,"Test prep")),TopicOption({title:$._("SAT"),handleClick:this.switchToLibrary("sat")}),TopicOption({title:$._("GMAT"),handleClick:this.switchToLibrary("gmat")}),TopicOption({title:$._("CAHSEE"),handleClick:this.switchToLibrary("cahsee-subject")}),TopicOption({title:$._("IIT JEE"),handleClick:this.switchToLibrary("iit-jee-subject")}),TopicOption({title:$._("AP Art history"),handleClick:this.switchToLibrary("ap-art-history")}),TopicOption({title:$._("MCAT"),handleClick:this.switchToLibrary("mcat")}),React.DOM.h2({className:"full-selector-tab-category"},$_(null,"More math")),TopicOption({title:$._("Recreational math"),handleClick:this.switchToLibrary("recreational-math")}),TopicOption({title:$._("Math contests"),handleClick:this.switchToLibrary("competition-math")})))},render:function(){var t={math:$._("Math"),science:$._("Science"),humanities:$._("Humanities"),economics:$._("Economics and Finance"),computing:$._("Computing"),other:$._("Other")}
var i=_.map(t,function(t,i){return FullTopicSelectorTab({key:i,tabName:i,tabTitle:t,active:this.state.activeTab===i,switchTab:this.switchTabFn(i)})}.bind(this))
var e=this.state.loading?"loading":this.state.activeTab
var a
switch(e){case"math":a=this.renderMathTab()
break
case"science":a=this.renderScienceTab()
break
case"humanities":a=this.renderHumanitiesTab()
break
case"economics":a=this.renderEconomicsTab()
break
case"computing":a=this.renderComputingTab()
break
case"other":a=this.renderOtherTab()
break
case"loading":a=React.DOM.div({className:"full-selector-tab-inner",style:{"padding-top":170,"padding-left":0}},ThrobberGrid(null))}return React.DOM.div({id:"full-selector-splash"},React.DOM.h1({id:"full-selector-splash-title"},$_(null,"What do you want to learn?")),React.DOM.div({id:"full-selector-tabs-wrapper"},React.DOM.div({id:"full-selector-tags-list"},i),a))}})
module.exports=DashboardTopicSelectorView
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/intro-package/profile-intro.js");
KAdefine.require("./javascript/intro-package/cs-intro.js");
KAdefine.require("./javascript/intro-package/dashboard-intro.js");
KAdefine.require("./javascript/intro-package/dashboard-topic-selector.js");
KAdefine.require("./javascript/intro-package/dashboard-topic-selector-view.jsx");
