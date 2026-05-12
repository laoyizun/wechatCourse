const slides = Array.from(document.querySelectorAll('.slide'));
let current = 0;
const progress = document.querySelector('.progress');
function show(i){
  current = Math.max(0, Math.min(slides.length-1, i));
  slides.forEach((s,idx)=>s.classList.toggle('active', idx===current));
  document.querySelectorAll('.page-num').forEach((el,idx)=>{el.textContent = `${idx+1} / ${slides.length}`});
  if(progress) progress.style.width = `${((current+1)/slides.length)*100}%`;
  history.replaceState(null,'',`#${current+1}`);
}
function next(){show(current+1)}
function prev(){show(current-1)}
document.addEventListener('keydown',e=>{if(['ArrowRight','PageDown',' '].includes(e.key)) next(); if(['ArrowLeft','PageUp'].includes(e.key)) prev();});
document.addEventListener('click',e=>{if(e.target.matches('[data-next]')) next(); if(e.target.matches('[data-prev]')) prev();});
const hash = parseInt(location.hash.replace('#',''),10);
show(Number.isFinite(hash)&&hash>0?hash-1:0);
