# Yarch V20.4.6 — Admin Profile & Feed Player Fix

Perbaikan utama:

- Profil admin (nama dan foto) dapat diatur kembali melalui menu Pengaturan admin.
- Profil admin disimpan pada `settings/appConfig` dan dipakai sebagai fallback untuk Feed lama.
- Avatar yang URL-nya rusak otomatis diganti dengan inisial sehingga ikon gambar rusak tidak tampil.
- Autoplay berbasis scroll dihapus karena dapat bertabrakan dengan kontrol video Android.
- Video Feed diputar manual; ketika satu video mulai, video Feed lain otomatis dijeda.
- Video yang keluar dari area layar otomatis dijeda.
- Cache aplikasi dinaikkan ke V20.4.6 agar browser tidak mempertahankan skrip Feed lama.

## Setelah deploy

1. Ganti seluruh file aplikasi dengan isi paket ini.
2. Buka Admin → Pengaturan.
3. Isi nama admin, pilih foto profil, lalu tekan **Simpan Semua Pengaturan**.
4. Buka aplikasi pengguna dan jalankan **Perbarui Sekarang** bila prompt versi muncul.
5. Uji tombol Play pada sedikitnya dua video Feed; hanya satu video boleh berjalan.

Firestore Rules tidak berubah dari V20.4.5.
