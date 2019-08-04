// We need to include the path package to get the correct file path
// for our html routes
var path = require("path");

module.exports = function(app) {
  // Provide HTML GET routes for serving up app pages
  // from the ../public path
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/users", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/users.html"));
  });
  app.get("/challenges", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/challenges.html"));
  });
  app.get("/user/select/challenge", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userSelectChallenge.html"));
  });
  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });
  app.get("/main/select", function(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/mainUserSelectChallenge.html")
    );
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
