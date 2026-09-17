import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
@Component({ selector: 'app-products', templateUrl: './products.component.html' })
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  ngOnInit(): void { this.load(); } // Angular lifecycle hook called after component creation.
  load(): void { this.productService.getProducts().subscribe(data => this.products = data); }
  remove(id?: string): void { if (id) this.productService.removeProduct(id).subscribe(() => this.load()); }
}
