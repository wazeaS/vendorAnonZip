const express = require('express');
const db = require('./database');
const app = express();
const port = 3001;

app.get('/api/warung', (req, res) => {
  db.all('SELECT * FROM produk', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


// Jalankan server
app.listen(port, () => {
  console.log(`Server Vendor A (Warung Legacy) jalan di http://localhost:${port}/api/warung`);
});
