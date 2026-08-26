import { Component } from '@angular/core'; // Import Component to define the root (main) Angular component.
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet so the root component can display routed components.

@Component({
  selector: 'app-root', // HTML selector used
  imports: [RouterOutlet], // Import RouterOutlet because app.html uses <router-outlet>.

// Tell Angular which HTML and CSS files belongs to the root component.
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App { // Define the root App component.
  title = 'chat'; // Store the application title.
}