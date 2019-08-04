var db = require("../models");

module.exports = function(app) {
  // Get all challenge details
  app.get("/api/challenge/details", function(req, res) {
    db.challenge_details.findAll({}).then(function(dbChallenges) {
      res.json(dbChallenges);
    });
  });

  // Get all challenge details by challengeId
  app.get("/api/challenge/details/:id", function(req, res) {
    db.challenge_details
      .findAll({
        where: {
          challengeId: req.params.id
        }
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // POST route to create a new challenge detail
  app.post("/api/challenge/details", function(req, res) {
    db.challenge_details
      .create(req.body)
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // PUT route for updating challenge details
  app.put("/api/challenge/details", function(req, res) {
    db.challenge_details
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Delete a challenge detail by id
  app.delete("/api/challenge/details/:id", function(req, res) {
    db.challenge_details
      .destroy({ where: { id: req.params.id } })
      .then(function(dbChallenge) {
        res.json(dbChallenge);
      });
  });
};
