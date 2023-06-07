import{_ as e,c as t,o as s,N as r}from"./chunks/framework.57e8d462.js";const g=JSON.parse('{"title":"promise-limit2","description":"","frontmatter":{},"headers":[],"relativePath":"questions/hot/promise-limit2/index.md"}'),o={name:"questions/hot/promise-limit2/index.md"},n=r(`<h1 id="promise-limit2" tabindex="-1">promise-limit2 <a class="header-anchor" href="#promise-limit2" aria-label="Permalink to &quot;promise-limit2&quot;">​</a></h1><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>const request1 = () =&gt; new Promise((resolve, reject) =&gt; { setTimeout(() =&gt; { resolve(1); }, 1000); });</p><p>const request2 = () =&gt; new Promise((resolve, reject) =&gt; { setTimeout(() =&gt; { resolve(2); }, 500); });</p><p>const request3 = () =&gt; new Promise((resolve, reject) =&gt; { setTimeout(() =&gt; { resolve(3); }, 300); });</p><p>const request4 = () =&gt; new Promise((resolve, reject) =&gt; { setTimeout(() =&gt; { resolve(4); }, 400); });</p><p>function scheduler(max) { const queue = []; let running = 0;</p><p>function runNextRequest() { if (running &gt;= max || queue.length === 0) { return; }</p><pre><code>running++;
const nextRequest = queue.shift();
nextRequest()
  .then((result) =&gt; {
    console.log(result);
  })
  .catch((error) =&gt; {
    console.error(error);
  })
  .finally(() =&gt; {
    running--;
    runNextRequest();
  });
</code></pre><p>}</p><p>return function addRequest(request) { queue.push(request); runNextRequest(); }; }</p><p>const addRequest = scheduler(2); addRequest(request1).then((res) =&gt; { console.log(res); }); addRequest(request2).then((res) =&gt; { console.log(res); }); addRequest(request3).then((res) =&gt; { console.log(res); }); addRequest(request4).then((res) =&gt; { console.log(res); });</p><blockquote><p>控制并发</p></blockquote><h2 id="题解" tabindex="-1">题解 <a class="header-anchor" href="#题解" aria-label="Permalink to &quot;题解&quot;">​</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro"><code><span class="line"></span></code></pre></div>`,15),a=[n];function i(u,l,c,p,d,m){return s(),t("div",null,a)}const h=e(o,[["render",i]]);export{g as __pageData,h as default};
