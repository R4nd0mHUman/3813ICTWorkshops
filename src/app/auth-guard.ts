import { CanActivateFn, Router } from '@angular/router'; // Import tools needed to create the route guard and redirect users.
import { inject } from '@angular/core'; // Import inject to access the Router inside the guard.

// Create a guard that controls access to protected routes.
export const authGuard: CanActivateFn = () => {

  // Get access to the Angular Router.
  const router = inject(Router);

  // Check Local Storage for a currently logged-in user.
  const currentUser = localStorage.getItem('currentUser');

  // Check if a current user exists, allowing access to the page if so.
  if (currentUser) {
    return true;
  }

  // Redirect users who are not logged in to the login page.
  return router.createUrlTree(['/login']);
};