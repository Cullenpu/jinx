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
const { User } = require("../models/User");
const { Application } = require("../models/Application");
const { ObjectID } = require("mongodb"); // To validate object IDs

const { isMongoError, mongoChecker } = require("./utils");

mongoose.Promise = global.Promise;

//
// {
// 	"userId": "6064afaf0479d00f99790b69",
// 	"role": "Software Engineering Intern",
//  "status": "Wishlist"
// }
//

router.post('/', mongoChecker, (req, res, next) => {
	const application = new Application({
    userId: req.body.userId,
    company: req.body.company,
    role: req.body.role,
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

// Get all applications in db for user with id
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

// Get application in db with spp id
router.get('/single/:id', mongoChecker, (req, res) => {
  Application.findOne({_id: req.params.id}).populate({ path: "userId", model: User })
    .then((application) => {
      if (!application) {
        res.status(404).send("App Not Found");
      } else {
        res.send(application);
      }
    });
})

router.patch('/:id', mongoChecker, (req, res, next) => {
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
			Application.findOneAndUpdate({_id: req.params.id}, {$set: {... req.body, companyLogo: result }})
      .then((application) => {
        if (!application) {
          res.status(404).send("App Not Found");
        } else {
          res.send(application);
        }
      });
			})
  } catch (e) {
    next(e)
  }
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
