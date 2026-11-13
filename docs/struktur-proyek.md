# Peta Struktur Proyek Sertikom

## Titik masuk HTML

- `index.html` — beranda publik dan titik awal alur normal.
- `presentasi.html` — menu pintas untuk membuka halaman yang akan didemonstrasikan.
- `pages/login.html` — halaman login akun demo.
- `pages/register.html` — simulasi pendaftaran sekolah, OTP, dan profil.
- `pages/admin.html` — langsung membuka dashboard Admin Sekolah.
- `pages/siswa.html` — langsung membuka dashboard Siswa.
- `pages/guru.html` — langsung membuka dashboard Guru.
- `pages/industri.html` — langsung membuka dashboard Mitra Industri.

Setiap file HTML memuat stylesheet dan file JavaScript bersama. Halaman khusus role menetapkan titik awal peran dan membuka dashboard tanpa dialog perubahan password pertama saat demo langsung. Konten dashboard dirender dari kode JavaScript bersama agar komponen tidak perlu disalin.

## Aset dan logika

| File | Fungsi |
|---|---|
| `assets/css/styles.css` | Warna, tipografi, layout, kartu, tabel, modal, status, responsivitas, dan fokus keyboard. |
| `assets/vendor/bootstrap.min.css` | Grid dan komponen dasar Bootstrap 5.3.3. |
| `assets/vendor/bootstrap.bundle.min.js` | JavaScript Bootstrap + Popper untuk komponen interaktif. |
| `assets/vendor/gsap.min.js`, `ScrollTrigger.min.js` | Animasi reveal hero/section dan pemicu scroll. |
| `assets/vendor/anime.min.js` | Animasi stroke SVG pada ikon standar. |
| `assets/vendor/motion.min.js` | Micro-interaction hover/tap dan reveal kartu dashboard. |
| `assets/img/*.svg` | Logo dan ilustrasi vektor orisinal (hero, sekolah, program, galeri) tanpa aset eksternal. |
| `assets/js/dummy-data.js` | Akun demo, data siswa/guru/industri, jadwal, ikon, dan judul menu. |
| `assets/js/core.js` | State aplikasi, data sesi, penyimpanan sementara, navigasi, login demo, toast, dan reset data. |
| `assets/js/public-pages.js` | Beranda, login dengan toggle password, wizard pendaftaran 4 langkah, katalog, detail program, dan verifikasi sertifikat. |
| `assets/js/dashboard-shell.js` | Kerangka dashboard, sidebar, header, kartu metrik, ringkasan per role, tabel siswa, dan routing halaman. |
| `assets/js/admin-pages.js` | Data siswa/guru, validasi import CSV, enrollment, undangan industri, sertifikat, pengaturan, jadwal, laporan, profil, dan ekspor CSV. |
| `assets/js/student-pages.js` | Program Saya, jadwal siswa, hasil asesmen, nilai, sertifikat contoh, dan ekspor CSV. |
| `assets/js/teacher-pages.js` | Daftar penilaian, pencatatan nilai, catatan asesmen, status kompetensi, laporan kelas, dan ekspor CSV. |
| `assets/js/industry-pages.js` | Pencarian talenta, detail kompetensi, pustaka materi, agenda kolaborasi, dan laporan industri. |
| `assets/js/product-pages.js` | Katalog dashboard, detail program, submission/penilaian, sertifikat, jadwal, dan nilai siswa. |
| `assets/js/actions.js` | Modal, tambah/edit data, pencarian global, notifikasi, reset password, dan aksi umum. |
| `assets/js/animations.js` | Integrasi GSAP/ScrollTrigger, Anime.js, Motion, cleanup, dan dukungan reduced motion. |
| `assets/js/init.js` | Inisialisasi halaman sesuai titik masuk HTML. |

## File contoh dan dokumentasi

- `contoh-import-siswa.csv` — contoh CSV siswa yang dapat diunggah.
- `contoh-import-guru.csv` — contoh CSV guru yang dapat diunggah.
- `docs/panduan-presentasi.md` — alur demo dan ide narasi presentasi.
- `docs/perubahan-uiux.md` — ringkasan arah visual dan fitur.
- `docs/laporan-akhir.md` — laporan audit, dependensi, pengujian, dan batasan.
- `README.md` — petunjuk menjalankan proyek, akun demo, fitur, serta batasan.

## Alur data demo

Data awal diinisialisasi dari `dummy-data.js` dan disalin menjadi state pada `core.js`. Aksi seperti menambahkan siswa, mencatat nilai, membuat undangan, atau membuat agenda mengubah state bersama sehingga perubahan dapat terlihat di halaman lain dalam sesi demo. Snapshot disimpan ke `sessionStorage` browser jika tersedia—bukan ke database.

## Aturan pengembangan

1. Ubah desain global di `assets/css/styles.css`.
2. Ubah akun dan data contoh awal di `assets/js/dummy-data.js`.
3. Ubah navigasi atau state sesi di `assets/js/core.js`.
4. Tempatkan fungsi sesuai area di file `*-pages.js`.
5. Gunakan penanda bahwa hasil yang tampil masih data dummy; jangan menerima data pribadi atau kredensial sungguhan.
6. Import yang didukung adalah CSV; file `.xlsx` perlu diekspor sebagai CSV UTF-8 terlebih dahulu.
