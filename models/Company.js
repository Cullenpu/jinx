"use strict";

const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

CompanySchema.set('timestamps', true);

const Company = mongoose.model("CompanySchema", CompanySchema);
module.exports = { Company };
