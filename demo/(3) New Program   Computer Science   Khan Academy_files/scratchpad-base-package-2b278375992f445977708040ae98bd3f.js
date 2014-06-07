KAdefine("javascript/scratchpad-base-package/scratchpad-list.handlebars", function(require, requireWithVars, module, exports) {
(function(){var a=Handlebars.template,s=Handlebars.templates=Handlebars.templates||{}
s["scratchpad-base-package_scratchpad-list"]=module.exports=a(function(a,s,e,t,l){e=e||a.helpers
var h="",n,i,c,r,p=this,o="function",d=e.helperMissing,f=void 0,m=this.escapeExpression
function u(a,s){var t="",l
t+='\n    <li>\n        <a href="'
c=e.showPath
l=c||a.showPath
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===f){l=d.call(a,"showPath",{hash:{}})}t+=m(l)+'">\n            <div class="scratchpad-thumbnail">\n                <img src="'
c=e.imagePath
l=c||a.imagePath
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===f){l=d.call(a,"imagePath",{hash:{}})}t+=m(l)+'">\n            </div>\n            <h4>\n                '
c=e.translatedTitle
l=c||a.translatedTitle
if(typeof l===o){l=l.call(a,{hash:{}})}else if(l===f){l=d.call(a,"translatedTitle",{hash:{}})}t+=m(l)+"\n            </h4>\n        </a>\n    </li>\n    "
return t}h+='<ul class="scratchpad-list">\n    '
c=e.scratchpads
n=c||s.scratchpads
i=e.each
r=p.program(1,u,l)
r.hash={}
r.fn=r
r.inverse=p.noop
n=i.call(s,n,r)
if(n||n===0){h+=n}h+="\n</ul>\n"
return h})})()
});
KAdefine("javascript/scratchpad-base-package/docs.handlebars", function(require, requireWithVars, module, exports) {
(function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{}
e["scratchpad-base-package_docs"]=module.exports=n(function(n,e,a,o,r){a=a||n.helpers
var l="",t,i,s,c,f=this,p="function",h=a.blockHelperMissing
function u(n,e){var o="",r
o+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/cs" class="subject-link" data-id="cs"><i class="icon-caret-left"></i>'
s=a["_"]
r=s||n["_"]
c=f.program(2,d,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){o+=r}o+='</a></div>\n                            <div class="topic-title">'
s=a["_"]
r=s||n["_"]
c=f.program(4,g,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){o+=r}o+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
s=a["_"]
r=s||n["_"]
c=f.program(6,m,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){o+=r}o+="\n                            "
s=a["_"]
r=s||n["_"]
c=f.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){o+=r}o+="\n                            "
s=a["_"]
r=s||n["_"]
c=f.program(10,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=h.call(n,r,c)}if(r||r===0){o+=r}o+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return o}function d(n,e){return"Computer programming"}function g(n,e){return"Documentation"}function m(n,e){return'All of the code here is written using the <a href="https://developer.mozilla.org/en-US/docs/JavaScript" target="_blank">JavaScript</a> language and the <a href="http://processingjs.org" target="_blank">Processing.js</a> library (with <a href="http://khanacademy.desk.com/customer/portal/articles/1400721-what-parts-of-processingjs-does-khan-academy-support-" target="_blank">some modifications</a>).'}function v(n,e){return"You can click the links below to learn more about\n                            what you can do in your programs."}function _(n,e){return'You can also <a href="/cs/programming/good-practices/v/the-power-of-the-docs" target="_blank">watch our guide</a> on how to use these docs.'}function y(n,e){return"Quick Jump:"}function b(n,e){return"Shapes"}function k(n,e){return"Complex Shapes"}function T(n,e){return"Colors"}function D(n,e){return"Text"}function N(n,e){return"Transforms"}function x(n,e){return"Mouse"}function w(n,e){return"Keyboard"}function S(n,e){return"Math"}function C(n,e){return"Trig"}function z(n,e){return"Date/Time"}function M(n,e){return"Debugging"}function P(n,e){return"JavaScript"}function j(n,e){return"ProcessingJS"}function q(n,e){return"Shapes"}function J(n,e){return"rect(x, y, w, h)"}function R(n,e){return"ellipse(x, y, w, h)"}function A(n,e){return"triangle(x1, y1, x2, y2, x3, y3)"}function W(n,e){return"line(x1, y1, x2, y2)"}function O(n,e){return"point(x, y)"}function Y(n,e){return"arc(x, y, w, h, start, stop)"}function G(n,e){return"bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)"}function H(n,e){return"quad(x1, y1, x2, y2, x3, y3, x4, y4)"}function L(n,e){return"image(image, x, y, width*, height*)"}function B(n,e){return"See also:"}function F(n,e){return"ellipseMode"}function V(n,e){return"rectMode"}function E(n,e){return"imageMode"}function I(n,e){return"strokeCap"}function K(n,e){return"bezierPoint"}function U(n,e){return"bezierTangent"}function X(n,e){return"curve"}function Q(n,e){return"curvePoint"}function Z(n,e){return"curveTangent"}function $(n,e){return"curveTightness"}function ne(n,e){return"Complex Shapes"}function ee(n,e){return"beginShape()"}function ae(n,e){return"endShape()"}function oe(n,e){return"vertex()"}function re(n,e){return"curveVertex()"}function le(n,e){return"bezierVertex()"}function te(n,e){return"See also:"}function ie(n,e){return"strokeJoin"}function se(n,e){return"curveTightness"}function ce(n,e){return"Colors"}function fe(n,e){return"background(r, g, b)"}function pe(n,e){return"Set the background color"}function he(n,e){return"fill(r, g, b)"}function ue(n,e){return"Set the fill color for shapes"}function de(n,e){return"noFill()"}function ge(n,e){return"Turn off fill for shapes"}function me(n,e){return"stroke(r, g, b)"}function ve(n,e){return"Set the outline color for shapes"}function _e(n,e){return"strokeWeight(thickness)"}function ye(n,e){return"Change the thickness of lines and outlines"}function be(n,e){return"noStroke()"}function ke(n,e){return"Turn off outlines for shapes"}function Te(n,e){return"color(r, g, b)"}function De(n,e){return"Store a color in a variable"}function Ne(n,e){return"blendColor(c1, c2, MODE)"}function xe(n,e){return"Blend two colors together"}function we(n,e){return"lerpColor(c1, c2, amount)"}function Se(n,e){return"Find color between 2 colors"}function Ce(n,e){return"See also:"}function ze(n,e){return"colorMode"}function Me(n,e){return"red"}function Pe(n,e){return"green"}function je(n,e){return"blue"}function qe(n,e){return"alpha"}function Je(n,e){return"hue"}function Re(n,e){return"saturation"}function Ae(n,e){return"brightness"}function We(n,e){return"Text"}function Oe(n,e){return"text(text, x, y)"}function Ye(n,e){return"Draw some text"}function Ge(n,e){return"textFont(font, size*)"}function He(n,e){return"Changes the font of text"}function Le(n,e){return"textSize(size)"}function Be(n,e){return"Change the size of text"}function Fe(n,e){return"See also:"}function Ve(n,e){return"textWidth"}function Ee(n,e){return"textAscent"}function Ie(n,e){return"textDescent"}function Ke(n,e){return"textLeading"}function Ue(n,e){return"textAlign"}function Xe(n,e){return"Transforms"}function Qe(n,e){return"rotate(angle)"}function Ze(n,e){return"Rotate shapes by an angle"}function $e(n,e){return"scale(amount)"}function na(n,e){return"Scale shapes in both dimensions"}function ea(n,e){return"translate(x, y)"}function aa(n,e){return"Translate shapes by an offset"}function oa(n,e){return"See also:"}function ra(n,e){return"pushMatrix()"}function la(n,e){return"popMatrix()"}function ta(n,e){return"resetMatrix()"}function ia(n,e){return"printMatrix()"}function sa(n,e){return"Environment"}function ca(n,e){return"width"}function fa(n,e){return"height"}function pa(n,e){return"The size of the canvas"}function ha(n,e){return"frameRate(fps)"}function ua(n,e){return"Change the frame rate of draw."}function da(n,e){return"loop()"}function ga(n,e){return"noLoop()"}function ma(n,e){return"Cause the program to stop/start drawing."}function va(n,e){return"See also:"}function _a(n,e){return"frameCount"}function ya(n,e){return"Mouse"}function ba(n,e){return"mouseX, mouseY"}function ka(n,e){return"Current coordinates of the mouse"}function Ta(n,e){return"pmouseX, pmouseY"}function Da(n,e){return"Past coordinates of the mouse"}function Na(n,e){return"mouseButton"}function xa(n,e){return"Which button is pressed"}function wa(n,e){return"mouseIsPressed"}function Sa(n,e){return"Whether mouse is being pressed"}function Ca(n,e){return"var mouseClicked = function() { };"}function za(n,e){return"Called when mouse is clicked"}function Ma(n,e){return"var mousePressed = function() { };"}function Pa(n,e){return"Called when mouse is pressed"}function ja(n,e){return"var mouseReleased = function() { };"}function qa(n,e){return"Called when mouse is released"}function Ja(n,e){return"var mouseMoved = function() { };"}function Ra(n,e){return"Called when mouse is moved"}function Aa(n,e){return"var mouseDragged = function() { };"}function Wa(n,e){return"Called when mouse is released"}function Oa(n,e){return"var mouseOver = function() { };"}function Ya(n,e){return"Called when mouse moves over canvas"}function Ga(n,e){return"var mouseOut = function() { };"}function Ha(n,e){return"Called when mouse moves out of canvas"}function La(n,e){return"Keyboard"}function Ba(n,e){return"key"}function Fa(n,e){return"Number representing which key is pressed"}function Va(n,e){return"keyCode"}function Ea(n,e){return"Number representing which key is pressed"}function Ia(n,e){return"keyIsPressed"}function Ka(n,e){return"True if a key is being pressed, false otherwise"}function Ua(n,e){return"var keyPressed = function() { };"}function Xa(n,e){return"Called when a key is pressed"}function Qa(n,e){return"var keyReleased = function() { };"}function Za(n,e){return"Called when a key is released"}function $a(n,e){return"var keyTyped = function() { };"}function no(n,e){return"Called when a key is typed"}function eo(n,e){return"Math"}function ao(n,e){return"random(low, high)"}function oo(n,e){return"Generate a random number"}function ro(n,e){return"dist(x1, y1, x2, y2)"}function lo(n,e){return"Calculates the distance between two points"}function to(n,e){return"constrain(value, min, max)"}function io(n,e){return"Constrain value between min and max"}function so(n,e){return"min(num1, num2)"}function co(n,e){return"Return the minimum of two numbers"}function fo(n,e){return"max(num1, num2)"}function po(n,e){return"Return the maximum of two numbers"}function ho(n,e){return"abs(num)"}function uo(n,e){return"Take the absolute value of a number"}function go(n,e){return"log(num)"}function mo(n,e){return"Take the logarithm of a number"}function vo(n,e){return"pow(num, exponent)"}function _o(n,e){return"Raise a number to an exponent"}function yo(n,e){return"sq(num)"}function bo(n,e){return"Square a number"}function ko(n,e){return"sqrt(num)"}function To(n,e){return"Take the square root of a number"}function Do(n,e){return"round(num)"}function No(n,e){return"Return nearest whole number"}function xo(n,e){return"ceil(num)"}function wo(n,e){return"Return nearest whole number of greater/equal value"}function So(n,e){return"floor(num)"}function Co(n,e){return"Return nearest whole number of lesser/equal value"}function zo(n,e){return"PVector(x, y)"}function Mo(n,e){return"An object that describes a 2-dimensional vector"}function Po(n,e){return"See also:"}function jo(n,e){return"mag"}function qo(n,e){return"exp"}function Jo(n,e){return"map"}function Ro(n,e){return"norm"}function Ao(n,e){return"lerp"}function Wo(n,e){return"noise"}function Oo(n,e){return"noiseDetail"}function Yo(n,e){return"Random.nextGaussian"}function Go(n,e){return"Trigonometry"}function Ho(n,e){return"cos(degrees)"}function Lo(n,e){return"Take the cosine of an angle"}function Bo(n,e){return"sin(degrees)"}function Fo(n,e){return"Take the sine of an angle"}function Vo(n,e){return"tan(degrees)"}function Eo(n,e){return"Take the tangent of an angle"}function Io(n,e){return"See also:"}function Ko(n,e){return"acos"}function Uo(n,e){return"asin"}function Xo(n,e){return"atan"}function Qo(n,e){return"radians"}function Zo(n,e){return"degrees"}function $o(n,e){return"angleMode"}function nr(n,e){return"Date & Time"}function er(n,e){return"day()"}function ar(n,e){return"month()"}function or(n,e){return"year()"}function rr(n,e){return"Current date"}function lr(n,e){return"hour()"}function tr(n,e){return"minute()"}function ir(n,e){return"second()"}function sr(n,e){return"Current time"}function cr(n,e){return"millis()"}function fr(n,e){return"Milliseconds ellapsed since program start"}function pr(n,e){return"Debugging"}function hr(n,e){return"debug(arg1, arg2, ...)"}function ur(n,e){return"Print to your browser's developer console"}function dr(n,e){return"println(data)"}function gr(n,e){return"Print to the canvas console"}function mr(n,e){return"print(data)"}function vr(n,e){return"Print to the canvas console"}function _r(n,e){return"JavaScript"}function yr(n,e){return"var drawWinston = function() { };"}function br(n,e){return"Define a new function"}function kr(n,e){return"if (x &lt; 20) { ... }"}function Tr(n,e){return"Only run code if a certain condition is true"}function Dr(n,e){return"while (x &lt; 250) { ... }"}function Nr(n,e){return"Only run code while a certain condition is true"}function xr(n,e){return"for (var i = 0; i &lt; 8; i += 1) { }"}function wr(n,e){return"Repeat code a fixed number of times"}function Sr(n,e){return"var array = [0, 1, 2, 3, 4];"}function Cr(n,e){return"Make an array of 5 numbers"}function zr(n,e){return"Our documentation does not cover the many ways\n                    to use JavaScript. Learn more at:"}function Mr(n,e){return"Mozilla Developer Network: JavaScript Guide"}function Pr(n,e){return"W3Schools JavaScript Tutorial"}function jr(n,e){return"Codecademy JS Lessons"}function qr(n,e){return'This reference is based on <a href="http://processingjs.org/reference/" target="_blank">ProcessingJS reference</a> and is licensed under the <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">CC BY-NC-SA 2.0 license.'}l+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
s=a.standAlone
t=s||e.standAlone
i=a["if"]
c=f.program(1,u,r)
c.hash={}
c.fn=c
c.inverse=f.noop
t=i.call(e,t,c)
if(t||t===0){l+=t}l+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n\n                <p>\n                    '
s=a["_"]
t=s||e["_"]
c=f.program(12,y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="#cs-documentation-shapes">'
s=a["_"]
t=s||e["_"]
c=f.program(14,b,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-complexshapes">'
s=a["_"]
t=s||e["_"]
c=f.program(16,k,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-colors">'
s=a["_"]
t=s||e["_"]
c=f.program(18,T,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-text">'
s=a["_"]
t=s||e["_"]
c=f.program(20,D,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-transforms">'
s=a["_"]
t=s||e["_"]
c=f.program(22,N,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-mouse">'
s=a["_"]
t=s||e["_"]
c=f.program(24,x,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-keyboard">'
s=a["_"]
t=s||e["_"]
c=f.program(26,w,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-math">'
s=a["_"]
t=s||e["_"]
c=f.program(28,S,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-trig">'
s=a["_"]
t=s||e["_"]
c=f.program(30,C,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-datetime">'
s=a["_"]
t=s||e["_"]
c=f.program(32,z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-debugging">'
s=a["_"]
t=s||e["_"]
c=f.program(34,M,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>,\n                    <a href="#cs-documentation-js">'
s=a["_"]
t=s||e["_"]
c=f.program(36,P,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>\n                </p>\n\n                <h3 class="cs-documentation-bigheader">'
s=a["_"]
t=s||e["_"]
c=f.program(38,j,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h3>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
s=a["_"]
t=s||e["_"]
c=f.program(40,q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/rectx-y-w-h/839496660" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-rect"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(42,J,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/ellipsex-y-w-h/839435680" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-ellipse"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(44,R,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/trianglex1-y1-x2-y2-x3-y3/839546599" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-triangle"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(46,A,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/linex1-y1-x2-y2/827916099" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-line"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(48,W,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/pointx-y/827809834" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-point"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(50,O,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/arcx-y-w-h-start-stop/1903619297" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-arc"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(52,Y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/bezierx1-y1-cx1-cy1-cx2-cy2-x2-y2/956920482" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-bezier"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(54,G,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/quadx1-y1-x2-y2-x3-y3-x4-y4/1907244018" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-quad"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(56,H,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    <li>\n                        <a href="/cs/imageimage-x-y/937672662" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-image"></div>\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(58,L,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                    </div>\n                </ul>\n                <p>"
s=a["_"]
t=s||e["_"]
c=f.program(60,B,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/ellipsemodemode/6709863212122112" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(62,F,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/rectmodemode/4556457341091840" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(64,V,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/imagemodemode/5295050787389440" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(66,E,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/strokecapmode/5288182060941312" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(68,I,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/bezierpointa-b-c-d-t/4551007698681856"  target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(70,K,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/beziertangenta-b-c-d-t/4736929853603840\n" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(72,U,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/curve/5105742184972288" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(74,X,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/curvepointa-b-c-d-t/5879387094253568" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(76,Q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/curvetangenta-b-c-d-t/4708940860358656" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(78,Z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(80,$,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-complexshapes">'
s=a["_"]
t=s||e["_"]
c=f.program(82,ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/beginshapeendshape/5462945756610560" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beginshape"></div>\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(84,ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>/\n                            <code>"
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(86,ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>/\n                            <code>"
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(88,oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/curvevertexx-y/6499542019080192" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-curvevertex"></div>\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(90,re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/beziervertexcx1-cy1-cx2-cy2-x-y/5085481683386368" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beziervertex"></div>\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(92,le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                    </div>\n                </ul>\n\n                <p>"
s=a["_"]
t=s||e["_"]
c=f.program(94,te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/strokejoinmode/5662070842327040" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(96,ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(98,se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-colors">'
s=a["_"]
t=s||e["_"]
c=f.program(100,ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/backgroundr-g-b/839653892" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(102,fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(104,pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/fillr-g-b/839774957" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(106,he,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(108,ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/nofill/877946290" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(110,de,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(112,ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/stroker-g-b/839545910" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(114,me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(116,ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/strokeweightthickness/877859744" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(118,_e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(120,ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/nostroke/839859412" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(122,be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(124,ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/colorr-g-b/957020020" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(126,Te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(128,De,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/blendcolorc1-c2-mode/4530750216994816" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(130,Ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(132,xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/lerpcolorc1-c2-amount/4759935778816000" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(134,we,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(136,Se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=a["_"]
t=s||e["_"]
c=f.program(138,Ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/colormode/5833774306689024" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(140,ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/redcolor/5102159326609408" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(142,Me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/greencolor/5877638103040000" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(144,Pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/bluecolor/5177743654256640" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(146,je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/alphacolor/6687311345483776" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(148,qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/huecolor/6620387366404096" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(150,Je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/saturationcolor/6358678768713728" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(152,Re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/brightnesscolor/5888575639912448" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(154,Ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-text">'
s=a["_"]
t=s||e["_"]
c=f.program(156,We,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/texttext-x-y/937624625" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(158,Oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(160,Ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/textfontfont-size/940030209" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(162,Ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(164,He,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/textsizesize/937728198" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(166,Le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(168,Be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=a["_"]
t=s||e["_"]
c=f.program(170,Fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/textwidthstr/4799257177489408" target="_blank">\n                    <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(172,Ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/textascent/5975406490419200" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(174,Ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/textdescent/5638769772331008" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(176,Ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/textleadingdist/6369013500215296" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(178,Ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/textalignalign-yalign/4508437190803456" target="_blank">\n                    <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(180,Ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                    </a>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-transforms">'
s=a["_"]
t=s||e["_"]
c=f.program(182,Xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/rotateangle/6386091934351360" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(184,Qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(186,Ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/scalex-y/6712922034143232" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(188,$e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(190,na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/translatex-y/6505693083336704" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(192,ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(194,aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </div>\n                </ul>\n                <p>"
s=a["_"]
t=s||e["_"]
c=f.program(196,oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/pushmatrixpopmatrix/5505194477486080" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(198,ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>/<code>"
s=a["_"]
t=s||e["_"]
c=f.program(200,la,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                    </a>,\n                    <a href="/cs/resetmatrix/4597705468805120" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(202,ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                    </a>,\n                    <a href="/cs/printmatrix/5934612152844288" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(204,ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                    </a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4>'
s=a["_"]
t=s||e["_"]
c=f.program(206,sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/width/5933816543707136" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(208,ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a> /\n                        <a href="/cs/height/4544657253990400" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(210,fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(212,pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/frameratefps/6427359154536448" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(214,ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(216,ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/loop/5519218351013888" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(218,da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a> /\n                        <a href="/cs/noloop/6342789906300928" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(220,ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(222,ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=a["_"]
t=s||e["_"]
c=f.program(224,va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/framecount/5893935759097856" target="_blank"><code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(226,_a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-mouse">'
s=a["_"]
t=s||e["_"]
c=f.program(228,ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/mousex-mousey/5538427537719296" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(230,ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(232,ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/pmousex-pmousey/5082026180870144\n" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(234,Ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(236,Da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/mousebutton/6304348237725696\n" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(238,Na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(240,xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    \n                    <li>\n                        <a href="/cs/mouseispressed/939933053" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(242,wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(244,Sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/var-mouseclicked-function/1897113673" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(246,Ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(248,za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                                        <li>\n                        <a href="/cs/var-mousepressed-function/1907626123" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(250,Ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(252,Pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-mousereleased-function/1907670118" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(254,ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(256,qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    \n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/var-mousemoved-function/5689134450475008" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(258,Ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(260,Ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-mousedragged-function/6273229589053440" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(262,Aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(264,Wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-mouseover-function/4681234999410688" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(266,Oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(268,Ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-mouseout-function/6643226391871488" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(270,Ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(272,Ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                </ul>\n                </div>\n                \n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-keyboard">'
s=a["_"]
t=s||e["_"]
c=f.program(274,La,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/key/5790940799172608" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(276,Ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(278,Fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/keycode/939888407" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(280,Va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(282,Ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/keyispressed/939855509" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(284,Ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(286,Ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/var-keypressed-function/6270179101114368" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(288,Ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(290,Xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-keyreleased-function/6349252120805376" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(292,Qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(294,Za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/var-keytyped-function/5762464763346944" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(296,$a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(298,no,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    \n                </ul>\n                </div>\n                \n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-math">'
s=a["_"]
t=s||e["_"]
c=f.program(300,eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/randomlow-high/827911487" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(302,ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(304,oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/distx1-y1-x2-y2/1917352082" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(306,ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(308,lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/constrainvalue-min-max/5870136103796736" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(310,to,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>"
s=a["_"]
t=s||e["_"]
c=f.program(312,io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/minnum1-num2/4693347713155072" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(314,so,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(316,co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/maxnum1-num2/4755409722146816" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(318,fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(320,po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </div>\n                    \n                    <div class="span4">\n                    <li>\n                        <a href="/cs/absnum/877930637" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(322,ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(324,uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/lognum/877921884" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(326,go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(328,mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    \n                    <li>\n                        <a href="/cs/pownum-exponent/877858853" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(330,vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(332,_o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/sqnum/6588187426160640" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(334,yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(336,bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/sqrtnum/6473360267542528" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(338,ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(340,To,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/roundnum/5907281296228352" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(342,Do,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(344,No,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <li>\n                        <a href="/cs/ceil/5491781646942208" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(346,xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(348,wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    \n                    <li>\n                        <a href="/cs/floornum/5703004061696000" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(350,So,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(352,Co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    <li>\n                        <a href="/cs/pvectorx-y/5218818305556480" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(354,zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(356,Mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </li>\n                    </div>\n                \n                <p>\n                    "
s=a["_"]
t=s||e["_"]
c=f.program(358,Po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/magx1-y1-not-working-yet/5983219002376192" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(360,jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/expvalue/5228990398726144" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(362,qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/mapvalue-low1-high1-low2-high2/4587974079545344" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(364,Jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/normvalue-low-high/6581050767572992" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(366,Ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/lerpvalue1-value2-amount/6456916012171264" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(368,Ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/noise/5618485581316096" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(370,Wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/noisedetailoctaves-falloff/6549875814563840" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(372,Oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/randomseed/5697038959247360" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(374,Yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-trig">'
s=a["_"]
t=s||e["_"]
c=f.program(376,Go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/cosdeg/948226821" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(378,Ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(380,Lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/sindeg/948255306" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(382,Bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(384,Fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/tandeg/948018680" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(386,Vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(388,Eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=a["_"]
t=s||e["_"]
c=f.program(390,Io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    <a href="/cs/acosval/4542953527705600" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(392,Ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/asinval/5061655520083968" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(394,Uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/atanval/4869834059808768" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(396,Xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/radiansangle/6628151023108096" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(398,Qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/degreesangle/6674991668002816" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(400,Zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>,\n                    <a href="/cs/anglemode-degrees-vs-radians/2350518561" target="_blank">\n                        <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(402,$o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-datetime">'
s=a["_"]
t=s||e["_"]
c=f.program(404,nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/day/4526347808407552" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(406,er,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>/\n                        <a href="/cs/month/5388987023753216" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(408,ar,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>/\n                        <a href="/cs/year/6216887939629056" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(410,or,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(412,rr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/hour/5806957302644736" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(414,lr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>/\n                        <a href="/cs/minute/6638408210317312" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(416,tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</code>\n                        </a>/\n                        <a href="/cs/second/5743886110556160" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(418,ir,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(420,sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/millis/5970545493409792" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(422,cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(424,fr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n            </div>\n\n\n            <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-debugging">'
s=a["_"]
t=s||e["_"]
c=f.program(426,pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/debugarg1-arg2/939146973" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(428,hr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(430,ur,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/printlndata/6120466259378176" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(432,dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(434,gr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/printdata/5110798099677184" target="_blank">\n                            <code>'
s=a["_"]
t=s||e["_"]
c=f.program(436,mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(438,vr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n\n                </ul>\n            </div>\n\n            <div class="cs-documentation-section">\n\n                <h3 id="cs-documentation-js" class="cs-documentation-bigheader">'
s=a["_"]
t=s||e["_"]
c=f.program(440,_r,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</h3>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/var-drawwinston-function/877982168" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(442,yr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(444,br,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n\n                    <li>\n                        <a href="/cs/if-x-20/957023758" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(446,kr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(448,Tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/while-x-250/1907383465" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(450,Dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(452,Nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n\n                    <li>\n                        <a href="/cs/for-var-i-0-i-8-i-1/877960284" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(454,xr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(456,wr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/cs/var-array-0-1-2-3-4/957074792" target="_blank">\n                            <code>'
s=a.i18nDoNotTranslate
t=s||e.i18nDoNotTranslate
c=f.program(458,Sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</code>\n                        </a>\n                        <br>\n                        "
s=a["_"]
t=s||e["_"]
c=f.program(460,Cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="\n                    </li>\n                    </div>\n                </ul>\n                </div>\n\n                <div>\n                    <p>"
s=a["_"]
t=s||e["_"]
c=f.program(462,zr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</p>\n                    <ul class="styled-list">\n                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">'
s=a["_"]
t=s||e["_"]
c=f.program(464,Mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>\n                        <li><a href="http://www.w3schools.com/js/" target="_blank">'
s=a["_"]
t=s||e["_"]
c=f.program(466,Pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+='</a>\n                        <li><a href="http://www.codecademy.com/tracks/javascript" target="_blank">'
s=a["_"]
t=s||e["_"]
c=f.program(468,jr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</a>\n                    </ul>\n                    <br>\n                </div>\n\n                <p>"
s=a["_"]
t=s||e["_"]
c=f.program(470,qr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof t===p){t=t.call(e,c)}else{t=h.call(e,t,c)}if(t||t===0){l+=t}l+="</p>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return l})})()
});
KAdefine("javascript/scratchpad-base-package/scratchpad-guidelines.handlebars", function(require, requireWithVars, module, exports) {
(function(){var e=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{}
n["scratchpad-base-package_scratchpad-guidelines"]=module.exports=e(function(e,n,o,i,r){o=o||e.helpers
var a="",s,t,l,c,p=this,u="function",d=o.blockHelperMissing
function m(e,n){var i="",r
i+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/cs" class="subject-link" data-id="cs"><i class="icon-caret-left"></i>'
l=o["_"]
r=l||e["_"]
c=p.program(2,g,n)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof r===u){r=r.call(e,c)}else{r=d.call(e,r,c)}if(r||r===0){i+=r}i+='</a></div>\n                            <div class="topic-title">'
l=o["_"]
r=l||e["_"]
c=p.program(4,h,n)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof r===u){r=r.call(e,c)}else{r=d.call(e,r,c)}if(r||r===0){i+=r}i+='</div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return i}function g(e,n){return"Computer programming"}function h(e,n){return"Program Guidelines"}function f(e,n){var i="",r,a
i+='\n                <p>The goal of the Khan Academy Computer Programming area is to introduce people to programming and enable them to learn from and inspire each other to improve their computer programming skills.</p>\n\n                <p>We love when people create programs that support our education goals -- like drawings and stories, games, scientific visualizations, and discussion groups for computer programming (e.g. game development clubs).</p>\n\n                <p>However, there are some types of programs that we do not want to see:</p>\n\n                <br>\n                <h3>Abuse</h3>\n                <p>We consider it abuse if programs include:</p>\n                <ul class="styled-list">\n                    <li>Discriminating against other users (race, religion, sexual orientation, etc.)</li>\n                    <li>Swearing/insulting language</li>\n                    <li>Rude or argumentative behavior</li>\n                    <li>Advertisements for companies/off-site services</li>\n                </ul>\n                <p>Abusive programs will be removed from the site, and creators may be banned from making future programs.</li>\n\n                <br><br>\n\n                <h3>Plagiarism</h3>\n\n                <p>We encourage people to create spin-offs of each others’ programs, via the "Save as spin-off" button. Creating a spin-off gives credit to the original creator and connects the new program to the original. Any user can create a spin-off of any program.</p>\n\n                <p>We consider it plagiarism if:</p>\n                <ul class="styled-list">\n                    <li>A user pastes someone else\'s program into a new program, instead of creating a spin-off.</li>\n                    <li>A user pastes code from multiple programs without giving credit/links to those programs in comments at the top of the program.</li>\n                </ul>\n\n                <p>Programs that are suspected of plagiarism will be hidden from the "Hot" list.</p>\n\n                <br><br>\n\n                <h3>Soliciting votes and voting rings</h3>\n\n                <p>Votes are a primary driver in which programs appear on our “Hot” list. Because of this, many people want others to vote for their programs.</p>\n\n                <p>Creating “spam” discussion posts to advertise your computer program is not allowed. Making posts about your program is only acceptable when your program answers another user’s question, or your post is on a discussion club thread specifically about programming (e.g. sharing your game on a game development club thread).</p>\n\n                <p>Programs will be flagged for:</p>\n                <ul class="styled-list">\n                    <li>Soliciting votes (“Vote up my program!”)</li>\n                    <li>Making unwanted posts advertising your program (both the post and the program will be flagged)</li>\n                    <li>Receiving votes from a voting ring</li>\n                </ul>\n\n                <p>A voting ring is a group of people who conspire to vote for each others’ programs, regardless of program content. People who participate in voting rings will be banned from community activity.</p>\n\n                <p>Programs that violate our voting rules will be hidden from the “Hot” list.</p>\n\n                <br><br>\n\n                <h3>Off-topic programs</h3>\n\n                <p>We want to keep programs on the site on-topic and focused on learning computer programming and other Khan Academy content.</p>\n\n                <p>Programs that are off-topic:</p>\n\n                <ul class="styled-list">\n                    <li>Petitions for changes to the site. Instead of creating petitions, requests for changes to the site should be added to our\n                    '
l=o.isChildAccount
r=l||e.isChildAccount
a=o.unless
c=p.program(7,v,n)
c.hash={}
c.fn=c
c.inverse=p.noop
r=a.call(e,r,c)
if(r||r===0){i+=r}i+="feedback forum"
l=o.isChildAccount
r=l||e.isChildAccount
a=o.unless
c=p.program(9,b,n)
c.hash={}
c.fn=c
c.inverse=p.noop
r=a.call(e,r,c)
if(r||r===0){i+=r}i+='.</li>\n                    <li>Contentious programs about subjects like politics, religion/atheism, or personal issues.</li>\n                </ul>\n\n                <p>Off-topic programs will be hidden from the “Hot” list.</p>\n\n                <br><br>\n\n                <h3>Using disallowed functionality</h3>\n\n                <p>We want to make sure that all of the programs continue working that you create on Khan Academy and that programs are not using functionality that we\'ve intentionally disabled for reasons of security, privacy, or user experience.\n                Generally, that means that programs should not be accessing <code>externals</code> or the DOM in some way. Here are specific examples:</p>\n\n                <ul class="styled-list">\n                    <li>Sound: Programs should not attempt to create sound, like by creating <code>audio</code> elements in the DOM. Sounds can be a great addition to games, but the current usage can result in a negative user experience and unstable code.\n\n                        '
l=o.isChildAccount
r=l||e.isChildAccount
a=o.unless
c=p.program(11,y,n)
c.hash={}
c.fn=c
c.inverse=p.noop
r=a.call(e,r,c)
if(r||r===0){i+=r}i+="\n                    </li>\n                    <li>LocalStorage: Programs should not attempt to get or set <code>localStorage</code>. \n                        It is impressive what you can do with it, but the way that programs are currently served, their localStorage will suffer collisions and all programs will run out of quota.\n\n                        "
l=o.isChildAccount
r=l||e.isChildAccount
a=o.unless
c=p.program(13,w,n)
c.hash={}
c.fn=c
c.inverse=p.noop
r=a.call(e,r,c)
if(r||r===0){i+=r}i+="\n                    </li>\n                    <li>Links: Programs should not open links to other web pages, on Khan Academy or otherwise. It is jarring to the user and a concern for parents. Please use <code>println()</code> with the URL instead for now.\n\n                        "
l=o.isChildAccount
r=l||e.isChildAccount
a=o.unless
c=p.program(15,k,n)
c.hash={}
c.fn=c
c.inverse=p.noop
r=a.call(e,r,c)
if(r||r===0){i+=r}i+="\n                    </li>\n                </ul>\n\n                <p>Programs that access disallowed functionality will be hidden from the “Hot” list.</p>\n\n                "
return i}function v(e,n){return'<a target="_blank" href="http://khanacademyfeedback.uservoice.com/forums/250649-computer-programming">'}function b(e,n){return"</a>"}function y(e,n){return'\n                        If you\'d like official sound support in programs, please <a href="http://khanacademyfeedback.uservoice.com/forums/250649-computer-programming/suggestions/5897790-sound">star this issue in our feedback forum</a>.\n                        '}function w(e,n){return'\n                        If you\'d like an official form of storage in programs, please <a href="http://khanacademyfeedback.uservoice.com/forums/250649-computer-programming/suggestions/5925954-provide-a-persistent-data-storage-mechanism-for-pr">star this issue in our feedback forum</a>.\n                        '}function k(e,n){return'\n                        If you\'d like an official linking mechanism in programs, please <a href="http://khanacademyfeedback.uservoice.com/forums/250649-computer-programming/suggestions/5925947-expose-a-link-function-to-linking-to-webpages">star this issue in our feedback forum</a>.\n                        '}a+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
l=o.standAlone
s=l||n.standAlone
t=o["if"]
c=p.program(1,m,r)
c.hash={}
c.fn=c
c.inverse=p.noop
s=t.call(n,s,c)
if(s||s===0){a+=s}a+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-guidelines-container">\n                '
l=o["_"]
s=l||n["_"]
c=p.program(6,f,r)
c.hash={}
c.fn=c
c.inverse=p.noop
if(l&&typeof s===u){s=s.call(n,c)}else{s=d.call(n,s,c)}if(s||s===0){a+=s}a+="\n            </div>\n\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return a})})()
});
KAdefine("javascript/scratchpad-base-package/scratchpads.js", function(require, requireWithVars, module, exports) {
window.ScratchpadRevision=Backbone.Model.extend({parse:function(t){t.created=new Date(t.created)
return t},hasAudio:function(){return!!this.get("mp3Url")},getMp3Url:function(){if(this.get("mp3Url")){return this.get("mp3Url").replace("ka-cs-scratchpad-audio.s3.amazonaws.com","kasandbox.org/s3/ka-cs-scratchpad-audio")}return null}})
window.UserScratchpad=Backbone.Model.extend({urlRoot:"/api/labs/user_scratchpads",defaults:{ms_watched:0,last_ms_watched:0,ms_duration:null,challenge_status:-1,stashed_code:""},saveAccumulative:function(){if(this.saveInProgress){return}this.saveInProgress=true
var t=this
this.save({last_ms_watched:Math.round(this.lastMS),ms_watched:this.get("ms_watched")+Math.round(this.watchedMS)},{success:e,error:e})
this.watchedMS=0
function e(){t.saveInProgress=false
if(t.watchedMS>0){t.saveAccumulative()}}},addMillisecondsWatched:function(t,e,i){if(_.isNull(this.get("ms_duration"))){if(!i||i<=0){console.error("Illegal or nonexistant scratchpad UI track"+"duration. Saving user talkie progress aborted.")
return}this.set("ms_duration",parseInt(i,10))}this.watchedMS=(this.watchedMS||0)+t
this.lastMS=e
this.saveAccumulative()},saveChallengeStatus:function(t,e){if(!_.contains(["complete","started"],t)){console.error("Invalid status: "+t)
return}this.lastStatusTime=(new Date).getTime()
var i=this.setChallengeTimeTaken()
var s=t==="complete"?1:0
i.challenge_status=s
e=e||{}
e.patch=true
this.save(i,e)},setChallengeTimeTaken:function(){var t={}
var e=(new Date).getTime()
if(this.lastTimeRecorded){var i=Math.round((e-this.lastTimeRecorded)/1e3)
t={time_taken:i}
this.set(t,{silent:true})}this.lastTimeRecorded=e
return t},saveChallengeTimeTaken:function(){if(!this.save||!this.computeChallengeTimeTaken){return}this.save(this.computeChallengeTimeTaken(),{silent:true,patch:true})}})
window.Scratchpad=Backbone.Model.extend({urlRoot:"/api/labs/scratchpads",pathForShow:function(){return"/cs/"+this.get("slug")+"/"+this.get("id")},pathForImage:function(){return"/cs/"+this.get("slug")+"/"+this.get("id")+"/"+this.currentRevision().get("id")+".png"},urlForShow:function(){return"http://"+document.location.host+this.pathForShow()},urlForImage:function(){return"http://"+document.location.host+this.pathForImage()},getVersion:function(){return this.isNew()?ScratchpadConfig.latestVersion():this.currentRevision().get("configVersion")||0},setVersion:function(t){this.currentRevision().set("configVersion",t)},getYoutubeId:function(t){return this.currentRevision().get("youtubeId")},setYoutubeId:function(t){this.currentRevision().set("youtubeId",t)},toJSONForTemplate:function(){return{id:this.get("id"),imagePath:this.pathForImage(),showPath:this.pathForShow(),title:this.get("title"),translatedTitle:this.get("translatedTitle")}},hasTag:function(t){return _.include(this.get("tags"),t)},parse:function(t,e){t.revision=new ScratchpadRevision(t.revision,{parse:true})
t.trustedRevision=new ScratchpadRevision(t.trusted_revision,{parse:true})
if(!t.tags){t.tags=[]}return t},fork:function(){var t=this.currentRevision()
var e=new Scratchpad({title:this.get("title"),revision:t.clone().unset("id").set({mp3Url:"",recording:{}}),origin_scratchpad_id:this.get("id"),origin_revision_id:t.get("id")})
return e},save:function(t,e){this.get("revision").unset("created").unset("kind").unset("scratchpadId").unset("id").unset("hasAudio")
return Scratchpad.__super__.save.call(this,t,e)},currentRevision:function(){if(ScratchpadUI.trusted&&this.get("trustedRevision").get("id")){return this.get("trustedRevision")}else{return this.get("revision")}},isTalkie:function(){return this.currentRevision()&&this.currentRevision().get("hasAudio")},isChallenge:function(){return this.get("category")==="challenge"},isProject:function(){return this.get("category")==="project"},hasObjectives:function(){return this.isChallenge()||this.isProject()},isOwner:function(){return this.get("userId")===KA.getUserID()},inTutorial:function(){return!!this.get("defaultUrlPath")},setTitle:function(t){this.set("title",t)
this.set("translatedTitle",t)}},{difficultyMapping:{1:$._("Work in Progress"),10:$._("Getting Started"),20:$._("Easy"),30:$._("Intermediate"),40:$._("Expert")}})
window.ScratchpadDocsView=Backbone.View.extend({template:Templates.get("scratchpad-base-package_docs"),render:function(){this.$el.html(this.template({standAlone:this.options.standAlone}))}})
window.ScratchpadGuidelinesView=Backbone.View.extend({template:Templates.get("scratchpad-base-package_scratchpad-guidelines"),render:function(){var t=KA.getUserProfile()
this.$el.html(this.template({standAlone:this.options.standAlone,isChildAccount:t&&t.get("isChildAccount")}))}})
$(document).on("hover",".fork",function(t){$(this).toggleClass("hover",t.type==="mouseenter")})
});
; KAdefine.updateFilenameRewriteMap({"javascript/node_modules/react-components/timeago.jsx": "../../../third_party/javascript-khansrc/react-components/js/timeago.jsx", "javascript/node_modules/react-components/i18n.jsx": "../../../third_party/javascript-khansrc/react-components/js/i18n.jsx", "javascript/node_modules/async/index.js": "../../../third_party/javascript-khansrc/async/async.js", "javascript/node_modules/react-components/tooltip.jsx": "../../../third_party/javascript-khansrc/react-components/js/tooltip.jsx", "javascript/node_modules/jquery/index.js": "../../../third_party/javascript-khansrc/jquery/jquery.js", "javascript/node_modules/react-components/blur-input.jsx": "../../../third_party/javascript-khansrc/react-components/js/blur-input.jsx", "javascript/node_modules/backbone/index.js": "../../../third_party/javascript-khansrc/backbone/backbone.js", "javascript/node_modules/underscore/index.js": "../../../third_party/javascript-khansrc/underscore/underscore.js", "javascript/node_modules/react-components/info-tip.jsx": "../../../third_party/javascript-khansrc/react-components/js/info-tip.jsx", "javascript/node_modules/react-components/tex.jsx": "../../../third_party/javascript-khansrc/react-components/js/tex.jsx", "javascript/node_modules/react-components/set-interval-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/set-interval-mixin.jsx", "javascript/node_modules/react-components/button-group.jsx": "../../../third_party/javascript-khansrc/react-components/js/button-group.jsx", "javascript/node_modules/react-components/backbone-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/backbone-mixin.jsx", "javascript/node_modules/react-components/layered-component-mixin.jsx": "../../../third_party/javascript-khansrc/react-components/js/layered-component-mixin.jsx", "javascript/node_modules/rcss/index.js": "../../../third_party/javascript-khansrc/rcss-compiled/rcss.js"});
KAdefine.require("./javascript/scratchpad-base-package/scratchpad-list.handlebars");
KAdefine.require("./javascript/scratchpad-base-package/docs.handlebars");
KAdefine.require("./javascript/scratchpad-base-package/scratchpad-guidelines.handlebars");
KAdefine.require("./javascript/scratchpad-base-package/scratchpads.js");
