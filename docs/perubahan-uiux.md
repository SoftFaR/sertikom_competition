# Ringkasan Perubahan UI/UX Sertikom

## Arah visual

- Mengadopsi tema **Arctic Glass / Liquid Glass**: palet ice-blue dan putih, permukaan kaca transparan, blur lembut, serta glow biru yang halus.
- Warna utama: Primary `#1769E8`, Strong `#0F55C7`, Secondary `#4FB8F5`, Cyan `#20B9D8`, Ice `#EAF5FF`, Navy `#12345B`.
- Tipografi: **Manrope** untuk heading dan **Inter** untuk teks isi, dengan fallback sistem.
- Landing page disusun seperti halaman platform sertifikasi: hero, ringkasan manfaat, program unggulan, standar global, galeri karya siswa, placeholder institusi, statistik, tracker akademik, contoh sertifikat, langkah kolaborasi, CTA, dan footer.
- Dashboard memakai sidebar per peran, header halaman, kartu metrik kaca, panel, daftar aktivitas, tabel, dan status yang konsisten.
- Detail program menampilkan informasi, materi, tugas/asesmen, sertifikasi & jadwal, persyaratan, dan ringkasan program.
- Sertifikat memakai bingkai putih-biru dan menyediakan detail nomor serta verifikasi demo.
- Mobile layout dibuat responsif, termasuk navigasi, tabel, katalog, dan wizard pendaftaran.

## Arah gambar

- Tidak menggunakan gambar manusia, gambar generatif, atau stok eksternal.
- Seluruh ilustrasi berupa SVG vektor orisinal di `assets/img/` sehingga tampil tanpa koneksi internet.
- Logo sekolah, LSP, BNSP, dan mitra dalam prototype berupa placeholder teks. Ganti dengan aset resmi yang memang disetujui sebelum publikasi.

## Fitur yang dapat didemokan

- Login per peran: Admin Sekolah, Siswa, Guru, dan Mitra Industri.
- Registrasi sekolah 4 langkah: data sekolah, data Admin, verifikasi OTP demo, dan ringkasan.
- Katalog program dengan pencarian/filter, detail program, dan pendaftaran program oleh siswa.
- Program Saya: progres belajar, status pendaftaran, lanjut belajar, dan ekspor CSV.
- Tambah/edit program pada akun Admin, termasuk penghapusan program demo.
- Import CSV dengan validasi, pratinjau, unduh template, dan laporan kesalahan.
- Tambah/edit/hapus siswa dan guru, ekspor CSV, daftar mitra, undangan simulasi, dan persetujuan mitra.
- Pendaftaran peserta: verifikasi pendaftaran, detail enrollment, dan ekspor CSV.
- Tugas/submission, input nilai, umpan balik, status lulus/perbaikan, dan riwayat asesmen.
- Jadwal/asesmen, materi kolaborasi, pencarian talenta, tampilan sertifikat contoh, cetak/PDF, dan verifikasi kode demo.
- Agenda kolaborasi industri, laporan per peran, pengaturan sekolah, dan reset data demo.
- Data disimpan sementara pada sesi browser (`sessionStorage`); tidak ada database atau backend.
