const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// CORS permits the Angular development server (normally port 4200) to call this API.
app.use(cors());
// body-parser parses JSON request bodies and makes the result available as req.body.
app.use(bodyParser.json());
app.use('/api/products', require('./read'));
app.use('/api/products', require('./add'));
app.use('/api/products', require('./update'));
app.use('/api/products', require('./remove'));
app.use('/api/products', require('./create'));
// Central error handler prevents unhandled promise errors from terminating requests silently.
app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: 'Internal server error.' }); });
app.listen(3000, () => console.log('Week 9 API running at http://localhost:3000'));
