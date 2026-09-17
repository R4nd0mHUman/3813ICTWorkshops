import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product';

/*
 * Makes ProductService available throughout the application.
 *
 * providedIn: 'root' means Angular creates a single shared instance of this service that can be injected into components.
 */
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*
   * Base URL for the Express API.
   *
   * The individual methods add the appropriate HTTP operation to this URL.
   */
  private readonly api = 'http://localhost:3000/api/products';

  /*
   * HttpClient is used to send HTTP requests to the Express backend.
   */
  constructor(private http: HttpClient) {}

  /*
   * Retrieves all products from the Express API.
   *
   * Observable represents the asynchronous HTTP response.
   * Components can subscribe to the Observable to receive the data.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.api);
  }

  /*
   * Sends a new product to the Express API.
   *
   * POST is used to create a new product.
   */
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.api, product);
  }

  /*
   * Updates an existing product.
   *
   * The MongoDB ID is added to the URL to identify which product should be updated.
   *
   * PUT is used to update the existing product.
   */
  updateProduct(
    mongoId: string,
    product: Product
  ): Observable<Product> {
    return this.http.put<Product>(
      `${this.api}/${mongoId}`,
      product
    );
  }

  /*
   * Removes an existing product.
   *
   * The MongoDB ID identifies which product should be deleted.
   *
   * DELETE is used to remove the product from the database.
   */
  removeProduct(mongoId: string): Observable<object> {
    return this.http.delete(`${this.api}/${mongoId}`);
  }
}