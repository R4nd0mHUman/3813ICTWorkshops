const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { connectDatabase } = require('./db');
router.put('/:id', async (req, res, next) => {
  try {
    // ObjectId is MongoDB's native _id type. A plain string will not match an ObjectId field.
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({ error: 'Invalid MongoDB ObjectId.' });
    const products = await connectDatabase();
    const changes = { ...req.body };
    delete changes._id; // MongoDB's immutable _id cannot be changed.
    const result = await products.updateOne({ _id: new ObjectId(req.params.id) }, { $set: changes });
    if (!result.matchedCount) return res.status(404).json({ error: 'Product not found.' });
    res.json(await products.findOne({ _id: new ObjectId(req.params.id) }));
  } catch (e) { next(e); }
});
module.exports = router;
