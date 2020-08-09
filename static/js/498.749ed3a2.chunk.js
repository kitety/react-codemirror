(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[498],{798:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='Markdown: Basics\n================\n\n<ul id="ProjectSubmenu">\n    <li><a href="/projects/markdown/" title="Markdown Project Page">Main</a></li>\n    <li><a class="selected" title="Markdown Basics">Basics</a></li>\n    <li><a href="/projects/markdown/syntax" title="Markdown Syntax Documentation">Syntax</a></li>\n    <li><a href="/projects/markdown/license" title="Pricing and License Information">License</a></li>\n    <li><a href="/projects/markdown/dingus" title="Online Markdown Web Form">Dingus</a></li>\n</ul>\n\n\nGetting the Gist of Markdown\'s Formatting Syntax\n------------------------------------------------\n\nThis page offers a brief overview of what it\'s like to use Markdown.\nThe [syntax page] [s] provides complete, detailed documentation for\nevery feature, but Markdown should be very easy to pick up simply by\nlooking at a few examples of it in action. The examples on this page\nare written in a before/after style, showing example syntax and the\nHTML output produced by Markdown.\n\nIt\'s also helpful to simply try Markdown out; the [Dingus] [d] is a\nweb application that allows you type your own Markdown-formatted text\nand translate it to XHTML.\n\n**Note:** This document is itself written using Markdown; you\ncan [see the source for it by adding \'.text\' to the URL] [src].\n\n  [s]: /projects/markdown/syntax  "Markdown Syntax"\n  [d]: /projects/markdown/dingus  "Markdown Dingus"\n  [src]: /projects/markdown/basics.text\n\n\n## Paragraphs, Headers, Blockquotes ##\n\nA paragraph is simply one or more consecutive lines of text, separated\nby one or more blank lines. (A blank line is any line that looks like\na blank line -- a line containing nothing but spaces or tabs is\nconsidered blank.) Normal paragraphs should not be indented with\nspaces or tabs.\n\nMarkdown offers two styles of headers: *Setext* and *atx*.\nSetext-style headers for `<h1>` and `<h2>` are created by\n"underlining" with equal signs (`= `) and hyphens (` - `), respectively.\nTo create an atx-style header, you put 1-6 hash marks (`#`) at the\nbeginning of the line -- the number of hashes equals the resulting\nHTML header level.\n\nBlockquotes are indicated using email-style \'`> `\' angle brackets.\n\nMarkdown:\n\n    A First Level Header\n    ====================\n\n    A Second Level Header\n    ---------------------\n\n    Now is the time for all good men to come to\n    the aid of their country. This is just a\n    regular paragraph.\n\n    The quick brown fox jumped over the lazy\n    dog\'s back.\n\n    ### Header 3\n\n    > This is a blockquote.\n    >\n    > This is the second paragraph in the blockquote.\n    >\n    > ## This is an H2 in a blockquote\n\n\nOutput:\n\n    <h1>A First Level Header</h1>\n\n    <h2>A Second Level Header</h2>\n\n    <p>Now is the time for all good men to come to\n    the aid of their country. This is just a\n    regular paragraph.</p>\n\n    <p>The quick brown fox jumped over the lazy\n    dog\'s back.</p>\n\n    <h3>Header 3</h3>\n\n    <blockquote>\n        <p>This is a blockquote.</p>\n\n        <p>This is the second paragraph in the blockquote.</p>\n\n        <h2>This is an H2 in a blockquote</h2>\n    </blockquote>\n\n\n\n### Phrase Emphasis ###\n\nMarkdown uses asterisks and underscores to indicate spans of emphasis.\n\nMarkdown:\n\n    Some of these words *are emphasized*.\n    Some of these words _are emphasized also_.\n\n    Use two asterisks for **strong emphasis**.\n    Or, if you prefer, __use two underscores instead__.\n\nOutput:\n\n    <p>Some of these words <em>are emphasized</em>.\n    Some of these words <em>are emphasized also</em>.</p>\n\n    <p>Use two asterisks for <strong>strong emphasis</strong>.\n    Or, if you prefer, <strong>use two underscores instead</strong>.</p>\n\n\n\n## Lists ##\n\nUnordered (bulleted) lists use asterisks, pluses, and hyphens (`* `,\n`+ `, and ` - `) as list markers. These three markers are\ninterchangable; this:\n\n    *   Candy.\n    *   Gum.\n    *   Booze.\n\nthis:\n\n    +   Candy.\n    +   Gum.\n    +   Booze.\n\nand this:\n\n    -   Candy.\n    -   Gum.\n    -   Booze.\n\nall produce the same output:\n\n    <ul>\n    <li>Candy.</li>\n    <li>Gum.</li>\n    <li>Booze.</li>\n    </ul>\n\nOrdered (numbered) lists use regular numbers, followed by periods, as\nlist markers:\n\n    1.  Red\n    2.  Green\n    3.  Blue\n\nOutput:\n\n    <ol>\n    <li>Red</li>\n    <li>Green</li>\n    <li>Blue</li>\n    </ol>\n\nIf you put blank lines between items, you\'ll get `<p>` tags for the\nlist item text. You can create multi-paragraph list items by indenting\nthe paragraphs by 4 spaces or 1 tab:\n\n    *   A list item.\n\n        With multiple paragraphs.\n\n    *   Another item in the list.\n\nOutput:\n\n    <ul>\n    <li><p>A list item.</p>\n    <p>With multiple paragraphs.</p></li>\n    <li><p>Another item in the list.</p></li>\n    </ul>\n\n\n\n### Links ###\n\nMarkdown supports two styles for creating links: *inline* and\n*reference*. With both styles, you use square brackets to delimit the\ntext you want to turn into a link.\n\nInline-style links use parentheses immediately after the link text.\nFor example:\n\n    This is an [example link](http://example.com/).\n\nOutput:\n\n    <p>This is an <a href="http://example.com/">\n    example link</a>.</p>\n\nOptionally, you may include a title attribute in the parentheses:\n\n    This is an [example link](http://example.com/ "With a Title").\n\nOutput:\n\n    <p>This is an <a href="http://example.com/" title="With a Title">\n    example link</a>.</p>\n\nReference-style links allow you to refer to your links by names, which\nyou define elsewhere in your document:\n\n    I get 10 times more traffic from [Google][1] than from\n    [Yahoo][2] or [MSN][3].\n\n    [1]: http://google.com/        "Google"\n    [2]: http://search.yahoo.com/  "Yahoo Search"\n    [3]: http://search.msn.com/    "MSN Search"\n\nOutput:\n\n    <p>I get 10 times more traffic from <a href="http://google.com/"\n    title="Google">Google</a> than from <a href="http://search.yahoo.com/"\n    title="Yahoo Search">Yahoo</a> or <a href="http://search.msn.com/"\n    title="MSN Search">MSN</a>.</p>\n\nThe title attribute is optional. Link names may contain letters,\nnumbers and spaces, but are *not* case sensitive:\n\n    I start my morning with a cup of coffee and\n    [The New York Times][NY Times].\n\n    [ny times]: http://www.nytimes.com/\n\nOutput:\n\n    <p>I start my morning with a cup of coffee and\n    <a href="http://www.nytimes.com/">The New York Times</a>.</p>\n\n\n### Images ###\n\nImage syntax is very much like link syntax.\n\nInline (titles are optional):\n\n    ![alt text](/path/to/img.jpg "Title")\n\nReference-style:\n\n    ![alt text][id]\n\n    [id]: /path/to/img.jpg "Title"\n\nBoth of the above examples produce the same output:\n\n    <img src="/path/to/img.jpg" alt="alt text" title="Title" />\n\n\n\n### Code ###\n\nIn a regular paragraph, you can create code span by wrapping text in\nbacktick quotes. Any ampersands (`& `) and angle brackets (` < ` or\n`> `) will automatically be translated into HTML entities. This makes\nit easy to use Markdown to write about HTML example code:\n\n    I strongly recommend against using any `<blink>` tags.\n\n    I wish SmartyPants used named entities like `& mdash; `\n    instead of decimal-encoded entites like `&#8212; `.\n\nOutput:\n\n    <p>I strongly recommend against using any\n    <code>&lt;blink&gt;</code> tags.</p>\n\n    <p>I wish SmartyPants used named entities like\n    <code>&amp;mdash;</code> instead of decimal-encoded\n    entites like <code>&amp;#8212;</code>.</p>\n\n\nTo specify an entire block of pre-formatted code, indent every line of\nthe block by 4 spaces or 1 tab. Just like with code spans, `& `, ` < `,\nand `> ` characters will be escaped automatically.\n\nMarkdown:\n\n    If you want your page to validate under XHTML 1.0 Strict,\n    you\'ve got to put paragraph tags in your blockquotes:\n\n        <blockquote>\n            <p>For example.</p>\n        </blockquote>\n\nOutput:\n\n    <p>If you want your page to validate under XHTML 1.0 Strict,\n    you\'ve got to put paragraph tags in your blockquotes:</p>\n\n    <pre><code>&lt;blockquote&gt;\n        &lt;p&gt;For example.&lt;/p&gt;\n    &lt;/blockquote&gt;\n    </code></pre>\n\n## Fenced code blocks (and syntax highlighting)\n\n```javascript\nfor (var i = 0; i < items.length; i++) {\n  console.log(items[i], i); // log them\n}\n```\n'}}]);
//# sourceMappingURL=498.749ed3a2.chunk.js.map