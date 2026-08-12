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
