(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[203],{250:function(t,n){!function(t){var n=t.util.clone(t.languages.javascript);t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},t.languages.jsx.tag),t.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var e=function t(n){return n?"string"==typeof n?n:"string"==typeof n.content?n.content:n.content.map(t).join(""):""};t.hooks.add("after-tokenize",(function(n){"jsx"!==n.language&&"tsx"!==n.language||function n(a){for(var s=[],g=0;g<a.length;g++){var i=a[g],o=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?0<s.length&&s[s.length-1].tagName===e(i.content[0].content[1])&&s.pop():"/>"===i.content[i.content.length-1].content||s.push({tagName:e(i.content[0].content[1]),openedBraces:0}):0<s.length&&"punctuation"===i.type&&"{"===i.content?s[s.length-1].openedBraces++:0<s.length&&0<s[s.length-1].openedBraces&&"punctuation"===i.type&&"}"===i.content?s[s.length-1].openedBraces--:o=!0),(o||"string"==typeof i)&&0<s.length&&0===s[s.length-1].openedBraces){var r=e(i);g<a.length-1&&("string"==typeof a[g+1]||"plain-text"===a[g+1].type)&&(r+=e(a[g+1]),a.splice(g+1,1)),0<g&&("string"==typeof a[g-1]||"plain-text"===a[g-1].type)&&(r=e(a[g-1])+r,a.splice(g-1,1),g--),a[g]=new t.Token("plain-text",r,null,r)}i.content&&"string"!=typeof i.content&&n(i.content)}}(n.tokens)}))}(Prism)}}]);
//# sourceMappingURL=203.ae4cbaab.chunk.js.map