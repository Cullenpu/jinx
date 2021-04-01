"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const websiteLogo = require( 'website-logo' )

// DB imports
const { mongoose } = require("../db/mongoose");

const router = express.Router();
const { Posting } = require("../models/Posting");
const { Connection } = require("../models/Connection");
const { User } = require("../models/User");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs

const { isMongoError, mongoChecker } = require("./utils");

mongoose.Promise = global.Promise;

//
// {
// 	"requesterId": "6064afaf0479d00f99790b69",
// 	"followedId": "Software Engineering Intern",
//  "status": "Wishlist"
// }
//

router.post('/', mongoChecker, (req, res, next) => {
	const connection = new Connection({
    requesterId: req.body.requesterId,
    followedId: req.body.followedId,
  })

  connection.save().then((result) => {
    res.send(result)
  }).catch((error) => {
    if (isMongoError(error)) {
      res.status(500).send('Internal server error')
    } else {
      res.status(400).send('Bad Request')
    }
  })
})

// Get all the people this user follows
router.get('/:id', mongoChecker, (req, res) => {
  Connection.find({requesterId: req.params.id})
    .populate({ path: "requesterId", model: User })
    .populate({ path: "followedId", model: User })
    .then((connection) => {
      if (!connection) {
        res.status(404).send("App Not Found");
      } else {
        res.send(connection);
      }
    });
})

router.get('/', mongoChecker, (req, res) => {
  Connection.find()
    .populate({ path: "requesterId", model: User })
    .populate({ path: "followedId", model: User })
    .exec((err,connection) => {
    if(err) throw err;
    if(connection) {
        res.send(connection)
    }
  })
})

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
