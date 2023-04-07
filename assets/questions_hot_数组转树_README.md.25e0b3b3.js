import{_ as s,c as n,o as a,N as l}from"./chunks/framework.57e8d462.js";const C=JSON.parse('{"title":"0.数组转树","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/数组转树/README.md"}'),p={name:"questions/hot/数组转树/README.md"},o=l(`<h1 id="_0-数组转树" tabindex="-1">0.数组转树 <a class="header-anchor" href="#_0-数组转树" aria-label="Permalink to &quot;0.数组转树&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>将如下数据结构（arr），转换为 Tree 结构。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// arr</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门B&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门C&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门A&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门D&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门E&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门F&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门G&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">  {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门H&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// tree</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">res</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门B&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门A&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门C&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">6</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门F&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;">          ],</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">        {</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门D&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">: [</span></span>
<span class="line"><span style="color:#ABB2BF;">            {</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门H&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">              </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            },</span></span>
<span class="line"><span style="color:#ABB2BF;">          ],</span></span>
<span class="line"><span style="color:#ABB2BF;">        },</span></span>
<span class="line"><span style="color:#ABB2BF;">      ],</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">5</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门E&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">7</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;部门G&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    },</span></span>
<span class="line"><span style="color:#ABB2BF;">  ],</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span></code></pre></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">arrToTree</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">root</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">item</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">buildTree</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">node</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [];</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">forEach</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">item</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">item</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">parentId</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">===</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">buildTree</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">push</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">item</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      }</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">children</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">length</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">node</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">children</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">buildTree</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">root</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,6),B=[o];function e(c,t,r,y,A,F){return a(),n("div",null,B)}const E=s(p,[["render",e]]);export{C as __pageData,E as default};
