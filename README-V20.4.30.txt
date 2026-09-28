YARCH V20.4.30 — FINALISASI STABILITAS

Perbaikan:
1. Feed dengan penghapusan tertunda menampilkan status yang benar dan tombol Lanjutkan Hapus.
2. Tombol edit disembunyikan selama penghapusan agar Feed tidak dipulihkan tanpa sengaja.
3. Implementasi lama komentar dan filter Feed yang sudah ditimpa telah dibersihkan.
4. Implementasi penyimpanan pengaturan admin yang tidak lagi digunakan telah dibersihkan.
5. Kegagalan sinkronisasi bookmark, koleksi, riwayat, rating, dan penghitung komentar dicatat dengan benar.
6. Pesan pengguna membedakan data yang sudah tersinkron dan data yang baru tersimpan lokal.

Validasi regresi:
- Seluruh module JavaScript dan service worker valid.
- Tidak ada ID HTML ganda.
- Seluruh inline handler tersedia.
- Tidak ada fungsi window yang hilang dibanding V20.4.29.
- Jumlah fungsi publik index tetap 274 dan admin tetap 111.

Pemasangan:
- Unggah seluruh file dalam paket secara bersamaan.
- Atur latestVersion pada panel admin menjadi 20.4.30 setelah deploy.
