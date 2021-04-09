"use strict";

const express = require("express");

// DB imports
const { mongoose } = require("../db/mongoose");
const { ObjectID } = require("mongodb"); // To validate object IDs
const { Connection } = require("../models/Connection");
const { User } = require("../models/User");

const { isMongoError, mongoChecker } = require("./utils");

const router = express.Router();

mongoose.Promise = global.Promise;

// Follow a user
router.post("/", mongoChecker, (req, res) => {
  const connection = new Connection({
    requesterId: req.session.user,
    followedId: req.body.followedId,
  });

  connection
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      if (isMongoError(error)) {
        res.status(500).send("Internal server error");
      } else {
        res.status(400).send("Bad Request");
      }
    });
});

// Get all the people this user follows
router.get("/", mongoChecker, (req, res) => {
  Connection.find({ requesterId: req.session.user })
    .populate({ path: "requesterId", model: User })
    .populate({ path: "followedId", model: User })
    .then((connection) => {
      if (!connection) {
        res.status(404).send("App Not Found");
      } else {
        res.send(connection);
      }
    });
});

// Remove a connection from the current user
router.delete("/:id", mongoChecker, (req, res) => {
  Connection.deleteOne({
    requesterId: { $eq: ObjectID(req.session.user) },
    followedId: { $eq: ObjectID(req.params.id) },
  })
    .then((connection) => {
      if (connection.deletedCount == 0) {
        res.status(404).send("User not following");
      } else {
        res.status(202).send();
      }
    })
    .catch((err) => {
      console.log("error");
      res.status(404).send("User not following");
    });
});

router.get("/", mongoChecker, (req, res) => {
  Connection.find()
    .populate({ path: "requesterId", model: User })
    .populate({ path: "followedId", model: User })
    .exec((err, connection) => {
      if (err) throw err;
      if (connection) {
        res.send(connection);
      }
    });
});

// Delete all connections in db
router.delete("/", mongoChecker, (req, res) => {
  Connection.remove({}).then((Connection) => {
    if (!Connection) {
      res.status(404).send("Application Not Found");
    } else {
      res.send(Connection);
    }
  });
});

module.exports = router;
