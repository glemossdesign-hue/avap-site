/* ===== CONFIGURAÇÃO EDITÁVEL ===== */
const CFG={
  wa:'5515991748568',
  rendimento:{ // time de rendimento
    texto:'O time de rendimento da AVAP é formado pelas categorias feminina e masculina sub 17 e participa de campeonatos.',
    times:[ // n (nome), cat (categoria), d (descrição), src (foto)
      {n:'Feminino',cat:'Sub 17',d:'[Descrição do time — editar]',src:'img/time-feminino.jpg'},
      {n:'Masculino',cat:'Sub 17',d:'[Descrição do time — editar]',src:'img/time-masculino.jpg'}
    ],
    campeonatos:[ // nome, info (ano, fase ou resultado)
      {nome:'Liga de Vôlei de Sorocaba e Região',info:''},
      {nome:'Taça Paraná',info:''}
    ]
  },
  noticias:{url:'https://docs.google.com/spreadsheets/d/e/2PACX-1vT7QLsKiJswrkQ5jBPo_H3iVzxV8fD_GzGQewAMIzxx33wNA20ve1HZNKeyKwfkgXk7F0T0PiFzJyAx/pub?gid=0&single=true&output=csv',inicial:3}, // url = link CSV da planilha publicada; inicial = quantas notícias aparecem antes do "Ver mais"
  email:'',           // e-mail da AVAP (ex.: contato@seudominio.com.br)
  addr:'Av. Dr. Artur Bernardes, 1320 - Vila Gabriel, Sorocaba - SP, 18081-000', // ativa mapa e "Como chegar"
  heroImg:'img/hero.jpg',         // caminho/URL da foto do hero
  imgs:{about:'img/treino.jpg',ronaldo:'img/royal.jpg',leo:'img/leonidio.jpg',eduardo:'img/eduardo.jpg',moises:'',arthur:''}, // fotos das seções
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
    {name:'N1 Sport',logo:'',site:'https://www.n1oficial.com.br/',insta:'',wa:'',email:'',addr:''},
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
function img(el,src,alt){if(src){const i=new Image();i.src=src;i.alt=alt||'';i.loading='lazy';el.prepend(i);el.classList.add('has');const s=el.querySelector('span');if(s)s.remove()}}
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
  if(L.length===1){const u=L[0][1];if(/^https?:/.test(u))window.open(u,'_blank','noopener');else location.href=u;return}
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
/* e-mail */
(()=>{const e=CFG.email,b=$('#mailBtn'),t=$('#mailTxt'),f=$('#mailFoot');
if(e){b.href='mailto:'+e+'?subject='+encodeURIComponent('Contato pelo site da AVAP');t.textContent=e;t.classList.remove('ed');f.href='mailto:'+e;f.textContent='E-mail '+e}
else{b.removeAttribute('target');b.setAttribute('aria-disabled','true');b.title='Defina o e-mail em CFG.email';b.onclick=ev=>ev.preventDefault();f.parentElement.hidden=true}})();
/* notícias (Google Sheets) */
(async()=>{const box=$('#nt'),more=$('#ntMore'),N=CFG.noticias,MES=['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
const msg=t=>{box.innerHTML='<p class="nt-msg">'+t+'</p>'};
const esc=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=h=>h.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
const csv=t=>{const o=[];let r=[],c='',q=false;for(let i=0;i<t.length;i++){const ch=t[i];if(q){if(ch=='"'){if(t[i+1]=='"'){c+='"';i++}else q=false}else c+=ch}else if(ch=='"')q=true;else if(ch==','){r.push(c);c=''}else if(ch=='\n'||ch=='\r'){if(ch=='\r'&&t[i+1]=='\n')i++;r.push(c);c='';o.push(r);r=[]}else c+=ch}if(c||r.length){r.push(c);o.push(r)}return o};
const pd=s=>{s=(s||'').trim();let m=s.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);if(m){let y=+m[3];if(y<100)y+=2000;return new Date(y,+m[2]-1,+m[1])}m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);return m?new Date(+m[1],+m[2]-1,+m[3]):null};
const clk='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',pin='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const dst=x=>{$('#dstT').textContent=x.t||'Novidade';
$('#dstM').innerHTML=(x.d?'<span class="dst-d"><b>'+String(x.d.getDate()).padStart(2,'0')+'</b>'+MES[x.d.getMonth()]+'</span>':'')+(x.h?'<span>'+clk+esc(x.h)+'</span>':'')+(x.l?'<span>'+pin+esc(x.l)+'</span>':'');
$('#dstD').innerHTML=esc(x.s).replace(/\n/g,'<br>');
if(x.foto)$('#dstBg').style.backgroundImage='url("'+(/^https?:/.test(x.foto)?encodeURI(x.foto):'img/'+encodeURI(x.foto.replace(/^.*\//,'')))+'")';
const b=$('#dstB');if(x.btn&&x.lnk){b.textContent=x.btn;b.href=x.lnk.toLowerCase()=='whatsapp'?wa('Olá! Gostaria de saber mais sobre: '+(x.t||'a novidade da AVAP')+'.'):(/^(https?:|mailto:|tel:)/.test(x.lnk)?x.lnk:'https://'+x.lnk);b.hidden=false}
$('#destaque').hidden=false};
if(!N.url){msg('Em breve, novidades da AVAP por aqui.');return}
try{const r=await fetch(N.url,{cache:'no-store'});if(!r.ok)throw 0;const rows=csv(await r.text()),hd=rows.shift().map(norm),ix=k=>hd.indexOf(k);
const L=rows.map(c=>({raw:(c[ix('data')]||'').trim(),d:pd(c[ix('data')]),h:(c[ix('hora')]||'').trim(),l:(c[ix('local')]||'').trim(),t:(c[ix('titulo')]||'').trim(),s:(c[ix('descricao')]||'').trim(),dest:(c[ix('destaque')]||'').trim(),ate:(c[ix('ate')]||'').trim(),foto:(c[ix('foto')]||'').trim(),btn:(c[ix('botao')]||'').trim(),lnk:(c[ix('link')]||'').trim()})).filter(x=>x.t||x.s);
L.sort((a,b)=>(b.d?+b.d:-1)-(a.d?+a.d:-1)||b.h.localeCompare(a.h));
const hoje=new Date();hoje.setHours(0,0,0,0);const F=L.find(x=>/^(sim|s|x|1)$/i.test(norm(x.dest))&&(!x.ate||!pd(x.ate)||pd(x.ate)>=hoje));if(F)dst(F);
if(!L.length){msg('Em breve, novidades da AVAP por aqui.');return}
const card=x=>{const age=x.d?(Date.now()-x.d)/864e5:null;return '<article class="nt-card"><div class="nt-d">'+(x.d?'<b>'+String(x.d.getDate()).padStart(2,'0')+'</b><span>'+MES[x.d.getMonth()]+'</span>':'<span class="raw">'+esc(x.raw)+'</span>')+'</div><div class="nt-b"><div class="nt-m">'+(x.h?'<span>'+clk+esc(x.h)+'</span>':'')+(x.l?'<span>'+pin+esc(x.l)+'</span>':'')+(age!==null&&age>=-1&&age<=14?'<span class="nt-new">Novo</span>':'')+'</div>'+(x.t?'<h3>'+esc(x.t)+'</h3>':'')+(x.s?'<p>'+esc(x.s).replace(/\n/g,'<br>')+'</p>':'')+'</div></article>'};
const n=Math.max(1,N.inicial||4);box.innerHTML=L.slice(0,n).map(card).join('');
if(L.length>n){more.hidden=false;more.onclick=()=>{box.innerHTML=L.map(card).join('');more.hidden=true}}
}catch(e){msg('Não foi possível carregar as notícias agora. Tente novamente mais tarde.')}})();
/* time de rendimento */
(()=>{const R=CFG.rendimento,ed=s=>/\[/.test(s)?' class="ed"':'',tr='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>';
$('#rdTxt').textContent=R.texto;if(/\[/.test(R.texto))$('#rdTxt').classList.add('ed');
const T=$('#rdTimes');T.innerHTML=R.times.map(t=>`<article class="card"><div class="ph"><span>Foto — ${t.n} ${t.cat}</span></div><div class="tx"><span class="tag">${t.cat}</span><h3>${t.n}</h3><p${ed(t.d)}>${t.d}</p></div></article>`).join('');
[...T.children].forEach((c,i)=>img(c.querySelector('.ph'),R.times[i].src,R.times[i].n+' '+R.times[i].cat));
$('#rdCamp').innerHTML=R.campeonatos.map(c=>`<div class="card">${tr}<div><b${ed(c.nome)}>${c.nome}</b>${c.info?`<span${ed(c.info)}>${c.info}</span>`:''}</div></div>`).join('')})();
