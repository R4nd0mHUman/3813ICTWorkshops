import { Component } from '@angular/core'; // Import the Component decorator to create an Angular component.
import { RouterLink } from '@angular/router'; // Import RouterLink so links can navigate between pages without reloading the app.

// Define this class as an Angular component.
@Component({
  selector: 'app-home', // HTML tag used for this component.
  standalone: true,
  imports: [RouterLink], // Import RouterLink so it can be used in the Home HTML template.

  // Connect the component to its HTML and CSS files.
  templateUrl: './home.html',
  styleUrl: './home.css'
})

// Create the Home component.
export class Home {}