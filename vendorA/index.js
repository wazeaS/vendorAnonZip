// vendorA.js
// Simulasi Vendor A (Warung Legacy)
// Semua tipe data berupa STRING

const express = require('express');
const app = express();
const port = 3000; // port khusus Vendor A

// Data produk Vendor A
const products = [
  {
    "kd_produk": "A001",
    "nm_brg": "Kopi Bubuk 100g",
    "hrg": "15000",     // harga STRING
    "ket_stok": "ada"   // stok STRING: "ada" / "habis"
  },
  {
    "kd_produk": "A002",
    "nm_brg": "Gula Aren 250g",
    "hrg": "12000",
    "ket_stok": "habis"
  }
];

// Endpoint API Vendor A
app.get('/api/warung', (req, res) => {
  res.json(products);
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server Vendor A (Warung Legacy) jalan di http://localhost:${port}/api/warung`);
});
