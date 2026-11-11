# Panduan Presentasi Prototype Website Sertikom

Durasi yang disarankan: 7–10 menit. Gunakan akun demo dan jelaskan bahwa sistem belum terhubung ke database maupun layanan eksternal.

## 1. Siapkan demo

1. Ekstrak folder proyek.
2. Buka `presentasi.html` di Chrome atau Edge. Untuk menampilkan halaman secara langsung, file role juga dapat dibuka dari menu presentasi.
3. Pilih Beranda atau langsung ke dashboard yang ingin diperlihatkan.
4. Password demo seluruh akun adalah `demo123`; OTP pendaftaran demo adalah `123456`.
5. Registrasi sekolah terdiri dari 4 langkah: data sekolah, data Admin, verifikasi OTP, dan ringkasan.

## 2. Urutan demonstrasi

### A. Beranda — `index.html`
Perkenalkan tujuan Sertikom dan empat peran: Admin Sekolah, Siswa, Guru, dan Mitra Industri. Tunjukkan tombol Masuk dan Daftar Sekolah.

### B. Admin Sekolah — `pages/admin.html`
1. Tunjukkan ringkasan siswa, guru aktif, mitra, dan tingkat kompeten.
2. Buka Data Siswa. Coba cari siswa, tambah data dummy, buka detail, lalu edit data.
3. Buka Import Data. Unggah `docs/contoh-import-siswa.csv`, klik **Validasi & pratinjau**, periksa hasil, lalu klik **Import baris valid**. Tunjukkan bahwa data baru masuk ke daftar siswa.
4. Buka Mitra Industri. Buat undangan demo, klik **Simulasikan pendaftaran**, isi nama perwakilan, kirim pendaftaran, lalu kembali ke daftar dan setujui mitra.
5. Buka Pendaftaran Peserta. Verifikasi salah satu enrollment berstatus **Menunggu Verifikasi**, lalu buka detail dan ekspor CSV.
6. Buka Sertifikat untuk melihat daftar dokumen dan preview sertifikat peserta.
7. Buka Sertifikasi & Jadwal. Tambah jadwal dan ubah status untuk menunjukkan respons UI.
8. Buka Pengaturan untuk menunjukkan preferensi dan reset data demo, lalu buka Laporan untuk melihat metrik dan aktivitas yang mengikuti data sesi.

### C. Guru — `pages/guru.html`
Tunjukkan daftar siswa dalam mode baca. Buka Penilaian, pilih siswa, masukkan nilai dan catatan, lalu simpan. Tekankan bahwa nilai demo akan mengubah status kompetensi siswa.

### D. Siswa — `pages/siswa.html`
Buka Program Saya untuk menunjukkan progres, status pendaftaran, dan tombol lanjut belajar. Buka Nilai & Hasil untuk menunjukkan dampak input nilai Guru. Buka Sertifikat untuk melihat contoh dokumen yang diberi label demo, lalu tunjukkan jadwal.

### E. Mitra Industri — `pages/industri.html`
Tunjukkan pencarian/filter talenta, detail kompetensi, penambahan materi, halaman Program Kolaborasi (buat agenda, tandai selesai, hapus), dan Laporan Industri.

## 3. Uji tambahan jika waktu cukup

- Buka `docs/contoh-import-guru.csv` di halaman Import Data dan pilih jenis data **Data guru**.
- Coba mengimpor baris duplikat atau email tidak valid untuk memperlihatkan validasi dan laporan kesalahan.
- Ubah ukuran browser ke lebar ponsel dan tunjukkan sidebar responsif.
- Gunakan menu Profil Sekolah untuk reset data demo sebelum presentasi ulang.

## 4. Batasan yang perlu dijelaskan

- Ini prototype frontend menggunakan data dummy, tidak memakai database atau backend.
- Import file membaca CSV lokal di browser, bukan `.xlsx` langsung. Simpan dari Excel sebagai CSV UTF-8 terlebih dahulu.
- OTP, undangan, perubahan password, dan email tidak dikirim ke layanan sungguhan.
- Data berubah hanya di sesi demo browser; tidak tersinkronisasi antar perangkat.
- Sertifikat hanya contoh desain, bukan dokumen resmi.

## Buka langsung role tertentu

| Peran | File |
|---|---|
| Admin Sekolah | `pages/admin.html` |
| Siswa | `pages/siswa.html` |
| Guru | `pages/guru.html` |
| Mitra Industri | `pages/industri.html` |
| Login | `pages/login.html` |
| Pendaftaran | `pages/register.html` |
