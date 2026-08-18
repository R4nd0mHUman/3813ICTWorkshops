import { Component, OnInit } from '@angular/core'; // Import Component to create the Angular component and OnInit for ngOnInit().
import { FormsModule } from '@angular/forms'; // Import FormsModule to use ngModel with the profile form.
import { Router } from '@angular/router'; // Import Router to navigate between pages.

// Define this class as an Angular component.
@Component({
  selector: 'app-profile', // HTML tag used for this component.
  standalone: true,
  imports: [FormsModule], // Module needed for the profile form.

  // Connect the component to its HTML and CSS files.
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})

// Create the Profile component and allow it to use ngOnInit().
export class Profile implements OnInit {

  // Store the current user's details.
  user: any = {};

  // Inject the Router so that this can actually navigate between things.
  constructor(private router: Router) {}

  // Runs when the profile component loads.
  ngOnInit(): void {

    // Get the current user's details from Local Storage.
    const storedUser = localStorage.getItem('currentUser');

    // Check if a logged-in user was found in Local Storage.
    if (storedUser) {

      // Convert the stored string back into a JavaScript object.
      this.user = JSON.parse(storedUser);

    // If no logged-in user was found, redirect the user to the login page.
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Runs when the user submits the profile form.
  saveProfile(): void {

    // Save the updated user details back to Local Storage.
    localStorage.setItem(
      'currentUser',
      JSON.stringify(this.user)
    );
    // JSON.stringify converts the user object into a string.

    alert('Profile updated successfully');
  }
}