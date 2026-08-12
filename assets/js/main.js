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

// Ajustes visuais finos desta versão
const runtimeStyle=document.createElement('style');
runtimeStyle.textContent=`
.scroll-top{width:34px!important;height:34px!important;bottom:26px!important;font-size:17px!important;box-shadow:0 8px 18px rgba(15,23,42,.14)!important}
.whatsapp-float{width:56px!important;height:56px!important;background:transparent!important;box-shadow:0 10px 26px rgba(0,0,0,.20)!important;overflow:visible!important}
.whatsapp-float img{width:56px!important;height:56px!important;display:block!important;object-fit:contain!important}
.zoomable{cursor:zoom-in;transition:transform .22s ease,filter .22s ease}
.zoomable:hover{transform:scale(1.025);filter:brightness(.96)}
.lightbox{position:fixed;inset:0;z-index:9999;background:rgba(3,8,20,.92);display:flex;align-items:center;justify-content:center;padding:32px;opacity:0;visibility:hidden;transition:.2s ease}
.lightbox.open{opacity:1;visibility:visible}
.lightbox-image{max-width:min(1200px,94vw);max-height:86vh;width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 24px 70px rgba(0,0,0,.48)}
.lightbox-close{position:fixed;top:18px;right:24px;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.13);color:#fff;font-size:32px;line-height:1;cursor:pointer;backdrop-filter:blur(8px)}
.lightbox-caption{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);max-width:80vw;color:#fff;background:rgba(0,0,0,.42);padding:8px 14px;border-radius:10px;font-size:14px;text-align:center}
body.lightbox-open{overflow:hidden}
@media(max-width:600px){.scroll-top{width:32px!important;height:32px!important;bottom:27px!important;font-size:15px!important}.whatsapp-float,.whatsapp-float img{width:52px!important;height:52px!important}.lightbox{padding:16px}.lightbox-image{max-width:96vw;max-height:82vh}.lightbox-close{top:12px;right:12px}}
`;
document.head.appendChild(runtimeStyle);

// Lightbox para fotos de serviços e projetos
const zoomableImages=[...document.querySelectorAll('.service-img img,.gallery-item img')];
if(zoomableImages.length){
  const lightbox=document.createElement('div');
  lightbox.className='lightbox';
  lightbox.setAttribute('aria-hidden','true');
  lightbox.innerHTML='<button class="lightbox-close" type="button" aria-label="Fechar imagem">×</button><img class="lightbox-image" alt=""><div class="lightbox-caption"></div>';
  document.body.appendChild(lightbox);

  const lightboxImage=lightbox.querySelector('.lightbox-image');
  const caption=lightbox.querySelector('.lightbox-caption');
  const closeButton=lightbox.querySelector('.lightbox-close');

  const closeLightbox=()=>{
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('lightbox-open');
  };

  zoomableImages.forEach(img=>{
    img.classList.add('zoomable');
    img.setAttribute('tabindex','0');
    img.setAttribute('role','button');
    img.setAttribute('aria-label','Ampliar imagem: '+(img.alt||'projeto'));
    const openLightbox=()=>{
      lightboxImage.src=img.src;
      lightboxImage.alt=img.alt||'Imagem ampliada';
      caption.textContent=img.alt||'';
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden','false');
      document.body.classList.add('lightbox-open');
    };
    img.addEventListener('click',openLightbox);
    img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openLightbox();}});
  });

  closeButton.addEventListener('click',closeLightbox);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&lightbox.classList.contains('open'))closeLightbox();});
}
