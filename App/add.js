// CREATE operation: insertMany adds several documents in one database call.
module.exports = async function addProducts(products) {
  const seedProducts = [
    { id: 1, name: 'Mechanical Keyboard', description: 'Compact mechanical keyboard', price: 89.95, units: 12, type: 'Peripheral' },
    { id: 2, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse', price: 39.50, units: 25, type: 'Peripheral' },
    { id: 3, name: 'USB-C Hub', description: 'Multi-port USB-C adapter', price: 54.99, units: 8, type: 'Accessory' }
  ];
  // id is the workshop's numerical product identifier; _id is MongoDB's own unique ObjectId.
  const result = await products.insertMany(seedProducts);
  console.log(`Inserted ${result.insertedCount} products.`);
};
