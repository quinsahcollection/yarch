Yarch V20.4.37 — Perbaikan Buka Folder Media

- Klik folder episode sekarang memuat data media langsung dari dokumen episode di Firestore.
- URL media tidak lagi ditanam ke handler kartu folder, sehingga karakter khusus atau daftar URL panjang tidak mengganggu klik.
- Data thumbnail dan intro episode ikut dimuat dari data terbaru.
- Jika folder gagal dibaca, aplikasi menampilkan pesan error yang dapat ditindaklanjuti.

Pembaruan ini khusus untuk panel admin. Ganti file admin.html dari paket ini di hosting. File index.html, service worker, data Firestore, dan file media tidak perlu diubah.
