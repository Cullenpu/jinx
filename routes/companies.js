"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// DB imports
const { mongoose } = require("../db/mongoose");
const { User } = require("../models/User");
const { Company } = require("../models/Company");
const { Posting } = require("../models/Posting");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs


const router = express.Router();

router.post('/', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	// Create a new company
	const company = new Company({
		name: req.body.name,
	})

	// Save restaurant to the database
	company.save().then((result) => {
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
	// Add code here
	// check mongoose connection
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  

	// Get restaurants
	Company.find().then((company) => {
		res.send({ company })
	})
	.catch((error) => {
		if (isMongoError(error)) {
			res.status(500).send('Internal server error')
		} else {
			res.status(404).send('Not Found')
		}
	})
})

router.get('/:id', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Company.findById({ _id: req.params.id }).then((company) => {
		if (!company) {
			res.status(404).send('Company Not Found')
		} else {   
			res.send(company)
		}
	})
})

router.delete('/:id', (req, res) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	} 

	Company.findByIdAndDelete({ _id: req.params.id }).then((company) => {
		if (!company) {
			res.status(404).send('Company Not Found')
		} else {   
			res.send(company)
		}
	})
})

module.exports = router;