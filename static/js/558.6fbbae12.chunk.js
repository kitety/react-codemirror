(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[558],{858:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='## Velocity Code Demo\n#*\n   based on PL/SQL mode by Peter Raganitsch, adapted to Velocity by Steve O\'Hara ( http://www.pivotal-solutions.co.uk )\n   August 2011\n*#\n\n#*\n   This is a multiline comment.\n   This is the second line\n*#\n\n#[[ hello steve\n   This has invalid syntax that would normally need "poor man\'s escaping" like:\n\n   #define()\n\n   ${blah\n]]#\n\n#include( "disclaimer.txt" "opinion.txt" )\n#include( $foo $bar )\n\n#parse( "lecorbusier.vm" )\n#parse( $foo )\n\n#evaluate( \'string with VTL #if(true)will be displayed#end\' )\n\n#define( $hello ) Hello $who #end #set( $who = "World!") $hello ## displays Hello World!\n\n#foreach( $customer in $customerList )\n\n    $foreach.count $customer.Name\n\n    #if( $foo == ${bar})\n        it\'s true!\n        #break\n    #{else}\n        it\'s not!\n        #stop\n    #end\n\n    #if ($foreach.parent.hasNext)\n        $velocityCount\n    #end\n#end\n\n$someObject.getValues("this is a string split\n        across lines")\n\n$someObject("This plus $something in the middle").method(7567).property\n\n#set($something = "Parseable string with \'$quotes\'!")\n\n#macro( tablerows $color $somelist )\n    #foreach( $something in $somelist )\n        <tr><td bgcolor=$color>$something</td></tr>\n        <tr><td bgcolor=$color>$bodyContent</td></tr>\n    #end\n#end\n\n#tablerows("red" ["dadsdf","dsa"])\n#@tablerows("red" ["dadsdf","dsa"]) some body content #end\n\n   Variable reference: #set( $monkey = $bill )\n   String literal: #set( $monkey.Friend = \'monica\' )\n   Property reference: #set( $monkey.Blame = $whitehouse.Leak )\n   Method reference: #set( $monkey.Plan = $spindoctor.weave($web) )\n   Number literal: #set( $monkey.Number = 123 )\n   Range operator: #set( $monkey.Numbers = [1..3] )\n   Object list: #set( $monkey.Say = ["Not", $my, "fault"] )\n   Object map: #set( $monkey.Map = {"banana" : "good", "roast beef" : "bad"})\n\nThe RHS can also be a simple arithmetic expression, such as:\nAddition: #set( $value = $foo + 1 )\n   Subtraction: #set( $value = $bar - 1 )\n   Multiplication: #set( $value = $foo * $bar )\n   Division: #set( $value = $foo / $bar )\n   Remainder: #set( $value = $foo % $bar )\n\n\n'}}]);
//# sourceMappingURL=558.6fbbae12.chunk.js.map