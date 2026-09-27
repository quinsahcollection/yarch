Yarch V20.4.14 — Lima Perbaikan Prioritas

1. Render ganda Feed
- Loader Feed utama sekarang hanya melakukan satu render final.
- Observer video dan pembacaan jumlah like/komentar tidak lagi dipasang dua kali pada pembukaan yang sama.

2. Pagination Firestore Feed
- Feed dibaca 20 dokumen per halaman memakai orderBy, limit, startAfter, dan cursor dokumen.
- Tombol Tampilkan berikutnya mengambil halaman baru dari Firestore, bukan membuka data yang sebelumnya sudah dibaca.
- Filter kategori dan tag menjalankan query server tersendiri.
- Link share dan Tonton Nanti tetap dapat mengambil satu Feed target walaupun tidak berada di halaman pertama.

3. Avatar komentar Feed
- Avatar komentar diambil dari publicProfiles berdasarkan userId.
- Komentar lama ikut menggunakan foto profil terbaru tanpa migrasi dokumen komentar.
- Cache profil komentar tetap digunakan agar pembacaan berulang berkurang.

4. Keamanan ranking
- Angka publicProfiles harus sama dengan dokumen gamification pemilik akun.
- Public profile membaca ulang data gamifikasi tersimpan sebelum memperbarui ranking.
- Dokumen gamifikasi baru harus dimulai dari nol.
- Update poin dibatasi sesuai aktivitas: chapter +5, komentar +2, check-in +10, atau sinkronisasi waktu tonton tanpa tambahan poin.
- Chapter, komentar, streak, waktu tonton, serta awardedChapters dibatasi kenaikannya per penulisan.

5. Keamanan views
- Views hanya dihitung untuk akun login.
- Setiap akun hanya dapat menambah satu view per judul.
- Penambahan view dan marker viewers dilakukan dalam satu transaksi.
- Pengunjung tanpa login tetap dapat membuka konten, tetapi tidak dapat memanipulasi counter.

WAJIB DEPLOY:
- firestore-rules-yarch-v20.4.5.rules (isinya telah diperbarui untuk V20.4.14)
- firestore-indexes-v20.1.json (berisi tiga indeks pagination/filter Feed baru)

Perintah Firebase CLI bila project sudah terhubung:
firebase deploy --only firestore:rules,firestore:indexes

Setelah deploy file web, tutup lalu buka kembali aplikasi agar cache V20.4.14 aktif.
