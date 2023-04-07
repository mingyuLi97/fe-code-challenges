import{_ as s,c as a,o as n,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"promise-allSettled","description":"","frontmatter":{},"headers":[],"relativePath":"questions/js-apis/promise-allSettled/index.md"}'),o={name:"questions/js-apis/promise-allSettled/index.md"},p=l(`<h1 id="promise-allsettled" tabindex="-1">promise-allSettled <a class="header-anchor" href="#promise-allsettled" aria-label="Permalink to &quot;promise-allSettled&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>Promise.allSettled 实现</p></blockquote><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">pArr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pArr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">status</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">value</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">status</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;fulfilled&quot;</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&quot;value&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&quot;reason&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">value</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">) </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">pArr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">p</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">i</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;fulfilled&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">)).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">e</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;rejected&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">e</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        );</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">set</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&quot;fulfilled&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,5),e=[p];function B(t,c,r,y,F,A){return n(),a("div",null,e)}const E=s(o,[["render",B]]);export{C as __pageData,E as default};
