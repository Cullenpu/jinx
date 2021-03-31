"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const websiteLogo = require( 'website-logo' )

// DB imports
const { mongoose } = require("../db/mongoose");

const router = express.Router();
const { Posting } = require("../models/Posting");
const { Company } = require("../models/Company");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs

const { isMongoError, mongoChecker } = require("./utils");

mongoose.Promise = global.Promise;

//
// {
// 	"userId": "60620beb3ba0001bb7f6e0cd",
// 	"status": "https://windsorhuang.com/",
// }
//

router.post('/', mongoChecker, (req, res, next) => {
	const application = new Application({
    userId: req.body.userId,
    postingId: req.body.postingId,
    status: req.body.status,
  })

  application.save().then((result) => {
    res.send(result)
  }).catch((error) => {
    if (isMongoError(error)) {
      res.status(500).send('Internal server error')
    } else {
      res.status(400).send('Bad Request')
    }
  })
})

router.get('/', mongoChecker, (req, res) => {
	Posting.find().populate({ path: "companyId", model: Company })
    .exec((err,posting) => {
    if(err) throw err;
    if(posting) {
        res.send(posting)
    }
  })
})



module.exports = router;
