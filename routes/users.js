"use strict";

const express = require("express");

const { User } = require("../models/User");

const { isMongoError, mongoChecker, authenticate } = require("./utils");

const router = express.Router();

router.use(mongoChecker);

// User login
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findByEmailPassword(email, password)
    .then((user) => {
      // Add the user's id to the session.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.email = user.email;
      res.send({ id: user._id, email: user.email, name: user.name });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

// User logout
router.get("/logout", (req, res) => {
  // Remove the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

// User signup
router.post("/", (req, res) => {
  // Create a new user
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    role: req.body.role,
    phone: req.body.phone,
  });

  newUser
    .save()
    .then(() => {
      res.send(newUser);
    })
    .catch((error) => {
      if (isMongoError(error)) {
        res.status(500).send("Internal server error");
      } else {
        res.status(400).send("Bad Request");
      }
    });
});

// Get all users
router.get("/", (req, res) => {
  res.send({ user: req.session.user });
});

// Get all users
router.post("/all", authenticate, (req, res) => {
  User.find()
    .then((user) => {
      res.send({ user });
    })
    .catch((error) => {
      if (isMongoError(error)) {
        res.status(500).send("Internal server error");
      } else {
        res.status(404).send("Not Found");
      }
    });
});

module.exports = router;
