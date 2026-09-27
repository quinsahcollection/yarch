Yarch V20.4.13 — Perbaikan Upload MKV

Penyebab:
- Android/Chrome membaca sebagian file MKV sebagai video/matroska.
- Worker lama mengharapkan video/x-matroska sehingga file ditolak walaupun ekstensi .mkv sudah tercantum di File Manager.

Perbaikan:
- Input File Manager menerima video/matroska dan video/x-matroska.
- File .mkv dinormalisasi menjadi video/x-matroska sebelum dikirim.
- Normalisasi berlaku pada upload biasa dan multipart untuk file besar.
- Nama file, ukuran, dan lastModified tetap dipertahankan.
- Kontrak Worker mencantumkan kedua MIME MKV untuk pembaruan server berikutnya.

Catatan kompatibilitas:
- Berhasil diunggah tidak selalu berarti MKV dapat diputar oleh semua browser.
- Codec di dalam MKV harus didukung perangkat pengguna.
- Untuk kompatibilitas terbaik, gunakan MP4 dengan video H.264 dan audio AAC.

Cache aplikasi diperbarui ke V20.4.13. Setelah deploy, tutup lalu buka kembali aplikasi agar service worker terbaru aktif.
