Yarch V20.4.62 — Request Konten dengan pelacakan status

Fitur:
- Pengguna yang masuk dapat mengirim request Komik / Manga atau Film / Anime langsung dari aplikasi.
- Request tersimpan di Firestore dengan nomor tiket dan status awal Menunggu ditinjau.
- Pengguna dapat melihat daftar request miliknya, catatan admin, serta membatalkan request yang masih menunggu.
- Dashboard admin memiliki menu Request Konten untuk memfilter, meninjau, mengubah status, dan menulis catatan bagi pengguna.
- Admin dapat memberi status Sedang ditinjau, Sudah tersedia, atau Belum dapat dipenuhi.
- Firestore Rules membatasi akses riwayat ke pemilik request dan memperbolehkan perubahan status hanya bagi admin. Request disimpan sebagai riwayat dan tidak dapat dihapus lewat klien.

Pemasangan:
1. Unggah index.html, admin.html, dan sw-v20.1.js ke hosting.
2. Ganti Firestore Rules dengan firestore-rules-yarch-v20.4.62.rules melalui Firebase Console.
3. Tidak ada perubahan indeks Firestore.

Catatan:
- Login diperlukan supaya request dapat dilacak dan hanya pemilik akun yang dapat melihat riwayatnya.
- Jika Rules lama belum diganti, simpan/muat request akan ditolak dengan pesan yang meminta pembaruan Rules.
