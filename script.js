const PAL=[["#1a1a1a","#555"],["#2f27d8","#6a63ff"],["#333","#777"],["#111","#2f27d8"],["#444","#999"]];
function card(w,i){
  const d=document.createElement("div");d.className="card";
  const mk=()=>{const [a,b]=PAL[i%PAL.length];d.innerHTML=`<div class="ph" style="--c1:${a};--c2:${b}"><span>${w.category}</span><b>${String(i+1).padStart(2,"0")}</b></div>`};
  if(w.img){const im=new Image();im.alt=w.title;im.loading="lazy";im.onerror=mk;im.src=w.img;d.appendChild(im)}else mk();
  return d;
}
// hero strip (6点を2周ぶん並べてループ)
const track=document.getElementById("stripTrack");
const stripWorks=WORKS.slice(0,6);
[...stripWorks,...stripWorks].forEach((w,i)=>track.appendChild(card(w,i%6)));
// grid
const grid=document.getElementById("grid"),filters=document.getElementById("filters");
WORKS.forEach((w,i)=>{
  const a=document.createElement("article");a.className="item reveal";a.dataset.cat=w.category;
  a.appendChild(card(w,i));
  a.insertAdjacentHTML("beforeend",`<div class="t">${w.title}<span>${w.category} / ${w.year}</span></div>`);
  a.onclick=()=>openModal(w,i);grid.appendChild(a);
});
document.getElementById("count").textContent="("+WORKS.length+")";
["ALL",...new Set(WORKS.map(w=>w.category))].forEach((c,k)=>{
  const b=document.createElement("button");b.textContent=c;if(!k)b.className="on";
  b.onclick=()=>{filters.querySelectorAll("button").forEach(x=>x.classList.remove("on"));b.classList.add("on");
    grid.querySelectorAll(".item").forEach(it=>it.classList.toggle("hide",c!=="ALL"&&it.dataset.cat!==c))};
  filters.appendChild(b);
});
// modal
const modal=document.getElementById("modal"),inner=document.getElementById("modalInner");
function openModal(w,i){
  inner.innerHTML="";
  if(w.before){const bf=card({...w,img:w.before,category:"BEFORE"},i);inner.appendChild(bf)}
  inner.appendChild(card(w,i));
  inner.insertAdjacentHTML("beforeend",`<h3>${w.title}</h3><p>${w.category} / ${w.year}${w.desc?"<br>"+w.desc:""}</p>`);
  modal.hidden=false;document.body.style.overflow="hidden";
}
function closeModal(){modal.hidden=true;document.body.style.overflow=""}
document.getElementById("close").onclick=closeModal;
addEventListener("keydown",e=>e.key==="Escape"&&closeModal());
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
