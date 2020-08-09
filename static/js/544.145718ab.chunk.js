(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[544],{844:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='##############################################################################################\n##  ##     whois.tcl for eggdrop by Ford_Lawnmower irc.geekshed.net #Script-Help        ##  ##\n##############################################################################################\n## To use this script you must set channel flag +whois (ie .chanset #chan +whois)           ##\n##############################################################################################\n##      ____                __                 ###########################################  ##\n##     / __/___ _ ___ _ ___/ /____ ___   ___   ###########################################  ##\n##    / _/ / _ `// _ `// _  // __// _ \\ / _ \\  ###########################################  ##\n##   /___/ \\_, / \\_, / \\_,_//_/   \\___// .__/  ###########################################  ##\n##        /___/ /___/                 /_/      ###########################################  ##\n##                                             ###########################################  ##\n##############################################################################################\n##  ##                             Start Setup.                                         ##  ##\n##############################################################################################\nnamespace eval whois {\n## change cmdchar to the trigger you want to use                                        ##  ##\n  variable cmdchar "!"\n## change command to the word trigger you would like to use.                            ##  ##\n## Keep in mind, This will also change the .chanset +/-command                          ##  ##\n  variable command "whois"\n## change textf to the colors you want for the text.                                    ##  ##\n  variable textf "\\017\\00304"\n## change tagf to the colors you want for tags:                                         ##  ##\n  variable tagf "\\017\\002"\n## Change logo to the logo you want at the start of the line.                           ##  ##\n  variable logo "\\017\\00304\\002\\[\\00306W\\003hois\\00304\\]\\017"\n## Change lineout to the results you want. Valid results are channel users modes topic  ##  ##\n  variable lineout "channel users modes topic"\n##############################################################################################\n##  ##                           End Setup.                                              ## ##\n##############################################################################################\n  variable channel ""\n  setudef flag $whois::command\n  bind pub -|- [string trimleft $whois::cmdchar]${whois::command} whois::list\n  bind raw -|- "311" whois::311\n  bind raw -|- "312" whois::312\n  bind raw -|- "319" whois::319\n  bind raw -|- "317" whois::317\n  bind raw -|- "313" whois::multi\n  bind raw -|- "310" whois::multi\n  bind raw -|- "335" whois::multi\n  bind raw -|- "301" whois::301\n  bind raw -|- "671" whois::multi\n  bind raw -|- "320" whois::multi\n  bind raw -|- "401" whois::multi\n  bind raw -|- "318" whois::318\n  bind raw -|- "307" whois::307\n}\nproc whois::311 {from key text} {\n  if {[regexp -- {^[^\\s]+\\s(.+?)\\s(.+?)\\s(.+?)\\s\\*\\s\\:(.+)$} $text wholematch nick ident host realname]} {\n    putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Host:${whois::textf}         $nick \\(${ident}@${host}\\) ${whois::tagf}Realname:${whois::textf} $realname"\n  }\n}\nproc whois::multi {from key text} {\n  if {[regexp {\\:(.*)$} $text match $key]} {\n    putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Note:${whois::textf} [subst $$key]"\n        return 1\n  }\n}\nproc whois::312 {from key text} {\n  regexp {([^\\s]+)\\s\\:} $text match server\n  putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Server:${whois::textf} $server"\n}\nproc whois::319 {from key text} {\n  if {[regexp {.+\\:(.+)$} $text match channels]} {\n    putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Channels:${whois::textf} $channels"\n  }\n}\nproc whois::317 {from key text} {\n  if {[regexp -- {.*\\s(\\d+)\\s(\\d+)\\s\\:} $text wholematch idle signon]} {\n    putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Connected:${whois::textf}         [ctime $signon] ${whois::tagf}Idle:${whois::textf} [duration $idle]"\n  }\n}\nproc whois::301 {from key text} {\n  if {[regexp {^.+\\s[^\\s]+\\s\\:(.*)$} $text match awaymsg]} {\n    putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Away:${whois::textf} $awaymsg"\n  }\n}\nproc whois::318 {from key text} {\n  namespace eval whois {\n        variable channel ""\n  }\n  variable whois::channel ""\n}\nproc whois::307 {from key text} {\n  putserv "PRIVMSG $whois::channel :${whois::logo} ${whois::tagf}Services:${whois::textf} Registered Nick"\n}\nproc whois::list {nick host hand chan text} {\n  if {[lsearch -exact [channel info $chan] "+${whois::command}"] != -1} {\n    namespace eval whois {\n          variable channel ""\n        }\n    variable whois::channel $chan\n    putserv "WHOIS $text"\n  }\n}\nputlog "\\002*Loaded* \\017\\00304\\002\\[\\00306W\\003hois\\00304\\]\\017 \\002by Ford_Lawnmower irc.GeekShed.net #Script-Help"\n\n'}}]);
//# sourceMappingURL=544.145718ab.chunk.js.map