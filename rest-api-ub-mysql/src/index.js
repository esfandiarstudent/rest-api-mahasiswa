const express = require("express");
const mahasiswaRoutes = require("./routes/mahasiswa");

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({
    message: "🎓 REST API Mahasiswa - FILKOM UB",
    endpoints: {
      "GET  /api/mahasiswa":     "Tampilkan semua data mahasiswa",
      "GET  /api/mahasiswa/:id": "Tampilkan data berdasarkan ID",
      "POST /api/mahasiswa":     "Tambah data mahasiswa baru",
    },
  });
});


app.use("/api/mahasiswa", mahasiswaRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.method} ${req.originalUrl} tidak ditemukan`,
  });
});


app.listen(PORT, () => {
  console.log(`\n🚀 Server berjalan di http://localhost:${PORT}`);
  console.log(`   GET  http://localhost:${PORT}/api/mahasiswa`);
  console.log(`   GET  http://localhost:${PORT}/api/mahasiswa/:id`);
  console.log(`   POST http://localhost:${PORT}/api/mahasiswa\n`);
});
