import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
@Component({ selector: 'app-update-product', templateUrl: './update-product.component.html' })
export class UpdateProductComponent {
  mongoId = this.route.snapshot.paramMap.get('id') ?? '';
  product: Product = { id: 0, name: '', description: '', price: 0, units: 0, type: '' };
  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService) {}
  // For this workshop the edit form accepts the updated product data and sends it with the URL _id.
  save(): void { this.service.updateProduct(this.mongoId, this.product).subscribe(() => this.router.navigate(['/products'])); }
}
