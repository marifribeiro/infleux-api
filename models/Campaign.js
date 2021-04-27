const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is a required field"],
    unique: true,
    trim: true,
  },
  description: String,
  bid: {
    type: Number,
    required: [true, "Bid is a required field"],
  },
  conversionType: {
    type: String,
    required: [true, "Conversion type is a required field"],
    match: [
      /^CP[C?|M?|I?]+$/gm,
      "This is an invalid value for Conversion Type",
    ],
  },
  country: {
    type: String,
    required: [true, "Country is a required field"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Campaign", CampaignSchema);
