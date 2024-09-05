import{_ as o,r as i,o as n,c as t,a as e,d as a,b as s,j as d}from"./app-jvjj9HG0.js";const c="/assets/Linux目录结构-qSBm3Icg.jpg",h={},l=e("h1",{id:"linux-文件系统",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-文件系统","aria-hidden":"true"},"#"),a(" Linux 文件系统")],-1),u=e("h2",{id:"linux-目录结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux-目录结构","aria-hidden":"true"},"#"),a(" Linux 目录结构")],-1),b={href:"https://www.runoob.com/linux/linux-system-contents.html",target:"_blank",rel:"noopener noreferrer"},p=d('<div class="custom-container warning"><p class="custom-container-title">在 Linux 系统中，有几个目录是比较重要的，平时需要注意不要误删除或者随意更改内部文件</p><p><strong>/etc</strong><br> 这个是系统中的配置文件，如果你更改了该目录下的某个文件可能会导致系统不能启动。</p><p><strong>/bin, /sbin, /usr/bin, /usr/sbin</strong><br> 这是系统预设的执行文件的放置目录，比如 ls 就是在 /bin/ls 目录下的。<br> 值得提出的是 /bin、/usr/bin 是给系统用户使用的指令（除 root 外的通用用户），而/sbin, /usr/sbin 则是给 root 使用的指令。</p><p><strong>/var</strong><br> 这是一个非常重要的目录，系统上跑了很多程序，那么每个程序都会有相应的日志产生，而这些日志就被记录到这个目录下，具体在 /var/log 目录下，另外 mail 的预设放置也是在这里。</p></div><p><img src="'+c+`" alt="img"></p><h3 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> /bin</h3><blockquote><p>Binaries (二进制文件) 的缩写，这个目录存放着最经常使用的命令</p></blockquote><h3 id="boot" tabindex="-1"><a class="header-anchor" href="#boot" aria-hidden="true">#</a> /boot</h3><blockquote><p>存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件</p></blockquote><h3 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> /dev</h3><blockquote><p>Device(设备) 的缩写，该目录下存放的是 Linux 的外部设备，在 Linux 中访问设备的方式和访问文件的方式是相同的</p></blockquote><h3 id="etc" tabindex="-1"><a class="header-anchor" href="#etc" aria-hidden="true">#</a> /etc</h3><blockquote><p>Etcetera(等等) 的缩写，这个目录用来存放所有的系统管理所需要的配置文件和子目录</p></blockquote><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> /home</h3><blockquote><p>用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve</p></blockquote><h3 id="lib" tabindex="-1"><a class="header-anchor" href="#lib" aria-hidden="true">#</a> /lib</h3><blockquote><p>Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库</p></blockquote><h3 id="lost-found" tabindex="-1"><a class="header-anchor" href="#lost-found" aria-hidden="true">#</a> /lost+found</h3><blockquote><p>这个目录一般情况下是空的，当系统非法关机后，这里就存放了一些文件</p></blockquote><h3 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> /media</h3><blockquote><p>Linux 系统会自动识别一些设备，例如U盘、光驱等等，当识别后，Linux 会把识别的设备挂载到这个目录下</p></blockquote><h3 id="mnt" tabindex="-1"><a class="header-anchor" href="#mnt" aria-hidden="true">#</a> /mnt</h3><blockquote><p>系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在 /mnt/ 上，然后进入该目录就可以查看光驱里的内容了</p></blockquote><h3 id="opt" tabindex="-1"><a class="header-anchor" href="#opt" aria-hidden="true">#</a> /opt</h3><blockquote><p>optional(可选) 的缩写，这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。</p></blockquote><h3 id="proc" tabindex="-1"><a class="header-anchor" href="#proc" aria-hidden="true">#</a> /proc</h3><blockquote><p>Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token number">1</span> <span class="token comment">### /proc/sys/net/ipv4/icmp_echo_ignore_all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><h3 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> /root</h3><blockquote><p>该目录为系统管理员，也称作超级权限者的用户主目录</p></blockquote><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> /run</h3><blockquote><p>是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run</p></blockquote><h3 id="sbin" tabindex="-1"><a class="header-anchor" href="#sbin" aria-hidden="true">#</a> /sbin</h3><blockquote><p>s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序</p></blockquote><h3 id="swlinux" tabindex="-1"><a class="header-anchor" href="#swlinux" aria-hidden="true">#</a> /swlinux</h3><blockquote><p>这个目录是 Redhat/CentOS 所特有的目录，Selinux 是一个安全机制，类似于 windows 的防火墙，但是这套机制比较复杂，这个目录就是存放selinux相关的文件的</p></blockquote><h3 id="srv" tabindex="-1"><a class="header-anchor" href="#srv" aria-hidden="true">#</a> /srv</h3><blockquote><p>该目录存放一些服务启动之后需要提取的数据</p></blockquote><h3 id="sys" tabindex="-1"><a class="header-anchor" href="#sys" aria-hidden="true">#</a> /sys</h3><blockquote><p>这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。<br> sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。<br> 该文件系统是内核设备树的一个直观反映。<br> 当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。</p></blockquote><h3 id="tmp" tabindex="-1"><a class="header-anchor" href="#tmp" aria-hidden="true">#</a> /tmp</h3><blockquote><p>temporary(临时) 的缩写这个目录是用来存放一些临时文件的</p></blockquote><h3 id="usr" tabindex="-1"><a class="header-anchor" href="#usr" aria-hidden="true">#</a> /usr</h3><blockquote><p>unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录</p></blockquote><ul><li>/usr/bin： <ul><li>系统用户使用的应用程序。</li></ul></li><li>/usr/sbin： <ul><li>超级用户使用的比较高级的管理程序和系统守护程序。</li></ul></li><li>/usr/src： <ul><li>内核源代码默认的放置目录。</li></ul></li></ul><h3 id="var" tabindex="-1"><a class="header-anchor" href="#var" aria-hidden="true">#</a> /var</h3><blockquote><p>variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件</p></blockquote>`,43);function x(k,m){const r=i("ExternalLinkIcon");return n(),t("div",null,[l,u,e("blockquote",null,[e("p",null,[a("摘录自 "),e("a",b,[a("菜鸟教程"),s(r)])])]),p])}const f=o(h,[["render",x],["__file","FileSystem.html.vue"]]);export{f as default};