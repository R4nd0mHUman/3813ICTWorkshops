import { bootstrapApplication } from '@angular/platform-browser'; // Imports Angular's function for starting/bootstrapping the application.
import { appConfig } from './app/app.config'; // Imports your application's configuration settings.
import { App } from './app/app'; // Imports your main/root App component.

bootstrapApplication(App, appConfig) // Starts the Angular application using App as the root component and appConfig as its configuration.
  .catch((err) => console.error(err)); // If something goes wrong while starting the application, catch the error and print it to the browser's console.