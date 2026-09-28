Yarch V20.4.22 - Profil Cloud, Lupa Password, dan Login Google

Profil pengguna:
- Profil privat tersimpan di Firestore: users/{uid}/profile/main.
- Tanggal lahir, jenis kelamin, lokasi, bio, nama, foto, privasi, dan tema disimpan per akun.
- Editor menunggu sinkronisasi database selesai sebelum dibuka.
- Data Firestore menjadi sumber utama setelah aplikasi diperbarui atau cache diganti.
- Semua kolom formulir disegarkan kembali setiap kali profil berhasil dimuat.

Autentikasi:
- Login dan daftar dengan email/password tetap tersedia.
- Tombol Lupa Password mengirim email reset melalui Firebase Authentication.
- Login Google tersedia dengan popup dan fallback redirect di browser seluler.
- Pesan error autentikasi dibuat lebih jelas.

WAJIB untuk mengaktifkan Login Google:
1. Buka Firebase Console > Authentication > Sign-in method.
2. Aktifkan provider Google dan pilih email dukungan proyek.
3. Buka Authentication > Settings > Authorized domains.
4. Pastikan quinsahcollection.github.io tercantum sebagai authorized domain.
5. Simpan, lalu uji login dari aplikasi yang sudah di-hosting (bukan file lokal).

Pemasangan:
1. Unggah seluruh isi paket dan timpa file lama.
2. Pastikan index.html dan sw-v20.1.js ikut diperbarui.
3. Tutup lalu buka kembali aplikasi agar cache V20.4.22 aktif.

Tidak ada perubahan Firestore Rules atau indeks pada versi ini.
