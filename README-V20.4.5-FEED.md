# Yarch V20.4.5 — Feed Pagination & Social Comments

## Penyempurnaan V20.4.5

- Edit Feed langsung masuk ke tahap video/thumbnail dan tersedia tombol Batal Edit.
- Halaman Update serta Feed menampilkan 20 item awal dengan tombol Tampilkan lebih banyak.
- Ringkasan katalog menyimpan hingga 20 update terbaru per judul.
- Komentar Feed mendukung suka, balasan, edit, dan hapus.
- Autoplay Feed baru aktif setelah pengguna menggulir; hanya satu video berjalan.

## Penyempurnaan V20.4.4

- Jumlah like dan komentar dibaca langsung dari Firestore dan status like pengguna dipulihkan.
- Panel komentar diperbaiki agar tampil dan tidak mengunci scroll halaman.
- Tombol interaksi dinaikkan, deskripsi mempertahankan baris hasil salin-tempel, dan deskripsi panjang dapat digulir.
- Tag dapat ditekan untuk memfilter Feed serupa; header menampilkan nama tag aktif.
- Template berbagi mencakup judul, kanal, kategori, ringkasan, tag, dan tautan.
- Avatar posting admin memakai inisial serta badge Administrator agar berbeda dari pengguna biasa.
- Riwayat komik membuka halaman terakhir secara konsisten pada mode menurun, horizontal, dan RTL.

## Penyempurnaan V20.4.3

- Semua nama menu **Shorts** pada antarmuka diubah menjadi **Feed** tanpa memutus data lama.
- Kartu Feed menampilkan foto profil, judul, nama kanal, dan waktu pembaruan. Keterangan serta tag dibuka melalui tombol panah.
- Komentar Feed tersedia di samping tombol Bagikan.
- Menu unduh bawaan pemutar disembunyikan; unduhan konten tetap diarahkan ke fitur offline aplikasi.
- Admin dapat menambah kategori/tag, memilihnya kembali, mengedit Feed, dan mengambil thumbnail dari frame video.

## Penyempurnaan V20.4.2

- Feed video memakai kartu 16:9 seperti beranda YouTube.
- Kategori metadata otomatis menjadi filter chip pada halaman Feed.
- Judul, kanal, waktu, deskripsi, kategori, dan tag ditampilkan pada kartu.
- Tombol `+ Feed Baru` ditambahkan pada Admin dan tampilan upload mobile dirapikan.
- Ikon play pada navigasi dipusatkan secara eksplisit.

## Penyempurnaan V20.4.1

- Tema Shorts diubah menjadi terang dan ikon tidak aktif tidak lagi hitam.
- Admin membuat folder metadata terlebih dahulu: judul, deskripsi, kanal, kategori, visibilitas, tag, dan thumbnail.
- Video/thumbnail dapat diunggah langsung ke R2 dengan progres (video maksimum 95 MB), atau memakai URL R2.
- Folder tersimpan sebagai draft sebelum upload sehingga pekerjaan tidak hilang ketika koneksi terputus.

## Fitur V20.4.0

- Menu Shorts pengguna dengan video vertikal, autoplay, like, dan bagikan.
- Pengelolaan Shorts pada Admin: tambah, edit, draft, publikasi, dan hapus.
- Daftar pengguna publik dan tombol mengikuti sebagai dasar chat pribadi/grup.
- Avatar tanpa foto atau foto lama yang rusak otomatis memakai huruf inisial.
- Deploy `firestore-rules-yarch-v20.4.5.rules` sebelum memakai Feed, like, komentar, balasan, dan tombol ikuti.

## Hotfix V20.3.1

- Memulihkan halaman Update untuk katalog lama yang belum memiliki `recentChapters`.
- Fallback hanya membaca maksimal 3 chapter/episode terbaru per judul dan memakai cache lokal selama 6 jam.
- Chapter lama tanpa `updatedAt` otomatis memakai urutan `chapterNumber` sebagai cadangan.

## Wajib dilakukan setelah memasang file aplikasi

1. Publikasikan `firestore-rules-yarch-v20.4.5.rules` melalui Firebase Console atau Firebase CLI.
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
