/* ===== CONFIGURAÇÃO EDITÁVEL ===== */
const CFG={
  wa:'5515991748568',
  addr:'Av. Dr. Artur Bernardes, 1320 - Vila Gabriel, Sorocaba - SP, 18081-000', // ativa mapa e "Como chegar"
  heroImg:'img/hero.jpg',         // caminho/URL da foto do hero
  imgs:{about:'img/treino.jpg',ronaldo:'',leo:'',eduardo:'',moises:'',arthur:''}, // fotos das seções
  gallery:[           // {src:'', alt:''} — troque pelas fotos reais
    {src:'img/bolas.jpg',alt:'Quadra'},{src:'img/treino.jpg',alt:'Treinamento'},{src:'',alt:'Atletas'},{src:'',alt:'Equipe técnica'},{src:'',alt:'Momento de treino'},{src:'',alt:'Treinamento'}
  ],
  cats:[ // grade semanal informada pelo cliente (age = faixa etária, lv = nível, h = horários)
    {n:'Iniciantes',age:'6 a 10 anos',lv:'Iniciante',h:['Ter e Qui · 16h30 às 17h30'],d:'Primeiros passos no voleibol para as crianças.'},
    {n:'Intermediário',age:'11 a 14 anos',lv:'Intermediário',h:['Seg a Sex · 17h30 às 19h00'],d:'Evolução técnica e desenvolvimento dos fundamentos.'},
    {n:'Juvenil',age:'15 a 17 anos',lv:'Avançado',h:['Seg a Sex · 19h00 às 20h30'],d:'Treinamento avançado para atletas juvenis.'},
    {n:'Adulto Iniciante',age:'18+',lv:'Iniciante',h:['Ter e Qui · 20h30 às 22h00','Sáb · 09h00 às 10h30'],d:'Para adultos que estão começando no voleibol.'},
    {n:'Adulto Avançado',age:'18+',lv:'Avançado',h:['Seg, Qua e Sex · 20h30 às 22h00','Sáb · 10h30 às 11h45'],d:'Treinamento avançado para adultos.'}
  ],
  parceiros:[ // name, logo (caminho da imagem), site, insta (@usuario ou link), wa (só números com DDI), email, addr (endereço)
    {name:'N1 Sport',logo:'',site:'',insta:'',wa:'',email:'',addr:''},
    {name:'Parceiro 2',logo:'',site:'',insta:'',wa:'',email:'',addr:''},
    {name:'Parceiro 3',logo:'',site:'',insta:'',wa:'',email:'',addr:''},
    {name:'Parceiro 4',logo:'',site:'',insta:'',wa:'',email:'',addr:''},
    {name:'Parceiro 5',logo:'',site:'',insta:'',wa:'',email:'',addr:''},
    {name:'Parceiro 6',logo:'',site:'',insta:'',wa:'',email:'',addr:''}
  ],
  n1:{ // vitrine (sem preço e sem pedido)
    text:'[Texto sobre a N1 Sport — editar]',
    products:[ // n (nome), badge (qualidade), d (descrição), colors (cores), src (foto)
      {n:'Joelheira',badge:'Slide',d:'Qualidade básica.',colors:['Branca','Preta'],src:''},
      {n:'Joelheira',badge:'Flyer',d:'Qualidade intermediária.',colors:['Branca','Preta'],src:''},
      {n:'Joelheira',badge:'Spry',d:'Usada pela Seleção Brasileira.',colors:['Branca','Preta'],src:''},
      {n:'Manguito',badge:'Slide',d:'Qualidade básica.',colors:['Branca','Preta'],src:''},
      {n:'Manguito',badge:'Flyer',d:'Qualidade intermediária.',colors:['Branca','Preta'],src:''},
      {n:'Manguito',badge:'Spry',d:'Usado pela Seleção Brasileira.',colors:['Branca','Preta'],src:''},
      {n:'Meia',badge:'',d:'',colors:['Branca','Preta'],src:''},
      {n:'Meia',badge:'',d:'',colors:['Branca','Preta'],src:''},
      {n:'Meia',badge:'',d:'',colors:['Branca','Preta'],src:''}
    ]
  },
  msg:{
    exp:'Olá! Gostaria de agendar uma aula experimental na AVAP.',
    int:'Olá! Gostaria de saber mais sobre o programa de intercâmbio Brasil/USA da AVAP.',
    gen:'Olá! Gostaria de mais informações sobre a AVAP.'
  }
};
const wa=m=>'https://wa.me/'+CFG.wa+'?text='+encodeURIComponent(m);
document.querySelectorAll('[data-wa]').forEach(a=>a.href=wa(CFG.msg[a.dataset.wa]));
const $=s=>document.querySelector(s);
function img(el,src,alt){if(src){const i=new Image();i.src=src;i.alt=alt||'';i.loading='lazy';el.prepend(i);const s=el.querySelector('span');if(s)s.remove()}}
if(CFG.heroImg)$('#heroBg').style.backgroundImage='url("'+CFG.heroImg+'")';
document.querySelectorAll('[data-img]').forEach(e=>img(e,CFG.imgs[e.dataset.img],e.textContent));
/* categorias */
$('#cats').innerHTML=CFG.cats.map(c=>`<div class="card"><h3>${c.n}</h3><dl><dt>Faixa etária: </dt><dd>${c.age}</dd><br><dt>Nível: </dt><dd>${c.lv}</dd><br><dt>Horários:</dt><br>${c.h.map(x=>'<dd>'+x+'</dd>').join('<br>')}</dl><p>${c.d}</p><a class="btn b3" target="_blank" rel="noopener" href="${wa('Olá! Tenho interesse no treinamento da categoria '+c.n+' na AVAP.')}">Quero treinar</a></div>`).join('');
/* galeria + lightbox */
const gal=$('#gal'),lb=$('#lb'),lbph=$('#lbph');
CFG.gallery.forEach(g=>{const b=document.createElement('button');b.setAttribute('aria-label','Ampliar: '+g.alt);b.innerHTML='<div class="ph"><span>'+g.alt+'</span></div>';img(b.firstChild,g.src,g.alt);b.onclick=()=>{lbph.innerHTML='<span>'+g.alt+'</span>';img(lbph,g.src,g.alt);lb.classList.add('o')};gal.append(b)});
lb.onclick=e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.classList.remove('o')};
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('o')});
/* mapa */
if(CFG.addr){const q=encodeURIComponent(CFG.addr);$('#addrTxt').textContent=CFG.addr;$('#addrTxt').classList.remove('ed');$('#route').href='https://www.google.com/maps/dir/?api=1&destination='+q;const m=$('#map'),rt=$('#route').href;const fb=()=>{m.innerHTML='<div style="position:relative;z-index:1;text-align:center;padding:20px"><div style="font-size:2.4rem">📍</div><p style="font-weight:600;margin:8px 0 16px">'+CFG.addr+'</p><a class="btn b1" target="_blank" rel="noopener" href="'+rt+'">Abrir no Google Maps</a></div>'};document.addEventListener('securitypolicyviolation',e=>{if(/frame/.test(e.violatedDirective))fb()});m.innerHTML='<iframe loading="lazy" title="Mapa" src="https://www.google.com/maps?q='+q+'&output=embed"></iframe>'}
else $('#route').href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Sorocaba SP');
/* header + menu */
const hd=$('#hd'),nav=$('#nav'),hb=$('#hb');
const sc=()=>hd.classList.toggle('s',scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
hb.onclick=()=>{const o=nav.classList.toggle('o');hb.setAttribute('aria-expanded',o);hb.textContent=o?'✕':'☰'};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>{nav.classList.remove('o');hb.textContent='☰';hb.setAttribute('aria-expanded',false)});
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));

/* parceiros */
const sm=$('#sm'),smn=$('#smn'),sml=$('#sml');
CFG.parceiros.forEach(s=>{const b=document.createElement('button');b.setAttribute('aria-label',s.name);b.innerHTML='<span>'+s.name+'</span>';img(b,s.logo,s.name);
 b.onclick=()=>{smn.textContent=s.name;const L=[];
  if(s.addr)L.push(['📍 Localização','https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(s.addr)]);
  if(s.site)L.push(['🌐 Site',/^https?:/.test(s.site)?s.site:'https://'+s.site]);
  if(s.insta)L.push(['📸 Instagram',/^https?:/.test(s.insta)?s.insta:'https://www.instagram.com/'+s.insta.replace('@','')]);
  if(s.wa)L.push(['📱 WhatsApp','https://wa.me/'+s.wa]);
  if(s.email)L.push(['✉️ E-mail','mailto:'+s.email]);
  sml.innerHTML=L.length?L.map(l=>'<a class="btn b3" target="_blank" rel="noopener" href="'+l[1]+'">'+l[0]+'</a>').join(''):'<p class="ed">[Contatos do parceiro — editar]</p>';
  sm.classList.add('o')};
 $('#sp').append(b)});
sm.onclick=e=>{if(e.target===sm||e.target.tagName==='BUTTON')sm.classList.remove('o')};
addEventListener('keydown',e=>{if(e.key==='Escape')sm.classList.remove('o')});
/* N1 Sport: vitrine em loop infinito */
const n1=CFG.n1,P=n1.products,N=P.length,car=$('#car'),dots=$('#dots');
$('#n1txt').textContent=n1.text;if(/\[/.test(n1.text))$('#n1txt').classList.add('ed');
const col=c=>({branca:'#fff',preta:'#111'})[c.toLowerCase()]||'#9aa9a0';
const card=p=>`<article class="pc"><span class="bd"${p.badge?'':' hidden'}>${p.badge||''}</span><div class="ph"><span>${p.n}</span></div><h3>${p.n}</h3><p class="${p.d?'':'ed'}">${p.d||'[Descrição — editar]'}</p><div class="cl"><small>Cores disponíveis</small>${p.colors.map(c=>'<span class="cc"><i style="background:'+col(c)+'"></i>'+c+'</span>').join('')}</div></article>`;
car.innerHTML=[0,1,2].map(()=>P.map(card).join('')).join('');
dots.innerHTML=P.map(()=>'<i></i>').join('');
const cs=[...car.children],ds=[...dots.children];
cs.forEach((c,i)=>img(c.querySelector('.ph'),P[i%N].src,P[i%N].n));
const setW=()=>cs[N].offsetLeft-cs[0].offsetLeft;
const ctr=i=>cs[i].offsetLeft+cs[i].offsetWidth/2-car.clientWidth/2;
const cur=()=>{let b=0,m=1e9;const mid=car.scrollLeft+car.clientWidth/2;cs.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-mid);if(d<m){m=d;b=i}});return b};
const upd=()=>{const b=cur();cs.forEach((c,i)=>c.classList.toggle('on',i===b));ds.forEach((d,i)=>d.classList.toggle('on',i===b%N))};
const jump=d=>{car.style.scrollSnapType='none';car.scrollLeft+=d;requestAnimationFrame(()=>{car.style.scrollSnapType='';upd()})};
let raf,tm;car.addEventListener('scroll',()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(upd);clearTimeout(tm);tm=setTimeout(()=>{const b=cur();if(b<N)jump(setW());else if(b>=2*N)jump(-setW())},140)},{passive:true});
ds.forEach((d,i)=>d.onclick=()=>car.scrollTo({left:ctr(N+i),behavior:'smooth'}));
const stp=()=>cs[0].offsetWidth+20;
$('.pv').onclick=()=>car.scrollBy({left:-stp(),behavior:'smooth'});$('.nx').onclick=()=>car.scrollBy({left:stp(),behavior:'smooth'});
addEventListener('load',()=>{car.scrollLeft=ctr(N+Math.floor(N/2));upd()});
