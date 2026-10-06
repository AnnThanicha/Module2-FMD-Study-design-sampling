const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const fx=(x,d=2)=>isFinite(x)?(+x).toFixed(d):'–';
const num=id=>parseFloat($('#'+id).value);
const up=x=>Math.ceil(x-1e-9);
$('#menu').onclick=()=>$('#side').classList.toggle('open');
function quiz(id,items){const box=$('#'+id);let sc=0,ans=0;
 function render(){sc=0;ans=0;box.innerHTML=items.map((it,i)=>`<div class="q"><b>${it.q}</b>${it.o.map((o,j)=>`<button class="o" data-i="${i}" data-j="${j}">${o}</button>`).join('')}<div class="why" hidden></div></div>`).join('')+`<div><span class="score" aria-live="polite"></span> <button class="rs" type="button">↺ Reset quiz</button></div>`}
 render();
 box.addEventListener('click',e=>{if(e.target.closest('.rs')){render();return}const b=e.target.closest('.o');if(!b)return;const q=b.parentElement;if(q.dataset.d)return;q.dataset.d=1;const it=items[+b.dataset.i],j=+b.dataset.j;ans++;[...q.querySelectorAll('.o')].forEach((x,k)=>{if(k===it.a)x.classList.add('ok')});if(j===it.a)sc++;else b.classList.add('no');const w=q.querySelector('.why');w.hidden=false;w.textContent=(j===it.a?'Correct. ':'Not quite. ')+it.w;box.querySelector('.score').textContent=`Score: ${sc}/${ans} of ${items.length}`})}
