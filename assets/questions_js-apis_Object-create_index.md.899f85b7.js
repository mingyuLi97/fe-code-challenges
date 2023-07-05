import{_ as s,c as a,o as n,N as e}from"./chunks/framework.57e8d462.js";const A=JSON.parse('{"title":"Object-create","description":"","frontmatter":{},"headers":[],"relativePath":"questions/js-apis/Object-create/index.md"}'),o={name:"questions/js-apis/Object-create/index.md"},t=e(`<h1 id="object-create" tabindex="-1">Object-create <a class="header-anchor" href="#object-create" aria-label="Permalink to &quot;Object-create&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><blockquote><p>实现 Object.create</p></blockquote><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">obj</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">() {}</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">fn</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">obj</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">fn</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre></div>`,5),l=[t];function p(c,r,B,i,y,d){return n(),a("div",null,l)}const F=s(o,[["render",p]]);export{A as __pageData,F as default};