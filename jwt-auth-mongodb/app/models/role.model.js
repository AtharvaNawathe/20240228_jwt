// Import the Mongoose library for working with MongoDB
const mongoose = require("mongoose");

// Disable the strictQuery option to suppress a deprecation warning (as recommended)
mongoose.set('strictQuery', false);

// Define the Role model using Mongoose
const Role = mongoose.model(
  "Role",  // Model name (used for creating the collection in MongoDB)
  new mongoose.Schema({
    name: String  // Role name stored as a string
  })
);

// Export the Role model for use in other parts of the application
module.exports = Role;
