const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./produk.db');

// Buat tabel kalau belum ada
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS produk (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kd_produk TEXT,
    nm_brg TEXT,
    hrg TEXT,
    ket_stok TEXT
  )`);

  // Insert data contoh (hanya sekali)
  db.run(`INSERT INTO produk (kd_produk, nm_brg, hrg, ket_stok)
          VALUES ('A001', 'Kopi Bubuk', '15000', 'ada')`);
});

module.exports = db;