import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core'; // Import Angular's application configuration tools.
import { provideRouter } from '@angular/router'; // Import the router so Angular can use the application routes.
import { provideHttpClient } from '@angular/common/http'; // Import HttpClient to communicate with the Node.js server.
import { routes } from './app.routes'; // Import the routes created for the application.

// Create the main configuration for the Angular application.
export const appConfig: ApplicationConfig = {

  // Add the services that the application will use.
  providers: [
    provideBrowserGlobalErrorListeners(), // Listen for errors that happen in the browser.
    provideRouter(routes), // Enable routing using the routes from app.routes.ts.
    provideHttpClient() // Enable HttpClient so Angular can send HTTP requests.
  ]
};