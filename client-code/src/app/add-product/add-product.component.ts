import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
@Component({ selector: 'app-add-product', templateUrl: './add-product.component.html' })
export class AddProductComponent {
  product: Product = { id: 0, name: '', description: '', price: 0, units: 0, type: '' };
  constructor(private service: ProductService, private router: Router) {}
  save(): void { this.service.addProduct(this.product).subscribe(() => this.router.navigate(['/products'])); }
}
