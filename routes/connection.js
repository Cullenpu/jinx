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

// Get all applications in db
router.get('/:id', mongoChecker, (req, res) => {
  Application.find({userId: req.params.id}).populate({ path: "userId", model: User })
    .then((application) => {
      if (!application) {
        res.status(404).send("App Not Found");
      } else {
        res.send(application);
      }
    });
})

router.get('/', mongoChecker, (req, res) => {
	Application.find().populate({ path: "userId", model: User })
    .exec((err,application) => {
    if(err) throw err;
    if(application) {
        res.send(application)
    }
  })
})

// Delete all applications in db
router.delete("/", mongoChecker, (req, res) => {
  Application.remove({}).then((application) => {
    if (!application) {
      res.status(404).send("Application Not Found");
    } else {
      res.send(application);
    }
  });
});



module.exports = router;
