(function(){
  function toast(t){window.RL?.toast?RL.toast(t):alert(t)}
  async function syncProgram(){
    if(!window.REAP_AUTH?.configured()) return toast('Connect Supabase first.');
    if(typeof selectedProgram==='undefined' || !selectedProgram) return toast('Select a prayer programme first.');
    try{
      const c=REAP_AUTH.client(),u=await REAP_AUTH.user();
      const p=selectedProgram;
      const programId=p.id;
      const up=await c.from('prayer_programs').upsert({
        id:programId, code:programId, title:p.title, description:p.description||null,
        programme_type:'guided_prayer', total_days:p.days?.length||1,
        status:p.status||'draft', created_by:u.id, updated_at:new Date().toISOString()
      });
      if(up.error) throw up.error;
      const del=await c.from('prayer_sessions').delete().eq('program_id',programId);
      if(del.error) throw del.error;
      for(let i=0;i<(p.days||[]).length;i++){
        const d=p.days[i];
        const ins=await c.from('prayer_sessions').insert({
          program_id:programId, day_number:i+1, title:d.title||('Day '+(i+1)),
          scripture_reference:d.scripture||null, scripture_text:null,
          introduction:d.text||null, written_prayer:d.written||null, closing_prayer:null
        }).select('id').single();
        if(ins.error) throw ins.error;
        const sid=ins.data.id;
        if(d.points?.length){
          const rows=d.points.map((x,j)=>({session_id:sid,position:j+1,point_text:x.text||'',scripture_reference:x.scripture||null}));
          const pr=await c.from('prayer_points').insert(rows);
          if(pr.error) throw pr.error;
        }
      }
      toast('Prayer programme synced to the REAP LIFE cloud.');
    }catch(e){console.error(e);toast(e.message||'Cloud sync failed.')}
  }
  async function loadCare(){
    if(!window.REAP_AUTH?.configured()) return toast('Connect Supabase first.');
    try{
      const c=REAP_AUTH.client();
      const r=await c.from('prayer_requests').select('*').order('created_at',{ascending:false});
      if(r.error)throw r.error;
      const box=document.getElementById('careList'); if(!box)return;
      box.innerHTML=r.data.length?r.data.map(x=>`<article class="care-item"><span class="state">${esc(x.status)}</span><h3>${esc(x.name||'Prayer request')}</h3><p>${esc(x.request_text)}</p><small class="muted">${new Date(x.created_at).toLocaleString()}</small><div class="actions"><select data-cloud-care="${x.id}"><option value="new">New</option><option value="review">Review</option><option value="assigned">Assigned</option><option value="prayed">Prayed</option><option value="follow_up">Follow-up</option><option value="closed">Closed</option></select></div></article>`).join(''):'<div class="muted">No cloud prayer requests.</div>';
      box.querySelectorAll('[data-cloud-care]').forEach(s=>{
        s.value=r.data.find(x=>x.id===s.dataset.cloudCare)?.status||'new';
        s.onchange=async()=>{
          const q=await c.from('prayer_requests').update({status:s.value,updated_at:new Date().toISOString()}).eq('id',s.dataset.cloudCare);
          if(q.error)toast(q.error.message);else toast('Prayer request updated.');
        };
      });
    }catch(e){console.error(e);toast(e.message||'Unable to load cloud prayer requests.')}
  }
  function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function mount(){
    const actions=document.querySelector('#programEditor')?.querySelector('.actions');
    if(actions&&!document.getElementById('cloudSaveProgram')){const b=document.createElement('button');b.id='cloudSaveProgram';b.className='btn btn-gold';b.textContent='☁ Save to Cloud';b.onclick=syncProgram;actions.appendChild(b)}
    const care=document.getElementById('care');
    if(care&&!document.getElementById('loadCloudCare')){const b=document.createElement('button');b.id='loadCloudCare';b.className='btn btn-dark';b.textContent='☁ Load Cloud Requests';b.onclick=loadCare;const a=care.querySelector('.actions');if(a)a.prepend(b)}
  }
  window.REAP_PRAYER_CLOUD={syncProgram,loadCare};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);
  else mount();
  new MutationObserver(mount).observe(document.body,{childList:true,subtree:true});
})();
