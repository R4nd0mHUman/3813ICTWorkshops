// Workshop 9 - Task 2: basic MongoDB CRUD with the official Node.js driver.
// Run `mongod` first, then `npm install`, then `node app.js`.
const { MongoClient } = require('mongodb');
const addProducts = require('./add');
const readProducts = require('./read');
const updateProduct = require('./update');
const removeProduct = require('./remove');

// MongoDB's default local URI. MongoClient manages the connection to MongoDB.
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect(); // Asynchronous network operation; await pauses until connected.
    const db = client.db('mydb'); // MongoDB creates the DB lazily when data is first stored.
    const products = db.collection('products');

    // Workshop requirement: clear products before each execution so seed data is not duplicated.
    // drop() throws if the collection does not exist, so listCollections() is checked first.
    const exists = await db.listCollections({ name: 'products' }).hasNext();
    if (exists) await products.drop();

    await addProducts(products);
    console.log('\nAfter CREATE:');
    await readProducts(products);
    await updateProduct(products);
    console.log('\nAfter UPDATE:');
    await readProducts(products);
    await removeProduct(products);
    console.log('\nAfter DELETE:');
    await readProducts(products);
  } catch (error) {
    console.error('Database operation failed:', error);
  } finally {
    // Always close the connection, even if an exception occurs.
    await client.close();
  }
}
main();
