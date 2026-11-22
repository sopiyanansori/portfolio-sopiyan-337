const body=document.body, menuBtn=document.querySelector('#menuBtn'), nav=document.querySelector('#navMenu'), themeBtn=document.querySelector('#themeBtn');
document.querySelector('#year').textContent=new Date().getFullYear();
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'✕':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰'}));
themeBtn.addEventListener('click',()=>body.classList.toggle('dark'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.animate([{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'ease-out',fill:'both'})}),{threshold:.12});
document.querySelectorAll('section:not(.hero),.cards article').forEach(el=>observer.observe(el));

const navLinks=nav.querySelectorAll('a[href^="#"]');
const sections=document.querySelectorAll('section[id]');
const navObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>{a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id)});}});},{threshold:.3,rootMargin:'-76px 0px -40% 0px'});
sections.forEach(s=>navObserver.observe(s));
