// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Disable the strictQuery option to suppress a deprecation warning (as recommended)
mongoose.set('strictQuery', false);

// Define the User model using Mongoose
const User = mongoose.model(
  "User",  // Model name (used for creating the collection in MongoDB)
  new mongoose.Schema({
    username: String,  // User's username stored as a string
    email: String,     // User's email stored as a string
    password: String,  // User's password stored as a string
    roles: [           // User's roles stored as an array of MongoDB ObjectIds referencing the 'Role' model
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"      // Reference to the 'Role' model for populating roles when querying the user
      }
    ]
  })
);

// Export the User model for use in other parts of the application
module.exports = User;
