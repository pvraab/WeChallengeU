var db = require("../models");

module.exports = function(app) {
  // Get all user challenges from the view
  app.get("/api/user_challenges_view", function(req, res) {
    db.user_challenges_view
      .findAll({
        attributes: [
          "challengeId",
          "challengeName",
          "userId",
          "firstName",
          "lastName",
          "prize"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Get user challenges by userId from the view
  app.get("/api/user_challenges_view/:id", function(req, res) {
    db.user_challenges_view
      .findAll({
        where: {
          userId: req.params.id
        },
        attributes: [
          "challengeId",
          "challengeName",
          "userId",
          "firstName",
          "lastName",
          "prize"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });

  // Get a user challenge by userId and challengeId from the view
  app.get("/api/user_challenges_view/:id/:cid", function(req, res) {
    db.user_challenges_view
      .findOne({
        where: {
          userId: req.params.id,
          challengeId: req.params.cid
        },
        attributes: [
          "challengeId",
          "challengeName",
          "userId",
          "firstName",
          "lastName",
          "prize"
        ]
      })
      .then(function(dbChallenges) {
        res.json(dbChallenges);
      });
  });
};
