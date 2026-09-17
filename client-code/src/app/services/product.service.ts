import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly api = 'http://localhost:3000/api/products';
  constructor(private http: HttpClient) {}
  // Observable represents the asynchronous HTTP response; components subscribe to receive it.
  getProducts(): Observable<Product[]> { return this.http.get<Product[]>(this.api); }
  addProduct(product: Product): Observable<Product> { return this.http.post<Product>(this.api, product); }
  updateProduct(mongoId: string, product: Product): Observable<Product> { return this.http.put<Product>(`${this.api}/${mongoId}`, product); }
  removeProduct(mongoId: string): Observable<object> { return this.http.delete(`${this.api}/${mongoId}`); }
}
