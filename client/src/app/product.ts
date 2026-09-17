// TypeScript interface that describes the structure of a Product object.
// This provides compile-time type checking for product data.
export interface Product {

  // Optional MongoDB document ID.
  // The "?" means this property may be undefined.
  _id?: string;

  // Product ID.
  id: number;

  // Product name.
  name: string;

  // Description of the product.
  description: string;

  // Product price.
  price: number;

  // Number of units available.
  units: number;

  // Optional product type/category.
  // This property does not have to be provided.
  type?: string;
}