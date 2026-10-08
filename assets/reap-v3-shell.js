(function(){
  const path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const map={
    'index.html':'home','lifememo.html':'lifememo','prayer.html':'prayer','word.html':'messages','message.html':'message',
    'audio.html':'audio','video.html':'video','presentation.html':'presentation','presentation-display.html':'presentation',
    'live.html':'live','search.html':'search','watch.html':'watch','daily-word.html':'lifememo',
    'auth.html':'auth','studio.html':'studio','prayer-studio.html':'prayer-studio','lifememo-studio.html':'lifememo-studio',
    'audio-studio.html':'audio-studio','media-library.html':'media-library','share-center.html':'share-center','recorder.html':'recorder',
    'content-entry.html':'content-entry','editor.html':'editor','admin.html':'admin','schedule.html':'schedule','taxonomy.html':'taxonomy',
    'share-studio.html':'share-studio','visual-sources.html':'visual-sources','connections.html':'connections','community.html':'community'
  };
  const page=map[path]||'private';
  document.body.classList.add('v3-ready');
  document.body.dataset.v3Page=page;
  const privatePages=['auth','studio','prayer-studio','lifememo-studio','audio-studio','media-library','share-center','recorder','content-entry','editor','admin','schedule','taxonomy','share-studio','visual-sources','connections','community'];
  if(privatePages.includes(page)) document.body.dataset.v3Private='true';

  const publicLinks=[
    ['Home','index.html'],['Life Memo','lifememo.html'],['Prayer','prayer.html'],['Messages','word.html'],['Audio','audio.html'],
    ['Video','video.html'],['Teach the Word','presentation.html'],['Live','live.html'],['Search','search.html']
  ];
  const studioLinks=[
    ['Dashboard','studio.html'],['Create Content','content-entry.html'],['Master Messages','message.html'],['Life Memo Studio','lifememo-studio.html'],
    ['Prayer Studio','prayer-studio.html'],['Media Library','media-library.html'],['Recorder','recorder.html'],['Share Center','share-center.html']
  ];
  const isPrivate=privatePages.includes(page);
  const links=isPrivate?studioLinks:publicLinks;
  const active=(href)=>href===path;
  const linkHtml=links.map(([label,href])=>`<a class="${active(href)?'active':''}" href="./${href}">${label}</a>`).join('');
  const drawerLinks=publicLinks.map(([label,href])=>`<a href="./${href}">${label}<span>›</span></a>`).join('');
  const studioDrawer=privatePages.includes(page)?studioLinks.map(([label,href])=>`<a href="./${href}">${label}<span>›</span></a>`).join(''):'';

  const header=document.createElement('header');header.className='v3-header';header.innerHTML=`
    <div class="v3-nav">
      <a class="v3-brand" href="./index.html"><img src="./reap-life-logo.png" alt="REAP LIFE"><span><span class="v3-brand-main">REAP LIFE</span><span class="v3-brand-sub">GROWING LIVES THROUGH THE WORD</span></span></a>
      <nav class="v3-links">${linkHtml}${isPrivate?'':'<a class="studio-link" href="./studio.html">Ministry Studio</a>'}</nav>
      <button class="v3-menu-btn" type="button" aria-label="Open menu" aria-expanded="false">☰</button>
    </div>`;
  document.body.insertBefore(header,document.body.firstChild);

  const drawer=document.createElement('div');drawer.className='v3-drawer';drawer.innerHTML=`<div class="v3-drawer-panel"><div class="eyebrow" style="color:var(--v3-gold);margin-bottom:8px">REAP LIFE</div>${isPrivate?studioDrawer:drawerLinks}<a class="drawer-studio" href="./studio.html">${isPrivate?'Return to Public REAP LIFE':'Ministry Studio'}<span>›</span></a></div>`;document.body.appendChild(drawer);
  const btn=header.querySelector('.v3-menu-btn');btn.addEventListener('click',()=>{drawer.classList.toggle('open');btn.setAttribute('aria-expanded',drawer.classList.contains('open'));btn.textContent=drawer.classList.contains('open')?'×':'☰'});drawer.addEventListener('click',e=>{if(e.target===drawer){drawer.classList.remove('open');btn.textContent='☰'}});

  // Hide obsolete embedded V2 branding bars. The shared V3 header is now the only public navigation.
  document.querySelectorAll('.topbar,.brandbar').forEach(el=>el.remove());

  const footer=document.createElement('footer');footer.className='v3-footer';footer.innerHTML=`
    <div class="v3-footer-inner"><div class="v3-footer-grid">
      <div><div class="v3-footer-brand">REAP LIFE</div><p class="v3-footer-copy">Growing lives through the Word of God through biblical teaching, Life Memo, prayer, media and practical Christian living.</p></div>
      <div><h4>Explore</h4><a href="./lifememo.html">Life Memo</a><a href="./prayer.html">Prayer</a><a href="./word.html">Messages</a><a href="./audio.html">Audio</a></div>
      <div><h4>Media</h4><a href="./video.html">Video</a><a href="./presentation.html">Teach the Word</a><a href="./live.html">Live</a><a href="./search.html">Search</a></div>
      <div><h4>Ministry</h4><a href="./studio.html">Ministry Studio</a><a href="./share-center.html">Share Center</a><a href="./prayer.html">Prayer Requests</a></div>
    </div><div class="v3-footer-bottom"><span>REAP LIFE • IN CHRIST MINISTRY</span><span>Let the Word of God shape your life.</span></div></div>`;
  document.body.appendChild(footer);

  // Fix legacy duplicate Live links that may still exist inside page content.
  const navs=document.querySelectorAll('nav');navs.forEach(n=>{const seen=new Set();[...n.querySelectorAll('a')].forEach(a=>{const href=a.getAttribute('href')||'';if(href.includes('live.html')){if(seen.has('live'))a.remove();else seen.add('live')}})});
  document.title=document.title.replace(/REAP LIFE[^—|•]*/i,'REAP LIFE');
})();
