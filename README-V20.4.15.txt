Yarch V20.4.15 — Perbaikan Feed Saat Indeks Belum Aktif

- Query pagination utama tetap memakai indeks Firestore dan memuat 20 Feed per halaman.
- Jika indeks komposit belum aktif atau belum ter-deploy, aplikasi otomatis memakai query kompatibilitas yang tidak membutuhkan indeks komposit.
- Mode kompatibilitas tetap mendukung kategori, tag, tautan share, Tonton Nanti, autoplay, komentar, dan tombol tampilkan berikutnya.
- Setelah indeks aktif, aplikasi otomatis kembali memakai pagination server pada pemuatan berikutnya.

Tetap disarankan deploy:
- firestore-rules-yarch-v20.4.5.rules
- firestore-indexes-v20.1.json

Sesudah mengunggah file web, tutup semua tab aplikasi lalu buka kembali agar cache V20.4.15 aktif.
