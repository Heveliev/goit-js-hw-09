const t=document.body,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let r=null;d.toggleAttribute("disabled"),e.addEventListener("click",(function(){e.toggleAttribute("disabled"),d.removeAttribute("disabled"),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(()=>{e.removeAttribute("disabled"),d.toggleAttribute("disabled"),clearInterval(r)}));
//# sourceMappingURL=01-color-switcher.bb01ada5.js.map
