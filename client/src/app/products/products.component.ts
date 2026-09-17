import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';

/*
 * ProductsComponent displays all products stored in MongoDB.
 *
 * It obtains the data through ProductService rather than accessing HttpClient or MongoDB directly.
 *      This keeps HTTP/database communication separate from the user-interface component.
 */
@Component({
  selector: 'app-products',

  // Angular 22 treats components as standalone by default.
  // This workshop uses AppModule, so the component must explicitly opt out of standalone mode.
  standalone: false,

  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  // Stores the products returned by the Express API.
  products: Product[] = [];

  /*
   * Angular's dependency-injection system supplies ProductService.
   * "private" also creates a class property called productService.
   */
  constructor(
    private productService: ProductService,
      private changeDetectorRef: ChangeDetectorRef
    ) {}

  /*
   * ngOnInit is an Angular lifecycle hook.
   * It executes after Angular creates the component.
   *
   * Loading products here means the list is populated when the user opens the Products page.
   */
  ngOnInit(): void {
    this.load();
  }

  /*
   * Requests all products from the backend.
   *
   * HttpClient returns an Observable, so subscribe() is used to receive the asynchronous HTTP response.
   */
  load(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('PRODUCTS RECEIVED:', data);

        this.products = data;

        // Tell Angular that the component data has changed so the HTML is immediately updated.
        this.changeDetectorRef.detectChanges();
      },
      error: (error) => {
        console.error('PRODUCT REQUEST FAILED:', error);
      }
    });
  }

  /*
   * Deletes a product using MongoDB's _id.
   *
   * The id is optional because MongoDB generates _id and the Product interface therefore permits it to initially be undefined.
   */
  remove(id?: string): void {
    if (id) {
      this.productService
        .removeProduct(id)
        .subscribe(() => this.load());
    }
  }
}