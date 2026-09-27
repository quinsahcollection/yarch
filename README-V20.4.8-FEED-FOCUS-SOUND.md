# Yarch V20.4.8 — Feed Focus & Sound

- Video aktif ditentukan dari video yang paling dekat dengan garis fokus layar, bukan urutan callback observer.
- Area fokus dibuat sedikit di atas tengah agar video paling bawah tidak aktif terlalu cepat.
- Hysteresis mempertahankan video saat ini selama masih cukup terlihat sehingga playback tidak berkedip ketika scroll pelan.
- Perubahan video dijalankan setelah scroll stabil sekitar 150 ms.
- Scroll ke bawah memutar video berikutnya dan menghentikan video sebelumnya.
- Scroll kembali ke atas memutar video atas dan menghentikan video bawah.
- Tombol **Aktifkan suara** mengaktifkan audio dan menyimpan pilihan selama sesi Feed.
- Jika browser menolak autoplay bersuara, aplikasi otomatis kembali ke mode senyap tanpa menghentikan video.
- Pindah menu, menutup halaman, atau memindahkan aplikasi ke latar belakang tetap menghentikan semua video.

Firestore Rules tidak berubah dari V20.4.5.
