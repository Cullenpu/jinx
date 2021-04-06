"use strict";

const express = require("express");

const { User } = require("../models/User");

const { isMongoError, mongoChecker, authenticate } = require("./utils");

const router = express.Router();

// to validate object IDs
const { ObjectID } = require("mongodb");
// const {mongoose} = require('./db/mongoose')
const log = console.log;

router.use(mongoChecker);

router.get("/check-session", (req, res) => {
  if (req.session.user) {
    res.send({
      id: req.session.user,
      email: req.session.email,
      name: req.session.name,
    });
  } else {
    req.status(401).send();
  }
});

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
      req.session.name = user.name;
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

// Edit specific user
router.patch("/edit/:id", (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }
  // // check mongoose connection established.
  // if (mongoose.connection.readyState !== 1) {
  //   log('Issue with mongoose connection')
  //   res.status(500).send('Internal server error')
  //   return;
  // }

  const fieldsToUpdate = {};
  req.body.map((change) => {
    const propertyToChange = change.path.substr(1); // getting rid of the '/' character
    fieldsToUpdate[propertyToChange] = change.value;
  });

  User.findOneAndUpdate(
    { _id: id },
    { $set: fieldsToUpdate },
    { new: true, useFindAndModify: false }
  )
    .then((user) => {
      if (!user) {
        res.status(404).send("Resource not found");
      } else {
        res.send(user);
      }
    })
    .catch((error) => {
      log(error);
      if (isMongoError(error)) {
        res.status(500).send("Internal server error");
      } else {
        res.status(400).send("Bad Request");
      }
    });
});

// Delete the user from DB by id
router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    return;
  }

  User.findByIdAndRemove(id)
    .then((user) => {
      if (!user) {
        res.status(404).send();
      } else {
        res.send(user);
      }
    })
    .catch((error) => {
      log(error);
      res.status(500).send(); // server error, could not delete.
    });
});

module.exports = router;
