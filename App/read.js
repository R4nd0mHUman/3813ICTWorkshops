// READ operation: find({}) matches every document. toArray() resolves the cursor into an array.
module.exports = async function readProducts(products) {
  const rows = await products.find({}).toArray();
  console.table(rows);
  return rows;
};
