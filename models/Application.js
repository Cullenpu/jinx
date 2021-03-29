"use strict";

const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posting',
    required: true,
  },
  applicationStatus: {
    enum: [ "Wishlist", "Applied", "Interviews", "Offer", "Rejected", null ],
  },
});

ApplicationSchema.set('timestamps', true);

const Application = mongoose.model("ApplicationSchema", ApplicationSchema);
module.exports = { Application };
