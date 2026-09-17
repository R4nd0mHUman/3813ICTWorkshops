const express = require('express');
const router = express.Router();
const { connectDatabase } = require('./db');
// GET is used for retrieval and should not modify server state.
router.get('/', async (req, res, next) => {
  try { res.json(await (await connectDatabase()).find({}).toArray()); }
  catch (e) { next(e); }
});
module.exports = router;
