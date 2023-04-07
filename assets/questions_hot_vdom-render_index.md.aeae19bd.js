import{_ as a,c as s,o as n,N as l}from"./chunks/framework.57e8d462.js";const h=JSON.parse('{"title":"vdom-render","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/vdom-render/index.md"}'),p={name:"questions/hot/vdom-render/index.md"},e=l(`<h1 id="vdom-render" tabindex="-1">vdom-render <a class="header-anchor" href="#vdom-render" aria-label="Permalink to &quot;vdom-render&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>将虚拟 DOM 转换成真实 DOM</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#abb2bf;">{</span></span>
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
<span class="line"><span style="color:#abb2bf;">&lt;/div&gt;</span></span></code></pre></div><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"></span></code></pre></div>`,6),o=[e];function t(c,b,r,i,d,f){return n(),s("div",null,o)}const _=a(p,[["render",t]]);export{h as __pageData,_ as default};
