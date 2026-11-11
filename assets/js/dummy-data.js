/* Data dummy Sertikom — tidak menggunakan database */
const roleInfo={
 admin:{name:'Admin Sekolah',short:'Admin',initial:'AS',school:'SMK Teknologi Nusantara',menu:[['UTAMA',[['overview','▦','Dashboard Sekolah'],['students','♙','Data Siswa'],['teachers','♟','Data Guru'],['enrollments','⇥','Pendaftaran Peserta']]],['OPERASIONAL',[['programs','▣','Program Sertifikasi'],['submissions','☷','Tugas & Penilaian'],['certification','▤','Jadwal & Asesmen'],['industry','⌂','Mitra Industri'],['invitations','✉','Undangan Industri'],['certificates','♜','Sertifikat'],['import','⇧','Import Data']]],['ANALITIK',[['reports','▥','Laporan']]],['AKUN',[['settings','⚙','Pengaturan'],['profile','▤','Profil Sekolah']]]]},
 student:{name:'Siswa',short:'Siswa',initial:'AF',school:'SMK Teknologi Nusantara',menu:[['RUANG BELAJAR',[['overview','▦','Dashboard'],['programs','▣','Katalog Program'],['myPrograms','⇥','Program Saya'],['mySchedule','▤','Tugas & Ujian'],['myScores','◷','Nilai'],['myCertificates','♜','Sertifikat']]],['AKUN',[['profile','♙','Profil Saya']]]]},
 teacher:{name:'Guru',short:'Guru',initial:'DW',school:'SMK Teknologi Nusantara',menu:[['PENGAJARAN',[['overview','▦','Dashboard'],['programs','▣','Program'],['students','♙','Daftar Siswa'],['submissions','☷','Tugas & Ujian'],['assessments','✓','Penilaian'],['certification','▤','Jadwal Asesmen']]],['ANALITIK',[['reports','▥','Laporan']]],['AKUN',[['profile','♟','Profil Saya']]]]},
 industry:{name:'Mitra Industri',short:'Industri',initial:'MI',school:'PT Digital Kreasi Indonesia',menu:[['MITRA INDUSTRI',[['overview','▦','Dashboard'],['collaboration','◈','Program Kolaborasi'],['submissions','☷','Penilaian Submission'],['talent','♙','Pencarian Talenta'],['competency','◈','Kompetensi Siswa'],['materials','▤','Materi & Agenda']]],['ANALITIK',[['reports','▥','Laporan']]],['AKUN',[['profile','⌂','Profil Perusahaan']]]]}
};
const users=[
 {username:'admin',password:'demo123',role:'admin',name:'Nadia Putri',email:'admin@smkteknusantara.sch.id',initial:'NP'},
 {username:'siswa',password:'demo123',role:'student',name:'Ahmad Fauzi',email:'ahmad@smkteknusantara.sch.id',initial:'AF'},
 {username:'guru',password:'demo123',role:'teacher',name:'Dewi Wulandari',email:'dewi@smkteknusantara.sch.id',initial:'DW'},
 {username:'industri',password:'demo123',role:'industry',name:'Andi Saputra',email:'andi@digitalkreasi.co.id',initial:'AS'}
];
const studentSeed=[
 {id:'SRT-001',name:'Ahmad Fauzi',nisn:'0061245678',major:'Rekayasa Perangkat Lunak',grade:'XII RPL 1',status:'Aktif',email:'ahmad@smkteknusantara.sch.id',score:86,cert:'Terverifikasi'},
 {id:'SRT-002',name:'Siti Nurlaila',nisn:'0061245681',major:'Desain Komunikasi Visual',grade:'XII DKV 1',status:'Aktif',email:'siti@smkteknusantara.sch.id',score:92,cert:'Terverifikasi'},
 {id:'SRT-003',name:'Budi Santoso',nisn:'0061245692',major:'Rekayasa Perangkat Lunak',grade:'XII RPL 2',status:'Aktif',email:'budi@smkteknusantara.sch.id',score:0,cert:'Belum tersedia'},
 {id:'SRT-004',name:'Rina Amelia',nisn:'0061245712',major:'Teknik Jaringan Komputer',grade:'XII TKJ 1',status:'Menunggu',email:'rina@smkteknusantara.sch.id',score:74,cert:'Diproses'},
 {id:'SRT-005',name:'Dimas Saputra',nisn:'0061245730',major:'Teknik Jaringan Komputer',grade:'XII TKJ 2',status:'Aktif',email:'dimas@smkteknusantara.sch.id',score:79,cert:'Terverifikasi'},
 {id:'SRT-006',name:'Alya Rahma',nisn:'0061245744',major:'Rekayasa Perangkat Lunak',grade:'XI RPL 1',status:'Aktif',email:'alya@smkteknusantara.sch.id',score:91,cert:'Belum tersedia'},
 {id:'SRT-007',name:'Fajar Setiawan',nisn:'0061245761',major:'Desain Komunikasi Visual',grade:'XII DKV 1',status:'Aktif',email:'fajar@smkteknusantara.sch.id',score:88,cert:'Terverifikasi'}
];
const teacherSeed=[
 {id:'GR-001',name:'Dewi Wulandari, S.Kom.',email:'dewi@smkteknusantara.sch.id',subject:'Web Development',count:32,status:'Aktif'},
 {id:'GR-002',name:'Budi Santoso, S.T.',email:'budi.guru@smkteknusantara.sch.id',subject:'Administrasi Jaringan',count:28,status:'Aktif'},
 {id:'GR-003',name:'Rina Puspita, S.Ds.',email:'rina.guru@smkteknusantara.sch.id',subject:'UI/UX Design',count:26,status:'Aktif'},
 {id:'GR-004',name:'Arief Nugroho, S.Kom.',email:'arief@smkteknusantara.sch.id',subject:'Data Analytics',count:30,status:'Menunggu'}
];
const industrySeed=[
 {name:'PT Digital Kreasi Indonesia',sector:'Teknologi Informasi',contact:'Andi Saputra',email:'andi@digitalkreasi.co.id',status:'Terverifikasi',access:'Mitra utama'},
 {name:'PT Kreatif Teknologi',sector:'Desain & Kreatif',contact:'Maya Kirana',email:'maya@kreatifteknologi.id',status:'Menunggu',access:'Undangan terkirim'},
 {name:'PT Solusi Data Nusantara',sector:'Data Analytics',contact:'Fikri Mahendra',email:'fikri@solusidatanusantara.id',status:'Terverifikasi',access:'Mitra aktif'}
];
const schedules=[
 {title:'Web Development',date:'12 Nov 2026',time:'08.00–12.00 WIB',place:'Lab Komputer 1',quota:32,kind:'Pemrograman',status:'Terjadwal'},
 {title:'UI/UX Design',date:'18 Nov 2026',time:'09.00–13.00 WIB',place:'Studio Kreatif',quota:28,kind:'Desain',status:'Pendaftaran'},
 {title:'Data Analytics',date:'25 Nov 2026',time:'08.30–11.30 WIB',place:'Lab Data',quota:21,kind:'Data & Analitik',status:'Terjadwal'}
];
const programCategories=['Semua','TKJ','RPL','DKV','Data & Analitik','Pemasaran'];
const programSeed=[
 {id:'PRG-001',title:'Web Development',category:'RPL',provider:'PT Digital Kreasi Indonesia',summary:'Bangun website modern dari fondasi HTML, CSS, JavaScript hingga deployment.',participants:120,modules:4,minScore:75,duration:'3 Bulan',status:'Aktif',accent:'blue',level:'Menengah',certification:'Junior Web Developer',schedule:'12 Nov 2026 · Lab Komputer 1',image:'assets/img/program-web.svg',materials:['Pengembangan HTML, CSS, dan JavaScript','Responsive Web Design','Framework dan Deployment'],tasks:['Membuat Landing Page','Uji Responsivitas','Final Project Website'],requirements:['Siswa aktif kelas X–XII RPL','Memiliki laptop pribadi','Menyelesaikan pre-test dasar pemrograman']},
 {id:'PRG-002',title:'UI/UX Design',category:'DKV',provider:'PT Kreatif Teknologi',summary:'Pelajari riset pengguna, wireframe, prototipe, dan evaluasi pengalaman pengguna.',participants:96,modules:4,minScore:75,duration:'2 Bulan',status:'Aktif',accent:'sky',level:'Dasar–Menengah',certification:'Junior UI/UX Designer',schedule:'18 Nov 2026 · Studio Kreatif',image:'assets/img/program-design.svg',materials:['Dasar UX Research','Wireframe dan Design System','Prototype & Usability Test'],tasks:['User Persona','Prototype Mobile','Uji Kegunaan'],requirements:['Siswa aktif jurusan DKV','Mengenal tools desain vektor','Memiliki portofolio karya awal']},
 {id:'PRG-003',title:'Administrasi Jaringan',category:'TKJ',provider:'PT Jaringan Cerdas',summary:'Pelajari topologi jaringan, konfigurasi perangkat, keamanan, dan troubleshooting.',participants:84,modules:4,minScore:75,duration:'3 Bulan',status:'Aktif',accent:'cyan',level:'Menengah',certification:'Junior Network Administrator',schedule:'25 Nov 2026 · Lab Jaringan',image:'assets/img/program-network.svg',materials:['Dasar TCP/IP','Konfigurasi Switch & Router','Keamanan Jaringan'],tasks:['Dokumentasi Topologi','Konfigurasi VLAN','Audit Keamanan'],requirements:['Siswa aktif jurusan TKJ','Memahami dasar IP address','Mengikuti induksi laboratorium']},
 {id:'PRG-004',title:'Data Analytics',category:'Data & Analitik',provider:'PT Solusi Data Nusantara',summary:'Olah data, buat visualisasi, dan sampaikan insight dengan dashboard analitik.',participants:76,modules:3,minScore:70,duration:'2 Bulan',status:'Aktif',accent:'slate',level:'Dasar',certification:'Data Analyst Associate',schedule:'2 Des 2026 · Lab Data',image:'assets/img/program-data.svg',materials:['Pembersihan Data','Analisis Spreadsheet','Visualisasi Dashboard'],tasks:['Membersihkan Dataset','Laporan Insight','Dashboard Analitik'],requirements:['Siswa aktif kelas XI–XII semua jurusan','Menguasai spreadsheet dasar','Lolos kuis literasi data']},
 {id:'PRG-005',title:'Digital Marketing',category:'Pemasaran',provider:'PT Media Kreatif',summary:'Rancang kampanye digital, konten, dan evaluasi performa pemasaran.',participants:64,modules:4,minScore:70,duration:'6 Minggu',status:'Aktif',accent:'amber',level:'Dasar',certification:'Digital Marketing Associate',schedule:'9 Des 2026 · Studio Media',image:'assets/img/program-marketing.svg',materials:['Strategi Konten','Search & Social Ads','Analitik Kampanye'],tasks:['Content Calendar','Campaign Brief','Laporan Performa'],requirements:['Siswa aktif jurusan DKV atau RPL','Memiliki akun media sosial profesional','Menyusun ringkasan ide kampanye']},
 {id:'PRG-006',title:'Cloud & DevOps Dasar',category:'TKJ',provider:'Sertikom · Demo',summary:'Kenali dasar komputasi awan, container, dan alur deployment aplikasi modern.',participants:58,modules:3,minScore:70,duration:'4 Minggu',status:'Pendaftaran',accent:'cyan',level:'Dasar',certification:'Cloud Foundations',schedule:'16 Des 2026 · Lab Cloud',image:'assets/img/program-cloud.svg',materials:['Pengenalan Cloud','Container & Deployment','Monitoring Dasar'],tasks:['Deploy Aplikasi Statis','Dokumentasi Pipeline','Presentasi Arsitektur'],requirements:['Siswa aktif jurusan TKJ atau RPL','Memahami dasar command line','Menyetujui kode etik demo']}
];
const gallerySeed=[
 {title:'Sertikom Campus Portal',student:'Ahmad Fauzi',major:'RPL',program:'Web Development',image:'assets/img/program-web.svg',note:'Portal pendaftaran program dan pemantauan progres belajar.'},
 {title:'Arctic Design System',student:'Siti Nurlaila',major:'DKV',program:'UI/UX Design',image:'assets/img/program-design.svg',note:'Sistem desain antarmuka dengan komponen kaca dan gradasi biru.'},
 {title:'Topologi Sekolah Terpadu',student:'Dimas Saputra',major:'TKJ',program:'Administrasi Jaringan',image:'assets/img/program-network.svg',note:'Dokumentasi topologi, VLAN, dan audit keamanan laboratorium.'},
 {title:'Dashboard Data Sekolah',student:'Alya Rahma',major:'RPL',program:'Data Analytics',image:'assets/img/program-data.svg',note:'Visualisasi kehadiran, nilai, dan capaian kompetensi siswa.'},
 {title:'Kampanye Literasi Digital',student:'Fajar Setiawan',major:'DKV',program:'Digital Marketing',image:'assets/img/program-marketing.svg',note:'Rencana kampanye media sosial untuk gerakan literasi digital.'},
 {title:'Cloud Deployment Lab',student:'Rina Amelia',major:'TKJ',program:'Cloud & DevOps Dasar',image:'assets/img/program-cloud.svg',note:'Deployment aplikasi statis dengan pipeline dan monitoring dasar.'}
];
const enrollmentSeed=[
 {id:'ENR-001',studentId:'SRT-001',student:'Ahmad Fauzi',programId:'PRG-001',program:'Web Development',date:'02 Sep 2026',status:'Aktif',progress:68,source:'Pendaftaran mandiri'},
 {id:'ENR-002',studentId:'SRT-001',student:'Ahmad Fauzi',programId:'PRG-002',program:'UI/UX Design',date:'08 Sep 2026',status:'Aktif',progress:42,source:'Rekomendasi guru'},
 {id:'ENR-003',studentId:'SRT-001',student:'Ahmad Fauzi',programId:'PRG-006',program:'Cloud & DevOps Dasar',date:'20 Okt 2026',status:'Menunggu Verifikasi',progress:12,source:'Pendaftaran mandiri'},
 {id:'ENR-004',studentId:'SRT-002',student:'Siti Nurlaila',programId:'PRG-002',program:'UI/UX Design',date:'05 Sep 2026',status:'Selesai',progress:100,source:'Rekomendasi guru'},
 {id:'ENR-005',studentId:'SRT-003',student:'Budi Santoso',programId:'PRG-001',program:'Web Development',date:'07 Sep 2026',status:'Aktif',progress:55,source:'Pendaftaran mandiri'},
 {id:'ENR-006',studentId:'SRT-004',student:'Rina Amelia',programId:'PRG-003',program:'Administrasi Jaringan',date:'10 Sep 2026',status:'Aktif',progress:61,source:'Pendaftaran mandiri'},
 {id:'ENR-007',studentId:'SRT-005',student:'Dimas Saputra',programId:'PRG-003',program:'Administrasi Jaringan',date:'11 Sep 2026',status:'Selesai',progress:100,source:'Rekomendasi guru'},
 {id:'ENR-008',studentId:'SRT-007',student:'Fajar Setiawan',programId:'PRG-005',program:'Digital Marketing',date:'14 Sep 2026',status:'Aktif',progress:73,source:'Pendaftaran mandiri'},
 {id:'ENR-009',studentId:'SRT-006',student:'Alya Rahma',programId:'PRG-004',program:'Data Analytics',date:'18 Sep 2026',status:'Menunggu Verifikasi',progress:8,source:'Pendaftaran mandiri'}
];
const submissionSeed=[
 {id:'SUB-001',studentId:'SRT-001',student:'Ahmad Fauzi',programId:'PRG-001',program:'Web Development',task:'Landing Page',submitted:'24 Okt 2026',score:86,status:'Lulus'},
 {id:'SUB-002',studentId:'SRT-002',student:'Siti Nurlaila',programId:'PRG-002',program:'UI/UX Design',task:'Prototype Mobile',submitted:'24 Okt 2026',score:92,status:'Lulus'},
 {id:'SUB-003',studentId:'SRT-003',student:'Budi Santoso',programId:'PRG-001',program:'Web Development',task:'API Integration',submitted:'25 Okt 2026',score:null,status:'Perlu Dinilai'},
 {id:'SUB-004',studentId:'SRT-004',student:'Rina Amelia',programId:'PRG-005',program:'Administrasi Jaringan',task:'Konfigurasi VLAN',submitted:'26 Okt 2026',score:74,status:'Perbaikan'},
 {id:'SUB-005',studentId:'SRT-005',student:'Dimas Saputra',programId:'PRG-005',program:'Administrasi Jaringan',task:'Dokumentasi Topologi',submitted:'26 Okt 2026',score:79,status:'Lulus'},
 {id:'SUB-006',studentId:'SRT-007',student:'Fajar Setiawan',programId:'PRG-002',program:'UI/UX Design',task:'User Persona',submitted:'27 Okt 2026',score:null,status:'Perlu Dinilai'}
];
const iconMap={'overview':'▦','students':'♙','teachers':'♟','import':'⇧','industry':'⌂','certification':'▤','reports':'▥','profile':'⚙','mySchedule':'▤','myScores':'◷','myCertificates':'♜','assessments':'✓','talent':'♙','competency':'◈','materials':'▤','programs':'▣','programDetail':'▤','submissions':'☷','certificateDetail':'♜','enrollments':'⇥','invitations':'✉','certificates':'♜','settings':'⚙','myPrograms':'⇥','collaboration':'◈'};
const pageTitles={overview:'Dashboard',students:'Data Siswa',teachers:'Data Guru',import:'Import Data Massal',industry:'Mitra Industri',certification:'Jadwal & Asesmen',reports:'Laporan',profile:'Profil',mySchedule:'Tugas & Ujian',myScores:'Nilai',myCertificates:'Sertifikat',assessments:'Penilaian',talent:'Pencarian Talenta',competency:'Kompetensi Siswa',materials:'Materi & Agenda',programs:'Program Sertifikasi',programDetail:'Detail Program',submissions:'Tugas & Penilaian',certificateDetail:'Detail Sertifikat',enrollments:'Pendaftaran Peserta',invitations:'Undangan Industri',certificates:'Sertifikat',settings:'Pengaturan',myPrograms:'Program Saya',collaboration:'Program Kolaborasi'};
