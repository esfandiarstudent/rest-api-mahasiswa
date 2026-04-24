
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",      
  password: "",       
  database: "db_mahasiswa",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Gagal koneksi ke MySQL:", err.message);
    process.exit(1);
  }
  console.log("✅ Terhubung ke MySQL (XAMPP)");
});

module.exports = db;
