Yarch V20.4.23 - QA Profil Cloud dan Autentikasi

Hasil pemeriksaan:
- Profil privat dibaca dan disimpan di users/{uid}/profile/main.
- Editor menunggu pembacaan database selesai sebelum dibuka.
- Nama, bio, foto, tanggal lahir, jenis kelamin, lokasi, privasi, dan tema disegarkan dari data akun.
- Profil lama mendukung alias birthDate/dateOfBirth/birthdate/dob, gender/jenisKelamin/sex, dan location/city/kota.
- Dokumen profil lama dimigrasikan otomatis ke profileSchemaVersion 2.
- Login email, pendaftaran email, lupa password, login Google popup, dan fallback redirect tersedia.
- Tidak ditemukan ID elemen autentikasi ganda atau fungsi tombol yang hilang.

Aktivasi Google Login di Firebase:
1. Firebase Console > Authentication > Sign-in method > aktifkan Google.
2. Authentication > Settings > Authorized domains.
3. Tambahkan quinsahcollection.github.io jika belum tercantum.

Catatan pemulihan data:
- Data lama yang masih ada pada cache akun, dokumen profil, atau dokumen utama pengguna akan dimigrasikan.
- Data yang tidak pernah berhasil disimpan di perangkat maupun Firestore tidak dapat dibuat kembali otomatis.

Pemasangan:
1. Unggah seluruh isi paket dan timpa file lama.
2. Pastikan index.html dan sw-v20.1.js ikut diperbarui.
3. Tutup semua tab aplikasi, lalu buka ulang dan pastikan menu Updates menampilkan V20.4.23.

Tidak ada perubahan Firestore Rules atau indeks pada versi ini.
