import { Routes } from '@angular/router'; // Import Routes to define the application's routes.
import { Home } from './home/home'; // Import the Home component.
import { Login } from './login/login'; // Import the Login component.
import { Profile } from './profile/profile'; // Import the Profile component.
import { authGuard } from './auth-guard'; // Import the AuthGuard to protect the profile page.

// Define the routes used by the application.
export const routes: Routes = [

  // Route for the home page.
  {
    path: '', // Empty path represents the home page.
    component: Home, // Display the Home component.
    title: 'Home' // Set the browser page title to Home.
  },

  // Route for the login page.
  {
    path: 'login',
    component: Login,
    title: 'Login'
  },

  // Route for the profile page.
  {
    path: 'profile',
    component: Profile,
    title: 'Profile',

    // Run the AuthGuard before allowing access to the profile page.
    canActivate: [authGuard]
  }

];