module.exports = function (io) { // Export a function so server.js can give this module the Socket.IO server object.

// Listen for a new client connecting to the Socket.IO server, displaying a message in the console when this happens.
  io.on('connection', function (socket) {
    console.log('A client connected');

// Listen for a message called "chat message" sent by this client, displaying the message in the console and sending it to every connected client.
    socket.on('chat message', function (message) {
      console.log('Message received:', message); // socket.on = Listen for something coming from this particular client.
      io.emit('chat message', message); // io.emit = Send something to all connected clients.
    });

// Listen for this client disconnecting from the server, displaying a message in the console when this happens.
    socket.on('disconnect', function () {
      console.log('A client disconnected');
    });
  });
};