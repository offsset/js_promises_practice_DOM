parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,n){var t=document.querySelector("body"),o=document.createElement("div");o.innerText=e,o.className=n,t.lastChild.before(o)}var n=new Promise(function(e,n){document.addEventListener("click",function(n){0===n.button&&e("First promise was resolved")}),setTimeout(function(){n(Error)},3e3)});n.then(function(n){e(n,"success")}).catch(function(n){e("First promise was rejected","warning")});var t=new Promise(function(e){document.addEventListener("click",function(n){e("Second promise was resolved")}),document.addEventListener("contextmenu",function(n){2===n.button&&(n.preventDefault(),e("Second promise was resolved"))})});t.then(function(n){e(n,"success")});var o=new Promise(function(e){document.addEventListener("click",function(n){document.addEventListener("contextmenu",function(n){2===n.button&&(n.preventDefault(),e("Third promise was resolved"))})})});o.then(function(n){e(n,"success")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d0762464.js.map