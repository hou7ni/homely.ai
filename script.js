const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth'})}}));
document.querySelectorAll('.faq-list details').forEach(d=>{const icon=d.querySelector('summary b');const sync=()=>{if(icon)icon.textContent=d.open?'−':'+'};d.addEventListener('toggle',sync);sync()});
const items=document.querySelectorAll('.reveal');
if(reduce){items.forEach(x=>x.classList.add('visible'))}else{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');o.unobserve(e.target)}}),{threshold:.12});items.forEach(x=>o.observe(x))}
const compareRange=document.querySelector('.compare-range');
const compareBefore=document.querySelector('.compare-before');
const compareHandle=document.querySelector('.compare-handle');
function updateCompare(value){if(compareBefore)compareBefore.style.width=value+'%';if(compareHandle)compareHandle.style.left=value+'%'}
if(compareRange){updateCompare(compareRange.value);compareRange.addEventListener('input',e=>updateCompare(e.target.value))}