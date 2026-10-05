Yarch V20.4.61 — Validasi arc per season

- Setiap season tetap dapat memiliki beberapa Arc / OVA dengan satu arc per baris.
- Form langsung menampilkan jumlah arc yang berhasil dikenali atau pesan format/rentang yang perlu diperbaiki.
- Rentang arc divalidasi agar memakai angka bulat positif, tidak tumpang tindih, dan tidak melewati total episode/chapter season. Tanda hubung biasa, en dash, dan em dash diterima.
- Validasi berjalan sebelum upload cover sehingga kesalahan input tidak meninggalkan media tanpa data judul.
- Data seasonArcs tetap disimpan pada dokumen konten dan dipakai untuk mengelompokkan episode/chapter.
- Firestore Rules dan indeks tidak berubah pada versi ini.

Pemasangan: unggah index.html, admin.html, dan sw-v20.1.js. Tidak perlu menerbitkan ulang Firestore Rules atau indeks.
