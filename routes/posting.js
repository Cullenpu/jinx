"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// DB imports
const { mongoose } = require("../db/mongoose");

const router = express.Router();
const { User } = require("../models/User");
const { Posting } = require("../models/Posting");
const { Company } = require("../models/Company");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs

function isMongoError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

router.post('/', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	// Create a new company
	const posting = new Posting({
    companyId: req.body.companyId,
    link: req.body.link,
    location: req.body.location,
    role: req.body.role
  })

	// Save restaurant to the database
	posting.save().then((result) => {
		res.send(result)
	}).catch((error) => {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			res.status(400).send('Bad Request')
		}
	})
})

router.get('/', (req, res) => {
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	Posting.find().populate({ path: "companyId", model: Company })
    .exec((err,posting) => {
    if(err) throw err;
    if(posting) {
        res.send(posting)
    }
  })
})



module.exports = router;