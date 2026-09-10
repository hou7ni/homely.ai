const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth'})}}));
document.querySelectorAll('.faq-list details').forEach(d=>{const icon=d.querySelector('summary span');const sync=()=>{if(icon)icon.textContent=d.open?'−':'+'};d.addEventListener('toggle',sync);sync()});
const items=document.querySelectorAll('.reveal');
if(reduce){items.forEach(x=>x.classList.add('visible'))}else{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>o.observe(x))}
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');menu?.addEventListener('click',()=>links?.classList.toggle('open'));