# Laporan Akhir Redesign Sertikom

## 1. Ringkasan audit

- Proyek adalah prototype frontend statis: HTML, CSS, JavaScript, dan data dummy. Tidak ada database, backend, API, autentikasi produksi, atau pengiriman email.
- Titik masuk: 12 file HTML (landing, presentasi, login, register, katalog, detail program, verifikasi sertifikat, empat dashboard peran, dan submissions).
- Logika aplikasi terdiri dari 12 file JavaScript di `assets/js/`, satu stylesheet utama di `assets/css/styles.css`, dan 9 ilustrasi SVG lokal di `assets/img/`.
- Seluruh fitur lama dipertahankan: login per peran, CRUD data demo, import CSV, submission/penilaian, sertifikat, jadwal, laporan, pengaturan, dan reset data.
- Tidak ada foto manusia, gambar generatif, atau stok eksternal. Seluruh ilustrasi memakai SVG vektor orisinal.
- Library pihak ketiga dimuat secara lokal dari `assets/vendor/`, bukan CDN, sehingga prototype tetap berjalan tanpa koneksi internet (font memiliki fallback sistem).

## 2. Perubahan UI/UX

- Tema baru **Arctic Glass / Liquid Glass**: palet ice-blue, putih, navy, permukaan kaca, blur lembut, dan glow biru.
- Token warna: Primary `#1769E8`, Strong `#0F55C7`, Secondary `#4FB8F5`, Cyan `#20B9D8`, Ice `#EAF5FF`, Navy `#12345B`, Text `#18385F`, Muted `#58708E`.
- Tipografi: Manrope untuk heading dan Inter untuk teks isi, dengan fallback sistem.
- Landing page memiliki hero baru, standar global, galeri karya siswa, tracker pembelajaran, contoh sertifikat, alur kolaborasi industri, CTA, dan footer dengan kredit ilustrasi.
- Dashboard memakai sidebar per peran, topbar, kartu metrik kaca, panel, tabel, status, dan modal yang konsisten.
- Grid standar global dan galeri memakai Bootstrap grid; komponen lain tetap memakai CSS kustom agar identitas visual terjaga.
- Layout autentikasi beralih ke satu kolom pada lebar `<=900px`, sehingga tidak ada overflow pada tablet 768px.
- Kontras teks muted dinaikkan dan label aksesibel ditambahkan pada tombol ikon serta filter submission.

## 3. Halaman yang diperbarui

- `index.html`
- `presentasi.html`
- `pages/login.html`
- `pages/register.html`
- `pages/catalog.html`
- `pages/program-detail.html`
- `pages/verifikasi-sertifikat.html`
- `pages/admin.html`
- `pages/siswa.html`
- `pages/guru.html`
- `pages/industri.html`
- `pages/submissions.html`

## 4. Fitur yang ditambah atau diperbaiki

- Wizard pendaftaran sekolah 4 langkah: data sekolah, data Admin, verifikasi OTP demo `123456`, dan ringkasan.
- Pendaftaran program membuat data enrollment baru berstatus `Menunggu Verifikasi` dan tampil di Program Saya.
- Admin: verifikasi/tolak enrollment, detail pendaftaran, undangan industri, sertifikat peserta, pengaturan sekolah, dan export CSV.
- Siswa: Program Saya dengan progres, status pendaftaran, lanjut belajar, jadwal, nilai, dan detail sertifikat.
- Guru: daftar siswa, submission, penilaian, jadwal asesmen, dan laporan kelas.
- Industri: pembatasan akses talenta, detail profil, agenda kolaborasi, penilaian submission, dan laporan industri.
- Toggle tampil/sembunyikan password pada login dan pendaftaran.
- Modal reset password dan notifikasi memakai ikon yang dipoles secara konsisten.
- Bug jadwal/nilai siswa yang sebelumnya terpaku pada `SRT-001` diperbaiki agar mengikuti siswa aktif.
- Warna popup cetak sertifikat diperbarui dari orange ke palet Arctic.
- Seluruh referensi foto stok eksternal diganti SVG lokal.
- Dokumentasi presentasi, struktur proyek, kredit gambar, dan ringkasan UI/UX diperbarui.

## 5. Dependensi dan alasan

| Dependensi | Versi | Lokasi | Alasan |
|---|---|---|---|
| Bootstrap | 5.3.3 | `assets/vendor/bootstrap.min.css`, `bootstrap.bundle.min.js` | Grid responsif dan komponen dasar; bundle sudah termasuk Popper. |
| GSAP | 3.12.5 | `assets/vendor/gsap.min.js` | Animasi reveal hero dan section dengan kontrol timeline. |
| ScrollTrigger | 3.12.5 | `assets/vendor/ScrollTrigger.min.js` | Memicu animasi saat section masuk viewport. |
| Anime.js | 3.2.2 | `assets/vendor/anime.min.js` | Animasi stroke SVG pada ikon standar. |
| Motion | 11.18.2 | `assets/vendor/motion.min.js` | Micro-interaction hover/tap dan reveal kartu dashboard. |
| Google Fonts | Manrope, Inter | `@import` di CSS | Tipografi utama; fallback sistem dipakai saat offline. |

Semua library JavaScript/CSS pihak ketiga berlisensi MIT. Font Google Fonts berlisensi SIL Open Font License. Tidak ada dependensi build atau package manager.

## 6. Animasi per library

- **GSAP + ScrollTrigger**: reveal hero, section landing, dan elemen dashboard saat masuk viewport.
- **Anime.js**: gambar garis (stroke draw) pada ikon SVG standar global.
- **Motion**: hover/tap pada kartu dan tombol, serta reveal kartu dashboard dengan `inView`.
- **Reduced motion**: seluruh animasi dipercepat/dimatikan saat `prefers-reduced-motion: reduce`.
- Animasi dibersihkan dan diinisialisasi ulang setiap `render()` melalui `window.SertikomMotion.refresh()`.

## 7. Hasil uji responsif

Pengujian dilakukan pada 11 halaman utama dengan 7 viewport: 360x800, 390x844, 768x1024, 1024x768, 1280x800, 1440x900, dan 1920x1080.

- 77 kombinasi halaman/viewport diuji.
- Tidak ada horizontal overflow tingkat halaman.
- Tidak ada error console JavaScript.
- Login dan register tidak lagi overflow pada 768x1024 setelah breakpoint autentikasi diubah ke `<=900px`.
- Elemen yang sengaja berada di luar viewport: orbit dekoratif hero, sidebar off-canvas mobile, chip filter katalog yang dapat di-scroll horizontal, dan tabel lebar di dalam wrapper scroll.
- Bootstrap, GSAP, Anime.js, Motion, dan `SertikomMotion` terdeteksi aktif di seluruh halaman yang memuatnya.

## 8. Hasil uji fitur per peran

- 45 pemeriksaan render halaman lolos tanpa `FAIL`/`WARN`.
- 5 pemeriksaan aksi lolos: toggle password, modal, penyelesaian registrasi, pendaftaran program baru, dan pencegahan pendaftaran ganda.
- 34 pemeriksaan interaksi browser lolos: login empat peran, toggle password, modal reset, sidebar mobile, navigasi Admin/Siswa/Guru/Industri, wizard registrasi 4 langkah, pencarian/filter katalog, dan verifikasi sertifikat valid/tidak valid.
- Audit aksesibilitas axe-core 4.10.2 pada 12 halaman dengan tag WCAG 2 A/AA: 0 violation.

## 9. File yang berubah

- `index.html`, `presentasi.html`, dan seluruh file di `pages/`.
- `assets/css/styles.css`.
- `assets/js/dummy-data.js`, `core.js`, `public-pages.js`, `dashboard-shell.js`, `admin-pages.js`, `student-pages.js`, `teacher-pages.js`, `industry-pages.js`, `product-pages.js`, `actions.js`, dan `animations.js`.
- `assets/vendor/bootstrap.min.css`, `bootstrap.bundle.min.js`, `gsap.min.js`, `ScrollTrigger.min.js`, `anime.min.js`, `motion.min.js`.
- `assets/img/*.svg`.
- `README.md`, `docs/struktur-proyek.md`, `docs/perubahan-uiux.md`, `docs/credits-gambar.md`, `docs/panduan-presentasi.md`, dan `docs/laporan-akhir.md`.

## 10. Cara menjalankan dan akun demo

1. Buka `index.html` untuk landing page publik.
2. Buka `presentasi.html` untuk menu demonstrasi.
3. Atau buka langsung halaman di `pages/`.
4. Password semua akun demo: `demo123`.

| Peran | Username |
|---|---|
| Admin Sekolah | `admin` |
| Siswa | `siswa` |
| Guru | `guru` |
| Mitra Industri | `industri` |

Kode OTP registrasi demo: `123456`.

## 11. Sumber aset dan lisensi

- Ilustrasi: SVG vektor orisinal di `assets/img/`, dibuat khusus untuk prototype ini.
- Tidak ada foto manusia, gambar generatif, atau aset stok eksternal.
- Logo sekolah, LSP, BNSP, dan mitra masih placeholder teks dan harus diganti dengan aset resmi sebelum publikasi.
- Bootstrap, GSAP, ScrollTrigger, Anime.js, dan Motion: MIT.
- Manrope dan Inter: SIL Open Font License.

## 12. Batasan dan sisa bug

- Data hanya tersimpan di `sessionStorage`; tidak tersinkronisasi antar perangkat/tab dan dapat hilang saat sesi ditutup atau data demo direset.
- Cetak sertifikat memakai dialog print browser; perilaku tergantung browser dan pengaturan pengguna.
- Pop-up cetak dapat diblokir browser; prototype menampilkan toast jika pop-up diblokir.
- Pengujian dilakukan dengan Chrome headless dan audit DOM/aksesibilitas, bukan pengujian visual manual di perangkat fisik.
- Tidak ditemukan bug fungsional yang diketahui pada saat laporan ini dibuat.
