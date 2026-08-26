import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'; // Import Angular's ApplicationConfig type and browser error listener provider.
import { provideRouter } from '@angular/router'; // Import the provider that enables Angular routing.
import { routes } from './app.routes'; // Import the application's route definitions.

export const appConfig: ApplicationConfig = { // Create the configuration used to bootstrap the Angular application.
  providers: [
    provideBrowserGlobalErrorListeners(), // Enable Angular's global browser error listeners.
    provideRouter(routes) // Enable Angular routing using the routes defined in app.routes.ts.
  ]
};