import{_ as n,o as s,c as a,j as p}from"./app-ziSxbZKl.js";const t={},e=p(`<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h1><h2 id="javascript数学工具" tabindex="-1"><a class="header-anchor" href="#javascript数学工具" aria-hidden="true">#</a> JavaScript数学工具</h2><details class="custom-container details"><summary>JavaScript数学工具模块</summary><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 获取最大小数精度
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 数值数组
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">getMaxPrecision</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 计算最大精度</span>
    <span class="token keyword">let</span> maxPrecision <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> pArr <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pArr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> precision <span class="token operator">=</span> pArr<span class="token punctuation">[</span>pArr<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>precision <span class="token operator">&gt;</span> maxPrecision<span class="token punctuation">)</span> maxPrecision <span class="token operator">=</span> precision<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> maxPrecision<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 求和
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span> 数值数组
 */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    arr <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算最大精度</span>
    <span class="token keyword">let</span> maxPrecision <span class="token operator">=</span> <span class="token function">getMaxPrecision</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 整数求和</span>
    <span class="token keyword">let</span> pow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> maxPrecision<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">p</span> <span class="token operator">=&gt;</span> sum <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span>p <span class="token operator">*</span> pow<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sum <span class="token operator">=</span> sum <span class="token operator">/</span> pow<span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 数学工具
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    getMaxPrecision<span class="token punctuation">,</span>
    sum
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
