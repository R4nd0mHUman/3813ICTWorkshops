const express = require('express');
const router = express.Router();
const { connectDatabase } = require('./db');
router.post('/', async (req, res, next) => {
  try {
    const products = await connectDatabase();
    const product = req.body;
    // The workshop explicitly requires duplicate checking on the numerical id field.
    if (await products.findOne({ id: product.id })) return res.status(409).json({ error: 'Product id already exists.' });
    if (!Number.isInteger(product.id) || typeof product.name !== 'string' || product.name.length > 50 ||
        typeof product.description !== 'string' || product.description.length > 255 ||
        typeof product.price !== 'number' || !Number.isInteger(product.units)) {
      return res.status(400).json({ error: 'Invalid product data.' });
    }
    const result = await products.insertOne(product);
    res.status(201).json({ ...product, _id: result.insertedId });
  } catch (e) { next(e); }
});
module.exports = router;
