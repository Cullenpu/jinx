"use strict";

const mongoose = require("mongoose");

const PostingSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  link:  {
    type: String,
    required: [ true, 'A link is required' ],
  },
  location: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

PostingSchema.set('timestamps', true);

const Posting = mongoose.model("PostingSchema", PostingSchema);
module.exports = { Posting };
