"use strict";

const express = require("express");

// DB imports
const { mongoose } = require("../db/mongoose");

const router = express.Router();
const { Connection } = require("../models/Connection");
const { User, Notification } = require("../models/User");
const { isMongoError, mongoChecker } = require("./utils");

mongoose.Promise = global.Promise;

// Get all the people this user follows and for each of them, gets 
// their feed items
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


module.exports = router;
