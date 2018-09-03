/*!
 * BAlert.js - v2.2 - 2018-04
 *
 * Copyright (c) 2018 Behzad Nadji;
 * Licensed under the MIT license
*/
var BAlert=function(t,e,n,i,o){function r(){return{position:{X:"c",Y:"15%",staggerX:"~5px",staggerY:"5px"},title:{},content:{},mainButtons:[],exitButton:{icon:null,raw:null,text:"&times;",inlineStyle:"",threshold:3e3,visible:function(){return 0===$.timeout||$.timeout>$.exitButton.threshold}},animStart:{duration:250,delay:0,dir:"top",scale:0,rotate:0,func:"ease-in"},animExit:{duration:350,delay:0,dir:"none",scale:0,rotate:0,func:"ease-out"},callbacks:{onDisplayBegin:null,onDisplayEnd:null,onExitBegin:null,onExitEnd:null,onResize:function(){M()},onTapOutside:function(t){return function(t){t!==BAlert.alertArray[BAlert.alertArray.length-1]||K||(a(tt,"IS THE LAST ALERT ON THE STACK -- REMOVING"),H())}(t),!1},onTapInside:null},classPrefix:"bajs_",defaultClasses:{apply:!0,values:{containerDiv:"",alertBoxDiv:"border-radius:0.5rem;width:fit-content;max-width:80%;max-height:80%;font:1rem arial;border:1px solid;background-color:#eee;box-shadow:0px 10px 45px -2px rgba(0,0,0,0.75);",titleDiv:"padding:0.1rem .3rem .3rem;text-align:center",titleIcon:"vertical-align:middle;width:1.5rem;height:1.5rem;margin-top:2px",titleText:"vertical-align:middle;margin-left:2px;font-size:1rem;font-weight:bold",contentDiv:"display:flex;clear:both;padding:0.5rem;overflow:auto",contentIcon:"vertical-align:middle; margin-right:0.5rem;width:1rem;height:1rem;",contentText:"vertical-align:middle; display:table-cell;font-size:1rem",exitButton:"float:right;border:0;padding:0;line-height:0.8rem;background:transparent",exitButtonIcon:"width:1rem;height:1rem",exitButtonText:"font-size:1rem;line-height:0.5rem;vertical-align:top",mainButtonsDiv:"clear:both;text-align:center;padding:0.35rem;display:flow-root",mainButtonsIcon:"vertical-align:middle;width:1rem;height:1rem;margin-right:2px",mainButtonsText:"vertical-align:middle;margin:0 2px",mainButtons:"border-radius:0.5rem;padding:2px;margin: 0.1rem 0.2rem;font-size:0.85rem"}},inlineStyles:{containerDiv:"",alertBoxDiv:"",titleDiv:"",titleIcon:"",titleText:"",contentDiv:"",contentIcon:"",contentText:"",exitButton:"",mainButtonsDiv:"",exitButtonIcon:"",exitButtonText:"",mainButtons:"",mainButtonsIcon:"",mainButtonsText:""},iconsPath:"",startingZIndex:1e3,timeout:0,DEBUG:0}}function a(t,e){$.DEBUG&t&&console.log(J+" "+e)}function s(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function l(t){return t===Object(t)}function c(t){return Array.isArray(t)}function u(t){return l(t)&&!s(t)}function f(t){return q[t]&&q.splice(q.indexOf(t),1),document.body.contains(t)?t.parentNode.removeChild(t):null}function d(t,e,n){window.addEventListener?window.addEventListener(t,e,n):window.attachEvent&&window.attachEvent("on"+t,e),a(tt,"WINDOW CALLBACK ADDED: "+t)}function v(t,e){window.removeEventListener?window.removeEventListener(t,e):window.detachEvent&&window.detachEvent("on"+t,e),a(tt,"WINDOW CALLBACK REMOVED: "+t)}function p(t){if(t){a(tt,"SETTING SELF-DESTRUCT TIMER ("+t+"msec)");return setTimeout(function(){H()},t)}return null}function m(t,e){t&&(a(tt,"CALLBACK CALLED: "+e),t(W))}function h(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)}function x(t){return t=t||q.alertBoxDiv,[t.scrollWidth,t.scrollHeight]}function g(){return[parseFloat(q.alertBoxDiv.style.left),parseFloat(q.alertBoxDiv.style.top)]}function D(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function E(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function T(t,e,n){var i=["","-o-","-ms-","-moz-","-webkit-"];for(var o in i)i.hasOwnProperty(o)&&t.style.setProperty(i[o]+e,n)}function B(t,e){t=t||q.alertBoxDiv,a(tt,"OPACITY: "+(e=e||.5)),t.style.opacity=e}function y(t,e){t=t||q.alertBoxDiv,a(tt,"VISIBILITY: "+e),t.style.visibility=e}function b(t,e){t=t||q.alertBoxDiv,void 0===e&&(e=!1),a(tt,"ENABLE: "+e+" "+t.name),t.disabled=e}function A(t,e){if(void 0===e)return t;if(!l(e)||c(e)||function(t){return"function"==typeof t}(e))return t=e;for(var n in e)if(e.hasOwnProperty(n)){if(l(e[n])&&t[n]){t[n]=A(t[n],e[n]);continue}t[n]=e[n]}return t}function I(){var t="/*Begin BAlert default CSS classes*/";for(var e in $.defaultClasses.values)if($.defaultClasses.values.hasOwnProperty(e)){t+="\n.bajs_"+e+" {";var n=$.defaultClasses.values[e].trim().split(";");for(var i in n)n[i]&&(t+="\n  "+n[i].trim()+";");t+="\n}\n"}return t+"/*End BAlert default CSS classes*/\n"}function w(t){function e(t,e,n){var r=t.attributes;if(o+=new Array(e*i).join(" ")+"<",n){for(var a="",s=0,l=r.length;s<l;s++)a+="\n"+new Array((e+1)*i).join(" ")+r[s].nodeName+"= '"+r[s].nodeValue+"'";o+=t.tagName+a}else o+="/"+t.tagName;o+=">\n"}function n(t,i){for(e(t,i,!0),t=t.firstElementChild;t;)n(t,++i),e(t,i--,!1),t=t.nextElementSibling}var i=4,o="";return n(t,0),e(t,0,!1),o}function O(){$.callbacks.onResize&&$.callbacks.onResize(W)}function S(t){q.alertBoxDiv.contains(t.target)?(a(tt,"CLICK INSIDE ALERT DETECTED"),$.callbacks.onTapInside&&$.callbacks.onTapInside(W)):(a(tt,"CLICK OUTSIDE ALERT DETECTED"),$.callbacks.onTapOutside&&$.callbacks.onTapOutside(W))}function C(t){S(t)}function N(){"center"!==$.position.X&&"Center"!==$.position.X&&"C"!==$.position.X||($.position.X="c"),"center"!==$.position.Y&&"Center"!==$.position.X&&"C"!==$.position.X||($.position.Y="c"),$.iconsPath.length>0&&"/"!==$.iconsPath.charAt($.iconsPath.length-1)&&($.iconsPath+="/"),$.exitButton.raw?($.exitButton.icon="",$.exitButton.text=""):$.exitButton.icon?$.exitButton.text="":$.exitButton.text||($.exitButton.text="&times")}function k(t,e,n,i){void 0===i&&(i=""),a(tt,"BUILDING "+e+i+" <"+n+">");var o=t.appendChild(document.createElement(n));return o.name=e+i,o.id=e+i+"_"+_,o.className=$.defaultClasses.apply?"def_"+e+"_"+_:$.classPrefix+e,$.inlineStyles[e]&&(o.style.cssText+=";"+$.inlineStyles[e]),o}function L(t,e,n){var i;void 0===n?(i=$[e],n=""):i=$[e][n];var o=k(t,e,"BUTTON",n);return i.raw?o.innerHTML=i.raw:(i.icon&&(q[e+"Icon"+n]=k(o,e+"Icon","IMG",n),q[e+"Icon"+n].src=$.iconsPath+i.icon),i.text&&(q[e+"Text"+n]=k(o,e+"Text","SPAN",n),q[e+"Text"+n].innerHTML=i.text)),i.inlineStyle&&(o.style.cssText+=";"+i.inlineStyle),o.text=i.text,o.index=parseInt(n),o.name=e+n,q[e+n]=o,o.onclick=function(){$.DEBUG&tt&&console.log(J+" BUTTON PRESSED: "+e+", text='"+o.text+"', keepAlert="+(i.keepAlert?"yes":"no")+", selfDim="+(i.selfDim?"yes":"no")+", selfDisable="+(i.selfDisable?"yes":"no")+", selfHide="+(i.selfHide?"yes":"no")+", selfRemove="+(i.selfRemove?"yes":"no")+", onClick="+(i.onClick?"f() is given":"null")),i.selfDim&&B(o),i.selfDisable&&b(o,!0),i.selfHide&&y(o,"hidden"),i.selfRemove&&setTimeout(function(){f(o)},5),i.onClick&&i.onClick(W,o),i.keepAlert||H()},o}function R(){a(it,"DEFAULT CSS CLASSES:\n"+I()+"\n"),a(et,"CONFIGURATION OPTIONS:\n"+JSON.stringify($,null,4)+"\n\n"),a(tt,"DOM BUILD STARTED"),$.defaultClasses.apply&&function(){(Q=document.createElement("style")).type="text/css";var t="";for(var e in $.defaultClasses.values)$.defaultClasses.values.hasOwnProperty(e)&&(t+=".def_"+e+"_"+_+"{"+$.defaultClasses.values[e]+"}\n");Q.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(Q),a(tt,"BUILDING DEFAULT DOM <style>")}(),function(){var t=document.getElementsByTagName("body")[0];q.containerDiv=k(t,"containerDiv","DIV"),q.containerDiv.style.height=E()+"px",q.containerDiv.style.zIndex=$.startingZIndex+j,q.containerDiv.style.position="absolute"}(),q.alertBoxDiv=k(q.containerDiv,"alertBoxDiv","DIV"),q.alertBoxDiv.style.position="fixed",$.exitButton.visible="function"==typeof $.exitButton.visible?$.exitButton.visible(W):$.exitButton.visible,($.title.text||$.title.icon||$.title.raw||$.exitButton.visible)&&(q.titleDiv=k(q.alertBoxDiv,"titleDiv","DIV"),$.title.raw?q.titleDiv.innerHTML=$.title.raw:($.title.icon&&(q.titleIcon=k(q.titleDiv,"titleIcon","IMG"),q.titleIcon.src=$.iconsPath+$.title.icon),$.title.text&&(q.titleText=k(q.titleDiv,"titleText","SPAN"),q.titleText.innerHTML=$.title.text)),$.exitButton.visible&&(q.exitButton=L(q.titleDiv,"exitButton"))),($.content.text||$.content.raw||$.content.icon)&&(q.contentDiv=k(q.alertBoxDiv,"contentDiv","DIV"),$.content.raw?q.contentDiv.innerHTML=$.content.raw:($.content.icon&&(q.contentIcon=k(q.contentDiv,"contentIcon","IMG"),q.contentIcon.src=$.iconsPath+$.content.icon),$.content.text&&(q.contentText=k(q.contentDiv,"contentText","SPAN"),q.contentText.innerHTML=$.content.text))),function(){if(q.mainButtons=[],!s($.mainButtons)){q.mainButtonsDiv=k(q.alertBoxDiv,"mainButtonsDiv","DIV");for(var t in $.mainButtons)$.mainButtons.hasOwnProperty(t)&&q.mainButtons.push(L(q.mainButtonsDiv,"mainButtons",t))}}(),a(tt,"DOM BUILD DONE"),a(nt,"BROWSER DOM STRUCTURE:\n"+w(q.containerDiv)+"\n\n"),a(ot,"INTERNAL DOM OBJECT STRUCTURE:\n"+JSON.stringify(q,null,4)+"\n\n"),y(q.alertBoxDiv,"hidden"),M()}function M(t,e){void 0!==t&&(2===arguments.length?($.position.X=t,$.position.Y=e):c(t)&&($.position.X=t[0],$.position.Y=t[1]),a(tt,"REQUEST MOVE TO: ["+$.position.X+","+$.position.Y+"]")),function(){$.position.calcX=U({raw:$.position.X,dir:"h",negOpposite:!0}),$.position.calcY=U({raw:$.position.Y,dir:"v",negOpposite:!0});var t=function(){var t=BAlert.alertArray,e=t.indexOf(W),n=1,i=1,o=W.getConf("position").X,r=W.getConf("position").Y;for(;t[e-n];)o===t[e-n].getConf("position").X&&r===t[e-n].getConf("position").Y&&i++,n+=1;return i}();$.position.calcX.val+=X({raw:$.position.staggerX,dir:"h",negOpposite:!1,size:t}).val,$.position.calcY.val+=X({raw:$.position.staggerY,dir:"v",negOpposite:!1,size:t}).val,q.alertBoxDiv.style.left=$.position.calcX.val+$.position.calcX.unit,q.alertBoxDiv.style.top=$.position.calcY.val+$.position.calcY.unit}(),a(tt,"MOVED TO: ["+$.position.calcX.val+","+$.position.calcY.val+"]")}function P(t){var e="h"===t.dir?D():E();return(t=function(t){if(t.alt=!1,t.isPerc=!1,t.isNeg=!1,t.sign=1,t.unit="px","string"==typeof t.raw&&(t.raw=t.raw.trim()),t.centered=function(t){return 0!==t&&!t}(t.raw)||"c"===t.raw,!t.centered){t.alt="string"==typeof t.raw&&"~"===t.raw.charAt(0),t.alt&&(t.raw=t.raw.substring(1)),t.isPerc="string"==typeof t.raw&&"%"===t.raw.slice(-1),t.isPerc&&(t.raw=t.raw.slice(0,-1)),t.isNeg="string"==typeof t.raw&&"-"===t.raw.slice(0,1)||"number"==typeof t.raw&&t.raw<0,t.sign=t.isNeg?-1:1,t.absVal=Math.abs(parseFloat(t.raw))||0;var e="string"==typeof t.raw?/(\d+\.*\d*)(\D+$)/g.exec(t.raw):null;t.unit=e&&e.length>0?e[e.length-1]:"px"}return t}(t)).centered?t.val=e/2:(t.isPerc&&(t.absVal=t.absVal*e/100),t.isNeg&&t.negOpposite?t.val=e-t.absVal:t.val=t.absVal,t.negOpposite||(t.val*=t.sign),"rem"===t.unit&&(t.val=h(t.val)),t.unit="px"),t}function U(t){var e=x(),n="h"===t.dir?e[0]:e[1];return(t=P(t)).centered?t.val=t.val-n/2:t.isNeg&&t.negOpposite&&(t.val=t.val-n),t}function X(t){return 1===(t=P(t)).size?t.val=0:t.alt?t.val=t.size%2==0?t.absVal:-t.absVal:t.val=(t.size-1)*t.absVal,t.val=t.val*t.sign,"rem"===t.unit&&(t.val=h(t.val)),t.unit="px",t}function F(t){var e,n,i=0,o=0,r=D(),s=E(),l=g(),u=l[0],f=l[1],d=x(),v=d[0],p=d[1],m=t.scale,h=u+v/2,T=f+p/2;if(c(t.dir))e=P({raw:t.dir[0],dir:"h",negOpposite:!0}).val,n=P({raw:t.dir[1],dir:"v",negOpposite:!0}).val;else switch(t.dir){case"left":e=-v*m/2,n=f+p/2;break;case"top":e=u+v/2,n=-p*m/2;break;case"right":e=r+v*m/2,n=f+p/2;break;case"bottom":e=u+v/2,n=s+p*m/2;break;case"top left":case"left top":e=-v*m/2,n=-p*m/2;break;case"top right":case"right top":e=r+v*m/2,n=-p*m/2;break;case"bottom left":case"left bottom":e=-v*m/2,n=s+p*m/2;break;case"bottom right":case"right bottom":e=r+v*m/2,n=s+p*m/2;break;case"left center":case"center left":e=-v*m/2,n=s/2;break;case"right center":case"center right":e=r+v*m/2,n=s/2;break;case"top center":case"center top":e=r/2,n=-p*m/2;break;case"bottom center":case"center bottom":e=r/2,n=s+p*m/2;break;case"center":case"center center":e=r/2,n=s/2;break;default:e=u+v/2,n=f+p/2}return i=e-h,o=n-T,a(tt,"CALCULATED HIDING CENTER POSITION delta: ["+i+","+o+"]"),[i,o]}function z(t){return"all "+t.duration/1e3+"s "+t.func}function Y(t,e){var n=z(t),i=function(t,e){return"translate("+e[0]+"px,"+e[1]+"px) scale("+t.scale+") "+(t.rotate?"rotate("+360*t.rotate+"deg)":"")}(t,e);a(tt,"ANIM TRANSLATION: "+JSON.stringify(e)),a(tt,"ANIM TRANSITION: "+n),a(tt,"ANIM TRANSFORM: "+i),T(q.alertBoxDiv,"transform-origin","center"),T(q.alertBoxDiv,"transition",n),T(q.alertBoxDiv,"transform",i)}function V(){var t=0;if(m($.callbacks.onDisplayBegin,"onDisplayBegin"),$.animStart.duration){a(tt,"BEGIN OF HIDE ANIMATE"),a(tt,"CURRENT pos:"+JSON.stringify(g())),a(tt,"CURRENT size:"+JSON.stringify(x()));var e=A({},$.animStart);e.rotate&&(e.rotate=-$.animStart.rotate),e.duration=0;var n=F(e);Y(e,n),t=5,setTimeout(function(){a(tt,"ANIMATE TO EXISTANCE ("+$.animStart.duration/1e3+"sec)"),y(q.alertBoxDiv,"visible");var e=z($.animStart);T(q.alertBoxDiv,"transition",e),T(q.alertBoxDiv,"transform-origin","center"),T(q.alertBoxDiv,"transform",""),t+=$.animStart.duration,setTimeout(function(){a(tt,"END OF START ANIMATE"),T(q.alertBoxDiv,"transition",""),Z=p($.timeout),m($.callbacks.onDisplayEnd,"onDisplayEnd")},t)},t)}else y(q.alertBoxDiv,"visible"),Z=p($.timeout),m($.callbacks.onDisplayEnd,"onDisplayEnd");$.callbacks.onResize&&d("resize",O),setTimeout(function(){($.callbacks.onTapOutside||$.callbacks.onTapInside)&&(d("touchstart",C,{passive:!1}),d("click",S))},5)}function H(t){(t=t||$.animExit.delay||0)>0?($.DEBUG&tt&&console.log(" DELAYED EXIT REQUESTED, delay(ms)="+t),setTimeout(function(){G()},t)):G()}function G(){K=!0,Z&&(clearTimeout(Z),Z=null),a(tt,"BEGIN OF EXIT PROCESS"),m($.callbacks.onExitBegin,"onExitBegin");var t=0;if($.animExit.duration){a(tt,"BEGIN OF EXIT ANIMATE ("+$.animExit.duration/1e3+"sec)");var e=F($.animExit);Y($.animExit,e),t=$.animExit.duration}setTimeout(function(){$.animExit.duration&&a(tt,"END OF EXIT ANIMATE"),$.callbacks.onResize&&v("resize",O),($.callbacks.onTapOutside||$.callbacks.onTapInside)&&v("click",S),($.callbacks.onTapOutside||$.callbacks.onTapInside)&&v("touchstart",C);var t=BAlert.alertArray.indexOf(W);-1!==t&&BAlert.alertArray.splice(t,1),m($.callbacks.onExitEnd,"onExitEnd"),Q&&(a(tt,"DEFAULT DOM <style> REMOVED"),Q.parentNode&&Q.parentNode.removeChild(Q)),a(tt,"END OF EXIT"),f(q.containerDiv),a(tt,"DESTROYED"),K=!1},t)}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var W=this;BAlert.alertArray=BAlert.alertArray||[];var j=s(BAlert.alertArray)?1:BAlert.alertArray.slice(-1).pop().alertNum()+1;BAlert.alertArray.push(W);var _="A"+j,J="ALERT "+j,K=!1,Q=null,Z=null,$=r(),q={};u(t)?$.content=t:$.content.raw=t,"number"==typeof e&&($.timeout=e),u(n)?$.title=n:$.title.raw=n,!c(i)&&u(i)&&(i=[i]),$.mainButtons=A($.mainButtons,i),$=A($,o);var tt=1,et=2,nt=4,it=8,ot=16;this.getConf=function(t){return t?$[t]:$},this.setConf=function(t,e){return 1===arguments.length?$=A($,t):$[t]=A($[t],e),this},this.noDefaultClasses=function(){return $.defaultClasses.apply=!1,this},this.getDefaultClasses=function(){return I()},this.setDefaultClasses=function(t,e){return 1===arguments.length?$.defaultClasses.values=e:$.defaultClasses.values[t]=e,this},this.setDebug=function(t){return t=t||0,$.DEBUG=t,this},this.setIconsPath=function(t){return $.iconsPath=t,this},this.build=function(){return N(),R(),this},this.display=function(t){return N(),function(t){t=t||$.animStart.delay||0,s(q)&&R(),t?(a(tt,"DELAYED START REQUESTED, delay(ms)="+t),setTimeout(function(){V()},t)):V()}(t),this},this.exit=function(t){return H(t),this},this.move=function(t,e){return M(t,e),this},this.enable=function(t){return b(t,!1),this},this.disable=function(t){return b(t,!0),this},this.hide=function(t){return y(t,"hidden"),this},this.unhide=function(t){return y(t,"visible"),this},this.dim=function(t,e){return B(t,e),this},this.undim=function(t){return B(t,1),this},this.remove=function(t){return f(t),this},this.getPosition=function(){return g()},this.getCenterPosition=function(){return function(){var t=x(),e=g();return[e[0]+t[0]/2,e[1]+t[1]/2]}()},this.getSize=function(){return x()},this.getStructure=function(t){return t=t||q.containerDiv,w(t)},this.getElement=function(t){return t=t||"alertBoxDiv",q[t]},this.merge=function(t,e){return A(t,e)},this.setCrossBrowserStyle=function(t,e,n){return T(t,e,n),this},this.reset=function(){return $=r(),q={},this},this.version=function(){return"2.3"},this.alertNum=function(){return j},this.conf=$,this.DOM=q};