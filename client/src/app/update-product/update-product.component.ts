import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../product';

@Component({
  // Selector used to identify this component in HTML.
  selector: 'app-update-product',

  /*
   * Angular 22 treats components as standalone by default.
   * This component is declared inside AppModule, so it must explicitly be marked as non-standalone.
   */
  standalone: false,

  // HTML template used by this component.
  templateUrl: './update-product.component.html'
})
export class UpdateProductComponent implements OnInit {

  /*
   * Stores MongoDB's automatically generated _id.
   *
   * This is different from product.id:
   *
   * product.id = numerical ID used by the application
   * mongoId    = MongoDB ObjectId used to identify the document when making update/delete requests.
   */
  mongoId = '';

  /*
   * Product object used by the update form.
   *
   * The form fields are connected to these properties using [(ngModel)].
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
   * ActivatedRoute gives access to parameters from the current URL.
   * Router is used to navigate to another page.
   * ProductService handles HTTP requests to the Express API.
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) {}

  /*
   * ngOnInit() runs when the component is initialized.
   *
   * The route is expected to contain a MongoDB ID, for example:
   *
   * /update/68c...
   *
   * The ':id' value comes from the route defined in AppRoutingModule.
   */
  ngOnInit(): void {
    // Retrieve the 'id' parameter from the current URL.
    this.mongoId = this.route.snapshot.paramMap.get('id') ?? '';
  }

  /*
   * Sends the updated product to the Express PUT route.
   *
   * mongoId identifies WHICH MongoDB document should be updated.
   * product contains the NEW values for that document.
   */
  save(): void {
    this.service
      .updateProduct(this.mongoId, this.product)

      // After a successful update, return to the products page.
      .subscribe(() => this.router.navigate(['/products']));
  }
}