import{_ as i,r as t,o as c,c as o,a as n,d as s,b as e,j as l}from"./app-5oOmd1mQ.js";const p={},d=n("h1",{id:"linux-包管理器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-包管理器","aria-hidden":"true"},"#"),s(" Linux 包管理器")],-1),r=n("h2",{id:"yum",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#yum","aria-hidden":"true"},"#"),s(" yum")],-1),u={href:"https://www.runoob.com/linux/linux-yum.html",target:"_blank",rel:"noopener noreferrer"},m=l(`<blockquote><p>yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。<br> 基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。</p></blockquote><h3 id="yum-常用命令" tabindex="-1"><a class="header-anchor" href="#yum-常用命令" aria-hidden="true">#</a> yum 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有可更新的软件清单命令：</span>
yum check-update

<span class="token comment"># 更新所有软件命令：</span>
yum update

<span class="token comment"># 仅安装指定的软件命令：</span>
yum <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 仅更新指定的软件命令：</span>
yum update <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 列出所有可安裝的软件清单命令：</span>
yum list

<span class="token comment"># 删除软件包命令：</span>
yum remove <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 查找软件包命令：</span>
yum search <span class="token operator">&lt;</span>keyword<span class="token operator">&gt;</span>

<span class="token comment"># 清除缓存命令:</span>
<span class="token comment"># 清除缓存目录下的软件包</span>
yum clean packages
<span class="token comment"># 清除缓存目录下的 headers</span>
yum clean headers
<span class="token comment"># 清除缓存目录下旧的 headers</span>
yum clean oldheaders
<span class="token comment"># 清除缓存目录下的软件包及旧的 headers</span>
yum clean, yum clean all <span class="token punctuation">(</span><span class="token operator">=</span> yum clean packages<span class="token punctuation">;</span> yum clean oldheaders<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更换国内-yum-源" tabindex="-1"><a class="header-anchor" href="#更换国内-yum-源" aria-hidden="true">#</a> 更换国内 yum 源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 备份旧源</span>
<span class="token function">mv</span> /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
<span class="token comment"># 下载新源</span>
<span class="token function">wget</span> http://mirrors.163.com/.help/CentOS6-Base-163.repo
<span class="token function">mv</span> CentOS6-Base-163.repo CentOS-Base.repo
<span class="token comment"># 生成缓存</span>
yum clean all
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt" aria-hidden="true">#</a> apt</h2>`,6),v={href:"https://www.runoob.com/linux/linux-comm-apt.html",target:"_blank",rel:"noopener noreferrer"},k=l(`<blockquote><p>apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。<br> apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。<br> apt 命令执行需要超级管理员权限(root)。</p></blockquote><h3 id="apt-常用命令" tabindex="-1"><a class="header-anchor" href="#apt-常用命令" aria-hidden="true">#</a> apt 常用命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有可更新的软件清单命令：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update

<span class="token comment"># 升级软件包：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> upgrade

<span class="token comment"># 列出可更新的软件包及版本信息：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list <span class="token parameter variable">--upgradable</span>

<span class="token comment"># 升级软件包，升级前先删除需要更新软件包：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> full-upgrade

<span class="token comment"># 安装指定的软件命令：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 安装多个软件包：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token operator">&lt;</span>package_<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token operator">&lt;</span>package_<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> <span class="token operator">&lt;</span>package_<span class="token operator"><span class="token file-descriptor important">3</span>&gt;</span>

<span class="token comment"># 更新指定的软件命令：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> show <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 删除软件包命令：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> remove <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 清理不再使用的依赖和库文件: </span>
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove

<span class="token comment"># 移除软件包及配置文件: </span>
<span class="token function">sudo</span> <span class="token function">apt</span> purge <span class="token operator">&lt;</span>package_name<span class="token operator">&gt;</span>

<span class="token comment"># 查找软件包命令： </span>
<span class="token function">sudo</span> <span class="token function">apt</span> search <span class="token operator">&lt;</span>keyword<span class="token operator">&gt;</span>

<span class="token comment"># 列出所有已安装的包：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list <span class="token parameter variable">--installed</span>

<span class="token comment">#列出所有已安装的包的版本信息：</span>
<span class="token function">sudo</span> <span class="token function">apt</span> list --all-versions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(h,f){const a=t("ExternalLinkIcon");return c(),o("div",null,[d,r,n("p",null,[n("a",u,[s("菜鸟教程 Linux yum 命令"),e(a)])]),m,n("p",null,[n("a",v,[s("菜鸟教程 Linux apt 命令"),e(a)])]),k])}const _=i(p,[["render",b],["__file","PackageMan.html.vue"]]);export{_ as default};
