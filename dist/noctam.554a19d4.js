parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"eHzx":[function(require,module,exports) {

},{"./pics/window-2118232_1920.jpg":[["window-2118232_1920.209808cc.jpg","rYjQ"],"rYjQ"],"./pics/charles-deluvio-456801-unsplash.mob.jpg":[["charles-deluvio-456801-unsplash.mob.de19b8fb.jpg","IKdY"],"IKdY"]}],"Focm":[function(require,module,exports) {
"use strict";require("./index.scss"),window.addEventListener("load",function(){var e=document.querySelector(".background"),t=document.querySelector(".frame"),i=document.querySelector(".modal"),o=document.getElementById("play").querySelector("a"),l=document.querySelector(".close"),c=document.getElementById("title");document.getElementById("lights");t.style.visibility="visible",i.style.display="block";var n=function(){return i.classList.toggle("show-modal")};o.addEventListener("click",n),l.addEventListener("click",n);var s=function t(){e.style.opacity=0,setTimeout(function(){console.log(e.style.opacity),e.style.opacity=1,setTimeout(t,3e4*Math.random()+1500)},750)};setTimeout(function(){e.style.opacity=0,setTimeout(function(){e.style.opacity=1,c.style.visibility="visible",setTimeout(s,5e3)},1e3)},3e3)});
},{"./index.scss":"eHzx"}]},{},["Focm"], null)
//# sourceMappingURL=noctam.554a19d4.map