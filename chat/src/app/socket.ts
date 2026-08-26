import { Injectable } from '@angular/core'; // Import Injectable so Angular can create and inject this service.
import { io, Socket } from 'socket.io-client'; // Import Socket.IO's io function and Socket type for the client connection.
import { Observable } from 'rxjs'; // Import Observable so components can subscribe to incoming messages.

// Tell Angular that this class can be injected as a service, making one shared instance of this service avaliable throughout the application.
@Injectable({
  providedIn: 'root'
})

export class SocketService { // Handles all Socket.IO communication.
    private socket: Socket; // Store the Socket.IO client connection. Other classes shouldn't directly access this.

    constructor() { // Run when Angular creates the SocketService.
        this.socket = io('http://localhost:3000'); // Connect the Angular frontend to the Node Socket.IO server (backend).

        // Listen for a successful Socket.IO connection, printing a message confirming the connection and the unique ID assigned to the client.
        this.socket.on('connect', () => {
            console.log('Connected to Socket.IO server');
            console.log('Socket ID:', this.socket.id);
        });

        // Listen for errors while trying to connect to Socket.IO, printing the connection error to the browser console if there is one.
        this.socket.on('connect_error', (error) => {
            console.error('Socket.IO connection error:', error);
        });

        // Listen for the client becoming disconnected from the server, printing a message showing the Socket.IO ended connection.
        this.socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        });

    }

    // Create a method that sends a message from Angular to the Node server, printing the message sent for debugging.
    sendMessage(message: string): void {
        console.log('Sending message:', message);
        this.socket.emit('chat message', message); // emit = send an event. 'chat message' is the event name, and message is the data being sent to the server.

    }

    // Create a method that allows the Chat component to receive messages.
    getMessages(): Observable<string> { // Observable allows the application to receive values over time.
        return new Observable((observer) => { // Return an Observable that can provide new messages whenever they arrive.

        // Listen for "chat message" events coming from the Socket.IO server, printing the recieved message and sending it to anything in the Observable.
        this.socket.on('chat message', (message: string) => {
            console.log('Received message:', message);
            observer.next(message);
            });

        });
    }

}