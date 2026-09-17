import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/*
 * main.ts is the entry point of the Angular application.
 *
 * platformBrowserDynamic creates the Angular browser platform.
 *
 * bootstrapModule starts AppModule, which is the root NgModule for this application.
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((error: unknown) => console.error(error));