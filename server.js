"use strict";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");

// DB imports
const { mongoose } = require("./db/mongoose");
const { ObjectID } = require("mongodb"); // To validate object IDs

// Routes
const users = require("./routes/users");
const companies = require("./routes/companies");
const posting = require("./routes/posting");
const applications = require("./routes/applications");

const app = express();

const env = process.env.NODE_ENV;
if (env !== "production") {
  // Enable CORS if in development, for React local development server to connect to the web server
  app.use(cors());
}

// body-parser: middleware for parsing parts of the request into a usable object (onto req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Parsing URL-encoded form data (from form POST requests)

mongoose.set("useFindAndModify", false); // For some deprecation issues

app.use(
  session({
    secret: process.env.SESSION_SECRET || "hardcoded secret", // make a SESSION_SECRET environment variable when deploying (for example, on heroku)
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60000,
      httpOnly: true,
    },
    // store the sessions on the database in production
    store:
      env === "production"
        ? MongoStore.create({
            mongoUrl:
              process.env.MONGODB_URI || "mongodb://localhost:27017/JinxAPI",
          })
        : null,
  })
);

/** Routes *******************************************************************/

app.use("/companies", companies);
app.use("/posting", posting);
app.use("/users", users);
app.use("/applications", applications);

/*****************************************************************************/

// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
