"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoStore = require("connect-mongo");

// DB imports
const { mongoose } = require("./db/mongoose");
const { User } = require("./models/User");
const { ObjectID } = require("mongodb"); // To validate object IDs

const env = process.env.NODE_ENV;

const USE_TEST_USER = env !== "production" && process.env.TEST_USER_ON; // Option to turn on the test user
const TEST_USER_ID = "";
const TEST_USER_EMAIL = "";

const app = express();
if (env !== "production") {
  // Enable CORS if in development, for React local development server to connect to the web server
  app.use(cors());
}

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded form data (from form POST requests)

mongoose.set("useFindAndModify", false); // For some deprecation issues

function isMongoError(error) {
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

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
  if (env !== "production" && USE_TEST_USER) req.session.user = TEST_USER_ID; // test user on development. (remember to run `TEST_USER_ON=true node server.js` if you want to use this user.)

  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

/** Routes *******************************************************************/

// Add routes here

/*****************************************************************************/

// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
