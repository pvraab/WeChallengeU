// Express server
require("dotenv").config();
var express = require("express");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Routes
require("./routes/apiUsersRoutes")(app);
require("./routes/apiChallengesRoutes")(app);
require("./routes/apiUserChallengesRoutes")(app);
require("./routes/apiChallengeDetailsRoutes")(app);
require("./routes/apiUserChallengeResultsRoutes")(app);
require("./routes/apiUserChallengesViewRoutes")(app);
require("./routes/apiUserChallengeResultsViewRoutes")(app);
require("./routes/htmlRoutes")(app);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
var syncOptions = { force: false };
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
