import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"sql-select","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/sql-select/index.md"}'),p={name:"questions/hot/sql-select/index.md"},o=l(`<h1 id="sql-select" tabindex="-1">sql-select <a class="header-anchor" href="#sql-select" aria-label="Permalink to &quot;sql-select&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>模拟 sql 查询</p><ul><li>query 传入参数为原始数据（数组格式，每个元素都是对象）通过进行链式调用对数据执行操作，支持的方法有: <ul><li>where(predicate): 根据参数的条件进行筛选，参数与 [].filter 的参数类似</li><li>orderBy(key, desc): 根据 key 的值进行排列，默认升序排列，当第二个参数为 true 时降序排列</li><li>groupBy(key): 根据 key 的值对数据元素进行分组，合并为二维数组</li><li>execute(): 执行所有处理并返回最终结果</li></ul></li></ul><p>例子：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">let</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">query</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">where</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">item</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">age</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">18</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">orderBy</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;age&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">groupBy</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;city&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  .</span><span style="color:#61AFEF;">execute</span><span style="color:#ABB2BF;">();</span><span style="color:#98C379;">\`\`\`</span></span></code></pre></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">class</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">QueryBuilder</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">constructor</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">where</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">condition</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">filter</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">condition</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">orderBy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">des</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">sort</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">a</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">b</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">b</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">]) </span><span style="color:#56B6C2;">*</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">des</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">groupBy</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">key</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">map</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {};</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">item</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">k</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">key</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#E06C75;">map</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">k</span><span style="color:#ABB2BF;">]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">map</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">k</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">map</span><span style="color:#ABB2BF;">[</span><span style="color:#E06C75;">k</span><span style="color:#ABB2BF;">].</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Object</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">values</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">map</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">execute</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">res</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">query</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// do something</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">QueryBuilder</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">arr</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,8),B=[o];function e(t,c,r,y,F,A){return a(),n("div",null,B)}const E=s(p,[["render",e]]);export{C as __pageData,E as default};
