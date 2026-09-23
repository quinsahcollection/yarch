# Yarch V20.4.0 — Shorts, Social Foundation & Stability

## Fitur V20.4.0

- Menu Shorts pengguna dengan video vertikal, autoplay, like, dan bagikan.
- Pengelolaan Shorts pada Admin: tambah, edit, draft, publikasi, dan hapus.
- Daftar pengguna publik dan tombol mengikuti sebagai dasar chat pribadi/grup.
- Avatar tanpa foto atau foto lama yang rusak otomatis memakai huruf inisial.
- Deploy `firestore-rules-yarch-v20.4.rules` sebelum memakai Shorts dan tombol ikuti.

## Hotfix V20.3.1

- Memulihkan halaman Update untuk katalog lama yang belum memiliki `recentChapters`.
- Fallback hanya membaca maksimal 3 chapter/episode terbaru per judul dan memakai cache lokal selama 6 jam.
- Chapter lama tanpa `updatedAt` otomatis memakai urutan `chapterNumber` sebagai cadangan.

## Wajib dilakukan setelah memasang file aplikasi

1. Publikasikan `firestore-rules-yarch-v20.4.rules` melalui Firebase Console atau Firebase CLI.
2. Masuk ke panel admin sekali. Panel akan membuat ringkasan katalog untuk maksimal 20 judul lama setiap kali dibuka sampai seluruh data selesai dimigrasikan.
3. Saat chapter atau episode dibuat, diedit, dipublikasikan, dihapus, atau dipulihkan, ringkasan katalog akan diperbarui otomatis.

## Dampak optimasi

- Aplikasi pengguna tidak lagi membaca subkoleksi chapter setiap judul saat katalog dibuka.
- Data episode terbaru, tiga rilis terakhir, jumlah isi, dan tanggal update diambil langsung dari dokumen judul.
- Render katalog tidak lagi dijalankan ulang setelah setiap permintaan chapter selesai.

## Keamanan

- Foto profil publik hanya menerima data gambar JPEG, PNG, atau WebP dengan batas ukuran.
- Statistik publik dan gamifikasi memiliki tipe serta batas angka yang divalidasi.
- Jumlah chapter gamifikasi wajib sesuai jumlah chapter unik yang pernah diberi poin.
- Bookmark, koleksi, riwayat, pengaturan, dan profil pribadi tetap hanya dapat diakses pemilik akun.

Rules ini meningkatkan perlindungan data, tetapi leaderboard yang sepenuhnya anti-kecurangan tetap membutuhkan perhitungan poin pada Worker atau Cloud Functions tepercaya.
