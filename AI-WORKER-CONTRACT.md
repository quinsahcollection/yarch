# Kontrak endpoint AI metadata

Tombol **Isi dengan AI** pada `admin.html` memanggil endpoint berikut:

`POST /ai/metadata`

Endpoint harus berada pada Worker yang sama dengan `WORKER_URL`, memverifikasi Firebase ID token dari header `Authorization: Bearer ...`, dan hanya mengizinkan UID admin yang telah ditentukan. Simpan kunci penyedia AI sebagai secret Worker; jangan pernah mengirim kunci ke browser.

## Request

```json
{
  "title": "One Punch Man",
  "format": "film",
  "language": "id"
}
```

## Response

```json
{
  "metadata": {
    "format": "film",
    "altTitle": "Wanpanman",
    "type": "Anime",
    "status": "Ongoing",
    "ageRating": "17+",
    "releaseDate": "2015-10-05",
    "genres": ["Action", "Comedy", "Super Hero"],
    "synopsis": "Sinopsis dalam bahasa Indonesia.",
    "author": "ONE",
    "directors": ["Shingo Natsume"],
    "durationMinutesTotal": 24,
    "castCrew": ["Nama pemeran atau staf"],
    "trailerUrl": "https://www.youtube.com/watch?v=...",
    "totalSeasons": 2,
    "seasonTotals": { "1": 12, "2": 12 }
  }
}
```

Nilai yang tidak dapat diverifikasi sebaiknya dikembalikan sebagai string kosong, array kosong, atau `null`. Worker juga perlu membatasi panjang judul, rate limit per admin, timeout permintaan AI, dan ukuran respons. Cover sengaja tidak diambil otomatis untuk menghindari hotlink dan masalah hak penggunaan gambar; admin tetap mengunggah cover melalui R2.
