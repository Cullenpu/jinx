"use strict";

const mongoose = require("mongoose");

const ConnectionSchema = new mongoose.Schema({
  requesterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  followedId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

ConnectionSchema.set('timestamps', true);

const Connection = mongoose.model("ConnectionSchema", ConnectionSchema);
module.exports = { Connection };
