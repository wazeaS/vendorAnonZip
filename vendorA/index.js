const express = require('express');
const db = require('./database');
const app = express();
const port = 3002;

app.get('/api/distro', (req, res) => {
  db.all('SELECT * FROM produk', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // Konversi isAvailable ke boolean
    const result = rows.map(item => ({
      sku: item.sku,
      productName: item.productName,
      price: item.price,
      isAvailable: item.isAvailable === 1
    }));

    res.json(result);
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server Vendor A (Warung Legacy) jalan di http://localhost:${port}/api/warung`);
});
