const express = require('express'); // Import Express to create the Node web server application.
const cors = require('cors'); // Import CORS so requests from the Angular frontend are allowed.
const http = require('http'); // Import Node's HTTP module so Socket.IO can run on an HTTP server.
const setupSockets = require('./sockets'); // Import the function that contains the Socket.IO connection logic.
const startServer = require('./listen'); // Import the function that starts the server listening on port 3000.

const app = express(); // Create an Express application instance.
app.use(cors()); // Enable CORS for the Express application.
const server = http.createServer(app); // Create a Node HTTP server using the Express application.

// Create a Socket.IO server attached to the HTTP server.
const io = require('socket.io')(server, { // io: the Socket.IO server instance used to manage all connected clients.
    cors: { // Configure Socket.IO's Cross-Origin Resource Sharing (CORS) settings.
      origin: 'http://localhost:4200', // Specifies which website is allowed to connect to the Socket.IO server. Only allow the frontend) to connect.
      methods: ['GET', 'POST'] // Allow GET and POST requests for the Socket.IO connection.
  }
});

setupSockets(io); // Pass the Socket.IO object to sockets.js so it can handle connections and messages.
startServer(server); // Pass the HTTP server to listen.js so it can start listening on port 3000.