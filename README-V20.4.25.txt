Yarch V20.4.25 - Metrik Chapter dan Episode

Fitur baru:
- Jumlah tayangan ditampilkan pada setiap chapter komik dan episode film/anime.
- Tombol jempol naik dan jempol turun ditampilkan di samping tombol download.
- Angka tayangan, suka, dan tidak suka tersimpan pada dokumen chapter/episode di Firestore.
- Viewer unik disimpan di subkoleksi viewers; satu akun hanya dihitung satu kali.
- Pilihan pengguna disimpan di subkoleksi reactions; satu akun hanya mempunyai satu pilihan.
- Penilaian dapat diganti dari naik ke turun atau dibatalkan dengan menekan tombol aktif.

WAJIB:
Publikasikan isi firestore-rules-yarch-v20.4.5.rules ke Firebase Firestore Rules.
Tanpa rules terbaru, tayangan dan penilaian tidak dapat disimpan.

Deploy seluruh isi paket. Tutup seluruh tab aplikasi, buka kembali, lalu pastikan
menu Updates menampilkan V20.4.25.
