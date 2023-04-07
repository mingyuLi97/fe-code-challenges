import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"Promise.all","description":"","frontmatter":{},"headers":[],"relativePath":"questions/js-apis/promise-all/index.md"}'),p={name:"questions/js-apis/promise-all/index.md"},o=l(`<h1 id="promise-all" tabindex="-1">Promise.all <a class="header-anchor" href="#promise-all" aria-label="Permalink to &quot;Promise.all&quot;">​</a></h1><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">promiseAll</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">pArr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">n</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pArr</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">resolve</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">reject</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_then</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;font-style:italic;">idx</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">v</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">idx</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">v</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">++</span><span style="color:#E06C75;">count</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">resolve</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    };</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">n</span><span style="color:#ABB2BF;">; </span><span style="color:#E06C75;">i</span><span style="color:#56B6C2;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">pArr</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">instanceof</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Promise</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">p</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">r</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">_then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">r</span><span style="color:#ABB2BF;">)).</span><span style="color:#61AFEF;">catch</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">err</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">reject</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">err</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">      } </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">_then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,2),B=[o];function e(t,c,r,y,A,F){return a(),n("div",null,B)}const E=s(p,[["render",e]]);export{C as __pageData,E as default};
