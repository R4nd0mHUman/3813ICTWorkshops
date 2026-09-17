// UPDATE operation: updateOne(filter, update) changes the first matching document.
module.exports = async function updateProduct(products) {
  // $set changes only named fields; without $set, replacement semantics would be different.
  const result = await products.updateOne({ id: 2 }, { $set: { price: 34.95, units: 30 } });
  console.log(`Updated ${result.modifiedCount} product.`);
};
