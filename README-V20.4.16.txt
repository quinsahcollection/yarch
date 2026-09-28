Yarch V20.4.16 — Perbaikan Prioritas Menengah

1. Kode Feed lama
- Loader Feed lama yang telah digantikan pagination dihapus.
- Handler komentar lama yang sudah tidak dipakai dihapus agar tidak menimpa versi aktif.

2. Komentar Feed
- Maksimal 100 komentar terbaru dibaca saat panel dibuka.
- Like diperbarui secara lokal setelah transaksi berhasil, tanpa membaca ulang semua komentar dan profil.
- Hasil pemuatan lama diabaikan jika pengguna sudah membuka Feed lain.

3. MKV
- MKV tetap dapat diunggah seperti versi sebelumnya.
- Admin mendapat penjelasan bahwa kompatibilitas tergantung codec.
- Player menampilkan saran MP4 H.264/AAC jika MKV ditolak browser.

4. Foto profil
- Foto baru dipotong menjadi 192 x 192 dan dikompresi adaptif.
- Foto lama sampai batas sebelumnya tetap dapat dibaca dan ditampilkan.

5. Cache dan pembaruan
- Service worker diperiksa kembali saat tab aktif atau halaman dibuka kembali.
- Worker baru langsung mengambil alih dan memuat ulang aplikasi satu kali.
- Cache versi lama tetap dibersihkan saat aktivasi.

Validasi dilakukan pada index.html, admin.html, service worker, JSON indeks, dan struktur Firestore Rules.
