Yarch V20.4.34 — Stabilitas Konten dan Import

Audit yang diperiksa:
- Buat film/anime baru.
- Buat komik baru.
- Edit metadata Season dan Multi-Arc.
- Reset dan Batal Edit.
- Isi metadata melalui AI.
- Import metadata JSON massal.
- Mode Tanpa Season.

Perbaikan:
- Reset form membersihkan seluruh data arc lama.
- Import mempertahankan seasonNames, seasonArcs, seasonTotals, dan totalSeasons=0.
- Rentang arc yang tumpang tindih ditolak.
- Jumlah season selalu dibulatkan menjadi bilangan bulat yang valid.
- Kegagalan audit tidak membatalkan konten yang sudah tersimpan.
