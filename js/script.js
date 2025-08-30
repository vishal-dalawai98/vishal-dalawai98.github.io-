
// Smooth scroll for internal links
document.addEventListener('click', function(e){
  const a = e.target.closest('a');
  if(!a) return;
  const href = a.getAttribute('href') || '';
  if(href.startsWith('#')){
    e.preventDefault();
    const el = document.querySelector(href);
    if(el) el.scrollIntoView({behavior:'smooth'});
  }
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200) backToTop.style.display = 'block';
  else backToTop.style.display = 'none';
});
backToTop && backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// Animate skill bars when visible
function animateSkillBars(){
  document.querySelectorAll('.bar span').forEach(sp => {
    const w = sp.style.width || sp.getAttribute('data-width') || '80%';
    const rect = sp.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){
      sp.style.width = w;
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Lightbox for project images
const lb = document.getElementById('lightbox');
if(lb){
  document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', ()=>{
      lb.querySelector('img').src = img.getAttribute('data-full') || img.src;
      lb.style.display = 'flex';
      lb.setAttribute('aria-hidden','false');
    });
  });
  lb.addEventListener('click', ()=>{ lb.style.display = 'none'; lb.setAttribute('aria-hidden','true'); });
}
