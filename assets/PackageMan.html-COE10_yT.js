import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as l,o as e}from"./app-DHF0Qz1w.js";const p={};function o(c,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="linux-包管理器" tabindex="-1"><a class="header-anchor" href="#linux-包管理器"><span>Linux 包管理器</span></a></h1><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum"><span>yum</span></a></h2><p><a href="https://www.runoob.com/linux/linux-yum.html" target="_blank" rel="noopener noreferrer">菜鸟教程 - Linux yum 命令 | https://www.runoob.com/linux/linux-yum.html</a></p><blockquote><p>yum（ Yellow dog Updater, Modified）是一个在 Fedora 和 RedHat 以及 SUSE 中的 Shell 前端软件包管理器。<br> 基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装。</p></blockquote><h3 id="yum-常用命令" tabindex="-1"><a class="header-anchor" href="#yum-常用命令"><span>yum 常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># 列出所有可更新的软件清单命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> check-update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 更新所有软件命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 仅安装指定的软件命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> install</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 仅更新指定的软件命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> update</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 列出所有可安裝的软件清单命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 删除软件包命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> remove</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 查找软件包命令：</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> search</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">keywor</span><span style="color:#F8F8F2;">d</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 清除缓存命令:</span></span>
<span class="line"><span style="color:#88846F;"># 清除缓存目录下的软件包</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> packages</span></span>
<span class="line"><span style="color:#88846F;"># 清除缓存目录下的 headers</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> headers</span></span>
<span class="line"><span style="color:#88846F;"># 清除缓存目录下旧的 headers</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> oldheaders</span></span>
<span class="line"><span style="color:#88846F;"># 清除缓存目录下的软件包及旧的 headers</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean,</span><span style="color:#E6DB74;"> yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> all</span><span style="color:#F8F8F2;"> (= </span><span style="color:#E6DB74;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> packages</span><span style="color:#F8F8F2;">; </span><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> oldheaders</span><span style="color:#F8F8F2;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更换国内-yum-源" tabindex="-1"><a class="header-anchor" href="#更换国内-yum-源"><span>更换国内 yum 源</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># 备份旧源</span></span>
<span class="line"><span style="color:#A6E22E;">mv</span><span style="color:#E6DB74;"> /etc/yum.repos.d/CentOS-Base.repo</span><span style="color:#E6DB74;"> /etc/yum.repos.d/CentOS-Base.repo.backup</span></span>
<span class="line"><span style="color:#88846F;"># 下载新源</span></span>
<span class="line"><span style="color:#A6E22E;">wget</span><span style="color:#E6DB74;"> http://mirrors.163.com/.help/CentOS6-Base-163.repo</span></span>
<span class="line"><span style="color:#A6E22E;">mv</span><span style="color:#E6DB74;"> CentOS6-Base-163.repo</span><span style="color:#E6DB74;"> CentOS-Base.repo</span></span>
<span class="line"><span style="color:#88846F;"># 生成缓存</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> clean</span><span style="color:#E6DB74;"> all</span></span>
<span class="line"><span style="color:#A6E22E;">yum</span><span style="color:#E6DB74;"> makecache</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="apt" tabindex="-1"><a class="header-anchor" href="#apt"><span>apt</span></a></h2><p><a href="https://www.runoob.com/linux/linux-comm-apt.html" target="_blank" rel="noopener noreferrer">菜鸟教程 Linux apt 命令</a></p><blockquote><p>apt（Advanced Packaging Tool）是一个在 Debian 和 Ubuntu 中的 Shell 前端软件包管理器。<br> apt 命令提供了查找、安装、升级、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。<br> apt 命令执行需要超级管理员权限(root)。</p></blockquote><h3 id="apt-常用命令" tabindex="-1"><a class="header-anchor" href="#apt-常用命令"><span>apt 常用命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># 列出所有可更新的软件清单命令：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 升级软件包：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 列出可更新的软件包及版本信息：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> list</span><span style="color:#AE81FF;"> --upgradable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 升级软件包，升级前先删除需要更新软件包：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> full-upgrade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 安装指定的软件命令：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> install</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 安装多个软件包：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> install</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_</span><span style="color:#F92672;">1&gt;</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_</span><span style="color:#F92672;">2&gt;</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_</span><span style="color:#F92672;">3&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 更新指定的软件命令：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> update</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 显示软件包具体信息,例如：版本号，安装大小，依赖关系等等：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> show</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 删除软件包命令：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> remove</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 清理不再使用的依赖和库文件: </span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> autoremove</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 移除软件包及配置文件: </span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> purge</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">package_nam</span><span style="color:#F8F8F2;">e</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 查找软件包命令： </span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> search</span><span style="color:#F92672;"> &lt;</span><span style="color:#E6DB74;">keywor</span><span style="color:#F8F8F2;">d</span><span style="color:#F92672;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;"># 列出所有已安装的包：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> list</span><span style="color:#AE81FF;"> --installed</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">#列出所有已安装的包的版本信息：</span></span>
<span class="line"><span style="color:#A6E22E;">sudo</span><span style="color:#E6DB74;"> apt</span><span style="color:#E6DB74;"> list</span><span style="color:#AE81FF;"> --all-versions</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13)]))}const t=n(p,[["render",o]]),d=JSON.parse('{"path":"/servers/linux/PackageMan.html","title":"Linux 包管理器","lang":"zh-CN","frontmatter":{},"git":{},"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"servers/linux/PackageMan.md"}');export{t as comp,d as data};
