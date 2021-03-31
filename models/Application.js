"use strict";

const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  postingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posting',
    required: false,
  },
  status: {
    type: String,
    required: true,
  },
});

ApplicationSchema.set('timestamps', true);

const Application = mongoose.model("ApplicationSchema", ApplicationSchema);
module.exports = { Application };
