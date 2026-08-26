import { ChangeDetectorRef, Component, OnInit } from '@angular/core'; // Manually tells Angular to update the UI after a socket event.
                                                              // B-but, ChangeDetectorRef-!! We can't do this, we're both girls-- mmmph~~!?
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular features such as *ngFor.
import { FormsModule } from '@angular/forms'; // Import FormsModule so [(ngModel)] can be used with the text input.
import { SocketService } from '../socket'; // Import the custom SocketService that communicates with the Node server.

@Component({
  selector: 'app-chat', // HTML element name
  imports: [CommonModule, FormsModule], // Angular modules required

// Tell Angular which HTML file and CSS file contains the component's template/styles.
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})

// Define the Chat component and implement Angular's OnInit lifecycle interface.
export class Chat implements OnInit {
  message = ''; // Store the text currently entered in the input box.
  messages: string[] = []; // Store all chat messages that have been received.

  constructor( /// needed dependencies
    private socketService: SocketService, // SocketService so this component can send and receive messages.
    private changeDetectorRef: ChangeDetectorRef // ChangeDetectorRef so Angular can be told to refresh the UI.
  ) {}

  ngOnInit(): void { // Run this method when Angular has finished creating the component. ngOnInit() runs when the component is initialized.

    // Subscribe to messages coming from the SocketService and print the message recieved before adding it to the array and checking for UI changes.
    this.socketService.getMessages().subscribe((message: string) => { // subscribe = Whenever a new value arrives, run this code.
      console.log('Chat component received:', message);
      this.messages = [...this.messages, message]; // old messages + new messages
      this.changeDetectorRef.detectChanges();
    });

  }


  sendMessage(): void { // Create the method called when the user clicks Send.
    if (this.message.trim()) { // Only send the message if it contains something other than whitespace. trim() removes whitespace.
      // Send the current input value through the SocketService and clear the input box after sending the message.
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }

}