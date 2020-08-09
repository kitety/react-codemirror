(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[496],{796:function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="# LiveScript mode for CodeMirror\n# The following script, prelude.ls, is used to\n# demonstrate LiveScript mode for CodeMirror.\n#   https://github.com/gkz/prelude-ls\n\nexport objToFunc = objToFunc = (obj) ->\n  (key) -> obj[key]\n\nexport each = (f, xs) --\x3e\n  if typeof! xs is \\Object\n    for , x of xs then f x\n  else\n    for x in xs then f x\n  xs\n\nexport map = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  type = typeof! xs\n  if type is \\Object\n    {[key, f x] for key, x of xs}\n  else\n    result = [f x for x in xs]\n    if type is \\String then result * '' else result\n\nexport filter = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  type = typeof! xs\n  if type is \\Object\n    {[key, x] for key, x of xs when f x}\n  else\n    result = [x for x in xs when f x]\n    if type is \\String then result * '' else result\n\nexport reject = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  type = typeof! xs\n  if type is \\Object\n    {[key, x] for key, x of xs when not f x}\n  else\n    result = [x for x in xs when not f x]\n    if type is \\String then result * '' else result\n\nexport partition = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  type = typeof! xs\n  if type is \\Object\n    passed = {}\n    failed = {}\n    for key, x of xs\n      (if f x then passed else failed)[key] = x\n  else\n    passed = []\n    failed = []\n    for x in xs\n      (if f x then passed else failed)push x\n    if type is \\String\n      passed *= ''\n      failed *= ''\n  [passed, failed]\n\nexport find = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  if typeof! xs is \\Object\n    for , x of xs when f x then return x\n  else\n    for x in xs when f x then return x\n  void\n\nexport head = export first = (xs) ->\n  return void if not xs.length\n  xs.0\n\nexport tail = (xs) ->\n  return void if not xs.length\n  xs.slice 1\n\nexport last = (xs) ->\n  return void if not xs.length\n  xs[*-1]\n\nexport initial = (xs) ->\n  return void if not xs.length\n  xs.slice 0 xs.length - 1\n\nexport empty = (xs) ->\n  if typeof! xs is \\Object\n    for x of xs then return false\n    return yes\n  not xs.length\n\nexport values = (obj) ->\n  [x for , x of obj]\n\nexport keys = (obj) ->\n  [x for x of obj]\n\nexport len = (xs) ->\n  xs = values xs if typeof! xs is \\Object\n  xs.length\n\nexport cons = (x, xs) --\x3e\n  if typeof! xs is \\String then x + xs else [x] ++ xs\n\nexport append = (xs, ys) --\x3e\n  if typeof! ys is \\String then xs + ys else xs ++ ys\n\nexport join = (sep, xs) --\x3e\n  xs = values xs if typeof! xs is \\Object\n  xs.join sep\n\nexport reverse = (xs) ->\n  if typeof! xs is \\String\n  then (xs / '')reverse! * ''\n  else xs.slice!reverse!\n\nexport fold = export foldl = (f, memo, xs) --\x3e\n  if typeof! xs is \\Object\n    for , x of xs then memo = f memo, x\n  else\n    for x in xs then memo = f memo, x\n  memo\n\nexport fold1 = export foldl1 = (f, xs) --\x3e fold f, xs.0, xs.slice 1\n\nexport foldr = (f, memo, xs) --\x3e fold f, memo, xs.slice!reverse!\n\nexport foldr1 = (f, xs) --\x3e\n  xs.=slice!reverse!\n  fold f, xs.0, xs.slice 1\n\nexport unfoldr = export unfold = (f, b) --\x3e\n  if (f b)?\n    [that.0] ++ unfoldr f, that.1\n  else\n    []\n\nexport andList = (xs) ->\n  for x in xs when not x\n    return false\n  true\n\nexport orList = (xs) ->\n  for x in xs when x\n    return true\n  false\n\nexport any = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  for x in xs when f x\n    return yes\n  no\n\nexport all = (f, xs) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  for x in xs when not f x\n    return no\n  yes\n\nexport unique = (xs) ->\n  result = []\n  if typeof! xs is \\Object\n    for , x of xs when x not in result then result.push x\n  else\n    for x   in xs when x not in result then result.push x\n  if typeof! xs is \\String then result * '' else result\n\nexport sort = (xs) ->\n  xs.concat!sort (x, y) ->\n    | x > y =>  1\n    | x < y => -1\n    | _     =>  0\n\nexport sortBy = (f, xs) --\x3e\n  return [] unless xs.length\n  xs.concat!sort f\n\nexport compare = (f, x, y) --\x3e\n  | (f x) > (f y) =>  1\n  | (f x) < (f y) => -1\n  | otherwise     =>  0\n\nexport sum = (xs) ->\n  result = 0\n  if typeof! xs is \\Object\n    for , x of xs then result += x\n  else\n    for x   in xs then result += x\n  result\n\nexport product = (xs) ->\n  result = 1\n  if typeof! xs is \\Object\n    for , x of xs then result *= x\n  else\n    for x   in xs then result *= x\n  result\n\nexport mean = export average = (xs) -> (sum xs) / len xs\n\nexport concat = (xss) -> fold append, [], xss\n\nexport concatMap = (f, xs) --\x3e fold ((memo, x) -> append memo, f x), [], xs\n\nexport listToObj = (xs) ->\n  {[x.0, x.1] for x in xs}\n\nexport maximum = (xs) -> fold1 (>?), xs\n\nexport minimum = (xs) -> fold1 (<?), xs\n\nexport scan = export scanl = (f, memo, xs) --\x3e\n  last = memo\n  if typeof! xs is \\Object\n  then [memo] ++ [last = f last, x for , x of xs]\n  else [memo] ++ [last = f last, x for x in xs]\n\nexport scan1 = export scanl1 = (f, xs) --\x3e scan f, xs.0, xs.slice 1\n\nexport scanr = (f, memo, xs) --\x3e\n  xs.=slice!reverse!\n  scan f, memo, xs .reverse!\n\nexport scanr1 = (f, xs) --\x3e\n  xs.=slice!reverse!\n  scan f, xs.0, xs.slice 1 .reverse!\n\nexport replicate = (n, x) --\x3e\n  result = []\n  i = 0\n  while i < n, ++i then result.push x\n  result\n\nexport take = (n, xs) --\x3e\n  | n <= 0\n    if typeof! xs is \\String then '' else []\n  | not xs.length => xs\n  | otherwise     => xs.slice 0, n\n\nexport drop = (n, xs) --\x3e\n  | n <= 0        => xs\n  | not xs.length => xs\n  | otherwise     => xs.slice n\n\nexport splitAt = (n, xs) --\x3e [(take n, xs), (drop n, xs)]\n\nexport takeWhile = (p, xs) --\x3e\n  return xs if not xs.length\n  p = objToFunc p if typeof! p isnt \\Function\n  result = []\n  for x in xs\n    break if not p x\n    result.push x\n  if typeof! xs is \\String then result * '' else result\n\nexport dropWhile = (p, xs) --\x3e\n  return xs if not xs.length\n  p = objToFunc p if typeof! p isnt \\Function\n  i = 0\n  for x in xs\n    break if not p x\n    ++i\n  drop i, xs\n\nexport span = (p, xs) --\x3e [(takeWhile p, xs), (dropWhile p, xs)]\n\nexport breakIt = (p, xs) --\x3e span (not) << p, xs\n\nexport zip = (xs, ys) --\x3e\n  result = []\n  for zs, i in [xs, ys]\n    for z, j in zs\n      result.push [] if i is 0\n      result[j]?push z\n  result\n\nexport zipWith = (f,xs, ys) --\x3e\n  f = objToFunc f if typeof! f isnt \\Function\n  if not xs.length or not ys.length\n    []\n  else\n    [f.apply this, zs for zs in zip.call this, xs, ys]\n\nexport zipAll = (...xss) ->\n  result = []\n  for xs, i in xss\n    for x, j in xs\n      result.push [] if i is 0\n      result[j]?push x\n  result\n\nexport zipAllWith = (f, ...xss) ->\n  f = objToFunc f if typeof! f isnt \\Function\n  if not xss.0.length or not xss.1.length\n    []\n  else\n    [f.apply this, xs for xs in zipAll.apply this, xss]\n\nexport compose = (...funcs) ->\n  ->\n    args = arguments\n    for f in funcs\n      args = [f.apply this, args]\n    args.0\n\nexport curry = (f) ->\n  curry$ f # using util method curry$ from livescript\n\nexport id = (x) -> x\n\nexport flip = (f, x, y) --\x3e f y, x\n\nexport fix = (f) ->\n  ( (g, x) -> -> f(g g) ...arguments ) do\n    (g, x) -> -> f(g g) ...arguments\n\nexport lines = (str) ->\n  return [] if not str.length\n  str / \\n\n\nexport unlines = (strs) -> strs * \\n\n\nexport words = (str) ->\n  return [] if not str.length\n  str / /[ ]+/\n\nexport unwords = (strs) -> strs * ' '\n\nexport max = (>?)\n\nexport min = (<?)\n\nexport negate = (x) -> -x\n\nexport abs = Math.abs\n\nexport signum = (x) ->\n  | x < 0     => -1\n  | x > 0     =>  1\n  | otherwise =>  0\n\nexport quot = (x, y) --\x3e ~~(x / y)\n\nexport rem = (%)\n\nexport div = (x, y) --\x3e Math.floor x / y\n\nexport mod = (%%)\n\nexport recip = (1 /)\n\nexport pi = Math.PI\n\nexport tau = pi * 2\n\nexport exp = Math.exp\n\nexport sqrt = Math.sqrt\n\n# changed from log as log is a\n# common function for logging things\nexport ln = Math.log\n\nexport pow = (^)\n\nexport sin = Math.sin\n\nexport tan = Math.tan\n\nexport cos = Math.cos\n\nexport asin = Math.asin\n\nexport acos = Math.acos\n\nexport atan = Math.atan\n\nexport atan2 = (x, y) --\x3e Math.atan2 x, y\n\n# sinh\n# tanh\n# cosh\n# asinh\n# atanh\n# acosh\n\nexport truncate = (x) -> ~~x\n\nexport round = Math.round\n\nexport ceiling = Math.ceil\n\nexport floor = Math.floor\n\nexport isItNaN = (x) -> x isnt x\n\nexport even = (x) -> x % 2 == 0\n\nexport odd = (x) -> x % 2 != 0\n\nexport gcd = (x, y) --\x3e\n  x = Math.abs x\n  y = Math.abs y\n  until y is 0\n    z = x % y\n    x = y\n    y = z\n  x\n\nexport lcm = (x, y) --\x3e\n  Math.abs Math.floor (x / (gcd x, y) * y)\n\n# meta\nexport installPrelude = !(target) ->\n  unless target.prelude?isInstalled\n    target <<< out$ # using out$ generated by livescript\n    target <<< target.prelude.isInstalled = true\n\nexport prelude = out$\n\n"}}]);
//# sourceMappingURL=496.35c4c279.chunk.js.map