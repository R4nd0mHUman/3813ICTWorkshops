// Optional setup/seed endpoint. This demonstrates creating/resetting initial data.
const express = require('express');
const router = express.Router();
const { connectDatabase } = require('./db');
router.post('/reset', async (req, res, next) => {
  try {
    const products = await connectDatabase();
    await products.deleteMany({}); // Unlike drop(), the collection itself remains available.
    await products.insertMany([
      { id: 1, name: 'Mechanical Keyboard', description: 'Compact mechanical keyboard', price: 89.95, units: 12, type: 'Peripheral' },
      { id: 2, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse', price: 39.50, units: 25, type: 'Peripheral' },
      { id: 3, name: 'USB-C Hub', description: 'Multi-port USB-C adapter', price: 54.99, units: 8, type: 'Accessory' }
    ]);
    res.status(201).json({ message: 'Products reset successfully.' });
  } catch (e) { next(e); }
});
module.exports = router;
