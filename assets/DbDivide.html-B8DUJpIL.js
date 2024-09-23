import{_ as n,r as a,o as d,c as s,a as i,d as e,b as r,j as c}from"./app-UxSGu7mi.js";const t={},u=i("h1",{id:"分库分表",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#分库分表","aria-hidden":"true"},"#"),e(" 分库分表")],-1),v={href:"https://zhuanlan.zhihu.com/p/137368446",target:"_blank",rel:"noopener noreferrer"},o=c(`<blockquote><p>用于解决单一数据库在处理大规模数据时的性能瓶颈问题<br><strong>分库</strong>：将一个大型数据库拆分成多个较小的数据库<br><strong>分表</strong>：将每个数据库的表进一步拆分成多个较小的表</p></blockquote><div class="custom-container tip"><p class="custom-container-title">后文前提</p><p>假设有表：T1、T2、T3<br> 假设表数据ID范围：1-300<br> 假设有数据库：DB1、DB2、DB3</p></div><h2 id="数据库瓶颈" tabindex="-1"><a class="header-anchor" href="#数据库瓶颈" aria-hidden="true">#</a> 数据库瓶颈</h2><h3 id="io瓶颈" tabindex="-1"><a class="header-anchor" href="#io瓶颈" aria-hidden="true">#</a> IO瓶颈</h3><ul><li>磁盘IO瓶颈 <ul><li>热点数据太多，数据库缓存放不下，每次查询时会产生大量的IO，降低查询速度 -&gt; <strong>分库和垂直分表</strong>。</li></ul></li><li>网络IO瓶颈 <ul><li>请求的数据太多，网络带宽不够 -&gt; <strong>分库</strong></li></ul></li></ul><h3 id="cpu瓶颈" tabindex="-1"><a class="header-anchor" href="#cpu瓶颈" aria-hidden="true">#</a> CPU瓶颈</h3><ul><li>SQL问题 <ul><li>如SQL中包含join，group by，order by，非索引字段条件查询等，增加CPU运算的操作 -&gt; <strong>SQL优化，建立合适的索引，在业务Service层进行业务计算</strong></li></ul></li><li>单表数据量太大 <ul><li>查询时扫描的行太多，SQL效率低，CPU率先出现瓶颈 -&gt; <strong>水平分表</strong></li></ul></li></ul><h2 id="分库" tabindex="-1"><a class="header-anchor" href="#分库" aria-hidden="true">#</a> 分库</h2><div class="custom-container tip"><p class="custom-container-title">分库</p><p>将一个大型数据库拆分成多个较小的数据库</p></div><h3 id="水平分库" tabindex="-1"><a class="header-anchor" href="#水平分库" aria-hidden="true">#</a> 水平分库</h3><ul><li>概念：以<mark>字段</mark>为依据，按照一定策略（hash、range等），将一个库中的<mark>数据拆分到多个库</mark>中。</li><li>结果： <ul><li>每个库的结构都一样；</li><li>每个库的数据都不一样，没有交集；</li><li>所有库的并集是全量数据；</li></ul></li><li>场景：系统绝对并发量上来了，分表难以根本上解决问题，并且还没有明显的业务归属来垂直分库。</li><li>分析：库多了，io和cpu的压力自然可以成倍缓解。</li><li>效果：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB1:
└─T1、T2、T3:
  └─id 1-100

DB2:
└─T1、T2、T3:
  └─id 101-200

DB3:
└─T1、T2、T3:
  └─id 201-300
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直分库" tabindex="-1"><a class="header-anchor" href="#垂直分库" aria-hidden="true">#</a> 垂直分库</h3><ul><li>概念：以<mark>表</mark>为依据，按照业务归属不同，将不同的<mark>表拆分到多个库</mark>中。</li><li>结果： <ul><li>每个库的结构都不一样；</li><li>每个库的数据也不一样，没有交集；</li><li>所有库的并集是全量数据；</li></ul></li><li>场景：系统绝对并发量上来了，并且可以抽象出单独的业务模块。</li><li>分析：到这一步，基本上就可以服务化了。例如，随着业务的发展一些公用的配置表、字典表等越来越多，这时可以将这些表拆到单独的库中，甚至可以服务化。再有，随着业务的发展孵化出了一套业务模式，这时可以将相关的表拆到单独的库中，甚至可以服务化。</li><li>效果：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DB1:
└─T1

DB2:
└─T2

DB3:
└─T3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分表" tabindex="-1"><a class="header-anchor" href="#分表" aria-hidden="true">#</a> 分表</h2><div class="custom-container tip"><p class="custom-container-title">分表</p><p>将每个数据库的表进一步拆分成多个较小的表</p></div><h3 id="水平分表" tabindex="-1"><a class="header-anchor" href="#水平分表" aria-hidden="true">#</a> 水平分表</h3><ul><li>概念：以<mark>字段</mark>为依据，按照一定策略（hash、range等），将一个表的<mark>数据拆分到多个表</mark>中。</li><li>结果： <ul><li>每个表的结构都一样；</li><li>每个表的数据都不一样，没有交集；</li><li>所有表的并集是全量数据；</li></ul></li><li>场景：系统绝对并发量并没有上来，只是单表的数据量太多，影响了SQL效率，加重了CPU负担，以至于成为瓶颈。</li><li>分析：表的数据量少了，单次SQL执行效率高，自然减轻了CPU的负担。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>T1_1、T2_1、T3_1:
  └─id 1-100

T1_2、T2_2、T3_2:
  └─id 101-200

T1_3、T2_3、T3_3:
  └─id 201-300
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="垂直分表" tabindex="-1"><a class="header-anchor" href="#垂直分表" aria-hidden="true">#</a> 垂直分表</h3><ul><li>概念：以<mark>字段</mark>为依据，按照字段的活跃性，将表中<mark>字段拆到不同的表</mark>（主表和扩展表）中。</li><li>结果： <ul><li>每个表的结构都不一样；</li><li>每个表的数据也不一样，一般来说，每个表的字段至少有一列交集，一般是主键，用于关联数据；</li><li>所有表的并集是全量数据；</li></ul></li><li>场景：系统绝对并发量并没有上来，表的记录并不多，但是字段多，并且热点数据和非热点数据在一起，单行数据所需的存储空间较大。以至于数据库缓存的数据行减少，查询时会去读磁盘数据产生大量的随机读IO，产生IO瓶颈。</li><li>分析：可以用列表页和详情页来帮助理解。垂直分表的拆分原则是将热点数据（可能会冗余经常一起查询的数据）放在一起作为主表，非热点数据放在一起作为扩展表。这样更多的热点数据就能被缓存下来，进而减少了随机读IO。拆了之后，要想获得全部数据就需要关联两个表来取数据。但记住，千万别用join，因为join不仅会增加CPU负担并且会讲两个表耦合在一起（必须在一个数据库实例上）。关联数据，应该在业务Service层做文章，分别获取主表和扩展表数据然后用关联字段关联得到全部数据。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>T1:
├ Id
├ Code
└ Name

T2（T1扩展表）:
├ T1_Id       // T1关联字段
├ Ext_Col001
├ ......
└ Ext_Col100

T3（T1扩展表）:
├ T1_Id       // T1关联字段
├ Ext_Col101
├ ......
└ Ext_Col200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function m(h,b){const l=a("ExternalLinkIcon");return d(),s("div",null,[u,i("blockquote",null,[i("p",null,[e("参考资料："),i("a",v,[e("知乎-MySQL：互联网公司常用分库分表方案汇总！"),r(l)])])]),o])}const g=n(t,[["render",m],["__file","DbDivide.html.vue"]]);export{g as default};
