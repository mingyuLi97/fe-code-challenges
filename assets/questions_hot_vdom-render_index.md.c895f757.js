import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const F=JSON.parse('{"title":"vdom-render","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/vdom-render/index.md"}'),p={name:"questions/hot/vdom-render/index.md"},o=l(`<h1 id="vdom-render" tabindex="-1">vdom-render <a class="header-anchor" href="#vdom-render" aria-label="Permalink to &quot;vdom-render&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>将虚拟 DOM 转换成真实 DOM</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">{</span></span>
<span class="line"><span style="color:#abb2bf;">  tag: &#39;DIV&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">  attrs:{</span></span>
<span class="line"><span style="color:#abb2bf;">  id:&#39;app&#39;</span></span>
<span class="line"><span style="color:#abb2bf;">  },</span></span>
<span class="line"><span style="color:#abb2bf;">  children: [</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      tag: &#39;SPAN&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      children: [</span></span>
<span class="line"><span style="color:#abb2bf;">        { tag: &#39;A&#39;, children: [] }</span></span>
<span class="line"><span style="color:#abb2bf;">      ]</span></span>
<span class="line"><span style="color:#abb2bf;">    },</span></span>
<span class="line"><span style="color:#abb2bf;">    {</span></span>
<span class="line"><span style="color:#abb2bf;">      tag: &#39;SPAN&#39;,</span></span>
<span class="line"><span style="color:#abb2bf;">      children: [</span></span>
<span class="line"><span style="color:#abb2bf;">        { tag: &#39;A&#39;, children: [] },</span></span>
<span class="line"><span style="color:#abb2bf;">        { tag: &#39;A&#39;, children: [] }</span></span>
<span class="line"><span style="color:#abb2bf;">      ]</span></span>
<span class="line"><span style="color:#abb2bf;">    }</span></span>
<span class="line"><span style="color:#abb2bf;">  ]</span></span>
<span class="line"><span style="color:#abb2bf;">}</span></span>
<span class="line"><span style="color:#abb2bf;">把上诉虚拟Dom转化成下方真实Dom</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;span&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">    &lt;a&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;/span&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;span&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">    &lt;a&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">    &lt;a&gt;&lt;/a&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">  &lt;/span&gt;</span></span>
<span class="line"><span style="color:#abb2bf;">&lt;/div&gt;</span></span></code></pre></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">vnode</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">node</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">node</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">typeof</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">node</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;string&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createTextNode</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">node</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">tag</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">attrs</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {}, </span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [] } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">node</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">tag</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">k</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">attrs</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">setAttribute</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">k</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">attrs</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">k</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">child</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">el</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">appendChild</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">child</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">      });</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">el</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">render</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">vnode</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,6),e=[o];function t(c,r,B,y,i,b){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
