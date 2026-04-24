# 🎓 REST API Mahasiswa — FILKOM UB

Tugas Mata Kuliah **Pemrograman Web** — Sistem Informasi Semester 2  
Universitas Brawijaya · Stack: **Express.js + MySQL (XAMPP)**

## 🗂️ Struktur Project

```
rest-api-mahasiswa/
├── db/
│   ├── database.js   # Koneksi ke MySQL XAMPP
│   └── init.sql      # Script buat database & tabel
├── src/
│   ├── routes/
│   │   └── mahasiswa.js  # Endpoint GET & POST
│   └── index.js          # Entry point server
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Persiapan

### 1. Nyalakan XAMPP
- Buka **XAMPP Control Panel**
- Start **Apache** dan **MySQL**

### 2. Buat Database
- Buka `http://localhost/phpmyadmin`
- Klik tab **SQL**
- Copy-paste isi file `db/init.sql` → klik **Go**

### 3. Install & Jalankan

```bash
npm install
npm start
# atau pakai nodemon:
npm run dev
```

Server jalan di `http://localhost:3000`

---

## 📡 Endpoint API

### GET `/api/mahasiswa`
Tampilkan semua data mahasiswa.

```bash
curl http://localhost:3000/api/mahasiswa
```

### GET `/api/mahasiswa/:id`
Tampilkan data berdasarkan ID.

```bash
curl http://localhost:3000/api/mahasiswa/1
```

### POST `/api/mahasiswa`
Tambah mahasiswa baru. Body (JSON):

```json
{
  "nim": "215150400111099",
  "nama": "Nama Lengkap",
  "jurusan": "Sistem Informasi",
  "semester": 2,
  "ipk": 3.80
}
```

```bash
curl -X POST http://localhost:3000/api/mahasiswa \
  -H "Content-Type: application/json" \
  -d '{"nim":"215150400111099","nama":"Nama Baru","jurusan":"Sistem Informasi","semester":2,"ipk":3.80}'
```

---

## 👨‍💻 Author
Mahasiswa Sistem Informasi FILKOM — Universitas Brawijaya
