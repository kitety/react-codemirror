(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[79],{123:function(e,t){var a;(a=Prism).languages.crystal=a.languages.extend("ruby",{keyword:[/\b(?:abstract|alias|as|asm|begin|break|case|class|def|do|else|elsif|end|ensure|enum|extend|for|fun|if|include|instance_sizeof|lib|macro|module|next|of|out|pointerof|private|protected|rescue|return|require|select|self|sizeof|struct|super|then|type|typeof|uninitialized|union|unless|until|when|while|with|yield|__DIR__|__END_LINE__|__FILE__|__LINE__)\b/,{pattern:/(\.\s*)(?:is_a|responds_to)\?/,lookbehind:!0}],number:/\b(?:0b[01_]*[01]|0o[0-7_]*[0-7]|0x[\da-fA-F_]*[\da-fA-F]|(?:\d(?:[\d_]*\d)?)(?:\.[\d_]*\d)?(?:[eE][+-]?[\d_]*\d)?)(?:_(?:[uif](?:8|16|32|64))?)?\b/}),a.languages.insertBefore("crystal","string",{attribute:{pattern:/@\[.+?\]/,alias:"attr-name",inside:{delimiter:{pattern:/^@\[|\]$/,alias:"tag"},rest:a.languages.crystal}},expansion:[{pattern:/\{\{.+?\}\}/,inside:{delimiter:{pattern:/^\{\{|\}\}$/,alias:"tag"},rest:a.languages.crystal}},{pattern:/\{%.+?%\}/,inside:{delimiter:{pattern:/^\{%|%\}$/,alias:"tag"},rest:a.languages.crystal}}]})}}]);
//# sourceMappingURL=79.913dedf0.chunk.js.map