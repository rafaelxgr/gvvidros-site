const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }));
}

const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

// Catálogo ampliado + vídeos reais
const projetos=document.getElementById('projetos');
if(projetos){
  const catalogo=document.createElement('section');
  catalogo.className='catalog-section';
  catalogo.id='catalogo';
  catalogo.innerHTML=`
    <div class="container">
      <div class="catalog-head">
        <span class="eyebrow">MAIS TRABALHOS</span>
        <h2>Uma amostra maior dos projetos realizados</h2>
        <p>Confira diferentes soluções executadas em vidro para residências, comércios e ambientes corporativos.</p>
      </div>

      <div class="catalog-group">
        <div class="catalog-title"><h3>Box e banheiros</h3><span>Projetos sob medida</span></div>
        <div class="catalog-grid">
          <figure class="catalog-item"><img src="assets/fotos/Box1.webp" alt="Box de vidro sob medida"><figcaption>Box sob medida</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Box3.webp" alt="Box de vidro em banheiro"><figcaption>Banheiros</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Box5.webp" alt="Box de vidro com acabamento personalizado"><figcaption>Acabamentos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Box7.webp" alt="Box de vidro instalado"><figcaption>Instalações</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Banhe1.webp" alt="Banheiro com espelho e vidro"><figcaption>Soluções completas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Banhe2.webp" alt="Banheiro com vidro sob medida"><figcaption>Vidros para banheiro</figcaption></figure>
        </div>
      </div>

      <div class="catalog-group">
        <div class="catalog-title"><h3>Coberturas e áreas externas</h3><span>Proteção, luz e acabamento</span></div>
        <div class="catalog-grid">
          <figure class="catalog-item"><img src="assets/fotos/Cobert1.webp" alt="Cobertura de vidro em área externa"><figcaption>Coberturas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Cobert2.webp" alt="Cobertura de vidro com estrutura metálica"><figcaption>Estruturas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Teto2.webp" alt="Instalação de cobertura de vidro"><figcaption>Instalação</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Teto3.webp" alt="Estrutura para cobertura de vidro"><figcaption>Projetos externos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Teto4.webp" alt="Cobertura externa sob medida"><figcaption>Sob medida</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Teto5.webp" alt="Teto e cobertura de vidro"><figcaption>Fechamentos</figcaption></figure>
        </div>
      </div>

      <div class="catalog-group">
        <div class="catalog-title"><h3>Portas, divisórias e ambientes</h3><span>Residencial e corporativo</span></div>
        <div class="catalog-grid">
          <figure class="catalog-item"><img src="assets/fotos/Div3.webp" alt="Divisória corporativa em vidro"><figcaption>Divisórias</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Div4.webp" alt="Sala corporativa com divisória em vidro"><figcaption>Ambientes corporativos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Div6.webp" alt="Fechamento interno em vidro"><figcaption>Fechamentos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Div9.webp" alt="Sala de vidro sob medida"><figcaption>Salas de vidro</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Port1.webp" alt="Porta de vidro instalada"><figcaption>Portas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Sala2.webp" alt="Ambiente comercial com vidro"><figcaption>Projetos comerciais</figcaption></figure>
        </div>
      </div>

      <div class="catalog-group">
        <div class="catalog-title"><h3>Espelhos, guarda-corpos e sacadas</h3><span>Detalhes que transformam o ambiente</span></div>
        <div class="catalog-grid">
          <figure class="catalog-item"><img src="assets/fotos/Esp1.webp" alt="Espelho com iluminação em banheiro"><figcaption>Espelhos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Esp6.webp" alt="Espelho sob medida"><figcaption>Sob medida</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Esca2.webp" alt="Guarda-corpo de vidro em escada"><figcaption>Guarda-corpos</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Esca3.webp" alt="Escada com proteção em vidro"><figcaption>Escadas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Jan1.webp" alt="Fechamento de sacada com vidro"><figcaption>Sacadas</figcaption></figure>
          <figure class="catalog-item"><img src="assets/fotos/Fora1.webp" alt="Fechamento externo em vidro"><figcaption>Áreas externas</figcaption></figure>
        </div>
      </div>

      <div class="video-block">
        <div class="catalog-head video-head">
          <span class="eyebrow">PROJETOS EM MOVIMENTO</span>
          <h2>Veja alguns trabalhos em vídeo</h2>
          <p>Registros reais de instalações e soluções executadas pela GV Vidros Free.</p>
        </div>
        <div class="video-grid">
          <article class="video-card"><video class="showcase-video" muted playsinline preload="metadata" poster="assets/fotos/Div9.webp" data-start="2" data-end="10"><source src="assets/fotos/Vid4.mp4" type="video/mp4"></video><div><strong>Divisórias e ambientes corporativos</strong><span>Acabamento e funcionalidade</span></div></article>
          <article class="video-card"><video class="showcase-video" muted playsinline preload="metadata" poster="assets/fotos/Teto1.webp" data-start="2" data-end="10"><source src="assets/fotos/Vid1.mp4" type="video/mp4"></video><div><strong>Coberturas de vidro</strong><span>Projetos para áreas externas</span></div></article>
          <article class="video-card"><video class="showcase-video" muted playsinline preload="metadata" poster="assets/fotos/Port2.webp" data-start="2" data-end="9"><source src="assets/fotos/Vid5.mp4" type="video/mp4"></video><div><strong>Portas e soluções sob medida</strong><span>Uso real do projeto instalado</span></div></article>
          <article class="video-card"><video class="showcase-video" muted playsinline preload="metadata" poster="assets/fotos/Jan2.webp" data-start="2" data-end="10"><source src="assets/fotos/Vid7.mp4" type="video/mp4"></video><div><strong>Fechamento de sacadas</strong><span>Integração visual e proteção</span></div></article>
        </div>
      </div>
    </div>`;
  projetos.insertAdjacentElement('afterend',catalogo);
}

const runtimeStyle=document.createElement('style');
runtimeStyle.textContent=`
.scroll-top{width:32px!important;height:32px!important;bottom:27px!important;font-size:15px!important;box-shadow:0 7px 16px rgba(15,23,42,.14)!important}
.whatsapp-float{width:54px!important;height:54px!important;background:transparent!important;box-shadow:none!important;overflow:visible!important}
.whatsapp-float img{width:54px!important;height:54px!important;display:block!important;object-fit:contain!important}
.zoomable{cursor:zoom-in;transition:transform .22s ease,filter .22s ease}
.zoomable:hover{transform:scale(1.025);filter:brightness(.96)}
.lightbox{position:fixed;inset:0;z-index:9999;background:rgba(3,8,20,.92);display:flex;align-items:center;justify-content:center;padding:32px;opacity:0;visibility:hidden;transition:.2s ease}
.lightbox.open{opacity:1;visibility:visible}
.lightbox-image{max-width:min(1200px,94vw);max-height:86vh;width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 24px 70px rgba(0,0,0,.48)}
.lightbox-close{position:fixed;top:18px;right:24px;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.13);color:#fff;font-size:32px;line-height:1;cursor:pointer;backdrop-filter:blur(8px)}
.lightbox-caption{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);max-width:80vw;color:#fff;background:rgba(0,0,0,.42);padding:8px 14px;border-radius:10px;font-size:14px;text-align:center}
body.lightbox-open{overflow:hidden}
.catalog-section{padding:88px 0;background:#fff;border-top:1px solid #e5e7eb}
.catalog-head{text-align:center;max-width:760px;margin:0 auto 46px}
.catalog-head h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.035em;margin:0}
.catalog-head p{color:#64748b;font-size:16px;margin:14px 0 0}
.catalog-group{margin:0 0 44px}
.catalog-title{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:15px;border-bottom:1px solid #e5e7eb;padding-bottom:12px}
.catalog-title h3{font-size:24px;margin:0;color:#111827}
.catalog-title span{color:#64748b;font-size:13px}
.catalog-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:12px}
.catalog-item{position:relative;margin:0;height:180px;border-radius:14px;overflow:hidden;background:#e2e8f0;box-shadow:0 8px 24px rgba(15,23,42,.07)}
.catalog-item img{width:100%;height:100%;object-fit:cover;display:block}
.catalog-item figcaption{position:absolute;left:9px;bottom:9px;background:rgba(255,255,255,.91);color:#111827;padding:5px 8px;border-radius:7px;font-size:11px;font-weight:800;pointer-events:none}
.video-block{margin-top:78px;padding-top:70px;border-top:1px solid #e5e7eb}
.video-head{margin-bottom:34px}
.video-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;align-items:start}
.video-card{overflow:hidden;border-radius:18px;background:#0b1220;box-shadow:0 14px 34px rgba(15,23,42,.13)}
.video-card video{width:100%;aspect-ratio:9/16;max-height:430px;object-fit:cover;display:block;background:#111827}
.video-card>div{padding:16px 16px 18px;color:#fff}
.video-card strong,.video-card span{display:block}
.video-card strong{font-size:15px;line-height:1.3}
.video-card span{font-size:12px;color:#94a3b8;margin-top:4px}
@media(max-width:1000px){.catalog-grid{grid-template-columns:repeat(3,1fr)}.catalog-item{height:210px}.video-grid{grid-template-columns:repeat(2,1fr)}.video-card video{max-height:500px}}
@media(max-width:600px){.catalog-section{padding:62px 0}.catalog-group{margin-bottom:36px}.catalog-title{display:block}.catalog-title span{display:block;margin-top:4px}.catalog-grid{grid-template-columns:repeat(2,1fr);gap:9px}.catalog-item{height:160px}.video-block{margin-top:58px;padding-top:52px}.video-grid{grid-template-columns:repeat(2,1fr);gap:10px}.video-card video{max-height:330px}.video-card>div{padding:11px}.video-card strong{font-size:12px}.video-card span{font-size:10px}.lightbox{padding:16px}.lightbox-image{max-width:96vw;max-height:82vh}.lightbox-close{top:12px;right:12px}.whatsapp-float,.whatsapp-float img{width:50px!important;height:50px!important}}
`;
document.head.appendChild(runtimeStyle);

// Lightbox para fotos de serviços, projetos e catálogo ampliado
const zoomableImages=[...document.querySelectorAll('.service-img img,.gallery-item img,.catalog-item img')];
if(zoomableImages.length){
  const lightbox=document.createElement('div');
  lightbox.className='lightbox';
  lightbox.setAttribute('aria-hidden','true');
  lightbox.innerHTML='<button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button><img class="lightbox-image" alt=""><div class="lightbox-caption"></div>';
  document.body.appendChild(lightbox);
  const lightboxImage=lightbox.querySelector('.lightbox-image');
  const caption=lightbox.querySelector('.lightbox-caption');
  const closeButton=lightbox.querySelector('.lightbox-close');
  const closeLightbox=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.classList.remove('lightbox-open');};
  zoomableImages.forEach(img=>{
    img.classList.add('zoomable');
    img.setAttribute('tabindex','0');
    img.setAttribute('role','button');
    img.setAttribute('aria-label','Ampliar imagem: '+(img.alt||'projeto'));
    const openLightbox=()=>{lightboxImage.src=img.src;lightboxImage.alt=img.alt||'Imagem ampliada';caption.textContent=img.alt||'';lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.classList.add('lightbox-open');};
    img.addEventListener('click',openLightbox);
    img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox();}});
  });
  closeButton.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();});
}

// Exibe apenas os trechos úteis dos vídeos e toca somente quando estão visíveis
const videos=[...document.querySelectorAll('.showcase-video')];
videos.forEach(video=>{
  const start=Number(video.dataset.start||0);
  const end=Number(video.dataset.end||999);
  video.addEventListener('loadedmetadata',()=>{if(video.duration>start)video.currentTime=start;});
  video.addEventListener('timeupdate',()=>{if(video.currentTime>=end){video.currentTime=start;video.play().catch(()=>{});}});
  video.addEventListener('click',()=>{video.paused?video.play().catch(()=>{}):video.pause();});
});
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const video=entry.target;
      const start=Number(video.dataset.start||0);
      if(entry.isIntersecting&&entry.intersectionRatio>.45){if(video.currentTime<start||video.currentTime===0)video.currentTime=start;video.play().catch(()=>{});}else{video.pause();}
    });
  },{threshold:[0,.45,.75]});
  videos.forEach(video=>observer.observe(video));
}
