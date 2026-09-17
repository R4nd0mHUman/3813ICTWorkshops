import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

/*
 * AppModule is the root Angular module.
 *
 * declarations: Components owned by this NgModule.
 *
 * imports:
 * BrowserModule - functionality needed to run Angular in a browser.
 * FormsModule - enables template-driven forms and [(ngModel)].
 * HttpClientModule - provides HttpClient for requests to the Express API.
 * AppRoutingModule - defines navigation between application pages.
 *
 * bootstrap: Identifies AppComponent as the component Angular creates first.
 */
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}