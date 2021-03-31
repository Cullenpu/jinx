"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const websiteLogo = require( 'website-logo' )

// DB imports
const { mongoose } = require("../db/mongoose");

const router = express.Router();
const { User } = require("../models/User");
const { Posting } = require("../models/Posting");
const { Company } = require("../models/Company");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs

mongoose.Promise = global.Promise;

function isMongoError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

//
// {
// 	"companyId": "60620beb3ba0001bb7f6e0cd",
// 	"link": "https://windsorhuang.com/",
// 	"location": "Vancouver",
// 	"role": "Software Engineer Intern"
// }
//

router.post('/', (req, res, next) => {
	// Add code here
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send('Internal server error')
		return;
	}  
	try {
		const promiseLogo = () => {
			return new Promise((resolve, reject) => {
				websiteLogo( req.body.link, function( error, info ) {
					if (info && info.openGraph[0].href) {
						resolve(info.openGraph[0].href);
					} else {
						resolve(null);
					}
				})
			})
		}
	
		const fetchLogo = async () => {
			const result = await promiseLogo();
			return result;
		}

		fetchLogo().then(function(result) {
			const posting = new Posting({
				companyId: req.body.companyId,
				link: req.body.link,
				companyLogo: result,
				location: req.body.location,
				role: req.body.role
			})
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
	} catch (e) {
		next(e);
	}


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