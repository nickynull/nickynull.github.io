import{_ as k,e as u,h as w,o as x,c as y,a as e,f as a,v as s,g as p,d as C}from"./app-jvjj9HG0.js";const g=e("h1",{id:"二维码生成",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二维码生成","aria-hidden":"true"},"#"),C(" 二维码生成")],-1),V={class:"line-block"},Q=e("div",null,"纠错等级",-1),U=e("label",{for:"1"},"低",-1),N=e("label",{for:"0"},"中",-1),q=e("label",{for:"2"},"高",-1),B=e("label",{for:"3"},"极高",-1),R={class:"line-block"},E=e("label",null,"尺寸",-1),I={class:"line-block"},L=e("div",{class:"line-huge",style:{display:"flex",border:"1px solid #000"}},[e("div",{id:"qrcode-gen-show",style:{margin:"auto"}})],-1),_="qrcode-gen-show",M={__name:"QrCode.html",setup(D){const o=u(0),i=u(0),d=u(""),v=u(null);w(()=>{f()});function r(){v.value.select()}function m(){d.value="",c(),r()}function f(){o.value=0,i.value=200,d.value="",c(),r()}function h(n){var l={text:n,width:Number(i.value),height:Number(i.value),colorDark:"#000000",colorLight:"#ffffff",correctLevel:Number(o.value)};c(),new QRCode(_,l)}function c(){const n=document.getElementById(_);for(;n.firstChild;)n.removeChild(n.firstChild)}function b(){const n=d.value;if(n==""){window.$alert("输入不可为空"),r();return}h(n),window.$alert("运行完毕")}return(n,l)=>(x(),y("div",null,[g,e("div",{class:"line-block"},[e("button",{onClick:b},"生成"),e("button",{onClick:m},"清空"),e("button",{onClick:f},"重置")]),e("div",V,[Q,e("div",null,[a(e("input",{type:"radio","onUpdate:modelValue":l[0]||(l[0]=t=>o.value=t),value:"1",id:"1"},null,512),[[s,o.value]]),U]),e("div",null,[a(e("input",{type:"radio","onUpdate:modelValue":l[1]||(l[1]=t=>o.value=t),value:"0",id:"0"},null,512),[[s,o.value]]),N]),e("div",null,[a(e("input",{type:"radio","onUpdate:modelValue":l[2]||(l[2]=t=>o.value=t),value:"2",id:"2"},null,512),[[s,o.value]]),q]),e("div",null,[a(e("input",{type:"radio","onUpdate:modelValue":l[3]||(l[3]=t=>o.value=t),value:"3",id:"3"},null,512),[[s,o.value]]),B])]),e("div",R,[e("div",null,[E,a(e("input",{type:"number","onUpdate:modelValue":l[4]||(l[4]=t=>i.value=t),min:"1"},null,512),[[p,i.value]])])]),e("div",I,[a(e("textarea",{ref_key:"inputRef",ref:v,"onUpdate:modelValue":l[5]||(l[5]=t=>d.value=t),class:"text line-huge",placeholder:"输入"},null,512),[[p,d.value]]),L])]))}},$=k(M,[["__file","QrCode.html.vue"]]);export{$ as default};
