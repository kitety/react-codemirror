(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[641],{638:function(t,e,n){!function(t){"use strict";t.defineMode("stex",(function(t,e){function n(t,e){t.cmdState.push(e)}function r(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function a(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var i={};function c(t,e){t.f=e}function u(t,e){var a;if(t.match(/^\\[a-zA-Z@]+/)){var u=t.current().slice(1);return n(e,a=new(a=i[u]||i.DEFAULT)),c(e,m),a.style}if(t.match(/^\\[$&%#{}_]/))return"tag";if(t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return c(e,(function(t,e){return o(t,e,"\\]")})),"keyword";if(t.match("\\("))return c(e,(function(t,e){return o(t,e,"\\)")})),"keyword";if(t.match("$$"))return c(e,(function(t,e){return o(t,e,"$$")})),"keyword";if(t.match("$"))return c(e,(function(t,e){return o(t,e,"$")})),"keyword";var f=t.next();return"%"==f?(t.skipToEnd(),"comment"):"}"==f||"]"==f?(a=r(e))?(a.closeBracket(f),c(e,m),"bracket"):"error":"{"==f||"["==f?(n(e,a=new(a=i.DEFAULT)),"bracket"):/\d/.test(f)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),"begin"==(a=function(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var r=e[n];if("DEFAULT"!=r.name)return r}return{styleIdentifier:function(){return null}}}(e)).name&&(a.argument=t.current()),a.styleIdentifier())}function o(t,e,n){if(t.eatSpace())return null;if(n&&t.match(n))return c(e,u),"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variable-2";if(t.match(/^\\[$&%#{}_]/))return"tag";if(t.match(/^\\[,;!\/]/))return"tag";if(t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var r=t.next();return"{"==r||"}"==r||"["==r||"]"==r||"("==r||")"==r?"bracket":"%"==r?(t.skipToEnd(),"comment"):"error"}function m(t,e){var n=t.peek();return"{"==n||"["==n?(r(e).openBracket(n),t.eat(n),c(e,u),"bracket"):/[ \t\r]/.test(n)?(t.eat(n),null):(c(e,u),function(t){var e=t.cmdState.pop();e&&e.closeBracket()}(e),u(t,e))}return i.importmodule=a("importmodule","tag",["string","builtin"]),i.documentclass=a("documentclass","tag",["","atom"]),i.usepackage=a("usepackage","tag",["atom"]),i.begin=a("begin","tag",["atom"]),i.end=a("end","tag",["atom"]),i.label=a("label","tag",["atom"]),i.ref=a("ref","tag",["atom"]),i.eqref=a("eqref","tag",["atom"]),i.cite=a("cite","tag",["atom"]),i.bibitem=a("bibitem","tag",["atom"]),i.Bibitem=a("Bibitem","tag",["atom"]),i.RBibitem=a("RBibitem","tag",["atom"]),i.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{startState:function(){return{cmdState:[],f:e.inMathMode?function(t,e){return o(t,e)}:u}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=u,t.cmdState.length=0},lineComment:"%"}})),t.defineMIME("text/x-stex","stex"),t.defineMIME("text/x-latex","stex")}(n(8))}}]);
//# sourceMappingURL=641.a3ee2f08.chunk.js.map