Yarch V20.4.45 — Pembaruan Cache Admin

- Memaksa browser meminta service worker dengan URL versi baru, sehingga file admin terbaru tidak tertahan pada registrasi/cache lama.
- Nama cache service worker dinaikkan ke V20.4.45; aktivasi akan menghapus cache antarmuka Yarch versi sebelumnya.
- Mempertahankan perbaikan V20.4.44: panel Lewati Intro ditampilkan di folder episode, format film tetap terjaga untuk URL video R2 tanpa ekstensi, dan waktu intro ikut disimpan.

Deploy seluruh isi folder yarch-main ke sumber GitHub Pages. Pastikan admin.html, index.html, dan sw-v20.1.js dari paket yang sama ikut terunggah. Setelah deploy, buka aplikasi dan admin secara online lalu muat ulang. Data Firestore dan file media tidak berubah.
