"use strict";
document.documentElement.classList.add("js");
const toggle=document.getElementById("nav-toggle");
const mobile=document.getElementById("mobile-nav");
function closeMenu(){if(!toggle||!mobile)return;toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open menu");mobile.hidden=true;document.body.classList.remove("menu-open")}
if(toggle&&mobile){
toggle.addEventListener("click",()=>{const open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Open menu":"Close menu");mobile.hidden=open;document.body.classList.toggle("menu-open",!open)});
mobile.querySelectorAll("a").forEach(link=>link.addEventListener("click",closeMenu));
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&toggle.getAttribute("aria-expanded")==="true"){closeMenu();toggle.focus()}});
document.addEventListener("click",event=>{if(!mobile.hidden&&!event.target.closest(".site-header"))closeMenu()});
window.matchMedia("(min-width: 821px)").addEventListener("change",event=>{if(event.matches)closeMenu()});
}
const offers={
coffee:{index:"01 / 03",eyebrow:"YOUR DAILY RITUAL",title:"Coffee<br><em>& more.</em>",description:"From the first espresso to an afternoon latte, take your coffee at your own pace. Matcha and chai are on the menu, too.",photo:"./assets/nomad/coffee.webp",alt:"Illustrative stock photograph of coffee in ceramic cups, not Nomad's own products"},
food:{index:"02 / 03",eyebrow:"SOMETHING TO TUCK INTO",title:"A good<br><em>little bite.</em>",description:"A sandwich for lunch, or something savoury between stops. See what's available at the counter when you come in.",photo:"./assets/nomad/sandwich.webp",alt:"Illustrative stock photograph of toasted sandwiches, not Nomad's own products"},
sweet:{index:"03 / 03",eyebrow:"GO ON, TREAT YOURSELF",title:"One more<br><em>little treat.</em>",description:"Coffee is better with something sweet on the side. Ask what pastries and baked treats are available today.",photo:"./assets/nomad/pastry.webp",alt:"Illustrative stock photograph of croissants, not Nomad's own pastries"}
};
const tabButtons=[...document.querySelectorAll(".offer-tab")];const offerImage=document.getElementById("offer-image");const offerIndex=document.getElementById("offer-index");const offerEyebrow=document.getElementById("offer-eyebrow");const offerName=document.getElementById("offer-name");const offerDescription=document.getElementById("offer-description");
function changeOffer(key){const data=offers[key];if(!data)return;tabButtons.forEach(button=>{const active=button.dataset.offer===key;button.classList.toggle("is-active",active);button.setAttribute("aria-pressed",String(active))});offerIndex.textContent=data.index;offerEyebrow.textContent=data.eyebrow;offerName.innerHTML=data.title;offerDescription.textContent=data.description;offerImage.src=data.photo;offerImage.alt=data.alt}
tabButtons.forEach(button=>button.addEventListener("click",()=>changeOffer(button.dataset.offer)));
const reveals=[...document.querySelectorAll(".reveal")];
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:"0px 0px 45px 0px"});reveals.forEach(el=>observer.observe(el))}else reveals.forEach(el=>el.classList.add("is-visible"));
const meter=document.getElementById("reading-progress");let queued=false;function updateMeter(){const remaining=document.documentElement.scrollHeight-innerHeight;meter.style.width=(remaining>0?Math.max(0,Math.min(100,scrollY/remaining*100)):0)+"%";queued=false}if(meter){addEventListener("scroll",()=>{if(!queued){queued=true;requestAnimationFrame(updateMeter)}},{passive:true});addEventListener("resize",updateMeter);updateMeter()}
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());