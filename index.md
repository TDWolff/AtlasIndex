---
layout: default
title: Student Blog
---

<html>
<head>
    <style>
        .darkmode {
            background: #252525;
            color: #ffffff;
        }
        .lightmode {
            background: #ffffff;
            color: #000000;
        }
    </style>
    <link id="theme-style" rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body class="lightmode">
    <button onclick="switchThemes()">Switch Theme</button>
    <p>Text can be <strong>bold</strong>, <em>italic</em>, or <del>strikethrough</del>.</p>
    <p><a href="./another-page.html">Link to another page</a>.</p>
    <p>There should be whitespace between paragraphs.</p>
    <p>There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.</p>
    <h1 id="header-1">Header 1</h1>
    <p>This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>
    <h2 id="header-2">Header 2</h2>
    <blockquote>
    <p>This is a blockquote following a header.</p>
    <p>When something is important enough, you do it even if the odds are not in your favor.</p>
    </blockquote>
    <h3 id="header-3">Header 3</h3>
    <pre><code class="lang-js"><span class="hljs-comment">// Javascript code with syntax highlighting.</span>
    <span class="hljs-keyword">var</span> <span class="hljs-function"><span class="hljs-keyword">fun</span> = function <span class="hljs-title">lang</span><span class="hljs-params">(l)</span></span> {
    dateformat.i18n = require(<span class="hljs-string">'./lang/'</span> + l)
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
    </code></pre>
    <pre><code class="lang-ruby"># Ruby code <span class="hljs-built_in">with</span> syntax highlighting
    GitHubPages::<span class="hljs-keyword">Dependencies</span>.gems.each <span class="hljs-built_in">do</span> |<span class="hljs-type">gem</span>, version|
    <span class="hljs-type">s</span>.add_dependency(gem, <span class="hljs-string">"= #{version}"</span>)
    <span class="hljs-keyword">end</span>
    </code></pre>
    <h4 id="header-4">Header 4</h4>
    <ul>
    <li>This is an unordered list following a header.</li>
    <li>This is an unordered list following a header.</li>
    <li>This is an unordered list following a header.</li>
    </ul>
    <h5 id="header-5">Header 5</h5>
    <ol>
    <li>This is an ordered list following a header.</li>
    <li>This is an ordered list following a header.</li>
    <li>This is an ordered list following a header.</li>
    </ol>
    <h6 id="header-6">Header 6</h6>
    <table>
    <thead>
    <tr>
    <th style="text-align:left">head1</th>
    <th style="text-align:left">head two</th>
    <th style="text-align:left">three</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td style="text-align:left">ok</td>
    <td style="text-align:left">good swedish fish</td>
    <td style="text-align:left">nice</td>
    </tr>
    <tr>
    <td style="text-align:left">out of stock</td>
    <td style="text-align:left">good and plenty</td>
    <td style="text-align:left">nice</td>
    </tr>
    <tr>
    <td style="text-align:left">ok</td>
    <td style="text-align:left">good <code>oreos</code></td>
    <td style="text-align:left">hmm</td>
    </tr>
    <tr>
    <td style="text-align:left">ok</td>
    <td style="text-align:left">good <code>zoute</code> drop</td>
    <td style="text-align:left">yumm</td>
    </tr>
    </tbody>
    </table>
    <h3 id="there-s-a-horizontal-rule-below-this-">There&#39;s a horizontal rule below this.</h3>
    <hr>
    <h3 id="here-is-an-unordered-list-">Here is an unordered list:</h3>
    <ul>
    <li>Item foo</li>
    <li>Item bar</li>
    <li>Item baz</li>
    <li>Item zip</li>
    </ul>
    <h3 id="and-an-ordered-list-">And an ordered list:</h3>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
    <li>Item four</li>
    </ol>
    <h3 id="and-a-nested-list-">And a nested list:</h3>
    <ul>
    <li>level 1 item<ul>
    <li>level 2 item</li>
    <li>level 2 item<ul>
    <li>level 3 item</li>
    <li>level 3 item</li>
    </ul>
    </li>
    </ul>
    </li>
    <li>level 1 item<ul>
    <li>level 2 item</li>
    <li>level 2 item</li>
    <li>level 2 item</li>
    </ul>
    </li>
    <li>level 1 item<ul>
    <li>level 2 item</li>
    <li>level 2 item</li>
    </ul>
    </li>
    <li>level 1 item</li>
    </ul>
    <h3 id="small-image">Small image</h3>
    <p><img src="https://github.githubassets.com/images/icons/emoji/octocat.png" alt="Octocat"></p>
    <h3 id="large-image">Large image</h3>
    <p><img src="https://guides.github.com/activities/hello-world/branching.png" alt="Branching"></p>
    <h3 id="definition-lists-can-be-used-with-html-syntax-">Definition lists can be used with HTML syntax.</h3>
    <dl>
    <dt>Name</dt>
    <dd>Godzilla</dd>
    <dt>Born</dt>
    <dd>1952</dd>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
    <dt>Color</dt>
    <dd>Green</dd>
    </dl>

    <pre><code>Long, single-<span class="hljs-built_in">line</span> code blocks should <span class="hljs-keyword">not</span> <span class="hljs-keyword">wrap</span>. They should horizontally scroll <span class="hljs-keyword">if</span> they are too <span class="hljs-keyword">long</span>. This <span class="hljs-built_in">line</span> should be <span class="hljs-keyword">long</span> enough <span class="hljs-built_in">to</span> demonstrate this.
    </code></pre><pre><code>The <span class="hljs-keyword">final</span> element.
    </code></pre>
        
</body>
<script>
    var darkMode = false;
    function switchThemes() {
        var themeStyle = document.getElementById('theme-style');
        var body = document.body;
        darkMode = !darkMode;
        if (darkMode) {
            themeStyle.href = "assets/css/dark.css";
            body.classList.remove('lightmode');
            body.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.href = "assets/css/style.css";
            body.classList.remove('darkmode');
            body.classList.add('lightmode');
            localStorage.setItem('theme', 'light');
        }
    }
    window.onload = function() {
        var themeStyle = document.getElementById('theme-style');
        var body = document.body;
        var storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            themeStyle.href = "assets/css/dark.css";
            body.classList.remove('lightmode');
            body.classList.add('darkmode');
        } else {
            themeStyle.href = "assets/css/style.css";
            body.classList.remove('darkmode');
            body.classList.add('lightmode');
        }
    }
</script>
</html>