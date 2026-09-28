YARCH V20.4.29 — PRIORITAS MENENGAH DAN DURASI EPISODE

Perbaikan utama:
1. Seluruh tampilan versi aktif, modal update, panel admin, cache, dan metadata backup diselaraskan ke V20.4.29.
2. Penghapusan Feed menjadi proses aman yang dapat dilanjutkan ulang setelah koneksi terputus.
3. Feed langsung dibuat tidak publik ketika proses penghapusan dimulai.
4. URL video dan thumbnail disimpan sementara sampai pembersihan media benar-benar selesai.
5. Teks durasi di bawah thumbnail diperbesar secara responsif tanpa mengubah rasio thumbnail.

Pemeriksaan:
- JavaScript module index.html dan admin.html valid.
- Service worker valid dan memakai cache V20.4.29.
- Riwayat versi lama tetap dipertahankan sebagai changelog.
- Fungsi Feed, profil, chapter/episode, upload media, dan navigasi tidak dihapus.

Pemasangan:
- Unggah seluruh file paket secara bersamaan.
- Setelah deploy, ubah latestVersion pada Pengaturan Admin menjadi 20.4.29.
