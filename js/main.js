"use strict";
document.documentElement.classList.add("js");
const menuButton=document.querySelector(".menu-toggle");
const mobileMenu=document.getElementById("mobile-menu");
function closeMenu(){if(!menuButton||!mobileMenu)return;menuButton.setAttribute("aria-expanded","false");menuButton.setAttribute("aria-label","Open navigation");mobileMenu.hidden=true;document.body.classList.remove("nav-open")}
if(menuButton&&mobileMenu){
 menuButton.addEventListener("click",function(){const isOpen=menuButton.getAttribute("aria-expanded")==="true";menuButton.setAttribute("aria-expanded",String(!isOpen));menuButton.setAttribute("aria-label",isOpen?"Open navigation":"Close navigation");mobileMenu.hidden=isOpen;document.body.classList.toggle("nav-open",!isOpen)});
 mobileMenu.querySelectorAll("a").forEach(function(link){link.addEventListener("click",closeMenu)});
 document.addEventListener("keydown",function(event){if(event.key==="Escape"&&menuButton.getAttribute("aria-expanded")==="true"){closeMenu();menuButton.focus()}});
 document.addEventListener("click",function(event){if(!mobileMenu.hidden&&!event.target.closest(".site-header"))closeMenu()});
 window.matchMedia("(min-width: 821px)").addEventListener("change",function(event){if(event.matches)closeMenu()});
}
const filterButtons=Array.from(document.querySelectorAll(".filter"));
const foodCards=Array.from(document.querySelectorAll(".food-card"));
filterButtons.forEach(function(button){button.addEventListener("click",function(){const category=button.dataset.filter;filterButtons.forEach(function(item){const selected=item===button;item.classList.toggle("active",selected);item.setAttribute("aria-pressed",String(selected))});foodCards.forEach(function(card){card.hidden=category!=="all"&&card.dataset.category!==category})})});
const revealItems=Array.from(document.querySelectorAll(".reveal"));
if("IntersectionObserver" in window&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
 const observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:"0px 0px 40px 0px"});
 revealItems.forEach(function(item){observer.observe(item)});
}else{revealItems.forEach(function(item){item.classList.add("is-visible")})}
const progress=document.getElementById("scroll-progress");
let scrollScheduled=false;
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?Math.min(100,Math.max(0,window.scrollY/max*100)):0)+"%";scrollScheduled=false}
if(progress){window.addEventListener("scroll",function(){if(!scrollScheduled){scrollScheduled=true;requestAnimationFrame(updateProgress)}},{passive:true});window.addEventListener("resize",updateProgress);updateProgress()}
const year=document.getElementById("year");if(year)year.textContent=String(new Date().getFullYear());