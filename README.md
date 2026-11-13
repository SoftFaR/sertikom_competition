# Website Sertikom — Prototype UI/UX Sertifikasi

Prototype frontend Sertikom dengan tema **Arctic Glass / Liquid Glass**: palet ice-blue dan putih, permukaan kaca transparan, glow biru lembut, sidebar dashboard, kartu program, detail pembelajaran/asesmen, sertifikat, dan tabel penilaian submission.

> **Prototype ini menggunakan HTML, CSS, JavaScript, dan data dummy saja.** Tidak ada database, backend, API, autentikasi produksi, atau email sungguhan. Jangan masukkan data siswa, nilai, NISN, atau kredensial asli.

## Menjalankan

1. Ekstrak ZIP proyek.
2. Buka `sertikom_prototype_terstruktur/index.html` untuk landing page publik.
3. Buka `presentasi.html` untuk menu demonstrasi, atau gunakan halaman langsung pada folder `pages/`.
4. Seluruh ilustrasi memakai SVG lokal di `assets/img/`, sehingga tampilan tetap utuh tanpa koneksi internet. UI dan data dummy berjalan tanpa layanan backend.

## Halaman yang tersedia

- `index.html` — Landing Page publik.
- `pages/login.html` — login demo dengan pemilih role.
- `pages/register.html` — pendaftaran sekolah dan simulasi OTP `123456`.
- `pages/catalog.html` — katalog program sertifikasi.
- `pages/program-detail.html` — detail program, materi, tugas, persyaratan, dan aksi daftar demo.
- `pages/verifikasi-sertifikat.html` — pencarian nomor sertifikat demo.
- `pages/admin.html` — dashboard Admin Sekolah.
- `pages/siswa.html` — dashboard Siswa.
- `pages/guru.html` — dashboard Guru.
- `pages/industri.html` — dashboard Mitra Industri.
- `pages/submissions.html` — daftar submission dan penilaian demo untuk peran Industri.

## Akun demo

Password seluruh akun: `demo123`.

| Peran | Username | Fungsi utama |
|---|---|---|
| Admin Sekolah | `admin` | Program, data siswa/guru, import CSV, jadwal, mitra, laporan |
| Siswa | `siswa` | Program yang diikuti, tugas/ujian, nilai, sertifikat |
| Guru | `guru` | Daftar siswa, submission, penilaian, jadwal asesmen |
| Mitra Industri | `industri` | Tinjau submission, pencarian talenta, kompetensi, kolaborasi |

## Fitur prototype

### Landing dan katalog
- Landing page berisi hero, benefit ribbon, program unggulan, standar global, galeri karya siswa, logo/institusi placeholder, statistik, fitur tracker dan sertifikat, manfaat, CTA, dan footer.
- Katalog program memiliki pencarian dan filter TKJ/RPL/DKV/Data & Analitik/Pemasaran.
- Detail program menampilkan penyelenggara, durasi, modul, peserta, ambang nilai, materi, tugas/ujian, sertifikasi & jadwal, dan persyaratan.
- Pendaftaran program membuat data enrollment berstatus `Menunggu Verifikasi` dan tampil di Program Saya.

### Dashboard Admin Sekolah
- Ringkasan status program, jumlah siswa/guru, submission, dan jadwal.
- Pengelolaan siswa/guru, pencarian, tambah/edit/hapus, export CSV.
- Import CSV dengan validasi, pratinjau, dan konfirmasi.
- Program sertifikasi: tambah, edit, dan hapus program dummy.
- Pendaftaran peserta: verifikasi/tolak enrollment, detail, dan export CSV.
- Undangan mitra, sertifikat peserta, pengaturan sekolah, laporan, dan profil.

### Dashboard Siswa
- Program Saya berisi progres, status pendaftaran, lanjut belajar, dan export CSV.
- Tugas/ujian, nilai, sertifikat, dan detail dokumen contoh.
- Pendaftaran program membuat enrollment baru selama sesi.

### Dashboard Guru dan Mitra Industri
- Daftar siswa dan program, submission yang menunggu penilaian, nilai, status lulus/perbaikan, dan ringkasan progres.
- Input penilaian pada submission memperbarui skor siswa, status, aktivitas, dan ringkasan dashboard di sesi yang sama.
- Guru memiliki halaman laporan kelas; mitra dapat menjelajahi talenta, mengelola agenda kolaborasi, dan melihat laporan industri.

### Sertifikat
- Tampilan sertifikat kompetensi demo, detail nomor dokumen, cetak/simpan melalui dialog print browser, dan halaman pencarian/verifikasi nomor.
- Sertifikat bertanda jelas sebagai dokumen simulasi, bukan bukti sertifikasi resmi.

## Import data

Fitur import membaca **CSV**, bukan file Excel `.xlsx` secara langsung. Simpan template Excel sebagai CSV UTF-8 terlebih dahulu. File dibaca lokal oleh browser dan tidak diunggah ke server.

## Penyimpanan data sesi

Perubahan program, penilaian, submission, siswa, jadwal, dan beberapa data demo tersimpan sementara di `sessionStorage` jika tersedia. Data tidak tersinkronisasi antar perangkat dan dapat hilang setelah sesi browser ditutup atau data demo direset.

## Visual dan gambar

Palet utama: ice-blue, putih, navy, dan glow biru dengan permukaan kaca (glassmorphism). Tidak digunakan gambar manusia, gambar generatif, atau stok eksternal; seluruh ilustrasi adalah SVG vektor orisinal di `assets/img/`. Lihat `docs/credits-gambar.md`. Logo institusi memakai placeholder dan belum boleh dianggap sebagai logo mitra resmi.

Laporan audit, dependensi, hasil pengujian responsif/aksesibilitas, dan batasan tersedia di `docs/laporan-akhir.md`.

## Dependensi lokal

- Bootstrap 5.3.3 untuk grid dan komponen dasar.
- GSAP 3.12.5 + ScrollTrigger untuk animasi reveal.
- Anime.js 3.2.2 untuk animasi SVG.
- Motion 11.18.2 untuk micro-interaction.
- Semua library dimuat dari `assets/vendor/`, bukan CDN. Detail versi, alasan, dan hasil pengujian ada di `docs/laporan-akhir.md`.

## Struktur utama

```text
sertikom_prototype_terstruktur/
├── index.html
├── presentasi.html
├── contoh-import-guru.csv
├── contoh-import-siswa.csv
├── pages/
│   ├── login.html
│   ├── register.html
│   ├── catalog.html
│   ├── program-detail.html
│   ├── verifikasi-sertifikat.html
│   ├── admin.html
│   ├── siswa.html
│   ├── guru.html
│   ├── industri.html
│   └── submissions.html
├── assets/
│   ├── css/styles.css
│   ├── img/*.svg
│   ├── vendor/
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.bundle.min.js
│   │   ├── gsap.min.js
│   │   ├── ScrollTrigger.min.js
│   │   ├── anime.min.js
│   │   └── motion.min.js
│   └── js/
│       ├── dummy-data.js
│       ├── core.js
│       ├── public-pages.js
│       ├── dashboard-shell.js
│       ├── admin-pages.js
│       ├── student-pages.js
│       ├── teacher-pages.js
│       ├── industry-pages.js
│       ├── actions.js
│       ├── product-pages.js
│       ├── animations.js
│       └── init.js
└── docs/
    ├── credits-gambar.md
    ├── struktur-proyek.md
    ├── perubahan-uiux.md
    ├── panduan-presentasi.md
    └── laporan-akhir.md
```
