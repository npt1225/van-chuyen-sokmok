/* SokMok – main.js */
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P={phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',dollar:'<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',arrow:'<path d="M5 12h14M12 5l7 7-7 7"/>',check:'<path d="M20 6 9 17l-5-5"/>',box:'<path d="M21 16V8l-9-5-9 5v8l9 5z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',truck:'<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'};
Object.assign(P,{img:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',down:'<path d="m6 9 6 6 6-6"/>',chat:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.4 8.4 0 1 1 21 11.5z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',up:'<path d="m18 15-6-6-6 6"/>',star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'});
const FL={"VN": "<svg viewBox=\"0 0 30 20\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"30\" height=\"20\" fill=\"#da251d\"/><polygon points=\"15.00,4.60 16.41,8.66 20.71,8.75 17.28,11.34 18.53,15.45 15.00,13.00 11.47,15.45 12.72,11.34 9.29,8.75 13.59,8.66\" fill=\"#ffde00\"/></svg>", "KH": "<svg viewBox=\"0 0 30 20\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"30\" height=\"20\" fill=\"#032ea1\"/><rect y=\"5\" width=\"30\" height=\"10\" fill=\"#e00025\"/><g fill=\"#fff\"><rect x=\"9\" y=\"12.4\" width=\"12\" height=\"1.6\"/><rect x=\"10.2\" y=\"10.4\" width=\"9.6\" height=\"2\"/><rect x=\"13.7\" y=\"7.2\" width=\"2.6\" height=\"3.2\"/><rect x=\"11\" y=\"8.6\" width=\"1.8\" height=\"1.9\"/><rect x=\"17.2\" y=\"8.6\" width=\"1.8\" height=\"1.9\"/><polygon points=\"15,5.2 16.3,7.3 13.7,7.3\"/></g></svg>", "LA": "<svg viewBox=\"0 0 30 20\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"30\" height=\"20\" fill=\"#ce1126\"/><rect y=\"5\" width=\"30\" height=\"10\" fill=\"#002868\"/><circle cx=\"15\" cy=\"10\" r=\"4\" fill=\"#fff\"/></svg>", "TH": "<svg viewBox=\"0 0 30 20\" preserveAspectRatio=\"xMidYMid slice\"><rect width=\"30\" height=\"20\" fill=\"#a51931\"/><rect y=\"3.33\" width=\"30\" height=\"13.34\" fill=\"#f4f5f8\"/><rect y=\"6.67\" width=\"30\" height=\"6.66\" fill=\"#2d2a4a\"/></svg>"};const fl=c=>FL[c]?'<i class="fi">'+FL[c]+'</i>':'';
const ic=n=>'<svg class="i" viewBox="0 0 24 24">'+P[n]+'</svg>';
$$('[data-ic]').forEach(e=>e.outerHTML=ic(e.dataset.ic));
$$('[data-fl]').forEach(e=>e.outerHTML=fl(e.dataset.fl));
$$('.cd b').forEach(b=>{const c=b.textContent.trim();if(FL[c]){b.className='fc';b.innerHTML=FL[c]}});
const G=[["g1", "Hàng bao kiện đã xếp lên xe"], ["g11", "Hàng thùng đóng pallet – bốc xếp bằng xe nâng"], ["g3", "Hàng thùng bọc màng co trên xe tải"], ["g8", "Hàng dễ vỡ dán băng keo cảnh báo"], ["g14", "Hàng thùng carton đóng pallet"], ["g5", "Hàng cuộn đóng pallet chằng buộc chắc chắn"], ["g4", "Hàng xốp bảo quản"], ["g15", "Pallet bọc màng, đóng khung gỗ"], ["g2", "Hàng IBC và pallet khối lượng lớn"], ["g6", "Kiện gỗ đóng đai chắc chắn"], ["g10", "Hàng bao trắng xếp trên pallet"], ["g16", "Hàng xốp xếp pallet tại kho"], ["g17", "Hàng pallet chuẩn bị xuất kho"], ["g12", "Hàng thùng dán tem rõ ràng"], ["g7", "Hàng thùng xếp pallet"], ["g9", "Hàng đóng kiện, xe nâng hỗ trợ"]];
const gs=k=>'assets/img/'+k+'.jpg';
// header + menu
const bg=$('#bg'),ov=$('#ov');
Object.assign(P,{news:'<path d="M4 4h13a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4z"/><path d="M19 8h1a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2"/><path d="M8 8h7M8 12h7M8 16h4"/>',home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>'});
const CUR=(location.pathname.split('/').pop()||'index.html').replace(/^$/,'index.html');
const RT={'viet-nam-campuchia.html':['VN','KH','Việt Nam','Campuchia','Hàng đi · Phnom Penh'],'campuchia-viet-nam.html':['KH','VN','Campuchia','Việt Nam','Hàng về · 2–3 ngày'],'viet-nam-lao.html':['VN','LA','Việt Nam','Lào','Đường bộ · Viêng Chăn'],'viet-nam-thai-lan.html':['VN','TH','Việt Nam','Thái Lan','Đường bộ · Bangkok']};
const MI={'index.html':'home','gioi-thieu.html':'info','tuyen-van-chuyen.html':'truck','hinh-anh.html':'img','quy-trinh.html':'list','lien-he.html':'mail','tin-tuc.html':'news'};
(function(){
  // dòng chào đầu menu
  const mh=document.createElement('div');mh.className='mh';mh.textContent='Đúng nơi · Đúng hẹn · Nhanh chóng';ov.insertBefore(mh,ov.firstChild);
  // dòng menu: icon + chữ + mũi tên, đánh dấu trang hiện tại
  ov.querySelectorAll('a.l').forEach(a=>{
    const h=a.getAttribute('href'),t=a.textContent.trim();
    a.innerHTML='<span class="ico">'+ic(MI[h]||'arrow')+'</span><span class="tx">'+t+'</span>'+(h==='tuyen-van-chuyen.html'?'<span class="badge">4</span>':'')+ic('arrow');
    if(h===CUR||(h==='tin-tuc.html'&&document.body.hasAttribute('data-news')))a.classList.add('on');
  });
  // thẻ tuyến: cờ to
  ov.querySelectorAll('.sub a').forEach(a=>{
    const r=RT[a.getAttribute('href')];if(!r)return;
    a.innerHTML='<span class="rf">'+fl(r[0])+ic('arrow')+fl(r[1])+'</span><span class="nm">'+r[2]+' → '+r[3]+'<small>'+r[4]+'</small></span>';
    if(a.getAttribute('href')===CUR)a.classList.add('on');
  });
  // thứ tự xuất hiện lần lượt
  let i=0;[...ov.children].forEach(el=>{if(!el.classList.contains('mh'))el.style.setProperty('--i',i++)});
  ov.querySelectorAll('.sub a').forEach((a,j)=>a.style.setProperty('--j',j));
})();
function tg(o){bg.classList.toggle('x',o);ov.classList.toggle('o',o);bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Đóng menu':'Mở menu');document.body.style.overflow=o?'hidden':'';if(o)ov.scrollTop=0}
bg.onclick=()=>tg(!ov.classList.contains('o'));ov.querySelectorAll('a').forEach(a=>a.onclick=()=>tg(false));
addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.classList.contains('o'))tg(false)});
addEventListener('resize',()=>{if(innerWidth>1040&&ov.classList.contains('o'))tg(false)});
addEventListener('scroll',()=>$('#hd').classList.toggle('scr',scrollY>30),{passive:true});
// reveal + counters
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});$$('.rv').forEach(e=>io.observe(e));
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);const el=x.target,n=+el.dataset.n,s=el.dataset.s||'',t0=performance.now();(function f(t){const k=Math.min((t-t0)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f);else el.classList.add('pop')})(t0)}),{threshold:.6});$$('[data-n]').forEach(e=>co.observe(e));
// lightbox
const lb=$('#lb');let li=0;
if(lb){const lt=$('#lt');lt.innerHTML=G.map((g,i)=>`<img src="${gs(g[0])}" alt="" data-k="${i}" loading="lazy">`).join('');
window.lo=function(i){li=(i+G.length)%G.length;lb.classList.add('o');$('#li').src=gs(G[li][0]);$('#lcap').textContent=G[li][1]+'  ·  '+(li+1)+'/'+G.length;[...lt.children].forEach((t,k)=>t.classList.toggle('on',k===li));lt.children[li].scrollIntoView({inline:'center',block:'nearest',behavior:'smooth'})};
lt.onclick=e=>{if(e.target.dataset.k!==undefined)lo(+e.target.dataset.k)};
$('#lc').onclick=()=>lb.classList.remove('o');$('#lp').onclick=()=>lo(li-1);$('#ln').onclick=()=>lo(li+1);lb.onclick=e=>{if(e.target===lb)lb.classList.remove('o')};
addEventListener('keydown',e=>{if(!lb.classList.contains('o'))return;if(e.key==='Escape')lb.classList.remove('o');if(e.key==='ArrowLeft')lo(li-1);if(e.key==='ArrowRight')lo(li+1)});
$$('.mq,.gal').forEach(g=>g.addEventListener('click',e=>{const t=e.target.closest('.gi');if(t)lo(+t.dataset.k)}));}
// hero (trang chủ)
const hl=$$('.pl'),hb=$$('.pt2'),PB=$('.pb');
if(hl.length){let hi=0,ht,hv=true;new IntersectionObserver(e=>{hv=e[0].isIntersecting}).observe($('#hero'));
function hgo(i,sc){hi=(i+hl.length)%hl.length;hl.forEach((e,k)=>e.classList.toggle('on',k===hi));hb.forEach((t,k)=>{t.classList.remove('on');if(k===hi){void t.offsetWidth;t.classList.add('on');if(sc!==0)PB.scrollTo({left:t.offsetLeft-(PB.clientWidth-t.offsetWidth)/2,behavior:'smooth'})}});clearInterval(ht);ht=setInterval(()=>{if(hv)hgo(hi+1)},6500)}
hb.forEach((t,i)=>t.onclick=()=>hgo(i));
let hx=null;const ps=$('.ps');ps.addEventListener('touchstart',e=>hx=e.touches[0].clientX,{passive:true});ps.addEventListener('touchend',e=>{if(hx===null)return;const d=e.changedTouches[0].clientX-hx;if(Math.abs(d)>45)hgo(hi+(d<0?1:-1));hx=null});hgo(0,0);}

// ===== v6: hiệu ứng doanh nghiệp =====
// thanh tiến trình cuộn + nút lên đầu trang + parallax banner
const sp=document.createElement('div');sp.className='sp';document.body.appendChild(sp);
const fab=$('.fab');let tp=null;if(fab){tp=document.createElement('a');tp.className='tp';tp.href='#top';tp.setAttribute('aria-label','Lên đầu trang');tp.innerHTML='<span class="ico">'+ic('up')+'</span>';fab.insertBefore(tp,fab.firstChild)}
const pgi=$('.pgimg');
let tick=false;function onS(){tick=false;const h=document.documentElement.scrollHeight-innerHeight;sp.style.transform='scaleX('+(h>0?Math.min(scrollY/h,1):0)+')';if(tp)tp.classList.toggle('s',scrollY>600);if(pgi&&scrollY<900)pgi.style.transform='translateY('+(scrollY*.18)+'px)';prUp()}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(onS)}},{passive:true});
// so le thời gian xuất hiện cho các thẻ trong lưới + trả hover về bình thường sau khi hiện
$$('.grid,.rcg,.s2g,.gal,.pr-st').forEach(g=>[...g.children].forEach((c,i)=>{if(c.classList.contains('rv')&&!c.style.transitionDelay)c.style.transitionDelay=(i%4)*.1+'s'}));
const rd=new MutationObserver(m=>m.forEach(x=>{const t=x.target;if(t.classList.contains('in')&&!t.classList.contains('rvd'))setTimeout(()=>t.classList.add('rvd'),1400)}));
$$('.rv').forEach(e=>rd.observe(e,{attributes:true,attributeFilter:['class']}));
// quy trình: đường tiến trình + bước đang chạy
const pr=$('#pr');
function prUp(){if(!pr)return;const r=pr.getBoundingClientRect(),y=innerHeight*.6;pr.style.setProperty('--p',Math.max(0,Math.min(1,(y-r.top-36)/(r.height-106))));$$('.pr-s').forEach(e=>{const n=e.querySelector('.pr-n').getBoundingClientRect();e.classList.toggle('on',n.top+n.height/2<y)});const d=$('.pr-done');if(d)d.classList.toggle('on',d.getBoundingClientRect().top<y)}
const prs=$('.pr-st');if(prs){new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){prs.classList.add('in');o.disconnect()}},{threshold:.35}).observe(prs)}
prUp();onS();

// ===== v8: ảnh banner tương tác + gợi ý chat =====
const pc=$('.pgc');
if(pc){const fg=[...pc.children].filter(e=>e.tagName=='FIGURE');let cur=-1,lock=0;
const top=i=>{cur=(i+fg.length)%fg.length;fg.forEach((f,k)=>f.classList.toggle('top',k===cur))};
fg.forEach((f,i)=>f.addEventListener('click',()=>{if(f.classList.contains('top')&&window.lo&&typeof G!=='undefined'){const n=f.querySelector('img').getAttribute('src').split('/').pop().replace('.jpg','');const k=G.findIndex(g=>g[0]===n);if(k>=0){lo(k);return}}top(i);lock=Date.now()+9000}));
const h=document.createElement('div');h.className='hint';h.textContent='Bấm vào ảnh để phóng to';pc.appendChild(h);
setInterval(()=>{if(Date.now()>lock&&!document.hidden)top(cur+1)},3800);setTimeout(()=>top(0),1800);
const pgs=$('.pg');if(pgs&&matchMedia('(hover:hover) and (min-width:1000px)').matches){pgs.addEventListener('mousemove',e=>{const r=pgs.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;fg.forEach((f,i)=>{const d=(i+1)*9;f.style.setProperty('--tx',(-x*d)+'px');f.style.setProperty('--ty',(-y*d)+'px')})});pgs.addEventListener('mouseleave',()=>fg.forEach(f=>{f.style.setProperty('--tx','0px');f.style.setProperty('--ty','0px')}))}}
if(fab){const tip=document.createElement('div');tip.className='tip';tip.innerHTML='Cần tư vấn nhanh?<b>Chat Zalo ngay →</b>';fab.appendChild(tip);let seen=0;try{seen=sessionStorage.getItem('tip')}catch(e){}
tip.onclick=()=>open('https://zalo.me/0981491456','_blank');
if(!seen){setTimeout(()=>{tip.classList.add('show');try{sessionStorage.setItem('tip','1')}catch(e){}},4000);setTimeout(()=>tip.classList.remove('show'),11000)}}


// ===== v9: cờ to ở banner tuyến + xe chở hàng cắm cờ =====
(function(){
  const flagEl=c=>fl(c);
  // 1) banner trang con: bọc từng cờ kèm tên nước (hiện trên mobile)
  const rt=RT[CUR];
  $$('.pflags').forEach(pf=>{
    if(!rt)return;
    [...pf.querySelectorAll(':scope>.fi')].forEach((f,k)=>{
      const w=document.createElement('span');w.className='pfw';pf.insertBefore(w,f);w.appendChild(f);
      const n=document.createElement('small');n.textContent=rt[2+k]||'';w.appendChild(n)});
  });
  // 2) xe trong banner: thay bằng xe có 2 cờ (cờ nước đi ở đuôi xe, cờ nước đến ở đầu xe)
  $$('.pg>svg.tk').forEach(old=>{
    const a=rt?rt[0]:'VN',b=rt?rt[1]:'KH';
    const w=document.createElement('div');w.className='ptr';
    w.innerHTML='<span class="pole b"></span><span class="flag b">'+flagEl(a)+'</span><span class="pole f"></span><span class="flag f">'+flagEl(b)+'</span><svg class="tkb" viewBox="0 0 130 54"><use href="#tr"/></svg>';
    old.replaceWith(w);
  });
  // 3) chân trang các trang con: 4 xe, mỗi xe cắm cờ 1 nước (giống trang chủ)
  $$('footer .frw').forEach(fw=>{
    if(fw.querySelector('.ftr'))return;
    const tk=fw.querySelector(':scope>svg.tk');if(tk)tk.remove();fw.classList.add('frx');
    ['VN','KH','LA','TH'].forEach((c,k)=>{
      const d=document.createElement('div');d.className='ftr';d.style.setProperty('--dl',(-k*5.5)+'s');
      d.innerHTML='<span class="fpole"></span><span class="fflag">'+flagEl(c)+'</span><svg class="ftk"><use href="#tr"/></svg>';
      fw.appendChild(d)});
  });
})();
