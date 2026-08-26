module.exports = function (server) { // Export a function so server.js can give this module the HTTP server.
  const PORT = 3000; // Store the port number that the Node server will listen on.

// Start the HTTP server and listen for connections on port 3000, displaying a message once it's started.
  server.listen(PORT, function () { // server.listen = starts the Node server so it can accept network connections.
    console.log(`Server listening on http://localhost:${PORT}`);
  });
};