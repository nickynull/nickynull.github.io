import{_ as e,o as a,c as s,j as n}from"./app-WnoEkLSG.js";const c={},i=n(`<h1 id="归档日志" tabindex="-1"><a class="header-anchor" href="#归档日志" aria-hidden="true">#</a> 归档日志</h1><div class="custom-container tip"><p class="custom-container-title">提示</p><p>当归档日志满了之后，数据库将无法使用，需要清理归档日志。<br> 如果数据库被关闭了，要先打开数据库再清理。<br> 清理完之后如果有条件的话最好做一次备份。</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">su</span> - oracle <span class="token comment">#使用root登录后，切换到oracle用户，或者直接登录到oracle用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>rman target /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>delete archivelog all completed before <span class="token string">&#39;sysdate-1&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),d=[i];function r(t,l){return a(),s("div",null,d)}const u=e(c,[["render",r],["__file","ArchiveLog.html.vue"]]);export{u as default};