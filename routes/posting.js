"use strict";

const express = require("express");

const router = express.Router();
const { Posting } = require("../models/Posting");
const { Company } = require("../models/Company");

const { isMongoError, mongoChecker } = require("./utils");

router.post("/", mongoChecker, (req, res) => {
  // Create a new company
  const posting = new Posting({
    companyId: req.body.companyId,
    link: req.body.link,
    location: req.body.location,
    role: req.body.role,
  });

  // Save restaurant to the database
  posting
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

router.get("/", mongoChecker, (req, res) => {
  Posting.find()
    .populate({ path: "companyId", model: Company })
    .exec((err, posting) => {
      if (err) throw err;
      if (posting) {
        res.send(posting);
      }
    });
});

module.exports = router;
