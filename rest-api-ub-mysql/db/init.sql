CREATE DATABASE IF NOT EXISTS db_mahasiswa;

USE db_mahasiswa;

CREATE TABLE IF NOT EXISTS mahasiswa (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  nim        VARCHAR(20)  NOT NULL UNIQUE,
  nama       VARCHAR(100) NOT NULL,
  jurusan    VARCHAR(100) NOT NULL,
  semester   INT          NOT NULL,
  ipk        DECIMAL(3,2),
  created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO mahasiswa (nim, nama, jurusan, semester, ipk) VALUES
  ('215150400111001', 'Budi Santoso',    'Sistem Informasi',   2, 3.75),
  ('215150400111002', 'Dewi Rahayu',     'Sistem Informasi',   2, 3.90),
  ('215150400111003', 'Andi Pratama',    'Teknik Informatika', 4, 3.60),
  ('215150400111004', 'Siti Nurhaliza',  'Sistem Informasi',   2, 3.85),
  ('215150400111005', 'Reza Firmansyah', 'Teknik Informatika', 6, 3.45);
