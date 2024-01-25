import{_ as a,r as s,o as r,c as d,a as e,d as t,b as n,e as c}from"./app-TXuTd2TJ.js";const i="/servers/python-logo.png",l={},p=e("h1",{id:"python",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),t(" Python")],-1),h=e("div",{class:"md-logo",style:{background:"#1e415f"}},[e("img",{src:i,alt:"img"})],-1),u={href:"https://www.python.org",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),m={href:"https://www.runoob.com/python3/python3-tutorial.html",target:"_blank",rel:"noopener noreferrer"},y=c(`<blockquote><p><strong>官网：</strong><br> Python is powerful... and fast;<br> plays well with others;<br> runs everywhere;<br> is friendly &amp; easy to learn;<br> is Open.</p></blockquote><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2><h3 id="模块与包" tabindex="-1"><a class="header-anchor" href="#模块与包" aria-hidden="true">#</a> 模块与包</h3><blockquote><ul><li><strong>模块 module</strong><ul><li>一般情况下，是一个以.py为后缀的文件</li><li>其他可作为module的文件类型还有&quot;.pyo&quot;、&quot;.pyc&quot;、&quot;.pyd&quot;、&quot;.so&quot;、&quot;.dll&quot;</li></ul></li><li><strong>包 package</strong><ul><li>含有Python模块的文件夹</li><li>当一个文件夹下有 <code>__init__.py</code> 时，意为该文件夹是一个 <em>包</em></li></ul></li></ul></blockquote><h3 id="print" tabindex="-1"><a class="header-anchor" href="#print" aria-hidden="true">#</a> print</h3><blockquote><p>print 默认换行，若不换行需要加 <code>end</code> 参数</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;不换行&#39;</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;换行&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><table><thead><tr><th>代码</th><th>作用</th></tr></thead><tbody><tr><td><code>import os</code></td><td>导入 <code>os</code>，使用：<code>os.makedirs(file_dir, exist_ok=True)</code></td></tr><tr><td><code>from os import *</code></td><td>导入 <code>os</code>，使用：<code>makedirs(file_dir, exist_ok=True)</code></td></tr><tr><td><code>from bs4 import BeautifulSoup</code></td><td>从 <code>bs4</code> 中，导入 <code>BeautifulSoup</code></td></tr><tr><td><code>from sys import argv,path</code></td><td>从 <code>sys</code> 中，导入 <code>argv</code> <code>path</code></td></tr></tbody></table>`,9);function b(k,f){const o=s("ExternalLinkIcon");return r(),d("div",null,[p,h,e("p",null,[e("a",u,[t("Python官网 https://www.python.org"),n(o)]),_,e("a",m,[t("菜鸟教程-Python3"),n(o)])]),y])}const q=a(l,[["render",b],["__file","Python.html.vue"]]);export{q as default};
