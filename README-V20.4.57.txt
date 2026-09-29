Yarch V20.4.57 — Penghitungan view untuk pengunjung dan akun

- View judul komik, chapter, dan episode kini ikut menghitung pengunjung yang belum login.
- Identitas anonim disimpan terpisah dari sesi akun utama. Pengunjung yang sama di browser/perangkat yang sama dikenali sebagai identitas anonim yang sama.
- Identitas yang sama dapat menambah view kembali setelah jeda 6 jam. Penghitung total bertambah, sedangkan dokumen identitas viewer tetap satu.
- Sebelum merilis frontend, aktifkan Firebase Authentication > Sign-in method > Anonymous.
- Publikasikan firestore-rules-yarch-v20.4.57.rules ke Firebase Firestore Rules. Tanpa dua pengaturan Firebase tersebut, view anonim belum dapat tersimpan.
- View chapter/episode ditulis saat konten dibuka. Counter analytics harian admin yang khusus akun tetap hanya menerima aktivitas pengguna login.
