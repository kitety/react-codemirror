(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[494],{794:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='#numbers\n1234\n1234im\n.234\n.234im\n2.23im\n2.3f3\n23e2\n0x234\n\n#strings\n\'a\'\n"asdf"\nr"regex"\nb"bytestring"\n\n"""\nmultiline string\n"""\n\n#identifiers\na\nas123\nfunction_name!\n\n#unicode identifiers\n# a = x\\ddot\na\u20d7 = x\u0308\n# a = v\\dot\na\u20d7 = v\u0307\n#F\\vec = m \\cdotp a\\vec\nF\u20d7 = m\xb7a\u20d7\n\n#literal identifier multiples\n3x\n4[1, 2, 3]\n\n#dicts and indexing\nx=[1, 2, 3]\nx[end-1]\nx={"julia"=>"language of technical computing"}\n\n\n#exception handling\ntry\n  f()\ncatch\n  @printf "Error"\nfinally\n  g()\nend\n\n#types\nimmutable Color{T<:Number}\n  r::T\n  g::T\n  b::T\nend\n\n#functions\nfunction change!(x::Vector{Float64})\n  for i = 1:length(x)\n    x[i] *= 2\n  end\nend\n\n#function invocation\nf(\'b\', (2, 3)...)\n\n#operators\n|=\n&=\n^=\n\\-\n%=\n*=\n+=\n-=\n<=\n>=\n!=\n==\n%\n*\n+\n-\n<\n>\n!\n=\n|\n&\n^\n?\n~\n:\n$\n<:\n.<\n.>\n<<\n<<=\n>>\n>>>>\n>>=\n>>>=\n<<=\n<<<=\n.<=\n.>=\n.==\n->\n//\nin\n...\n//\n:=\n.//=\n.*=\n./=\n.^=\n.%=\n.+=\n.-=\n\\=\n\\\\=\n||\n===\n&&\n|=\n.|=\n<:\n>:\n|>\n<|\n::\nx ? y : z\n\n#macros\n@spawnat 2 1+1\n@eval(:x)\n\n#keywords and operators\nif else elseif while for\n begin let end do\ntry catch finally return break continue\nglobal local const \nexport import importall using\nfunction macro module baremodule \ntype immutable quote\ntrue false enumerate\n'}}]);
//# sourceMappingURL=494.f28d34bb.chunk.js.map