# Yarch V20.4.9 — Related Content & Save Feed

## Konten terkait

- Admin dapat memilih komik atau film pada metadata Feed.
- Admin dapat memilih tujuan detail saja atau chapter/episode tertentu.
- Label CTA dibuat otomatis: Baca Komik, Baca Chapter, Tonton Anime, atau Tonton Episode.
- Feed lama tanpa relasi tetap kompatibel.
- Akses chapter/episode tetap melewati pemeriksaan usia pada reader/player.

## Tonton Nanti

- Tombol Simpan tersedia pada setiap kartu Feed.
- Data disimpan per akun pada `users/{uid}/savedFeeds/{feedId}`.
- Daftar Tonton Nanti tampil di halaman Koleksi Saya.
- Pengguna dapat membuka Feed tersimpan atau menghapusnya dari daftar.
- Login/logout memuat dan membersihkan status Simpan dengan benar.

## Firestore Rules

Publikasikan file `firestore-rules-yarch-v20.4.5.rules` yang disertakan dalam paket ini. Isi file sudah diperbarui untuk V20.4.9 dengan validasi `savedFeeds`, meskipun nama berkas dipertahankan agar alur deploy lama tidak berubah.
