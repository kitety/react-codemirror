(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[678],{758:function(e,r,t){!function(e){"use strict";e.defineMode("tcl",(function(){function e(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}var r=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),t=e("if elseif else and not or eq ne in ni for foreach while switch"),n=/[+\-*&%=<>!?^\/\|]/;function a(e,r,t){return r.tokenize=t,t(e,r)}function o(e,l){var f=l.beforeParams;l.beforeParams=!1;var s,u=e.next();if('"'!=u&&"'"!=u||!l.inParams){if(/[\[\]{}\(\),;\.]/.test(u))return"("==u&&f?l.inParams=!0:")"==u&&(l.inParams=!1),null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("#"==u)return e.eat("*")?a(e,l,i):"#"==u&&e.match(/ *\[ *\[/)?a(e,l,c):(e.skipToEnd(),"comment");if('"'==u)return e.skipTo(/"/),"comment";if("$"==u)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),l.beforeParams=!0,"builtin";if(n.test(u))return e.eatWhile(n),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var m=e.current().toLowerCase();return r&&r.propertyIsEnumerable(m)?"keyword":t&&t.propertyIsEnumerable(m)?(l.beforeParams=!0,"keyword"):null}return a(e,l,(s=u,function(e,r){for(var t,n=!1,a=!1;null!=(t=e.next());){if(t==s&&!n){a=!0;break}n=!n&&"\\"==t}return a&&(r.tokenize=o),"string"}))}function i(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=o;break}n="*"==t}return"comment"}function c(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=o;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},lineComment:"#"}})),e.defineMIME("text/x-tcl","tcl")}(t(9))}}]);
//# sourceMappingURL=678.5e1554c5.chunk.js.map