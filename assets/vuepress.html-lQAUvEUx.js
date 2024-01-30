import{_ as c,r,o as u,c as v,a as e,d as s,b as l,w as n,e as t}from"./app-5Jqkf19D.js";const m="/webs/vuepress-logo.png",h={},b=e("h1",{id:"vuepress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" VuePress")],-1),p=e("div",{class:"md-logo"},[e("img",{src:m,alt:"img"})],-1),_=e("blockquote",null,[e("p",null,[e("strong",null,"VuePress"),s(" 是 Vue 驱动的静态网站生成器")])],-1),g={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),w={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/zh/",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"vuepress-实例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepress-实例","aria-hidden":"true"},"#"),s(" VuePress 实例")],-1),x={class:"custom-container tip"},V=e("p",{class:"custom-container-title"},"资源下载：",-1),P=e("a",{href:"/webs/vuepressTemplate.zip"},"VuePress 实例模板",-1),A=e("br",null,null,-1),N={href:"https://gitee.com/leo-none/leo-none/raw/master/webs/vuepressTemplate.zip",target:"_blank",rel:"noopener noreferrer"},q=t(`<h3 id="使用-vuepress-实例" tabindex="-1"><a class="header-anchor" href="#使用-vuepress-实例" aria-hidden="true">#</a> 使用 VuePress 实例</h3><blockquote><p>命令</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>     <span class="token comment"># 安装</span>
<span class="token function">npm</span> run dev     <span class="token comment"># 运行</span>
<span class="token function">npm</span> run build   <span class="token comment"># 打包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>使用建议： VSCode + Nodejs</p></blockquote><h3 id="关于-vuepress-实例" tabindex="-1"><a class="header-anchor" href="#关于-vuepress-实例" aria-hidden="true">#</a> 关于 VuePress 实例</h3><ul><li>已经配置 VuePress 基础设置与样式</li><li>使用者只需关注内容创作 <ul><li>在 docs 下编写 markdown 文档</li><li>在 docs/.vuepress/config.js 中配置导航</li></ul></li></ul><div class="custom-container tip"><p class="custom-container-title">使用实例前，所需具备的基础知识</p><ul><li>VuePress：基础框架</li><li>Markdown：编写内容文档</li><li>Nodejs (npm)：运行平台/打包工具</li></ul></div><h2 id="常用代码" tabindex="-1"><a class="header-anchor" href="#常用代码" aria-hidden="true">#</a> 常用代码</h2><h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h3>`,9),C=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`::: tip 标题
内容
:::
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`::: warning 标题
内容
:::
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`::: danger 标题
内容
:::
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-markdown line-numbers-mode","data-ext":"md"},[e("pre",{class:"language-markdown"},[e("code",null,`::: details 标题
内容
:::
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),M=t(`<h3 id="选项卡-markdown-增强" tabindex="-1"><a class="header-anchor" href="#选项卡-markdown-增强" aria-hidden="true">#</a> 选项卡(Markdown 增强)</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: tabs

@tab 标题
内容

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码组-markdown-增强" tabindex="-1"><a class="header-anchor" href="#代码组-markdown-增强" aria-hidden="true">#</a> 代码组(Markdown 增强)</h3><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: code-tabs#shell

@tab 标题
代码

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function B(E,I){const d=r("ExternalLinkIcon"),o=r("CodeTabs");return u(),v("div",null,[b,p,_,e("p",null,[e("a",g,[s("VuePress 官网"),l(d)]),k,e("a",w,[s("VuePress Markdown 增强"),l(d)])]),f,e("div",x,[V,e("p",null,[P,A,e("a",N,[s("VuePress 实例模板（备）"),l(d)])])]),q,l(o,{id:"86",data:[{id:"提示"},{id:"警告"},{id:"危险"},{id:"明细（可折叠）"}],"tab-id":"shell"},{title0:n(({value:a,isActive:i})=>[s("提示")]),title1:n(({value:a,isActive:i})=>[s("警告")]),title2:n(({value:a,isActive:i})=>[s("危险")]),title3:n(({value:a,isActive:i})=>[s("明细（可折叠）")]),tab0:n(({value:a,isActive:i})=>[C]),tab1:n(({value:a,isActive:i})=>[T]),tab2:n(({value:a,isActive:i})=>[j]),tab3:n(({value:a,isActive:i})=>[z]),_:1}),M])}const S=c(h,[["render",B],["__file","vuepress.html.vue"]]);export{S as default};
