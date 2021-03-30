"use strict";

const express = require("express");

// DB imports
const { mongoose } = require("../db/mongoose");
const { Company } = require("../models/Company");

const { isMongoError, mongoChecker } = require("./utils");

const router = express.Router();

router.post("/", mongoChecker, (req, res) => {
  // Create a new company
  const company = new Company({
    name: req.body.name,
  });

  // Save restaurant to the database
  company
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
  Company.find()
    .then((company) => {
      res.send({ company });
    })
    .catch((error) => {
      if (isMongoError(error)) {
        res.status(500).send("Internal server error");
      } else {
        res.status(404).send("Not Found");
      }
    });
});

router.get("/:id", mongoChecker, (req, res) => {
  Company.findById({ _id: req.params.id }).then((company) => {
    if (!company) {
      res.status(404).send("Company Not Found");
    } else {
      res.send(company);
    }
  });
});

router.delete("/:id", mongoChecker, (req, res) => {
  Company.findByIdAndDelete({ _id: req.params.id }).then((company) => {
    if (!company) {
      res.status(404).send("Company Not Found");
    } else {
      res.send(company);
    }
  });
});

module.exports = router;
