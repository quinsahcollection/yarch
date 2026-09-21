# Yarch V20.1.10 — Catatan Perbaikan

- Tab filter Koleksi diberi jarak vertikal dan garis pemisah khusus agar tidak saling bertabrakan.
- Badge status Koleksi dipindahkan ke lapisan cover khusus dengan posisi, z-index, dan pemotongan teks yang aman.

- Tampilan Request Konten diperbarui mengikuti desain premium dengan pilihan jenis berbentuk segmented control dan catatan tambahan.
- Daftar episode kini menampilkan thumbnail 16:9; admin dapat memasukkan thumbnail khusus dan gambar unggahan pertama dapat dipakai otomatis.

- Riwayat lengkap sekarang menampilkan posisi baca/tonton, persentase, dan progress bar seperti bagian Lanjutkan Baca & Tonton.
- Tombol Request Konten ditambahkan di samping sapaan pengguna dengan pilihan Komik/Manga atau Film/Anime.
- Tombol Hubungi Admin menyediakan akses langsung ke WhatsApp dan email admin.

## Sudah diperbaiki

- Cover komik, film, koleksi, ranking, dan riwayat memakai bidang poster 2:3 dengan gaya full-bleed seperti Webtoon. Cover Discovery secara khusus memenuhi seluruh bidang gambar tanpa letterbox atau ruang kosong sampai sudut melengkung.
- Istilah progres kini mengikuti jenis media: komik memakai “dibaca”, sedangkan film/anime memakai “ditonton”, termasuk badge Update, kartu Koleksi, dropdown status, dan halaman Detail.
- Grid Discovery 3 kolom memakai rasio poster 2:3 seperti halaman “Pilihan Hari Ini”, sehingga cover lebih panjang dan tidak tertarik.
- Banner Home dibuat lebih ringkas; teks, deskripsi, rating, dan tombol berada pada area aman di kiri sementara cover tetap di kanan.
- Home menampilkan sapaan nama profil pengguna di bawah pencarian, dengan fallback nama akun/email lalu “User” jika belum login.
- Overlay banner Home dibuat lebih terang agar cover kanan tetap jelas, sedangkan deskripsi dipersingkat menjadi dua baris dan dibatasi pada area kiri.
- Bagian tipe konten Home yang belum memiliki isi otomatis disembunyikan dan muncul kembali saat memiliki konten.
- Discovery mode daftar memakai cover kiri yang lebih lebar dengan `object-fit: cover`; informasi dan baris episode/chapter diberi jarak bawah yang lebih rapi.
- Banner Home memiliki bayangan transisi lembut di batas area teks dan cover agar kedua sisi menyatu lebih halus.
- Judul pada header Reader dan Player dapat diketuk untuk membuka pemilih chapter/episode tanpa kembali ke halaman detail.
- Komentar utama dan semua balasannya ditampilkan sebagai satu percakapan dalam satu bingkai; balasan tetap berada di bawah komentar utama.
- Discovery grid 2 menampilkan status konten dan rating usia; grid 3 menampilkan jumlah komentar dan rating usia.
- Discovery mode daftar menampilkan status, rating usia, tipe media, serta judul pada tiga rilisan chapter/episode terbaru dengan baris yang diperpanjang dan disejajarkan.
- Tata letak metadata Discovery diringkas kembali: rating usia menjadi badge teks di pojok kiri cover; grid 2 menaruh status setelah rating/views/komentar; grid 3 tetap ringkas; mode daftar menaruh tipe di samping komentar dan status pada baris rilisan terbaru dengan jarak episode lebih rapat.
- Pada Discovery mode daftar, teks tipe diperbesar, status dipisahkan menjadi badge sendiri, dan nomor episode/chapter dipisahkan dari judul menggunakan tanda `|`.
- Error `modernConfirm is not defined` pada hapus komentar dan laporan media/komentar.
- Sanitasi data Hero, genre, tipe, filter, URL trailer, dan nilai yang masuk ke HTML dinamis.
- Trailer hanya menerima URL YouTube yang valid dan menggunakan domain embed tanpa cookie.
- Urutan Reader, episode berikutnya, dan autoplay mengikuti `seasonNumber` lalu `chapterNumber`.
- Update terbaru diurutkan berdasarkan `updatedAt`, lalu season/nomor sebagai fallback.
- Komentar dibatasi 200 per pembacaan agar halaman tidak membaca koleksi tanpa batas.
- Hapus komentar sendiri ikut menghapus balasan langsung dan menghitung ulang counter.
- Pelacakan waktu tonton memakai accumulator 30 detik sehingga interval tidak hilang.
- Versi aplikasi diseragamkan menjadi `20.1.10`.
- Pembersihan cache hanya menyentuh cache milik aplikasi dengan prefix `komik-anime-`.
- Upload admin yang gagal mencoba menghapus kembali file R2 yang sudah terunggah.
- Penghapusan media admin menghapus file R2 dan baru memperbarui state UI setelah operasi berhasil.
- Permintaan hapus R2 dibagi per 250 URL.
- Pemilihan media saat publish mengubah prioritas urutan tanpa membuang media yang tidak dipilih.
- Pemindahan chapter ke Trash memakai batch Firestore dan ID Trash unik.
- Tanggal default admin menggunakan zona waktu lokal browser.
- Nilai inline File Manager dienkode agar tanda petik pada judul/URL tidak merusak tombol.
- Status Discovery mode list kini sejajar dengan tanggal sebagai badge terpisah, tombol bookmark grid 3 diperkecil, dan indeks alfabet mengikuti urutan Z–A saat sort tersebut aktif.
- Badge episode terbaru mode list kembali selebar isinya, tombol bookmark grid 3 diperkecil dengan prioritas CSS yang benar, dan formulir admin mendapat tombol Isi dengan AI melalui endpoint Worker terautentikasi `/ai/metadata`.
- Navigasi antar-chapter/episode kini mengganti state media aktif agar tombol Back kembali ke detail, bukan media sebelumnya. Riwayat lokal dan cloud digabung berdasarkan progres terbaru, dan kartu Lanjutkan Baca & Tonton diperbarui langsung tanpa refresh.
- Saat mengganti chapter atau episode, observer reader lama dihentikan dan progres media sebelumnya disimpan terlebih dahulu agar halaman maupun detik terakhir tidak tertukar atau hilang.
- Avatar komentar kini mengambil foto terbaru dari profil pengguna berdasarkan UID dan langsung berubah setelah pemilik mengganti foto. Fullscreen video mobile mencoba landscape pada Android/Chrome, memakai fullscreen native pada Safari/iPhone, serta mengembalikan tampilan dan ikon ketika diperkecil.
- Tampilan utama kini memiliki breakpoint desktop 900–1180 px: Home dua kolom, banner lebar, katalog adaptif, update/list dua kolom, detail dan komentar lebih lapang, profil berbentuk dashboard, serta header/player/navigasi tetap sejajar tanpa mengubah layout mobile.
- Form folder episode/movie kini mendukung beberapa label bahasa audio/subtitle/dub, termasuk pilihan bawaan dan label baru buatan admin. Daftar isi menampilkannya setelah tanggal dan durasi dengan pembatas `|`.
- Pencarian Home kini hanya mencocokkan judul utama/alternatif, menampilkan judul rilisan di samping nomor chapter/episode, dan memindahkan waktu update ke baris berikutnya.
- Dropdown pencarian memiliki riwayat dengan tombol Bersihkan serta checklist seluruh genre untuk menjelajahi katalog berdasarkan satu atau beberapa genre.
- Banner Home dibuat sedikit lebih ringkas pada mobile dan desktop. Perpindahan slide memakai easing halus, fade/zoom konten, dukungan swipe, reset timer setelah interaksi, serta menghormati pengaturan reduced motion.
- Cover kanan banner memakai mode contain agar seluruh poster terlihat tanpa distorsi; latar blur tetap mengisi bidang banner. Kartu Lanjutkan Baca & Tonton menampilkan angka persentase, detail halaman/tontonan, dan progress bar.
- Discovery mode daftar selalu mengambil tiga season/chapter/episode bernomor paling akhir secara menurun. Deskripsi banner diperluas menjadi lima baris. Kartu lanjutan memakai badge tipe menggantikan cincin, dengan progres kiri berupa halaman atau waktu berjalan/total dan persentase di kanan.

## Membutuhkan Worker atau Firestore Rules

Bagian berikut tidak dapat diselesaikan hanya dari HTML:

- Publikasi terjadwal otomatis memerlukan Cloudflare Cron atau Firebase Scheduled Function yang mengubah `isPublished` saat `publishAt` tercapai.
- Push notification nyata memerlukan FCM/Web Push, subscription pengguna, dan backend pengirim.
- HLS adaptif memerlukan pipeline transcoding dan manifest HLS. Pemilihan MP4 berdasarkan kondisi jaringan bukan HLS adaptif sejati.
- Poin, streak, leaderboard, counter, dan statistik harus divalidasi/diagregasi backend agar tidak dapat dimanipulasi klien.
- Worker harus memverifikasi Firebase ID token, UID/claim admin, kepemilikan URL R2, MIME sebenarnya, ukuran file, dan batas operasi delete.
- Firestore Rules harus membatasi koleksi admin, data pengguna, komentar, rating, laporan, profil publik, analytics, dan gamifikasi.

## Validasi paket

- Semua module JavaScript berhasil diparse.
- Service Worker lolos pemeriksaan sintaks.
- Tidak ditemukan ID HTML ganda pada `index.html` dan `admin.html`.
- `firestore-indexes-v20.1.json` berisi indeks katalog publik dan komentar collection-group yang dipakai paket ini.
