(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[579],{653:function(e,t,n){!function(e){"use strict";e.defineMode("crystal",(function(e){function t(e,t){return new RegExp((t?"":"^")+"(?:"+e.join("|")+")"+(t?"$":"\\b"))}function n(e,t,n){return n.tokenize.push(e),e(t,n)}var r=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,a=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,u=/^(?:\[\][?=]?)/,i=/^(?:\.(?:\.{2})?|->|[?:])/,o=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,c=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,s=t(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),f=t(["true","false","nil","self"]),l=t(["def","fun","macro","class","module","struct","lib","enum","union","do","for"]),m=t(["if","unless","case","while","until","begin","then"]),h=["end","else","elsif","rescue","ensure"],p=t(h),d=["\\)","\\}","\\]"],k=new RegExp("^(?:"+d.join("|")+")$"),z={def:w,fun:w,macro:function(e,t){if(e.eatSpace())return null;var n;if(n=e.match(o)){if("def"==n)return"keyword";e.eat(/[?!]/)}return t.tokenize.pop(),"def"},class:x,module:x,struct:x,lib:x,enum:x,union:x},F={"[":"]","{":"}","(":")","<":">"};function b(e,t){if(e.eatSpace())return null;if("\\"!=t.lastToken&&e.match("{%",!1))return n(g("%","%"),e,t);if("\\"!=t.lastToken&&e.match("{{",!1))return n(g("{","}"),e,t);if("#"==e.peek())return e.skipToEnd(),"comment";var h;if(e.match(o))return e.eat(/[?!]/),h=e.current(),e.eat(":")?"atom":"."==t.lastToken?"property":s.test(h)?(l.test(h)?"fun"==h&&t.blocks.indexOf("lib")>=0||"def"==h&&"abstract"==t.lastToken||(t.blocks.push(h),t.currentIndent+=1):"operator"!=t.lastStyle&&t.lastStyle||!m.test(h)?"end"==h&&(t.blocks.pop(),t.currentIndent-=1):(t.blocks.push(h),t.currentIndent+=1),z.hasOwnProperty(h)&&t.tokenize.push(z[h]),"keyword"):f.test(h)?"atom":"variable";if(e.eat("@"))return"["==e.peek()?n(_("[","]","meta"),e,t):(e.eat("@"),e.match(o)||e.match(c),"variable-2");if(e.match(c))return"tag";if(e.eat(":"))return e.eat('"')?n(I('"',"atom",!1),e,t):e.match(o)||e.match(c)||e.match(r)||e.match(a)||e.match(u)?"atom":(e.eat(":"),"operator");if(e.eat('"'))return n(I('"',"string",!0),e,t);if("%"==e.peek()){var p,d="string",k=!0;if(e.match("%r"))d="string-2",p=e.next();else if(e.match("%w"))k=!1,p=e.next();else if(e.match("%q"))k=!1,p=e.next();else{if(!(p=e.match(/^%([^\w\s=])/)))return e.match(/^%[a-zA-Z0-9_\u009F-\uFFFF]*/)?"meta":"operator";p=p[1]}return F.hasOwnProperty(p)&&(p=F[p]),n(I(p,d,k),e,t)}return(h=e.match(/^<<-('?)([A-Z]\w*)\1/))?n(function(e,t){return function(n,r){if(n.sol()&&(n.eatSpace(),n.match(e)))return r.tokenize.pop(),"string";for(var a=!1;n.peek();)if(a)n.next(),a=!1;else{if(n.match("{%",!1))return r.tokenize.push(g("%","%")),"string";if(n.match("{{",!1))return r.tokenize.push(g("{","}")),"string";if(t&&n.match("#{",!1))return r.tokenize.push(_("#{","}","meta")),"string";a=t&&"\\"==n.next()}return"string"}}(h[2],!h[1]),e,t):e.eat("'")?(e.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),e.eat("'"),"atom"):e.eat("0")?(e.eat("x")?e.match(/^[0-9a-fA-F]+/):e.eat("o")?e.match(/^[0-7]+/):e.eat("b")&&e.match(/^[01]+/),"number"):e.eat(/^\d/)?(e.match(/^\d*(?:\.\d+)?(?:[eE][+-]?\d+)?/),"number"):e.match(r)?(e.eat("="),"operator"):e.match(a)||e.match(i)?"operator":(h=e.match(/[({[]/,!1))?n(_(h=h[0],F[h],null),e,t):e.eat("\\")?(e.next(),"meta"):(e.next(),null)}function _(e,t,n,r){return function(a,u){if(!r&&a.match(e))return u.tokenize[u.tokenize.length-1]=_(e,t,n,!0),u.currentIndent+=1,n;var i=b(a,u);return a.current()===t&&(u.tokenize.pop(),u.currentIndent-=1,i=n),i}}function g(e,t,n){return function(r,a){return!n&&r.match("{"+e)?(a.currentIndent+=1,a.tokenize[a.tokenize.length-1]=g(e,t,!0),"meta"):r.match(t+"}")?(a.currentIndent-=1,a.tokenize.pop(),"meta"):b(r,a)}}function w(e,t){return e.eatSpace()?null:(e.match(o)?e.eat(/[!?]/):e.match(r)||e.match(a)||e.match(u),t.tokenize.pop(),"def")}function x(e,t){return e.eatSpace()?null:(e.match(c),t.tokenize.pop(),"def")}function I(e,t,n){return function(r,a){for(var u=!1;r.peek();)if(u)r.next(),u=!1;else{if(r.match("{%",!1))return a.tokenize.push(g("%","%")),t;if(r.match("{{",!1))return a.tokenize.push(g("{","}")),t;if(n&&r.match("#{",!1))return a.tokenize.push(_("#{","}","meta")),t;var i=r.next();if(i==e)return a.tokenize.pop(),t;u=n&&"\\"==i}return t}}return{startState:function(){return{tokenize:[b],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(e,t){var n=t.tokenize[t.tokenize.length-1](e,t),r=e.current();return n&&"comment"!=n&&(t.lastToken=r,t.lastStyle=n),n},indent:function(t,n){return n=n.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),p.test(n)||k.test(n)?e.indentUnit*(t.currentIndent-1):e.indentUnit*t.currentIndent},fold:"indent",electricInput:t(d.concat(h),!0),lineComment:"#"}})),e.defineMIME("text/x-crystal","crystal")}(n(8))}}]);
//# sourceMappingURL=579.343cc2d1.chunk.js.map