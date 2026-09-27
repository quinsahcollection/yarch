# Yarch V20.4.7 — Feed Autoplay

- Video pertama otomatis berjalan tanpa suara ketika Feed dibuka.
- Sebelum video berjalan, tampilan hanya memperlihatkan tombol Play dan durasi.
- Kontrol serta slider waktu muncul setelah video mulai berjalan.
- Ketika video berikutnya memenuhi area layar, video itu otomatis berjalan dan video sebelumnya berhenti.
- Berpindah dari Feed ke menu lain langsung menghentikan seluruh video.
- Video juga dihentikan ketika tab/aplikasi masuk latar belakang atau halaman ditutup.

Autoplay dimulai dalam keadaan `muted` agar sesuai kebijakan Android dan browser. Pengguna dapat menyalakan suara melalui kontrol video setelah pemutaran dimulai.

Firestore Rules tidak berubah dari V20.4.5.
