/*!
 * BAlert.js - v2.2 - 2018-04
 *
 * Copyright (c) 2018 Behzad Nadji;
 * Licensed under the MIT license
*/
var BAlert=function(t,e,n,i,r){function o(){return{position:{X:"c",Y:"15%",staggerX:"~5px",staggerY:"5px"},title:{},content:{},mainButtons:[],exitButton:{icon:null,raw:null,text:"&times;",inlineStyle:"",threshold:3e3,visible:function(){return 0===q.timeout||q.timeout>q.exitButton.threshold}},animStart:{duration:250,delay:0,dir:"top",scale:0,rotate:0,func:"ease-in"},animExit:{duration:350,delay:0,dir:"none",scale:0,rotate:0,func:"ease-out"},callbacks:{onDisplayBegin:null,onDisplayEnd:null,onExitBegin:null,onExitEnd:null,onResize:function(){N()},onTapOutside:function(t){return function(t){t!==BAlert.alertArray[BAlert.alertArray.length-1]||U||j()}(t),!1},onTapInside:null},classPrefix:"bajs_",defaultClasses:{apply:!0,values:{containerDiv:"",alertBoxDiv:"border-radius:0.5rem;width:fit-content;max-width:80%;max-height:80%;font:1rem arial;border:1px solid;background-color:#eee;box-shadow:0px 10px 45px -2px rgba(0,0,0,0.75);",titleDiv:"padding:0.1rem .3rem .3rem;text-align:center",titleIcon:"vertical-align:middle;width:1.5rem;height:1.5rem;margin-top:2px",titleText:"vertical-align:middle;margin-left:2px;font-size:1rem;font-weight:bold",contentDiv:"display:flex;clear:both;padding:0.5rem;overflow:auto",contentIcon:"vertical-align:middle; margin-right:0.5rem;width:1rem;height:1rem;",contentText:"vertical-align:middle; display:table-cell;font-size:1rem",exitButton:"float:right;border:0;padding:0;line-height:0.8rem;background:transparent",exitButtonIcon:"width:1rem;height:1rem",exitButtonText:"font-size:1rem;line-height:0.5rem;vertical-align:top",mainButtonsDiv:"clear:both;text-align:center;padding:0.35rem;display:flow-root",mainButtonsIcon:"vertical-align:middle;width:1rem;height:1rem;margin-right:2px",mainButtonsText:"vertical-align:middle;margin:0 2px",mainButtons:"border-radius:0.5rem;padding:2px;margin: 0.1rem 0.2rem;font-size:0.85rem"}},inlineStyles:{containerDiv:"",alertBoxDiv:"",titleDiv:"",titleIcon:"",titleText:"",contentDiv:"",contentIcon:"",contentText:"",exitButton:"",mainButtonsDiv:"",exitButtonIcon:"",exitButtonText:"",mainButtons:"",mainButtonsIcon:"",mainButtonsText:""},iconsPath:"",startingZIndex:1e3,timeout:0,DEBUG:0}}function a(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function s(t){return t===Object(t)}function l(t){return Array.isArray(t)}function c(t){return s(t)&&!a(t)}function u(t){return J[t]&&J.splice(J.indexOf(t),1),document.body.contains(t)?t.parentNode.removeChild(t):null}function f(t,e,n){window.addEventListener?window.addEventListener(t,e,n):window.attachEvent&&window.attachEvent("on"+t,e)}function d(t,e){window.removeEventListener?window.removeEventListener(t,e):window.detachEvent&&window.detachEvent("on"+t,e)}function v(t){if(t){return setTimeout(function(){j()},t)}return null}function p(t,e){t&&t(R)}function m(t){return t*parseFloat(getComputedStyle(document.documentElement).fontSize)}function h(t){return t=t||J.alertBoxDiv,[t.scrollWidth,t.scrollHeight]}function x(){return[parseFloat(J.alertBoxDiv.style.left),parseFloat(J.alertBoxDiv.style.top)]}function g(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function B(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(t,e,n){var i=["","-o-","-ms-","-moz-","-webkit-"];for(var r in i)i.hasOwnProperty(r)&&t.style.setProperty(i[r]+e,n)}function y(t,e){t=t||J.alertBoxDiv,e=e||.5,t.style.opacity=e}function w(t,e){(t=t||J.alertBoxDiv).style.visibility=e}function D(t,e){t=t||J.alertBoxDiv,void 0===e&&(e=!1),t.disabled=e}function T(t,e){if(void 0===e)return t;if(!s(e)||l(e)||function(t){return"function"==typeof t}(e))return t=e;for(var n in e)if(e.hasOwnProperty(n)){if(s(e[n])&&t[n]){t[n]=T(t[n],e[n]);continue}t[n]=e[n]}return t}function k(){var t="/*Begin BAlert default CSS classes*/";for(var e in q.defaultClasses.values)if(q.defaultClasses.values.hasOwnProperty(e)){t+="\n.bajs_"+e+" {";var n=q.defaultClasses.values[e].trim().split(";");for(var i in n)n[i]&&(t+="\n  "+n[i].trim()+";");t+="\n}\n"}return t+"/*End BAlert default CSS classes*/\n"}function A(t){function e(t,e,n){var o=t.attributes;if(r+=new Array(e*i).join(" ")+"<",n){for(var a="",s=0,l=o.length;s<l;s++)a+="\n"+new Array((e+1)*i).join(" ")+o[s].nodeName+"= '"+o[s].nodeValue+"'";r+=t.tagName+a}else r+="/"+t.tagName;r+=">\n"}function n(t,i){for(e(t,i,!0),t=t.firstElementChild;t;)n(t,++i),e(t,i--,!1),t=t.nextElementSibling}var i=4,r="";return n(t,0),e(t,0,!1),r}function E(){q.callbacks.onResize&&q.callbacks.onResize(R)}function C(t){J.alertBoxDiv.contains(t.target)?q.callbacks.onTapInside&&q.callbacks.onTapInside(R):q.callbacks.onTapOutside&&q.callbacks.onTapOutside(R)}function I(t){C(t)}function S(){"center"!==q.position.X&&"Center"!==q.position.X&&"C"!==q.position.X||(q.position.X="c"),"center"!==q.position.Y&&"Center"!==q.position.X&&"C"!==q.position.X||(q.position.Y="c"),q.iconsPath.length>0&&"/"!==q.iconsPath.charAt(q.iconsPath.length-1)&&(q.iconsPath+="/"),q.exitButton.raw?(q.exitButton.icon="",q.exitButton.text=""):q.exitButton.icon?q.exitButton.text="":q.exitButton.text||(q.exitButton.text="&times")}function O(t,e,n,i){void 0===i&&(i="");var r=t.appendChild(document.createElement(n));return r.name=e+i,r.id=e+i+"_"+W,r.className=q.defaultClasses.apply?"def_"+e+"_"+W:q.classPrefix+e,q.inlineStyles[e]&&(r.style.cssText+=";"+q.inlineStyles[e]),r}function P(t,e,n){var i;void 0===n?(i=q[e],n=""):i=q[e][n];var r=O(t,e,"BUTTON",n);return i.raw?r.innerHTML=i.raw:(i.icon&&(J[e+"Icon"+n]=O(r,e+"Icon","IMG",n),J[e+"Icon"+n].src=q.iconsPath+i.icon),i.text&&(J[e+"Text"+n]=O(r,e+"Text","SPAN",n),J[e+"Text"+n].innerHTML=i.text)),i.inlineStyle&&(r.style.cssText+=";"+i.inlineStyle),r.text=i.text,r.index=parseInt(n),r.name=e+n,J[e+n]=r,r.onclick=function(){i.selfDim&&y(r),i.selfDisable&&D(r,!0),i.selfHide&&w(r,"hidden"),i.selfRemove&&setTimeout(function(){u(r)},5),i.onClick&&i.onClick(R,r),i.keepAlert||j()},r}function z(){q.defaultClasses.apply&&function(){(Z=document.createElement("style")).type="text/css";var t="";for(var e in q.defaultClasses.values)q.defaultClasses.values.hasOwnProperty(e)&&(t+=".def_"+e+"_"+W+"{"+q.defaultClasses.values[e]+"}\n");Z.innerHTML=t,document.getElementsByTagName("head")[0].appendChild(Z)}(),function(){var t=document.getElementsByTagName("body")[0];J.containerDiv=O(t,"containerDiv","DIV"),J.containerDiv.style.height=B()+"px",J.containerDiv.style.zIndex=q.startingZIndex+G,J.containerDiv.style.position="absolute"}(),J.alertBoxDiv=O(J.containerDiv,"alertBoxDiv","DIV"),J.alertBoxDiv.style.position="fixed",q.exitButton.visible="function"==typeof q.exitButton.visible?q.exitButton.visible(R):q.exitButton.visible,(q.title.text||q.title.icon||q.title.raw||q.exitButton.visible)&&(J.titleDiv=O(J.alertBoxDiv,"titleDiv","DIV"),q.title.raw?J.titleDiv.innerHTML=q.title.raw:(q.title.icon&&(J.titleIcon=O(J.titleDiv,"titleIcon","IMG"),J.titleIcon.src=q.iconsPath+q.title.icon),q.title.text&&(J.titleText=O(J.titleDiv,"titleText","SPAN"),J.titleText.innerHTML=q.title.text)),q.exitButton.visible&&(J.exitButton=P(J.titleDiv,"exitButton"))),(q.content.text||q.content.raw||q.content.icon)&&(J.contentDiv=O(J.alertBoxDiv,"contentDiv","DIV"),q.content.raw?J.contentDiv.innerHTML=q.content.raw:(q.content.icon&&(J.contentIcon=O(J.contentDiv,"contentIcon","IMG"),J.contentIcon.src=q.iconsPath+q.content.icon),q.content.text&&(J.contentText=O(J.contentDiv,"contentText","SPAN"),J.contentText.innerHTML=q.content.text))),function(){if(J.mainButtons=[],!a(q.mainButtons)){J.mainButtonsDiv=O(J.alertBoxDiv,"mainButtonsDiv","DIV");for(var t in q.mainButtons)q.mainButtons.hasOwnProperty(t)&&J.mainButtons.push(P(J.mainButtonsDiv,"mainButtons",t))}}(),w(J.alertBoxDiv,"hidden"),N()}function N(t,e){void 0!==t&&(2===arguments.length?(q.position.X=t,q.position.Y=e):l(t)&&(q.position.X=t[0],q.position.Y=t[1])),function(){q.position.calcX=V({raw:q.position.X,dir:"h",negOpposite:!0}),q.position.calcY=V({raw:q.position.Y,dir:"v",negOpposite:!0});var t=function(){var t=BAlert.alertArray,e=t.indexOf(R),n=1,i=1,r=R.getConf("position").X,o=R.getConf("position").Y;for(;t[e-n];)r===t[e-n].getConf("position").X&&o===t[e-n].getConf("position").Y&&i++,n+=1;return i}();q.position.calcX.val+=Y({raw:q.position.staggerX,dir:"h",negOpposite:!1,size:t}).val,q.position.calcY.val+=Y({raw:q.position.staggerY,dir:"v",negOpposite:!1,size:t}).val,J.alertBoxDiv.style.left=q.position.calcX.val+q.position.calcX.unit,J.alertBoxDiv.style.top=q.position.calcY.val+q.position.calcY.unit}()}function X(t){var e="h"===t.dir?g():B();return(t=function(t){if(t.alt=!1,t.isPerc=!1,t.isNeg=!1,t.sign=1,t.unit="px","string"==typeof t.raw&&(t.raw=t.raw.trim()),t.centered=function(t){return 0!==t&&!t}(t.raw)||"c"===t.raw,!t.centered){t.alt="string"==typeof t.raw&&"~"===t.raw.charAt(0),t.alt&&(t.raw=t.raw.substring(1)),t.isPerc="string"==typeof t.raw&&"%"===t.raw.slice(-1),t.isPerc&&(t.raw=t.raw.slice(0,-1)),t.isNeg="string"==typeof t.raw&&"-"===t.raw.slice(0,1)||"number"==typeof t.raw&&t.raw<0,t.sign=t.isNeg?-1:1,t.absVal=Math.abs(parseFloat(t.raw))||0;var e="string"==typeof t.raw?/(\d+\.*\d*)(\D+$)/g.exec(t.raw):null;t.unit=e&&e.length>0?e[e.length-1]:"px"}return t}(t)).centered?t.val=e/2:(t.isPerc&&(t.absVal=t.absVal*e/100),t.isNeg&&t.negOpposite?t.val=e-t.absVal:t.val=t.absVal,t.negOpposite||(t.val*=t.sign),"rem"===t.unit&&(t.val=m(t.val)),t.unit="px"),t}function V(t){var e=h(),n="h"===t.dir?e[0]:e[1];return(t=X(t)).centered?t.val=t.val-n/2:t.isNeg&&t.negOpposite&&(t.val=t.val-n),t}function Y(t){return 1===(t=X(t)).size?t.val=0:t.alt?t.val=t.size%2==0?t.absVal:-t.absVal:t.val=(t.size-1)*t.absVal,t.val=t.val*t.sign,"rem"===t.unit&&(t.val=m(t.val)),t.unit="px",t}function H(t){var e,n,i=0,r=0,o=g(),a=B(),s=x(),c=s[0],u=s[1],f=h(),d=f[0],v=f[1],p=t.scale,m=c+d/2,b=u+v/2;if(l(t.dir))e=X({raw:t.dir[0],dir:"h",negOpposite:!0}).val,n=X({raw:t.dir[1],dir:"v",negOpposite:!0}).val;else switch(t.dir){case"left":e=-d*p/2,n=u+v/2;break;case"top":e=c+d/2,n=-v*p/2;break;case"right":e=o+d*p/2,n=u+v/2;break;case"bottom":e=c+d/2,n=a+v*p/2;break;case"top left":case"left top":e=-d*p/2,n=-v*p/2;break;case"top right":case"right top":e=o+d*p/2,n=-v*p/2;break;case"bottom left":case"left bottom":e=-d*p/2,n=a+v*p/2;break;case"bottom right":case"right bottom":e=o+d*p/2,n=a+v*p/2;break;case"left center":case"center left":e=-d*p/2,n=a/2;break;case"right center":case"center right":e=o+d*p/2,n=a/2;break;case"top center":case"center top":e=o/2,n=-v*p/2;break;case"bottom center":case"center bottom":e=o/2,n=a+v*p/2;break;case"center":case"center center":e=o/2,n=a/2;break;default:e=c+d/2,n=u+v/2}return i=e-m,r=n-b,[i,r]}function M(t){return"all "+t.duration/1e3+"s "+t.func}function L(t,e){var n=M(t),i=function(t,e){return"translate("+e[0]+"px,"+e[1]+"px) scale("+t.scale+") "+(t.rotate?"rotate("+360*t.rotate+"deg)":"")}(t,e);b(J.alertBoxDiv,"transform-origin","center"),b(J.alertBoxDiv,"transition",n),b(J.alertBoxDiv,"transform",i)}function F(){var t=0;if(p(q.callbacks.onDisplayBegin),q.animStart.duration){var e=T({},q.animStart);e.rotate&&(e.rotate=-q.animStart.rotate),e.duration=0;var n=H(e);L(e,n),t=5,setTimeout(function(){w(J.alertBoxDiv,"visible");var e=M(q.animStart);b(J.alertBoxDiv,"transition",e),b(J.alertBoxDiv,"transform-origin","center"),b(J.alertBoxDiv,"transform",""),t+=q.animStart.duration,setTimeout(function(){b(J.alertBoxDiv,"transition",""),$=v(q.timeout),p(q.callbacks.onDisplayEnd)},t)},t)}else w(J.alertBoxDiv,"visible"),$=v(q.timeout),p(q.callbacks.onDisplayEnd);q.callbacks.onResize&&f("resize",E),setTimeout(function(){(q.callbacks.onTapOutside||q.callbacks.onTapInside)&&(f("touchstart",I,{passive:!1}),f("click",C))},5)}function j(t){(t=t||q.animExit.delay||0)>0?setTimeout(function(){_()},t):_()}function _(){U=!0,$&&(clearTimeout($),$=null),p(q.callbacks.onExitBegin);var t=0;if(q.animExit.duration){var e=H(q.animExit);L(q.animExit,e),t=q.animExit.duration}setTimeout(function(){q.callbacks.onResize&&d("resize",E),(q.callbacks.onTapOutside||q.callbacks.onTapInside)&&d("click",C),(q.callbacks.onTapOutside||q.callbacks.onTapInside)&&d("touchstart",I);var t=BAlert.alertArray.indexOf(R);-1!==t&&BAlert.alertArray.splice(t,1),p(q.callbacks.onExitEnd),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),u(J.containerDiv),U=!1},t)}String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var R=this;BAlert.alertArray=BAlert.alertArray||[];var G=a(BAlert.alertArray)?1:BAlert.alertArray.slice(-1).pop().alertNum()+1;BAlert.alertArray.push(R);var W="A"+G,U=!1,Z=null,$=null,q=o(),J={};c(t)?q.content=t:q.content.raw=t,"number"==typeof e&&(q.timeout=e),c(n)?q.title=n:q.title.raw=n,!l(i)&&c(i)&&(i=[i]),q.mainButtons=T(q.mainButtons,i),q=T(q,r);this.getConf=function(t){return t?q[t]:q},this.setConf=function(t,e){return 1===arguments.length?q=T(q,t):q[t]=T(q[t],e),this},this.noDefaultClasses=function(){return q.defaultClasses.apply=!1,this},this.getDefaultClasses=function(){return k()},this.setDefaultClasses=function(t,e){return 1===arguments.length?q.defaultClasses.values=e:q.defaultClasses.values[t]=e,this},this.setDebug=function(t){return t=t||0,q.DEBUG=t,this},this.setIconsPath=function(t){return q.iconsPath=t,this},this.build=function(){return S(),z(),this},this.display=function(t){return S(),function(t){t=t||q.animStart.delay||0,a(J)&&z(),t?setTimeout(function(){F()},t):F()}(t),this},this.exit=function(t){return j(t),this},this.move=function(t,e){return N(t,e),this},this.enable=function(t){return D(t,!1),this},this.disable=function(t){return D(t,!0),this},this.hide=function(t){return w(t,"hidden"),this},this.unhide=function(t){return w(t,"visible"),this},this.dim=function(t,e){return y(t,e),this},this.undim=function(t){return y(t,1),this},this.remove=function(t){return u(t),this},this.getPosition=function(){return x()},this.getCenterPosition=function(){return function(){var t=h(),e=x();return[e[0]+t[0]/2,e[1]+t[1]/2]}()},this.getSize=function(){return h()},this.getStructure=function(t){return t=t||J.containerDiv,A(t)},this.getElement=function(t){return t=t||"alertBoxDiv",J[t]},this.merge=function(t,e){return T(t,e)},this.setCrossBrowserStyle=function(t,e,n){return b(t,e,n),this},this.reset=function(){return q=o(),J={},this},this.version=function(){return"2.3"},this.alertNum=function(){return G},this.conf=q,this.DOM=J};