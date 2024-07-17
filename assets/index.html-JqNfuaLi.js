import{_ as n,o as s,c as a,e as t}from"./app-yKfIKdw2.js";const p={},o=t(`<h1 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h1><h2 id="通用工具" tabindex="-1"><a class="header-anchor" href="#通用工具" aria-hidden="true">#</a> 通用工具</h2><h3 id="http工具" tabindex="-1"><a class="header-anchor" href="#http工具" aria-hidden="true">#</a> HTTP工具</h3><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token doc-comment comment">/// HTTP工具集</span>
<span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HttpUtil</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// HTTP工具集单例实例</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name">HttpUtil</span> Instant <span class="token operator">=&gt;</span> HttpUtilInstant<span class="token punctuation">.</span>Instant<span class="token punctuation">;</span>
    <span class="token keyword">class</span> <span class="token class-name">HttpUtilInstant</span> <span class="token punctuation">{</span> <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">HttpUtil</span> Instant <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">HttpUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 私有构造函数，不允许外部自行实例化</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">private</span> <span class="token function">HttpUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 发送Json内容请求</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求地址<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsonObj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>JSON对象<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>超时时间（秒）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">PostJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TJsonObj<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">,</span> <span class="token class-name">TJsonObj</span> jsonObj<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">PostJson</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> jsonObj<span class="token punctuation">,</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 发送Json内容请求</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求地址<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsonObj<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>JSON对象<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>encoding<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>编码格式<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>超时时间（秒）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span>响应字符串<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token generic-method"><span class="token function">PostJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>TJsonObj<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">,</span> <span class="token class-name">TJsonObj</span> jsonObj<span class="token punctuation">,</span> <span class="token class-name">Encoding</span> encoding<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> json <span class="token operator">=</span> JsonConvert<span class="token punctuation">.</span><span class="token function">SerializeObject</span><span class="token punctuation">(</span>jsonObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">PostJson</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> json<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// 发送Post请求</span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>请求URL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>json<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>JSON数据<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>timeout<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>超时时间（秒）<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token doc-comment comment">/// <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>returns</span><span class="token punctuation">&gt;</span></span>响应内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>returns</span><span class="token punctuation">&gt;</span></span></span>
    <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">PostJson</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> url<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span></span> json<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">int</span><span class="token punctuation">?</span></span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 默认超时 3 分钟</span>
        <span class="token class-name"><span class="token keyword">int</span></span> defaultTimeout <span class="token operator">=</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> request <span class="token operator">=</span> WebRequest<span class="token punctuation">.</span><span class="token function">CreateHttp</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span>Timeout <span class="token operator">=</span> <span class="token punctuation">(</span>timeout <span class="token operator">??</span> defaultTimeout<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span>Method <span class="token operator">=</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span>ContentType <span class="token operator">=</span> <span class="token string">&quot;application/json&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> jsonBytes <span class="token operator">=</span> Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetBytes</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
        request<span class="token punctuation">.</span>ContentLength <span class="token operator">=</span> jsonBytes<span class="token punctuation">.</span>Length<span class="token punctuation">;</span>

        <span class="token comment">// 请求写入流</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">Stream</span> requestStream <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">GetRequestStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            requestStream<span class="token punctuation">.</span><span class="token function">Write</span><span class="token punctuation">(</span>jsonBytes<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> jsonBytes<span class="token punctuation">.</span>Length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 发送请求并获取响应</span>
        <span class="token class-name"><span class="token keyword">string</span></span> responseStr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">HttpWebResponse</span> response <span class="token operator">=</span> <span class="token punctuation">(</span>HttpWebResponse<span class="token punctuation">)</span>request<span class="token punctuation">.</span><span class="token function">GetResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>StatusCode <span class="token operator">!=</span> HttpStatusCode<span class="token punctuation">.</span>OK<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Exception</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;网络请求失败。错误代码：{0}。错误描述：{1}&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>response<span class="token punctuation">.</span>StatusCode<span class="token punctuation">,</span> response<span class="token punctuation">.</span>StatusDescription<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">Stream</span> responseStream <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">GetResponseStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name">StreamReader</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StreamReader</span><span class="token punctuation">(</span>responseStream<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    responseStr <span class="token operator">=</span> reader<span class="token punctuation">.</span><span class="token function">ReadToEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> responseStr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","index.html.vue"]]);export{k as default};