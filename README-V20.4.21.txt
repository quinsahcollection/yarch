Yarch V20.4.21 - Perbaikan Publikasi dan Pemuatan Feed

Perbaikan utama:
- Feed baru disiapkan sebagai Publik secara default.
- Checkbox publikasi dan tombol simpan sekarang memberikan status yang konsisten.
- Setelah upload, admin diberi petunjuk untuk menekan Simpan & Publikasikan.
- Feed lama yang sudah memiliki video tetapi masih draft memiliki tombol Publikasikan.
- Mode kompatibilitas mengambil dokumen terbaru secara terurut.
- Banner dan toast "Feed sedang memakai mode kompatibilitas sementara" dihilangkan.

Untuk Feed yang tadi belum terlihat:
1. Buka Admin > Kelola Feed.
2. Cari Feed yang bertanda Siap dipublikasikan.
3. Tekan tombol Publikasikan.
4. Kembali ke aplikasi lalu tekan tombol muat ulang di Feed.

Pemasangan:
1. Unggah seluruh isi paket dan timpa file lama.
2. Pastikan index.html, admin.html, dan sw-v20.1.js ikut diperbarui.
3. Deploy firestore-indexes-v20.1.json agar pagination utama berjalan tanpa fallback.
4. Tutup lalu buka kembali aplikasi untuk mengambil cache V20.4.21.

Tidak ada perubahan Firestore Rules pada versi ini.
