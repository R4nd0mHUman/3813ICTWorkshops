import { Component } from '@angular/core'; // Import the Component decorator to create an Angular component.
import { CommonModule } from '@angular/common'; // Import CommonModule for common Angular features such as *ngIf.
import { FormsModule } from '@angular/forms'; // Import FormsModule so to use ngModel with the login form.
import { Router } from '@angular/router'; // Import Router to navigate between pages.
import { HttpClient } from '@angular/common/http'; // Import HttpClient to send the login details to the Node.js server.

// Define this class as an Angular component.
@Component({
  selector: 'app-login', // HTML tag used for this component.
  standalone: true,
  imports: [FormsModule, CommonModule], // Modules needed by the login page.

  // Connect the component to its HTML and file.
  templateUrl: './login.html',
  styleUrl: './login.css',
})

// Create the Login component.
export class Login {

  // Store the email and password entered by the user.
  loginModel = {
    email: '',
    password: ''
  };

  // Store an error message to display if login fails.
  errorMessage = '';

  // Inject the Router and HttpClient so they can be used.
  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  // This function runs when the user submits the login form.
  login(): void {

    // Create an object containing the email and password from the form.
    const loginDetails = {
      email: this.loginModel.email,
      password: this.loginModel.password
    };

    // Send the login details to the Node.js server using a POST request.
    this.http.post<any>(
      // Send the request to the server's authentication route and send the email + password as the request.
      'http://localhost:3000/api/auth', loginDetails

    // Subscribe to receive the response from the server.
    ).subscribe({
      next: (response) => { // Runs when the server successfully responds.

        // Check whether the server said the login was valid.
        if (response.valid) {

          // Clear any previous error message.
          this.errorMessage = '';

          // Store the logged-in user's details in Local Storage.
          localStorage.setItem(
            'currentUser',
            JSON.stringify(response)
          );
          // JSON.stringify converts the user object into a string.

          // Display a success message in the browser console and navigate the user to their profile.
          console.log('Login successful');
          this.router.navigate(['/profile']);

        // If the server says the login was not valid, display an error message.
        } else {
          this.errorMessage = 'Incorrect email or password';

        }
      },

      // This runs if there is a problem communicating with the server.
      error: (error) => {

        // Display the server error in the browser console.
        console.error(error);
        this.errorMessage = 'Unable to connect to server';

      }

    });
  }
}