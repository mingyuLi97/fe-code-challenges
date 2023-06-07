import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"arrangement","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/arrangement/index.md"}'),p={name:"questions/hot/arrangement/index.md"},o=l(`<h1 id="arrangement" tabindex="-1">arrangement <a class="header-anchor" href="#arrangement" aria-label="Permalink to &quot;arrangement&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>排列组合 fn([[&#39;a&#39;, &#39;b&#39;], [&#39;n&#39;, &#39;m&#39;], [&#39;0&#39;, &#39;1&#39;]]) =&gt; [&#39;an0&#39;, &#39;am0&#39;, &#39;an1&#39;, &#39;am1&#39;, &#39;bn0&#39;, &#39;bm0&#39;, &#39;bn1&#39;, &#39;bm0&#39;]</p></blockquote><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">backtracking</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">startIdx</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;&quot;</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">startIdx</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">innerArr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">innerArr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">j</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">innerArr</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">j</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">backtracking</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">path</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">pop</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">backtracking</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,5),B=[o];function e(t,r,c,y,A,F){return a(),n("div",null,B)}const E=s(p,[["render",e]]);export{C as __pageData,E as default};
