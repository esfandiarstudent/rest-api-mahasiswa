// src/routes/mahasiswa.js
const express = require("express");
const router = express.Router();
const db = require("../../db/database");

// ─────────────────────────────────────────────
// GET /api/mahasiswa
// Menampilkan semua data mahasiswa
// ─────────────────────────────────────────────
router.get("/", (req, res) => {
  const sql = "SELECT * FROM mahasiswa ORDER BY id ASC";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
        error: err.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Data mahasiswa berhasil diambil",
      total: results.length,
      data: results,
    });
  });
});

// ─────────────────────────────────────────────
// GET /api/mahasiswa/:id
// Menampilkan data mahasiswa berdasarkan ID
// ─────────────────────────────────────────────
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM mahasiswa WHERE id = ?";

  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
        error: err.message,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: `Mahasiswa dengan ID ${req.params.id} tidak ditemukan`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Data mahasiswa ditemukan",
      data: results[0],
    });
  });
});

// ─────────────────────────────────────────────
// POST /api/mahasiswa
// Menambah data mahasiswa baru
// ─────────────────────────────────────────────
router.post("/", (req, res) => {
  const { nim, nama, jurusan, semester, ipk } = req.body;

  // Validasi field wajib
  if (!nim || !nama || !jurusan || !semester) {
    return res.status(400).json({
      success: false,
      message: "Field nim, nama, jurusan, dan semester wajib diisi",
    });
  }

  const sql = `
    INSERT INTO mahasiswa (nim, nama, jurusan, semester, ipk)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nim, nama, jurusan, semester, ipk || null], (err, result) => {
    if (err) {
      // Duplikat NIM
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({
          success: false,
          message: `NIM ${nim} sudah terdaftar`,
        });
      }
      return res.status(500).json({
        success: false,
        message: "Gagal menambah data",
        error: err.message,
      });
    }

    // Ambil data yang baru diinsert
    db.query(
      "SELECT * FROM mahasiswa WHERE id = ?",
      [result.insertId],
      (err2, rows) => {
        res.status(201).json({
          success: true,
          message: "Data mahasiswa berhasil ditambahkan",
          data: rows[0],
        });
      }
    );
  });
});

module.exports = router;
