/* ============================================================
   جسر الرياضيات — app.js (النسخة الطفولية المرحة)
   إعداد المعلمة T. Wad Refae
   ============================================================ */

function toAr(n){ return String(n).replace(/[0-9]/g, d=>'٠١٢٣٤٥٦٧٨٩'[d]); }

/* -------- العوالم (المهارات) -------- */
const WORLDS = [
  { emoji:'🔢', bg:'bg-sky-100',    chip:'bg-sky-500',    title:'عالم الأعداد',   desc:'جمع وطرح وضرب وقسمة بثقة، وفهم القيمة المنزلية.' },
  { emoji:'🍰', bg:'bg-bubble-100', chip:'bg-bubble-500', title:'عالم الكسور',    desc:'نقارن ونجمع ونطرح الكسور ونحوّلها بمرح.' },
  { emoji:'📐', bg:'bg-coral-100',  chip:'bg-coral-500',  title:'عالم الجبر',     desc:'المتغيّرات والمعادلات البسيطة وحلّها كلغز.' },
  { emoji:'⚖️', bg:'bg-mint-100',   chip:'bg-mint-500',   title:'عالم النسب',     desc:'النسبة المئوية والتناسب وتطبيقاتها في حياتنا.' },
  { emoji:'📏', bg:'bg-sunny-100',  chip:'bg-sunny-500',  title:'عالم الهندسة',   desc:'المساحات والمحيطات والزوايا والأشكال.' },
  { emoji:'📊', bg:'bg-grape-100',  chip:'bg-grape-500',  title:'عالم الإحصاء',   desc:'نقرأ البيانات والجداول والمتوسطات ونرسمها.' },
];

const worldsGrid = document.getElementById('worldsGrid');
if (worldsGrid) {
  WORLDS.forEach((w,i)=>{
    const el = document.createElement('div');
    el.className = `reveal group relative rounded-[2rem] ${w.bg} border-4 border-white shadow-card p-7 hover:-translate-y-2 transition cursor-pointer overflow-hidden`;
    el.style.transitionDelay = (i%3)*0.08+'s';
    el.innerHTML = `
      <span class="absolute -bottom-4 -left-2 text-7xl opacity-10 select-none group-hover:scale-125 transition">${w.emoji}</span>
      <div class="grid place-items-center w-20 h-20 rounded-3xl ${w.chip} text-white text-4xl shadow-pop group-hover:animate-wobble">${w.emoji}</div>
      <h3 class="font-display mt-5 text-2xl font-extrabold text-grape-700">${w.title}</h3>
      <p class="mt-2 text-grape-600/80 font-medium">${w.desc}</p>
      <span class="font-display mt-4 inline-flex items-center gap-1.5 font-bold text-grape-600 group-hover:gap-3 transition-all">
        ادخل العالم
        <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
      </span>`;
    el.onclick = ()=> location.href='diagnose.html';
    worldsGrid.appendChild(el);
  });
}

/* -------- مهام الإنقاذ -------- */
const RESCUE = [
  { emoji:'🛟', tag:'جاهزة الآن', bg:'bg-bubble-100', chip:'bg-bubble-500', title:'إنقاذ الكسور',       desc:'نعيد بناء مفهوم الكسر من جذوره بالصور.', link:'rescue.html' },
  { emoji:'🧩', tag:'جاهزة الآن', bg:'bg-coral-100',  chip:'bg-coral-500',  title:'إنقاذ الجبر',        desc:'من المتغيّر إلى حل المعادلة كلغز ممتع.', link:'rescue-skill.html?id=lin-eq' },
  { emoji:'🏗️', tag:'',           bg:'bg-sunny-100',  chip:'bg-sunny-500',  title:'تأسيس الصف السابع', desc:'جسر يربط المرحلة الدنيا بالعليا.', link:'diagnose.html' },
  { emoji:'🎓', tag:'',            bg:'bg-mint-100',   chip:'bg-mint-500',   title:'قبل الثانوية',      desc:'تمكين شامل يجهّزك للمرحلة القادمة.', link:'diagnose.html' },
];

const rescueGrid = document.getElementById('rescueGrid');
if (rescueGrid) {
  RESCUE.forEach((r,i)=>{
    const el = document.createElement('div');
    el.className = `reveal group relative rounded-[2rem] ${r.bg} border-4 border-white shadow-card p-6 hover:-translate-y-2 transition cursor-pointer overflow-hidden`;
    el.style.transitionDelay = (i%4)*0.07+'s';
    el.innerHTML = `
      ${r.tag?`<span class="absolute top-4 left-4 font-display text-[11px] font-extrabold text-white bg-bubble-600 px-2.5 py-1 rounded-full animate-wobble">${r.tag}</span>`:''}
      <div class="grid place-items-center w-16 h-16 rounded-2xl ${r.chip} text-white text-3xl shadow-pop group-hover:animate-wobble">${r.emoji}</div>
      <h3 class="font-display mt-4 text-xl font-extrabold text-grape-700">${r.title}</h3>
      <p class="mt-1.5 text-grape-600/80 font-medium text-sm">${r.desc}</p>
      <span class="font-display mt-4 inline-flex items-center gap-1.5 font-bold text-grape-600 group-hover:gap-3 transition-all text-sm">ابدأ المهمة
        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.8"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></span>`;
    el.onclick = ()=> location.href = r.link || 'diagnose.html';
    rescueGrid.appendChild(el);
  });
}

/* -------- قائمة الموبايل -------- */
const menuBtn=document.getElementById('menuBtn'), mobMenu=document.getElementById('mobMenu');
if(menuBtn&&mobMenu){
  menuBtn.addEventListener('click',()=>mobMenu.classList.toggle('hidden'));
  mobMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobMenu.classList.add('hidden')));
}

/* -------- reveal عند التمرير -------- */
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* -------- عدّاد الإحصائيات -------- */
const cIO=new IntersectionObserver((es)=>{es.forEach(e=>{
  if(!e.isIntersecting)return; const el=e.target,t=+el.dataset.count; let c=0,s=Math.max(1,Math.ceil(t/40));
  const iv=setInterval(()=>{c+=s; if(c>=t){c=t;clearInterval(iv);} el.textContent=toAr(c);},30); cIO.unobserve(el);
})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(c=>cIO.observe(c));


/* ============================================================
   صفحة المعلّم المخفية — رابط خاص: index.html#/teacher/<مفتاح>
   مثال: index.html#/teacher/wadrefae-2026
   ⚠️ إخفاء وليس حماية فعلية — استخدمي تسجيل دخول حقيقي لاحقاً.
   ============================================================ */
const TEACHER_KEY='wadrefae-2026';

let TSEL = null;   // الطالب المحدّد للعرض التفصيلي

function statusOf(p, hasActivity){
  if(!hasActivity) return {t:'لم يبدأ', badge:'text-grape-600 bg-grape-100', bar:'bg-grape-400'};
  if(p>=80) return {t:'متمكّن 🌟', badge:'text-mint-700 bg-mint-100', bar:'bg-mint-500'};
  if(p>=50) return {t:'في تقدّم', badge:'text-sky-600 bg-sky-100', bar:'bg-sky-500'};
  return {t:'يحتاج دعماً', badge:'text-coral-600 bg-coral-100', bar:'bg-coral-500'};
}

function renderTeacher(){
  document.body.className='bg-grape-100 text-grape-700';
  const students = window.MB.students();
  const data = students.map(function(s){ return {s:s, p:window.MB.progress(s)}; });
  const active = data.filter(function(d){ return d.p.masteredCount+d.p.gapCount>0; });
  const avg = active.length ? Math.round(active.reduce(function(a,d){return a+d.p.masteryPct;},0)/active.length) : 0;
  const need = active.filter(function(d){ return d.p.masteryPct<50; }).length;
  const totalGaps = data.reduce(function(a,d){return a+d.p.gapCount;},0);

  // تجميع أكثر الفجوات شيوعاً عبر الطلاب
  const gapCount = {};
  students.forEach(function(s){
    Object.keys(s.skills||{}).forEach(function(id){
      var st=s.skills[id]; if(st.diag==='gap' && !st.mastered){
        var sk=window.MB.byId(id); if(sk) gapCount[id]=(gapCount[id]||0)+1;
      }
    });
  });
  const gapRanked = Object.keys(gapCount).map(function(id){return {sk:window.MB.byId(id), c:gapCount[id]};})
    .sort(function(a,b){return b.c-a.c;});
  const maxGap = gapRanked.length ? gapRanked[0].c : 1;

  const gradeOpts = window.GRADES.map(function(g){return '<option value="'+g+'">الصف '+toAr(g)+'</option>';}).join('');

  const rows = data.length ? data.map(function(d){
    const s=d.s, p=d.p, has=p.masteredCount+p.gapCount>0, stt=statusOf(p.masteryPct,has);
    return '<tr class="border-b border-grape-100 hover:bg-grape-50 cursor-pointer '+(TSEL===s.id?'bg-grape-50':'')+'" onclick="mbSel('+JSON.stringify(s.id).replace(/"/g,'&quot;')+')">'+
      '<td class="py-3 px-2 font-display font-bold">🦊 '+s.name+'</td>'+
      '<td class="py-3 px-2 text-grape-500 font-medium">'+(s.grade?'الصف '+toAr(s.grade):'—')+'</td>'+
      '<td class="py-3 px-2"><div class="flex items-center gap-2"><div class="w-20 h-2.5 rounded-full bg-grape-100 overflow-hidden"><div class="h-full '+stt.bar+'" style="width:'+p.masteryPct+'%"></div></div><span class="text-xs font-bold">'+toAr(p.masteryPct)+'٪</span></div></td>'+
      '<td class="py-3 px-2 text-center"><span class="font-display text-xs font-bold px-2 py-1 rounded-full '+(p.gapCount?'text-coral-600 bg-coral-100':'text-mint-700 bg-mint-100')+'">'+toAr(p.gapCount)+'</span></td>'+
      '<td class="py-3 px-2"><span class="font-display text-xs font-bold px-2.5 py-1 rounded-full '+stt.badge+'">'+stt.t+'</span></td>'+
      '<td class="py-3 px-2 text-left"><button onclick="event.stopPropagation();mbDel('+JSON.stringify(s.id).replace(/"/g,'&quot;')+')" class="text-coral-500 hover:text-coral-600 font-bold text-sm">🗑️</button></td></tr>';
  }).join('') : '<tr><td colspan="6" class="py-8 text-center text-grape-400 font-medium">لا يوجد طلاب بعد — أضيفي أول طالب من الأعلى.</td></tr>';

  const gapList = gapRanked.length ? gapRanked.slice(0,7).map(function(g){
    var wi=window.WORLDS[g.sk.world];
    return '<div><div class="flex justify-between font-display font-bold text-sm"><span>'+wi.emoji+' '+g.sk.name+'</span><span class="text-grape-400">'+toAr(g.c)+' طلاب</span></div>'+
      '<div class="mt-1.5 h-2.5 rounded-full bg-grape-100 overflow-hidden"><div class="h-full '+wi.chip+'" style="width:'+Math.round(g.c/maxGap*100)+'%"></div></div></div>';
  }).join('') : '<p class="text-sm text-grape-400 font-medium">لا فجوات مسجّلة بعد.</p>';

  const rec = gapRanked.length
    ? '<div class="mt-5 p-4 rounded-2xl bg-sunny-100 text-sm font-bold text-grape-700 leading-relaxed">💡 توصية: أكثر فجوة شيوعاً «'+gapRanked[0].sk.name+'» ('+toAr(gapRanked[0].c)+' طلاب) — ابدئي بها حصة علاجية جماعية.</div>'
    : '';

  document.body.innerHTML=`
  <div dir="rtl" style="font-family:Tajawal,sans-serif">
    <header class="bg-white border-b-4 border-grape-100 sticky top-0 z-40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="grid place-items-center w-10 h-10 rounded-2xl bg-gradient-to-br from-grape-500 to-bubble-500 text-white">
            <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c3-5 6-5 9 0s6 5 9 0"/><path d="M3 17v3M21 17v3"/></svg>
          </span>
          <div><div class="font-display font-extrabold leading-none">لوحة المعلّم</div><div class="text-xs text-grape-400 mt-0.5">جسر الرياضيات</div></div>
        </div>
        <div class="flex items-center gap-3">
          <span class="hidden sm:inline font-display text-sm font-bold">أ. <span class="text-bubble-500">T. Wad Refae</span></span>
          <a href="#" onclick="location.hash='';location.reload();return false;" class="font-display text-sm font-bold text-grape-400 hover:text-coral-500">خروج</a>
        </div>
      </div>
    </header>
    <main class="mx-auto max-w-7xl px-4 sm:px-6 py-8">
      <h1 class="font-display text-2xl font-extrabold">أهلاً، أ. T. Wad Refae 👋</h1>
      <p class="text-grape-500 font-medium text-sm mt-1">متابعة أداء الطلاب: مواطن الضعف والتمكّن المعرفي لكل طالب.</p>
      <div class="mt-3 p-3 rounded-2xl bg-coral-100 text-coral-700 text-xs font-bold leading-relaxed">⚠️ ملاحظة: الحسابات والتقدّم تُحفظ في هذا المتصفّح فقط (نموذج محلي) — ليست حماية أمنية ولا تُزامَن بين الأجهزة. الربط بخادم لاحقاً.</div>

      <div class="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        ${tStat('👥','عدد الطلاب',toAr(students.length),'bg-sky-100')}
        ${tStat('📈','متوسط الإتقان',toAr(avg)+'٪','bg-mint-100')}
        ${tStat('⚠️','يحتاجون دعماً',toAr(need),'bg-coral-100')}
        ${tStat('🎯','إجمالي الفجوات',toAr(totalGaps),'bg-sunny-100')}
      </div>

      <div class="mt-6 bg-white rounded-[1.5rem] border-4 border-white p-5" style="box-shadow:0 12px 0 -4px rgba(0,0,0,.05)">
        <h2 class="font-display font-extrabold text-lg">➕ إضافة طالب</h2>
        <p class="text-xs text-grape-400 font-medium mt-1">يسجّل الطالب دخوله بالاسم وكلمة المرور من صفحة «رحلتي».</p>
        <div class="mt-3 grid sm:grid-cols-4 gap-3">
          <input id="taName" placeholder="اسم الطالب" class="px-4 py-3 rounded-2xl bg-grape-100 border-2 border-transparent focus:outline-none focus:border-grape-400 font-bold" />
          <input id="taPass" placeholder="كلمة المرور" class="px-4 py-3 rounded-2xl bg-grape-100 border-2 border-transparent focus:outline-none focus:border-grape-400 font-bold" />
          <select id="taGrade" class="px-4 py-3 rounded-2xl bg-grape-100 border-2 border-transparent focus:outline-none focus:border-grape-400 font-bold">${gradeOpts}</select>
          <button onclick="mbAdd()" class="font-display px-5 py-3 rounded-2xl text-sm font-extrabold text-white bg-grape-600" style="box-shadow:0 5px 0 0 rgba(0,0,0,.16)">إضافة الطالب</button>
        </div>
        <div id="taErr" class="hidden mt-3 rounded-2xl bg-coral-100 text-coral-600 font-bold text-sm p-3 text-center"></div>
      </div>

      <div class="mt-6 grid lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2 bg-white rounded-[1.5rem] border-4 border-white p-5" style="box-shadow:0 12px 0 -4px rgba(0,0,0,.05)">
          <h2 class="font-display font-extrabold text-lg">أداء الطلاب <span class="text-xs text-grape-400 font-medium">(اضغطي على طالب لعرض التفاصيل)</span></h2>
          <div class="mt-4 overflow-x-auto">
            <table class="w-full text-sm text-right">
              <thead class="text-grape-400 font-display font-bold border-b-2 border-grape-100">
                <tr><th class="py-2 px-2">الطالب</th><th class="py-2 px-2">الصف</th><th class="py-2 px-2">الإتقان</th><th class="py-2 px-2 text-center">الفجوات</th><th class="py-2 px-2">الحالة</th><th class="py-2 px-2"></th></tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>

        <div class="bg-white rounded-[1.5rem] border-4 border-white p-5" style="box-shadow:0 12px 0 -4px rgba(0,0,0,.05)">
          <h2 class="font-display font-extrabold text-lg">🎯 أكثر الفجوات شيوعاً</h2>
          <div class="mt-4 space-y-4">${gapList}</div>
          ${rec}
        </div>
      </div>

      <div id="teacherDetail" class="mt-6">${TSEL?teacherDetail(TSEL):''}</div>
    </main>
  </div>`;
}

/* البطاقة التفصيلية لطالب: التمكّن والضعف لكل عالم */
function teacherDetail(id){
  const s = window.MB.db().students[id]; if(!s) return '';
  const p = window.MB.progress(s);
  const cards = Object.keys(window.WORLDS).map(function(w){
    const wi=window.WORLDS[w], d=p.worlds[w]; if(d.total===0) return '';
    const mastered = d.mastered.length? d.mastered.map(function(sk){return '<span class="inline-block text-xs font-bold '+wi.text+' '+wi.soft+' px-2 py-1 rounded-full m-0.5">🌟 '+sk.name+'</span>';}).join('') : '';
    const gaps = d.gap.length? d.gap.map(function(sk){return '<span class="inline-block text-xs font-bold text-coral-600 bg-coral-100 px-2 py-1 rounded-full m-0.5">🎯 '+sk.name+'</span>';}).join('') : '';
    const body = (mastered||gaps)? (mastered+gaps) : '<span class="text-xs text-grape-400 font-medium">لم تُفحص بعد</span>';
    return '<div class="rounded-2xl bg-grape-50 p-4"><div class="flex items-center justify-between"><span class="font-display font-bold '+wi.text+'">'+wi.emoji+' '+wi.name+'</span><span class="text-xs font-bold text-grape-400">'+toAr(d.mastered.length)+'/'+toAr(d.total)+'</span></div><div class="mt-2">'+body+'</div></div>';
  }).join('');
  return '<div class="bg-white rounded-[1.5rem] border-4 border-white p-5" style="box-shadow:0 12px 0 -4px rgba(0,0,0,.05)">'+
    '<div class="flex flex-wrap items-center justify-between gap-2">'+
      '<h2 class="font-display font-extrabold text-lg">🦊 '+s.name+' — التمكّن والضعف المعرفي'+(s.grade?' · الصف '+toAr(s.grade):'')+'</h2>'+
      '<div class="flex items-center gap-2"><span class="font-display font-bold text-sm text-grape-500">إتقان '+toAr(p.masteryPct)+'٪</span>'+
      '<button onclick="mbSel(null)" class="text-grape-400 hover:text-coral-500 font-bold text-sm">✕ إغلاق</button></div></div>'+
    '<div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">'+cards+'</div></div>';
}

function tStat(ic,l,v,bg){return `<div class="bg-white rounded-[1.5rem] border-4 border-white p-5" style="box-shadow:0 12px 0 -4px rgba(0,0,0,.05)">
  <span class="grid place-items-center w-12 h-12 rounded-2xl ${bg} text-2xl">${ic}</span>
  <div class="font-display mt-3 text-2xl font-extrabold">${v}</div><div class="text-xs font-bold text-grape-500">${l}</div></div>`;}

/* ---- إجراءات لوحة المعلّم ---- */
function mbAdd(){
  const name=document.getElementById('taName').value;
  const pass=document.getElementById('taPass').value;
  const grade=document.getElementById('taGrade').value;
  const r=window.MB.addStudent(name,pass,grade);
  const e=document.getElementById('taErr');
  if(r.err){ e.textContent='⚠️ '+r.err; e.classList.remove('hidden'); }
  else renderTeacher();
}
function mbDel(id){
  if(window.confirm('حذف الطالب وكل تقدّمه؟')){ window.MB.removeStudent(id); if(TSEL===id)TSEL=null; renderTeacher(); }
}
function mbSel(id){ TSEL = (id && TSEL!==id) ? id : null; renderTeacher(); }

function checkTeacher(){ const h=location.hash||''; if(h.startsWith('#/teacher/')&&h.replace('#/teacher/','').trim()===TEACHER_KEY) renderTeacher(); }
checkTeacher();
window.addEventListener('hashchange',()=>{ if((location.hash||'').startsWith('#/teacher/')) location.reload(); });
