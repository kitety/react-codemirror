(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[534],{834:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="\" \n    This is a test of the Smalltalk code\n\"\nSeaside.WAComponent subclass: #MyCounter [\n    | count |\n    MyCounter class >> canBeRoot [ ^true ]\n\n    initialize [\n        super initialize.\n        count := 0.\n    ]\n    states [ ^{ self } ]\n    renderContentOn: html [\n        html heading: count.\n        html anchor callback: [ count := count + 1 ]; with: '++'.\n        html space.\n        html anchor callback: [ count := count - 1 ]; with: '--'.\n    ]\n]\n\nMyCounter registerAsApplication: 'mycounter'\n"}}]);
//# sourceMappingURL=534.0021cf0f.chunk.js.map