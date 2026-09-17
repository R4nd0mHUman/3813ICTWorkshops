const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { connectDatabase } = require('./db');
router.delete('/:id', async (req, res, next) => {
  try {
    if (!ObjectId.isValid(req.params.id)) return res.status(400).json({ error: 'Invalid MongoDB ObjectId.' });
    const result = await (await connectDatabase()).deleteOne({ _id: new ObjectId(req.params.id) });
    if (!result.deletedCount) return res.status(404).json({ error: 'Product not found.' });
    res.json({ message: 'Product removed.' });
  } catch (e) { next(e); }
});
module.exports = router;
