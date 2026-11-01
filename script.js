(function(){
var d=document.documentElement;d.classList.remove('no-js');d.classList.add('js');
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var nav=document.querySelector('.nav');
function onScroll(){nav.classList.toggle('scrolled',window.scrollY>12)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var els=[].slice.call(document.querySelectorAll('.reveal'));
function count(el){var from=+el.dataset.count,to=+el.dataset.to;if(reduce){el.textContent=to;return}
  var t0=null,dur=1600;function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);
  el.textContent=Math.round(from+(to-from)*e);if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});document.querySelectorAll('[data-to]').forEach(function(e){e.textContent=e.dataset.to});}
else{
  var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(!en.isIntersecting)return;
    var el=en.target;el.classList.add('in');var n=el.querySelector('[data-to]');if(n&&!n.dataset.done){n.dataset.done=1;setTimeout(function(){count(n)},250)}
    io.unobserve(el)})},{rootMargin:'0px 0px -8% 0px',threshold:.12});
  els.forEach(function(e,i){var sib=e.parentElement.querySelectorAll(':scope > .reveal');var idx=[].indexOf.call(sib,e);
    if(idx>0)e.style.transitionDelay=Math.min(idx,5)*70+'ms';io.observe(e)});
}
var c=document.querySelector('.copy');
if(c){c.addEventListener('click',function(){var v=c.dataset.copy;
  function ok(){c.textContent='Copied';c.classList.add('done');setTimeout(function(){c.textContent='Copy email';c.classList.remove('done')},1800)}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(v).then(ok,function(){location.href='mailto:'+v})}else{location.href='mailto:'+v}})}
})();
