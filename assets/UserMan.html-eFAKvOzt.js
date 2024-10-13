import{_ as s,r as i,o as d,c as l,a as e,d as n,b as c,e as r}from"./app-vQfHfLyG.js";const o={},t=e("h1",{id:"用户管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#用户管理","aria-hidden":"true"},"#"),n(" 用户管理")],-1),u={href:"https://man.niaoge.com/",target:"_blank",rel:"noopener noreferrer"},p=r(`<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 用户管理</span>
<span class="token function">useradd</span>     <span class="token comment"># 添加用户</span>
<span class="token function">userdel</span>     <span class="token comment"># 删除用户</span>
<span class="token function">usermod</span>     <span class="token comment"># 修改用户</span>
<span class="token function">passwd</span>      <span class="token comment"># 用户密码管理</span>

<span class="token comment"># 用户组管理</span>
<span class="token function">groupadd</span>    <span class="token comment"># 添加用户组</span>
<span class="token function">groupdel</span>    <span class="token comment"># 删除用户组</span>
<span class="token function">groupmod</span>    <span class="token comment"># 修改用户组</span>
newgrp      <span class="token comment"># 以相同的帐号，另一个群组名称，再次登入系统</span>

<span class="token comment"># 批量处理</span>
newusers    <span class="token comment"># 批量添加用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用文件" tabindex="-1"><a class="header-anchor" href="#常用文件" aria-hidden="true">#</a> 常用文件</h2><h3 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息" aria-hidden="true">#</a> 用户信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>内容格式：用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell</p></blockquote><blockquote><p>伪用户</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bin 拥有可执行的用户命令文件 
sys 拥有系统文件 
adm 拥有帐户文件 
uucp UUCP使用 
lp lp或lpd子系统使用 
nobody NFS使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户登录信息" tabindex="-1"><a class="header-anchor" href="#用户登录信息" aria-hidden="true">#</a> 用户登录信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>内容格式：登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志</p></blockquote><h3 id="用户组信息" tabindex="-1"><a class="header-anchor" href="#用户组信息" aria-hidden="true">#</a> 用户组信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/etc/group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>内容格式：组名:口令:组标识号:组内用户列表</p></blockquote>`,14);function m(v,h){const a=i("ExternalLinkIcon");return d(),l("div",null,[t,e("p",null,[e("a",u,[n("Linux命令大全"),c(a)])]),p])}const k=s(o,[["render",m],["__file","UserMan.html.vue"]]);export{k as default};
