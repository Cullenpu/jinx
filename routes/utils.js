const { mongoose } = require("../db/mongoose");
const { User } = require("../models/User");

const env = process.env.NODE_ENV;

const USE_TEST_USER = env !== "production" && process.env.TEST_USER_ON; // Option to turn on the test user
const TEST_USER_ID = "";
const TEST_USER_EMAIL = "";

const isMongoError = (error) => {
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
};

const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState != 1) {
    console.log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  // if (env !== "production" && USE_TEST_USER) req.session.user = TEST_USER_ID; // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)
  // console.log("auenticate", req.session, req.session.user)
  // if (req.session.user) {
  //   console.log(req.session.user)
  //   User.findById(req.session.user)
  //     .then((user) => {
  //       if (user.role !== "admin") {
  //         res.status(401).send("Unauthorized");
  //       } else {
  //         req.user = user;
  //         next();
  //       }
  //     })
  //     .catch((error) => {
  //       res.status(401).send("Unauthorized");
  //     });
  // } else {
  //   res.status(401).send("Unauthorized");
  // }
  console.log(req)
  User.findById(req.body.id)
    .then((user) => {
      console.log(user)
      if (user.role !== "admin") {
        res.status(401).send("Unauthorized");
      } else {
        req.user = user;
        next();
      }
    })
    .catch((error) => {
      res.status(401).send("Unauthorized");
    });
};

module.exports = { isMongoError, mongoChecker, authenticate };
