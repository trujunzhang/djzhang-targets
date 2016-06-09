
/**
 * @license Rangy Inputs, a jQuery plug-in for selection and caret manipulation within textareas and text inputs.
 *
 * https://github.com/timdown/rangyinputs
 *
 * For range and selection features for contenteditable, see Rangy.

 * http://code.google.com/p/rangy/
 *
 * Depends on jQuery 1.0 or later.
 *
 * Copyright 2013, Tim Down
 * Licensed under the MIT license.
 * Version: 1.1
 * Build date: 31 March 2013
 */
(function(a){function l(a,b){var c=typeof a[b];return"function"===c||!("object"!=c||!a[b])||"unknown"==c}function m(a,c){return typeof a[c]!=b}function n(a,b){return!("object"!=typeof a[b]||!a[b])}function o(a){window.console&&window.console.log&&window.console.log("RangyInputs not supported in your browser. Reason: "+a)}function p(a,c,d){return 0>c&&(c+=a.value.length),typeof d==b&&(d=c),0>d&&(d+=a.value.length),{start:c,end:d}}function q(a,b,c){return{start:b,end:c,length:c-b,text:a.value.slice(b,c)}}function r(){return n(document,"body")?document.body:document.getElementsByTagName("body")[0]}var c,d,e,f,g,h,i,j,k,b="undefined";a(document).ready(function(){function v(a,b){return function(){var c=this.jquery?this[0]:this,d=c.nodeName.toLowerCase();if(1==c.nodeType&&("textarea"==d||"input"==d&&"text"==c.type)){var e=[c].concat(Array.prototype.slice.call(arguments)),f=a.apply(this,e);if(!b)return f}return b?this:void 0}}var s=document.createElement("textarea");if(r().appendChild(s),m(s,"selectionStart")&&m(s,"selectionEnd"))c=function(a){var b=a.selectionStart,c=a.selectionEnd;return q(a,b,c)},d=function(a,b,c){var d=p(a,b,c);a.selectionStart=d.start,a.selectionEnd=d.end},k=function(a,b){b?a.selectionEnd=a.selectionStart:a.selectionStart=a.selectionEnd};else{if(!(l(s,"createTextRange")&&n(document,"selection")&&l(document.selection,"createRange")))return r().removeChild(s),o("No means of finding text input caret position"),void 0;c=function(a){var d,e,f,g,b=0,c=0,h=document.selection.createRange();return h&&h.parentElement()==a&&(f=a.value.length,d=a.value.replace(/\r\n/g,"\n"),e=a.createTextRange(),e.moveToBookmark(h.getBookmark()),g=a.createTextRange(),g.collapse(!1),e.compareEndPoints("StartToEnd",g)>-1?b=c=f:(b=-e.moveStart("character",-f),b+=d.slice(0,b).split("\n").length-1,e.compareEndPoints("EndToEnd",g)>-1?c=f:(c=-e.moveEnd("character",-f),c+=d.slice(0,c).split("\n").length-1))),q(a,b,c)};var t=function(a,b){return b-(a.value.slice(0,b).split("\r\n").length-1)};d=function(a,b,c){var d=p(a,b,c),e=a.createTextRange(),f=t(a,d.start);e.collapse(!0),d.start==d.end?e.move("character",f):(e.moveEnd("character",t(a,d.end)),e.moveStart("character",f)),e.select()},k=function(a,b){var c=document.selection.createRange();c.collapse(b),c.select()}}r().removeChild(s),f=function(a,b,c,e){var f;b!=c&&(f=a.value,a.value=f.slice(0,b)+f.slice(c)),e&&d(a,b,b)},e=function(a){var b=c(a);f(a,b.start,b.end,!0)},j=function(a){var e,b=c(a);return b.start!=b.end&&(e=a.value,a.value=e.slice(0,b.start)+e.slice(b.end)),d(a,b.start,b.start),b.text};var u=function(a,b,c,e){var f=b+c.length;switch(e="string"==typeof e?e.toLowerCase():""){case"collapsetostart":d(a,b,b);break;case"collapsetoend":d(a,f,f);break;case"select":d(a,b,f)}};g=function(a,b,c,d){var e=a.value;a.value=e.slice(0,c)+b+e.slice(c),"boolean"==typeof d&&(d=d?"collapseToEnd":""),u(a,c,b,d)},h=function(a,b,d){var e=c(a),f=a.value;a.value=f.slice(0,e.start)+b+f.slice(e.end),u(a,e.start,b,d||"collapseToEnd")},i=function(a,d,e,f){typeof e==b&&(e=d);var g=c(a),h=a.value;a.value=h.slice(0,g.start)+d+g.text+e+h.slice(g.end);var i=g.start+d.length;u(a,i,g.text,f||"select")},a.fn.extend({getSelection:v(c,!1),setSelection:v(d,!0),collapseSelection:v(k,!0),deleteSelectedText:v(e,!0),deleteText:v(f,!0),extractSelectedText:v(j,!1),insertText:v(g,!0),replaceSelectedText:v(h,!0),surroundSelectedText:v(i,!0)})})})(jQuery);;/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
 Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
 This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfobject=function(){var b="undefined",Q="object",n="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",P="application/x-shockwave-flash",m="SWFObjectExprInst",j=window,K=document,T=navigator,o=[],N=[],i=[],d=[],J,Z=null,M=null,l=null,e=false,A=false;var h=function(){var v=typeof K.getElementById!=b&&typeof K.getElementsByTagName!=b&&typeof K.createElement!=b,AC=[0,0,0],x=null;if(typeof T.plugins!=b&&typeof T.plugins[n]==Q){x=T.plugins[n].description;if(x&&!(typeof T.mimeTypes!=b&&T.mimeTypes[P]&&!T.mimeTypes[P].enabledPlugin)){x=x.replace(/^.*\s+(\S+\s+\S+$)/,"$1");AC[0]=parseInt(x.replace(/^(.*)\..*$/,"$1"),10);AC[1]=parseInt(x.replace(/^.*\.(.*)\s.*$/,"$1"),10);AC[2]=/r/.test(x)?parseInt(x.replace(/^.*r(.*)$/,"$1"),10):0}}else{if(typeof j.ActiveXObject!=b){var y=null,AB=false;try{y=new ActiveXObject(p+".7")}catch(t){try{y=new ActiveXObject(p+".6");AC=[6,0,21];y.AllowScriptAccess="always"}catch(t){if(AC[0]==6){AB=true}}if(!AB){try{y=new ActiveXObject(p)}catch(t){}}}if(!AB&&y){try{x=y.GetVariable("$version");if(x){x=x.split(" ")[1].split(",");AC=[parseInt(x[0],10),parseInt(x[1],10),parseInt(x[2],10)]}}catch(t){}}}}var AD=T.userAgent.toLowerCase(),r=T.platform.toLowerCase(),AA=/webkit/.test(AD)?parseFloat(AD.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,q=false,z=r?/win/.test(r):/win/.test(AD),w=r?/mac/.test(r):/mac/.test(AD);/*@cc_on q=true;@if(@_win32)z=true;@elif(@_mac)w=true;@end@*/return{w3cdom:v,pv:AC,webkit:AA,ie:q,win:z,mac:w}}();var L=function(){if(!h.w3cdom){return }f(H);if(h.ie&&h.win){try{K.write("<script id=__ie_ondomload defer=true src=//:><\/script>");J=C("__ie_ondomload");if(J){I(J,"onreadystatechange",S)}}catch(q){}}if(h.webkit&&typeof K.readyState!=b){Z=setInterval(function(){if(/loaded|complete/.test(K.readyState)){E()}},10)}if(typeof K.addEventListener!=b){K.addEventListener("DOMContentLoaded",E,null)}R(E)}();function S(){if(J.readyState=="complete"){J.parentNode.removeChild(J);E()}}function E(){if(e){return }if(h.ie&&h.win){var v=a("span");try{var u=K.getElementsByTagName("body")[0].appendChild(v);u.parentNode.removeChild(u)}catch(w){return }}e=true;if(Z){clearInterval(Z);Z=null}var q=o.length;for(var r=0;r<q;r++){o[r]()}}function f(q){if(e){q()}else{o[o.length]=q}}function R(r){if(typeof j.addEventListener!=b){j.addEventListener("load",r,false)}else{if(typeof K.addEventListener!=b){K.addEventListener("load",r,false)}else{if(typeof j.attachEvent!=b){I(j,"onload",r)}else{if(typeof j.onload=="function"){var q=j.onload;j.onload=function(){q();r()}}else{j.onload=r}}}}}function H(){var t=N.length;for(var q=0;q<t;q++){var u=N[q].id;if(h.pv[0]>0){var r=C(u);if(r){N[q].width=r.getAttribute("width")?r.getAttribute("width"):"0";N[q].height=r.getAttribute("height")?r.getAttribute("height"):"0";if(c(N[q].swfVersion)){if(h.webkit&&h.webkit<312){Y(r)}W(u,true)}else{if(N[q].expressInstall&&!A&&c("6.0.65")&&(h.win||h.mac)){k(N[q])}else{O(r)}}}}else{W(u,true)}}}function Y(t){var q=t.getElementsByTagName(Q)[0];if(q){var w=a("embed"),y=q.attributes;if(y){var v=y.length;for(var u=0;u<v;u++){if(y[u].nodeName=="DATA"){w.setAttribute("src",y[u].nodeValue)}else{w.setAttribute(y[u].nodeName,y[u].nodeValue)}}}var x=q.childNodes;if(x){var z=x.length;for(var r=0;r<z;r++){if(x[r].nodeType==1&&x[r].nodeName=="PARAM"){w.setAttribute(x[r].getAttribute("name"),x[r].getAttribute("value"))}}}t.parentNode.replaceChild(w,t)}}function k(w){A=true;var u=C(w.id);if(u){if(w.altContentId){var y=C(w.altContentId);if(y){M=y;l=w.altContentId}}else{M=G(u)}if(!(/%$/.test(w.width))&&parseInt(w.width,10)<310){w.width="310"}if(!(/%$/.test(w.height))&&parseInt(w.height,10)<137){w.height="137"}K.title=K.title.slice(0,47)+" - Flash Player Installation";var z=h.ie&&h.win?"ActiveX":"PlugIn",q=K.title,r="MMredirectURL="+j.location+"&MMplayerType="+z+"&MMdoctitle="+q,x=w.id;if(h.ie&&h.win&&u.readyState!=4){var t=a("div");x+="SWFObjectNew";t.setAttribute("id",x);u.parentNode.insertBefore(t,u);u.style.display="none";var v=function(){u.parentNode.removeChild(u)};I(j,"onload",v)}U({data:w.expressInstall,id:m,width:w.width,height:w.height},{flashvars:r},x)}}function O(t){if(h.ie&&h.win&&t.readyState!=4){var r=a("div");t.parentNode.insertBefore(r,t);r.parentNode.replaceChild(G(t),r);t.style.display="none";var q=function(){t.parentNode.removeChild(t)};I(j,"onload",q)}else{t.parentNode.replaceChild(G(t),t)}}function G(v){var u=a("div");if(h.win&&h.ie){u.innerHTML=v.innerHTML}else{var r=v.getElementsByTagName(Q)[0];if(r){var w=r.childNodes;if(w){var q=w.length;for(var t=0;t<q;t++){if(!(w[t].nodeType==1&&w[t].nodeName=="PARAM")&&!(w[t].nodeType==8)){u.appendChild(w[t].cloneNode(true))}}}}}return u}function U(AG,AE,t){var q,v=C(t);if(v){if(typeof AG.id==b){AG.id=t}if(h.ie&&h.win){var AF="";for(var AB in AG){if(AG[AB]!=Object.prototype[AB]){if(AB.toLowerCase()=="data"){AE.movie=AG[AB]}else{if(AB.toLowerCase()=="styleclass"){AF+=' class="'+AG[AB]+'"'}else{if(AB.toLowerCase()!="classid"){AF+=" "+AB+'="'+AG[AB]+'"'}}}}}var AD="";for(var AA in AE){if(AE[AA]!=Object.prototype[AA]){AD+='<param name="'+AA+'" value="'+AE[AA]+'" />'}}v.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+AF+">"+AD+"</object>";i[i.length]=AG.id;q=C(AG.id)}else{if(h.webkit&&h.webkit<312){var AC=a("embed");AC.setAttribute("type",P);for(var z in AG){if(AG[z]!=Object.prototype[z]){if(z.toLowerCase()=="data"){AC.setAttribute("src",AG[z])}else{if(z.toLowerCase()=="styleclass"){AC.setAttribute("class",AG[z])}else{if(z.toLowerCase()!="classid"){AC.setAttribute(z,AG[z])}}}}}for(var y in AE){if(AE[y]!=Object.prototype[y]){if(y.toLowerCase()!="movie"){AC.setAttribute(y,AE[y])}}}v.parentNode.replaceChild(AC,v);q=AC}else{var u=a(Q);u.setAttribute("type",P);for(var x in AG){if(AG[x]!=Object.prototype[x]){if(x.toLowerCase()=="styleclass"){u.setAttribute("class",AG[x])}else{if(x.toLowerCase()!="classid"){u.setAttribute(x,AG[x])}}}}for(var w in AE){if(AE[w]!=Object.prototype[w]&&w.toLowerCase()!="movie"){F(u,w,AE[w])}}v.parentNode.replaceChild(u,v);q=u}}}return q}function F(t,q,r){var u=a("param");u.setAttribute("name",q);u.setAttribute("value",r);t.appendChild(u)}function X(r){var q=C(r);if(q&&(q.nodeName=="OBJECT"||q.nodeName=="EMBED")){if(h.ie&&h.win){if(q.readyState==4){B(r)}else{j.attachEvent("onload",function(){B(r)})}}else{q.parentNode.removeChild(q)}}}function B(t){var r=C(t);if(r){for(var q in r){if(typeof r[q]=="function"){r[q]=null}}r.parentNode.removeChild(r)}}function C(t){var q=null;try{q=K.getElementById(t)}catch(r){}return q}function a(q){return K.createElement(q)}function I(t,q,r){t.attachEvent(q,r);d[d.length]=[t,q,r]}function c(t){var r=h.pv,q=t.split(".");q[0]=parseInt(q[0],10);q[1]=parseInt(q[1],10)||0;q[2]=parseInt(q[2],10)||0;return(r[0]>q[0]||(r[0]==q[0]&&r[1]>q[1])||(r[0]==q[0]&&r[1]==q[1]&&r[2]>=q[2]))?true:false}function V(v,r){if(h.ie&&h.mac){return }var u=K.getElementsByTagName("head")[0],t=a("style");t.setAttribute("type","text/css");t.setAttribute("media","screen");if(!(h.ie&&h.win)&&typeof K.createTextNode!=b){t.appendChild(K.createTextNode(v+" {"+r+"}"))}u.appendChild(t);if(h.ie&&h.win&&typeof K.styleSheets!=b&&K.styleSheets.length>0){var q=K.styleSheets[K.styleSheets.length-1];if(typeof q.addRule==Q){q.addRule(v,r)}}}function W(t,q){var r=q?"visible":"hidden";if(e&&C(t)){C(t).style.visibility=r}else{V("#"+t,"visibility:"+r)}}function g(s){var r=/[\\\"<>\.;]/;var q=r.exec(s)!=null;return q?encodeURIComponent(s):s}var D=function(){if(h.ie&&h.win){window.attachEvent("onunload",function(){var w=d.length;for(var v=0;v<w;v++){d[v][0].detachEvent(d[v][1],d[v][2])}var t=i.length;for(var u=0;u<t;u++){X(i[u])}for(var r in h){h[r]=null}h=null;for(var q in swfobject){swfobject[q]=null}swfobject=null})}}();return{registerObject:function(u,q,t){if(!h.w3cdom||!u||!q){return }var r={};r.id=u;r.swfVersion=q;r.expressInstall=t?t:false;N[N.length]=r;W(u,false)},getObjectById:function(v){var q=null;if(h.w3cdom){var t=C(v);if(t){var u=t.getElementsByTagName(Q)[0];if(!u||(u&&typeof t.SetVariable!=b)){q=t}else{if(typeof u.SetVariable!=b){q=u}}}}return q},embedSWF:function(x,AE,AB,AD,q,w,r,z,AC){if(!h.w3cdom||!x||!AE||!AB||!AD||!q){return }AB+="";AD+="";if(c(q)){W(AE,false);var AA={};if(AC&&typeof AC===Q){for(var v in AC){if(AC[v]!=Object.prototype[v]){AA[v]=AC[v]}}}AA.data=x;AA.width=AB;AA.height=AD;var y={};if(z&&typeof z===Q){for(var u in z){if(z[u]!=Object.prototype[u]){y[u]=z[u]}}}if(r&&typeof r===Q){for(var t in r){if(r[t]!=Object.prototype[t]){if(typeof y.flashvars!=b){y.flashvars+="&"+t+"="+r[t]}else{y.flashvars=t+"="+r[t]}}}}f(function(){U(AA,y,AE);if(AA.id==AE){W(AE,true)}})}else{if(w&&!A&&c("6.0.65")&&(h.win||h.mac)){A=true;W(AE,false);f(function(){var AF={};AF.id=AF.altContentId=AE;AF.width=AB;AF.height=AD;AF.expressInstall=w;k(AF)})}}},getFlashPlayerVersion:function(){return{major:h.pv[0],minor:h.pv[1],release:h.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(t,r,q){if(h.w3cdom){return U(t,r,q)}else{return undefined}},removeSWF:function(q){if(h.w3cdom){X(q)}},createCSS:function(r,q){if(h.w3cdom){V(r,q)}},addDomLoadEvent:f,addLoadEvent:R,getQueryParamValue:function(v){var u=K.location.search||K.location.hash;if(v==null){return g(u)}if(u){var t=u.substring(1).split("&");for(var r=0;r<t.length;r++){if(t[r].substring(0,t[r].indexOf("="))==v){return g(t[r].substring((t[r].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(A&&M){var q=C(m);if(q){q.parentNode.replaceChild(M,q);if(l){W(l,true);if(h.ie&&h.win){M.style.display="block"}}M=null;l=null;A=false}}}}}();

/*! SWFSound v1.1 <http://code.google.com/p/swfsound/>
 Copyright (c) 2009 Frank Baumgartner, www.b-nm.at
 This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
 */
var swfsound=function()
{return{pauseStatus:[],embedSWF:function(path)
{if(path==undefined)path="/images/sound.swf";var flashvars=false;var attributes={id:'swfSound_Flash'}
    var params={menu:'false',wmode:'transparent',swLiveConnect:'true',allowScriptAccess:'always'};var d=document,div;div=d.createElement('div');div.id="swfSound_Flash_div";div.style.position="absolute";div.style.left=0;div.style.top=0;d.getElementsByTagName('body')[0].appendChild(div);var def="#swfSound_Flash { left:0; position:absolute; top: 0; }";var ss1=document.createElement('style');ss1.setAttribute("type","text/css");if(ss1.styleSheet)
{ss1.styleSheet.cssText=def;}
else
{var tt1=document.createTextNode(def);ss1.appendChild(tt1);}
    var hh1=document.getElementsByTagName('head')[0];hh1.appendChild(ss1);try
{swfobject.embedSWF(path,'swfSound_Flash_div','1','1','8.0.0','/images/expressInstall.swf',flashvars,params,attributes);}
catch(e)
{alert('Seems like you are missing swfobject! - Please include the swfobject javascript into your HTML!');}},loadSound:function(mp3URL,streamingMode,onLoadCallbackFunctionName,onID3CallbackFunctionName)
{if(streamingMode==undefined)streamingMode=false;if(onLoadCallbackFunctionName==undefined)onLoadCallbackFunctionName=null;if(onID3CallbackFunctionName==undefined)onID3CallbackFunctionName=null;var obj=document.getElementById('swfSound_Flash');return obj.loadSound(mp3URL,streamingMode,onLoadCallbackFunctionName,onID3CallbackFunctionName);},startSound:function(id_sound,offsetSecondsFloat,loopCount,onSoundCompleteCallbackFunctionName)
{if(offsetSecondsFloat==undefined)offsetSecondsFloat=0.0;if(onSoundCompleteCallbackFunctionName==undefined)onSoundCompleteCallbackFunctionName=null;if(loopCount==undefined)loopCount=1;var obj=document.getElementById('swfSound_Flash');obj.startSound(id_sound,offsetSecondsFloat,loopCount,onSoundCompleteCallbackFunctionName);return true;},stopSound:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');obj.stopSound(id_sound);return true;},pauseSound:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');var pstatus=swfsound.pauseStatus[id_sound];if(pstatus==true)
{swfsound.startSound(id_sound,swfsound.getPosition(id_sound)/1000);swfsound.pauseStatus[id_sound]=false;}
else
{swfsound.stopSound(id_sound);swfsound.pauseStatus[id_sound]=true;}
    return swfsound.pauseStatus[id_sound];},setVolume:function(id_sound,newVolume)
{var obj=document.getElementById('swfSound_Flash');obj.setVolume(id_sound,newVolume);return true;},getVolume:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getVolume(id_sound);},getDuration:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getDuration(id_sound);},getPosition:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getPosition(id_sound);},getID3:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getID3(id_sound);},setPan:function(id_sound,newPan)
{var obj=document.getElementById('swfSound_Flash');obj.setPan(id_sound,newPan);return true;},getPan:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getPan(id_sound);},getBytesLoaded:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getBytesLoaded(id_sound);},getBytesTotal:function(id_sound)
{var obj=document.getElementById('swfSound_Flash');return obj.getBytesTotal(id_sound);}};}();

;// VERSION: 2.3 LAST UPDATE: 11.07.2013
/*
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/
 */
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);
;//XRegExp 2.0.0 <xregexp.com> MIT License
var XRegExp;XRegExp=XRegExp||function(n){"use strict";function v(n,i,r){var u;for(u in t.prototype)t.prototype.hasOwnProperty(u)&&(n[u]=t.prototype[u]);return n.xregexp={captureNames:i,isNative:!!r},n}function g(n){return(n.global?"g":"")+(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.extended?"x":"")+(n.sticky?"y":"")}function o(n,r,u){if(!t.isRegExp(n))throw new TypeError("type RegExp expected");var f=i.replace.call(g(n)+(r||""),h,"");return u&&(f=i.replace.call(f,new RegExp("["+u+"]+","g"),"")),n=n.xregexp&&!n.xregexp.isNative?v(t(n.source,f),n.xregexp.captureNames?n.xregexp.captureNames.slice(0):null):v(new RegExp(n.source,f),null,!0)}function a(n,t){var i=n.length;if(Array.prototype.lastIndexOf)return n.lastIndexOf(t);while(i--)if(n[i]===t)return i;return-1}function s(n,t){return Object.prototype.toString.call(n).toLowerCase()==="[object "+t+"]"}function d(n){return n=n||{},n==="all"||n.all?n={natives:!0,extensibility:!0}:s(n,"string")&&(n=t.forEach(n,/[^\s,]+/,function(n){this[n]=!0},{})),n}function ut(n,t,i,u){var o=p.length,s=null,e,f;y=!0;try{while(o--)if(f=p[o],(f.scope==="all"||f.scope===i)&&(!f.trigger||f.trigger.call(u))&&(f.pattern.lastIndex=t,e=r.exec.call(f.pattern,n),e&&e.index===t)){s={output:f.handler.call(u,e,i),match:e};break}}catch(h){throw h;}finally{y=!1}return s}function b(n){t.addToken=c[n?"on":"off"],f.extensibility=n}function tt(n){RegExp.prototype.exec=(n?r:i).exec,RegExp.prototype.test=(n?r:i).test,String.prototype.match=(n?r:i).match,String.prototype.replace=(n?r:i).replace,String.prototype.split=(n?r:i).split,f.natives=n}var t,c,u,f={natives:!1,extensibility:!1},i={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},r={},k={},p=[],e="default",rt="class",it={"default":/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,"class":/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/},et=/\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g,h=/([\s\S])(?=[\s\S]*\1)/g,nt=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,ft=i.exec.call(/()??/,"")[1]===n,l=RegExp.prototype.sticky!==n,y=!1,w="gim"+(l?"y":"");return t=function(r,u){if(t.isRegExp(r)){if(u!==n)throw new TypeError("can't supply flags when constructing one RegExp from another");return o(r)}if(y)throw new Error("can't call the XRegExp constructor within token definition functions");var l=[],a=e,b={hasNamedCapture:!1,captureNames:[],hasFlag:function(n){return u.indexOf(n)>-1}},f=0,c,s,p;if(r=r===n?"":String(r),u=u===n?"":String(u),i.match.call(u,h))throw new SyntaxError("invalid duplicate regular expression flag");for(r=i.replace.call(r,/^\(\?([\w$]+)\)/,function(n,t){if(i.test.call(/[gy]/,t))throw new SyntaxError("can't use flag g or y in mode modifier");return u=i.replace.call(u+t,h,""),""}),t.forEach(u,/[\s\S]/,function(n){if(w.indexOf(n[0])<0)throw new SyntaxError("invalid regular expression flag "+n[0]);});f<r.length;)c=ut(r,f,a,b),c?(l.push(c.output),f+=c.match[0].length||1):(s=i.exec.call(it[a],r.slice(f)),s?(l.push(s[0]),f+=s[0].length):(p=r.charAt(f),p==="["?a=rt:p==="]"&&(a=e),l.push(p),++f));return v(new RegExp(l.join(""),i.replace.call(u,/[^gimy]+/g,"")),b.hasNamedCapture?b.captureNames:null)},c={on:function(n,t,r){r=r||{},n&&p.push({pattern:o(n,"g"+(l?"y":"")),handler:t,scope:r.scope||e,trigger:r.trigger||null}),r.customFlags&&(w=i.replace.call(w+r.customFlags,h,""))},off:function(){throw new Error("extensibility must be installed before using addToken");}},t.addToken=c.off,t.cache=function(n,i){var r=n+"/"+(i||"");return k[r]||(k[r]=t(n,i))},t.escape=function(n){return i.replace.call(n,/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},t.exec=function(n,t,i,u){var e=o(t,"g"+(u&&l?"y":""),u===!1?"y":""),f;return e.lastIndex=i=i||0,f=r.exec.call(e,n),u&&f&&f.index!==i&&(f=null),t.global&&(t.lastIndex=f?e.lastIndex:0),f},t.forEach=function(n,i,r,u){for(var e=0,o=-1,f;f=t.exec(n,i,e);)r.call(u,f,++o,n,i),e=f.index+(f[0].length||1);return u},t.globalize=function(n){return o(n,"g")},t.install=function(n){n=d(n),!f.natives&&n.natives&&tt(!0),!f.extensibility&&n.extensibility&&b(!0)},t.isInstalled=function(n){return!!f[n]},t.isRegExp=function(n){return s(n,"regexp")},t.matchChain=function(n,i){return function r(n,u){for(var o=i[u].regex?i[u]:{regex:i[u]},f=[],s=function(n){f.push(o.backref?n[o.backref]||"":n[0])},e=0;e<n.length;++e)t.forEach(n[e],o.regex,s);return u===i.length-1||!f.length?f:r(f,u+1)}([n],0)},t.replace=function(i,u,f,e){var c=t.isRegExp(u),s=u,h;return c?(e===n&&u.global&&(e="all"),s=o(u,e==="all"?"g":"",e==="all"?"":"g")):e==="all"&&(s=new RegExp(t.escape(String(u)),"g")),h=r.replace.call(String(i),s,f),c&&u.global&&(u.lastIndex=0),h},t.split=function(n,t,i){return r.split.call(n,t,i)},t.test=function(n,i,r,u){return!!t.exec(n,i,r,u)},t.uninstall=function(n){n=d(n),f.natives&&n.natives&&tt(!1),f.extensibility&&n.extensibility&&b(!1)},t.union=function(n,i){var l=/(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g,o=0,f,h,c=function(n,t,i){var r=h[o-f];if(t){if(++o,r)return"(?<"+r+">"}else if(i)return"\\"+(+i+f);return n},e=[],r,u;if(!(s(n,"array")&&n.length))throw new TypeError("patterns must be a nonempty array");for(u=0;u<n.length;++u)r=n[u],t.isRegExp(r)?(f=o,h=r.xregexp&&r.xregexp.captureNames||[],e.push(t(r.source).source.replace(l,c))):e.push(t.escape(r));return t(e.join("|"),i)},t.version="2.0.0",r.exec=function(t){var r,f,e,o,u;if(this.global||(o=this.lastIndex),r=i.exec.apply(this,arguments),r){if(!ft&&r.length>1&&a(r,"")>-1&&(e=new RegExp(this.source,i.replace.call(g(this),"g","")),i.replace.call(String(t).slice(r.index),e,function(){for(var t=1;t<arguments.length-2;++t)arguments[t]===n&&(r[t]=n)})),this.xregexp&&this.xregexp.captureNames)for(u=1;u<r.length;++u)f=this.xregexp.captureNames[u-1],f&&(r[f]=r[u]);this.global&&!r[0].length&&this.lastIndex>r.index&&(this.lastIndex=r.index)}return this.global||(this.lastIndex=o),r},r.test=function(n){return!!r.exec.call(this,n)},r.match=function(n){if(t.isRegExp(n)){if(n.global){var u=i.match.apply(this,arguments);return n.lastIndex=0,u}}else n=new RegExp(n);return r.exec.call(n,this)},r.replace=function(n,r){var e=t.isRegExp(n),u,f,h,o;return e?(n.xregexp&&(u=n.xregexp.captureNames),n.global||(o=n.lastIndex)):n+="",s(r,"function")?f=i.replace.call(String(this),n,function(){var t=arguments,i;if(u)for(t[0]=new String(t[0]),i=0;i<u.length;++i)u[i]&&(t[0][u[i]]=t[i+1]);return e&&n.global&&(n.lastIndex=t[t.length-2]+t[0].length),r.apply(null,t)}):(h=String(this),f=i.replace.call(h,n,function(){var n=arguments;return i.replace.call(String(r),et,function(t,i,r){var f;if(i){if(f=+i,f<=n.length-3)return n[f]||"";if(f=u?a(u,i):-1,f<0)throw new SyntaxError("backreference to undefined group "+t);return n[f+1]||""}if(r==="$")return"$";if(r==="&"||+r==0)return n[0];if(r==="`")return n[n.length-1].slice(0,n[n.length-2]);if(r==="'")return n[n.length-1].slice(n[n.length-2]+n[0].length);if(r=+r,!isNaN(r)){if(r>n.length-3)throw new SyntaxError("backreference to undefined group "+t);return n[r]||""}throw new SyntaxError("invalid token "+t);})})),e&&(n.lastIndex=n.global?0:o),f},r.split=function(r,u){if(!t.isRegExp(r))return i.split.apply(this,arguments);var e=String(this),h=r.lastIndex,f=[],o=0,s;return u=(u===n?-1:u)>>>0,t.forEach(e,r,function(n){n.index+n[0].length>o&&(f.push(e.slice(o,n.index)),n.length>1&&n.index<e.length&&Array.prototype.push.apply(f,n.slice(1)),s=n[0].length,o=n.index+s)}),o===e.length?(!i.test.call(r,"")||s)&&f.push(""):f.push(e.slice(o)),r.lastIndex=h,f.length>u?f.slice(0,u):f},u=c.on,u(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/,function(n,t){if(n[1]==="B"&&t===e)return n[0];throw new SyntaxError("invalid escape "+n[0]);},{scope:"all"}),u(/\[(\^?)]/,function(n){return n[1]?"[\\s\\S]":"\\b\\B"}),u(/(?:\(\?#[^)]*\))+/,function(n){return i.test.call(nt,n.input.slice(n.index+n[0].length))?"":"(?:)"}),u(/\\k<([\w$]+)>/,function(n){var t=isNaN(n[1])?a(this.captureNames,n[1])+1:+n[1],i=n.index+n[0].length;if(!t||t>this.captureNames.length)throw new SyntaxError("backreference to undefined group "+n[0]);return"\\"+t+(i===n.input.length||isNaN(n.input.charAt(i))?"":"(?:)")}),u(/(?:\s+|#.*)+/,function(n){return i.test.call(nt,n.input.slice(n.index+n[0].length))?"":"(?:)"},{trigger:function(){return this.hasFlag("x")},customFlags:"x"}),u(/\./,function(){return"[\\s\\S]"},{trigger:function(){return this.hasFlag("s")},customFlags:"s"}),u(/\(\?P?<([\w$]+)>/,function(n){if(!isNaN(n[1]))throw new SyntaxError("can't use integer as capture name "+n[0]);return this.captureNames.push(n[1]),this.hasNamedCapture=!0,"("}),u(/\\(\d+)/,function(n,t){if(!(t===e&&/^[1-9]/.test(n[1])&&+n[1]<=this.captureNames.length)&&n[1]!=="0")throw new SyntaxError("can't use octal escape or backreference to undefined group "+n[0]);return n[0]},{scope:"all"}),u(/\((?!\?)/,function(){return this.hasFlag("n")?"(?:":(this.captureNames.push(null),"(")},{customFlags:"n"}),typeof exports!="undefined"&&(exports.XRegExp=t),t}();
;/*
 Watermark v3.1.4 (August 13, 2012) plugin for jQuery
 http://jquery-watermark.googlecode.com/
 Copyright (c) 2009-2012 Todd Northrop
 http://www.speednet.biz/
 Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(n,t,i){var g="TEXTAREA",d="function",nt="password",c="maxLength",v="type",r="",u=!0,rt="placeholder",h=!1,tt="watermark",s=tt,o="watermarkClass",w="watermarkFocus",a="watermarkSubmit",b="watermarkMaxLength",e="watermarkPassword",f="watermarkText",l=/\r/g,ft=/^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,it="input:data("+s+"),textarea:data("+s+")",p=":watermarkable",k=["Page_ClientValidate"],y=h,ut=rt in document.createElement("input");n.watermark=n.watermark||{version:"3.1.4",runOnce:u,options:{className:tt,useNative:u,hideBeforeUnload:u},hide:function(t){n(t).filter(it).each(function(){n.watermark._hide(n(this))})},_hide:function(n,i){var a=n[0],w=(a.value||r).replace(l,r),h=n.data(f)||r,p=n.data(b)||0,y=n.data(o),s,u;h.length&&w==h&&(a.value=r,n.data(e)&&(n.attr(v)||r)==="text"&&(s=n.data(e)||[],u=n.parent()||[],s.length&&u.length&&(u[0].removeChild(n[0]),u[0].appendChild(s[0]),n=s)),p&&(n.attr(c,p),n.removeData(b)),i&&(n.attr("autocomplete","off"),t.setTimeout(function(){n.select()},1))),y&&n.removeClass(y)},show:function(t){n(t).filter(it).each(function(){n.watermark._show(n(this))})},_show:function(t){var p=t[0],g=(p.value||r).replace(l,r),i=t.data(f)||r,k=t.attr(v)||r,d=t.data(o),h,s,a;g.length!=0&&g!=i||t.data(w)?n.watermark._hide(t):(y=u,t.data(e)&&k===nt&&(h=t.data(e)||[],s=t.parent()||[],h.length&&s.length&&(s[0].removeChild(t[0]),s[0].appendChild(h[0]),t=h,t.attr(c,i.length),p=t[0])),(k==="text"||k==="search")&&(a=t.attr(c)||0,a>0&&i.length>a&&(t.data(b,a),t.attr(c,i.length))),d&&t.addClass(d),p.value=i)},hideAll:function(){y&&(n.watermark.hide(p),y=h)},showAll:function(){n.watermark.show(p)}},n.fn.watermark=n.fn.watermark||function(i,y){var tt="string";if(!this.length)return this;var k=h,b=typeof i==tt;return b&&(i=i.replace(l,r)),typeof y=="object"?(k=typeof y.className==tt,y=n.extend({},n.watermark.options,y)):typeof y==tt?(k=u,y=n.extend({},n.watermark.options,{className:y})):y=n.watermark.options,typeof y.useNative!=d&&(y.useNative=y.useNative?function(){return u}:function(){return h}),this.each(function(){var et="dragleave",ot="dragenter",ft=this,h=n(ft),st,d,tt,it;if(h.is(p)){if(h.data(s))(b||k)&&(n.watermark._hide(h),b&&h.data(f,i),k&&h.data(o,y.className));else{if(ut&&y.useNative.call(ft,h)&&(h.attr("tagName")||r)!==g){b&&h.attr(rt,i);return}h.data(f,b?i:r),h.data(o,y.className),h.data(s,1),(h.attr(v)||r)===nt?(st=h.wrap("<span>").parent(),d=n(st.html().replace(/type=["']?password["']?/i,'type="text"')),d.data(f,h.data(f)),d.data(o,h.data(o)),d.data(s,1),d.attr(c,i.length),d.focus(function(){n.watermark._hide(d,u)}).bind(ot,function(){n.watermark._hide(d)}).bind("dragend",function(){t.setTimeout(function(){d.blur()},1)}),h.blur(function(){n.watermark._show(h)}).bind(et,function(){n.watermark._show(h)}),d.data(e,h),h.data(e,d)):h.focus(function(){h.data(w,1),n.watermark._hide(h,u)}).blur(function(){h.data(w,0),n.watermark._show(h)}).bind(ot,function(){n.watermark._hide(h)}).bind(et,function(){n.watermark._show(h)}).bind("dragend",function(){t.setTimeout(function(){n.watermark._show(h)},1)}).bind("drop",function(n){var i=h[0],t=n.originalEvent.dataTransfer.getData("Text");(i.value||r).replace(l,r).replace(t,r)===h.data(f)&&(i.value=t),h.focus()}),ft.form&&(tt=ft.form,it=n(tt),it.data(a)||(it.submit(n.watermark.hideAll),tt.submit?(it.data(a,tt.submit),tt.submit=function(t,i){return function(){var r=i.data(a);n.watermark.hideAll(),r.apply?r.apply(t,Array.prototype.slice.call(arguments)):r()}}(tt,it)):(it.data(a,1),tt.submit=function(t){return function(){n.watermark.hideAll(),delete t.submit,t.submit()}}(tt))))}n.watermark._show(h)}})},n.watermark.runOnce&&(n.watermark.runOnce=h,n.extend(n.expr[":"],{data:n.expr.createPseudo?n.expr.createPseudo(function(t){return function(i){return!!n.data(i,t)}}):function(t,i,r){return!!n.data(t,r[3])},watermarkable:function(n){var t,i=n.nodeName;return i===g?u:i!=="INPUT"?h:(t=n.getAttribute(v),!t||!ft.test(t))}}),function(t){n.fn.val=function(){var u=this,e=Array.prototype.slice.call(arguments),o;return u.length?e.length?(t.apply(u,e),n.watermark.show(u),u):u.data(s)?(o=(u[0].value||r).replace(l,r),o===(u.data(f)||r)?r:o):t.apply(u):e.length?u:i}}(n.fn.val),k.length&&n(function(){for(var u,r,i=k.length-1;i>=0;i--)u=k[i],r=t[u],typeof r==d&&(t[u]=function(t){return function(){return n.watermark.hideAll(),t.apply(null,Array.prototype.slice.call(arguments))}}(r))}),n(t).bind("beforeunload",function(){n.watermark.options.hideBeforeUnload&&n.watermark.hideAll()}))})(jQuery,window);;/*!
 * jQuery Form Plugin
 * version: 3.35.0-2013.05.23
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */
;(function($) {
    "use strict";

    /*
     Usage Note:
     -----------
     Do not use both ajaxSubmit and ajaxForm on the same form. These
     functions are mutually exclusive. Use ajaxSubmit if you want
     to bind your own submit handler to the form. For example,

     $(document).ready(function() {
     $('#myForm').on('submit', function(e) {
     e.preventDefault(); // <-- important
     $(this).ajaxSubmit({
     target: '#output'
     });
     });
     });

     Use ajaxForm when you want the plugin to manage all the event binding
     for you. For example,

     $(document).ready(function() {
     $('#myForm').ajaxForm({
     target: '#output'
     });
     });

     You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
     form does not have to exist when you invoke ajaxForm:

     $('#myForm').ajaxForm({
     delegation: true,
     target: '#output'
     });

     When using ajaxForm, the ajaxSubmit function will be invoked for you
     at the appropriate time.
     */

    /**
     * Feature detection
     */
    var feature = {};
    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
    feature.formdata = window.FormData !== undefined;

    var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string. this accounts for the case where a form
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
    $.fn.attr2 = function() {
        if ( ! hasProp )
            return this.attr.apply(this, arguments);
        var val = this.prop.apply(this, arguments);
        if ( ( val && val.jquery ) || typeof val === 'string' )
            return val;
        return this.attr.apply(this, arguments);
    };

    /**
     * ajaxSubmit() provides a mechanism for immediately submitting
     * an HTML form using AJAX.
     */
    $.fn.ajaxSubmit = function(options) {
        /*jshint scripturl:true */
        //these lines to ignore multi-submit form;
        if (this.attr('submitRunning') == 'true') {
            return this;
        }
        this.attr('submitRunning', true);
        // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }

        var method, action, url, $form = this;

        if (typeof options == 'function') {
            options = { success: options };
        }

        method = options.type || this.attr2('method');
        action = options.url || this.attr2('action');

        url = (typeof action === 'string') ? $.trim(action) : '';
        url = url || window.location.href || '';
        if (url) {
            // clean url (don't include hash vaue)
            url = (url.match(/^([^#]+)/)||[])[1];
        }

        options = $.extend(true, {
            url: url,
            success: $.ajaxSettings.success,
            type: method || 'GET',
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, options);

        // hook for manipulating the form data before it is extracted;
        // convenient for use with rich editors like tinyMCE or FCKEditor
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }

        // provide opportunity to alter form data before it is serialized
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }

        var traditional = options.traditional;
        if ( traditional === undefined ) {
            traditional = $.ajaxSettings.traditional;
        }

        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional);
        }

        // give pre-submit callback an opportunity to abort the submit
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }

        // fire vetoable 'validate' event
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }

        var q = $.param(a, traditional);
        if (qx) {
            q = ( q ? (q + '&' + qx) : qx );
        }
        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null; // data is null for 'get'
        }
        else {
            options.data = q; // data is the query string for 'post'
        }

        var callbacks = [];
        if (options.resetForm) {
            callbacks.push(function() { $form.resetForm(); });
        }
        if (options.clearForm) {
            callbacks.push(function() { $form.clearForm(options.includeHidden); });
        }

        // perform a load on the target only if dataType is not provided
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function(){};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? 'replaceWith' : 'html';
                $(options.target)[fn](data).each(oldSuccess, arguments);
            });
        }
        else if (options.success) {
            callbacks.push(options.success);
        }

        options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
            var context = options.context || this ; // jQuery 1.4+ supports scope context
            for (var i=0, max=callbacks.length; i < max; i++) {
                callbacks[i].apply(context, [data, status, xhr || $form, $form]);
            }
            $form.attr('submitRunning', false);//this line to re-enable submit form after form processing finished;
        };

        if (options.error) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form]);
            };
        }

        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form]);
            };
        }

        // are there files to upload?

        // [value] (issue #113), also see comment:
        // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
        var fileInputs = $('input[type=file]:enabled[value!=""]', this);

        var hasFileInputs = fileInputs.length > 0;
        var mp = 'multipart/form-data';
        var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

        var fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

        var jqxhr;

        // options.iframe allows user to force iframe mode
        // 06-NOV-09: now defaulting to iframe mode if file input is detected
        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
            // hack to fix Safari hang (thanks to Tim Molendijk for this)
            // see: http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
            if (options.closeKeepAlive) {
                $.get(options.closeKeepAlive, function() {
                    jqxhr = fileUploadIframe(a);
                });
            }
            else {
                jqxhr = fileUploadIframe(a);
            }
        }
        else if ((hasFileInputs || multipart) && fileAPI) {
            jqxhr = fileUploadXhr(a);
        }
        else {
            jqxhr = $.ajax(options);
        }

        $form.removeData('jqxhr').data('jqxhr', jqxhr);

        // clear element array
        for (var k=0; k < elements.length; k++)
            elements[k] = null;

        // fire 'notify' event
        this.trigger('form-submit-notify', [this, options]);
        return this;

        // utility fn for deep serialization
        function deepSerialize(extraData){
            var serialized = $.param(extraData, options.traditional).split('&');
            var len = serialized.length;
            var result = [];
            var i, part;
            for (i=0; i < len; i++) {
                // #252; undo param space replacement
                serialized[i] = serialized[i].replace(/\+/g,' ');
                part = serialized[i].split('=');
                // #278; use array instead of object storage, favoring array serializations
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
            }
            return result;
        }

        // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
        function fileUploadXhr(a) {
            var formdata = new FormData();

            for (var i=0; i < a.length; i++) {
                formdata.append(a[i].name, a[i].value);
            }

            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i=0; i < serializedData.length; i++)
                    if (serializedData[i])
                        formdata.append(serializedData[i][0], serializedData[i][1]);
            }

            options.data = null;

            var s = $.extend(true, {}, $.ajaxSettings, options, {
                contentType: false,
                processData: false,
                cache: false,
                type: method || 'POST'
            });

            if (options.uploadProgress) {
                // workaround because jqXHR does not expose upload property
                s.xhr = function() {
                    var xhr = jQuery.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener('progress', function(event) {
                            var percent = 0;
                            var position = event.loaded || event.position; /*event.position is deprecated*/
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            options.uploadProgress(event, position, total, percent);
                        }, false);
                    }
                    return xhr;
                };
            }

            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                o.data = formdata;
                if(beforeSend)
                    beforeSend.call(this, xhr, o);
            };
            return $.ajax(s);
        }

        // private function for handling file uploads (hat tip to YAHOO!)
        function fileUploadIframe(a) {
            var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
            var deferred = $.Deferred();

            if (a) {
                // ensure that every serialized input is still enabled
                for (i=0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if ( hasProp )
                        el.prop('disabled', false);
                    else
                        el.removeAttr('disabled');
                }
            }

            s = $.extend(true, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = 'jqFormIO' + (new Date().getTime());
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr2('name');
                if (!n)
                    $io.attr2('name', id);
                else
                    id = n;
            }
            else {
                $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
                $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
            }
            io = $io[0];


            xhr = { // mock object
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = (status === 'timeout' ? 'timeout' : 'aborted');
                    log('aborting upload... ' + e);
                    this.aborted = 1;

                    try { // #214, #257
                        if (io.contentWindow.document.execCommand) {
                            io.contentWindow.document.execCommand('Stop');
                        }
                    }
                    catch(ignore) {}

                    $io.attr('src', s.iframeSrc); // abort op in progress
                    xhr.error = e;
                    if (s.error)
                        s.error.call(s.context, xhr, e, status);
                    if (g)
                        $.event.trigger("ajaxError", [xhr, s, e]);
                    if (s.complete)
                        s.complete.call(s.context, xhr, e);
                }
            };

            g = s.global;
            // trigger ajax global events so that activity/block indicators work like normal
            if (g && 0 === $.active++) {
                $.event.trigger("ajaxStart");
            }
            if (g) {
                $.event.trigger("ajaxSend", [xhr, s]);
            }

            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) {
                    $.active--;
                }
                deferred.reject();
                return deferred;
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred;
            }

            // add submitting element to data if we know it
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        s.extraData[n+'.x'] = form.clk_x;
                        s.extraData[n+'.y'] = form.clk_y;
                    }
                }
            }

            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;

            function getDoc(frame) {
                /* it looks like contentWindow or contentDocument do not
                 * carry the protocol property in ie8, when running under ssl
                 * frame.document is the only valid response document, since
                 * the protocol is know but not on the other two objects. strange?
                 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
                 */

                var doc = null;

                // IE8 cascading access check
                try {
                    if (frame.contentWindow) {
                        doc = frame.contentWindow.document;
                    }
                } catch(err) {
                    // IE8 access denied under ssl & missing protocol
                    log('cannot get iframe.contentWindow document: ' + err);
                }

                if (doc) { // successful getting content
                    return doc;
                }

                try { // simply checking may throw in ie8 under ssl or mismatched protocol
                    doc = frame.contentDocument ? frame.contentDocument : frame.document;
                } catch(err) {
                    // last attempt
                    log('cannot get iframe.contentDocument: ' + err);
                    doc = frame.document;
                }
                return doc;
            }

            // Rails CSRF hack (thanks to Yvan Barthelemy)
            var csrf_token = $('meta[name=csrf-token]').attr('content');
            var csrf_param = $('meta[name=csrf-param]').attr('content');
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token;
            }

            // take a breath so that pending repaints get some cpu time before the upload starts
            function doSubmit() {
                // make sure form attrs are set
                var t = $form.attr2('target'), a = $form.attr2('action');

                // update form attrs in IE friendly way
                form.setAttribute('target',id);
                if (!method) {
                    form.setAttribute('method', 'POST');
                }
                if (a != s.url) {
                    form.setAttribute('action', s.url);
                }

                // ie borks in some cases when setting encoding
                if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                    $form.attr({
                        encoding: 'multipart/form-data',
                        enctype: 'multipart/form-data'
                    });
                }

                // support timout
                if (s.timeout) {
                    timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
                }

                // look for server aborts
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log('state = ' + state);
                        if (state && state.toLowerCase() == 'uninitialized')
                            setTimeout(checkState,50);
                    }
                    catch(e) {
                        log('Server abort: ' , e, ' (', e.name, ')');
                        cb(SERVER_ABORT);
                        if (timeoutHandle)
                            clearTimeout(timeoutHandle);
                        timeoutHandle = undefined;
                    }
                }

                // add "extra" data to form if provided in options
                var extraInputs = [];
                try {
                    if (s.extraData) {
                        for (var n in s.extraData) {
                            if (s.extraData.hasOwnProperty(n)) {
                                // if using the $.param format that allows for multiple values with the same name
                                if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                                    extraInputs.push(
                                        $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                            .appendTo(form)[0]);
                                } else {
                                    extraInputs.push(
                                        $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                            .appendTo(form)[0]);
                                }
                            }
                        }
                    }

                    if (!s.iframeTarget) {
                        // add iframe to doc and submit the form
                        $io.appendTo('body');
                        if (io.attachEvent)
                            io.attachEvent('onload', cb);
                        else
                            io.addEventListener('load', cb, false);
                    }
                    setTimeout(checkState,15);

                    try {
                        form.submit();
                    } catch(err) {
                        // just in case form has element with name/id of 'submit'
                        var submitFn = document.createElement('form').submit;
                        submitFn.apply(form);
                    }
                }
                finally {
                    // reset attrs and remove "extra" input elements
                    form.setAttribute('action',a);
                    if(t) {
                        form.setAttribute('target', t);
                    } else {
                        $form.removeAttr('target');
                    }
                    $(extraInputs).remove();
                }
            }

            if (s.forceSync) {
                doSubmit();
            }
            else {
                setTimeout(doSubmit, 10); // this lets dom updates render
            }

            var data, doc, domCheckCount = 50, callbackProcessed;

            function cb(e) {
                if (xhr.aborted || callbackProcessed) {
                    return;
                }

                doc = getDoc(io);
                if(!doc) {
                    log('cannot access response document');
                    e = SERVER_ABORT;
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort('timeout');
                    deferred.reject(xhr, 'timeout');
                    return;
                }
                else if (e == SERVER_ABORT && xhr) {
                    xhr.abort('server abort');
                    deferred.reject(xhr, 'error', 'server abort');
                    return;
                }

                if (!doc || doc.location.href == s.iframeSrc) {
                    // response not received yet
                    if (!timedOut)
                        return;
                }
                if (io.detachEvent)
                    io.detachEvent('onload', cb);
                else
                    io.removeEventListener('load', cb, false);

                var status = 'success', errMsg;
                try {
                    if (timedOut) {
                        throw 'timeout';
                    }

                    var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                    log('isXml='+isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                        if (--domCheckCount) {
                            // in some browsers (Opera) the iframe DOM is not always traversable when
                            // the onload callback fires, so we loop a bit to accommodate
                            log('requeing onLoad callback, DOM not available');
                            setTimeout(cb, 250);
                            return;
                        }
                        // let this fall through because server response could be an empty document
                        //log('Could not access iframe DOM after mutiple tries.');
                        //throw 'DOMException: not available';
                    }

                    //log('response detected');
                    var docRoot = doc.body ? doc.body : doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (isXml)
                        s.dataType = 'xml';
                    xhr.getResponseHeader = function(header){
                        var headers = {'content-type': s.dataType};
                        return headers[header];
                    };
                    // support for XHR 'status' & 'statusText' emulation :
                    if (docRoot) {
                        xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                    }

                    var dt = (s.dataType || '').toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        // see if user embedded response in textarea
                        var ta = doc.getElementsByTagName('textarea')[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            // support for XHR 'status' & 'statusText' emulation :
                            xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                        }
                        else if (scr) {
                            // account for browsers injecting pre around json response
                            var pre = doc.getElementsByTagName('pre')[0];
                            var b = doc.getElementsByTagName('body')[0];
                            if (pre) {
                                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                            }
                            else if (b) {
                                xhr.responseText = b.textContent ? b.textContent : b.innerText;
                            }
                        }
                    }
                    else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                        xhr.responseXML = toXml(xhr.responseText);
                    }

                    try {
                        data = httpData(xhr, dt, s);
                    }
                    catch (err) {
                        status = 'parsererror';
                        xhr.error = errMsg = (err || status);
                    }
                }
                catch (err) {
                    log('error caught: ',err);
                    status = 'error';
                    xhr.error = errMsg = (err || status);
                }

                if (xhr.aborted) {
                    log('upload aborted');
                    status = null;
                }

                if (xhr.status) { // we've set xhr.status
                    status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
                }

                // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
                if (status === 'success') {
                    if (s.success)
                        s.success.call(s.context, data, 'success', xhr);
                    deferred.resolve(xhr.responseText, 'success', xhr);
                    if (g)
                        $.event.trigger("ajaxSuccess", [xhr, s]);
                }
                else if (status) {
                    if (errMsg === undefined)
                        errMsg = xhr.statusText;
                    if (s.error)
                        s.error.call(s.context, xhr, status, errMsg);
                    deferred.reject(xhr, 'error', errMsg);
                    if (g)
                        $.event.trigger("ajaxError", [xhr, s, errMsg]);
                }

                if (g)
                    $.event.trigger("ajaxComplete", [xhr, s]);

                if (g && ! --$.active) {
                    $.event.trigger("ajaxStop");
                }

                if (s.complete)
                    s.complete.call(s.context, xhr, status);

                callbackProcessed = true;
                if (s.timeout)
                    clearTimeout(timeoutHandle);

                // clean up
                setTimeout(function() {
                    if (!s.iframeTarget)
                        $io.remove();
                    xhr.responseXML = null;
                }, 100);
            }

            var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
                if (window.ActiveXObject) {
                    doc = new ActiveXObject('Microsoft.XMLDOM');
                    doc.async = 'false';
                    doc.loadXML(s);
                }
                else {
                    doc = (new DOMParser()).parseFromString(s, 'text/xml');
                }
                return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
            };
            var parseJSON = $.parseJSON || function(s) {
                /*jslint evil:true */
                return window['eval']('(' + s + ')');
            };

            var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

                var ct = xhr.getResponseHeader('content-type') || '',
                    xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                    data = xml ? xhr.responseXML : xhr.responseText;

                if (xml && data.documentElement.nodeName === 'parsererror') {
                    if ($.error)
                        $.error('parsererror');
                }
                if (s && s.dataFilter) {
                    data = s.dataFilter(data, type);
                }
                if (typeof data === 'string') {
                    if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                        data = parseJSON(data);
                    } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                        $.globalEval(data);
                    }
                }
                return data;
            };

            return deferred;
        }
    };

    /**
     * ajaxForm() provides a mechanism for fully automating form submission.
     *
     * The advantages of using this method instead of ajaxSubmit() are:
     *
     * 1: This method will include coordinates for <input type="image" /> elements (if the element
     * is used to submit the form).
     * 2. This method will include the submit element's name/value data (for the element that was
     * used to submit the form).
     * 3. This method binds the submit() method to the form for you.
     *
     * The options argument for ajaxForm works exactly as it does for ajaxSubmit. ajaxForm merely
     * passes the options argument along after properly binding events for submit elements and
     * the form itself.
     */
    $.fn.ajaxForm = function(options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);

        // in jQuery 1.3+ we can fix mistakes with the ready state
        if (!options.delegation && this.length === 0) {
            var o = { s: this.selector, c: this.context };
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing ajaxForm');
                $(function() {
                    $(o.s,o.c).ajaxForm(options);
                });
                return this;
            }
            // is your DOM ready? http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }

        if ( options.delegation ) {
            $(document)
                .off('submit.form-plugin', this.selector, doAjaxSubmit)
                .off('click.form-plugin', this.selector, captureSubmittingElement)
                .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
                .on('click.form-plugin', this.selector, options, captureSubmittingElement);
            return this;
        }

        return this.ajaxFormUnbind()
            .bind('submit.form-plugin', options, doAjaxSubmit)
            .bind('click.form-plugin', options, captureSubmittingElement);
    };

// private event handlers
    function doAjaxSubmit(e) {
        /*jshint validthis:true */
        var options = e.data;
        if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
            e.preventDefault();
            $(this).ajaxSubmit(options);
        }
    }

    function captureSubmittingElement(e) {
        /*jshint validthis:true */
        var target = e.target;
        var $el = $(target);
        if (!($el.is("[type=submit],[type=image]"))) {
            // is this a child element of the submit el? (ex: a span within a button)
            var t = $el.closest('[type=submit]');
            if (t.length === 0) {
                return;
            }
            target = t[0];
        }
        var form = this;
        form.clk = target;
        if (target.type == 'image') {
            if (e.offsetX !== undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') {
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top;
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop;
            }
        }
        // clear form vars
        setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
    }


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
    $.fn.ajaxFormUnbind = function() {
        return this.unbind('submit.form-plugin click.form-plugin');
    };

    /**
     * formToArray() gathers form element data into an array of objects that can
     * be passed to any of the following ajax functions: $.get, $.post, or load.
     * Each object in the array has both a 'name' and 'value' property. An example of
     * an array for a simple login form might be:
     *
     * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
     *
     * It is this array that is passed to pre-submit callback functions provided to the
     * ajaxSubmit() and ajaxForm() methods.
     */
    $.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (this.length === 0) {
            return a;
        }

        var form = this[0];
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        if (!els) {
            return a;
        }

        var i,j,n,v,el,max,jmax;
        for(i=0, max=els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n || el.disabled) {
                continue;
            }

            if (semantic && form.clk && el.type == "image") {
                // handle image inputs on the fly when semantic == true
                if(form.clk == el) {
                    a.push({name: n, value: $(el).val(), type: el.type });
                    a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
                }
                continue;
            }

            v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                if (elements)
                    elements.push(el);
                for(j=0, jmax=v.length; j < jmax; j++) {
                    a.push({name: n, value: v[j]});
                }
            }
            else if (feature.fileapi && el.type == 'file') {
                if (elements)
                    elements.push(el);
                var files = el.files;
                if (files.length) {
                    for (j=0; j < files.length; j++) {
                        a.push({name: n, value: files[j], type: el.type});
                    }
                }
                else {
                    // #180
                    a.push({ name: n, value: '', type: el.type });
                }
            }
            else if (v !== null && typeof v != 'undefined') {
                if (elements)
                    elements.push(el);
                a.push({name: n, value: v, type: el.type, required: el.required});
            }
        }

        if (!semantic && form.clk) {
            // input type=='image' are not found in elements array! handle it here
            var $input = $(form.clk), input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type == 'image') {
                a.push({name: n, value: $input.val()});
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
        }
        return a;
    };

    /**
     * Serializes form data into a 'submittable' string. This method will return a string
     * in the format: name1=value1&amp;name2=value2
     */
    $.fn.formSerialize = function(semantic) {
        //hand off to jQuery.param for proper encoding
        return $.param(this.formToArray(semantic));
    };

    /**
     * Serializes all field elements in the jQuery object into a query string.
     * This method will return a string in the format: name1=value1&amp;name2=value2
     */
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) {
                return;
            }
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i=0,max=v.length; i < max; i++) {
                    a.push({name: n, value: v[i]});
                }
            }
            else if (v !== null && typeof v != 'undefined') {
                a.push({name: this.name, value: v});
            }
        });
        //hand off to jQuery.param for proper encoding
        return $.param(a);
    };

    /**
     * Returns the value(s) of the element in the matched set. For example, consider the following form:
     *
     * <form><fieldset>
     * <input name="A" type="text" />
     * <input name="A" type="text" />
     * <input name="B" type="checkbox" value="B1" />
     * <input name="B" type="checkbox" value="B2"/>
     * <input name="C" type="radio" value="C1" />
     * <input name="C" type="radio" value="C2" />
     * </fieldset></form>
     *
     * var v = $('input[type=text]').fieldValue();
     * // if no values are entered into the text inputs
     * v == ['','']
     * // if values entered into the text inputs are 'foo' and 'bar'
     * v == ['foo','bar']
     *
     * var v = $('input[type=checkbox]').fieldValue();
     * // if neither checkbox is checked
     * v === undefined
     * // if both checkboxes are checked
     * v == ['B1', 'B2']
     *
     * var v = $('input[type=radio]').fieldValue();
     * // if neither radio is checked
     * v === undefined
     * // if first radio is checked
     * v == ['C1']
     *
     * The successful argument controls whether or not the field element must be 'successful'
     * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
     * The default value of the successful argument is true. If this value is false the value(s)
     * for each element is returned.
     *
     * Note: This method *always* returns an array. If no valid value can be determined the
     * array will be empty, otherwise it will contain one or more values.
     */
    $.fn.fieldValue = function(successful) {
        for (var val=[], i=0, max=this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
                continue;
            }
            if (v.constructor == Array)
                $.merge(val, v);
            else
                val.push(v);
        }
        return val;
    };

    /**
     * Returns the value of the field element.
     */
    $.fieldValue = function(el, successful) {
        var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
        if (successful === undefined) {
            successful = true;
        }

        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
            (t == 'checkbox' || t == 'radio') && !el.checked ||
            (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
            tag == 'select' && el.selectedIndex == -1)) {
            return null;
        }

        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) {
                return null;
            }
            var a = [], ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index+1 : ops.length);
            for(var i=(one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v) { // extra pain for IE...
                        v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                    }
                    if (one) {
                        return v;
                    }
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val();
    };

    /**
     * Clears the form data. Takes the following actions on the form's input fields:
     * - input text fields will have their 'value' property set to the empty string
     * - select elements will have their 'selectedIndex' property set to -1
     * - checkbox and radio inputs will have their 'checked' property set to false
     * - inputs of type submit, button, reset, and hidden will *not* be effected
     * - button elements will *not* be effected
     */
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $('input,select,textarea', this).clearFields(includeHidden);
        });
    };

    /**
     * Clears the selected form elements.
     */
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
        return this.each(function() {
            var t = this.type, tag = this.tagName.toLowerCase();
            if (re.test(t) || tag == 'textarea') {
                this.value = '';
            }
            else if (t == 'checkbox' || t == 'radio') {
                this.checked = false;
            }
            else if (tag == 'select') {
                this.selectedIndex = -1;
            }
            else if (t == "file") {
                if (/MSIE/.test(navigator.userAgent)) {
                    $(this).replaceWith($(this).clone(true));
                } else {
                    $(this).val('');
                }
            }
            else if (includeHidden) {
                // includeHidden can be the value true, or it can be a selector string
                // indicating a special test; for example:
                // $('#myForm').clearForm('.special:hidden')
                // the above would clean hidden inputs that have the class of 'special'
                if ( (includeHidden === true && /hidden/.test(t)) ||
                    (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
                    this.value = '';
            }
        });
    };

    /**
     * Resets the form data. Causes all form elements to be reset to their original value.
     */
    $.fn.resetForm = function() {
        return this.each(function() {
            // guard against an input with the name of 'reset'
            // note that IE reports the reset function as an 'object'
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset();
            }
        });
    };

    /**
     * Enables or disables any matching elements.
     */
    $.fn.enable = function(b) {
        if (b === undefined) {
            b = true;
        }
        return this.each(function() {
            this.disabled = !b;
        });
    };

    /**
     * Checks/unchecks any matching checkboxes or radio buttons and
     * selects/deselects and matching option elements.
     */
    $.fn.selected = function(select) {
        if (select === undefined) {
            select = true;
        }
        return this.each(function() {
            var t = this.type;
            if (t == 'checkbox' || t == 'radio') {
                this.checked = select;
            }
            else if (this.tagName.toLowerCase() == 'option') {
                var $sel = $(this).parent('select');
                if (select && $sel[0] && $sel[0].type == 'select-one') {
                    // deselect all other options
                    $sel.find('option').selected(false);
                }
                this.selected = select;
            }
        });
    };

// expose debug var
    $.fn.ajaxSubmit.debug = false;

// helper fn for console logging
    function log() {
        if (!$.fn.ajaxSubmit.debug)
            return;
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
        if (window.console && window.console.log) {
            window.console.log(msg);
        }
        else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    }

})(jQuery);;//http://phpjs.org/functions/number_format/
function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s,
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
var consoleDebug = 0; // for debugging only
var javascriptIncluded = 1; // check if javascript is working in current browser and then, we show or hide parts of the page using css
var itemMaxSize = number_format('10000');
var itemMaxSizeNoFormat = Number('10000');
var threadMaxSize = number_format('5000');
var threadMaxSizeNoFormat = Number('5000');
var domainFull = fullDomain = 'http://www.mstaml.com';
var domain = 'mstaml.com';
var hostPath = '';
var page = '';
var updateDateTimeIntervalsTimeOut = Number('15');
var isMobile = Number('0');
var iThumbWidth = Number('64');
var iMaxSize = Number('5242880');
var iMaxCount = Number('30');
var iMaxTotalSize = Number('31457280');
var iThumbHeight = Number('64');
var thumbHeight = Number('64');
var threadStreamInterval = Number('60');
var maxThreadStreamInterval = Number('6000');
var minThreadStreamInterval = Number('60');
var messageStreamInterval = Number('30');
var maxMessageStreamInterval = Number('600');
var minMessageStreamInterval = Number('30');
var streamTypes = eval('["","إعلان جديد","رد على الإعلان","موضوع جدبد","رد على الموضوع","تعديل الإعلان","بحث في السوق","عملية بيع","عضو جديد","عضو مميز جديد","معروف لدينا","عدد الرسائل الداخلية في الساعة السابقة","عدد الإعلانات الجديدة في الساعة الماضية","عدد المواضيع الجديدة في الساعة الماضية","تم تثبيت الإعلان","عدد الصفحات خلال الدقيقة السابقة","حصل على تخفيض الأعضاء القدماء"]');
var streamInterval = Number('5');
var streamKeep = Number('3600');
var maxStreamInterval = Number('30');
var minStreamInterval = Number('2');
var streamThumbHeight = Number('64');
var streamThumbWidth = Number('64');
var streamAndAutoPlay; // this is used for swfsound maybe
var numberOfMessagesInDayForSpecialOrMerchantUser = Number('200');
var numberOfMessagesInDayForDefaultUser = Number('100');
var maxFilesOfMerchantOrSpecialUser = Number('100');
var maxFilesOfDefaultUser = Number('10');
var maxImageSizeSpecial = Number('1000000');
var ShopMaxCustomizePage = Number('100000');
var ShopMaxAbout = Number('100000');
var widthImageShop = Number('450');
var timeBetweenTwoThreads = Number('5');
var hindiDigits = '\u0660-\u0669';
var arabicCharacters = 'ابتثجحخدذرزسشصضطظعغفقكلمنهويأإآىئؤءة';
var arabicDiacritics = 'ًٌٍَُِّْ';
var charPattern = '[a-zA-Z0-9_\\-' + hindiDigits + arabicCharacters + arabicDiacritics + ']';
var emailPattern = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+[a-zA-Z0-9]{2,4}$/;
var timeBetweenToMessages = Number('15');
var timeBetweenTwoItemsForUserWithoutMobile = Number('1');
var timeBetweenTowMessagesForUserWithoutMobile = Number('1');
var timeBetweenTwoThreadsForUserWithoutMobile = Number('1');
var numberOfAddedItemsForDefaultUser = Number('20');
var numberOfAddedItemsForSpecialUser = Number('100');
var numberOfAddedItemsForMerchantUser = Number('1000');var Utils = {
	/**
	 * @returns {boolean}
	 */
	IsTouchDevice : function()
	{
		return !!('ontouchstart' in window) // works on most browsers
			|| !!('onmsgesturechange' in window); // works on ie10
	},

	FixedPositionIsSupported : function ()
	{
		var container = document.body;

		if (document.createElement && container && container.appendChild && container.removeChild) {
			var el = document.createElement('div');

			if (!el.getBoundingClientRect) return null;

			el.innerHTML = 'x';
			el.style.cssText = 'position:fixed;top:100px;';
			container.appendChild(el);

			var originalHeight = container.style.height,
				originalScrollTop = container.scrollTop;

			container.style.height = '3000px';
			container.scrollTop = 200;

			var elementTop = el.getBoundingClientRect().top;
			container.style.height = originalHeight;

			var isSupported = (elementTop === 100);
			container.removeChild(el);
			container.scrollTop = originalScrollTop;

			return isSupported;
		}
		return null;
	},

	"EscapeHTML" : function (text){ // used for escaping descriptions
		return ('' + (text == null ? '' : text)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quote;");
	},
    "UnEscapeHTML" : function (text){ // used for escaping descriptions
        return ('' + (text == null ? '' : text)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quote;");
    },

    fixedEncodeURI : function (str) {
        return encodeURI(str).replace(/%25/g, '%').replace(/%5B/g, '[').replace(/%5D/g, ']');
    },

	"ArrayIndexOf" : function(a, o){ // this is for IE missing indexOf function available for Firefox
		if(Array.indexOf){
			return a.indexOf(o);
		}else{
			for(var i = 0; i < a.length; i++){
				if(a[i] === o){ return i; }
			}
			return -1;
		}
	},

	"Log" : function(data){
		if(consoleDebug && console && console.log){
			console.log(data);
		}
	},
	/**
	 * to use this function you have to:
	 * for link of tab Set:
	 * 		data-tabs-container-id
	 * 		data-tab-show-class
	 * 		tab-js class
	 * for tab show part Set:
	 *		tabShow-js class
	 *  	special class to but in data-tab-show-class in link tab
	 * @param selectedTab
	 * @param afterAction
	 */
	"ToggleTabs" : function(selectedTab, afterAction)
	{
		var unClickedTabClass = "fN";
		var clickedTabClass = "fB";
		var tabsContainer = $('#' + selectedTab.data('tabs-container-id'));
		var selectedTabShow = tabsContainer.find('.'+ selectedTab.data('tab-show-class'));
		tabsContainer.find('.tab-js').removeClass(clickedTabClass).addClass(unClickedTabClass);
		selectedTab.removeClass(unClickedTabClass).addClass(clickedTabClass);
		tabsContainer.find('.tabShow-js').addClass('none');
		selectedTabShow.removeClass('none');
		if(typeof afterAction == 'function')
		{
			afterAction();
		}
	},

	"Dir" : function(data){
		if(consoleDebug){
			if(console && console.dir){
				console.dir(data);
			}else if(console && console.info){
				console.info(data);
			}

		}
	},

	"ParseQuery" : function(qs){ // this will take full url and return an object with var names and last value
		var params = {};
		jQuery.each(qs.match(/\?(.*)$/)[1].split('&'), function(i, p){
			p = p.split('=');
			params[p[0]] = decodeURIComponent(p[1]).replace(/\+/g,' ');
		});
		return params;
	},

	"Trim" : function (string, replaceNbsp){
		var str = '' + string;
		if(replaceNbsp)
		{
			var re = new RegExp(String.fromCharCode(160), "g");
			str = str.replace(re, ' ')
		}
		return ('' + str).replace(/^\s+|\s+$/g, "");
	},

	"nl2br" : function(string){
		return ('' + string).replace(/(\r\n|\n\r|\n|\r)/g, "<br>$1");
	},

	"FindObjectInArray" : function (arrayOfObjects, criteriaObject, startFrom){
		Utils.Dir(criteriaObject);
		startFrom = startFrom ? startFrom : 0;
		for(var i = startFrom; i < arrayOfObjects.length; ++i){
			var criteria = 1;
			for(var index in criteriaObject){
				//noinspection JSUnfilteredForInLoop
				if(arrayOfObjects[i][index] != criteriaObject[index]){
					criteria = 0;
				}
			}
			if(criteria){ return i; }
		}
		return -1;
	},

	"DateFormat" : function (datetime){
		if(datetime){
			var t = ('' + datetime).split(/\D+/);
			return t[3] + ':' + t[4] + ':' + t[5] + ' ' + t[0] + '.' + t[1] + '.' + t[2];
		}else{
			return "";
		}
	},

	"RemovePX" : function(text){
		text = text + '';
		return text.substr(0, text.length - 2);
	},

	SetSelectOptionByValue : function(selectTag, optionValue){
		for(var i = 0; i < selectTag.length; ++i){
			if(selectTag.options[i].value == optionValue){
				selectTag.selectedIndex = i;
				return;
			}
		}
	},

	hexDigits : ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"],
/*
	rgb2hex : function(rgb) {
		// "rgba(0, 0, 0, 0)" or "rgb(0, 0, 0)"
		rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+)?\)$/);
		if(typeof rgb[1] == 'undefined')
		{
			// #FFFFFF
			rgb = rgb.match(/^#([0-1a-fA-F]{2})([0-1a-fA-F]{2})([0-1a-fA-F]{2})([0-1a-fA-F]{2})?$/);
		}
		if(typeof rgb[1] == 'undefined')
		{
			// #FFF
			rgb = rgb.match(/^#([0-1a-fA-F])([0-1a-fA-F])([0-1a-fA-F])([0-1a-fA-F])?$/);
		}
		if(typeof rgb[1] == 'undefined')
		{
			return '';
		}
		return "#" + Utils.hex(rgb[1]) + Utils.hex(rgb[2]) + Utils.hex(rgb[3]) + (typeof rgb[4] != 'undefined' ? Utils.hex(rgb[4]) : '');
	},
*/
	hex : function(x) {
		return isNaN(x) ? "00" : Utils.hexDigits[(x - x % 16) / 16] + Utils.hexDigits[x % 16];
	},

	inArray : function(needle, haystack) {
		var length = haystack.length;
		for(var i = 0; i < length; i++) {
			if(haystack[i] == needle)
			{
				return true;
			}
		}
		return false;
	},
	/**
	 * we use this function to write one cookie for mstaml and the shop of mstaml
	 * @param name
	 * @param value
	 * @param expire
	 * @constructor
	 */
	SetCookie : function(name, value, expire)
	{
		var expireStr = '';
		if(expire != 0){
			var exdate = new Date();
			exdate.setDate(exdate.getDate() + expire);
			expireStr = ";expires=" + exdate;
		}
		document.cookie = name + "=" + encodeURIComponent(value) + expireStr + ";path=/;domain=." + domain;
	},

	/**
	 * @return null|string
	 */
	GetCookie : function(name)
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i < ca.length; i++){
			var c = ca[i];
			while(c.charAt(0)==' '){ c = c.substring(1, c.length); }
			if(c.indexOf(nameEQ) == 0){ return decodeURIComponent(c.substring(nameEQ.length, c.length)); }
		}
		return null;
	},

	getParam : function (name)
	{
		var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
		return (results && results.length == 2) ? results[1] : 0;
	},

	/* check textarea size  */
	CheckTextArea : function(field, max)
	{
		if(field.value.length > max){
			Forms.ShowError('عفواً.. يجب أن لا يزيد عدد حروف هذه الخانة عن ' + max, true, $(field), function(){
				field.value = field.value.substring(0, max);
			});
		}
	},
	/**
	 *
	 * @returns {string}
	 */
	DetectBrowser : function()
	{
		var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
		// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
		var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
		var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
		// At least Safari 3+: "[object HTMLElementConstructor]"
		var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
		var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

		if(isFirefox){ return 'FF'; }
		else if(isOpera){ return 'OP'; }
		else if(isIE){ return 'IE'; }
		else if(isChrome){ return 'CM'; }
		else if(isSafari){ return 'SF'; }
		else { return 'UK';}
	},

	ProcessDates : function(containers)
	{
		Utils.UpdateNow();
		var func = function(){
			if(!$(this).attr('time'))
			{
				if($(this).hasClass('dateSwitch'))
				{
					$(this).addClass('arDTI-js arDTWZT-js');
					$(this).click(function(){
						var tmp = $(this).attr('title');
						$(this).attr('title', $(this).html());
						$(this).html(tmp);
						$(this).toggleClass("arDTIT-js arDTWZT-js arDTI-js arDTWZ-js");
					});
				}
				var date;
				if($(this).attr('data-dateTime'))
				{
					date = Utils.makeDate($(this).attr('data-dateTime'));
				}
				else
				{
					date = Utils.makeDate($(this).html());
				}
				//TODO check for error date
				$(this).attr('time',parseInt(date.getTime()/1000));
				if($(this).hasClass('arDTWZ-js'))
				{
					$(this).html(Utils.getArabicDateTime(date));
				}
				else if($(this).hasClass('arDTWZWTZN-js'))
				{
					var offset = date.getTimezoneOffset();
					var timeZoneName = 'بتوقيت ';
					if(offset == -180)
					{
						timeZoneName +=  'مكة المكرمة';
					}
					else if(offset == 0)
					{
						timeZoneName +=  'جرنتش';
					}
					else
					{
						timeZoneName += 'GMT' + Utils.GetTimeHMFromOffset(offset);
					}
					$(this).html(Utils.getArabicDateTime(date) + ' ' + timeZoneName);
				}
				else if($(this).hasClass('enDTWZ-js'))
				{
					$(this).html(Utils.getEnglishDateTime(date));
				}
				else if($(this).hasClass('arDTWZT-js'))
				{
					if($(this).attr('title'))
					{
						$(this).attr('title','[' + Utils.getArabicDateTime(date) + '] ' + $(this).attr('title'));
					}
					else
					{
						$(this).attr('title',Utils.getArabicDateTime(date));
					}
				}
			}
			if(
				$(this).hasClass('arDTI-js')
				|| $(this).hasClass('arDTIT-js')
			)
			{
				var interval = Utils.getArabicDateTimeInterval($(this).attr('time'));
				if($(this).hasClass('arDTI-js'))
				{
					$(this).html(interval);
				}
				else if($(this).hasClass('arDTIT-js'))
				{
					$(this).attr('title',interval);
				}
			}
		};
		/*
			enDTWZ = englishDateTimeWithZone
			arDTWZ = arabicDateTimeWithZone
			arDTWZWTZN = arabicDateTimeWithZoneWithTimeZoneName
			arDTWZT = arabicDateTimeWithZoneTitle
			arDTI = arabicDateTimeInterval
			arDTIT = arabicDateTimeIntervalTitle
		 */
		var dateClasses = 'span.dateSwitch:not([time]), .enDTWZ-js:not([time]), .arDTWZ-js:not([time]), .arDTWZWTZN-js:not([time]), .arDTWZT-js:not([time]), .arDTI-js, .arDTIT-js';
		if(typeof containers == 'undefined')
		{
			$(dateClasses).each(func);
		}
		else
		{
			containers.each(function()
			{
				$(this).find(dateClasses).each(func);
			});
		}
	},

	makeDate : function(date){
		var dateAndTimeArray = date.split(' ');

		var dateArray = dateAndTimeArray[0].split('-');

		var year = parseInt(dateArray[0], 10);
		var month = parseInt(dateArray[1], 10) - 1;
		var day = parseInt(dateArray[2], 10);

		var timeArray = dateAndTimeArray[1].split(':');

		var hours = parseInt(timeArray[0], 10);
		var minutes = parseInt(timeArray[1], 10);
		var seconds = parseInt(timeArray[2], 10);

		return new Date(Date.UTC(year, month, day, hours, minutes, seconds));
	},

	getArabicDateTime : function(date)
	{
		return	("0" + date.getHours().toString()).slice(-2)
				+ ':'
				+ ("0" + date.getMinutes().toString()).slice(-2)
				+ ':'
				+ ("0" + date.getSeconds().toString()).slice(-2)
				+ ' '
				+ date.getFullYear()
				+ '.'
				+ ("0" + (date.getMonth() + 1).toString()).slice(-2)
				+ '.'
				+ ("0" + date.getDate().toString()).slice(-2);
	},

	getEnglishDateTime : function(date)
	{
		return	date.getFullYear()
			+ '-'
			+ ("0" + (date.getMonth() + 1).toString()).slice(-2)
			+ '-'
			+ ("0" + date.getDate().toString()).slice(-2)
			+ ' '
			+ ("0" + date.getHours().toString()).slice(-2)
			+ ':'
			+ ("0" + date.getMinutes().toString()).slice(-2)
			+ ':'
			+ ("0" + date.getSeconds().toString()).slice(-2);
	},

	getArabicDateTimeInterval : function(time){
		var interval = window.now - time;
		var beforeAfter = (interval < 0 ? 'بعد ' : 'قبل ');
		interval = Math.abs(interval);
		if(interval < 60){				return beforeAfter + Utils.getDatePlural(interval, 'ثانية');
		}else if(interval < 3600){		return beforeAfter + Utils.getDatePlural(parseInt(interval / 60), 'دقيقة') /*+ Utils.getDatePlural(interval % 60, 'ثانية', 1)*/;
		}else if(interval < 86400){		return beforeAfter + Utils.getDatePlural(parseInt(interval / 3600), 'ساعة') + Utils.getDatePlural(parseInt((interval % 3600) / 60), 'دقيقة', 1);
		}else if(interval < 604800){	return beforeAfter + Utils.getDatePlural(parseInt(interval / 86400), 'يوم') + Utils.getDatePlural(parseInt((interval % 86400) / 3600), 'ساعة', 1);
		}else if(interval < 2592000){	return beforeAfter + Utils.getDatePlural(parseInt(interval / 604800), 'أسبوع') + Utils.getDatePlural(parseInt((interval % 604800) / 86400), 'يوم', 1);
		}else if(interval < 31536000){	return beforeAfter + Utils.getDatePlural(parseInt(interval / 2592000), 'شهر') + Utils.getDatePlural(parseInt ((interval % 2592000) / 86400), 'يوم', 1);
		}else{							return beforeAfter + Utils.getDatePlural(parseInt(interval / 31536000), 'سنة') + Utils.getDatePlural(parseInt ((interval % 31536000) / 2592000), 'شهر', 1);
		}
	},

	getDatePlural : function(times, word, and){
		if(typeof and == 'undefined'){and = 0;}
		var words = {
			'ثانية':['ثانيتين', 'ثوان'],
			'دقيقة':['دقيقتين', 'دقائق'],
			'ساعة':['ساعتين', 'ساعات'],
			'يوم':['يومين', 'أيام'],
			'أسبوع':['أسبوعين', 'أسابيع'],
			'شهر':['شهرين', 'أشهر'],
			'سنة':['سنتين', 'سنوات']
		};
		if(times == 0){ return and ? '' : times + ' ' + word; }
		else if(times == 1){ return (and ? ' و' : '') + word; }
		else if(times == 2){ return (and ? ' و' : '') + words[word][0]; }
		else if(times < 11){ return (and ? ' و' : '') + times + ' ' + words[word][1]; }
		else{ return (and ? ' و' : '') + times + ' ' + word; }
	},

	UpdateNow : function(now)
	{
		if(now)
		{
			var newNow = parseInt(new Date(now).getTime()/1000);
			//some times we get now < window.now because the ajax come from cache of browser
			if(newNow > window.now)
			{
				window.now = parseInt(new Date(now).getTime()/1000);
				window.deviceTimeStamp = parseInt((new Date()).getTime()/1000);
			}
		}
		else
		{
			if(typeof window.deviceTimeStamp == 'undefined')
			{
				window.deviceTimeStamp = parseInt((new Date()).getTime()/1000);
			}
			else
			{
				var newstamp = parseInt((new Date()).getTime()/1000);
				window.now += newstamp - window.deviceTimeStamp;
				window.deviceTimeStamp = newstamp;
			}
		}

	},
	/**
	 *
	 * @param offset
	 * @returns {string}
	 * @constructor
	 */
	GetTimeHMFromOffset : function(offset){
			return (offset < 0 ? '+' : '-')
				+ ("0" + parseInt(Math.abs(offset)/60).toString()).slice(-2)
				+ ':'
				+ ("0" + parseInt(Math.abs(offset)%60).toString()).slice(-2);
	},

	showHiddenInfo : function(containers)
	{
		var func = function(){
			var tmp = $(this).attr('title');
			$(this).removeAttr( "title" );
			if($(this).hasClass('hiddenMobile-js') && $(this).hasClass('separate-js'))
			{
				var mobileArray = tmp.split(' ');
				$(this).replaceWith(mobileArray[0] + ' (' + '<sapn dir="ltr">' + mobileArray[1] + '</sapn>' + ')');
			}
			else if($(this).hasClass('hiddenEmail-js'))
			{
				$(this).html('<a href="mailto:' + tmp + '">' + tmp + '</a>');
			}
			else
			{
				$(this).html(tmp);
			}
		};
		var hiddenClasses = 'span.hiddenMobile-js, span.hiddenEmail-js, span.hiddenPhone-js, span.hiddenOther-js';
		if(typeof containers == 'undefined')
		{
			$(hiddenClasses).each(func);
		}
		else
		{
			containers.each(function()
			{
				$(this).find(hiddenClasses).each(func);
			});
		}
	}

};
var Pageear = {
	// URL to small image
	pagearSmallImg: '',
	// URL to small pageear swf
	pagearSmallSwf: '/images/pageearSmall.swf',
	// URL to big image
	pagearBigImg: '',
	// URL to big pageear swf
	pagearBigSwf: '/images/pageearBig.swf',

	// Movement speed of small pageear 1-4 (2=Standard)
	speedSmall: 4,
	// Mirror image ( true | false )
	mirror: 'true',
	// Color of pagecorner if mirror is false
	pageearColor: 'FFFFFF',
	// URL to open on pageear click
	//var jumpTo = '/bas.php'
	// Browser target (new) or self (self)
	openLink: 'new',
	// Opens pageear automaticly (false:deactivated | 0.1 - X seconds to open)
	openOnLoad: false,
	// Second until pageear close after openOnLoad
	closeOnLoad: 3,
	// Set direction of pageear in left or right top browser corner (lt: left | rt: right )
	setDirection: 'lt',
	/*
	 *  Do not change anything after this line
	 */
	// Flash check vars
	requiredMajorVersion: 6,
	requiredMinorVersion: 0,
	requiredRevision: 0,
	// Copyright
	copyright: 'Webpicasso Media, www.webpicasso.de',
	// Size small peel
	thumbWidth: 100,
	thumbHeight: 100,
	// Size big peel
	bigWidth: 500,
	bigHeight: 500,
	start:false,
	// css style default x-position
	xPos: 'right',
	queryParams:function(){
		return 'pagearSmallImg='+encodeURIComponent(Pageear.pagearSmallImg)+'&pagearBigImg='+encodeURIComponent(Pageear.pagearBigImg)+
			'&pageearColor='+Pageear.pageearColor+'&jumpTo='+encodeURIComponent(Pageear.jumpTo)+'&openLink='+encodeURIComponent(Pageear.openLink)+
			'&mirror='+encodeURIComponent(Pageear.mirror)+'&copyright='+encodeURIComponent(Pageear.copyright)+'&speedSmall='+encodeURIComponent('' + Pageear.speedSmall)+
			'&openOnLoad='+encodeURIComponent('' + Pageear.openOnLoad)+'&closeOnLoad='+encodeURIComponent('' + Pageear.closeOnLoad)+'&setDirection='+encodeURIComponent(Pageear.setDirection);
	},
	Init:function(){
		if (Pageear.start && Pageear.pagearSmallImg != '' && Pageear.pagearBigImg != '')
		{
			$('.pageStripFooter').append(Pageear.writeObjects());
			openPeel();
			closePeel();
		}
	},
	writeObjects:function(){
		// Get installed flashversion
		var hasReqestedVersion = Pageear.DetectFlashVer(Pageear.requiredMajorVersion, Pageear.requiredMinorVersion, Pageear.requiredRevision);

		var xPosBig;
		// Check direction
		if(Pageear.setDirection == 'lt') {
			xPosBig = 'left:-1000px';
			Pageear.xPos = 'left';
		} else {
			xPosBig = 'right:1000px';
			Pageear.xPos = 'right';
		}

		// Write div layer for big swf
		var str;
		str = '<div id="bigDiv" style="position:absolute;width:'+ Pageear.bigWidth +'px;height:'+ Pageear.bigHeight +'px;z-index:9999;'+xPosBig+';top:-1000px;">';
		// Check if flash exists/ version matched
		if (hasReqestedVersion) {
			str += Pageear.AC_FL_RunContent(
				"src", Pageear.pagearBigSwf+'?'+ Pageear.queryParams(),
				"width", Pageear.bigWidth,
				"height", Pageear.bigHeight,
				"align", "middle",
				"id", "bigSwf",
				"quality", "high",
				"bgcolor", "#FFFFFF",
				"name", "bigSwf",
				"wmode", "transparent",
				"allowScriptAccess","always",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		} else {  // otherwise do nothing or write message ...
			//document.write('no flash installed');  // non-flash content
		}

		// Close div layer for big swf
		str +='</div>';

		// Write div layer for small swf
		str +='<div id="thumbDiv" style="position:absolute;width:'+ Pageear.thumbWidth +'px;height:'+ Pageear.thumbHeight +'px;z-index:9999;'+Pageear.xPos+':0px;top:0px;">';

		// Check if flash exists/ version matched
		if (hasReqestedVersion) {
			str += Pageear.AC_FL_RunContent(
				"src", Pageear.pagearSmallSwf+'?'+ Pageear.queryParams(),
				"width", Pageear.thumbWidth,
				"height", Pageear.thumbHeight,
				"align", "middle",
				"id", "bigSwf",
				"quality", "high",
				"bgcolor", "#FFFFFF",
				"name", "bigSwf",
				"wmode", "transparent",
				"allowScriptAccess","always",
				"type", "application/x-shockwave-flash",
				'codebase', 'http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab',
				"pluginspage", "http://www.adobe.com/go/getflashplayer"
			);
		} else {  // otherwise do nothing or write message ...
			//document.write('no flash installed');  // non-flash content
		}

		str +='</div>';
		return str;
	},
	// Flash Player Version Detection - Rev 1.5
	// Detect Client Browser type
	// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
	isIE:!!((navigator.appVersion.indexOf("MSIE") != -1)),
	isWin:!!((navigator.appVersion.toLowerCase().indexOf("win") != -1)),
	isOpera: !!((navigator.userAgent.indexOf("Opera") != -1)),
	ControlVersion:function(){
		var version;
		var axo;
		//var e;

		// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

		try {
			// version will be set for 7.X or greater players
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			//noinspection JSUnresolvedFunction
			version = axo.GetVariable("$version");
		} catch (e) {
		}

		if (!version)
		{
			try {
				// version will be set for 6.X players only
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");

				// installed player is some revision of 6.0
				// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
				// so we have to be careful.

				// default to the first public version
				//noinspection JSUnusedAssignment
				version = "WIN 6,0,21,0";

				// throws if AllowScripAccess does not exist (introduced in 6.0r47)
				axo.AllowScriptAccess = "always";

				// safe to call for 6.0r47 or greater
				//noinspection JSUnresolvedFunction
				version = axo.GetVariable("$version");

			} catch (e) {
			}
		}

		if (!version)
		{
			try {
				// version will be set for 4.X or 5.X player
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
				//noinspection JSUnresolvedFunction
				version = axo.GetVariable("$version");
			} catch (e) {
			}
		}

		if (!version)
		{
			try {
				// version will be set for 3.X player
				//noinspection JSUnusedAssignment
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
				version = "WIN 3,0,18,0";
			} catch (e) {
			}
		}

		if (!version)
		{
			try {
				// version will be set for 2.X player
				//noinspection JSUnusedAssignment
				axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				version = "WIN 2,0,0,11";
			} catch (e) {
				version = -1;
			}
		}

		return version;
	},
	/**
	 * JavaScript helper required to detect Flash Player PlugIn version information
	 * @returns {number}
	 */
	GetSwfVer:function(){
		// NS/Opera version >= 3 check for Flash plugin in plugin array
		var flashVer = -1;
		if (navigator.plugins != null && navigator.plugins.length > 0) {
			if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
				var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
				var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
				var descArray = flashDescription.split(" ");
				var tempArrayMajor = descArray[2].split(".");
				var versionMajor = tempArrayMajor[0];
				var versionMinor = tempArrayMajor[1];
				var tempArrayMinor;
				if ( descArray[3] != "" ) {
					tempArrayMinor = descArray[3].split("r");
				} else {
					tempArrayMinor = descArray[4].split("r");
				}
				var versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
				flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
			}
		}
		// MSN/WebTV 2.6 supports Flash 4
		else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
		// WebTV 2.5 supports Flash 3
		else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
		// older WebTV supports Flash 2
		else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
		else if ( Pageear.isIE && Pageear.isWin && !Pageear.isOpera ) {
			flashVer = Pageear.ControlVersion();
		}
		return flashVer;
	},
	// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
	/**
	 *
	 * @param reqMajorVer
	 * @param reqMinorVer
	 * @param reqRevision
	 * @returns {boolean}
	 */
	DetectFlashVer:function(reqMajorVer, reqMinorVer, reqRevision){
		var versionStr = Pageear.GetSwfVer();
		if (versionStr == -1 ) {
			return false;
		} else if (versionStr != 0) {
			var versionArray;
			if(Pageear.isIE && Pageear.isWin && !Pageear.isOpera) {
				// Given "WIN 2,0,0,11"
				var tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
				var tempString        = tempArray[1];			// "2,0,0,11"
				versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
			} else {
				versionArray      = versionStr.split(".");
			}
			var versionMajor      = versionArray[0];
			var versionMinor      = versionArray[1];
			var versionRevision   = versionArray[2];

			// is the major.revision >= requested major.revision AND the minor version >= requested minor
			if (versionMajor > parseFloat(reqMajorVer)) {
				return true;
			} else if (versionMajor == parseFloat(reqMajorVer)) {
				if (versionMinor > parseFloat(reqMinorVer))
					return true;
				else if (versionMinor == parseFloat(reqMinorVer)) {
					if (versionRevision >= parseFloat(reqRevision))
						return true;
				}
			}
			return false;
		}
		return false;
	},
	AC_AddExtension:function(src, ext){
		if (src.indexOf('?') != -1)
			return src.replace(/\?/, ext+'?');
		else
			return src + ext;
	},
	/**
	 *
	 * @param objAttrs
	 * @param params
	 * @param embedAttrs
	 * @returns {string}
	 */
	AC_Generateobj:function(objAttrs, params, embedAttrs){
		var str = '';
		var i;
		if (Pageear.isIE && Pageear.isWin && !Pageear.isOpera)
		{
			str += '<object ';
			for (i in objAttrs)
			{
				//noinspection JSUnfilteredForInLoop
				str += i + '="' + objAttrs[i] + '" ';
			}
			for (i in params)
			{
				//noinspection JSUnfilteredForInLoop
				str += '><param name="' + i + '" value="' + params[i] + '" /> ';
			}
			str += '></object>';
		} else {
			str += '<embed ';
			for (i in embedAttrs)
			{
				//noinspection JSUnfilteredForInLoop
				str += i + '="' + embedAttrs[i] + '" ';
			}
			str += '> </embed>';
		}
		return str;
//		document.write(str);
	},
	/**
	 *
	 * @returns {string}
	 */
	AC_FL_RunContent:function(){
		var ret =
			Pageear.AC_GetArgs
				(  arguments, "", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
					, "application/x-shockwave-flash"
				);
		return Pageear.AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
	},
	AC_GetArgs:function(args, ext, srcParamName, classid, mimeType){
		var ret = {};
		ret.embedAttrs = {};
		ret.params = {};
		ret.objAttrs = {};
		for (var i=0; i < args.length; i=i+2){
			var currArg = args[i].toLowerCase();

			switch (currArg){
				case "classid":
					break;
				case "pluginspage":
					ret.embedAttrs[args[i]] = args[i+1];
					break;
				case "src":
				case "movie":
					args[i+1] = Pageear.AC_AddExtension(args[i+1], ext);
					ret.embedAttrs["src"] = args[i+1];
					ret.params[srcParamName] = args[i+1];
					break;
				case "onafterupdate":
				case "onbeforeupdate":
				case "onblur":
				case "oncellchange":
				case "onclick":
				case "ondblClick":
				case "ondrag":
				case "ondragend":
				case "ondragenter":
				case "ondragleave":
				case "ondragover":
				case "ondrop":
				case "onfinish":
				case "onfocus":
				case "onhelp":
				case "onmousedown":
				case "onmouseup":
				case "onmouseover":
				case "onmousemove":
				case "onmouseout":
				case "onkeypress":
				case "onkeydown":
				case "onkeyup":
				case "onload":
				case "onlosecapture":
				case "onpropertychange":
				case "onreadystatechange":
				case "onrowsdelete":
				case "onrowenter":
				case "onrowexit":
				case "onrowsinserted":
				case "onstart":
				case "onscroll":
				case "onbeforeeditfocus":
				case "onactivate":
				case "onbeforedeactivate":
				case "ondeactivate":
				case "type":
				case "codebase":
				case "id":
					ret.objAttrs[args[i]] = args[i+1];
					break;
				case "width":
				case "height":
				case "align":
				case "vspace":
				case "hspace":
				case "class":
				case "title":
				case "accesskey":
				case "name":
				case "tabindex":
					ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
					break;
				default:
					ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
			}
		}
		ret.objAttrs["classid"] = classid;
		if (mimeType) ret.embedAttrs["type"] = mimeType;
		return ret;
	}
};
/*these two functions related to Pageear object but putted here because they called from somewhere I don't know exactly (flash object I think).*/
function openPeel(){
	document.getElementById('bigDiv').style.top = '0px';
	//	document.getElementById('bigDiv').style[xPos] = '-1px'; // because of RTL IEs I changed it to 0 in the next line
	document.getElementById('bigDiv').style[Pageear.xPos] = '0px';
	document.getElementById('thumbDiv').style.top = '-1000px';
}
function closePeel(){
	document.getElementById("thumbDiv").style.top = "0px";
	document.getElementById("bigDiv").style.top = "-1000px";
}
var Forms =
{
	CheckForInputFocus : function(input)
	{
		if(
			(
				(
					input.get(0).tagName.toLowerCase() == 'input'
					&& input.attr('type').toLowerCase() == 'text')
				|| input.get(0).tagName.toLowerCase() == 'textarea'
			)
			&& (
				input.val().length > 0
			)
			&& !input.hasClass('dontPutPointerOnEnd')
		)
		{
			input
				.setSelection(0, input.val().length)
				.collapseSelection(false);
		}

	},

	FocusFirstInput : function(form)
	{
		Forms.CheckForInputFocus(form.container.find(':input[type!=hidden]:enabled').eq(0).trigger('focus'));
	},
	Scroll : function(obj, afterAction)
	{
		afterAction = typeof afterAction == 'function' ? afterAction : function(){};
		var scrollTop = $(window).scrollTop();
		var scrollLeft = $(window).scrollLeft();
		var objTop = obj.offset().top;
		var objLeft = obj.offset().left + obj.width(); // this because the site is rtl
		var offset = 60; // TODO this should be synced with captcha hieght
		var doScroll = false;
		var animateTo = {};
		if(
			(objTop - scrollTop) < offset
			|| (objTop - scrollTop)  > ($(window).height() - offset)
			)
		{
			animateTo.scrollTop = parseInt(objTop) - offset;
			doScroll = true;
		}
		if(
			(objLeft - scrollLeft) < 0
			|| (objLeft - scrollLeft)  > ($(window).width())
			)
		{
			animateTo.scrollLeft = parseInt(objLeft) + (offset * 2) - $(window).width();
			doScroll = true;
		}
		if(doScroll)
		{
			//console.log(animateTo);
			$('html, body').animate(
				animateTo,
				750
			).promise().done(afterAction);
		}
		else
		{
			afterAction();
		}
	},


	DisableEnable : function(container, status)
	{
		container.find(':submit').prop('disabled', status);
	},

	ShowError : function(message, error, focus, onClose)
	{

        if(typeof onClose != 'function')
        {
            onClose = function(){};
        }
		var afterClose = function(afterAction)
		{
			if(typeof afterAction != 'function'){ afterAction = function(){}; }
			if(focus instanceof jQuery)
			{
				Forms.FocusInput(focus, function(){ onClose(afterAction); });
			}
			else
			{
				onClose(afterAction);
			}
		};

		if(Utils.FixedPositionIsSupported())
		{
			Modal.Start({
				options: {
					getContents : function(modal)
					{
						return '<p><br>'
							+ (error ? '<p class="wng m10">'+message+'</p>' : '<p class="don">'+message+'</p>')
							+ '</p>'
							+ '<p><br><a href="javascript: void(0)" class="btn okayDialog" style="float: left" onclick="Modal.modals[' + modal.id + '].close()" alt="إغلاق"></a></p>';
					},

					afterClose: afterClose
				}
			});
		}
		else
		{
			alert(message);
			afterClose(function(){});
		}
	},

	/**
	 * Returns the data object needed for SlideForm object
	 * @param kind
	 * @param data
	 * @returns object
	 */
	GetData : function(kind, data)
	{
		var options = {};
		var id, receiver, isAd, title;
		var linkFormSubmit = function(form)
		{
			form.content.find('form').on('submit', function(){
				form.Check(form);
				return false;
			});
		};
		var showSuccessMessage = function(form, message)
		{
			Forms.ShowError(message, false, null, function(afterAction)
				{
					form.Close(form, true, afterAction);
				}
			);
		};
		if(kind == 'InternalToSite' || kind === 'InternalVisitorToAd')
		{
			if(kind == 'InternalToSite')
			{
				options.titleText = '';
				options.title = $('<span></span>');
				options.closeButton = $();
				options.content = $('<div></div>');
			}
			else
			{
				options.titleText = 'مراسلة صاحب الإعلان';
			}
			options.getContents = function(form, afterAction)
			{
				var warning;
				if(kind === 'InternalToSite')
				{
					warning = '';
				}
				else //InternalVisitorToAd
				{
					warning = '<p class="wng m0">تحذير: ' + Forms.SendInternalMessage.warning + '</p>';
				}
				var str = '' +
					'<form accept-charset="utf-8" action=""  name="internalLoggedOut" method="post">' +
					'<div class="xCenter pt10"><table>' +
					'<tr>' +
					'<td class="p2" colspan="2"><p class="fB xRight pr5">الرسالة<span class="cRed">*</span></p><textarea name="body" class="w95p xRight" rows="5" onkeyup="Utils.CheckTextArea(this, threadMaxSizeNoFormat);"></textarea></td>' +
					'</tr><tr>' +
					'<td class="label w30p">الاسم<span class="cRed">*</span></td>' +
					'<td class="field w60p"><input type="text" name="name" maxlength="100" class="w200" value=""></td>' +
					'</tr><tr>' +
					'<td class="label w30p">البريد الإلكتروني<span class="cRed">*</span></td>' +
					'<td class="field w60p"><input type="text" name="email" maxlength="100" class="w200 ltr" value=""></td>' +
					'</tr><tr>' +
					'<td class="label w30p">الجوال</td>' +
					'<td class="field w60p"><input type="text" name="mobile" maxlength="100" class="w200" value=""></td>' +
					'</tr><tr><td class="xCenter pt10" colspan="2">' +
					Forms.GetCaptchaHTML(form.containerId) +
					'<br><br>' +
					warning +
					'<input type="hidden" name="formName" value="internalLoggedOut">' +
					'<input type="submit" name="add" value="  إرسال  ">' +
					'<p class="hintSmall"><span class="wng">*</span> تعني: يجب ملء الخانة</p>' +
					'</td></tr>' +
					'</table></div>' +
					'</form>';
				afterAction();
				return str;
			};
			options.afterGetContents = function(form, afterAction)
			{
				if(kind == 'InternalVisitorToAd')
				{
					form.container.find(':input[name="body"]').val('السلام عليكم،، بخصوص إعلانك رقم'+ ' ' + data.id + ' "' + data.title + '"' + ':\r\n');
				}
				/******************** SHOULD BE SYNCED WITH home/contact form ********************/
				form.Check = function(form)
				{
					Forms.DisableEnable(form.content, true);
					var checkAjaxCaseName = 'internalVisitorMessage';
					CheckAJAX.AddCase(
						checkAjaxCaseName,
						{
						method:'POST',
						url:(kind == 'InternalVisitorToAd' ? '/section/item.php' : '') + ((typeof data.id === 'undefined') ? '' : '?i=' + data.id),
						data: form.content.find('form').eq(0).serialize(),
						SuccessCallBack: function(response)
						{
							var message;
							if (response.status < 0)
							{
								var focus;
								switch (response.error.toString())
								{
									case 'InternalLoggedOutForm::VISITOR_MSG_NO_BODY_ERROR':
										message = 'عفواً.. يجب إضافة رسالتك.';
										focus = 'body';
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_NO_NAME_ERROR':
										message = 'عفواً.. يجب إضافة اسمك، وبشكل صحيح.';
										focus = 'name';
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_INVALID_EMAIL_ERROR':
										message = 'عفواً.. يجب إضافة بريدك الإلكتروني، وبشكل صحيح.';
										focus = 'email';
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_CAPTCHA_ERROR':
										message = 'عفواً.. يجب كتابة الرقم الظاهر في الصورة، وبشكل صحيح.';
										focus = 'captcha';
										Forms.ChangeCaptcha(form.containerId);
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_PER_SESSION_LIMIT_ERROR':
										message = 'عفواً.. لا يمكنك الآن إرسال أكثر من الرسائل التي أرسلتها.';
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_PER_ITEM_LIMIT_ERROR':
										message = 'عفواً.. لا يمكنك الآن إرسال أكثر من رسالتين لنفس الإعلان.';
										break;
									case 'InternalLoggedOutForm::VISITOR_MSG_LOGIN_USER_ERROR':
									case 'InternalLoggedOutForm::VISITOR_MSG_ITEM_NOT_FOUND_ERROR':
										message = 'عفواً... يجب إعادة تحميل الصفحة وذلك حتى تظهر لك الصفحة بشكل كامل';
										break;
									default:
										break;
								}
								Forms.ShowError(message, true, focus ? form.content.find(':input[name=' + focus + ']') : null);
								Forms.DisableEnable(form.content, false);
							}
							else
							{
								message = 'لقد تم الإرسال بنجاح.';
								if(kind == 'InternalToSite')
								{
									Forms.ShowError(message, false, null, function()
										{
											form.Close(form, true, function(){
												$(window).trigger("sendMessageFromShopSite");
											});
										}
									);
								}
								else
								{
									showSuccessMessage(form, message);
								}
							}
						},
						InternetOrSystemErrorCallBack : function(){
							Forms.DisableEnable(form.content, false);
						}
					});
					CheckAJAX.Start(checkAjaxCaseName);
				};
				linkFormSubmit(form);
				afterAction(form);
			};
		}
		else if (kind ==='InternalToMember' || kind === 'InternalMemberToMemberFromShop')
		{
			if(kind ==='InternalToMember')
			{
				options.titleText = 'إرسال رسالة خاصة للعضو';
				isAd = data.isAd;
				id = data.id;
				title = data.title;
			}
			else
			{
				options.titleText = '';
				options.title = $('<span></span>');
				options.closeButton = $();
				options.content = $('<div></div>');
			}
			receiver = data.receiver;
			options.getContents = function(form, afterAction)
			{
				var id = (typeof data.id === 'undefined') ? '' : data.id;
				var receiverNameHtml;
					receiverNameHtml = '<input type="hidden" name="username">';
					var senderNameHtml;
					if(kind === 'InternalMemberToMemberFromShop')
					{
						senderNameHtml ='<span class="fB xRight pr5">الاسم<span class="cRed">*</span> </span><span id="senderName-js"></span><br><br>';
					}
					else
					{
						senderNameHtml = '';
					}
				var str = '' +
					'<form accept-charset="utf-8" action="" name="internalLoggedIn' + id  + '" method="post">' +
					'<table>'+
					'<tr>'+ receiverNameHtml +
					'</tr><tr>'+
					'<td class="xCenter" colspan="2"><p class="fB xRight pr5">الرسالة<span class="cRed">*</span></p><textarea name="body" rows="10" class="w95p xRight' + '" onkeyup="Utils.CheckTextArea(this, ' + threadMaxSizeNoFormat + ');"></textarea></td>'+
					'</tr><tr><td class="pt10 xRight" colspan="2">'+ senderNameHtml +'</td>' +
					'</tr><tr><td class="xCenter pt10" colspan="2">'+
					'<input type="hidden" name="formName" value="internalLoggedIn">'+
					'<input type="submit" name="submit" value="   إرسال   ">'+
					'<p class="hintSmall"><span class="wng">*</span> تعني: يجب ملء الخانة</p>'+
					'</td></tr>'+
					'</table>'+
					'</form>';
				afterAction();
				return str;
			};
			options.afterGetContents = function(form, afterAction)
			{
				var content = '';
				form.container.find('input[name="username"]').val(receiver);
				if(kind == 'InternalMemberToMemberFromShop')
				{
					form.container.find('#senderName-js').text(data.sender);
				}
				if(id)
				{
					content = (isAd ?  'السلام عليكم،، بخصوص إعلانك رقم' :  'السلام عليكم،، بخصوص موضوعك رقم') + ' ' + id + ' "' + title + '"' + ':\r\n';
				}
				if(content)
				{
					form.container.find(':input[name="body"]').val(content);
				}
				form.Check = function(form)
				{
					Forms.DisableEnable(form.content, true);
					var checkAjaxCaseName = 'memberInternalMessage';
					CheckAJAX.AddCase(
						checkAjaxCaseName,
						{
						method:'POST',
						url: '/manage/internal.php',
						data: form.content.find('form').eq(0).serialize(),
						SuccessCallBack: function(response) {
							var message;
							if (response.status < 0)
							{
								var focus;
								switch (response.error.toString())
								{
									case 'InternalMessagesForms::INTERNAL_SEND_NO_BODY_ERROR':
										message='عفواً.. يجب إضافة الرسالة وأن لا يزيد عدد حروفها عن '+ threadMaxSize + ' حرف.';
										focus = 'body';
										break;
									case 'InternalMessagesForms::INTERNAL_SEND_TWO_MESSAGES_IN_ONE_MINUTE_ERROR':
										message='عفواً.. لا يمكنك إرسال أكثر من رسالة خلال ' + timeBetweenToMessages + ' ثانية.';
										break;
									case 'InternalMessagesForms::INTERNAL_SEND_RECEIVER_USER_NOT_FOUND':
										message='عفواً.. لا يوجد عضو بهذا الاسم، يرجى التأكد من اسم المستخدم الصحيح.';
										focus = 'username';
										break;
									case 'InternalMessagesForms::INTERNAL_SEND_NO_USERNAME_ERROR':
										message='عفواً.. يرجى تحديد اسم العضو الذي تريد الإرسال إليه.';
										focus = 'username';
										break;
									case 'InternalMessagesForms::SPECIAL_USER_LIMIT_EXCEEDED_ERROR':
										message='عفواً.. لا يمكنك إرسال أكثر من ' + numberOfMessagesInDayForSpecialOrMerchantUser + ' رسالة كل 24 ساعة.';
										break;
									case 'InternalMessagesForms::NEW_USER_LIMIT_EXCEEDED_ERROR':
										message='عفواً.. نظراً لأن عضويتك جديدة، فلا يمكنك إرسال أكثر من رسالتين خلال أول 24 ساعة.';
										break;
									case 'InternalMessagesForms::NORMAL_USER_LIMIT_EXCEEDED_ERROR':
										message='عفواً.. لا يمكنك إرسال أكثر من ' + numberOfMessagesInDayForDefaultUser + ' رسالة كل 24 ساعة.';
										break;
									case 'InternalMessagesForms::INTERNAL_SEND_TWO_MESSAGES_IN_SHORT_PERIOD_FOR_USER_WITHOUT_MOBILE_ERROR':
										message='عفوا... لا يمكنك إرسال أكثر من رسالة واحدة في ' + timeBetweenTowMessagesForUserWithoutMobile + ' ساعة لأن عضويتك مقيدة ،للحصول على كامل ميزات العضوية ننصحك '+ '<a href="/manage/update.php#activeMobile">بتفعيل جوالك.</a>';
										break;
									case 'InternalMessagesForms::USER_MUST_LOGIN_ERROR':
									case '-999':
										message = 'عفوا... يجب تسجيل الدخول أولا حتى تستطيع إرسال الرسالة.';
										break;
									default:
										break;
								}
								Forms.ShowError(message, true, focus ? form.content.find(':input[name=' + focus + ']') : null);
								Forms.DisableEnable(form.content, false);
							}
							else
							{
                                message = 'لقد تم الإرسال بنجاح. ويمكنك معاينة ومتابعة رسائلك المرسلة عن طريق صفحة الرسائل الخاصة.';
								if(kind == 'InternalMemberToMemberFromShop')
								{
									Forms.ShowError(message, false, null, function()
										{
											form.Close(form, true, function(){
												$(window).trigger("sendMessageFromShopSite");
											});
										}
									);
								}
								else
								{
									showSuccessMessage(form, message);
								}
							}
						},
						InternetOrSystemErrorCallBack : function(){
							Forms.DisableEnable(form.content, false);
						}
					});
					CheckAJAX.Start(checkAjaxCaseName);
				};

				linkFormSubmit(form);
				afterAction(form);
			};
		}
		else if(kind == 'InternalToFrMember'){}
		else if(kind == 'InternalToAdMember'){}
		else if(kind == 'InternalToShop'){}//the last three cases get the case of the InternalToMember
		else if(Utils.inArray(kind, ['AlertInMarket', 'AlertInForums', 'AlertInShopMarket', 'AlertInShopForums', 'AlertInAd', 'AlertInFr']))
		{
			options.titleText = 'مراسلة الإدارة';
			options.backgroundColor = '#BAD4FA';
			id = data.id;
			title = data.title;
			isAd = data.isAd;
			var idString = isAd ? 'Ad' + id : 'Fr' + id;

			options.getContents = function(form, afterAction)
			{
				var str =  '' +
						'<div style="background-color: #BAD4FA;">' +
						'<form accept-charset="utf-8" name="notifyAdmin' + idString + '" method="post" action="">'+
						'<table><tr><td class="xCenter p10" colspan="2">'+
						'<p class="xRight fB">رسالتك<span class="cRed">*</span>:</p>'+
						'<textarea name="body" rows="6" class="w90p xRight" onKeyUp="Utils.CheckTextArea(this, ' + itemMaxSizeNoFormat + ');"></textarea>'+
						'</td></tr><tr>'+
						'<td class="label">اسم المستخدم</td>'+
						'<td class="field"><input type="text" name="username" maxlength="30" value="" class="w200"></td>'+
						'</tr><tr>'+
						'<td class="label">الاسم</td>'+
						'<td class="field"><input type="text" name="name" value="" maxlength="100" class="w200"></td>'+
						'</tr><tr>'+
						'<td class="label">البريد الإلكتروني<span class="cRed" id="mandatory-email'+idString+'">*</span></td>'+
						'<td class="field"><input type="text" name="email" value="" maxlength="100" class="w200 ltr xLeft"></td>'+
						'</tr><tr>'+
						'<td class="label">الجوال</td>'+
						'<td class="field"><input type="text" name="phone" value="" maxlength="100" class="w200 ltr xLeft"></td>'+
						'</tr><tr><td class="xCenter pt10" colspan="2">' +
						(!window.currentUsername ?
							'<div id="captcha-remove' + idString + '">' +
								Forms.GetCaptchaHTML(form.containerId) +
								'<br><br></div>'
							:
							'' ) +
						'<input type="hidden" name="formName" value="' + (window.currentUsername ? 'notifyAdminLoggedIn' : 'notifyAdminLoggedOut') + '">'+
						'<input type="submit" name="submit" value="   إرسال   ">'+
						'<p class="hintSmall"><span class="wng">*</span> تعني: يجب ملء الخانة</p>'+
						'</td></tr></table>'+
						'</form>' +
						'</div>'
					;
				afterAction();
				return str;
			};

			options.afterGetContents = function(form, afterAction)
			{
				form.Check = function(form)
				{
					Forms.DisableEnable(form.content, true);
					var checkAjaxCaseName = kind + id;
					CheckAJAX.AddCase(
						checkAjaxCaseName,
						{
						method:'POST',
						url: '/home/contact.php',
						data: form.content.find('form').eq(0).serialize(),
						SuccessCallBack: function(response)
						{
							var message, focus, status;
							status = parseInt(response.status);
							if(status < 0)
							{
								switch (response.error)
								{
									case 'AdmContactForm::CONTACT_NO_BODY_ERROR':
										message = 'عفواً.. يجب أن تضيف رسالتك.';
										focus = 'body';
										break;
									case 'AdmContactForm::CONTACT_EMAIL_ERROR':
										message = 'عفواً.. يجب إضافة بريدك الإلكتروني، وبشكل صحيح.';
										focus = 'email';
										break;
									case 'AdmContactForm::CONTACT_CAPTCHA_ERROR':
										message = 'عفواً.. يجب كتابة الرقم الظاهر في الصورة، وبشكل صحيح.';
										focus = 'captcha';
										Forms.ChangeCaptcha(form.containerId);
										break;
									case 'AdmContactForm::CONTACT_USER_MUST_LOGIN_ERROR':
										message = 'الرجاء تسجيل الدخول او عمل تحديث للصفحة.';
										break;
									default:
										break;
								}
								Forms.ShowError(message, true, focus ? form.content.find(':input[name=' + focus + ']') : null);
								Forms.DisableEnable(form.content, false);
							}
							else
							{
								message = 'لقد تم إرسال رسالتك إلى إدارة الموقع بنجاح.' ;
								showSuccessMessage(form, message);
							}
						},
						InternetOrSystemErrorCallBack : function(){
							Forms.DisableEnable(form.content, false);
						}
					});
					CheckAJAX.Start(checkAjaxCaseName);
				};
				var body = '';
				if(Utils.inArray(kind, ['AlertInMarket', 'AlertInShopMarket', 'AlertInAd']))
				{
					body = "تنبيه عن الإعلان رقم " + id + ' "' + title + '"' + ":\r\n";
				}
				else{
					body = "تنبيه عن الموضوع رقم "+  id + ' "' + title + '"' + ":\r\n";
				}
				form.content.find(':input[name=body]').val(body);

				if (window.currentUsername)
				{
					form.content.find(':input[name="username"]').parent().html(window.currentUsername);
					form.content.find('form').append('<input type="hidden" name="username" value="' + window.currentUsername + '">');
					$('#mandatory-email' + idString).remove();
				}
				linkFormSubmit(form);
				afterAction(form);
			}
		}
		else if(Utils.inArray(kind, ['InviteInMarket', 'InviteInForums', 'InviteInShopMarket', 'InviteInShopForums', 'InviteInAd', 'InviteInFr']))
		{
			var itemTitle = '';
			if(data.isAd)
			{
				itemTitle = Forms.Invite.titles['ad' + data.id];
			}
			else
			{
				itemTitle = Forms.Invite.titles['fr' + data.id];
			}
			options.titleText = 'دعوة صديق لقراءة:' + '<br>' + itemTitle;
			options.backgroundColor = '#BAD4FA';
			options.getContents = function(form, afterAction)
			{
				var idString = isAd ? 'Ad' + data.id : 'Fr' + data.id;
				var str = '<form accept-charset="utf-8" id="inviteForm' + idString + '" name="inviteForm' + idString + '" method="post" action="">'+
					'<div class="boxDarkBody" style="margin: 0 auto; border: 0; background-color: #BAD4FA;"><table>'+
					'<tr>'+
					'<td class="label pt10">اسمك<span class="wng">*</span></td>'+
					'<td class="field pt10"><input type="text" name="name" value="" maxlength="100" class="w180"></td>'+
					'</tr><tr>'+
					'<td class="label">بريد صديقك الإلكتروني<span class="wng">*</span></td>'+
					'<td class="field"><input type="text" name="email" value="" maxlength="100" class="w180 ltr xLeft"></td>'+
					'</tr><tr>'+
					'<td class="label">تعليقك</td>'+
					'<td class="field"><textarea name="note" rows="3" class="w200" onkeyup="Utils.CheckTextArea(this, threadMaxSizeNoFormat);"></textarea></td>'+
					'</tr><tr><td class="xCenter pt10" colspan="2">'+
					'<input type="hidden" name="formName" value="EmailForm">'+
					'<input type="submit" name="submit" value="   إرسال   ">'+
					'<p class="hintSmall"><span class="wng">*</span> تعني: يجب ملء الخانة</p>'+
					'</td></tr>'+
					'</table></div>'+
					'</form>';
				afterAction();
				return str;
			};

			options.afterGetContents = function(form, afterAction)
			{
				/**
				 * @param form
				 * @returns {boolean}
				 */
				form.Check = function (form)
				{
					Forms.DisableEnable(form.content, true);
					var checkAjaxCaseName = kind + data.id;
					CheckAJAX.AddCase(
						checkAjaxCaseName,
						{
						method : 'POST',
						url : '/manage/email.php?if=' + (data.isAd ? '' : data.id) + '&ia=' + (data.isAd ? data.id : ''),
						data : form.content.find('form').eq(0).serialize(),
						SuccessCallBack: function(response) {
							if (response.status < 0)
							{
								var message, focus;
								switch (response.status.toString())
								{
									case '-1':
										message = 'عفواً.. يجب أن تضيف إسمك وبشكل صحيح.';
										focus = 'name';
										break;
									case '-2':
										message = 'عفواً.. يجب أن تضيف بريد صديقك وبشكل صحيح.';
										focus = 'email';
										break;
									case '-3':
										message = 'عفواً.. لم يتم الإرسال، نرجو التأكد من صحة البريد الإلكتروني والمحاولة مرة أخرى.';
										break;
									default:
										break;
								}
								Forms.ShowError(message, true, focus ? form.content.find(':input[name=' + focus + ']') : null);
								Forms.DisableEnable(form.content, false);
							}
							else
							{
								message = 'لقد تم إرسال دعوتك بنجاح.';
								showSuccessMessage(form, message);
							}
						},
						InternetOrSystemErrorCallBack : function(){
							Forms.DisableEnable(form.content, false);
						}
					});
					CheckAJAX.Start(checkAjaxCaseName);
					return false;
				};

				linkFormSubmit(form);
				afterAction(form);
			};
		}
		return options;
	},

	FocusInput : function(focus, afterFocus)
	{
		afterFocus = typeof afterFocus == 'function' ? afterFocus : function(){};
		if(focus instanceof jQuery)
		{
			Forms.Scroll(focus, function(){
				Forms.CheckForInputFocus(focus.trigger("focus"));
				afterFocus();
			});
		}
	},

	Item :
	{
		/* Generate suggested subject for ads */
		GenerateSubject : function(){
			var form = document.forms['form'];
			if(form['subjectAutoFill'].checked){
				$('#subjectAutoFill1').find('input').attr('disabled', false);
				document.getElementById('subjectAutoFill1').className = '';
				var actions = {'forSale':'للبيع','forGive':'للتنازل','forRent':'للإيجار','forInstall':'للتقسيط','forSwitch':'للتقبيل'};
				var selectedActions = [];
				for(var name in actions){
					if(form[name].checked){ selectedActions[selectedActions.length] = actions[name]; }
				}
				var action = selectedActions.join(' أو ');
				if(form['forBuy'].checked){ action = 'مطلوب' + (action ? ' ' : '') + action; }
				form.subject.value = (action ? action + ' ' : '');
				if(Utils.ArrayIndexOf(["4","41","42","43","46"], form.t.value) != -1){
					//var section = 4;
					form.subject.value += (parseInt(form.b.value) ? Utils.Trim(form.b.options[form.b.selectedIndex].text.replace('أخرى', ''), true) + ' ' : '') + (parseInt(form.m.value) && form.m.value != 1989 ? form.m.value + ' ' : '');
				}else if(Utils.ArrayIndexOf(["51","52","55"], form.t.value) != -1){
					//var section = 5;
					form.subject.value += (parseInt(form.b.value) ? Utils.Trim(form.b.options[form.b.selectedIndex].text.replace('أخرى', ''), true) + ' ' : '') + (form.sb.value ? form.sb.value + ' ' : '');
				}else if(form.t.value == "61"){
					//var section = 6;
					form.subject.value += (parseInt(form.b.value) ? Utils.Trim(form.b.options[form.b.selectedIndex].text.replace('أخرى', ''), true) + ' ' : '') + (form.sb.value ? form.sb.value + ' ' : '');
				}
			}else{
				$('#subjectAutoFill1').find('input').attr('disabled', true);
				document.getElementById('subjectAutoFill1').className = 'disabled';
			}
		},
		/**
		 *
		 * @param isAd
		 * @param itemID
		 * @param itemComment
		 * @param addFav
		 * @param btnBlock
		 * @returns {boolean}
		 * @param commentBlock
		 * @param successFunc
		 */
		AddRemoveFav: function(isAd, itemID, hasComment, itemComment, addFav, btnBlock, commentBlock, successFunc)
		{
			var doFunction = function(){
				successFunc = typeof successFunc == 'function' ? successFunc : function(){};
				var checkAjaxCaseName = 'addRemoveFav' + (isAd ? 'Ad' : 'Fr') + itemID;
				CheckAJAX.AddCase(
					checkAjaxCaseName,
					{
						/* request without domain full so the fav from shops can work*/
						url: (isAd ? '/manage/ads-fav.php?' : '/manage/frs-fav.php?') + (addFav ? 'addToFav' : 'removeFromFav') + '=' + itemID,
						method : 'POST',
						data : {
							comment : itemComment
						},

						SuccessCallBack: function(response)
						{
							var message;
							var word = isAd ? 'الإعلان' : 'الموضوع';
							var words = isAd ? 'إعلانات' : 'مواضيع';
							if (typeof response.status != 'undefined')
							{
								if (response.status > 0 || response.error == 'AddUpdateFavForm::ALREADY_DONE_ERROR')
								{
									if(addFav) // it is now in fav
									{
										btnBlock
											.attr('title', "حذف من المفضلة")
											.removeClass('addFav')
											.addClass('removeFav');
										if(itemComment.length)
										{
											btnBlock.addClass('hasComment-js');
										}
										else
										{
											btnBlock.removeClass('hasComment-js');
										}
									}
									else
									{
										btnBlock
											.attr('title', "إضافة للمفضلة")
											.removeClass('removeFav hasComment-js')
											.addClass('addFav');
										// this is to make comment text empty
										commentBlock.val('');
									}
									successFunc();
								}
								else if (response.error == 'AddUpdateFavForm::INVALID_DATA_ERROR')
								{
									// do nothing because we don't expect to invalid data
								}
								else if (
									response.error == -999
									|| response.error == 'AddUpdateFavForm::USER_MUST_LOGIN_ERROR'
								)
								{
									message = 'عفوا... يجب تسجيل الدخول أولا حتى تستطيع تعديل ال' + words + ' المفضلة الخاصة بك.';
								}
								else if (response.error == 'AddUpdateFavForm::USER_FAV_LIMIT_ERROR')
								{
									message = 'عفوا... لا يمكنك إضافة المزيد من ال' + words + ' إلى المفضلة.';
								}
								else if (response.error == 'AddUpdateFavForm::ITEM_DELETED_ERROR')
								{
									message = 'عفوا... '+ word + ' المطلوب إضافته للمفضلة محذوف، ولذلك يرجى منك تحديث الصفحة.';
								}
								else
								{
									message = 'عفواً... لم يتم إضافة '+ word + ' الرجاء المحاولة مرة اخرى.';
								}
							}
							else
							{
								message = 'عفواً... لم يتم إضافة '+ word + ' الرجاء المحاولة مرة اخرى.';
							}
							if(message)
							{
								Forms.ShowError(message, true);
							}
						}
					});
				CheckAJAX.Start(checkAjaxCaseName);
			};

			// make confirm if hasComment
			if(!addFav && hasComment)
			{
				ShowConfirm(
					'ستحذف ملاحظتك على '
					+ (isAd ? 'الإعلان' : 'الموضوع')
					+ ' في حال حذفه من المفضلة، فهل أنت متأكد!',
					function(){
						doFunction();
					}
				);
			}
			else
			{
				doFunction();
			}
			return false;
		}
	},

	/* changing captcha */
	ChangeCaptcha : function(containerId)
	{
		var container = $('#' + containerId);
		container.find('img[class=imgCaptcha]').eq(0).attr('src', '/images/uploading.gif');
		/************** SHOULD BE SYNCED WITH PHP ***************/
		// captchaId last part should be in milliseconds
		var captchaId = 'c' + ('' + containerId).replace(/[^a-z0-9]/gi, '') + Math.floor(Math.random() * (9999 - 1000) + 1000) + Math.floor(Math.random() * (9999 - 1000) + 1000) + (new Date()).getTime();
		container.find('img[class=imgCaptcha]').eq(0).attr('src', (window.site ? '?captcha=1&' : domainFull + '/captcha.php?') + 'captchaId=' + captchaId);
		container.find('input[name="captcha"]').eq(0).val('');
		container.find('input[name="captchaId"]').eq(0).val(captchaId);
	},


	/**
	 *
	 * @param containerId
	 * @returns {string}
	 */
	GetCaptchaHTML : function (containerId)
	{
		var changeOnReady;
		changeOnReady = function()
		{
			if($('#' + containerId).length)
			{
				Forms.ChangeCaptcha(containerId);
			}
			else
			{
				setTimeout(changeOnReady, 250);
			}
		};
		setTimeout(changeOnReady, 250);
		/****** SHOULD BE SYNCED WITH PHP HOME CONTACT ********/
		return '' +
			'<img class="imgCaptcha" src="/images/uploading.gif" alt="captcha">' +
			'<a href="javascript: void(0)" onclick="Forms.ChangeCaptcha(\'' + containerId + '\')"><span class="iconRefresh" title="تغيير الصورة"></span></a>' +
			'<br>يرجى كتابة الرقم الظاهر في الصورة بأي لغة<span class="cRed">*</span>' +
			'<input type="hidden" name="captchaId">' +
			'<input type="text" name="captcha" maxlength="4" size="10" class="ltr">';
	},

    SendInternalMessage :
	{
		warning : '',
		msgOriginals : {}
	},

	Invite :
	{
		titles : {}
	},

	Thread : {
		form : null,
		forum : null,
		itemId : null,
		close : null,
		bidMinAllowed : null,
		bidCurrency : null,
		threads : {},
		statuses : {},
		threadWord : ['رد','مزايدة'],
		status : null,
		error : null,
		success : null,
		body : null,

		Add : function(){
			Forms.Thread.form.thr.value = '0';
			Forms.Thread.form.edit.className = "visibleNo";
		},

		Edit : function(id){
			Forms.Thread.form.body.value = Forms.Thread.threads['ID' + id];
			Forms.Thread.form.thr.value = id;
			Forms.Thread.form.edit.className = "visibleYes";
			window.location = String(window.location).replace(/#.*$/, "") + "#thread";
			Forms.Thread.HideStatuses();
		},
		/**
		 *
		 * @param button
		 * @param threadId
		 * @param isForum
		 * @param itemId
		 * @returns {boolean}
		 */
		Delete: function(button, threadId, isForum, itemId){
			Forms.Thread.HideStatuses();
			var checkAjaxCaseName = 'deleteThread' + (isForum ? 'Fr' : 'Ad') + itemId + 'Thread' + threadId;
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
				method:'POST',
				url: (isForum ? '/forum/fr.php' : '/section/item.php') + '?i=' + itemId,
				data:"delete=" + threadId,
				SuccessCallBack: function(response)
				{
                    var message;
					if (response.status > 0)
					{
						Forms.ShowError('لقد تم حذف الرد بنجاح.', false);
						$('#threadDiv' + threadId).html("");
						var threadsCountInHeader = $('#threadsCountInHeaderData' + (isForum ? 'Fr' : 'Ad') + itemId);
						var num = Number(threadsCountInHeader.text().replace(/,/g,''));
						var threads = $('.threadDivNumber');
						var count = threads.length;
						if(count)
						{
							var newNum;
							threads.each(function()
							{
								newNum = num - count;
								$(this).text(newNum);
								count--;
							});
						}
						ThreadStreams.EditThreadsCounters(-1, isForum, itemId);
					}
					else
					{
						switch (response.error.toString())
						{
							case 'DeleteThreadForm::USER_MUST_LOGIN_ERROR':
								message = 'عفواً... يجب تسجيل الدخول حتى تستطيع حذف الرد.';
								break;
							case 'DeleteThreadForm::THREAD_DELETE_LATE_ERROR':
								message = 'عفواً.. لا يمكنك حذف الرد بعد إضافته بعشر دقائق.';
								break;
							case 'DeleteThreadForm::THREAD_DELETE_MAZAD_OR_CLOSED_ERROR':
								if(isForum){
									message = 'عفواً.. لا يمكن حذف الردود لأن الردود مغلقة على هذا الموضوع من قبل الإدارة.';
								}else{
									//message = 'عفواً.. لا يمكن حذف الردود لأن الردود مغلقة على هذا الإعلان أو أنه مزايدة.';
									message = 'عفواً.. لا يمكن حذف الردود لأن الردود مغلقة.';
								}
								break;
							case 'DeleteThreadForm::THREAD_ITEM_NOT_FOUND_ERROR':
									message = 'عفواً.. حصل تغيير في هذه الصفحة. <a href="" onclick="$.Event(event).preventDefault(); location.reload(true)">نرجو إعادة تحميل الصفحة من هنا</a>.';
								break;
							default:
								break;
						}
						Forms.ShowError(message, true);
						button.remove();
					}
				}
			});
			CheckAJAX.Start(checkAjaxCaseName);
			return false;
		},
		/**
		 *
		 * @returns {boolean}
		 */
		Submit : function(){
			Forms.Thread.ShowHideProgress(true);
			var thrId = Forms.Thread.form['thr'].value;
			CheckAJAX.AddCase(
				'threadForm',
				{
					url : (Forms.Thread.forum ? '/forum/fr.php?i=' : '/section/item.php?i=') + Forms.Thread.itemId + '&close=' + Forms.Thread.close,
					method : 'POST',
					data : {
						body : Forms.Thread.form['body'].value,
						thr : Forms.Thread.form['thr'].value,
						formName : 'thread'
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						Forms.Thread.status = response.status;
						Forms.Thread.error = response.error;
						Forms.Thread.success = response.success;
						Forms.Thread.body = response.body;
						Forms.Thread.ShowHideProgress(false, 1);
						if(Forms.Thread.status > 0){
							if(thrId && parseInt(thrId) > 0){ // update, then update the html and plain text threads array
								Utils.Log(thrId);
								var threadBody = $('#threadBody' + thrId);
								threadBody.html(response.body);
								Linkify.ReplaceLinks(threadBody.find('.linkify'));
								Forms.Thread.threads['ID' + thrId] = Forms.Thread.form.body.value;
							}else{ // insert, then check for more replies, and add the plain text to threds array, and resut the form
								ThreadStreams[Forms.Thread.forum ? 'frs' : 'ads'][Forms.Thread.itemId].Update(true);
								Forms.Thread.threads['ID' + thrId] = Forms.Thread.form.body.value;
								Forms.Thread.form.body.value = '';
							}
						}else if(Forms.Thread.error == 'AddUpdateThreadForm::THREAD_REFRESH_NEEDED_ERROR'){ // if close changed, then stop
							ThreadStreams[Forms.Thread.forum ? 'frs' : 'ads'][Forms.Thread.itemId].ToggleRun('pause');
							//$('#threadFormStatus').html( 'عفواً... يجب إعادة تحميل الصفحة وذلك حتى تظهر لك الصفحة بشكل كامل وصحيح').addClass('wng');
						}
						if(Forms.Thread.close == 2 && response.bidMinAllowed){
							Forms.Thread.bidMinAllowed = response.bidMinAllowed;
							Forms.Thread.bidCurrency = response.bidCurrency;
							$('#bidMinAllowed').html(Forms.Thread.bidMinAllowed);
							$('#bidCurrency').html(Forms.Thread.bidCurrency);
							Forms.Thread.form.body.value = Forms.Thread.bidMinAllowed;
							$('#bidCurrencyInput').html(Forms.Thread.bidCurrency);
						}
						return false;
					},
					InternetOrSystemErrorCallBack : function(){
						Forms.Thread.ShowHideProgress(false);
					}
				}
			);
			CheckAJAX.Start('threadForm');
			return false;
		},

		HideStatuses : function(){
			$('#threadFormStatus').html('').removeClass('don').removeClass('wng').css('display','none');
		},

		ShowHideProgress : function(show, status){
			if(show)
			{
				$(Forms.Thread.form).find('input,textarea').attr('disabled', 'disabled');
				Forms.Thread.HideStatuses();
				$('#threadFormProgress').css('display','block');
			}
			else
			{
				$(Forms.Thread.form).find('input,textarea').attr('disabled', false);
				$('#threadFormProgress').css('display','none');
				if(status){
					var statusText = Forms.Thread.statuses['s_' + (Forms.Thread.status > 0 ? Forms.Thread.success : Forms.Thread.error)] || '';
					if(!Forms.Thread.forum){
						statusText = statusText.replace('%threadWord%', Forms.Thread.threadWord[Forms.Thread.close == 2 ? 1 : 0]);
						if(Forms.Thread.close == 2){
							statusText = statusText.replace('%bidMinAllowed%', Forms.Thread.bidMinAllowed);
							statusText = statusText.replace('%bidCurrency%', Forms.Thread.bidCurrency);
						}
					}
					$('#threadFormStatus').html(statusText).css('display','block').addClass(Forms.Thread.status > 0 ? 'don' : 'wng');
				}
			}
		}
	},

	ThreadSpeedForms : {},
	ThreadSpeedStatuses : {
		's_AddUpdateThreadForm::THREAD_INSERT_SUCCESS':'لقد تمت إضافة الرد بنجاح. يرجى الضغط على زر التفاصيل والردود حتى ترى ردك.',
		's_AddUpdateThreadForm::THREAD_NO_BODY_ERROR':'عفواً.. يجب أن تضيف الرد.',
		's_AddUpdateThreadForm::THREAD_TOO_MANY_INSERTS_PER_TIME_ERROR':'عفواً.. لا يمكنك إضافة أكثر من رد خلال ' + timeBetweenTwoThreads + ' ثانية.',
		's_AddUpdateThreadForm::THREAD_NEW_MEMBER_LIMIT_ERROR':'عفواً.. نظراً لأن عضويتك جديدة، فلا يمكنك إضافة أكثر من ردين خلال أول 24 ساعة.',
		's_AddUpdateThreadForm::THREAD_USER_NEED_TO_LOGIN_ERROR':'عفواً.. يظهر أنه تم تسجيل الخروج لحسابك.',
		's_AddUpdateThreadForm::THREAD_TOO_MANY_INSERTS_PER_TIME_FOR_USER_WITHOUT_MOBILE_ERROR':'عفواً.. لا يمكنك إضافة أكثر من رد خلال ' + timeBetweenTwoThreadsForUserWithoutMobile + ' ساعة لأن عضويتك مقيدة، للحصول على كامل ميزات العضوية ننصحك ' + '<a href="/manage/update.php#activeMobile">بتفعيل جوالك</a>.',
		's_AddUpdateThreadForm::THREAD_REFRESH_NEEDED_ERROR':'عفواً.. حصل تغيير في هذه الصفحة. <a href="" onclick="$.Event(event).preventDefault(); location.reload(true)">نرجو إعادة تحميل الصفحة من هنا</a>.'
	},

/**
	 *
	 * @param isFr
	 * @param itemId
	 * @param close
	 * @param sendToCurrentPageUrl
	 * @constructor
	 */
	ThreadSpeed : function(isFr, itemId, close, sendToCurrentPageUrl)
	{
		this.form = null;
		this.isFr = isFr;
		this.sendToCurrentPageUrl = sendToCurrentPageUrl;
		this.itemId = itemId;
		this.close = close;
		this.idString = (isFr ? 'Fr' : 'Ad') + itemId;
		this.status = null;
		this.error = null;
		this.success = null;
		this.body = null;
		var self = this;

		/**
		 *
		 * @returns {boolean}
		 */
		this.Submit = function(){
			this.form = document.forms['threadSpeedForm' + this.idString];
			self.ShowHideProgress(true);
			CheckAJAX.AddCase(
				'threadSpeedForm' + self.idString,
				{
					url : (self.sendToCurrentPageUrl ? '/' : (self.isFr ? '/forum/fr.php' : '/section/item.php')) + '?i=' +  self.itemId + '&close=' + self.close + (self.sendToCurrentPageUrl ? '&isAd=' + (self.isFr ? 0 : 1): ''),
					method : 'POST',
					data : {
						body : self.form['body'].value,
						thr : 0,
						formName : 'thread'
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						self.status = response.status;
						self.error = response.error;
						self.success = response.success;
						self.ShowHideProgress(false, 1);
						if(response.status > 0){
							$(self.form).remove();
						}
						return false;
					},
					InternetOrSystemErrorCallBack : function(){
						self.ShowHideProgress(false);
					}
				}
			);
			CheckAJAX.Start('threadSpeedForm' + self.idString);
			return false;
		};

		this.HideStatuses = function(){
			$('#threadSpeedFormStatus' + self.idString).html('').removeClass('don').removeClass('wng').css('display','none');
		};

		this.ShowHideProgress = function(show, status){
			if(show)
			{
				$(self.form).find('input,textarea').attr('disabled', 'disabled');
				self.HideStatuses();
				$('#threadSpeedFormProgress' + self.idString).css('display','block');
			}
			else
			{
				$(self.form).find('input,textarea').attr('disabled', false);
				$('#threadSpeedFormProgress' + self.idString).css('display','none');
				if(status){
					var statusText = Forms.ThreadSpeedStatuses['s_' + (self.status > 0 ? self.success : self.error)] || ''
					$('#threadSpeedFormStatus' + self.idString).html(statusText).css('display','block').addClass(self.status > 0 ? 'don' : 'wng');
				}
			}
		};
	},

	MessagesStatuses : {
		'InternalMessagesForms::INTERNAL_SEND_MESSAGE_SENT_SUCCESSFULLY' : '', // don't show any thing on success
		'-999':'عفواً.. يظهر أنه تم تسجيل الخروج لحسابك.'
	},

	Messages : function()
	{
		var self = this;
		self.status = null;
		self.statuses = jQuery.extend({}, Forms.MessagesStatuses);

		/**
		 *
		 * @returns {boolean}
		 */
		this.New = function(form)
		{
			var checkAjaxCaseName = 'newInternalMessage';
			var formElementId = 'newInternalMessageFormId';
			var progressElementId = 'newInternalMessageProgress';
			var statusElementId = 'newInternalMessageStatus';
			self.ShowHideProgress(true, false, formElementId, progressElementId, statusElementId);
			jQuery.extend(self.statuses, {
				'InternalMessagesForms::INTERNAL_SEND_NO_BODY_ERROR': 'عفواً.. يجب إضافة الرسالة وأن لا يزيد عدد حروفها عن '+ threadMaxSize + ' حرف.',
				'InternalMessagesForms::INTERNAL_SEND_TWO_MESSAGES_IN_ONE_MINUTE_ERROR': 'عفواً.. لا يمكنك إرسال أكثر من رسالة خلال ' + timeBetweenToMessages + ' ثانية.',
				'InternalMessagesForms::INTERNAL_SEND_RECEIVER_USER_NOT_FOUND': 'عفواً.. لا يوجد عضو بهذا الاسم، يرجى التأكد من اسم المستخدم الصحيح.',
				'InternalMessagesForms::INTERNAL_SEND_NO_USERNAME_ERROR': 'عفواً.. يرجى تحديد اسم العضو الذي تريد الإرسال إليه.',
				'InternalMessagesForms::SPECIAL_USER_LIMIT_EXCEEDED_ERROR': 'عفواً.. لا يمكنك إرسال أكثر من ' + numberOfMessagesInDayForSpecialOrMerchantUser + ' رسالة كل 24 ساعة.',
				'InternalMessagesForms::NEW_USER_LIMIT_EXCEEDED_ERROR': 'عفواً.. نظراً لأن عضويتك جديدة، فلا يمكنك إرسال أكثر من رسالتين خلال أول 24 ساعة.',
				'InternalMessagesForms::NORMAL_USER_LIMIT_EXCEEDED_ERROR': 'عفواً.. لا يمكنك إرسال أكثر من ' + numberOfMessagesInDayForDefaultUser + ' رسالة كل 24 ساعة.',
				'InternalMessagesForms::INTERNAL_SEND_TWO_MESSAGES_IN_SHORT_PERIOD_FOR_USER_WITHOUT_MOBILE_ERROR': 'عفوا... لا يمكنك إرسال أكثر من رسالة واحدة في ' + timeBetweenTowMessagesForUserWithoutMobile + ' ساعة لأن عضويتك مقيدة ،للحصول على كامل ميزات العضوية ننصحك '+ '<a href="/manage/update.php#activeMobile">بتفعيل جوالك</a>.'
			});
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
					url : '/manage/internal.php',
					method : 'POST',
					data : {
						username : form.find("input[name='username']").val(),
						body : form.find("textarea[name='body']").val(),
						formName : form.find("input[name='formName']").val()
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						if (response.status < 0)
						{
							self.status = response.error;
						}
						else
						{
							self.status = response.success;
						}
						self.ShowHideProgress(false, 1, formElementId, progressElementId, statusElementId);
						if(response.status > 0)
						{
							EventStream.Update(true);
							form.find("textarea[name='body']").val('');
						}
						return false;
					},
					InternetOrSystemErrorCallBack : function(){
						self.ShowHideProgress(false, false, formElementId, progressElementId, statusElementId);
					}
				}
			);
			CheckAJAX.Start(checkAjaxCaseName);
			return false;

		};

		/**
		 *
		 * @returns {boolean}
		 */
		this.ShowMore = function(elementObj, usernameUrlEncoded, uid, next)
		{
			var checkAjaxCaseName = 'getMoreOlderMessages';
			var statusText;
			var progressObj = $('#showMoreMessagesProgress');

			// show progress
			elementObj.hide();
			progressObj.show();

			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
					url : '/manage/internal.php?un=' + usernameUrlEncoded + (uid ? '&u=' + uid : ''),
					method : 'POST',
					data : {
						beforeMessageId : $("[id^='internalMessageId']").eq(0).attr('id').replace(/\D/g,''),
						formName : 'getMore'
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						if (response.status < 0)
						{
							self.status = response.error;
						}
						else
						{
							self.status = response.success;
						}
						if(response.status > 0)
						{
							if(response['messages'] && response['messages'].length)
							{
								var html = Mustache.render(
									messagesMustacheTpl,
									{messages : response['messages']}
								);
								var messagesContainer = $('.singleConversationMessages');
								var messages = $(html);
								var singleConversation = $('.singleConversation');
								var currentScrollTop = singleConversation.scrollTop();
								var totalOuterHeight = 0;
								$(messages.get().reverse())
									.filter("[id^='internalMessageId']")
									.each(function(){
										Utils.ProcessDates($(this));
										var linkifyArray = $(this).find('.linkify');
										if(linkifyArray.length)
										{
											Linkify.ReplaceLinks(linkifyArray);
										}
										messagesContainer.prepend($(this));
										totalOuterHeight += $(this).outerHeight(true);
								});
								singleConversation.scrollTop(currentScrollTop + totalOuterHeight);
								if(response['messages'].length < next)
								{
									$('#getMoreOlderMessages').hide();
								}
								self.StarFilter();
							}
							else
							{
								$('#getMoreOlderMessages').hide();
							}
						}
						else
						{
							statusText = self.statuses[self.status];
							Forms.ShowError(statusText, true);
						}
						// hide progress
						progressObj.hide();
						elementObj.show();
						return false;
					}
				}
			);
			CheckAJAX.Start(checkAjaxCaseName);
			return false;

		};

		/**
		 *
		 * @param messageId
		 * @returns {boolean}
		 */
		this.Delete = function(messageId)
		{
			var checkAjaxCaseName = 'deleteMessage';
			var statusText;
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
					url : '/manage/internal.php',
					method : 'POST',
					data : {
						messageId : messageId,
						formName : 'deleteMessage'
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						if (response.status < 0)
						{
							self.status = response.error;
						}
						else
						{
							self.status = response.success;
						}
						if(response.status > 0)
						{
							var message = $('#internalMessageId' + messageId);
							message.slideUp(500, function(){
								message
									.replaceWith($(Mustache.render(
										messagesMustacheTpl,
										{messages : [{'deleted' : true, 'id' : messageId}]}
									)));
							});
						}
						else
						{
							statusText = self.statuses[self.status];
							Forms.ShowError(statusText, true);
						}
						return false;
					}
				}
			);
			CheckAJAX.Start(checkAjaxCaseName);
			return false;

		};

		/**
		 *
		 * @param messageId
		 * @returns {boolean}
		 */
		this.Star = function(messageId)
		{
			var checkAjaxCaseName = 'starMessage';
			var statusText;
			var starIcon = $('#internalMessageStarButton' + messageId);
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
					url : '/manage/internal.php',
					method : 'POST',
					data : {
						messageId : messageId,
						star : starIcon.hasClass('internalMessageStarIcon') ? 1 : 0,
						formName : 'starMessage'
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					SuccessCallBack : function(response){
						if (response.status < 0)
						{
							self.status = response.error;
						}
						else
						{
							self.status = response.success;
						}
						if(response.status > 0)
						{
							if(starIcon.hasClass('internalMessageStarIcon'))
							{
								starIcon
									.removeClass('internalMessageStarIcon')
									.addClass('internalMessageStarActiveIcon');
							}
							else if(starIcon.hasClass('internalMessageStarActiveIcon'))
							{
								starIcon
									.removeClass('internalMessageStarActiveIcon')
									.addClass('internalMessageStarIcon');
							}
						}
						else
						{
							statusText = self.statuses[self.status];
							Forms.ShowError(statusText, true);
						}
						return false;
					}
				}
			);
			CheckAJAX.Start(checkAjaxCaseName);
			return false;

		};

        this.StarFilter = function(){
			var notStarredMessages =
				$("[id^='internalMessageId']")
				.has("[id^='internalMessageDeleted'], .internalMessageStarIcon");
			if($('#starFilter').prop('checked') == true)
			{
				notStarredMessages.hide();
			}
			else{
				notStarredMessages.show();
			}
        };

		this.HideStatuses = function(statusElementId){
			$('#' + statusElementId).html('').removeClass('don').removeClass('wng').css('display','none');
		};

		this.ShowHideProgress = function(show, status, formElementId, progressElementId, statusElementId)
		{
			if(show)
			{
				$('#' + formElementId).find('input,textarea').attr('disabled', 'disabled');
				self.HideStatuses(statusElementId);
				$('#' + progressElementId).css('display','block');
			}
			else
			{
				$('#' + formElementId).find('input,textarea').attr('disabled', false);
				$('#' + progressElementId).css('display','none');
				if(status){
					var statusText = self.statuses[self.status] || '';
					$('#' + statusElementId).html(statusText).css('display','block').addClass(self.status > 0 ? 'don' : 'wng');
				}
			}
		};
	},

    EmailActivation : function()
    {
        var self = this;
		self.status = null;
		/**
		 *
		 * @param containerId
		 * @returns {boolean}
		 */
        this.CheckEmailNew = function(containerId)
        {
            containerId.find(':button').prop('disabled', true);
            var checkAjaxCaseName = 'checkEmailNew';
            var emailInput = containerId.find(':input[name=email]');

            CheckAJAX.AddCase(
                checkAjaxCaseName,
                {
					// url: url, get from the current page always with current query
					method : 'POST',
                    data : {
                        email : emailInput.val(),
                        formName : 'NewEmailForm'
                    },
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
                    /**
                     *
                     * @param response
                     * @returns {boolean}
                     */
                    SuccessCallBack : function(response){
						if (response.status < 0)
						{
							var message, focus, height;
							switch (response.error.toString())
							{
								case 'EmailForm::EMAIL_NEW_EMAIL_NOT_VALID':
									message='عفواً.. يجب أن تضيف البريد الإلكتروني، وبشكل صحيح.';
									height=60;
									focus = 'email';
									break;
								case 'EmailForm::EMAIL_NEW_SAME_SAVED_EMAIL':
									message='عفواً.. البريد الإلكتروني الذي أدخلته هو نفس بريدك المسجل لدينا حالياً!';
									height=60;
									focus = 'email';
									break;
								case 'EmailForm::EMAIL_NEW_EMAIL_OF_ANOTHER_USER':
									message='عفواً.. هذا البريد الإلكتروني مسجل لعضو آخر، إذا كنت قد أخطأت في إدخاله فيرجى تصحيح ذلك، وإذا كانت لك أكثر من عضوية في الموقع، فهذا ممنوع، ويجب حذف العضويات الأخرى.';
									height=110;
									focus = 'email';
									break;
								case 'EmailForm::EMAIL_NEW_SENDING_EMAIL_ERROR':
									message='عفواً.. لم يتم الإرسال. يرجى المحاولة مرة أخرى أو <a href="/home/contact.php">مراسلتنا</a>.';
									height=60;
									break;
								case '-999':
								case 'EmailForm::EMAIL_NEW_USER_MUST_LOGIN_ERROR':
									message='عفوا... يجب تسجيل الدخول أولا حتى تستطيع تحديث بريدك الإلكتروني.';
									break;
								default:
									break;
							}
							Forms.ShowError(message, true, focus ? containerId.find(':input[name=' + focus + ']') : null);
						}
						else
						{
							// reset value of Inputs
							emailInput.val('');

							Forms.ShowError('لقد تم إرسال رقم التفعيل لبريدك الإلكتروني بنجاح.', false);
							$('.showCheckEmailActivationForm-js').hide();
							$('.showEmailActivationForm-js').show();
						}
						containerId.find(':button').prop('disabled', false);
                        return false;
                    },
                    InternetOrSystemErrorCallBack : function(){
						containerId.find(':button').prop('disabled', false);
                    }
                }
            );
            CheckAJAX.Start(checkAjaxCaseName);
            return false;
        };
		/**
		 *
		 * @param containerId
		 * @returns {boolean}
		 */
        this.CheckActivationCode = function(containerId)
        {
            containerId.find(':button').prop('disabled', true);
            var checkAjaxCaseName = 'checkActivationCode';
            var activationInput = containerId.find(':input[name=a]');

            CheckAJAX.AddCase(
                checkAjaxCaseName,
                {
					// url: url, get from the current page always with current query
					method : 'POST',
                    data : {
                        a : activationInput.val(),
                        formName : 'activationForm'
                    },
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
                    /**
                     *
                     * @param response
                     * @returns {boolean}
                     */
                    SuccessCallBack : function(response){
						if (response.status < 0)
						{
							var message, focus;
							switch (response.error.toString())
							{
								case 'EmailForm::EMAIL_NEW_WRONG_URL':
									message='عفواً.. الرقم الذي أدخلته غير صحيح، نرجو التأكد والمحاولة مرة أخرى.';
									focus = 'a';
									break;
								case 'EmailForm::EMAIL_NEW_DUPLICATED_EMAIL':
									message='عفواً.. البريد الإلكتروني الذي تحاول تفعيله مستخدم الآن لعضو أخر!';
									break;
								case '-999':
								case 'EmailForm::EMAIL_NEW_USER_MUST_LOGIN_ERROR':
									message='عفوا... يجب تسجيل الدخول أولا حتى تستطيع تحديث بريدك الإلكتروني.';
									break;
								default:
									break;
							}
							Forms.ShowError(message, true, focus ? containerId.find(':input[name=' + focus + ']') : null);
						}
						else
						{
							// reset Input value
							activationInput.val('');

							Forms.ShowError('لقد تم تفعيل وحفط البريد الإلكتروني بنجاح.', false);
							$('.showNoEmail-js').remove();
							TPMSlide('hide', $('#plusMinusEmailActivationProgress-js'), $('.containerOfEmailActivationForms-js'));
							$('.showCheckEmailActivationForm-js').show();
							$('.showEmailActivationForm-js').hide();

							$('.email-js').html(response.email);
							$('.showEmail-js').removeClass('none');
							$('.activeEmailText-js').html('تغيير البريد الالكتروني.');

							//remove none class from Block of emailStatus and emailMe
							$('.emailStatusBlock-js').removeClass('none');
							$('.emailMeBlock-js').removeClass('none');
							$('.emailMeHint-js').removeClass('none');
						}
						containerId.find(':button').prop('disabled', false);
                        return false;
                    },
					InternetOrSystemErrorCallBack : function(){
						containerId.find(':button').prop('disabled', false);
					}
                }
            );
            CheckAJAX.Start(checkAjaxCaseName);
            return false;
        };

        this.MakeReset = function()
        {
            $('.showEmailActivationForm-js').hide();
            $('.showCheckEmailActivationForm-js').show();
        }
    },

    MobileActivationStatuses : {
        's-999':'عفواً.. يظهر أنه تم تسجيل الخروج لحسابك.'
    },

    MobileActivation : function()
    {
        var self = this;
		self.status = null;
		self.statuses = jQuery.extend({}, Forms.MobileActivationStatuses);
		/**
		 *
		 * @param showMessages
		 * @returns {boolean}
		 */
        this.CheckMobileActivated = function(showMessages)
        {
			var checkMobileActivationButton = $('.checkMobileActivationButton-js');
			checkMobileActivationButton.prop('disabled', true);
            var checkAjaxCaseName = 'checkMobile';
            CheckAJAX.AddCase(
                checkAjaxCaseName,
                {
					// url: url, get from the current page always with current query
					method : 'POST',
                    data:
                    {
                        checkMobileActivation : 1
                    },
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
                    /**
                     *
                     * @param response
                     * @returns {boolean}
                     */
                    SuccessCallBack : function(response){
						$('.checkMobileActivationButton-js').prop('disabled', false);
						if (response.status < 0)
						{
							if(showMessages)
							{
								var message, height;
								switch (response.error.toString()) {
									case 'CheckMobileActivatedForm::MOBILE_ACTIVE_LOGIN_USER_ERROR':
										$(location).attr('href', fullDomain);
										return false;
										break;
									case 'CheckMobileActivatedForm::MOBILE_ACTIVE_MESSAGE_NOT_DELIVERED_ERROR':
										message = 'عفواً.. لم تصل الرسالة بعد! <br>يرجى التأكد من صحة الرقم الذي أرسلته، والتأكد من صحة رقم الجوال الذي أرسلت إليه!';
										height = 180;
										break;
									case 'CheckMobileActivatedForm::MOBILE_ACTIVE_MOBILE_EXIST_ERROR':
										if(window.currentUsername)
										{
											message = 'عفواً.. الجوال مسجل لدينا بعضوية أخرى ولا يسمح باستخدام نفس الجوال في أكثر من عضوية واحدة. فإن كانت تلك العضوية لك، فيرجى منك الإكتفاء بعضوية واحدة <a href="/home/contact.php">ومراسلتنا</a> من أجل حذف العضوية الأخرى لأن تعدد العضويات ممنوع.';
										}
										else
										{
											message = 'عفواً.. الجوال  مسجل لدينا بعضوية أخرى ولا يسمح باستخدام نفس الجوال في أكثر من عضوية واحدة. فإن كانت تلك العضوية لك، فيرجى منك استعمالها لأن تعدد العضويات ممنوع، وإذا كنت نسيت كلمة سر عضويتك، فيمكنك محاولة الحصول عليها من خلال صفحة <a href="/manage/password.php">نسيت كلمة السر</a>';
										}
										height = 180;
										break;
									case '-999':
									case 'CheckMobileActivatedForm::MOBILE_ACTIVE_USER_MUST_LOGIN_ERROR':
										message='عفوا... يجب تسجيل الدخول أولا حتى تستطيع تحديث جوالك.';
										break;
									default:
										break;
								}
								Forms.ShowError(message, true);
							}
						}
						else
						{
							if(showMessages)
							{
								Forms.ShowError((self.status == 2 ? 'لقد تم تفعيل وحفط جوالك بنجاح.' : 'لقد تم تفعيل جوالك بنجاح.'), false);
							}
							$('.showNoMobile-js').addClass('none');
							TPMSlide('hide', $('#plusMinusMobileActivationProgress-js'), $('#showMobileActivationDetails-js'));
							$('#mobileActivationCode-js').html('');

							$('.mobile-js').html(response.mobile);
							$('.showMobile-js').removeClass('none');
							$('.activeMobileText-js').html('تغيير الجوال.');
							$('.activationHiddenInput-js').val(response.activation);

							//remove none class from block of mobileStatus
							$('.mobileStatusBlock-js').removeClass('none');
						}
                        return false;
                    },
                    InternetOrSystemErrorCallBack : function(){
						checkMobileActivationButton.prop('disabled', false);
                    }
                }
            );
            CheckAJAX.Start(checkAjaxCaseName);
            return false;
        };

		this.GetMobileActivationCode = function()
		{
			var showMobileActivationDetails = $('#showMobileActivationDetails-js');
			var plusMinusMobileActivationProgress = $('#plusMinusMobileActivationProgress-js');
			TPMSlide('toggle', plusMinusMobileActivationProgress, showMobileActivationDetails);
			if($('#mobileActivationCode-js').html() == '')
			{
				var blockUpdateProgress = showMobileActivationDetails.find('.blockUpdateProgress-js');
				blockUpdateProgress.show();
				var checkAjaxCaseName = 'mobileActivationCode';
				var statusText;
				CheckAJAX.AddCase(
					checkAjaxCaseName,
					{
						// url: url, get from the current page always with current query
						data:
						{
							mobileActivationCode : 1
						},
						/**
						 *
						 * @param response
						 * @returns {boolean}
						 */
						ValidateResponse : function(response){
							return (
								((typeof response.error != 'undefined') && (response.error ==  -998))
								|| ((typeof response.error != 'undefined') && (response.error ==  -999))
								|| (typeof response.mobileActivationCode != 'undefined')
							);
						},
						/**
						 *
						 * @param response
						 * @returns {boolean}
						 */
						SuccessCallBack : function(response){
							if ((typeof response.error != 'undefined') && (response.error ==  -998))
							{
								TPMSlide('toggle', $('#plusMinusMobileActivationProgress-js'), showMobileActivationDetails);
								$(location).attr('href', fullDomain);
							}
							else if((typeof response.error != 'undefined') && (response.error ==  -999))
							{
								statusText = self.statuses['s-999'];
								TPMSlide('toggle', $('#plusMinusMobileActivationProgress-js'), showMobileActivationDetails);
								Forms.ShowError(statusText, true);
							}
							else
							{
								$('#mobileActivationCode-js').html(response.mobileActivationCode);
								blockUpdateProgress.hide();
							}
							return false;
						},
						InternetOrSystemErrorCallBack : function(){
							blockUpdateProgress.hide();
							TPMSlide('hide', plusMinusMobileActivationProgress, showMobileActivationDetails);
						}
					}
				);
				CheckAJAX.Start(checkAjaxCaseName);
			}
		}
    },

	/**
	 *
	 */
    ResetPassword : function()
    {
        var self = this;
		self.status = null;
		/**
		 *
		 * @returns {boolean}
		 */
        this.CheckResetPasswordByMobile = function()
        {
			var  checkMobileActivationButton = $('.checkMobileActivationButton-js');
            checkMobileActivationButton.prop('disabled', true);
            var checkAjaxCaseName = 'checkMobile';

            CheckAJAX.AddCase(
                checkAjaxCaseName,
                {
					// url: url, get from the current page always with current query
					method : 'POST',
                    data:
                    {
                        checkResetPasswordByMobile: 1
                    },
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
                    /**
                     *
                     * @param response
                     * @returns {boolean}
                     */
                    SuccessCallBack : function(response){
						checkMobileActivationButton.prop('disabled', false);
						if (response.status < 0)
						{
							var message, height;
							switch (response.error.toString()) {
								case 'ManagePasswordForms::USER_LOGIN_ERROR':
									$(location).attr('href', fullDomain);
									return false;
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_MOBILE_MESSAGE_NOT_DELIVERED_ERROR':
									message = 'عفواً.. لم تصل الرسالة بعد! <br>يرجى التأكد من صحة الرقم الذي أرسلته، والتأكد من صحة رقم الجوال الذي أرسلت إليه!';
									height = 180;
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_MOBILE_NOT_EXIST_ERROR':
									message = 'عفواً.. الجوال الذي ارسلت منه غير مسجل لدينا يرجى ارسال الرسالة من الجوال الذي سجلت به في الموقع.';
									height = 180;
									break;
								default:
									break;
							}
							Forms.ShowError(message, true);
						}
						else
						{
							Forms.ShowError(
								'لقد تم استقبال رسالتك بنجاح سيتم نقلك لكتابة كلمة سر جديدة.', false, null,
								function(){
									$(location).attr('href', fullDomain + '/manage/password.php?a=' + response.activation);
								}
							);
						}
                        return false;
                    },
                    InternetOrSystemErrorCallBack : function(){
						checkMobileActivationButton.prop('disabled', false);
                    }
                }
            );
            CheckAJAX.Start(checkAjaxCaseName);
            return false;
        };
		/**
		 *
		 * @param formObj
		 * @returns {boolean}
		 */
        this.CheckResetPasswordByEmail = function(formObj)
        {
            Forms.DisableEnable(formObj, true);
            var checkAjaxCaseName = 'checkEmail';

            CheckAJAX.AddCase(
                checkAjaxCaseName,
                {
					// url: url, get from the current page always with current query
					method : 'POST',
                    data: formObj.serialize(),
					/**
					 *
					 * @param response
					 * @returns {boolean}
					 */
					ValidateResponse : function(response){
						return !!(response.status);
					},
                    /**
                     *
                     * @param response
                     * @returns {boolean}
                     */
                    SuccessCallBack : function(response) {
						if (response.status < 0)
						{
							var message, focus;
							switch (response.error.toString())
							{
								case 'ManagePasswordForms::USER_LOGIN_ERROR':
									$(location).attr('href', fullDomain);
									return false;
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_EMAIL_NOT_VALID_ERROR':
									message = 'عفواً.. يجب أن تضيف البريد الإلكتروني، وبشكل صحيح.';
									focus = 'email';
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_CAPTCHA_ERROR':
									message = 'عفواً.. يجب كتابة الرقم الظاهر في الصورة، وبشكل صحيح.';
									focus = 'captcha';
									Forms.ChangeCaptcha('requestForm');
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_EMAIL_NOT_FOUND_ERROR':
									message = 'عفواً.. هذا البريد الإلكتروني غير مسجل لدينا.';
									focus = 'email';
									break;
								case 'ManagePasswordForms::PASSWORD_REQUEST_TRY_AGAIN_ERROR':
									message = 'عفواً.. لم يتم الإرسال. يرجى المحاولة مرة أخرى أو <a href="/home/contact.php">مراسلتنا</a>.';
									break;
								default:
									break;
							}
							Forms.ShowError(message, true, focus ? formObj.find(':input[name=' + focus + ']') : null);
							Forms.DisableEnable(formObj, false);
						}
						else {
							formObj.resetForm();
							Forms.DisableEnable(formObj, false);
							$(location).attr('href', '?s=1');
						}
						return false;
					},
                    InternetOrSystemErrorCallBack : function(){
						Forms.DisableEnable(formObj, false);
                    }
                }
            );
            CheckAJAX.Start(checkAjaxCaseName);
            return false;
        };
		/**
		 * @param a
		 * @returns {boolean}
		 */
		this.CheckPassword = function(a)
		{
			var form = $('#passwordForm');
			Forms.DisableEnable(form, true);
			var checkAjaxCaseName = 'checkPassword';
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
					method:'POST',
					url: '?a='+a,
					data: form.serialize(),
					SuccessCallBack: function(response) {
						if (response.status < 0)
						{
							var message, focus, onClose;
							switch (response.error.toString()) {
								case 'ManagePasswordForms::USER_LOGIN_ERROR':
									$(location).attr('href', fullDomain);
									return;
									break;
								case 'ManagePasswordForms::PASSWORD_RESET_PASSWORD_LENGTH_ERROR':
									message = 'عفواً.. يجب أن تضيف كلمة السر وأن لا يقل طولها عن أربع خانات.';
									focus = 'password';
									break;
								case 'ManagePasswordForms::PASSWORD_RESET_PASSWORDS_NOT_MATCH_ERROR':
									message = 'عفواً.. يجب أن تتطابق خانة "كلمة السر" مع خانة "تأكيد كلمة السر".';
									focus = 'password2';
									break;
								case 'ManagePasswordForms::PASSWORD_RESET_PASSWORD_WEAK_ERROR':
									message = 'عفوا... كلمة السر ضعيفة يرجى استعمال كلمة سر أخرى';
									focus = 'password';
									break;
								case 'ManagePasswordForms::PASSWORD_RESET_WRONG_ACTIVATION_CODE_OR_IT_IS_DELETED':
									message = 'عفوا... حصل خطأ في وضع كلمة سر جديدة يرجى إعادة المحاولة من البداية.';
									onClose = function(){
										$(location).attr('href', fullDomain + '/manage/password.php');
									};
									break;
								default:
									break;
							}
							Forms.ShowError(message, true, (focus ? form.find(':input[name=' + focus + ']') : null), onClose);
							Forms.DisableEnable(form, false);
						}
						else
						{
							form.resetForm();
							Forms.DisableEnable(form, false);
							$(location).attr('href','?s=1&a='+a);
						}
					},
					InternetOrSystemErrorCallBack : function(){
						Forms.DisableEnable(form, false);
					}
				});
			CheckAJAX.Start(checkAjaxCaseName);
			return false;
		}
    },

	ManageShopForm : function()
	{
		/**
		 *
		 * @param uid
		 * @returns {boolean}
		 */
		this.CheckShop = function (uid)
		{
			var shopForm = $('#shopForm');
			var browser = Utils.DetectBrowser();
			var checkAjaxCaseName = 'checkShop';
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
				iframe: "true",
				url:"?u="+uid+'&browser='+browser,
				method: "POST",
				SuccessCallBack: function (response) {
					if (response.status.toString() == "1")
					{
						Forms.DisableEnable(shopForm, true);
						var url='?s=1&u='+uid;
						$(location).attr('href',url);
					} else{
						var siteShop;
						if (response.link == 0)
						{
							siteShop = 'متجرك';
						}
						else if (response.link == 1)
						{
							siteShop = 'موقعك';
						}
						var message, focus,height,tabHash;
						if ((typeof response.error != 'undefined') && (response.error ==  -999))
						{
							message = 'عفوا... يجب تسجيل الدخول أولا حتى تستطيع التعديل في متجرك او موقعك الإلكتروني.';
						}
						else
						{
							switch (response.status.toString())
							{
								case '-1':
									message= 'عفواً.. يجب إضافة رابط '+siteShop+' الإلكتروني، وأن يتكون من حروف إنجليزية و/أو أرقام فقط، وأن يبدأ بحرف، وأن لا يقل طوله عن 3 خانات.';
									height=90;
									focus= 'url';
									tabHash = 'settingsTab';
									break;
								case '-2':
									message='عفواً.. الرابط الذي ادخلته غير متوفر. يرجى اختيار رابط آخر.';
									height=60;
									focus= 'url';
									tabHash = 'settingsTab';
									break;
								case '-3':
									message='عفواً.. يجب أولاً، مراسلتنا لتسجيل رابط موقعك (الدومين)، قبل التصميم.';
									height=60;
									tabHash = 'settingsTab';
									break;
								case '-4':
									message='عفواً.. يجب إضافة اسم '+siteShop+' الإلكتروني، وبشكل صحيح.';
									height=60;
									focus= 'name';
									tabHash = 'settingsTab';
									break;
								case '-5':
									message = 'عفواً.. يجب أن يكون نوع الشعار jpg أو gif أو png، وأن لا يزيد حجمه عن ' + Math.round(maxImageSizeSpecial / 1000000) + ' ميقابايت، وأن لا يزيد عرضه عن ' + widthImageShop + ' بيكسل.';
									height=90;
									focus= 'image';
									tabHash = 'settingsTab';
									break;
								case '-6':
									message='عفواً.. يجب أن يكون نوع الصورة jpg أو gif أو png، وأن لا يزيد حجمها عن ' + Math.round(maxImageSizeSpecial / 1000000) + ' ميقابايت، وأن لا يزيد عرضها عن 972 بيكسل.';
									height=90;
									focus= 'banner';
									tabHash = 'settingsTab';
									break;
								case '-8':
									message = 'عفواً... يجب إعادة تحميل الصفحة وذلك حتى تظهر لك الصفحة بشكل كامل و صحيح';
									tabHash = 'settingsTab';
									break;
								case '-10':
									message='.عفوا... لا يمكنك إظهار صفحة موقعنا دون تحديد موقعك على الخريطة';
									tabHash = 'ourLocationTab';
									break;
								case '-11':
									message='عفوا... لا يمكنك إظهار صفحة من نحن حتى تملأ الحقل.';
									focus= 'about';
									tabHash = 'whoWeAreTab';
									break;
								case '-12':
									message='عفوا... لا يمكنك إظهار الصفحة المخصصة حتى تملأ محتواها من خلال محرر النصوص.';
									focus= 'customizePage';
									tabHash = 'customizePageTab';
									break;
								case '-20':
									message='عفوا ... يوجد بعض التاغات الغير مسموحة في إتش تي إم إل الصفحة المخصصة.';
									focus= 'customizePage';
									tabHash = 'customizePageTab';
									break;
								case '-13':
									message='عفواً.. لا يمكنك إظهار الصفحة المخصصة دون تحديد إسمها بشكل صحيح.';
									focus= 'customizePageName';
									tabHash = 'customizePageTab';
									break;
								case '-14':
									message='عفوا... يجب أن لا يزيد عدد حروف إتش تي إم إل الصفحة المخصصة عن ' + ShopMaxCustomizePage;
									focus= 'customizePage';
									tabHash = 'customizePageTab';
									break;
								case '-15':
									message="عفوا... يجب أن لا يزيد عدد حروف صفحة من نحن عن " + ShopMaxAbout;
									focus= 'about';
									tabHash = 'whoWeAreTab';
									break;
								case '-19':
									message='عفوا... لا يمكنك إختيار صفحة على أنها الصفحة الرئيسية وهي مخفية يرجى إختيار صفحة ظاهرة أخرى أو إظهار الصفحة المختارة.';
									focus= 'mainPage';
									tabHash = 'settingsTab';
									break;
								default :
									break;
							}
						}
						window.location.hash = tabHash;
						$(window).trigger("hashchange");//for IE under version 8
						Forms.ShowError(message, true, focus ? shopForm.find(':input[name=' + focus + ']') : null);
					}
				}
			});
			CheckAJAX.Start(checkAjaxCaseName, shopForm);
			return false;
		};
		/**
		 *
		 * @returns {boolean}
		 */
		this.CloseShop = function ()
		{
			var closeShopButton = $('#closeShop');
			Forms.DisableEnable(closeShopButton, true);
			var checkAjaxCaseName = 'closeShop';
			CheckAJAX.AddCase(
				checkAjaxCaseName,
				{
				method:'POST',
				url: '?u=' + Utils.getParam('u'),
				dataType:'json',
				data:closeShopButton.serialize(),
				SuccessCallBack: function(response) {
					var message;
					if (response.status.toString() == '-1')
					{
						message= 'حدث خطأ الرجاء المحاولة مرة اخرى';
						Forms.DisableEnable(closeShopButton, false);
						Forms.ShowError(message, true);
					}
					else if (response.status.toString() == '-8')
					{
						message = 'عفواً... يجب إعادة تحميل الصفحة وذلك حتى تظهر لك الصفحة بشكل كامل و صحيح';
						Forms.DisableEnable($('#closeShop'), false);
						Forms.ShowError(message, true);
					}
					else if ((typeof response.error != 'undefined') && (response.error ==  -999))
					{
						message = 'عفوا... يجب تسجيل الدخول أولا حتى تستطيع إغلاق متجرك او موقعك الإلكتروني.';
						Forms.DisableEnable($('#closeShop'), false);
						Forms.ShowError(message, true);
					}
					else
					{
						closeShopButton.clearForm();
						Forms.DisableEnable(closeShopButton, true);
						var url='?s=2';
						$(location).attr('href',url);
					}
				},
				InternetOrSystemErrorCallBack : function(){
					Forms.DisableEnable(closeShopButton, false);
				}
			});
			CheckAJAX.Start(checkAjaxCaseName);
			return false;
		};
	},

	UpdateUserForm : function()
	{
		/**
		 *
		 * @param uid
		 * @returns {boolean}
		 */
		this.UpdateUser = function (uid)
		{
			var userForm = $('#userForm');
			Forms.DisableEnable(userForm, true);
			var checkAjaxCaseName = 'updateUser';
			CheckAJAX.AddCase(checkAjaxCaseName,
				{
					method:'POST',
					url: '?uid='+uid,
					data:userForm.serialize(),
					SuccessCallBack: function(response)
					{
						if (response.status < 0)
						{
							var message, focus, height;
							switch(response.error.toString())
							{
								case '-999':
								case 'UpdateForm::UPDATE_USER_USER_MUST_LOGIN_ERROR':
									message = 'عفوا... يجب تسجيل الدخول أولا حتى تستطيع تعديل معلوماتك الشخصية.';
									break;
								case 'UpdateForm::UPDATE_USER_NOT_AGREED_TERMS_ERROR':
									message='عفواً.. يجب الموافقة على اتفاقية استخدام الموقع.';
									focus = 'agreed';
									break;
								case 'UpdateForm::UPDATE_USER_PASSWORD_IS_LESS_THAN_FOUR_CHAR_ERROR':
									message='عفواً.. يجب أن لا يقل طول كلمة السر عن أربعة خانات.';
									height= 60;
									focus = 'password';
									break;
								case 'UpdateForm::UPDATE_USER_PASSWORD_WEAK_ERROR':
									message='عفوا... كلمة السر ضعيفة يرجى استعمال كلمة سر أخرى';
									height= 60;
									focus = 'password';
									break;
								case 'UpdateForm::UPDATE_USER_PASSWORDS_NOT_MATCH_ERROR':
									message='عفواً.. يجب أن تتطابق خانة "كلمة السر" مع خانة "تأكيد كلمة السر".';
									height= 60;
									focus = 'password2';
									break;
								case 'UpdateForm::UPDATE_USER_PASSWORD_CONTAINS_USERNAME_ERROR':
									message='عفواً.. يجب أن لا تحتوي كلمة السر على اسم المستخدم، وأن لا تكون سهلة.';
									height= 60;
									focus = 'password';
									break;
								case 'UpdateForm::UPDATE_USER_COUNTRY_NAME_IS_NOT_ARABIC_ERROR':
									message='عفواً.. يجب أن تضيف الدولة باللغة العربية، وبشكل صحيح.';
									height= 60;
									focus = 'countryOther';
									break;
								case 'UpdateForm::UPDATE_USER_CITY_NAME_IS_NOT_ARABIC_ERROR':
									message='عفواً.. يجب أن تختار المدينة.';
									focus = 'city';
									break;
								case 'UpdateForm::UPDATE_USER_NAME_IS_NOT_ARABIC_ERROR':
									message='عفواً.. يجب أن تضيف الاسم الكامل باللغة العربية، وبشكل صحيح.';
									height= 60;
									focus = 'name';
									break;
								case 'UpdateForm::UPDATE_USER_BIRTHDATE_IS_NOT_VALID_ERROR':
									message='عفواً.. يجب أن تختار تاريخ الميلاد الصحيح.';
									focus = 'birthdate';
									break;
								case 'UpdateForm::UPDATE_USER_CHECK_INFO1_ERROR':
									message= 'عفواً.. يجب التأكد من صحة ودقة المعلومات، والموافقة على النقطة الأخيرة في قسم إرسال الطلب.';
									height= 80;
									focus = 'checkInfo1';
									break;
								case 'UpdateForm::UPDATE_USER_SET_ERROR':
									message = 'عفواً .. حصل خطأ باسم "' + response.error + '" يرجى المحاولة مرة أخرى وإذا تكرر الخطأ يرجى مراسلة الإدارة.';
									break;
								default :
									break;
							}
							Forms.DisableEnable(userForm,false);
							Forms.ShowError(message, true, focus ? userForm.find(':input[name=' + focus + ']') : null);
						}
						else if (response.status.toString() == '1')
						{
							Forms.DisableEnable(userForm, true);
							var getVar = '?s=1' + '&uid='+uid;
							$(location).attr('href',getVar);
						}
					},
					InternetOrSystemErrorCallBack : function(){
						Forms.DisableEnable(userForm, false);
					}
				});
			CheckAJAX.Start(checkAjaxCaseName);
			return false;
		};

		this.CountryShowHide = function()
		{
			if(document.form.country[22].selected){ document.getElementById("countryOtherID").style.display = "block"; }
			else{ document.getElementById("countryOtherID").style.display = "none"; }
			document.form.city.disabled = !document.form.country[7].selected;
		};
	},

	AddUserForm : function()
	{
		/**
		 *
		 * @returns {boolean}
		 */
		this.AddUser = function ()
		{
			var userForm = $('#userForm');
			Forms.DisableEnable(userForm, true);
			var checkAjaxCaseName = 'addUser';
			CheckAJAX.AddCase(checkAjaxCaseName,
				{
					method:'POST',
					// url: url, get from the current page always with current query
					data:userForm.serialize(),
					SuccessCallBack: function(response)
					{
						if (response.status < 0)
						{
							var message, focus, height;
								if (response.suggestions)
								{
									var suggs = ''+response.suggestions;
									var sugg = suggs.split(',');
									var suggestionsMessage = 'هذه أمثلة لأسماء متوفرة، ويمكنك الاختيار منها:<br>';
									$.each(sugg, function(key, name) {
										//TODO should not set javascript in html
										suggestionsMessage += '<a href="" onclick="$.Event(event).preventDefault(); return (new Forms.AddUserForm()).SetSuggestionUsername(' + "'" + name + "'" + ');">' +  name + '</a> ';
									});
									userForm.find('.suggestions-js').html(suggestionsMessage);
									userForm.find('.username-js').on('change', function(){
										$('#userForm').find('.suggestions-js').html('');
									});
								}
								switch(response.error.toString())
								{
									case 'RegistrationForm::REGISTER_LOGIN_USER_ERROR':
										$(location).attr('href', fullDomain);
										return;
										break;
									case 'RegistrationForm::ADD_USER_USERNAME_IS_NOT_VALID_ERROR':
										message='عفواً.. يجب أن يتكون اسم المستخدم من أحرف عربية أو إنجليزية أو أرقام أو علامة "-" أو علامة "_". وأن يبدأ بحرف، وأن لا ينتهي بعلامة "-" أو علامة "_"، وأن لا يقل طوله عن ثلاث خانات، وأن لا يتكرر فيه أي حرف أو رقم ثلاث مرات متتالية أو أكثر، وأن لا يحتوي على فراغات (مسافات خالية)، وأن لا يحتوي على علامة "ـ" لتمديد الحروف العربية.';
										height = 180;
										focus = 'username';
										break;
									case 'RegistrationForm::ADD_USER_USERNAME_HAS_SPECIAL_CHARACTERS_ERROR':
										message='عفواً.. لا يُسمح بتكرار علامة "-" أو علامة "_" في اسم المستخدم بشكل متتالي.';
										height=60;
										focus = 'username';
										break;
									case 'RegistrationForm::ADD_USER_USERNAME_IS_FORBIDDEN_ERROR':
										message='عفواً.. اسم المستخدم "'+response.username+'" غير متوفر. يرجى اختيار اسم مستخدم آخر.';
										height=60;
										focus = 'username';
										break;
									case 'RegistrationForm::ADD_USER_USERNAME_IS_EXIST_ERROR':
										message='عفواً.. اسم المستخدم "'+response.username+'" غير متوفر. يرجى اختيار اسم مستخدم آخر.';
										height = 250;
										focus = 'username';
										break;
									case 'RegistrationForm::ADD_USER_MOBILE_IS_EXIST_ERROR':
										message='عفواً.. الجوال "'+response.mobile+'" مسجل لدينا بعضوية أخرى ولا يسمح باستخدام نفس الجوال في أكثر من عضوية واحدة. فإن كانت تلك العضوية لك، فيرجى منك استعمالها لأن تعدد العضويات ممنوع، وإذا كنت نسيت كلمة سر عضويتك، فيمكنك محاولة الحصول عليها من خلال صفحة <a href="/manage/password.php">نسيت كلمة السر</a>';
										height=150;
										break;
									case 'RegistrationForm::ADD_USER_PASSWORD_IS_LESS_THAN_FOUR_CHAR_ERROR':
										message='عفواً.. يجب أن لا يقل طول كلمة السر عن أربعة خانات.';
										height= 60;
										focus = 'password';
										break;
									case 'RegistrationForm::ADD_USER_PASSWORD_WEAK_ERROR':
										message='عفوا... كلمة السر ضعيفة يرجى استعمال كلمة سر أخرى';
										height= 60;
										focus = 'password';
										break;
									case 'RegistrationForm::ADD_USER_PASSWORDS_NOT_MATCH_ERROR':
										message='عفواً.. يجب أن تتطابق خانة "كلمة السر" مع خانة "تأكيد كلمة السر".';
										height= 60;
										focus = 'password2';
										break;
									case 'RegistrationForm::ADD_USER_PASSWORD_CONTAINS_USERNAME_ERROR':
										message='عفواً.. يجب أن لا تحتوي كلمة السر على اسم المستخدم، وأن لا تكون سهلة.';
										height= 60;
										focus = 'password';
										break;
									case 'RegistrationForm::USER_ADD_CAPTCHA_ERROR':
										message = 'عفواً.. يجب كتابة الرقم الظاهر في الصورة، وبشكل صحيح.';
										height=60;
										Forms.ChangeCaptcha('userForm');
										focus = 'captcha';
										break;
									case 'RegistrationForm::ADD_USER_EMAIL_DUPLICATION_ERROR':
										message='عفواً .. البريد الالكتروني الخاص بشبكة التواصل الاجتماعية مسجل لدينا من قبل فإن كنت تملك عضوية في موقعنا يمكنك الدخول بها أو يمكنك استعادتها عن طريق نموذج <a href="/manage/password.php">نسيت كلمة السر</a>.';
										height=150;
										break;
									case 'RegistrationForm::ADD_USER_EXTERNAL_ID_DUPLICATION_ERROR':
										message='عفواً .. المعرف الخاص بشبكة التواصل الاجتماعية مسجل لدينا من قبل فإن كنت تملك عضوية في موقعنا يمكنك الدخول بها أو يمكنك استعادتها عن طريق نموذج <a href="/manage/password.php">نسيت كلمة السر</a>.';
										height=150;
										break;
									case 'RegistrationForm::ADD_USER_SET_ERROR':
										message = 'عفواً .. حصل خطأ باسم "' + response.error + '" يرجى المحاولة مرة أخرى وإذا تكرر الخطأ يرجى مراسلة الإدارة.';
										break;
									default :
										break;
								}
							Forms.DisableEnable(userForm,false);
							Forms.ShowError(message, true, focus ? userForm.find(':input[name=' + focus + ']') : null);
						}
						else if (response.status.toString() == '1')
						{
							Forms.DisableEnable(userForm, false);
							userForm.resetForm();
							var getVar = '?s=1';
							$(location).attr('href',getVar);
						}
					},
					InternetOrSystemErrorCallBack : function(){
						Forms.DisableEnable(userForm, false);
					}
				});
			CheckAJAX.Start(checkAjaxCaseName);
			return false;
		};

		this.SetSuggestionUsername = function(name)
		{
			var userForm = $('#userForm');
			userForm.find('.username-js').val(name);
			userForm.find('.suggestions-js').html('');
			return false;
		};
	}
};
var CheckAJAX = {
	cases : {},
	defaults : {
		autoStart : false, // this is to disable starting with page if needed
		timer : null, // internal
		delay : null, // obligatory when repeated check is needed
		SuccessCallBack : null, // obligatory, and it should take one argument of type json object. If returned true, the timer will rerun
		ValidateResponse : null, // if provided and return false, the FailCallBack will be called
		FailCallBack : null, // obligatory when ValidateResponse is provided. If return true, the timer will rerun
		InternetOrSystemErrorCallBack : null, // if provided and return true, it will rerun the timer
		method : 'GET',
		inProgress : null
	},
	"msgErrorInternetOrSystem" : "عفواً... حصل خطأ، يرجى تفقّد إتصالك بالإنترنت وإعادة المحاولة، وفي حال تكرر الخطأ يرجى مراسلتنا.",

	AddCase : function(caseName, options){
		CheckAJAX.cases[caseName] = {
			options : jQuery.extend({}, CheckAJAX.defaults, options)
		};
	},

	Init : function(){
		for(var index in CheckAJAX.cases){
			if(CheckAJAX.cases[index].options.url && CheckAJAX.cases[index].options.SuccessCallBack && CheckAJAX.cases[index].options.autoStart){
				CheckAJAX.Start(index);
			}
		}
	},

	Start : function(index, form){
		if(CheckAJAX.cases[index].options.inProgress){
			Utils.Log(index + 'inProgress');
			CheckAJAX.RunTimer(index);
			return;
		}
		CheckAJAX.cases[index].options.inProgress = true;
		var runTimerAfterComplete = false;
		var obj = {
			cache: false,
			type: CheckAJAX.cases[index].options.method,
			dataType: "json",
			success: function(response){
				Utils.Dir(response);
				if(!response || typeof(response) != "object"){
					Forms.ShowError(CheckAJAX.msgErrorInternetOrSystem + "\n(02)", true);
					if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack){
						if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack()){
							runTimerAfterComplete = true;
						}
					}else{
						runTimerAfterComplete = true;
					}
				}else{
					if(CheckAJAX.cases[index].options.ValidateResponse){
						if(CheckAJAX.cases[index].options.ValidateResponse(response)){
							if(CheckAJAX.cases[index].options.SuccessCallBack(response)){
								runTimerAfterComplete = true;
							}
						}else{
							if(CheckAJAX.cases[index].options.FailCallBack){
								if(CheckAJAX.cases[index].options.FailCallBack(response)){
									runTimerAfterComplete = true;
								}
							}else{
								Forms.ShowError(CheckAJAX.msgErrorInternetOrSystem+ "\n(03)", true);
								if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack){
									if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack()){
										runTimerAfterComplete = true;
									}
								}else{
									runTimerAfterComplete = true;
								}
							}
						}
					}else{
						if(CheckAJAX.cases[index].options.SuccessCallBack(response)){
							runTimerAfterComplete = true;
						}
					}
				}
			},
			error: function (XMLHttpRequest, textStatus, errorThrown){
				Forms.ShowError(CheckAJAX.msgErrorInternetOrSystem + "(01)", true);
				if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack){
					if(CheckAJAX.cases[index].options.InternetOrSystemErrorCallBack(XMLHttpRequest, textStatus, errorThrown)){
						CheckAJAX.RunTimer(index);
					}
				}else{
					// don't run timer again, so we don't annoy the user when the internet is not working
					//CheckAJAX.RunTimer(index);
				}
			},
			complete: function(jqXHR,textStatus){
				/*we have to set this line because of bug in ajaxForm because it set this value to true before submit
				 the form and set it to false in success only
				 we have to update this code after update forms plugin*/
				if(form){form.attr('submitRunning',false);}
				CheckAJAX.cases[index].options.inProgress = false;
				if(runTimerAfterComplete)
				{
					CheckAJAX.RunTimer(index);
				}
			}
		};

		if( typeof CheckAJAX.cases[index].options.url != 'undefined')
		{
			obj.url = CheckAJAX.cases[index].options.url;
		}
		else{
			obj.url = location.search;
		}

		if(form)
		{
			if( typeof CheckAJAX.cases[index].options.iframe != 'undefined')
			{
				obj.iframe = CheckAJAX.cases[index].options.iframe;
			}
			form.ajaxSubmit(obj);
		}
		else
		{
			if( typeof CheckAJAX.cases[index].options.data != 'undefined')
			{
				obj.data = CheckAJAX.cases[index].options.data;
			}
			if(typeof obj.url != 'undefined')
			{
				if(obj.url.indexOf('?') != -1)
				{
					obj.url += '&ajax=1';
				}
				else
				{
					obj.url += '?ajax=1';
				}
			}
			else
			{
				obj.url = '?ajax=1';
			}
			$.ajax(obj);
		}
	},

	"RunTimer" : function(index){
		if(CheckAJAX.cases[index].options.delay){
			CheckAJAX.cases[index].options.timer = window.setTimeout("CheckAJAX.Start('" + index + "')", CheckAJAX.cases[index].options.delay);
		}
	}

};
var Modal =
{
	counter : 2000,
	modals : [],

	defaultOptions: {
		beforeGetContents: function(modal){},
		afterGetContents: function(modal){},
		getContents: function(modal){},
		afterShow: function(modal){},
		onOkay: function(modal){},
		onCancel: function(modal){},
		beforeClose: function(modal){},
		afterClose: function(modal){},
		width: 'auto',
		height: 'auto',
		message: true // the contents are only messages
	},
	Start : function(data)
	{
		var modal = {
			data : data
		};
		modal.id = ++Modal.counter;
		// Generate the HTML and add it to the document
		modal.overlay = 	$('<div id="modal-overlay' + modal.id + '" class="modalOverlay"></div>');
		modal.container = 	$('<div id="modal-container' + modal.id + '" class="modalContainer"></div>');
		modal.content = 	$('<div id="modal-content' + modal.id + '" class="modalContent"></div>');
		modal.closeButton = $('<a id="modal-close' + modal.id + '" class="modalClose" href="#" title="إغلاق"></a>');

		/*modal.overlay.css({
			'-webkit-filter': 'blur(20px)',
			'-moz-filter': 'blur(20px)',
			'-o-filter': 'blur(20px)',
			'-ms-filter': 'blur(20px)',
			'filter': 'blur(20px)',
			'opacity': 0.9
		});*/
		modal.container.hide();
		modal.overlay.hide();
		modal.container.append(modal.content, modal.closeButton);
		// Blur current activeElement so no keys will be passed to it
		if(typeof document.activeElement == 'object')
		{
			$(document.activeElement).blur();
		}

		// Open the modal
		modal.open = function ()
		{
			modal.options = jQuery.extend({}, Modal.defaultOptions, data.options);
			if(modal.options.message)
			{
				modal.overlay.on('click', function(){
					modal.close();
				});
				/*$('body').on('click.myModal' + modal.id, function(event){
					modal.close();
				})*/
			}
			modal.options.beforeGetContents(modal);
			modal.content.empty().append(modal.options.getContents(modal));
			modal.options.afterGetContents(modal);
			modal.overlay.css({
				"z-index": modal.id
			});
			modal.container.css({
				"z-index": modal.id
			});
			$(document).on('keydown.myModal' + modal.id, function(e)
			{
				if (e.keyCode == 27 || e.keyCode == 13) {
					modal.close(e.keyCode == 13 ? 1 : 0);
				}
			});
			modal.overlay.show();
			modal.container.show();
			modal.updatePosition();
			modal.container.hide();
			modal.container.fadeIn(300, function(){
				modal.options.afterShow(modal);
			})
		};

		modal.updatePosition = function()
		{
			var gapToWindow = 90;
			modal.content.css({ width:
				modal.options.width == 'auto'
					?
					($(window).width() < 300 ? '90%' : 300)
					:
					modal.options.width
			});
			if(modal.content.innerWidth() > ($(window).width() - gapToWindow))
			{
				modal.content.css({ width: $(window).width() - gapToWindow, 'overflow-x' : 'auto' })
			}
			if(modal.content.innerHeight() > ($(window).height() - gapToWindow))
			{
				modal.content.css({ height: $(window).height() - gapToWindow, 'overflow-x' : 'auto' })
			}
			// make the container the same as the content
			modal.container.css({ width: modal.content.innerWidth() }); // this should be separated in its command
			modal.container.css({ height: modal.content.innerHeight() }); // this should be separated in its command
			modal.container.css({
				"margin-top": (-0.5 * modal.container.outerHeight()),
				"margin-left": (-0.5 * modal.container.outerWidth())
			});
			// this is just in case the browser does not support negative margins
			if(modal.container.offset().left < 0 || modal.container.offset().top < 0)
			{
				modal.container.css({ 'left': 0, 'top': 0, 'margin-left': 0, 'margin-top': 0 });
			}
		};

		// Close the modal
		modal.close = function (okay) {
			if(okay)
			{
				modal.options.onOkay(modal);
			}
			else
			{
				modal.options.onCancel(modal);
			}
			modal.options.beforeClose(modal);
			modal.container.fadeOut(300, function(){
				modal.overlay.hide();
				modal.content.empty();
				$(document).off('keydown.myModal' + modal.id);
				modal.options.afterClose(modal);
				modal.container.remove();
				modal.overlay.remove();
			});
			$('body').off('click.myModal' + modal.id);
		};

		$(document).ready(function(){
			var generalBody = $('.generalBody');
			if(generalBody.length == 1)
			{
				generalBody.append(modal.overlay, modal.container);
			}
			else// this is the case of maximize ckEditor because when it maximize there is not generalBody class
			{
				$('body').append(modal.overlay, modal.container);
			}
		});

		modal.closeButton.click(function(e){
			e.preventDefault();
			modal.close(0);
		});
		modal.open();
		Modal.modals[modal.id] = modal;
		return modal;
	}
};
var SlideForm =
{
	// forms by containerId
	forms : {},

	Start : function(containerId, data, buttonId, buttonClass)
	{
		var form;
		if(typeof SlideForm.forms[containerId] == 'undefined')
		{
			form = {
				containerId: containerId,
				buttonId: buttonId,
				data : data,
				enableLoading: false,
				buttonClass: buttonClass,
				beforeGetContents: function(form, afterAction){ afterAction(form); },
				afterGetContents: function(form, afterAction){ afterAction(form); },
				getContents: function(form, afterAction){ afterAction(form); },
				afterShow: function(form, afterAction){ afterAction(form); },
				title : 		$('<div class="boxDarkHead"></div>'),
				loading :		$('<div></div>'),
				content : 		$('<div class="boxDarkBody" style="margin: 0;"></div>'),
				closeButton : 	$('<div style="text-align: left;"><a href="javascript: void(0)" class="btn closeDialog" title="إغلاق"></a></div>'),
				titleText :		'',
				container :		$('#' + containerId),
				button : 		$('#' + buttonId),
				backgroundColor:null
			};

			jQuery.extend(form, data);

			if(form.backgroundColor)
			{
				form.content.css('background-color', form.backgroundColor);
			}

			SlideForm.forms[form.containerId] = form;

			form.ActivateButton = function(form, activate)
			{
				if(activate)
				{
					form.button
						.removeClass(form.buttonClass)
						.addClass(form.buttonClass + 'Active');
				}
				else
				{
					form.button
						.removeClass(form.buttonClass + 'Active')
						.addClass(form.buttonClass);
				}
			};

			/*
			 this is to start use css transitions
			 form.slideDown(form)
			 {$("#icon").addClass('thisClassWillApplyMyCSSAnimation').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
			 //DO WHATEV
			 $('#icon').css('opacity', '1');
			 });
			 if(Modernizr.csstransitions && Modernizer.tou)
			 };

			 form.slideUp(form)
			 {

			 };
			 */
			form.Close = function(form, clear, afterAction)
			{
				if(typeof afterAction != "function")
				{
					afterAction = function(){};
				}
				form.container.slideUp({ duration: 500, complete: function(){
					if(clear)
					{
						form.container.empty();
						delete SlideForm.forms[form.containerId];
					}
					if(form.buttonClass)
					{
						form.ActivateButton(form, false);
					}
					afterAction();
				}});
			};

			form.Open = function(form)
			{
				if(form.buttonClass)
				{
					form.ActivateButton(form, true);
				}
				form.title.hide();
				form.loading.hide();
				form.content.hide();
				form.container.show();
				Forms.Scroll(form.container, function(){
					form.container.hide();
					form.title.show();
					form.content.show();
					form.container.slideDown({ duration: 500, complete: function(){
						Forms.FocusFirstInput(form);
					}});
				});
			};

			form.closeButton.find('a').click(function(){
				form.Close(form, false);
			});

			if(form.buttonClass)
			{
				form.ActivateButton(form, true);
			}
			form.PopulateContents = function(form)
			{
				form.content.append(form.getContents(form, function(){}));
				form.content.append(form.closeButton);
				form.title.show();
				form.content.show();
				form.afterGetContents(form, function(form){
					form.container.slideDown(500, function(){
						Forms.FocusFirstInput(form);
					});
				});
			};

			form.container.hide();
			form.title.hide();
			form.title.html(form.titleText);
			form.loading.hide();
			form.content.hide();
			form.container.append(form.title, form.loading, form.content);
			form.container.show();
			Forms.Scroll(form.container, function(){
				form.container.hide();
				if(form.enableLoading)
				{
					form.container.show();
					form.loading.slideDown(200, function(){
						form.beforeGetContents(form, function(form){
							form.loading.slideUp(200, function(){
								form.container.hide();
								form.PopulateContents(form);
							});

						});
					});
				}
				else
				{
					form.beforeGetContents(form, function(form){
						form.PopulateContents(form);
					});
				}
			});

			return form;
		}
		else
		{
			form = SlideForm.forms[containerId];
			var isVisible = form.container.is(":visible");
			if(isVisible)
			{
				form.Close(form);
			}
			else
			{
				form.Open(form)
			}
		}
	},

	Alternate : function(afterAction, arrayCheck)
	{
		var started = false;
		for(var x in arrayCheck)
		{
			if(arrayCheck[x] && typeof SlideForm.forms[arrayCheck[x]] != 'undefined' && SlideForm.forms[arrayCheck[x]].container.is(":visible"))
			{
				SlideForm.forms[arrayCheck[x]].Close(SlideForm.forms[arrayCheck[x]], false, (!started ? afterAction : null));
				started = true;
			}
		}
		if(!started){ afterAction(); }
	}
};
/*
 all types links in mstaml
 http://www.mstamlalaa.com/imagesData/adsf_ads_a_d-i141395210940630084.jpg?&w=700&h=0
 http://www.hdwallpapersinn.com/wp-content/uploads/2014/07/sunflowers_nature-normal-660x330.jpg


 https://www.youtube.com/watch?v=DHTgL-Sm7_w
 https://www.youtube.com/embed/DHTgL-Sm7_w
 https://www.youtube.com/watch_popup?v=DHTgL-Sm7_w
 youtu.be/DHTgL-Sm7_w

 http://www.mstamlalaa.com/1771686
 http://www.mstamlalaa.com/1771686/%D8%B4%D9%8A%D8%A8_%D8%B4%D8%B3%D9%8A%D8%A8/
 http://www.mstamlalaa.com/1771686/%D8%B4%D9%8A%D8%A8_%D8%B4%D8%B3%D9%8A%D8%A8
 http://www.mstamlalaa.com/1771686/شيب_شسيب/
 http://www.mstamlalaa.com/1771686/شيب_شسيب
 http://www.google.com

 4256.24231.7250

 davelion3@gmail.com

 exmaple.com@site.com
*/

var Linkify = {
	linksXRegExp : null,
	imageXRegExp : null,
	youtubeXRegExp : null,
	waselXRegExp : null,

	ReplaceLinks : function(container, showImages, wasel)
	{
		if(!Linkify.linksXRegExp)
		{
			Linkify.linksXRegExp = XRegExp.cache(
				"\n\
				(http://|https://|ftp://)? # the protocol part is optional\n\
				((?:(?:[a-z0-9]+\\-)*[a-z0-9]+\\.)+) # the domain name except the cTLD. with trailing dot\n\
				(AC|AD|AE|AERO|AF|AG|AI|AL|AM|AN|AO|AQ|AR|ARPA|AS|ASIA|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BIZ|BJ|BL|BM|BN|BO|BR|BS|BT|BV|BW|BY|BZ|CA|CAT|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|COM|COOP|CR|CU|CV|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EDU|EE|EG|EH|ER|ES|ET|EU|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GOV|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|INFO|INT|IO|IQ|IR|IS|IT|JE|JM|JO|JOBS|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MF|MG|MH|MIL|MK|ML|MM|MN|MO|MOBI|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAME|NC|NE|NET|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|ORG|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PRO|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|ST|SU|SV|SY|SZ|TC|TD|TEL|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TP|TR|TRAVEL|TT|TV|TW|TZ|UA|UG|UK|UM|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|YE|YT|YU|ZA|ZM|ZW) # the cTLD. Needs to be updated every while\n\
				(:\\d+)? # port part is optional\n\
				(?![a-z0-9\\-]) # negative lookahead so we do not have any domain character directly after the cTLD or the port\n\
				((?:/(?:[^\\sابتثجحخدذرزسشصضطظعغفقكلمنهويأإآىئؤءةـ]|\\S*(?=/))*)*) # the directory part of the url\n\
				"
				, 'igx'
			);
		}
		if(!Linkify.imageXRegExp)
		{
			Linkify.imageXRegExp = XRegExp.cache(
				"^.+\\.(?:jpg|gif|png|jpeg)(?:\\?.*)?$"
				, 'i'
			);
		}
		if(!Linkify.youtubeXRegExp)
		{
			Linkify.youtubeXRegExp = XRegExp.cache(
				"(?:youtube\\.com/(?:watch\\?(?:[^&]*&)*v=|watch_popup\\?(?:[^&]*&)*v=|v/|embed/)|(?:youtu\\.be/))([^#&'\"\\?<>/\\[\\]\\{\\}]{4,})"
			);
		}
		if(!Linkify.waselXRegExp)
		{
			Linkify.waselXRegExp = XRegExp.cache(
				'(?:^|\\s)([0-9]{4}\\.[0-9]{5}\\.[0-9]{4})(?:\\s|$)'
				, 'g'
			);
		}
		var text = container.html().replace(/<\s*br\s*\/?\s*>\r?\n?/gi,'\r\n'); // added \r\n to not duplicate the breaks done in php
		text = XRegExp.replace(text, Linkify.linksXRegExp, function(match, protocol, domain, tld, port, uri, i, text) {
			if((i > 0 && text.charAt(i - 1) == '@') || ((i + match.length) < text.length && text.charAt(i + match.length) == '@'))
			{
				// if url is not part of email then make it clickable. Example all parts of this email wont be clickable: exmaple.com@site.com
				return match;
			}
			else
			{
                // this te reverse htmlspecialchars but we have to escape it correctly
                // order is important. replacing & should be the last
				// we should take care of that, part of the url is case-sensitive and part is not
                match = match.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&#039;/g, "'").replace(/&amp;/g, '&');
				// add to itself, because, it could be the end of a previous link ?????
				var fullDomain = domain + tld;
				var externalLink = fullDomain.split('.').slice(-2).join('.') !== window.domain;
				var addProtocol = (protocol ? '' : 'http://');
				if(!externalLink && window.isHTTPS)
				{
					if(protocol == 'http://')
					{
						match = match.replace(/^http:\/\//, '');
						addProtocol = 'https://';
					}
					else if(protocol == '')
					{
						addProtocol = 'https://';
					}
				}
				var youtubeMatch = null;
				if(XRegExp.test(match, Linkify.imageXRegExp)){ // image link
					if(showImages && !externalLink && uri.length && uri.indexOf('/imagesData/') === 0){ // item's image
                        return '<div class="xCenter"><img class="dB2" src="' + Utils.fixedEncodeURI(addProtocol + match) + '"></div>';
					}else{ // other image
                        return '<a href="' + (externalLink ? hostPath + '/out.php?l=' + encodeURIComponent(addProtocol + match) : Utils.fixedEncodeURI(addProtocol + match)) + '" class="linkifiedImage" onclick="$.Event(event).preventDefault(); Linkify.ToggleExternalImage(this);" target="_blank">' + Utils.EscapeHTML(Linkify.TruncateLinkText(match)) + '</a>';
					}
				}
				else if( // youtube link
					(youtubeMatch = XRegExp.exec(match, Linkify.youtubeXRegExp))
						&& $.isArray(youtubeMatch) && youtubeMatch.length
					)
				{
					var youtubeLink = 'http://www.youtube.com/embed/' + youtubeMatch[1] + '?rel=0';
                    return '<a href="' + hostPath + '/out.php?l=' + encodeURIComponent(youtubeLink) + '" class="linkifiedYoutubeLink" onclick="$.Event(event).preventDefault(); Linkify.ToggleYoutube(this);" target="_blank">' + Utils.EscapeHTML(Linkify.TruncateLinkText(match)) + '</a>';
				}
				else if(externalLink)
				{
                    return '<a href="'+ hostPath +'/out.php?l=' + encodeURIComponent(addProtocol + match) + '" class="linkifiedExternalLink" target="_blank">' + Utils.EscapeHTML(Linkify.TruncateLinkText(match)) + '</a>';
				}
				else
				{
                    return '<a href="' + Utils.fixedEncodeURI(addProtocol + match) + '" class="linkifiedInternalLink" target="_blank">' + Utils.EscapeHTML(Linkify.TruncateLinkText(match)) + '</a>';
				}
			}
		});
		if(wasel){
			text = XRegExp.replace(text, Linkify.waselXRegExp, function(match, waselCode){
				return '<a href="http://maps.google.com.sa/maps?q=' + waselCode + '" class="linkifiedWaselLink" target="_blank">' + match + '</a>';
			});
		}
		text = Utils.nl2br(text);
		container.html(text);
	},

	ToggleExternalImage : function(obj)
	{
		if($(obj).next().hasClass('linkifiedImageContainer'))
		{
			$(obj).next().remove();
		}
		else
		{
			$(obj).after('<div class="linkifiedImageContainer" style="max-width: 90%; text-align: center; margin: 0 auto;"><img style="max-width: 95%" src="/images/loading.gif"></div>');
			$(obj).next().find('img').attr('src', $(obj).attr('href'));
		}
		return false;
		//<div class="block center xCenter w100p h100p"><img id="popupBody" src="' + Utils.EscapeHTML((external && !window.site) ? fullDomain + '/out.php?l=' + escape(value) : value) + '"></div>
	},
	ToggleYoutube : function(obj)
	{
		if($(obj).next().hasClass('linkifiedYoutubeContainer'))
		{
			$(obj).next().remove();
		}
		else
		{
			$(obj).after('<div class="linkifiedYoutubeContainer" style="text-align: center; margin: 0 auto;""><iframe class="youtube-player" type="text/html" width="403" height="302" allowfullscreen frameborder="0"></iframe></div>');
			$(obj).next().find('iframe').attr('src', $(obj).attr('href'));
		}
		return false;
		//<div class="block center xCenter w100p h100p"><img id="popupBody" src="' + Utils.EscapeHTML((external && !window.site) ? fullDomain + '/out.php?l=' + escape(value) : value) + '"></div>
	},
	/**
	 * @return string
	 * TODO we have to think about this function in the case of sites because it use fullDomain for mstaml not for the site
	 */
	TruncateLinkText : function(str)
	{
		if(str.indexOf(fullDomain) === 0)
		{
			str = str.substr('http://www.'.length);
			var m = str.match(/^[^\/]+\/f?[0-9]+\/([^\/]+)/);
			if(m)
			{
				str = decodeURIComponent(decodeURIComponent(decodeURIComponent(m[1])));
				str = str.replace(/_/g, ' ')
			}
		}
		str = str + '';
		if(str.length > 50){ // truncate any url longer than 50 chars
			str = str.substr(0, 37) + '...' + str.substr(-10);
		}
		return str;
	},

	Init : function()
	{
		$('.linkify').each(function(){
			var container = $(this);
			Linkify.ReplaceLinks(
				container,
				container.hasClass('linkifyWithImages'),
				container.hasClass('linkifyWithWasel')
			);
		});
	}

};
if (!('filter' in Array.prototype)) {
	Array.prototype.filter= function(filter, that /*opt*/) {
		var other= [], v;
		for (var i=0, n= this.length; i<n; i++)
			if (i in this && filter.call(that, v= this[i], i, this))
				other.push(v);
		return other;
	};
}


/* this will run on onready jquery event */
function OnReady()
{
	Utils.ProcessDates();
	/* to load the uploaded images in the item form */
	if (Utils.ArrayIndexOf(['manage/itemadd.php','manage/itemupdate.php','manage/fradd.php','manage/frupdate.php'], page) != -1)
	{
		if(Images.initialFormImages !== null){
			Images.ShowFormImages();
			Images.Preload('/images/uploading.gif');
		}
	}
	/* to write image show slides */
	if (Utils.ArrayIndexOf(['index.php','manage/itemadd.php','manage/itemupdate.php','manage/fradd.php','manage/frupdate.php','section/item.php','forum/fr.php','home/stream.php','section/index.php','forum/index.php','site.php','shop.php'], page) != -1)
	{
		Images.WriteItemSlides(false);
	}

	/* show items for 'where is my ad' */
	if (Utils.ArrayIndexOf(['forum/index.php','section/index.php'], page) != -1)
	{
		Fetch.Items(true, window.showItems.ads);
		ItemsToggle('show', 'item', window.showItems.ads, 1);
		Fetch.Items(false, window.showItems.frs);
		ItemsToggle('show', 'fr', window.showItems.frs, 1);
	}

	/* toggle active nodes. to use, just set class to activeNode for any anchor with javascript: href */
	$('.activeNode').each(function() {
		window.location = $(this).attr('href');
	});

	if (page == 'home/stream.php'){
		Stream.Init();
	}
	if (Utils.ArrayIndexOf(['section/item.php','forum/fr.php'], page) != -1)
	{
		ThreadStreams.Init();
	}
    if(Utils.ArrayIndexOf(['manage/internal.php'], page) != -1)
    {
        EventStream.Init('EventStream');
    }
	if (page == 'index.php'){
		Slider.Init();
	}
	if (Utils.ArrayIndexOf(['manage/itemadd.php','section/item.php','forum/fr.php'], page) != -1)
	{
		CheckAJAX.Init();
	}
	if (Utils.ArrayIndexOf(['site.php','section/index.php','forum/index.php', 'section/item.php', 'forum/fr.php', 'shop.php', 'manage/internal.php', 'section/itemsthreads.php', 'forum/frsthreads.php', 'manage/frs-threads.php', 'manage/ads-threads.php'], page) != -1)
	{
		Linkify.Init();
	}
	Utils.showHiddenInfo();
	setInterval(Utils.ProcessDates, updateDateTimeIntervalsTimeOut*1000);
	Pageear.Init();
	document.cookie = "timeHM" + "=" + encodeURIComponent(Utils.GetTimeHMFromOffset(new Date().getTimezoneOffset())) + ';path=/';
}

/* ChangeColor: to change the options in a select color, only way works with IE & mozilla  */
/*This function moved to ChangeColor.js*/
function ChangeColor(field, value, css){
	if(field.value == value){ field.className = "color gWhite " + css; }else{ field.className = "color gH3 " + css; }
}

/* brands */
/* This function moved to Brands.js */
function Brands(b, m, type, brand, noFirstOption, firstLevelsBrandsAllowed){
	if(Utils.ArrayIndexOf(["4","41","42","43","46","5","51","52","55","6","61"], type) != -1){
		var section;
		if(type == "6" || type == "61"){
			section = 6;
			document.getElementById('models').style.display = "none";
			m.disabled = true;
		}else if(type == "5" || type == "51" || type == "52" || type == "55"){
			section = 5;
			document.getElementById('models').style.display = "none";
			m.disabled = true;
		}else{
			section = 4;
			document.getElementById('models').style.display = "inline";
			m.disabled = false;
		}
		document.getElementById('brands').style.display = "inline";
		b.disabled = false; /* important for verifing form */

		if(document.getElementById('subjectAutoFill1')){
			document.getElementById('subjectAutoFill1').style.display = "inline";
			document.form.sb.disabled = false;
			document.getElementById('sbSpan').style.display = (section == 4 ? 'none' : 'inline');
			document.form.forSale.disabled = false; document.form.forRent.disabled = false; document.form.forInstall.disabled = false;
			document.form.forGive.disabled = false; document.form.forSwitch.disabled = false; document.form.forBuy.disabled = false;
		}
		if(document.getElementById('subjectAutoFill2')){
			document.getElementById('subjectAutoFill2').style.display = "inline";
			document.form.subjectAutoFill.disabled = false;
		}
		var currentBrand = parseInt(b.value);
		var option;
		while(b.firstChild){ b.removeChild(b.firstChild); } /* empty the list */

		if(!noFirstOption){
			option = document.createElement('option');
			option.style.backgroundColor = "white";
			option.value = 0;
			option.innerHTML = firstLevelsBrandsAllowed ? 'كل الشركات': '';
			b.appendChild(option);
		}
		for(var ib = 0; ib < BL[section]; ib++){
			var optGroup = null;
			if(firstLevelsBrandsAllowed || !parseInt(KL[BO[section][ib]])){
				if(KL[BO[section][ib]]){ // add empty row if we have sub items
					option = document.createElement('option');
					option.value = 0 ; option.innerHTML = '____________________'; option.disabled = 'disabled'; b.appendChild(option);
				}
				option = document.createElement('option');
				option.value = BO[section][ib] ; option.innerHTML = B[section][BO[section][ib]]; b.appendChild(option);
			}else{
				optGroup = document.createElement('optgroup');
				optGroup.label = '\u00a0__________\u00a0' + B[section][BO[section][ib]] + '\u00a0__________';
			}
			for(var ik = 0; ik < parseInt(KL[BO[section][ib]]); ik++){
				option = document.createElement('option');
				option.value = KO[BO[section][ib]][ik] ; option.innerHTML = (firstLevelsBrandsAllowed ? '&nbsp; &nbsp; &nbsp;' : '') + B[section][BO[section][ib]] + '&nbsp;' + K[BO[section][ib]][KO[BO[section][ib]][ik]] + (firstLevelsBrandsAllowed ? '&nbsp; &nbsp;' : '');
				if(firstLevelsBrandsAllowed){
					b.appendChild(option);
				}else{
					optGroup.appendChild(option);
				}
			}
			if(optGroup){ b.appendChild(optGroup); }
		}
		var selected = 0;
		for(var index = 0; index < b.options.length; ++index){
			//for(var index in b.options){
			if(brand && b.options[index].value == brand){ selected = index; }
			else if(currentBrand && b.options[index].value == currentBrand){ selected = index; }
		}
		b.options[selected].selected = 1;
		b.selectedIndex = selected;
	}else{
		document.getElementById('brands').style.display = "none";
		b.disabled = true;
		document.getElementById('models').style.display = "none";
		m.disabled = true;
		if(document.getElementById('subjectAutoFill1')){
			document.getElementById('subjectAutoFill1').style.display = "none";
			document.form.sb.disabled = true;
			document.form.forSale.disabled = true; document.form.forRent.disabled = true; document.form.forInstall.disabled = true;
			document.form.forGive.disabled = true; document.form.forSwitch.disabled = true; document.form.forBuy.disabled = true;
		}
		if(document.getElementById('subjectAutoFill2')){
			document.getElementById('subjectAutoFill2').style.display = "none";
			document.form.subjectAutoFill.disabled = true;
		}
	}
	if(document.getElementById("tHint")){
		if(type == 0){ document.getElementById("tHint").innerHTML = "اختر قسم الإعلان."; }
		else{ if(TD[type]){ document.getElementById("tHint").innerHTML = TD[type]; }else{ document.getElementById("tHint").innerHTML = "كل إعلانات الأقسام الفرعية لهذا القسم"; } }
	}
}


/* locations descriptions i.e. cities */
function LocationDes(location){
	if(LD[location]){ document.getElementById("lHint").innerHTML = LD[location]; }
	else{ document.getElementById("lHint").innerHTML = "اختر مكان الإعلان."; }
}

/* BidStatus: disable or enable bid's fields */
function BidStatus(value){
	//if(value == 2){ document.form.bidStart.disabled = false; document.form.bidCurrency.disabled = false; }
	//else{ document.form.bidStart.disabled = true; document.form.bidCurrency.disabled = true; }
}

/* set & get the saved search */

function SaveSearch()
{
	Utils.SetCookie('savedSearch', window.location, 365);
	Forms.ShowError("لقد تم حفظ هذا البحث في جهازك هذا بنجاح. ويمكنك الرجوع لهذا البحث عن طريق الضغط على \"البحث المحفوظ\" في قائمة الصفحات في أعلى الموقع", false);
}
/*this function called in main layout so it will stay here in this file*/
function SavedSearch(save){
	if(save){
		if(!Utils.GetCookie('savedSearch'))
		{
			SaveSearch();
		}else{
			ShowConfirm('يوجد لديك بحث محفوظ حالياً، هل تريد حفظ هذا البحث بدلاً من البحث القديم؟', SaveSearch)
		}
	}else{
		if(Utils.GetCookie('savedSearch')){ window.location = Utils.GetCookie('savedSearch'); }
		else{ window.location = domainFull + '/section/index.php?nss=1'; }
	}
}

/* Most: show items that have most views or most threads */
/*this function called in main layout so it will stay here in this file*/
function Most(show){
	var H1 = "fS1 w50p", H1Click = "fS1 w50p fB", H2 = "f12 w30p", H2Click = "f12 w30p fB";
	if(show < 4){
		document.getElementById("mostViews").className = H1Click;
		document.getElementById("mostThreads").className = H1;
		document.getElementById("mostViewsMenu").className = "";
		document.getElementById("mostThreadsMenu").className = "none";
	}else{
		document.getElementById("mostViews").className = H1;
		document.getElementById("mostThreads").className = H1Click;
		document.getElementById("mostViewsMenu").className = "none";
		document.getElementById("mostThreadsMenu").className = "";
	}
	for(var i = 1; i <= 6; i++){
		document.getElementById("mostLink" + i).className = H2;
		if(document.getElementById("most" + i) != null){ document.getElementById("most" + i).className = "none"; }
	}
	document.getElementById("mostLink" + show).className = H2Click;
	if(document.getElementById("most" + show) != null){ document.getElementById("most" + show).className = "fS1"; }
}


//////////////////////////// Show & Hide //////////////////////////////

/* used for 'where is my ad' */
showItems = {'ads':[], 'frs':[]};

/* toggle plus minus block. action: show, hide or toggle
Note: always use \"none\" & \"\" dont use \"block\", specially for table.tr */
/*this function moved to Toggle.js file*/
function TogglePM(action, id, name){
	if(!name){ name = 'item'; }
	if(document.getElementById(name + id)){
		if(action == 'show' || (action == 'toggle' && (document.getElementById(name + id).style.display == 'none' || document.getElementById(name + id).style.display == ''))){
			document.getElementById(name + id).style.display = 'block';
			$('#' + 'plusminus' + id).removeClass('iconPlus').addClass('iconMinus');
			return 1;
		}else{
			document.getElementById(name + id).style.display = 'none';
			$('#' + 'plusminus' + id).removeClass('iconMinus').addClass('iconPlus');
			return 2;
		}
	}
	return 0;
}

/* to toggle only one item, set count = 1 */
/*this function moved to Toggle.js file*/
var theme, siteColor1, siteColor2;
function ItemsToggle(action, name, ids, meta)
{
	for(var i in ids){
		switch(TogglePM(action, ids[i] + '', name)){
			case 1:
				if(action == 'show' || meta){
					if(theme == 1){
						$('#box' + name + ids[i]).css({"margin-bottom": "0", "height": "156px"});
						if(siteColor1){ // if site
							$('#boxBorders' + name + ids[i]).css({"border-radius": "5px 5px 0 0", "border-bottom-width": "0", "background-color": siteColor1, "color": siteColor2});
						}else{
							$('#boxBorders' + name + ids[i]).css({"border-radius": "5px 5px 0 0", "border-bottom-width": "0", "background-color": "#77AADD"});
						}
					}else if(theme == 2){
						$('#box' + name + ids[i]).css({"margin-bottom": "5px"});
					}else{
						$('#box' + name + ids[i]).css({"border-radius": "5px 5px 0 0", "margin-bottom": "0"});
					}
					if(document.getElementById('meta' + name + ids[i])){ document.getElementById('meta' + name + ids[i]).style.display = 'none'; }
				}
				break;
			case 2:
				if(action == 'hide' || meta){
					if(theme == 1){
						$('#box' + name + ids[i]).css({"margin-bottom": "5px", "height": "146px"});
						if(siteColor1){ // if site
							$('#boxBorders' + name + ids[i]).css({"border-radius": "5px", "border-bottom-width": "1px", "background-color": "", "color": "blue", "border-color": siteColor1});
						}else{
							$('#boxBorders' + name + ids[i]).css({"border-radius": "5px", "border-bottom-width": "1px", "background-color": ""});
						}
					}else if(theme == 2){
						$('#box' + name + ids[i]).css({"margin-bottom": "20px"});
					}else{
						$('#box' + name + ids[i]).css({"border-radius": "5px", "margin-bottom": "20px"});
					}
					if(document.getElementById('meta' + name + ids[i])){ document.getElementById('meta' + name + ids[i]).style.display = 'block'; }
				}
				break;
		}
	}
}

/* shortcut functions */
/*these function moved to Toggle.js file*/
function ItemToggle(i, meta){ ItemsToggle('toggle', 'item', [i], meta); }
function FrToggle(i, meta){ ItemsToggle('toggle', 'fr', [i], meta); }
function TPM(id){ TogglePM('toggle', id); }

function TPMSlide(action, plusminus, container, afterAction)
{
	if(typeof afterAction != 'function'){ afterAction = function(){}; }
	if(action == 'show' && !container.is(':visible'))
	{
		plusminus.removeClass('iconPlus').addClass('iconMinus');
		container.slideDown(500, afterAction);
	}
	else if(action == 'hide' && container.is(':visible'))
	{
		plusminus.removeClass('iconMinus').addClass('iconPlus');
		container.slideUp(500, afterAction);
	}
	else if(action == 'toggle')
	{
		TPMSlide(container.is(':visible') ? 'hide' : 'show', plusminus, container, afterAction);
	}
}

/* Note: always use \"none\" & \"\" dont use \"block\", specially for table.tr  */
/*this function moved to RowShowHide.js*/
function RowShowHide(value, field){
	if(value < 0){ document.getElementById(field).style.display = ""; }
	else{ document.getElementById(field).style.display = "none"; }
}

/* This to disable and enable date controlls */
function EnableDisableDateControlles(value){
	var disable = value >= 0 ;
	document.form.sd.disabled = disable;
	document.form.sm.disabled = disable;
	document.form.sy.disabled = disable;
	document.form.ed.disabled = disable;
	document.form.em.disabled = disable;
	document.form.ey.disabled = disable;
}

/* focus or blur the hint */
/*this function moved to Hint.js*/
function Hint(field, focus){
	var fieldName;
	if(field.name){ fieldName = field.name + 'Hint'; }else{ fieldName = field + 'Hint'; }
	if(focus){
		document.getElementById(fieldName).className = "gO1";
	}else{
		document.getElementById(fieldName).className = "";
	}
}




/* remove any Kashida  */
function RemoveKashida(field, msg){
	if(field.value.indexOf("ـ") != -1){
		if(msg){ Forms.ShowError('عفواً.. يجب أن لا تحتوي هذه الخانة على علامة "_" لتمديد الحروف العربية', true); }
		field.value = field.value.replace(/ـ/g, "");
	}
}

/* replace double spaces by single space */
function RemoveSpaces(field){
	var tmp = field.value.replace(/  +/g, " ");
	if(tmp != field.value){
		field.value = tmp;
	}
}

/* remove any duplicated characters more than 3 */
function RemoveDuplicate(field){
	var tmp = field.value.replace(/(.)\1{3,}/g, "$1$1$1");
	if(tmp != field.value){
		field.value = tmp;
	}
}

/* the form quickly */
function CheckQuick(x)
{
	var Q = document.frmQuick;
	Q.x.value = convertArabicNumbersToEnglishNumbers(Utils.Trim(Q.x.value)).replace(/\u200E/g, '');/*LEFT-TO-RIGHT MARK*/
	if(Q.x.value.length < 1)
	{
		Forms.ShowError('عفواً.. يجب ملء الخانة', true, $(Q.x)); return false;
	}
	var data = Q.x.value;
	Q.action = fullDomain + "/";
	Q.fi.disabled = true; Q.i.disabled = true; Q.u.disabled = true; Q.m.disabled = true; Q.un.disabled = true; Q.table.disabled = true; Q.x.disabled = true; // no need to send these in url
	if(x == 'ad'){ Q.i.disabled = false; Q.i.value = data; Q.action += "section/item.php"; }else
	if(x == 'fr'){ Q.i.disabled = false; Q.i.value = data; Q.action += "forum/fr.php"; }else
	if(x == 'fi'){ Q.fi.disabled = false; Q.fi.value = data; Q.action += "section/index.php"; }else
	if(x == 'm'){  Q.m.disabled = false; Q.m.value = data; Q.action += "section/item.php"; }else
	if(x == 'u'){  Q.u.disabled = false; Q.u.value = data; Q.action += "manage/user.php"; }else
	if(x == 'iAd'){ Q.target = "_blank"; Q.i.disabled = false; Q.table.disabled = false; Q.i.value = data; Q.table.value = "ad"; Q.action += "adm/item.php"; }else
	if(x == 'iFr'){ Q.target = "_blank"; Q.i.disabled = false; Q.table.disabled = false; Q.i.value = data; Q.table.value = "forum"; Q.action += "adm/item.php"; }else
	if(x == 'un'){ Q.target = "_blank"; Q.un.disabled = false; Q.un.value = data; Q.action += "adm/user.php"; }
	Q.submit();
	Q.target = ""; /* i.e.: if admin click iAd then click ad, the ad will be in new page without this line */
	Q.x.disabled = false; /* return this to be non-disabled after submitting the form, so the user can go back then reuse the form */
	return true;
}

function convertArabicNumbersToEnglishNumbers(str)
{
	return str.replace(/[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669]/g, function(d) {//ARABIC-INDIC DIGIT values
			return d.charCodeAt(0) - 1632;
		}).replace(/[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g, function(d) {//EXTENDED ARABIC-INDIC DIGIT values
			return d.charCodeAt(0) - 1776;
		});
}

function ShowConfirm(message, doFunction, dontFunction)
{
	// TODO implement it using the modal dialog
	if(confirm(message))
	{
		if(typeof doFunction == 'function'){
			doFunction();
		}
	}
	else
	{
		if(typeof dontFunction == 'function'){
			dontFunction();
		}
	}
}

