import{_ as D,f as h,o as E,c as N,a as t,g as i,v as k,h as g,d as B}from"./app-GIztZ0CU.js";const G=t("h1",{id:"对象生成器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#对象生成器","aria-hidden":"true"},"#"),B(" 对象生成器")],-1),C={class:"line-block"},L=t("span",null,"生成目标",-1),S=t("label",{for:"1"},"普通对象",-1),w=t("label",{for:"2"},"实体对象",-1),z=t("label",{for:"3"},"枚举对象",-1),A={class:"line-block"},M=t("span",{class:"line-label"},"对象类名",-1),I={class:"line-block"},q=t("span",{class:"line-label"},"对象描述",-1),F={class:"line-block"},H=t("div",{id:"copyTips",style:{display:"none"}},[t("div",{class:"custom-container tip"},[t("p",{class:"custom-container-title"},"提示"),t("p",null,"复制成功")])],-1),J={class:"line-block"},K={__name:"ObjectGenerator.html",setup(Q){const c=h("1"),v=h(""),y=h(""),o=h(""),b=h(""),f=h(""),r=h(""),P={1:T,2:x,3:j};function p(e,l){return e&&e.length>l?e[l]:""}function T(){if(!o.value)return;let e=[],l=o.value.split(`
`),s=b.value.split(`
`),_=f.value.split(`
`);e.push("/// <summary>"),e.push(`/// ${y.value}`),e.push("/// </summary>"),e.push("[Serializable]"),e.push(`public class ${v.value||"TempObject"}`),e.push("{");for(let n=0;n<l.length;n++){const m=p(l,n),u=p(s,n),a=p(_,n)||"string";m&&(e.push("	/// <summary>"),e.push(`	/// ${u}`),e.push("	/// </summary>"),e.push(`	public ${a} ${m} { get; set; }`),e.push(""))}return e.splice(e.length-1,1),e.push("}"),e.join(`
`)}function x(){if(!o.value)return;let e=[],l=o.value.split(`
`),s=b.value.split(`
`),_=f.value.split(`
`);const n=v.value||"TempObject",m=y.value;e.push("/// <summary>"),e.push(`/// ${m}`),e.push("/// </summary>"),e.push("[RootEntity, Serializable]"),e.push(`[Label("${m}")]`),e.push(`public class ${n} : DataEntity`),e.push("{");for(let u=0;u<l.length;u++){const a=p(l,u),d=p(s,u),$=p(_,u)||"string";e.push(`	#region ${d} ${$}`),e.push("	/// <summary>"),e.push(`	/// ${d}`),e.push("	/// </summary>"),e.push(`	[Label("${d}")]`),e.push(`	public static readonly Property<${$}> ${a}Property = P<${n}>.Register(e => e.${a});`),e.push("	/// <summary>"),e.push(`	/// ${d}`),e.push("	/// </summary>"),e.push(`	public ${$} ${a}`),e.push("	{"),e.push(`		get { return this.GetProperty(${a}Property); }`),e.push(`		set { this.SetProperty(${a}Property, value); }`),e.push("	}"),e.push("	#endregion"),e.push("")}return e.splice(e.length-1,1),e.push("}"),e.join(`
`)}function j(){if(!o.value)return;let e=[],l=o.value.split(`
`),s=b.value.split(`
`),_=f.value.split(`
`);const n=v.value||"TempEnum",m=y.value;e.push("/// <summary>"),e.push(`/// ${m}`),e.push("/// </summary>"),e.push(`public enum ${n}`),e.push("{");for(let u=0;u<l.length;u++){const a=p(l,u),d=p(s,u),$=p(_,u),U=$?` = ${$}`:"";e.push("	/// <summary>"),e.push(`	/// ${d}`),e.push("	/// </summary>"),e.push(`	[Label("${d}")]`),e.push(`	${a}${U},`),e.push("")}return e.splice(e.length-1,1),e.push("}"),e.join(`
`)}function V(){r.value=P[c.value](),r.value||(r.value="没有可输出的内容，请检查输入/正则表达式")}function O(){if(!r.value)return;navigator.clipboard.writeText(r.value);const e=document.getElementById("copyTips");e.style.display="inline",setTimeout(()=>{e.style.display="none"},2e3)}function R(){v.value="",y.value="",o.value="",b.value="",f.value="",r.value=""}return(e,l)=>(E(),N("div",null,[G,t("div",{class:"line-block"},[t("button",{onClick:V},"运行"),t("button",{onClick:O},"复制"),t("button",{onClick:R},"清空")]),t("div",C,[L,t("div",null,[i(t("input",{type:"radio","onUpdate:modelValue":l[0]||(l[0]=s=>c.value=s),value:"1",id:"1"},null,512),[[k,c.value]]),S]),t("div",null,[i(t("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=s=>c.value=s),value:"2",id:"2"},null,512),[[k,c.value]]),w]),t("div",null,[i(t("input",{type:"radio","onUpdate:modelValue":l[2]||(l[2]=s=>c.value=s),value:"3",id:"3"},null,512),[[k,c.value]]),z])]),t("div",A,[M,i(t("input",{class:"line-content","onUpdate:modelValue":l[3]||(l[3]=s=>v.value=s)},null,512),[[g,v.value]])]),t("div",I,[q,i(t("input",{class:"line-content","onUpdate:modelValue":l[4]||(l[4]=s=>y.value=s)},null,512),[[g,y.value]])]),t("div",F,[i(t("textarea",{"onUpdate:modelValue":l[5]||(l[5]=s=>o.value=s),class:"text line-huge",placeholder:"属性名，多个时换行"},null,512),[[g,o.value]]),i(t("textarea",{"onUpdate:modelValue":l[6]||(l[6]=s=>b.value=s),class:"text line-huge",placeholder:"属性描述，多个时换行"},null,512),[[g,b.value]]),i(t("textarea",{"onUpdate:modelValue":l[7]||(l[7]=s=>f.value=s),class:"text line-huge",placeholder:"属性类型[枚举值]，多个时换行，不输入时默认string[不赋值]"},null,512),[[g,f.value]])]),H,t("div",J,[i(t("textarea",{"onUpdate:modelValue":l[8]||(l[8]=s=>r.value=s),class:"text",placeholder:"输出",readonly:"",style:{height:"25vh"}},null,512),[[g,r.value]])])]))}},X=D(K,[["__file","ObjectGenerator.html.vue"]]);export{X as default};