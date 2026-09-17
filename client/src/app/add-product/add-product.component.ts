import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

/*
 * AddProductComponent provides the form used to create a product.
 */
@Component({
  selector: 'app-add-product',

  // This component belongs to AppModule rather than operating as an
  // Angular standalone component.
  standalone: false,

  templateUrl: './add-product.component.html'
})
export class AddProductComponent {

  /*
   * This object is bound to the HTML form using [(ngModel)].
   *
   * id is the workshop's numerical product identifier.
   * It is separate from MongoDB's automatically generated _id.
   */
  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    units: 0,
    type: ''
  };

  /*
   * ProductService communicates with Express.
   * Router lets us navigate to another Angular page after adding.
   */
  constructor(
    private service: ProductService,
    private router: Router
  ) {}

  /*
   * POST the product to the Express API.
   * Only after the asynchronous request succeeds does it navigate back to /products.
   */
  save(): void {
    this.service
      .addProduct(this.product)
      .subscribe(() => this.router.navigate(['/products']));
  }
}