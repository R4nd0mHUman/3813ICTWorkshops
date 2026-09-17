// Shared database connection helper. Keeping this in one module avoids opening a new
// MongoClient for every request and gives all route modules the same collection.
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
let products;
async function connectDatabase() {
  if (!products) {
    await client.connect();
    products = client.db('mydb').collection('products');
  }
  return products;
}
module.exports = { connectDatabase };
