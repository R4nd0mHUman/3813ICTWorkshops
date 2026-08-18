import { Component, signal } from '@angular/core'; // Import Component to create the Angular component.
import { Router, RouterOutlet, RouterLink } from '@angular/router'; // Import Router for navigation and routing features.

// Define this class as the main Angular component.
@Component({
  selector: 'app-root', // HTML tag used for the main application component.
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Import the routing features used in app.html.
  templateUrl: './app.html', // Connect the component to its HTML file.
  styleUrl: './app.css' // Connect the component to its CSS file.
})

// Create the main App component.
export class App {

  // Inject the Router so navigation can be used.
  constructor(private router: Router) {}

  // Runs when the Logout button is clicked.
  logout(): void {

    // Remove the current user's details from Local Storage.
    localStorage.removeItem('currentUser');

    // Redirect the user to the login page.
    this.router.navigate(['/login']);
  }
}