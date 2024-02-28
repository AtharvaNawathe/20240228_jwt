// Import necessary modules and middleware


// Export a function that sets up authentication-related routes on the given Express app
module.exports = function(app) {
  // Middleware to handle CORS headers for all routes
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Route for user registration (signup)
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,  // Middleware to check if username or email is already in use
      verifySignUp.checkRolesExisted  // Middleware to check if specified roles exist
    ],
    controller.signup  // Controller function handling the signup logic
  );

  // Route for user authentication (signin)
  app.post("/api/auth/signin", controller.signin);  // Controller function handling the signin logic
};
