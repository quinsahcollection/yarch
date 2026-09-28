YARCH V20.4.28 — STABILITAS CACHE DAN PANEL ADMIN

Perbaikan:
1. Service worker menyimpan index.html dan admin.html pada kunci cache masing-masing.
2. Navigasi, galeri media, pratinjau cover, dan pemilih judul admin diekspos dengan aman untuk inline handler.
3. Foto profil admin selalu diperbarui melalui satu renderer tanpa menghapus elemen gambar.

Validasi:
- Seluruh JavaScript module index.html dan admin.html lolos pemeriksaan sintaks.
- Service worker lolos pemeriksaan sintaks.
- Referensi tombol admin telah diperiksa ulang.

Catatan pemasangan:
- Unggah seluruh file versi ini bersamaan agar index, admin, dan service worker tetap selaras.
- Jika Firestore settings/appConfig masih memakai latestVersion lama, ubah menjadi 20.4.28 melalui panel admin setelah deploy.
