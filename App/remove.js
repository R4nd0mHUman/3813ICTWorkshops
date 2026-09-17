// DELETE operation: deleteOne removes the first document matching the filter.
module.exports = async function removeProduct(products) {
  const result = await products.deleteOne({ id: 3 });
  console.log(`Deleted ${result.deletedCount} product.`);
};
