import{i as e,s as t}from"./vendor.40442c01.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var n=window.innerWidth,r=[["M0,50"],[n/(5/3)+",10"],[`L${n-n/3},50`],[`L${n},50`]],o=e([["M0,50"],[`L${n},50`]].join(" "),r.join(" ")),i=t("#svgcontainer").append("svg").attr("viewBox",`0 0 ${n} 100`).attr("stroke","white").attr("fill","none").attr("stroke-width","3").append("path").attr("d",o(0));const l=()=>{i.transition().duration(300).attr("d",o(1))},d=()=>{i.transition().duration(300).attr("d",o(0))},s=()=>{i.transition().duration(0).attr("d",o(1))},a=()=>{i.transition().duration(300).attr("d",o(0))};var c=document.getElementById("center").scrollHeight-document.querySelector(".buffer-page").clientHeight,m=document.getElementById("center").offsetHeight,u=0;(c/m).toFixed(0);var g=document.getElementsByClassName("aside"),f=document.getElementsByClassName("formula");document.getElementById("button-scroll").addEventListener("click",(function(){let e=document.getElementById("center").offsetHeight,t=document.querySelector(".buffer-page");t.getBoundingClientRect().y,t.getBoundingClientRect().height;let n=document.getElementById("pageNumberCounter").innerHTML,r=document.getElementById("pageNumberTotal").innerHTML;if(console.log(+n>=+r),!(+n>=+r)){document.getElementById("pageNumberCounter").innerHTML=+n+1,document.getElementById("center").scrollTop+=e,u++;for(let t=0;t<g.length;t++){g.item(t).style.transform=`translate(0,-${u*e}px)`}for(let t=0;t<f.length;t++){f.item(t).style.transform=`translate(0,-${u*e}px)`}}})),document.getElementById("button-start").addEventListener("click",(function(){document.getElementById("center").scrollTop=0;for(let e=0;e<g.length;e++){g.item(e).style.transform="translate(0,0px)"}for(let e=0;e<f.length;e++){f.item(e).style.transform="translate(0,0px)"}u=0,document.getElementById("pageNumberCounter").innerHTML=`${u+1}`})),document.getElementById("button-up").addEventListener("click",(function(){if(0!=u){document.getElementById("center").scrollTop-=m,u--;for(let e=0;e<g.length;e++){g.item(e).style.transform=`translate(0,-${u*m}px)`}for(let e=0;e<f.length;e++){f.item(e).style.transform=`translate(0,-${u*m}px)`}document.getElementById("pageNumberCounter").innerHTML=`${u+1}`}})),document.getElementById("svgcontainer").addEventListener("pointerenter",l),document.getElementById("svgcontainer").addEventListener("pointerleave",d),document.getElementById("topics").addEventListener("pointerenter",s),document.getElementById("topics").addEventListener("pointerleave",a),document.getElementById("settings").addEventListener("pointerenter",s),document.getElementById("settings").addEventListener("pointerleave",a);