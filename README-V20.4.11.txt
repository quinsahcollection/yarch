Yarch V20.4.11 — Posisi Awal dan Tautan Feed

Perbaikan:
- Membuka Feed secara normal dari menu lain selalu kembali ke bagian paling atas.
- Reset posisi dilakukan lagi setelah proses pemuatan/render video selesai agar scroll anchoring tidak melewati video pertama.
- Link Feed dengan parameter ?short=ID kini dibaca saat aplikasi pertama kali dibuka.
- Link dari WhatsApp atau aplikasi lain langsung mengaktifkan halaman Feed, mencari video tujuan, menggulirkannya ke tengah, dan memutarnya.
- Parameter video dibersihkan ketika pengguna meninggalkan Feed agar tidak memengaruhi kunjungan Feed berikutnya.
- URL share dibuat dari origin dan path aplikasi sehingga tetap benar pada domain utama maupun GitHub Pages.

Cache aplikasi diperbarui ke V20.4.11. Setelah deploy, tutup dan buka ulang aplikasi agar service worker terbaru aktif.
