/* ===== CONFIGURAÇÃO EDITÁVEL ===== */
const CFG={
  wa:'5515991748568',
  addr:'Av. Dr. Artur Bernardes, 1320 - Vila Gabriel, Sorocaba - SP, 18081-000', // ativa mapa e "Como chegar"
  heroImg:'',         // caminho/URL da foto do hero
  imgs:{about:'img/treino.jpg',ronaldo:'',leo:'',eduardo:''}, // fotos das seções
  gallery:[           // {src:'', alt:''} — troque pelas fotos reais
    {src:'img/bolas.jpg',alt:'Quadra'},{src:'img/treino.jpg',alt:'Treinamento'},{src:'',alt:'Atletas'},{src:'',alt:'Equipe técnica'},{src:'',alt:'Momento de treino'},{src:'',alt:'Treinamento'}
  ],
  cats:[ // faixa e horário editáveis
    {n:'Iniciante',lv:'Primeiros passos no voleibol',d:'Fundamentos e coordenação em ambiente acolhedor.'},
    {n:'Intermediário',lv:'Evolução técnica',d:'Aprimoramento de fundamentos e início da leitura de jogo.'},
    {n:'Avançado',lv:'Alto rendimento',d:'Treino intenso com foco tático, físico e competitivo.'},
    {n:'Juvenil',lv:'Formação de base',d:'Desenvolvimento esportivo e pessoal de jovens atletas.'},
    {n:'Adulto',lv:'Todos os níveis',d:'Treinos para quem quer jogar, evoluir e manter o ritmo.'}
  ],
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
$('#cats').innerHTML=CFG.cats.map(c=>`<div class="card"><h3>${c.n}</h3><dl><dt>Faixa etária: </dt><dd class="ed">[editar]</dd><br><dt>Nível: </dt><dd>${c.lv}</dd><br><dt>Horários: </dt><dd class="ed">[editar]</dd></dl><p>${c.d}</p><a class="btn b3" target="_blank" rel="noopener" href="${wa('Olá! Tenho interesse no treinamento da categoria '+c.n+' na AVAP.')}">Quero treinar</a></div>`).join('');
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
