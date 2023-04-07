import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"treeToList","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/treeToList/index.md"}'),p={name:"questions/hot/treeToList/index.md"},o=l(`<h1 id="treetolist" tabindex="-1">treeToList <a class="header-anchor" href="#treetolist" aria-label="Permalink to &quot;treeToList&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>树形结构转换成列表</p></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;父节点1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">          {</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1-2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1-2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          },</span></span>
<span class="line"><span style="color:#ABB2BF;">        ],</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;父节点2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">      {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点2-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      },</span></span>
<span class="line"><span style="color:#ABB2BF;">    ],</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// To</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ar</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;父节点1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1-2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点1-1-2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;1-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;父节点2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;子节点2-1&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;2&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">];</span></span></code></pre></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">tree2list</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">treeList</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">list</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">toList</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">parentId</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">of</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">data</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">id</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">name</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [] } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">obj</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">[</span><span style="color:#98C379;">&quot;parentId&quot;</span><span style="color:#ABB2BF;">] </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">list</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#61AFEF;">toList</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">toList</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">treeList</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">list</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,6),B=[o];function e(t,c,r,y,F,A){return a(),n("div",null,B)}const u=s(p,[["render",e]]);export{C as __pageData,u as default};
