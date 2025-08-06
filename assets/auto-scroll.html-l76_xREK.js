import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,o as p}from"./app-DlwGI9O7.js";const e="/assets/Sample-IE5q8DKn.gif",o={};function c(F,s){return p(),l("div",null,s[0]||(s[0]=[a('<h1 id="自动滚动组件" tabindex="-1"><a class="header-anchor" href="#自动滚动组件"><span>自动滚动组件</span></a></h1><blockquote><p>根据内容高度决定是否需要自动滚动的简单组件</p></blockquote><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><p><img src="'+e+`" alt="img"></p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;height: 100vh; background-color: white; overflow: hidden; padding: 2vw;&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;测试&lt;/</span><span style="color:#F92672;">h1</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;height: 10vh; overflow: hidden; background-color: lightgrey;&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">            &lt;</span><span style="color:#F92672;">AutoScroll</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">                &lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> v-for</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;item in 10&quot;</span><span style="color:#A6E22E;"> style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;background-color: orange; margin: 2vw;&quot;</span><span style="color:#F8F8F2;">&gt;{{ item }}&lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">            &lt;/</span><span style="color:#F92672;">AutoScroll</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        </span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> AutoScroll </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &#39;@/components/scrolls/AutoScroll.vue&#39;</span></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">        AutoScroll</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码"><span>代码</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;</span><span style="color:#F92672;">div</span><span style="color:#A6E22E;"> ref</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;autoScrollRef&quot;</span><span style="color:#A6E22E;"> class</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;auto-scroll&quot;</span><span style="color:#A6E22E;"> :style</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;scrollStyle&quot;</span></span>
<span class="line"><span style="color:#A6E22E;">        @mouseover</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;stopScroll()&quot;</span><span style="color:#A6E22E;"> @mouseout</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;_scroll()&quot;</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">        &lt;</span><span style="color:#F92672;">slot</span><span style="color:#F8F8F2;">&gt;&lt;/</span><span style="color:#F92672;">slot</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">    &lt;/</span><span style="color:#F92672;">div</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">template</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">    name: </span><span style="color:#E6DB74;">&quot;AutoScroll&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    props: {</span></span>
<span class="line"><span style="color:#88846F;">        // 滚动速度</span></span>
<span class="line"><span style="color:#F8F8F2;">        speed: {</span></span>
<span class="line"><span style="color:#F8F8F2;">            default: </span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#A6E22E;">    data</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">        return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">            xPos: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            yPos: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            delay: </span><span style="color:#AE81FF;">10</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            pause: </span><span style="color:#AE81FF;">false</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            pauseTimeoutId: </span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            animation: </span><span style="color:#AE81FF;">null</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">        };</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    components: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    computed: {</span></span>
<span class="line"><span style="color:#A6E22E;">        scrollStyle</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">            return</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F8F8F2;">                transform: </span><span style="color:#E6DB74;">\`translate(</span><span style="color:#F92672;">\${</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.xPos</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">px,</span><span style="color:#F92672;">\${</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.yPos</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">px)\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">                transition: </span><span style="color:#E6DB74;">\`all ease-in </span><span style="color:#F92672;">\${</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.delay</span><span style="color:#F92672;">}</span><span style="color:#E6DB74;">ms\`</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">            };</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    watch: {</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"><span style="color:#F8F8F2;">    methods: {</span></span>
<span class="line"><span style="color:#88846F;">        // 返回初始位置</span></span>
<span class="line"><span style="color:#A6E22E;">        backToInit</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            let</span><span style="color:#F8F8F2;"> autoScrollRef </span><span style="color:#F92672;">=</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.$refs.autoScrollRef;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            let</span><span style="color:#F8F8F2;"> parent </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> autoScrollRef </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> autoScrollRef.parentElement;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            let</span><span style="color:#F8F8F2;"> parentBound </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> parent.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">            let</span><span style="color:#F8F8F2;"> scrollBound </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> autoScrollRef.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">            // console.log(parentBound.height, scrollBound.height);</span></span>
<span class="line"><span style="color:#F92672;">            if</span><span style="color:#F8F8F2;"> (parentBound.height </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> scrollBound.height)</span></span>
<span class="line"><span style="color:#F8F8F2;">            {</span></span>
<span class="line"><span style="color:#FD971F;">                this</span><span style="color:#F8F8F2;">.yPos </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> parentBound.height </span><span style="color:#F92672;">-</span><span style="color:#AE81FF;"> 10</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">                // console.log(&#39;超范围&#39;, this.yPos);</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F92672;">            else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#FD971F;">                this</span><span style="color:#F8F8F2;">.yPos </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">                // console.log(&#39;不超范围&#39;, this.yPos);</span></span>
<span class="line"><span style="color:#F8F8F2;">            }</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">        // 开始滚动</span></span>
<span class="line"><span style="color:#A6E22E;">        startScroll</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">            this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">_scroll</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">        // 滚动</span></span>
<span class="line"><span style="color:#A6E22E;">        _scroll</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">            this</span><span style="color:#F8F8F2;">.animation </span><span style="color:#F92672;">=</span><span style="color:#A6E22E;"> requestAnimationFrame</span><span style="color:#F8F8F2;">(</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                function</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#F92672;">                    if</span><span style="color:#F8F8F2;"> (</span><span style="color:#F92672;">!</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.pause) {</span></span>
<span class="line"><span style="color:#FD971F;">                        this</span><span style="color:#F8F8F2;">.yPos </span><span style="color:#F92672;">-=</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.speed;</span></span>
<span class="line"><span style="color:#F8F8F2;">                    }</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                    let</span><span style="color:#F8F8F2;"> autoScrollRef </span><span style="color:#F92672;">=</span><span style="color:#FD971F;"> this</span><span style="color:#F8F8F2;">.$refs.autoScrollRef;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                    let</span><span style="color:#F8F8F2;"> parent </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> autoScrollRef </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> autoScrollRef.parentElement;</span></span>
<span class="line"><span style="color:#F92672;">                    if</span><span style="color:#F8F8F2;"> (parent) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                        let</span><span style="color:#F8F8F2;"> parentBound </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> parent.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">                        let</span><span style="color:#F8F8F2;"> scrollBound </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> autoScrollRef.</span><span style="color:#A6E22E;">getBoundingClientRect</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F92672;">                        if</span><span style="color:#F8F8F2;"> (parentBound.height </span><span style="color:#F92672;">&lt;</span><span style="color:#F8F8F2;"> scrollBound.height)</span></span>
<span class="line"><span style="color:#F8F8F2;">                        {</span></span>
<span class="line"><span style="color:#88846F;">                            // 需要滚动</span></span>
<span class="line"><span style="color:#F92672;">                            if</span><span style="color:#F8F8F2;"> (Math.</span><span style="color:#A6E22E;">abs</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.yPos) </span><span style="color:#F92672;">&gt;</span><span style="color:#F8F8F2;"> scrollBound.height)</span></span>
<span class="line"><span style="color:#F8F8F2;">                            {</span></span>
<span class="line"><span style="color:#FD971F;">                                this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">reset</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">                            }</span></span>
<span class="line"><span style="color:#F92672;">                            else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#FD971F;">                                this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">_scroll</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">                            }</span></span>
<span class="line"><span style="color:#F8F8F2;">                        }</span></span>
<span class="line"><span style="color:#F92672;">                        else</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#88846F;">                            // 不需要滚动</span></span>
<span class="line"><span style="color:#FD971F;">                            this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">reset</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">                        }</span></span>
<span class="line"><span style="color:#F8F8F2;">                    }</span></span>
<span class="line"><span style="color:#F8F8F2;">                }.</span><span style="color:#A6E22E;">bind</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">            );</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">        // 停止滚动</span></span>
<span class="line"><span style="color:#A6E22E;">        stopScroll</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#A6E22E;">            cancelAnimationFrame</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">this</span><span style="color:#F8F8F2;">.animation);</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">        // 重置</span></span>
<span class="line"><span style="color:#A6E22E;">        reset</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">            this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">stopScroll</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#FD971F;">            this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">backToInit</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#FD971F;">            this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">startScroll</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">        },</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">    // 销毁前</span></span>
<span class="line"><span style="color:#A6E22E;">    beforeDestroy</span><span style="color:#F8F8F2;">() {</span></span>
<span class="line"><span style="color:#FD971F;">        this</span><span style="color:#F8F8F2;">.</span><span style="color:#A6E22E;">stopScroll</span><span style="color:#F8F8F2;">();</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">};</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">script</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">&lt;</span><span style="color:#F92672;">style</span><span style="color:#A6E22E;"> lang</span><span style="color:#F8F8F2;">=</span><span style="color:#E6DB74;">&quot;less&quot;</span><span style="color:#A6E22E;"> scoped</span><span style="color:#F8F8F2;">&gt;</span></span>
<span class="line"><span style="color:#F8F8F2;">.auto-scroll {</span></span>
<span class="line"><span style="color:#F8F8F2;">    width: 100%;</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">&lt;/</span><span style="color:#F92672;">style</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const r=n(o,[["render",c]]),y=JSON.parse('{"path":"/webs/vue2/auto-scroll.html","title":"自动滚动组件","lang":"zh-CN","frontmatter":{},"git":{},"readingTime":{"minutes":0.32,"words":95},"filePathRelative":"webs/vue2/auto-scroll.md"}');export{r as comp,y as data};
