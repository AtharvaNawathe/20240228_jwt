// Import necessary modules and middleware


// Export a function that sets up user-related routes on the given Express app
module.exports = function(app) {
  // Middleware to handle CORS headers for all routes
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Route for accessing public content
  app.get("/api/test/all", controller.allAccess);

  // Route for accessing user-specific content
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // Route for accessing content available to moderators
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],  // Middleware to check if the user has the 'moderator' role
    controller.moderatorBoard
  );

  // Route for accessing content available to administrators
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],  // Middleware to check if the user has the 'admin' role
    controller.adminBoard
  );
};
