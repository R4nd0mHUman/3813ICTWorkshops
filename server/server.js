
const express = require('express'); // Import the Express library so the server can be created.
const cors = require('cors'); // Import CORS so Angular can communicate with the Node.js server.
const app = express(); // Create an Express application.
const PORT = 3000; // Set the port number that the server will run on.

// Enable CORS so requests from the Angular frontend are allowed.
app.use(cors());

// Allow the server to receive JSON data in requests.
app.use(express.json());

// Create a User class to define the structure of each user.
class User {
    constructor(username, birthdate, age, email, password, valid) { // Recieves all the user's information
        // Store this stuff in the user object.
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

// Create an array containing the three users.
const users = [

// Create the user using the User class.
    new User(
        // Set the user's username, birthdate, age, email, and password.
        "John Smith",
        "2000-05-15",
        26,
        "john@gmail.com",
        "password123",
        true // Set the user as valid.
    ),

    // Same as above ^
    new User(
        "Jane Doe",
        "1999-10-20",
        26,
        "jane@gmail.com",
        "password456",
        true
    ),

    new User(

        "Bob Brown",
        "2001-03-10",
        25,
        "bob@gmail.com",
        "password789",
        true
    )
];

// Create a POST route to handle the login requests from Angular.
app.post('/api/auth', (req, res) => {

// Get the email and password sent from the Angular frontend.
    const { email, password } = req.body;

// Search the users array for a user with matching email and password.
    const user = users.find(
        user => user.email === email && user.password === password
    );

// Check if a matching user was found.
    if (user) {

// Send the user's profile information back to Angular as JSON.
        res.json({

// Send the username but not the password, the birthdate, age, and email
            username: user.username,
            birthdate: user.birthdate,
            age: user.age,
            email: user.email,
            valid: true // Tell Angular that the login was successful.
        });

// If no matching user was found, tell Angular the login was unsuccessful because the credentials did not match.
    } else {
        res.json({valid: false});
    }
});

// Start the server and listen for requests on port 3000.
app.listen(PORT, () => {

// Display a message in the terminal when the server starts successfully.
    console.log(`Server running on http://localhost:${PORT}`);
});
