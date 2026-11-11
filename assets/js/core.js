const cloneDemo = value => JSON.parse(JSON.stringify(value));
const DEMO_STATE_KEY = 'sertikom-demo-state-v3';
const appState = {
  view: window.SERTIKOM_START_PAGE || 'landing',
  role: null,
  user: null,
  activePage: 'overview',
  search: '',
  searchStatus: 'all',
  showMenu: false,
  firstLogin: false,
  students: cloneDemo(studentSeed),
  teachers: cloneDemo(teacherSeed),
  industries: cloneDemo(industrySeed),
  schedules: cloneDemo(schedules).map((item, i) => ({ ...item, quota: item.quota || [32, 28, 21][i] || 30 })),
  materials: [
    { id: 'MAT-001', title: 'Praktik Git untuk Tim', publisher: 'PT Inovasi Digital Indonesia', type: 'Dokumen', description: 'Alur kerja Git dan kolaborasi repositori untuk tim pengembang.' },
    { id: 'MAT-002', title: 'Dasar UI untuk Produk Digital', publisher: 'CV Kreatif Visual Studio', type: 'Video', description: 'Prinsip dasar antarmuka yang mudah digunakan.' },
    { id: 'MAT-003', title: 'Checklist Kesiapan Kerja', publisher: 'Sertikom · Demo', type: 'Panduan', description: 'Daftar persiapan sebelum memasuki dunia kerja.' }
  ],
  invitations: [],
  collaborations: [
    { id: 'KOL-001', title: 'Sharing session: karier teknologi', partner: 'PT Inovasi Digital Indonesia', description: 'Diskusi jalur karier untuk siswa kelas XII.', date: '5 Nov 2026', status: 'Terjadwal' },
    { id: 'KOL-002', title: 'Tinjauan portofolio siswa', partner: 'CV Kreatif Visual Studio', description: 'Umpan balik dari mentor industri.', date: '14 Nov 2026', status: 'Terjadwal' },
    { id: 'KOL-003', title: 'Review materi kompetensi', partner: 'PT Jaringan Cerdas Nusantara', description: 'Penyelarasan materi praktik dengan industri.', date: '20 Nov 2026', status: 'Terjadwal' }
  ],
  assessmentRecords: [],
  importPreview: null,
  activities: [],
  programs: cloneDemo(programSeed),
  submissions: cloneDemo(submissionSeed),
  enrollments: cloneDemo(enrollmentSeed),
  gallery: cloneDemo(gallerySeed),
  settings: { notifications: true, autoSave: true, publicProfile: true, compact: false },
  registerDraft: null,
  registerStep: 1,
  selectedProgramId: 'PRG-001',
  selectedSubmissionId: null,
  enrolledPrograms: ['PRG-001','PRG-002','PRG-006'],
  certificateCode: 'SRTK-2026-0001'
};

function restoreDemoState() {
  try {
    const raw = sessionStorage.getItem(DEMO_STATE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    ['students', 'teachers', 'industries', 'schedules', 'materials', 'invitations', 'collaborations', 'assessmentRecords', 'activities', 'programs', 'submissions', 'enrollments', 'enrolledPrograms', 'gallery'].forEach(key => {
      if (Array.isArray(saved[key])) appState[key] = saved[key];
    });
    if (saved.settings && typeof saved.settings === 'object') appState.settings = { ...appState.settings, ...saved.settings };
  } catch (error) {
    console.warn('Data sesi demo tidak dapat dipulihkan.', error);
  }
}
function saveDemoState() {
  try {
    const snapshot = {};
    ['students', 'teachers', 'industries', 'schedules', 'materials', 'invitations', 'collaborations', 'assessmentRecords', 'activities', 'programs', 'submissions', 'enrollments', 'enrolledPrograms', 'gallery', 'settings'].forEach(key => snapshot[key] = appState[key]);
    sessionStorage.setItem(DEMO_STATE_KEY, JSON.stringify(snapshot));
  } catch (error) {
    // Prototype tetap berfungsi selama halaman terbuka walau penyimpanan sesi tidak tersedia.
  }
}
function resetDemoData() {
  appState.students = cloneDemo(studentSeed);
  appState.teachers = cloneDemo(teacherSeed);
  appState.industries = cloneDemo(industrySeed);
  appState.schedules = cloneDemo(schedules).map((item, i) => ({ ...item, quota: item.quota || [32, 28, 21][i] || 30 }));
  appState.materials = [
    { id: 'MAT-001', title: 'Praktik Git untuk Tim', publisher: 'PT Inovasi Digital Indonesia', type: 'Dokumen', description: 'Alur kerja Git dan kolaborasi repositori untuk tim pengembang.' },
    { id: 'MAT-002', title: 'Dasar UI untuk Produk Digital', publisher: 'CV Kreatif Visual Studio', type: 'Video', description: 'Prinsip dasar antarmuka yang mudah digunakan.' },
    { id: 'MAT-003', title: 'Checklist Kesiapan Kerja', publisher: 'Sertikom · Demo', type: 'Panduan', description: 'Daftar persiapan sebelum memasuki dunia kerja.' }
  ];
  appState.invitations = [];
  appState.collaborations = [
    { id: 'KOL-001', title: 'Sharing session: karier teknologi', partner: 'PT Inovasi Digital Indonesia', description: 'Diskusi jalur karier untuk siswa kelas XII.', date: '5 Nov 2026', status: 'Terjadwal' },
    { id: 'KOL-002', title: 'Tinjauan portofolio siswa', partner: 'CV Kreatif Visual Studio', description: 'Umpan balik dari mentor industri.', date: '14 Nov 2026', status: 'Terjadwal' },
    { id: 'KOL-003', title: 'Review materi kompetensi', partner: 'PT Jaringan Cerdas Nusantara', description: 'Penyelarasan materi praktik dengan industri.', date: '20 Nov 2026', status: 'Terjadwal' }
  ];
  appState.assessmentRecords = [];
  appState.activities = [];
  appState.programs = cloneDemo(programSeed);
  appState.submissions = cloneDemo(submissionSeed);
  appState.enrollments = cloneDemo(enrollmentSeed);
  appState.gallery = cloneDemo(gallerySeed);
  appState.settings = { notifications: true, autoSave: true, publicProfile: true, compact: false };
  appState.registerDraft = null;
  appState.registerStep = 1;
  appState.enrolledPrograms = ['PRG-001','PRG-002','PRG-006'];
  appState.selectedProgramId = 'PRG-001';
  appState.search = '';
  appState.searchStatus = 'all';
  appState.importPreview = null;
  saveDemoState();
  render();
  toast('Data demo direset', 'Seluruh perubahan sesi dikembalikan ke data contoh awal.');
}
function recordActivity(title, detail) {
  appState.activities.unshift({ title, detail, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) });
  appState.activities = appState.activities.slice(0, 12);
  saveDemoState();
}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function initials(name){return String(name||'').split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase()}
function currentStudent(){const name=appState.user?.name;return appState.students.find(s=>s.name===name)||appState.students.find(s=>s.id==='SRT-001')||appState.students[0]}
function programById(id){return appState.programs.find(p=>p.id===id)||appState.programs[0]}
function assetUrl(path){if(!path)return '';if(/^(https?:|data:|\.\.?\/|\/)/.test(path))return path;const inPages=location.pathname.replace(/\\/g,'/').includes('/pages/');return (inPages?'../':'')+path}
function myEnrollments(studentId){const sid=studentId||currentStudent()?.id;return appState.enrollments.filter(e=>e.studentId===sid)}
function industryVisibleStudents(){const ids=[...new Set(appState.submissions.map(s=>s.studentId))];return appState.students.filter(s=>ids.includes(s.id))}
const UI_ICONS={
  dashboard:'<rect x="3" y="3" width="7" height="9" rx="2"/><rect x="14" y="3" width="7" height="5" rx="2"/><rect x="14" y="12" width="7" height="9" rx="2"/><rect x="3" y="16" width="7" height="5" rx="2"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  teacher:'<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/><path d="m16.5 11.5 2 2 3.5-4"/>',
  clipboard:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 11h8M8 16h6"/>',
  upload:'<path d="M12 16V4"/><path d="m6 10 6-6 6 6"/><path d="M4 20h16"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  chart:'<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1-1.55 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.55-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.01a1.7 1.7 0 0 0 1-1.55V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.01a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  award:'<circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  sparkle:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  enroll:'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  upRight:'<path d="M7 17 17 7"/><path d="M7 7h10v10"/>',
  arrowRight:'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowLeft:'<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  code:'<path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/><path d="m14 4-4 16"/>',
  corner:'<path d="M4 4v7a4 4 0 0 0 4 4h12"/><path d="m14 9 6 6-6 6"/>',
  chevron:'<path d="m6 9 6 6 6-6"/>',
  download:'<path d="M12 4v12"/><path d="m6 10 6 6 6-6"/><path d="M4 20h16"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  dot:'<circle cx="12" cy="12" r="4"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9z"/>',
  diamond:'<path d="m12 3 9 9-9 9-9-9z"/>',
  play:'<path d="m8 5 11 7-11 7z"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  eyeOff:'<path d="m3 3 18 18"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 4.2A10.6 10.6 0 0 1 12 4c6.5 0 10 8 10 8a18 18 0 0 1-2.1 3.3"/><path d="M6.6 6.6C3.6 8.5 2 12 2 12s3.5 8 10 8a10.7 10.7 0 0 0 5.4-1.4"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="m11 12 8-8"/><path d="m17 6 3 3"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  trash:'<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  send:'<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
  filter:'<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
  home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
  link:'<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
  flag:'<path d="M4 22V3"/><path d="M4 4h12l-2 4 2 4H4"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  handshake:'<path d="m11 17 2 2a1 1 0 0 0 1.4 0l3.6-3.6a2 2 0 0 0 0-2.8l-3.5-3.5a2 2 0 0 0-2.8 0L9 12"/><path d="m13 11 2 2"/><path d="M3 10 7 6l3 3"/><path d="m21 14-4 4-3-3"/>',
  shield:'<path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  graduation:'<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>'
};
function uiIcon(name,cls=''){const p=UI_ICONS[name];return p?`<svg class="ui-icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${p}</svg>`:''}
const GLYPH_ICONS={'▦':'dashboard','▣':'folder','♙':'users','♟':'teacher','☷':'clipboard','⇧':'upload','⌂':'building','▤':'calendar','▥':'chart','⚙':'settings','◷':'clock','♜':'award','✓':'check','◈':'sparkle','✉':'mail','⇥':'enroll','↗':'upRight','→':'arrowRight','←':'arrowLeft','×':'x','⌕':'search','☰':'menu','⌘':'code','✳':'sparkle','↪':'corner','⌄':'chevron','⇩':'download','＋':'plus','●':'dot','↻':'refresh','✦':'star','♢':'diamond','▸':'play','⌁':'link','♧':'flag','◴':'clock','⊞':'dashboard','⌗':'dashboard','↺':'refresh','⇢':'arrowRight','➜':'arrowRight','✧':'sparkle','✎':'edit','✏':'edit','⋯':'dot','•••':'dot','▾':'chevron','▴':'chevron'};
function polishIcons(html){
  let out=String(html??'');
  Object.keys(GLYPH_ICONS).forEach(glyph=>{
    if(out.includes(glyph)) out=out.split(glyph).join(uiIcon(GLYPH_ICONS[glyph]));
  });
  return out;
}
function toast(title,detail='Ini hanya simulasi prototype; tidak ada data yang dikirim ke server.'){let r=document.getElementById('toastRoot');if(!r)return;r.innerHTML=polishIcons(`<div class="toast"><div class="toast-title">${esc(title)}</div><small>${esc(detail)}</small></div>`);clearTimeout(window._sertikomToastTimer);window._sertikomToastTimer=setTimeout(()=>r.innerHTML='',3300)}
function go(view){if(view==='register'){appState.registerStep=1;appState.registerDraft=null}appState.view=view;render();window.scrollTo(0,0)}
function loginAs(role){appState.role=role;appState.user=cloneDemo(users.find(u=>u.role===role));appState.activePage='overview';appState.search='';appState.view='app';render();let first=true;try{first=!sessionStorage.getItem('sertikom-first-'+role);if(first)sessionStorage.setItem('sertikom-first-'+role,'1')}catch(error){}if(first)setTimeout(()=>showPasswordModal(true),100)}
function logout(){appState.view='landing';appState.role=null;appState.user=null;appState.activePage='overview';appState.search='';render()}
function activeRole(){return roleInfo[appState.role]}
function roleMenu(){return activeRole().menu.map(group=>`<div class="nav-label">${group[0]}</div>${group[1].map(item=>`<button class="nav-item ${appState.activePage===item[0]?'active':''}" onclick="navigate('${item[0]}')"><span class="navicon">${item[1]}</span><span>${item[2]}</span>${item[0]==='industry'&&appState.role==='admin'&&appState.invitations.length?`<span class="nav-count">${appState.invitations.length}</span>`:''}</button>`).join('')}`).join('')}
function navigate(page){appState.activePage=page;appState.showMenu=false;render();window.scrollTo(0,0)}
function render(){const root=document.getElementById('root');if(!root)return;let html='';if(appState.view==='landing')html=landingPage();else if(appState.view==='login')html=loginPage();else if(appState.view==='register')html=registerPage();else if(appState.view==='catalog')html=programCatalogPublicPage();else if(appState.view==='programDetail')html=publicProgramDetailPage();else if(appState.view==='certificateVerify')html=publicCertificateVerificationPage();else if(appState.view==='app')html=appShell();else html=landingPage();root.innerHTML=polishIcons(html)}
restoreDemoState();
