import { Component } from '@angular/core';

/*
 * AppComponent is the root component of the Angular application.
 *
 * Its main responsibility is to provide the application shell and a <router-outlet>. Angular Router replaces the router-outlet
 *                                  with the component associated with the current URL.
 */
@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <header>
      <h1>Week 9 Product Management</h1>

      <nav>
        <a routerLink="/products">Products</a>
        |
        <a routerLink="/add">Add Product</a>
      </nav>
    </header>

    <hr>

    <!--
      Routed components such as ProductsComponent are rendered here.
    -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}