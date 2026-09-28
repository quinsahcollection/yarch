Yarch V20.4.17 — Skalabilitas Feed dan Kebersihan Media

1. Pagination komentar Feed
- Komentar dibaca 30 dokumen per halaman menggunakan cursor Firestore.
- Tombol Muat komentar lainnya mengambil halaman berikutnya.
- Data komentar lama tanpa migrasi tetap dapat ditampilkan.

2. Render Feed
- Render utama dipisahkan menjadi fungsi inti dan dekorator.
- Loader serta handler lama yang telah digantikan tidak lagi dipakai.

3. Engagement Feed
- Jumlah suka, komentar, dan status suka disimpan dalam cache selama 60 detik.
- Perubahan like, tambah komentar, dan hapus komentar memaksa pembaruan terbaru.

4. Mode kompatibilitas indeks
- Feed tetap menggunakan pagination server ketika indeks aktif.
- Jika indeks belum aktif, Feed menampilkan indikator mode kompatibilitas dan tetap berjalan.

5. Pembersihan media
- Video atau thumbnail lama dibersihkan setelah penggantinya berhasil disimpan.
- Penghapusan Feed turut mencoba membersihkan video dan thumbnail R2.
- Avatar admin lama dibersihkan setelah avatar baru berhasil disimpan.
- URL yang masih dipakai Feed lain atau profil admin tidak ikut dihapus.
- Kegagalan cleanup dicatat dan tidak membatalkan data baru.

Validasi meliputi JavaScript pengguna/admin, service worker, indeks JSON, struktur Firestore Rules, dan integritas ZIP.
