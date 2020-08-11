(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[525],{823:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='// Demo code (the actual new parser character stream implementation)\n\nfunction StringStream(string) {\n  this.pos = 0;\n  this.string = string;\n}\n\nStringStream.prototype = {\n  done: function() {return this.pos >= this.string.length;},\n  peek: function() {return this.string.charAt(this.pos);},\n  next: function() {\n    if (this.pos < this.string.length)\n      return this.string.charAt(this.pos++);\n  },\n  eat: function(match) {\n    var ch = this.string.charAt(this.pos);\n    if (typeof match == "string") var ok = ch == match;\n    else var ok = ch && match.test ? match.test(ch) : match(ch);\n    if (ok) {this.pos++; return ch;}\n  },\n  eatWhile: function(match) {\n    var start = this.pos;\n    while (this.eat(match));\n    if (this.pos > start) return this.string.slice(start, this.pos);\n  },\n  backUp: function(n) {this.pos -= n;},\n  column: function() {return this.pos;},\n  eatSpace: function() {\n    var start = this.pos;\n    while (/\\s/.test(this.string.charAt(this.pos))) this.pos++;\n    return this.pos - start;\n  },\n  match: function(pattern, consume, caseInsensitive) {\n    if (typeof pattern == "string") {\n      function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}\n      if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {\n        if (consume !== false) this.pos += str.length;\n        return true;\n      }\n    }\n    else {\n      var match = this.string.slice(this.pos).match(pattern);\n      if (match && consume !== false) this.pos += match[0].length;\n      return match;\n    }\n  }\n};\n'}}]);
//# sourceMappingURL=525.ec9f0608.chunk.js.map