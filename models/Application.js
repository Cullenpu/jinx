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
  companyLogo: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  referral: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  notes: {
    type: String,
    required: false,
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
