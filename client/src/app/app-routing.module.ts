import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components used by the application's routes.
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

// Defines the URL paths and the component displayed for each path.
const routes: Routes = [

  // Displays the list of products.
  { path: 'products', component: ProductsComponent },

  // Displays the form for adding a new product.
  { path: 'add', component: AddProductComponent },

  // Displays the form for updating a product.
  // ':id' is a route parameter containing the product's ID.
  { path: 'update/:id', component: UpdateProductComponent },

  // Redirects the root URL to the products page.
  // 'full' ensures the redirect only occurs when the entire URL is empty.
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  // Registers the application's routes with Angular's router.
  imports: [RouterModule.forRoot(routes)],

  // Makes RouterModule available throughout the application.
  exports: [RouterModule]
})
export class AppRoutingModule {}