(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();document.querySelectorAll("*").forEach(e=>e.clientWidth>document.body.clientWidth?console.log(e):null);const a=document.querySelector(".carousel");if(a){const e=a.querySelectorAll("img"),r=e.length;let c=0,t=1;e[c].classList.add("active"),setInterval(()=>{e[t].classList.add("active"),e[c].classList.remove("active"),c=t,t=(t+1)%r},5e3)}const f=new Date().getFullYear(),p=document.getElementById("footer"),m="© 2020 - "+f.toString()+" 有限会社まるよし工業 - ALL RIGHTS RESERVED";p.innerHTML=m;document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",e=>{const r=e.target;if(r.tagName.toLowerCase()!=="a"||!r.classList.contains("page-link"))return;e.preventDefault();const c=r.getAttribute("href"),t=new XMLHttpRequest;t.open("GET",c),t.onload=()=>{if(t.status===200){const i=new DOMParser().parseFromString(t.response,"text/html").querySelector("#content"),d=document.querySelector("#content");d.parentNode.replaceChild(i,d)}else console.log("ページの読み込みに失敗しました。")},t.send()})});const n=document.getElementById("global-nav");n.offsetTop;const g=document.querySelector("#navigation"),u=g.offsetTop;window.addEventListener("scroll",()=>{const e=window.innerWidth<768,r=window.innerHeight,t=window.scrollY+r;e?t>=u?(n.style.position="fixed",n.style.bottom="0",n.style.top="",n.style.display=t>=document.querySelector("#footer").offsetTop?"none":"block"):(n.style.position="fixed",n.style.bottom="",n.style.top="",n.style.display="none"):window.pageYOffset>=u?(n.style.position="fixed",n.style.top="0"):(n.style.position="static",n.style.top="")});const l=document.getElementById("imgChange");for(let e=0;e<l.length;e++)l[e].addEventListener("mouseover",()=>{l[e].src=l[e].getAttribute("data-hover")}),l[e].addEventListener("mouseout",()=>{l[e].src=l[e].getAttribute("src").replace(/(.*)\/[^\/]+$/,"$1/cow.svg")});