const express = require('express');
const pool = require('./db');
const app = express();
const port = 3001;

app.get('/api/warung', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM produk');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Jalankan server
app.listen(port, () => {
  console.log(`Server Vendor A (Warung Legacy) jalan di http://localhost:${port}/api/warung`);
});
